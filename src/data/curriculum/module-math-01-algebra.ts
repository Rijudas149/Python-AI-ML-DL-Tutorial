import type { Topic } from '../../types';

export const moduleMath01Topics: Topic[] = [
{
      id: `math-sets`,
      title: `Set Theory & Notation`,
      description: `Master set operations, cardinality, and notation used throughout probability and linear algebra.`,
      level: `beginner`,
      track: `math`,
      sections: [
        {
          id: `sets-intro`,
          title: `Sets and Membership`,
          content: `### Introduction

A **set** is an unordered collection of distinct objects. We write A = {1, 2, 3} and x ∈ A means x belongs to A. The empty set ∅ contains no elements.

### Sets and Membership

Subsets satisfy A ⊆ B when every element of A is in B. The **power set** P(A) is the set of all subsets; |P(A)| = 2^|A|. In data science, feature sets, label sets, and train/validation splits are all set-theoretic.

Venn diagrams visualize unions and intersections. Countable vs uncountable sets matter when discussing discrete vs continuous random variables.

Set-builder notation {x ∈ ℝ | x > 0} defines infinite sets compactly and appears in constraint definitions for optimization.

### Key Ideas

- ∈ tests membership; ⊆ tests subset
- Union/intersection follow De Morgan laws
- Inclusion-exclusion prevents double counting
- Power set grows exponentially
- Sets formalize sample spaces in probability

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `A ∪ B = {x | x ∈ A or x ∈ B}`,
            `A ∩ B = {x | x ∈ A and x ∈ B}`,
            `A^c = {x ∈ U | x ∉ A}`,
            `|A ∪ B| = |A| + |B| − |A ∩ B|`,
            `P(A) = {S | S ⊆ A}`
          ],
          diagram: `Universal Set U
    │   │ A │  │ B │  │
    │     │ A∩B│   │
    │  A only  B only│
    A∪B = entire shaded
    A∩B = center overlap`,
          keyPoints: [
            `∈ tests membership; ⊆ tests subset`,
            `Union/intersection follow De Morgan laws`,
            `Inclusion-exclusion prevents double counting`,
            `Power set grows exponentially`,
            `Sets formalize sample spaces in probability`
          ],
          example: `import numpy as np
A = {1, 2, 3}
B = {2, 3, 4}
print("A ∪ B:", A | B)
print("A ∩ B:", A & B)
print("|A|:", len(A))`,
          output: `A ∪ B: {1, 2, 3, 4}
A ∩ B: {2, 3}
|A|: 3`,
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `sets-ops`,
          title: `Set Operations in Practice`,
          content: `### Introduction

**Union** A ∪ B collects all elements from either set. **Intersection** A ∩ B keeps shared elements. **Difference** A \\ B removes B from A.

### Set Operations in Practice

**Symmetric difference** A △ B = (A ∪ B) \\ (A ∩ B). Cartesian product A × B = {(a,b) | a∈A, b∈B} pairs every element; |A×B| = |A|·|B|. These operations underpin SQL JOIN logic, multi-index combinations, and joint distributions.

De Morgan: (A∪B)^c = A^c∩B^c. Disjoint sets have A∩B = ∅. A **partition** of U splits the universe into non-overlapping subsets whose union is U—used in stratified sampling and cross-validation folds.

### Key Ideas

- Difference is not commutative
- Cartesian product size multiplies
- De Morgan helps simplify complements
- Partitions enable stratified splits
- Set ops mirror Boolean logic

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `A \\ B = {x | x ∈ A, x ∉ B}`,
            `A △ B = (A ∪ B) \\ (A ∩ B)`,
            `|A × B| = |A| · |B|`,
            `(A ∪ B)^c = A^c ∩ B^c`,
            `Partition: ∪ P_i = U, P_i ∩ P_j = ∅ for i≠j`
          ],
          diagram: `A = {1,2,3}     B = {3,4,5}
   A ∪ B = {1,2,3,4,5}
   A ∩ B = {3}
   A \\ B = {1,2}
   B \\ A = {4,5}
   A × B (ordered pairs):
   (1,3) (1,4) (1,5)
   (2,3) (2,4) (2,5)
   (3,3) (3,4) (3,5)
   → 3 × 3 = 9 pairs`,
          keyPoints: [
            `Difference is not commutative`,
            `Cartesian product size multiplies`,
            `De Morgan helps simplify complements`,
            `Partitions enable stratified splits`,
            `Set ops mirror Boolean logic`
          ],
          example: `import numpy as np
A = np.array([1,2,3])
B = np.array([3,4,5])
print("union:", np.union1d(A,B))
print("intersect:", np.intersect1d(A,B))
print("A only:", np.setdiff1d(A,B))`,
          output: `union: [1 2 3 4 5]
intersect: [3]
A only: [1 2]`,
          commonMistakes: [
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`,
            `Using correlation when variables are non-linear — relationship may be missed`,
            `Applying log to zero or negative values without a shift`,
            `Training generator and discriminator without balancing capacity — one dominates`
          ]
        },
        {
          id: `sets-functions`,
          title: `Sets as Function Domains`,
          content: `### Introduction

A **function** f: A → B maps each input in domain A to exactly one output in codomain B. The **image** f(A) = {f(x) | x∈A} ⊆ B. **Preimage** f⁻¹(S) = {x | f(x)∈S}.

### Sets as Function Domains

Injective (one-to-one): f(x₁)=f(x₂)⇒x₁=x₂. Surjective (onto): ∀y∈B, ∃x∈A with f(x)=y. Bijective functions are invertible.

In ML, domain might be feature vectors ℝⁿ and codomain class labels or ℝ for regression. Restricting domain to training set prevents extrapolation errors. Understanding preimages defines level sets and decision boundaries geometrically.

### Key Ideas

- Functions require unique outputs per input
- Image may be smaller than codomain
- Injectivity matters for invertible transforms
- Preimages define decision boundaries
- Domain restrictions affect model validity

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `f: A → B maps each a ∈ A to f(a) ∈ B`,
            `Im(f) = {f(x) | x ∈ domain}`,
            `Injective: f(x₁) = f(x₂) ⇒ x₁ = x₂`,
            `Surjective: ∀ y ∈ B, ∃ x: f(x) = y`,
            `Bijective ⇔ invertible function exists`
          ],
          diagram: `Domain A          Codomain B
   │ 1 │──────────────→│ a │
   │ 2 │──┐            │ b │
   │ 3 │──┼───────────→│ c │
   │ 4 │──┘            └───┘
   Each input → ONE output
   Multiple inputs may map to same output
   (not injective if 2,3 → same y)`,
          keyPoints: [
            `Functions require unique outputs per input`,
            `Image may be smaller than codomain`,
            `Injectivity matters for invertible transforms`,
            `Preimages define decision boundaries`,
            `Domain restrictions affect model validity`
          ],
          example: `import numpy as np
f = lambda x: x**2
A = np.array([-2,-1,0,1,2])
print("image:", np.unique(f(A)))
print("preimage of {4}:", A[f(A)==4])`,
          output: `image: [0 1 4]
preimage of {4}: [-2  2]`,
          commonMistakes: [
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Using polynomial degree too high without regularization`
          ]
        },
        {
          id: `sets-counting`,
          title: `Counting & Cardinality`,
          content: `### Introduction

**Cardinality** |S| counts elements in finite sets. The **multiplication principle**: if task 1 has m ways and task 2 has n ways, combined tasks have m·n ways—explains |A×B|. **Permutations** P(n,k) = n!/(n−k)! when order matters.

### Counting & Cardinality

**Combinations** C(n,k) = n!/(k!(n−k)!) when order is irrelevant. Binomial coefficients appear in probability mass functions and the binomial theorem. Inclusion-exclusion generalizes to multiple overlapping sets.

These formulas drive hyperparameter grid sizes, k-fold splits, and sampling without replacement in bootstrap methods.

### Key Ideas

- Combinations ignore order
- Permutations count ordered arrangements
- Binomial coeffs appear in Bernoulli trials
- Multiplication principle for pipelines
- Inclusion-exclusion for overlapping events

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `P(n,k) = n! / (n−k)!`,
            `C(n,k) = n! / (k!(n−k)!)`,
            `C(n,k) = C(n, n−k)`,
            `∑_{k=0}^n C(n,k) = 2^n`,
            `|A ∪ B ∪ C| uses inclusion-exclusion`
          ],
          diagram: `Choose 3 from {A,B,C,D}
   Combinations C(4,3)=4:
   ABC  ABD  ACD  BCD
   Permutations P(4,3)=24:
   ABC ACB BAC BCA ...
   n=4, k=3
   C(4,3) = 4!/(3!·1!) = 4
   P(4,3) = 4!/1! = 24`,
          keyPoints: [
            `Combinations ignore order`,
            `Permutations count ordered arrangements`,
            `Binomial coeffs appear in Bernoulli trials`,
            `Multiplication principle for pipelines`,
            `Inclusion-exclusion for overlapping events`
          ],
          example: `import numpy as np
from math import comb, perm
n, k = 10, 3
print("C(10,3):", comb(n,k))
print("P(10,3):", perm(n,k))
print("2^10:", sum(comb(10,i) for i in range(11)))`,
          output: `C(10,3): 120
P(10,3): 720
2^10: 1024`,
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
          id: `ex-sets-1`,
          question: `Use numpy to find elements in A=[1,2,3,4] not in B=[3,4,5,6].`,
          solution: `import numpy as np
A = np.array([1,2,3,4])
B = np.array([3,4,5,6])
print(np.setdiff1d(A,B))`,
          difficulty: `easy`
        },
        {
          id: `ex-sets-2`,
          question: `Compute |A∪B| given A={1..5}, B={4..8} using inclusion-exclusion.`,
          solution: `import numpy as np
A = set(range(1,6))
B = set(range(4,9))
print(len(A|B))
print(len(A)+len(B)-len(A&B))`,
          difficulty: `medium`,
          hint: `Use |A∪B| = |A|+|B|−|A∩B|.`
        }
      ],
      estimatedMinutes: 35,
      module: `module-math-01`,
      references: [
        {
          id: `mit-6034`,
          title: `MIT 6.034 — Artificial Intelligence`,
          source: `MIT`,
          type: `course`,
          url: `https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/`,
          description: `Classic AI course covering search, knowledge, learning, and reasoning.`
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
          id: `python-sets-doc`,
          title: `Sets`,
          source: `Python.org`,
          type: `documentation`,
          url: `https://docs.python.org/3/tutorial/datastructures.html#sets`,
          description: `Unordered collections for membership testing and set algebra.`
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
      id: `math-functions`,
      title: `Functions & Graphs`,
      description: `Understand domains, ranges, composition, and inverse functions for modeling relationships.`,
      level: `beginner`,
      track: `math`,
      sections: [
        {
          id: `fn-basics`,
          title: `Function Definition & Notation`,
          content: `### Introduction

A real function f: D → ℝ assigns each x in domain D a unique output f(x). The **range** is the set of actual outputs. **Piecewise** functions define different rules on intervals.

### Function Definition & Notation

Even functions satisfy f(−x)=f(x); odd satisfy f(−x)=−f(x). Polynomials, exponentials, and rationals form the building blocks of loss landscapes. Vertical line test: any vertical line crosses graph at most once.

Implicit functions like x²+y²=1 define curves. Parametric form (x(t), y(t)) describes trajectories in dynamical systems and animation of optimization paths.

### Key Ideas

- Each input maps to exactly one output
- Domain restrictions prevent undefined ops
- Composition chains transformations
- Even/odd symmetry simplifies integrals
- Range may differ from codomain

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `f(x) = ax + b (linear)`,
            `f(x) = ax² + bx + c (quadratic)`,
            `f(−x) = f(x) ⇒ even; f(−x) = −f(x) ⇒ odd`,
            `Range ⊆ codomain; image = actual outputs`,
            `(f∘g)(x) = f(g(x))`
          ],
          diagram: `y
        │   ╱  f(x)=2x+1
    ────┼──────── x
   Domain: all x where defined
   Range: {f(x) : x ∈ domain}
   Vertical line test:
   │ crosses ≤ 1 point`,
          keyPoints: [
            `Each input maps to exactly one output`,
            `Domain restrictions prevent undefined ops`,
            `Composition chains transformations`,
            `Even/odd symmetry simplifies integrals`,
            `Range may differ from codomain`
          ],
          example: `import numpy as np
x = np.linspace(-3,3,7)
f = 2*x + 1
print("f(-1)=", 2*(-1)+1)
print("range sample:", f)
print("min,max:", f.min(), f.max())`,
          output: `f(-1)= -1
range sample: [-5 -3 -1  1  3  5  7]
min,max: -5 7`,
          commonMistakes: [
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`,
            `Using correlation when variables are non-linear — relationship may be missed`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `fn-types`,
          title: `Common Function Families`,
          content: `### Introduction

**Linear** f(x)=mx+b has constant slope m. **Quadratic** ax²+bx+c opens up/down; vertex at x=−b/(2a). **Exponential** a·bˣ grows/decays; base e appears in continuous compounding and softmax.

### Common Function Families

**Logarithmic** inverse of exponential; compresses large ranges. **Sigmoid** σ(x)=1/(1+e^(−x)) maps ℝ→(0,1) for probabilities. **ReLU** max(0,x) dominates deep networks.

Rational functions have vertical asymptotes where denominator vanishes. Choosing the right family guides feature transforms and activation design in neural architectures.

### Key Ideas

- Linear models = affine transforms
- Sigmoid squashes to probabilities
- ReLU enables sparse activations
- Exponentials model growth/decay
- Log transforms skewed data

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `σ(x) = 1 / (1 + e^(−x))`,
            `ReLU(x) = max(0, x)`,
            `e^(a+b) = e^a · e^b`,
            `log_b(x) = ln(x) / ln(b)`,
            `Quadratic vertex: x = −b / (2a)`
          ],
          diagram: `Linear      Quadratic     Sigmoid
   ╱           ∪            S-curve
 constant   one turn    bounded (0,1)
 slope      min/max
   ReLU: flat then ramp`,
          keyPoints: [
            `Linear models = affine transforms`,
            `Sigmoid squashes to probabilities`,
            `ReLU enables sparse activations`,
            `Exponentials model growth/decay`,
            `Log transforms skewed data`
          ],
          example: `import numpy as np
x = np.array([-2.,0.,2.])
sigmoid = 1/(1+np.exp(-x))
relu = np.maximum(0,x)
print("sigmoid:", np.round(sigmoid,3))
print("relu:", relu)`,
          output: `sigmoid: [0.119 0.5   0.881]
relu: [0. 0. 2.]`,
          commonMistakes: [
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Using polynomial degree too high without regularization`,
            `Applying log to zero or negative values without a shift`
          ]
        },
        {
          id: `fn-compose`,
          title: `Composition & Inverse`,
          content: `### Introduction

**Composition** (f∘g)(x)=f(g(x)) applies g then f. Order matters: f∘g ≠ g∘f generally. Identity I(x)=x satisfies f∘I=f.

### Composition & Inverse

**Inverse** f⁻¹ satisfies f(f⁻¹(x))=x and f⁻¹(f(x))=x when f is bijective. ln and exp are inverses. In neural nets, layers compose: h=L_k∘...∘L_1. Chain rule (calculus) differentiates compositions.

For invertible flows, log-det Jacobian tracks volume change. Finding inverses analytically is key to normalizing flows, inverse transforms for predictions, and understanding encoder-decoder architectures.

### Key Ideas

- Composition order is critical
- Inverses undo transformations
- Only bijections have true inverses
- Neural nets are deep compositions
- Inverse order reverses on composition

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `(f ∘ g)(x) = f(g(x))`,
            `f ∘ f⁻¹ = f⁻¹ ∘ f = I`,
            `(f ∘ g)⁻¹ = g⁻¹ ∘ f⁻¹ (reverse order)`,
            `Bijective ⇔ invertible on domain`,
            `Chain: d/dx f(g(x)) = f'(g(x))·g'(x)`
          ],
          diagram: `x ──g──→ g(x) ──f──→ f(g(x))
   (f∘g): apply g first, then f
   Inverse reverses arrows:
   x ←─f⁻¹─ y ←─g⁻¹─ z
   f(g(x))
     ↓ g
     ↓ f
   output`,
          keyPoints: [
            `Composition order is critical`,
            `Inverses undo transformations`,
            `Only bijections have true inverses`,
            `Neural nets are deep compositions`,
            `Inverse order reverses on composition`
          ],
          example: `import numpy as np
g = lambda x: x + 1
f = lambda x: x ** 2
x = 3
print("f(g(3)):", f(g(x)))
print("g(f(3)):", g(f(x)))`,
          output: `f(g(3)): 16
g(f(3)): 10`,
          commonMistakes: [
            `Using correlation when variables are non-linear — relationship may be missed`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`
          ]
        },
        {
          id: `fn-transforms`,
          title: `Functional Transforms in ML`,
          content: `### Introduction

Feature transforms map raw inputs to spaces where models learn easier. **Standardization** z=(x−μ)/σ centers and scales. **Min-max** maps to [0,1].

### Functional Transforms in ML

**Log1p** handles count data. **Box-Cox** stabilizes variance. Kernel tricks implicitly map to high-D via φ(x) without computing φ.

Activation functions are pointwise nonlinear transforms. Invertible transforms enable density estimation.

Always track whether transforms applied at train time must be reused at inference with saved μ, σ parameters to avoid train-serve skew and incorrect predictions in production.

### Key Ideas

- Fit transforms on training data only
- Store params for deployment
- Log handles heavy tails
- Kernels avoid explicit φ
- Inverse restores interpretability

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `z = (x − μ) / σ`,
            `x_norm = (x − min) / (max − min)`,
            `log1p(x) = ln(1 + x)`,
            `K(x,x') = ⟨φ(x), φ(x')⟩`,
            `Inverse transform for predictions in original units`
          ],
          diagram: `Raw x ──transform──→ z ──model──→ ŷ
         save μ, σ
   inference: same μ, σ
   Without inverse:
   predictions in wrong scale!`,
          keyPoints: [
            `Fit transforms on training data only`,
            `Store params for deployment`,
            `Log handles heavy tails`,
            `Kernels avoid explicit φ`,
            `Inverse restores interpretability`
          ],
          example: `import numpy as np
x = np.array([10.,20.,30.,40.,50.])
mu, sigma = x.mean(), x.std()
z = (x - mu) / sigma
print("mu:", mu, "sigma:", sigma)
print("z:", np.round(z,2))`,
          output: `mu: 30.0 sigma: 14.142...
z: [-1.41 -0.71  0.    0.71  1.41]`,
          commonMistakes: [
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Using polynomial degree too high without regularization`,
            `Serving a model trained on preprocessed data without the same pipeline in production`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-fn-1`,
          question: `Evaluate f(x)=x²−4 at x=3 and find where f(x)=0.`,
          solution: `import numpy as np
f = lambda x: x**2 - 4
print("f(3)=", f(3))
x = np.array([-3,-2,-1,0,1,2,3])
print("zeros at x:", x[f(x)==0])`,
          difficulty: `easy`
        },
        {
          id: `ex-fn-2`,
          question: `Compose f(x)=2x and g(x)=x+1; compute (f∘g)(5) and (g∘f)(5).`,
          solution: `import numpy as np
f = lambda x: 2*x
g = lambda x: x + 1
print("f(g(5)):", f(g(5)))
print("g(f(5)):", g(f(5)))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 35,
      module: `module-math-01`,
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
          id: `mit-6034`,
          title: `MIT 6.034 — Artificial Intelligence`,
          source: `MIT`,
          type: `course`,
          url: `https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/`,
          description: `Classic AI course covering search, knowledge, learning, and reasoning.`
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
      id: `math-logarithms`,
      title: `Logarithms & Exponentials`,
      description: `Master log rules, the natural base e, and exponential growth models used in loss functions and probabilities.`,
      level: `beginner`,
      track: `math`,
      sections: [
        {
          id: `log-def`,
          title: `Logarithm Definition`,
          content: `### Introduction

For b>0, b≠1, **log_b(x)** is the exponent y such that b^y = x. Equivalently: b^(log_b(x)) = x. **Natural log** ln(x)=log_e(x) where e≈2.71828.

### Logarithm Definition

Domain: x>0. log_b(1)=0, log_b(b)=1. Logarithms convert multiplication to addition: log(ab)=log(a)+log(b). Division becomes subtraction; powers become multiplication.

In ML, log-likelihood sums log probabilities for numerical stability. Cross-entropy uses log of predicted probabilities. Log scale visualizes data spanning orders of magnitude in plots and dashboards.

### Key Ideas

- Logs are inverse of exponentials
- Product rule enables log-sum tricks
- ln is standard in calculus/ML
- Domain strictly positive
- Log-likelihood replaces products with sums

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `b^y = x ⇔ y = log_b(x)`,
            `ln(x) = log_e(x); e ≈ 2.71828`,
            `log_b(xy) = log_b(x) + log_b(y)`,
            `log_b(x^n) = n·log_b(x)`,
            `Change of base: log_b(x) = ln(x) / ln(b)`
          ],
          diagram: `b^y = x
   y = log_b(x)
   Example: 2^3 = 8
   log_2(8) = 3
   ln maps (0,∞) → (−∞,∞)
        y
        │    ╱ ln(x)
   ─────┼───── x
        1`,
          keyPoints: [
            `Logs are inverse of exponentials`,
            `Product rule enables log-sum tricks`,
            `ln is standard in calculus/ML`,
            `Domain strictly positive`,
            `Log-likelihood replaces products with sums`
          ],
          example: `import numpy as np
x = np.array([1, np.e, np.e**2])
print("ln(x):", np.round(np.log(x),3))
print("exp(ln(5)):", np.exp(np.log(5)))`,
          output: `ln(x): [0.    1.    2.   ]
exp(ln(5)): 5.0`,
          commonMistakes: [
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `log-rules`,
          title: `Logarithm Rules & Identities`,
          content: `### Introduction

Key identities: log_b(x/y)=log_b(x)−log_b(y). log_b(1)=0. log_b(b)=1. **Change of base** log_b(x)=ln(x)/ln(b). ln(e^x)=x for all x; e^(ln(x))=x for x>0. Logarithmic differentiation handles products of functions.

### Logarithm Rules & Identities

In information theory, −log(p) measures surprise in bits (base 2) or nats (base e). **Log-sum-exp** trick: ln(∑e^a_i)=max(a)+ln(∑e^(a_i−max)) prevents overflow in softmax denominators. Never take log of zero or negative numbers without complex extension.

### Key Ideas

- Product→sum prevents underflow
- Log-sum-exp stabilizes softmax
- Change of base for any log
- −log p measures information content
- Domain x>0 for real logs

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `log(x/y) = log(x) − log(y)`,
            `ln(e^x) = x`,
            `e^(ln x) = x for x > 0`,
            `ln∑e^a = max(a) + ln∑e^(a−max(a))`,
            `−log(p) = self-information`
          ],
          diagram: `log(ab) = log(a) + log(b)
   log(a/b) = log(a) - log(b)
   log(a^n) = n·log(a)
   Softmax stability:
   exp(1000) → overflow
   subtract max before exp:
   exp(a_i - max(a))`,
          keyPoints: [
            `Product→sum prevents underflow`,
            `Log-sum-exp stabilizes softmax`,
            `Change of base for any log`,
            `−log p measures information content`,
            `Domain x>0 for real logs`
          ],
          example: `import numpy as np
a = np.array([1000., 1001., 999.])
stable = np.max(a) + np.log(np.sum(np.exp(a - np.max(a))))
print("log-sum-exp:", stable)`,
          output: `log-sum-exp: 1001.313...`,
          commonMistakes: [
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`,
            `Using correlation when variables are non-linear — relationship may be missed`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `exp-models`,
          title: `Exponential Growth & Decay`,
          content: `### Introduction

Exponential model N(t)=N₀·e^(kt): k>0 growth, k<0 decay. **Half-life** t_{1/2}=ln(2)/|k|. Continuous compounding A=Pe^(rt).

### Exponential Growth & Decay

Softmax converts logits z to probabilities p_i=e^z_i/∑e^z_j. Temperature scaling divides logits by T before softmax. Learning rate schedules often use exponential decay η_t=η₀·γ^t.

Radioactive decay and cooling follow exponentials. Log-linear plots reveal exponential trends as straight lines. Doubling time = ln(2)/k for growth processes.

### Key Ideas

- e is the natural growth base
- Softmax uses exponentials normalized
- Half-life from decay constant k
- Log-scale linearizes exponentials
- LR decay is exponential in steps

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `N(t) = N₀ · e^(kt)`,
            `Half-life: t_{1/2} = ln(2) / |k|`,
            `Softmax: p_i = e^z_i / ∑_j e^z_j`,
            `A = P · e^(rt)`,
            `η_t = η₀ · γ^t (LR decay)`
          ],
          diagram: `N(t)=N₀·e^(kt)
   k>0: growth ↗
   ──────── t
   k<0: decay ↘
     ──────── t
   Half-life: 50% remaining`,
          keyPoints: [
            `e is the natural growth base`,
            `Softmax uses exponentials normalized`,
            `Half-life from decay constant k`,
            `Log-scale linearizes exponentials`,
            `LR decay is exponential in steps`
          ],
          example: `import numpy as np
z = np.array([1.,2.,3.])
p = np.exp(z)/np.exp(z).sum()
print("softmax:", np.round(p,3))
t = np.linspace(0,5,6)
print("decay:", np.round(np.exp(-0.5*t),3))`,
          output: `softmax: [0.09  0.245 0.665]
decay: [1.    0.607 0.368 0.223 0.135 0.082]`,
          commonMistakes: [
            `Using polynomial degree too high without regularization`,
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Applying log to zero or negative values without a shift`
          ]
        },
        {
          id: `log-ml`,
          title: `Logs in Machine Learning`,
          content: `### Introduction

**Log-likelihood** ℓ=∑log p(x_i|θ) replaces ∏p for stability. **Cross-entropy** H(p,q)=−∑p log q measures divergence from true p. Binary CE: −[y log ŷ+(1−y)log(1−ŷ)].

### Logs in Machine Learning

Log loss penalizes confident wrong predictions heavily. **Logit** is inverse sigmoid: logit(p)=ln(p/(1−p)). BCEWithLogitsLoss fuses sigmoid+log for numeric safety.

Perplexity exp(average NLL) evaluates language models. Always clip probabilities away from 0 and 1 before log to avoid −∞ gradients during backpropagation.

### Key Ideas

- Log turns products to sums
- CE is standard classification loss
- Logit links probs to linear models
- Clip before log avoids −∞
- Perplexity uses exp of avg NLL

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `ℓ = ∑_i log p(x_i | θ)`,
            `H(p,q) = −∑ p(x) log q(x)`,
            `BCE = −[y log ŷ + (1−y) log(1−ŷ)]`,
            `logit(p) = ln(p / (1−p))`,
            `Perplexity = exp(−(1/N)∑ log p)`
          ],
          diagram: `Wrong confident prediction:
   ŷ=0.99, y=0 → −log(0.01) ≈ 4.6
   ŷ=0.6, y=0  → −log(0.4)  ≈ 0.9
   Log penalizes hubris!
   clip ŷ to [ε, 1−ε] before log`,
          keyPoints: [
            `Log turns products to sums`,
            `CE is standard classification loss`,
            `Logit links probs to linear models`,
            `Clip before log avoids −∞`,
            `Perplexity uses exp of avg NLL`
          ],
          example: `import numpy as np
y = np.array([1.,0.,1.])
yhat = np.clip(np.array([0.9,0.2,0.7]),1e-7,1-1e-7)
bce = -(y*np.log(yhat)+(1-y)*np.log(1-yhat))
print("BCE:", np.round(bce,3), "mean:", np.round(bce.mean(),3))`,
          output: `BCE: [0.105 1.609 0.357] mean: 0.691`,
          commonMistakes: [
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Not normalizing vectors when using dot product as cosine similarity`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-log-1`,
          question: `Compute ln(e³) and log₂(8) using numpy.`,
          solution: `import numpy as np
print(np.log(np.e**3))
print(np.log(8)/np.log(2))`,
          difficulty: `easy`
        },
        {
          id: `ex-log-2`,
          question: `Apply softmax to logits [0,1,2] with numpy.`,
          solution: `import numpy as np
z = np.array([0.,1.,2.])
p = np.exp(z)/np.exp(z).sum()
print(np.round(p,4))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 35,
      module: `module-math-01`,
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
          id: `cover-thomas-info-theory`,
          title: `Elements of Information Theory`,
          source: `Wiley`,
          type: `book`,
          url: `https://www.elementsofinformationtheory.com/`,
          description: `Definitive reference for entropy, mutual information, and coding theory.`
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
      id: `math-sequences`,
      title: `Sequences & Series`,
      description: `Arithmetic and geometric sequences, convergence, and summation notation for iterative algorithms.`,
      level: `beginner`,
      track: `math`,
      sections: [
        {
          id: `seq-arith`,
          title: `Arithmetic Sequences`,
          content: `### Introduction

An **arithmetic sequence** has constant difference d: a_n = a₁ + (n−1)d. Sum of first n terms: S_n = n/2 · (2a₁ + (n−1)d) = n/2 · (a₁ + a_n). Used in linear schedules (add constant each step) and evenly spaced grids.

### Arithmetic Sequences

In gradient descent with fixed step, parameter updates form arithmetic progression in gradient direction magnitude when gradient is constant. Indexing from 0: a_n = a₀ + n·d. Finite differences of linear sequences are constant.

Warmup schedules often increase learning rate arithmetically before cosine decay.

### Key Ideas

- Constant difference defines arithmetic
- Sum formula is O(1) not loop
- Linear LR warmup is arithmetic
- Grid search steps often arithmetic
- Index carefully: 0 vs 1 based

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `a_n = a₁ + (n−1)d`,
            `d = a_{n+1} − a_n`,
            `S_n = n(a₁ + a_n) / 2`,
            `S_n = n(2a₁ + (n−1)d) / 2`,
            `Linear schedule: x_n = x₀ + n·Δ`
          ],
          diagram: `a_n = 2, 5, 8, 11, 14 ...
   d = 3
   n:  1   2   3   4   5
       2   5   8  11  14
       └──+3─+3─+3─+3──
   S_5 = 5/2·(2+14) = 40`,
          keyPoints: [
            `Constant difference defines arithmetic`,
            `Sum formula is O(1) not loop`,
            `Linear LR warmup is arithmetic`,
            `Grid search steps often arithmetic`,
            `Index carefully: 0 vs 1 based`
          ],
          example: `import numpy as np
a1, d, n = 2, 3, 5
a = a1 + np.arange(n)*d
print("terms:", a)
print("sum:", a.sum(), "formula:", n*(a1+a[-1])/2)`,
          output: `terms: [ 2  5  8 11 14]
sum: 40 formula: 40.0`,
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Using polynomial degree too high without regularization`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `seq-geom`,
          title: `Geometric Sequences`,
          content: `### Introduction

**Geometric sequence**: a_n = a₁·r^(n−1) with ratio r. Sum (r≠1): S_n = a₁(1−r^n)/(1−r). Infinite sum converges if |r|<1: S_∞ = a₁/(1−r).

### Geometric Sequences

Exponential decay weights in EMA: s_t = β·s_{t−1}+(1−β)·x_t resembles geometric weighting of past observations. Learning rate decay η·γ^t is geometric. Ratio test for series convergence compares |a_{n+1}/a_n|.

Compound interest multiplies by (1+r) each period—geometric growth familiar from finance.

### Key Ideas

- Ratio r multiplies each term
- |r|<1 needed for infinite sum
- EMA uses geometric smoothing
- LR geometric decay common
- Geometric ↔ exponential link

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `a_n = a₁ · r^(n−1)`,
            `S_n = a₁(1 − r^n) / (1 − r), r ≠ 1`,
            `S_∞ = a₁ / (1 − r) if |r| < 1`,
            `EMA: s_t = β s_{t−1} + (1−β) x_t`,
            `LR: η_t = η₀ · γ^t`
          ],
          diagram: `r = 1/2: 8, 4, 2, 1, 0.5 ...
   each term × r
   8 → 4 → 2 → 1 → 0.5
   |r|<1: sum converges
   S∞ = 8/(1-0.5) = 16
   r>1: diverges`,
          keyPoints: [
            `Ratio r multiplies each term`,
            `|r|<1 needed for infinite sum`,
            `EMA uses geometric smoothing`,
            `LR geometric decay common`,
            `Geometric ↔ exponential link`
          ],
          example: `import numpy as np
a1, r, n = 8, 0.5, 5
a = a1 * r**np.arange(n)
print("terms:", a)
print("sum:", a.sum(), "limit:", a1/(1-r))`,
          output: `terms: [8.  4.  2.  1.  0.5]
sum: 15.5 limit: 16.0`,
          commonMistakes: [
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `seq-series`,
          title: `Series & Sigma Notation`,
          content: `### Introduction

**Series** ∑_{k=1}^n a_k sums sequence terms. **Telescoping** series cancel intermediate terms. **Harmonic** H_n=∑_{k=1}^n 1/k diverges slowly.

### Series & Sigma Notation

**Geometric series** ∑r^k converges for |r|<1. Partial sums track training loss over epochs. Big-O analysis sums operation counts.

Riemann sums approximate integrals as ∑f(x_i)Δx. Sigma notation compactly expresses batch loss (1/m)∑L_i. Rearranging absolutely convergent series is safe; conditional convergence requires caution in theoretical analysis.

### Key Ideas

- Sigma notation standard in papers
- Partial sums monitor convergence
- Batch loss is mean over sum
- Geometric series closed form key
- Harmonic series diverges

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `∑_{k=1}^n a_k = a_1 + a_2 + ... + a_n`,
            `∑_{k=0}^∞ r^k = 1/(1−r), |r|<1`,
            `Batch loss: L = (1/m) ∑_{i=1}^m L_i`,
            `H_n = ∑_{k=1}^n 1/k ~ ln(n)`,
            `Riemann: ∫f ≈ ∑ f(x_i) Δx`
          ],
          diagram: `∑_{k=1}^5 k = 1+2+3+4+5 = 15
   Sigma notation:
        n
       \\   a_k
       /__
       k=1
   Expands to explicit sum
   Compact for proofs & code`,
          keyPoints: [
            `Sigma notation standard in papers`,
            `Partial sums monitor convergence`,
            `Batch loss is mean over sum`,
            `Geometric series closed form key`,
            `Harmonic series diverges`
          ],
          example: `import numpy as np
k = np.arange(1,6)
print("sum k:", k.sum())
print("geom:", np.sum(0.5**np.arange(10)))`,
          output: `sum k: 15
geom: 1.998...`,
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Applying log to zero or negative values without a shift`
          ]
        },
        {
          id: `seq-ml`,
          title: `Sequences in Optimization`,
          content: `### Introduction

Iterative algorithms produce **parameter sequences** θ₀, θ₁, ... converging to θ*. **Fixed-point** iteration x_{n+1}=g(x_n). Cauchy criterion: terms get closer: |a_{n+1}−a_n|→0.

### Sequences in Optimization

Monotonic bounded sequences converge. Early stopping when validation loss sequence stops improving. Momentum accumulates velocity sequence.

Cosine annealing schedules LR smoothly. Convergence rate: linear (error × c each step) vs quadratic (Newton). Plotting loss sequences diagnoses training health and guides hyperparameter tuning.

### Key Ideas

- Monitor sequences not single points
- Early stopping prevents overfit
- Schedule LR along iteration index
- Momentum smooths update sequence
- Convergence needs patience + tuning

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `θ_{t+1} = θ_t − η ∇L(θ_t)`,
            `Momentum: v_t = β v_{t−1} + ∇L`,
            `Cosine LR: η_t = η_min + ½(η_max−η_min)(1+cos(πt/T))`,
            `Early stop when val loss plateaus`,
            `Fixed point: x* = g(x*)`
          ],
          diagram: `Loss vs epoch:
   L │
     │ ╲___ plateau
     └────────── epoch
   Good: steady decrease
   Bad: oscillate / diverge`,
          keyPoints: [
            `Monitor sequences not single points`,
            `Early stopping prevents overfit`,
            `Schedule LR along iteration index`,
            `Momentum smooths update sequence`,
            `Convergence needs patience + tuning`
          ],
          example: `import numpy as np
loss = np.array([2.0,1.2,0.8,0.65,0.63,0.62,0.621])
improve = np.diff(loss)
print("improvements:", np.round(improve,3))`,
          output: `improvements: [-0.8  -0.4  -0.15 -0.02  -0.01  0.001]`,
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Using polynomial degree too high without regularization`,
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-seq-1`,
          question: `Generate first 6 terms of a_n=3+2n using numpy.`,
          solution: `import numpy as np
n = np.arange(6)
a = 3 + 2*n
print(a)`,
          difficulty: `easy`
        },
        {
          id: `ex-seq-2`,
          question: `Sum geometric series a1=1,r=0.5,n=10 terms; compare to 1/(1-r).`,
          solution: `import numpy as np
n=10
print(np.sum(0.5**np.arange(n)))
print(1/(1-0.5))`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 35,
      module: `module-math-01`,
      references: [
        {
          id: `clrs-algorithms`,
          title: `Introduction to Algorithms (CLRS)`,
          source: `MIT Press`,
          type: `book`,
          url: `https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/`,
          description: `Definitive reference for sorting, searching, and algorithmic complexity analysis.`
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
          id: `mit-6034`,
          title: `MIT 6.034 — Artificial Intelligence`,
          source: `MIT`,
          type: `course`,
          url: `https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/`,
          description: `Classic AI course covering search, knowledge, learning, and reasoning.`
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
      id: `math-complex`,
      title: `Complex Numbers`,
      description: `Complex plane arithmetic, polar form, and Euler formula connecting trig to exponentials.`,
      level: `intermediate`,
      track: `math`,
      sections: [
        {
          id: `cx-basics`,
          title: `Complex Number Basics`,
          content: `### Introduction

A **complex number** z = a + bi where i² = −1. Real part Re(z)=a, imaginary Im(z)=b. **Complex plane** plots Re on x-axis, Im on y.

### Complex Number Basics

Conjugate z̄ = a − bi satisfies z·z̄ = |z|². Division: multiply numerator and denominator by conjugate. Complex roots always exist: x²+1=0 has roots ±i.

FFT uses complex exponentials to decompose signals. Some RNN stability analysis uses complex eigenvalues. Understanding the complex plane aids interpreting FFT bins and filter frequency responses.

### Key Ideas

- i² = −1 extends real algebra
- Modulus is Euclidean length
- Conjugate flips imaginary sign
- Complex plane aids visualization
- FFT relies on complex exponentials

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `z = a + bi, i² = −1`,
            `|z| = √(a² + b²)`,
            `z̄ = a − bi; z·z̄ = |z|²`,
            `Re(z) = a, Im(z) = b`,
            `Complex plane: (Re, Im) coordinates`
          ],
          diagram: `Im
         │    · z=a+bi
         │  ╱ |b
    ─────┼────┼── Re
         │    a
   |z| = distance from origin`,
          keyPoints: [
            `i² = −1 extends real algebra`,
            `Modulus is Euclidean length`,
            `Conjugate flips imaginary sign`,
            `Complex plane aids visualization`,
            `FFT relies on complex exponentials`
          ],
          example: `import numpy as np
z = 3 + 4j
print("|z|:", np.abs(z))
print("conj:", np.conj(z))
print("z*conj:", z*np.conj(z))`,
          output: `|z|: 5.0
conj: (3-4j)
z*conj: (25+0j)`,
          commonMistakes: [
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`,
            `Using correlation when variables are non-linear — relationship may be missed`,
            `Forgetting to check matrix dimensions before multiplying`,
            `Applying log to zero or negative values without a shift`
          ]
        },
        {
          id: `cx-polar`,
          title: `Polar Form & Euler`,
          content: `### Introduction

Polar form: z = r(cos θ + i sin θ) = r·e^(iθ) where r=|z| and θ=arg(z). **Euler formula**: e^(iθ) = cos θ + i sin θ. Multiplication adds angles: r₁e^(iθ₁)·r₂e^(iθ₂) = r₁r₂e^(i(θ₁+θ₂)).

### Polar Form & Euler

De Moivre: (cos θ+i sin θ)^n = cos(nθ)+i sin(nθ). Phasors represent sinusoids in signal processing. Unit circle maps θ to e^(iθ). np.exp(1j*theta) computes efficiently.

Euler identity e^(iπ)+1=0 connects five fundamental constants in one equation.

### Key Ideas

- Polar form simplifies multiplication
- Euler links exp and trig
- arg uses atan2 for quadrant
- e^(iπ)+1=0 famous identity
- FFT = sum of e^(−i2πkn/N)

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `z = r·e^(iθ) = r(cos θ + i sin θ)`,
            `e^(iθ) = cos θ + i sin θ (Euler)`,
            `e^(iπ) + 1 = 0 (Euler identity)`,
            `arg(z) = θ = atan2(b, a)`,
            `|z₁·z₂| = |z₁|·|z₂|; arg(z₁z₂) = arg(z₁)+arg(z₂)`
          ],
          diagram: `Unit circle:
        Im
         │  e^(iπ/2)=i
    ─1───┼───1 Re
         │  e^(−iπ/2)=−i
   θ increases counterclockwise
   r=1 on unit circle`,
          keyPoints: [
            `Polar form simplifies multiplication`,
            `Euler links exp and trig`,
            `arg uses atan2 for quadrant`,
            `e^(iπ)+1=0 famous identity`,
            `FFT = sum of e^(−i2πkn/N)`
          ],
          example: `import numpy as np
theta = np.pi/4
z = np.exp(1j*theta)
print("rect:", np.round(z,3))
print("cos+isin:", np.round(np.cos(theta)+1j*np.sin(theta),3))`,
          output: `rect: (0.707+0.707j)
cos+isin: (0.707+0.707j)`,
          commonMistakes: [
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`,
            `Using correlation when variables are non-linear — relationship may be missed`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `cx-ops`,
          title: `Complex Operations`,
          content: `### Introduction

Addition component-wise: (a+bi)+(c+di)=(a+c)+(b+d)i. Multiplication: (a+bi)(c+di)=(ac−bd)+(ad+bc)i. Division via conjugate rationalization.

### Complex Operations

Powers use De Moivre or repeated multiplication. np.real, np.imag extract parts. Complex matrices appear in quantum ML analogies. Hermitian transpose A* combines conjugate and transpose.

Eigenvalues of real matrices may be complex conjugate pairs. Stability analysis: |λ|<1 for discrete dynamical systems ensures bounded trajectories.

### Key Ideas

- Multiply in polar by adding angles
- Division subtracts angles
- Hermitian for complex inner products
- Complex eigenvalues come in conjugate pairs
- Magnitude of eigenvalue = growth rate

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `(a+bi)(c+di) = (ac−bd) + (ad+bc)i`,
            `z/w = z·w̄ / |w|²`,
            `e^(iθ₁)·e^(iθ₂) = e^(i(θ₁+θ₂))`,
            `A* = conjugate transpose`,
            `|λ|<1 ⇒ stable discrete dynamics`
          ],
          diagram: `Multiplication in polar:
   z1: r1∠θ1  ×  z2: r2∠θ2
   result: r1·r2 ∠ (θ1+θ2)
   lengths multiply
   angles add`,
          keyPoints: [
            `Multiply in polar by adding angles`,
            `Division subtracts angles`,
            `Hermitian for complex inner products`,
            `Complex eigenvalues come in conjugate pairs`,
            `Magnitude of eigenvalue = growth rate`
          ],
          example: `import numpy as np
z1, z2 = 1+1j, 2+0j
print("product:", z1*z2)
print("div:", z1/z2)
print("angles add:", np.angle(z1)+np.angle(z2), np.angle(z1*z2))`,
          output: `product: (2+2j)
div: (0.5+0.5j)
angles add: ...`,
          commonMistakes: [
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`,
            `Using correlation when variables are non-linear — relationship may be missed`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `cx-fft`,
          title: `Complex Numbers in Signal & ML`,
          content: `### Introduction

**Discrete Fourier Transform** X_k = ∑_{n=0}^{N−1} x_n e^(−i2πkn/N) decomposes signals into frequency components. Convolution theorem: FFT(domain) multiplies in frequency domain. Spectral analysis of time series uses |X_k|.

### Complex Numbers in Signal & ML

Complex activations appear in specialized architectures. Phase arg(X_k) carries timing information. np.fft.fft returns complex array.

Understanding e^(iωt) as rotating vector clarifies periodic patterns in sequential data and audio feature extraction pipelines.

### Key Ideas

- FFT is O(N log N) with fast algo
- Complex exponentials are DFT basis
- Magnitude spectrum common in features
- Phase matters for reconstruction
- Convolution via FFT saves compute

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `X_k = ∑_{n=0}^{N−1} x_n e^(−i2πkn/N)`,
            `F{f*g} = F{f}·F{g}`,
            `|X_k| = magnitude at frequency k`,
            `arg(X_k) = phase at frequency k`,
            `Inverse FFT reconstructs signal from spectrum`
          ],
          diagram: `Time domain     FFT     Frequency
   ~~~~ waveform  ───→   |X(k)| bars
   low k: slow trends
   high k: fast oscillations
   e^(−i2πkn/N) = rotate + sample`,
          keyPoints: [
            `FFT is O(N log N) with fast algo`,
            `Complex exponentials are DFT basis`,
            `Magnitude spectrum common in features`,
            `Phase matters for reconstruction`,
            `Convolution via FFT saves compute`
          ],
          example: `import numpy as np
t = np.linspace(0,1,8,endpoint=False)
x = np.cos(2*np.pi*2*t)
X = np.fft.fft(x)
print("|X|:", np.round(np.abs(X),2))`,
          output: `|X|: shows peaks at frequency bins`,
          commonMistakes: [
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-cx-1`,
          question: `Compute |3+4i| and arg using numpy.`,
          solution: `import numpy as np
z=3+4j
print(np.abs(z), np.angle(z))`,
          difficulty: `easy`
        },
        {
          id: `ex-cx-2`,
          question: `Verify e^(iπ)+1≈0 with numpy.`,
          solution: `import numpy as np
print(np.exp(1j*np.pi)+1)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 35,
      module: `module-math-01`,
      references: [
        {
          id: `mit-6034`,
          title: `MIT 6.034 — Artificial Intelligence`,
          source: `MIT`,
          type: `course`,
          url: `https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/`,
          description: `Classic AI course covering search, knowledge, learning, and reasoning.`
        },
        {
          id: `numpy-linalg`,
          title: `numpy.linalg — Linear Algebra`,
          source: `NumPy`,
          type: `documentation`,
          url: `https://numpy.org/doc/stable/reference/routines.linalg.html`,
          description: `Matrix multiplication, decomposition, eigenvalues, and linear systems.`
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
