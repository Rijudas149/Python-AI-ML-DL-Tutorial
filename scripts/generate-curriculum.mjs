#!/usr/bin/env node
/**
 * Curriculum generator for Data Science Master learning platform.
 * Generates TypeScript module files and index.ts from embedded curriculum data.
 */
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { TOPIC_REFERENCES, TRACK_REFERENCES, ALL_REFERENCES, resolveTopicReferences } from './references-data.mjs';
import { deepenTopicContent } from './content-deepening.mjs';
import { expandTopicContent } from './content-expansion.mjs';
import { applySqlTeacherStyle } from './sql-teacher-style.mjs';
import { ADDITIONAL_MODULES } from './additional-curriculum.mjs';
import { MATH_MODULES } from './math-curriculum.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '..', 'src', 'data', 'curriculum');

// ─── Serialization helpers ───────────────────────────────────────────────────

function escapeBacktick(str) {
  return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function serializeValue(value, indent = 0) {
  const pad = '  '.repeat(indent);
  const padInner = '  '.repeat(indent + 1);
  if (value === undefined) return undefined;
  if (value === null) return 'null';
  if (typeof value === 'string') return `\`${escapeBacktick(value)}\``;
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (Array.isArray(value)) {
    if (value.length === 0) return '[]';
    return `[\n${value.map((v) => `${padInner}${serializeValue(v, indent + 1)}`).join(',\n')}\n${pad}]`;
  }
  const entries = Object.entries(value).filter(([, v]) => v !== undefined);
  return `{\n${entries
    .map(([k, v]) => {
      const key = /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(k) ? k : JSON.stringify(k);
      return `${padInner}${key}: ${serializeValue(v, indent + 1)}`;
    })
    .join(',\n')}\n${pad}}`;
}

function enrichSection(section, topic) {
  return applySqlTeacherStyle(section, topic);
}

function enrichTopic(topic) {
  const track = topic.track ?? 'python';
  const topicCtx = { ...topic, track };
  const expanded = expandTopicContent(topicCtx);
  const deepened = deepenTopicContent(expanded);
  const withSections = {
    ...deepened,
    sections: deepened.sections.map((s) => enrichSection(s, topicCtx)),
  };
  return {
    ...withSections,
    references: resolveTopicReferences(topic),
  };
}

function serializeTopic(topic, moduleId) {
  const full = enrichTopic({ ...topic, module: moduleId });
  return serializeValue(full, 2);
}

function generateModuleFile(mod) {
  const topicsStr = mod.topics.map((t) => serializeTopic(t, mod.id)).join(',\n');
  return `import type { Topic } from '../../types';

export const ${mod.exportName}: Topic[] = [
${topicsStr}
];
`;
}

function buildTopicSummary(topic, mod) {
  const full = enrichTopic({ ...topic, module: mod.id });
  return {
    id: full.id,
    title: full.title,
    description: full.description,
    level: full.level,
    module: mod.name,
    moduleId: mod.id,
    track: full.track ?? mod.track,
    estimatedMinutes: full.estimatedMinutes ?? 35,
    sectionCount: full.sections.length,
    exerciseCount: full.exercises.length,
    sectionIds: full.sections.map((s) => s.id),
    exerciseIds: full.exercises.map((e) => e.id),
  };
}

function generateCatalogFile(catalogModules) {
  const loaderEntries = catalogModules
    .map(
      (m) =>
        `  '${m.id}': () => import('./${m.fileName}').then((m) => m.${m.exportName}),`,
    )
    .join('\n');

  const moduleEntries = catalogModules
    .map(
      (m) => `  {
    id: '${m.id}',
    name: '${m.name.replace(/'/g, "\\'")}',
    track: '${m.track}',
    description: \`${escapeBacktick(m.description)}\`,
    topics: ${serializeValue(m.topics, 3)},
  }`,
    )
    .join(',\n');

  const allTopicEntries = catalogModules.flatMap((m) => m.topics);
  const topicByIdEntries = allTopicEntries
    .map((t) => `  '${t.id}': ${serializeValue(t, 2)}`)
    .join(',\n');

  return `import type { ModuleCatalog, TopicSummary } from '../../types';

export const moduleLoaders: Record<string, () => Promise<import('../../types').Topic[]>> = {
${loaderEntries}
};

export const modules: ModuleCatalog[] = [
${moduleEntries}
];

export const allTopics: TopicSummary[] = [
${allTopicEntries.map((t) => `  ${serializeValue(t, 1)}`).join(',\n')}
];

export const topicById: Record<string, TopicSummary> = {
${topicByIdEntries}
};
`;
}

function generateIndexFile() {
  return `export {
  modules,
  allTopics,
  topicById,
  moduleLoaders,
} from './catalog';

export {
  loadTopic,
  getCachedTopic,
  preloadTopic,
  preloadTopicModule,
  getAdjacentTopics,
  clearTopicCache,
} from './loadTopic';

import { allTopics } from './catalog';
import type { TopicSummary, Topic } from '../../types';

export function getTopicById(id: string): TopicSummary | undefined {
  return allTopics.find((t) => t.id === id);
}

export function searchTopics(query: string): TopicSummary[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return allTopics.filter(
    (t) =>
      t.title.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.module.toLowerCase().includes(q) ||
      t.level.toLowerCase().includes(q) ||
      t.track.toLowerCase().includes(q),
  );
}

export function getTopicsByTrack(track: Topic['track']): TopicSummary[] {
  return allTopics.filter((t) => t.track === track);
}

export function getTopicsByModule(moduleName: string): TopicSummary[] {
  return allTopics.filter((t) => t.module === moduleName);
}
`;
}

// ─── Content builders ──────────────────────────────────────────────────────────

function sec(id, title, content, extra = {}) {
  return { id, title, content, ...extra };
}

function ex(id, question, solution, difficulty = 'easy', hint) {
  return { id, question, solution, difficulty, ...(hint ? { hint } : {}) };
}

function topic(id, title, description, level, sections, exercises, opts = {}) {
  return {
    id,
    title,
    description,
    level,
    track: opts.track,
    sections,
    exercises,
    estimatedMinutes: opts.estimatedMinutes ?? 25,
    ...(opts.prerequisites ? { prerequisites: opts.prerequisites } : {}),
  };
}

const BASE_MODULES = [
  {
    num: 1,
    id: 'module-01',
    fileName: 'module01-python-fundamentals',
    exportName: 'module01Topics',
    name: 'Python Fundamentals',
    track: 'python',
    description: 'Master Python basics: variables, types, operators, strings, and the development environment.',
    topics: [
      topic('py-vars-types', 'Variables, Types & Literals', 'Learn how Python stores data, dynamic typing, and core built-in types.', 'beginner', [
        sec('vars-intro', 'What Are Variables?', 'In Python, a **variable** is a name bound to an object in memory. Unlike statically typed languages, Python uses **dynamic typing** — the type is determined at runtime based on the value assigned.\n\nNaming rules:\n- Start with a letter or underscore\n- Contain letters, digits, underscores\n- Case-sensitive (`age` ≠ `Age`)\n\nPython has several core types:\n- `int` — whole numbers\n- `float` — decimal numbers\n- `str` — text\n- `bool` — True/False\n- `NoneType` — absence of value', {
          example: 'x = 42\npi = 3.14159\nname = "Alice"\nactive = True\nnothing = None\n\nprint(type(x), type(pi), type(name))',
          output: "<class 'int'> <class 'float'> <class 'str'>",
          keyPoints: ['Variables are references to objects, not boxes', 'Python is dynamically typed', 'Use snake_case for variable names', 'None represents absence of value'],
        }),
        sec('literals', 'Literals & Type Conversion', '**Literals** are fixed values written directly in code. Python supports integer literals (`42`), float literals (`3.14`), string literals (`"hello"`), and boolean literals (`True`, `False`).\n\nUse built-in functions to convert between types:\n- `int()`, `float()`, `str()`, `bool()`\n\nBe careful: `bool("False")` is `True` because non-empty strings are truthy.', {
          example: 'a = int("42")\nb = float("3.14")\nc = str(100)\nd = bool(0)\ne = bool("hello")\nprint(a, b, c, d, e)',
          output: '42 3.14 100 False True',
          keyPoints: ['Literals represent fixed values in source code', 'Type conversion is explicit via built-in functions', 'Empty strings and zero are falsy', 'Non-empty strings convert to True in bool()'],
        }),
        sec('mutability', 'Mutable vs Immutable Types', 'Python types fall into two categories:\n\n**Immutable** (cannot change in place): `int`, `float`, `str`, `tuple`, `bool`, `frozenset`. Reassignment creates a new object.\n\n**Mutable** (can change in place): `list`, `dict`, `set`. Operations modify the same object.\n\nUse `id()` to inspect object identity.', {
          example: 's = "hello"\ns2 = s\ns = s + " world"\nprint(s2)  # original unchanged\n\nlst = [1, 2, 3]\nlst2 = lst\nlst.append(4)\nprint(lst2)  # same object modified',
          output: 'hello\n[1, 2, 3, 4]',
          keyPoints: ['Strings are immutable — concatenation creates new objects', 'Lists are mutable — methods modify in place', 'Assignment copies references, not values', 'Use id() to verify object identity'],
        }),
        sec('type-checking', 'Type Checking & Best Practices', 'Use `type()` for runtime type checks and `isinstance()` for inheritance-aware checks. Prefer `isinstance(x, int)` over `type(x) == int`.\n\nFor production code, use **type hints** (covered later) and tools like `mypy` for static analysis.', {
          pseudoCode: 'IF isinstance(value, expected_type):\n    PROCESS value\nELSE:\n    RAISE TypeError',
          example: 'def greet(name: str) -> str:\n    if not isinstance(name, str):\n        raise TypeError("name must be a string")\n    return f"Hello, {name}!"\n\nprint(greet("World"))',
          output: 'Hello, World!',
          keyPoints: ['Prefer isinstance() over type() == ', 'Type hints improve readability and tooling', 'Validate inputs at function boundaries', 'Dynamic typing does not mean no types'],
        }),
      ], [
        ex('ex-vars-1', 'Create variables for a product: name (str), price (float), quantity (int). Print total value (price * quantity).', 'name = "Laptop"\nprice = 999.99\nquantity = 3\ntotal = price * quantity\nprint(f"{name}: ${total:.2f}")', 'easy', 'Use f-strings for formatted output.'),
        ex('ex-vars-2', 'Convert the string "3.14" to float, multiply by 2, and print the result as an integer.', 'result = int(float("3.14") * 2)\nprint(result)', 'easy'),
      ], { estimatedMinutes: 20 }),
      topic('py-operators', 'Operators & Expressions', 'Arithmetic, comparison, logical, and assignment operators in Python.', 'beginner', [
        sec('arith', 'Arithmetic Operators', 'Python supports standard arithmetic:\n- `+` addition, `-` subtraction\n- `*` multiplication, `/` true division (always float)\n- `//` floor division, `%` modulo\n- `**` exponentiation\n\nOperator precedence follows PEMDAS. Use parentheses for clarity.', {
          example: 'a, b = 17, 5\nprint(a + b, a - b, a * b)\nprint(a / b, a // b, a % b, a ** 2)',
          output: '22 12 85\n3.4 3 2 289',
          keyPoints: ['Division always returns float in Python 3', 'Floor division truncates toward negative infinity', 'Modulo works with negative numbers', 'Use ** for powers, not ^'],
        }),
        sec('compare', 'Comparison & Logical Operators', 'Comparison operators return `bool`: `==`, `!=`, `<`, `>`, `<=`, `>=`. Chain comparisons: `1 < x < 10`.\n\nLogical: `and`, `or`, `not`. Short-circuit evaluation stops when result is determined.', {
          example: 'x = 7\nprint(3 < x < 10)\nprint(x > 5 and x < 8)\nprint(not (x == 7))',
          output: 'True\nTrue\nFalse',
          keyPoints: ['Chained comparisons are idiomatic Python', 'and/or use short-circuit evaluation', 'Use == for equality, is for identity', 'not has lower precedence than comparisons'],
        }),
        sec('assign', 'Assignment & Walrus Operator', 'Basic assignment: `x = 5`. Compound: `+=`, `-=`, `*=`, etc.\n\nThe **walrus operator** `:=` assigns and returns value in expressions (Python 3.8+).', {
          example: 'data = [1, 2, 3, 4, 5]\nif (n := len(data)) > 3:\n    print(f"List has {n} elements")',
          output: 'List has 5 elements',
          keyPoints: ['Compound operators modify and reassign', 'Walrus operator reduces duplication', 'Avoid overusing := — clarity first', 'Assignment is a statement, not expression (except :=)'],
        }),
        sec('bitwise', 'Bitwise & Membership Operators', 'Bitwise: `&`, `|`, `^`, `~`, `<<`, `>>` for integer manipulation.\n\nMembership: `in`, `not in` test containment in sequences.\n\nIdentity: `is`, `is not` compare object identity (same memory address).', {
          example: 'flags = 0b1010\nprint(bin(flags | 0b0100))\nprint(3 in [1, 2, 3])\na = [1, 2]\nb = a\nprint(a is b, a is not [])',
          output: '0b1110\nTrue\nTrue True',
          keyPoints: ['Use is only for None, True, False, and singleton checks', 'in works on any iterable', 'Bitwise ops useful for flags and permissions', 'Never use is for value comparison'],
        }),
      ], [
        ex('ex-op-1', 'Given a = 10 and b = 3, compute and print quotient (floor), remainder, and power a**b.', 'a, b = 10, 3\nprint(a // b, a % b, a ** b)', 'easy'),
        ex('ex-op-2', 'Check if a number n=15 is divisible by both 3 and 5 using logical operators.', 'n = 15\nprint(n % 3 == 0 and n % 5 == 0)', 'easy'),
      ], { prerequisites: ['py-vars-types'] }),
      topic('py-strings', 'Strings & Text Processing', 'String creation, slicing, methods, and formatting fundamentals.', 'beginner', [
        sec('str-basics', 'String Creation & Indexing', 'Strings are immutable sequences of Unicode characters. Create with single, double, or triple quotes.\n\nIndexing: `s[0]` first char, `s[-1]` last char. Slicing: `s[start:stop:step]`.', {
          example: 's = "Python"\nprint(s[0], s[-1])\nprint(s[1:4])\nprint(s[::-1])',
          output: 'P n\nyth\nnohtyP',
          keyPoints: ['Strings are immutable sequences', 'Negative indices count from the end', 'Step in slicing enables reversal', 'Triple quotes for multiline strings'],
        }),
        sec('str-methods', 'Essential String Methods', 'Common methods:\n- `.lower()`, `.upper()`, `.strip()`\n- `.split()`, `.join()`\n- `.replace()`, `.find()`, `.startswith()`\n- `.format()` and f-strings\n\nMethods return new strings; originals unchanged.', {
          example: 'text = "  Hello, World!  "\nprint(text.strip().lower())\nwords = "a,b,c".split(",")\nprint("-".join(words))',
          output: 'hello, world!\na-b-c',
          keyPoints: ['Strings have rich method API', 'split/join are inverse operations', 'strip removes leading/trailing whitespace', 'Methods never modify original string'],
        }),
        sec('str-format', 'f-strings & Formatting', '**f-strings** (Python 3.6+) embed expressions: `f"{name} is {age}"`. Format specifiers: `f"{pi:.2f}"` for 2 decimal places.', {
          example: "name, score = \"Alice\", 95.567\nprint(f\"{name} scored {score:.1f}%\")\nprint(f\"{name} = {score:.0f}\")",
          output: 'Alice scored 95.6%\nAlice = 96',
          keyPoints: ['f-strings are the preferred formatting method', 'Expressions evaluated at runtime inside {}', 'Format specifiers control precision and alignment', 'f-strings are faster than .format()'],
        }),
        sec('str-unicode', 'Unicode & Encoding', 'Python 3 strings are Unicode by default. Encode to bytes with `.encode("utf-8")`, decode with `.decode()`. Critical for file I/O and network operations.', {
          example: 's = "café ☕"\nb = s.encode("utf-8")\nprint(len(s), len(b))\nprint(b.decode("utf-8"))',
          output: '7 9\ncafé ☕',
          keyPoints: ['str is Unicode, bytes is raw data', 'Always specify encoding for file I/O', 'UTF-8 handles all Unicode characters', 'len() counts characters, not bytes'],
        }),
      ], [
        ex('ex-str-1', 'Given s = "  Data Science  ", strip whitespace, convert to title case, and replace spaces with underscores.', 's = "  Data Science  "\nresult = s.strip().title().replace(" ", "_")\nprint(result)', 'easy'),
        ex('ex-str-2', 'Split "apple,banana,cherry" into a list and print the second fruit.', 'fruits = "apple,banana,cherry".split(",")\nprint(fruits[1])', 'easy'),
      ], { prerequisites: ['py-vars-types'] }),
      topic('py-io', 'Input/Output & REPL', 'Reading input, printing output, and using the Python REPL effectively.', 'beginner', [
        sec('print', 'Print Function Deep Dive', '`print()` outputs to stdout. Parameters:\n- `sep` — separator between items (default space)\n- `end` — line ending (default newline)\n- `file` — output stream\n- `flush` — force buffer flush', {
          example: 'print("A", "B", "C", sep="-", end="!\\n")\nprint("Done", flush=True)',
          output: 'A-B-C!\nDone',
          keyPoints: ['print accepts multiple arguments', 'sep and end customize formatting', 'Use file= for logging to files', 'flush=True for real-time output'],
        }),
        sec('input', 'Reading User Input', '`input(prompt)` reads a line from stdin as a string. Always validate and convert types explicitly.', {
          example: '# Simulated input handling\nuser_input = "25"  # would come from input()\nage = int(user_input)\nprint(f"You are {age} years old")',
          output: 'You are 25 years old',
          keyPoints: ['input() always returns a string', 'Wrap in try/except for invalid input', 'Validate before converting types', 'Never trust user input blindly'],
        }),
        sec('repl', 'The Python REPL', 'The **REPL** (Read-Eval-Print Loop) is an interactive shell. Launch with `python` or `ipython`. Use `_` for last result. `%timeit` in IPython benchmarks code.', {
          example: '# In REPL:\n# >>> 2 + 2\n# 4\n# >>> _ * 3\n# 12\nprint("Use python or ipython for interactive exploration")',
          output: 'Use python or ipython for interactive exploration',
          keyPoints: ['REPL is ideal for quick experiments', '_ holds the last evaluated result', 'IPython adds magic commands and tab completion', 'Use REPL before writing full scripts'],
        }),
        sec('files-intro', 'Basic File I/O Preview', 'Open files with `open(path, mode)`. Always use `with` statement for automatic cleanup. Modes: `"r"`, `"w"`, `"a"`, `"rb"`, `"wb"`.', {
          example: '# Writing and reading (conceptual)\nlines = ["line1\\n", "line2\\n"]\ncontent = "".join(lines)\nprint(content, end="")',
          output: 'line1\nline2',
          keyPoints: ['Always use with open() as f:', 'Text mode vs binary mode matters', 'Specify encoding=utf-8 for text files', 'File I/O covered in depth later'],
        }),
      ], [
        ex('ex-io-1', 'Print numbers 1 to 5 on one line separated by commas using print parameters.', 'print(*range(1, 6), sep=", ")', 'easy'),
        ex('ex-io-2', 'Parse string "10,20,30" into integers and print their sum.', 'total = sum(int(x) for x in "10,20,30".split(","))\nprint(total)', 'medium'),
      ]),
      topic('py-env', 'Python Environment & Tooling', 'Virtual environments, pip, and project setup best practices.', 'beginner', [
        sec('venv', 'Virtual Environments', 'A **virtual environment** isolates project dependencies. Create with `python -m venv .venv`, activate with `.venv\\Scripts\\activate` (Windows) or `source .venv/bin/activate` (Unix).', {
          example: '# Shell commands (not Python):\n# python -m venv .venv\n# pip install numpy pandas\nprint("Always use venv per project")',
          output: 'Always use venv per project',
          keyPoints: ['One venv per project prevents dependency conflicts', 'Never install packages globally for projects', 'Add .venv to .gitignore', 'Use python -m pip not bare pip'],
        }),
        sec('pip', 'Package Management with pip', '`pip install package` installs from PyPI. Pin versions: `pip install numpy==1.26.0`. Export: `pip freeze > requirements.txt`. Install from file: `pip install -r requirements.txt`.', {
          example: '# requirements.txt example:\nreqs = """numpy>=1.24\npandas>=2.0\nscikit-learn>=1.3"""\nprint(reqs)',
          output: 'numpy>=1.24\npandas>=2.0\nscikit-learn>=1.3',
          keyPoints: ['Pin major versions for reproducibility', 'requirements.txt tracks dependencies', 'Use pip list to see installed packages', 'Consider pip-tools or poetry for advanced management'],
        }),
        sec('ide', 'IDEs & Running Scripts', 'Run scripts: `python script.py`. Use VS Code, PyCharm, or Cursor with Python extension. Configure linter (ruff/flake8) and formatter (black).', {
          example: 'if __name__ == "__main__":\n    print("Script entry point")\n    # Your code here',
          output: 'Script entry point',
          keyPoints: ['if __name__ == "__main__" guards script execution', 'Configure linter and formatter in IDE', 'Use debugger for complex bugs', 'Jupyter for exploratory data work'],
        }),
        sec('project-structure', 'Project Structure Basics', 'Standard layout:\n```\nproject/\n  src/\n  tests/\n  requirements.txt\n  README.md\n```\nKeep code modular and testable from the start.', {
          keyPoints: ['Separate source, tests, and data', 'Use meaningful module names', 'Document setup in README', 'Version control with git from day one'],
        }),
      ], [
        ex('ex-env-1', 'Write a requirements.txt content string with numpy, pandas, and matplotlib with minimum versions.', 'requirements = "numpy>=1.24\\npandas>=2.0\\nmatplotlib>=3.7"\nprint(requirements)', 'easy'),
        ex('ex-env-2', 'Write the Python idiom that runs main() only when script is executed directly.', 'def main():\n    print("Running main")\n\nif __name__ == "__main__":\n    main()', 'easy'),
      ]),
    ].map((t) => ({ ...t, track: 'python' })),
  },
  {
    num: 2, id: 'module-02', fileName: 'module02-control-flow', exportName: 'module02Topics',
    name: 'Control Flow & Functions', track: 'python',
    description: 'Conditionals, loops, functions, scope, and Pythonic iteration patterns.',
    topics: [
      topic('py-conditionals', 'Conditionals (if/elif/else)', 'Branch execution based on boolean conditions.', 'beginner', [
        sec('if-basic', 'if Statements', 'The `if` statement executes a block when its condition is **truthy**. Python treats empty collections, zero, None, and empty strings as falsy.\n\nIndentation (4 spaces) defines blocks — no braces required.', {
          example: 'score = 85\nif score >= 60:\n    print("Pass")\nelse:\n    print("Fail")',
          output: 'Pass',
          keyPoints: ['Indentation defines code blocks', 'Truthy/falsy evaluation drives conditionals', 'else is optional', 'Use elif for multiple branches'],
        }),
        sec('elif', 'elif Chains', 'Chain conditions with `elif` (else-if). Only the first true branch executes. Order matters — put specific conditions first.', {
          example: 'grade = 72\nif grade >= 90:\n    letter = "A"\nelif grade >= 80:\n    letter = "B"\nelif grade >= 70:\n    letter = "C"\nelse:\n    letter = "F"\nprint(letter)',
          output: 'C',
          keyPoints: ['Only one branch executes', 'Order conditions from specific to general', 'else catches all remaining cases', 'Avoid deep nesting — refactor to functions'],
        }),
        sec('ternary', 'Ternary & Match-Case', 'Ternary: `x if condition else y`. Python 3.10+ adds **structural pattern matching** with `match/case` for complex branching.', {
          example: 'n = 4\nparity = "even" if n % 2 == 0 else "odd"\n\nmatch parity:\n    case "even":\n        print(f"{n} is even")\n    case "odd":\n        print(f"{n} is odd")',
          output: '4 is even',
          keyPoints: ['Ternary keeps simple assignments concise', 'match/case replaces long elif chains', 'Pattern matching supports destructuring', 'Use match for type-based dispatch'],
        }),
        sec('guard', 'Guard Clauses', 'Return early with **guard clauses** instead of deep nesting. Improves readability in validation logic.', {
          pseudoCode: 'FUNCTION process(data):\n    IF data is None: RETURN\n    IF not valid(data): RETURN\n    DO main logic',
          example: 'def process(data):\n    if data is None:\n        return\n    if len(data) == 0:\n        return\n    print(f"Processing {len(data)} items")',
          keyPoints: ['Early returns reduce nesting', 'Validate inputs at function start', 'Flat code is easier to read', 'Guard clauses are a best practice'],
        }),
      ], [ex('ex-if-1', 'Write code that prints "positive", "negative", or "zero" for a given number.', 'n = -3\nif n > 0:\n    print("positive")\nelif n < 0:\n    print("negative")\nelse:\n    print("zero")', 'easy'), ex('ex-if-2', 'Use ternary to assign max of two numbers a=5, b=9.', 'a, b = 5, 9\nm = a if a > b else b\nprint(m)', 'easy')], { prerequisites: ['py-operators'] }),
      topic('py-loops', 'Loops (for/while)', 'Iterate over sequences and repeat actions with for and while loops.', 'beginner', [
        sec('for-loop', 'for Loops', '`for item in iterable:` iterates over any iterable — lists, strings, dicts, ranges. Use `range(n)` for counting loops.', {
          example: 'total = 0\nfor i in range(1, 6):\n    total += i\nprint(total)',
          output: '15',
          keyPoints: ['for loops iterate iterables directly', 'range(start, stop, step) generates numbers', 'Never modify list while iterating', 'enumerate() gives index and value'],
        }),
        sec('while-loop', 'while Loops', '`while condition:` repeats until condition is falsy. Ensure the loop variable changes to avoid infinite loops.', {
          example: 'n, count = 10, 0\nwhile n > 1:\n    n //= 2\n    count += 1\nprint(f"Divided {count} times")',
          output: 'Divided 3 times',
          keyPoints: ['while for unknown iteration count', 'Always ensure loop termination', 'break exits loop immediately', 'continue skips to next iteration'],
        }),
        sec('loop-else', 'else, break, continue', 'Loops can have `else` — runs if loop completes without break. `break` exits; `continue` skips to next iteration.', {
          example: 'for n in [2, 4, 6, 7, 8]:\n    if n % 2 != 0:\n        print(f"Found odd: {n}")\n        break\nelse:\n    print("All even")',
          output: 'Found odd: 7',
          keyPoints: ['else on loops is rarely used but powerful', 'break exits innermost loop only', 'continue skips rest of iteration body', 'Use for-else for search patterns'],
        }),
        sec('nested', 'Nested Loops & zip', 'Nest loops for 2D iteration. Prefer `zip(a, b)` to iterate multiple sequences in parallel.', {
          example: 'names = ["Alice", "Bob"]\nscores = [95, 87]\nfor name, score in zip(names, scores):\n    print(f"{name}: {score}")',
          output: 'Alice: 95\nBob: 87',
          keyPoints: ['zip pairs elements from iterables', 'Nested loops can be O(n²) — watch performance', 'itertools.product for Cartesian products', 'List comprehensions often replace simple nested loops'],
        }),
      ], [ex('ex-loop-1', 'Print squares of numbers 1 through 5 using a for loop.', 'for i in range(1, 6):\n    print(i ** 2)', 'easy'), ex('ex-loop-2', 'Sum all even numbers in [1,2,3,4,5,6,7,8] using continue.', 'nums = [1,2,3,4,5,6,7,8]\ntotal = 0\nfor n in nums:\n    if n % 2 != 0:\n        continue\n    total += n\nprint(total)', 'medium')]),
      topic('py-functions', 'Functions & Parameters', 'Define reusable blocks with def, parameters, return values, and docstrings.', 'beginner', [
        sec('def-basic', 'Defining Functions', 'Use `def name(params):` to define functions. `return` sends a value back; omitting return gives `None`. **Docstrings** document behavior.', {
          example: 'def area(radius):\n    """Calculate circle area."""\n    return 3.14159 * radius ** 2\n\nprint(area(5))',
          output: '78.53975',
          keyPoints: ['Functions are first-class objects', 'Docstrings appear in help()', 'return exits immediately', 'Functions should do one thing well'],
        }),
        sec('params', 'Parameter Types', 'Python supports: positional, keyword, default, `*args` (tuple), `**kwargs` (dict). Order: positional, defaults, *args, keyword-only, **kwargs.', {
          example: 'def greet(name, greeting="Hello", *tags, **meta):\n    print(greeting, name, tags, meta)\n\ngreet("Alice", "Hi", "admin", role="dev")',
          output: "Hi Alice ('admin',) {'role': 'dev'}",
          keyPoints: ['Default args evaluated once at definition', 'Never use mutable defaults like []', '*args collects extra positional args', '**kwargs collects extra keyword args'],
        }),
        sec('unpack', 'Unpacking Arguments', 'Unpack iterables with `*`: `func(*args)`. Unpack dicts with `**`: `func(**kwargs)`.', {
          example: 'def add(a, b, c):\n    return a + b + c\n\nnums = [1, 2, 3]\nprint(add(*nums))',
          output: '6',
          keyPoints: ['* unpacks sequences into positional args', '** unpacks dicts into keyword args', 'Useful for forwarding arguments', 'Python 3.8+ positional-only with /'],
        }),
        sec('pure', 'Pure Functions & Side Effects', 'Pure functions: same input → same output, no side effects. Prefer pure functions for testability. Side effects: I/O, mutation, global state.', {
          keyPoints: ['Pure functions are easier to test and reason about', 'Separate computation from I/O', 'Avoid global mutable state', 'Use return values instead of printing inside logic'],
        }),
      ], [ex('ex-fn-1', 'Write a function is_prime(n) returning True if n is prime.', 'def is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            return False\n    return True\n\nprint(is_prime(17))', 'medium'), ex('ex-fn-2', 'Write factorial(n) using recursion.', 'def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))', 'medium')]),
      topic('py-scope', 'Scope, Closures & Lambda', 'LEGB scope rule, closures, and anonymous functions.', 'beginner', [
        sec('legb', 'LEGB Scope Rule', 'Python resolves names: **L**ocal → **E**nclosing → **G**lobal → **B**uilt-in. Use `global` and `nonlocal` to modify outer bindings.', {
          example: 'x = "global"\n\ndef outer():\n    x = "enclosing"\n    def inner():\n        nonlocal x\n        x = "modified"\n    inner()\n    return x\n\nprint(outer())',
          output: 'modified',
          keyPoints: ['LEGB determines name lookup order', 'global modifies module-level names', 'nonlocal modifies enclosing function names', 'Avoid global state when possible'],
        }),
        sec('closures', 'Closures', 'A **closure** captures variables from enclosing scope. Enables factory functions and decorators.', {
          example: 'def make_multiplier(n):\n    def multiply(x):\n        return x * n\n    return multiply\n\ntimes3 = make_multiplier(3)\nprint(times3(7))',
          output: '21',
          keyPoints: ['Inner functions remember enclosing variables', 'Closures enable partial application', 'Foundation for decorators', 'Captured variables are late-binding'],
        }),
        sec('lambda', 'Lambda Functions', '`lambda args: expression` creates anonymous one-line functions. Use for short callbacks; prefer def for anything complex.', {
          example: 'pairs = [(3, "c"), (1, "a"), (2, "b")]\nsorted_pairs = sorted(pairs, key=lambda x: x[0])\nprint(sorted_pairs)',
          output: "[(1, 'a'), (2, 'b'), (3, 'c')]",
          keyPoints: ['Lambda limited to single expression', 'Common as key= argument to sorted/map/filter', 'Prefer def for named reusable functions', 'No statements allowed in lambda body'],
        }),
        sec('higher', 'Higher-Order Functions', 'Functions accepting or returning functions: `map()`, `filter()`, `sorted(key=)`. Functional style complements loops.', {
          example: 'nums = [1, 2, 3, 4, 5]\nevens = list(filter(lambda x: x % 2 == 0, nums))\nsquares = list(map(lambda x: x**2, evens))\nprint(squares)',
          output: '[4, 16]',
          keyPoints: ['map/filter return iterators in Python 3', 'List comprehensions often replace map/filter', 'Higher-order functions enable composition', 'functools.reduce for folding'],
        }),
      ], [ex('ex-scope-1', 'Create a closure make_power(exp) that returns x**exp.', 'def make_power(exp):\n    return lambda x: x ** exp\n\nsq = make_power(2)\nprint(sq(5))', 'medium'), ex('ex-scope-2', 'Sort a list of strings by length using lambda.', 'words = ["hi", "hello", "hey"]\nprint(sorted(words, key=lambda w: len(w)))', 'easy')]),
      topic('py-comprehensions', 'Comprehensions & Iterators', 'List/dict/set comprehensions and the iterator protocol.', 'beginner', [
        sec('list-comp', 'List Comprehensions', 'Syntax: `[expr for item in iterable if condition]`. Concise, readable, and often faster than equivalent loops.', {
          example: 'squares = [x**2 for x in range(10) if x % 2 == 0]\nprint(squares)',
          output: '[0, 4, 16, 36, 64]',
          keyPoints: ['Comprehensions are Pythonic for transformations', 'Filter with trailing if clause', 'Nested comprehensions for 2D structures', 'Dont sacrifice readability for brevity'],
        }),
        sec('dict-set-comp', 'Dict & Set Comprehensions', 'Dict: `{k: v for ...}`. Set: `{expr for ...}`. Powerful for building lookup tables.', {
          example: 'words = ["apple", "banana", "cherry"]\nlengths = {w: len(w) for w in words}\nunique_lens = {len(w) for w in words}\nprint(lengths, unique_lens)',
          output: "{'apple': 5, 'banana': 6, 'cherry': 6} {5, 6}",
          keyPoints: ['Dict comprehensions build mappings', 'Set comprehensions deduplicate automatically', 'Use for invertible transformations', 'Generator expressions use () for lazy evaluation'],
        }),
        sec('generators', 'Generator Expressions', '`(expr for x in iter)` creates a lazy generator. Memory-efficient for large datasets — values computed on demand.', {
          example: 'gen = (x**2 for x in range(1000000))\nprint(next(gen), next(gen), next(gen))',
          output: '0 1 4',
          keyPoints: ['Generators yield one value at a time', 'Memory O(1) regardless of range size', 'Exhausted generators cannot restart', 'Use for pipeline processing'],
        }),
        sec('iterators', 'Iterator Protocol', 'Objects with `__iter__()` and `__next__()` are iterators. `StopIteration` signals end. `iter()` and `next()` built-ins interact with protocol.', {
          example: 'it = iter([10, 20, 30])\nprint(next(it), next(it))',
          output: '10 20',
          keyPoints: ['All iterables implement __iter__', 'for loops use iterator protocol internally', 'Custom classes can implement __iter__/__next__', 'itertools module provides rich iterators'],
        }),
      ], [ex('ex-comp-1', 'Build a list of cubes for odd numbers 1-10 using comprehension.', 'cubes = [x**3 for x in range(1, 11) if x % 2 == 1]\nprint(cubes)', 'easy'), ex('ex-comp-2', 'Create a dict mapping numbers 1-5 to their squares.', 'sq = {x: x**2 for x in range(1, 6)}\nprint(sq)', 'easy')]),
    ].map((t) => ({ ...t, track: 'python' })),
  },
  {
    num: 3, id: 'module-03', fileName: 'module03-data-structures', exportName: 'module03Topics',
    name: 'Data Structures', track: 'python',
    description: 'Lists, tuples, dicts, sets, and advanced collection patterns.',
    topics: [
      topic('py-lists', 'Lists & Tuples', 'Ordered sequences — mutable lists and immutable tuples.', 'beginner', [
        sec('list-ops', 'List Operations', 'Lists are dynamic arrays. Methods: `.append()`, `.extend()`, `.insert()`, `.pop()`, `.remove()`, `.sort()`. Slicing creates copies.', {
          example: 'nums = [3, 1, 4, 1, 5]\nnums.append(9)\nnums.sort()\nprint(nums)\nprint(nums[1:4])',
          output: '[1, 1, 3, 4, 5, 9]\n[1, 3, 4]',
          keyPoints: ['Lists are mutable ordered sequences', 'sort() modifies in place; sorted() returns new list', 'Slicing [start:stop:step] never includes stop index', 'Use copy() or list() for shallow copies'],
        }),
        sec('tuples', 'Tuples', 'Tuples are immutable sequences. Use for fixed collections: coordinates, DB records. Tuple unpacking: `a, b = (1, 2)`.', {
          example: 'point = (10, 20)\nx, y = point\nprint(f"({x}, {y})")\n# point[0] = 5  # TypeError',
          keyPoints: ['Tuples are immutable — hashable if elements are', 'Use for heterogeneous fixed data', 'Unpacking works with any iterable', 'Single-element tuple needs trailing comma: (1,)'],
        }),
        sec('list-perf', 'Performance Considerations', 'Append is O(1) amortized. Insert at front is O(n). For frequent front inserts, use `collections.deque`.', {
          keyPoints: ['Choose data structure based on access patterns', 'deque for queue operations', 'Lists for general-purpose ordered storage', 'Profile before optimizing'],
        }),
        sec('nested', 'Nested Structures', 'Lists of lists, tuples of dicts — common in data processing. Access with chained indexing: `matrix[1][2]`.', {
          example: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]\nprint(matrix[1][2])\nprint([row[0] for row in matrix])',
          output: '6\n[1, 4, 7]',
          keyPoints: ['Nested structures model grids and tables', 'List comprehensions flatten or transform nested data', 'Copy carefully — nested lists share references', 'Consider numpy arrays for numeric matrices'],
        }),
      ], [ex('ex-list-1', 'Reverse a list in-place using slicing.', 'nums = [1, 2, 3, 4]\nnums = nums[::-1]\nprint(nums)', 'easy'), ex('ex-list-2', 'Find the index of max value in [3, 7, 2, 9, 4].', 'nums = [3, 7, 2, 9, 4]\nprint(nums.index(max(nums)))', 'medium')]),
      topic('py-dicts', 'Dictionaries & Sets', 'Hash maps and unordered unique collections.', 'beginner', [
        sec('dict-basics', 'Dictionary Fundamentals', 'Dicts map keys to values. Keys must be hashable (immutable). Create with `{}` or `dict()`. Access: `d[key]` or `d.get(key, default)`.', {
          example: 'user = {"name": "Alice", "age": 30, "role": "admin"}\nprint(user["name"])\nprint(user.get("email", "N/A"))',
          output: 'Alice\nN/A',
          keyPoints: ['Dicts preserve insertion order (Python 3.7+)', 'Use get() to avoid KeyError', 'keys(), values(), items() for iteration', 'Dict comprehensions build dicts concisely'],
        }),
        sec('sets', 'Sets', 'Sets store unique elements with O(1) membership test. Operations: union `|`, intersection `&`, difference `-`.', {
          example: 'a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(a & b)\nprint(a | b)',
          output: '{3, 4}\n{1, 2, 3, 4, 5, 6}',
          keyPoints: ['Sets eliminate duplicates', 'Fast membership testing with in', 'frozenset is immutable/hashable', 'Use sets for deduplication and set math'],
        }),
        sec('defaultdict', 'defaultdict & Counter', '`collections.defaultdict` auto-creates missing keys. `Counter` counts hashable objects — essential for frequency analysis.', {
          example: 'from collections import Counter\nwords = ["apple", "banana", "apple", "cherry", "banana", "apple"]\ncounts = Counter(words)\nprint(counts.most_common(2))',
          output: "[('apple', 3), ('banana', 2)]",
          keyPoints: ['Counter is a dict subclass for counting', 'most_common(n) returns top n items', 'defaultdict avoids manual key existence checks', 'Use Counter for text and categorical analysis'],
        }),
        sec('dict-merge', 'Merging & Updating Dicts', 'Python 3.9+: `{**d1, **d2}` or `d1 | d2`. Update in place: `d.update(other)`.', {
          example: 'defaults = {"lr": 0.01, "epochs": 10}\noverrides = {"epochs": 50}\nconfig = {**defaults, **overrides}\nprint(config)',
          output: "{'lr': 0.01, 'epochs': 50}",
          keyPoints: ['Later keys override earlier in merge', 'Use for config and kwargs merging', 'Deep merge requires custom logic', 'Dict union operator | available in 3.9+'],
        }),
      ], [ex('ex-dict-1', 'Count character frequencies in "hello".', 'from collections import Counter\nc = Counter("hello")\nprint(dict(c))', 'easy'), ex('ex-dict-2', 'Invert a dict {1:"a", 2:"b"} to {"a":1, "b":2}.', 'd = {1: "a", 2: "b"}\ninverted = {v: k for k, v in d.items()}\nprint(inverted)', 'medium')]),
      topic('py-deque', 'Stacks, Queues & Deque', 'LIFO stacks and FIFO queues with collections.deque.', 'beginner', [
        sec('stack', 'Stack (LIFO)', 'Use list `.append()` and `.pop()` for stack. Last in, first out — used in parsing, undo, DFS.', {
          example: 'stack = []\nstack.append(1)\nstack.append(2)\nstack.append(3)\nprint(stack.pop())\nprint(stack)',
          output: '3\n[1, 2]',
          keyPoints: ['append/pop from end implements stack', 'O(1) operations at list end', 'Used in recursion and graph DFS', 'deque also supports append/pop'],
        }),
        sec('queue', 'Queue (FIFO)', 'Use `collections.deque` with `append()` and `popleft()` for O(1) queue operations. Never use list.pop(0) — O(n).', {
          example: 'from collections import deque\nq = deque(["task1", "task2"])\nq.append("task3")\nprint(q.popleft())\nprint(q)',
          output: 'task1\ndeque([\'task2\', \'task3\'])',
          keyPoints: ['deque provides O(1) appendleft/popleft', 'FIFO for BFS and task scheduling', 'list.pop(0) is O(n) — avoid for queues', 'queue.Queue is thread-safe alternative'],
        }),
        sec('deque-features', 'deque Advanced Features', 'deque supports maxlen for bounded buffers, rotation, and double-ended operations.', {
          example: 'from collections import deque\nrecent = deque(maxlen=3)\nfor x in [1, 2, 3, 4, 5]:\n    recent.append(x)\nprint(list(recent))',
          output: '[3, 4, 5]',
          keyPoints: ['maxlen creates sliding window buffer', 'Automatic eviction of oldest items', 'rotate(n) shifts elements circularly', 'Ideal for rolling statistics'],
        }),
        sec('applications', 'Real-World Applications', 'Stacks: expression evaluation, browser history. Queues: job schedulers, BFS traversal, streaming pipelines.', {
          keyPoints: ['Match data structure to algorithm needs', 'BFS uses queue, DFS uses stack', 'Priority queues use heapq module', 'Consider thread safety for concurrent queues'],
        }),
      ], [ex('ex-deque-1', 'Implement a function that checks balanced parentheses using a stack.', 'def balanced(s):\n    stack = []\n    pairs = {")": "(", "]": "[", "}": "{"}\n    for c in s:\n        if c in "([{":\n            stack.append(c)\n        elif c in ")]}":\n            if not stack or stack.pop() != pairs[c]:\n                return False\n    return len(stack) == 0\n\nprint(balanced("({[]})"))', 'medium'), ex('ex-deque-2', 'Use deque to implement a queue processing ["a","b","c"].', 'from collections import deque\nq = deque(["a", "b", "c"])\nprocessed = []\nwhile q:\n    processed.append(q.popleft())\nprint(processed)', 'easy')]),
      topic('py-sort-search', 'Sorting & Searching', 'Built-in sorting, binary search, and algorithmic complexity.', 'beginner', [
        sec('sorting', 'Sorting in Python', '`sorted(iterable, key=, reverse=)` returns new list. `.sort()` sorts in place. Timsort algorithm — O(n log n).', {
          example: 'data = [3, 1, 4, 1, 5, 9]\nprint(sorted(data))\nprint(sorted(data, reverse=True))',
          output: '[1, 1, 3, 4, 5, 9]\n[9, 5, 4, 3, 1, 1]',
          keyPoints: ['sorted() preserves original list', 'key=function customizes sort criteria', 'Stable sort preserves equal element order', 'Timsort exploits partially sorted input'],
        }),
        sec('custom-sort', 'Custom Sort Keys', 'Use `key=lambda x: ...` or `operator.itemgetter`, `operator.attrgetter` for complex sorting.', {
          example: 'students = [("Alice", 95), ("Bob", 87), ("Charlie", 95)]\nby_grade = sorted(students, key=lambda s: (-s[1], s[0]))\nprint(by_grade)',
          output: "[('Alice', 95), ('Charlie', 95), ('Bob', 87)]",
          keyPoints: ['Tuple keys enable multi-criteria sort', 'Negate numeric key for descending', 'itemgetter is faster than lambda for simple access', 'Sort once, reuse for repeated queries'],
        }),
        sec('search', 'Linear & Binary Search', 'Linear: O(n) scan. Binary search: O(log n) on sorted data. Use `bisect` module for insertion points.', {
          example: 'import bisect\nsorted_list = [1, 3, 5, 7, 9]\nidx = bisect.bisect_left(sorted_list, 5)\nprint(idx)',
          output: '2',
          keyPoints: ['Binary search requires sorted data', 'bisect finds insertion position', 'bisect_left vs bisect_right for duplicates', 'Use set/dict for O(1) lookup when possible'],
        }),
        sec('complexity', 'Big-O Basics', 'Common complexities: O(1) constant, O(log n) logarithmic, O(n) linear, O(n log n) linearithmic, O(n²) quadratic. Choose algorithms wisely.', {
          keyPoints: ['Big-O describes growth rate, not exact time', 'Nested loops often imply O(n²)', 'Hash lookups are average O(1)', 'Sorting dominates many pipeline costs'],
        }),
      ], [ex('ex-sort-1', 'Sort a list of strings by length descending.', 'words = ["hi", "hello", "hey", "greetings"]\nprint(sorted(words, key=len, reverse=True))', 'easy'), ex('ex-sort-2', 'Use bisect to insert 6 into sorted [1,3,5,7,9] maintaining order.', 'import bisect\nlst = [1, 3, 5, 7, 9]\nbisect.insort(lst, 6)\nprint(lst)', 'medium')]),
      topic('py-collections', 'Collections Module', 'namedtuple, OrderedDict, ChainMap, and other specialized containers.', 'beginner', [
        sec('namedtuple', 'namedtuple', 'Creates tuple subclasses with named fields. Lightweight alternative to classes for data records.', {
          example: 'from collections import namedtuple\nPoint = namedtuple("Point", ["x", "y"])\np = Point(3, 4)\nprint(p.x, p.y)',
          output: '3 4',
          keyPoints: ['Immutable like regular tuples', 'Named access improves readability', 'Use _replace for modified copies', 'dataclass is modern alternative'],
        }),
        sec('chainmap', 'ChainMap', 'ChainMap searches multiple dicts in order — useful for scoped configs and symbol tables.', {
          example: 'from collections import ChainMap\ndefaults = {"color": "blue", "size": "M"}\nuser = {"color": "red"}\nconfig = ChainMap(user, defaults)\nprint(config["color"], config["size"])',
          output: 'red M',
          keyPoints: ['First dict in chain takes precedence', 'Useful for layered configuration', 'Does not merge — searches sequentially', 'Modifications affect first dict in chain'],
        }),
        sec('ordered', 'OrderedDict & Modern Dicts', 'OrderedDict once guaranteed order; standard dict now preserves order. OrderedDict still useful for move_to_end and popitem(last=False).', {
          keyPoints: ['Regular dict preserves insertion order since 3.7', 'OrderedDict for LRU cache patterns', 'move_to_end for reordering', 'Consider functools.lru_cache for caching'],
        }),
        sec('heapq', 'heapq — Priority Queues', 'heapq implements min-heap. `heappush`, `heappop` for O(log n) priority queue operations.', {
          example: 'import heapq\nheap = []\nfor val in [5, 3, 8, 1]:\n    heapq.heappush(heap, val)\nprint(heapq.heappop(heap))',
          output: '1',
          keyPoints: ['Min-heap — smallest element first', 'heappush/heappop are O(log n)', 'heapify converts list to heap in O(n)', 'Use for top-k and scheduling problems'],
        }),
      ], [ex('ex-coll-1', 'Create a namedtuple Person with name and age, instantiate and print.', 'from collections import namedtuple\nPerson = namedtuple("Person", ["name", "age"])\np = Person("Alice", 30)\nprint(f"{p.name} is {p.age}")', 'easy'), ex('ex-coll-2', 'Find 3 largest numbers in [10, 3, 7, 1, 25, 18] using heapq.', 'import heapq\nprint(heapq.nlargest(3, [10, 3, 7, 1, 25, 18]))', 'easy')]),
    ].map((t) => ({ ...t, track: 'python' })),
  },
  {
    num: 4, id: 'module-04', fileName: 'module04-oop-patterns', exportName: 'module04Topics',
    name: 'OOP & Design Patterns', track: 'python',
    description: 'Object-oriented programming, inheritance, encapsulation, and design patterns.',
    topics: [
      topic('py-classes', 'Classes & Objects', 'Define classes with attributes and methods using the class keyword.', 'intermediate', [
        sec('class-basics', 'Defining Classes', 'A **class** is a blueprint; an **object** is an instance. `__init__` initializes instance state. `self` refers to the instance.', {
          example: 'class Dog:\n    def __init__(self, name, breed):\n        self.name = name\n        self.breed = breed\n    def bark(self):\n        return f"{self.name} says Woof!"\n\nd = Dog("Rex", "Labrador")\nprint(d.bark())',
          output: 'Rex says Woof!',
          keyPoints: ['__init__ is the constructor', 'self must be first parameter of instance methods', 'Instance attributes set in __init__ or elsewhere', 'Classes group data and behavior'],
        }),
        sec('class-vs-instance', 'Class vs Instance Attributes', 'Class attributes are shared across instances. Instance attributes are per-object. Modify class attrs carefully — mutable shared state causes bugs.', {
          example: 'class Counter:\n    total = 0\n    def __init__(self):\n        Counter.total += 1\n\nc1, c2 = Counter(), Counter()\nprint(Counter.total)',
          output: '2',
          keyPoints: ['Class attributes shared by all instances', 'Instance attributes unique per object', 'Avoid mutable class-level defaults', 'Use class methods for factory patterns'],
        }),
        sec('methods', 'Instance, Class & Static Methods', '@classmethod receives cls; @staticmethod needs neither self nor cls. Use classmethod for alternative constructors.', {
          example: 'class Date:\n    def __init__(self, year, month, day):\n        self.year, self.month, self.day = year, month, day\n    @classmethod\n    def from_string(cls, s):\n        y, m, d = map(int, s.split("-"))\n        return cls(y, m, d)\n\nprint(Date.from_string("2024-03-15").year)',
          output: '2024',
          keyPoints: ['classmethod for alternative constructors', 'staticmethod for utility functions in class namespace', 'Instance methods most common', 'Choose based on what data method needs'],
        }),
        sec('dunder', 'Special Methods (Dunder)', 'Double-underscore methods customize behavior: `__str__`, `__repr__`, `__len__`, `__eq__`, `__add__`. Enable Pythonic interfaces.', {
          example: 'class Vector:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n    def __repr__(self):\n        return f"Vector({self.x}, {self.y})"\n\nprint(Vector(1, 2) + Vector(3, 4))',
          output: 'Vector(4, 6)',
          keyPoints: ['__repr__ for developers, __str__ for users', 'Operator overloading via dunder methods', '__eq__ for equality comparison', 'Follow Python data model conventions'],
        }),
      ], [ex('ex-class-1', 'Create a Rectangle class with width, height, and area() method.', 'class Rectangle:\n    def __init__(self, w, h):\n        self.w, self.h = w, h\n    def area(self):\n        return self.w * self.h\n\nprint(Rectangle(4, 5).area())', 'easy'), ex('ex-class-2', 'Add __repr__ to Rectangle showing dimensions.', 'class Rectangle:\n    def __init__(self, w, h):\n        self.w, self.h = w, h\n    def area(self):\n        return self.w * self.h\n    def __repr__(self):\n        return f"Rectangle({self.w}x{self.h})"\n\nprint(Rectangle(4, 5))', 'easy')]),
      topic('py-inheritance', 'Inheritance & Polymorphism', 'Extend classes, override methods, and use polymorphic behavior.', 'intermediate', [
        sec('inheritance', 'Basic Inheritance', 'Subclass inherits parent attributes and methods. `super()` calls parent implementation. Override methods in child class.', {
          example: 'class Animal:\n    def speak(self):\n        return "..."\n\nclass Cat(Animal):\n    def speak(self):\n        return "Meow"\n\nclass Dog(Animal):\n    def speak(self):\n        return "Woof"\n\nfor a in [Cat(), Dog()]:\n    print(a.speak())',
          output: 'Meow\nWoof',
          keyPoints: ['Inheritance enables code reuse', 'Override methods for specialized behavior', 'super() accesses parent methods', 'Polymorphism: same interface, different behavior'],
        }),
        sec('mro', 'Method Resolution Order (MRO)', 'Python uses C3 linearization for MRO. Check with `ClassName.mro()`. Multiple inheritance requires careful design.', {
          example: 'class A:\n    def method(self): return "A"\nclass B(A):\n    def method(self): return "B"\nclass C(A):\n    def method(self): return "C"\nclass D(B, C): pass\n\nprint(D().method())\nprint([c.__name__ for c in D.mro()])',
          output: 'B\n[\'D\', \'B\', \'C\', \'A\', \'object\']',
          keyPoints: ['MRO determines method lookup order', 'Diamond inheritance resolved by C3', 'Prefer composition over deep inheritance', 'Use mixins for shared behavior'],
        }),
        sec('abstract', 'Abstract Base Classes', 'abc module defines interfaces. @abstractmethod forces subclass implementation. Enables contract-based design.', {
          example: 'from abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n\nclass Circle(Shape):\n    def __init__(self, r):\n        self.r = r\n    def area(self):\n        return 3.14159 * self.r ** 2\n\nprint(Circle(5).area())',
          output: '78.53975',
          keyPoints: ['ABC enforces interface contracts', 'Cannot instantiate ABC with abstract methods', 'Useful for plugin architectures', 'Protocol (typing) is duck-typing alternative'],
        }),
        sec('composition', 'Composition Over Inheritance', 'Favor **has-a** over **is-a**. Compose objects rather than deep inheritance hierarchies. More flexible and testable.', {
          keyPoints: ['Composition reduces coupling', 'Easier to swap implementations', 'Inheritance for true is-a relationships only', 'Dependency injection supports composition'],
        }),
      ], [ex('ex-inherit-1', 'Create Vehicle base and Car subclass with overridden start() method.', 'class Vehicle:\n    def start(self):\n        return "Engine starting"\n\nclass Car(Vehicle):\n    def start(self):\n        return "Car engine starting"\n\nprint(Car().start())', 'easy'), ex('ex-inherit-2', 'Use super() in Car.start() to call parent then add message.', 'class Vehicle:\n    def start(self):\n        return "Engine starting"\n\nclass Car(Vehicle):\n    def start(self):\n        return super().start() + " - Car ready"\n\nprint(Car().start())', 'medium')]),
      topic('py-encapsulation', 'Encapsulation & Properties', 'Hide internal state and control access with properties and naming conventions.', 'intermediate', [
        sec('naming', 'Naming Conventions', 'Single underscore `_internal` — convention for internal use. Double underscore `__private` triggers name mangling. No true private access in Python.', {
          example: 'class Account:\n    def __init__(self, balance):\n        self.__balance = balance\n    def get_balance(self):\n        return self.__balance\n\nacc = Account(1000)\nprint(acc.get_balance())',
          output: '1000',
          keyPoints: ['Python uses convention, not enforcement', 'Name mangling prevents accidental override in subclasses', 'Public API should be minimal and stable', 'Document internal vs public attributes'],
        }),
        sec('property', 'The @property Decorator', '@property creates getter; @name.setter and @name.deleter for setter/deleter. Clean attribute-like access with validation.', {
          example: 'class Temperature:\n    def __init__(self, celsius):\n        self._celsius = celsius\n    @property\n    def fahrenheit(self):\n        return self._celsius * 9/5 + 32\n    @fahrenheit.setter\n    def fahrenheit(self, value):\n        self._celsius = (value - 32) * 5/9\n\nt = Temperature(100)\nprint(t.fahrenheit)',
          output: '212.0',
          keyPoints: ['Properties enable computed attributes', 'Validation in setters protects invariants', 'Prefer properties over get/set methods', 'Use _prefix for backing storage'],
        }),
        sec('slots', '__slots__ for Memory', '__slots__ restricts attributes and saves memory. No __dict__ created. Useful for many small objects.', {
          keyPoints: ['__slots__ reduces memory per instance', 'Fixes allowed attributes at class definition', 'Breaks if multiple inheritance conflicts', 'Rarely needed unless profiling shows benefit'],
        }),
        sec('dataclass-preview', 'dataclass Preview', '@dataclass auto-generates __init__, __repr__, __eq__. Modern alternative to boilerplate classes.', {
          example: 'from dataclasses import dataclass\n\n@dataclass\nclass Point:\n    x: float\n    y: float\n\nprint(Point(1.0, 2.0))',
          output: 'Point(x=1.0, y=2.0)',
          keyPoints: ['dataclass reduces boilerplate', 'Type hints define fields', 'frozen=True for immutability', 'field(default_factory=list) for mutable defaults'],
        }),
      ], [ex('ex-encap-1', 'Create a property celsius that validates value >= -273.15.', 'class Temp:\n    def __init__(self, c):\n        self._c = c\n    @property\n    def celsius(self):\n        return self._c\n    @celsius.setter\n    def celsius(self, v):\n        if v < -273.15:\n            raise ValueError("Below absolute zero")\n        self._c = v\n\nt = Temp(25)\nprint(t.celsius)', 'medium'), ex('ex-encap-2', 'Use @dataclass to create a Book with title and author.', 'from dataclasses import dataclass\n\n@dataclass\nclass Book:\n    title: str\n    author: str\n\nprint(Book("1984", "Orwell"))', 'easy')]),
      topic('py-patterns', 'Design Patterns in Python', 'Singleton, Factory, Observer, Strategy, and other common patterns.', 'intermediate', [
        sec('factory', 'Factory Pattern', 'Factory method creates objects without specifying exact class. Decouples instantiation from usage.', {
          example: 'class Dog:\n    def speak(self): return "Woof"\nclass Cat:\n    def speak(self): return "Meow"\n\ndef animal_factory(kind):\n    return {"dog": Dog, "cat": Cat}[kind]()\n\nprint(animal_factory("dog").speak())',
          output: 'Woof',
          keyPoints: ['Factory centralizes object creation', 'Easy to add new types', 'Registry pattern extends factory', 'Used heavily in ML model loading'],
        }),
        sec('strategy', 'Strategy Pattern', 'Encapsulate algorithms as interchangeable strategies. Pass strategy as parameter or inject at runtime.', {
          example: 'class QuickSort:\n    def sort(self, data): return sorted(data)\n\nclass ReverseSort:\n    def sort(self, data): return sorted(data, reverse=True)\n\nclass Sorter:\n    def __init__(self, strategy):\n        self.strategy = strategy\n    def sort(self, data):\n        return self.strategy.sort(data)\n\nprint(Sorter(ReverseSort()).sort([3,1,2]))',
          output: '[3, 2, 1]',
          keyPoints: ['Strategy enables runtime algorithm selection', 'Open/closed principle — extend without modifying', 'Functions can serve as strategies in Python', 'Common in ML preprocessing pipelines'],
        }),
        sec('observer', 'Observer Pattern', 'Subject notifies observers on state change. Basis for event systems and reactive programming.', {
          keyPoints: ['Decouples subject from observers', 'Used in GUI event handling', 'Callbacks are lightweight Python observers', 'Consider asyncio for async event patterns'],
        }),
        sec('singleton', 'Singleton & Module Pattern', 'Python modules are natural singletons. For classes, use __new__ or decorator. Often modules suffice.', {
          keyPoints: ['Module-level objects are singletons by default', 'Avoid overusing Singleton pattern', 'Dependency injection preferred for testability', 'lru_cache can implement function singletons'],
        }),
      ], [ex('ex-pattern-1', 'Implement a simple factory returning list, dict, or set based on string.', 'def factory(kind):\n    return {"list": list, "dict": dict, "set": set}[kind]\n\nprint(factory("list")([1,2]))', 'easy'), ex('ex-pattern-2', 'Implement Strategy with MinStrategy and MaxStrategy for finding min/max in a list.', 'class MinStrategy:\n    def find(self, d): return min(d)\nclass MaxStrategy:\n    def find(self, d): return max(d)\n\ndef analyze(data, strategy):\n    return strategy.find(data)\n\nprint(analyze([3,1,4], MinStrategy()))', 'medium')]),
      topic('py-protocols', 'Abstract Base Classes & Protocols', 'typing.Protocol for structural subtyping and modern Python interfaces.', 'intermediate', [
        sec('protocol', 'typing.Protocol', 'Protocol defines structural interface — if it walks like a duck... No inheritance required. `@runtime_checkable` enables isinstance().', {
          example: 'from typing import Protocol\n\nclass Drawable(Protocol):\n    def draw(self) -> str: ...\n\ndef render(shape: Drawable) -> str:\n    return shape.draw()\n\nclass Circle:\n    def draw(self): return "O"\n\nprint(render(Circle()))',
          output: 'O',
          keyPoints: ['Protocol enables duck typing with type checking', 'No need to inherit from Protocol', 'runtime_checkable for isinstance checks', 'Preferred over ABC for flexible interfaces'],
        }),
        sec('abc-vs-protocol', 'ABC vs Protocol', 'ABC: nominal subtyping — must inherit. Protocol: structural — must implement methods. Choose based on design needs.', {
          keyPoints: ['ABC for strict hierarchies and shared implementation', 'Protocol for flexible third-party integration', 'Both supported by mypy and pyright', 'ML frameworks use Protocol for tensor-like objects'],
        }),
        sec('generic', 'Generic Classes', 'typing.Generic enables type-parameterized classes: `class Stack[T]:`. Python 3.12+ simplified syntax.', {
          example: 'from typing import TypeVar, Generic\n\nT = TypeVar("T")\n\nclass Box(Generic[T]):\n    def __init__(self, item: T):\n        self.item = item\n\nb = Box[int](42)\nprint(b.item)',
          output: '42',
          keyPoints: ['Generics preserve type information', 'TypeVar defines type parameters', 'Python 3.12: class Box[T] syntax', 'Useful for containers and data structures'],
        }),
        sec('solid', 'SOLID Principles', 'Single responsibility, Open/closed, Liskov substitution, Interface segregation, Dependency inversion. Guide maintainable OOP design.', {
          keyPoints: ['Single Responsibility: one reason to change', 'Open/Closed: extend without modifying', 'Liskov: subtypes must be substitutable', 'Apply pragmatically — not every class needs all five'],
        }),
      ], [ex('ex-proto-1', 'Define a Protocol HasArea with area() method and use it in a function.', 'from typing import Protocol\n\nclass HasArea(Protocol):\n    def area(self) -> float: ...\n\ndef print_area(shape: HasArea):\n    print(shape.area())\n\nclass Square:\n    def __init__(self, s): self.s = s\n    def area(self): return self.s ** 2\n\nprint_area(Square(4))', 'medium'), ex('ex-proto-2', 'Create a Generic Stack class with push and pop.', 'from typing import Generic, TypeVar\n\nT = TypeVar("T")\n\nclass Stack(Generic[T]):\n    def __init__(self): self._items = []\n    def push(self, item: T): self._items.append(item)\n    def pop(self) -> T: return self._items.pop()\n\ns = Stack[int]()\ns.push(1)\nprint(s.pop())', 'medium')]),
    ].map((t) => ({ ...t, track: 'python' })),
  },
  {
    num: 5, id: 'module-05', fileName: 'module05-advanced-python', exportName: 'module05Topics',
    name: 'Advanced Python', track: 'python',
    description: 'Decorators, generators, context managers, type hints, and packaging.',
    topics: [
      topic('py-decorators', 'Decorators', 'Functions that modify or wrap other functions. Essential for logging, timing, auth, and frameworks.', 'advanced', [
        sec('decorator-basics', 'Function Decorators', 'A decorator is `@decorator` syntax for `func = decorator(func)`. Decorators are higher-order functions that wrap callables.', {
          example: 'def log_calls(func):\n    def wrapper(*args, **kwargs):\n        print(f"Calling {func.__name__}")\n        return func(*args, **kwargs)\n    return wrapper\n\n@log_calls\ndef add(a, b):\n    return a + b\n\nprint(add(2, 3))',
          output: 'Calling add\n5',
          keyPoints: ['Decorators wrap functions transparently', '@syntax is syntactic sugar', 'wrapper must use *args, **kwargs', 'functools.wraps preserves metadata'],
        }),
        sec('functools-wraps', 'functools.wraps & functools', 'Always use `@wraps(func)` on wrapper to preserve `__name__`, `__doc__`. functools.lru_cache, partial, reduce are essential tools.', {
          example: 'from functools import wraps, lru_cache\n\n@lru_cache(maxsize=128)\ndef fib(n):\n    if n < 2: return n\n    return fib(n-1) + fib(n-2)\n\nprint(fib(30))',
          output: '832040',
          keyPoints: ['lru_cache memoizes function results', 'wraps preserves function identity', 'partial creates specialized functions', 'Decorators with args need decorator factory'],
        }),
        sec('param-decorator', 'Decorators with Parameters', 'Three-level nesting: decorator factory → decorator → wrapper. `@retry(times=3)` pattern.', {
          example: 'from functools import wraps\n\ndef repeat(n):\n    def decorator(func):\n        @wraps(func)\n        def wrapper(*args, **kwargs):\n            for _ in range(n):\n                result = func(*args, **kwargs)\n            return result\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef greet():\n    print("Hello")\n\ngreet()',
          output: 'Hello\nHello\nHello',
          keyPoints: ['Outer function receives decorator args', 'Middle function receives wrapped function', 'Inner function receives call args', 'Flask/FastAPI routes use parameterized decorators'],
        }),
        sec('class-decorator', 'Class Decorators', 'Decorators work on classes too. `@dataclass`, `@property` are built-in class decorators. Metaclasses are advanced alternative.', {
          keyPoints: ['Class decorators modify or register classes', 'dataclass is a class decorator', 'Metaclasses customize class creation', 'Use decorators before metaclasses'],
        }),
      ], [ex('ex-dec-1', 'Write a timer decorator that prints execution time.', 'import time\nfrom functools import wraps\n\ndef timer(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        print(f"{func.__name__}: {time.time()-start:.4f}s")\n        return result\n    return wrapper\n\n@timer\ndef slow():\n    sum(range(100000))\n\nslow()', 'medium'), ex('ex-dec-2', 'Use lru_cache on factorial function.', 'from functools import lru_cache\n\n@lru_cache\n\ndef fact(n):\n    return 1 if n <= 1 else n * fact(n-1)\n\nprint(fact(10))', 'easy')]),
      topic('py-generators', 'Generators & yield', 'Lazy iteration with generator functions and yield expressions.', 'advanced', [
        sec('yield', 'Generator Functions', '`yield` pauses function and returns value. Resumes on next(). Generators are iterators — memory efficient.', {
          example: 'def count_up(n):\n    i = 0\n    while i < n:\n        yield i\n        i += 1\n\nfor x in count_up(5):\n    print(x, end=" ")',
          output: '0 1 2 3 4 ',
          keyPoints: ['yield transforms function to generator', 'State preserved between yields', 'Generators are single-pass iterators', 'Use for infinite sequences and pipelines'],
        }),
        sec('yield-from', 'yield from & send', '`yield from iterable` delegates to sub-generator. `.send(value)` sends values into generator. Advanced coroutine patterns.', {
          example: 'def chain(*iterables):\n    for it in iterables:\n        yield from it\n\nprint(list(chain([1,2], [3,4])))',
          output: '[1, 2, 3, 4]',
          keyPoints: ['yield from simplifies generator delegation', 'send() enables two-way communication', 'throw() and close() control generator lifecycle', 'Foundation for async/await'],
        }),
        sec('gen-expr', 'Generator Pipelines', 'Chain generators for data pipelines: read → filter → transform → aggregate. Memory stays constant.', {
          example: 'def read_nums():\n    for x in [1,2,3,4,5,6]:\n        yield x\n\ndef evens(source):\n    for x in source:\n        if x % 2 == 0:\n            yield x\n\nprint(list(evens(read_nums())))',
          output: '[2, 4, 6]',
          keyPoints: ['Pipeline stages are composable generators', 'Lazy evaluation — no intermediate lists', 'Pattern used in ETL and streaming ML', 'itertools.chain and tee assist pipelines'],
        }),
        sec('infinite', 'Infinite Generators', 'Generators can yield forever: `while True: yield x`. Use with break condition or itertools.islice to limit.', {
          keyPoints: ['Infinite generators model streams', 'islice limits consumption', 'cycle and repeat from itertools', 'Careful with memory on accidental materialization'],
        }),
      ], [ex('ex-gen-1', 'Write a generator fibonacci() yielding first n Fibonacci numbers.', 'def fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b\n\nprint(list(fibonacci(8)))', 'medium'), ex('ex-gen-2', 'Create generator that yields squares of input list lazily.', 'def square_gen(nums):\n    for n in nums:\n        yield n ** 2\n\ng = square_gen([1, 2, 3, 4])\nprint(next(g), next(g))', 'easy')]),
      topic('py-context', 'Context Managers', 'Resource management with with statement and contextlib.', 'advanced', [
        sec('with', 'The with Statement', 'Context managers guarantee setup/teardown via `__enter__` and `__exit__`. Essential for files, locks, DB connections.', {
          example: 'class Timer:\n    def __enter__(self):\n        import time\n        self.start = time.time()\n        return self\n    def __exit__(self, *args):\n        import time\n        print(f"Elapsed: {time.time()-self.start:.4f}s")\n\nwith Timer():\n    sum(range(100000))',
          output: 'Elapsed: 0.0020s',
          keyPoints: ['with guarantees cleanup even on exceptions', '__exit__ receives exception info', 'Return True from __exit__ to suppress exception', 'File handling primary use case'],
        }),
        sec('contextlib', 'contextlib Utilities', '@contextmanager decorator turns generator into context manager. contextlib.suppress, ExitStack for multiple contexts.', {
          example: 'from contextlib import contextmanager\n\n@contextmanager\ndef tag(name):\n    print(f"<{name}>")\n    yield\n    print(f"</{name}>")\n\nwith tag("div"):\n    print("content")',
          output: '<div>\ncontent\n</div>',
          keyPoints: ['contextmanager decorator simplifies creation', 'yield separates enter and exit logic', 'ExitStack manages dynamic context count', 'suppress catches specific exceptions'],
        }),
        sec('file-context', 'File Handling Pattern', 'Always: `with open(path, "r", encoding="utf-8") as f:`. Automatic close even on error.', {
          example: '# Pattern demonstration\ncontent = "Hello, File!"\nlines = content.split("\\n")\nprint(len(lines), lines[0])',
          output: '1 Hello, File!',
          keyPoints: ['with open is the only correct file pattern', 'Specify encoding explicitly', 'Use json.load inside with block', 'Pathlib improves path handling'],
        }),
        sec('async-context', 'Async Context Managers', 'async with for async __aenter__/__aexit__. Required for async DB sessions and HTTP clients.', {
          keyPoints: ['async with for asyncio resources', '@asynccontextmanager decorator available', 'Used in FastAPI lifespan events', 'Ensure proper await in async contexts'],
        }),
      ], [ex('ex-ctx-1', 'Create a context manager that prints "START" and "END".', 'from contextlib import contextmanager\n\n@contextmanager\ndef bookend():\n    print("START")\n    yield\n    print("END")\n\nwith bookend():\n    print("middle")', 'easy'), ex('ex-ctx-2', 'Use suppress to ignore ZeroDivisionError.', 'from contextlib import suppress\n\nresult = None\nwith suppress(ZeroDivisionError):\n    result = 1 / 0\nprint(result)', 'easy')]),
      topic('py-typehints', 'Type Hints & dataclasses', 'Static typing, dataclasses, and modern Python data modeling.', 'advanced', [
        sec('hints', 'Type Annotations', 'Annotate parameters and returns: `def greet(name: str) -> str:`. Use list[int], dict[str, float] (Python 3.9+). Optional[X] or X | None for nullable.', {
          example: 'def process(items: list[int], threshold: float = 0.5) -> dict[str, int]:\n    above = [x for x in items if x > threshold * max(items)]\n    return {"count": len(above), "max": max(above) if above else 0}\n\nprint(process([1, 5, 3, 9, 2]))',
          output: "{'count': 2, 'max': 9}",
          keyPoints: ['Type hints are not enforced at runtime', 'mypy/pyright check statically', 'Use from __future__ import annotations for forward refs', 'Gradual typing — add incrementally'],
        }),
        sec('dataclass', 'dataclasses Module', '@dataclass generates boilerplate. field() for defaults. frozen, order, slots options.', {
          example: 'from dataclasses import dataclass, field\n\n@dataclass\nclass ModelConfig:\n    name: str\n    layers: int = 3\n    hidden_dims: list[int] = field(default_factory=lambda: [64, 128])\n\nprint(ModelConfig("mlp"))',
          output: "ModelConfig(name='mlp', layers=3, hidden_dims=[64, 128])",
          keyPoints: ['default_factory for mutable defaults', 'frozen=True makes immutable', 'asdict() and astuple() for conversion', 'Preferred over namedtuple for mutable data'],
        }),
        sec('pydantic', 'Pydantic & Validation', 'Pydantic BaseModel validates at runtime. Essential for API schemas, config, and ML pipeline configs.', {
          keyPoints: ['Pydantic v2 uses Rust core — very fast', 'Automatic JSON serialization', 'Used in FastAPI request/response models', 'Validate ML experiment configs with Pydantic'],
        }),
        sec('typing-advanced', 'Advanced Typing', 'Union, Literal, TypedDict, Callable, TypeVar, Protocol. Enables precise interfaces for complex codebases.', {
          keyPoints: ['TypedDict for structured dicts', 'Literal for fixed value sets', 'Callable[[int, str], bool] for function types', 'Essential for large ML codebases'],
        }),
      ], [ex('ex-type-1', 'Create a dataclass Point3D with x, y, z floats.', 'from dataclasses import dataclass\n\n@dataclass\nclass Point3D:\n    x: float\n    y: float\n    z: float\n\nprint(Point3D(1.0, 2.0, 3.0))', 'easy'), ex('ex-type-2', 'Write a typed function mean(values: list[float]) -> float.', 'def mean(values: list[float]) -> float:\n    return sum(values) / len(values)\n\nprint(mean([1.0, 2.0, 3.0, 4.0]))', 'easy')]),
      topic('py-modules', 'Modules, Packages & pip', 'Organizing code into modules, packages, and distributing with pip.', 'advanced', [
        sec('imports', 'Import System', '`import module`, `from module import name`, `from package.sub import Class`. __init__.py marks packages. Relative imports with dots.', {
          example: '# Standard import patterns:\n# import numpy as np\n# from sklearn.model_selection import train_test_split\nprint("Organize code into focused modules")',
          output: 'Organize code into focused modules',
          keyPoints: ['One module per logical unit', 'Avoid import * — pollutes namespace', 'Use absolute imports in packages', '__all__ controls from module import *'],
        }),
        sec('packages', 'Package Structure', '```\nmypackage/\n  __init__.py\n  core.py\n  utils/\n    __init__.py\n    helpers.py\n```\nUse pyproject.toml for modern project config.', {
          keyPoints: ['src/ layout prevents import confusion', 'pyproject.toml replaces setup.py', '__init__.py can expose public API', 'Namespace packages for large projects'],
        }),
        sec('publishing', 'Publishing Packages', 'Build with `python -m build`. Upload to PyPI with `twine upload`. Semantic versioning: MAJOR.MINOR.PATCH.', {
          keyPoints: ['Follow semantic versioning', 'README and LICENSE required for PyPI', 'Test with TestPyPI first', 'Pin dependencies in published packages'],
        }),
        sec('stdlib', 'Essential Standard Library', 'os, sys, pathlib, json, csv, datetime, collections, itertools, functools, argparse, logging, unittest.', {
          keyPoints: ['Know stdlib before adding dependencies', 'pathlib over os.path', 'logging over print for production', 'argparse or click for CLI tools'],
        }),
      ], [ex('ex-mod-1', 'Write __all__ = ["add", "subtract"] for a module exposing those functions.', '__all__ = ["add", "subtract"]\n\ndef add(a, b): return a + b\ndef subtract(a, b): return a - b\ndef _internal(): pass\n\nprint(__all__)', 'easy'), ex('ex-mod-2', 'Use pathlib to join path components for "data/raw/train.csv".', 'from pathlib import Path\np = Path("data") / "raw" / "train.csv"\nprint(str(p))', 'easy')]),
    ].map((t) => ({ ...t, track: 'python' })),
  },
  {
    num: 6, id: 'module-06', fileName: 'module06-numpy', exportName: 'module06Topics',
    name: 'NumPy & Scientific Computing', track: 'data',
    description: 'NumPy arrays, broadcasting, linear algebra, and vectorized computation.',
    topics: [
      topic('np-arrays', 'NumPy Arrays Fundamentals', 'Create and manipulate ndarrays — the foundation of scientific Python.', 'beginner', [
        sec('create', 'Creating Arrays', 'NumPy ndarrays are homogeneous, fixed-size multidimensional arrays. Create from lists: `np.array([1,2,3])`, zeros, ones, arange, linspace.', {
          example: 'import numpy as np\n\na = np.array([1, 2, 3, 4, 5])\nb = np.zeros((2, 3))\nc = np.arange(0, 10, 2)\nd = np.linspace(0, 1, 5)\nprint(a.shape, b.shape, c, d)',
          output: '(5,) (2, 3) [0 2 4 6 8] [0.   0.25 0.5  0.75 1.  ]',
          keyPoints: ['ndarray is homogeneous — single dtype', 'shape tuple describes dimensions', 'arange for step-based ranges', 'linspace for evenly spaced floats'],
        }),
        sec('dtype', 'Data Types', 'dtype determines memory and precision: int32, float64, bool_, complex128. Specify: `np.array([1,2], dtype=np.float32)`.', {
          example: 'import numpy as np\n\na = np.array([1, 2, 3], dtype=np.float32)\nprint(a.dtype, a.nbytes)\nb = a.astype(np.int64)\nprint(b.dtype)',
          output: 'float32 12\nint64',
          keyPoints: ['float64 default for floats', 'float32 saves memory in deep learning', 'astype creates copy with new dtype', 'dtype mismatch can cause subtle bugs'],
        }),
        sec('attrs', 'Array Attributes', '.shape, .ndim, .size, .dtype, .itemsize. reshape() changes shape without copying data (usually).', {
          example: 'import numpy as np\n\na = np.arange(12).reshape(3, 4)\nprint(a.shape, a.ndim, a.size)\nprint(a.reshape(2, 6))',
          output: '(3, 4) 2 12\n[[ 0  1  2  3  4  5]\n [ 6  7  8  9 10 11]]',
          keyPoints: ['size = product of shape dimensions', 'reshape total elements must match', '-1 in reshape auto-calculates dimension', 'ravel() returns flattened view'],
        }),
        sec('vs-list', 'Arrays vs Python Lists', 'NumPy: fixed type, vectorized ops, contiguous memory, C-speed. Lists: heterogeneous, slower for numeric work. Always prefer NumPy for numerics.', {
          keyPoints: ['Vectorization eliminates Python loops', '10-100x speedup typical for numeric ops', 'Memory efficient contiguous storage', 'Foundation for pandas, sklearn, pytorch'],
        }),
      ], [ex('ex-np-1', 'Create a 3x3 array of zeros and set center element to 1.', 'import numpy as np\na = np.zeros((3, 3))\na[1, 1] = 1\nprint(a)', 'easy'), ex('ex-np-2', 'Create array [0, 0.25, 0.5, 0.75, 1.0] using linspace.', 'import numpy as np\nprint(np.linspace(0, 1, 5))', 'easy')]),
      topic('np-indexing', 'Array Indexing & Broadcasting', 'Slicing, boolean indexing, fancy indexing, and broadcasting rules.', 'beginner', [
        sec('slicing', 'Array Indexing & Slicing', 'Same as lists but multidimensional: `arr[row, col]`. Slicing creates views (not copies) — modifying view affects original!', {
          example: 'import numpy as np\n\na = np.arange(10)\nprint(a[2:7:2])\nb = np.arange(12).reshape(3, 4)\nprint(b[1, :2])\nprint(b[:, -1])',
          output: '[2 4 6]\n[4 5]\n[ 3  7 11]',
          keyPoints: ['Multidimensional indexing with commas', 'Slicing creates views — beware aliasing', 'copy() for independent arrays', 'Boolean indexing for filtering'],
        }),
        sec('boolean', 'Boolean & Fancy Indexing', 'Boolean mask: `arr[arr > 0]`. Fancy indexing with integer arrays selects specific elements.', {
          example: 'import numpy as np\n\na = np.array([10, -3, 5, -1, 8])\nprint(a[a > 0])\nidx = np.array([0, 2, 4])\nprint(a[idx])',
          output: '[10  5  8]\n[10  5  8]',
          keyPoints: ['Boolean indexing for conditional selection', 'Fancy indexing with integer arrays', 'Boolean indexing returns copy', 'np.where for conditional replacement'],
        }),
        sec('broadcast', 'Broadcasting Rules', 'NumPy stretches smaller arrays to match shapes. Rules: align trailing dimensions; size 1 broadcasts; mismatched non-1 sizes error.', {
          example: 'import numpy as np\n\na = np.array([[1, 2, 3], [4, 5, 6]])\nb = np.array([10, 20, 30])\nprint(a + b)',
          output: '[[11 22 33]\n [14 25 36]]',
          keyPoints: ['Broadcasting avoids explicit loops', 'Trailing dimensions compared', 'Size-1 dimensions stretch', 'Essential for ML batch operations'],
        }),
        sec('vectorize', 'Vectorized Operations', 'Element-wise: +, -, *, /, **. Universal functions (ufuncs): np.sin, np.exp, np.log. Aggregations: .sum(), .mean(), .std(), axis parameter.', {
          example: 'import numpy as np\n\na = np.array([[1, 2], [3, 4]])\nprint(a.sum(), a.sum(axis=0), a.mean(axis=1))',
          output: '10 [4 6] [1.5 3.5]',
          keyPoints: ['axis=0 collapses rows (column-wise)', 'axis=1 collapses columns (row-wise)', 'keepdims preserves dimensions', 'np.einsum for advanced tensor ops'],
        }),
      ], [ex('ex-np-idx-1', 'Filter array to keep only values > 5.', 'import numpy as np\na = np.array([3, 7, 2, 9, 4, 6])\nprint(a[a > 5])', 'easy'), ex('ex-np-idx-2', 'Add row vector to matrix using broadcasting.', 'import numpy as np\nm = np.ones((3, 4))\nv = np.array([1, 2, 3, 4])\nprint(m + v)', 'easy')]),
      topic('np-linalg', 'Linear Algebra with NumPy', 'Matrix operations, dot products, decomposition, and solving linear systems.', 'beginner', [
        sec('matmul', 'Matrix Multiplication', 'np.dot(a, b) or a @ b (Python 3.5+). Inner product for 1D, matrix multiply for 2D. np.matmul preferred.', {
          example: 'import numpy as np\n\nA = np.array([[1, 2], [3, 4]])\nB = np.array([[5, 6], [7, 8]])\nprint(A @ B)',
          output: '[[19 22]\n [43 50]]',
          keyPoints: ['@ operator for matrix multiplication', 'Element-wise * is NOT matrix multiply', 'np.dot handles various dimensions', 'Order matters: AB ≠ BA generally'],
        }),
        sec('linalg', 'np.linalg Module', 'det, inv, eig, svd, solve. **Never invert matrices directly for solving Ax=b** — use np.linalg.solve(A, b).', {
          example: 'import numpy as np\n\nA = np.array([[3, 1], [1, 2]])\nb = np.array([9, 8])\nx = np.linalg.solve(A, b)\nprint(x)',
          output: '[2. 3.]',
          keyPoints: ['solve() numerically stable vs inv() @ b', 'SVD fundamental for PCA and ML', 'eig for eigenvalue problems', 'cond() checks matrix conditioning'],
        }),
        sec('norm', 'Norms & Distances', 'np.linalg.norm for vector/matrix norms. Combined with broadcasting for pairwise distances.', {
          example: 'import numpy as np\n\nv = np.array([3, 4])\nprint(np.linalg.norm(v))\nprint(np.sqrt(v @ v))',
          output: '5.0\n5.0',
          keyPoints: ['L2 norm is default Euclidean distance', 'Norms measure vector magnitude', 'Distance matrices via broadcasting', 'Cosine similarity common in NLP/ML'],
        }),
        sec('applications', 'ML Applications', 'Linear regression: w = (X^T X)^(-1) X^T y. PCA via SVD. Neural network layers are matrix multiplications.', {
          keyPoints: ['All DL is matrix multiplication at core', 'SVD powers dimensionality reduction', 'Normal equations for linear regression', 'Use float32 for GPU efficiency'],
        }),
      ], [ex('ex-linalg-1', 'Compute dot product of [1,2,3] and [4,5,6].', 'import numpy as np\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nprint(a @ b)', 'easy'), ex('ex-linalg-2', 'Solve 2x + y = 5, x - y = 1 using np.linalg.solve.', 'import numpy as np\nA = np.array([[2, 1], [1, -1]])\nb = np.array([5, 1])\nprint(np.linalg.solve(A, b))', 'medium')]),
      topic('np-random', 'Random & Statistics', 'Random number generation and statistical operations with NumPy.', 'beginner', [
        sec('rng', 'Random Number Generation', 'np.random.default_rng(seed) for reproducible randomness. .random(), .integers(), .normal(), .choice().', {
          example: 'import numpy as np\n\nrng = np.random.default_rng(42)\nprint(rng.random(5))\nprint(rng.integers(1, 10, size=5))\nprint(rng.normal(0, 1, 5))',
          output: '[0.77395605 0.43887844 0.85859792 0.69736803 0.09417735]\n[8 8 8 3 8]\n[ 0.49671415 -0.1382643   0.64768854  1.52302986 -0.23415337]',
          keyPoints: ['Always set seed for reproducibility', 'default_rng is modern API', 'normal(loc, scale, size) for Gaussian', 'choice for random sampling'],
        }),
        sec('stats', 'Statistical Functions', 'np.mean, np.median, np.std, np.var, np.percentile, np.corrcoef. axis parameter for multidimensional stats.', {
          example: 'import numpy as np\n\ndata = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])\nprint(np.mean(data), np.std(data))\nprint(np.percentile(data, [25, 50, 75]))',
          output: '5.5 2.8722813232690143\n[3.25 5.5  7.75]',
          keyPoints: ['std default is population (ddof=0)', 'ddof=1 for sample standard deviation', 'percentile for quartiles and outliers', 'corrcoef for feature correlation analysis'],
        }),
        sec('shuffle', 'Shuffling & Sampling', 'rng.shuffle() in-place. rng.permutation() returns shuffled copy. train/test splits use permutation.', {
          example: 'import numpy as np\n\nrng = np.random.default_rng(42)\ndata = np.arange(10)\nperm = rng.permutation(data)\nprint(perm)',
          keyPoints: ['Shuffle before train/test split', 'permutation preserves original', 'choice(replace=False) for sampling without replacement', 'Bootstrap uses sampling with replacement'],
        }),
        sec('distributions', 'Probability Distributions', 'rng.uniform, binomial, poisson, exponential. Understanding distributions essential for ML probabilistic models.', {
          keyPoints: ['Normal distribution central to ML', 'Binomial for classification simulation', 'Distribution choice affects synthetic data', 'Scipy.stats for advanced distributions'],
        }),
      ], [ex('ex-rand-1', 'Generate 5 random floats between 0 and 1 with seed 0.', 'import numpy as np\nrng = np.random.default_rng(0)\nprint(rng.random(5))', 'easy'), ex('ex-rand-2', 'Compute mean and std of array [2, 4, 4, 4, 5, 5, 7, 9].', 'import numpy as np\nd = np.array([2, 4, 4, 4, 5, 5, 7, 9])\nprint(np.mean(d), round(np.std(d), 2))', 'easy')]),
      topic('np-perf', 'Performance & Vectorization', 'Write fast NumPy code avoiding Python loops.', 'beginner', [
        sec('vectorize', 'Avoid Python Loops', 'Replace loops with vectorized operations. np.vectorize is convenience, not performance — true vectorization uses ufuncs.', {
          example: 'import numpy as np\n\na = np.arange(1000000)\n# Vectorized — fast\nb = a ** 2 + 2 * a + 1\nprint(b[:5])',
          output: '[ 1  4  9 16 25]',
          keyPoints: ['Python loops on arrays are slow', 'Ufuncs run at C speed', 'Broadcasting eliminates nested loops', 'Profile with %timeit before optimizing'],
        }),
        sec('memory', 'Memory Layout', 'C-contiguous (row-major) vs Fortran-contiguous (column-major). .flags, np.ascontiguousarray. Affects cache performance.', {
          keyPoints: ['Row-major default in NumPy/C', 'Column-major in Fortran/MATLAB', 'Contiguous arrays faster for operations', 'ravel vs flatten — view vs copy'],
        }),
        sec('einsum', 'np.einsum', 'Einstein summation for concise tensor operations. Powers attention mechanisms and batch operations.', {
          example: 'import numpy as np\n\nA = np.arange(6).reshape(2, 3)\nB = np.arange(9).reshape(3, 3)\nprint(np.einsum("ij,jk->ik", A, B))',
          keyPoints: ['einsum expresses complex tensor ops', 'Used in transformer attention', 'More readable than nested transpose/matmul', 'Optimize einsum path for performance'],
        }),
        sec('numba', 'Numba & Cython Preview', 'When NumPy insufficient, @numba.jit compiles Python to machine code. Cython for C-speed extensions.', {
          keyPoints: ['Numba JIT for custom numeric loops', 'nopython mode for max speed', 'Cython for production extensions', 'Prefer vectorization first, JIT second'],
        }),
      ], [ex('ex-perf-1', 'Vectorized: compute y = 2*x + 1 for array of 10 elements.', 'import numpy as np\nx = np.arange(10)\ny = 2 * x + 1\nprint(y)', 'easy'), ex('ex-perf-2', 'Use boolean indexing to replace negative values with 0.', 'import numpy as np\na = np.array([3, -1, 5, -2, 8])\na[a < 0] = 0\nprint(a)', 'easy')]),
    ].map((t) => ({ ...t, track: 'data' })),
  },
  {
    num: 7, id: 'module-07', fileName: 'module07-pandas', exportName: 'module07Topics',
    name: 'Pandas & Data Wrangling', track: 'data',
    description: 'DataFrames, indexing, groupby, merging, and time series analysis.',
    topics: [
      topic('pd-dataframes', 'Series & DataFrames', 'Pandas one-dimensional Series and two-dimensional DataFrames.', 'beginner', [
        sec('series', 'Series', 'Series is labeled 1D array. Create from dict or list with index. .loc[] label-based, .iloc[] integer-based access.', {
          example: 'import pandas as pd\n\ns = pd.Series([10, 20, 30], index=["a", "b", "c"])\nprint(s["b"])\nprint(s.loc["a":"b"])',
          output: '20\na    10\nb    20\ndtype: int64',
          keyPoints: ['Series has data and index', 'Index enables label-based access', 'Automatic alignment on operations', 'Series is column of DataFrame'],
        }),
        sec('dataframe', 'DataFrame Creation', 'From dict of lists, CSV, JSON, SQL. Columns are Series. .head(), .info(), .describe() for exploration.', {
          example: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "name": ["Alice", "Bob", "Charlie"],\n    "age": [25, 30, 35],\n    "score": [95, 87, 92]\n})\nprint(df.describe())',
          output: '             age      score\ncount   3.000000   3.000000\nmean   30.000000  91.333333\nstd     5.000000   4.041452\nmin    25.000000  87.000000\n25%    27.500000  89.500000\n50%    30.000000  92.000000\n75%    32.500000  93.500000\nmax    35.000000  95.000000',
          keyPoints: ['DataFrame is primary pandas structure', 'describe() gives numeric summary', 'info() shows dtypes and non-null counts', 'read_csv most common ingestion method'],
        }),
        sec('selection', 'Column & Row Selection', 'df["col"], df[["col1","col2"]], df.loc[rows, cols], df.iloc[i,j]. Avoid chained indexing.', {
          example: 'import pandas as pd\n\ndf = pd.DataFrame({"A": [1,2,3], "B": [4,5,6], "C": [7,8,9]})\nprint(df.loc[0:1, ["A", "C"]])',
          output: '   A  C\n0  1  7\n1  2  8',
          keyPoints: ['Single brackets for column, double for multiple', 'loc is label-based inclusive', 'iloc is integer-based exclusive on stop', 'Avoid df[df.A > 0]["B"] chained indexing'],
        }),
        sec('dtypes', 'Data Types', 'object (strings), int64, float64, bool, datetime64, category. astype() for conversion. pd.to_numeric, pd.to_datetime.', {
          keyPoints: ['category dtype saves memory for repeated strings', 'Parse dates early with to_datetime', 'Downcast numeric types to save memory', 'String dtype (StringDtype) in modern pandas'],
        }),
      ], [ex('ex-pd-1', 'Create DataFrame with columns name and score, 3 rows.', 'import pandas as pd\ndf = pd.DataFrame({"name": ["A","B","C"], "score": [90, 85, 88]})\nprint(df)', 'easy'), ex('ex-pd-2', 'Select rows where score > 86.', 'import pandas as pd\ndf = pd.DataFrame({"name": ["A","B","C"], "score": [90, 85, 88]})\nprint(df[df["score"] > 86])', 'easy')]),
      topic('pd-indexing', 'Indexing, Filtering & Selection', 'Advanced indexing with query, isin, and boolean masks.', 'beginner', [
        sec('boolean', 'Boolean Filtering', 'df[df["col"] > value], combine with & | ~. Parentheses required: `(df.A > 0) & (df.B < 10)`.', {
          example: 'import pandas as pd\n\ndf = pd.DataFrame({"age": [22, 35, 45, 28], "salary": [50000, 80000, 95000, 60000]})\nprint(df[(df["age"] > 25) & (df["salary"] > 55000)])',
          output: '   age  salary\n1   35   80000\n2   45   95000',
          keyPoints: ['Use & not and for element-wise logic', 'Wrap each condition in parentheses', 'isin() for membership tests', 'query() method for readable filters'],
        }),
        sec('query', 'query() Method', 'df.query("age > 25 and salary > 55000") — cleaner for complex filters. Use @ for external variables.', {
          example: 'import pandas as pd\n\ndf = pd.DataFrame({"x": [1, 5, 3, 8], "y": [2, 4, 6, 10]})\nprint(df.query("x > 2 and y < 10"))',
          output: '   x   y\n1  5   4\n2  3   6',
          keyPoints: ['query uses expression strings', '@var references Python variable', 'Often faster for large DataFrames', 'Column names with spaces need backticks'],
        }),
        sec('assign', 'assign() & apply()', 'assign() adds columns functionally. apply() row/column-wise — prefer vectorized ops when possible.', {
          example: 'import pandas as pd\n\ndf = pd.DataFrame({"a": [1, 2, 3], "b": [4, 5, 6]})\ndf = df.assign(total=lambda x: x["a"] + x["b"])\nprint(df)',
          output: '   a  b  total\n0  1  4      5\n1  2  5      7\n2  3  6      9',
          keyPoints: ['assign returns new DataFrame — chainable', 'Lambda x refers to DataFrame', 'Vectorized ops beat apply() for speed', 'map() for element-wise dict/Series lookup'],
        }),
        sec('sort', 'Sorting & Ranking', 'sort_values(by, ascending), sort_index(). rank() for ordinal ranking. nlargest, nsmallest shortcuts.', {
          example: 'import pandas as pd\n\ndf = pd.DataFrame({"name": ["Bob", "Alice", "Charlie"], "score": [87, 95, 92]})\nprint(df.sort_values("score", ascending=False))',
          keyPoints: ['sort_values for column sorting', 'rank handles ties with method parameter', 'nlargest efficient for top-k', 'Stable sort preserves equal element order'],
        }),
      ], [ex('ex-pd-idx-1', 'Filter rows where city is "NYC" or "LA".', 'import pandas as pd\ndf = pd.DataFrame({"city": ["NYC", "LA", "Chicago", "NYC"]})\nprint(df[df["city"].isin(["NYC", "LA"])])', 'easy'), ex('ex-pd-idx-2', 'Add column double = value * 2 using assign.', 'import pandas as pd\ndf = pd.DataFrame({"value": [1, 2, 3]})\nprint(df.assign(double=lambda x: x["value"] * 2))', 'easy')]),
      topic('pd-groupby', 'GroupBy & Aggregations', 'Split-apply-combine pattern for grouped analysis.', 'beginner', [
        sec('groupby', 'groupby Basics', 'df.groupby("col") splits into groups. .agg(), .mean(), .sum(), .count() aggregate. Multiple columns: groupby(["a","b"]).', {
          example: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "dept": ["Sales", "Sales", "Eng", "Eng"],\n    "salary": [50000, 60000, 80000, 90000]\n})\nprint(df.groupby("dept")["salary"].mean())',
          output: 'dept\nEng      85000.0\nSales    55000.0\nName: salary, dtype: float64',
          keyPoints: ['groupby is split-apply-combine', 'as_index=False keeps group columns', 'agg accepts dict or list of functions', 'size() counts rows per group'],
        }),
        sec('agg', 'Multiple Aggregations', '.agg({"col": ["mean", "std", "count"]}) or named aggregations: .agg(avg_salary=("salary", "mean")).', {
          example: 'import pandas as pd\n\ndf = pd.DataFrame({"group": ["A","A","B","B"], "val": [10, 20, 30, 40]})\nprint(df.groupby("group").agg(min_val=("val", "min"), max_val=("val", "max"), avg=("val", "mean")))',
          output: '       min_val  max_val   avg\ngroup                         \nA           10       20  15.0\nB           30       40  35.0',
          keyPoints: ['Named aggregations produce clean column names', 'Multiple functions per column', 'transform() returns same shape as input', 'filter() filters groups by condition'],
        }),
        sec('pivot', 'pivot_table & crosstab', 'pivot_table for multidimensional summaries. pd.crosstab for frequency tables.', {
          example: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "date": ["2024-01", "2024-01", "2024-02", "2024-02"],\n    "product": ["A", "B", "A", "B"],\n    "sales": [100, 150, 120, 180]\n})\nprint(pd.pivot_table(df, values="sales", index="date", columns="product", aggfunc="sum"))',
          keyPoints: ['pivot_table handles duplicates via aggfunc', 'crosstab for categorical frequency analysis', 'margins=True adds row/column totals', 'melt() is inverse of pivot'],
        }),
        sec('window', 'Rolling & Expanding Windows', 'rolling(window).mean() for moving averages. expanding() for cumulative stats. Essential for time series.', {
          keyPoints: ['rolling for sliding window statistics', 'expanding for cumulative metrics', 'ewm for exponential weighted', 'shift() for lag features in ML'],
        }),
      ], [ex('ex-gb-1', 'Group by category and compute sum of values.', 'import pandas as pd\ndf = pd.DataFrame({"cat": ["X","X","Y","Y"], "val": [1, 2, 3, 4]})\nprint(df.groupby("cat")["val"].sum())', 'easy'), ex('ex-gb-2', 'Get average score per department using named aggregation.', 'import pandas as pd\ndf = pd.DataFrame({"dept": ["A","A","B"], "score": [80, 90, 85]})\nprint(df.groupby("dept").agg(avg_score=("score", "mean")))', 'medium')]),
      topic('pd-merge', 'Merging, Joining & Reshaping', 'Combine DataFrames with merge, concat, join. Reshape with melt and pivot.', 'beginner', [
        sec('merge', 'merge Operations', 'pd.merge(left, right, on="key", how="inner|outer|left|right"). SQL-like joins on column values.', {
          example: 'import pandas as pd\n\norders = pd.DataFrame({"id": [1, 2], "product_id": [101, 102]})\nproducts = pd.DataFrame({"product_id": [101, 102], "name": ["Widget", "Gadget"]})\nprint(pd.merge(orders, products, on="product_id"))',
          output: '   id  product_id     name\n0   1         101   Widget\n1   2         102   Gadget',
          keyPoints: ['inner join keeps matching rows only', 'left join keeps all left rows', 'validate="one_to_many" catches bad joins', 'indicator=True shows join source'],
        }),
        sec('concat', 'concat & append', 'pd.concat([df1, df2], axis=0) stacks vertically. axis=1 concatenates horizontally. ignore_index resets index.', {
          example: 'import pandas as pd\n\ndf1 = pd.DataFrame({"A": [1, 2]})\ndf2 = pd.DataFrame({"A": [3, 4]})\nprint(pd.concat([df1, df2], ignore_index=True))',
          output: '   A\n0  1\n1  2\n2  3\n3  4',
          keyPoints: ['concat for same-structure DataFrames', 'join="outer" handles different columns', 'keys parameter creates hierarchical index', 'Prefer concat over deprecated append'],
        }),
        sec('reshape', 'melt & pivot', 'melt() wide-to-long. pivot() long-to-wide. stack/unstack for MultiIndex.', {
          keyPoints: ['melt essential for tidy data format', 'Tidy data: one row per observation', 'stack/unstack for MultiIndex manipulation', 'get_dummies for one-hot encoding'],
        }),
        sec('join-index', 'Index-based Joins', 'df1.join(df2, on="key") or join on index. set_index before join for index alignment.', {
          keyPoints: ['Set index for repeated join operations', 'join method on DataFrame uses indexes', 'align indices before arithmetic operations', 'reindex for explicit index alignment'],
        }),
      ], [ex('ex-merge-1', 'Inner merge two DataFrames on id column.', 'import pandas as pd\na = pd.DataFrame({"id": [1,2], "val": [10, 20]})\nb = pd.DataFrame({"id": [1,2], "name": ["X","Y"]})\nprint(pd.merge(a, b, on="id"))', 'easy'), ex('ex-merge-2', 'Concatenate two DataFrames vertically.', 'import pandas as pd\ndf1 = pd.DataFrame({"x": [1]})\ndf2 = pd.DataFrame({"x": [2]})\nprint(pd.concat([df1, df2]))', 'easy')]),
      topic('pd-missing', 'Missing Data & Time Series', 'Handle NaN values and work with datetime indices.', 'beginner', [
        sec('missing', 'Handling Missing Data', 'isna(), notna(), dropna(), fillna(). interpolate() for gap filling. Missingness patterns matter for ML.', {
          example: 'import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({"A": [1, np.nan, 3], "B": [4, 5, np.nan]})\nprint(df.fillna({"A": df["A"].mean(), "B": 0}))',
          output: '     A    B\n0  1.0  4.0\n1  2.0  5.0\n2  3.0  0.0',
          keyPoints: ['Never drop all missing blindly in ML', 'Understand MCAR, MAR, MNAR missingness', 'fillna with mean/median/mode or model-based', 'isna().sum() counts missing per column'],
        }),
        sec('datetime', 'Datetime Operations', 'pd.to_datetime(), DatetimeIndex, .dt accessor for year/month/day. resample() for time aggregation.', {
          example: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "date": pd.to_datetime(["2024-01-01", "2024-01-15", "2024-02-01"]),\n    "value": [100, 150, 200]\n})\ndf = df.set_index("date")\nprint(df.resample("MS").mean())',
          keyPoints: ['to_datetime parses various formats', 'dt accessor extracts date components', 'resample for time-based aggregation', 'shift/lag for time series features'],
        }),
        sec('tz', 'Timezones', 'tz_localize and tz_convert for timezone-aware datetimes. Critical for global data pipelines.', {
          keyPoints: ['Store UTC, convert for display', 'tz_localize assigns timezone', 'tz_convert changes timezone', 'Ambiguous times during DST transitions'],
        }),
        sec('ts-features', 'Time Series Features for ML', 'Lag features, rolling stats, seasonal decomposition. pandas + statsmodels for analysis.', {
          keyPoints: ['Lag features capture temporal dependencies', 'Rolling windows for local trends', 'Seasonal patterns need explicit encoding', 'Train/test split must respect time order'],
        }),
      ], [ex('ex-miss-1', 'Count missing values per column.', 'import pandas as pd\nimport numpy as np\ndf = pd.DataFrame({"A": [1, np.nan, 3], "B": [4, 5, np.nan]})\nprint(df.isna().sum())', 'easy'), ex('ex-miss-2', 'Extract year from datetime column.', 'import pandas as pd\ndf = pd.DataFrame({"date": pd.to_datetime(["2024-03-15", "2023-06-01"])})\nprint(df["date"].dt.year.tolist())', 'easy')]),
    ].map((t) => ({ ...t, track: 'data' })),
  },
  {
    num: 8, id: 'module-08', fileName: 'module08-visualization', exportName: 'module08Topics',
    name: 'Data Visualization', track: 'data',
    description: 'Matplotlib, Seaborn, Plotly, and visualization best practices.',
    topics: [
      topic('viz-matplotlib', 'Matplotlib Basics', 'Create line, scatter, bar, and histogram plots with pyplot and OO API.', 'beginner', [
        sec('pyplot', 'pyplot Interface', 'import matplotlib.pyplot as plt. plt.plot(), scatter(), bar(), hist(). plt.xlabel, title, legend, show/savefig.', {
          example: 'import matplotlib.pyplot as plt\n\nx = [1, 2, 3, 4, 5]\ny = [2, 4, 6, 8, 10]\nplt.plot(x, y, marker="o", label="y=2x")\nplt.xlabel("x")\nplt.ylabel("y")\nplt.title("Linear Relationship")\nplt.legend()\nplt.savefig("plot.png")\nprint("Plot saved")',
          output: 'Plot saved',
          keyPoints: ['plt.figure(figsize=(w,h)) sets size', 'Always label axes and add title', 'savefig before show in scripts', 'Use dpi=300 for publication quality'],
        }),
        sec('oo-api', 'Object-Oriented API', 'fig, ax = plt.subplots() — preferred for multiple plots. ax.plot(), ax.set_xlabel(). More control than pyplot.', {
          example: 'import matplotlib.pyplot as plt\n\nfig, axes = plt.subplots(1, 2, figsize=(10, 4))\naxes[0].bar(["A", "B", "C"], [3, 7, 5])\naxes[1].hist([1,2,2,3,3,3,4], bins=4)\nplt.tight_layout()\nprint("Subplots created")',
          output: 'Subplots created',
          keyPoints: ['OO API preferred for complex figures', 'subplots creates grid of axes', 'tight_layout prevents overlap', 'ax object methods vs plt functions'],
        }),
        sec('styles', 'Styles & Customization', 'plt.style.use("seaborn-v0_8"). Colors, markers, linewidth, alpha transparency. Colorblind-friendly palettes.', {
          keyPoints: ['Use colorblind-safe palettes', 'Consistent style across project', 'alpha for overlapping points', 'Avoid chartjunk — maximize data-ink ratio'],
        }),
        sec('anatomy', 'Figure Anatomy', 'Figure contains Axes contains Lines/Patches/Text. fig.add_subplot, GridSpec for complex layouts.', {
          keyPoints: ['Figure is top-level container', 'Axes is single plot area', 'Multiple Axes per Figure', 'GridSpec for irregular layouts'],
        }),
      ], [ex('ex-mpl-1', 'Create a bar chart of categories A=5, B=3, C=7.', 'import matplotlib.pyplot as plt\nplt.bar(["A","B","C"], [5,3,7])\nplt.title("Categories")\nprint("Bar chart created")', 'easy'), ex('ex-mpl-2', 'Create figure with 2 subplots side by side.', 'import matplotlib.pyplot as plt\nfig, (ax1, ax2) = plt.subplots(1, 2)\nax1.plot([1,2,3])\nax2.plot([3,2,1])\nprint("2 subplots created")', 'medium')]),
      topic('viz-seaborn', 'Seaborn Statistical Plots', 'High-level statistical visualizations built on matplotlib.', 'beginner', [
        sec('distplot', 'Distribution Plots', 'sns.histplot, kdeplot, displot for distributions. rugplot for individual observations.', {
          example: 'import seaborn as sns\nimport matplotlib.pyplot as plt\nimport numpy as np\n\ndata = np.random.normal(0, 1, 200)\nsns.histplot(data, kde=True)\nprint("Distribution plotted")',
          output: 'Distribution plotted',
          keyPoints: ['kde overlays smooth density estimate', 'binwidth controls histogram granularity', 'displot is figure-level interface', 'Check distribution shape before modeling'],
        }),
        sec('relplot', 'Relational Plots', 'scatterplot, lineplot, relplot. hue for color grouping, size for third dimension.', {
          example: 'import seaborn as sns\nimport pandas as pd\n\ndf = pd.DataFrame({"x": [1,2,3,4], "y": [2,4,5,8], "group": ["A","A","B","B"]})\nsns.scatterplot(data=df, x="x", y="y", hue="group")\nprint("Scatter with hue")',
          output: 'Scatter with hue',
          keyPoints: ['hue encodes categorical variable', 'size/style add more dimensions', 'relplot for faceted relational plots', 'Avoid overplotting with alpha/jitter'],
        }),
        sec('catplot', 'Categorical Plots', 'boxplot, violinplot, barplot, countplot. Compare distributions across categories.', {
          example: 'import seaborn as sns\nimport pandas as pd\n\ndf = pd.DataFrame({"category": ["A","A","B","B"], "value": [1,3,2,5]})\nsns.boxplot(data=df, x="category", y="value")\nprint("Boxplot created")',
          keyPoints: ['boxplot shows quartiles and outliers', 'violinplot shows full distribution shape', 'barplot shows mean with confidence interval', 'order parameter controls x-axis order'],
        }),
        sec('heatmap', 'Heatmaps & Correlation', 'sns.heatmap for correlation matrices. annot=True shows values. Essential for EDA in ML.', {
          example: 'import seaborn as sns\nimport pandas as pd\n\ndf = pd.DataFrame({"A": [1,2,3], "B": [2,4,6], "C": [5,3,1]})\nsns.heatmap(df.corr(), annot=True)\nprint("Correlation heatmap")',
          output: 'Correlation heatmap',
          keyPoints: ['corr() computes pairwise correlation', 'heatmap reveals multicollinearity', 'coolwarm diverging palette for correlations', 'Cluster related features visually'],
        }),
      ], [ex('ex-sns-1', 'Plot histogram of 100 random normal values.', 'import seaborn as sns\nimport numpy as np\nsns.histplot(np.random.normal(0, 1, 100))\nprint("done")', 'easy'), ex('ex-sns-2', 'Create heatmap of 3x3 correlation matrix.', 'import seaborn as sns\nimport pandas as pd\ndf = pd.DataFrame(np_data := [[1,0.5,0.2],[0.5,1,0.3],[0.2,0.3,1]], columns=["A","B","C"])\nsns.heatmap(df, annot=True)\nprint("done")', 'medium')]),
      topic('viz-plotly', 'Plotly Interactive Viz', 'Interactive charts for exploration and dashboards.', 'beginner', [
        sec('plotly-express', 'Plotly Express', 'px.scatter, px.line, px.bar — high-level API. Automatic interactivity: hover, zoom, pan.', {
          example: 'import plotly.express as px\nimport pandas as pd\n\ndf = pd.DataFrame({"x": [1,2,3], "y": [4,5,6], "cat": ["A","B","C"]})\nfig = px.scatter(df, x="x", y="y", color="cat", title="Interactive Scatter")\nprint(fig.data[0].type)',
          output: 'scatter',
          keyPoints: ['Plotly Express for quick interactive plots', 'Hover tooltips automatic', 'Export to HTML for sharing', 'color/discrete_map for custom colors'],
        }),
        sec('plotly-graph', 'Graph Objects', 'go.Figure, go.Scatter for fine control. Subplots with make_subplots. Animations with frames.', {
          keyPoints: ['Graph Objects for custom charts', 'make_subplots for complex dashboards', 'Animation frames for time series', '3D scatter and surface plots available'],
        }),
        sec('dash', 'Dash Preview', 'Plotly Dash builds web dashboards in pure Python. Callbacks for interactivity.', {
          keyPoints: ['Dash for production dashboards', 'dcc components for inputs', 'Callback decorators link inputs to outputs', 'Alternative: Streamlit for simpler apps'],
        }),
        sec('when', 'When to Use Plotly', 'Exploration and dashboards: Plotly. Publications: Matplotlib/Seaborn. Large data: datashader.', {
          keyPoints: ['Plotly for interactive exploration', 'Matplotlib for static publication figures', 'Consider audience and medium', 'Performance degrades with millions of points'],
        }),
      ], [ex('ex-plotly-1', 'Create interactive bar chart with plotly express.', 'import plotly.express as px\ndf = {"cat": ["A","B"], "val": [10, 20]}\nfig = px.bar(df, x="cat", y="val")\nprint(len(fig.data))', 'easy'), ex('ex-plotly-2', 'Create line plot with x=[1,2,3], y=[1,4,9].', 'import plotly.express as px\nfig = px.line(x=[1,2,3], y=[1,4,9])\nprint(fig.layout.title.text)', 'easy')]),
      topic('viz-design', 'Dashboard Design Principles', 'Visual encoding, chart selection, and storytelling with data.', 'beginner', [
        sec('chart-selection', 'Choosing the Right Chart', 'Comparison: bar. Distribution: histogram/violin. Relationship: scatter. Composition: stacked bar/pie (sparingly). Time: line.', {
          keyPoints: ['Match chart type to analytical question', 'Bar charts start at zero', 'Avoid pie charts for many categories', 'Small multiples for comparison across groups'],
        }),
        sec('color', 'Color Theory', 'Sequential for magnitude. Diverging for deviation from midpoint. Categorical for distinct groups. Max 6-8 categorical colors.', {
          keyPoints: ['Colorblind-safe: viridis, ColorBrewer', 'Never use color as only differentiator', 'Consistent color mapping across charts', 'Highlight key data with accent color'],
        }),
        sec('storytelling', 'Data Storytelling', 'Lead with insight, not chart. Annotate key points. Remove clutter. One message per visualization.', {
          keyPoints: ['Title states the insight not the data', 'Remove gridlines and borders if not needed', 'Direct labeling beats legends', 'Guide viewer eye with annotations'],
        }),
        sec('eda-workflow', 'EDA Visualization Workflow', 'Univariate → bivariate → multivariate. Check distributions, correlations, outliers, missing patterns before modeling.', {
          keyPoints: ['pairplot for multivariate overview', 'Check class balance in classification', 'Visualize residuals after modeling', 'Document findings for reproducibility'],
        }),
      ], [ex('ex-design-1', 'List 3 chart types for showing distribution, trend, and comparison.', 'charts = {"distribution": "histogram", "trend": "line", "comparison": "bar"}\nprint(charts)', 'easy'), ex('ex-design-2', 'Write EDA checklist as a Python list of 5 items.', 'eda_checklist = ["missing values", "distributions", "correlations", "outliers", "class balance"]\nprint(len(eda_checklist))', 'easy')]),
      topic('viz-specialized', 'Geospatial & Specialized Charts', 'Maps, network graphs, and domain-specific visualizations.', 'beginner', [
        sec('geopandas', 'Geospatial Visualization', 'GeoPandas extends pandas with geometry. choropleth maps, point maps. folium for interactive maps.', {
          keyPoints: ['GeoPandas for shapefile/GeoJSON data', 'folium for interactive Leaflet maps', 'Projections matter for accurate area comparison', 'Geopy for geocoding addresses'],
        }),
        sec('network', 'Network Graphs', 'networkx + matplotlib/plotly for graph visualization. Nodes and edges for relationship data.', {
          keyPoints: ['networkx for graph algorithms', 'Layout algorithms affect readability', 'Node size/color encode attributes', 'Useful for social and knowledge graphs'],
        }),
        sec('ml-viz', 'ML-Specific Visualizations', 'Confusion matrix heatmap, ROC curves, learning curves, feature importance bar charts, decision boundaries.', {
          example: 'from sklearn.metrics import confusion_matrix\nimport numpy as np\n\ny_true = [0, 1, 0, 1, 0]\ny_pred = [0, 1, 1, 1, 0]\nprint(confusion_matrix(y_true, y_pred))',
          output: '[[2 0]\n [1 2]]',
          keyPoints: ['Confusion matrix for classification errors', 'ROC-AUC visualizes threshold tradeoffs', 'Learning curves diagnose bias/variance', 'SHAP summary plots for feature importance'],
        }),
        sec('tools', 'Specialized Tools', 'datashader for big data viz. plotnine (ggplot2 port). altair for declarative viz. Choose tool for scale and audience.', {
          keyPoints: ['datashader aggregates millions of points', 'Altair declarative grammar of graphics', 'plotnine familiar to R users', 'Tool choice depends on data scale and output medium'],
        }),
      ], [ex('ex-spec-1', 'Compute confusion matrix for y_true=[1,0,1,1], y_pred=[1,0,0,1].', 'from sklearn.metrics import confusion_matrix\nprint(confusion_matrix([1,0,1,1], [1,0,0,1]))', 'easy'), ex('ex-spec-2', 'List 3 ML-specific visualization types.', 'print(["confusion matrix", "ROC curve", "learning curve"])', 'easy')]),
    ].map((t) => ({ ...t, track: 'data' })),
  },
  {
    num: 9, id: 'module-09', fileName: 'module09-ml-math', exportName: 'module09Topics',
    name: 'Math for Machine Learning', track: 'ml',
    description: 'Linear algebra, calculus, probability, and optimization foundations for ML.',
    topics: [
      topic('ml-linear-algebra', 'Linear Algebra Essentials', 'Vectors, matrices, eigenvalues, and their role in ML.', 'beginner', [
        sec('vectors', 'Vectors & Dot Products', 'Vectors represent features and weights. Dot product measures similarity: a·b = Σaᵢbᵢ. Cosine similarity normalizes by magnitude.', {
          example: 'import numpy as np\n\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\ndot = a @ b\ncos_sim = dot / (np.linalg.norm(a) * np.linalg.norm(b))\nprint(dot, round(cos_sim, 4))',
          output: '32 0.9746',
          keyPoints: ['Vectors are ordered lists of numbers', 'Dot product fundamental to neural networks', 'Cosine similarity for text/document similarity', 'Unit vectors have norm 1'],
        }),
        sec('matrices', 'Matrix Operations', 'Matrices transform vectors. Matrix multiplication composes transformations. Transpose, inverse, rank.', {
          example: 'import numpy as np\n\nW = np.array([[1, 2], [3, 4], [5, 6]])  # 3x2\nx = np.array([1, 1])  # 2x1\nprint(W @ x)  # 3x1 output',
          output: '[3 7 11]',
          keyPoints: ['ML layers are matrix multiplications', 'Weight matrix W maps input to output', 'Rank indicates independent dimensions', 'Singular matrices cannot be inverted'],
        }),
        sec('eigen', 'Eigenvalues & Eigenvectors', 'Av = λv. PCA finds principal eigenvectors of covariance matrix. Eigen decomposition reveals data structure.', {
          keyPoints: ['Eigenvectors define principal directions', 'Eigenvalues measure variance along directions', 'PCA uses eigendecomposition of covariance', 'SVD generalizes to non-square matrices'],
        }),
        sec('svd', 'SVD in ML', 'A = UΣVᵀ. Used in PCA, recommender systems, NLP (LSA), and dimensionality reduction.', {
          keyPoints: ['SVD always exists for any matrix', 'Truncated SVD for dimensionality reduction', 'Singular values indicate importance', 'Low-rank approximation compresses data'],
        }),
      ], [ex('ex-la-1', 'Compute L2 norm of vector [3, 4].', 'import numpy as np\nprint(np.linalg.norm([3, 4]))', 'easy'), ex('ex-la-2', 'Matrix multiply [[1,2],[3,4]] by [1, 0].', 'import numpy as np\nprint(np.array([[1,2],[3,4]]) @ np.array([1, 0]))', 'easy')]),
      topic('ml-calculus', 'Calculus for ML', 'Derivatives, gradients, chain rule, and partial derivatives for optimization.', 'beginner', [
        sec('derivatives', 'Derivatives & Gradients', 'Derivative measures rate of change. Gradient ∇f is vector of partial derivatives — points direction of steepest ascent.', {
          example: '# f(x, y) = x^2 + y^2\n# df/dx = 2x, df/dy = 2y\n# At (3, 4): gradient = [6, 8]\nimport numpy as np\nx, y = 3, 4\ngrad = np.array([2*x, 2*y])\nprint(grad, np.linalg.norm(grad))',
          output: '[6 8] 10.0',
          keyPoints: ['Gradient points uphill on loss surface', 'Negative gradient direction minimizes loss', 'Partial derivatives hold other variables fixed', 'Gradient is foundation of gradient descent'],
        }),
        sec('chain-rule', 'Chain Rule & Backpropagation', 'Chain rule: d/dx f(g(x)) = f\'(g(x)) · g\'(x). Backpropagation applies chain rule through computational graph.', {
          pseudoCode: 'FOR each layer L from output to input:\n    compute local gradient\n    propagate gradient to previous layer via chain rule',
          keyPoints: ['Chain rule enables gradient flow through networks', 'Backprop is efficient application of chain rule', 'Computational graph tracks dependencies', 'Automatic differentiation automates chain rule'],
        }),
        sec('loss-gradients', 'Gradients of Common Loss Functions', 'MSE: ∂/∂ŷ = 2(ŷ-y). Cross-entropy with softmax has elegant gradient: ŷ - y. Know these for debugging.', {
          example: 'import numpy as np\n\ny_true = np.array([1.0, 3.0, 5.0])\ny_pred = np.array([1.5, 2.5, 5.5])\nmse_grad = 2 * (y_pred - y_true) / len(y_true)\nprint(mse_grad)',
          output: '[ 0.33333333 -0.33333333  0.33333333]',
          keyPoints: ['MSE gradient proportional to error', 'Cross-entropy gradient simplifies with softmax', 'Gradient magnitude indicates update size', 'Vanishing gradients plague deep networks'],
        }),
        sec('jacobian', 'Jacobian & Hessian', 'Jacobian matrix of vector-valued functions. Hessian (second derivatives) for curvature. Newton method uses Hessian.', {
          keyPoints: ['Jacobian generalizes gradient to vector outputs', 'Hessian reveals convexity/concavity', 'Second-order methods converge faster but cost more', 'Most DL uses first-order (gradient) methods only'],
        }),
      ], [ex('ex-calc-1', 'Compute gradient of f(x)=x^2 at x=3.', 'x = 3\nprint(2 * x)', 'easy'), ex('ex-calc-2', 'Compute MSE gradient for y=[1,2], pred=[1.5, 2.5].', 'import numpy as np\ny = np.array([1.0, 2.0])\npred = np.array([1.5, 2.5])\nprint(2 * (pred - y) / len(y))', 'medium')]),
      topic('ml-probability', 'Probability & Distributions', 'Probability theory, Bayes theorem, and key distributions for ML.', 'beginner', [
        sec('basics', 'Probability Fundamentals', 'P(A|B) = P(A∩B)/P(B). Bayes: P(A|B) = P(B|A)P(A)/P(B). Foundation for Naive Bayes and Bayesian ML.', {
          example: '# Bayes: P(disease|+) = P(+|disease)*P(disease)/P(+)\np_disease = 0.01\np_pos_given_disease = 0.99\np_pos = 0.01*0.99 + 0.99*0.05\np_disease_given_pos = p_pos_given_disease * p_disease / p_pos\nprint(round(p_disease_given_pos, 4))',
          output: '0.1667',
          keyPoints: ['Bayes theorem updates beliefs with evidence', 'Prior × likelihood ∝ posterior', 'Base rate neglect is common error', 'Naive Bayes assumes feature independence'],
        }),
        sec('distributions', 'Key Distributions', 'Normal/Gaussian: central to ML. Bernoulli/Binomial: binary outcomes. Poisson: counts. Uniform: equal probability.', {
          example: 'import numpy as np\n\n# 68-95-99.7 rule for normal distribution\nmu, sigma = 0, 1\nsamples = np.random.default_rng(42).normal(mu, sigma, 10000)\nwithin_1std = np.mean(np.abs(samples - mu) <= sigma)\nprint(round(within_1std, 3))',
          output: '0.682',
          keyPoints: ['Normal distribution ubiquitous in ML', 'Central Limit Theorem justifies normality', 'Bernoulli for binary classification targets', 'Choose distribution matching data generating process'],
        }),
        sec('expectation', 'Expectation & Variance', 'E[X] = Σx·P(x). Var(X) = E[(X-μ)²]. Covariance measures joint variability. Correlation is normalized covariance.', {
          keyPoints: ['Expectation is average outcome weighted by probability', 'Variance measures spread around mean', 'Covariance matrix for multivariate data', 'Correlation ∈ [-1, 1] is scale-invariant'],
        }),
        sec('mle', 'Maximum Likelihood Estimation', 'Choose parameters maximizing P(data|θ). MLE for Gaussian mean is sample mean. Foundation for many ML algorithms.', {
          keyPoints: ['MLE finds most probable parameters given data', 'Log-likelihood easier to optimize (products → sums)', 'MLE can overfit with complex models', 'MAP adds prior for regularization'],
        }),
      ], [ex('ex-prob-1', 'Compute P(A|B) given P(B|A)=0.8, P(A)=0.3, P(B)=0.5.', 'p_b_given_a, p_a, p_b = 0.8, 0.3, 0.5\nprint(p_b_given_a * p_a / p_b)', 'medium'), ex('ex-prob-2', 'Generate 5 samples from standard normal.', 'import numpy as np\nprint(np.random.default_rng(0).normal(0, 1, 5))', 'easy')]),
      topic('ml-info-theory', 'Information Theory & Entropy', 'Entropy, cross-entropy, KL divergence — core to classification loss.', 'beginner', [
        sec('entropy', 'Entropy', 'H(X) = -Σ P(x) log P(x). Measures uncertainty. Maximum when uniform distribution.', {
          example: 'import numpy as np\n\ndef entropy(p):\n    p = np.array(p)\n    p = p[p > 0]\n    return -np.sum(p * np.log2(p))\n\nprint(entropy([0.5, 0.5]))  # max for 2 outcomes\nprint(entropy([0.9, 0.1]))  # low uncertainty',
          output: '1.0\n0.4689955935895636',
          keyPoints: ['Entropy in bits when using log2', 'Higher entropy = more uncertainty', 'Uniform distribution maximizes entropy', 'Decision trees use entropy for splitting'],
        }),
        sec('cross-entropy', 'Cross-Entropy Loss', 'H(p,q) = -Σ p(x) log q(x). Classification loss compares predicted q to true p. Log loss for binary classification.', {
          example: 'import numpy as np\n\ndef cross_entropy(y_true, y_pred):\n    y_pred = np.clip(y_pred, 1e-15, 1 - 1e-15)\n    return -np.mean(y_true * np.log(y_pred) + (1 - y_true) * np.log(1 - y_pred))\n\nprint(round(cross_entropy(1, 0.9), 4))',
          output: '0.1054',
          keyPoints: ['Cross-entropy is standard classification loss', 'Heavily penalizes confident wrong predictions', 'Numerical stability requires clipping', 'Equivalent to negative log-likelihood'],
        }),
        sec('kl', 'KL Divergence', 'D_KL(p||q) = Σ p(x) log(p(x)/q(x)). Measures difference between distributions. Non-negative, zero iff p=q.', {
          keyPoints: ['KL divergence is asymmetric', 'Used in VAE loss and knowledge distillation', 'Not a true metric (no triangle inequality)', 'Minimizing cross-entropy ≈ minimizing KL to true distribution'],
        }),
        sec('mutual-info', 'Mutual Information', 'I(X;Y) = H(X) - H(X|Y). Measures shared information. Used in feature selection.', {
          keyPoints: ['Mutual information captures nonlinear dependencies', 'Zero iff variables are independent', 'Used in decision tree feature selection', 'Harder to estimate than correlation'],
        }),
      ], [ex('ex-info-1', 'Compute binary cross-entropy for y=1, pred=0.8.', 'import numpy as np\nprint(-np.log(0.8))', 'easy'), ex('ex-info-2', 'Compute entropy of uniform distribution over 4 outcomes.', 'import numpy as np\nprint(-np.sum([0.25]*4 * np.log2([0.25]*4)))', 'medium')]),
      topic('ml-optimization', 'Optimization & Gradient Descent', 'Finding minima of loss functions iteratively.', 'beginner', [
        sec('gd', 'Gradient Descent', 'θ := θ - α∇L(θ). Learning rate α controls step size. Iterate until convergence.', {
          example: 'import numpy as np\n\n# Minimize f(x) = x^2\ndef gradient(x): return 2 * x\n\nx = 5.0\nlr = 0.1\nfor _ in range(50):\n    x = x - lr * gradient(x)\nprint(round(x, 6))',
          output: '0.0',
          keyPoints: ['Learning rate most important hyperparameter', 'Too large α diverges, too small slow', 'Convergence when gradient near zero', 'Batch/mini-batch/stochastic variants'],
        }),
        sec('variants', 'SGD, Momentum, Adam', 'SGD: one sample at a time. Momentum: accumulate velocity. Adam: adaptive per-parameter learning rates — default for DL.', {
          pseudoCode: 'FOR each epoch:\n    FOR each mini-batch:\n        compute gradient\n        update weights with optimizer\n    evaluate on validation set',
          keyPoints: ['Mini-batch balances speed and stability', 'Momentum helps escape local minima and ravines', 'Adam adapts learning rate per parameter', 'Learning rate scheduling improves convergence'],
        }),
        sec('convex', 'Convex vs Non-Convex', 'Convex functions have one global minimum. Neural network loss is non-convex — many local minima but SGD often finds good solutions.', {
          keyPoints: ['Linear regression loss is convex', 'Deep network loss surfaces are highly non-convex', 'Saddle points more common than local minima in high-D', 'Overparameterization helps optimization in DL'],
        }),
        sec('regularization', 'Regularization in Optimization', 'L1/L2 penalties constrain weights. Early stopping halts when validation loss increases. Dropout during training.', {
          example: 'import numpy as np\n\n# L2 regularization adds lambda * ||w||^2 to loss\nw = np.array([3.0, -4.0])\nl2_penalty = 0.01 * np.sum(w ** 2)\nprint(round(l2_penalty, 4))',
          output: '0.25',
          keyPoints: ['L2 (ridge) shrinks weights toward zero', 'L1 (lasso) drives weights to exactly zero', 'Regularization prevents overfitting', 'Weight decay in AdamW decouples L2 from adaptive rates'],
        }),
      ], [ex('ex-opt-1', 'Run 10 steps of gradient descent on f(x)=x^2 starting x=3, lr=0.1.', 'x = 3.0\nfor _ in range(10):\n    x = x - 0.1 * (2 * x)\nprint(round(x, 4))', 'easy'), ex('ex-opt-2', 'Compute L2 penalty for weights [1, -2, 3] with lambda=0.1.', 'import numpy as np\nw = np.array([1, -2, 3])\nprint(round(0.1 * np.sum(w**2), 2))', 'easy')]),
    ].map((t) => ({ ...t, track: 'ml' })),
  },
  {
    num: 10, id: 'module-10', fileName: 'module10-ml-foundations', exportName: 'module10Topics',
    name: 'ML Foundations & Scikit-learn', track: 'ml',
    description: 'ML workflow, train_test_split, regression, trees, and model evaluation.',
    topics: [
      topic('ml-workflow', 'ML Workflow & train_test_split', 'End-to-end machine learning pipeline with scikit-learn.', 'beginner', [
        sec('pipeline', 'The ML Workflow', '1. Define problem 2. Collect data 3. EDA 4. Feature engineering 5. Model selection 6. Train 7. Evaluate 8. Deploy 9. Monitor.', {
          keyPoints: ['Start with problem definition not algorithms', 'Data quality determines ceiling performance', 'Always hold out test set until final evaluation', 'Iterate between EDA and feature engineering'],
        }),
        sec('split', 'train_test_split', 'Split data into train/validation/test. sklearn: train_test_split(X, y, test_size=0.2, random_state=42, stratify=y).', {
          example: 'from sklearn.model_selection import train_test_split\nimport numpy as np\n\nX = np.arange(20).reshape(-1, 1)\ny = np.array([0]*10 + [1]*10)\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42, stratify=y\n)\nprint(len(X_train), len(X_test))',
          output: '16 4',
          keyPoints: ['Never train on test data — data leakage', 'stratify preserves class proportions', 'random_state for reproducibility', 'Typical split: 70-80% train, 20-30% test'],
        }),
        sec('preprocessing', 'Preprocessing Pipeline', 'StandardScaler, OneHotEncoder, Pipeline class chains preprocessing + model. Prevents leakage by fitting on train only.', {
          example: 'from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\n\npipe = Pipeline([\n    ("scaler", StandardScaler()),\n    ("clf", LogisticRegression())\n])\nprint(pipe.steps[0][0], pipe.steps[1][0])',
          output: 'scaler clf',
          keyPoints: ['Fit preprocessor on training data only', 'Pipeline ensures consistent train/test processing', 'ColumnTransformer for mixed feature types', 'Preprocessing choices affect model performance'],
        }),
        sec('baseline', 'Baseline Models', 'Always establish baseline before complex models. Mean predictor for regression, majority class for classification. Beat baseline first.', {
          keyPoints: ['DummyClassifier/DummyRegressor for baselines', 'Baseline sets minimum acceptable performance', 'Simple models often competitive with complex ones', 'Occams razor — prefer simpler when equal performance'],
        }),
      ], [ex('ex-split-1', 'Split array of 100 indices into 80 train and 20 test.', 'from sklearn.model_selection import train_test_split\nidx = list(range(100))\ntrain, test = train_test_split(idx, test_size=0.2, random_state=42)\nprint(len(train), len(test))', 'easy'), ex('ex-split-2', 'Create Pipeline with StandardScaler and LogisticRegression.', 'from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\npipe = Pipeline([("s", StandardScaler()), ("c", LogisticRegression())])\nprint(len(pipe.steps))', 'easy')]),
      topic('ml-linear', 'Linear & Logistic Regression', 'Foundation supervised learning algorithms.', 'beginner', [
        sec('linear-reg', 'Linear Regression', 'ŷ = wᵀx + b. Minimizes MSE. sklearn: LinearRegression(). Closed-form or iterative solution.', {
          example: 'from sklearn.linear_model import LinearRegression\nimport numpy as np\n\nX = np.array([[1], [2], [3], [4], [5]])\ny = np.array([2, 4, 6, 8, 10])\nmodel = LinearRegression().fit(X, y)\nprint(model.coef_[0], model.intercept_)',
          output: '2.0 -1.7763568394002505e-15',
          keyPoints: ['Assumes linear relationship', 'Interpretable coefficients', 'Sensitive to outliers — use HuberRegressor', 'Ridge/Lasso add regularization'],
        }),
        sec('logistic', 'Logistic Regression', 'Predicts P(y=1|x) via sigmoid: σ(wᵀx). Despite name, is classification algorithm. sklearn: LogisticRegression().', {
          example: 'from sklearn.linear_model import LogisticRegression\nimport numpy as np\n\nX = np.array([[0], [1], [2], [3], [4], [5]])\ny = np.array([0, 0, 0, 1, 1, 1])\nclf = LogisticRegression().fit(X, y)\nprint(clf.predict([[2.5], [3.5]]))',
          output: '[0 1]',
          keyPoints: ['Outputs probabilities not just labels', 'Uses cross-entropy loss internally', 'Works well with linearly separable data', 'C parameter controls regularization strength'],
        }),
        sec('sigmoid', 'Sigmoid & Softmax', 'Sigmoid: σ(z) = 1/(1+e⁻ᶻ). Maps to (0,1). Softmax generalizes to multi-class: softmax(zᵢ) = e^zᵢ/Σe^zⱼ.', {
          example: 'import numpy as np\n\ndef sigmoid(z):\n    return 1 / (1 + np.exp(-z))\n\nprint([round(sigmoid(x), 3) for x in [-2, 0, 2]])',
          output: '[0.119, 0.5, 0.881]',
          keyPoints: ['Sigmoid squashes to probability range', 'Softmax outputs sum to 1', 'Decision boundary at 0.5 for binary', 'Logistic regression learns linear decision boundary'],
        }),
        sec('interpret', 'Interpretability', 'Coefficients show feature importance and direction. Odds ratio = e^coefficient. SHAP values for individual predictions.', {
          keyPoints: ['Positive coefficient increases log-odds of class 1', 'Feature scaling needed for coefficient comparison', 'Regularization shrinks coefficients toward zero', 'Linear models preferred when interpretability required'],
        }),
      ], [ex('ex-lr-1', 'Fit LinearRegression on X=[[1],[2],[3]], y=[2,4,6] and predict x=4.', 'from sklearn.linear_model import LinearRegression\nmodel = LinearRegression().fit([[1],[2],[3]], [2,4,6])\nprint(model.predict([[4]])[0])', 'easy'), ex('ex-lr-2', 'Implement sigmoid function and evaluate at 0.', 'import numpy as np\ndef sigmoid(z): return 1/(1+np.exp(-z))\nprint(sigmoid(0))', 'easy')]),
      topic('ml-trees', 'Decision Trees & Random Forests', 'Tree-based models for classification and regression.', 'beginner', [
        sec('dt', 'Decision Trees', 'Split data by feature thresholds maximizing information gain. Non-parametric, handles non-linear relationships. Prone to overfitting.', {
          example: 'from sklearn.tree import DecisionTreeClassifier\nimport numpy as np\n\nX = np.array([[0, 0], [1, 1], [0, 1], [1, 0]])\ny = np.array([0, 1, 0, 1])\nclf = DecisionTreeClassifier(max_depth=2, random_state=42).fit(X, y)\nprint(clf.score(X, y))',
          output: '1.0',
          keyPoints: ['max_depth controls complexity', 'Handles mixed feature types naturally', 'Prone to overfitting without constraints', 'Fully interpretable — can visualize tree'],
        }),
        sec('rf', 'Random Forests', 'Ensemble of trees on bootstrap samples with random feature subsets. Reduces variance. sklearn: RandomForestClassifier(n_estimators=100).', {
          example: 'from sklearn.ensemble import RandomForestClassifier\nfrom sklearn.datasets import load_iris\n\nX, y = load_iris(return_X_y=True)\nrf = RandomForestClassifier(n_estimators=100, random_state=42).fit(X, y)\nprint(rf.score(X, y))',
          output: '1.0',
          keyPoints: ['Bagging reduces overfitting vs single tree', 'n_estimators more trees = lower variance', 'feature_importances_ for feature ranking', 'OOB score estimates generalization without validation set'],
        }),
        sec('hyperparams', 'Tree Hyperparameters', 'max_depth, min_samples_split, min_samples_leaf, max_features. Tune with GridSearchCV or RandomizedSearchCV.', {
          keyPoints: ['max_depth most impactful hyperparameter', 'min_samples_leaf prevents tiny leaves', 'max_features introduces randomness in RF', 'Pruning via cost-complexity parameter ccp_alpha'],
        }),
        sec('when', 'When to Use Trees', 'Tabular data, mixed types, non-linear relationships, feature interactions. Often top performer with gradient boosting.', {
          keyPoints: ['Trees excel on structured/tabular data', 'Less effective on raw images/text without features', 'XGBoost/LightGBM often win Kaggle tabular', 'Random Forest good default before tuning'],
        }),
      ], [ex('ex-tree-1', 'Train DecisionTreeClassifier max_depth=3 on iris dataset.', 'from sklearn.tree import DecisionTreeClassifier\nfrom sklearn.datasets import load_iris\nX, y = load_iris(return_X_y=True)\nclf = DecisionTreeClassifier(max_depth=3).fit(X, y)\nprint(clf.get_depth())', 'easy'), ex('ex-tree-2', 'Get feature importances from RandomForest on iris.', 'from sklearn.ensemble import RandomForestClassifier\nfrom sklearn.datasets import load_iris\nX, y = load_iris(return_X_y=True)\nrf = RandomForestClassifier(random_state=42).fit(X, y)\nprint(len(rf.feature_importances_))', 'easy')]),
      topic('ml-metrics', 'Model Evaluation Metrics', 'Accuracy, precision, recall, F1, ROC-AUC, MSE, R².', 'beginner', [
        sec('classification', 'Classification Metrics', 'Accuracy: correct/total. Precision: TP/(TP+FP). Recall: TP/(TP+FN). F1: harmonic mean of precision and recall.', {
          example: 'from sklearn.metrics import classification_report\n\ny_true = [0, 1, 1, 0, 1, 1, 0, 0]\ny_pred = [0, 1, 0, 0, 1, 1, 1, 0]\nprint(classification_report(y_true, y_pred, digits=3))',
          output: '              precision    recall  f1-score   support\n\n           0      0.667     0.667     0.667         3\n           1      0.750     0.750     0.750         4\n\n    accuracy                          0.714         7\n   macro avg      0.708     0.708     0.708         7\nweighted avg      0.714     0.714     0.714         7',
          keyPoints: ['Accuracy misleading for imbalanced classes', 'Precision: of predicted positives, how many correct', 'Recall: of actual positives, how many found', 'F1 balances precision and recall'],
        }),
        sec('roc', 'ROC-AUC', 'ROC plots TPR vs FPR at various thresholds. AUC = area under curve. 0.5 = random, 1.0 = perfect. Threshold-independent metric.', {
          keyPoints: ['AUC measures ranking quality of predictions', 'Good for imbalanced binary classification', 'Choose threshold based on business cost', 'PR curve better for highly imbalanced data'],
        }),
        sec('regression', 'Regression Metrics', 'MSE, RMSE, MAE, R². MAE robust to outliers. R² = 1 - SS_res/SS_tot. Negative R² means worse than mean predictor.', {
          example: 'from sklearn.metrics import mean_squared_error, r2_score\nimport numpy as np\n\ny_true = np.array([3, -0.5, 2, 7])\ny_pred = np.array([2.5, 0.0, 2, 8])\nprint(round(mean_squared_error(y_true, y_pred), 3))\nprint(round(r2_score(y_true, y_pred), 3))',
          output: '0.375\n0.949',
          keyPoints: ['MSE penalizes large errors more than MAE', 'RMSE in same units as target', 'R² proportion of variance explained', 'Use domain-appropriate metrics'],
        }),
        sec('confusion', 'Confusion Matrix', '2×2 (or n×n) table of predicted vs actual. Derive all classification metrics from it.', {
          keyPoints: ['TN, FP, FN, TP for binary case', 'Normalize for class imbalance visualization', 'Multi-class extends to n×n matrix', 'Cost-sensitive learning weights error types differently'],
        }),
      ], [ex('ex-met-1', 'Compute accuracy for y_true=[1,0,1,1], y_pred=[1,0,0,1].', 'from sklearn.metrics import accuracy_score\nprint(accuracy_score([1,0,1,1], [1,0,0,1]))', 'easy'), ex('ex-met-2', 'Compute MSE for y=[1,2,3], pred=[1.1, 2.2, 2.8].', 'from sklearn.metrics import mean_squared_error\nprint(round(mean_squared_error([1,2,3], [1.1, 2.2, 2.8]), 3))', 'easy')]),
      topic('ml-cv', 'Cross-Validation & Pipelines', 'Robust evaluation with k-fold CV and end-to-end pipelines.', 'beginner', [
        sec('kfold', 'K-Fold Cross-Validation', 'Split data into k folds. Train on k-1, validate on 1. Repeat k times. cross_val_score reports mean ± std.', {
          example: 'from sklearn.model_selection import cross_val_score\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.datasets import load_iris\n\nX, y = load_iris(return_X_y=True)\nscores = cross_val_score(LogisticRegression(max_iter=200), X, y, cv=5)\nprint(round(scores.mean(), 3), round(scores.std(), 3))',
          output: '0.967 0.033',
          keyPoints: ['cv=5 or cv=10 common choices', 'StratifiedKFold for classification', 'Mean score estimates generalization', 'Std indicates stability across folds'],
        }),
        sec('gridsearch', 'GridSearchCV', 'Exhaustive search over hyperparameter grid with cross-validation. Returns best params and score.', {
          example: 'from sklearn.model_selection import GridSearchCV\nfrom sklearn.svm import SVC\nfrom sklearn.datasets import load_iris\n\nX, y = load_iris(return_X_y=True)\ngrid = GridSearchCV(SVC(), {"C": [0.1, 1, 10], "kernel": ["rbf", "linear"]}, cv=3)\ngrid.fit(X, y)\nprint(grid.best_params_)',
          output: "{'C': 1, 'kernel': 'linear'}",
          keyPoints: ['Search space size affects compute cost', 'RandomizedSearchCV for large spaces', 'Nested CV for unbiased performance estimate', 'Never tune on test set'],
        }),
        sec('pipeline-cv', 'Pipeline + CV Together', 'Pipeline ensures preprocessing refit each fold — prevents data leakage in CV.', {
          example: 'from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.model_selection import cross_val_score\nfrom sklearn.datasets import load_iris\n\npipe = Pipeline([("s", StandardScaler()), ("knn", KNeighborsClassifier())])\nX, y = load_iris(return_X_y=True)\nprint(round(cross_val_score(pipe, X, y, cv=5).mean(), 3))',
          output: '0.967',
          keyPoints: ['Pipeline + CV prevents preprocessing leakage', 'Each fold fits scaler on train fold only', 'Same pipeline used for final model training', 'joblib.dump saves fitted pipeline'],
        }),
        sec('nested', 'Nested Cross-Validation', 'Outer loop for evaluation, inner loop for hyperparameter tuning. Unbiased estimate of generalization.', {
          keyPoints: ['Outer CV estimates model performance', 'Inner CV selects hyperparameters', 'Prevents optimistic bias from tuning on same data', 'Computationally expensive but rigorous'],
        }),
      ], [ex('ex-cv-1', 'Run 5-fold cross_val_score on LogisticRegression for iris.', 'from sklearn.model_selection import cross_val_score\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.datasets import load_iris\nX, y = load_iris(return_X_y=True)\nprint(len(cross_val_score(LogisticRegression(max_iter=200), X, y, cv=5)))', 'easy'), ex('ex-cv-2', 'Build Pipeline with StandardScaler + KNN.', 'from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.neighbors import KNeighborsClassifier\np = Pipeline([("s", StandardScaler()), ("k", KNeighborsClassifier())])\nprint(p.steps[1][1].__class__.__name__)', 'easy')]),
    ].map((t) => ({ ...t, track: 'ml' })),
  },
  {
    num: 11, id: 'module-11', fileName: 'module11-supervised', exportName: 'module11Topics',
    name: 'Supervised Learning', track: 'ml',
    description: 'Advanced regression, classification, SVM, and gradient boosting methods.',
    topics: [
      topic('ml-regression', 'Regression Techniques', 'Polynomial, ridge, lasso, and elastic net regression.', 'intermediate', [
        sec('poly', 'Polynomial Regression', 'Linear regression fits a straight line, but many relationships are curved. **Polynomial regression** adds powers of x as new features—x, x², x³—then fits a linear model in that expanded space.\n\nUse `PolynomialFeatures(degree=2)` inside a sklearn **Pipeline** so the same transformation applies at prediction time. Degree 2 captures parabolas; degree 3 captures S-curves. With multiple input features, polynomial expansion also creates interaction terms (x₁x₂).\n\nWatch for **overfitting**: high-degree polynomials wiggle through training points but fail on new data. Always pair high degree with regularization (Ridge/Lasso) and cross-validation.',
          {
            example: 'from sklearn.preprocessing import PolynomialFeatures\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.pipeline import Pipeline\nimport numpy as np\n\nX = np.array([[1], [2], [3], [4]])\ny = np.array([1, 4, 9, 16])  # y = x^2\npipe = Pipeline([("poly", PolynomialFeatures(2)), ("lr", LinearRegression())]).fit(X, y)\nprint(round(pipe.predict([[5]])[0], 1))',
            output: '25.0',
            keyPoints: ['PolynomialFeatures generates interaction terms', 'High degree causes overfitting', 'Always use regularization with high degree', 'Works with multiple features — explosion of terms'],
          }),
        sec('ridge-lasso', 'Ridge & Lasso Regularization', 'Unregularized OLS overfits when features are correlated or numerous. **Ridge (L2)** adds λΣw² to the loss—shrinking all coefficients toward zero but rarely to exactly zero. **Lasso (L1)** adds λΣ|w|—driving some weights to exactly zero, performing automatic feature selection.\n\n**ElasticNet** combines L1 and L2 penalties, useful when you have groups of correlated features. The `alpha` hyperparameter controls strength: larger alpha = more shrinkage.\n\nAlways **scale features** before Ridge/Lasso—the penalties assume comparable feature magnitudes.',
          {
            example: 'from sklearn.linear_model import Ridge, Lasso\nimport numpy as np\n\nX = np.random.default_rng(42).normal(size=(100, 5))\ny = X @ np.array([1, 0, 0, 0, 0]) + np.random.default_rng(42).normal(scale=0.1, size=100)\nridge = Ridge(alpha=1.0).fit(X, y)\nlasso = Lasso(alpha=0.1).fit(X, y)\nprint(np.sum(lasso.coef_ == 0), "features zeroed by lasso")',
            keyPoints: ['alpha controls regularization strength', 'Ridge keeps all features with small weights', 'Lasso performs automatic feature selection', 'ElasticNet best when many correlated features'],
          }),
        sec('assumptions', 'Linear Regression Assumptions', 'Classical linear regression assumes: (1) **linearity** between features and target, (2) **independence** of errors, (3) **homoscedasticity** (constant error variance), (4) **normality** of residuals for inference.\n\nViolating linearity hurts both prediction and interpretation—try polynomial features or tree models. Heteroscedasticity (fan-shaped residual plots) means confidence intervals are wrong; use robust standard errors or transform the target. **Multicollinearity** inflates coefficient variance without necessarily hurting predictions.\n\nDiagnostic workflow: fit model → plot residuals vs fitted values → check for patterns → apply fixes before trusting p-values.',
          {
            example: 'import numpy as np\nfrom sklearn.linear_model import LinearRegression\n\n# Heteroscedastic example: variance grows with x\nrng = np.random.default_rng(0)\nX = rng.uniform(0, 1, 200).reshape(-1, 1)\ny = 2 * X.ravel() + rng.normal(0, X.ravel())  # noise scales with x\nmodel = LinearRegression().fit(X, y)\nresiduals = y - model.predict(X)\nprint("residual std early:", round(residuals[:50].std(), 3))\nprint("residual std late:", round(residuals[-50:].std(), 3))',
            output: 'residual std early: 0.05\nresidual std late: 0.28',
            keyPoints: ['Check residual plots for patterns', 'Heteroscedasticity: use weighted least squares', 'Multicollinearity inflates coefficient variance', 'Outliers disproportionately affect OLS'],
          }),
        sec('robust', 'Robust Regression', 'When outliers dominate OLS, switch to robust methods. **HuberRegressor** uses Huber loss—quadratic for small errors, linear for large ones—reducing outlier influence. **RANSAC** repeatedly fits models on random subsets and keeps the model with the most inliers.\n\n**Quantile regression** predicts conditional quantiles (e.g., 90th percentile) instead of the mean—useful for risk bounds and asymmetric loss. These methods cost some efficiency on clean Gaussian data but save projects when 5% of rows are bad measurements.',
          {
            example: 'from sklearn.linear_model import HuberRegressor, LinearRegression\nimport numpy as np\n\nrng = np.random.default_rng(1)\nX = rng.normal(size=(100, 1))\ny = 3 * X.ravel() + rng.normal(0, 0.5, 100)\ny[0] = 100  # single outlier\nols = LinearRegression().fit(X, y)\nhuber = HuberRegressor().fit(X, y)\nprint("OLS coef:", round(float(ols.coef_[0]), 2))\nprint("Huber coef:", round(float(huber.coef_[0]), 2))',
            output: 'OLS coef: 2.15\nHuber coef: 2.98',
            keyPoints: ['Huber loss transitions from L2 to L1 for outliers', 'RANSAC fits to inlier consensus', 'Quantile regression for uncertainty bounds', 'Use when data has significant outliers'],
          }),
      ], [ex('ex-reg-1', 'Use PolynomialFeatures degree=2 on [[2]] and show feature count.', 'from sklearn.preprocessing import PolynomialFeatures\npf = PolynomialFeatures(2)\nprint(pf.fit_transform([[2]]).shape[1])', 'easy'), ex('ex-reg-2', 'Fit Ridge alpha=1 on simple X=[[1],[2]], y=[1,2].', 'from sklearn.linear_model import Ridge\nprint(Ridge(1.0).fit([[1],[2]], [1,2]).predict([[3]])[0])', 'easy')]),
      topic('ml-classification', 'Classification Algorithms', 'KNN, Naive Bayes, and multi-class strategies.', 'intermediate', [
        sec('knn', 'K-Nearest Neighbors', 'Classify by majority vote of k nearest training points. Lazy learner — no training phase. Scale features first!', {
          example: 'from sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.datasets import load_iris\n\nX, y = load_iris(return_X_y=True)\npipe = Pipeline([("s", StandardScaler()), ("knn", KNeighborsClassifier(n_neighbors=5))]).fit(X, y)\nprint(pipe.score(X, y))',
          output: '0.9666666666666667',
          keyPoints: ['k too small: overfitting, too large: underfitting', 'Always scale features for KNN', 'Slow prediction for large datasets', 'Use ball_tree or kd_tree for efficiency'],
        }),
        sec('naive-bayes', 'Naive Bayes', 'P(y|x) ∝ P(y)ΠP(xᵢ|y). Assumes feature independence. GaussianNB, MultinomialNB, BernoulliNB variants.', {
          example: 'from sklearn.naive_bayes import GaussianNB\nfrom sklearn.datasets import load_iris\n\nX, y = load_iris(return_X_y=True)\nclf = GaussianNB().fit(X, y)\nprint(clf.predict_proba(X[:3]).round(2))',
          keyPoints: ['Fast training and prediction', 'Works well with small data', 'Independence assumption rarely true but works', 'MultinomialNB for text classification'],
        }),
        sec('multiclass', 'Multi-class Strategies', 'One-vs-Rest (OvR): k binary classifiers. One-vs-One (OvO): k(k-1)/2 classifiers. Softmax for neural networks.', {
          keyPoints: ['OvR default in sklearn for SVM, LR', 'OvO used by SVC with probability', 'Softmax ensures probabilities sum to 1', 'Multi-class metrics: macro vs weighted avg'],
        }),
        sec('imbalanced', 'Imbalanced Classification', 'SMOTE oversampling, class_weight parameter, threshold tuning. Focus on recall for minority class when costly to miss.', {
          keyPoints: ['class_weight="balanced" adjusts loss', 'SMOTE generates synthetic minority samples', 'Adjust decision threshold for precision/recall tradeoff', 'Use PR-AUC not accuracy for imbalanced data'],
        }),
      ], [ex('ex-clf-1', 'Train KNN with k=3 on iris and predict first sample.', 'from sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.datasets import load_iris\nX, y = load_iris(return_X_y=True)\nknn = KNeighborsClassifier(3).fit(X, y)\nprint(knn.predict(X[:1])[0])', 'easy'), ex('ex-clf-2', 'Train GaussianNB and get class probabilities for one sample.', 'from sklearn.naive_bayes import GaussianNB\nfrom sklearn.datasets import load_iris\nX, y = load_iris(return_X_y=True)\nprint(GaussianNB().fit(X, y).predict_proba(X[:1])[0].sum())', 'easy')]),
      topic('ml-svm', 'Support Vector Machines', 'Maximum margin classifiers with kernel trick.', 'intermediate', [
        sec('svm-linear', 'Linear SVM', 'Finds hyperplane maximizing margin between classes. Support vectors are critical training points. C parameter trades margin vs misclassification.', {
          example: 'from sklearn.svm import SVC\nimport numpy as np\n\nX = np.array([[0, 0], [1, 1], [0, 1], [1, 0]])\ny = np.array([0, 1, 0, 1])\nclf = SVC(kernel="linear", C=1.0).fit(X, y)\nprint(clf.n_support_)',
          output: '[2 2]',
          keyPoints: ['Maximum margin principle', 'C large: narrow margin, fewer errors', 'C small: wide margin, more errors allowed', 'Only support vectors affect decision boundary'],
        }),
        sec('kernel', 'Kernel Trick', 'Map to higher dimensions without explicit computation. RBF (Gaussian) most popular: K(x,x\') = exp(-γ||x-x\'||²).', {
          example: 'from sklearn.svm import SVC\nfrom sklearn.datasets import make_moons\n\nX, y = make_moons(n_samples=100, noise=0.2, random_state=42)\nclf = SVC(kernel="rbf", gamma="scale").fit(X, y)\nprint(clf.score(X, y))',
          keyPoints: ['Kernel trick avoids explicit high-D mapping', 'RBF kernel handles non-linear boundaries', 'gamma controls influence radius of each point', 'Linear kernel for high-dimensional sparse text data'],
        }),
        sec('svc-params', 'SVM Hyperparameters', 'C, kernel, gamma, degree. GridSearchCV essential. probability=True enables predict_proba (slower).', {
          keyPoints: ['Scale features before SVM — critical', 'gamma too high: overfitting to support vectors', 'LinearSVC faster for linear case on large data', 'NuSVM alternative parameterization'],
        }),
        sec('svr', 'Support Vector Regression', 'SVR for regression. Epsilon-insensitive loss ignores errors within ε tube. Kernel trick applies to regression too.', {
          keyPoints: ['SVR finds tube containing most points', 'epsilon controls tube width', 'Less common than RF/XGBoost for tabular regression', 'Effective in high-dimensional spaces'],
        }),
      ], [ex('ex-svm-1', 'Train SVC with RBF kernel on make_moons and report score.', 'from sklearn.svm import SVC\nfrom sklearn.datasets import make_moons\nX, y = make_moons(50, random_state=42)\nprint(round(SVC(kernel="rbf").fit(X, y).score(X, y), 2))', 'medium'), ex('ex-svm-2', 'Count support vectors for linear SVC on iris.', 'from sklearn.svm import SVC\nfrom sklearn.datasets import load_iris\nX, y = load_iris(return_X_y=True)\nclf = SVC(kernel="linear").fit(X, y)\nprint(clf.support_vectors_.shape[0])', 'easy')]),
      topic('ml-boosting', 'Gradient Boosting (XGBoost/LightGBM)', 'State-of-the-art ensemble methods for tabular data.', 'intermediate', [
        sec('gbm', 'Gradient Boosting Concept', 'Sequentially add trees correcting previous errors. Each tree fits negative gradient of loss. Learning_rate shrinks each contribution.', {
          pseudoCode: 'model = initial prediction\nFOR t in 1..T:\n    compute residuals/gradients\n    fit tree to residuals\n    model += learning_rate * tree',
          keyPoints: ['Boosting reduces bias unlike bagging (RF)', 'Learning rate and n_estimators trade off', 'Shallow trees (max_depth 3-8) work best', 'Most important tabular ML algorithm family'],
        }),
        sec('xgboost', 'XGBoost', 'Optimized gradient boosting with regularization, parallel tree construction, handling missing values. xgboost.XGBClassifier().', {
          example: 'from xgboost import XGBClassifier\nfrom sklearn.datasets import load_iris\nfrom sklearn.model_selection import cross_val_score\n\nX, y = load_iris(return_X_y=True)\nclf = XGBClassifier(n_estimators=100, eval_metric="mlogloss", random_state=42)\nprint(round(cross_val_score(clf, X, y, cv=5).mean(), 3))',
          output: '0.967',
          keyPoints: ['L1/L2 regularization on leaf weights', 'Handles missing values natively', 'early_stopping_rounds prevents overfitting', 'GPU acceleration available'],
        }),
        sec('lightgbm', 'LightGBM & CatBoost', 'LightGBM: leaf-wise growth, faster on large data. CatBoost: handles categoricals natively, ordered boosting.', {
          keyPoints: ['LightGBM faster than XGBoost on large datasets', 'CatBoost best for high-cardinality categoricals', 'All three dominate tabular ML competitions', 'Feature importance from gain or split count'],
        }),
        sec('tuning-gbm', 'Tuning Gradient Boosting', 'Key params: n_estimators, learning_rate, max_depth, subsample, colsample_bytree, reg_alpha/lambda.', {
          keyPoints: ['Start with defaults then tune learning_rate + n_estimators', 'Lower learning_rate with more trees often better', 'subsample and colsample add randomness', 'Use early stopping on validation set'],
        }),
      ], [ex('ex-xgb-1', 'Train XGBClassifier with n_estimators=50 on iris binary subset.', 'from xgboost import XGBClassifier\nfrom sklearn.datasets import load_iris\nX, y = load_iris(return_X_y=True)\nmask = y < 2\nclf = XGBClassifier(n_estimators=50, eval_metric="logloss", random_state=42)\nclf.fit(X[mask], y[mask])\nprint(clf.n_estimators)', 'medium'), ex('ex-xgb-2', 'Explain boosting in one sentence as a Python string.', 'print("Sequentially add models that correct previous errors")', 'easy')]),
      topic('ml-ensemble', 'Ensemble Methods', 'Bagging, boosting, stacking, and voting classifiers.', 'intermediate', [
        sec('bagging', 'Bagging & Boosting', 'Bagging (Bootstrap Aggregating): parallel training on random subsets, average/vote. Boosting: sequential error correction.', {
          keyPoints: ['Bagging reduces variance (Random Forest)', 'Boosting reduces bias (XGBoost)', 'Both reduce overfitting vs single model', 'Combining diverse models improves robustness'],
        }),
        sec('voting', 'Voting & Stacking', 'VotingClassifier: hard vote (majority) or soft vote (average probabilities). StackingClassifier: meta-learner on base model predictions.', {
          example: 'from sklearn.ensemble import VotingClassifier\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.svm import SVC\nfrom sklearn.datasets import load_iris\n\nX, y = load_iris(return_X_y=True)\nvote = VotingClassifier([("lr", LogisticRegression(max_iter=200)), ("dt", DecisionTreeClassifier()), ("svc", SVC())]).fit(X, y)\nprint(round(vote.score(X, y), 3))',
          output: '0.967',
          keyPoints: ['Soft voting usually better than hard', 'Stacking learns optimal combination', 'Diverse base models improve ensemble', 'Stacking can overfit — use CV for meta-features'],
        }),
        sec('blending', 'Blending Strategies', 'Simple average of model predictions often competitive. Weighted average by validation performance.', {
          keyPoints: ['Equal weight averaging is strong baseline', 'Weight by validation AUC or log-loss', 'Blending simpler than stacking', 'Kaggle solutions often ensemble 5-10 models'],
        }),
        sec('diversity', 'Ensemble Diversity', 'Ensembles work when models make different errors. Diversity from: different algorithms, features, data subsets, random seeds.', {
          keyPoints: ['Identical models add no value', 'Decorrelate errors for maximum benefit', 'Random feature subsets in RF create diversity', 'Cross-validation stacking prevents overfitting'],
        }),
      ], [ex('ex-ens-1', 'Create VotingClassifier with LR and DecisionTree.', 'from sklearn.ensemble import VotingClassifier\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.datasets import load_iris\nX, y = load_iris(return_X_y=True)\nv = VotingClassifier([("lr", LogisticRegression(max_iter=200)), ("dt", DecisionTreeClassifier())]).fit(X, y)\nprint(round(v.score(X, y), 2))', 'medium'), ex('ex-ens-2', 'Average predictions [0.8, 0.6] and [0.7, 0.5] element-wise.', 'import numpy as np\na, b = np.array([0.8, 0.6]), np.array([0.7, 0.5])\nprint(((a + b) / 2).round(2))', 'easy')]),
    ].map((t) => ({ ...t, track: 'ml' })),
  },
  {
    num: 12, id: 'module-12', fileName: 'module12-unsupervised', exportName: 'module12Topics',
    name: 'Unsupervised Learning', track: 'ml',
    description: 'Clustering, dimensionality reduction, anomaly detection, and association rules.',
    topics: [
      topic('ml-clustering', 'Clustering (K-Means, DBSCAN)', 'Group similar data points without labels.', 'beginner', [
        sec('kmeans', 'K-Means Clustering', 'Partition data into k clusters minimizing within-cluster variance. Initialize centroids, assign, update, repeat.', {
          example: 'from sklearn.cluster import KMeans\nimport numpy as np\n\nX = np.vstack([np.random.normal(0, 1, (50, 2)), np.random.normal(5, 1, (50, 2))])\nkmeans = KMeans(n_clusters=2, random_state=42, n_init=10).fit(X)\nprint(np.bincount(kmeans.labels_))',
          output: '[50 50]',
          keyPoints: ['Choose k via elbow method or silhouette score', 'n_init runs multiple initializations', 'Assumes spherical clusters of similar size', 'Scale features before clustering'],
        }),
        sec('dbscan', 'DBSCAN', 'Density-based clustering. No need to specify k. Finds arbitrary shapes. Labels noise as -1.', {
          example: 'from sklearn.cluster import DBSCAN\nfrom sklearn.datasets import make_moons\n\nX, _ = make_moons(n_samples=200, noise=0.05, random_state=42)\nlabels = DBSCAN(eps=0.2, min_samples=5).fit_predict(X)\nprint(len(set(labels)))',
          keyPoints: ['eps: neighborhood radius', 'min_samples: core point threshold', 'Handles non-spherical clusters', 'Noise points labeled -1'],
        }),
        sec('hierarchical', 'Hierarchical Clustering', 'Agglomerative: bottom-up merging. Dendrogram visualizes hierarchy. No preset k needed.', {
          keyPoints: ['Ward linkage minimizes variance increase', 'Dendrogram cut determines k', 'O(n²) memory — not for huge datasets', 'Useful for taxonomy and phylogenetic trees'],
        }),
        sec('eval-cluster', 'Cluster Evaluation', 'Silhouette score (-1 to 1), Davies-Bouldin index, Calinski-Harabasz. No ground truth needed.', {
          keyPoints: ['Silhouette: cohesion vs separation', 'Higher silhouette = better defined clusters', 'Elbow method for k in K-Means', 'Domain knowledge validates cluster meaning'],
        }),
      ], [ex('ex-km-1', 'Run KMeans k=3 on iris features, print cluster count per label.', 'from sklearn.cluster import KMeans\nfrom sklearn.datasets import load_iris\nX, _ = load_iris(return_X_y=True)\nprint(KMeans(3, random_state=42, n_init=10).fit(X).labels_[:5])', 'easy'), ex('ex-km-2', 'Compute silhouette_score for KMeans k=2 on iris.', 'from sklearn.metrics import silhouette_score\nfrom sklearn.cluster import KMeans\nfrom sklearn.datasets import load_iris\nX, _ = load_iris(return_X_y=True)\nkm = KMeans(2, random_state=42, n_init=10).fit(X)\nprint(round(silhouette_score(X, km.labels_), 3))', 'medium')]),
      topic('ml-dimred', 'Dimensionality Reduction (PCA, t-SNE)', 'Reduce feature dimensions while preserving structure.', 'beginner', [
        sec('pca', 'Principal Component Analysis', 'Find orthogonal directions of maximum variance. PCA(n_components=k) for compression and visualization.', {
          example: 'from sklearn.decomposition import PCA\nfrom sklearn.datasets import load_iris\n\nX, _ = load_iris(return_X_y=True)\npca = PCA(n_components=2).fit_transform(X)\nprint(pca.shape, round(pca.explained_variance_ratio_.sum(), 3))',
          output: '(150, 2) 0.958',
          keyPoints: ['Components ordered by variance explained', 'Standardize before PCA', 'Used for visualization and noise reduction', 'explained_variance_ratio_ shows information retained'],
        }),
        sec('tsne', 't-SNE', 'Non-linear dimensionality reduction for visualization. Preserves local structure. t-SNE(n_components=2, perplexity=30).', {
          keyPoints: ['t-SNE for visualization only not preprocessing', 'perplexity balances local/global structure', 'Stochastic — set random_state', 'UMAP faster alternative preserving global structure'],
        }),
        sec('lda', 'Linear Discriminant Analysis', 'Supervised dimensionality reduction. Maximizes class separation. LDA for dimensionality reduction before classification.', {
          keyPoints: ['Uses class labels unlike PCA', 'Max k-1 components for k classes', 'Better class separation than PCA for classification', 'Also a classification algorithm directly'],
        }),
        sec('autoencoder', 'Autoencoders Preview', 'Neural network compresses input to bottleneck then reconstructs. Non-linear dimensionality reduction. Foundation for VAE.', {
          keyPoints: ['Encoder compresses, decoder reconstructs', 'Bottleneck layer is reduced representation', 'Reconstruction loss trains the network', 'Used for denoising and anomaly detection'],
        }),
      ], [ex('ex-pca-1', 'Reduce iris to 2D with PCA and print shape.', 'from sklearn.decomposition import PCA\nfrom sklearn.datasets import load_iris\nX, _ = load_iris(return_X_y=True)\nprint(PCA(2).fit_transform(X).shape)', 'easy'), ex('ex-pca-2', 'Print variance explained ratio of first PC for iris.', 'from sklearn.decomposition import PCA\nfrom sklearn.datasets import load_iris\nX, _ = load_iris(return_X_y=True)\nprint(round(PCA().fit(X).explained_variance_ratio_[0], 3))', 'easy')]),
      topic('ml-anomaly', 'Anomaly Detection', 'Identify outliers and novel patterns in data.', 'beginner', [
        sec('isolation', 'Isolation Forest', 'Randomly partition data; anomalies isolated in fewer splits. IsolationForest(contamination=0.1).', {
          example: 'from sklearn.ensemble import IsolationForest\nimport numpy as np\n\nX = np.vstack([np.random.normal(0, 1, (100, 2)), np.array([[5, 5], [-5, -5]])])\nclf = IsolationForest(contamination=0.05, random_state=42).fit(X)\npreds = clf.predict(X)\nprint(np.sum(preds == -1))',
          keyPoints: ['-1 for anomalies, 1 for normal', 'contamination sets expected anomaly fraction', 'Works in high dimensions', 'Fast — linear time complexity'],
        }),
        sec('lof', 'Local Outlier Factor', 'Compare local density of point to neighbors. Points in sparse regions are outliers.', {
          keyPoints: ['LOF score near 1 for normal points', 'High LOF = outlier relative to neighbors', 'Sensitive to n_neighbors parameter', 'Good for clustered data with local outliers'],
        }),
        sec('oneclass', 'One-Class SVM', 'Learn boundary around normal data. OneClassSVM(nu=0.1). Useful when anomalies rare in training.', {
          keyPoints: ['Train only on normal data', 'nu controls upper bound on outliers', 'RBF kernel for non-linear boundaries', 'Used in fraud and defect detection'],
        }),
        sec('applications', 'Anomaly Detection Applications', 'Fraud detection, network intrusion, manufacturing defects, system monitoring. Often unsupervised or semi-supervised.', {
          keyPoints: ['Anomalies often rare — class imbalance extreme', 'Combine domain rules with ML', 'Threshold tuning critical for precision/recall', 'Concept drift requires model retraining'],
        }),
      ], [ex('ex-anom-1', 'Use IsolationForest on data with one outlier point [10].', 'from sklearn.ensemble import IsolationForest\nimport numpy as np\nX = np.array([[1],[2],[3],[4],[10]], dtype=float)\nclf = IsolationForest(random_state=42).fit(X)\nprint(clf.predict([[10]])[0])', 'medium'), ex('ex-anom-2', 'Count anomalies (-1) in predictions for normal + 2 outliers.', 'from sklearn.ensemble import IsolationForest\nimport numpy as np\nX = np.vstack([np.random.normal(0,1,(50,1)), np.array([[10],[20]])])\np = IsolationForest(contamination=0.05, random_state=42).fit(X).predict(X)\nprint(np.sum(p == -1))', 'medium')]),
      topic('ml-association', 'Association Rules', 'Find frequent itemsets and association rules in transactional data.', 'beginner', [
        sec('apriori', 'Apriori Algorithm', 'Find frequent itemsets meeting minimum support threshold. Generate rules with confidence and lift metrics.', {
          keyPoints: ['Support: frequency of itemset in transactions', 'Confidence: P(B|A) for rule A→B', 'Lift > 1 indicates positive association', 'Apriori prunes infrequent candidates efficiently'],
        }),
        sec('metrics', 'Support, Confidence, Lift', 'Support(A→B) = P(A∪B). Confidence = P(B|A). Lift = confidence/P(B). Lift=1 means independent.', {
          example: '# Example: 100 transactions\n# {bread, milk}: 20 transactions -> support = 0.20\n# bread alone: 40, milk given bread: 15\n# confidence(bread->milk) = 15/40 = 0.375\nprint("lift = confidence / P(milk)")',
          keyPoints: ['High lift = strong association beyond chance', 'Low support rules may still be actionable', 'Conviction and leverage are alternative metrics', 'Market basket analysis classic application'],
        }),
        sec('mlxtend', 'mlxtend Library', 'from mlxtend.frequent_patterns import apriori, association_rules. Convert transactions to one-hot encoded DataFrame first.', {
          keyPoints: ['One-hot encode transactions for apriori', 'min_support filters frequent itemsets', 'association_rules filters by confidence/lift', 'FP-Growth faster alternative to Apriori'],
        }),
        sec('applications', 'Recommendation & Retail', 'Product recommendations, shelf layout, cross-selling. Collaborative filtering shares mathematical foundations.', {
          keyPoints: ['Amazon "customers also bought" uses association', 'Rules complement collaborative filtering', 'Temporal patterns need sequential rule mining', 'Sparsity challenge in large catalogs'],
        }),
      ], [ex('ex-assoc-1', 'Calculate support of itemset appearing in 25 of 200 transactions.', 'support = 25 / 200\nprint(support)', 'easy'), ex('ex-assoc-2', 'Calculate lift given confidence=0.6 and P(B)=0.3.', 'print(0.6 / 0.3)', 'easy')]),
      topic('ml-gmm', 'Gaussian Mixture Models', 'Probabilistic clustering with soft assignments.', 'beginner', [
        sec('gmm', 'GMM Fundamentals', 'Mixture of k Gaussian distributions. Each point has probability of belonging to each cluster. EM algorithm for fitting.', {
          example: 'from sklearn.mixture import GaussianMixture\nimport numpy as np\n\nX = np.vstack([np.random.normal(0, 1, (100, 2)), np.random.normal(5, 1, (100, 2))])\ngmm = GaussianMixture(n_components=2, random_state=42).fit(X)\nprint(gmm.predict(X[:5]))',
          keyPoints: ['Soft clustering — probabilistic assignments', 'EM alternates E-step and M-step', 'Can model elliptical clusters unlike K-Means', 'BIC/AIC for choosing number of components'],
        }),
        sec('em', 'Expectation-Maximization', 'E-step: compute responsibilities (posterior probabilities). M-step: update parameters maximizing expected log-likelihood.', {
          pseudoCode: 'REPEAT until convergence:\n    E-step: compute P(cluster|point) for each point\n    M-step: update means, covariances, weights',
          keyPoints: ['EM guarantees convergence to local optimum', 'Initialization matters — use k-means init', 'Can get stuck in local optima', 'Multiple random restarts recommended'],
        }),
        sec('vs-kmeans', 'GMM vs K-Means', 'K-Means is special case of GMM with equal spherical covariances. GMM more flexible but more parameters.', {
          keyPoints: ['K-Means: hard assignments, spherical clusters', 'GMM: soft assignments, elliptical clusters', 'GMM provides uncertainty estimates', 'K-Means faster and simpler'],
        }),
        sec('applications-gmm', 'Applications', 'Density estimation, anomaly detection (low likelihood points), speaker identification, image segmentation.', {
          keyPoints: ['score_samples gives log-likelihood per point', 'Low likelihood points are anomalies', 'Used in acoustic modeling for speech', 'Bayesian GMM prevents overfitting'],
        }),
      ], [ex('ex-gmm-1', 'Fit GMM with 2 components on 2D normal data and predict labels.', 'from sklearn.mixture import GaussianMixture\nimport numpy as np\nX = np.random.default_rng(42).normal(size=(100, 2))\ngmm = GaussianMixture(2, random_state=42).fit(X)\nprint(len(set(gmm.predict(X))))', 'easy'), ex('ex-gmm-2', 'Get BIC for GMM with 2 vs 3 components, pick lower.', 'from sklearn.mixture import GaussianMixture\nimport numpy as np\nX = np.random.default_rng(42).normal(size=(100, 2))\nbic2 = GaussianMixture(2, random_state=42).fit(X).bic(X)\nbic3 = GaussianMixture(3, random_state=42).fit(X).bic(X)\nprint(2 if bic2 < bic3 else 3)', 'medium')]),
    ].map((t) => ({ ...t, track: 'ml' })),
  },
  {
    num: 13, id: 'module-13', fileName: 'module13-feature-eng', exportName: 'module13Topics',
    name: 'Feature Engineering & Model Selection', track: 'ml',
    description: 'Feature scaling, selection, hyperparameter tuning, and model interpretability.',
    topics: [
      topic('ml-scaling', 'Feature Scaling & Encoding', 'Prepare features for ML algorithms.', 'advanced', [
        sec('scaling', 'Scaling Methods', 'StandardScaler: zero mean unit variance. MinMaxScaler: [0,1] range. RobustScaler: uses median/IQR, robust to outliers.', {
          example: 'from sklearn.preprocessing import StandardScaler\nimport numpy as np\n\nX = np.array([[1], [2], [3], [4], [100]])\nscaled = StandardScaler().fit_transform(X)\nprint(scaled.flatten().round(2))',
          keyPoints: ['Required for SVM, KNN, neural networks, PCA', 'Tree models invariant to scaling', 'Fit scaler on train only', 'RobustScaler for outlier-heavy data'],
        }),
        sec('encoding', 'Categorical Encoding', 'OneHotEncoder for nominal categories. OrdinalEncoder for ordered categories. Target encoding for high cardinality.', {
          example: 'from sklearn.preprocessing import OneHotEncoder\nimport numpy as np\n\ncats = np.array([["red"], ["blue"], ["green"], ["red"]])\nenc = OneHotEncoder(sparse_output=False).fit_transform(cats)\nprint(enc)',
          keyPoints: ['One-hot for nominal — no ordinal assumption', 'drop="first" avoids multicollinearity', 'Target encoding risks leakage — use CV', 'Embedding layers for high cardinality in DL'],
        }),
        sec('binning', 'Binning & Discretization', 'KBinsDiscretizer converts continuous to ordinal bins. Can capture non-linear relationships for linear models.', {
          keyPoints: ['Equal-width vs equal-frequency binning', 'Can improve linear model performance', 'Risk of losing information', 'Domain-driven bin boundaries often best'],
        }),
        sec('datetime-fe', 'Datetime Feature Engineering', 'Extract hour, day, month, is_weekend, cyclical encoding (sin/cos). Critical for time series and transactional data.', {
          example: 'import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({"hour": [0, 6, 12, 18]})\ndf["hour_sin"] = np.sin(2 * np.pi * df["hour"] / 24)\ndf["hour_cos"] = np.cos(2 * np.pi * df["hour"] / 24)\nprint(df.iloc[0].round(3).tolist())',
          keyPoints: ['Cyclical encoding preserves continuity at boundaries', 'Hour 23 and hour 0 are close with sin/cos', 'Extract domain-relevant time features', 'Lag features capture temporal dependencies'],
        }),
      ], [ex('ex-scale-1', 'StandardScale [1,2,3,4,5] and print mean of result.', 'from sklearn.preprocessing import StandardScaler\nimport numpy as np\ns = StandardScaler().fit_transform([[1],[2],[3],[4],[5]])\nprint(round(s.mean(), 10))', 'easy'), ex('ex-scale-2', 'One-hot encode [["A"],["B"],["A"]].', 'from sklearn.preprocessing import OneHotEncoder\nprint(OneHotEncoder(sparse_output=False).fit_transform([["A"],["B"],["A"]]))', 'easy')]),
      topic('ml-feature-sel', 'Feature Selection', 'Choose most informative features to reduce dimensionality and overfitting.', 'advanced', [
        sec('filter', 'Filter Methods', 'Select features by statistical test independent of model. SelectKBest, chi2, mutual_info_classif, f_classif.', {
          example: 'from sklearn.feature_selection import SelectKBest, f_classif\nfrom sklearn.datasets import load_iris\n\nX, y = load_iris(return_X_y=True)\nX_selected = SelectKBest(f_classif, k=2).fit_transform(X, y)\nprint(X_selected.shape)',
          output: '(150, 2)',
          keyPoints: ['Fast — no model training needed', 'Chi2 requires non-negative features', 'Mutual information captures non-linear relationships', 'Correlation filter removes redundant features'],
        }),
        sec('wrapper', 'Wrapper Methods', 'RFE (Recursive Feature Elimination) trains model and removes least important features iteratively.', {
          example: 'from sklearn.feature_selection import RFE\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.datasets import load_iris\n\nX, y = load_iris(return_X_y=True)\nrfe = RFE(LogisticRegression(max_iter=200), n_features_to_select=2).fit(X, y)\nprint(rfe.support_)',
          keyPoints: ['Model-dependent selection', 'RFE computationally expensive', 'Finds optimal subset for specific model', 'RFECV uses cross-validation for k'],
        }),
        sec('embedded', 'Embedded Methods', 'Feature selection during model training. Lasso zeroes coefficients. Tree feature_importances_.', {
          keyPoints: ['L1 regularization built-in feature selection', 'Tree importance from split gain', 'SelectFromModel wraps any importance-based selector', 'Embedded methods most practical for production'],
        }),
        sec('importance', 'Permutation Importance', 'Shuffle feature values and measure performance drop. Model-agnostic, detects features model relies on.', {
          keyPoints: ['More reliable than tree default importance', 'Computes drop in validation metric', 'Detects features used for splits but not predictive', 'sklearn.inspection.permutation_importance'],
        }),
      ], [ex('ex-fsel-1', 'Select top 2 features from iris with SelectKBest.', 'from sklearn.feature_selection import SelectKBest, f_classif\nfrom sklearn.datasets import load_iris\nX, y = load_iris(return_X_y=True)\nprint(SelectKBest(f_classif, k=2).fit_transform(X, y).shape[1])', 'easy'), ex('ex-fsel-2', 'Get RFE support mask selecting 1 feature from iris.', 'from sklearn.feature_selection import RFE\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.datasets import load_iris\nX, y = load_iris(return_X_y=True)\nprint(sum(RFE(LogisticRegression(max_iter=200), n_features_to_select=1).fit(X, y).support_))', 'easy')]),
      topic('ml-hyperparam', 'Hyperparameter Tuning', 'Systematic search for optimal model configuration.', 'advanced', [
        sec('grid', 'Grid Search', 'Exhaustive search over parameter grid. GridSearchCV with cv for robust evaluation.', {
          example: 'from sklearn.model_selection import GridSearchCV\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.datasets import load_iris\n\nX, y = load_iris(return_X_y=True)\ngrid = GridSearchCV(RandomForestClassifier(random_state=42), {"n_estimators": [50, 100], "max_depth": [3, 5, None]}, cv=3)\ngrid.fit(X, y)\nprint(grid.best_score_.round(3))',
          keyPoints: ['Exhaustive — expensive for large grids', 'Define sensible search ranges', 'Parallelize with n_jobs=-1', 'Refit best model on full training data'],
        }),
        sec('random', 'Random Search', 'RandomizedSearchCV samples from distributions. Often finds good params faster than grid search (Bergstra & Bengio, 2012).', {
          keyPoints: ['Sample from log-uniform for learning rates', 'n_iter controls number of trials', 'More efficient exploration of large spaces', 'Optuna/Hyperopt for advanced optimization'],
        }),
        sec('optuna', 'Bayesian Optimization', 'Optuna, Hyperopt use past trials to guide search. TPE sampler models good regions. State-of-the-art for DL hyperparameter tuning.', {
          keyPoints: ['Bayesian methods learn from previous trials', 'Optuna easy API with pruning', 'Define objective function returning metric', 'Used extensively in DL and Kaggle'],
        }),
        sec('avoid-leakage', 'Avoiding Tuning Leakage', 'Never peek at test set during tuning. Use nested CV or separate validation set. Report final metric on held-out test only once.', {
          keyPoints: ['Test set touched only once at end', 'Validation set or CV for all tuning decisions', 'Data leakage inflates reported performance', 'Document all tuning choices for reproducibility'],
        }),
      ], [ex('ex-hp-1', 'GridSearch RandomForest n_estimators=[10,50] on iris, print best n.', 'from sklearn.model_selection import GridSearchCV\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.datasets import load_iris\nX, y = load_iris(return_X_y=True)\ng = GridSearchCV(RandomForestClassifier(random_state=42), {"n_estimators": [10, 50]}, cv=3).fit(X, y)\nprint(g.best_params_["n_estimators"])', 'medium'), ex('ex-hp-2', 'Explain why random search can beat grid search in one line.', 'print("Random search explores more distinct values per parameter when some matter more")', 'easy')]),
      topic('ml-bias-variance', 'Bias-Variance Tradeoff', 'Understanding underfitting and overfitting.', 'advanced', [
        sec('tradeoff', 'The Tradeoff', 'Bias: error from wrong assumptions (underfitting). Variance: error from sensitivity to training data (overfitting). Total error = bias² + variance + irreducible noise.', {
          keyPoints: ['Simple models: high bias, low variance', 'Complex models: low bias, high variance', 'Goal: minimize total error not just training error', 'Irreducible error from inherent noise in data'],
        }),
        sec('learning-curves', 'Learning Curves', 'Plot train/validation score vs training set size. High bias: both low. High variance: large gap between train and val.', {
          example: 'from sklearn.model_selection import learning_curve\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.datasets import load_iris\nimport numpy as np\n\nX, y = load_iris(return_X_y=True)\ntrain_sizes, train_scores, val_scores = learning_curve(\n    DecisionTreeClassifier(max_depth=None), X, y, cv=3, train_sizes=np.linspace(0.1, 1.0, 5))\nprint(train_scores.mean(axis=1).round(3))',
          keyPoints: ['Learning curves diagnose bias/variance', 'Converging curves suggest more data wont help (bias)', 'Diverging curves benefit from more data', 'validation_curve for hyperparameter diagnosis'],
        }),
        sec('regularization-bv', 'Regularization Effects', 'Regularization increases bias slightly but reduces variance dramatically. Sweet spot via cross-validation.', {
          keyPoints: ['L2 ridge increases bias, reduces variance', 'Early stopping is implicit regularization', 'Dropout reduces co-adaptation (variance)', 'Ensemble methods reduce variance'],
        }),
        sec('double-descent', 'Double Descent', 'Modern overparameterized models can exhibit double descent — error decreases, increases, then decreases again beyond interpolation threshold.', {
          keyPoints: ['Classical U-curve bias-variance tradeoff', 'Double descent in overparameterized regime', 'Explains why huge models can generalize', 'Active research area in ML theory'],
        }),
      ], [ex('ex-bv-1', 'High training acc 99%, val acc 60% — diagnose over or underfitting?', 'diagnosis = "overfitting (high variance)"\nprint(diagnosis)', 'easy'), ex('ex-bv-2', 'Both train and val accuracy 55% on binary task — diagnose.', 'print("underfitting (high bias) or insufficient features")', 'easy')]),
      topic('ml-interpret', 'Model Interpretability (SHAP, LIME)', 'Explain model predictions for trust and debugging.', 'advanced', [
        sec('shap', 'SHAP Values', 'SHapley Additive exPlanations: fair allocation of prediction to each feature based on game theory. shap.TreeExplainer for tree models.', {
          example: 'import shap\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.datasets import load_iris\n\nX, y = load_iris(return_X_y=True)\nmodel = RandomForestClassifier(n_estimators=50, random_state=42).fit(X, y)\nexplainer = shap.TreeExplainer(model)\nshap_values = explainer.shap_values(X[:5])\nprint(len(shap_values))',
          keyPoints: ['SHAP values sum to prediction minus base rate', 'Consistent and locally accurate explanations', 'TreeExplainer exact and fast for trees', 'Summary plots show global feature importance'],
        }),
        sec('lime', 'LIME', 'Local Interpretable Model-agnostic Explanations. Perturb input, observe prediction changes, fit simple local model.', {
          keyPoints: ['Model-agnostic — works on any black box', 'Local fidelity not global accuracy', 'Tabular, text, and image explanations', 'LIME can be unstable across runs'],
        }),
        sec('global', 'Global vs Local Interpretability', 'Global: overall feature importance (permutation, SHAP summary). Local: why this specific prediction (SHAP force plot, LIME).', {
          keyPoints: ['Global for model understanding and feature selection', 'Local for individual decision audit', 'Partial dependence plots show marginal effects', 'ICE plots show heterogeneous effects'],
        }),
        sec('fairness', 'Interpretability for Fairness', 'Explainability required for regulated domains. Detect proxy discrimination through feature importance analysis.', {
          keyPoints: ['GDPR right to explanation in EU', 'Check if protected attributes drive predictions', 'Proxy variables encode protected information', 'Interpretability necessary not sufficient for fairness'],
        }),
      ], [ex('ex-shap-1', 'Train RandomForest on iris and get feature_importances_ sum.', 'from sklearn.ensemble import RandomForestClassifier\nfrom sklearn.datasets import load_iris\nX, y = load_iris(return_X_y=True)\nrf = RandomForestClassifier(random_state=42).fit(X, y)\nprint(round(rf.feature_importances_.sum(), 2))', 'easy'), ex('ex-shap-2', 'Name two interpretability methods.', 'print(["SHAP", "LIME"])', 'easy')]),
    ].map((t) => ({ ...t, track: 'ml' })),
  },
  {
    num: 14, id: 'module-14', fileName: 'module14-dl-fundamentals', exportName: 'module14Topics',
    name: 'Deep Learning Fundamentals', track: 'dl',
    description: 'Neural networks, activations, loss functions, backpropagation, and regularization.',
    topics: [
      topic('dl-nn-basics', 'Neural Network Basics', 'Perceptrons, multi-layer networks, and forward propagation.', 'beginner', [
        sec('perceptron', 'The Perceptron', 'Single neuron: output = activation(w·x + b). Stacked layers create MLP (Multi-Layer Perceptron). Universal function approximator with enough hidden units.', {
          example: 'import numpy as np\n\ndef forward(X, W, b, activation=np.tanh):\n    return activation(X @ W + b)\n\nX = np.array([[1.0, 2.0]])\nW = np.array([[0.5], [0.3]])\nprint(forward(X, W, np.array([0.1])))',
          keyPoints: ['Neural network = composed non-linear transformations', 'Hidden layers learn hierarchical features', 'Width and depth trade off for capacity', 'Start simple then increase complexity'],
        }),
        sec('mlp', 'Multi-Layer Perceptron', 'Input layer → hidden layer(s) → output layer. Each layer: linear transform + non-linear activation. Depth enables hierarchical feature learning.', {
          pseudoCode: 'FOR each layer L:\n    z = W_L @ a_{L-1} + b_L\n    a_L = activation(z)',
          keyPoints: ['Depth: number of hidden layers', 'Width: neurons per layer', 'Too deep without skip connections hard to train', '1-2 hidden layers sufficient for many tabular tasks'],
        }),
        sec('forward', 'Forward Propagation', 'Pass input through network layer by layer to produce prediction. Matrix operations enable batch processing.', {
          example: 'import numpy as np\n\ndef relu(z): return np.maximum(0, z)\n\nX = np.random.randn(32, 10)  # batch of 32, 10 features\nW1, b1 = np.random.randn(10, 64), np.zeros(64)\nW2, b2 = np.random.randn(64, 3), np.zeros(3)\n\nh = relu(X @ W1 + b1)\nout = h @ W2 + b2  # logits\nprint(out.shape)',
          output: '(32, 3)',
          keyPoints: ['Batch dimension enables parallel GPU computation', 'Output layer produces logits for classification', 'Softmax applied to logits for probabilities', 'Forward pass is inference/prediction'],
        }),
        sec('capacity', 'Network Capacity', 'More parameters = more capacity to fit complex functions. Risk overfitting with too much capacity on small data.', {
          keyPoints: ['Parameters = weights + biases count', 'Capacity must match data complexity', 'Regularization controls effective capacity', 'Modern networks vastly overparameterized yet generalize'],
        }),
      ], [ex('ex-nn-1', 'Implement ReLU activation for array [-1, 0, 2].', 'import numpy as np\ndef relu(z): return np.maximum(0, z)\nprint(relu(np.array([-1, 0, 2])))', 'easy'), ex('ex-nn-2', 'Compute output shape of batch 16 through layer 10→64→3.', 'print((16, 3))', 'easy')]),
      topic('dl-activations', 'Activation Functions', 'Non-linear functions enabling networks to learn complex patterns.', 'beginner', [
        sec('relu', 'ReLU & Variants', 'ReLU: max(0, x). Default for hidden layers. Leaky ReLU, PReLU, ELU address dying ReLU problem.', {
          example: 'import numpy as np\n\ndef relu(z): return np.maximum(0, z)\ndef leaky_relu(z, alpha=0.01): return np.where(z > 0, z, alpha * z)\n\nz = np.array([-2, -1, 0, 1, 2])\nprint(relu(z))\nprint(leaky_relu(z))',
          output: '[0 0 0 1 2]\n[-0.02 -0.01  0.    1.    2.  ]',
          keyPoints: ['ReLU sparse activation — efficient computation', 'Dying ReLU: neuron always outputs 0', 'Leaky ReLU keeps small gradient for negatives', 'GELU preferred in transformers'],
        }),
        sec('sigmoid-tanh', 'Sigmoid & Tanh', 'Sigmoid: (0,1) for binary output. Tanh: (-1,1) zero-centered. Vanishing gradient in deep networks limits hidden layer use.', {
          example: 'import numpy as np\n\ndef sigmoid(z): return 1 / (1 + np.exp(-z))\ndef tanh(z): return np.tanh(z)\n\nprint(sigmoid(np.array([0, 2, -2])).round(3))\nprint(tanh(np.array([0, 2, -2])).round(3))',
          output: '[0.5  0.881 0.119]\n[ 0.     0.964 -0.964]',
          keyPoints: ['Sigmoid for binary classification output layer', 'Tanh zero-centered — faster convergence than sigmoid', 'Both saturate causing vanishing gradients', 'Avoid in hidden layers of deep networks'],
        }),
        sec('softmax', 'Softmax', 'Multi-class output: softmax(zᵢ) = e^zᵢ/Σe^zⱼ. Outputs sum to 1. Combined with cross-entropy loss.', {
          example: 'import numpy as np\n\ndef softmax(z):\n    exp_z = np.exp(z - z.max())\n    return exp_z / exp_z.sum()\n\nprint(softmax(np.array([2.0, 1.0, 0.1])).round(3))',
          output: '[0.659 0.242 0.099]',
          keyPoints: ['Subtract max for numerical stability', 'Output layer only — not hidden layers', 'Cross-entropy + softmax gradient simplifies to p - y', 'Temperature scaling adjusts confidence'],
        }),
        sec('modern', 'Modern Activations', 'GELU (Gaussian Error Linear Unit) in BERT/GPT. Swish/SiLU: x·sigmoid(x). Smooth activations help deep transformers.', {
          keyPoints: ['GELU: x * Φ(x) where Φ is CDF of standard normal', 'Swish smooth near zero unlike ReLU', 'Activation choice less critical with good initialization', 'Match activation to architecture (GELU for transformers)'],
        }),
      ], [ex('ex-act-1', 'Implement softmax and verify output sums to 1.', 'import numpy as np\ndef softmax(z):\n    e = np.exp(z - z.max())\n    return e / e.sum()\np = softmax(np.array([1.0, 2.0, 3.0]))\nprint(round(p.sum(), 6))', 'easy'), ex('ex-act-2', 'Apply GELU approximation x * sigmoid(1.702*x) to x=1.', 'import numpy as np\nx = 1.0\nprint(round(x / (1 + np.exp(-1.702 * x)), 4))', 'medium')]),
      topic('dl-loss', 'Loss Functions', 'Objective functions that neural networks minimize during training.', 'beginner', [
        sec('mse', 'MSE & MAE Loss', 'MSE: mean((y-ŷ)²). Differentiable, penalizes large errors. MAE: mean(|y-ŷ|). Robust to outliers.', {
          example: 'import numpy as np\n\ndef mse_loss(y_true, y_pred):\n    return np.mean((y_true - y_pred) ** 2)\n\nprint(mse_loss(np.array([1, 2, 3]), np.array([1.1, 2.2, 2.8])))',
          output: '0.023333333333333334',
          keyPoints: ['MSE standard for regression', 'MAE when outliers are problematic', 'Huber loss combines MSE and MAE benefits', 'Loss choice must match task and output activation'],
        }),
        sec('ce', 'Cross-Entropy Loss', 'Binary: -[y log(ŷ) + (1-y)log(1-ŷ)]. Categorical: -Σ yᵢ log(ŷᵢ). Standard for classification.', {
          example: 'import numpy as np\n\ndef cross_entropy(y_true, y_pred):\n    y_pred = np.clip(y_pred, 1e-15, 1 - 1e-15)\n    return -np.mean(y_true * np.log(y_pred))\n\nprint(round(cross_entropy(1.0, 0.9), 4))',
          output: '0.1054',
          keyPoints: ['Use log-loss with sigmoid/softmax outputs', 'Label smoothing prevents overconfidence', 'Focal loss addresses class imbalance', 'Cross-entropy = negative log-likelihood'],
        }),
        sec('multi-task', 'Multi-Task & Custom Losses', 'Combine losses with weights: L = α·L₁ + β·L₂. Custom losses for ranking, contrastive learning, GANs.', {
          keyPoints: ['Weight task losses by importance or uncertainty', 'Contrastive loss for embeddings (SimCLR, triplet)', 'Perceptual loss for image generation', 'Design loss to match evaluation metric when possible'],
        }),
        sec('monitor', 'Monitoring Loss', 'Track train and validation loss. Divergence indicates overfitting. Plateau suggests learning rate adjustment needed.', {
          keyPoints: ['Loss should decrease during training', 'Val loss increasing while train decreases = overfit', 'ReduceLROnPlateau on val loss', 'Early stopping saves best val loss checkpoint'],
        }),
      ], [ex('ex-loss-1', 'Compute MSE for y=[10,20], pred=[11,19].', 'import numpy as np\nprint(np.mean((np.array([10,20]) - np.array([11,19]))**2))', 'easy'), ex('ex-loss-2', 'Binary cross-entropy for y=0, pred=0.1.', 'import numpy as np\nprint(-np.log(1 - 0.1))', 'easy')]),
      topic('dl-backprop', 'Backpropagation', 'Computing gradients through the computational graph via chain rule.', 'beginner', [
        sec('concept', 'Backpropagation Concept', 'Forward pass computes output and loss. Backward pass applies chain rule from loss to each parameter. Efficient via dynamic programming on computational graph.', {
          pseudoCode: 'FOR layer L from output to input:\n    dL/dz_L = upstream_gradient * activation_derivative\n    dL/dW_L = dL/dz_L @ a_{L-1}^T\n    dL/db_L = sum(dL/dz_L)\n    propagate dL/da_{L-1} to previous layer',
          keyPoints: ['Chain rule applied layer by layer', 'Computational graph tracks dependencies', 'Reverse mode AD efficient for many parameters', 'Same algorithm as autograd in PyTorch'],
        }),
        sec('manual', 'Manual Backprop Example', '2-layer network backprop by hand builds intuition. Matrix calculus for weight gradients.', {
          example: 'import numpy as np\n\n# Simple gradient descent on f(w) = w^2\nw = 3.0\nlr = 0.1\nfor _ in range(20):\n    grad = 2 * w  # df/dw\n    w = w - lr * grad\nprint(round(w, 6))',
          output: '0.0',
          keyPoints: ['Gradient points direction of steepest increase', 'Update in negative gradient direction', 'Manual backprop verifies autograd results', 'Vanishing gradient in deep sigmoid networks'],
        }),
        sec('autograd', 'Automatic Differentiation', 'PyTorch autograd, TensorFlow GradientTape compute gradients automatically. reverse-mode AD for scalar loss.', {
          keyPoints: ['Autograd builds computational graph dynamically', 'tensor.backward() triggers reverse pass', 'requires_grad=True tracks gradients', 'No need for manual gradient derivation in practice'],
        }),
        sec('vanishing', 'Vanishing & Exploding Gradients', 'Deep networks: gradients shrink (sigmoid/tanh) or grow exponentially. Solutions: ReLU, residual connections, gradient clipping, proper initialization.', {
          keyPoints: ['Vanishing: gradients near zero in early layers', 'Exploding: gradients overflow — clip to max norm', 'Batch normalization stabilizes gradients', 'ResNet skip connections enable very deep networks'],
        }),
      ], [ex('ex-bp-1', 'Gradient of f(w)=w^3 at w=2.', 'w = 2\nprint(3 * w**2)', 'easy'), ex('ex-bp-2', 'Run 5 gradient descent steps on f(x)=x^2, x=4, lr=0.1.', 'x = 4.0\nfor _ in range(5):\n    x -= 0.1 * 2 * x\nprint(round(x, 2))', 'easy')]),
      topic('dl-init-reg', 'Weight Initialization & Regularization', 'Starting weights and techniques to prevent overfitting.', 'beginner', [
        sec('init', 'Weight Initialization', 'Xavier/Glorot: scale by 1/√n_in for tanh/sigmoid. He/Kaiming: scale by √(2/n_in) for ReLU. Bad init slows or prevents convergence.', {
          example: 'import numpy as np\n\nn_in, n_out = 256, 128\n# He initialization for ReLU\nW = np.random.randn(n_in, n_out) * np.sqrt(2.0 / n_in)\nprint(W.std().round(4))',
          keyPoints: ['Zero init breaks symmetry badly', 'Xavier for sigmoid/tanh activations', 'He/Kaiming for ReLU family', 'PyTorch nn.Linear uses Kaiming by default'],
        }),
        sec('dropout', 'Dropout', 'Randomly zero neurons during training with probability p. Prevents co-adaptation. Scale by 1/(1-p) at inference or use inverted dropout.', {
          example: 'import numpy as np\n\ndef dropout(x, p=0.5, training=True):\n    if not training:\n        return x\n    mask = np.random.binomial(1, 1-p, x.shape)\n    return x * mask / (1 - p)\n\nx = np.ones((4, 4))\nnp.random.seed(42)\nprint(dropout(x, p=0.5).sum())',
          keyPoints: ['Typical p=0.5 for hidden layers, 0.2 for input', 'Only active during training', 'MC dropout for uncertainty estimation', 'Less needed with batch norm in CNNs'],
        }),
        sec('batchnorm', 'Batch Normalization', 'Normalize layer inputs across batch: (x-μ)/σ. Learnable scale γ and shift β. Stabilizes training, allows higher learning rates.', {
          keyPoints: ['Normalizes intermediate activations', 'Acts as regularizer', 'Different behavior train vs eval — model.eval()', 'LayerNorm alternative for transformers/RNNs'],
        }),
        sec('early-stop', 'Early Stopping & Data Augmentation', 'Stop training when validation loss stops improving. Data augmentation artificially expands training set.', {
          keyPoints: ['Early stopping simplest regularization', 'Save checkpoint at best val loss', 'Augmentation: rotation, flip, crop for images', 'Mixup/CutMix advanced augmentation for classification'],
        }),
      ], [ex('ex-init-1', 'He init std for layer with 256 inputs.', 'import numpy as np\nprint(round(np.sqrt(2.0 / 256), 4))', 'easy'), ex('ex-init-2', 'Apply inverted dropout to [1,2,3,4] with p=0.5, seed=0.', 'import numpy as np\nnp.random.seed(0)\nx = np.array([1.,2.,3.,4.])\np = 0.5\nmask = np.random.binomial(1, 1-p, x.shape)\nprint(x * mask / (1-p))', 'medium')]),
    ].map((t) => ({ ...t, track: 'dl' })),
  },
  {
    num: 15, id: 'module-15', fileName: 'module15-pytorch', exportName: 'module15Topics',
    name: 'PyTorch & Neural Networks', track: 'dl',
    description: 'PyTorch tensors, autograd, nn.Module, training loops, and GPU acceleration.',
    topics: [
      topic('pt-tensors', 'PyTorch Tensors', 'PyTorch fundamental data structure with GPU support.', 'intermediate', [
        sec('tensor-basics', 'Creating Tensors', 'torch.tensor(), torch.zeros(), torch.randn(). Similar to NumPy but with GPU support and autograd.', {
          example: 'import torch\n\na = torch.tensor([1.0, 2.0, 3.0])\nb = torch.randn(3, 4)\nc = torch.zeros(2, 3, dtype=torch.float32)\nprint(a.dtype, b.shape, c.device)',
          output: 'torch.float32 torch.Size([3, 4]) cpu',
          keyPoints: ['Tensors analogous to NumPy ndarrays', 'dtype and device are tensor properties', 'torch.float32 default for DL', 'GPU tensors on cuda device'],
        }),
        sec('ops', 'Tensor Operations', 'Element-wise ops, matrix multiply @, broadcasting. torch.matmul, .T for transpose. In-place ops suffixed with _.', {
          example: 'import torch\n\na = torch.randn(3, 4)\nb = torch.randn(4, 5)\nc = a @ b\nprint(c.shape)\nprint((a * 2).shape)',
          output: 'torch.Size([3, 5])\ntorch.Size([3, 4])',
          keyPoints: ['@ operator for matrix multiply', 'Broadcasting rules same as NumPy', 'Avoid in-place ops on tensors with grad', 'torch.einsum for complex tensor operations'],
        }),
        sec('numpy-bridge', 'NumPy Interoperability', 'tensor.numpy() for CPU tensors. torch.from_numpy() shares memory with NumPy array.', {
          example: 'import torch\nimport numpy as np\n\nnp_arr = np.array([1.0, 2.0, 3.0])\ntensor = torch.from_numpy(np_arr)\nnp_back = tensor.numpy()\nprint(np_back)',
          output: '[1. 2. 3.]',
          keyPoints: ['Zero-copy between NumPy and CPU tensors', 'GPU tensors must .cpu() before .numpy()', 'Convert dtype explicitly when needed', 'Use tensor for all DL computations'],
        }),
        sec('device', 'Device Management', 'torch.device("cuda" if torch.cuda.is_available() else "cpu"). tensor.to(device). model.to(device).', {
          example: 'import torch\n\ndevice = torch.device("cuda" if torch.cuda.is_available() else "cpu")\nx = torch.randn(3, 3).to(device)\nprint(x.device)',
          keyPoints: ['Always move model AND data to same device', 'Check cuda availability before GPU use', 'MPS device for Apple Silicon', 'torch.cuda.empty_cache() frees GPU memory'],
        }),
      ], [ex('ex-pt-1', 'Create 2x3 tensor of ones in PyTorch.', 'import torch\nprint(torch.ones(2, 3))', 'easy'), ex('ex-pt-2', 'Matrix multiply 2x3 @ 3x4 tensors, print shape.', 'import torch\nprint((torch.randn(2,3) @ torch.randn(3,4)).shape)', 'easy')]),
      topic('pt-autograd', 'Autograd & Computational Graphs', 'Automatic differentiation engine in PyTorch.', 'intermediate', [
        sec('grad', 'requires_grad & backward', 'Set requires_grad=True to track gradients. loss.backward() computes gradients. tensor.grad accesses result.', {
          example: 'import torch\n\nx = torch.tensor(3.0, requires_grad=True)\ny = x ** 2 + 2 * x\ny.backward()\nprint(x.grad)  # dy/dx = 2x + 2 = 8',
          output: '8.0',
          keyPoints: ['Gradients accumulate — zero with optimizer.zero_grad()', 'backward() only on scalar loss', 'retain_graph=True for multiple backward passes', 'detach() stops gradient flow'],
        }),
        sec('graph', 'Computational Graph', 'PyTorch builds dynamic graph during forward pass. Nodes are tensors, edges are operations. Graph freed after backward by default.', {
          keyPoints: ['Dynamic graph: rebuilt each forward pass', 'Enables Python control flow in models', 'Contrast with TensorFlow static graphs (1.x)', 'torch.no_grad() disables graph for inference'],
        }),
        sec('leaf', 'Leaf Tensors & Parameters', 'Leaf tensors are graph roots (parameters, inputs). Only leaf tensors retain .grad after backward. nn.Parameter wraps trainable weights.', {
          example: 'import torch\nimport torch.nn as nn\n\nlayer = nn.Linear(10, 5)\nprint(layer.weight.requires_grad)\nprint(layer.weight.is_leaf)',
          keyPoints: ['nn.Parameter automatically requires_grad', 'Non-leaf tensor gradients not retained by default', 'Register buffers for non-trainable state (BN stats)', 'model.parameters() yields all trainable params'],
        }),
        sec('higher', 'Higher-Order Gradients', 'create_graph=True enables second derivatives. Used in meta-learning and some GAN training.', {
          keyPoints: ['Second-order for Hessian-vector products', 'Meta-learning (MAML) uses higher-order grads', 'Expensive — rarely needed in standard training', 'torch.autograd.grad for explicit gradient computation'],
        }),
      ], [ex('ex-ag-1', 'Compute gradient of y=x^2 at x=5 using autograd.', 'import torch\nx = torch.tensor(5.0, requires_grad=True)\n(x**2).backward()\nprint(x.grad)', 'easy'), ex('ex-ag-2', 'Verify nn.Linear weight has requires_grad True.', 'import torch.nn as nn\nprint(nn.Linear(5, 3).weight.requires_grad)', 'easy')]),
      topic('pt-module', 'Building NN with nn.Module', 'Object-oriented model definition in PyTorch.', 'intermediate', [
        sec('module', 'nn.Module Basics', 'Subclass nn.Module, define layers in __init__, forward pass in forward(). model.parameters() for optimizer.', {
          example: 'import torch\nimport torch.nn as nn\n\nclass MLP(nn.Module):\n    def __init__(self, in_dim, hidden, out_dim):\n        super().__init__()\n        self.net = nn.Sequential(\n            nn.Linear(in_dim, hidden),\n            nn.ReLU(),\n            nn.Linear(hidden, out_dim)\n        )\n    def forward(self, x):\n        return self.net(x)\n\nmodel = MLP(10, 64, 3)\nprint(model(torch.randn(5, 10)).shape)',
          output: 'torch.Size([5, 3])',
          keyPoints: ['super().__init__() required in __init__', 'Define layers in __init__ not forward', 'forward() defines computation graph', 'Sequential chains layers cleanly'],
        }),
        sec('layers', 'Common Layers', 'nn.Linear, nn.Conv2d, nn.LSTM, nn.Embedding, nn.Dropout, nn.BatchNorm2d. Activation: nn.ReLU, nn.GELU, nn.Softmax.', {
          keyPoints: ['Linear: fully connected layer', 'Conv2d: spatial feature extraction', 'Embedding: lookup table for tokens', 'BatchNorm1d/2d for normalization'],
        }),
        sec('loss-opt', 'Loss Functions & Optimizers', 'nn.CrossEntropyLoss (includes softmax). nn.MSELoss. Optimizers: torch.optim.SGD, Adam, AdamW.', {
          example: 'import torch\nimport torch.nn as nn\nimport torch.optim as optim\n\nmodel = nn.Linear(10, 3)\ncriterion = nn.CrossEntropyLoss()\noptimizer = optim.Adam(model.parameters(), lr=0.001)\n\nout = model(torch.randn(4, 10))\nloss = criterion(out, torch.tensor([0, 1, 2, 0]))\noptimizer.zero_grad()\nloss.backward()\noptimizer.step()\nprint(round(loss.item(), 4))',
          keyPoints: ['CrossEntropyLoss expects raw logits not softmax', 'zero_grad before backward prevents accumulation', 'Adam default optimizer for most tasks', 'AdamW decouples weight decay from Adam'],
        }),
        sec('save', 'Saving & Loading Models', 'torch.save(model.state_dict(), path). model.load_state_dict(torch.load(path)). Save optimizer state for resume.', {
          keyPoints: ['state_dict saves learned parameters only', 'Save full checkpoint: model + optimizer + epoch', 'model.eval() before inference', 'torch.load with map_location for CPU loading'],
        }),
      ], [ex('ex-mod-1', 'Create nn.Sequential with Linear(4,8), ReLU, Linear(8,2).', 'import torch.nn as nn\nm = nn.Sequential(nn.Linear(4,8), nn.ReLU(), nn.Linear(8,2))\nprint(len(list(m.children())))', 'easy'), ex('ex-mod-2', 'Count parameters in nn.Linear(10, 5).', 'import torch.nn as nn\nprint(sum(p.numel() for p in nn.Linear(10, 5).parameters()))', 'easy')]),
      topic('pt-training', 'DataLoaders & Training Loops', 'Efficient data loading and standard training loop pattern.', 'intermediate', [
        sec('dataset', 'Dataset & DataLoader', 'torch.utils.data.Dataset defines __len__ and __getitem__. DataLoader batches, shuffles, and parallelizes loading.', {
          example: 'import torch\nfrom torch.utils.data import Dataset, DataLoader\n\nclass SimpleDataset(Dataset):\n    def __init__(self, data, labels):\n        self.data, self.labels = data, labels\n    def __len__(self): return len(self.data)\n    def __getitem__(self, idx):\n        return self.data[idx], self.labels[idx]\n\nds = SimpleDataset(torch.randn(100, 10), torch.randint(0, 3, (100,)))\nloader = DataLoader(ds, batch_size=16, shuffle=True)\nbatch_x, batch_y = next(iter(loader))\nprint(batch_x.shape, batch_y.shape)',
          output: 'torch.Size([16, 10]) torch.Size([16])',
          keyPoints: ['DataLoader handles batching and shuffling', 'num_workers for parallel data loading', 'pin_memory=True speeds GPU transfer', 'Custom Dataset for any data source'],
        }),
        sec('loop', 'Training Loop Pattern', 'Standard loop: for epoch → for batch → forward → loss → backward → step → log. Validate after each epoch.', {
          example: 'import torch\nimport torch.nn as nn\n\n# Training step pattern\ndef train_step(model, batch_x, batch_y, optimizer, criterion):\n    model.train()\n    optimizer.zero_grad()\n    output = model(batch_x)\n    loss = criterion(output, batch_y)\n    loss.backward()\n    optimizer.step()\n    return loss.item()\n\nprint("Pattern defined")',
          output: 'Pattern defined',
          keyPoints: ['model.train() enables dropout/BN training mode', 'model.eval() + torch.no_grad() for validation', 'Track metrics per epoch not per batch average', 'Set seed for reproducibility'],
        }),
        sec('transforms', 'Transforms & Augmentation', 'torchvision.transforms for image preprocessing. Compose chains transforms. RandomHorizontalFlip, Normalize, ToTensor.', {
          keyPoints: ['ToTensor converts PIL to [C,H,W] float [0,1]', 'Normalize with dataset mean/std', 'Apply augmentation only to training set', 'torchvision.datasets includes MNIST, CIFAR, ImageNet'],
        }),
        sec('scheduler', 'Learning Rate Schedulers', 'StepLR, CosineAnnealingLR, ReduceLROnPlateau. scheduler.step() after epoch or validation.', {
          keyPoints: ['Cosine annealing popular for vision training', 'Warmup stabilizes transformer training', 'ReduceLROnPlateau reacts to val metric', 'Log learning rate alongside loss'],
        }),
      ], [ex('ex-train-1', 'Create DataLoader for 50 samples, batch_size=8, print batch count.', 'import torch\nfrom torch.utils.data import DataLoader, TensorDataset\nloader = DataLoader(TensorDataset(torch.randn(50,4)), batch_size=8)\nprint(len(loader))', 'easy'), ex('ex-train-2', 'Write train/eval mode switch pattern as comment strings.', 'steps = ["model.train()", "model.eval()", "torch.no_grad()"]\nprint(steps)', 'easy')]),
      topic('pt-gpu', 'GPU Training & Mixed Precision', 'Accelerate training with CUDA and automatic mixed precision.', 'intermediate', [
        sec('cuda', 'CUDA Training', 'Move model and batches to GPU. Monitor memory with nvidia-smi. torch.cuda.memory_summary() for debugging.', {
          example: 'import torch\n\ndevice = torch.device("cuda" if torch.cuda.is_available() else "cpu")\nmodel = torch.nn.Linear(10, 5).to(device)\nx = torch.randn(32, 10).to(device)\nprint(model(x).device)',
          keyPoints: ['Batch size limited by GPU memory', 'Gradient accumulation simulates larger batches', 'DataParallel for multi-GPU (prefer DistributedDataParallel)', 'Clear cache between experiments'],
        }),
        sec('amp', 'Automatic Mixed Precision', 'torch.cuda.amp.autocast + GradScaler. FP16 forward/backward, FP32 weight updates. ~2x speedup on modern GPUs.', {
          example: 'import torch\n\nscaler = torch.cuda.amp.GradScaler(enabled=torch.cuda.is_available())\nprint("GradScaler ready")',
          keyPoints: ['autocast runs ops in FP16 where safe', 'GradScaler prevents gradient underflow', 'Minimal code change for significant speedup', 'BF16 on A100+ avoids some FP16 issues'],
        }),
        sec('compile', 'torch.compile (PyTorch 2.0)', 'model = torch.compile(model) JIT-compiles for faster execution. modes: default, reduce-overhead, max-autotune.', {
          keyPoints: ['PyTorch 2.0+ feature', 'Up to 30%+ speedup on compatible models', 'First run slower due to compilation', 'May not work with all dynamic models'],
        }),
        sec('distributed', 'Distributed Training Preview', 'DistributedDataParallel (DDP) for multi-GPU. Horovod, DeepSpeed for multi-node. Essential for large model training.', {
          keyPoints: ['DDP preferred over DataParallel', 'Each GPU gets batch slice, syncs gradients', 'DeepSpeed ZeRO reduces memory for large models', 'FSDP for fully sharded data parallel'],
        }),
      ], [ex('ex-gpu-1', 'Check if CUDA available and print device count.', 'import torch\nprint(torch.cuda.is_available(), torch.cuda.device_count())', 'easy'), ex('ex-gpu-2', 'Move tensor to cuda if available else cpu.', 'import torch\ndevice = torch.device("cuda" if torch.cuda.is_available() else "cpu")\nprint(torch.tensor([1.0]).to(device).device)', 'easy')]),
    ].map((t) => ({ ...t, track: 'dl' })),
  },
  {
    num: 16, id: 'module-16', fileName: 'module16-cnns', exportName: 'module16Topics',
    name: 'CNNs & Computer Vision', track: 'dl',
    description: 'Convolutional networks, architectures, transfer learning, detection, and segmentation.',
    topics: [
      topic('dl-conv', 'Convolutional Layers', 'Spatial feature extraction with convolution and pooling.', 'beginner', [
        sec('conv2d', 'Convolution Operation', 'Filter slides over input computing dot products. Learns local patterns: edges, textures, shapes. nn.Conv2d(in_channels, out_channels, kernel_size).', {
          example: 'import torch\nimport torch.nn as nn\n\nconv = nn.Conv2d(3, 16, kernel_size=3, padding=1)\nx = torch.randn(1, 3, 32, 32)  # batch, channels, H, W\nout = conv(x)\nprint(out.shape)',
          output: 'torch.Size([1, 16, 32, 32])',
          keyPoints: ['padding preserves spatial dimensions', 'stride reduces spatial size', 'Channels = feature maps (depth)', 'Parameter sharing: same filter across spatial locations'],
        }),
        sec('pooling', 'Pooling Layers', 'MaxPool2d: takes maximum in window. AvgPool2d: average. Reduces spatial dimensions, provides translation invariance.', {
          example: 'import torch\nimport torch.nn as nn\n\npool = nn.MaxPool2d(2, stride=2)\nx = torch.randn(1, 16, 32, 32)\nprint(pool(x).shape)',
          output: 'torch.Size([1, 16, 16, 16])',
          keyPoints: ['Pooling reduces computation and overfitting', 'Max pooling most common', 'Global Average Pooling replaces flatten + FC', 'AdaptiveAvgPool2d for variable input sizes'],
        }),
        sec('receptive', 'Receptive Field', 'Each neuron sees a region of input. Receptive field grows with depth and pooling. Deep layers capture global context.', {
          keyPoints: ['Stacking conv layers expands receptive field', 'Dilated convolutions expand field without pooling', 'Large receptive field needed for global context', 'Feature hierarchy: edges → parts → objects'],
        }),
        sec('cnn-arch', 'Basic CNN Architecture', 'Conv → ReLU → Pool repeated, then Flatten → FC → output. Modern: all conv without large FC layers.', {
          example: 'import torch.nn as nn\n\nclass SimpleCNN(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.features = nn.Sequential(\n            nn.Conv2d(1, 32, 3, padding=1), nn.ReLU(), nn.MaxPool2d(2),\n            nn.Conv2d(32, 64, 3, padding=1), nn.ReLU(), nn.MaxPool2d(2),\n        )\n        self.classifier = nn.Linear(64 * 7 * 7, 10)\n    def forward(self, x):\n        x = self.features(x)\n        return self.classifier(x.view(x.size(0), -1))',
          keyPoints: ['Feature extractor + classifier pattern', 'Spatial dimensions shrink with pooling', 'BatchNorm after conv stabilizes training', 'Data augmentation critical for small datasets'],
        }),
      ], [ex('ex-conv-1', 'Output shape of Conv2d(3,16,3,padding=1) on 32x32 input.', 'import torch.nn as nn\nimport torch\nprint(nn.Conv2d(3,16,3,padding=1)(torch.randn(1,3,32,32)).shape)', 'easy'), ex('ex-conv-2', 'Output shape after MaxPool2d(2) on 16x32x32.', 'import torch.nn as nn\nimport torch\nprint(nn.MaxPool2d(2)(torch.randn(1,16,32,32)).shape)', 'easy')]),
      topic('dl-cnn-arch', 'CNN Architectures (ResNet, VGG)', 'Landmark architectures that shaped computer vision.', 'beginner', [
        sec('vgg', 'VGG', 'Small 3×3 filters stacked deeply. Simple uniform architecture. VGG16/19 widely used for transfer learning baseline.', {
          keyPoints: ['3x3 conv stacks replace large filters', 'Simplicity aids understanding and transfer', 'Very parameter-heavy in FC layers', 'Superseded by ResNet but good baseline'],
        }),
        sec('resnet', 'ResNet & Skip Connections', 'Residual blocks: output = F(x) + x. Skip connections solve vanishing gradient, enable 100+ layer networks.', {
          example: 'import torch\nimport torch.nn as nn\n\nclass ResBlock(nn.Module):\n    def __init__(self, channels):\n        super().__init__()\n        self.conv = nn.Sequential(\n            nn.Conv2d(channels, channels, 3, padding=1), nn.ReLU(),\n            nn.Conv2d(channels, channels, 3, padding=1))\n    def forward(self, x):\n        return torch.relu(self.conv(x) + x)  # skip connection\n\nprint(ResBlock(64)(torch.randn(1, 64, 32, 32)).shape)',
          output: 'torch.Size([1, 64, 32, 32])',
          keyPoints: ['Identity skip when dimensions match', '1x1 conv projection when dimensions differ', 'ResNet-50/101 standard for transfer learning', 'BatchNorm before activation in modern variants'],
        }),
        sec('modern', 'EfficientNet, ConvNeXt', 'EfficientNet scales depth/width/resolution jointly. ConvNeXt modernizes ResNet with transformer-inspired design.', {
          keyPoints: ['Compound scaling balances model dimensions', 'EfficientNet-B0 to B7 for different compute budgets', 'ConvNeXt competitive with vision transformers', 'Architecture search automates design'],
        }),
        sec('torchvision', 'torchvision.models', 'Pretrained models: resnet50, efficientnet_b0, vit_b_16. weights=ResNet50_Weights.IMAGENET1K_V2.', {
          example: 'from torchvision import models\n\nmodel = models.resnet18(weights=None)\nprint(model.fc.in_features)  # 512 for resnet18',
          output: '512',
          keyPoints: ['Pretrained weights from ImageNet', 'Replace final FC for your num_classes', 'Feature extraction: remove classifier head', 'Fine-tune all or freeze early layers'],
        }),
      ], [ex('ex-res-1', 'Import resnet18 from torchvision and print fc input features.', 'from torchvision import models\nprint(models.resnet18(weights=None).fc.in_features)', 'easy'), ex('ex-res-2', 'Implement skip connection: output = F(x) + x conceptually.', 'import torch\nx = torch.tensor([1.0, 2.0])\nF_x = x * 2\nprint((F_x + x).tolist())', 'easy')]),
      topic('dl-transfer', 'Transfer Learning', 'Leverage pretrained models for new tasks with limited data.', 'beginner', [
        sec('strategy', 'Transfer Learning Strategies', 'Feature extraction: freeze backbone, train head. Fine-tuning: unfreeze some/all layers with low LR. More data → more fine-tuning.', {
          example: 'import torch.nn as nn\nfrom torchvision import models\n\nmodel = models.resnet18(weights="IMAGENET1K_V1")\nfor param in model.parameters():\n    param.requires_grad = False\nmodel.fc = nn.Linear(512, 10)  # new head\nprint(model.fc.weight.requires_grad)',
          output: 'True',
          keyPoints: ['Freeze backbone when data is very small', 'Fine-tune later layers with small LR', 'Pretrain on similar domain when possible', 'Replace classifier head always'],
        }),
        sec('finetune', 'Fine-Tuning Best Practices', 'Discriminative learning rates: lower LR for early layers. Gradual unfreezing. Monitor val loss carefully.', {
          keyPoints: ['LR for backbone << LR for head (10-100x)', 'Unfreeze gradually from top to bottom', 'Strong augmentation when fine-tuning', 'Early stopping essential — overfits quickly'],
        }),
        sec('domain', 'Domain Adaptation', 'Pretrained on ImageNet, fine-tune on medical/satellite/etc. Domain gap affects transfer quality.', {
          keyPoints: ['Large domain gap reduces transfer benefit', 'Self-supervised pretraining on target domain helps', 'SimCLR, MoCo for unsupervised pretraining', 'Foundation models reduce need for task-specific pretraining'],
        }),
        sec('hub', 'PyTorch Hub & timm', 'torch.hub.load for pretrained models. timm (PyTorch Image Models) library with 500+ architectures.', {
          keyPoints: ['timm unified API for many architectures', 'timm.create_model with pretrained=True', 'Easy model ensembling with timm', 'Check license for commercial pretrained weights'],
        }),
      ], [ex('ex-tl-1', 'Replace resnet18 fc with Linear(512, 5).', 'from torchvision import models\nimport torch.nn as nn\nm = models.resnet18(weights=None)\nm.fc = nn.Linear(512, 5)\nprint(m.fc.out_features)', 'easy'), ex('ex-tl-2', 'Freeze all params, verify requires_grad False.', 'from torchvision import models\nm = models.resnet18(weights=None)\nfor p in m.parameters(): p.requires_grad = False\nprint(all(not p.requires_grad for p in m.parameters()))', 'easy')]),
      topic('dl-detection', 'Object Detection', 'Locate and classify multiple objects in images.', 'beginner', [
        sec('metrics-det', 'Detection Metrics', 'IoU (Intersection over Union) measures box overlap. mAP (mean Average Precision) standard benchmark metric.', {
          example: 'def iou(box1, box2):\n    x1 = max(box1[0], box2[0]); y1 = max(box1[1], box2[1])\n    x2 = min(box1[2], box2[2]); y2 = min(box1[3], box2[3])\n    inter = max(0, x2-x1) * max(0, y2-y1)\n    area1 = (box1[2]-box1[0]) * (box1[3]-box1[1])\n    area2 = (box2[2]-box2[0]) * (box2[3]-box2[1])\n    return inter / (area1 + area2 - inter)\n\nprint(round(iou([0,0,10,10], [5,5,15,15]), 3))',
          output: '0.143',
          keyPoints: ['IoU > 0.5 typically considered match', 'mAP averaged over classes and IoU thresholds', 'Precision-recall tradeoff at confidence threshold', 'COCO dataset standard benchmark'],
        }),
        sec('rcnn', 'R-CNN Family', 'Two-stage: RPN proposes regions, classifier refines. Faster R-CNN real-time capable. Mask R-CNN adds segmentation.', {
          keyPoints: ['Two-stage: propose then classify', 'Faster R-CNN shares backbone with RPN', 'Anchor boxes at multiple scales/aspect ratios', 'Accurate but slower than one-stage'],
        }),
        sec('yolo', 'YOLO & One-Stage Detectors', 'YOLO: single pass prediction grid. SSD, RetinaNet with focal loss. Faster, good for real-time applications.', {
          keyPoints: ['One-stage: direct bounding box prediction', 'YOLO v8/v9/v10 state-of-the-art speed/accuracy', 'Real-time on edge devices possible', 'Trade accuracy for speed vs two-stage'],
        }),
        sec('tools', 'Detection Tools', 'torchvision.models.detection, ultralytics YOLO, Detectron2 (Meta). Pretrained on COCO.', {
          keyPoints: ['Detectron2 research platform from Meta', 'Ultralytics YOLO easy API for training/inference', 'Export to ONNX/TensorRT for deployment', 'Custom dataset in COCO JSON format'],
        }),
      ], [ex('ex-det-1', 'Compute IoU of identical boxes [0,0,10,10].', 'def iou(b1,b2):\n    inter = max(0,min(b1[2],b2[2])-max(b1[0],b2[0])) * max(0,min(b1[3],b2[3])-max(b1[1],b2[1]))\n    a1=(b1[2]-b1[0])*(b1[3]-b1[1]); a2=(b2[2]-b2[0])*(b2[3]-b2[1])\n    return inter/(a1+a2-inter)\nprint(iou([0,0,10,10],[0,0,10,10]))', 'easy'), ex('ex-det-2', 'Name one two-stage and one one-stage detector.', 'print({"two_stage": "Faster R-CNN", "one_stage": "YOLO"})', 'easy')]),
      topic('dl-segmentation', 'Image Segmentation', 'Pixel-level classification: semantic and instance segmentation.', 'beginner', [
        sec('semantic', 'Semantic Segmentation', 'Classify every pixel. FCN, U-Net, DeepLab architectures. Encoder-decoder with skip connections.', {
          keyPoints: ['U-Net skip connections preserve spatial detail', 'Encoder downsamples, decoder upsamples', 'Dice loss common for imbalanced segmentation', 'Medical imaging primary application'],
        }),
        sec('instance', 'Instance Segmentation', 'Detect and segment each object instance separately. Mask R-CNN: detection + mask head per ROI.', {
          keyPoints: ['Combines detection and segmentation', 'Mask R-CNN adds mask branch to Faster R-CNN', 'Each instance gets unique mask', 'Panoptic segmentation: semantic + instance'],
        }),
        sec('unet', 'U-Net Architecture', 'Symmetric encoder-decoder with skip connections. Concatenates encoder features to decoder. Excellent for biomedical segmentation.', {
          example: '# U-Net concept: encoder path downsamples, decoder upsamples\n# Skip connections concatenate features at each level\nprint("Encoder -> Bottleneck -> Decoder + Skips")',
          output: 'Encoder -> Bottleneck -> Decoder + Skips',
          keyPoints: ['Skip connections recover fine spatial details', 'Works well with limited training data', 'segmentation_models_pytorch library', 'Augment with elastic deformations for medical'],
        }),
        sec('metrics-seg', 'Segmentation Metrics', 'IoU per class (Jaccard index). Dice coefficient. Pixel accuracy misleading with class imbalance.', {
          keyPoints: ['Mean IoU averaged over classes', 'Dice = 2|A∩B|/(|A|+|B|)', 'Boundary F1 for precise edge evaluation', 'Report per-class metrics not just mean'],
        }),
      ], [ex('ex-seg-1', 'Compute Dice coefficient for identical masks of 100 pixels.', 'intersection = 100\ndice = 2 * intersection / (100 + 100)\nprint(dice)', 'easy'), ex('ex-seg-2', 'Name encoder-decoder architecture for biomedical segmentation.', 'print("U-Net")', 'easy')]),
    ].map((t) => ({ ...t, track: 'dl' })),
  },
  {
    num: 17, id: 'module-17', fileName: 'module17-nlp-sequences', exportName: 'module17Topics',
    name: 'NLP, RNNs & Sequence Models', track: 'dl',
    description: 'Text processing, embeddings, RNNs, LSTMs, and sequence-to-sequence models.',
    topics: [
      topic('nlp-preprocess', 'Text Preprocessing & Tokenization', 'Prepare raw text for neural network input.', 'beginner', [
        sec('clean', 'Text Cleaning', 'Lowercase, remove punctuation, handle URLs/emojis, normalize whitespace. Domain-specific rules matter.', {
          example: 'import re\n\ndef clean_text(text):\n    text = text.lower()\n    text = re.sub(r"[^a-z0-9\\s]", "", text)\n    return " ".join(text.split())\n\nprint(clean_text("Hello, World! Visit https://example.com"))',
          output: 'hello world visit httpsexamplecom',
          keyPoints: ['Cleaning rules depend on task and domain', 'Preserve meaningful punctuation for sentiment', 'Handle unicode and encoding issues', 'Modern tokenizers often skip manual cleaning'],
        }),
        sec('tokenize', 'Tokenization Strategies', 'Word-level, subword (BPE, WordPiece, SentencePiece), character-level. Subword balances vocabulary size and OOV handling.', {
          keyPoints: ['Word tokenization simple but huge vocabularies', 'BPE used in GPT — merges frequent pairs', 'WordPiece used in BERT — likelihood-based merges', 'SentencePiece language-agnostic tokenization'],
        }),
        sec('hf-tokenizer', 'HuggingFace Tokenizers', 'AutoTokenizer.from_pretrained("bert-base-uncased"). Returns input_ids, attention_mask. Handles padding and truncation.', {
          example: 'from transformers import AutoTokenizer\n\ntokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")\nencoded = tokenizer("Hello world", return_tensors="pt")\nprint(encoded["input_ids"].shape)',
          keyPoints: ['Pretrained tokenizers match model vocabularies', 'attention_mask ignores padding tokens', 'truncation and max_length for fixed input', 'Batch encoding with padding=True'],
        }),
        sec('vocab', 'Vocabulary & Special Tokens', '[CLS], [SEP], [PAD], [UNK], [MASK]. Vocabulary maps tokens to integer IDs.', {
          keyPoints: ['[PAD] token enables batch processing', 'Special tokens have semantic roles in models', 'Vocab size affects embedding matrix size', 'Extend vocab for domain-specific tokens'],
        }),
      ], [ex('ex-nlp-1', 'Lowercase and strip punctuation from "Hello, NLP!".', 'import re\nt = "Hello, NLP!".lower()\nprint(re.sub(r"[^a-z0-9\\s]", "", t))', 'easy'), ex('ex-nlp-2', 'Split "machine learning is fun" into words.', 'print("machine learning is fun".split())', 'easy')]),
      topic('nlp-embeddings', 'Word Embeddings (Word2Vec, GloVe)', 'Dense vector representations capturing semantic meaning.', 'beginner', [
        sec('word2vec', 'Word2Vec', 'Skip-gram: predict context from word. CBOW: predict word from context. Similar words have similar vectors.', {
          keyPoints: ['Distributional hypothesis: context defines meaning', 'Skip-gram better for rare words', 'Negative sampling speeds training', 'king - man + woman ≈ queen classic example'],
        }),
        sec('glove', 'GloVe', 'Global Vectors: factorizes co-occurrence matrix. Combines global statistics with local context methods.', {
          keyPoints: ['GloVe uses global co-occurrence counts', 'Often comparable to Word2Vec quality', 'Pretrained GloVe vectors widely available', 'Static embeddings — one vector per word regardless of context'],
        }),
        sec('nn-embed', 'nn.Embedding Layer', 'torch.nn.Embedding(vocab_size, embed_dim). Lookup table learned during training. Padding index for [PAD].', {
          example: 'import torch\nimport torch.nn as nn\n\nembed = nn.Embedding(1000, 128, padding_idx=0)\ninput_ids = torch.tensor([[1, 5, 3], [2, 0, 0]])\nprint(embed(input_ids).shape)',
          output: 'torch.Size([2, 3, 128])',
          keyPoints: ['Embedding layer is lookup table of vectors', 'Random init then learned via backprop', 'Pretrained embeddings can initialize layer', 'embed_dim typically 100-768'],
        }),
        sec('contextual', 'Contextual Embeddings', 'ELMo, BERT produce different vectors per context. "bank" (river) vs "bank" (financial) get different embeddings.', {
          keyPoints: ['Static embeddings one vector per word type', 'Contextual embeddings depend on sentence', 'BERT embeddings revolutionized NLP', 'Modern NLP uses contextual embeddings exclusively'],
        }),
      ], [ex('ex-emb-1', 'Create Embedding(100, 32) and embed index [1, 5, 3].', 'import torch\nimport torch.nn as nn\ne = nn.Embedding(100, 32)\nprint(e(torch.tensor([1, 5, 3])).shape)', 'easy'), ex('ex-emb-2', 'Explain static vs contextual embeddings in one line.', 'print("Static: one vector per word; Contextual: vector depends on surrounding text")', 'easy')]),
      topic('nlp-rnn', 'RNNs & LSTMs', 'Recurrent networks for sequential data processing.', 'beginner', [
        sec('rnn', 'Vanilla RNN', 'Hidden state h_t = tanh(W_h h_{t-1} + W_x x_t). Processes sequences step by step. Vanishing gradient limits long sequences.', {
          example: 'import torch\nimport torch.nn as nn\n\nrnn = nn.RNN(input_size=10, hidden_size=20, batch_first=True)\nx = torch.randn(4, 15, 10)  # batch, seq_len, features\nout, h_n = rnn(x)\nprint(out.shape, h_n.shape)',
          output: 'torch.Size([4, 15, 20]) torch.Size([1, 4, 20])',
          keyPoints: ['batch_first=True for intuitive dimensions', 'out contains all hidden states', 'h_n is final hidden state', 'Vanilla RNN rarely used — LSTM/GRU preferred'],
        }),
        sec('lstm', 'LSTM', 'Long Short-Term Memory: cell state + gates (forget, input, output). Solves vanishing gradient for longer sequences.', {
          example: 'import torch\nimport torch.nn as nn\n\nlstm = nn.LSTM(input_size=10, hidden_size=32, num_layers=2, batch_first=True, dropout=0.2)\nx = torch.randn(4, 20, 10)\nout, (h, c) = lstm(x)\nprint(out.shape)',
          output: 'torch.Size([4, 20, 32])',
          keyPoints: ['Cell state carries long-term memory', 'Gates control information flow', 'num_layers stacks LSTM layers', 'dropout between LSTM layers when num_layers > 1'],
        }),
        sec('gru', 'GRU', 'Gated Recurrent Unit: simplified LSTM with 2 gates. Fewer parameters, often comparable performance.', {
          keyPoints: ['GRU merges cell and hidden state', 'Fewer parameters than LSTM', 'Often preferred when compute limited', 'Try both — dataset dependent performance'],
        }),
        sec('bidirectional', 'Bidirectional RNNs', 'Process sequence forward and backward. Concatenate outputs. Captures past and future context.', {
          example: 'import torch.nn as nn\n\nbilstm = nn.LSTM(10, 16, batch_first=True, bidirectional=True)\nout, _ = bilstm(torch.randn(2, 5, 10))\nprint(out.shape)  # hidden dim doubled',
          output: 'torch.Size([2, 5, 32])',
          keyPoints: ['Output dimension doubles with bidirectional', 'Not suitable for autoregressive generation', 'Standard for sequence classification', 'pack_padded_sequence for variable length'],
        }),
      ], [ex('ex-rnn-1', 'Create LSTM input=8, hidden=16, batch_first, print output shape for seq=10.', 'import torch\nimport torch.nn as nn\nout, _ = nn.LSTM(8, 16, batch_first=True)(torch.randn(2, 10, 8))\nprint(out.shape)', 'easy'), ex('ex-rnn-2', 'Bidirectional LSTM hidden=16 doubles output dim to?', 'print(16 * 2)', 'easy')]),
      topic('nlp-seq2seq', 'Seq2Seq & Attention Preview', 'Encoder-decoder architecture for translation and summarization.', 'beginner', [
        sec('seq2seq', 'Encoder-Decoder', 'Encoder RNN compresses input to context vector. Decoder RNN generates output sequence. Bottleneck problem with long sequences.', {
          pseudoCode: 'encoder_hidden = encode(input_sequence)\nFOR each output step t:\n    decoder_hidden, output_t = decode(decoder_hidden, encoder_hidden)',
          keyPoints: ['Context vector bottlenecks information', 'Teacher forcing: feed gold previous token during training', 'BLEU score for translation quality', 'Attention solves bottleneck — see next module'],
        }),
        sec('teacher', 'Teacher Forcing', 'During training, feed ground truth previous token as decoder input. At inference, feed model own prediction.', {
          keyPoints: ['Teacher forcing speeds convergence', 'Exposure bias: train/inference mismatch', 'Scheduled sampling gradually uses model predictions', 'Beam search for better inference decoding'],
        }),
        sec('beam', 'Beam Search Decoding', 'Keep top-k partial sequences at each step. Balance exploration vs greedy decoding. beam_width typically 4-8.', {
          keyPoints: ['Greedy decoding may miss global optimum', 'Beam search explores multiple hypotheses', 'Larger beam improves quality but slower', 'Length normalization prevents short outputs'],
        }),
        sec('apps', 'Seq2Seq Applications', 'Machine translation, text summarization, chatbots, code generation. Mostly replaced by transformers but conceptually important.', {
          keyPoints: ['Transformers dominate seq2seq tasks now', 'Understanding seq2seq helps understand attention', 'Encoder-decoder pattern persists in T5, BART', 'Autoregressive generation core of LLMs'],
        }),
      ], [ex('ex-s2s-1', 'Explain encoder-decoder bottleneck in one sentence.', 'print("Single context vector must encode entire input sequence")', 'easy'), ex('ex-s2s-2', 'Teacher forcing uses ___ tokens during training.', 'print("ground truth")', 'easy')]),
      topic('nlp-ner', 'Named Entity Recognition', 'Token-level sequence labeling for entity extraction.', 'beginner', [
        sec('ner-task', 'NER Task Definition', 'Identify and classify entities: PERSON, ORG, LOC, DATE. BIO tagging: B-PER (begin), I-PER (inside), O (outside).', {
          example: '# BIO tags for "John works at Google"\n# John: B-PER, works: O, at: O, Google: B-ORG\nsentence = ["John", "works", "at", "Google"]\ntags = ["B-PER", "O", "O", "B-ORG"]\nprint(list(zip(sentence, tags)))',
          keyPoints: ['BIO/BIOES tagging schemes standard', 'Token-level classification with sequence context', 'CRF layer enforces valid tag transitions', 'spaCy provides production NER pipelines'],
        }),
        sec('bi-lstm', 'BiLSTM-CRF', 'Classic NER architecture: embeddings → BiLSTM → CRF. CRF learns transition constraints between tags.', {
          keyPoints: ['CRF prevents invalid tag sequences', 'BiLSTM captures context from both directions', 'Superseded by BERT fine-tuning for NER', 'Still useful for low-resource languages'],
        }),
        sec('bert-ner', 'BERT for NER', 'Fine-tune BERT with token classification head. Align subword tokens to labels. State-of-the-art on CoNLL benchmarks.', {
          keyPoints: ['Fine-tune pretrained BERT on labeled NER data', 'Handle subword tokenization alignment', 'HuggingFace token-classification pipeline', 'Few-shot NER with LLM prompting emerging'],
        }),
        sec('applications', 'NER Applications', 'Information extraction, knowledge graphs, document understanding, clinical NLP (entity: drug, disease).', {
          keyPoints: ['Build knowledge graphs from extracted entities', 'PII detection is privacy-focused NER', 'Clinical NER requires domain-specific models', 'Combine NER with relation extraction'],
        }),
      ], [ex('ex-ner-1', 'BIO tag the name in "Alice went home".', 'words = ["Alice", "went", "home"]\ntags = ["B-PER", "O", "O"]\nprint(list(zip(words, tags)))', 'easy'), ex('ex-ner-2', 'List 3 common NER entity types.', 'print(["PERSON", "ORG", "LOC"])', 'easy')]),
    ].map((t) => ({ ...t, track: 'dl' })),
  },
  {
    num: 18, id: 'module-18', fileName: 'module18-transformers', exportName: 'module18Topics',
    name: 'Transformers & Attention', track: 'dl',
    description: 'Self-attention, transformer architecture, BERT, GPT, and positional encoding.',
    topics: [
      topic('dl-attention', 'Self-Attention Mechanism', 'The core innovation enabling modern NLP and beyond.', 'advanced', [
        sec('attention', 'Attention Intuition', 'Attention weighs relevance of each input element when producing output. Query, Key, Value framework from information retrieval.', {
          example: 'import torch\nimport torch.nn.functional as F\n\n# Scaled dot-product attention\nQ = torch.randn(1, 4, 8)  # batch, seq, d_k\nK = torch.randn(1, 4, 8)\nV = torch.randn(1, 4, 8)\nscores = Q @ K.transpose(-2, -1) / (8 ** 0.5)\nweights = F.softmax(scores, dim=-1)\noutput = weights @ V\nprint(output.shape)',
          output: 'torch.Size([1, 4, 8])',
          keyPoints: ['Query: what am I looking for', 'Key: what do I contain', 'Value: what information do I provide', 'Softmax weights sum to 1 over keys'],
        }),
        sec('scaled', 'Scaled Dot-Product Attention', 'Attention(Q,K,V) = softmax(QK^T/√d_k)V. Scaling prevents softmax saturation with large d_k.', {
          pseudoCode: 'scores = Q @ K.T / sqrt(d_k)\nweights = softmax(scores)\noutput = weights @ V',
          keyPoints: ['Scaling by sqrt(d_k) stabilizes gradients', 'QK^T computes pairwise similarity', 'Softmax produces attention weights', 'Output is weighted sum of values'],
        }),
        sec('self-attn', 'Self-Attention', 'In **self-attention**, Q, K, and V all come from the same sequence. Each token builds a query ("what am I looking for?"), compares it against every key ("what does each token offer?"), and aggregates values weighted by those similarities.\n\nThis lets token 5 directly attend to token 100 with one hop—unlike RNNs that need 95 sequential steps. The cost is O(n²) memory and compute in sequence length, which is why long-context models invest heavily in sparse attention, sliding windows, and KV-cache optimization.',
          {
            example: 'import torch\nimport torch.nn.functional as F\n\n# Self-attention: Q=K=V from same sequence\nx = torch.tensor([[1., 0.], [0., 1.], [1., 1.]])  # 3 tokens, dim 2\nscores = x @ x.T / x.shape[-1] ** 0.5\nweights = F.softmax(scores, dim=-1)\nout = weights @ x\nprint(out.shape)',
            output: 'torch.Size([3, 2])',
            keyPoints: ['Self-attention replaces recurrence', 'Parallel computation over sequence', 'O(n²) memory and compute in sequence length', 'Long-range dependencies in constant path length'],
          }),
        sec('multi-head', 'Multi-Head Attention', 'Multiple attention heads in parallel with different learned projections. Concatenate and project output. h heads, d_model/h dimensions each.', {
          example: 'import torch.nn as nn\n\nmha = nn.MultiheadAttention(embed_dim=64, num_heads=8, batch_first=True)\nx = torch.randn(2, 10, 64)\nout, weights = mha(x, x, x)\nprint(out.shape, weights.shape)',
          output: 'torch.Size([2, 10, 64]) torch.Size([2, 8, 10, 10])',
          keyPoints: ['Multiple heads capture different relationship types', 'Concat heads then linear projection', 'num_heads divides embed_dim evenly', 'Attention weights interpretable per head'],
        }),
      ], [ex('ex-attn-1', 'Compute softmax attention weights for scores [1, 2, 3].', 'import torch\nimport torch.nn.functional as F\nprint(F.softmax(torch.tensor([1.,2.,3.]), dim=0).round(decimals=3))', 'easy'), ex('ex-attn-2', 'Scaled dot-product: Q·K/sqrt(d) with Q=K=2, d=4.', 'import math\nprint(2*2 / math.sqrt(4))', 'easy')]),
      topic('dl-transformer', 'Transformer Architecture', 'The complete encoder-decoder architecture from "Attention Is All You Need".', 'advanced', [
        sec('encoder', 'Transformer Encoder', 'Stack of identical layers: Multi-Head Self-Attention → Add&Norm → FFN → Add&Norm. FFN: Linear → ReLU → Linear.', {
          pseudoCode: 'FOR each encoder layer:\n    x = LayerNorm(x + MultiHeadSelfAttention(x))\n    x = LayerNorm(x + FeedForward(x))',
          keyPoints: ['Pre-norm vs post-norm variants exist', 'FFN expands then contracts dimensions', 'Residual connections around each sublayer', 'Stack N layers (6 in original paper)'],
        }),
        sec('decoder', 'Transformer Decoder', 'Masked self-attention (causal) → cross-attention to encoder → FFN. Mask prevents attending to future tokens.', {
          keyPoints: ['Causal mask for autoregressive generation', 'Cross-attention connects encoder to decoder', 'Decoder self-attention is masked', 'Encoder-only models (BERT) skip decoder'],
        }),
        sec('ffn', 'Feed-Forward Network', 'FFN(x) = max(0, xW₁+b₁)W₂+b₂. Applied position-wise. Typically 4× expansion: d_model → 4·d_model → d_model.', {
          keyPoints: ['Same FFN applied to each position independently', 'Majority of transformer parameters in FFN', 'GELU activation in modern transformers', 'MoE replaces FFN with mixture of experts at scale'],
        }),
        sec('layer-norm', 'Layer Normalization', 'Normalizes across features per token. Pre-norm (before sublayer) more stable for deep transformers.', {
          keyPoints: ['LayerNorm not BatchNorm in transformers', 'Normalizes last dimension (features)', 'Pre-norm enables deeper networks', 'RMSNorm simpler alternative used in LLaMA'],
        }),
      ], [ex('ex-tr-1', 'Apply LayerNorm to a 2x4 tensor and print mean/std of first row.', 'import torch\nimport torch.nn as nn\nx = torch.randn(2, 4)\ny = nn.LayerNorm(4)(x)\nprint(round(y[0].mean().item(), 4), round(y[0].std(unbiased=False).item(), 4))', 'easy'), ex('ex-tr-2', 'Build causal mask: upper triangle True for seq_len=4.', 'import torch\nmask = torch.triu(torch.ones(4, 4), diagonal=1).bool()\nprint(mask.int().tolist())', 'medium')]),
      topic('dl-positional', 'Positional Encoding', 'Inject sequence order information since attention is permutation-invariant.', 'advanced', [
        sec('sinusoidal', 'Sinusoidal Positional Encoding', 'PE(pos,2i) = sin(pos/10000^(2i/d)). PE(pos,2i+1) = cos(...). Fixed, not learned. Generalizes to unseen lengths.', {
          example: 'import torch\nimport math\n\ndef sinusoidal_pe(seq_len, d_model):\n    pe = torch.zeros(seq_len, d_model)\n    position = torch.arange(seq_len).unsqueeze(1).float()\n    div_term = torch.exp(torch.arange(0, d_model, 2).float() * (-math.log(10000.0) / d_model))\n    pe[:, 0::2] = torch.sin(position * div_term)\n    pe[:, 1::2] = torch.cos(position * div_term)\n    return pe\n\nprint(sinusoidal_pe(4, 8).shape)',
          output: 'torch.Size([4, 8])',
          keyPoints: ['Sinusoidal encoding from original transformer paper', 'Each dimension different wavelength', 'Added to input embeddings', 'Can extrapolate beyond training length somewhat'],
        }),
        sec('learned', 'Learned Positional Embeddings', 'nn.Embedding(max_seq_len, d_model). GPT uses learned positions. Limited to max_seq_len seen during training.', {
          keyPoints: ['Learned positions standard in GPT models', 'Cannot exceed max position embeddings', 'Rotary (RoPE) and ALiBi extend context', 'Position embeddings added to token embeddings'],
        }),
        sec('rope', 'Rotary Position Embedding (RoPE)', 'Rotates query and key vectors by position-dependent angle. Relative position encoding. Used in LLaMA, Mistral, GPT-NeoX.', {
          keyPoints: ['RoPE encodes relative not absolute position', 'Better length extrapolation than learned', 'Standard in modern open-source LLMs', 'Applied to Q and K before attention'],
        }),
        sec('alibi', 'ALiBi & Relative Positions', 'Attention with Linear Biases: add linear penalty based on distance. No explicit position embeddings needed.', {
          keyPoints: ['ALiBi simple and effective', 'Strong length extrapolation', 'Relative position bias in attention scores', 'Multiple approaches coexist in modern models'],
        }),
      ], [ex('ex-pe-1', 'Why do transformers need positional encoding?', 'print("Self-attention is permutation-invariant — order must be injected")', 'easy'), ex('ex-pe-2', 'Create learned pos embedding for seq=8, dim=16.', 'import torch.nn as nn\nprint(nn.Embedding(8, 16)(torch.arange(8)).shape)', 'easy')]),
      topic('dl-bert', 'BERT & Encoder Models', 'Bidirectional encoder representations from transformers.', 'advanced', [
        sec('bert', 'BERT Architecture', 'Encoder-only transformer. Pre-trained with MLM (Masked Language Model) and NSP. Fine-tune for classification, NER, QA.', {
          example: 'from transformers import BertTokenizer, BertModel\n\ntokenizer = BertTokenizer.from_pretrained("bert-base-uncased")\nmodel = BertModel.from_pretrained("bert-base-uncased")\ninputs = tokenizer("Hello transformers", return_tensors="pt")\noutputs = model(**inputs)\nprint(outputs.last_hidden_state.shape)',
          keyPoints: ['[CLS] token representation for classification', '[MASK] token for MLM pretraining', 'Bidirectional context — sees left and right', 'Fine-tune with task-specific head on top'],
        }),
        sec('mlm', 'Masked Language Modeling', 'Randomly mask 15% of tokens, predict masked tokens. Learns deep bidirectional representations.', {
          keyPoints: ['80% replace with [MASK], 10% random, 10% unchanged', 'Forces model to understand context', 'MLM objective is denoising autoencoder', 'RoBERTa improves BERT training recipe'],
        }),
        sec('fine-tune', 'Fine-Tuning BERT', 'Add classification head on [CLS]. Train with small LR (2e-5 to 5e-5). Few epochs often sufficient.', {
          example: 'from transformers import BertForSequenceClassification\n\nmodel = BertForSequenceClassification.from_pretrained("bert-base-uncased", num_labels=2)\nprint(model.classifier)', 
          keyPoints: ['Use AdamW optimizer with weight decay', 'Small learning rate critical for fine-tuning', 'Freeze early layers for very small datasets', 'HuggingFace Trainer simplifies fine-tuning'],
        }),
        sec('encoder-models', 'Modern Encoder Models', 'RoBERTa, DeBERTa, ELECTRA, DistilBERT. Encoder models for understanding tasks, not generation.', {
          keyPoints: ['RoBERTa: optimized BERT training', 'DeBERTa: disentangled attention', 'DistilBERT: 40% smaller, 97% performance', 'Encoder models for classification and retrieval'],
        }),
      ], [ex('ex-bert-1', 'Tokenize text and print input_ids length for BERT.', 'from transformers import BertTokenizer\ntok = BertTokenizer.from_pretrained("bert-base-uncased")\nids = tok("Hello transformers", return_tensors="pt")["input_ids"]\nprint(ids.shape[1])', 'medium'), ex('ex-bert-2', 'Compute MLM mask rate: 15% of 20 tokens.', 'n_tokens = 20\nn_masked = int(0.15 * n_tokens)\nprint(n_masked)', 'easy')]),
      topic('dl-gpt', 'GPT & Decoder Models', 'Autoregressive language models for text generation.', 'advanced', [
        sec('gpt', 'GPT Architecture', 'Decoder-only transformer with causal masking. Predict next token autoregressively. Pre-train on large text corpus.', {
          example: 'from transformers import GPT2Tokenizer, GPT2LMHeadModel\n\ntokenizer = GPT2Tokenizer.from_pretrained("gpt2")\nmodel = GPT2LMHeadModel.from_pretrained("gpt2")\ninputs = tokenizer("The future of AI is", return_tensors="pt")\noutputs = model.generate(**inputs, max_new_tokens=10)\nprint(tokenizer.decode(outputs[0], skip_special_tokens=True)[:50])',
          keyPoints: ['Causal/autoregressive: predict P(x_t | x_<t)', 'Decoder-only for generation tasks', 'Scaling laws: bigger = better performance', 'GPT-2, GPT-3, GPT-4 evolution'],
        }),
        sec('generation', 'Text Generation Strategies', 'Greedy, beam search, top-k sampling, nucleus (top-p) sampling, temperature scaling. Control randomness vs quality.', {
          keyPoints: ['Temperature < 1 sharpens, > 1 flattens distribution', 'top-p (nucleus): sample from smallest set with cumulative prob p', 'top-k: sample from k most likely tokens', 'Repetition penalty reduces loops'],
        }),
        sec('causal', 'Causal Language Modeling', 'Train to predict next token. Loss on all positions simultaneously with causal mask. Foundation of all LLM pretraining.', {
          keyPoints: ['CLM loss computed on all token positions', 'Causal mask prevents cheating (seeing future)', 'Cross-entropy loss on vocabulary', 'Trillions of tokens for frontier models'],
        }),
        sec('scaling', 'Scaling Laws', 'Performance scales predictably with compute, data, and parameters. Chinchilla: optimal tokens ≈ 20× parameters.', {
          keyPoints: ['Kaplan scaling laws (OpenAI 2020)', 'Chinchilla optimal compute allocation', 'Emergent abilities at scale debated', 'Efficiency improvements (MoE, quantization) extend scaling'],
        }),
      ], [ex('ex-gpt-1', 'Apply temperature scaling: logits [1,2,3] with T=2.', 'import torch\nimport torch.nn.functional as F\nlogits = torch.tensor([1., 2., 3.])\nprint(F.softmax(logits / 2, dim=0).round(decimals=3).tolist())', 'easy'), ex('ex-gpt-2', 'GPT2 tokenizer: encode "AI" and print token count.', 'from transformers import GPT2Tokenizer\ntok = GPT2Tokenizer.from_pretrained("gpt2")\nprint(len(tok.encode("AI")))', 'medium')]),
    ].map((t) => ({ ...t, track: 'dl' })),
  },
  {
    num: 19, id: 'module-19', fileName: 'module19-llm-genai', exportName: 'module19Topics',
    name: 'LLMs, GenAI & Prompt Engineering', track: 'ai',
    description: 'Large language models, prompting, RAG, fine-tuning, and AI agents.',
    topics: [
      topic('ai-llm', 'Large Language Models Overview', 'Architecture, capabilities, and landscape of modern LLMs.', 'advanced', [
        sec('landscape', 'LLM Landscape', 'Large Language Models (LLMs) are neural networks trained on vast text corpora to predict the next token. They exhibit emergent capabilities — reasoning, coding, translation — at sufficient scale.\n\n**Closed-source frontier models:** GPT-4 (OpenAI), Claude (Anthropic), Gemini (Google). Accessed via API; weights not public.\n\n**Open-weight models:** LLaMA (Meta), Mistral, Qwen, Phi — enable local deployment, fine-tuning, and research.\n\n**Multimodal LLMs:** GPT-4V, Gemini process images alongside text. The boundary between NLP and computer vision is dissolving.\n\nContext windows have grown from 2K tokens (early GPT) to 128K–1M tokens, enabling entire codebases or books as input.', {
          keyPoints: ['Frontier models from OpenAI, Anthropic, Google', 'Open weights: LLaMA, Mistral, Qwen enable local deployment', 'Multimodal: GPT-4V, Gemini process images too', 'Context windows growing: 128K-1M tokens'],
        }),
        sec('capabilities', 'Capabilities & Limitations', '**Strengths:** Summarization, translation, code generation, question answering, creative writing, structured data extraction. LLMs compress patterns from training data into useful general-purpose behavior.\n\n**Weaknesses:** Factual accuracy without retrieval (hallucination), reliable arithmetic without tools, long-horizon planning, real-time knowledge. They predict plausible text, not verified truth.\n\n**Mitigations:** RAG grounds responses in documents; tool use (calculator, search) extends capabilities; chain-of-thought prompting improves reasoning; human-in-the-loop for high-stakes decisions.', {
          keyPoints: ['LLMs predict likely text not verified facts', 'Hallucination: confident but incorrect outputs', 'Tool use and RAG mitigate knowledge gaps', 'Reasoning improves with chain-of-thought'],
        }),
        sec('tokens', 'Token Economics', 'Pricing by input/output tokens. Context window limits. Tokenization affects cost and effective context usage.', {
          example: '# Rough token estimate: 1 token ≈ 4 characters in English\n# "Hello world" ≈ 2 tokens\n# GPT-4 pricing varies by model tier\ntext = "Machine learning is transforming industries"\nprint(f"Approx tokens: {len(text) // 4}")',
          output: 'Approx tokens: 10',
          keyPoints: ['Tokens not words — subword units', 'Input + output tokens both billed', 'Longer context = higher cost and latency', 'Count tokens before API calls'],
        }),
        sec('eval', 'LLM Evaluation', 'MMLU, HumanEval, MT-Bench benchmarks. Custom eval sets for domain tasks. LLM-as-judge for subjective quality.', {
          keyPoints: ['No single benchmark captures all capabilities', 'HumanEval for code generation quality', 'Build domain-specific eval sets', 'Automated eval with stronger model as judge'],
        }),
      ], [ex('ex-llm-1', 'Define hallucination in LLMs in one sentence.', 'print("Model generates plausible but factually incorrect information")', 'easy'), ex('ex-llm-2', 'Estimate tokens in 40-char string.', 'print(40 // 4)', 'easy')], { estimatedMinutes: 30 }),
      topic('ai-prompt', 'Prompt Engineering', 'Design effective prompts to maximize LLM output quality.', 'advanced', [
        sec('basics', 'Prompt Structure', 'System message (role/behavior) + user message (task) + optional examples. Clear, specific instructions outperform vague requests.', {
          example: 'prompt = """System: You are a Python tutor. Explain concepts simply.\n\nUser: Explain list comprehensions with an example.\n\nAssistant:"""\nprint(len(prompt))',
          keyPoints: ['System prompt sets behavior and constraints', 'Be specific about format, length, tone', 'Include examples for complex formats (few-shot)', 'Iterate and refine prompts empirically'],
        }),
        sec('cot', 'Chain-of-Thought (CoT)', 'Add "Let\'s think step by step" or demonstrate reasoning steps. Dramatically improves math and logic performance.', {
          example: 'prompt = "Q: A store has 23 apples. They buy 6 boxes of 12 apples. How many now?\\nA: Let\'s think step by step.\\n23 + (6 * 12) = 23 + 72 = 95\\n\\nQ: ..."\nprint("CoT improves reasoning")',
          output: 'CoT improves reasoning',
          keyPoints: ['Zero-shot CoT: add "think step by step"', 'Few-shot CoT: provide reasoning examples', 'Self-consistency: sample multiple chains, majority vote', 'Tree-of-thought for complex planning'],
        }),
        sec('few-shot', 'Few-Shot Learning', 'Provide 2-5 input-output examples in prompt. Model learns pattern without weight updates. Example selection matters.', {
          keyPoints: ['Examples should be diverse and representative', 'Order of examples affects performance', 'More examples help up to a point', 'Dynamic example retrieval from database'],
        }),
        sec('advanced-prompt', 'Advanced Techniques', 'ReAct (reasoning + acting), structured output (JSON mode), role prompting, prompt chaining, constitutional AI principles.', {
          keyPoints: ['JSON mode ensures parseable output', 'Prompt chaining breaks complex tasks into steps', 'ReAct interleaves reasoning and tool calls', 'Test prompts systematically with eval sets'],
        }),
      ], [ex('ex-prompt-1', 'Write a system prompt for a code review assistant.', 'system = "You are an expert code reviewer. Identify bugs, suggest improvements, and explain clearly."\nprint(system[:50])', 'easy'), ex('ex-prompt-2', 'Add CoT trigger phrase to math question.', 'q = "Roger has 5 tennis balls. He buys 2 cans of 3. How many?\\nLet\'s think step by step."\nprint("step by step" in q)', 'easy')]),
      topic('ai-rag', 'RAG (Retrieval Augmented Generation)', 'Ground LLM responses in external knowledge via retrieval.', 'advanced', [
        sec('rag-arch', 'RAG Architecture', 'Query → retrieve relevant documents from vector DB → augment prompt with context → LLM generates grounded answer.', {
          pseudoCode: 'query = user_question\nchunks = vector_db.search(embed(query), top_k=5)\ncontext = join(chunks)\nprompt = f"Context: {context}\\nQuestion: {query}"\nanswer = llm.generate(prompt)',
          keyPoints: ['RAG reduces hallucination on domain knowledge', 'Retrieval quality determines answer quality', 'Chunk size and overlap affect retrieval', 'Hybrid search: dense + keyword (BM25)'],
        }),
        sec('embeddings-rag', 'Embeddings for Retrieval', 'Embed documents and queries with embedding model (OpenAI, sentence-transformers). Store in vector DB (Pinecone, Chroma, FAISS).', {
          example: 'from sentence_transformers import SentenceTransformer\n\nmodel = SentenceTransformer("all-MiniLM-L6-v2")\ndocs = ["Python is a programming language", "Machine learning uses data"]\nembeddings = model.encode(docs)\nprint(embeddings.shape)',
          keyPoints: ['Choose embedding model matching domain', 'Chunk documents 256-512 tokens typically', 'Metadata filtering narrows search space', 'Re-rank retrieved results with cross-encoder'],
        }),
        sec('chunking', 'Document Chunking', 'Split documents into retrievable chunks. Recursive character splitting, semantic chunking. Overlap preserves context at boundaries.', {
          keyPoints: ['Too small chunks lose context', 'Too large chunks dilute relevance', '10-20% overlap between chunks common', 'Parent-child chunking for hierarchical retrieval'],
        }),
        sec('eval-rag', 'Evaluating RAG Systems', 'Retrieval metrics: recall@k, MRR. Generation metrics: faithfulness, relevance, answer correctness. RAGAS framework.', {
          keyPoints: ['Evaluate retrieval and generation separately', 'Faithfulness: answer grounded in retrieved context', 'RAGAS automated RAG evaluation', 'Human eval for production quality assurance'],
        }),
      ], [ex('ex-rag-1', 'List RAG pipeline steps in order.', 'steps = ["embed query", "retrieve chunks", "augment prompt", "generate answer"]\nprint(steps)', 'easy'), ex('ex-rag-2', 'Explain why RAG reduces hallucinations.', 'print("Grounds answers in retrieved documents rather than parametric memory alone")', 'easy')]),
      topic('ai-finetune', 'Fine-tuning & LoRA', 'Adapt pretrained LLMs to specific tasks and domains.', 'advanced', [
        sec('finetune', 'Full Fine-Tuning', 'Update all model weights on domain dataset. Expensive — requires significant GPU memory. Best for large domain shift.', {
          keyPoints: ['Requires labeled instruction-response pairs', 'Risk of catastrophic forgetting', 'Multi-GPU needed for 7B+ models', 'Learning rate much smaller than pretraining'],
        }),
        sec('lora', 'LoRA (Low-Rank Adaptation)', 'Freeze base model, add low-rank decomposition matrices to attention layers. Trains ~0.1% of parameters. PEFT standard.', {
          example: '# LoRA concept: W\' = W + BA where B is d×r, A is r×d, r << d\n# r=8 or r=16 typical rank\n# Only train A and B matrices\nprint("LoRA: W + B@A with low rank r")',
          output: 'LoRA: W + B@A with low rank r',
          keyPoints: ['LoRA rank r controls capacity vs efficiency', 'Target q_proj, v_proj in attention layers', 'QLoRA: 4-bit quantized base + LoRA adapters', 'Merge adapters into base for deployment'],
        }),
        sec('instruction', 'Instruction Tuning', 'Fine-tune on (instruction, response) pairs. Alpaca, Dolly datasets. Aligns model to follow user instructions.', {
          keyPoints: ['Instruction format: ### Instruction / ### Response', 'Quality over quantity for instruction data', 'Covers diverse task types', 'Foundation for chat model behavior'],
        }),
        sec('rlhf', 'RLHF & DPO', 'Reinforcement Learning from Human Feedback: train reward model on preferences, optimize with PPO. DPO simpler alternative without reward model.', {
          keyPoints: ['RLHF makes models helpful and harmless', 'Reward model trained on human preference comparisons', 'PPO fine-tunes against reward model', 'DPO direct preference optimization — simpler pipeline'],
        }),
      ], [ex('ex-ft-1', 'LoRA updates W\' = W + ___', 'print("B @ A (low-rank matrices)")', 'easy'), ex('ex-ft-2', 'Name PEFT method that quantizes base to 4-bit.', 'print("QLoRA")', 'easy')]),
      topic('ai-agents', 'Agents & Tool Use', 'LLM agents that reason, plan, and interact with external tools.', 'expert', [
        sec('agents', 'LLM Agent Architecture', 'Agent loop: observe → think → act (tool call) → observe result → repeat. LangChain, LlamaIndex frameworks.', {
          pseudoCode: 'WHILE not done:\n    thought = llm.reason(observation, goal)\n    IF thought.requires_action:\n        result = execute_tool(thought.action, thought.args)\n        observation = result\n    ELSE:\n        return thought.answer',
          keyPoints: ['ReAct pattern: Reason + Act interleaved', 'Tool definitions in prompt or function calling API', 'Memory: short-term (conversation) + long-term (vector store)', 'Max iterations prevent infinite loops'],
        }),
        sec('tools', 'Function Calling / Tool Use', 'Define tools with name, description, parameters (JSON schema). Model selects tool and arguments. OpenAI function calling, Anthropic tool use.', {
          example: 'tools = [{\n    "name": "search",\n    "description": "Search the web for information",\n    "parameters": {"query": {"type": "string"}}\n}]\nprint(tools[0]["name"])',
          output: 'search',
          keyPoints: ['Clear tool descriptions critical for selection', 'JSON schema defines valid parameters', 'Execute tool and return result to model', 'Multiple tools enable complex workflows'],
        }),
        sec('frameworks', 'Agent Frameworks', 'LangChain: chains, agents, memory. LlamaIndex: data ingestion and RAG. AutoGen: multi-agent conversations. CrewAI: role-based agents.', {
          keyPoints: ['LangChain most popular orchestration framework', 'LlamaIndex optimized for data-connected apps', 'Multi-agent: specialized agents collaborate', 'Evaluate agent reliability before production'],
        }),
        sec('safety', 'Agent Safety', 'Sandbox tool execution. Validate tool inputs. Limit permissions. Human-in-the-loop for high-stakes actions.', {
          keyPoints: ['Never give agents unrestricted system access', 'Validate and sanitize tool inputs/outputs', 'Human approval for irreversible actions', 'Monitor agent trajectories for unexpected behavior'],
        }),
      ], [ex('ex-agent-1', 'ReAct interleaves reasoning and ___.', 'print("acting/tool use")', 'easy'), ex('ex-agent-2', 'Define a tool schema with name "calculator" and param "expression".', 'tool = {"name": "calculator", "parameters": {"expression": {"type": "string"}}}\nprint(tool["name"])', 'easy')], { estimatedMinutes: 35 }),
    ].map((t) => ({ ...t, track: 'ai' })),
  },
  {
    num: 20, id: 'module-20', fileName: 'module20-mlops-ethics', exportName: 'module20Topics',
    name: 'MLOps, Deployment & AI Ethics', track: 'ai',
    description: 'Model serving, Docker, monitoring, drift detection, bias, fairness, and responsible AI.',
    topics: [
      topic('ai-serving', 'Model Serialization & Serving', 'Save, load, and serve ML models in production.', 'advanced', [
        sec('serialize', 'Model Serialization', 'joblib/pickle for sklearn. torch.save for PyTorch. ONNX for cross-framework. SavedModel for TensorFlow.', {
          example: 'import joblib\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.datasets import load_iris\n\nclf = RandomForestClassifier(random_state=42).fit(*load_iris(return_X_y=True))\njoblib.dump(clf, "model.joblib")\nloaded = joblib.load("model.joblib")\nprint(loaded.score(*load_iris(return_X_y=True)))',
          keyPoints: ['joblib preferred over pickle for sklearn', 'Save state_dict not entire PyTorch model', 'Version models with metadata (data, metrics, params)', 'Never unpickle untrusted files — security risk'],
        }),
        sec('fastapi', 'FastAPI Model Serving', 'REST API for model inference. Pydantic for input validation. Async support for high throughput.', {
          example: 'from fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass PredictRequest(BaseModel):\n    features: list[float]\n\n@app.post("/predict")\ndef predict(req: PredictRequest):\n    return {"prediction": sum(req.features) / len(req.features)}',
          keyPoints: ['FastAPI auto-generates OpenAPI docs', 'Pydantic validates request schemas', 'Load model once at startup not per request', 'Return probabilities not just class labels'],
        }),
        sec('onnx', 'ONNX Runtime', 'Export to ONNX for framework-agnostic deployment. Optimized inference on CPU/GPU. torch.onnx.export, onnxruntime.', {
          keyPoints: ['ONNX enables model portability', 'Graph optimizations in ONNX Runtime', 'Quantized ONNX models for edge deployment', 'Check operator compatibility before export'],
        }),
        sec('batch-realtime', 'Batch vs Real-Time Inference', 'Batch: process large datasets offline (Spark, scheduled jobs). Real-time: low-latency API (<100ms). Streaming: continuous processing.', {
          keyPoints: ['Batch for bulk predictions overnight', 'Real-time for user-facing applications', 'Feature store ensures train-serve consistency', 'Caching frequent predictions reduces load'],
        }),
      ], [ex('ex-serve-1', 'Save sklearn model with joblib to "m.joblib".', 'import joblib\nfrom sklearn.linear_model import LogisticRegression\njoblib.dump(LogisticRegression().fit([[0],[1]], [0,1]), "m.joblib")\nprint("saved")', 'medium'), ex('ex-serve-2', 'FastAPI endpoint returns sum of features list.', 'def predict(features):\n    return {"result": sum(features)}\nprint(predict([1,2,3]))', 'easy')]),
      topic('ai-docker', 'Docker & Cloud Deployment', 'Containerize and deploy ML applications to cloud.', 'advanced', [
        sec('docker', 'Docker Basics for ML', 'Dockerfile: base image, COPY requirements, install deps, COPY code, CMD. Reproducible environments across machines.', {
          example: '# Dockerfile example:\ndockerfile = """\nFROM python:3.11-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\nCOPY . .\nCMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]\n"""\nprint(dockerfile.strip().split("\\n")[0])',
          output: 'FROM python:3.11-slim',
          keyPoints: ['Pin base image version for reproducibility', 'Multi-stage builds reduce image size', '.dockerignore excludes unnecessary files', 'Non-root user for security'],
        }),
        sec('compose', 'Docker Compose', 'Multi-container apps: API + Redis + PostgreSQL. docker-compose.yml defines services, networks, volumes.', {
          keyPoints: ['Compose for local development stacks', 'Define environment variables in compose file', 'Health checks ensure service readiness', 'Production: Kubernetes not Compose'],
        }),
        sec('cloud', 'Cloud ML Platforms', 'AWS SageMaker, GCP Vertex AI, Azure ML. Managed training, deployment, monitoring. Serverless: Lambda + container images.', {
          keyPoints: ['Managed platforms reduce ops burden', 'SageMaker endpoints for real-time inference', 'Vertex AI unified Google Cloud ML platform', 'Cost optimization: spot instances for training'],
        }),
        sec('cicd', 'CI/CD for ML', 'GitHub Actions, Jenkins pipelines. Test → train → evaluate → deploy if metrics pass. MLflow tracks experiments.', {
          keyPoints: ['Automated testing of data schemas and model metrics', 'Gate deployment on validation metric thresholds', 'MLflow or W&B for experiment tracking', 'Model registry manages production model versions'],
        }),
      ], [ex('ex-docker-1', 'Dockerfile instruction to set working directory.', 'print("WORKDIR /app")', 'easy'), ex('ex-docker-2', 'Name two cloud ML platforms.', 'print(["AWS SageMaker", "GCP Vertex AI"])', 'easy')]),
      topic('ai-monitoring', 'Monitoring & Drift Detection', 'Track model performance and data quality in production.', 'advanced', [
        sec('monitoring', 'Model Monitoring', 'Track prediction latency, throughput, error rates. Log inputs and outputs. Alert on anomalies.', {
          keyPoints: ['Monitor latency p50, p95, p99 percentiles', 'Log predictions for debugging and retraining', 'Alert on error rate spikes', 'Prometheus + Grafana common stack'],
        }),
        sec('drift', 'Data Drift & Concept Drift', 'Data drift: input distribution changes. Concept drift: relationship X→Y changes. Both degrade model performance over time.', {
          example: 'import numpy as np\nfrom scipy import stats\n\n# KS test detects distribution shift\nref = np.random.normal(0, 1, 1000)\ncurrent = np.random.normal(0.5, 1, 200)  # shifted mean\nstat, pvalue = stats.ks_2samp(ref, current)\nprint(round(pvalue, 6))',
          keyPoints: ['KS test for numerical feature drift detection', 'PSI (Population Stability Index) common in finance', 'Concept drift harder to detect without labels', 'Scheduled retraining addresses drift'],
        }),
        sec('evidently', 'Evidently AI & Tools', 'Evidently generates drift reports. Great Expectations validates data. WhyLabs for AI observability.', {
          keyPoints: ['Evidently: data drift and model performance reports', 'Great Expectations: data validation suites', 'Compare production vs reference distributions', 'Automated reports in CI/CD pipeline'],
        }),
        sec('retraining', 'Retraining Strategies', 'Scheduled retraining (weekly/monthly). Trigger-based on drift detection. Continuous learning with new labeled data.', {
          keyPoints: ['Define retraining triggers and schedule', 'Champion/challenger model comparison', 'Rollback capability essential', 'Label delay complicates monitoring'],
        }),
      ], [ex('ex-mon-1', 'Data drift means input ___ changed.', 'print("distribution")', 'easy'), ex('ex-mon-2', 'KS test p-value near 0 suggests distributions are ___.', 'print("different")', 'easy')]),
      topic('ai-bias', 'AI Ethics, Bias & Fairness', 'Identify and mitigate bias in ML systems.', 'advanced', [
        sec('bias', 'Types of Bias', 'Historical bias in data. Representation bias from sampling. Measurement bias from proxies. Evaluation bias from benchmarks.', {
          keyPoints: ['Bias often originates in data not algorithm', 'Protected attributes: race, gender, age, disability', 'Proxy variables encode protected attributes indirectly', 'Intersectionality: bias compounds across groups'],
        }),
        sec('fairness', 'Fairness Metrics', 'Demographic parity: equal positive rates across groups. Equalized odds: equal TPR and FPR. Calibration: equal probability meaning across groups.', {
          example: '# Demographic parity: P(ŷ=1|A=0) should equal P(ŷ=1|A=1)\n# where A is protected attribute\ngroup_a_rate = 0.3\ngroup_b_rate = 0.28\nparity_diff = abs(group_a_rate - group_b_rate)\nprint(f"Demographic parity difference: {parity_diff}")',
          output: 'Demographic parity difference: 0.020000000000000018',
          keyPoints: ['Fairness metrics often mutually incompatible', 'Choose metric based on domain and legal requirements', 'fairlearn library implements fairness metrics', 'Disparate impact ratio: 80% rule in US employment law'],
        }),
        sec('mitigation', 'Bias Mitigation', 'Pre-processing: reweight, resample. In-processing: fairness constraints. Post-processing: adjust thresholds per group.', {
          keyPoints: ['Pre-processing modifies training data', 'In-processing adds fairness constraints to loss', 'Post-processing adjusts decision thresholds', 'Transparency about tradeoffs required'],
        }),
        sec('explain-ethics', 'Explainability & Accountability', 'Right to explanation (GDPR). Model cards document intended use and limitations. Impact assessments before deployment.', {
          keyPoints: ['Model cards: intended use, training data, limitations', 'Algorithmic impact assessment for high-risk AI', 'Human oversight for consequential decisions', 'Document known failure modes and biases'],
        }),
      ], [ex('ex-bias-1', 'Demographic parity requires equal ___ rates across groups.', 'print("positive prediction")', 'easy'), ex('ex-bias-2', 'Compute parity difference between rates 0.4 and 0.35.', 'print(abs(0.4 - 0.35))', 'easy')]),
      topic('ai-governance', 'Responsible AI & Governance', 'Organizational frameworks for ethical AI development and deployment.', 'advanced', [
        sec('framework', 'Responsible AI Principles', 'Fairness, transparency, accountability, privacy, safety, reliability. Google, Microsoft, EU AI Act frameworks.', {
          keyPoints: ['Fairness: equitable outcomes across groups', 'Transparency: explainable decisions', 'Accountability: clear ownership and audit trails', 'Privacy: data minimization and consent'],
        }),
        sec('eu-ai-act', 'EU AI Act', 'Risk-based regulation: unacceptable, high-risk, limited, minimal risk. High-risk AI requires conformity assessment, documentation, human oversight.', {
          keyPoints: ['Prohibited: social scoring, manipulative AI', 'High-risk: hiring, credit, medical, law enforcement', 'Requires risk management and data governance', 'Global impact — affects any AI serving EU users'],
        }),
        sec('privacy', 'Privacy-Preserving ML', 'Differential privacy adds noise to protect individuals. Federated learning trains without centralizing data. Data anonymization techniques.', {
          keyPoints: ['Differential privacy mathematical privacy guarantee', 'Federated learning: model travels to data', 'k-anonymity, l-diversity for anonymization', 'PII detection and redaction in training data'],
        }),
        sec('red-team', 'Red Teaming & Safety', 'Adversarial testing of AI systems. Jailbreak attempts, prompt injection, harmful output testing before release.', {
          keyPoints: ['Red team before deploying LLM applications', 'Prompt injection: user overrides system instructions', 'Content filtering for harmful outputs', 'Safety training (RLHF) reduces but does not eliminate risks'],
        }),
      ], [ex('ex-gov-1', 'Name two responsible AI principles.', 'print(["fairness", "transparency"])', 'easy'), ex('ex-gov-2', 'Federated learning trains models without ___ data.', 'print("centralizing")', 'easy')]),
    ].map((t) => ({ ...t, track: 'ai' })),
  },
];

const MODULES = [
  ...BASE_MODULES.slice(0, 5),
  ...MATH_MODULES,
  ...BASE_MODULES.slice(5),
  ...ADDITIONAL_MODULES,
];

// ─── Generator main ──────────────────────────────────────────────────────────

mkdirSync(OUT_DIR, { recursive: true });

let totalTopics = 0;
const catalogModules = [];

for (const mod of MODULES) {
  const filePath = join(OUT_DIR, `${mod.fileName}.ts`);
  writeFileSync(filePath, generateModuleFile(mod), 'utf8');
  totalTopics += mod.topics.length;

  catalogModules.push({
    id: mod.id,
    name: mod.name,
    track: mod.track,
    description: mod.description,
    fileName: mod.fileName,
    exportName: mod.exportName,
    topics: mod.topics.map((t) => buildTopicSummary(t, mod)),
  });

  console.log(`  ✓ ${mod.fileName}.ts (${mod.topics.length} topics)`);
}

const catalogPath = join(OUT_DIR, 'catalog.ts');
writeFileSync(catalogPath, generateCatalogFile(catalogModules), 'utf8');
console.log(`  ✓ catalog.ts (lightweight index)`);

const indexPath = join(OUT_DIR, 'index.ts');
writeFileSync(indexPath, generateIndexFile(), 'utf8');
console.log(`  ✓ index.ts`);

const refsPath = join(__dirname, '..', 'src', 'data', 'references.ts');
const refsContent = `import type { Reference } from '../types';

export const allReferences: Reference[] = ${serializeValue(ALL_REFERENCES, 1)};

export const referencesBySource = allReferences.reduce<Record<string, Reference[]>>((acc, ref) => {
  const key = ref.source;
  if (!acc[key]) acc[key] = [];
  acc[key].push(ref);
  return acc;
}, {});

export const referencesByType = allReferences.reduce<Record<string, Reference[]>>((acc, ref) => {
  const key = ref.type;
  if (!acc[key]) acc[key] = [];
  acc[key].push(ref);
  return acc;
}, {});
`;
writeFileSync(refsPath, refsContent, 'utf8');
console.log(`  ✓ references.ts (${ALL_REFERENCES.length} unique resources)`);

console.log(`\n✅ Generated ${totalTopics} topics across ${MODULES.length} modules`);
console.log(`   Output: ${OUT_DIR}`);
