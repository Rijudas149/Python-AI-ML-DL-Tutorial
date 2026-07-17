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
          content: `**pyplot Interface** — what you need to know:

- **Core idea:** Create line, scatter, bar, and histogram plots with pyplot and OO API.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

import matplotlib.pyplot as plt. plt.plot(), scatter(), bar(), hist(). plt.xlabel, title, legend, show/savefig.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **pyplot Interface** directly affects how confidently you can build, debug, and ship data projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Profile dtypes, null rates, and cardinality before any modeling step.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Train/test leakage, silent dtype coercion, and Cartesian joins that explode row counts.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
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
            `Use dpi=300 for publication quality`,
            `pyplot Interface is a foundational piece of Matplotlib Basics`,
            `Connect this section to the data track and beginner expectations`
          ],
          pseudoCode: `CONCEPT: pyplot Interface

Study checklist:
  1. plt.figure(figsize=(w,h)) sets size
  2. Always label axes and add title
  3. savefig before show in scripts
  4. Use dpi=300 for publication quality
  5. pyplot Interface is a foundational piece of Matplotlib Basics
  6. Connect this section to the data track and beginner expectations

Topic: Matplotlib Basics
Track: data | Level: beginner`
        },
        {
          id: `oo-api`,
          title: `Object-Oriented API`,
          content: `**Object-Oriented API** — what you need to know:

- **Core idea:** Create line, scatter, bar, and histogram plots with pyplot and OO API.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

fig, ax = plt.subplots() — preferred for multiple plots. ax.plot(), ax.set_xlabel(). More control than pyplot.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Object-Oriented API** directly affects how confidently you can build, debug, and ship data projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Profile dtypes, null rates, and cardinality before any modeling step.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Train/test leakage, silent dtype coercion, and Cartesian joins that explode row counts.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
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
            `ax object methods vs plt functions`,
            `Object-Oriented API is a foundational piece of Matplotlib Basics`,
            `Connect this section to the data track and beginner expectations`
          ],
          pseudoCode: `CONCEPT: Object-Oriented API

Study checklist:
  1. OO API preferred for complex figures
  2. subplots creates grid of axes
  3. tight_layout prevents overlap
  4. ax object methods vs plt functions
  5. Object-Oriented API is a foundational piece of Matplotlib Basics
  6. Connect this section to the data track and beginner expectations

Topic: Matplotlib Basics
Track: data | Level: beginner`
        },
        {
          id: `styles`,
          title: `Styles & Customization`,
          content: `**Styles & Customization** — what you need to know:

- **Core idea:** Create line, scatter, bar, and histogram plots with pyplot and OO API.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

plt.style.use("seaborn-v0_8"). Colors, markers, linewidth, alpha transparency. Colorblind-friendly palettes.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Styles & Customization** directly affects how confidently you can build, debug, and ship data projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Professional habits:**

- Profile dtypes, null rates, and cardinality before any modeling step.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Train/test leakage, silent dtype coercion, and Cartesian joins that explode row counts.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          keyPoints: [
            `Use colorblind-safe palettes`,
            `Consistent style across project`,
            `alpha for overlapping points`,
            `Avoid chartjunk — maximize data-ink ratio`,
            `Styles & Customization is a foundational piece of Matplotlib Basics`,
            `Connect this section to the data track and beginner expectations`
          ],
          example: `# Concept check: Styles & Customization
meta = {
    "topic": "viz-matplotlib",
    "section": "styles",
    "track": "data",
    "level": "beginner",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: viz-matplotlib
section: styles
track: data
level: beginner`,
          pseudoCode: `CONCEPT: Styles & Customization

Study checklist:
  1. Use colorblind-safe palettes
  2. Consistent style across project
  3. alpha for overlapping points
  4. Avoid chartjunk — maximize data-ink ratio
  5. Styles & Customization is a foundational piece of Matplotlib Basics
  6. Connect this section to the data track and beginner expectations

Topic: Matplotlib Basics
Track: data | Level: beginner`
        },
        {
          id: `anatomy`,
          title: `Figure Anatomy`,
          content: `**Figure Anatomy** — what you need to know:

- **Core idea:** Create line, scatter, bar, and histogram plots with pyplot and OO API.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Figure contains Axes contains Lines/Patches/Text. fig.add_subplot, GridSpec for complex layouts.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Figure Anatomy** directly affects how confidently you can build, debug, and ship data projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Professional habits:**

- Profile dtypes, null rates, and cardinality before any modeling step.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Train/test leakage, silent dtype coercion, and Cartesian joins that explode row counts.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          keyPoints: [
            `Figure is top-level container`,
            `Axes is single plot area`,
            `Multiple Axes per Figure`,
            `GridSpec for irregular layouts`,
            `Figure Anatomy is a foundational piece of Matplotlib Basics`,
            `Connect this section to the data track and beginner expectations`
          ],
          example: `# Concept check: Figure Anatomy
meta = {
    "topic": "viz-matplotlib",
    "section": "anatomy",
    "track": "data",
    "level": "beginner",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: viz-matplotlib
section: anatomy
track: data
level: beginner`,
          pseudoCode: `CONCEPT: Figure Anatomy

Study checklist:
  1. Figure is top-level container
  2. Axes is single plot area
  3. Multiple Axes per Figure
  4. GridSpec for irregular layouts
  5. Figure Anatomy is a foundational piece of Matplotlib Basics
  6. Connect this section to the data track and beginner expectations

Topic: Matplotlib Basics
Track: data | Level: beginner`
        },
        {
          id: `viz-matplotlib-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Matplotlib Basics** sits in the **data** track of the Data Science Master curriculum. Create line, scatter, bar, and histogram plots with pyplot and OO API.

**Theoretical foundation:**

- Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling.
- Every aggregation encodes assumptions about granularity and time.

For **viz-matplotlib**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the beginner level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
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
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Matplotlib Basics ties to the data track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Matplotlib Basics
Track: data | Level: beginner`
        },
        {
          id: `viz-matplotlib-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Matplotlib Basics**. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **viz-matplotlib**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
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
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with data ecosystem conventions

Topic: Matplotlib Basics
Track: data | Level: beginner`
        },
        {
          id: `viz-matplotlib-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Matplotlib Basics** often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on **viz-matplotlib**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:**

- The best debuggers narrow the search space in minutes by changing one variable at a time.`,
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
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: Matplotlib Basics
Track: data | Level: beginner`
        },
        {
          id: `viz-matplotlib-real-world`,
          title: `Real-World Applications`,
          content: `**Matplotlib Basics** shows up wherever **data** skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around **viz-matplotlib** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
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
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Matplotlib Basics to adjacent topics in the same track

Topic: Matplotlib Basics
Track: data | Level: beginner`
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
      estimatedMinutes: 124,
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
          content: `**Distribution Plots** — what you need to know:

- **Core idea:** High-level statistical visualizations built on matplotlib.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

sns.histplot, kdeplot, displot for distributions. rugplot for individual observations.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Distribution Plots** directly affects how confidently you can build, debug, and ship data projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Profile dtypes, null rates, and cardinality before any modeling step.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Train/test leakage, silent dtype coercion, and Cartesian joins that explode row counts.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
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
            `Check distribution shape before modeling`,
            `Distribution Plots is a foundational piece of Seaborn Statistical Plots`,
            `Connect this section to the data track and beginner expectations`
          ],
          pseudoCode: `CONCEPT: Distribution Plots

Study checklist:
  1. kde overlays smooth density estimate
  2. binwidth controls histogram granularity
  3. displot is figure-level interface
  4. Check distribution shape before modeling
  5. Distribution Plots is a foundational piece of Seaborn Statistical Plots
  6. Connect this section to the data track and beginner expectations

Topic: Seaborn Statistical Plots
Track: data | Level: beginner`
        },
        {
          id: `relplot`,
          title: `Relational Plots`,
          content: `**Relational Plots** — what you need to know:

- **Core idea:** High-level statistical visualizations built on matplotlib.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

scatterplot, lineplot, relplot. hue for color grouping, size for third dimension.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Relational Plots** directly affects how confidently you can build, debug, and ship data projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Profile dtypes, null rates, and cardinality before any modeling step.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Train/test leakage, silent dtype coercion, and Cartesian joins that explode row counts.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
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
            `Avoid overplotting with alpha/jitter`,
            `Relational Plots is a foundational piece of Seaborn Statistical Plots`,
            `Connect this section to the data track and beginner expectations`
          ],
          pseudoCode: `CONCEPT: Relational Plots

Study checklist:
  1. hue encodes categorical variable
  2. size/style add more dimensions
  3. relplot for faceted relational plots
  4. Avoid overplotting with alpha/jitter
  5. Relational Plots is a foundational piece of Seaborn Statistical Plots
  6. Connect this section to the data track and beginner expectations

Topic: Seaborn Statistical Plots
Track: data | Level: beginner`
        },
        {
          id: `catplot`,
          title: `Categorical Plots`,
          content: `**Categorical Plots** — what you need to know:

- **Core idea:** High-level statistical visualizations built on matplotlib.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

boxplot, violinplot, barplot, countplot. Compare distributions across categories.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Categorical Plots** directly affects how confidently you can build, debug, and ship data projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Profile dtypes, null rates, and cardinality before any modeling step.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Train/test leakage, silent dtype coercion, and Cartesian joins that explode row counts.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          example: `import seaborn as sns
import pandas as pd

df = pd.DataFrame({"category": ["A","A","B","B"], "value": [1,3,2,5]})
sns.boxplot(data=df, x="category", y="value")
print("Boxplot created")`,
          keyPoints: [
            `boxplot shows quartiles and outliers`,
            `violinplot shows full distribution shape`,
            `barplot shows mean with confidence interval`,
            `order parameter controls x-axis order`,
            `Categorical Plots is a foundational piece of Seaborn Statistical Plots`,
            `Connect this section to the data track and beginner expectations`
          ],
          pseudoCode: `CONCEPT: Categorical Plots

Study checklist:
  1. boxplot shows quartiles and outliers
  2. violinplot shows full distribution shape
  3. barplot shows mean with confidence interval
  4. order parameter controls x-axis order
  5. Categorical Plots is a foundational piece of Seaborn Statistical Plots
  6. Connect this section to the data track and beginner expectations

Topic: Seaborn Statistical Plots
Track: data | Level: beginner`
        },
        {
          id: `heatmap`,
          title: `Heatmaps & Correlation`,
          content: `**Heatmaps & Correlation** — what you need to know:

- **Core idea:** High-level statistical visualizations built on matplotlib.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

sns.heatmap for correlation matrices. annot=True shows values. Essential for EDA in ML.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Heatmaps & Correlation** directly affects how confidently you can build, debug, and ship data projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Profile dtypes, null rates, and cardinality before any modeling step.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Train/test leakage, silent dtype coercion, and Cartesian joins that explode row counts.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
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
            `Cluster related features visually`,
            `Heatmaps & Correlation is a foundational piece of Seaborn Statistical Plots`,
            `Connect this section to the data track and beginner expectations`
          ],
          pseudoCode: `CONCEPT: Heatmaps & Correlation

Study checklist:
  1. corr() computes pairwise correlation
  2. heatmap reveals multicollinearity
  3. coolwarm diverging palette for correlations
  4. Cluster related features visually
  5. Heatmaps & Correlation is a foundational piece of Seaborn Statistical Plots
  6. Connect this section to the data track and beginner expectations

Topic: Seaborn Statistical Plots
Track: data | Level: beginner`
        },
        {
          id: `viz-seaborn-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Seaborn Statistical Plots** sits in the **data** track of the Data Science Master curriculum. High-level statistical visualizations built on matplotlib.

**Theoretical foundation:**

- Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling.
- Every aggregation encodes assumptions about granularity and time.

For **viz-seaborn**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the beginner level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
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
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Seaborn Statistical Plots ties to the data track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Seaborn Statistical Plots
Track: data | Level: beginner`
        },
        {
          id: `viz-seaborn-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Seaborn Statistical Plots**. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **viz-seaborn**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
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
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with data ecosystem conventions

Topic: Seaborn Statistical Plots
Track: data | Level: beginner`
        },
        {
          id: `viz-seaborn-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Seaborn Statistical Plots** often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on **viz-seaborn**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:**

- The best debuggers narrow the search space in minutes by changing one variable at a time.`,
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
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: Seaborn Statistical Plots
Track: data | Level: beginner`
        },
        {
          id: `viz-seaborn-real-world`,
          title: `Real-World Applications`,
          content: `**Seaborn Statistical Plots** shows up wherever **data** skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around **viz-seaborn** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
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
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Seaborn Statistical Plots to adjacent topics in the same track

Topic: Seaborn Statistical Plots
Track: data | Level: beginner`
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
      estimatedMinutes: 124,
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
          content: `**Plotly Express** — what you need to know:

- **Core idea:** Interactive charts for exploration and dashboards.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

px.scatter, px.line, px.bar — high-level API. Automatic interactivity: hover, zoom, pan.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Plotly Express** directly affects how confidently you can build, debug, and ship data projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Profile dtypes, null rates, and cardinality before any modeling step.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Train/test leakage, silent dtype coercion, and Cartesian joins that explode row counts.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
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
            `color/discrete_map for custom colors`,
            `Plotly Express is a foundational piece of Plotly Interactive Viz`,
            `Connect this section to the data track and beginner expectations`
          ],
          pseudoCode: `CONCEPT: Plotly Express

Study checklist:
  1. Plotly Express for quick interactive plots
  2. Hover tooltips automatic
  3. Export to HTML for sharing
  4. color/discrete_map for custom colors
  5. Plotly Express is a foundational piece of Plotly Interactive Viz
  6. Connect this section to the data track and beginner expectations

Topic: Plotly Interactive Viz
Track: data | Level: beginner`
        },
        {
          id: `plotly-graph`,
          title: `Graph Objects`,
          content: `**Graph Objects** — what you need to know:

- **Core idea:** Interactive charts for exploration and dashboards.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

go.Figure, go.Scatter for fine control. Subplots with make_subplots. Animations with frames.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Graph Objects** directly affects how confidently you can build, debug, and ship data projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Professional habits:**

- Profile dtypes, null rates, and cardinality before any modeling step.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Train/test leakage, silent dtype coercion, and Cartesian joins that explode row counts.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          keyPoints: [
            `Graph Objects for custom charts`,
            `make_subplots for complex dashboards`,
            `Animation frames for time series`,
            `3D scatter and surface plots available`,
            `Graph Objects is a foundational piece of Plotly Interactive Viz`,
            `Connect this section to the data track and beginner expectations`
          ],
          example: `# Concept check: Graph Objects
meta = {
    "topic": "viz-plotly",
    "section": "plotly-graph",
    "track": "data",
    "level": "beginner",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: viz-plotly
section: plotly-graph
track: data
level: beginner`,
          pseudoCode: `CONCEPT: Graph Objects

Study checklist:
  1. Graph Objects for custom charts
  2. make_subplots for complex dashboards
  3. Animation frames for time series
  4. 3D scatter and surface plots available
  5. Graph Objects is a foundational piece of Plotly Interactive Viz
  6. Connect this section to the data track and beginner expectations

Topic: Plotly Interactive Viz
Track: data | Level: beginner`
        },
        {
          id: `dash`,
          title: `Dash Preview`,
          content: `**Dash Preview** — what you need to know:

- **Core idea:** Interactive charts for exploration and dashboards.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Plotly Dash builds web dashboards in pure Python. Callbacks for interactivity.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Dash Preview** directly affects how confidently you can build, debug, and ship data projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Professional habits:**

- Profile dtypes, null rates, and cardinality before any modeling step.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Train/test leakage, silent dtype coercion, and Cartesian joins that explode row counts.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          keyPoints: [
            `Dash for production dashboards`,
            `dcc components for inputs`,
            `Callback decorators link inputs to outputs`,
            `Alternative: Streamlit for simpler apps`,
            `Dash Preview is a foundational piece of Plotly Interactive Viz`,
            `Connect this section to the data track and beginner expectations`
          ],
          example: `# Concept check: Dash Preview
meta = {
    "topic": "viz-plotly",
    "section": "dash",
    "track": "data",
    "level": "beginner",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: viz-plotly
section: dash
track: data
level: beginner`,
          pseudoCode: `CONCEPT: Dash Preview

Study checklist:
  1. Dash for production dashboards
  2. dcc components for inputs
  3. Callback decorators link inputs to outputs
  4. Alternative: Streamlit for simpler apps
  5. Dash Preview is a foundational piece of Plotly Interactive Viz
  6. Connect this section to the data track and beginner expectations

Topic: Plotly Interactive Viz
Track: data | Level: beginner`
        },
        {
          id: `when`,
          title: `When to Use Plotly`,
          content: `**When to Use Plotly** — what you need to know:

- **Core idea:** Interactive charts for exploration and dashboards.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Exploration and dashboards: Plotly. Publications: Matplotlib/Seaborn. Large data: datashader.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **When to Use Plotly** directly affects how confidently you can build, debug, and ship data projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Professional habits:**

- Profile dtypes, null rates, and cardinality before any modeling step.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Train/test leakage, silent dtype coercion, and Cartesian joins that explode row counts.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          keyPoints: [
            `Plotly for interactive exploration`,
            `Matplotlib for static publication figures`,
            `Consider audience and medium`,
            `Performance degrades with millions of points`,
            `When to Use Plotly is a foundational piece of Plotly Interactive Viz`,
            `Connect this section to the data track and beginner expectations`
          ],
          example: `# Concept check: When to Use Plotly
meta = {
    "topic": "viz-plotly",
    "section": "when",
    "track": "data",
    "level": "beginner",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: viz-plotly
section: when
track: data
level: beginner`,
          pseudoCode: `CONCEPT: When to Use Plotly

Study checklist:
  1. Plotly for interactive exploration
  2. Matplotlib for static publication figures
  3. Consider audience and medium
  4. Performance degrades with millions of points
  5. When to Use Plotly is a foundational piece of Plotly Interactive Viz
  6. Connect this section to the data track and beginner expectations

Topic: Plotly Interactive Viz
Track: data | Level: beginner`
        },
        {
          id: `viz-plotly-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Plotly Interactive Viz** sits in the **data** track of the Data Science Master curriculum. Interactive charts for exploration and dashboards.

**Theoretical foundation:**

- Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling.
- Every aggregation encodes assumptions about granularity and time.

For **viz-plotly**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the beginner level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
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
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Plotly Interactive Viz ties to the data track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Plotly Interactive Viz
Track: data | Level: beginner`
        },
        {
          id: `viz-plotly-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Plotly Interactive Viz**. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **viz-plotly**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
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
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with data ecosystem conventions

Topic: Plotly Interactive Viz
Track: data | Level: beginner`
        },
        {
          id: `viz-plotly-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Plotly Interactive Viz** often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on **viz-plotly**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:**

- The best debuggers narrow the search space in minutes by changing one variable at a time.`,
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
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: Plotly Interactive Viz
Track: data | Level: beginner`
        },
        {
          id: `viz-plotly-real-world`,
          title: `Real-World Applications`,
          content: `**Plotly Interactive Viz** shows up wherever **data** skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around **viz-plotly** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
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
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Plotly Interactive Viz to adjacent topics in the same track

Topic: Plotly Interactive Viz
Track: data | Level: beginner`
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
      estimatedMinutes: 124,
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
          content: `**Choosing the Right Chart** — what you need to know:

- **Core idea:** Visual encoding, chart selection, and storytelling with data.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Comparison: bar. Distribution: histogram/violin. Relationship: scatter. Composition: stacked bar/pie (sparingly). Time: line.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Choosing the Right Chart** directly affects how confidently you can build, debug, and ship data projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Professional habits:**

- Profile dtypes, null rates, and cardinality before any modeling step.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Train/test leakage, silent dtype coercion, and Cartesian joins that explode row counts.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          keyPoints: [
            `Match chart type to analytical question`,
            `Bar charts start at zero`,
            `Avoid pie charts for many categories`,
            `Small multiples for comparison across groups`,
            `Choosing the Right Chart is a foundational piece of Dashboard Design Principles`,
            `Connect this section to the data track and beginner expectations`
          ],
          example: `# Concept check: Choosing the Right Chart
meta = {
    "topic": "viz-design",
    "section": "chart-selection",
    "track": "data",
    "level": "beginner",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: viz-design
section: chart-selection
track: data
level: beginner`,
          pseudoCode: `CONCEPT: Choosing the Right Chart

Study checklist:
  1. Match chart type to analytical question
  2. Bar charts start at zero
  3. Avoid pie charts for many categories
  4. Small multiples for comparison across groups
  5. Choosing the Right Chart is a foundational piece of Dashboard Design Principles
  6. Connect this section to the data track and beginner expectations

Topic: Dashboard Design Principles
Track: data | Level: beginner`
        },
        {
          id: `color`,
          title: `Color Theory`,
          content: `**Color Theory** — what you need to know:

- **Core idea:** Visual encoding, chart selection, and storytelling with data.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Sequential for magnitude. Diverging for deviation from midpoint. Categorical for distinct groups. Max 6-8 categorical colors.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Color Theory** directly affects how confidently you can build, debug, and ship data projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Professional habits:**

- Profile dtypes, null rates, and cardinality before any modeling step.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Train/test leakage, silent dtype coercion, and Cartesian joins that explode row counts.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          keyPoints: [
            `Colorblind-safe: viridis, ColorBrewer`,
            `Never use color as only differentiator`,
            `Consistent color mapping across charts`,
            `Highlight key data with accent color`,
            `Color Theory is a foundational piece of Dashboard Design Principles`,
            `Connect this section to the data track and beginner expectations`
          ],
          example: `# Concept check: Color Theory
meta = {
    "topic": "viz-design",
    "section": "color",
    "track": "data",
    "level": "beginner",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: viz-design
section: color
track: data
level: beginner`,
          pseudoCode: `CONCEPT: Color Theory

Study checklist:
  1. Colorblind-safe: viridis, ColorBrewer
  2. Never use color as only differentiator
  3. Consistent color mapping across charts
  4. Highlight key data with accent color
  5. Color Theory is a foundational piece of Dashboard Design Principles
  6. Connect this section to the data track and beginner expectations

Topic: Dashboard Design Principles
Track: data | Level: beginner`
        },
        {
          id: `storytelling`,
          title: `Data Storytelling`,
          content: `**Data Storytelling** — what you need to know:

- **Core idea:** Visual encoding, chart selection, and storytelling with data.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Lead with insight, not chart. Annotate key points. Remove clutter. One message per visualization.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Data Storytelling** directly affects how confidently you can build, debug, and ship data projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Professional habits:**

- Profile dtypes, null rates, and cardinality before any modeling step.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Train/test leakage, silent dtype coercion, and Cartesian joins that explode row counts.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          keyPoints: [
            `Title states the insight not the data`,
            `Remove gridlines and borders if not needed`,
            `Direct labeling beats legends`,
            `Guide viewer eye with annotations`,
            `Data Storytelling is a foundational piece of Dashboard Design Principles`,
            `Connect this section to the data track and beginner expectations`
          ],
          example: `# Concept check: Data Storytelling
meta = {
    "topic": "viz-design",
    "section": "storytelling",
    "track": "data",
    "level": "beginner",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: viz-design
section: storytelling
track: data
level: beginner`,
          pseudoCode: `CONCEPT: Data Storytelling

Study checklist:
  1. Title states the insight not the data
  2. Remove gridlines and borders if not needed
  3. Direct labeling beats legends
  4. Guide viewer eye with annotations
  5. Data Storytelling is a foundational piece of Dashboard Design Principles
  6. Connect this section to the data track and beginner expectations

Topic: Dashboard Design Principles
Track: data | Level: beginner`
        },
        {
          id: `eda-workflow`,
          title: `EDA Visualization Workflow`,
          content: `**EDA Visualization Workflow** — what you need to know:

- **Core idea:** Visual encoding, chart selection, and storytelling with data.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Univariate → bivariate → multivariate. Check distributions, correlations, outliers, missing patterns before modeling.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **EDA Visualization Workflow** directly affects how confidently you can build, debug, and ship data projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Professional habits:**

- Profile dtypes, null rates, and cardinality before any modeling step.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Train/test leakage, silent dtype coercion, and Cartesian joins that explode row counts.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          keyPoints: [
            `pairplot for multivariate overview`,
            `Check class balance in classification`,
            `Visualize residuals after modeling`,
            `Document findings for reproducibility`,
            `EDA Visualization Workflow is a foundational piece of Dashboard Design Principles`,
            `Connect this section to the data track and beginner expectations`
          ],
          example: `# Concept check: EDA Visualization Workflow
meta = {
    "topic": "viz-design",
    "section": "eda-workflow",
    "track": "data",
    "level": "beginner",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: viz-design
section: eda-workflow
track: data
level: beginner`,
          pseudoCode: `CONCEPT: EDA Visualization Workflow

Study checklist:
  1. pairplot for multivariate overview
  2. Check class balance in classification
  3. Visualize residuals after modeling
  4. Document findings for reproducibility
  5. EDA Visualization Workflow is a foundational piece of Dashboard Design Principles
  6. Connect this section to the data track and beginner expectations

Topic: Dashboard Design Principles
Track: data | Level: beginner`
        },
        {
          id: `viz-design-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Dashboard Design Principles** sits in the **data** track of the Data Science Master curriculum. Visual encoding, chart selection, and storytelling with data.

**Theoretical foundation:**

- Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling.
- Every aggregation encodes assumptions about granularity and time.

For **viz-design**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the beginner level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
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
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Dashboard Design Principles ties to the data track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Dashboard Design Principles
Track: data | Level: beginner`
        },
        {
          id: `viz-design-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Dashboard Design Principles**. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **viz-design**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
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
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with data ecosystem conventions

Topic: Dashboard Design Principles
Track: data | Level: beginner`
        },
        {
          id: `viz-design-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Dashboard Design Principles** often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on **viz-design**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:**

- The best debuggers narrow the search space in minutes by changing one variable at a time.`,
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
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: Dashboard Design Principles
Track: data | Level: beginner`
        },
        {
          id: `viz-design-real-world`,
          title: `Real-World Applications`,
          content: `**Dashboard Design Principles** shows up wherever **data** skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around **viz-design** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
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
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Dashboard Design Principles to adjacent topics in the same track

Topic: Dashboard Design Principles
Track: data | Level: beginner`
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
      estimatedMinutes: 124,
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
          content: `**Geospatial Visualization** — what you need to know:

- **Core idea:** Maps, network graphs, and domain-specific visualizations.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

GeoPandas extends pandas with geometry. choropleth maps, point maps. folium for interactive maps.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Geospatial Visualization** directly affects how confidently you can build, debug, and ship data projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Professional habits:**

- Profile dtypes, null rates, and cardinality before any modeling step.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Train/test leakage, silent dtype coercion, and Cartesian joins that explode row counts.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          keyPoints: [
            `GeoPandas for shapefile/GeoJSON data`,
            `folium for interactive Leaflet maps`,
            `Projections matter for accurate area comparison`,
            `Geopy for geocoding addresses`,
            `Geospatial Visualization is a foundational piece of Geospatial & Specialized Charts`,
            `Connect this section to the data track and beginner expectations`
          ],
          example: `# Concept check: Geospatial Visualization
meta = {
    "topic": "viz-specialized",
    "section": "geopandas",
    "track": "data",
    "level": "beginner",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: viz-specialized
section: geopandas
track: data
level: beginner`,
          pseudoCode: `CONCEPT: Geospatial Visualization

Study checklist:
  1. GeoPandas for shapefile/GeoJSON data
  2. folium for interactive Leaflet maps
  3. Projections matter for accurate area comparison
  4. Geopy for geocoding addresses
  5. Geospatial Visualization is a foundational piece of Geospatial & Specialized Charts
  6. Connect this section to the data track and beginner expectations

Topic: Geospatial & Specialized Charts
Track: data | Level: beginner`
        },
        {
          id: `network`,
          title: `Network Graphs`,
          content: `**Network Graphs** — what you need to know:

- **Core idea:** Maps, network graphs, and domain-specific visualizations.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

networkx + matplotlib/plotly for graph visualization. Nodes and edges for relationship data.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Network Graphs** directly affects how confidently you can build, debug, and ship data projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Professional habits:**

- Profile dtypes, null rates, and cardinality before any modeling step.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Train/test leakage, silent dtype coercion, and Cartesian joins that explode row counts.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          keyPoints: [
            `networkx for graph algorithms`,
            `Layout algorithms affect readability`,
            `Node size/color encode attributes`,
            `Useful for social and knowledge graphs`,
            `Network Graphs is a foundational piece of Geospatial & Specialized Charts`,
            `Connect this section to the data track and beginner expectations`
          ],
          example: `# Concept check: Network Graphs
meta = {
    "topic": "viz-specialized",
    "section": "network",
    "track": "data",
    "level": "beginner",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: viz-specialized
section: network
track: data
level: beginner`,
          pseudoCode: `CONCEPT: Network Graphs

Study checklist:
  1. networkx for graph algorithms
  2. Layout algorithms affect readability
  3. Node size/color encode attributes
  4. Useful for social and knowledge graphs
  5. Network Graphs is a foundational piece of Geospatial & Specialized Charts
  6. Connect this section to the data track and beginner expectations

Topic: Geospatial & Specialized Charts
Track: data | Level: beginner`
        },
        {
          id: `ml-viz`,
          title: `ML-Specific Visualizations`,
          content: `**ML-Specific Visualizations** — what you need to know:

- **Core idea:** Maps, network graphs, and domain-specific visualizations.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Confusion matrix heatmap, ROC curves, learning curves, feature importance bar charts, decision boundaries.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **ML-Specific Visualizations** directly affects how confidently you can build, debug, and ship data projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Profile dtypes, null rates, and cardinality before any modeling step.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Train/test leakage, silent dtype coercion, and Cartesian joins that explode row counts.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
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
            `SHAP summary plots for feature importance`,
            `ML-Specific Visualizations is a foundational piece of Geospatial & Specialized Charts`,
            `Connect this section to the data track and beginner expectations`
          ],
          pseudoCode: `CONCEPT: ML-Specific Visualizations

Study checklist:
  1. Confusion matrix for classification errors
  2. ROC-AUC visualizes threshold tradeoffs
  3. Learning curves diagnose bias/variance
  4. SHAP summary plots for feature importance
  5. ML-Specific Visualizations is a foundational piece of Geospatial & Specialized Charts
  6. Connect this section to the data track and beginner expectations

Topic: Geospatial & Specialized Charts
Track: data | Level: beginner`
        },
        {
          id: `tools`,
          title: `Specialized Tools`,
          content: `**Specialized Tools** — what you need to know:

- **Core idea:** Maps, network graphs, and domain-specific visualizations.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

datashader for big data viz. plotnine (ggplot2 port). altair for declarative viz. Choose tool for scale and audience.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Specialized Tools** directly affects how confidently you can build, debug, and ship data projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Professional habits:**

- Profile dtypes, null rates, and cardinality before any modeling step.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Train/test leakage, silent dtype coercion, and Cartesian joins that explode row counts.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          keyPoints: [
            `datashader aggregates millions of points`,
            `Altair declarative grammar of graphics`,
            `plotnine familiar to R users`,
            `Tool choice depends on data scale and output medium`,
            `Specialized Tools is a foundational piece of Geospatial & Specialized Charts`,
            `Connect this section to the data track and beginner expectations`
          ],
          example: `# Concept check: Specialized Tools
meta = {
    "topic": "viz-specialized",
    "section": "tools",
    "track": "data",
    "level": "beginner",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: viz-specialized
section: tools
track: data
level: beginner`,
          pseudoCode: `CONCEPT: Specialized Tools

Study checklist:
  1. datashader aggregates millions of points
  2. Altair declarative grammar of graphics
  3. plotnine familiar to R users
  4. Tool choice depends on data scale and output medium
  5. Specialized Tools is a foundational piece of Geospatial & Specialized Charts
  6. Connect this section to the data track and beginner expectations

Topic: Geospatial & Specialized Charts
Track: data | Level: beginner`
        },
        {
          id: `viz-specialized-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Geospatial & Specialized Charts** sits in the **data** track of the Data Science Master curriculum. Maps, network graphs, and domain-specific visualizations.

**Theoretical foundation:**

- Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling.
- Every aggregation encodes assumptions about granularity and time.

For **viz-specialized**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the beginner level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
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
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Geospatial & Specialized Charts ties to the data track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Geospatial & Specialized Charts
Track: data | Level: beginner`
        },
        {
          id: `viz-specialized-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Geospatial & Specialized Charts**. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **viz-specialized**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
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
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with data ecosystem conventions

Topic: Geospatial & Specialized Charts
Track: data | Level: beginner`
        },
        {
          id: `viz-specialized-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Geospatial & Specialized Charts** often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on **viz-specialized**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:**

- The best debuggers narrow the search space in minutes by changing one variable at a time.`,
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
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: Geospatial & Specialized Charts
Track: data | Level: beginner`
        },
        {
          id: `viz-specialized-real-world`,
          title: `Real-World Applications`,
          content: `**Geospatial & Specialized Charts** shows up wherever **data** skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around **viz-specialized** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
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
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Geospatial & Specialized Charts to adjacent topics in the same track

Topic: Geospatial & Specialized Charts
Track: data | Level: beginner`
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
      estimatedMinutes: 124,
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
