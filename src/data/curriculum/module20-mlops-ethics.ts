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
          content: `joblib/pickle for sklearn. torch.save for PyTorch.

ONNX for cross-framework.

SavedModel for TensorFlow.

**Model Serialization** in the context of **Model Serialization & Serving**: Production AI systems need this concept when designing reliable pipelines. Test the example output, then use the takeaways when reviewing your own project designs.`,
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
          pseudoCode: `CONCEPT: Model Serialization

Checklist:
  1. joblib preferred over pickle for sklearn
  2. Save state_dict not entire PyTorch model
  3. Version models with metadata (data, metrics, params)
  4. Never unpickle untrusted files — security risk`
        },
        {
          id: `fastapi`,
          title: `FastAPI Model Serving`,
          content: `REST API for model inference.

Pydantic for input validation.

Async support for high throughput.

**FastAPI Model Serving** in the context of **Model Serialization & Serving**: Production AI systems need this concept when designing reliable pipelines. Test the example output, then use the takeaways when reviewing your own project designs.`,
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
          pseudoCode: `CONCEPT: FastAPI Model Serving

Checklist:
  1. FastAPI auto-generates OpenAPI docs
  2. Pydantic validates request schemas
  3. Load model once at startup not per request
  4. Return probabilities not just class labels`
        },
        {
          id: `onnx`,
          title: `ONNX Runtime`,
          content: `Export to ONNX for framework-agnostic deployment.

Optimized inference on CPU/GPU. torch.onnx.export, onnxruntime.

**ONNX Runtime** in the context of **Model Serialization & Serving**: Production AI systems need this concept when designing reliable pipelines. Test the example output, then use the takeaways when reviewing your own project designs.`,
          keyPoints: [
            `ONNX enables model portability`,
            `Graph optimizations in ONNX Runtime`,
            `Quantized ONNX models for edge deployment`,
            `Check operator compatibility before export`
          ],
          pseudoCode: `CONCEPT: ONNX Runtime

Checklist:
  1. ONNX enables model portability
  2. Graph optimizations in ONNX Runtime
  3. Quantized ONNX models for edge deployment
  4. Check operator compatibility before export`
        },
        {
          id: `batch-realtime`,
          title: `Batch vs Real-Time Inference`,
          content: `Batch: process large datasets offline (Spark, scheduled jobs).

Real-time: low-latency API (<100ms).

Streaming: continuous processing.

**Batch vs Real-Time Inference** in the context of **Model Serialization & Serving**: Production AI systems need this concept when designing reliable pipelines. Test the example output, then use the takeaways when reviewing your own project designs.`,
          keyPoints: [
            `Batch for bulk predictions overnight`,
            `Real-time for user-facing applications`,
            `Feature store ensures train-serve consistency`,
            `Caching frequent predictions reduces load`
          ],
          pseudoCode: `CONCEPT: Batch vs Real-Time Inference

Checklist:
  1. Batch for bulk predictions overnight
  2. Real-time for user-facing applications
  3. Feature store ensures train-serve consistency
  4. Caching frequent predictions reduces load`
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
          content: `Dockerfile: base image, COPY requirements, install deps, COPY code, CMD.

Reproducible environments across machines.

**Docker Basics for ML** in the context of **Docker & Cloud Deployment**: Production AI systems need this concept when designing reliable pipelines. Test the example output, then use the takeaways when reviewing your own project designs.`,
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
          pseudoCode: `CONCEPT: Docker Basics for ML

Checklist:
  1. Pin base image version for reproducibility
  2. Multi-stage builds reduce image size
  3. .dockerignore excludes unnecessary files
  4. Non-root user for security`
        },
        {
          id: `compose`,
          title: `Docker Compose`,
          content: `Multi-container apps: API + Redis + PostgreSQL. docker-compose.yml defines services, networks, volumes.

**Docker Compose** in the context of **Docker & Cloud Deployment**: Production AI systems need this concept when designing reliable pipelines. Test the example output, then use the takeaways when reviewing your own project designs.`,
          keyPoints: [
            `Compose for local development stacks`,
            `Define environment variables in compose file`,
            `Health checks ensure service readiness`,
            `Production: Kubernetes not Compose`
          ],
          pseudoCode: `CONCEPT: Docker Compose

Checklist:
  1. Compose for local development stacks
  2. Define environment variables in compose file
  3. Health checks ensure service readiness
  4. Production: Kubernetes not Compose`
        },
        {
          id: `cloud`,
          title: `Cloud ML Platforms`,
          content: `AWS SageMaker, GCP Vertex AI, Azure ML.

Managed training, deployment, monitoring.

Serverless: Lambda + container images.

**Cloud ML Platforms** in the context of **Docker & Cloud Deployment**: Production AI systems need this concept when designing reliable pipelines. Test the example output, then use the takeaways when reviewing your own project designs.`,
          keyPoints: [
            `Managed platforms reduce ops burden`,
            `SageMaker endpoints for real-time inference`,
            `Vertex AI unified Google Cloud ML platform`,
            `Cost optimization: spot instances for training`
          ],
          pseudoCode: `CONCEPT: Cloud ML Platforms

Checklist:
  1. Managed platforms reduce ops burden
  2. SageMaker endpoints for real-time inference
  3. Vertex AI unified Google Cloud ML platform
  4. Cost optimization: spot instances for training`
        },
        {
          id: `cicd`,
          title: `CI/CD for ML`,
          content: `GitHub Actions, Jenkins pipelines.

Test → train → evaluate → deploy if metrics pass.

MLflow tracks experiments.

**CI/CD for ML** in the context of **Docker & Cloud Deployment**: Production AI systems need this concept when designing reliable pipelines. Test the example output, then use the takeaways when reviewing your own project designs.`,
          keyPoints: [
            `Automated testing of data schemas and model metrics`,
            `Gate deployment on validation metric thresholds`,
            `MLflow or W&B for experiment tracking`,
            `Model registry manages production model versions`
          ],
          pseudoCode: `CONCEPT: CI/CD for ML

Checklist:
  1. Automated testing of data schemas and model metrics
  2. Gate deployment on validation metric thresholds
  3. MLflow or W&B for experiment tracking
  4. Model registry manages production model versions`
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
          content: `Track prediction latency, throughput, error rates.

Log inputs and outputs.

**Model Monitoring** in the context of **Monitoring & Drift Detection**: Production AI systems need this concept when designing reliable pipelines. Test the example output, then use the takeaways when reviewing your own project designs.`,
          keyPoints: [
            `Monitor latency p50, p95, p99 percentiles`,
            `Log predictions for debugging and retraining`,
            `Alert on error rate spikes`,
            `Prometheus + Grafana common stack`
          ],
          pseudoCode: `CONCEPT: Model Monitoring

Checklist:
  1. Monitor latency p50, p95, p99 percentiles
  2. Log predictions for debugging and retraining
  3. Alert on error rate spikes
  4. Prometheus + Grafana common stack`
        },
        {
          id: `drift`,
          title: `Data Drift & Concept Drift`,
          content: `Data drift: input distribution changes.

Concept drift: relationship X→Y changes.

Both degrade model performance over time.

**Data Drift & Concept Drift** in the context of **Monitoring & Drift Detection**: Production AI systems need this concept when designing reliable pipelines. Test the example output, then use the takeaways when reviewing your own project designs.`,
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
          pseudoCode: `CONCEPT: Data Drift & Concept Drift

Checklist:
  1. KS test for numerical feature drift detection
  2. PSI (Population Stability Index) common in finance
  3. Concept drift harder to detect without labels
  4. Scheduled retraining addresses drift`
        },
        {
          id: `evidently`,
          title: `Evidently AI & Tools`,
          content: `Evidently generates drift reports.

Great Expectations validates data.

WhyLabs for AI observability.

**Evidently AI & Tools** in the context of **Monitoring & Drift Detection**: Production AI systems need this concept when designing reliable pipelines. Test the example output, then use the takeaways when reviewing your own project designs.`,
          keyPoints: [
            `Evidently: data drift and model performance reports`,
            `Great Expectations: data validation suites`,
            `Compare production vs reference distributions`,
            `Automated reports in CI/CD pipeline`
          ],
          pseudoCode: `CONCEPT: Evidently AI & Tools

Checklist:
  1. Evidently: data drift and model performance reports
  2. Great Expectations: data validation suites
  3. Compare production vs reference distributions
  4. Automated reports in CI/CD pipeline`
        },
        {
          id: `retraining`,
          title: `Retraining Strategies`,
          content: `Scheduled retraining (weekly/monthly).

Trigger-based on drift detection.

Continuous learning with new labeled data.

**Retraining Strategies** in the context of **Monitoring & Drift Detection**: Production AI systems need this concept when designing reliable pipelines. Test the example output, then use the takeaways when reviewing your own project designs.`,
          keyPoints: [
            `Define retraining triggers and schedule`,
            `Champion/challenger model comparison`,
            `Rollback capability essential`,
            `Label delay complicates monitoring`
          ],
          pseudoCode: `CONCEPT: Retraining Strategies

Checklist:
  1. Define retraining triggers and schedule
  2. Champion/challenger model comparison
  3. Rollback capability essential
  4. Label delay complicates monitoring`
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
          content: `Historical bias in data. Representation bias from sampling.

Measurement bias from proxies. Evaluation bias from benchmarks.

**Types of Bias** in the context of **AI Ethics, Bias & Fairness**: Production AI systems need this concept when designing reliable pipelines. Test the example output, then use the takeaways when reviewing your own project designs.`,
          keyPoints: [
            `Bias often originates in data not algorithm`,
            `Protected attributes: race, gender, age, disability`,
            `Proxy variables encode protected attributes indirectly`,
            `Intersectionality: bias compounds across groups`
          ],
          pseudoCode: `CONCEPT: Types of Bias

Checklist:
  1. Bias often originates in data not algorithm
  2. Protected attributes: race, gender, age, disability
  3. Proxy variables encode protected attributes indirectly
  4. Intersectionality: bias compounds across groups`
        },
        {
          id: `fairness`,
          title: `Fairness Metrics`,
          content: `Demographic parity: equal positive rates across groups.

Equalized odds: equal TPR and FPR.

Calibration: equal probability meaning across groups.

**Fairness Metrics** in the context of **AI Ethics, Bias & Fairness**: Production AI systems need this concept when designing reliable pipelines. Test the example output, then use the takeaways when reviewing your own project designs.`,
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
          pseudoCode: `CONCEPT: Fairness Metrics

Checklist:
  1. Fairness metrics often mutually incompatible
  2. Choose metric based on domain and legal requirements
  3. fairlearn library implements fairness metrics
  4. Disparate impact ratio: 80% rule in US employment law`
        },
        {
          id: `mitigation`,
          title: `Bias Mitigation`,
          content: `Pre-processing: reweight, resample.

In-processing: fairness constraints.

Post-processing: adjust thresholds per group.

**Bias Mitigation** in the context of **AI Ethics, Bias & Fairness**: Production AI systems need this concept when designing reliable pipelines. Test the example output, then use the takeaways when reviewing your own project designs.`,
          keyPoints: [
            `Pre-processing modifies training data`,
            `In-processing adds fairness constraints to loss`,
            `Post-processing adjusts decision thresholds`,
            `Transparency about tradeoffs required`
          ],
          pseudoCode: `CONCEPT: Bias Mitigation

Checklist:
  1. Pre-processing modifies training data
  2. In-processing adds fairness constraints to loss
  3. Post-processing adjusts decision thresholds
  4. Transparency about tradeoffs required`
        },
        {
          id: `explain-ethics`,
          title: `Explainability & Accountability`,
          content: `Right to explanation (GDPR).

Model cards document intended use and limitations.

Impact assessments before deployment.

**Explainability & Accountability** in the context of **AI Ethics, Bias & Fairness**: Production AI systems need this concept when designing reliable pipelines. Test the example output, then use the takeaways when reviewing your own project designs.`,
          keyPoints: [
            `Model cards: intended use, training data, limitations`,
            `Algorithmic impact assessment for high-risk AI`,
            `Human oversight for consequential decisions`,
            `Document known failure modes and biases`
          ],
          pseudoCode: `CONCEPT: Explainability & Accountability

Checklist:
  1. Model cards: intended use, training data, limitations
  2. Algorithmic impact assessment for high-risk AI
  3. Human oversight for consequential decisions
  4. Document known failure modes and biases`
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
          content: `Fairness, transparency, accountability, privacy, safety, reliability.

Google, Microsoft, EU AI Act frameworks.

**Responsible AI Principles** in the context of **Responsible AI & Governance**: Production AI systems need this concept when designing reliable pipelines. Test the example output, then use the takeaways when reviewing your own project designs.`,
          keyPoints: [
            `Fairness: equitable outcomes across groups`,
            `Transparency: explainable decisions`,
            `Accountability: clear ownership and audit trails`,
            `Privacy: data minimization and consent`
          ],
          pseudoCode: `CONCEPT: Responsible AI Principles

Checklist:
  1. Fairness: equitable outcomes across groups
  2. Transparency: explainable decisions
  3. Accountability: clear ownership and audit trails
  4. Privacy: data minimization and consent`
        },
        {
          id: `eu-ai-act`,
          title: `EU AI Act`,
          content: `Risk-based regulation: unacceptable, high-risk, limited, minimal risk.

High-risk AI requires conformity assessment, documentation, human oversight.

**EU AI Act** in the context of **Responsible AI & Governance**: Production AI systems need this concept when designing reliable pipelines. Test the example output, then use the takeaways when reviewing your own project designs.`,
          keyPoints: [
            `Prohibited: social scoring, manipulative AI`,
            `High-risk: hiring, credit, medical, law enforcement`,
            `Requires risk management and data governance`,
            `Global impact — affects any AI serving EU users`
          ],
          pseudoCode: `CONCEPT: EU AI Act

Checklist:
  1. Prohibited: social scoring, manipulative AI
  2. High-risk: hiring, credit, medical, law enforcement
  3. Requires risk management and data governance
  4. Global impact — affects any AI serving EU users`
        },
        {
          id: `privacy`,
          title: `Privacy-Preserving ML`,
          content: `Differential privacy adds noise to protect individuals.

Federated learning trains without centralizing data.

Data anonymization techniques.

**Privacy-Preserving ML** in the context of **Responsible AI & Governance**: Production AI systems need this concept when designing reliable pipelines. Test the example output, then use the takeaways when reviewing your own project designs.`,
          keyPoints: [
            `Differential privacy mathematical privacy guarantee`,
            `Federated learning: model travels to data`,
            `k-anonymity, l-diversity for anonymization`,
            `PII detection and redaction in training data`
          ],
          pseudoCode: `CONCEPT: Privacy-Preserving ML

Checklist:
  1. Differential privacy mathematical privacy guarantee
  2. Federated learning: model travels to data
  3. k-anonymity, l-diversity for anonymization
  4. PII detection and redaction in training data`
        },
        {
          id: `red-team`,
          title: `Red Teaming & Safety`,
          content: `Adversarial testing of AI systems.

Jailbreak attempts, prompt injection, harmful output testing before release.

**Red Teaming & Safety** in the context of **Responsible AI & Governance**: Production AI systems need this concept when designing reliable pipelines. Test the example output, then use the takeaways when reviewing your own project designs.`,
          keyPoints: [
            `Red team before deploying LLM applications`,
            `Prompt injection: user overrides system instructions`,
            `Content filtering for harmful outputs`,
            `Safety training (RLHF) reduces but does not eliminate risks`
          ],
          pseudoCode: `CONCEPT: Red Teaming & Safety

Checklist:
  1. Red team before deploying LLM applications
  2. Prompt injection: user overrides system instructions
  3. Content filtering for harmful outputs
  4. Safety training (RLHF) reduces but does not eliminate risks`
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
