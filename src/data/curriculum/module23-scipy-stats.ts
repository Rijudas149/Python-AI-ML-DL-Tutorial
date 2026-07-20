import type { Topic } from '../../types';

export const module23Topics: Topic[] = [
{
      id: `scipy-basics`,
      title: `SciPy Numerical Tools`,
      description: `Use scipy.optimize, integrate, and interpolate for scientific computing tasks.`,
      level: `intermediate`,
      track: `data`,
      sections: [
        {
          id: `optimize`,
          title: `scipy.optimize`,
          content: `### Introduction

\`minimize(fun, x0, method="BFGS")\` finds local minima of scalar/multivariate functions. Provide **\`jac\`** gradient for speed.

### scipy.optimize

**\`bounds\`** and **\`constraints\`** for constrained problems. \`curve_fit\` fits nonlinear models to data by least squares. Always inspect residuals and initial guesses—optimization finds local optima.

### Key Ideas

- Good x0 critical for nonlinear optimization
- Provide analytic Jacobian when available
- Check convergence flag res.success
- Plot objective surface for 2D intuition

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `from scipy.optimize import minimize
import numpy as np
f = lambda x: (x[0]-2)**2 + (x[1]+1)**2
res = minimize(f, x0=[0,0])
print(np.round(res.x, 2))`,
          output: `[ 2. -1.]`,
          keyPoints: [
            `Good x0 critical for nonlinear optimization`,
            `Provide analytic Jacobian when available`,
            `Check convergence flag res.success`,
            `Plot objective surface for 2D intuition`
          ],
          diagram: `scipy.optimize
Load → Profile → Visualize → Hypothesis → Transform`,
          commonMistakes: [
            `Using polynomial degree too high without regularization`,
            `Saving a plot without calling \`plt.tight_layout()\` — labels get clipped`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Using polynomial degree too high without regularization`
          ]
        },
        {
          id: `integrate`,
          title: `Integration & ODEs`,
          content: `### Introduction

\`quad\` integrates 1D functions: \`integrate.quad(lambda x: x**2, 0, 1)\`. **\`dblquad/tplquad\`** extend dimension.

### Integration & ODEs

**\`odeint\`** solves ordinary differential equations from initial conditions. Watch singularities and infinite limits—split integration domains or transform variables.

### Key Ideas

- quad returns estimate and error bound
- odeint for dynamical systems models
- Transform improper integrals when possible
- Compare with Monte Carlo for validation

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `from scipy import integrate
val, err = integrate.quad(lambda x: x**2, 0, 1)
print(round(val, 3), err < 1e-8)`,
          output: `0.333 True`,
          keyPoints: [
            `quad returns estimate and error bound`,
            `odeint for dynamical systems models`,
            `Transform improper integrals when possible`,
            `Compare with Monte Carlo for validation`
          ],
          diagram: `Integration & ODEs
Dataset → Train Fold → Validation Fold → Test Holdout`,
          commonMistakes: [
            `Using test-set statistics to impute missing training data (leakage)`,
            `Saving a plot without calling \`plt.tight_layout()\` — labels get clipped`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Plotting before checking for missing values and outliers`
          ]
        },
        {
          id: `interpolate`,
          title: `Interpolation`,
          content: `### Introduction

\`interp1d\` (legacy) and **\`Akima1DInterpolator\`**, \`CubicSpline\` build continuous functions from discrete samples. **\`griddata\`** interpolates scattered 2D points.

### Interpolation

Extrapolation outside sample range is unreliable—clamp or model uncertainty explicitly.

### Key Ideas

- Choose spline order based on smoothness needs
- Never extrapolate blindly beyond data support
- griddata for unstructured spatial data
- Visualize interpolant against raw points

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `from scipy.interpolate import interp1d
import numpy as np
x = np.array([0, 1, 2])
y = np.array([0, 1, 4])
f = interp1d(x, y, kind="linear")
print(float(f(1.5)))`,
          output: `2.5`,
          keyPoints: [
            `Choose spline order based on smoothness needs`,
            `Never extrapolate blindly beyond data support`,
            `griddata for unstructured spatial data`,
            `Visualize interpolant against raw points`
          ],
          diagram: `Interpolation
Load → Profile → Visualize → Hypothesis → Transform`,
          commonMistakes: [
            `Using test-set statistics to impute missing training data (leakage)`,
            `Saving a plot without calling \`plt.tight_layout()\` — labels get clipped`,
            `Never extrapolate blindly beyond data support.`,
            `Plotting before checking for missing values and outliers`
          ]
        },
        {
          id: `scipy-ecosystem`,
          title: `SciPy in the Stack`,
          content: `### Introduction

SciPy builds on NumPy arrays. Combine with **matplotlib** for visualization and **pandas** for labeled tables.

### SciPy in the Stack

For heavy linear algebra prefer **\`scipy.linalg\`** over numpy.linalg for some decompositions. Reproducibility: fix random seeds in stochastic routines and document numerical tolerances.

### Key Ideas

- SciPy functions expect ndarray inputs
- Vectorize where possible before Python loops
- Document units and coordinate systems
- Benchmark against analytical solutions when known`,
          keyPoints: [
            `SciPy functions expect ndarray inputs`,
            `Vectorize where possible before Python loops`,
            `Document units and coordinate systems`,
            `Benchmark against analytical solutions when known`
          ],
          diagram: `SciPy in the Stack
Query → Embed → Retrieve → Augment Prompt → Generate`,
          commonMistakes: [
            `Saving a plot without calling \`plt.tight_layout()\` — labels get clipped`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Using polynomial degree too high without regularization`,
            `Broadcasting mistakes when array shapes do not align`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-scipy-1`,
          question: `Integrate x^2 from 0 to 1 with scipy.integrate.quad.`,
          solution: `from scipy import integrate
print(round(integrate.quad(lambda x: x**2, 0, 1)[0], 3))`,
          difficulty: `easy`
        },
        {
          id: `ex-scipy-2`,
          question: `Minimize (x-3)^2 starting from x0=0.`,
          solution: `from scipy.optimize import minimize
print(minimize(lambda x: (x[0]-3)**2, [0]).x[0])`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-23`,
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
          id: `numpy-linalg`,
          title: `numpy.linalg — Linear Algebra`,
          source: `NumPy`,
          type: `documentation`,
          url: `https://numpy.org/doc/stable/reference/routines.linalg.html`,
          description: `Matrix multiplication, decomposition, eigenvalues, and linear systems.`
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
          id: `esl-hastie`,
          title: `The Elements of Statistical Learning`,
          source: `Stanford`,
          type: `book`,
          url: `https://hastie.su.domains/ElemStatLearn/`,
          description: `Free authoritative text on statistical learning methods and theory.`
        }
      ]
    },
{
      id: `stats-hypothesis`,
      title: `Hypothesis Testing`,
      description: `Apply t-tests, chi-square tests, and interpret p-values responsibly.`,
      level: `intermediate`,
      track: `data`,
      sections: [
        {
          id: `hypothesis`,
          title: `Null & Alternative Hypotheses`,
          content: `### Introduction

**Null hypothesis H₀** typically states no effect. **Alternative H₁** states an effect exists.

### Null & Alternative Hypotheses

Choose **significance level α** (often 0.05) before seeing data. **p-value**: probability of observing data at least as extreme as yours if H₀ were true.

Reject H₀ if p < α—not "probability H₀ is true".

### Key Ideas

- Pre-register α to avoid p-hacking
- p-value is not effect size
- Failure to reject ≠ prove null
- Report confidence intervals alongside tests`,
          keyPoints: [
            `Pre-register α to avoid p-hacking`,
            `p-value is not effect size`,
            `Failure to reject ≠ prove null`,
            `Report confidence intervals alongside tests`
          ],
          commonMistakes: [
            `Saving a plot without calling \`plt.tight_layout()\` — labels get clipped`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Pre-register α to avoid p-hacking.`,
            `Reading passively without typing and running a small variant of the example yourself`
          ]
        },
        {
          id: `ttest`,
          title: `t-Tests`,
          content: `### Introduction

\`scipy.stats.ttest_ind(a, b)\` compares means of two independent samples (Welch variant by default). **\`ttest_rel\`** for paired samples.

### t-Tests

Assumptions: approximate normality or large n; similar variance for classic equal-variance test. Check with Q-Q plots and report effect size (Cohen's d).

### Key Ideas

- Welch t-test robust to unequal variances
- Large samples invoke CLT for normality relaxation
- Multiple testing inflates false positives—use Bonferroni/FDR
- Always visualize group distributions

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `from scipy import stats
import numpy as np
a = np.random.normal(0, 1, 100)
b = np.random.normal(0.3, 1, 100)
stat, p = stats.ttest_ind(a, b)
print(stat > 0, 0 <= p <= 1)`,
          output: `True True`,
          keyPoints: [
            `Welch t-test robust to unequal variances`,
            `Large samples invoke CLT for normality relaxation`,
            `Multiple testing inflates false positives—use Bonferroni/FDR`,
            `Always visualize group distributions`
          ],
          diagram: `t-Tests
Load → Profile → Visualize → Hypothesis → Transform`,
          commonMistakes: [
            `Saving a plot without calling \`plt.tight_layout()\` — labels get clipped`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Saving a plot without calling \`plt.tight_layout()\` — labels get clipped`
          ]
        },
        {
          id: `chisq`,
          title: `Chi-Square Tests`,
          content: `### Introduction

\`stats.chisquare\` for goodness-of-fit against expected counts. **\`chi2_contingency\`** on contingency tables tests independence of categorical variables.

### Chi-Square Tests

Expected frequencies should be ≥5 in most cells; combine categories otherwise.

### Key Ideas

- chi2_contingency returns expected cell counts
- Low expected counts invalidate approximation
- Cramér's V measures association strength
- Residual analysis finds which cells deviate

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `from scipy.stats import chi2_contingency
import numpy as np
table = np.array([[10, 20], [30, 40]])
chi2, p, dof, expected = chi2_contingency(table)
print(dof, expected.shape)`,
          output: `(1, (2, 2))`,
          keyPoints: [
            `chi2_contingency returns expected cell counts`,
            `Low expected counts invalidate approximation`,
            `Cramér's V measures association strength`,
            `Residual analysis finds which cells deviate`
          ],
          diagram: `Chi-Square Tests
Dataset → Train Fold → Validation Fold → Test Holdout`,
          commonMistakes: [
            `Saving a plot without calling \`plt.tight_layout()\` — labels get clipped`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Plotting before checking for missing values and outliers`,
            `Using test-set statistics to impute missing training data (leakage)`
          ]
        },
        {
          id: `pvalue-interpret`,
          title: `Interpreting Results Responsibly`,
          content: `### Introduction

Combine statistical significance with **practical significance**. Report sample size, test used, assumptions checked.

### Interpreting Results Responsibly

Avoid "borderline" p=0.049 storytelling. **Bayesian** approaches quantify posterior belief; frequentist p-values answer a different question—do not conflate.

### Key Ideas

- Effect size and CI matter more than p alone
- Power analysis plans sample size ex ante
- Preregister analysis plans in research
- Replication validates surprising findings`,
          keyPoints: [
            `Effect size and CI matter more than p alone`,
            `Power analysis plans sample size ex ante`,
            `Preregister analysis plans in research`,
            `Replication validates surprising findings`
          ],
          diagram: `Interpreting Results Responsibly
Query → Embed → Retrieve → Augment Prompt → Generate`,
          commonMistakes: [
            `Using test-set statistics to impute missing training data (leakage)`,
            `Saving a plot without calling \`plt.tight_layout()\` — labels get clipped`,
            `Reading passively without typing and running a small variant of the example yourself`,
            `Plotting before checking for missing values and outliers`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-hyp-1`,
          question: `Run ttest_ind on [1,2,3] vs [4,5,6]; print pvalue in [0,1].`,
          solution: `from scipy.stats import ttest_ind
p = ttest_ind([1,2,3],[4,5,6]).pvalue
print(0 <= p <= 1)`,
          difficulty: `easy`
        },
        {
          id: `ex-hyp-2`,
          question: `chi2_contingency on [[5,5],[10,10]]; print dof==1.`,
          solution: `from scipy.stats import chi2_contingency
print(chi2_contingency([[5,5],[10,10]])[2] == 1)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 35,
      module: `module-23`,
      references: [
        {
          id: `esl-hastie`,
          title: `The Elements of Statistical Learning`,
          source: `Stanford`,
          type: `book`,
          url: `https://hastie.su.domains/ElemStatLearn/`,
          description: `Free authoritative text on statistical learning methods and theory.`
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
          id: `berkeley-cs189`,
          title: `Berkeley CS189/289A — Introduction to Machine Learning`,
          source: `Berkeley`,
          type: `course`,
          url: `https://people.eecs.berkeley.edu/~jrs/189/`,
          description: `Comprehensive ML course with strong mathematical foundations.`
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
      id: `stats-distributions`,
      title: `Probability Distributions`,
      description: `Model uncertainty with scipy.stats: PDFs, CDFs, sampling, and fitting.`,
      level: `intermediate`,
      track: `data`,
      sections: [
        {
          id: `rv`,
          title: `Random Variables in scipy.stats`,
          content: `### Introduction

Each distribution is an **\`rv_continuous\`** or **\`rv_discrete\`** object: \`norm\`, \`binom\`, \`poisson\`, \`t\`, \`chi2\`, etc. Methods: \`.pdf/.pmf\`, \`.cdf\`, \`.ppf\` (quantile), \`.rvs(size=)\` sample.

### Random Variables in scipy.stats

\`loc\` and \`scale\` shift/scale distributions: \`norm(loc=mu, scale=sigma)\`.

### Key Ideas

- rvs requires random_state for reproducibility
- ppf inverts cdf for confidence intervals
- Match distribution to data generating process
- Heavy tails need t or stable distributions

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `from scipy import stats
import numpy as np
samples = stats.norm.rvs(loc=0, scale=1, size=1000, random_state=42)
print(abs(np.mean(samples)) < 0.1)`,
          output: `True`,
          keyPoints: [
            `rvs requires random_state for reproducibility`,
            `ppf inverts cdf for confidence intervals`,
            `Match distribution to data generating process`,
            `Heavy tails need t or stable distributions`
          ],
          commonMistakes: [
            `Saving a plot without calling \`plt.tight_layout()\` — labels get clipped`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Plotting before checking for missing values and outliers`,
            `Using test-set statistics to impute missing training data (leakage)`
          ]
        },
        {
          id: `fit`,
          title: `Fitting Distributions`,
          content: `### Introduction

\`stats.norm.fit(data)\` returns MLE parameters. **\`kstest\`** compares empirical CDF to reference.

### Fitting Distributions

Visualize with histogram + fitted PDF overlay. Overfitting parametric forms misleads—compare models with AIC/BIC or nonparametric KDE.

### Key Ideas

- Visual fit assessment mandatory
- KS test sensitive to large n
- Consider log-normal for positive skewed data
- Mixture models for multimodal data

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `from scipy import stats
import numpy as np
data = stats.norm.rvs(5, 2, size=500, random_state=0)
mu, sigma = stats.norm.fit(data)
print(abs(mu - 5) < 0.5)`,
          output: `True`,
          keyPoints: [
            `Visual fit assessment mandatory`,
            `KS test sensitive to large n`,
            `Consider log-normal for positive skewed data`,
            `Mixture models for multimodal data`
          ],
          diagram: `Fitting Distributions
Load → Profile → Visualize → Hypothesis → Transform`,
          commonMistakes: [
            `Using test-set statistics to impute missing training data (leakage)`,
            `Saving a plot without calling \`plt.tight_layout()\` — labels get clipped`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Plotting before checking for missing values and outliers`
          ]
        },
        {
          id: `sampling`,
          title: `Sampling Strategies`,
          content: `### Introduction

Simple random sampling, stratified sampling (preserve class proportions), bootstrap resampling for CI estimation (\`np.random.choice\` with replace).

### Sampling Strategies

Monte Carlo integrates expectations by drawing samples—error shrinks as O(1/√n).

### Key Ideas

- Stratify on key categorical variables
- Bootstrap CIs avoid normality assumptions
- Sample size drives uncertainty not population size alone
- Use default_rng not legacy np.random.seed only

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `import numpy as np
rng = np.random.default_rng(0)
boot_means = [rng.choice([1,2,3,4,5], size=5, replace=True).mean() for _ in range(1000)]
print(len(boot_means))`,
          output: `1000`,
          keyPoints: [
            `Stratify on key categorical variables`,
            `Bootstrap CIs avoid normality assumptions`,
            `Sample size drives uncertainty not population size alone`,
            `Use default_rng not legacy np.random.seed only`
          ],
          diagram: `Sampling Strategies
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Bootstrap CIs avoid normality assumptions.`,
            `Saving a plot without calling \`plt.tight_layout()\` — labels get clipped`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`
          ]
        },
        {
          id: `clt`,
          title: `Central Limit Theorem`,
          content: `### Introduction

Sum/mean of iid samples with finite variance approaches normal as n grows—explains widespread normal approximations. Does not fix heavy-tailed single-draw risk.

### Central Limit Theorem

For proportions, use binomial or normal approx with care when np(1-p) small.

### Key Ideas

- CLT applies to sample means not individual draws
- Finite variance assumption matters
- Rate of convergence depends on underlying distribution
- Use exact tests when approximations fail`,
          keyPoints: [
            `CLT applies to sample means not individual draws`,
            `Finite variance assumption matters`,
            `Rate of convergence depends on underlying distribution`,
            `Use exact tests when approximations fail`
          ],
          commonMistakes: [
            `Reading passively without typing and running a small variant of the example yourself`,
            `Saving a plot without calling \`plt.tight_layout()\` — labels get clipped`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Reading passively without typing and running a small variant of the example yourself`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-dist-1`,
          question: `Sample 5 values from stats.poisson(mu=3).`,
          solution: `from scipy import stats
print(len(stats.poisson(3).rvs(5)))`,
          difficulty: `easy`
        },
        {
          id: `ex-dist-2`,
          question: `norm.cdf(0) should equal 0.5.`,
          solution: `from scipy.stats import norm
print(norm.cdf(0))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 35,
      module: `module-23`,
      references: [
        {
          id: `khan-probability`,
          title: `Statistics and Probability — Khan Academy`,
          source: `Khan Academy`,
          type: `course`,
          url: `https://www.khanacademy.org/math/statistics-probability`,
          description: `Probability distributions, Bayes theorem, and statistical inference.`
        },
        {
          id: `bishop-prml`,
          title: `Pattern Recognition and Machine Learning`,
          source: `Cambridge`,
          type: `book`,
          url: `https://www.microsoft.com/en-us/research/publication/pattern-recognition-machine-learning/`,
          description: `Rigorous treatment of probability, inference, and classical ML algorithms.`
        },
        {
          id: `numpy-random`,
          title: `Random Sampling (numpy.random)`,
          source: `NumPy`,
          type: `documentation`,
          url: `https://numpy.org/doc/stable/reference/random/index.html`,
          description: `Reproducible random number generation and statistical distributions.`
        },
        {
          id: `esl-hastie`,
          title: `The Elements of Statistical Learning`,
          source: `Stanford`,
          type: `book`,
          url: `https://hastie.su.domains/ElemStatLearn/`,
          description: `Free authoritative text on statistical learning methods and theory.`
        }
      ]
    },
{
      id: `stats-regression`,
      title: `Regression with statsmodels`,
      description: `Ordinary least squares and logistic regression for inference-rich modeling.`,
      level: `intermediate`,
      track: `data`,
      sections: [
        {
          id: `ols`,
          title: `OLS Linear Regression`,
          content: `### Introduction

**statsmodels.formula.api.ols** accepts R-like formulas: \`ols("y ~ x1 + x2", data=df).fit()\`. Summary includes coefficients, standard errors, t-stats, R², F-test.

### OLS Linear Regression

Check **linearity**, **homoscedasticity** (Breusch-Pagan), **residual normality** for inference validity.

### Key Ideas

- Inspect model.summary() for inference tables
- Add constant or use formula intercept implicitly
- Plot residuals vs fitted values
- Multicollinearity inflates coefficient variance

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `import statsmodels.formula.api as smf
import pandas as pd
df = pd.DataFrame({"y": [1,2,3,4], "x": [0,1,2,3]})
model = smf.ols("y ~ x", data=df).fit()
print(round(model.params["x"], 2))`,
          output: `1.0`,
          keyPoints: [
            `Inspect model.summary() for inference tables`,
            `Add constant or use formula intercept implicitly`,
            `Plot residuals vs fitted values`,
            `Multicollinearity inflates coefficient variance`
          ],
          diagram: `OLS Linear Regression
Load → Profile → Visualize → Hypothesis → Transform`,
          commonMistakes: [
            `Training generator and discriminator without balancing capacity — one dominates`,
            `Saving a plot without calling \`plt.tight_layout()\` — labels get clipped`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Using polynomial degree too high without regularization`
          ]
        },
        {
          id: `logistic`,
          title: `Logistic Regression`,
          content: `### Introduction

Binary outcomes: **\`logit("y ~ x", data=df)\`** models log-odds linear in features. Coefficients exponentiate to odds ratios.

### Logistic Regression

Metrics: AUC, log-loss, calibration curves. Class imbalance requires class weights or resampling—accuracy alone misleads.

### Key Ideas

- Logit coefficients are on log-odds scale
- Perfect separation causes infinite coefficients
- Regularized logistic via sklearn for prediction focus
- Report confidence intervals on odds ratios

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `import statsmodels.formula.api as smf
import pandas as pd
df = pd.DataFrame({"y": [0,0,1,1], "x": [0,1,2,3]})
res = smf.logit("y ~ x", data=df).fit(disp=0)
print(len(res.params))`,
          keyPoints: [
            `Logit coefficients are on log-odds scale`,
            `Perfect separation causes infinite coefficients`,
            `Regularized logistic via sklearn for prediction focus`,
            `Report confidence intervals on odds ratios`
          ],
          commonMistakes: [
            `Using polynomial degree too high without regularization`,
            `Not stratifying splits for classification tasks`,
            `Saving a plot without calling \`plt.tight_layout()\` — labels get clipped`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`
          ]
        },
        {
          id: `diagnostics`,
          title: `Regression Diagnostics`,
          content: `### Introduction

Influential points: Cook's distance. Heteroscedasticity robust SE: \`cov_type="HC3"\`.

### Regression Diagnostics

VIF quantifies multicollinearity. Out-of-sample validation on holdout prevents overfitting narrative.

Transform targets (log) or use GLMs when residuals show systematic patterns.

### Key Ideas

- Robust SE when variance not constant
- Cross-validation for predictive performance
- Partial regression plots explain individual features
- Document preprocessing inside CV pipeline`,
          keyPoints: [
            `Robust SE when variance not constant`,
            `Cross-validation for predictive performance`,
            `Partial regression plots explain individual features`,
            `Document preprocessing inside CV pipeline`
          ],
          diagram: `Regression Diagnostics
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Saving a plot without calling \`plt.tight_layout()\` — labels get clipped`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Using polynomial degree too high without regularization`,
            `Reading passively without typing and running a small variant of the example yourself`
          ]
        },
        {
          id: `inference-vs-pred`,
          title: `Inference vs Prediction`,
          content: `### Introduction

statsmodels excels at **interpretable coefficients** and statistical tests. sklearn excels at **prediction** with regularization and pipelines. Choose tool based on stakeholder questions.

### Inference vs Prediction

Publishing requires reporting limitations, data collection, and missing data handling.

### Key Ideas

- Coefficients answer "what if x increases by 1?"
- Regularization biases coefficients but improves prediction
- Causal claims need causal designs not regression alone
- Reproducible notebooks pin library versions`,
          keyPoints: [
            `Coefficients answer "what if x increases by 1?"`,
            `Regularization biases coefficients but improves prediction`,
            `Causal claims need causal designs not regression alone`,
            `Reproducible notebooks pin library versions`
          ],
          diagram: `Inference vs Prediction
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Reading passively without typing and running a small variant of the example yourself`,
            `Plotting before checking for missing values and outliers`,
            `Using test-set statistics to impute missing training data (leakage)`,
            `Saving a plot without calling \`plt.tight_layout()\` — labels get clipped`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-reg-1`,
          question: `Fit ols y~x on DataFrame y=[2,4], x=[1,2]; slope≈2.`,
          solution: `import statsmodels.formula.api as smf
import pandas as pd
df=pd.DataFrame({"y":[2,4],"x":[1,2]})
print(round(smf.ols("y~x",df).fit().params["x"],1))`,
          difficulty: `medium`
        },
        {
          id: `ex-reg-2`,
          question: `Print number of params in simple logit with one predictor.`,
          solution: `import statsmodels.formula.api as smf
import pandas as pd
df=pd.DataFrame({"y":[0,1,0,1],"x":[0,1,2,3]})
r=smf.logit("y~x",df).fit(disp=0)
print(len(r.params)==2)`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 40,
      module: `module-23`,
      references: [
        {
          id: `esl-hastie`,
          title: `The Elements of Statistical Learning`,
          source: `Stanford`,
          type: `book`,
          url: `https://hastie.su.domains/ElemStatLearn/`,
          description: `Free authoritative text on statistical learning methods and theory.`
        },
        {
          id: `sklearn-linear-models`,
          title: `scikit-learn Linear Models`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/modules/linear_model.html`,
          description: `Linear, logistic, ridge, lasso, and elastic net regression implementations.`
        },
        {
          id: `berkeley-cs189`,
          title: `Berkeley CS189/289A — Introduction to Machine Learning`,
          source: `Berkeley`,
          type: `course`,
          url: `https://people.eecs.berkeley.edu/~jrs/189/`,
          description: `Comprehensive ML course with strong mathematical foundations.`
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
      id: `stats-bayes`,
      title: `Bayesian Inference Intro`,
      description: `Update beliefs with data using Bayes' theorem, priors, and posterior sampling overview.`,
      level: `advanced`,
      track: `data`,
      sections: [
        {
          id: `bayes-theorem`,
          title: `Bayes' Theorem`,
          content: `### Introduction

**Posterior ∝ Likelihood × Prior**. Prior encodes belief before data; likelihood models data given parameters; posterior combines both.

### Bayes' Theorem

For conjugate pairs (Beta-Binomial, Normal-Normal) posteriors have closed form. Otherwise use MCMC (**PyMC**, **Stan**) or variational inference.

### Key Ideas

- Prior should be justified not arbitrary
- More data dominates prior (likelihood swamps prior)
- Posterior is a distribution not a point
- Conjugate updates are analytically tractable

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `# Beta-Binomial: prior Beta(1,1) uniform, 8 heads 2 tails
alpha, beta = 1+8, 1+2
mean = alpha / (alpha + beta)
print(round(mean, 2))`,
          output: `0.75`,
          keyPoints: [
            `Prior should be justified not arbitrary`,
            `More data dominates prior (likelihood swamps prior)`,
            `Posterior is a distribution not a point`,
            `Conjugate updates are analytically tractable`
          ],
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Plotting before checking for missing values and outliers`,
            `Using test-set statistics to impute missing training data (leakage)`,
            `Saving a plot without calling \`plt.tight_layout()\` — labels get clipped`
          ]
        },
        {
          id: `priors`,
          title: `Choosing Priors`,
          content: `### Introduction

**Informative priors** from literature; **weakly informative** regularize without dominating; **sensitivity analysis** varies priors to test robustness. Avoid improper priors unless you understand measure theory implications.

### Choosing Priors

Document prior choices in reports.

### Key Ideas

- Sensitivity analysis builds stakeholder trust
- Hierarchical priors pool information across groups
- Prior predictive checks simulate plausible data
- Regularization in ML relates to Gaussian priors`,
          keyPoints: [
            `Sensitivity analysis builds stakeholder trust`,
            `Hierarchical priors pool information across groups`,
            `Prior predictive checks simulate plausible data`,
            `Regularization in ML relates to Gaussian priors`
          ],
          commonMistakes: [
            `Reading passively without typing and running a small variant of the example yourself`,
            `Saving a plot without calling \`plt.tight_layout()\` — labels get clipped`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Reading passively without typing and running a small variant of the example yourself`
          ]
        },
        {
          id: `mcmc`,
          title: `Sampling the Posterior`,
          content: `### Introduction

Markov Chain Monte Carlo draws approximate posterior samples. Diagnostics: **trace plots**, **R-hat** ≈ 1, effective sample size.

### Sampling the Posterior

Stan/PyMC automate gradients with HMC. Computation cost limits model complexity—start simple, add hierarchy incrementally.

### Key Ideas

- R-hat > 1.01 suggests poor mixing
- Longer chains or reparameterization help
- MCMC uncertainty includes Monte Carlo error
- Variational Bayes faster but biased`,
          keyPoints: [
            `R-hat > 1.01 suggests poor mixing`,
            `Longer chains or reparameterization help`,
            `MCMC uncertainty includes Monte Carlo error`,
            `Variational Bayes faster but biased`
          ],
          diagram: `Sampling the Posterior
Load → Profile → Visualize → Hypothesis → Transform`,
          commonMistakes: [
            `Saving a plot without calling \`plt.tight_layout()\` — labels get clipped`,
            `Reading passively without typing and running a small variant of the example yourself`,
            `Plotting before checking for missing values and outliers`,
            `Using test-set statistics to impute missing training data (leakage)`
          ]
        },
        {
          id: `bayes-ml`,
          title: `Bayesian ML Connections`,
          content: `### Introduction

Bayesian neural networks quantify weight uncertainty (expensive). **Thompson sampling** in bandits.

### Bayesian ML Connections

Gaussian processes for small-data regression with uncertainty bands. Calibration plots compare predicted probabilities to observed frequencies—critical in decision systems.

### Key Ideas

- Uncertainty quantification aids risk-sensitive decisions
- Ensembles approximate Bayesian model averaging loosely
- Conformal prediction offers distribution-free intervals
- Bayes complements not replaces frequentist tools`,
          keyPoints: [
            `Uncertainty quantification aids risk-sensitive decisions`,
            `Ensembles approximate Bayesian model averaging loosely`,
            `Conformal prediction offers distribution-free intervals`,
            `Bayes complements not replaces frequentist tools`
          ],
          diagram: `Bayesian ML Connections
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Reading passively without typing and running a small variant of the example yourself`,
            `Saving a plot without calling \`plt.tight_layout()\` — labels get clipped`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Using polynomial degree too high without regularization`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-bayes-1`,
          question: `Beta(2,2) posterior mean after 3 successes 1 fail starting Beta(1,1).`,
          solution: `a,b=1+3,1+1
print(a/(a+b))`,
          difficulty: `easy`
        },
        {
          id: `ex-bayes-2`,
          question: `Normalize posterior: multiply likelihood and prior, then divide by evidence.`,
          solution: `likelihood, prior, evidence = 0.8, 0.01, 0.05
posterior = likelihood * prior / evidence
print(round(posterior, 4))`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 40,
      module: `module-23`,
      references: [
        {
          id: `khan-probability`,
          title: `Statistics and Probability — Khan Academy`,
          source: `Khan Academy`,
          type: `course`,
          url: `https://www.khanacademy.org/math/statistics-probability`,
          description: `Probability distributions, Bayes theorem, and statistical inference.`
        },
        {
          id: `bishop-prml`,
          title: `Pattern Recognition and Machine Learning`,
          source: `Cambridge`,
          type: `book`,
          url: `https://www.microsoft.com/en-us/research/publication/pattern-recognition-machine-learning/`,
          description: `Rigorous treatment of probability, inference, and classical ML algorithms.`
        },
        {
          id: `cover-thomas-info-theory`,
          title: `Elements of Information Theory`,
          source: `Wiley`,
          type: `book`,
          url: `https://www.elementsofinformationtheory.com/`,
          description: `Definitive reference for entropy, mutual information, and coding theory.`
        },
        {
          id: `esl-hastie`,
          title: `The Elements of Statistical Learning`,
          source: `Stanford`,
          type: `book`,
          url: `https://hastie.su.domains/ElemStatLearn/`,
          description: `Free authoritative text on statistical learning methods and theory.`
        }
      ]
    }
];
