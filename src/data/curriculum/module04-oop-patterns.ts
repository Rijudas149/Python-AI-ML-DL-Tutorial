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

**Why this matters for Classes & Objects:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Classes & Objects:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Defining Classes" connects to define classes with attributes and methods using the class keyword. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
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
            `Classes group data and behavior`
          ]
        },
        {
          id: `class-vs-instance`,
          title: `Class vs Instance Attributes`,
          content: `Class attributes are shared across instances. Instance attributes are per-object. Modify class attrs carefully — mutable shared state causes bugs.

**Why this matters for Classes & Objects:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Classes & Objects:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Class vs Instance Attributes" connects to define classes with attributes and methods using the class keyword. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
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
            `Use class methods for factory patterns`
          ]
        },
        {
          id: `methods`,
          title: `Instance, Class & Static Methods`,
          content: `@classmethod receives cls; @staticmethod needs neither self nor cls. Use classmethod for alternative constructors.

**Why this matters for Classes & Objects:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Classes & Objects:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Instance, Class & Static Methods" connects to define classes with attributes and methods using the class keyword. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
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
            `Choose based on what data method needs`
          ]
        },
        {
          id: `dunder`,
          title: `Special Methods (Dunder)`,
          content: `Double-underscore methods customize behavior: \`__str__\`, \`__repr__\`, \`__len__\`, \`__eq__\`, \`__add__\`. Enable Pythonic interfaces.

**Why this matters for Classes & Objects:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Classes & Objects:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Special Methods (Dunder)" connects to define classes with attributes and methods using the class keyword. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
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
            `Follow Python data model conventions`
          ]
        },
        {
          id: `py-classes-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Classes & Objects sits in the **python** track of the Data Science Master curriculum. Define classes with attributes and methods using the class keyword.

Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

For py-classes, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (intermediate):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
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
          ]
        },
        {
          id: `py-classes-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Classes & Objects. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For py-classes, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
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
          ]
        },
        {
          id: `py-classes-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Classes & Objects often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

When stuck on py-classes, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
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
          ]
        },
        {
          id: `py-classes-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Classes & Objects shows up wherever python skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

Teams shipping features around py-classes align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
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
          ]
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
      estimatedMinutes: 40,
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
          content: `Subclass inherits parent attributes and methods. \`super()\` calls parent implementation. Override methods in child class.

**Why this matters for Inheritance & Polymorphism:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Inheritance & Polymorphism:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Basic Inheritance" connects to extend classes, override methods, and use polymorphic behavior. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
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
            `Polymorphism: same interface, different behavior`
          ]
        },
        {
          id: `mro`,
          title: `Method Resolution Order (MRO)`,
          content: `Python uses C3 linearization for MRO. Check with \`ClassName.mro()\`. Multiple inheritance requires careful design.

**Why this matters for Inheritance & Polymorphism:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Inheritance & Polymorphism:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Method Resolution Order (MRO)" connects to extend classes, override methods, and use polymorphic behavior. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
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
            `Use mixins for shared behavior`
          ]
        },
        {
          id: `abstract`,
          title: `Abstract Base Classes`,
          content: `abc module defines interfaces. @abstractmethod forces subclass implementation. Enables contract-based design.

**Why this matters for Inheritance & Polymorphism:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Inheritance & Polymorphism:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Abstract Base Classes" connects to extend classes, override methods, and use polymorphic behavior. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
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
            `Protocol (typing) is duck-typing alternative`
          ]
        },
        {
          id: `composition`,
          title: `Composition Over Inheritance`,
          content: `Favor **has-a** over **is-a**. Compose objects rather than deep inheritance hierarchies. More flexible and testable.

**Why this matters for Inheritance & Polymorphism:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Inheritance & Polymorphism:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Composition Over Inheritance" connects to extend classes, override methods, and use polymorphic behavior. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          keyPoints: [
            `Composition reduces coupling`,
            `Easier to swap implementations`,
            `Inheritance for true is-a relationships only`,
            `Dependency injection supports composition`
          ]
        },
        {
          id: `py-inheritance-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Inheritance & Polymorphism sits in the **python** track of the Data Science Master curriculum. Extend classes, override methods, and use polymorphic behavior.

Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

For py-inheritance, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (intermediate):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
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
          ]
        },
        {
          id: `py-inheritance-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Inheritance & Polymorphism. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For py-inheritance, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
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
          ]
        },
        {
          id: `py-inheritance-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Inheritance & Polymorphism often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

When stuck on py-inheritance, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
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
          ]
        },
        {
          id: `py-inheritance-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Inheritance & Polymorphism shows up wherever python skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

Teams shipping features around py-inheritance align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
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
          ]
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
      estimatedMinutes: 40,
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
          content: `Single underscore \`_internal\` — convention for internal use. Double underscore \`__private\` triggers name mangling. No true private access in Python.

**Why this matters for Encapsulation & Properties:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Encapsulation & Properties:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Naming Conventions" connects to hide internal state and control access with properties and naming conventions. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
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
            `Document internal vs public attributes`
          ]
        },
        {
          id: `property`,
          title: `The @property Decorator`,
          content: `@property creates getter; @name.setter and @name.deleter for setter/deleter. Clean attribute-like access with validation.

**Why this matters for Encapsulation & Properties:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Encapsulation & Properties:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "The @property Decorator" connects to hide internal state and control access with properties and naming conventions. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
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
            `Use _prefix for backing storage`
          ]
        },
        {
          id: `slots`,
          title: `__slots__ for Memory`,
          content: `__slots__ restricts attributes and saves memory. No __dict__ created. Useful for many small objects.

**Why this matters for Encapsulation & Properties:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Encapsulation & Properties:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "__slots__ for Memory" connects to hide internal state and control access with properties and naming conventions. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          keyPoints: [
            `__slots__ reduces memory per instance`,
            `Fixes allowed attributes at class definition`,
            `Breaks if multiple inheritance conflicts`,
            `Rarely needed unless profiling shows benefit`
          ]
        },
        {
          id: `dataclass-preview`,
          title: `dataclass Preview`,
          content: `@dataclass auto-generates __init__, __repr__, __eq__. Modern alternative to boilerplate classes.

**Why this matters for Encapsulation & Properties:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Encapsulation & Properties:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "dataclass Preview" connects to hide internal state and control access with properties and naming conventions. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
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
            `field(default_factory=list) for mutable defaults`
          ]
        },
        {
          id: `py-encapsulation-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Encapsulation & Properties sits in the **python** track of the Data Science Master curriculum. Hide internal state and control access with properties and naming conventions.

Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

For py-encapsulation, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (intermediate):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
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
          ]
        },
        {
          id: `py-encapsulation-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Encapsulation & Properties. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For py-encapsulation, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
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
          ]
        },
        {
          id: `py-encapsulation-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Encapsulation & Properties often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

When stuck on py-encapsulation, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
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
          ]
        },
        {
          id: `py-encapsulation-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Encapsulation & Properties shows up wherever python skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

Teams shipping features around py-encapsulation align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
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
          ]
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
      estimatedMinutes: 40,
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
          content: `Factory method creates objects without specifying exact class. Decouples instantiation from usage.

**Why this matters for Design Patterns in Python:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Design Patterns in Python:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Factory Pattern" connects to singleton, factory, observer, strategy, and other common patterns. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
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
            `Used heavily in ML model loading`
          ]
        },
        {
          id: `strategy`,
          title: `Strategy Pattern`,
          content: `Encapsulate algorithms as interchangeable strategies. Pass strategy as parameter or inject at runtime.

**Why this matters for Design Patterns in Python:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Design Patterns in Python:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Strategy Pattern" connects to singleton, factory, observer, strategy, and other common patterns. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
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
            `Common in ML preprocessing pipelines`
          ]
        },
        {
          id: `observer`,
          title: `Observer Pattern`,
          content: `Subject notifies observers on state change. Basis for event systems and reactive programming.

**Why this matters for Design Patterns in Python:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Design Patterns in Python:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Observer Pattern" connects to singleton, factory, observer, strategy, and other common patterns. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          keyPoints: [
            `Decouples subject from observers`,
            `Used in GUI event handling`,
            `Callbacks are lightweight Python observers`,
            `Consider asyncio for async event patterns`
          ]
        },
        {
          id: `singleton`,
          title: `Singleton & Module Pattern`,
          content: `Python modules are natural singletons. For classes, use __new__ or decorator. Often modules suffice.

**Why this matters for Design Patterns in Python:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Design Patterns in Python:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Singleton & Module Pattern" connects to singleton, factory, observer, strategy, and other common patterns. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          keyPoints: [
            `Module-level objects are singletons by default`,
            `Avoid overusing Singleton pattern`,
            `Dependency injection preferred for testability`,
            `lru_cache can implement function singletons`
          ]
        },
        {
          id: `py-patterns-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Design Patterns in Python sits in the **python** track of the Data Science Master curriculum. Singleton, Factory, Observer, Strategy, and other common patterns.

Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

For py-patterns, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (intermediate):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
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
          ]
        },
        {
          id: `py-patterns-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Design Patterns in Python. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For py-patterns, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
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
          ]
        },
        {
          id: `py-patterns-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Design Patterns in Python often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

When stuck on py-patterns, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
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
          ]
        },
        {
          id: `py-patterns-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Design Patterns in Python shows up wherever python skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

Teams shipping features around py-patterns align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
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
          ]
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
      estimatedMinutes: 40,
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
          content: `Protocol defines structural interface — if it walks like a duck... No inheritance required. \`@runtime_checkable\` enables isinstance().

**Why this matters for Abstract Base Classes & Protocols:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Abstract Base Classes & Protocols:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "typing.Protocol" connects to typing.protocol for structural subtyping and modern python interfaces. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
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
            `Preferred over ABC for flexible interfaces`
          ]
        },
        {
          id: `abc-vs-protocol`,
          title: `ABC vs Protocol`,
          content: `ABC: nominal subtyping — must inherit. Protocol: structural — must implement methods. Choose based on design needs.

**Why this matters for Abstract Base Classes & Protocols:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Abstract Base Classes & Protocols:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "ABC vs Protocol" connects to typing.protocol for structural subtyping and modern python interfaces. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          keyPoints: [
            `ABC for strict hierarchies and shared implementation`,
            `Protocol for flexible third-party integration`,
            `Both supported by mypy and pyright`,
            `ML frameworks use Protocol for tensor-like objects`
          ]
        },
        {
          id: `generic`,
          title: `Generic Classes`,
          content: `typing.Generic enables type-parameterized classes: \`class Stack[T]:\`. Python 3.12+ simplified syntax.

**Why this matters for Abstract Base Classes & Protocols:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Abstract Base Classes & Protocols:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "Generic Classes" connects to typing.protocol for structural subtyping and modern python interfaces. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
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
            `Useful for containers and data structures`
          ]
        },
        {
          id: `solid`,
          title: `SOLID Principles`,
          content: `Single responsibility, Open/closed, Liskov substitution, Interface segregation, Dependency inversion. Guide maintainable OOP design.

**Why this matters for Abstract Base Classes & Protocols:** Python fluency is the foundation for every data science and ML workflow. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Abstract Base Classes & Protocols:** Python fluency underpins every data pipeline, notebook, and production service in modern ML. The section "SOLID Principles" connects to typing.protocol for structural subtyping and modern python interfaces. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code t…`,
          keyPoints: [
            `Single Responsibility: one reason to change`,
            `Open/Closed: extend without modifying`,
            `Liskov: subtypes must be substitutable`,
            `Apply pragmatically — not every class needs all five`
          ]
        },
        {
          id: `py-protocols-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Abstract Base Classes & Protocols sits in the **python** track of the Data Science Master curriculum. typing.Protocol for structural subtyping and modern Python interfaces.

Python's execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.

For py-protocols, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (intermediate):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
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
          ]
        },
        {
          id: `py-protocols-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Abstract Base Classes & Protocols. Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For py-protocols, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
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
          ]
        },
        {
          id: `py-protocols-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Abstract Base Classes & Protocols often hit predictable walls. Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.

When stuck on py-protocols, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
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
          ]
        },
        {
          id: `py-protocols-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Abstract Base Classes & Protocols shows up wherever python skills meet business constraints. Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.

Teams shipping features around py-protocols align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
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
          ]
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
      estimatedMinutes: 40,
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
