import type { Topic } from '../../types';

export const module08Topics: Topic[] = [
{
      id: `viz-matplotlib`,
      title: `Matplotlib Basics`,
      description: `Create line, scatter, bar, and histogram plots with pyplot and OO API.`,
      level: `beginner`,
      track: `data`,
      sections: [
        {
          id: `pyplot`,
          title: `pyplot Interface`,
          content: `import matplotlib.pyplot as plt. plt.plot(), scatter(), bar(), hist(). plt.xlabel, title, legend, show/savefig.

**Why this matters for Matplotlib Basics:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Matplotlib Basics:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "pyplot Interface" connects to create line, scatter, bar, and histogram plots with pyplot and oo api. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]
plt.plot(x, y, marker="o", label="y=2x")
plt.xlabel("x")
plt.ylabel("y")
plt.title("Linear Relationship")
plt.legend()
plt.savefig("plot.png")
print("Plot saved")`,
          output: `Plot saved`,
          keyPoints: [
            `plt.figure(figsize=(w,h)) sets size`,
            `Always label axes and add title`,
            `savefig before show in scripts`,
            `Use dpi=300 for publication quality`
          ]
        },
        {
          id: `oo-api`,
          title: `Object-Oriented API`,
          content: `fig, ax = plt.subplots() — preferred for multiple plots. ax.plot(), ax.set_xlabel(). More control than pyplot.

**Why this matters for Matplotlib Basics:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Matplotlib Basics:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Object-Oriented API" connects to create line, scatter, bar, and histogram plots with pyplot and oo api. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import matplotlib.pyplot as plt

fig, axes = plt.subplots(1, 2, figsize=(10, 4))
axes[0].bar(["A", "B", "C"], [3, 7, 5])
axes[1].hist([1,2,2,3,3,3,4], bins=4)
plt.tight_layout()
print("Subplots created")`,
          output: `Subplots created`,
          keyPoints: [
            `OO API preferred for complex figures`,
            `subplots creates grid of axes`,
            `tight_layout prevents overlap`,
            `ax object methods vs plt functions`
          ]
        },
        {
          id: `styles`,
          title: `Styles & Customization`,
          content: `plt.style.use("seaborn-v0_8"). Colors, markers, linewidth, alpha transparency. Colorblind-friendly palettes.

**Why this matters for Matplotlib Basics:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Matplotlib Basics:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Styles & Customization" connects to create line, scatter, bar, and histogram plots with pyplot and oo api. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          keyPoints: [
            `Use colorblind-safe palettes`,
            `Consistent style across project`,
            `alpha for overlapping points`,
            `Avoid chartjunk — maximize data-ink ratio`
          ]
        },
        {
          id: `anatomy`,
          title: `Figure Anatomy`,
          content: `Figure contains Axes contains Lines/Patches/Text. fig.add_subplot, GridSpec for complex layouts.

**Why this matters for Matplotlib Basics:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Matplotlib Basics:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Figure Anatomy" connects to create line, scatter, bar, and histogram plots with pyplot and oo api. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          keyPoints: [
            `Figure is top-level container`,
            `Axes is single plot area`,
            `Multiple Axes per Figure`,
            `GridSpec for irregular layouts`
          ]
        },
        {
          id: `viz-matplotlib-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Matplotlib Basics sits in the **data** track of the Data Science Master curriculum. Create line, scatter, bar, and histogram plots with pyplot and OO API.

Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.

For viz-matplotlib, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Matplotlib Basics
meta = {"topic_id": "viz-matplotlib", "track": "data", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `viz-matplotlib data beginner`,
          keyPoints: [
            `Core theory of Matplotlib Basics ties to the data track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `viz-matplotlib-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Matplotlib Basics. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For viz-matplotlib, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for viz-matplotlib
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("viz-matplotlib", "Matplotlib Basics")
print(ref.topic_id, ref.title.split()[0])`,
          output: `viz-matplotlib Matplotlib`,
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
          id: `viz-matplotlib-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Matplotlib Basics often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on viz-matplotlib, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("viz-matplotlib", "Matplotlib Basics")
debug_step("section_count", 4)`,
          output: `[viz-matplotlib] 'Matplotlib Basics' (str)
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
          id: `viz-matplotlib-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Matplotlib Basics shows up wherever data skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around viz-matplotlib align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Matplotlib Basics
skills = ["data", "beginner", "viz-matplotlib"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: data, beginner, viz-matplotlib`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Matplotlib Basics to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-mpl-1`,
          question: `Create a bar chart of categories A=5, B=3, C=7.`,
          solution: `import matplotlib.pyplot as plt
plt.bar(["A","B","C"], [5,3,7])
plt.title("Categories")
print("Bar chart created")`,
          difficulty: `easy`
        },
        {
          id: `ex-mpl-2`,
          question: `Create figure with 2 subplots side by side.`,
          solution: `import matplotlib.pyplot as plt
fig, (ax1, ax2) = plt.subplots(1, 2)
ax1.plot([1,2,3])
ax2.plot([3,2,1])
print("2 subplots created")`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 40,
      module: `module-08`,
      references: [
        {
          id: `matplotlib-pyplot`,
          title: `Matplotlib Pyplot Tutorial`,
          source: `Matplotlib`,
          type: `documentation`,
          url: `https://matplotlib.org/stable/tutorials/pyplot.html`,
          description: `Creating line, scatter, bar, and histogram plots with pyplot.`
        },
        {
          id: `matplotlib-oo`,
          title: `Matplotlib Object-Oriented Interface`,
          source: `Matplotlib`,
          type: `documentation`,
          url: `https://matplotlib.org/stable/users/explain/figure/api_interfaces.html`,
          description: `Figure and Axes API for fine-grained control over visualizations.`
        },
        {
          id: `kaggle-data-viz`,
          title: `Kaggle Learn — Data Visualization`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/data-visualization`,
          description: `Practical chart selection and storytelling with seaborn.`
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
    },
{
      id: `viz-seaborn`,
      title: `Seaborn Statistical Plots`,
      description: `High-level statistical visualizations built on matplotlib.`,
      level: `beginner`,
      track: `data`,
      sections: [
        {
          id: `distplot`,
          title: `Distribution Plots`,
          content: `sns.histplot, kdeplot, displot for distributions. rugplot for individual observations.

**Why this matters for Seaborn Statistical Plots:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Seaborn Statistical Plots:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Distribution Plots" connects to high-level statistical visualizations built on matplotlib. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np

data = np.random.normal(0, 1, 200)
sns.histplot(data, kde=True)
print("Distribution plotted")`,
          output: `Distribution plotted`,
          keyPoints: [
            `kde overlays smooth density estimate`,
            `binwidth controls histogram granularity`,
            `displot is figure-level interface`,
            `Check distribution shape before modeling`
          ]
        },
        {
          id: `relplot`,
          title: `Relational Plots`,
          content: `scatterplot, lineplot, relplot. hue for color grouping, size for third dimension.

**Why this matters for Seaborn Statistical Plots:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Seaborn Statistical Plots:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Relational Plots" connects to high-level statistical visualizations built on matplotlib. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import seaborn as sns
import pandas as pd

df = pd.DataFrame({"x": [1,2,3,4], "y": [2,4,5,8], "group": ["A","A","B","B"]})
sns.scatterplot(data=df, x="x", y="y", hue="group")
print("Scatter with hue")`,
          output: `Scatter with hue`,
          keyPoints: [
            `hue encodes categorical variable`,
            `size/style add more dimensions`,
            `relplot for faceted relational plots`,
            `Avoid overplotting with alpha/jitter`
          ]
        },
        {
          id: `catplot`,
          title: `Categorical Plots`,
          content: `boxplot, violinplot, barplot, countplot. Compare distributions across categories.

**Why this matters for Seaborn Statistical Plots:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Seaborn Statistical Plots:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Categorical Plots" connects to high-level statistical visualizations built on matplotlib. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import seaborn as sns
import pandas as pd

df = pd.DataFrame({"category": ["A","A","B","B"], "value": [1,3,2,5]})
sns.boxplot(data=df, x="category", y="value")
print("Boxplot created")`,
          keyPoints: [
            `boxplot shows quartiles and outliers`,
            `violinplot shows full distribution shape`,
            `barplot shows mean with confidence interval`,
            `order parameter controls x-axis order`
          ]
        },
        {
          id: `heatmap`,
          title: `Heatmaps & Correlation`,
          content: `sns.heatmap for correlation matrices. annot=True shows values. Essential for EDA in ML.

**Why this matters for Seaborn Statistical Plots:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Seaborn Statistical Plots:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Heatmaps & Correlation" connects to high-level statistical visualizations built on matplotlib. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import seaborn as sns
import pandas as pd

df = pd.DataFrame({"A": [1,2,3], "B": [2,4,6], "C": [5,3,1]})
sns.heatmap(df.corr(), annot=True)
print("Correlation heatmap")`,
          output: `Correlation heatmap`,
          keyPoints: [
            `corr() computes pairwise correlation`,
            `heatmap reveals multicollinearity`,
            `coolwarm diverging palette for correlations`,
            `Cluster related features visually`
          ]
        },
        {
          id: `viz-seaborn-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Seaborn Statistical Plots sits in the **data** track of the Data Science Master curriculum. High-level statistical visualizations built on matplotlib.

Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.

For viz-seaborn, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Seaborn Statistical Plots
meta = {"topic_id": "viz-seaborn", "track": "data", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `viz-seaborn data beginner`,
          keyPoints: [
            `Core theory of Seaborn Statistical Plots ties to the data track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `viz-seaborn-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Seaborn Statistical Plots. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For viz-seaborn, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for viz-seaborn
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("viz-seaborn", "Seaborn Statistical Plots")
print(ref.topic_id, ref.title.split()[0])`,
          output: `viz-seaborn Seaborn`,
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
          id: `viz-seaborn-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Seaborn Statistical Plots often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on viz-seaborn, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("viz-seaborn", "Seaborn Statistical Plots")
debug_step("section_count", 4)`,
          output: `[viz-seaborn] 'Seaborn Statistical Plots' (str)
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
          id: `viz-seaborn-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Seaborn Statistical Plots shows up wherever data skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around viz-seaborn align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Seaborn Statistical Plots
skills = ["data", "beginner", "viz-seaborn"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: data, beginner, viz-seaborn`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Seaborn Statistical Plots to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-sns-1`,
          question: `Plot histogram of 100 random normal values.`,
          solution: `import seaborn as sns
import numpy as np
sns.histplot(np.random.normal(0, 1, 100))
print("done")`,
          difficulty: `easy`
        },
        {
          id: `ex-sns-2`,
          question: `Create heatmap of 3x3 correlation matrix.`,
          solution: `import seaborn as sns
import pandas as pd
df = pd.DataFrame(np_data := [[1,0.5,0.2],[0.5,1,0.3],[0.2,0.3,1]], columns=["A","B","C"])
sns.heatmap(df, annot=True)
print("done")`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 40,
      module: `module-08`,
      references: [
        {
          id: `seaborn-tutorial`,
          title: `Seaborn Tutorial`,
          source: `Seaborn`,
          type: `documentation`,
          url: `https://seaborn.pydata.org/tutorial.html`,
          description: `Statistical visualizations built on matplotlib with elegant defaults.`
        },
        {
          id: `matplotlib-pyplot`,
          title: `Matplotlib Pyplot Tutorial`,
          source: `Matplotlib`,
          type: `documentation`,
          url: `https://matplotlib.org/stable/tutorials/pyplot.html`,
          description: `Creating line, scatter, bar, and histogram plots with pyplot.`
        },
        {
          id: `kaggle-data-viz`,
          title: `Kaggle Learn — Data Visualization`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/data-visualization`,
          description: `Practical chart selection and storytelling with seaborn.`
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
    },
{
      id: `viz-plotly`,
      title: `Plotly Interactive Viz`,
      description: `Interactive charts for exploration and dashboards.`,
      level: `beginner`,
      track: `data`,
      sections: [
        {
          id: `plotly-express`,
          title: `Plotly Express`,
          content: `px.scatter, px.line, px.bar — high-level API. Automatic interactivity: hover, zoom, pan.

**Why this matters for Plotly Interactive Viz:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Plotly Interactive Viz:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Plotly Express" connects to interactive charts for exploration and dashboards. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `import plotly.express as px
import pandas as pd

df = pd.DataFrame({"x": [1,2,3], "y": [4,5,6], "cat": ["A","B","C"]})
fig = px.scatter(df, x="x", y="y", color="cat", title="Interactive Scatter")
print(fig.data[0].type)`,
          output: `scatter`,
          keyPoints: [
            `Plotly Express for quick interactive plots`,
            `Hover tooltips automatic`,
            `Export to HTML for sharing`,
            `color/discrete_map for custom colors`
          ]
        },
        {
          id: `plotly-graph`,
          title: `Graph Objects`,
          content: `go.Figure, go.Scatter for fine control. Subplots with make_subplots. Animations with frames.

**Why this matters for Plotly Interactive Viz:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Plotly Interactive Viz:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Graph Objects" connects to interactive charts for exploration and dashboards. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          keyPoints: [
            `Graph Objects for custom charts`,
            `make_subplots for complex dashboards`,
            `Animation frames for time series`,
            `3D scatter and surface plots available`
          ]
        },
        {
          id: `dash`,
          title: `Dash Preview`,
          content: `Plotly Dash builds web dashboards in pure Python. Callbacks for interactivity.

**Why this matters for Plotly Interactive Viz:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Plotly Interactive Viz:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Dash Preview" connects to interactive charts for exploration and dashboards. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          keyPoints: [
            `Dash for production dashboards`,
            `dcc components for inputs`,
            `Callback decorators link inputs to outputs`,
            `Alternative: Streamlit for simpler apps`
          ]
        },
        {
          id: `when`,
          title: `When to Use Plotly`,
          content: `Exploration and dashboards: Plotly. Publications: Matplotlib/Seaborn. Large data: datashader.

**Why this matters for Plotly Interactive Viz:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Plotly Interactive Viz:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "When to Use Plotly" connects to interactive charts for exploration and dashboards. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          keyPoints: [
            `Plotly for interactive exploration`,
            `Matplotlib for static publication figures`,
            `Consider audience and medium`,
            `Performance degrades with millions of points`
          ]
        },
        {
          id: `viz-plotly-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Plotly Interactive Viz sits in the **data** track of the Data Science Master curriculum. Interactive charts for exploration and dashboards.

Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.

For viz-plotly, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Plotly Interactive Viz
meta = {"topic_id": "viz-plotly", "track": "data", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `viz-plotly data beginner`,
          keyPoints: [
            `Core theory of Plotly Interactive Viz ties to the data track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `viz-plotly-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Plotly Interactive Viz. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For viz-plotly, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for viz-plotly
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("viz-plotly", "Plotly Interactive Viz")
print(ref.topic_id, ref.title.split()[0])`,
          output: `viz-plotly Plotly`,
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
          id: `viz-plotly-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Plotly Interactive Viz often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on viz-plotly, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("viz-plotly", "Plotly Interactive Viz")
debug_step("section_count", 4)`,
          output: `[viz-plotly] 'Plotly Interactive Viz' (str)
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
          id: `viz-plotly-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Plotly Interactive Viz shows up wherever data skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around viz-plotly align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Plotly Interactive Viz
skills = ["data", "beginner", "viz-plotly"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: data, beginner, viz-plotly`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Plotly Interactive Viz to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-plotly-1`,
          question: `Create interactive bar chart with plotly express.`,
          solution: `import plotly.express as px
df = {"cat": ["A","B"], "val": [10, 20]}
fig = px.bar(df, x="cat", y="val")
print(len(fig.data))`,
          difficulty: `easy`
        },
        {
          id: `ex-plotly-2`,
          question: `Create line plot with x=[1,2,3], y=[1,4,9].`,
          solution: `import plotly.express as px
fig = px.line(x=[1,2,3], y=[1,4,9])
print(fig.layout.title.text)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-08`,
      references: [
        {
          id: `plotly-python`,
          title: `Plotly Python Graphing Library`,
          source: `Plotly`,
          type: `documentation`,
          url: `https://plotly.com/python/`,
          description: `Interactive charts for exploration, dashboards, and web deployment.`
        },
        {
          id: `matplotlib-pyplot`,
          title: `Matplotlib Pyplot Tutorial`,
          source: `Matplotlib`,
          type: `documentation`,
          url: `https://matplotlib.org/stable/tutorials/pyplot.html`,
          description: `Creating line, scatter, bar, and histogram plots with pyplot.`
        },
        {
          id: `kaggle-data-viz`,
          title: `Kaggle Learn — Data Visualization`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/data-visualization`,
          description: `Practical chart selection and storytelling with seaborn.`
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
    },
{
      id: `viz-design`,
      title: `Dashboard Design Principles`,
      description: `Visual encoding, chart selection, and storytelling with data.`,
      level: `beginner`,
      track: `data`,
      sections: [
        {
          id: `chart-selection`,
          title: `Choosing the Right Chart`,
          content: `Comparison: bar. Distribution: histogram/violin. Relationship: scatter. Composition: stacked bar/pie (sparingly). Time: line.

**Why this matters for Dashboard Design Principles:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Dashboard Design Principles:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Choosing the Right Chart" connects to visual encoding, chart selection, and storytelling with data. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          keyPoints: [
            `Match chart type to analytical question`,
            `Bar charts start at zero`,
            `Avoid pie charts for many categories`,
            `Small multiples for comparison across groups`
          ]
        },
        {
          id: `color`,
          title: `Color Theory`,
          content: `Sequential for magnitude. Diverging for deviation from midpoint. Categorical for distinct groups. Max 6-8 categorical colors.

**Why this matters for Dashboard Design Principles:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Dashboard Design Principles:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Color Theory" connects to visual encoding, chart selection, and storytelling with data. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          keyPoints: [
            `Colorblind-safe: viridis, ColorBrewer`,
            `Never use color as only differentiator`,
            `Consistent color mapping across charts`,
            `Highlight key data with accent color`
          ]
        },
        {
          id: `storytelling`,
          title: `Data Storytelling`,
          content: `Lead with insight, not chart. Annotate key points. Remove clutter. One message per visualization.

**Why this matters for Dashboard Design Principles:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Dashboard Design Principles:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Data Storytelling" connects to visual encoding, chart selection, and storytelling with data. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          keyPoints: [
            `Title states the insight not the data`,
            `Remove gridlines and borders if not needed`,
            `Direct labeling beats legends`,
            `Guide viewer eye with annotations`
          ]
        },
        {
          id: `eda-workflow`,
          title: `EDA Visualization Workflow`,
          content: `Univariate → bivariate → multivariate. Check distributions, correlations, outliers, missing patterns before modeling.

**Why this matters for Dashboard Design Principles:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Dashboard Design Principles:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "EDA Visualization Workflow" connects to visual encoding, chart selection, and storytelling with data. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          keyPoints: [
            `pairplot for multivariate overview`,
            `Check class balance in classification`,
            `Visualize residuals after modeling`,
            `Document findings for reproducibility`
          ]
        },
        {
          id: `viz-design-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Dashboard Design Principles sits in the **data** track of the Data Science Master curriculum. Visual encoding, chart selection, and storytelling with data.

Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.

For viz-design, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Dashboard Design Principles
meta = {"topic_id": "viz-design", "track": "data", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `viz-design data beginner`,
          keyPoints: [
            `Core theory of Dashboard Design Principles ties to the data track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `viz-design-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Dashboard Design Principles. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For viz-design, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for viz-design
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("viz-design", "Dashboard Design Principles")
print(ref.topic_id, ref.title.split()[0])`,
          output: `viz-design Dashboard`,
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
          id: `viz-design-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Dashboard Design Principles often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on viz-design, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("viz-design", "Dashboard Design Principles")
debug_step("section_count", 4)`,
          output: `[viz-design] 'Dashboard Design Principles' (str)
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
          id: `viz-design-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Dashboard Design Principles shows up wherever data skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around viz-design align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Dashboard Design Principles
skills = ["data", "beginner", "viz-design"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: data, beginner, viz-design`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Dashboard Design Principles to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-design-1`,
          question: `List 3 chart types for showing distribution, trend, and comparison.`,
          solution: `charts = {"distribution": "histogram", "trend": "line", "comparison": "bar"}
print(charts)`,
          difficulty: `easy`
        },
        {
          id: `ex-design-2`,
          question: `Write EDA checklist as a Python list of 5 items.`,
          solution: `eda_checklist = ["missing values", "distributions", "correlations", "outliers", "class balance"]
print(len(eda_checklist))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-08`,
      references: [
        {
          id: `tufte-visual-display`,
          title: `The Visual Display of Quantitative Information`,
          source: `Edward Tufte`,
          type: `book`,
          url: `https://www.edwardtufte.com/books/vdqi/`,
          description: `Classic principles of honest, effective data visualization design.`
        },
        {
          id: `kaggle-data-viz`,
          title: `Kaggle Learn — Data Visualization`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/data-visualization`,
          description: `Practical chart selection and storytelling with seaborn.`
        },
        {
          id: `seaborn-tutorial`,
          title: `Seaborn Tutorial`,
          source: `Seaborn`,
          type: `documentation`,
          url: `https://seaborn.pydata.org/tutorial.html`,
          description: `Statistical visualizations built on matplotlib with elegant defaults.`
        },
        {
          id: `matplotlib-pyplot`,
          title: `Matplotlib Pyplot Tutorial`,
          source: `Matplotlib`,
          type: `documentation`,
          url: `https://matplotlib.org/stable/tutorials/pyplot.html`,
          description: `Creating line, scatter, bar, and histogram plots with pyplot.`
        }
      ]
    },
{
      id: `viz-specialized`,
      title: `Geospatial & Specialized Charts`,
      description: `Maps, network graphs, and domain-specific visualizations.`,
      level: `beginner`,
      track: `data`,
      sections: [
        {
          id: `geopandas`,
          title: `Geospatial Visualization`,
          content: `GeoPandas extends pandas with geometry. choropleth maps, point maps. folium for interactive maps.

**Why this matters for Geospatial & Specialized Charts:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Geospatial & Specialized Charts:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Geospatial Visualization" connects to maps, network graphs, and domain-specific visualizations. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          keyPoints: [
            `GeoPandas for shapefile/GeoJSON data`,
            `folium for interactive Leaflet maps`,
            `Projections matter for accurate area comparison`,
            `Geopy for geocoding addresses`
          ]
        },
        {
          id: `network`,
          title: `Network Graphs`,
          content: `networkx + matplotlib/plotly for graph visualization. Nodes and edges for relationship data.

**Why this matters for Geospatial & Specialized Charts:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Geospatial & Specialized Charts:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Network Graphs" connects to maps, network graphs, and domain-specific visualizations. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          keyPoints: [
            `networkx for graph algorithms`,
            `Layout algorithms affect readability`,
            `Node size/color encode attributes`,
            `Useful for social and knowledge graphs`
          ]
        },
        {
          id: `ml-viz`,
          title: `ML-Specific Visualizations`,
          content: `Confusion matrix heatmap, ROC curves, learning curves, feature importance bar charts, decision boundaries.

**Why this matters for Geospatial & Specialized Charts:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Geospatial & Specialized Charts:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "ML-Specific Visualizations" connects to maps, network graphs, and domain-specific visualizations. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          example: `from sklearn.metrics import confusion_matrix
import numpy as np

y_true = [0, 1, 0, 1, 0]
y_pred = [0, 1, 1, 1, 0]
print(confusion_matrix(y_true, y_pred))`,
          output: `[[2 0]
 [1 2]]`,
          keyPoints: [
            `Confusion matrix for classification errors`,
            `ROC-AUC visualizes threshold tradeoffs`,
            `Learning curves diagnose bias/variance`,
            `SHAP summary plots for feature importance`
          ]
        },
        {
          id: `tools`,
          title: `Specialized Tools`,
          content: `datashader for big data viz. plotnine (ggplot2 port). altair for declarative viz. Choose tool for scale and audience.

**Why this matters for Geospatial & Specialized Charts:** Data manipulation skills directly determine the quality of downstream models. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Geospatial & Specialized Charts:** Data quality and reproducible transforms determine whether models learn signal or noise. The section "Specialized Tools" connects to maps, network graphs, and domain-specific visualizations. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.…`,
          keyPoints: [
            `datashader aggregates millions of points`,
            `Altair declarative grammar of graphics`,
            `plotnine familiar to R users`,
            `Tool choice depends on data scale and output medium`
          ]
        },
        {
          id: `viz-specialized-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Geospatial & Specialized Charts sits in the **data** track of the Data Science Master curriculum. Maps, network graphs, and domain-specific visualizations.

Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.

For viz-specialized, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Geospatial & Specialized Charts
meta = {"topic_id": "viz-specialized", "track": "data", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `viz-specialized data beginner`,
          keyPoints: [
            `Core theory of Geospatial & Specialized Charts ties to the data track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `viz-specialized-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Geospatial & Specialized Charts. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For viz-specialized, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for viz-specialized
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("viz-specialized", "Geospatial & Specialized Charts")
print(ref.topic_id, ref.title.split()[0])`,
          output: `viz-specialized Geospatial`,
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
          id: `viz-specialized-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Geospatial & Specialized Charts often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on viz-specialized, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("viz-specialized", "Geospatial & Specialized Charts")
debug_step("section_count", 4)`,
          output: `[viz-specialized] 'Geospatial & Specialized Charts' (str)
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
          id: `viz-specialized-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Geospatial & Specialized Charts shows up wherever data skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around viz-specialized align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Geospatial & Specialized Charts
skills = ["data", "beginner", "viz-specialized"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: data, beginner, viz-specialized`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Geospatial & Specialized Charts to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-spec-1`,
          question: `Compute confusion matrix for y_true=[1,0,1,1], y_pred=[1,0,0,1].`,
          solution: `from sklearn.metrics import confusion_matrix
print(confusion_matrix([1,0,1,1], [1,0,0,1]))`,
          difficulty: `easy`
        },
        {
          id: `ex-spec-2`,
          question: `List 3 ML-specific visualization types.`,
          solution: `print(["confusion matrix", "ROC curve", "learning curve"])`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-08`,
      references: [
        {
          id: `plotly-python`,
          title: `Plotly Python Graphing Library`,
          source: `Plotly`,
          type: `documentation`,
          url: `https://plotly.com/python/`,
          description: `Interactive charts for exploration, dashboards, and web deployment.`
        },
        {
          id: `seaborn-tutorial`,
          title: `Seaborn Tutorial`,
          source: `Seaborn`,
          type: `documentation`,
          url: `https://seaborn.pydata.org/tutorial.html`,
          description: `Statistical visualizations built on matplotlib with elegant defaults.`
        },
        {
          id: `tufte-visual-display`,
          title: `The Visual Display of Quantitative Information`,
          source: `Edward Tufte`,
          type: `book`,
          url: `https://www.edwardtufte.com/books/vdqi/`,
          description: `Classic principles of honest, effective data visualization design.`
        },
        {
          id: `matplotlib-oo`,
          title: `Matplotlib Object-Oriented Interface`,
          source: `Matplotlib`,
          type: `documentation`,
          url: `https://matplotlib.org/stable/users/explain/figure/api_interfaces.html`,
          description: `Figure and Axes API for fine-grained control over visualizations.`
        }
      ]
    }
];
