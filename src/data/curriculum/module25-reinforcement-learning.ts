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
          content: `### Introduction

An **MDP** formalizes sequential decision-making as (S, A, P, R, γ): states S, actions A, transition dynamics P(s'|s,a), reward function R(s,a), and discount factor γ ∈ [0,1]. The **Markov property** means the future depends only on the current state—not the full history.

### Markov Decision Processes

A **policy** π(a|s) maps each state to an action distribution. The agent's goal is to maximize expected **return** G_t = Σ γ^k R_{t+k+1}. When γ is close to 1, the agent values long-term reward; smaller γ makes it more myopic.

Think of a gridworld: states are cells, actions move the agent, rewards signal goals (+1) or penalties (-1 per step). The transition model captures whether moves are deterministic or stochastic (slippery ice).

### Key Ideas

- γ near 1 values long-term reward
- Episodic tasks terminate; continuing tasks run forever
- Environment non-stationarity breaks MDP assumptions
- Partial observability → POMDP

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `G_t = \\sum_{k=0}^{\\infty} \\gamma^k R_{t+k+1}`,
            `V^\\pi(s) = \\mathbb{E}_\\pi[G_t \\mid S_t = s]`
          ],
          example: `import gymnasium as gym
env = gym.make("FrozenLake-v1", is_slippery=False)
state, info = env.reset(seed=42)
print("states:", env.observation_space.n)
print("actions:", env.action_space.n)
print("initial state:", state)`,
          output: `states: 16
actions: 4
initial state: 0`,
          keyPoints: [
            `γ near 1 values long-term reward`,
            `Episodic tasks terminate; continuing tasks run forever`,
            `Environment non-stationarity breaks MDP assumptions`,
            `Partial observability → POMDP`
          ],
          diagram: `Markov Decision Processes
State → Action → Reward → Next State → Update Policy`,
          commonMistakes: [
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Exploration rate ε set to 0 too early — agent never discovers better actions`
          ]
        },
        {
          id: `value-policy`,
          title: `Value Functions & Bellman`,
          content: `### Introduction

**State-value** V^π(s) is the expected return starting in state s and following policy π. **Action-value** Q^π(s,a) is the expected return after taking action a in state s, then following π.

### Value Functions & Bellman

The **Bellman expectation equation** decomposes value recursively: V^π(s) = Σ_a π(a|s) Σ_{s'} P(s'|s,a)[R(s,a) + γ V^π(s')]. Optimal values V* satisfy the Bellman **optimality** equation and induce a greedy optimal policy.

In tabular settings, you can compute V* with value iteration: repeatedly apply the Bellman optimality backup until convergence.

### Key Ideas

- V describes how good states are under π
- Q needed for control without knowing model
- Bellman equations underpin dynamic programming
- Optimal policy greedy w.r.t Q*

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          example: `# One-step Bellman backup (deterministic): V(s) = R + gamma * V(s_next)
gamma = 0.9
reward = 1.0
V_next = 2.0
V = reward + gamma * V_next
print(round(V, 2))`,
          output: `2.8`,
          formulas: [
            `V^\\pi(s) = \\sum_a \\pi(a|s) \\sum_{s'} P(s'|s,a)[R + \\gamma V^\\pi(s')]`
          ],
          keyPoints: [
            `V describes how good states are under π`,
            `Q needed for control without knowing model`,
            `Bellman equations underpin dynamic programming`,
            `Optimal policy greedy w.r.t Q*`
          ],
          commonMistakes: [
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `explore`,
          title: `Exploration vs Exploitation`,
          content: `### Introduction

Agent must try actions to discover rewards. **ε-greedy**: random action with prob ε.

### Exploration vs Exploitation

**UCB** optimistically estimates uncertainty. Multi-armed bandits simplify to stateless RL.

Insufficient exploration traps agent in local optima.

### Key Ideas

- ε-greedy simple but wastes steps at low ε
- Optimism under uncertainty encourages exploration
- Bandits formalize A/B testing with regret
- Non-stationary rewards need sliding windows`,
          keyPoints: [
            `ε-greedy simple but wastes steps at low ε`,
            `Optimism under uncertainty encourages exploration`,
            `Bandits formalize A/B testing with regret`,
            `Non-stationary rewards need sliding windows`
          ],
          diagram: `Exploration vs Exploitation
Query → Embed → Retrieve → Augment Prompt → Generate`,
          commonMistakes: [
            `Target encoding without inner cross-validation — label leakage`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`
          ]
        },
        {
          id: `rl-loop`,
          title: `Agent-Environment Loop`,
          content: `### Introduction

At each timestep the agent observes state s_t, selects action a_t, receives reward r_t and next state s_{t+1}. **Gymnasium** (successor to OpenAI Gym) standardizes this interface.

### Agent-Environment Loop

Typical loop: \`env.reset()\` → repeat \`action = policy(state); state, reward, done, truncated, info = env.step(action)\` until termination. Log **episode return** (sum of rewards), not only the final step.

Reward shaping adds intermediate signals to speed learning—but can change the optimal policy if misdesigned. Always compare against the original sparse reward objective.

### Key Ideas

- Gymnasium successor to OpenAI Gym
- Seed env for reproducible episodes
- Reward shaping accelerates learning but changes objective
- Log episode return not only final step reward

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `import gymnasium as gym
env = gym.make("FrozenLake-v1", is_slippery=False)
state, _ = env.reset(seed=0)
total = 0
for _ in range(20):
    action = env.action_space.sample()
    state, reward, terminated, truncated, _ = env.step(action)
    total += reward
    if terminated or truncated:
        break
print("episode return:", total)`,
          output: `episode return: 0.0`,
          keyPoints: [
            `Gymnasium successor to OpenAI Gym`,
            `Seed env for reproducible episodes`,
            `Reward shaping accelerates learning but changes objective`,
            `Log episode return not only final step reward`
          ],
          diagram: `Agent-Environment Loop
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Target encoding without inner cross-validation — label leakage`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Serving a model trained on preprocessed data without the same pipeline in production`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-rl-1`,
          question: `Create FrozenLake-v1 env and print observation/action space sizes.`,
          solution: `import gymnasium as gym
env = gym.make("FrozenLake-v1", is_slippery=False)
print(env.observation_space.n, env.action_space.n)`,
          difficulty: `easy`
        },
        {
          id: `ex-rl-2`,
          question: `Run one random-action episode; print total reward.`,
          solution: `import gymnasium as gym
env = gym.make("FrozenLake-v1", is_slippery=False)
s, _ = env.reset(seed=1)
total = 0
done = False
while not done:
    s, r, term, trunc, _ = env.step(env.action_space.sample())
    total += r
    done = term or trunc
print(total >= 0)`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 40,
      module: `module-25`,
      references: [
        {
          id: `stanford-cs330`,
          title: `Stanford CS330 — Deep Multi-Task and Meta Learning`,
          source: `Stanford`,
          type: `course`,
          url: `https://cs330.stanford.edu/`,
          description: `Advanced course on multi-task learning, meta-learning, and transfer.`
        },
        {
          id: `goodfellow-dl-book`,
          title: `Deep Learning`,
          source: `MIT Press`,
          type: `book`,
          url: `https://www.deeplearningbook.org/`,
          description: `Comprehensive free textbook covering neural networks, optimization, and architectures.`
        },
        {
          id: `berkeley-cs189`,
          title: `Berkeley CS189/289A — Introduction to Machine Learning`,
          source: `Berkeley`,
          type: `course`,
          url: `https://people.eecs.berkeley.edu/~jrs/189/`,
          description: `Comprehensive ML course with strong mathematical foundations.`
        },
        {
          id: `mit-6034`,
          title: `MIT 6.034 — Artificial Intelligence`,
          source: `MIT`,
          type: `course`,
          url: `https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/`,
          description: `Classic AI course covering search, knowledge, learning, and reasoning.`
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
          content: `### Introduction

**Q-learning** off-policy TD control: Q(s,a) ← Q(s,a) + α[r + γ max_a' Q(s',a') - Q(s,a)]. Target uses max over next actions (greedy) while behavior may explore.

### Q-Learning Algorithm

Converges to Q* with sufficient visitation under tabular setting.

### Key Ideas

- Learning rate α controls update magnitude
- Off-policy: learns greedy target while exploring
- Tabular Q fails on large state spaces
- Max operator overestimates with function approximation

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
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
          ],
          diagram: `Q-Learning Algorithm
Load → Profile → Visualize → Hypothesis → Transform`,
          commonMistakes: [
            `Target encoding without inner cross-validation — label leakage`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`
          ]
        },
        {
          id: `td`,
          title: `Temporal Difference Learning`,
          content: `### Introduction

**TD(0)** bootstraps from current estimates V(s') instead of waiting for episode end. Lower variance than Monte Carlo, some bias.

### Temporal Difference Learning

**SARSA** on-policy variant uses actual next action from behavior policy.

### Key Ideas

- Bootstrap trades bias for lower variance
- SARSA safer near cliffs (on-policy)
- n-step returns interpolate MC and TD
- Eligibility traces credit long-range effects`,
          keyPoints: [
            `Bootstrap trades bias for lower variance`,
            `SARSA safer near cliffs (on-policy)`,
            `n-step returns interpolate MC and TD`,
            `Eligibility traces credit long-range effects`
          ],
          commonMistakes: [
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Exploration rate ε set to 0 too early — agent never discovers better actions`
          ]
        },
        {
          id: `tabular`,
          title: `Tabular Methods & Gridworld`,
          content: `### Introduction

Small discrete environments store Q in dict or array indexed by (s,a). Visualize value iteration vs Q-learning on gridworld with obstacles and goal +1 reward.

### Tabular Methods & Gridworld

State encoding critical when applying tabular methods to raw observations.

### Key Ideas

- Discretize continuous states carefully
- Terminal states bootstrap with zero value
- Reward scale affects learning rate tuning
- Sync vs async multi-agent updates need care`,
          keyPoints: [
            `Discretize continuous states carefully`,
            `Terminal states bootstrap with zero value`,
            `Reward scale affects learning rate tuning`,
            `Sync vs async multi-agent updates need care`
          ],
          diagram: `Tabular Methods & Gridworld
Load → Profile → Visualize → Hypothesis → Transform`,
          commonMistakes: [
            `Target encoding without inner cross-validation — label leakage`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Exploration rate ε set to 0 too early — agent never discovers better actions`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`
          ]
        },
        {
          id: `convergence`,
          title: `Convergence Conditions`,
          content: `### Introduction

Robbins-Monro conditions on α schedules. All (s,a) visited infinitely often in tabular case.

### Convergence Conditions

Function approximation can diverge—use target networks and experience replay in deep RL.

### Key Ideas

- Exploration schedule must not vanish too early
- Deadly triad: function approx + bootstrapping + off-policy
- Double Q-learning reduces overestimation
- Monitor TD error magnitude during training`,
          keyPoints: [
            `Exploration schedule must not vanish too early`,
            `Deadly triad: function approx + bootstrapping + off-policy`,
            `Double Q-learning reduces overestimation`,
            `Monitor TD error magnitude during training`
          ],
          diagram: `Convergence Conditions
Load → Profile → Visualize → Hypothesis → Transform`,
          commonMistakes: [
            `Target encoding without inner cross-validation — label leakage`,
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-ql-1`,
          question: `Implement one Q-learning update: Q=1.0, alpha=0.5, r=1, gamma=0.9, max_next=2.`,
          solution: `Q = 1.0
alpha, gamma, r, max_next = 0.5, 0.9, 1.0, 2.0
Q += alpha * (r + gamma * max_next - Q)
print(round(Q, 2))`,
          difficulty: `easy`
        },
        {
          id: `ex-ql-2`,
          question: `Build a 2-state Q-table and update Q[(0,1)] with the TD target.`,
          solution: `Q = {(0, 0): 0.0, (0, 1): 1.0}
alpha, gamma, r, max_next = 0.5, 0.9, 1.0, 2.0
s, a = 0, 1
Q[(s, a)] += alpha * (r + gamma * max_next - Q[(s, a)])
print(round(Q[(0, 1)], 2))`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 45,
      module: `module-25`,
      references: [
        {
          id: `stanford-cs330`,
          title: `Stanford CS330 — Deep Multi-Task and Meta Learning`,
          source: `Stanford`,
          type: `course`,
          url: `https://cs330.stanford.edu/`,
          description: `Advanced course on multi-task learning, meta-learning, and transfer.`
        },
        {
          id: `goodfellow-dl-book`,
          title: `Deep Learning`,
          source: `MIT Press`,
          type: `book`,
          url: `https://www.deeplearningbook.org/`,
          description: `Comprehensive free textbook covering neural networks, optimization, and architectures.`
        },
        {
          id: `berkeley-cs189`,
          title: `Berkeley CS189/289A — Introduction to Machine Learning`,
          source: `Berkeley`,
          type: `course`,
          url: `https://people.eecs.berkeley.edu/~jrs/189/`,
          description: `Comprehensive ML course with strong mathematical foundations.`
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
      id: `rl-deep`,
      title: `Deep Q-Networks (DQN)`,
      description: `Combine Q-learning with neural networks and stabilization tricks.`,
      level: `advanced`,
      track: `ml`,
      sections: [
        {
          id: `dqn`,
          title: `DQN Architecture`,
          content: `### Introduction

A **Deep Q-Network** uses a neural net to approximate Q(s,·) for all actions from a raw state vector or image. The TD target is r + γ max_{a'} Q_target(s', a').

### DQN Architecture

**Experience replay** stores transitions (s, a, r, s') in a buffer and samples random mini-batches—breaking temporal correlation that destabilizes online learning. A **target network** (copy of Q updated slowly) prevents the moving-target problem.

Loss: MSE between Q(s,a) and the TD target. Atari DQN stacks 4 grayscale frames and uses convolutional layers before fully connected Q heads.

### Key Ideas

- Replay buffer size affects sample diversity
- Target network updated slowly stabilizes training
- Frame stacking for Atari partial observability
- Reward clipping can help but changes objective

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `import torch
import torch.nn as nn

class QNet(nn.Module):
    def __init__(self, n_states=4, n_actions=2):
        super().__init__()
        self.net = nn.Sequential(nn.Linear(n_states, 32), nn.ReLU(), nn.Linear(32, n_actions))
    def forward(self, x):
        return self.net(x)

q = QNet()(torch.randn(1, 4))
print(q.shape)`,
          output: `torch.Size([1, 2])`,
          keyPoints: [
            `Replay buffer size affects sample diversity`,
            `Target network updated slowly stabilizes training`,
            `Frame stacking for Atari partial observability`,
            `Reward clipping can help but changes objective`
          ],
          diagram: `DQN Architecture
Image → Conv → ReLU → Pool → Flatten → Dense → Class`,
          commonMistakes: [
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`
          ]
        },
        {
          id: `improvements`,
          title: `Double DQN & Dueling`,
          content: `### Introduction

**Double DQN** decouples action selection and evaluation reducing overestimation. **Dueling** architecture separates V(s) and advantage A(s,a) streams.

### Double DQN & Dueling

**Prioritized replay** samples high TD-error transitions more often.

### Key Ideas

- Double DQN: online net selects, target evaluates
- Dueling helps when action values similar
- Prioritized replay needs importance sampling correction
- Noisy nets replace ε-greedy exploration`,
          keyPoints: [
            `Double DQN: online net selects, target evaluates`,
            `Dueling helps when action values similar`,
            `Prioritized replay needs importance sampling correction`,
            `Noisy nets replace ε-greedy exploration`
          ],
          diagram: `Double DQN & Dueling
Load → Profile → Visualize → Hypothesis → Transform`,
          commonMistakes: [
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`
          ]
        },
        {
          id: `atari`,
          title: `Atari & Visual Inputs`,
          content: `### Introduction

Preprocess frames: grayscale, resize, stack 4 frames. Convolutional layers extract spatial features; fully connected output per-action Q.

### Atari & Visual Inputs

Training millions of steps—GPU acceleration essential.

### Key Ideas

- Preprocessing must match train and deploy
- Sticky actions increase environment stochasticity
- Human-normalized score compares to human players
- Sim-to-real gap for robotics visuals`,
          keyPoints: [
            `Preprocessing must match train and deploy`,
            `Sticky actions increase environment stochasticity`,
            `Human-normalized score compares to human players`,
            `Sim-to-real gap for robotics visuals`
          ],
          diagram: `Atari & Visual Inputs
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`
          ]
        },
        {
          id: `limits-dqn`,
          title: `DQN Limitations`,
          content: `### Introduction

Discrete actions only—continuous control needs actor-critic. Q-learning sensitive to reward scale and hyperparameters.

### DQN Limitations

Modern baselines: Rainbow combines improvements; still largely superseded by policy gradient methods in complex domains.

### Key Ideas

- Continuous action spaces need different algorithms
- Hyperparameter sweeps expensive
- Offline RL from fixed datasets active research area
- Safety constraints rarely enforced in vanilla DQN`,
          keyPoints: [
            `Continuous action spaces need different algorithms`,
            `Hyperparameter sweeps expensive`,
            `Offline RL from fixed datasets active research area`,
            `Safety constraints rarely enforced in vanilla DQN`
          ],
          diagram: `DQN Limitations
Query → Embed → Retrieve → Augment Prompt → Generate`,
          commonMistakes: [
            `Target encoding without inner cross-validation — label leakage`,
            `Exploration rate ε set to 0 too early — agent never discovers better actions`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-dqn-1`,
          question: `Compute TD target: r=1, gamma=0.9, max_q_next=2.5.`,
          solution: `r, gamma, max_q = 1.0, 0.9, 2.5
print(round(r + gamma * max_q, 2))`,
          difficulty: `easy`
        },
        {
          id: `ex-dqn-2`,
          question: `Build a Q-network mapping 4-dim state to 2 actions.`,
          solution: `import torch
import torch.nn as nn
net = nn.Sequential(nn.Linear(4, 16), nn.ReLU(), nn.Linear(16, 2))
print(net(torch.randn(1, 4)).shape)`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 45,
      module: `module-25`,
      references: [
        {
          id: `stanford-cs330`,
          title: `Stanford CS330 — Deep Multi-Task and Meta Learning`,
          source: `Stanford`,
          type: `course`,
          url: `https://cs330.stanford.edu/`,
          description: `Advanced course on multi-task learning, meta-learning, and transfer.`
        },
        {
          id: `goodfellow-dl-book`,
          title: `Deep Learning`,
          source: `MIT Press`,
          type: `book`,
          url: `https://www.deeplearningbook.org/`,
          description: `Comprehensive free textbook covering neural networks, optimization, and architectures.`
        },
        {
          id: `pytorch-tutorials`,
          title: `PyTorch Tutorials`,
          source: `PyTorch`,
          type: `documentation`,
          url: `https://pytorch.org/tutorials/`,
          description: `Official tutorials from tensors through training loops and deployment.`
        },
        {
          id: `stanford-cs230`,
          title: `Stanford CS230 — Deep Learning`,
          source: `Stanford CS230`,
          type: `course`,
          url: `http://cs230.stanford.edu/`,
          description: `Andrew Ng's deep learning course covering NN fundamentals and best practices.`
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
          content: `### Introduction

Policy π_θ(a|s) parameterized by θ. Objective J(θ) = expected return.

### REINFORCE Algorithm

**Policy gradient theorem**: ∇J ∝ E[∇ log π_θ(a|s) · G_t]. Monte Carlo returns G_t from full episodes; high variance—use baselines subtracting learned value V(s).

### Key Ideas

- log-derivative trick enables gradient estimation
- Baselines reduce variance without biasing gradient
- On-policy: data from current π only
- Credit assignment hard on long episodes`,
          keyPoints: [
            `log-derivative trick enables gradient estimation`,
            `Baselines reduce variance without biasing gradient`,
            `On-policy: data from current π only`,
            `Credit assignment hard on long episodes`
          ],
          commonMistakes: [
            `Exploration rate ε set to 0 too early — agent never discovers better actions`,
            `Baselines reduce variance without biasing gradient.`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`
          ]
        },
        {
          id: `actor-critic`,
          title: `Actor-Critic Methods`,
          content: `### Introduction

**Actor** updates policy; **critic** learns value to reduce variance. **A2C/A3C** parallel workers collect experience.

### Actor-Critic Methods

**PPO** clips policy updates preventing destructive large steps. PPO default choice for many continuous control benchmarks.

### Key Ideas

- Advantage A(s,a) = Q-V centers learning signal
- PPO clip ratio stabilizes policy updates
- Entropy bonus encourages exploration
- GAE generalizes advantage estimation`,
          keyPoints: [
            `Advantage A(s,a) = Q-V centers learning signal`,
            `PPO clip ratio stabilizes policy updates`,
            `Entropy bonus encourages exploration`,
            `GAE generalizes advantage estimation`
          ],
          diagram: `Actor-Critic Methods
Query → Embed → Retrieve → Augment Prompt → Generate`,
          commonMistakes: [
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `continuous`,
          title: `Continuous Action Spaces`,
          content: `### Introduction

Output mean and log-std of Gaussian policy; sample actions. **Tanh squashing** bounds actions for robotic joints.

### Continuous Action Spaces

**DDPG/TD3/SAC** off-policy actor-critic for continuous control with replay buffers.

### Key Ideas

- Reparameterization trick enables backprop through stochastic nodes
- SAC maximizes entropy for robust exploration
- Action bounds via squashing to [-1,1]
- Simulators like MuJoCo standard benchmarks`,
          keyPoints: [
            `Reparameterization trick enables backprop through stochastic nodes`,
            `SAC maximizes entropy for robust exploration`,
            `Action bounds via squashing to [-1,1]`,
            `Simulators like MuJoCo standard benchmarks`
          ],
          diagram: `Continuous Action Spaces
Load → Profile → Visualize → Hypothesis → Transform`,
          commonMistakes: [
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Exploration rate ε set to 0 too early — agent never discovers better actions`
          ]
        },
        {
          id: `pg-vs-value`,
          title: `Policy vs Value Methods`,
          content: `### Introduction

Policy methods handle stochastic policies and continuous actions naturally. Value methods sample efficient off-policy.

### Policy vs Value Methods

Modern algorithms blend both: soft actor-critic, implicit Q-learning.

### Key Ideas

- Stochastic policies useful in partially observable settings
- Value methods excel discrete action ATARI historically
- Hybrid methods dominate contemporary research
- Choose based on action space and sample budget`,
          keyPoints: [
            `Stochastic policies useful in partially observable settings`,
            `Value methods excel discrete action ATARI historically`,
            `Hybrid methods dominate contemporary research`,
            `Choose based on action space and sample budget`
          ],
          diagram: `Policy vs Value Methods
Query → Embed → Retrieve → Augment Prompt → Generate`,
          commonMistakes: [
            `Exploration rate ε set to 0 too early — agent never discovers better actions`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-pg-1`,
          question: `Compute policy gradient direction: grad_log_pi=0.5, return_G=10.`,
          solution: `grad_log_pi, G = 0.5, 10.0
print(grad_log_pi * G)`,
          difficulty: `easy`
        },
        {
          id: `ex-pg-2`,
          question: `Clip ratio 1.3 to max 1.2 (PPO-style).`,
          solution: `ratio = 1.3
clipped = min(ratio, 1.2)
print(clipped)`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 45,
      module: `module-25`,
      references: [
        {
          id: `stanford-cs330`,
          title: `Stanford CS330 — Deep Multi-Task and Meta Learning`,
          source: `Stanford`,
          type: `course`,
          url: `https://cs330.stanford.edu/`,
          description: `Advanced course on multi-task learning, meta-learning, and transfer.`
        },
        {
          id: `goodfellow-dl-book`,
          title: `Deep Learning`,
          source: `MIT Press`,
          type: `book`,
          url: `https://www.deeplearningbook.org/`,
          description: `Comprehensive free textbook covering neural networks, optimization, and architectures.`
        },
        {
          id: `berkeley-cs189`,
          title: `Berkeley CS189/289A — Introduction to Machine Learning`,
          source: `Berkeley`,
          type: `course`,
          url: `https://people.eecs.berkeley.edu/~jrs/189/`,
          description: `Comprehensive ML course with strong mathematical foundations.`
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
      id: `rl-applications`,
      title: `RL Applications`,
      description: `Game AI, robotics overview, and deployment considerations.`,
      level: `advanced`,
      track: `ml`,
      sections: [
        {
          id: `games`,
          title: `Game Playing`,
          content: `### Introduction

AlphaGo combined MCTS with deep networks. StarCraft II and Dota 2 multi-agent coordination at pro level.

### Game Playing

Self-play generates curriculum—agents improve by competing with past versions.

### Key Ideas

- MCTS planning plus learned value/policy
- Self-play requires careful opponent sampling
- Imperfect information games need belief states
- Compute cost enormous for frontier results`,
          keyPoints: [
            `MCTS planning plus learned value/policy`,
            `Self-play requires careful opponent sampling`,
            `Imperfect information games need belief states`,
            `Compute cost enormous for frontier results`
          ],
          diagram: `Game Playing
State → Action → Reward → Next State → Update Policy`,
          commonMistakes: [
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`
          ]
        },
        {
          id: `robotics`,
          title: `Robotics & Sim-to-Real`,
          content: `### Introduction

Train policies in simulation (Isaac Gym, PyBullet), transfer to real robots via domain randomization and system identification.

### Robotics & Sim-to-Real

Reward engineering: sparse success signal vs dense shaping tradeoffs.

### Key Ideas

- Sim-to-real gap from physics mismatch
- Domain randomization improves robustness
- Safety critical—constrain action magnitudes
- Human demonstrations accelerate learning (imitation)`,
          keyPoints: [
            `Sim-to-real gap from physics mismatch`,
            `Domain randomization improves robustness`,
            `Safety critical—constrain action magnitudes`,
            `Human demonstrations accelerate learning (imitation)`
          ],
          commonMistakes: [
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Serving a model trained on preprocessed data without the same pipeline in production`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`
          ]
        },
        {
          id: `recsys-rl`,
          title: `RL in Recommendations`,
          content: `### Introduction

Treat recommendations as sequential decisions maximizing long-term engagement. Off-policy evaluation from logged bandit feedback.

### RL in Recommendations

Counterfactual evaluation challenging due to exposure bias.

### Key Ideas

- Reward long-term retention not only clicks
- Off-policy eval uses logged propensities
- Exploration in production needs guardrails
- Simulator of user behavior often misspecified`,
          keyPoints: [
            `Reward long-term retention not only clicks`,
            `Off-policy eval uses logged propensities`,
            `Exploration in production needs guardrails`,
            `Simulator of user behavior often misspecified`
          ],
          diagram: `RL in Recommendations
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`,
            `Exploration rate ε set to 0 too early — agent never discovers better actions`
          ]
        },
        {
          id: `deploy`,
          title: `Deployment & Safety`,
          content: `### Introduction

RL in production rare outside simulators—exploration risky. Use offline RL or conservative policy updates.

### Deployment & Safety

Monitor reward hacking when proxy metrics misalign with goals. Human oversight for irreversible actions; sandbox simulators for validation.

### Key Ideas

- Proxy rewards get gamed—Goodhart's law
- Offline RL from historical logs avoids exploration risk
- Interpretability harder than supervised models
- Regulatory scrutiny on autonomous decisions`,
          keyPoints: [
            `Proxy rewards get gamed—Goodhart's law`,
            `Offline RL from historical logs avoids exploration risk`,
            `Interpretability harder than supervised models`,
            `Regulatory scrutiny on autonomous decisions`
          ],
          diagram: `Deployment & Safety
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Exploration rate ε set to 0 too early — agent never discovers better actions`,
            `Optimizing accuracy on imbalanced classes instead of precision/recall/F1`,
            `Tuning hyperparameters on the test set instead of a validation fold`,
            `Target encoding without inner cross-validation — label leakage`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-rlapp-1`,
          question: `Simulate 3 self-play rounds where agent version increments.`,
          solution: `versions = list(range(1, 4))
print(len(versions), versions[-1])`,
          difficulty: `easy`
        },
        {
          id: `ex-rlapp-2`,
          question: `Randomize friction coefficient between 0.5 and 1.5 (domain randomization).`,
          solution: `import random
random.seed(42)
friction = random.uniform(0.5, 1.5)
print(0.5 <= friction <= 1.5)`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 40,
      module: `module-25`,
      references: [
        {
          id: `stanford-cs330`,
          title: `Stanford CS330 — Deep Multi-Task and Meta Learning`,
          source: `Stanford`,
          type: `course`,
          url: `https://cs330.stanford.edu/`,
          description: `Advanced course on multi-task learning, meta-learning, and transfer.`
        },
        {
          id: `goodfellow-dl-book`,
          title: `Deep Learning`,
          source: `MIT Press`,
          type: `book`,
          url: `https://www.deeplearningbook.org/`,
          description: `Comprehensive free textbook covering neural networks, optimization, and architectures.`
        },
        {
          id: `berkeley-cs189`,
          title: `Berkeley CS189/289A — Introduction to Machine Learning`,
          source: `Berkeley`,
          type: `course`,
          url: `https://people.eecs.berkeley.edu/~jrs/189/`,
          description: `Comprehensive ML course with strong mathematical foundations.`
        },
        {
          id: `stanford-cs230`,
          title: `Stanford CS230 — Deep Learning`,
          source: `Stanford CS230`,
          type: `course`,
          url: `http://cs230.stanford.edu/`,
          description: `Andrew Ng's deep learning course covering NN fundamentals and best practices.`
        }
      ]
    }
];
