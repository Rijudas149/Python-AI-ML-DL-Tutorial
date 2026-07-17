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

**Extended exploration — Descriptive Statistics:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Central Tendency" connects to mean, variance, percentiles, and exploratory data summaries. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
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
          output: `mean inflated by 100`
        },
        {
          id: `ds-spread`,
          title: `Variance & Spread`,
          content: `Sample variance s²=(1/(n−1))∑(x_i−x̄)² unbiased for σ². Population variance divides by n. **IQR** Q3−Q1 robust spread. **MAD** median absolute deviation. Std σ same units as data. CV=σ/|μ| relative spread. Range max−min sensitive. Boxplot shows quartiles and outliers. Feature scaling uses std. High variance features may dominate distance metrics without normalization. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
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
          output: `var/IQR`
        },
        {
          id: `ds-percentile`,
          title: `Percentiles & Quantiles`,
          content: `p-th percentile: p% data below. **Quartiles** Q1=25%, Q2=median, Q3=75%. Quantile function Q(p) inverse CDF. Used in thresholds, SLA metrics, and **quantile loss** for forecasting median (pinball loss). np.percentile, np.quantile. Robust min/max estimation via percentiles for clipping outliers. Deciles, percentiles standard in reporting latency p95, p99 in systems monitoring. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
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
          output: `p95 ~ 1.64`
        },
        {
          id: `ds-eda`,
          title: `EDA for ML`,
          content: `Summary stats per feature: mean, std, missing rate, unique count. Histograms reveal skew/multimodality. Correlation matrix detects redundancy. Pairplots for bivariate. Target distribution check for class imbalance. Outlier flags via IQR rule. EDA prevents garbage-in failures. Document findings before modeling. Automated profiling (pandas describe, ydata-profiling) accelerates. Compare train vs test distributions for shift detection.

**Extended exploration — Descriptive Statistics:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "EDA for ML" connects to mean, variance, percentiles, and exploratory data summaries. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
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
          output: `describe output`
        },
        {
          id: `math-descriptive-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Descriptive Statistics sits in the **math** track of the Data Science Master curriculum. Mean, variance, percentiles, and exploratory data summaries.

Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directly to numpy operations and loss functions.

For math-descriptive, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (intermediate):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
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
          ]
        },
        {
          id: `math-descriptive-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Descriptive Statistics. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For math-descriptive, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
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
          ]
        },
        {
          id: `math-descriptive-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Descriptive Statistics often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on math-descriptive, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
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
          ]
        },
        {
          id: `math-descriptive-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Descriptive Statistics shows up wherever math skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around math-descriptive align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
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
          ]
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
      estimatedMinutes: 50,
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

**Extended exploration — Sampling & Central Limit Theorem:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Random Sampling" connects to sampling distributions, standard error, and clt applications. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
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
          output: `random sample`
        },
        {
          id: `sc-se`,
          title: `Standard Error`,
          content: `**Standard error** SE(x̄)=σ/√n measures variability of sample mean across samples. Unknown σ: estimate s/√n. SE shrinks as √n—more data tighter estimate. 95% CI x̄±1.96 SE approximate (CLT). Compare models using SE of metric difference. Reporting accuracy without SE hides uncertainty. Cross-validation folds give multiple metric samples—report mean±std. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Extended exploration — Sampling & Central Limit Theorem:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Standard Error" connects to sampling distributions, standard error, and clt applications. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
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
          output: `SE: 0.2`
        },
        {
          id: `sc-clt`,
          title: `Central Limit Theorem Detail`,
          content: `Standardized x̄: (x̄−μ)/(σ/√n) → N(0,1) in distribution. Works for many non-normal populations. Rule of thumb n≥30. Also applies to proportions p̂ approx N(p, p(1−p)/n). Enables z-tests and CIs. Sum of n RVs also normal for large n. CLT fails heavy tails infinite variance. Bootstrap nonparametric alternative when CLT questionable. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Extended exploration — Sampling & Central Limit Theorem:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Central Limit Theorem Detail" connects to sampling distributions, standard error, and clt applications. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
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
          output: `≈ 1, ≈ 1/√30`
        },
        {
          id: `sc-ml`,
          title: `Sampling in ML Evaluation`,
          content: `Hold-out test set estimates generalization error. **K-fold CV** reduces variance of metric estimate. **Bootstrap** confidence on AUC. **Stratified k-fold** preserves class ratio. Multiple seeds report mean±std. **Power analysis** determines n needed to detect effect. Online A/B tests sequential sampling with caution (peeking). Always fix test set; tune on val only once workflow to avoid overfitting selection.

**Extended exploration — Sampling & Central Limit Theorem:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Sampling in ML Evaluation" connects to sampling distributions, standard error, and clt applications. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
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
          output: `4 each fold`
        },
        {
          id: `math-sampling-clt-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Sampling & Central Limit Theorem sits in the **math** track of the Data Science Master curriculum. Sampling distributions, standard error, and CLT applications.

Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directly to numpy operations and loss functions.

For math-sampling-clt, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (intermediate):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
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
          ]
        },
        {
          id: `math-sampling-clt-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Sampling & Central Limit Theorem. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For math-sampling-clt, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
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
          ]
        },
        {
          id: `math-sampling-clt-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Sampling & Central Limit Theorem often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on math-sampling-clt, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
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
          ]
        },
        {
          id: `math-sampling-clt-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Sampling & Central Limit Theorem shows up wherever math skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around math-sampling-clt align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
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
          ]
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
      estimatedMinutes: 50,
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
          content: `**H₀** null hypothesis default skepticism. **H₁** alternative. **Test statistic** summarizes data vs H₀. **p-value** P(data this extreme|H₀). Reject H₀ if p<α (significance level, often 0.05). **Type I error** false positive rate α. **Type II** β false negative. Power=1−β. Not 'accept H₀'—fail to reject. p-value NOT P(H₀ true). Multiple testing inflates false positives—Bonferroni correction α/m. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
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
          output: `p-value`
        },
        {
          id: `ht-tests`,
          title: `Common Tests`,
          content: `**z-test** mean known σ large n. **t-test** mean unknown σ small n. Paired t for before/after. Two-sample t independent groups. **χ²** goodness-of-fit and independence in contingency tables. **F-test** variance ratio. ANOVA F for multiple means. Choose test matching data type and assumptions (normality, independence). Nonparametric: Mann-Whitney, Wilcoxon when normality fails. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
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
          output: `p from ttest`
        },
        {
          id: `ht-ab`,
          title: `A/B Testing`,
          content: `Compare conversion rates p_A vs p_B. H₀: p_A=p_B. Two-proportion z-test or χ² on 2×2 table. Need sample size for desired power. **SRM** sample ratio mismatch checks randomization. Run fixed horizon avoid peeking bias. **Sequential testing** specialized bounds. Practical significance vs statistical: 0.01% lift may be significant with huge n but useless. Bayesian A/B alternative gives posterior on lift.

**Extended exploration — Hypothesis Testing:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "A/B Testing" connects to null/alternative, p-values, errors, and common tests. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
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
          output: `z stat`
        },
        {
          id: `ht-ml`,
          title: `Testing in ML Experiments`,
          content: `**McNemar** paired classifier comparison same test set. **Permutation test** shuffle labels nonparametric p-value. **Diebold-Mariano** forecast comparison. Compare CV scores with paired t across folds. Report confidence intervals on metric not just point. **Multiple model comparison** Bonferroni or Holm correction. Statistical significance ≠ better production model—consider latency, cost, fairness.

**Extended exploration — Hypothesis Testing:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Testing in ML Experiments" connects to null/alternative, p-values, errors, and common tests. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
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
          output: `perm p`
        },
        {
          id: `math-hypothesis-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Hypothesis Testing sits in the **math** track of the Data Science Master curriculum. Null/alternative, p-values, errors, and common tests.

Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directly to numpy operations and loss functions.

For math-hypothesis, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (intermediate):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
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
          ]
        },
        {
          id: `math-hypothesis-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Hypothesis Testing. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For math-hypothesis, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
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
          ]
        },
        {
          id: `math-hypothesis-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Hypothesis Testing often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on math-hypothesis, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
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
          ]
        },
        {
          id: `math-hypothesis-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Hypothesis Testing shows up wherever math skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around math-hypothesis align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
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
          ]
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
      estimatedMinutes: 50,
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
          content: `95% CI x̄±t_{α/2,n−1}·s/√n uses t distribution small n; z_{0.975}=1.96 large n. Interpretation: procedure captures true μ in 95% of repeated samples—not P(μ in interval). Width ∝ 1/√n. Wider CI more uncertain. Bootstrapping: resample B times, percentile CI from bootstrap distribution. BCa bootstrap improves bias. Report CI with point estimate in papers and dashboards. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
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
          output: `95% CI`
        },
        {
          id: `ci-prop`,
          title: `CI for Proportions`,
          content: `Wald CI p̂±z√(p̂(1−p̂)/n) simple but poor small n/extreme p. **Wilson score** interval better coverage. Binomial exact (Clopper-Pearson) conservative. For ML accuracy on n test samples: report p̂±CI. Rare class metrics need large n for tight CI. Wilson preferred in modern practice over Wald for proportions. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Extended exploration — Confidence Intervals:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "CI for Proportions" connects to construct and interpret confidence intervals for means and proportions. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
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
          output: `Wilson CI`
        },
        {
          id: `ci-diff`,
          title: `CI for Differences`,
          content: `CI for μ_A−μ_B: (x̄_A−x̄_B)±t*·SE_diff. Independent: SE_diff=√(s_A²/n_A+s_B²/n_B). Overlap of individual CIs ≠ non-significance of difference (common mistake). Paired: CI on mean difference. Lift CI in A/B: bootstrap on ratio or log ratio. If difference CI excludes 0, significant at corresponding α. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Extended exploration — Confidence Intervals:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "CI for Differences" connects to construct and interpret confidence intervals for means and proportions. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
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
          output: `diff CI`
        },
        {
          id: `ci-ml`,
          title: `Uncertainty in ML Metrics`,
          content: `Bootstrap test set for metric CI. CV: mean±std across folds is approximate. **Conformal prediction** gives prediction intervals with coverage guarantee. Bayesian models posterior predictive intervals. Report F1 CI on imbalanced data especially. Leaderboard scores without CI overfit to test noise. Nested CV for unbiased performance estimate with uncertainty. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Extended exploration — Confidence Intervals:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Uncertainty in ML Metrics" connects to construct and interpret confidence intervals for means and proportions. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
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
          output: `CV stats`
        },
        {
          id: `math-confidence-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Confidence Intervals sits in the **math** track of the Data Science Master curriculum. Construct and interpret confidence intervals for means and proportions.

Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directly to numpy operations and loss functions.

For math-confidence, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (intermediate):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
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
          ]
        },
        {
          id: `math-confidence-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Confidence Intervals. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For math-confidence, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
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
          ]
        },
        {
          id: `math-confidence-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Confidence Intervals often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on math-confidence, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
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
          ]
        },
        {
          id: `math-confidence-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Confidence Intervals shows up wherever math skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around math-confidence align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
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
          ]
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
      estimatedMinutes: 50,
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

**Extended exploration — Regression Mathematics:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Ordinary Least Squares" connects to linear regression normal equations, assumptions, and statistical inference. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
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
          output: `intercept slope`
        },
        {
          id: `reg-assump`,
          title: `Regression Assumptions`,
          content: `Classical linear model: (1) linearity E[ε|X]=0 (2) homoscedasticity Var(ε|X)=σ² constant (3) independence (4) no perfect multicollinearity (5) often normality of ε for inference. Violations: heteroscedasticity, autocorrelation, nonlinearity. Diagnostics: residual plots, VIF for multicollinearity, Breusch-Pagan test. Robust SE or weighted least squares address heteroscedasticity. Regularization when collinear.

**Extended exploration — Regression Mathematics:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Regression Assumptions" connects to linear regression normal equations, assumptions, and statistical inference. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
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
          output: `full rank likely`
        },
        {
          id: `reg-infer`,
          title: `Statistical Inference`,
          content: `β̂ variance σ²(XᵀX)⁻¹. Estimate σ² by s²=||e||²/(n−p−1). t-test for β_j=0: t=β̂_j/SE(β̂_j). F-test overall model. R²=1−SSE/SST proportion variance explained— increases with more features. Adjusted R² penalizes complexity. Confidence bands for mean response vs prediction intervals wider include ε noise. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Extended exploration — Regression Mathematics:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Statistical Inference" connects to linear regression normal equations, assumptions, and statistical inference. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
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
          output: `R2`
        },
        {
          id: `reg-ml`,
          title: `Regression to ML`,
          content: `Linear regression foundation for GLMs, logistic (IRLS), neural nets (linear output layer). **Ridge** L2, **Lasso** L1, **Elastic Net** combine. Gradient descent scales to large data vs normal equations O(np²). Regularization as Bayesian priors. Polynomial and interaction features expand X. Logistic regression for classification still linear in features. Understanding OLS clarifies loss surfaces and normal equations in linear networks.

**Extended exploration — Regression Mathematics:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Regression to ML" connects to linear regression normal equations, assumptions, and statistical inference. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
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
          output: `ridge solution`
        },
        {
          id: `math-regression-math-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Regression Mathematics sits in the **math** track of the Data Science Master curriculum. Linear regression normal equations, assumptions, and statistical inference.

Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directly to numpy operations and loss functions.

For math-regression-math, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (intermediate):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
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
          ]
        },
        {
          id: `math-regression-math-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Regression Mathematics. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For math-regression-math, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
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
          ]
        },
        {
          id: `math-regression-math-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Regression Mathematics often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on math-regression-math, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
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
          ]
        },
        {
          id: `math-regression-math-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Regression Mathematics shows up wherever math skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around math-regression-math align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
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
          ]
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
      estimatedMinutes: 50,
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
