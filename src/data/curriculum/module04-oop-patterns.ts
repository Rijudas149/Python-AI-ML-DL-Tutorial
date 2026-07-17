import type { Topic } from '../../types';

export const module04Topics: Topic[] = [
{
      id: `py-classes`,
      title: `Classes & Objects`,
      description: `Define classes with attributes and methods using the class keyword.`,
      level: `intermediate`,
      track: `python`,
      sections: [
        {
          id: `class-basics`,
          title: `Defining Classes`,
          content: `A **class** is a blueprint; an **object** is an instance. \`__init__\` initializes instance state. \`self\` refers to the instance.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "Defining Classes" here directly affects how confidently you can build, debug, and ship python projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          example: `class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed
    def bark(self):
        return f"{self.name} says Woof!"

d = Dog("Rex", "Labrador")
print(d.bark())`,
          output: `Rex says Woof!`,
          keyPoints: [
            `__init__ is the constructor`,
            `self must be first parameter of instance methods`,
            `Instance attributes set in __init__ or elsewhere`,
            `Classes group data and behavior`,
            `Defining Classes is a foundational piece of Classes & Objects`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Defining Classes

Study checklist:
  1. __init__ is the constructor
  2. self must be first parameter of instance methods
  3. Instance attributes set in __init__ or elsewhere
  4. Classes group data and behavior
  5. Defining Classes is a foundational piece of Classes & Objects
  6. Connect this section to the python track and intermediate expectations

Topic: Classes & Objects
Track: python | Level: intermediate`
        },
        {
          id: `class-vs-instance`,
          title: `Class vs Instance Attributes`,
          content: `**Class vs Instance Attributes** is essential to **Classes & Objects**. Define classes with attributes and methods using the class keyword. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Class attributes are shared across instances. Instance attributes are per-object. Modify class attrs carefully — mutable shared state causes bugs.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "Class vs Instance Attributes" here directly affects how confidently you can build, debug, and ship python projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          example: `class Counter:
    total = 0
    def __init__(self):
        Counter.total += 1

c1, c2 = Counter(), Counter()
print(Counter.total)`,
          output: `2`,
          keyPoints: [
            `Class attributes shared by all instances`,
            `Instance attributes unique per object`,
            `Avoid mutable class-level defaults`,
            `Use class methods for factory patterns`,
            `Class vs Instance Attributes is a foundational piece of Classes & Objects`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Class vs Instance Attributes

Study checklist:
  1. Class attributes shared by all instances
  2. Instance attributes unique per object
  3. Avoid mutable class-level defaults
  4. Use class methods for factory patterns
  5. Class vs Instance Attributes is a foundational piece of Classes & Objects
  6. Connect this section to the python track and intermediate expectations

Topic: Classes & Objects
Track: python | Level: intermediate`
        },
        {
          id: `methods`,
          title: `Instance, Class & Static Methods`,
          content: `**Instance, Class & Static Methods** is essential to **Classes & Objects**. Define classes with attributes and methods using the class keyword. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

@classmethod receives cls; @staticmethod needs neither self nor cls. Use classmethod for alternative constructors.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "Instance, Class & Static Methods" here directly affects how confidently you can build, debug, and ship python projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          example: `class Date:
    def __init__(self, year, month, day):
        self.year, self.month, self.day = year, month, day
    @classmethod
    def from_string(cls, s):
        y, m, d = map(int, s.split("-"))
        return cls(y, m, d)

print(Date.from_string("2024-03-15").year)`,
          output: `2024`,
          keyPoints: [
            `classmethod for alternative constructors`,
            `staticmethod for utility functions in class namespace`,
            `Instance methods most common`,
            `Choose based on what data method needs`,
            `Instance, Class & Static Methods is a foundational piece of Classes & Objects`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Instance, Class & Static Methods

Study checklist:
  1. classmethod for alternative constructors
  2. staticmethod for utility functions in class namespace
  3. Instance methods most common
  4. Choose based on what data method needs
  5. Instance, Class & Static Methods is a foundational piece of Classes & Objects
  6. Connect this section to the python track and intermediate expectations

Topic: Classes & Objects
Track: python | Level: intermediate`
        },
        {
          id: `dunder`,
          title: `Special Methods (Dunder)`,
          content: `**Special Methods (Dunder)** is essential to **Classes & Objects**. Define classes with attributes and methods using the class keyword. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Double-underscore methods customize behavior: \`__str__\`, \`__repr__\`, \`__len__\`, \`__eq__\`, \`__add__\`. Enable Pythonic interfaces.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "Special Methods (Dunder)" here directly affects how confidently you can build, debug, and ship python projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          example: `class Vector:
    def __init__(self, x, y):
        self.x, self.y = x, y
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

print(Vector(1, 2) + Vector(3, 4))`,
          output: `Vector(4, 6)`,
          keyPoints: [
            `__repr__ for developers, __str__ for users`,
            `Operator overloading via dunder methods`,
            `__eq__ for equality comparison`,
            `Follow Python data model conventions`,
            `Special Methods (Dunder) is a foundational piece of Classes & Objects`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Special Methods (Dunder)

Study checklist:
  1. __repr__ for developers, __str__ for users
  2. Operator overloading via dunder methods
  3. __eq__ for equality comparison
  4. Follow Python data model conventions
  5. Special Methods (Dunder) is a foundational piece of Classes & Objects
  6. Connect this section to the python track and intermediate expectations

Topic: Classes & Objects
Track: python | Level: intermediate`
        },
        {
          id: `py-classes-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Classes & Objects** sits in the **python** track of the Data Science Master curriculum. Define classes with attributes and methods using the class keyword.

**Theoretical foundation:** Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

For **py-classes**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
          example: `# Concept check for Classes & Objects
meta = {"topic_id": "py-classes", "track": "python", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `py-classes python intermediate`,
          keyPoints: [
            `Core theory of Classes & Objects ties to the python track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Classes & Objects ties to the python track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Classes & Objects
Track: python | Level: intermediate`
        },
        {
          id: `py-classes-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Classes & Objects**. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **py-classes**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for py-classes
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("py-classes", "Classes & Objects")
print(ref.topic_id, ref.title.split()[0])`,
          output: `py-classes Classes`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with python ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with python ecosystem conventions

Topic: Classes & Objects
Track: python | Level: intermediate`
        },
        {
          id: `py-classes-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Classes & Objects** often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

When stuck on **py-classes**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:** The best debuggers narrow the search space in minutes by changing one variable at a time.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("py-classes", "Classes & Objects")
debug_step("section_count", 4)`,
          output: `[py-classes] 'Classes & Objects' (str)
[section_count] 4`,
          keyPoints: [
            `Reduce to the smallest failing example`,
            `Log intermediate values with types`,
            `Bisect changes with git or notebook history`,
            `Separate data bugs from logic bugs`,
            `Record seeds, versions, and hardware context`,
            `Fix root cause—not symptoms with silent catches`
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: Classes & Objects
Track: python | Level: intermediate`
        },
        {
          id: `py-classes-real-world`,
          title: `Real-World Applications`,
          content: `**Classes & Objects** shows up wherever **python** skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

Teams shipping features around **py-classes** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Classes & Objects
skills = ["python", "intermediate", "py-classes"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: python, intermediate, py-classes`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Classes & Objects to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Classes & Objects to adjacent topics in the same track

Topic: Classes & Objects
Track: python | Level: intermediate`
        }
      ],
      exercises: [
        {
          id: `ex-class-1`,
          question: `Create a Rectangle class with width, height, and area() method.`,
          solution: `class Rectangle:
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return self.w * self.h

print(Rectangle(4, 5).area())`,
          difficulty: `easy`
        },
        {
          id: `ex-class-2`,
          question: `Add __repr__ to Rectangle showing dimensions.`,
          solution: `class Rectangle:
    def __init__(self, w, h):
        self.w, self.h = w, h
    def area(self):
        return self.w * self.h
    def __repr__(self):
        return f"Rectangle({self.w}x{self.h})"

print(Rectangle(4, 5))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 124,
      module: `module-04`,
      references: [
        {
          id: `python-classes-doc`,
          title: `Classes`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/classes.html`,
          description: `Class definition, instances, methods, and inheritance fundamentals.`
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
      id: `py-inheritance`,
      title: `Inheritance & Polymorphism`,
      description: `Extend classes, override methods, and use polymorphic behavior.`,
      level: `intermediate`,
      track: `python`,
      sections: [
        {
          id: `inheritance`,
          title: `Basic Inheritance`,
          content: `**Basic Inheritance** is essential to **Inheritance & Polymorphism**. Extend classes, override methods, and use polymorphic behavior. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Subclass inherits parent attributes and methods. \`super()\` calls parent implementation. Override methods in child class.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "Basic Inheritance" here directly affects how confidently you can build, debug, and ship python projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          example: `class Animal:
    def speak(self):
        return "..."

class Cat(Animal):
    def speak(self):
        return "Meow"

class Dog(Animal):
    def speak(self):
        return "Woof"

for a in [Cat(), Dog()]:
    print(a.speak())`,
          output: `Meow
Woof`,
          keyPoints: [
            `Inheritance enables code reuse`,
            `Override methods for specialized behavior`,
            `super() accesses parent methods`,
            `Polymorphism: same interface, different behavior`,
            `Basic Inheritance is a foundational piece of Inheritance & Polymorphism`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Basic Inheritance

Study checklist:
  1. Inheritance enables code reuse
  2. Override methods for specialized behavior
  3. super() accesses parent methods
  4. Polymorphism: same interface, different behavior
  5. Basic Inheritance is a foundational piece of Inheritance & Polymorphism
  6. Connect this section to the python track and intermediate expectations

Topic: Inheritance & Polymorphism
Track: python | Level: intermediate`
        },
        {
          id: `mro`,
          title: `Method Resolution Order (MRO)`,
          content: `**Method Resolution Order (MRO)** is essential to **Inheritance & Polymorphism**. Extend classes, override methods, and use polymorphic behavior. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Python uses C3 linearization for MRO. Check with \`ClassName.mro()\`. Multiple inheritance requires careful design.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "Method Resolution Order (MRO)" here directly affects how confidently you can build, debug, and ship python projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          example: `class A:
    def method(self): return "A"
class B(A):
    def method(self): return "B"
class C(A):
    def method(self): return "C"
class D(B, C): pass

print(D().method())
print([c.__name__ for c in D.mro()])`,
          output: `B
['D', 'B', 'C', 'A', 'object']`,
          keyPoints: [
            `MRO determines method lookup order`,
            `Diamond inheritance resolved by C3`,
            `Prefer composition over deep inheritance`,
            `Use mixins for shared behavior`,
            `Method Resolution Order (MRO) is a foundational piece of Inheritance & Polymorphism`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Method Resolution Order (MRO)

Study checklist:
  1. MRO determines method lookup order
  2. Diamond inheritance resolved by C3
  3. Prefer composition over deep inheritance
  4. Use mixins for shared behavior
  5. Method Resolution Order (MRO) is a foundational piece of Inheritance & Polymorphism
  6. Connect this section to the python track and intermediate expectations

Topic: Inheritance & Polymorphism
Track: python | Level: intermediate`
        },
        {
          id: `abstract`,
          title: `Abstract Base Classes`,
          content: `**Abstract Base Classes** is essential to **Inheritance & Polymorphism**. Extend classes, override methods, and use polymorphic behavior. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

abc module defines interfaces. @abstractmethod forces subclass implementation. Enables contract-based design.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "Abstract Base Classes" here directly affects how confidently you can build, debug, and ship python projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          example: `from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, r):
        self.r = r
    def area(self):
        return 3.14159 * self.r ** 2

print(Circle(5).area())`,
          output: `78.53975`,
          keyPoints: [
            `ABC enforces interface contracts`,
            `Cannot instantiate ABC with abstract methods`,
            `Useful for plugin architectures`,
            `Protocol (typing) is duck-typing alternative`,
            `Abstract Base Classes is a foundational piece of Inheritance & Polymorphism`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Abstract Base Classes

Study checklist:
  1. ABC enforces interface contracts
  2. Cannot instantiate ABC with abstract methods
  3. Useful for plugin architectures
  4. Protocol (typing) is duck-typing alternative
  5. Abstract Base Classes is a foundational piece of Inheritance & Polymorphism
  6. Connect this section to the python track and intermediate expectations

Topic: Inheritance & Polymorphism
Track: python | Level: intermediate`
        },
        {
          id: `composition`,
          title: `Composition Over Inheritance`,
          content: `Favor **has-a** over **is-a**. Compose objects rather than deep inheritance hierarchies. More flexible and testable.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "Composition Over Inheritance" here directly affects how confidently you can build, debug, and ship python projects.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Composition reduces coupling`,
            `Easier to swap implementations`,
            `Inheritance for true is-a relationships only`,
            `Dependency injection supports composition`,
            `Composition Over Inheritance is a foundational piece of Inheritance & Polymorphism`,
            `Connect this section to the python track and intermediate expectations`
          ],
          example: `# Concept check: Composition Over Inheritance
meta = {
    "topic": "py-inheritance",
    "section": "composition",
    "track": "python",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: py-inheritance
section: composition
track: python
level: intermediate`,
          pseudoCode: `CONCEPT: Composition Over Inheritance

Study checklist:
  1. Composition reduces coupling
  2. Easier to swap implementations
  3. Inheritance for true is-a relationships only
  4. Dependency injection supports composition
  5. Composition Over Inheritance is a foundational piece of Inheritance & Polymorphism
  6. Connect this section to the python track and intermediate expectations

Topic: Inheritance & Polymorphism
Track: python | Level: intermediate`
        },
        {
          id: `py-inheritance-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Inheritance & Polymorphism** sits in the **python** track of the Data Science Master curriculum. Extend classes, override methods, and use polymorphic behavior.

**Theoretical foundation:** Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

For **py-inheritance**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
          example: `# Concept check for Inheritance & Polymorphism
meta = {"topic_id": "py-inheritance", "track": "python", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `py-inheritance python intermediate`,
          keyPoints: [
            `Core theory of Inheritance & Polymorphism ties to the python track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Inheritance & Polymorphism ties to the python track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Inheritance & Polymorphism
Track: python | Level: intermediate`
        },
        {
          id: `py-inheritance-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Inheritance & Polymorphism**. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **py-inheritance**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for py-inheritance
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("py-inheritance", "Inheritance & Polymorphism")
print(ref.topic_id, ref.title.split()[0])`,
          output: `py-inheritance Inheritance`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with python ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with python ecosystem conventions

Topic: Inheritance & Polymorphism
Track: python | Level: intermediate`
        },
        {
          id: `py-inheritance-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Inheritance & Polymorphism** often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

When stuck on **py-inheritance**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:** The best debuggers narrow the search space in minutes by changing one variable at a time.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("py-inheritance", "Inheritance & Polymorphism")
debug_step("section_count", 4)`,
          output: `[py-inheritance] 'Inheritance & Polymorphism' (str)
[section_count] 4`,
          keyPoints: [
            `Reduce to the smallest failing example`,
            `Log intermediate values with types`,
            `Bisect changes with git or notebook history`,
            `Separate data bugs from logic bugs`,
            `Record seeds, versions, and hardware context`,
            `Fix root cause—not symptoms with silent catches`
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: Inheritance & Polymorphism
Track: python | Level: intermediate`
        },
        {
          id: `py-inheritance-real-world`,
          title: `Real-World Applications`,
          content: `**Inheritance & Polymorphism** shows up wherever **python** skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

Teams shipping features around **py-inheritance** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Inheritance & Polymorphism
skills = ["python", "intermediate", "py-inheritance"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: python, intermediate, py-inheritance`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Inheritance & Polymorphism to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Inheritance & Polymorphism to adjacent topics in the same track

Topic: Inheritance & Polymorphism
Track: python | Level: intermediate`
        }
      ],
      exercises: [
        {
          id: `ex-inherit-1`,
          question: `Create Vehicle base and Car subclass with overridden start() method.`,
          solution: `class Vehicle:
    def start(self):
        return "Engine starting"

class Car(Vehicle):
    def start(self):
        return "Car engine starting"

print(Car().start())`,
          difficulty: `easy`
        },
        {
          id: `ex-inherit-2`,
          question: `Use super() in Car.start() to call parent then add message.`,
          solution: `class Vehicle:
    def start(self):
        return "Engine starting"

class Car(Vehicle):
    def start(self):
        return super().start() + " - Car ready"

print(Car().start())`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 124,
      module: `module-04`,
      references: [
        {
          id: `python-inheritance-doc`,
          title: `Inheritance`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/classes.html#inheritance`,
          description: `Base classes, method overriding, isinstance(), and multiple inheritance.`
        },
        {
          id: `python-classes-doc`,
          title: `Classes`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/classes.html`,
          description: `Class definition, instances, methods, and inheritance fundamentals.`
        },
        {
          id: `python-abc-doc`,
          title: `abc — Abstract Base Classes`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/library/abc.html`,
          description: `Define interfaces and enforce method implementation in subclasses.`
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
      id: `py-encapsulation`,
      title: `Encapsulation & Properties`,
      description: `Hide internal state and control access with properties and naming conventions.`,
      level: `intermediate`,
      track: `python`,
      sections: [
        {
          id: `naming`,
          title: `Naming Conventions`,
          content: `**Naming Conventions** is essential to **Encapsulation & Properties**. Hide internal state and control access with properties and naming conventions. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Single underscore \`_internal\` — convention for internal use. Double underscore \`__private\` triggers name mangling. No true private access in Python.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "Naming Conventions" here directly affects how confidently you can build, debug, and ship python projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          example: `class Account:
    def __init__(self, balance):
        self.__balance = balance
    def get_balance(self):
        return self.__balance

acc = Account(1000)
print(acc.get_balance())`,
          output: `1000`,
          keyPoints: [
            `Python uses convention, not enforcement`,
            `Name mangling prevents accidental override in subclasses`,
            `Public API should be minimal and stable`,
            `Document internal vs public attributes`,
            `Naming Conventions is a foundational piece of Encapsulation & Properties`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Naming Conventions

Study checklist:
  1. Python uses convention, not enforcement
  2. Name mangling prevents accidental override in subclasses
  3. Public API should be minimal and stable
  4. Document internal vs public attributes
  5. Naming Conventions is a foundational piece of Encapsulation & Properties
  6. Connect this section to the python track and intermediate expectations

Topic: Encapsulation & Properties
Track: python | Level: intermediate`
        },
        {
          id: `property`,
          title: `The @property Decorator`,
          content: `**The @property Decorator** is essential to **Encapsulation & Properties**. Hide internal state and control access with properties and naming conventions. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

@property creates getter; @name.setter and @name.deleter for setter/deleter. Clean attribute-like access with validation.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "The @property Decorator" here directly affects how confidently you can build, debug, and ship python projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          example: `class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius
    @property
    def fahrenheit(self):
        return self._celsius * 9/5 + 32
    @fahrenheit.setter
    def fahrenheit(self, value):
        self._celsius = (value - 32) * 5/9

t = Temperature(100)
print(t.fahrenheit)`,
          output: `212.0`,
          keyPoints: [
            `Properties enable computed attributes`,
            `Validation in setters protects invariants`,
            `Prefer properties over get/set methods`,
            `Use _prefix for backing storage`,
            `The @property Decorator is a foundational piece of Encapsulation & Properties`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: The @property Decorator

Study checklist:
  1. Properties enable computed attributes
  2. Validation in setters protects invariants
  3. Prefer properties over get/set methods
  4. Use _prefix for backing storage
  5. The @property Decorator is a foundational piece of Encapsulation & Properties
  6. Connect this section to the python track and intermediate expectations

Topic: Encapsulation & Properties
Track: python | Level: intermediate`
        },
        {
          id: `slots`,
          title: `__slots__ for Memory`,
          content: `**__slots__ for Memory** is essential to **Encapsulation & Properties**. Hide internal state and control access with properties and naming conventions. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

__slots__ restricts attributes and saves memory. No __dict__ created. Useful for many small objects.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "__slots__ for Memory" here directly affects how confidently you can build, debug, and ship python projects.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `__slots__ reduces memory per instance`,
            `Fixes allowed attributes at class definition`,
            `Breaks if multiple inheritance conflicts`,
            `Rarely needed unless profiling shows benefit`,
            `__slots__ for Memory is a foundational piece of Encapsulation & Properties`,
            `Connect this section to the python track and intermediate expectations`
          ],
          example: `# Concept check: __slots__ for Memory
meta = {
    "topic": "py-encapsulation",
    "section": "slots",
    "track": "python",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: py-encapsulation
section: slots
track: python
level: intermediate`,
          pseudoCode: `CONCEPT: __slots__ for Memory

Study checklist:
  1. __slots__ reduces memory per instance
  2. Fixes allowed attributes at class definition
  3. Breaks if multiple inheritance conflicts
  4. Rarely needed unless profiling shows benefit
  5. __slots__ for Memory is a foundational piece of Encapsulation & Properties
  6. Connect this section to the python track and intermediate expectations

Topic: Encapsulation & Properties
Track: python | Level: intermediate`
        },
        {
          id: `dataclass-preview`,
          title: `dataclass Preview`,
          content: `**dataclass Preview** is essential to **Encapsulation & Properties**. Hide internal state and control access with properties and naming conventions. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

@dataclass auto-generates __init__, __repr__, __eq__. Modern alternative to boilerplate classes.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "dataclass Preview" here directly affects how confidently you can build, debug, and ship python projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          example: `from dataclasses import dataclass

@dataclass
class Point:
    x: float
    y: float

print(Point(1.0, 2.0))`,
          output: `Point(x=1.0, y=2.0)`,
          keyPoints: [
            `dataclass reduces boilerplate`,
            `Type hints define fields`,
            `frozen=True for immutability`,
            `field(default_factory=list) for mutable defaults`,
            `dataclass Preview is a foundational piece of Encapsulation & Properties`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: dataclass Preview

Study checklist:
  1. dataclass reduces boilerplate
  2. Type hints define fields
  3. frozen=True for immutability
  4. field(default_factory=list) for mutable defaults
  5. dataclass Preview is a foundational piece of Encapsulation & Properties
  6. Connect this section to the python track and intermediate expectations

Topic: Encapsulation & Properties
Track: python | Level: intermediate`
        },
        {
          id: `py-encapsulation-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Encapsulation & Properties** sits in the **python** track of the Data Science Master curriculum. Hide internal state and control access with properties and naming conventions.

**Theoretical foundation:** Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

For **py-encapsulation**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
          example: `# Concept check for Encapsulation & Properties
meta = {"topic_id": "py-encapsulation", "track": "python", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `py-encapsulation python intermediate`,
          keyPoints: [
            `Core theory of Encapsulation & Properties ties to the python track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Encapsulation & Properties ties to the python track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Encapsulation & Properties
Track: python | Level: intermediate`
        },
        {
          id: `py-encapsulation-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Encapsulation & Properties**. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **py-encapsulation**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for py-encapsulation
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("py-encapsulation", "Encapsulation & Properties")
print(ref.topic_id, ref.title.split()[0])`,
          output: `py-encapsulation Encapsulation`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with python ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with python ecosystem conventions

Topic: Encapsulation & Properties
Track: python | Level: intermediate`
        },
        {
          id: `py-encapsulation-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Encapsulation & Properties** often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

When stuck on **py-encapsulation**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:** The best debuggers narrow the search space in minutes by changing one variable at a time.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("py-encapsulation", "Encapsulation & Properties")
debug_step("section_count", 4)`,
          output: `[py-encapsulation] 'Encapsulation & Properties' (str)
[section_count] 4`,
          keyPoints: [
            `Reduce to the smallest failing example`,
            `Log intermediate values with types`,
            `Bisect changes with git or notebook history`,
            `Separate data bugs from logic bugs`,
            `Record seeds, versions, and hardware context`,
            `Fix root cause—not symptoms with silent catches`
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: Encapsulation & Properties
Track: python | Level: intermediate`
        },
        {
          id: `py-encapsulation-real-world`,
          title: `Real-World Applications`,
          content: `**Encapsulation & Properties** shows up wherever **python** skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

Teams shipping features around **py-encapsulation** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Encapsulation & Properties
skills = ["python", "intermediate", "py-encapsulation"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: python, intermediate, py-encapsulation`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Encapsulation & Properties to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Encapsulation & Properties to adjacent topics in the same track

Topic: Encapsulation & Properties
Track: python | Level: intermediate`
        }
      ],
      exercises: [
        {
          id: `ex-encap-1`,
          question: `Create a property celsius that validates value >= -273.15.`,
          solution: `class Temp:
    def __init__(self, c):
        self._c = c
    @property
    def celsius(self):
        return self._c
    @celsius.setter
    def celsius(self, v):
        if v < -273.15:
            raise ValueError("Below absolute zero")
        self._c = v

t = Temp(25)
print(t.celsius)`,
          difficulty: `medium`
        },
        {
          id: `ex-encap-2`,
          question: `Use @dataclass to create a Book with title and author.`,
          solution: `from dataclasses import dataclass

@dataclass
class Book:
    title: str
    author: str

print(Book("1984", "Orwell"))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 124,
      module: `module-04`,
      references: [
        {
          id: `python-properties-doc`,
          title: `property — Attribute Access`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/library/functions.html#property`,
          description: `Managed attributes with getters, setters, and encapsulation patterns.`
        },
        {
          id: `python-classes-doc`,
          title: `Classes`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/classes.html`,
          description: `Class definition, instances, methods, and inheritance fundamentals.`
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
      id: `py-patterns`,
      title: `Design Patterns in Python`,
      description: `Singleton, Factory, Observer, Strategy, and other common patterns.`,
      level: `intermediate`,
      track: `python`,
      sections: [
        {
          id: `factory`,
          title: `Factory Pattern`,
          content: `**Factory Pattern** is essential to **Design Patterns in Python**. Singleton, Factory, Observer, Strategy, and other common patterns. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Factory method creates objects without specifying exact class. Decouples instantiation from usage.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "Factory Pattern" here directly affects how confidently you can build, debug, and ship python projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          example: `class Dog:
    def speak(self): return "Woof"
class Cat:
    def speak(self): return "Meow"

def animal_factory(kind):
    return {"dog": Dog, "cat": Cat}[kind]()

print(animal_factory("dog").speak())`,
          output: `Woof`,
          keyPoints: [
            `Factory centralizes object creation`,
            `Easy to add new types`,
            `Registry pattern extends factory`,
            `Used heavily in ML model loading`,
            `Factory Pattern is a foundational piece of Design Patterns in Python`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Factory Pattern

Study checklist:
  1. Factory centralizes object creation
  2. Easy to add new types
  3. Registry pattern extends factory
  4. Used heavily in ML model loading
  5. Factory Pattern is a foundational piece of Design Patterns in Python
  6. Connect this section to the python track and intermediate expectations

Topic: Design Patterns in Python
Track: python | Level: intermediate`
        },
        {
          id: `strategy`,
          title: `Strategy Pattern`,
          content: `**Strategy Pattern** is essential to **Design Patterns in Python**. Singleton, Factory, Observer, Strategy, and other common patterns. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Encapsulate algorithms as interchangeable strategies. Pass strategy as parameter or inject at runtime.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "Strategy Pattern" here directly affects how confidently you can build, debug, and ship python projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          example: `class QuickSort:
    def sort(self, data): return sorted(data)

class ReverseSort:
    def sort(self, data): return sorted(data, reverse=True)

class Sorter:
    def __init__(self, strategy):
        self.strategy = strategy
    def sort(self, data):
        return self.strategy.sort(data)

print(Sorter(ReverseSort()).sort([3,1,2]))`,
          output: `[3, 2, 1]`,
          keyPoints: [
            `Strategy enables runtime algorithm selection`,
            `Open/closed principle — extend without modifying`,
            `Functions can serve as strategies in Python`,
            `Common in ML preprocessing pipelines`,
            `Strategy Pattern is a foundational piece of Design Patterns in Python`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Strategy Pattern

Study checklist:
  1. Strategy enables runtime algorithm selection
  2. Open/closed principle — extend without modifying
  3. Functions can serve as strategies in Python
  4. Common in ML preprocessing pipelines
  5. Strategy Pattern is a foundational piece of Design Patterns in Python
  6. Connect this section to the python track and intermediate expectations

Topic: Design Patterns in Python
Track: python | Level: intermediate`
        },
        {
          id: `observer`,
          title: `Observer Pattern`,
          content: `**Observer Pattern** is essential to **Design Patterns in Python**. Singleton, Factory, Observer, Strategy, and other common patterns. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Subject notifies observers on state change. Basis for event systems and reactive programming.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "Observer Pattern" here directly affects how confidently you can build, debug, and ship python projects.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Decouples subject from observers`,
            `Used in GUI event handling`,
            `Callbacks are lightweight Python observers`,
            `Consider asyncio for async event patterns`,
            `Observer Pattern is a foundational piece of Design Patterns in Python`,
            `Connect this section to the python track and intermediate expectations`
          ],
          example: `# Concept check: Observer Pattern
meta = {
    "topic": "py-patterns",
    "section": "observer",
    "track": "python",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: py-patterns
section: observer
track: python
level: intermediate`,
          pseudoCode: `CONCEPT: Observer Pattern

Study checklist:
  1. Decouples subject from observers
  2. Used in GUI event handling
  3. Callbacks are lightweight Python observers
  4. Consider asyncio for async event patterns
  5. Observer Pattern is a foundational piece of Design Patterns in Python
  6. Connect this section to the python track and intermediate expectations

Topic: Design Patterns in Python
Track: python | Level: intermediate`
        },
        {
          id: `singleton`,
          title: `Singleton & Module Pattern`,
          content: `**Singleton & Module Pattern** is essential to **Design Patterns in Python**. Singleton, Factory, Observer, Strategy, and other common patterns. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Python modules are natural singletons. For classes, use __new__ or decorator. Often modules suffice.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "Singleton & Module Pattern" here directly affects how confidently you can build, debug, and ship python projects.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Module-level objects are singletons by default`,
            `Avoid overusing Singleton pattern`,
            `Dependency injection preferred for testability`,
            `lru_cache can implement function singletons`,
            `Singleton & Module Pattern is a foundational piece of Design Patterns in Python`,
            `Connect this section to the python track and intermediate expectations`
          ],
          example: `# Concept check: Singleton & Module Pattern
meta = {
    "topic": "py-patterns",
    "section": "singleton",
    "track": "python",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: py-patterns
section: singleton
track: python
level: intermediate`,
          pseudoCode: `CONCEPT: Singleton & Module Pattern

Study checklist:
  1. Module-level objects are singletons by default
  2. Avoid overusing Singleton pattern
  3. Dependency injection preferred for testability
  4. lru_cache can implement function singletons
  5. Singleton & Module Pattern is a foundational piece of Design Patterns in Python
  6. Connect this section to the python track and intermediate expectations

Topic: Design Patterns in Python
Track: python | Level: intermediate`
        },
        {
          id: `py-patterns-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Design Patterns in Python** sits in the **python** track of the Data Science Master curriculum. Singleton, Factory, Observer, Strategy, and other common patterns.

**Theoretical foundation:** Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

For **py-patterns**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
          example: `# Concept check for Design Patterns in Python
meta = {"topic_id": "py-patterns", "track": "python", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `py-patterns python intermediate`,
          keyPoints: [
            `Core theory of Design Patterns in Python ties to the python track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Design Patterns in Python ties to the python track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Design Patterns in Python
Track: python | Level: intermediate`
        },
        {
          id: `py-patterns-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Design Patterns in Python**. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **py-patterns**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for py-patterns
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("py-patterns", "Design Patterns in Python")
print(ref.topic_id, ref.title.split()[0])`,
          output: `py-patterns Design`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with python ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with python ecosystem conventions

Topic: Design Patterns in Python
Track: python | Level: intermediate`
        },
        {
          id: `py-patterns-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Design Patterns in Python** often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

When stuck on **py-patterns**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:** The best debuggers narrow the search space in minutes by changing one variable at a time.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("py-patterns", "Design Patterns in Python")
debug_step("section_count", 4)`,
          output: `[py-patterns] 'Design Patterns in Python' (str)
[section_count] 4`,
          keyPoints: [
            `Reduce to the smallest failing example`,
            `Log intermediate values with types`,
            `Bisect changes with git or notebook history`,
            `Separate data bugs from logic bugs`,
            `Record seeds, versions, and hardware context`,
            `Fix root cause—not symptoms with silent catches`
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: Design Patterns in Python
Track: python | Level: intermediate`
        },
        {
          id: `py-patterns-real-world`,
          title: `Real-World Applications`,
          content: `**Design Patterns in Python** shows up wherever **python** skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

Teams shipping features around **py-patterns** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Design Patterns in Python
skills = ["python", "intermediate", "py-patterns"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: python, intermediate, py-patterns`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Design Patterns in Python to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Design Patterns in Python to adjacent topics in the same track

Topic: Design Patterns in Python
Track: python | Level: intermediate`
        }
      ],
      exercises: [
        {
          id: `ex-pattern-1`,
          question: `Implement a simple factory returning list, dict, or set based on string.`,
          solution: `def factory(kind):
    return {"list": list, "dict": dict, "set": set}[kind]

print(factory("list")([1,2]))`,
          difficulty: `easy`
        },
        {
          id: `ex-pattern-2`,
          question: `Implement Strategy with MinStrategy and MaxStrategy for finding min/max in a list.`,
          solution: `class MinStrategy:
    def find(self, d): return min(d)
class MaxStrategy:
    def find(self, d): return max(d)

def analyze(data, strategy):
    return strategy.find(data)

print(analyze([3,1,4], MinStrategy()))`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 124,
      module: `module-04`,
      references: [
        {
          id: `python-design-patterns`,
          title: `Python Design Patterns Guide`,
          source: `Refactoring Guru`,
          type: `documentation`,
          url: `https://refactoring.guru/design-patterns/python`,
          description: `Catalog of creational, structural, and behavioral patterns in Python.`
        },
        {
          id: `python-classes-doc`,
          title: `Classes`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/classes.html`,
          description: `Class definition, instances, methods, and inheritance fundamentals.`
        },
        {
          id: `python-abc-doc`,
          title: `abc — Abstract Base Classes`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/library/abc.html`,
          description: `Define interfaces and enforce method implementation in subclasses.`
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
      id: `py-protocols`,
      title: `Abstract Base Classes & Protocols`,
      description: `typing.Protocol for structural subtyping and modern Python interfaces.`,
      level: `intermediate`,
      track: `python`,
      sections: [
        {
          id: `protocol`,
          title: `typing.Protocol`,
          content: `**typing.Protocol** is essential to **Abstract Base Classes & Protocols**. typing.Protocol for structural subtyping and modern Python interfaces. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Protocol defines structural interface — if it walks like a duck... No inheritance required. \`@runtime_checkable\` enables isinstance().

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "typing.Protocol" here directly affects how confidently you can build, debug, and ship python projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          example: `from typing import Protocol

class Drawable(Protocol):
    def draw(self) -> str: ...

def render(shape: Drawable) -> str:
    return shape.draw()

class Circle:
    def draw(self): return "O"

print(render(Circle()))`,
          output: `O`,
          keyPoints: [
            `Protocol enables duck typing with type checking`,
            `No need to inherit from Protocol`,
            `runtime_checkable for isinstance checks`,
            `Preferred over ABC for flexible interfaces`,
            `typing.Protocol is a foundational piece of Abstract Base Classes & Protocols`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: typing.Protocol

Study checklist:
  1. Protocol enables duck typing with type checking
  2. No need to inherit from Protocol
  3. runtime_checkable for isinstance checks
  4. Preferred over ABC for flexible interfaces
  5. typing.Protocol is a foundational piece of Abstract Base Classes & Protocols
  6. Connect this section to the python track and intermediate expectations

Topic: Abstract Base Classes & Protocols
Track: python | Level: intermediate`
        },
        {
          id: `abc-vs-protocol`,
          title: `ABC vs Protocol`,
          content: `**ABC vs Protocol** is essential to **Abstract Base Classes & Protocols**. typing.Protocol for structural subtyping and modern Python interfaces. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

ABC: nominal subtyping — must inherit. Protocol: structural — must implement methods. Choose based on design needs.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "ABC vs Protocol" here directly affects how confidently you can build, debug, and ship python projects.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `ABC for strict hierarchies and shared implementation`,
            `Protocol for flexible third-party integration`,
            `Both supported by mypy and pyright`,
            `ML frameworks use Protocol for tensor-like objects`,
            `ABC vs Protocol is a foundational piece of Abstract Base Classes & Protocols`,
            `Connect this section to the python track and intermediate expectations`
          ],
          example: `# Concept check: ABC vs Protocol
meta = {
    "topic": "py-protocols",
    "section": "abc-vs-protocol",
    "track": "python",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: py-protocols
section: abc-vs-protocol
track: python
level: intermediate`,
          pseudoCode: `CONCEPT: ABC vs Protocol

Study checklist:
  1. ABC for strict hierarchies and shared implementation
  2. Protocol for flexible third-party integration
  3. Both supported by mypy and pyright
  4. ML frameworks use Protocol for tensor-like objects
  5. ABC vs Protocol is a foundational piece of Abstract Base Classes & Protocols
  6. Connect this section to the python track and intermediate expectations

Topic: Abstract Base Classes & Protocols
Track: python | Level: intermediate`
        },
        {
          id: `generic`,
          title: `Generic Classes`,
          content: `**Generic Classes** is essential to **Abstract Base Classes & Protocols**. typing.Protocol for structural subtyping and modern Python interfaces. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

typing.Generic enables type-parameterized classes: \`class Stack[T]:\`. Python 3.12+ simplified syntax.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "Generic Classes" here directly affects how confidently you can build, debug, and ship python projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          example: `from typing import TypeVar, Generic

T = TypeVar("T")

class Box(Generic[T]):
    def __init__(self, item: T):
        self.item = item

b = Box[int](42)
print(b.item)`,
          output: `42`,
          keyPoints: [
            `Generics preserve type information`,
            `TypeVar defines type parameters`,
            `Python 3.12: class Box[T] syntax`,
            `Useful for containers and data structures`,
            `Generic Classes is a foundational piece of Abstract Base Classes & Protocols`,
            `Connect this section to the python track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Generic Classes

Study checklist:
  1. Generics preserve type information
  2. TypeVar defines type parameters
  3. Python 3.12: class Box[T] syntax
  4. Useful for containers and data structures
  5. Generic Classes is a foundational piece of Abstract Base Classes & Protocols
  6. Connect this section to the python track and intermediate expectations

Topic: Abstract Base Classes & Protocols
Track: python | Level: intermediate`
        },
        {
          id: `solid`,
          title: `SOLID Principles`,
          content: `**SOLID Principles** is essential to **Abstract Base Classes & Protocols**. typing.Protocol for structural subtyping and modern Python interfaces. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Single responsibility, Open/closed, Liskov substitution, Interface segregation, Dependency inversion. Guide maintainable OOP design.

**Why this matters:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. Mastering "SOLID Principles" here directly affects how confidently you can build, debug, and ship python projects.

**Professional habits:** Write small scripts first, then refactor into reusable functions with type hints and docstrings. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Single Responsibility: one reason to change`,
            `Open/Closed: extend without modifying`,
            `Liskov: subtypes must be substitutable`,
            `Apply pragmatically — not every class needs all five`,
            `SOLID Principles is a foundational piece of Abstract Base Classes & Protocols`,
            `Connect this section to the python track and intermediate expectations`
          ],
          example: `# Concept check: SOLID Principles
meta = {
    "topic": "py-protocols",
    "section": "solid",
    "track": "python",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: py-protocols
section: solid
track: python
level: intermediate`,
          pseudoCode: `CONCEPT: SOLID Principles

Study checklist:
  1. Single Responsibility: one reason to change
  2. Open/Closed: extend without modifying
  3. Liskov: subtypes must be substitutable
  4. Apply pragmatically — not every class needs all five
  5. SOLID Principles is a foundational piece of Abstract Base Classes & Protocols
  6. Connect this section to the python track and intermediate expectations

Topic: Abstract Base Classes & Protocols
Track: python | Level: intermediate`
        },
        {
          id: `py-protocols-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Abstract Base Classes & Protocols** sits in the **python** track of the Data Science Master curriculum. typing.Protocol for structural subtyping and modern Python interfaces.

**Theoretical foundation:** Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

For **py-protocols**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
          example: `# Concept check for Abstract Base Classes & Protocols
meta = {"topic_id": "py-protocols", "track": "python", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `py-protocols python intermediate`,
          keyPoints: [
            `Core theory of Abstract Base Classes & Protocols ties to the python track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Abstract Base Classes & Protocols ties to the python track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Abstract Base Classes & Protocols
Track: python | Level: intermediate`
        },
        {
          id: `py-protocols-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Abstract Base Classes & Protocols**. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **py-protocols**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for py-protocols
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("py-protocols", "Abstract Base Classes & Protocols")
print(ref.topic_id, ref.title.split()[0])`,
          output: `py-protocols Abstract`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with python ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with python ecosystem conventions

Topic: Abstract Base Classes & Protocols
Track: python | Level: intermediate`
        },
        {
          id: `py-protocols-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Abstract Base Classes & Protocols** often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

When stuck on **py-protocols**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:** The best debuggers narrow the search space in minutes by changing one variable at a time.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("py-protocols", "Abstract Base Classes & Protocols")
debug_step("section_count", 4)`,
          output: `[py-protocols] 'Abstract Base Classes & Protocols' (str)
[section_count] 4`,
          keyPoints: [
            `Reduce to the smallest failing example`,
            `Log intermediate values with types`,
            `Bisect changes with git or notebook history`,
            `Separate data bugs from logic bugs`,
            `Record seeds, versions, and hardware context`,
            `Fix root cause—not symptoms with silent catches`
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: Abstract Base Classes & Protocols
Track: python | Level: intermediate`
        },
        {
          id: `py-protocols-real-world`,
          title: `Real-World Applications`,
          content: `**Abstract Base Classes & Protocols** shows up wherever **python** skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

Teams shipping features around **py-protocols** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Abstract Base Classes & Protocols
skills = ["python", "intermediate", "py-protocols"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: python, intermediate, py-protocols`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Abstract Base Classes & Protocols to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Abstract Base Classes & Protocols to adjacent topics in the same track

Topic: Abstract Base Classes & Protocols
Track: python | Level: intermediate`
        }
      ],
      exercises: [
        {
          id: `ex-proto-1`,
          question: `Define a Protocol HasArea with area() method and use it in a function.`,
          solution: `from typing import Protocol

class HasArea(Protocol):
    def area(self) -> float: ...

def print_area(shape: HasArea):
    print(shape.area())

class Square:
    def __init__(self, s): self.s = s
    def area(self): return self.s ** 2

print_area(Square(4))`,
          difficulty: `medium`
        },
        {
          id: `ex-proto-2`,
          question: `Create a Generic Stack class with push and pop.`,
          solution: `from typing import Generic, TypeVar

T = TypeVar("T")

class Stack(Generic[T]):
    def __init__(self): self._items = []
    def push(self, item: T): self._items.append(item)
    def pop(self) -> T: return self._items.pop()

s = Stack[int]()
s.push(1)
print(s.pop())`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 124,
      module: `module-04`,
      references: [
        {
          id: `python-typing-protocol`,
          title: `typing.Protocol — Structural Subtyping`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/library/typing.html#typing.Protocol`,
          description: `Duck-typing interfaces without explicit inheritance.`
        },
        {
          id: `python-abc-doc`,
          title: `abc — Abstract Base Classes`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/library/abc.html`,
          description: `Define interfaces and enforce method implementation in subclasses.`
        },
        {
          id: `python-type-hints-doc`,
          title: `Typing — Support for Type Hints`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/library/typing.html`,
          description: `Static type annotations for safer, more maintainable Python code.`
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
    }
];
