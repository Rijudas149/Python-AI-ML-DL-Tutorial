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
          content: `### Introduction

A **class** is a blueprint; an **object** is an instance. \`__init__\` initializes instance state. \`self\` refers to the instance.

### Defining Classes

### Key Ideas

- __init__ is the constructor
- self must be first parameter of instance methods
- Instance attributes set in __init__ or elsewhere
- Classes group data and behavior

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          ],
          commonMistakes: [
            `Checking string equality with \`is\` instead of \`==\``,
            `Reading or writing a file without \`with\` — leaks file handles on errors`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Copy-pasting the example without predicting the output first — run mentally, then verify`
          ]
        },
        {
          id: `class-vs-instance`,
          title: `Class vs Instance Attributes`,
          content: `### Introduction

Class attributes are shared across instances. Instance attributes are per-object.

### Class vs Instance Attributes

Modify class attrs carefully — mutable shared state causes bugs.

### Key Ideas

- Class attributes shared by all instances
- Instance attributes unique per object
- Avoid mutable class-level defaults
- Use class methods for factory patterns

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          ],
          commonMistakes: [
            `Checking string equality with \`is\` instead of \`==\``,
            `Reading or writing a file without \`with\` — leaks file handles on errors`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Avoid mutable class-level defaults.`
          ]
        },
        {
          id: `methods`,
          title: `Instance, Class & Static Methods`,
          content: `### Introduction

@classmethod receives cls; @staticmethod needs neither self nor cls. Use classmethod for alternative constructors.

### Instance, Class & Static Methods

### Key Ideas

- classmethod for alternative constructors
- staticmethod for utility functions in class namespace
- Instance methods most common
- Choose based on what data method needs

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          ],
          commonMistakes: [
            `Reading or writing a file without \`with\` — leaks file handles on errors`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Copy-pasting the example without predicting the output first — run mentally, then verify`
          ]
        },
        {
          id: `dunder`,
          title: `Special Methods (Dunder)`,
          content: `### Introduction

Double-underscore methods customize behavior: \`__str__\`, \`__repr__\`, \`__len__\`, \`__eq__\`, \`__add__\`. Enable Pythonic interfaces.

### Special Methods (Dunder)

### Key Ideas

- __repr__ for developers, __str__ for users
- Operator overloading via dunder methods
- __eq__ for equality comparison
- Follow Python data model conventions

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          ],
          commonMistakes: [
            `Checking string equality with \`is\` instead of \`==\``,
            `Reading or writing a file without \`with\` — leaks file handles on errors`,
            `Copy-pasting the example without predicting the output first — run mentally, then verify`,
            `Checking string equality with \`is\` instead of \`==\``
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
      estimatedMinutes: 25,
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
          content: `### Introduction

Subclass inherits parent attributes and methods. \`super()\` calls parent implementation. Override methods in child class.

### Basic Inheritance

### Key Ideas

- Inheritance enables code reuse
- Override methods for specialized behavior
- super() accesses parent methods
- Polymorphism: same interface, different behavior

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          ],
          commonMistakes: [
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Copy-pasting the example without predicting the output first — run mentally, then verify`,
            `Checking string equality with \`is\` instead of \`==\``,
            `Reading or writing a file without \`with\` — leaks file handles on errors`
          ]
        },
        {
          id: `mro`,
          title: `Method Resolution Order (MRO)`,
          content: `### Introduction

Python uses C3 linearization for MRO. Check with \`ClassName.mro()\`.

### Method Resolution Order (MRO)

Multiple inheritance requires careful design.

### Key Ideas

- MRO determines method lookup order
- Diamond inheritance resolved by C3
- Prefer composition over deep inheritance
- Use mixins for shared behavior

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          ],
          commonMistakes: [
            `Using polynomial degree too high without regularization`,
            `Copy-pasting the example without predicting the output first — run mentally, then verify`,
            `Checking string equality with \`is\` instead of \`==\``,
            `Reading or writing a file without \`with\` — leaks file handles on errors`
          ]
        },
        {
          id: `abstract`,
          title: `Abstract Base Classes`,
          content: `### Introduction

abc module defines interfaces. @abstractmethod forces subclass implementation. Enables contract-based design.

### Abstract Base Classes

### Key Ideas

- ABC enforces interface contracts
- Cannot instantiate ABC with abstract methods
- Useful for plugin architectures
- Protocol (typing) is duck-typing alternative

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          ],
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Copy-pasting the example without predicting the output first — run mentally, then verify`,
            `Checking string equality with \`is\` instead of \`==\``
          ]
        },
        {
          id: `composition`,
          title: `Composition Over Inheritance`,
          content: `### Introduction

Favor **has-a** over **is-a**. Compose objects rather than deep inheritance hierarchies.

### Composition Over Inheritance

More flexible and testable.

### Key Ideas

- Composition reduces coupling
- Easier to swap implementations
- Inheritance for true is-a relationships only
- Dependency injection supports composition`,
          keyPoints: [
            `Composition reduces coupling`,
            `Easier to swap implementations`,
            `Inheritance for true is-a relationships only`,
            `Dependency injection supports composition`
          ],
          commonMistakes: [
            `Checking string equality with \`is\` instead of \`==\``,
            `Reading or writing a file without \`with\` — leaks file handles on errors`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Reading passively without typing and running a small variant of the example yourself`
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
      estimatedMinutes: 25,
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
          content: `### Introduction

Single underscore \`_internal\` — convention for internal use. Double underscore \`__private\` triggers name mangling.

### Naming Conventions

No true private access in Python.

### Key Ideas

- Python uses convention, not enforcement
- Name mangling prevents accidental override in subclasses
- Public API should be minimal and stable
- Document internal vs public attributes

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          ],
          commonMistakes: [
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Copy-pasting the example without predicting the output first — run mentally, then verify`,
            `Checking string equality with \`is\` instead of \`==\``,
            `Reading or writing a file without \`with\` — leaks file handles on errors`
          ]
        },
        {
          id: `property`,
          title: `The @property Decorator`,
          content: `### Introduction

@property creates getter; @name.setter and @name.deleter for setter/deleter. Clean attribute-like access with validation.

### The @property Decorator

### Key Ideas

- Properties enable computed attributes
- Validation in setters protects invariants
- Prefer properties over get/set methods
- Use _prefix for backing storage

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          ],
          diagram: `The @property Decorator
Query → Embed → Retrieve → Augment Prompt → Generate`,
          commonMistakes: [
            `Reading or writing a file without \`with\` — leaks file handles on errors`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Copy-pasting the example without predicting the output first — run mentally, then verify`,
            `Checking string equality with \`is\` instead of \`==\``
          ]
        },
        {
          id: `slots`,
          title: `__slots__ for Memory`,
          content: `### Introduction

__slots__ restricts attributes and saves memory. No __dict__ created. Useful for many small objects.

### __slots__ for Memory

### Key Ideas

- __slots__ reduces memory per instance
- Fixes allowed attributes at class definition
- Breaks if multiple inheritance conflicts
- Rarely needed unless profiling shows benefit`,
          keyPoints: [
            `__slots__ reduces memory per instance`,
            `Fixes allowed attributes at class definition`,
            `Breaks if multiple inheritance conflicts`,
            `Rarely needed unless profiling shows benefit`
          ],
          commonMistakes: [
            `Checking string equality with \`is\` instead of \`==\``,
            `Reading or writing a file without \`with\` — leaks file handles on errors`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`
          ]
        },
        {
          id: `dataclass-preview`,
          title: `dataclass Preview`,
          content: `### Introduction

@dataclass auto-generates __init__, __repr__, __eq__. Modern alternative to boilerplate classes.

### dataclass Preview

### Key Ideas

- dataclass reduces boilerplate
- Type hints define fields
- frozen=True for immutability
- field(default_factory=list) for mutable defaults

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          ],
          commonMistakes: [
            `Copy-pasting the example without predicting the output first — run mentally, then verify`,
            `Checking string equality with \`is\` instead of \`==\``,
            `Reading or writing a file without \`with\` — leaks file handles on errors`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`
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
      estimatedMinutes: 25,
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
          content: `### Introduction

Factory method creates objects without specifying exact class. Decouples instantiation from usage.

### Factory Pattern

### Key Ideas

- Factory centralizes object creation
- Easy to add new types
- Registry pattern extends factory
- Used heavily in ML model loading

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          ],
          commonMistakes: [
            `Checking string equality with \`is\` instead of \`==\``,
            `Reading or writing a file without \`with\` — leaks file handles on errors`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Copy-pasting the example without predicting the output first — run mentally, then verify`
          ]
        },
        {
          id: `strategy`,
          title: `Strategy Pattern`,
          content: `### Introduction

Encapsulate algorithms as interchangeable strategies. Pass strategy as parameter or inject at runtime.

### Strategy Pattern

### Key Ideas

- Strategy enables runtime algorithm selection
- Open/closed principle — extend without modifying
- Functions can serve as strategies in Python
- Common in ML preprocessing pipelines

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          ],
          diagram: `Strategy Pattern
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Copy-pasting the example without predicting the output first — run mentally, then verify`,
            `Checking string equality with \`is\` instead of \`==\``,
            `Reading or writing a file without \`with\` — leaks file handles on errors`,
            `Open/closed principle — extend without modifying.`
          ]
        },
        {
          id: `observer`,
          title: `Observer Pattern`,
          content: `### Introduction

Subject notifies observers on state change. Basis for event systems and reactive programming.

### Observer Pattern

### Key Ideas

- Decouples subject from observers
- Used in GUI event handling
- Callbacks are lightweight Python observers
- Consider asyncio for async event patterns`,
          keyPoints: [
            `Decouples subject from observers`,
            `Used in GUI event handling`,
            `Callbacks are lightweight Python observers`,
            `Consider asyncio for async event patterns`
          ],
          diagram: `Observer Pattern
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Serving a model trained on preprocessed data without the same pipeline in production`,
            `Reading passively without typing and running a small variant of the example yourself`,
            `Checking string equality with \`is\` instead of \`==\``
          ]
        },
        {
          id: `singleton`,
          title: `Singleton & Module Pattern`,
          content: `### Introduction

Python modules are natural singletons. For classes, use __new__ or decorator. Often modules suffice.

### Singleton & Module Pattern

### Key Ideas

- Module-level objects are singletons by default
- Avoid overusing Singleton pattern
- Dependency injection preferred for testability
- lru_cache can implement function singletons`,
          keyPoints: [
            `Module-level objects are singletons by default`,
            `Avoid overusing Singleton pattern`,
            `Dependency injection preferred for testability`,
            `lru_cache can implement function singletons`
          ],
          commonMistakes: [
            `Reading or writing a file without \`with\` — leaks file handles on errors`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Avoid overusing Singleton pattern.`
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
      estimatedMinutes: 25,
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
          content: `### Introduction

Protocol defines structural interface — if it walks like a duck... No inheritance required. \`@runtime_checkable\` enables isinstance().

### typing.Protocol

### Key Ideas

- Protocol enables duck typing with type checking
- No need to inherit from Protocol
- runtime_checkable for isinstance checks
- Preferred over ABC for flexible interfaces

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          ],
          commonMistakes: [
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Copy-pasting the example without predicting the output first — run mentally, then verify`,
            `Checking string equality with \`is\` instead of \`==\``,
            `Reading or writing a file without \`with\` — leaks file handles on errors`
          ]
        },
        {
          id: `abc-vs-protocol`,
          title: `ABC vs Protocol`,
          content: `### Introduction

ABC: nominal subtyping — must inherit. Protocol: structural — must implement methods.

### ABC vs Protocol

Choose based on design needs.

### Key Ideas

- ABC for strict hierarchies and shared implementation
- Protocol for flexible third-party integration
- Both supported by mypy and pyright
- ML frameworks use Protocol for tensor-like objects`,
          keyPoints: [
            `ABC for strict hierarchies and shared implementation`,
            `Protocol for flexible third-party integration`,
            `Both supported by mypy and pyright`,
            `ML frameworks use Protocol for tensor-like objects`
          ],
          commonMistakes: [
            `Reading passively without typing and running a small variant of the example yourself`,
            `Checking string equality with \`is\` instead of \`==\``,
            `Reading or writing a file without \`with\` — leaks file handles on errors`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`
          ]
        },
        {
          id: `generic`,
          title: `Generic Classes`,
          content: `### Introduction

typing.Generic enables type-parameterized classes: \`class Stack[T]:\`. Python 3.12+ simplified syntax.

### Generic Classes

### Key Ideas

- Generics preserve type information
- TypeVar defines type parameters
- Python 3.12: class Box[T] syntax
- Useful for containers and data structures

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          ],
          diagram: `Generic Classes
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Reading or writing a file without \`with\` — leaks file handles on errors`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Copy-pasting the example without predicting the output first — run mentally, then verify`,
            `Checking string equality with \`is\` instead of \`==\``
          ]
        },
        {
          id: `solid`,
          title: `SOLID Principles`,
          content: `### Introduction

Single responsibility, Open/closed, Liskov substitution, Interface segregation, Dependency inversion. Guide maintainable OOP design.

### SOLID Principles

### Key Ideas

- Single Responsibility: one reason to change
- Open/Closed: extend without modifying
- Liskov: subtypes must be substitutable
- Apply pragmatically — not every class needs all five`,
          keyPoints: [
            `Single Responsibility: one reason to change`,
            `Open/Closed: extend without modifying`,
            `Liskov: subtypes must be substitutable`,
            `Apply pragmatically — not every class needs all five`
          ],
          diagram: `SOLID Principles
Query → Embed → Retrieve → Augment Prompt → Generate`,
          commonMistakes: [
            `Reading passively without typing and running a small variant of the example yourself`,
            `Checking string equality with \`is\` instead of \`==\``,
            `Reading or writing a file without \`with\` — leaks file handles on errors`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`
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
      estimatedMinutes: 25,
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
