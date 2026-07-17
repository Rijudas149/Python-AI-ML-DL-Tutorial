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
          content: `A decorator is \`@decorator\` syntax for \`func = decorator(func)\`.

Decorators are higher-order functions that wrap callables.

**Function Decorators** in the context of **Decorators**: Run the Python example below in a notebook or script, compare your output with the expected result, then review the key takeaways before attempting the exercises.`,
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
          ],
          pseudoCode: `CONCEPT: Function Decorators

Checklist:
  1. Decorators wrap functions transparently
  2. @syntax is syntactic sugar
  3. wrapper must use *args, **kwargs
  4. functools.wraps preserves metadata`
        },
        {
          id: `functools-wraps`,
          title: `functools.wraps & functools`,
          content: `Always use \`@wraps(func)\` on wrapper to preserve \`__name__\`, \`__doc__\`. functools.lru_cache, partial, reduce are essential tools.

**functools.wraps & functools** in the context of **Decorators**: Run the Python example below in a notebook or script, compare your output with the expected result, then review the key takeaways before attempting the exercises.`,
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
          ],
          pseudoCode: `CONCEPT: functools.wraps & functools

Checklist:
  1. lru_cache memoizes function results
  2. wraps preserves function identity
  3. partial creates specialized functions
  4. Decorators with args need decorator factory`
        },
        {
          id: `param-decorator`,
          title: `Decorators with Parameters`,
          content: `Three-level nesting: decorator factory → decorator → wrapper. \`@retry(times=3)\` pattern.

**Decorators with Parameters** in the context of **Decorators**: Run the Python example below in a notebook or script, compare your output with the expected result, then review the key takeaways before attempting the exercises.`,
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
          ],
          pseudoCode: `CONCEPT: Decorators with Parameters

Checklist:
  1. Outer function receives decorator args
  2. Middle function receives wrapped function
  3. Inner function receives call args
  4. Flask/FastAPI routes use parameterized decorators`
        },
        {
          id: `class-decorator`,
          title: `Class Decorators`,
          content: `Decorators work on classes too. \`@dataclass\`, \`@property\` are built-in class decorators.

Metaclasses are advanced alternative.

**Class Decorators** in the context of **Decorators**: Run the Python example below in a notebook or script, compare your output with the expected result, then review the key takeaways before attempting the exercises.`,
          keyPoints: [
            `Class decorators modify or register classes`,
            `dataclass is a class decorator`,
            `Metaclasses customize class creation`,
            `Use decorators before metaclasses`
          ],
          pseudoCode: `CONCEPT: Class Decorators

Checklist:
  1. Class decorators modify or register classes
  2. dataclass is a class decorator
  3. Metaclasses customize class creation
  4. Use decorators before metaclasses`
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
      estimatedMinutes: 25,
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
          content: `\`yield\` pauses function and returns value.

Generators are iterators — memory efficient.

**Generator Functions** in the context of **Generators & yield**: Run the Python example below in a notebook or script, compare your output with the expected result, then review the key takeaways before attempting the exercises.`,
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
          ],
          pseudoCode: `CONCEPT: Generator Functions

Checklist:
  1. yield transforms function to generator
  2. State preserved between yields
  3. Generators are single-pass iterators
  4. Use for infinite sequences and pipelines`
        },
        {
          id: `yield-from`,
          title: `yield from & send`,
          content: `\`yield from iterable\` delegates to sub-generator. \`.send(value)\` sends values into generator.

Advanced coroutine patterns.

**yield from & send** in the context of **Generators & yield**: Run the Python example below in a notebook or script, compare your output with the expected result, then review the key takeaways before attempting the exercises.`,
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
          ],
          pseudoCode: `CONCEPT: yield from & send

Checklist:
  1. yield from simplifies generator delegation
  2. send() enables two-way communication
  3. throw() and close() control generator lifecycle
  4. Foundation for async/await`
        },
        {
          id: `gen-expr`,
          title: `Generator Pipelines`,
          content: `Chain generators for data pipelines: read → filter → transform → aggregate.

Memory stays constant.

**Generator Pipelines** in the context of **Generators & yield**: Run the Python example below in a notebook or script, compare your output with the expected result, then review the key takeaways before attempting the exercises.`,
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
          ],
          pseudoCode: `CONCEPT: Generator Pipelines

Checklist:
  1. Pipeline stages are composable generators
  2. Lazy evaluation — no intermediate lists
  3. Pattern used in ETL and streaming ML
  4. itertools.chain and tee assist pipelines`
        },
        {
          id: `infinite`,
          title: `Infinite Generators`,
          content: `Generators can yield forever: \`while True: yield x\`.

Use with break condition or itertools.islice to limit.

**Infinite Generators** in the context of **Generators & yield**: Run the Python example below in a notebook or script, compare your output with the expected result, then review the key takeaways before attempting the exercises.`,
          keyPoints: [
            `Infinite generators model streams`,
            `islice limits consumption`,
            `cycle and repeat from itertools`,
            `Careful with memory on accidental materialization`
          ],
          pseudoCode: `CONCEPT: Infinite Generators

Checklist:
  1. Infinite generators model streams
  2. islice limits consumption
  3. cycle and repeat from itertools
  4. Careful with memory on accidental materialization`
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
      estimatedMinutes: 25,
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
          content: `Context managers guarantee setup/teardown via \`__enter__\` and \`__exit__\`.

Essential for files, locks, DB connections.

**The with Statement** in the context of **Context Managers**: Run the Python example below in a notebook or script, compare your output with the expected result, then review the key takeaways before attempting the exercises.`,
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
          ],
          pseudoCode: `CONCEPT: The with Statement

Checklist:
  1. with guarantees cleanup even on exceptions
  2. __exit__ receives exception info
  3. Return True from __exit__ to suppress exception
  4. File handling primary use case`
        },
        {
          id: `contextlib`,
          title: `contextlib Utilities`,
          content: `@contextmanager decorator turns generator into context manager. contextlib.suppress, ExitStack for multiple contexts.

**contextlib Utilities** in the context of **Context Managers**: Run the Python example below in a notebook or script, compare your output with the expected result, then review the key takeaways before attempting the exercises.`,
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
          ],
          pseudoCode: `CONCEPT: contextlib Utilities

Checklist:
  1. contextmanager decorator simplifies creation
  2. yield separates enter and exit logic
  3. ExitStack manages dynamic context count
  4. suppress catches specific exceptions`
        },
        {
          id: `file-context`,
          title: `File Handling Pattern`,
          content: `Always: \`with open(path, "r", encoding="utf-8") as f:\`.

Automatic close even on error.

**File Handling Pattern** in the context of **Context Managers**: Run the Python example below in a notebook or script, compare your output with the expected result, then review the key takeaways before attempting the exercises.`,
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
          ],
          pseudoCode: `CONCEPT: File Handling Pattern

Checklist:
  1. with open is the only correct file pattern
  2. Specify encoding explicitly
  3. Use json.load inside with block
  4. Pathlib improves path handling`
        },
        {
          id: `async-context`,
          title: `Async Context Managers`,
          content: `async with for async __aenter__/__aexit__.

Required for async DB sessions and HTTP clients.

**Async Context Managers** in the context of **Context Managers**: Run the Python example below in a notebook or script, compare your output with the expected result, then review the key takeaways before attempting the exercises.`,
          keyPoints: [
            `async with for asyncio resources`,
            `@asynccontextmanager decorator available`,
            `Used in FastAPI lifespan events`,
            `Ensure proper await in async contexts`
          ],
          pseudoCode: `CONCEPT: Async Context Managers

Checklist:
  1. async with for asyncio resources
  2. @asynccontextmanager decorator available
  3. Used in FastAPI lifespan events
  4. Ensure proper await in async contexts`
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
      estimatedMinutes: 25,
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
          content: `Annotate parameters and returns: \`def greet(name: str) -> str:\`.

Use list[int], dict[str, float] (Python 3.9+).

Optional[X] or X | None for nullable.

**Type Annotations** in the context of **Type Hints & dataclasses**: Run the Python example below in a notebook or script, compare your output with the expected result, then review the key takeaways before attempting the exercises.`,
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
          ],
          pseudoCode: `CONCEPT: Type Annotations

Checklist:
  1. Type hints are not enforced at runtime
  2. mypy/pyright check statically
  3. Use from __future__ import annotations for forward refs
  4. Gradual typing — add incrementally`
        },
        {
          id: `dataclass`,
          title: `dataclasses Module`,
          content: `@dataclass generates boilerplate. field() for defaults. frozen, order, slots options.

**dataclasses Module** in the context of **Type Hints & dataclasses**: Run the Python example below in a notebook or script, compare your output with the expected result, then review the key takeaways before attempting the exercises.`,
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
          ],
          pseudoCode: `CONCEPT: dataclasses Module

Checklist:
  1. default_factory for mutable defaults
  2. frozen=True makes immutable
  3. asdict() and astuple() for conversion
  4. Preferred over namedtuple for mutable data`
        },
        {
          id: `pydantic`,
          title: `Pydantic & Validation`,
          content: `Pydantic BaseModel validates at runtime.

Essential for API schemas, config, and ML pipeline configs.

**Pydantic & Validation** in the context of **Type Hints & dataclasses**: Run the Python example below in a notebook or script, compare your output with the expected result, then review the key takeaways before attempting the exercises.`,
          keyPoints: [
            `Pydantic v2 uses Rust core — very fast`,
            `Automatic JSON serialization`,
            `Used in FastAPI request/response models`,
            `Validate ML experiment configs with Pydantic`
          ],
          pseudoCode: `CONCEPT: Pydantic & Validation

Checklist:
  1. Pydantic v2 uses Rust core — very fast
  2. Automatic JSON serialization
  3. Used in FastAPI request/response models
  4. Validate ML experiment configs with Pydantic`
        },
        {
          id: `typing-advanced`,
          title: `Advanced Typing`,
          content: `Union, Literal, TypedDict, Callable, TypeVar, Protocol.

Enables precise interfaces for complex codebases.

**Advanced Typing** in the context of **Type Hints & dataclasses**: Run the Python example below in a notebook or script, compare your output with the expected result, then review the key takeaways before attempting the exercises.`,
          keyPoints: [
            `TypedDict for structured dicts`,
            `Literal for fixed value sets`,
            `Callable[[int, str], bool] for function types`,
            `Essential for large ML codebases`
          ],
          pseudoCode: `CONCEPT: Advanced Typing

Checklist:
  1. TypedDict for structured dicts
  2. Literal for fixed value sets
  3. Callable[[int, str], bool] for function types
  4. Essential for large ML codebases`
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
      estimatedMinutes: 25,
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
          content: `\`import module\`, \`from module import name\`, \`from package.sub import Class\`. __init__.py marks packages.

Relative imports with dots.

**Import System** in the context of **Modules, Packages & pip**: Run the Python example below in a notebook or script, compare your output with the expected result, then review the key takeaways before attempting the exercises.`,
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
          ],
          pseudoCode: `CONCEPT: Import System

Checklist:
  1. One module per logical unit
  2. Avoid import * — pollutes namespace
  3. Use absolute imports in packages
  4. __all__ controls from module import *`
        },
        {
          id: `packages`,
          title: `Package Structure`,
          content: `\`\`\` mypackage/ __init__.py core.py utils/ __init__.py helpers.py \`\`\` Use pyproject.toml for modern project config.

**Package Structure** in the context of **Modules, Packages & pip**: Run the Python example below in a notebook or script, compare your output with the expected result, then review the key takeaways before attempting the exercises.`,
          keyPoints: [
            `src/ layout prevents import confusion`,
            `pyproject.toml replaces setup.py`,
            `__init__.py can expose public API`,
            `Namespace packages for large projects`
          ],
          pseudoCode: `CONCEPT: Package Structure

Checklist:
  1. src/ layout prevents import confusion
  2. pyproject.toml replaces setup.py
  3. __init__.py can expose public API
  4. Namespace packages for large projects`
        },
        {
          id: `publishing`,
          title: `Publishing Packages`,
          content: `Build with \`python -m build\`.

Upload to PyPI with \`twine upload\`.

Semantic versioning: MAJOR.MINOR.PATCH.

**Publishing Packages** in the context of **Modules, Packages & pip**: Run the Python example below in a notebook or script, compare your output with the expected result, then review the key takeaways before attempting the exercises.`,
          keyPoints: [
            `Follow semantic versioning`,
            `README and LICENSE required for PyPI`,
            `Test with TestPyPI first`,
            `Pin dependencies in published packages`
          ],
          pseudoCode: `CONCEPT: Publishing Packages

Checklist:
  1. Follow semantic versioning
  2. README and LICENSE required for PyPI
  3. Test with TestPyPI first
  4. Pin dependencies in published packages`
        },
        {
          id: `stdlib`,
          title: `Essential Standard Library`,
          content: `os, sys, pathlib, json, csv, datetime, collections, itertools, functools, argparse, logging, unittest.

**Essential Standard Library** in the context of **Modules, Packages & pip**: Run the Python example below in a notebook or script, compare your output with the expected result, then review the key takeaways before attempting the exercises.`,
          keyPoints: [
            `Know stdlib before adding dependencies`,
            `pathlib over os.path`,
            `logging over print for production`,
            `argparse or click for CLI tools`
          ],
          pseudoCode: `CONCEPT: Essential Standard Library

Checklist:
  1. Know stdlib before adding dependencies
  2. pathlib over os.path
  3. logging over print for production
  4. argparse or click for CLI tools`
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
      estimatedMinutes: 25,
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
