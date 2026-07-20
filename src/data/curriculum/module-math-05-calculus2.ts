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
          content: `### Introduction

For f(x₁,...,x_n), **partial derivative** ∂f/∂x_i = lim_{h→0} [f(...,x_i+h,...)-f(...,x_i,...)]/h holding other x_j fixed. Notation ∂f/∂x_i or f_{x_i}. **Gradient** ∇f collects all partials as column vector.

### Partial Derivative Definition

**Directional derivative** D_u f = ∇f·u for unit u. Slice f(x,y) at fixed y gives curve; ∂f/∂x is slope along x. In neural nets, ∂L/∂W_ij is partial of loss w.r.t. one weight.

Autodiff computes all partials efficiently via reverse accumulation.

### Key Ideas

- Hold other vars constant
- Gradient stacks all partials
- Directional deriv projects gradient
- Mixed partials often commute
- Each weight has partial in NN

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `∂f/∂x_i = lim_{h→0} (f(...,x_i+h,...)−f(...,x_i,...))/h`,
            `∇f = (∂f/∂x₁, ..., ∂f/∂x_n)ᵀ`,
            `D_u f = ∇f · u`,
            `Mixed partial: ∂²f/∂x∂y`,
            `Clairaut: ∂²f/∂x∂y = ∂²f/∂y∂x (smooth)`
          ],
          diagram: `f(x,y) surface:
   fix y=y₀ → curve in x
   ∂f/∂x = slope along x
        z
       ╱│ slice at y₀
     ╱──┼── x`,
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
          output: `∂f/∂x: 8`,
          commonMistakes: [
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Not normalizing vectors when using dot product as cosine similarity`
          ]
        },
        {
          id: `pd-geom`,
          title: `Geometric Meaning`,
          content: `### Introduction

∇f points direction of steepest ascent. Magnitude ||∇f|| = max rate of increase. Level set {f=c}: ∇f perpendicular to level curve.

### Geometric Meaning

Negative gradient −∇f steepest descent direction for minimization. Contour plot: gradient orthogonal to contours. For loss L(θ), gradient in parameter space points uphill.

Moving −η∇L decreases loss first-order. In 2D, visualize gradient arrows on contour grid for intuition.

### Key Ideas

- Gradient perpendicular to contours
- Descent opposite gradient
- Zero gradient at critical points
- Visualize on 2D slices
- Magnitude = steepness

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `∇f ⟂ level sets`,
            `Steepest ascent direction`,
            `||∇f|| = max directional derivative`,
            `−∇f = steepest descent`,
            `Contour ⊥ gradient`
          ],
          diagram: `contour map + gradient:
      ╭──╮  → ∇f points outward
     ╱    ╲    from center min
    │  ·   │   at min: ∇f=0
      ╰──╯`,
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
          output: `grad at (1,1)`,
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`,
            `Using correlation when variables are non-linear — relationship may be missed`,
            `Applying log to zero or negative values without a shift`
          ]
        },
        {
          id: `pd-higher`,
          title: `Higher-Order Partials`,
          content: `### Introduction

**Hessian** H_ij=∂²f/∂x_i∂x_j matrix of second partials. Diagonal ∂²f/∂x_i² measures curvature along axis i. **Laplacian** ∇²f = ∑ ∂²f/∂x_i² sum of diagonal second partials—appears in diffusion and score matching.

### Higher-Order Partials

Determinant of Hessian in multivariate change of variables. Fisher information related to expected Hessian of log-likelihood. Small Hessian eigenvalues → flat directions.

### Key Ideas

- Hessian describes curvature
- Laplacian sums second partials
- Eigenvalues shape optimization
- Ill-conditioning from H ratio
- Fisher ≈ expected Hessian

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `H_ij = ∂²f/∂x_i∂x_j`,
            `H symmetric for C² f`,
            `∇²f = tr(H) (Laplacian)`,
            `det(H) in multivariate transform`,
            `Flat dir: small H eigenvalue`
          ],
          diagram: `H eigenvalues = curvatures:
   λ1 large: narrow valley
   λ2 small: flat along PC2
   condition number = λ_max/λ_min`,
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
          output: `curvature directions`,
          commonMistakes: [
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Training generator and discriminator without balancing capacity — one dominates`,
            `Applying log to zero or negative values without a shift`
          ]
        },
        {
          id: `pd-ml`,
          title: `Partials in Backprop`,
          content: `### Introduction

Each layer computes local Jacobian ∂h/∂x. Chain rule multiplies Jacobians backward. ∂L/∂x = (∂L/∂h)(∂h/∂x). For linear h=Wx, ∂h/∂W=x, ∂h/∂x=Wᵀ.

### Partials in Backprop

Element-wise activation: Jacobian diagonal with σ'(z). Batch sums gradients over samples. PyTorch autograd builds graph and .backward() applies chain rule automatically.

Manual partials verify implementation for custom ops.

### Key Ideas

- Backprop = chain of partials
- Linear layer grad w.r.t W outer product
- ReLU mask in backward
- Sum batch for weight update
- Verify custom ops manually

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `∂L/∂x = (∂L/∂h)(∂h/∂x)`,
            `Linear: ∂(Wx)/∂W = x`,
            `Activation: diag(σ'(z))`,
            `Batch grad = sum over samples`,
            `autograd = automatic partials`
          ],
          diagram: `layer chain:
   x → z=Wx → h=σ(z) → L
   backward multiplies
   local partials upstream`,
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
          output: `W.T for backprop to x`,
          commonMistakes: [
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Using polynomial degree too high without regularization`,
            `Applying log to zero or negative values without a shift`
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
      estimatedMinutes: 35,
      module: `module-math-05`,
      references: [
        {
          id: `khan-multivariable-calc`,
          title: `Multivariable Calculus — Khan Academy`,
          source: `Khan Academy`,
          type: `course`,
          url: `https://www.khanacademy.org/math/multivariable-calculus`,
          description: `Partial derivatives and gradients essential for neural network training.`
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
        },
        {
          id: `cs229-optimization`,
          title: `CS229 Lecture Notes — Optimization`,
          source: `Stanford CS229`,
          type: `course`,
          url: `https://cs229.stanford.edu/notes2022fall/main_notes.pdf`,
          description: `Gradient descent, Newton's method, and convergence analysis for ML.`
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
          content: `### Introduction

∇f(x) ∈ ℝⁿ with components ∂f/∂x_i. Points toward steepest increase; ||∇f|| equals max directional derivative rate. **Gradient field** assigns vector at each point.

### Gradient Vector

For loss L, ∇L tells update direction. **Subgradient** generalizes to non-smooth convex functions at kinks. Zero gradient necessary for interior extremum (not sufficient—saddle).

Numerical gradient via finite differences checks autograd. Always verify shapes: ∇L same shape as θ.

### Key Ideas

- Gradient is a vector field
- Points uphill on loss
- Subgradients for ReLU kinks
- Shape must match parameters
- Numerical check validates autograd

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `∇f = (∂f/∂x₁, ..., ∂f/∂x_n)ᵀ`,
            `max_{||u||=1} D_u f = ||∇f||`,
            `∇L(θ*) = 0 at stationary θ*`,
            `Subgradient at non-smooth points`,
            `∇L same shape as θ`
          ],
          diagram: `gradient field on hills:
        ↗ ∇f
       hill peak
      ↗ ↗
    valley: −∇f descent`,
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
          output: `∇L: [2 4 6]`,
          commonMistakes: [
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Applying log to zero or negative values without a shift`
          ]
        },
        {
          id: `grad-descent`,
          title: `Gradient Descent Geometry`,
          content: `### Introduction

Update θ_{t+1}=θ_t−η∇L(θ_t). η **learning rate** controls step. Too large: overshoot; too small: slow. **Lipschitz** gradient: ||∇f(x)−∇f(y)||≤L||x−y|| gives convergence rates.

### Gradient Descent Geometry

Convex: GD finds global min with right η. Non-convex: converges to stationary point often saddle escape heuristics help. **Momentum** accumulates velocity smoothing oscillations.

**Adam** adaptive per-parameter steps.

### Key Ideas

- Step opposite gradient
- LR critical hyperparameter
- Momentum helps ravines
- Non-convex landscapes complex
- Adaptive methods popular

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `θ_{t+1} = θ_t − η ∇L(θ_t)`,
            `η too large → diverge`,
            `L-smooth: |∇f(x)−∇f(y)| ≤ L||x−y||`,
            `Convex + proper η → global min`,
            `Momentum: v_t = βv_{t-1}+∇L`
          ],
          diagram: `GD on bowl:
   θ_t ·──→ −∇L direction
         ↘ toward minimum
          ╲
           ○ min`,
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
          output: `→ near 0`,
          commonMistakes: [
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Applying log to zero or negative values without a shift`,
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`
          ]
        },
        {
          id: `grad-proj`,
          title: `Projection & Constraints`,
          content: `### Introduction

Projected GD: θ_{t+1}=Proj_C(θ_t−η∇L) enforces constraints C (e.g., weights ≥0). **Proximal** methods handle non-smooth regularizers. Simplex projection for probability vectors.

### Projection & Constraints

Box constraints clip θ after step. Lagrange multipliers (later) handle equality constraints. Constrained optimization common in fairness constraints and resource limits.

Projected methods maintain feasibility each step.

### Key Ideas

- Projection restores feasibility
- Simplex for probability params
- Prox handles L1 sparsity
- Box clip simple but effective
- Constraints in fair ML

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `Proj_C(x) = argmin_{y∈C} ||y−x||`,
            `Projected GD after each step`,
            `Simplex: ∑p_i=1, p_i≥0`,
            `Box: clip to [a,b]`,
            `Prox for L1: soft threshold`
          ],
          diagram: `unconstrained step may leave C
   θ − η∇L  ·──→ outside
              ↓ project back
            θ_new ∈ C`,
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
          output: `sums to 1`,
          commonMistakes: [
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Not normalizing vectors when using dot product as cosine similarity`
          ]
        },
        {
          id: `grad-numerical`,
          title: `Gradient Checking`,
          content: `### Introduction

**Relative error** |g_num−g_auto|/(|g_num|+|g_auto|+ε) should <1e-5 for double precision layers. Check one layer at a time to localize bugs. Symmetric central differences.

### Gradient Checking

Disable dropout/batchnorm during check. Expensive O(n) forward passes for n params—use small subset. Essential when implementing custom CUDA kernels or novel autograd functions.

PyTorch torch.autograd.gradcheck utility automates.

### Key Ideas

- Always gradcheck custom layers
- Relative error threshold ~1e-5
- Central diff more accurate
- Stochastic layers off during check
- Localize by checking per layer

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `rel_err = |g_n − g_a| / (|g_n|+|g_a|+ε)`,
            `Central diff preferred`,
            `Check small param subsets`,
            `Disable stochastic layers`,
            `gradcheck in PyTorch`
          ],
          diagram: `grad check workflow:
   1. implement forward
   2. autograd backward
   3. finite diff compare
   4. fix mismatch layer`,
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
          output: `small error`,
          commonMistakes: [
            `Using correlation when variables are non-linear — relationship may be missed`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`
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
      estimatedMinutes: 35,
      module: `module-math-05`,
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
      id: `math-chain-rule`,
      title: `Multivariate Chain Rule`,
      description: `Jacobian matrices and backpropagation as chain rule application.`,
      level: `advanced`,
      track: `math`,
      sections: [
        {
          id: `cr-jacobian`,
          title: `Jacobian Matrix`,
          content: `### Introduction

For f: ℝⁿ→ℝᵐ, **Jacobian** J_f ∈ ℝ^{m×n} with J_ij=∂f_i/∂x_j. Linear approximation: f(x+δ)≈f(x)+J_f(x)δ.

### Jacobian Matrix

**Chain rule**: J_{f∘g}(x)=J_f(g(x))·J_g(x). Scalar f: ∇f is Jacobian 1×n (gradient row) or n×1 (column convention).

Vector-to-scalar: gradient ∇f is Jacobian transpose of scalar function. np.autograd and JAX build Jacobian-vector products efficiently without full dense J for large n.

### Key Ideas

- Jacobian generalizes gradient
- Matrix dimensions m×n
- Chain = matrix multiply
- Full J too big—use JVP
- Convention varies row/col

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `J_ij = ∂f_i / ∂x_j`,
            `J_{f∘g} = J_f · J_g`,
            `f: ℝⁿ→ℝ: ∇f ∈ ℝⁿ`,
            `Linear approx: f(x+δ) ≈ f(x)+Jδ`,
            `JVP/JVJP efficient in autodiff`
          ],
          diagram: `J matrix layout (m outputs, n inputs):
        x1  x2  x3
   f1 [ ∂  ∂  ∂ ]
   f2 [ ∂  ∂  ∂ ]`,
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
          output: `Jacobian`,
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Using polynomial degree too high without regularization`,
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`
          ]
        },
        {
          id: `cr-backprop`,
          title: `Backpropagation Derivation`,
          content: `### Introduction

Computational graph nodes with forward values. Backward pass applies chain rule from output to inputs. For node y=f(x), upstream gradient ∂L/∂y multiplies local ∂y/∂x.

### Backpropagation Derivation

**Sum over paths** when node feeds multiple consumers. ReLU backward: pass gradient where x>0 else 0. Softmax+CE backward simplifies to ŷ−y.

Memory stores activations for backward. Reverse-mode one pass O(edges) vs forward-mode O(inputs).

### Key Ideas

- Reverse-mode = backprop
- Store activations in forward
- Branch nodes sum gradients
- Fused CE+softmax simplifies
- Graph DAG structure

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `∂L/∂x = (∂L/∂y)(∂y/∂x)`,
            `Sum grads from all children`,
            `ReLU mask: x>0`,
            `Softmax+CE: ŷ − y`,
            `Reverse-mode O(1) backward pass`
          ],
          diagram: `forward: x → z → h → L
   backward: dL/dh → dL/dz → dL/dx
   multiply local derivatives
   sum branches at splits`,
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
          output: `softmax+CE grad`,
          commonMistakes: [
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`,
            `Using correlation when variables are non-linear — relationship may be missed`
          ]
        },
        {
          id: `cr-vector`,
          title: `Vector Chain Rules`,
          content: `### Introduction

If L=f(u) and u=g(x), then ∂L/∂x=(∂u/∂x)ᵀ∂L/∂u when using column convention. Matrix params: ∂L/∂W for y=Wx+b is (∂L/∂y)xᵀ outer product.

### Vector Chain Rules

**Einstein summation** einsum clarifies tensor contractions in deep nets. Batched matmul backward uses matmuls not loops.

Shape discipline prevents silent bugs in manual backprop.

### Key Ideas

- Outer product for linear layer
- Transpose W for input grad
- Batch sums weight grads
- einsum prevents shape errors
- Verify with gradcheck

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `∂L/∂W = (∂L/∂y) xᵀ`,
            `∂L/∂x = Wᵀ (∂L/∂y)`,
            `Batch: sum over batch dim`,
            `einsum for tensor contractions`,
            `Shapes must align in chain`
          ],
          diagram: `y = Wx  (single sample)
   dL/dW = dL/dy · xᵀ
   dL/dx = Wᵀ · dL/dy
   outer product for weights`,
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
          output: `(2,2)`,
          commonMistakes: [
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`
          ]
        },
        {
          id: `cr-vanish`,
          title: `Vanishing & Exploding Gradients`,
          content: `### Introduction

Deep chain multiplies many Jacobians. If ||J||<1 repeatedly, gradient vanishes—early layers learn slowly. ||J||>1 explodes—unstable training. Sigmoid/tanh saturate with small derivatives.

### Vanishing & Exploding Gradients

ReLU helps (deriv=1 when active). **Residual connections** add identity path. **Layer normalization** stabilizes activations.

**Gradient clipping** caps global norm. LSTM gates control gradient flow in RNNs. Xavier/He init sets initial Jacobian scale.

### Key Ideas

- Depth multiplies Jacobians
- Saturated activations hurt
- Residual paths help flow
- Clip prevents explosion
- Good init critical

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `∏ J_i small → vanishing`,
            `∏ J_i large → exploding`,
            `Sigmoid sat: σ'≤0.25`,
            `ResNet: y=x+F(x) gradient highway`,
            `clip: g ← g·min(1, τ/||g||)`
          ],
          diagram: `deep chain:
   J1·J2·...·J20
   each <1 → product → 0
   each >1 → product → ∞
   ResNet shortcut bypasses stack`,
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
          output: `clipped: 1.0`,
          commonMistakes: [
            `Forgetting to check matrix dimensions before multiplying`,
            `Applying log to zero or negative values without a shift`,
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`,
            `Using correlation when variables are non-linear — relationship may be missed`
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
      estimatedMinutes: 35,
      module: `module-math-05`,
      references: [
        {
          id: `3blue1brown-nn`,
          title: `Neural Networks — 3Blue1Brown`,
          source: `3Blue1Brown`,
          type: `video`,
          url: `https://www.3blue1brown.com/topics/neural-networks`,
          description: `Visual intuition for neurons, layers, backpropagation, and gradient descent.`
        },
        {
          id: `pytorch-autograd`,
          title: `PyTorch Autograd Mechanics`,
          source: `PyTorch`,
          type: `documentation`,
          url: `https://pytorch.org/tutorials/beginner/blitz/autograd_tutorial.html`,
          description: `Automatic differentiation and computational graph construction.`
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
          id: `cs229-optimization`,
          title: `CS229 Lecture Notes — Optimization`,
          source: `Stanford CS229`,
          type: `course`,
          url: `https://cs229.stanford.edu/notes2022fall/main_notes.pdf`,
          description: `Gradient descent, Newton's method, and convergence analysis for ML.`
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
          content: `### Introduction

H_ij=∂²L/∂θ_i∂θ_j symmetric for smooth L. Describes curvature of loss surface. Positive definite H at minimum (local convex bowl).

### Hessian Matrix

**Newton step** Δθ=−H⁻¹∇L. **Gauss-Newton** approximates H for least squares. Exact Hessian O(n²) storage—impractical for large n.

Diagonal approx (AdaGrad, Adam) use diagonal only. Hessian-vector products via Pearlmutter trick without forming H.

### Key Ideas

- Hessian = curvature matrix
- Newton uses full H
- Too large to store in DL
- HVP for truncated Newton
- Diagonal approx in adaptive opt

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `H_ij = ∂²L/∂θ_i∂θ_j`,
            `H symmetric for C² L`,
            `Newton: Δθ = −H⁻¹∇L`,
            `H PD → local strict min`,
            `HVP without full H`
          ],
          diagram: `1D: H = f''(x)
   bowl f''>0    cap f''<0
   2D: eigenvalues of H
   both + → min`,
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
          output: `curvature`,
          commonMistakes: [
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Applying log to zero or negative values without a shift`
          ]
        },
        {
          id: `jh-newton`,
          title: `Newton & Quasi-Newton`,
          content: `### Introduction

Newton converges quadratically near min if H PD. **BFGS** and **L-BFGS** approximate H inverse from gradient history—used in sklearn LogisticRegression(lbfgs). **Conjugate gradient** for large sparse systems.

### Newton & Quasi-Newton

Deep learning rarely uses full Newton—too costly. Small networks or meta-learning sometimes use Hessian info. Natural gradient preconditions by Fisher information F⁻¹∇L.

### Key Ideas

- Newton faster locally
- BFGS for moderate n
- L-BFGS in classical ML
- Rare in deep nets
- Natural grad Fisher precondition

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `Newton: θ ← θ − H⁻¹∇L`,
            `Quadratic conv near min`,
            `BFGS: secant Hessian approx`,
            `L-BFGS limited memory`,
            `Natural grad: F⁻¹∇L`
          ],
          diagram: `Newton vs GD:
   GD: fixed η step
   Newton: adapts via H⁻¹
   auto-scales each direction`,
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
          output: `min: ~0`,
          commonMistakes: [
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `jh-jacobian-apps`,
          title: `Jacobian Applications`,
          content: `### Introduction

**Normalizing flows**: log p(x)=log p(z)+log|det ∂f/∂x|. **Robotics** kinematics Jacobian maps joint to end-effector velocities. **Sensitivity** of model output to input: J input gradients for adversarial examples.

### Jacobian Applications

**Change of variables** in probability multivariate: p_y(y)=p_x(x)/|det J|. VAE decoder Jacobian affects likelihood approximations. Stable computation via log-det tricks.

### Key Ideas

- Flows need Jacobian determinant
- Adversarial uses input Jacobian
- Change of vars in density
- Log-det avoids underflow
- Robotics kinematics classic use

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `log p(x) = log p(z) + log|det J|`,
            `Adv examples: max ||δ|| s.t. misclassify`,
            `p(y) = p(x) / |det ∂x/∂y|`,
            `J maps velocity spaces`,
            `log-det for numerical stability`
          ],
          diagram: `flow f: x → z
   density transforms by |det J|
   volume stretch = |det J|`,
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
          output: `log det`,
          commonMistakes: [
            `Training generator and discriminator without balancing capacity — one dominates`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Training generator and discriminator without balancing capacity — one dominates`
          ]
        },
        {
          id: `jh-gauss-newton`,
          title: `Gauss-Newton & Levenberg-Marquardt`,
          content: `### Introduction

For least squares r(θ), Hessian approx H≈J_rᵀJ_r Jacobian of residuals. **Gauss-Newton** ignores second-order term. **Levenberg-Marquardt** adds λI damping between GN and GD.

### Gauss-Newton & Levenberg-Marquardt

Used in nonlinear curve fitting and some pose estimation. More stable than pure Newton for sum-of-squares objectives. Connects to linearization of nonlinear models each iteration.

### Key Ideas

- GN for nonlinear least squares
- LM adds damping λ
- Jacobian of residuals key
- Used in classical fitting
- Bridge GN and GD via λ

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `H ≈ JᵀJ (Gauss-Newton)`,
            `LM: (JᵀJ + λI)Δ = −Jᵀr`,
            `For min ∑ r_i(θ)²`,
            `λ large → gradient-like`,
            `λ small → Gauss-Newton`
          ],
          diagram: `residual vector r(θ)
   linearize r near θ
   solve normal equations
   iterate θ`,
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
          output: `→ 2`,
          commonMistakes: [
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Using polynomial degree too high without regularization`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`
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
      estimatedMinutes: 35,
      module: `module-math-05`,
      references: [
        {
          id: `khan-multivariable-calc`,
          title: `Multivariable Calculus — Khan Academy`,
          source: `Khan Academy`,
          type: `course`,
          url: `https://www.khanacademy.org/math/multivariable-calculus`,
          description: `Partial derivatives and gradients essential for neural network training.`
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
          id: `pytorch-autograd`,
          title: `PyTorch Autograd Mechanics`,
          source: `PyTorch`,
          type: `documentation`,
          url: `https://pytorch.org/tutorials/beginner/blitz/autograd_tutorial.html`,
          description: `Automatic differentiation and computational graph construction.`
        },
        {
          id: `cs229-optimization`,
          title: `CS229 Lecture Notes — Optimization`,
          source: `Stanford CS229`,
          type: `course`,
          url: `https://cs229.stanford.edu/notes2022fall/main_notes.pdf`,
          description: `Gradient descent, Newton's method, and convergence analysis for ML.`
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
          content: `### Introduction

**Second derivative test** 1D: f''>0 min, f''<0 max. Multi-D: H positive definite → strict local min; negative definite → max; indefinite → saddle. **Global min** on convex domain if f convex.

### Critical Points

Non-convex DL: many saddles, few bad local minima empirically. **Strict saddle** has directions up and down. Perturbation escapes saddles with noise in SGD.

### Key Ideas

- Gradient zero necessary not sufficient
- Hessian classifies in smooth case
- Saddles common in high-D
- SGD noise helps escape
- Convex ⇒ nice global structure

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `∇f(x*) = 0 critical`,
            `H PD → strict local min`,
            `H ND → strict local max`,
            `H indefinite → saddle`,
            `Convex f: local min = global min`
          ],
          diagram: `critical point types:
   min: bowl ∪
   max: cap ∩
   saddle: horse ╱╲
   all: ∇f=0`,
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
          output: `mixed signs → saddle`,
          commonMistakes: [
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Applying log to zero or negative values without a shift`,
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`
          ]
        },
        {
          id: `mvo-convex`,
          title: `Convex Functions`,
          content: `### Introduction

f convex if f(λx+(1−λ)y)≤λf(x)+(1−λ)f(y). Equivalently H⪰0 everywhere for C² f. **Strict convex** unique global min.

### Convex Functions

Convex optimization globally tractable. Linear models with convex loss (MSE, logistic) → convex in w. Deep nets non-convex in θ.

**Jensen inequality** E[f(X)]≥f(E[X]) for convex f—used in proofs. L1 not strictly convex at 0 but still convex.

### Key Ideas

- Convex ⇒ no spurious local min
- H PSD characterizes smooth convex
- Logistic regression convex in w
- Deep nets non-convex
- Jensen key inequality

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `f(λx+(1−λ)y) ≤ λf(x)+(1−λ)f(y)`,
            `H ⪰ 0 ⇔ convex (C²)`,
            `Convex + closed set → global min`,
            `Linear + convex loss → convex problem`,
            `Jensen: E[f(X)] ≥ f(E[X])`
          ],
          diagram: `convex: line segment above graph
      f(b) ·
           ╲
    f(a) ·  ╲___ chord below graph
         a────b`,
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
          output: `True`,
          commonMistakes: [
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `mvo-saddle`,
          title: `Saddle Points in High Dimensions`,
          content: `### Introduction

Random Gaussian landscape: saddles exponentially outnumber minima as dimension grows. At saddle, gradient zero but some eigenvalues of H positive, some negative. **Strict saddle** algorithms add noise or use curvature.

### Saddle Points in High Dimensions

**Plateau** surrounding saddles slow GD. Second-order methods can escape faster but costly. Modern view: SGD finds good minima despite non-convexity partly due to overparameterization and implicit regularization.

### Key Ideas

- Saddles not local minima
- High-D geometry counterintuitive
- SGD noise beneficial
- Plateaus confuse stopping
- Overparameterization helps

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `High-D: saddles dominate`,
            `Strict saddle: mixed H eigenvalues`,
            `Noise in SGD helps escape`,
            `Plateaus: small gradient`,
            `Overparam → many global-ish min`
          ],
          diagram: `saddle in 2D:
      down ↘  ↗ up
          ╳
      up ↗  ↘ down`,
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
          output: `saddle at 0`,
          commonMistakes: [
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Applying log to zero or negative values without a shift`,
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`
          ]
        },
        {
          id: `mvo-global`,
          title: `Global Optimization Strategies`,
          content: `### Introduction

**Random restarts** from multiple init. **Simulated annealing** stochastic acceptance. **Bayesian optimization** for expensive black-box.

### Global Optimization Strategies

**Learning rate schedules** cosine, warmup. **Weight decay** L2 regularization. **Early stopping** on validation.

**Ensemble** average models. For DL: SGD+ momentum+ weight decay+ batch norm+ skip connections form practical recipe. No guarantee global but empirically strong minima found.

### Key Ideas

- No silver bullet for global opt
- Restarts cheap parallelism
- BayesOpt for HPO
- Regularization improves generalization
- Practice combines many heuristics

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `Random restarts explore basins`,
            `BayesOpt for hyperparam black-box`,
            `Cosine annealing LR schedule`,
            `Weight decay: θ ← (1−ηλ)θ`,
            `Early stop on val loss`
          ],
          diagram: `optimization toolkit:
   init → SGD+momentum
        → schedule LR
        → regularize
        → early stop
        → ensemble`,
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
          output: `early stop argmin`,
          commonMistakes: [
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Applying log to zero or negative values without a shift`
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
      estimatedMinutes: 35,
      module: `module-math-05`,
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
          id: `adam-paper`,
          title: `Adam: A Method for Stochastic Optimization`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1412.6980`,
          description: `Adaptive learning rate optimizer used as default in most deep learning training.`
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
    }
];
