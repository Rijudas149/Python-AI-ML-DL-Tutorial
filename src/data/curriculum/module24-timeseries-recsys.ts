import type { Topic } from '../../types';

export const module24Topics: Topic[] = [
{
      id: `ml-timeseries`,
      title: `Time Series Foundations`,
      description: `Decompose series, check stationarity, and fit ARIMA models.`,
      level: `advanced`,
      track: `ml`,
      sections: [
        {
          id: `components`,
          title: `Trend, Seasonality & Noise`,
          content: `Time series **decomposition** splits data into trend (long-term direction), seasonal (fixed-period cycles), and residual noise. **Additive** model: Y = T + S + R; **multiplicative** when seasonality scales with level. \`statsmodels.tsa.seasonal_decompose\` visualizes components.

Domain knowledge picks period: 7 for daily weekly pattern, 12 for monthly seasonality in annual data.`,
          example: `import pandas as pd
idx = pd.date_range("2020-01-01", periods=24, freq="MS")
ts = pd.Series(range(24), index=idx)
print(len(ts))`,
          output: `24`,
          keyPoints: [
            `Choose additive vs multiplicative by seasonal amplitude`,
            `Period must match domain cycle`,
            `Residuals should look random if model adequate`,
            `Plot raw series before modeling`
          ]
        },
        {
          id: `stationarity`,
          title: `Stationarity & Differencing`,
          content: `**Stationary** series have constant mean/variance and autocovariance depending only on lag. ADF test (\`adfuller\`) tests unit root. **Differencing** ∇Y_t = Y_t - Y_{t-1} removes trend; seasonal differencing handles periodic trends.

ARIMA(p,d,q): d differencing orders; p AR terms; q MA terms on residuals.

- Non-stationary series break many model assumptions
- ADF p-value low → reject unit root (stationary)
- Over-differencing adds unnecessary noise
- ACF/PACF plots guide p and q selection`,
          keyPoints: [
            `Non-stationary series break many model assumptions`,
            `ADF p-value low → reject unit root (stationary)`,
            `Over-differencing adds unnecessary noise`,
            `ACF/PACF plots guide p and q selection`
          ]
        },
        {
          id: `arima`,
          title: `ARIMA Modeling`,
          content: `Fit with \`ARIMA(endog, order=(p,d,q))\`. Select orders via AIC on grid search or \`auto_arima\` (pmdarima). Residual diagnostics: Ljung-Box test on autocorrelation.

Train on rolling windows for realistic evaluation—random splits leak future into past.

- Use AIC/BIC for model comparison
- Check residual ACF for uncorrelated errors
- Walk-forward validation for forecasting
- Exogenous variables → ARIMAX/SARIMAX`,
          example: `import numpy as np
y = np.random.randn(100).cumsum()
print(len(y))`,
          keyPoints: [
            `Use AIC/BIC for model comparison`,
            `Check residual ACF for uncorrelated errors`,
            `Walk-forward validation for forecasting`,
            `Exogenous variables → ARIMAX/SARIMAX`
          ]
        },
        {
          id: `seasonal-arima`,
          title: `SARIMA`,
          content: `**SARIMA** adds seasonal AR/I/MA terms: (P,D,Q,s). Captures monthly/weekly patterns. Example: s=12 for monthly data with yearly seasonality.

Prophet and neural approaches complement classical SARIMA on messy business series with holidays.

- Seasonal order (P,D,Q,s) requires sufficient history
- Multiple seasonalities need complex models
- Interpolate missing timestamps carefully
- Document timezone and aggregation level`,
          keyPoints: [
            `Seasonal order (P,D,Q,s) requires sufficient history`,
            `Multiple seasonalities need complex models`,
            `Interpolate missing timestamps carefully`,
            `Document timezone and aggregation level`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-ts-1`,
          question: `Last first-difference of [3,5,8] is 3.`,
          solution: `import numpy as np
y=np.array([3,5,8])
print(y[-1]-y[-2])`,
          difficulty: `easy`
        },
        {
          id: `ex-ts-2`,
          question: `Print length of monthly date_range 12 months.`,
          solution: `import pandas as pd
print(len(pd.date_range("2024-01-01", periods=12, freq="MS")))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 45,
      module: `module-24`,
      references: [
        {
          id: `pandas-timeseries`,
          title: `Time Series / Date Functionality`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/user_guide/timeseries.html`,
          description: `DatetimeIndex, resampling, and time-based aggregations.`
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
      id: `ml-forecasting`,
      title: `Forecasting with Prophet & sklearn`,
      description: `Practical forecasting pipelines for business time series.`,
      level: `advanced`,
      track: `ml`,
      sections: [
        {
          id: `prophet`,
          title: `Facebook Prophet`,
          content: `**Prophet** models trend changepoints, seasonality (daily/weekly/yearly), and holidays via additive components. Robust to missing data and outliers. API: \`Prophet().fit(df)\` with columns \`ds\`, \`y\`.

Tune \`changepoint_prior_scale\` for flexibility vs overfit.

- Prophet expects ds datetime and y numeric
- Holiday dataframe adds domain events
- Cross-validation via prophet.diagnostics
- Uncertain trend near sparse data`,
          example: `import pandas as pd
df = pd.DataFrame({"ds": pd.date_range("2023-01-01", periods=5), "y": [1,2,3,4,5]})
print(list(df.columns))`,
          output: `['ds', 'y']`,
          keyPoints: [
            `Prophet expects ds datetime and y numeric`,
            `Holiday dataframe adds domain events`,
            `Cross-validation via prophet.diagnostics`,
            `Uncertain trend near sparse data`
          ]
        },
        {
          id: `sklearn-ts`,
          title: `sklearn Time Series Splits`,
          content: `**TimeSeriesSplit** preserves temporal order in CV—never shuffle time series. Lag features: use \`shift(k)\` to predict next step from past values.

\`HistGradientBoostingRegressor\` on lag features competes with Prophet on tabularized series.

- No random KFold for temporal data
- Feature leakage if using future lags
- Multi-step forecasting compounds error
- Baseline: naive last-value forecast`,
          example: `from sklearn.model_selection import TimeSeriesSplit
import numpy as np
tscv = TimeSeriesSplit(n_splits=3)
print(len(list(tscv.split(np.arange(20).reshape(-1,1)))))`,
          output: `3`,
          keyPoints: [
            `No random KFold for temporal data`,
            `Feature leakage if using future lags`,
            `Multi-step forecasting compounds error`,
            `Baseline: naive last-value forecast`
          ]
        },
        {
          id: `metrics-ts`,
          title: `Forecast Metrics`,
          content: `**MAE**, **RMSE**, **MAPE** (avoid when y near zero), **sMAPE** symmetric. Scale-free **MASE** compares to naive. Report metrics on holdout horizon matching business need.

Probabilistic forecasts: prediction intervals from Prophet or quantile regression.

- Choose metric aligned to business cost
- MAPE unstable for intermittent demand
- Track forecast bias not only magnitude error
- Probabilistic forecasts support inventory decisions`,
          keyPoints: [
            `Choose metric aligned to business cost`,
            `MAPE unstable for intermittent demand`,
            `Track forecast bias not only magnitude error`,
            `Probabilistic forecasts support inventory decisions`
          ]
        },
        {
          id: `pipeline`,
          title: `Production Forecast Pipelines`,
          content: `Schedule retraining, monitor forecast error drift, version datasets with as-of timestamps. Feature store stores point-in-time correct lags.

Combine statistical and ML forecasts in ensembles weighted by recent performance.

- Automate retrain on new observations
- Alert when error exceeds baseline
- Document grain: hourly vs daily aggregation
- Ensemble diversifies model failure modes`,
          keyPoints: [
            `Automate retrain on new observations`,
            `Alert when error exceeds baseline`,
            `Document grain: hourly vs daily aggregation`,
            `Ensemble diversifies model failure modes`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-fc-1`,
          question: `TimeSeriesSplit n_splits=2 on 10 samples yields 2 splits.`,
          solution: `from sklearn.model_selection import TimeSeriesSplit
import numpy as np
print(len(list(TimeSeriesSplit(2).split(np.arange(10)))))`,
          difficulty: `easy`
        },
        {
          id: `ex-fc-2`,
          question: `Prophet df columns are ds and ___.`,
          solution: `print("y")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-24`,
      references: [
        {
          id: `pandas-timeseries`,
          title: `Time Series / Date Functionality`,
          source: `Pandas`,
          type: `documentation`,
          url: `https://pandas.pydata.org/docs/user_guide/timeseries.html`,
          description: `DatetimeIndex, resampling, and time-based aggregations.`
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
      id: `ml-recsys-collab`,
      title: `Collaborative Filtering`,
      description: `Recommend items from user-item interaction patterns.`,
      level: `advanced`,
      track: `ml`,
      sections: [
        {
          id: `matrix-factor`,
          title: `Matrix Factorization`,
          content: `User-item rating matrix **R** approximated by low-rank **UVᵀ**. Each user/item has latent embedding vector. Loss: squared error on observed ratings + regularization.

**Surprise** library implements SVD; deep MF adds nonlinearities.

- Sparsity: most user-item pairs unobserved
- Regularization prevents overfitting embeddings
- Bias terms capture user generosity/item popularity
- Cold start: new users/items lack history`,
          keyPoints: [
            `Sparsity: most user-item pairs unobserved`,
            `Regularization prevents overfitting embeddings`,
            `Bias terms capture user generosity/item popularity`,
            `Cold start: new users/items lack history`
          ]
        },
        {
          id: `neighborhood`,
          title: `Neighborhood Methods`,
          content: `User-based CF: similar users' ratings predict target. Item-based CF: similar items to those user liked—stable when users >> items.

Similarity: cosine, Pearson correlation. k nearest neighbors trade bias/variance.

- Item-item CF scales better for many users
- Normalize ratings to remove user bias
- k too small noisy; k too large dull
- Implicit feedback uses clicks/purchases not stars`,
          example: `import numpy as np
u = np.array([1,0,1]); v = np.array([1,1,0])
print(round(u@v/(np.linalg.norm(u)*np.linalg.norm(v)),2))`,
          output: `0.5`,
          keyPoints: [
            `Item-item CF scales better for many users`,
            `Normalize ratings to remove user bias`,
            `k too small noisy; k too large dull`,
            `Implicit feedback uses clicks/purchases not stars`
          ]
        },
        {
          id: `implicit`,
          title: `Implicit Feedback`,
          content: `Clicks, views, purchases treated as confidence-weighted preferences. **ALS** on implicit matrices optimizes weighted loss.

BPR pairwise ranking loss popular for top-K recommendation.

- Implicit signals abundant but ambiguous
- Weight by dwell time or purchase
- Optimize ranking not rating MSE
- Negative sampling from unobserved items`,
          keyPoints: [
            `Implicit signals abundant but ambiguous`,
            `Weight by dwell time or purchase`,
            `Optimize ranking not rating MSE`,
            `Negative sampling from unobserved items`
          ]
        },
        {
          id: `eval-recsys`,
          title: `Evaluating Recommenders`,
          content: `Offline: **precision@k**, **recall@k**, **NDCG**, **MAP**. Hold out recent interactions per user. Avoid popularity-only baseline beating everything.

Online A/B tests measure click-through and revenue—the ground truth.

- Temporal split mimics deployment
- Novelty and diversity metrics beyond accuracy
- Popularity bias inflates offline scores
- A/B test with guardrail metrics`,
          keyPoints: [
            `Temporal split mimics deployment`,
            `Novelty and diversity metrics beyond accuracy`,
            `Popularity bias inflates offline scores`,
            `A/B test with guardrail metrics`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-cf-1`,
          question: `Dot product zero for orthogonal [1,0] and [0,1].`,
          solution: `import numpy as np
print(np.dot([1,0],[0,1])==0)`,
          difficulty: `easy`
        },
        {
          id: `ex-cf-2`,
          question: `Matrix factorization uses ___ rank factors.`,
          solution: `print("low")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-24`,
      references: [
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
          id: `bishop-prml`,
          title: `Pattern Recognition and Machine Learning`,
          source: `Cambridge`,
          type: `book`,
          url: `https://www.microsoft.com/en-us/research/publication/pattern-recognition-machine-learning/`,
          description: `Rigorous treatment of probability, inference, and classical ML algorithms.`
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
      id: `ml-recsys-content`,
      title: `Content-Based Filtering`,
      description: `Recommend from item features and user preference profiles.`,
      level: `advanced`,
      track: `ml`,
      sections: [
        {
          id: `features`,
          title: `Item Feature Representations`,
          content: `Text: TF-IDF or embeddings from sentence transformers. Images: CNN embeddings. Metadata: one-hot or learned embeddings.

Build **item profile** vector summarizing attributes; user profile = aggregate of liked item vectors (weighted average).

- Rich features reduce cold-start for new items
- Embeddings capture semantic similarity
- Feature engineering encodes domain knowledge
- Normalize features before similarity`,
          keyPoints: [
            `Rich features reduce cold-start for new items`,
            `Embeddings capture semantic similarity`,
            `Feature engineering encodes domain knowledge`,
            `Normalize features before similarity`
          ]
        },
        {
          id: `similarity`,
          title: `Scoring & Retrieval`,
          content: `Recommend items closest to user profile via cosine similarity. **ANN indexes** scale to millions of items.

Hybrid: blend content scores with collaborative scores for coverage.

- Cosine similarity standard for sparse text vectors
- Re-rank top candidates with business rules
- Hybrid mitigates sparsity and cold start
- Filter already purchased items`,
          example: `import numpy as np
p=np.array([0.8,0.2]); i=np.array([0.6,0.4])
print((p@i)/(np.linalg.norm(p)*np.linalg.norm(i))>0)`,
          output: `True`,
          keyPoints: [
            `Cosine similarity standard for sparse text vectors`,
            `Re-rank top candidates with business rules`,
            `Hybrid mitigates sparsity and cold start`,
            `Filter already purchased items`
          ]
        },
        {
          id: `learning`,
          title: `Learning to Rank`,
          content: `Train model on (user, item, label) with features: similarity, popularity, category match. **LightGBM** lambdarank optimizes NDCG.

Two-tower neural networks embed users and items separately for fast retrieval.

- Pointwise vs pairwise vs listwise ranking losses
- Two-tower enables billion-scale retrieval
- Hard negative mining improves contrastive training
- Freshness features for news/catalog`,
          keyPoints: [
            `Pointwise vs pairwise vs listwise ranking losses`,
            `Two-tower enables billion-scale retrieval`,
            `Hard negative mining improves contrastive training`,
            `Freshness features for news/catalog`
          ]
        },
        {
          id: `limits`,
          title: `Content-Based Limits`,
          content: `Filter bubbles—only similar items recommended. Lack of serendipity vs collaborative discovery. Feature maintenance cost when catalog changes.

Mitigate with exploration, diversity re-ranking, or hybrid CF.

- Explicit diversity objectives in re-ranking
- Explore/exploit tradeoff in bandits
- Content alone misses collaborative signal
- Explain recommendations via feature attribution`,
          keyPoints: [
            `Explicit diversity objectives in re-ranking`,
            `Explore/exploit tradeoff in bandits`,
            `Content alone misses collaborative signal`,
            `Explain recommendations via feature attribution`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-cb-1`,
          question: `User profile often average of liked item ___.`,
          solution: `print("vectors")`,
          difficulty: `easy`
        },
        {
          id: `ex-cb-2`,
          question: `Cosine divides dot product by product of ___.`,
          solution: `print("norms")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 35,
      module: `module-24`,
      references: [
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
          id: `kaggle-intermediate-ml`,
          title: `Kaggle Learn — Intermediate Machine Learning`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/intermediate-machine-learning`,
          description: `Missing values, categorical variables, and pipeline best practices.`
        },
        {
          id: `bishop-prml`,
          title: `Pattern Recognition and Machine Learning`,
          source: `Cambridge`,
          type: `book`,
          url: `https://www.microsoft.com/en-us/research/publication/pattern-recognition-machine-learning/`,
          description: `Rigorous treatment of probability, inference, and classical ML algorithms.`
        }
      ]
    },
{
      id: `ml-imbalanced`,
      title: `Imbalanced Classification`,
      description: `Handle skewed classes with resampling, weights, and proper metrics.`,
      level: `advanced`,
      track: `ml`,
      sections: [
        {
          id: `problem`,
          title: `Why Accuracy Fails`,
          content: `99% negatives → naive majority classifier achieves 99% accuracy but useless. **Precision**, **recall**, **F1**, **PR-AUC** focus on minority class.

**Confusion matrix** on minority rows reveals false negatives cost (e.g., missed fraud).

- Optimize metric matching business cost
- ROC-AUC optimistic when negatives dominate
- PR-AUC more informative on imbalance
- Report per-class not micro-only`,
          example: `from sklearn.metrics import recall_score
print(recall_score([0,0,1,1],[0,0,0,0]))`,
          output: `0.0`,
          keyPoints: [
            `Optimize metric matching business cost`,
            `ROC-AUC optimistic when negatives dominate`,
            `PR-AUC more informative on imbalance`,
            `Report per-class not micro-only`
          ]
        },
        {
          id: `smote`,
          title: `SMOTE & Resampling`,
          content: `**SMOTE** synthesizes minority samples by interpolating between neighbors. **Random oversampling** duplicates minority; **undersampling** reduces majority—risk information loss.

Apply resampling **inside CV folds** on training only to prevent leakage.

- SMOTE in imblearn pipeline with CV
- Borderline-SMOTE focuses on hard examples
- Undersampling when data huge and majority redundant
- Combine with class weights`,
          keyPoints: [
            `SMOTE in imblearn pipeline with CV`,
            `Borderline-SMOTE focuses on hard examples`,
            `Undersampling when data huge and majority redundant`,
            `Combine with class weights`
          ]
        },
        {
          id: `weights`,
          title: `Class Weights & Thresholds`,
          content: `sklearn \`class_weight="balanced"\` scales loss inversely to frequency. **Threshold tuning** on validation set trades precision vs recall.

Cost-sensitive learning assigns higher penalty to minority errors.

- Default 0.5 threshold rarely optimal
- Calibrate probabilities before thresholding
- class_weight easier than resampling sometimes
- Document chosen threshold for ops`,
          example: `from sklearn.linear_model import LogisticRegression
print(LogisticRegression(class_weight="balanced").class_weight)`,
          output: `balanced`,
          keyPoints: [
            `Default 0.5 threshold rarely optimal`,
            `Calibrate probabilities before thresholding`,
            `class_weight easier than resampling sometimes`,
            `Document chosen threshold for ops`
          ]
        },
        {
          id: `metrics-imb`,
          title: `Metrics & Monitoring`,
          content: `Track minority recall in production. **Balanced accuracy**, **MCC** (Matthews correlation). Stratified sampling in splits.

Slice metrics by segment— imbalance may vary by region or product line.

- Production SLA on minority class recall
- Alert when prediction distribution drifts
- Fairness across demographic slices
- Human review queue for borderline scores`,
          keyPoints: [
            `Production SLA on minority class recall`,
            `Alert when prediction distribution drifts`,
            `Fairness across demographic slices`,
            `Human review queue for borderline scores`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-imb-1`,
          question: `Recall 0 when never predicting positive class.`,
          solution: `from sklearn.metrics import recall_score
print(recall_score([1],[0]))`,
          difficulty: `easy`
        },
        {
          id: `ex-imb-2`,
          question: `LogisticRegression class_weight balanced.`,
          solution: `from sklearn.linear_model import LogisticRegression
print(LogisticRegression(class_weight="balanced").class_weight)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-24`,
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
          id: `fairlearn-docs`,
          title: `Fairlearn Documentation`,
          source: `Fairlearn`,
          type: `documentation`,
          url: `https://fairlearn.org/main/user_guide/index.html`,
          description: `Assessing and mitigating unfairness in machine learning models.`
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
          id: `kaggle-intermediate-ml`,
          title: `Kaggle Learn — Intermediate Machine Learning`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/intermediate-machine-learning`,
          description: `Missing values, categorical variables, and pipeline best practices.`
        }
      ]
    }
];
