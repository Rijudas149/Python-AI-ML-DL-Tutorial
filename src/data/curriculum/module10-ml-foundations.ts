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
          content: `**The ML Workflow** follows 9 disciplined stages. Each step builds on the previous — skipping early stages leads to unreliable results later.

**Step-by-step workflow:**

1. **Define problem** — Clarify the business question, success metric, and constraints before touching data or models.
2. **Collect data** — Gather representative data with documented provenance, consent, and versioning.
3. **EDA** — Explore distributions, missingness, correlations, and outliers to guide cleaning and features.
4. **Feature engineering** — Transform raw columns into informative signals while avoiding leakage from future information.
5. **Model selection** — Select algorithms suited to the problem type, data size, and interpretability requirements.
6. **Train** — Fit parameters on training data with proper cross-validation and reproducible seeds.
7. **Evaluate** — Measure generalization on held-out data using metrics aligned to business goals.
8. **Deploy** — Package the model with monitoring, rollback plans, and latency/cost budgets.
9. **Monitor** — Track drift, performance decay, and data quality in production over time.

Treat this as a loop, not a straight line: insights from evaluation and monitoring often send you back to EDA or feature engineering.`,
          keyPoints: [
            `Start with problem definition not algorithms`,
            `Data quality determines ceiling performance`,
            `Always hold out test set until final evaluation`,
            `Iterate between EDA and feature engineering`,
            `The ML Workflow is a foundational piece of ML Workflow & train_test_split`,
            `Connect this section to the ml track and beginner expectations`
          ],
          example: `# Concept check: The ML Workflow
meta = {
    "topic": "ml-workflow",
    "section": "pipeline",
    "track": "ml",
    "level": "beginner",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ml-workflow
section: pipeline
track: ml
level: beginner`,
          pseudoCode: `CONCEPT: The ML Workflow

Study checklist:
  1. Start with problem definition not algorithms
  2. Data quality determines ceiling performance
  3. Always hold out test set until final evaluation
  4. Iterate between EDA and feature engineering
  5. The ML Workflow is a foundational piece of ML Workflow & train_test_split
  6. Connect this section to the ml track and beginner expectations

Topic: ML Workflow & train_test_split
Track: ml | Level: beginner`
        },
        {
          id: `split`,
          title: `train_test_split`,
          content: `**train_test_split** — what you need to know:

- **Core idea:** End-to-end machine learning pipeline with scikit-learn.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Split data into train/validation/test. sklearn: train_test_split(X, y, test_size=0.2, random_state=42, stratify=y).

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **train_test_split** directly affects how confidently you can build, debug, and ship ml projects.
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
            `Typical split: 70-80% train, 20-30% test`,
            `train_test_split is a foundational piece of ML Workflow & train_test_split`,
            `Connect this section to the ml track and beginner expectations`
          ],
          pseudoCode: `CONCEPT: train_test_split

Study checklist:
  1. Never train on test data — data leakage
  2. stratify preserves class proportions
  3. random_state for reproducibility
  4. Typical split: 70-80% train, 20-30% test
  5. train_test_split is a foundational piece of ML Workflow & train_test_split
  6. Connect this section to the ml track and beginner expectations

Topic: ML Workflow & train_test_split
Track: ml | Level: beginner`
        },
        {
          id: `preprocessing`,
          title: `Preprocessing Pipeline`,
          content: `**Preprocessing Pipeline** — what you need to know:

- **Core idea:** End-to-end machine learning pipeline with scikit-learn.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

StandardScaler, OneHotEncoder, Pipeline class chains preprocessing + model. Prevents leakage by fitting on train only.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Preprocessing Pipeline** directly affects how confidently you can build, debug, and ship ml projects.
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
            `Preprocessing choices affect model performance`,
            `Preprocessing Pipeline is a foundational piece of ML Workflow & train_test_split`,
            `Connect this section to the ml track and beginner expectations`
          ],
          pseudoCode: `CONCEPT: Preprocessing Pipeline

Study checklist:
  1. Fit preprocessor on training data only
  2. Pipeline ensures consistent train/test processing
  3. ColumnTransformer for mixed feature types
  4. Preprocessing choices affect model performance
  5. Preprocessing Pipeline is a foundational piece of ML Workflow & train_test_split
  6. Connect this section to the ml track and beginner expectations

Topic: ML Workflow & train_test_split
Track: ml | Level: beginner`
        },
        {
          id: `baseline`,
          title: `Baseline Models`,
          content: `**Baseline Models** — what you need to know:

- **Core idea:** End-to-end machine learning pipeline with scikit-learn.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Always establish baseline before complex models. Mean predictor for regression, majority class for classification. Beat baseline first.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Baseline Models** directly affects how confidently you can build, debug, and ship ml projects.
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
            `DummyClassifier/DummyRegressor for baselines`,
            `Baseline sets minimum acceptable performance`,
            `Simple models often competitive with complex ones`,
            `Occams razor — prefer simpler when equal performance`,
            `Baseline Models is a foundational piece of ML Workflow & train_test_split`,
            `Connect this section to the ml track and beginner expectations`
          ],
          example: `# Concept check: Baseline Models
meta = {
    "topic": "ml-workflow",
    "section": "baseline",
    "track": "ml",
    "level": "beginner",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ml-workflow
section: baseline
track: ml
level: beginner`,
          pseudoCode: `CONCEPT: Baseline Models

Study checklist:
  1. DummyClassifier/DummyRegressor for baselines
  2. Baseline sets minimum acceptable performance
  3. Simple models often competitive with complex ones
  4. Occams razor — prefer simpler when equal performance
  5. Baseline Models is a foundational piece of ML Workflow & train_test_split
  6. Connect this section to the ml track and beginner expectations

Topic: ML Workflow & train_test_split
Track: ml | Level: beginner`
        },
        {
          id: `ml-workflow-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**ML Workflow & train_test_split** sits in the **ml** track of the Data Science Master curriculum. End-to-end machine learning pipeline with scikit-learn.

**Theoretical foundation:**

- Learning algorithms minimize expected risk on unseen data.
- Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For **ml-workflow**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the beginner level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
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
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of ML Workflow & train_test_split ties to the ml track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: ML Workflow & train_test_split
Track: ml | Level: beginner`
        },
        {
          id: `ml-workflow-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **ML Workflow & train_test_split**. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **ml-workflow**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
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
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with ml ecosystem conventions

Topic: ML Workflow & train_test_split
Track: ml | Level: beginner`
        },
        {
          id: `ml-workflow-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **ML Workflow & train_test_split** often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on **ml-workflow**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: ML Workflow & train_test_split
Track: ml | Level: beginner`
        },
        {
          id: `ml-workflow-real-world`,
          title: `Real-World Applications`,
          content: `**ML Workflow & train_test_split** shows up wherever **ml** skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around **ml-workflow** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
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
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect ML Workflow & train_test_split to adjacent topics in the same track

Topic: ML Workflow & train_test_split
Track: ml | Level: beginner`
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
      estimatedMinutes: 124,
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
          content: `**Linear Regression** — what you need to know:

- **Core idea:** Foundation supervised learning algorithms.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

ŷ = wᵀx + b. Minimizes MSE. sklearn: LinearRegression(). Closed-form or iterative solution.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Linear Regression** directly affects how confidently you can build, debug, and ship ml projects.
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
            `Ridge/Lasso add regularization`,
            `Linear Regression is a foundational piece of Linear & Logistic Regression`,
            `Connect this section to the ml track and beginner expectations`
          ],
          pseudoCode: `CONCEPT: Linear Regression

Study checklist:
  1. Assumes linear relationship
  2. Interpretable coefficients
  3. Sensitive to outliers — use HuberRegressor
  4. Ridge/Lasso add regularization
  5. Linear Regression is a foundational piece of Linear & Logistic Regression
  6. Connect this section to the ml track and beginner expectations

Topic: Linear & Logistic Regression
Track: ml | Level: beginner`
        },
        {
          id: `logistic`,
          title: `Logistic Regression`,
          content: `**Logistic Regression** — what you need to know:

- **Core idea:** Foundation supervised learning algorithms.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Predicts P(y=1|x) via sigmoid: σ(wᵀx). Despite name, is classification algorithm. sklearn: LogisticRegression().

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Logistic Regression** directly affects how confidently you can build, debug, and ship ml projects.
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
            `C parameter controls regularization strength`,
            `Logistic Regression is a foundational piece of Linear & Logistic Regression`,
            `Connect this section to the ml track and beginner expectations`
          ],
          pseudoCode: `CONCEPT: Logistic Regression

Study checklist:
  1. Outputs probabilities not just labels
  2. Uses cross-entropy loss internally
  3. Works well with linearly separable data
  4. C parameter controls regularization strength
  5. Logistic Regression is a foundational piece of Linear & Logistic Regression
  6. Connect this section to the ml track and beginner expectations

Topic: Linear & Logistic Regression
Track: ml | Level: beginner`
        },
        {
          id: `sigmoid`,
          title: `Sigmoid & Softmax`,
          content: `**Sigmoid & Softmax** — what you need to know:

- **Core idea:** Foundation supervised learning algorithms.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Sigmoid: σ(z) = 1/(1+e⁻ᶻ). Maps to (0,1). Softmax generalizes to multi-class: softmax(zᵢ) = e^zᵢ/Σe^zⱼ.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Sigmoid & Softmax** directly affects how confidently you can build, debug, and ship ml projects.
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
          example: `import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

print([round(sigmoid(x), 3) for x in [-2, 0, 2]])`,
          output: `[0.119, 0.5, 0.881]`,
          keyPoints: [
            `Sigmoid squashes to probability range`,
            `Softmax outputs sum to 1`,
            `Decision boundary at 0.5 for binary`,
            `Logistic regression learns linear decision boundary`,
            `Sigmoid & Softmax is a foundational piece of Linear & Logistic Regression`,
            `Connect this section to the ml track and beginner expectations`
          ],
          pseudoCode: `CONCEPT: Sigmoid & Softmax

Study checklist:
  1. Sigmoid squashes to probability range
  2. Softmax outputs sum to 1
  3. Decision boundary at 0.5 for binary
  4. Logistic regression learns linear decision boundary
  5. Sigmoid & Softmax is a foundational piece of Linear & Logistic Regression
  6. Connect this section to the ml track and beginner expectations

Topic: Linear & Logistic Regression
Track: ml | Level: beginner`
        },
        {
          id: `interpret`,
          title: `Interpretability`,
          content: `**Interpretability** — what you need to know:

- **Core idea:** Foundation supervised learning algorithms.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Coefficients show feature importance and direction. Odds ratio = e^coefficient. SHAP values for individual predictions.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Interpretability** directly affects how confidently you can build, debug, and ship ml projects.
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
            `Positive coefficient increases log-odds of class 1`,
            `Feature scaling needed for coefficient comparison`,
            `Regularization shrinks coefficients toward zero`,
            `Linear models preferred when interpretability required`,
            `Interpretability is a foundational piece of Linear & Logistic Regression`,
            `Connect this section to the ml track and beginner expectations`
          ],
          example: `# Concept check: Interpretability
meta = {
    "topic": "ml-linear",
    "section": "interpret",
    "track": "ml",
    "level": "beginner",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ml-linear
section: interpret
track: ml
level: beginner`,
          pseudoCode: `CONCEPT: Interpretability

Study checklist:
  1. Positive coefficient increases log-odds of class 1
  2. Feature scaling needed for coefficient comparison
  3. Regularization shrinks coefficients toward zero
  4. Linear models preferred when interpretability required
  5. Interpretability is a foundational piece of Linear & Logistic Regression
  6. Connect this section to the ml track and beginner expectations

Topic: Linear & Logistic Regression
Track: ml | Level: beginner`
        },
        {
          id: `ml-linear-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Linear & Logistic Regression** sits in the **ml** track of the Data Science Master curriculum. Foundation supervised learning algorithms.

**Theoretical foundation:**

- Learning algorithms minimize expected risk on unseen data.
- Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For **ml-linear**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the beginner level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
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
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Linear & Logistic Regression ties to the ml track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Linear & Logistic Regression
Track: ml | Level: beginner`
        },
        {
          id: `ml-linear-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Linear & Logistic Regression**. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **ml-linear**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
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
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with ml ecosystem conventions

Topic: Linear & Logistic Regression
Track: ml | Level: beginner`
        },
        {
          id: `ml-linear-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Linear & Logistic Regression** often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on **ml-linear**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: Linear & Logistic Regression
Track: ml | Level: beginner`
        },
        {
          id: `ml-linear-real-world`,
          title: `Real-World Applications`,
          content: `**Linear & Logistic Regression** shows up wherever **ml** skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around **ml-linear** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
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
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Linear & Logistic Regression to adjacent topics in the same track

Topic: Linear & Logistic Regression
Track: ml | Level: beginner`
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
      estimatedMinutes: 124,
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
          content: `**Decision Trees** — what you need to know:

- **Core idea:** Tree-based models for classification and regression.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Split data by feature thresholds maximizing information gain. Non-parametric, handles non-linear relationships. Prone to overfitting.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Decision Trees** directly affects how confidently you can build, debug, and ship ml projects.
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
            `Fully interpretable — can visualize tree`,
            `Decision Trees is a foundational piece of Decision Trees & Random Forests`,
            `Connect this section to the ml track and beginner expectations`
          ],
          pseudoCode: `CONCEPT: Decision Trees

Study checklist:
  1. max_depth controls complexity
  2. Handles mixed feature types naturally
  3. Prone to overfitting without constraints
  4. Fully interpretable — can visualize tree
  5. Decision Trees is a foundational piece of Decision Trees & Random Forests
  6. Connect this section to the ml track and beginner expectations

Topic: Decision Trees & Random Forests
Track: ml | Level: beginner`
        },
        {
          id: `rf`,
          title: `Random Forests`,
          content: `**Random Forests** — what you need to know:

- **Core idea:** Tree-based models for classification and regression.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Ensemble of trees on bootstrap samples with random feature subsets. Reduces variance. sklearn: RandomForestClassifier(n_estimators=100).

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Random Forests** directly affects how confidently you can build, debug, and ship ml projects.
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
            `OOB score estimates generalization without validation set`,
            `Random Forests is a foundational piece of Decision Trees & Random Forests`,
            `Connect this section to the ml track and beginner expectations`
          ],
          pseudoCode: `CONCEPT: Random Forests

Study checklist:
  1. Bagging reduces overfitting vs single tree
  2. n_estimators more trees = lower variance
  3. feature_importances_ for feature ranking
  4. OOB score estimates generalization without validation set
  5. Random Forests is a foundational piece of Decision Trees & Random Forests
  6. Connect this section to the ml track and beginner expectations

Topic: Decision Trees & Random Forests
Track: ml | Level: beginner`
        },
        {
          id: `hyperparams`,
          title: `Tree Hyperparameters`,
          content: `**Tree Hyperparameters** — what you need to know:

- **Core idea:** Tree-based models for classification and regression.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

max_depth, min_samples_split, min_samples_leaf, max_features. Tune with GridSearchCV or RandomizedSearchCV.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Tree Hyperparameters** directly affects how confidently you can build, debug, and ship ml projects.
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
            `max_depth most impactful hyperparameter`,
            `min_samples_leaf prevents tiny leaves`,
            `max_features introduces randomness in RF`,
            `Pruning via cost-complexity parameter ccp_alpha`,
            `Tree Hyperparameters is a foundational piece of Decision Trees & Random Forests`,
            `Connect this section to the ml track and beginner expectations`
          ],
          example: `# Concept check: Tree Hyperparameters
meta = {
    "topic": "ml-trees",
    "section": "hyperparams",
    "track": "ml",
    "level": "beginner",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ml-trees
section: hyperparams
track: ml
level: beginner`,
          pseudoCode: `CONCEPT: Tree Hyperparameters

Study checklist:
  1. max_depth most impactful hyperparameter
  2. min_samples_leaf prevents tiny leaves
  3. max_features introduces randomness in RF
  4. Pruning via cost-complexity parameter ccp_alpha
  5. Tree Hyperparameters is a foundational piece of Decision Trees & Random Forests
  6. Connect this section to the ml track and beginner expectations

Topic: Decision Trees & Random Forests
Track: ml | Level: beginner`
        },
        {
          id: `when`,
          title: `When to Use Trees`,
          content: `**When to Use Trees** — what you need to know:

- **Core idea:** Tree-based models for classification and regression.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Tabular data, mixed types, non-linear relationships, feature interactions. Often top performer with gradient boosting.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **When to Use Trees** directly affects how confidently you can build, debug, and ship ml projects.
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
            `Trees excel on structured/tabular data`,
            `Less effective on raw images/text without features`,
            `XGBoost/LightGBM often win Kaggle tabular`,
            `Random Forest good default before tuning`,
            `When to Use Trees is a foundational piece of Decision Trees & Random Forests`,
            `Connect this section to the ml track and beginner expectations`
          ],
          example: `# Concept check: When to Use Trees
meta = {
    "topic": "ml-trees",
    "section": "when",
    "track": "ml",
    "level": "beginner",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ml-trees
section: when
track: ml
level: beginner`,
          pseudoCode: `CONCEPT: When to Use Trees

Study checklist:
  1. Trees excel on structured/tabular data
  2. Less effective on raw images/text without features
  3. XGBoost/LightGBM often win Kaggle tabular
  4. Random Forest good default before tuning
  5. When to Use Trees is a foundational piece of Decision Trees & Random Forests
  6. Connect this section to the ml track and beginner expectations

Topic: Decision Trees & Random Forests
Track: ml | Level: beginner`
        },
        {
          id: `ml-trees-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Decision Trees & Random Forests** sits in the **ml** track of the Data Science Master curriculum. Tree-based models for classification and regression.

**Theoretical foundation:**

- Learning algorithms minimize expected risk on unseen data.
- Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For **ml-trees**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the beginner level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
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
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Decision Trees & Random Forests ties to the ml track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Decision Trees & Random Forests
Track: ml | Level: beginner`
        },
        {
          id: `ml-trees-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Decision Trees & Random Forests**. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **ml-trees**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
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
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with ml ecosystem conventions

Topic: Decision Trees & Random Forests
Track: ml | Level: beginner`
        },
        {
          id: `ml-trees-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Decision Trees & Random Forests** often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on **ml-trees**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: Decision Trees & Random Forests
Track: ml | Level: beginner`
        },
        {
          id: `ml-trees-real-world`,
          title: `Real-World Applications`,
          content: `**Decision Trees & Random Forests** shows up wherever **ml** skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around **ml-trees** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
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
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Decision Trees & Random Forests to adjacent topics in the same track

Topic: Decision Trees & Random Forests
Track: ml | Level: beginner`
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
      estimatedMinutes: 124,
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
          content: `**Classification Metrics** — what you need to know:

- **Core idea:** Accuracy, precision, recall, F1, ROC-AUC, MSE, R².
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Accuracy: correct/total. Precision: TP/(TP+FP). Recall: TP/(TP+FN). F1: harmonic mean of precision and recall.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Classification Metrics** directly affects how confidently you can build, debug, and ship ml projects.
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
            `F1 balances precision and recall`,
            `Classification Metrics is a foundational piece of Model Evaluation Metrics`,
            `Connect this section to the ml track and beginner expectations`
          ],
          pseudoCode: `CONCEPT: Classification Metrics

Study checklist:
  1. Accuracy misleading for imbalanced classes
  2. Precision: of predicted positives, how many correct
  3. Recall: of actual positives, how many found
  4. F1 balances precision and recall
  5. Classification Metrics is a foundational piece of Model Evaluation Metrics
  6. Connect this section to the ml track and beginner expectations

Topic: Model Evaluation Metrics
Track: ml | Level: beginner`
        },
        {
          id: `roc`,
          title: `ROC-AUC`,
          content: `**ROC-AUC** — what you need to know:

- **Core idea:** Accuracy, precision, recall, F1, ROC-AUC, MSE, R².
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

ROC plots TPR vs FPR at various thresholds. AUC = area under curve. 0.5 = random, 1.0 = perfect. Threshold-independent metric.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **ROC-AUC** directly affects how confidently you can build, debug, and ship ml projects.
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
            `AUC measures ranking quality of predictions`,
            `Good for imbalanced binary classification`,
            `Choose threshold based on business cost`,
            `PR curve better for highly imbalanced data`,
            `ROC-AUC is a foundational piece of Model Evaluation Metrics`,
            `Connect this section to the ml track and beginner expectations`
          ],
          example: `# Concept check: ROC-AUC
meta = {
    "topic": "ml-metrics",
    "section": "roc",
    "track": "ml",
    "level": "beginner",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ml-metrics
section: roc
track: ml
level: beginner`,
          pseudoCode: `CONCEPT: ROC-AUC

Study checklist:
  1. AUC measures ranking quality of predictions
  2. Good for imbalanced binary classification
  3. Choose threshold based on business cost
  4. PR curve better for highly imbalanced data
  5. ROC-AUC is a foundational piece of Model Evaluation Metrics
  6. Connect this section to the ml track and beginner expectations

Topic: Model Evaluation Metrics
Track: ml | Level: beginner`
        },
        {
          id: `regression`,
          title: `Regression Metrics`,
          content: `**Regression Metrics** — what you need to know:

- **Core idea:** Accuracy, precision, recall, F1, ROC-AUC, MSE, R².
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

MSE, RMSE, MAE, R². MAE robust to outliers. R² = 1 - SS_res/SS_tot. Negative R² means worse than mean predictor.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Regression Metrics** directly affects how confidently you can build, debug, and ship ml projects.
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
            `Use domain-appropriate metrics`,
            `Regression Metrics is a foundational piece of Model Evaluation Metrics`,
            `Connect this section to the ml track and beginner expectations`
          ],
          pseudoCode: `CONCEPT: Regression Metrics

Study checklist:
  1. MSE penalizes large errors more than MAE
  2. RMSE in same units as target
  3. R² proportion of variance explained
  4. Use domain-appropriate metrics
  5. Regression Metrics is a foundational piece of Model Evaluation Metrics
  6. Connect this section to the ml track and beginner expectations

Topic: Model Evaluation Metrics
Track: ml | Level: beginner`
        },
        {
          id: `confusion`,
          title: `Confusion Matrix`,
          content: `**Confusion Matrix** — what you need to know:

- **Core idea:** Accuracy, precision, recall, F1, ROC-AUC, MSE, R².
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

2×2 (or n×n) table of predicted vs actual. Derive all classification metrics from it.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Confusion Matrix** directly affects how confidently you can build, debug, and ship ml projects.
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
            `TN, FP, FN, TP for binary case`,
            `Normalize for class imbalance visualization`,
            `Multi-class extends to n×n matrix`,
            `Cost-sensitive learning weights error types differently`,
            `Confusion Matrix is a foundational piece of Model Evaluation Metrics`,
            `Connect this section to the ml track and beginner expectations`
          ],
          example: `# Concept check: Confusion Matrix
meta = {
    "topic": "ml-metrics",
    "section": "confusion",
    "track": "ml",
    "level": "beginner",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ml-metrics
section: confusion
track: ml
level: beginner`,
          pseudoCode: `CONCEPT: Confusion Matrix

Study checklist:
  1. TN, FP, FN, TP for binary case
  2. Normalize for class imbalance visualization
  3. Multi-class extends to n×n matrix
  4. Cost-sensitive learning weights error types differently
  5. Confusion Matrix is a foundational piece of Model Evaluation Metrics
  6. Connect this section to the ml track and beginner expectations

Topic: Model Evaluation Metrics
Track: ml | Level: beginner`
        },
        {
          id: `ml-metrics-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Model Evaluation Metrics** sits in the **ml** track of the Data Science Master curriculum. Accuracy, precision, recall, F1, ROC-AUC, MSE, R².

**Theoretical foundation:**

- Learning algorithms minimize expected risk on unseen data.
- Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For **ml-metrics**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the beginner level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
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
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Model Evaluation Metrics ties to the ml track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Model Evaluation Metrics
Track: ml | Level: beginner`
        },
        {
          id: `ml-metrics-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Model Evaluation Metrics**. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **ml-metrics**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
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
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with ml ecosystem conventions

Topic: Model Evaluation Metrics
Track: ml | Level: beginner`
        },
        {
          id: `ml-metrics-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Model Evaluation Metrics** often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on **ml-metrics**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: Model Evaluation Metrics
Track: ml | Level: beginner`
        },
        {
          id: `ml-metrics-real-world`,
          title: `Real-World Applications`,
          content: `**Model Evaluation Metrics** shows up wherever **ml** skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around **ml-metrics** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
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
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Model Evaluation Metrics to adjacent topics in the same track

Topic: Model Evaluation Metrics
Track: ml | Level: beginner`
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
      estimatedMinutes: 124,
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
          content: `**K-Fold Cross-Validation** — what you need to know:

- **Core idea:** Robust evaluation with k-fold CV and end-to-end pipelines.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Split data into k folds. Train on k-1, validate on 1. Repeat k times. cross_val_score reports mean ± std.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **K-Fold Cross-Validation** directly affects how confidently you can build, debug, and ship ml projects.
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
            `Std indicates stability across folds`,
            `K-Fold Cross-Validation is a foundational piece of Cross-Validation & Pipelines`,
            `Connect this section to the ml track and beginner expectations`
          ],
          pseudoCode: `CONCEPT: K-Fold Cross-Validation

Study checklist:
  1. cv=5 or cv=10 common choices
  2. StratifiedKFold for classification
  3. Mean score estimates generalization
  4. Std indicates stability across folds
  5. K-Fold Cross-Validation is a foundational piece of Cross-Validation & Pipelines
  6. Connect this section to the ml track and beginner expectations

Topic: Cross-Validation & Pipelines
Track: ml | Level: beginner`
        },
        {
          id: `gridsearch`,
          title: `GridSearchCV`,
          content: `**GridSearchCV** — what you need to know:

- **Core idea:** Robust evaluation with k-fold CV and end-to-end pipelines.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Exhaustive search over hyperparameter grid with cross-validation. Returns best params and score.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **GridSearchCV** directly affects how confidently you can build, debug, and ship ml projects.
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
            `Never tune on test set`,
            `GridSearchCV is a foundational piece of Cross-Validation & Pipelines`,
            `Connect this section to the ml track and beginner expectations`
          ],
          pseudoCode: `CONCEPT: GridSearchCV

Study checklist:
  1. Search space size affects compute cost
  2. RandomizedSearchCV for large spaces
  3. Nested CV for unbiased performance estimate
  4. Never tune on test set
  5. GridSearchCV is a foundational piece of Cross-Validation & Pipelines
  6. Connect this section to the ml track and beginner expectations

Topic: Cross-Validation & Pipelines
Track: ml | Level: beginner`
        },
        {
          id: `pipeline-cv`,
          title: `Pipeline + CV Together`,
          content: `**Pipeline + CV Together** — what you need to know:

- **Core idea:** Robust evaluation with k-fold CV and end-to-end pipelines.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Pipeline ensures preprocessing refit each fold — prevents data leakage in CV.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Pipeline + CV Together** directly affects how confidently you can build, debug, and ship ml projects.
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
            `joblib.dump saves fitted pipeline`,
            `Pipeline + CV Together is a foundational piece of Cross-Validation & Pipelines`,
            `Connect this section to the ml track and beginner expectations`
          ],
          pseudoCode: `CONCEPT: Pipeline + CV Together

Study checklist:
  1. Pipeline + CV prevents preprocessing leakage
  2. Each fold fits scaler on train fold only
  3. Same pipeline used for final model training
  4. joblib.dump saves fitted pipeline
  5. Pipeline + CV Together is a foundational piece of Cross-Validation & Pipelines
  6. Connect this section to the ml track and beginner expectations

Topic: Cross-Validation & Pipelines
Track: ml | Level: beginner`
        },
        {
          id: `nested`,
          title: `Nested Cross-Validation`,
          content: `**Nested Cross-Validation** — what you need to know:

- **Core idea:** Robust evaluation with k-fold CV and end-to-end pipelines.
- **Level (beginner):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Outer loop for evaluation, inner loop for hyperparameter tuning. Unbiased estimate of generalization.

**Why this matters:**

- Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.
- Mastering **Nested Cross-Validation** directly affects how confidently you can build, debug, and ship ml projects.
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
            `Outer CV estimates model performance`,
            `Inner CV selects hyperparameters`,
            `Prevents optimistic bias from tuning on same data`,
            `Computationally expensive but rigorous`,
            `Nested Cross-Validation is a foundational piece of Cross-Validation & Pipelines`,
            `Connect this section to the ml track and beginner expectations`
          ],
          example: `# Concept check: Nested Cross-Validation
meta = {
    "topic": "ml-cv",
    "section": "nested",
    "track": "ml",
    "level": "beginner",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ml-cv
section: nested
track: ml
level: beginner`,
          pseudoCode: `CONCEPT: Nested Cross-Validation

Study checklist:
  1. Outer CV estimates model performance
  2. Inner CV selects hyperparameters
  3. Prevents optimistic bias from tuning on same data
  4. Computationally expensive but rigorous
  5. Nested Cross-Validation is a foundational piece of Cross-Validation & Pipelines
  6. Connect this section to the ml track and beginner expectations

Topic: Cross-Validation & Pipelines
Track: ml | Level: beginner`
        },
        {
          id: `ml-cv-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Cross-Validation & Pipelines** sits in the **ml** track of the Data Science Master curriculum. Robust evaluation with k-fold CV and end-to-end pipelines.

**Theoretical foundation:**

- Learning algorithms minimize expected risk on unseen data.
- Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For **ml-cv**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the beginner level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
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
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Cross-Validation & Pipelines ties to the ml track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Cross-Validation & Pipelines
Track: ml | Level: beginner`
        },
        {
          id: `ml-cv-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Cross-Validation & Pipelines**. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **ml-cv**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
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
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with ml ecosystem conventions

Topic: Cross-Validation & Pipelines
Track: ml | Level: beginner`
        },
        {
          id: `ml-cv-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Cross-Validation & Pipelines** often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on **ml-cv**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: Cross-Validation & Pipelines
Track: ml | Level: beginner`
        },
        {
          id: `ml-cv-real-world`,
          title: `Real-World Applications`,
          content: `**Cross-Validation & Pipelines** shows up wherever **ml** skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around **ml-cv** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
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
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Cross-Validation & Pipelines to adjacent topics in the same track

Topic: Cross-Validation & Pipelines
Track: ml | Level: beginner`
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
      estimatedMinutes: 124,
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
