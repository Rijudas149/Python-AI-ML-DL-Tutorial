import type { Topic } from '../../types';

export const moduleMath04Topics: Topic[] = [
{
      id: `math-limits`,
      title: `Limits & Continuity`,
      description: `Understand limits, continuity, and foundational definitions for derivatives.`,
      level: `intermediate`,
      track: `math`,
      sections: [
        {
          id: `lim-def`,
          title: `Limit Definition`,
          content: `lim_{x→a} f(x) = L means f(x) approaches L as x approaches a (not necessarily f(a)=L). **One-sided limits**: from left x→a⁻, from right x→a⁺. Limit exists iff both one-sided limits agree. **Limits at infinity** describe asymptotic behavior. Sequential characterization connects to series convergence. ε-δ definition formalizes: ∀ε>0, ∃δ>0 such that 0<|x−a|<δ ⇒ |f(x)−L|<ε. Limits enable defining derivative as limit of difference quotient. L'Hôpital handles 0/0 indeterminate forms.

**Extended exploration — Limits & Continuity:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Limit Definition" connects to understand limits, continuity, and foundational definitions for derivatives. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
          formulas: [
            `lim_{x→a} f(x) = L`,
            `lim exists ⇔ lim⁻ = lim⁺`,
            `lim_{x→∞} f(x) (horizontal asymptote)`,
            `ε-δ formal definition`,
            `0/0 → try L'Hôpital`
          ],
          diagram: `   f(x) near a:

        L ─ ─ ─ ─ ─ target
          ·  ·
        ·    ·  f(x)
          ·
        ────┼──── x
            a

   x→a, f(x)→L`,
          keyPoints: [
            `Limit ≠ function value at point`,
            `Both sides must agree`,
            `Infinity limits describe tails`,
            `Foundation for derivatives`,
            `L'Hôpital for indeterminate`
          ],
          example: `import numpy as np
f = lambda x: (x**2-1)/(x-1)
x = np.array([0.9,0.99,0.999,1.001,1.01])
print("f(x):", f(x))`,
          output: `f(x) → 2 as x→1`
        },
        {
          id: `lim-rules`,
          title: `Limit Laws`,
          content: `If lim f=L and lim g=M: lim(f+g)=L+M, lim(fg)=LM, lim(f/g)=L/M if M≠0. Polynomials continuous everywhere. Rational continuous except zeros of denominator. lim_{x→0} sin(x)/x = 1 fundamental. lim_{x→0} (e^x−1)/x = 1. Squeeze theorem bounds limits. Composition: lim f(g(x)) if inner limit in domain. These laws justify term-by-term differentiation and integration in power series. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `lim(f+g) = lim f + lim g`,
            `lim(f/g) = lim f / lim g`,
            `lim_{x→0} sin(x)/x = 1`,
            `lim_{x→0} (e^x − 1)/x = 1`,
            `Squeeze: g≤f≤h → same limit`
          ],
          diagram: `   squeeze:

   h(x) ────────
        f(x) ~~~ squeezed
   g(x) ────────
        → same limit L
   │
   │  · · ·
   └──────────
   (see formulas above)`,
          keyPoints: [
            `Limit laws combine simple limits`,
            `sin(x)/x key trig limit`,
            `Squeeze for bounded functions`,
            `Continuity from limit = value`,
            `Composition needs care at boundaries`
          ],
          example: `import numpy as np
x = np.linspace(-0.1,0.1,5); x=x[x!=0]
print("sin(x)/x:", np.sin(x)/x)`,
          output: `→ 1 near 0`
        },
        {
          id: `lim-cont`,
          title: `Continuity`,
          content: `f continuous at a if lim_{x→a} f(x)=f(a). **Types of discontinuity**: removable (hole), jump, infinite. Continuous on [a,b] achieves max/min (Extreme Value Theorem). Intermediate Value Theorem: continuous f with f(a)<0<f(b) has root in (a,b). ML activations: ReLU continuous; sigmoid continuous; step discontinuous. Loss landscapes continuous in parameters for smooth models. Discontinuities cause optimization issues.

**Extended exploration — Limits & Continuity:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Continuity" connects to understand limits, continuity, and foundational definitions for derivatives. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
          formulas: [
            `Continuous at a: lim_{x→a} f(x) = f(a)`,
            `IVT: sign change → root`,
            `EVT: continuous on [a,b] → max/min`,
            `Removable: redefine at hole`,
            `Jump: piecewise mismatch`
          ],
          diagram: `   continuous: no break
   ───────╱──────

   removable hole: ○
   ───────○──────

   jump:
   ───────┐
          └────
   │`,
          keyPoints: [
            `Continuous functions no jumps`,
            `IVT finds roots bracketing`,
            `Activations mostly continuous`,
            `Discontinuities hurt gradients`,
            `Piecewise needs match at joints`
          ],
          example: `import numpy as np
x = np.linspace(-2,2,100)
relu = np.maximum(0,x)
print("ReLU continuous, kink at 0")`,
          output: `kink at 0 still continuous`
        },
        {
          id: `lim-ml`,
          title: `Limits in Optimization`,
          content: `Training seeks θ where loss L(θ) approaches minimum—often lim_{t→∞} L(θ_t) desired. Gradient descent step size η affects convergence limit. As η→0, discrete updates approximate continuous gradient flow ODE. Softmax limit as temperature T→0 approaches argmax. Sigmoid limit x→±∞ gives 0/1 hard threshold. Understanding limits clarifies asymptotic behavior of learning curves and regularization paths as λ→0 or λ→∞.

**Extended exploration — Limits & Continuity:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Limits in Optimization" connects to understand limits, continuity, and foundational definitions for derivatives. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
          formulas: [
            `lim_{t→∞} L(θ_t) = L*`,
            `η→0: GD → gradient flow`,
            `softmax(z/T), T→0 → one-hot`,
            `sigmoid(x), x→∞ → 1`,
            `λ→∞: ridge → zero solution`
          ],
          diagram: `   loss vs iteration:

   L │╲
     │ ╲___
     │     ────→ lim L*
     └──────────── t
   convergence = limit behavior
   │
   │  · · ·
   └──────────`,
          keyPoints: [
            `Optimization seeks limiting minimum`,
            `LR too large prevents convergence`,
            `Temperature limits in softmax`,
            `Regularization path limits interpretable`,
            `Asymptotic analysis guides tuning`
          ],
          example: `import numpy as np
t = np.arange(1,100)
L = 1.0/t + 0.01
print("lim approx:", L[-1])`,
          output: `decreasing to limit`
        },
        {
          id: `math-limits-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Limits & Continuity sits in the **math** track of the Data Science Master curriculum. Understand limits, continuity, and foundational definitions for derivatives.

Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directly to numpy operations and loss functions.

For math-limits, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (intermediate):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Limits & Continuity
meta = {"topic_id": "math-limits", "track": "math", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-limits math intermediate`,
          keyPoints: [
            `Core theory of Limits & Continuity ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `math-limits-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Limits & Continuity. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For math-limits, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for math-limits
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-limits", "Limits & Continuity")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-limits Limits`,
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
          id: `math-limits-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Limits & Continuity often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on math-limits, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("math-limits", "Limits & Continuity")
debug_step("section_count", 4)`,
          output: `[math-limits] 'Limits & Continuity' (str)
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
          id: `math-limits-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Limits & Continuity shows up wherever math skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around math-limits align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Limits & Continuity
skills = ["math", "intermediate", "math-limits"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, intermediate, math-limits`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Limits & Continuity to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-lim-1`,
          question: `Numerically estimate lim (sin x)/x as x→0.`,
          solution: `import numpy as np
x=np.array([1e-1,1e-2,1e-3]); print(np.sin(x)/x)`,
          difficulty: `easy`
        },
        {
          id: `ex-lim-2`,
          question: `Estimate lim (x²-4)/(x-2) as x→2.`,
          solution: `import numpy as np
x=np.array([1.9,1.99,2.01]); print((x**2-4)/(x-2))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 50,
      module: `module-math-04`,
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
      id: `math-derivatives`,
      title: `Derivatives`,
      description: `Definition, interpretation as rate of change and tangent slope.`,
      level: `intermediate`,
      track: `math`,
      sections: [
        {
          id: `der-def`,
          title: `Derivative Definition`,
          content: `f'(x) = lim_{h→0} [f(x+h)−f(x)]/h **difference quotient**. Geometric: slope of tangent line. Physical: instantaneous rate of change. Notation: df/dx, Df, ẋ. Differentiable ⇒ continuous (converse false: |x| at 0). Partial derivative ∂f/∂x_i holds others fixed—multivariate preview. In ML, ∂L/∂w is gradient component telling how loss changes with weight w. Autodiff computes derivatives algorithmically.

**Extended exploration — Derivatives:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Derivative Definition" connects to definition, interpretation as rate of change and tangent slope. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
          formulas: [
            `f'(x) = lim_{h→0} (f(x+h)−f(x))/h`,
            `Tangent slope at x`,
            `Differentiable ⇒ continuous`,
            `∂f/∂x_i partial derivative`,
            `∇f = vector of partials`
          ],
          diagram: `   secant → tangent as h→0

        f(x)
       ╱|
      ╱ | rise
     ╱  |/run = slope
    ────┼── x
        h→0
   │
   │  · · ·`,
          keyPoints: [
            `Derivative = instantaneous rate`,
            `Limit of secant slopes`,
            `Gradient collects partials`,
            `Non-differentiable at cusps`,
            `Autodiff automates computation`
          ],
          example: `import numpy as np
f = lambda x: x**2
def deriv(f,x,h=1e-5): return (f(x+h)-f(x))/h
print("f'(3):", deriv(f,3), "exact:", 2*3)`,
          output: `f'(3): 6.0`
        },
        {
          id: `der-interp`,
          title: `Interpretations`,
          content: `**Marginal effect**: ∂y/∂x_i how y changes per unit x_i. **Sensitivity analysis** in models. **Velocity** as dx/dt. **Jacobian** matrix of all partial derivatives for vector functions. **Hessian** second derivatives for curvature. Sign of derivative: increasing vs decreasing. Critical points where f'=0: potential max/min/inflection. Convex functions have non-negative second derivative. Loss gradient points uphill; descent uses −∇L.

**Extended exploration — Derivatives:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Interpretations" connects to definition, interpretation as rate of change and tangent slope. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
          formulas: [
            `f'(x)>0 → increasing`,
            `f'(x)=0 → critical point`,
            `f''(x)>0 → convex (local)`,
            `Jacobian J_ij = ∂f_i/∂x_j`,
            `Gradient descent: θ -= η∇L`
          ],
          diagram: `   f'(x) sign:

   f'>0: climbing ↗
   f'<0: falling ↘
   f'=0: flat ─── (critical)

   GD goes opposite gradient ↓
   │
   │  · · ·
   └──────────`,
          keyPoints: [
            `Gradient points uphill`,
            `Descent uses negative gradient`,
            `Jacobian for vector maps`,
            `Hessian for curvature`,
            `Critical points need second test`
          ],
          example: `import numpy as np
x = np.linspace(-2,2,5)
f = x**2
grad = 2*x
print("x:", x, "grad:", grad)`,
          output: `grad zero at x=0`
        },
        {
          id: `der-numeric`,
          title: `Numerical Differentiation`,
          content: `Forward diff: f'(x)≈(f(x+h)−f(x))/h, error O(h). Central diff: (f(x+h)−f(x−h))/(2h), error O(h²) better. Choose h~√ε_machine for float64. **Finite differences** verify autodiff implementations. np.gradient for discrete arrays. Too small h causes cancellation error; too large truncation error. Jacobian check: compare autograd to finite diff in unit tests for custom layers. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `Forward: (f(x+h)−f(x))/h`,
            `Central: (f(x+h)−f(x−h))/(2h)`,
            `Error central O(h²)`,
            `h ≈ 1e-5 typical for float64`,
            `gradient check in DL debugging`
          ],
          diagram: `   trade-off in h:

   large h → truncation error
   small h → cancellation noise
        ╲    ╱
         ╲  ╱  sweet spot ~1e-5
          ╲╱
   │
   │  · · ·
   └──────────`,
          keyPoints: [
            `Central more accurate`,
            `Balance truncation vs roundoff`,
            `gradient check validates backprop`,
            `np.gradient for discrete data`,
            `Autodiff preferred in training`
          ],
          example: `import numpy as np
f=lambda x: np.sin(x)
x=1.0
h=1e-5
central=(f(x+h)-f(x-h))/(2*h)
print("cos(1) approx:", central, "exact:", np.cos(x))`,
          output: `matches cos(1)`
        },
        {
          id: `der-ml`,
          title: `Derivatives in Loss Landscapes`,
          content: `Loss L(θ) differentiable in θ for smooth models. Surface plot shows valleys and saddles. Gradient ∇L perpendicular to level curves. Zero gradient at stationary points—local min, max, or saddle. Plateau: gradient near zero slows learning. Sharp minima vs flat minima generalization debate. ReLU non-differentiable at 0 but subgradient methods work. Understanding derivatives essential for all gradient-based training.

**Extended exploration — Derivatives:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Derivatives in Loss Landscapes" connects to definition, interpretation as rate of change and tangent slope. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
          formulas: [
            `∇L(θ) = 0 at stationary points`,
            `Saddle: grad=0 but not extremum`,
            `Plateau: |∇L| ≈ 0 slow training`,
            `ReLU subgradient at 0`,
            `Flat minima may generalize better`
          ],
          diagram: `   loss surface (2 params):

        ╱╲  saddle
       ╱  ╲╱╲
      ╱ valley╲
     local min
   │
   │  · · ·
   └──────────
   (see formulas above)`,
          keyPoints: [
            `Stationary ≠ always minimum`,
            `Saddles common in high-D`,
            `Plateaus need adaptive LR`,
            `Subgradients extend to ReLU`,
            `Visualize 2D slices for intuition`
          ],
          example: `import numpy as np
theta = np.array([1.,1.])
L = lambda t: (t[0]-2)**2 + (t[1]+1)**2
h=1e-5
grad = np.array([(L(theta+np.array([h,0]))-L(theta))/h,(L(theta+np.array([0,h]))-L(theta))/h])
print("grad:", grad)`,
          output: `grad at (1,1)`
        },
        {
          id: `math-derivatives-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Derivatives sits in the **math** track of the Data Science Master curriculum. Definition, interpretation as rate of change and tangent slope.

Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directly to numpy operations and loss functions.

For math-derivatives, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (intermediate):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Derivatives
meta = {"topic_id": "math-derivatives", "track": "math", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-derivatives math intermediate`,
          keyPoints: [
            `Core theory of Derivatives ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `math-derivatives-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Derivatives. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For math-derivatives, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for math-derivatives
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-derivatives", "Derivatives")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-derivatives Derivatives`,
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
          id: `math-derivatives-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Derivatives often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on math-derivatives, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("math-derivatives", "Derivatives")
debug_step("section_count", 4)`,
          output: `[math-derivatives] 'Derivatives' (str)
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
          id: `math-derivatives-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Derivatives shows up wherever math skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around math-derivatives align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Derivatives
skills = ["math", "intermediate", "math-derivatives"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, intermediate, math-derivatives`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Derivatives to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-der-1`,
          question: `Numerically differentiate f(x)=x³ at x=2.`,
          solution: `import numpy as np
f=lambda x:x**3; x=2.; h=1e-5
print((f(x+h)-f(x-h))/(2*h), 3*x**2)`,
          difficulty: `easy`
        },
        {
          id: `ex-der-2`,
          question: `Compute gradient of L(w)=w² at w=3.`,
          solution: `import numpy as np
w=3.; print(2*w)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 50,
      module: `module-math-04`,
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
      id: `math-derivative-rules`,
      title: `Differentiation Rules`,
      description: `Power, product, quotient, and chain rules for efficient differentiation.`,
      level: `intermediate`,
      track: `math`,
      sections: [
        {
          id: `dr-power`,
          title: `Basic Rules`,
          content: `Power: d/dx x^n = n x^{n−1}. Constant multiple: (cf)'=cf'. Sum: (f+g)'=f'+g'. Exponential: d/dx e^x = e^x. Log: d/dx ln(x)=1/x. Trig: (sin x)'=cos x, (cos x)'=−sin x. Sigmoid σ(x): σ'(x)=σ(x)(1−σ(x)). Softplus smooth ReLU: d/dx ln(1+e^x). These rules combine via chain/product to differentiate composite losses. Memorizing common derivatives speeds manual gradient checks. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `d/dx x^n = n x^(n−1)`,
            `d/dx e^x = e^x`,
            `d/dx ln(x) = 1/x`,
            `σ'(x) = σ(x)(1−σ(x))`,
            `(f+g)' = f' + g'`
          ],
          diagram: `   rule toolbox:

   power  product  quotient  chain
     ↓       ↓        ↓        ↓
   combine for complex f(x)
   │
   │  · · ·
   └──────────
   (see formulas above)
   │`,
          keyPoints: [
            `Power rule most common`,
            `Sigmoid derivative product form`,
            `Sum rule linearizes`,
            `Build complex from simple`,
            `Table speeds manual work`
          ],
          example: `import numpy as np
x=np.array([0.5,1.,2.])
s=1/(1+np.exp(-x))
print("sigmoid:", s, "deriv:", s*(1-s))`,
          output: `sigmoid deriv`
        },
        {
          id: `dr-product`,
          title: `Product & Quotient Rules`,
          content: `**Product**: (fg)' = f'g + fg'. **Quotient**: (f/g)' = (f'g − fg')/g². **Reciprocal**: (1/g)' = −g'/g². Dot product derivative: d/dt(u·v)=u'·v+u·v'. Matrix product: d/dt(AB)=A'B+AB' when both vary. Used when loss combines products of predictions and weights. Quotient in softmax derivatives. Careful with order in matrix calculus—not commutative. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Extended exploration — Differentiation Rules:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Product & Quotient Rules" connects to power, product, quotient, and chain rules for efficient differentiation. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
          formulas: [
            `(fg)' = f'g + fg'`,
            `(f/g)' = (f'g − fg')/g²`,
            `d(u·v) = u'·v + u·v'`,
            `d(AB) = A'B + AB'`,
            `(1/g)' = −g'/g²`
          ],
          diagram: `   (fg)': two terms

   f ──┐
       ├── product → f'g + fg'
   g ──┘
   │
   │  · · ·
   └──────────
   (see formulas above)
   │`,
          keyPoints: [
            `Product rule two-term split`,
            `Quotient for ratios`,
            `Matrix product needs order`,
            `Softmax uses quotient structure`,
            `Verify with numeric diff`
          ],
          example: `import numpy as np
x=2.
f=lambda x:x**2; g=lambda x:np.sin(x)
h=lambda x:f(x)*g(x)
h1=(2*x)*np.sin(x)+x**2*np.cos(x)
print("product rule:", h1)`,
          output: `product rule at x=2`
        },
        {
          id: `dr-chain`,
          title: `Chain Rule`,
          content: `**Chain rule**: (f∘g)'(x) = f'(g(x))·g'(x). Multivariate: dz/dx = dz/dy · dy/dx. Deep networks: ∂L/∂x₁ = (∂L/∂x_n)(∂x_n/∂x_{n−1})...(∂x₂/∂x₁) product of Jacobians—backprop. **Computational graph** tracks dependencies. Reverse-mode autodiff efficient when many inputs, one output (typical loss). Forward-mode for few inputs. Chain rule is foundation of automatic differentiation in PyTorch/JAX. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `(f∘g)'(x) = f'(g(x))·g'(x)`,
            `∂L/∂w = ∂L/∂y · ∂y/∂w`,
            `Backprop = chain rule on graph`,
            `Reverse-mode: one backward pass`,
            `Jacobian product along path`
          ],
          diagram: `   x → g → u → f → L

   dL/dx = dL/df · df/du · du/dx

   chain multiplies local derivatives
   │
   │  · · ·
   └──────────
   (see formulas above)
   │`,
          keyPoints: [
            `Chain rule powers backprop`,
            `Local grads multiply along path`,
            `Reverse-mode efficient for DL`,
            `Graph tracks computation`,
            `Vanishing = product of small terms`
          ],
          example: `import numpy as np
# L=(x²+1)³ at x=1: dL/dx=3(x²+1)²·2x
x=1.; inner=x**2+1; print(3*inner**2*2*x)`,
          output: `chain: 24 at x=1`
        },
        {
          id: `dr-common`,
          title: `Common ML Derivatives`,
          content: `MSE: L=(1/2)(y−ŷ)², ∂L/∂ŷ=ŷ−y. BCE with logits handled in fused ops. L2 reg: λ||w||², ∂/∂w=2λw. Cross-entropy w softmax combined derivative simplifies to ŷ−y one-hot. tanh': 1−tanh². GELU, SiLU modern activations have known derivatives. BatchNorm backward involves batch statistics derivatives. Keeping cheat sheet accelerates debugging custom layers without autograd. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `MSE: ∂L/∂ŷ = ŷ − y`,
            `L2: ∂(λ||w||²)/∂w = 2λw`,
            `Softmax+CE: ∂L/∂z = ŷ − y`,
            `tanh': 1 − tanh²(x)`,
            `ReLU': 1 if x>0 else 0`
          ],
          diagram: `   CE + softmax magic:

   gradient w.r.t logits
   = predicted − true

   elegant single form
   │
   │  · · ·
   └──────────
   (see formulas above)`,
          keyPoints: [
            `MSE gradient simple residual`,
            `Softmax+CE simplifies beautifully`,
            `L2 adds 2λw to gradient`,
            `Know activation derivatives`,
            `Fused ops for stability`
          ],
          example: `import numpy as np
y=np.array([1.,0.,0.]); yhat=np.array([0.7,0.2,0.1])
print("grad CE approx:", yhat-y)`,
          output: `yhat - y`
        },
        {
          id: `math-derivative-rules-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Differentiation Rules sits in the **math** track of the Data Science Master curriculum. Power, product, quotient, and chain rules for efficient differentiation.

Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directly to numpy operations and loss functions.

For math-derivative-rules, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (intermediate):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Differentiation Rules
meta = {"topic_id": "math-derivative-rules", "track": "math", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-derivative-rules math intermediate`,
          keyPoints: [
            `Core theory of Differentiation Rules ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `math-derivative-rules-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Differentiation Rules. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For math-derivative-rules, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for math-derivative-rules
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-derivative-rules", "Differentiation Rules")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-derivative-rules Differentiation`,
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
          id: `math-derivative-rules-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Differentiation Rules often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on math-derivative-rules, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("math-derivative-rules", "Differentiation Rules")
debug_step("section_count", 4)`,
          output: `[math-derivative-rules] 'Differentiation Rules' (str)
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
          id: `math-derivative-rules-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Differentiation Rules shows up wherever math skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around math-derivative-rules align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Differentiation Rules
skills = ["math", "intermediate", "math-derivative-rules"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, intermediate, math-derivative-rules`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Differentiation Rules to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-dr-1`,
          question: `Differentiate f(x)=x²·sin(x) at x=π/4 using product rule.`,
          solution: `import numpy as np
x=np.pi/4
print(2*x*np.sin(x)+x**2*np.cos(x))`,
          difficulty: `easy`
        },
        {
          id: `ex-dr-2`,
          question: `Chain rule: d/dx (3x+1)⁵ at x=0.`,
          solution: `import numpy as np
x=0.; inner=3*x+1; print(5*inner**4*3)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 50,
      module: `module-math-04`,
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
      id: `math-taylor`,
      title: `Taylor Series & Approximation`,
      description: `Polynomial approximations and numerical uses of Taylor expansions.`,
      level: `intermediate`,
      track: `math`,
      sections: [
        {
          id: `tay-def`,
          title: `Taylor Series Definition`,
          content: `Taylor expansion of f about a: f(x)=∑_{n=0}^∞ f^(n)(a)/n! · (x−a)^n. **Maclaurin** is a=0. f(x)≈f(a)+f'(a)(x−a)+f''(a)(x−a)²/2! truncated. Remainder Lagrange form bounds error. sin(x), cos(x), e^x have infinite radius convergence. Approximate functions locally for analysis. Newton method uses first-order Taylor. Second-order Taylor gives Newton step with Hessian. In ML, linearization of nonlinear models near operating point.

**Extended exploration — Taylor Series & Approximation:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Taylor Series Definition" connects to polynomial approximations and numerical uses of taylor expansions. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
          formulas: [
            `f(x) = ∑ f^(n)(a)/n! · (x−a)^n`,
            `T₁: f(a) + f'(a)(x−a)`,
            `Maclaurin: expand at 0`,
            `e^x = ∑ x^n/n!`,
            `sin(x) = ∑ (−1)^n x^(2n+1)/(2n+1)!`
          ],
          diagram: `   local approx near a:

   f(x) ≈ tangent parabola
        ╱ curve f
       ╱___ approx
      a
   │
   │  · · ·
   └──────────
   (see formulas above)`,
          keyPoints: [
            `Taylor = local polynomial fit`,
            `More terms → better approx`,
            `Maclaurin common at origin`,
            `e, sin, cos standard series`,
            `Linearization = first-order Taylor`
          ],
          example: `import numpy as np
x=0.1
print("e^x approx:", 1+x+x**2/2, "exact:", np.exp(x))`,
          output: `2nd order close`
        },
        {
          id: `tay-approx`,
          title: `Approximation Error`,
          content: `Truncation error from omitted terms. Higher-order terms matter far from expansion point. **Big-O** notation: f(x)=f(a)+f'(a)(x−a)+O((x−a)²). Choose expansion point near region of interest. Gradient descent is first-order—linear model of loss locally. Newton uses second-order curvature. Laplace approximation approximates integrals via Gaussian from second-order Taylor of log integrand—used in variational inference.

**Extended exploration — Taylor Series & Approximation:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Approximation Error" connects to polynomial approximations and numerical uses of taylor expansions. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
          formulas: [
            `Error ~ f''(ξ)(x−a)²/2 (2nd order)`,
            `Far from a: need more terms`,
            `GD: first-order step`,
            `Newton: second-order step`,
            `Laplace approx: Taylor on log p`
          ],
          diagram: `   error grows with |x-a|

   good:  ·── approx ≈ f
   bad:   ·── diverge far out
   │
   │  · · ·
   └──────────
   (see formulas above)
   │
   │  · · ·`,
          keyPoints: [
            `Stay near expansion point`,
            `Newton faster near minimum`,
            `GD OK with small steps`,
            `Laplace for Bayesian approx`,
            `Big-O tracks leading error`
          ],
          example: `import numpy as np
x=np.linspace(-1,1,5)
approx=1+x+x**2/2+x**3/6
print("err:", np.abs(np.exp(x)-approx))`,
          output: `error small near 0`
        },
        {
          id: `tay-multivar`,
          title: `Multivariate Taylor`,
          content: `f(x+δ)≈f(x)+∇f(x)ᵀδ+½δᵀH(x)δ where H is Hessian. Gradient ∇f vector of first partials. Hessian H_ij=∂²f/∂x_i∂x_j symmetric if f twice differentiable. Critical point classification via H eigenvalues: all positive definite → min; all negative → max; mixed → saddle. Gauss-Newton approximates Hessian in nonlinear least squares. Natural gradient uses Fisher instead of Hessian. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `f(x+δ) ≈ f(x) + ∇fᵀδ + ½δᵀHδ`,
            `H_ij = ∂²f/∂x_i∂x_j`,
            `H positive definite → local min`,
            `Mixed eigenvalues → saddle`,
            `Gauss-Newton approx Hessian`
          ],
          diagram: `   Hessian eigenvalues at critical:

   all + : bowl min
   all − : cap max
   mixed : saddle ╱╲
   │
   │  · · ·
   └──────────
   (see formulas above)
   │`,
          keyPoints: [
            `Gradient is first-order term`,
            `Hessian captures curvature`,
            `Eigenvalues classify critical pts`,
            `Saddles plague high-D opt`,
            `Second-order methods use H`
          ],
          example: `import numpy as np
# f=x²+y², H=[[2,0],[0,2]]
H=np.array([[2.,0.],[0.,2.]])
print("eig:", np.linalg.eigvalsh(H))`,
          output: `all positive → min`
        },
        {
          id: `tay-ml`,
          title: `Taylor in ML Optimization`,
          content: `Loss linearization L(θ+Δ)≈L(θ)+∇L·Δ guides GD step. **Newton**: Δ=−H⁻¹∇L from quadratic model. **Adam** adapts steps per parameter—not pure Taylor but related momentum. **Laplace approximation** for posterior p(θ|D)≈N(θ*, H⁻¹) at MAP. Linear models are first-order Taylor of complex models locally. Understanding Taylor links learning rate choice to validity of linear approximation. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `GD step from 1st order Taylor`,
            `Newton from 2nd order model`,
            `MAP + Laplace ≈ Gaussian posterior`,
            `Small η: Taylor accurate`,
            `Large η: higher terms matter`
          ],
          diagram: `   η too large:

   linear approx breaks
   overshoot minimum
   oscillate diverge
   │
   │  · · ·
   └──────────
   (see formulas above)
   │`,
          keyPoints: [
            `LR tied to Taylor validity`,
            `Newton quadratic convergence local`,
            `Laplace for uncertainty approx`,
            `Linear models = local approx`,
            `Higher-order methods costly`
          ],
          example: `import numpy as np
L=lambda t:t**2; grad=lambda t:2*t
t=3.; eta=0.1
print("GD step:", t-eta*grad(t))`,
          output: `t decreases`
        },
        {
          id: `math-taylor-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Taylor Series & Approximation sits in the **math** track of the Data Science Master curriculum. Polynomial approximations and numerical uses of Taylor expansions.

Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directly to numpy operations and loss functions.

For math-taylor, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (intermediate):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Taylor Series & Approximation
meta = {"topic_id": "math-taylor", "track": "math", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-taylor math intermediate`,
          keyPoints: [
            `Core theory of Taylor Series & Approximation ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `math-taylor-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Taylor Series & Approximation. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For math-taylor, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for math-taylor
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-taylor", "Taylor Series & Approximation")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-taylor Taylor`,
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
          id: `math-taylor-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Taylor Series & Approximation often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on math-taylor, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("math-taylor", "Taylor Series & Approximation")
debug_step("section_count", 4)`,
          output: `[math-taylor] 'Taylor Series & Approximation' (str)
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
          id: `math-taylor-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Taylor Series & Approximation shows up wherever math skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around math-taylor align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Taylor Series & Approximation
skills = ["math", "intermediate", "math-taylor"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, intermediate, math-taylor`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Taylor Series & Approximation to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-tay-1`,
          question: `Approx e^0.1 with 3-term Maclaurin.`,
          solution: `import numpy as np
x=0.1
print(1+x+x**2/6, np.exp(x))`,
          difficulty: `easy`
        },
        {
          id: `ex-tay-2`,
          question: `2nd order Taylor of x² at a=3.`,
          solution: `import numpy as np
a=3.; x=3.5
print(9+6*(x-a)+(x-a)**2, x**2)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 50,
      module: `module-math-04`,
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
      id: `math-integrals`,
      title: `Integrals & Area`,
      description: `Definite and indefinite integrals, Fundamental Theorem of Calculus.`,
      level: `intermediate`,
      track: `math`,
      sections: [
        {
          id: `int-def`,
          title: `Integral Definition`,
          content: `**Riemann sum**: ∫_a^b f(x)dx ≈ ∑ f(x_i)Δx limit as partition refines. **Indefinite integral** ∫f(x)dx = F(x)+C where F'=f. **Definite integral** gives signed area under curve. Fundamental Theorem: ∫_a^b f(x)dx = F(b)−F(a) if F'=f. Probability: ∫ p(x)dx=1 for PDF. Expected value E[X]=∫ x p(x) dx. Loss as integral over data distribution population risk. Monte Carlo integrates via sampling average. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `∫_a^b f(x)dx = signed area`,
            `F(b) − F(a) if F' = f`,
            `∫ p(x)dx = 1 (PDF)`,
            `E[X] = ∫ x p(x) dx`,
            `Riemann: ∑ f(x_i) Δx`
          ],
          diagram: `   ∫_a^b f(x) dx = shaded area

        f(x)
       ╱╲
      ╱  ╲___
     ╱ area ╲
   ─a────────b── x
   │
   │  · · ·
   └──────────`,
          keyPoints: [
            `Integral accumulates infinitesimals`,
            `FTC links derivative and integral`,
            `PDF integrates to 1`,
            `Expectation is integral`,
            `Monte Carlo for high-D integrals`
          ],
          example: `import numpy as np
f=lambda x:x**2
a,b=0,2
x=np.linspace(a,b,1000)
print("trapz:", np.trapz(f(x),x), "exact:", 8/3)`,
          output: `8/3`
        },
        {
          id: `int-rules`,
          title: `Integration Techniques`,
          content: `Power: ∫x^n dx = x^{n+1}/(n+1)+C, n≠−1. ∫1/x dx = ln|x|+C. **Substitution** u=g(x). **Integration by parts** ∫u dv = uv − ∫v du. **Partial fractions** for rational functions. Gaussian integral ∫ e^{−x²} dx = √π over ℝ. Many ML expectations reduce to known integrals or numerical quadrature. scipy.integrate.quad for 1D numeric integration. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Extended exploration — Integrals & Area:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Integration Techniques" connects to definite and indefinite integrals, fundamental theorem of calculus. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
          formulas: [
            `∫ x^n dx = x^(n+1)/(n+1) + C`,
            `∫ e^x dx = e^x + C`,
            `∫ 1/x dx = ln|x| + C`,
            `∫ e^(−x²) dx = √π (over ℝ)`,
            `By parts: ∫u dv = uv − ∫v du`
          ],
          diagram: `   by parts picks u,dv:

   ∫ u dv = u·v − ∫ v du

   choose u that simplifies when diff
   │
   │  · · ·
   └──────────
   (see formulas above)
   │`,
          keyPoints: [
            `Substitution reverses chain rule`,
            `By parts for products`,
            `Gaussian integral famous`,
            `Numerical quad when no closed form`,
            `PDF normalization uses integrals`
          ],
          example: `import numpy as np
from scipy import integrate
val,_=integrate.quad(lambda x:np.exp(-x**2),-np.inf,np.inf)
print("gaussian:", val, "sqrt pi:", np.sqrt(np.pi))`,
          output: `sqrt pi`
        },
        {
          id: `int-prob`,
          title: `Integrals in Probability`,
          content: `Continuous PDF p(x)≥0, ∫p=1. CDF F(x)=∫_{−∞}^x p(t)dt. E[g(X)]=∫ g(x)p(x)dx. Variance via ∫ (x−μ)²p(x)dx. Joint PDF integrates to 1 over ℝ². Marginal: p(x)=∫ p(x,y)dy. Change of variables: if y=g(x), ∫ f(y)dy = ∫ f(g(x))|g'(x)|dx. Jacobian determinant generalizes to multivariate. Evidence ∫ p(D|θ)p(θ)dθ intractable—MCMC/VI approximate. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Extended exploration — Integrals & Area:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Integrals in Probability" connects to definite and indefinite integrals, fundamental theorem of calculus. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
          formulas: [
            `∫ p(x) dx = 1`,
            `F(x) = ∫_{−∞}^x p(t) dt`,
            `E[g(X)] = ∫ g(x) p(x) dx`,
            `Marginal: ∫ p(x,y) dy`,
            `Change vars: multiply by |dx/dy|`
          ],
          diagram: `   PDF normalization:

   area under p(x) = 1

   p(x)
   │  ╱╲
   │ ╱  ╲
   └──┴───┴── x
   total area = 1
   │`,
          keyPoints: [
            `PDF must integrate to 1`,
            `CDF is cumulative integral`,
            `Expectations are integrals`,
            `Jacobian in multivariate change`,
            `Evidence integral often hard`
          ],
          example: `import numpy as np
x=np.linspace(-4,4,1000)
p=np.exp(-x**2/2)/np.sqrt(2*np.pi)
print("norm check:", np.trapz(p,x))`,
          output: `≈ 1.0`
        },
        {
          id: `int-mc`,
          title: `Monte Carlo Integration`,
          content: `Estimate ∫ f(x)p(x)dx ≈ (1/N)∑ f(x_i) with x_i~p—unbiased if samples from p. **Importance sampling** sample from q instead, weight f/q. **MCMC** generates correlated samples from posterior. High-dimensional integrals: MC often beats grid. Variance decreases O(1/√N). Used in Bayesian model evidence, policy gradient expectations, and dropout as approximate integral over weights. np.random provides sampling primitives.

**Extended exploration — Integrals & Area:** Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers. The section "Monte Carlo Integration" connects to definite and indefinite integrals, fundamental theorem of calculus. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directl…`,
          formulas: [
            `E[f(X)] ≈ (1/N) ∑ f(x_i)`,
            `Var ∝ 1/N`,
            `Importance: weight by p/q`,
            `MCMC for posterior expectations`,
            `High-D: MC scales better than grid`
          ],
          diagram: `   MC integration:

   sample · · · under p(x)
   average f(x_i)

   more samples → less error
   error ~ 1/√N
   │
   │  · · ·
   └──────────`,
          keyPoints: [
            `MC for high-dimensional integrals`,
            `Importance sampling reduces variance`,
            `MCMC for Bayesian inference`,
            `1/√N convergence slow but general`,
            `Dropout ≈ MC over masks`
          ],
          example: `import numpy as np
np.random.seed(0)
samples=np.random.randn(100000)
est=np.mean(samples**2)
print("E[X²] est:", est, "true:", 1.0)`,
          output: `≈ 1.0`
        },
        {
          id: `math-integrals-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Integrals & Area sits in the **math** track of the Data Science Master curriculum. Definite and indefinite integrals, Fundamental Theorem of Calculus.

Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directly to numpy operations and loss functions.

For math-integrals, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (intermediate):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Integrals & Area
meta = {"topic_id": "math-integrals", "track": "math", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-integrals math intermediate`,
          keyPoints: [
            `Core theory of Integrals & Area ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `math-integrals-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Integrals & Area. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For math-integrals, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for math-integrals
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-integrals", "Integrals & Area")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-integrals Integrals`,
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
          id: `math-integrals-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Integrals & Area often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on math-integrals, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("math-integrals", "Integrals & Area")
debug_step("section_count", 4)`,
          output: `[math-integrals] 'Integrals & Area' (str)
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
          id: `math-integrals-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Integrals & Area shows up wherever math skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around math-integrals align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Integrals & Area
skills = ["math", "intermediate", "math-integrals"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, intermediate, math-integrals`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Integrals & Area to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-int-1`,
          question: `Integrate x² from 0 to 2 via trapz.`,
          solution: `import numpy as np
x=np.linspace(0,2,1000); print(np.trapz(x**2,x))`,
          difficulty: `easy`
        },
        {
          id: `ex-int-2`,
          question: `Estimate π via MC: mean(4*1_{x²+y²≤1}).`,
          solution: `import numpy as np
n=100000
x,y=np.random.rand(2,n)
print(4*np.mean(x**2+y**2<=1))`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 50,
      module: `module-math-04`,
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
