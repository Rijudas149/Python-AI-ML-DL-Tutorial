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
          content: `Add polynomial features: x, x², x³. PolynomialFeatures(degree=2). Captures non-linear relationships with linear model.

**Why this matters for Regression Techniques:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Regression Techniques:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Polynomial Regression" connects to polynomial, ridge, lasso, and elastic net regression. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
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
            `Works with multiple features — explosion of terms`
          ]
        },
        {
          id: `ridge-lasso`,
          title: `Ridge & Lasso`,
          content: `Ridge (L2): shrinks coefficients. Lasso (L1): drives some to zero — feature selection. ElasticNet combines both.

**Why this matters for Regression Techniques:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Regression Techniques:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Ridge & Lasso" connects to polynomial, ridge, lasso, and elastic net regression. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
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
            `ElasticNet best when many correlated features`
          ]
        },
        {
          id: `assumptions`,
          title: `Linear Regression Assumptions`,
          content: `Linearity, independence, homoscedasticity, normality of residuals. Violations affect inference not always prediction.

**Why this matters for Regression Techniques:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Regression Techniques:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Linear Regression Assumptions" connects to polynomial, ridge, lasso, and elastic net regression. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `Check residual plots for patterns`,
            `Heteroscedasticity: use weighted least squares`,
            `Multicollinearity inflates coefficient variance`,
            `Outliers disproportionately affect OLS`
          ]
        },
        {
          id: `robust`,
          title: `Robust Regression`,
          content: `HuberRegressor, RANSAC for outlier resistance. Quantile regression for conditional quantiles.

**Why this matters for Regression Techniques:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Regression Techniques:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Robust Regression" connects to polynomial, ridge, lasso, and elastic net regression. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `Huber loss transitions from L2 to L1 for outliers`,
            `RANSAC fits to inlier consensus`,
            `Quantile regression for uncertainty bounds`,
            `Use when data has significant outliers`
          ]
        },
        {
          id: `ml-regression-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Regression Techniques sits in the **ml** track of the DL_Master curriculum. Polynomial, ridge, lasso, and elastic net regression.

Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For ml-regression, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (intermediate):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
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
          ]
        },
        {
          id: `ml-regression-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Regression Techniques. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ml-regression, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
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
          ]
        },
        {
          id: `ml-regression-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Regression Techniques often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on ml-regression, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
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
          ]
        },
        {
          id: `ml-regression-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Regression Techniques shows up wherever ml skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around ml-regression align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
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
          ]
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
      estimatedMinutes: 40,
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
          content: `Classify by majority vote of k nearest training points. Lazy learner — no training phase. Scale features first!

**Why this matters for Classification Algorithms:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Classification Algorithms:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "K-Nearest Neighbors" connects to knn, naive bayes, and multi-class strategies. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
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
            `Use ball_tree or kd_tree for efficiency`
          ]
        },
        {
          id: `naive-bayes`,
          title: `Naive Bayes`,
          content: `P(y|x) ∝ P(y)ΠP(xᵢ|y). Assumes feature independence. GaussianNB, MultinomialNB, BernoulliNB variants.

**Why this matters for Classification Algorithms:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Classification Algorithms:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Naive Bayes" connects to knn, naive bayes, and multi-class strategies. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          example: `from sklearn.naive_bayes import GaussianNB
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)
clf = GaussianNB().fit(X, y)
print(clf.predict_proba(X[:3]).round(2))`,
          keyPoints: [
            `Fast training and prediction`,
            `Works well with small data`,
            `Independence assumption rarely true but works`,
            `MultinomialNB for text classification`
          ]
        },
        {
          id: `multiclass`,
          title: `Multi-class Strategies`,
          content: `One-vs-Rest (OvR): k binary classifiers. One-vs-One (OvO): k(k-1)/2 classifiers. Softmax for neural networks.

**Why this matters for Classification Algorithms:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Classification Algorithms:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Multi-class Strategies" connects to knn, naive bayes, and multi-class strategies. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `OvR default in sklearn for SVM, LR`,
            `OvO used by SVC with probability`,
            `Softmax ensures probabilities sum to 1`,
            `Multi-class metrics: macro vs weighted avg`
          ]
        },
        {
          id: `imbalanced`,
          title: `Imbalanced Classification`,
          content: `SMOTE oversampling, class_weight parameter, threshold tuning. Focus on recall for minority class when costly to miss.

**Why this matters for Classification Algorithms:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Classification Algorithms:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Imbalanced Classification" connects to knn, naive bayes, and multi-class strategies. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `class_weight="balanced" adjusts loss`,
            `SMOTE generates synthetic minority samples`,
            `Adjust decision threshold for precision/recall tradeoff`,
            `Use PR-AUC not accuracy for imbalanced data`
          ]
        },
        {
          id: `ml-classification-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Classification Algorithms sits in the **ml** track of the DL_Master curriculum. KNN, Naive Bayes, and multi-class strategies.

Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For ml-classification, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (intermediate):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
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
          ]
        },
        {
          id: `ml-classification-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Classification Algorithms. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ml-classification, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
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
          ]
        },
        {
          id: `ml-classification-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Classification Algorithms often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on ml-classification, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
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
          ]
        },
        {
          id: `ml-classification-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Classification Algorithms shows up wherever ml skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around ml-classification align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
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
          ]
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
      estimatedMinutes: 40,
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
          content: `Finds hyperplane maximizing margin between classes. Support vectors are critical training points. C parameter trades margin vs misclassification.

**Why this matters for Support Vector Machines:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Support Vector Machines:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Linear SVM" connects to maximum margin classifiers with kernel trick. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
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
            `Only support vectors affect decision boundary`
          ]
        },
        {
          id: `kernel`,
          title: `Kernel Trick`,
          content: `Map to higher dimensions without explicit computation. RBF (Gaussian) most popular: K(x,x') = exp(-γ||x-x'||²).

**Why this matters for Support Vector Machines:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Support Vector Machines:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Kernel Trick" connects to maximum margin classifiers with kernel trick. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          example: `from sklearn.svm import SVC
from sklearn.datasets import make_moons

X, y = make_moons(n_samples=100, noise=0.2, random_state=42)
clf = SVC(kernel="rbf", gamma="scale").fit(X, y)
print(clf.score(X, y))`,
          keyPoints: [
            `Kernel trick avoids explicit high-D mapping`,
            `RBF kernel handles non-linear boundaries`,
            `gamma controls influence radius of each point`,
            `Linear kernel for high-dimensional sparse text data`
          ]
        },
        {
          id: `svc-params`,
          title: `SVM Hyperparameters`,
          content: `C, kernel, gamma, degree. GridSearchCV essential. probability=True enables predict_proba (slower).

**Why this matters for Support Vector Machines:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Support Vector Machines:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "SVM Hyperparameters" connects to maximum margin classifiers with kernel trick. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `Scale features before SVM — critical`,
            `gamma too high: overfitting to support vectors`,
            `LinearSVC faster for linear case on large data`,
            `NuSVM alternative parameterization`
          ]
        },
        {
          id: `svr`,
          title: `Support Vector Regression`,
          content: `SVR for regression. Epsilon-insensitive loss ignores errors within ε tube. Kernel trick applies to regression too.

**Why this matters for Support Vector Machines:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Support Vector Machines:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Support Vector Regression" connects to maximum margin classifiers with kernel trick. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `SVR finds tube containing most points`,
            `epsilon controls tube width`,
            `Less common than RF/XGBoost for tabular regression`,
            `Effective in high-dimensional spaces`
          ]
        },
        {
          id: `ml-svm-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Support Vector Machines sits in the **ml** track of the DL_Master curriculum. Maximum margin classifiers with kernel trick.

Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For ml-svm, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (intermediate):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
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
          ]
        },
        {
          id: `ml-svm-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Support Vector Machines. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ml-svm, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
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
          ]
        },
        {
          id: `ml-svm-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Support Vector Machines often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on ml-svm, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
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
          ]
        },
        {
          id: `ml-svm-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Support Vector Machines shows up wherever ml skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around ml-svm align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
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
          ]
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
      estimatedMinutes: 40,
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
          content: `Sequentially add trees correcting previous errors. Each tree fits negative gradient of loss. Learning_rate shrinks each contribution.

**Why this matters for Gradient Boosting (XGBoost/LightGBM):** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Gradient Boosting (XGBoost/LightGBM):** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Gradient Boosting Concept" connects to state-of-the-art ensemble methods for tabular data. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          pseudoCode: `model = initial prediction
FOR t in 1..T:
    compute residuals/gradients
    fit tree to residuals
    model += learning_rate * tree`,
          keyPoints: [
            `Boosting reduces bias unlike bagging (RF)`,
            `Learning rate and n_estimators trade off`,
            `Shallow trees (max_depth 3-8) work best`,
            `Most important tabular ML algorithm family`
          ]
        },
        {
          id: `xgboost`,
          title: `XGBoost`,
          content: `Optimized gradient boosting with regularization, parallel tree construction, handling missing values. xgboost.XGBClassifier().

**Why this matters for Gradient Boosting (XGBoost/LightGBM):** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Gradient Boosting (XGBoost/LightGBM):** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "XGBoost" connects to state-of-the-art ensemble methods for tabular data. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
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
            `GPU acceleration available`
          ]
        },
        {
          id: `lightgbm`,
          title: `LightGBM & CatBoost`,
          content: `LightGBM: leaf-wise growth, faster on large data. CatBoost: handles categoricals natively, ordered boosting.

**Why this matters for Gradient Boosting (XGBoost/LightGBM):** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Gradient Boosting (XGBoost/LightGBM):** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "LightGBM & CatBoost" connects to state-of-the-art ensemble methods for tabular data. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `LightGBM faster than XGBoost on large datasets`,
            `CatBoost best for high-cardinality categoricals`,
            `All three dominate tabular ML competitions`,
            `Feature importance from gain or split count`
          ]
        },
        {
          id: `tuning-gbm`,
          title: `Tuning Gradient Boosting`,
          content: `Key params: n_estimators, learning_rate, max_depth, subsample, colsample_bytree, reg_alpha/lambda.

**Why this matters for Gradient Boosting (XGBoost/LightGBM):** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Gradient Boosting (XGBoost/LightGBM):** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Tuning Gradient Boosting" connects to state-of-the-art ensemble methods for tabular data. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `Start with defaults then tune learning_rate + n_estimators`,
            `Lower learning_rate with more trees often better`,
            `subsample and colsample add randomness`,
            `Use early stopping on validation set`
          ]
        },
        {
          id: `ml-boosting-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Gradient Boosting (XGBoost/LightGBM) sits in the **ml** track of the DL_Master curriculum. State-of-the-art ensemble methods for tabular data.

Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For ml-boosting, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (intermediate):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
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
          ]
        },
        {
          id: `ml-boosting-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Gradient Boosting (XGBoost/LightGBM). Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ml-boosting, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
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
          ]
        },
        {
          id: `ml-boosting-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Gradient Boosting (XGBoost/LightGBM) often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on ml-boosting, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
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
          ]
        },
        {
          id: `ml-boosting-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Gradient Boosting (XGBoost/LightGBM) shows up wherever ml skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around ml-boosting align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
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
          ]
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
      estimatedMinutes: 40,
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
          content: `Bagging (Bootstrap Aggregating): parallel training on random subsets, average/vote. Boosting: sequential error correction.

**Why this matters for Ensemble Methods:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Ensemble Methods:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Bagging & Boosting" connects to bagging, boosting, stacking, and voting classifiers. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `Bagging reduces variance (Random Forest)`,
            `Boosting reduces bias (XGBoost)`,
            `Both reduce overfitting vs single model`,
            `Combining diverse models improves robustness`
          ]
        },
        {
          id: `voting`,
          title: `Voting & Stacking`,
          content: `VotingClassifier: hard vote (majority) or soft vote (average probabilities). StackingClassifier: meta-learner on base model predictions.

**Why this matters for Ensemble Methods:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Ensemble Methods:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Voting & Stacking" connects to bagging, boosting, stacking, and voting classifiers. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
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
            `Stacking can overfit — use CV for meta-features`
          ]
        },
        {
          id: `blending`,
          title: `Blending Strategies`,
          content: `Simple average of model predictions often competitive. Weighted average by validation performance.

**Why this matters for Ensemble Methods:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Ensemble Methods:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Blending Strategies" connects to bagging, boosting, stacking, and voting classifiers. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `Equal weight averaging is strong baseline`,
            `Weight by validation AUC or log-loss`,
            `Blending simpler than stacking`,
            `Kaggle solutions often ensemble 5-10 models`
          ]
        },
        {
          id: `diversity`,
          title: `Ensemble Diversity`,
          content: `Ensembles work when models make different errors. Diversity from: different algorithms, features, data subsets, random seeds.

**Why this matters for Ensemble Methods:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Ensemble Methods:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Ensemble Diversity" connects to bagging, boosting, stacking, and voting classifiers. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `Identical models add no value`,
            `Decorrelate errors for maximum benefit`,
            `Random feature subsets in RF create diversity`,
            `Cross-validation stacking prevents overfitting`
          ]
        },
        {
          id: `ml-ensemble-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Ensemble Methods sits in the **ml** track of the DL_Master curriculum. Bagging, boosting, stacking, and voting classifiers.

Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For ml-ensemble, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (intermediate):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
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
          ]
        },
        {
          id: `ml-ensemble-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Ensemble Methods. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ml-ensemble, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
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
          ]
        },
        {
          id: `ml-ensemble-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Ensemble Methods often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on ml-ensemble, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
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
          ]
        },
        {
          id: `ml-ensemble-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Ensemble Methods shows up wherever ml skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around ml-ensemble align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
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
          ]
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
      estimatedMinutes: 40,
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
