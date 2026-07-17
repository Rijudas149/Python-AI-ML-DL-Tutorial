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

- PolynomialFeatures generates interaction terms
- High degree causes overfitting
- Always use regularization with high degree
- Works with multiple features — explosion of terms`,
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
          ],
          pseudoCode: `Polynomial Regression

1. PolynomialFeatures generates interaction terms
2. High degree causes overfitting
3. Always use regularization with high degree
4. Works with multiple features — explosion of terms`
        },
        {
          id: `ridge-lasso`,
          title: `Ridge & Lasso`,
          content: `Ridge (L2): shrinks coefficients. Lasso (L1): drives some to zero — feature selection. ElasticNet combines both.

- alpha controls regularization strength
- Ridge keeps all features with small weights
- Lasso performs automatic feature selection
- ElasticNet best when many correlated features`,
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
          ],
          pseudoCode: `Ridge & Lasso

1. alpha controls regularization strength
2. Ridge keeps all features with small weights
3. Lasso performs automatic feature selection
4. ElasticNet best when many correlated features`
        },
        {
          id: `assumptions`,
          title: `Linear Regression Assumptions`,
          content: `Linearity, independence, homoscedasticity, normality of residuals. Violations affect inference not always prediction.

- Check residual plots for patterns
- Heteroscedasticity: use weighted least squares
- Multicollinearity inflates coefficient variance
- Outliers disproportionately affect OLS`,
          keyPoints: [
            `Check residual plots for patterns`,
            `Heteroscedasticity: use weighted least squares`,
            `Multicollinearity inflates coefficient variance`,
            `Outliers disproportionately affect OLS`
          ],
          pseudoCode: `Linear Regression Assumptions

1. Check residual plots for patterns
2. Heteroscedasticity: use weighted least squares
3. Multicollinearity inflates coefficient variance
4. Outliers disproportionately affect OLS`
        },
        {
          id: `robust`,
          title: `Robust Regression`,
          content: `HuberRegressor, RANSAC for outlier resistance. Quantile regression for conditional quantiles.

- Huber loss transitions from L2 to L1 for outliers
- RANSAC fits to inlier consensus
- Quantile regression for uncertainty bounds
- Use when data has significant outliers`,
          keyPoints: [
            `Huber loss transitions from L2 to L1 for outliers`,
            `RANSAC fits to inlier consensus`,
            `Quantile regression for uncertainty bounds`,
            `Use when data has significant outliers`
          ],
          pseudoCode: `Robust Regression

1. Huber loss transitions from L2 to L1 for outliers
2. RANSAC fits to inlier consensus
3. Quantile regression for uncertainty bounds
4. Use when data has significant outliers`
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
          content: `Classify by majority vote of k nearest training points. Lazy learner — no training phase. Scale features first!

- k too small: overfitting, too large: underfitting
- Always scale features for KNN
- Slow prediction for large datasets
- Use ball_tree or kd_tree for efficiency`,
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
          ],
          pseudoCode: `K-Nearest Neighbors

1. k too small: overfitting, too large: underfitting
2. Always scale features for KNN
3. Slow prediction for large datasets
4. Use ball_tree or kd_tree for efficiency`
        },
        {
          id: `naive-bayes`,
          title: `Naive Bayes`,
          content: `P(y|x) ∝ P(y)ΠP(xᵢ|y). Assumes feature independence. GaussianNB, MultinomialNB, BernoulliNB variants.

- Fast training and prediction
- Works well with small data
- Independence assumption rarely true but works
- MultinomialNB for text classification`,
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
          ],
          pseudoCode: `Naive Bayes

1. Fast training and prediction
2. Works well with small data
3. Independence assumption rarely true but works
4. MultinomialNB for text classification`
        },
        {
          id: `multiclass`,
          title: `Multi-class Strategies`,
          content: `One-vs-Rest (OvR): k binary classifiers. One-vs-One (OvO): k(k-1)/2 classifiers. Softmax for neural networks.

- OvR default in sklearn for SVM, LR
- OvO used by SVC with probability
- Softmax ensures probabilities sum to 1
- Multi-class metrics: macro vs weighted avg`,
          keyPoints: [
            `OvR default in sklearn for SVM, LR`,
            `OvO used by SVC with probability`,
            `Softmax ensures probabilities sum to 1`,
            `Multi-class metrics: macro vs weighted avg`
          ],
          pseudoCode: `Multi-class Strategies

1. OvR default in sklearn for SVM, LR
2. OvO used by SVC with probability
3. Softmax ensures probabilities sum to 1
4. Multi-class metrics: macro vs weighted avg`
        },
        {
          id: `imbalanced`,
          title: `Imbalanced Classification`,
          content: `SMOTE oversampling, class_weight parameter, threshold tuning. Focus on recall for minority class when costly to miss.

- class_weight="balanced" adjusts loss
- SMOTE generates synthetic minority samples
- Adjust decision threshold for precision/recall tradeoff
- Use PR-AUC not accuracy for imbalanced data`,
          keyPoints: [
            `class_weight="balanced" adjusts loss`,
            `SMOTE generates synthetic minority samples`,
            `Adjust decision threshold for precision/recall tradeoff`,
            `Use PR-AUC not accuracy for imbalanced data`
          ],
          pseudoCode: `Imbalanced Classification

1. class_weight="balanced" adjusts loss
2. SMOTE generates synthetic minority samples
3. Adjust decision threshold for precision/recall tradeoff
4. Use PR-AUC not accuracy for imbalanced data`
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
          content: `Finds hyperplane maximizing margin between classes. Support vectors are critical training points. C parameter trades margin vs misclassification.

- Maximum margin principle
- C large: narrow margin, fewer errors
- C small: wide margin, more errors allowed
- Only support vectors affect decision boundary`,
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
          ],
          pseudoCode: `Linear SVM

1. Maximum margin principle
2. C large: narrow margin, fewer errors
3. C small: wide margin, more errors allowed
4. Only support vectors affect decision boundary`
        },
        {
          id: `kernel`,
          title: `Kernel Trick`,
          content: `Map to higher dimensions without explicit computation. RBF (Gaussian) most popular: K(x,x') = exp(-γ||x-x'||²).

- Kernel trick avoids explicit high-D mapping
- RBF kernel handles non-linear boundaries
- gamma controls influence radius of each point
- Linear kernel for high-dimensional sparse text data`,
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
          ],
          pseudoCode: `Kernel Trick

1. Kernel trick avoids explicit high-D mapping
2. RBF kernel handles non-linear boundaries
3. gamma controls influence radius of each point
4. Linear kernel for high-dimensional sparse text data`
        },
        {
          id: `svc-params`,
          title: `SVM Hyperparameters`,
          content: `C, kernel, gamma, degree. GridSearchCV essential. probability=True enables predict_proba (slower).

- Scale features before SVM — critical
- gamma too high: overfitting to support vectors
- LinearSVC faster for linear case on large data
- NuSVM alternative parameterization`,
          keyPoints: [
            `Scale features before SVM — critical`,
            `gamma too high: overfitting to support vectors`,
            `LinearSVC faster for linear case on large data`,
            `NuSVM alternative parameterization`
          ],
          pseudoCode: `SVM Hyperparameters

1. Scale features before SVM — critical
2. gamma too high: overfitting to support vectors
3. LinearSVC faster for linear case on large data
4. NuSVM alternative parameterization`
        },
        {
          id: `svr`,
          title: `Support Vector Regression`,
          content: `SVR for regression. Epsilon-insensitive loss ignores errors within ε tube. Kernel trick applies to regression too.

- SVR finds tube containing most points
- epsilon controls tube width
- Less common than RF/XGBoost for tabular regression
- Effective in high-dimensional spaces`,
          keyPoints: [
            `SVR finds tube containing most points`,
            `epsilon controls tube width`,
            `Less common than RF/XGBoost for tabular regression`,
            `Effective in high-dimensional spaces`
          ],
          pseudoCode: `Support Vector Regression

1. SVR finds tube containing most points
2. epsilon controls tube width
3. Less common than RF/XGBoost for tabular regression
4. Effective in high-dimensional spaces`
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
          content: `Sequentially add trees correcting previous errors. Each tree fits negative gradient of loss. Learning_rate shrinks each contribution.

- Boosting reduces bias unlike bagging (RF)
- Learning rate and n_estimators trade off
- Shallow trees (max_depth 3-8) work best
- Most important tabular ML algorithm family`,
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

- L1/L2 regularization on leaf weights
- Handles missing values natively
- early_stopping_rounds prevents overfitting
- GPU acceleration available`,
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
          ],
          pseudoCode: `XGBoost

1. L1/L2 regularization on leaf weights
2. Handles missing values natively
3. early_stopping_rounds prevents overfitting
4. GPU acceleration available`
        },
        {
          id: `lightgbm`,
          title: `LightGBM & CatBoost`,
          content: `LightGBM: leaf-wise growth, faster on large data. CatBoost: handles categoricals natively, ordered boosting.

- LightGBM faster than XGBoost on large datasets
- CatBoost best for high-cardinality categoricals
- All three dominate tabular ML competitions
- Feature importance from gain or split count`,
          keyPoints: [
            `LightGBM faster than XGBoost on large datasets`,
            `CatBoost best for high-cardinality categoricals`,
            `All three dominate tabular ML competitions`,
            `Feature importance from gain or split count`
          ],
          pseudoCode: `LightGBM & CatBoost

1. LightGBM faster than XGBoost on large datasets
2. CatBoost best for high-cardinality categoricals
3. All three dominate tabular ML competitions
4. Feature importance from gain or split count`
        },
        {
          id: `tuning-gbm`,
          title: `Tuning Gradient Boosting`,
          content: `Key params: n_estimators, learning_rate, max_depth, subsample, colsample_bytree, reg_alpha/lambda.

- Start with defaults then tune learning_rate + n_estimators
- Lower learning_rate with more trees often better
- subsample and colsample add randomness
- Use early stopping on validation set`,
          keyPoints: [
            `Start with defaults then tune learning_rate + n_estimators`,
            `Lower learning_rate with more trees often better`,
            `subsample and colsample add randomness`,
            `Use early stopping on validation set`
          ],
          pseudoCode: `Tuning Gradient Boosting

1. Start with defaults then tune learning_rate + n_estimators
2. Lower learning_rate with more trees often better
3. subsample and colsample add randomness
4. Use early stopping on validation set`
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
          content: `Bagging (Bootstrap Aggregating): parallel training on random subsets, average/vote. Boosting: sequential error correction.

- Bagging reduces variance (Random Forest)
- Boosting reduces bias (XGBoost)
- Both reduce overfitting vs single model
- Combining diverse models improves robustness`,
          keyPoints: [
            `Bagging reduces variance (Random Forest)`,
            `Boosting reduces bias (XGBoost)`,
            `Both reduce overfitting vs single model`,
            `Combining diverse models improves robustness`
          ],
          pseudoCode: `Bagging & Boosting

1. Bagging reduces variance (Random Forest)
2. Boosting reduces bias (XGBoost)
3. Both reduce overfitting vs single model
4. Combining diverse models improves robustness`
        },
        {
          id: `voting`,
          title: `Voting & Stacking`,
          content: `VotingClassifier: hard vote (majority) or soft vote (average probabilities). StackingClassifier: meta-learner on base model predictions.

- Soft voting usually better than hard
- Stacking learns optimal combination
- Diverse base models improve ensemble
- Stacking can overfit — use CV for meta-features`,
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
          ],
          pseudoCode: `Voting & Stacking

1. Soft voting usually better than hard
2. Stacking learns optimal combination
3. Diverse base models improve ensemble
4. Stacking can overfit — use CV for meta-features`
        },
        {
          id: `blending`,
          title: `Blending Strategies`,
          content: `Simple average of model predictions often competitive. Weighted average by validation performance.

- Equal weight averaging is strong baseline
- Weight by validation AUC or log-loss
- Blending simpler than stacking
- Kaggle solutions often ensemble 5-10 models`,
          keyPoints: [
            `Equal weight averaging is strong baseline`,
            `Weight by validation AUC or log-loss`,
            `Blending simpler than stacking`,
            `Kaggle solutions often ensemble 5-10 models`
          ],
          pseudoCode: `Blending Strategies

1. Equal weight averaging is strong baseline
2. Weight by validation AUC or log-loss
3. Blending simpler than stacking
4. Kaggle solutions often ensemble 5-10 models`
        },
        {
          id: `diversity`,
          title: `Ensemble Diversity`,
          content: `Ensembles work when models make different errors. Diversity from: different algorithms, features, data subsets, random seeds.

- Identical models add no value
- Decorrelate errors for maximum benefit
- Random feature subsets in RF create diversity
- Cross-validation stacking prevents overfitting`,
          keyPoints: [
            `Identical models add no value`,
            `Decorrelate errors for maximum benefit`,
            `Random feature subsets in RF create diversity`,
            `Cross-validation stacking prevents overfitting`
          ],
          pseudoCode: `Ensemble Diversity

1. Identical models add no value
2. Decorrelate errors for maximum benefit
3. Random feature subsets in RF create diversity
4. Cross-validation stacking prevents overfitting`
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
