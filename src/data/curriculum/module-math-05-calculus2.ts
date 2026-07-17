import type { Topic } from '../../types';

export const moduleMath05Topics: Topic[] = [
{
      id: `math-partial-deriv`,
      title: `Partial Derivatives`,
      description: `Differentiate multivariate functions holding other variables fixed.`,
      level: `advanced`,
      track: `math`,
      sections: [
        {
          id: `pd-def`,
          title: `Partial Derivative Definition`,
          content: `For f(x₁,...,x_n), **partial derivative** ∂f/∂x_i = lim_{h→0} [f(...,x_i+h,...)-f(...,x_i,...)]/h holding other x_j fixed. Notation ∂f/∂x_i or f_{x_i}. **Gradient** ∇f collects all partials as column vector. **Directional derivative** D_u f = ∇f·u for unit u. Slice f(x,y) at fixed y gives curve; ∂f/∂x is slope along x. In neural nets, ∂L/∂W_ij is partial of loss w.r.t. one weight. Autodiff computes all partials efficiently via reverse accumulation.

**Extended exploration — Partial Derivatives:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Partial Derivative Definition" connects to differentiate multivariate functions holding other variables fixed. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
          formulas: [
            `∂f/∂x_i = lim_{h→0} (f(...,x_i+h,...)−f(...,x_i,...))/h`,
            `∇f = (∂f/∂x₁, ..., ∂f/∂x_n)ᵀ`,
            `D_u f = ∇f · u`,
            `Mixed partial: ∂²f/∂x∂y`,
            `Clairaut: ∂²f/∂x∂y = ∂²f/∂y∂x (smooth)`
          ],
          diagram: `   f(x,y) surface:

   fix y=y₀ → curve in x
   ∂f/∂x = slope along x

        z
       ╱│ slice at y₀
      ╱ │
     ╱──┼── x
   │`,
          keyPoints: [
            `Hold other vars constant`,
            `Gradient stacks all partials`,
            `Directional deriv projects gradient`,
            `Mixed partials often commute`,
            `Each weight has partial in NN`
          ],
          example: `import numpy as np
def f(x,y): return x**2 + 3*x*y + y**2
x,y=1.,2.
h=1e-5
dfdx=(f(x+h,y)-f(x-h,y))/(2*h)
print("∂f/∂x:", dfdx, "exact:", 2*x+3*y)`,
          output: `∂f/∂x: 8`
        },
        {
          id: `pd-geom`,
          title: `Geometric Meaning`,
          content: `∇f points direction of steepest ascent. Magnitude ||∇f|| = max rate of increase. Level set {f=c}: ∇f perpendicular to level curve. Negative gradient −∇f steepest descent direction for minimization. Contour plot: gradient orthogonal to contours. For loss L(θ), gradient in parameter space points uphill. Moving −η∇L decreases loss first-order. In 2D, visualize gradient arrows on contour grid for intuition.

**Extended exploration — Partial Derivatives:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Geometric Meaning" connects to differentiate multivariate functions holding other variables fixed. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
          formulas: [
            `∇f ⟂ level sets`,
            `Steepest ascent direction`,
            `||∇f|| = max directional derivative`,
            `−∇f = steepest descent`,
            `Contour ⊥ gradient`
          ],
          diagram: `   contour map + gradient:

      ╭──╮  → ∇f points outward
     ╱    ╲    from center min
    │  ·   │   at min: ∇f=0
     ╲    ╱
      ╰──╯
   │
   │  · · ·
   └──────────`,
          keyPoints: [
            `Gradient perpendicular to contours`,
            `Descent opposite gradient`,
            `Zero gradient at critical points`,
            `Visualize on 2D slices`,
            `Magnitude = steepness`
          ],
          example: `import numpy as np
x,y=1.,1.
grad=np.array([2*x+3*y, 3*x+2*y])
print("grad:", grad, "norm:", np.linalg.norm(grad))`,
          output: `grad at (1,1)`
        },
        {
          id: `pd-higher`,
          title: `Higher-Order Partials`,
          content: `**Hessian** H_ij=∂²f/∂x_i∂x_j matrix of second partials. Symmetric if f C². Diagonal ∂²f/∂x_i² measures curvature along axis i. **Laplacian** ∇²f = ∑ ∂²f/∂x_i² sum of diagonal second partials—appears in diffusion and score matching. Determinant of Hessian in multivariate change of variables. Fisher information related to expected Hessian of log-likelihood. Small Hessian eigenvalues → flat directions.

**Extended exploration — Partial Derivatives:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Higher-Order Partials" connects to differentiate multivariate functions holding other variables fixed. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
          formulas: [
            `H_ij = ∂²f/∂x_i∂x_j`,
            `H symmetric for C² f`,
            `∇²f = tr(H) (Laplacian)`,
            `det(H) in multivariate transform`,
            `Flat dir: small H eigenvalue`
          ],
          diagram: `   H eigenvalues = curvatures:

   λ1 large: narrow valley
   λ2 small: flat along PC2

   condition number = λ_max/λ_min
   │
   │  · · ·
   └──────────
   (see formulas above)`,
          keyPoints: [
            `Hessian describes curvature`,
            `Laplacian sums second partials`,
            `Eigenvalues shape optimization`,
            `Ill-conditioning from H ratio`,
            `Fisher ≈ expected Hessian`
          ],
          example: `import numpy as np
# f=x²+2xy+3y², H=[[2,2],[2,6]]
H=np.array([[2.,2.],[2.,6.]])
print("eig:", np.linalg.eigvalsh(H))`,
          output: `curvature directions`
        },
        {
          id: `pd-ml`,
          title: `Partials in Backprop`,
          content: `Each layer computes local Jacobian ∂h/∂x. Chain rule multiplies Jacobians backward. ∂L/∂x = (∂L/∂h)(∂h/∂x). For linear h=Wx, ∂h/∂W=x, ∂h/∂x=Wᵀ. Element-wise activation: Jacobian diagonal with σ'(z). Batch sums gradients over samples. PyTorch autograd builds graph and .backward() applies chain rule automatically. Manual partials verify implementation for custom ops. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `∂L/∂x = (∂L/∂h)(∂h/∂x)`,
            `Linear: ∂(Wx)/∂W = x`,
            `Activation: diag(σ'(z))`,
            `Batch grad = sum over samples`,
            `autograd = automatic partials`
          ],
          diagram: `   layer chain:

   x → z=Wx → h=σ(z) → L

   backward multiplies
   local partials upstream
   │
   │  · · ·
   └──────────
   (see formulas above)`,
          keyPoints: [
            `Backprop = chain of partials`,
            `Linear layer grad w.r.t W outer product`,
            `ReLU mask in backward`,
            `Sum batch for weight update`,
            `Verify custom ops manually`
          ],
          example: `import numpy as np
W=np.array([[1.,2.],[3.,4.]]); x=np.array([1.,0.5])
h=W@x
print("dh/dx:", W.T, "shape matches x")`,
          output: `W.T for backprop to x`
        },
        {
          id: `math-partial-deriv-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Partial Derivatives sits in the **math** track of the Data Science Master curriculum. Differentiate multivariate functions holding other variables fixed.

Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directly to numpy operations and loss functions.

For math-partial-deriv, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Partial Derivatives
meta = {"topic_id": "math-partial-deriv", "track": "math", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-partial-deriv math advanced`,
          keyPoints: [
            `Core theory of Partial Derivatives ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `math-partial-deriv-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Partial Derivatives. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For math-partial-deriv, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for math-partial-deriv
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-partial-deriv", "Partial Derivatives")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-partial-deriv Partial`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with math ecosystem conventions`
          ]
        },
        {
          id: `math-partial-deriv-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Partial Derivatives often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on math-partial-deriv, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("math-partial-deriv", "Partial Derivatives")
debug_step("section_count", 4)`,
          output: `[math-partial-deriv] 'Partial Derivatives' (str)
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
          id: `math-partial-deriv-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Partial Derivatives shows up wherever math skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around math-partial-deriv align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Partial Derivatives
skills = ["math", "advanced", "math-partial-deriv"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, advanced, math-partial-deriv`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Partial Derivatives to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-pd-1`,
          question: `Compute ∂/∂x (x²y) at x=2,y=3.`,
          solution: `import numpy as np
print(2*2*3)`,
          difficulty: `easy`
        },
        {
          id: `ex-pd-2`,
          question: `Numerical gradient of f(x,y)=x²+y² at (3,4).`,
          solution: `import numpy as np
f=lambda x,y:x**2+y**2; h=1e-5
print((f(3+h,4)-f(3-h,4))/(2*h), (f(3,4+h)-f(3,4-h))/(2*h))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 50,
      module: `module-math-05`,
      references: [
        {
          id: `3blue1brown-linalg`,
          title: `Essence of Linear Algebra`,
          source: `3Blue1Brown`,
          type: `video`,
          url: `https://www.3blue1brown.com/topics/linear-algebra`,
          description: `Visual intuition for vectors, matrices, and transformations.`
        },
        {
          id: `mit-1806-linalg`,
          title: `MIT 18.06 Linear Algebra`,
          source: `MIT`,
          type: `course`,
          url: `https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/`,
          description: `Gilbert Strang's foundational linear algebra course used across ML.`
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
          id: `khan-probability`,
          title: `Statistics and Probability — Khan Academy`,
          source: `Khan Academy`,
          type: `course`,
          url: `https://www.khanacademy.org/math/statistics-probability`,
          description: `Probability distributions, Bayes theorem, and statistical inference.`
        },
        {
          id: `stanford-cs229`,
          title: `Stanford CS229 — Machine Learning`,
          source: `Stanford CS229`,
          type: `course`,
          url: `https://cs229.stanford.edu/`,
          description: `Andrew Ng's graduate ML course — the canonical theoretical foundation.`
        }
      ]
    },
{
      id: `math-gradient`,
      title: `Gradient & Directional Derivatives`,
      description: `Master the gradient vector and its role in optimization.`,
      level: `advanced`,
      track: `math`,
      sections: [
        {
          id: `grad-def`,
          title: `Gradient Vector`,
          content: `∇f(x) ∈ ℝⁿ with components ∂f/∂x_i. Points toward steepest increase; ||∇f|| equals max directional derivative rate. **Gradient field** assigns vector at each point. For loss L, ∇L tells update direction. **Subgradient** generalizes to non-smooth convex functions at kinks. Zero gradient necessary for interior extremum (not sufficient—saddle). Numerical gradient via finite differences checks autograd. Always verify shapes: ∇L same shape as θ.

**Extended exploration — Gradient & Directional Derivatives:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Gradient Vector" connects to master the gradient vector and its role in optimization. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
          formulas: [
            `∇f = (∂f/∂x₁, ..., ∂f/∂x_n)ᵀ`,
            `max_{||u||=1} D_u f = ||∇f||`,
            `∇L(θ*) = 0 at stationary θ*`,
            `Subgradient at non-smooth points`,
            `∇L same shape as θ`
          ],
          diagram: `   gradient field on hills:

        ↗ ∇f
       hill peak
      ↗ ↗
    valley: −∇f descent
   │
   │  · · ·
   └──────────
   (see formulas above)`,
          keyPoints: [
            `Gradient is a vector field`,
            `Points uphill on loss`,
            `Subgradients for ReLU kinks`,
            `Shape must match parameters`,
            `Numerical check validates autograd`
          ],
          example: `import numpy as np
theta=np.array([1.,2.,3.])
L=lambda t: np.sum(t**2)
grad=2*theta
print("∇L:", grad)`,
          output: `∇L: [2 4 6]`
        },
        {
          id: `grad-descent`,
          title: `Gradient Descent Geometry`,
          content: `Update θ_{t+1}=θ_t−η∇L(θ_t). η **learning rate** controls step. Too large: overshoot; too small: slow. **Lipschitz** gradient: ||∇f(x)−∇f(y)||≤L||x−y|| gives convergence rates. Convex: GD finds global min with right η. Non-convex: converges to stationary point often saddle escape heuristics help. **Momentum** accumulates velocity smoothing oscillations. **Adam** adaptive per-parameter steps. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `θ_{t+1} = θ_t − η ∇L(θ_t)`,
            `η too large → diverge`,
            `L-smooth: |∇f(x)−∇f(y)| ≤ L||x−y||`,
            `Convex + proper η → global min`,
            `Momentum: v_t = βv_{t-1}+∇L`
          ],
          diagram: `   GD on bowl:

   θ_t ·──→ −∇L direction
         ↘ toward minimum
          ╲
           ○ min
   │
   │  · · ·
   └──────────
   (see formulas above)`,
          keyPoints: [
            `Step opposite gradient`,
            `LR critical hyperparameter`,
            `Momentum helps ravines`,
            `Non-convex landscapes complex`,
            `Adaptive methods popular`
          ],
          example: `import numpy as np
theta=np.array([5.,5.])
eta=0.1
for _ in range(20): theta -= eta*(2*theta)
print("theta:", np.round(theta,4))`,
          output: `→ near 0`
        },
        {
          id: `grad-proj`,
          title: `Projection & Constraints`,
          content: `Projected GD: θ_{t+1}=Proj_C(θ_t−η∇L) enforces constraints C (e.g., weights ≥0). **Proximal** methods handle non-smooth regularizers. Simplex projection for probability vectors. Box constraints clip θ after step. Lagrange multipliers (later) handle equality constraints. Constrained optimization common in fairness constraints and resource limits. Projected methods maintain feasibility each step. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `Proj_C(x) = argmin_{y∈C} ||y−x||`,
            `Projected GD after each step`,
            `Simplex: ∑p_i=1, p_i≥0`,
            `Box: clip to [a,b]`,
            `Prox for L1: soft threshold`
          ],
          diagram: `   unconstrained step may leave C

   θ − η∇L  ·──→ outside
              ↓ project back
            θ_new ∈ C
   │
   │  · · ·
   └──────────
   (see formulas above)
   │`,
          keyPoints: [
            `Projection restores feasibility`,
            `Simplex for probability params`,
            `Prox handles L1 sparsity`,
            `Box clip simple but effective`,
            `Constraints in fair ML`
          ],
          example: `import numpy as np
v=np.array([0.3,0.5,0.4])
v=np.maximum(v,0); v/=v.sum()
print("simplex proj:", v)`,
          output: `sums to 1`
        },
        {
          id: `grad-numerical`,
          title: `Gradient Checking`,
          content: `**Relative error** |g_num−g_auto|/(|g_num|+|g_auto|+ε) should <1e-5 for double precision layers. Check one layer at a time to localize bugs. Symmetric central differences. Disable dropout/batchnorm during check. Expensive O(n) forward passes for n params—use small subset. Essential when implementing custom CUDA kernels or novel autograd functions. PyTorch torch.autograd.gradcheck utility automates.

**Extended exploration — Gradient & Directional Derivatives:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Gradient Checking" connects to master the gradient vector and its role in optimization. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
          formulas: [
            `rel_err = |g_n − g_a| / (|g_n|+|g_a|+ε)`,
            `Central diff preferred`,
            `Check small param subsets`,
            `Disable stochastic layers`,
            `gradcheck in PyTorch`
          ],
          diagram: `   grad check workflow:

   1. implement forward
   2. autograd backward
   3. finite diff compare
   4. fix mismatch layer
   │
   │  · · ·
   └──────────
   (see formulas above)`,
          keyPoints: [
            `Always gradcheck custom layers`,
            `Relative error threshold ~1e-5`,
            `Central diff more accurate`,
            `Stochastic layers off during check`,
            `Localize by checking per layer`
          ],
          example: `import numpy as np
def f(t): return t[0]**2 + 3*t[1]
t=np.array([1.,2.]); h=1e-5
gn=np.array([(f(t+[h,0])-f(t-[h,0]))/(2*h),(f(t+[0,h])-f(t-[0,h]))/(2*h)])
ga=np.array([2*t[0],3.])
print("rel err:", np.abs(gn-ga)/(np.abs(gn)+np.abs(ga)))`,
          output: `small error`
        },
        {
          id: `math-gradient-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Gradient & Directional Derivatives sits in the **math** track of the Data Science Master curriculum. Master the gradient vector and its role in optimization.

Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directly to numpy operations and loss functions.

For math-gradient, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Gradient & Directional Derivatives
meta = {"topic_id": "math-gradient", "track": "math", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-gradient math advanced`,
          keyPoints: [
            `Core theory of Gradient & Directional Derivatives ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `math-gradient-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Gradient & Directional Derivatives. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For math-gradient, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for math-gradient
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-gradient", "Gradient & Directional Derivatives")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-gradient Gradient`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with math ecosystem conventions`
          ]
        },
        {
          id: `math-gradient-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Gradient & Directional Derivatives often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on math-gradient, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("math-gradient", "Gradient & Directional Derivatives")
debug_step("section_count", 4)`,
          output: `[math-gradient] 'Gradient & Directional Derivatives' (str)
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
          id: `math-gradient-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Gradient & Directional Derivatives shows up wherever math skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around math-gradient align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Gradient & Directional Derivatives
skills = ["math", "advanced", "math-gradient"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, advanced, math-gradient`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Gradient & Directional Derivatives to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-grad-1`,
          question: `Run 10 GD steps on L(w)=w² from w=5, η=0.1.`,
          solution: `import numpy as np
w=5.
for _ in range(10): w-=0.1*2*w
print(w)`,
          difficulty: `easy`
        },
        {
          id: `ex-grad-2`,
          question: `Project [0.2,-0.1,0.5] onto probability simplex.`,
          solution: `import numpy as np
v=np.array([0.2,-0.1,0.5]); v=np.maximum(v,0); v/=v.sum(); print(v)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 50,
      module: `module-math-05`,
      references: [
        {
          id: `3blue1brown-linalg`,
          title: `Essence of Linear Algebra`,
          source: `3Blue1Brown`,
          type: `video`,
          url: `https://www.3blue1brown.com/topics/linear-algebra`,
          description: `Visual intuition for vectors, matrices, and transformations.`
        },
        {
          id: `mit-1806-linalg`,
          title: `MIT 18.06 Linear Algebra`,
          source: `MIT`,
          type: `course`,
          url: `https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/`,
          description: `Gilbert Strang's foundational linear algebra course used across ML.`
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
          id: `khan-probability`,
          title: `Statistics and Probability — Khan Academy`,
          source: `Khan Academy`,
          type: `course`,
          url: `https://www.khanacademy.org/math/statistics-probability`,
          description: `Probability distributions, Bayes theorem, and statistical inference.`
        },
        {
          id: `stanford-cs229`,
          title: `Stanford CS229 — Machine Learning`,
          source: `Stanford CS229`,
          type: `course`,
          url: `https://cs229.stanford.edu/`,
          description: `Andrew Ng's graduate ML course — the canonical theoretical foundation.`
        }
      ]
    },
{
      id: `math-chain-rule`,
      title: `Multivariate Chain Rule`,
      description: `Jacobian matrices and backpropagation as chain rule application.`,
      level: `advanced`,
      track: `math`,
      sections: [
        {
          id: `cr-jacobian`,
          title: `Jacobian Matrix`,
          content: `For f: ℝⁿ→ℝᵐ, **Jacobian** J_f ∈ ℝ^{m×n} with J_ij=∂f_i/∂x_j. Linear approximation: f(x+δ)≈f(x)+J_f(x)δ. **Chain rule**: J_{f∘g}(x)=J_f(g(x))·J_g(x). Scalar f: ∇f is Jacobian 1×n (gradient row) or n×1 (column convention). Vector-to-scalar: gradient ∇f is Jacobian transpose of scalar function. np.autograd and JAX build Jacobian-vector products efficiently without full dense J for large n. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `J_ij = ∂f_i / ∂x_j`,
            `J_{f∘g} = J_f · J_g`,
            `f: ℝⁿ→ℝ: ∇f ∈ ℝⁿ`,
            `Linear approx: f(x+δ) ≈ f(x)+Jδ`,
            `JVP/JVJP efficient in autodiff`
          ],
          diagram: `   J matrix layout (m outputs, n inputs):

        x1  x2  x3
   f1 [ ∂  ∂  ∂ ]
   f2 [ ∂  ∂  ∂ ]
   │
   │  · · ·
   └──────────
   (see formulas above)
   │`,
          keyPoints: [
            `Jacobian generalizes gradient`,
            `Matrix dimensions m×n`,
            `Chain = matrix multiply`,
            `Full J too big—use JVP`,
            `Convention varies row/col`
          ],
          example: `import numpy as np
# f(x,y)=[x+y, x-y], J=[[1,1],[1,-1]]
J=np.array([[1.,1.],[1.,-1.]])
print("J:", J)`,
          output: `Jacobian`
        },
        {
          id: `cr-backprop`,
          title: `Backpropagation Derivation`,
          content: `Computational graph nodes with forward values. Backward pass applies chain rule from output to inputs. For node y=f(x), upstream gradient ∂L/∂y multiplies local ∂y/∂x. **Sum over paths** when node feeds multiple consumers. ReLU backward: pass gradient where x>0 else 0. Softmax+CE backward simplifies to ŷ−y. Memory stores activations for backward. Reverse-mode one pass O(edges) vs forward-mode O(inputs).

**Extended exploration — Multivariate Chain Rule:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Backpropagation Derivation" connects to jacobian matrices and backpropagation as chain rule application. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
          formulas: [
            `∂L/∂x = (∂L/∂y)(∂y/∂x)`,
            `Sum grads from all children`,
            `ReLU mask: x>0`,
            `Softmax+CE: ŷ − y`,
            `Reverse-mode O(1) backward pass`
          ],
          diagram: `   forward: x → z → h → L
   backward: dL/dh → dL/dz → dL/dx

   multiply local derivatives
   sum branches at splits
   │
   │  · · ·
   └──────────
   (see formulas above)
   │`,
          keyPoints: [
            `Reverse-mode = backprop`,
            `Store activations in forward`,
            `Branch nodes sum gradients`,
            `Fused CE+softmax simplifies`,
            `Graph DAG structure`
          ],
          example: `import numpy as np
y=np.array([0.7,0.2,0.1]); t=np.array([1,0,0])
print("dL/dz:", y-t)`,
          output: `softmax+CE grad`
        },
        {
          id: `cr-vector`,
          title: `Vector Chain Rules`,
          content: `If L=f(u) and u=g(x), then ∂L/∂x=(∂u/∂x)ᵀ∂L/∂u when using column convention. Matrix params: ∂L/∂W for y=Wx+b is (∂L/∂y)xᵀ outer product. Batch: sum over samples. **Einstein summation** einsum clarifies tensor contractions in deep nets. Batched matmul backward uses matmuls not loops. Shape discipline prevents silent bugs in manual backprop. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Extended exploration — Multivariate Chain Rule:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Vector Chain Rules" connects to jacobian matrices and backpropagation as chain rule application. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
          formulas: [
            `∂L/∂W = (∂L/∂y) xᵀ`,
            `∂L/∂x = Wᵀ (∂L/∂y)`,
            `Batch: sum over batch dim`,
            `einsum for tensor contractions`,
            `Shapes must align in chain`
          ],
          diagram: `   y = Wx  (single sample)

   dL/dW = dL/dy · xᵀ
   dL/dx = Wᵀ · dL/dy

   outer product for weights
   │
   │  · · ·
   └──────────
   (see formulas above)`,
          keyPoints: [
            `Outer product for linear layer`,
            `Transpose W for input grad`,
            `Batch sums weight grads`,
            `einsum prevents shape errors`,
            `Verify with gradcheck`
          ],
          example: `import numpy as np
dL_dy=np.array([1.,2.]); x=np.array([0.5,1.])
dL_dW=np.outer(dL_dy,x)
print("dL/dW shape:", dL_dW.shape)`,
          output: `(2,2)`
        },
        {
          id: `cr-vanish`,
          title: `Vanishing & Exploding Gradients`,
          content: `Deep chain multiplies many Jacobians. If ||J||<1 repeatedly, gradient vanishes—early layers learn slowly. ||J||>1 explodes—unstable training. Sigmoid/tanh saturate with small derivatives. ReLU helps (deriv=1 when active). **Residual connections** add identity path. **Layer normalization** stabilizes activations. **Gradient clipping** caps global norm. LSTM gates control gradient flow in RNNs. Xavier/He init sets initial Jacobian scale.

**Extended exploration — Multivariate Chain Rule:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Vanishing & Exploding Gradients" connects to jacobian matrices and backpropagation as chain rule application. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
          formulas: [
            `∏ J_i small → vanishing`,
            `∏ J_i large → exploding`,
            `Sigmoid sat: σ'≤0.25`,
            `ResNet: y=x+F(x) gradient highway`,
            `clip: g ← g·min(1, τ/||g||)`
          ],
          diagram: `   deep chain:

   J1·J2·...·J20

   each <1 → product → 0
   each >1 → product → ∞

   ResNet shortcut bypasses stack
   │
   │  · · ·`,
          keyPoints: [
            `Depth multiplies Jacobians`,
            `Saturated activations hurt`,
            `Residual paths help flow`,
            `Clip prevents explosion`,
            `Good init critical`
          ],
          example: `import numpy as np
grad=1000.; tau=1.
grad*=min(1,tau/np.abs(grad))
print("clipped:", grad)`,
          output: `clipped: 1.0`
        },
        {
          id: `math-chain-rule-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Multivariate Chain Rule sits in the **math** track of the Data Science Master curriculum. Jacobian matrices and backpropagation as chain rule application.

Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directly to numpy operations and loss functions.

For math-chain-rule, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Multivariate Chain Rule
meta = {"topic_id": "math-chain-rule", "track": "math", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-chain-rule math advanced`,
          keyPoints: [
            `Core theory of Multivariate Chain Rule ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `math-chain-rule-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Multivariate Chain Rule. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For math-chain-rule, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for math-chain-rule
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-chain-rule", "Multivariate Chain Rule")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-chain-rule Multivariate`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with math ecosystem conventions`
          ]
        },
        {
          id: `math-chain-rule-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Multivariate Chain Rule often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on math-chain-rule, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("math-chain-rule", "Multivariate Chain Rule")
debug_step("section_count", 4)`,
          output: `[math-chain-rule] 'Multivariate Chain Rule' (str)
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
          id: `math-chain-rule-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Multivariate Chain Rule shows up wherever math skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around math-chain-rule align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Multivariate Chain Rule
skills = ["math", "advanced", "math-chain-rule"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, advanced, math-chain-rule`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Multivariate Chain Rule to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-cr-1`,
          question: `Jacobian of [x+y, xy] at (2,3).`,
          solution: `import numpy as np
print(np.array([[1,1],[3,2]]))`,
          difficulty: `easy`
        },
        {
          id: `ex-cr-2`,
          question: `Clip gradient norm 5.0 with max norm 1.0.`,
          solution: `import numpy as np
g=np.array([3.,4.]); g*=min(1,1/np.linalg.norm(g)); print(g)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 50,
      module: `module-math-05`,
      references: [
        {
          id: `3blue1brown-linalg`,
          title: `Essence of Linear Algebra`,
          source: `3Blue1Brown`,
          type: `video`,
          url: `https://www.3blue1brown.com/topics/linear-algebra`,
          description: `Visual intuition for vectors, matrices, and transformations.`
        },
        {
          id: `mit-1806-linalg`,
          title: `MIT 18.06 Linear Algebra`,
          source: `MIT`,
          type: `course`,
          url: `https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/`,
          description: `Gilbert Strang's foundational linear algebra course used across ML.`
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
          id: `khan-probability`,
          title: `Statistics and Probability — Khan Academy`,
          source: `Khan Academy`,
          type: `course`,
          url: `https://www.khanacademy.org/math/statistics-probability`,
          description: `Probability distributions, Bayes theorem, and statistical inference.`
        },
        {
          id: `stanford-cs229`,
          title: `Stanford CS229 — Machine Learning`,
          source: `Stanford CS229`,
          type: `course`,
          url: `https://cs229.stanford.edu/`,
          description: `Andrew Ng's graduate ML course — the canonical theoretical foundation.`
        }
      ]
    },
{
      id: `math-jacobian-hessian`,
      title: `Jacobian & Hessian`,
      description: `Second-order information for curvature and advanced optimization.`,
      level: `advanced`,
      track: `math`,
      sections: [
        {
          id: `jh-hessian`,
          title: `Hessian Matrix`,
          content: `H_ij=∂²L/∂θ_i∂θ_j symmetric for smooth L. Describes curvature of loss surface. Positive definite H at minimum (local convex bowl). Indefinite H → saddle. **Newton step** Δθ=−H⁻¹∇L. **Gauss-Newton** approximates H for least squares. Exact Hessian O(n²) storage—impractical for large n. Diagonal approx (AdaGrad, Adam) use diagonal only. Hessian-vector products via Pearlmutter trick without forming H.

**Extended exploration — Jacobian & Hessian:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Hessian Matrix" connects to second-order information for curvature and advanced optimization. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
          formulas: [
            `H_ij = ∂²L/∂θ_i∂θ_j`,
            `H symmetric for C² L`,
            `Newton: Δθ = −H⁻¹∇L`,
            `H PD → local strict min`,
            `HVP without full H`
          ],
          diagram: `   1D: H = f''(x)
   bowl f''>0    cap f''<0

   2D: eigenvalues of H
   both + → min
   │
   │  · · ·
   └──────────
   (see formulas above)
   │`,
          keyPoints: [
            `Hessian = curvature matrix`,
            `Newton uses full H`,
            `Too large to store in DL`,
            `HVP for truncated Newton`,
            `Diagonal approx in adaptive opt`
          ],
          example: `import numpy as np
# L=x²+4xy+2y²
H=np.array([[2.,4.],[4.,4.]])
print("eig:", np.linalg.eigvalsh(H))`,
          output: `curvature`
        },
        {
          id: `jh-newton`,
          title: `Newton & Quasi-Newton`,
          content: `Newton converges quadratically near min if H PD. **BFGS** and **L-BFGS** approximate H inverse from gradient history—used in sklearn LogisticRegression(lbfgs). **Conjugate gradient** for large sparse systems. Deep learning rarely uses full Newton—too costly. Small networks or meta-learning sometimes use Hessian info. Natural gradient preconditions by Fisher information F⁻¹∇L. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `Newton: θ ← θ − H⁻¹∇L`,
            `Quadratic conv near min`,
            `BFGS: secant Hessian approx`,
            `L-BFGS limited memory`,
            `Natural grad: F⁻¹∇L`
          ],
          diagram: `   Newton vs GD:

   GD: fixed η step
   Newton: adapts via H⁻¹
   auto-scales each direction
   │
   │  · · ·
   └──────────
   (see formulas above)
   │`,
          keyPoints: [
            `Newton faster locally`,
            `BFGS for moderate n`,
            `L-BFGS in classical ML`,
            `Rare in deep nets`,
            `Natural grad Fisher precondition`
          ],
          example: `import numpy as np
from scipy.optimize import minimize
f=lambda t: t[0]**2+t[1]**2
r=minimize(f,[3.,3.],method="BFGS")
print("min:", r.x)`,
          output: `min: ~0`
        },
        {
          id: `jh-jacobian-apps`,
          title: `Jacobian Applications`,
          content: `**Normalizing flows**: log p(x)=log p(z)+log|det ∂f/∂x|. **Robotics** kinematics Jacobian maps joint to end-effector velocities. **Sensitivity** of model output to input: J input gradients for adversarial examples. **Change of variables** in probability multivariate: p_y(y)=p_x(x)/|det J|. VAE decoder Jacobian affects likelihood approximations. Stable computation via log-det tricks. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `log p(x) = log p(z) + log|det J|`,
            `Adv examples: max ||δ|| s.t. misclassify`,
            `p(y) = p(x) / |det ∂x/∂y|`,
            `J maps velocity spaces`,
            `log-det for numerical stability`
          ],
          diagram: `   flow f: x → z

   density transforms by |det J|
   volume stretch = |det J|
   │
   │  · · ·
   └──────────
   (see formulas above)
   │
   │  · · ·`,
          keyPoints: [
            `Flows need Jacobian determinant`,
            `Adversarial uses input Jacobian`,
            `Change of vars in density`,
            `Log-det avoids underflow`,
            `Robotics kinematics classic use`
          ],
          example: `import numpy as np
# linear f(x)=Ax, log|det A|
A=np.array([[2.,0.],[0.,0.5]])
print("log|det|:", np.linalg.slogdet(A)[1])`,
          output: `log det`
        },
        {
          id: `jh-gauss-newton`,
          title: `Gauss-Newton & Levenberg-Marquardt`,
          content: `For least squares r(θ), Hessian approx H≈J_rᵀJ_r Jacobian of residuals. **Gauss-Newton** ignores second-order term. **Levenberg-Marquardt** adds λI damping between GN and GD. Used in nonlinear curve fitting and some pose estimation. More stable than pure Newton for sum-of-squares objectives. Connects to linearization of nonlinear models each iteration. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Extended exploration — Jacobian & Hessian:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Gauss-Newton & Levenberg-Marquardt" connects to second-order information for curvature and advanced optimization. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
          formulas: [
            `H ≈ JᵀJ (Gauss-Newton)`,
            `LM: (JᵀJ + λI)Δ = −Jᵀr`,
            `For min ∑ r_i(θ)²`,
            `λ large → gradient-like`,
            `λ small → Gauss-Newton`
          ],
          diagram: `   residual vector r(θ)

   linearize r near θ
   solve normal equations
   iterate θ
   │
   │  · · ·
   └──────────
   (see formulas above)
   │`,
          keyPoints: [
            `GN for nonlinear least squares`,
            `LM adds damping λ`,
            `Jacobian of residuals key`,
            `Used in classical fitting`,
            `Bridge GN and GD via λ`
          ],
          example: `import numpy as np
# simple 1D: minimize (a-2)² via GN
a=0.; target=2.
for _ in range(5): a -= (a-target)*1.0
print(a)`,
          output: `→ 2`
        },
        {
          id: `math-jacobian-hessian-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Jacobian & Hessian sits in the **math** track of the Data Science Master curriculum. Second-order information for curvature and advanced optimization.

Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directly to numpy operations and loss functions.

For math-jacobian-hessian, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Jacobian & Hessian
meta = {"topic_id": "math-jacobian-hessian", "track": "math", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-jacobian-hessian math advanced`,
          keyPoints: [
            `Core theory of Jacobian & Hessian ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `math-jacobian-hessian-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Jacobian & Hessian. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For math-jacobian-hessian, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for math-jacobian-hessian
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-jacobian-hessian", "Jacobian & Hessian")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-jacobian-hessian Jacobian`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with math ecosystem conventions`
          ]
        },
        {
          id: `math-jacobian-hessian-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Jacobian & Hessian often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on math-jacobian-hessian, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("math-jacobian-hessian", "Jacobian & Hessian")
debug_step("section_count", 4)`,
          output: `[math-jacobian-hessian] 'Jacobian & Hessian' (str)
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
          id: `math-jacobian-hessian-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Jacobian & Hessian shows up wherever math skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around math-jacobian-hessian align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Jacobian & Hessian
skills = ["math", "advanced", "math-jacobian-hessian"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, advanced, math-jacobian-hessian`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Jacobian & Hessian to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-jh-1`,
          question: `Hessian of f(x,y)=x²+y² is diag(2,2). Verify eigenvalues.`,
          solution: `import numpy as np
print(np.linalg.eigvalsh(np.diag([2.,2.])))`,
          difficulty: `easy`
        },
        {
          id: `ex-jh-2`,
          question: `One Newton step on f(x)=x² at x=3 (H=2, f'=6).`,
          solution: `import numpy as np
x=3.; x -= 6/2; print(x)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 50,
      module: `module-math-05`,
      references: [
        {
          id: `3blue1brown-linalg`,
          title: `Essence of Linear Algebra`,
          source: `3Blue1Brown`,
          type: `video`,
          url: `https://www.3blue1brown.com/topics/linear-algebra`,
          description: `Visual intuition for vectors, matrices, and transformations.`
        },
        {
          id: `mit-1806-linalg`,
          title: `MIT 18.06 Linear Algebra`,
          source: `MIT`,
          type: `course`,
          url: `https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/`,
          description: `Gilbert Strang's foundational linear algebra course used across ML.`
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
          id: `khan-probability`,
          title: `Statistics and Probability — Khan Academy`,
          source: `Khan Academy`,
          type: `course`,
          url: `https://www.khanacademy.org/math/statistics-probability`,
          description: `Probability distributions, Bayes theorem, and statistical inference.`
        },
        {
          id: `stanford-cs229`,
          title: `Stanford CS229 — Machine Learning`,
          source: `Stanford CS229`,
          type: `course`,
          url: `https://cs229.stanford.edu/`,
          description: `Andrew Ng's graduate ML course — the canonical theoretical foundation.`
        }
      ]
    },
{
      id: `math-multivariate-opt`,
      title: `Multivariate Optimization`,
      description: `Critical points, convexity, and constrained optimization preview.`,
      level: `advanced`,
      track: `math`,
      sections: [
        {
          id: `mvo-critical`,
          title: `Critical Points`,
          content: `Interior extremum: ∇f=0. **Second derivative test** 1D: f''>0 min, f''<0 max. Multi-D: H positive definite → strict local min; negative definite → max; indefinite → saddle. **Global min** on convex domain if f convex. Non-convex DL: many saddles, few bad local minima empirically. **Strict saddle** has directions up and down. Perturbation escapes saddles with noise in SGD. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `∇f(x*) = 0 critical`,
            `H PD → strict local min`,
            `H ND → strict local max`,
            `H indefinite → saddle`,
            `Convex f: local min = global min`
          ],
          diagram: `   critical point types:

   min: bowl ∪
   max: cap ∩
   saddle: horse ╱╲
   all: ∇f=0
   │
   │  · · ·
   └──────────
   (see formulas above)`,
          keyPoints: [
            `Gradient zero necessary not sufficient`,
            `Hessian classifies in smooth case`,
            `Saddles common in high-D`,
            `SGD noise helps escape`,
            `Convex ⇒ nice global structure`
          ],
          example: `import numpy as np
# saddle f=x²-y², grad=0 at origin, H indefinite
H=np.array([[2.,0.],[0.,-2.]])
print("eig:", np.linalg.eigvalsh(H))`,
          output: `mixed signs → saddle`
        },
        {
          id: `mvo-convex`,
          title: `Convex Functions`,
          content: `f convex if f(λx+(1−λ)y)≤λf(x)+(1−λ)f(y). Equivalently H⪰0 everywhere for C² f. **Strict convex** unique global min. Convex optimization globally tractable. Linear models with convex loss (MSE, logistic) → convex in w. Deep nets non-convex in θ. **Jensen inequality** E[f(X)]≥f(E[X]) for convex f—used in proofs. L1 not strictly convex at 0 but still convex. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Extended exploration — Multivariate Optimization:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Convex Functions" connects to critical points, convexity, and constrained optimization preview. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
          formulas: [
            `f(λx+(1−λ)y) ≤ λf(x)+(1−λ)f(y)`,
            `H ⪰ 0 ⇔ convex (C²)`,
            `Convex + closed set → global min`,
            `Linear + convex loss → convex problem`,
            `Jensen: E[f(X)] ≥ f(E[X])`
          ],
          diagram: `   convex: line segment above graph

      f(b) ·
           ╲
    f(a) ·  ╲___ chord below graph
         a────b
   │
   │  · · ·
   └──────────
   (see formulas above)`,
          keyPoints: [
            `Convex ⇒ no spurious local min`,
            `H PSD characterizes smooth convex`,
            `Logistic regression convex in w`,
            `Deep nets non-convex`,
            `Jensen key inequality`
          ],
          example: `import numpy as np
f=lambda x: x**2
x,y=1.,3.; lam=0.5
print("convex check:", f(lam*x+(1-lam)*y) <= lam*f(x)+(1-lam)*f(y))`,
          output: `True`
        },
        {
          id: `mvo-saddle`,
          title: `Saddle Points in High Dimensions`,
          content: `Random Gaussian landscape: saddles exponentially outnumber minima as dimension grows. At saddle, gradient zero but some eigenvalues of H positive, some negative. **Strict saddle** algorithms add noise or use curvature. **Plateau** surrounding saddles slow GD. Second-order methods can escape faster but costly. Modern view: SGD finds good minima despite non-convexity partly due to overparameterization and implicit regularization.

**Extended exploration — Multivariate Optimization:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Saddle Points in High Dimensions" connects to critical points, convexity, and constrained optimization preview. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
          formulas: [
            `High-D: saddles dominate`,
            `Strict saddle: mixed H eigenvalues`,
            `Noise in SGD helps escape`,
            `Plateaus: small gradient`,
            `Overparam → many global-ish min`
          ],
          diagram: `   saddle in 2D:

      down ↘  ↗ up
          ╳
      up ↗  ↘ down
   │
   │  · · ·
   └──────────
   (see formulas above)
   │`,
          keyPoints: [
            `Saddles not local minima`,
            `High-D geometry counterintuitive`,
            `SGD noise beneficial`,
            `Plateaus confuse stopping`,
            `Overparameterization helps`
          ],
          example: `import numpy as np
f=lambda x,y: x**2-y**2
print("grad at origin:", 0, "H indefinite")`,
          output: `saddle at 0`
        },
        {
          id: `mvo-global`,
          title: `Global Optimization Strategies`,
          content: `**Random restarts** from multiple init. **Simulated annealing** stochastic acceptance. **Bayesian optimization** for expensive black-box. **Learning rate schedules** cosine, warmup. **Weight decay** L2 regularization. **Early stopping** on validation. **Ensemble** average models. For DL: SGD+ momentum+ weight decay+ batch norm+ skip connections form practical recipe. No guarantee global but empirically strong minima found.

**Extended exploration — Multivariate Optimization:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Global Optimization Strategies" connects to critical points, convexity, and constrained optimization preview. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
          formulas: [
            `Random restarts explore basins`,
            `BayesOpt for hyperparam black-box`,
            `Cosine annealing LR schedule`,
            `Weight decay: θ ← (1−ηλ)θ`,
            `Early stop on val loss`
          ],
          diagram: `   optimization toolkit:

   init → SGD+momentum
        → schedule LR
        → regularize
        → early stop
        → ensemble
   │
   │  · · ·
   └──────────`,
          keyPoints: [
            `No silver bullet for global opt`,
            `Restarts cheap parallelism`,
            `BayesOpt for HPO`,
            `Regularization improves generalization`,
            `Practice combines many heuristics`
          ],
          example: `import numpy as np
loss=np.array([2.,1.,0.8,0.75,0.74,0.76])
print("stop at epoch:", np.argmin(loss)+1)`,
          output: `early stop argmin`
        },
        {
          id: `math-multivariate-opt-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Multivariate Optimization sits in the **math** track of the Data Science Master curriculum. Critical points, convexity, and constrained optimization preview.

Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directly to numpy operations and loss functions.

For math-multivariate-opt, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Multivariate Optimization
meta = {"topic_id": "math-multivariate-opt", "track": "math", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-multivariate-opt math advanced`,
          keyPoints: [
            `Core theory of Multivariate Optimization ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `math-multivariate-opt-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Multivariate Optimization. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For math-multivariate-opt, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for math-multivariate-opt
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-multivariate-opt", "Multivariate Optimization")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-multivariate-opt Multivariate`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with math ecosystem conventions`
          ]
        },
        {
          id: `math-multivariate-opt-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Multivariate Optimization often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on math-multivariate-opt, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("math-multivariate-opt", "Multivariate Optimization")
debug_step("section_count", 4)`,
          output: `[math-multivariate-opt] 'Multivariate Optimization' (str)
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
          id: `math-multivariate-opt-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Multivariate Optimization shows up wherever math skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around math-multivariate-opt align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Multivariate Optimization
skills = ["math", "advanced", "math-multivariate-opt"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, advanced, math-multivariate-opt`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Multivariate Optimization to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-mvo-1`,
          question: `Verify f(x)=x² is convex on random pairs.`,
          solution: `import numpy as np
f=lambda x:x**2
x,y=np.random.rand(2); l=0.3
print(f(l*x+(1-l)*y) <= l*f(x)+(1-l)*f(y))`,
          difficulty: `easy`
        },
        {
          id: `ex-mvo-2`,
          question: `Classify H=diag(1,-1) critical point type via eigenvalues.`,
          solution: `import numpy as np
print("saddle", np.linalg.eigvalsh(np.diag([1.,-1.])))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 50,
      module: `module-math-05`,
      references: [
        {
          id: `3blue1brown-linalg`,
          title: `Essence of Linear Algebra`,
          source: `3Blue1Brown`,
          type: `video`,
          url: `https://www.3blue1brown.com/topics/linear-algebra`,
          description: `Visual intuition for vectors, matrices, and transformations.`
        },
        {
          id: `mit-1806-linalg`,
          title: `MIT 18.06 Linear Algebra`,
          source: `MIT`,
          type: `course`,
          url: `https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/`,
          description: `Gilbert Strang's foundational linear algebra course used across ML.`
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
          id: `khan-probability`,
          title: `Statistics and Probability — Khan Academy`,
          source: `Khan Academy`,
          type: `course`,
          url: `https://www.khanacademy.org/math/statistics-probability`,
          description: `Probability distributions, Bayes theorem, and statistical inference.`
        },
        {
          id: `stanford-cs229`,
          title: `Stanford CS229 — Machine Learning`,
          source: `Stanford CS229`,
          type: `course`,
          url: `https://cs229.stanford.edu/`,
          description: `Andrew Ng's graduate ML course — the canonical theoretical foundation.`
        }
      ]
    }
];
