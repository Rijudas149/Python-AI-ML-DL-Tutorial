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
            `Partial observability → POMDP`
          ]
        },
        {
          id: `value-policy`,
          title: `Value Functions & Bellman`,
          content: `**State-value** V^π(s) = expected return starting in s following π. **Action-value** Q^π(s,a). **Bellman expectation equation** recursively decomposes values.

**Optimal** V* satisfies Bellman optimality; solving MDP = finding π* maximizing value.

**Applying MDPs, Rewards & Policies:** Formalize sequential decision making as Markov Decision Processes. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Value Functions & Bellman", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          example: `# Toy: two actions, deterministic reward
gamma = 0.9
r_step = -1  # cost per step
print("discount", gamma, "step cost", r_step)`,
          keyPoints: [
            `V describes how good states are under π`,
            `Q needed for control without knowing model`,
            `Bellman equations underpin dynamic programming`,
            `Optimal policy greedy w.r.t Q*`
          ]
        },
        {
          id: `explore`,
          title: `Exploration vs Exploitation`,
          content: `Agent must try actions to discover rewards. **ε-greedy**: random action with prob ε. **UCB** optimistically estimates uncertainty. Multi-armed bandits simplify to stateless RL.

Insufficient exploration traps agent in local optima.

**Applying MDPs, Rewards & Policies:** Formalize sequential decision making as Markov Decision Processes. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Exploration vs Exploitation", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `ε-greedy simple but wastes steps at low ε`,
            `Optimism under uncertainty encourages exploration`,
            `Bandits formalize A/B testing with regret`,
            `Non-stationary rewards need sliding windows`
          ]
        },
        {
          id: `rl-loop`,
          title: `Agent-Environment Loop`,
          content: `At each step: observe state, select action, receive reward and next state. **OpenAI Gym/Gymnasium** standardizes interfaces: \`env.reset()\`, \`env.step(action)\`.

Render for debugging; \`done\` flag ends episode; \`info\` dict carries diagnostics.

**Applying MDPs, Rewards & Policies:** Formalize sequential decision making as Markov Decision Processes. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Agent-Environment Loop", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Gymnasium successor to OpenAI Gym`,
            `Seed env for reproducible episodes`,
            `Reward shaping accelerates learning but changes objective`,
            `Log episode return not only final step reward`
          ]
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
      estimatedMinutes: 40,
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

**Applying Q-Learning & Bellman Updates:** Model-free temporal difference learning for optimal action-values. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Q-Learning Algorithm", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          example: `alpha, gamma = 0.5, 0.9
Q_sa, r, max_Q_next = 1.0, 1.0, 2.0
Q_sa += alpha * (r + gamma * max_Q_next - Q_sa)
print(round(Q_sa, 2))`,
          output: `1.4`,
          keyPoints: [
            `Learning rate α controls update magnitude`,
            `Off-policy: learns greedy target while exploring`,
            `Tabular Q fails on large state spaces`,
            `Max operator overestimates with function approximation`
          ]
        },
        {
          id: `td`,
          title: `Temporal Difference Learning`,
          content: `**TD(0)** bootstraps from current estimates V(s') instead of waiting for episode end. Lower variance than Monte Carlo, some bias.

**SARSA** on-policy variant uses actual next action from behavior policy.

**Applying Q-Learning & Bellman Updates:** Model-free temporal difference learning for optimal action-values. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Temporal Difference Learning", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Bootstrap trades bias for lower variance`,
            `SARSA safer near cliffs (on-policy)`,
            `n-step returns interpolate MC and TD`,
            `Eligibility traces credit long-range effects`
          ]
        },
        {
          id: `tabular`,
          title: `Tabular Methods & Gridworld`,
          content: `Small discrete environments store Q in dict or array indexed by (s,a). Visualize value iteration vs Q-learning on gridworld with obstacles and goal +1 reward.

State encoding critical when applying tabular methods to raw observations.

**Applying Q-Learning & Bellman Updates:** Model-free temporal difference learning for optimal action-values. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Tabular Methods & Gridworld", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Discretize continuous states carefully`,
            `Terminal states bootstrap with zero value`,
            `Reward scale affects learning rate tuning`,
            `Sync vs async multi-agent updates need care`
          ]
        },
        {
          id: `convergence`,
          title: `Convergence Conditions`,
          content: `Robbins-Monro conditions on α schedules. All (s,a) visited infinitely often in tabular case. Function approximation can diverge—use target networks and experience replay in deep RL.

**Applying Q-Learning & Bellman Updates:** Model-free temporal difference learning for optimal action-values. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Convergence Conditions", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Exploration schedule must not vanish too early`,
            `Deadly triad: function approx + bootstrapping + off-policy`,
            `Double Q-learning reduces overestimation`,
            `Monitor TD error magnitude during training`
          ]
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
      estimatedMinutes: 45,
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
          content: `Neural network maps state → Q-values for each action. Loss: MSE between Q(s,a) and TD target r + γ max Q_target(s',·).

**Experience replay** stores transitions (s,a,r,s') in buffer; sample mini-batches breaking temporal correlation.

**Applying Deep Q-Networks (DQN):** Combine Q-learning with neural networks and stabilization tricks. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "DQN Architecture", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Replay buffer size affects sample diversity`,
            `Target network updated slowly stabilizes training`,
            `Frame stacking for Atari partial observability`,
            `Reward clipping can help but changes objective`
          ]
        },
        {
          id: `improvements`,
          title: `Double DQN & Dueling`,
          content: `**Double DQN** decouples action selection and evaluation reducing overestimation. **Dueling** architecture separates V(s) and advantage A(s,a) streams.

**Prioritized replay** samples high TD-error transitions more often.

**Applying Deep Q-Networks (DQN):** Combine Q-learning with neural networks and stabilization tricks. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Double DQN & Dueling", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Double DQN: online net selects, target evaluates`,
            `Dueling helps when action values similar`,
            `Prioritized replay needs importance sampling correction`,
            `Noisy nets replace ε-greedy exploration`
          ]
        },
        {
          id: `atari`,
          title: `Atari & Visual Inputs`,
          content: `Preprocess frames: grayscale, resize, stack 4 frames. Convolutional layers extract spatial features; fully connected output per-action Q.

Training millions of steps—GPU acceleration essential.

**Applying Deep Q-Networks (DQN):** Combine Q-learning with neural networks and stabilization tricks. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Atari & Visual Inputs", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Preprocessing must match train and deploy`,
            `Sticky actions increase environment stochasticity`,
            `Human-normalized score compares to human players`,
            `Sim-to-real gap for robotics visuals`
          ]
        },
        {
          id: `limits-dqn`,
          title: `DQN Limitations`,
          content: `Discrete actions only—continuous control needs actor-critic. Q-learning sensitive to reward scale and hyperparameters.

Modern baselines: Rainbow combines improvements; still largely superseded by policy gradient methods in complex domains.

**Applying Deep Q-Networks (DQN):** Combine Q-learning with neural networks and stabilization tricks. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "DQN Limitations", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Continuous action spaces need different algorithms`,
            `Hyperparameter sweeps expensive`,
            `Offline RL from fixed datasets active research area`,
            `Safety constraints rarely enforced in vanilla DQN`
          ]
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
      estimatedMinutes: 45,
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

**Applying Policy Gradients Intro:** Optimize parameterized policies directly with gradient ascent on expected return. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "REINFORCE Algorithm", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `log-derivative trick enables gradient estimation`,
            `Baselines reduce variance without biasing gradient`,
            `On-policy: data from current π only`,
            `Credit assignment hard on long episodes`
          ]
        },
        {
          id: `actor-critic`,
          title: `Actor-Critic Methods`,
          content: `**Actor** updates policy; **critic** learns value to reduce variance. **A2C/A3C** parallel workers collect experience. **PPO** clips policy updates preventing destructive large steps.

PPO default choice for many continuous control benchmarks.

**Applying Policy Gradients Intro:** Optimize parameterized policies directly with gradient ascent on expected return. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Actor-Critic Methods", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Advantage A(s,a) = Q-V centers learning signal`,
            `PPO clip ratio stabilizes policy updates`,
            `Entropy bonus encourages exploration`,
            `GAE generalizes advantage estimation`
          ]
        },
        {
          id: `continuous`,
          title: `Continuous Action Spaces`,
          content: `Output mean and log-std of Gaussian policy; sample actions. **Tanh squashing** bounds actions for robotic joints.

**DDPG/TD3/SAC** off-policy actor-critic for continuous control with replay buffers.

**Applying Policy Gradients Intro:** Optimize parameterized policies directly with gradient ascent on expected return. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Continuous Action Spaces", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Reparameterization trick enables backprop through stochastic nodes`,
            `SAC maximizes entropy for robust exploration`,
            `Action bounds via squashing to [-1,1]`,
            `Simulators like MuJoCo standard benchmarks`
          ]
        },
        {
          id: `pg-vs-value`,
          title: `Policy vs Value Methods`,
          content: `Policy methods handle stochastic policies and continuous actions naturally. Value methods sample efficient off-policy.

Modern algorithms blend both: soft actor-critic, implicit Q-learning.

**Applying Policy Gradients Intro:** Optimize parameterized policies directly with gradient ascent on expected return. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Policy vs Value Methods", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Stochastic policies useful in partially observable settings`,
            `Value methods excel discrete action ATARI historically`,
            `Hybrid methods dominate contemporary research`,
            `Choose based on action space and sample budget`
          ]
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
      estimatedMinutes: 45,
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
          content: `AlphaGo combined MCTS with deep networks. Atari DQN milestone. StarCraft II and Dota 2 multi-agent coordination at pro level.

Self-play generates curriculum—agents improve by competing with past versions.

**Applying RL Applications:** Game AI, robotics overview, and deployment considerations. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Game Playing", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `MCTS planning plus learned value/policy`,
            `Self-play requires careful opponent sampling`,
            `Imperfect information games need belief states`,
            `Compute cost enormous for frontier results`
          ]
        },
        {
          id: `robotics`,
          title: `Robotics & Sim-to-Real`,
          content: `Train policies in simulation (Isaac Gym, PyBullet), transfer to real robots via domain randomization and system identification.

Reward engineering: sparse success signal vs dense shaping tradeoffs.

**Applying RL Applications:** Game AI, robotics overview, and deployment considerations. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Robotics & Sim-to-Real", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Sim-to-real gap from physics mismatch`,
            `Domain randomization improves robustness`,
            `Safety critical—constrain action magnitudes`,
            `Human demonstrations accelerate learning (imitation)`
          ]
        },
        {
          id: `recsys-rl`,
          title: `RL in Recommendations`,
          content: `Treat recommendations as sequential decisions maximizing long-term engagement. Off-policy evaluation from logged bandit feedback.

Counterfactual evaluation challenging due to exposure bias.

**Applying RL Applications:** Game AI, robotics overview, and deployment considerations. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "RL in Recommendations", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Reward long-term retention not only clicks`,
            `Off-policy eval uses logged propensities`,
            `Exploration in production needs guardrails`,
            `Simulator of user behavior often misspecified`
          ]
        },
        {
          id: `deploy`,
          title: `Deployment & Safety`,
          content: `RL in production rare outside simulators—exploration risky. Use offline RL or conservative policy updates. Monitor reward hacking when proxy metrics misalign with goals.

Human oversight for irreversible actions; sandbox simulators for validation.

**Applying RL Applications:** Game AI, robotics overview, and deployment considerations. These machine learning ideas appear in production systems, competitions, and research papers alike. When studying "Deployment & Safety", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Proxy rewards get gamed—Goodhart's law`,
            `Offline RL from historical logs avoids exploration risk`,
            `Interpretability harder than supervised models`,
            `Regulatory scrutiny on autonomous decisions`
          ]
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
      estimatedMinutes: 40,
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
