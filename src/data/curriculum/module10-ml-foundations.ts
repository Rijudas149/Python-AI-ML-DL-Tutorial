import type { Topic } from '../../types';

export const module10Topics: Topic[] = [
{
      id: `ml-workflow`,
      title: `ML Workflow & train_test_split`,
      description: `End-to-end machine learning pipeline with scikit-learn.`,
      level: `beginner`,
      track: `ml`,
      sections: [
        {
          id: `pipeline`,
          title: `The ML Workflow`,
          content: `1. Define problem 2. Collect data 3. EDA 4. Feature engineering 5. Model selection 6. Train 7. Evaluate 8. Deploy 9. Monitor.

**Why this matters for ML Workflow & train_test_split:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — ML Workflow & train_test_split:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "The ML Workflow" connects to end-to-end machine learning pipeline with scikit-learn. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `Start with problem definition not algorithms`,
            `Data quality determines ceiling performance`,
            `Always hold out test set until final evaluation`,
            `Iterate between EDA and feature engineering`
          ]
        },
        {
          id: `split`,
          title: `train_test_split`,
          content: `Split data into train/validation/test. sklearn: train_test_split(X, y, test_size=0.2, random_state=42, stratify=y).

**Why this matters for ML Workflow & train_test_split:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — ML Workflow & train_test_split:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "train_test_split" connects to end-to-end machine learning pipeline with scikit-learn. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          example: `from sklearn.model_selection import train_test_split
import numpy as np

X = np.arange(20).reshape(-1, 1)
y = np.array([0]*10 + [1]*10)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)
print(len(X_train), len(X_test))`,
          output: `16 4`,
          keyPoints: [
            `Never train on test data — data leakage`,
            `stratify preserves class proportions`,
            `random_state for reproducibility`,
            `Typical split: 70-80% train, 20-30% test`
          ]
        },
        {
          id: `preprocessing`,
          title: `Preprocessing Pipeline`,
          content: `StandardScaler, OneHotEncoder, Pipeline class chains preprocessing + model. Prevents leakage by fitting on train only.

**Why this matters for ML Workflow & train_test_split:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — ML Workflow & train_test_split:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Preprocessing Pipeline" connects to end-to-end machine learning pipeline with scikit-learn. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          example: `from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

pipe = Pipeline([
    ("scaler", StandardScaler()),
    ("clf", LogisticRegression())
])
print(pipe.steps[0][0], pipe.steps[1][0])`,
          output: `scaler clf`,
          keyPoints: [
            `Fit preprocessor on training data only`,
            `Pipeline ensures consistent train/test processing`,
            `ColumnTransformer for mixed feature types`,
            `Preprocessing choices affect model performance`
          ]
        },
        {
          id: `baseline`,
          title: `Baseline Models`,
          content: `Always establish baseline before complex models. Mean predictor for regression, majority class for classification. Beat baseline first.

**Why this matters for ML Workflow & train_test_split:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — ML Workflow & train_test_split:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Baseline Models" connects to end-to-end machine learning pipeline with scikit-learn. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `DummyClassifier/DummyRegressor for baselines`,
            `Baseline sets minimum acceptable performance`,
            `Simple models often competitive with complex ones`,
            `Occams razor — prefer simpler when equal performance`
          ]
        },
        {
          id: `ml-workflow-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

ML Workflow & train_test_split sits in the **ml** track of the Data Science Master curriculum. End-to-end machine learning pipeline with scikit-learn.

Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For ml-workflow, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for ML Workflow & train_test_split
meta = {"topic_id": "ml-workflow", "track": "ml", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ml-workflow ml beginner`,
          keyPoints: [
            `Core theory of ML Workflow & train_test_split ties to the ml track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `ml-workflow-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from ML Workflow & train_test_split. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ml-workflow, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for ml-workflow
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ml-workflow", "ML Workflow & train_test_split")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ml-workflow ML`,
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
          id: `ml-workflow-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on ML Workflow & train_test_split often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on ml-workflow, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("ml-workflow", "ML Workflow & train_test_split")
debug_step("section_count", 4)`,
          output: `[ml-workflow] 'ML Workflow & train_test_split' (str)
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
          id: `ml-workflow-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

ML Workflow & train_test_split shows up wherever ml skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around ml-workflow align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for ML Workflow & train_test_split
skills = ["ml", "beginner", "ml-workflow"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ml, beginner, ml-workflow`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect ML Workflow & train_test_split to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-split-1`,
          question: `Split array of 100 indices into 80 train and 20 test.`,
          solution: `from sklearn.model_selection import train_test_split
idx = list(range(100))
train, test = train_test_split(idx, test_size=0.2, random_state=42)
print(len(train), len(test))`,
          difficulty: `easy`
        },
        {
          id: `ex-split-2`,
          question: `Create Pipeline with StandardScaler and LogisticRegression.`,
          solution: `from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
pipe = Pipeline([("s", StandardScaler()), ("c", LogisticRegression())])
print(len(pipe.steps))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-10`,
      references: [
        {
          id: `scikit-learn-user-guide`,
          title: `scikit-learn User Guide`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/user_guide.html`,
          description: `Complete reference for ML algorithms, pipelines, and model selection.`
        },
        {
          id: `kaggle-intro-ml`,
          title: `Kaggle Learn — Intro to Machine Learning`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/intro-to-machine-learning`,
          description: `Practical first steps with decision trees and model validation.`
        },
        {
          id: `sklearn-pipeline`,
          title: `scikit-learn Pipelines`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/modules/compose.html`,
          description: `Chaining transformers and estimators into reproducible workflows.`
        },
        {
          id: `coursera-andrew-ng`,
          title: `Machine Learning Specialization`,
          source: `Coursera`,
          type: `course`,
          url: `https://www.coursera.org/specializations/machine-learning-introduction`,
          description: `Andrew Ng's accessible introduction to supervised and unsupervised learning.`
        }
      ]
    },
{
      id: `ml-linear`,
      title: `Linear & Logistic Regression`,
      description: `Foundation supervised learning algorithms.`,
      level: `beginner`,
      track: `ml`,
      sections: [
        {
          id: `linear-reg`,
          title: `Linear Regression`,
          content: `ŷ = wᵀx + b. Minimizes MSE. sklearn: LinearRegression(). Closed-form or iterative solution.

**Why this matters for Linear & Logistic Regression:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Linear & Logistic Regression:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Linear Regression" connects to foundation supervised learning algorithms. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          example: `from sklearn.linear_model import LinearRegression
import numpy as np

X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])
model = LinearRegression().fit(X, y)
print(model.coef_[0], model.intercept_)`,
          output: `2.0 -1.7763568394002505e-15`,
          keyPoints: [
            `Assumes linear relationship`,
            `Interpretable coefficients`,
            `Sensitive to outliers — use HuberRegressor`,
            `Ridge/Lasso add regularization`
          ]
        },
        {
          id: `logistic`,
          title: `Logistic Regression`,
          content: `Predicts P(y=1|x) via sigmoid: σ(wᵀx). Despite name, is classification algorithm. sklearn: LogisticRegression().

**Why this matters for Linear & Logistic Regression:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Linear & Logistic Regression:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Logistic Regression" connects to foundation supervised learning algorithms. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          example: `from sklearn.linear_model import LogisticRegression
import numpy as np

X = np.array([[0], [1], [2], [3], [4], [5]])
y = np.array([0, 0, 0, 1, 1, 1])
clf = LogisticRegression().fit(X, y)
print(clf.predict([[2.5], [3.5]]))`,
          output: `[0 1]`,
          keyPoints: [
            `Outputs probabilities not just labels`,
            `Uses cross-entropy loss internally`,
            `Works well with linearly separable data`,
            `C parameter controls regularization strength`
          ]
        },
        {
          id: `sigmoid`,
          title: `Sigmoid & Softmax`,
          content: `Sigmoid: σ(z) = 1/(1+e⁻ᶻ). Maps to (0,1). Softmax generalizes to multi-class: softmax(zᵢ) = e^zᵢ/Σe^zⱼ.

**Why this matters for Linear & Logistic Regression:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Linear & Logistic Regression:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Sigmoid & Softmax" connects to foundation supervised learning algorithms. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          example: `import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

print([round(sigmoid(x), 3) for x in [-2, 0, 2]])`,
          output: `[0.119, 0.5, 0.881]`,
          keyPoints: [
            `Sigmoid squashes to probability range`,
            `Softmax outputs sum to 1`,
            `Decision boundary at 0.5 for binary`,
            `Logistic regression learns linear decision boundary`
          ]
        },
        {
          id: `interpret`,
          title: `Interpretability`,
          content: `Coefficients show feature importance and direction. Odds ratio = e^coefficient. SHAP values for individual predictions.

**Why this matters for Linear & Logistic Regression:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Linear & Logistic Regression:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Interpretability" connects to foundation supervised learning algorithms. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `Positive coefficient increases log-odds of class 1`,
            `Feature scaling needed for coefficient comparison`,
            `Regularization shrinks coefficients toward zero`,
            `Linear models preferred when interpretability required`
          ]
        },
        {
          id: `ml-linear-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Linear & Logistic Regression sits in the **ml** track of the Data Science Master curriculum. Foundation supervised learning algorithms.

Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For ml-linear, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Linear & Logistic Regression
meta = {"topic_id": "ml-linear", "track": "ml", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ml-linear ml beginner`,
          keyPoints: [
            `Core theory of Linear & Logistic Regression ties to the ml track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `ml-linear-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Linear & Logistic Regression. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ml-linear, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for ml-linear
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ml-linear", "Linear & Logistic Regression")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ml-linear Linear`,
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
          id: `ml-linear-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Linear & Logistic Regression often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on ml-linear, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("ml-linear", "Linear & Logistic Regression")
debug_step("section_count", 4)`,
          output: `[ml-linear] 'Linear & Logistic Regression' (str)
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
          id: `ml-linear-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Linear & Logistic Regression shows up wherever ml skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around ml-linear align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Linear & Logistic Regression
skills = ["ml", "beginner", "ml-linear"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ml, beginner, ml-linear`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Linear & Logistic Regression to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-lr-1`,
          question: `Fit LinearRegression on X=[[1],[2],[3]], y=[2,4,6] and predict x=4.`,
          solution: `from sklearn.linear_model import LinearRegression
model = LinearRegression().fit([[1],[2],[3]], [2,4,6])
print(model.predict([[4]])[0])`,
          difficulty: `easy`
        },
        {
          id: `ex-lr-2`,
          question: `Implement sigmoid function and evaluate at 0.`,
          solution: `import numpy as np
def sigmoid(z): return 1/(1+np.exp(-z))
print(sigmoid(0))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-10`,
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
          id: `stanford-cs229`,
          title: `Stanford CS229 — Machine Learning`,
          source: `Stanford CS229`,
          type: `course`,
          url: `https://cs229.stanford.edu/`,
          description: `Andrew Ng's graduate ML course — the canonical theoretical foundation.`
        },
        {
          id: `coursera-andrew-ng`,
          title: `Machine Learning Specialization`,
          source: `Coursera`,
          type: `course`,
          url: `https://www.coursera.org/specializations/machine-learning-introduction`,
          description: `Andrew Ng's accessible introduction to supervised and unsupervised learning.`
        }
      ]
    },
{
      id: `ml-trees`,
      title: `Decision Trees & Random Forests`,
      description: `Tree-based models for classification and regression.`,
      level: `beginner`,
      track: `ml`,
      sections: [
        {
          id: `dt`,
          title: `Decision Trees`,
          content: `Split data by feature thresholds maximizing information gain. Non-parametric, handles non-linear relationships. Prone to overfitting.

**Why this matters for Decision Trees & Random Forests:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Decision Trees & Random Forests:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Decision Trees" connects to tree-based models for classification and regression. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          example: `from sklearn.tree import DecisionTreeClassifier
import numpy as np

X = np.array([[0, 0], [1, 1], [0, 1], [1, 0]])
y = np.array([0, 1, 0, 1])
clf = DecisionTreeClassifier(max_depth=2, random_state=42).fit(X, y)
print(clf.score(X, y))`,
          output: `1.0`,
          keyPoints: [
            `max_depth controls complexity`,
            `Handles mixed feature types naturally`,
            `Prone to overfitting without constraints`,
            `Fully interpretable — can visualize tree`
          ]
        },
        {
          id: `rf`,
          title: `Random Forests`,
          content: `Ensemble of trees on bootstrap samples with random feature subsets. Reduces variance. sklearn: RandomForestClassifier(n_estimators=100).

**Why this matters for Decision Trees & Random Forests:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Decision Trees & Random Forests:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Random Forests" connects to tree-based models for classification and regression. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          example: `from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)
rf = RandomForestClassifier(n_estimators=100, random_state=42).fit(X, y)
print(rf.score(X, y))`,
          output: `1.0`,
          keyPoints: [
            `Bagging reduces overfitting vs single tree`,
            `n_estimators more trees = lower variance`,
            `feature_importances_ for feature ranking`,
            `OOB score estimates generalization without validation set`
          ]
        },
        {
          id: `hyperparams`,
          title: `Tree Hyperparameters`,
          content: `max_depth, min_samples_split, min_samples_leaf, max_features. Tune with GridSearchCV or RandomizedSearchCV.

**Why this matters for Decision Trees & Random Forests:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Decision Trees & Random Forests:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Tree Hyperparameters" connects to tree-based models for classification and regression. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `max_depth most impactful hyperparameter`,
            `min_samples_leaf prevents tiny leaves`,
            `max_features introduces randomness in RF`,
            `Pruning via cost-complexity parameter ccp_alpha`
          ]
        },
        {
          id: `when`,
          title: `When to Use Trees`,
          content: `Tabular data, mixed types, non-linear relationships, feature interactions. Often top performer with gradient boosting.

**Why this matters for Decision Trees & Random Forests:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Decision Trees & Random Forests:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "When to Use Trees" connects to tree-based models for classification and regression. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `Trees excel on structured/tabular data`,
            `Less effective on raw images/text without features`,
            `XGBoost/LightGBM often win Kaggle tabular`,
            `Random Forest good default before tuning`
          ]
        },
        {
          id: `ml-trees-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Decision Trees & Random Forests sits in the **ml** track of the Data Science Master curriculum. Tree-based models for classification and regression.

Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For ml-trees, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Decision Trees & Random Forests
meta = {"topic_id": "ml-trees", "track": "ml", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ml-trees ml beginner`,
          keyPoints: [
            `Core theory of Decision Trees & Random Forests ties to the ml track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `ml-trees-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Decision Trees & Random Forests. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ml-trees, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for ml-trees
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ml-trees", "Decision Trees & Random Forests")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ml-trees Decision`,
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
          id: `ml-trees-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Decision Trees & Random Forests often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on ml-trees, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("ml-trees", "Decision Trees & Random Forests")
debug_step("section_count", 4)`,
          output: `[ml-trees] 'Decision Trees & Random Forests' (str)
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
          id: `ml-trees-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Decision Trees & Random Forests shows up wherever ml skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around ml-trees align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Decision Trees & Random Forests
skills = ["ml", "beginner", "ml-trees"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ml, beginner, ml-trees`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Decision Trees & Random Forests to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-tree-1`,
          question: `Train DecisionTreeClassifier max_depth=3 on iris dataset.`,
          solution: `from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import load_iris
X, y = load_iris(return_X_y=True)
clf = DecisionTreeClassifier(max_depth=3).fit(X, y)
print(clf.get_depth())`,
          difficulty: `easy`
        },
        {
          id: `ex-tree-2`,
          question: `Get feature importances from RandomForest on iris.`,
          solution: `from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris
X, y = load_iris(return_X_y=True)
rf = RandomForestClassifier(random_state=42).fit(X, y)
print(len(rf.feature_importances_))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-10`,
      references: [
        {
          id: `sklearn-trees`,
          title: `scikit-learn Decision Trees`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/modules/tree.html`,
          description: `Decision trees, random forests, and ensemble tree methods.`
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
          id: `kaggle-intro-ml`,
          title: `Kaggle Learn — Intro to Machine Learning`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/intro-to-machine-learning`,
          description: `Practical first steps with decision trees and model validation.`
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
      id: `ml-metrics`,
      title: `Model Evaluation Metrics`,
      description: `Accuracy, precision, recall, F1, ROC-AUC, MSE, R².`,
      level: `beginner`,
      track: `ml`,
      sections: [
        {
          id: `classification`,
          title: `Classification Metrics`,
          content: `Accuracy: correct/total. Precision: TP/(TP+FP). Recall: TP/(TP+FN). F1: harmonic mean of precision and recall.

**Why this matters for Model Evaluation Metrics:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Model Evaluation Metrics:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Classification Metrics" connects to accuracy, precision, recall, f1, roc-auc, mse, r². Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          example: `from sklearn.metrics import classification_report

y_true = [0, 1, 1, 0, 1, 1, 0, 0]
y_pred = [0, 1, 0, 0, 1, 1, 1, 0]
print(classification_report(y_true, y_pred, digits=3))`,
          output: `              precision    recall  f1-score   support

           0      0.667     0.667     0.667         3
           1      0.750     0.750     0.750         4

    accuracy                          0.714         7
   macro avg      0.708     0.708     0.708         7
weighted avg      0.714     0.714     0.714         7`,
          keyPoints: [
            `Accuracy misleading for imbalanced classes`,
            `Precision: of predicted positives, how many correct`,
            `Recall: of actual positives, how many found`,
            `F1 balances precision and recall`
          ]
        },
        {
          id: `roc`,
          title: `ROC-AUC`,
          content: `ROC plots TPR vs FPR at various thresholds. AUC = area under curve. 0.5 = random, 1.0 = perfect. Threshold-independent metric.

**Why this matters for Model Evaluation Metrics:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Model Evaluation Metrics:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "ROC-AUC" connects to accuracy, precision, recall, f1, roc-auc, mse, r². Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `AUC measures ranking quality of predictions`,
            `Good for imbalanced binary classification`,
            `Choose threshold based on business cost`,
            `PR curve better for highly imbalanced data`
          ]
        },
        {
          id: `regression`,
          title: `Regression Metrics`,
          content: `MSE, RMSE, MAE, R². MAE robust to outliers. R² = 1 - SS_res/SS_tot. Negative R² means worse than mean predictor.

**Why this matters for Model Evaluation Metrics:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Model Evaluation Metrics:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Regression Metrics" connects to accuracy, precision, recall, f1, roc-auc, mse, r². Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          example: `from sklearn.metrics import mean_squared_error, r2_score
import numpy as np

y_true = np.array([3, -0.5, 2, 7])
y_pred = np.array([2.5, 0.0, 2, 8])
print(round(mean_squared_error(y_true, y_pred), 3))
print(round(r2_score(y_true, y_pred), 3))`,
          output: `0.375
0.949`,
          keyPoints: [
            `MSE penalizes large errors more than MAE`,
            `RMSE in same units as target`,
            `R² proportion of variance explained`,
            `Use domain-appropriate metrics`
          ]
        },
        {
          id: `confusion`,
          title: `Confusion Matrix`,
          content: `2×2 (or n×n) table of predicted vs actual. Derive all classification metrics from it.

**Why this matters for Model Evaluation Metrics:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Model Evaluation Metrics:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Confusion Matrix" connects to accuracy, precision, recall, f1, roc-auc, mse, r². Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `TN, FP, FN, TP for binary case`,
            `Normalize for class imbalance visualization`,
            `Multi-class extends to n×n matrix`,
            `Cost-sensitive learning weights error types differently`
          ]
        },
        {
          id: `ml-metrics-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Model Evaluation Metrics sits in the **ml** track of the Data Science Master curriculum. Accuracy, precision, recall, F1, ROC-AUC, MSE, R².

Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For ml-metrics, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Model Evaluation Metrics
meta = {"topic_id": "ml-metrics", "track": "ml", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ml-metrics ml beginner`,
          keyPoints: [
            `Core theory of Model Evaluation Metrics ties to the ml track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `ml-metrics-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Model Evaluation Metrics. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ml-metrics, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for ml-metrics
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ml-metrics", "Model Evaluation Metrics")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ml-metrics Model`,
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
          id: `ml-metrics-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Model Evaluation Metrics often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on ml-metrics, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("ml-metrics", "Model Evaluation Metrics")
debug_step("section_count", 4)`,
          output: `[ml-metrics] 'Model Evaluation Metrics' (str)
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
          id: `ml-metrics-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Model Evaluation Metrics shows up wherever ml skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around ml-metrics align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Model Evaluation Metrics
skills = ["ml", "beginner", "ml-metrics"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ml, beginner, ml-metrics`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Model Evaluation Metrics to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-met-1`,
          question: `Compute accuracy for y_true=[1,0,1,1], y_pred=[1,0,0,1].`,
          solution: `from sklearn.metrics import accuracy_score
print(accuracy_score([1,0,1,1], [1,0,0,1]))`,
          difficulty: `easy`
        },
        {
          id: `ex-met-2`,
          question: `Compute MSE for y=[1,2,3], pred=[1.1, 2.2, 2.8].`,
          solution: `from sklearn.metrics import mean_squared_error
print(round(mean_squared_error([1,2,3], [1.1, 2.2, 2.8]), 3))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-10`,
      references: [
        {
          id: `sklearn-metrics`,
          title: `scikit-learn Model Evaluation`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/modules/model_evaluation.html`,
          description: `Accuracy, precision, recall, F1, ROC-AUC, and regression metrics.`
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
          id: `kaggle-intro-ml`,
          title: `Kaggle Learn — Intro to Machine Learning`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/intro-to-machine-learning`,
          description: `Practical first steps with decision trees and model validation.`
        },
        {
          id: `scikit-learn-user-guide`,
          title: `scikit-learn User Guide`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/user_guide.html`,
          description: `Complete reference for ML algorithms, pipelines, and model selection.`
        }
      ]
    },
{
      id: `ml-cv`,
      title: `Cross-Validation & Pipelines`,
      description: `Robust evaluation with k-fold CV and end-to-end pipelines.`,
      level: `beginner`,
      track: `ml`,
      sections: [
        {
          id: `kfold`,
          title: `K-Fold Cross-Validation`,
          content: `Split data into k folds. Train on k-1, validate on 1. Repeat k times. cross_val_score reports mean ± std.

**Why this matters for Cross-Validation & Pipelines:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Cross-Validation & Pipelines:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "K-Fold Cross-Validation" connects to robust evaluation with k-fold cv and end-to-end pipelines. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          example: `from sklearn.model_selection import cross_val_score
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)
scores = cross_val_score(LogisticRegression(max_iter=200), X, y, cv=5)
print(round(scores.mean(), 3), round(scores.std(), 3))`,
          output: `0.967 0.033`,
          keyPoints: [
            `cv=5 or cv=10 common choices`,
            `StratifiedKFold for classification`,
            `Mean score estimates generalization`,
            `Std indicates stability across folds`
          ]
        },
        {
          id: `gridsearch`,
          title: `GridSearchCV`,
          content: `Exhaustive search over hyperparameter grid with cross-validation. Returns best params and score.

**Why this matters for Cross-Validation & Pipelines:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Cross-Validation & Pipelines:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "GridSearchCV" connects to robust evaluation with k-fold cv and end-to-end pipelines. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          example: `from sklearn.model_selection import GridSearchCV
from sklearn.svm import SVC
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)
grid = GridSearchCV(SVC(), {"C": [0.1, 1, 10], "kernel": ["rbf", "linear"]}, cv=3)
grid.fit(X, y)
print(grid.best_params_)`,
          output: `{'C': 1, 'kernel': 'linear'}`,
          keyPoints: [
            `Search space size affects compute cost`,
            `RandomizedSearchCV for large spaces`,
            `Nested CV for unbiased performance estimate`,
            `Never tune on test set`
          ]
        },
        {
          id: `pipeline-cv`,
          title: `Pipeline + CV Together`,
          content: `Pipeline ensures preprocessing refit each fold — prevents data leakage in CV.

**Why this matters for Cross-Validation & Pipelines:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Cross-Validation & Pipelines:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Pipeline + CV Together" connects to robust evaluation with k-fold cv and end-to-end pipelines. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          example: `from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import cross_val_score
from sklearn.datasets import load_iris

pipe = Pipeline([("s", StandardScaler()), ("knn", KNeighborsClassifier())])
X, y = load_iris(return_X_y=True)
print(round(cross_val_score(pipe, X, y, cv=5).mean(), 3))`,
          output: `0.967`,
          keyPoints: [
            `Pipeline + CV prevents preprocessing leakage`,
            `Each fold fits scaler on train fold only`,
            `Same pipeline used for final model training`,
            `joblib.dump saves fitted pipeline`
          ]
        },
        {
          id: `nested`,
          title: `Nested Cross-Validation`,
          content: `Outer loop for evaluation, inner loop for hyperparameter tuning. Unbiased estimate of generalization.

**Why this matters for Cross-Validation & Pipelines:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Cross-Validation & Pipelines:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Nested Cross-Validation" connects to robust evaluation with k-fold cv and end-to-end pipelines. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `Outer CV estimates model performance`,
            `Inner CV selects hyperparameters`,
            `Prevents optimistic bias from tuning on same data`,
            `Computationally expensive but rigorous`
          ]
        },
        {
          id: `ml-cv-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Cross-Validation & Pipelines sits in the **ml** track of the Data Science Master curriculum. Robust evaluation with k-fold CV and end-to-end pipelines.

Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For ml-cv, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Cross-Validation & Pipelines
meta = {"topic_id": "ml-cv", "track": "ml", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ml-cv ml beginner`,
          keyPoints: [
            `Core theory of Cross-Validation & Pipelines ties to the ml track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `ml-cv-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Cross-Validation & Pipelines. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ml-cv, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for ml-cv
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ml-cv", "Cross-Validation & Pipelines")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ml-cv Cross-Validation`,
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
          id: `ml-cv-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Cross-Validation & Pipelines often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on ml-cv, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("ml-cv", "Cross-Validation & Pipelines")
debug_step("section_count", 4)`,
          output: `[ml-cv] 'Cross-Validation & Pipelines' (str)
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
          id: `ml-cv-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Cross-Validation & Pipelines shows up wherever ml skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around ml-cv align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Cross-Validation & Pipelines
skills = ["ml", "beginner", "ml-cv"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ml, beginner, ml-cv`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Cross-Validation & Pipelines to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-cv-1`,
          question: `Run 5-fold cross_val_score on LogisticRegression for iris.`,
          solution: `from sklearn.model_selection import cross_val_score
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import load_iris
X, y = load_iris(return_X_y=True)
print(len(cross_val_score(LogisticRegression(max_iter=200), X, y, cv=5)))`,
          difficulty: `easy`
        },
        {
          id: `ex-cv-2`,
          question: `Build Pipeline with StandardScaler + KNN.`,
          solution: `from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
p = Pipeline([("s", StandardScaler()), ("k", KNeighborsClassifier())])
print(p.steps[1][1].__class__.__name__)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-10`,
      references: [
        {
          id: `sklearn-cross-validation`,
          title: `scikit-learn Cross-Validation`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/modules/cross_validation.html`,
          description: `K-fold, stratified, and nested cross-validation for robust evaluation.`
        },
        {
          id: `sklearn-pipeline`,
          title: `scikit-learn Pipelines`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/modules/compose.html`,
          description: `Chaining transformers and estimators into reproducible workflows.`
        },
        {
          id: `kaggle-intermediate-ml`,
          title: `Kaggle Learn — Intermediate Machine Learning`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/intermediate-machine-learning`,
          description: `Missing values, categorical variables, and pipeline best practices.`
        },
        {
          id: `scikit-learn-user-guide`,
          title: `scikit-learn User Guide`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/user_guide.html`,
          description: `Complete reference for ML algorithms, pipelines, and model selection.`
        }
      ]
    }
];
