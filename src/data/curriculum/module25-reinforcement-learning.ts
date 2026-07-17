import type { Topic } from '../../types';

export const module25Topics: Topic[] = [
{
      id: `rl-basics`,
      title: `MDPs, Rewards & Policies`,
      description: `Formalize sequential decision making as Markov Decision Processes.`,
      level: `advanced`,
      track: `ml`,
      sections: [
        {
          id: `mdp`,
          title: `Markov Decision Processes`,
          content: `An **MDP** is (S, A, P, R, γ): states, actions, transition dynamics P(s'|s,a), reward function R(s,a), discount γ∈[0,1]. **Markov property**: future depends only on current state.

**Policy** π(a|s) maps states to action distributions. Goal: maximize expected cumulative discounted return G_t = Σ γ^k R_{t+k+1}.

**Applying MDPs, Rewards & Policies:** Formalize sequential decision making as Markov Decision Processes. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Markov Decision Processes", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `γ near 1 values long-term reward`,
            `Episodic tasks terminate; continuing tasks run forever`,
            `Environment non-stationarity breaks MDP assumptions`,
            `Partial observability → POMDP`,
            `Markov Decision Processes is a foundational piece of MDPs, Rewards & Policies`,
            `Connect this section to the ml track and advanced expectations`
          ],
          example: `# Concept check: Markov Decision Processes
meta = {
    "topic": "rl-basics",
    "section": "mdp",
    "track": "ml",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: rl-basics
section: mdp
track: ml
level: advanced`,
          pseudoCode: `CONCEPT: Markov Decision Processes

Study checklist:
  1. γ near 1 values long-term reward
  2. Episodic tasks terminate; continuing tasks run forever
  3. Environment non-stationarity breaks MDP assumptions
  4. Partial observability → POMDP
  5. Markov Decision Processes is a foundational piece of MDPs, Rewards & Policies
  6. Connect this section to the ml track and advanced expectations

Topic: MDPs, Rewards & Policies
Track: ml | Level: advanced`
        },
        {
          id: `value-policy`,
          title: `Value Functions & Bellman`,
          content: `**State-value** V^π(s) = expected return starting in s following π. **Action-value** Q^π(s,a). **Bellman expectation equation** recursively decomposes values.

**Optimal** V* satisfies Bellman optimality; solving MDP = finding π* maximizing value.

**Applying MDPs, Rewards & Policies:** Formalize sequential decision making as Markov Decision Processes. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Value Functions & Bellman", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff. Mastering "Value Functions & Bellman" here directly affects how confidently you can build, debug, and ship ml projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Establish baselines, stratify splits, and report confidence intervals — not single scores. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Overfitting small datasets, tuning on test data, and ignoring class imbalance. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          example: `# Toy: two actions, deterministic reward
gamma = 0.9
r_step = -1  # cost per step
print("discount", gamma, "step cost", r_step)`,
          keyPoints: [
            `V describes how good states are under π`,
            `Q needed for control without knowing model`,
            `Bellman equations underpin dynamic programming`,
            `Optimal policy greedy w.r.t Q*`,
            `Value Functions & Bellman is a foundational piece of MDPs, Rewards & Policies`,
            `Connect this section to the ml track and advanced expectations`
          ],
          pseudoCode: `CONCEPT: Value Functions & Bellman

Study checklist:
  1. V describes how good states are under π
  2. Q needed for control without knowing model
  3. Bellman equations underpin dynamic programming
  4. Optimal policy greedy w.r.t Q*
  5. Value Functions & Bellman is a foundational piece of MDPs, Rewards & Policies
  6. Connect this section to the ml track and advanced expectations

Topic: MDPs, Rewards & Policies
Track: ml | Level: advanced`
        },
        {
          id: `explore`,
          title: `Exploration vs Exploitation`,
          content: `Agent must try actions to discover rewards. **ε-greedy**: random action with prob ε. **UCB** optimistically estimates uncertainty. Multi-armed bandits simplify to stateless RL.

Insufficient exploration traps agent in local optima.

**Applying MDPs, Rewards & Policies:** Formalize sequential decision making as Markov Decision Processes. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Exploration vs Exploitation", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff. Mastering "Exploration vs Exploitation" here directly affects how confidently you can build, debug, and ship ml projects.

**Professional habits:** Establish baselines, stratify splits, and report confidence intervals — not single scores. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Overfitting small datasets, tuning on test data, and ignoring class imbalance. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `ε-greedy simple but wastes steps at low ε`,
            `Optimism under uncertainty encourages exploration`,
            `Bandits formalize A/B testing with regret`,
            `Non-stationary rewards need sliding windows`,
            `Exploration vs Exploitation is a foundational piece of MDPs, Rewards & Policies`,
            `Connect this section to the ml track and advanced expectations`
          ],
          example: `# Concept check: Exploration vs Exploitation
meta = {
    "topic": "rl-basics",
    "section": "explore",
    "track": "ml",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: rl-basics
section: explore
track: ml
level: advanced`,
          pseudoCode: `CONCEPT: Exploration vs Exploitation

Study checklist:
  1. ε-greedy simple but wastes steps at low ε
  2. Optimism under uncertainty encourages exploration
  3. Bandits formalize A/B testing with regret
  4. Non-stationary rewards need sliding windows
  5. Exploration vs Exploitation is a foundational piece of MDPs, Rewards & Policies
  6. Connect this section to the ml track and advanced expectations

Topic: MDPs, Rewards & Policies
Track: ml | Level: advanced`
        },
        {
          id: `rl-loop`,
          title: `Agent-Environment Loop`,
          content: `At each step: observe state, select action, receive reward and next state. **OpenAI Gym/Gymnasium** standardizes interfaces: \`env.reset()\`, \`env.step(action)\`.

Render for debugging; \`done\` flag ends episode; \`info\` dict carries diagnostics.

**Applying MDPs, Rewards & Policies:** Formalize sequential decision making as Markov Decision Processes. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Agent-Environment Loop", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff. Mastering "Agent-Environment Loop" here directly affects how confidently you can build, debug, and ship ml projects.

**Professional habits:** Establish baselines, stratify splits, and report confidence intervals — not single scores. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Overfitting small datasets, tuning on test data, and ignoring class imbalance. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Gymnasium successor to OpenAI Gym`,
            `Seed env for reproducible episodes`,
            `Reward shaping accelerates learning but changes objective`,
            `Log episode return not only final step reward`,
            `Agent-Environment Loop is a foundational piece of MDPs, Rewards & Policies`,
            `Connect this section to the ml track and advanced expectations`
          ],
          example: `# Concept check: Agent-Environment Loop
meta = {
    "topic": "rl-basics",
    "section": "rl-loop",
    "track": "ml",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: rl-basics
section: rl-loop
track: ml
level: advanced`,
          pseudoCode: `CONCEPT: Agent-Environment Loop

Study checklist:
  1. Gymnasium successor to OpenAI Gym
  2. Seed env for reproducible episodes
  3. Reward shaping accelerates learning but changes objective
  4. Log episode return not only final step reward
  5. Agent-Environment Loop is a foundational piece of MDPs, Rewards & Policies
  6. Connect this section to the ml track and advanced expectations

Topic: MDPs, Rewards & Policies
Track: ml | Level: advanced`
        },
        {
          id: `rl-basics-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**MDPs, Rewards & Policies** sits in the **ml** track of the Data Science Master curriculum. Formalize sequential decision making as Markov Decision Processes.

**Theoretical foundation:** Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For **rl-basics**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the advanced level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
          example: `# Concept check for MDPs, Rewards & Policies
meta = {"topic_id": "rl-basics", "track": "ml", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `rl-basics ml advanced`,
          keyPoints: [
            `Core theory of MDPs, Rewards & Policies ties to the ml track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of MDPs, Rewards & Policies ties to the ml track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: MDPs, Rewards & Policies
Track: ml | Level: advanced`
        },
        {
          id: `rl-basics-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **MDPs, Rewards & Policies**. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **rl-basics**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for rl-basics
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("rl-basics", "MDPs, Rewards & Policies")
print(ref.topic_id, ref.title.split()[0])`,
          output: `rl-basics MDPs,`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with ml ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with ml ecosystem conventions

Topic: MDPs, Rewards & Policies
Track: ml | Level: advanced`
        },
        {
          id: `rl-basics-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **MDPs, Rewards & Policies** often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on **rl-basics**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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

debug_step("rl-basics", "MDPs, Rewards & Policies")
debug_step("section_count", 4)`,
          output: `[rl-basics] 'MDPs, Rewards & Policies' (str)
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

Topic: MDPs, Rewards & Policies
Track: ml | Level: advanced`
        },
        {
          id: `rl-basics-real-world`,
          title: `Real-World Applications`,
          content: `**MDPs, Rewards & Policies** shows up wherever **ml** skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around **rl-basics** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for MDPs, Rewards & Policies
skills = ["ml", "advanced", "rl-basics"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ml, advanced, rl-basics`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect MDPs, Rewards & Policies to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect MDPs, Rewards & Policies to adjacent topics in the same track

Topic: MDPs, Rewards & Policies
Track: ml | Level: advanced`
        }
      ],
      exercises: [
        {
          id: `ex-rl-1`,
          question: `MDP tuple includes states, actions, transitions, rewards, and ___.`,
          solution: `print("discount gamma")`,
          difficulty: `easy`
        },
        {
          id: `ex-rl-2`,
          question: `Print discount 0.9 raised to power 2.`,
          solution: `print(0.9**2)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 124,
      module: `module-25`,
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
      id: `rl-qlearning`,
      title: `Q-Learning & Bellman Updates`,
      description: `Model-free temporal difference learning for optimal action-values.`,
      level: `advanced`,
      track: `ml`,
      sections: [
        {
          id: `qlearning`,
          title: `Q-Learning Algorithm`,
          content: `**Q-learning** off-policy TD control: Q(s,a) ← Q(s,a) + α[r + γ max_a' Q(s',a') - Q(s,a)]. Target uses max over next actions (greedy) while behavior may explore.

Converges to Q* with sufficient visitation under tabular setting.

**Applying Q-Learning & Bellman Updates:** Model-free temporal difference learning for optimal action-values. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Q-Learning Algorithm", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff. Mastering "Q-Learning Algorithm" here directly affects how confidently you can build, debug, and ship ml projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Establish baselines, stratify splits, and report confidence intervals — not single scores. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Overfitting small datasets, tuning on test data, and ignoring class imbalance. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          example: `alpha, gamma = 0.5, 0.9
Q_sa, r, max_Q_next = 1.0, 1.0, 2.0
Q_sa += alpha * (r + gamma * max_Q_next - Q_sa)
print(round(Q_sa, 2))`,
          output: `1.4`,
          keyPoints: [
            `Learning rate α controls update magnitude`,
            `Off-policy: learns greedy target while exploring`,
            `Tabular Q fails on large state spaces`,
            `Max operator overestimates with function approximation`,
            `Q-Learning Algorithm is a foundational piece of Q-Learning & Bellman Updates`,
            `Connect this section to the ml track and advanced expectations`
          ],
          pseudoCode: `CONCEPT: Q-Learning Algorithm

Study checklist:
  1. Learning rate α controls update magnitude
  2. Off-policy: learns greedy target while exploring
  3. Tabular Q fails on large state spaces
  4. Max operator overestimates with function approximation
  5. Q-Learning Algorithm is a foundational piece of Q-Learning & Bellman Updates
  6. Connect this section to the ml track and advanced expectations

Topic: Q-Learning & Bellman Updates
Track: ml | Level: advanced`
        },
        {
          id: `td`,
          title: `Temporal Difference Learning`,
          content: `**TD(0)** bootstraps from current estimates V(s') instead of waiting for episode end. Lower variance than Monte Carlo, some bias.

**SARSA** on-policy variant uses actual next action from behavior policy.

**Applying Q-Learning & Bellman Updates:** Model-free temporal difference learning for optimal action-values. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Temporal Difference Learning", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff. Mastering "Temporal Difference Learning" here directly affects how confidently you can build, debug, and ship ml projects.

**Professional habits:** Establish baselines, stratify splits, and report confidence intervals — not single scores. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Overfitting small datasets, tuning on test data, and ignoring class imbalance. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Bootstrap trades bias for lower variance`,
            `SARSA safer near cliffs (on-policy)`,
            `n-step returns interpolate MC and TD`,
            `Eligibility traces credit long-range effects`,
            `Temporal Difference Learning is a foundational piece of Q-Learning & Bellman Updates`,
            `Connect this section to the ml track and advanced expectations`
          ],
          example: `# Concept check: Temporal Difference Learning
meta = {
    "topic": "rl-qlearning",
    "section": "td",
    "track": "ml",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: rl-qlearning
section: td
track: ml
level: advanced`,
          pseudoCode: `CONCEPT: Temporal Difference Learning

Study checklist:
  1. Bootstrap trades bias for lower variance
  2. SARSA safer near cliffs (on-policy)
  3. n-step returns interpolate MC and TD
  4. Eligibility traces credit long-range effects
  5. Temporal Difference Learning is a foundational piece of Q-Learning & Bellman Updates
  6. Connect this section to the ml track and advanced expectations

Topic: Q-Learning & Bellman Updates
Track: ml | Level: advanced`
        },
        {
          id: `tabular`,
          title: `Tabular Methods & Gridworld`,
          content: `**Tabular Methods & Gridworld** is essential to **Q-Learning & Bellman Updates**. Model-free temporal difference learning for optimal action-values. At the **advanced** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Small discrete environments store Q in dict or array indexed by (s,a). Visualize value iteration vs Q-learning on gridworld with obstacles and goal +1 reward.

State encoding critical when applying tabular methods to raw observations.

**Applying Q-Learning & Bellman Updates:** Model-free temporal difference learning for optimal action-values. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Tabular Methods & Gridworld", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff. Mastering "Tabular Methods & Gridworld" here directly affects how confidently you can build, debug, and ship ml projects.

**Professional habits:** Establish baselines, stratify splits, and report confidence intervals — not single scores. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Overfitting small datasets, tuning on test data, and ignoring class imbalance. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Discretize continuous states carefully`,
            `Terminal states bootstrap with zero value`,
            `Reward scale affects learning rate tuning`,
            `Sync vs async multi-agent updates need care`,
            `Tabular Methods & Gridworld is a foundational piece of Q-Learning & Bellman Updates`,
            `Connect this section to the ml track and advanced expectations`
          ],
          example: `# Concept check: Tabular Methods & Gridworld
meta = {
    "topic": "rl-qlearning",
    "section": "tabular",
    "track": "ml",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: rl-qlearning
section: tabular
track: ml
level: advanced`,
          pseudoCode: `CONCEPT: Tabular Methods & Gridworld

Study checklist:
  1. Discretize continuous states carefully
  2. Terminal states bootstrap with zero value
  3. Reward scale affects learning rate tuning
  4. Sync vs async multi-agent updates need care
  5. Tabular Methods & Gridworld is a foundational piece of Q-Learning & Bellman Updates
  6. Connect this section to the ml track and advanced expectations

Topic: Q-Learning & Bellman Updates
Track: ml | Level: advanced`
        },
        {
          id: `convergence`,
          title: `Convergence Conditions`,
          content: `**Convergence Conditions** is essential to **Q-Learning & Bellman Updates**. Model-free temporal difference learning for optimal action-values. At the **advanced** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Robbins-Monro conditions on α schedules. All (s,a) visited infinitely often in tabular case. Function approximation can diverge—use target networks and experience replay in deep RL.

**Applying Q-Learning & Bellman Updates:** Model-free temporal difference learning for optimal action-values. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Convergence Conditions", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff. Mastering "Convergence Conditions" here directly affects how confidently you can build, debug, and ship ml projects.

**Professional habits:** Establish baselines, stratify splits, and report confidence intervals — not single scores. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Overfitting small datasets, tuning on test data, and ignoring class imbalance. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Exploration schedule must not vanish too early`,
            `Deadly triad: function approx + bootstrapping + off-policy`,
            `Double Q-learning reduces overestimation`,
            `Monitor TD error magnitude during training`,
            `Convergence Conditions is a foundational piece of Q-Learning & Bellman Updates`,
            `Connect this section to the ml track and advanced expectations`
          ],
          example: `# Concept check: Convergence Conditions
meta = {
    "topic": "rl-qlearning",
    "section": "convergence",
    "track": "ml",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: rl-qlearning
section: convergence
track: ml
level: advanced`,
          pseudoCode: `CONCEPT: Convergence Conditions

Study checklist:
  1. Exploration schedule must not vanish too early
  2. Deadly triad: function approx + bootstrapping + off-policy
  3. Double Q-learning reduces overestimation
  4. Monitor TD error magnitude during training
  5. Convergence Conditions is a foundational piece of Q-Learning & Bellman Updates
  6. Connect this section to the ml track and advanced expectations

Topic: Q-Learning & Bellman Updates
Track: ml | Level: advanced`
        },
        {
          id: `rl-qlearning-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Q-Learning & Bellman Updates** sits in the **ml** track of the Data Science Master curriculum. Model-free temporal difference learning for optimal action-values.

**Theoretical foundation:** Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For **rl-qlearning**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the advanced level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
          example: `# Concept check for Q-Learning & Bellman Updates
meta = {"topic_id": "rl-qlearning", "track": "ml", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `rl-qlearning ml advanced`,
          keyPoints: [
            `Core theory of Q-Learning & Bellman Updates ties to the ml track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Q-Learning & Bellman Updates ties to the ml track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Q-Learning & Bellman Updates
Track: ml | Level: advanced`
        },
        {
          id: `rl-qlearning-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Q-Learning & Bellman Updates**. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **rl-qlearning**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for rl-qlearning
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("rl-qlearning", "Q-Learning & Bellman Updates")
print(ref.topic_id, ref.title.split()[0])`,
          output: `rl-qlearning Q-Learning`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with ml ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with ml ecosystem conventions

Topic: Q-Learning & Bellman Updates
Track: ml | Level: advanced`
        },
        {
          id: `rl-qlearning-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Q-Learning & Bellman Updates** often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on **rl-qlearning**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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

debug_step("rl-qlearning", "Q-Learning & Bellman Updates")
debug_step("section_count", 4)`,
          output: `[rl-qlearning] 'Q-Learning & Bellman Updates' (str)
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

Topic: Q-Learning & Bellman Updates
Track: ml | Level: advanced`
        },
        {
          id: `rl-qlearning-real-world`,
          title: `Real-World Applications`,
          content: `**Q-Learning & Bellman Updates** shows up wherever **ml** skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around **rl-qlearning** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Q-Learning & Bellman Updates
skills = ["ml", "advanced", "rl-qlearning"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ml, advanced, rl-qlearning`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Q-Learning & Bellman Updates to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Q-Learning & Bellman Updates to adjacent topics in the same track

Topic: Q-Learning & Bellman Updates
Track: ml | Level: advanced`
        }
      ],
      exercises: [
        {
          id: `ex-ql-1`,
          question: `Q-learning uses max over next actions in ___ .`,
          solution: `print("target")`,
          difficulty: `easy`
        },
        {
          id: `ex-ql-2`,
          question: `Update Q=1 with alpha=0.5, r=0, gamma=0.9, max_next=2.`,
          solution: `Q=1; Q+=0.5*(0+0.9*2-Q); print(Q)`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 124,
      module: `module-25`,
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
      id: `rl-deep`,
      title: `Deep Q-Networks (DQN)`,
      description: `Combine Q-learning with neural networks and stabilization tricks.`,
      level: `advanced`,
      track: `ml`,
      sections: [
        {
          id: `dqn`,
          title: `DQN Architecture`,
          content: `**DQN Architecture** is essential to **Deep Q-Networks (DQN)**. Combine Q-learning with neural networks and stabilization tricks. At the **advanced** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Neural network maps state → Q-values for each action. Loss: MSE between Q(s,a) and TD target r + γ max Q_target(s',·).

**Experience replay** stores transitions (s,a,r,s') in buffer; sample mini-batches breaking temporal correlation.

**Applying Deep Q-Networks (DQN):** Combine Q-learning with neural networks and stabilization tricks. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "DQN Architecture", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff. Mastering "DQN Architecture" here directly affects how confidently you can build, debug, and ship ml projects.

**Professional habits:** Establish baselines, stratify splits, and report confidence intervals — not single scores. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Overfitting small datasets, tuning on test data, and ignoring class imbalance. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Replay buffer size affects sample diversity`,
            `Target network updated slowly stabilizes training`,
            `Frame stacking for Atari partial observability`,
            `Reward clipping can help but changes objective`,
            `DQN Architecture is a foundational piece of Deep Q-Networks (DQN)`,
            `Connect this section to the ml track and advanced expectations`
          ],
          example: `# Concept check: DQN Architecture
meta = {
    "topic": "rl-deep",
    "section": "dqn",
    "track": "ml",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: rl-deep
section: dqn
track: ml
level: advanced`,
          pseudoCode: `CONCEPT: DQN Architecture

Study checklist:
  1. Replay buffer size affects sample diversity
  2. Target network updated slowly stabilizes training
  3. Frame stacking for Atari partial observability
  4. Reward clipping can help but changes objective
  5. DQN Architecture is a foundational piece of Deep Q-Networks (DQN)
  6. Connect this section to the ml track and advanced expectations

Topic: Deep Q-Networks (DQN)
Track: ml | Level: advanced`
        },
        {
          id: `improvements`,
          title: `Double DQN & Dueling`,
          content: `**Double DQN** decouples action selection and evaluation reducing overestimation. **Dueling** architecture separates V(s) and advantage A(s,a) streams.

**Prioritized replay** samples high TD-error transitions more often.

**Applying Deep Q-Networks (DQN):** Combine Q-learning with neural networks and stabilization tricks. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Double DQN & Dueling", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff. Mastering "Double DQN & Dueling" here directly affects how confidently you can build, debug, and ship ml projects.

**Professional habits:** Establish baselines, stratify splits, and report confidence intervals — not single scores. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Overfitting small datasets, tuning on test data, and ignoring class imbalance. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Double DQN: online net selects, target evaluates`,
            `Dueling helps when action values similar`,
            `Prioritized replay needs importance sampling correction`,
            `Noisy nets replace ε-greedy exploration`,
            `Double DQN & Dueling is a foundational piece of Deep Q-Networks (DQN)`,
            `Connect this section to the ml track and advanced expectations`
          ],
          example: `# Concept check: Double DQN & Dueling
meta = {
    "topic": "rl-deep",
    "section": "improvements",
    "track": "ml",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: rl-deep
section: improvements
track: ml
level: advanced`,
          pseudoCode: `CONCEPT: Double DQN & Dueling

Study checklist:
  1. Double DQN: online net selects, target evaluates
  2. Dueling helps when action values similar
  3. Prioritized replay needs importance sampling correction
  4. Noisy nets replace ε-greedy exploration
  5. Double DQN & Dueling is a foundational piece of Deep Q-Networks (DQN)
  6. Connect this section to the ml track and advanced expectations

Topic: Deep Q-Networks (DQN)
Track: ml | Level: advanced`
        },
        {
          id: `atari`,
          title: `Atari & Visual Inputs`,
          content: `**Atari & Visual Inputs** is essential to **Deep Q-Networks (DQN)**. Combine Q-learning with neural networks and stabilization tricks. At the **advanced** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Preprocess frames: grayscale, resize, stack 4 frames. Convolutional layers extract spatial features; fully connected output per-action Q.

Training millions of steps—GPU acceleration essential.

**Applying Deep Q-Networks (DQN):** Combine Q-learning with neural networks and stabilization tricks. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Atari & Visual Inputs", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff. Mastering "Atari & Visual Inputs" here directly affects how confidently you can build, debug, and ship ml projects.

**Professional habits:** Establish baselines, stratify splits, and report confidence intervals — not single scores. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Overfitting small datasets, tuning on test data, and ignoring class imbalance. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Preprocessing must match train and deploy`,
            `Sticky actions increase environment stochasticity`,
            `Human-normalized score compares to human players`,
            `Sim-to-real gap for robotics visuals`,
            `Atari & Visual Inputs is a foundational piece of Deep Q-Networks (DQN)`,
            `Connect this section to the ml track and advanced expectations`
          ],
          example: `# Concept check: Atari & Visual Inputs
meta = {
    "topic": "rl-deep",
    "section": "atari",
    "track": "ml",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: rl-deep
section: atari
track: ml
level: advanced`,
          pseudoCode: `CONCEPT: Atari & Visual Inputs

Study checklist:
  1. Preprocessing must match train and deploy
  2. Sticky actions increase environment stochasticity
  3. Human-normalized score compares to human players
  4. Sim-to-real gap for robotics visuals
  5. Atari & Visual Inputs is a foundational piece of Deep Q-Networks (DQN)
  6. Connect this section to the ml track and advanced expectations

Topic: Deep Q-Networks (DQN)
Track: ml | Level: advanced`
        },
        {
          id: `limits-dqn`,
          title: `DQN Limitations`,
          content: `**DQN Limitations** is essential to **Deep Q-Networks (DQN)**. Combine Q-learning with neural networks and stabilization tricks. At the **advanced** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Discrete actions only—continuous control needs actor-critic. Q-learning sensitive to reward scale and hyperparameters.

Modern baselines: Rainbow combines improvements; still largely superseded by policy gradient methods in complex domains.

**Applying Deep Q-Networks (DQN):** Combine Q-learning with neural networks and stabilization tricks. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "DQN Limitations", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff. Mastering "DQN Limitations" here directly affects how confidently you can build, debug, and ship ml projects.

**Professional habits:** Establish baselines, stratify splits, and report confidence intervals — not single scores. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Overfitting small datasets, tuning on test data, and ignoring class imbalance. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Continuous action spaces need different algorithms`,
            `Hyperparameter sweeps expensive`,
            `Offline RL from fixed datasets active research area`,
            `Safety constraints rarely enforced in vanilla DQN`,
            `DQN Limitations is a foundational piece of Deep Q-Networks (DQN)`,
            `Connect this section to the ml track and advanced expectations`
          ],
          example: `# Concept check: DQN Limitations
meta = {
    "topic": "rl-deep",
    "section": "limits-dqn",
    "track": "ml",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: rl-deep
section: limits-dqn
track: ml
level: advanced`,
          pseudoCode: `CONCEPT: DQN Limitations

Study checklist:
  1. Continuous action spaces need different algorithms
  2. Hyperparameter sweeps expensive
  3. Offline RL from fixed datasets active research area
  4. Safety constraints rarely enforced in vanilla DQN
  5. DQN Limitations is a foundational piece of Deep Q-Networks (DQN)
  6. Connect this section to the ml track and advanced expectations

Topic: Deep Q-Networks (DQN)
Track: ml | Level: advanced`
        },
        {
          id: `rl-deep-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Deep Q-Networks (DQN)** sits in the **ml** track of the Data Science Master curriculum. Combine Q-learning with neural networks and stabilization tricks.

**Theoretical foundation:** Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For **rl-deep**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the advanced level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
          example: `# Concept check for Deep Q-Networks (DQN)
meta = {"topic_id": "rl-deep", "track": "ml", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `rl-deep ml advanced`,
          keyPoints: [
            `Core theory of Deep Q-Networks (DQN) ties to the ml track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Deep Q-Networks (DQN) ties to the ml track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Deep Q-Networks (DQN)
Track: ml | Level: advanced`
        },
        {
          id: `rl-deep-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Deep Q-Networks (DQN)**. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **rl-deep**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for rl-deep
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("rl-deep", "Deep Q-Networks (DQN)")
print(ref.topic_id, ref.title.split()[0])`,
          output: `rl-deep Deep`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with ml ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with ml ecosystem conventions

Topic: Deep Q-Networks (DQN)
Track: ml | Level: advanced`
        },
        {
          id: `rl-deep-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Deep Q-Networks (DQN)** often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on **rl-deep**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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

debug_step("rl-deep", "Deep Q-Networks (DQN)")
debug_step("section_count", 4)`,
          output: `[rl-deep] 'Deep Q-Networks (DQN)' (str)
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

Topic: Deep Q-Networks (DQN)
Track: ml | Level: advanced`
        },
        {
          id: `rl-deep-real-world`,
          title: `Real-World Applications`,
          content: `**Deep Q-Networks (DQN)** shows up wherever **ml** skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around **rl-deep** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Deep Q-Networks (DQN)
skills = ["ml", "advanced", "rl-deep"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ml, advanced, rl-deep`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Deep Q-Networks (DQN) to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Deep Q-Networks (DQN) to adjacent topics in the same track

Topic: Deep Q-Networks (DQN)
Track: ml | Level: advanced`
        }
      ],
      exercises: [
        {
          id: `ex-dqn-1`,
          question: `Experience replay breaks temporal ___ in batches.`,
          solution: `print("correlation")`,
          difficulty: `easy`
        },
        {
          id: `ex-dqn-2`,
          question: `Target network updated slowly for ___.`,
          solution: `print("stability")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 124,
      module: `module-25`,
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
      id: `rl-policy`,
      title: `Policy Gradients Intro`,
      description: `Optimize parameterized policies directly with gradient ascent on expected return.`,
      level: `advanced`,
      track: `ml`,
      sections: [
        {
          id: `reinforce`,
          title: `REINFORCE Algorithm`,
          content: `Policy π_θ(a|s) parameterized by θ. Objective J(θ) = expected return. **Policy gradient theorem**: ∇J ∝ E[∇ log π_θ(a|s) · G_t].

Monte Carlo returns G_t from full episodes; high variance—use baselines subtracting learned value V(s).

**Applying Policy Gradients Intro:** Optimize parameterized policies directly with gradient ascent on expected return. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "REINFORCE Algorithm", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff. Mastering "REINFORCE Algorithm" here directly affects how confidently you can build, debug, and ship ml projects.

**Professional habits:** Establish baselines, stratify splits, and report confidence intervals — not single scores. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Overfitting small datasets, tuning on test data, and ignoring class imbalance. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `log-derivative trick enables gradient estimation`,
            `Baselines reduce variance without biasing gradient`,
            `On-policy: data from current π only`,
            `Credit assignment hard on long episodes`,
            `REINFORCE Algorithm is a foundational piece of Policy Gradients Intro`,
            `Connect this section to the ml track and advanced expectations`
          ],
          example: `# Concept check: REINFORCE Algorithm
meta = {
    "topic": "rl-policy",
    "section": "reinforce",
    "track": "ml",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: rl-policy
section: reinforce
track: ml
level: advanced`,
          pseudoCode: `CONCEPT: REINFORCE Algorithm

Study checklist:
  1. log-derivative trick enables gradient estimation
  2. Baselines reduce variance without biasing gradient
  3. On-policy: data from current π only
  4. Credit assignment hard on long episodes
  5. REINFORCE Algorithm is a foundational piece of Policy Gradients Intro
  6. Connect this section to the ml track and advanced expectations

Topic: Policy Gradients Intro
Track: ml | Level: advanced`
        },
        {
          id: `actor-critic`,
          title: `Actor-Critic Methods`,
          content: `**Actor** updates policy; **critic** learns value to reduce variance. **A2C/A3C** parallel workers collect experience. **PPO** clips policy updates preventing destructive large steps.

PPO default choice for many continuous control benchmarks.

**Applying Policy Gradients Intro:** Optimize parameterized policies directly with gradient ascent on expected return. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Actor-Critic Methods", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff. Mastering "Actor-Critic Methods" here directly affects how confidently you can build, debug, and ship ml projects.

**Professional habits:** Establish baselines, stratify splits, and report confidence intervals — not single scores. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Overfitting small datasets, tuning on test data, and ignoring class imbalance. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Advantage A(s,a) = Q-V centers learning signal`,
            `PPO clip ratio stabilizes policy updates`,
            `Entropy bonus encourages exploration`,
            `GAE generalizes advantage estimation`,
            `Actor-Critic Methods is a foundational piece of Policy Gradients Intro`,
            `Connect this section to the ml track and advanced expectations`
          ],
          example: `# Concept check: Actor-Critic Methods
meta = {
    "topic": "rl-policy",
    "section": "actor-critic",
    "track": "ml",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: rl-policy
section: actor-critic
track: ml
level: advanced`,
          pseudoCode: `CONCEPT: Actor-Critic Methods

Study checklist:
  1. Advantage A(s,a) = Q-V centers learning signal
  2. PPO clip ratio stabilizes policy updates
  3. Entropy bonus encourages exploration
  4. GAE generalizes advantage estimation
  5. Actor-Critic Methods is a foundational piece of Policy Gradients Intro
  6. Connect this section to the ml track and advanced expectations

Topic: Policy Gradients Intro
Track: ml | Level: advanced`
        },
        {
          id: `continuous`,
          title: `Continuous Action Spaces`,
          content: `Output mean and log-std of Gaussian policy; sample actions. **Tanh squashing** bounds actions for robotic joints.

**DDPG/TD3/SAC** off-policy actor-critic for continuous control with replay buffers.

**Applying Policy Gradients Intro:** Optimize parameterized policies directly with gradient ascent on expected return. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Continuous Action Spaces", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff. Mastering "Continuous Action Spaces" here directly affects how confidently you can build, debug, and ship ml projects.

**Professional habits:** Establish baselines, stratify splits, and report confidence intervals — not single scores. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Overfitting small datasets, tuning on test data, and ignoring class imbalance. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Reparameterization trick enables backprop through stochastic nodes`,
            `SAC maximizes entropy for robust exploration`,
            `Action bounds via squashing to [-1,1]`,
            `Simulators like MuJoCo standard benchmarks`,
            `Continuous Action Spaces is a foundational piece of Policy Gradients Intro`,
            `Connect this section to the ml track and advanced expectations`
          ],
          example: `# Concept check: Continuous Action Spaces
meta = {
    "topic": "rl-policy",
    "section": "continuous",
    "track": "ml",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: rl-policy
section: continuous
track: ml
level: advanced`,
          pseudoCode: `CONCEPT: Continuous Action Spaces

Study checklist:
  1. Reparameterization trick enables backprop through stochastic nodes
  2. SAC maximizes entropy for robust exploration
  3. Action bounds via squashing to [-1,1]
  4. Simulators like MuJoCo standard benchmarks
  5. Continuous Action Spaces is a foundational piece of Policy Gradients Intro
  6. Connect this section to the ml track and advanced expectations

Topic: Policy Gradients Intro
Track: ml | Level: advanced`
        },
        {
          id: `pg-vs-value`,
          title: `Policy vs Value Methods`,
          content: `**Policy vs Value Methods** is essential to **Policy Gradients Intro**. Optimize parameterized policies directly with gradient ascent on expected return. At the **advanced** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Policy methods handle stochastic policies and continuous actions naturally. Value methods sample efficient off-policy.

Modern algorithms blend both: soft actor-critic, implicit Q-learning.

**Applying Policy Gradients Intro:** Optimize parameterized policies directly with gradient ascent on expected return. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Policy vs Value Methods", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff. Mastering "Policy vs Value Methods" here directly affects how confidently you can build, debug, and ship ml projects.

**Professional habits:** Establish baselines, stratify splits, and report confidence intervals — not single scores. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Overfitting small datasets, tuning on test data, and ignoring class imbalance. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Stochastic policies useful in partially observable settings`,
            `Value methods excel discrete action ATARI historically`,
            `Hybrid methods dominate contemporary research`,
            `Choose based on action space and sample budget`,
            `Policy vs Value Methods is a foundational piece of Policy Gradients Intro`,
            `Connect this section to the ml track and advanced expectations`
          ],
          example: `# Concept check: Policy vs Value Methods
meta = {
    "topic": "rl-policy",
    "section": "pg-vs-value",
    "track": "ml",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: rl-policy
section: pg-vs-value
track: ml
level: advanced`,
          pseudoCode: `CONCEPT: Policy vs Value Methods

Study checklist:
  1. Stochastic policies useful in partially observable settings
  2. Value methods excel discrete action ATARI historically
  3. Hybrid methods dominate contemporary research
  4. Choose based on action space and sample budget
  5. Policy vs Value Methods is a foundational piece of Policy Gradients Intro
  6. Connect this section to the ml track and advanced expectations

Topic: Policy Gradients Intro
Track: ml | Level: advanced`
        },
        {
          id: `rl-policy-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Policy Gradients Intro** sits in the **ml** track of the Data Science Master curriculum. Optimize parameterized policies directly with gradient ascent on expected return.

**Theoretical foundation:** Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For **rl-policy**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the advanced level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
          example: `# Concept check for Policy Gradients Intro
meta = {"topic_id": "rl-policy", "track": "ml", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `rl-policy ml advanced`,
          keyPoints: [
            `Core theory of Policy Gradients Intro ties to the ml track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Policy Gradients Intro ties to the ml track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Policy Gradients Intro
Track: ml | Level: advanced`
        },
        {
          id: `rl-policy-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Policy Gradients Intro**. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **rl-policy**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for rl-policy
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("rl-policy", "Policy Gradients Intro")
print(ref.topic_id, ref.title.split()[0])`,
          output: `rl-policy Policy`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with ml ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with ml ecosystem conventions

Topic: Policy Gradients Intro
Track: ml | Level: advanced`
        },
        {
          id: `rl-policy-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Policy Gradients Intro** often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on **rl-policy**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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

debug_step("rl-policy", "Policy Gradients Intro")
debug_step("section_count", 4)`,
          output: `[rl-policy] 'Policy Gradients Intro' (str)
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

Topic: Policy Gradients Intro
Track: ml | Level: advanced`
        },
        {
          id: `rl-policy-real-world`,
          title: `Real-World Applications`,
          content: `**Policy Gradients Intro** shows up wherever **ml** skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around **rl-policy** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Policy Gradients Intro
skills = ["ml", "advanced", "rl-policy"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ml, advanced, rl-policy`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Policy Gradients Intro to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Policy Gradients Intro to adjacent topics in the same track

Topic: Policy Gradients Intro
Track: ml | Level: advanced`
        }
      ],
      exercises: [
        {
          id: `ex-pg-1`,
          question: `REINFORCE uses gradient of log ___ times return.`,
          solution: `print("probability")`,
          difficulty: `easy`
        },
        {
          id: `ex-pg-2`,
          question: `PPO prevents too large policy ___.`,
          solution: `print("updates")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 124,
      module: `module-25`,
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
      id: `rl-applications`,
      title: `RL Applications`,
      description: `Game AI, robotics overview, and deployment considerations.`,
      level: `advanced`,
      track: `ml`,
      sections: [
        {
          id: `games`,
          title: `Game Playing`,
          content: `**Game Playing** is essential to **RL Applications**. Game AI, robotics overview, and deployment considerations. At the **advanced** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

AlphaGo combined MCTS with deep networks. Atari DQN milestone. StarCraft II and Dota 2 multi-agent coordination at pro level.

Self-play generates curriculum—agents improve by competing with past versions.

**Applying RL Applications:** Game AI, robotics overview, and deployment considerations. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Game Playing", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff. Mastering "Game Playing" here directly affects how confidently you can build, debug, and ship ml projects.

**Professional habits:** Establish baselines, stratify splits, and report confidence intervals — not single scores. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Overfitting small datasets, tuning on test data, and ignoring class imbalance. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `MCTS planning plus learned value/policy`,
            `Self-play requires careful opponent sampling`,
            `Imperfect information games need belief states`,
            `Compute cost enormous for frontier results`,
            `Game Playing is a foundational piece of RL Applications`,
            `Connect this section to the ml track and advanced expectations`
          ],
          example: `# Concept check: Game Playing
meta = {
    "topic": "rl-applications",
    "section": "games",
    "track": "ml",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: rl-applications
section: games
track: ml
level: advanced`,
          pseudoCode: `CONCEPT: Game Playing

Study checklist:
  1. MCTS planning plus learned value/policy
  2. Self-play requires careful opponent sampling
  3. Imperfect information games need belief states
  4. Compute cost enormous for frontier results
  5. Game Playing is a foundational piece of RL Applications
  6. Connect this section to the ml track and advanced expectations

Topic: RL Applications
Track: ml | Level: advanced`
        },
        {
          id: `robotics`,
          title: `Robotics & Sim-to-Real`,
          content: `**Robotics & Sim-to-Real** is essential to **RL Applications**. Game AI, robotics overview, and deployment considerations. At the **advanced** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Train policies in simulation (Isaac Gym, PyBullet), transfer to real robots via domain randomization and system identification.

Reward engineering: sparse success signal vs dense shaping tradeoffs.

**Applying RL Applications:** Game AI, robotics overview, and deployment considerations. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Robotics & Sim-to-Real", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff. Mastering "Robotics & Sim-to-Real" here directly affects how confidently you can build, debug, and ship ml projects.

**Professional habits:** Establish baselines, stratify splits, and report confidence intervals — not single scores. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Overfitting small datasets, tuning on test data, and ignoring class imbalance. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Sim-to-real gap from physics mismatch`,
            `Domain randomization improves robustness`,
            `Safety critical—constrain action magnitudes`,
            `Human demonstrations accelerate learning (imitation)`,
            `Robotics & Sim-to-Real is a foundational piece of RL Applications`,
            `Connect this section to the ml track and advanced expectations`
          ],
          example: `# Concept check: Robotics & Sim-to-Real
meta = {
    "topic": "rl-applications",
    "section": "robotics",
    "track": "ml",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: rl-applications
section: robotics
track: ml
level: advanced`,
          pseudoCode: `CONCEPT: Robotics & Sim-to-Real

Study checklist:
  1. Sim-to-real gap from physics mismatch
  2. Domain randomization improves robustness
  3. Safety critical—constrain action magnitudes
  4. Human demonstrations accelerate learning (imitation)
  5. Robotics & Sim-to-Real is a foundational piece of RL Applications
  6. Connect this section to the ml track and advanced expectations

Topic: RL Applications
Track: ml | Level: advanced`
        },
        {
          id: `recsys-rl`,
          title: `RL in Recommendations`,
          content: `**RL in Recommendations** is essential to **RL Applications**. Game AI, robotics overview, and deployment considerations. At the **advanced** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Treat recommendations as sequential decisions maximizing long-term engagement. Off-policy evaluation from logged bandit feedback.

Counterfactual evaluation challenging due to exposure bias.

**Applying RL Applications:** Game AI, robotics overview, and deployment considerations. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "RL in Recommendations", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff. Mastering "RL in Recommendations" here directly affects how confidently you can build, debug, and ship ml projects.

**Professional habits:** Establish baselines, stratify splits, and report confidence intervals — not single scores. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Overfitting small datasets, tuning on test data, and ignoring class imbalance. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Reward long-term retention not only clicks`,
            `Off-policy eval uses logged propensities`,
            `Exploration in production needs guardrails`,
            `Simulator of user behavior often misspecified`,
            `RL in Recommendations is a foundational piece of RL Applications`,
            `Connect this section to the ml track and advanced expectations`
          ],
          example: `# Concept check: RL in Recommendations
meta = {
    "topic": "rl-applications",
    "section": "recsys-rl",
    "track": "ml",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: rl-applications
section: recsys-rl
track: ml
level: advanced`,
          pseudoCode: `CONCEPT: RL in Recommendations

Study checklist:
  1. Reward long-term retention not only clicks
  2. Off-policy eval uses logged propensities
  3. Exploration in production needs guardrails
  4. Simulator of user behavior often misspecified
  5. RL in Recommendations is a foundational piece of RL Applications
  6. Connect this section to the ml track and advanced expectations

Topic: RL Applications
Track: ml | Level: advanced`
        },
        {
          id: `deploy`,
          title: `Deployment & Safety`,
          content: `**Deployment & Safety** is essential to **RL Applications**. Game AI, robotics overview, and deployment considerations. At the **advanced** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

RL in production rare outside simulators—exploration risky. Use offline RL or conservative policy updates. Monitor reward hacking when proxy metrics misalign with goals.

Human oversight for irreversible actions; sandbox simulators for validation.

**Applying RL Applications:** Game AI, robotics overview, and deployment considerations. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Deployment & Safety", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Why this matters:** Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff. Mastering "Deployment & Safety" here directly affects how confidently you can build, debug, and ship ml projects.

**Professional habits:** Establish baselines, stratify splits, and report confidence intervals — not single scores. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Overfitting small datasets, tuning on test data, and ignoring class imbalance. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Proxy rewards get gamed—Goodhart's law`,
            `Offline RL from historical logs avoids exploration risk`,
            `Interpretability harder than supervised models`,
            `Regulatory scrutiny on autonomous decisions`,
            `Deployment & Safety is a foundational piece of RL Applications`,
            `Connect this section to the ml track and advanced expectations`
          ],
          example: `# Concept check: Deployment & Safety
meta = {
    "topic": "rl-applications",
    "section": "deploy",
    "track": "ml",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: rl-applications
section: deploy
track: ml
level: advanced`,
          pseudoCode: `CONCEPT: Deployment & Safety

Study checklist:
  1. Proxy rewards get gamed—Goodhart's law
  2. Offline RL from historical logs avoids exploration risk
  3. Interpretability harder than supervised models
  4. Regulatory scrutiny on autonomous decisions
  5. Deployment & Safety is a foundational piece of RL Applications
  6. Connect this section to the ml track and advanced expectations

Topic: RL Applications
Track: ml | Level: advanced`
        },
        {
          id: `rl-applications-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**RL Applications** sits in the **ml** track of the Data Science Master curriculum. Game AI, robotics overview, and deployment considerations.

**Theoretical foundation:** Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.

For **rl-applications**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the advanced level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
          example: `# Concept check for RL Applications
meta = {"topic_id": "rl-applications", "track": "ml", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `rl-applications ml advanced`,
          keyPoints: [
            `Core theory of RL Applications ties to the ml track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of RL Applications ties to the ml track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: RL Applications
Track: ml | Level: advanced`
        },
        {
          id: `rl-applications-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **RL Applications**. Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **rl-applications**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for rl-applications
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("rl-applications", "RL Applications")
print(ref.topic_id, ref.title.split()[0])`,
          output: `rl-applications RL`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with ml ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with ml ecosystem conventions

Topic: RL Applications
Track: ml | Level: advanced`
        },
        {
          id: `rl-applications-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **RL Applications** often hit predictable walls. Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.

When stuck on **rl-applications**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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

debug_step("rl-applications", "RL Applications")
debug_step("section_count", 4)`,
          output: `[rl-applications] 'RL Applications' (str)
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

Topic: RL Applications
Track: ml | Level: advanced`
        },
        {
          id: `rl-applications-real-world`,
          title: `Real-World Applications`,
          content: `**RL Applications** shows up wherever **ml** skills meet business constraints. ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.

Teams shipping features around **rl-applications** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for RL Applications
skills = ["ml", "advanced", "rl-applications"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ml, advanced, rl-applications`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect RL Applications to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect RL Applications to adjacent topics in the same track

Topic: RL Applications
Track: ml | Level: advanced`
        }
      ],
      exercises: [
        {
          id: `ex-rlapp-1`,
          question: `AlphaGo combined MCTS with deep ___.`,
          solution: `print("networks")`,
          difficulty: `easy`
        },
        {
          id: `ex-rlapp-2`,
          question: `Sim-to-real uses domain ___.`,
          solution: `print("randomization")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 124,
      module: `module-25`,
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
