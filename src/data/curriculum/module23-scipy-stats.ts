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
        },
        {
          id: `scipy-basics-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

SciPy Numerical Tools sits in the **data** track of the DL_Master curriculum. Use scipy.optimize, integrate, and interpolate for scientific computing tasks.

Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.

For scipy-basics, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (intermediate):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for SciPy Numerical Tools
meta = {"topic_id": "scipy-basics", "track": "data", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `scipy-basics data intermediate`,
          keyPoints: [
            `Core theory of SciPy Numerical Tools ties to the data track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `scipy-basics-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from SciPy Numerical Tools. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For scipy-basics, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for scipy-basics
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("scipy-basics", "SciPy Numerical Tools")
print(ref.topic_id, ref.title.split()[0])`,
          output: `scipy-basics SciPy`,
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
          id: `scipy-basics-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on SciPy Numerical Tools often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on scipy-basics, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("scipy-basics", "SciPy Numerical Tools")
debug_step("section_count", 4)`,
          output: `[scipy-basics] 'SciPy Numerical Tools' (str)
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
          id: `scipy-basics-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

SciPy Numerical Tools shows up wherever data skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around scipy-basics align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for SciPy Numerical Tools
skills = ["data", "intermediate", "scipy-basics"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: data, intermediate, scipy-basics`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect SciPy Numerical Tools to adjacent topics in the same track`
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
      estimatedMinutes: 55,
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
        },
        {
          id: `stats-hypothesis-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Hypothesis Testing sits in the **data** track of the DL_Master curriculum. Apply t-tests, chi-square tests, and interpret p-values responsibly.

Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.

For stats-hypothesis, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (intermediate):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Hypothesis Testing
meta = {"topic_id": "stats-hypothesis", "track": "data", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `stats-hypothesis data intermediate`,
          keyPoints: [
            `Core theory of Hypothesis Testing ties to the data track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `stats-hypothesis-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Hypothesis Testing. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For stats-hypothesis, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for stats-hypothesis
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("stats-hypothesis", "Hypothesis Testing")
print(ref.topic_id, ref.title.split()[0])`,
          output: `stats-hypothesis Hypothesis`,
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
          id: `stats-hypothesis-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Hypothesis Testing often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on stats-hypothesis, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("stats-hypothesis", "Hypothesis Testing")
debug_step("section_count", 4)`,
          output: `[stats-hypothesis] 'Hypothesis Testing' (str)
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
          id: `stats-hypothesis-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Hypothesis Testing shows up wherever data skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around stats-hypothesis align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Hypothesis Testing
skills = ["data", "intermediate", "stats-hypothesis"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: data, intermediate, stats-hypothesis`,
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
      estimatedMinutes: 50,
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
        },
        {
          id: `stats-distributions-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Probability Distributions sits in the **data** track of the DL_Master curriculum. Model uncertainty with scipy.stats: PDFs, CDFs, sampling, and fitting.

Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.

For stats-distributions, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (intermediate):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Probability Distributions
meta = {"topic_id": "stats-distributions", "track": "data", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `stats-distributions data intermediate`,
          keyPoints: [
            `Core theory of Probability Distributions ties to the data track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `stats-distributions-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Probability Distributions. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For stats-distributions, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for stats-distributions
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("stats-distributions", "Probability Distributions")
print(ref.topic_id, ref.title.split()[0])`,
          output: `stats-distributions Probability`,
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
          id: `stats-distributions-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Probability Distributions often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on stats-distributions, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("stats-distributions", "Probability Distributions")
debug_step("section_count", 4)`,
          output: `[stats-distributions] 'Probability Distributions' (str)
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
          id: `stats-distributions-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Probability Distributions shows up wherever data skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around stats-distributions align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Probability Distributions
skills = ["data", "intermediate", "stats-distributions"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: data, intermediate, stats-distributions`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Probability Distributions to adjacent topics in the same track`
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
      estimatedMinutes: 50,
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
        },
        {
          id: `stats-regression-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Regression with statsmodels sits in the **data** track of the DL_Master curriculum. Ordinary least squares and logistic regression for inference-rich modeling.

Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.

For stats-regression, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (intermediate):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Regression with statsmodels
meta = {"topic_id": "stats-regression", "track": "data", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `stats-regression data intermediate`,
          keyPoints: [
            `Core theory of Regression with statsmodels ties to the data track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `stats-regression-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Regression with statsmodels. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For stats-regression, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for stats-regression
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("stats-regression", "Regression with statsmodels")
print(ref.topic_id, ref.title.split()[0])`,
          output: `stats-regression Regression`,
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
          id: `stats-regression-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Regression with statsmodels often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on stats-regression, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("stats-regression", "Regression with statsmodels")
debug_step("section_count", 4)`,
          output: `[stats-regression] 'Regression with statsmodels' (str)
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
          id: `stats-regression-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Regression with statsmodels shows up wherever data skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around stats-regression align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Regression with statsmodels
skills = ["data", "intermediate", "stats-regression"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: data, intermediate, stats-regression`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Regression with statsmodels to adjacent topics in the same track`
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
      estimatedMinutes: 55,
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
        },
        {
          id: `stats-bayes-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Bayesian Inference Intro sits in the **data** track of the DL_Master curriculum. Update beliefs with data using Bayes' theorem, priors, and posterior sampling overview.

Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.

For stats-bayes, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Bayesian Inference Intro
meta = {"topic_id": "stats-bayes", "track": "data", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `stats-bayes data advanced`,
          keyPoints: [
            `Core theory of Bayesian Inference Intro ties to the data track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `stats-bayes-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Bayesian Inference Intro. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For stats-bayes, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for stats-bayes
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("stats-bayes", "Bayesian Inference Intro")
print(ref.topic_id, ref.title.split()[0])`,
          output: `stats-bayes Bayesian`,
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
          id: `stats-bayes-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Bayesian Inference Intro often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on stats-bayes, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("stats-bayes", "Bayesian Inference Intro")
debug_step("section_count", 4)`,
          output: `[stats-bayes] 'Bayesian Inference Intro' (str)
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
          id: `stats-bayes-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Bayesian Inference Intro shows up wherever data skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around stats-bayes align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Bayesian Inference Intro
skills = ["data", "advanced", "stats-bayes"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: data, advanced, stats-bayes`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Bayesian Inference Intro to adjacent topics in the same track`
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
      estimatedMinutes: 55,
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
