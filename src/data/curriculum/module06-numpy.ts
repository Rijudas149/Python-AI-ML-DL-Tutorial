import type { Topic } from '../../types';

export const module06Topics: Topic[] = [
{
      id: `np-arrays`,
      title: `NumPy Arrays Fundamentals`,
      description: `Create and manipulate ndarrays — the foundation of scientific Python.`,
      level: `beginner`,
      track: `data`,
      sections: [
        {
          id: `create`,
          title: `Creating Arrays`,
          content: `NumPy ndarrays are homogeneous, fixed-size multidimensional arrays. Create from lists: \`np.array([1,2,3])\`, zeros, ones, arange, linspace.

**Why this matters for NumPy Arrays Fundamentals:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — NumPy Arrays Fundamentals:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Creating Arrays" connects to create and manipulate ndarrays — the foundation of scientific python. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import numpy as np

a = np.array([1, 2, 3, 4, 5])
b = np.zeros((2, 3))
c = np.arange(0, 10, 2)
d = np.linspace(0, 1, 5)
print(a.shape, b.shape, c, d)`,
          output: `(5,) (2, 3) [0 2 4 6 8] [0.   0.25 0.5  0.75 1.  ]`,
          keyPoints: [
            `ndarray is homogeneous — single dtype`,
            `shape tuple describes dimensions`,
            `arange for step-based ranges`,
            `linspace for evenly spaced floats`
          ]
        },
        {
          id: `dtype`,
          title: `Data Types`,
          content: `dtype determines memory and precision: int32, float64, bool_, complex128. Specify: \`np.array([1,2], dtype=np.float32)\`.

**Why this matters for NumPy Arrays Fundamentals:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — NumPy Arrays Fundamentals:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Data Types" connects to create and manipulate ndarrays — the foundation of scientific python. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import numpy as np

a = np.array([1, 2, 3], dtype=np.float32)
print(a.dtype, a.nbytes)
b = a.astype(np.int64)
print(b.dtype)`,
          output: `float32 12
int64`,
          keyPoints: [
            `float64 default for floats`,
            `float32 saves memory in deep learning`,
            `astype creates copy with new dtype`,
            `dtype mismatch can cause subtle bugs`
          ]
        },
        {
          id: `attrs`,
          title: `Array Attributes`,
          content: `.shape, .ndim, .size, .dtype, .itemsize. reshape() changes shape without copying data (usually).

**Why this matters for NumPy Arrays Fundamentals:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — NumPy Arrays Fundamentals:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Array Attributes" connects to create and manipulate ndarrays — the foundation of scientific python. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import numpy as np

a = np.arange(12).reshape(3, 4)
print(a.shape, a.ndim, a.size)
print(a.reshape(2, 6))`,
          output: `(3, 4) 2 12
[[ 0  1  2  3  4  5]
 [ 6  7  8  9 10 11]]`,
          keyPoints: [
            `size = product of shape dimensions`,
            `reshape total elements must match`,
            `-1 in reshape auto-calculates dimension`,
            `ravel() returns flattened view`
          ]
        },
        {
          id: `vs-list`,
          title: `Arrays vs Python Lists`,
          content: `NumPy: fixed type, vectorized ops, contiguous memory, C-speed. Lists: heterogeneous, slower for numeric work. Always prefer NumPy for numerics.

**Why this matters for NumPy Arrays Fundamentals:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — NumPy Arrays Fundamentals:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Arrays vs Python Lists" connects to create and manipulate ndarrays — the foundation of scientific python. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          keyPoints: [
            `Vectorization eliminates Python loops`,
            `10-100x speedup typical for numeric ops`,
            `Memory efficient contiguous storage`,
            `Foundation for pandas, sklearn, pytorch`
          ]
        },
        {
          id: `np-arrays-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

NumPy Arrays Fundamentals sits in the **data** track of the DL_Master curriculum. Create and manipulate ndarrays — the foundation of scientific Python.

Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.

For np-arrays, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for NumPy Arrays Fundamentals
meta = {"topic_id": "np-arrays", "track": "data", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `np-arrays data beginner`,
          keyPoints: [
            `Core theory of NumPy Arrays Fundamentals ties to the data track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `np-arrays-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from NumPy Arrays Fundamentals. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For np-arrays, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for np-arrays
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("np-arrays", "NumPy Arrays Fundamentals")
print(ref.topic_id, ref.title.split()[0])`,
          output: `np-arrays NumPy`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with data ecosystem conventions`
          ]
        },
        {
          id: `np-arrays-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on NumPy Arrays Fundamentals often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on np-arrays, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("np-arrays", "NumPy Arrays Fundamentals")
debug_step("section_count", 4)`,
          output: `[np-arrays] 'NumPy Arrays Fundamentals' (str)
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
          id: `np-arrays-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

NumPy Arrays Fundamentals shows up wherever data skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around np-arrays align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for NumPy Arrays Fundamentals
skills = ["data", "beginner", "np-arrays"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: data, beginner, np-arrays`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect NumPy Arrays Fundamentals to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-np-1`,
          question: `Create a 3x3 array of zeros and set center element to 1.`,
          solution: `import numpy as np
a = np.zeros((3, 3))
a[1, 1] = 1
print(a)`,
          difficulty: `easy`
        },
        {
          id: `ex-np-2`,
          question: `Create array [0, 0.25, 0.5, 0.75, 1.0] using linspace.`,
          solution: `import numpy as np
print(np.linspace(0, 1, 5))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-06`,
      references: [
        {
          id: `numpy-quickstart`,
          title: `NumPy Quickstart Tutorial`,
          source: `NumPy`,
          type: `documentation`,
          url: `https://numpy.org/doc/stable/user/quickstart.html`,
          description: `Creating arrays, indexing, and basic operations with ndarrays.`
        },
        {
          id: `numpy-ndarray`,
          title: `The N-dimensional Array (ndarray)`,
          source: `NumPy`,
          type: `documentation`,
          url: `https://numpy.org/doc/stable/reference/arrays.ndarray.html`,
          description: `Core ndarray structure — shape, dtype, strides, and memory layout.`
        },
        {
          id: `kaggle-python`,
          title: `Kaggle Learn — Python`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/python`,
          description: `Interactive micro-course covering Python essentials for data science.`
        },
        {
          id: `numpy-indexing`,
          title: `Indexing and Slicing Arrays`,
          source: `NumPy`,
          type: `documentation`,
          url: `https://numpy.org/doc/stable/user/basics.indexing.html`,
          description: `Basic, advanced, and boolean indexing for multidimensional arrays.`
        }
      ]
    },
{
      id: `np-indexing`,
      title: `Array Indexing & Broadcasting`,
      description: `Slicing, boolean indexing, fancy indexing, and broadcasting rules.`,
      level: `beginner`,
      track: `data`,
      sections: [
        {
          id: `slicing`,
          title: `Array Indexing & Slicing`,
          content: `Same as lists but multidimensional: \`arr[row, col]\`. Slicing creates views (not copies) — modifying view affects original!

**Why this matters for Array Indexing & Broadcasting:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Array Indexing & Broadcasting:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Array Indexing & Slicing" connects to slicing, boolean indexing, fancy indexing, and broadcasting rules. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import numpy as np

a = np.arange(10)
print(a[2:7:2])
b = np.arange(12).reshape(3, 4)
print(b[1, :2])
print(b[:, -1])`,
          output: `[2 4 6]
[4 5]
[ 3  7 11]`,
          keyPoints: [
            `Multidimensional indexing with commas`,
            `Slicing creates views — beware aliasing`,
            `copy() for independent arrays`,
            `Boolean indexing for filtering`
          ]
        },
        {
          id: `boolean`,
          title: `Boolean & Fancy Indexing`,
          content: `Boolean mask: \`arr[arr > 0]\`. Fancy indexing with integer arrays selects specific elements.

**Why this matters for Array Indexing & Broadcasting:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Array Indexing & Broadcasting:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Boolean & Fancy Indexing" connects to slicing, boolean indexing, fancy indexing, and broadcasting rules. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import numpy as np

a = np.array([10, -3, 5, -1, 8])
print(a[a > 0])
idx = np.array([0, 2, 4])
print(a[idx])`,
          output: `[10  5  8]
[10  5  8]`,
          keyPoints: [
            `Boolean indexing for conditional selection`,
            `Fancy indexing with integer arrays`,
            `Boolean indexing returns copy`,
            `np.where for conditional replacement`
          ]
        },
        {
          id: `broadcast`,
          title: `Broadcasting Rules`,
          content: `NumPy stretches smaller arrays to match shapes. Rules: align trailing dimensions; size 1 broadcasts; mismatched non-1 sizes error.

**Why this matters for Array Indexing & Broadcasting:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Array Indexing & Broadcasting:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Broadcasting Rules" connects to slicing, boolean indexing, fancy indexing, and broadcasting rules. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import numpy as np

a = np.array([[1, 2, 3], [4, 5, 6]])
b = np.array([10, 20, 30])
print(a + b)`,
          output: `[[11 22 33]
 [14 25 36]]`,
          keyPoints: [
            `Broadcasting avoids explicit loops`,
            `Trailing dimensions compared`,
            `Size-1 dimensions stretch`,
            `Essential for ML batch operations`
          ]
        },
        {
          id: `vectorize`,
          title: `Vectorized Operations`,
          content: `Element-wise: +, -, *, /, **. Universal functions (ufuncs): np.sin, np.exp, np.log. Aggregations: .sum(), .mean(), .std(), axis parameter.

**Why this matters for Array Indexing & Broadcasting:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Array Indexing & Broadcasting:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Vectorized Operations" connects to slicing, boolean indexing, fancy indexing, and broadcasting rules. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import numpy as np

a = np.array([[1, 2], [3, 4]])
print(a.sum(), a.sum(axis=0), a.mean(axis=1))`,
          output: `10 [4 6] [1.5 3.5]`,
          keyPoints: [
            `axis=0 collapses rows (column-wise)`,
            `axis=1 collapses columns (row-wise)`,
            `keepdims preserves dimensions`,
            `np.einsum for advanced tensor ops`
          ]
        },
        {
          id: `np-indexing-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Array Indexing & Broadcasting sits in the **data** track of the DL_Master curriculum. Slicing, boolean indexing, fancy indexing, and broadcasting rules.

Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.

For np-indexing, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Array Indexing & Broadcasting
meta = {"topic_id": "np-indexing", "track": "data", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `np-indexing data beginner`,
          keyPoints: [
            `Core theory of Array Indexing & Broadcasting ties to the data track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `np-indexing-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Array Indexing & Broadcasting. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For np-indexing, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for np-indexing
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("np-indexing", "Array Indexing & Broadcasting")
print(ref.topic_id, ref.title.split()[0])`,
          output: `np-indexing Array`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with data ecosystem conventions`
          ]
        },
        {
          id: `np-indexing-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Array Indexing & Broadcasting often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on np-indexing, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("np-indexing", "Array Indexing & Broadcasting")
debug_step("section_count", 4)`,
          output: `[np-indexing] 'Array Indexing & Broadcasting' (str)
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
          id: `np-indexing-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Array Indexing & Broadcasting shows up wherever data skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around np-indexing align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Array Indexing & Broadcasting
skills = ["data", "beginner", "np-indexing"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: data, beginner, np-indexing`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Array Indexing & Broadcasting to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-np-idx-1`,
          question: `Filter array to keep only values > 5.`,
          solution: `import numpy as np
a = np.array([3, 7, 2, 9, 4, 6])
print(a[a > 5])`,
          difficulty: `easy`
        },
        {
          id: `ex-np-idx-2`,
          question: `Add row vector to matrix using broadcasting.`,
          solution: `import numpy as np
m = np.ones((3, 4))
v = np.array([1, 2, 3, 4])
print(m + v)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-06`,
      references: [
        {
          id: `numpy-indexing`,
          title: `Indexing and Slicing Arrays`,
          source: `NumPy`,
          type: `documentation`,
          url: `https://numpy.org/doc/stable/user/basics.indexing.html`,
          description: `Basic, advanced, and boolean indexing for multidimensional arrays.`
        },
        {
          id: `numpy-broadcasting`,
          title: `Array Broadcasting in NumPy`,
          source: `NumPy`,
          type: `documentation`,
          url: `https://numpy.org/doc/stable/user/basics.broadcasting.html`,
          description: `Rules for operating on arrays of different shapes without copying.`
        },
        {
          id: `numpy-ndarray`,
          title: `The N-dimensional Array (ndarray)`,
          source: `NumPy`,
          type: `documentation`,
          url: `https://numpy.org/doc/stable/reference/arrays.ndarray.html`,
          description: `Core ndarray structure — shape, dtype, strides, and memory layout.`
        },
        {
          id: `numpy-quickstart`,
          title: `NumPy Quickstart Tutorial`,
          source: `NumPy`,
          type: `documentation`,
          url: `https://numpy.org/doc/stable/user/quickstart.html`,
          description: `Creating arrays, indexing, and basic operations with ndarrays.`
        }
      ]
    },
{
      id: `np-linalg`,
      title: `Linear Algebra with NumPy`,
      description: `Matrix operations, dot products, decomposition, and solving linear systems.`,
      level: `beginner`,
      track: `data`,
      sections: [
        {
          id: `matmul`,
          title: `Matrix Multiplication`,
          content: `np.dot(a, b) or a @ b (Python 3.5+). Inner product for 1D, matrix multiply for 2D. np.matmul preferred.

**Why this matters for Linear Algebra with NumPy:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Linear Algebra with NumPy:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Matrix Multiplication" connects to matrix operations, dot products, decomposition, and solving linear systems. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import numpy as np

A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
print(A @ B)`,
          output: `[[19 22]
 [43 50]]`,
          keyPoints: [
            `@ operator for matrix multiplication`,
            `Element-wise * is NOT matrix multiply`,
            `np.dot handles various dimensions`,
            `Order matters: AB ≠ BA generally`
          ]
        },
        {
          id: `linalg`,
          title: `np.linalg Module`,
          content: `det, inv, eig, svd, solve. **Never invert matrices directly for solving Ax=b** — use np.linalg.solve(A, b).

**Why this matters for Linear Algebra with NumPy:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Linear Algebra with NumPy:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "np.linalg Module" connects to matrix operations, dot products, decomposition, and solving linear systems. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import numpy as np

A = np.array([[3, 1], [1, 2]])
b = np.array([9, 8])
x = np.linalg.solve(A, b)
print(x)`,
          output: `[2. 3.]`,
          keyPoints: [
            `solve() numerically stable vs inv() @ b`,
            `SVD fundamental for PCA and ML`,
            `eig for eigenvalue problems`,
            `cond() checks matrix conditioning`
          ]
        },
        {
          id: `norm`,
          title: `Norms & Distances`,
          content: `np.linalg.norm for vector/matrix norms. Combined with broadcasting for pairwise distances.

**Why this matters for Linear Algebra with NumPy:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Linear Algebra with NumPy:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Norms & Distances" connects to matrix operations, dot products, decomposition, and solving linear systems. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import numpy as np

v = np.array([3, 4])
print(np.linalg.norm(v))
print(np.sqrt(v @ v))`,
          output: `5.0
5.0`,
          keyPoints: [
            `L2 norm is default Euclidean distance`,
            `Norms measure vector magnitude`,
            `Distance matrices via broadcasting`,
            `Cosine similarity common in NLP/ML`
          ]
        },
        {
          id: `applications`,
          title: `ML Applications`,
          content: `Linear regression: w = (X^T X)^(-1) X^T y. PCA via SVD. Neural network layers are matrix multiplications.

**Why this matters for Linear Algebra with NumPy:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Linear Algebra with NumPy:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "ML Applications" connects to matrix operations, dot products, decomposition, and solving linear systems. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          keyPoints: [
            `All DL is matrix multiplication at core`,
            `SVD powers dimensionality reduction`,
            `Normal equations for linear regression`,
            `Use float32 for GPU efficiency`
          ]
        },
        {
          id: `np-linalg-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Linear Algebra with NumPy sits in the **data** track of the DL_Master curriculum. Matrix operations, dot products, decomposition, and solving linear systems.

Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.

For np-linalg, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Linear Algebra with NumPy
meta = {"topic_id": "np-linalg", "track": "data", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `np-linalg data beginner`,
          keyPoints: [
            `Core theory of Linear Algebra with NumPy ties to the data track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `np-linalg-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Linear Algebra with NumPy. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For np-linalg, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for np-linalg
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("np-linalg", "Linear Algebra with NumPy")
print(ref.topic_id, ref.title.split()[0])`,
          output: `np-linalg Linear`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with data ecosystem conventions`
          ]
        },
        {
          id: `np-linalg-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Linear Algebra with NumPy often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on np-linalg, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("np-linalg", "Linear Algebra with NumPy")
debug_step("section_count", 4)`,
          output: `[np-linalg] 'Linear Algebra with NumPy' (str)
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
          id: `np-linalg-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Linear Algebra with NumPy shows up wherever data skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around np-linalg align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Linear Algebra with NumPy
skills = ["data", "beginner", "np-linalg"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: data, beginner, np-linalg`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Linear Algebra with NumPy to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-linalg-1`,
          question: `Compute dot product of [1,2,3] and [4,5,6].`,
          solution: `import numpy as np
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
print(a @ b)`,
          difficulty: `easy`
        },
        {
          id: `ex-linalg-2`,
          question: `Solve 2x + y = 5, x - y = 1 using np.linalg.solve.`,
          solution: `import numpy as np
A = np.array([[2, 1], [1, -1]])
b = np.array([5, 1])
print(np.linalg.solve(A, b))`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 40,
      module: `module-06`,
      references: [
        {
          id: `numpy-linalg`,
          title: `numpy.linalg — Linear Algebra`,
          source: `NumPy`,
          type: `documentation`,
          url: `https://numpy.org/doc/stable/reference/routines.linalg.html`,
          description: `Matrix multiplication, decomposition, eigenvalues, and linear systems.`
        },
        {
          id: `mit-1806-linalg`,
          title: `MIT 18.06 Linear Algebra`,
          source: `MIT`,
          type: `course`,
          url: `https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/`,
          description: `Gilbert Strang's foundational linear algebra course used across ML.`
        },
        {
          id: `3blue1brown-linalg`,
          title: `Essence of Linear Algebra`,
          source: `3Blue1Brown`,
          type: `video`,
          url: `https://www.3blue1brown.com/topics/linear-algebra`,
          description: `Visual intuition for vectors, matrices, and transformations.`
        },
        {
          id: `numpy-quickstart`,
          title: `NumPy Quickstart Tutorial`,
          source: `NumPy`,
          type: `documentation`,
          url: `https://numpy.org/doc/stable/user/quickstart.html`,
          description: `Creating arrays, indexing, and basic operations with ndarrays.`
        }
      ]
    },
{
      id: `np-random`,
      title: `Random & Statistics`,
      description: `Random number generation and statistical operations with NumPy.`,
      level: `beginner`,
      track: `data`,
      sections: [
        {
          id: `rng`,
          title: `Random Number Generation`,
          content: `np.random.default_rng(seed) for reproducible randomness. .random(), .integers(), .normal(), .choice().

**Why this matters for Random & Statistics:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Random & Statistics:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Random Number Generation" connects to random number generation and statistical operations with numpy. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import numpy as np

rng = np.random.default_rng(42)
print(rng.random(5))
print(rng.integers(1, 10, size=5))
print(rng.normal(0, 1, 5))`,
          output: `[0.77395605 0.43887844 0.85859792 0.69736803 0.09417735]
[8 8 8 3 8]
[ 0.49671415 -0.1382643   0.64768854  1.52302986 -0.23415337]`,
          keyPoints: [
            `Always set seed for reproducibility`,
            `default_rng is modern API`,
            `normal(loc, scale, size) for Gaussian`,
            `choice for random sampling`
          ]
        },
        {
          id: `stats`,
          title: `Statistical Functions`,
          content: `np.mean, np.median, np.std, np.var, np.percentile, np.corrcoef. axis parameter for multidimensional stats.

**Why this matters for Random & Statistics:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Random & Statistics:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Statistical Functions" connects to random number generation and statistical operations with numpy. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import numpy as np

data = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
print(np.mean(data), np.std(data))
print(np.percentile(data, [25, 50, 75]))`,
          output: `5.5 2.8722813232690143
[3.25 5.5  7.75]`,
          keyPoints: [
            `std default is population (ddof=0)`,
            `ddof=1 for sample standard deviation`,
            `percentile for quartiles and outliers`,
            `corrcoef for feature correlation analysis`
          ]
        },
        {
          id: `shuffle`,
          title: `Shuffling & Sampling`,
          content: `rng.shuffle() in-place. rng.permutation() returns shuffled copy. train/test splits use permutation.

**Why this matters for Random & Statistics:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Random & Statistics:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Shuffling & Sampling" connects to random number generation and statistical operations with numpy. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import numpy as np

rng = np.random.default_rng(42)
data = np.arange(10)
perm = rng.permutation(data)
print(perm)`,
          keyPoints: [
            `Shuffle before train/test split`,
            `permutation preserves original`,
            `choice(replace=False) for sampling without replacement`,
            `Bootstrap uses sampling with replacement`
          ]
        },
        {
          id: `distributions`,
          title: `Probability Distributions`,
          content: `rng.uniform, binomial, poisson, exponential. Understanding distributions essential for ML probabilistic models.

**Why this matters for Random & Statistics:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Random & Statistics:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Probability Distributions" connects to random number generation and statistical operations with numpy. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          keyPoints: [
            `Normal distribution central to ML`,
            `Binomial for classification simulation`,
            `Distribution choice affects synthetic data`,
            `Scipy.stats for advanced distributions`
          ]
        },
        {
          id: `np-random-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Random & Statistics sits in the **data** track of the DL_Master curriculum. Random number generation and statistical operations with NumPy.

Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.

For np-random, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Random & Statistics
meta = {"topic_id": "np-random", "track": "data", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `np-random data beginner`,
          keyPoints: [
            `Core theory of Random & Statistics ties to the data track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `np-random-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Random & Statistics. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For np-random, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for np-random
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("np-random", "Random & Statistics")
print(ref.topic_id, ref.title.split()[0])`,
          output: `np-random Random`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with data ecosystem conventions`
          ]
        },
        {
          id: `np-random-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Random & Statistics often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on np-random, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("np-random", "Random & Statistics")
debug_step("section_count", 4)`,
          output: `[np-random] 'Random & Statistics' (str)
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
          id: `np-random-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Random & Statistics shows up wherever data skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around np-random align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Random & Statistics
skills = ["data", "beginner", "np-random"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: data, beginner, np-random`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Random & Statistics to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-rand-1`,
          question: `Generate 5 random floats between 0 and 1 with seed 0.`,
          solution: `import numpy as np
rng = np.random.default_rng(0)
print(rng.random(5))`,
          difficulty: `easy`
        },
        {
          id: `ex-rand-2`,
          question: `Compute mean and std of array [2, 4, 4, 4, 5, 5, 7, 9].`,
          solution: `import numpy as np
d = np.array([2, 4, 4, 4, 5, 5, 7, 9])
print(np.mean(d), round(np.std(d), 2))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-06`,
      references: [
        {
          id: `numpy-random`,
          title: `Random Sampling (numpy.random)`,
          source: `NumPy`,
          type: `documentation`,
          url: `https://numpy.org/doc/stable/reference/random/index.html`,
          description: `Reproducible random number generation and statistical distributions.`
        },
        {
          id: `khan-probability`,
          title: `Statistics and Probability — Khan Academy`,
          source: `Khan Academy`,
          type: `course`,
          url: `https://www.khanacademy.org/math/statistics-probability`,
          description: `Probability distributions, Bayes theorem, and statistical inference.`
        },
        {
          id: `numpy-quickstart`,
          title: `NumPy Quickstart Tutorial`,
          source: `NumPy`,
          type: `documentation`,
          url: `https://numpy.org/doc/stable/user/quickstart.html`,
          description: `Creating arrays, indexing, and basic operations with ndarrays.`
        },
        {
          id: `bishop-prml`,
          title: `Pattern Recognition and Machine Learning`,
          source: `Cambridge`,
          type: `book`,
          url: `https://www.microsoft.com/en-us/research/publication/pattern-recognition-machine-learning/`,
          description: `Rigorous treatment of probability, inference, and classical ML algorithms.`
        }
      ]
    },
{
      id: `np-perf`,
      title: `Performance & Vectorization`,
      description: `Write fast NumPy code avoiding Python loops.`,
      level: `beginner`,
      track: `data`,
      sections: [
        {
          id: `vectorize`,
          title: `Avoid Python Loops`,
          content: `Replace loops with vectorized operations. np.vectorize is convenience, not performance — true vectorization uses ufuncs.

**Why this matters for Performance & Vectorization:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Performance & Vectorization:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Avoid Python Loops" connects to write fast numpy code avoiding python loops. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import numpy as np

a = np.arange(1000000)
# Vectorized — fast
b = a ** 2 + 2 * a + 1
print(b[:5])`,
          output: `[ 1  4  9 16 25]`,
          keyPoints: [
            `Python loops on arrays are slow`,
            `Ufuncs run at C speed`,
            `Broadcasting eliminates nested loops`,
            `Profile with %timeit before optimizing`
          ]
        },
        {
          id: `memory`,
          title: `Memory Layout`,
          content: `C-contiguous (row-major) vs Fortran-contiguous (column-major). .flags, np.ascontiguousarray. Affects cache performance.

**Why this matters for Performance & Vectorization:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Performance & Vectorization:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Memory Layout" connects to write fast numpy code avoiding python loops. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          keyPoints: [
            `Row-major default in NumPy/C`,
            `Column-major in Fortran/MATLAB`,
            `Contiguous arrays faster for operations`,
            `ravel vs flatten — view vs copy`
          ]
        },
        {
          id: `einsum`,
          title: `np.einsum`,
          content: `Einstein summation for concise tensor operations. Powers attention mechanisms and batch operations.

**Why this matters for Performance & Vectorization:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Performance & Vectorization:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "np.einsum" connects to write fast numpy code avoiding python loops. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import numpy as np

A = np.arange(6).reshape(2, 3)
B = np.arange(9).reshape(3, 3)
print(np.einsum("ij,jk->ik", A, B))`,
          keyPoints: [
            `einsum expresses complex tensor ops`,
            `Used in transformer attention`,
            `More readable than nested transpose/matmul`,
            `Optimize einsum path for performance`
          ]
        },
        {
          id: `numba`,
          title: `Numba & Cython Preview`,
          content: `When NumPy insufficient, @numba.jit compiles Python to machine code. Cython for C-speed extensions.

**Why this matters for Performance & Vectorization:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Performance & Vectorization:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Numba & Cython Preview" connects to write fast numpy code avoiding python loops. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          keyPoints: [
            `Numba JIT for custom numeric loops`,
            `nopython mode for max speed`,
            `Cython for production extensions`,
            `Prefer vectorization first, JIT second`
          ]
        },
        {
          id: `np-perf-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Performance & Vectorization sits in the **data** track of the DL_Master curriculum. Write fast NumPy code avoiding Python loops.

Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.

For np-perf, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Performance & Vectorization
meta = {"topic_id": "np-perf", "track": "data", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `np-perf data beginner`,
          keyPoints: [
            `Core theory of Performance & Vectorization ties to the data track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `np-perf-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Performance & Vectorization. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For np-perf, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for np-perf
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("np-perf", "Performance & Vectorization")
print(ref.topic_id, ref.title.split()[0])`,
          output: `np-perf Performance`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with data ecosystem conventions`
          ]
        },
        {
          id: `np-perf-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Performance & Vectorization often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on np-perf, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("np-perf", "Performance & Vectorization")
debug_step("section_count", 4)`,
          output: `[np-perf] 'Performance & Vectorization' (str)
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
          id: `np-perf-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Performance & Vectorization shows up wherever data skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around np-perf align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Performance & Vectorization
skills = ["data", "beginner", "np-perf"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: data, beginner, np-perf`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Performance & Vectorization to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-perf-1`,
          question: `Vectorized: compute y = 2*x + 1 for array of 10 elements.`,
          solution: `import numpy as np
x = np.arange(10)
y = 2 * x + 1
print(y)`,
          difficulty: `easy`
        },
        {
          id: `ex-perf-2`,
          question: `Use boolean indexing to replace negative values with 0.`,
          solution: `import numpy as np
a = np.array([3, -1, 5, -2, 8])
a[a < 0] = 0
print(a)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-06`,
      references: [
        {
          id: `numpy-performance`,
          title: `Performance Tips for NumPy`,
          source: `NumPy`,
          type: `documentation`,
          url: `https://numpy.org/doc/stable/user/performance.html`,
          description: `Vectorization strategies to avoid slow Python loops over arrays.`
        },
        {
          id: `numpy-broadcasting`,
          title: `Array Broadcasting in NumPy`,
          source: `NumPy`,
          type: `documentation`,
          url: `https://numpy.org/doc/stable/user/basics.broadcasting.html`,
          description: `Rules for operating on arrays of different shapes without copying.`
        },
        {
          id: `numpy-quickstart`,
          title: `NumPy Quickstart Tutorial`,
          source: `NumPy`,
          type: `documentation`,
          url: `https://numpy.org/doc/stable/user/quickstart.html`,
          description: `Creating arrays, indexing, and basic operations with ndarrays.`
        },
        {
          id: `numpy-ndarray`,
          title: `The N-dimensional Array (ndarray)`,
          source: `NumPy`,
          type: `documentation`,
          url: `https://numpy.org/doc/stable/reference/arrays.ndarray.html`,
          description: `Core ndarray structure — shape, dtype, strides, and memory layout.`
        }
      ]
    }
];
