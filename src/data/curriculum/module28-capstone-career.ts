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
          content: `**Project Structure** is essential to **ML Portfolio Projects**. Build showcase projects demonstrating end-to-end ML skills. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Strong portfolio project: problem statement, data, EDA, modeling, evaluation, deployment demo, README with architecture diagram. **Reproducible** Dockerfile or Colab with pinned deps.

Host on GitHub with clear license; include tests for data pipeline functions.

**Applying ML Portfolio Projects:** Build showcase projects demonstrating end-to-end ML skills. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Project Structure", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Project Structure" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `README answers what/why/how/results in 2 minutes`,
            `Makefile or script reproduces end-to-end run`,
            `Avoid notebook-only without refactored modules`,
            `Live demo or Streamlit increases impact`,
            `Project Structure is a foundational piece of ML Portfolio Projects`,
            `Connect this section to the ai track and intermediate expectations`
          ],
          example: `# Concept check: Project Structure
meta = {
    "topic": "cap-portfolio",
    "section": "structure",
    "track": "ai",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: cap-portfolio
section: structure
track: ai
level: intermediate`,
          pseudoCode: `CONCEPT: Project Structure

Study checklist:
  1. README answers what/why/how/results in 2 minutes
  2. Makefile or script reproduces end-to-end run
  3. Avoid notebook-only without refactored modules
  4. Live demo or Streamlit increases impact
  5. Project Structure is a foundational piece of ML Portfolio Projects
  6. Connect this section to the ai track and intermediate expectations

Topic: ML Portfolio Projects
Track: ai | Level: intermediate`
        },
        {
          id: `ideas`,
          title: `Project Ideas by Track`,
          content: `**Project Ideas by Track** is essential to **ML Portfolio Projects**. Build showcase projects demonstrating end-to-end ML skills. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Tabular: churn prediction with SHAP. CV: custom object detector. NLP: RAG chatbot on domain docs. DL: fine-tune small LLM with LoRA.

Pick problems you can discuss deeply in interviews—not tutorial clones without twist.

**Applying ML Portfolio Projects:** Build showcase projects demonstrating end-to-end ML skills. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Project Ideas by Track", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Project Ideas by Track" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Add unique angle: new dataset or metric`,
            `Show MLOps: logging, config, CI`,
            `Document failures and iterations`,
            `Open datasets with clear license`,
            `Project Ideas by Track is a foundational piece of ML Portfolio Projects`,
            `Connect this section to the ai track and intermediate expectations`
          ],
          example: `# Concept check: Project Ideas by Track
meta = {
    "topic": "cap-portfolio",
    "section": "ideas",
    "track": "ai",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: cap-portfolio
section: ideas
track: ai
level: intermediate`,
          pseudoCode: `CONCEPT: Project Ideas by Track

Study checklist:
  1. Add unique angle: new dataset or metric
  2. Show MLOps: logging, config, CI
  3. Document failures and iterations
  4. Open datasets with clear license
  5. Project Ideas by Track is a foundational piece of ML Portfolio Projects
  6. Connect this section to the ai track and intermediate expectations

Topic: ML Portfolio Projects
Track: ai | Level: intermediate`
        },
        {
          id: `presentation`,
          title: `Presenting Results`,
          content: `**Presenting Results** is essential to **ML Portfolio Projects**. Build showcase projects demonstrating end-to-end ML skills. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Lead with business metric movement not only accuracy. Visualize errors—confusion matrix slices, failure cases. Link to blog post walking through decisions.

Quantify: "Reduced false negatives 18% at same precision."

**Applying ML Portfolio Projects:** Build showcase projects demonstrating end-to-end ML skills. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Presenting Results", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Presenting Results" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Tailor narrative to audience technical level`,
            `Before/after comparisons resonate`,
            `Honest limitations build credibility`,
            `Short demo video for busy reviewers`,
            `Presenting Results is a foundational piece of ML Portfolio Projects`,
            `Connect this section to the ai track and intermediate expectations`
          ],
          example: `# Concept check: Presenting Results
meta = {
    "topic": "cap-portfolio",
    "section": "presentation",
    "track": "ai",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: cap-portfolio
section: presentation
track: ai
level: intermediate`,
          pseudoCode: `CONCEPT: Presenting Results

Study checklist:
  1. Tailor narrative to audience technical level
  2. Before/after comparisons resonate
  3. Honest limitations build credibility
  4. Short demo video for busy reviewers
  5. Presenting Results is a foundational piece of ML Portfolio Projects
  6. Connect this section to the ai track and intermediate expectations

Topic: ML Portfolio Projects
Track: ai | Level: intermediate`
        },
        {
          id: `open-source`,
          title: `Contributing to Open Source`,
          content: `Start with docs fixes, tests, small bugs in libraries you use (sklearn, HF transformers). **Good first issue** labels welcome newcomers.

Contributions signal collaboration skills beyond solo Kaggle.

**Applying ML Portfolio Projects:** Build showcase projects demonstrating end-to-end ML skills. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Contributing to Open Source", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Contributing to Open Source" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Read CONTRIBUTING.md before PR`,
            `One focused PR better than giant dump`,
            `Discuss design in issue before large change`,
            `Link contributions on resume and LinkedIn`,
            `Contributing to Open Source is a foundational piece of ML Portfolio Projects`,
            `Connect this section to the ai track and intermediate expectations`
          ],
          example: `# Concept check: Contributing to Open Source
meta = {
    "topic": "cap-portfolio",
    "section": "open-source",
    "track": "ai",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: cap-portfolio
section: open-source
track: ai
level: intermediate`,
          pseudoCode: `CONCEPT: Contributing to Open Source

Study checklist:
  1. Read CONTRIBUTING.md before PR
  2. One focused PR better than giant dump
  3. Discuss design in issue before large change
  4. Link contributions on resume and LinkedIn
  5. Contributing to Open Source is a foundational piece of ML Portfolio Projects
  6. Connect this section to the ai track and intermediate expectations

Topic: ML Portfolio Projects
Track: ai | Level: intermediate`
        },
        {
          id: `cap-portfolio-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**ML Portfolio Projects** sits in the **ai** track of the Data Science Master curriculum. Build showcase projects demonstrating end-to-end ML skills.

**Theoretical foundation:** LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.

For **cap-portfolio**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
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
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of ML Portfolio Projects ties to the ai track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: ML Portfolio Projects
Track: ai | Level: intermediate`
        },
        {
          id: `cap-portfolio-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **ML Portfolio Projects**. Ground responses with RAG, enforce JSON schemas for tool calls, red-team prompts before launch, log traces for audit, and gate high-risk actions with human approval.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **cap-portfolio**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
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
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with ai ecosystem conventions

Topic: ML Portfolio Projects
Track: ai | Level: intermediate`
        },
        {
          id: `cap-portfolio-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **ML Portfolio Projects** often hit predictable walls. Prompt injection, hallucinated citations, unbounded agent loops, secret leakage via training data, and fairness gaps across demographics require proactive testing.

When stuck on **cap-portfolio**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:** The best debuggers narrow the search space in minutes by changing one variable at a time.`,
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
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: ML Portfolio Projects
Track: ai | Level: intermediate`
        },
        {
          id: `cap-portfolio-real-world`,
          title: `Real-World Applications`,
          content: `**ML Portfolio Projects** shows up wherever **ai** skills meet business constraints. Enterprises deploy copilots, search augmentation, and workflow automation with vector databases, observability stacks, and governance aligned to regulations like the EU AI Act.

Teams shipping features around **cap-portfolio** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
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
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect ML Portfolio Projects to adjacent topics in the same track

Topic: ML Portfolio Projects
Track: ai | Level: intermediate`
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
      estimatedMinutes: 124,
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

**Applying Kaggle Competition Strategy:** Structured approach to competitive ML and learning from kernels. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Competition Workflow", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Competition Workflow" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Replicate baseline before complex models`,
            `Local CV strategy mirrors test if possible`,
            `Time-box EDA before endless plots`,
            `Submit early to verify format`,
            `Competition Workflow is a foundational piece of Kaggle Competition Strategy`,
            `Connect this section to the ai track and intermediate expectations`
          ],
          example: `# Concept check: Competition Workflow
meta = {
    "topic": "cap-kaggle",
    "section": "workflow",
    "track": "ai",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: cap-kaggle
section: workflow
track: ai
level: intermediate`,
          pseudoCode: `CONCEPT: Competition Workflow

Study checklist:
  1. Replicate baseline before complex models
  2. Local CV strategy mirrors test if possible
  3. Time-box EDA before endless plots
  4. Submit early to verify format
  5. Competition Workflow is a foundational piece of Kaggle Competition Strategy
  6. Connect this section to the ai track and intermediate expectations

Topic: Kaggle Competition Strategy
Track: ai | Level: intermediate`
        },
        {
          id: `features`,
          title: `Feature Engineering on Kaggle`,
          content: `**Feature Engineering on Kaggle** is essential to **Kaggle Competition Strategy**. Structured approach to competitive ML and learning from kernels. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Tabular: target encoding with CV to prevent leak, interactions, aggregations by group. Text: TF-IDF, transformers. Image: augmentations, pseudo-labeling.

**Leakage** from future information top killer of trust in CV score.

**Applying Kaggle Competition Strategy:** Structured approach to competitive ML and learning from kernels. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Feature Engineering on Kaggle", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Feature Engineering on Kaggle" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `GroupKFold when groups in data`,
            `Target encode with inner CV folds`,
            `External data check competition rules`,
            `Adversarial validation detect train/test shift`,
            `Feature Engineering on Kaggle is a foundational piece of Kaggle Competition Strategy`,
            `Connect this section to the ai track and intermediate expectations`
          ],
          example: `# Concept check: Feature Engineering on Kaggle
meta = {
    "topic": "cap-kaggle",
    "section": "features",
    "track": "ai",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: cap-kaggle
section: features
track: ai
level: intermediate`,
          pseudoCode: `CONCEPT: Feature Engineering on Kaggle

Study checklist:
  1. GroupKFold when groups in data
  2. Target encode with inner CV folds
  3. External data check competition rules
  4. Adversarial validation detect train/test shift
  5. Feature Engineering on Kaggle is a foundational piece of Kaggle Competition Strategy
  6. Connect this section to the ai track and intermediate expectations

Topic: Kaggle Competition Strategy
Track: ai | Level: intermediate`
        },
        {
          id: `ensemble`,
          title: `Ensembling & Stacking`,
          content: `Blend diverse models: GBDT + neural net + linear. **Stacking** meta-learner on out-of-fold preds. Rank averaging for robustness.

Diminishing returns after 4-5 uncorrelated strong models—know when to stop.

**Applying Kaggle Competition Strategy:** Structured approach to competitive ML and learning from kernels. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Ensembling & Stacking", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Ensembling & Stacking" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Diversity beats ten similar GBDTs`,
            `OOF predictions prevent stack leakage`,
            `Weighted average by CV score simple baseline`,
            `Seed averaging stabilizes neural submissions`,
            `Ensembling & Stacking is a foundational piece of Kaggle Competition Strategy`,
            `Connect this section to the ai track and intermediate expectations`
          ],
          example: `# Concept check: Ensembling & Stacking
meta = {
    "topic": "cap-kaggle",
    "section": "ensemble",
    "track": "ai",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: cap-kaggle
section: ensemble
track: ai
level: intermediate`,
          pseudoCode: `CONCEPT: Ensembling & Stacking

Study checklist:
  1. Diversity beats ten similar GBDTs
  2. OOF predictions prevent stack leakage
  3. Weighted average by CV score simple baseline
  4. Seed averaging stabilizes neural submissions
  5. Ensembling & Stacking is a foundational piece of Kaggle Competition Strategy
  6. Connect this section to the ai track and intermediate expectations

Topic: Kaggle Competition Strategy
Track: ai | Level: intermediate`
        },
        {
          id: `mindset`,
          title: `Learning Mindset`,
          content: `**Learning Mindset** is essential to **Kaggle Competition Strategy**. Structured approach to competitive ML and learning from kernels. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Top placements optional—learning transferable. Study winning solutions post-competition. Reimplement core trick in clean repo.

Team up to split EDA and modeling; communicate daily during crunch.

**Applying Kaggle Competition Strategy:** Structured approach to competitive ML and learning from kernels. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Learning Mindset", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Learning Mindset" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Post-mortem writeups solidify learning`,
            `Do not burn out on leaderboard chasing`,
            `Reusable code > one-off notebook`,
            `Networking in competitions opens jobs`,
            `Learning Mindset is a foundational piece of Kaggle Competition Strategy`,
            `Connect this section to the ai track and intermediate expectations`
          ],
          example: `# Concept check: Learning Mindset
meta = {
    "topic": "cap-kaggle",
    "section": "mindset",
    "track": "ai",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: cap-kaggle
section: mindset
track: ai
level: intermediate`,
          pseudoCode: `CONCEPT: Learning Mindset

Study checklist:
  1. Post-mortem writeups solidify learning
  2. Do not burn out on leaderboard chasing
  3. Reusable code > one-off notebook
  4. Networking in competitions opens jobs
  5. Learning Mindset is a foundational piece of Kaggle Competition Strategy
  6. Connect this section to the ai track and intermediate expectations

Topic: Kaggle Competition Strategy
Track: ai | Level: intermediate`
        },
        {
          id: `cap-kaggle-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Kaggle Competition Strategy** sits in the **ai** track of the Data Science Master curriculum. Structured approach to competitive ML and learning from kernels.

**Theoretical foundation:** LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.

For **cap-kaggle**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
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
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Kaggle Competition Strategy ties to the ai track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Kaggle Competition Strategy
Track: ai | Level: intermediate`
        },
        {
          id: `cap-kaggle-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Kaggle Competition Strategy**. Ground responses with RAG, enforce JSON schemas for tool calls, red-team prompts before launch, log traces for audit, and gate high-risk actions with human approval.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **cap-kaggle**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
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
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with ai ecosystem conventions

Topic: Kaggle Competition Strategy
Track: ai | Level: intermediate`
        },
        {
          id: `cap-kaggle-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Kaggle Competition Strategy** often hit predictable walls. Prompt injection, hallucinated citations, unbounded agent loops, secret leakage via training data, and fairness gaps across demographics require proactive testing.

When stuck on **cap-kaggle**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:** The best debuggers narrow the search space in minutes by changing one variable at a time.`,
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
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: Kaggle Competition Strategy
Track: ai | Level: intermediate`
        },
        {
          id: `cap-kaggle-real-world`,
          title: `Real-World Applications`,
          content: `**Kaggle Competition Strategy** shows up wherever **ai** skills meet business constraints. Enterprises deploy copilots, search augmentation, and workflow automation with vector databases, observability stacks, and governance aligned to regulations like the EU AI Act.

Teams shipping features around **cap-kaggle** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
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
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Kaggle Competition Strategy to adjacent topics in the same track

Topic: Kaggle Competition Strategy
Track: ai | Level: intermediate`
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
      estimatedMinutes: 124,
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
          content: `**ML Concept Questions** is essential to **ML Interview Preparation**. ML fundamentals, coding, system design, and behavioral preparation. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Expect bias-variance, regularization, gradient descent variants, evaluation metrics, precision-recall tradeoff, ROC vs PR curves. Derive logistic loss intuitively.

**Whiteboard**: explain random forest, backprop sketch, transformer attention O(n²).

**Applying ML Interview Preparation:** ML fundamentals, coding, system design, and behavioral preparation. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "ML Concept Questions", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "ML Concept Questions" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Explain simply then add nuance if prompted`,
            `Connect formulas to use cases`,
            `Know when linear models beat deep learning`,
            `Practice explaining projects in 3 minutes`,
            `ML Concept Questions is a foundational piece of ML Interview Preparation`,
            `Connect this section to the ai track and intermediate expectations`
          ],
          example: `# Concept check: ML Concept Questions
meta = {
    "topic": "cap-interview",
    "section": "ml-fundamentals",
    "track": "ai",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: cap-interview
section: ml-fundamentals
track: ai
level: intermediate`,
          pseudoCode: `CONCEPT: ML Concept Questions

Study checklist:
  1. Explain simply then add nuance if prompted
  2. Connect formulas to use cases
  3. Know when linear models beat deep learning
  4. Practice explaining projects in 3 minutes
  5. ML Concept Questions is a foundational piece of ML Interview Preparation
  6. Connect this section to the ai track and intermediate expectations

Topic: ML Interview Preparation
Track: ai | Level: intermediate`
        },
        {
          id: `coding`,
          title: `ML Coding Interviews`,
          content: `**ML Coding Interviews** is essential to **ML Interview Preparation**. ML fundamentals, coding, system design, and behavioral preparation. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Implement k-means, softmax, batch norm forward pass, BFS. pandas/sklearn snippets: groupby, merge, train_test_split with stratify.

LeetCode medium arrays/strings still common for MLE roles at big tech.

**Applying ML Interview Preparation:** ML fundamentals, coding, system design, and behavioral preparation. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "ML Coding Interviews", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "ML Coding Interviews" here directly affects how confidently you can build, debug, and ship ai projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
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
            `Test with small example before optimizing`,
            `ML Coding Interviews is a foundational piece of ML Interview Preparation`,
            `Connect this section to the ai track and intermediate expectations`
          ],
          pseudoCode: `CONCEPT: ML Coding Interviews

Study checklist:
  1. Numerically stable softmax subtracts max
  2. Clarify input sizes and edge cases aloud
  3. Vectorized numpy over loops when possible
  4. Test with small example before optimizing
  5. ML Coding Interviews is a foundational piece of ML Interview Preparation
  6. Connect this section to the ai track and intermediate expectations

Topic: ML Interview Preparation
Track: ai | Level: intermediate`
        },
        {
          id: `system-design`,
          title: `ML System Design`,
          content: `**ML System Design** is essential to **ML Interview Preparation**. ML fundamentals, coding, system design, and behavioral preparation. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Design recommendation feed, fraud detection, search ranking. Cover data, features, model, serving, monitoring, A/B test, failure modes.

Scale: batch vs online features, approximate NN retrieval, cache hot predictions.

**Applying ML Interview Preparation:** ML fundamentals, coding, system design, and behavioral preparation. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "ML System Design", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "ML System Design" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Start from requirements and SLAs`,
            `Draw data flow diagram`,
            `Discuss label delay and feedback loops`,
            `Mention fairness and privacy proactively`,
            `ML System Design is a foundational piece of ML Interview Preparation`,
            `Connect this section to the ai track and intermediate expectations`
          ],
          example: `# Concept check: ML System Design
meta = {
    "topic": "cap-interview",
    "section": "system-design",
    "track": "ai",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: cap-interview
section: system-design
track: ai
level: intermediate`,
          pseudoCode: `CONCEPT: ML System Design

Study checklist:
  1. Start from requirements and SLAs
  2. Draw data flow diagram
  3. Discuss label delay and feedback loops
  4. Mention fairness and privacy proactively
  5. ML System Design is a foundational piece of ML Interview Preparation
  6. Connect this section to the ai track and intermediate expectations

Topic: ML Interview Preparation
Track: ai | Level: intermediate`
        },
        {
          id: `behavioral`,
          title: `Behavioral & STAR`,
          content: `**STAR** (Situation, Task, Action, Result) for conflict, failure, leadership stories. Prepare "tell me about a project" with metrics.

Ask interviewers about team ML maturity, deployment frequency, research vs product balance.

**Applying ML Interview Preparation:** ML fundamentals, coding, system design, and behavioral preparation. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Behavioral & STAR", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Behavioral & STAR" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Quantify impact in STAR results`,
            `Failure stories show growth`,
            `Prepare thoughtful questions for them`,
            `Mock interviews reduce anxiety`,
            `Behavioral & STAR is a foundational piece of ML Interview Preparation`,
            `Connect this section to the ai track and intermediate expectations`
          ],
          example: `# Concept check: Behavioral & STAR
meta = {
    "topic": "cap-interview",
    "section": "behavioral",
    "track": "ai",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: cap-interview
section: behavioral
track: ai
level: intermediate`,
          pseudoCode: `CONCEPT: Behavioral & STAR

Study checklist:
  1. Quantify impact in STAR results
  2. Failure stories show growth
  3. Prepare thoughtful questions for them
  4. Mock interviews reduce anxiety
  5. Behavioral & STAR is a foundational piece of ML Interview Preparation
  6. Connect this section to the ai track and intermediate expectations

Topic: ML Interview Preparation
Track: ai | Level: intermediate`
        },
        {
          id: `cap-interview-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**ML Interview Preparation** sits in the **ai** track of the Data Science Master curriculum. ML fundamentals, coding, system design, and behavioral preparation.

**Theoretical foundation:** LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.

For **cap-interview**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
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
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of ML Interview Preparation ties to the ai track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: ML Interview Preparation
Track: ai | Level: intermediate`
        },
        {
          id: `cap-interview-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **ML Interview Preparation**. Ground responses with RAG, enforce JSON schemas for tool calls, red-team prompts before launch, log traces for audit, and gate high-risk actions with human approval.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **cap-interview**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
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
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with ai ecosystem conventions

Topic: ML Interview Preparation
Track: ai | Level: intermediate`
        },
        {
          id: `cap-interview-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **ML Interview Preparation** often hit predictable walls. Prompt injection, hallucinated citations, unbounded agent loops, secret leakage via training data, and fairness gaps across demographics require proactive testing.

When stuck on **cap-interview**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:** The best debuggers narrow the search space in minutes by changing one variable at a time.`,
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
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: ML Interview Preparation
Track: ai | Level: intermediate`
        },
        {
          id: `cap-interview-real-world`,
          title: `Real-World Applications`,
          content: `**ML Interview Preparation** shows up wherever **ai** skills meet business constraints. Enterprises deploy copilots, search augmentation, and workflow automation with vector databases, observability stacks, and governance aligned to regulations like the EU AI Act.

Teams shipping features around **cap-interview** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
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
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect ML Interview Preparation to adjacent topics in the same track

Topic: ML Interview Preparation
Track: ai | Level: intermediate`
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
      estimatedMinutes: 124,
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
          content: `**How to Read a Paper** is essential to **Reading Papers & Reproduction**. Efficiently understand research papers and reproduce key results. At the **advanced** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

First pass: title, abstract, figures, conclusion. Second: intro, method skim, experiments. Third: full math and related work.

**Annotate** assumptions and simplifications—what breaks in production?

**Applying Reading Papers & Reproduction:** Efficiently understand research papers and reproduce key results. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "How to Read a Paper", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "How to Read a Paper" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Abstract claims vs evidence in experiments`,
            `Compare to prior SOTA tables fairly`,
            `Check dataset size and compute budget`,
            `Supplementary often has critical details`,
            `How to Read a Paper is a foundational piece of Reading Papers & Reproduction`,
            `Connect this section to the ai track and advanced expectations`
          ],
          example: `# Concept check: How to Read a Paper
meta = {
    "topic": "cap-research",
    "section": "reading",
    "track": "ai",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: cap-research
section: reading
track: ai
level: advanced`,
          pseudoCode: `CONCEPT: How to Read a Paper

Study checklist:
  1. Abstract claims vs evidence in experiments
  2. Compare to prior SOTA tables fairly
  3. Check dataset size and compute budget
  4. Supplementary often has critical details
  5. How to Read a Paper is a foundational piece of Reading Papers & Reproduction
  6. Connect this section to the ai track and advanced expectations

Topic: Reading Papers & Reproduction
Track: ai | Level: advanced`
        },
        {
          id: `venues`,
          title: `Venues & Preprints`,
          content: `**NeurIPS, ICML, ICLR, CVPR, ACL** peer-reviewed. **arXiv** preprints unreviewed—verify before citing as fact.

**Papers With Code** links implementations and leaderboards.

**Applying Reading Papers & Reproduction:** Efficiently understand research papers and reproduce key results. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Venues & Preprints", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Venues & Preprints" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Peer review not perfect but filters noise`,
            `arXiv version may update—note date`,
            `Benchmark cherry-picking common—read fine print`,
            `Twitter hype ≠ validated result`,
            `Venues & Preprints is a foundational piece of Reading Papers & Reproduction`,
            `Connect this section to the ai track and advanced expectations`
          ],
          example: `# Concept check: Venues & Preprints
meta = {
    "topic": "cap-research",
    "section": "venues",
    "track": "ai",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: cap-research
section: venues
track: ai
level: advanced`,
          pseudoCode: `CONCEPT: Venues & Preprints

Study checklist:
  1. Peer review not perfect but filters noise
  2. arXiv version may update—note date
  3. Benchmark cherry-picking common—read fine print
  4. Twitter hype ≠ validated result
  5. Venues & Preprints is a foundational piece of Reading Papers & Reproduction
  6. Connect this section to the ai track and advanced expectations

Topic: Reading Papers & Reproduction
Track: ai | Level: advanced`
        },
        {
          id: `reproduce`,
          title: `Reproducing Results`,
          content: `Start from official repo if exists; pin commits and seeds. Match hardware expectations—some papers need 8×GPU.

**Minimal reproduction**: core algorithm on subset before full scale.

**Applying Reading Papers & Reproduction:** Efficiently understand research papers and reproduce key results. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Reproducing Results", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Reproducing Results" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Hidden hyperparameters in appendix or code`,
            `Data preprocessing must match exactly`,
            `Report what you could not reproduce`,
            `Contact authors politely for missing details`,
            `Reproducing Results is a foundational piece of Reading Papers & Reproduction`,
            `Connect this section to the ai track and advanced expectations`
          ],
          example: `# Concept check: Reproducing Results
meta = {
    "topic": "cap-research",
    "section": "reproduce",
    "track": "ai",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: cap-research
section: reproduce
track: ai
level: advanced`,
          pseudoCode: `CONCEPT: Reproducing Results

Study checklist:
  1. Hidden hyperparameters in appendix or code
  2. Data preprocessing must match exactly
  3. Report what you could not reproduce
  4. Contact authors politely for missing details
  5. Reproducing Results is a foundational piece of Reading Papers & Reproduction
  6. Connect this section to the ai track and advanced expectations

Topic: Reading Papers & Reproduction
Track: ai | Level: advanced`
        },
        {
          id: `contribute`,
          title: `From Reading to Contributing`,
          content: `**From Reading to Contributing** is essential to **Reading Papers & Reproduction**. Efficiently understand research papers and reproduce key results. At the **advanced** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Identify extension: new dataset, ablation, efficiency improvement. Write reproducible experiment script; open source with clear README.

Workshop and short papers valid first publication paths.

**Applying Reading Papers & Reproduction:** Efficiently understand research papers and reproduce key results. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "From Reading to Contributing", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "From Reading to Contributing" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Negative results valuable if well executed`,
            `Collaborate via Twitter/Discord research groups`,
            `Lit review before starting saves months`,
            `Ethics review for human subjects data`,
            `From Reading to Contributing is a foundational piece of Reading Papers & Reproduction`,
            `Connect this section to the ai track and advanced expectations`
          ],
          example: `# Concept check: From Reading to Contributing
meta = {
    "topic": "cap-research",
    "section": "contribute",
    "track": "ai",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: cap-research
section: contribute
track: ai
level: advanced`,
          pseudoCode: `CONCEPT: From Reading to Contributing

Study checklist:
  1. Negative results valuable if well executed
  2. Collaborate via Twitter/Discord research groups
  3. Lit review before starting saves months
  4. Ethics review for human subjects data
  5. From Reading to Contributing is a foundational piece of Reading Papers & Reproduction
  6. Connect this section to the ai track and advanced expectations

Topic: Reading Papers & Reproduction
Track: ai | Level: advanced`
        },
        {
          id: `cap-research-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Reading Papers & Reproduction** sits in the **ai** track of the Data Science Master curriculum. Efficiently understand research papers and reproduce key results.

**Theoretical foundation:** LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.

For **cap-research**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the advanced level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
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
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Reading Papers & Reproduction ties to the ai track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Reading Papers & Reproduction
Track: ai | Level: advanced`
        },
        {
          id: `cap-research-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Reading Papers & Reproduction**. Ground responses with RAG, enforce JSON schemas for tool calls, red-team prompts before launch, log traces for audit, and gate high-risk actions with human approval.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **cap-research**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
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
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with ai ecosystem conventions

Topic: Reading Papers & Reproduction
Track: ai | Level: advanced`
        },
        {
          id: `cap-research-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Reading Papers & Reproduction** often hit predictable walls. Prompt injection, hallucinated citations, unbounded agent loops, secret leakage via training data, and fairness gaps across demographics require proactive testing.

When stuck on **cap-research**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:** The best debuggers narrow the search space in minutes by changing one variable at a time.`,
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
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: Reading Papers & Reproduction
Track: ai | Level: advanced`
        },
        {
          id: `cap-research-real-world`,
          title: `Real-World Applications`,
          content: `**Reading Papers & Reproduction** shows up wherever **ai** skills meet business constraints. Enterprises deploy copilots, search augmentation, and workflow automation with vector databases, observability stacks, and governance aligned to regulations like the EU AI Act.

Teams shipping features around **cap-research** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
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
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Reading Papers & Reproduction to adjacent topics in the same track

Topic: Reading Papers & Reproduction
Track: ai | Level: advanced`
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
      estimatedMinutes: 124,
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

**Applying Career Paths in ML/AI:** Roles, skills, and growth paths for ML engineers, data scientists, and researchers. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Role Definitions", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Role Definitions" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `DS leans stats and product analytics`,
            `MLE leans software and systems`,
            `Research needs strong math and paper track`,
            `Hybrid roles common at startups`,
            `Role Definitions is a foundational piece of Career Paths in ML/AI`,
            `Connect this section to the ai track and intermediate expectations`
          ],
          example: `# Concept check: Role Definitions
meta = {
    "topic": "cap-career",
    "section": "roles",
    "track": "ai",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: cap-career
section: roles
track: ai
level: intermediate`,
          pseudoCode: `CONCEPT: Role Definitions

Study checklist:
  1. DS leans stats and product analytics
  2. MLE leans software and systems
  3. Research needs strong math and paper track
  4. Hybrid roles common at startups
  5. Role Definitions is a foundational piece of Career Paths in ML/AI
  6. Connect this section to the ai track and intermediate expectations

Topic: Career Paths in ML/AI
Track: ai | Level: intermediate`
        },
        {
          id: `skills`,
          title: `Skill Progression`,
          content: `**Skill Progression** is essential to **Career Paths in ML/AI**. Roles, skills, and growth paths for ML engineers, data scientists, and researchers. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Foundation: Python, SQL, ML basics. Mid: deep learning, cloud, experiment tracking. Senior: system design, mentoring, cross-team influence.

**T-shaped**: deep in one area (NLP), broad awareness elsewhere.

**Applying Career Paths in ML/AI:** Roles, skills, and growth paths for ML engineers, data scientists, and researchers. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Skill Progression", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Skill Progression" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Communication as important as coding`,
            `Business context distinguishes senior ICs`,
            `Specialize after solid general base`,
            `Continuous learning non-optional in AI`,
            `Skill Progression is a foundational piece of Career Paths in ML/AI`,
            `Connect this section to the ai track and intermediate expectations`
          ],
          example: `# Concept check: Skill Progression
meta = {
    "topic": "cap-career",
    "section": "skills",
    "track": "ai",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: cap-career
section: skills
track: ai
level: intermediate`,
          pseudoCode: `CONCEPT: Skill Progression

Study checklist:
  1. Communication as important as coding
  2. Business context distinguishes senior ICs
  3. Specialize after solid general base
  4. Continuous learning non-optional in AI
  5. Skill Progression is a foundational piece of Career Paths in ML/AI
  6. Connect this section to the ai track and intermediate expectations

Topic: Career Paths in ML/AI
Track: ai | Level: intermediate`
        },
        {
          id: `job-search`,
          title: `Job Search Tactics`,
          content: `**Job Search Tactics** is essential to **Career Paths in ML/AI**. Roles, skills, and growth paths for ML engineers, data scientists, and researchers. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Tailor resume bullets to metrics. LinkedIn + referrals strongest channel. Portfolio and GitHub linked prominently.

Prepare 30-second pitch and 2-minute project deep dive.

**Applying Career Paths in ML/AI:** Roles, skills, and growth paths for ML engineers, data scientists, and researchers. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Job Search Tactics", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Job Search Tactics" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Referrals bypass resume filters`,
            `Apply to teams not only companies`,
            `Negotiate total comp not only salary`,
            `Rejections normal—iterate resume`,
            `Job Search Tactics is a foundational piece of Career Paths in ML/AI`,
            `Connect this section to the ai track and intermediate expectations`
          ],
          example: `# Concept check: Job Search Tactics
meta = {
    "topic": "cap-career",
    "section": "job-search",
    "track": "ai",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: cap-career
section: job-search
track: ai
level: intermediate`,
          pseudoCode: `CONCEPT: Job Search Tactics

Study checklist:
  1. Referrals bypass resume filters
  2. Apply to teams not only companies
  3. Negotiate total comp not only salary
  4. Rejections normal—iterate resume
  5. Job Search Tactics is a foundational piece of Career Paths in ML/AI
  6. Connect this section to the ai track and intermediate expectations

Topic: Career Paths in ML/AI
Track: ai | Level: intermediate`
        },
        {
          id: `growth`,
          title: `Long-Term Growth`,
          content: `**Long-Term Growth** is essential to **Career Paths in ML/AI**. Roles, skills, and growth paths for ML engineers, data scientists, and researchers. At the **intermediate** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Staff/principal paths: technical leadership without people management optional. Manager track: team delivery and hiring.

Contribute to standards, RFCs, internal platforms—impact multiplier.

**Applying Career Paths in ML/AI:** Roles, skills, and growth paths for ML engineers, data scientists, and researchers. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Long-Term Growth", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Long-Term Growth" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Document and teach to scale influence`,
            `Balance depth with organizational awareness`,
            `Ethics and responsible AI increasingly valued`,
            `Mentorship accelerates junior careers`,
            `Long-Term Growth is a foundational piece of Career Paths in ML/AI`,
            `Connect this section to the ai track and intermediate expectations`
          ],
          example: `# Concept check: Long-Term Growth
meta = {
    "topic": "cap-career",
    "section": "growth",
    "track": "ai",
    "level": "intermediate",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: cap-career
section: growth
track: ai
level: intermediate`,
          pseudoCode: `CONCEPT: Long-Term Growth

Study checklist:
  1. Document and teach to scale influence
  2. Balance depth with organizational awareness
  3. Ethics and responsible AI increasingly valued
  4. Mentorship accelerates junior careers
  5. Long-Term Growth is a foundational piece of Career Paths in ML/AI
  6. Connect this section to the ai track and intermediate expectations

Topic: Career Paths in ML/AI
Track: ai | Level: intermediate`
        },
        {
          id: `cap-career-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Career Paths in ML/AI** sits in the **ai** track of the Data Science Master curriculum. Roles, skills, and growth paths for ML engineers, data scientists, and researchers.

**Theoretical foundation:** LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.

For **cap-career**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
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
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Career Paths in ML/AI ties to the ai track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Career Paths in ML/AI
Track: ai | Level: intermediate`
        },
        {
          id: `cap-career-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Career Paths in ML/AI**. Ground responses with RAG, enforce JSON schemas for tool calls, red-team prompts before launch, log traces for audit, and gate high-risk actions with human approval.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **cap-career**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
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
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with ai ecosystem conventions

Topic: Career Paths in ML/AI
Track: ai | Level: intermediate`
        },
        {
          id: `cap-career-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Career Paths in ML/AI** often hit predictable walls. Prompt injection, hallucinated citations, unbounded agent loops, secret leakage via training data, and fairness gaps across demographics require proactive testing.

When stuck on **cap-career**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:** The best debuggers narrow the search space in minutes by changing one variable at a time.`,
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
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: Career Paths in ML/AI
Track: ai | Level: intermediate`
        },
        {
          id: `cap-career-real-world`,
          title: `Real-World Applications`,
          content: `**Career Paths in ML/AI** shows up wherever **ai** skills meet business constraints. Enterprises deploy copilots, search augmentation, and workflow automation with vector databases, observability stacks, and governance aligned to regulations like the EU AI Act.

Teams shipping features around **cap-career** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
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
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Career Paths in ML/AI to adjacent topics in the same track

Topic: Career Paths in ML/AI
Track: ai | Level: intermediate`
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
      estimatedMinutes: 124,
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
