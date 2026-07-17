import type { Topic } from '../../types';

export const module11Topics: Topic[] = [
{
      id: `ml-regression`,
      title: `Regression Techniques`,
      description: `Polynomial, ridge, lasso, and elastic net regression.`,
      level: `intermediate`,
      track: `ml`,
      sections: [
        {
          id: `poly`,
          title: `Polynomial Regression`,
          content: `**Polynomial Regression** — what you need to know:

- **Core idea:** Polynomial, ridge, lasso, and elastic net regression.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Add polynomial features: x, x², x³. PolynomialFeatures(degree=2). Captures non-linear relationships with linear model.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Polynomial Regression** directly affects how confidently you can build, debug, and ship ml projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Establish baselines, stratify splits, and report confidence intervals — not single scores.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Overfitting small datasets, tuning on test data, and ignoring class imbalance.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          example: `from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
from sklearn.pipeline import Pipeline
import numpy as np

X = np.array([[1], [2], [3], [4]])
y = np.array([1, 4, 9, 16])  # y = x^2
pipe = Pipeline([("poly", PolynomialFeatures(2)), ("lr", LinearRegression())]).fit(X, y)
print(round(pipe.predict([[5]])[0], 1))`,
          output: `25.0`,
          keyPoints: [
            `PolynomialFeatures generates interaction terms`,
            `High degree causes overfitting`,
            `Always use regularization with high degree`,
            `Works with multiple features — explosion of terms`,
            `Polynomial Regression is a foundational piece of Regression Techniques`,
            `Connect this section to the ml track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Polynomial Regression

Study checklist:
  1. PolynomialFeatures generates interaction terms
  2. High degree causes overfitting
  3. Always use regularization with high degree
  4. Works with multiple features — explosion of terms
  5. Polynomial Regression is a foundational piece of Regression Techniques
  6. Connect this section to the ml track and intermediate expectations

Topic: Regression Techniques
Track: ml | Level: intermediate`
        },
        {
          id: `ridge-lasso`,
          title: `Ridge & Lasso`,
          content: `**Ridge & Lasso** — what you need to know:

- **Core idea:** Polynomial, ridge, lasso, and elastic net regression.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Ridge (L2): shrinks coefficients. Lasso (L1): drives some to zero — feature selection. ElasticNet combines both.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Ridge & Lasso** directly affects how confidently you can build, debug, and ship ml projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Establish baselines, stratify splits, and report confidence intervals — not single scores.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Overfitting small datasets, tuning on test data, and ignoring class imbalance.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          example: `from sklearn.linear_model import Ridge, Lasso
import numpy as np

X = np.random.default_rng(42).normal(size=(100, 5))
y = X @ np.array([1, 0, 0, 0, 0]) + np.random.default_rng(42).normal(scale=0.1, size=100)
ridge = Ridge(alpha=1.0).fit(X, y)
lasso = Lasso(alpha=0.1).fit(X, y)
print(np.sum(lasso.coef_ == 0), "features zeroed by lasso")`,
          keyPoints: [
            `alpha controls regularization strength`,
            `Ridge keeps all features with small weights`,
            `Lasso performs automatic feature selection`,
            `ElasticNet best when many correlated features`,
            `Ridge & Lasso is a foundational piece of Regression Techniques`,
            `Connect this section to the ml track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Ridge & Lasso

Study checklist:
  1. alpha controls regularization strength
  2. Ridge keeps all features with small weights
  3. Lasso performs automatic feature selection
  4. ElasticNet best when many correlated features
  5. Ridge & Lasso is a foundational piece of Regression Techniques
  6. Connect this section to the ml track and intermediate expectations

Topic: Regression Techniques
Track: ml | Level: intermediate`
        },
        {
          id: `assumptions`,
          title: `Linear Regression Assumptions`,
          content: `**Linear Regression Assumptions** — what you need to know:

- **Core idea:** Polynomial, ridge, lasso, and elastic net regression.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Linearity, independence, homoscedasticity, normality of residuals. Violations affect inference not always prediction.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Linear Regression Assumptions** directly affects how confidently you can build, debug, and ship ml projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Professional habits:**

- Establish baselines, stratify splits, and report confidence intervals — not single scores.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Overfitting small datasets, tuning on test data, and ignoring class imbalance.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          keyPoints: [
            `Check residual plots for patterns`,
            `Heteroscedasticity: use weighted least squares`,
            `Multicollinearity inflates coefficient variance`,
            `Outliers disproportionately affect OLS`,
            `Linear Regression Assumptions is a foundational piece of Regression Techniques`,
            `Connect this section to the ml track and intermediate expectations`
          ],
          example: `# Concept check: Linear Regression Assumptions
meta = {
    "topic": "ml-regression",
    "section": "assumptions",
    "track": "ml",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ml-regression
section: assumptions
track: ml
level: intermediate`,
          pseudoCode: `CONCEPT: Linear Regression Assumptions

Study checklist:
  1. Check residual plots for patterns
  2. Heteroscedasticity: use weighted least squares
  3. Multicollinearity inflates coefficient variance
  4. Outliers disproportionately affect OLS
  5. Linear Regression Assumptions is a foundational piece of Regression Techniques
  6. Connect this section to the ml track and intermediate expectations

Topic: Regression Techniques
Track: ml | Level: intermediate`
        },
        {
          id: `robust`,
          title: `Robust Regression`,
          content: `**Robust Regression** — what you need to know:

- **Core idea:** Polynomial, ridge, lasso, and elastic net regression.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

HuberRegressor, RANSAC for outlier resistance. Quantile regression for conditional quantiles.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Robust Regression** directly affects how confidently you can build, debug, and ship ml projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Professional habits:**

- Establish baselines, stratify splits, and report confidence intervals — not single scores.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Overfitting small datasets, tuning on test data, and ignoring class imbalance.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          keyPoints: [
            `Huber loss transitions from L2 to L1 for outliers`,
            `RANSAC fits to inlier consensus`,
            `Quantile regression for uncertainty bounds`,
            `Use when data has significant outliers`,
            `Robust Regression is a foundational piece of Regression Techniques`,
            `Connect this section to the ml track and intermediate expectations`
          ],
          example: `# Concept check: Robust Regression
meta = {
    "topic": "ml-regression",
    "section": "robust",
    "track": "ml",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ml-regression
section: robust
track: ml
level: intermediate`,
          pseudoCode: `CONCEPT: Robust Regression

Study checklist:
  1. Huber loss transitions from L2 to L1 for outliers
  2. RANSAC fits to inlier consensus
  3. Quantile regression for uncertainty bounds
  4. Use when data has significant outliers
  5. Robust Regression is a foundational piece of Regression Techniques
  6. Connect this section to the ml track and intermediate expectations

Topic: Regression Techniques
Track: ml | Level: intermediate`
        },
        {
          id: `ml-regression-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Regression Techniques** sits in the **ml** track of the Data Science Master curriculum. Polynomial, ridge, lasso, and elastic net regression.

**Theoretical foundation:**

- Learning algorithms minimize expected risk on unseen data.
- Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For **ml-regression**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
          example: `# Concept check for Regression Techniques
meta = {"topic_id": "ml-regression", "track": "ml", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ml-regression ml intermediate`,
          keyPoints: [
            `Core theory of Regression Techniques ties to the ml track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Regression Techniques ties to the ml track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Regression Techniques
Track: ml | Level: intermediate`
        },
        {
          id: `ml-regression-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Regression Techniques**. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **ml-regression**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for ml-regression
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ml-regression", "Regression Techniques")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ml-regression Regression`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with ml ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with ml ecosystem conventions

Topic: Regression Techniques
Track: ml | Level: intermediate`
        },
        {
          id: `ml-regression-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Regression Techniques** often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on **ml-regression**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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

debug_step("ml-regression", "Regression Techniques")
debug_step("section_count", 4)`,
          output: `[ml-regression] 'Regression Techniques' (str)
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

Topic: Regression Techniques
Track: ml | Level: intermediate`
        },
        {
          id: `ml-regression-real-world`,
          title: `Real-World Applications`,
          content: `**Regression Techniques** shows up wherever **ml** skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around **ml-regression** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Regression Techniques
skills = ["ml", "intermediate", "ml-regression"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ml, intermediate, ml-regression`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Regression Techniques to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Regression Techniques to adjacent topics in the same track

Topic: Regression Techniques
Track: ml | Level: intermediate`
        }
      ],
      exercises: [
        {
          id: `ex-reg-1`,
          question: `Use PolynomialFeatures degree=2 on [[2]] and show feature count.`,
          solution: `from sklearn.preprocessing import PolynomialFeatures
pf = PolynomialFeatures(2)
print(pf.fit_transform([[2]]).shape[1])`,
          difficulty: `easy`
        },
        {
          id: `ex-reg-2`,
          question: `Fit Ridge alpha=1 on simple X=[[1],[2]], y=[1,2].`,
          solution: `from sklearn.linear_model import Ridge
print(Ridge(1.0).fit([[1],[2]], [1,2]).predict([[3]])[0])`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 124,
      module: `module-11`,
      references: [
        {
          id: `sklearn-linear-models`,
          title: `scikit-learn Linear Models`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/modules/linear_model.html`,
          description: `Linear, logistic, ridge, lasso, and elastic net regression implementations.`
        },
        {
          id: `esl-hastie`,
          title: `The Elements of Statistical Learning`,
          source: `Stanford`,
          type: `book`,
          url: `https://hastie.su.domains/ElemStatLearn/`,
          description: `Free authoritative text on statistical learning methods and theory.`
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
          id: `berkeley-cs189`,
          title: `Berkeley CS189/289A — Introduction to Machine Learning`,
          source: `Berkeley`,
          type: `course`,
          url: `https://people.eecs.berkeley.edu/~jrs/189/`,
          description: `Comprehensive ML course with strong mathematical foundations.`
        }
      ]
    },
{
      id: `ml-classification`,
      title: `Classification Algorithms`,
      description: `KNN, Naive Bayes, and multi-class strategies.`,
      level: `intermediate`,
      track: `ml`,
      sections: [
        {
          id: `knn`,
          title: `K-Nearest Neighbors`,
          content: `**K-Nearest Neighbors** — what you need to know:

- **Core idea:** KNN, Naive Bayes, and multi-class strategies.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Classify by majority vote of k nearest training points. Lazy learner — no training phase. Scale features first!

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **K-Nearest Neighbors** directly affects how confidently you can build, debug, and ship ml projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Establish baselines, stratify splits, and report confidence intervals — not single scores.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Overfitting small datasets, tuning on test data, and ignoring class imbalance.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          example: `from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)
pipe = Pipeline([("s", StandardScaler()), ("knn", KNeighborsClassifier(n_neighbors=5))]).fit(X, y)
print(pipe.score(X, y))`,
          output: `0.9666666666666667`,
          keyPoints: [
            `k too small: overfitting, too large: underfitting`,
            `Always scale features for KNN`,
            `Slow prediction for large datasets`,
            `Use ball_tree or kd_tree for efficiency`,
            `K-Nearest Neighbors is a foundational piece of Classification Algorithms`,
            `Connect this section to the ml track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: K-Nearest Neighbors

Study checklist:
  1. k too small: overfitting, too large: underfitting
  2. Always scale features for KNN
  3. Slow prediction for large datasets
  4. Use ball_tree or kd_tree for efficiency
  5. K-Nearest Neighbors is a foundational piece of Classification Algorithms
  6. Connect this section to the ml track and intermediate expectations

Topic: Classification Algorithms
Track: ml | Level: intermediate`
        },
        {
          id: `naive-bayes`,
          title: `Naive Bayes`,
          content: `**Naive Bayes** — what you need to know:

- **Core idea:** KNN, Naive Bayes, and multi-class strategies.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

P(y|x) ∝ P(y)ΠP(xᵢ|y). Assumes feature independence. GaussianNB, MultinomialNB, BernoulliNB variants.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Naive Bayes** directly affects how confidently you can build, debug, and ship ml projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Establish baselines, stratify splits, and report confidence intervals — not single scores.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Overfitting small datasets, tuning on test data, and ignoring class imbalance.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          example: `from sklearn.naive_bayes import GaussianNB
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)
clf = GaussianNB().fit(X, y)
print(clf.predict_proba(X[:3]).round(2))`,
          keyPoints: [
            `Fast training and prediction`,
            `Works well with small data`,
            `Independence assumption rarely true but works`,
            `MultinomialNB for text classification`,
            `Naive Bayes is a foundational piece of Classification Algorithms`,
            `Connect this section to the ml track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Naive Bayes

Study checklist:
  1. Fast training and prediction
  2. Works well with small data
  3. Independence assumption rarely true but works
  4. MultinomialNB for text classification
  5. Naive Bayes is a foundational piece of Classification Algorithms
  6. Connect this section to the ml track and intermediate expectations

Topic: Classification Algorithms
Track: ml | Level: intermediate`
        },
        {
          id: `multiclass`,
          title: `Multi-class Strategies`,
          content: `**Multi-class Strategies** — what you need to know:

- **Core idea:** KNN, Naive Bayes, and multi-class strategies.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

One-vs-Rest (OvR): k binary classifiers. One-vs-One (OvO): k(k-1)/2 classifiers. Softmax for neural networks.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Multi-class Strategies** directly affects how confidently you can build, debug, and ship ml projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Professional habits:**

- Establish baselines, stratify splits, and report confidence intervals — not single scores.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Overfitting small datasets, tuning on test data, and ignoring class imbalance.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          keyPoints: [
            `OvR default in sklearn for SVM, LR`,
            `OvO used by SVC with probability`,
            `Softmax ensures probabilities sum to 1`,
            `Multi-class metrics: macro vs weighted avg`,
            `Multi-class Strategies is a foundational piece of Classification Algorithms`,
            `Connect this section to the ml track and intermediate expectations`
          ],
          example: `# Concept check: Multi-class Strategies
meta = {
    "topic": "ml-classification",
    "section": "multiclass",
    "track": "ml",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ml-classification
section: multiclass
track: ml
level: intermediate`,
          pseudoCode: `CONCEPT: Multi-class Strategies

Study checklist:
  1. OvR default in sklearn for SVM, LR
  2. OvO used by SVC with probability
  3. Softmax ensures probabilities sum to 1
  4. Multi-class metrics: macro vs weighted avg
  5. Multi-class Strategies is a foundational piece of Classification Algorithms
  6. Connect this section to the ml track and intermediate expectations

Topic: Classification Algorithms
Track: ml | Level: intermediate`
        },
        {
          id: `imbalanced`,
          title: `Imbalanced Classification`,
          content: `**Imbalanced Classification** — what you need to know:

- **Core idea:** KNN, Naive Bayes, and multi-class strategies.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

SMOTE oversampling, class_weight parameter, threshold tuning. Focus on recall for minority class when costly to miss.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Imbalanced Classification** directly affects how confidently you can build, debug, and ship ml projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Professional habits:**

- Establish baselines, stratify splits, and report confidence intervals — not single scores.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Overfitting small datasets, tuning on test data, and ignoring class imbalance.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          keyPoints: [
            `class_weight="balanced" adjusts loss`,
            `SMOTE generates synthetic minority samples`,
            `Adjust decision threshold for precision/recall tradeoff`,
            `Use PR-AUC not accuracy for imbalanced data`,
            `Imbalanced Classification is a foundational piece of Classification Algorithms`,
            `Connect this section to the ml track and intermediate expectations`
          ],
          example: `# Concept check: Imbalanced Classification
meta = {
    "topic": "ml-classification",
    "section": "imbalanced",
    "track": "ml",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ml-classification
section: imbalanced
track: ml
level: intermediate`,
          pseudoCode: `CONCEPT: Imbalanced Classification

Study checklist:
  1. class_weight="balanced" adjusts loss
  2. SMOTE generates synthetic minority samples
  3. Adjust decision threshold for precision/recall tradeoff
  4. Use PR-AUC not accuracy for imbalanced data
  5. Imbalanced Classification is a foundational piece of Classification Algorithms
  6. Connect this section to the ml track and intermediate expectations

Topic: Classification Algorithms
Track: ml | Level: intermediate`
        },
        {
          id: `ml-classification-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Classification Algorithms** sits in the **ml** track of the Data Science Master curriculum. KNN, Naive Bayes, and multi-class strategies.

**Theoretical foundation:**

- Learning algorithms minimize expected risk on unseen data.
- Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For **ml-classification**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
          example: `# Concept check for Classification Algorithms
meta = {"topic_id": "ml-classification", "track": "ml", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ml-classification ml intermediate`,
          keyPoints: [
            `Core theory of Classification Algorithms ties to the ml track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Classification Algorithms ties to the ml track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Classification Algorithms
Track: ml | Level: intermediate`
        },
        {
          id: `ml-classification-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Classification Algorithms**. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **ml-classification**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for ml-classification
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ml-classification", "Classification Algorithms")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ml-classification Classification`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with ml ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with ml ecosystem conventions

Topic: Classification Algorithms
Track: ml | Level: intermediate`
        },
        {
          id: `ml-classification-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Classification Algorithms** often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on **ml-classification**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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

debug_step("ml-classification", "Classification Algorithms")
debug_step("section_count", 4)`,
          output: `[ml-classification] 'Classification Algorithms' (str)
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

Topic: Classification Algorithms
Track: ml | Level: intermediate`
        },
        {
          id: `ml-classification-real-world`,
          title: `Real-World Applications`,
          content: `**Classification Algorithms** shows up wherever **ml** skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around **ml-classification** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Classification Algorithms
skills = ["ml", "intermediate", "ml-classification"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ml, intermediate, ml-classification`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Classification Algorithms to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Classification Algorithms to adjacent topics in the same track

Topic: Classification Algorithms
Track: ml | Level: intermediate`
        }
      ],
      exercises: [
        {
          id: `ex-clf-1`,
          question: `Train KNN with k=3 on iris and predict first sample.`,
          solution: `from sklearn.neighbors import KNeighborsClassifier
from sklearn.datasets import load_iris
X, y = load_iris(return_X_y=True)
knn = KNeighborsClassifier(3).fit(X, y)
print(knn.predict(X[:1])[0])`,
          difficulty: `easy`
        },
        {
          id: `ex-clf-2`,
          question: `Train GaussianNB and get class probabilities for one sample.`,
          solution: `from sklearn.naive_bayes import GaussianNB
from sklearn.datasets import load_iris
X, y = load_iris(return_X_y=True)
print(GaussianNB().fit(X, y).predict_proba(X[:1])[0].sum())`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 124,
      module: `module-11`,
      references: [
        {
          id: `sklearn-linear-models`,
          title: `scikit-learn Linear Models`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/modules/linear_model.html`,
          description: `Linear, logistic, ridge, lasso, and elastic net regression implementations.`
        },
        {
          id: `sklearn-svm`,
          title: `scikit-learn Support Vector Machines`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/modules/svm.html`,
          description: `SVC, SVR, and kernel methods for maximum-margin classification.`
        },
        {
          id: `esl-hastie`,
          title: `The Elements of Statistical Learning`,
          source: `Stanford`,
          type: `book`,
          url: `https://hastie.su.domains/ElemStatLearn/`,
          description: `Free authoritative text on statistical learning methods and theory.`
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
      id: `ml-svm`,
      title: `Support Vector Machines`,
      description: `Maximum margin classifiers with kernel trick.`,
      level: `intermediate`,
      track: `ml`,
      sections: [
        {
          id: `svm-linear`,
          title: `Linear SVM`,
          content: `**Linear SVM** — what you need to know:

- **Core idea:** Maximum margin classifiers with kernel trick.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Finds hyperplane maximizing margin between classes. Support vectors are critical training points. C parameter trades margin vs misclassification.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Linear SVM** directly affects how confidently you can build, debug, and ship ml projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Establish baselines, stratify splits, and report confidence intervals — not single scores.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Overfitting small datasets, tuning on test data, and ignoring class imbalance.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          example: `from sklearn.svm import SVC
import numpy as np

X = np.array([[0, 0], [1, 1], [0, 1], [1, 0]])
y = np.array([0, 1, 0, 1])
clf = SVC(kernel="linear", C=1.0).fit(X, y)
print(clf.n_support_)`,
          output: `[2 2]`,
          keyPoints: [
            `Maximum margin principle`,
            `C large: narrow margin, fewer errors`,
            `C small: wide margin, more errors allowed`,
            `Only support vectors affect decision boundary`,
            `Linear SVM is a foundational piece of Support Vector Machines`,
            `Connect this section to the ml track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Linear SVM

Study checklist:
  1. Maximum margin principle
  2. C large: narrow margin, fewer errors
  3. C small: wide margin, more errors allowed
  4. Only support vectors affect decision boundary
  5. Linear SVM is a foundational piece of Support Vector Machines
  6. Connect this section to the ml track and intermediate expectations

Topic: Support Vector Machines
Track: ml | Level: intermediate`
        },
        {
          id: `kernel`,
          title: `Kernel Trick`,
          content: `**Kernel Trick** — what you need to know:

- **Core idea:** Maximum margin classifiers with kernel trick.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Map to higher dimensions without explicit computation. RBF (Gaussian) most popular: K(x,x') = exp(-γ||x-x'||²).

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Kernel Trick** directly affects how confidently you can build, debug, and ship ml projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Establish baselines, stratify splits, and report confidence intervals — not single scores.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Overfitting small datasets, tuning on test data, and ignoring class imbalance.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          example: `from sklearn.svm import SVC
from sklearn.datasets import make_moons

X, y = make_moons(n_samples=100, noise=0.2, random_state=42)
clf = SVC(kernel="rbf", gamma="scale").fit(X, y)
print(clf.score(X, y))`,
          keyPoints: [
            `Kernel trick avoids explicit high-D mapping`,
            `RBF kernel handles non-linear boundaries`,
            `gamma controls influence radius of each point`,
            `Linear kernel for high-dimensional sparse text data`,
            `Kernel Trick is a foundational piece of Support Vector Machines`,
            `Connect this section to the ml track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Kernel Trick

Study checklist:
  1. Kernel trick avoids explicit high-D mapping
  2. RBF kernel handles non-linear boundaries
  3. gamma controls influence radius of each point
  4. Linear kernel for high-dimensional sparse text data
  5. Kernel Trick is a foundational piece of Support Vector Machines
  6. Connect this section to the ml track and intermediate expectations

Topic: Support Vector Machines
Track: ml | Level: intermediate`
        },
        {
          id: `svc-params`,
          title: `SVM Hyperparameters`,
          content: `**SVM Hyperparameters** — what you need to know:

- **Core idea:** Maximum margin classifiers with kernel trick.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

C, kernel, gamma, degree. GridSearchCV essential. probability=True enables predict_proba (slower).

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **SVM Hyperparameters** directly affects how confidently you can build, debug, and ship ml projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Professional habits:**

- Establish baselines, stratify splits, and report confidence intervals — not single scores.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Overfitting small datasets, tuning on test data, and ignoring class imbalance.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          keyPoints: [
            `Scale features before SVM — critical`,
            `gamma too high: overfitting to support vectors`,
            `LinearSVC faster for linear case on large data`,
            `NuSVM alternative parameterization`,
            `SVM Hyperparameters is a foundational piece of Support Vector Machines`,
            `Connect this section to the ml track and intermediate expectations`
          ],
          example: `# Concept check: SVM Hyperparameters
meta = {
    "topic": "ml-svm",
    "section": "svc-params",
    "track": "ml",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ml-svm
section: svc-params
track: ml
level: intermediate`,
          pseudoCode: `CONCEPT: SVM Hyperparameters

Study checklist:
  1. Scale features before SVM — critical
  2. gamma too high: overfitting to support vectors
  3. LinearSVC faster for linear case on large data
  4. NuSVM alternative parameterization
  5. SVM Hyperparameters is a foundational piece of Support Vector Machines
  6. Connect this section to the ml track and intermediate expectations

Topic: Support Vector Machines
Track: ml | Level: intermediate`
        },
        {
          id: `svr`,
          title: `Support Vector Regression`,
          content: `**Support Vector Regression** — what you need to know:

- **Core idea:** Maximum margin classifiers with kernel trick.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

SVR for regression. Epsilon-insensitive loss ignores errors within ε tube. Kernel trick applies to regression too.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Support Vector Regression** directly affects how confidently you can build, debug, and ship ml projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Professional habits:**

- Establish baselines, stratify splits, and report confidence intervals — not single scores.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Overfitting small datasets, tuning on test data, and ignoring class imbalance.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          keyPoints: [
            `SVR finds tube containing most points`,
            `epsilon controls tube width`,
            `Less common than RF/XGBoost for tabular regression`,
            `Effective in high-dimensional spaces`,
            `Support Vector Regression is a foundational piece of Support Vector Machines`,
            `Connect this section to the ml track and intermediate expectations`
          ],
          example: `# Concept check: Support Vector Regression
meta = {
    "topic": "ml-svm",
    "section": "svr",
    "track": "ml",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ml-svm
section: svr
track: ml
level: intermediate`,
          pseudoCode: `CONCEPT: Support Vector Regression

Study checklist:
  1. SVR finds tube containing most points
  2. epsilon controls tube width
  3. Less common than RF/XGBoost for tabular regression
  4. Effective in high-dimensional spaces
  5. Support Vector Regression is a foundational piece of Support Vector Machines
  6. Connect this section to the ml track and intermediate expectations

Topic: Support Vector Machines
Track: ml | Level: intermediate`
        },
        {
          id: `ml-svm-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Support Vector Machines** sits in the **ml** track of the Data Science Master curriculum. Maximum margin classifiers with kernel trick.

**Theoretical foundation:**

- Learning algorithms minimize expected risk on unseen data.
- Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For **ml-svm**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
          example: `# Concept check for Support Vector Machines
meta = {"topic_id": "ml-svm", "track": "ml", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ml-svm ml intermediate`,
          keyPoints: [
            `Core theory of Support Vector Machines ties to the ml track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Support Vector Machines ties to the ml track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Support Vector Machines
Track: ml | Level: intermediate`
        },
        {
          id: `ml-svm-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Support Vector Machines**. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **ml-svm**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for ml-svm
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ml-svm", "Support Vector Machines")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ml-svm Support`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with ml ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with ml ecosystem conventions

Topic: Support Vector Machines
Track: ml | Level: intermediate`
        },
        {
          id: `ml-svm-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Support Vector Machines** often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on **ml-svm**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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

debug_step("ml-svm", "Support Vector Machines")
debug_step("section_count", 4)`,
          output: `[ml-svm] 'Support Vector Machines' (str)
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

Topic: Support Vector Machines
Track: ml | Level: intermediate`
        },
        {
          id: `ml-svm-real-world`,
          title: `Real-World Applications`,
          content: `**Support Vector Machines** shows up wherever **ml** skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around **ml-svm** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Support Vector Machines
skills = ["ml", "intermediate", "ml-svm"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ml, intermediate, ml-svm`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Support Vector Machines to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Support Vector Machines to adjacent topics in the same track

Topic: Support Vector Machines
Track: ml | Level: intermediate`
        }
      ],
      exercises: [
        {
          id: `ex-svm-1`,
          question: `Train SVC with RBF kernel on make_moons and report score.`,
          solution: `from sklearn.svm import SVC
from sklearn.datasets import make_moons
X, y = make_moons(50, random_state=42)
print(round(SVC(kernel="rbf").fit(X, y).score(X, y), 2))`,
          difficulty: `medium`
        },
        {
          id: `ex-svm-2`,
          question: `Count support vectors for linear SVC on iris.`,
          solution: `from sklearn.svm import SVC
from sklearn.datasets import load_iris
X, y = load_iris(return_X_y=True)
clf = SVC(kernel="linear").fit(X, y)
print(clf.support_vectors_.shape[0])`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 124,
      module: `module-11`,
      references: [
        {
          id: `sklearn-svm`,
          title: `scikit-learn Support Vector Machines`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/modules/svm.html`,
          description: `SVC, SVR, and kernel methods for maximum-margin classification.`
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
          id: `esl-hastie`,
          title: `The Elements of Statistical Learning`,
          source: `Stanford`,
          type: `book`,
          url: `https://hastie.su.domains/ElemStatLearn/`,
          description: `Free authoritative text on statistical learning methods and theory.`
        },
        {
          id: `berkeley-cs189`,
          title: `Berkeley CS189/289A — Introduction to Machine Learning`,
          source: `Berkeley`,
          type: `course`,
          url: `https://people.eecs.berkeley.edu/~jrs/189/`,
          description: `Comprehensive ML course with strong mathematical foundations.`
        }
      ]
    },
{
      id: `ml-boosting`,
      title: `Gradient Boosting (XGBoost/LightGBM)`,
      description: `State-of-the-art ensemble methods for tabular data.`,
      level: `intermediate`,
      track: `ml`,
      sections: [
        {
          id: `gbm`,
          title: `Gradient Boosting Concept`,
          content: `**Gradient Boosting Concept** — what you need to know:

- **Core idea:** State-of-the-art ensemble methods for tabular data.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Sequentially add trees correcting previous errors. Each tree fits negative gradient of loss. Learning_rate shrinks each contribution.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Gradient Boosting Concept** directly affects how confidently you can build, debug, and ship ml projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Professional habits:**

- Establish baselines, stratify splits, and report confidence intervals — not single scores.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Overfitting small datasets, tuning on test data, and ignoring class imbalance.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          pseudoCode: `model = initial prediction
FOR t in 1..T:
    compute residuals/gradients
    fit tree to residuals
    model += learning_rate * tree`,
          keyPoints: [
            `Boosting reduces bias unlike bagging (RF)`,
            `Learning rate and n_estimators trade off`,
            `Shallow trees (max_depth 3-8) work best`,
            `Most important tabular ML algorithm family`,
            `Gradient Boosting Concept is a foundational piece of Gradient Boosting (XGBoost/LightGBM)`,
            `Connect this section to the ml track and intermediate expectations`
          ],
          example: `# Concept check: Gradient Boosting Concept
meta = {
    "topic": "ml-boosting",
    "section": "gbm",
    "track": "ml",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ml-boosting
section: gbm
track: ml
level: intermediate`
        },
        {
          id: `xgboost`,
          title: `XGBoost`,
          content: `**XGBoost** — what you need to know:

- **Core idea:** State-of-the-art ensemble methods for tabular data.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Optimized gradient boosting with regularization, parallel tree construction, handling missing values. xgboost.XGBClassifier().

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **XGBoost** directly affects how confidently you can build, debug, and ship ml projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Establish baselines, stratify splits, and report confidence intervals — not single scores.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Overfitting small datasets, tuning on test data, and ignoring class imbalance.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          example: `from xgboost import XGBClassifier
from sklearn.datasets import load_iris
from sklearn.model_selection import cross_val_score

X, y = load_iris(return_X_y=True)
clf = XGBClassifier(n_estimators=100, eval_metric="mlogloss", random_state=42)
print(round(cross_val_score(clf, X, y, cv=5).mean(), 3))`,
          output: `0.967`,
          keyPoints: [
            `L1/L2 regularization on leaf weights`,
            `Handles missing values natively`,
            `early_stopping_rounds prevents overfitting`,
            `GPU acceleration available`,
            `XGBoost is a foundational piece of Gradient Boosting (XGBoost/LightGBM)`,
            `Connect this section to the ml track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: XGBoost

Study checklist:
  1. L1/L2 regularization on leaf weights
  2. Handles missing values natively
  3. early_stopping_rounds prevents overfitting
  4. GPU acceleration available
  5. XGBoost is a foundational piece of Gradient Boosting (XGBoost/LightGBM)
  6. Connect this section to the ml track and intermediate expectations

Topic: Gradient Boosting (XGBoost/LightGBM)
Track: ml | Level: intermediate`
        },
        {
          id: `lightgbm`,
          title: `LightGBM & CatBoost`,
          content: `**LightGBM & CatBoost** — what you need to know:

- **Core idea:** State-of-the-art ensemble methods for tabular data.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

LightGBM: leaf-wise growth, faster on large data. CatBoost: handles categoricals natively, ordered boosting.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **LightGBM & CatBoost** directly affects how confidently you can build, debug, and ship ml projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Professional habits:**

- Establish baselines, stratify splits, and report confidence intervals — not single scores.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Overfitting small datasets, tuning on test data, and ignoring class imbalance.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          keyPoints: [
            `LightGBM faster than XGBoost on large datasets`,
            `CatBoost best for high-cardinality categoricals`,
            `All three dominate tabular ML competitions`,
            `Feature importance from gain or split count`,
            `LightGBM & CatBoost is a foundational piece of Gradient Boosting (XGBoost/LightGBM)`,
            `Connect this section to the ml track and intermediate expectations`
          ],
          example: `# Concept check: LightGBM & CatBoost
meta = {
    "topic": "ml-boosting",
    "section": "lightgbm",
    "track": "ml",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ml-boosting
section: lightgbm
track: ml
level: intermediate`,
          pseudoCode: `CONCEPT: LightGBM & CatBoost

Study checklist:
  1. LightGBM faster than XGBoost on large datasets
  2. CatBoost best for high-cardinality categoricals
  3. All three dominate tabular ML competitions
  4. Feature importance from gain or split count
  5. LightGBM & CatBoost is a foundational piece of Gradient Boosting (XGBoost/LightGBM)
  6. Connect this section to the ml track and intermediate expectations

Topic: Gradient Boosting (XGBoost/LightGBM)
Track: ml | Level: intermediate`
        },
        {
          id: `tuning-gbm`,
          title: `Tuning Gradient Boosting`,
          content: `**Tuning Gradient Boosting** — what you need to know:

- **Core idea:** State-of-the-art ensemble methods for tabular data.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Key params: n_estimators, learning_rate, max_depth, subsample, colsample_bytree, reg_alpha/lambda.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Tuning Gradient Boosting** directly affects how confidently you can build, debug, and ship ml projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Professional habits:**

- Establish baselines, stratify splits, and report confidence intervals — not single scores.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Overfitting small datasets, tuning on test data, and ignoring class imbalance.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          keyPoints: [
            `Start with defaults then tune learning_rate + n_estimators`,
            `Lower learning_rate with more trees often better`,
            `subsample and colsample add randomness`,
            `Use early stopping on validation set`,
            `Tuning Gradient Boosting is a foundational piece of Gradient Boosting (XGBoost/LightGBM)`,
            `Connect this section to the ml track and intermediate expectations`
          ],
          example: `# Concept check: Tuning Gradient Boosting
meta = {
    "topic": "ml-boosting",
    "section": "tuning-gbm",
    "track": "ml",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ml-boosting
section: tuning-gbm
track: ml
level: intermediate`,
          pseudoCode: `CONCEPT: Tuning Gradient Boosting

Study checklist:
  1. Start with defaults then tune learning_rate + n_estimators
  2. Lower learning_rate with more trees often better
  3. subsample and colsample add randomness
  4. Use early stopping on validation set
  5. Tuning Gradient Boosting is a foundational piece of Gradient Boosting (XGBoost/LightGBM)
  6. Connect this section to the ml track and intermediate expectations

Topic: Gradient Boosting (XGBoost/LightGBM)
Track: ml | Level: intermediate`
        },
        {
          id: `ml-boosting-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Gradient Boosting (XGBoost/LightGBM)** sits in the **ml** track of the Data Science Master curriculum. State-of-the-art ensemble methods for tabular data.

**Theoretical foundation:**

- Learning algorithms minimize expected risk on unseen data.
- Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For **ml-boosting**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
          example: `# Concept check for Gradient Boosting (XGBoost/LightGBM)
meta = {"topic_id": "ml-boosting", "track": "ml", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ml-boosting ml intermediate`,
          keyPoints: [
            `Core theory of Gradient Boosting (XGBoost/LightGBM) ties to the ml track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Gradient Boosting (XGBoost/LightGBM) ties to the ml track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Gradient Boosting (XGBoost/LightGBM)
Track: ml | Level: intermediate`
        },
        {
          id: `ml-boosting-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Gradient Boosting (XGBoost/LightGBM)**. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **ml-boosting**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for ml-boosting
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ml-boosting", "Gradient Boosting (XGBoost/LightGBM)")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ml-boosting Gradient`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with ml ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with ml ecosystem conventions

Topic: Gradient Boosting (XGBoost/LightGBM)
Track: ml | Level: intermediate`
        },
        {
          id: `ml-boosting-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Gradient Boosting (XGBoost/LightGBM)** often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on **ml-boosting**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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

debug_step("ml-boosting", "Gradient Boosting (XGBoost/LightGBM)")
debug_step("section_count", 4)`,
          output: `[ml-boosting] 'Gradient Boosting (XGBoost/LightGBM)' (str)
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

Topic: Gradient Boosting (XGBoost/LightGBM)
Track: ml | Level: intermediate`
        },
        {
          id: `ml-boosting-real-world`,
          title: `Real-World Applications`,
          content: `**Gradient Boosting (XGBoost/LightGBM)** shows up wherever **ml** skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around **ml-boosting** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Gradient Boosting (XGBoost/LightGBM)
skills = ["ml", "intermediate", "ml-boosting"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ml, intermediate, ml-boosting`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Gradient Boosting (XGBoost/LightGBM) to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Gradient Boosting (XGBoost/LightGBM) to adjacent topics in the same track

Topic: Gradient Boosting (XGBoost/LightGBM)
Track: ml | Level: intermediate`
        }
      ],
      exercises: [
        {
          id: `ex-xgb-1`,
          question: `Train XGBClassifier with n_estimators=50 on iris binary subset.`,
          solution: `from xgboost import XGBClassifier
from sklearn.datasets import load_iris
X, y = load_iris(return_X_y=True)
mask = y < 2
clf = XGBClassifier(n_estimators=50, eval_metric="logloss", random_state=42)
clf.fit(X[mask], y[mask])
print(clf.n_estimators)`,
          difficulty: `medium`
        },
        {
          id: `ex-xgb-2`,
          question: `Explain boosting in one sentence as a Python string.`,
          solution: `print("Sequentially add models that correct previous errors")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 124,
      module: `module-11`,
      references: [
        {
          id: `xgboost-docs`,
          title: `XGBoost Documentation`,
          source: `XGBoost`,
          type: `documentation`,
          url: `https://xgboost.readthedocs.io/en/stable/`,
          description: `Industry-standard gradient boosting library for tabular data.`
        },
        {
          id: `lightgbm-docs`,
          title: `LightGBM Documentation`,
          source: `Microsoft`,
          type: `documentation`,
          url: `https://lightgbm.readthedocs.io/en/latest/`,
          description: `Fast gradient boosting with leaf-wise tree growth for large datasets.`
        },
        {
          id: `sklearn-ensemble`,
          title: `scikit-learn Ensemble Methods`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/modules/ensemble.html`,
          description: `Bagging, boosting, stacking, and voting classifiers.`
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
      id: `ml-ensemble`,
      title: `Ensemble Methods`,
      description: `Bagging, boosting, stacking, and voting classifiers.`,
      level: `intermediate`,
      track: `ml`,
      sections: [
        {
          id: `bagging`,
          title: `Bagging & Boosting`,
          content: `**Bagging & Boosting** — what you need to know:

- **Core idea:** Bagging, boosting, stacking, and voting classifiers.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Bagging (Bootstrap Aggregating): parallel training on random subsets, average/vote. Boosting: sequential error correction.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Bagging & Boosting** directly affects how confidently you can build, debug, and ship ml projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Professional habits:**

- Establish baselines, stratify splits, and report confidence intervals — not single scores.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Overfitting small datasets, tuning on test data, and ignoring class imbalance.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          keyPoints: [
            `Bagging reduces variance (Random Forest)`,
            `Boosting reduces bias (XGBoost)`,
            `Both reduce overfitting vs single model`,
            `Combining diverse models improves robustness`,
            `Bagging & Boosting is a foundational piece of Ensemble Methods`,
            `Connect this section to the ml track and intermediate expectations`
          ],
          example: `# Concept check: Bagging & Boosting
meta = {
    "topic": "ml-ensemble",
    "section": "bagging",
    "track": "ml",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ml-ensemble
section: bagging
track: ml
level: intermediate`,
          pseudoCode: `CONCEPT: Bagging & Boosting

Study checklist:
  1. Bagging reduces variance (Random Forest)
  2. Boosting reduces bias (XGBoost)
  3. Both reduce overfitting vs single model
  4. Combining diverse models improves robustness
  5. Bagging & Boosting is a foundational piece of Ensemble Methods
  6. Connect this section to the ml track and intermediate expectations

Topic: Ensemble Methods
Track: ml | Level: intermediate`
        },
        {
          id: `voting`,
          title: `Voting & Stacking`,
          content: `**Voting & Stacking** — what you need to know:

- **Core idea:** Bagging, boosting, stacking, and voting classifiers.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

VotingClassifier: hard vote (majority) or soft vote (average probabilities). StackingClassifier: meta-learner on base model predictions.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Voting & Stacking** directly affects how confidently you can build, debug, and ship ml projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Establish baselines, stratify splits, and report confidence intervals — not single scores.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Overfitting small datasets, tuning on test data, and ignoring class imbalance.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          example: `from sklearn.ensemble import VotingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.svm import SVC
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)
vote = VotingClassifier([("lr", LogisticRegression(max_iter=200)), ("dt", DecisionTreeClassifier()), ("svc", SVC())]).fit(X, y)
print(round(vote.score(X, y), 3))`,
          output: `0.967`,
          keyPoints: [
            `Soft voting usually better than hard`,
            `Stacking learns optimal combination`,
            `Diverse base models improve ensemble`,
            `Stacking can overfit — use CV for meta-features`,
            `Voting & Stacking is a foundational piece of Ensemble Methods`,
            `Connect this section to the ml track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: Voting & Stacking

Study checklist:
  1. Soft voting usually better than hard
  2. Stacking learns optimal combination
  3. Diverse base models improve ensemble
  4. Stacking can overfit — use CV for meta-features
  5. Voting & Stacking is a foundational piece of Ensemble Methods
  6. Connect this section to the ml track and intermediate expectations

Topic: Ensemble Methods
Track: ml | Level: intermediate`
        },
        {
          id: `blending`,
          title: `Blending Strategies`,
          content: `**Blending Strategies** — what you need to know:

- **Core idea:** Bagging, boosting, stacking, and voting classifiers.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Simple average of model predictions often competitive. Weighted average by validation performance.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Blending Strategies** directly affects how confidently you can build, debug, and ship ml projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Professional habits:**

- Establish baselines, stratify splits, and report confidence intervals — not single scores.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Overfitting small datasets, tuning on test data, and ignoring class imbalance.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          keyPoints: [
            `Equal weight averaging is strong baseline`,
            `Weight by validation AUC or log-loss`,
            `Blending simpler than stacking`,
            `Kaggle solutions often ensemble 5-10 models`,
            `Blending Strategies is a foundational piece of Ensemble Methods`,
            `Connect this section to the ml track and intermediate expectations`
          ],
          example: `# Concept check: Blending Strategies
meta = {
    "topic": "ml-ensemble",
    "section": "blending",
    "track": "ml",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ml-ensemble
section: blending
track: ml
level: intermediate`,
          pseudoCode: `CONCEPT: Blending Strategies

Study checklist:
  1. Equal weight averaging is strong baseline
  2. Weight by validation AUC or log-loss
  3. Blending simpler than stacking
  4. Kaggle solutions often ensemble 5-10 models
  5. Blending Strategies is a foundational piece of Ensemble Methods
  6. Connect this section to the ml track and intermediate expectations

Topic: Ensemble Methods
Track: ml | Level: intermediate`
        },
        {
          id: `diversity`,
          title: `Ensemble Diversity`,
          content: `**Ensemble Diversity** — what you need to know:

- **Core idea:** Bagging, boosting, stacking, and voting classifiers.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Ensembles work when models make different errors. Diversity from: different algorithms, features, data subsets, random seeds.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Ensemble Diversity** directly affects how confidently you can build, debug, and ship ml projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Professional habits:**

- Establish baselines, stratify splits, and report confidence intervals — not single scores.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Overfitting small datasets, tuning on test data, and ignoring class imbalance.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.`,
          keyPoints: [
            `Identical models add no value`,
            `Decorrelate errors for maximum benefit`,
            `Random feature subsets in RF create diversity`,
            `Cross-validation stacking prevents overfitting`,
            `Ensemble Diversity is a foundational piece of Ensemble Methods`,
            `Connect this section to the ml track and intermediate expectations`
          ],
          example: `# Concept check: Ensemble Diversity
meta = {
    "topic": "ml-ensemble",
    "section": "diversity",
    "track": "ml",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ml-ensemble
section: diversity
track: ml
level: intermediate`,
          pseudoCode: `CONCEPT: Ensemble Diversity

Study checklist:
  1. Identical models add no value
  2. Decorrelate errors for maximum benefit
  3. Random feature subsets in RF create diversity
  4. Cross-validation stacking prevents overfitting
  5. Ensemble Diversity is a foundational piece of Ensemble Methods
  6. Connect this section to the ml track and intermediate expectations

Topic: Ensemble Methods
Track: ml | Level: intermediate`
        },
        {
          id: `ml-ensemble-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Ensemble Methods** sits in the **ml** track of the Data Science Master curriculum. Bagging, boosting, stacking, and voting classifiers.

**Theoretical foundation:**

- Learning algorithms minimize expected risk on unseen data.
- Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For **ml-ensemble**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
          example: `# Concept check for Ensemble Methods
meta = {"topic_id": "ml-ensemble", "track": "ml", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ml-ensemble ml intermediate`,
          keyPoints: [
            `Core theory of Ensemble Methods ties to the ml track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Ensemble Methods ties to the ml track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Ensemble Methods
Track: ml | Level: intermediate`
        },
        {
          id: `ml-ensemble-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Ensemble Methods**. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **ml-ensemble**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for ml-ensemble
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ml-ensemble", "Ensemble Methods")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ml-ensemble Ensemble`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with ml ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with ml ecosystem conventions

Topic: Ensemble Methods
Track: ml | Level: intermediate`
        },
        {
          id: `ml-ensemble-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Ensemble Methods** often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on **ml-ensemble**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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

debug_step("ml-ensemble", "Ensemble Methods")
debug_step("section_count", 4)`,
          output: `[ml-ensemble] 'Ensemble Methods' (str)
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

Topic: Ensemble Methods
Track: ml | Level: intermediate`
        },
        {
          id: `ml-ensemble-real-world`,
          title: `Real-World Applications`,
          content: `**Ensemble Methods** shows up wherever **ml** skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around **ml-ensemble** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Ensemble Methods
skills = ["ml", "intermediate", "ml-ensemble"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ml, intermediate, ml-ensemble`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Ensemble Methods to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Ensemble Methods to adjacent topics in the same track

Topic: Ensemble Methods
Track: ml | Level: intermediate`
        }
      ],
      exercises: [
        {
          id: `ex-ens-1`,
          question: `Create VotingClassifier with LR and DecisionTree.`,
          solution: `from sklearn.ensemble import VotingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import load_iris
X, y = load_iris(return_X_y=True)
v = VotingClassifier([("lr", LogisticRegression(max_iter=200)), ("dt", DecisionTreeClassifier())]).fit(X, y)
print(round(v.score(X, y), 2))`,
          difficulty: `medium`
        },
        {
          id: `ex-ens-2`,
          question: `Average predictions [0.8, 0.6] and [0.7, 0.5] element-wise.`,
          solution: `import numpy as np
a, b = np.array([0.8, 0.6]), np.array([0.7, 0.5])
print(((a + b) / 2).round(2))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 124,
      module: `module-11`,
      references: [
        {
          id: `sklearn-ensemble`,
          title: `scikit-learn Ensemble Methods`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/modules/ensemble.html`,
          description: `Bagging, boosting, stacking, and voting classifiers.`
        },
        {
          id: `xgboost-docs`,
          title: `XGBoost Documentation`,
          source: `XGBoost`,
          type: `documentation`,
          url: `https://xgboost.readthedocs.io/en/stable/`,
          description: `Industry-standard gradient boosting library for tabular data.`
        },
        {
          id: `esl-hastie`,
          title: `The Elements of Statistical Learning`,
          source: `Stanford`,
          type: `book`,
          url: `https://hastie.su.domains/ElemStatLearn/`,
          description: `Free authoritative text on statistical learning methods and theory.`
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
