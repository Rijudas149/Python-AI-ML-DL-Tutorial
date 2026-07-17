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
- \`NoneType\` — absence of value`,
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
          ],
          pseudoCode: `What Are Variables?

1. Variables are references to objects, not boxes
2. Python is dynamically typed
3. Use snake_case for variable names
4. None represents absence of value`
        },
        {
          id: `literals`,
          title: `Literals & Type Conversion`,
          content: `**Literals** are fixed values written directly in code. Python supports integer literals (\`42\`), float literals (\`3.14\`), string literals (\`"hello"\`), and boolean literals (\`True\`, \`False\`).

Use built-in functions to convert between types:
- \`int()\`, \`float()\`, \`str()\`, \`bool()\`

Be careful: \`bool("False")\` is \`True\` because non-empty strings are truthy.`,
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
          ],
          pseudoCode: `Literals & Type Conversion

1. Literals represent fixed values in source code
2. Type conversion is explicit via built-in functions
3. Empty strings and zero are falsy
4. Non-empty strings convert to True in bool()`
        },
        {
          id: `mutability`,
          title: `Mutable vs Immutable Types`,
          content: `Python types fall into two categories:

**Immutable** (cannot change in place): \`int\`, \`float\`, \`str\`, \`tuple\`, \`bool\`, \`frozenset\`. Reassignment creates a new object.

**Mutable** (can change in place): \`list\`, \`dict\`, \`set\`. Operations modify the same object.

Use \`id()\` to inspect object identity.

- Strings are immutable — concatenation creates new objects
- Lists are mutable — methods modify in place
- Assignment copies references, not values
- Use id() to verify object identity`,
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
          ],
          pseudoCode: `Mutable vs Immutable Types

1. Strings are immutable — concatenation creates new objects
2. Lists are mutable — methods modify in place
3. Assignment copies references, not values
4. Use id() to verify object identity`
        },
        {
          id: `type-checking`,
          title: `Type Checking & Best Practices`,
          content: `Use \`type()\` for runtime type checks and \`isinstance()\` for inheritance-aware checks. Prefer \`isinstance(x, int)\` over \`type(x) == int\`.

For production code, use **type hints** (covered later) and tools like \`mypy\` for static analysis.

- Prefer isinstance() over type() == 
- Type hints improve readability and tooling
- Validate inputs at function boundaries
- Dynamic typing does not mean no types`,
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
      estimatedMinutes: 20,
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

- Division always returns float in Python 3
- Floor division truncates toward negative infinity
- Modulo works with negative numbers
- Use ** for powers, not ^`,
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
          ],
          pseudoCode: `Arithmetic Operators

1. Division always returns float in Python 3
2. Floor division truncates toward negative infinity
3. Modulo works with negative numbers
4. Use ** for powers, not ^`
        },
        {
          id: `compare`,
          title: `Comparison & Logical Operators`,
          content: `Comparison operators return \`bool\`: \`==\`, \`!=\`, \`<\`, \`>\`, \`<=\`, \`>=\`. Chain comparisons: \`1 < x < 10\`.

Logical: \`and\`, \`or\`, \`not\`. Short-circuit evaluation stops when result is determined.

- Chained comparisons are idiomatic Python
- and/or use short-circuit evaluation
- Use == for equality, is for identity
- not has lower precedence than comparisons`,
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
          ],
          pseudoCode: `Comparison & Logical Operators

1. Chained comparisons are idiomatic Python
2. and/or use short-circuit evaluation
3. Use == for equality, is for identity
4. not has lower precedence than comparisons`
        },
        {
          id: `assign`,
          title: `Assignment & Walrus Operator`,
          content: `Basic assignment: \`x = 5\`. Compound: \`+=\`, \`-=\`, \`*=\`, etc.

The **walrus operator** \`:=\` assigns and returns value in expressions (Python 3.8+).

- Compound operators modify and reassign
- Walrus operator reduces duplication
- Avoid overusing := — clarity first
- Assignment is a statement, not expression (except :=)`,
          example: `data = [1, 2, 3, 4, 5]
if (n := len(data)) > 3:
    print(f"List has {n} elements")`,
          output: `List has 5 elements`,
          keyPoints: [
            `Compound operators modify and reassign`,
            `Walrus operator reduces duplication`,
            `Avoid overusing := — clarity first`,
            `Assignment is a statement, not expression (except :=)`
          ],
          pseudoCode: `Assignment & Walrus Operator

1. Compound operators modify and reassign
2. Walrus operator reduces duplication
3. Avoid overusing := — clarity first
4. Assignment is a statement, not expression (except :=)`
        },
        {
          id: `bitwise`,
          title: `Bitwise & Membership Operators`,
          content: `Bitwise: \`&\`, \`|\`, \`^\`, \`~\`, \`<<\`, \`>>\` for integer manipulation.

Membership: \`in\`, \`not in\` test containment in sequences.

Identity: \`is\`, \`is not\` compare object identity (same memory address).

- Use is only for None, True, False, and singleton checks
- in works on any iterable
- Bitwise ops useful for flags and permissions
- Never use is for value comparison`,
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
          ],
          pseudoCode: `Bitwise & Membership Operators

1. Use is only for None, True, False, and singleton checks
2. in works on any iterable
3. Bitwise ops useful for flags and permissions
4. Never use is for value comparison`
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
      estimatedMinutes: 25,
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

- Strings are immutable sequences
- Negative indices count from the end
- Step in slicing enables reversal
- Triple quotes for multiline strings`,
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
          ],
          pseudoCode: `String Creation & Indexing

1. Strings are immutable sequences
2. Negative indices count from the end
3. Step in slicing enables reversal
4. Triple quotes for multiline strings`
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

- Strings have rich method API
- split/join are inverse operations
- strip removes leading/trailing whitespace
- Methods never modify original string`,
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
          ],
          pseudoCode: `Essential String Methods

1. Strings have rich method API
2. split/join are inverse operations
3. strip removes leading/trailing whitespace
4. Methods never modify original string`
        },
        {
          id: `str-format`,
          title: `f-strings & Formatting`,
          content: `**f-strings** (Python 3.6+) embed expressions: \`f"{name} is {age}"\`. Format specifiers: \`f"{pi:.2f}"\` for 2 decimal places.

- f-strings are the preferred formatting method
- Expressions evaluated at runtime inside {}
- Format specifiers control precision and alignment
- f-strings are faster than .format()`,
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
          ],
          pseudoCode: `f-strings & Formatting

1. f-strings are the preferred formatting method
2. Expressions evaluated at runtime inside {}
3. Format specifiers control precision and alignment
4. f-strings are faster than .format()`
        },
        {
          id: `str-unicode`,
          title: `Unicode & Encoding`,
          content: `Python 3 strings are Unicode by default. Encode to bytes with \`.encode("utf-8")\`, decode with \`.decode()\`. Critical for file I/O and network operations.

- str is Unicode, bytes is raw data
- Always specify encoding for file I/O
- UTF-8 handles all Unicode characters
- len() counts characters, not bytes`,
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
          ],
          pseudoCode: `Unicode & Encoding

1. str is Unicode, bytes is raw data
2. Always specify encoding for file I/O
3. UTF-8 handles all Unicode characters
4. len() counts characters, not bytes`
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
      estimatedMinutes: 25,
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

- print accepts multiple arguments
- sep and end customize formatting
- Use file= for logging to files
- flush=True for real-time output`,
          example: `print("A", "B", "C", sep="-", end="!\\n")
print("Done", flush=True)`,
          output: `A-B-C!
Done`,
          keyPoints: [
            `print accepts multiple arguments`,
            `sep and end customize formatting`,
            `Use file= for logging to files`,
            `flush=True for real-time output`
          ],
          pseudoCode: `Print Function Deep Dive

1. print accepts multiple arguments
2. sep and end customize formatting
3. Use file= for logging to files
4. flush=True for real-time output`
        },
        {
          id: `input`,
          title: `Reading User Input`,
          content: `\`input(prompt)\` reads a line from stdin as a string. Always validate and convert types explicitly.

- input() always returns a string
- Wrap in try/except for invalid input
- Validate before converting types
- Never trust user input blindly`,
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
          ],
          pseudoCode: `Reading User Input

1. input() always returns a string
2. Wrap in try/except for invalid input
3. Validate before converting types
4. Never trust user input blindly`
        },
        {
          id: `repl`,
          title: `The Python REPL`,
          content: `The **REPL** (Read-Eval-Print Loop) is an interactive shell. Launch with \`python\` or \`ipython\`. Use \`_\` for last result. \`%timeit\` in IPython benchmarks code.

- REPL is ideal for quick experiments
- _ holds the last evaluated result
- IPython adds magic commands and tab completion
- Use REPL before writing full scripts`,
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
          ],
          pseudoCode: `The Python REPL

1. REPL is ideal for quick experiments
2. _ holds the last evaluated result
3. IPython adds magic commands and tab completion
4. Use REPL before writing full scripts`
        },
        {
          id: `files-intro`,
          title: `Basic File I/O Preview`,
          content: `Open files with \`open(path, mode)\`. Always use \`with\` statement for automatic cleanup. Modes: \`"r"\`, \`"w"\`, \`"a"\`, \`"rb"\`, \`"wb"\`.

- Always use with open() as f:
- Text mode vs binary mode matters
- Specify encoding=utf-8 for text files
- File I/O covered in depth later`,
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
          ],
          pseudoCode: `Basic File I/O Preview

1. Always use with open() as f:
2. Text mode vs binary mode matters
3. Specify encoding=utf-8 for text files
4. File I/O covered in depth later`
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
      estimatedMinutes: 25,
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

- One venv per project prevents dependency conflicts
- Never install packages globally for projects
- Add .venv to .gitignore
- Use python -m pip not bare pip`,
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
          ],
          pseudoCode: `Virtual Environments

1. One venv per project prevents dependency conflicts
2. Never install packages globally for projects
3. Add .venv to .gitignore
4. Use python -m pip not bare pip`
        },
        {
          id: `pip`,
          title: `Package Management with pip`,
          content: `\`pip install package\` installs from PyPI. Pin versions: \`pip install numpy==1.26.0\`. Export: \`pip freeze > requirements.txt\`. Install from file: \`pip install -r requirements.txt\`.

- Pin major versions for reproducibility
- requirements.txt tracks dependencies
- Use pip list to see installed packages
- Consider pip-tools or poetry for advanced management`,
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
          ],
          pseudoCode: `Package Management with pip

1. Pin major versions for reproducibility
2. requirements.txt tracks dependencies
3. Use pip list to see installed packages
4. Consider pip-tools or poetry for advanced management`
        },
        {
          id: `ide`,
          title: `IDEs & Running Scripts`,
          content: `Run scripts: \`python script.py\`. Use VS Code, PyCharm, or Cursor with Python extension. Configure linter (ruff/flake8) and formatter (black).

- if __name__ == "__main__" guards script execution
- Configure linter and formatter in IDE
- Use debugger for complex bugs
- Jupyter for exploratory data work`,
          example: `if __name__ == "__main__":
    print("Script entry point")
    # Your code here`,
          output: `Script entry point`,
          keyPoints: [
            `if __name__ == "__main__" guards script execution`,
            `Configure linter and formatter in IDE`,
            `Use debugger for complex bugs`,
            `Jupyter for exploratory data work`
          ],
          pseudoCode: `IDEs & Running Scripts

1. if __name__ == "__main__" guards script execution
2. Configure linter and formatter in IDE
3. Use debugger for complex bugs
4. Jupyter for exploratory data work`
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

- Separate source, tests, and data
- Use meaningful module names
- Document setup in README
- Version control with git from day one`,
          keyPoints: [
            `Separate source, tests, and data`,
            `Use meaningful module names`,
            `Document setup in README`,
            `Version control with git from day one`
          ],
          pseudoCode: `Project Structure Basics

1. Separate source, tests, and data
2. Use meaningful module names
3. Document setup in README
4. Version control with git from day one`
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
      estimatedMinutes: 25,
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
