import type { ModuleCatalog, TopicSummary } from '../../types';

export const moduleLoaders: Record<string, () => Promise<import('../../types').Topic[]>> = {
  'module-01': () => import('./module01-python-fundamentals').then((m) => m.module01Topics),
  'module-02': () => import('./module02-control-flow').then((m) => m.module02Topics),
  'module-03': () => import('./module03-data-structures').then((m) => m.module03Topics),
  'module-04': () => import('./module04-oop-patterns').then((m) => m.module04Topics),
  'module-05': () => import('./module05-advanced-python').then((m) => m.module05Topics),
  'module-math-01': () => import('./module-math-01-algebra').then((m) => m.moduleMath01Topics),
  'module-math-02': () => import('./module-math-02-linalg1').then((m) => m.moduleMath02Topics),
  'module-math-03': () => import('./module-math-03-linalg2').then((m) => m.moduleMath03Topics),
  'module-math-04': () => import('./module-math-04-calculus1').then((m) => m.moduleMath04Topics),
  'module-math-05': () => import('./module-math-05-calculus2').then((m) => m.moduleMath05Topics),
  'module-math-06': () => import('./module-math-06-probability').then((m) => m.moduleMath06Topics),
  'module-math-07': () => import('./module-math-07-statistics').then((m) => m.moduleMath07Topics),
  'module-math-08': () => import('./module-math-08-opt-info').then((m) => m.moduleMath08Topics),
  'module-06': () => import('./module06-numpy').then((m) => m.module06Topics),
  'module-07': () => import('./module07-pandas').then((m) => m.module07Topics),
  'module-08': () => import('./module08-visualization').then((m) => m.module08Topics),
  'module-09': () => import('./module09-ml-math').then((m) => m.module09Topics),
  'module-10': () => import('./module10-ml-foundations').then((m) => m.module10Topics),
  'module-11': () => import('./module11-supervised').then((m) => m.module11Topics),
  'module-12': () => import('./module12-unsupervised').then((m) => m.module12Topics),
  'module-13': () => import('./module13-feature-eng').then((m) => m.module13Topics),
  'module-14': () => import('./module14-dl-fundamentals').then((m) => m.module14Topics),
  'module-15': () => import('./module15-pytorch').then((m) => m.module15Topics),
  'module-16': () => import('./module16-cnns').then((m) => m.module16Topics),
  'module-17': () => import('./module17-nlp-sequences').then((m) => m.module17Topics),
  'module-18': () => import('./module18-transformers').then((m) => m.module18Topics),
  'module-19': () => import('./module19-llm-genai').then((m) => m.module19Topics),
  'module-20': () => import('./module20-mlops-ethics').then((m) => m.module20Topics),
  'module-21': () => import('./module21-python-testing-async').then((m) => m.module21Topics),
  'module-22': () => import('./module22-python-io-apis').then((m) => m.module22Topics),
  'module-23': () => import('./module23-scipy-stats').then((m) => m.module23Topics),
  'module-24': () => import('./module24-timeseries-recsys').then((m) => m.module24Topics),
  'module-25': () => import('./module25-reinforcement-learning').then((m) => m.module25Topics),
  'module-26': () => import('./module26-generative-dl').then((m) => m.module26Topics),
  'module-27': () => import('./module27-advanced-ai-systems').then((m) => m.module27Topics),
  'module-28': () => import('./module28-capstone-career').then((m) => m.module28Topics),
};

export const modules: ModuleCatalog[] = [
  {
    id: 'module-01',
    name: 'Python Fundamentals',
    track: 'python',
    description: `Master Python basics: variables, types, operators, strings, and the development environment.`,
    topics: [
        {
          id: `py-vars-types`,
          title: `Variables, Types & Literals`,
          description: `Learn how Python stores data, dynamic typing, and core built-in types.`,
          level: `beginner`,
          module: `Python Fundamentals`,
          moduleId: `module-01`,
          track: `python`,
          estimatedMinutes: 35,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `vars-intro`,
            `literals`,
            `mutability`,
            `type-checking`,
            `py-vars-types-deep-theory`,
            `py-vars-types-patterns`,
            `py-vars-types-pitfalls`,
            `py-vars-types-real-world`
          ],
          exerciseIds: [
            `ex-vars-1`,
            `ex-vars-2`
          ]
        },
        {
          id: `py-operators`,
          title: `Operators & Expressions`,
          description: `Arithmetic, comparison, logical, and assignment operators in Python.`,
          level: `beginner`,
          module: `Python Fundamentals`,
          moduleId: `module-01`,
          track: `python`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `arith`,
            `compare`,
            `assign`,
            `bitwise`,
            `py-operators-deep-theory`,
            `py-operators-patterns`,
            `py-operators-pitfalls`,
            `py-operators-real-world`
          ],
          exerciseIds: [
            `ex-op-1`,
            `ex-op-2`
          ]
        },
        {
          id: `py-strings`,
          title: `Strings & Text Processing`,
          description: `String creation, slicing, methods, and formatting fundamentals.`,
          level: `beginner`,
          module: `Python Fundamentals`,
          moduleId: `module-01`,
          track: `python`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `str-basics`,
            `str-methods`,
            `str-format`,
            `str-unicode`,
            `py-strings-deep-theory`,
            `py-strings-patterns`,
            `py-strings-pitfalls`,
            `py-strings-real-world`
          ],
          exerciseIds: [
            `ex-str-1`,
            `ex-str-2`
          ]
        },
        {
          id: `py-io`,
          title: `Input/Output & REPL`,
          description: `Reading input, printing output, and using the Python REPL effectively.`,
          level: `beginner`,
          module: `Python Fundamentals`,
          moduleId: `module-01`,
          track: `python`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `print`,
            `input`,
            `repl`,
            `files-intro`,
            `py-io-deep-theory`,
            `py-io-patterns`,
            `py-io-pitfalls`,
            `py-io-real-world`
          ],
          exerciseIds: [
            `ex-io-1`,
            `ex-io-2`
          ]
        },
        {
          id: `py-env`,
          title: `Python Environment & Tooling`,
          description: `Virtual environments, pip, and project setup best practices.`,
          level: `beginner`,
          module: `Python Fundamentals`,
          moduleId: `module-01`,
          track: `python`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `venv`,
            `pip`,
            `ide`,
            `project-structure`,
            `py-env-deep-theory`,
            `py-env-patterns`,
            `py-env-pitfalls`,
            `py-env-real-world`
          ],
          exerciseIds: [
            `ex-env-1`,
            `ex-env-2`
          ]
        }
      ],
  },
  {
    id: 'module-02',
    name: 'Control Flow & Functions',
    track: 'python',
    description: `Conditionals, loops, functions, scope, and Pythonic iteration patterns.`,
    topics: [
        {
          id: `py-conditionals`,
          title: `Conditionals (if/elif/else)`,
          description: `Branch execution based on boolean conditions.`,
          level: `beginner`,
          module: `Control Flow & Functions`,
          moduleId: `module-02`,
          track: `python`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `if-basic`,
            `elif`,
            `ternary`,
            `guard`,
            `py-conditionals-deep-theory`,
            `py-conditionals-patterns`,
            `py-conditionals-pitfalls`,
            `py-conditionals-real-world`
          ],
          exerciseIds: [
            `ex-if-1`,
            `ex-if-2`
          ]
        },
        {
          id: `py-loops`,
          title: `Loops (for/while)`,
          description: `Iterate over sequences and repeat actions with for and while loops.`,
          level: `beginner`,
          module: `Control Flow & Functions`,
          moduleId: `module-02`,
          track: `python`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `for-loop`,
            `while-loop`,
            `loop-else`,
            `nested`,
            `py-loops-deep-theory`,
            `py-loops-patterns`,
            `py-loops-pitfalls`,
            `py-loops-real-world`
          ],
          exerciseIds: [
            `ex-loop-1`,
            `ex-loop-2`
          ]
        },
        {
          id: `py-functions`,
          title: `Functions & Parameters`,
          description: `Define reusable blocks with def, parameters, return values, and docstrings.`,
          level: `beginner`,
          module: `Control Flow & Functions`,
          moduleId: `module-02`,
          track: `python`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `def-basic`,
            `params`,
            `unpack`,
            `pure`,
            `py-functions-deep-theory`,
            `py-functions-patterns`,
            `py-functions-pitfalls`,
            `py-functions-real-world`
          ],
          exerciseIds: [
            `ex-fn-1`,
            `ex-fn-2`
          ]
        },
        {
          id: `py-scope`,
          title: `Scope, Closures & Lambda`,
          description: `LEGB scope rule, closures, and anonymous functions.`,
          level: `beginner`,
          module: `Control Flow & Functions`,
          moduleId: `module-02`,
          track: `python`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `legb`,
            `closures`,
            `lambda`,
            `higher`,
            `py-scope-deep-theory`,
            `py-scope-patterns`,
            `py-scope-pitfalls`,
            `py-scope-real-world`
          ],
          exerciseIds: [
            `ex-scope-1`,
            `ex-scope-2`
          ]
        },
        {
          id: `py-comprehensions`,
          title: `Comprehensions & Iterators`,
          description: `List/dict/set comprehensions and the iterator protocol.`,
          level: `beginner`,
          module: `Control Flow & Functions`,
          moduleId: `module-02`,
          track: `python`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `list-comp`,
            `dict-set-comp`,
            `generators`,
            `iterators`,
            `py-comprehensions-deep-theory`,
            `py-comprehensions-patterns`,
            `py-comprehensions-pitfalls`,
            `py-comprehensions-real-world`
          ],
          exerciseIds: [
            `ex-comp-1`,
            `ex-comp-2`
          ]
        }
      ],
  },
  {
    id: 'module-03',
    name: 'Data Structures',
    track: 'python',
    description: `Lists, tuples, dicts, sets, and advanced collection patterns.`,
    topics: [
        {
          id: `py-lists`,
          title: `Lists & Tuples`,
          description: `Ordered sequences — mutable lists and immutable tuples.`,
          level: `beginner`,
          module: `Data Structures`,
          moduleId: `module-03`,
          track: `python`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `list-ops`,
            `tuples`,
            `list-perf`,
            `nested`,
            `py-lists-deep-theory`,
            `py-lists-patterns`,
            `py-lists-pitfalls`,
            `py-lists-real-world`
          ],
          exerciseIds: [
            `ex-list-1`,
            `ex-list-2`
          ]
        },
        {
          id: `py-dicts`,
          title: `Dictionaries & Sets`,
          description: `Hash maps and unordered unique collections.`,
          level: `beginner`,
          module: `Data Structures`,
          moduleId: `module-03`,
          track: `python`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `dict-basics`,
            `sets`,
            `defaultdict`,
            `dict-merge`,
            `py-dicts-deep-theory`,
            `py-dicts-patterns`,
            `py-dicts-pitfalls`,
            `py-dicts-real-world`
          ],
          exerciseIds: [
            `ex-dict-1`,
            `ex-dict-2`
          ]
        },
        {
          id: `py-deque`,
          title: `Stacks, Queues & Deque`,
          description: `LIFO stacks and FIFO queues with collections.deque.`,
          level: `beginner`,
          module: `Data Structures`,
          moduleId: `module-03`,
          track: `python`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `stack`,
            `queue`,
            `deque-features`,
            `applications`,
            `py-deque-deep-theory`,
            `py-deque-patterns`,
            `py-deque-pitfalls`,
            `py-deque-real-world`
          ],
          exerciseIds: [
            `ex-deque-1`,
            `ex-deque-2`
          ]
        },
        {
          id: `py-sort-search`,
          title: `Sorting & Searching`,
          description: `Built-in sorting, binary search, and algorithmic complexity.`,
          level: `beginner`,
          module: `Data Structures`,
          moduleId: `module-03`,
          track: `python`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `sorting`,
            `custom-sort`,
            `search`,
            `complexity`,
            `py-sort-search-deep-theory`,
            `py-sort-search-patterns`,
            `py-sort-search-pitfalls`,
            `py-sort-search-real-world`
          ],
          exerciseIds: [
            `ex-sort-1`,
            `ex-sort-2`
          ]
        },
        {
          id: `py-collections`,
          title: `Collections Module`,
          description: `namedtuple, OrderedDict, ChainMap, and other specialized containers.`,
          level: `beginner`,
          module: `Data Structures`,
          moduleId: `module-03`,
          track: `python`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `namedtuple`,
            `chainmap`,
            `ordered`,
            `heapq`,
            `py-collections-deep-theory`,
            `py-collections-patterns`,
            `py-collections-pitfalls`,
            `py-collections-real-world`
          ],
          exerciseIds: [
            `ex-coll-1`,
            `ex-coll-2`
          ]
        }
      ],
  },
  {
    id: 'module-04',
    name: 'OOP & Design Patterns',
    track: 'python',
    description: `Object-oriented programming, inheritance, encapsulation, and design patterns.`,
    topics: [
        {
          id: `py-classes`,
          title: `Classes & Objects`,
          description: `Define classes with attributes and methods using the class keyword.`,
          level: `intermediate`,
          module: `OOP & Design Patterns`,
          moduleId: `module-04`,
          track: `python`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `class-basics`,
            `class-vs-instance`,
            `methods`,
            `dunder`,
            `py-classes-deep-theory`,
            `py-classes-patterns`,
            `py-classes-pitfalls`,
            `py-classes-real-world`
          ],
          exerciseIds: [
            `ex-class-1`,
            `ex-class-2`
          ]
        },
        {
          id: `py-inheritance`,
          title: `Inheritance & Polymorphism`,
          description: `Extend classes, override methods, and use polymorphic behavior.`,
          level: `intermediate`,
          module: `OOP & Design Patterns`,
          moduleId: `module-04`,
          track: `python`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `inheritance`,
            `mro`,
            `abstract`,
            `composition`,
            `py-inheritance-deep-theory`,
            `py-inheritance-patterns`,
            `py-inheritance-pitfalls`,
            `py-inheritance-real-world`
          ],
          exerciseIds: [
            `ex-inherit-1`,
            `ex-inherit-2`
          ]
        },
        {
          id: `py-encapsulation`,
          title: `Encapsulation & Properties`,
          description: `Hide internal state and control access with properties and naming conventions.`,
          level: `intermediate`,
          module: `OOP & Design Patterns`,
          moduleId: `module-04`,
          track: `python`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `naming`,
            `property`,
            `slots`,
            `dataclass-preview`,
            `py-encapsulation-deep-theory`,
            `py-encapsulation-patterns`,
            `py-encapsulation-pitfalls`,
            `py-encapsulation-real-world`
          ],
          exerciseIds: [
            `ex-encap-1`,
            `ex-encap-2`
          ]
        },
        {
          id: `py-patterns`,
          title: `Design Patterns in Python`,
          description: `Singleton, Factory, Observer, Strategy, and other common patterns.`,
          level: `intermediate`,
          module: `OOP & Design Patterns`,
          moduleId: `module-04`,
          track: `python`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `factory`,
            `strategy`,
            `observer`,
            `singleton`,
            `py-patterns-deep-theory`,
            `py-patterns-patterns`,
            `py-patterns-pitfalls`,
            `py-patterns-real-world`
          ],
          exerciseIds: [
            `ex-pattern-1`,
            `ex-pattern-2`
          ]
        },
        {
          id: `py-protocols`,
          title: `Abstract Base Classes & Protocols`,
          description: `typing.Protocol for structural subtyping and modern Python interfaces.`,
          level: `intermediate`,
          module: `OOP & Design Patterns`,
          moduleId: `module-04`,
          track: `python`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `protocol`,
            `abc-vs-protocol`,
            `generic`,
            `solid`,
            `py-protocols-deep-theory`,
            `py-protocols-patterns`,
            `py-protocols-pitfalls`,
            `py-protocols-real-world`
          ],
          exerciseIds: [
            `ex-proto-1`,
            `ex-proto-2`
          ]
        }
      ],
  },
  {
    id: 'module-05',
    name: 'Advanced Python',
    track: 'python',
    description: `Decorators, generators, context managers, type hints, and packaging.`,
    topics: [
        {
          id: `py-decorators`,
          title: `Decorators`,
          description: `Functions that modify or wrap other functions. Essential for logging, timing, auth, and frameworks.`,
          level: `advanced`,
          module: `Advanced Python`,
          moduleId: `module-05`,
          track: `python`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `decorator-basics`,
            `functools-wraps`,
            `param-decorator`,
            `class-decorator`,
            `py-decorators-deep-theory`,
            `py-decorators-patterns`,
            `py-decorators-pitfalls`,
            `py-decorators-real-world`
          ],
          exerciseIds: [
            `ex-dec-1`,
            `ex-dec-2`
          ]
        },
        {
          id: `py-generators`,
          title: `Generators & yield`,
          description: `Lazy iteration with generator functions and yield expressions.`,
          level: `advanced`,
          module: `Advanced Python`,
          moduleId: `module-05`,
          track: `python`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `yield`,
            `yield-from`,
            `gen-expr`,
            `infinite`,
            `py-generators-deep-theory`,
            `py-generators-patterns`,
            `py-generators-pitfalls`,
            `py-generators-real-world`
          ],
          exerciseIds: [
            `ex-gen-1`,
            `ex-gen-2`
          ]
        },
        {
          id: `py-context`,
          title: `Context Managers`,
          description: `Resource management with with statement and contextlib.`,
          level: `advanced`,
          module: `Advanced Python`,
          moduleId: `module-05`,
          track: `python`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `with`,
            `contextlib`,
            `file-context`,
            `async-context`,
            `py-context-deep-theory`,
            `py-context-patterns`,
            `py-context-pitfalls`,
            `py-context-real-world`
          ],
          exerciseIds: [
            `ex-ctx-1`,
            `ex-ctx-2`
          ]
        },
        {
          id: `py-typehints`,
          title: `Type Hints & dataclasses`,
          description: `Static typing, dataclasses, and modern Python data modeling.`,
          level: `advanced`,
          module: `Advanced Python`,
          moduleId: `module-05`,
          track: `python`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `hints`,
            `dataclass`,
            `pydantic`,
            `typing-advanced`,
            `py-typehints-deep-theory`,
            `py-typehints-patterns`,
            `py-typehints-pitfalls`,
            `py-typehints-real-world`
          ],
          exerciseIds: [
            `ex-type-1`,
            `ex-type-2`
          ]
        },
        {
          id: `py-modules`,
          title: `Modules, Packages & pip`,
          description: `Organizing code into modules, packages, and distributing with pip.`,
          level: `advanced`,
          module: `Advanced Python`,
          moduleId: `module-05`,
          track: `python`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `imports`,
            `packages`,
            `publishing`,
            `stdlib`,
            `py-modules-deep-theory`,
            `py-modules-patterns`,
            `py-modules-pitfalls`,
            `py-modules-real-world`
          ],
          exerciseIds: [
            `ex-mod-1`,
            `ex-mod-2`
          ]
        }
      ],
  },
  {
    id: 'module-math-01',
    name: 'Algebra & Functions',
    track: 'math',
    description: `Foundations of sets, functions, logarithms, sequences, and complex numbers essential for data science notation and modeling.`,
    topics: [
        {
          id: `math-sets`,
          title: `Set Theory & Notation`,
          description: `Master set operations, cardinality, and notation used throughout probability and linear algebra.`,
          level: `beginner`,
          module: `Algebra & Functions`,
          moduleId: `module-math-01`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `sets-intro`,
            `sets-ops`,
            `sets-functions`,
            `sets-counting`,
            `math-sets-deep-theory`,
            `math-sets-patterns`,
            `math-sets-pitfalls`,
            `math-sets-real-world`
          ],
          exerciseIds: [
            `ex-sets-1`,
            `ex-sets-2`
          ]
        },
        {
          id: `math-functions`,
          title: `Functions & Graphs`,
          description: `Understand domains, ranges, composition, and inverse functions for modeling relationships.`,
          level: `beginner`,
          module: `Algebra & Functions`,
          moduleId: `module-math-01`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `fn-basics`,
            `fn-types`,
            `fn-compose`,
            `fn-transforms`,
            `math-functions-deep-theory`,
            `math-functions-patterns`,
            `math-functions-pitfalls`,
            `math-functions-real-world`
          ],
          exerciseIds: [
            `ex-fn-1`,
            `ex-fn-2`
          ]
        },
        {
          id: `math-logarithms`,
          title: `Logarithms & Exponentials`,
          description: `Master log rules, the natural base e, and exponential growth models used in loss functions and probabilities.`,
          level: `beginner`,
          module: `Algebra & Functions`,
          moduleId: `module-math-01`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `log-def`,
            `log-rules`,
            `exp-models`,
            `log-ml`,
            `math-logarithms-deep-theory`,
            `math-logarithms-patterns`,
            `math-logarithms-pitfalls`,
            `math-logarithms-real-world`
          ],
          exerciseIds: [
            `ex-log-1`,
            `ex-log-2`
          ]
        },
        {
          id: `math-sequences`,
          title: `Sequences & Series`,
          description: `Arithmetic and geometric sequences, convergence, and summation notation for iterative algorithms.`,
          level: `beginner`,
          module: `Algebra & Functions`,
          moduleId: `module-math-01`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `seq-arith`,
            `seq-geom`,
            `seq-series`,
            `seq-ml`,
            `math-sequences-deep-theory`,
            `math-sequences-patterns`,
            `math-sequences-pitfalls`,
            `math-sequences-real-world`
          ],
          exerciseIds: [
            `ex-seq-1`,
            `ex-seq-2`
          ]
        },
        {
          id: `math-complex`,
          title: `Complex Numbers`,
          description: `Complex plane arithmetic, polar form, and Euler formula connecting trig to exponentials.`,
          level: `intermediate`,
          module: `Algebra & Functions`,
          moduleId: `module-math-01`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `cx-basics`,
            `cx-polar`,
            `cx-ops`,
            `cx-fft`,
            `math-complex-deep-theory`,
            `math-complex-patterns`,
            `math-complex-pitfalls`,
            `math-complex-real-world`
          ],
          exerciseIds: [
            `ex-cx-1`,
            `ex-cx-2`
          ]
        }
      ],
  },
  {
    id: 'module-math-02',
    name: 'Linear Algebra I',
    track: 'math',
    description: `Vectors, dot and cross products, matrices, matrix operations, and solving linear systems.`,
    topics: [
        {
          id: `math-vectors`,
          title: `Vectors & Vector Spaces`,
          description: `Learn vector notation, norms, unit vectors, and linear combinations in ℝⁿ.`,
          level: `beginner`,
          module: `Linear Algebra I`,
          moduleId: `module-math-02`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `vec-basics`,
            `vec-norm`,
            `vec-span`,
            `vec-ml`,
            `math-vectors-deep-theory`,
            `math-vectors-patterns`,
            `math-vectors-pitfalls`,
            `math-vectors-real-world`
          ],
          exerciseIds: [
            `ex-vec-1`,
            `ex-vec-2`
          ]
        },
        {
          id: `math-dot-cross`,
          title: `Dot Product & Cross Product`,
          description: `Inner products measure similarity; cross products find orthogonal vectors in 3D.`,
          level: `beginner`,
          module: `Linear Algebra I`,
          moduleId: `module-math-02`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `dot-def`,
            `dot-geom`,
            `cross-3d`,
            `dot-attn`,
            `math-dot-cross-deep-theory`,
            `math-dot-cross-patterns`,
            `math-dot-cross-pitfalls`,
            `math-dot-cross-real-world`
          ],
          exerciseIds: [
            `ex-dot-1`,
            `ex-dot-2`
          ]
        },
        {
          id: `math-matrices`,
          title: `Matrices & Matrix Notation`,
          description: `Understand matrix dimensions, special matrices, and matrix-vector multiplication.`,
          level: `intermediate`,
          module: `Linear Algebra I`,
          moduleId: `module-math-02`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `mat-basics`,
            `mat-mv`,
            `mat-special`,
            `mat-data`,
            `math-matrices-deep-theory`,
            `math-matrices-patterns`,
            `math-matrices-pitfalls`,
            `math-matrices-real-world`
          ],
          exerciseIds: [
            `ex-mat-1`,
            `ex-mat-2`
          ]
        },
        {
          id: `math-matrix-ops`,
          title: `Matrix Operations`,
          description: `Matrix multiplication, transpose rules, and properties of matrix arithmetic.`,
          level: `intermediate`,
          module: `Linear Algebra I`,
          moduleId: `module-math-02`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `mm-def`,
            `mm-prop`,
            `mm-inv-det`,
            `mm-nn`,
            `math-matrix-ops-deep-theory`,
            `math-matrix-ops-patterns`,
            `math-matrix-ops-pitfalls`,
            `math-matrix-ops-real-world`
          ],
          exerciseIds: [
            `ex-mm-1`,
            `ex-mm-2`
          ]
        },
        {
          id: `math-linear-systems`,
          title: `Linear Systems & Gaussian Elimination`,
          description: `Solve Ax=b via elimination, rank, and solution existence/uniqueness.`,
          level: `intermediate`,
          module: `Linear Algebra I`,
          moduleId: `module-math-02`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `ls-form`,
            `ls-elim`,
            `ls-lsq`,
            `ls-rank`,
            `math-linear-systems-deep-theory`,
            `math-linear-systems-patterns`,
            `math-linear-systems-pitfalls`,
            `math-linear-systems-real-world`
          ],
          exerciseIds: [
            `ex-ls-1`,
            `ex-ls-2`
          ]
        }
      ],
  },
  {
    id: 'module-math-03',
    name: 'Linear Algebra II',
    track: 'math',
    description: `Determinants, matrix inverse, eigenvalues, SVD, and PCA mathematical foundations.`,
    topics: [
        {
          id: `math-determinants`,
          title: `Determinants`,
          description: `Compute and interpret determinants as volume scaling and invertibility tests.`,
          level: `intermediate`,
          module: `Linear Algebra II`,
          moduleId: `module-math-03`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `det-def`,
            `det-geom`,
            `det-prop`,
            `det-ml`,
            `math-determinants-deep-theory`,
            `math-determinants-patterns`,
            `math-determinants-pitfalls`,
            `math-determinants-real-world`
          ],
          exerciseIds: [
            `ex-det-1`,
            `ex-det-2`
          ]
        },
        {
          id: `math-inverse`,
          title: `Matrix Inverse`,
          description: `Compute and apply matrix inverses for solving systems and understanding transformations.`,
          level: `intermediate`,
          module: `Linear Algebra II`,
          moduleId: `module-math-03`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `inv-def`,
            `inv-2x2`,
            `inv-pinv`,
            `inv-ml`,
            `math-inverse-deep-theory`,
            `math-inverse-patterns`,
            `math-inverse-pitfalls`,
            `math-inverse-real-world`
          ],
          exerciseIds: [
            `ex-inv-1`,
            `ex-inv-2`
          ]
        },
        {
          id: `math-eigen`,
          title: `Eigenvalues & Eigenvectors`,
          description: `Diagonalization, spectral theory, and dynamics via eigen decomposition.`,
          level: `intermediate`,
          module: `Linear Algebra II`,
          moduleId: `module-math-03`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `eig-def`,
            `eig-diag`,
            `eig-pca`,
            `eig-markov`,
            `math-eigen-deep-theory`,
            `math-eigen-patterns`,
            `math-eigen-pitfalls`,
            `math-eigen-real-world`
          ],
          exerciseIds: [
            `ex-eig-1`,
            `ex-eig-2`
          ]
        },
        {
          id: `math-svd`,
          title: `Singular Value Decomposition`,
          description: `Factor matrices with SVD for compression, pseudoinverse, and low-rank approximation.`,
          level: `advanced`,
          module: `Linear Algebra II`,
          moduleId: `module-math-03`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `svd-def`,
            `svd-lowrank`,
            `svd-pinv`,
            `svd-ml`,
            `math-svd-deep-theory`,
            `math-svd-patterns`,
            `math-svd-pitfalls`,
            `math-svd-real-world`
          ],
          exerciseIds: [
            `ex-svd-1`,
            `ex-svd-2`
          ]
        },
        {
          id: `math-pca-math`,
          title: `PCA Mathematics`,
          description: `Principal component analysis as variance maximization and spectral decomposition.`,
          level: `advanced`,
          module: `Linear Algebra II`,
          moduleId: `module-math-03`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `pca-goal`,
            `pca-proj`,
            `pca-kernel`,
            `pca-practice`,
            `math-pca-math-deep-theory`,
            `math-pca-math-patterns`,
            `math-pca-math-pitfalls`,
            `math-pca-math-real-world`
          ],
          exerciseIds: [
            `ex-pca-1`,
            `ex-pca-2`
          ]
        }
      ],
  },
  {
    id: 'module-math-04',
    name: 'Calculus I',
    track: 'math',
    description: `Limits, derivatives, differentiation rules, Taylor series, and integrals.`,
    topics: [
        {
          id: `math-limits`,
          title: `Limits & Continuity`,
          description: `Understand limits, continuity, and foundational definitions for derivatives.`,
          level: `intermediate`,
          module: `Calculus I`,
          moduleId: `module-math-04`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `lim-def`,
            `lim-rules`,
            `lim-cont`,
            `lim-ml`,
            `math-limits-deep-theory`,
            `math-limits-patterns`,
            `math-limits-pitfalls`,
            `math-limits-real-world`
          ],
          exerciseIds: [
            `ex-lim-1`,
            `ex-lim-2`
          ]
        },
        {
          id: `math-derivatives`,
          title: `Derivatives`,
          description: `Definition, interpretation as rate of change and tangent slope.`,
          level: `intermediate`,
          module: `Calculus I`,
          moduleId: `module-math-04`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `der-def`,
            `der-interp`,
            `der-numeric`,
            `der-ml`,
            `math-derivatives-deep-theory`,
            `math-derivatives-patterns`,
            `math-derivatives-pitfalls`,
            `math-derivatives-real-world`
          ],
          exerciseIds: [
            `ex-der-1`,
            `ex-der-2`
          ]
        },
        {
          id: `math-derivative-rules`,
          title: `Differentiation Rules`,
          description: `Power, product, quotient, and chain rules for efficient differentiation.`,
          level: `intermediate`,
          module: `Calculus I`,
          moduleId: `module-math-04`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `dr-power`,
            `dr-product`,
            `dr-chain`,
            `dr-common`,
            `math-derivative-rules-deep-theory`,
            `math-derivative-rules-patterns`,
            `math-derivative-rules-pitfalls`,
            `math-derivative-rules-real-world`
          ],
          exerciseIds: [
            `ex-dr-1`,
            `ex-dr-2`
          ]
        },
        {
          id: `math-taylor`,
          title: `Taylor Series & Approximation`,
          description: `Polynomial approximations and numerical uses of Taylor expansions.`,
          level: `intermediate`,
          module: `Calculus I`,
          moduleId: `module-math-04`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `tay-def`,
            `tay-approx`,
            `tay-multivar`,
            `tay-ml`,
            `math-taylor-deep-theory`,
            `math-taylor-patterns`,
            `math-taylor-pitfalls`,
            `math-taylor-real-world`
          ],
          exerciseIds: [
            `ex-tay-1`,
            `ex-tay-2`
          ]
        },
        {
          id: `math-integrals`,
          title: `Integrals & Area`,
          description: `Definite and indefinite integrals, Fundamental Theorem of Calculus.`,
          level: `intermediate`,
          module: `Calculus I`,
          moduleId: `module-math-04`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `int-def`,
            `int-rules`,
            `int-prob`,
            `int-mc`,
            `math-integrals-deep-theory`,
            `math-integrals-patterns`,
            `math-integrals-pitfalls`,
            `math-integrals-real-world`
          ],
          exerciseIds: [
            `ex-int-1`,
            `ex-int-2`
          ]
        }
      ],
  },
  {
    id: 'module-math-05',
    name: 'Calculus II & Multivariate',
    track: 'math',
    description: `Partial derivatives, gradient, chain rule, Jacobian/Hessian, and multivariate optimization.`,
    topics: [
        {
          id: `math-partial-deriv`,
          title: `Partial Derivatives`,
          description: `Differentiate multivariate functions holding other variables fixed.`,
          level: `advanced`,
          module: `Calculus II & Multivariate`,
          moduleId: `module-math-05`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `pd-def`,
            `pd-geom`,
            `pd-higher`,
            `pd-ml`,
            `math-partial-deriv-deep-theory`,
            `math-partial-deriv-patterns`,
            `math-partial-deriv-pitfalls`,
            `math-partial-deriv-real-world`
          ],
          exerciseIds: [
            `ex-pd-1`,
            `ex-pd-2`
          ]
        },
        {
          id: `math-gradient`,
          title: `Gradient & Directional Derivatives`,
          description: `Master the gradient vector and its role in optimization.`,
          level: `advanced`,
          module: `Calculus II & Multivariate`,
          moduleId: `module-math-05`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `grad-def`,
            `grad-descent`,
            `grad-proj`,
            `grad-numerical`,
            `math-gradient-deep-theory`,
            `math-gradient-patterns`,
            `math-gradient-pitfalls`,
            `math-gradient-real-world`
          ],
          exerciseIds: [
            `ex-grad-1`,
            `ex-grad-2`
          ]
        },
        {
          id: `math-chain-rule`,
          title: `Multivariate Chain Rule`,
          description: `Jacobian matrices and backpropagation as chain rule application.`,
          level: `advanced`,
          module: `Calculus II & Multivariate`,
          moduleId: `module-math-05`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `cr-jacobian`,
            `cr-backprop`,
            `cr-vector`,
            `cr-vanish`,
            `math-chain-rule-deep-theory`,
            `math-chain-rule-patterns`,
            `math-chain-rule-pitfalls`,
            `math-chain-rule-real-world`
          ],
          exerciseIds: [
            `ex-cr-1`,
            `ex-cr-2`
          ]
        },
        {
          id: `math-jacobian-hessian`,
          title: `Jacobian & Hessian`,
          description: `Second-order information for curvature and advanced optimization.`,
          level: `advanced`,
          module: `Calculus II & Multivariate`,
          moduleId: `module-math-05`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `jh-hessian`,
            `jh-newton`,
            `jh-jacobian-apps`,
            `jh-gauss-newton`,
            `math-jacobian-hessian-deep-theory`,
            `math-jacobian-hessian-patterns`,
            `math-jacobian-hessian-pitfalls`,
            `math-jacobian-hessian-real-world`
          ],
          exerciseIds: [
            `ex-jh-1`,
            `ex-jh-2`
          ]
        },
        {
          id: `math-multivariate-opt`,
          title: `Multivariate Optimization`,
          description: `Critical points, convexity, and constrained optimization preview.`,
          level: `advanced`,
          module: `Calculus II & Multivariate`,
          moduleId: `module-math-05`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `mvo-critical`,
            `mvo-convex`,
            `mvo-saddle`,
            `mvo-global`,
            `math-multivariate-opt-deep-theory`,
            `math-multivariate-opt-patterns`,
            `math-multivariate-opt-pitfalls`,
            `math-multivariate-opt-real-world`
          ],
          exerciseIds: [
            `ex-mvo-1`,
            `ex-mvo-2`
          ]
        }
      ],
  },
  {
    id: 'module-math-06',
    name: 'Probability',
    track: 'math',
    description: `Probability basics, conditional probability, random variables, distributions, and joint/marginal relationships.`,
    topics: [
        {
          id: `math-prob-basics`,
          title: `Probability Foundations`,
          description: `Sample spaces, axioms, and basic counting for probability.`,
          level: `intermediate`,
          module: `Probability`,
          moduleId: `module-math-06`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `pb-axioms`,
            `pb-count`,
            `pb-indep`,
            `pb-ml`,
            `math-prob-basics-deep-theory`,
            `math-prob-basics-patterns`,
            `math-prob-basics-pitfalls`,
            `math-prob-basics-real-world`
          ],
          exerciseIds: [
            `ex-pb-1`,
            `ex-pb-2`
          ]
        },
        {
          id: `math-conditional-bayes`,
          title: `Conditional Probability & Bayes`,
          description: `Conditioning, Bayes theorem, and Bayesian updating.`,
          level: `intermediate`,
          module: `Probability`,
          moduleId: `module-math-06`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `cb-cond`,
            `cb-bayes`,
            `cb-odds`,
            `cb-ml`,
            `math-conditional-bayes-deep-theory`,
            `math-conditional-bayes-patterns`,
            `math-conditional-bayes-pitfalls`,
            `math-conditional-bayes-real-world`
          ],
          exerciseIds: [
            `ex-cb-1`,
            `ex-cb-2`
          ]
        },
        {
          id: `math-random-vars`,
          title: `Random Variables`,
          description: `Discrete and continuous random variables, expectation, and variance.`,
          level: `intermediate`,
          module: `Probability`,
          moduleId: `module-math-06`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `rv-def`,
            `rv-expect`,
            `rv-transform`,
            `rv-ml`,
            `math-random-vars-deep-theory`,
            `math-random-vars-patterns`,
            `math-random-vars-pitfalls`,
            `math-random-vars-real-world`
          ],
          exerciseIds: [
            `ex-rv-1`,
            `ex-rv-2`
          ]
        },
        {
          id: `math-distributions`,
          title: `Common Distributions`,
          description: `Bernoulli, binomial, Gaussian, Poisson, and exponential distributions.`,
          level: `intermediate`,
          module: `Probability`,
          moduleId: `module-math-06`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `dist-disc`,
            `dist-cont`,
            `dist-clt`,
            `dist-ml`,
            `math-distributions-deep-theory`,
            `math-distributions-patterns`,
            `math-distributions-pitfalls`,
            `math-distributions-real-world`
          ],
          exerciseIds: [
            `ex-dist-1`,
            `ex-dist-2`
          ]
        },
        {
          id: `math-joint-marginal`,
          title: `Joint, Marginal & Independence`,
          description: `Multivariate relationships, covariance matrices, and factorization.`,
          level: `intermediate`,
          module: `Probability`,
          moduleId: `module-math-06`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `jm-joint`,
            `jm-indep`,
            `jm-cov`,
            `jm-ml`,
            `math-joint-marginal-deep-theory`,
            `math-joint-marginal-patterns`,
            `math-joint-marginal-pitfalls`,
            `math-joint-marginal-real-world`
          ],
          exerciseIds: [
            `ex-jm-1`,
            `ex-jm-2`
          ]
        }
      ],
  },
  {
    id: 'module-math-07',
    name: 'Statistics',
    track: 'math',
    description: `Descriptive statistics, sampling, CLT, hypothesis testing, confidence intervals, and regression mathematics.`,
    topics: [
        {
          id: `math-descriptive`,
          title: `Descriptive Statistics`,
          description: `Mean, variance, percentiles, and exploratory data summaries.`,
          level: `intermediate`,
          module: `Statistics`,
          moduleId: `module-math-07`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `ds-central`,
            `ds-spread`,
            `ds-percentile`,
            `ds-eda`,
            `math-descriptive-deep-theory`,
            `math-descriptive-patterns`,
            `math-descriptive-pitfalls`,
            `math-descriptive-real-world`
          ],
          exerciseIds: [
            `ex-ds-1`,
            `ex-ds-2`
          ]
        },
        {
          id: `math-sampling-clt`,
          title: `Sampling & Central Limit Theorem`,
          description: `Sampling distributions, standard error, and CLT applications.`,
          level: `intermediate`,
          module: `Statistics`,
          moduleId: `module-math-07`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `sc-sample`,
            `sc-se`,
            `sc-clt`,
            `sc-ml`,
            `math-sampling-clt-deep-theory`,
            `math-sampling-clt-patterns`,
            `math-sampling-clt-pitfalls`,
            `math-sampling-clt-real-world`
          ],
          exerciseIds: [
            `ex-sc-1`,
            `ex-sc-2`
          ]
        },
        {
          id: `math-hypothesis`,
          title: `Hypothesis Testing`,
          description: `Null/alternative, p-values, errors, and common tests.`,
          level: `intermediate`,
          module: `Statistics`,
          moduleId: `module-math-07`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `ht-framework`,
            `ht-tests`,
            `ht-ab`,
            `ht-ml`,
            `math-hypothesis-deep-theory`,
            `math-hypothesis-patterns`,
            `math-hypothesis-pitfalls`,
            `math-hypothesis-real-world`
          ],
          exerciseIds: [
            `ex-ht-1`,
            `ex-ht-2`
          ]
        },
        {
          id: `math-confidence`,
          title: `Confidence Intervals`,
          description: `Construct and interpret confidence intervals for means and proportions.`,
          level: `intermediate`,
          module: `Statistics`,
          moduleId: `module-math-07`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `ci-mean`,
            `ci-prop`,
            `ci-diff`,
            `ci-ml`,
            `math-confidence-deep-theory`,
            `math-confidence-patterns`,
            `math-confidence-pitfalls`,
            `math-confidence-real-world`
          ],
          exerciseIds: [
            `ex-ci-1`,
            `ex-ci-2`
          ]
        },
        {
          id: `math-regression-math`,
          title: `Regression Mathematics`,
          description: `Linear regression normal equations, assumptions, and statistical inference.`,
          level: `intermediate`,
          module: `Statistics`,
          moduleId: `module-math-07`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `reg-ols`,
            `reg-assump`,
            `reg-infer`,
            `reg-ml`,
            `math-regression-math-deep-theory`,
            `math-regression-math-patterns`,
            `math-regression-math-pitfalls`,
            `math-regression-math-real-world`
          ],
          exerciseIds: [
            `ex-reg-1`,
            `ex-reg-2`
          ]
        }
      ],
  },
  {
    id: 'module-math-08',
    name: 'Optimization & Information Theory',
    track: 'math',
    description: `Convex optimization, gradient descent theory, Lagrange multipliers, entropy, KL divergence, and MLE.`,
    topics: [
        {
          id: `math-convex`,
          title: `Convex Optimization`,
          description: `Convex sets, convex functions, and why convex problems are tractable.`,
          level: `advanced`,
          module: `Optimization & Information Theory`,
          moduleId: `module-math-08`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `cvx-sets`,
            `cvx-func`,
            `cvx-problems`,
            `cvx-ml`,
            `math-convex-deep-theory`,
            `math-convex-patterns`,
            `math-convex-pitfalls`,
            `math-convex-real-world`
          ],
          exerciseIds: [
            `ex-cvx-1`,
            `ex-cvx-2`
          ]
        },
        {
          id: `math-gradient-descent-math`,
          title: `Gradient Descent Theory`,
          description: `Convergence rates, step size, momentum, and adaptive methods.`,
          level: `advanced`,
          module: `Optimization & Information Theory`,
          moduleId: `module-math-08`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `gd-conv`,
            `gd-momentum`,
            `gd-adaptive`,
            `gd-sgd`,
            `math-gradient-descent-math-deep-theory`,
            `math-gradient-descent-math-patterns`,
            `math-gradient-descent-math-pitfalls`,
            `math-gradient-descent-math-real-world`
          ],
          exerciseIds: [
            `ex-gd-1`,
            `ex-gd-2`
          ]
        },
        {
          id: `math-lagrange`,
          title: `Lagrange Multipliers`,
          description: `Equality constraints, KKT conditions, and constrained optimization.`,
          level: `advanced`,
          module: `Optimization & Information Theory`,
          moduleId: `module-math-08`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `lag-eq`,
            `lag-ineq`,
            `lag-dual`,
            `lag-ml`,
            `math-lagrange-deep-theory`,
            `math-lagrange-patterns`,
            `math-lagrange-pitfalls`,
            `math-lagrange-real-world`
          ],
          exerciseIds: [
            `ex-lag-1`,
            `ex-lag-2`
          ]
        },
        {
          id: `math-entropy-math`,
          title: `Entropy & Information`,
          description: `Shannon entropy, cross-entropy, and mutual information.`,
          level: `advanced`,
          module: `Optimization & Information Theory`,
          moduleId: `module-math-08`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `ent-def`,
            `ent-ce`,
            `ent-mi`,
            `ent-ml`,
            `math-entropy-math-deep-theory`,
            `math-entropy-math-patterns`,
            `math-entropy-math-pitfalls`,
            `math-entropy-math-real-world`
          ],
          exerciseIds: [
            `ex-ent-1`,
            `ex-ent-2`
          ]
        },
        {
          id: `math-kl-mle`,
          title: `KL Divergence & MLE`,
          description: `Maximum likelihood estimation and its connection to minimizing KL.`,
          level: `advanced`,
          module: `Optimization & Information Theory`,
          moduleId: `module-math-08`,
          track: `math`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `mle-def`,
            `kl-mle`,
            `mle-prop`,
            `mle-ml`,
            `math-kl-mle-deep-theory`,
            `math-kl-mle-patterns`,
            `math-kl-mle-pitfalls`,
            `math-kl-mle-real-world`
          ],
          exerciseIds: [
            `ex-mle-1`,
            `ex-mle-2`
          ]
        }
      ],
  },
  {
    id: 'module-06',
    name: 'NumPy & Scientific Computing',
    track: 'data',
    description: `NumPy arrays, broadcasting, linear algebra, and vectorized computation.`,
    topics: [
        {
          id: `np-arrays`,
          title: `NumPy Arrays Fundamentals`,
          description: `Create and manipulate ndarrays — the foundation of scientific Python.`,
          level: `beginner`,
          module: `NumPy & Scientific Computing`,
          moduleId: `module-06`,
          track: `data`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `create`,
            `dtype`,
            `attrs`,
            `vs-list`,
            `np-arrays-deep-theory`,
            `np-arrays-patterns`,
            `np-arrays-pitfalls`,
            `np-arrays-real-world`
          ],
          exerciseIds: [
            `ex-np-1`,
            `ex-np-2`
          ]
        },
        {
          id: `np-indexing`,
          title: `Array Indexing & Broadcasting`,
          description: `Slicing, boolean indexing, fancy indexing, and broadcasting rules.`,
          level: `beginner`,
          module: `NumPy & Scientific Computing`,
          moduleId: `module-06`,
          track: `data`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `slicing`,
            `boolean`,
            `broadcast`,
            `vectorize`,
            `np-indexing-deep-theory`,
            `np-indexing-patterns`,
            `np-indexing-pitfalls`,
            `np-indexing-real-world`
          ],
          exerciseIds: [
            `ex-np-idx-1`,
            `ex-np-idx-2`
          ]
        },
        {
          id: `np-linalg`,
          title: `Linear Algebra with NumPy`,
          description: `Matrix operations, dot products, decomposition, and solving linear systems.`,
          level: `beginner`,
          module: `NumPy & Scientific Computing`,
          moduleId: `module-06`,
          track: `data`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `matmul`,
            `linalg`,
            `norm`,
            `applications`,
            `np-linalg-deep-theory`,
            `np-linalg-patterns`,
            `np-linalg-pitfalls`,
            `np-linalg-real-world`
          ],
          exerciseIds: [
            `ex-linalg-1`,
            `ex-linalg-2`
          ]
        },
        {
          id: `np-random`,
          title: `Random & Statistics`,
          description: `Random number generation and statistical operations with NumPy.`,
          level: `beginner`,
          module: `NumPy & Scientific Computing`,
          moduleId: `module-06`,
          track: `data`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `rng`,
            `stats`,
            `shuffle`,
            `distributions`,
            `np-random-deep-theory`,
            `np-random-patterns`,
            `np-random-pitfalls`,
            `np-random-real-world`
          ],
          exerciseIds: [
            `ex-rand-1`,
            `ex-rand-2`
          ]
        },
        {
          id: `np-perf`,
          title: `Performance & Vectorization`,
          description: `Write fast NumPy code avoiding Python loops.`,
          level: `beginner`,
          module: `NumPy & Scientific Computing`,
          moduleId: `module-06`,
          track: `data`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `vectorize`,
            `memory`,
            `einsum`,
            `numba`,
            `np-perf-deep-theory`,
            `np-perf-patterns`,
            `np-perf-pitfalls`,
            `np-perf-real-world`
          ],
          exerciseIds: [
            `ex-perf-1`,
            `ex-perf-2`
          ]
        }
      ],
  },
  {
    id: 'module-07',
    name: 'Pandas & Data Wrangling',
    track: 'data',
    description: `DataFrames, indexing, groupby, merging, and time series analysis.`,
    topics: [
        {
          id: `pd-dataframes`,
          title: `Series & DataFrames`,
          description: `Pandas one-dimensional Series and two-dimensional DataFrames.`,
          level: `beginner`,
          module: `Pandas & Data Wrangling`,
          moduleId: `module-07`,
          track: `data`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `series`,
            `dataframe`,
            `selection`,
            `dtypes`,
            `pd-dataframes-deep-theory`,
            `pd-dataframes-patterns`,
            `pd-dataframes-pitfalls`,
            `pd-dataframes-real-world`
          ],
          exerciseIds: [
            `ex-pd-1`,
            `ex-pd-2`
          ]
        },
        {
          id: `pd-indexing`,
          title: `Indexing, Filtering & Selection`,
          description: `Advanced indexing with query, isin, and boolean masks.`,
          level: `beginner`,
          module: `Pandas & Data Wrangling`,
          moduleId: `module-07`,
          track: `data`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `boolean`,
            `query`,
            `assign`,
            `sort`,
            `pd-indexing-deep-theory`,
            `pd-indexing-patterns`,
            `pd-indexing-pitfalls`,
            `pd-indexing-real-world`
          ],
          exerciseIds: [
            `ex-pd-idx-1`,
            `ex-pd-idx-2`
          ]
        },
        {
          id: `pd-groupby`,
          title: `GroupBy & Aggregations`,
          description: `Split-apply-combine pattern for grouped analysis.`,
          level: `beginner`,
          module: `Pandas & Data Wrangling`,
          moduleId: `module-07`,
          track: `data`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `groupby`,
            `agg`,
            `pivot`,
            `window`,
            `pd-groupby-deep-theory`,
            `pd-groupby-patterns`,
            `pd-groupby-pitfalls`,
            `pd-groupby-real-world`
          ],
          exerciseIds: [
            `ex-gb-1`,
            `ex-gb-2`
          ]
        },
        {
          id: `pd-merge`,
          title: `Merging, Joining & Reshaping`,
          description: `Combine DataFrames with merge, concat, join. Reshape with melt and pivot.`,
          level: `beginner`,
          module: `Pandas & Data Wrangling`,
          moduleId: `module-07`,
          track: `data`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `merge`,
            `concat`,
            `reshape`,
            `join-index`,
            `pd-merge-deep-theory`,
            `pd-merge-patterns`,
            `pd-merge-pitfalls`,
            `pd-merge-real-world`
          ],
          exerciseIds: [
            `ex-merge-1`,
            `ex-merge-2`
          ]
        },
        {
          id: `pd-missing`,
          title: `Missing Data & Time Series`,
          description: `Handle NaN values and work with datetime indices.`,
          level: `beginner`,
          module: `Pandas & Data Wrangling`,
          moduleId: `module-07`,
          track: `data`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `missing`,
            `datetime`,
            `tz`,
            `ts-features`,
            `pd-missing-deep-theory`,
            `pd-missing-patterns`,
            `pd-missing-pitfalls`,
            `pd-missing-real-world`
          ],
          exerciseIds: [
            `ex-miss-1`,
            `ex-miss-2`
          ]
        }
      ],
  },
  {
    id: 'module-08',
    name: 'Data Visualization',
    track: 'data',
    description: `Matplotlib, Seaborn, Plotly, and visualization best practices.`,
    topics: [
        {
          id: `viz-matplotlib`,
          title: `Matplotlib Basics`,
          description: `Create line, scatter, bar, and histogram plots with pyplot and OO API.`,
          level: `beginner`,
          module: `Data Visualization`,
          moduleId: `module-08`,
          track: `data`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `pyplot`,
            `oo-api`,
            `styles`,
            `anatomy`,
            `viz-matplotlib-deep-theory`,
            `viz-matplotlib-patterns`,
            `viz-matplotlib-pitfalls`,
            `viz-matplotlib-real-world`
          ],
          exerciseIds: [
            `ex-mpl-1`,
            `ex-mpl-2`
          ]
        },
        {
          id: `viz-seaborn`,
          title: `Seaborn Statistical Plots`,
          description: `High-level statistical visualizations built on matplotlib.`,
          level: `beginner`,
          module: `Data Visualization`,
          moduleId: `module-08`,
          track: `data`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `distplot`,
            `relplot`,
            `catplot`,
            `heatmap`,
            `viz-seaborn-deep-theory`,
            `viz-seaborn-patterns`,
            `viz-seaborn-pitfalls`,
            `viz-seaborn-real-world`
          ],
          exerciseIds: [
            `ex-sns-1`,
            `ex-sns-2`
          ]
        },
        {
          id: `viz-plotly`,
          title: `Plotly Interactive Viz`,
          description: `Interactive charts for exploration and dashboards.`,
          level: `beginner`,
          module: `Data Visualization`,
          moduleId: `module-08`,
          track: `data`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `plotly-express`,
            `plotly-graph`,
            `dash`,
            `when`,
            `viz-plotly-deep-theory`,
            `viz-plotly-patterns`,
            `viz-plotly-pitfalls`,
            `viz-plotly-real-world`
          ],
          exerciseIds: [
            `ex-plotly-1`,
            `ex-plotly-2`
          ]
        },
        {
          id: `viz-design`,
          title: `Dashboard Design Principles`,
          description: `Visual encoding, chart selection, and storytelling with data.`,
          level: `beginner`,
          module: `Data Visualization`,
          moduleId: `module-08`,
          track: `data`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `chart-selection`,
            `color`,
            `storytelling`,
            `eda-workflow`,
            `viz-design-deep-theory`,
            `viz-design-patterns`,
            `viz-design-pitfalls`,
            `viz-design-real-world`
          ],
          exerciseIds: [
            `ex-design-1`,
            `ex-design-2`
          ]
        },
        {
          id: `viz-specialized`,
          title: `Geospatial & Specialized Charts`,
          description: `Maps, network graphs, and domain-specific visualizations.`,
          level: `beginner`,
          module: `Data Visualization`,
          moduleId: `module-08`,
          track: `data`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `geopandas`,
            `network`,
            `ml-viz`,
            `tools`,
            `viz-specialized-deep-theory`,
            `viz-specialized-patterns`,
            `viz-specialized-pitfalls`,
            `viz-specialized-real-world`
          ],
          exerciseIds: [
            `ex-spec-1`,
            `ex-spec-2`
          ]
        }
      ],
  },
  {
    id: 'module-09',
    name: 'Math for Machine Learning',
    track: 'ml',
    description: `Linear algebra, calculus, probability, and optimization foundations for ML.`,
    topics: [
        {
          id: `ml-linear-algebra`,
          title: `Linear Algebra Essentials`,
          description: `Vectors, matrices, eigenvalues, and their role in ML.`,
          level: `beginner`,
          module: `Math for Machine Learning`,
          moduleId: `module-09`,
          track: `ml`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `vectors`,
            `matrices`,
            `eigen`,
            `svd`,
            `ml-linear-algebra-deep-theory`,
            `ml-linear-algebra-patterns`,
            `ml-linear-algebra-pitfalls`,
            `ml-linear-algebra-real-world`
          ],
          exerciseIds: [
            `ex-la-1`,
            `ex-la-2`
          ]
        },
        {
          id: `ml-calculus`,
          title: `Calculus for ML`,
          description: `Derivatives, gradients, chain rule, and partial derivatives for optimization.`,
          level: `beginner`,
          module: `Math for Machine Learning`,
          moduleId: `module-09`,
          track: `ml`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `derivatives`,
            `chain-rule`,
            `loss-gradients`,
            `jacobian`,
            `ml-calculus-deep-theory`,
            `ml-calculus-patterns`,
            `ml-calculus-pitfalls`,
            `ml-calculus-real-world`
          ],
          exerciseIds: [
            `ex-calc-1`,
            `ex-calc-2`
          ]
        },
        {
          id: `ml-probability`,
          title: `Probability & Distributions`,
          description: `Probability theory, Bayes theorem, and key distributions for ML.`,
          level: `beginner`,
          module: `Math for Machine Learning`,
          moduleId: `module-09`,
          track: `ml`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `basics`,
            `distributions`,
            `expectation`,
            `mle`,
            `ml-probability-deep-theory`,
            `ml-probability-patterns`,
            `ml-probability-pitfalls`,
            `ml-probability-real-world`
          ],
          exerciseIds: [
            `ex-prob-1`,
            `ex-prob-2`
          ]
        },
        {
          id: `ml-info-theory`,
          title: `Information Theory & Entropy`,
          description: `Entropy, cross-entropy, KL divergence — core to classification loss.`,
          level: `beginner`,
          module: `Math for Machine Learning`,
          moduleId: `module-09`,
          track: `ml`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `entropy`,
            `cross-entropy`,
            `kl`,
            `mutual-info`,
            `ml-info-theory-deep-theory`,
            `ml-info-theory-patterns`,
            `ml-info-theory-pitfalls`,
            `ml-info-theory-real-world`
          ],
          exerciseIds: [
            `ex-info-1`,
            `ex-info-2`
          ]
        },
        {
          id: `ml-optimization`,
          title: `Optimization & Gradient Descent`,
          description: `Finding minima of loss functions iteratively.`,
          level: `beginner`,
          module: `Math for Machine Learning`,
          moduleId: `module-09`,
          track: `ml`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `gd`,
            `variants`,
            `convex`,
            `regularization`,
            `ml-optimization-deep-theory`,
            `ml-optimization-patterns`,
            `ml-optimization-pitfalls`,
            `ml-optimization-real-world`
          ],
          exerciseIds: [
            `ex-opt-1`,
            `ex-opt-2`
          ]
        }
      ],
  },
  {
    id: 'module-10',
    name: 'ML Foundations & Scikit-learn',
    track: 'ml',
    description: `ML workflow, train_test_split, regression, trees, and model evaluation.`,
    topics: [
        {
          id: `ml-workflow`,
          title: `ML Workflow & train_test_split`,
          description: `End-to-end machine learning pipeline with scikit-learn.`,
          level: `beginner`,
          module: `ML Foundations & Scikit-learn`,
          moduleId: `module-10`,
          track: `ml`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `pipeline`,
            `split`,
            `preprocessing`,
            `baseline`,
            `ml-workflow-deep-theory`,
            `ml-workflow-patterns`,
            `ml-workflow-pitfalls`,
            `ml-workflow-real-world`
          ],
          exerciseIds: [
            `ex-split-1`,
            `ex-split-2`
          ]
        },
        {
          id: `ml-linear`,
          title: `Linear & Logistic Regression`,
          description: `Foundation supervised learning algorithms.`,
          level: `beginner`,
          module: `ML Foundations & Scikit-learn`,
          moduleId: `module-10`,
          track: `ml`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `linear-reg`,
            `logistic`,
            `sigmoid`,
            `interpret`,
            `ml-linear-deep-theory`,
            `ml-linear-patterns`,
            `ml-linear-pitfalls`,
            `ml-linear-real-world`
          ],
          exerciseIds: [
            `ex-lr-1`,
            `ex-lr-2`
          ]
        },
        {
          id: `ml-trees`,
          title: `Decision Trees & Random Forests`,
          description: `Tree-based models for classification and regression.`,
          level: `beginner`,
          module: `ML Foundations & Scikit-learn`,
          moduleId: `module-10`,
          track: `ml`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `dt`,
            `rf`,
            `hyperparams`,
            `when`,
            `ml-trees-deep-theory`,
            `ml-trees-patterns`,
            `ml-trees-pitfalls`,
            `ml-trees-real-world`
          ],
          exerciseIds: [
            `ex-tree-1`,
            `ex-tree-2`
          ]
        },
        {
          id: `ml-metrics`,
          title: `Model Evaluation Metrics`,
          description: `Accuracy, precision, recall, F1, ROC-AUC, MSE, R².`,
          level: `beginner`,
          module: `ML Foundations & Scikit-learn`,
          moduleId: `module-10`,
          track: `ml`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `classification`,
            `roc`,
            `regression`,
            `confusion`,
            `ml-metrics-deep-theory`,
            `ml-metrics-patterns`,
            `ml-metrics-pitfalls`,
            `ml-metrics-real-world`
          ],
          exerciseIds: [
            `ex-met-1`,
            `ex-met-2`
          ]
        },
        {
          id: `ml-cv`,
          title: `Cross-Validation & Pipelines`,
          description: `Robust evaluation with k-fold CV and end-to-end pipelines.`,
          level: `beginner`,
          module: `ML Foundations & Scikit-learn`,
          moduleId: `module-10`,
          track: `ml`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `kfold`,
            `gridsearch`,
            `pipeline-cv`,
            `nested`,
            `ml-cv-deep-theory`,
            `ml-cv-patterns`,
            `ml-cv-pitfalls`,
            `ml-cv-real-world`
          ],
          exerciseIds: [
            `ex-cv-1`,
            `ex-cv-2`
          ]
        }
      ],
  },
  {
    id: 'module-11',
    name: 'Supervised Learning',
    track: 'ml',
    description: `Advanced regression, classification, SVM, and gradient boosting methods.`,
    topics: [
        {
          id: `ml-regression`,
          title: `Regression Techniques`,
          description: `Polynomial, ridge, lasso, and elastic net regression.`,
          level: `intermediate`,
          module: `Supervised Learning`,
          moduleId: `module-11`,
          track: `ml`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `poly`,
            `ridge-lasso`,
            `assumptions`,
            `robust`,
            `ml-regression-deep-theory`,
            `ml-regression-patterns`,
            `ml-regression-pitfalls`,
            `ml-regression-real-world`
          ],
          exerciseIds: [
            `ex-reg-1`,
            `ex-reg-2`
          ]
        },
        {
          id: `ml-classification`,
          title: `Classification Algorithms`,
          description: `KNN, Naive Bayes, and multi-class strategies.`,
          level: `intermediate`,
          module: `Supervised Learning`,
          moduleId: `module-11`,
          track: `ml`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `knn`,
            `naive-bayes`,
            `multiclass`,
            `imbalanced`,
            `ml-classification-deep-theory`,
            `ml-classification-patterns`,
            `ml-classification-pitfalls`,
            `ml-classification-real-world`
          ],
          exerciseIds: [
            `ex-clf-1`,
            `ex-clf-2`
          ]
        },
        {
          id: `ml-svm`,
          title: `Support Vector Machines`,
          description: `Maximum margin classifiers with kernel trick.`,
          level: `intermediate`,
          module: `Supervised Learning`,
          moduleId: `module-11`,
          track: `ml`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `svm-linear`,
            `kernel`,
            `svc-params`,
            `svr`,
            `ml-svm-deep-theory`,
            `ml-svm-patterns`,
            `ml-svm-pitfalls`,
            `ml-svm-real-world`
          ],
          exerciseIds: [
            `ex-svm-1`,
            `ex-svm-2`
          ]
        },
        {
          id: `ml-boosting`,
          title: `Gradient Boosting (XGBoost/LightGBM)`,
          description: `State-of-the-art ensemble methods for tabular data.`,
          level: `intermediate`,
          module: `Supervised Learning`,
          moduleId: `module-11`,
          track: `ml`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `gbm`,
            `xgboost`,
            `lightgbm`,
            `tuning-gbm`,
            `ml-boosting-deep-theory`,
            `ml-boosting-patterns`,
            `ml-boosting-pitfalls`,
            `ml-boosting-real-world`
          ],
          exerciseIds: [
            `ex-xgb-1`,
            `ex-xgb-2`
          ]
        },
        {
          id: `ml-ensemble`,
          title: `Ensemble Methods`,
          description: `Bagging, boosting, stacking, and voting classifiers.`,
          level: `intermediate`,
          module: `Supervised Learning`,
          moduleId: `module-11`,
          track: `ml`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `bagging`,
            `voting`,
            `blending`,
            `diversity`,
            `ml-ensemble-deep-theory`,
            `ml-ensemble-patterns`,
            `ml-ensemble-pitfalls`,
            `ml-ensemble-real-world`
          ],
          exerciseIds: [
            `ex-ens-1`,
            `ex-ens-2`
          ]
        }
      ],
  },
  {
    id: 'module-12',
    name: 'Unsupervised Learning',
    track: 'ml',
    description: `Clustering, dimensionality reduction, anomaly detection, and association rules.`,
    topics: [
        {
          id: `ml-clustering`,
          title: `Clustering (K-Means, DBSCAN)`,
          description: `Group similar data points without labels.`,
          level: `beginner`,
          module: `Unsupervised Learning`,
          moduleId: `module-12`,
          track: `ml`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `kmeans`,
            `dbscan`,
            `hierarchical`,
            `eval-cluster`,
            `ml-clustering-deep-theory`,
            `ml-clustering-patterns`,
            `ml-clustering-pitfalls`,
            `ml-clustering-real-world`
          ],
          exerciseIds: [
            `ex-km-1`,
            `ex-km-2`
          ]
        },
        {
          id: `ml-dimred`,
          title: `Dimensionality Reduction (PCA, t-SNE)`,
          description: `Reduce feature dimensions while preserving structure.`,
          level: `beginner`,
          module: `Unsupervised Learning`,
          moduleId: `module-12`,
          track: `ml`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `pca`,
            `tsne`,
            `lda`,
            `autoencoder`,
            `ml-dimred-deep-theory`,
            `ml-dimred-patterns`,
            `ml-dimred-pitfalls`,
            `ml-dimred-real-world`
          ],
          exerciseIds: [
            `ex-pca-1`,
            `ex-pca-2`
          ]
        },
        {
          id: `ml-anomaly`,
          title: `Anomaly Detection`,
          description: `Identify outliers and novel patterns in data.`,
          level: `beginner`,
          module: `Unsupervised Learning`,
          moduleId: `module-12`,
          track: `ml`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `isolation`,
            `lof`,
            `oneclass`,
            `applications`,
            `ml-anomaly-deep-theory`,
            `ml-anomaly-patterns`,
            `ml-anomaly-pitfalls`,
            `ml-anomaly-real-world`
          ],
          exerciseIds: [
            `ex-anom-1`,
            `ex-anom-2`
          ]
        },
        {
          id: `ml-association`,
          title: `Association Rules`,
          description: `Find frequent itemsets and association rules in transactional data.`,
          level: `beginner`,
          module: `Unsupervised Learning`,
          moduleId: `module-12`,
          track: `ml`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `apriori`,
            `metrics`,
            `mlxtend`,
            `applications`,
            `ml-association-deep-theory`,
            `ml-association-patterns`,
            `ml-association-pitfalls`,
            `ml-association-real-world`
          ],
          exerciseIds: [
            `ex-assoc-1`,
            `ex-assoc-2`
          ]
        },
        {
          id: `ml-gmm`,
          title: `Gaussian Mixture Models`,
          description: `Probabilistic clustering with soft assignments.`,
          level: `beginner`,
          module: `Unsupervised Learning`,
          moduleId: `module-12`,
          track: `ml`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `gmm`,
            `em`,
            `vs-kmeans`,
            `applications-gmm`,
            `ml-gmm-deep-theory`,
            `ml-gmm-patterns`,
            `ml-gmm-pitfalls`,
            `ml-gmm-real-world`
          ],
          exerciseIds: [
            `ex-gmm-1`,
            `ex-gmm-2`
          ]
        }
      ],
  },
  {
    id: 'module-13',
    name: 'Feature Engineering & Model Selection',
    track: 'ml',
    description: `Feature scaling, selection, hyperparameter tuning, and model interpretability.`,
    topics: [
        {
          id: `ml-scaling`,
          title: `Feature Scaling & Encoding`,
          description: `Prepare features for ML algorithms.`,
          level: `advanced`,
          module: `Feature Engineering & Model Selection`,
          moduleId: `module-13`,
          track: `ml`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `scaling`,
            `encoding`,
            `binning`,
            `datetime-fe`,
            `ml-scaling-deep-theory`,
            `ml-scaling-patterns`,
            `ml-scaling-pitfalls`,
            `ml-scaling-real-world`
          ],
          exerciseIds: [
            `ex-scale-1`,
            `ex-scale-2`
          ]
        },
        {
          id: `ml-feature-sel`,
          title: `Feature Selection`,
          description: `Choose most informative features to reduce dimensionality and overfitting.`,
          level: `advanced`,
          module: `Feature Engineering & Model Selection`,
          moduleId: `module-13`,
          track: `ml`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `filter`,
            `wrapper`,
            `embedded`,
            `importance`,
            `ml-feature-sel-deep-theory`,
            `ml-feature-sel-patterns`,
            `ml-feature-sel-pitfalls`,
            `ml-feature-sel-real-world`
          ],
          exerciseIds: [
            `ex-fsel-1`,
            `ex-fsel-2`
          ]
        },
        {
          id: `ml-hyperparam`,
          title: `Hyperparameter Tuning`,
          description: `Systematic search for optimal model configuration.`,
          level: `advanced`,
          module: `Feature Engineering & Model Selection`,
          moduleId: `module-13`,
          track: `ml`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `grid`,
            `random`,
            `optuna`,
            `avoid-leakage`,
            `ml-hyperparam-deep-theory`,
            `ml-hyperparam-patterns`,
            `ml-hyperparam-pitfalls`,
            `ml-hyperparam-real-world`
          ],
          exerciseIds: [
            `ex-hp-1`,
            `ex-hp-2`
          ]
        },
        {
          id: `ml-bias-variance`,
          title: `Bias-Variance Tradeoff`,
          description: `Understanding underfitting and overfitting.`,
          level: `advanced`,
          module: `Feature Engineering & Model Selection`,
          moduleId: `module-13`,
          track: `ml`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `tradeoff`,
            `learning-curves`,
            `regularization-bv`,
            `double-descent`,
            `ml-bias-variance-deep-theory`,
            `ml-bias-variance-patterns`,
            `ml-bias-variance-pitfalls`,
            `ml-bias-variance-real-world`
          ],
          exerciseIds: [
            `ex-bv-1`,
            `ex-bv-2`
          ]
        },
        {
          id: `ml-interpret`,
          title: `Model Interpretability (SHAP, LIME)`,
          description: `Explain model predictions for trust and debugging.`,
          level: `advanced`,
          module: `Feature Engineering & Model Selection`,
          moduleId: `module-13`,
          track: `ml`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `shap`,
            `lime`,
            `global`,
            `fairness`,
            `ml-interpret-deep-theory`,
            `ml-interpret-patterns`,
            `ml-interpret-pitfalls`,
            `ml-interpret-real-world`
          ],
          exerciseIds: [
            `ex-shap-1`,
            `ex-shap-2`
          ]
        }
      ],
  },
  {
    id: 'module-14',
    name: 'Deep Learning Fundamentals',
    track: 'dl',
    description: `Neural networks, activations, loss functions, backpropagation, and regularization.`,
    topics: [
        {
          id: `dl-nn-basics`,
          title: `Neural Network Basics`,
          description: `Perceptrons, multi-layer networks, and forward propagation.`,
          level: `beginner`,
          module: `Deep Learning Fundamentals`,
          moduleId: `module-14`,
          track: `dl`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `perceptron`,
            `mlp`,
            `forward`,
            `capacity`,
            `dl-nn-basics-deep-theory`,
            `dl-nn-basics-patterns`,
            `dl-nn-basics-pitfalls`,
            `dl-nn-basics-real-world`
          ],
          exerciseIds: [
            `ex-nn-1`,
            `ex-nn-2`
          ]
        },
        {
          id: `dl-activations`,
          title: `Activation Functions`,
          description: `Non-linear functions enabling networks to learn complex patterns.`,
          level: `beginner`,
          module: `Deep Learning Fundamentals`,
          moduleId: `module-14`,
          track: `dl`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `relu`,
            `sigmoid-tanh`,
            `softmax`,
            `modern`,
            `dl-activations-deep-theory`,
            `dl-activations-patterns`,
            `dl-activations-pitfalls`,
            `dl-activations-real-world`
          ],
          exerciseIds: [
            `ex-act-1`,
            `ex-act-2`
          ]
        },
        {
          id: `dl-loss`,
          title: `Loss Functions`,
          description: `Objective functions that neural networks minimize during training.`,
          level: `beginner`,
          module: `Deep Learning Fundamentals`,
          moduleId: `module-14`,
          track: `dl`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `mse`,
            `ce`,
            `multi-task`,
            `monitor`,
            `dl-loss-deep-theory`,
            `dl-loss-patterns`,
            `dl-loss-pitfalls`,
            `dl-loss-real-world`
          ],
          exerciseIds: [
            `ex-loss-1`,
            `ex-loss-2`
          ]
        },
        {
          id: `dl-backprop`,
          title: `Backpropagation`,
          description: `Computing gradients through the computational graph via chain rule.`,
          level: `beginner`,
          module: `Deep Learning Fundamentals`,
          moduleId: `module-14`,
          track: `dl`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `concept`,
            `manual`,
            `autograd`,
            `vanishing`,
            `dl-backprop-deep-theory`,
            `dl-backprop-patterns`,
            `dl-backprop-pitfalls`,
            `dl-backprop-real-world`
          ],
          exerciseIds: [
            `ex-bp-1`,
            `ex-bp-2`
          ]
        },
        {
          id: `dl-init-reg`,
          title: `Weight Initialization & Regularization`,
          description: `Starting weights and techniques to prevent overfitting.`,
          level: `beginner`,
          module: `Deep Learning Fundamentals`,
          moduleId: `module-14`,
          track: `dl`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `init`,
            `dropout`,
            `batchnorm`,
            `early-stop`,
            `dl-init-reg-deep-theory`,
            `dl-init-reg-patterns`,
            `dl-init-reg-pitfalls`,
            `dl-init-reg-real-world`
          ],
          exerciseIds: [
            `ex-init-1`,
            `ex-init-2`
          ]
        }
      ],
  },
  {
    id: 'module-15',
    name: 'PyTorch & Neural Networks',
    track: 'dl',
    description: `PyTorch tensors, autograd, nn.Module, training loops, and GPU acceleration.`,
    topics: [
        {
          id: `pt-tensors`,
          title: `PyTorch Tensors`,
          description: `PyTorch fundamental data structure with GPU support.`,
          level: `intermediate`,
          module: `PyTorch & Neural Networks`,
          moduleId: `module-15`,
          track: `dl`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `tensor-basics`,
            `ops`,
            `numpy-bridge`,
            `device`,
            `pt-tensors-deep-theory`,
            `pt-tensors-patterns`,
            `pt-tensors-pitfalls`,
            `pt-tensors-real-world`
          ],
          exerciseIds: [
            `ex-pt-1`,
            `ex-pt-2`
          ]
        },
        {
          id: `pt-autograd`,
          title: `Autograd & Computational Graphs`,
          description: `Automatic differentiation engine in PyTorch.`,
          level: `intermediate`,
          module: `PyTorch & Neural Networks`,
          moduleId: `module-15`,
          track: `dl`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `grad`,
            `graph`,
            `leaf`,
            `higher`,
            `pt-autograd-deep-theory`,
            `pt-autograd-patterns`,
            `pt-autograd-pitfalls`,
            `pt-autograd-real-world`
          ],
          exerciseIds: [
            `ex-ag-1`,
            `ex-ag-2`
          ]
        },
        {
          id: `pt-module`,
          title: `Building NN with nn.Module`,
          description: `Object-oriented model definition in PyTorch.`,
          level: `intermediate`,
          module: `PyTorch & Neural Networks`,
          moduleId: `module-15`,
          track: `dl`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `module`,
            `layers`,
            `loss-opt`,
            `save`,
            `pt-module-deep-theory`,
            `pt-module-patterns`,
            `pt-module-pitfalls`,
            `pt-module-real-world`
          ],
          exerciseIds: [
            `ex-mod-1`,
            `ex-mod-2`
          ]
        },
        {
          id: `pt-training`,
          title: `DataLoaders & Training Loops`,
          description: `Efficient data loading and standard training loop pattern.`,
          level: `intermediate`,
          module: `PyTorch & Neural Networks`,
          moduleId: `module-15`,
          track: `dl`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `dataset`,
            `loop`,
            `transforms`,
            `scheduler`,
            `pt-training-deep-theory`,
            `pt-training-patterns`,
            `pt-training-pitfalls`,
            `pt-training-real-world`
          ],
          exerciseIds: [
            `ex-train-1`,
            `ex-train-2`
          ]
        },
        {
          id: `pt-gpu`,
          title: `GPU Training & Mixed Precision`,
          description: `Accelerate training with CUDA and automatic mixed precision.`,
          level: `intermediate`,
          module: `PyTorch & Neural Networks`,
          moduleId: `module-15`,
          track: `dl`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `cuda`,
            `amp`,
            `compile`,
            `distributed`,
            `pt-gpu-deep-theory`,
            `pt-gpu-patterns`,
            `pt-gpu-pitfalls`,
            `pt-gpu-real-world`
          ],
          exerciseIds: [
            `ex-gpu-1`,
            `ex-gpu-2`
          ]
        }
      ],
  },
  {
    id: 'module-16',
    name: 'CNNs & Computer Vision',
    track: 'dl',
    description: `Convolutional networks, architectures, transfer learning, detection, and segmentation.`,
    topics: [
        {
          id: `dl-conv`,
          title: `Convolutional Layers`,
          description: `Spatial feature extraction with convolution and pooling.`,
          level: `beginner`,
          module: `CNNs & Computer Vision`,
          moduleId: `module-16`,
          track: `dl`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `conv2d`,
            `pooling`,
            `receptive`,
            `cnn-arch`,
            `dl-conv-deep-theory`,
            `dl-conv-patterns`,
            `dl-conv-pitfalls`,
            `dl-conv-real-world`
          ],
          exerciseIds: [
            `ex-conv-1`,
            `ex-conv-2`
          ]
        },
        {
          id: `dl-cnn-arch`,
          title: `CNN Architectures (ResNet, VGG)`,
          description: `Landmark architectures that shaped computer vision.`,
          level: `beginner`,
          module: `CNNs & Computer Vision`,
          moduleId: `module-16`,
          track: `dl`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `vgg`,
            `resnet`,
            `modern`,
            `torchvision`,
            `dl-cnn-arch-deep-theory`,
            `dl-cnn-arch-patterns`,
            `dl-cnn-arch-pitfalls`,
            `dl-cnn-arch-real-world`
          ],
          exerciseIds: [
            `ex-res-1`,
            `ex-res-2`
          ]
        },
        {
          id: `dl-transfer`,
          title: `Transfer Learning`,
          description: `Leverage pretrained models for new tasks with limited data.`,
          level: `beginner`,
          module: `CNNs & Computer Vision`,
          moduleId: `module-16`,
          track: `dl`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `strategy`,
            `finetune`,
            `domain`,
            `hub`,
            `dl-transfer-deep-theory`,
            `dl-transfer-patterns`,
            `dl-transfer-pitfalls`,
            `dl-transfer-real-world`
          ],
          exerciseIds: [
            `ex-tl-1`,
            `ex-tl-2`
          ]
        },
        {
          id: `dl-detection`,
          title: `Object Detection`,
          description: `Locate and classify multiple objects in images.`,
          level: `beginner`,
          module: `CNNs & Computer Vision`,
          moduleId: `module-16`,
          track: `dl`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `metrics-det`,
            `rcnn`,
            `yolo`,
            `tools`,
            `dl-detection-deep-theory`,
            `dl-detection-patterns`,
            `dl-detection-pitfalls`,
            `dl-detection-real-world`
          ],
          exerciseIds: [
            `ex-det-1`,
            `ex-det-2`
          ]
        },
        {
          id: `dl-segmentation`,
          title: `Image Segmentation`,
          description: `Pixel-level classification: semantic and instance segmentation.`,
          level: `beginner`,
          module: `CNNs & Computer Vision`,
          moduleId: `module-16`,
          track: `dl`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `semantic`,
            `instance`,
            `unet`,
            `metrics-seg`,
            `dl-segmentation-deep-theory`,
            `dl-segmentation-patterns`,
            `dl-segmentation-pitfalls`,
            `dl-segmentation-real-world`
          ],
          exerciseIds: [
            `ex-seg-1`,
            `ex-seg-2`
          ]
        }
      ],
  },
  {
    id: 'module-17',
    name: 'NLP, RNNs & Sequence Models',
    track: 'dl',
    description: `Text processing, embeddings, RNNs, LSTMs, and sequence-to-sequence models.`,
    topics: [
        {
          id: `nlp-preprocess`,
          title: `Text Preprocessing & Tokenization`,
          description: `Prepare raw text for neural network input.`,
          level: `beginner`,
          module: `NLP, RNNs & Sequence Models`,
          moduleId: `module-17`,
          track: `dl`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `clean`,
            `tokenize`,
            `hf-tokenizer`,
            `vocab`,
            `nlp-preprocess-deep-theory`,
            `nlp-preprocess-patterns`,
            `nlp-preprocess-pitfalls`,
            `nlp-preprocess-real-world`
          ],
          exerciseIds: [
            `ex-nlp-1`,
            `ex-nlp-2`
          ]
        },
        {
          id: `nlp-embeddings`,
          title: `Word Embeddings (Word2Vec, GloVe)`,
          description: `Dense vector representations capturing semantic meaning.`,
          level: `beginner`,
          module: `NLP, RNNs & Sequence Models`,
          moduleId: `module-17`,
          track: `dl`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `word2vec`,
            `glove`,
            `nn-embed`,
            `contextual`,
            `nlp-embeddings-deep-theory`,
            `nlp-embeddings-patterns`,
            `nlp-embeddings-pitfalls`,
            `nlp-embeddings-real-world`
          ],
          exerciseIds: [
            `ex-emb-1`,
            `ex-emb-2`
          ]
        },
        {
          id: `nlp-rnn`,
          title: `RNNs & LSTMs`,
          description: `Recurrent networks for sequential data processing.`,
          level: `beginner`,
          module: `NLP, RNNs & Sequence Models`,
          moduleId: `module-17`,
          track: `dl`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `rnn`,
            `lstm`,
            `gru`,
            `bidirectional`,
            `nlp-rnn-deep-theory`,
            `nlp-rnn-patterns`,
            `nlp-rnn-pitfalls`,
            `nlp-rnn-real-world`
          ],
          exerciseIds: [
            `ex-rnn-1`,
            `ex-rnn-2`
          ]
        },
        {
          id: `nlp-seq2seq`,
          title: `Seq2Seq & Attention Preview`,
          description: `Encoder-decoder architecture for translation and summarization.`,
          level: `beginner`,
          module: `NLP, RNNs & Sequence Models`,
          moduleId: `module-17`,
          track: `dl`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `seq2seq`,
            `teacher`,
            `beam`,
            `apps`,
            `nlp-seq2seq-deep-theory`,
            `nlp-seq2seq-patterns`,
            `nlp-seq2seq-pitfalls`,
            `nlp-seq2seq-real-world`
          ],
          exerciseIds: [
            `ex-s2s-1`,
            `ex-s2s-2`
          ]
        },
        {
          id: `nlp-ner`,
          title: `Named Entity Recognition`,
          description: `Token-level sequence labeling for entity extraction.`,
          level: `beginner`,
          module: `NLP, RNNs & Sequence Models`,
          moduleId: `module-17`,
          track: `dl`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `ner-task`,
            `bi-lstm`,
            `bert-ner`,
            `applications`,
            `nlp-ner-deep-theory`,
            `nlp-ner-patterns`,
            `nlp-ner-pitfalls`,
            `nlp-ner-real-world`
          ],
          exerciseIds: [
            `ex-ner-1`,
            `ex-ner-2`
          ]
        }
      ],
  },
  {
    id: 'module-18',
    name: 'Transformers & Attention',
    track: 'dl',
    description: `Self-attention, transformer architecture, BERT, GPT, and positional encoding.`,
    topics: [
        {
          id: `dl-attention`,
          title: `Self-Attention Mechanism`,
          description: `The core innovation enabling modern NLP and beyond.`,
          level: `advanced`,
          module: `Transformers & Attention`,
          moduleId: `module-18`,
          track: `dl`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `attention`,
            `scaled`,
            `self-attn`,
            `multi-head`,
            `dl-attention-deep-theory`,
            `dl-attention-patterns`,
            `dl-attention-pitfalls`,
            `dl-attention-real-world`
          ],
          exerciseIds: [
            `ex-attn-1`,
            `ex-attn-2`
          ]
        },
        {
          id: `dl-transformer`,
          title: `Transformer Architecture`,
          description: `The complete encoder-decoder architecture from "Attention Is All You Need".`,
          level: `advanced`,
          module: `Transformers & Attention`,
          moduleId: `module-18`,
          track: `dl`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `encoder`,
            `decoder`,
            `ffn`,
            `layer-norm`,
            `dl-transformer-deep-theory`,
            `dl-transformer-patterns`,
            `dl-transformer-pitfalls`,
            `dl-transformer-real-world`
          ],
          exerciseIds: [
            `ex-tr-1`,
            `ex-tr-2`
          ]
        },
        {
          id: `dl-positional`,
          title: `Positional Encoding`,
          description: `Inject sequence order information since attention is permutation-invariant.`,
          level: `advanced`,
          module: `Transformers & Attention`,
          moduleId: `module-18`,
          track: `dl`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `sinusoidal`,
            `learned`,
            `rope`,
            `alibi`,
            `dl-positional-deep-theory`,
            `dl-positional-patterns`,
            `dl-positional-pitfalls`,
            `dl-positional-real-world`
          ],
          exerciseIds: [
            `ex-pe-1`,
            `ex-pe-2`
          ]
        },
        {
          id: `dl-bert`,
          title: `BERT & Encoder Models`,
          description: `Bidirectional encoder representations from transformers.`,
          level: `advanced`,
          module: `Transformers & Attention`,
          moduleId: `module-18`,
          track: `dl`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `bert`,
            `mlm`,
            `fine-tune`,
            `encoder-models`,
            `dl-bert-deep-theory`,
            `dl-bert-patterns`,
            `dl-bert-pitfalls`,
            `dl-bert-real-world`
          ],
          exerciseIds: [
            `ex-bert-1`,
            `ex-bert-2`
          ]
        },
        {
          id: `dl-gpt`,
          title: `GPT & Decoder Models`,
          description: `Autoregressive language models for text generation.`,
          level: `advanced`,
          module: `Transformers & Attention`,
          moduleId: `module-18`,
          track: `dl`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `gpt`,
            `generation`,
            `causal`,
            `scaling`,
            `dl-gpt-deep-theory`,
            `dl-gpt-patterns`,
            `dl-gpt-pitfalls`,
            `dl-gpt-real-world`
          ],
          exerciseIds: [
            `ex-gpt-1`,
            `ex-gpt-2`
          ]
        }
      ],
  },
  {
    id: 'module-19',
    name: 'LLMs, GenAI & Prompt Engineering',
    track: 'ai',
    description: `Large language models, prompting, RAG, fine-tuning, and AI agents.`,
    topics: [
        {
          id: `ai-llm`,
          title: `Large Language Models Overview`,
          description: `Architecture, capabilities, and landscape of modern LLMs.`,
          level: `advanced`,
          module: `LLMs, GenAI & Prompt Engineering`,
          moduleId: `module-19`,
          track: `ai`,
          estimatedMinutes: 45,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `landscape`,
            `capabilities`,
            `tokens`,
            `eval`,
            `ai-llm-deep-theory`,
            `ai-llm-patterns`,
            `ai-llm-pitfalls`,
            `ai-llm-real-world`
          ],
          exerciseIds: [
            `ex-llm-1`,
            `ex-llm-2`
          ]
        },
        {
          id: `ai-prompt`,
          title: `Prompt Engineering`,
          description: `Design effective prompts to maximize LLM output quality.`,
          level: `advanced`,
          module: `LLMs, GenAI & Prompt Engineering`,
          moduleId: `module-19`,
          track: `ai`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `basics`,
            `cot`,
            `few-shot`,
            `advanced-prompt`,
            `ai-prompt-deep-theory`,
            `ai-prompt-patterns`,
            `ai-prompt-pitfalls`,
            `ai-prompt-real-world`
          ],
          exerciseIds: [
            `ex-prompt-1`,
            `ex-prompt-2`
          ]
        },
        {
          id: `ai-rag`,
          title: `RAG (Retrieval Augmented Generation)`,
          description: `Ground LLM responses in external knowledge via retrieval.`,
          level: `advanced`,
          module: `LLMs, GenAI & Prompt Engineering`,
          moduleId: `module-19`,
          track: `ai`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `rag-arch`,
            `embeddings-rag`,
            `chunking`,
            `eval-rag`,
            `ai-rag-deep-theory`,
            `ai-rag-patterns`,
            `ai-rag-pitfalls`,
            `ai-rag-real-world`
          ],
          exerciseIds: [
            `ex-rag-1`,
            `ex-rag-2`
          ]
        },
        {
          id: `ai-finetune`,
          title: `Fine-tuning & LoRA`,
          description: `Adapt pretrained LLMs to specific tasks and domains.`,
          level: `advanced`,
          module: `LLMs, GenAI & Prompt Engineering`,
          moduleId: `module-19`,
          track: `ai`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `finetune`,
            `lora`,
            `instruction`,
            `rlhf`,
            `ai-finetune-deep-theory`,
            `ai-finetune-patterns`,
            `ai-finetune-pitfalls`,
            `ai-finetune-real-world`
          ],
          exerciseIds: [
            `ex-ft-1`,
            `ex-ft-2`
          ]
        },
        {
          id: `ai-agents`,
          title: `Agents & Tool Use`,
          description: `LLM agents that reason, plan, and interact with external tools.`,
          level: `expert`,
          module: `LLMs, GenAI & Prompt Engineering`,
          moduleId: `module-19`,
          track: `ai`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `agents`,
            `tools`,
            `frameworks`,
            `safety`,
            `ai-agents-deep-theory`,
            `ai-agents-patterns`,
            `ai-agents-pitfalls`,
            `ai-agents-real-world`
          ],
          exerciseIds: [
            `ex-agent-1`,
            `ex-agent-2`
          ]
        }
      ],
  },
  {
    id: 'module-20',
    name: 'MLOps, Deployment & AI Ethics',
    track: 'ai',
    description: `Model serving, Docker, monitoring, drift detection, bias, fairness, and responsible AI.`,
    topics: [
        {
          id: `ai-serving`,
          title: `Model Serialization & Serving`,
          description: `Save, load, and serve ML models in production.`,
          level: `advanced`,
          module: `MLOps, Deployment & AI Ethics`,
          moduleId: `module-20`,
          track: `ai`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `serialize`,
            `fastapi`,
            `onnx`,
            `batch-realtime`,
            `ai-serving-deep-theory`,
            `ai-serving-patterns`,
            `ai-serving-pitfalls`,
            `ai-serving-real-world`
          ],
          exerciseIds: [
            `ex-serve-1`,
            `ex-serve-2`
          ]
        },
        {
          id: `ai-docker`,
          title: `Docker & Cloud Deployment`,
          description: `Containerize and deploy ML applications to cloud.`,
          level: `advanced`,
          module: `MLOps, Deployment & AI Ethics`,
          moduleId: `module-20`,
          track: `ai`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `docker`,
            `compose`,
            `cloud`,
            `cicd`,
            `ai-docker-deep-theory`,
            `ai-docker-patterns`,
            `ai-docker-pitfalls`,
            `ai-docker-real-world`
          ],
          exerciseIds: [
            `ex-docker-1`,
            `ex-docker-2`
          ]
        },
        {
          id: `ai-monitoring`,
          title: `Monitoring & Drift Detection`,
          description: `Track model performance and data quality in production.`,
          level: `advanced`,
          module: `MLOps, Deployment & AI Ethics`,
          moduleId: `module-20`,
          track: `ai`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `monitoring`,
            `drift`,
            `evidently`,
            `retraining`,
            `ai-monitoring-deep-theory`,
            `ai-monitoring-patterns`,
            `ai-monitoring-pitfalls`,
            `ai-monitoring-real-world`
          ],
          exerciseIds: [
            `ex-mon-1`,
            `ex-mon-2`
          ]
        },
        {
          id: `ai-bias`,
          title: `AI Ethics, Bias & Fairness`,
          description: `Identify and mitigate bias in ML systems.`,
          level: `advanced`,
          module: `MLOps, Deployment & AI Ethics`,
          moduleId: `module-20`,
          track: `ai`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `bias`,
            `fairness`,
            `mitigation`,
            `explain-ethics`,
            `ai-bias-deep-theory`,
            `ai-bias-patterns`,
            `ai-bias-pitfalls`,
            `ai-bias-real-world`
          ],
          exerciseIds: [
            `ex-bias-1`,
            `ex-bias-2`
          ]
        },
        {
          id: `ai-governance`,
          title: `Responsible AI & Governance`,
          description: `Organizational frameworks for ethical AI development and deployment.`,
          level: `advanced`,
          module: `MLOps, Deployment & AI Ethics`,
          moduleId: `module-20`,
          track: `ai`,
          estimatedMinutes: 40,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `framework`,
            `eu-ai-act`,
            `privacy`,
            `red-team`,
            `ai-governance-deep-theory`,
            `ai-governance-patterns`,
            `ai-governance-pitfalls`,
            `ai-governance-real-world`
          ],
          exerciseIds: [
            `ex-gov-1`,
            `ex-gov-2`
          ]
        }
      ],
  },
  {
    id: 'module-21',
    name: 'Python Testing, Debugging & Async',
    track: 'python',
    description: `pytest and unittest, pdb and logging, asyncio fundamentals, regex mastery, and concurrency with threading and multiprocessing.`,
    topics: [
        {
          id: `py-testing`,
          title: `Testing with pytest & unittest`,
          description: `Write reliable unit tests, use fixtures and mocking, and integrate tests into CI pipelines.`,
          level: `intermediate`,
          module: `Python Testing, Debugging & Async`,
          moduleId: `module-21`,
          track: `python`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `pytest-basics`,
            `fixtures`,
            `unittest-mock`,
            `coverage-ci`,
            `py-testing-deep-theory`,
            `py-testing-patterns`,
            `py-testing-pitfalls`,
            `py-testing-real-world`
          ],
          exerciseIds: [
            `ex-pytest-1`,
            `ex-pytest-2`
          ]
        },
        {
          id: `py-debugging`,
          title: `Debugging, Logging & Tracebacks`,
          description: `Use pdb, logging, and traceback analysis to diagnose failures systematically in Python programs.`,
          level: `intermediate`,
          module: `Python Testing, Debugging & Async`,
          moduleId: `module-21`,
          track: `python`,
          estimatedMinutes: 45,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `pdb`,
            `logging`,
            `tracebacks`,
            `debug-tools`,
            `py-debugging-deep-theory`,
            `py-debugging-patterns`,
            `py-debugging-pitfalls`,
            `py-debugging-real-world`
          ],
          exerciseIds: [
            `ex-debug-1`,
            `ex-debug-2`
          ]
        },
        {
          id: `py-async`,
          title: `Asyncio & Async/Await`,
          description: `Write concurrent I/O-bound programs with asyncio, coroutines, and introductory aiohttp patterns.`,
          level: `intermediate`,
          module: `Python Testing, Debugging & Async`,
          moduleId: `module-21`,
          track: `python`,
          estimatedMinutes: 55,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `coroutines`,
            `gather-tasks`,
            `aiohttp`,
            `async-pitfalls`,
            `py-async-deep-theory`,
            `py-async-patterns`,
            `py-async-pitfalls`,
            `py-async-real-world`
          ],
          exerciseIds: [
            `ex-async-1`,
            `ex-async-2`
          ]
        },
        {
          id: `py-regex`,
          title: `Regular Expressions with re`,
          description: `Match, search, and transform text using Python's re module and common regex patterns.`,
          level: `intermediate`,
          module: `Python Testing, Debugging & Async`,
          moduleId: `module-21`,
          track: `python`,
          estimatedMinutes: 45,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `re-basics`,
            `patterns`,
            `flags-groups`,
            `regex-caveats`,
            `py-regex-deep-theory`,
            `py-regex-patterns`,
            `py-regex-pitfalls`,
            `py-regex-real-world`
          ],
          exerciseIds: [
            `ex-regex-1`,
            `ex-regex-2`
          ]
        },
        {
          id: `py-concurrency`,
          title: `Threading, Multiprocessing & the GIL`,
          description: `Choose threading, multiprocessing, or asyncio for parallelism; understand the Global Interpreter Lock.`,
          level: `advanced`,
          module: `Python Testing, Debugging & Async`,
          moduleId: `module-21`,
          track: `python`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `gil`,
            `threading`,
            `multiprocessing`,
            `choosing`,
            `py-concurrency-deep-theory`,
            `py-concurrency-patterns`,
            `py-concurrency-pitfalls`,
            `py-concurrency-real-world`
          ],
          exerciseIds: [
            `ex-conc-1`,
            `ex-conc-2`
          ]
        }
      ],
  },
  {
    id: 'module-22',
    name: 'File I/O, APIs & Data Formats',
    track: 'python',
    description: `pathlib and serialization formats, HTTP APIs with requests, web scraping ethics, SQLite, and structured data exchange.`,
    topics: [
        {
          id: `py-files`,
          title: `Files & Serialization`,
          description: `Read and write files safely with pathlib, json, csv, and pickle.`,
          level: `intermediate`,
          module: `File I/O, APIs & Data Formats`,
          moduleId: `module-22`,
          track: `python`,
          estimatedMinutes: 45,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `pathlib`,
            `json-csv`,
            `pickle`,
            `io-patterns`,
            `py-files-deep-theory`,
            `py-files-patterns`,
            `py-files-pitfalls`,
            `py-files-real-world`
          ],
          exerciseIds: [
            `ex-files-1`,
            `ex-files-2`
          ]
        },
        {
          id: `py-apis`,
          title: `HTTP & REST APIs`,
          description: `Consume REST APIs with requests: methods, headers, auth, and error handling.`,
          level: `intermediate`,
          module: `File I/O, APIs & Data Formats`,
          moduleId: `module-22`,
          track: `python`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `requests-basics`,
            `rest`,
            `auth-errors`,
            `testing-apis`,
            `py-apis-deep-theory`,
            `py-apis-patterns`,
            `py-apis-pitfalls`,
            `py-apis-real-world`
          ],
          exerciseIds: [
            `ex-api-1`,
            `ex-api-2`
          ]
        },
        {
          id: `py-web-scrape`,
          title: `Web Scraping Basics`,
          description: `Extract data with BeautifulSoup while respecting ethics, robots.txt, and rate limits.`,
          level: `intermediate`,
          module: `File I/O, APIs & Data Formats`,
          moduleId: `module-22`,
          track: `python`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `bs4`,
            `fetch`,
            `extract`,
            `ethics`,
            `py-web-scrape-deep-theory`,
            `py-web-scrape-patterns`,
            `py-web-scrape-pitfalls`,
            `py-web-scrape-real-world`
          ],
          exerciseIds: [
            `ex-scrape-1`,
            `ex-scrape-2`
          ]
        },
        {
          id: `py-sqlite`,
          title: `SQLite with Python`,
          description: `Use sqlite3 for embedded relational storage, parameterized queries, and transactions.`,
          level: `intermediate`,
          module: `File I/O, APIs & Data Formats`,
          moduleId: `module-22`,
          track: `python`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `connect`,
            `sql`,
            `orm-alt`,
            `security`,
            `py-sqlite-deep-theory`,
            `py-sqlite-patterns`,
            `py-sqlite-pitfalls`,
            `py-sqlite-real-world`
          ],
          exerciseIds: [
            `ex-sql-1`,
            `ex-sql-2`
          ]
        },
        {
          id: `py-serialization`,
          title: `Advanced Serialization`,
          description: `JSON Schema validation, YAML config, and columnar Parquet introduction.`,
          level: `intermediate`,
          module: `File I/O, APIs & Data Formats`,
          moduleId: `module-22`,
          track: `python`,
          estimatedMinutes: 45,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `json-schema`,
            `yaml`,
            `parquet`,
            `formats-choose`,
            `py-serialization-deep-theory`,
            `py-serialization-patterns`,
            `py-serialization-pitfalls`,
            `py-serialization-real-world`
          ],
          exerciseIds: [
            `ex-ser-1`,
            `ex-ser-2`
          ]
        }
      ],
  },
  {
    id: 'module-23',
    name: 'SciPy & Statistical Computing',
    track: 'data',
    description: `Numerical optimization and integration, hypothesis testing, distributions, regression, and Bayesian inference fundamentals.`,
    topics: [
        {
          id: `scipy-basics`,
          title: `SciPy Numerical Tools`,
          description: `Use scipy.optimize, integrate, and interpolate for scientific computing tasks.`,
          level: `intermediate`,
          module: `SciPy & Statistical Computing`,
          moduleId: `module-23`,
          track: `data`,
          estimatedMinutes: 55,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `optimize`,
            `integrate`,
            `interpolate`,
            `scipy-ecosystem`,
            `scipy-basics-deep-theory`,
            `scipy-basics-patterns`,
            `scipy-basics-pitfalls`,
            `scipy-basics-real-world`
          ],
          exerciseIds: [
            `ex-scipy-1`,
            `ex-scipy-2`
          ]
        },
        {
          id: `stats-hypothesis`,
          title: `Hypothesis Testing`,
          description: `Apply t-tests, chi-square tests, and interpret p-values responsibly.`,
          level: `intermediate`,
          module: `SciPy & Statistical Computing`,
          moduleId: `module-23`,
          track: `data`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `hypothesis`,
            `ttest`,
            `chisq`,
            `pvalue-interpret`,
            `stats-hypothesis-deep-theory`,
            `stats-hypothesis-patterns`,
            `stats-hypothesis-pitfalls`,
            `stats-hypothesis-real-world`
          ],
          exerciseIds: [
            `ex-hyp-1`,
            `ex-hyp-2`
          ]
        },
        {
          id: `stats-distributions`,
          title: `Probability Distributions`,
          description: `Model uncertainty with scipy.stats: PDFs, CDFs, sampling, and fitting.`,
          level: `intermediate`,
          module: `SciPy & Statistical Computing`,
          moduleId: `module-23`,
          track: `data`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `rv`,
            `fit`,
            `sampling`,
            `clt`,
            `stats-distributions-deep-theory`,
            `stats-distributions-patterns`,
            `stats-distributions-pitfalls`,
            `stats-distributions-real-world`
          ],
          exerciseIds: [
            `ex-dist-1`,
            `ex-dist-2`
          ]
        },
        {
          id: `stats-regression`,
          title: `Regression with statsmodels`,
          description: `Ordinary least squares and logistic regression for inference-rich modeling.`,
          level: `intermediate`,
          module: `SciPy & Statistical Computing`,
          moduleId: `module-23`,
          track: `data`,
          estimatedMinutes: 55,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `ols`,
            `logistic`,
            `diagnostics`,
            `inference-vs-pred`,
            `stats-regression-deep-theory`,
            `stats-regression-patterns`,
            `stats-regression-pitfalls`,
            `stats-regression-real-world`
          ],
          exerciseIds: [
            `ex-reg-1`,
            `ex-reg-2`
          ]
        },
        {
          id: `stats-bayes`,
          title: `Bayesian Inference Intro`,
          description: `Update beliefs with data using Bayes' theorem, priors, and posterior sampling overview.`,
          level: `advanced`,
          module: `SciPy & Statistical Computing`,
          moduleId: `module-23`,
          track: `data`,
          estimatedMinutes: 55,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `bayes-theorem`,
            `priors`,
            `mcmc`,
            `bayes-ml`,
            `stats-bayes-deep-theory`,
            `stats-bayes-patterns`,
            `stats-bayes-pitfalls`,
            `stats-bayes-real-world`
          ],
          exerciseIds: [
            `ex-bayes-1`,
            `ex-bayes-2`
          ]
        }
      ],
  },
  {
    id: 'module-24',
    name: 'Time Series & Recommender Systems',
    track: 'ml',
    description: `ARIMA and forecasting, collaborative and content-based recommenders, and imbalanced classification techniques.`,
    topics: [
        {
          id: `ml-timeseries`,
          title: `Time Series Foundations`,
          description: `Decompose series, check stationarity, and fit ARIMA models.`,
          level: `advanced`,
          module: `Time Series & Recommender Systems`,
          moduleId: `module-24`,
          track: `ml`,
          estimatedMinutes: 60,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `components`,
            `stationarity`,
            `arima`,
            `seasonal-arima`,
            `ml-timeseries-deep-theory`,
            `ml-timeseries-patterns`,
            `ml-timeseries-pitfalls`,
            `ml-timeseries-real-world`
          ],
          exerciseIds: [
            `ex-ts-1`,
            `ex-ts-2`
          ]
        },
        {
          id: `ml-forecasting`,
          title: `Forecasting with Prophet & sklearn`,
          description: `Practical forecasting pipelines for business time series.`,
          level: `advanced`,
          module: `Time Series & Recommender Systems`,
          moduleId: `module-24`,
          track: `ml`,
          estimatedMinutes: 55,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `prophet`,
            `sklearn-ts`,
            `metrics-ts`,
            `pipeline`,
            `ml-forecasting-deep-theory`,
            `ml-forecasting-patterns`,
            `ml-forecasting-pitfalls`,
            `ml-forecasting-real-world`
          ],
          exerciseIds: [
            `ex-fc-1`,
            `ex-fc-2`
          ]
        },
        {
          id: `ml-recsys-collab`,
          title: `Collaborative Filtering`,
          description: `Recommend items from user-item interaction patterns.`,
          level: `advanced`,
          module: `Time Series & Recommender Systems`,
          moduleId: `module-24`,
          track: `ml`,
          estimatedMinutes: 55,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `matrix-factor`,
            `neighborhood`,
            `implicit`,
            `eval-recsys`,
            `ml-recsys-collab-deep-theory`,
            `ml-recsys-collab-patterns`,
            `ml-recsys-collab-pitfalls`,
            `ml-recsys-collab-real-world`
          ],
          exerciseIds: [
            `ex-cf-1`,
            `ex-cf-2`
          ]
        },
        {
          id: `ml-recsys-content`,
          title: `Content-Based Filtering`,
          description: `Recommend from item features and user preference profiles.`,
          level: `advanced`,
          module: `Time Series & Recommender Systems`,
          moduleId: `module-24`,
          track: `ml`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `features`,
            `similarity`,
            `learning`,
            `limits`,
            `ml-recsys-content-deep-theory`,
            `ml-recsys-content-patterns`,
            `ml-recsys-content-pitfalls`,
            `ml-recsys-content-real-world`
          ],
          exerciseIds: [
            `ex-cb-1`,
            `ex-cb-2`
          ]
        },
        {
          id: `ml-imbalanced`,
          title: `Imbalanced Classification`,
          description: `Handle skewed classes with resampling, weights, and proper metrics.`,
          level: `advanced`,
          module: `Time Series & Recommender Systems`,
          moduleId: `module-24`,
          track: `ml`,
          estimatedMinutes: 55,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `problem`,
            `smote`,
            `weights`,
            `metrics-imb`,
            `ml-imbalanced-deep-theory`,
            `ml-imbalanced-patterns`,
            `ml-imbalanced-pitfalls`,
            `ml-imbalanced-real-world`
          ],
          exerciseIds: [
            `ex-imb-1`,
            `ex-imb-2`
          ]
        }
      ],
  },
  {
    id: 'module-25',
    name: 'Reinforcement Learning',
    track: 'ml',
    description: `MDPs, Q-learning, deep Q-networks, policy gradients, and real-world RL applications.`,
    topics: [
        {
          id: `rl-basics`,
          title: `MDPs, Rewards & Policies`,
          description: `Formalize sequential decision making as Markov Decision Processes.`,
          level: `advanced`,
          module: `Reinforcement Learning`,
          moduleId: `module-25`,
          track: `ml`,
          estimatedMinutes: 55,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `mdp`,
            `value-policy`,
            `explore`,
            `rl-loop`,
            `rl-basics-deep-theory`,
            `rl-basics-patterns`,
            `rl-basics-pitfalls`,
            `rl-basics-real-world`
          ],
          exerciseIds: [
            `ex-rl-1`,
            `ex-rl-2`
          ]
        },
        {
          id: `rl-qlearning`,
          title: `Q-Learning & Bellman Updates`,
          description: `Model-free temporal difference learning for optimal action-values.`,
          level: `advanced`,
          module: `Reinforcement Learning`,
          moduleId: `module-25`,
          track: `ml`,
          estimatedMinutes: 60,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `qlearning`,
            `td`,
            `tabular`,
            `convergence`,
            `rl-qlearning-deep-theory`,
            `rl-qlearning-patterns`,
            `rl-qlearning-pitfalls`,
            `rl-qlearning-real-world`
          ],
          exerciseIds: [
            `ex-ql-1`,
            `ex-ql-2`
          ]
        },
        {
          id: `rl-deep`,
          title: `Deep Q-Networks (DQN)`,
          description: `Combine Q-learning with neural networks and stabilization tricks.`,
          level: `advanced`,
          module: `Reinforcement Learning`,
          moduleId: `module-25`,
          track: `ml`,
          estimatedMinutes: 60,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `dqn`,
            `improvements`,
            `atari`,
            `limits-dqn`,
            `rl-deep-deep-theory`,
            `rl-deep-patterns`,
            `rl-deep-pitfalls`,
            `rl-deep-real-world`
          ],
          exerciseIds: [
            `ex-dqn-1`,
            `ex-dqn-2`
          ]
        },
        {
          id: `rl-policy`,
          title: `Policy Gradients Intro`,
          description: `Optimize parameterized policies directly with gradient ascent on expected return.`,
          level: `advanced`,
          module: `Reinforcement Learning`,
          moduleId: `module-25`,
          track: `ml`,
          estimatedMinutes: 60,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `reinforce`,
            `actor-critic`,
            `continuous`,
            `pg-vs-value`,
            `rl-policy-deep-theory`,
            `rl-policy-patterns`,
            `rl-policy-pitfalls`,
            `rl-policy-real-world`
          ],
          exerciseIds: [
            `ex-pg-1`,
            `ex-pg-2`
          ]
        },
        {
          id: `rl-applications`,
          title: `RL Applications`,
          description: `Game AI, robotics overview, and deployment considerations.`,
          level: `advanced`,
          module: `Reinforcement Learning`,
          moduleId: `module-25`,
          track: `ml`,
          estimatedMinutes: 55,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `games`,
            `robotics`,
            `recsys-rl`,
            `deploy`,
            `rl-applications-deep-theory`,
            `rl-applications-patterns`,
            `rl-applications-pitfalls`,
            `rl-applications-real-world`
          ],
          exerciseIds: [
            `ex-rlapp-1`,
            `ex-rlapp-2`
          ]
        }
      ],
  },
  {
    id: 'module-26',
    name: 'Generative Deep Learning',
    track: 'dl',
    description: `GANs, VAEs, diffusion models, style transfer, and evaluation metrics for generative models.`,
    topics: [
        {
          id: `gen-gan`,
          title: `Generative Adversarial Networks`,
          description: `Train generator and discriminator in adversarial equilibrium.`,
          level: `advanced`,
          module: `Generative Deep Learning`,
          moduleId: `module-26`,
          track: `dl`,
          estimatedMinutes: 60,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `gan-arch`,
            `dcgan`,
            `training-tricks`,
            `conditional`,
            `gen-gan-deep-theory`,
            `gen-gan-patterns`,
            `gen-gan-pitfalls`,
            `gen-gan-real-world`
          ],
          exerciseIds: [
            `ex-gan-1`,
            `ex-gan-2`
          ]
        },
        {
          id: `gen-vae`,
          title: `Variational Autoencoders`,
          description: `Learn latent probabilistic representations with reconstruction and KL losses.`,
          level: `advanced`,
          module: `Generative Deep Learning`,
          moduleId: `module-26`,
          track: `dl`,
          estimatedMinutes: 55,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `vae`,
            `latent`,
            `vae-variants`,
            `sampling-vae`,
            `gen-vae-deep-theory`,
            `gen-vae-patterns`,
            `gen-vae-pitfalls`,
            `gen-vae-real-world`
          ],
          exerciseIds: [
            `ex-vae-1`,
            `ex-vae-2`
          ]
        },
        {
          id: `gen-diffusion`,
          title: `Diffusion Models (DDPM)`,
          description: `Denoising diffusion probabilistic models for high-quality generation.`,
          level: `advanced`,
          module: `Generative Deep Learning`,
          moduleId: `module-26`,
          track: `dl`,
          estimatedMinutes: 60,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `forward`,
            `reverse`,
            `guidance`,
            `diffusion-apps`,
            `gen-diffusion-deep-theory`,
            `gen-diffusion-patterns`,
            `gen-diffusion-pitfalls`,
            `gen-diffusion-real-world`
          ],
          exerciseIds: [
            `ex-diff-1`,
            `ex-diff-2`
          ]
        },
        {
          id: `gen-style`,
          title: `Style Transfer & CycleGAN`,
          description: `Transfer artistic style and unpaired image domain translation.`,
          level: `advanced`,
          module: `Generative Deep Learning`,
          moduleId: `module-26`,
          track: `dl`,
          estimatedMinutes: 55,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `nst`,
            `cyclegan`,
            `stylegan`,
            `applications`,
            `gen-style-deep-theory`,
            `gen-style-patterns`,
            `gen-style-pitfalls`,
            `gen-style-real-world`
          ],
          exerciseIds: [
            `ex-style-1`,
            `ex-style-2`
          ]
        },
        {
          id: `gen-eval`,
          title: `Evaluating Generative Models`,
          description: `FID, Inception Score, and human evaluation for generative quality.`,
          level: `advanced`,
          module: `Generative Deep Learning`,
          moduleId: `module-26`,
          track: `dl`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `fid`,
            `is`,
            `human`,
            `other-metrics`,
            `gen-eval-deep-theory`,
            `gen-eval-patterns`,
            `gen-eval-pitfalls`,
            `gen-eval-real-world`
          ],
          exerciseIds: [
            `ex-geval-1`,
            `ex-geval-2`
          ]
        }
      ],
  },
  {
    id: 'module-27',
    name: 'Advanced AI Systems',
    track: 'ai',
    description: `Vector databases, multimodal models, speech AI, benchmarks, and AI safety guardrails.`,
    topics: [
        {
          id: `ai-vectors`,
          title: `Embeddings & Vector Databases`,
          description: `Semantic search with embeddings and ANN indexes (FAISS, Chroma).`,
          level: `advanced`,
          module: `Advanced AI Systems`,
          moduleId: `module-27`,
          track: `ai`,
          estimatedMinutes: 55,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `embeddings`,
            `faiss`,
            `hybrid`,
            `ops`,
            `ai-vectors-deep-theory`,
            `ai-vectors-patterns`,
            `ai-vectors-pitfalls`,
            `ai-vectors-real-world`
          ],
          exerciseIds: [
            `ex-vec-1`,
            `ex-vec-2`
          ]
        },
        {
          id: `ai-multimodal`,
          title: `Multimodal Models (CLIP & VLM)`,
          description: `Vision-language models connecting images and text in shared embedding space.`,
          level: `advanced`,
          module: `Advanced AI Systems`,
          moduleId: `module-27`,
          track: `ai`,
          estimatedMinutes: 55,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `clip`,
            `vlm`,
            `tasks`,
            `limits`,
            `ai-multimodal-deep-theory`,
            `ai-multimodal-patterns`,
            `ai-multimodal-pitfalls`,
            `ai-multimodal-real-world`
          ],
          exerciseIds: [
            `ex-mm-1`,
            `ex-mm-2`
          ]
        },
        {
          id: `ai-speech`,
          title: `Speech AI (Whisper & TTS)`,
          description: `Automatic speech recognition and text-to-speech pipelines.`,
          level: `advanced`,
          module: `Advanced AI Systems`,
          moduleId: `module-27`,
          track: `ai`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `whisper`,
            `tts`,
            `audio-llm`,
            `deploy-speech`,
            `ai-speech-deep-theory`,
            `ai-speech-patterns`,
            `ai-speech-pitfalls`,
            `ai-speech-real-world`
          ],
          exerciseIds: [
            `ex-speech-1`,
            `ex-speech-2`
          ]
        },
        {
          id: `ai-eval`,
          title: `AI Benchmarks & Red Teaming`,
          description: `MMLU, HumanEval, and systematic adversarial testing.`,
          level: `advanced`,
          module: `Advanced AI Systems`,
          moduleId: `module-27`,
          track: `ai`,
          estimatedMinutes: 55,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `mmlu`,
            `humaneval`,
            `red-team`,
            `eval-practice`,
            `ai-eval-deep-theory`,
            `ai-eval-patterns`,
            `ai-eval-pitfalls`,
            `ai-eval-real-world`
          ],
          exerciseIds: [
            `ex-aieval-1`,
            `ex-aieval-2`
          ]
        },
        {
          id: `ai-safety`,
          title: `Alignment, Jailbreaks & Guardrails`,
          description: `Mitigate harmful outputs and build responsible AI systems.`,
          level: `advanced`,
          module: `Advanced AI Systems`,
          moduleId: `module-27`,
          track: `ai`,
          estimatedMinutes: 55,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `alignment`,
            `jailbreaks`,
            `guardrails`,
            `governance`,
            `ai-safety-deep-theory`,
            `ai-safety-patterns`,
            `ai-safety-pitfalls`,
            `ai-safety-real-world`
          ],
          exerciseIds: [
            `ex-safe-1`,
            `ex-safe-2`
          ]
        }
      ],
  },
  {
    id: 'module-28',
    name: 'Capstone & Career',
    track: 'ai',
    description: `Portfolio projects, Kaggle strategy, ML interviews, reading papers, and career paths in ML/AI.`,
    topics: [
        {
          id: `cap-portfolio`,
          title: `ML Portfolio Projects`,
          description: `Build showcase projects demonstrating end-to-end ML skills.`,
          level: `intermediate`,
          module: `Capstone & Career`,
          moduleId: `module-28`,
          track: `ai`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `structure`,
            `ideas`,
            `presentation`,
            `open-source`,
            `cap-portfolio-deep-theory`,
            `cap-portfolio-patterns`,
            `cap-portfolio-pitfalls`,
            `cap-portfolio-real-world`
          ],
          exerciseIds: [
            `ex-port-1`,
            `ex-port-2`
          ]
        },
        {
          id: `cap-kaggle`,
          title: `Kaggle Competition Strategy`,
          description: `Structured approach to competitive ML and learning from kernels.`,
          level: `intermediate`,
          module: `Capstone & Career`,
          moduleId: `module-28`,
          track: `ai`,
          estimatedMinutes: 55,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `workflow`,
            `features`,
            `ensemble`,
            `mindset`,
            `cap-kaggle-deep-theory`,
            `cap-kaggle-patterns`,
            `cap-kaggle-pitfalls`,
            `cap-kaggle-real-world`
          ],
          exerciseIds: [
            `ex-kaggle-1`,
            `ex-kaggle-2`
          ]
        },
        {
          id: `cap-interview`,
          title: `ML Interview Preparation`,
          description: `ML fundamentals, coding, system design, and behavioral preparation.`,
          level: `intermediate`,
          module: `Capstone & Career`,
          moduleId: `module-28`,
          track: `ai`,
          estimatedMinutes: 60,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `ml-fundamentals`,
            `coding`,
            `system-design`,
            `behavioral`,
            `cap-interview-deep-theory`,
            `cap-interview-patterns`,
            `cap-interview-pitfalls`,
            `cap-interview-real-world`
          ],
          exerciseIds: [
            `ex-int-1`,
            `ex-int-2`
          ]
        },
        {
          id: `cap-research`,
          title: `Reading Papers & Reproduction`,
          description: `Efficiently understand research papers and reproduce key results.`,
          level: `advanced`,
          module: `Capstone & Career`,
          moduleId: `module-28`,
          track: `ai`,
          estimatedMinutes: 50,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `reading`,
            `venues`,
            `reproduce`,
            `contribute`,
            `cap-research-deep-theory`,
            `cap-research-patterns`,
            `cap-research-pitfalls`,
            `cap-research-real-world`
          ],
          exerciseIds: [
            `ex-paper-1`,
            `ex-paper-2`
          ]
        },
        {
          id: `cap-career`,
          title: `Career Paths in ML/AI`,
          description: `Roles, skills, and growth paths for ML engineers, data scientists, and researchers.`,
          level: `intermediate`,
          module: `Capstone & Career`,
          moduleId: `module-28`,
          track: `ai`,
          estimatedMinutes: 45,
          sectionCount: 8,
          exerciseCount: 2,
          sectionIds: [
            `roles`,
            `skills`,
            `job-search`,
            `growth`,
            `cap-career-deep-theory`,
            `cap-career-patterns`,
            `cap-career-pitfalls`,
            `cap-career-real-world`
          ],
          exerciseIds: [
            `ex-career-1`,
            `ex-career-2`
          ]
        }
      ],
  }
];

export const allTopics: TopicSummary[] = [
  {
    id: `py-vars-types`,
    title: `Variables, Types & Literals`,
    description: `Learn how Python stores data, dynamic typing, and core built-in types.`,
    level: `beginner`,
    module: `Python Fundamentals`,
    moduleId: `module-01`,
    track: `python`,
    estimatedMinutes: 35,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `vars-intro`,
      `literals`,
      `mutability`,
      `type-checking`,
      `py-vars-types-deep-theory`,
      `py-vars-types-patterns`,
      `py-vars-types-pitfalls`,
      `py-vars-types-real-world`
    ],
    exerciseIds: [
      `ex-vars-1`,
      `ex-vars-2`
    ]
  },
  {
    id: `py-operators`,
    title: `Operators & Expressions`,
    description: `Arithmetic, comparison, logical, and assignment operators in Python.`,
    level: `beginner`,
    module: `Python Fundamentals`,
    moduleId: `module-01`,
    track: `python`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `arith`,
      `compare`,
      `assign`,
      `bitwise`,
      `py-operators-deep-theory`,
      `py-operators-patterns`,
      `py-operators-pitfalls`,
      `py-operators-real-world`
    ],
    exerciseIds: [
      `ex-op-1`,
      `ex-op-2`
    ]
  },
  {
    id: `py-strings`,
    title: `Strings & Text Processing`,
    description: `String creation, slicing, methods, and formatting fundamentals.`,
    level: `beginner`,
    module: `Python Fundamentals`,
    moduleId: `module-01`,
    track: `python`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `str-basics`,
      `str-methods`,
      `str-format`,
      `str-unicode`,
      `py-strings-deep-theory`,
      `py-strings-patterns`,
      `py-strings-pitfalls`,
      `py-strings-real-world`
    ],
    exerciseIds: [
      `ex-str-1`,
      `ex-str-2`
    ]
  },
  {
    id: `py-io`,
    title: `Input/Output & REPL`,
    description: `Reading input, printing output, and using the Python REPL effectively.`,
    level: `beginner`,
    module: `Python Fundamentals`,
    moduleId: `module-01`,
    track: `python`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `print`,
      `input`,
      `repl`,
      `files-intro`,
      `py-io-deep-theory`,
      `py-io-patterns`,
      `py-io-pitfalls`,
      `py-io-real-world`
    ],
    exerciseIds: [
      `ex-io-1`,
      `ex-io-2`
    ]
  },
  {
    id: `py-env`,
    title: `Python Environment & Tooling`,
    description: `Virtual environments, pip, and project setup best practices.`,
    level: `beginner`,
    module: `Python Fundamentals`,
    moduleId: `module-01`,
    track: `python`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `venv`,
      `pip`,
      `ide`,
      `project-structure`,
      `py-env-deep-theory`,
      `py-env-patterns`,
      `py-env-pitfalls`,
      `py-env-real-world`
    ],
    exerciseIds: [
      `ex-env-1`,
      `ex-env-2`
    ]
  },
  {
    id: `py-conditionals`,
    title: `Conditionals (if/elif/else)`,
    description: `Branch execution based on boolean conditions.`,
    level: `beginner`,
    module: `Control Flow & Functions`,
    moduleId: `module-02`,
    track: `python`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `if-basic`,
      `elif`,
      `ternary`,
      `guard`,
      `py-conditionals-deep-theory`,
      `py-conditionals-patterns`,
      `py-conditionals-pitfalls`,
      `py-conditionals-real-world`
    ],
    exerciseIds: [
      `ex-if-1`,
      `ex-if-2`
    ]
  },
  {
    id: `py-loops`,
    title: `Loops (for/while)`,
    description: `Iterate over sequences and repeat actions with for and while loops.`,
    level: `beginner`,
    module: `Control Flow & Functions`,
    moduleId: `module-02`,
    track: `python`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `for-loop`,
      `while-loop`,
      `loop-else`,
      `nested`,
      `py-loops-deep-theory`,
      `py-loops-patterns`,
      `py-loops-pitfalls`,
      `py-loops-real-world`
    ],
    exerciseIds: [
      `ex-loop-1`,
      `ex-loop-2`
    ]
  },
  {
    id: `py-functions`,
    title: `Functions & Parameters`,
    description: `Define reusable blocks with def, parameters, return values, and docstrings.`,
    level: `beginner`,
    module: `Control Flow & Functions`,
    moduleId: `module-02`,
    track: `python`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `def-basic`,
      `params`,
      `unpack`,
      `pure`,
      `py-functions-deep-theory`,
      `py-functions-patterns`,
      `py-functions-pitfalls`,
      `py-functions-real-world`
    ],
    exerciseIds: [
      `ex-fn-1`,
      `ex-fn-2`
    ]
  },
  {
    id: `py-scope`,
    title: `Scope, Closures & Lambda`,
    description: `LEGB scope rule, closures, and anonymous functions.`,
    level: `beginner`,
    module: `Control Flow & Functions`,
    moduleId: `module-02`,
    track: `python`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `legb`,
      `closures`,
      `lambda`,
      `higher`,
      `py-scope-deep-theory`,
      `py-scope-patterns`,
      `py-scope-pitfalls`,
      `py-scope-real-world`
    ],
    exerciseIds: [
      `ex-scope-1`,
      `ex-scope-2`
    ]
  },
  {
    id: `py-comprehensions`,
    title: `Comprehensions & Iterators`,
    description: `List/dict/set comprehensions and the iterator protocol.`,
    level: `beginner`,
    module: `Control Flow & Functions`,
    moduleId: `module-02`,
    track: `python`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `list-comp`,
      `dict-set-comp`,
      `generators`,
      `iterators`,
      `py-comprehensions-deep-theory`,
      `py-comprehensions-patterns`,
      `py-comprehensions-pitfalls`,
      `py-comprehensions-real-world`
    ],
    exerciseIds: [
      `ex-comp-1`,
      `ex-comp-2`
    ]
  },
  {
    id: `py-lists`,
    title: `Lists & Tuples`,
    description: `Ordered sequences — mutable lists and immutable tuples.`,
    level: `beginner`,
    module: `Data Structures`,
    moduleId: `module-03`,
    track: `python`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `list-ops`,
      `tuples`,
      `list-perf`,
      `nested`,
      `py-lists-deep-theory`,
      `py-lists-patterns`,
      `py-lists-pitfalls`,
      `py-lists-real-world`
    ],
    exerciseIds: [
      `ex-list-1`,
      `ex-list-2`
    ]
  },
  {
    id: `py-dicts`,
    title: `Dictionaries & Sets`,
    description: `Hash maps and unordered unique collections.`,
    level: `beginner`,
    module: `Data Structures`,
    moduleId: `module-03`,
    track: `python`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `dict-basics`,
      `sets`,
      `defaultdict`,
      `dict-merge`,
      `py-dicts-deep-theory`,
      `py-dicts-patterns`,
      `py-dicts-pitfalls`,
      `py-dicts-real-world`
    ],
    exerciseIds: [
      `ex-dict-1`,
      `ex-dict-2`
    ]
  },
  {
    id: `py-deque`,
    title: `Stacks, Queues & Deque`,
    description: `LIFO stacks and FIFO queues with collections.deque.`,
    level: `beginner`,
    module: `Data Structures`,
    moduleId: `module-03`,
    track: `python`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `stack`,
      `queue`,
      `deque-features`,
      `applications`,
      `py-deque-deep-theory`,
      `py-deque-patterns`,
      `py-deque-pitfalls`,
      `py-deque-real-world`
    ],
    exerciseIds: [
      `ex-deque-1`,
      `ex-deque-2`
    ]
  },
  {
    id: `py-sort-search`,
    title: `Sorting & Searching`,
    description: `Built-in sorting, binary search, and algorithmic complexity.`,
    level: `beginner`,
    module: `Data Structures`,
    moduleId: `module-03`,
    track: `python`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `sorting`,
      `custom-sort`,
      `search`,
      `complexity`,
      `py-sort-search-deep-theory`,
      `py-sort-search-patterns`,
      `py-sort-search-pitfalls`,
      `py-sort-search-real-world`
    ],
    exerciseIds: [
      `ex-sort-1`,
      `ex-sort-2`
    ]
  },
  {
    id: `py-collections`,
    title: `Collections Module`,
    description: `namedtuple, OrderedDict, ChainMap, and other specialized containers.`,
    level: `beginner`,
    module: `Data Structures`,
    moduleId: `module-03`,
    track: `python`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `namedtuple`,
      `chainmap`,
      `ordered`,
      `heapq`,
      `py-collections-deep-theory`,
      `py-collections-patterns`,
      `py-collections-pitfalls`,
      `py-collections-real-world`
    ],
    exerciseIds: [
      `ex-coll-1`,
      `ex-coll-2`
    ]
  },
  {
    id: `py-classes`,
    title: `Classes & Objects`,
    description: `Define classes with attributes and methods using the class keyword.`,
    level: `intermediate`,
    module: `OOP & Design Patterns`,
    moduleId: `module-04`,
    track: `python`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `class-basics`,
      `class-vs-instance`,
      `methods`,
      `dunder`,
      `py-classes-deep-theory`,
      `py-classes-patterns`,
      `py-classes-pitfalls`,
      `py-classes-real-world`
    ],
    exerciseIds: [
      `ex-class-1`,
      `ex-class-2`
    ]
  },
  {
    id: `py-inheritance`,
    title: `Inheritance & Polymorphism`,
    description: `Extend classes, override methods, and use polymorphic behavior.`,
    level: `intermediate`,
    module: `OOP & Design Patterns`,
    moduleId: `module-04`,
    track: `python`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `inheritance`,
      `mro`,
      `abstract`,
      `composition`,
      `py-inheritance-deep-theory`,
      `py-inheritance-patterns`,
      `py-inheritance-pitfalls`,
      `py-inheritance-real-world`
    ],
    exerciseIds: [
      `ex-inherit-1`,
      `ex-inherit-2`
    ]
  },
  {
    id: `py-encapsulation`,
    title: `Encapsulation & Properties`,
    description: `Hide internal state and control access with properties and naming conventions.`,
    level: `intermediate`,
    module: `OOP & Design Patterns`,
    moduleId: `module-04`,
    track: `python`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `naming`,
      `property`,
      `slots`,
      `dataclass-preview`,
      `py-encapsulation-deep-theory`,
      `py-encapsulation-patterns`,
      `py-encapsulation-pitfalls`,
      `py-encapsulation-real-world`
    ],
    exerciseIds: [
      `ex-encap-1`,
      `ex-encap-2`
    ]
  },
  {
    id: `py-patterns`,
    title: `Design Patterns in Python`,
    description: `Singleton, Factory, Observer, Strategy, and other common patterns.`,
    level: `intermediate`,
    module: `OOP & Design Patterns`,
    moduleId: `module-04`,
    track: `python`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `factory`,
      `strategy`,
      `observer`,
      `singleton`,
      `py-patterns-deep-theory`,
      `py-patterns-patterns`,
      `py-patterns-pitfalls`,
      `py-patterns-real-world`
    ],
    exerciseIds: [
      `ex-pattern-1`,
      `ex-pattern-2`
    ]
  },
  {
    id: `py-protocols`,
    title: `Abstract Base Classes & Protocols`,
    description: `typing.Protocol for structural subtyping and modern Python interfaces.`,
    level: `intermediate`,
    module: `OOP & Design Patterns`,
    moduleId: `module-04`,
    track: `python`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `protocol`,
      `abc-vs-protocol`,
      `generic`,
      `solid`,
      `py-protocols-deep-theory`,
      `py-protocols-patterns`,
      `py-protocols-pitfalls`,
      `py-protocols-real-world`
    ],
    exerciseIds: [
      `ex-proto-1`,
      `ex-proto-2`
    ]
  },
  {
    id: `py-decorators`,
    title: `Decorators`,
    description: `Functions that modify or wrap other functions. Essential for logging, timing, auth, and frameworks.`,
    level: `advanced`,
    module: `Advanced Python`,
    moduleId: `module-05`,
    track: `python`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `decorator-basics`,
      `functools-wraps`,
      `param-decorator`,
      `class-decorator`,
      `py-decorators-deep-theory`,
      `py-decorators-patterns`,
      `py-decorators-pitfalls`,
      `py-decorators-real-world`
    ],
    exerciseIds: [
      `ex-dec-1`,
      `ex-dec-2`
    ]
  },
  {
    id: `py-generators`,
    title: `Generators & yield`,
    description: `Lazy iteration with generator functions and yield expressions.`,
    level: `advanced`,
    module: `Advanced Python`,
    moduleId: `module-05`,
    track: `python`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `yield`,
      `yield-from`,
      `gen-expr`,
      `infinite`,
      `py-generators-deep-theory`,
      `py-generators-patterns`,
      `py-generators-pitfalls`,
      `py-generators-real-world`
    ],
    exerciseIds: [
      `ex-gen-1`,
      `ex-gen-2`
    ]
  },
  {
    id: `py-context`,
    title: `Context Managers`,
    description: `Resource management with with statement and contextlib.`,
    level: `advanced`,
    module: `Advanced Python`,
    moduleId: `module-05`,
    track: `python`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `with`,
      `contextlib`,
      `file-context`,
      `async-context`,
      `py-context-deep-theory`,
      `py-context-patterns`,
      `py-context-pitfalls`,
      `py-context-real-world`
    ],
    exerciseIds: [
      `ex-ctx-1`,
      `ex-ctx-2`
    ]
  },
  {
    id: `py-typehints`,
    title: `Type Hints & dataclasses`,
    description: `Static typing, dataclasses, and modern Python data modeling.`,
    level: `advanced`,
    module: `Advanced Python`,
    moduleId: `module-05`,
    track: `python`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `hints`,
      `dataclass`,
      `pydantic`,
      `typing-advanced`,
      `py-typehints-deep-theory`,
      `py-typehints-patterns`,
      `py-typehints-pitfalls`,
      `py-typehints-real-world`
    ],
    exerciseIds: [
      `ex-type-1`,
      `ex-type-2`
    ]
  },
  {
    id: `py-modules`,
    title: `Modules, Packages & pip`,
    description: `Organizing code into modules, packages, and distributing with pip.`,
    level: `advanced`,
    module: `Advanced Python`,
    moduleId: `module-05`,
    track: `python`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `imports`,
      `packages`,
      `publishing`,
      `stdlib`,
      `py-modules-deep-theory`,
      `py-modules-patterns`,
      `py-modules-pitfalls`,
      `py-modules-real-world`
    ],
    exerciseIds: [
      `ex-mod-1`,
      `ex-mod-2`
    ]
  },
  {
    id: `math-sets`,
    title: `Set Theory & Notation`,
    description: `Master set operations, cardinality, and notation used throughout probability and linear algebra.`,
    level: `beginner`,
    module: `Algebra & Functions`,
    moduleId: `module-math-01`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `sets-intro`,
      `sets-ops`,
      `sets-functions`,
      `sets-counting`,
      `math-sets-deep-theory`,
      `math-sets-patterns`,
      `math-sets-pitfalls`,
      `math-sets-real-world`
    ],
    exerciseIds: [
      `ex-sets-1`,
      `ex-sets-2`
    ]
  },
  {
    id: `math-functions`,
    title: `Functions & Graphs`,
    description: `Understand domains, ranges, composition, and inverse functions for modeling relationships.`,
    level: `beginner`,
    module: `Algebra & Functions`,
    moduleId: `module-math-01`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `fn-basics`,
      `fn-types`,
      `fn-compose`,
      `fn-transforms`,
      `math-functions-deep-theory`,
      `math-functions-patterns`,
      `math-functions-pitfalls`,
      `math-functions-real-world`
    ],
    exerciseIds: [
      `ex-fn-1`,
      `ex-fn-2`
    ]
  },
  {
    id: `math-logarithms`,
    title: `Logarithms & Exponentials`,
    description: `Master log rules, the natural base e, and exponential growth models used in loss functions and probabilities.`,
    level: `beginner`,
    module: `Algebra & Functions`,
    moduleId: `module-math-01`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `log-def`,
      `log-rules`,
      `exp-models`,
      `log-ml`,
      `math-logarithms-deep-theory`,
      `math-logarithms-patterns`,
      `math-logarithms-pitfalls`,
      `math-logarithms-real-world`
    ],
    exerciseIds: [
      `ex-log-1`,
      `ex-log-2`
    ]
  },
  {
    id: `math-sequences`,
    title: `Sequences & Series`,
    description: `Arithmetic and geometric sequences, convergence, and summation notation for iterative algorithms.`,
    level: `beginner`,
    module: `Algebra & Functions`,
    moduleId: `module-math-01`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `seq-arith`,
      `seq-geom`,
      `seq-series`,
      `seq-ml`,
      `math-sequences-deep-theory`,
      `math-sequences-patterns`,
      `math-sequences-pitfalls`,
      `math-sequences-real-world`
    ],
    exerciseIds: [
      `ex-seq-1`,
      `ex-seq-2`
    ]
  },
  {
    id: `math-complex`,
    title: `Complex Numbers`,
    description: `Complex plane arithmetic, polar form, and Euler formula connecting trig to exponentials.`,
    level: `intermediate`,
    module: `Algebra & Functions`,
    moduleId: `module-math-01`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `cx-basics`,
      `cx-polar`,
      `cx-ops`,
      `cx-fft`,
      `math-complex-deep-theory`,
      `math-complex-patterns`,
      `math-complex-pitfalls`,
      `math-complex-real-world`
    ],
    exerciseIds: [
      `ex-cx-1`,
      `ex-cx-2`
    ]
  },
  {
    id: `math-vectors`,
    title: `Vectors & Vector Spaces`,
    description: `Learn vector notation, norms, unit vectors, and linear combinations in ℝⁿ.`,
    level: `beginner`,
    module: `Linear Algebra I`,
    moduleId: `module-math-02`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `vec-basics`,
      `vec-norm`,
      `vec-span`,
      `vec-ml`,
      `math-vectors-deep-theory`,
      `math-vectors-patterns`,
      `math-vectors-pitfalls`,
      `math-vectors-real-world`
    ],
    exerciseIds: [
      `ex-vec-1`,
      `ex-vec-2`
    ]
  },
  {
    id: `math-dot-cross`,
    title: `Dot Product & Cross Product`,
    description: `Inner products measure similarity; cross products find orthogonal vectors in 3D.`,
    level: `beginner`,
    module: `Linear Algebra I`,
    moduleId: `module-math-02`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `dot-def`,
      `dot-geom`,
      `cross-3d`,
      `dot-attn`,
      `math-dot-cross-deep-theory`,
      `math-dot-cross-patterns`,
      `math-dot-cross-pitfalls`,
      `math-dot-cross-real-world`
    ],
    exerciseIds: [
      `ex-dot-1`,
      `ex-dot-2`
    ]
  },
  {
    id: `math-matrices`,
    title: `Matrices & Matrix Notation`,
    description: `Understand matrix dimensions, special matrices, and matrix-vector multiplication.`,
    level: `intermediate`,
    module: `Linear Algebra I`,
    moduleId: `module-math-02`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `mat-basics`,
      `mat-mv`,
      `mat-special`,
      `mat-data`,
      `math-matrices-deep-theory`,
      `math-matrices-patterns`,
      `math-matrices-pitfalls`,
      `math-matrices-real-world`
    ],
    exerciseIds: [
      `ex-mat-1`,
      `ex-mat-2`
    ]
  },
  {
    id: `math-matrix-ops`,
    title: `Matrix Operations`,
    description: `Matrix multiplication, transpose rules, and properties of matrix arithmetic.`,
    level: `intermediate`,
    module: `Linear Algebra I`,
    moduleId: `module-math-02`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `mm-def`,
      `mm-prop`,
      `mm-inv-det`,
      `mm-nn`,
      `math-matrix-ops-deep-theory`,
      `math-matrix-ops-patterns`,
      `math-matrix-ops-pitfalls`,
      `math-matrix-ops-real-world`
    ],
    exerciseIds: [
      `ex-mm-1`,
      `ex-mm-2`
    ]
  },
  {
    id: `math-linear-systems`,
    title: `Linear Systems & Gaussian Elimination`,
    description: `Solve Ax=b via elimination, rank, and solution existence/uniqueness.`,
    level: `intermediate`,
    module: `Linear Algebra I`,
    moduleId: `module-math-02`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `ls-form`,
      `ls-elim`,
      `ls-lsq`,
      `ls-rank`,
      `math-linear-systems-deep-theory`,
      `math-linear-systems-patterns`,
      `math-linear-systems-pitfalls`,
      `math-linear-systems-real-world`
    ],
    exerciseIds: [
      `ex-ls-1`,
      `ex-ls-2`
    ]
  },
  {
    id: `math-determinants`,
    title: `Determinants`,
    description: `Compute and interpret determinants as volume scaling and invertibility tests.`,
    level: `intermediate`,
    module: `Linear Algebra II`,
    moduleId: `module-math-03`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `det-def`,
      `det-geom`,
      `det-prop`,
      `det-ml`,
      `math-determinants-deep-theory`,
      `math-determinants-patterns`,
      `math-determinants-pitfalls`,
      `math-determinants-real-world`
    ],
    exerciseIds: [
      `ex-det-1`,
      `ex-det-2`
    ]
  },
  {
    id: `math-inverse`,
    title: `Matrix Inverse`,
    description: `Compute and apply matrix inverses for solving systems and understanding transformations.`,
    level: `intermediate`,
    module: `Linear Algebra II`,
    moduleId: `module-math-03`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `inv-def`,
      `inv-2x2`,
      `inv-pinv`,
      `inv-ml`,
      `math-inverse-deep-theory`,
      `math-inverse-patterns`,
      `math-inverse-pitfalls`,
      `math-inverse-real-world`
    ],
    exerciseIds: [
      `ex-inv-1`,
      `ex-inv-2`
    ]
  },
  {
    id: `math-eigen`,
    title: `Eigenvalues & Eigenvectors`,
    description: `Diagonalization, spectral theory, and dynamics via eigen decomposition.`,
    level: `intermediate`,
    module: `Linear Algebra II`,
    moduleId: `module-math-03`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `eig-def`,
      `eig-diag`,
      `eig-pca`,
      `eig-markov`,
      `math-eigen-deep-theory`,
      `math-eigen-patterns`,
      `math-eigen-pitfalls`,
      `math-eigen-real-world`
    ],
    exerciseIds: [
      `ex-eig-1`,
      `ex-eig-2`
    ]
  },
  {
    id: `math-svd`,
    title: `Singular Value Decomposition`,
    description: `Factor matrices with SVD for compression, pseudoinverse, and low-rank approximation.`,
    level: `advanced`,
    module: `Linear Algebra II`,
    moduleId: `module-math-03`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `svd-def`,
      `svd-lowrank`,
      `svd-pinv`,
      `svd-ml`,
      `math-svd-deep-theory`,
      `math-svd-patterns`,
      `math-svd-pitfalls`,
      `math-svd-real-world`
    ],
    exerciseIds: [
      `ex-svd-1`,
      `ex-svd-2`
    ]
  },
  {
    id: `math-pca-math`,
    title: `PCA Mathematics`,
    description: `Principal component analysis as variance maximization and spectral decomposition.`,
    level: `advanced`,
    module: `Linear Algebra II`,
    moduleId: `module-math-03`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `pca-goal`,
      `pca-proj`,
      `pca-kernel`,
      `pca-practice`,
      `math-pca-math-deep-theory`,
      `math-pca-math-patterns`,
      `math-pca-math-pitfalls`,
      `math-pca-math-real-world`
    ],
    exerciseIds: [
      `ex-pca-1`,
      `ex-pca-2`
    ]
  },
  {
    id: `math-limits`,
    title: `Limits & Continuity`,
    description: `Understand limits, continuity, and foundational definitions for derivatives.`,
    level: `intermediate`,
    module: `Calculus I`,
    moduleId: `module-math-04`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `lim-def`,
      `lim-rules`,
      `lim-cont`,
      `lim-ml`,
      `math-limits-deep-theory`,
      `math-limits-patterns`,
      `math-limits-pitfalls`,
      `math-limits-real-world`
    ],
    exerciseIds: [
      `ex-lim-1`,
      `ex-lim-2`
    ]
  },
  {
    id: `math-derivatives`,
    title: `Derivatives`,
    description: `Definition, interpretation as rate of change and tangent slope.`,
    level: `intermediate`,
    module: `Calculus I`,
    moduleId: `module-math-04`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `der-def`,
      `der-interp`,
      `der-numeric`,
      `der-ml`,
      `math-derivatives-deep-theory`,
      `math-derivatives-patterns`,
      `math-derivatives-pitfalls`,
      `math-derivatives-real-world`
    ],
    exerciseIds: [
      `ex-der-1`,
      `ex-der-2`
    ]
  },
  {
    id: `math-derivative-rules`,
    title: `Differentiation Rules`,
    description: `Power, product, quotient, and chain rules for efficient differentiation.`,
    level: `intermediate`,
    module: `Calculus I`,
    moduleId: `module-math-04`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `dr-power`,
      `dr-product`,
      `dr-chain`,
      `dr-common`,
      `math-derivative-rules-deep-theory`,
      `math-derivative-rules-patterns`,
      `math-derivative-rules-pitfalls`,
      `math-derivative-rules-real-world`
    ],
    exerciseIds: [
      `ex-dr-1`,
      `ex-dr-2`
    ]
  },
  {
    id: `math-taylor`,
    title: `Taylor Series & Approximation`,
    description: `Polynomial approximations and numerical uses of Taylor expansions.`,
    level: `intermediate`,
    module: `Calculus I`,
    moduleId: `module-math-04`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `tay-def`,
      `tay-approx`,
      `tay-multivar`,
      `tay-ml`,
      `math-taylor-deep-theory`,
      `math-taylor-patterns`,
      `math-taylor-pitfalls`,
      `math-taylor-real-world`
    ],
    exerciseIds: [
      `ex-tay-1`,
      `ex-tay-2`
    ]
  },
  {
    id: `math-integrals`,
    title: `Integrals & Area`,
    description: `Definite and indefinite integrals, Fundamental Theorem of Calculus.`,
    level: `intermediate`,
    module: `Calculus I`,
    moduleId: `module-math-04`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `int-def`,
      `int-rules`,
      `int-prob`,
      `int-mc`,
      `math-integrals-deep-theory`,
      `math-integrals-patterns`,
      `math-integrals-pitfalls`,
      `math-integrals-real-world`
    ],
    exerciseIds: [
      `ex-int-1`,
      `ex-int-2`
    ]
  },
  {
    id: `math-partial-deriv`,
    title: `Partial Derivatives`,
    description: `Differentiate multivariate functions holding other variables fixed.`,
    level: `advanced`,
    module: `Calculus II & Multivariate`,
    moduleId: `module-math-05`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `pd-def`,
      `pd-geom`,
      `pd-higher`,
      `pd-ml`,
      `math-partial-deriv-deep-theory`,
      `math-partial-deriv-patterns`,
      `math-partial-deriv-pitfalls`,
      `math-partial-deriv-real-world`
    ],
    exerciseIds: [
      `ex-pd-1`,
      `ex-pd-2`
    ]
  },
  {
    id: `math-gradient`,
    title: `Gradient & Directional Derivatives`,
    description: `Master the gradient vector and its role in optimization.`,
    level: `advanced`,
    module: `Calculus II & Multivariate`,
    moduleId: `module-math-05`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `grad-def`,
      `grad-descent`,
      `grad-proj`,
      `grad-numerical`,
      `math-gradient-deep-theory`,
      `math-gradient-patterns`,
      `math-gradient-pitfalls`,
      `math-gradient-real-world`
    ],
    exerciseIds: [
      `ex-grad-1`,
      `ex-grad-2`
    ]
  },
  {
    id: `math-chain-rule`,
    title: `Multivariate Chain Rule`,
    description: `Jacobian matrices and backpropagation as chain rule application.`,
    level: `advanced`,
    module: `Calculus II & Multivariate`,
    moduleId: `module-math-05`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `cr-jacobian`,
      `cr-backprop`,
      `cr-vector`,
      `cr-vanish`,
      `math-chain-rule-deep-theory`,
      `math-chain-rule-patterns`,
      `math-chain-rule-pitfalls`,
      `math-chain-rule-real-world`
    ],
    exerciseIds: [
      `ex-cr-1`,
      `ex-cr-2`
    ]
  },
  {
    id: `math-jacobian-hessian`,
    title: `Jacobian & Hessian`,
    description: `Second-order information for curvature and advanced optimization.`,
    level: `advanced`,
    module: `Calculus II & Multivariate`,
    moduleId: `module-math-05`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `jh-hessian`,
      `jh-newton`,
      `jh-jacobian-apps`,
      `jh-gauss-newton`,
      `math-jacobian-hessian-deep-theory`,
      `math-jacobian-hessian-patterns`,
      `math-jacobian-hessian-pitfalls`,
      `math-jacobian-hessian-real-world`
    ],
    exerciseIds: [
      `ex-jh-1`,
      `ex-jh-2`
    ]
  },
  {
    id: `math-multivariate-opt`,
    title: `Multivariate Optimization`,
    description: `Critical points, convexity, and constrained optimization preview.`,
    level: `advanced`,
    module: `Calculus II & Multivariate`,
    moduleId: `module-math-05`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `mvo-critical`,
      `mvo-convex`,
      `mvo-saddle`,
      `mvo-global`,
      `math-multivariate-opt-deep-theory`,
      `math-multivariate-opt-patterns`,
      `math-multivariate-opt-pitfalls`,
      `math-multivariate-opt-real-world`
    ],
    exerciseIds: [
      `ex-mvo-1`,
      `ex-mvo-2`
    ]
  },
  {
    id: `math-prob-basics`,
    title: `Probability Foundations`,
    description: `Sample spaces, axioms, and basic counting for probability.`,
    level: `intermediate`,
    module: `Probability`,
    moduleId: `module-math-06`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `pb-axioms`,
      `pb-count`,
      `pb-indep`,
      `pb-ml`,
      `math-prob-basics-deep-theory`,
      `math-prob-basics-patterns`,
      `math-prob-basics-pitfalls`,
      `math-prob-basics-real-world`
    ],
    exerciseIds: [
      `ex-pb-1`,
      `ex-pb-2`
    ]
  },
  {
    id: `math-conditional-bayes`,
    title: `Conditional Probability & Bayes`,
    description: `Conditioning, Bayes theorem, and Bayesian updating.`,
    level: `intermediate`,
    module: `Probability`,
    moduleId: `module-math-06`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `cb-cond`,
      `cb-bayes`,
      `cb-odds`,
      `cb-ml`,
      `math-conditional-bayes-deep-theory`,
      `math-conditional-bayes-patterns`,
      `math-conditional-bayes-pitfalls`,
      `math-conditional-bayes-real-world`
    ],
    exerciseIds: [
      `ex-cb-1`,
      `ex-cb-2`
    ]
  },
  {
    id: `math-random-vars`,
    title: `Random Variables`,
    description: `Discrete and continuous random variables, expectation, and variance.`,
    level: `intermediate`,
    module: `Probability`,
    moduleId: `module-math-06`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `rv-def`,
      `rv-expect`,
      `rv-transform`,
      `rv-ml`,
      `math-random-vars-deep-theory`,
      `math-random-vars-patterns`,
      `math-random-vars-pitfalls`,
      `math-random-vars-real-world`
    ],
    exerciseIds: [
      `ex-rv-1`,
      `ex-rv-2`
    ]
  },
  {
    id: `math-distributions`,
    title: `Common Distributions`,
    description: `Bernoulli, binomial, Gaussian, Poisson, and exponential distributions.`,
    level: `intermediate`,
    module: `Probability`,
    moduleId: `module-math-06`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `dist-disc`,
      `dist-cont`,
      `dist-clt`,
      `dist-ml`,
      `math-distributions-deep-theory`,
      `math-distributions-patterns`,
      `math-distributions-pitfalls`,
      `math-distributions-real-world`
    ],
    exerciseIds: [
      `ex-dist-1`,
      `ex-dist-2`
    ]
  },
  {
    id: `math-joint-marginal`,
    title: `Joint, Marginal & Independence`,
    description: `Multivariate relationships, covariance matrices, and factorization.`,
    level: `intermediate`,
    module: `Probability`,
    moduleId: `module-math-06`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `jm-joint`,
      `jm-indep`,
      `jm-cov`,
      `jm-ml`,
      `math-joint-marginal-deep-theory`,
      `math-joint-marginal-patterns`,
      `math-joint-marginal-pitfalls`,
      `math-joint-marginal-real-world`
    ],
    exerciseIds: [
      `ex-jm-1`,
      `ex-jm-2`
    ]
  },
  {
    id: `math-descriptive`,
    title: `Descriptive Statistics`,
    description: `Mean, variance, percentiles, and exploratory data summaries.`,
    level: `intermediate`,
    module: `Statistics`,
    moduleId: `module-math-07`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `ds-central`,
      `ds-spread`,
      `ds-percentile`,
      `ds-eda`,
      `math-descriptive-deep-theory`,
      `math-descriptive-patterns`,
      `math-descriptive-pitfalls`,
      `math-descriptive-real-world`
    ],
    exerciseIds: [
      `ex-ds-1`,
      `ex-ds-2`
    ]
  },
  {
    id: `math-sampling-clt`,
    title: `Sampling & Central Limit Theorem`,
    description: `Sampling distributions, standard error, and CLT applications.`,
    level: `intermediate`,
    module: `Statistics`,
    moduleId: `module-math-07`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `sc-sample`,
      `sc-se`,
      `sc-clt`,
      `sc-ml`,
      `math-sampling-clt-deep-theory`,
      `math-sampling-clt-patterns`,
      `math-sampling-clt-pitfalls`,
      `math-sampling-clt-real-world`
    ],
    exerciseIds: [
      `ex-sc-1`,
      `ex-sc-2`
    ]
  },
  {
    id: `math-hypothesis`,
    title: `Hypothesis Testing`,
    description: `Null/alternative, p-values, errors, and common tests.`,
    level: `intermediate`,
    module: `Statistics`,
    moduleId: `module-math-07`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `ht-framework`,
      `ht-tests`,
      `ht-ab`,
      `ht-ml`,
      `math-hypothesis-deep-theory`,
      `math-hypothesis-patterns`,
      `math-hypothesis-pitfalls`,
      `math-hypothesis-real-world`
    ],
    exerciseIds: [
      `ex-ht-1`,
      `ex-ht-2`
    ]
  },
  {
    id: `math-confidence`,
    title: `Confidence Intervals`,
    description: `Construct and interpret confidence intervals for means and proportions.`,
    level: `intermediate`,
    module: `Statistics`,
    moduleId: `module-math-07`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `ci-mean`,
      `ci-prop`,
      `ci-diff`,
      `ci-ml`,
      `math-confidence-deep-theory`,
      `math-confidence-patterns`,
      `math-confidence-pitfalls`,
      `math-confidence-real-world`
    ],
    exerciseIds: [
      `ex-ci-1`,
      `ex-ci-2`
    ]
  },
  {
    id: `math-regression-math`,
    title: `Regression Mathematics`,
    description: `Linear regression normal equations, assumptions, and statistical inference.`,
    level: `intermediate`,
    module: `Statistics`,
    moduleId: `module-math-07`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `reg-ols`,
      `reg-assump`,
      `reg-infer`,
      `reg-ml`,
      `math-regression-math-deep-theory`,
      `math-regression-math-patterns`,
      `math-regression-math-pitfalls`,
      `math-regression-math-real-world`
    ],
    exerciseIds: [
      `ex-reg-1`,
      `ex-reg-2`
    ]
  },
  {
    id: `math-convex`,
    title: `Convex Optimization`,
    description: `Convex sets, convex functions, and why convex problems are tractable.`,
    level: `advanced`,
    module: `Optimization & Information Theory`,
    moduleId: `module-math-08`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `cvx-sets`,
      `cvx-func`,
      `cvx-problems`,
      `cvx-ml`,
      `math-convex-deep-theory`,
      `math-convex-patterns`,
      `math-convex-pitfalls`,
      `math-convex-real-world`
    ],
    exerciseIds: [
      `ex-cvx-1`,
      `ex-cvx-2`
    ]
  },
  {
    id: `math-gradient-descent-math`,
    title: `Gradient Descent Theory`,
    description: `Convergence rates, step size, momentum, and adaptive methods.`,
    level: `advanced`,
    module: `Optimization & Information Theory`,
    moduleId: `module-math-08`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `gd-conv`,
      `gd-momentum`,
      `gd-adaptive`,
      `gd-sgd`,
      `math-gradient-descent-math-deep-theory`,
      `math-gradient-descent-math-patterns`,
      `math-gradient-descent-math-pitfalls`,
      `math-gradient-descent-math-real-world`
    ],
    exerciseIds: [
      `ex-gd-1`,
      `ex-gd-2`
    ]
  },
  {
    id: `math-lagrange`,
    title: `Lagrange Multipliers`,
    description: `Equality constraints, KKT conditions, and constrained optimization.`,
    level: `advanced`,
    module: `Optimization & Information Theory`,
    moduleId: `module-math-08`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `lag-eq`,
      `lag-ineq`,
      `lag-dual`,
      `lag-ml`,
      `math-lagrange-deep-theory`,
      `math-lagrange-patterns`,
      `math-lagrange-pitfalls`,
      `math-lagrange-real-world`
    ],
    exerciseIds: [
      `ex-lag-1`,
      `ex-lag-2`
    ]
  },
  {
    id: `math-entropy-math`,
    title: `Entropy & Information`,
    description: `Shannon entropy, cross-entropy, and mutual information.`,
    level: `advanced`,
    module: `Optimization & Information Theory`,
    moduleId: `module-math-08`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `ent-def`,
      `ent-ce`,
      `ent-mi`,
      `ent-ml`,
      `math-entropy-math-deep-theory`,
      `math-entropy-math-patterns`,
      `math-entropy-math-pitfalls`,
      `math-entropy-math-real-world`
    ],
    exerciseIds: [
      `ex-ent-1`,
      `ex-ent-2`
    ]
  },
  {
    id: `math-kl-mle`,
    title: `KL Divergence & MLE`,
    description: `Maximum likelihood estimation and its connection to minimizing KL.`,
    level: `advanced`,
    module: `Optimization & Information Theory`,
    moduleId: `module-math-08`,
    track: `math`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `mle-def`,
      `kl-mle`,
      `mle-prop`,
      `mle-ml`,
      `math-kl-mle-deep-theory`,
      `math-kl-mle-patterns`,
      `math-kl-mle-pitfalls`,
      `math-kl-mle-real-world`
    ],
    exerciseIds: [
      `ex-mle-1`,
      `ex-mle-2`
    ]
  },
  {
    id: `np-arrays`,
    title: `NumPy Arrays Fundamentals`,
    description: `Create and manipulate ndarrays — the foundation of scientific Python.`,
    level: `beginner`,
    module: `NumPy & Scientific Computing`,
    moduleId: `module-06`,
    track: `data`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `create`,
      `dtype`,
      `attrs`,
      `vs-list`,
      `np-arrays-deep-theory`,
      `np-arrays-patterns`,
      `np-arrays-pitfalls`,
      `np-arrays-real-world`
    ],
    exerciseIds: [
      `ex-np-1`,
      `ex-np-2`
    ]
  },
  {
    id: `np-indexing`,
    title: `Array Indexing & Broadcasting`,
    description: `Slicing, boolean indexing, fancy indexing, and broadcasting rules.`,
    level: `beginner`,
    module: `NumPy & Scientific Computing`,
    moduleId: `module-06`,
    track: `data`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `slicing`,
      `boolean`,
      `broadcast`,
      `vectorize`,
      `np-indexing-deep-theory`,
      `np-indexing-patterns`,
      `np-indexing-pitfalls`,
      `np-indexing-real-world`
    ],
    exerciseIds: [
      `ex-np-idx-1`,
      `ex-np-idx-2`
    ]
  },
  {
    id: `np-linalg`,
    title: `Linear Algebra with NumPy`,
    description: `Matrix operations, dot products, decomposition, and solving linear systems.`,
    level: `beginner`,
    module: `NumPy & Scientific Computing`,
    moduleId: `module-06`,
    track: `data`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `matmul`,
      `linalg`,
      `norm`,
      `applications`,
      `np-linalg-deep-theory`,
      `np-linalg-patterns`,
      `np-linalg-pitfalls`,
      `np-linalg-real-world`
    ],
    exerciseIds: [
      `ex-linalg-1`,
      `ex-linalg-2`
    ]
  },
  {
    id: `np-random`,
    title: `Random & Statistics`,
    description: `Random number generation and statistical operations with NumPy.`,
    level: `beginner`,
    module: `NumPy & Scientific Computing`,
    moduleId: `module-06`,
    track: `data`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `rng`,
      `stats`,
      `shuffle`,
      `distributions`,
      `np-random-deep-theory`,
      `np-random-patterns`,
      `np-random-pitfalls`,
      `np-random-real-world`
    ],
    exerciseIds: [
      `ex-rand-1`,
      `ex-rand-2`
    ]
  },
  {
    id: `np-perf`,
    title: `Performance & Vectorization`,
    description: `Write fast NumPy code avoiding Python loops.`,
    level: `beginner`,
    module: `NumPy & Scientific Computing`,
    moduleId: `module-06`,
    track: `data`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `vectorize`,
      `memory`,
      `einsum`,
      `numba`,
      `np-perf-deep-theory`,
      `np-perf-patterns`,
      `np-perf-pitfalls`,
      `np-perf-real-world`
    ],
    exerciseIds: [
      `ex-perf-1`,
      `ex-perf-2`
    ]
  },
  {
    id: `pd-dataframes`,
    title: `Series & DataFrames`,
    description: `Pandas one-dimensional Series and two-dimensional DataFrames.`,
    level: `beginner`,
    module: `Pandas & Data Wrangling`,
    moduleId: `module-07`,
    track: `data`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `series`,
      `dataframe`,
      `selection`,
      `dtypes`,
      `pd-dataframes-deep-theory`,
      `pd-dataframes-patterns`,
      `pd-dataframes-pitfalls`,
      `pd-dataframes-real-world`
    ],
    exerciseIds: [
      `ex-pd-1`,
      `ex-pd-2`
    ]
  },
  {
    id: `pd-indexing`,
    title: `Indexing, Filtering & Selection`,
    description: `Advanced indexing with query, isin, and boolean masks.`,
    level: `beginner`,
    module: `Pandas & Data Wrangling`,
    moduleId: `module-07`,
    track: `data`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `boolean`,
      `query`,
      `assign`,
      `sort`,
      `pd-indexing-deep-theory`,
      `pd-indexing-patterns`,
      `pd-indexing-pitfalls`,
      `pd-indexing-real-world`
    ],
    exerciseIds: [
      `ex-pd-idx-1`,
      `ex-pd-idx-2`
    ]
  },
  {
    id: `pd-groupby`,
    title: `GroupBy & Aggregations`,
    description: `Split-apply-combine pattern for grouped analysis.`,
    level: `beginner`,
    module: `Pandas & Data Wrangling`,
    moduleId: `module-07`,
    track: `data`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `groupby`,
      `agg`,
      `pivot`,
      `window`,
      `pd-groupby-deep-theory`,
      `pd-groupby-patterns`,
      `pd-groupby-pitfalls`,
      `pd-groupby-real-world`
    ],
    exerciseIds: [
      `ex-gb-1`,
      `ex-gb-2`
    ]
  },
  {
    id: `pd-merge`,
    title: `Merging, Joining & Reshaping`,
    description: `Combine DataFrames with merge, concat, join. Reshape with melt and pivot.`,
    level: `beginner`,
    module: `Pandas & Data Wrangling`,
    moduleId: `module-07`,
    track: `data`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `merge`,
      `concat`,
      `reshape`,
      `join-index`,
      `pd-merge-deep-theory`,
      `pd-merge-patterns`,
      `pd-merge-pitfalls`,
      `pd-merge-real-world`
    ],
    exerciseIds: [
      `ex-merge-1`,
      `ex-merge-2`
    ]
  },
  {
    id: `pd-missing`,
    title: `Missing Data & Time Series`,
    description: `Handle NaN values and work with datetime indices.`,
    level: `beginner`,
    module: `Pandas & Data Wrangling`,
    moduleId: `module-07`,
    track: `data`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `missing`,
      `datetime`,
      `tz`,
      `ts-features`,
      `pd-missing-deep-theory`,
      `pd-missing-patterns`,
      `pd-missing-pitfalls`,
      `pd-missing-real-world`
    ],
    exerciseIds: [
      `ex-miss-1`,
      `ex-miss-2`
    ]
  },
  {
    id: `viz-matplotlib`,
    title: `Matplotlib Basics`,
    description: `Create line, scatter, bar, and histogram plots with pyplot and OO API.`,
    level: `beginner`,
    module: `Data Visualization`,
    moduleId: `module-08`,
    track: `data`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `pyplot`,
      `oo-api`,
      `styles`,
      `anatomy`,
      `viz-matplotlib-deep-theory`,
      `viz-matplotlib-patterns`,
      `viz-matplotlib-pitfalls`,
      `viz-matplotlib-real-world`
    ],
    exerciseIds: [
      `ex-mpl-1`,
      `ex-mpl-2`
    ]
  },
  {
    id: `viz-seaborn`,
    title: `Seaborn Statistical Plots`,
    description: `High-level statistical visualizations built on matplotlib.`,
    level: `beginner`,
    module: `Data Visualization`,
    moduleId: `module-08`,
    track: `data`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `distplot`,
      `relplot`,
      `catplot`,
      `heatmap`,
      `viz-seaborn-deep-theory`,
      `viz-seaborn-patterns`,
      `viz-seaborn-pitfalls`,
      `viz-seaborn-real-world`
    ],
    exerciseIds: [
      `ex-sns-1`,
      `ex-sns-2`
    ]
  },
  {
    id: `viz-plotly`,
    title: `Plotly Interactive Viz`,
    description: `Interactive charts for exploration and dashboards.`,
    level: `beginner`,
    module: `Data Visualization`,
    moduleId: `module-08`,
    track: `data`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `plotly-express`,
      `plotly-graph`,
      `dash`,
      `when`,
      `viz-plotly-deep-theory`,
      `viz-plotly-patterns`,
      `viz-plotly-pitfalls`,
      `viz-plotly-real-world`
    ],
    exerciseIds: [
      `ex-plotly-1`,
      `ex-plotly-2`
    ]
  },
  {
    id: `viz-design`,
    title: `Dashboard Design Principles`,
    description: `Visual encoding, chart selection, and storytelling with data.`,
    level: `beginner`,
    module: `Data Visualization`,
    moduleId: `module-08`,
    track: `data`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `chart-selection`,
      `color`,
      `storytelling`,
      `eda-workflow`,
      `viz-design-deep-theory`,
      `viz-design-patterns`,
      `viz-design-pitfalls`,
      `viz-design-real-world`
    ],
    exerciseIds: [
      `ex-design-1`,
      `ex-design-2`
    ]
  },
  {
    id: `viz-specialized`,
    title: `Geospatial & Specialized Charts`,
    description: `Maps, network graphs, and domain-specific visualizations.`,
    level: `beginner`,
    module: `Data Visualization`,
    moduleId: `module-08`,
    track: `data`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `geopandas`,
      `network`,
      `ml-viz`,
      `tools`,
      `viz-specialized-deep-theory`,
      `viz-specialized-patterns`,
      `viz-specialized-pitfalls`,
      `viz-specialized-real-world`
    ],
    exerciseIds: [
      `ex-spec-1`,
      `ex-spec-2`
    ]
  },
  {
    id: `ml-linear-algebra`,
    title: `Linear Algebra Essentials`,
    description: `Vectors, matrices, eigenvalues, and their role in ML.`,
    level: `beginner`,
    module: `Math for Machine Learning`,
    moduleId: `module-09`,
    track: `ml`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `vectors`,
      `matrices`,
      `eigen`,
      `svd`,
      `ml-linear-algebra-deep-theory`,
      `ml-linear-algebra-patterns`,
      `ml-linear-algebra-pitfalls`,
      `ml-linear-algebra-real-world`
    ],
    exerciseIds: [
      `ex-la-1`,
      `ex-la-2`
    ]
  },
  {
    id: `ml-calculus`,
    title: `Calculus for ML`,
    description: `Derivatives, gradients, chain rule, and partial derivatives for optimization.`,
    level: `beginner`,
    module: `Math for Machine Learning`,
    moduleId: `module-09`,
    track: `ml`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `derivatives`,
      `chain-rule`,
      `loss-gradients`,
      `jacobian`,
      `ml-calculus-deep-theory`,
      `ml-calculus-patterns`,
      `ml-calculus-pitfalls`,
      `ml-calculus-real-world`
    ],
    exerciseIds: [
      `ex-calc-1`,
      `ex-calc-2`
    ]
  },
  {
    id: `ml-probability`,
    title: `Probability & Distributions`,
    description: `Probability theory, Bayes theorem, and key distributions for ML.`,
    level: `beginner`,
    module: `Math for Machine Learning`,
    moduleId: `module-09`,
    track: `ml`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `basics`,
      `distributions`,
      `expectation`,
      `mle`,
      `ml-probability-deep-theory`,
      `ml-probability-patterns`,
      `ml-probability-pitfalls`,
      `ml-probability-real-world`
    ],
    exerciseIds: [
      `ex-prob-1`,
      `ex-prob-2`
    ]
  },
  {
    id: `ml-info-theory`,
    title: `Information Theory & Entropy`,
    description: `Entropy, cross-entropy, KL divergence — core to classification loss.`,
    level: `beginner`,
    module: `Math for Machine Learning`,
    moduleId: `module-09`,
    track: `ml`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `entropy`,
      `cross-entropy`,
      `kl`,
      `mutual-info`,
      `ml-info-theory-deep-theory`,
      `ml-info-theory-patterns`,
      `ml-info-theory-pitfalls`,
      `ml-info-theory-real-world`
    ],
    exerciseIds: [
      `ex-info-1`,
      `ex-info-2`
    ]
  },
  {
    id: `ml-optimization`,
    title: `Optimization & Gradient Descent`,
    description: `Finding minima of loss functions iteratively.`,
    level: `beginner`,
    module: `Math for Machine Learning`,
    moduleId: `module-09`,
    track: `ml`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `gd`,
      `variants`,
      `convex`,
      `regularization`,
      `ml-optimization-deep-theory`,
      `ml-optimization-patterns`,
      `ml-optimization-pitfalls`,
      `ml-optimization-real-world`
    ],
    exerciseIds: [
      `ex-opt-1`,
      `ex-opt-2`
    ]
  },
  {
    id: `ml-workflow`,
    title: `ML Workflow & train_test_split`,
    description: `End-to-end machine learning pipeline with scikit-learn.`,
    level: `beginner`,
    module: `ML Foundations & Scikit-learn`,
    moduleId: `module-10`,
    track: `ml`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `pipeline`,
      `split`,
      `preprocessing`,
      `baseline`,
      `ml-workflow-deep-theory`,
      `ml-workflow-patterns`,
      `ml-workflow-pitfalls`,
      `ml-workflow-real-world`
    ],
    exerciseIds: [
      `ex-split-1`,
      `ex-split-2`
    ]
  },
  {
    id: `ml-linear`,
    title: `Linear & Logistic Regression`,
    description: `Foundation supervised learning algorithms.`,
    level: `beginner`,
    module: `ML Foundations & Scikit-learn`,
    moduleId: `module-10`,
    track: `ml`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `linear-reg`,
      `logistic`,
      `sigmoid`,
      `interpret`,
      `ml-linear-deep-theory`,
      `ml-linear-patterns`,
      `ml-linear-pitfalls`,
      `ml-linear-real-world`
    ],
    exerciseIds: [
      `ex-lr-1`,
      `ex-lr-2`
    ]
  },
  {
    id: `ml-trees`,
    title: `Decision Trees & Random Forests`,
    description: `Tree-based models for classification and regression.`,
    level: `beginner`,
    module: `ML Foundations & Scikit-learn`,
    moduleId: `module-10`,
    track: `ml`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `dt`,
      `rf`,
      `hyperparams`,
      `when`,
      `ml-trees-deep-theory`,
      `ml-trees-patterns`,
      `ml-trees-pitfalls`,
      `ml-trees-real-world`
    ],
    exerciseIds: [
      `ex-tree-1`,
      `ex-tree-2`
    ]
  },
  {
    id: `ml-metrics`,
    title: `Model Evaluation Metrics`,
    description: `Accuracy, precision, recall, F1, ROC-AUC, MSE, R².`,
    level: `beginner`,
    module: `ML Foundations & Scikit-learn`,
    moduleId: `module-10`,
    track: `ml`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `classification`,
      `roc`,
      `regression`,
      `confusion`,
      `ml-metrics-deep-theory`,
      `ml-metrics-patterns`,
      `ml-metrics-pitfalls`,
      `ml-metrics-real-world`
    ],
    exerciseIds: [
      `ex-met-1`,
      `ex-met-2`
    ]
  },
  {
    id: `ml-cv`,
    title: `Cross-Validation & Pipelines`,
    description: `Robust evaluation with k-fold CV and end-to-end pipelines.`,
    level: `beginner`,
    module: `ML Foundations & Scikit-learn`,
    moduleId: `module-10`,
    track: `ml`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `kfold`,
      `gridsearch`,
      `pipeline-cv`,
      `nested`,
      `ml-cv-deep-theory`,
      `ml-cv-patterns`,
      `ml-cv-pitfalls`,
      `ml-cv-real-world`
    ],
    exerciseIds: [
      `ex-cv-1`,
      `ex-cv-2`
    ]
  },
  {
    id: `ml-regression`,
    title: `Regression Techniques`,
    description: `Polynomial, ridge, lasso, and elastic net regression.`,
    level: `intermediate`,
    module: `Supervised Learning`,
    moduleId: `module-11`,
    track: `ml`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `poly`,
      `ridge-lasso`,
      `assumptions`,
      `robust`,
      `ml-regression-deep-theory`,
      `ml-regression-patterns`,
      `ml-regression-pitfalls`,
      `ml-regression-real-world`
    ],
    exerciseIds: [
      `ex-reg-1`,
      `ex-reg-2`
    ]
  },
  {
    id: `ml-classification`,
    title: `Classification Algorithms`,
    description: `KNN, Naive Bayes, and multi-class strategies.`,
    level: `intermediate`,
    module: `Supervised Learning`,
    moduleId: `module-11`,
    track: `ml`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `knn`,
      `naive-bayes`,
      `multiclass`,
      `imbalanced`,
      `ml-classification-deep-theory`,
      `ml-classification-patterns`,
      `ml-classification-pitfalls`,
      `ml-classification-real-world`
    ],
    exerciseIds: [
      `ex-clf-1`,
      `ex-clf-2`
    ]
  },
  {
    id: `ml-svm`,
    title: `Support Vector Machines`,
    description: `Maximum margin classifiers with kernel trick.`,
    level: `intermediate`,
    module: `Supervised Learning`,
    moduleId: `module-11`,
    track: `ml`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `svm-linear`,
      `kernel`,
      `svc-params`,
      `svr`,
      `ml-svm-deep-theory`,
      `ml-svm-patterns`,
      `ml-svm-pitfalls`,
      `ml-svm-real-world`
    ],
    exerciseIds: [
      `ex-svm-1`,
      `ex-svm-2`
    ]
  },
  {
    id: `ml-boosting`,
    title: `Gradient Boosting (XGBoost/LightGBM)`,
    description: `State-of-the-art ensemble methods for tabular data.`,
    level: `intermediate`,
    module: `Supervised Learning`,
    moduleId: `module-11`,
    track: `ml`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `gbm`,
      `xgboost`,
      `lightgbm`,
      `tuning-gbm`,
      `ml-boosting-deep-theory`,
      `ml-boosting-patterns`,
      `ml-boosting-pitfalls`,
      `ml-boosting-real-world`
    ],
    exerciseIds: [
      `ex-xgb-1`,
      `ex-xgb-2`
    ]
  },
  {
    id: `ml-ensemble`,
    title: `Ensemble Methods`,
    description: `Bagging, boosting, stacking, and voting classifiers.`,
    level: `intermediate`,
    module: `Supervised Learning`,
    moduleId: `module-11`,
    track: `ml`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `bagging`,
      `voting`,
      `blending`,
      `diversity`,
      `ml-ensemble-deep-theory`,
      `ml-ensemble-patterns`,
      `ml-ensemble-pitfalls`,
      `ml-ensemble-real-world`
    ],
    exerciseIds: [
      `ex-ens-1`,
      `ex-ens-2`
    ]
  },
  {
    id: `ml-clustering`,
    title: `Clustering (K-Means, DBSCAN)`,
    description: `Group similar data points without labels.`,
    level: `beginner`,
    module: `Unsupervised Learning`,
    moduleId: `module-12`,
    track: `ml`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `kmeans`,
      `dbscan`,
      `hierarchical`,
      `eval-cluster`,
      `ml-clustering-deep-theory`,
      `ml-clustering-patterns`,
      `ml-clustering-pitfalls`,
      `ml-clustering-real-world`
    ],
    exerciseIds: [
      `ex-km-1`,
      `ex-km-2`
    ]
  },
  {
    id: `ml-dimred`,
    title: `Dimensionality Reduction (PCA, t-SNE)`,
    description: `Reduce feature dimensions while preserving structure.`,
    level: `beginner`,
    module: `Unsupervised Learning`,
    moduleId: `module-12`,
    track: `ml`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `pca`,
      `tsne`,
      `lda`,
      `autoencoder`,
      `ml-dimred-deep-theory`,
      `ml-dimred-patterns`,
      `ml-dimred-pitfalls`,
      `ml-dimred-real-world`
    ],
    exerciseIds: [
      `ex-pca-1`,
      `ex-pca-2`
    ]
  },
  {
    id: `ml-anomaly`,
    title: `Anomaly Detection`,
    description: `Identify outliers and novel patterns in data.`,
    level: `beginner`,
    module: `Unsupervised Learning`,
    moduleId: `module-12`,
    track: `ml`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `isolation`,
      `lof`,
      `oneclass`,
      `applications`,
      `ml-anomaly-deep-theory`,
      `ml-anomaly-patterns`,
      `ml-anomaly-pitfalls`,
      `ml-anomaly-real-world`
    ],
    exerciseIds: [
      `ex-anom-1`,
      `ex-anom-2`
    ]
  },
  {
    id: `ml-association`,
    title: `Association Rules`,
    description: `Find frequent itemsets and association rules in transactional data.`,
    level: `beginner`,
    module: `Unsupervised Learning`,
    moduleId: `module-12`,
    track: `ml`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `apriori`,
      `metrics`,
      `mlxtend`,
      `applications`,
      `ml-association-deep-theory`,
      `ml-association-patterns`,
      `ml-association-pitfalls`,
      `ml-association-real-world`
    ],
    exerciseIds: [
      `ex-assoc-1`,
      `ex-assoc-2`
    ]
  },
  {
    id: `ml-gmm`,
    title: `Gaussian Mixture Models`,
    description: `Probabilistic clustering with soft assignments.`,
    level: `beginner`,
    module: `Unsupervised Learning`,
    moduleId: `module-12`,
    track: `ml`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `gmm`,
      `em`,
      `vs-kmeans`,
      `applications-gmm`,
      `ml-gmm-deep-theory`,
      `ml-gmm-patterns`,
      `ml-gmm-pitfalls`,
      `ml-gmm-real-world`
    ],
    exerciseIds: [
      `ex-gmm-1`,
      `ex-gmm-2`
    ]
  },
  {
    id: `ml-scaling`,
    title: `Feature Scaling & Encoding`,
    description: `Prepare features for ML algorithms.`,
    level: `advanced`,
    module: `Feature Engineering & Model Selection`,
    moduleId: `module-13`,
    track: `ml`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `scaling`,
      `encoding`,
      `binning`,
      `datetime-fe`,
      `ml-scaling-deep-theory`,
      `ml-scaling-patterns`,
      `ml-scaling-pitfalls`,
      `ml-scaling-real-world`
    ],
    exerciseIds: [
      `ex-scale-1`,
      `ex-scale-2`
    ]
  },
  {
    id: `ml-feature-sel`,
    title: `Feature Selection`,
    description: `Choose most informative features to reduce dimensionality and overfitting.`,
    level: `advanced`,
    module: `Feature Engineering & Model Selection`,
    moduleId: `module-13`,
    track: `ml`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `filter`,
      `wrapper`,
      `embedded`,
      `importance`,
      `ml-feature-sel-deep-theory`,
      `ml-feature-sel-patterns`,
      `ml-feature-sel-pitfalls`,
      `ml-feature-sel-real-world`
    ],
    exerciseIds: [
      `ex-fsel-1`,
      `ex-fsel-2`
    ]
  },
  {
    id: `ml-hyperparam`,
    title: `Hyperparameter Tuning`,
    description: `Systematic search for optimal model configuration.`,
    level: `advanced`,
    module: `Feature Engineering & Model Selection`,
    moduleId: `module-13`,
    track: `ml`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `grid`,
      `random`,
      `optuna`,
      `avoid-leakage`,
      `ml-hyperparam-deep-theory`,
      `ml-hyperparam-patterns`,
      `ml-hyperparam-pitfalls`,
      `ml-hyperparam-real-world`
    ],
    exerciseIds: [
      `ex-hp-1`,
      `ex-hp-2`
    ]
  },
  {
    id: `ml-bias-variance`,
    title: `Bias-Variance Tradeoff`,
    description: `Understanding underfitting and overfitting.`,
    level: `advanced`,
    module: `Feature Engineering & Model Selection`,
    moduleId: `module-13`,
    track: `ml`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `tradeoff`,
      `learning-curves`,
      `regularization-bv`,
      `double-descent`,
      `ml-bias-variance-deep-theory`,
      `ml-bias-variance-patterns`,
      `ml-bias-variance-pitfalls`,
      `ml-bias-variance-real-world`
    ],
    exerciseIds: [
      `ex-bv-1`,
      `ex-bv-2`
    ]
  },
  {
    id: `ml-interpret`,
    title: `Model Interpretability (SHAP, LIME)`,
    description: `Explain model predictions for trust and debugging.`,
    level: `advanced`,
    module: `Feature Engineering & Model Selection`,
    moduleId: `module-13`,
    track: `ml`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `shap`,
      `lime`,
      `global`,
      `fairness`,
      `ml-interpret-deep-theory`,
      `ml-interpret-patterns`,
      `ml-interpret-pitfalls`,
      `ml-interpret-real-world`
    ],
    exerciseIds: [
      `ex-shap-1`,
      `ex-shap-2`
    ]
  },
  {
    id: `dl-nn-basics`,
    title: `Neural Network Basics`,
    description: `Perceptrons, multi-layer networks, and forward propagation.`,
    level: `beginner`,
    module: `Deep Learning Fundamentals`,
    moduleId: `module-14`,
    track: `dl`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `perceptron`,
      `mlp`,
      `forward`,
      `capacity`,
      `dl-nn-basics-deep-theory`,
      `dl-nn-basics-patterns`,
      `dl-nn-basics-pitfalls`,
      `dl-nn-basics-real-world`
    ],
    exerciseIds: [
      `ex-nn-1`,
      `ex-nn-2`
    ]
  },
  {
    id: `dl-activations`,
    title: `Activation Functions`,
    description: `Non-linear functions enabling networks to learn complex patterns.`,
    level: `beginner`,
    module: `Deep Learning Fundamentals`,
    moduleId: `module-14`,
    track: `dl`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `relu`,
      `sigmoid-tanh`,
      `softmax`,
      `modern`,
      `dl-activations-deep-theory`,
      `dl-activations-patterns`,
      `dl-activations-pitfalls`,
      `dl-activations-real-world`
    ],
    exerciseIds: [
      `ex-act-1`,
      `ex-act-2`
    ]
  },
  {
    id: `dl-loss`,
    title: `Loss Functions`,
    description: `Objective functions that neural networks minimize during training.`,
    level: `beginner`,
    module: `Deep Learning Fundamentals`,
    moduleId: `module-14`,
    track: `dl`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `mse`,
      `ce`,
      `multi-task`,
      `monitor`,
      `dl-loss-deep-theory`,
      `dl-loss-patterns`,
      `dl-loss-pitfalls`,
      `dl-loss-real-world`
    ],
    exerciseIds: [
      `ex-loss-1`,
      `ex-loss-2`
    ]
  },
  {
    id: `dl-backprop`,
    title: `Backpropagation`,
    description: `Computing gradients through the computational graph via chain rule.`,
    level: `beginner`,
    module: `Deep Learning Fundamentals`,
    moduleId: `module-14`,
    track: `dl`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `concept`,
      `manual`,
      `autograd`,
      `vanishing`,
      `dl-backprop-deep-theory`,
      `dl-backprop-patterns`,
      `dl-backprop-pitfalls`,
      `dl-backprop-real-world`
    ],
    exerciseIds: [
      `ex-bp-1`,
      `ex-bp-2`
    ]
  },
  {
    id: `dl-init-reg`,
    title: `Weight Initialization & Regularization`,
    description: `Starting weights and techniques to prevent overfitting.`,
    level: `beginner`,
    module: `Deep Learning Fundamentals`,
    moduleId: `module-14`,
    track: `dl`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `init`,
      `dropout`,
      `batchnorm`,
      `early-stop`,
      `dl-init-reg-deep-theory`,
      `dl-init-reg-patterns`,
      `dl-init-reg-pitfalls`,
      `dl-init-reg-real-world`
    ],
    exerciseIds: [
      `ex-init-1`,
      `ex-init-2`
    ]
  },
  {
    id: `pt-tensors`,
    title: `PyTorch Tensors`,
    description: `PyTorch fundamental data structure with GPU support.`,
    level: `intermediate`,
    module: `PyTorch & Neural Networks`,
    moduleId: `module-15`,
    track: `dl`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `tensor-basics`,
      `ops`,
      `numpy-bridge`,
      `device`,
      `pt-tensors-deep-theory`,
      `pt-tensors-patterns`,
      `pt-tensors-pitfalls`,
      `pt-tensors-real-world`
    ],
    exerciseIds: [
      `ex-pt-1`,
      `ex-pt-2`
    ]
  },
  {
    id: `pt-autograd`,
    title: `Autograd & Computational Graphs`,
    description: `Automatic differentiation engine in PyTorch.`,
    level: `intermediate`,
    module: `PyTorch & Neural Networks`,
    moduleId: `module-15`,
    track: `dl`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `grad`,
      `graph`,
      `leaf`,
      `higher`,
      `pt-autograd-deep-theory`,
      `pt-autograd-patterns`,
      `pt-autograd-pitfalls`,
      `pt-autograd-real-world`
    ],
    exerciseIds: [
      `ex-ag-1`,
      `ex-ag-2`
    ]
  },
  {
    id: `pt-module`,
    title: `Building NN with nn.Module`,
    description: `Object-oriented model definition in PyTorch.`,
    level: `intermediate`,
    module: `PyTorch & Neural Networks`,
    moduleId: `module-15`,
    track: `dl`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `module`,
      `layers`,
      `loss-opt`,
      `save`,
      `pt-module-deep-theory`,
      `pt-module-patterns`,
      `pt-module-pitfalls`,
      `pt-module-real-world`
    ],
    exerciseIds: [
      `ex-mod-1`,
      `ex-mod-2`
    ]
  },
  {
    id: `pt-training`,
    title: `DataLoaders & Training Loops`,
    description: `Efficient data loading and standard training loop pattern.`,
    level: `intermediate`,
    module: `PyTorch & Neural Networks`,
    moduleId: `module-15`,
    track: `dl`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `dataset`,
      `loop`,
      `transforms`,
      `scheduler`,
      `pt-training-deep-theory`,
      `pt-training-patterns`,
      `pt-training-pitfalls`,
      `pt-training-real-world`
    ],
    exerciseIds: [
      `ex-train-1`,
      `ex-train-2`
    ]
  },
  {
    id: `pt-gpu`,
    title: `GPU Training & Mixed Precision`,
    description: `Accelerate training with CUDA and automatic mixed precision.`,
    level: `intermediate`,
    module: `PyTorch & Neural Networks`,
    moduleId: `module-15`,
    track: `dl`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `cuda`,
      `amp`,
      `compile`,
      `distributed`,
      `pt-gpu-deep-theory`,
      `pt-gpu-patterns`,
      `pt-gpu-pitfalls`,
      `pt-gpu-real-world`
    ],
    exerciseIds: [
      `ex-gpu-1`,
      `ex-gpu-2`
    ]
  },
  {
    id: `dl-conv`,
    title: `Convolutional Layers`,
    description: `Spatial feature extraction with convolution and pooling.`,
    level: `beginner`,
    module: `CNNs & Computer Vision`,
    moduleId: `module-16`,
    track: `dl`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `conv2d`,
      `pooling`,
      `receptive`,
      `cnn-arch`,
      `dl-conv-deep-theory`,
      `dl-conv-patterns`,
      `dl-conv-pitfalls`,
      `dl-conv-real-world`
    ],
    exerciseIds: [
      `ex-conv-1`,
      `ex-conv-2`
    ]
  },
  {
    id: `dl-cnn-arch`,
    title: `CNN Architectures (ResNet, VGG)`,
    description: `Landmark architectures that shaped computer vision.`,
    level: `beginner`,
    module: `CNNs & Computer Vision`,
    moduleId: `module-16`,
    track: `dl`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `vgg`,
      `resnet`,
      `modern`,
      `torchvision`,
      `dl-cnn-arch-deep-theory`,
      `dl-cnn-arch-patterns`,
      `dl-cnn-arch-pitfalls`,
      `dl-cnn-arch-real-world`
    ],
    exerciseIds: [
      `ex-res-1`,
      `ex-res-2`
    ]
  },
  {
    id: `dl-transfer`,
    title: `Transfer Learning`,
    description: `Leverage pretrained models for new tasks with limited data.`,
    level: `beginner`,
    module: `CNNs & Computer Vision`,
    moduleId: `module-16`,
    track: `dl`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `strategy`,
      `finetune`,
      `domain`,
      `hub`,
      `dl-transfer-deep-theory`,
      `dl-transfer-patterns`,
      `dl-transfer-pitfalls`,
      `dl-transfer-real-world`
    ],
    exerciseIds: [
      `ex-tl-1`,
      `ex-tl-2`
    ]
  },
  {
    id: `dl-detection`,
    title: `Object Detection`,
    description: `Locate and classify multiple objects in images.`,
    level: `beginner`,
    module: `CNNs & Computer Vision`,
    moduleId: `module-16`,
    track: `dl`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `metrics-det`,
      `rcnn`,
      `yolo`,
      `tools`,
      `dl-detection-deep-theory`,
      `dl-detection-patterns`,
      `dl-detection-pitfalls`,
      `dl-detection-real-world`
    ],
    exerciseIds: [
      `ex-det-1`,
      `ex-det-2`
    ]
  },
  {
    id: `dl-segmentation`,
    title: `Image Segmentation`,
    description: `Pixel-level classification: semantic and instance segmentation.`,
    level: `beginner`,
    module: `CNNs & Computer Vision`,
    moduleId: `module-16`,
    track: `dl`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `semantic`,
      `instance`,
      `unet`,
      `metrics-seg`,
      `dl-segmentation-deep-theory`,
      `dl-segmentation-patterns`,
      `dl-segmentation-pitfalls`,
      `dl-segmentation-real-world`
    ],
    exerciseIds: [
      `ex-seg-1`,
      `ex-seg-2`
    ]
  },
  {
    id: `nlp-preprocess`,
    title: `Text Preprocessing & Tokenization`,
    description: `Prepare raw text for neural network input.`,
    level: `beginner`,
    module: `NLP, RNNs & Sequence Models`,
    moduleId: `module-17`,
    track: `dl`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `clean`,
      `tokenize`,
      `hf-tokenizer`,
      `vocab`,
      `nlp-preprocess-deep-theory`,
      `nlp-preprocess-patterns`,
      `nlp-preprocess-pitfalls`,
      `nlp-preprocess-real-world`
    ],
    exerciseIds: [
      `ex-nlp-1`,
      `ex-nlp-2`
    ]
  },
  {
    id: `nlp-embeddings`,
    title: `Word Embeddings (Word2Vec, GloVe)`,
    description: `Dense vector representations capturing semantic meaning.`,
    level: `beginner`,
    module: `NLP, RNNs & Sequence Models`,
    moduleId: `module-17`,
    track: `dl`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `word2vec`,
      `glove`,
      `nn-embed`,
      `contextual`,
      `nlp-embeddings-deep-theory`,
      `nlp-embeddings-patterns`,
      `nlp-embeddings-pitfalls`,
      `nlp-embeddings-real-world`
    ],
    exerciseIds: [
      `ex-emb-1`,
      `ex-emb-2`
    ]
  },
  {
    id: `nlp-rnn`,
    title: `RNNs & LSTMs`,
    description: `Recurrent networks for sequential data processing.`,
    level: `beginner`,
    module: `NLP, RNNs & Sequence Models`,
    moduleId: `module-17`,
    track: `dl`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `rnn`,
      `lstm`,
      `gru`,
      `bidirectional`,
      `nlp-rnn-deep-theory`,
      `nlp-rnn-patterns`,
      `nlp-rnn-pitfalls`,
      `nlp-rnn-real-world`
    ],
    exerciseIds: [
      `ex-rnn-1`,
      `ex-rnn-2`
    ]
  },
  {
    id: `nlp-seq2seq`,
    title: `Seq2Seq & Attention Preview`,
    description: `Encoder-decoder architecture for translation and summarization.`,
    level: `beginner`,
    module: `NLP, RNNs & Sequence Models`,
    moduleId: `module-17`,
    track: `dl`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `seq2seq`,
      `teacher`,
      `beam`,
      `apps`,
      `nlp-seq2seq-deep-theory`,
      `nlp-seq2seq-patterns`,
      `nlp-seq2seq-pitfalls`,
      `nlp-seq2seq-real-world`
    ],
    exerciseIds: [
      `ex-s2s-1`,
      `ex-s2s-2`
    ]
  },
  {
    id: `nlp-ner`,
    title: `Named Entity Recognition`,
    description: `Token-level sequence labeling for entity extraction.`,
    level: `beginner`,
    module: `NLP, RNNs & Sequence Models`,
    moduleId: `module-17`,
    track: `dl`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `ner-task`,
      `bi-lstm`,
      `bert-ner`,
      `applications`,
      `nlp-ner-deep-theory`,
      `nlp-ner-patterns`,
      `nlp-ner-pitfalls`,
      `nlp-ner-real-world`
    ],
    exerciseIds: [
      `ex-ner-1`,
      `ex-ner-2`
    ]
  },
  {
    id: `dl-attention`,
    title: `Self-Attention Mechanism`,
    description: `The core innovation enabling modern NLP and beyond.`,
    level: `advanced`,
    module: `Transformers & Attention`,
    moduleId: `module-18`,
    track: `dl`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `attention`,
      `scaled`,
      `self-attn`,
      `multi-head`,
      `dl-attention-deep-theory`,
      `dl-attention-patterns`,
      `dl-attention-pitfalls`,
      `dl-attention-real-world`
    ],
    exerciseIds: [
      `ex-attn-1`,
      `ex-attn-2`
    ]
  },
  {
    id: `dl-transformer`,
    title: `Transformer Architecture`,
    description: `The complete encoder-decoder architecture from "Attention Is All You Need".`,
    level: `advanced`,
    module: `Transformers & Attention`,
    moduleId: `module-18`,
    track: `dl`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `encoder`,
      `decoder`,
      `ffn`,
      `layer-norm`,
      `dl-transformer-deep-theory`,
      `dl-transformer-patterns`,
      `dl-transformer-pitfalls`,
      `dl-transformer-real-world`
    ],
    exerciseIds: [
      `ex-tr-1`,
      `ex-tr-2`
    ]
  },
  {
    id: `dl-positional`,
    title: `Positional Encoding`,
    description: `Inject sequence order information since attention is permutation-invariant.`,
    level: `advanced`,
    module: `Transformers & Attention`,
    moduleId: `module-18`,
    track: `dl`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `sinusoidal`,
      `learned`,
      `rope`,
      `alibi`,
      `dl-positional-deep-theory`,
      `dl-positional-patterns`,
      `dl-positional-pitfalls`,
      `dl-positional-real-world`
    ],
    exerciseIds: [
      `ex-pe-1`,
      `ex-pe-2`
    ]
  },
  {
    id: `dl-bert`,
    title: `BERT & Encoder Models`,
    description: `Bidirectional encoder representations from transformers.`,
    level: `advanced`,
    module: `Transformers & Attention`,
    moduleId: `module-18`,
    track: `dl`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `bert`,
      `mlm`,
      `fine-tune`,
      `encoder-models`,
      `dl-bert-deep-theory`,
      `dl-bert-patterns`,
      `dl-bert-pitfalls`,
      `dl-bert-real-world`
    ],
    exerciseIds: [
      `ex-bert-1`,
      `ex-bert-2`
    ]
  },
  {
    id: `dl-gpt`,
    title: `GPT & Decoder Models`,
    description: `Autoregressive language models for text generation.`,
    level: `advanced`,
    module: `Transformers & Attention`,
    moduleId: `module-18`,
    track: `dl`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `gpt`,
      `generation`,
      `causal`,
      `scaling`,
      `dl-gpt-deep-theory`,
      `dl-gpt-patterns`,
      `dl-gpt-pitfalls`,
      `dl-gpt-real-world`
    ],
    exerciseIds: [
      `ex-gpt-1`,
      `ex-gpt-2`
    ]
  },
  {
    id: `ai-llm`,
    title: `Large Language Models Overview`,
    description: `Architecture, capabilities, and landscape of modern LLMs.`,
    level: `advanced`,
    module: `LLMs, GenAI & Prompt Engineering`,
    moduleId: `module-19`,
    track: `ai`,
    estimatedMinutes: 45,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `landscape`,
      `capabilities`,
      `tokens`,
      `eval`,
      `ai-llm-deep-theory`,
      `ai-llm-patterns`,
      `ai-llm-pitfalls`,
      `ai-llm-real-world`
    ],
    exerciseIds: [
      `ex-llm-1`,
      `ex-llm-2`
    ]
  },
  {
    id: `ai-prompt`,
    title: `Prompt Engineering`,
    description: `Design effective prompts to maximize LLM output quality.`,
    level: `advanced`,
    module: `LLMs, GenAI & Prompt Engineering`,
    moduleId: `module-19`,
    track: `ai`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `basics`,
      `cot`,
      `few-shot`,
      `advanced-prompt`,
      `ai-prompt-deep-theory`,
      `ai-prompt-patterns`,
      `ai-prompt-pitfalls`,
      `ai-prompt-real-world`
    ],
    exerciseIds: [
      `ex-prompt-1`,
      `ex-prompt-2`
    ]
  },
  {
    id: `ai-rag`,
    title: `RAG (Retrieval Augmented Generation)`,
    description: `Ground LLM responses in external knowledge via retrieval.`,
    level: `advanced`,
    module: `LLMs, GenAI & Prompt Engineering`,
    moduleId: `module-19`,
    track: `ai`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `rag-arch`,
      `embeddings-rag`,
      `chunking`,
      `eval-rag`,
      `ai-rag-deep-theory`,
      `ai-rag-patterns`,
      `ai-rag-pitfalls`,
      `ai-rag-real-world`
    ],
    exerciseIds: [
      `ex-rag-1`,
      `ex-rag-2`
    ]
  },
  {
    id: `ai-finetune`,
    title: `Fine-tuning & LoRA`,
    description: `Adapt pretrained LLMs to specific tasks and domains.`,
    level: `advanced`,
    module: `LLMs, GenAI & Prompt Engineering`,
    moduleId: `module-19`,
    track: `ai`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `finetune`,
      `lora`,
      `instruction`,
      `rlhf`,
      `ai-finetune-deep-theory`,
      `ai-finetune-patterns`,
      `ai-finetune-pitfalls`,
      `ai-finetune-real-world`
    ],
    exerciseIds: [
      `ex-ft-1`,
      `ex-ft-2`
    ]
  },
  {
    id: `ai-agents`,
    title: `Agents & Tool Use`,
    description: `LLM agents that reason, plan, and interact with external tools.`,
    level: `expert`,
    module: `LLMs, GenAI & Prompt Engineering`,
    moduleId: `module-19`,
    track: `ai`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `agents`,
      `tools`,
      `frameworks`,
      `safety`,
      `ai-agents-deep-theory`,
      `ai-agents-patterns`,
      `ai-agents-pitfalls`,
      `ai-agents-real-world`
    ],
    exerciseIds: [
      `ex-agent-1`,
      `ex-agent-2`
    ]
  },
  {
    id: `ai-serving`,
    title: `Model Serialization & Serving`,
    description: `Save, load, and serve ML models in production.`,
    level: `advanced`,
    module: `MLOps, Deployment & AI Ethics`,
    moduleId: `module-20`,
    track: `ai`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `serialize`,
      `fastapi`,
      `onnx`,
      `batch-realtime`,
      `ai-serving-deep-theory`,
      `ai-serving-patterns`,
      `ai-serving-pitfalls`,
      `ai-serving-real-world`
    ],
    exerciseIds: [
      `ex-serve-1`,
      `ex-serve-2`
    ]
  },
  {
    id: `ai-docker`,
    title: `Docker & Cloud Deployment`,
    description: `Containerize and deploy ML applications to cloud.`,
    level: `advanced`,
    module: `MLOps, Deployment & AI Ethics`,
    moduleId: `module-20`,
    track: `ai`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `docker`,
      `compose`,
      `cloud`,
      `cicd`,
      `ai-docker-deep-theory`,
      `ai-docker-patterns`,
      `ai-docker-pitfalls`,
      `ai-docker-real-world`
    ],
    exerciseIds: [
      `ex-docker-1`,
      `ex-docker-2`
    ]
  },
  {
    id: `ai-monitoring`,
    title: `Monitoring & Drift Detection`,
    description: `Track model performance and data quality in production.`,
    level: `advanced`,
    module: `MLOps, Deployment & AI Ethics`,
    moduleId: `module-20`,
    track: `ai`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `monitoring`,
      `drift`,
      `evidently`,
      `retraining`,
      `ai-monitoring-deep-theory`,
      `ai-monitoring-patterns`,
      `ai-monitoring-pitfalls`,
      `ai-monitoring-real-world`
    ],
    exerciseIds: [
      `ex-mon-1`,
      `ex-mon-2`
    ]
  },
  {
    id: `ai-bias`,
    title: `AI Ethics, Bias & Fairness`,
    description: `Identify and mitigate bias in ML systems.`,
    level: `advanced`,
    module: `MLOps, Deployment & AI Ethics`,
    moduleId: `module-20`,
    track: `ai`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `bias`,
      `fairness`,
      `mitigation`,
      `explain-ethics`,
      `ai-bias-deep-theory`,
      `ai-bias-patterns`,
      `ai-bias-pitfalls`,
      `ai-bias-real-world`
    ],
    exerciseIds: [
      `ex-bias-1`,
      `ex-bias-2`
    ]
  },
  {
    id: `ai-governance`,
    title: `Responsible AI & Governance`,
    description: `Organizational frameworks for ethical AI development and deployment.`,
    level: `advanced`,
    module: `MLOps, Deployment & AI Ethics`,
    moduleId: `module-20`,
    track: `ai`,
    estimatedMinutes: 40,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `framework`,
      `eu-ai-act`,
      `privacy`,
      `red-team`,
      `ai-governance-deep-theory`,
      `ai-governance-patterns`,
      `ai-governance-pitfalls`,
      `ai-governance-real-world`
    ],
    exerciseIds: [
      `ex-gov-1`,
      `ex-gov-2`
    ]
  },
  {
    id: `py-testing`,
    title: `Testing with pytest & unittest`,
    description: `Write reliable unit tests, use fixtures and mocking, and integrate tests into CI pipelines.`,
    level: `intermediate`,
    module: `Python Testing, Debugging & Async`,
    moduleId: `module-21`,
    track: `python`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `pytest-basics`,
      `fixtures`,
      `unittest-mock`,
      `coverage-ci`,
      `py-testing-deep-theory`,
      `py-testing-patterns`,
      `py-testing-pitfalls`,
      `py-testing-real-world`
    ],
    exerciseIds: [
      `ex-pytest-1`,
      `ex-pytest-2`
    ]
  },
  {
    id: `py-debugging`,
    title: `Debugging, Logging & Tracebacks`,
    description: `Use pdb, logging, and traceback analysis to diagnose failures systematically in Python programs.`,
    level: `intermediate`,
    module: `Python Testing, Debugging & Async`,
    moduleId: `module-21`,
    track: `python`,
    estimatedMinutes: 45,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `pdb`,
      `logging`,
      `tracebacks`,
      `debug-tools`,
      `py-debugging-deep-theory`,
      `py-debugging-patterns`,
      `py-debugging-pitfalls`,
      `py-debugging-real-world`
    ],
    exerciseIds: [
      `ex-debug-1`,
      `ex-debug-2`
    ]
  },
  {
    id: `py-async`,
    title: `Asyncio & Async/Await`,
    description: `Write concurrent I/O-bound programs with asyncio, coroutines, and introductory aiohttp patterns.`,
    level: `intermediate`,
    module: `Python Testing, Debugging & Async`,
    moduleId: `module-21`,
    track: `python`,
    estimatedMinutes: 55,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `coroutines`,
      `gather-tasks`,
      `aiohttp`,
      `async-pitfalls`,
      `py-async-deep-theory`,
      `py-async-patterns`,
      `py-async-pitfalls`,
      `py-async-real-world`
    ],
    exerciseIds: [
      `ex-async-1`,
      `ex-async-2`
    ]
  },
  {
    id: `py-regex`,
    title: `Regular Expressions with re`,
    description: `Match, search, and transform text using Python's re module and common regex patterns.`,
    level: `intermediate`,
    module: `Python Testing, Debugging & Async`,
    moduleId: `module-21`,
    track: `python`,
    estimatedMinutes: 45,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `re-basics`,
      `patterns`,
      `flags-groups`,
      `regex-caveats`,
      `py-regex-deep-theory`,
      `py-regex-patterns`,
      `py-regex-pitfalls`,
      `py-regex-real-world`
    ],
    exerciseIds: [
      `ex-regex-1`,
      `ex-regex-2`
    ]
  },
  {
    id: `py-concurrency`,
    title: `Threading, Multiprocessing & the GIL`,
    description: `Choose threading, multiprocessing, or asyncio for parallelism; understand the Global Interpreter Lock.`,
    level: `advanced`,
    module: `Python Testing, Debugging & Async`,
    moduleId: `module-21`,
    track: `python`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `gil`,
      `threading`,
      `multiprocessing`,
      `choosing`,
      `py-concurrency-deep-theory`,
      `py-concurrency-patterns`,
      `py-concurrency-pitfalls`,
      `py-concurrency-real-world`
    ],
    exerciseIds: [
      `ex-conc-1`,
      `ex-conc-2`
    ]
  },
  {
    id: `py-files`,
    title: `Files & Serialization`,
    description: `Read and write files safely with pathlib, json, csv, and pickle.`,
    level: `intermediate`,
    module: `File I/O, APIs & Data Formats`,
    moduleId: `module-22`,
    track: `python`,
    estimatedMinutes: 45,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `pathlib`,
      `json-csv`,
      `pickle`,
      `io-patterns`,
      `py-files-deep-theory`,
      `py-files-patterns`,
      `py-files-pitfalls`,
      `py-files-real-world`
    ],
    exerciseIds: [
      `ex-files-1`,
      `ex-files-2`
    ]
  },
  {
    id: `py-apis`,
    title: `HTTP & REST APIs`,
    description: `Consume REST APIs with requests: methods, headers, auth, and error handling.`,
    level: `intermediate`,
    module: `File I/O, APIs & Data Formats`,
    moduleId: `module-22`,
    track: `python`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `requests-basics`,
      `rest`,
      `auth-errors`,
      `testing-apis`,
      `py-apis-deep-theory`,
      `py-apis-patterns`,
      `py-apis-pitfalls`,
      `py-apis-real-world`
    ],
    exerciseIds: [
      `ex-api-1`,
      `ex-api-2`
    ]
  },
  {
    id: `py-web-scrape`,
    title: `Web Scraping Basics`,
    description: `Extract data with BeautifulSoup while respecting ethics, robots.txt, and rate limits.`,
    level: `intermediate`,
    module: `File I/O, APIs & Data Formats`,
    moduleId: `module-22`,
    track: `python`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `bs4`,
      `fetch`,
      `extract`,
      `ethics`,
      `py-web-scrape-deep-theory`,
      `py-web-scrape-patterns`,
      `py-web-scrape-pitfalls`,
      `py-web-scrape-real-world`
    ],
    exerciseIds: [
      `ex-scrape-1`,
      `ex-scrape-2`
    ]
  },
  {
    id: `py-sqlite`,
    title: `SQLite with Python`,
    description: `Use sqlite3 for embedded relational storage, parameterized queries, and transactions.`,
    level: `intermediate`,
    module: `File I/O, APIs & Data Formats`,
    moduleId: `module-22`,
    track: `python`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `connect`,
      `sql`,
      `orm-alt`,
      `security`,
      `py-sqlite-deep-theory`,
      `py-sqlite-patterns`,
      `py-sqlite-pitfalls`,
      `py-sqlite-real-world`
    ],
    exerciseIds: [
      `ex-sql-1`,
      `ex-sql-2`
    ]
  },
  {
    id: `py-serialization`,
    title: `Advanced Serialization`,
    description: `JSON Schema validation, YAML config, and columnar Parquet introduction.`,
    level: `intermediate`,
    module: `File I/O, APIs & Data Formats`,
    moduleId: `module-22`,
    track: `python`,
    estimatedMinutes: 45,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `json-schema`,
      `yaml`,
      `parquet`,
      `formats-choose`,
      `py-serialization-deep-theory`,
      `py-serialization-patterns`,
      `py-serialization-pitfalls`,
      `py-serialization-real-world`
    ],
    exerciseIds: [
      `ex-ser-1`,
      `ex-ser-2`
    ]
  },
  {
    id: `scipy-basics`,
    title: `SciPy Numerical Tools`,
    description: `Use scipy.optimize, integrate, and interpolate for scientific computing tasks.`,
    level: `intermediate`,
    module: `SciPy & Statistical Computing`,
    moduleId: `module-23`,
    track: `data`,
    estimatedMinutes: 55,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `optimize`,
      `integrate`,
      `interpolate`,
      `scipy-ecosystem`,
      `scipy-basics-deep-theory`,
      `scipy-basics-patterns`,
      `scipy-basics-pitfalls`,
      `scipy-basics-real-world`
    ],
    exerciseIds: [
      `ex-scipy-1`,
      `ex-scipy-2`
    ]
  },
  {
    id: `stats-hypothesis`,
    title: `Hypothesis Testing`,
    description: `Apply t-tests, chi-square tests, and interpret p-values responsibly.`,
    level: `intermediate`,
    module: `SciPy & Statistical Computing`,
    moduleId: `module-23`,
    track: `data`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `hypothesis`,
      `ttest`,
      `chisq`,
      `pvalue-interpret`,
      `stats-hypothesis-deep-theory`,
      `stats-hypothesis-patterns`,
      `stats-hypothesis-pitfalls`,
      `stats-hypothesis-real-world`
    ],
    exerciseIds: [
      `ex-hyp-1`,
      `ex-hyp-2`
    ]
  },
  {
    id: `stats-distributions`,
    title: `Probability Distributions`,
    description: `Model uncertainty with scipy.stats: PDFs, CDFs, sampling, and fitting.`,
    level: `intermediate`,
    module: `SciPy & Statistical Computing`,
    moduleId: `module-23`,
    track: `data`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `rv`,
      `fit`,
      `sampling`,
      `clt`,
      `stats-distributions-deep-theory`,
      `stats-distributions-patterns`,
      `stats-distributions-pitfalls`,
      `stats-distributions-real-world`
    ],
    exerciseIds: [
      `ex-dist-1`,
      `ex-dist-2`
    ]
  },
  {
    id: `stats-regression`,
    title: `Regression with statsmodels`,
    description: `Ordinary least squares and logistic regression for inference-rich modeling.`,
    level: `intermediate`,
    module: `SciPy & Statistical Computing`,
    moduleId: `module-23`,
    track: `data`,
    estimatedMinutes: 55,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `ols`,
      `logistic`,
      `diagnostics`,
      `inference-vs-pred`,
      `stats-regression-deep-theory`,
      `stats-regression-patterns`,
      `stats-regression-pitfalls`,
      `stats-regression-real-world`
    ],
    exerciseIds: [
      `ex-reg-1`,
      `ex-reg-2`
    ]
  },
  {
    id: `stats-bayes`,
    title: `Bayesian Inference Intro`,
    description: `Update beliefs with data using Bayes' theorem, priors, and posterior sampling overview.`,
    level: `advanced`,
    module: `SciPy & Statistical Computing`,
    moduleId: `module-23`,
    track: `data`,
    estimatedMinutes: 55,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `bayes-theorem`,
      `priors`,
      `mcmc`,
      `bayes-ml`,
      `stats-bayes-deep-theory`,
      `stats-bayes-patterns`,
      `stats-bayes-pitfalls`,
      `stats-bayes-real-world`
    ],
    exerciseIds: [
      `ex-bayes-1`,
      `ex-bayes-2`
    ]
  },
  {
    id: `ml-timeseries`,
    title: `Time Series Foundations`,
    description: `Decompose series, check stationarity, and fit ARIMA models.`,
    level: `advanced`,
    module: `Time Series & Recommender Systems`,
    moduleId: `module-24`,
    track: `ml`,
    estimatedMinutes: 60,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `components`,
      `stationarity`,
      `arima`,
      `seasonal-arima`,
      `ml-timeseries-deep-theory`,
      `ml-timeseries-patterns`,
      `ml-timeseries-pitfalls`,
      `ml-timeseries-real-world`
    ],
    exerciseIds: [
      `ex-ts-1`,
      `ex-ts-2`
    ]
  },
  {
    id: `ml-forecasting`,
    title: `Forecasting with Prophet & sklearn`,
    description: `Practical forecasting pipelines for business time series.`,
    level: `advanced`,
    module: `Time Series & Recommender Systems`,
    moduleId: `module-24`,
    track: `ml`,
    estimatedMinutes: 55,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `prophet`,
      `sklearn-ts`,
      `metrics-ts`,
      `pipeline`,
      `ml-forecasting-deep-theory`,
      `ml-forecasting-patterns`,
      `ml-forecasting-pitfalls`,
      `ml-forecasting-real-world`
    ],
    exerciseIds: [
      `ex-fc-1`,
      `ex-fc-2`
    ]
  },
  {
    id: `ml-recsys-collab`,
    title: `Collaborative Filtering`,
    description: `Recommend items from user-item interaction patterns.`,
    level: `advanced`,
    module: `Time Series & Recommender Systems`,
    moduleId: `module-24`,
    track: `ml`,
    estimatedMinutes: 55,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `matrix-factor`,
      `neighborhood`,
      `implicit`,
      `eval-recsys`,
      `ml-recsys-collab-deep-theory`,
      `ml-recsys-collab-patterns`,
      `ml-recsys-collab-pitfalls`,
      `ml-recsys-collab-real-world`
    ],
    exerciseIds: [
      `ex-cf-1`,
      `ex-cf-2`
    ]
  },
  {
    id: `ml-recsys-content`,
    title: `Content-Based Filtering`,
    description: `Recommend from item features and user preference profiles.`,
    level: `advanced`,
    module: `Time Series & Recommender Systems`,
    moduleId: `module-24`,
    track: `ml`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `features`,
      `similarity`,
      `learning`,
      `limits`,
      `ml-recsys-content-deep-theory`,
      `ml-recsys-content-patterns`,
      `ml-recsys-content-pitfalls`,
      `ml-recsys-content-real-world`
    ],
    exerciseIds: [
      `ex-cb-1`,
      `ex-cb-2`
    ]
  },
  {
    id: `ml-imbalanced`,
    title: `Imbalanced Classification`,
    description: `Handle skewed classes with resampling, weights, and proper metrics.`,
    level: `advanced`,
    module: `Time Series & Recommender Systems`,
    moduleId: `module-24`,
    track: `ml`,
    estimatedMinutes: 55,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `problem`,
      `smote`,
      `weights`,
      `metrics-imb`,
      `ml-imbalanced-deep-theory`,
      `ml-imbalanced-patterns`,
      `ml-imbalanced-pitfalls`,
      `ml-imbalanced-real-world`
    ],
    exerciseIds: [
      `ex-imb-1`,
      `ex-imb-2`
    ]
  },
  {
    id: `rl-basics`,
    title: `MDPs, Rewards & Policies`,
    description: `Formalize sequential decision making as Markov Decision Processes.`,
    level: `advanced`,
    module: `Reinforcement Learning`,
    moduleId: `module-25`,
    track: `ml`,
    estimatedMinutes: 55,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `mdp`,
      `value-policy`,
      `explore`,
      `rl-loop`,
      `rl-basics-deep-theory`,
      `rl-basics-patterns`,
      `rl-basics-pitfalls`,
      `rl-basics-real-world`
    ],
    exerciseIds: [
      `ex-rl-1`,
      `ex-rl-2`
    ]
  },
  {
    id: `rl-qlearning`,
    title: `Q-Learning & Bellman Updates`,
    description: `Model-free temporal difference learning for optimal action-values.`,
    level: `advanced`,
    module: `Reinforcement Learning`,
    moduleId: `module-25`,
    track: `ml`,
    estimatedMinutes: 60,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `qlearning`,
      `td`,
      `tabular`,
      `convergence`,
      `rl-qlearning-deep-theory`,
      `rl-qlearning-patterns`,
      `rl-qlearning-pitfalls`,
      `rl-qlearning-real-world`
    ],
    exerciseIds: [
      `ex-ql-1`,
      `ex-ql-2`
    ]
  },
  {
    id: `rl-deep`,
    title: `Deep Q-Networks (DQN)`,
    description: `Combine Q-learning with neural networks and stabilization tricks.`,
    level: `advanced`,
    module: `Reinforcement Learning`,
    moduleId: `module-25`,
    track: `ml`,
    estimatedMinutes: 60,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `dqn`,
      `improvements`,
      `atari`,
      `limits-dqn`,
      `rl-deep-deep-theory`,
      `rl-deep-patterns`,
      `rl-deep-pitfalls`,
      `rl-deep-real-world`
    ],
    exerciseIds: [
      `ex-dqn-1`,
      `ex-dqn-2`
    ]
  },
  {
    id: `rl-policy`,
    title: `Policy Gradients Intro`,
    description: `Optimize parameterized policies directly with gradient ascent on expected return.`,
    level: `advanced`,
    module: `Reinforcement Learning`,
    moduleId: `module-25`,
    track: `ml`,
    estimatedMinutes: 60,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `reinforce`,
      `actor-critic`,
      `continuous`,
      `pg-vs-value`,
      `rl-policy-deep-theory`,
      `rl-policy-patterns`,
      `rl-policy-pitfalls`,
      `rl-policy-real-world`
    ],
    exerciseIds: [
      `ex-pg-1`,
      `ex-pg-2`
    ]
  },
  {
    id: `rl-applications`,
    title: `RL Applications`,
    description: `Game AI, robotics overview, and deployment considerations.`,
    level: `advanced`,
    module: `Reinforcement Learning`,
    moduleId: `module-25`,
    track: `ml`,
    estimatedMinutes: 55,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `games`,
      `robotics`,
      `recsys-rl`,
      `deploy`,
      `rl-applications-deep-theory`,
      `rl-applications-patterns`,
      `rl-applications-pitfalls`,
      `rl-applications-real-world`
    ],
    exerciseIds: [
      `ex-rlapp-1`,
      `ex-rlapp-2`
    ]
  },
  {
    id: `gen-gan`,
    title: `Generative Adversarial Networks`,
    description: `Train generator and discriminator in adversarial equilibrium.`,
    level: `advanced`,
    module: `Generative Deep Learning`,
    moduleId: `module-26`,
    track: `dl`,
    estimatedMinutes: 60,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `gan-arch`,
      `dcgan`,
      `training-tricks`,
      `conditional`,
      `gen-gan-deep-theory`,
      `gen-gan-patterns`,
      `gen-gan-pitfalls`,
      `gen-gan-real-world`
    ],
    exerciseIds: [
      `ex-gan-1`,
      `ex-gan-2`
    ]
  },
  {
    id: `gen-vae`,
    title: `Variational Autoencoders`,
    description: `Learn latent probabilistic representations with reconstruction and KL losses.`,
    level: `advanced`,
    module: `Generative Deep Learning`,
    moduleId: `module-26`,
    track: `dl`,
    estimatedMinutes: 55,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `vae`,
      `latent`,
      `vae-variants`,
      `sampling-vae`,
      `gen-vae-deep-theory`,
      `gen-vae-patterns`,
      `gen-vae-pitfalls`,
      `gen-vae-real-world`
    ],
    exerciseIds: [
      `ex-vae-1`,
      `ex-vae-2`
    ]
  },
  {
    id: `gen-diffusion`,
    title: `Diffusion Models (DDPM)`,
    description: `Denoising diffusion probabilistic models for high-quality generation.`,
    level: `advanced`,
    module: `Generative Deep Learning`,
    moduleId: `module-26`,
    track: `dl`,
    estimatedMinutes: 60,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `forward`,
      `reverse`,
      `guidance`,
      `diffusion-apps`,
      `gen-diffusion-deep-theory`,
      `gen-diffusion-patterns`,
      `gen-diffusion-pitfalls`,
      `gen-diffusion-real-world`
    ],
    exerciseIds: [
      `ex-diff-1`,
      `ex-diff-2`
    ]
  },
  {
    id: `gen-style`,
    title: `Style Transfer & CycleGAN`,
    description: `Transfer artistic style and unpaired image domain translation.`,
    level: `advanced`,
    module: `Generative Deep Learning`,
    moduleId: `module-26`,
    track: `dl`,
    estimatedMinutes: 55,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `nst`,
      `cyclegan`,
      `stylegan`,
      `applications`,
      `gen-style-deep-theory`,
      `gen-style-patterns`,
      `gen-style-pitfalls`,
      `gen-style-real-world`
    ],
    exerciseIds: [
      `ex-style-1`,
      `ex-style-2`
    ]
  },
  {
    id: `gen-eval`,
    title: `Evaluating Generative Models`,
    description: `FID, Inception Score, and human evaluation for generative quality.`,
    level: `advanced`,
    module: `Generative Deep Learning`,
    moduleId: `module-26`,
    track: `dl`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `fid`,
      `is`,
      `human`,
      `other-metrics`,
      `gen-eval-deep-theory`,
      `gen-eval-patterns`,
      `gen-eval-pitfalls`,
      `gen-eval-real-world`
    ],
    exerciseIds: [
      `ex-geval-1`,
      `ex-geval-2`
    ]
  },
  {
    id: `ai-vectors`,
    title: `Embeddings & Vector Databases`,
    description: `Semantic search with embeddings and ANN indexes (FAISS, Chroma).`,
    level: `advanced`,
    module: `Advanced AI Systems`,
    moduleId: `module-27`,
    track: `ai`,
    estimatedMinutes: 55,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `embeddings`,
      `faiss`,
      `hybrid`,
      `ops`,
      `ai-vectors-deep-theory`,
      `ai-vectors-patterns`,
      `ai-vectors-pitfalls`,
      `ai-vectors-real-world`
    ],
    exerciseIds: [
      `ex-vec-1`,
      `ex-vec-2`
    ]
  },
  {
    id: `ai-multimodal`,
    title: `Multimodal Models (CLIP & VLM)`,
    description: `Vision-language models connecting images and text in shared embedding space.`,
    level: `advanced`,
    module: `Advanced AI Systems`,
    moduleId: `module-27`,
    track: `ai`,
    estimatedMinutes: 55,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `clip`,
      `vlm`,
      `tasks`,
      `limits`,
      `ai-multimodal-deep-theory`,
      `ai-multimodal-patterns`,
      `ai-multimodal-pitfalls`,
      `ai-multimodal-real-world`
    ],
    exerciseIds: [
      `ex-mm-1`,
      `ex-mm-2`
    ]
  },
  {
    id: `ai-speech`,
    title: `Speech AI (Whisper & TTS)`,
    description: `Automatic speech recognition and text-to-speech pipelines.`,
    level: `advanced`,
    module: `Advanced AI Systems`,
    moduleId: `module-27`,
    track: `ai`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `whisper`,
      `tts`,
      `audio-llm`,
      `deploy-speech`,
      `ai-speech-deep-theory`,
      `ai-speech-patterns`,
      `ai-speech-pitfalls`,
      `ai-speech-real-world`
    ],
    exerciseIds: [
      `ex-speech-1`,
      `ex-speech-2`
    ]
  },
  {
    id: `ai-eval`,
    title: `AI Benchmarks & Red Teaming`,
    description: `MMLU, HumanEval, and systematic adversarial testing.`,
    level: `advanced`,
    module: `Advanced AI Systems`,
    moduleId: `module-27`,
    track: `ai`,
    estimatedMinutes: 55,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `mmlu`,
      `humaneval`,
      `red-team`,
      `eval-practice`,
      `ai-eval-deep-theory`,
      `ai-eval-patterns`,
      `ai-eval-pitfalls`,
      `ai-eval-real-world`
    ],
    exerciseIds: [
      `ex-aieval-1`,
      `ex-aieval-2`
    ]
  },
  {
    id: `ai-safety`,
    title: `Alignment, Jailbreaks & Guardrails`,
    description: `Mitigate harmful outputs and build responsible AI systems.`,
    level: `advanced`,
    module: `Advanced AI Systems`,
    moduleId: `module-27`,
    track: `ai`,
    estimatedMinutes: 55,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `alignment`,
      `jailbreaks`,
      `guardrails`,
      `governance`,
      `ai-safety-deep-theory`,
      `ai-safety-patterns`,
      `ai-safety-pitfalls`,
      `ai-safety-real-world`
    ],
    exerciseIds: [
      `ex-safe-1`,
      `ex-safe-2`
    ]
  },
  {
    id: `cap-portfolio`,
    title: `ML Portfolio Projects`,
    description: `Build showcase projects demonstrating end-to-end ML skills.`,
    level: `intermediate`,
    module: `Capstone & Career`,
    moduleId: `module-28`,
    track: `ai`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `structure`,
      `ideas`,
      `presentation`,
      `open-source`,
      `cap-portfolio-deep-theory`,
      `cap-portfolio-patterns`,
      `cap-portfolio-pitfalls`,
      `cap-portfolio-real-world`
    ],
    exerciseIds: [
      `ex-port-1`,
      `ex-port-2`
    ]
  },
  {
    id: `cap-kaggle`,
    title: `Kaggle Competition Strategy`,
    description: `Structured approach to competitive ML and learning from kernels.`,
    level: `intermediate`,
    module: `Capstone & Career`,
    moduleId: `module-28`,
    track: `ai`,
    estimatedMinutes: 55,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `workflow`,
      `features`,
      `ensemble`,
      `mindset`,
      `cap-kaggle-deep-theory`,
      `cap-kaggle-patterns`,
      `cap-kaggle-pitfalls`,
      `cap-kaggle-real-world`
    ],
    exerciseIds: [
      `ex-kaggle-1`,
      `ex-kaggle-2`
    ]
  },
  {
    id: `cap-interview`,
    title: `ML Interview Preparation`,
    description: `ML fundamentals, coding, system design, and behavioral preparation.`,
    level: `intermediate`,
    module: `Capstone & Career`,
    moduleId: `module-28`,
    track: `ai`,
    estimatedMinutes: 60,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `ml-fundamentals`,
      `coding`,
      `system-design`,
      `behavioral`,
      `cap-interview-deep-theory`,
      `cap-interview-patterns`,
      `cap-interview-pitfalls`,
      `cap-interview-real-world`
    ],
    exerciseIds: [
      `ex-int-1`,
      `ex-int-2`
    ]
  },
  {
    id: `cap-research`,
    title: `Reading Papers & Reproduction`,
    description: `Efficiently understand research papers and reproduce key results.`,
    level: `advanced`,
    module: `Capstone & Career`,
    moduleId: `module-28`,
    track: `ai`,
    estimatedMinutes: 50,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `reading`,
      `venues`,
      `reproduce`,
      `contribute`,
      `cap-research-deep-theory`,
      `cap-research-patterns`,
      `cap-research-pitfalls`,
      `cap-research-real-world`
    ],
    exerciseIds: [
      `ex-paper-1`,
      `ex-paper-2`
    ]
  },
  {
    id: `cap-career`,
    title: `Career Paths in ML/AI`,
    description: `Roles, skills, and growth paths for ML engineers, data scientists, and researchers.`,
    level: `intermediate`,
    module: `Capstone & Career`,
    moduleId: `module-28`,
    track: `ai`,
    estimatedMinutes: 45,
    sectionCount: 8,
    exerciseCount: 2,
    sectionIds: [
      `roles`,
      `skills`,
      `job-search`,
      `growth`,
      `cap-career-deep-theory`,
      `cap-career-patterns`,
      `cap-career-pitfalls`,
      `cap-career-real-world`
    ],
    exerciseIds: [
      `ex-career-1`,
      `ex-career-2`
    ]
  }
];

export const topicById: Record<string, TopicSummary> = {
  'py-vars-types': {
      id: `py-vars-types`,
      title: `Variables, Types & Literals`,
      description: `Learn how Python stores data, dynamic typing, and core built-in types.`,
      level: `beginner`,
      module: `Python Fundamentals`,
      moduleId: `module-01`,
      track: `python`,
      estimatedMinutes: 35,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `vars-intro`,
        `literals`,
        `mutability`,
        `type-checking`,
        `py-vars-types-deep-theory`,
        `py-vars-types-patterns`,
        `py-vars-types-pitfalls`,
        `py-vars-types-real-world`
      ],
      exerciseIds: [
        `ex-vars-1`,
        `ex-vars-2`
      ]
    },
  'py-operators': {
      id: `py-operators`,
      title: `Operators & Expressions`,
      description: `Arithmetic, comparison, logical, and assignment operators in Python.`,
      level: `beginner`,
      module: `Python Fundamentals`,
      moduleId: `module-01`,
      track: `python`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `arith`,
        `compare`,
        `assign`,
        `bitwise`,
        `py-operators-deep-theory`,
        `py-operators-patterns`,
        `py-operators-pitfalls`,
        `py-operators-real-world`
      ],
      exerciseIds: [
        `ex-op-1`,
        `ex-op-2`
      ]
    },
  'py-strings': {
      id: `py-strings`,
      title: `Strings & Text Processing`,
      description: `String creation, slicing, methods, and formatting fundamentals.`,
      level: `beginner`,
      module: `Python Fundamentals`,
      moduleId: `module-01`,
      track: `python`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `str-basics`,
        `str-methods`,
        `str-format`,
        `str-unicode`,
        `py-strings-deep-theory`,
        `py-strings-patterns`,
        `py-strings-pitfalls`,
        `py-strings-real-world`
      ],
      exerciseIds: [
        `ex-str-1`,
        `ex-str-2`
      ]
    },
  'py-io': {
      id: `py-io`,
      title: `Input/Output & REPL`,
      description: `Reading input, printing output, and using the Python REPL effectively.`,
      level: `beginner`,
      module: `Python Fundamentals`,
      moduleId: `module-01`,
      track: `python`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `print`,
        `input`,
        `repl`,
        `files-intro`,
        `py-io-deep-theory`,
        `py-io-patterns`,
        `py-io-pitfalls`,
        `py-io-real-world`
      ],
      exerciseIds: [
        `ex-io-1`,
        `ex-io-2`
      ]
    },
  'py-env': {
      id: `py-env`,
      title: `Python Environment & Tooling`,
      description: `Virtual environments, pip, and project setup best practices.`,
      level: `beginner`,
      module: `Python Fundamentals`,
      moduleId: `module-01`,
      track: `python`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `venv`,
        `pip`,
        `ide`,
        `project-structure`,
        `py-env-deep-theory`,
        `py-env-patterns`,
        `py-env-pitfalls`,
        `py-env-real-world`
      ],
      exerciseIds: [
        `ex-env-1`,
        `ex-env-2`
      ]
    },
  'py-conditionals': {
      id: `py-conditionals`,
      title: `Conditionals (if/elif/else)`,
      description: `Branch execution based on boolean conditions.`,
      level: `beginner`,
      module: `Control Flow & Functions`,
      moduleId: `module-02`,
      track: `python`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `if-basic`,
        `elif`,
        `ternary`,
        `guard`,
        `py-conditionals-deep-theory`,
        `py-conditionals-patterns`,
        `py-conditionals-pitfalls`,
        `py-conditionals-real-world`
      ],
      exerciseIds: [
        `ex-if-1`,
        `ex-if-2`
      ]
    },
  'py-loops': {
      id: `py-loops`,
      title: `Loops (for/while)`,
      description: `Iterate over sequences and repeat actions with for and while loops.`,
      level: `beginner`,
      module: `Control Flow & Functions`,
      moduleId: `module-02`,
      track: `python`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `for-loop`,
        `while-loop`,
        `loop-else`,
        `nested`,
        `py-loops-deep-theory`,
        `py-loops-patterns`,
        `py-loops-pitfalls`,
        `py-loops-real-world`
      ],
      exerciseIds: [
        `ex-loop-1`,
        `ex-loop-2`
      ]
    },
  'py-functions': {
      id: `py-functions`,
      title: `Functions & Parameters`,
      description: `Define reusable blocks with def, parameters, return values, and docstrings.`,
      level: `beginner`,
      module: `Control Flow & Functions`,
      moduleId: `module-02`,
      track: `python`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `def-basic`,
        `params`,
        `unpack`,
        `pure`,
        `py-functions-deep-theory`,
        `py-functions-patterns`,
        `py-functions-pitfalls`,
        `py-functions-real-world`
      ],
      exerciseIds: [
        `ex-fn-1`,
        `ex-fn-2`
      ]
    },
  'py-scope': {
      id: `py-scope`,
      title: `Scope, Closures & Lambda`,
      description: `LEGB scope rule, closures, and anonymous functions.`,
      level: `beginner`,
      module: `Control Flow & Functions`,
      moduleId: `module-02`,
      track: `python`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `legb`,
        `closures`,
        `lambda`,
        `higher`,
        `py-scope-deep-theory`,
        `py-scope-patterns`,
        `py-scope-pitfalls`,
        `py-scope-real-world`
      ],
      exerciseIds: [
        `ex-scope-1`,
        `ex-scope-2`
      ]
    },
  'py-comprehensions': {
      id: `py-comprehensions`,
      title: `Comprehensions & Iterators`,
      description: `List/dict/set comprehensions and the iterator protocol.`,
      level: `beginner`,
      module: `Control Flow & Functions`,
      moduleId: `module-02`,
      track: `python`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `list-comp`,
        `dict-set-comp`,
        `generators`,
        `iterators`,
        `py-comprehensions-deep-theory`,
        `py-comprehensions-patterns`,
        `py-comprehensions-pitfalls`,
        `py-comprehensions-real-world`
      ],
      exerciseIds: [
        `ex-comp-1`,
        `ex-comp-2`
      ]
    },
  'py-lists': {
      id: `py-lists`,
      title: `Lists & Tuples`,
      description: `Ordered sequences — mutable lists and immutable tuples.`,
      level: `beginner`,
      module: `Data Structures`,
      moduleId: `module-03`,
      track: `python`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `list-ops`,
        `tuples`,
        `list-perf`,
        `nested`,
        `py-lists-deep-theory`,
        `py-lists-patterns`,
        `py-lists-pitfalls`,
        `py-lists-real-world`
      ],
      exerciseIds: [
        `ex-list-1`,
        `ex-list-2`
      ]
    },
  'py-dicts': {
      id: `py-dicts`,
      title: `Dictionaries & Sets`,
      description: `Hash maps and unordered unique collections.`,
      level: `beginner`,
      module: `Data Structures`,
      moduleId: `module-03`,
      track: `python`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `dict-basics`,
        `sets`,
        `defaultdict`,
        `dict-merge`,
        `py-dicts-deep-theory`,
        `py-dicts-patterns`,
        `py-dicts-pitfalls`,
        `py-dicts-real-world`
      ],
      exerciseIds: [
        `ex-dict-1`,
        `ex-dict-2`
      ]
    },
  'py-deque': {
      id: `py-deque`,
      title: `Stacks, Queues & Deque`,
      description: `LIFO stacks and FIFO queues with collections.deque.`,
      level: `beginner`,
      module: `Data Structures`,
      moduleId: `module-03`,
      track: `python`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `stack`,
        `queue`,
        `deque-features`,
        `applications`,
        `py-deque-deep-theory`,
        `py-deque-patterns`,
        `py-deque-pitfalls`,
        `py-deque-real-world`
      ],
      exerciseIds: [
        `ex-deque-1`,
        `ex-deque-2`
      ]
    },
  'py-sort-search': {
      id: `py-sort-search`,
      title: `Sorting & Searching`,
      description: `Built-in sorting, binary search, and algorithmic complexity.`,
      level: `beginner`,
      module: `Data Structures`,
      moduleId: `module-03`,
      track: `python`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `sorting`,
        `custom-sort`,
        `search`,
        `complexity`,
        `py-sort-search-deep-theory`,
        `py-sort-search-patterns`,
        `py-sort-search-pitfalls`,
        `py-sort-search-real-world`
      ],
      exerciseIds: [
        `ex-sort-1`,
        `ex-sort-2`
      ]
    },
  'py-collections': {
      id: `py-collections`,
      title: `Collections Module`,
      description: `namedtuple, OrderedDict, ChainMap, and other specialized containers.`,
      level: `beginner`,
      module: `Data Structures`,
      moduleId: `module-03`,
      track: `python`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `namedtuple`,
        `chainmap`,
        `ordered`,
        `heapq`,
        `py-collections-deep-theory`,
        `py-collections-patterns`,
        `py-collections-pitfalls`,
        `py-collections-real-world`
      ],
      exerciseIds: [
        `ex-coll-1`,
        `ex-coll-2`
      ]
    },
  'py-classes': {
      id: `py-classes`,
      title: `Classes & Objects`,
      description: `Define classes with attributes and methods using the class keyword.`,
      level: `intermediate`,
      module: `OOP & Design Patterns`,
      moduleId: `module-04`,
      track: `python`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `class-basics`,
        `class-vs-instance`,
        `methods`,
        `dunder`,
        `py-classes-deep-theory`,
        `py-classes-patterns`,
        `py-classes-pitfalls`,
        `py-classes-real-world`
      ],
      exerciseIds: [
        `ex-class-1`,
        `ex-class-2`
      ]
    },
  'py-inheritance': {
      id: `py-inheritance`,
      title: `Inheritance & Polymorphism`,
      description: `Extend classes, override methods, and use polymorphic behavior.`,
      level: `intermediate`,
      module: `OOP & Design Patterns`,
      moduleId: `module-04`,
      track: `python`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `inheritance`,
        `mro`,
        `abstract`,
        `composition`,
        `py-inheritance-deep-theory`,
        `py-inheritance-patterns`,
        `py-inheritance-pitfalls`,
        `py-inheritance-real-world`
      ],
      exerciseIds: [
        `ex-inherit-1`,
        `ex-inherit-2`
      ]
    },
  'py-encapsulation': {
      id: `py-encapsulation`,
      title: `Encapsulation & Properties`,
      description: `Hide internal state and control access with properties and naming conventions.`,
      level: `intermediate`,
      module: `OOP & Design Patterns`,
      moduleId: `module-04`,
      track: `python`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `naming`,
        `property`,
        `slots`,
        `dataclass-preview`,
        `py-encapsulation-deep-theory`,
        `py-encapsulation-patterns`,
        `py-encapsulation-pitfalls`,
        `py-encapsulation-real-world`
      ],
      exerciseIds: [
        `ex-encap-1`,
        `ex-encap-2`
      ]
    },
  'py-patterns': {
      id: `py-patterns`,
      title: `Design Patterns in Python`,
      description: `Singleton, Factory, Observer, Strategy, and other common patterns.`,
      level: `intermediate`,
      module: `OOP & Design Patterns`,
      moduleId: `module-04`,
      track: `python`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `factory`,
        `strategy`,
        `observer`,
        `singleton`,
        `py-patterns-deep-theory`,
        `py-patterns-patterns`,
        `py-patterns-pitfalls`,
        `py-patterns-real-world`
      ],
      exerciseIds: [
        `ex-pattern-1`,
        `ex-pattern-2`
      ]
    },
  'py-protocols': {
      id: `py-protocols`,
      title: `Abstract Base Classes & Protocols`,
      description: `typing.Protocol for structural subtyping and modern Python interfaces.`,
      level: `intermediate`,
      module: `OOP & Design Patterns`,
      moduleId: `module-04`,
      track: `python`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `protocol`,
        `abc-vs-protocol`,
        `generic`,
        `solid`,
        `py-protocols-deep-theory`,
        `py-protocols-patterns`,
        `py-protocols-pitfalls`,
        `py-protocols-real-world`
      ],
      exerciseIds: [
        `ex-proto-1`,
        `ex-proto-2`
      ]
    },
  'py-decorators': {
      id: `py-decorators`,
      title: `Decorators`,
      description: `Functions that modify or wrap other functions. Essential for logging, timing, auth, and frameworks.`,
      level: `advanced`,
      module: `Advanced Python`,
      moduleId: `module-05`,
      track: `python`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `decorator-basics`,
        `functools-wraps`,
        `param-decorator`,
        `class-decorator`,
        `py-decorators-deep-theory`,
        `py-decorators-patterns`,
        `py-decorators-pitfalls`,
        `py-decorators-real-world`
      ],
      exerciseIds: [
        `ex-dec-1`,
        `ex-dec-2`
      ]
    },
  'py-generators': {
      id: `py-generators`,
      title: `Generators & yield`,
      description: `Lazy iteration with generator functions and yield expressions.`,
      level: `advanced`,
      module: `Advanced Python`,
      moduleId: `module-05`,
      track: `python`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `yield`,
        `yield-from`,
        `gen-expr`,
        `infinite`,
        `py-generators-deep-theory`,
        `py-generators-patterns`,
        `py-generators-pitfalls`,
        `py-generators-real-world`
      ],
      exerciseIds: [
        `ex-gen-1`,
        `ex-gen-2`
      ]
    },
  'py-context': {
      id: `py-context`,
      title: `Context Managers`,
      description: `Resource management with with statement and contextlib.`,
      level: `advanced`,
      module: `Advanced Python`,
      moduleId: `module-05`,
      track: `python`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `with`,
        `contextlib`,
        `file-context`,
        `async-context`,
        `py-context-deep-theory`,
        `py-context-patterns`,
        `py-context-pitfalls`,
        `py-context-real-world`
      ],
      exerciseIds: [
        `ex-ctx-1`,
        `ex-ctx-2`
      ]
    },
  'py-typehints': {
      id: `py-typehints`,
      title: `Type Hints & dataclasses`,
      description: `Static typing, dataclasses, and modern Python data modeling.`,
      level: `advanced`,
      module: `Advanced Python`,
      moduleId: `module-05`,
      track: `python`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `hints`,
        `dataclass`,
        `pydantic`,
        `typing-advanced`,
        `py-typehints-deep-theory`,
        `py-typehints-patterns`,
        `py-typehints-pitfalls`,
        `py-typehints-real-world`
      ],
      exerciseIds: [
        `ex-type-1`,
        `ex-type-2`
      ]
    },
  'py-modules': {
      id: `py-modules`,
      title: `Modules, Packages & pip`,
      description: `Organizing code into modules, packages, and distributing with pip.`,
      level: `advanced`,
      module: `Advanced Python`,
      moduleId: `module-05`,
      track: `python`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `imports`,
        `packages`,
        `publishing`,
        `stdlib`,
        `py-modules-deep-theory`,
        `py-modules-patterns`,
        `py-modules-pitfalls`,
        `py-modules-real-world`
      ],
      exerciseIds: [
        `ex-mod-1`,
        `ex-mod-2`
      ]
    },
  'math-sets': {
      id: `math-sets`,
      title: `Set Theory & Notation`,
      description: `Master set operations, cardinality, and notation used throughout probability and linear algebra.`,
      level: `beginner`,
      module: `Algebra & Functions`,
      moduleId: `module-math-01`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `sets-intro`,
        `sets-ops`,
        `sets-functions`,
        `sets-counting`,
        `math-sets-deep-theory`,
        `math-sets-patterns`,
        `math-sets-pitfalls`,
        `math-sets-real-world`
      ],
      exerciseIds: [
        `ex-sets-1`,
        `ex-sets-2`
      ]
    },
  'math-functions': {
      id: `math-functions`,
      title: `Functions & Graphs`,
      description: `Understand domains, ranges, composition, and inverse functions for modeling relationships.`,
      level: `beginner`,
      module: `Algebra & Functions`,
      moduleId: `module-math-01`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `fn-basics`,
        `fn-types`,
        `fn-compose`,
        `fn-transforms`,
        `math-functions-deep-theory`,
        `math-functions-patterns`,
        `math-functions-pitfalls`,
        `math-functions-real-world`
      ],
      exerciseIds: [
        `ex-fn-1`,
        `ex-fn-2`
      ]
    },
  'math-logarithms': {
      id: `math-logarithms`,
      title: `Logarithms & Exponentials`,
      description: `Master log rules, the natural base e, and exponential growth models used in loss functions and probabilities.`,
      level: `beginner`,
      module: `Algebra & Functions`,
      moduleId: `module-math-01`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `log-def`,
        `log-rules`,
        `exp-models`,
        `log-ml`,
        `math-logarithms-deep-theory`,
        `math-logarithms-patterns`,
        `math-logarithms-pitfalls`,
        `math-logarithms-real-world`
      ],
      exerciseIds: [
        `ex-log-1`,
        `ex-log-2`
      ]
    },
  'math-sequences': {
      id: `math-sequences`,
      title: `Sequences & Series`,
      description: `Arithmetic and geometric sequences, convergence, and summation notation for iterative algorithms.`,
      level: `beginner`,
      module: `Algebra & Functions`,
      moduleId: `module-math-01`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `seq-arith`,
        `seq-geom`,
        `seq-series`,
        `seq-ml`,
        `math-sequences-deep-theory`,
        `math-sequences-patterns`,
        `math-sequences-pitfalls`,
        `math-sequences-real-world`
      ],
      exerciseIds: [
        `ex-seq-1`,
        `ex-seq-2`
      ]
    },
  'math-complex': {
      id: `math-complex`,
      title: `Complex Numbers`,
      description: `Complex plane arithmetic, polar form, and Euler formula connecting trig to exponentials.`,
      level: `intermediate`,
      module: `Algebra & Functions`,
      moduleId: `module-math-01`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `cx-basics`,
        `cx-polar`,
        `cx-ops`,
        `cx-fft`,
        `math-complex-deep-theory`,
        `math-complex-patterns`,
        `math-complex-pitfalls`,
        `math-complex-real-world`
      ],
      exerciseIds: [
        `ex-cx-1`,
        `ex-cx-2`
      ]
    },
  'math-vectors': {
      id: `math-vectors`,
      title: `Vectors & Vector Spaces`,
      description: `Learn vector notation, norms, unit vectors, and linear combinations in ℝⁿ.`,
      level: `beginner`,
      module: `Linear Algebra I`,
      moduleId: `module-math-02`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `vec-basics`,
        `vec-norm`,
        `vec-span`,
        `vec-ml`,
        `math-vectors-deep-theory`,
        `math-vectors-patterns`,
        `math-vectors-pitfalls`,
        `math-vectors-real-world`
      ],
      exerciseIds: [
        `ex-vec-1`,
        `ex-vec-2`
      ]
    },
  'math-dot-cross': {
      id: `math-dot-cross`,
      title: `Dot Product & Cross Product`,
      description: `Inner products measure similarity; cross products find orthogonal vectors in 3D.`,
      level: `beginner`,
      module: `Linear Algebra I`,
      moduleId: `module-math-02`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `dot-def`,
        `dot-geom`,
        `cross-3d`,
        `dot-attn`,
        `math-dot-cross-deep-theory`,
        `math-dot-cross-patterns`,
        `math-dot-cross-pitfalls`,
        `math-dot-cross-real-world`
      ],
      exerciseIds: [
        `ex-dot-1`,
        `ex-dot-2`
      ]
    },
  'math-matrices': {
      id: `math-matrices`,
      title: `Matrices & Matrix Notation`,
      description: `Understand matrix dimensions, special matrices, and matrix-vector multiplication.`,
      level: `intermediate`,
      module: `Linear Algebra I`,
      moduleId: `module-math-02`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `mat-basics`,
        `mat-mv`,
        `mat-special`,
        `mat-data`,
        `math-matrices-deep-theory`,
        `math-matrices-patterns`,
        `math-matrices-pitfalls`,
        `math-matrices-real-world`
      ],
      exerciseIds: [
        `ex-mat-1`,
        `ex-mat-2`
      ]
    },
  'math-matrix-ops': {
      id: `math-matrix-ops`,
      title: `Matrix Operations`,
      description: `Matrix multiplication, transpose rules, and properties of matrix arithmetic.`,
      level: `intermediate`,
      module: `Linear Algebra I`,
      moduleId: `module-math-02`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `mm-def`,
        `mm-prop`,
        `mm-inv-det`,
        `mm-nn`,
        `math-matrix-ops-deep-theory`,
        `math-matrix-ops-patterns`,
        `math-matrix-ops-pitfalls`,
        `math-matrix-ops-real-world`
      ],
      exerciseIds: [
        `ex-mm-1`,
        `ex-mm-2`
      ]
    },
  'math-linear-systems': {
      id: `math-linear-systems`,
      title: `Linear Systems & Gaussian Elimination`,
      description: `Solve Ax=b via elimination, rank, and solution existence/uniqueness.`,
      level: `intermediate`,
      module: `Linear Algebra I`,
      moduleId: `module-math-02`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `ls-form`,
        `ls-elim`,
        `ls-lsq`,
        `ls-rank`,
        `math-linear-systems-deep-theory`,
        `math-linear-systems-patterns`,
        `math-linear-systems-pitfalls`,
        `math-linear-systems-real-world`
      ],
      exerciseIds: [
        `ex-ls-1`,
        `ex-ls-2`
      ]
    },
  'math-determinants': {
      id: `math-determinants`,
      title: `Determinants`,
      description: `Compute and interpret determinants as volume scaling and invertibility tests.`,
      level: `intermediate`,
      module: `Linear Algebra II`,
      moduleId: `module-math-03`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `det-def`,
        `det-geom`,
        `det-prop`,
        `det-ml`,
        `math-determinants-deep-theory`,
        `math-determinants-patterns`,
        `math-determinants-pitfalls`,
        `math-determinants-real-world`
      ],
      exerciseIds: [
        `ex-det-1`,
        `ex-det-2`
      ]
    },
  'math-inverse': {
      id: `math-inverse`,
      title: `Matrix Inverse`,
      description: `Compute and apply matrix inverses for solving systems and understanding transformations.`,
      level: `intermediate`,
      module: `Linear Algebra II`,
      moduleId: `module-math-03`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `inv-def`,
        `inv-2x2`,
        `inv-pinv`,
        `inv-ml`,
        `math-inverse-deep-theory`,
        `math-inverse-patterns`,
        `math-inverse-pitfalls`,
        `math-inverse-real-world`
      ],
      exerciseIds: [
        `ex-inv-1`,
        `ex-inv-2`
      ]
    },
  'math-eigen': {
      id: `math-eigen`,
      title: `Eigenvalues & Eigenvectors`,
      description: `Diagonalization, spectral theory, and dynamics via eigen decomposition.`,
      level: `intermediate`,
      module: `Linear Algebra II`,
      moduleId: `module-math-03`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `eig-def`,
        `eig-diag`,
        `eig-pca`,
        `eig-markov`,
        `math-eigen-deep-theory`,
        `math-eigen-patterns`,
        `math-eigen-pitfalls`,
        `math-eigen-real-world`
      ],
      exerciseIds: [
        `ex-eig-1`,
        `ex-eig-2`
      ]
    },
  'math-svd': {
      id: `math-svd`,
      title: `Singular Value Decomposition`,
      description: `Factor matrices with SVD for compression, pseudoinverse, and low-rank approximation.`,
      level: `advanced`,
      module: `Linear Algebra II`,
      moduleId: `module-math-03`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `svd-def`,
        `svd-lowrank`,
        `svd-pinv`,
        `svd-ml`,
        `math-svd-deep-theory`,
        `math-svd-patterns`,
        `math-svd-pitfalls`,
        `math-svd-real-world`
      ],
      exerciseIds: [
        `ex-svd-1`,
        `ex-svd-2`
      ]
    },
  'math-pca-math': {
      id: `math-pca-math`,
      title: `PCA Mathematics`,
      description: `Principal component analysis as variance maximization and spectral decomposition.`,
      level: `advanced`,
      module: `Linear Algebra II`,
      moduleId: `module-math-03`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `pca-goal`,
        `pca-proj`,
        `pca-kernel`,
        `pca-practice`,
        `math-pca-math-deep-theory`,
        `math-pca-math-patterns`,
        `math-pca-math-pitfalls`,
        `math-pca-math-real-world`
      ],
      exerciseIds: [
        `ex-pca-1`,
        `ex-pca-2`
      ]
    },
  'math-limits': {
      id: `math-limits`,
      title: `Limits & Continuity`,
      description: `Understand limits, continuity, and foundational definitions for derivatives.`,
      level: `intermediate`,
      module: `Calculus I`,
      moduleId: `module-math-04`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `lim-def`,
        `lim-rules`,
        `lim-cont`,
        `lim-ml`,
        `math-limits-deep-theory`,
        `math-limits-patterns`,
        `math-limits-pitfalls`,
        `math-limits-real-world`
      ],
      exerciseIds: [
        `ex-lim-1`,
        `ex-lim-2`
      ]
    },
  'math-derivatives': {
      id: `math-derivatives`,
      title: `Derivatives`,
      description: `Definition, interpretation as rate of change and tangent slope.`,
      level: `intermediate`,
      module: `Calculus I`,
      moduleId: `module-math-04`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `der-def`,
        `der-interp`,
        `der-numeric`,
        `der-ml`,
        `math-derivatives-deep-theory`,
        `math-derivatives-patterns`,
        `math-derivatives-pitfalls`,
        `math-derivatives-real-world`
      ],
      exerciseIds: [
        `ex-der-1`,
        `ex-der-2`
      ]
    },
  'math-derivative-rules': {
      id: `math-derivative-rules`,
      title: `Differentiation Rules`,
      description: `Power, product, quotient, and chain rules for efficient differentiation.`,
      level: `intermediate`,
      module: `Calculus I`,
      moduleId: `module-math-04`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `dr-power`,
        `dr-product`,
        `dr-chain`,
        `dr-common`,
        `math-derivative-rules-deep-theory`,
        `math-derivative-rules-patterns`,
        `math-derivative-rules-pitfalls`,
        `math-derivative-rules-real-world`
      ],
      exerciseIds: [
        `ex-dr-1`,
        `ex-dr-2`
      ]
    },
  'math-taylor': {
      id: `math-taylor`,
      title: `Taylor Series & Approximation`,
      description: `Polynomial approximations and numerical uses of Taylor expansions.`,
      level: `intermediate`,
      module: `Calculus I`,
      moduleId: `module-math-04`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `tay-def`,
        `tay-approx`,
        `tay-multivar`,
        `tay-ml`,
        `math-taylor-deep-theory`,
        `math-taylor-patterns`,
        `math-taylor-pitfalls`,
        `math-taylor-real-world`
      ],
      exerciseIds: [
        `ex-tay-1`,
        `ex-tay-2`
      ]
    },
  'math-integrals': {
      id: `math-integrals`,
      title: `Integrals & Area`,
      description: `Definite and indefinite integrals, Fundamental Theorem of Calculus.`,
      level: `intermediate`,
      module: `Calculus I`,
      moduleId: `module-math-04`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `int-def`,
        `int-rules`,
        `int-prob`,
        `int-mc`,
        `math-integrals-deep-theory`,
        `math-integrals-patterns`,
        `math-integrals-pitfalls`,
        `math-integrals-real-world`
      ],
      exerciseIds: [
        `ex-int-1`,
        `ex-int-2`
      ]
    },
  'math-partial-deriv': {
      id: `math-partial-deriv`,
      title: `Partial Derivatives`,
      description: `Differentiate multivariate functions holding other variables fixed.`,
      level: `advanced`,
      module: `Calculus II & Multivariate`,
      moduleId: `module-math-05`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `pd-def`,
        `pd-geom`,
        `pd-higher`,
        `pd-ml`,
        `math-partial-deriv-deep-theory`,
        `math-partial-deriv-patterns`,
        `math-partial-deriv-pitfalls`,
        `math-partial-deriv-real-world`
      ],
      exerciseIds: [
        `ex-pd-1`,
        `ex-pd-2`
      ]
    },
  'math-gradient': {
      id: `math-gradient`,
      title: `Gradient & Directional Derivatives`,
      description: `Master the gradient vector and its role in optimization.`,
      level: `advanced`,
      module: `Calculus II & Multivariate`,
      moduleId: `module-math-05`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `grad-def`,
        `grad-descent`,
        `grad-proj`,
        `grad-numerical`,
        `math-gradient-deep-theory`,
        `math-gradient-patterns`,
        `math-gradient-pitfalls`,
        `math-gradient-real-world`
      ],
      exerciseIds: [
        `ex-grad-1`,
        `ex-grad-2`
      ]
    },
  'math-chain-rule': {
      id: `math-chain-rule`,
      title: `Multivariate Chain Rule`,
      description: `Jacobian matrices and backpropagation as chain rule application.`,
      level: `advanced`,
      module: `Calculus II & Multivariate`,
      moduleId: `module-math-05`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `cr-jacobian`,
        `cr-backprop`,
        `cr-vector`,
        `cr-vanish`,
        `math-chain-rule-deep-theory`,
        `math-chain-rule-patterns`,
        `math-chain-rule-pitfalls`,
        `math-chain-rule-real-world`
      ],
      exerciseIds: [
        `ex-cr-1`,
        `ex-cr-2`
      ]
    },
  'math-jacobian-hessian': {
      id: `math-jacobian-hessian`,
      title: `Jacobian & Hessian`,
      description: `Second-order information for curvature and advanced optimization.`,
      level: `advanced`,
      module: `Calculus II & Multivariate`,
      moduleId: `module-math-05`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `jh-hessian`,
        `jh-newton`,
        `jh-jacobian-apps`,
        `jh-gauss-newton`,
        `math-jacobian-hessian-deep-theory`,
        `math-jacobian-hessian-patterns`,
        `math-jacobian-hessian-pitfalls`,
        `math-jacobian-hessian-real-world`
      ],
      exerciseIds: [
        `ex-jh-1`,
        `ex-jh-2`
      ]
    },
  'math-multivariate-opt': {
      id: `math-multivariate-opt`,
      title: `Multivariate Optimization`,
      description: `Critical points, convexity, and constrained optimization preview.`,
      level: `advanced`,
      module: `Calculus II & Multivariate`,
      moduleId: `module-math-05`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `mvo-critical`,
        `mvo-convex`,
        `mvo-saddle`,
        `mvo-global`,
        `math-multivariate-opt-deep-theory`,
        `math-multivariate-opt-patterns`,
        `math-multivariate-opt-pitfalls`,
        `math-multivariate-opt-real-world`
      ],
      exerciseIds: [
        `ex-mvo-1`,
        `ex-mvo-2`
      ]
    },
  'math-prob-basics': {
      id: `math-prob-basics`,
      title: `Probability Foundations`,
      description: `Sample spaces, axioms, and basic counting for probability.`,
      level: `intermediate`,
      module: `Probability`,
      moduleId: `module-math-06`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `pb-axioms`,
        `pb-count`,
        `pb-indep`,
        `pb-ml`,
        `math-prob-basics-deep-theory`,
        `math-prob-basics-patterns`,
        `math-prob-basics-pitfalls`,
        `math-prob-basics-real-world`
      ],
      exerciseIds: [
        `ex-pb-1`,
        `ex-pb-2`
      ]
    },
  'math-conditional-bayes': {
      id: `math-conditional-bayes`,
      title: `Conditional Probability & Bayes`,
      description: `Conditioning, Bayes theorem, and Bayesian updating.`,
      level: `intermediate`,
      module: `Probability`,
      moduleId: `module-math-06`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `cb-cond`,
        `cb-bayes`,
        `cb-odds`,
        `cb-ml`,
        `math-conditional-bayes-deep-theory`,
        `math-conditional-bayes-patterns`,
        `math-conditional-bayes-pitfalls`,
        `math-conditional-bayes-real-world`
      ],
      exerciseIds: [
        `ex-cb-1`,
        `ex-cb-2`
      ]
    },
  'math-random-vars': {
      id: `math-random-vars`,
      title: `Random Variables`,
      description: `Discrete and continuous random variables, expectation, and variance.`,
      level: `intermediate`,
      module: `Probability`,
      moduleId: `module-math-06`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `rv-def`,
        `rv-expect`,
        `rv-transform`,
        `rv-ml`,
        `math-random-vars-deep-theory`,
        `math-random-vars-patterns`,
        `math-random-vars-pitfalls`,
        `math-random-vars-real-world`
      ],
      exerciseIds: [
        `ex-rv-1`,
        `ex-rv-2`
      ]
    },
  'math-distributions': {
      id: `math-distributions`,
      title: `Common Distributions`,
      description: `Bernoulli, binomial, Gaussian, Poisson, and exponential distributions.`,
      level: `intermediate`,
      module: `Probability`,
      moduleId: `module-math-06`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `dist-disc`,
        `dist-cont`,
        `dist-clt`,
        `dist-ml`,
        `math-distributions-deep-theory`,
        `math-distributions-patterns`,
        `math-distributions-pitfalls`,
        `math-distributions-real-world`
      ],
      exerciseIds: [
        `ex-dist-1`,
        `ex-dist-2`
      ]
    },
  'math-joint-marginal': {
      id: `math-joint-marginal`,
      title: `Joint, Marginal & Independence`,
      description: `Multivariate relationships, covariance matrices, and factorization.`,
      level: `intermediate`,
      module: `Probability`,
      moduleId: `module-math-06`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `jm-joint`,
        `jm-indep`,
        `jm-cov`,
        `jm-ml`,
        `math-joint-marginal-deep-theory`,
        `math-joint-marginal-patterns`,
        `math-joint-marginal-pitfalls`,
        `math-joint-marginal-real-world`
      ],
      exerciseIds: [
        `ex-jm-1`,
        `ex-jm-2`
      ]
    },
  'math-descriptive': {
      id: `math-descriptive`,
      title: `Descriptive Statistics`,
      description: `Mean, variance, percentiles, and exploratory data summaries.`,
      level: `intermediate`,
      module: `Statistics`,
      moduleId: `module-math-07`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `ds-central`,
        `ds-spread`,
        `ds-percentile`,
        `ds-eda`,
        `math-descriptive-deep-theory`,
        `math-descriptive-patterns`,
        `math-descriptive-pitfalls`,
        `math-descriptive-real-world`
      ],
      exerciseIds: [
        `ex-ds-1`,
        `ex-ds-2`
      ]
    },
  'math-sampling-clt': {
      id: `math-sampling-clt`,
      title: `Sampling & Central Limit Theorem`,
      description: `Sampling distributions, standard error, and CLT applications.`,
      level: `intermediate`,
      module: `Statistics`,
      moduleId: `module-math-07`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `sc-sample`,
        `sc-se`,
        `sc-clt`,
        `sc-ml`,
        `math-sampling-clt-deep-theory`,
        `math-sampling-clt-patterns`,
        `math-sampling-clt-pitfalls`,
        `math-sampling-clt-real-world`
      ],
      exerciseIds: [
        `ex-sc-1`,
        `ex-sc-2`
      ]
    },
  'math-hypothesis': {
      id: `math-hypothesis`,
      title: `Hypothesis Testing`,
      description: `Null/alternative, p-values, errors, and common tests.`,
      level: `intermediate`,
      module: `Statistics`,
      moduleId: `module-math-07`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `ht-framework`,
        `ht-tests`,
        `ht-ab`,
        `ht-ml`,
        `math-hypothesis-deep-theory`,
        `math-hypothesis-patterns`,
        `math-hypothesis-pitfalls`,
        `math-hypothesis-real-world`
      ],
      exerciseIds: [
        `ex-ht-1`,
        `ex-ht-2`
      ]
    },
  'math-confidence': {
      id: `math-confidence`,
      title: `Confidence Intervals`,
      description: `Construct and interpret confidence intervals for means and proportions.`,
      level: `intermediate`,
      module: `Statistics`,
      moduleId: `module-math-07`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `ci-mean`,
        `ci-prop`,
        `ci-diff`,
        `ci-ml`,
        `math-confidence-deep-theory`,
        `math-confidence-patterns`,
        `math-confidence-pitfalls`,
        `math-confidence-real-world`
      ],
      exerciseIds: [
        `ex-ci-1`,
        `ex-ci-2`
      ]
    },
  'math-regression-math': {
      id: `math-regression-math`,
      title: `Regression Mathematics`,
      description: `Linear regression normal equations, assumptions, and statistical inference.`,
      level: `intermediate`,
      module: `Statistics`,
      moduleId: `module-math-07`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `reg-ols`,
        `reg-assump`,
        `reg-infer`,
        `reg-ml`,
        `math-regression-math-deep-theory`,
        `math-regression-math-patterns`,
        `math-regression-math-pitfalls`,
        `math-regression-math-real-world`
      ],
      exerciseIds: [
        `ex-reg-1`,
        `ex-reg-2`
      ]
    },
  'math-convex': {
      id: `math-convex`,
      title: `Convex Optimization`,
      description: `Convex sets, convex functions, and why convex problems are tractable.`,
      level: `advanced`,
      module: `Optimization & Information Theory`,
      moduleId: `module-math-08`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `cvx-sets`,
        `cvx-func`,
        `cvx-problems`,
        `cvx-ml`,
        `math-convex-deep-theory`,
        `math-convex-patterns`,
        `math-convex-pitfalls`,
        `math-convex-real-world`
      ],
      exerciseIds: [
        `ex-cvx-1`,
        `ex-cvx-2`
      ]
    },
  'math-gradient-descent-math': {
      id: `math-gradient-descent-math`,
      title: `Gradient Descent Theory`,
      description: `Convergence rates, step size, momentum, and adaptive methods.`,
      level: `advanced`,
      module: `Optimization & Information Theory`,
      moduleId: `module-math-08`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `gd-conv`,
        `gd-momentum`,
        `gd-adaptive`,
        `gd-sgd`,
        `math-gradient-descent-math-deep-theory`,
        `math-gradient-descent-math-patterns`,
        `math-gradient-descent-math-pitfalls`,
        `math-gradient-descent-math-real-world`
      ],
      exerciseIds: [
        `ex-gd-1`,
        `ex-gd-2`
      ]
    },
  'math-lagrange': {
      id: `math-lagrange`,
      title: `Lagrange Multipliers`,
      description: `Equality constraints, KKT conditions, and constrained optimization.`,
      level: `advanced`,
      module: `Optimization & Information Theory`,
      moduleId: `module-math-08`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `lag-eq`,
        `lag-ineq`,
        `lag-dual`,
        `lag-ml`,
        `math-lagrange-deep-theory`,
        `math-lagrange-patterns`,
        `math-lagrange-pitfalls`,
        `math-lagrange-real-world`
      ],
      exerciseIds: [
        `ex-lag-1`,
        `ex-lag-2`
      ]
    },
  'math-entropy-math': {
      id: `math-entropy-math`,
      title: `Entropy & Information`,
      description: `Shannon entropy, cross-entropy, and mutual information.`,
      level: `advanced`,
      module: `Optimization & Information Theory`,
      moduleId: `module-math-08`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `ent-def`,
        `ent-ce`,
        `ent-mi`,
        `ent-ml`,
        `math-entropy-math-deep-theory`,
        `math-entropy-math-patterns`,
        `math-entropy-math-pitfalls`,
        `math-entropy-math-real-world`
      ],
      exerciseIds: [
        `ex-ent-1`,
        `ex-ent-2`
      ]
    },
  'math-kl-mle': {
      id: `math-kl-mle`,
      title: `KL Divergence & MLE`,
      description: `Maximum likelihood estimation and its connection to minimizing KL.`,
      level: `advanced`,
      module: `Optimization & Information Theory`,
      moduleId: `module-math-08`,
      track: `math`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `mle-def`,
        `kl-mle`,
        `mle-prop`,
        `mle-ml`,
        `math-kl-mle-deep-theory`,
        `math-kl-mle-patterns`,
        `math-kl-mle-pitfalls`,
        `math-kl-mle-real-world`
      ],
      exerciseIds: [
        `ex-mle-1`,
        `ex-mle-2`
      ]
    },
  'np-arrays': {
      id: `np-arrays`,
      title: `NumPy Arrays Fundamentals`,
      description: `Create and manipulate ndarrays — the foundation of scientific Python.`,
      level: `beginner`,
      module: `NumPy & Scientific Computing`,
      moduleId: `module-06`,
      track: `data`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `create`,
        `dtype`,
        `attrs`,
        `vs-list`,
        `np-arrays-deep-theory`,
        `np-arrays-patterns`,
        `np-arrays-pitfalls`,
        `np-arrays-real-world`
      ],
      exerciseIds: [
        `ex-np-1`,
        `ex-np-2`
      ]
    },
  'np-indexing': {
      id: `np-indexing`,
      title: `Array Indexing & Broadcasting`,
      description: `Slicing, boolean indexing, fancy indexing, and broadcasting rules.`,
      level: `beginner`,
      module: `NumPy & Scientific Computing`,
      moduleId: `module-06`,
      track: `data`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `slicing`,
        `boolean`,
        `broadcast`,
        `vectorize`,
        `np-indexing-deep-theory`,
        `np-indexing-patterns`,
        `np-indexing-pitfalls`,
        `np-indexing-real-world`
      ],
      exerciseIds: [
        `ex-np-idx-1`,
        `ex-np-idx-2`
      ]
    },
  'np-linalg': {
      id: `np-linalg`,
      title: `Linear Algebra with NumPy`,
      description: `Matrix operations, dot products, decomposition, and solving linear systems.`,
      level: `beginner`,
      module: `NumPy & Scientific Computing`,
      moduleId: `module-06`,
      track: `data`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `matmul`,
        `linalg`,
        `norm`,
        `applications`,
        `np-linalg-deep-theory`,
        `np-linalg-patterns`,
        `np-linalg-pitfalls`,
        `np-linalg-real-world`
      ],
      exerciseIds: [
        `ex-linalg-1`,
        `ex-linalg-2`
      ]
    },
  'np-random': {
      id: `np-random`,
      title: `Random & Statistics`,
      description: `Random number generation and statistical operations with NumPy.`,
      level: `beginner`,
      module: `NumPy & Scientific Computing`,
      moduleId: `module-06`,
      track: `data`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `rng`,
        `stats`,
        `shuffle`,
        `distributions`,
        `np-random-deep-theory`,
        `np-random-patterns`,
        `np-random-pitfalls`,
        `np-random-real-world`
      ],
      exerciseIds: [
        `ex-rand-1`,
        `ex-rand-2`
      ]
    },
  'np-perf': {
      id: `np-perf`,
      title: `Performance & Vectorization`,
      description: `Write fast NumPy code avoiding Python loops.`,
      level: `beginner`,
      module: `NumPy & Scientific Computing`,
      moduleId: `module-06`,
      track: `data`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `vectorize`,
        `memory`,
        `einsum`,
        `numba`,
        `np-perf-deep-theory`,
        `np-perf-patterns`,
        `np-perf-pitfalls`,
        `np-perf-real-world`
      ],
      exerciseIds: [
        `ex-perf-1`,
        `ex-perf-2`
      ]
    },
  'pd-dataframes': {
      id: `pd-dataframes`,
      title: `Series & DataFrames`,
      description: `Pandas one-dimensional Series and two-dimensional DataFrames.`,
      level: `beginner`,
      module: `Pandas & Data Wrangling`,
      moduleId: `module-07`,
      track: `data`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `series`,
        `dataframe`,
        `selection`,
        `dtypes`,
        `pd-dataframes-deep-theory`,
        `pd-dataframes-patterns`,
        `pd-dataframes-pitfalls`,
        `pd-dataframes-real-world`
      ],
      exerciseIds: [
        `ex-pd-1`,
        `ex-pd-2`
      ]
    },
  'pd-indexing': {
      id: `pd-indexing`,
      title: `Indexing, Filtering & Selection`,
      description: `Advanced indexing with query, isin, and boolean masks.`,
      level: `beginner`,
      module: `Pandas & Data Wrangling`,
      moduleId: `module-07`,
      track: `data`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `boolean`,
        `query`,
        `assign`,
        `sort`,
        `pd-indexing-deep-theory`,
        `pd-indexing-patterns`,
        `pd-indexing-pitfalls`,
        `pd-indexing-real-world`
      ],
      exerciseIds: [
        `ex-pd-idx-1`,
        `ex-pd-idx-2`
      ]
    },
  'pd-groupby': {
      id: `pd-groupby`,
      title: `GroupBy & Aggregations`,
      description: `Split-apply-combine pattern for grouped analysis.`,
      level: `beginner`,
      module: `Pandas & Data Wrangling`,
      moduleId: `module-07`,
      track: `data`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `groupby`,
        `agg`,
        `pivot`,
        `window`,
        `pd-groupby-deep-theory`,
        `pd-groupby-patterns`,
        `pd-groupby-pitfalls`,
        `pd-groupby-real-world`
      ],
      exerciseIds: [
        `ex-gb-1`,
        `ex-gb-2`
      ]
    },
  'pd-merge': {
      id: `pd-merge`,
      title: `Merging, Joining & Reshaping`,
      description: `Combine DataFrames with merge, concat, join. Reshape with melt and pivot.`,
      level: `beginner`,
      module: `Pandas & Data Wrangling`,
      moduleId: `module-07`,
      track: `data`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `merge`,
        `concat`,
        `reshape`,
        `join-index`,
        `pd-merge-deep-theory`,
        `pd-merge-patterns`,
        `pd-merge-pitfalls`,
        `pd-merge-real-world`
      ],
      exerciseIds: [
        `ex-merge-1`,
        `ex-merge-2`
      ]
    },
  'pd-missing': {
      id: `pd-missing`,
      title: `Missing Data & Time Series`,
      description: `Handle NaN values and work with datetime indices.`,
      level: `beginner`,
      module: `Pandas & Data Wrangling`,
      moduleId: `module-07`,
      track: `data`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `missing`,
        `datetime`,
        `tz`,
        `ts-features`,
        `pd-missing-deep-theory`,
        `pd-missing-patterns`,
        `pd-missing-pitfalls`,
        `pd-missing-real-world`
      ],
      exerciseIds: [
        `ex-miss-1`,
        `ex-miss-2`
      ]
    },
  'viz-matplotlib': {
      id: `viz-matplotlib`,
      title: `Matplotlib Basics`,
      description: `Create line, scatter, bar, and histogram plots with pyplot and OO API.`,
      level: `beginner`,
      module: `Data Visualization`,
      moduleId: `module-08`,
      track: `data`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `pyplot`,
        `oo-api`,
        `styles`,
        `anatomy`,
        `viz-matplotlib-deep-theory`,
        `viz-matplotlib-patterns`,
        `viz-matplotlib-pitfalls`,
        `viz-matplotlib-real-world`
      ],
      exerciseIds: [
        `ex-mpl-1`,
        `ex-mpl-2`
      ]
    },
  'viz-seaborn': {
      id: `viz-seaborn`,
      title: `Seaborn Statistical Plots`,
      description: `High-level statistical visualizations built on matplotlib.`,
      level: `beginner`,
      module: `Data Visualization`,
      moduleId: `module-08`,
      track: `data`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `distplot`,
        `relplot`,
        `catplot`,
        `heatmap`,
        `viz-seaborn-deep-theory`,
        `viz-seaborn-patterns`,
        `viz-seaborn-pitfalls`,
        `viz-seaborn-real-world`
      ],
      exerciseIds: [
        `ex-sns-1`,
        `ex-sns-2`
      ]
    },
  'viz-plotly': {
      id: `viz-plotly`,
      title: `Plotly Interactive Viz`,
      description: `Interactive charts for exploration and dashboards.`,
      level: `beginner`,
      module: `Data Visualization`,
      moduleId: `module-08`,
      track: `data`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `plotly-express`,
        `plotly-graph`,
        `dash`,
        `when`,
        `viz-plotly-deep-theory`,
        `viz-plotly-patterns`,
        `viz-plotly-pitfalls`,
        `viz-plotly-real-world`
      ],
      exerciseIds: [
        `ex-plotly-1`,
        `ex-plotly-2`
      ]
    },
  'viz-design': {
      id: `viz-design`,
      title: `Dashboard Design Principles`,
      description: `Visual encoding, chart selection, and storytelling with data.`,
      level: `beginner`,
      module: `Data Visualization`,
      moduleId: `module-08`,
      track: `data`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `chart-selection`,
        `color`,
        `storytelling`,
        `eda-workflow`,
        `viz-design-deep-theory`,
        `viz-design-patterns`,
        `viz-design-pitfalls`,
        `viz-design-real-world`
      ],
      exerciseIds: [
        `ex-design-1`,
        `ex-design-2`
      ]
    },
  'viz-specialized': {
      id: `viz-specialized`,
      title: `Geospatial & Specialized Charts`,
      description: `Maps, network graphs, and domain-specific visualizations.`,
      level: `beginner`,
      module: `Data Visualization`,
      moduleId: `module-08`,
      track: `data`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `geopandas`,
        `network`,
        `ml-viz`,
        `tools`,
        `viz-specialized-deep-theory`,
        `viz-specialized-patterns`,
        `viz-specialized-pitfalls`,
        `viz-specialized-real-world`
      ],
      exerciseIds: [
        `ex-spec-1`,
        `ex-spec-2`
      ]
    },
  'ml-linear-algebra': {
      id: `ml-linear-algebra`,
      title: `Linear Algebra Essentials`,
      description: `Vectors, matrices, eigenvalues, and their role in ML.`,
      level: `beginner`,
      module: `Math for Machine Learning`,
      moduleId: `module-09`,
      track: `ml`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `vectors`,
        `matrices`,
        `eigen`,
        `svd`,
        `ml-linear-algebra-deep-theory`,
        `ml-linear-algebra-patterns`,
        `ml-linear-algebra-pitfalls`,
        `ml-linear-algebra-real-world`
      ],
      exerciseIds: [
        `ex-la-1`,
        `ex-la-2`
      ]
    },
  'ml-calculus': {
      id: `ml-calculus`,
      title: `Calculus for ML`,
      description: `Derivatives, gradients, chain rule, and partial derivatives for optimization.`,
      level: `beginner`,
      module: `Math for Machine Learning`,
      moduleId: `module-09`,
      track: `ml`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `derivatives`,
        `chain-rule`,
        `loss-gradients`,
        `jacobian`,
        `ml-calculus-deep-theory`,
        `ml-calculus-patterns`,
        `ml-calculus-pitfalls`,
        `ml-calculus-real-world`
      ],
      exerciseIds: [
        `ex-calc-1`,
        `ex-calc-2`
      ]
    },
  'ml-probability': {
      id: `ml-probability`,
      title: `Probability & Distributions`,
      description: `Probability theory, Bayes theorem, and key distributions for ML.`,
      level: `beginner`,
      module: `Math for Machine Learning`,
      moduleId: `module-09`,
      track: `ml`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `basics`,
        `distributions`,
        `expectation`,
        `mle`,
        `ml-probability-deep-theory`,
        `ml-probability-patterns`,
        `ml-probability-pitfalls`,
        `ml-probability-real-world`
      ],
      exerciseIds: [
        `ex-prob-1`,
        `ex-prob-2`
      ]
    },
  'ml-info-theory': {
      id: `ml-info-theory`,
      title: `Information Theory & Entropy`,
      description: `Entropy, cross-entropy, KL divergence — core to classification loss.`,
      level: `beginner`,
      module: `Math for Machine Learning`,
      moduleId: `module-09`,
      track: `ml`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `entropy`,
        `cross-entropy`,
        `kl`,
        `mutual-info`,
        `ml-info-theory-deep-theory`,
        `ml-info-theory-patterns`,
        `ml-info-theory-pitfalls`,
        `ml-info-theory-real-world`
      ],
      exerciseIds: [
        `ex-info-1`,
        `ex-info-2`
      ]
    },
  'ml-optimization': {
      id: `ml-optimization`,
      title: `Optimization & Gradient Descent`,
      description: `Finding minima of loss functions iteratively.`,
      level: `beginner`,
      module: `Math for Machine Learning`,
      moduleId: `module-09`,
      track: `ml`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `gd`,
        `variants`,
        `convex`,
        `regularization`,
        `ml-optimization-deep-theory`,
        `ml-optimization-patterns`,
        `ml-optimization-pitfalls`,
        `ml-optimization-real-world`
      ],
      exerciseIds: [
        `ex-opt-1`,
        `ex-opt-2`
      ]
    },
  'ml-workflow': {
      id: `ml-workflow`,
      title: `ML Workflow & train_test_split`,
      description: `End-to-end machine learning pipeline with scikit-learn.`,
      level: `beginner`,
      module: `ML Foundations & Scikit-learn`,
      moduleId: `module-10`,
      track: `ml`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `pipeline`,
        `split`,
        `preprocessing`,
        `baseline`,
        `ml-workflow-deep-theory`,
        `ml-workflow-patterns`,
        `ml-workflow-pitfalls`,
        `ml-workflow-real-world`
      ],
      exerciseIds: [
        `ex-split-1`,
        `ex-split-2`
      ]
    },
  'ml-linear': {
      id: `ml-linear`,
      title: `Linear & Logistic Regression`,
      description: `Foundation supervised learning algorithms.`,
      level: `beginner`,
      module: `ML Foundations & Scikit-learn`,
      moduleId: `module-10`,
      track: `ml`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `linear-reg`,
        `logistic`,
        `sigmoid`,
        `interpret`,
        `ml-linear-deep-theory`,
        `ml-linear-patterns`,
        `ml-linear-pitfalls`,
        `ml-linear-real-world`
      ],
      exerciseIds: [
        `ex-lr-1`,
        `ex-lr-2`
      ]
    },
  'ml-trees': {
      id: `ml-trees`,
      title: `Decision Trees & Random Forests`,
      description: `Tree-based models for classification and regression.`,
      level: `beginner`,
      module: `ML Foundations & Scikit-learn`,
      moduleId: `module-10`,
      track: `ml`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `dt`,
        `rf`,
        `hyperparams`,
        `when`,
        `ml-trees-deep-theory`,
        `ml-trees-patterns`,
        `ml-trees-pitfalls`,
        `ml-trees-real-world`
      ],
      exerciseIds: [
        `ex-tree-1`,
        `ex-tree-2`
      ]
    },
  'ml-metrics': {
      id: `ml-metrics`,
      title: `Model Evaluation Metrics`,
      description: `Accuracy, precision, recall, F1, ROC-AUC, MSE, R².`,
      level: `beginner`,
      module: `ML Foundations & Scikit-learn`,
      moduleId: `module-10`,
      track: `ml`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `classification`,
        `roc`,
        `regression`,
        `confusion`,
        `ml-metrics-deep-theory`,
        `ml-metrics-patterns`,
        `ml-metrics-pitfalls`,
        `ml-metrics-real-world`
      ],
      exerciseIds: [
        `ex-met-1`,
        `ex-met-2`
      ]
    },
  'ml-cv': {
      id: `ml-cv`,
      title: `Cross-Validation & Pipelines`,
      description: `Robust evaluation with k-fold CV and end-to-end pipelines.`,
      level: `beginner`,
      module: `ML Foundations & Scikit-learn`,
      moduleId: `module-10`,
      track: `ml`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `kfold`,
        `gridsearch`,
        `pipeline-cv`,
        `nested`,
        `ml-cv-deep-theory`,
        `ml-cv-patterns`,
        `ml-cv-pitfalls`,
        `ml-cv-real-world`
      ],
      exerciseIds: [
        `ex-cv-1`,
        `ex-cv-2`
      ]
    },
  'ml-regression': {
      id: `ml-regression`,
      title: `Regression Techniques`,
      description: `Polynomial, ridge, lasso, and elastic net regression.`,
      level: `intermediate`,
      module: `Supervised Learning`,
      moduleId: `module-11`,
      track: `ml`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `poly`,
        `ridge-lasso`,
        `assumptions`,
        `robust`,
        `ml-regression-deep-theory`,
        `ml-regression-patterns`,
        `ml-regression-pitfalls`,
        `ml-regression-real-world`
      ],
      exerciseIds: [
        `ex-reg-1`,
        `ex-reg-2`
      ]
    },
  'ml-classification': {
      id: `ml-classification`,
      title: `Classification Algorithms`,
      description: `KNN, Naive Bayes, and multi-class strategies.`,
      level: `intermediate`,
      module: `Supervised Learning`,
      moduleId: `module-11`,
      track: `ml`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `knn`,
        `naive-bayes`,
        `multiclass`,
        `imbalanced`,
        `ml-classification-deep-theory`,
        `ml-classification-patterns`,
        `ml-classification-pitfalls`,
        `ml-classification-real-world`
      ],
      exerciseIds: [
        `ex-clf-1`,
        `ex-clf-2`
      ]
    },
  'ml-svm': {
      id: `ml-svm`,
      title: `Support Vector Machines`,
      description: `Maximum margin classifiers with kernel trick.`,
      level: `intermediate`,
      module: `Supervised Learning`,
      moduleId: `module-11`,
      track: `ml`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `svm-linear`,
        `kernel`,
        `svc-params`,
        `svr`,
        `ml-svm-deep-theory`,
        `ml-svm-patterns`,
        `ml-svm-pitfalls`,
        `ml-svm-real-world`
      ],
      exerciseIds: [
        `ex-svm-1`,
        `ex-svm-2`
      ]
    },
  'ml-boosting': {
      id: `ml-boosting`,
      title: `Gradient Boosting (XGBoost/LightGBM)`,
      description: `State-of-the-art ensemble methods for tabular data.`,
      level: `intermediate`,
      module: `Supervised Learning`,
      moduleId: `module-11`,
      track: `ml`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `gbm`,
        `xgboost`,
        `lightgbm`,
        `tuning-gbm`,
        `ml-boosting-deep-theory`,
        `ml-boosting-patterns`,
        `ml-boosting-pitfalls`,
        `ml-boosting-real-world`
      ],
      exerciseIds: [
        `ex-xgb-1`,
        `ex-xgb-2`
      ]
    },
  'ml-ensemble': {
      id: `ml-ensemble`,
      title: `Ensemble Methods`,
      description: `Bagging, boosting, stacking, and voting classifiers.`,
      level: `intermediate`,
      module: `Supervised Learning`,
      moduleId: `module-11`,
      track: `ml`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `bagging`,
        `voting`,
        `blending`,
        `diversity`,
        `ml-ensemble-deep-theory`,
        `ml-ensemble-patterns`,
        `ml-ensemble-pitfalls`,
        `ml-ensemble-real-world`
      ],
      exerciseIds: [
        `ex-ens-1`,
        `ex-ens-2`
      ]
    },
  'ml-clustering': {
      id: `ml-clustering`,
      title: `Clustering (K-Means, DBSCAN)`,
      description: `Group similar data points without labels.`,
      level: `beginner`,
      module: `Unsupervised Learning`,
      moduleId: `module-12`,
      track: `ml`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `kmeans`,
        `dbscan`,
        `hierarchical`,
        `eval-cluster`,
        `ml-clustering-deep-theory`,
        `ml-clustering-patterns`,
        `ml-clustering-pitfalls`,
        `ml-clustering-real-world`
      ],
      exerciseIds: [
        `ex-km-1`,
        `ex-km-2`
      ]
    },
  'ml-dimred': {
      id: `ml-dimred`,
      title: `Dimensionality Reduction (PCA, t-SNE)`,
      description: `Reduce feature dimensions while preserving structure.`,
      level: `beginner`,
      module: `Unsupervised Learning`,
      moduleId: `module-12`,
      track: `ml`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `pca`,
        `tsne`,
        `lda`,
        `autoencoder`,
        `ml-dimred-deep-theory`,
        `ml-dimred-patterns`,
        `ml-dimred-pitfalls`,
        `ml-dimred-real-world`
      ],
      exerciseIds: [
        `ex-pca-1`,
        `ex-pca-2`
      ]
    },
  'ml-anomaly': {
      id: `ml-anomaly`,
      title: `Anomaly Detection`,
      description: `Identify outliers and novel patterns in data.`,
      level: `beginner`,
      module: `Unsupervised Learning`,
      moduleId: `module-12`,
      track: `ml`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `isolation`,
        `lof`,
        `oneclass`,
        `applications`,
        `ml-anomaly-deep-theory`,
        `ml-anomaly-patterns`,
        `ml-anomaly-pitfalls`,
        `ml-anomaly-real-world`
      ],
      exerciseIds: [
        `ex-anom-1`,
        `ex-anom-2`
      ]
    },
  'ml-association': {
      id: `ml-association`,
      title: `Association Rules`,
      description: `Find frequent itemsets and association rules in transactional data.`,
      level: `beginner`,
      module: `Unsupervised Learning`,
      moduleId: `module-12`,
      track: `ml`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `apriori`,
        `metrics`,
        `mlxtend`,
        `applications`,
        `ml-association-deep-theory`,
        `ml-association-patterns`,
        `ml-association-pitfalls`,
        `ml-association-real-world`
      ],
      exerciseIds: [
        `ex-assoc-1`,
        `ex-assoc-2`
      ]
    },
  'ml-gmm': {
      id: `ml-gmm`,
      title: `Gaussian Mixture Models`,
      description: `Probabilistic clustering with soft assignments.`,
      level: `beginner`,
      module: `Unsupervised Learning`,
      moduleId: `module-12`,
      track: `ml`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `gmm`,
        `em`,
        `vs-kmeans`,
        `applications-gmm`,
        `ml-gmm-deep-theory`,
        `ml-gmm-patterns`,
        `ml-gmm-pitfalls`,
        `ml-gmm-real-world`
      ],
      exerciseIds: [
        `ex-gmm-1`,
        `ex-gmm-2`
      ]
    },
  'ml-scaling': {
      id: `ml-scaling`,
      title: `Feature Scaling & Encoding`,
      description: `Prepare features for ML algorithms.`,
      level: `advanced`,
      module: `Feature Engineering & Model Selection`,
      moduleId: `module-13`,
      track: `ml`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `scaling`,
        `encoding`,
        `binning`,
        `datetime-fe`,
        `ml-scaling-deep-theory`,
        `ml-scaling-patterns`,
        `ml-scaling-pitfalls`,
        `ml-scaling-real-world`
      ],
      exerciseIds: [
        `ex-scale-1`,
        `ex-scale-2`
      ]
    },
  'ml-feature-sel': {
      id: `ml-feature-sel`,
      title: `Feature Selection`,
      description: `Choose most informative features to reduce dimensionality and overfitting.`,
      level: `advanced`,
      module: `Feature Engineering & Model Selection`,
      moduleId: `module-13`,
      track: `ml`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `filter`,
        `wrapper`,
        `embedded`,
        `importance`,
        `ml-feature-sel-deep-theory`,
        `ml-feature-sel-patterns`,
        `ml-feature-sel-pitfalls`,
        `ml-feature-sel-real-world`
      ],
      exerciseIds: [
        `ex-fsel-1`,
        `ex-fsel-2`
      ]
    },
  'ml-hyperparam': {
      id: `ml-hyperparam`,
      title: `Hyperparameter Tuning`,
      description: `Systematic search for optimal model configuration.`,
      level: `advanced`,
      module: `Feature Engineering & Model Selection`,
      moduleId: `module-13`,
      track: `ml`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `grid`,
        `random`,
        `optuna`,
        `avoid-leakage`,
        `ml-hyperparam-deep-theory`,
        `ml-hyperparam-patterns`,
        `ml-hyperparam-pitfalls`,
        `ml-hyperparam-real-world`
      ],
      exerciseIds: [
        `ex-hp-1`,
        `ex-hp-2`
      ]
    },
  'ml-bias-variance': {
      id: `ml-bias-variance`,
      title: `Bias-Variance Tradeoff`,
      description: `Understanding underfitting and overfitting.`,
      level: `advanced`,
      module: `Feature Engineering & Model Selection`,
      moduleId: `module-13`,
      track: `ml`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `tradeoff`,
        `learning-curves`,
        `regularization-bv`,
        `double-descent`,
        `ml-bias-variance-deep-theory`,
        `ml-bias-variance-patterns`,
        `ml-bias-variance-pitfalls`,
        `ml-bias-variance-real-world`
      ],
      exerciseIds: [
        `ex-bv-1`,
        `ex-bv-2`
      ]
    },
  'ml-interpret': {
      id: `ml-interpret`,
      title: `Model Interpretability (SHAP, LIME)`,
      description: `Explain model predictions for trust and debugging.`,
      level: `advanced`,
      module: `Feature Engineering & Model Selection`,
      moduleId: `module-13`,
      track: `ml`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `shap`,
        `lime`,
        `global`,
        `fairness`,
        `ml-interpret-deep-theory`,
        `ml-interpret-patterns`,
        `ml-interpret-pitfalls`,
        `ml-interpret-real-world`
      ],
      exerciseIds: [
        `ex-shap-1`,
        `ex-shap-2`
      ]
    },
  'dl-nn-basics': {
      id: `dl-nn-basics`,
      title: `Neural Network Basics`,
      description: `Perceptrons, multi-layer networks, and forward propagation.`,
      level: `beginner`,
      module: `Deep Learning Fundamentals`,
      moduleId: `module-14`,
      track: `dl`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `perceptron`,
        `mlp`,
        `forward`,
        `capacity`,
        `dl-nn-basics-deep-theory`,
        `dl-nn-basics-patterns`,
        `dl-nn-basics-pitfalls`,
        `dl-nn-basics-real-world`
      ],
      exerciseIds: [
        `ex-nn-1`,
        `ex-nn-2`
      ]
    },
  'dl-activations': {
      id: `dl-activations`,
      title: `Activation Functions`,
      description: `Non-linear functions enabling networks to learn complex patterns.`,
      level: `beginner`,
      module: `Deep Learning Fundamentals`,
      moduleId: `module-14`,
      track: `dl`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `relu`,
        `sigmoid-tanh`,
        `softmax`,
        `modern`,
        `dl-activations-deep-theory`,
        `dl-activations-patterns`,
        `dl-activations-pitfalls`,
        `dl-activations-real-world`
      ],
      exerciseIds: [
        `ex-act-1`,
        `ex-act-2`
      ]
    },
  'dl-loss': {
      id: `dl-loss`,
      title: `Loss Functions`,
      description: `Objective functions that neural networks minimize during training.`,
      level: `beginner`,
      module: `Deep Learning Fundamentals`,
      moduleId: `module-14`,
      track: `dl`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `mse`,
        `ce`,
        `multi-task`,
        `monitor`,
        `dl-loss-deep-theory`,
        `dl-loss-patterns`,
        `dl-loss-pitfalls`,
        `dl-loss-real-world`
      ],
      exerciseIds: [
        `ex-loss-1`,
        `ex-loss-2`
      ]
    },
  'dl-backprop': {
      id: `dl-backprop`,
      title: `Backpropagation`,
      description: `Computing gradients through the computational graph via chain rule.`,
      level: `beginner`,
      module: `Deep Learning Fundamentals`,
      moduleId: `module-14`,
      track: `dl`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `concept`,
        `manual`,
        `autograd`,
        `vanishing`,
        `dl-backprop-deep-theory`,
        `dl-backprop-patterns`,
        `dl-backprop-pitfalls`,
        `dl-backprop-real-world`
      ],
      exerciseIds: [
        `ex-bp-1`,
        `ex-bp-2`
      ]
    },
  'dl-init-reg': {
      id: `dl-init-reg`,
      title: `Weight Initialization & Regularization`,
      description: `Starting weights and techniques to prevent overfitting.`,
      level: `beginner`,
      module: `Deep Learning Fundamentals`,
      moduleId: `module-14`,
      track: `dl`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `init`,
        `dropout`,
        `batchnorm`,
        `early-stop`,
        `dl-init-reg-deep-theory`,
        `dl-init-reg-patterns`,
        `dl-init-reg-pitfalls`,
        `dl-init-reg-real-world`
      ],
      exerciseIds: [
        `ex-init-1`,
        `ex-init-2`
      ]
    },
  'pt-tensors': {
      id: `pt-tensors`,
      title: `PyTorch Tensors`,
      description: `PyTorch fundamental data structure with GPU support.`,
      level: `intermediate`,
      module: `PyTorch & Neural Networks`,
      moduleId: `module-15`,
      track: `dl`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `tensor-basics`,
        `ops`,
        `numpy-bridge`,
        `device`,
        `pt-tensors-deep-theory`,
        `pt-tensors-patterns`,
        `pt-tensors-pitfalls`,
        `pt-tensors-real-world`
      ],
      exerciseIds: [
        `ex-pt-1`,
        `ex-pt-2`
      ]
    },
  'pt-autograd': {
      id: `pt-autograd`,
      title: `Autograd & Computational Graphs`,
      description: `Automatic differentiation engine in PyTorch.`,
      level: `intermediate`,
      module: `PyTorch & Neural Networks`,
      moduleId: `module-15`,
      track: `dl`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `grad`,
        `graph`,
        `leaf`,
        `higher`,
        `pt-autograd-deep-theory`,
        `pt-autograd-patterns`,
        `pt-autograd-pitfalls`,
        `pt-autograd-real-world`
      ],
      exerciseIds: [
        `ex-ag-1`,
        `ex-ag-2`
      ]
    },
  'pt-module': {
      id: `pt-module`,
      title: `Building NN with nn.Module`,
      description: `Object-oriented model definition in PyTorch.`,
      level: `intermediate`,
      module: `PyTorch & Neural Networks`,
      moduleId: `module-15`,
      track: `dl`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `module`,
        `layers`,
        `loss-opt`,
        `save`,
        `pt-module-deep-theory`,
        `pt-module-patterns`,
        `pt-module-pitfalls`,
        `pt-module-real-world`
      ],
      exerciseIds: [
        `ex-mod-1`,
        `ex-mod-2`
      ]
    },
  'pt-training': {
      id: `pt-training`,
      title: `DataLoaders & Training Loops`,
      description: `Efficient data loading and standard training loop pattern.`,
      level: `intermediate`,
      module: `PyTorch & Neural Networks`,
      moduleId: `module-15`,
      track: `dl`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `dataset`,
        `loop`,
        `transforms`,
        `scheduler`,
        `pt-training-deep-theory`,
        `pt-training-patterns`,
        `pt-training-pitfalls`,
        `pt-training-real-world`
      ],
      exerciseIds: [
        `ex-train-1`,
        `ex-train-2`
      ]
    },
  'pt-gpu': {
      id: `pt-gpu`,
      title: `GPU Training & Mixed Precision`,
      description: `Accelerate training with CUDA and automatic mixed precision.`,
      level: `intermediate`,
      module: `PyTorch & Neural Networks`,
      moduleId: `module-15`,
      track: `dl`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `cuda`,
        `amp`,
        `compile`,
        `distributed`,
        `pt-gpu-deep-theory`,
        `pt-gpu-patterns`,
        `pt-gpu-pitfalls`,
        `pt-gpu-real-world`
      ],
      exerciseIds: [
        `ex-gpu-1`,
        `ex-gpu-2`
      ]
    },
  'dl-conv': {
      id: `dl-conv`,
      title: `Convolutional Layers`,
      description: `Spatial feature extraction with convolution and pooling.`,
      level: `beginner`,
      module: `CNNs & Computer Vision`,
      moduleId: `module-16`,
      track: `dl`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `conv2d`,
        `pooling`,
        `receptive`,
        `cnn-arch`,
        `dl-conv-deep-theory`,
        `dl-conv-patterns`,
        `dl-conv-pitfalls`,
        `dl-conv-real-world`
      ],
      exerciseIds: [
        `ex-conv-1`,
        `ex-conv-2`
      ]
    },
  'dl-cnn-arch': {
      id: `dl-cnn-arch`,
      title: `CNN Architectures (ResNet, VGG)`,
      description: `Landmark architectures that shaped computer vision.`,
      level: `beginner`,
      module: `CNNs & Computer Vision`,
      moduleId: `module-16`,
      track: `dl`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `vgg`,
        `resnet`,
        `modern`,
        `torchvision`,
        `dl-cnn-arch-deep-theory`,
        `dl-cnn-arch-patterns`,
        `dl-cnn-arch-pitfalls`,
        `dl-cnn-arch-real-world`
      ],
      exerciseIds: [
        `ex-res-1`,
        `ex-res-2`
      ]
    },
  'dl-transfer': {
      id: `dl-transfer`,
      title: `Transfer Learning`,
      description: `Leverage pretrained models for new tasks with limited data.`,
      level: `beginner`,
      module: `CNNs & Computer Vision`,
      moduleId: `module-16`,
      track: `dl`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `strategy`,
        `finetune`,
        `domain`,
        `hub`,
        `dl-transfer-deep-theory`,
        `dl-transfer-patterns`,
        `dl-transfer-pitfalls`,
        `dl-transfer-real-world`
      ],
      exerciseIds: [
        `ex-tl-1`,
        `ex-tl-2`
      ]
    },
  'dl-detection': {
      id: `dl-detection`,
      title: `Object Detection`,
      description: `Locate and classify multiple objects in images.`,
      level: `beginner`,
      module: `CNNs & Computer Vision`,
      moduleId: `module-16`,
      track: `dl`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `metrics-det`,
        `rcnn`,
        `yolo`,
        `tools`,
        `dl-detection-deep-theory`,
        `dl-detection-patterns`,
        `dl-detection-pitfalls`,
        `dl-detection-real-world`
      ],
      exerciseIds: [
        `ex-det-1`,
        `ex-det-2`
      ]
    },
  'dl-segmentation': {
      id: `dl-segmentation`,
      title: `Image Segmentation`,
      description: `Pixel-level classification: semantic and instance segmentation.`,
      level: `beginner`,
      module: `CNNs & Computer Vision`,
      moduleId: `module-16`,
      track: `dl`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `semantic`,
        `instance`,
        `unet`,
        `metrics-seg`,
        `dl-segmentation-deep-theory`,
        `dl-segmentation-patterns`,
        `dl-segmentation-pitfalls`,
        `dl-segmentation-real-world`
      ],
      exerciseIds: [
        `ex-seg-1`,
        `ex-seg-2`
      ]
    },
  'nlp-preprocess': {
      id: `nlp-preprocess`,
      title: `Text Preprocessing & Tokenization`,
      description: `Prepare raw text for neural network input.`,
      level: `beginner`,
      module: `NLP, RNNs & Sequence Models`,
      moduleId: `module-17`,
      track: `dl`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `clean`,
        `tokenize`,
        `hf-tokenizer`,
        `vocab`,
        `nlp-preprocess-deep-theory`,
        `nlp-preprocess-patterns`,
        `nlp-preprocess-pitfalls`,
        `nlp-preprocess-real-world`
      ],
      exerciseIds: [
        `ex-nlp-1`,
        `ex-nlp-2`
      ]
    },
  'nlp-embeddings': {
      id: `nlp-embeddings`,
      title: `Word Embeddings (Word2Vec, GloVe)`,
      description: `Dense vector representations capturing semantic meaning.`,
      level: `beginner`,
      module: `NLP, RNNs & Sequence Models`,
      moduleId: `module-17`,
      track: `dl`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `word2vec`,
        `glove`,
        `nn-embed`,
        `contextual`,
        `nlp-embeddings-deep-theory`,
        `nlp-embeddings-patterns`,
        `nlp-embeddings-pitfalls`,
        `nlp-embeddings-real-world`
      ],
      exerciseIds: [
        `ex-emb-1`,
        `ex-emb-2`
      ]
    },
  'nlp-rnn': {
      id: `nlp-rnn`,
      title: `RNNs & LSTMs`,
      description: `Recurrent networks for sequential data processing.`,
      level: `beginner`,
      module: `NLP, RNNs & Sequence Models`,
      moduleId: `module-17`,
      track: `dl`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `rnn`,
        `lstm`,
        `gru`,
        `bidirectional`,
        `nlp-rnn-deep-theory`,
        `nlp-rnn-patterns`,
        `nlp-rnn-pitfalls`,
        `nlp-rnn-real-world`
      ],
      exerciseIds: [
        `ex-rnn-1`,
        `ex-rnn-2`
      ]
    },
  'nlp-seq2seq': {
      id: `nlp-seq2seq`,
      title: `Seq2Seq & Attention Preview`,
      description: `Encoder-decoder architecture for translation and summarization.`,
      level: `beginner`,
      module: `NLP, RNNs & Sequence Models`,
      moduleId: `module-17`,
      track: `dl`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `seq2seq`,
        `teacher`,
        `beam`,
        `apps`,
        `nlp-seq2seq-deep-theory`,
        `nlp-seq2seq-patterns`,
        `nlp-seq2seq-pitfalls`,
        `nlp-seq2seq-real-world`
      ],
      exerciseIds: [
        `ex-s2s-1`,
        `ex-s2s-2`
      ]
    },
  'nlp-ner': {
      id: `nlp-ner`,
      title: `Named Entity Recognition`,
      description: `Token-level sequence labeling for entity extraction.`,
      level: `beginner`,
      module: `NLP, RNNs & Sequence Models`,
      moduleId: `module-17`,
      track: `dl`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `ner-task`,
        `bi-lstm`,
        `bert-ner`,
        `applications`,
        `nlp-ner-deep-theory`,
        `nlp-ner-patterns`,
        `nlp-ner-pitfalls`,
        `nlp-ner-real-world`
      ],
      exerciseIds: [
        `ex-ner-1`,
        `ex-ner-2`
      ]
    },
  'dl-attention': {
      id: `dl-attention`,
      title: `Self-Attention Mechanism`,
      description: `The core innovation enabling modern NLP and beyond.`,
      level: `advanced`,
      module: `Transformers & Attention`,
      moduleId: `module-18`,
      track: `dl`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `attention`,
        `scaled`,
        `self-attn`,
        `multi-head`,
        `dl-attention-deep-theory`,
        `dl-attention-patterns`,
        `dl-attention-pitfalls`,
        `dl-attention-real-world`
      ],
      exerciseIds: [
        `ex-attn-1`,
        `ex-attn-2`
      ]
    },
  'dl-transformer': {
      id: `dl-transformer`,
      title: `Transformer Architecture`,
      description: `The complete encoder-decoder architecture from "Attention Is All You Need".`,
      level: `advanced`,
      module: `Transformers & Attention`,
      moduleId: `module-18`,
      track: `dl`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `encoder`,
        `decoder`,
        `ffn`,
        `layer-norm`,
        `dl-transformer-deep-theory`,
        `dl-transformer-patterns`,
        `dl-transformer-pitfalls`,
        `dl-transformer-real-world`
      ],
      exerciseIds: [
        `ex-tr-1`,
        `ex-tr-2`
      ]
    },
  'dl-positional': {
      id: `dl-positional`,
      title: `Positional Encoding`,
      description: `Inject sequence order information since attention is permutation-invariant.`,
      level: `advanced`,
      module: `Transformers & Attention`,
      moduleId: `module-18`,
      track: `dl`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `sinusoidal`,
        `learned`,
        `rope`,
        `alibi`,
        `dl-positional-deep-theory`,
        `dl-positional-patterns`,
        `dl-positional-pitfalls`,
        `dl-positional-real-world`
      ],
      exerciseIds: [
        `ex-pe-1`,
        `ex-pe-2`
      ]
    },
  'dl-bert': {
      id: `dl-bert`,
      title: `BERT & Encoder Models`,
      description: `Bidirectional encoder representations from transformers.`,
      level: `advanced`,
      module: `Transformers & Attention`,
      moduleId: `module-18`,
      track: `dl`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `bert`,
        `mlm`,
        `fine-tune`,
        `encoder-models`,
        `dl-bert-deep-theory`,
        `dl-bert-patterns`,
        `dl-bert-pitfalls`,
        `dl-bert-real-world`
      ],
      exerciseIds: [
        `ex-bert-1`,
        `ex-bert-2`
      ]
    },
  'dl-gpt': {
      id: `dl-gpt`,
      title: `GPT & Decoder Models`,
      description: `Autoregressive language models for text generation.`,
      level: `advanced`,
      module: `Transformers & Attention`,
      moduleId: `module-18`,
      track: `dl`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `gpt`,
        `generation`,
        `causal`,
        `scaling`,
        `dl-gpt-deep-theory`,
        `dl-gpt-patterns`,
        `dl-gpt-pitfalls`,
        `dl-gpt-real-world`
      ],
      exerciseIds: [
        `ex-gpt-1`,
        `ex-gpt-2`
      ]
    },
  'ai-llm': {
      id: `ai-llm`,
      title: `Large Language Models Overview`,
      description: `Architecture, capabilities, and landscape of modern LLMs.`,
      level: `advanced`,
      module: `LLMs, GenAI & Prompt Engineering`,
      moduleId: `module-19`,
      track: `ai`,
      estimatedMinutes: 45,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `landscape`,
        `capabilities`,
        `tokens`,
        `eval`,
        `ai-llm-deep-theory`,
        `ai-llm-patterns`,
        `ai-llm-pitfalls`,
        `ai-llm-real-world`
      ],
      exerciseIds: [
        `ex-llm-1`,
        `ex-llm-2`
      ]
    },
  'ai-prompt': {
      id: `ai-prompt`,
      title: `Prompt Engineering`,
      description: `Design effective prompts to maximize LLM output quality.`,
      level: `advanced`,
      module: `LLMs, GenAI & Prompt Engineering`,
      moduleId: `module-19`,
      track: `ai`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `basics`,
        `cot`,
        `few-shot`,
        `advanced-prompt`,
        `ai-prompt-deep-theory`,
        `ai-prompt-patterns`,
        `ai-prompt-pitfalls`,
        `ai-prompt-real-world`
      ],
      exerciseIds: [
        `ex-prompt-1`,
        `ex-prompt-2`
      ]
    },
  'ai-rag': {
      id: `ai-rag`,
      title: `RAG (Retrieval Augmented Generation)`,
      description: `Ground LLM responses in external knowledge via retrieval.`,
      level: `advanced`,
      module: `LLMs, GenAI & Prompt Engineering`,
      moduleId: `module-19`,
      track: `ai`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `rag-arch`,
        `embeddings-rag`,
        `chunking`,
        `eval-rag`,
        `ai-rag-deep-theory`,
        `ai-rag-patterns`,
        `ai-rag-pitfalls`,
        `ai-rag-real-world`
      ],
      exerciseIds: [
        `ex-rag-1`,
        `ex-rag-2`
      ]
    },
  'ai-finetune': {
      id: `ai-finetune`,
      title: `Fine-tuning & LoRA`,
      description: `Adapt pretrained LLMs to specific tasks and domains.`,
      level: `advanced`,
      module: `LLMs, GenAI & Prompt Engineering`,
      moduleId: `module-19`,
      track: `ai`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `finetune`,
        `lora`,
        `instruction`,
        `rlhf`,
        `ai-finetune-deep-theory`,
        `ai-finetune-patterns`,
        `ai-finetune-pitfalls`,
        `ai-finetune-real-world`
      ],
      exerciseIds: [
        `ex-ft-1`,
        `ex-ft-2`
      ]
    },
  'ai-agents': {
      id: `ai-agents`,
      title: `Agents & Tool Use`,
      description: `LLM agents that reason, plan, and interact with external tools.`,
      level: `expert`,
      module: `LLMs, GenAI & Prompt Engineering`,
      moduleId: `module-19`,
      track: `ai`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `agents`,
        `tools`,
        `frameworks`,
        `safety`,
        `ai-agents-deep-theory`,
        `ai-agents-patterns`,
        `ai-agents-pitfalls`,
        `ai-agents-real-world`
      ],
      exerciseIds: [
        `ex-agent-1`,
        `ex-agent-2`
      ]
    },
  'ai-serving': {
      id: `ai-serving`,
      title: `Model Serialization & Serving`,
      description: `Save, load, and serve ML models in production.`,
      level: `advanced`,
      module: `MLOps, Deployment & AI Ethics`,
      moduleId: `module-20`,
      track: `ai`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `serialize`,
        `fastapi`,
        `onnx`,
        `batch-realtime`,
        `ai-serving-deep-theory`,
        `ai-serving-patterns`,
        `ai-serving-pitfalls`,
        `ai-serving-real-world`
      ],
      exerciseIds: [
        `ex-serve-1`,
        `ex-serve-2`
      ]
    },
  'ai-docker': {
      id: `ai-docker`,
      title: `Docker & Cloud Deployment`,
      description: `Containerize and deploy ML applications to cloud.`,
      level: `advanced`,
      module: `MLOps, Deployment & AI Ethics`,
      moduleId: `module-20`,
      track: `ai`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `docker`,
        `compose`,
        `cloud`,
        `cicd`,
        `ai-docker-deep-theory`,
        `ai-docker-patterns`,
        `ai-docker-pitfalls`,
        `ai-docker-real-world`
      ],
      exerciseIds: [
        `ex-docker-1`,
        `ex-docker-2`
      ]
    },
  'ai-monitoring': {
      id: `ai-monitoring`,
      title: `Monitoring & Drift Detection`,
      description: `Track model performance and data quality in production.`,
      level: `advanced`,
      module: `MLOps, Deployment & AI Ethics`,
      moduleId: `module-20`,
      track: `ai`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `monitoring`,
        `drift`,
        `evidently`,
        `retraining`,
        `ai-monitoring-deep-theory`,
        `ai-monitoring-patterns`,
        `ai-monitoring-pitfalls`,
        `ai-monitoring-real-world`
      ],
      exerciseIds: [
        `ex-mon-1`,
        `ex-mon-2`
      ]
    },
  'ai-bias': {
      id: `ai-bias`,
      title: `AI Ethics, Bias & Fairness`,
      description: `Identify and mitigate bias in ML systems.`,
      level: `advanced`,
      module: `MLOps, Deployment & AI Ethics`,
      moduleId: `module-20`,
      track: `ai`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `bias`,
        `fairness`,
        `mitigation`,
        `explain-ethics`,
        `ai-bias-deep-theory`,
        `ai-bias-patterns`,
        `ai-bias-pitfalls`,
        `ai-bias-real-world`
      ],
      exerciseIds: [
        `ex-bias-1`,
        `ex-bias-2`
      ]
    },
  'ai-governance': {
      id: `ai-governance`,
      title: `Responsible AI & Governance`,
      description: `Organizational frameworks for ethical AI development and deployment.`,
      level: `advanced`,
      module: `MLOps, Deployment & AI Ethics`,
      moduleId: `module-20`,
      track: `ai`,
      estimatedMinutes: 40,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `framework`,
        `eu-ai-act`,
        `privacy`,
        `red-team`,
        `ai-governance-deep-theory`,
        `ai-governance-patterns`,
        `ai-governance-pitfalls`,
        `ai-governance-real-world`
      ],
      exerciseIds: [
        `ex-gov-1`,
        `ex-gov-2`
      ]
    },
  'py-testing': {
      id: `py-testing`,
      title: `Testing with pytest & unittest`,
      description: `Write reliable unit tests, use fixtures and mocking, and integrate tests into CI pipelines.`,
      level: `intermediate`,
      module: `Python Testing, Debugging & Async`,
      moduleId: `module-21`,
      track: `python`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `pytest-basics`,
        `fixtures`,
        `unittest-mock`,
        `coverage-ci`,
        `py-testing-deep-theory`,
        `py-testing-patterns`,
        `py-testing-pitfalls`,
        `py-testing-real-world`
      ],
      exerciseIds: [
        `ex-pytest-1`,
        `ex-pytest-2`
      ]
    },
  'py-debugging': {
      id: `py-debugging`,
      title: `Debugging, Logging & Tracebacks`,
      description: `Use pdb, logging, and traceback analysis to diagnose failures systematically in Python programs.`,
      level: `intermediate`,
      module: `Python Testing, Debugging & Async`,
      moduleId: `module-21`,
      track: `python`,
      estimatedMinutes: 45,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `pdb`,
        `logging`,
        `tracebacks`,
        `debug-tools`,
        `py-debugging-deep-theory`,
        `py-debugging-patterns`,
        `py-debugging-pitfalls`,
        `py-debugging-real-world`
      ],
      exerciseIds: [
        `ex-debug-1`,
        `ex-debug-2`
      ]
    },
  'py-async': {
      id: `py-async`,
      title: `Asyncio & Async/Await`,
      description: `Write concurrent I/O-bound programs with asyncio, coroutines, and introductory aiohttp patterns.`,
      level: `intermediate`,
      module: `Python Testing, Debugging & Async`,
      moduleId: `module-21`,
      track: `python`,
      estimatedMinutes: 55,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `coroutines`,
        `gather-tasks`,
        `aiohttp`,
        `async-pitfalls`,
        `py-async-deep-theory`,
        `py-async-patterns`,
        `py-async-pitfalls`,
        `py-async-real-world`
      ],
      exerciseIds: [
        `ex-async-1`,
        `ex-async-2`
      ]
    },
  'py-regex': {
      id: `py-regex`,
      title: `Regular Expressions with re`,
      description: `Match, search, and transform text using Python's re module and common regex patterns.`,
      level: `intermediate`,
      module: `Python Testing, Debugging & Async`,
      moduleId: `module-21`,
      track: `python`,
      estimatedMinutes: 45,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `re-basics`,
        `patterns`,
        `flags-groups`,
        `regex-caveats`,
        `py-regex-deep-theory`,
        `py-regex-patterns`,
        `py-regex-pitfalls`,
        `py-regex-real-world`
      ],
      exerciseIds: [
        `ex-regex-1`,
        `ex-regex-2`
      ]
    },
  'py-concurrency': {
      id: `py-concurrency`,
      title: `Threading, Multiprocessing & the GIL`,
      description: `Choose threading, multiprocessing, or asyncio for parallelism; understand the Global Interpreter Lock.`,
      level: `advanced`,
      module: `Python Testing, Debugging & Async`,
      moduleId: `module-21`,
      track: `python`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `gil`,
        `threading`,
        `multiprocessing`,
        `choosing`,
        `py-concurrency-deep-theory`,
        `py-concurrency-patterns`,
        `py-concurrency-pitfalls`,
        `py-concurrency-real-world`
      ],
      exerciseIds: [
        `ex-conc-1`,
        `ex-conc-2`
      ]
    },
  'py-files': {
      id: `py-files`,
      title: `Files & Serialization`,
      description: `Read and write files safely with pathlib, json, csv, and pickle.`,
      level: `intermediate`,
      module: `File I/O, APIs & Data Formats`,
      moduleId: `module-22`,
      track: `python`,
      estimatedMinutes: 45,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `pathlib`,
        `json-csv`,
        `pickle`,
        `io-patterns`,
        `py-files-deep-theory`,
        `py-files-patterns`,
        `py-files-pitfalls`,
        `py-files-real-world`
      ],
      exerciseIds: [
        `ex-files-1`,
        `ex-files-2`
      ]
    },
  'py-apis': {
      id: `py-apis`,
      title: `HTTP & REST APIs`,
      description: `Consume REST APIs with requests: methods, headers, auth, and error handling.`,
      level: `intermediate`,
      module: `File I/O, APIs & Data Formats`,
      moduleId: `module-22`,
      track: `python`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `requests-basics`,
        `rest`,
        `auth-errors`,
        `testing-apis`,
        `py-apis-deep-theory`,
        `py-apis-patterns`,
        `py-apis-pitfalls`,
        `py-apis-real-world`
      ],
      exerciseIds: [
        `ex-api-1`,
        `ex-api-2`
      ]
    },
  'py-web-scrape': {
      id: `py-web-scrape`,
      title: `Web Scraping Basics`,
      description: `Extract data with BeautifulSoup while respecting ethics, robots.txt, and rate limits.`,
      level: `intermediate`,
      module: `File I/O, APIs & Data Formats`,
      moduleId: `module-22`,
      track: `python`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `bs4`,
        `fetch`,
        `extract`,
        `ethics`,
        `py-web-scrape-deep-theory`,
        `py-web-scrape-patterns`,
        `py-web-scrape-pitfalls`,
        `py-web-scrape-real-world`
      ],
      exerciseIds: [
        `ex-scrape-1`,
        `ex-scrape-2`
      ]
    },
  'py-sqlite': {
      id: `py-sqlite`,
      title: `SQLite with Python`,
      description: `Use sqlite3 for embedded relational storage, parameterized queries, and transactions.`,
      level: `intermediate`,
      module: `File I/O, APIs & Data Formats`,
      moduleId: `module-22`,
      track: `python`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `connect`,
        `sql`,
        `orm-alt`,
        `security`,
        `py-sqlite-deep-theory`,
        `py-sqlite-patterns`,
        `py-sqlite-pitfalls`,
        `py-sqlite-real-world`
      ],
      exerciseIds: [
        `ex-sql-1`,
        `ex-sql-2`
      ]
    },
  'py-serialization': {
      id: `py-serialization`,
      title: `Advanced Serialization`,
      description: `JSON Schema validation, YAML config, and columnar Parquet introduction.`,
      level: `intermediate`,
      module: `File I/O, APIs & Data Formats`,
      moduleId: `module-22`,
      track: `python`,
      estimatedMinutes: 45,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `json-schema`,
        `yaml`,
        `parquet`,
        `formats-choose`,
        `py-serialization-deep-theory`,
        `py-serialization-patterns`,
        `py-serialization-pitfalls`,
        `py-serialization-real-world`
      ],
      exerciseIds: [
        `ex-ser-1`,
        `ex-ser-2`
      ]
    },
  'scipy-basics': {
      id: `scipy-basics`,
      title: `SciPy Numerical Tools`,
      description: `Use scipy.optimize, integrate, and interpolate for scientific computing tasks.`,
      level: `intermediate`,
      module: `SciPy & Statistical Computing`,
      moduleId: `module-23`,
      track: `data`,
      estimatedMinutes: 55,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `optimize`,
        `integrate`,
        `interpolate`,
        `scipy-ecosystem`,
        `scipy-basics-deep-theory`,
        `scipy-basics-patterns`,
        `scipy-basics-pitfalls`,
        `scipy-basics-real-world`
      ],
      exerciseIds: [
        `ex-scipy-1`,
        `ex-scipy-2`
      ]
    },
  'stats-hypothesis': {
      id: `stats-hypothesis`,
      title: `Hypothesis Testing`,
      description: `Apply t-tests, chi-square tests, and interpret p-values responsibly.`,
      level: `intermediate`,
      module: `SciPy & Statistical Computing`,
      moduleId: `module-23`,
      track: `data`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `hypothesis`,
        `ttest`,
        `chisq`,
        `pvalue-interpret`,
        `stats-hypothesis-deep-theory`,
        `stats-hypothesis-patterns`,
        `stats-hypothesis-pitfalls`,
        `stats-hypothesis-real-world`
      ],
      exerciseIds: [
        `ex-hyp-1`,
        `ex-hyp-2`
      ]
    },
  'stats-distributions': {
      id: `stats-distributions`,
      title: `Probability Distributions`,
      description: `Model uncertainty with scipy.stats: PDFs, CDFs, sampling, and fitting.`,
      level: `intermediate`,
      module: `SciPy & Statistical Computing`,
      moduleId: `module-23`,
      track: `data`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `rv`,
        `fit`,
        `sampling`,
        `clt`,
        `stats-distributions-deep-theory`,
        `stats-distributions-patterns`,
        `stats-distributions-pitfalls`,
        `stats-distributions-real-world`
      ],
      exerciseIds: [
        `ex-dist-1`,
        `ex-dist-2`
      ]
    },
  'stats-regression': {
      id: `stats-regression`,
      title: `Regression with statsmodels`,
      description: `Ordinary least squares and logistic regression for inference-rich modeling.`,
      level: `intermediate`,
      module: `SciPy & Statistical Computing`,
      moduleId: `module-23`,
      track: `data`,
      estimatedMinutes: 55,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `ols`,
        `logistic`,
        `diagnostics`,
        `inference-vs-pred`,
        `stats-regression-deep-theory`,
        `stats-regression-patterns`,
        `stats-regression-pitfalls`,
        `stats-regression-real-world`
      ],
      exerciseIds: [
        `ex-reg-1`,
        `ex-reg-2`
      ]
    },
  'stats-bayes': {
      id: `stats-bayes`,
      title: `Bayesian Inference Intro`,
      description: `Update beliefs with data using Bayes' theorem, priors, and posterior sampling overview.`,
      level: `advanced`,
      module: `SciPy & Statistical Computing`,
      moduleId: `module-23`,
      track: `data`,
      estimatedMinutes: 55,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `bayes-theorem`,
        `priors`,
        `mcmc`,
        `bayes-ml`,
        `stats-bayes-deep-theory`,
        `stats-bayes-patterns`,
        `stats-bayes-pitfalls`,
        `stats-bayes-real-world`
      ],
      exerciseIds: [
        `ex-bayes-1`,
        `ex-bayes-2`
      ]
    },
  'ml-timeseries': {
      id: `ml-timeseries`,
      title: `Time Series Foundations`,
      description: `Decompose series, check stationarity, and fit ARIMA models.`,
      level: `advanced`,
      module: `Time Series & Recommender Systems`,
      moduleId: `module-24`,
      track: `ml`,
      estimatedMinutes: 60,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `components`,
        `stationarity`,
        `arima`,
        `seasonal-arima`,
        `ml-timeseries-deep-theory`,
        `ml-timeseries-patterns`,
        `ml-timeseries-pitfalls`,
        `ml-timeseries-real-world`
      ],
      exerciseIds: [
        `ex-ts-1`,
        `ex-ts-2`
      ]
    },
  'ml-forecasting': {
      id: `ml-forecasting`,
      title: `Forecasting with Prophet & sklearn`,
      description: `Practical forecasting pipelines for business time series.`,
      level: `advanced`,
      module: `Time Series & Recommender Systems`,
      moduleId: `module-24`,
      track: `ml`,
      estimatedMinutes: 55,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `prophet`,
        `sklearn-ts`,
        `metrics-ts`,
        `pipeline`,
        `ml-forecasting-deep-theory`,
        `ml-forecasting-patterns`,
        `ml-forecasting-pitfalls`,
        `ml-forecasting-real-world`
      ],
      exerciseIds: [
        `ex-fc-1`,
        `ex-fc-2`
      ]
    },
  'ml-recsys-collab': {
      id: `ml-recsys-collab`,
      title: `Collaborative Filtering`,
      description: `Recommend items from user-item interaction patterns.`,
      level: `advanced`,
      module: `Time Series & Recommender Systems`,
      moduleId: `module-24`,
      track: `ml`,
      estimatedMinutes: 55,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `matrix-factor`,
        `neighborhood`,
        `implicit`,
        `eval-recsys`,
        `ml-recsys-collab-deep-theory`,
        `ml-recsys-collab-patterns`,
        `ml-recsys-collab-pitfalls`,
        `ml-recsys-collab-real-world`
      ],
      exerciseIds: [
        `ex-cf-1`,
        `ex-cf-2`
      ]
    },
  'ml-recsys-content': {
      id: `ml-recsys-content`,
      title: `Content-Based Filtering`,
      description: `Recommend from item features and user preference profiles.`,
      level: `advanced`,
      module: `Time Series & Recommender Systems`,
      moduleId: `module-24`,
      track: `ml`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `features`,
        `similarity`,
        `learning`,
        `limits`,
        `ml-recsys-content-deep-theory`,
        `ml-recsys-content-patterns`,
        `ml-recsys-content-pitfalls`,
        `ml-recsys-content-real-world`
      ],
      exerciseIds: [
        `ex-cb-1`,
        `ex-cb-2`
      ]
    },
  'ml-imbalanced': {
      id: `ml-imbalanced`,
      title: `Imbalanced Classification`,
      description: `Handle skewed classes with resampling, weights, and proper metrics.`,
      level: `advanced`,
      module: `Time Series & Recommender Systems`,
      moduleId: `module-24`,
      track: `ml`,
      estimatedMinutes: 55,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `problem`,
        `smote`,
        `weights`,
        `metrics-imb`,
        `ml-imbalanced-deep-theory`,
        `ml-imbalanced-patterns`,
        `ml-imbalanced-pitfalls`,
        `ml-imbalanced-real-world`
      ],
      exerciseIds: [
        `ex-imb-1`,
        `ex-imb-2`
      ]
    },
  'rl-basics': {
      id: `rl-basics`,
      title: `MDPs, Rewards & Policies`,
      description: `Formalize sequential decision making as Markov Decision Processes.`,
      level: `advanced`,
      module: `Reinforcement Learning`,
      moduleId: `module-25`,
      track: `ml`,
      estimatedMinutes: 55,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `mdp`,
        `value-policy`,
        `explore`,
        `rl-loop`,
        `rl-basics-deep-theory`,
        `rl-basics-patterns`,
        `rl-basics-pitfalls`,
        `rl-basics-real-world`
      ],
      exerciseIds: [
        `ex-rl-1`,
        `ex-rl-2`
      ]
    },
  'rl-qlearning': {
      id: `rl-qlearning`,
      title: `Q-Learning & Bellman Updates`,
      description: `Model-free temporal difference learning for optimal action-values.`,
      level: `advanced`,
      module: `Reinforcement Learning`,
      moduleId: `module-25`,
      track: `ml`,
      estimatedMinutes: 60,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `qlearning`,
        `td`,
        `tabular`,
        `convergence`,
        `rl-qlearning-deep-theory`,
        `rl-qlearning-patterns`,
        `rl-qlearning-pitfalls`,
        `rl-qlearning-real-world`
      ],
      exerciseIds: [
        `ex-ql-1`,
        `ex-ql-2`
      ]
    },
  'rl-deep': {
      id: `rl-deep`,
      title: `Deep Q-Networks (DQN)`,
      description: `Combine Q-learning with neural networks and stabilization tricks.`,
      level: `advanced`,
      module: `Reinforcement Learning`,
      moduleId: `module-25`,
      track: `ml`,
      estimatedMinutes: 60,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `dqn`,
        `improvements`,
        `atari`,
        `limits-dqn`,
        `rl-deep-deep-theory`,
        `rl-deep-patterns`,
        `rl-deep-pitfalls`,
        `rl-deep-real-world`
      ],
      exerciseIds: [
        `ex-dqn-1`,
        `ex-dqn-2`
      ]
    },
  'rl-policy': {
      id: `rl-policy`,
      title: `Policy Gradients Intro`,
      description: `Optimize parameterized policies directly with gradient ascent on expected return.`,
      level: `advanced`,
      module: `Reinforcement Learning`,
      moduleId: `module-25`,
      track: `ml`,
      estimatedMinutes: 60,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `reinforce`,
        `actor-critic`,
        `continuous`,
        `pg-vs-value`,
        `rl-policy-deep-theory`,
        `rl-policy-patterns`,
        `rl-policy-pitfalls`,
        `rl-policy-real-world`
      ],
      exerciseIds: [
        `ex-pg-1`,
        `ex-pg-2`
      ]
    },
  'rl-applications': {
      id: `rl-applications`,
      title: `RL Applications`,
      description: `Game AI, robotics overview, and deployment considerations.`,
      level: `advanced`,
      module: `Reinforcement Learning`,
      moduleId: `module-25`,
      track: `ml`,
      estimatedMinutes: 55,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `games`,
        `robotics`,
        `recsys-rl`,
        `deploy`,
        `rl-applications-deep-theory`,
        `rl-applications-patterns`,
        `rl-applications-pitfalls`,
        `rl-applications-real-world`
      ],
      exerciseIds: [
        `ex-rlapp-1`,
        `ex-rlapp-2`
      ]
    },
  'gen-gan': {
      id: `gen-gan`,
      title: `Generative Adversarial Networks`,
      description: `Train generator and discriminator in adversarial equilibrium.`,
      level: `advanced`,
      module: `Generative Deep Learning`,
      moduleId: `module-26`,
      track: `dl`,
      estimatedMinutes: 60,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `gan-arch`,
        `dcgan`,
        `training-tricks`,
        `conditional`,
        `gen-gan-deep-theory`,
        `gen-gan-patterns`,
        `gen-gan-pitfalls`,
        `gen-gan-real-world`
      ],
      exerciseIds: [
        `ex-gan-1`,
        `ex-gan-2`
      ]
    },
  'gen-vae': {
      id: `gen-vae`,
      title: `Variational Autoencoders`,
      description: `Learn latent probabilistic representations with reconstruction and KL losses.`,
      level: `advanced`,
      module: `Generative Deep Learning`,
      moduleId: `module-26`,
      track: `dl`,
      estimatedMinutes: 55,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `vae`,
        `latent`,
        `vae-variants`,
        `sampling-vae`,
        `gen-vae-deep-theory`,
        `gen-vae-patterns`,
        `gen-vae-pitfalls`,
        `gen-vae-real-world`
      ],
      exerciseIds: [
        `ex-vae-1`,
        `ex-vae-2`
      ]
    },
  'gen-diffusion': {
      id: `gen-diffusion`,
      title: `Diffusion Models (DDPM)`,
      description: `Denoising diffusion probabilistic models for high-quality generation.`,
      level: `advanced`,
      module: `Generative Deep Learning`,
      moduleId: `module-26`,
      track: `dl`,
      estimatedMinutes: 60,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `forward`,
        `reverse`,
        `guidance`,
        `diffusion-apps`,
        `gen-diffusion-deep-theory`,
        `gen-diffusion-patterns`,
        `gen-diffusion-pitfalls`,
        `gen-diffusion-real-world`
      ],
      exerciseIds: [
        `ex-diff-1`,
        `ex-diff-2`
      ]
    },
  'gen-style': {
      id: `gen-style`,
      title: `Style Transfer & CycleGAN`,
      description: `Transfer artistic style and unpaired image domain translation.`,
      level: `advanced`,
      module: `Generative Deep Learning`,
      moduleId: `module-26`,
      track: `dl`,
      estimatedMinutes: 55,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `nst`,
        `cyclegan`,
        `stylegan`,
        `applications`,
        `gen-style-deep-theory`,
        `gen-style-patterns`,
        `gen-style-pitfalls`,
        `gen-style-real-world`
      ],
      exerciseIds: [
        `ex-style-1`,
        `ex-style-2`
      ]
    },
  'gen-eval': {
      id: `gen-eval`,
      title: `Evaluating Generative Models`,
      description: `FID, Inception Score, and human evaluation for generative quality.`,
      level: `advanced`,
      module: `Generative Deep Learning`,
      moduleId: `module-26`,
      track: `dl`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `fid`,
        `is`,
        `human`,
        `other-metrics`,
        `gen-eval-deep-theory`,
        `gen-eval-patterns`,
        `gen-eval-pitfalls`,
        `gen-eval-real-world`
      ],
      exerciseIds: [
        `ex-geval-1`,
        `ex-geval-2`
      ]
    },
  'ai-vectors': {
      id: `ai-vectors`,
      title: `Embeddings & Vector Databases`,
      description: `Semantic search with embeddings and ANN indexes (FAISS, Chroma).`,
      level: `advanced`,
      module: `Advanced AI Systems`,
      moduleId: `module-27`,
      track: `ai`,
      estimatedMinutes: 55,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `embeddings`,
        `faiss`,
        `hybrid`,
        `ops`,
        `ai-vectors-deep-theory`,
        `ai-vectors-patterns`,
        `ai-vectors-pitfalls`,
        `ai-vectors-real-world`
      ],
      exerciseIds: [
        `ex-vec-1`,
        `ex-vec-2`
      ]
    },
  'ai-multimodal': {
      id: `ai-multimodal`,
      title: `Multimodal Models (CLIP & VLM)`,
      description: `Vision-language models connecting images and text in shared embedding space.`,
      level: `advanced`,
      module: `Advanced AI Systems`,
      moduleId: `module-27`,
      track: `ai`,
      estimatedMinutes: 55,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `clip`,
        `vlm`,
        `tasks`,
        `limits`,
        `ai-multimodal-deep-theory`,
        `ai-multimodal-patterns`,
        `ai-multimodal-pitfalls`,
        `ai-multimodal-real-world`
      ],
      exerciseIds: [
        `ex-mm-1`,
        `ex-mm-2`
      ]
    },
  'ai-speech': {
      id: `ai-speech`,
      title: `Speech AI (Whisper & TTS)`,
      description: `Automatic speech recognition and text-to-speech pipelines.`,
      level: `advanced`,
      module: `Advanced AI Systems`,
      moduleId: `module-27`,
      track: `ai`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `whisper`,
        `tts`,
        `audio-llm`,
        `deploy-speech`,
        `ai-speech-deep-theory`,
        `ai-speech-patterns`,
        `ai-speech-pitfalls`,
        `ai-speech-real-world`
      ],
      exerciseIds: [
        `ex-speech-1`,
        `ex-speech-2`
      ]
    },
  'ai-eval': {
      id: `ai-eval`,
      title: `AI Benchmarks & Red Teaming`,
      description: `MMLU, HumanEval, and systematic adversarial testing.`,
      level: `advanced`,
      module: `Advanced AI Systems`,
      moduleId: `module-27`,
      track: `ai`,
      estimatedMinutes: 55,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `mmlu`,
        `humaneval`,
        `red-team`,
        `eval-practice`,
        `ai-eval-deep-theory`,
        `ai-eval-patterns`,
        `ai-eval-pitfalls`,
        `ai-eval-real-world`
      ],
      exerciseIds: [
        `ex-aieval-1`,
        `ex-aieval-2`
      ]
    },
  'ai-safety': {
      id: `ai-safety`,
      title: `Alignment, Jailbreaks & Guardrails`,
      description: `Mitigate harmful outputs and build responsible AI systems.`,
      level: `advanced`,
      module: `Advanced AI Systems`,
      moduleId: `module-27`,
      track: `ai`,
      estimatedMinutes: 55,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `alignment`,
        `jailbreaks`,
        `guardrails`,
        `governance`,
        `ai-safety-deep-theory`,
        `ai-safety-patterns`,
        `ai-safety-pitfalls`,
        `ai-safety-real-world`
      ],
      exerciseIds: [
        `ex-safe-1`,
        `ex-safe-2`
      ]
    },
  'cap-portfolio': {
      id: `cap-portfolio`,
      title: `ML Portfolio Projects`,
      description: `Build showcase projects demonstrating end-to-end ML skills.`,
      level: `intermediate`,
      module: `Capstone & Career`,
      moduleId: `module-28`,
      track: `ai`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `structure`,
        `ideas`,
        `presentation`,
        `open-source`,
        `cap-portfolio-deep-theory`,
        `cap-portfolio-patterns`,
        `cap-portfolio-pitfalls`,
        `cap-portfolio-real-world`
      ],
      exerciseIds: [
        `ex-port-1`,
        `ex-port-2`
      ]
    },
  'cap-kaggle': {
      id: `cap-kaggle`,
      title: `Kaggle Competition Strategy`,
      description: `Structured approach to competitive ML and learning from kernels.`,
      level: `intermediate`,
      module: `Capstone & Career`,
      moduleId: `module-28`,
      track: `ai`,
      estimatedMinutes: 55,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `workflow`,
        `features`,
        `ensemble`,
        `mindset`,
        `cap-kaggle-deep-theory`,
        `cap-kaggle-patterns`,
        `cap-kaggle-pitfalls`,
        `cap-kaggle-real-world`
      ],
      exerciseIds: [
        `ex-kaggle-1`,
        `ex-kaggle-2`
      ]
    },
  'cap-interview': {
      id: `cap-interview`,
      title: `ML Interview Preparation`,
      description: `ML fundamentals, coding, system design, and behavioral preparation.`,
      level: `intermediate`,
      module: `Capstone & Career`,
      moduleId: `module-28`,
      track: `ai`,
      estimatedMinutes: 60,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `ml-fundamentals`,
        `coding`,
        `system-design`,
        `behavioral`,
        `cap-interview-deep-theory`,
        `cap-interview-patterns`,
        `cap-interview-pitfalls`,
        `cap-interview-real-world`
      ],
      exerciseIds: [
        `ex-int-1`,
        `ex-int-2`
      ]
    },
  'cap-research': {
      id: `cap-research`,
      title: `Reading Papers & Reproduction`,
      description: `Efficiently understand research papers and reproduce key results.`,
      level: `advanced`,
      module: `Capstone & Career`,
      moduleId: `module-28`,
      track: `ai`,
      estimatedMinutes: 50,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `reading`,
        `venues`,
        `reproduce`,
        `contribute`,
        `cap-research-deep-theory`,
        `cap-research-patterns`,
        `cap-research-pitfalls`,
        `cap-research-real-world`
      ],
      exerciseIds: [
        `ex-paper-1`,
        `ex-paper-2`
      ]
    },
  'cap-career': {
      id: `cap-career`,
      title: `Career Paths in ML/AI`,
      description: `Roles, skills, and growth paths for ML engineers, data scientists, and researchers.`,
      level: `intermediate`,
      module: `Capstone & Career`,
      moduleId: `module-28`,
      track: `ai`,
      estimatedMinutes: 45,
      sectionCount: 8,
      exerciseCount: 2,
      sectionIds: [
        `roles`,
        `skills`,
        `job-search`,
        `growth`,
        `cap-career-deep-theory`,
        `cap-career-patterns`,
        `cap-career-pitfalls`,
        `cap-career-real-world`
      ],
      exerciseIds: [
        `ex-career-1`,
        `ex-career-2`
      ]
    }
};
