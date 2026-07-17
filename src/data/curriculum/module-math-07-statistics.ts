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
          content: `**Mean** x̄=(1/n)∑x_i sensitive to outliers. **Median** middle value robust. **Mode** most frequent; useful categorical.

**Trimmed mean** drops extremes. Weighted mean for uneven importance. Geometric mean for rates/ratios.

Harmonic mean for rates. In skewed income data, median better than mean. ML: batch normalization uses batch mean; layer norm uses feature statistics.

Choose summary matching distribution shape and robustness needs.

**Central Tendency** in the context of **Descriptive Statistics**: Work through the example below with pen and paper first, then verify in code. The formulas and diagram connect directly to how models learn and how you debug numerical issues.`,
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

Diagram (summary):
  skewed data:
  mean → pulled by tail
  median → center of mass
  ·  ·  ·│· · ·
  ↑ median
  │
  │  · · ·
  └──────────
  (see formulas above)

Checklist:
  1. Mean sensitive to outliers
  2. Median robust for skew
  3. Mode for categorical peaks
  4. Batch norm tracks mean
  5. Report median for skewed metrics`
        },
        {
          id: `ds-spread`,
          title: `Variance & Spread`,
          content: `Sample variance s²=(1/(n−1))∑(x_i−x̄)² unbiased for σ². Population variance divides by n. **IQR** Q3−Q1 robust spread.

**MAD** median absolute deviation. Std σ same units as data. CV=σ/|μ| relative spread.

Range max−min sensitive. Boxplot shows quartiles and outliers. Feature scaling uses std.

High variance features may dominate distance metrics without normalization. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Variance & Spread** in the context of **Descriptive Statistics**: Work through the example below with pen and paper first, then verify in code. The formulas and diagram connect directly to how models learn and how you debug numerical issues.`,
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

Diagram (summary):
  boxplot:
  max ─┬─
  Q3  ─┤
  med ─┤ box
  Q1  ─┤
  min ─┴─ outliers ·
  │
  │  · · ·
  └──────────

Checklist:
  1. n−1 for unbiased sample var
  2. IQR robust to outliers
  3. Std for z-score scaling
  4. Boxplot visualizes quartiles
  5. Normalize before distance-based ML`
        },
        {
          id: `ds-percentile`,
          title: `Percentiles & Quantiles`,
          content: `p-th percentile: p% data below. **Quartiles** Q1=25%, Q2=median, Q3=75%.

Quantile function Q(p) inverse CDF. Used in thresholds, SLA metrics, and **quantile loss** for forecasting median (pinball loss). np.percentile, np.quantile.

Robust min/max estimation via percentiles for clipping outliers. Deciles, percentiles standard in reporting latency p95, p99 in systems monitoring.

Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Percentiles & Quantiles** in the context of **Descriptive Statistics**: Work through the example below with pen and paper first, then verify in code. The formulas and diagram connect directly to how models learn and how you debug numerical issues.`,
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

Diagram (summary):
  CDF F(x)
  0 ──────────────── 1
  ↑ Q(0.95)
  95% below this value
  │
  │  · · ·
  └──────────
  (see formulas above)
  │

Checklist:
  1. Percentiles invert CDF
  2. Pinball loss for quantile reg
  3. p95/p99 for tail behavior
  4. Clip using percentile bounds
  5. Quartiles in boxplots`
        },
        {
          id: `ds-eda`,
          title: `EDA for ML`,
          content: `Summary stats per feature: mean, std, missing rate, unique count. Histograms reveal skew/multimodality. Correlation matrix detects redundancy.

Pairplots for bivariate. Target distribution check for class imbalance. Outlier flags via IQR rule.

EDA prevents garbage-in failures. Document findings before modeling. Automated profiling (pandas describe, ydata-profiling) accelerates.

Compare train vs test distributions for shift detection.

**EDA for ML** in the context of **Descriptive Statistics**: Work through the example below with pen and paper first, then verify in code. The formulas and diagram connect directly to how models learn and how you debug numerical issues.`,
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

Diagram (summary):
  EDA checklist:
  □ shape dtypes
  □ missing values
  □ target balance
  □ feature histograms
  □ correlations
  □ train/test shift
  │
  │  · · ·

Checklist:
  1. EDA before modeling mandatory
  2. Check imbalance early
  3. Correlation guides feature selection
  4. Distribution shift breaks models
  5. Automate reproducible profiles`
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
      estimatedMinutes: 35,
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
          content: `**Simple random sample** each unit equal probability. **Stratified** sample within groups preserves proportions. **Bootstrap** resample with replacement estimates sampling distribution.

Sample statistic x̄ random across samples. **Sampling frame** defines population accessible. Bias when sample ≠ population (selection bias).

ML train set is sample; generalization assumes representative i.i.d. Time series breaks i.i.d.—use temporal splits.

**Random Sampling** in the context of **Sampling & Central Limit Theorem**: Work through the example below with pen and paper first, then verify in code. The formulas and diagram connect directly to how models learn and how you debug numerical issues.`,
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

Diagram (summary):
  population → sample → statistic
  Ω (big) ──draw──→ data (n)
  ↓
  x̄, s²
  │
  │  · · ·
  └──────────
  (see formulas above)
  │

Checklist:
  1. Representative sample critical
  2. Stratify for rare classes
  3. Bootstrap for CI without formulas
  4. Train/val/test splits are samples
  5. Temporal data needs special splits`
        },
        {
          id: `sc-se`,
          title: `Standard Error`,
          content: `**Standard error** SE(x̄)=σ/√n measures variability of sample mean across samples. Unknown σ: estimate s/√n.

SE shrinks as √n—more data tighter estimate. 95% CI x̄±1.96 SE approximate (CLT). Compare models using SE of metric difference.

Reporting accuracy without SE hides uncertainty. Cross-validation folds give multiple metric samples—report mean±std.

Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Standard Error** in the context of **Sampling & Central Limit Theorem**: Work through the example below with pen and paper first, then verify in code. The formulas and diagram connect directly to how models learn and how you debug numerical issues.`,
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

Diagram (summary):
  sampling distribution of x̄:
  bell narrows as n↑
  n=10  wide bell
  n=100 narrow bell
  │
  │  · · ·
  └──────────
  (see formulas above)

Checklist:
  1. SE quantifies estimate uncertainty
  2. Grows with √n not n
  3. CI from CLT approximate
  4. CV metrics need multiple folds
  5. Don't report point alone`
        },
        {
          id: `sc-clt`,
          title: `Central Limit Theorem Detail`,
          content: `Standardized x̄: (x̄−μ)/(σ/√n) → N(0,1) in distribution. Works for many non-normal populations. Also applies to proportions p̂ approx N(p, p(1−p)/n).

Enables z-tests and CIs. Sum of n RVs also normal for large n. CLT fails heavy tails infinite variance.

Bootstrap nonparametric alternative when CLT questionable. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Central Limit Theorem Detail** in the context of **Sampling & Central Limit Theorem**: Work through the example below with pen and paper first, then verify in code. The formulas and diagram connect directly to how models learn and how you debug numerical issues.`,
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

Diagram (summary):
  sampling distribution:
  any population
  ↓ average n samples
  ≈ Normal for large n
  │
  │  · · ·
  └──────────
  (see formulas above)
  │

Checklist:
  1. CLT enables inferential stats
  2. Applies to means and proportions
  3. Finite variance needed
  4. Bootstrap backup method
  5. Heavy tails need care`
        },
        {
          id: `sc-ml`,
          title: `Sampling in ML Evaluation`,
          content: `Hold-out test set estimates generalization error. **K-fold CV** reduces variance of metric estimate. **Bootstrap** confidence on AUC.

**Stratified k-fold** preserves class ratio. Multiple seeds report mean±std. **Power analysis** determines n needed to detect effect.

Online A/B tests sequential sampling with caution (peeking). Always fix test set; tune on val only once workflow to avoid overfitting selection.

**Sampling in ML Evaluation** in the context of **Sampling & Central Limit Theorem**: Work through the example below with pen and paper first, then verify in code. The formulas and diagram connect directly to how models learn and how you debug numerical issues.`,
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

Diagram (summary):
  train │ val │ test
  tune    pick   once
  test peeking → optimistic bias
  │
  │  · · ·
  └──────────
  (see formulas above)
  │
  │  · · ·

Checklist:
  1. Fixed test set sacred
  2. CV for small data
  3. Stratify imbalanced labels
  4. Multiple seeds show stability
  5. A/B needs sequential care`
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
      estimatedMinutes: 35,
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
          content: `**H₀** null hypothesis default skepticism. **Test statistic** summarizes data vs H₀. **p-value** P(data this extreme|H₀).

Reject H₀ if p<α (significance level, often 0.05). **Type I error** false positive rate α. **Type II** β false negative.

Not 'accept H₀'—fail to reject. p-value NOT P(H₀ true). Multiple testing inflates false positives—Bonferroni correction α/m. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Testing Framework** in the context of **Hypothesis Testing**: Work through the example below with pen and paper first, then verify in code. The formulas and diagram connect directly to how models learn and how you debug numerical issues.`,
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

Diagram (summary):
  decision:
  p small → reject H₀
  p large → insufficient evidence
  α=0.05 threshold line
  │
  │  · · ·
  └──────────
  (see formulas above)

Checklist:
  1. p-value not prob H₀ true
  2. α controls false positives
  3. Power needs effect size + n
  4. Multiple tests need correction
  5. Fail to reject ≠ prove null`
        },
        {
          id: `ht-tests`,
          title: `Common Tests`,
          content: `**z-test** mean known σ large n. **t-test** mean unknown σ small n. Paired t for before/after.

Two-sample t independent groups. **χ²** goodness-of-fit and independence in contingency tables. **F-test** variance ratio.

ANOVA F for multiple means. Choose test matching data type and assumptions (normality, independence). Nonparametric: Mann-Whitney, Wilcoxon when normality fails.

Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Common Tests** in the context of **Hypothesis Testing**: Work through the example below with pen and paper first, then verify in code. The formulas and diagram connect directly to how models learn and how you debug numerical issues.`,
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

Diagram (summary):
  test selection tree:
  numeric 2 groups → t-test
  categorical table → χ²
  >2 group means → ANOVA
  │
  │  · · ·
  └──────────
  (see formulas above)
  │

Checklist:
  1. Match test to question
  2. Check assumptions
  3. t-test for means
  4. Chi-square for counts
  5. Nonparametric if needed`
        },
        {
          id: `ht-ab`,
          title: `A/B Testing`,
          content: `Compare conversion rates p_A vs p_B. Two-proportion z-test or χ² on 2×2 table. Need sample size for desired power.

**SRM** sample ratio mismatch checks randomization. Run fixed horizon avoid peeking bias. **Sequential testing** specialized bounds.

Practical significance vs statistical: 0.01% lift may be significant with huge n but useless. Bayesian A/B alternative gives posterior on lift.

**A/B Testing** in the context of **Hypothesis Testing**: Work through the example below with pen and paper first, then verify in code. The formulas and diagram connect directly to how models learn and how you debug numerical issues.`,
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

Diagram (summary):
  A/B split:
  users ──50/50──→ A (control)
  └──→ B (treatment)
  compare metric mean/rate
  │
  │  · · ·
  └──────────
  (see formulas above)

Checklist:
  1. Randomization avoids confounding
  2. Power analysis before test
  3. Peeking inflates false positives
  4. Check SRM on assignment
  5. Effect size matters for business`
        },
        {
          id: `ht-ml`,
          title: `Testing in ML Experiments`,
          content: `**McNemar** paired classifier comparison same test set. **Permutation test** shuffle labels nonparametric p-value.

**Diebold-Mariano** forecast comparison. Compare CV scores with paired t across folds.

Report confidence intervals on metric not just point. **Multiple model comparison** Bonferroni or Holm correction.

Statistical significance ≠ better production model—consider latency, cost, fairness.

**Testing in ML Experiments** in the context of **Hypothesis Testing**: Work through the example below with pen and paper first, then verify in code. The formulas and diagram connect directly to how models learn and how you debug numerical issues.`,
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

Diagram (summary):
  model A vs B same test:
  both wrong → both right pairs
  McNemar uses discordant pairs
  │
  │  · · ·
  └──────────
  (see formulas above)
  │
  │  · · ·

Checklist:
  1. Use paired tests same data
  2. Permutation flexible
  3. Correct multiple models
  4. CI better than p alone
  5. Engineering constraints matter`
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
      estimatedMinutes: 35,
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
          content: `95% CI x̄±t_{α/2,n−1}·s/√n uses t distribution small n; z_{0.975}=1.96 large n. Interpretation: procedure captures true μ in 95% of repeated samples—not P(μ in interval).

Wider CI more uncertain. Bootstrapping: resample B times, percentile CI from bootstrap distribution.

BCa bootstrap improves bias. Report CI with point estimate in papers and dashboards.

Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**CI for Mean** in the context of **Confidence Intervals**: Work through the example below with pen and paper first, then verify in code. The formulas and diagram connect directly to how models learn and how you debug numerical issues.`,
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

Diagram (summary):
  CI as error bar:
  x̄ ────[====]────
  lower  upper
  wider = less precision
  │
  │  · · ·
  └──────────
  (see formulas above)

Checklist:
  1. CI frequency interpretation
  2. t for small samples
  3. Bootstrap when CLT weak
  4. Width shrinks with √n
  5. Always pair with estimate`
        },
        {
          id: `ci-prop`,
          title: `CI for Proportions`,
          content: `Wald CI p̂±z√(p̂(1−p̂)/n) simple but poor small n/extreme p. **Wilson score** interval better coverage.

Binomial exact (Clopper-Pearson) conservative. For ML accuracy on n test samples: report p̂±CI.

Rare class metrics need large n for tight CI. Wilson preferred in modern practice over Wald for proportions.

Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**CI for Proportions** in the context of **Confidence Intervals**: Work through the example below with pen and paper first, then verify in code. The formulas and diagram connect directly to how models learn and how you debug numerical issues.`,
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

Diagram (summary):
  accuracy 0.92 on n=100:
  CI might [0.85, 0.96]
  n=10000 → much tighter
  │
  │  · · ·
  └──────────
  (see formulas above)
  │
  │  · · ·

Checklist:
  1. Wald fails at extremes
  2. Wilson recommended
  3. Small test set wide CI
  4. Report CI with accuracy
  5. Rare class CIs very wide`
        },
        {
          id: `ci-diff`,
          title: `CI for Differences`,
          content: `CI for μ_A−μ_B: (x̄_A−x̄_B)±t*·SE_diff. Independent: SE_diff=√(s_A²/n_A+s_B²/n_B).

Overlap of individual CIs ≠ non-significance of difference (common mistake). Paired: CI on mean difference.

Lift CI in A/B: bootstrap on ratio or log ratio. If difference CI excludes 0, significant at corresponding α.

Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**CI for Differences** in the context of **Confidence Intervals**: Work through the example below with pen and paper first, then verify in code. The formulas and diagram connect directly to how models learn and how you debug numerical issues.`,
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

Diagram (summary):
  difference CI:
  0 inside CI → not significant
  0 outside → significant
  [====|----0----|====]
  │
  │  · · ·
  └──────────
  (see formulas above)

Checklist:
  1. Difference CI tests effect
  2. Overlap individual CIs misleading
  3. Paired uses difference scores
  4. Bootstrap for ratio metrics
  5. Exclude zero = significant`
        },
        {
          id: `ci-ml`,
          title: `Uncertainty in ML Metrics`,
          content: `Bootstrap test set for metric CI. CV: mean±std across folds is approximate. **Conformal prediction** gives prediction intervals with coverage guarantee.

Bayesian models posterior predictive intervals. Report F1 CI on imbalanced data especially. Leaderboard scores without CI overfit to test noise.

Nested CV for unbiased performance estimate with uncertainty. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Uncertainty in ML Metrics** in the context of **Confidence Intervals**: Work through the example below with pen and paper first, then verify in code. The formulas and diagram connect directly to how models learn and how you debug numerical issues.`,
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

Diagram (summary):
  metric report format:
  F1 = 0.87 (95% CI: 0.84–0.90)
  not just F1 = 0.87
  │
  │  · · ·
  └──────────
  (see formulas above)
  │

Checklist:
  1. Always quantify metric uncertainty
  2. Bootstrap simple and flexible
  3. Conformal for prediction bands
  4. Nested CV reduces selection bias
  5. Leaderboards ignore uncertainty`
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
      estimatedMinutes: 35,
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
          content: `OLS minimizes ||y−Xβ||². **Normal equations** XᵀXβ=Xᵀy. Solution β=(XᵀX)⁻¹Xᵀy if full rank.

Geometric: orthogonal projection of y onto Col(X). Hat matrix H=X(XᵀX)⁻¹Xᵀ, ŷ=Hy. Residuals e=y−ŷ orthogonal to Col(X).

Multiple regression adds columns to X. Polynomial regression linear in β with nonlinear features. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Ordinary Least Squares** in the context of **Regression Mathematics**: Work through the example below with pen and paper first, then verify in code. The formulas and diagram connect directly to how models learn and how you debug numerical issues.`,
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

Diagram (summary):
  y vector projected onto
  column space of X:
  y
  ╱| ŷ
  ╱ |
  ╱  | e (residual)
  Col(X)
  │
  │  · · ·

Checklist:
  1. OLS = orthogonal projection
  2. Normal equations from calculus
  3. Full rank needed unique β
  4. Polynomial via feature map
  5. Residuals orthogonal to fit`
        },
        {
          id: `reg-assump`,
          title: `Regression Assumptions`,
          content: `Classical linear model: (1) linearity E[ε|X]=0 (2) homoscedasticity Var(ε|X)=σ² constant (3) independence (4) no perfect multicollinearity (5) often normality of ε for inference. Violations: heteroscedasticity, autocorrelation, nonlinearity.

Diagnostics: residual plots, VIF for multicollinearity, Breusch-Pagan test. Robust SE or weighted least squares address heteroscedasticity.

Regularization when collinear.

**Regression Assumptions** in the context of **Regression Mathematics**: Work through the example below with pen and paper first, then verify in code. The formulas and diagram connect directly to how models learn and how you debug numerical issues.`,
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

Diagram (summary):
  residual plot healthy:
  e │ ·  ·    random scatter
  │   · ·
  └── predictor
  funnel → heteroscedasticity
  │
  │  · · ·
  └──────────

Checklist:
  1. Check residuals systematically
  2. Funnel shape bad
  3. VIF>10 concern collinearity
  4. Normality for CI/p-values
  5. Regularize collinear features`
        },
        {
          id: `reg-infer`,
          title: `Statistical Inference`,
          content: `β̂ variance σ²(XᵀX)⁻¹. Estimate σ² by s²=||e||²/(n−p−1). t-test for β_j=0: t=β̂_j/SE(β̂_j).

F-test overall model. R²=1−SSE/SST proportion variance explained— increases with more features.

Adjusted R² penalizes complexity. Confidence bands for mean response vs prediction intervals wider include ε noise.

Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Statistical Inference** in the context of **Regression Mathematics**: Work through the example below with pen and paper first, then verify in code. The formulas and diagram connect directly to how models learn and how you debug numerical issues.`,
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

Diagram (summary):
  R² interpretation:
  0 = no better than mean
  1 = perfect fit (overfit risk)
  adj R² down if useless feature added
  │
  │  · · ·
  └──────────
  (see formulas above)

Checklist:
  1. SE on coefficients for significance
  2. R² not always better high
  3. Adj R² compares models
  4. Prediction interval wider than CI mean
  5. F-test overall significance`
        },
        {
          id: `reg-ml`,
          title: `Regression to ML`,
          content: `Linear regression foundation for GLMs, logistic (IRLS), neural nets (linear output layer). **Ridge** L2, **Lasso** L1, **Elastic Net** combine.

Gradient descent scales to large data vs normal equations O(np²). Regularization as Bayesian priors.

Polynomial and interaction features expand X. Logistic regression for classification still linear in features.

Understanding OLS clarifies loss surfaces and normal equations in linear networks.

**Regression to ML** in the context of **Regression Mathematics**: Work through the example below with pen and paper first, then verify in code. The formulas and diagram connect directly to how models learn and how you debug numerical issues.`,
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

Diagram (summary):
  OLS → Ridge → Lasso
  add λ||β||²   add λ||β||₁
  shrink        select features
  │
  │  · · ·
  └──────────
  (see formulas above)
  │
  │  · · ·

Checklist:
  1. Normal eq fine small p
  2. GD for deep/large data
  3. Ridge handles collinearity
  4. Lasso feature selection
  5. Logistic = linear + logit link`
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
      estimatedMinutes: 35,
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
