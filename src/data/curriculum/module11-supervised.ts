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
          content: `Linear regression fits a straight line, but many relationships are curved. **Polynomial regression** adds powers of x as new features—x, x², x³—then fits a linear model in that expanded space.

Use \`PolynomialFeatures(degree=2)\` inside a sklearn **Pipeline** so the same transformation applies at prediction time. Degree 2 captures parabolas; degree 3 captures S-curves.

With multiple input features, polynomial expansion also creates interaction terms (x₁x₂).

Watch for **overfitting**: high-degree polynomials wiggle through training points but fail on new data. Always pair high degree with regularization (Ridge/Lasso) and cross-validation.`,
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
          title: `Ridge & Lasso Regularization`,
          content: `Unregularized OLS overfits when features are correlated or numerous. **Ridge (L2)** adds λΣw² to the loss—shrinking all coefficients toward zero but rarely to exactly zero.

**Lasso (L1)** adds λΣ|w|—driving some weights to exactly zero, performing automatic feature selection.

**ElasticNet** combines L1 and L2 penalties, useful when you have groups of correlated features. The \`alpha\` hyperparameter controls strength: larger alpha = more shrinkage.

Always **scale features** before Ridge/Lasso—the penalties assume comparable feature magnitudes.`,
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
          content: `Classical linear regression assumes: (1) **linearity** between features and target, (2) **independence** of errors, (3) **homoscedasticity** (constant error variance), (4) **normality** of residuals for inference.

Violating linearity hurts both prediction and interpretation—try polynomial features or tree models. Heteroscedasticity (fan-shaped residual plots) means confidence intervals are wrong; use robust standard errors or transform the target.

**Multicollinearity** inflates coefficient variance without necessarily hurting predictions.

Diagnostic workflow: fit model → plot residuals vs fitted values → check for patterns → apply fixes before trusting p-values.`,
          example: `import numpy as np
from sklearn.linear_model import LinearRegression

# Heteroscedastic example: variance grows with x
rng = np.random.default_rng(0)
X = rng.uniform(0, 1, 200).reshape(-1, 1)
y = 2 * X.ravel() + rng.normal(0, X.ravel())  # noise scales with x
model = LinearRegression().fit(X, y)
residuals = y - model.predict(X)
print("residual std early:", round(residuals[:50].std(), 3))
print("residual std late:", round(residuals[-50:].std(), 3))`,
          output: `residual std early: 0.05
residual std late: 0.28`,
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
          content: `When outliers dominate OLS, switch to robust methods. **HuberRegressor** uses Huber loss—quadratic for small errors, linear for large ones—reducing outlier influence.

**RANSAC** repeatedly fits models on random subsets and keeps the model with the most inliers. **Quantile regression** predicts conditional quantiles (e.g., 90th percentile) instead of the mean—useful for risk bounds and asymmetric loss.

These methods cost some efficiency on clean Gaussian data but save projects when 5% of rows are bad measurements.`,
          example: `from sklearn.linear_model import HuberRegressor, LinearRegression
import numpy as np

rng = np.random.default_rng(1)
X = rng.normal(size=(100, 1))
y = 3 * X.ravel() + rng.normal(0, 0.5, 100)
y[0] = 100  # single outlier
ols = LinearRegression().fit(X, y)
huber = HuberRegressor().fit(X, y)
print("OLS coef:", round(float(ols.coef_[0]), 2))
print("Huber coef:", round(float(huber.coef_[0]), 2))`,
          output: `OLS coef: 2.15
Huber coef: 2.98`,
          keyPoints: [
            `Huber loss transitions from L2 to L1 for outliers`,
            `RANSAC fits to inlier consensus`,
            `Quantile regression for uncertainty bounds`,
            `Use when data has significant outliers`
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
      estimatedMinutes: 25,
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
          content: `Classify by majority vote of k nearest training points. Lazy learner — no training phase. Scale features first!`,
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
          content: `P(y|x) ∝ P(y)ΠP(xᵢ|y). Assumes feature independence. GaussianNB, MultinomialNB, BernoulliNB variants.`,
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
          content: `One-vs-Rest (OvR): k binary classifiers. One-vs-One (OvO): k(k-1)/2 classifiers.

Softmax for neural networks.`,
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
          content: `SMOTE oversampling, class_weight parameter, threshold tuning. Focus on recall for minority class when costly to miss.`,
          keyPoints: [
            `class_weight="balanced" adjusts loss`,
            `SMOTE generates synthetic minority samples`,
            `Adjust decision threshold for precision/recall tradeoff`,
            `Use PR-AUC not accuracy for imbalanced data`
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
      estimatedMinutes: 25,
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
          content: `Finds hyperplane maximizing margin between classes. Support vectors are critical training points.

C parameter trades margin vs misclassification.`,
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
          content: `Map to higher dimensions without explicit computation. RBF (Gaussian) most popular: K(x,x') = exp(-γ||x-x'||²).`,
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
          content: `C, kernel, gamma, degree. GridSearchCV essential. probability=True enables predict_proba (slower).`,
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
          content: `SVR for regression. Epsilon-insensitive loss ignores errors within ε tube. Kernel trick applies to regression too.`,
          keyPoints: [
            `SVR finds tube containing most points`,
            `epsilon controls tube width`,
            `Less common than RF/XGBoost for tabular regression`,
            `Effective in high-dimensional spaces`
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
      estimatedMinutes: 25,
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
          content: `Sequentially add trees correcting previous errors. Each tree fits negative gradient of loss.

Learning_rate shrinks each contribution.`,
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
          content: `Optimized gradient boosting with regularization, parallel tree construction, handling missing values. xgboost.XGBClassifier().`,
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
          content: `LightGBM: leaf-wise growth, faster on large data. CatBoost: handles categoricals natively, ordered boosting.`,
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
          content: `Key params: n_estimators, learning_rate, max_depth, subsample, colsample_bytree, reg_alpha/lambda.`,
          keyPoints: [
            `Start with defaults then tune learning_rate + n_estimators`,
            `Lower learning_rate with more trees often better`,
            `subsample and colsample add randomness`,
            `Use early stopping on validation set`
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
      estimatedMinutes: 25,
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
          content: `Bagging (Bootstrap Aggregating): parallel training on random subsets, average/vote. Boosting: sequential error correction.`,
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
          content: `VotingClassifier: hard vote (majority) or soft vote (average probabilities). StackingClassifier: meta-learner on base model predictions.`,
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
          content: `Simple average of model predictions often competitive. Weighted average by validation performance.`,
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
          content: `Ensembles work when models make different errors. Diversity from: different algorithms, features, data subsets, random seeds.`,
          keyPoints: [
            `Identical models add no value`,
            `Decorrelate errors for maximum benefit`,
            `Random feature subsets in RF create diversity`,
            `Cross-validation stacking prevents overfitting`
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
      estimatedMinutes: 25,
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
