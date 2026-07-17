import type { Topic } from '../../types';

export const module13Topics: Topic[] = [
{
      id: `ml-scaling`,
      title: `Feature Scaling & Encoding`,
      description: `Prepare features for ML algorithms.`,
      level: `advanced`,
      track: `ml`,
      sections: [
        {
          id: `scaling`,
          title: `Scaling Methods`,
          content: `StandardScaler: zero mean unit variance. MinMaxScaler: [0,1] range. RobustScaler: uses median/IQR, robust to outliers.

**Why this matters for Feature Scaling & Encoding:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Feature Scaling & Encoding:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Scaling Methods" connects to prepare features for ml algorithms. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          example: `from sklearn.preprocessing import StandardScaler
import numpy as np

X = np.array([[1], [2], [3], [4], [100]])
scaled = StandardScaler().fit_transform(X)
print(scaled.flatten().round(2))`,
          keyPoints: [
            `Required for SVM, KNN, neural networks, PCA`,
            `Tree models invariant to scaling`,
            `Fit scaler on train only`,
            `RobustScaler for outlier-heavy data`
          ]
        },
        {
          id: `encoding`,
          title: `Categorical Encoding`,
          content: `OneHotEncoder for nominal categories. OrdinalEncoder for ordered categories. Target encoding for high cardinality.

**Why this matters for Feature Scaling & Encoding:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Feature Scaling & Encoding:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Categorical Encoding" connects to prepare features for ml algorithms. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          example: `from sklearn.preprocessing import OneHotEncoder
import numpy as np

cats = np.array([["red"], ["blue"], ["green"], ["red"]])
enc = OneHotEncoder(sparse_output=False).fit_transform(cats)
print(enc)`,
          keyPoints: [
            `One-hot for nominal — no ordinal assumption`,
            `drop="first" avoids multicollinearity`,
            `Target encoding risks leakage — use CV`,
            `Embedding layers for high cardinality in DL`
          ]
        },
        {
          id: `binning`,
          title: `Binning & Discretization`,
          content: `KBinsDiscretizer converts continuous to ordinal bins. Can capture non-linear relationships for linear models.

**Why this matters for Feature Scaling & Encoding:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Feature Scaling & Encoding:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Binning & Discretization" connects to prepare features for ml algorithms. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `Equal-width vs equal-frequency binning`,
            `Can improve linear model performance`,
            `Risk of losing information`,
            `Domain-driven bin boundaries often best`
          ]
        },
        {
          id: `datetime-fe`,
          title: `Datetime Feature Engineering`,
          content: `Extract hour, day, month, is_weekend, cyclical encoding (sin/cos). Critical for time series and transactional data.

**Why this matters for Feature Scaling & Encoding:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Feature Scaling & Encoding:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Datetime Feature Engineering" connects to prepare features for ml algorithms. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          example: `import pandas as pd
import numpy as np

df = pd.DataFrame({"hour": [0, 6, 12, 18]})
df["hour_sin"] = np.sin(2 * np.pi * df["hour"] / 24)
df["hour_cos"] = np.cos(2 * np.pi * df["hour"] / 24)
print(df.iloc[0].round(3).tolist())`,
          keyPoints: [
            `Cyclical encoding preserves continuity at boundaries`,
            `Hour 23 and hour 0 are close with sin/cos`,
            `Extract domain-relevant time features`,
            `Lag features capture temporal dependencies`
          ]
        },
        {
          id: `ml-scaling-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Feature Scaling & Encoding sits in the **ml** track of the Data Science Master curriculum. Prepare features for ML algorithms.

Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For ml-scaling, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Feature Scaling & Encoding
meta = {"topic_id": "ml-scaling", "track": "ml", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ml-scaling ml advanced`,
          keyPoints: [
            `Core theory of Feature Scaling & Encoding ties to the ml track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `ml-scaling-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Feature Scaling & Encoding. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ml-scaling, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for ml-scaling
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ml-scaling", "Feature Scaling & Encoding")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ml-scaling Feature`,
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
          id: `ml-scaling-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Feature Scaling & Encoding often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on ml-scaling, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("ml-scaling", "Feature Scaling & Encoding")
debug_step("section_count", 4)`,
          output: `[ml-scaling] 'Feature Scaling & Encoding' (str)
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
          id: `ml-scaling-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Feature Scaling & Encoding shows up wherever ml skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around ml-scaling align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Feature Scaling & Encoding
skills = ["ml", "advanced", "ml-scaling"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ml, advanced, ml-scaling`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Feature Scaling & Encoding to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-scale-1`,
          question: `StandardScale [1,2,3,4,5] and print mean of result.`,
          solution: `from sklearn.preprocessing import StandardScaler
import numpy as np
s = StandardScaler().fit_transform([[1],[2],[3],[4],[5]])
print(round(s.mean(), 10))`,
          difficulty: `easy`
        },
        {
          id: `ex-scale-2`,
          question: `One-hot encode [["A"],["B"],["A"]].`,
          solution: `from sklearn.preprocessing import OneHotEncoder
print(OneHotEncoder(sparse_output=False).fit_transform([["A"],["B"],["A"]]))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-13`,
      references: [
        {
          id: `sklearn-preprocessing`,
          title: `scikit-learn Preprocessing`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/modules/preprocessing.html`,
          description: `Scaling, encoding, imputation, and feature transformation utilities.`
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
    },
{
      id: `ml-feature-sel`,
      title: `Feature Selection`,
      description: `Choose most informative features to reduce dimensionality and overfitting.`,
      level: `advanced`,
      track: `ml`,
      sections: [
        {
          id: `filter`,
          title: `Filter Methods`,
          content: `Select features by statistical test independent of model. SelectKBest, chi2, mutual_info_classif, f_classif.

**Why this matters for Feature Selection:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Feature Selection:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Filter Methods" connects to choose most informative features to reduce dimensionality and overfitting. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          example: `from sklearn.feature_selection import SelectKBest, f_classif
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)
X_selected = SelectKBest(f_classif, k=2).fit_transform(X, y)
print(X_selected.shape)`,
          output: `(150, 2)`,
          keyPoints: [
            `Fast — no model training needed`,
            `Chi2 requires non-negative features`,
            `Mutual information captures non-linear relationships`,
            `Correlation filter removes redundant features`
          ]
        },
        {
          id: `wrapper`,
          title: `Wrapper Methods`,
          content: `RFE (Recursive Feature Elimination) trains model and removes least important features iteratively.

**Why this matters for Feature Selection:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Feature Selection:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Wrapper Methods" connects to choose most informative features to reduce dimensionality and overfitting. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          example: `from sklearn.feature_selection import RFE
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)
rfe = RFE(LogisticRegression(max_iter=200), n_features_to_select=2).fit(X, y)
print(rfe.support_)`,
          keyPoints: [
            `Model-dependent selection`,
            `RFE computationally expensive`,
            `Finds optimal subset for specific model`,
            `RFECV uses cross-validation for k`
          ]
        },
        {
          id: `embedded`,
          title: `Embedded Methods`,
          content: `Feature selection during model training. Lasso zeroes coefficients. Tree feature_importances_.

**Why this matters for Feature Selection:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Feature Selection:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Embedded Methods" connects to choose most informative features to reduce dimensionality and overfitting. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `L1 regularization built-in feature selection`,
            `Tree importance from split gain`,
            `SelectFromModel wraps any importance-based selector`,
            `Embedded methods most practical for production`
          ]
        },
        {
          id: `importance`,
          title: `Permutation Importance`,
          content: `Shuffle feature values and measure performance drop. Model-agnostic, detects features model relies on.

**Why this matters for Feature Selection:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Feature Selection:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Permutation Importance" connects to choose most informative features to reduce dimensionality and overfitting. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `More reliable than tree default importance`,
            `Computes drop in validation metric`,
            `Detects features used for splits but not predictive`,
            `sklearn.inspection.permutation_importance`
          ]
        },
        {
          id: `ml-feature-sel-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Feature Selection sits in the **ml** track of the Data Science Master curriculum. Choose most informative features to reduce dimensionality and overfitting.

Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For ml-feature-sel, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Feature Selection
meta = {"topic_id": "ml-feature-sel", "track": "ml", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ml-feature-sel ml advanced`,
          keyPoints: [
            `Core theory of Feature Selection ties to the ml track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `ml-feature-sel-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Feature Selection. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ml-feature-sel, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for ml-feature-sel
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ml-feature-sel", "Feature Selection")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ml-feature-sel Feature`,
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
          id: `ml-feature-sel-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Feature Selection often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on ml-feature-sel, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("ml-feature-sel", "Feature Selection")
debug_step("section_count", 4)`,
          output: `[ml-feature-sel] 'Feature Selection' (str)
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
          id: `ml-feature-sel-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Feature Selection shows up wherever ml skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around ml-feature-sel align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Feature Selection
skills = ["ml", "advanced", "ml-feature-sel"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ml, advanced, ml-feature-sel`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Feature Selection to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-fsel-1`,
          question: `Select top 2 features from iris with SelectKBest.`,
          solution: `from sklearn.feature_selection import SelectKBest, f_classif
from sklearn.datasets import load_iris
X, y = load_iris(return_X_y=True)
print(SelectKBest(f_classif, k=2).fit_transform(X, y).shape[1])`,
          difficulty: `easy`
        },
        {
          id: `ex-fsel-2`,
          question: `Get RFE support mask selecting 1 feature from iris.`,
          solution: `from sklearn.feature_selection import RFE
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import load_iris
X, y = load_iris(return_X_y=True)
print(sum(RFE(LogisticRegression(max_iter=200), n_features_to_select=1).fit(X, y).support_))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-13`,
      references: [
        {
          id: `sklearn-feature-selection`,
          title: `scikit-learn Feature Selection`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/modules/feature_selection.html`,
          description: `Filter, wrapper, and embedded methods for selecting informative features.`
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
          id: `sklearn-preprocessing`,
          title: `scikit-learn Preprocessing`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/modules/preprocessing.html`,
          description: `Scaling, encoding, imputation, and feature transformation utilities.`
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
      id: `ml-hyperparam`,
      title: `Hyperparameter Tuning`,
      description: `Systematic search for optimal model configuration.`,
      level: `advanced`,
      track: `ml`,
      sections: [
        {
          id: `grid`,
          title: `Grid Search`,
          content: `Exhaustive search over parameter grid. GridSearchCV with cv for robust evaluation.

**Why this matters for Hyperparameter Tuning:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Hyperparameter Tuning:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Grid Search" connects to systematic search for optimal model configuration. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          example: `from sklearn.model_selection import GridSearchCV
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)
grid = GridSearchCV(RandomForestClassifier(random_state=42), {"n_estimators": [50, 100], "max_depth": [3, 5, None]}, cv=3)
grid.fit(X, y)
print(grid.best_score_.round(3))`,
          keyPoints: [
            `Exhaustive — expensive for large grids`,
            `Define sensible search ranges`,
            `Parallelize with n_jobs=-1`,
            `Refit best model on full training data`
          ]
        },
        {
          id: `random`,
          title: `Random Search`,
          content: `RandomizedSearchCV samples from distributions. Often finds good params faster than grid search (Bergstra & Bengio, 2012).

**Why this matters for Hyperparameter Tuning:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Hyperparameter Tuning:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Random Search" connects to systematic search for optimal model configuration. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `Sample from log-uniform for learning rates`,
            `n_iter controls number of trials`,
            `More efficient exploration of large spaces`,
            `Optuna/Hyperopt for advanced optimization`
          ]
        },
        {
          id: `optuna`,
          title: `Bayesian Optimization`,
          content: `Optuna, Hyperopt use past trials to guide search. TPE sampler models good regions. State-of-the-art for DL hyperparameter tuning.

**Why this matters for Hyperparameter Tuning:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Hyperparameter Tuning:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Bayesian Optimization" connects to systematic search for optimal model configuration. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `Bayesian methods learn from previous trials`,
            `Optuna easy API with pruning`,
            `Define objective function returning metric`,
            `Used extensively in DL and Kaggle`
          ]
        },
        {
          id: `avoid-leakage`,
          title: `Avoiding Tuning Leakage`,
          content: `Never peek at test set during tuning. Use nested CV or separate validation set. Report final metric on held-out test only once.

**Why this matters for Hyperparameter Tuning:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Hyperparameter Tuning:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Avoiding Tuning Leakage" connects to systematic search for optimal model configuration. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `Test set touched only once at end`,
            `Validation set or CV for all tuning decisions`,
            `Data leakage inflates reported performance`,
            `Document all tuning choices for reproducibility`
          ]
        },
        {
          id: `ml-hyperparam-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Hyperparameter Tuning sits in the **ml** track of the Data Science Master curriculum. Systematic search for optimal model configuration.

Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For ml-hyperparam, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Hyperparameter Tuning
meta = {"topic_id": "ml-hyperparam", "track": "ml", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ml-hyperparam ml advanced`,
          keyPoints: [
            `Core theory of Hyperparameter Tuning ties to the ml track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `ml-hyperparam-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Hyperparameter Tuning. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ml-hyperparam, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for ml-hyperparam
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ml-hyperparam", "Hyperparameter Tuning")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ml-hyperparam Hyperparameter`,
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
          id: `ml-hyperparam-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Hyperparameter Tuning often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on ml-hyperparam, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("ml-hyperparam", "Hyperparameter Tuning")
debug_step("section_count", 4)`,
          output: `[ml-hyperparam] 'Hyperparameter Tuning' (str)
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
          id: `ml-hyperparam-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Hyperparameter Tuning shows up wherever ml skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around ml-hyperparam align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Hyperparameter Tuning
skills = ["ml", "advanced", "ml-hyperparam"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ml, advanced, ml-hyperparam`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Hyperparameter Tuning to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-hp-1`,
          question: `GridSearch RandomForest n_estimators=[10,50] on iris, print best n.`,
          solution: `from sklearn.model_selection import GridSearchCV
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris
X, y = load_iris(return_X_y=True)
g = GridSearchCV(RandomForestClassifier(random_state=42), {"n_estimators": [10, 50]}, cv=3).fit(X, y)
print(g.best_params_["n_estimators"])`,
          difficulty: `medium`
        },
        {
          id: `ex-hp-2`,
          question: `Explain why random search can beat grid search in one line.`,
          solution: `print("Random search explores more distinct values per parameter when some matter more")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-13`,
      references: [
        {
          id: `sklearn-grid-search`,
          title: `scikit-learn Hyperparameter Tuning`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/modules/grid_search.html`,
          description: `GridSearchCV and RandomizedSearchCV for systematic hyperparameter optimization.`
        },
        {
          id: `sklearn-cross-validation`,
          title: `scikit-learn Cross-Validation`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/modules/cross_validation.html`,
          description: `K-fold, stratified, and nested cross-validation for robust evaluation.`
        },
        {
          id: `scikit-learn-user-guide`,
          title: `scikit-learn User Guide`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/user_guide.html`,
          description: `Complete reference for ML algorithms, pipelines, and model selection.`
        },
        {
          id: `kaggle-intermediate-ml`,
          title: `Kaggle Learn — Intermediate Machine Learning`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/intermediate-machine-learning`,
          description: `Missing values, categorical variables, and pipeline best practices.`
        }
      ]
    },
{
      id: `ml-bias-variance`,
      title: `Bias-Variance Tradeoff`,
      description: `Understanding underfitting and overfitting.`,
      level: `advanced`,
      track: `ml`,
      sections: [
        {
          id: `tradeoff`,
          title: `The Tradeoff`,
          content: `Bias: error from wrong assumptions (underfitting). Variance: error from sensitivity to training data (overfitting). Total error = bias² + variance + irreducible noise.

**Why this matters for Bias-Variance Tradeoff:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Bias-Variance Tradeoff:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "The Tradeoff" connects to understanding underfitting and overfitting. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `Simple models: high bias, low variance`,
            `Complex models: low bias, high variance`,
            `Goal: minimize total error not just training error`,
            `Irreducible error from inherent noise in data`
          ]
        },
        {
          id: `learning-curves`,
          title: `Learning Curves`,
          content: `Plot train/validation score vs training set size. High bias: both low. High variance: large gap between train and val.

**Why this matters for Bias-Variance Tradeoff:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Bias-Variance Tradeoff:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Learning Curves" connects to understanding underfitting and overfitting. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          example: `from sklearn.model_selection import learning_curve
from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import load_iris
import numpy as np

X, y = load_iris(return_X_y=True)
train_sizes, train_scores, val_scores = learning_curve(
    DecisionTreeClassifier(max_depth=None), X, y, cv=3, train_sizes=np.linspace(0.1, 1.0, 5))
print(train_scores.mean(axis=1).round(3))`,
          keyPoints: [
            `Learning curves diagnose bias/variance`,
            `Converging curves suggest more data wont help (bias)`,
            `Diverging curves benefit from more data`,
            `validation_curve for hyperparameter diagnosis`
          ]
        },
        {
          id: `regularization-bv`,
          title: `Regularization Effects`,
          content: `Regularization increases bias slightly but reduces variance dramatically. Sweet spot via cross-validation.

**Why this matters for Bias-Variance Tradeoff:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Bias-Variance Tradeoff:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Regularization Effects" connects to understanding underfitting and overfitting. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `L2 ridge increases bias, reduces variance`,
            `Early stopping is implicit regularization`,
            `Dropout reduces co-adaptation (variance)`,
            `Ensemble methods reduce variance`
          ]
        },
        {
          id: `double-descent`,
          title: `Double Descent`,
          content: `Modern overparameterized models can exhibit double descent — error decreases, increases, then decreases again beyond interpolation threshold.

**Why this matters for Bias-Variance Tradeoff:** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Bias-Variance Tradeoff:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Double Descent" connects to understanding underfitting and overfitting. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `Classical U-curve bias-variance tradeoff`,
            `Double descent in overparameterized regime`,
            `Explains why huge models can generalize`,
            `Active research area in ML theory`
          ]
        },
        {
          id: `ml-bias-variance-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Bias-Variance Tradeoff sits in the **ml** track of the Data Science Master curriculum. Understanding underfitting and overfitting.

Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For ml-bias-variance, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Bias-Variance Tradeoff
meta = {"topic_id": "ml-bias-variance", "track": "ml", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ml-bias-variance ml advanced`,
          keyPoints: [
            `Core theory of Bias-Variance Tradeoff ties to the ml track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `ml-bias-variance-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Bias-Variance Tradeoff. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ml-bias-variance, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for ml-bias-variance
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ml-bias-variance", "Bias-Variance Tradeoff")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ml-bias-variance Bias-Variance`,
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
          id: `ml-bias-variance-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Bias-Variance Tradeoff often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on ml-bias-variance, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("ml-bias-variance", "Bias-Variance Tradeoff")
debug_step("section_count", 4)`,
          output: `[ml-bias-variance] 'Bias-Variance Tradeoff' (str)
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
          id: `ml-bias-variance-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Bias-Variance Tradeoff shows up wherever ml skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around ml-bias-variance align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Bias-Variance Tradeoff
skills = ["ml", "advanced", "ml-bias-variance"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ml, advanced, ml-bias-variance`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Bias-Variance Tradeoff to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-bv-1`,
          question: `High training acc 99%, val acc 60% — diagnose over or underfitting?`,
          solution: `diagnosis = "overfitting (high variance)"
print(diagnosis)`,
          difficulty: `easy`
        },
        {
          id: `ex-bv-2`,
          question: `Both train and val accuracy 55% on binary task — diagnose.`,
          solution: `print("underfitting (high bias) or insufficient features")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-13`,
      references: [
        {
          id: `ml-bias-variance-tradeoff`,
          title: `Understanding the Bias-Variance Tradeoff`,
          source: `mlu.explain`,
          type: `documentation`,
          url: `https://mlu-explain.github.io/bias-variance/`,
          description: `Interactive explanation of underfitting, overfitting, and model complexity.`
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
      id: `ml-interpret`,
      title: `Model Interpretability (SHAP, LIME)`,
      description: `Explain model predictions for trust and debugging.`,
      level: `advanced`,
      track: `ml`,
      sections: [
        {
          id: `shap`,
          title: `SHAP Values`,
          content: `SHapley Additive exPlanations: fair allocation of prediction to each feature based on game theory. shap.TreeExplainer for tree models.

**Why this matters for Model Interpretability (SHAP, LIME):** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Model Interpretability (SHAP, LIME):** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "SHAP Values" connects to explain model predictions for trust and debugging. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          example: `import shap
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)
model = RandomForestClassifier(n_estimators=50, random_state=42).fit(X, y)
explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X[:5])
print(len(shap_values))`,
          keyPoints: [
            `SHAP values sum to prediction minus base rate`,
            `Consistent and locally accurate explanations`,
            `TreeExplainer exact and fast for trees`,
            `Summary plots show global feature importance`
          ]
        },
        {
          id: `lime`,
          title: `LIME`,
          content: `Local Interpretable Model-agnostic Explanations. Perturb input, observe prediction changes, fit simple local model.

**Why this matters for Model Interpretability (SHAP, LIME):** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Model Interpretability (SHAP, LIME):** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "LIME" connects to explain model predictions for trust and debugging. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `Model-agnostic — works on any black box`,
            `Local fidelity not global accuracy`,
            `Tabular, text, and image explanations`,
            `LIME can be unstable across runs`
          ]
        },
        {
          id: `global`,
          title: `Global vs Local Interpretability`,
          content: `Global: overall feature importance (permutation, SHAP summary). Local: why this specific prediction (SHAP force plot, LIME).

**Why this matters for Model Interpretability (SHAP, LIME):** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Model Interpretability (SHAP, LIME):** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Global vs Local Interpretability" connects to explain model predictions for trust and debugging. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `Global for model understanding and feature selection`,
            `Local for individual decision audit`,
            `Partial dependence plots show marginal effects`,
            `ICE plots show heterogeneous effects`
          ]
        },
        {
          id: `fairness`,
          title: `Interpretability for Fairness`,
          content: `Explainability required for regulated domains. Detect proxy discrimination through feature importance analysis.

**Why this matters for Model Interpretability (SHAP, LIME):** These concepts appear throughout Stanford CS229 and MIT 6.036-style curricula. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Model Interpretability (SHAP, LIME):** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems. The section "Interpretability for Fairness" connects to explain model predictions for trust and debugging. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.…`,
          keyPoints: [
            `GDPR right to explanation in EU`,
            `Check if protected attributes drive predictions`,
            `Proxy variables encode protected information`,
            `Interpretability necessary not sufficient for fairness`
          ]
        },
        {
          id: `ml-interpret-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Model Interpretability (SHAP, LIME) sits in the **ml** track of the Data Science Master curriculum. Explain model predictions for trust and debugging.

Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For ml-interpret, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Model Interpretability (SHAP, LIME)
meta = {"topic_id": "ml-interpret", "track": "ml", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ml-interpret ml advanced`,
          keyPoints: [
            `Core theory of Model Interpretability (SHAP, LIME) ties to the ml track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `ml-interpret-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Model Interpretability (SHAP, LIME). Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ml-interpret, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for ml-interpret
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ml-interpret", "Model Interpretability (SHAP, LIME)")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ml-interpret Model`,
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
          id: `ml-interpret-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Model Interpretability (SHAP, LIME) often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on ml-interpret, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("ml-interpret", "Model Interpretability (SHAP, LIME)")
debug_step("section_count", 4)`,
          output: `[ml-interpret] 'Model Interpretability (SHAP, LIME)' (str)
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
          id: `ml-interpret-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Model Interpretability (SHAP, LIME) shows up wherever ml skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around ml-interpret align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Model Interpretability (SHAP, LIME)
skills = ["ml", "advanced", "ml-interpret"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ml, advanced, ml-interpret`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Model Interpretability (SHAP, LIME) to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-shap-1`,
          question: `Train RandomForest on iris and get feature_importances_ sum.`,
          solution: `from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris
X, y = load_iris(return_X_y=True)
rf = RandomForestClassifier(random_state=42).fit(X, y)
print(round(rf.feature_importances_.sum(), 2))`,
          difficulty: `easy`
        },
        {
          id: `ex-shap-2`,
          question: `Name two interpretability methods.`,
          solution: `print(["SHAP", "LIME"])`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-13`,
      references: [
        {
          id: `shap-docs`,
          title: `SHAP Documentation`,
          source: `SHAP`,
          type: `documentation`,
          url: `https://shap.readthedocs.io/en/latest/`,
          description: `Unified framework for explaining model predictions with Shapley values.`
        },
        {
          id: `lime-paper`,
          title: `"Why Should I Trust You?" — Explaining Predictions (LIME)`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1602.04938`,
          description: `Local interpretable model-agnostic explanations for any classifier.`
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
          id: `fairlearn-docs`,
          title: `Fairlearn Documentation`,
          source: `Fairlearn`,
          type: `documentation`,
          url: `https://fairlearn.org/main/user_guide/index.html`,
          description: `Assessing and mitigating unfairness in machine learning models.`
        }
      ]
    }
];
