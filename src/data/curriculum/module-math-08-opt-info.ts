import type { Topic } from '../../types';

export const moduleMath08Topics: Topic[] = [
{
      id: `math-convex`,
      title: `Convex Optimization`,
      description: `Convex sets, convex functions, and why convex problems are tractable.`,
      level: `advanced`,
      track: `math`,
      sections: [
        {
          id: `cvx-sets`,
          title: `Convex Sets`,
          content: `### Introduction

Set C **convex** if λx+(1−λ)y∈C for all x,y∈C, λ∈[0,1]. Line segment between any two points stays in set. Examples: halfspaces, balls, polyhedra {x:Ax≤b}.

### Convex Sets

**Intersection** of convex sets convex. Non-convex: donut, two blobs. Convex feasible region in optimization guarantees global min if objective convex.

Constraint xᵀx≤r² ball convex. ReLU network loss non-convex in weights.

### Key Ideas

- Line segment test for convexity
- Linear constraints → convex feasible
- Balls and halfspaces basic blocks
- NN loss generally non-convex
- Convex feasible + convex f → global min

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `λx + (1−λ)y ∈ C for x,y∈C, λ∈[0,1]`,
            `Halfspace: {x : aᵀx ≤ b} convex`,
            `Ball: {x : ||x|| ≤ r} convex`,
            `Intersection of convex sets convex`,
            `Polyhedron: Ax ≤ b convex`
          ],
          diagram: `convex set:
   x ●─────────● y
        all chord inside
   non-convex: hole or indent`,
          keyPoints: [
            `Line segment test for convexity`,
            `Linear constraints → convex feasible`,
            `Balls and halfspaces basic blocks`,
            `NN loss generally non-convex`,
            `Convex feasible + convex f → global min`
          ],
          example: `import numpy as np
# check midpoint in [0,1] interval
x,y=0.2,0.8; lam=0.4
m=lam*x+(1-lam)*y
print(0<=m<=1)`,
          output: `midpoint in set`,
          commonMistakes: [
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`
          ]
        },
        {
          id: `cvx-func`,
          title: `Convex Functions`,
          content: `### Introduction

f convex if epigraph above graph convex: f(λx+(1−λ)y)≤λf(x)+(1−λ)f(y). **First-order**: f(y)≥f(x)+∇f(x)ᵀ(y−x)—tangent below graph. **Second-order**: H⪰0 PSD.

### Convex Functions

Examples: x², e^x, −log x (x>0), ||x||₂. Sums and non-negative combos preserve convexity. **Strongly convex** μ>0: H⪰μI unique min faster convergence.

Cross-entropy convex in logits; MSE convex in linear params.

### Key Ideas

- Tangent lies below for convex
- Hessian PSD test smooth case
- Strong convexity speeds GD
- Many losses convex in params
- Composition rules limited

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `f(λx+(1−λ)y) ≤ λf(x)+(1−λ)f(y)`,
            `1st order: tangent global underestimator`,
            `2nd order: H ⪰ 0`,
            `Strongly convex: H ⪰ μI`,
            `Composition rules preserve convexity`
          ],
          diagram: `convex f:
   chord above graph
        ╱ f
   ──── chord below endpoints`,
          keyPoints: [
            `Tangent lies below for convex`,
            `Hessian PSD test smooth case`,
            `Strong convexity speeds GD`,
            `Many losses convex in params`,
            `Composition rules limited`
          ],
          example: `import numpy as np
f=lambda x: x**2
x,y=-1.,2.; lam=0.3
print(f(lam*x+(1-lam)*y) <= lam*f(x)+(1-lam)*f(y))`,
          output: `True`,
          commonMistakes: [
            `Applying log to zero or negative values without a shift`,
            `Using polynomial degree too high without regularization`,
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`
          ]
        },
        {
          id: `cvx-problems`,
          title: `Convex Problem Forms`,
          content: `### Introduction

**LP** linear objective+constraints. **QP** quadratic objective linear constraints—SVM dual. **SOCP** second-order cone.

### Convex Problem Forms

**SDP** matrix constraints. cvxpy models convex problems. Local min = global for convex f on convex C. **KKT conditions** necessary sufficient for convex.

Non-convex: multiple stationary points. Deep learning non-convex but SGD finds good minima empirically.

### Key Ideas

- Convex problems globally tractable
- QP includes SVM
- KKT characterizes optimum
- DL non-convex exception
- cvxpy for prototyping

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `min f(x) s.t. x ∈ C convex`,
            `LP: linear f and constraints`,
            `QP: ½xᵀPx+qᵀx`,
            `Local = global if f convex on C`,
            `KKT: ∇f + ∑λᵢ∇gᵢ = 0`
          ],
          diagram: `convex optimization landscape:
   single bowl → one global min
   non-convex: many valleys`,
          keyPoints: [
            `Convex problems globally tractable`,
            `QP includes SVM`,
            `KKT characterizes optimum`,
            `DL non-convex exception`,
            `cvxpy for prototyping`
          ],
          example: `import numpy as np
# min (x-2)² s.t. x>=0 → x=2
x=max(0,2.); print(x)`,
          output: `x=2`,
          commonMistakes: [
            `Not stratifying splits for classification tasks`,
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Applying log to zero or negative values without a shift`
          ]
        },
        {
          id: `cvx-ml`,
          title: `Convexity in ML Losses`,
          content: `### Introduction

Logistic loss convex in w. Lasso problem convex but not strictly. Neural net hidden layers break convexity.

### Convexity in ML Losses

**Convex relaxations** for hard problems. **Surrogate losses** convex upper bounds. Understanding which part convex helps debug optimization.

Linear regression loss bowl-shaped in β. Regularization preserves convexity for convex base loss.

### Key Ideas

- Linear models convex in weights
- Deep nets non-convex
- Convex surrogate losses common
- Regularization keeps convexity
- Local min may suffice in DL

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `Logistic NLL convex in w`,
            `Hinge loss convex`,
            `MSE convex in linear β`,
            `Hidden layers → non-convex`,
            `λ||w||² preserves convexity`
          ],
          diagram: `convex ML losses (linear models):
   MSE bowl in w
   logistic bowl in w
   + L2 still convex`,
          keyPoints: [
            `Linear models convex in weights`,
            `Deep nets non-convex`,
            `Convex surrogate losses common`,
            `Regularization keeps convexity`,
            `Local min may suffice in DL`
          ],
          example: `import numpy as np
w=np.linspace(-2,2,50)
loss=(w-1)**2
print("unique min w:", w[np.argmin(loss)])`,
          output: `w=1`,
          commonMistakes: [
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Serving a model trained on preprocessed data without the same pipeline in production`,
            `Applying log to zero or negative values without a shift`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-cvx-1`,
          question: `Verify convexity numerically for f(x)=x² on random x,y,λ.`,
          solution: `import numpy as np
f=lambda x:x**2
x,y,lam=1.,3.,0.4
print(f(lam*x+(1-lam)*y) <= lam*f(x)+(1-lam)*f(y))`,
          difficulty: `easy`
        },
        {
          id: `ex-cvx-2`,
          question: `Minimize (x-3)² for x>=1 analytically then verify.`,
          solution: `import numpy as np
x=max(1,3.); print(x, (x-3)**2)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 35,
      module: `module-math-08`,
      references: [
        {
          id: `cs229-optimization`,
          title: `CS229 Lecture Notes — Optimization`,
          source: `Stanford CS229`,
          type: `course`,
          url: `https://cs229.stanford.edu/notes2022fall/main_notes.pdf`,
          description: `Gradient descent, Newton's method, and convergence analysis for ML.`
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
          id: `goodfellow-dl-book`,
          title: `Deep Learning`,
          source: `MIT Press`,
          type: `book`,
          url: `https://www.deeplearningbook.org/`,
          description: `Comprehensive free textbook covering neural networks, optimization, and architectures.`
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
      id: `math-gradient-descent-math`,
      title: `Gradient Descent Theory`,
      description: `Convergence rates, step size, momentum, and adaptive methods.`,
      level: `advanced`,
      track: `math`,
      sections: [
        {
          id: `gd-conv`,
          title: `Convergence Conditions`,
          content: `### Introduction

For L-smooth convex f: GD with η≤1/L converges to global min rate O(1/t). **Strongly convex** μ: linear rate O((1−ημ)^t). **PL condition** weaker than strong convexity still linear.

### Convergence Conditions

Non-convex: convergence to stationary point ||∇f||→0. Stochastic GD adds noise but averages out. Lower bounds: first-order methods limited for high-D black-box.

### Key Ideas

- Step size bounded by 1/L
- Strong convexity linear rate
- SGD converges with decaying η
- Non-convex no global guarantee
- Stationary point necessary for min

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `L-smooth: ||∇f(x)−∇f(y)|| ≤ L||x−y||`,
            `η ≤ 1/L for convex convergence`,
            `Strongly convex: (1−ημ)^t rate`,
            `SGD: E[||∇L||] → 0`,
            `Non-convex: find stationary points`
          ],
          diagram: `η too big:
   bounce across valley
   diverge ↑
   η ok: steady descent ↘`,
          keyPoints: [
            `Step size bounded by 1/L`,
            `Strong convexity linear rate`,
            `SGD converges with decaying η`,
            `Non-convex no global guarantee`,
            `Stationary point necessary for min`
          ],
          example: `import numpy as np
theta=5.; eta=0.1; L=2
for _ in range(50): theta -= eta*L*theta
print(theta)`,
          output: `→ 0`,
          commonMistakes: [
            `Using polynomial degree too high without regularization`,
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Not normalizing vectors when using dot product as cosine similarity`
          ]
        },
        {
          id: `gd-momentum`,
          title: `Momentum & Nesterov`,
          content: `### Introduction

**Momentum** v_t=βv_{t−1}+∇L; θ_t=θ_{t−1}−ηv_t accumulates velocity dampens oscillation in ravines. β≈0.9 typical. **Nesterov** lookahead gradient evaluates ahead. Heavy ball method physics analogy.

### Momentum & Nesterov

Accelerated methods O(1/t²) for convex vs O(1/t) vanilla GD. Adam combines momentum with adaptive scaling. Momentum helps consistent gradient directions.

### Key Ideas

- Momentum smooths oscillations
- Nesterov often faster
- β too high overshoots
- Adam default in DL
- Physics intuition helps tuning

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `v_t = β v_{t−1} + ∇L`,
            `θ_t = θ_{t−1} − η v_t`,
            `β ≈ 0.9 common`,
            `Nesterov: grad at lookahead`,
            `Accelerated O(1/t²) convex`
          ],
          diagram: `ravine without momentum:
   zigzag ╱╲╱╲
   momentum: smooth along valley ↓`,
          keyPoints: [
            `Momentum smooths oscillations`,
            `Nesterov often faster`,
            `β too high overshoots`,
            `Adam default in DL`,
            `Physics intuition helps tuning`
          ],
          example: `import numpy as np
theta=np.array([5.,5.]); v=np.zeros(2); beta=0.9; eta=0.01
for _ in range(100):
    g=2*theta
    v=beta*v+g
    theta-=eta*v
print(np.round(theta,3))`,
          output: `→ near 0`,
          commonMistakes: [
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `gd-adaptive`,
          title: `Adaptive Methods`,
          content: `### Introduction

**AdaGrad** accumulates squared grads—small steps for frequent features. **RMSprop** exponential moving average fixes AdaGrad decay. **Adam** m_t,v_t moments; bias correction; default lr 1e-3.

### Adaptive Methods

**AdamW** decoupled weight decay. Per-parameter η adapts to geometry. Not always better than SGD+momentum on some vision tasks.

Warmup stabilizes early Adam training in transformers.

### Key Ideas

- Adaptive per parameter
- Adam popular default
- AdamW fixes weight decay
- SGD sometimes generalizes better
- Warmup prevents early instability

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `AdaGrad: η/√(∑g²)`,
            `Adam: m,v EMA of g,g²`,
            `Bias corr: m/(1−β^t)`,
            `AdamW: weight decay separate`,
            `Warmup for transformers`
          ],
          diagram: `per-param learning rate:
   large |g| history → small step
   small |g| history → larger step
   Adam automates scaling`,
          keyPoints: [
            `Adaptive per parameter`,
            `Adam popular default`,
            `AdamW fixes weight decay`,
            `SGD sometimes generalizes better`,
            `Warmup prevents early instability`
          ],
          example: `import numpy as np
# simplified Adam one step
g=np.array([1.,0.1]); m=g; v=g**2
m_hat=m; v_hat=v
print(m_hat/(np.sqrt(v_hat)+1e-8))`,
          output: `adaptive step`,
          commonMistakes: [
            `Wrong sequence length after tokenization — truncating critical context`,
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `gd-sgd`,
          title: `SGD & Mini-batch`,
          content: `### Introduction

Full batch GD expensive; **SGD** one sample noisy gradient cheap. Mini-batch balances variance and compute. Unbiased E[∇L_batch]=∇L if uniform sample.

### SGD & Mini-batch

Variance O(1/b) decreases with batch b. **Learning rate schedule** decay η_t. Large batch needs larger η linear scaling rule heuristic.

Generalization: small batch noise may help escape sharp minima. Distributed SGD averages gradients across workers.

### Key Ideas

- Mini-batch default in DL
- Larger batch more stable grad
- Linear scaling rule heuristic
- Decay η for convergence
- Distributed all-reduce grads

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `∇L_batch unbiased if random sample`,
            `Var ∝ 1/b batch size`,
            `Linear scaling: η ∝ b heuristic`,
            `Schedule: η_t = η₀/√t`,
            `Distributed: average worker grads`
          ],
          diagram: `batch size tradeoff:
   b=1   noisy fast iter
   b=n   smooth expensive
   sweet spot GPU memory`,
          keyPoints: [
            `Mini-batch default in DL`,
            `Larger batch more stable grad`,
            `Linear scaling rule heuristic`,
            `Decay η for convergence`,
            `Distributed all-reduce grads`
          ],
          example: `import numpy as np
batch=np.array([1.,2.,3.])
grads=batch**2
print("batch grad mean:", grads.mean(), "full would use all data")`,
          output: `batch estimate`,
          commonMistakes: [
            `Using polynomial degree too high without regularization`,
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-gd-1`,
          question: `10 steps GD on f(x)=x², x=4, η=0.1.`,
          solution: `import numpy as np
x=4.
for _ in range(10): x-=0.1*2*x
print(x)`,
          difficulty: `easy`
        },
        {
          id: `ex-gd-2`,
          question: `Compare batch 1 vs batch 100 gradient variance on random linear loss.`,
          solution: `import numpy as np
w=np.array([1.,2.]); X=np.random.randn(1000,2); y=X@w
for b in [1,100]:
  idx=np.random.choice(1000,b)
  g=2*X[idx].T@(X[idx]@w-y[idx])/b
  print("b",b,"g norm", np.linalg.norm(g))`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 35,
      module: `module-math-08`,
      references: [
        {
          id: `cs229-optimization`,
          title: `CS229 Lecture Notes — Optimization`,
          source: `Stanford CS229`,
          type: `course`,
          url: `https://cs229.stanford.edu/notes2022fall/main_notes.pdf`,
          description: `Gradient descent, Newton's method, and convergence analysis for ML.`
        },
        {
          id: `adam-paper`,
          title: `Adam: A Method for Stochastic Optimization`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1412.6980`,
          description: `Adaptive learning rate optimizer used as default in most deep learning training.`
        },
        {
          id: `3blue1brown-calculus`,
          title: `Essence of Calculus`,
          source: `3Blue1Brown`,
          type: `video`,
          url: `https://www.3blue1brown.com/topics/calculus`,
          description: `Geometric intuition for derivatives, integrals, and the chain rule.`
        },
        {
          id: `goodfellow-dl-book`,
          title: `Deep Learning`,
          source: `MIT Press`,
          type: `book`,
          url: `https://www.deeplearningbook.org/`,
          description: `Comprehensive free textbook covering neural networks, optimization, and architectures.`
        }
      ]
    },
{
      id: `math-lagrange`,
      title: `Lagrange Multipliers`,
      description: `Equality constraints, KKT conditions, and constrained optimization.`,
      level: `advanced`,
      track: `math`,
      sections: [
        {
          id: `lag-eq`,
          title: `Equality Constraints`,
          content: `### Introduction

Minimize f(x) s.t. g(x)=0. **Lagrange function** L(x,λ)=f(x)+λg(x). Optimality: ∇_x L=0 and g(x)=0. λ is shadow price—sensitivity of optimal value to constraint.

### Equality Constraints

Geometric: ∇f parallel ∇g at optimum on constraint curve. Two variables one constraint: solve 3 equations. **Projected gradient** alternative iterative method.

### Key Ideas

- Lagrange multipliers for equality
- Parallel gradients at optimum
- λ measures constraint cost
- Three eqs two vars + λ
- Projection for iterative solve

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `L(x,λ) = f(x) + λ g(x)`,
            `∇f(x*) + λ∇g(x*) = 0`,
            `g(x*) = 0`,
            `λ = shadow price`,
            `∇f ∥ ∇g on constraint`
          ],
          diagram: `contour f touches constraint g=0:
      f=3 ──╮
      f=2 ──┼── tangent on g=0
      f=1    constraint curve`,
          keyPoints: [
            `Lagrange multipliers for equality`,
            `Parallel gradients at optimum`,
            `λ measures constraint cost`,
            `Three eqs two vars + λ`,
            `Projection for iterative solve`
          ],
          example: `import numpy as np
# min x²+y² s.t x+y=1 → (0.5,0.5)
print(0.5, 0.5)`,
          output: `optimum`,
          commonMistakes: [
            `Using correlation when variables are non-linear — relationship may be missed`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`
          ]
        },
        {
          id: `lag-ineq`,
          title: `KKT Conditions`,
          content: `### Introduction

Inequality g(x)≤0: KKT adds **complementary slackness** λ≥0, λg(x)=0. If constraint inactive g<0 then λ=0. **Karush-Kuhn-Tucker** necessary; sufficient for convex.

### KKT Conditions

General form: min f s.t g_i≤0, h_j=0. Stationarity ∇f+∑λ_i∇g_i+∑ν_j∇h_j=0. Dual problem provides lower bounds.

SVM derivation uses KKT on margin constraints.

### Key Ideas

- Inequalities add λ≥0
- Complementary slackness key
- SVM from KKT on margins
- Dual for bounds
- Convex KKT sufficient

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `L = f + ∑λ_i g_i + ∑ν_j h_j`,
            `λ_i ≥ 0`,
            `λ_i g_i(x) = 0 (complementary slackness)`,
            `Stationarity: ∇L = 0`,
            `Convex: KKT sufficient`
          ],
          diagram: `active constraint g=0 at boundary
   inactive interior: λ=0
   boundary optimum: λ>0`,
          keyPoints: [
            `Inequalities add λ≥0`,
            `Complementary slackness key`,
            `SVM from KKT on margins`,
            `Dual for bounds`,
            `Convex KKT sufficient`
          ],
          example: `import numpy as np
print("SVM support vectors have α>0 from KKT")`,
          output: `KKT concept`,
          commonMistakes: [
            `Not stratifying splits for classification tasks`,
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Applying log to zero or negative values without a shift`
          ]
        },
        {
          id: `lag-dual`,
          title: `Duality`,
          content: `### Introduction

**Dual function** q(λ)=inf_x L(x,λ). Dual problem max q(λ) s.t λ≥0. Weak duality: dual≤primal.

### Duality

Strong duality convex: equal optimal values. **Lagrange dual** of SVM leads to kernel form. Dual often easier or reveals structure.

Slater condition sufficient strong duality convex with strict feasibility. Duality connects to game between primal and dual variables.

### Key Ideas

- Dual provides lower bound
- Strong duality nice convexity
- SVM kernel trick from dual
- Slater condition common
- Game-theoretic view

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `Dual: max_λ inf_x L(x,λ)`,
            `Weak: d* ≤ p*`,
            `Strong convex: d* = p*`,
            `SVM dual: α kernel form`,
            `Slater: strict feasibility → strong`
          ],
          diagram: `primal ↔ dual
   hard in x     maybe easy in λ
   easy in x     hard in λ
   pick easier side`,
          keyPoints: [
            `Dual provides lower bound`,
            `Strong duality nice convexity`,
            `SVM kernel trick from dual`,
            `Slater condition common`,
            `Game-theoretic view`
          ],
          example: `import numpy as np
print("dual SVM: max sum α - ½αᵀQα")`,
          output: `dual form`,
          commonMistakes: [
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Not stratifying splits for classification tasks`,
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`
          ]
        },
        {
          id: `lag-ml`,
          title: `Constraints in ML`,
          content: `### Introduction

**Fairness constraints** demographic parity bounds. **Adversarial** training min-max. **Trust region** TRPO KL constraint.

### Constraints in ML

**Projection** onto simplex for probability outputs. **Weight clipping** constraint. Penalty method: add ρg(x)² instead of hard constraint.

Augmented Lagrangian combines both. Constrained DL growing area for safe deployment.

### Key Ideas

- Penalties soften constraints
- Projection maintains feasibility
- TRPO uses KL ball
- Fairness as linear constraints
- Min-max for robust/adversarial

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `Penalty: f + ρ||g(x)||²`,
            `Projection: simplex, ball`,
            `TRPO: KL trust region`,
            `Fairness: P(ŷ|A=a)=P(ŷ|A=b)`,
            `Adversarial: min_θ max_φ loss`
          ],
          diagram: `fair ML constraint:
   optimize accuracy
   s.t. TPR equal across groups`,
          keyPoints: [
            `Penalties soften constraints`,
            `Projection maintains feasibility`,
            `TRPO uses KL ball`,
            `Fairness as linear constraints`,
            `Min-max for robust/adversarial`
          ],
          example: `import numpy as np
v=np.array([0.2,0.5,0.4]); v=np.maximum(v,0); v/=v.sum()
print("proj simplex:", v)`,
          output: `feasible`,
          commonMistakes: [
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Serving a model trained on preprocessed data without the same pipeline in production`,
            `Applying log to zero or negative values without a shift`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-lag-1`,
          question: `Min x²+y² s.t x+y=1: solve x=y=0.5.`,
          solution: `print(0.5, 0.5)`,
          difficulty: `easy`
        },
        {
          id: `ex-lag-2`,
          question: `Project [0.5,0.5,0.5] onto simplex.`,
          solution: `import numpy as np
v=np.ones(3)/3; print(v, v.sum())`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 35,
      module: `module-math-08`,
      references: [
        {
          id: `cs229-optimization`,
          title: `CS229 Lecture Notes — Optimization`,
          source: `Stanford CS229`,
          type: `course`,
          url: `https://cs229.stanford.edu/notes2022fall/main_notes.pdf`,
          description: `Gradient descent, Newton's method, and convergence analysis for ML.`
        },
        {
          id: `khan-multivariable-calc`,
          title: `Multivariable Calculus — Khan Academy`,
          source: `Khan Academy`,
          type: `course`,
          url: `https://www.khanacademy.org/math/multivariable-calculus`,
          description: `Partial derivatives and gradients essential for neural network training.`
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
      id: `math-entropy-math`,
      title: `Entropy & Information`,
      description: `Shannon entropy, cross-entropy, and mutual information.`,
      level: `advanced`,
      track: `math`,
      sections: [
        {
          id: `ent-def`,
          title: `Shannon Entropy`,
          content: `### Introduction

H(X)=−∑ p(x) log p(x) (discrete) uncertainty in bits if log₂, nats if ln. Maximum log K for uniform K outcomes. H≥0 with equality iff certain.

### Shannon Entropy

**Conditional** H(X|Y)=H(X,Y)−H(Y). Independent: H(X,Y)=H(X)+H(Y). Entropy rate of stochastic process.

High entropy = unpredictable. Low entropy = compressible. Decision trees split to reduce entropy (ID3).

### Key Ideas

- Entropy measures uncertainty
- Uniform maximizes entropy
- Conditional reduces uncertainty
- Independent joint adds
- Used in tree splits

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `H(X) = −∑ p(x) log p(x)`,
            `0 ≤ H(X) ≤ log |X|`,
            `Uniform → max entropy`,
            `H(X,Y) = H(X|Y) + H(Y)`,
            `Indep: H(X,Y) = H(X)+H(Y)`
          ],
          diagram: `fair coin: H=1 bit
   certain: H=0
   p=0.9 biased: H low
   ·─────────· peak at p=0.5`,
          keyPoints: [
            `Entropy measures uncertainty`,
            `Uniform maximizes entropy`,
            `Conditional reduces uncertainty`,
            `Independent joint adds`,
            `Used in tree splits`
          ],
          example: `import numpy as np
p=np.array([0.5,0.5])
print("H bits:", -np.sum(p*np.log2(p)))`,
          output: `H=1 bit`,
          commonMistakes: [
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Not stratifying splits for classification tasks`,
            `Applying log to zero or negative values without a shift`
          ]
        },
        {
          id: `ent-ce`,
          title: `Cross-Entropy & KL`,
          content: `### Introduction

**Cross-entropy** H(p,q)=−∑p log q≥H(p) with equality if p=q. **KL divergence** D_KL(p||q)=∑p log(p/q)=H(p,q)−H(p)≥0. Used as loss when p true, q model.

### Cross-Entropy & KL

**Mutual information** I(X;Y)=H(X)−H(X|Y)=D_KL(P_XY||P_X P_Y). InfoNCE contrastive learning maximizes MI lower bound. KL not metric but fundamental in variational inference.

### Key Ideas

- CE common classification loss
- KL asymmetric divergence
- MI measures dependence
- VAE uses KL to prior
- InfoNCE for representation

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `H(p,q) = −∑ p log q`,
            `D_KL(p||q) = ∑ p log(p/q)`,
            `D_KL ≥ 0, =0 iff p=q`,
            `I(X;Y) = H(X) − H(X|Y)`,
            `CE loss = H(one_hot, softmax)`
          ],
          diagram: `p true    q model
   CE = −∑ p log q
   KL = extra bits using q vs p`,
          keyPoints: [
            `CE common classification loss`,
            `KL asymmetric divergence`,
            `MI measures dependence`,
            `VAE uses KL to prior`,
            `InfoNCE for representation`
          ],
          example: `import numpy as np
p=np.array([1.,0.,0.]); q=np.array([0.7,0.2,0.1])
ce=-np.sum(p*np.log(q+1e-9))
print("CE:", ce)`,
          output: `CE loss`,
          commonMistakes: [
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`,
            `Using correlation when variables are non-linear — relationship may be missed`
          ]
        },
        {
          id: `ent-mi`,
          title: `Mutual Information`,
          content: `### Introduction

I(X;Y)≥0 zero iff independent. Captures nonlinear dependence unlike correlation. Difficult to estimate high-D—MINE neural estimator.

### Mutual Information

**Information bottleneck** tradeoff compress X while predict Y. Feature selection via MI with target. Data processing inequality: processing cannot increase MI.

Used in contrastive self-supervised learning InfoNCE bound.

### Key Ideas

- MI detects nonlinear deps
- Hard to estimate high-D
- InfoNCE in SimCLR
- IB regularization
- Feature selection criterion

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `I(X;Y) = H(X) − H(X|Y)`,
            `I(X;Y) = 0 ⇔ indep`,
            `I symmetric in X,Y`,
            `Data processing: I(X;Z) ≤ I(X;Y) if Markov`,
            `InfoNCE lower bound on MI`
          ],
          diagram: `MI high when knowing Y
   reduces uncertainty about X:
   X ←──strong link──→ Y`,
          keyPoints: [
            `MI detects nonlinear deps`,
            `Hard to estimate high-D`,
            `InfoNCE in SimCLR`,
            `IB regularization`,
            `Feature selection criterion`
          ],
          example: `import numpy as np
# discrete MI example
joint=np.array([[0.2,0.1],[0.1,0.6]])
px=joint.sum(1); py=joint.sum(0)
mi=0
for i in range(2):
  for j in range(2):
    if joint[i,j]>0: mi+=joint[i,j]*np.log(joint[i,j]/(px[i]*py[j]))
print("MI:", mi)`,
          output: `MI nats`,
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Using polynomial degree too high without regularization`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `ent-ml`,
          title: `Information in ML`,
          content: `### Introduction

Classification CE minimizes H(true, pred). Label smoothing softens one-hot targets increases H. **Regularization** as limiting information in weights.

### Information in ML

**Minimum description length** principle. Decision tree information gain = reduction in H. Softmax temperature scales entropy of predictions.

Calibration affects cross-entropy at deployment. Understanding bits/nats clarifies loss magnitude interpretation.

### Key Ideas

- CE = expected surprise
- Label smoothing prevents overconfidence
- Info gain for trees
- Temperature in distillation
- MDL balances fit and complexity

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `Minimize H(y, ŷ) for classification`,
            `Label smoothing: soft targets`,
            `Info gain = H(parent) − H(children)`,
            `Temperature T scales softmax entropy`,
            `MDL: model + data encoding`
          ],
          diagram: `decision tree split:
   H=0.9 before
   H=0.4 after good split
   gain = 0.5`,
          keyPoints: [
            `CE = expected surprise`,
            `Label smoothing prevents overconfidence`,
            `Info gain for trees`,
            `Temperature in distillation`,
            `MDL balances fit and complexity`
          ],
          example: `import numpy as np
parent=0.9; child=0.4
print("info gain:", parent-child)`,
          output: `gain 0.5`,
          commonMistakes: [
            `Serving a model trained on preprocessed data without the same pipeline in production`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-ent-1`,
          question: `Entropy of fair 4-sided die in bits.`,
          solution: `import numpy as np
print(-np.sum([0.25]*4*np.log2([0.25]*4)))`,
          difficulty: `easy`
        },
        {
          id: `ex-ent-2`,
          question: `KL between [0.5,0.5] and [0.9,0.1].`,
          solution: `import numpy as np
p=np.array([0.5,0.5]); q=np.array([0.9,0.1])
print(np.sum(p*np.log(p/q)))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 35,
      module: `module-math-08`,
      references: [
        {
          id: `cover-thomas-info-theory`,
          title: `Elements of Information Theory`,
          source: `Wiley`,
          type: `book`,
          url: `https://www.elementsofinformationtheory.com/`,
          description: `Definitive reference for entropy, mutual information, and coding theory.`
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
          id: `goodfellow-dl-book`,
          title: `Deep Learning`,
          source: `MIT Press`,
          type: `book`,
          url: `https://www.deeplearningbook.org/`,
          description: `Comprehensive free textbook covering neural networks, optimization, and architectures.`
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
      id: `math-kl-mle`,
      title: `KL Divergence & MLE`,
      description: `Maximum likelihood estimation and its connection to minimizing KL.`,
      level: `advanced`,
      track: `math`,
      sections: [
        {
          id: `mle-def`,
          title: `Maximum Likelihood`,
          content: `### Introduction

Given i.i.d. samples, **MLE** θ̂=argmax_θ ∏ p(x_i|θ)=argmax ∑ log p(x_i|θ). Maximizes probability of observed data. Invariance: g(θ) MLE is g(θ̂).

### Maximum Likelihood

Asymptotically unbiased efficient under regularity. **Log-likelihood** ℓ(θ) concave for many exponential family models. Negative log-likelihood as loss to minimize.

Gaussian μ̂=x̄, σ̂ sample std (biased MLE divides n not n−1).

### Key Ideas

- MLE maximizes data probability
- Log converts product to sum
- NLL is standard loss
- Asymptotic efficiency
- Sample formulas for simple models

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `θ̂_MLE = argmax ∑ log p(x_i|θ)`,
            `Equiv: min −∑ log p(x_i|θ)`,
            `Bernoulli: p̂ = k/n`,
            `Gaussian: μ̂ = x̄`,
            `Invariance: g(θ̂) for g(θ)`
          ],
          diagram: `likelihood surface:
   peak at θ̂
   data most probable here`,
          keyPoints: [
            `MLE maximizes data probability`,
            `Log converts product to sum`,
            `NLL is standard loss`,
            `Asymptotic efficiency`,
            `Sample formulas for simple models`
          ],
          example: `import numpy as np
x=np.array([0,1,1,1,0])
print("Bernoulli MLE p:", x.mean())`,
          output: `p=0.6`,
          commonMistakes: [
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Serving a model trained on preprocessed data without the same pipeline in production`,
            `Applying log to zero or negative values without a shift`
          ]
        },
        {
          id: `kl-mle`,
          title: `MLE Minimizes KL`,
          content: `### Introduction

Minimizing E_x[−log q_θ(x)] over θ equivalent minimizing D_KL(p_data||q_θ) since H(p) constant w.r.t. θ. **Empirical risk** replaces expectation with sample mean—MLE on empirical distribution.

### MLE Minimizes KL

Model q close to p in KL sense. Mode-seeking KL asymmetric: q misses low p regions penalized less than covering extra.

**Reverse KL** used in some VI variants mode covering vs seeking tradeoff.

### Key Ideas

- NLL ↔ KL to data distribution
- Empirical samples define p
- Asymmetric KL behavior
- Forward KL in standard MLE
- Reverse KL in some VI

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `min_θ E_p[−log q_θ] ⇔ min D_KL(p||q_θ)`,
            `Empirical p = uniform on samples`,
            `MLE on samples = KL minimizer`,
            `D_KL(p||q) mode-seeking`,
            `D_KL(q||p) mode-covering`
          ],
          diagram: `p_data vs q_model
   KL(p||q): q must cover p modes
   heavy penalty missing mass of p`,
          keyPoints: [
            `NLL ↔ KL to data distribution`,
            `Empirical samples define p`,
            `Asymmetric KL behavior`,
            `Forward KL in standard MLE`,
            `Reverse KL in some VI`
          ],
          example: `import numpy as np
# discrete KL p empirical vs q model
p=np.array([0.5,0.3,0.2]); q=np.array([0.4,0.35,0.25])
print("KL:", np.sum(p*np.log(p/q)))`,
          output: `KL value`,
          commonMistakes: [
            `Using correlation when variables are non-linear — relationship may be missed`,
            `Forgetting to check matrix dimensions before multiplying`,
            `Applying log to zero or negative values without a shift`,
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`
          ]
        },
        {
          id: `mle-prop`,
          title: `Properties of MLE`,
          content: `### Introduction

**Consistency** θ̂→θ true as n→∞. **Asymptotic normality** √n(θ̂−θ)→N(0,I(θ)⁻¹). **Fisher information** I(θ)=E[(∂log p/∂θ)²].

### Properties of MLE

Cramér-Rao lower bound on variance. MLE achieves bound asymptotically efficient. Finite sample bias possible.

Regularization = MAP with prior, not pure MLE. Score function ∂log p/∂θ zero at MLE.

### Key Ideas

- Asymptotic normality for CI
- Fisher info measures information
- Efficient among unbiased estimators
- Regularity conditions needed
- MAP adds prior bias

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `√n(θ̂−θ) → N(0, I(θ)⁻¹)`,
            `I(θ) = E[(∂log p/∂θ)²]`,
            `Cramér-Rao: Var ≥ 1/(nI(θ))`,
            `Consistent under regularity`,
            `Score = 0 at MLE`
          ],
          diagram: `Fisher info I(θ):
   curvature of log-likelihood
   sharp peak → low variance θ̂`,
          keyPoints: [
            `Asymptotic normality for CI`,
            `Fisher info measures information`,
            `Efficient among unbiased estimators`,
            `Regularity conditions needed`,
            `MAP adds prior bias`
          ],
          example: `import numpy as np
# Bernoulli Fisher info p(1-p)
p=0.6; print("I:", p*(1-p))`,
          output: `I=0.24`,
          commonMistakes: [
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`,
            `Using correlation when variables are non-linear — relationship may be missed`
          ]
        },
        {
          id: `mle-ml`,
          title: `MLE in Deep Learning`,
          content: `### Introduction

Categorical NLL = cross-entropy MLE for softmax. Gaussian output MSE ∝ Gaussian NLL. **Likelihood-based** generative models maximize log p(x|θ) directly.

### MLE in Deep Learning

**Contrastive divergence** approximates MLE for RBMs. **EM algorithm** MLE with latent variables E-step expectation M-step maximize. Diffusion models variational bound on log-likelihood.

GANs not pure MLE—adversarial game. Understanding MLE clarifies why minimizing CE is principled probabilistic modeling.

### Key Ideas

- CE has MLE interpretation
- Generative models maximize likelihood
- EM classical latent MLE
- VAE optimizes ELBO
- Choose objective matching goal

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `Softmax + CE = categorical MLE`,
            `MSE ∝ Gaussian NLL (fixed σ)`,
            `EM for latent variable models`,
            `Diffusion: variational lower bound`,
            `GAN ≠ MLE (implicit)`
          ],
          diagram: `deep generative:
   VAE: ELBO on log p(x)
   Diffusion: noise prediction ↔ bound
   GAN: adversarial not likelihood`,
          keyPoints: [
            `CE has MLE interpretation`,
            `Generative models maximize likelihood`,
            `EM classical latent MLE`,
            `VAE optimizes ELBO`,
            `Choose objective matching goal`
          ],
          example: `import numpy as np
y=np.array([1,0,0]); logits=np.array([2.,0.5,0.])
p=np.exp(logits)/np.exp(logits).sum()
nll=-np.log(p[0])
print("NLL:", nll)`,
          output: `NLL MLE loss`,
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Training generator and discriminator without balancing capacity — one dominates`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-mle-1`,
          question: `MLE mean of Gaussian data [1,2,3,4,5].`,
          solution: `import numpy as np
print(np.mean([1,2,3,4,5]))`,
          difficulty: `easy`
        },
        {
          id: `ex-mle-2`,
          question: `Compute KL(p||q) for p=[0.2,0.8], q=[0.5,0.5].`,
          solution: `import numpy as np
p=np.array([0.2,0.8]); q=np.array([0.5,0.5])
print(np.sum(p*np.log(p/q)))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 35,
      module: `module-math-08`,
      references: [
        {
          id: `cover-thomas-info-theory`,
          title: `Elements of Information Theory`,
          source: `Wiley`,
          type: `book`,
          url: `https://www.elementsofinformationtheory.com/`,
          description: `Definitive reference for entropy, mutual information, and coding theory.`
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
          id: `goodfellow-dl-book`,
          title: `Deep Learning`,
          source: `MIT Press`,
          type: `book`,
          url: `https://www.deeplearningbook.org/`,
          description: `Comprehensive free textbook covering neural networks, optimization, and architectures.`
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
    }
];
