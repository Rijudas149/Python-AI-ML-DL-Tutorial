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
          content: `\`minimize(fun, x0, method="BFGS")\` finds local minima of scalar/multivariate functions. Provide **\`jac\`** gradient for speed. **\`bounds\`** and **\`constraints\`** for constrained problems.

\`curve_fit\` fits nonlinear models to data by least squares. Always inspect residuals and initial guesses—optimization finds local optima.

**Applying SciPy Numerical Tools:** Use scipy.optimize, integrate, and interpolate for scientific computing tasks. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "scipy.optimize", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
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
          ]
        },
        {
          id: `integrate`,
          title: `Integration & ODEs`,
          content: `\`quad\` integrates 1D functions: \`integrate.quad(lambda x: x**2, 0, 1)\`. **\`dblquad/tplquad\`** extend dimension. **\`odeint\`** solves ordinary differential equations from initial conditions.

Watch singularities and infinite limits—split integration domains or transform variables.

**Applying SciPy Numerical Tools:** Use scipy.optimize, integrate, and interpolate for scientific computing tasks. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Integration & ODEs", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          example: `from scipy import integrate
val, err = integrate.quad(lambda x: x**2, 0, 1)
print(round(val, 3), err < 1e-8)`,
          output: `0.333 True`,
          keyPoints: [
            `quad returns estimate and error bound`,
            `odeint for dynamical systems models`,
            `Transform improper integrals when possible`,
            `Compare with Monte Carlo for validation`
          ]
        },
        {
          id: `interpolate`,
          title: `Interpolation`,
          content: `\`interp1d\` (legacy) and **\`Akima1DInterpolator\`**, \`CubicSpline\` build continuous functions from discrete samples. **\`griddata\`** interpolates scattered 2D points.

Extrapolation outside sample range is unreliable—clamp or model uncertainty explicitly.

**Applying SciPy Numerical Tools:** Use scipy.optimize, integrate, and interpolate for scientific computing tasks. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Interpolation", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
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
          ]
        },
        {
          id: `scipy-ecosystem`,
          title: `SciPy in the Stack`,
          content: `SciPy builds on NumPy arrays. Combine with **matplotlib** for visualization and **pandas** for labeled tables. For heavy linear algebra prefer **\`scipy.linalg\`** over numpy.linalg for some decompositions.

Reproducibility: fix random seeds in stochastic routines and document numerical tolerances.

**Applying SciPy Numerical Tools:** Use scipy.optimize, integrate, and interpolate for scientific computing tasks. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "SciPy in the Stack", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `SciPy functions expect ndarray inputs`,
            `Vectorize where possible before Python loops`,
            `Document units and coordinate systems`,
            `Benchmark against analytical solutions when known`
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
          id: `pandas-getting-started`,
          title: `Getting Started with pandas`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/getting_started/index.html`,
          description: `Introductory guide to Series, DataFrames, and basic operations.`
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
          id: `kaggle-pandas`,
          title: `Kaggle Learn — Pandas`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/pandas`,
          description: `Hands-on pandas exercises for real-world data manipulation.`
        },
        {
          id: `kaggle-data-viz`,
          title: `Kaggle Learn — Data Visualization`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/data-visualization`,
          description: `Practical chart selection and storytelling with seaborn.`
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
          content: `**Null hypothesis H₀** typically states no effect. **Alternative H₁** states an effect exists. Choose **significance level α** (often 0.05) before seeing data.

**p-value**: probability of observing data at least as extreme as yours if H₀ were true. Reject H₀ if p < α—not "probability H₀ is true".

**Applying Hypothesis Testing:** Apply t-tests, chi-square tests, and interpret p-values responsibly. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Null & Alternative Hypotheses", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Pre-register α to avoid p-hacking`,
            `p-value is not effect size`,
            `Failure to reject ≠ prove null`,
            `Report confidence intervals alongside tests`
          ]
        },
        {
          id: `ttest`,
          title: `t-Tests`,
          content: `\`scipy.stats.ttest_ind(a, b)\` compares means of two independent samples (Welch variant by default). **\`ttest_rel\`** for paired samples. Assumptions: approximate normality or large n; similar variance for classic equal-variance test.

Check with Q-Q plots and report effect size (Cohen's d).

**Applying Hypothesis Testing:** Apply t-tests, chi-square tests, and interpret p-values responsibly. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "t-Tests", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
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
          ]
        },
        {
          id: `chisq`,
          title: `Chi-Square Tests`,
          content: `\`stats.chisquare\` for goodness-of-fit against expected counts. **\`chi2_contingency\`** on contingency tables tests independence of categorical variables.

Expected frequencies should be ≥5 in most cells; combine categories otherwise.

**Applying Hypothesis Testing:** Apply t-tests, chi-square tests, and interpret p-values responsibly. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Chi-Square Tests", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
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
          ]
        },
        {
          id: `pvalue-interpret`,
          title: `Interpreting Results Responsibly`,
          content: `Combine statistical significance with **practical significance**. Report sample size, test used, assumptions checked. Avoid "borderline" p=0.049 storytelling.

**Bayesian** approaches quantify posterior belief; frequentist p-values answer a different question—do not conflate.

**Applying Hypothesis Testing:** Apply t-tests, chi-square tests, and interpret p-values responsibly. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Interpreting Results Responsibly", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Effect size and CI matter more than p alone`,
            `Power analysis plans sample size ex ante`,
            `Preregister analysis plans in research`,
            `Replication validates surprising findings`
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
          id: `numpy-quickstart`,
          title: `NumPy Quickstart Tutorial`,
          source: `NumPy`,
          type: `documentation`,
          url: `https://numpy.org/doc/stable/user/quickstart.html`,
          description: `Creating arrays, indexing, and basic operations with ndarrays.`
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
          id: `matplotlib-pyplot`,
          title: `Matplotlib Pyplot Tutorial`,
          source: `Matplotlib`,
          type: `documentation`,
          url: `https://matplotlib.org/stable/tutorials/pyplot.html`,
          description: `Creating line, scatter, bar, and histogram plots with pyplot.`
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
          id: `kaggle-data-viz`,
          title: `Kaggle Learn — Data Visualization`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/data-visualization`,
          description: `Practical chart selection and storytelling with seaborn.`
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
          content: `Each distribution is an **\`rv_continuous\`** or **\`rv_discrete\`** object: \`norm\`, \`binom\`, \`poisson\`, \`t\`, \`chi2\`, etc. Methods: \`.pdf/.pmf\`, \`.cdf\`, \`.ppf\` (quantile), \`.rvs(size=)\` sample.

\`loc\` and \`scale\` shift/scale distributions: \`norm(loc=mu, scale=sigma)\`.

**Applying Probability Distributions:** Model uncertainty with scipy.stats: PDFs, CDFs, sampling, and fitting. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Random Variables in scipy.stats", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
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
          ]
        },
        {
          id: `fit`,
          title: `Fitting Distributions`,
          content: `\`stats.norm.fit(data)\` returns MLE parameters. **\`kstest\`** compares empirical CDF to reference. Visualize with histogram + fitted PDF overlay.

Overfitting parametric forms misleads—compare models with AIC/BIC or nonparametric KDE.

**Applying Probability Distributions:** Model uncertainty with scipy.stats: PDFs, CDFs, sampling, and fitting. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Fitting Distributions", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
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
          ]
        },
        {
          id: `sampling`,
          title: `Sampling Strategies`,
          content: `Simple random sampling, stratified sampling (preserve class proportions), bootstrap resampling for CI estimation (\`np.random.choice\` with replace).

Monte Carlo integrates expectations by drawing samples—error shrinks as O(1/√n).

**Applying Probability Distributions:** Model uncertainty with scipy.stats: PDFs, CDFs, sampling, and fitting. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Sampling Strategies", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
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
          ]
        },
        {
          id: `clt`,
          title: `Central Limit Theorem`,
          content: `Sum/mean of iid samples with finite variance approaches normal as n grows—explains widespread normal approximations. Does not fix heavy-tailed single-draw risk.

For proportions, use binomial or normal approx with care when np(1-p) small.

**Applying Probability Distributions:** Model uncertainty with scipy.stats: PDFs, CDFs, sampling, and fitting. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Central Limit Theorem", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `CLT applies to sample means not individual draws`,
            `Finite variance assumption matters`,
            `Rate of convergence depends on underlying distribution`,
            `Use exact tests when approximations fail`
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
          id: `numpy-quickstart`,
          title: `NumPy Quickstart Tutorial`,
          source: `NumPy`,
          type: `documentation`,
          url: `https://numpy.org/doc/stable/user/quickstart.html`,
          description: `Creating arrays, indexing, and basic operations with ndarrays.`
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
          id: `matplotlib-pyplot`,
          title: `Matplotlib Pyplot Tutorial`,
          source: `Matplotlib`,
          type: `documentation`,
          url: `https://matplotlib.org/stable/tutorials/pyplot.html`,
          description: `Creating line, scatter, bar, and histogram plots with pyplot.`
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
          id: `kaggle-data-viz`,
          title: `Kaggle Learn — Data Visualization`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/data-visualization`,
          description: `Practical chart selection and storytelling with seaborn.`
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
          content: `**statsmodels.formula.api.ols** accepts R-like formulas: \`ols("y ~ x1 + x2", data=df).fit()\`. Summary includes coefficients, standard errors, t-stats, R², F-test.

Check **linearity**, **homoscedasticity** (Breusch-Pagan), **residual normality** for inference validity.

**Applying Regression with statsmodels:** Ordinary least squares and logistic regression for inference-rich modeling. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "OLS Linear Regression", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
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
          ]
        },
        {
          id: `logistic`,
          title: `Logistic Regression`,
          content: `Binary outcomes: **\`logit("y ~ x", data=df)\`** models log-odds linear in features. Coefficients exponentiate to odds ratios. Metrics: AUC, log-loss, calibration curves.

Class imbalance requires class weights or resampling—accuracy alone misleads.

**Applying Regression with statsmodels:** Ordinary least squares and logistic regression for inference-rich modeling. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Logistic Regression", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
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
          ]
        },
        {
          id: `diagnostics`,
          title: `Regression Diagnostics`,
          content: `Influential points: Cook's distance. Heteroscedasticity robust SE: \`cov_type="HC3"\`. VIF quantifies multicollinearity. Out-of-sample validation on holdout prevents overfitting narrative.

Transform targets (log) or use GLMs when residuals show systematic patterns.

**Applying Regression with statsmodels:** Ordinary least squares and logistic regression for inference-rich modeling. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Regression Diagnostics", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Robust SE when variance not constant`,
            `Cross-validation for predictive performance`,
            `Partial regression plots explain individual features`,
            `Document preprocessing inside CV pipeline`
          ]
        },
        {
          id: `inference-vs-pred`,
          title: `Inference vs Prediction`,
          content: `statsmodels excels at **interpretable coefficients** and statistical tests. sklearn excels at **prediction** with regularization and pipelines. Choose tool based on stakeholder questions.

Publishing requires reporting limitations, data collection, and missing data handling.

**Applying Regression with statsmodels:** Ordinary least squares and logistic regression for inference-rich modeling. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Inference vs Prediction", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Coefficients answer "what if x increases by 1?"`,
            `Regularization biases coefficients but improves prediction`,
            `Causal claims need causal designs not regression alone`,
            `Reproducible notebooks pin library versions`
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
          id: `numpy-quickstart`,
          title: `NumPy Quickstart Tutorial`,
          source: `NumPy`,
          type: `documentation`,
          url: `https://numpy.org/doc/stable/user/quickstart.html`,
          description: `Creating arrays, indexing, and basic operations with ndarrays.`
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
          id: `matplotlib-pyplot`,
          title: `Matplotlib Pyplot Tutorial`,
          source: `Matplotlib`,
          type: `documentation`,
          url: `https://matplotlib.org/stable/tutorials/pyplot.html`,
          description: `Creating line, scatter, bar, and histogram plots with pyplot.`
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
          id: `kaggle-data-viz`,
          title: `Kaggle Learn — Data Visualization`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/data-visualization`,
          description: `Practical chart selection and storytelling with seaborn.`
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
          content: `**Posterior ∝ Likelihood × Prior**. Prior encodes belief before data; likelihood models data given parameters; posterior combines both.

For conjugate pairs (Beta-Binomial, Normal-Normal) posteriors have closed form. Otherwise use MCMC (**PyMC**, **Stan**) or variational inference.

**Applying Bayesian Inference Intro:** Update beliefs with data using Bayes' theorem, priors, and posterior sampling overview. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Bayes' Theorem", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
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
          ]
        },
        {
          id: `priors`,
          title: `Choosing Priors`,
          content: `**Informative priors** from literature; **weakly informative** regularize without dominating; **sensitivity analysis** varies priors to test robustness.

Avoid improper priors unless you understand measure theory implications. Document prior choices in reports.

**Applying Bayesian Inference Intro:** Update beliefs with data using Bayes' theorem, priors, and posterior sampling overview. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Choosing Priors", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Sensitivity analysis builds stakeholder trust`,
            `Hierarchical priors pool information across groups`,
            `Prior predictive checks simulate plausible data`,
            `Regularization in ML relates to Gaussian priors`
          ]
        },
        {
          id: `mcmc`,
          title: `Sampling the Posterior`,
          content: `Markov Chain Monte Carlo draws approximate posterior samples. Diagnostics: **trace plots**, **R-hat** ≈ 1, effective sample size. Stan/PyMC automate gradients with HMC.

Computation cost limits model complexity—start simple, add hierarchy incrementally.

**Applying Bayesian Inference Intro:** Update beliefs with data using Bayes' theorem, priors, and posterior sampling overview. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Sampling the Posterior", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `R-hat > 1.01 suggests poor mixing`,
            `Longer chains or reparameterization help`,
            `MCMC uncertainty includes Monte Carlo error`,
            `Variational Bayes faster but biased`
          ]
        },
        {
          id: `bayes-ml`,
          title: `Bayesian ML Connections`,
          content: `Bayesian neural networks quantify weight uncertainty (expensive). **Thompson sampling** in bandits. Gaussian processes for small-data regression with uncertainty bands.

Calibration plots compare predicted probabilities to observed frequencies—critical in decision systems.

**Applying Bayesian Inference Intro:** Update beliefs with data using Bayes' theorem, priors, and posterior sampling overview. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Bayesian ML Connections", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Uncertainty quantification aids risk-sensitive decisions`,
            `Ensembles approximate Bayesian model averaging loosely`,
            `Conformal prediction offers distribution-free intervals`,
            `Bayes complements not replaces frequentist tools`
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
          question: `Posterior proportional to likelihood times prior means multiply then ___ize.`,
          solution: `print("normal")`,
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
          id: `pandas-getting-started`,
          title: `Getting Started with pandas`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/getting_started/index.html`,
          description: `Introductory guide to Series, DataFrames, and basic operations.`
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
          id: `kaggle-pandas`,
          title: `Kaggle Learn — Pandas`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/pandas`,
          description: `Hands-on pandas exercises for real-world data manipulation.`
        },
        {
          id: `kaggle-data-viz`,
          title: `Kaggle Learn — Data Visualization`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/data-visualization`,
          description: `Practical chart selection and storytelling with seaborn.`
        }
      ]
    }
];
