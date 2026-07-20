import type { Topic } from '../../types';

export const module02Topics: Topic[] = [
{
      id: `py-conditionals`,
      title: `Conditionals (if/elif/else)`,
      description: `Branch execution based on boolean conditions.`,
      level: `beginner`,
      track: `python`,
      sections: [
        {
          id: `if-basic`,
          title: `if Statements`,
          content: `The \`if\` statement executes a block when its condition is **truthy**. Python treats empty collections, zero, None, and empty strings as falsy.

Indentation (4 spaces) defines blocks — no braces required.`,
          example: `score = 85
if score >= 60:
    print("Pass")
else:
    print("Fail")`,
          output: `Pass`,
          keyPoints: [
            `Indentation defines code blocks`,
            `Truthy/falsy evaluation drives conditionals`,
            `else is optional`,
            `Use elif for multiple branches`
          ]
        },
        {
          id: `elif`,
          title: `elif Chains`,
          content: `Chain conditions with \`elif\` (else-if). Only the first true branch executes.

Order matters — put specific conditions first.`,
          example: `grade = 72
if grade >= 90:
    letter = "A"
elif grade >= 80:
    letter = "B"
elif grade >= 70:
    letter = "C"
else:
    letter = "F"
print(letter)`,
          output: `C`,
          keyPoints: [
            `Only one branch executes`,
            `Order conditions from specific to general`,
            `else catches all remaining cases`,
            `Avoid deep nesting — refactor to functions`
          ]
        },
        {
          id: `ternary`,
          title: `Ternary & Match-Case`,
          content: `Ternary: \`x if condition else y\`. Python 3.10+ adds **structural pattern matching** with \`match/case\` for complex branching.`,
          example: `n = 4
parity = "even" if n % 2 == 0 else "odd"

match parity:
    case "even":
        print(f"{n} is even")
    case "odd":
        print(f"{n} is odd")`,
          output: `4 is even`,
          keyPoints: [
            `Ternary keeps simple assignments concise`,
            `match/case replaces long elif chains`,
            `Pattern matching supports destructuring`,
            `Use match for type-based dispatch`
          ]
        },
        {
          id: `guard`,
          title: `Guard Clauses`,
          content: `Return early with **guard clauses** instead of deep nesting. Improves readability in validation logic.`,
          pseudoCode: `FUNCTION process(data):
    IF data is None: RETURN
    IF not valid(data): RETURN
    DO main logic`,
          example: `def process(data):
    if data is None:
        return
    if len(data) == 0:
        return
    print(f"Processing {len(data)} items")`,
          keyPoints: [
            `Early returns reduce nesting`,
            `Validate inputs at function start`,
            `Flat code is easier to read`,
            `Guard clauses are a best practice`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-if-1`,
          question: `Write code that prints "positive", "negative", or "zero" for a given number.`,
          solution: `n = -3
if n > 0:
    print("positive")
elif n < 0:
    print("negative")
else:
    print("zero")`,
          difficulty: `easy`
        },
        {
          id: `ex-if-2`,
          question: `Use ternary to assign max of two numbers a=5, b=9.`,
          solution: `a, b = 5, 9
m = a if a > b else b
print(m)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      prerequisites: [
        `py-operators`
      ],
      module: `module-02`,
      references: [
        {
          id: `python-if-doc`,
          title: `More Control Flow Tools — if Statements`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/controlflow.html#if-statements`,
          description: `Official tutorial on conditionals, elif chains, and boolean logic.`
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
        },
        {
          id: `real-python-operators`,
          title: `Operators and Expressions in Python`,
          source: `Real Python`,
          type: `documentation`,
          url: `https://realpython.com/python-operators-expressions/`,
          description: `Explains operator precedence, short-circuit evaluation, and common pitfalls.`
        }
      ]
    },
{
      id: `py-loops`,
      title: `Loops (for/while)`,
      description: `Iterate over sequences and repeat actions with for and while loops.`,
      level: `beginner`,
      track: `python`,
      sections: [
        {
          id: `for-loop`,
          title: `for Loops`,
          content: `\`for item in iterable:\` iterates over any iterable — lists, strings, dicts, ranges. Use \`range(n)\` for counting loops.`,
          example: `total = 0
for i in range(1, 6):
    total += i
print(total)`,
          output: `15`,
          keyPoints: [
            `for loops iterate iterables directly`,
            `range(start, stop, step) generates numbers`,
            `Never modify list while iterating`,
            `enumerate() gives index and value`
          ]
        },
        {
          id: `while-loop`,
          title: `while Loops`,
          content: `\`while condition:\` repeats until condition is falsy. Ensure the loop variable changes to avoid infinite loops.`,
          example: `n, count = 10, 0
while n > 1:
    n //= 2
    count += 1
print(f"Divided {count} times")`,
          output: `Divided 3 times`,
          keyPoints: [
            `while for unknown iteration count`,
            `Always ensure loop termination`,
            `break exits loop immediately`,
            `continue skips to next iteration`
          ]
        },
        {
          id: `loop-else`,
          title: `else, break, continue`,
          content: `Loops can have \`else\` — runs if loop completes without break. \`break\` exits; \`continue\` skips to next iteration.`,
          example: `for n in [2, 4, 6, 7, 8]:
    if n % 2 != 0:
        print(f"Found odd: {n}")
        break
else:
    print("All even")`,
          output: `Found odd: 7`,
          keyPoints: [
            `else on loops is rarely used but powerful`,
            `break exits innermost loop only`,
            `continue skips rest of iteration body`,
            `Use for-else for search patterns`
          ]
        },
        {
          id: `nested`,
          title: `Nested Loops & zip`,
          content: `Nest loops for 2D iteration. Prefer \`zip(a, b)\` to iterate multiple sequences in parallel.`,
          example: `names = ["Alice", "Bob"]
scores = [95, 87]
for name, score in zip(names, scores):
    print(f"{name}: {score}")`,
          output: `Alice: 95
Bob: 87`,
          keyPoints: [
            `zip pairs elements from iterables`,
            `Nested loops can be O(n²) — watch performance`,
            `itertools.product for Cartesian products`,
            `List comprehensions often replace simple nested loops`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-loop-1`,
          question: `Print squares of numbers 1 through 5 using a for loop.`,
          solution: `for i in range(1, 6):
    print(i ** 2)`,
          difficulty: `easy`
        },
        {
          id: `ex-loop-2`,
          question: `Sum all even numbers in [1,2,3,4,5,6,7,8] using continue.`,
          solution: `nums = [1,2,3,4,5,6,7,8]
total = 0
for n in nums:
    if n % 2 != 0:
        continue
    total += n
print(total)`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 25,
      module: `module-02`,
      references: [
        {
          id: `python-loops-doc`,
          title: `for and while Loops`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/controlflow.html#for-statements`,
          description: `Iteration over sequences, range(), and loop control with break/continue.`
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
          id: `cs106a-python`,
          title: `Stanford CS106A — Programming Methodology`,
          source: `Stanford`,
          type: `course`,
          url: `https://cs106a.stanford.edu/`,
          description: `Foundational Stanford course covering Python programming from first principles.`
        },
        {
          id: `real-python-variables`,
          title: `Variables in Python`,
          source: `Real Python`,
          type: `documentation`,
          url: `https://realpython.com/python-variables/`,
          description: `Practical guide to naming, assignment, and dynamic typing in Python.`
        }
      ]
    },
{
      id: `py-functions`,
      title: `Functions & Parameters`,
      description: `Define reusable blocks with def, parameters, return values, and docstrings.`,
      level: `beginner`,
      track: `python`,
      sections: [
        {
          id: `def-basic`,
          title: `Defining Functions`,
          content: `Use \`def name(params):\` to define functions. \`return\` sends a value back; omitting return gives \`None\`. **Docstrings** document behavior.`,
          example: `def area(radius):
    """Calculate circle area."""
    return 3.14159 * radius ** 2

print(area(5))`,
          output: `78.53975`,
          keyPoints: [
            `Functions are first-class objects`,
            `Docstrings appear in help()`,
            `return exits immediately`,
            `Functions should do one thing well`
          ]
        },
        {
          id: `params`,
          title: `Parameter Types`,
          content: `Python supports: positional, keyword, default, \`*args\` (tuple), \`**kwargs\` (dict). Order: positional, defaults, *args, keyword-only, **kwargs.`,
          example: `def greet(name, greeting="Hello", *tags, **meta):
    print(greeting, name, tags, meta)

greet("Alice", "Hi", "admin", role="dev")`,
          output: `Hi Alice ('admin',) {'role': 'dev'}`,
          keyPoints: [
            `Default args evaluated once at definition`,
            `Never use mutable defaults like []`,
            `*args collects extra positional args`,
            `**kwargs collects extra keyword args`
          ]
        },
        {
          id: `unpack`,
          title: `Unpacking Arguments`,
          content: `Unpack iterables with \`*\`: \`func(*args)\`. Unpack dicts with \`**\`: \`func(**kwargs)\`.`,
          example: `def add(a, b, c):
    return a + b + c

nums = [1, 2, 3]
print(add(*nums))`,
          output: `6`,
          keyPoints: [
            `* unpacks sequences into positional args`,
            `** unpacks dicts into keyword args`,
            `Useful for forwarding arguments`,
            `Python 3.8+ positional-only with /`
          ]
        },
        {
          id: `pure`,
          title: `Pure Functions & Side Effects`,
          content: `Pure functions: same input → same output, no side effects. Prefer pure functions for testability.

Side effects: I/O, mutation, global state.`,
          keyPoints: [
            `Pure functions are easier to test and reason about`,
            `Separate computation from I/O`,
            `Avoid global mutable state`,
            `Use return values instead of printing inside logic`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-fn-1`,
          question: `Write a function is_prime(n) returning True if n is prime.`,
          solution: `def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

print(is_prime(17))`,
          difficulty: `medium`
        },
        {
          id: `ex-fn-2`,
          question: `Write factorial(n) using recursion.`,
          solution: `def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 25,
      module: `module-02`,
      references: [
        {
          id: `python-functions-doc`,
          title: `Defining Functions`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/controlflow.html#defining-functions`,
          description: `Function definition, parameters, return values, and docstrings.`
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
      id: `py-scope`,
      title: `Scope, Closures & Lambda`,
      description: `LEGB scope rule, closures, and anonymous functions.`,
      level: `beginner`,
      track: `python`,
      sections: [
        {
          id: `legb`,
          title: `LEGB Scope Rule`,
          content: `Python resolves names: **L**ocal → **E**nclosing → **G**lobal → **B**uilt-in. Use \`global\` and \`nonlocal\` to modify outer bindings.`,
          example: `x = "global"

def outer():
    x = "enclosing"
    def inner():
        nonlocal x
        x = "modified"
    inner()
    return x

print(outer())`,
          output: `modified`,
          keyPoints: [
            `LEGB determines name lookup order`,
            `global modifies module-level names`,
            `nonlocal modifies enclosing function names`,
            `Avoid global state when possible`
          ]
        },
        {
          id: `closures`,
          title: `Closures`,
          content: `A **closure** captures variables from enclosing scope. Enables factory functions and decorators.`,
          example: `def make_multiplier(n):
    def multiply(x):
        return x * n
    return multiply

times3 = make_multiplier(3)
print(times3(7))`,
          output: `21`,
          keyPoints: [
            `Inner functions remember enclosing variables`,
            `Closures enable partial application`,
            `Foundation for decorators`,
            `Captured variables are late-binding`
          ]
        },
        {
          id: `lambda`,
          title: `Lambda Functions`,
          content: `\`lambda args: expression\` creates anonymous one-line functions. Use for short callbacks; prefer def for anything complex.`,
          example: `pairs = [(3, "c"), (1, "a"), (2, "b")]
sorted_pairs = sorted(pairs, key=lambda x: x[0])
print(sorted_pairs)`,
          output: `[(1, 'a'), (2, 'b'), (3, 'c')]`,
          keyPoints: [
            `Lambda limited to single expression`,
            `Common as key= argument to sorted/map/filter`,
            `Prefer def for named reusable functions`,
            `No statements allowed in lambda body`
          ]
        },
        {
          id: `higher`,
          title: `Higher-Order Functions`,
          content: `Functions accepting or returning functions: \`map()\`, \`filter()\`, \`sorted(key=)\`. Functional style complements loops.`,
          example: `nums = [1, 2, 3, 4, 5]
evens = list(filter(lambda x: x % 2 == 0, nums))
squares = list(map(lambda x: x**2, evens))
print(squares)`,
          output: `[4, 16]`,
          keyPoints: [
            `map/filter return iterators in Python 3`,
            `List comprehensions often replace map/filter`,
            `Higher-order functions enable composition`,
            `functools.reduce for folding`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-scope-1`,
          question: `Create a closure make_power(exp) that returns x**exp.`,
          solution: `def make_power(exp):
    return lambda x: x ** exp

sq = make_power(2)
print(sq(5))`,
          difficulty: `medium`
        },
        {
          id: `ex-scope-2`,
          question: `Sort a list of strings by length using lambda.`,
          solution: `words = ["hi", "hello", "hey"]
print(sorted(words, key=lambda w: len(w)))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-02`,
      references: [
        {
          id: `real-python-scope`,
          title: `Namespaces and Scope in Python`,
          source: `Real Python`,
          type: `documentation`,
          url: `https://realpython.com/python-namespaces-scope/`,
          description: `LEGB rule, closures, and how Python resolves variable names.`
        },
        {
          id: `python-lambda-doc`,
          title: `Lambda Expressions`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/controlflow.html#lambda-expressions`,
          description: `Anonymous functions for concise one-expression callbacks.`
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
        }
      ]
    },
{
      id: `py-comprehensions`,
      title: `Comprehensions & Iterators`,
      description: `List/dict/set comprehensions and the iterator protocol.`,
      level: `beginner`,
      track: `python`,
      sections: [
        {
          id: `list-comp`,
          title: `List Comprehensions`,
          content: `Syntax: \`[expr for item in iterable if condition]\`. Concise, readable, and often faster than equivalent loops.`,
          example: `squares = [x**2 for x in range(10) if x % 2 == 0]
print(squares)`,
          output: `[0, 4, 16, 36, 64]`,
          keyPoints: [
            `Comprehensions are Pythonic for transformations`,
            `Filter with trailing if clause`,
            `Nested comprehensions for 2D structures`,
            `Dont sacrifice readability for brevity`
          ]
        },
        {
          id: `dict-set-comp`,
          title: `Dict & Set Comprehensions`,
          content: `Dict: \`{k: v for ...}\`. Set: \`{expr for ...}\`. Powerful for building lookup tables.`,
          example: `words = ["apple", "banana", "cherry"]
lengths = {w: len(w) for w in words}
unique_lens = {len(w) for w in words}
print(lengths, unique_lens)`,
          output: `{'apple': 5, 'banana': 6, 'cherry': 6} {5, 6}`,
          keyPoints: [
            `Dict comprehensions build mappings`,
            `Set comprehensions deduplicate automatically`,
            `Use for invertible transformations`,
            `Generator expressions use () for lazy evaluation`
          ]
        },
        {
          id: `generators`,
          title: `Generator Expressions`,
          content: `\`(expr for x in iter)\` creates a lazy generator. Memory-efficient for large datasets — values computed on demand.`,
          example: `gen = (x**2 for x in range(1000000))
print(next(gen), next(gen), next(gen))`,
          output: `0 1 4`,
          keyPoints: [
            `Generators yield one value at a time`,
            `Memory O(1) regardless of range size`,
            `Exhausted generators cannot restart`,
            `Use for pipeline processing`
          ]
        },
        {
          id: `iterators`,
          title: `Iterator Protocol`,
          content: `Objects with \`__iter__()\` and \`__next__()\` are iterators. \`StopIteration\` signals end. \`iter()\` and \`next()\` built-ins interact with protocol.`,
          example: `it = iter([10, 20, 30])
print(next(it), next(it))`,
          output: `10 20`,
          keyPoints: [
            `All iterables implement __iter__`,
            `for loops use iterator protocol internally`,
            `Custom classes can implement __iter__/__next__`,
            `itertools module provides rich iterators`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-comp-1`,
          question: `Build a list of cubes for odd numbers 1-10 using comprehension.`,
          solution: `cubes = [x**3 for x in range(1, 11) if x % 2 == 1]
print(cubes)`,
          difficulty: `easy`
        },
        {
          id: `ex-comp-2`,
          question: `Create a dict mapping numbers 1-5 to their squares.`,
          solution: `sq = {x: x**2 for x in range(1, 6)}
print(sq)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-02`,
      references: [
        {
          id: `python-comprehensions-doc`,
          title: `List Comprehensions`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions`,
          description: `Concise syntax for building lists, dicts, and sets from iterables.`
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
          id: `python-loops-doc`,
          title: `for and while Loops`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/controlflow.html#for-statements`,
          description: `Iteration over sequences, range(), and loop control with break/continue.`
        },
        {
          id: `real-python-variables`,
          title: `Variables in Python`,
          source: `Real Python`,
          type: `documentation`,
          url: `https://realpython.com/python-variables/`,
          description: `Practical guide to naming, assignment, and dynamic typing in Python.`
        }
      ]
    }
];
