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
            `Plot objective surface for 2D intuition`,
            `scipy.optimize is a foundational piece of SciPy Numerical Tools`,
            `Connect this section to the data track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: scipy.optimize

Study checklist:
  1. Good x0 critical for nonlinear optimization
  2. Provide analytic Jacobian when available
  3. Check convergence flag res.success
  4. Plot objective surface for 2D intuition
  5. scipy.optimize is a foundational piece of SciPy Numerical Tools
  6. Connect this section to the data track and intermediate expectations

Topic: SciPy Numerical Tools
Track: data | Level: intermediate`
        },
        {
          id: `integrate`,
          title: `Integration & ODEs`,
          content: `\`quad\` integrates 1D functions: \`integrate.quad(lambda x: x**2, 0, 1)\`. **\`dblquad/tplquad\`** extend dimension. **\`odeint\`** solves ordinary differential equations from initial conditions.

Watch singularities and infinite limits—split integration domains or transform variables.

**Applying SciPy Numerical Tools:** Use scipy.optimize, integrate, and interpolate for scientific computing tasks. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Integration & ODEs", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Integration & ODEs** directly affects how confidently you can build, debug, and ship data projects.
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
          example: `from scipy import integrate
val, err = integrate.quad(lambda x: x**2, 0, 1)
print(round(val, 3), err < 1e-8)`,
          output: `0.333 True`,
          keyPoints: [
            `quad returns estimate and error bound`,
            `odeint for dynamical systems models`,
            `Transform improper integrals when possible`,
            `Compare with Monte Carlo for validation`,
            `Integration & ODEs is a foundational piece of SciPy Numerical Tools`,
            `Connect this section to the data track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Integration & ODEs

Study checklist:
  1. quad returns estimate and error bound
  2. odeint for dynamical systems models
  3. Transform improper integrals when possible
  4. Compare with Monte Carlo for validation
  5. Integration & ODEs is a foundational piece of SciPy Numerical Tools
  6. Connect this section to the data track and intermediate expectations

Topic: SciPy Numerical Tools
Track: data | Level: intermediate`
        },
        {
          id: `interpolate`,
          title: `Interpolation`,
          content: `\`interp1d\` (legacy) and **\`Akima1DInterpolator\`**, \`CubicSpline\` build continuous functions from discrete samples. **\`griddata\`** interpolates scattered 2D points.

Extrapolation outside sample range is unreliable—clamp or model uncertainty explicitly.

**Applying SciPy Numerical Tools:** Use scipy.optimize, integrate, and interpolate for scientific computing tasks. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Interpolation", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Interpolation** directly affects how confidently you can build, debug, and ship data projects.
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
            `Visualize interpolant against raw points`,
            `Interpolation is a foundational piece of SciPy Numerical Tools`,
            `Connect this section to the data track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Interpolation

Study checklist:
  1. Choose spline order based on smoothness needs
  2. Never extrapolate blindly beyond data support
  3. griddata for unstructured spatial data
  4. Visualize interpolant against raw points
  5. Interpolation is a foundational piece of SciPy Numerical Tools
  6. Connect this section to the data track and intermediate expectations

Topic: SciPy Numerical Tools
Track: data | Level: intermediate`
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
            `Benchmark against analytical solutions when known`,
            `SciPy in the Stack is a foundational piece of SciPy Numerical Tools`,
            `Connect this section to the data track and intermediate expectations`
          ],
          example: `# Concept check: SciPy in the Stack
meta = {
    "topic": "scipy-basics",
    "section": "scipy-ecosystem",
    "track": "data",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: scipy-basics
section: scipy-ecosystem
track: data
level: intermediate`,
          pseudoCode: `CONCEPT: SciPy in the Stack

Study checklist:
  1. SciPy functions expect ndarray inputs
  2. Vectorize where possible before Python loops
  3. Document units and coordinate systems
  4. Benchmark against analytical solutions when known
  5. SciPy in the Stack is a foundational piece of SciPy Numerical Tools
  6. Connect this section to the data track and intermediate expectations

Topic: SciPy Numerical Tools
Track: data | Level: intermediate`
        },
        {
          id: `scipy-basics-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**SciPy Numerical Tools** sits in the **data** track of the Data Science Master curriculum. Use scipy.optimize, integrate, and interpolate for scientific computing tasks.

**Theoretical foundation:**

- Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling.
- Every aggregation encodes assumptions about granularity and time.

For **scipy-basics**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
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
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of SciPy Numerical Tools ties to the data track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: SciPy Numerical Tools
Track: data | Level: intermediate`
        },
        {
          id: `scipy-basics-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **SciPy Numerical Tools**. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **scipy-basics**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
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
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with data ecosystem conventions

Topic: SciPy Numerical Tools
Track: data | Level: intermediate`
        },
        {
          id: `scipy-basics-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **SciPy Numerical Tools** often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on **scipy-basics**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: SciPy Numerical Tools
Track: data | Level: intermediate`
        },
        {
          id: `scipy-basics-real-world`,
          title: `Real-World Applications`,
          content: `**SciPy Numerical Tools** shows up wherever **data** skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around **scipy-basics** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
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
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect SciPy Numerical Tools to adjacent topics in the same track

Topic: SciPy Numerical Tools
Track: data | Level: intermediate`
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
      estimatedMinutes: 124,
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
            `Report confidence intervals alongside tests`,
            `Null & Alternative Hypotheses is a foundational piece of Hypothesis Testing`,
            `Connect this section to the data track and intermediate expectations`
          ],
          example: `# Concept check: Null & Alternative Hypotheses
meta = {
    "topic": "stats-hypothesis",
    "section": "hypothesis",
    "track": "data",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: stats-hypothesis
section: hypothesis
track: data
level: intermediate`,
          pseudoCode: `CONCEPT: Null & Alternative Hypotheses

Study checklist:
  1. Pre-register α to avoid p-hacking
  2. p-value is not effect size
  3. Failure to reject ≠ prove null
  4. Report confidence intervals alongside tests
  5. Null & Alternative Hypotheses is a foundational piece of Hypothesis Testing
  6. Connect this section to the data track and intermediate expectations

Topic: Hypothesis Testing
Track: data | Level: intermediate`
        },
        {
          id: `ttest`,
          title: `t-Tests`,
          content: `\`scipy.stats.ttest_ind(a, b)\` compares means of two independent samples (Welch variant by default). **\`ttest_rel\`** for paired samples. Assumptions: approximate normality or large n; similar variance for classic equal-variance test.

Check with Q-Q plots and report effect size (Cohen's d).

**Applying Hypothesis Testing:** Apply t-tests, chi-square tests, and interpret p-values responsibly. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "t-Tests", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **t-Tests** directly affects how confidently you can build, debug, and ship data projects.
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
            `Always visualize group distributions`,
            `t-Tests is a foundational piece of Hypothesis Testing`,
            `Connect this section to the data track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: t-Tests

Study checklist:
  1. Welch t-test robust to unequal variances
  2. Large samples invoke CLT for normality relaxation
  3. Multiple testing inflates false positives—use Bonferroni/FDR
  4. Always visualize group distributions
  5. t-Tests is a foundational piece of Hypothesis Testing
  6. Connect this section to the data track and intermediate expectations

Topic: Hypothesis Testing
Track: data | Level: intermediate`
        },
        {
          id: `chisq`,
          title: `Chi-Square Tests`,
          content: `\`stats.chisquare\` for goodness-of-fit against expected counts. **\`chi2_contingency\`** on contingency tables tests independence of categorical variables.

Expected frequencies should be ≥5 in most cells; combine categories otherwise.

**Applying Hypothesis Testing:** Apply t-tests, chi-square tests, and interpret p-values responsibly. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Chi-Square Tests", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Chi-Square Tests** directly affects how confidently you can build, debug, and ship data projects.
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
            `Residual analysis finds which cells deviate`,
            `Chi-Square Tests is a foundational piece of Hypothesis Testing`,
            `Connect this section to the data track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Chi-Square Tests

Study checklist:
  1. chi2_contingency returns expected cell counts
  2. Low expected counts invalidate approximation
  3. Cramér's V measures association strength
  4. Residual analysis finds which cells deviate
  5. Chi-Square Tests is a foundational piece of Hypothesis Testing
  6. Connect this section to the data track and intermediate expectations

Topic: Hypothesis Testing
Track: data | Level: intermediate`
        },
        {
          id: `pvalue-interpret`,
          title: `Interpreting Results Responsibly`,
          content: `Combine statistical significance with **practical significance**. Report sample size, test used, assumptions checked. Avoid "borderline" p=0.049 storytelling.

**Bayesian** approaches quantify posterior belief; frequentist p-values answer a different question—do not conflate.

**Applying Hypothesis Testing:** Apply t-tests, chi-square tests, and interpret p-values responsibly. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Interpreting Results Responsibly", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Interpreting Results Responsibly** directly affects how confidently you can build, debug, and ship data projects.
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
            `Effect size and CI matter more than p alone`,
            `Power analysis plans sample size ex ante`,
            `Preregister analysis plans in research`,
            `Replication validates surprising findings`,
            `Interpreting Results Responsibly is a foundational piece of Hypothesis Testing`,
            `Connect this section to the data track and intermediate expectations`
          ],
          example: `# Concept check: Interpreting Results Responsibly
meta = {
    "topic": "stats-hypothesis",
    "section": "pvalue-interpret",
    "track": "data",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: stats-hypothesis
section: pvalue-interpret
track: data
level: intermediate`,
          pseudoCode: `CONCEPT: Interpreting Results Responsibly

Study checklist:
  1. Effect size and CI matter more than p alone
  2. Power analysis plans sample size ex ante
  3. Preregister analysis plans in research
  4. Replication validates surprising findings
  5. Interpreting Results Responsibly is a foundational piece of Hypothesis Testing
  6. Connect this section to the data track and intermediate expectations

Topic: Hypothesis Testing
Track: data | Level: intermediate`
        },
        {
          id: `stats-hypothesis-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Hypothesis Testing** sits in the **data** track of the Data Science Master curriculum. Apply t-tests, chi-square tests, and interpret p-values responsibly.

**Theoretical foundation:**

- Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling.
- Every aggregation encodes assumptions about granularity and time.

For **stats-hypothesis**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
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
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Hypothesis Testing ties to the data track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Hypothesis Testing
Track: data | Level: intermediate`
        },
        {
          id: `stats-hypothesis-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Hypothesis Testing**. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **stats-hypothesis**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
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
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with data ecosystem conventions

Topic: Hypothesis Testing
Track: data | Level: intermediate`
        },
        {
          id: `stats-hypothesis-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Hypothesis Testing** often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on **stats-hypothesis**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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
Track: data | Level: intermediate`
        },
        {
          id: `stats-hypothesis-real-world`,
          title: `Real-World Applications`,
          content: `**Hypothesis Testing** shows up wherever **data** skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around **stats-hypothesis** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
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
Track: data | Level: intermediate`
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
      estimatedMinutes: 124,
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

**Applying Probability Distributions:** Model uncertainty with scipy.stats: PDFs, CDFs, sampling, and fitting. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Random Variables in scipy.stats", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Random Variables in scipy.stats** directly affects how confidently you can build, debug, and ship data projects.
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
          example: `from scipy import stats
import numpy as np
samples = stats.norm.rvs(loc=0, scale=1, size=1000, random_state=42)
print(abs(np.mean(samples)) < 0.1)`,
          output: `True`,
          keyPoints: [
            `rvs requires random_state for reproducibility`,
            `ppf inverts cdf for confidence intervals`,
            `Match distribution to data generating process`,
            `Heavy tails need t or stable distributions`,
            `Random Variables in scipy.stats is a foundational piece of Probability Distributions`,
            `Connect this section to the data track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Random Variables in scipy.stats

Study checklist:
  1. rvs requires random_state for reproducibility
  2. ppf inverts cdf for confidence intervals
  3. Match distribution to data generating process
  4. Heavy tails need t or stable distributions
  5. Random Variables in scipy.stats is a foundational piece of Probability Distributions
  6. Connect this section to the data track and intermediate expectations

Topic: Probability Distributions
Track: data | Level: intermediate`
        },
        {
          id: `fit`,
          title: `Fitting Distributions`,
          content: `\`stats.norm.fit(data)\` returns MLE parameters. **\`kstest\`** compares empirical CDF to reference. Visualize with histogram + fitted PDF overlay.

Overfitting parametric forms misleads—compare models with AIC/BIC or nonparametric KDE.

**Applying Probability Distributions:** Model uncertainty with scipy.stats: PDFs, CDFs, sampling, and fitting. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Fitting Distributions", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Fitting Distributions** directly affects how confidently you can build, debug, and ship data projects.
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
            `Mixture models for multimodal data`,
            `Fitting Distributions is a foundational piece of Probability Distributions`,
            `Connect this section to the data track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Fitting Distributions

Study checklist:
  1. Visual fit assessment mandatory
  2. KS test sensitive to large n
  3. Consider log-normal for positive skewed data
  4. Mixture models for multimodal data
  5. Fitting Distributions is a foundational piece of Probability Distributions
  6. Connect this section to the data track and intermediate expectations

Topic: Probability Distributions
Track: data | Level: intermediate`
        },
        {
          id: `sampling`,
          title: `Sampling Strategies`,
          content: `**Sampling Strategies** — what you need to know:

- **Core idea:** Model uncertainty with scipy.stats: PDFs, CDFs, sampling, and fitting.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Simple random sampling, stratified sampling (preserve class proportions), bootstrap resampling for CI estimation (\`np.random.choice\` with replace).

Monte Carlo integrates expectations by drawing samples—error shrinks as O(1/√n).

**Applying Probability Distributions:** Model uncertainty with scipy.stats: PDFs, CDFs, sampling, and fitting. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Sampling Strategies", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Sampling Strategies** directly affects how confidently you can build, debug, and ship data projects.
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
          example: `import numpy as np
rng = np.random.default_rng(0)
boot_means = [rng.choice([1,2,3,4,5], size=5, replace=True).mean() for _ in range(1000)]
print(len(boot_means))`,
          output: `1000`,
          keyPoints: [
            `Stratify on key categorical variables`,
            `Bootstrap CIs avoid normality assumptions`,
            `Sample size drives uncertainty not population size alone`,
            `Use default_rng not legacy np.random.seed only`,
            `Sampling Strategies is a foundational piece of Probability Distributions`,
            `Connect this section to the data track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Sampling Strategies

Study checklist:
  1. Stratify on key categorical variables
  2. Bootstrap CIs avoid normality assumptions
  3. Sample size drives uncertainty not population size alone
  4. Use default_rng not legacy np.random.seed only
  5. Sampling Strategies is a foundational piece of Probability Distributions
  6. Connect this section to the data track and intermediate expectations

Topic: Probability Distributions
Track: data | Level: intermediate`
        },
        {
          id: `clt`,
          title: `Central Limit Theorem`,
          content: `**Central Limit Theorem** — what you need to know:

- **Core idea:** Model uncertainty with scipy.stats: PDFs, CDFs, sampling, and fitting.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Sum/mean of iid samples with finite variance approaches normal as n grows—explains widespread normal approximations. Does not fix heavy-tailed single-draw risk.

For proportions, use binomial or normal approx with care when np(1-p) small.

**Applying Probability Distributions:** Model uncertainty with scipy.stats: PDFs, CDFs, sampling, and fitting. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Central Limit Theorem", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Central Limit Theorem** directly affects how confidently you can build, debug, and ship data projects.
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
            `CLT applies to sample means not individual draws`,
            `Finite variance assumption matters`,
            `Rate of convergence depends on underlying distribution`,
            `Use exact tests when approximations fail`,
            `Central Limit Theorem is a foundational piece of Probability Distributions`,
            `Connect this section to the data track and intermediate expectations`
          ],
          example: `# Concept check: Central Limit Theorem
meta = {
    "topic": "stats-distributions",
    "section": "clt",
    "track": "data",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: stats-distributions
section: clt
track: data
level: intermediate`,
          pseudoCode: `CONCEPT: Central Limit Theorem

Study checklist:
  1. CLT applies to sample means not individual draws
  2. Finite variance assumption matters
  3. Rate of convergence depends on underlying distribution
  4. Use exact tests when approximations fail
  5. Central Limit Theorem is a foundational piece of Probability Distributions
  6. Connect this section to the data track and intermediate expectations

Topic: Probability Distributions
Track: data | Level: intermediate`
        },
        {
          id: `stats-distributions-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Probability Distributions** sits in the **data** track of the Data Science Master curriculum. Model uncertainty with scipy.stats: PDFs, CDFs, sampling, and fitting.

**Theoretical foundation:**

- Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling.
- Every aggregation encodes assumptions about granularity and time.

For **stats-distributions**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
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
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Probability Distributions ties to the data track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Probability Distributions
Track: data | Level: intermediate`
        },
        {
          id: `stats-distributions-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Probability Distributions**. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **stats-distributions**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
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
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with data ecosystem conventions

Topic: Probability Distributions
Track: data | Level: intermediate`
        },
        {
          id: `stats-distributions-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Probability Distributions** often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on **stats-distributions**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: Probability Distributions
Track: data | Level: intermediate`
        },
        {
          id: `stats-distributions-real-world`,
          title: `Real-World Applications`,
          content: `**Probability Distributions** shows up wherever **data** skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around **stats-distributions** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
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
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Probability Distributions to adjacent topics in the same track

Topic: Probability Distributions
Track: data | Level: intermediate`
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
      estimatedMinutes: 124,
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

**Applying Regression with statsmodels:** Ordinary least squares and logistic regression for inference-rich modeling. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "OLS Linear Regression", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **OLS Linear Regression** directly affects how confidently you can build, debug, and ship data projects.
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
            `Multicollinearity inflates coefficient variance`,
            `OLS Linear Regression is a foundational piece of Regression with statsmodels`,
            `Connect this section to the data track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: OLS Linear Regression

Study checklist:
  1. Inspect model.summary() for inference tables
  2. Add constant or use formula intercept implicitly
  3. Plot residuals vs fitted values
  4. Multicollinearity inflates coefficient variance
  5. OLS Linear Regression is a foundational piece of Regression with statsmodels
  6. Connect this section to the data track and intermediate expectations

Topic: Regression with statsmodels
Track: data | Level: intermediate`
        },
        {
          id: `logistic`,
          title: `Logistic Regression`,
          content: `Binary outcomes: **\`logit("y ~ x", data=df)\`** models log-odds linear in features. Coefficients exponentiate to odds ratios. Metrics: AUC, log-loss, calibration curves.

Class imbalance requires class weights or resampling—accuracy alone misleads.

**Applying Regression with statsmodels:** Ordinary least squares and logistic regression for inference-rich modeling. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Logistic Regression", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Logistic Regression** directly affects how confidently you can build, debug, and ship data projects.
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
          example: `import statsmodels.formula.api as smf
import pandas as pd
df = pd.DataFrame({"y": [0,0,1,1], "x": [0,1,2,3]})
res = smf.logit("y ~ x", data=df).fit(disp=0)
print(len(res.params))`,
          keyPoints: [
            `Logit coefficients are on log-odds scale`,
            `Perfect separation causes infinite coefficients`,
            `Regularized logistic via sklearn for prediction focus`,
            `Report confidence intervals on odds ratios`,
            `Logistic Regression is a foundational piece of Regression with statsmodels`,
            `Connect this section to the data track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Logistic Regression

Study checklist:
  1. Logit coefficients are on log-odds scale
  2. Perfect separation causes infinite coefficients
  3. Regularized logistic via sklearn for prediction focus
  4. Report confidence intervals on odds ratios
  5. Logistic Regression is a foundational piece of Regression with statsmodels
  6. Connect this section to the data track and intermediate expectations

Topic: Regression with statsmodels
Track: data | Level: intermediate`
        },
        {
          id: `diagnostics`,
          title: `Regression Diagnostics`,
          content: `**Regression Diagnostics** — what you need to know:

- **Core idea:** Ordinary least squares and logistic regression for inference-rich modeling.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Influential points: Cook's distance. Heteroscedasticity robust SE: \`cov_type="HC3"\`. VIF quantifies multicollinearity. Out-of-sample validation on holdout prevents overfitting narrative.

Transform targets (log) or use GLMs when residuals show systematic patterns.

**Applying Regression with statsmodels:** Ordinary least squares and logistic regression for inference-rich modeling. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Regression Diagnostics", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Regression Diagnostics** directly affects how confidently you can build, debug, and ship data projects.
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
            `Robust SE when variance not constant`,
            `Cross-validation for predictive performance`,
            `Partial regression plots explain individual features`,
            `Document preprocessing inside CV pipeline`,
            `Regression Diagnostics is a foundational piece of Regression with statsmodels`,
            `Connect this section to the data track and intermediate expectations`
          ],
          example: `# Concept check: Regression Diagnostics
meta = {
    "topic": "stats-regression",
    "section": "diagnostics",
    "track": "data",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: stats-regression
section: diagnostics
track: data
level: intermediate`,
          pseudoCode: `CONCEPT: Regression Diagnostics

Study checklist:
  1. Robust SE when variance not constant
  2. Cross-validation for predictive performance
  3. Partial regression plots explain individual features
  4. Document preprocessing inside CV pipeline
  5. Regression Diagnostics is a foundational piece of Regression with statsmodels
  6. Connect this section to the data track and intermediate expectations

Topic: Regression with statsmodels
Track: data | Level: intermediate`
        },
        {
          id: `inference-vs-pred`,
          title: `Inference vs Prediction`,
          content: `statsmodels excels at **interpretable coefficients** and statistical tests. sklearn excels at **prediction** with regularization and pipelines. Choose tool based on stakeholder questions.

Publishing requires reporting limitations, data collection, and missing data handling.

**Applying Regression with statsmodels:** Ordinary least squares and logistic regression for inference-rich modeling. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Inference vs Prediction", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Inference vs Prediction** directly affects how confidently you can build, debug, and ship data projects.
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
            `Coefficients answer "what if x increases by 1?"`,
            `Regularization biases coefficients but improves prediction`,
            `Causal claims need causal designs not regression alone`,
            `Reproducible notebooks pin library versions`,
            `Inference vs Prediction is a foundational piece of Regression with statsmodels`,
            `Connect this section to the data track and intermediate expectations`
          ],
          example: `# Concept check: Inference vs Prediction
meta = {
    "topic": "stats-regression",
    "section": "inference-vs-pred",
    "track": "data",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: stats-regression
section: inference-vs-pred
track: data
level: intermediate`,
          pseudoCode: `CONCEPT: Inference vs Prediction

Study checklist:
  1. Coefficients answer "what if x increases by 1?"
  2. Regularization biases coefficients but improves prediction
  3. Causal claims need causal designs not regression alone
  4. Reproducible notebooks pin library versions
  5. Inference vs Prediction is a foundational piece of Regression with statsmodels
  6. Connect this section to the data track and intermediate expectations

Topic: Regression with statsmodels
Track: data | Level: intermediate`
        },
        {
          id: `stats-regression-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Regression with statsmodels** sits in the **data** track of the Data Science Master curriculum. Ordinary least squares and logistic regression for inference-rich modeling.

**Theoretical foundation:**

- Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling.
- Every aggregation encodes assumptions about granularity and time.

For **stats-regression**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
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
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Regression with statsmodels ties to the data track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Regression with statsmodels
Track: data | Level: intermediate`
        },
        {
          id: `stats-regression-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Regression with statsmodels**. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **stats-regression**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
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
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with data ecosystem conventions

Topic: Regression with statsmodels
Track: data | Level: intermediate`
        },
        {
          id: `stats-regression-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Regression with statsmodels** often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on **stats-regression**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: Regression with statsmodels
Track: data | Level: intermediate`
        },
        {
          id: `stats-regression-real-world`,
          title: `Real-World Applications`,
          content: `**Regression with statsmodels** shows up wherever **data** skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around **stats-regression** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
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
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Regression with statsmodels to adjacent topics in the same track

Topic: Regression with statsmodels
Track: data | Level: intermediate`
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
      estimatedMinutes: 124,
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
            `Conjugate updates are analytically tractable`,
            `Bayes' Theorem is a foundational piece of Bayesian Inference Intro`,
            `Connect this section to the data track and advanced expectations`
          ],
          pseudoCode: `CONCEPT: Bayes' Theorem

Study checklist:
  1. Prior should be justified not arbitrary
  2. More data dominates prior (likelihood swamps prior)
  3. Posterior is a distribution not a point
  4. Conjugate updates are analytically tractable
  5. Bayes' Theorem is a foundational piece of Bayesian Inference Intro
  6. Connect this section to the data track and advanced expectations

Topic: Bayesian Inference Intro
Track: data | Level: advanced`
        },
        {
          id: `priors`,
          title: `Choosing Priors`,
          content: `**Informative priors** from literature; **weakly informative** regularize without dominating; **sensitivity analysis** varies priors to test robustness.

Avoid improper priors unless you understand measure theory implications. Document prior choices in reports.

**Applying Bayesian Inference Intro:** Update beliefs with data using Bayes' theorem, priors, and posterior sampling overview. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Choosing Priors", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Choosing Priors** directly affects how confidently you can build, debug, and ship data projects.
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
            `Sensitivity analysis builds stakeholder trust`,
            `Hierarchical priors pool information across groups`,
            `Prior predictive checks simulate plausible data`,
            `Regularization in ML relates to Gaussian priors`,
            `Choosing Priors is a foundational piece of Bayesian Inference Intro`,
            `Connect this section to the data track and advanced expectations`
          ],
          example: `# Concept check: Choosing Priors
meta = {
    "topic": "stats-bayes",
    "section": "priors",
    "track": "data",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: stats-bayes
section: priors
track: data
level: advanced`,
          pseudoCode: `CONCEPT: Choosing Priors

Study checklist:
  1. Sensitivity analysis builds stakeholder trust
  2. Hierarchical priors pool information across groups
  3. Prior predictive checks simulate plausible data
  4. Regularization in ML relates to Gaussian priors
  5. Choosing Priors is a foundational piece of Bayesian Inference Intro
  6. Connect this section to the data track and advanced expectations

Topic: Bayesian Inference Intro
Track: data | Level: advanced`
        },
        {
          id: `mcmc`,
          title: `Sampling the Posterior`,
          content: `Markov Chain Monte Carlo draws approximate posterior samples. Diagnostics: **trace plots**, **R-hat** ≈ 1, effective sample size. Stan/PyMC automate gradients with HMC.

Computation cost limits model complexity—start simple, add hierarchy incrementally.

**Applying Bayesian Inference Intro:** Update beliefs with data using Bayes' theorem, priors, and posterior sampling overview. Sound data reasoning prevents costly modeling mistakes and accelerates exploratory analysis. When studying "Sampling the Posterior", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:**

- Data quality and reproducible transforms determine whether models learn signal or noise.
- Mastering **Sampling the Posterior** directly affects how confidently you can build, debug, and ship data projects.
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
            `R-hat > 1.01 suggests poor mixing`,
            `Longer chains or reparameterization help`,
            `MCMC uncertainty includes Monte Carlo error`,
            `Variational Bayes faster but biased`,
            `Sampling the Posterior is a foundational piece of Bayesian Inference Intro`,
            `Connect this section to the data track and advanced expectations`
          ],
          example: `# Concept check: Sampling the Posterior
meta = {
    "topic": "stats-bayes",
    "section": "mcmc",
    "track": "data",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: stats-bayes
section: mcmc
track: data
level: advanced`,
          pseudoCode: `CONCEPT: Sampling the Posterior

Study checklist:
  1. R-hat > 1.01 suggests poor mixing
  2. Longer chains or reparameterization help
  3. MCMC uncertainty includes Monte Carlo error
  4. Variational Bayes faster but biased
  5. Sampling the Posterior is a foundational piece of Bayesian Inference Intro
  6. Connect this section to the data track and advanced expectations

Topic: Bayesian Inference Intro
Track: data | Level: advanced`
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
            `Bayes complements not replaces frequentist tools`,
            `Bayesian ML Connections is a foundational piece of Bayesian Inference Intro`,
            `Connect this section to the data track and advanced expectations`
          ],
          example: `# Concept check: Bayesian ML Connections
meta = {
    "topic": "stats-bayes",
    "section": "bayes-ml",
    "track": "data",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: stats-bayes
section: bayes-ml
track: data
level: advanced`,
          pseudoCode: `CONCEPT: Bayesian ML Connections

Study checklist:
  1. Uncertainty quantification aids risk-sensitive decisions
  2. Ensembles approximate Bayesian model averaging loosely
  3. Conformal prediction offers distribution-free intervals
  4. Bayes complements not replaces frequentist tools
  5. Bayesian ML Connections is a foundational piece of Bayesian Inference Intro
  6. Connect this section to the data track and advanced expectations

Topic: Bayesian Inference Intro
Track: data | Level: advanced`
        },
        {
          id: `stats-bayes-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Bayesian Inference Intro** sits in the **data** track of the Data Science Master curriculum. Update beliefs with data using Bayes' theorem, priors, and posterior sampling overview.

**Theoretical foundation:**

- Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling.
- Every aggregation encodes assumptions about granularity and time.

For **stats-bayes**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the advanced level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
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
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Bayesian Inference Intro ties to the data track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Bayesian Inference Intro
Track: data | Level: advanced`
        },
        {
          id: `stats-bayes-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Bayesian Inference Intro**. Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **stats-bayes**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
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
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with data ecosystem conventions

Topic: Bayesian Inference Intro
Track: data | Level: advanced`
        },
        {
          id: `stats-bayes-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Bayesian Inference Intro** often hit predictable walls. Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.

When stuck on **stats-bayes**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: Bayesian Inference Intro
Track: data | Level: advanced`
        },
        {
          id: `stats-bayes-real-world`,
          title: `Real-World Applications`,
          content: `**Bayesian Inference Intro** shows up wherever **data** skills meet business constraints. Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.

Teams shipping features around **stats-bayes** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
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
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Bayesian Inference Intro to adjacent topics in the same track

Topic: Bayesian Inference Intro
Track: data | Level: advanced`
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
      estimatedMinutes: 124,
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
