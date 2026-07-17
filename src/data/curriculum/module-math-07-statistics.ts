import type { Topic } from '../../types';

export const moduleMath07Topics: Topic[] = [
{
      id: `math-descriptive`,
      title: `Descriptive Statistics`,
      description: `Mean, variance, percentiles, and exploratory data summaries.`,
      level: `intermediate`,
      track: `math`,
      sections: [
        {
          id: `ds-central`,
          title: `Central Tendency`,
          content: `**Mean** x̄=(1/n)∑x_i sensitive to outliers. **Median** middle value robust. **Mode** most frequent; useful categorical. **Trimmed mean** drops extremes. Weighted mean for uneven importance. Geometric mean for rates/ratios. Harmonic mean for rates. In skewed income data, median better than mean. ML: batch normalization uses batch mean; layer norm uses feature statistics. Choose summary matching distribution shape and robustness needs.

**Why this matters:** Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here. Mastering "Central Tendency" here directly affects how confidently you can build, debug, and ship math projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Verify formulas on paper with tiny examples, then confirm with numpy before scaling up. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.

**Mathematical foundation:** This section includes 5 key formulas. Identify each symbol's meaning, units, and valid input range before trusting numerical output.

**Visual guide:** Study the diagram alongside the explanation. Trace each arrow or region back to a term in the text — if you cannot, re-read until the mapping is clear.`,
          formulas: [
            `x̄ = (1/n) ∑ x_i`,
            `Median: middle of sorted data`,
            `Mode: argmax frequency`,
            `Trimmed mean: drop extremes`,
            `Weighted: ∑ w_i x_i / ∑ w_i`
          ],
          diagram: `   skewed data:

   mean → pulled by tail
   median → center of mass
        ·  ·  ·│· · ·
              ↑ median
   │
   │  · · ·
   └──────────
   (see formulas above)`,
          keyPoints: [
            `Mean sensitive to outliers`,
            `Median robust for skew`,
            `Mode for categorical peaks`,
            `Batch norm tracks mean`,
            `Report median for skewed metrics`
          ],
          example: `import numpy as np
x=np.array([1,2,2,3,100])
print("mean:", x.mean(), "median:", np.median(x))`,
          output: `mean inflated by 100`,
          pseudoCode: `CONCEPT: Central Tendency

Key relationships:
  x̄ = (1/n) ∑ x_i
  Median: middle of sorted data
  Mode: argmax frequency
  Trimmed mean: drop extremes
  Weighted: ∑ w_i x_i / ∑ w_i

Visual summary:
  skewed data:
  mean → pulled by tail
  median → center of mass
  ·  ·  ·│· · ·
  ↑ median
  │
  │  · · ·
  └──────────
  (see formulas above)

Study checklist:
  1. Mean sensitive to outliers
  2. Median robust for skew
  3. Mode for categorical peaks
  4. Batch norm tracks mean
  5. Report median for skewed metrics

Topic: Descriptive Statistics
Track: math | Level: intermediate`
        },
        {
          id: `ds-spread`,
          title: `Variance & Spread`,
          content: `Sample variance s²=(1/(n−1))∑(x_i−x̄)² unbiased for σ². Population variance divides by n. **IQR** Q3−Q1 robust spread. **MAD** median absolute deviation. Std σ same units as data. CV=σ/|μ| relative spread. Range max−min sensitive. Boxplot shows quartiles and outliers. Feature scaling uses std. High variance features may dominate distance metrics without normalization. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:** Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here. Mastering "Variance & Spread" here directly affects how confidently you can build, debug, and ship math projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Verify formulas on paper with tiny examples, then confirm with numpy before scaling up. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.

**Mathematical foundation:** This section includes 5 key formulas. Identify each symbol's meaning, units, and valid input range before trusting numerical output.

**Visual guide:** Study the diagram alongside the explanation. Trace each arrow or region back to a term in the text — if you cannot, re-read until the mapping is clear.`,
          formulas: [
            `s² = (1/(n−1))∑(x_i−x̄)²`,
            `σ = √Var(X)`,
            `IQR = Q3 − Q1`,
            `MAD = median(|x−median|)`,
            `CV = σ/|μ|`
          ],
          diagram: `   boxplot:

   max ─┬─
   Q3  ─┤
   med ─┤ box
   Q1  ─┤
   min ─┴─ outliers ·
   │
   │  · · ·
   └──────────`,
          keyPoints: [
            `n−1 for unbiased sample var`,
            `IQR robust to outliers`,
            `Std for z-score scaling`,
            `Boxplot visualizes quartiles`,
            `Normalize before distance-based ML`
          ],
          example: `import numpy as np
x=np.array([2,4,4,4,5,5,7,9])
print("var:", x.var(ddof=1), "IQR:", np.percentile(x,75)-np.percentile(x,25))`,
          output: `var/IQR`,
          pseudoCode: `CONCEPT: Variance & Spread

Key relationships:
  s² = (1/(n−1))∑(x_i−x̄)²
  σ = √Var(X)
  IQR = Q3 − Q1
  MAD = median(|x−median|)
  CV = σ/|μ|

Visual summary:
  boxplot:
  max ─┬─
  Q3  ─┤
  med ─┤ box
  Q1  ─┤
  min ─┴─ outliers ·
  │
  │  · · ·
  └──────────

Study checklist:
  1. n−1 for unbiased sample var
  2. IQR robust to outliers
  3. Std for z-score scaling
  4. Boxplot visualizes quartiles
  5. Normalize before distance-based ML

Topic: Descriptive Statistics
Track: math | Level: intermediate`
        },
        {
          id: `ds-percentile`,
          title: `Percentiles & Quantiles`,
          content: `p-th percentile: p% data below. **Quartiles** Q1=25%, Q2=median, Q3=75%. Quantile function Q(p) inverse CDF. Used in thresholds, SLA metrics, and **quantile loss** for forecasting median (pinball loss). np.percentile, np.quantile. Robust min/max estimation via percentiles for clipping outliers. Deciles, percentiles standard in reporting latency p95, p99 in systems monitoring. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:** Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here. Mastering "Percentiles & Quantiles" here directly affects how confidently you can build, debug, and ship math projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Verify formulas on paper with tiny examples, then confirm with numpy before scaling up. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.

**Mathematical foundation:** This section includes 5 key formulas. Identify each symbol's meaning, units, and valid input range before trusting numerical output.

**Visual guide:** Study the diagram alongside the explanation. Trace each arrow or region back to a term in the text — if you cannot, re-read until the mapping is clear.`,
          formulas: [
            `Q(p) = inf{x : F(x)≥p}`,
            `Q1=25th, Q2=50th, Q3=75th`,
            `Pinball loss for quantile τ`,
            `p99 latency common SLA`,
            `Percentile robust to extremes`
          ],
          diagram: `   CDF F(x)

   0 ──────────────── 1
        ↑ Q(0.95)
   95% below this value
   │
   │  · · ·
   └──────────
   (see formulas above)
   │`,
          keyPoints: [
            `Percentiles invert CDF`,
            `Pinball loss for quantile reg`,
            `p95/p99 for tail behavior`,
            `Clip using percentile bounds`,
            `Quartiles in boxplots`
          ],
          example: `import numpy as np
x=np.random.randn(1000)
print("p95:", np.percentile(x,95))`,
          output: `p95 ~ 1.64`,
          pseudoCode: `CONCEPT: Percentiles & Quantiles

Key relationships:
  Q(p) = inf{x : F(x)≥p}
  Q1=25th, Q2=50th, Q3=75th
  Pinball loss for quantile τ
  p99 latency common SLA
  Percentile robust to extremes

Visual summary:
  CDF F(x)
  0 ──────────────── 1
  ↑ Q(0.95)
  95% below this value
  │
  │  · · ·
  └──────────
  (see formulas above)
  │

Study checklist:
  1. Percentiles invert CDF
  2. Pinball loss for quantile reg
  3. p95/p99 for tail behavior
  4. Clip using percentile bounds
  5. Quartiles in boxplots

Topic: Descriptive Statistics
Track: math | Level: intermediate`
        },
        {
          id: `ds-eda`,
          title: `EDA for ML`,
          content: `**EDA for ML** is essential to **Descriptive Statistics**. Mean, variance, percentiles, and exploratory data summaries. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Summary stats per feature: mean, std, missing rate, unique count. Histograms reveal skew/multimodality. Correlation matrix detects redundancy. Pairplots for bivariate. Target distribution check for class imbalance. Outlier flags via IQR rule. EDA prevents garbage-in failures. Document findings before modeling. Automated profiling (pandas describe, ydata-profiling) accelerates. Compare train vs test distributions for shift detection.

**Why this matters:** Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here. Mastering "EDA for ML" here directly affects how confidently you can build, debug, and ship math projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Verify formulas on paper with tiny examples, then confirm with numpy before scaling up. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.

**Mathematical foundation:** This section includes 5 key formulas. Identify each symbol's meaning, units, and valid input range before trusting numerical output.

**Visual guide:** Study the diagram alongside the explanation. Trace each arrow or region back to a term in the text — if you cannot, re-read until the mapping is clear.`,
          formulas: [
            `describe(): count mean std min max`,
            `Missing rate per column`,
            `Class balance P(y)`,
            `Train vs test distribution compare`,
            `IQR outlier: x<Q1−1.5IQR or x>Q3+1.5IQR`
          ],
          diagram: `   EDA checklist:

   □ shape dtypes
   □ missing values
   □ target balance
   □ feature histograms
   □ correlations
   □ train/test shift
   │
   │  · · ·`,
          keyPoints: [
            `EDA before modeling mandatory`,
            `Check imbalance early`,
            `Correlation guides feature selection`,
            `Distribution shift breaks models`,
            `Automate reproducible profiles`
          ],
          example: `import numpy as np
import pandas as pd
X=pd.DataFrame(np.random.randn(100,3),columns=list("abc"))
print(X.describe())`,
          output: `describe output`,
          pseudoCode: `CONCEPT: EDA for ML

Key relationships:
  describe(): count mean std min max
  Missing rate per column
  Class balance P(y)
  Train vs test distribution compare
  IQR outlier: x<Q1−1.5IQR or x>Q3+1.5IQR

Visual summary:
  EDA checklist:
  □ shape dtypes
  □ missing values
  □ target balance
  □ feature histograms
  □ correlations
  □ train/test shift
  │
  │  · · ·

Study checklist:
  1. EDA before modeling mandatory
  2. Check imbalance early
  3. Correlation guides feature selection
  4. Distribution shift breaks models
  5. Automate reproducible profiles

Topic: Descriptive Statistics
Track: math | Level: intermediate`
        },
        {
          id: `math-descriptive-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Descriptive Statistics** sits in the **math** track of the Data Science Master curriculum. Mean, variance, percentiles, and exploratory data summaries.

**Theoretical foundation:** Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directly to numpy operations and loss functions.

For **math-descriptive**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
          example: `# Concept check for Descriptive Statistics
meta = {"topic_id": "math-descriptive", "track": "math", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-descriptive math intermediate`,
          keyPoints: [
            `Core theory of Descriptive Statistics ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Descriptive Statistics ties to the math track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Descriptive Statistics
Track: math | Level: intermediate`
        },
        {
          id: `math-descriptive-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Descriptive Statistics**. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **math-descriptive**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for math-descriptive
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-descriptive", "Descriptive Statistics")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-descriptive Descriptive`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with math ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with math ecosystem conventions

Topic: Descriptive Statistics
Track: math | Level: intermediate`
        },
        {
          id: `math-descriptive-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Descriptive Statistics** often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on **math-descriptive**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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

debug_step("math-descriptive", "Descriptive Statistics")
debug_step("section_count", 4)`,
          output: `[math-descriptive] 'Descriptive Statistics' (str)
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

Topic: Descriptive Statistics
Track: math | Level: intermediate`
        },
        {
          id: `math-descriptive-real-world`,
          title: `Real-World Applications`,
          content: `**Descriptive Statistics** shows up wherever **math** skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around **math-descriptive** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Descriptive Statistics
skills = ["math", "intermediate", "math-descriptive"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, intermediate, math-descriptive`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Descriptive Statistics to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Descriptive Statistics to adjacent topics in the same track

Topic: Descriptive Statistics
Track: math | Level: intermediate`
        }
      ],
      exercises: [
        {
          id: `ex-ds-1`,
          question: `Mean, median, std of [1,2,2,3,100].`,
          solution: `import numpy as np
x=[1,2,2,3,100]; print(np.mean(x), np.median(x), np.std(x,ddof=1))`,
          difficulty: `easy`
        },
        {
          id: `ex-ds-2`,
          question: `25th and 75th percentiles of standard normal sample.`,
          solution: `import numpy as np
x=np.random.randn(10000); print(np.percentile(x,[25,75]))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 124,
      module: `module-math-07`,
      references: [
        {
          id: `3blue1brown-linalg`,
          title: `Essence of Linear Algebra`,
          source: `3Blue1Brown`,
          type: `video`,
          url: `https://www.3blue1brown.com/topics/linear-algebra`,
          description: `Visual intuition for vectors, matrices, and transformations.`
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
          id: `3blue1brown-calculus`,
          title: `Essence of Calculus`,
          source: `3Blue1Brown`,
          type: `video`,
          url: `https://www.3blue1brown.com/topics/calculus`,
          description: `Geometric intuition for derivatives, integrals, and the chain rule.`
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
          id: `stanford-cs229`,
          title: `Stanford CS229 — Machine Learning`,
          source: `Stanford CS229`,
          type: `course`,
          url: `https://cs229.stanford.edu/`,
          description: `Andrew Ng's graduate ML course — the canonical theoretical foundation.`
        }
      ]
    },
{
      id: `math-sampling-clt`,
      title: `Sampling & Central Limit Theorem`,
      description: `Sampling distributions, standard error, and CLT applications.`,
      level: `intermediate`,
      track: `math`,
      sections: [
        {
          id: `sc-sample`,
          title: `Random Sampling`,
          content: `**Simple random sample** each unit equal probability. **Stratified** sample within groups preserves proportions. **Bootstrap** resample with replacement estimates sampling distribution. Sample statistic x̄ random across samples. **Sampling frame** defines population accessible. Bias when sample ≠ population (selection bias). ML train set is sample; generalization assumes representative i.i.d. (approximately). Time series breaks i.i.d.—use temporal splits.

**Why this matters:** Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here. Mastering "Random Sampling" here directly affects how confidently you can build, debug, and ship math projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Verify formulas on paper with tiny examples, then confirm with numpy before scaling up. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.

**Mathematical foundation:** This section includes 5 key formulas. Identify each symbol's meaning, units, and valid input range before trusting numerical output.

**Visual guide:** Study the diagram alongside the explanation. Trace each arrow or region back to a term in the text — if you cannot, re-read until the mapping is clear.`,
          formulas: [
            `SRS: each subset equally likely`,
            `Stratified: proportional strata`,
            `Bootstrap: resample n with replacement`,
            `x̄ is RV across samples`,
            `Selection bias if sample skewed`
          ],
          diagram: `   population → sample → statistic

   Ω (big) ──draw──→ data (n)
                      ↓
                     x̄, s²
   │
   │  · · ·
   └──────────
   (see formulas above)
   │`,
          keyPoints: [
            `Representative sample critical`,
            `Stratify for rare classes`,
            `Bootstrap for CI without formulas`,
            `Train/val/test splits are samples`,
            `Temporal data needs special splits`
          ],
          example: `import numpy as np
pop=np.arange(100)
sample=np.random.choice(pop,10,replace=False)
print("sample:", sample[:5])`,
          output: `random sample`,
          pseudoCode: `CONCEPT: Random Sampling

Key relationships:
  SRS: each subset equally likely
  Stratified: proportional strata
  Bootstrap: resample n with replacement
  x̄ is RV across samples
  Selection bias if sample skewed

Visual summary:
  population → sample → statistic
  Ω (big) ──draw──→ data (n)
  ↓
  x̄, s²
  │
  │  · · ·
  └──────────
  (see formulas above)
  │

Study checklist:
  1. Representative sample critical
  2. Stratify for rare classes
  3. Bootstrap for CI without formulas
  4. Train/val/test splits are samples
  5. Temporal data needs special splits

Topic: Sampling & Central Limit Theorem
Track: math | Level: intermediate`
        },
        {
          id: `sc-se`,
          title: `Standard Error`,
          content: `**Standard error** SE(x̄)=σ/√n measures variability of sample mean across samples. Unknown σ: estimate s/√n. SE shrinks as √n—more data tighter estimate. 95% CI x̄±1.96 SE approximate (CLT). Compare models using SE of metric difference. Reporting accuracy without SE hides uncertainty. Cross-validation folds give multiple metric samples—report mean±std. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:** Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here. Mastering "Standard Error" here directly affects how confidently you can build, debug, and ship math projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Verify formulas on paper with tiny examples, then confirm with numpy before scaling up. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.

**Mathematical foundation:** This section includes 5 key formulas. Identify each symbol's meaning, units, and valid input range before trusting numerical output.

**Visual guide:** Study the diagram alongside the explanation. Trace each arrow or region back to a term in the text — if you cannot, re-read until the mapping is clear.`,
          formulas: [
            `SE(x̄) = σ/√n`,
            `Estimate: SE ≈ s/√n`,
            `95% CI: x̄ ± 1.96·SE`,
            `SE decreases ∝ 1/√n`,
            `Report metric ± SE or CI`
          ],
          diagram: `   sampling distribution of x̄:

        bell narrows as n↑

   n=10  wide bell
   n=100 narrow bell
   │
   │  · · ·
   └──────────
   (see formulas above)`,
          keyPoints: [
            `SE quantifies estimate uncertainty`,
            `Grows with √n not n`,
            `CI from CLT approximate`,
            `CV metrics need multiple folds`,
            `Don't report point alone`
          ],
          example: `import numpy as np
s=2.; n=100
print("SE:", s/np.sqrt(n))`,
          output: `SE: 0.2`,
          pseudoCode: `CONCEPT: Standard Error

Key relationships:
  SE(x̄) = σ/√n
  Estimate: SE ≈ s/√n
  95% CI: x̄ ± 1.96·SE
  SE decreases ∝ 1/√n
  Report metric ± SE or CI

Visual summary:
  sampling distribution of x̄:
  bell narrows as n↑
  n=10  wide bell
  n=100 narrow bell
  │
  │  · · ·
  └──────────
  (see formulas above)

Study checklist:
  1. SE quantifies estimate uncertainty
  2. Grows with √n not n
  3. CI from CLT approximate
  4. CV metrics need multiple folds
  5. Don't report point alone

Topic: Sampling & Central Limit Theorem
Track: math | Level: intermediate`
        },
        {
          id: `sc-clt`,
          title: `Central Limit Theorem Detail`,
          content: `**Central Limit Theorem Detail** is essential to **Sampling & Central Limit Theorem**. Sampling distributions, standard error, and CLT applications. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Standardized x̄: (x̄−μ)/(σ/√n) → N(0,1) in distribution. Works for many non-normal populations. Rule of thumb n≥30. Also applies to proportions p̂ approx N(p, p(1−p)/n). Enables z-tests and CIs. Sum of n RVs also normal for large n. CLT fails heavy tails infinite variance. Bootstrap nonparametric alternative when CLT questionable. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:** Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here. Mastering "Central Limit Theorem Detail" here directly affects how confidently you can build, debug, and ship math projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Verify formulas on paper with tiny examples, then confirm with numpy before scaling up. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.

**Mathematical foundation:** This section includes 5 key formulas. Identify each symbol's meaning, units, and valid input range before trusting numerical output.

**Visual guide:** Study the diagram alongside the explanation. Trace each arrow or region back to a term in the text — if you cannot, re-read until the mapping is clear.`,
          formulas: [
            `(x̄−μ)/(σ/√n) → N(0,1)`,
            `p̂ approx N(p, p(1−p)/n)`,
            `Requires finite σ²`,
            `n≥30 rule of thumb`,
            `Bootstrap if CLT doubtful`
          ],
          diagram: `   sampling distribution:

   any population
        ↓ average n samples
   ≈ Normal for large n
   │
   │  · · ·
   └──────────
   (see formulas above)
   │`,
          keyPoints: [
            `CLT enables inferential stats`,
            `Applies to means and proportions`,
            `Finite variance needed`,
            `Bootstrap backup method`,
            `Heavy tails need care`
          ],
          example: `import numpy as np
means=[np.random.exponential(1,30).mean() for _ in range(5000)]
print("mean of means:", np.mean(means), "std:", np.std(means))`,
          output: `≈ 1, ≈ 1/√30`,
          pseudoCode: `CONCEPT: Central Limit Theorem Detail

Key relationships:
  (x̄−μ)/(σ/√n) → N(0,1)
  p̂ approx N(p, p(1−p)/n)
  Requires finite σ²
  n≥30 rule of thumb
  Bootstrap if CLT doubtful

Visual summary:
  sampling distribution:
  any population
  ↓ average n samples
  ≈ Normal for large n
  │
  │  · · ·
  └──────────
  (see formulas above)
  │

Study checklist:
  1. CLT enables inferential stats
  2. Applies to means and proportions
  3. Finite variance needed
  4. Bootstrap backup method
  5. Heavy tails need care

Topic: Sampling & Central Limit Theorem
Track: math | Level: intermediate`
        },
        {
          id: `sc-ml`,
          title: `Sampling in ML Evaluation`,
          content: `Hold-out test set estimates generalization error. **K-fold CV** reduces variance of metric estimate. **Bootstrap** confidence on AUC. **Stratified k-fold** preserves class ratio. Multiple seeds report mean±std. **Power analysis** determines n needed to detect effect. Online A/B tests sequential sampling with caution (peeking). Always fix test set; tune on val only once workflow to avoid overfitting selection.

**Why this matters:** Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here. Mastering "Sampling in ML Evaluation" here directly affects how confidently you can build, debug, and ship math projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Verify formulas on paper with tiny examples, then confirm with numpy before scaling up. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.

**Mathematical foundation:** This section includes 5 key formulas. Identify each symbol's meaning, units, and valid input range before trusting numerical output.

**Visual guide:** Study the diagram alongside the explanation. Trace each arrow or region back to a term in the text — if you cannot, re-read until the mapping is clear.`,
          formulas: [
            `Hold-out: single test estimate`,
            `K-fold: K metric samples`,
            `Stratified: preserve P(y)`,
            `Report mean±std over seeds`,
            `Don't peek at test repeatedly`
          ],
          diagram: `   train │ val │ test
         tune    pick   once

   test peeking → optimistic bias
   │
   │  · · ·
   └──────────
   (see formulas above)
   │
   │  · · ·`,
          keyPoints: [
            `Fixed test set sacred`,
            `CV for small data`,
            `Stratify imbalanced labels`,
            `Multiple seeds show stability`,
            `A/B needs sequential care`
          ],
          example: `import numpy as np
from sklearn.model_selection import KFold
X=np.arange(20)
kf=KFold(5)
print("folds:", [len(te) for _,te in kf.split(X)])`,
          output: `4 each fold`,
          pseudoCode: `CONCEPT: Sampling in ML Evaluation

Key relationships:
  Hold-out: single test estimate
  K-fold: K metric samples
  Stratified: preserve P(y)
  Report mean±std over seeds
  Don't peek at test repeatedly

Visual summary:
  train │ val │ test
  tune    pick   once
  test peeking → optimistic bias
  │
  │  · · ·
  └──────────
  (see formulas above)
  │
  │  · · ·

Study checklist:
  1. Fixed test set sacred
  2. CV for small data
  3. Stratify imbalanced labels
  4. Multiple seeds show stability
  5. A/B needs sequential care

Topic: Sampling & Central Limit Theorem
Track: math | Level: intermediate`
        },
        {
          id: `math-sampling-clt-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Sampling & Central Limit Theorem** sits in the **math** track of the Data Science Master curriculum. Sampling distributions, standard error, and CLT applications.

**Theoretical foundation:** Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directly to numpy operations and loss functions.

For **math-sampling-clt**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
          example: `# Concept check for Sampling & Central Limit Theorem
meta = {"topic_id": "math-sampling-clt", "track": "math", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-sampling-clt math intermediate`,
          keyPoints: [
            `Core theory of Sampling & Central Limit Theorem ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Sampling & Central Limit Theorem ties to the math track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Sampling & Central Limit Theorem
Track: math | Level: intermediate`
        },
        {
          id: `math-sampling-clt-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Sampling & Central Limit Theorem**. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **math-sampling-clt**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for math-sampling-clt
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-sampling-clt", "Sampling & Central Limit Theorem")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-sampling-clt Sampling`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with math ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with math ecosystem conventions

Topic: Sampling & Central Limit Theorem
Track: math | Level: intermediate`
        },
        {
          id: `math-sampling-clt-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Sampling & Central Limit Theorem** often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on **math-sampling-clt**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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

debug_step("math-sampling-clt", "Sampling & Central Limit Theorem")
debug_step("section_count", 4)`,
          output: `[math-sampling-clt] 'Sampling & Central Limit Theorem' (str)
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

Topic: Sampling & Central Limit Theorem
Track: math | Level: intermediate`
        },
        {
          id: `math-sampling-clt-real-world`,
          title: `Real-World Applications`,
          content: `**Sampling & Central Limit Theorem** shows up wherever **math** skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around **math-sampling-clt** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Sampling & Central Limit Theorem
skills = ["math", "intermediate", "math-sampling-clt"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, intermediate, math-sampling-clt`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Sampling & Central Limit Theorem to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Sampling & Central Limit Theorem to adjacent topics in the same track

Topic: Sampling & Central Limit Theorem
Track: math | Level: intermediate`
        }
      ],
      exercises: [
        {
          id: `ex-sc-1`,
          question: `SE of mean with s=5, n=25.`,
          solution: `import numpy as np
print(5/np.sqrt(25))`,
          difficulty: `easy`
        },
        {
          id: `ex-sc-2`,
          question: `Simulate 5000 sample means n=40 from Uniform(0,1); print std.`,
          solution: `import numpy as np
m=[np.random.rand(40).mean() for _ in range(5000)]
print(np.std(m), 1/np.sqrt(12*40))`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 124,
      module: `module-math-07`,
      references: [
        {
          id: `3blue1brown-linalg`,
          title: `Essence of Linear Algebra`,
          source: `3Blue1Brown`,
          type: `video`,
          url: `https://www.3blue1brown.com/topics/linear-algebra`,
          description: `Visual intuition for vectors, matrices, and transformations.`
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
          id: `3blue1brown-calculus`,
          title: `Essence of Calculus`,
          source: `3Blue1Brown`,
          type: `video`,
          url: `https://www.3blue1brown.com/topics/calculus`,
          description: `Geometric intuition for derivatives, integrals, and the chain rule.`
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
          id: `stanford-cs229`,
          title: `Stanford CS229 — Machine Learning`,
          source: `Stanford CS229`,
          type: `course`,
          url: `https://cs229.stanford.edu/`,
          description: `Andrew Ng's graduate ML course — the canonical theoretical foundation.`
        }
      ]
    },
{
      id: `math-hypothesis`,
      title: `Hypothesis Testing`,
      description: `Null/alternative, p-values, errors, and common tests.`,
      level: `intermediate`,
      track: `math`,
      sections: [
        {
          id: `ht-framework`,
          title: `Testing Framework`,
          content: `**H₀** null hypothesis default skepticism. **H₁** alternative. **Test statistic** summarizes data vs H₀. **p-value** P(data this extreme|H₀). Reject H₀ if p<α (significance level, often 0.05). **Type I error** false positive rate α. **Type II** β false negative. Power=1−β. Not 'accept H₀'—fail to reject. p-value NOT P(H₀ true). Multiple testing inflates false positives—Bonferroni correction α/m. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:** Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here. Mastering "Testing Framework" here directly affects how confidently you can build, debug, and ship math projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Verify formulas on paper with tiny examples, then confirm with numpy before scaling up. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.

**Mathematical foundation:** This section includes 5 key formulas. Identify each symbol's meaning, units, and valid input range before trusting numerical output.

**Visual guide:** Study the diagram alongside the explanation. Trace each arrow or region back to a term in the text — if you cannot, re-read until the mapping is clear.`,
          formulas: [
            `p-value = P(T ≥ t_obs | H₀)`,
            `Reject H₀ if p < α`,
            `Type I: reject true H₀ (α)`,
            `Type II: fail reject false H₀ (β)`,
            `Power = 1 − β`
          ],
          diagram: `   decision:

   p small → reject H₀
   p large → insufficient evidence

   α=0.05 threshold line
   │
   │  · · ·
   └──────────
   (see formulas above)`,
          keyPoints: [
            `p-value not prob H₀ true`,
            `α controls false positives`,
            `Power needs effect size + n`,
            `Multiple tests need correction`,
            `Fail to reject ≠ prove null`
          ],
          example: `import numpy as np
from scipy import stats
t,p=stats.ttest_1samp([1.2,0.9,1.1,1.3,0.8], 0)
print("p-value:", p)`,
          output: `p-value`,
          pseudoCode: `CONCEPT: Testing Framework

Key relationships:
  p-value = P(T ≥ t_obs | H₀)
  Reject H₀ if p < α
  Type I: reject true H₀ (α)
  Type II: fail reject false H₀ (β)
  Power = 1 − β

Visual summary:
  decision:
  p small → reject H₀
  p large → insufficient evidence
  α=0.05 threshold line
  │
  │  · · ·
  └──────────
  (see formulas above)

Study checklist:
  1. p-value not prob H₀ true
  2. α controls false positives
  3. Power needs effect size + n
  4. Multiple tests need correction
  5. Fail to reject ≠ prove null

Topic: Hypothesis Testing
Track: math | Level: intermediate`
        },
        {
          id: `ht-tests`,
          title: `Common Tests`,
          content: `**z-test** mean known σ large n. **t-test** mean unknown σ small n. Paired t for before/after. Two-sample t independent groups. **χ²** goodness-of-fit and independence in contingency tables. **F-test** variance ratio. ANOVA F for multiple means. Choose test matching data type and assumptions (normality, independence). Nonparametric: Mann-Whitney, Wilcoxon when normality fails. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:** Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here. Mastering "Common Tests" here directly affects how confidently you can build, debug, and ship math projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Verify formulas on paper with tiny examples, then confirm with numpy before scaling up. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.

**Mathematical foundation:** This section includes 5 key formulas. Identify each symbol's meaning, units, and valid input range before trusting numerical output.

**Visual guide:** Study the diagram alongside the explanation. Trace each arrow or region back to a term in the text — if you cannot, re-read until the mapping is clear.`,
          formulas: [
            `t = (x̄−μ₀)/(s/√n)`,
            `χ² = ∑ (O−E)²/E`,
            `Two-sample t: compare means`,
            `Paired t: difference scores`,
            `ANOVA: compare k means`
          ],
          diagram: `   test selection tree:

   numeric 2 groups → t-test
   categorical table → χ²
   >2 group means → ANOVA
   │
   │  · · ·
   └──────────
   (see formulas above)
   │`,
          keyPoints: [
            `Match test to question`,
            `Check assumptions`,
            `t-test for means`,
            `Chi-square for counts`,
            `Nonparametric if needed`
          ],
          example: `import numpy as np
from scipy import stats
a,b=np.random.randn(30),np.random.randn(30)+0.3
t,p=stats.ttest_ind(a,b)
print("p:", p)`,
          output: `p from ttest`,
          pseudoCode: `CONCEPT: Common Tests

Key relationships:
  t = (x̄−μ₀)/(s/√n)
  χ² = ∑ (O−E)²/E
  Two-sample t: compare means
  Paired t: difference scores
  ANOVA: compare k means

Visual summary:
  test selection tree:
  numeric 2 groups → t-test
  categorical table → χ²
  >2 group means → ANOVA
  │
  │  · · ·
  └──────────
  (see formulas above)
  │

Study checklist:
  1. Match test to question
  2. Check assumptions
  3. t-test for means
  4. Chi-square for counts
  5. Nonparametric if needed

Topic: Hypothesis Testing
Track: math | Level: intermediate`
        },
        {
          id: `ht-ab`,
          title: `A/B Testing`,
          content: `**A/B Testing** is essential to **Hypothesis Testing**. Null/alternative, p-values, errors, and common tests. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Compare conversion rates p_A vs p_B. H₀: p_A=p_B. Two-proportion z-test or χ² on 2×2 table. Need sample size for desired power. **SRM** sample ratio mismatch checks randomization. Run fixed horizon avoid peeking bias. **Sequential testing** specialized bounds. Practical significance vs statistical: 0.01% lift may be significant with huge n but useless. Bayesian A/B alternative gives posterior on lift.

**Why this matters:** Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here. Mastering "A/B Testing" here directly affects how confidently you can build, debug, and ship math projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Verify formulas on paper with tiny examples, then confirm with numpy before scaling up. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.

**Mathematical foundation:** This section includes 5 key formulas. Identify each symbol's meaning, units, and valid input range before trusting numerical output.

**Visual guide:** Study the diagram alongside the explanation. Trace each arrow or region back to a term in the text — if you cannot, re-read until the mapping is clear.`,
          formulas: [
            `H₀: p_A = p_B`,
            `z = (p̂_A−p̂_B)/SE_diff`,
            `Power needs n, effect size, α`,
            `Fixed horizon reduces peeking bias`,
            `Practical vs statistical significance`
          ],
          diagram: `   A/B split:

   users ──50/50──→ A (control)
                └──→ B (treatment)

   compare metric mean/rate
   │
   │  · · ·
   └──────────
   (see formulas above)`,
          keyPoints: [
            `Randomization avoids confounding`,
            `Power analysis before test`,
            `Peeking inflates false positives`,
            `Check SRM on assignment`,
            `Effect size matters for business`
          ],
          example: `import numpy as np
conv_a, n_a = 120, 1000
conv_b, n_b = 145, 1000
p_a, p_b = conv_a/n_a, conv_b/n_b
se=np.sqrt(p_a*(1-p_a)/n_a+p_b*(1-p_b)/n_b)
z=(p_b-p_a)/se
print("z:", z)`,
          output: `z stat`,
          pseudoCode: `CONCEPT: A/B Testing

Key relationships:
  H₀: p_A = p_B
  z = (p̂_A−p̂_B)/SE_diff
  Power needs n, effect size, α
  Fixed horizon reduces peeking bias
  Practical vs statistical significance

Visual summary:
  A/B split:
  users ──50/50──→ A (control)
  └──→ B (treatment)
  compare metric mean/rate
  │
  │  · · ·
  └──────────
  (see formulas above)

Study checklist:
  1. Randomization avoids confounding
  2. Power analysis before test
  3. Peeking inflates false positives
  4. Check SRM on assignment
  5. Effect size matters for business

Topic: Hypothesis Testing
Track: math | Level: intermediate`
        },
        {
          id: `ht-ml`,
          title: `Testing in ML Experiments`,
          content: `**McNemar** paired classifier comparison same test set. **Permutation test** shuffle labels nonparametric p-value. **Diebold-Mariano** forecast comparison. Compare CV scores with paired t across folds. Report confidence intervals on metric not just point. **Multiple model comparison** Bonferroni or Holm correction. Statistical significance ≠ better production model—consider latency, cost, fairness.

**Why this matters:** Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here. Mastering "Testing in ML Experiments" here directly affects how confidently you can build, debug, and ship math projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Verify formulas on paper with tiny examples, then confirm with numpy before scaling up. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.

**Mathematical foundation:** This section includes 5 key formulas. Identify each symbol's meaning, units, and valid input range before trusting numerical output.

**Visual guide:** Study the diagram alongside the explanation. Trace each arrow or region back to a term in the text — if you cannot, re-read until the mapping is clear.`,
          formulas: [
            `McNemar: paired classification errors`,
            `Permutation: shuffle null`,
            `Paired t on CV fold scores`,
            `Correct for multiple comparisons`,
            `Sig ≠ deploy decision`
          ],
          diagram: `   model A vs B same test:

   both wrong → both right pairs
   McNemar uses discordant pairs
   │
   │  · · ·
   └──────────
   (see formulas above)
   │
   │  · · ·`,
          keyPoints: [
            `Use paired tests same data`,
            `Permutation flexible`,
            `Correct multiple models`,
            `CI better than p alone`,
            `Engineering constraints matter`
          ],
          example: `import numpy as np
# simple permutation test mean diff
a,b=np.random.randn(20),np.random.randn(20)+0.5
obs=a.mean()-b.mean()
count=0
for _ in range(1000):
    pool=np.concatenate([a,b]); np.random.shuffle(pool)
    if abs(pool[:20].mean()-pool[20:].mean())>=abs(obs): count+=1
print("p approx:", count/1000)`,
          output: `perm p`,
          pseudoCode: `CONCEPT: Testing in ML Experiments

Key relationships:
  McNemar: paired classification errors
  Permutation: shuffle null
  Paired t on CV fold scores
  Correct for multiple comparisons
  Sig ≠ deploy decision

Visual summary:
  model A vs B same test:
  both wrong → both right pairs
  McNemar uses discordant pairs
  │
  │  · · ·
  └──────────
  (see formulas above)
  │
  │  · · ·

Study checklist:
  1. Use paired tests same data
  2. Permutation flexible
  3. Correct multiple models
  4. CI better than p alone
  5. Engineering constraints matter

Topic: Hypothesis Testing
Track: math | Level: intermediate`
        },
        {
          id: `math-hypothesis-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Hypothesis Testing** sits in the **math** track of the Data Science Master curriculum. Null/alternative, p-values, errors, and common tests.

**Theoretical foundation:** Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directly to numpy operations and loss functions.

For **math-hypothesis**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
          example: `# Concept check for Hypothesis Testing
meta = {"topic_id": "math-hypothesis", "track": "math", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-hypothesis math intermediate`,
          keyPoints: [
            `Core theory of Hypothesis Testing ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Hypothesis Testing ties to the math track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Hypothesis Testing
Track: math | Level: intermediate`
        },
        {
          id: `math-hypothesis-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Hypothesis Testing**. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **math-hypothesis**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for math-hypothesis
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-hypothesis", "Hypothesis Testing")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-hypothesis Hypothesis`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with math ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with math ecosystem conventions

Topic: Hypothesis Testing
Track: math | Level: intermediate`
        },
        {
          id: `math-hypothesis-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Hypothesis Testing** often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on **math-hypothesis**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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

debug_step("math-hypothesis", "Hypothesis Testing")
debug_step("section_count", 4)`,
          output: `[math-hypothesis] 'Hypothesis Testing' (str)
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

Topic: Hypothesis Testing
Track: math | Level: intermediate`
        },
        {
          id: `math-hypothesis-real-world`,
          title: `Real-World Applications`,
          content: `**Hypothesis Testing** shows up wherever **math** skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around **math-hypothesis** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Hypothesis Testing
skills = ["math", "intermediate", "math-hypothesis"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, intermediate, math-hypothesis`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Hypothesis Testing to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Hypothesis Testing to adjacent topics in the same track

Topic: Hypothesis Testing
Track: math | Level: intermediate`
        }
      ],
      exercises: [
        {
          id: `ex-ht-1`,
          question: `One-sample t-test H0: mean=0 for [2,3,1,2,4].`,
          solution: `from scipy import stats
print(stats.ttest_1samp([2,3,1,2,4],0).pvalue)`,
          difficulty: `easy`
        },
        {
          id: `ex-ht-2`,
          question: `Two-proportion SE for p1=0.1,n1=100,p2=0.15,n2=100.`,
          solution: `import numpy as np
p1,p2,n1,n2=0.1,0.15,100,100
se=np.sqrt(p1*(1-p1)/n1+p2*(1-p2)/n2); print(se)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 124,
      module: `module-math-07`,
      references: [
        {
          id: `3blue1brown-linalg`,
          title: `Essence of Linear Algebra`,
          source: `3Blue1Brown`,
          type: `video`,
          url: `https://www.3blue1brown.com/topics/linear-algebra`,
          description: `Visual intuition for vectors, matrices, and transformations.`
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
          id: `3blue1brown-calculus`,
          title: `Essence of Calculus`,
          source: `3Blue1Brown`,
          type: `video`,
          url: `https://www.3blue1brown.com/topics/calculus`,
          description: `Geometric intuition for derivatives, integrals, and the chain rule.`
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
          id: `stanford-cs229`,
          title: `Stanford CS229 — Machine Learning`,
          source: `Stanford CS229`,
          type: `course`,
          url: `https://cs229.stanford.edu/`,
          description: `Andrew Ng's graduate ML course — the canonical theoretical foundation.`
        }
      ]
    },
{
      id: `math-confidence`,
      title: `Confidence Intervals`,
      description: `Construct and interpret confidence intervals for means and proportions.`,
      level: `intermediate`,
      track: `math`,
      sections: [
        {
          id: `ci-mean`,
          title: `CI for Mean`,
          content: `**CI for Mean** is essential to **Confidence Intervals**. Construct and interpret confidence intervals for means and proportions. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

95% CI x̄±t_{α/2,n−1}·s/√n uses t distribution small n; z_{0.975}=1.96 large n. Interpretation: procedure captures true μ in 95% of repeated samples—not P(μ in interval). Width ∝ 1/√n. Wider CI more uncertain. Bootstrapping: resample B times, percentile CI from bootstrap distribution. BCa bootstrap improves bias. Report CI with point estimate in papers and dashboards. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:** Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here. Mastering "CI for Mean" here directly affects how confidently you can build, debug, and ship math projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Verify formulas on paper with tiny examples, then confirm with numpy before scaling up. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.

**Mathematical foundation:** This section includes 5 key formulas. Identify each symbol's meaning, units, and valid input range before trusting numerical output.

**Visual guide:** Study the diagram alongside the explanation. Trace each arrow or region back to a term in the text — if you cannot, re-read until the mapping is clear.`,
          formulas: [
            `95% CI: x̄ ± t*·s/√n`,
            `Width ∝ 1/√n`,
            `t* → 1.96 as n→∞`,
            `Bootstrap percentile CI`,
            `CI = plausible μ values`
          ],
          diagram: `   CI as error bar:

   x̄ ────[====]────
       lower  upper

   wider = less precision
   │
   │  · · ·
   └──────────
   (see formulas above)`,
          keyPoints: [
            `CI frequency interpretation`,
            `t for small samples`,
            `Bootstrap when CLT weak`,
            `Width shrinks with √n`,
            `Always pair with estimate`
          ],
          example: `import numpy as np
from scipy import stats
x=np.random.randn(25)
se=x.std(ddof=1)/np.sqrt(len(x))
print(stats.t.interval(0.95, len(x)-1, loc=x.mean(), scale=se))`,
          output: `95% CI`,
          pseudoCode: `CONCEPT: CI for Mean

Key relationships:
  95% CI: x̄ ± t*·s/√n
  Width ∝ 1/√n
  t* → 1.96 as n→∞
  Bootstrap percentile CI
  CI = plausible μ values

Visual summary:
  CI as error bar:
  x̄ ────[====]────
  lower  upper
  wider = less precision
  │
  │  · · ·
  └──────────
  (see formulas above)

Study checklist:
  1. CI frequency interpretation
  2. t for small samples
  3. Bootstrap when CLT weak
  4. Width shrinks with √n
  5. Always pair with estimate

Topic: Confidence Intervals
Track: math | Level: intermediate`
        },
        {
          id: `ci-prop`,
          title: `CI for Proportions`,
          content: `Wald CI p̂±z√(p̂(1−p̂)/n) simple but poor small n/extreme p. **Wilson score** interval better coverage. Binomial exact (Clopper-Pearson) conservative. For ML accuracy on n test samples: report p̂±CI. Rare class metrics need large n for tight CI. Wilson preferred in modern practice over Wald for proportions. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:** Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here. Mastering "CI for Proportions" here directly affects how confidently you can build, debug, and ship math projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Verify formulas on paper with tiny examples, then confirm with numpy before scaling up. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.

**Mathematical foundation:** This section includes 5 key formulas. Identify each symbol's meaning, units, and valid input range before trusting numerical output.

**Visual guide:** Study the diagram alongside the explanation. Trace each arrow or region back to a term in the text — if you cannot, re-read until the mapping is clear.`,
          formulas: [
            `Wald: p̂ ± z√(p̂(1−p̂)/n)`,
            `Wilson score interval (better)`,
            `Agresti-Coull adjustment`,
            `Exact binomial conservative`,
            `Rare events need large n`
          ],
          diagram: `   accuracy 0.92 on n=100:

   CI might [0.85, 0.96]
   n=10000 → much tighter
   │
   │  · · ·
   └──────────
   (see formulas above)
   │
   │  · · ·`,
          keyPoints: [
            `Wald fails at extremes`,
            `Wilson recommended`,
            `Small test set wide CI`,
            `Report CI with accuracy`,
            `Rare class CIs very wide`
          ],
          example: `import numpy as np
from statsmodels.stats.proportion import proportion_confint
ci=proportion_confint(92,100,method="wilson")
print("Wilson:", ci)`,
          output: `Wilson CI`,
          pseudoCode: `CONCEPT: CI for Proportions

Key relationships:
  Wald: p̂ ± z√(p̂(1−p̂)/n)
  Wilson score interval (better)
  Agresti-Coull adjustment
  Exact binomial conservative
  Rare events need large n

Visual summary:
  accuracy 0.92 on n=100:
  CI might [0.85, 0.96]
  n=10000 → much tighter
  │
  │  · · ·
  └──────────
  (see formulas above)
  │
  │  · · ·

Study checklist:
  1. Wald fails at extremes
  2. Wilson recommended
  3. Small test set wide CI
  4. Report CI with accuracy
  5. Rare class CIs very wide

Topic: Confidence Intervals
Track: math | Level: intermediate`
        },
        {
          id: `ci-diff`,
          title: `CI for Differences`,
          content: `**CI for Differences** is essential to **Confidence Intervals**. Construct and interpret confidence intervals for means and proportions. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

CI for μ_A−μ_B: (x̄_A−x̄_B)±t*·SE_diff. Independent: SE_diff=√(s_A²/n_A+s_B²/n_B). Overlap of individual CIs ≠ non-significance of difference (common mistake). Paired: CI on mean difference. Lift CI in A/B: bootstrap on ratio or log ratio. If difference CI excludes 0, significant at corresponding α. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:** Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here. Mastering "CI for Differences" here directly affects how confidently you can build, debug, and ship math projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Verify formulas on paper with tiny examples, then confirm with numpy before scaling up. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.

**Mathematical foundation:** This section includes 5 key formulas. Identify each symbol's meaning, units, and valid input range before trusting numerical output.

**Visual guide:** Study the diagram alongside the explanation. Trace each arrow or region back to a term in the text — if you cannot, re-read until the mapping is clear.`,
          formulas: [
            `μ_A−μ_B CI: (x̄_A−x̄_B) ± t* SE`,
            `SE_diff independent groups`,
            `Paired: CI on d_i = x_i−y_i`,
            `Exclude 0 ↔ significant`,
            `Overlap CI misleading for diff`
          ],
          diagram: `   difference CI:

   0 inside CI → not significant
   0 outside → significant

   [====|----0----|====]
   │
   │  · · ·
   └──────────
   (see formulas above)`,
          keyPoints: [
            `Difference CI tests effect`,
            `Overlap individual CIs misleading`,
            `Paired uses difference scores`,
            `Bootstrap for ratio metrics`,
            `Exclude zero = significant`
          ],
          example: `import numpy as np
a,b=np.random.randn(50)+0.2, np.random.randn(50)
d=a.mean()-b.mean()
se=np.sqrt(a.var(ddof=1)/50+b.var(ddof=1)/50)
print("diff CI:", d-1.96*se, d+1.96*se)`,
          output: `diff CI`,
          pseudoCode: `CONCEPT: CI for Differences

Key relationships:
  μ_A−μ_B CI: (x̄_A−x̄_B) ± t* SE
  SE_diff independent groups
  Paired: CI on d_i = x_i−y_i
  Exclude 0 ↔ significant
  Overlap CI misleading for diff

Visual summary:
  difference CI:
  0 inside CI → not significant
  0 outside → significant
  [====|----0----|====]
  │
  │  · · ·
  └──────────
  (see formulas above)

Study checklist:
  1. Difference CI tests effect
  2. Overlap individual CIs misleading
  3. Paired uses difference scores
  4. Bootstrap for ratio metrics
  5. Exclude zero = significant

Topic: Confidence Intervals
Track: math | Level: intermediate`
        },
        {
          id: `ci-ml`,
          title: `Uncertainty in ML Metrics`,
          content: `Bootstrap test set for metric CI. CV: mean±std across folds is approximate. **Conformal prediction** gives prediction intervals with coverage guarantee. Bayesian models posterior predictive intervals. Report F1 CI on imbalanced data especially. Leaderboard scores without CI overfit to test noise. Nested CV for unbiased performance estimate with uncertainty. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:** Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here. Mastering "Uncertainty in ML Metrics" here directly affects how confidently you can build, debug, and ship math projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Verify formulas on paper with tiny examples, then confirm with numpy before scaling up. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.

**Mathematical foundation:** This section includes 5 key formulas. Identify each symbol's meaning, units, and valid input range before trusting numerical output.

**Visual guide:** Study the diagram alongside the explanation. Trace each arrow or region back to a term in the text — if you cannot, re-read until the mapping is clear.`,
          formulas: [
            `Bootstrap metrics on test set`,
            `CV mean ± std approximate`,
            `Conformal: distribution-free coverage`,
            `Bayesian predictive intervals`,
            `Nested CV for model selection`
          ],
          diagram: `   metric report format:

   F1 = 0.87 (95% CI: 0.84–0.90)

   not just F1 = 0.87
   │
   │  · · ·
   └──────────
   (see formulas above)
   │`,
          keyPoints: [
            `Always quantify metric uncertainty`,
            `Bootstrap simple and flexible`,
            `Conformal for prediction bands`,
            `Nested CV reduces selection bias`,
            `Leaderboards ignore uncertainty`
          ],
          example: `import numpy as np
acc=[0.9,0.88,0.91,0.89,0.9]  # 5-fold
print("mean:", np.mean(acc), "std:", np.std(acc,ddof=1))`,
          output: `CV stats`,
          pseudoCode: `CONCEPT: Uncertainty in ML Metrics

Key relationships:
  Bootstrap metrics on test set
  CV mean ± std approximate
  Conformal: distribution-free coverage
  Bayesian predictive intervals
  Nested CV for model selection

Visual summary:
  metric report format:
  F1 = 0.87 (95% CI: 0.84–0.90)
  not just F1 = 0.87
  │
  │  · · ·
  └──────────
  (see formulas above)
  │

Study checklist:
  1. Always quantify metric uncertainty
  2. Bootstrap simple and flexible
  3. Conformal for prediction bands
  4. Nested CV reduces selection bias
  5. Leaderboards ignore uncertainty

Topic: Confidence Intervals
Track: math | Level: intermediate`
        },
        {
          id: `math-confidence-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Confidence Intervals** sits in the **math** track of the Data Science Master curriculum. Construct and interpret confidence intervals for means and proportions.

**Theoretical foundation:** Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directly to numpy operations and loss functions.

For **math-confidence**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
          example: `# Concept check for Confidence Intervals
meta = {"topic_id": "math-confidence", "track": "math", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-confidence math intermediate`,
          keyPoints: [
            `Core theory of Confidence Intervals ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Confidence Intervals ties to the math track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Confidence Intervals
Track: math | Level: intermediate`
        },
        {
          id: `math-confidence-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Confidence Intervals**. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **math-confidence**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for math-confidence
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-confidence", "Confidence Intervals")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-confidence Confidence`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with math ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with math ecosystem conventions

Topic: Confidence Intervals
Track: math | Level: intermediate`
        },
        {
          id: `math-confidence-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Confidence Intervals** often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on **math-confidence**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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

debug_step("math-confidence", "Confidence Intervals")
debug_step("section_count", 4)`,
          output: `[math-confidence] 'Confidence Intervals' (str)
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

Topic: Confidence Intervals
Track: math | Level: intermediate`
        },
        {
          id: `math-confidence-real-world`,
          title: `Real-World Applications`,
          content: `**Confidence Intervals** shows up wherever **math** skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around **math-confidence** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Confidence Intervals
skills = ["math", "intermediate", "math-confidence"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, intermediate, math-confidence`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Confidence Intervals to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Confidence Intervals to adjacent topics in the same track

Topic: Confidence Intervals
Track: math | Level: intermediate`
        }
      ],
      exercises: [
        {
          id: `ex-ci-1`,
          question: `95% CI for mean of [10,12,14] assuming known s=2, n small use t.`,
          solution: `from scipy import stats
import numpy as np
x=[10,12,14]; se=2/np.sqrt(3)
print(stats.t.interval(0.95,2,loc=np.mean(x),scale=se))`,
          difficulty: `easy`
        },
        {
          id: `ex-ci-2`,
          question: `Wilson CI for 45 successes/50 trials.`,
          solution: `from statsmodels.stats.proportion import proportion_confint
print(proportion_confint(45,50,method="wilson"))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 124,
      module: `module-math-07`,
      references: [
        {
          id: `3blue1brown-linalg`,
          title: `Essence of Linear Algebra`,
          source: `3Blue1Brown`,
          type: `video`,
          url: `https://www.3blue1brown.com/topics/linear-algebra`,
          description: `Visual intuition for vectors, matrices, and transformations.`
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
          id: `3blue1brown-calculus`,
          title: `Essence of Calculus`,
          source: `3Blue1Brown`,
          type: `video`,
          url: `https://www.3blue1brown.com/topics/calculus`,
          description: `Geometric intuition for derivatives, integrals, and the chain rule.`
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
          id: `stanford-cs229`,
          title: `Stanford CS229 — Machine Learning`,
          source: `Stanford CS229`,
          type: `course`,
          url: `https://cs229.stanford.edu/`,
          description: `Andrew Ng's graduate ML course — the canonical theoretical foundation.`
        }
      ]
    },
{
      id: `math-regression-math`,
      title: `Regression Mathematics`,
      description: `Linear regression normal equations, assumptions, and statistical inference.`,
      level: `intermediate`,
      track: `math`,
      sections: [
        {
          id: `reg-ols`,
          title: `Ordinary Least Squares`,
          content: `Model y=Xβ+ε. OLS minimizes ||y−Xβ||². **Normal equations** XᵀXβ=Xᵀy. Solution β=(XᵀX)⁻¹Xᵀy if full rank. Geometric: orthogonal projection of y onto Col(X). Hat matrix H=X(XᵀX)⁻¹Xᵀ, ŷ=Hy. Residuals e=y−ŷ orthogonal to Col(X). Multiple regression adds columns to X. Polynomial regression linear in β with nonlinear features. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:** Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here. Mastering "Ordinary Least Squares" here directly affects how confidently you can build, debug, and ship math projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Verify formulas on paper with tiny examples, then confirm with numpy before scaling up. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.

**Mathematical foundation:** This section includes 5 key formulas. Identify each symbol's meaning, units, and valid input range before trusting numerical output.

**Visual guide:** Study the diagram alongside the explanation. Trace each arrow or region back to a term in the text — if you cannot, re-read until the mapping is clear.`,
          formulas: [
            `min ||y − Xβ||²`,
            `Normal eq: XᵀXβ = Xᵀy`,
            `β = (XᵀX)⁻¹ Xᵀy`,
            `ŷ = H y projection`,
            `e = y − ŷ ⊥ Col(X)`
          ],
          diagram: `   y vector projected onto
   column space of X:

        y
       ╱| ŷ
      ╱ |
     ╱  | e (residual)
    Col(X)
   │
   │  · · ·`,
          keyPoints: [
            `OLS = orthogonal projection`,
            `Normal equations from calculus`,
            `Full rank needed unique β`,
            `Polynomial via feature map`,
            `Residuals orthogonal to fit`
          ],
          example: `import numpy as np
X=np.column_stack([np.ones(5),np.arange(5)])
y=np.array([1,3,3,5,5])
beta=np.linalg.lstsq(X,y,rcond=None)[0]
print("beta:", beta)`,
          output: `intercept slope`,
          pseudoCode: `CONCEPT: Ordinary Least Squares

Key relationships:
  min ||y − Xβ||²
  Normal eq: XᵀXβ = Xᵀy
  β = (XᵀX)⁻¹ Xᵀy
  ŷ = H y projection
  e = y − ŷ ⊥ Col(X)

Visual summary:
  y vector projected onto
  column space of X:
  y
  ╱| ŷ
  ╱ |
  ╱  | e (residual)
  Col(X)
  │
  │  · · ·

Study checklist:
  1. OLS = orthogonal projection
  2. Normal equations from calculus
  3. Full rank needed unique β
  4. Polynomial via feature map
  5. Residuals orthogonal to fit

Topic: Regression Mathematics
Track: math | Level: intermediate`
        },
        {
          id: `reg-assump`,
          title: `Regression Assumptions`,
          content: `**Regression Assumptions** is essential to **Regression Mathematics**. Linear regression normal equations, assumptions, and statistical inference. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Classical linear model: (1) linearity E[ε|X]=0 (2) homoscedasticity Var(ε|X)=σ² constant (3) independence (4) no perfect multicollinearity (5) often normality of ε for inference. Violations: heteroscedasticity, autocorrelation, nonlinearity. Diagnostics: residual plots, VIF for multicollinearity, Breusch-Pagan test. Robust SE or weighted least squares address heteroscedasticity. Regularization when collinear.

**Why this matters:** Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here. Mastering "Regression Assumptions" here directly affects how confidently you can build, debug, and ship math projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Verify formulas on paper with tiny examples, then confirm with numpy before scaling up. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.

**Mathematical foundation:** This section includes 5 key formulas. Identify each symbol's meaning, units, and valid input range before trusting numerical output.

**Visual guide:** Study the diagram alongside the explanation. Trace each arrow or region back to a term in the text — if you cannot, re-read until the mapping is clear.`,
          formulas: [
            `E[ε|X] = 0`,
            `Var(ε|X) = σ² (homoscedastic)`,
            `No perfect collinearity`,
            `ε ~ N(0,σ²) for t-tests`,
            `VIF detects multicollinearity`
          ],
          diagram: `   residual plot healthy:

   e │ ·  ·    random scatter
     │   · ·
     └── predictor

   funnel → heteroscedasticity
   │
   │  · · ·
   └──────────`,
          keyPoints: [
            `Check residuals systematically`,
            `Funnel shape bad`,
            `VIF>10 concern collinearity`,
            `Normality for CI/p-values`,
            `Regularize collinear features`
          ],
          example: `import numpy as np
X=np.random.randn(100,3)
print("rank:", np.linalg.matrix_rank(X))`,
          output: `full rank likely`,
          pseudoCode: `CONCEPT: Regression Assumptions

Key relationships:
  E[ε|X] = 0
  Var(ε|X) = σ² (homoscedastic)
  No perfect collinearity
  ε ~ N(0,σ²) for t-tests
  VIF detects multicollinearity

Visual summary:
  residual plot healthy:
  e │ ·  ·    random scatter
  │   · ·
  └── predictor
  funnel → heteroscedasticity
  │
  │  · · ·
  └──────────

Study checklist:
  1. Check residuals systematically
  2. Funnel shape bad
  3. VIF>10 concern collinearity
  4. Normality for CI/p-values
  5. Regularize collinear features

Topic: Regression Mathematics
Track: math | Level: intermediate`
        },
        {
          id: `reg-infer`,
          title: `Statistical Inference`,
          content: `**Statistical Inference** is essential to **Regression Mathematics**. Linear regression normal equations, assumptions, and statistical inference. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

β̂ variance σ²(XᵀX)⁻¹. Estimate σ² by s²=||e||²/(n−p−1). t-test for β_j=0: t=β̂_j/SE(β̂_j). F-test overall model. R²=1−SSE/SST proportion variance explained— increases with more features. Adjusted R² penalizes complexity. Confidence bands for mean response vs prediction intervals wider include ε noise. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:** Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here. Mastering "Statistical Inference" here directly affects how confidently you can build, debug, and ship math projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Verify formulas on paper with tiny examples, then confirm with numpy before scaling up. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.

**Mathematical foundation:** This section includes 5 key formulas. Identify each symbol's meaning, units, and valid input range before trusting numerical output.

**Visual guide:** Study the diagram alongside the explanation. Trace each arrow or region back to a term in the text — if you cannot, re-read until the mapping is clear.`,
          formulas: [
            `Var(β̂) = σ² (XᵀX)⁻¹`,
            `s² = ||e||²/(n−p−1)`,
            `t = β̂_j / SE(β̂_j)`,
            `R² = 1 − SSE/SST`,
            `Adj R² penalizes p`
          ],
          diagram: `   R² interpretation:

   0 = no better than mean
   1 = perfect fit (overfit risk)

   adj R² down if useless feature added
   │
   │  · · ·
   └──────────
   (see formulas above)`,
          keyPoints: [
            `SE on coefficients for significance`,
            `R² not always better high`,
            `Adj R² compares models`,
            `Prediction interval wider than CI mean`,
            `F-test overall significance`
          ],
          example: `import numpy as np
y=np.array([1,2,3,4,5]); yhat=np.array([1.1,1.9,3.2,3.8,5.1])
ss_res=((y-yhat)**2).sum(); ss_tot=((y-y.mean())**2).sum()
print("R2:", 1-ss_res/ss_tot)`,
          output: `R2`,
          pseudoCode: `CONCEPT: Statistical Inference

Key relationships:
  Var(β̂) = σ² (XᵀX)⁻¹
  s² = ||e||²/(n−p−1)
  t = β̂_j / SE(β̂_j)
  R² = 1 − SSE/SST
  Adj R² penalizes p

Visual summary:
  R² interpretation:
  0 = no better than mean
  1 = perfect fit (overfit risk)
  adj R² down if useless feature added
  │
  │  · · ·
  └──────────
  (see formulas above)

Study checklist:
  1. SE on coefficients for significance
  2. R² not always better high
  3. Adj R² compares models
  4. Prediction interval wider than CI mean
  5. F-test overall significance

Topic: Regression Mathematics
Track: math | Level: intermediate`
        },
        {
          id: `reg-ml`,
          title: `Regression to ML`,
          content: `Linear regression foundation for GLMs, logistic (IRLS), neural nets (linear output layer). **Ridge** L2, **Lasso** L1, **Elastic Net** combine. Gradient descent scales to large data vs normal equations O(np²). Regularization as Bayesian priors. Polynomial and interaction features expand X. Logistic regression for classification still linear in features. Understanding OLS clarifies loss surfaces and normal equations in linear networks.

**Why this matters:** Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here. Mastering "Regression to ML" here directly affects how confidently you can build, debug, and ship math projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Verify formulas on paper with tiny examples, then confirm with numpy before scaling up. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.

**Mathematical foundation:** This section includes 5 key formulas. Identify each symbol's meaning, units, and valid input range before trusting numerical output.

**Visual guide:** Study the diagram alongside the explanation. Trace each arrow or region back to a term in the text — if you cannot, re-read until the mapping is clear.`,
          formulas: [
            `Ridge: min ||y−Xβ||² + λ||β||²`,
            `Lasso: L1 → sparsity`,
            `GD scales big data`,
            `Normal eq O(np²) expensive`,
            `GLM generalizes linear model`
          ],
          diagram: `   OLS → Ridge → Lasso

   add λ||β||²   add λ||β||₁
   shrink        select features
   │
   │  · · ·
   └──────────
   (see formulas above)
   │
   │  · · ·`,
          keyPoints: [
            `Normal eq fine small p`,
            `GD for deep/large data`,
            `Ridge handles collinearity`,
            `Lasso feature selection`,
            `Logistic = linear + logit link`
          ],
          example: `import numpy as np
X=np.random.randn(100,5); y=X@np.arange(5)+np.random.randn(100)*0.1
lam=1.
beta=np.linalg.solve(X.T@X+lam*np.eye(5), X.T@y)
print("ridge beta shape:", beta.shape)`,
          output: `ridge solution`,
          pseudoCode: `CONCEPT: Regression to ML

Key relationships:
  Ridge: min ||y−Xβ||² + λ||β||²
  Lasso: L1 → sparsity
  GD scales big data
  Normal eq O(np²) expensive
  GLM generalizes linear model

Visual summary:
  OLS → Ridge → Lasso
  add λ||β||²   add λ||β||₁
  shrink        select features
  │
  │  · · ·
  └──────────
  (see formulas above)
  │
  │  · · ·

Study checklist:
  1. Normal eq fine small p
  2. GD for deep/large data
  3. Ridge handles collinearity
  4. Lasso feature selection
  5. Logistic = linear + logit link

Topic: Regression Mathematics
Track: math | Level: intermediate`
        },
        {
          id: `math-regression-math-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Regression Mathematics** sits in the **math** track of the Data Science Master curriculum. Linear regression normal equations, assumptions, and statistical inference.

**Theoretical foundation:** Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directly to numpy operations and loss functions.

For **math-regression-math**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
          example: `# Concept check for Regression Mathematics
meta = {"topic_id": "math-regression-math", "track": "math", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-regression-math math intermediate`,
          keyPoints: [
            `Core theory of Regression Mathematics ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Regression Mathematics ties to the math track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Regression Mathematics
Track: math | Level: intermediate`
        },
        {
          id: `math-regression-math-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Regression Mathematics**. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **math-regression-math**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for math-regression-math
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-regression-math", "Regression Mathematics")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-regression-math Regression`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with math ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with math ecosystem conventions

Topic: Regression Mathematics
Track: math | Level: intermediate`
        },
        {
          id: `math-regression-math-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Regression Mathematics** often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on **math-regression-math**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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

debug_step("math-regression-math", "Regression Mathematics")
debug_step("section_count", 4)`,
          output: `[math-regression-math] 'Regression Mathematics' (str)
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

Topic: Regression Mathematics
Track: math | Level: intermediate`
        },
        {
          id: `math-regression-math-real-world`,
          title: `Real-World Applications`,
          content: `**Regression Mathematics** shows up wherever **math** skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around **math-regression-math** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Regression Mathematics
skills = ["math", "intermediate", "math-regression-math"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, intermediate, math-regression-math`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Regression Mathematics to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Regression Mathematics to adjacent topics in the same track

Topic: Regression Mathematics
Track: math | Level: intermediate`
        }
      ],
      exercises: [
        {
          id: `ex-reg-1`,
          question: `Fit y=2+3x to points (0,2),(1,5),(2,8) via lstsq.`,
          solution: `import numpy as np
X=np.array([[1,0],[1,1],[1,2]]); y=[2,5,8]
print(np.linalg.lstsq(X,y,rcond=None)[0])`,
          difficulty: `easy`
        },
        {
          id: `ex-reg-2`,
          question: `Compute R² for perfect fit y=yhat.`,
          solution: `import numpy as np
y=np.array([1,2,3]); print(1-0/((y-y.mean())**2).sum())`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 124,
      module: `module-math-07`,
      references: [
        {
          id: `3blue1brown-linalg`,
          title: `Essence of Linear Algebra`,
          source: `3Blue1Brown`,
          type: `video`,
          url: `https://www.3blue1brown.com/topics/linear-algebra`,
          description: `Visual intuition for vectors, matrices, and transformations.`
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
          id: `3blue1brown-calculus`,
          title: `Essence of Calculus`,
          source: `3Blue1Brown`,
          type: `video`,
          url: `https://www.3blue1brown.com/topics/calculus`,
          description: `Geometric intuition for derivatives, integrals, and the chain rule.`
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
          id: `stanford-cs229`,
          title: `Stanford CS229 — Machine Learning`,
          source: `Stanford CS229`,
          type: `course`,
          url: `https://cs229.stanford.edu/`,
          description: `Andrew Ng's graduate ML course — the canonical theoretical foundation.`
        }
      ]
    }
];
