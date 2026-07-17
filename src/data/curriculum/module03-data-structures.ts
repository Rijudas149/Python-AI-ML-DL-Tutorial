import type { Topic } from '../../types';

export const module03Topics: Topic[] = [
{
      id: `py-lists`,
      title: `Lists & Tuples`,
      description: `Ordered sequences — mutable lists and immutable tuples.`,
      level: `beginner`,
      track: `python`,
      sections: [
        {
          id: `list-ops`,
          title: `List Operations`,
          content: `Lists are dynamic arrays. Methods: \`.append()\`, \`.extend()\`, \`.insert()\`, \`.pop()\`, \`.remove()\`, \`.sort()\`. Slicing creates copies.

- Lists are mutable ordered sequences
- sort() modifies in place; sorted() returns new list
- Slicing [start:stop:step] never includes stop index
- Use copy() or list() for shallow copies`,
          example: `nums = [3, 1, 4, 1, 5]
nums.append(9)
nums.sort()
print(nums)
print(nums[1:4])`,
          output: `[1, 1, 3, 4, 5, 9]
[1, 3, 4]`,
          keyPoints: [
            `Lists are mutable ordered sequences`,
            `sort() modifies in place; sorted() returns new list`,
            `Slicing [start:stop:step] never includes stop index`,
            `Use copy() or list() for shallow copies`
          ],
          pseudoCode: `List Operations

1. Lists are mutable ordered sequences
2. sort() modifies in place; sorted() returns new list
3. Slicing [start:stop:step] never includes stop index
4. Use copy() or list() for shallow copies`
        },
        {
          id: `tuples`,
          title: `Tuples`,
          content: `Tuples are immutable sequences. Use for fixed collections: coordinates, DB records. Tuple unpacking: \`a, b = (1, 2)\`.

- Tuples are immutable — hashable if elements are
- Use for heterogeneous fixed data
- Unpacking works with any iterable
- Single-element tuple needs trailing comma: (1,)`,
          example: `point = (10, 20)
x, y = point
print(f"({x}, {y})")
# point[0] = 5  # TypeError`,
          keyPoints: [
            `Tuples are immutable — hashable if elements are`,
            `Use for heterogeneous fixed data`,
            `Unpacking works with any iterable`,
            `Single-element tuple needs trailing comma: (1,)`
          ],
          pseudoCode: `Tuples

1. Tuples are immutable — hashable if elements are
2. Use for heterogeneous fixed data
3. Unpacking works with any iterable
4. Single-element tuple needs trailing comma: (1,)`
        },
        {
          id: `list-perf`,
          title: `Performance Considerations`,
          content: `Append is O(1) amortized. Insert at front is O(n). For frequent front inserts, use \`collections.deque\`.

- Choose data structure based on access patterns
- deque for queue operations
- Lists for general-purpose ordered storage
- Profile before optimizing`,
          keyPoints: [
            `Choose data structure based on access patterns`,
            `deque for queue operations`,
            `Lists for general-purpose ordered storage`,
            `Profile before optimizing`
          ],
          pseudoCode: `Performance Considerations

1. Choose data structure based on access patterns
2. deque for queue operations
3. Lists for general-purpose ordered storage
4. Profile before optimizing`
        },
        {
          id: `nested`,
          title: `Nested Structures`,
          content: `Lists of lists, tuples of dicts — common in data processing. Access with chained indexing: \`matrix[1][2]\`.

- Nested structures model grids and tables
- List comprehensions flatten or transform nested data
- Copy carefully — nested lists share references
- Consider numpy arrays for numeric matrices`,
          example: `matrix = [[1,2,3],[4,5,6],[7,8,9]]
print(matrix[1][2])
print([row[0] for row in matrix])`,
          output: `6
[1, 4, 7]`,
          keyPoints: [
            `Nested structures model grids and tables`,
            `List comprehensions flatten or transform nested data`,
            `Copy carefully — nested lists share references`,
            `Consider numpy arrays for numeric matrices`
          ],
          pseudoCode: `Nested Structures

1. Nested structures model grids and tables
2. List comprehensions flatten or transform nested data
3. Copy carefully — nested lists share references
4. Consider numpy arrays for numeric matrices`
        }
      ],
      exercises: [
        {
          id: `ex-list-1`,
          question: `Reverse a list in-place using slicing.`,
          solution: `nums = [1, 2, 3, 4]
nums = nums[::-1]
print(nums)`,
          difficulty: `easy`
        },
        {
          id: `ex-list-2`,
          question: `Find the index of max value in [3, 7, 2, 9, 4].`,
          solution: `nums = [3, 7, 2, 9, 4]
print(nums.index(max(nums)))`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 25,
      module: `module-03`,
      references: [
        {
          id: `python-lists-doc`,
          title: `More on Lists`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/datastructures.html#more-on-lists`,
          description: `List methods, slicing, stacking, and queue operations.`
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
          id: `clrs-algorithms`,
          title: `Introduction to Algorithms (CLRS)`,
          source: `MIT Press`,
          type: `book`,
          url: `https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/`,
          description: `Definitive reference for sorting, searching, and algorithmic complexity analysis.`
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
      id: `py-dicts`,
      title: `Dictionaries & Sets`,
      description: `Hash maps and unordered unique collections.`,
      level: `beginner`,
      track: `python`,
      sections: [
        {
          id: `dict-basics`,
          title: `Dictionary Fundamentals`,
          content: `Dicts map keys to values. Keys must be hashable (immutable). Create with \`{}\` or \`dict()\`. Access: \`d[key]\` or \`d.get(key, default)\`.

- Dicts preserve insertion order (Python 3.7+)
- Use get() to avoid KeyError
- keys(), values(), items() for iteration
- Dict comprehensions build dicts concisely`,
          example: `user = {"name": "Alice", "age": 30, "role": "admin"}
print(user["name"])
print(user.get("email", "N/A"))`,
          output: `Alice
N/A`,
          keyPoints: [
            `Dicts preserve insertion order (Python 3.7+)`,
            `Use get() to avoid KeyError`,
            `keys(), values(), items() for iteration`,
            `Dict comprehensions build dicts concisely`
          ],
          pseudoCode: `Dictionary Fundamentals

1. Dicts preserve insertion order (Python 3.7+)
2. Use get() to avoid KeyError
3. keys(), values(), items() for iteration
4. Dict comprehensions build dicts concisely`
        },
        {
          id: `sets`,
          title: `Sets`,
          content: `Sets store unique elements with O(1) membership test. Operations: union \`|\`, intersection \`&\`, difference \`-\`.

- Sets eliminate duplicates
- Fast membership testing with in
- frozenset is immutable/hashable
- Use sets for deduplication and set math`,
          example: `a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(a & b)
print(a | b)`,
          output: `{3, 4}
{1, 2, 3, 4, 5, 6}`,
          keyPoints: [
            `Sets eliminate duplicates`,
            `Fast membership testing with in`,
            `frozenset is immutable/hashable`,
            `Use sets for deduplication and set math`
          ],
          pseudoCode: `Sets

1. Sets eliminate duplicates
2. Fast membership testing with in
3. frozenset is immutable/hashable
4. Use sets for deduplication and set math`
        },
        {
          id: `defaultdict`,
          title: `defaultdict & Counter`,
          content: `\`collections.defaultdict\` auto-creates missing keys. \`Counter\` counts hashable objects — essential for frequency analysis.

- Counter is a dict subclass for counting
- most_common(n) returns top n items
- defaultdict avoids manual key existence checks
- Use Counter for text and categorical analysis`,
          example: `from collections import Counter
words = ["apple", "banana", "apple", "cherry", "banana", "apple"]
counts = Counter(words)
print(counts.most_common(2))`,
          output: `[('apple', 3), ('banana', 2)]`,
          keyPoints: [
            `Counter is a dict subclass for counting`,
            `most_common(n) returns top n items`,
            `defaultdict avoids manual key existence checks`,
            `Use Counter for text and categorical analysis`
          ],
          pseudoCode: `defaultdict & Counter

1. Counter is a dict subclass for counting
2. most_common(n) returns top n items
3. defaultdict avoids manual key existence checks
4. Use Counter for text and categorical analysis`
        },
        {
          id: `dict-merge`,
          title: `Merging & Updating Dicts`,
          content: `Python 3.9+: \`{**d1, **d2}\` or \`d1 | d2\`. Update in place: \`d.update(other)\`.

- Later keys override earlier in merge
- Use for config and kwargs merging
- Deep merge requires custom logic
- Dict union operator | available in 3.9+`,
          example: `defaults = {"lr": 0.01, "epochs": 10}
overrides = {"epochs": 50}
config = {**defaults, **overrides}
print(config)`,
          output: `{'lr': 0.01, 'epochs': 50}`,
          keyPoints: [
            `Later keys override earlier in merge`,
            `Use for config and kwargs merging`,
            `Deep merge requires custom logic`,
            `Dict union operator | available in 3.9+`
          ],
          pseudoCode: `Merging & Updating Dicts

1. Later keys override earlier in merge
2. Use for config and kwargs merging
3. Deep merge requires custom logic
4. Dict union operator | available in 3.9+`
        }
      ],
      exercises: [
        {
          id: `ex-dict-1`,
          question: `Count character frequencies in "hello".`,
          solution: `from collections import Counter
c = Counter("hello")
print(dict(c))`,
          difficulty: `easy`
        },
        {
          id: `ex-dict-2`,
          question: `Invert a dict {1:"a", 2:"b"} to {"a":1, "b":2}.`,
          solution: `d = {1: "a", 2: "b"}
inverted = {v: k for k, v in d.items()}
print(inverted)`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 25,
      module: `module-03`,
      references: [
        {
          id: `python-dicts-doc`,
          title: `Dictionaries`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/datastructures.html#dictionaries`,
          description: `Hash maps with key-value pairs, views, and comprehension syntax.`
        },
        {
          id: `python-sets-doc`,
          title: `Sets`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/datastructures.html#sets`,
          description: `Unordered collections for membership testing and set algebra.`
        },
        {
          id: `python-collections-module`,
          title: `collections Module`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/library/collections.html`,
          description: `Specialized containers: namedtuple, Counter, defaultdict, ChainMap.`
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
      id: `py-deque`,
      title: `Stacks, Queues & Deque`,
      description: `LIFO stacks and FIFO queues with collections.deque.`,
      level: `beginner`,
      track: `python`,
      sections: [
        {
          id: `stack`,
          title: `Stack (LIFO)`,
          content: `Use list \`.append()\` and \`.pop()\` for stack. Last in, first out — used in parsing, undo, DFS.

- append/pop from end implements stack
- O(1) operations at list end
- Used in recursion and graph DFS
- deque also supports append/pop`,
          example: `stack = []
stack.append(1)
stack.append(2)
stack.append(3)
print(stack.pop())
print(stack)`,
          output: `3
[1, 2]`,
          keyPoints: [
            `append/pop from end implements stack`,
            `O(1) operations at list end`,
            `Used in recursion and graph DFS`,
            `deque also supports append/pop`
          ],
          pseudoCode: `Stack (LIFO)

1. append/pop from end implements stack
2. O(1) operations at list end
3. Used in recursion and graph DFS
4. deque also supports append/pop`
        },
        {
          id: `queue`,
          title: `Queue (FIFO)`,
          content: `Use \`collections.deque\` with \`append()\` and \`popleft()\` for O(1) queue operations. Never use list.pop(0) — O(n).

- deque provides O(1) appendleft/popleft
- FIFO for BFS and task scheduling
- list.pop(0) is O(n) — avoid for queues
- queue.Queue is thread-safe alternative`,
          example: `from collections import deque
q = deque(["task1", "task2"])
q.append("task3")
print(q.popleft())
print(q)`,
          output: `task1
deque(['task2', 'task3'])`,
          keyPoints: [
            `deque provides O(1) appendleft/popleft`,
            `FIFO for BFS and task scheduling`,
            `list.pop(0) is O(n) — avoid for queues`,
            `queue.Queue is thread-safe alternative`
          ],
          pseudoCode: `Queue (FIFO)

1. deque provides O(1) appendleft/popleft
2. FIFO for BFS and task scheduling
3. list.pop(0) is O(n) — avoid for queues
4. queue.Queue is thread-safe alternative`
        },
        {
          id: `deque-features`,
          title: `deque Advanced Features`,
          content: `deque supports maxlen for bounded buffers, rotation, and double-ended operations.

- maxlen creates sliding window buffer
- Automatic eviction of oldest items
- rotate(n) shifts elements circularly
- Ideal for rolling statistics`,
          example: `from collections import deque
recent = deque(maxlen=3)
for x in [1, 2, 3, 4, 5]:
    recent.append(x)
print(list(recent))`,
          output: `[3, 4, 5]`,
          keyPoints: [
            `maxlen creates sliding window buffer`,
            `Automatic eviction of oldest items`,
            `rotate(n) shifts elements circularly`,
            `Ideal for rolling statistics`
          ],
          pseudoCode: `deque Advanced Features

1. maxlen creates sliding window buffer
2. Automatic eviction of oldest items
3. rotate(n) shifts elements circularly
4. Ideal for rolling statistics`
        },
        {
          id: `applications`,
          title: `Real-World Applications`,
          content: `Stacks: expression evaluation, browser history. Queues: job schedulers, BFS traversal, streaming pipelines.

- Match data structure to algorithm needs
- BFS uses queue, DFS uses stack
- Priority queues use heapq module
- Consider thread safety for concurrent queues`,
          keyPoints: [
            `Match data structure to algorithm needs`,
            `BFS uses queue, DFS uses stack`,
            `Priority queues use heapq module`,
            `Consider thread safety for concurrent queues`
          ],
          pseudoCode: `Real-World Applications

1. Match data structure to algorithm needs
2. BFS uses queue, DFS uses stack
3. Priority queues use heapq module
4. Consider thread safety for concurrent queues`
        }
      ],
      exercises: [
        {
          id: `ex-deque-1`,
          question: `Implement a function that checks balanced parentheses using a stack.`,
          solution: `def balanced(s):
    stack = []
    pairs = {")": "(", "]": "[", "}": "{"}
    for c in s:
        if c in "([{":
            stack.append(c)
        elif c in ")]}":
            if not stack or stack.pop() != pairs[c]:
                return False
    return len(stack) == 0

print(balanced("({[]})"))`,
          difficulty: `medium`
        },
        {
          id: `ex-deque-2`,
          question: `Use deque to implement a queue processing ["a","b","c"].`,
          solution: `from collections import deque
q = deque(["a", "b", "c"])
processed = []
while q:
    processed.append(q.popleft())
print(processed)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-03`,
      references: [
        {
          id: `python-deque-doc`,
          title: `collections.deque`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/library/collections.html#collections.deque`,
          description: `Double-ended queue optimized for O(1) append/pop at both ends.`
        },
        {
          id: `python-collections-module`,
          title: `collections Module`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/library/collections.html`,
          description: `Specialized containers: namedtuple, Counter, defaultdict, ChainMap.`
        },
        {
          id: `clrs-algorithms`,
          title: `Introduction to Algorithms (CLRS)`,
          source: `MIT Press`,
          type: `book`,
          url: `https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/`,
          description: `Definitive reference for sorting, searching, and algorithmic complexity analysis.`
        },
        {
          id: `python-lists-doc`,
          title: `More on Lists`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/datastructures.html#more-on-lists`,
          description: `List methods, slicing, stacking, and queue operations.`
        }
      ]
    },
{
      id: `py-sort-search`,
      title: `Sorting & Searching`,
      description: `Built-in sorting, binary search, and algorithmic complexity.`,
      level: `beginner`,
      track: `python`,
      sections: [
        {
          id: `sorting`,
          title: `Sorting in Python`,
          content: `\`sorted(iterable, key=, reverse=)\` returns new list. \`.sort()\` sorts in place. Timsort algorithm — O(n log n).

- sorted() preserves original list
- key=function customizes sort criteria
- Stable sort preserves equal element order
- Timsort exploits partially sorted input`,
          example: `data = [3, 1, 4, 1, 5, 9]
print(sorted(data))
print(sorted(data, reverse=True))`,
          output: `[1, 1, 3, 4, 5, 9]
[9, 5, 4, 3, 1, 1]`,
          keyPoints: [
            `sorted() preserves original list`,
            `key=function customizes sort criteria`,
            `Stable sort preserves equal element order`,
            `Timsort exploits partially sorted input`
          ],
          pseudoCode: `Sorting in Python

1. sorted() preserves original list
2. key=function customizes sort criteria
3. Stable sort preserves equal element order
4. Timsort exploits partially sorted input`
        },
        {
          id: `custom-sort`,
          title: `Custom Sort Keys`,
          content: `Use \`key=lambda x: ...\` or \`operator.itemgetter\`, \`operator.attrgetter\` for complex sorting.

- Tuple keys enable multi-criteria sort
- Negate numeric key for descending
- itemgetter is faster than lambda for simple access
- Sort once, reuse for repeated queries`,
          example: `students = [("Alice", 95), ("Bob", 87), ("Charlie", 95)]
by_grade = sorted(students, key=lambda s: (-s[1], s[0]))
print(by_grade)`,
          output: `[('Alice', 95), ('Charlie', 95), ('Bob', 87)]`,
          keyPoints: [
            `Tuple keys enable multi-criteria sort`,
            `Negate numeric key for descending`,
            `itemgetter is faster than lambda for simple access`,
            `Sort once, reuse for repeated queries`
          ],
          pseudoCode: `Custom Sort Keys

1. Tuple keys enable multi-criteria sort
2. Negate numeric key for descending
3. itemgetter is faster than lambda for simple access
4. Sort once, reuse for repeated queries`
        },
        {
          id: `search`,
          title: `Linear & Binary Search`,
          content: `Linear: O(n) scan. Binary search: O(log n) on sorted data. Use \`bisect\` module for insertion points.

- Binary search requires sorted data
- bisect finds insertion position
- bisect_left vs bisect_right for duplicates
- Use set/dict for O(1) lookup when possible`,
          example: `import bisect
sorted_list = [1, 3, 5, 7, 9]
idx = bisect.bisect_left(sorted_list, 5)
print(idx)`,
          output: `2`,
          keyPoints: [
            `Binary search requires sorted data`,
            `bisect finds insertion position`,
            `bisect_left vs bisect_right for duplicates`,
            `Use set/dict for O(1) lookup when possible`
          ],
          pseudoCode: `Linear & Binary Search

1. Binary search requires sorted data
2. bisect finds insertion position
3. bisect_left vs bisect_right for duplicates
4. Use set/dict for O(1) lookup when possible`
        },
        {
          id: `complexity`,
          title: `Big-O Basics`,
          content: `Common complexities: O(1) constant, O(log n) logarithmic, O(n) linear, O(n log n) linearithmic, O(n²) quadratic. Choose algorithms wisely.

- Big-O describes growth rate, not exact time
- Nested loops often imply O(n²)
- Hash lookups are average O(1)
- Sorting dominates many pipeline costs`,
          keyPoints: [
            `Big-O describes growth rate, not exact time`,
            `Nested loops often imply O(n²)`,
            `Hash lookups are average O(1)`,
            `Sorting dominates many pipeline costs`
          ],
          pseudoCode: `Big-O Basics

1. Big-O describes growth rate, not exact time
2. Nested loops often imply O(n²)
3. Hash lookups are average O(1)
4. Sorting dominates many pipeline costs`
        }
      ],
      exercises: [
        {
          id: `ex-sort-1`,
          question: `Sort a list of strings by length descending.`,
          solution: `words = ["hi", "hello", "hey", "greetings"]
print(sorted(words, key=len, reverse=True))`,
          difficulty: `easy`
        },
        {
          id: `ex-sort-2`,
          question: `Use bisect to insert 6 into sorted [1,3,5,7,9] maintaining order.`,
          solution: `import bisect
lst = [1, 3, 5, 7, 9]
bisect.insort(lst, 6)
print(lst)`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 25,
      module: `module-03`,
      references: [
        {
          id: `python-sort-doc`,
          title: `Sorting HOW TO`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/howto/sorting.html`,
          description: `Guide to sorted(), list.sort(), key functions, and stability.`
        },
        {
          id: `python-bisect-doc`,
          title: `bisect — Array Bisection Algorithm`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/library/bisect.html`,
          description: `Binary search utilities for maintaining sorted sequences.`
        },
        {
          id: `clrs-algorithms`,
          title: `Introduction to Algorithms (CLRS)`,
          source: `MIT Press`,
          type: `book`,
          url: `https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/`,
          description: `Definitive reference for sorting, searching, and algorithmic complexity analysis.`
        },
        {
          id: `python-lists-doc`,
          title: `More on Lists`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/datastructures.html#more-on-lists`,
          description: `List methods, slicing, stacking, and queue operations.`
        }
      ]
    },
{
      id: `py-collections`,
      title: `Collections Module`,
      description: `namedtuple, OrderedDict, ChainMap, and other specialized containers.`,
      level: `beginner`,
      track: `python`,
      sections: [
        {
          id: `namedtuple`,
          title: `namedtuple`,
          content: `Creates tuple subclasses with named fields. Lightweight alternative to classes for data records.

- Immutable like regular tuples
- Named access improves readability
- Use _replace for modified copies
- dataclass is modern alternative`,
          example: `from collections import namedtuple
Point = namedtuple("Point", ["x", "y"])
p = Point(3, 4)
print(p.x, p.y)`,
          output: `3 4`,
          keyPoints: [
            `Immutable like regular tuples`,
            `Named access improves readability`,
            `Use _replace for modified copies`,
            `dataclass is modern alternative`
          ],
          pseudoCode: `namedtuple

1. Immutable like regular tuples
2. Named access improves readability
3. Use _replace for modified copies
4. dataclass is modern alternative`
        },
        {
          id: `chainmap`,
          title: `ChainMap`,
          content: `ChainMap searches multiple dicts in order — useful for scoped configs and symbol tables.

- First dict in chain takes precedence
- Useful for layered configuration
- Does not merge — searches sequentially
- Modifications affect first dict in chain`,
          example: `from collections import ChainMap
defaults = {"color": "blue", "size": "M"}
user = {"color": "red"}
config = ChainMap(user, defaults)
print(config["color"], config["size"])`,
          output: `red M`,
          keyPoints: [
            `First dict in chain takes precedence`,
            `Useful for layered configuration`,
            `Does not merge — searches sequentially`,
            `Modifications affect first dict in chain`
          ],
          pseudoCode: `ChainMap

1. First dict in chain takes precedence
2. Useful for layered configuration
3. Does not merge — searches sequentially
4. Modifications affect first dict in chain`
        },
        {
          id: `ordered`,
          title: `OrderedDict & Modern Dicts`,
          content: `OrderedDict once guaranteed order; standard dict now preserves order. OrderedDict still useful for move_to_end and popitem(last=False).

- Regular dict preserves insertion order since 3.7
- OrderedDict for LRU cache patterns
- move_to_end for reordering
- Consider functools.lru_cache for caching`,
          keyPoints: [
            `Regular dict preserves insertion order since 3.7`,
            `OrderedDict for LRU cache patterns`,
            `move_to_end for reordering`,
            `Consider functools.lru_cache for caching`
          ],
          pseudoCode: `OrderedDict & Modern Dicts

1. Regular dict preserves insertion order since 3.7
2. OrderedDict for LRU cache patterns
3. move_to_end for reordering
4. Consider functools.lru_cache for caching`
        },
        {
          id: `heapq`,
          title: `heapq — Priority Queues`,
          content: `heapq implements min-heap. \`heappush\`, \`heappop\` for O(log n) priority queue operations.

- Min-heap — smallest element first
- heappush/heappop are O(log n)
- heapify converts list to heap in O(n)
- Use for top-k and scheduling problems`,
          example: `import heapq
heap = []
for val in [5, 3, 8, 1]:
    heapq.heappush(heap, val)
print(heapq.heappop(heap))`,
          output: `1`,
          keyPoints: [
            `Min-heap — smallest element first`,
            `heappush/heappop are O(log n)`,
            `heapify converts list to heap in O(n)`,
            `Use for top-k and scheduling problems`
          ],
          pseudoCode: `heapq — Priority Queues

1. Min-heap — smallest element first
2. heappush/heappop are O(log n)
3. heapify converts list to heap in O(n)
4. Use for top-k and scheduling problems`
        }
      ],
      exercises: [
        {
          id: `ex-coll-1`,
          question: `Create a namedtuple Person with name and age, instantiate and print.`,
          solution: `from collections import namedtuple
Person = namedtuple("Person", ["name", "age"])
p = Person("Alice", 30)
print(f"{p.name} is {p.age}")`,
          difficulty: `easy`
        },
        {
          id: `ex-coll-2`,
          question: `Find 3 largest numbers in [10, 3, 7, 1, 25, 18] using heapq.`,
          solution: `import heapq
print(heapq.nlargest(3, [10, 3, 7, 1, 25, 18]))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-03`,
      references: [
        {
          id: `python-collections-module`,
          title: `collections Module`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/library/collections.html`,
          description: `Specialized containers: namedtuple, Counter, defaultdict, ChainMap.`
        },
        {
          id: `python-deque-doc`,
          title: `collections.deque`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/library/collections.html#collections.deque`,
          description: `Double-ended queue optimized for O(1) append/pop at both ends.`
        },
        {
          id: `python-dicts-doc`,
          title: `Dictionaries`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/datastructures.html#dictionaries`,
          description: `Hash maps with key-value pairs, views, and comprehension syntax.`
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
