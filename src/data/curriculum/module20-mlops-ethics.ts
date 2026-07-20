import type { Topic } from '../../types';

export const module20Topics: Topic[] = [
{
      id: `ai-serving`,
      title: `Model Serialization & Serving`,
      description: `Save, load, and serve ML models in production.`,
      level: `advanced`,
      track: `ai`,
      sections: [
        {
          id: `serialize`,
          title: `Model Serialization`,
          content: `### Introduction

joblib/pickle for sklearn. torch.save for PyTorch. ONNX for cross-framework. SavedModel for TensorFlow.

### Model Serialization

### Key Ideas

- joblib preferred over pickle for sklearn
- Save state_dict not entire PyTorch model
- Version models with metadata (data, metrics, params)
- Never unpickle untrusted files — security risk

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `import joblib
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris

clf = RandomForestClassifier(random_state=42).fit(*load_iris(return_X_y=True))
joblib.dump(clf, "model.joblib")
loaded = joblib.load("model.joblib")
print(loaded.score(*load_iris(return_X_y=True)))`,
          keyPoints: [
            `joblib preferred over pickle for sklearn`,
            `Save state_dict not entire PyTorch model`,
            `Version models with metadata (data, metrics, params)`,
            `Never unpickle untrusted files — security risk`
          ],
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Never unpickle untrusted files — security risk.`,
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`
          ]
        },
        {
          id: `fastapi`,
          title: `FastAPI Model Serving`,
          content: `### Introduction

REST API for model inference. Pydantic for input validation.

### FastAPI Model Serving

Async support for high throughput.

### Key Ideas

- FastAPI auto-generates OpenAPI docs
- Pydantic validates request schemas
- Load model once at startup not per request
- Return probabilities not just class labels

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class PredictRequest(BaseModel):
    features: list[float]

@app.post("/predict")
def predict(req: PredictRequest):
    return {"prediction": sum(req.features) / len(req.features)}`,
          keyPoints: [
            `FastAPI auto-generates OpenAPI docs`,
            `Pydantic validates request schemas`,
            `Load model once at startup not per request`,
            `Return probabilities not just class labels`
          ],
          diagram: `FastAPI Model Serving
Dataset → Train Fold → Validation Fold → Test Holdout`,
          commonMistakes: [
            `Serving a model trained on preprocessed data without the same pipeline in production`,
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`,
            `Deploying without output moderation on user-facing endpoints`
          ]
        },
        {
          id: `onnx`,
          title: `ONNX Runtime`,
          content: `### Introduction

Export to ONNX for framework-agnostic deployment. Optimized inference on CPU/GPU. torch.onnx.export, onnxruntime.

### ONNX Runtime

### Key Ideas

- ONNX enables model portability
- Graph optimizations in ONNX Runtime
- Quantized ONNX models for edge deployment
- Check operator compatibility before export`,
          keyPoints: [
            `ONNX enables model portability`,
            `Graph optimizations in ONNX Runtime`,
            `Quantized ONNX models for edge deployment`,
            `Check operator compatibility before export`
          ],
          diagram: `ONNX Runtime
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Measuring only fluency — not factual accuracy or task success`,
            `Deploying without output moderation on user-facing endpoints`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Serving a model trained on preprocessed data without the same pipeline in production`
          ]
        },
        {
          id: `batch-realtime`,
          title: `Batch vs Real-Time Inference`,
          content: `### Introduction

Batch: process large datasets offline (Spark, scheduled jobs). Real-time: low-latency API (<100ms).

### Batch vs Real-Time Inference

Streaming: continuous processing.

### Key Ideas

- Batch for bulk predictions overnight
- Real-time for user-facing applications
- Feature store ensures train-serve consistency
- Caching frequent predictions reduces load`,
          keyPoints: [
            `Batch for bulk predictions overnight`,
            `Real-time for user-facing applications`,
            `Feature store ensures train-serve consistency`,
            `Caching frequent predictions reduces load`
          ],
          diagram: `Batch vs Real-Time Inference
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Deploying without output moderation on user-facing endpoints`,
            `Serving a model trained on preprocessed data without the same pipeline in production`,
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-serve-1`,
          question: `Save sklearn model with joblib to "m.joblib".`,
          solution: `import joblib
from sklearn.linear_model import LogisticRegression
joblib.dump(LogisticRegression().fit([[0],[1]], [0,1]), "m.joblib")
print("saved")`,
          difficulty: `medium`
        },
        {
          id: `ex-serve-2`,
          question: `FastAPI endpoint returns sum of features list.`,
          solution: `def predict(features):
    return {"result": sum(features)}
print(predict([1,2,3]))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-20`,
      references: [
        {
          id: `mlflow-docs`,
          title: `MLflow Documentation`,
          source: `MLflow`,
          type: `documentation`,
          url: `https://mlflow.org/docs/latest/index.html`,
          description: `Open platform for experiment tracking, model registry, and deployment.`
        },
        {
          id: `torchserve-docs`,
          title: `TorchServe Documentation`,
          source: `PyTorch`,
          type: `documentation`,
          url: `https://pytorch.org/serve/`,
          description: `Production model serving for PyTorch with REST and gRPC APIs.`
        },
        {
          id: `onnx-docs`,
          title: `ONNX Documentation`,
          source: `ONNX`,
          type: `documentation`,
          url: `https://onnx.ai/onnx/intro/`,
          description: `Open format for interoperable model serialization across frameworks.`
        },
        {
          id: `pytorch-tutorials`,
          title: `PyTorch Tutorials`,
          source: `PyTorch`,
          type: `documentation`,
          url: `https://pytorch.org/tutorials/`,
          description: `Official tutorials from tensors through training loops and deployment.`
        }
      ]
    },
{
      id: `ai-docker`,
      title: `Docker & Cloud Deployment`,
      description: `Containerize and deploy ML applications to cloud.`,
      level: `advanced`,
      track: `ai`,
      sections: [
        {
          id: `docker`,
          title: `Docker Basics for ML`,
          content: `### Introduction

Dockerfile: base image, COPY requirements, install deps, COPY code, CMD. Reproducible environments across machines.

### Docker Basics for ML

### Key Ideas

- Pin base image version for reproducibility
- Multi-stage builds reduce image size
- .dockerignore excludes unnecessary files
- Non-root user for security

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `# Dockerfile example:
dockerfile = """
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
"""
print(dockerfile.strip().split("\\n")[0])`,
          output: `FROM python:3.11-slim`,
          keyPoints: [
            `Pin base image version for reproducibility`,
            `Multi-stage builds reduce image size`,
            `.dockerignore excludes unnecessary files`,
            `Non-root user for security`
          ],
          diagram: `Docker Basics for ML
Image → Conv → ReLU → Pool → Flatten → Dense → Class`,
          commonMistakes: [
            `Deploying without output moderation on user-facing endpoints`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`
          ]
        },
        {
          id: `compose`,
          title: `Docker Compose`,
          content: `### Introduction

Multi-container apps: API + Redis + PostgreSQL. docker-compose.yml defines services, networks, volumes.

### Docker Compose

### Key Ideas

- Compose for local development stacks
- Define environment variables in compose file
- Health checks ensure service readiness
- Production: Kubernetes not Compose`,
          keyPoints: [
            `Compose for local development stacks`,
            `Define environment variables in compose file`,
            `Health checks ensure service readiness`,
            `Production: Kubernetes not Compose`
          ],
          diagram: `Docker Compose
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Deploying without output moderation on user-facing endpoints`,
            `Serving a model trained on preprocessed data without the same pipeline in production`,
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`
          ]
        },
        {
          id: `cloud`,
          title: `Cloud ML Platforms`,
          content: `### Introduction

AWS SageMaker, GCP Vertex AI, Azure ML. Managed training, deployment, monitoring.

### Cloud ML Platforms

Serverless: Lambda + container images.

### Key Ideas

- Managed platforms reduce ops burden
- SageMaker endpoints for real-time inference
- Vertex AI unified Google Cloud ML platform
- Cost optimization: spot instances for training`,
          keyPoints: [
            `Managed platforms reduce ops burden`,
            `SageMaker endpoints for real-time inference`,
            `Vertex AI unified Google Cloud ML platform`,
            `Cost optimization: spot instances for training`
          ],
          diagram: `Cloud ML Platforms
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Serving a model trained on preprocessed data without the same pipeline in production`
          ]
        },
        {
          id: `cicd`,
          title: `CI/CD for ML`,
          content: `### Introduction

GitHub Actions, Jenkins pipelines. Test → train → evaluate → deploy if metrics pass.

### CI/CD for ML

MLflow tracks experiments.

### Key Ideas

- Automated testing of data schemas and model metrics
- Gate deployment on validation metric thresholds
- MLflow or W&B for experiment tracking
- Model registry manages production model versions`,
          keyPoints: [
            `Automated testing of data schemas and model metrics`,
            `Gate deployment on validation metric thresholds`,
            `MLflow or W&B for experiment tracking`,
            `Model registry manages production model versions`
          ],
          diagram: `CI/CD for ML
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Serving a model trained on preprocessed data without the same pipeline in production`,
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-docker-1`,
          question: `Dockerfile instruction to set working directory.`,
          solution: `print("WORKDIR /app")`,
          difficulty: `easy`
        },
        {
          id: `ex-docker-2`,
          question: `Name two cloud ML platforms.`,
          solution: `print(["AWS SageMaker", "GCP Vertex AI"])`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-20`,
      references: [
        {
          id: `docker-docs`,
          title: `Docker Documentation`,
          source: `Docker`,
          type: `documentation`,
          url: `https://docs.docker.com/get-started/`,
          description: `Containerization fundamentals for packaging ML applications.`
        },
        {
          id: `kubernetes-ml`,
          title: `Kubernetes Documentation`,
          source: `Kubernetes`,
          type: `documentation`,
          url: `https://kubernetes.io/docs/home/`,
          description: `Orchestrating containerized ML services at scale in production.`
        },
        {
          id: `torchserve-docs`,
          title: `TorchServe Documentation`,
          source: `PyTorch`,
          type: `documentation`,
          url: `https://pytorch.org/serve/`,
          description: `Production model serving for PyTorch with REST and gRPC APIs.`
        },
        {
          id: `mlflow-docs`,
          title: `MLflow Documentation`,
          source: `MLflow`,
          type: `documentation`,
          url: `https://mlflow.org/docs/latest/index.html`,
          description: `Open platform for experiment tracking, model registry, and deployment.`
        }
      ]
    },
{
      id: `ai-monitoring`,
      title: `Monitoring & Drift Detection`,
      description: `Track model performance and data quality in production.`,
      level: `advanced`,
      track: `ai`,
      sections: [
        {
          id: `monitoring`,
          title: `Model Monitoring`,
          content: `### Introduction

Track prediction latency, throughput, error rates. Log inputs and outputs. Alert on anomalies.

### Model Monitoring

### Key Ideas

- Monitor latency p50, p95, p99 percentiles
- Log predictions for debugging and retraining
- Alert on error rate spikes
- Prometheus + Grafana common stack`,
          keyPoints: [
            `Monitor latency p50, p95, p99 percentiles`,
            `Log predictions for debugging and retraining`,
            `Alert on error rate spikes`,
            `Prometheus + Grafana common stack`
          ],
          commonMistakes: [
            `Deploying without output moderation on user-facing endpoints`,
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`,
            `Deploying without output moderation on user-facing endpoints`
          ]
        },
        {
          id: `drift`,
          title: `Data Drift & Concept Drift`,
          content: `### Introduction

Data drift: input distribution changes. Concept drift: relationship X→Y changes.

### Data Drift & Concept Drift

Both degrade model performance over time.

### Key Ideas

- KS test for numerical feature drift detection
- PSI (Population Stability Index) common in finance
- Concept drift harder to detect without labels
- Scheduled retraining addresses drift

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `import numpy as np
from scipy import stats

# KS test detects distribution shift
ref = np.random.normal(0, 1, 1000)
current = np.random.normal(0.5, 1, 200)  # shifted mean
stat, pvalue = stats.ks_2samp(ref, current)
print(round(pvalue, 6))`,
          keyPoints: [
            `KS test for numerical feature drift detection`,
            `PSI (Population Stability Index) common in finance`,
            `Concept drift harder to detect without labels`,
            `Scheduled retraining addresses drift`
          ],
          commonMistakes: [
            `Deploying without output moderation on user-facing endpoints`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Concept drift harder to detect without labels.`,
            `Trusting LLM outputs as facts without retrieval or verification`
          ]
        },
        {
          id: `evidently`,
          title: `Evidently AI & Tools`,
          content: `### Introduction

Evidently generates drift reports. Great Expectations validates data.

### Evidently AI & Tools

WhyLabs for AI observability.

### Key Ideas

- Evidently: data drift and model performance reports
- Great Expectations: data validation suites
- Compare production vs reference distributions
- Automated reports in CI/CD pipeline`,
          keyPoints: [
            `Evidently: data drift and model performance reports`,
            `Great Expectations: data validation suites`,
            `Compare production vs reference distributions`,
            `Automated reports in CI/CD pipeline`
          ],
          diagram: `Evidently AI & Tools
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`,
            `Deploying without output moderation on user-facing endpoints`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `retraining`,
          title: `Retraining Strategies`,
          content: `### Introduction

Scheduled retraining (weekly/monthly). Trigger-based on drift detection.

### Retraining Strategies

Continuous learning with new labeled data.

### Key Ideas

- Define retraining triggers and schedule
- Champion/challenger model comparison
- Rollback capability essential
- Label delay complicates monitoring`,
          keyPoints: [
            `Define retraining triggers and schedule`,
            `Champion/challenger model comparison`,
            `Rollback capability essential`,
            `Label delay complicates monitoring`
          ],
          commonMistakes: [
            `Measuring only fluency — not factual accuracy or task success`,
            `Deploying without output moderation on user-facing endpoints`,
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-mon-1`,
          question: `Data drift means input ___ changed.`,
          solution: `print("distribution")`,
          difficulty: `easy`
        },
        {
          id: `ex-mon-2`,
          question: `KS test p-value near 0 suggests distributions are ___.`,
          solution: `print("different")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-20`,
      references: [
        {
          id: `evidently-ai`,
          title: `Evidently AI — ML Monitoring`,
          source: `Evidently AI`,
          type: `documentation`,
          url: `https://docs.evidentlyai.com/`,
          description: `Open-source tools for data drift detection and model performance monitoring.`
        },
        {
          id: `mlflow-docs`,
          title: `MLflow Documentation`,
          source: `MLflow`,
          type: `documentation`,
          url: `https://mlflow.org/docs/latest/index.html`,
          description: `Open platform for experiment tracking, model registry, and deployment.`
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
          id: `model-cards-paper`,
          title: `Model Cards for Model Reporting`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1810.03993`,
          description: `Framework for transparent documentation of ML model capabilities and limitations.`
        }
      ]
    },
{
      id: `ai-bias`,
      title: `AI Ethics, Bias & Fairness`,
      description: `Identify and mitigate bias in ML systems.`,
      level: `advanced`,
      track: `ai`,
      sections: [
        {
          id: `bias`,
          title: `Types of Bias`,
          content: `### Introduction

Representation bias from sampling. Measurement bias from proxies.

### Types of Bias

Evaluation bias from benchmarks.

### Key Ideas

- Bias often originates in data not algorithm
- Protected attributes: race, gender, age, disability
- Proxy variables encode protected attributes indirectly
- Intersectionality: bias compounds across groups`,
          keyPoints: [
            `Bias often originates in data not algorithm`,
            `Protected attributes: race, gender, age, disability`,
            `Proxy variables encode protected attributes indirectly`,
            `Intersectionality: bias compounds across groups`
          ],
          commonMistakes: [
            `Measuring only fluency — not factual accuracy or task success`,
            `Deploying without output moderation on user-facing endpoints`,
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`
          ]
        },
        {
          id: `fairness`,
          title: `Fairness Metrics`,
          content: `### Introduction

Demographic parity: equal positive rates across groups. Equalized odds: equal TPR and FPR.

### Fairness Metrics

Calibration: equal probability meaning across groups.

### Key Ideas

- Fairness metrics often mutually incompatible
- Choose metric based on domain and legal requirements
- fairlearn library implements fairness metrics
- Disparate impact ratio: 80% rule in US employment law

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `# Demographic parity: P(ŷ=1|A=0) should equal P(ŷ=1|A=1)
# where A is protected attribute
group_a_rate = 0.3
group_b_rate = 0.28
parity_diff = abs(group_a_rate - group_b_rate)
print(f"Demographic parity difference: {parity_diff}")`,
          output: `Demographic parity difference: 0.020000000000000018`,
          keyPoints: [
            `Fairness metrics often mutually incompatible`,
            `Choose metric based on domain and legal requirements`,
            `fairlearn library implements fairness metrics`,
            `Disparate impact ratio: 80% rule in US employment law`
          ],
          commonMistakes: [
            `Measuring only fluency — not factual accuracy or task success`,
            `Deploying without output moderation on user-facing endpoints`,
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`
          ]
        },
        {
          id: `mitigation`,
          title: `Bias Mitigation`,
          content: `### Introduction

Pre-processing: reweight, resample. In-processing: fairness constraints.

### Bias Mitigation

Post-processing: adjust thresholds per group.

### Key Ideas

- Pre-processing modifies training data
- In-processing adds fairness constraints to loss
- Post-processing adjusts decision thresholds
- Transparency about tradeoffs required`,
          keyPoints: [
            `Pre-processing modifies training data`,
            `In-processing adds fairness constraints to loss`,
            `Post-processing adjusts decision thresholds`,
            `Transparency about tradeoffs required`
          ],
          commonMistakes: [
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`,
            `Deploying without output moderation on user-facing endpoints`,
            `Trusting LLM outputs as facts without retrieval or verification`
          ]
        },
        {
          id: `explain-ethics`,
          title: `Explainability & Accountability`,
          content: `### Introduction

Right to explanation (GDPR). Model cards document intended use and limitations.

### Explainability & Accountability

Impact assessments before deployment.

### Key Ideas

- Model cards: intended use, training data, limitations
- Algorithmic impact assessment for high-risk AI
- Human oversight for consequential decisions
- Document known failure modes and biases`,
          keyPoints: [
            `Model cards: intended use, training data, limitations`,
            `Algorithmic impact assessment for high-risk AI`,
            `Human oversight for consequential decisions`,
            `Document known failure modes and biases`
          ],
          diagram: `Explainability & Accountability
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Serving a model trained on preprocessed data without the same pipeline in production`,
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-bias-1`,
          question: `Demographic parity requires equal ___ rates across groups.`,
          solution: `print("positive prediction")`,
          difficulty: `easy`
        },
        {
          id: `ex-bias-2`,
          question: `Compute parity difference between rates 0.4 and 0.35.`,
          solution: `print(abs(0.4 - 0.35))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-20`,
      references: [
        {
          id: `fairlearn-docs`,
          title: `Fairlearn Documentation`,
          source: `Fairlearn`,
          type: `documentation`,
          url: `https://fairlearn.org/main/user_guide/index.html`,
          description: `Assessing and mitigating unfairness in machine learning models.`
        },
        {
          id: `model-cards-paper`,
          title: `Model Cards for Model Reporting`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1810.03993`,
          description: `Framework for transparent documentation of ML model capabilities and limitations.`
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
          id: `google-responsible-ai`,
          title: `Google Responsible AI Practices`,
          source: `Google`,
          type: `documentation`,
          url: `https://ai.google/responsibility/responsible-ai-practices/`,
          description: `Industry guidelines for building fair, accountable AI systems.`
        }
      ]
    },
{
      id: `ai-governance`,
      title: `Responsible AI & Governance`,
      description: `Organizational frameworks for ethical AI development and deployment.`,
      level: `advanced`,
      track: `ai`,
      sections: [
        {
          id: `framework`,
          title: `Responsible AI Principles`,
          content: `### Introduction

Fairness, transparency, accountability, privacy, safety, reliability. Google, Microsoft, EU AI Act frameworks.

### Responsible AI Principles

### Key Ideas

- Fairness: equitable outcomes across groups
- Transparency: explainable decisions
- Accountability: clear ownership and audit trails
- Privacy: data minimization and consent`,
          keyPoints: [
            `Fairness: equitable outcomes across groups`,
            `Transparency: explainable decisions`,
            `Accountability: clear ownership and audit trails`,
            `Privacy: data minimization and consent`
          ],
          commonMistakes: [
            `Deploying without output moderation on user-facing endpoints`,
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`,
            `Deploying without output moderation on user-facing endpoints`
          ]
        },
        {
          id: `eu-ai-act`,
          title: `EU AI Act`,
          content: `### Introduction

Risk-based regulation: unacceptable, high-risk, limited, minimal risk. High-risk AI requires conformity assessment, documentation, human oversight.

### EU AI Act

### Key Ideas

- Prohibited: social scoring, manipulative AI
- High-risk: hiring, credit, medical, law enforcement
- Requires risk management and data governance
- Global impact — affects any AI serving EU users`,
          keyPoints: [
            `Prohibited: social scoring, manipulative AI`,
            `High-risk: hiring, credit, medical, law enforcement`,
            `Requires risk management and data governance`,
            `Global impact — affects any AI serving EU users`
          ],
          commonMistakes: [
            `Deploying without output moderation on user-facing endpoints`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`
          ]
        },
        {
          id: `privacy`,
          title: `Privacy-Preserving ML`,
          content: `### Introduction

Differential privacy adds noise to protect individuals. Federated learning trains without centralizing data.

### Privacy-Preserving ML

Data anonymization techniques.

### Key Ideas

- Differential privacy mathematical privacy guarantee
- Federated learning: model travels to data
- k-anonymity, l-diversity for anonymization
- PII detection and redaction in training data`,
          keyPoints: [
            `Differential privacy mathematical privacy guarantee`,
            `Federated learning: model travels to data`,
            `k-anonymity, l-diversity for anonymization`,
            `PII detection and redaction in training data`
          ],
          diagram: `Privacy-Preserving ML
Load → Profile → Visualize → Hypothesis → Transform`,
          commonMistakes: [
            `Measuring only fluency — not factual accuracy or task success`,
            `Deploying without output moderation on user-facing endpoints`,
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`
          ]
        },
        {
          id: `red-team`,
          title: `Red Teaming & Safety`,
          content: `### Introduction

Adversarial testing of AI systems. Jailbreak attempts, prompt injection, harmful output testing before release.

### Red Teaming & Safety

### Key Ideas

- Red team before deploying LLM applications
- Prompt injection: user overrides system instructions
- Content filtering for harmful outputs
- Safety training (RLHF) reduces but does not eliminate risks`,
          keyPoints: [
            `Red team before deploying LLM applications`,
            `Prompt injection: user overrides system instructions`,
            `Content filtering for harmful outputs`,
            `Safety training (RLHF) reduces but does not eliminate risks`
          ],
          diagram: `Red Teaming & Safety
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`,
            `Deploying without output moderation on user-facing endpoints`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-gov-1`,
          question: `Name two responsible AI principles.`,
          solution: `print(["fairness", "transparency"])`,
          difficulty: `easy`
        },
        {
          id: `ex-gov-2`,
          question: `Federated learning trains models without ___ data.`,
          solution: `print("centralizing")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-20`,
      references: [
        {
          id: `eu-ai-act`,
          title: `EU Artificial Intelligence Act`,
          source: `European Union`,
          type: `documentation`,
          url: `https://artificialintelligenceact.eu/`,
          description: `Comprehensive EU regulatory framework for high-risk AI systems.`
        },
        {
          id: `nist-ai-rmf`,
          title: `NIST AI Risk Management Framework`,
          source: `NIST`,
          type: `documentation`,
          url: `https://www.nist.gov/itl/ai-risk-management-framework`,
          description: `US framework for trustworthy AI development and governance.`
        },
        {
          id: `model-cards-paper`,
          title: `Model Cards for Model Reporting`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1810.03993`,
          description: `Framework for transparent documentation of ML model capabilities and limitations.`
        },
        {
          id: `google-responsible-ai`,
          title: `Google Responsible AI Practices`,
          source: `Google`,
          type: `documentation`,
          url: `https://ai.google/responsibility/responsible-ai-practices/`,
          description: `Industry guidelines for building fair, accountable AI systems.`
        }
      ]
    }
];
