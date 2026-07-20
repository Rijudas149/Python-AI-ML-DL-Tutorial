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
          content: `### Introduction

lim_{x→a} f(x) = L means f(x) gets arbitrarily close to L as x approaches a — the limit need not equal f(a). **One-sided limits** x→a⁻ and x→a⁺ must agree for the two-sided limit to exist.

### Limit Definition

**Limits at infinity** describe horizontal asymptotes and long-run behavior. The ε-δ definition makes this precise: ∀ε>0, ∃δ>0 such that 0<|x−a|<δ ⇒ |f(x)−L|<ε.

Limits are the foundation for derivatives and integrals.

### Key Ideas

- Limit ≠ function value at point
- Both one-sided limits must agree
- Infinity limits describe asymptotes
- ε-δ formalizes closeness
- Foundation for derivatives

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `lim_{x→a} f(x) = L`,
            `lim_{x→a} f(x) exists ⇔ lim_{x→a⁻} f(x) = lim_{x→a⁺} f(x)`,
            `lim_{x→∞} f(x) = L (horizontal asymptote y = L)`,
            `ε-δ: ∀ε>0 ∃δ>0: 0<|x−a|<δ ⇒ |f(x)−L|<ε`
          ],
          diagram: `f(x) near a:
        L ─ ─ ─ ─ ─ target
        ·    ·  f(x)
        ────┼──── x
            a
   lim_{x→a} f(x) = L`,
          keyPoints: [
            `Limit ≠ function value at point`,
            `Both one-sided limits must agree`,
            `Infinity limits describe asymptotes`,
            `ε-δ formalizes closeness`,
            `Foundation for derivatives`
          ],
          example: `import numpy as np
f = lambda x: (x**2-1)/(x-1)
x = np.array([0.9,0.99,0.999,1.001,1.01])
print("f(x):", f(x))`,
          output: `f(x) → 2 as x→1`,
          commonMistakes: [
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`,
            `Using correlation when variables are non-linear — relationship may be missed`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `lim-rules`,
          title: `Limit Laws`,
          content: `### Introduction

If lim f=L and lim g=M: lim(f+g)=L+M, lim(fg)=LM, lim(f/g)=L/M when M≠0. Polynomials and sums/products of continuous functions inherit limits term by term.

### Limit Laws

Key special limits: lim_{x→0} sin(x)/x = 1 and lim_{x→0} (e^x−1)/x = 1. The **squeeze theorem** traps f between g and h with the same limit.

Composition rules apply when inner limits stay in the domain.

### Key Ideas

- Limit laws combine simple limits
- sin(x)/x key trig limit
- Squeeze for bounded functions
- Continuity from limit = value
- Composition needs care at boundaries

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `lim(f+g) = lim f + lim g`,
            `lim(f/g) = lim f / lim g`,
            `lim_{x→0} sin(x)/x = 1`,
            `lim_{x→0} (e^x − 1)/x = 1`,
            `Squeeze: g≤f≤h → same limit`
          ],
          diagram: `squeeze:
   h(x) ────────
        f(x) ~~~ squeezed
   g(x) ────────
        → same limit L`,
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
          output: `→ 1 near 0`,
          commonMistakes: [
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`,
            `Using correlation when variables are non-linear — relationship may be missed`,
            `Applying log to zero or negative values without a shift`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`
          ]
        },
        {
          id: `lim-lhopital`,
          title: `L'Hôpital's Rule`,
          content: `### Introduction

Direct substitution sometimes yields an **indeterminate form** — most commonly 0/0 or ∞/∞ — where the limit is not obvious from the ratio alone. **L'Hôpital's rule** says: if f and g are differentiable near a, g'(x)≠0 near a, and lim f(x)=lim g(x)=0 (or both →±∞), then lim_{x→a} f(x)/g(x) = lim_{x→a} f'(x)/g'(x) whenever the right-hand limit exists.

### L'Hôpital's Rule

Apply repeatedly if the result is still indeterminate. Other forms (0·∞, ∞−∞, 0⁰, 1^∞) require algebra first — rewrite into 0/0 or ∞/∞.

Always verify conditions; the rule can fail if derivatives oscillate without a limit.

### Key Ideas

- Works on 0/0 and ∞/∞ directly
- Differentiate numerator and denominator
- May need several applications
- Rewrite other indeterminate forms first
- Check that derivative limit exists

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `0/0 or ∞/∞ indeterminate → apply L'Hôpital's rule`,
            `lim_{x→a} f/g = lim_{x→a} f'/g' (when conditions hold)`,
            `Apply repeatedly until the limit is determinate`,
            `0·∞ indeterminate → rewrite as 0/(1/∞) first`,
            `lim_{x→0} sin(x)/x = lim_{x→0} cos(x) = 1`
          ],
          diagram: `L'Hôpital for 0/0 at a:
        L ─ ─ ─ ─ ─ limit of f/g
        ·    ·  f(x)/g(x)
        ────┼──── x
            a
   lim f/g = lim f'/g'`,
          keyPoints: [
            `Works on 0/0 and ∞/∞ directly`,
            `Differentiate numerator and denominator`,
            `May need several applications`,
            `Rewrite other indeterminate forms first`,
            `Check that derivative limit exists`
          ],
          example: `import sympy as sp
x = sp.Symbol('x')
expr = (sp.exp(x) - 1) / x
print("limit:", sp.limit(expr, x, 0))
print("L'Hopital check:", sp.limit(sp.diff(sp.exp(x)-1,x)/sp.diff(x,x), x, 0))`,
          output: `limit: 1`,
          commonMistakes: [
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`,
            `Using correlation when variables are non-linear — relationship may be missed`
          ]
        },
        {
          id: `lim-cont`,
          title: `Continuity`,
          content: `### Introduction

f continuous at a if lim_{x→a} f(x)=f(a). **Types of discontinuity**: removable (hole), jump, infinite. Continuous on [a,b] achieves max/min (Extreme Value Theorem).

### Continuity

Intermediate Value Theorem: continuous f with f(a)<0<f(b) has root in (a,b). ML activations: ReLU continuous; sigmoid continuous; step discontinuous. Loss landscapes continuous in parameters for smooth models.

Discontinuities cause optimization issues.

### Key Ideas

- Continuous functions no jumps
- IVT finds roots bracketing
- Activations mostly continuous
- Discontinuities hurt gradients
- Piecewise needs match at joints

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `Continuous at a: lim_{x→a} f(x) = f(a)`,
            `IVT: sign change → root`,
            `EVT: continuous on [a,b] → max/min`,
            `Removable: redefine at hole`,
            `Jump: piecewise mismatch`
          ],
          diagram: `continuous: no break
   removable hole: ○
   jump:`,
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
          output: `kink at 0 still continuous`,
          commonMistakes: [
            `Using correlation when variables are non-linear — relationship may be missed`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`
          ]
        },
        {
          id: `lim-ml`,
          title: `Limits in Optimization`,
          content: `### Introduction

Training seeks θ where loss L(θ) approaches minimum—often lim_{t→∞} L(θ_t) desired. Gradient descent step size η affects convergence limit. As η→0, discrete updates approximate continuous gradient flow ODE.

### Limits in Optimization

Softmax limit as temperature T→0 approaches argmax. Sigmoid limit x→±∞ gives 0/1 hard threshold. Understanding limits clarifies asymptotic behavior of learning curves and regularization paths as λ→0 or λ→∞.

### Key Ideas

- Optimization seeks limiting minimum
- LR too large prevents convergence
- Temperature limits in softmax
- Regularization path limits interpretable
- Asymptotic analysis guides tuning

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `lim_{t→∞} L(θ_t) = L*`,
            `η→0: GD → gradient flow`,
            `lim_{T→0} softmax(z/T) → one-hot vector`,
            `sigmoid(x), x→±∞ → 0 or 1`,
            `lim_{λ→∞} ridge penalty → w → 0`
          ],
          diagram: `loss vs iteration:
   L │╲
     │     ────→ lim L*
     └──────────── t
   convergence = limit behavior`,
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
          output: `decreasing to limit`,
          commonMistakes: [
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Applying log to zero or negative values without a shift`,
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`
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
        },
        {
          id: `ex-lim-3`,
          question: `Use SymPy to evaluate lim (e^x − 1)/x as x→0 (L'Hôpital form).`,
          solution: `import sympy as sp
x=sp.Symbol('x')
print(sp.limit((sp.exp(x)-1)/x, x, 0))`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 45,
      module: `module-math-04`,
      references: [
        {
          id: `khan-limits`,
          title: `Limits and Continuity — Khan Academy`,
          source: `Khan Academy`,
          type: `article`,
          url: `https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-new`,
          description: `Interactive lessons on limits, one-sided limits, squeeze theorem, and continuity.`
        },
        {
          id: `pauls-limits`,
          title: `Limits — Paul's Online Math Notes`,
          source: `Paul's Online Notes`,
          type: `article`,
          url: `https://tutorial.math.lamar.edu/classes/calci/limitsintro.aspx`,
          description: `Clear calculus I notes on limit definition, laws, one-sided limits, and continuity.`
        },
        {
          id: `khan-lhopital`,
          title: `L'Hôpital's Rule — Khan Academy`,
          source: `Khan Academy`,
          type: `article`,
          url: `https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-analytical-applications-new/ab-5-4/a/lhopitals-rule`,
          description: `Step-by-step guide to evaluating 0/0 and ∞/∞ indeterminate forms with practice problems.`
        },
        {
          id: `3blue1brown-calculus`,
          title: `Essence of Calculus`,
          source: `3Blue1Brown`,
          type: `video`,
          url: `https://www.3blue1brown.com/topics/calculus`,
          description: `Geometric intuition for derivatives, integrals, and the chain rule.`
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
          content: `### Introduction

f'(x) = lim_{h→0} [f(x+h)−f(x)]/h **difference quotient**. Geometric: slope of tangent line. Physical: instantaneous rate of change.

### Derivative Definition

Differentiable ⇒ continuous (converse false: |x| at 0). Partial derivative ∂f/∂x_i holds others fixed—multivariate preview. In ML, ∂L/∂w is gradient component telling how loss changes with weight w.

Autodiff computes derivatives algorithmically.

### Key Ideas

- Derivative = instantaneous rate
- Limit of secant slopes
- Gradient collects partials
- Non-differentiable at cusps
- Autodiff automates computation

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `f'(x) = lim_{h→0} (f(x+h)−f(x))/h`,
            `Tangent slope at x`,
            `Differentiable ⇒ continuous`,
            `∂f/∂x_i partial derivative`,
            `∇f = vector of partials`
          ],
          diagram: `secant → tangent as h→0
        f(x)
      ╱ | rise
     ╱  |/run = slope
    ────┼── x
        h→0`,
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
          output: `f'(3): 6.0`,
          commonMistakes: [
            `Applying log to zero or negative values without a shift`,
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Applying log to zero or negative values without a shift`
          ]
        },
        {
          id: `der-interp`,
          title: `Interpretations`,
          content: `### Introduction

**Marginal effect**: ∂y/∂x_i how y changes per unit x_i. **Sensitivity analysis** in models. **Jacobian** matrix of all partial derivatives for vector functions.

### Interpretations

**Hessian** second derivatives for curvature. Sign of derivative: increasing vs decreasing. Critical points where f'=0: potential max/min/inflection.

Convex functions have non-negative second derivative. Loss gradient points uphill; descent uses −∇L.

### Key Ideas

- Gradient points uphill
- Descent uses negative gradient
- Jacobian for vector maps
- Hessian for curvature
- Critical points need second test

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `f'(x)>0 → increasing`,
            `f'(x)=0 → critical point`,
            `f''(x)>0 → convex (local)`,
            `Jacobian J_ij = ∂f_i/∂x_j`,
            `Gradient descent: θ -= η∇L`
          ],
          diagram: `f'(x) sign:
   f'>0: climbing ↗
   f'<0: falling ↘
   f'=0: flat ─── (critical)
   GD goes opposite gradient ↓`,
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
          output: `grad zero at x=0`,
          commonMistakes: [
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `der-numeric`,
          title: `Numerical Differentiation`,
          content: `### Introduction

Forward diff: f'(x)≈(f(x+h)−f(x))/h, error O(h). Central diff: (f(x+h)−f(x−h))/(2h), error O(h²) better. Choose h~√ε_machine for float64.

### Numerical Differentiation

**Finite differences** verify autodiff implementations. np.gradient for discrete arrays. Too small h causes cancellation error; too large truncation error. Jacobian check: compare autograd to finite diff in unit tests for custom layers.

### Key Ideas

- Central more accurate
- Balance truncation vs roundoff
- gradient check validates backprop
- np.gradient for discrete data
- Autodiff preferred in training

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `Forward: (f(x+h)−f(x))/h`,
            `Central: (f(x+h)−f(x−h))/(2h)`,
            `Error central O(h²)`,
            `h ≈ 1e-5 typical for float64`,
            `gradient check in DL debugging`
          ],
          diagram: `trade-off in h:
   large h → truncation error
   small h → cancellation noise
         ╲  ╱  sweet spot ~1e-5`,
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
          output: `matches cos(1)`,
          commonMistakes: [
            `Using correlation when variables are non-linear — relationship may be missed`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`
          ]
        },
        {
          id: `der-ml`,
          title: `Derivatives in Loss Landscapes`,
          content: `### Introduction

Loss L(θ) differentiable in θ for smooth models. Surface plot shows valleys and saddles. Gradient ∇L perpendicular to level curves.

### Derivatives in Loss Landscapes

Zero gradient at stationary points—local min, max, or saddle. Plateau: gradient near zero slows learning. Sharp minima vs flat minima generalization debate.

ReLU non-differentiable at 0 but subgradient methods work. Understanding derivatives essential for all gradient-based training.

### Key Ideas

- Stationary ≠ always minimum
- Saddles common in high-D
- Plateaus need adaptive LR
- Subgradients extend to ReLU
- Visualize 2D slices for intuition

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `∇L(θ) = 0 at stationary points`,
            `Saddle: grad=0 but not extremum`,
            `Plateau: |∇L| ≈ 0 slow training`,
            `ReLU subgradient at 0`,
            `Flat minima may generalize better`
          ],
          diagram: `loss surface (2 params):
        ╱╲  saddle
       ╱  ╲╱╲
      ╱ valley╲
     local min`,
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
          output: `grad at (1,1)`,
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`,
            `Using correlation when variables are non-linear — relationship may be missed`,
            `Applying log to zero or negative values without a shift`
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
      estimatedMinutes: 35,
      module: `module-math-04`,
      references: [
        {
          id: `khan-derivatives`,
          title: `Derivatives — Khan Academy`,
          source: `Khan Academy`,
          type: `article`,
          url: `https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-1-new`,
          description: `Definition of the derivative, rules, and applications with worked examples.`
        },
        {
          id: `pauls-derivatives`,
          title: `Derivatives — Paul's Online Math Notes`,
          source: `Paul's Online Notes`,
          type: `article`,
          url: `https://tutorial.math.lamar.edu/classes/calci/derivatives.aspx`,
          description: `Definition, interpretation, and derivative rules with many practice problems.`
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
          id: `pytorch-autograd`,
          title: `PyTorch Autograd Mechanics`,
          source: `PyTorch`,
          type: `documentation`,
          url: `https://pytorch.org/tutorials/beginner/blitz/autograd_tutorial.html`,
          description: `Automatic differentiation and computational graph construction.`
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
          content: `### Introduction

Power: d/dx x^n = n x^{n−1}. Constant multiple: (cf)'=cf'. Exponential: d/dx e^x = e^x.

### Basic Rules

Trig: (sin x)'=cos x, (cos x)'=−sin x. Sigmoid σ(x): σ'(x)=σ(x)(1−σ(x)). Softplus smooth ReLU: d/dx ln(1+e^x).

These rules combine via chain/product to differentiate composite losses. Memorizing common derivatives speeds manual gradient checks.

### Key Ideas

- Power rule most common
- Sigmoid derivative product form
- Sum rule linearizes
- Build complex from simple
- Table speeds manual work

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `d/dx x^n = n x^(n−1)`,
            `d/dx e^x = e^x`,
            `d/dx ln(x) = 1/x`,
            `σ'(x) = σ(x)(1−σ(x))`,
            `(f+g)' = f' + g'`
          ],
          diagram: `rule toolbox:
   power  product  quotient  chain
     ↓       ↓        ↓        ↓
   combine for complex f(x)`,
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
          output: `sigmoid deriv`,
          commonMistakes: [
            `Applying log to zero or negative values without a shift`,
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`,
            `Using correlation when variables are non-linear — relationship may be missed`,
            `Forgetting to check matrix dimensions before multiplying`
          ]
        },
        {
          id: `dr-product`,
          title: `Product & Quotient Rules`,
          content: `### Introduction

**Product**: (fg)' = f'g + fg'. **Quotient**: (f/g)' = (f'g − fg')/g². **Reciprocal**: (1/g)' = −g'/g².

### Product & Quotient Rules

Dot product derivative: d/dt(u·v)=u'·v+u·v'. Matrix product: d/dt(AB)=A'B+AB' when both vary. Used when loss combines products of predictions and weights.

Quotient in softmax derivatives. Careful with order in matrix calculus—not commutative.

### Key Ideas

- Product rule two-term split
- Quotient for ratios
- Matrix product needs order
- Softmax uses quotient structure
- Verify with numeric diff

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `(fg)' = f'g + fg'`,
            `(f/g)' = (f'g − fg')/g²`,
            `d(u·v) = u'·v + u·v'`,
            `d(AB) = A'B + AB'`,
            `(1/g)' = −g'/g²`
          ],
          diagram: `(fg)': two terms
   f ──┐
       ├── product → f'g + fg'
   g ──┘`,
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
          output: `product rule at x=2`,
          commonMistakes: [
            `Applying log to zero or negative values without a shift`,
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`,
            `Using correlation when variables are non-linear — relationship may be missed`,
            `Forgetting to check matrix dimensions before multiplying`
          ]
        },
        {
          id: `dr-chain`,
          title: `Chain Rule`,
          content: `### Introduction

**Chain rule**: (f∘g)'(x) = f'(g(x))·g'(x). Multivariate: dz/dx = dz/dy · dy/dx. Deep networks: ∂L/∂x₁ = (∂L/∂x_n)(∂x_n/∂x_{n−1})...(∂x₂/∂x₁) product of Jacobians—backprop.

### Chain Rule

**Computational graph** tracks dependencies. Reverse-mode autodiff efficient when many inputs, one output (typical loss). Forward-mode for few inputs.

Chain rule is foundation of automatic differentiation in PyTorch/JAX.

### Key Ideas

- Chain rule powers backprop
- Local grads multiply along path
- Reverse-mode efficient for DL
- Graph tracks computation
- Vanishing = product of small terms

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `(f∘g)'(x) = f'(g(x))·g'(x)`,
            `∂L/∂w = ∂L/∂y · ∂y/∂w`,
            `Backprop = chain rule on graph`,
            `Reverse-mode: one backward pass`,
            `Jacobian product along path`
          ],
          diagram: `x → g → u → f → L
   dL/dx = dL/df · df/du · du/dx
   chain multiplies local derivatives`,
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
          output: `chain: 24 at x=1`,
          commonMistakes: [
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`,
            `Using correlation when variables are non-linear — relationship may be missed`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `dr-common`,
          title: `Common ML Derivatives`,
          content: `### Introduction

MSE: L=(1/2)(y−ŷ)², ∂L/∂ŷ=ŷ−y. BCE with logits handled in fused ops. L2 reg: λ||w||², ∂/∂w=2λw.

### Common ML Derivatives

Cross-entropy w softmax combined derivative simplifies to ŷ−y one-hot. tanh': 1−tanh². GELU, SiLU modern activations have known derivatives. BatchNorm backward involves batch statistics derivatives.

Keeping cheat sheet accelerates debugging custom layers without autograd.

### Key Ideas

- MSE gradient simple residual
- Softmax+CE simplifies beautifully
- L2 adds 2λw to gradient
- Know activation derivatives
- Fused ops for stability

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `MSE: ∂L/∂ŷ = ŷ − y`,
            `L2: ∂(λ||w||²)/∂w = 2λw`,
            `Softmax+CE: ∂L/∂z = ŷ − y`,
            `tanh': 1 − tanh²(x)`,
            `ReLU': 1 if x>0 else 0`
          ],
          diagram: `CE + softmax magic:
   gradient w.r.t logits
   = predicted − true
   elegant single form`,
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
          output: `yhat - y`,
          commonMistakes: [
            `Applying log to zero or negative values without a shift`,
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`,
            `Using correlation when variables are non-linear — relationship may be missed`,
            `Forgetting to check matrix dimensions before multiplying`
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
      estimatedMinutes: 35,
      module: `module-math-04`,
      references: [
        {
          id: `khan-derivatives`,
          title: `Derivatives — Khan Academy`,
          source: `Khan Academy`,
          type: `article`,
          url: `https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-1-new`,
          description: `Definition of the derivative, rules, and applications with worked examples.`
        },
        {
          id: `pauls-derivatives`,
          title: `Derivatives — Paul's Online Math Notes`,
          source: `Paul's Online Notes`,
          type: `article`,
          url: `https://tutorial.math.lamar.edu/classes/calci/derivatives.aspx`,
          description: `Definition, interpretation, and derivative rules with many practice problems.`
        },
        {
          id: `pauls-lhopital`,
          title: `L'Hôpital's Rule — Paul's Online Math Notes`,
          source: `Paul's Online Notes`,
          type: `article`,
          url: `https://tutorial.math.lamar.edu/classes/calci/lhospitalsrule.aspx`,
          description: `Worked examples for indeterminate forms and when to apply the rule repeatedly.`
        },
        {
          id: `3blue1brown-calculus`,
          title: `Essence of Calculus`,
          source: `3Blue1Brown`,
          type: `video`,
          url: `https://www.3blue1brown.com/topics/calculus`,
          description: `Geometric intuition for derivatives, integrals, and the chain rule.`
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
          content: `### Introduction

Taylor expansion of f about a: f(x)=∑_{n=0}^∞ f^(n)(a)/n! · (x−a)^n. **Maclaurin** is a=0. f(x)≈f(a)+f'(a)(x−a)+f''(a)(x−a)²/2! truncated. Remainder Lagrange form bounds error. sin(x), cos(x), e^x have infinite radius convergence.

### Taylor Series Definition

Approximate functions locally for analysis. Newton method uses first-order Taylor. Second-order Taylor gives Newton step with Hessian.

In ML, linearization of nonlinear models near operating point.

### Key Ideas

- Taylor = local polynomial fit
- More terms → better approx
- Maclaurin common at origin
- e, sin, cos standard series
- Linearization = first-order Taylor

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `f(x) = ∑ f^(n)(a)/n! · (x−a)^n`,
            `T₁: f(a) + f'(a)(x−a)`,
            `Maclaurin: expand at 0`,
            `e^x = ∑ x^n/n!`,
            `sin(x) = ∑ (−1)^n x^(2n+1)/(2n+1)!`
          ],
          diagram: `local approx near a:
   f(x) ≈ tangent parabola
        ╱ curve f
       ╱___ approx
      a`,
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
          output: `2nd order close`,
          commonMistakes: [
            `Using polynomial degree too high without regularization`,
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Applying log to zero or negative values without a shift`
          ]
        },
        {
          id: `tay-approx`,
          title: `Approximation Error`,
          content: `### Introduction

Truncation error from omitted terms. Higher-order terms matter far from expansion point. **Big-O** notation: f(x)=f(a)+f'(a)(x−a)+O((x−a)²).

### Approximation Error

Choose expansion point near region of interest. Gradient descent is first-order—linear model of loss locally. Newton uses second-order curvature.

Laplace approximation approximates integrals via Gaussian from second-order Taylor of log integrand—used in variational inference.

### Key Ideas

- Stay near expansion point
- Newton faster near minimum
- GD OK with small steps
- Laplace for Bayesian approx
- Big-O tracks leading error

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `Error ~ f''(ξ)(x−a)²/2 (2nd order)`,
            `Far from a: need more terms`,
            `GD: first-order step`,
            `Newton: second-order step`,
            `Laplace approx: Taylor on log p`
          ],
          diagram: `error grows with |x-a|
   good:  ·── approx ≈ f
   bad:   ·── diverge far out`,
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
          output: `error small near 0`,
          commonMistakes: [
            `Using polynomial degree too high without regularization`,
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`,
            `Using correlation when variables are non-linear — relationship may be missed`,
            `Applying log to zero or negative values without a shift`
          ]
        },
        {
          id: `tay-multivar`,
          title: `Multivariate Taylor`,
          content: `### Introduction

f(x+δ)≈f(x)+∇f(x)ᵀδ+½δᵀH(x)δ where H is Hessian. Gradient ∇f vector of first partials. Hessian H_ij=∂²f/∂x_i∂x_j symmetric if f twice differentiable.

### Multivariate Taylor

Critical point classification via H eigenvalues: all positive definite → min; all negative → max; mixed → saddle. Gauss-Newton approximates Hessian in nonlinear least squares. Natural gradient uses Fisher instead of Hessian.

### Key Ideas

- Gradient is first-order term
- Hessian captures curvature
- Eigenvalues classify critical pts
- Saddles plague high-D opt
- Second-order methods use H

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `f(x+δ) ≈ f(x) + ∇fᵀδ + ½δᵀHδ`,
            `H_ij = ∂²f/∂x_i∂x_j`,
            `H positive definite → local min`,
            `Mixed eigenvalues → saddle`,
            `Gauss-Newton approx Hessian`
          ],
          diagram: `Hessian eigenvalues at critical:
   all + : bowl min
   all − : cap max
   mixed : saddle ╱╲`,
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
          output: `all positive → min`,
          commonMistakes: [
            `Not stratifying splits for classification tasks`,
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Applying log to zero or negative values without a shift`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`
          ]
        },
        {
          id: `tay-ml`,
          title: `Taylor in ML Optimization`,
          content: `### Introduction

Loss linearization L(θ+Δ)≈L(θ)+∇L·Δ guides GD step. **Newton**: Δ=−H⁻¹∇L from quadratic model. **Adam** adapts steps per parameter—not pure Taylor but related momentum.

### Taylor in ML Optimization

**Laplace approximation** for posterior p(θ|D)≈N(θ*, H⁻¹) at MAP. Linear models are first-order Taylor of complex models locally. Understanding Taylor links learning rate choice to validity of linear approximation.

### Key Ideas

- LR tied to Taylor validity
- Newton quadratic convergence local
- Laplace for uncertainty approx
- Linear models = local approx
- Higher-order methods costly

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `GD step from 1st order Taylor`,
            `Newton from 2nd order model`,
            `MAP + Laplace ≈ Gaussian posterior`,
            `Small η: Taylor accurate`,
            `Large η: higher terms matter`
          ],
          diagram: `η too large:
   linear approx breaks
   overshoot minimum
   oscillate diverge`,
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
          output: `t decreases`,
          commonMistakes: [
            `Using polynomial degree too high without regularization`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Using polynomial degree too high without regularization`
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
      estimatedMinutes: 35,
      module: `module-math-04`,
      references: [
        {
          id: `3blue1brown-calculus`,
          title: `Essence of Calculus`,
          source: `3Blue1Brown`,
          type: `video`,
          url: `https://www.3blue1brown.com/topics/calculus`,
          description: `Geometric intuition for derivatives, integrals, and the chain rule.`
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
          content: `### Introduction

**Riemann sum**: ∫_a^b f(x)dx ≈ ∑ f(x_i)Δx limit as partition refines. **Indefinite integral** ∫f(x)dx = F(x)+C where F'=f. **Definite integral** gives signed area under curve.

### Integral Definition

Fundamental Theorem: ∫_a^b f(x)dx = F(b)−F(a) if F'=f. Probability: ∫ p(x)dx=1 for PDF. Expected value E[X]=∫ x p(x) dx.

Loss as integral over data distribution population risk. Monte Carlo integrates via sampling average.

### Key Ideas

- Integral accumulates infinitesimals
- FTC links derivative and integral
- PDF integrates to 1
- Expectation is integral
- Monte Carlo for high-D integrals

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `∫_a^b f(x)dx = signed area`,
            `F(b) − F(a) if F' = f`,
            `∫ p(x)dx = 1 (PDF)`,
            `E[X] = ∫ x p(x) dx`,
            `Riemann: ∑ f(x_i) Δx`
          ],
          diagram: `∫_a^b f(x) dx = shaded area
        f(x)
     ╱ area ╲
   ─a────────b── x`,
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
          output: `8/3`,
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `int-rules`,
          title: `Integration Techniques`,
          content: `### Introduction

Power: ∫x^n dx = x^{n+1}/(n+1)+C, n≠−1. ∫1/x dx = ln|x|+C. **Integration by parts** ∫u dv = uv − ∫v du.

### Integration Techniques

**Partial fractions** for rational functions. Gaussian integral ∫ e^{−x²} dx = √π over ℝ.

Many ML expectations reduce to known integrals or numerical quadrature. scipy.integrate.quad for 1D numeric integration.

### Key Ideas

- Substitution reverses chain rule
- By parts for products
- Gaussian integral famous
- Numerical quad when no closed form
- PDF normalization uses integrals

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `∫ x^n dx = x^(n+1)/(n+1) + C`,
            `∫ e^x dx = e^x + C`,
            `∫ 1/x dx = ln|x| + C`,
            `∫ e^(−x²) dx = √π (over ℝ)`,
            `By parts: ∫u dv = uv − ∫v du`
          ],
          diagram: `by parts picks u,dv:
   ∫ u dv = u·v − ∫ v du
   choose u that simplifies when diff`,
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
          output: `sqrt pi`,
          commonMistakes: [
            `Using correlation when variables are non-linear — relationship may be missed`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`
          ]
        },
        {
          id: `int-prob`,
          title: `Integrals in Probability`,
          content: `### Introduction

Continuous PDF p(x)≥0, ∫p=1. Variance via ∫ (x−μ)²p(x)dx. Joint PDF integrates to 1 over ℝ².

### Integrals in Probability

Marginal: p(x)=∫ p(x,y)dy. Change of variables: if y=g(x), ∫ f(y)dy = ∫ f(g(x))|g'(x)|dx. Jacobian determinant generalizes to multivariate.

Evidence ∫ p(D|θ)p(θ)dθ intractable—MCMC/VI approximate.

### Key Ideas

- PDF must integrate to 1
- CDF is cumulative integral
- Expectations are integrals
- Jacobian in multivariate change
- Evidence integral often hard

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `∫ p(x) dx = 1`,
            `F(x) = ∫_{−∞}^x p(t) dt`,
            `E[g(X)] = ∫ g(x) p(x) dx`,
            `Marginal: ∫ p(x,y) dy`,
            `Change vars: multiply by |dx/dy|`
          ],
          diagram: `PDF normalization:
   area under p(x) = 1
   p(x)
   └──┴───┴── x
   total area = 1`,
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
          output: `≈ 1.0`,
          commonMistakes: [
            `Forgetting to check matrix dimensions before multiplying`,
            `Applying log to zero or negative values without a shift`,
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`,
            `Using correlation when variables are non-linear — relationship may be missed`
          ]
        },
        {
          id: `int-mc`,
          title: `Monte Carlo Integration`,
          content: `### Introduction

Estimate ∫ f(x)p(x)dx ≈ (1/N)∑ f(x_i) with x_i~p—unbiased if samples from p. **Importance sampling** sample from q instead, weight f/q. **MCMC** generates correlated samples from posterior.

### Monte Carlo Integration

High-dimensional integrals: MC often beats grid. Variance decreases O(1/√N). Used in Bayesian model evidence, policy gradient expectations, and dropout as approximate integral over weights. np.random provides sampling primitives.

### Key Ideas

- MC for high-dimensional integrals
- Importance sampling reduces variance
- MCMC for Bayesian inference
- 1/√N convergence slow but general
- Dropout ≈ MC over masks

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `E[f(X)] ≈ (1/N) ∑ f(x_i)`,
            `Var ∝ 1/N`,
            `Importance: weight by p/q`,
            `MCMC for posterior expectations`,
            `High-D: MC scales better than grid`
          ],
          diagram: `MC integration:
   sample · · · under p(x)
   average f(x_i)
   more samples → less error
   error ~ 1/√N`,
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
          output: `≈ 1.0`,
          commonMistakes: [
            `Applying log to zero or negative values without a shift`,
            `Exploration rate ε set to 0 too early — agent never discovers better actions`,
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`,
            `Using correlation when variables are non-linear — relationship may be missed`
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
      estimatedMinutes: 35,
      module: `module-math-04`,
      references: [
        {
          id: `3blue1brown-calculus`,
          title: `Essence of Calculus`,
          source: `3Blue1Brown`,
          type: `video`,
          url: `https://www.3blue1brown.com/topics/calculus`,
          description: `Geometric intuition for derivatives, integrals, and the chain rule.`
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
          id: `bishop-prml`,
          title: `Pattern Recognition and Machine Learning`,
          source: `Cambridge`,
          type: `book`,
          url: `https://www.microsoft.com/en-us/research/publication/pattern-recognition-machine-learning/`,
          description: `Rigorous treatment of probability, inference, and classical ML algorithms.`
        },
        {
          id: `cover-thomas-info-theory`,
          title: `Elements of Information Theory`,
          source: `Wiley`,
          type: `book`,
          url: `https://www.elementsofinformationtheory.com/`,
          description: `Definitive reference for entropy, mutual information, and coding theory.`
        }
      ]
    }
];
