import type { Topic } from '../../types';

export const module05Topics: Topic[] = [
{
      id: `py-decorators`,
      title: `Decorators`,
      description: `Functions that modify or wrap other functions. Essential for logging, timing, auth, and frameworks.`,
      level: `advanced`,
      track: `python`,
      sections: [
        {
          id: `decorator-basics`,
          title: `Function Decorators`,
          content: `A decorator is \`@decorator\` syntax for \`func = decorator(func)\`. Decorators are higher-order functions that wrap callables.

**Why this matters for Decorators:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Decorators:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Function Decorators" connects to functions that modify or wrap other functions. essential for logging, timing, auth, and frameworks. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `def log_calls(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

@log_calls
def add(a, b):
    return a + b

print(add(2, 3))`,
          output: `Calling add
5`,
          keyPoints: [
            `Decorators wrap functions transparently`,
            `@syntax is syntactic sugar`,
            `wrapper must use *args, **kwargs`,
            `functools.wraps preserves metadata`
          ]
        },
        {
          id: `functools-wraps`,
          title: `functools.wraps & functools`,
          content: `Always use \`@wraps(func)\` on wrapper to preserve \`__name__\`, \`__doc__\`. functools.lru_cache, partial, reduce are essential tools.

**Why this matters for Decorators:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Decorators:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "functools.wraps & functools" connects to functions that modify or wrap other functions. essential for logging, timing, auth, and frameworks. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `from functools import wraps, lru_cache

@lru_cache(maxsize=128)
def fib(n):
    if n < 2: return n
    return fib(n-1) + fib(n-2)

print(fib(30))`,
          output: `832040`,
          keyPoints: [
            `lru_cache memoizes function results`,
            `wraps preserves function identity`,
            `partial creates specialized functions`,
            `Decorators with args need decorator factory`
          ]
        },
        {
          id: `param-decorator`,
          title: `Decorators with Parameters`,
          content: `Three-level nesting: decorator factory → decorator → wrapper. \`@retry(times=3)\` pattern.

**Why this matters for Decorators:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Decorators:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Decorators with Parameters" connects to functions that modify or wrap other functions. essential for logging, timing, auth, and frameworks. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `from functools import wraps

def repeat(n):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for _ in range(n):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def greet():
    print("Hello")

greet()`,
          output: `Hello
Hello
Hello`,
          keyPoints: [
            `Outer function receives decorator args`,
            `Middle function receives wrapped function`,
            `Inner function receives call args`,
            `Flask/FastAPI routes use parameterized decorators`
          ]
        },
        {
          id: `class-decorator`,
          title: `Class Decorators`,
          content: `Decorators work on classes too. \`@dataclass\`, \`@property\` are built-in class decorators. Metaclasses are advanced alternative.

**Why this matters for Decorators:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Decorators:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Class Decorators" connects to functions that modify or wrap other functions. essential for logging, timing, auth, and frameworks. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          keyPoints: [
            `Class decorators modify or register classes`,
            `dataclass is a class decorator`,
            `Metaclasses customize class creation`,
            `Use decorators before metaclasses`
          ]
        },
        {
          id: `py-decorators-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Decorators sits in the **python** track of the DL_Master curriculum. Functions that modify or wrap other functions. Essential for logging, timing, auth, and frameworks.

Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

For py-decorators, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Decorators
meta = {"topic_id": "py-decorators", "track": "python", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `py-decorators python advanced`,
          keyPoints: [
            `Core theory of Decorators ties to the python track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `py-decorators-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Decorators. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For py-decorators, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for py-decorators
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("py-decorators", "Decorators")
print(ref.topic_id, ref.title.split()[0])`,
          output: `py-decorators Decorators`,
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
          id: `py-decorators-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Decorators often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

When stuck on py-decorators, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("py-decorators", "Decorators")
debug_step("section_count", 4)`,
          output: `[py-decorators] 'Decorators' (str)
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
          id: `py-decorators-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Decorators shows up wherever python skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

Teams shipping features around py-decorators align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Decorators
skills = ["python", "advanced", "py-decorators"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: python, advanced, py-decorators`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Decorators to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-dec-1`,
          question: `Write a timer decorator that prints execution time.`,
          solution: `import time
from functools import wraps

def timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        print(f"{func.__name__}: {time.time()-start:.4f}s")
        return result
    return wrapper

@timer
def slow():
    sum(range(100000))

slow()`,
          difficulty: `medium`
        },
        {
          id: `ex-dec-2`,
          question: `Use lru_cache on factorial function.`,
          solution: `from functools import lru_cache

@lru_cache

def fact(n):
    return 1 if n <= 1 else n * fact(n-1)

print(fact(10))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-05`,
      references: [
        {
          id: `python-decorators-doc`,
          title: `Primer on Python Decorators`,
          source: `Real Python`,
          type: `documentation`,
          url: `https://realpython.com/primer-on-python-decorators/`,
          description: `Functions wrapping functions — essential for frameworks and cross-cutting concerns.`
        },
        {
          id: `python-functions-doc`,
          title: `Defining Functions`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/controlflow.html#defining-functions`,
          description: `Function definition, parameters, return values, and docstrings.`
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
          id: `real-python-scope`,
          title: `Namespaces and Scope in Python`,
          source: `Real Python`,
          type: `documentation`,
          url: `https://realpython.com/python-namespaces-scope/`,
          description: `LEGB rule, closures, and how Python resolves variable names.`
        }
      ]
    },
{
      id: `py-generators`,
      title: `Generators & yield`,
      description: `Lazy iteration with generator functions and yield expressions.`,
      level: `advanced`,
      track: `python`,
      sections: [
        {
          id: `yield`,
          title: `Generator Functions`,
          content: `\`yield\` pauses function and returns value. Resumes on next(). Generators are iterators — memory efficient.

**Why this matters for Generators & yield:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Generators & yield:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Generator Functions" connects to lazy iteration with generator functions and yield expressions. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `def count_up(n):
    i = 0
    while i < n:
        yield i
        i += 1

for x in count_up(5):
    print(x, end=" ")`,
          output: `0 1 2 3 4 `,
          keyPoints: [
            `yield transforms function to generator`,
            `State preserved between yields`,
            `Generators are single-pass iterators`,
            `Use for infinite sequences and pipelines`
          ]
        },
        {
          id: `yield-from`,
          title: `yield from & send`,
          content: `\`yield from iterable\` delegates to sub-generator. \`.send(value)\` sends values into generator. Advanced coroutine patterns.

**Why this matters for Generators & yield:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Generators & yield:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "yield from & send" connects to lazy iteration with generator functions and yield expressions. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `def chain(*iterables):
    for it in iterables:
        yield from it

print(list(chain([1,2], [3,4])))`,
          output: `[1, 2, 3, 4]`,
          keyPoints: [
            `yield from simplifies generator delegation`,
            `send() enables two-way communication`,
            `throw() and close() control generator lifecycle`,
            `Foundation for async/await`
          ]
        },
        {
          id: `gen-expr`,
          title: `Generator Pipelines`,
          content: `Chain generators for data pipelines: read → filter → transform → aggregate. Memory stays constant.

**Why this matters for Generators & yield:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Generators & yield:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Generator Pipelines" connects to lazy iteration with generator functions and yield expressions. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `def read_nums():
    for x in [1,2,3,4,5,6]:
        yield x

def evens(source):
    for x in source:
        if x % 2 == 0:
            yield x

print(list(evens(read_nums())))`,
          output: `[2, 4, 6]`,
          keyPoints: [
            `Pipeline stages are composable generators`,
            `Lazy evaluation — no intermediate lists`,
            `Pattern used in ETL and streaming ML`,
            `itertools.chain and tee assist pipelines`
          ]
        },
        {
          id: `infinite`,
          title: `Infinite Generators`,
          content: `Generators can yield forever: \`while True: yield x\`. Use with break condition or itertools.islice to limit.

**Why this matters for Generators & yield:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Generators & yield:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Infinite Generators" connects to lazy iteration with generator functions and yield expressions. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          keyPoints: [
            `Infinite generators model streams`,
            `islice limits consumption`,
            `cycle and repeat from itertools`,
            `Careful with memory on accidental materialization`
          ]
        },
        {
          id: `py-generators-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Generators & yield sits in the **python** track of the DL_Master curriculum. Lazy iteration with generator functions and yield expressions.

Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

For py-generators, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Generators & yield
meta = {"topic_id": "py-generators", "track": "python", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `py-generators python advanced`,
          keyPoints: [
            `Core theory of Generators & yield ties to the python track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `py-generators-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Generators & yield. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For py-generators, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for py-generators
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("py-generators", "Generators & yield")
print(ref.topic_id, ref.title.split()[0])`,
          output: `py-generators Generators`,
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
          id: `py-generators-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Generators & yield often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

When stuck on py-generators, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("py-generators", "Generators & yield")
debug_step("section_count", 4)`,
          output: `[py-generators] 'Generators & yield' (str)
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
          id: `py-generators-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Generators & yield shows up wherever python skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

Teams shipping features around py-generators align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Generators & yield
skills = ["python", "advanced", "py-generators"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: python, advanced, py-generators`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Generators & yield to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-gen-1`,
          question: `Write a generator fibonacci() yielding first n Fibonacci numbers.`,
          solution: `def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

print(list(fibonacci(8)))`,
          difficulty: `medium`
        },
        {
          id: `ex-gen-2`,
          question: `Create generator that yields squares of input list lazily.`,
          solution: `def square_gen(nums):
    for n in nums:
        yield n ** 2

g = square_gen([1, 2, 3, 4])
print(next(g), next(g))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-05`,
      references: [
        {
          id: `python-generators-doc`,
          title: `Generator Expressions & yield`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/howto/functional.html#generators`,
          description: `Lazy iteration with generator functions and memory-efficient pipelines.`
        },
        {
          id: `python-iterators-doc`,
          title: `Iterator Protocol`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/library/stdtypes.html#iterator-types`,
          description: `How __iter__ and __next__ enable lazy, memory-efficient iteration.`
        },
        {
          id: `python-comprehensions-doc`,
          title: `List Comprehensions`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions`,
          description: `Concise syntax for building lists, dicts, and sets from iterables.`
        },
        {
          id: `real-python-scope`,
          title: `Namespaces and Scope in Python`,
          source: `Real Python`,
          type: `documentation`,
          url: `https://realpython.com/python-namespaces-scope/`,
          description: `LEGB rule, closures, and how Python resolves variable names.`
        }
      ]
    },
{
      id: `py-context`,
      title: `Context Managers`,
      description: `Resource management with with statement and contextlib.`,
      level: `advanced`,
      track: `python`,
      sections: [
        {
          id: `with`,
          title: `The with Statement`,
          content: `Context managers guarantee setup/teardown via \`__enter__\` and \`__exit__\`. Essential for files, locks, DB connections.

**Why this matters for Context Managers:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Context Managers:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "The with Statement" connects to resource management with with statement and contextlib. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `class Timer:
    def __enter__(self):
        import time
        self.start = time.time()
        return self
    def __exit__(self, *args):
        import time
        print(f"Elapsed: {time.time()-self.start:.4f}s")

with Timer():
    sum(range(100000))`,
          output: `Elapsed: 0.0020s`,
          keyPoints: [
            `with guarantees cleanup even on exceptions`,
            `__exit__ receives exception info`,
            `Return True from __exit__ to suppress exception`,
            `File handling primary use case`
          ]
        },
        {
          id: `contextlib`,
          title: `contextlib Utilities`,
          content: `@contextmanager decorator turns generator into context manager. contextlib.suppress, ExitStack for multiple contexts.

**Why this matters for Context Managers:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Context Managers:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "contextlib Utilities" connects to resource management with with statement and contextlib. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `from contextlib import contextmanager

@contextmanager
def tag(name):
    print(f"<{name}>")
    yield
    print(f"</{name}>")

with tag("div"):
    print("content")`,
          output: `<div>
content
</div>`,
          keyPoints: [
            `contextmanager decorator simplifies creation`,
            `yield separates enter and exit logic`,
            `ExitStack manages dynamic context count`,
            `suppress catches specific exceptions`
          ]
        },
        {
          id: `file-context`,
          title: `File Handling Pattern`,
          content: `Always: \`with open(path, "r", encoding="utf-8") as f:\`. Automatic close even on error.

**Why this matters for Context Managers:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Context Managers:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "File Handling Pattern" connects to resource management with with statement and contextlib. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `# Pattern demonstration
content = "Hello, File!"
lines = content.split("\\n")
print(len(lines), lines[0])`,
          output: `1 Hello, File!`,
          keyPoints: [
            `with open is the only correct file pattern`,
            `Specify encoding explicitly`,
            `Use json.load inside with block`,
            `Pathlib improves path handling`
          ]
        },
        {
          id: `async-context`,
          title: `Async Context Managers`,
          content: `async with for async __aenter__/__aexit__. Required for async DB sessions and HTTP clients.

**Why this matters for Context Managers:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Context Managers:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Async Context Managers" connects to resource management with with statement and contextlib. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          keyPoints: [
            `async with for asyncio resources`,
            `@asynccontextmanager decorator available`,
            `Used in FastAPI lifespan events`,
            `Ensure proper await in async contexts`
          ]
        },
        {
          id: `py-context-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Context Managers sits in the **python** track of the DL_Master curriculum. Resource management with with statement and contextlib.

Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

For py-context, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Context Managers
meta = {"topic_id": "py-context", "track": "python", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `py-context python advanced`,
          keyPoints: [
            `Core theory of Context Managers ties to the python track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `py-context-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Context Managers. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For py-context, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for py-context
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("py-context", "Context Managers")
print(ref.topic_id, ref.title.split()[0])`,
          output: `py-context Context`,
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
          id: `py-context-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Context Managers often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

When stuck on py-context, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("py-context", "Context Managers")
debug_step("section_count", 4)`,
          output: `[py-context] 'Context Managers' (str)
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
          id: `py-context-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Context Managers shows up wherever python skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

Teams shipping features around py-context align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Context Managers
skills = ["python", "advanced", "py-context"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: python, advanced, py-context`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Context Managers to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-ctx-1`,
          question: `Create a context manager that prints "START" and "END".`,
          solution: `from contextlib import contextmanager

@contextmanager
def bookend():
    print("START")
    yield
    print("END")

with bookend():
    print("middle")`,
          difficulty: `easy`
        },
        {
          id: `ex-ctx-2`,
          question: `Use suppress to ignore ZeroDivisionError.`,
          solution: `from contextlib import suppress

result = None
with suppress(ZeroDivisionError):
    result = 1 / 0
print(result)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-05`,
      references: [
        {
          id: `python-context-managers-doc`,
          title: `Context Managers`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/reference/datamodel.html#context-managers`,
          description: `Resource management with __enter__/__exit__ and the with statement.`
        },
        {
          id: `python-contextlib-doc`,
          title: `contextlib Utilities`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/library/contextlib.html`,
          description: `Helpers like @contextmanager for writing context managers easily.`
        },
        {
          id: `python-modules-doc`,
          title: `Modules and Packages`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/modules.html`,
          description: `Organizing code into importable modules and package hierarchies.`
        },
        {
          id: `real-python-scope`,
          title: `Namespaces and Scope in Python`,
          source: `Real Python`,
          type: `documentation`,
          url: `https://realpython.com/python-namespaces-scope/`,
          description: `LEGB rule, closures, and how Python resolves variable names.`
        }
      ]
    },
{
      id: `py-typehints`,
      title: `Type Hints & dataclasses`,
      description: `Static typing, dataclasses, and modern Python data modeling.`,
      level: `advanced`,
      track: `python`,
      sections: [
        {
          id: `hints`,
          title: `Type Annotations`,
          content: `Annotate parameters and returns: \`def greet(name: str) -> str:\`. Use list[int], dict[str, float] (Python 3.9+). Optional[X] or X | None for nullable.

**Why this matters for Type Hints & dataclasses:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Type Hints & dataclasses:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Type Annotations" connects to static typing, dataclasses, and modern python data modeling. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `def process(items: list[int], threshold: float = 0.5) -> dict[str, int]:
    above = [x for x in items if x > threshold * max(items)]
    return {"count": len(above), "max": max(above) if above else 0}

print(process([1, 5, 3, 9, 2]))`,
          output: `{'count': 2, 'max': 9}`,
          keyPoints: [
            `Type hints are not enforced at runtime`,
            `mypy/pyright check statically`,
            `Use from __future__ import annotations for forward refs`,
            `Gradual typing — add incrementally`
          ]
        },
        {
          id: `dataclass`,
          title: `dataclasses Module`,
          content: `@dataclass generates boilerplate. field() for defaults. frozen, order, slots options.

**Why this matters for Type Hints & dataclasses:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Type Hints & dataclasses:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "dataclasses Module" connects to static typing, dataclasses, and modern python data modeling. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `from dataclasses import dataclass, field

@dataclass
class ModelConfig:
    name: str
    layers: int = 3
    hidden_dims: list[int] = field(default_factory=lambda: [64, 128])

print(ModelConfig("mlp"))`,
          output: `ModelConfig(name='mlp', layers=3, hidden_dims=[64, 128])`,
          keyPoints: [
            `default_factory for mutable defaults`,
            `frozen=True makes immutable`,
            `asdict() and astuple() for conversion`,
            `Preferred over namedtuple for mutable data`
          ]
        },
        {
          id: `pydantic`,
          title: `Pydantic & Validation`,
          content: `Pydantic BaseModel validates at runtime. Essential for API schemas, config, and ML pipeline configs.

**Why this matters for Type Hints & dataclasses:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Type Hints & dataclasses:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Pydantic & Validation" connects to static typing, dataclasses, and modern python data modeling. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          keyPoints: [
            `Pydantic v2 uses Rust core — very fast`,
            `Automatic JSON serialization`,
            `Used in FastAPI request/response models`,
            `Validate ML experiment configs with Pydantic`
          ]
        },
        {
          id: `typing-advanced`,
          title: `Advanced Typing`,
          content: `Union, Literal, TypedDict, Callable, TypeVar, Protocol. Enables precise interfaces for complex codebases.

**Why this matters for Type Hints & dataclasses:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Type Hints & dataclasses:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Advanced Typing" connects to static typing, dataclasses, and modern python data modeling. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          keyPoints: [
            `TypedDict for structured dicts`,
            `Literal for fixed value sets`,
            `Callable[[int, str], bool] for function types`,
            `Essential for large ML codebases`
          ]
        },
        {
          id: `py-typehints-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Type Hints & dataclasses sits in the **python** track of the DL_Master curriculum. Static typing, dataclasses, and modern Python data modeling.

Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

For py-typehints, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Type Hints & dataclasses
meta = {"topic_id": "py-typehints", "track": "python", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `py-typehints python advanced`,
          keyPoints: [
            `Core theory of Type Hints & dataclasses ties to the python track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `py-typehints-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Type Hints & dataclasses. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For py-typehints, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for py-typehints
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("py-typehints", "Type Hints & dataclasses")
print(ref.topic_id, ref.title.split()[0])`,
          output: `py-typehints Type`,
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
          id: `py-typehints-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Type Hints & dataclasses often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

When stuck on py-typehints, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("py-typehints", "Type Hints & dataclasses")
debug_step("section_count", 4)`,
          output: `[py-typehints] 'Type Hints & dataclasses' (str)
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
          id: `py-typehints-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Type Hints & dataclasses shows up wherever python skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

Teams shipping features around py-typehints align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Type Hints & dataclasses
skills = ["python", "advanced", "py-typehints"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: python, advanced, py-typehints`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Type Hints & dataclasses to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-type-1`,
          question: `Create a dataclass Point3D with x, y, z floats.`,
          solution: `from dataclasses import dataclass

@dataclass
class Point3D:
    x: float
    y: float
    z: float

print(Point3D(1.0, 2.0, 3.0))`,
          difficulty: `easy`
        },
        {
          id: `ex-type-2`,
          question: `Write a typed function mean(values: list[float]) -> float.`,
          solution: `def mean(values: list[float]) -> float:
    return sum(values) / len(values)

print(mean([1.0, 2.0, 3.0, 4.0]))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-05`,
      references: [
        {
          id: `python-type-hints-doc`,
          title: `Typing — Support for Type Hints`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/library/typing.html`,
          description: `Static type annotations for safer, more maintainable Python code.`
        },
        {
          id: `python-dataclasses-doc`,
          title: `dataclasses Module`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/library/dataclasses.html`,
          description: `Boilerplate-free classes for storing data with auto-generated methods.`
        },
        {
          id: `python-typing-protocol`,
          title: `typing.Protocol — Structural Subtyping`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/library/typing.html#typing.Protocol`,
          description: `Duck-typing interfaces without explicit inheritance.`
        },
        {
          id: `python-datamodel`,
          title: `Python Data Model`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/reference/datamodel.html`,
          description: `Deep dive into objects, types, and the semantics behind Python values.`
        }
      ]
    },
{
      id: `py-modules`,
      title: `Modules, Packages & pip`,
      description: `Organizing code into modules, packages, and distributing with pip.`,
      level: `advanced`,
      track: `python`,
      sections: [
        {
          id: `imports`,
          title: `Import System`,
          content: `\`import module\`, \`from module import name\`, \`from package.sub import Class\`. __init__.py marks packages. Relative imports with dots.

**Why this matters for Modules, Packages & pip:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Modules, Packages & pip:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Import System" connects to organizing code into modules, packages, and distributing with pip. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          example: `# Standard import patterns:
# import numpy as np
# from sklearn.model_selection import train_test_split
print("Organize code into focused modules")`,
          output: `Organize code into focused modules`,
          keyPoints: [
            `One module per logical unit`,
            `Avoid import * — pollutes namespace`,
            `Use absolute imports in packages`,
            `__all__ controls from module import *`
          ]
        },
        {
          id: `packages`,
          title: `Package Structure`,
          content: `\`\`\`
mypackage/
  __init__.py
  core.py
  utils/
    __init__.py
    helpers.py
\`\`\`
Use pyproject.toml for modern project config.

**Why this matters for Modules, Packages & pip:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Modules, Packages & pip:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Package Structure" connects to organizing code into modules, packages, and distributing with pip. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          keyPoints: [
            `src/ layout prevents import confusion`,
            `pyproject.toml replaces setup.py`,
            `__init__.py can expose public API`,
            `Namespace packages for large projects`
          ]
        },
        {
          id: `publishing`,
          title: `Publishing Packages`,
          content: `Build with \`python -m build\`. Upload to PyPI with \`twine upload\`. Semantic versioning: MAJOR.MINOR.PATCH.

**Why this matters for Modules, Packages & pip:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Modules, Packages & pip:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Publishing Packages" connects to organizing code into modules, packages, and distributing with pip. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          keyPoints: [
            `Follow semantic versioning`,
            `README and LICENSE required for PyPI`,
            `Test with TestPyPI first`,
            `Pin dependencies in published packages`
          ]
        },
        {
          id: `stdlib`,
          title: `Essential Standard Library`,
          content: `os, sys, pathlib, json, csv, datetime, collections, itertools, functools, argparse, logging, unittest.

**Why this matters for Modules, Packages & pip:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Modules, Packages & pip:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Essential Standard Library" connects to organizing code into modules, packages, and distributing with pip. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          keyPoints: [
            `Know stdlib before adding dependencies`,
            `pathlib over os.path`,
            `logging over print for production`,
            `argparse or click for CLI tools`
          ]
        },
        {
          id: `py-modules-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Modules, Packages & pip sits in the **python** track of the DL_Master curriculum. Organizing code into modules, packages, and distributing with pip.

Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

For py-modules, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Modules, Packages & pip
meta = {"topic_id": "py-modules", "track": "python", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `py-modules python advanced`,
          keyPoints: [
            `Core theory of Modules, Packages & pip ties to the python track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `py-modules-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Modules, Packages & pip. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For py-modules, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for py-modules
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("py-modules", "Modules, Packages & pip")
print(ref.topic_id, ref.title.split()[0])`,
          output: `py-modules Modules,`,
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
          id: `py-modules-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Modules, Packages & pip often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

When stuck on py-modules, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("py-modules", "Modules, Packages & pip")
debug_step("section_count", 4)`,
          output: `[py-modules] 'Modules, Packages & pip' (str)
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
          id: `py-modules-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Modules, Packages & pip shows up wherever python skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

Teams shipping features around py-modules align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Modules, Packages & pip
skills = ["python", "advanced", "py-modules"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: python, advanced, py-modules`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Modules, Packages & pip to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-mod-1`,
          question: `Write __all__ = ["add", "subtract"] for a module exposing those functions.`,
          solution: `__all__ = ["add", "subtract"]

def add(a, b): return a + b
def subtract(a, b): return a - b
def _internal(): pass

print(__all__)`,
          difficulty: `easy`
        },
        {
          id: `ex-mod-2`,
          question: `Use pathlib to join path components for "data/raw/train.csv".`,
          solution: `from pathlib import Path
p = Path("data") / "raw" / "train.csv"
print(str(p))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-05`,
      references: [
        {
          id: `python-modules-doc`,
          title: `Modules and Packages`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/modules.html`,
          description: `Organizing code into importable modules and package hierarchies.`
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
          id: `python-venv-doc`,
          title: `venv — Creation of Virtual Environments`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/library/venv.html`,
          description: `Standard library tool for isolating project dependencies.`
        }
      ]
    }
];
