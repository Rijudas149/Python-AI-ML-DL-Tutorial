import type { Topic } from '../../types';

export const module28Topics: Topic[] = [
{
      id: `cap-portfolio`,
      title: `ML Portfolio Projects`,
      description: `Build showcase projects demonstrating end-to-end ML skills.`,
      level: `intermediate`,
      track: `ai`,
      sections: [
        {
          id: `structure`,
          title: `Project Structure`,
          content: `Strong portfolio project: problem statement, data, EDA, modeling, evaluation, deployment demo, README with architecture diagram. **Reproducible** Dockerfile or Colab with pinned deps.

Host on GitHub with clear license; include tests for data pipeline functions.

**Applying ML Portfolio Projects:** Build showcase projects demonstrating end-to-end ML skills. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Project Structure", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `README answers what/why/how/results in 2 minutes`,
            `Makefile or script reproduces end-to-end run`,
            `Avoid notebook-only without refactored modules`,
            `Live demo or Streamlit increases impact`
          ]
        },
        {
          id: `ideas`,
          title: `Project Ideas by Track`,
          content: `Tabular: churn prediction with SHAP. CV: custom object detector. NLP: RAG chatbot on domain docs. DL: fine-tune small LLM with LoRA.

Pick problems you can discuss deeply in interviews—not tutorial clones without twist.

**Applying ML Portfolio Projects:** Build showcase projects demonstrating end-to-end ML skills. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Project Ideas by Track", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Add unique angle: new dataset or metric`,
            `Show MLOps: logging, config, CI`,
            `Document failures and iterations`,
            `Open datasets with clear license`
          ]
        },
        {
          id: `presentation`,
          title: `Presenting Results`,
          content: `Lead with business metric movement not only accuracy. Visualize errors—confusion matrix slices, failure cases. Link to blog post walking through decisions.

Quantify: "Reduced false negatives 18% at same precision."

**Applying ML Portfolio Projects:** Build showcase projects demonstrating end-to-end ML skills. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Presenting Results", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Tailor narrative to audience technical level`,
            `Before/after comparisons resonate`,
            `Honest limitations build credibility`,
            `Short demo video for busy reviewers`
          ]
        },
        {
          id: `open-source`,
          title: `Contributing to Open Source`,
          content: `Start with docs fixes, tests, small bugs in libraries you use (sklearn, HF transformers). **Good first issue** labels welcome newcomers.

Contributions signal collaboration skills beyond solo Kaggle.

**Applying ML Portfolio Projects:** Build showcase projects demonstrating end-to-end ML skills. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Contributing to Open Source", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Read CONTRIBUTING.md before PR`,
            `One focused PR better than giant dump`,
            `Discuss design in issue before large change`,
            `Link contributions on resume and LinkedIn`
          ]
        },
        {
          id: `cap-portfolio-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

ML Portfolio Projects sits in the **ai** track of the Data Science Master curriculum. Build showcase projects demonstrating end-to-end ML skills.

LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.

For cap-portfolio, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (intermediate):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for ML Portfolio Projects
meta = {"topic_id": "cap-portfolio", "track": "ai", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `cap-portfolio ai intermediate`,
          keyPoints: [
            `Core theory of ML Portfolio Projects ties to the ai track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `cap-portfolio-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from ML Portfolio Projects. Ground responses with RAG, enforce JSON schemas for tool calls, red-team prompts before launch, log traces for audit, and gate high-risk actions with human approval.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For cap-portfolio, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for cap-portfolio
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("cap-portfolio", "ML Portfolio Projects")
print(ref.topic_id, ref.title.split()[0])`,
          output: `cap-portfolio ML`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with ai ecosystem conventions`
          ]
        },
        {
          id: `cap-portfolio-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on ML Portfolio Projects often hit predictable walls. Prompt injection, hallucinated citations, unbounded agent loops, secret leakage via training data, and fairness gaps across demographics require proactive testing.

When stuck on cap-portfolio, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("cap-portfolio", "ML Portfolio Projects")
debug_step("section_count", 4)`,
          output: `[cap-portfolio] 'ML Portfolio Projects' (str)
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
          id: `cap-portfolio-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

ML Portfolio Projects shows up wherever ai skills meet business constraints. Enterprises deploy copilots, search augmentation, and workflow automation with vector databases, observability stacks, and governance aligned to regulations like the EU AI Act.

Teams shipping features around cap-portfolio align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for ML Portfolio Projects
skills = ["ai", "intermediate", "cap-portfolio"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ai, intermediate, cap-portfolio`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect ML Portfolio Projects to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-port-1`,
          question: `Portfolio README should explain problem, data, model, and ___.`,
          solution: `print("results")`,
          difficulty: `easy`
        },
        {
          id: `ex-port-2`,
          question: `Pin dependencies in requirements.txt or ___.`,
          solution: `print("pyproject.toml")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 50,
      module: `module-28`,
      references: [
        {
          id: `stanford-cs224n`,
          title: `Stanford CS224N — NLP with Deep Learning`,
          source: `Stanford CS224N`,
          type: `course`,
          url: `http://web.stanford.edu/class/cs224n/`,
          description: `Premier NLP course covering embeddings, RNNs, transformers, and LLMs.`
        },
        {
          id: `huggingface-nlp-course`,
          title: `Hugging Face NLP Course`,
          source: `Hugging Face`,
          type: `course`,
          url: `https://huggingface.co/learn/nlp-course/chapter1/1`,
          description: `Hands-on transformers course using the Hugging Face ecosystem.`
        },
        {
          id: `attention-paper`,
          title: `Attention Is All You Need`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1706.03762`,
          description: `Transformer architecture paper that revolutionized NLP and beyond.`
        },
        {
          id: `gpt3-paper`,
          title: `Language Models are Few-Shot Learners (GPT-3)`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/2005.14165`,
          description: `Demonstrated emergent few-shot learning at scale with autoregressive LMs.`
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
    },
{
      id: `cap-kaggle`,
      title: `Kaggle Competition Strategy`,
      description: `Structured approach to competitive ML and learning from kernels.`,
      level: `intermediate`,
      track: `ai`,
      sections: [
        {
          id: `workflow`,
          title: `Competition Workflow`,
          content: `Read data description thoroughly. EDA notebook → baseline submission → feature engineering → model ensemble. **Public LB** can overfit—trust local CV.

Discussion forum gold for domain tips; verify leaks independently.

**Applying Kaggle Competition Strategy:** Structured approach to competitive ML and learning from kernels. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Competition Workflow", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Replicate baseline before complex models`,
            `Local CV strategy mirrors test if possible`,
            `Time-box EDA before endless plots`,
            `Submit early to verify format`
          ]
        },
        {
          id: `features`,
          title: `Feature Engineering on Kaggle`,
          content: `Tabular: target encoding with CV to prevent leak, interactions, aggregations by group. Text: TF-IDF, transformers. Image: augmentations, pseudo-labeling.

**Leakage** from future information top killer of trust in CV score.

**Applying Kaggle Competition Strategy:** Structured approach to competitive ML and learning from kernels. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Feature Engineering on Kaggle", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `GroupKFold when groups in data`,
            `Target encode with inner CV folds`,
            `External data check competition rules`,
            `Adversarial validation detect train/test shift`
          ]
        },
        {
          id: `ensemble`,
          title: `Ensembling & Stacking`,
          content: `Blend diverse models: GBDT + neural net + linear. **Stacking** meta-learner on out-of-fold preds. Rank averaging for robustness.

Diminishing returns after 4-5 uncorrelated strong models—know when to stop.

**Applying Kaggle Competition Strategy:** Structured approach to competitive ML and learning from kernels. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Ensembling & Stacking", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Diversity beats ten similar GBDTs`,
            `OOF predictions prevent stack leakage`,
            `Weighted average by CV score simple baseline`,
            `Seed averaging stabilizes neural submissions`
          ]
        },
        {
          id: `mindset`,
          title: `Learning Mindset`,
          content: `Top placements optional—learning transferable. Study winning solutions post-competition. Reimplement core trick in clean repo.

Team up to split EDA and modeling; communicate daily during crunch.

**Applying Kaggle Competition Strategy:** Structured approach to competitive ML and learning from kernels. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Learning Mindset", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Post-mortem writeups solidify learning`,
            `Do not burn out on leaderboard chasing`,
            `Reusable code > one-off notebook`,
            `Networking in competitions opens jobs`
          ]
        },
        {
          id: `cap-kaggle-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Kaggle Competition Strategy sits in the **ai** track of the Data Science Master curriculum. Structured approach to competitive ML and learning from kernels.

LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.

For cap-kaggle, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (intermediate):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Kaggle Competition Strategy
meta = {"topic_id": "cap-kaggle", "track": "ai", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `cap-kaggle ai intermediate`,
          keyPoints: [
            `Core theory of Kaggle Competition Strategy ties to the ai track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `cap-kaggle-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Kaggle Competition Strategy. Ground responses with RAG, enforce JSON schemas for tool calls, red-team prompts before launch, log traces for audit, and gate high-risk actions with human approval.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For cap-kaggle, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for cap-kaggle
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("cap-kaggle", "Kaggle Competition Strategy")
print(ref.topic_id, ref.title.split()[0])`,
          output: `cap-kaggle Kaggle`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with ai ecosystem conventions`
          ]
        },
        {
          id: `cap-kaggle-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Kaggle Competition Strategy often hit predictable walls. Prompt injection, hallucinated citations, unbounded agent loops, secret leakage via training data, and fairness gaps across demographics require proactive testing.

When stuck on cap-kaggle, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("cap-kaggle", "Kaggle Competition Strategy")
debug_step("section_count", 4)`,
          output: `[cap-kaggle] 'Kaggle Competition Strategy' (str)
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
          id: `cap-kaggle-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Kaggle Competition Strategy shows up wherever ai skills meet business constraints. Enterprises deploy copilots, search augmentation, and workflow automation with vector databases, observability stacks, and governance aligned to regulations like the EU AI Act.

Teams shipping features around cap-kaggle align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Kaggle Competition Strategy
skills = ["ai", "intermediate", "cap-kaggle"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ai, intermediate, cap-kaggle`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Kaggle Competition Strategy to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-kaggle-1`,
          question: `Trust local ___ over public leaderboard to avoid overfit.`,
          solution: `print("CV")`,
          difficulty: `easy`
        },
        {
          id: `ex-kaggle-2`,
          question: `Stacking uses out-of-___ predictions.`,
          solution: `print("fold")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 55,
      module: `module-28`,
      references: [
        {
          id: `stanford-cs224n`,
          title: `Stanford CS224N — NLP with Deep Learning`,
          source: `Stanford CS224N`,
          type: `course`,
          url: `http://web.stanford.edu/class/cs224n/`,
          description: `Premier NLP course covering embeddings, RNNs, transformers, and LLMs.`
        },
        {
          id: `huggingface-nlp-course`,
          title: `Hugging Face NLP Course`,
          source: `Hugging Face`,
          type: `course`,
          url: `https://huggingface.co/learn/nlp-course/chapter1/1`,
          description: `Hands-on transformers course using the Hugging Face ecosystem.`
        },
        {
          id: `attention-paper`,
          title: `Attention Is All You Need`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1706.03762`,
          description: `Transformer architecture paper that revolutionized NLP and beyond.`
        },
        {
          id: `gpt3-paper`,
          title: `Language Models are Few-Shot Learners (GPT-3)`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/2005.14165`,
          description: `Demonstrated emergent few-shot learning at scale with autoregressive LMs.`
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
    },
{
      id: `cap-interview`,
      title: `ML Interview Preparation`,
      description: `ML fundamentals, coding, system design, and behavioral preparation.`,
      level: `intermediate`,
      track: `ai`,
      sections: [
        {
          id: `ml-fundamentals`,
          title: `ML Concept Questions`,
          content: `Expect bias-variance, regularization, gradient descent variants, evaluation metrics, precision-recall tradeoff, ROC vs PR curves. Derive logistic loss intuitively.

**Whiteboard**: explain random forest, backprop sketch, transformer attention O(n²).

**Applying ML Interview Preparation:** ML fundamentals, coding, system design, and behavioral preparation. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "ML Concept Questions", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Explain simply then add nuance if prompted`,
            `Connect formulas to use cases`,
            `Know when linear models beat deep learning`,
            `Practice explaining projects in 3 minutes`
          ]
        },
        {
          id: `coding`,
          title: `ML Coding Interviews`,
          content: `Implement k-means, softmax, batch norm forward pass, BFS. pandas/sklearn snippets: groupby, merge, train_test_split with stratify.

LeetCode medium arrays/strings still common for MLE roles at big tech.

**Applying ML Interview Preparation:** ML fundamentals, coding, system design, and behavioral preparation. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "ML Coding Interviews", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          example: `def softmax(x):
    import numpy as np
    e = np.exp(x - np.max(x))
    return e / e.sum()
print(round(softmax([1.0,2.0])[1], 3))`,
          output: `0.731`,
          keyPoints: [
            `Numerically stable softmax subtracts max`,
            `Clarify input sizes and edge cases aloud`,
            `Vectorized numpy over loops when possible`,
            `Test with small example before optimizing`
          ]
        },
        {
          id: `system-design`,
          title: `ML System Design`,
          content: `Design recommendation feed, fraud detection, search ranking. Cover data, features, model, serving, monitoring, A/B test, failure modes.

Scale: batch vs online features, approximate NN retrieval, cache hot predictions.

**Applying ML Interview Preparation:** ML fundamentals, coding, system design, and behavioral preparation. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "ML System Design", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Start from requirements and SLAs`,
            `Draw data flow diagram`,
            `Discuss label delay and feedback loops`,
            `Mention fairness and privacy proactively`
          ]
        },
        {
          id: `behavioral`,
          title: `Behavioral & STAR`,
          content: `**STAR** (Situation, Task, Action, Result) for conflict, failure, leadership stories. Prepare "tell me about a project" with metrics.

Ask interviewers about team ML maturity, deployment frequency, research vs product balance.

**Applying ML Interview Preparation:** ML fundamentals, coding, system design, and behavioral preparation. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Behavioral & STAR", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Quantify impact in STAR results`,
            `Failure stories show growth`,
            `Prepare thoughtful questions for them`,
            `Mock interviews reduce anxiety`
          ]
        },
        {
          id: `cap-interview-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

ML Interview Preparation sits in the **ai** track of the Data Science Master curriculum. ML fundamentals, coding, system design, and behavioral preparation.

LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.

For cap-interview, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (intermediate):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for ML Interview Preparation
meta = {"topic_id": "cap-interview", "track": "ai", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `cap-interview ai intermediate`,
          keyPoints: [
            `Core theory of ML Interview Preparation ties to the ai track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `cap-interview-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from ML Interview Preparation. Ground responses with RAG, enforce JSON schemas for tool calls, red-team prompts before launch, log traces for audit, and gate high-risk actions with human approval.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For cap-interview, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for cap-interview
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("cap-interview", "ML Interview Preparation")
print(ref.topic_id, ref.title.split()[0])`,
          output: `cap-interview ML`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with ai ecosystem conventions`
          ]
        },
        {
          id: `cap-interview-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on ML Interview Preparation often hit predictable walls. Prompt injection, hallucinated citations, unbounded agent loops, secret leakage via training data, and fairness gaps across demographics require proactive testing.

When stuck on cap-interview, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("cap-interview", "ML Interview Preparation")
debug_step("section_count", 4)`,
          output: `[cap-interview] 'ML Interview Preparation' (str)
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
          id: `cap-interview-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

ML Interview Preparation shows up wherever ai skills meet business constraints. Enterprises deploy copilots, search augmentation, and workflow automation with vector databases, observability stacks, and governance aligned to regulations like the EU AI Act.

Teams shipping features around cap-interview align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for ML Interview Preparation
skills = ["ai", "intermediate", "cap-interview"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ai, intermediate, cap-interview`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect ML Interview Preparation to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-int-1`,
          question: `Implement sigmoid(0) == 0.5.`,
          solution: `import math
print(1/(1+math.exp(0)))`,
          difficulty: `easy`
        },
        {
          id: `ex-int-2`,
          question: `Stratified split preserves class ___.`,
          solution: `print("proportions")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 60,
      module: `module-28`,
      references: [
        {
          id: `stanford-cs224n`,
          title: `Stanford CS224N — NLP with Deep Learning`,
          source: `Stanford CS224N`,
          type: `course`,
          url: `http://web.stanford.edu/class/cs224n/`,
          description: `Premier NLP course covering embeddings, RNNs, transformers, and LLMs.`
        },
        {
          id: `huggingface-nlp-course`,
          title: `Hugging Face NLP Course`,
          source: `Hugging Face`,
          type: `course`,
          url: `https://huggingface.co/learn/nlp-course/chapter1/1`,
          description: `Hands-on transformers course using the Hugging Face ecosystem.`
        },
        {
          id: `attention-paper`,
          title: `Attention Is All You Need`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1706.03762`,
          description: `Transformer architecture paper that revolutionized NLP and beyond.`
        },
        {
          id: `gpt3-paper`,
          title: `Language Models are Few-Shot Learners (GPT-3)`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/2005.14165`,
          description: `Demonstrated emergent few-shot learning at scale with autoregressive LMs.`
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
    },
{
      id: `cap-research`,
      title: `Reading Papers & Reproduction`,
      description: `Efficiently understand research papers and reproduce key results.`,
      level: `advanced`,
      track: `ai`,
      sections: [
        {
          id: `reading`,
          title: `How to Read a Paper`,
          content: `First pass: title, abstract, figures, conclusion. Second: intro, method skim, experiments. Third: full math and related work.

**Annotate** assumptions and simplifications—what breaks in production?

**Applying Reading Papers & Reproduction:** Efficiently understand research papers and reproduce key results. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "How to Read a Paper", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Abstract claims vs evidence in experiments`,
            `Compare to prior SOTA tables fairly`,
            `Check dataset size and compute budget`,
            `Supplementary often has critical details`
          ]
        },
        {
          id: `venues`,
          title: `Venues & Preprints`,
          content: `**NeurIPS, ICML, ICLR, CVPR, ACL** peer-reviewed. **arXiv** preprints unreviewed—verify before citing as fact.

**Papers With Code** links implementations and leaderboards.

**Applying Reading Papers & Reproduction:** Efficiently understand research papers and reproduce key results. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Venues & Preprints", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Peer review not perfect but filters noise`,
            `arXiv version may update—note date`,
            `Benchmark cherry-picking common—read fine print`,
            `Twitter hype ≠ validated result`
          ]
        },
        {
          id: `reproduce`,
          title: `Reproducing Results`,
          content: `Start from official repo if exists; pin commits and seeds. Match hardware expectations—some papers need 8×GPU.

**Minimal reproduction**: core algorithm on subset before full scale.

**Applying Reading Papers & Reproduction:** Efficiently understand research papers and reproduce key results. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Reproducing Results", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Hidden hyperparameters in appendix or code`,
            `Data preprocessing must match exactly`,
            `Report what you could not reproduce`,
            `Contact authors politely for missing details`
          ]
        },
        {
          id: `contribute`,
          title: `From Reading to Contributing`,
          content: `Identify extension: new dataset, ablation, efficiency improvement. Write reproducible experiment script; open source with clear README.

Workshop and short papers valid first publication paths.

**Applying Reading Papers & Reproduction:** Efficiently understand research papers and reproduce key results. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "From Reading to Contributing", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Negative results valuable if well executed`,
            `Collaborate via Twitter/Discord research groups`,
            `Lit review before starting saves months`,
            `Ethics review for human subjects data`
          ]
        },
        {
          id: `cap-research-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Reading Papers & Reproduction sits in the **ai** track of the Data Science Master curriculum. Efficiently understand research papers and reproduce key results.

LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.

For cap-research, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Reading Papers & Reproduction
meta = {"topic_id": "cap-research", "track": "ai", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `cap-research ai advanced`,
          keyPoints: [
            `Core theory of Reading Papers & Reproduction ties to the ai track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `cap-research-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Reading Papers & Reproduction. Ground responses with RAG, enforce JSON schemas for tool calls, red-team prompts before launch, log traces for audit, and gate high-risk actions with human approval.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For cap-research, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for cap-research
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("cap-research", "Reading Papers & Reproduction")
print(ref.topic_id, ref.title.split()[0])`,
          output: `cap-research Reading`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with ai ecosystem conventions`
          ]
        },
        {
          id: `cap-research-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Reading Papers & Reproduction often hit predictable walls. Prompt injection, hallucinated citations, unbounded agent loops, secret leakage via training data, and fairness gaps across demographics require proactive testing.

When stuck on cap-research, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("cap-research", "Reading Papers & Reproduction")
debug_step("section_count", 4)`,
          output: `[cap-research] 'Reading Papers & Reproduction' (str)
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
          id: `cap-research-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Reading Papers & Reproduction shows up wherever ai skills meet business constraints. Enterprises deploy copilots, search augmentation, and workflow automation with vector databases, observability stacks, and governance aligned to regulations like the EU AI Act.

Teams shipping features around cap-research align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Reading Papers & Reproduction
skills = ["ai", "advanced", "cap-research"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ai, advanced, cap-research`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Reading Papers & Reproduction to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-paper-1`,
          question: `Skim abstract, figures, and ___ on first paper pass.`,
          solution: `print("conclusion")`,
          difficulty: `easy`
        },
        {
          id: `ex-paper-2`,
          question: `Papers With Code links papers to ___.`,
          solution: `print("implementations")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 50,
      module: `module-28`,
      references: [
        {
          id: `stanford-cs224n`,
          title: `Stanford CS224N — NLP with Deep Learning`,
          source: `Stanford CS224N`,
          type: `course`,
          url: `http://web.stanford.edu/class/cs224n/`,
          description: `Premier NLP course covering embeddings, RNNs, transformers, and LLMs.`
        },
        {
          id: `huggingface-nlp-course`,
          title: `Hugging Face NLP Course`,
          source: `Hugging Face`,
          type: `course`,
          url: `https://huggingface.co/learn/nlp-course/chapter1/1`,
          description: `Hands-on transformers course using the Hugging Face ecosystem.`
        },
        {
          id: `attention-paper`,
          title: `Attention Is All You Need`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1706.03762`,
          description: `Transformer architecture paper that revolutionized NLP and beyond.`
        },
        {
          id: `gpt3-paper`,
          title: `Language Models are Few-Shot Learners (GPT-3)`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/2005.14165`,
          description: `Demonstrated emergent few-shot learning at scale with autoregressive LMs.`
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
    },
{
      id: `cap-career`,
      title: `Career Paths in ML/AI`,
      description: `Roles, skills, and growth paths for ML engineers, data scientists, and researchers.`,
      level: `intermediate`,
      track: `ai`,
      sections: [
        {
          id: `roles`,
          title: `Role Definitions`,
          content: `**Data Scientist**: analysis, experimentation, stakeholder communication. **MLE**: production models, pipelines, serving. **Research Scientist**: novel methods, publications, long horizons.

Titles vary—read job descriptions not only labels.

**Applying Career Paths in ML/AI:** Roles, skills, and growth paths for ML engineers, data scientists, and researchers. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Role Definitions", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `DS leans stats and product analytics`,
            `MLE leans software and systems`,
            `Research needs strong math and paper track`,
            `Hybrid roles common at startups`
          ]
        },
        {
          id: `skills`,
          title: `Skill Progression`,
          content: `Foundation: Python, SQL, ML basics. Mid: deep learning, cloud, experiment tracking. Senior: system design, mentoring, cross-team influence.

**T-shaped**: deep in one area (NLP), broad awareness elsewhere.

**Applying Career Paths in ML/AI:** Roles, skills, and growth paths for ML engineers, data scientists, and researchers. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Skill Progression", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Communication as important as coding`,
            `Business context distinguishes senior ICs`,
            `Specialize after solid general base`,
            `Continuous learning non-optional in AI`
          ]
        },
        {
          id: `job-search`,
          title: `Job Search Tactics`,
          content: `Tailor resume bullets to metrics. LinkedIn + referrals strongest channel. Portfolio and GitHub linked prominently.

Prepare 30-second pitch and 2-minute project deep dive.

**Applying Career Paths in ML/AI:** Roles, skills, and growth paths for ML engineers, data scientists, and researchers. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Job Search Tactics", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Referrals bypass resume filters`,
            `Apply to teams not only companies`,
            `Negotiate total comp not only salary`,
            `Rejections normal—iterate resume`
          ]
        },
        {
          id: `growth`,
          title: `Long-Term Growth`,
          content: `Staff/principal paths: technical leadership without people management optional. Manager track: team delivery and hiring.

Contribute to standards, RFCs, internal platforms—impact multiplier.

**Applying Career Paths in ML/AI:** Roles, skills, and growth paths for ML engineers, data scientists, and researchers. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Long-Term Growth", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Document and teach to scale influence`,
            `Balance depth with organizational awareness`,
            `Ethics and responsible AI increasingly valued`,
            `Mentorship accelerates junior careers`
          ]
        },
        {
          id: `cap-career-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Career Paths in ML/AI sits in the **ai** track of the Data Science Master curriculum. Roles, skills, and growth paths for ML engineers, data scientists, and researchers.

LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.

For cap-career, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (intermediate):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Career Paths in ML/AI
meta = {"topic_id": "cap-career", "track": "ai", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `cap-career ai intermediate`,
          keyPoints: [
            `Core theory of Career Paths in ML/AI ties to the ai track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `cap-career-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Career Paths in ML/AI. Ground responses with RAG, enforce JSON schemas for tool calls, red-team prompts before launch, log traces for audit, and gate high-risk actions with human approval.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For cap-career, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for cap-career
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("cap-career", "Career Paths in ML/AI")
print(ref.topic_id, ref.title.split()[0])`,
          output: `cap-career Career`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with ai ecosystem conventions`
          ]
        },
        {
          id: `cap-career-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Career Paths in ML/AI often hit predictable walls. Prompt injection, hallucinated citations, unbounded agent loops, secret leakage via training data, and fairness gaps across demographics require proactive testing.

When stuck on cap-career, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("cap-career", "Career Paths in ML/AI")
debug_step("section_count", 4)`,
          output: `[cap-career] 'Career Paths in ML/AI' (str)
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
          id: `cap-career-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Career Paths in ML/AI shows up wherever ai skills meet business constraints. Enterprises deploy copilots, search augmentation, and workflow automation with vector databases, observability stacks, and governance aligned to regulations like the EU AI Act.

Teams shipping features around cap-career align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Career Paths in ML/AI
skills = ["ai", "intermediate", "cap-career"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ai, intermediate, cap-career`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Career Paths in ML/AI to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-career-1`,
          question: `MLE focuses on production ___ and serving.`,
          solution: `print("pipelines")`,
          difficulty: `easy`
        },
        {
          id: `ex-career-2`,
          question: `T-shaped skill profile: deep in one area, ___ elsewhere.`,
          solution: `print("broad")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 45,
      module: `module-28`,
      references: [
        {
          id: `stanford-cs224n`,
          title: `Stanford CS224N — NLP with Deep Learning`,
          source: `Stanford CS224N`,
          type: `course`,
          url: `http://web.stanford.edu/class/cs224n/`,
          description: `Premier NLP course covering embeddings, RNNs, transformers, and LLMs.`
        },
        {
          id: `huggingface-nlp-course`,
          title: `Hugging Face NLP Course`,
          source: `Hugging Face`,
          type: `course`,
          url: `https://huggingface.co/learn/nlp-course/chapter1/1`,
          description: `Hands-on transformers course using the Hugging Face ecosystem.`
        },
        {
          id: `attention-paper`,
          title: `Attention Is All You Need`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1706.03762`,
          description: `Transformer architecture paper that revolutionized NLP and beyond.`
        },
        {
          id: `gpt3-paper`,
          title: `Language Models are Few-Shot Learners (GPT-3)`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/2005.14165`,
          description: `Demonstrated emergent few-shot learning at scale with autoregressive LMs.`
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
