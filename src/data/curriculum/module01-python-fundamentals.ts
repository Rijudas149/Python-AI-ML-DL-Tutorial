import type { Topic } from '../../types';

export const module01Topics: Topic[] = [
{
      id: `py-vars-types`,
      title: `Variables, Types & Literals`,
      description: `Learn how Python stores data, dynamic typing, and core built-in types.`,
      level: `beginner`,
      track: `python`,
      sections: [
        {
          id: `vars-intro`,
          title: `What Are Variables?`,
          content: `In Python, a **variable** is a name bound to an object in memory. Unlike statically typed languages, Python uses **dynamic typing** — the type is determined at runtime based on the value assigned.

Naming rules:
- Start with a letter or underscore
- Contain letters, digits, underscores
- Case-sensitive (\`age\` ≠ \`Age\`)

Python has several core types:
- \`int\` — whole numbers
- \`float\` — decimal numbers
- \`str\` — text
- \`bool\` — True/False
- \`NoneType\` — absence of value

**Extended exploration — Variables, Types & Literals:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "What Are Variables?" connects to learn how python stores data, dynamic typing, and core built-in types. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `x = 42
pi = 3.14159
name = "Alice"
active = True
nothing = None

print(type(x), type(pi), type(name))`,
          output: `<class 'int'> <class 'float'> <class 'str'>`,
          keyPoints: [
            `Variables are references to objects, not boxes`,
            `Python is dynamically typed`,
            `Use snake_case for variable names`,
            `None represents absence of value`
          ]
        },
        {
          id: `literals`,
          title: `Literals & Type Conversion`,
          content: `**Literals** are fixed values written directly in code. Python supports integer literals (\`42\`), float literals (\`3.14\`), string literals (\`"hello"\`), and boolean literals (\`True\`, \`False\`).

Use built-in functions to convert between types:
- \`int()\`, \`float()\`, \`str()\`, \`bool()\`

Be careful: \`bool("False")\` is \`True\` because non-empty strings are truthy.

**Extended exploration — Variables, Types & Literals:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Literals & Type Conversion" connects to learn how python stores data, dynamic typing, and core built-in types. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `a = int("42")
b = float("3.14")
c = str(100)
d = bool(0)
e = bool("hello")
print(a, b, c, d, e)`,
          output: `42 3.14 100 False True`,
          keyPoints: [
            `Literals represent fixed values in source code`,
            `Type conversion is explicit via built-in functions`,
            `Empty strings and zero are falsy`,
            `Non-empty strings convert to True in bool()`
          ]
        },
        {
          id: `mutability`,
          title: `Mutable vs Immutable Types`,
          content: `Python types fall into two categories:

**Immutable** (cannot change in place): \`int\`, \`float\`, \`str\`, \`tuple\`, \`bool\`, \`frozenset\`. Reassignment creates a new object.

**Mutable** (can change in place): \`list\`, \`dict\`, \`set\`. Operations modify the same object.

Use \`id()\` to inspect object identity.

**Extended exploration — Variables, Types & Literals:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Mutable vs Immutable Types" connects to learn how python stores data, dynamic typing, and core built-in types. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `s = "hello"
s2 = s
s = s + " world"
print(s2)  # original unchanged

lst = [1, 2, 3]
lst2 = lst
lst.append(4)
print(lst2)  # same object modified`,
          output: `hello
[1, 2, 3, 4]`,
          keyPoints: [
            `Strings are immutable — concatenation creates new objects`,
            `Lists are mutable — methods modify in place`,
            `Assignment copies references, not values`,
            `Use id() to verify object identity`
          ]
        },
        {
          id: `type-checking`,
          title: `Type Checking & Best Practices`,
          content: `Use \`type()\` for runtime type checks and \`isinstance()\` for inheritance-aware checks. Prefer \`isinstance(x, int)\` over \`type(x) == int\`.

For production code, use **type hints** (covered later) and tools like \`mypy\` for static analysis.

**Why this matters for Variables, Types & Literals:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
          pseudoCode: `IF isinstance(value, expected_type):
    PROCESS value
ELSE:
    RAISE TypeError`,
          example: `def greet(name: str) -> str:
    if not isinstance(name, str):
        raise TypeError("name must be a string")
    return f"Hello, {name}!"

print(greet("World"))`,
          output: `Hello, World!`,
          keyPoints: [
            `Prefer isinstance() over type() == `,
            `Type hints improve readability and tooling`,
            `Validate inputs at function boundaries`,
            `Dynamic typing does not mean no types`
          ]
        },
        {
          id: `py-vars-types-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Variables, Types & Literals sits in the **python** track of the Data Science Master curriculum. Learn how Python stores data, dynamic typing, and core built-in types.

Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

For py-vars-types, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Variables, Types & Literals
meta = {"topic_id": "py-vars-types", "track": "python", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `py-vars-types python beginner`,
          keyPoints: [
            `Core theory of Variables, Types & Literals ties to the python track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `py-vars-types-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Variables, Types & Literals. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For py-vars-types, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for py-vars-types
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("py-vars-types", "Variables, Types & Literals")
print(ref.topic_id, ref.title.split()[0])`,
          output: `py-vars-types Variables,`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with python ecosystem conventions`
          ]
        },
        {
          id: `py-vars-types-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Variables, Types & Literals often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

When stuck on py-vars-types, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("py-vars-types", "Variables, Types & Literals")
debug_step("section_count", 4)`,
          output: `[py-vars-types] 'Variables, Types & Literals' (str)
[section_count] 4`,
          keyPoints: [
            `Reduce to the smallest failing example`,
            `Log intermediate values with types`,
            `Bisect changes with git or notebook history`,
            `Separate data bugs from logic bugs`,
            `Record seeds, versions, and hardware context`,
            `Fix root cause—not symptoms with silent catches`
          ]
        },
        {
          id: `py-vars-types-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Variables, Types & Literals shows up wherever python skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

Teams shipping features around py-vars-types align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Variables, Types & Literals
skills = ["python", "beginner", "py-vars-types"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: python, beginner, py-vars-types`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Variables, Types & Literals to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-vars-1`,
          question: `Create variables for a product: name (str), price (float), quantity (int). Print total value (price * quantity).`,
          solution: `name = "Laptop"
price = 999.99
quantity = 3
total = price * quantity
print(f"{name}: \${total:.2f}")`,
          difficulty: `easy`,
          hint: `Use f-strings for formatted output.`
        },
        {
          id: `ex-vars-2`,
          question: `Convert the string "3.14" to float, multiply by 2, and print the result as an integer.`,
          solution: `result = int(float("3.14") * 2)
print(result)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 35,
      module: `module-01`,
      references: [
        {
          id: `python-tutorial-intro`,
          title: `Python Tutorial — An Informal Introduction`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/introduction.html`,
          description: `Official introduction to Python variables, numbers, and strings.`
        },
        {
          id: `python-datamodel`,
          title: `Python Data Model`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/reference/datamodel.html`,
          description: `Deep dive into objects, types, and the semantics behind Python values.`
        },
        {
          id: `real-python-variables`,
          title: `Variables in Python`,
          source: `Real Python`,
          type: `documentation`,
          url: `https://realpython.com/python-variables/`,
          description: `Practical guide to naming, assignment, and dynamic typing in Python.`
        },
        {
          id: `cs106a-python`,
          title: `Stanford CS106A — Programming Methodology`,
          source: `Stanford`,
          type: `course`,
          url: `https://cs106a.stanford.edu/`,
          description: `Foundational Stanford course covering Python programming from first principles.`
        }
      ]
    },
{
      id: `py-operators`,
      title: `Operators & Expressions`,
      description: `Arithmetic, comparison, logical, and assignment operators in Python.`,
      level: `beginner`,
      track: `python`,
      sections: [
        {
          id: `arith`,
          title: `Arithmetic Operators`,
          content: `Python supports standard arithmetic:
- \`+\` addition, \`-\` subtraction
- \`*\` multiplication, \`/\` true division (always float)
- \`//\` floor division, \`%\` modulo
- \`**\` exponentiation

Operator precedence follows PEMDAS. Use parentheses for clarity.

**Why this matters for Operators & Expressions:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
          example: `a, b = 17, 5
print(a + b, a - b, a * b)
print(a / b, a // b, a % b, a ** 2)`,
          output: `22 12 85
3.4 3 2 289`,
          keyPoints: [
            `Division always returns float in Python 3`,
            `Floor division truncates toward negative infinity`,
            `Modulo works with negative numbers`,
            `Use ** for powers, not ^`
          ]
        },
        {
          id: `compare`,
          title: `Comparison & Logical Operators`,
          content: `Comparison operators return \`bool\`: \`==\`, \`!=\`, \`<\`, \`>\`, \`<=\`, \`>=\`. Chain comparisons: \`1 < x < 10\`.

Logical: \`and\`, \`or\`, \`not\`. Short-circuit evaluation stops when result is determined.

**Why this matters for Operators & Expressions:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Operators & Expressions:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Comparison & Logical Operators" connects to arithmetic, comparison, logical, and assignment operators in python. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `x = 7
print(3 < x < 10)
print(x > 5 and x < 8)
print(not (x == 7))`,
          output: `True
True
False`,
          keyPoints: [
            `Chained comparisons are idiomatic Python`,
            `and/or use short-circuit evaluation`,
            `Use == for equality, is for identity`,
            `not has lower precedence than comparisons`
          ]
        },
        {
          id: `assign`,
          title: `Assignment & Walrus Operator`,
          content: `Basic assignment: \`x = 5\`. Compound: \`+=\`, \`-=\`, \`*=\`, etc.

The **walrus operator** \`:=\` assigns and returns value in expressions (Python 3.8+).

**Why this matters for Operators & Expressions:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Operators & Expressions:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Assignment & Walrus Operator" connects to arithmetic, comparison, logical, and assignment operators in python. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `data = [1, 2, 3, 4, 5]
if (n := len(data)) > 3:
    print(f"List has {n} elements")`,
          output: `List has 5 elements`,
          keyPoints: [
            `Compound operators modify and reassign`,
            `Walrus operator reduces duplication`,
            `Avoid overusing := — clarity first`,
            `Assignment is a statement, not expression (except :=)`
          ]
        },
        {
          id: `bitwise`,
          title: `Bitwise & Membership Operators`,
          content: `Bitwise: \`&\`, \`|\`, \`^\`, \`~\`, \`<<\`, \`>>\` for integer manipulation.

Membership: \`in\`, \`not in\` test containment in sequences.

Identity: \`is\`, \`is not\` compare object identity (same memory address).

**Why this matters for Operators & Expressions:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Operators & Expressions:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Bitwise & Membership Operators" connects to arithmetic, comparison, logical, and assignment operators in python. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `flags = 0b1010
print(bin(flags | 0b0100))
print(3 in [1, 2, 3])
a = [1, 2]
b = a
print(a is b, a is not [])`,
          output: `0b1110
True
True True`,
          keyPoints: [
            `Use is only for None, True, False, and singleton checks`,
            `in works on any iterable`,
            `Bitwise ops useful for flags and permissions`,
            `Never use is for value comparison`
          ]
        },
        {
          id: `py-operators-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Operators & Expressions sits in the **python** track of the Data Science Master curriculum. Arithmetic, comparison, logical, and assignment operators in Python.

Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

For py-operators, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Operators & Expressions
meta = {"topic_id": "py-operators", "track": "python", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `py-operators python beginner`,
          keyPoints: [
            `Core theory of Operators & Expressions ties to the python track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `py-operators-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Operators & Expressions. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For py-operators, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for py-operators
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("py-operators", "Operators & Expressions")
print(ref.topic_id, ref.title.split()[0])`,
          output: `py-operators Operators`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with python ecosystem conventions`
          ]
        },
        {
          id: `py-operators-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Operators & Expressions often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

When stuck on py-operators, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("py-operators", "Operators & Expressions")
debug_step("section_count", 4)`,
          output: `[py-operators] 'Operators & Expressions' (str)
[section_count] 4`,
          keyPoints: [
            `Reduce to the smallest failing example`,
            `Log intermediate values with types`,
            `Bisect changes with git or notebook history`,
            `Separate data bugs from logic bugs`,
            `Record seeds, versions, and hardware context`,
            `Fix root cause—not symptoms with silent catches`
          ]
        },
        {
          id: `py-operators-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Operators & Expressions shows up wherever python skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

Teams shipping features around py-operators align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Operators & Expressions
skills = ["python", "beginner", "py-operators"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: python, beginner, py-operators`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Operators & Expressions to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-op-1`,
          question: `Given a = 10 and b = 3, compute and print quotient (floor), remainder, and power a**b.`,
          solution: `a, b = 10, 3
print(a // b, a % b, a ** b)`,
          difficulty: `easy`
        },
        {
          id: `ex-op-2`,
          question: `Check if a number n=15 is divisible by both 3 and 5 using logical operators.`,
          solution: `n = 15
print(n % 3 == 0 and n % 5 == 0)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      prerequisites: [
        `py-vars-types`
      ],
      module: `module-01`,
      references: [
        {
          id: `python-operators-doc`,
          title: `Python Operator Reference`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/library/operator.html`,
          description: `Complete reference for arithmetic, comparison, and logical operators.`
        },
        {
          id: `real-python-operators`,
          title: `Operators and Expressions in Python`,
          source: `Real Python`,
          type: `documentation`,
          url: `https://realpython.com/python-operators-expressions/`,
          description: `Explains operator precedence, short-circuit evaluation, and common pitfalls.`
        },
        {
          id: `python-tutorial-intro`,
          title: `Python Tutorial — An Informal Introduction`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/introduction.html`,
          description: `Official introduction to Python variables, numbers, and strings.`
        },
        {
          id: `cs106a-python`,
          title: `Stanford CS106A — Programming Methodology`,
          source: `Stanford`,
          type: `course`,
          url: `https://cs106a.stanford.edu/`,
          description: `Foundational Stanford course covering Python programming from first principles.`
        }
      ]
    },
{
      id: `py-strings`,
      title: `Strings & Text Processing`,
      description: `String creation, slicing, methods, and formatting fundamentals.`,
      level: `beginner`,
      track: `python`,
      sections: [
        {
          id: `str-basics`,
          title: `String Creation & Indexing`,
          content: `Strings are immutable sequences of Unicode characters. Create with single, double, or triple quotes.

Indexing: \`s[0]\` first char, \`s[-1]\` last char. Slicing: \`s[start:stop:step]\`.

**Why this matters for Strings & Text Processing:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Strings & Text Processing:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "String Creation & Indexing" connects to string creation, slicing, methods, and formatting fundamentals. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `s = "Python"
print(s[0], s[-1])
print(s[1:4])
print(s[::-1])`,
          output: `P n
yth
nohtyP`,
          keyPoints: [
            `Strings are immutable sequences`,
            `Negative indices count from the end`,
            `Step in slicing enables reversal`,
            `Triple quotes for multiline strings`
          ]
        },
        {
          id: `str-methods`,
          title: `Essential String Methods`,
          content: `Common methods:
- \`.lower()\`, \`.upper()\`, \`.strip()\`
- \`.split()\`, \`.join()\`
- \`.replace()\`, \`.find()\`, \`.startswith()\`
- \`.format()\` and f-strings

Methods return new strings; originals unchanged.

**Why this matters for Strings & Text Processing:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Strings & Text Processing:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Essential String Methods" connects to string creation, slicing, methods, and formatting fundamentals. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `text = "  Hello, World!  "
print(text.strip().lower())
words = "a,b,c".split(",")
print("-".join(words))`,
          output: `hello, world!
a-b-c`,
          keyPoints: [
            `Strings have rich method API`,
            `split/join are inverse operations`,
            `strip removes leading/trailing whitespace`,
            `Methods never modify original string`
          ]
        },
        {
          id: `str-format`,
          title: `f-strings & Formatting`,
          content: `**f-strings** (Python 3.6+) embed expressions: \`f"{name} is {age}"\`. Format specifiers: \`f"{pi:.2f}"\` for 2 decimal places.

**Why this matters for Strings & Text Processing:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Strings & Text Processing:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "f-strings & Formatting" connects to string creation, slicing, methods, and formatting fundamentals. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `name, score = "Alice", 95.567
print(f"{name} scored {score:.1f}%")
print(f"{name} = {score:.0f}")`,
          output: `Alice scored 95.6%
Alice = 96`,
          keyPoints: [
            `f-strings are the preferred formatting method`,
            `Expressions evaluated at runtime inside {}`,
            `Format specifiers control precision and alignment`,
            `f-strings are faster than .format()`
          ]
        },
        {
          id: `str-unicode`,
          title: `Unicode & Encoding`,
          content: `Python 3 strings are Unicode by default. Encode to bytes with \`.encode("utf-8")\`, decode with \`.decode()\`. Critical for file I/O and network operations.

**Why this matters for Strings & Text Processing:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Strings & Text Processing:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Unicode & Encoding" connects to string creation, slicing, methods, and formatting fundamentals. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `s = "café ☕"
b = s.encode("utf-8")
print(len(s), len(b))
print(b.decode("utf-8"))`,
          output: `7 9
café ☕`,
          keyPoints: [
            `str is Unicode, bytes is raw data`,
            `Always specify encoding for file I/O`,
            `UTF-8 handles all Unicode characters`,
            `len() counts characters, not bytes`
          ]
        },
        {
          id: `py-strings-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Strings & Text Processing sits in the **python** track of the Data Science Master curriculum. String creation, slicing, methods, and formatting fundamentals.

Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

For py-strings, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Strings & Text Processing
meta = {"topic_id": "py-strings", "track": "python", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `py-strings python beginner`,
          keyPoints: [
            `Core theory of Strings & Text Processing ties to the python track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `py-strings-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Strings & Text Processing. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For py-strings, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for py-strings
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("py-strings", "Strings & Text Processing")
print(ref.topic_id, ref.title.split()[0])`,
          output: `py-strings Strings`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with python ecosystem conventions`
          ]
        },
        {
          id: `py-strings-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Strings & Text Processing often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

When stuck on py-strings, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("py-strings", "Strings & Text Processing")
debug_step("section_count", 4)`,
          output: `[py-strings] 'Strings & Text Processing' (str)
[section_count] 4`,
          keyPoints: [
            `Reduce to the smallest failing example`,
            `Log intermediate values with types`,
            `Bisect changes with git or notebook history`,
            `Separate data bugs from logic bugs`,
            `Record seeds, versions, and hardware context`,
            `Fix root cause—not symptoms with silent catches`
          ]
        },
        {
          id: `py-strings-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Strings & Text Processing shows up wherever python skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

Teams shipping features around py-strings align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Strings & Text Processing
skills = ["python", "beginner", "py-strings"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: python, beginner, py-strings`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Strings & Text Processing to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-str-1`,
          question: `Given s = "  Data Science  ", strip whitespace, convert to title case, and replace spaces with underscores.`,
          solution: `s = "  Data Science  "
result = s.strip().title().replace(" ", "_")
print(result)`,
          difficulty: `easy`
        },
        {
          id: `ex-str-2`,
          question: `Split "apple,banana,cherry" into a list and print the second fruit.`,
          solution: `fruits = "apple,banana,cherry".split(",")
print(fruits[1])`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      prerequisites: [
        `py-vars-types`
      ],
      module: `module-01`,
      references: [
        {
          id: `python-strings-doc`,
          title: `Python Text Sequence Type — str`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str`,
          description: `Official documentation for string methods, slicing, and immutability.`
        },
        {
          id: `real-python-strings`,
          title: `Python Strings and Character Data`,
          source: `Real Python`,
          type: `documentation`,
          url: `https://realpython.com/python-strings/`,
          description: `Hands-on coverage of formatting, encoding, and text processing patterns.`
        },
        {
          id: `python-fstrings-pep498`,
          title: `PEP 498 — Literal String Interpolation`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://peps.python.org/pep-0498/`,
          description: `Specification for f-strings, the preferred modern formatting approach.`
        },
        {
          id: `python-input-output`,
          title: `Input and Output`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/inputoutput.html`,
          description: `Covers print formatting, reading input, and file I/O fundamentals.`
        }
      ]
    },
{
      id: `py-io`,
      title: `Input/Output & REPL`,
      description: `Reading input, printing output, and using the Python REPL effectively.`,
      level: `beginner`,
      track: `python`,
      sections: [
        {
          id: `print`,
          title: `Print Function Deep Dive`,
          content: `\`print()\` outputs to stdout. Parameters:
- \`sep\` — separator between items (default space)
- \`end\` — line ending (default newline)
- \`file\` — output stream
- \`flush\` — force buffer flush

**Why this matters for Input/Output & REPL:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Input/Output & REPL:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Print Function Deep Dive" connects to reading input, printing output, and using the python repl effectively. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `print("A", "B", "C", sep="-", end="!\\n")
print("Done", flush=True)`,
          output: `A-B-C!
Done`,
          keyPoints: [
            `print accepts multiple arguments`,
            `sep and end customize formatting`,
            `Use file= for logging to files`,
            `flush=True for real-time output`
          ]
        },
        {
          id: `input`,
          title: `Reading User Input`,
          content: `\`input(prompt)\` reads a line from stdin as a string. Always validate and convert types explicitly.

**Why this matters for Input/Output & REPL:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Input/Output & REPL:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Reading User Input" connects to reading input, printing output, and using the python repl effectively. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `# Simulated input handling
user_input = "25"  # would come from input()
age = int(user_input)
print(f"You are {age} years old")`,
          output: `You are 25 years old`,
          keyPoints: [
            `input() always returns a string`,
            `Wrap in try/except for invalid input`,
            `Validate before converting types`,
            `Never trust user input blindly`
          ]
        },
        {
          id: `repl`,
          title: `The Python REPL`,
          content: `The **REPL** (Read-Eval-Print Loop) is an interactive shell. Launch with \`python\` or \`ipython\`. Use \`_\` for last result. \`%timeit\` in IPython benchmarks code.

**Why this matters for Input/Output & REPL:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Input/Output & REPL:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "The Python REPL" connects to reading input, printing output, and using the python repl effectively. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `# In REPL:
# >>> 2 + 2
# 4
# >>> _ * 3
# 12
print("Use python or ipython for interactive exploration")`,
          output: `Use python or ipython for interactive exploration`,
          keyPoints: [
            `REPL is ideal for quick experiments`,
            `_ holds the last evaluated result`,
            `IPython adds magic commands and tab completion`,
            `Use REPL before writing full scripts`
          ]
        },
        {
          id: `files-intro`,
          title: `Basic File I/O Preview`,
          content: `Open files with \`open(path, mode)\`. Always use \`with\` statement for automatic cleanup. Modes: \`"r"\`, \`"w"\`, \`"a"\`, \`"rb"\`, \`"wb"\`.

**Why this matters for Input/Output & REPL:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Input/Output & REPL:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Basic File I/O Preview" connects to reading input, printing output, and using the python repl effectively. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `# Writing and reading (conceptual)
lines = ["line1\\n", "line2\\n"]
content = "".join(lines)
print(content, end="")`,
          output: `line1
line2`,
          keyPoints: [
            `Always use with open() as f:`,
            `Text mode vs binary mode matters`,
            `Specify encoding=utf-8 for text files`,
            `File I/O covered in depth later`
          ]
        },
        {
          id: `py-io-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Input/Output & REPL sits in the **python** track of the Data Science Master curriculum. Reading input, printing output, and using the Python REPL effectively.

Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

For py-io, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Input/Output & REPL
meta = {"topic_id": "py-io", "track": "python", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `py-io python beginner`,
          keyPoints: [
            `Core theory of Input/Output & REPL ties to the python track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `py-io-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Input/Output & REPL. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For py-io, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for py-io
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("py-io", "Input/Output & REPL")
print(ref.topic_id, ref.title.split()[0])`,
          output: `py-io Input/Output`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with python ecosystem conventions`
          ]
        },
        {
          id: `py-io-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Input/Output & REPL often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

When stuck on py-io, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("py-io", "Input/Output & REPL")
debug_step("section_count", 4)`,
          output: `[py-io] 'Input/Output & REPL' (str)
[section_count] 4`,
          keyPoints: [
            `Reduce to the smallest failing example`,
            `Log intermediate values with types`,
            `Bisect changes with git or notebook history`,
            `Separate data bugs from logic bugs`,
            `Record seeds, versions, and hardware context`,
            `Fix root cause—not symptoms with silent catches`
          ]
        },
        {
          id: `py-io-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Input/Output & REPL shows up wherever python skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

Teams shipping features around py-io align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Input/Output & REPL
skills = ["python", "beginner", "py-io"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: python, beginner, py-io`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Input/Output & REPL to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-io-1`,
          question: `Print numbers 1 to 5 on one line separated by commas using print parameters.`,
          solution: `print(*range(1, 6), sep=", ")`,
          difficulty: `easy`
        },
        {
          id: `ex-io-2`,
          question: `Parse string "10,20,30" into integers and print their sum.`,
          solution: `total = sum(int(x) for x in "10,20,30".split(","))
print(total)`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 40,
      module: `module-01`,
      references: [
        {
          id: `python-input-output`,
          title: `Input and Output`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/inputoutput.html`,
          description: `Covers print formatting, reading input, and file I/O fundamentals.`
        },
        {
          id: `python-repl`,
          title: `Interactive Python Shell`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/interpreter.html`,
          description: `How to use the REPL for rapid experimentation and debugging.`
        },
        {
          id: `python-tutorial-intro`,
          title: `Python Tutorial — An Informal Introduction`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/introduction.html`,
          description: `Official introduction to Python variables, numbers, and strings.`
        },
        {
          id: `cs106a-python`,
          title: `Stanford CS106A — Programming Methodology`,
          source: `Stanford`,
          type: `course`,
          url: `https://cs106a.stanford.edu/`,
          description: `Foundational Stanford course covering Python programming from first principles.`
        }
      ]
    },
{
      id: `py-env`,
      title: `Python Environment & Tooling`,
      description: `Virtual environments, pip, and project setup best practices.`,
      level: `beginner`,
      track: `python`,
      sections: [
        {
          id: `venv`,
          title: `Virtual Environments`,
          content: `A **virtual environment** isolates project dependencies. Create with \`python -m venv .venv\`, activate with \`.venv\\Scripts\\activate\` (Windows) or \`source .venv/bin/activate\` (Unix).

**Why this matters for Python Environment & Tooling:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Python Environment & Tooling:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Virtual Environments" connects to virtual environments, pip, and project setup best practices. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `# Shell commands (not Python):
# python -m venv .venv
# pip install numpy pandas
print("Always use venv per project")`,
          output: `Always use venv per project`,
          keyPoints: [
            `One venv per project prevents dependency conflicts`,
            `Never install packages globally for projects`,
            `Add .venv to .gitignore`,
            `Use python -m pip not bare pip`
          ]
        },
        {
          id: `pip`,
          title: `Package Management with pip`,
          content: `\`pip install package\` installs from PyPI. Pin versions: \`pip install numpy==1.26.0\`. Export: \`pip freeze > requirements.txt\`. Install from file: \`pip install -r requirements.txt\`.

**Why this matters for Python Environment & Tooling:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Python Environment & Tooling:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Package Management with pip" connects to virtual environments, pip, and project setup best practices. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `# requirements.txt example:
reqs = """numpy>=1.24
pandas>=2.0
scikit-learn>=1.3"""
print(reqs)`,
          output: `numpy>=1.24
pandas>=2.0
scikit-learn>=1.3`,
          keyPoints: [
            `Pin major versions for reproducibility`,
            `requirements.txt tracks dependencies`,
            `Use pip list to see installed packages`,
            `Consider pip-tools or poetry for advanced management`
          ]
        },
        {
          id: `ide`,
          title: `IDEs & Running Scripts`,
          content: `Run scripts: \`python script.py\`. Use VS Code, PyCharm, or Cursor with Python extension. Configure linter (ruff/flake8) and formatter (black).

**Why this matters for Python Environment & Tooling:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Python Environment & Tooling:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "IDEs & Running Scripts" connects to virtual environments, pip, and project setup best practices. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `if __name__ == "__main__":
    print("Script entry point")
    # Your code here`,
          output: `Script entry point`,
          keyPoints: [
            `if __name__ == "__main__" guards script execution`,
            `Configure linter and formatter in IDE`,
            `Use debugger for complex bugs`,
            `Jupyter for exploratory data work`
          ]
        },
        {
          id: `project-structure`,
          title: `Project Structure Basics`,
          content: `Standard layout:
\`\`\`
project/
  src/
  tests/
  requirements.txt
  README.md
\`\`\`
Keep code modular and testable from the start.

**Why this matters for Python Environment & Tooling:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Python Environment & Tooling:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Project Structure Basics" connects to virtual environments, pip, and project setup best practices. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          keyPoints: [
            `Separate source, tests, and data`,
            `Use meaningful module names`,
            `Document setup in README`,
            `Version control with git from day one`
          ]
        },
        {
          id: `py-env-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Python Environment & Tooling sits in the **python** track of the Data Science Master curriculum. Virtual environments, pip, and project setup best practices.

Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

For py-env, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Python Environment & Tooling
meta = {"topic_id": "py-env", "track": "python", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `py-env python beginner`,
          keyPoints: [
            `Core theory of Python Environment & Tooling ties to the python track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `py-env-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Python Environment & Tooling. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For py-env, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for py-env
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("py-env", "Python Environment & Tooling")
print(ref.topic_id, ref.title.split()[0])`,
          output: `py-env Python`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with python ecosystem conventions`
          ]
        },
        {
          id: `py-env-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Python Environment & Tooling often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

When stuck on py-env, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("py-env", "Python Environment & Tooling")
debug_step("section_count", 4)`,
          output: `[py-env] 'Python Environment & Tooling' (str)
[section_count] 4`,
          keyPoints: [
            `Reduce to the smallest failing example`,
            `Log intermediate values with types`,
            `Bisect changes with git or notebook history`,
            `Separate data bugs from logic bugs`,
            `Record seeds, versions, and hardware context`,
            `Fix root cause—not symptoms with silent catches`
          ]
        },
        {
          id: `py-env-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Python Environment & Tooling shows up wherever python skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

Teams shipping features around py-env align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Python Environment & Tooling
skills = ["python", "beginner", "py-env"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: python, beginner, py-env`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Python Environment & Tooling to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-env-1`,
          question: `Write a requirements.txt content string with numpy, pandas, and matplotlib with minimum versions.`,
          solution: `requirements = "numpy>=1.24\\npandas>=2.0\\nmatplotlib>=3.7"
print(requirements)`,
          difficulty: `easy`
        },
        {
          id: `ex-env-2`,
          question: `Write the Python idiom that runs main() only when script is executed directly.`,
          solution: `def main():
    print("Running main")

if __name__ == "__main__":
    main()`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-01`,
      references: [
        {
          id: `python-venv-doc`,
          title: `venv — Creation of Virtual Environments`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/library/venv.html`,
          description: `Standard library tool for isolating project dependencies.`
        },
        {
          id: `pip-user-guide`,
          title: `pip User Guide`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://pip.pypa.io/en/stable/user_guide/`,
          description: `Installing, upgrading, and managing Python packages with pip.`
        },
        {
          id: `python-packaging-guide`,
          title: `Python Packaging User Guide`,
          source: `PyPA`,
          type: `documentation`,
          url: `https://packaging.python.org/en/latest/tutorials/installing-packages/`,
          description: `Best practices for project setup, virtual environments, and distribution.`
        },
        {
          id: `python-modules-doc`,
          title: `Modules and Packages`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/modules.html`,
          description: `Organizing code into importable modules and package hierarchies.`
        }
      ]
    }
];
