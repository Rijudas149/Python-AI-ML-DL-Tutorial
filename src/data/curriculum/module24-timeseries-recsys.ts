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
          content: `Time series **decomposition** splits data into trend (long-term direction), seasonal (fixed-period cycles), and residual noise. **Additive** model: Y = T + S + R; **multiplicative** when seasonality scales with level.

\`statsmodels.tsa.seasonal_decompose\` visualizes components. Domain knowledge picks period: 7 for daily weekly pattern, 12 for monthly seasonality in annual data.

**Applying Time Series Foundations:** Decompose series, check stationarity, and fit ARIMA models. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Trend, Seasonality & Noise", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
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

**Applying Time Series Foundations:** Decompose series, check stationarity, and fit ARIMA models. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Stationarity & Differencing", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
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

**Applying Time Series Foundations:** Decompose series, check stationarity, and fit ARIMA models. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "ARIMA Modeling", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
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

**Applying Time Series Foundations:** Decompose series, check stationarity, and fit ARIMA models. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "SARIMA", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Seasonal order (P,D,Q,s) requires sufficient history`,
            `Multiple seasonalities need complex models`,
            `Interpolate missing timestamps carefully`,
            `Document timezone and aggregation level`
          ]
        },
        {
          id: `ml-timeseries-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Time Series Foundations sits in the **ml** track of the DL_Master curriculum. Decompose series, check stationarity, and fit ARIMA models.

Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For ml-timeseries, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Time Series Foundations
meta = {"topic_id": "ml-timeseries", "track": "ml", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ml-timeseries ml advanced`,
          keyPoints: [
            `Core theory of Time Series Foundations ties to the ml track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `ml-timeseries-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Time Series Foundations. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ml-timeseries, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for ml-timeseries
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ml-timeseries", "Time Series Foundations")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ml-timeseries Time`,
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
          id: `ml-timeseries-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Time Series Foundations often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on ml-timeseries, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("ml-timeseries", "Time Series Foundations")
debug_step("section_count", 4)`,
          output: `[ml-timeseries] 'Time Series Foundations' (str)
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
          id: `ml-timeseries-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Time Series Foundations shows up wherever ml skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around ml-timeseries align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Time Series Foundations
skills = ["ml", "advanced", "ml-timeseries"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ml, advanced, ml-timeseries`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Time Series Foundations to adjacent topics in the same track`
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
      estimatedMinutes: 60,
      module: `module-24`,
      references: [
        {
          id: `stanford-cs229`,
          title: `Stanford CS229 — Machine Learning`,
          source: `Stanford CS229`,
          type: `course`,
          url: `https://cs229.stanford.edu/`,
          description: `Andrew Ng's graduate ML course — the canonical theoretical foundation.`
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
          id: `coursera-andrew-ng`,
          title: `Machine Learning Specialization`,
          source: `Coursera`,
          type: `course`,
          url: `https://www.coursera.org/specializations/machine-learning-introduction`,
          description: `Andrew Ng's accessible introduction to supervised and unsupervised learning.`
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
          id: `kaggle-intro-ml`,
          title: `Kaggle Learn — Intro to Machine Learning`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/intro-to-machine-learning`,
          description: `Practical first steps with decision trees and model validation.`
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

**Applying Forecasting with Prophet & sklearn:** Practical forecasting pipelines for business time series. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Facebook Prophet", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
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

**Applying Forecasting with Prophet & sklearn:** Practical forecasting pipelines for business time series. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "sklearn Time Series Splits", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
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

**Applying Forecasting with Prophet & sklearn:** Practical forecasting pipelines for business time series. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Forecast Metrics", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
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

**Applying Forecasting with Prophet & sklearn:** Practical forecasting pipelines for business time series. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Production Forecast Pipelines", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Automate retrain on new observations`,
            `Alert when error exceeds baseline`,
            `Document grain: hourly vs daily aggregation`,
            `Ensemble diversifies model failure modes`
          ]
        },
        {
          id: `ml-forecasting-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Forecasting with Prophet & sklearn sits in the **ml** track of the DL_Master curriculum. Practical forecasting pipelines for business time series.

Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For ml-forecasting, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Forecasting with Prophet & sklearn
meta = {"topic_id": "ml-forecasting", "track": "ml", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ml-forecasting ml advanced`,
          keyPoints: [
            `Core theory of Forecasting with Prophet & sklearn ties to the ml track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `ml-forecasting-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Forecasting with Prophet & sklearn. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ml-forecasting, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for ml-forecasting
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ml-forecasting", "Forecasting with Prophet & sklearn")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ml-forecasting Forecasting`,
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
          id: `ml-forecasting-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Forecasting with Prophet & sklearn often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on ml-forecasting, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("ml-forecasting", "Forecasting with Prophet & sklearn")
debug_step("section_count", 4)`,
          output: `[ml-forecasting] 'Forecasting with Prophet & sklearn' (str)
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
          id: `ml-forecasting-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Forecasting with Prophet & sklearn shows up wherever ml skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around ml-forecasting align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Forecasting with Prophet & sklearn
skills = ["ml", "advanced", "ml-forecasting"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ml, advanced, ml-forecasting`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Forecasting with Prophet & sklearn to adjacent topics in the same track`
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
      estimatedMinutes: 55,
      module: `module-24`,
      references: [
        {
          id: `stanford-cs229`,
          title: `Stanford CS229 — Machine Learning`,
          source: `Stanford CS229`,
          type: `course`,
          url: `https://cs229.stanford.edu/`,
          description: `Andrew Ng's graduate ML course — the canonical theoretical foundation.`
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
          id: `coursera-andrew-ng`,
          title: `Machine Learning Specialization`,
          source: `Coursera`,
          type: `course`,
          url: `https://www.coursera.org/specializations/machine-learning-introduction`,
          description: `Andrew Ng's accessible introduction to supervised and unsupervised learning.`
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
          id: `kaggle-intro-ml`,
          title: `Kaggle Learn — Intro to Machine Learning`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/intro-to-machine-learning`,
          description: `Practical first steps with decision trees and model validation.`
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

**Applying Collaborative Filtering:** Recommend items from user-item interaction patterns. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Matrix Factorization", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
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

**Applying Collaborative Filtering:** Recommend items from user-item interaction patterns. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Neighborhood Methods", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
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

**Applying Collaborative Filtering:** Recommend items from user-item interaction patterns. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Implicit Feedback", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
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

**Applying Collaborative Filtering:** Recommend items from user-item interaction patterns. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Evaluating Recommenders", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Temporal split mimics deployment`,
            `Novelty and diversity metrics beyond accuracy`,
            `Popularity bias inflates offline scores`,
            `A/B test with guardrail metrics`
          ]
        },
        {
          id: `ml-recsys-collab-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Collaborative Filtering sits in the **ml** track of the DL_Master curriculum. Recommend items from user-item interaction patterns.

Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For ml-recsys-collab, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Collaborative Filtering
meta = {"topic_id": "ml-recsys-collab", "track": "ml", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ml-recsys-collab ml advanced`,
          keyPoints: [
            `Core theory of Collaborative Filtering ties to the ml track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `ml-recsys-collab-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Collaborative Filtering. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ml-recsys-collab, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for ml-recsys-collab
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ml-recsys-collab", "Collaborative Filtering")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ml-recsys-collab Collaborative`,
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
          id: `ml-recsys-collab-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Collaborative Filtering often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on ml-recsys-collab, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("ml-recsys-collab", "Collaborative Filtering")
debug_step("section_count", 4)`,
          output: `[ml-recsys-collab] 'Collaborative Filtering' (str)
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
          id: `ml-recsys-collab-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Collaborative Filtering shows up wherever ml skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around ml-recsys-collab align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Collaborative Filtering
skills = ["ml", "advanced", "ml-recsys-collab"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ml, advanced, ml-recsys-collab`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Collaborative Filtering to adjacent topics in the same track`
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
      estimatedMinutes: 55,
      module: `module-24`,
      references: [
        {
          id: `stanford-cs229`,
          title: `Stanford CS229 — Machine Learning`,
          source: `Stanford CS229`,
          type: `course`,
          url: `https://cs229.stanford.edu/`,
          description: `Andrew Ng's graduate ML course — the canonical theoretical foundation.`
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
          id: `coursera-andrew-ng`,
          title: `Machine Learning Specialization`,
          source: `Coursera`,
          type: `course`,
          url: `https://www.coursera.org/specializations/machine-learning-introduction`,
          description: `Andrew Ng's accessible introduction to supervised and unsupervised learning.`
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
          id: `kaggle-intro-ml`,
          title: `Kaggle Learn — Intro to Machine Learning`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/intro-to-machine-learning`,
          description: `Practical first steps with decision trees and model validation.`
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

**Applying Content-Based Filtering:** Recommend from item features and user preference profiles. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Item Feature Representations", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
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

**Applying Content-Based Filtering:** Recommend from item features and user preference profiles. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Scoring & Retrieval", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
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

**Applying Content-Based Filtering:** Recommend from item features and user preference profiles. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Learning to Rank", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
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

**Applying Content-Based Filtering:** Recommend from item features and user preference profiles. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Content-Based Limits", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Explicit diversity objectives in re-ranking`,
            `Explore/exploit tradeoff in bandits`,
            `Content alone misses collaborative signal`,
            `Explain recommendations via feature attribution`
          ]
        },
        {
          id: `ml-recsys-content-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Content-Based Filtering sits in the **ml** track of the DL_Master curriculum. Recommend from item features and user preference profiles.

Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For ml-recsys-content, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Content-Based Filtering
meta = {"topic_id": "ml-recsys-content", "track": "ml", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ml-recsys-content ml advanced`,
          keyPoints: [
            `Core theory of Content-Based Filtering ties to the ml track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `ml-recsys-content-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Content-Based Filtering. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ml-recsys-content, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for ml-recsys-content
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ml-recsys-content", "Content-Based Filtering")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ml-recsys-content Content-Based`,
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
          id: `ml-recsys-content-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Content-Based Filtering often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on ml-recsys-content, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("ml-recsys-content", "Content-Based Filtering")
debug_step("section_count", 4)`,
          output: `[ml-recsys-content] 'Content-Based Filtering' (str)
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
          id: `ml-recsys-content-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Content-Based Filtering shows up wherever ml skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around ml-recsys-content align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Content-Based Filtering
skills = ["ml", "advanced", "ml-recsys-content"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ml, advanced, ml-recsys-content`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Content-Based Filtering to adjacent topics in the same track`
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
      estimatedMinutes: 50,
      module: `module-24`,
      references: [
        {
          id: `stanford-cs229`,
          title: `Stanford CS229 — Machine Learning`,
          source: `Stanford CS229`,
          type: `course`,
          url: `https://cs229.stanford.edu/`,
          description: `Andrew Ng's graduate ML course — the canonical theoretical foundation.`
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
          id: `coursera-andrew-ng`,
          title: `Machine Learning Specialization`,
          source: `Coursera`,
          type: `course`,
          url: `https://www.coursera.org/specializations/machine-learning-introduction`,
          description: `Andrew Ng's accessible introduction to supervised and unsupervised learning.`
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
          id: `kaggle-intro-ml`,
          title: `Kaggle Learn — Intro to Machine Learning`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/intro-to-machine-learning`,
          description: `Practical first steps with decision trees and model validation.`
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

**Applying Imbalanced Classification:** Handle skewed classes with resampling, weights, and proper metrics. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Why Accuracy Fails", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
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

**Applying Imbalanced Classification:** Handle skewed classes with resampling, weights, and proper metrics. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "SMOTE & Resampling", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
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

**Applying Imbalanced Classification:** Handle skewed classes with resampling, weights, and proper metrics. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Class Weights & Thresholds", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
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

**Applying Imbalanced Classification:** Handle skewed classes with resampling, weights, and proper metrics. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Metrics & Monitoring", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Production SLA on minority class recall`,
            `Alert when prediction distribution drifts`,
            `Fairness across demographic slices`,
            `Human review queue for borderline scores`
          ]
        },
        {
          id: `ml-imbalanced-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Imbalanced Classification sits in the **ml** track of the DL_Master curriculum. Handle skewed classes with resampling, weights, and proper metrics.

Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For ml-imbalanced, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Imbalanced Classification
meta = {"topic_id": "ml-imbalanced", "track": "ml", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ml-imbalanced ml advanced`,
          keyPoints: [
            `Core theory of Imbalanced Classification ties to the ml track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `ml-imbalanced-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Imbalanced Classification. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ml-imbalanced, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for ml-imbalanced
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ml-imbalanced", "Imbalanced Classification")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ml-imbalanced Imbalanced`,
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
          id: `ml-imbalanced-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Imbalanced Classification often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on ml-imbalanced, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("ml-imbalanced", "Imbalanced Classification")
debug_step("section_count", 4)`,
          output: `[ml-imbalanced] 'Imbalanced Classification' (str)
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
          id: `ml-imbalanced-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Imbalanced Classification shows up wherever ml skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around ml-imbalanced align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Imbalanced Classification
skills = ["ml", "advanced", "ml-imbalanced"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ml, advanced, ml-imbalanced`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Imbalanced Classification to adjacent topics in the same track`
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
      estimatedMinutes: 55,
      module: `module-24`,
      references: [
        {
          id: `stanford-cs229`,
          title: `Stanford CS229 — Machine Learning`,
          source: `Stanford CS229`,
          type: `course`,
          url: `https://cs229.stanford.edu/`,
          description: `Andrew Ng's graduate ML course — the canonical theoretical foundation.`
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
          id: `coursera-andrew-ng`,
          title: `Machine Learning Specialization`,
          source: `Coursera`,
          type: `course`,
          url: `https://www.coursera.org/specializations/machine-learning-introduction`,
          description: `Andrew Ng's accessible introduction to supervised and unsupervised learning.`
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
          id: `kaggle-intro-ml`,
          title: `Kaggle Learn — Intro to Machine Learning`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/intro-to-machine-learning`,
          description: `Practical first steps with decision trees and model validation.`
        }
      ]
    }
];
