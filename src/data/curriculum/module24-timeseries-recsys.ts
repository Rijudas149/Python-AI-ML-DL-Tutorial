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
          content: `### Introduction

Time series **decomposition** splits data into trend (long-term direction), seasonal (fixed-period cycles), and residual noise. **Additive** model: Y = T + S + R; **multiplicative** when seasonality scales with level. \`statsmodels.tsa.seasonal_decompose\` visualizes components.

### Trend, Seasonality & Noise

Domain knowledge picks period: 7 for daily weekly pattern, 12 for monthly seasonality in annual data.

### Key Ideas

- Choose additive vs multiplicative by seasonal amplitude
- Period must match domain cycle
- Residuals should look random if model adequate
- Plot raw series before modeling

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          ],
          diagram: `Trend, Seasonality & Noise
Load → Profile → Visualize → Hypothesis → Transform`,
          commonMistakes: [
            `Target encoding without inner cross-validation — label leakage`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`
          ]
        },
        {
          id: `stationarity`,
          title: `Stationarity & Differencing`,
          content: `### Introduction

**Stationary** series have constant mean/variance and autocovariance depending only on lag. ADF test (\`adfuller\`) tests unit root.

### Stationarity & Differencing

**Differencing** ∇Y_t = Y_t - Y_{t-1} removes trend; seasonal differencing handles periodic trends. ARIMA(p,d,q): d differencing orders; p AR terms; q MA terms on residuals.

### Key Ideas

- Non-stationary series break many model assumptions
- ADF p-value low → reject unit root (stationary)
- Over-differencing adds unnecessary noise
- ACF/PACF plots guide p and q selection`,
          keyPoints: [
            `Non-stationary series break many model assumptions`,
            `ADF p-value low → reject unit root (stationary)`,
            `Over-differencing adds unnecessary noise`,
            `ACF/PACF plots guide p and q selection`
          ],
          diagram: `Stationarity & Differencing
Load → Profile → Visualize → Hypothesis → Transform`,
          commonMistakes: [
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`
          ]
        },
        {
          id: `arima`,
          title: `ARIMA Modeling`,
          content: `### Introduction

Fit with \`ARIMA(endog, order=(p,d,q))\`. Select orders via AIC on grid search or \`auto_arima\` (pmdarima).

### ARIMA Modeling

Residual diagnostics: Ljung-Box test on autocorrelation. Train on rolling windows for realistic evaluation—random splits leak future into past.

### Key Ideas

- Use AIC/BIC for model comparison
- Check residual ACF for uncorrelated errors
- Walk-forward validation for forecasting
- Exogenous variables → ARIMAX/SARIMAX

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `import numpy as np
y = np.random.randn(100).cumsum()
print(len(y))`,
          keyPoints: [
            `Use AIC/BIC for model comparison`,
            `Check residual ACF for uncorrelated errors`,
            `Walk-forward validation for forecasting`,
            `Exogenous variables → ARIMAX/SARIMAX`
          ],
          diagram: `ARIMA Modeling
Query → Embed → Retrieve → Augment Prompt → Generate`,
          commonMistakes: [
            `Target encoding without inner cross-validation — label leakage`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`
          ]
        },
        {
          id: `seasonal-arima`,
          title: `SARIMA`,
          content: `### Introduction

**SARIMA** adds seasonal AR/I/MA terms: (P,D,Q,s). Captures monthly/weekly patterns.

### SARIMA

Example: s=12 for monthly data with yearly seasonality. Prophet and neural approaches complement classical SARIMA on messy business series with holidays.

### Key Ideas

- Seasonal order (P,D,Q,s) requires sufficient history
- Multiple seasonalities need complex models
- Interpolate missing timestamps carefully
- Document timezone and aggregation level`,
          keyPoints: [
            `Seasonal order (P,D,Q,s) requires sufficient history`,
            `Multiple seasonalities need complex models`,
            `Interpolate missing timestamps carefully`,
            `Document timezone and aggregation level`
          ],
          commonMistakes: [
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`
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
          content: `### Introduction

**Prophet** models trend changepoints, seasonality (daily/weekly/yearly), and holidays via additive components. Robust to missing data and outliers.

### Facebook Prophet

API: \`Prophet().fit(df)\` with columns \`ds\`, \`y\`. Tune \`changepoint_prior_scale\` for flexibility vs overfit.

### Key Ideas

- Prophet expects ds datetime and y numeric
- Holiday dataframe adds domain events
- Cross-validation via prophet.diagnostics
- Uncertain trend near sparse data

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `import pandas as pd
df = pd.DataFrame({"ds": pd.date_range("2023-01-01", periods=5), "y": [1,2,3,4,5]})
print(list(df.columns))`,
          output: `['ds', 'y']`,
          keyPoints: [
            `Prophet expects ds datetime and y numeric`,
            `Holiday dataframe adds domain events`,
            `Cross-validation via prophet.diagnostics`,
            `Uncertain trend near sparse data`
          ],
          diagram: `Facebook Prophet
Dataset → Train Fold → Validation Fold → Test Holdout`,
          commonMistakes: [
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `sklearn-ts`,
          title: `sklearn Time Series Splits`,
          content: `### Introduction

**TimeSeriesSplit** preserves temporal order in CV—never shuffle time series. Lag features: use \`shift(k)\` to predict next step from past values.

### sklearn Time Series Splits

\`HistGradientBoostingRegressor\` on lag features competes with Prophet on tabularized series.

### Key Ideas

- No random KFold for temporal data
- Feature leakage if using future lags
- Multi-step forecasting compounds error
- Baseline: naive last-value forecast

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          ],
          diagram: `sklearn Time Series Splits
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Not stratifying splits for classification tasks`,
            `Serving a model trained on preprocessed data without the same pipeline in production`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`
          ]
        },
        {
          id: `metrics-ts`,
          title: `Forecast Metrics`,
          content: `### Introduction

**MAE**, **RMSE**, **MAPE** (avoid when y near zero), **sMAPE** symmetric. Scale-free **MASE** compares to naive.

### Forecast Metrics

Report metrics on holdout horizon matching business need. Probabilistic forecasts: prediction intervals from Prophet or quantile regression.

### Key Ideas

- Choose metric aligned to business cost
- MAPE unstable for intermittent demand
- Track forecast bias not only magnitude error
- Probabilistic forecasts support inventory decisions`,
          keyPoints: [
            `Choose metric aligned to business cost`,
            `MAPE unstable for intermittent demand`,
            `Track forecast bias not only magnitude error`,
            `Probabilistic forecasts support inventory decisions`
          ],
          commonMistakes: [
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `pipeline`,
          title: `Production Forecast Pipelines`,
          content: `### Introduction

Schedule retraining, monitor forecast error drift, version datasets with as-of timestamps. Feature store stores point-in-time correct lags.

### Production Forecast Pipelines

Combine statistical and ML forecasts in ensembles weighted by recent performance.

### Key Ideas

- Automate retrain on new observations
- Alert when error exceeds baseline
- Document grain: hourly vs daily aggregation
- Ensemble diversifies model failure modes`,
          keyPoints: [
            `Automate retrain on new observations`,
            `Alert when error exceeds baseline`,
            `Document grain: hourly vs daily aggregation`,
            `Ensemble diversifies model failure modes`
          ],
          diagram: `Production Forecast Pipelines
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Target encoding without inner cross-validation — label leakage`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`
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
          question: `Build a Prophet-ready DataFrame with ds and y columns from dates and values.`,
          solution: `import pandas as pd
df = pd.DataFrame({"ds": pd.date_range("2024-01-01", periods=3), "y": [10, 12, 11]})
print(list(df.columns))`,
          difficulty: `medium`
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
          content: `### Introduction

User-item rating matrix **R** approximated by low-rank **UVᵀ**. Each user/item has latent embedding vector.

### Matrix Factorization

Loss: squared error on observed ratings + regularization. **Surprise** library implements SVD; deep MF adds nonlinearities.

### Key Ideas

- Sparsity: most user-item pairs unobserved
- Regularization prevents overfitting embeddings
- Bias terms capture user generosity/item popularity
- Cold start: new users/items lack history`,
          keyPoints: [
            `Sparsity: most user-item pairs unobserved`,
            `Regularization prevents overfitting embeddings`,
            `Bias terms capture user generosity/item popularity`,
            `Cold start: new users/items lack history`
          ],
          diagram: `Matrix Factorization
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Using polynomial degree too high without regularization`,
            `Serving a model trained on preprocessed data without the same pipeline in production`
          ]
        },
        {
          id: `neighborhood`,
          title: `Neighborhood Methods`,
          content: `### Introduction

User-based CF: similar users' ratings predict target. Item-based CF: similar items to those user liked—stable when users >> items.

### Neighborhood Methods

Similarity: cosine, Pearson correlation. k nearest neighbors trade bias/variance.

### Key Ideas

- Item-item CF scales better for many users
- Normalize ratings to remove user bias
- k too small noisy; k too large dull
- Implicit feedback uses clicks/purchases not stars

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `import numpy as np
u = np.array([1,0,1]); v = np.array([1,1,0])
print(round(u@v/(np.linalg.norm(u)*np.linalg.norm(v)),2))`,
          output: `0.5`,
          keyPoints: [
            `Item-item CF scales better for many users`,
            `Normalize ratings to remove user bias`,
            `k too small noisy; k too large dull`,
            `Implicit feedback uses clicks/purchases not stars`
          ],
          commonMistakes: [
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`
          ]
        },
        {
          id: `implicit`,
          title: `Implicit Feedback`,
          content: `### Introduction

Clicks, views, purchases treated as confidence-weighted preferences. **ALS** on implicit matrices optimizes weighted loss.

### Implicit Feedback

BPR pairwise ranking loss popular for top-K recommendation.

### Key Ideas

- Implicit signals abundant but ambiguous
- Weight by dwell time or purchase
- Optimize ranking not rating MSE
- Negative sampling from unobserved items`,
          keyPoints: [
            `Implicit signals abundant but ambiguous`,
            `Weight by dwell time or purchase`,
            `Optimize ranking not rating MSE`,
            `Negative sampling from unobserved items`
          ],
          diagram: `Implicit Feedback
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`
          ]
        },
        {
          id: `eval-recsys`,
          title: `Evaluating Recommenders`,
          content: `### Introduction

Offline: **precision@k**, **recall@k**, **NDCG**, **MAP**. Hold out recent interactions per user.

### Evaluating Recommenders

Avoid popularity-only baseline beating everything. Online A/B tests measure click-through and revenue—the ground truth.

### Key Ideas

- Temporal split mimics deployment
- Novelty and diversity metrics beyond accuracy
- Popularity bias inflates offline scores
- A/B test with guardrail metrics`,
          keyPoints: [
            `Temporal split mimics deployment`,
            `Novelty and diversity metrics beyond accuracy`,
            `Popularity bias inflates offline scores`,
            `A/B test with guardrail metrics`
          ],
          diagram: `Evaluating Recommenders
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`
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
          question: `Approximate rank-2 factorization: 3x3 matrix from two rank-1 outer products.`,
          solution: `import numpy as np
u = np.array([1., 2., 3.])
v = np.array([0.5, 1., 0.25])
R = np.outer(u, v)
print(R.shape, round(float(R[0,0]), 2))`,
          difficulty: `medium`
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
          content: `### Introduction

Text: TF-IDF or embeddings from sentence transformers. Metadata: one-hot or learned embeddings.

### Item Feature Representations

Build **item profile** vector summarizing attributes; user profile = aggregate of liked item vectors (weighted average).

### Key Ideas

- Rich features reduce cold-start for new items
- Embeddings capture semantic similarity
- Feature engineering encodes domain knowledge
- Normalize features before similarity`,
          keyPoints: [
            `Rich features reduce cold-start for new items`,
            `Embeddings capture semantic similarity`,
            `Feature engineering encodes domain knowledge`,
            `Normalize features before similarity`
          ],
          diagram: `Item Feature Representations
Tokens → Embedding → Self-Attention → FFN → Output`,
          commonMistakes: [
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`
          ]
        },
        {
          id: `similarity`,
          title: `Scoring & Retrieval`,
          content: `### Introduction

Recommend items closest to user profile via cosine similarity. **ANN indexes** scale to millions of items.

### Scoring & Retrieval

Hybrid: blend content scores with collaborative scores for coverage.

### Key Ideas

- Cosine similarity standard for sparse text vectors
- Re-rank top candidates with business rules
- Hybrid mitigates sparsity and cold start
- Filter already purchased items

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `import numpy as np
p=np.array([0.8,0.2]); i=np.array([0.6,0.4])
print((p@i)/(np.linalg.norm(p)*np.linalg.norm(i))>0)`,
          output: `True`,
          keyPoints: [
            `Cosine similarity standard for sparse text vectors`,
            `Re-rank top candidates with business rules`,
            `Hybrid mitigates sparsity and cold start`,
            `Filter already purchased items`
          ],
          diagram: `Scoring & Retrieval
Image → Conv → ReLU → Pool → Flatten → Dense → Class`,
          commonMistakes: [
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `learning`,
          title: `Learning to Rank`,
          content: `### Introduction

Train model on (user, item, label) with features: similarity, popularity, category match. **LightGBM** lambdarank optimizes NDCG.

### Learning to Rank

Two-tower neural networks embed users and items separately for fast retrieval.

### Key Ideas

- Pointwise vs pairwise vs listwise ranking losses
- Two-tower enables billion-scale retrieval
- Hard negative mining improves contrastive training
- Freshness features for news/catalog`,
          keyPoints: [
            `Pointwise vs pairwise vs listwise ranking losses`,
            `Two-tower enables billion-scale retrieval`,
            `Hard negative mining improves contrastive training`,
            `Freshness features for news/catalog`
          ],
          diagram: `Learning to Rank
Query → Embed → Retrieve → Augment Prompt → Generate`,
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`
          ]
        },
        {
          id: `limits`,
          title: `Content-Based Limits`,
          content: `### Introduction

Filter bubbles—only similar items recommended. Lack of serendipity vs collaborative discovery.

### Content-Based Limits

Feature maintenance cost when catalog changes. Mitigate with exploration, diversity re-ranking, or hybrid CF.

### Key Ideas

- Explicit diversity objectives in re-ranking
- Explore/exploit tradeoff in bandits
- Content alone misses collaborative signal
- Explain recommendations via feature attribution`,
          keyPoints: [
            `Explicit diversity objectives in re-ranking`,
            `Explore/exploit tradeoff in bandits`,
            `Content alone misses collaborative signal`,
            `Explain recommendations via feature attribution`
          ],
          diagram: `Content-Based Limits
Image → Conv → ReLU → Pool → Flatten → Dense → Class`,
          commonMistakes: [
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-cb-1`,
          question: `Compute cosine similarity between two normalized item vectors.`,
          solution: `import numpy as np
a = np.array([1., 0., 0.]); b = np.array([0.9, 0.1, 0.])
a /= np.linalg.norm(a); b /= np.linalg.norm(b)
print(round(float(a @ b), 2))`,
          difficulty: `easy`
        },
        {
          id: `ex-cb-2`,
          question: `Build a user profile as the mean of two liked-item vectors.`,
          solution: `import numpy as np
liked = np.array([[1., 0.], [0., 1.]])
profile = liked.mean(axis=0)
print(profile.tolist())`,
          difficulty: `medium`
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
          content: `### Introduction

99% negatives → naive majority classifier achieves 99% accuracy but useless. **Precision**, **recall**, **F1**, **PR-AUC** focus on minority class.

### Why Accuracy Fails

**Confusion matrix** on minority rows reveals false negatives cost (e.g., missed fraud).

### Key Ideas

- Optimize metric matching business cost
- ROC-AUC optimistic when negatives dominate
- PR-AUC more informative on imbalance
- Report per-class not micro-only

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `from sklearn.metrics import recall_score
print(recall_score([0,0,1,1],[0,0,0,0]))`,
          output: `0.0`,
          keyPoints: [
            `Optimize metric matching business cost`,
            `ROC-AUC optimistic when negatives dominate`,
            `PR-AUC more informative on imbalance`,
            `Report per-class not micro-only`
          ],
          commonMistakes: [
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Not stratifying splits for classification tasks`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`
          ]
        },
        {
          id: `smote`,
          title: `SMOTE & Resampling`,
          content: `### Introduction

**SMOTE** synthesizes minority samples by interpolating between neighbors. **Random oversampling** duplicates minority; **undersampling** reduces majority—risk information loss.

### SMOTE & Resampling

Apply resampling **inside CV folds** on training only to prevent leakage.

### Key Ideas

- SMOTE in imblearn pipeline with CV
- Borderline-SMOTE focuses on hard examples
- Undersampling when data huge and majority redundant
- Combine with class weights`,
          keyPoints: [
            `SMOTE in imblearn pipeline with CV`,
            `Borderline-SMOTE focuses on hard examples`,
            `Undersampling when data huge and majority redundant`,
            `Combine with class weights`
          ],
          diagram: `SMOTE & Resampling
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `weights`,
          title: `Class Weights & Thresholds`,
          content: `### Introduction

sklearn \`class_weight="balanced"\` scales loss inversely to frequency. **Threshold tuning** on validation set trades precision vs recall.

### Class Weights & Thresholds

Cost-sensitive learning assigns higher penalty to minority errors.

### Key Ideas

- Default 0.5 threshold rarely optimal
- Calibrate probabilities before thresholding
- class_weight easier than resampling sometimes
- Document chosen threshold for ops

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `from sklearn.linear_model import LogisticRegression
print(LogisticRegression(class_weight="balanced").class_weight)`,
          output: `balanced`,
          keyPoints: [
            `Default 0.5 threshold rarely optimal`,
            `Calibrate probabilities before thresholding`,
            `class_weight easier than resampling sometimes`,
            `Document chosen threshold for ops`
          ],
          diagram: `Class Weights & Thresholds
Dataset → Train Fold → Validation Fold → Test Holdout`,
          commonMistakes: [
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`
          ]
        },
        {
          id: `metrics-imb`,
          title: `Metrics & Monitoring`,
          content: `### Introduction

Track minority recall in production. **Balanced accuracy**, **MCC** (Matthews correlation).

### Metrics & Monitoring

Stratified sampling in splits. Slice metrics by segment— imbalance may vary by region or product line.

### Key Ideas

- Production SLA on minority class recall
- Alert when prediction distribution drifts
- Fairness across demographic slices
- Human review queue for borderline scores`,
          keyPoints: [
            `Production SLA on minority class recall`,
            `Alert when prediction distribution drifts`,
            `Fairness across demographic slices`,
            `Human review queue for borderline scores`
          ],
          diagram: `Metrics & Monitoring
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`
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
