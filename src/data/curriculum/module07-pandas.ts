import type { Topic } from '../../types';

export const module07Topics: Topic[] = [
{
      id: `pd-dataframes`,
      title: `Series & DataFrames`,
      description: `Pandas one-dimensional Series and two-dimensional DataFrames.`,
      level: `beginner`,
      track: `data`,
      sections: [
        {
          id: `series`,
          title: `Series`,
          content: `Series is labeled 1D array. Create from dict or list with index. .loc[] label-based, .iloc[] integer-based access.

**Why this matters for Series & DataFrames:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Series & DataFrames:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Series" connects to pandas one-dimensional series and two-dimensional dataframes. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import pandas as pd

s = pd.Series([10, 20, 30], index=["a", "b", "c"])
print(s["b"])
print(s.loc["a":"b"])`,
          output: `20
a    10
b    20
dtype: int64`,
          keyPoints: [
            `Series has data and index`,
            `Index enables label-based access`,
            `Automatic alignment on operations`,
            `Series is column of DataFrame`
          ]
        },
        {
          id: `dataframe`,
          title: `DataFrame Creation`,
          content: `From dict of lists, CSV, JSON, SQL. Columns are Series. .head(), .info(), .describe() for exploration.

**Why this matters for Series & DataFrames:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Series & DataFrames:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "DataFrame Creation" connects to pandas one-dimensional series and two-dimensional dataframes. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import pandas as pd

df = pd.DataFrame({
    "name": ["Alice", "Bob", "Charlie"],
    "age": [25, 30, 35],
    "score": [95, 87, 92]
})
print(df.describe())`,
          output: `             age      score
count   3.000000   3.000000
mean   30.000000  91.333333
std     5.000000   4.041452
min    25.000000  87.000000
25%    27.500000  89.500000
50%    30.000000  92.000000
75%    32.500000  93.500000
max    35.000000  95.000000`,
          keyPoints: [
            `DataFrame is primary pandas structure`,
            `describe() gives numeric summary`,
            `info() shows dtypes and non-null counts`,
            `read_csv most common ingestion method`
          ]
        },
        {
          id: `selection`,
          title: `Column & Row Selection`,
          content: `df["col"], df[["col1","col2"]], df.loc[rows, cols], df.iloc[i,j]. Avoid chained indexing.

**Why this matters for Series & DataFrames:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Series & DataFrames:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Column & Row Selection" connects to pandas one-dimensional series and two-dimensional dataframes. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import pandas as pd

df = pd.DataFrame({"A": [1,2,3], "B": [4,5,6], "C": [7,8,9]})
print(df.loc[0:1, ["A", "C"]])`,
          output: `   A  C
0  1  7
1  2  8`,
          keyPoints: [
            `Single brackets for column, double for multiple`,
            `loc is label-based inclusive`,
            `iloc is integer-based exclusive on stop`,
            `Avoid df[df.A > 0]["B"] chained indexing`
          ]
        },
        {
          id: `dtypes`,
          title: `Data Types`,
          content: `object (strings), int64, float64, bool, datetime64, category. astype() for conversion. pd.to_numeric, pd.to_datetime.

**Why this matters for Series & DataFrames:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Series & DataFrames:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Data Types" connects to pandas one-dimensional series and two-dimensional dataframes. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          keyPoints: [
            `category dtype saves memory for repeated strings`,
            `Parse dates early with to_datetime`,
            `Downcast numeric types to save memory`,
            `String dtype (StringDtype) in modern pandas`
          ]
        },
        {
          id: `pd-dataframes-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Series & DataFrames sits in the **data** track of the DL_Master curriculum. Pandas one-dimensional Series and two-dimensional DataFrames.

Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.

For pd-dataframes, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Series & DataFrames
meta = {"topic_id": "pd-dataframes", "track": "data", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `pd-dataframes data beginner`,
          keyPoints: [
            `Core theory of Series & DataFrames ties to the data track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `pd-dataframes-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Series & DataFrames. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For pd-dataframes, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for pd-dataframes
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("pd-dataframes", "Series & DataFrames")
print(ref.topic_id, ref.title.split()[0])`,
          output: `pd-dataframes Series`,
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
          id: `pd-dataframes-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Series & DataFrames often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on pd-dataframes, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("pd-dataframes", "Series & DataFrames")
debug_step("section_count", 4)`,
          output: `[pd-dataframes] 'Series & DataFrames' (str)
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
          id: `pd-dataframes-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Series & DataFrames shows up wherever data skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around pd-dataframes align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Series & DataFrames
skills = ["data", "beginner", "pd-dataframes"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: data, beginner, pd-dataframes`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Series & DataFrames to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-pd-1`,
          question: `Create DataFrame with columns name and score, 3 rows.`,
          solution: `import pandas as pd
df = pd.DataFrame({"name": ["A","B","C"], "score": [90, 85, 88]})
print(df)`,
          difficulty: `easy`
        },
        {
          id: `ex-pd-2`,
          question: `Select rows where score > 86.`,
          solution: `import pandas as pd
df = pd.DataFrame({"name": ["A","B","C"], "score": [90, 85, 88]})
print(df[df["score"] > 86])`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-07`,
      references: [
        {
          id: `pandas-getting-started`,
          title: `Getting Started with pandas`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/getting_started/index.html`,
          description: `Introductory guide to Series, DataFrames, and basic operations.`
        },
        {
          id: `kaggle-pandas`,
          title: `Kaggle Learn — Pandas`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/pandas`,
          description: `Hands-on pandas exercises for real-world data manipulation.`
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
          id: `kaggle-python`,
          title: `Kaggle Learn — Python`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/python`,
          description: `Interactive micro-course covering Python essentials for data science.`
        }
      ]
    },
{
      id: `pd-indexing`,
      title: `Indexing, Filtering & Selection`,
      description: `Advanced indexing with query, isin, and boolean masks.`,
      level: `beginner`,
      track: `data`,
      sections: [
        {
          id: `boolean`,
          title: `Boolean Filtering`,
          content: `df[df["col"] > value], combine with & | ~. Parentheses required: \`(df.A > 0) & (df.B < 10)\`.

**Why this matters for Indexing, Filtering & Selection:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Indexing, Filtering & Selection:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Boolean Filtering" connects to advanced indexing with query, isin, and boolean masks. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import pandas as pd

df = pd.DataFrame({"age": [22, 35, 45, 28], "salary": [50000, 80000, 95000, 60000]})
print(df[(df["age"] > 25) & (df["salary"] > 55000)])`,
          output: `   age  salary
1   35   80000
2   45   95000`,
          keyPoints: [
            `Use & not and for element-wise logic`,
            `Wrap each condition in parentheses`,
            `isin() for membership tests`,
            `query() method for readable filters`
          ]
        },
        {
          id: `query`,
          title: `query() Method`,
          content: `df.query("age > 25 and salary > 55000") — cleaner for complex filters. Use @ for external variables.

**Why this matters for Indexing, Filtering & Selection:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Indexing, Filtering & Selection:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "query() Method" connects to advanced indexing with query, isin, and boolean masks. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import pandas as pd

df = pd.DataFrame({"x": [1, 5, 3, 8], "y": [2, 4, 6, 10]})
print(df.query("x > 2 and y < 10"))`,
          output: `   x   y
1  5   4
2  3   6`,
          keyPoints: [
            `query uses expression strings`,
            `@var references Python variable`,
            `Often faster for large DataFrames`,
            `Column names with spaces need backticks`
          ]
        },
        {
          id: `assign`,
          title: `assign() & apply()`,
          content: `assign() adds columns functionally. apply() row/column-wise — prefer vectorized ops when possible.

**Why this matters for Indexing, Filtering & Selection:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Indexing, Filtering & Selection:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "assign() & apply()" connects to advanced indexing with query, isin, and boolean masks. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import pandas as pd

df = pd.DataFrame({"a": [1, 2, 3], "b": [4, 5, 6]})
df = df.assign(total=lambda x: x["a"] + x["b"])
print(df)`,
          output: `   a  b  total
0  1  4      5
1  2  5      7
2  3  6      9`,
          keyPoints: [
            `assign returns new DataFrame — chainable`,
            `Lambda x refers to DataFrame`,
            `Vectorized ops beat apply() for speed`,
            `map() for element-wise dict/Series lookup`
          ]
        },
        {
          id: `sort`,
          title: `Sorting & Ranking`,
          content: `sort_values(by, ascending), sort_index(). rank() for ordinal ranking. nlargest, nsmallest shortcuts.

**Why this matters for Indexing, Filtering & Selection:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Indexing, Filtering & Selection:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Sorting & Ranking" connects to advanced indexing with query, isin, and boolean masks. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import pandas as pd

df = pd.DataFrame({"name": ["Bob", "Alice", "Charlie"], "score": [87, 95, 92]})
print(df.sort_values("score", ascending=False))`,
          keyPoints: [
            `sort_values for column sorting`,
            `rank handles ties with method parameter`,
            `nlargest efficient for top-k`,
            `Stable sort preserves equal element order`
          ]
        },
        {
          id: `pd-indexing-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Indexing, Filtering & Selection sits in the **data** track of the DL_Master curriculum. Advanced indexing with query, isin, and boolean masks.

Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.

For pd-indexing, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Indexing, Filtering & Selection
meta = {"topic_id": "pd-indexing", "track": "data", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `pd-indexing data beginner`,
          keyPoints: [
            `Core theory of Indexing, Filtering & Selection ties to the data track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `pd-indexing-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Indexing, Filtering & Selection. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For pd-indexing, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for pd-indexing
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("pd-indexing", "Indexing, Filtering & Selection")
print(ref.topic_id, ref.title.split()[0])`,
          output: `pd-indexing Indexing,`,
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
          id: `pd-indexing-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Indexing, Filtering & Selection often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on pd-indexing, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("pd-indexing", "Indexing, Filtering & Selection")
debug_step("section_count", 4)`,
          output: `[pd-indexing] 'Indexing, Filtering & Selection' (str)
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
          id: `pd-indexing-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Indexing, Filtering & Selection shows up wherever data skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around pd-indexing align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Indexing, Filtering & Selection
skills = ["data", "beginner", "pd-indexing"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: data, beginner, pd-indexing`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Indexing, Filtering & Selection to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-pd-idx-1`,
          question: `Filter rows where city is "NYC" or "LA".`,
          solution: `import pandas as pd
df = pd.DataFrame({"city": ["NYC", "LA", "Chicago", "NYC"]})
print(df[df["city"].isin(["NYC", "LA"])])`,
          difficulty: `easy`
        },
        {
          id: `ex-pd-idx-2`,
          question: `Add column double = value * 2 using assign.`,
          solution: `import pandas as pd
df = pd.DataFrame({"value": [1, 2, 3]})
print(df.assign(double=lambda x: x["value"] * 2))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-07`,
      references: [
        {
          id: `pandas-indexing`,
          title: `Indexing and Selecting Data`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/user_guide/indexing.html`,
          description: `loc, iloc, boolean masks, query(), and multi-index selection.`
        },
        {
          id: `pandas-getting-started`,
          title: `Getting Started with pandas`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/getting_started/index.html`,
          description: `Introductory guide to Series, DataFrames, and basic operations.`
        },
        {
          id: `kaggle-pandas`,
          title: `Kaggle Learn — Pandas`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/pandas`,
          description: `Hands-on pandas exercises for real-world data manipulation.`
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
      id: `pd-groupby`,
      title: `GroupBy & Aggregations`,
      description: `Split-apply-combine pattern for grouped analysis.`,
      level: `beginner`,
      track: `data`,
      sections: [
        {
          id: `groupby`,
          title: `groupby Basics`,
          content: `df.groupby("col") splits into groups. .agg(), .mean(), .sum(), .count() aggregate. Multiple columns: groupby(["a","b"]).

**Why this matters for GroupBy & Aggregations:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — GroupBy & Aggregations:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "groupby Basics" connects to split-apply-combine pattern for grouped analysis. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import pandas as pd

df = pd.DataFrame({
    "dept": ["Sales", "Sales", "Eng", "Eng"],
    "salary": [50000, 60000, 80000, 90000]
})
print(df.groupby("dept")["salary"].mean())`,
          output: `dept
Eng      85000.0
Sales    55000.0
Name: salary, dtype: float64`,
          keyPoints: [
            `groupby is split-apply-combine`,
            `as_index=False keeps group columns`,
            `agg accepts dict or list of functions`,
            `size() counts rows per group`
          ]
        },
        {
          id: `agg`,
          title: `Multiple Aggregations`,
          content: `.agg({"col": ["mean", "std", "count"]}) or named aggregations: .agg(avg_salary=("salary", "mean")).

**Why this matters for GroupBy & Aggregations:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — GroupBy & Aggregations:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Multiple Aggregations" connects to split-apply-combine pattern for grouped analysis. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import pandas as pd

df = pd.DataFrame({"group": ["A","A","B","B"], "val": [10, 20, 30, 40]})
print(df.groupby("group").agg(min_val=("val", "min"), max_val=("val", "max"), avg=("val", "mean")))`,
          output: `       min_val  max_val   avg
group                         
A           10       20  15.0
B           30       40  35.0`,
          keyPoints: [
            `Named aggregations produce clean column names`,
            `Multiple functions per column`,
            `transform() returns same shape as input`,
            `filter() filters groups by condition`
          ]
        },
        {
          id: `pivot`,
          title: `pivot_table & crosstab`,
          content: `pivot_table for multidimensional summaries. pd.crosstab for frequency tables.

**Why this matters for GroupBy & Aggregations:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — GroupBy & Aggregations:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "pivot_table & crosstab" connects to split-apply-combine pattern for grouped analysis. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import pandas as pd

df = pd.DataFrame({
    "date": ["2024-01", "2024-01", "2024-02", "2024-02"],
    "product": ["A", "B", "A", "B"],
    "sales": [100, 150, 120, 180]
})
print(pd.pivot_table(df, values="sales", index="date", columns="product", aggfunc="sum"))`,
          keyPoints: [
            `pivot_table handles duplicates via aggfunc`,
            `crosstab for categorical frequency analysis`,
            `margins=True adds row/column totals`,
            `melt() is inverse of pivot`
          ]
        },
        {
          id: `window`,
          title: `Rolling & Expanding Windows`,
          content: `rolling(window).mean() for moving averages. expanding() for cumulative stats. Essential for time series.

**Why this matters for GroupBy & Aggregations:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — GroupBy & Aggregations:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Rolling & Expanding Windows" connects to split-apply-combine pattern for grouped analysis. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          keyPoints: [
            `rolling for sliding window statistics`,
            `expanding for cumulative metrics`,
            `ewm for exponential weighted`,
            `shift() for lag features in ML`
          ]
        },
        {
          id: `pd-groupby-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

GroupBy & Aggregations sits in the **data** track of the DL_Master curriculum. Split-apply-combine pattern for grouped analysis.

Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.

For pd-groupby, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for GroupBy & Aggregations
meta = {"topic_id": "pd-groupby", "track": "data", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `pd-groupby data beginner`,
          keyPoints: [
            `Core theory of GroupBy & Aggregations ties to the data track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `pd-groupby-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from GroupBy & Aggregations. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For pd-groupby, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for pd-groupby
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("pd-groupby", "GroupBy & Aggregations")
print(ref.topic_id, ref.title.split()[0])`,
          output: `pd-groupby GroupBy`,
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
          id: `pd-groupby-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on GroupBy & Aggregations often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on pd-groupby, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("pd-groupby", "GroupBy & Aggregations")
debug_step("section_count", 4)`,
          output: `[pd-groupby] 'GroupBy & Aggregations' (str)
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
          id: `pd-groupby-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

GroupBy & Aggregations shows up wherever data skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around pd-groupby align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for GroupBy & Aggregations
skills = ["data", "beginner", "pd-groupby"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: data, beginner, pd-groupby`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect GroupBy & Aggregations to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-gb-1`,
          question: `Group by category and compute sum of values.`,
          solution: `import pandas as pd
df = pd.DataFrame({"cat": ["X","X","Y","Y"], "val": [1, 2, 3, 4]})
print(df.groupby("cat")["val"].sum())`,
          difficulty: `easy`
        },
        {
          id: `ex-gb-2`,
          question: `Get average score per department using named aggregation.`,
          solution: `import pandas as pd
df = pd.DataFrame({"dept": ["A","A","B"], "score": [80, 90, 85]})
print(df.groupby("dept").agg(avg_score=("score", "mean")))`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 40,
      module: `module-07`,
      references: [
        {
          id: `pandas-groupby`,
          title: `Group By: Split-Apply-Combine`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/user_guide/groupby.html`,
          description: `Grouped aggregations, transformations, and filtering patterns.`
        },
        {
          id: `pandas-getting-started`,
          title: `Getting Started with pandas`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/getting_started/index.html`,
          description: `Introductory guide to Series, DataFrames, and basic operations.`
        },
        {
          id: `kaggle-pandas`,
          title: `Kaggle Learn — Pandas`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/pandas`,
          description: `Hands-on pandas exercises for real-world data manipulation.`
        },
        {
          id: `pandas-indexing`,
          title: `Indexing and Selecting Data`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/user_guide/indexing.html`,
          description: `loc, iloc, boolean masks, query(), and multi-index selection.`
        }
      ]
    },
{
      id: `pd-merge`,
      title: `Merging, Joining & Reshaping`,
      description: `Combine DataFrames with merge, concat, join. Reshape with melt and pivot.`,
      level: `beginner`,
      track: `data`,
      sections: [
        {
          id: `merge`,
          title: `merge Operations`,
          content: `pd.merge(left, right, on="key", how="inner|outer|left|right"). SQL-like joins on column values.

**Why this matters for Merging, Joining & Reshaping:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Merging, Joining & Reshaping:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "merge Operations" connects to combine dataframes with merge, concat, join. reshape with melt and pivot. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import pandas as pd

orders = pd.DataFrame({"id": [1, 2], "product_id": [101, 102]})
products = pd.DataFrame({"product_id": [101, 102], "name": ["Widget", "Gadget"]})
print(pd.merge(orders, products, on="product_id"))`,
          output: `   id  product_id     name
0   1         101   Widget
1   2         102   Gadget`,
          keyPoints: [
            `inner join keeps matching rows only`,
            `left join keeps all left rows`,
            `validate="one_to_many" catches bad joins`,
            `indicator=True shows join source`
          ]
        },
        {
          id: `concat`,
          title: `concat & append`,
          content: `pd.concat([df1, df2], axis=0) stacks vertically. axis=1 concatenates horizontally. ignore_index resets index.

**Why this matters for Merging, Joining & Reshaping:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Merging, Joining & Reshaping:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "concat & append" connects to combine dataframes with merge, concat, join. reshape with melt and pivot. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import pandas as pd

df1 = pd.DataFrame({"A": [1, 2]})
df2 = pd.DataFrame({"A": [3, 4]})
print(pd.concat([df1, df2], ignore_index=True))`,
          output: `   A
0  1
1  2
2  3
3  4`,
          keyPoints: [
            `concat for same-structure DataFrames`,
            `join="outer" handles different columns`,
            `keys parameter creates hierarchical index`,
            `Prefer concat over deprecated append`
          ]
        },
        {
          id: `reshape`,
          title: `melt & pivot`,
          content: `melt() wide-to-long. pivot() long-to-wide. stack/unstack for MultiIndex.

**Why this matters for Merging, Joining & Reshaping:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Merging, Joining & Reshaping:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "melt & pivot" connects to combine dataframes with merge, concat, join. reshape with melt and pivot. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          keyPoints: [
            `melt essential for tidy data format`,
            `Tidy data: one row per observation`,
            `stack/unstack for MultiIndex manipulation`,
            `get_dummies for one-hot encoding`
          ]
        },
        {
          id: `join-index`,
          title: `Index-based Joins`,
          content: `df1.join(df2, on="key") or join on index. set_index before join for index alignment.

**Why this matters for Merging, Joining & Reshaping:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Merging, Joining & Reshaping:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Index-based Joins" connects to combine dataframes with merge, concat, join. reshape with melt and pivot. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          keyPoints: [
            `Set index for repeated join operations`,
            `join method on DataFrame uses indexes`,
            `align indices before arithmetic operations`,
            `reindex for explicit index alignment`
          ]
        },
        {
          id: `pd-merge-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Merging, Joining & Reshaping sits in the **data** track of the DL_Master curriculum. Combine DataFrames with merge, concat, join. Reshape with melt and pivot.

Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.

For pd-merge, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Merging, Joining & Reshaping
meta = {"topic_id": "pd-merge", "track": "data", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `pd-merge data beginner`,
          keyPoints: [
            `Core theory of Merging, Joining & Reshaping ties to the data track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `pd-merge-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Merging, Joining & Reshaping. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For pd-merge, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for pd-merge
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("pd-merge", "Merging, Joining & Reshaping")
print(ref.topic_id, ref.title.split()[0])`,
          output: `pd-merge Merging,`,
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
          id: `pd-merge-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Merging, Joining & Reshaping often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on pd-merge, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("pd-merge", "Merging, Joining & Reshaping")
debug_step("section_count", 4)`,
          output: `[pd-merge] 'Merging, Joining & Reshaping' (str)
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
          id: `pd-merge-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Merging, Joining & Reshaping shows up wherever data skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around pd-merge align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Merging, Joining & Reshaping
skills = ["data", "beginner", "pd-merge"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: data, beginner, pd-merge`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Merging, Joining & Reshaping to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-merge-1`,
          question: `Inner merge two DataFrames on id column.`,
          solution: `import pandas as pd
a = pd.DataFrame({"id": [1,2], "val": [10, 20]})
b = pd.DataFrame({"id": [1,2], "name": ["X","Y"]})
print(pd.merge(a, b, on="id"))`,
          difficulty: `easy`
        },
        {
          id: `ex-merge-2`,
          question: `Concatenate two DataFrames vertically.`,
          solution: `import pandas as pd
df1 = pd.DataFrame({"x": [1]})
df2 = pd.DataFrame({"x": [2]})
print(pd.concat([df1, df2]))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-07`,
      references: [
        {
          id: `pandas-merge`,
          title: `Merge, Join, Concatenate and Compare`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/user_guide/merging.html`,
          description: `Combining DataFrames with SQL-like join operations.`
        },
        {
          id: `pandas-getting-started`,
          title: `Getting Started with pandas`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/getting_started/index.html`,
          description: `Introductory guide to Series, DataFrames, and basic operations.`
        },
        {
          id: `kaggle-pandas`,
          title: `Kaggle Learn — Pandas`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/pandas`,
          description: `Hands-on pandas exercises for real-world data manipulation.`
        },
        {
          id: `pandas-indexing`,
          title: `Indexing and Selecting Data`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/user_guide/indexing.html`,
          description: `loc, iloc, boolean masks, query(), and multi-index selection.`
        }
      ]
    },
{
      id: `pd-missing`,
      title: `Missing Data & Time Series`,
      description: `Handle NaN values and work with datetime indices.`,
      level: `beginner`,
      track: `data`,
      sections: [
        {
          id: `missing`,
          title: `Handling Missing Data`,
          content: `isna(), notna(), dropna(), fillna(). interpolate() for gap filling. Missingness patterns matter for ML.

**Why this matters for Missing Data & Time Series:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Missing Data & Time Series:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Handling Missing Data" connects to handle nan values and work with datetime indices. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import pandas as pd
import numpy as np

df = pd.DataFrame({"A": [1, np.nan, 3], "B": [4, 5, np.nan]})
print(df.fillna({"A": df["A"].mean(), "B": 0}))`,
          output: `     A    B
0  1.0  4.0
1  2.0  5.0
2  3.0  0.0`,
          keyPoints: [
            `Never drop all missing blindly in ML`,
            `Understand MCAR, MAR, MNAR missingness`,
            `fillna with mean/median/mode or model-based`,
            `isna().sum() counts missing per column`
          ]
        },
        {
          id: `datetime`,
          title: `Datetime Operations`,
          content: `pd.to_datetime(), DatetimeIndex, .dt accessor for year/month/day. resample() for time aggregation.

**Why this matters for Missing Data & Time Series:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Missing Data & Time Series:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Datetime Operations" connects to handle nan values and work with datetime indices. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import pandas as pd

df = pd.DataFrame({
    "date": pd.to_datetime(["2024-01-01", "2024-01-15", "2024-02-01"]),
    "value": [100, 150, 200]
})
df = df.set_index("date")
print(df.resample("MS").mean())`,
          keyPoints: [
            `to_datetime parses various formats`,
            `dt accessor extracts date components`,
            `resample for time-based aggregation`,
            `shift/lag for time series features`
          ]
        },
        {
          id: `tz`,
          title: `Timezones`,
          content: `tz_localize and tz_convert for timezone-aware datetimes. Critical for global data pipelines.

**Why this matters for Missing Data & Time Series:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Missing Data & Time Series:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Timezones" connects to handle nan values and work with datetime indices. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          keyPoints: [
            `Store UTC, convert for display`,
            `tz_localize assigns timezone`,
            `tz_convert changes timezone`,
            `Ambiguous times during DST transitions`
          ]
        },
        {
          id: `ts-features`,
          title: `Time Series Features for ML`,
          content: `Lag features, rolling stats, seasonal decomposition. pandas + statsmodels for analysis.

**Why this matters for Missing Data & Time Series:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Missing Data & Time Series:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Time Series Features for ML" connects to handle nan values and work with datetime indices. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          keyPoints: [
            `Lag features capture temporal dependencies`,
            `Rolling windows for local trends`,
            `Seasonal patterns need explicit encoding`,
            `Train/test split must respect time order`
          ]
        },
        {
          id: `pd-missing-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Missing Data & Time Series sits in the **data** track of the DL_Master curriculum. Handle NaN values and work with datetime indices.

Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.

For pd-missing, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Missing Data & Time Series
meta = {"topic_id": "pd-missing", "track": "data", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `pd-missing data beginner`,
          keyPoints: [
            `Core theory of Missing Data & Time Series ties to the data track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `pd-missing-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Missing Data & Time Series. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For pd-missing, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for pd-missing
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("pd-missing", "Missing Data & Time Series")
print(ref.topic_id, ref.title.split()[0])`,
          output: `pd-missing Missing`,
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
          id: `pd-missing-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Missing Data & Time Series often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on pd-missing, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("pd-missing", "Missing Data & Time Series")
debug_step("section_count", 4)`,
          output: `[pd-missing] 'Missing Data & Time Series' (str)
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
          id: `pd-missing-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Missing Data & Time Series shows up wherever data skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around pd-missing align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Missing Data & Time Series
skills = ["data", "beginner", "pd-missing"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: data, beginner, pd-missing`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Missing Data & Time Series to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-miss-1`,
          question: `Count missing values per column.`,
          solution: `import pandas as pd
import numpy as np
df = pd.DataFrame({"A": [1, np.nan, 3], "B": [4, 5, np.nan]})
print(df.isna().sum())`,
          difficulty: `easy`
        },
        {
          id: `ex-miss-2`,
          question: `Extract year from datetime column.`,
          solution: `import pandas as pd
df = pd.DataFrame({"date": pd.to_datetime(["2024-03-15", "2023-06-01"])})
print(df["date"].dt.year.tolist())`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-07`,
      references: [
        {
          id: `pandas-missing`,
          title: `Working with Missing Data`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/user_guide/missing_data.html`,
          description: `Detecting, filling, and dropping NaN values in tabular data.`
        },
        {
          id: `pandas-timeseries`,
          title: `Time Series / Date Functionality`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/user_guide/timeseries.html`,
          description: `DatetimeIndex, resampling, and time-based aggregations.`
        },
        {
          id: `kaggle-intermediate-ml`,
          title: `Kaggle Learn — Intermediate Machine Learning`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/intermediate-machine-learning`,
          description: `Missing values, categorical variables, and pipeline best practices.`
        },
        {
          id: `pandas-getting-started`,
          title: `Getting Started with pandas`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/getting_started/index.html`,
          description: `Introductory guide to Series, DataFrames, and basic operations.`
        }
      ]
    }
];
