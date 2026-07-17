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
          content: `**The ML Workflow** breaks down into 9 steps:

1. **Define problem** — Clarify the business question, success metric, and constraints before touching data or models.
2. **Collect data** — Gather representative data with documented provenance, consent, and versioning.
3. **EDA** — Explore distributions, missingness, correlations, and outliers to guide cleaning and features.
4. **Feature engineering** — Transform raw columns into informative signals while avoiding leakage from future information.
5. **Model selection** — Select algorithms suited to the problem type, data size, and interpretability requirements.
6. **Train** — Fit parameters on training data with proper cross-validation and reproducible seeds.
7. **Evaluate** — Measure generalization on held-out data using metrics aligned to business goals.
8. **Deploy** — Package the model with monitoring, rollback plans, and latency/cost budgets.
9. **Monitor** — Track drift, performance decay, and data quality in production over time.`,
          keyPoints: [
            `Start with problem definition not algorithms`,
            `Data quality determines ceiling performance`,
            `Always hold out test set until final evaluation`,
            `Iterate between EDA and feature engineering`
          ],
          pseudoCode: `The ML Workflow

1. Start with problem definition not algorithms
2. Data quality determines ceiling performance
3. Always hold out test set until final evaluation
4. Iterate between EDA and feature engineering`
        },
        {
          id: `split`,
          title: `train_test_split`,
          content: `Split data into train/validation/test. sklearn: train_test_split(X, y, test_size=0.2, random_state=42, stratify=y).

- Never train on test data — data leakage
- stratify preserves class proportions
- random_state for reproducibility
- Typical split: 70-80% train, 20-30% test`,
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
          ],
          pseudoCode: `train_test_split

1. Never train on test data — data leakage
2. stratify preserves class proportions
3. random_state for reproducibility
4. Typical split: 70-80% train, 20-30% test`
        },
        {
          id: `preprocessing`,
          title: `Preprocessing Pipeline`,
          content: `StandardScaler, OneHotEncoder, Pipeline class chains preprocessing + model. Prevents leakage by fitting on train only.

- Fit preprocessor on training data only
- Pipeline ensures consistent train/test processing
- ColumnTransformer for mixed feature types
- Preprocessing choices affect model performance`,
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
          ],
          pseudoCode: `Preprocessing Pipeline

1. Fit preprocessor on training data only
2. Pipeline ensures consistent train/test processing
3. ColumnTransformer for mixed feature types
4. Preprocessing choices affect model performance`
        },
        {
          id: `baseline`,
          title: `Baseline Models`,
          content: `Always establish baseline before complex models. Mean predictor for regression, majority class for classification. Beat baseline first.

- DummyClassifier/DummyRegressor for baselines
- Baseline sets minimum acceptable performance
- Simple models often competitive with complex ones
- Occams razor — prefer simpler when equal performance`,
          keyPoints: [
            `DummyClassifier/DummyRegressor for baselines`,
            `Baseline sets minimum acceptable performance`,
            `Simple models often competitive with complex ones`,
            `Occams razor — prefer simpler when equal performance`
          ],
          pseudoCode: `Baseline Models

1. DummyClassifier/DummyRegressor for baselines
2. Baseline sets minimum acceptable performance
3. Simple models often competitive with complex ones
4. Occams razor — prefer simpler when equal performance`
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
      estimatedMinutes: 25,
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

- Assumes linear relationship
- Interpretable coefficients
- Sensitive to outliers — use HuberRegressor
- Ridge/Lasso add regularization`,
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
          ],
          pseudoCode: `Linear Regression

1. Assumes linear relationship
2. Interpretable coefficients
3. Sensitive to outliers — use HuberRegressor
4. Ridge/Lasso add regularization`
        },
        {
          id: `logistic`,
          title: `Logistic Regression`,
          content: `Predicts P(y=1|x) via sigmoid: σ(wᵀx). Despite name, is classification algorithm. sklearn: LogisticRegression().

- Outputs probabilities not just labels
- Uses cross-entropy loss internally
- Works well with linearly separable data
- C parameter controls regularization strength`,
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
          ],
          pseudoCode: `Logistic Regression

1. Outputs probabilities not just labels
2. Uses cross-entropy loss internally
3. Works well with linearly separable data
4. C parameter controls regularization strength`
        },
        {
          id: `sigmoid`,
          title: `Sigmoid & Softmax`,
          content: `Sigmoid: σ(z) = 1/(1+e⁻ᶻ). Maps to (0,1). Softmax generalizes to multi-class: softmax(zᵢ) = e^zᵢ/Σe^zⱼ.

- Sigmoid squashes to probability range
- Softmax outputs sum to 1
- Decision boundary at 0.5 for binary
- Logistic regression learns linear decision boundary`,
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
          ],
          pseudoCode: `Sigmoid & Softmax

1. Sigmoid squashes to probability range
2. Softmax outputs sum to 1
3. Decision boundary at 0.5 for binary
4. Logistic regression learns linear decision boundary`
        },
        {
          id: `interpret`,
          title: `Interpretability`,
          content: `Coefficients show feature importance and direction. Odds ratio = e^coefficient. SHAP values for individual predictions.

- Positive coefficient increases log-odds of class 1
- Feature scaling needed for coefficient comparison
- Regularization shrinks coefficients toward zero
- Linear models preferred when interpretability required`,
          keyPoints: [
            `Positive coefficient increases log-odds of class 1`,
            `Feature scaling needed for coefficient comparison`,
            `Regularization shrinks coefficients toward zero`,
            `Linear models preferred when interpretability required`
          ],
          pseudoCode: `Interpretability

1. Positive coefficient increases log-odds of class 1
2. Feature scaling needed for coefficient comparison
3. Regularization shrinks coefficients toward zero
4. Linear models preferred when interpretability required`
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
      estimatedMinutes: 25,
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

- max_depth controls complexity
- Handles mixed feature types naturally
- Prone to overfitting without constraints
- Fully interpretable — can visualize tree`,
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
          ],
          pseudoCode: `Decision Trees

1. max_depth controls complexity
2. Handles mixed feature types naturally
3. Prone to overfitting without constraints
4. Fully interpretable — can visualize tree`
        },
        {
          id: `rf`,
          title: `Random Forests`,
          content: `Ensemble of trees on bootstrap samples with random feature subsets. Reduces variance. sklearn: RandomForestClassifier(n_estimators=100).

- Bagging reduces overfitting vs single tree
- n_estimators more trees = lower variance
- feature_importances_ for feature ranking
- OOB score estimates generalization without validation set`,
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
          ],
          pseudoCode: `Random Forests

1. Bagging reduces overfitting vs single tree
2. n_estimators more trees = lower variance
3. feature_importances_ for feature ranking
4. OOB score estimates generalization without validation set`
        },
        {
          id: `hyperparams`,
          title: `Tree Hyperparameters`,
          content: `max_depth, min_samples_split, min_samples_leaf, max_features. Tune with GridSearchCV or RandomizedSearchCV.

- max_depth most impactful hyperparameter
- min_samples_leaf prevents tiny leaves
- max_features introduces randomness in RF
- Pruning via cost-complexity parameter ccp_alpha`,
          keyPoints: [
            `max_depth most impactful hyperparameter`,
            `min_samples_leaf prevents tiny leaves`,
            `max_features introduces randomness in RF`,
            `Pruning via cost-complexity parameter ccp_alpha`
          ],
          pseudoCode: `Tree Hyperparameters

1. max_depth most impactful hyperparameter
2. min_samples_leaf prevents tiny leaves
3. max_features introduces randomness in RF
4. Pruning via cost-complexity parameter ccp_alpha`
        },
        {
          id: `when`,
          title: `When to Use Trees`,
          content: `Tabular data, mixed types, non-linear relationships, feature interactions. Often top performer with gradient boosting.

- Trees excel on structured/tabular data
- Less effective on raw images/text without features
- XGBoost/LightGBM often win Kaggle tabular
- Random Forest good default before tuning`,
          keyPoints: [
            `Trees excel on structured/tabular data`,
            `Less effective on raw images/text without features`,
            `XGBoost/LightGBM often win Kaggle tabular`,
            `Random Forest good default before tuning`
          ],
          pseudoCode: `When to Use Trees

1. Trees excel on structured/tabular data
2. Less effective on raw images/text without features
3. XGBoost/LightGBM often win Kaggle tabular
4. Random Forest good default before tuning`
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
      estimatedMinutes: 25,
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

- Accuracy misleading for imbalanced classes
- Precision: of predicted positives, how many correct
- Recall: of actual positives, how many found
- F1 balances precision and recall`,
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
          ],
          pseudoCode: `Classification Metrics

1. Accuracy misleading for imbalanced classes
2. Precision: of predicted positives, how many correct
3. Recall: of actual positives, how many found
4. F1 balances precision and recall`
        },
        {
          id: `roc`,
          title: `ROC-AUC`,
          content: `ROC plots TPR vs FPR at various thresholds. AUC = area under curve. 0.5 = random, 1.0 = perfect. Threshold-independent metric.

- AUC measures ranking quality of predictions
- Good for imbalanced binary classification
- Choose threshold based on business cost
- PR curve better for highly imbalanced data`,
          keyPoints: [
            `AUC measures ranking quality of predictions`,
            `Good for imbalanced binary classification`,
            `Choose threshold based on business cost`,
            `PR curve better for highly imbalanced data`
          ],
          pseudoCode: `ROC-AUC

1. AUC measures ranking quality of predictions
2. Good for imbalanced binary classification
3. Choose threshold based on business cost
4. PR curve better for highly imbalanced data`
        },
        {
          id: `regression`,
          title: `Regression Metrics`,
          content: `MSE, RMSE, MAE, R². MAE robust to outliers. R² = 1 - SS_res/SS_tot. Negative R² means worse than mean predictor.

- MSE penalizes large errors more than MAE
- RMSE in same units as target
- R² proportion of variance explained
- Use domain-appropriate metrics`,
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
          ],
          pseudoCode: `Regression Metrics

1. MSE penalizes large errors more than MAE
2. RMSE in same units as target
3. R² proportion of variance explained
4. Use domain-appropriate metrics`
        },
        {
          id: `confusion`,
          title: `Confusion Matrix`,
          content: `2×2 (or n×n) table of predicted vs actual. Derive all classification metrics from it.

- TN, FP, FN, TP for binary case
- Normalize for class imbalance visualization
- Multi-class extends to n×n matrix
- Cost-sensitive learning weights error types differently`,
          keyPoints: [
            `TN, FP, FN, TP for binary case`,
            `Normalize for class imbalance visualization`,
            `Multi-class extends to n×n matrix`,
            `Cost-sensitive learning weights error types differently`
          ],
          pseudoCode: `Confusion Matrix

1. TN, FP, FN, TP for binary case
2. Normalize for class imbalance visualization
3. Multi-class extends to n×n matrix
4. Cost-sensitive learning weights error types differently`
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
      estimatedMinutes: 25,
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

- cv=5 or cv=10 common choices
- StratifiedKFold for classification
- Mean score estimates generalization
- Std indicates stability across folds`,
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
          ],
          pseudoCode: `K-Fold Cross-Validation

1. cv=5 or cv=10 common choices
2. StratifiedKFold for classification
3. Mean score estimates generalization
4. Std indicates stability across folds`
        },
        {
          id: `gridsearch`,
          title: `GridSearchCV`,
          content: `Exhaustive search over hyperparameter grid with cross-validation. Returns best params and score.

- Search space size affects compute cost
- RandomizedSearchCV for large spaces
- Nested CV for unbiased performance estimate
- Never tune on test set`,
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
          ],
          pseudoCode: `GridSearchCV

1. Search space size affects compute cost
2. RandomizedSearchCV for large spaces
3. Nested CV for unbiased performance estimate
4. Never tune on test set`
        },
        {
          id: `pipeline-cv`,
          title: `Pipeline + CV Together`,
          content: `Pipeline ensures preprocessing refit each fold — prevents data leakage in CV.

- Pipeline + CV prevents preprocessing leakage
- Each fold fits scaler on train fold only
- Same pipeline used for final model training
- joblib.dump saves fitted pipeline`,
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
          ],
          pseudoCode: `Pipeline + CV Together

1. Pipeline + CV prevents preprocessing leakage
2. Each fold fits scaler on train fold only
3. Same pipeline used for final model training
4. joblib.dump saves fitted pipeline`
        },
        {
          id: `nested`,
          title: `Nested Cross-Validation`,
          content: `Outer loop for evaluation, inner loop for hyperparameter tuning. Unbiased estimate of generalization.

- Outer CV estimates model performance
- Inner CV selects hyperparameters
- Prevents optimistic bias from tuning on same data
- Computationally expensive but rigorous`,
          keyPoints: [
            `Outer CV estimates model performance`,
            `Inner CV selects hyperparameters`,
            `Prevents optimistic bias from tuning on same data`,
            `Computationally expensive but rigorous`
          ],
          pseudoCode: `Nested Cross-Validation

1. Outer CV estimates model performance
2. Inner CV selects hyperparameters
3. Prevents optimistic bias from tuning on same data
4. Computationally expensive but rigorous`
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
      estimatedMinutes: 25,
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
