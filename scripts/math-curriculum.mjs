/**
 * Math track curriculum modules for Data Science Master (8 modules, 40 topics).
 * Import MATH_MODULES in generate-curriculum.mjs or merge manually.
 */

function sec(id, title, content, extra = {}) {
  const { formulas = [], ...rest } = extra;
  return { id, title, content, formulas, ...rest };
}

function ex(id, question, solution, difficulty = 'easy', hint) {
  return { id, question, solution, difficulty, ...(hint ? { hint } : {}) };
}

function topic(id, title, description, level, sections, exercises, opts = {}) {
  return {
    id,
    title,
    description,
    level,
    track: 'math',
    sections,
    exercises,
    estimatedMinutes: opts.estimatedMinutes ?? 35,
    ...opts,
  };
}

export const MATH_MODULES = [
  {
    num: 1,
    id: "module-math-01",
    fileName: "module-math-01-algebra",
    exportName: "moduleMath01Topics",
    name: "Algebra & Functions",
    track: "math",
    description: "Foundations of sets, functions, logarithms, sequences, and complex numbers essential for data science notation and modeling.",
    topics: [
      {
        id: "math-sets",
        title: "Set Theory & Notation",
        description: "Master set operations, cardinality, and notation used throughout probability and linear algebra.",
        level: "beginner",
        track: "math",
        sections: [
          {
            id: "sets-intro",
            title: "Sets and Membership",
            content: "A **set** is an unordered collection of distinct objects. We write A = {1, 2, 3} and x ∈ A means x belongs to A. The empty set ∅ contains no elements. Subsets satisfy A ⊆ B when every element of A is in B. The **power set** P(A) is the set of all subsets; |P(A)| = 2^|A|. In data science, feature sets, label sets, and train/validation splits are all set-theoretic. Venn diagrams visualize unions and intersections. Countable vs uncountable sets matter when discussing discrete vs continuous random variables. Set-builder notation {x ∈ ℝ | x > 0} defines infinite sets compactly and appears in constraint definitions for optimization.",
            formulas: [
              "A ∪ B = {x | x ∈ A or x ∈ B}",
              "A ∩ B = {x | x ∈ A and x ∈ B}",
              "A^c = {x ∈ U | x ∉ A}",
              "|A ∪ B| = |A| + |B| − |A ∩ B|",
              "P(A) = {S | S ⊆ A}"
            ],
            diagram: "     Universal Set U\n    ┌─────────────────┐\n    │   ┌───┐  ┌───┐  │\n    │   │ A │  │ B │  │\n    │   │ ┌─┼──┼─┐ │  │\n    │   └─┼──┼─┘ │  │\n    │     │ A∩B│   │\n    │     └───┘   │\n    │  A only  B only│\n    └─────────────────┘\n    A∪B = entire shaded\n    A∩B = center overlap",
            keyPoints: [
              "∈ tests membership; ⊆ tests subset",
              "Union/intersection follow De Morgan laws",
              "Inclusion-exclusion prevents double counting",
              "Power set grows exponentially",
              "Sets formalize sample spaces in probability"
            ],
            example: "import numpy as np\nA = {1, 2, 3}\nB = {2, 3, 4}\nprint(\"A ∪ B:\", A | B)\nprint(\"A ∩ B:\", A & B)\nprint(\"|A|:\", len(A))",
            output: "A ∪ B: {1, 2, 3, 4}\nA ∩ B: {2, 3}\n|A|: 3"
          },
          {
            id: "sets-ops",
            title: "Set Operations in Practice",
            content: "**Union** A ∪ B collects all elements from either set. **Intersection** A ∩ B keeps shared elements. **Difference** A \\ B removes B from A. **Symmetric difference** A △ B = (A ∪ B) \\ (A ∩ B). Cartesian product A × B = {(a,b) | a∈A, b∈B} pairs every element; |A×B| = |A|·|B|. These operations underpin SQL JOIN logic, multi-index combinations, and joint distributions. De Morgan: (A∪B)^c = A^c∩B^c. Disjoint sets have A∩B = ∅. A **partition** of U splits the universe into non-overlapping subsets whose union is U—used in stratified sampling and cross-validation folds.",
            formulas: [
              "A \\ B = {x | x ∈ A, x ∉ B}",
              "A △ B = (A ∪ B) \\ (A ∩ B)",
              "|A × B| = |A| · |B|",
              "(A ∪ B)^c = A^c ∩ B^c",
              "Partition: ∪ P_i = U, P_i ∩ P_j = ∅ for i≠j"
            ],
            diagram: "   A = {1,2,3}     B = {3,4,5}\n\n   A ∪ B = {1,2,3,4,5}\n   A ∩ B = {3}\n   A \\ B = {1,2}\n   B \\ A = {4,5}\n\n   A × B (ordered pairs):\n   (1,3) (1,4) (1,5)\n   (2,3) (2,4) (2,5)\n   (3,3) (3,4) (3,5)\n   → 3 × 3 = 9 pairs",
            keyPoints: [
              "Difference is not commutative",
              "Cartesian product size multiplies",
              "De Morgan helps simplify complements",
              "Partitions enable stratified splits",
              "Set ops mirror Boolean logic"
            ],
            example: "import numpy as np\nA = np.array([1,2,3])\nB = np.array([3,4,5])\nprint(\"union:\", np.union1d(A,B))\nprint(\"intersect:\", np.intersect1d(A,B))\nprint(\"A only:\", np.setdiff1d(A,B))",
            output: "union: [1 2 3 4 5]\nintersect: [3]\nA only: [1 2]"
          },
          {
            id: "sets-functions",
            title: "Sets as Function Domains",
            content: "A **function** f: A → B maps each input in domain A to exactly one output in codomain B. The **image** f(A) = {f(x) | x∈A} ⊆ B. **Preimage** f⁻¹(S) = {x | f(x)∈S}. Injective (one-to-one): f(x₁)=f(x₂)⇒x₁=x₂. Surjective (onto): ∀y∈B, ∃x∈A with f(x)=y. Bijective functions are invertible. In ML, domain might be feature vectors ℝⁿ and codomain class labels or ℝ for regression. Restricting domain to training set prevents extrapolation errors. Understanding preimages defines level sets and decision boundaries geometrically.",
            formulas: [
              "f: A → B maps each a ∈ A to f(a) ∈ B",
              "Im(f) = {f(x) | x ∈ domain}",
              "Injective: f(x₁) = f(x₂) ⇒ x₁ = x₂",
              "Surjective: ∀ y ∈ B, ∃ x: f(x) = y",
              "Bijective ⇔ invertible function exists"
            ],
            diagram: "   Domain A          Codomain B\n   ┌───┐               ┌───┐\n   │ 1 │──────────────→│ a │\n   │ 2 │──┐            │ b │\n   │ 3 │──┼───────────→│ c │\n   │ 4 │──┘            └───┘\n   └───┘\n   Each input → ONE output\n   Multiple inputs may map to same output\n   (not injective if 2,3 → same y)",
            keyPoints: [
              "Functions require unique outputs per input",
              "Image may be smaller than codomain",
              "Injectivity matters for invertible transforms",
              "Preimages define decision boundaries",
              "Domain restrictions affect model validity"
            ],
            example: "import numpy as np\nf = lambda x: x**2\nA = np.array([-2,-1,0,1,2])\nprint(\"image:\", np.unique(f(A)))\nprint(\"preimage of {4}:\", A[f(A)==4])",
            output: "image: [0 1 4]\npreimage of {4}: [-2  2]"
          },
          {
            id: "sets-counting",
            title: "Counting & Cardinality",
            content: "**Cardinality** |S| counts elements in finite sets. The **multiplication principle**: if task 1 has m ways and task 2 has n ways, combined tasks have m·n ways—explains |A×B|. **Permutations** P(n,k) = n!/(n−k)! when order matters. **Combinations** C(n,k) = n!/(k!(n−k)!) when order is irrelevant. Binomial coefficients appear in probability mass functions and the binomial theorem. Inclusion-exclusion generalizes to multiple overlapping sets. These formulas drive hyperparameter grid sizes, k-fold splits, and sampling without replacement in bootstrap methods.",
            formulas: [
              "P(n,k) = n! / (n−k)!",
              "C(n,k) = n! / (k!(n−k)!)",
              "C(n,k) = C(n, n−k)",
              "∑_{k=0}^n C(n,k) = 2^n",
              "|A ∪ B ∪ C| uses inclusion-exclusion"
            ],
            diagram: "   Choose 3 from {A,B,C,D}\n\n   Combinations C(4,3)=4:\n   ABC  ABD  ACD  BCD\n\n   Permutations P(4,3)=24:\n   ABC ACB BAC BCA ...\n\n   n=4, k=3\n   C(4,3) = 4!/(3!·1!) = 4\n   P(4,3) = 4!/1! = 24",
            keyPoints: [
              "Combinations ignore order",
              "Permutations count ordered arrangements",
              "Binomial coeffs appear in Bernoulli trials",
              "Multiplication principle for pipelines",
              "Inclusion-exclusion for overlapping events"
            ],
            example: "import numpy as np\nfrom math import comb, perm\nn, k = 10, 3\nprint(\"C(10,3):\", comb(n,k))\nprint(\"P(10,3):\", perm(n,k))\nprint(\"2^10:\", sum(comb(10,i) for i in range(11)))",
            output: "C(10,3): 120\nP(10,3): 720\n2^10: 1024"
          }
        ],
        exercises: [
          {
            id: "ex-sets-1",
            question: "Use numpy to find elements in A=[1,2,3,4] not in B=[3,4,5,6].",
            solution: "import numpy as np\nA = np.array([1,2,3,4])\nB = np.array([3,4,5,6])\nprint(np.setdiff1d(A,B))",
            difficulty: "easy"
          },
          {
            id: "ex-sets-2",
            question: "Compute |A∪B| given A={1..5}, B={4..8} using inclusion-exclusion.",
            solution: "import numpy as np\nA = set(range(1,6))\nB = set(range(4,9))\nprint(len(A|B))\nprint(len(A)+len(B)-len(A&B))",
            difficulty: "medium",
            hint: "Use |A∪B| = |A|+|B|−|A∩B|."
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-functions",
        title: "Functions & Graphs",
        description: "Understand domains, ranges, composition, and inverse functions for modeling relationships.",
        level: "beginner",
        track: "math",
        sections: [
          {
            id: "fn-basics",
            title: "Function Definition & Notation",
            content: "A real function f: D → ℝ assigns each x in domain D a unique output f(x). The **range** is the set of actual outputs. **Piecewise** functions define different rules on intervals. Even functions satisfy f(−x)=f(x); odd satisfy f(−x)=−f(x). Polynomials, exponentials, and rationals form the building blocks of loss landscapes. Vertical line test: any vertical line crosses graph at most once. Implicit functions like x²+y²=1 define curves. Parametric form (x(t), y(t)) describes trajectories in dynamical systems and animation of optimization paths.",
            formulas: [
              "f(x) = ax + b (linear)",
              "f(x) = ax² + bx + c (quadratic)",
              "f(−x) = f(x) ⇒ even; f(−x) = −f(x) ⇒ odd",
              "Range ⊆ codomain; image = actual outputs",
              "(f∘g)(x) = f(g(x))"
            ],
            diagram: "        y\n        │    ╱\n        │   ╱  f(x)=2x+1\n        │  ╱\n        │ ╱\n    ────┼──────── x\n        │\n   Domain: all x where defined\n   Range: {f(x) : x ∈ domain}\n\n   Vertical line test:\n   │ crosses ≤ 1 point",
            keyPoints: [
              "Each input maps to exactly one output",
              "Domain restrictions prevent undefined ops",
              "Composition chains transformations",
              "Even/odd symmetry simplifies integrals",
              "Range may differ from codomain"
            ],
            example: "import numpy as np\nx = np.linspace(-3,3,7)\nf = 2*x + 1\nprint(\"f(-1)=\", 2*(-1)+1)\nprint(\"range sample:\", f)\nprint(\"min,max:\", f.min(), f.max())",
            output: "f(-1)= -1\nrange sample: [-5 -3 -1  1  3  5  7]\nmin,max: -5 7"
          },
          {
            id: "fn-types",
            title: "Common Function Families",
            content: "**Linear** f(x)=mx+b has constant slope m. **Quadratic** ax²+bx+c opens up/down; vertex at x=−b/(2a). **Exponential** a·bˣ grows/decays; base e appears in continuous compounding and softmax. **Logarithmic** inverse of exponential; compresses large ranges. **Sigmoid** σ(x)=1/(1+e^(−x)) maps ℝ→(0,1) for probabilities. **ReLU** max(0,x) dominates deep networks. Rational functions have vertical asymptotes where denominator vanishes. Choosing the right family guides feature transforms and activation design in neural architectures.",
            formulas: [
              "σ(x) = 1 / (1 + e^(−x))",
              "ReLU(x) = max(0, x)",
              "e^(a+b) = e^a · e^b",
              "log_b(x) = ln(x) / ln(b)",
              "Quadratic vertex: x = −b / (2a)"
            ],
            diagram: "   Linear      Quadratic     Sigmoid\n   ╱           ∪            S-curve\n  ╱          ╱ ╲           ___───\n ╱          ╱   ╲         ╱\n────────   ────────      ────────\n constant   one turn    bounded (0,1)\n slope      min/max\n\n   ReLU: flat then ramp\n        ___╱\n       ╱",
            keyPoints: [
              "Linear models = affine transforms",
              "Sigmoid squashes to probabilities",
              "ReLU enables sparse activations",
              "Exponentials model growth/decay",
              "Log transforms skewed data"
            ],
            example: "import numpy as np\nx = np.array([-2.,0.,2.])\nsigmoid = 1/(1+np.exp(-x))\nrelu = np.maximum(0,x)\nprint(\"sigmoid:\", np.round(sigmoid,3))\nprint(\"relu:\", relu)",
            output: "sigmoid: [0.119 0.5   0.881]\nrelu: [0. 0. 2.]"
          },
          {
            id: "fn-compose",
            title: "Composition & Inverse",
            content: "**Composition** (f∘g)(x)=f(g(x)) applies g then f. Order matters: f∘g ≠ g∘f generally. Identity I(x)=x satisfies f∘I=f. **Inverse** f⁻¹ satisfies f(f⁻¹(x))=x and f⁻¹(f(x))=x when f is bijective. ln and exp are inverses. In neural nets, layers compose: h=L_k∘...∘L_1. Chain rule (calculus) differentiates compositions. For invertible flows, log-det Jacobian tracks volume change. Finding inverses analytically is key to normalizing flows, inverse transforms for predictions, and understanding encoder-decoder architectures.",
            formulas: [
              "(f ∘ g)(x) = f(g(x))",
              "f ∘ f⁻¹ = f⁻¹ ∘ f = I",
              "(f ∘ g)⁻¹ = g⁻¹ ∘ f⁻¹ (reverse order)",
              "Bijective ⇔ invertible on domain",
              "Chain: d/dx f(g(x)) = f'(g(x))·g'(x)"
            ],
            diagram: "   x ──g──→ g(x) ──f──→ f(g(x))\n\n   (f∘g): apply g first, then f\n\n   Inverse reverses arrows:\n   x ←─f⁻¹─ y ←─g⁻¹─ z\n\n   f(g(x))\n     ↓ g\n     ↓ f\n   output",
            keyPoints: [
              "Composition order is critical",
              "Inverses undo transformations",
              "Only bijections have true inverses",
              "Neural nets are deep compositions",
              "Inverse order reverses on composition"
            ],
            example: "import numpy as np\ng = lambda x: x + 1\nf = lambda x: x ** 2\nx = 3\nprint(\"f(g(3)):\", f(g(x)))\nprint(\"g(f(3)):\", g(f(x)))",
            output: "f(g(3)): 16\ng(f(3)): 10"
          },
          {
            id: "fn-transforms",
            title: "Functional Transforms in ML",
            content: "Feature transforms map raw inputs to spaces where models learn easier. **Standardization** z=(x−μ)/σ centers and scales. **Min-max** maps to [0,1]. **Log1p** handles count data. **Box-Cox** stabilizes variance. Kernel tricks implicitly map to high-D via φ(x) without computing φ. Activation functions are pointwise nonlinear transforms. Invertible transforms enable density estimation. Always track whether transforms applied at train time must be reused at inference with saved μ, σ parameters to avoid train-serve skew and incorrect predictions in production.",
            formulas: [
              "z = (x − μ) / σ",
              "x_norm = (x − min) / (max − min)",
              "log1p(x) = ln(1 + x)",
              "K(x,x') = ⟨φ(x), φ(x')⟩",
              "Inverse transform for predictions in original units"
            ],
            diagram: "   Raw x ──transform──→ z ──model──→ ŷ\n              │\n         save μ, σ\n              │\n   inference: same μ, σ\n\n   Without inverse:\n   predictions in wrong scale!\n   │\n   │  · · ·",
            keyPoints: [
              "Fit transforms on training data only",
              "Store params for deployment",
              "Log handles heavy tails",
              "Kernels avoid explicit φ",
              "Inverse restores interpretability"
            ],
            example: "import numpy as np\nx = np.array([10.,20.,30.,40.,50.])\nmu, sigma = x.mean(), x.std()\nz = (x - mu) / sigma\nprint(\"mu:\", mu, \"sigma:\", sigma)\nprint(\"z:\", np.round(z,2))",
            output: "mu: 30.0 sigma: 14.142...\nz: [-1.41 -0.71  0.    0.71  1.41]"
          }
        ],
        exercises: [
          {
            id: "ex-fn-1",
            question: "Evaluate f(x)=x²−4 at x=3 and find where f(x)=0.",
            solution: "import numpy as np\nf = lambda x: x**2 - 4\nprint(\"f(3)=\", f(3))\nx = np.array([-3,-2,-1,0,1,2,3])\nprint(\"zeros at x:\", x[f(x)==0])",
            difficulty: "easy"
          },
          {
            id: "ex-fn-2",
            question: "Compose f(x)=2x and g(x)=x+1; compute (f∘g)(5) and (g∘f)(5).",
            solution: "import numpy as np\nf = lambda x: 2*x\ng = lambda x: x + 1\nprint(\"f(g(5)):\", f(g(5)))\nprint(\"g(f(5)):\", g(f(5)))",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-logarithms",
        title: "Logarithms & Exponentials",
        description: "Master log rules, the natural base e, and exponential growth models used in loss functions and probabilities.",
        level: "beginner",
        track: "math",
        sections: [
          {
            id: "log-def",
            title: "Logarithm Definition",
            content: "For b>0, b≠1, **log_b(x)** is the exponent y such that b^y = x. Equivalently: b^(log_b(x)) = x. **Natural log** ln(x)=log_e(x) where e≈2.71828. Domain: x>0. log_b(1)=0, log_b(b)=1. Logarithms convert multiplication to addition: log(ab)=log(a)+log(b). Division becomes subtraction; powers become multiplication. In ML, log-likelihood sums log probabilities for numerical stability. Cross-entropy uses log of predicted probabilities. Log scale visualizes data spanning orders of magnitude in plots and dashboards.",
            formulas: [
              "b^y = x ⇔ y = log_b(x)",
              "ln(x) = log_e(x); e ≈ 2.71828",
              "log_b(xy) = log_b(x) + log_b(y)",
              "log_b(x^n) = n·log_b(x)",
              "Change of base: log_b(x) = ln(x) / ln(b)"
            ],
            diagram: "   b^y = x\n\n   y = log_b(x)\n\n   Example: 2^3 = 8\n   log_2(8) = 3\n\n   ln maps (0,∞) → (−∞,∞)\n\n        y\n        │    ╱ ln(x)\n        │   ╱\n        │  ╱\n   ─────┼───── x\n        1",
            keyPoints: [
              "Logs are inverse of exponentials",
              "Product rule enables log-sum tricks",
              "ln is standard in calculus/ML",
              "Domain strictly positive",
              "Log-likelihood replaces products with sums"
            ],
            example: "import numpy as np\nx = np.array([1, np.e, np.e**2])\nprint(\"ln(x):\", np.round(np.log(x),3))\nprint(\"exp(ln(5)):\", np.exp(np.log(5)))",
            output: "ln(x): [0.    1.    2.   ]\nexp(ln(5)): 5.0"
          },
          {
            id: "log-rules",
            title: "Logarithm Rules & Identities",
            content: "Key identities: log_b(x/y)=log_b(x)−log_b(y). log_b(1)=0. log_b(b)=1. **Change of base** log_b(x)=ln(x)/ln(b). ln(e^x)=x for all x; e^(ln(x))=x for x>0. Logarithmic differentiation handles products of functions. In information theory, −log(p) measures surprise in bits (base 2) or nats (base e). **Log-sum-exp** trick: ln(∑e^a_i)=max(a)+ln(∑e^(a_i−max)) prevents overflow in softmax denominators. Never take log of zero or negative numbers without complex extension.",
            formulas: [
              "log(x/y) = log(x) − log(y)",
              "ln(e^x) = x",
              "e^(ln x) = x for x > 0",
              "ln∑e^a = max(a) + ln∑e^(a−max(a))",
              "−log(p) = self-information"
            ],
            diagram: "   log(ab) = log(a) + log(b)\n   log(a/b) = log(a) - log(b)\n   log(a^n) = n·log(a)\n\n   Softmax stability:\n   exp(1000) → overflow\n   subtract max before exp:\n   exp(a_i - max(a))\n   │\n   │  · · ·",
            keyPoints: [
              "Product→sum prevents underflow",
              "Log-sum-exp stabilizes softmax",
              "Change of base for any log",
              "−log p measures information content",
              "Domain x>0 for real logs"
            ],
            example: "import numpy as np\na = np.array([1000., 1001., 999.])\nstable = np.max(a) + np.log(np.sum(np.exp(a - np.max(a))))\nprint(\"log-sum-exp:\", stable)",
            output: "log-sum-exp: 1001.313..."
          },
          {
            id: "exp-models",
            title: "Exponential Growth & Decay",
            content: "Exponential model N(t)=N₀·e^(kt): k>0 growth, k<0 decay. **Half-life** t_{1/2}=ln(2)/|k|. Continuous compounding A=Pe^(rt). Softmax converts logits z to probabilities p_i=e^z_i/∑e^z_j. Temperature scaling divides logits by T before softmax. Learning rate schedules often use exponential decay η_t=η₀·γ^t. Radioactive decay and cooling follow exponentials. Log-linear plots reveal exponential trends as straight lines. Doubling time = ln(2)/k for growth processes.",
            formulas: [
              "N(t) = N₀ · e^(kt)",
              "Half-life: t_{1/2} = ln(2) / |k|",
              "Softmax: p_i = e^z_i / ∑_j e^z_j",
              "A = P · e^(rt)",
              "η_t = η₀ · γ^t (LR decay)"
            ],
            diagram: "   N(t)=N₀·e^(kt)\n\n   k>0: growth ↗\n        ╱\n       ╱\n      ╱\n   ──────── t\n\n   k<0: decay ↘\n   \\\n    \\\n     ──────── t\n\n   Half-life: 50% remaining",
            keyPoints: [
              "e is the natural growth base",
              "Softmax uses exponentials normalized",
              "Half-life from decay constant k",
              "Log-scale linearizes exponentials",
              "LR decay is exponential in steps"
            ],
            example: "import numpy as np\nz = np.array([1.,2.,3.])\np = np.exp(z)/np.exp(z).sum()\nprint(\"softmax:\", np.round(p,3))\nt = np.linspace(0,5,6)\nprint(\"decay:\", np.round(np.exp(-0.5*t),3))",
            output: "softmax: [0.09  0.245 0.665]\ndecay: [1.    0.607 0.368 0.223 0.135 0.082]"
          },
          {
            id: "log-ml",
            title: "Logs in Machine Learning",
            content: "**Log-likelihood** ℓ=∑log p(x_i|θ) replaces ∏p for stability. **Cross-entropy** H(p,q)=−∑p log q measures divergence from true p. Binary CE: −[y log ŷ+(1−y)log(1−ŷ)]. Log loss penalizes confident wrong predictions heavily. **Logit** is inverse sigmoid: logit(p)=ln(p/(1−p)). BCEWithLogitsLoss fuses sigmoid+log for numeric safety. Perplexity exp(average NLL) evaluates language models. Always clip probabilities away from 0 and 1 before log to avoid −∞ gradients during backpropagation.",
            formulas: [
              "ℓ = ∑_i log p(x_i | θ)",
              "H(p,q) = −∑ p(x) log q(x)",
              "BCE = −[y log ŷ + (1−y) log(1−ŷ)]",
              "logit(p) = ln(p / (1−p))",
              "Perplexity = exp(−(1/N)∑ log p)"
            ],
            diagram: "   Wrong confident prediction:\n   ŷ=0.99, y=0 → −log(0.01) ≈ 4.6\n   ŷ=0.6, y=0  → −log(0.4)  ≈ 0.9\n\n   Log penalizes hubris!\n\n   clip ŷ to [ε, 1−ε] before log\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "Log turns products to sums",
              "CE is standard classification loss",
              "Logit links probs to linear models",
              "Clip before log avoids −∞",
              "Perplexity uses exp of avg NLL"
            ],
            example: "import numpy as np\ny = np.array([1.,0.,1.])\nyhat = np.clip(np.array([0.9,0.2,0.7]),1e-7,1-1e-7)\nbce = -(y*np.log(yhat)+(1-y)*np.log(1-yhat))\nprint(\"BCE:\", np.round(bce,3), \"mean:\", np.round(bce.mean(),3))",
            output: "BCE: [0.105 1.609 0.357] mean: 0.691"
          }
        ],
        exercises: [
          {
            id: "ex-log-1",
            question: "Compute ln(e³) and log₂(8) using numpy.",
            solution: "import numpy as np\nprint(np.log(np.e**3))\nprint(np.log(8)/np.log(2))",
            difficulty: "easy"
          },
          {
            id: "ex-log-2",
            question: "Apply softmax to logits [0,1,2] with numpy.",
            solution: "import numpy as np\nz = np.array([0.,1.,2.])\np = np.exp(z)/np.exp(z).sum()\nprint(np.round(p,4))",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-sequences",
        title: "Sequences & Series",
        description: "Arithmetic and geometric sequences, convergence, and summation notation for iterative algorithms.",
        level: "beginner",
        track: "math",
        sections: [
          {
            id: "seq-arith",
            title: "Arithmetic Sequences",
            content: "An **arithmetic sequence** has constant difference d: a_n = a₁ + (n−1)d. Sum of first n terms: S_n = n/2 · (2a₁ + (n−1)d) = n/2 · (a₁ + a_n). Used in linear schedules (add constant each step) and evenly spaced grids. In gradient descent with fixed step, parameter updates form arithmetic progression in gradient direction magnitude when gradient is constant. Indexing from 0: a_n = a₀ + n·d. Finite differences of linear sequences are constant. Warmup schedules often increase learning rate arithmetically before cosine decay.",
            formulas: [
              "a_n = a₁ + (n−1)d",
              "d = a_{n+1} − a_n",
              "S_n = n(a₁ + a_n) / 2",
              "S_n = n(2a₁ + (n−1)d) / 2",
              "Linear schedule: x_n = x₀ + n·Δ"
            ],
            diagram: "   a_n = 2, 5, 8, 11, 14 ...\n   d = 3\n\n   n:  1   2   3   4   5\n       │   │   │   │   │\n       2   5   8  11  14\n       └──+3─+3─+3─+3──\n\n   S_5 = 5/2·(2+14) = 40\n   │",
            keyPoints: [
              "Constant difference defines arithmetic",
              "Sum formula is O(1) not loop",
              "Linear LR warmup is arithmetic",
              "Grid search steps often arithmetic",
              "Index carefully: 0 vs 1 based"
            ],
            example: "import numpy as np\na1, d, n = 2, 3, 5\na = a1 + np.arange(n)*d\nprint(\"terms:\", a)\nprint(\"sum:\", a.sum(), \"formula:\", n*(a1+a[-1])/2)",
            output: "terms: [ 2  5  8 11 14]\nsum: 40 formula: 40.0"
          },
          {
            id: "seq-geom",
            title: "Geometric Sequences",
            content: "**Geometric sequence**: a_n = a₁·r^(n−1) with ratio r. Sum (r≠1): S_n = a₁(1−r^n)/(1−r). Infinite sum converges if |r|<1: S_∞ = a₁/(1−r). Exponential decay weights in EMA: s_t = β·s_{t−1}+(1−β)·x_t resembles geometric weighting of past observations. Learning rate decay η·γ^t is geometric. Ratio test for series convergence compares |a_{n+1}/a_n|. Compound interest multiplies by (1+r) each period—geometric growth familiar from finance.",
            formulas: [
              "a_n = a₁ · r^(n−1)",
              "S_n = a₁(1 − r^n) / (1 − r), r ≠ 1",
              "S_∞ = a₁ / (1 − r) if |r| < 1",
              "EMA: s_t = β s_{t−1} + (1−β) x_t",
              "LR: η_t = η₀ · γ^t"
            ],
            diagram: "   r = 1/2: 8, 4, 2, 1, 0.5 ...\n\n   each term × r\n   8 → 4 → 2 → 1 → 0.5\n\n   |r|<1: sum converges\n   S∞ = 8/(1-0.5) = 16\n\n   r>1: diverges\n   │",
            keyPoints: [
              "Ratio r multiplies each term",
              "|r|<1 needed for infinite sum",
              "EMA uses geometric smoothing",
              "LR geometric decay common",
              "Geometric ↔ exponential link"
            ],
            example: "import numpy as np\na1, r, n = 8, 0.5, 5\na = a1 * r**np.arange(n)\nprint(\"terms:\", a)\nprint(\"sum:\", a.sum(), \"limit:\", a1/(1-r))",
            output: "terms: [8.  4.  2.  1.  0.5]\nsum: 15.5 limit: 16.0"
          },
          {
            id: "seq-series",
            title: "Series & Sigma Notation",
            content: "**Series** ∑_{k=1}^n a_k sums sequence terms. **Telescoping** series cancel intermediate terms. **Harmonic** H_n=∑_{k=1}^n 1/k diverges slowly. **Geometric series** ∑r^k converges for |r|<1. Partial sums track training loss over epochs. Big-O analysis sums operation counts. Riemann sums approximate integrals as ∑f(x_i)Δx. Sigma notation compactly expresses batch loss (1/m)∑L_i. Rearranging absolutely convergent series is safe; conditional convergence requires caution in theoretical analysis.",
            formulas: [
              "∑_{k=1}^n a_k = a_1 + a_2 + ... + a_n",
              "∑_{k=0}^∞ r^k = 1/(1−r), |r|<1",
              "Batch loss: L = (1/m) ∑_{i=1}^m L_i",
              "H_n = ∑_{k=1}^n 1/k ~ ln(n)",
              "Riemann: ∫f ≈ ∑ f(x_i) Δx"
            ],
            diagram: "   ∑_{k=1}^5 k = 1+2+3+4+5 = 15\n\n   Sigma notation:\n        n\n       ___\n       \\   a_k\n       /__\n       k=1\n\n   Expands to explicit sum\n   Compact for proofs & code",
            keyPoints: [
              "Sigma notation standard in papers",
              "Partial sums monitor convergence",
              "Batch loss is mean over sum",
              "Geometric series closed form key",
              "Harmonic series diverges"
            ],
            example: "import numpy as np\nk = np.arange(1,6)\nprint(\"sum k:\", k.sum())\nprint(\"geom:\", np.sum(0.5**np.arange(10)))",
            output: "sum k: 15\ngeom: 1.998..."
          },
          {
            id: "seq-ml",
            title: "Sequences in Optimization",
            content: "Iterative algorithms produce **parameter sequences** θ₀, θ₁, ... converging to θ*. **Fixed-point** iteration x_{n+1}=g(x_n). Cauchy criterion: terms get closer: |a_{n+1}−a_n|→0. Monotonic bounded sequences converge. Early stopping when validation loss sequence stops improving. Momentum accumulates velocity sequence. Cosine annealing schedules LR smoothly. Convergence rate: linear (error × c each step) vs quadratic (Newton). Plotting loss sequences diagnoses training health and guides hyperparameter tuning.",
            formulas: [
              "θ_{t+1} = θ_t − η ∇L(θ_t)",
              "Momentum: v_t = β v_{t−1} + ∇L",
              "Cosine LR: η_t = η_min + ½(η_max−η_min)(1+cos(πt/T))",
              "Early stop when val loss plateaus",
              "Fixed point: x* = g(x*)"
            ],
            diagram: "   Loss vs epoch:\n   L │\n     │╲\n     │ ╲___ plateau\n     │     ─────\n     └────────── epoch\n\n   Good: steady decrease\n   Bad: oscillate / diverge\n   │",
            keyPoints: [
              "Monitor sequences not single points",
              "Early stopping prevents overfit",
              "Schedule LR along iteration index",
              "Momentum smooths update sequence",
              "Convergence needs patience + tuning"
            ],
            example: "import numpy as np\nloss = np.array([2.0,1.2,0.8,0.65,0.63,0.62,0.621])\nimprove = np.diff(loss)\nprint(\"improvements:\", np.round(improve,3))",
            output: "improvements: [-0.8  -0.4  -0.15 -0.02  -0.01  0.001]"
          }
        ],
        exercises: [
          {
            id: "ex-seq-1",
            question: "Generate first 6 terms of a_n=3+2n using numpy.",
            solution: "import numpy as np\nn = np.arange(6)\na = 3 + 2*n\nprint(a)",
            difficulty: "easy"
          },
          {
            id: "ex-seq-2",
            question: "Sum geometric series a1=1,r=0.5,n=10 terms; compare to 1/(1-r).",
            solution: "import numpy as np\nn=10\nprint(np.sum(0.5**np.arange(n)))\nprint(1/(1-0.5))",
            difficulty: "medium"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-complex",
        title: "Complex Numbers",
        description: "Complex plane arithmetic, polar form, and Euler formula connecting trig to exponentials.",
        level: "intermediate",
        track: "math",
        sections: [
          {
            id: "cx-basics",
            title: "Complex Number Basics",
            content: "A **complex number** z = a + bi where i² = −1. Real part Re(z)=a, imaginary Im(z)=b. **Complex plane** plots Re on x-axis, Im on y. Modulus |z| = √(a²+b²). Conjugate z̄ = a − bi satisfies z·z̄ = |z|². Division: multiply numerator and denominator by conjugate. Complex roots always exist: x²+1=0 has roots ±i. FFT uses complex exponentials to decompose signals. Some RNN stability analysis uses complex eigenvalues. Understanding the complex plane aids interpreting FFT bins and filter frequency responses.",
            formulas: [
              "z = a + bi, i² = −1",
              "|z| = √(a² + b²)",
              "z̄ = a − bi; z·z̄ = |z|²",
              "Re(z) = a, Im(z) = b",
              "Complex plane: (Re, Im) coordinates"
            ],
            diagram: "        Im\n         │    · z=a+bi\n         │   ╱|\n         │  ╱ |b\n         │ ╱  |\n    ─────┼────┼── Re\n         │    a\n         │\n   |z| = distance from origin\n   │",
            keyPoints: [
              "i² = −1 extends real algebra",
              "Modulus is Euclidean length",
              "Conjugate flips imaginary sign",
              "Complex plane aids visualization",
              "FFT relies on complex exponentials"
            ],
            example: "import numpy as np\nz = 3 + 4j\nprint(\"|z|:\", np.abs(z))\nprint(\"conj:\", np.conj(z))\nprint(\"z*conj:\", z*np.conj(z))",
            output: "|z|: 5.0\nconj: (3-4j)\nz*conj: (25+0j)"
          },
          {
            id: "cx-polar",
            title: "Polar Form & Euler",
            content: "Polar form: z = r(cos θ + i sin θ) = r·e^(iθ) where r=|z| and θ=arg(z). **Euler formula**: e^(iθ) = cos θ + i sin θ. Multiplication adds angles: r₁e^(iθ₁)·r₂e^(iθ₂) = r₁r₂e^(i(θ₁+θ₂)). De Moivre: (cos θ+i sin θ)^n = cos(nθ)+i sin(nθ). Phasors represent sinusoids in signal processing. Unit circle maps θ to e^(iθ). np.exp(1j*theta) computes efficiently. Euler identity e^(iπ)+1=0 connects five fundamental constants in one equation.",
            formulas: [
              "z = r·e^(iθ) = r(cos θ + i sin θ)",
              "e^(iθ) = cos θ + i sin θ (Euler)",
              "e^(iπ) + 1 = 0 (Euler identity)",
              "arg(z) = θ = atan2(b, a)",
              "|z₁·z₂| = |z₁|·|z₂|; arg(z₁z₂) = arg(z₁)+arg(z₂)"
            ],
            diagram: "   Unit circle:\n        Im\n         │  e^(iπ/2)=i\n         │ ╱\n    ─1───┼───1 Re\n         │ ╲\n         │  e^(−iπ/2)=−i\n\n   θ increases counterclockwise\n   r=1 on unit circle",
            keyPoints: [
              "Polar form simplifies multiplication",
              "Euler links exp and trig",
              "arg uses atan2 for quadrant",
              "e^(iπ)+1=0 famous identity",
              "FFT = sum of e^(−i2πkn/N)"
            ],
            example: "import numpy as np\ntheta = np.pi/4\nz = np.exp(1j*theta)\nprint(\"rect:\", np.round(z,3))\nprint(\"cos+isin:\", np.round(np.cos(theta)+1j*np.sin(theta),3))",
            output: "rect: (0.707+0.707j)\ncos+isin: (0.707+0.707j)"
          },
          {
            id: "cx-ops",
            title: "Complex Operations",
            content: "Addition component-wise: (a+bi)+(c+di)=(a+c)+(b+d)i. Multiplication: (a+bi)(c+di)=(ac−bd)+(ad+bc)i. Division via conjugate rationalization. Powers use De Moivre or repeated multiplication. np.real, np.imag extract parts. Complex matrices appear in quantum ML analogies. Hermitian transpose A* combines conjugate and transpose. Eigenvalues of real matrices may be complex conjugate pairs. Stability analysis: |λ|<1 for discrete dynamical systems ensures bounded trajectories.",
            formulas: [
              "(a+bi)(c+di) = (ac−bd) + (ad+bc)i",
              "z/w = z·w̄ / |w|²",
              "e^(iθ₁)·e^(iθ₂) = e^(i(θ₁+θ₂))",
              "A* = conjugate transpose",
              "|λ|<1 ⇒ stable discrete dynamics"
            ],
            diagram: "   Multiplication in polar:\n   z1: r1∠θ1  ×  z2: r2∠θ2\n   ─────────────────────────\n   result: r1·r2 ∠ (θ1+θ2)\n\n   lengths multiply\n   angles add\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "Multiply in polar by adding angles",
              "Division subtracts angles",
              "Hermitian for complex inner products",
              "Complex eigenvalues come in conjugate pairs",
              "Magnitude of eigenvalue = growth rate"
            ],
            example: "import numpy as np\nz1, z2 = 1+1j, 2+0j\nprint(\"product:\", z1*z2)\nprint(\"div:\", z1/z2)\nprint(\"angles add:\", np.angle(z1)+np.angle(z2), np.angle(z1*z2))",
            output: "product: (2+2j)\ndiv: (0.5+0.5j)\nangles add: ..."
          },
          {
            id: "cx-fft",
            title: "Complex Numbers in Signal & ML",
            content: "**Discrete Fourier Transform** X_k = ∑_{n=0}^{N−1} x_n e^(−i2πkn/N) decomposes signals into frequency components. Convolution theorem: FFT(domain) multiplies in frequency domain. Spectral analysis of time series uses |X_k|. Complex activations appear in specialized architectures. Phase arg(X_k) carries timing information. np.fft.fft returns complex array. Understanding e^(iωt) as rotating vector clarifies periodic patterns in sequential data and audio feature extraction pipelines.",
            formulas: [
              "X_k = ∑_{n=0}^{N−1} x_n e^(−i2πkn/N)",
              "F{f*g} = F{f}·F{g}",
              "|X_k| = magnitude at frequency k",
              "arg(X_k) = phase at frequency k",
              "Inverse FFT reconstructs signal from spectrum"
            ],
            diagram: "   Time domain     FFT     Frequency\n   ~~~~ waveform  ───→   |X(k)| bars\n\n   low k: slow trends\n   high k: fast oscillations\n\n   e^(−i2πkn/N) = rotate + sample\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "FFT is O(N log N) with fast algo",
              "Complex exponentials are DFT basis",
              "Magnitude spectrum common in features",
              "Phase matters for reconstruction",
              "Convolution via FFT saves compute"
            ],
            example: "import numpy as np\nt = np.linspace(0,1,8,endpoint=False)\nx = np.cos(2*np.pi*2*t)\nX = np.fft.fft(x)\nprint(\"|X|:\", np.round(np.abs(X),2))",
            output: "|X|: shows peaks at frequency bins"
          }
        ],
        exercises: [
          {
            id: "ex-cx-1",
            question: "Compute |3+4i| and arg using numpy.",
            solution: "import numpy as np\nz=3+4j\nprint(np.abs(z), np.angle(z))",
            difficulty: "easy"
          },
          {
            id: "ex-cx-2",
            question: "Verify e^(iπ)+1≈0 with numpy.",
            solution: "import numpy as np\nprint(np.exp(1j*np.pi)+1)",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      }
    ]
  },
  {
    num: 2,
    id: "module-math-02",
    fileName: "module-math-02-linalg1",
    exportName: "moduleMath02Topics",
    name: "Linear Algebra I",
    track: "math",
    description: "Vectors, dot and cross products, matrices, matrix operations, and solving linear systems.",
    topics: [
      {
        id: "math-vectors",
        title: "Vectors & Vector Spaces",
        description: "Learn vector notation, norms, unit vectors, and linear combinations in ℝⁿ.",
        level: "beginner",
        track: "math",
        sections: [
          {
            id: "vec-basics",
            title: "Vector Definition",
            content: "A **vector** v ∈ ℝⁿ is an ordered n-tuple (v₁, v₂, ..., vₙ). Geometrically, vectors represent magnitude and direction. **Vector addition** is component-wise: u+v = (u₁+v₁, ...). **Scalar multiplication** cv scales each component. The **zero vector** 0 is the additive identity. Vectors in data science represent feature rows, embeddings, and gradients. Column vs row vectors matter for matrix multiplication conventions. A **vector space** satisfies closure under addition and scalar multiplication with axioms from linear algebra.",
            formulas: [
              "v = (v₁, v₂, ..., vₙ) ∈ ℝⁿ",
              "u + v = (u₁+v₁, ..., uₙ+vₙ)",
              "cv = (cv₁, ..., cvₙ)",
              "0 = (0, ..., 0)",
              "Span{v₁,...,v_k} = all linear combinations"
            ],
            diagram: "   2D vector v = (3, 4)\n\n        y\n        │    ╱ v\n        │   ╱\n        │  ╱ |v|=5\n        │ ╱\n   ─────┼────── x\n        │\n   tail at origin, head at (3,4)",
            keyPoints: [
              "Vectors are ordered tuples",
              "Addition is component-wise",
              "Scalars stretch/shrink vectors",
              "Column vectors default in ML",
              "Span is set of all combinations"
            ],
            example: "import numpy as np\nv = np.array([3., 4.])\nu = np.array([1., 2.])\nprint(\"v+u:\", v+u)\nprint(\"2v:\", 2*v)",
            output: "v+u: [4. 6.]\n2v: [6. 8.]"
          },
          {
            id: "vec-norm",
            title: "Norms & Distance",
            content: "**L2 norm** (Euclidean): ||v||₂ = √(∑vᵢ²). **L1 norm**: ||v||₁ = ∑|vᵢ|. **L∞ norm**: max|vᵢ|. Unit vector v̂ = v/||v||. Distance d(u,v) = ||u−v||₂. L2 norm relates to dot product: ||v||² = v·v. Regularization in ML uses L1 (Lasso) and L2 (Ridge) penalties. Cosine similarity uses normalized dot product. np.linalg.norm(v, ord=2) computes Euclidean norm efficiently for high-dimensional embeddings and batch feature normalization pipelines.",
            formulas: [
              "||v||₂ = √(∑ vᵢ²)",
              "||v||₁ = ∑ |vᵢ|",
              "||v||∞ = max |vᵢ|",
              "v̂ = v / ||v||₂",
              "d(u,v) = ||u − v||₂"
            ],
            diagram: "   ||v|| = length of arrow\n\n        ╱|\n       ╱ |\n      ╱  | 4\n     ╱   |\n    /____|___\n       3\n\n   ||v|| = √(3²+4²) = 5",
            keyPoints: [
              "L2 is standard Euclidean length",
              "L1 encourages sparsity in ML",
              "Unit vectors have norm 1",
              "Distance is norm of difference",
              "Norms measure vector size"
            ],
            example: "import numpy as np\nv = np.array([3.,4.])\nprint(\"L2:\", np.linalg.norm(v))\nprint(\"unit:\", v/np.linalg.norm(v))",
            output: "L2: 5.0\nunit: [0.6 0.8]"
          },
          {
            id: "vec-span",
            title: "Linear Combinations & Span",
            content: "Linear combination: c₁v₁ + c₂v₂ + ... + c_k v_k. **Span** of vectors is all possible combinations. Vectors are **linearly independent** if no vector is a combination of others. Basis: independent set spanning the space. Dimension = size of basis. In PCA, principal components form an orthonormal basis. Feature columns spanning ℝⁿ determine rank of design matrix. Redundant features create linear dependence causing multicollinearity in regression.",
            formulas: [
              "c₁v₁ + ... + c_k v_k = linear combination",
              "Span{v₁,...,v_k} ⊆ vector space",
              "Independent: ∑cᵢvᵢ=0 ⇒ all cᵢ=0",
              "Basis: independent + spanning",
              "dim(V) = |basis|"
            ],
            diagram: "   v1 ────→  v2 ────→\n      \\         /\n       \\       /\n        \\     /\n         \\   /\n          span plane\n\n   Two independent vectors span ℝ²\n   │\n   │  · · ·",
            keyPoints: [
              "Span is all weighted sums",
              "Independence = no redundancy",
              "Basis minimal spanning set",
              "Rank = dimension of column space",
              "Dependent columns → singular XᵀX"
            ],
            example: "import numpy as np\nv1 = np.array([1.,0.])\nv2 = np.array([0.,1.])\nc1,c2=2,3\nprint(c1*v1+c2*v2)\nprint(\"independent:\", np.linalg.matrix_rank(np.column_stack([v1,v2])))",
            output: "[2. 3.]\nindependent: 2"
          },
          {
            id: "vec-ml",
            title: "Vectors in Data Science",
            content: "Each data point is a feature vector x ∈ ℝᵈ. **Embeddings** map discrete IDs to dense vectors. **Gradients** ∇L are vectors pointing uphill in loss. Batch stacking creates matrix X ∈ ℝ^{m×d}. Normalization scales feature vectors. Nearest neighbor search uses L2 distance in embedding space. Word2vec learns vector representations where similar words are close. Vectorized numpy operations apply element-wise ops without Python loops for speed.",
            formulas: [
              "x ∈ ℝᵈ feature vector",
              "X ∈ ℝ^{m×d} design matrix",
              "∇L ∈ ℝᵈ gradient vector",
              "cos(θ) = (u·v)/(||u|| ||v||)",
              "Embedding: id → ℝᵈ"
            ],
            diagram: "   Dataset as matrix:\n\n   x₁ ──→ row 1 of X\n   x₂ ──→ row 2 of X\n   ...\n   x_m ──→ row m of X\n\n   columns = features\n   rows = samples\n   │",
            keyPoints: [
              "Rows often = samples in sklearn",
              "Gradients same shape as params",
              "Embeddings capture semantics",
              "Vectorization speeds computation",
              "Normalize features before distance"
            ],
            example: "import numpy as np\nX = np.array([[1,2],[3,4],[5,6]])\nprint(\"shape:\", X.shape)\nprint(\"row0:\", X[0])\nprint(\"col0:\", X[:,0])",
            output: "shape: (3, 2)\nrow0: [1 2]\ncol0: [1 3 5]"
          }
        ],
        exercises: [
          {
            id: "ex-vec-1",
            question: "Compute L2 norm of [3,4,0] with numpy.",
            solution: "import numpy as np\nprint(np.linalg.norm([3,4,0]))",
            difficulty: "easy"
          },
          {
            id: "ex-vec-2",
            question: "Normalize vector [3,4] to unit length.",
            solution: "import numpy as np\nv=np.array([3.,4.]); print(v/np.linalg.norm(v))",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-dot-cross",
        title: "Dot Product & Cross Product",
        description: "Inner products measure similarity; cross products find orthogonal vectors in 3D.",
        level: "beginner",
        track: "math",
        sections: [
          {
            id: "dot-def",
            title: "Dot Product Definition",
            content: "**Dot product** u·v = ∑uᵢvᵢ = uᵀv for column vectors. Geometric: u·v = ||u|| ||v|| cos θ. Orthogonal when u·v=0. Bilinear and symmetric. Projects one vector onto another: proj_v(u) = (u·v/||v||²)v. In ML, dot product scores attention queries against keys. Linear layer y=Wx+b computes dot products of rows of W with x plus bias. Positive dot product suggests aligned directions in embedding space. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "u · v = ∑ uᵢ vᵢ = uᵀv",
              "u · v = ||u|| ||v|| cos θ",
              "u · v = 0 ⇔ orthogonal (θ=90°)",
              "proj_v(u) = (u·v / v·v) v",
              "Wx = dot products of W rows with x"
            ],
            diagram: "   u · v = |u||v|cosθ\n\n        v\n       ╱\n      ╱ θ\n     ╱_____ u\n\n   θ=0: cos=1, max dot\n   θ=90: cos=0, dot=0\n   │",
            keyPoints: [
              "Dot product sums pairwise products",
              "Measures alignment via cosine",
              "Zero dot = orthogonal",
              "Linear layers are dot products",
              "Attention uses scaled dot products"
            ],
            example: "import numpy as np\nu = np.array([1.,2.])\nv = np.array([3.,4.])\nprint(\"dot:\", np.dot(u,v))\nprint(\"u@v:\", u@v)",
            output: "dot: 11.0\nu@v: 11.0"
          },
          {
            id: "dot-geom",
            title: "Geometric Interpretation",
            content: "Angle between vectors: cos θ = (u·v)/(||u|| ||v||). **Cosine similarity** ignores magnitude, focuses on direction—common for text embeddings. Cauchy-Schwarz: |u·v| ≤ ||u|| ||v||. Triangle inequality on norms. Dot product positive when acute angle, negative when obtuse. Normalizing before dot gives cosine in [−1,1]. In recommendation systems, user and item embeddings with high cosine predict preference.",
            formulas: [
              "cos θ = (u·v) / (||u|| ||v||)",
              "|u·v| ≤ ||u|| ||v|| (Cauchy-Schwarz)",
              "||u+v|| ≤ ||u|| + ||v||",
              "cosine sim ∈ [−1, 1] after normalize",
              "u·u = ||u||² ≥ 0"
            ],
            diagram: "   cosine similarity scale:\n\n   1.0  same direction  →→→\n   0.0  orthogonal      →↑\n  -1.0  opposite        →←\n\n   normalize then dot\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "Cosine ignores vector length",
              "Cauchy-Schwarz bounds dot product",
              "Sign of dot indicates angle type",
              "Used in semantic search",
              "Self-dot gives squared norm"
            ],
            example: "import numpy as np\nu = np.array([1.,0.])\nv = np.array([1.,1.])\ncos = np.dot(u,v)/(np.linalg.norm(u)*np.linalg.norm(v))\nprint(\"cos θ:\", np.round(cos,3))",
            output: "cos θ: 0.707"
          },
          {
            id: "cross-3d",
            title: "Cross Product in 3D",
            content: "**Cross product** u×v ∈ ℝ³ perpendicular to both u and v. ||u×v|| = ||u|| ||v|| sin θ = area of parallelogram. Right-hand rule determines direction. u×v = −v×u anti-commutative. i×j=k standard basis. Used in 3D graphics, torque, and normal vectors for surfaces. In 2D, pseudo-scalar u_x v_y − u_y v_x gives signed area. Cross product less common in standard ML but appears in geometric deep learning and physics-informed nets.",
            formulas: [
              "u × v ⟂ u and ⟂ v",
              "||u × v|| = ||u|| ||v|| sin θ",
              "u × v = −v × u",
              "i × j = k (right-hand rule)",
              "Area = ||u × v||"
            ],
            diagram: "   u × v points up from plane\n\n      v ╱\n       ╱\n      ╱  u\n     /____\n   × = outward normal\n\n   right-hand rule:\n   curl fingers u→v, thumb = u×v",
            keyPoints: [
              "Cross product only in 3D (or 7D exotic)",
              "Gives perpendicular vector",
              "Magnitude = parallelogram area",
              "Anti-commutative",
              "Normals for 3D rendering"
            ],
            example: "import numpy as np\nu = np.array([1.,0.,0.])\nv = np.array([0.,1.,0.])\nprint(\"u×v:\", np.cross(u,v))",
            output: "u×v: [0. 0. 1.]"
          },
          {
            id: "dot-attn",
            title: "Dot Products in Neural Networks",
            content: "**Attention** score e_ij = q_i·k_j / √d measures query-key compatibility. Scaled dot prevents softmax saturation at large d. **Linear classification** sign(w·x + b) is perceptron. Matrix multiply C=AB: C_ij = row_i(A)·col_j(B). GPU accelerates batched dot products. Kernel SVM uses implicit dot products in feature space. Understanding dot products clarifies why weight initialization scale affects activation variance and training stability.",
            formulas: [
              "Attention: softmax(QKᵀ/√d) V",
              "score_ij = q_i · k_j / √d",
              "C_ij = A_i · B_j (matrix multiply)",
              "Perceptron: sign(w·x + b)",
              "K(x,x') = φ(x)·φ(x') kernel trick"
            ],
            diagram: "   Q  Kᵀ  →  scores  → softmax  →  weights\n\n   q1 · k1  q1 · k2  q1 · k3\n   q2 · k1  q2 · k2  q2 · k3\n\n   each cell = dot product\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Matrix multiply = batch dots",
              "Scale by √d in transformers",
              "Softmax turns scores to weights",
              "Linear layers are dot + bias",
              "Kernel = dot in feature space"
            ],
            example: "import numpy as np\nQ = np.array([[1.,0.],[0.,1.]])\nK = np.array([[1.,1.],[0.,1.]])\nscores = Q @ K.T\nprint(scores)",
            output: "scores: [[1. 1.] [0. 1.]]"
          }
        ],
        exercises: [
          {
            id: "ex-dot-1",
            question: "Compute dot product of [1,2,3] and [4,5,6].",
            solution: "import numpy as np\nprint(np.dot([1,2,3],[4,5,6]))",
            difficulty: "easy"
          },
          {
            id: "ex-dot-2",
            question: "Compute cosine similarity of [1,0] and [1,1].",
            solution: "import numpy as np\nu=np.array([1.,0.]); v=np.array([1.,1.])\nprint(np.dot(u,v)/(np.linalg.norm(u)*np.linalg.norm(v)))",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-matrices",
        title: "Matrices & Matrix Notation",
        description: "Understand matrix dimensions, special matrices, and matrix-vector multiplication.",
        level: "intermediate",
        track: "math",
        sections: [
          {
            id: "mat-basics",
            title: "Matrix Structure",
            content: "An m×n **matrix** A has m rows and n columns; entry A_ij at row i, column j. Square matrices m=n. **Identity** I_n has 1s on diagonal. **Zero matrix** all zeros. **Diagonal** matrix has off-diagonal zeros. **Symmetric** A=Aᵀ. Matrices represent linear transforms, datasets (samples×features), and weight layers. Transpose Aᵀ flips rows/columns. Storage order (row-major in C/numpy) affects cache performance in large matrix ops.",
            formulas: [
              "A ∈ ℝ^{m×n}; entry A_ij",
              "(Aᵀ)_ij = A_ji",
              "I_n: n×n identity",
              "Symmetric: A = Aᵀ",
              "Diagonal: A_ij=0 for i≠j"
            ],
            diagram: "   2×3 matrix A:\n\n       col1 col2 col3\n   r1 [ a11  a12  a13 ]\n   r2 [ a21  a22  a23 ]\n\n   m=2 rows, n=3 columns\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "First index = row, second = column",
              "Transpose swaps indices",
              "Identity leaves vectors unchanged",
              "Symmetric matrices have real eigenvalues",
              "Shape must align for multiply"
            ],
            example: "import numpy as np\nA = np.array([[1,2,3],[4,5,6]])\nprint(\"shape:\", A.shape)\nprint(\"A[1,2]:\", A[1,2])\nprint(\"A.T:\\n\", A.T)",
            output: "shape: (2, 3)\nA[1,2]: 6"
          },
          {
            id: "mat-mv",
            title: "Matrix-Vector Multiplication",
            content: "Ax for A∈ℝ^{m×n}, x∈ℝ^n produces y∈ℝ^m where y_i = ∑_j A_ij x_j = row_i(A)·x. Each output component is dot product of row with x. Geometrically, A transforms x to new space. **Linear layer** in neural nets: y=Wx+b. Composition of transforms: (BA)x = B(Ax). Column picture: Ax = x₁(col₁) + x₂(col₂) + ... linear combination of columns. Row picture: dot products of rows with x. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "y = Ax, y_i = ∑_j A_ij x_j",
              "Ax = x₁a₁ + x₂a₂ + ... (column view)",
              "y_i = row_i(A) · x",
              "(BA)x = B(Ax)",
              "W ∈ ℝ^{out×in} for y=Wx"
            ],
            diagram: "   A (m×n)  ×  x (n×1)  =  y (m×1)\n\n   [ row1 ]     [x1]      [r1·x]\n   [ row2 ]  ·  [x2]  =   [r2·x]\n   [ ...  ]     [..]      [ ... ]\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "Columns of A span output space",
              "Rows of A define hyperplanes",
              "Shape: (m×n)(n×1)=(m×1)",
              "Neural layer = matrix-vector + bias",
              "Composition = matrix multiply"
            ],
            example: "import numpy as np\nA = np.array([[1,2],[3,4],[5,6]])\nx = np.array([1.,2.])\nprint(\"Ax:\", A @ x)",
            output: "Ax: [ 5. 11. 17.]"
          },
          {
            id: "mat-special",
            title: "Special Matrices",
            content: "**Orthogonal** Q: QᵀQ=I; preserves lengths and angles. **Positive definite** symmetric A with xᵀAx>0 for x≠0—Hessians at minima. **Toeplitz** constant diagonals in time series. **Sparse** mostly zeros—efficient storage. **Stochastic** rows sum to 1—Markov chains. **Projection** P²=P. Understanding special structure enables faster algorithms (e.g., eigendecomposition for symmetric matrices always exists with real eigenvalues).",
            formulas: [
              "Orthogonal: QᵀQ = I",
              "Symmetric: A = Aᵀ",
              "PSD: xᵀAx ≥ 0 ∀x",
              "Projection: P² = P",
              "Stochastic: rows sum to 1"
            ],
            diagram: "   Orthogonal rotation Q:\n\n   x ──Q──→ Qx\n   ||x|| = ||Qx||\n\n   length preserved\n   angles preserved\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "Orthogonal = rotation/reflection",
              "Symmetric → real eigenvalues",
              "PSD matrices define valid covariances",
              "Sparse matrices save memory",
              "Structure enables fast solvers"
            ],
            example: "import numpy as np\nQ = np.array([[0,-1],[1,0]])  # 90° rot\nx = np.array([1.,0.])\nprint(\"Qx:\", Q@x, \"norm:\", np.linalg.norm(Q@x))",
            output: "Qx: [0. 1.] norm: 1.0"
          },
          {
            id: "mat-data",
            title: "Matrices as Data Tables",
            content: "Design matrix X ∈ ℝ^{n×p}: n samples, p features. Target vector y ∈ ℝ^n. Covariance Σ = (1/n)XᵀX (centered). Correlation from normalized covariance. Batch tensor (batch, features) in deep learning. Missing values require imputation before matrix ops. One-hot encoding creates sparse binary columns. Feature scaling applies column-wise transforms. Matrix view connects tabular data to linear algebra algorithms throughout sklearn and pytorch.",
            formulas: [
              "X ∈ ℝ^{n×p} design matrix",
              "Σ = (1/n) X̃ᵀ X̃ (centered covariance)",
              "y = Xβ + ε linear model",
              "One-hot: identity columns per category",
              "Batch: stack rows for mini-batch GD"
            ],
            diagram: "   X = features table\n\n   sample │ f1  f2  f3\n   ───────┼────────────\n     1    │ 2.1 0.5 1\n     2    │ 1.8 0.3 0\n     3    │ 3.0 0.9 1\n\n   each row = one observation\n   │",
            keyPoints: [
              "Rows = samples in sklearn convention",
              "Columns = features/variables",
              "Center columns before covariance",
              "Matrix form enables vectorized fit",
              "Batches are submatrices of data"
            ],
            example: "import numpy as np\nX = np.array([[2.1,0.5],[1.8,0.3],[3.0,0.9]])\nprint(\"mean cols:\", X.mean(axis=0))\nprint(\"cov:\\n\", np.cov(X.T))",
            output: "mean cols: [2.3  0.567]\ncov: ..."
          }
        ],
        exercises: [
          {
            id: "ex-mat-1",
            question: "Multiply [[1,2],[3,4]] by [1,1].",
            solution: "import numpy as np\nA=np.array([[1,2],[3,4]]); print(A @ [1,1])",
            difficulty: "easy"
          },
          {
            id: "ex-mat-2",
            question: "Create 3×3 identity and verify I@x=x.",
            solution: "import numpy as np\nI=np.eye(3); x=np.array([1,2,3.]); print(I@x)",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-matrix-ops",
        title: "Matrix Operations",
        description: "Matrix multiplication, transpose rules, and properties of matrix arithmetic.",
        level: "intermediate",
        track: "math",
        sections: [
          {
            id: "mm-def",
            title: "Matrix Multiplication",
            content: "For A∈ℝ^{m×k}, B∈ℝ^{k×n}, product C=AB ∈ ℝ^{m×n} with C_ij = ∑_l A_il B_lj. **Inner dimensions must match** (k). NOT commutative: AB≠BA generally. Associative: (AB)C=A(BC). Distributive over addition. Each C_ij is dot product of row i of A with column j of B. Chain of layers composes weight matrices. Strassen and blocked multiplication optimize large products on hardware. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "C = AB, C_ij = ∑_l A_il B_lj",
              "A: m×k, B: k×n → C: m×n",
              "AB ≠ BA in general",
              "(AB)C = A(BC)",
              "(AB)ᵀ = BᵀAᵀ"
            ],
            diagram: "   (m×k) · (k×n) = (m×n)\n\n   A         B         C\n   [ * * ] · [ * * ] = [ * * ]\n   [ * * ]   [ * * ]   [ * * ]\n             [ * * ]\n\n   k must match inner dim\n   │\n   │  · · ·",
            keyPoints: [
              "Inner dimension must align",
              "Order matters in multiplication",
              "Transpose reverses product order",
              "Each entry = row·column dot",
              "Composition of linear maps"
            ],
            example: "import numpy as np\nA = np.array([[1,2],[3,4]])\nB = np.array([[5,6],[7,8]])\nprint(\"AB:\\n\", A@B)\nprint(\"BA:\\n\", B@A)",
            output: "AB ≠ BA shown"
          },
          {
            id: "mm-prop",
            title: "Transpose & Trace",
            content: "**Transpose** (AB)ᵀ = BᵀAᵀ. Symmetric A iff A=Aᵀ. **Trace** tr(A)=∑A_ii, sum of diagonal. tr(AB)=tr(BA). Frobenius norm ||A||_F = √(∑A_ij²) = √(tr(AᵀA)). Transpose swaps row-column roles in gradients: ∂L/∂A = (∂L/∂B) Cᵀ when B=AC. In backprop, transpose appears when passing gradients backward through layers. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "(AB)ᵀ = BᵀAᵀ",
              "tr(A) = ∑ A_ii",
              "tr(AB) = tr(BA)",
              "||A||_F = √(tr(AᵀA))",
              "(Aᵀ)ᵀ = A"
            ],
            diagram: "   Transpose flip:\n\n   A = [1 2]     Aᵀ = [1 3]\n       [3 4]          [2 4]\n\n   rows become columns\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Transpose reverses multiply order",
              "Trace invariant under cyclic permute",
              "Frobenius norm for matrix size",
              "Symmetric matrices ↔ quadratic forms",
              "Gradients use transpose heavily"
            ],
            example: "import numpy as np\nA = np.array([[1,2],[3,4]])\nprint(\"tr(A):\", np.trace(A))\nprint(\"Fro norm:\", np.linalg.norm(A, \"fro\"))",
            output: "tr(A): 5\nFro norm: 5.477..."
          },
          {
            id: "mm-inv-det",
            title: "Preview: Inverse & Determinant",
            content: "Square matrix A **invertible** if ∃A⁻¹ with AA⁻¹=I. det(A)≠0 iff invertible. det(AB)=det(A)det(B). Inverse of 2×2: (1/det)[[d,−b],[−c,a]]. Singular matrices collapse dimension—non-invertible transform. Near-singular causes numerical instability. Condition number κ(A)=||A|| ||A⁻¹|| measures sensitivity. We'll deepen inverses and determinants in the next module; here we preview their role in solving Ax=b.",
            formulas: [
              "AA⁻¹ = A⁻¹A = I",
              "det(A) ≠ 0 ⇔ A invertible",
              "det(AB) = det(A)det(B)",
              "2×2: A⁻¹ = (1/det)[[d,-b],[-c,a]]",
              "κ(A) = ||A|| · ||A⁻¹||"
            ],
            diagram: "   Invertible: full rank\n\n   x ──A──→ y\n   x ←─A⁻¹─ y\n\n   Singular: squashes dim\n   [ 1  2 ] → line, not plane\n   [ 2  4 ]   (det=0)\n   │\n   │  · · ·",
            keyPoints: [
              "Inverse undoes linear map",
              "Zero determinant = singular",
              "Ill-conditioned = hard to invert",
              "Rank deficient → no unique inverse",
              "Preview for linear systems topic"
            ],
            example: "import numpy as np\nA = np.array([[4.,7.],[2.,6.]])\nprint(\"det:\", np.linalg.det(A))\nprint(\"inv:\\n\", np.linalg.inv(A))",
            output: "det: 10.0\ninv: ..."
          },
          {
            id: "mm-nn",
            title: "Matrix Ops in Neural Nets",
            content: "Fully connected layer: h = σ(Wx+b). Batch: H = σ(XWᵀ+B). Backprop: ∂L/∂W = (∂L/∂H)ᵀ X. Weight matrices learned by gradient descent. Conv layers use structured sparse matrices (Toeplitz). Attention: softmax(QKᵀ/√d)V. Residual: y=x+F(x) helps gradient flow. Xavier/He init scales W variance by fan-in/out. Matrix dimensions must align through network—shape debugging is essential skill. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "h = σ(Wx + b)",
              "Batch: H = σ(XWᵀ + B)",
              "Attention: softmax(QKᵀ/√d)V",
              "Residual: y = x + F(x)",
              "He init: W ~ N(0, 2/fan_in)"
            ],
            diagram: "   Layer stack:\n\n   x → W1 → σ → W2 → σ → ... → ŷ\n   n0   n1      n2\n\n   W1: n1×n0\n   W2: n2×n1\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "Check shapes at every layer",
              "Batch dim adds leading axis",
              "Transpose in batch forward pass",
              "Init scale affects training",
              "Residual eases deep gradients"
            ],
            example: "import numpy as np\nX = np.random.randn(32, 10)  # batch 32, in 10\nW = np.random.randn(5, 10)   # out 5\nH = X @ W.T\nprint(\"H shape:\", H.shape)",
            output: "H shape: (32, 5)"
          }
        ],
        exercises: [
          {
            id: "ex-mm-1",
            question: "Compute AB and BA for 2×2 matrices [[1,2],[3,4]] and [[0,1],[1,0]].",
            solution: "import numpy as np\nA=np.array([[1,2],[3,4]]); B=np.array([[0,1],[1,0]])\nprint(A@B); print(B@A)",
            difficulty: "easy"
          },
          {
            id: "ex-mm-2",
            question: "Verify (AB)ᵀ = BᵀAᵀ for random 2×3 and 3×2 matrices.",
            solution: "import numpy as np\nA=np.random.randn(2,3); B=np.random.randn(3,2)\nprint(np.allclose((A@B).T, B.T@A.T))",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-linear-systems",
        title: "Linear Systems & Gaussian Elimination",
        description: "Solve Ax=b via elimination, rank, and solution existence/uniqueness.",
        level: "intermediate",
        track: "math",
        sections: [
          {
            id: "ls-form",
            title: "System Formulation",
            content: "Linear system Ax=b: A∈ℝ^{m×n}, x∈ℝ^n unknown, b∈ℝ^m. **Consistent** if ∃x solution. Unique solution when A square and invertible. Overdetermined m>n: least squares min||Ax−b||₂. Underdetermined m<n: infinitely many solutions. Regression y=Xβ is linear system. Each equation is hyperplane; solution is intersection. Rank(A) determines solution structure via Rouché-Capelli theorem. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "Ax = b",
              "Consistent ⇔ b ∈ Col(A)",
              "Unique ⇔ A invertible (n×n, full rank)",
              "Least squares: min ||Ax − b||₂",
              "rank(A) = dim Col(A)"
            ],
            diagram: "   2 equations, 2 unknowns:\n\n   a11 x1 + a12 x2 = b1   ── line 1\n   a21 x1 + a22 x2 = b2   ── line 2\n\n   intersection = solution\n   parallel → none\n   same line → infinite\n   │\n   │  · · ·",
            keyPoints: [
              "Geometric: intersection of hyperplanes",
              "Square full rank → unique solution",
              "Overdetermined → least squares",
              "Rank determines consistency",
              "Regression is Ax=b"
            ],
            example: "import numpy as np\nA = np.array([[2.,1.],[1.,1.]])\nb = np.array([4.,3.])\nx = np.linalg.solve(A,b)\nprint(\"x:\", x)",
            output: "x: [1. 2.]"
          },
          {
            id: "ls-elim",
            title: "Gaussian Elimination",
            content: "**Gaussian elimination** row-reduces [A|b] to upper triangular form then back-substitutes. **Elementary row ops**: swap rows, scale row, add multiple of row to another. **Pivoting** swaps rows to avoid zero pivot and reduce error. LU decomposition: A=LU with L lower, U upper triangular. np.linalg.solve uses optimized LAPACK. Partial pivoting improves numerical stability for ill-conditioned systems.",
            formulas: [
              "Elementary ops preserve solution set",
              "Forward elimination → upper triangular U",
              "Back substitution from last equation",
              "A = LU factorization",
              "Partial pivoting: max |pivot|"
            ],
            diagram: "   [A|b] → row ops → [U|c]\n\n   [ 2  1 | 4 ]     [ 1  1 | 3 ]\n   [ 1  1 | 3 ]  →  [ 0  1 | 2 ]\n\n   back sub: x2=2, x1=1\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Row ops don't change solutions",
              "Pivot avoids division by zero",
              "LU enables fast multiple rhs",
              "Upper triangular easy to solve",
              "Pivoting improves accuracy"
            ],
            example: "import numpy as np\nA = np.array([[2.,1.,1.],[1.,2.,1.],[1.,1.,2.]])\nb = np.array([4.,4.,4.])\nprint(np.linalg.solve(A,b))",
            output: "[1. 1. 1.]"
          },
          {
            id: "ls-lsq",
            title: "Least Squares Solution",
            content: "When Ax=b has no exact solution, **least squares** finds x minimizing ||Ax−b||₂². Normal equations: AᵀAx=Aᵀb. Solution x=(AᵀA)⁻¹Aᵀb when AᵀA invertible. **Pseudo-inverse** A⁺ gives minimum-norm least squares. np.linalg.lstsq handles rank-deficient cases. Linear regression closed form uses this. QR or SVD more stable than forming AᵀA explicitly for ill-conditioned problems. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "min ||Ax − b||₂²",
              "Normal eq: AᵀAx = Aᵀb",
              "x = (AᵀA)⁻¹Aᵀb",
              "A⁺ pseudo-inverse",
              "lstsq via QR/SVD preferred"
            ],
            diagram: "   Overdetermined: more eqs than unknowns\n\n   ·  ·  ·  ·  data points\n        ╲\n         ╲  best fit line\n          ╲ minimizes Σ residual²\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "LS minimizes squared residuals",
              "Normal equations from calculus",
              "AᵀA may be ill-conditioned",
              "Pseudo-inverse generalizes inverse",
              "Regression = least squares"
            ],
            example: "import numpy as np\nX = np.array([[1,1],[1,2],[1,3]])\ny = np.array([2.,3.,5.])\nbeta, _, _, _ = np.linalg.lstsq(X, y, rcond=None)\nprint(\"beta:\", beta)",
            output: "beta: [0.5 1.5] approx"
          },
          {
            id: "ls-rank",
            title: "Rank & Null Space",
            content: "**Column space** Col(A) = {Ax | x∈ℝ^n}. **Null space** Null(A) = {x | Ax=0}. Rank-nullity: rank(A)+dim(Null(A))=n. Full column rank: independent columns. Rank deficiency indicates redundant features. SVD reveals rank via non-zero singular values. Solution to Ax=b unique iff rank(A)=rank([A|b])=n. Homogeneous Ax=0 always has x=0 trivial solution plus null space vectors. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "rank(A) = dim Col(A)",
              "rank(A) + nullity(A) = n",
              "Null(A) = {x : Ax = 0}",
              "Full rank ⇔ columns independent",
              "rank via SVD = # nonzero σ"
            ],
            diagram: "   Rank = # pivot columns\n\n   Full rank columns:\n   [ * * ]  rank 2\n   [ * * ]\n\n   Dependent column:\n   [ 1  2 ]  rank 1\n   [ 2  4 ]  col2 = 2·col1\n   │",
            keyPoints: [
              "Rank measures independent info",
              "Null space = directions A kills",
              "Redundant features lower rank",
              "SVD robust for rank detection",
              "Nullity counts free variables"
            ],
            example: "import numpy as np\nA = np.array([[1.,2.],[2.,4.]])\nprint(\"rank:\", np.linalg.matrix_rank(A))\nprint(\"null:\", np.linalg.null_space(A) if hasattr(np.linalg,\"null_space\") else \"use scipy\")",
            output: "rank: 1"
          }
        ],
        exercises: [
          {
            id: "ex-ls-1",
            question: "Solve [[2,1],[1,3]]x=[5,7] with np.linalg.solve.",
            solution: "import numpy as np\nA=np.array([[2,1],[1,3]]); print(np.linalg.solve(A,[5,7]))",
            difficulty: "easy"
          },
          {
            id: "ex-ls-2",
            question: "Fit line y=mx+c to points (0,1),(1,2),(2,2) via lstsq.",
            solution: "import numpy as np\nX=np.array([[0,1],[1,1],[2,1]]); y=np.array([1,2,2.])\nprint(np.linalg.lstsq(X,y,rcond=None)[0])",
            difficulty: "medium"
          }
        ],
        estimatedMinutes: 35
      }
    ]
  },
  {
    num: 3,
    id: "module-math-03",
    fileName: "module-math-03-linalg2",
    exportName: "moduleMath03Topics",
    name: "Linear Algebra II",
    track: "math",
    description: "Determinants, matrix inverse, eigenvalues, SVD, and PCA mathematical foundations.",
    topics: [
      {
        id: "math-determinants",
        title: "Determinants",
        description: "Compute and interpret determinants as volume scaling and invertibility tests.",
        level: "intermediate",
        track: "math",
        sections: [
          {
            id: "det-def",
            title: "Determinant Definition",
            content: "The **determinant** det(A) is a scalar for square A∈ℝ^{n×n}. det(A) measures signed volume scaling factor of linear transform A. det(A)=0 iff A is singular (non-invertible). For 2×2: det[[a,b],[c,d]]=ad−bc. det(Aᵀ)=det(A). det(AB)=det(A)det(B). Swapping two rows flips sign. Multiplying row by k multiplies det by k. Cofactor expansion works recursively. Determinants appear in change of variables in integrals and multivariate Gaussian normalization.",
            formulas: [
              "det(I) = 1",
              "det(AB) = det(A)det(B)",
              "2×2: det = ad − bc",
              "det(A) = 0 ⇔ A singular",
              "det(Aᵀ) = det(A)"
            ],
            diagram: "   2×2 area scaling:\n\n   unit square ──A──→ parallelogram\n   area × |det(A)|\n\n   det>0: orientation preserved\n   det<0: reflection\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "Determinant = volume scale factor",
              "Zero det → not invertible",
              "Product rule for det of product",
              "Sign indicates orientation flip",
              "Used in Jacobian determinants"
            ],
            example: "import numpy as np\nA = np.array([[3.,1.],[2.,4.]])\nprint(\"det:\", np.linalg.det(A))\nprint(\"manual:\", 3*4-1*2)",
            output: "det: 10.0\nmanual: 10.0"
          },
          {
            id: "det-geom",
            title: "Geometric Meaning",
            content: "Parallelogram area spanned by columns = |det([v₁ v₂])|. Signed det preserves orientation. In 3D, |det| = volume of parallelepiped. Linear map collapsing space has det=0 (e.g., projection). det(A)<0 implies reflection component. Absolute det in change of variables: ∫f(g(x))|det J|dx. Understanding geometry helps debug why singular covariance matrices break multivariate Gaussian density formulas. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "|det([v1 v2])| = parallelogram area",
              "3D: |det| = volume",
              "det=0 → dimension collapse",
              "sign(det) = orientation",
              "|det J| in change of variables"
            ],
            diagram: "   columns of A span shape:\n\n      v2\n      │╱\n      │╱ area = |det A|\n      │╱\n      └──── v1\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "Columns as spanning vectors",
              "Zero volume → dependent columns",
              "Jacobian det for coordinate change",
              "Sign matters in oriented integrals",
              "Covariance det in MVN density"
            ],
            example: "import numpy as np\nv1 = np.array([2.,0.]); v2 = np.array([1.,3.])\nprint(\"area:\", abs(np.linalg.det(np.column_stack([v1,v2]))))",
            output: "area: 6.0"
          },
          {
            id: "det-prop",
            title: "Properties & Computation",
            content: "Triangular matrix: det = product of diagonal entries. Row operations: adding multiple of row doesn't change det; swapping flips sign; scaling row scales det. LU: det(A)=det(L)det(U)=∏U_ii. O(n³) via elimination vs O(n!) naive cofactor. log(det(A)) via log-sum for positive definite matrices in likelihoods. np.linalg.slogdet returns sign and log-abs-det stably. For large PD matrices, Cholesky gives log det = 2∑log(diag(L)).",
            formulas: [
              "Triangular: det = ∏ diagonal",
              "Row swap → multiply det by −1",
              "det(A) = ∏ U_ii from LU",
              "log det(A) for PD via Cholesky",
              "slogdet for numerical stability"
            ],
            diagram: "   Upper triangular U:\n\n   [ * * * ]\n   [ 0 * * ]\n   [ 0 0 * ]\n\n   det = u11 · u22 · u33\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "Triangular det is easy product",
              "LU factorization for large n",
              "log det avoids overflow",
              "slogdet stable in numpy",
              "Cholesky for SPD matrices"
            ],
            example: "import numpy as np\nA = np.array([[2.,1.,0.],[0.,3.,1.],[0.,0.,4.]])\nsign, logdet = np.linalg.slogdet(A)\nprint(\"sign:\", sign, \"log|det|:\", logdet)",
            output: "sign: 1.0 log|det|: 2.484..."
          },
          {
            id: "det-ml",
            title: "Determinants in ML",
            content: "Multivariate Gaussian: p(x)=exp(−½(x−μ)ᵀΣ⁻¹(x−μ))/√((2π)ⁿdet Σ). Zero det Σ → degenerate distribution. Normalizing flows track log|det ∂f/∂x| for density transformation. Volume preservation in invertible nets requires |det J|=1. PCA uses det(Σ) related to product of eigenvalues. Regularization adds λI ensuring det(Σ+λI)>0. Matrix determinant lemma useful in Gaussian process updates. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "MVN norm: (2π)^(−n/2) |Σ|^(−1/2)",
              "det(Σ) = ∏ λ_i",
              "Flow: log p(z) = log p(f(x)) + log|det J|",
              "Regularize: Σ + λI",
              "det=0 → singular covariance"
            ],
            diagram: "   Σ eigenvalues λ1,λ2:\n\n   det(Σ) = λ1 · λ2\n\n   one λ→0: flat direction\n   det→0: no density in that dir\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "MVN needs positive det Σ",
              "Eigenvalue product = determinant",
              "Flows use Jacobian determinant",
              "Ridge adds to diagonal for stability",
              "Singular cov → PCA rank drop"
            ],
            example: "import numpy as np\nSigma = np.array([[2.,1.],[1.,2.]])\nprint(\"det Sigma:\", np.linalg.det(Sigma))\nprint(\"eig prod:\", np.prod(np.linalg.eigvalsh(Sigma)))",
            output: "det Sigma: 3.0\neig prod: 3.0"
          }
        ],
        exercises: [
          {
            id: "ex-det-1",
            question: "Compute det of [[1,2],[3,4]].",
            solution: "import numpy as np\nprint(np.linalg.det([[1,2],[3,4]]))",
            difficulty: "easy"
          },
          {
            id: "ex-det-2",
            question: "Verify det(AB)=det(A)det(B) for random 3×3.",
            solution: "import numpy as np\nA=np.random.randn(3,3); B=np.random.randn(3,3)\nprint(np.allclose(np.linalg.det(A@B), np.linalg.det(A)*np.linalg.det(B)))",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-inverse",
        title: "Matrix Inverse",
        description: "Compute and apply matrix inverses for solving systems and understanding transformations.",
        level: "intermediate",
        track: "math",
        sections: [
          {
            id: "inv-def",
            title: "Inverse Definition",
            content: "A⁻¹ satisfies AA⁻¹=A⁻¹A=I for square invertible A. Unique when exists. (AB)⁻¹=B⁻¹A⁻¹ reverse order like transpose. (Aᵀ)⁻¹=(A⁻¹)ᵀ. Inverse undoes linear transform: if y=Ax then x=A⁻¹y. Not all matrices invert—singular when det=0. Never invert large dense matrices explicitly in production; prefer solve(A,b). Inverse of orthogonal Q is Qᵀ. Diagonal inverse inverts diagonal entries. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "AA⁻¹ = A⁻¹A = I",
              "(AB)⁻¹ = B⁻¹A⁻¹",
              "(Aᵀ)⁻¹ = (A⁻¹)ᵀ",
              "A⁻¹ exists ⇔ det(A) ≠ 0",
              "Prefer solve(A,b) over inv(A)@b"
            ],
            diagram: "   A ──→ y = Ax\n   ↑         │\n   └── A⁻¹ ──┘\n\n   A⁻¹ undoes A\n   singular A: no inverse\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Inverse unique if exists",
              "Reverse order for product inverse",
              "Never invert ill-conditioned A",
              "Use solve for Ax=b",
              "Orthogonal: inverse = transpose"
            ],
            example: "import numpy as np\nA = np.array([[1.,2.],[3.,4.]])\nAinv = np.linalg.inv(A)\nprint(\"A@Ainv:\\n\", A@Ainv)",
            output: "A@Ainv: identity"
          },
          {
            id: "inv-2x2",
            title: "2×2 Inverse Formula",
            content: "For A=[[a,b],[c,d]], A⁻¹=(1/(ad−bc))[[d,−b],[−c,a]] when det≠0. Adjugate divided by determinant. Quick hand calculation useful for intuition. Cofactor matrix transpose divided by det generalizes to n×n. Singular when rows proportional: [1,2] and [2,4]. Near-singular when det≈0 causes huge entries in A⁻¹—ill-conditioning. Always check cond(A) before trusting explicit inverse. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "A⁻¹ = (1/det) [[d,−b], [−c,a]]",
              "det = ad − bc",
              "Singular when ad = bc",
              "adj(A)ᵀ / det(A)",
              "Large entries → ill-conditioned"
            ],
            diagram: "   [[a b]⁻¹  =  1/(ad-bc) [[ d -b]\n    [c d]]                    [-c  a]]\n\n   swap a,d; negate b,c; divide\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │\n   │  · · ·",
            keyPoints: [
              "Memorize 2×2 formula for speed",
              "Determinant in denominator critical",
              "Small det → unstable inverse",
              "Cofactor method generalizes",
              "Check condition number"
            ],
            example: "import numpy as np\na,b,c,d=1,2,3,4\nA=np.array([[a,b],[c,d]])\ndet=a*d-b*c\nAinv=(1/det)*np.array([[d,-b],[-c,a]])\nprint(Ainv)",
            output: "matches np.linalg.inv"
          },
          {
            id: "inv-pinv",
            title: "Pseudo-Inverse",
            content: "**Moore-Penrose pseudo-inverse** A⁺ generalizes inverse for non-square or singular A. SVD: A=UΣVᵀ, A⁺=VΣ⁺Uᵀ where Σ⁺ inverts non-zero singular values. Least squares minimum-norm: x=A⁺b. np.linalg.pinv uses SVD. Handles rank deficiency gracefully. In underdetermined consistent systems, A⁺ gives smallest ||x|| solution. Important for overdetermined regression when XᵀX singular. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "A⁺ via SVD: V Σ⁺ Uᵀ",
              "Least squares: x = A⁺b",
              "Minimum norm among LS solutions",
              "rank(A) = # nonzero σ",
              "pinv handles rectangular A"
            ],
            diagram: "   SVD: A = U Σ Vᵀ\n\n   invert nonzero σ only\n   zero σ → 0 in Σ⁺\n\n   robust for rank-deficient\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "SVD basis for pseudo-inverse",
              "Works for non-square matrices",
              "Minimum norm solution",
              "Stable vs normal equations",
              "Used in lstsq implementations"
            ],
            example: "import numpy as np\nA = np.array([[1.,1.],[2.,2.],[1.,0.]])\nprint(\"pinv@b:\", np.linalg.pinv(A) @ np.array([3.,6.,1.]))",
            output: "least squares solution"
          },
          {
            id: "inv-ml",
            title: "Inverse in Regression",
            content: "Closed-form OLS: β=(XᵀX)⁻¹Xᵀy when XᵀX invertible. Ridge: β=(XᵀX+λI)⁻¹Xᵀy always invertible for λ>0. Newton step: Δθ=H⁻¹∇L uses Hessian inverse. Fisher information inverse gives Cramér-Rao bound. Avoid explicit inverse—use np.linalg.solve(XTX, XTy). Woodbury matrix identity efficient for low-rank updates. Ill-conditioned X causes unstable (XᵀX)⁻¹—use regularization or SVD. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "OLS: β = (XᵀX)⁻¹ Xᵀy",
              "Ridge: (XᵀX + λI)⁻¹ Xᵀy",
              "Newton: Δθ = H⁻¹ ∇L",
              "Use solve not inv",
              "Woodbury for rank-k updates"
            ],
            diagram: "   Normal equations path:\n\n   XᵀX β = Xᵀy\n   solve instead of inv(XᵀX)\n\n   λI ridge stabilizes diagonal\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "OLS needs full rank X",
              "Ridge guarantees invertibility",
              "Newton uses Hessian inverse",
              "solve() numerically superior",
              "Regularize ill-conditioned problems"
            ],
            example: "import numpy as np\nX = np.array([[1,1],[1,2],[1,3.]])\ny = np.array([1.,2.,2.])\nlam = 0.1\nbeta = np.linalg.solve(X.T@X + lam*np.eye(2), X.T@y)\nprint(\"ridge beta:\", beta)",
            output: "ridge beta: ..."
          }
        ],
        exercises: [
          {
            id: "ex-inv-1",
            question: "Invert [[4,7],[2,6]] and verify A@Ainv=I.",
            solution: "import numpy as np\nA=np.array([[4.,7.],[2.,6.]]); I=np.linalg.inv(A); print(np.round(A@I,10))",
            difficulty: "easy"
          },
          {
            id: "ex-inv-2",
            question: "Solve OLS via pinv for X=[[1,1],[1,2],[1,3]], y=[1,2,2].",
            solution: "import numpy as np\nX=np.array([[1,1],[1,2],[1,3]]); y=np.array([1,2,2.])\nprint(np.linalg.pinv(X)@y)",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-eigen",
        title: "Eigenvalues & Eigenvectors",
        description: "Diagonalization, spectral theory, and dynamics via eigen decomposition.",
        level: "intermediate",
        track: "math",
        sections: [
          {
            id: "eig-def",
            title: "Eigenvalue Problem",
            content: "Av = λv: v≠0 is **eigenvector**, λ is **eigenvalue**. A acts on eigenvector by scaling only. det(A−λI)=0 characteristic polynomial roots give eigenvalues. Sum of eigenvalues = tr(A). Product = det(A). For symmetric A, real eigenvalues and orthogonal eigenvectors (spectral theorem). Power iteration finds dominant eigenvalue. Eigenvalues determine stability of linear dynamical systems x_{t+1}=Ax_t: |λ|<1 stable.",
            formulas: [
              "Av = λv",
              "det(A − λI) = 0",
              "∑ λ_i = tr(A)",
              "∏ λ_i = det(A)",
              "Symmetric A → real λ, orthogonal v"
            ],
            diagram: "   Av stretches v by λ\n\n      v ──A──→ λv (same direction)\n\n   λ>1: expand\n   0<λ<1: shrink\n   λ<0: flip + scale\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "Eigenvectors unchanged in direction",
              "Characteristic polynomial for λ",
              "Symmetric case always real",
              "Trace and det from eigenvalues",
              "Stability from |λ| in dynamics"
            ],
            example: "import numpy as np\nA = np.array([[2.,1.],[1.,2.]])\nw, v = np.linalg.eig(A)\nprint(\"λ:\", w)\nprint(\"Av:\", A@v[:,0], \"λv:\", w[0]*v[:,0])",
            output: "Av ≈ λv verified"
          },
          {
            id: "eig-diag",
            title: "Diagonalization",
            content: "If A has n independent eigenvectors, A=VΛV⁻¹ with Λ diagonal eigenvalues, V columns eigenvectors. A^k = VΛ^k V⁻¹ simplifies matrix powers. Symmetric: A=QΛQᵀ with Q orthogonal. Not all matrices diagonalizable—defective Jordan form needed. Similar matrices share eigenvalues. PCA covariance diagonalized by eigenvectors. Matrix exponential e^A = Ve^Λ V⁻¹ for diagonalizable A. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "A = V Λ V⁻¹",
              "Λ = diag(λ₁,...,λₙ)",
              "Symmetric: A = Q Λ Qᵀ",
              "A^k = V Λ^k V⁻¹",
              "Similar matrices: same eigenvalues"
            ],
            diagram: "   A = V Λ V⁻¹\n\n   V: eigenvector basis\n   Λ: scale in that basis\n\n   compute A^100 via Λ^100\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Diagonalization simplifies powers",
              "Orthogonal Q for symmetric A",
              "Independent eigenvectors required",
              "PCA = eigen decomposition Σ",
              "e^A via diagonal Λ"
            ],
            example: "import numpy as np\nA = np.array([[1.,2.],[0.,3.]])\nw,v = np.linalg.eig(A)\nprint(\"reconstruct:\", v @ np.diag(w) @ np.linalg.inv(v))",
            output: "reconstructs A"
          },
          {
            id: "eig-pca",
            title: "Eigenvalues in PCA",
            content: "Covariance Σ eigenvalues λ_i = variance along principal axis i. Eigenvectors = principal directions. Sort λ descending; keep top k for dimensionality reduction. Explained variance ratio λ_i/∑λ. Σ = QΛQᵀ with Q columns PC directions. np.linalg.eigh for symmetric—faster and stable than eig. Whitening scales by 1/√λ. Zero eigenvalues indicate redundant features or rank deficiency. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "Σ v_i = λ_i v_i",
              "λ_i = variance along PC i",
              "Explained var: λ_i / ∑λ_j",
              "Keep top-k eigenvectors",
              "eigh for symmetric Σ"
            ],
            diagram: "   PCA axes:\n\n   max variance → PC1 (λ1)\n        ↗\n   PC2 ↗  (λ2 smaller)\n\n   project onto top k PCs\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "Largest λ = most variance direction",
              "eigh preferred for covariance",
              "Whitening divides by √λ",
              "Zero λ = constant/redundant feature",
              "Explained ratio guides k choice"
            ],
            example: "import numpy as np\nX = np.random.randn(100,3)\nX -= X.mean(0)\nSigma = X.T@X/100\nw, Q = np.linalg.eigh(Sigma)\nprint(\"λ desc:\", np.sort(w)[::-1])",
            output: "eigenvalues descending"
          },
          {
            id: "eig-markov",
            title: "Eigenvalues in Markov & PageRank",
            content: "Stochastic matrix P (rows sum 1): largest eigenvalue λ₁=1 with stationary distribution π as eigenvector Pᵀπ=π. Power method: repeat v←Pv/||Pv|| converges to dominant eigenvector. Google PageRank solves eigenvalue problem on web graph. Markov chain mixing time related to second eigenvalue magnitude. Reversible chains have real eigenvalues. Spectral clustering uses eigenvectors of graph Laplacian—connects linear algebra to unsupervised learning.",
            formulas: [
              "P 1 = 1 for stochastic P",
              "π: Pᵀπ = π (stationary)",
              "Power method → dominant eigenvector",
              "PageRank = eigenvector of link matrix",
              "Spectral clustering uses Laplacian eigenvectors"
            ],
            diagram: "   Power iteration:\n\n   v₀ random\n   v₁ = P v₀ / ||P v₀||\n   v₂ = P v₁ / ||P v₁||\n   ...\n   → stationary distribution\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "λ=1 for stochastic matrices",
              "Power method simple but slow",
              "Second λ controls mixing",
              "Graph Laplacian eigenvectors cluster",
              "Dominant mode = long-run behavior"
            ],
            example: "import numpy as np\nP = np.array([[0.9,0.5],[0.1,0.5]])\nv = np.array([0.5,0.5])\nfor _ in range(20): v = P@v; v /= v.sum()\nprint(\"stationary:\", v)",
            output: "stationary: [0.833 0.167] approx"
          }
        ],
        exercises: [
          {
            id: "ex-eig-1",
            question: "Find eigenvalues of [[2,1],[1,2]].",
            solution: "import numpy as np\nprint(np.linalg.eigvalsh([[2,1],[1,2]]))",
            difficulty: "easy"
          },
          {
            id: "ex-eig-2",
            question: "Verify trace equals sum of eigenvalues for random 4×4.",
            solution: "import numpy as np\nA=np.random.randn(4,4)\nw,_=np.linalg.eig(A)\nprint(np.allclose(np.trace(A), w.sum()))",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-svd",
        title: "Singular Value Decomposition",
        description: "Factor matrices with SVD for compression, pseudoinverse, and low-rank approximation.",
        level: "advanced",
        track: "math",
        sections: [
          {
            id: "svd-def",
            title: "SVD Definition",
            content: "Any A∈ℝ^{m×n} factors as A=UΣVᵀ where U∈ℝ^{m×m} orthogonal, V∈ℝ^{n×n} orthogonal, Σ∈ℝ^{m×n} diagonal with σ₁≥σ₂≥...≥0 **singular values**. Rank(A)=#nonzero σ. Compact SVD uses only positive σ columns. SVD always exists—more general than eigendecomposition. σ_i² = eigenvalues of AᵀA (and AAᵀ). First right singular vector maximizes ||Av||/||v||. Foundation for PCA, recommender systems, and latent semantic analysis.",
            formulas: [
              "A = U Σ Vᵀ",
              "σ₁ ≥ σ₂ ≥ ... ≥ 0",
              "rank(A) = # nonzero σ",
              "σ_i(A) = √λ_i(AᵀA)",
              "U,V orthogonal"
            ],
            diagram: "   A = U Σ Vᵀ\n\n   m×m   m×n   n×n\n   rot   scale rot\n\n   σ1 ≥ σ2 ≥ ... ≥ 0\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "SVD always exists",
              "Singular values non-negative",
              "Rank from nonzero σ count",
              "Related to AᵀA eigenvalues",
              "Orthogonal U,V rotate space"
            ],
            example: "import numpy as np\nA = np.array([[1.,2.],[3.,4.],[5.,6.]])\nU,s,VT = np.linalg.svd(A, full_matrices=False)\nprint(\"σ:\", s)\nprint(\"rank:\", (s>1e-10).sum())",
            output: "σ: [9.5, 0.77] approx"
          },
          {
            id: "svd-lowrank",
            title: "Low-Rank Approximation",
            content: "Eckart-Young: best rank-k approximation A_k = ∑_{i=1}^k σ_i u_i v_iᵀ minimizes ||A−A_k||_F. Truncate small σ for compression/denoising. **Effective rank** from σ decay. Image compression keeps top k singular values. Noise often in small σ components. Recommender matrix factorization approximates R≈UVᵀ low rank. Choose k via scree plot of σ or cumulative energy ∑σ_i²/∑σ². Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "A_k = ∑_{i=1}^k σ_i u_i v_iᵀ",
              "min ||A − A_k||_F over rank k",
              "Energy: ∑_{i=1}^k σ_i² / ∑ σ_i²",
              "Truncation = denoising",
              "Matrix factorization ≈ low-rank SVD"
            ],
            diagram: "   σ1 ████████ large\n   σ2 ████\n   σ3 ██\n   σ4 █ noise\n   σ5 ░ truncate here\n\n   keep top k for compression\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "Best low-rank in Frobenius norm",
              "Scree plot guides k",
              "Energy fraction from σ²",
              "Denoise by truncating tail",
              "Netflix-style factorization"
            ],
            example: "import numpy as np\nA = np.random.randn(50,20)\nU,s,VT = np.linalg.svd(A, full_matrices=False)\nk=5\nAk = (U[:,:k]*s[:k]) @ VT[:k]\nprint(\"Fro err:\", np.linalg.norm(A-Ak,\"fro\"))",
            output: "Fro err: minimized for rank 5"
          },
          {
            id: "svd-pinv",
            title: "SVD & Pseudo-Inverse",
            content: "A⁺=VΣ⁺Uᵀ inverts nonzero σ. Solves least squares stably. Condition number κ(A)=σ_max/σ_min. Tiny σ_min → ill-conditioned—regularize via Tikhonov or truncate. np.linalg.lstsq uses SVD internally. Solve Ax=b for rank-deficient via pinv. Compare solve vs pinv on well-conditioned vs ill-conditioned systems to see numerical differences. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "A⁺ = V Σ⁺ Uᵀ",
              "κ(A) = σ_max / σ_min",
              "Tiny σ → ill-conditioned",
              "lstsq uses SVD",
              "Truncate σ for regularization"
            ],
            diagram: "   σ spectrum:\n\n   σ_max ─────────────\n   σ_min ─ (small gap → large κ)\n\n   κ large: sensitive to noise\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Condition number from σ ratio",
              "Pinv inverts only large σ",
              "Truncate = regularized inverse",
              "Prefer lstsq over normal eq",
              "SVD reveals numerical rank"
            ],
            example: "import numpy as np\nA = np.array([[1,1],[1,1.0001],[1,0]])\nprint(\"cond:\", np.linalg.cond(A))\nprint(\"pinv solve:\", np.linalg.pinv(A)@[3,3,1])",
            output: "ill-conditioned demo"
          },
          {
            id: "svd-ml",
            title: "SVD in ML Pipelines",
            content: "Latent Semantic Analysis: SVD on term-document matrix. Collaborative filtering: SVD on rating matrix. PCA via SVD of centered X: faster than XᵀX for tall matrices. np.linalg.svd(X, full_matrices=False) on n×p data. Neural network weight SVD for compression. Randomized SVD (sklearn) for huge sparse matrices. Understanding SVD clarifies why truncated decompositions reduce parameters while preserving structure.",
            formulas: [
              "PCA via SVD of centered X",
              "TruncatedSVD in sklearn",
              "Word embeddings from term-doc SVD",
              "Weight compression via SVD layers",
              "Randomized SVD for scale"
            ],
            diagram: "   Rating matrix R ≈ U Vᵀ\n\n   users × items\n   low rank captures taste\n\n   missing entries filled by UVᵀ\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "SVD faster than XᵀX for tall X",
              "TruncatedSVD for dimension reduction",
              "Matrix completion uses low rank",
              "Compress neural weights with SVD",
              "Randomized algorithms for big data"
            ],
            example: "import numpy as np\nX = np.random.randn(1000,10)\nX -= X.mean(0)\nU,s,VT = np.linalg.svd(X, full_matrices=False)\nX2 = (U[:,:3]*s[:3]) @ VT[:3]\nprint(\"shape reduced:\", X2.shape, \"var kept:\", (s[:3]**2).sum()/(s**2).sum())",
            output: "variance retained"
          }
        ],
        exercises: [
          {
            id: "ex-svd-1",
            question: "SVD of [[1,2],[3,4]]; print singular values.",
            solution: "import numpy as np\nprint(np.linalg.svd([[1,2],[3,4]], compute_uv=False))",
            difficulty: "easy"
          },
          {
            id: "ex-svd-2",
            question: "Rank-1 approx of [[1,2],[3,4]] via first SVD term.",
            solution: "import numpy as np\nA=np.array([[1.,2.],[3.,4.]]); U,s,VT=np.linalg.svd(A)\nA1=s[0]*np.outer(U[:,0],VT[0]); print(np.round(A1,2))",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-pca-math",
        title: "PCA Mathematics",
        description: "Principal component analysis as variance maximization and spectral decomposition.",
        level: "advanced",
        track: "math",
        sections: [
          {
            id: "pca-goal",
            title: "Variance Maximization",
            content: "PCA finds unit vector w maximizing Var(Xw)=wᵀΣw subject to ||w||=1. Solution: w = top eigenvector of covariance Σ. Second PC orthogonal to first, maximizes remaining variance. Iteratively: eigenvectors of Σ sorted by λ. Equivalent to SVD of centered data matrix. Minimizes reconstruction error of rank-k projection. Geometric: rotate to align with max spread axes. No labels needed—unsupervised linear dimensionality reduction.",
            formulas: [
              "max wᵀΣw s.t. ||w||=1",
              "Solution w = eigenvector of Σ",
              "λ = variance along PC",
              "PCs orthogonal for symmetric Σ",
              "Equivalent: SVD of centered X"
            ],
            diagram: "   scatter cloud:\n\n        ·  ·\n      · ·· ·\n        ·  ·\n      ↗ PC1 (max spread)\n     ↗ PC2\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "First PC = max variance direction",
              "Covariance eigenvectors = PCs",
              "Orthogonal PCs decorrelate",
              "Unsupervised—no labels",
              "SVD on X avoids Σ explicitly"
            ],
            example: "import numpy as np\nX = np.random.randn(200,2)\nX[:,1] = 0.5*X[:,0] + 0.5*np.random.randn(200)\nX -= X.mean(0)\nC = X.T@X/200\nw, v = np.linalg.eigh(C)\nprint(\"top PC:\", v[:,np.argmax(w)])",
            output: "top PC direction"
          },
          {
            id: "pca-proj",
            title: "Projection & Reconstruction",
            content: "Project x to k dims: z = W_kᵀ x where W_k columns top k eigenvectors. Reconstruct x̂ = W_k z = W_k W_kᵀ x. Reconstruction error ||x−x̂||² sum of trailing eigenvalues ∑_{i>k}λ_i. Mean centering essential before PCA. Explained variance ratio guides k. Whitened coords: z_i = w_iᵀx/√λ_i have unit variance. Biplot visualizes samples and feature loadings together. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "z = W_kᵀ x (projection)",
              "x̂ = W_k W_kᵀ x (reconstruction)",
              "Error = ∑_{i>k} λ_i",
              "Explained var = λ_i / ∑λ_j",
              "Whitening: divide by √λ_i"
            ],
            diagram: "   x ──W_kᵀ──→ z (k-dim)\n   x̂ ←─W_k─── z\n\n   info lost = tail λ\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │\n   │  · · ·",
            keyPoints: [
              "Center data first",
              "Lower k → more compression",
              "Reconstruction error measurable",
              "Whitening for ML inputs",
              "Loadings show feature weights"
            ],
            example: "import numpy as np\nX = np.random.randn(50,5); X -= X.mean(0)\nU,s,VT = np.linalg.svd(X, full_matrices=False)\nW = VT[:2].T\nZ = X@W\nXhat = Z@W.T\nprint(\"MSE:\", np.mean((X-Xhat)**2))",
            output: "MSE from truncated"
          },
          {
            id: "pca-kernel",
            title: "Kernel PCA Preview",
            content: "Kernel PCA applies PCA in feature space via kernel matrix K_ij=K(x_i,x_j) without explicit φ(x). Center K: K̃ = H K H with H=I−11ᵀ/n. Eigenvectors of K̃ give nonlinear PCs. Captures nonlinear structure linear PCA misses. Computationally O(n³)— costly for large n. Connection to spectral methods and graph embeddings. Choose kernel (RBF, polynomial) controls implicit feature space geometry. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "K_ij = K(x_i, x_j)",
              "K̃ = H K H (centered kernel)",
              "Eigen K̃ → nonlinear PCs",
              "Implicit φ via kernel trick",
              "O(n³) eigen problem"
            ],
            diagram: "   Linear PCA: straight projection\n\n   Kernel PCA: curved manifold\n      ·  ·\n    ·    ·  ← bend into φ space\n      ·  ·\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Kernel avoids explicit φ",
              "Center kernel matrix",
              "Nonlinear structure capture",
              "Scales poorly with n",
              "Related to RBF embeddings"
            ],
            example: "import numpy as np\nfrom sklearn.metrics.pairwise import rbf_kernel\nX = np.random.randn(30,3)\nK = rbf_kernel(X)\nH = np.eye(30) - np.ones((30,30))/30\nKc = H@K@H\nw = np.linalg.eigh(Kc)[0]\nprint(\"top eig:\", np.sort(w)[-3:])",
            output: "top kernel eigenvalues"
          },
          {
            id: "pca-practice",
            title: "PCA Practical Considerations",
            content: "Scale features before PCA if units differ—or PCA chases largest-scale feature. Correlation matrix PCA when variables standardized. Incremental PCA for streaming/large data. Randomized PCA approximate top components fast. Interpret loadings: which features drive each PC. Beware PCA on mixed categorical/numeric without encoding. For visualization, project to PC1-PC2. Cumulative variance plot selects k for 95% retention common in pipelines.",
            formulas: [
              "Standardize if scales differ",
              "Correlation PCA after z-score",
              "IncrementalPCA for big data",
              "95% variance rule for k",
              "Loadings interpret feature contribution"
            ],
            diagram: "   unscaled trap:\n\n   feature A: 0-1\n   feature B: 0-1000\n   PC1 ≈ B only!\n\n   → standardize first\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "Always consider scaling",
              "Loadings aid interpretation",
              "Incremental for memory limits",
              "95% rule common default",
              "PCA linear—nonlinear needs kernel"
            ],
            example: "import numpy as np\nfrom sklearn.preprocessing import StandardScaler\nX = np.column_stack([np.random.rand(100), np.random.rand(100)*1000])\nXs = StandardScaler().fit_transform(X)\nprint(\"PC1 loadings raw vs scaled differ greatly\")",
            output: "scaling matters"
          }
        ],
        exercises: [
          {
            id: "ex-pca-1",
            question: "PCA on 2D correlated data; print variance ratio of PC1.",
            solution: "import numpy as np\nX=np.random.randn(500,2); X[:,1]=X[:,0]+0.1*np.random.randn(500)\nX-=X.mean(0); s=np.linalg.svd(X,compute_uv=False)\nprint((s[0]**2)/(s**2).sum())",
            difficulty: "easy"
          },
          {
            id: "ex-pca-2",
            question: "Project 3D random points to 2D via top-2 SVD components.",
            solution: "import numpy as np\nX=np.random.randn(20,3); X-=X.mean(0)\nU,s,VT=np.linalg.svd(X,full_matrices=False)\nZ=(U[:,:2]*s[:2]); print(Z.shape)",
            difficulty: "medium"
          }
        ],
        estimatedMinutes: 35
      }
    ]
  },
  {
    num: 4,
    id: "module-math-04",
    fileName: "module-math-04-calculus1",
    exportName: "moduleMath04Topics",
    name: "Calculus I",
    track: "math",
    description: "Limits, derivatives, differentiation rules, Taylor series, and integrals.",
    topics: [
      {
        id: "math-limits",
        title: "Limits & Continuity",
        description: "Understand limits, continuity, and foundational definitions for derivatives.",
        level: "intermediate",
        track: "math",
        sections: [
          {
            id: "lim-def",
            title: "Limit Definition",
            content: "lim_{x→a} f(x) = L means f(x) gets arbitrarily close to L as x approaches a — the limit need not equal f(a). **One-sided limits** x→a⁻ and x→a⁺ must agree for the two-sided limit to exist. **Limits at infinity** describe horizontal asymptotes and long-run behavior. The ε-δ definition makes this precise: ∀ε>0, ∃δ>0 such that 0<|x−a|<δ ⇒ |f(x)−L|<ε. Limits are the foundation for derivatives and integrals.",
            formulas: [
              "lim_{x→a} f(x) = L",
              "lim_{x→a} f(x) exists ⇔ lim_{x→a⁻} f(x) = lim_{x→a⁺} f(x)",
              "lim_{x→∞} f(x) = L (horizontal asymptote y = L)",
              "ε-δ: ∀ε>0 ∃δ>0: 0<|x−a|<δ ⇒ |f(x)−L|<ε"
            ],
            diagram: "   f(x) near a:\n\n        L ─ ─ ─ ─ ─ target\n          ·  ·\n        ·    ·  f(x)\n          ·\n        ────┼──── x\n            a\n\n   lim_{x→a} f(x) = L",
            keyPoints: [
              "Limit ≠ function value at point",
              "Both one-sided limits must agree",
              "Infinity limits describe asymptotes",
              "ε-δ formalizes closeness",
              "Foundation for derivatives"
            ],
            example: "import numpy as np\nf = lambda x: (x**2-1)/(x-1)\nx = np.array([0.9,0.99,0.999,1.001,1.01])\nprint(\"f(x):\", f(x))",
            output: "f(x) → 2 as x→1"
          },
          {
            id: "lim-rules",
            title: "Limit Laws",
            content: "If lim f=L and lim g=M: lim(f+g)=L+M, lim(fg)=LM, lim(f/g)=L/M when M≠0. Polynomials and sums/products of continuous functions inherit limits term by term. Key special limits: lim_{x→0} sin(x)/x = 1 and lim_{x→0} (e^x−1)/x = 1. The **squeeze theorem** traps f between g and h with the same limit. Composition rules apply when inner limits stay in the domain.",
            formulas: [
              "lim(f+g) = lim f + lim g",
              "lim(f/g) = lim f / lim g",
              "lim_{x→0} sin(x)/x = 1",
              "lim_{x→0} (e^x − 1)/x = 1",
              "Squeeze: g≤f≤h → same limit"
            ],
            diagram: "   squeeze:\n\n   h(x) ────────\n        f(x) ~~~ squeezed\n   g(x) ────────\n        → same limit L\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Limit laws combine simple limits",
              "sin(x)/x key trig limit",
              "Squeeze for bounded functions",
              "Continuity from limit = value",
              "Composition needs care at boundaries"
            ],
            example: "import numpy as np\nx = np.linspace(-0.1,0.1,5); x=x[x!=0]\nprint(\"sin(x)/x:\", np.sin(x)/x)",
            output: "→ 1 near 0"
          },
          {
            id: "lim-lhopital",
            title: "L'Hôpital's Rule",
            content: "Direct substitution sometimes yields an **indeterminate form** — most commonly 0/0 or ∞/∞ — where the limit is not obvious from the ratio alone. **L'Hôpital's rule** says: if f and g are differentiable near a, g'(x)≠0 near a, and lim f(x)=lim g(x)=0 (or both →±∞), then lim_{x→a} f(x)/g(x) = lim_{x→a} f'(x)/g'(x) whenever the right-hand limit exists. Apply repeatedly if the result is still indeterminate. Other forms (0·∞, ∞−∞, 0⁰, 1^∞) require algebra first — rewrite into 0/0 or ∞/∞. Always verify conditions; the rule can fail if derivatives oscillate without a limit.",
            formulas: [
              "0/0 or ∞/∞ → try L'Hôpital",
              "lim_{x→a} f/g = lim_{x→a} f'/g' (conditions apply)",
              "Repeat until determinate or limit found",
              "0·∞ → rewrite as 0/(1/∞)",
              "Example: lim_{x→0} sin(x)/x = lim cos(x)/1 = 1"
            ],
            diagram: "   L'Hôpital for 0/0 at a:\n\n        L ─ ─ ─ ─ ─ limit of f/g\n          ·  ·\n        ·    ·  f(x)/g(x)\n          ·\n        ────┼──── x\n            a\n\n   lim f/g = lim f'/g'",
            keyPoints: [
              "Works on 0/0 and ∞/∞ directly",
              "Differentiate numerator and denominator",
              "May need several applications",
              "Rewrite other indeterminate forms first",
              "Check that derivative limit exists"
            ],
            example: "import sympy as sp\nx = sp.Symbol('x')\nexpr = (sp.exp(x) - 1) / x\nprint(\"limit:\", sp.limit(expr, x, 0))\nprint(\"L'Hopital check:\", sp.limit(sp.diff(sp.exp(x)-1,x)/sp.diff(x,x), x, 0))",
            output: "limit: 1"
          },
          {
            id: "lim-cont",
            title: "Continuity",
            content: "f continuous at a if lim_{x→a} f(x)=f(a). **Types of discontinuity**: removable (hole), jump, infinite. Continuous on [a,b] achieves max/min (Extreme Value Theorem). Intermediate Value Theorem: continuous f with f(a)<0<f(b) has root in (a,b). ML activations: ReLU continuous; sigmoid continuous; step discontinuous. Loss landscapes continuous in parameters for smooth models. Discontinuities cause optimization issues.",
            formulas: [
              "Continuous at a: lim_{x→a} f(x) = f(a)",
              "IVT: sign change → root",
              "EVT: continuous on [a,b] → max/min",
              "Removable: redefine at hole",
              "Jump: piecewise mismatch"
            ],
            diagram: "   continuous: no break\n   ───────╱──────\n\n   removable hole: ○\n   ───────○──────\n\n   jump:\n   ───────┐\n          └────\n   │",
            keyPoints: [
              "Continuous functions no jumps",
              "IVT finds roots bracketing",
              "Activations mostly continuous",
              "Discontinuities hurt gradients",
              "Piecewise needs match at joints"
            ],
            example: "import numpy as np\nx = np.linspace(-2,2,100)\nrelu = np.maximum(0,x)\nprint(\"ReLU continuous, kink at 0\")",
            output: "kink at 0 still continuous"
          },
          {
            id: "lim-ml",
            title: "Limits in Optimization",
            content: "Training seeks θ where loss L(θ) approaches minimum—often lim_{t→∞} L(θ_t) desired. Gradient descent step size η affects convergence limit. As η→0, discrete updates approximate continuous gradient flow ODE. Softmax limit as temperature T→0 approaches argmax. Sigmoid limit x→±∞ gives 0/1 hard threshold. Understanding limits clarifies asymptotic behavior of learning curves and regularization paths as λ→0 or λ→∞.",
            formulas: [
              "lim_{t→∞} L(θ_t) = L*",
              "η→0: GD → gradient flow",
              "softmax(z/T), T→0 → one-hot",
              "sigmoid(x), x→∞ → 1",
              "λ→∞: ridge → zero solution"
            ],
            diagram: "   loss vs iteration:\n\n   L │╲\n     │ ╲___\n     │     ────→ lim L*\n     └──────────── t\n   convergence = limit behavior\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "Optimization seeks limiting minimum",
              "LR too large prevents convergence",
              "Temperature limits in softmax",
              "Regularization path limits interpretable",
              "Asymptotic analysis guides tuning"
            ],
            example: "import numpy as np\nt = np.arange(1,100)\nL = 1.0/t + 0.01\nprint(\"lim approx:\", L[-1])",
            output: "decreasing to limit"
          }
        ],
        exercises: [
          {
            id: "ex-lim-1",
            question: "Numerically estimate lim (sin x)/x as x→0.",
            solution: "import numpy as np\nx=np.array([1e-1,1e-2,1e-3]); print(np.sin(x)/x)",
            difficulty: "easy"
          },
          {
            id: "ex-lim-2",
            question: "Estimate lim (x²-4)/(x-2) as x→2.",
            solution: "import numpy as np\nx=np.array([1.9,1.99,2.01]); print((x**2-4)/(x-2))",
            difficulty: "easy"
          },
          {
            id: "ex-lim-3",
            question: "Use SymPy to evaluate lim (e^x − 1)/x as x→0 (L'Hôpital form).",
            solution: "import sympy as sp\nx=sp.Symbol('x')\nprint(sp.limit((sp.exp(x)-1)/x, x, 0))",
            difficulty: "medium"
          }
        ],
        estimatedMinutes: 45
      },
      {
        id: "math-derivatives",
        title: "Derivatives",
        description: "Definition, interpretation as rate of change and tangent slope.",
        level: "intermediate",
        track: "math",
        sections: [
          {
            id: "der-def",
            title: "Derivative Definition",
            content: "f'(x) = lim_{h→0} [f(x+h)−f(x)]/h **difference quotient**. Geometric: slope of tangent line. Physical: instantaneous rate of change. Notation: df/dx, Df, ẋ. Differentiable ⇒ continuous (converse false: |x| at 0). Partial derivative ∂f/∂x_i holds others fixed—multivariate preview. In ML, ∂L/∂w is gradient component telling how loss changes with weight w. Autodiff computes derivatives algorithmically.",
            formulas: [
              "f'(x) = lim_{h→0} (f(x+h)−f(x))/h",
              "Tangent slope at x",
              "Differentiable ⇒ continuous",
              "∂f/∂x_i partial derivative",
              "∇f = vector of partials"
            ],
            diagram: "   secant → tangent as h→0\n\n        f(x)\n       ╱|\n      ╱ | rise\n     ╱  |/run = slope\n    ────┼── x\n        h→0\n   │\n   │  · · ·",
            keyPoints: [
              "Derivative = instantaneous rate",
              "Limit of secant slopes",
              "Gradient collects partials",
              "Non-differentiable at cusps",
              "Autodiff automates computation"
            ],
            example: "import numpy as np\nf = lambda x: x**2\ndef deriv(f,x,h=1e-5): return (f(x+h)-f(x))/h\nprint(\"f'(3):\", deriv(f,3), \"exact:\", 2*3)",
            output: "f'(3): 6.0"
          },
          {
            id: "der-interp",
            title: "Interpretations",
            content: "**Marginal effect**: ∂y/∂x_i how y changes per unit x_i. **Sensitivity analysis** in models. **Velocity** as dx/dt. **Jacobian** matrix of all partial derivatives for vector functions. **Hessian** second derivatives for curvature. Sign of derivative: increasing vs decreasing. Critical points where f'=0: potential max/min/inflection. Convex functions have non-negative second derivative. Loss gradient points uphill; descent uses −∇L.",
            formulas: [
              "f'(x)>0 → increasing",
              "f'(x)=0 → critical point",
              "f''(x)>0 → convex (local)",
              "Jacobian J_ij = ∂f_i/∂x_j",
              "Gradient descent: θ -= η∇L"
            ],
            diagram: "   f'(x) sign:\n\n   f'>0: climbing ↗\n   f'<0: falling ↘\n   f'=0: flat ─── (critical)\n\n   GD goes opposite gradient ↓\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "Gradient points uphill",
              "Descent uses negative gradient",
              "Jacobian for vector maps",
              "Hessian for curvature",
              "Critical points need second test"
            ],
            example: "import numpy as np\nx = np.linspace(-2,2,5)\nf = x**2\ngrad = 2*x\nprint(\"x:\", x, \"grad:\", grad)",
            output: "grad zero at x=0"
          },
          {
            id: "der-numeric",
            title: "Numerical Differentiation",
            content: "Forward diff: f'(x)≈(f(x+h)−f(x))/h, error O(h). Central diff: (f(x+h)−f(x−h))/(2h), error O(h²) better. Choose h~√ε_machine for float64. **Finite differences** verify autodiff implementations. np.gradient for discrete arrays. Too small h causes cancellation error; too large truncation error. Jacobian check: compare autograd to finite diff in unit tests for custom layers. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "Forward: (f(x+h)−f(x))/h",
              "Central: (f(x+h)−f(x−h))/(2h)",
              "Error central O(h²)",
              "h ≈ 1e-5 typical for float64",
              "gradient check in DL debugging"
            ],
            diagram: "   trade-off in h:\n\n   large h → truncation error\n   small h → cancellation noise\n        ╲    ╱\n         ╲  ╱  sweet spot ~1e-5\n          ╲╱\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "Central more accurate",
              "Balance truncation vs roundoff",
              "gradient check validates backprop",
              "np.gradient for discrete data",
              "Autodiff preferred in training"
            ],
            example: "import numpy as np\nf=lambda x: np.sin(x)\nx=1.0\nh=1e-5\ncentral=(f(x+h)-f(x-h))/(2*h)\nprint(\"cos(1) approx:\", central, \"exact:\", np.cos(x))",
            output: "matches cos(1)"
          },
          {
            id: "der-ml",
            title: "Derivatives in Loss Landscapes",
            content: "Loss L(θ) differentiable in θ for smooth models. Surface plot shows valleys and saddles. Gradient ∇L perpendicular to level curves. Zero gradient at stationary points—local min, max, or saddle. Plateau: gradient near zero slows learning. Sharp minima vs flat minima generalization debate. ReLU non-differentiable at 0 but subgradient methods work. Understanding derivatives essential for all gradient-based training.",
            formulas: [
              "∇L(θ) = 0 at stationary points",
              "Saddle: grad=0 but not extremum",
              "Plateau: |∇L| ≈ 0 slow training",
              "ReLU subgradient at 0",
              "Flat minima may generalize better"
            ],
            diagram: "   loss surface (2 params):\n\n        ╱╲  saddle\n       ╱  ╲╱╲\n      ╱ valley╲\n     local min\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Stationary ≠ always minimum",
              "Saddles common in high-D",
              "Plateaus need adaptive LR",
              "Subgradients extend to ReLU",
              "Visualize 2D slices for intuition"
            ],
            example: "import numpy as np\ntheta = np.array([1.,1.])\nL = lambda t: (t[0]-2)**2 + (t[1]+1)**2\nh=1e-5\ngrad = np.array([(L(theta+np.array([h,0]))-L(theta))/h,(L(theta+np.array([0,h]))-L(theta))/h])\nprint(\"grad:\", grad)",
            output: "grad at (1,1)"
          }
        ],
        exercises: [
          {
            id: "ex-der-1",
            question: "Numerically differentiate f(x)=x³ at x=2.",
            solution: "import numpy as np\nf=lambda x:x**3; x=2.; h=1e-5\nprint((f(x+h)-f(x-h))/(2*h), 3*x**2)",
            difficulty: "easy"
          },
          {
            id: "ex-der-2",
            question: "Compute gradient of L(w)=w² at w=3.",
            solution: "import numpy as np\nw=3.; print(2*w)",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-derivative-rules",
        title: "Differentiation Rules",
        description: "Power, product, quotient, and chain rules for efficient differentiation.",
        level: "intermediate",
        track: "math",
        sections: [
          {
            id: "dr-power",
            title: "Basic Rules",
            content: "Power: d/dx x^n = n x^{n−1}. Constant multiple: (cf)'=cf'. Sum: (f+g)'=f'+g'. Exponential: d/dx e^x = e^x. Log: d/dx ln(x)=1/x. Trig: (sin x)'=cos x, (cos x)'=−sin x. Sigmoid σ(x): σ'(x)=σ(x)(1−σ(x)). Softplus smooth ReLU: d/dx ln(1+e^x). These rules combine via chain/product to differentiate composite losses. Memorizing common derivatives speeds manual gradient checks. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "d/dx x^n = n x^(n−1)",
              "d/dx e^x = e^x",
              "d/dx ln(x) = 1/x",
              "σ'(x) = σ(x)(1−σ(x))",
              "(f+g)' = f' + g'"
            ],
            diagram: "   rule toolbox:\n\n   power  product  quotient  chain\n     ↓       ↓        ↓        ↓\n   combine for complex f(x)\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "Power rule most common",
              "Sigmoid derivative product form",
              "Sum rule linearizes",
              "Build complex from simple",
              "Table speeds manual work"
            ],
            example: "import numpy as np\nx=np.array([0.5,1.,2.])\ns=1/(1+np.exp(-x))\nprint(\"sigmoid:\", s, \"deriv:\", s*(1-s))",
            output: "sigmoid deriv"
          },
          {
            id: "dr-product",
            title: "Product & Quotient Rules",
            content: "**Product**: (fg)' = f'g + fg'. **Quotient**: (f/g)' = (f'g − fg')/g². **Reciprocal**: (1/g)' = −g'/g². Dot product derivative: d/dt(u·v)=u'·v+u·v'. Matrix product: d/dt(AB)=A'B+AB' when both vary. Used when loss combines products of predictions and weights. Quotient in softmax derivatives. Careful with order in matrix calculus—not commutative. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "(fg)' = f'g + fg'",
              "(f/g)' = (f'g − fg')/g²",
              "d(u·v) = u'·v + u·v'",
              "d(AB) = A'B + AB'",
              "(1/g)' = −g'/g²"
            ],
            diagram: "   (fg)': two terms\n\n   f ──┐\n       ├── product → f'g + fg'\n   g ──┘\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "Product rule two-term split",
              "Quotient for ratios",
              "Matrix product needs order",
              "Softmax uses quotient structure",
              "Verify with numeric diff"
            ],
            example: "import numpy as np\nx=2.\nf=lambda x:x**2; g=lambda x:np.sin(x)\nh=lambda x:f(x)*g(x)\nh1=(2*x)*np.sin(x)+x**2*np.cos(x)\nprint(\"product rule:\", h1)",
            output: "product rule at x=2"
          },
          {
            id: "dr-chain",
            title: "Chain Rule",
            content: "**Chain rule**: (f∘g)'(x) = f'(g(x))·g'(x). Multivariate: dz/dx = dz/dy · dy/dx. Deep networks: ∂L/∂x₁ = (∂L/∂x_n)(∂x_n/∂x_{n−1})...(∂x₂/∂x₁) product of Jacobians—backprop. **Computational graph** tracks dependencies. Reverse-mode autodiff efficient when many inputs, one output (typical loss). Forward-mode for few inputs. Chain rule is foundation of automatic differentiation in PyTorch/JAX. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "(f∘g)'(x) = f'(g(x))·g'(x)",
              "∂L/∂w = ∂L/∂y · ∂y/∂w",
              "Backprop = chain rule on graph",
              "Reverse-mode: one backward pass",
              "Jacobian product along path"
            ],
            diagram: "   x → g → u → f → L\n\n   dL/dx = dL/df · df/du · du/dx\n\n   chain multiplies local derivatives\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "Chain rule powers backprop",
              "Local grads multiply along path",
              "Reverse-mode efficient for DL",
              "Graph tracks computation",
              "Vanishing = product of small terms"
            ],
            example: "import numpy as np\n# L=(x²+1)³ at x=1: dL/dx=3(x²+1)²·2x\nx=1.; inner=x**2+1; print(3*inner**2*2*x)",
            output: "chain: 24 at x=1"
          },
          {
            id: "dr-common",
            title: "Common ML Derivatives",
            content: "MSE: L=(1/2)(y−ŷ)², ∂L/∂ŷ=ŷ−y. BCE with logits handled in fused ops. L2 reg: λ||w||², ∂/∂w=2λw. Cross-entropy w softmax combined derivative simplifies to ŷ−y one-hot. tanh': 1−tanh². GELU, SiLU modern activations have known derivatives. BatchNorm backward involves batch statistics derivatives. Keeping cheat sheet accelerates debugging custom layers without autograd. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "MSE: ∂L/∂ŷ = ŷ − y",
              "L2: ∂(λ||w||²)/∂w = 2λw",
              "Softmax+CE: ∂L/∂z = ŷ − y",
              "tanh': 1 − tanh²(x)",
              "ReLU': 1 if x>0 else 0"
            ],
            diagram: "   CE + softmax magic:\n\n   gradient w.r.t logits\n   = predicted − true\n\n   elegant single form\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "MSE gradient simple residual",
              "Softmax+CE simplifies beautifully",
              "L2 adds 2λw to gradient",
              "Know activation derivatives",
              "Fused ops for stability"
            ],
            example: "import numpy as np\ny=np.array([1.,0.,0.]); yhat=np.array([0.7,0.2,0.1])\nprint(\"grad CE approx:\", yhat-y)",
            output: "yhat - y"
          }
        ],
        exercises: [
          {
            id: "ex-dr-1",
            question: "Differentiate f(x)=x²·sin(x) at x=π/4 using product rule.",
            solution: "import numpy as np\nx=np.pi/4\nprint(2*x*np.sin(x)+x**2*np.cos(x))",
            difficulty: "easy"
          },
          {
            id: "ex-dr-2",
            question: "Chain rule: d/dx (3x+1)⁵ at x=0.",
            solution: "import numpy as np\nx=0.; inner=3*x+1; print(5*inner**4*3)",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-taylor",
        title: "Taylor Series & Approximation",
        description: "Polynomial approximations and numerical uses of Taylor expansions.",
        level: "intermediate",
        track: "math",
        sections: [
          {
            id: "tay-def",
            title: "Taylor Series Definition",
            content: "Taylor expansion of f about a: f(x)=∑_{n=0}^∞ f^(n)(a)/n! · (x−a)^n. **Maclaurin** is a=0. f(x)≈f(a)+f'(a)(x−a)+f''(a)(x−a)²/2! truncated. Remainder Lagrange form bounds error. sin(x), cos(x), e^x have infinite radius convergence. Approximate functions locally for analysis. Newton method uses first-order Taylor. Second-order Taylor gives Newton step with Hessian. In ML, linearization of nonlinear models near operating point.",
            formulas: [
              "f(x) = ∑ f^(n)(a)/n! · (x−a)^n",
              "T₁: f(a) + f'(a)(x−a)",
              "Maclaurin: expand at 0",
              "e^x = ∑ x^n/n!",
              "sin(x) = ∑ (−1)^n x^(2n+1)/(2n+1)!"
            ],
            diagram: "   local approx near a:\n\n   f(x) ≈ tangent parabola\n        ╱ curve f\n       ╱___ approx\n      a\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Taylor = local polynomial fit",
              "More terms → better approx",
              "Maclaurin common at origin",
              "e, sin, cos standard series",
              "Linearization = first-order Taylor"
            ],
            example: "import numpy as np\nx=0.1\nprint(\"e^x approx:\", 1+x+x**2/2, \"exact:\", np.exp(x))",
            output: "2nd order close"
          },
          {
            id: "tay-approx",
            title: "Approximation Error",
            content: "Truncation error from omitted terms. Higher-order terms matter far from expansion point. **Big-O** notation: f(x)=f(a)+f'(a)(x−a)+O((x−a)²). Choose expansion point near region of interest. Gradient descent is first-order—linear model of loss locally. Newton uses second-order curvature. Laplace approximation approximates integrals via Gaussian from second-order Taylor of log integrand—used in variational inference.",
            formulas: [
              "Error ~ f''(ξ)(x−a)²/2 (2nd order)",
              "Far from a: need more terms",
              "GD: first-order step",
              "Newton: second-order step",
              "Laplace approx: Taylor on log p"
            ],
            diagram: "   error grows with |x-a|\n\n   good:  ·── approx ≈ f\n   bad:   ·── diverge far out\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │\n   │  · · ·",
            keyPoints: [
              "Stay near expansion point",
              "Newton faster near minimum",
              "GD OK with small steps",
              "Laplace for Bayesian approx",
              "Big-O tracks leading error"
            ],
            example: "import numpy as np\nx=np.linspace(-1,1,5)\napprox=1+x+x**2/2+x**3/6\nprint(\"err:\", np.abs(np.exp(x)-approx))",
            output: "error small near 0"
          },
          {
            id: "tay-multivar",
            title: "Multivariate Taylor",
            content: "f(x+δ)≈f(x)+∇f(x)ᵀδ+½δᵀH(x)δ where H is Hessian. Gradient ∇f vector of first partials. Hessian H_ij=∂²f/∂x_i∂x_j symmetric if f twice differentiable. Critical point classification via H eigenvalues: all positive definite → min; all negative → max; mixed → saddle. Gauss-Newton approximates Hessian in nonlinear least squares. Natural gradient uses Fisher instead of Hessian. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "f(x+δ) ≈ f(x) + ∇fᵀδ + ½δᵀHδ",
              "H_ij = ∂²f/∂x_i∂x_j",
              "H positive definite → local min",
              "Mixed eigenvalues → saddle",
              "Gauss-Newton approx Hessian"
            ],
            diagram: "   Hessian eigenvalues at critical:\n\n   all + : bowl min\n   all − : cap max\n   mixed : saddle ╱╲\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "Gradient is first-order term",
              "Hessian captures curvature",
              "Eigenvalues classify critical pts",
              "Saddles plague high-D opt",
              "Second-order methods use H"
            ],
            example: "import numpy as np\n# f=x²+y², H=[[2,0],[0,2]]\nH=np.array([[2.,0.],[0.,2.]])\nprint(\"eig:\", np.linalg.eigvalsh(H))",
            output: "all positive → min"
          },
          {
            id: "tay-ml",
            title: "Taylor in ML Optimization",
            content: "Loss linearization L(θ+Δ)≈L(θ)+∇L·Δ guides GD step. **Newton**: Δ=−H⁻¹∇L from quadratic model. **Adam** adapts steps per parameter—not pure Taylor but related momentum. **Laplace approximation** for posterior p(θ|D)≈N(θ*, H⁻¹) at MAP. Linear models are first-order Taylor of complex models locally. Understanding Taylor links learning rate choice to validity of linear approximation. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "GD step from 1st order Taylor",
              "Newton from 2nd order model",
              "MAP + Laplace ≈ Gaussian posterior",
              "Small η: Taylor accurate",
              "Large η: higher terms matter"
            ],
            diagram: "   η too large:\n\n   linear approx breaks\n   overshoot minimum\n   oscillate diverge\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "LR tied to Taylor validity",
              "Newton quadratic convergence local",
              "Laplace for uncertainty approx",
              "Linear models = local approx",
              "Higher-order methods costly"
            ],
            example: "import numpy as np\nL=lambda t:t**2; grad=lambda t:2*t\nt=3.; eta=0.1\nprint(\"GD step:\", t-eta*grad(t))",
            output: "t decreases"
          }
        ],
        exercises: [
          {
            id: "ex-tay-1",
            question: "Approx e^0.1 with 3-term Maclaurin.",
            solution: "import numpy as np\nx=0.1\nprint(1+x+x**2/6, np.exp(x))",
            difficulty: "easy"
          },
          {
            id: "ex-tay-2",
            question: "2nd order Taylor of x² at a=3.",
            solution: "import numpy as np\na=3.; x=3.5\nprint(9+6*(x-a)+(x-a)**2, x**2)",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-integrals",
        title: "Integrals & Area",
        description: "Definite and indefinite integrals, Fundamental Theorem of Calculus.",
        level: "intermediate",
        track: "math",
        sections: [
          {
            id: "int-def",
            title: "Integral Definition",
            content: "**Riemann sum**: ∫_a^b f(x)dx ≈ ∑ f(x_i)Δx limit as partition refines. **Indefinite integral** ∫f(x)dx = F(x)+C where F'=f. **Definite integral** gives signed area under curve. Fundamental Theorem: ∫_a^b f(x)dx = F(b)−F(a) if F'=f. Probability: ∫ p(x)dx=1 for PDF. Expected value E[X]=∫ x p(x) dx. Loss as integral over data distribution population risk. Monte Carlo integrates via sampling average. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "∫_a^b f(x)dx = signed area",
              "F(b) − F(a) if F' = f",
              "∫ p(x)dx = 1 (PDF)",
              "E[X] = ∫ x p(x) dx",
              "Riemann: ∑ f(x_i) Δx"
            ],
            diagram: "   ∫_a^b f(x) dx = shaded area\n\n        f(x)\n       ╱╲\n      ╱  ╲___\n     ╱ area ╲\n   ─a────────b── x\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "Integral accumulates infinitesimals",
              "FTC links derivative and integral",
              "PDF integrates to 1",
              "Expectation is integral",
              "Monte Carlo for high-D integrals"
            ],
            example: "import numpy as np\nf=lambda x:x**2\na,b=0,2\nx=np.linspace(a,b,1000)\nprint(\"trapz:\", np.trapz(f(x),x), \"exact:\", 8/3)",
            output: "8/3"
          },
          {
            id: "int-rules",
            title: "Integration Techniques",
            content: "Power: ∫x^n dx = x^{n+1}/(n+1)+C, n≠−1. ∫1/x dx = ln|x|+C. **Substitution** u=g(x). **Integration by parts** ∫u dv = uv − ∫v du. **Partial fractions** for rational functions. Gaussian integral ∫ e^{−x²} dx = √π over ℝ. Many ML expectations reduce to known integrals or numerical quadrature. scipy.integrate.quad for 1D numeric integration. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "∫ x^n dx = x^(n+1)/(n+1) + C",
              "∫ e^x dx = e^x + C",
              "∫ 1/x dx = ln|x| + C",
              "∫ e^(−x²) dx = √π (over ℝ)",
              "By parts: ∫u dv = uv − ∫v du"
            ],
            diagram: "   by parts picks u,dv:\n\n   ∫ u dv = u·v − ∫ v du\n\n   choose u that simplifies when diff\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "Substitution reverses chain rule",
              "By parts for products",
              "Gaussian integral famous",
              "Numerical quad when no closed form",
              "PDF normalization uses integrals"
            ],
            example: "import numpy as np\nfrom scipy import integrate\nval,_=integrate.quad(lambda x:np.exp(-x**2),-np.inf,np.inf)\nprint(\"gaussian:\", val, \"sqrt pi:\", np.sqrt(np.pi))",
            output: "sqrt pi"
          },
          {
            id: "int-prob",
            title: "Integrals in Probability",
            content: "Continuous PDF p(x)≥0, ∫p=1. CDF F(x)=∫_{−∞}^x p(t)dt. E[g(X)]=∫ g(x)p(x)dx. Variance via ∫ (x−μ)²p(x)dx. Joint PDF integrates to 1 over ℝ². Marginal: p(x)=∫ p(x,y)dy. Change of variables: if y=g(x), ∫ f(y)dy = ∫ f(g(x))|g'(x)|dx. Jacobian determinant generalizes to multivariate. Evidence ∫ p(D|θ)p(θ)dθ intractable—MCMC/VI approximate. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "∫ p(x) dx = 1",
              "F(x) = ∫_{−∞}^x p(t) dt",
              "E[g(X)] = ∫ g(x) p(x) dx",
              "Marginal: ∫ p(x,y) dy",
              "Change vars: multiply by |dx/dy|"
            ],
            diagram: "   PDF normalization:\n\n   area under p(x) = 1\n\n   p(x)\n   │  ╱╲\n   │ ╱  ╲\n   └──┴───┴── x\n   total area = 1\n   │",
            keyPoints: [
              "PDF must integrate to 1",
              "CDF is cumulative integral",
              "Expectations are integrals",
              "Jacobian in multivariate change",
              "Evidence integral often hard"
            ],
            example: "import numpy as np\nx=np.linspace(-4,4,1000)\np=np.exp(-x**2/2)/np.sqrt(2*np.pi)\nprint(\"norm check:\", np.trapz(p,x))",
            output: "≈ 1.0"
          },
          {
            id: "int-mc",
            title: "Monte Carlo Integration",
            content: "Estimate ∫ f(x)p(x)dx ≈ (1/N)∑ f(x_i) with x_i~p—unbiased if samples from p. **Importance sampling** sample from q instead, weight f/q. **MCMC** generates correlated samples from posterior. High-dimensional integrals: MC often beats grid. Variance decreases O(1/√N). Used in Bayesian model evidence, policy gradient expectations, and dropout as approximate integral over weights. np.random provides sampling primitives.",
            formulas: [
              "E[f(X)] ≈ (1/N) ∑ f(x_i)",
              "Var ∝ 1/N",
              "Importance: weight by p/q",
              "MCMC for posterior expectations",
              "High-D: MC scales better than grid"
            ],
            diagram: "   MC integration:\n\n   sample · · · under p(x)\n   average f(x_i)\n\n   more samples → less error\n   error ~ 1/√N\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "MC for high-dimensional integrals",
              "Importance sampling reduces variance",
              "MCMC for Bayesian inference",
              "1/√N convergence slow but general",
              "Dropout ≈ MC over masks"
            ],
            example: "import numpy as np\nnp.random.seed(0)\nsamples=np.random.randn(100000)\nest=np.mean(samples**2)\nprint(\"E[X²] est:\", est, \"true:\", 1.0)",
            output: "≈ 1.0"
          }
        ],
        exercises: [
          {
            id: "ex-int-1",
            question: "Integrate x² from 0 to 2 via trapz.",
            solution: "import numpy as np\nx=np.linspace(0,2,1000); print(np.trapz(x**2,x))",
            difficulty: "easy"
          },
          {
            id: "ex-int-2",
            question: "Estimate π via MC: mean(4*1_{x²+y²≤1}).",
            solution: "import numpy as np\nn=100000\nx,y=np.random.rand(2,n)\nprint(4*np.mean(x**2+y**2<=1))",
            difficulty: "medium"
          }
        ],
        estimatedMinutes: 35
      }
    ]
  },
  {
    num: 5,
    id: "module-math-05",
    fileName: "module-math-05-calculus2",
    exportName: "moduleMath05Topics",
    name: "Calculus II & Multivariate",
    track: "math",
    description: "Partial derivatives, gradient, chain rule, Jacobian/Hessian, and multivariate optimization.",
    topics: [
      {
        id: "math-partial-deriv",
        title: "Partial Derivatives",
        description: "Differentiate multivariate functions holding other variables fixed.",
        level: "advanced",
        track: "math",
        sections: [
          {
            id: "pd-def",
            title: "Partial Derivative Definition",
            content: "For f(x₁,...,x_n), **partial derivative** ∂f/∂x_i = lim_{h→0} [f(...,x_i+h,...)-f(...,x_i,...)]/h holding other x_j fixed. Notation ∂f/∂x_i or f_{x_i}. **Gradient** ∇f collects all partials as column vector. **Directional derivative** D_u f = ∇f·u for unit u. Slice f(x,y) at fixed y gives curve; ∂f/∂x is slope along x. In neural nets, ∂L/∂W_ij is partial of loss w.r.t. one weight. Autodiff computes all partials efficiently via reverse accumulation.",
            formulas: [
              "∂f/∂x_i = lim_{h→0} (f(...,x_i+h,...)−f(...,x_i,...))/h",
              "∇f = (∂f/∂x₁, ..., ∂f/∂x_n)ᵀ",
              "D_u f = ∇f · u",
              "Mixed partial: ∂²f/∂x∂y",
              "Clairaut: ∂²f/∂x∂y = ∂²f/∂y∂x (smooth)"
            ],
            diagram: "   f(x,y) surface:\n\n   fix y=y₀ → curve in x\n   ∂f/∂x = slope along x\n\n        z\n       ╱│ slice at y₀\n      ╱ │\n     ╱──┼── x\n   │",
            keyPoints: [
              "Hold other vars constant",
              "Gradient stacks all partials",
              "Directional deriv projects gradient",
              "Mixed partials often commute",
              "Each weight has partial in NN"
            ],
            example: "import numpy as np\ndef f(x,y): return x**2 + 3*x*y + y**2\nx,y=1.,2.\nh=1e-5\ndfdx=(f(x+h,y)-f(x-h,y))/(2*h)\nprint(\"∂f/∂x:\", dfdx, \"exact:\", 2*x+3*y)",
            output: "∂f/∂x: 8"
          },
          {
            id: "pd-geom",
            title: "Geometric Meaning",
            content: "∇f points direction of steepest ascent. Magnitude ||∇f|| = max rate of increase. Level set {f=c}: ∇f perpendicular to level curve. Negative gradient −∇f steepest descent direction for minimization. Contour plot: gradient orthogonal to contours. For loss L(θ), gradient in parameter space points uphill. Moving −η∇L decreases loss first-order. In 2D, visualize gradient arrows on contour grid for intuition.",
            formulas: [
              "∇f ⟂ level sets",
              "Steepest ascent direction",
              "||∇f|| = max directional derivative",
              "−∇f = steepest descent",
              "Contour ⊥ gradient"
            ],
            diagram: "   contour map + gradient:\n\n      ╭──╮  → ∇f points outward\n     ╱    ╲    from center min\n    │  ·   │   at min: ∇f=0\n     ╲    ╱\n      ╰──╯\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "Gradient perpendicular to contours",
              "Descent opposite gradient",
              "Zero gradient at critical points",
              "Visualize on 2D slices",
              "Magnitude = steepness"
            ],
            example: "import numpy as np\nx,y=1.,1.\ngrad=np.array([2*x+3*y, 3*x+2*y])\nprint(\"grad:\", grad, \"norm:\", np.linalg.norm(grad))",
            output: "grad at (1,1)"
          },
          {
            id: "pd-higher",
            title: "Higher-Order Partials",
            content: "**Hessian** H_ij=∂²f/∂x_i∂x_j matrix of second partials. Symmetric if f C². Diagonal ∂²f/∂x_i² measures curvature along axis i. **Laplacian** ∇²f = ∑ ∂²f/∂x_i² sum of diagonal second partials—appears in diffusion and score matching. Determinant of Hessian in multivariate change of variables. Fisher information related to expected Hessian of log-likelihood. Small Hessian eigenvalues → flat directions.",
            formulas: [
              "H_ij = ∂²f/∂x_i∂x_j",
              "H symmetric for C² f",
              "∇²f = tr(H) (Laplacian)",
              "det(H) in multivariate transform",
              "Flat dir: small H eigenvalue"
            ],
            diagram: "   H eigenvalues = curvatures:\n\n   λ1 large: narrow valley\n   λ2 small: flat along PC2\n\n   condition number = λ_max/λ_min\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Hessian describes curvature",
              "Laplacian sums second partials",
              "Eigenvalues shape optimization",
              "Ill-conditioning from H ratio",
              "Fisher ≈ expected Hessian"
            ],
            example: "import numpy as np\n# f=x²+2xy+3y², H=[[2,2],[2,6]]\nH=np.array([[2.,2.],[2.,6.]])\nprint(\"eig:\", np.linalg.eigvalsh(H))",
            output: "curvature directions"
          },
          {
            id: "pd-ml",
            title: "Partials in Backprop",
            content: "Each layer computes local Jacobian ∂h/∂x. Chain rule multiplies Jacobians backward. ∂L/∂x = (∂L/∂h)(∂h/∂x). For linear h=Wx, ∂h/∂W=x, ∂h/∂x=Wᵀ. Element-wise activation: Jacobian diagonal with σ'(z). Batch sums gradients over samples. PyTorch autograd builds graph and .backward() applies chain rule automatically. Manual partials verify implementation for custom ops. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "∂L/∂x = (∂L/∂h)(∂h/∂x)",
              "Linear: ∂(Wx)/∂W = x",
              "Activation: diag(σ'(z))",
              "Batch grad = sum over samples",
              "autograd = automatic partials"
            ],
            diagram: "   layer chain:\n\n   x → z=Wx → h=σ(z) → L\n\n   backward multiplies\n   local partials upstream\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Backprop = chain of partials",
              "Linear layer grad w.r.t W outer product",
              "ReLU mask in backward",
              "Sum batch for weight update",
              "Verify custom ops manually"
            ],
            example: "import numpy as np\nW=np.array([[1.,2.],[3.,4.]]); x=np.array([1.,0.5])\nh=W@x\nprint(\"dh/dx:\", W.T, \"shape matches x\")",
            output: "W.T for backprop to x"
          }
        ],
        exercises: [
          {
            id: "ex-pd-1",
            question: "Compute ∂/∂x (x²y) at x=2,y=3.",
            solution: "import numpy as np\nprint(2*2*3)",
            difficulty: "easy"
          },
          {
            id: "ex-pd-2",
            question: "Numerical gradient of f(x,y)=x²+y² at (3,4).",
            solution: "import numpy as np\nf=lambda x,y:x**2+y**2; h=1e-5\nprint((f(3+h,4)-f(3-h,4))/(2*h), (f(3,4+h)-f(3,4-h))/(2*h))",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-gradient",
        title: "Gradient & Directional Derivatives",
        description: "Master the gradient vector and its role in optimization.",
        level: "advanced",
        track: "math",
        sections: [
          {
            id: "grad-def",
            title: "Gradient Vector",
            content: "∇f(x) ∈ ℝⁿ with components ∂f/∂x_i. Points toward steepest increase; ||∇f|| equals max directional derivative rate. **Gradient field** assigns vector at each point. For loss L, ∇L tells update direction. **Subgradient** generalizes to non-smooth convex functions at kinks. Zero gradient necessary for interior extremum (not sufficient—saddle). Numerical gradient via finite differences checks autograd. Always verify shapes: ∇L same shape as θ.",
            formulas: [
              "∇f = (∂f/∂x₁, ..., ∂f/∂x_n)ᵀ",
              "max_{||u||=1} D_u f = ||∇f||",
              "∇L(θ*) = 0 at stationary θ*",
              "Subgradient at non-smooth points",
              "∇L same shape as θ"
            ],
            diagram: "   gradient field on hills:\n\n        ↗ ∇f\n       hill peak\n      ↗ ↗\n    valley: −∇f descent\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Gradient is a vector field",
              "Points uphill on loss",
              "Subgradients for ReLU kinks",
              "Shape must match parameters",
              "Numerical check validates autograd"
            ],
            example: "import numpy as np\ntheta=np.array([1.,2.,3.])\nL=lambda t: np.sum(t**2)\ngrad=2*theta\nprint(\"∇L:\", grad)",
            output: "∇L: [2 4 6]"
          },
          {
            id: "grad-descent",
            title: "Gradient Descent Geometry",
            content: "Update θ_{t+1}=θ_t−η∇L(θ_t). η **learning rate** controls step. Too large: overshoot; too small: slow. **Lipschitz** gradient: ||∇f(x)−∇f(y)||≤L||x−y|| gives convergence rates. Convex: GD finds global min with right η. Non-convex: converges to stationary point often saddle escape heuristics help. **Momentum** accumulates velocity smoothing oscillations. **Adam** adaptive per-parameter steps. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "θ_{t+1} = θ_t − η ∇L(θ_t)",
              "η too large → diverge",
              "L-smooth: |∇f(x)−∇f(y)| ≤ L||x−y||",
              "Convex + proper η → global min",
              "Momentum: v_t = βv_{t-1}+∇L"
            ],
            diagram: "   GD on bowl:\n\n   θ_t ·──→ −∇L direction\n         ↘ toward minimum\n          ╲\n           ○ min\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Step opposite gradient",
              "LR critical hyperparameter",
              "Momentum helps ravines",
              "Non-convex landscapes complex",
              "Adaptive methods popular"
            ],
            example: "import numpy as np\ntheta=np.array([5.,5.])\neta=0.1\nfor _ in range(20): theta -= eta*(2*theta)\nprint(\"theta:\", np.round(theta,4))",
            output: "→ near 0"
          },
          {
            id: "grad-proj",
            title: "Projection & Constraints",
            content: "Projected GD: θ_{t+1}=Proj_C(θ_t−η∇L) enforces constraints C (e.g., weights ≥0). **Proximal** methods handle non-smooth regularizers. Simplex projection for probability vectors. Box constraints clip θ after step. Lagrange multipliers (later) handle equality constraints. Constrained optimization common in fairness constraints and resource limits. Projected methods maintain feasibility each step. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "Proj_C(x) = argmin_{y∈C} ||y−x||",
              "Projected GD after each step",
              "Simplex: ∑p_i=1, p_i≥0",
              "Box: clip to [a,b]",
              "Prox for L1: soft threshold"
            ],
            diagram: "   unconstrained step may leave C\n\n   θ − η∇L  ·──→ outside\n              ↓ project back\n            θ_new ∈ C\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "Projection restores feasibility",
              "Simplex for probability params",
              "Prox handles L1 sparsity",
              "Box clip simple but effective",
              "Constraints in fair ML"
            ],
            example: "import numpy as np\nv=np.array([0.3,0.5,0.4])\nv=np.maximum(v,0); v/=v.sum()\nprint(\"simplex proj:\", v)",
            output: "sums to 1"
          },
          {
            id: "grad-numerical",
            title: "Gradient Checking",
            content: "**Relative error** |g_num−g_auto|/(|g_num|+|g_auto|+ε) should <1e-5 for double precision layers. Check one layer at a time to localize bugs. Symmetric central differences. Disable dropout/batchnorm during check. Expensive O(n) forward passes for n params—use small subset. Essential when implementing custom CUDA kernels or novel autograd functions. PyTorch torch.autograd.gradcheck utility automates.",
            formulas: [
              "rel_err = |g_n − g_a| / (|g_n|+|g_a|+ε)",
              "Central diff preferred",
              "Check small param subsets",
              "Disable stochastic layers",
              "gradcheck in PyTorch"
            ],
            diagram: "   grad check workflow:\n\n   1. implement forward\n   2. autograd backward\n   3. finite diff compare\n   4. fix mismatch layer\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Always gradcheck custom layers",
              "Relative error threshold ~1e-5",
              "Central diff more accurate",
              "Stochastic layers off during check",
              "Localize by checking per layer"
            ],
            example: "import numpy as np\ndef f(t): return t[0]**2 + 3*t[1]\nt=np.array([1.,2.]); h=1e-5\ngn=np.array([(f(t+[h,0])-f(t-[h,0]))/(2*h),(f(t+[0,h])-f(t-[0,h]))/(2*h)])\nga=np.array([2*t[0],3.])\nprint(\"rel err:\", np.abs(gn-ga)/(np.abs(gn)+np.abs(ga)))",
            output: "small error"
          }
        ],
        exercises: [
          {
            id: "ex-grad-1",
            question: "Run 10 GD steps on L(w)=w² from w=5, η=0.1.",
            solution: "import numpy as np\nw=5.\nfor _ in range(10): w-=0.1*2*w\nprint(w)",
            difficulty: "easy"
          },
          {
            id: "ex-grad-2",
            question: "Project [0.2,-0.1,0.5] onto probability simplex.",
            solution: "import numpy as np\nv=np.array([0.2,-0.1,0.5]); v=np.maximum(v,0); v/=v.sum(); print(v)",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-chain-rule",
        title: "Multivariate Chain Rule",
        description: "Jacobian matrices and backpropagation as chain rule application.",
        level: "advanced",
        track: "math",
        sections: [
          {
            id: "cr-jacobian",
            title: "Jacobian Matrix",
            content: "For f: ℝⁿ→ℝᵐ, **Jacobian** J_f ∈ ℝ^{m×n} with J_ij=∂f_i/∂x_j. Linear approximation: f(x+δ)≈f(x)+J_f(x)δ. **Chain rule**: J_{f∘g}(x)=J_f(g(x))·J_g(x). Scalar f: ∇f is Jacobian 1×n (gradient row) or n×1 (column convention). Vector-to-scalar: gradient ∇f is Jacobian transpose of scalar function. np.autograd and JAX build Jacobian-vector products efficiently without full dense J for large n. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "J_ij = ∂f_i / ∂x_j",
              "J_{f∘g} = J_f · J_g",
              "f: ℝⁿ→ℝ: ∇f ∈ ℝⁿ",
              "Linear approx: f(x+δ) ≈ f(x)+Jδ",
              "JVP/JVJP efficient in autodiff"
            ],
            diagram: "   J matrix layout (m outputs, n inputs):\n\n        x1  x2  x3\n   f1 [ ∂  ∂  ∂ ]\n   f2 [ ∂  ∂  ∂ ]\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "Jacobian generalizes gradient",
              "Matrix dimensions m×n",
              "Chain = matrix multiply",
              "Full J too big—use JVP",
              "Convention varies row/col"
            ],
            example: "import numpy as np\n# f(x,y)=[x+y, x-y], J=[[1,1],[1,-1]]\nJ=np.array([[1.,1.],[1.,-1.]])\nprint(\"J:\", J)",
            output: "Jacobian"
          },
          {
            id: "cr-backprop",
            title: "Backpropagation Derivation",
            content: "Computational graph nodes with forward values. Backward pass applies chain rule from output to inputs. For node y=f(x), upstream gradient ∂L/∂y multiplies local ∂y/∂x. **Sum over paths** when node feeds multiple consumers. ReLU backward: pass gradient where x>0 else 0. Softmax+CE backward simplifies to ŷ−y. Memory stores activations for backward. Reverse-mode one pass O(edges) vs forward-mode O(inputs).",
            formulas: [
              "∂L/∂x = (∂L/∂y)(∂y/∂x)",
              "Sum grads from all children",
              "ReLU mask: x>0",
              "Softmax+CE: ŷ − y",
              "Reverse-mode O(1) backward pass"
            ],
            diagram: "   forward: x → z → h → L\n   backward: dL/dh → dL/dz → dL/dx\n\n   multiply local derivatives\n   sum branches at splits\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "Reverse-mode = backprop",
              "Store activations in forward",
              "Branch nodes sum gradients",
              "Fused CE+softmax simplifies",
              "Graph DAG structure"
            ],
            example: "import numpy as np\ny=np.array([0.7,0.2,0.1]); t=np.array([1,0,0])\nprint(\"dL/dz:\", y-t)",
            output: "softmax+CE grad"
          },
          {
            id: "cr-vector",
            title: "Vector Chain Rules",
            content: "If L=f(u) and u=g(x), then ∂L/∂x=(∂u/∂x)ᵀ∂L/∂u when using column convention. Matrix params: ∂L/∂W for y=Wx+b is (∂L/∂y)xᵀ outer product. Batch: sum over samples. **Einstein summation** einsum clarifies tensor contractions in deep nets. Batched matmul backward uses matmuls not loops. Shape discipline prevents silent bugs in manual backprop. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "∂L/∂W = (∂L/∂y) xᵀ",
              "∂L/∂x = Wᵀ (∂L/∂y)",
              "Batch: sum over batch dim",
              "einsum for tensor contractions",
              "Shapes must align in chain"
            ],
            diagram: "   y = Wx  (single sample)\n\n   dL/dW = dL/dy · xᵀ\n   dL/dx = Wᵀ · dL/dy\n\n   outer product for weights\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Outer product for linear layer",
              "Transpose W for input grad",
              "Batch sums weight grads",
              "einsum prevents shape errors",
              "Verify with gradcheck"
            ],
            example: "import numpy as np\ndL_dy=np.array([1.,2.]); x=np.array([0.5,1.])\ndL_dW=np.outer(dL_dy,x)\nprint(\"dL/dW shape:\", dL_dW.shape)",
            output: "(2,2)"
          },
          {
            id: "cr-vanish",
            title: "Vanishing & Exploding Gradients",
            content: "Deep chain multiplies many Jacobians. If ||J||<1 repeatedly, gradient vanishes—early layers learn slowly. ||J||>1 explodes—unstable training. Sigmoid/tanh saturate with small derivatives. ReLU helps (deriv=1 when active). **Residual connections** add identity path. **Layer normalization** stabilizes activations. **Gradient clipping** caps global norm. LSTM gates control gradient flow in RNNs. Xavier/He init sets initial Jacobian scale.",
            formulas: [
              "∏ J_i small → vanishing",
              "∏ J_i large → exploding",
              "Sigmoid sat: σ'≤0.25",
              "ResNet: y=x+F(x) gradient highway",
              "clip: g ← g·min(1, τ/||g||)"
            ],
            diagram: "   deep chain:\n\n   J1·J2·...·J20\n\n   each <1 → product → 0\n   each >1 → product → ∞\n\n   ResNet shortcut bypasses stack\n   │\n   │  · · ·",
            keyPoints: [
              "Depth multiplies Jacobians",
              "Saturated activations hurt",
              "Residual paths help flow",
              "Clip prevents explosion",
              "Good init critical"
            ],
            example: "import numpy as np\ngrad=1000.; tau=1.\ngrad*=min(1,tau/np.abs(grad))\nprint(\"clipped:\", grad)",
            output: "clipped: 1.0"
          }
        ],
        exercises: [
          {
            id: "ex-cr-1",
            question: "Jacobian of [x+y, xy] at (2,3).",
            solution: "import numpy as np\nprint(np.array([[1,1],[3,2]]))",
            difficulty: "easy"
          },
          {
            id: "ex-cr-2",
            question: "Clip gradient norm 5.0 with max norm 1.0.",
            solution: "import numpy as np\ng=np.array([3.,4.]); g*=min(1,1/np.linalg.norm(g)); print(g)",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-jacobian-hessian",
        title: "Jacobian & Hessian",
        description: "Second-order information for curvature and advanced optimization.",
        level: "advanced",
        track: "math",
        sections: [
          {
            id: "jh-hessian",
            title: "Hessian Matrix",
            content: "H_ij=∂²L/∂θ_i∂θ_j symmetric for smooth L. Describes curvature of loss surface. Positive definite H at minimum (local convex bowl). Indefinite H → saddle. **Newton step** Δθ=−H⁻¹∇L. **Gauss-Newton** approximates H for least squares. Exact Hessian O(n²) storage—impractical for large n. Diagonal approx (AdaGrad, Adam) use diagonal only. Hessian-vector products via Pearlmutter trick without forming H.",
            formulas: [
              "H_ij = ∂²L/∂θ_i∂θ_j",
              "H symmetric for C² L",
              "Newton: Δθ = −H⁻¹∇L",
              "H PD → local strict min",
              "HVP without full H"
            ],
            diagram: "   1D: H = f''(x)\n   bowl f''>0    cap f''<0\n\n   2D: eigenvalues of H\n   both + → min\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "Hessian = curvature matrix",
              "Newton uses full H",
              "Too large to store in DL",
              "HVP for truncated Newton",
              "Diagonal approx in adaptive opt"
            ],
            example: "import numpy as np\n# L=x²+4xy+2y²\nH=np.array([[2.,4.],[4.,4.]])\nprint(\"eig:\", np.linalg.eigvalsh(H))",
            output: "curvature"
          },
          {
            id: "jh-newton",
            title: "Newton & Quasi-Newton",
            content: "Newton converges quadratically near min if H PD. **BFGS** and **L-BFGS** approximate H inverse from gradient history—used in sklearn LogisticRegression(lbfgs). **Conjugate gradient** for large sparse systems. Deep learning rarely uses full Newton—too costly. Small networks or meta-learning sometimes use Hessian info. Natural gradient preconditions by Fisher information F⁻¹∇L. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "Newton: θ ← θ − H⁻¹∇L",
              "Quadratic conv near min",
              "BFGS: secant Hessian approx",
              "L-BFGS limited memory",
              "Natural grad: F⁻¹∇L"
            ],
            diagram: "   Newton vs GD:\n\n   GD: fixed η step\n   Newton: adapts via H⁻¹\n   auto-scales each direction\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "Newton faster locally",
              "BFGS for moderate n",
              "L-BFGS in classical ML",
              "Rare in deep nets",
              "Natural grad Fisher precondition"
            ],
            example: "import numpy as np\nfrom scipy.optimize import minimize\nf=lambda t: t[0]**2+t[1]**2\nr=minimize(f,[3.,3.],method=\"BFGS\")\nprint(\"min:\", r.x)",
            output: "min: ~0"
          },
          {
            id: "jh-jacobian-apps",
            title: "Jacobian Applications",
            content: "**Normalizing flows**: log p(x)=log p(z)+log|det ∂f/∂x|. **Robotics** kinematics Jacobian maps joint to end-effector velocities. **Sensitivity** of model output to input: J input gradients for adversarial examples. **Change of variables** in probability multivariate: p_y(y)=p_x(x)/|det J|. VAE decoder Jacobian affects likelihood approximations. Stable computation via log-det tricks. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "log p(x) = log p(z) + log|det J|",
              "Adv examples: max ||δ|| s.t. misclassify",
              "p(y) = p(x) / |det ∂x/∂y|",
              "J maps velocity spaces",
              "log-det for numerical stability"
            ],
            diagram: "   flow f: x → z\n\n   density transforms by |det J|\n   volume stretch = |det J|\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │\n   │  · · ·",
            keyPoints: [
              "Flows need Jacobian determinant",
              "Adversarial uses input Jacobian",
              "Change of vars in density",
              "Log-det avoids underflow",
              "Robotics kinematics classic use"
            ],
            example: "import numpy as np\n# linear f(x)=Ax, log|det A|\nA=np.array([[2.,0.],[0.,0.5]])\nprint(\"log|det|:\", np.linalg.slogdet(A)[1])",
            output: "log det"
          },
          {
            id: "jh-gauss-newton",
            title: "Gauss-Newton & Levenberg-Marquardt",
            content: "For least squares r(θ), Hessian approx H≈J_rᵀJ_r Jacobian of residuals. **Gauss-Newton** ignores second-order term. **Levenberg-Marquardt** adds λI damping between GN and GD. Used in nonlinear curve fitting and some pose estimation. More stable than pure Newton for sum-of-squares objectives. Connects to linearization of nonlinear models each iteration. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "H ≈ JᵀJ (Gauss-Newton)",
              "LM: (JᵀJ + λI)Δ = −Jᵀr",
              "For min ∑ r_i(θ)²",
              "λ large → gradient-like",
              "λ small → Gauss-Newton"
            ],
            diagram: "   residual vector r(θ)\n\n   linearize r near θ\n   solve normal equations\n   iterate θ\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "GN for nonlinear least squares",
              "LM adds damping λ",
              "Jacobian of residuals key",
              "Used in classical fitting",
              "Bridge GN and GD via λ"
            ],
            example: "import numpy as np\n# simple 1D: minimize (a-2)² via GN\na=0.; target=2.\nfor _ in range(5): a -= (a-target)*1.0\nprint(a)",
            output: "→ 2"
          }
        ],
        exercises: [
          {
            id: "ex-jh-1",
            question: "Hessian of f(x,y)=x²+y² is diag(2,2). Verify eigenvalues.",
            solution: "import numpy as np\nprint(np.linalg.eigvalsh(np.diag([2.,2.])))",
            difficulty: "easy"
          },
          {
            id: "ex-jh-2",
            question: "One Newton step on f(x)=x² at x=3 (H=2, f'=6).",
            solution: "import numpy as np\nx=3.; x -= 6/2; print(x)",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-multivariate-opt",
        title: "Multivariate Optimization",
        description: "Critical points, convexity, and constrained optimization preview.",
        level: "advanced",
        track: "math",
        sections: [
          {
            id: "mvo-critical",
            title: "Critical Points",
            content: "Interior extremum: ∇f=0. **Second derivative test** 1D: f''>0 min, f''<0 max. Multi-D: H positive definite → strict local min; negative definite → max; indefinite → saddle. **Global min** on convex domain if f convex. Non-convex DL: many saddles, few bad local minima empirically. **Strict saddle** has directions up and down. Perturbation escapes saddles with noise in SGD. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "∇f(x*) = 0 critical",
              "H PD → strict local min",
              "H ND → strict local max",
              "H indefinite → saddle",
              "Convex f: local min = global min"
            ],
            diagram: "   critical point types:\n\n   min: bowl ∪\n   max: cap ∩\n   saddle: horse ╱╲\n   all: ∇f=0\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Gradient zero necessary not sufficient",
              "Hessian classifies in smooth case",
              "Saddles common in high-D",
              "SGD noise helps escape",
              "Convex ⇒ nice global structure"
            ],
            example: "import numpy as np\n# saddle f=x²-y², grad=0 at origin, H indefinite\nH=np.array([[2.,0.],[0.,-2.]])\nprint(\"eig:\", np.linalg.eigvalsh(H))",
            output: "mixed signs → saddle"
          },
          {
            id: "mvo-convex",
            title: "Convex Functions",
            content: "f convex if f(λx+(1−λ)y)≤λf(x)+(1−λ)f(y). Equivalently H⪰0 everywhere for C² f. **Strict convex** unique global min. Convex optimization globally tractable. Linear models with convex loss (MSE, logistic) → convex in w. Deep nets non-convex in θ. **Jensen inequality** E[f(X)]≥f(E[X]) for convex f—used in proofs. L1 not strictly convex at 0 but still convex. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "f(λx+(1−λ)y) ≤ λf(x)+(1−λ)f(y)",
              "H ⪰ 0 ⇔ convex (C²)",
              "Convex + closed set → global min",
              "Linear + convex loss → convex problem",
              "Jensen: E[f(X)] ≥ f(E[X])"
            ],
            diagram: "   convex: line segment above graph\n\n      f(b) ·\n           ╲\n    f(a) ·  ╲___ chord below graph\n         a────b\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Convex ⇒ no spurious local min",
              "H PSD characterizes smooth convex",
              "Logistic regression convex in w",
              "Deep nets non-convex",
              "Jensen key inequality"
            ],
            example: "import numpy as np\nf=lambda x: x**2\nx,y=1.,3.; lam=0.5\nprint(\"convex check:\", f(lam*x+(1-lam)*y) <= lam*f(x)+(1-lam)*f(y))",
            output: "True"
          },
          {
            id: "mvo-saddle",
            title: "Saddle Points in High Dimensions",
            content: "Random Gaussian landscape: saddles exponentially outnumber minima as dimension grows. At saddle, gradient zero but some eigenvalues of H positive, some negative. **Strict saddle** algorithms add noise or use curvature. **Plateau** surrounding saddles slow GD. Second-order methods can escape faster but costly. Modern view: SGD finds good minima despite non-convexity partly due to overparameterization and implicit regularization.",
            formulas: [
              "High-D: saddles dominate",
              "Strict saddle: mixed H eigenvalues",
              "Noise in SGD helps escape",
              "Plateaus: small gradient",
              "Overparam → many global-ish min"
            ],
            diagram: "   saddle in 2D:\n\n      down ↘  ↗ up\n          ╳\n      up ↗  ↘ down\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "Saddles not local minima",
              "High-D geometry counterintuitive",
              "SGD noise beneficial",
              "Plateaus confuse stopping",
              "Overparameterization helps"
            ],
            example: "import numpy as np\nf=lambda x,y: x**2-y**2\nprint(\"grad at origin:\", 0, \"H indefinite\")",
            output: "saddle at 0"
          },
          {
            id: "mvo-global",
            title: "Global Optimization Strategies",
            content: "**Random restarts** from multiple init. **Simulated annealing** stochastic acceptance. **Bayesian optimization** for expensive black-box. **Learning rate schedules** cosine, warmup. **Weight decay** L2 regularization. **Early stopping** on validation. **Ensemble** average models. For DL: SGD+ momentum+ weight decay+ batch norm+ skip connections form practical recipe. No guarantee global but empirically strong minima found.",
            formulas: [
              "Random restarts explore basins",
              "BayesOpt for hyperparam black-box",
              "Cosine annealing LR schedule",
              "Weight decay: θ ← (1−ηλ)θ",
              "Early stop on val loss"
            ],
            diagram: "   optimization toolkit:\n\n   init → SGD+momentum\n        → schedule LR\n        → regularize\n        → early stop\n        → ensemble\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "No silver bullet for global opt",
              "Restarts cheap parallelism",
              "BayesOpt for HPO",
              "Regularization improves generalization",
              "Practice combines many heuristics"
            ],
            example: "import numpy as np\nloss=np.array([2.,1.,0.8,0.75,0.74,0.76])\nprint(\"stop at epoch:\", np.argmin(loss)+1)",
            output: "early stop argmin"
          }
        ],
        exercises: [
          {
            id: "ex-mvo-1",
            question: "Verify f(x)=x² is convex on random pairs.",
            solution: "import numpy as np\nf=lambda x:x**2\nx,y=np.random.rand(2); l=0.3\nprint(f(l*x+(1-l)*y) <= l*f(x)+(1-l)*f(y))",
            difficulty: "easy"
          },
          {
            id: "ex-mvo-2",
            question: "Classify H=diag(1,-1) critical point type via eigenvalues.",
            solution: "import numpy as np\nprint(\"saddle\", np.linalg.eigvalsh(np.diag([1.,-1.])))",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      }
    ]
  },
  {
    num: 6,
    id: "module-math-06",
    fileName: "module-math-06-probability",
    exportName: "moduleMath06Topics",
    name: "Probability",
    track: "math",
    description: "Probability basics, conditional probability, random variables, distributions, and joint/marginal relationships.",
    topics: [
      {
        id: "math-prob-basics",
        title: "Probability Foundations",
        description: "Sample spaces, axioms, and basic counting for probability.",
        level: "intermediate",
        track: "math",
        sections: [
          {
            id: "pb-axioms",
            title: "Probability Axioms",
            content: "**Sample space** Ω all outcomes. **Event** A⊆Ω. Kolmogorov axioms: P(A)≥0; P(Ω)=1; countable additivity P(∪A_i)=∑P(A_i) for disjoint A_i. Uniform finite: P(A)=|A|/|Ω|. Complement P(A^c)=1−P(A). Inclusion-exclusion for unions. Probability underpins ML uncertainty, Bayesian inference, and evaluation metrics. Always define sample space before assigning probabilities. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "P(A) ≥ 0",
              "P(Ω) = 1",
              "P(∪A_i) = ∑ P(A_i) if disjoint",
              "P(A^c) = 1 − P(A)",
              "P(A∪B) = P(A)+P(B)−P(A∩B)"
            ],
            diagram: "   Ω sample space\n   ┌─────────────────┐\n   │  A    B         │\n   │ ┌──┐ overlap    │\n   └──┴──┴───────────┘\n   P(A∪B) = P(A)+P(B)−P(A∩B)\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Axioms foundation all probability",
              "Complement rule common",
              "Inclusion-exclusion for overlap",
              "Countable additivity for limits",
              "Define Ω before P"
            ],
            example: "import numpy as np\nP_A, P_B, P_AB = 0.4, 0.3, 0.1\nprint(\"P(AUB):\", P_A+P_B-P_AB)",
            output: "P(AUB): 0.6"
          },
          {
            id: "pb-count",
            title: "Combinatorial Probability",
            content: "Equally likely outcomes: P(A)=|A|/|Ω|. Use permutations/combinations from Module 1. Birthday paradox: P(shared birthday) high with small group. Hypergeometric: sampling without replacement. Binomial counts successes in n independent Bernoulli trials. Multinomial generalizes to multiple categories. Careful with independence assumptions when counting joint outcomes. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "P(A) = |A|/|Ω| (equally likely)",
              "Binomial: C(n,k) p^k (1−p)^(n−k)",
              "Hypergeometric: draws without replacement",
              "Birthday: 23 people → ~50% match",
              "Multinomial for k categories"
            ],
            diagram: "   coin n flips:\n\n   Ω = {H,T}^n\n   |Ω| = 2^n\n\n   k heads: C(n,k) outcomes\n   P(k heads) = C(n,k)/2^n\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "Count favorable over total",
              "Binomial for independent trials",
              "Without replacement changes odds",
              "Paradoxes test intuition",
              "Multinomial for class counts"
            ],
            example: "import numpy as np\nfrom math import comb\nn,p,k=10,0.5,4\nprint(\"binom PMF:\", comb(n,k)*p**k*(1-p)**(n-k))",
            output: "binom PMF"
          },
          {
            id: "pb-indep",
            title: "Independence",
            content: "Events A,B **independent** if P(A∩B)=P(A)P(B). Pairwise vs mutual independence differ for >2 events. Independent trials: outcome doesn't affect next. **Conditional independence** given C: P(A∩B|C)=P(A|C)P(B|C)—used in graphical models. i.i.d. samples central to ML training assumptions. Violations: data leakage, temporal correlation in time series. Always question independence when splitting data. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "A,B indep: P(A∩B)=P(A)P(B)",
              "i.i.d.: independent identical distribution",
              "P(A∩B|C)=P(A|C)P(B|C) conditional indep",
              "Pairwise ≠ mutual independence",
              "Violations break many ML assumptions"
            ],
            diagram: "   independent:\n   A happens ─╳─ B happens\n   no influence\n\n   dependent:\n   A ────→ affects ──── B\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Independence simplifies products",
              "i.i.d. assumption in SGD batches",
              "Conditional indep in Bayes nets",
              "Time series usually dependent",
              "Leakage violates independence"
            ],
            example: "import numpy as np\nP_A,P_B=0.5,0.4\nprint(\"P(A)*P(B):\", P_A*P_B, \"if indep P(A∩B) same\")",
            output: "0.2"
          },
          {
            id: "pb-ml",
            title: "Probability in ML Metrics",
            content: "Classification accuracy P(correct). **Precision** P(positive|predicted+). **Recall** P(predicted+|true+). **F1** harmonic mean. Probabilistic classifiers output P(y|x). Calibration: predicted probs match frequencies. **Expected risk** E[L(y,ŷ)]. Train/val split estimates generalization probability of error. Confusion matrix stores joint counts of true vs predicted labels. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "Accuracy = P(correct)",
              "Precision = TP/(TP+FP)",
              "Recall = TP/(TP+FN)",
              "F1 = 2PR/(P+R)",
              "Calibration: P(y=1|ŷ=p) ≈ p"
            ],
            diagram: "   confusion matrix:\n\n              pred +  pred −\n   true + │ TP    FN\n   true − │ FP    TN\n\n   metrics from cell probs\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "Metrics are conditional probabilities",
              "Calibration matters for decisions",
              "Confusion matrix = joint counts",
              "Expected loss integrates over data",
              "Rare classes need recall focus"
            ],
            example: "import numpy as np\ntp,fp,fn=50,10,5\nprint(\"prec:\", tp/(tp+fp), \"rec:\", tp/(tp+fn))",
            output: "prec/rec"
          }
        ],
        exercises: [
          {
            id: "ex-pb-1",
            question: "P(A∪B) with P(A)=0.6,P(B)=0.5,P(A∩B)=0.2.",
            solution: "print(0.6+0.5-0.2)",
            difficulty: "easy"
          },
          {
            id: "ex-pb-2",
            question: "Binomial P(k=3) n=5,p=0.5.",
            solution: "from math import comb; print(comb(5,3)*0.5**5)",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-conditional-bayes",
        title: "Conditional Probability & Bayes",
        description: "Conditioning, Bayes theorem, and Bayesian updating.",
        level: "intermediate",
        track: "math",
        sections: [
          {
            id: "cb-cond",
            title: "Conditional Probability",
            content: "P(A|B)=P(A∩B)/P(B) when P(B)>0. Restrict sample space to B. **Multiplication rule** P(A∩B)=P(A|B)P(B). Law of total probability: P(A)=∑P(A|B_i)P(B_i) over partition B_i. Conditional changes probabilities with new evidence. Medical testing, spam filtering, and diagnostic models rely on conditioning. P(A|B)≠P(B|A)—prosecutor fallacy confusion. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "P(A|B) = P(A∩B)/P(B)",
              "P(A∩B) = P(A|B)P(B)",
              "P(A) = ∑ P(A|B_i)P(B_i)",
              "P(A|B) ≠ P(B|A) in general",
              "Evidence B updates belief about A"
            ],
            diagram: "   P(A|B): shrink world to B\n\n   Ω → only B region\n   renormalize probs in B\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │\n   │  · · ·",
            keyPoints: [
              "Conditioning restricts sample space",
              "Total probability law decomposes",
              "Order matters in conditioning",
              "Base rate often ignored",
              "Evidence updates beliefs"
            ],
            example: "import numpy as np\nP_AB,P_B=0.12,0.3\nprint(\"P(A|B):\", P_AB/P_B)",
            output: "P(A|B): 0.4"
          },
          {
            id: "cb-bayes",
            title: "Bayes Theorem",
            content: "**Bayes**: P(A|B)=P(B|A)P(A)/P(B). P(A) prior, P(A|B) posterior, P(B|A) likelihood, P(B) evidence. Posterior ∝ likelihood × prior. **Naive Bayes** assumes features conditionally independent given class: P(x|y)=∏P(x_i|y). Bayesian ML places priors on weights. Evidence integral often intractable. MAP picks mode of posterior; full posterior gives uncertainty. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "P(A|B) = P(B|A)P(A)/P(B)",
              "Posterior ∝ Likelihood × Prior",
              "Naive Bayes: P(x|y)=∏ P(x_i|y)",
              "MAP = argmax_θ P(θ|D)",
              "Evidence P(D) normalizes"
            ],
            diagram: "   prior ──× likelihood ──→ posterior\n         P(θ)    P(D|θ)         P(θ|D)\n\n   normalize by P(D)\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │\n   │  · · ·",
            keyPoints: [
              "Bayes reverses conditioning",
              "Prior encodes belief before data",
              "Naive Bayes simple but strong baseline",
              "MAP point estimate common",
              "Full posterior harder but richer"
            ],
            example: "import numpy as np\nprior=0.01; sens=0.95; spec=0.90; P_B=0.01*0.95+0.99*0.1\nprint(\"post:\", prior*sens/P_B)",
            output: "posterior"
          },
          {
            id: "cb-odds",
            title: "Odds & Log-Odds",
            content: "Odds O(A)=P(A)/P(A^c). **Log-odds** ln O additive for Bayes updates with likelihood ratio. Logistic regression models log-odds as linear: ln(p/(1−p))=w·x+b. Likelihood ratio P(B|A)/P(B|A^c) measures evidence strength. Bayes factor compares models. Logit link connects linear scores to probabilities. Additive log-odds simplify sequential evidence combination in interpretable models. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "Odds = p/(1−p)",
              "logit(p) = ln(p/(1−p))",
              "log-odds update additive",
              "Likelihood ratio = P(B|A)/P(B|A^c)",
              "sigmoid = inverse logit"
            ],
            diagram: "   p=0.5 → odds 1:1\n   p=0.9 → odds 9:1\n   log-odds: −∞ to +∞ linear model\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "Log-odds unbounded for linear models",
              "Logit link in logistic regression",
              "Likelihood ratio quantifies evidence",
              "Bayes factor for model compare",
              "sigmoid inverts logit"
            ],
            example: "import numpy as np\np=0.7\nprint(\"logit:\", np.log(p/(1-p)))\nprint(\"back:\", 1/(1+np.exp(-np.log(p/(1-p)))))",
            output: "round trip"
          },
          {
            id: "cb-ml",
            title: "Bayesian ML Preview",
            content: "Posterior predictive P(y*|x*,D)=∫ P(y*|x*,θ)P(θ|D)dθ averages over uncertainty. **Variational inference** approximates posterior. **MCMC** samples from posterior. Uncertainty quantification in safety-critical apps. Thompson sampling uses posterior for exploration. Bayesian deep learning active research. Prior prevents overfitting (weight decay ≈ Gaussian prior). Conjugate priors give closed-form posterior updates.",
            formulas: [
              "Posterior predictive integrates θ uncertainty",
              "VI: optimize q(θ) ≈ p(θ|D)",
              "MCMC sample from posterior",
              "Prior = regularization",
              "Conjugate: closed-form update"
            ],
            diagram: "   weight uncertainty:\n\n   MAP: single θ*\n   Bayesian: distribution over θ\n   wider → more uncertainty\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "Posterior captures uncertainty",
              "VI scales to big models",
              "MCMC accurate but slow",
              "Priors encode preferences",
              "Predictive distribution for decisions"
            ],
            example: "import numpy as np\n# Beta-Binomial conjugate: prior Beta(a,b), obs k heads n flips\na,b,k,n=1,1,7,10\npost_a,post_b=a+k,b+n-k\nprint(\"post mean:\", post_a/(post_a+post_b))",
            output: "post mean"
          }
        ],
        exercises: [
          {
            id: "ex-cb-1",
            question: "Bayes: prior=0.001, sens=0.99, spec=0.95, test+. Compute P(disease|+).",
            solution: "p=0.001; s=0.99; sp=0.95\nPpos=p*s+(1-p)*(1-sp)\nprint(p*s/Ppos)",
            difficulty: "easy"
          },
          {
            id: "ex-cb-2",
            question: "Convert p=0.8 to log-odds and back.",
            solution: "import numpy as np\nlo=np.log(0.8/0.2); print(lo, 1/(1+np.exp(-lo)))",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-random-vars",
        title: "Random Variables",
        description: "Discrete and continuous random variables, expectation, and variance.",
        level: "intermediate",
        track: "math",
        sections: [
          {
            id: "rv-def",
            title: "Random Variable Definition",
            content: "**Random variable** X: Ω→ℝ maps outcomes to numbers. **Discrete**: countable values with PMF p(x)=P(X=x). **Continuous**: PDF f(x) with P(a≤X≤b)=∫_a^b f(x)dx. CDF F(x)=P(X≤x) non-decreasing. Support set where p>0 or f>0. Mixed distributions combine atoms and density. Features in ML often modeled as realizations of RVs. Target variable y in supervised learning is RV given x. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "PMF: p(x) = P(X=x) discrete",
              "PDF: P(a≤X≤b) = ∫_a^b f(x)dx",
              "CDF: F(x) = P(X≤x)",
              "∑ p(x)=1 or ∫ f(x)dx=1",
              "E[X] = ∑ x p(x) or ∫ x f(x)dx"
            ],
            diagram: "   discrete PMF bar chart:\n\n   P(X)\n   │ ██\n   │ ██ ██\n   └──┴──┴── X\n   0  1  2\n\n   continuous PDF curve area=1\n   │",
            keyPoints: [
              "PMF vs PDF notation",
              "CDF universal for any type",
              "Normalization integrates/sums to 1",
              "Support where mass lives",
              "Targets are conditional RVs"
            ],
            example: "import numpy as np\nfrom scipy import stats\nx=np.arange(0,4)\np=stats.binom.pmf(x,3,0.5)\nprint(\"sum PMF:\", p.sum())",
            output: "sum PMF: 1.0"
          },
          {
            id: "rv-expect",
            title: "Expectation & Variance",
            content: "E[X]=∑x p(x) or ∫x f(x)dx **expected value** center of mass. **Linearity** E[aX+b]=aE[X]+b; E[X+Y]=E[X]+E[Y] always. **Variance** Var(X)=E[(X−μ)²]=E[X²]−(E[X])². Std σ=√Var. **Covariance** Cov(X,Y)=E[(X−μ_X)(Y−μ_Y)]. Independent ⇒ Cov=0 (converse false). Sample mean x̄ estimates E[X]. Law of large numbers: x̄→E[X] as n→∞. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "E[X] = ∑ x p(x) or ∫ x f(x) dx",
              "Var(X) = E[X²] − (E[X])²",
              "E[aX+b] = aE[X]+b",
              "Cov(X,Y) = E[XY] − E[X]E[Y]",
              "σ = √Var(X)"
            ],
            diagram: "   distribution spread:\n\n   low Var: tight cluster\n   high Var: wide spread\n\n   E[X] = balance point\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Expectation is average limit",
              "Variance measures spread",
              "Linearity always holds",
              "Covariance measures co-movement",
              "Sample stats estimate population"
            ],
            example: "import numpy as np\nx=np.array([1,2,3,4,5])\nprint(\"mean:\", x.mean(), \"var:\", x.var(ddof=0))",
            output: "mean 3 var 2"
          },
          {
            id: "rv-transform",
            title: "Functions of RVs",
            content: "E[g(X)]=∑g(x)p(x) or ∫g(x)f(x)dx—not g(E[X]) in general (**Jensen**). Var(aX+b)=a²Var(X). Sum variances if independent: Var(X+Y)=Var(X)+Var(Y). For Y=g(X), find PDF of Y via CDF/transform methods. Log-normal if ln(Y) normal. Softmax of logits gives categorical probabilities. Reparameterization trick: X=μ+σε, ε∼N(0,1) for backprop through stochastic nodes. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "E[g(X)] ≠ g(E[X]) in general",
              "Var(aX+b) = a²Var(X)",
              "Var(X+Y)=Var(X)+Var(Y) if indep",
              "Jensen: convex f → E[f(X)]≥f(E[X])",
              "Reparam: x = μ + σ·ε"
            ],
            diagram: "   Jensen convex f:\n\n   E[f(X)] ≥ f(E[X])\n\n   concave: reverse inequality\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "Nonlinear g breaks naive plug-in",
              "Jensen explains bias of convex losses",
              "Independence needed for Var sum",
              "Reparam enables VAE gradients",
              "Transform PDF with Jacobian"
            ],
            example: "import numpy as np\nX=np.random.randn(100000)\nprint(\"E[X²]:\", (X**2).mean(), \"E[X]²:\", X.mean()**2)",
            output: "E[X²]=1 ≠ 0"
          },
          {
            id: "rv-ml",
            title: "RVs in ML Pipeline",
            content: "Minibatch samples approximate expectation of loss E[L]. **Monte Carlo dropout** estimates predictive uncertainty. **Data augmentation** as implicit sampling from transformed distribution. Labels as RVs; cross-entropy minimizes expected log loss. **Bias-variance** decomposition of expected prediction error. Stochastic gradients random due to batch sampling. Treating pipeline probabilistically improves debugging and evaluation design.",
            formulas: [
              "Empirical risk ≈ E[L] with samples",
              "Batch mean estimates expectation",
              "Dropout ≈ model averaging",
              "Bias-variance tradeoff in E[error]",
              "Augmentation expands implicit support"
            ],
            diagram: "   batch loss:\n\n   (1/m)∑ L_i ≈ E[L]\n\n   bigger batch → lower MC noise\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "SGD noisy due to batch sampling",
              "Dropout for uncertainty approx",
              "Augmentation as distribution shift",
              "Bias-variance guides model complexity",
              "Expectations central to loss design"
            ],
            example: "import numpy as np\nlosses=np.array([0.5,0.8,0.3,0.6])\nprint(\"batch mean loss:\", losses.mean())",
            output: "batch mean"
          }
        ],
        exercises: [
          {
            id: "ex-rv-1",
            question: "E[X] and Var(X) for fair die (1-6).",
            solution: "import numpy as np\nx=np.arange(1,7); p=np.ones(6)/6\nprint((x*p).sum(), (x**2*p).sum()-((x*p).sum())**2)",
            difficulty: "easy"
          },
          {
            id: "ex-rv-2",
            question: "Simulate 10000 standard normals; verify mean≈0, var≈1.",
            solution: "import numpy as np\nX=np.random.randn(10000)\nprint(X.mean(), X.var())",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-distributions",
        title: "Common Distributions",
        description: "Bernoulli, binomial, Gaussian, Poisson, and exponential distributions.",
        level: "intermediate",
        track: "math",
        sections: [
          {
            id: "dist-disc",
            title: "Discrete Distributions",
            content: "**Bernoulli** p(x)=p^x(1−p)^{1−x}, x∈{0,1}. **Binomial** counts successes in n trials. **Poisson** P(X=k)=e^{−λ}λ^k/k! models counts/rare events. **Categorical** multi-class generalization of Bernoulli. Geometric: trials until first success. PMF sums to 1. MLE for Bernoulli p is sample mean. Poisson regression for count targets. Classification labels often categorical RVs. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "Bernoulli: P(X=1)=p",
              "Binomial: C(n,k)p^k(1−p)^(n−k)",
              "Poisson: P(X=k)=e^(−λ)λ^k/k!",
              "Categorical: ∑p_i=1",
              "E[Poisson]=Var=λ"
            ],
            diagram: "   Binomial n=10 p=0.5\n\n   PMF shape bell-ish:\n        *\n       ***\n      *****\n     *******\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "Bernoulli single trial",
              "Binomial n independent Bernoullis",
              "Poisson for rare counts",
              "Categorical for multi-class",
              "Poisson mean equals variance"
            ],
            example: "import numpy as np\nfrom scipy import stats\nk=np.arange(0,11)\nprint(stats.binom.pmf(k,10,0.5))",
            output: "binomial PMF"
          },
          {
            id: "dist-cont",
            title: "Continuous Distributions",
            content: "**Uniform** on [a,b]: f=1/(b−a). **Exponential** f(x)=λe^{−λx}, x≥0 memoryless. **Gaussian** N(μ,σ²): f(x)=exp(−(x−μ)²/(2σ²))/√(2πσ²). **Beta** on [0,1] for probabilities. **Gamma** generalizes exponential. Central role of Gaussian via CLT. Standardization Z=(X−μ)/σ. Multivariate N(μ,Σ) with density involving Σ^{-1}. Log-normal for positive skewed data. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "N(μ,σ²): f(x) ∝ exp(−(x−μ)²/(2σ²))",
              "Exp(λ): f(x)=λe^(−λx), x≥0",
              "Uniform[a,b]: f=1/(b−a)",
              "Z=(X−μ)/σ standardizes",
              "Multivariate: (x−μ)ᵀΣ⁻¹(x−μ)"
            ],
            diagram: "   Normal bell curve:\n\n        │\n       ╱╲\n      ╱  ╲\n     ╱    ╲___\n   ──────────── x\n        μ\n   │\n   │  · · ·",
            keyPoints: [
              "Gaussian central in statistics",
              "Exponential models waiting times",
              "Beta for probability priors",
              "Standardize before many algorithms",
              "Multivariate for correlated features"
            ],
            example: "import numpy as np\nx=np.linspace(-3,3,100)\nf=np.exp(-x**2/2)/np.sqrt(2*np.pi)\nprint(\"area:\", np.trapz(f,x))",
            output: "area ~ 1"
          },
          {
            id: "dist-clt",
            title: "Central Limit Theorem Preview",
            content: "Sum/mean of i.i.d. with finite variance → approximately normal as n grows. X̄ approx N(μ, σ²/n). Justifies normal noise assumptions and confidence intervals. Sample mean standard error σ/√n shrinks with n. Works for many distributions not just normal inputs. CLT foundation for hypothesis tests and error bars on metrics. Bootstrap also builds sampling distributions. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "X̄ approx N(μ, σ²/n) for large n",
              "SE = σ/√n",
              "CLT for sum: S approx N(nμ, nσ²)",
              "Works i.i.d. finite variance",
              "Justifies normal approximations"
            ],
            diagram: "   any shape → sum of many\n   becomes bell curve\n\n   n=1  skewed\n   n=30 ≈ normal\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "CLT explains normal ubiquity",
              "SE shrinks with √n",
              "Applies to sample mean",
              "Finite variance required",
              "Metrics use CLT for CIs"
            ],
            example: "import numpy as np\nX=np.random.exponential(1,(1000,50))\nprint(\"mean of means:\", X.mean(axis=1).mean(), \"std:\", X.mean(axis=1).std())",
            output: "approx N(1, 1/50)"
          },
          {
            id: "dist-ml",
            title: "Distributions in ML Models",
            content: "Logistic regression: y~Bernoulli(σ(w·x)). Linear regression often y~N(w·x, σ²). **Gaussian Naive Bayes** continuous features. **VAE** latent z~N(0,I). **Mixture models** sum of Gaussians. Output layer activations match distribution: sigmoid/Bernoulli, softmax/categorical, ReLU+exp/Poisson rates. Negative log-likelihood = cross-entropy for classification. Choosing distribution = choosing loss. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "Bernoulli → sigmoid + BCE",
              "Gaussian y → MSE / NLL",
              "Categorical → softmax + CE",
              "Poisson → log link",
              "VAE latent z ~ N(0,I)"
            ],
            diagram: "   output layer ↔ distribution:\n\n   sigmoid    → Bernoulli\n   softmax    → Categorical\n   linear     → Gaussian (MSE)\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "Likelihood choice drives loss",
              "Softmax matches categorical NLL",
              "MSE assumes Gaussian noise",
              "Generative models specify full dist",
              "Mismatch hurts performance"
            ],
            example: "import numpy as np\n# MSE assumes Gaussian\ny=np.array([1.,2.,3.]); yhat=np.array([1.1,1.9,3.2])\nprint(\"MSE:\", ((y-yhat)**2).mean())",
            output: "MSE loss"
          }
        ],
        exercises: [
          {
            id: "ex-dist-1",
            question: "Sample 1000 N(0,1); histogram verify bell shape.",
            solution: "import numpy as np\nprint(np.random.randn(1000).std())",
            difficulty: "easy"
          },
          {
            id: "ex-dist-2",
            question: "Poisson PMF λ=3, k=0..6.",
            solution: "from scipy import stats; import numpy as np\nk=np.arange(7); print(stats.poisson.pmf(k,3))",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-joint-marginal",
        title: "Joint, Marginal & Independence",
        description: "Multivariate relationships, covariance matrices, and factorization.",
        level: "intermediate",
        track: "math",
        sections: [
          {
            id: "jm-joint",
            title: "Joint Distributions",
            content: "**Joint PMF** p(x,y)=P(X=x,Y=y). **Joint PDF** f(x,y) with ∫∫f=1. **Marginal** p(x)=∑_y p(x,y) or ∫ f(x,y)dy. Joint captures full dependence structure. **Covariance matrix** Σ_ij=Cov(X_i,X_j). Multivariate data rows as samples from joint. Copulas model dependence separately from marginals. Joint modeling in generative AI (images as pixel joints approximately factorized). Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "p(x,y) joint PMF/PDF",
              "p(x) = ∑_y p(x,y) marginal",
              "f(x) = ∫ f(x,y) dy",
              "Σ_ij = Cov(X_i, X_j)",
              "∫∫ f(x,y) dx dy = 1"
            ],
            diagram: "   joint table X,Y:\n\n        y1   y2   y3\n   x1  .2   .1   .05\n   x2  .15  .3   .2\n\n   marginals = row/col sums\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "Joint has full info",
              "Marginals sum/integrate out",
              "Cov matrix from joint",
              "Independence factorizes joint",
              "High-D joints hard to model"
            ],
            example: "import numpy as np\nJ=np.array([[0.2,0.1],[0.3,0.4]])\nprint(\"marg X:\", J.sum(axis=1), \"marg Y:\", J.sum(axis=0))",
            output: "marginals"
          },
          {
            id: "jm-indep",
            title: "Independence & Conditional",
            content: "X,Y independent iff p(x,y)=p(x)p(y) or f(x,y)=f(x)f(y). Equivalently P(X|Y)=P(X). **Conditional** p(x|y)=p(x,y)/p(y). **Chain rule** p(x,y,z)=p(x)p(y|x)p(z|x,y). Bayes nets factorize joint via conditionals. Correlation zero doesn't imply independence except Gaussian special case. **Conditional independence** X⊥Y|Z simplifies structure in PGM. Feature independence assumption in naive Bayes rarely true but useful.",
            formulas: [
              "Indep: p(x,y)=p(x)p(y)",
              "p(x|y)=p(x,y)/p(y)",
              "p(x,y,z)=p(x)p(y|x)p(z|x,y)",
              "X⊥Y|Z: p(x,y|z)=p(x|z)p(y|z)",
              "Corr=0 ≠ indep (non-Gaussian)"
            ],
            diagram: "   independent joint factorizes:\n\n   p(x,y) = p(x)·p(y)\n\n   grid = outer product of marginals\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "Independence factorizes joint",
              "Conditional from joint/marginal",
              "Chain rule builds complex joints",
              "Conditional indep in Bayes nets",
              "Naive Bayes strong assumption"
            ],
            example: "import numpy as np\npx=np.array([0.4,0.6]); py=np.array([0.5,0.5])\nprint(np.outer(px,py))",
            output: "indep joint"
          },
          {
            id: "jm-cov",
            title: "Covariance & Correlation",
            content: "Cov(X,Y)=E[(X−μ_X)(Y−μ_Y)]. Corr ρ=Cov/(σ_X σ_Y)∈[−1,1]. Cov matrix Σ symmetric PSD. Diagonal = variances. **Correlation matrix** unit diagonal. Σ eigenvalues principal variances. Det Σ generalizes bivariate correlation volume. Sample cov (1/n)X̃ᵀX̃. Shrinkage estimators regularize Σ for small n. Feature correlation heatmaps guide EDA and multicollinearity detection. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "Cov(X,Y) = E[XY] − E[X]E[Y]",
              "ρ = Cov/(σ_X σ_Y)",
              "Σ symmetric, PSD",
              "Corr matrix: diag 1",
              "Sample Σ = X̃ᵀX̃/n"
            ],
            diagram: "   correlation heatmap:\n\n   1.0  0.8  0.1\n   0.8  1.0 −0.3\n   0.1 −0.3  1.0\n\n   diagonal always 1\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "Correlation normalized covariance",
              "PSD required valid cov matrix",
              "High corr → redundancy",
              "Eigenvalues of Σ for PCA",
              "Shrinkage for small samples"
            ],
            example: "import numpy as np\nX=np.random.randn(100,3)\nC=np.corrcoef(X.T)\nprint(np.round(C,2))",
            output: "corr matrix"
          },
          {
            id: "jm-ml",
            title: "Joint Modeling in ML",
            content: "**Generative** models learn p(x) or p(x,y). **Discriminative** learn p(y|x) directly. Joint p(x,y)=p(y|x)p(x). **Multivariate Gaussian** for anomaly detection via Σ^{-1} Mahalanobis distance. **Copula + marginals** in finance. **Diffusion models** learn score ∇_x log p(x). VAE learns latent joint. Factorized autoregressive p(x)=∏p(x_i|x_{<i}). Choosing what joint to model defines generative task complexity.",
            formulas: [
              "Generative: model p(x) or p(x,y)",
              "Discriminative: p(y|x)",
              "p(x,y)=p(y|x)p(x)",
              "Mahalanobis: (x−μ)ᵀΣ⁻¹(x−μ)",
              "Autoregressive factorization"
            ],
            diagram: "   generative vs discriminative:\n\n   p(x,y) ──→ p(y|x)  discriminative\n   p(x,y) ──→ p(x)    generative\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │\n   │  · · ·",
            keyPoints: [
              "Discriminative often better classification",
              "Generative enables sampling",
              "Mahalanobis for outliers",
              "Autoregressive GPT factorization",
              "Joint structure defines difficulty"
            ],
            example: "import numpy as np\nmu=np.zeros(2); X=np.random.randn(50,2)\nprint(\"Mahalanobis approx:\", ((X**2).sum(axis=1)).mean())",
            output: "chi2-like"
          }
        ],
        exercises: [
          {
            id: "ex-jm-1",
            question: "Joint [[0.1,0.2],[0.3,0.4]]; verify sums to 1.",
            solution: "import numpy as np\nJ=np.array([[0.1,0.2],[0.3,0.4]]); print(J.sum())",
            difficulty: "easy"
          },
          {
            id: "ex-jm-2",
            question: "Independent px=[0.3,0.7], py=[0.4,0.6]; build joint.",
            solution: "import numpy as np\nprint(np.outer([0.3,0.7],[0.4,0.6]))",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      }
    ]
  },
  {
    num: 7,
    id: "module-math-07",
    fileName: "module-math-07-statistics",
    exportName: "moduleMath07Topics",
    name: "Statistics",
    track: "math",
    description: "Descriptive statistics, sampling, CLT, hypothesis testing, confidence intervals, and regression mathematics.",
    topics: [
      {
        id: "math-descriptive",
        title: "Descriptive Statistics",
        description: "Mean, variance, percentiles, and exploratory data summaries.",
        level: "intermediate",
        track: "math",
        sections: [
          {
            id: "ds-central",
            title: "Central Tendency",
            content: "**Mean** x̄=(1/n)∑x_i sensitive to outliers. **Median** middle value robust. **Mode** most frequent; useful categorical. **Trimmed mean** drops extremes. Weighted mean for uneven importance. Geometric mean for rates/ratios. Harmonic mean for rates. In skewed income data, median better than mean. ML: batch normalization uses batch mean; layer norm uses feature statistics. Choose summary matching distribution shape and robustness needs.",
            formulas: [
              "x̄ = (1/n) ∑ x_i",
              "Median: middle of sorted data",
              "Mode: argmax frequency",
              "Trimmed mean: drop extremes",
              "Weighted: ∑ w_i x_i / ∑ w_i"
            ],
            diagram: "   skewed data:\n\n   mean → pulled by tail\n   median → center of mass\n        ·  ·  ·│· · ·\n              ↑ median\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Mean sensitive to outliers",
              "Median robust for skew",
              "Mode for categorical peaks",
              "Batch norm tracks mean",
              "Report median for skewed metrics"
            ],
            example: "import numpy as np\nx=np.array([1,2,2,3,100])\nprint(\"mean:\", x.mean(), \"median:\", np.median(x))",
            output: "mean inflated by 100"
          },
          {
            id: "ds-spread",
            title: "Variance & Spread",
            content: "Sample variance s²=(1/(n−1))∑(x_i−x̄)² unbiased for σ². Population variance divides by n. **IQR** Q3−Q1 robust spread. **MAD** median absolute deviation. Std σ same units as data. CV=σ/|μ| relative spread. Range max−min sensitive. Boxplot shows quartiles and outliers. Feature scaling uses std. High variance features may dominate distance metrics without normalization. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "s² = (1/(n−1))∑(x_i−x̄)²",
              "σ = √Var(X)",
              "IQR = Q3 − Q1",
              "MAD = median(|x−median|)",
              "CV = σ/|μ|"
            ],
            diagram: "   boxplot:\n\n   max ─┬─\n   Q3  ─┤\n   med ─┤ box\n   Q1  ─┤\n   min ─┴─ outliers ·\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "n−1 for unbiased sample var",
              "IQR robust to outliers",
              "Std for z-score scaling",
              "Boxplot visualizes quartiles",
              "Normalize before distance-based ML"
            ],
            example: "import numpy as np\nx=np.array([2,4,4,4,5,5,7,9])\nprint(\"var:\", x.var(ddof=1), \"IQR:\", np.percentile(x,75)-np.percentile(x,25))",
            output: "var/IQR"
          },
          {
            id: "ds-percentile",
            title: "Percentiles & Quantiles",
            content: "p-th percentile: p% data below. **Quartiles** Q1=25%, Q2=median, Q3=75%. Quantile function Q(p) inverse CDF. Used in thresholds, SLA metrics, and **quantile loss** for forecasting median (pinball loss). np.percentile, np.quantile. Robust min/max estimation via percentiles for clipping outliers. Deciles, percentiles standard in reporting latency p95, p99 in systems monitoring. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "Q(p) = inf{x : F(x)≥p}",
              "Q1=25th, Q2=50th, Q3=75th",
              "Pinball loss for quantile τ",
              "p99 latency common SLA",
              "Percentile robust to extremes"
            ],
            diagram: "   CDF F(x)\n\n   0 ──────────────── 1\n        ↑ Q(0.95)\n   95% below this value\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "Percentiles invert CDF",
              "Pinball loss for quantile reg",
              "p95/p99 for tail behavior",
              "Clip using percentile bounds",
              "Quartiles in boxplots"
            ],
            example: "import numpy as np\nx=np.random.randn(1000)\nprint(\"p95:\", np.percentile(x,95))",
            output: "p95 ~ 1.64"
          },
          {
            id: "ds-eda",
            title: "EDA for ML",
            content: "Summary stats per feature: mean, std, missing rate, unique count. Histograms reveal skew/multimodality. Correlation matrix detects redundancy. Pairplots for bivariate. Target distribution check for class imbalance. Outlier flags via IQR rule. EDA prevents garbage-in failures. Document findings before modeling. Automated profiling (pandas describe, ydata-profiling) accelerates. Compare train vs test distributions for shift detection.",
            formulas: [
              "describe(): count mean std min max",
              "Missing rate per column",
              "Class balance P(y)",
              "Train vs test distribution compare",
              "IQR outlier: x<Q1−1.5IQR or x>Q3+1.5IQR"
            ],
            diagram: "   EDA checklist:\n\n   □ shape dtypes\n   □ missing values\n   □ target balance\n   □ feature histograms\n   □ correlations\n   □ train/test shift\n   │\n   │  · · ·",
            keyPoints: [
              "EDA before modeling mandatory",
              "Check imbalance early",
              "Correlation guides feature selection",
              "Distribution shift breaks models",
              "Automate reproducible profiles"
            ],
            example: "import numpy as np\nimport pandas as pd\nX=pd.DataFrame(np.random.randn(100,3),columns=list(\"abc\"))\nprint(X.describe())",
            output: "describe output"
          }
        ],
        exercises: [
          {
            id: "ex-ds-1",
            question: "Mean, median, std of [1,2,2,3,100].",
            solution: "import numpy as np\nx=[1,2,2,3,100]; print(np.mean(x), np.median(x), np.std(x,ddof=1))",
            difficulty: "easy"
          },
          {
            id: "ex-ds-2",
            question: "25th and 75th percentiles of standard normal sample.",
            solution: "import numpy as np\nx=np.random.randn(10000); print(np.percentile(x,[25,75]))",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-sampling-clt",
        title: "Sampling & Central Limit Theorem",
        description: "Sampling distributions, standard error, and CLT applications.",
        level: "intermediate",
        track: "math",
        sections: [
          {
            id: "sc-sample",
            title: "Random Sampling",
            content: "**Simple random sample** each unit equal probability. **Stratified** sample within groups preserves proportions. **Bootstrap** resample with replacement estimates sampling distribution. Sample statistic x̄ random across samples. **Sampling frame** defines population accessible. Bias when sample ≠ population (selection bias). ML train set is sample; generalization assumes representative i.i.d. (approximately). Time series breaks i.i.d.—use temporal splits.",
            formulas: [
              "SRS: each subset equally likely",
              "Stratified: proportional strata",
              "Bootstrap: resample n with replacement",
              "x̄ is RV across samples",
              "Selection bias if sample skewed"
            ],
            diagram: "   population → sample → statistic\n\n   Ω (big) ──draw──→ data (n)\n                      ↓\n                     x̄, s²\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "Representative sample critical",
              "Stratify for rare classes",
              "Bootstrap for CI without formulas",
              "Train/val/test splits are samples",
              "Temporal data needs special splits"
            ],
            example: "import numpy as np\npop=np.arange(100)\nsample=np.random.choice(pop,10,replace=False)\nprint(\"sample:\", sample[:5])",
            output: "random sample"
          },
          {
            id: "sc-se",
            title: "Standard Error",
            content: "**Standard error** SE(x̄)=σ/√n measures variability of sample mean across samples. Unknown σ: estimate s/√n. SE shrinks as √n—more data tighter estimate. 95% CI x̄±1.96 SE approximate (CLT). Compare models using SE of metric difference. Reporting accuracy without SE hides uncertainty. Cross-validation folds give multiple metric samples—report mean±std. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "SE(x̄) = σ/√n",
              "Estimate: SE ≈ s/√n",
              "95% CI: x̄ ± 1.96·SE",
              "SE decreases ∝ 1/√n",
              "Report metric ± SE or CI"
            ],
            diagram: "   sampling distribution of x̄:\n\n        bell narrows as n↑\n\n   n=10  wide bell\n   n=100 narrow bell\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "SE quantifies estimate uncertainty",
              "Grows with √n not n",
              "CI from CLT approximate",
              "CV metrics need multiple folds",
              "Don't report point alone"
            ],
            example: "import numpy as np\ns=2.; n=100\nprint(\"SE:\", s/np.sqrt(n))",
            output: "SE: 0.2"
          },
          {
            id: "sc-clt",
            title: "Central Limit Theorem Detail",
            content: "Standardized x̄: (x̄−μ)/(σ/√n) → N(0,1) in distribution. Works for many non-normal populations. Rule of thumb n≥30. Also applies to proportions p̂ approx N(p, p(1−p)/n). Enables z-tests and CIs. Sum of n RVs also normal for large n. CLT fails heavy tails infinite variance. Bootstrap nonparametric alternative when CLT questionable. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "(x̄−μ)/(σ/√n) → N(0,1)",
              "p̂ approx N(p, p(1−p)/n)",
              "Requires finite σ²",
              "n≥30 rule of thumb",
              "Bootstrap if CLT doubtful"
            ],
            diagram: "   sampling distribution:\n\n   any population\n        ↓ average n samples\n   ≈ Normal for large n\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "CLT enables inferential stats",
              "Applies to means and proportions",
              "Finite variance needed",
              "Bootstrap backup method",
              "Heavy tails need care"
            ],
            example: "import numpy as np\nmeans=[np.random.exponential(1,30).mean() for _ in range(5000)]\nprint(\"mean of means:\", np.mean(means), \"std:\", np.std(means))",
            output: "≈ 1, ≈ 1/√30"
          },
          {
            id: "sc-ml",
            title: "Sampling in ML Evaluation",
            content: "Hold-out test set estimates generalization error. **K-fold CV** reduces variance of metric estimate. **Bootstrap** confidence on AUC. **Stratified k-fold** preserves class ratio. Multiple seeds report mean±std. **Power analysis** determines n needed to detect effect. Online A/B tests sequential sampling with caution (peeking). Always fix test set; tune on val only once workflow to avoid overfitting selection.",
            formulas: [
              "Hold-out: single test estimate",
              "K-fold: K metric samples",
              "Stratified: preserve P(y)",
              "Report mean±std over seeds",
              "Don't peek at test repeatedly"
            ],
            diagram: "   train │ val │ test\n         tune    pick   once\n\n   test peeking → optimistic bias\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │\n   │  · · ·",
            keyPoints: [
              "Fixed test set sacred",
              "CV for small data",
              "Stratify imbalanced labels",
              "Multiple seeds show stability",
              "A/B needs sequential care"
            ],
            example: "import numpy as np\nfrom sklearn.model_selection import KFold\nX=np.arange(20)\nkf=KFold(5)\nprint(\"folds:\", [len(te) for _,te in kf.split(X)])",
            output: "4 each fold"
          }
        ],
        exercises: [
          {
            id: "ex-sc-1",
            question: "SE of mean with s=5, n=25.",
            solution: "import numpy as np\nprint(5/np.sqrt(25))",
            difficulty: "easy"
          },
          {
            id: "ex-sc-2",
            question: "Simulate 5000 sample means n=40 from Uniform(0,1); print std.",
            solution: "import numpy as np\nm=[np.random.rand(40).mean() for _ in range(5000)]\nprint(np.std(m), 1/np.sqrt(12*40))",
            difficulty: "medium"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-hypothesis",
        title: "Hypothesis Testing",
        description: "Null/alternative, p-values, errors, and common tests.",
        level: "intermediate",
        track: "math",
        sections: [
          {
            id: "ht-framework",
            title: "Testing Framework",
            content: "**H₀** null hypothesis default skepticism. **H₁** alternative. **Test statistic** summarizes data vs H₀. **p-value** P(data this extreme|H₀). Reject H₀ if p<α (significance level, often 0.05). **Type I error** false positive rate α. **Type II** β false negative. Power=1−β. Not 'accept H₀'—fail to reject. p-value NOT P(H₀ true). Multiple testing inflates false positives—Bonferroni correction α/m. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "p-value = P(T ≥ t_obs | H₀)",
              "Reject H₀ if p < α",
              "Type I: reject true H₀ (α)",
              "Type II: fail reject false H₀ (β)",
              "Power = 1 − β"
            ],
            diagram: "   decision:\n\n   p small → reject H₀\n   p large → insufficient evidence\n\n   α=0.05 threshold line\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "p-value not prob H₀ true",
              "α controls false positives",
              "Power needs effect size + n",
              "Multiple tests need correction",
              "Fail to reject ≠ prove null"
            ],
            example: "import numpy as np\nfrom scipy import stats\nt,p=stats.ttest_1samp([1.2,0.9,1.1,1.3,0.8], 0)\nprint(\"p-value:\", p)",
            output: "p-value"
          },
          {
            id: "ht-tests",
            title: "Common Tests",
            content: "**z-test** mean known σ large n. **t-test** mean unknown σ small n. Paired t for before/after. Two-sample t independent groups. **χ²** goodness-of-fit and independence in contingency tables. **F-test** variance ratio. ANOVA F for multiple means. Choose test matching data type and assumptions (normality, independence). Nonparametric: Mann-Whitney, Wilcoxon when normality fails. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "t = (x̄−μ₀)/(s/√n)",
              "χ² = ∑ (O−E)²/E",
              "Two-sample t: compare means",
              "Paired t: difference scores",
              "ANOVA: compare k means"
            ],
            diagram: "   test selection tree:\n\n   numeric 2 groups → t-test\n   categorical table → χ²\n   >2 group means → ANOVA\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "Match test to question",
              "Check assumptions",
              "t-test for means",
              "Chi-square for counts",
              "Nonparametric if needed"
            ],
            example: "import numpy as np\nfrom scipy import stats\na,b=np.random.randn(30),np.random.randn(30)+0.3\nt,p=stats.ttest_ind(a,b)\nprint(\"p:\", p)",
            output: "p from ttest"
          },
          {
            id: "ht-ab",
            title: "A/B Testing",
            content: "Compare conversion rates p_A vs p_B. H₀: p_A=p_B. Two-proportion z-test or χ² on 2×2 table. Need sample size for desired power. **SRM** sample ratio mismatch checks randomization. Run fixed horizon avoid peeking bias. **Sequential testing** specialized bounds. Practical significance vs statistical: 0.01% lift may be significant with huge n but useless. Bayesian A/B alternative gives posterior on lift.",
            formulas: [
              "H₀: p_A = p_B",
              "z = (p̂_A−p̂_B)/SE_diff",
              "Power needs n, effect size, α",
              "Fixed horizon reduces peeking bias",
              "Practical vs statistical significance"
            ],
            diagram: "   A/B split:\n\n   users ──50/50──→ A (control)\n                └──→ B (treatment)\n\n   compare metric mean/rate\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Randomization avoids confounding",
              "Power analysis before test",
              "Peeking inflates false positives",
              "Check SRM on assignment",
              "Effect size matters for business"
            ],
            example: "import numpy as np\nconv_a, n_a = 120, 1000\nconv_b, n_b = 145, 1000\np_a, p_b = conv_a/n_a, conv_b/n_b\nse=np.sqrt(p_a*(1-p_a)/n_a+p_b*(1-p_b)/n_b)\nz=(p_b-p_a)/se\nprint(\"z:\", z)",
            output: "z stat"
          },
          {
            id: "ht-ml",
            title: "Testing in ML Experiments",
            content: "**McNemar** paired classifier comparison same test set. **Permutation test** shuffle labels nonparametric p-value. **Diebold-Mariano** forecast comparison. Compare CV scores with paired t across folds. Report confidence intervals on metric not just point. **Multiple model comparison** Bonferroni or Holm correction. Statistical significance ≠ better production model—consider latency, cost, fairness.",
            formulas: [
              "McNemar: paired classification errors",
              "Permutation: shuffle null",
              "Paired t on CV fold scores",
              "Correct for multiple comparisons",
              "Sig ≠ deploy decision"
            ],
            diagram: "   model A vs B same test:\n\n   both wrong → both right pairs\n   McNemar uses discordant pairs\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │\n   │  · · ·",
            keyPoints: [
              "Use paired tests same data",
              "Permutation flexible",
              "Correct multiple models",
              "CI better than p alone",
              "Engineering constraints matter"
            ],
            example: "import numpy as np\n# simple permutation test mean diff\na,b=np.random.randn(20),np.random.randn(20)+0.5\nobs=a.mean()-b.mean()\ncount=0\nfor _ in range(1000):\n    pool=np.concatenate([a,b]); np.random.shuffle(pool)\n    if abs(pool[:20].mean()-pool[20:].mean())>=abs(obs): count+=1\nprint(\"p approx:\", count/1000)",
            output: "perm p"
          }
        ],
        exercises: [
          {
            id: "ex-ht-1",
            question: "One-sample t-test H0: mean=0 for [2,3,1,2,4].",
            solution: "from scipy import stats\nprint(stats.ttest_1samp([2,3,1,2,4],0).pvalue)",
            difficulty: "easy"
          },
          {
            id: "ex-ht-2",
            question: "Two-proportion SE for p1=0.1,n1=100,p2=0.15,n2=100.",
            solution: "import numpy as np\np1,p2,n1,n2=0.1,0.15,100,100\nse=np.sqrt(p1*(1-p1)/n1+p2*(1-p2)/n2); print(se)",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-confidence",
        title: "Confidence Intervals",
        description: "Construct and interpret confidence intervals for means and proportions.",
        level: "intermediate",
        track: "math",
        sections: [
          {
            id: "ci-mean",
            title: "CI for Mean",
            content: "95% CI x̄±t_{α/2,n−1}·s/√n uses t distribution small n; z_{0.975}=1.96 large n. Interpretation: procedure captures true μ in 95% of repeated samples—not P(μ in interval). Width ∝ 1/√n. Wider CI more uncertain. Bootstrapping: resample B times, percentile CI from bootstrap distribution. BCa bootstrap improves bias. Report CI with point estimate in papers and dashboards. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "95% CI: x̄ ± t*·s/√n",
              "Width ∝ 1/√n",
              "t* → 1.96 as n→∞",
              "Bootstrap percentile CI",
              "CI = plausible μ values"
            ],
            diagram: "   CI as error bar:\n\n   x̄ ────[====]────\n       lower  upper\n\n   wider = less precision\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "CI frequency interpretation",
              "t for small samples",
              "Bootstrap when CLT weak",
              "Width shrinks with √n",
              "Always pair with estimate"
            ],
            example: "import numpy as np\nfrom scipy import stats\nx=np.random.randn(25)\nse=x.std(ddof=1)/np.sqrt(len(x))\nprint(stats.t.interval(0.95, len(x)-1, loc=x.mean(), scale=se))",
            output: "95% CI"
          },
          {
            id: "ci-prop",
            title: "CI for Proportions",
            content: "Wald CI p̂±z√(p̂(1−p̂)/n) simple but poor small n/extreme p. **Wilson score** interval better coverage. Binomial exact (Clopper-Pearson) conservative. For ML accuracy on n test samples: report p̂±CI. Rare class metrics need large n for tight CI. Wilson preferred in modern practice over Wald for proportions. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "Wald: p̂ ± z√(p̂(1−p̂)/n)",
              "Wilson score interval (better)",
              "Agresti-Coull adjustment",
              "Exact binomial conservative",
              "Rare events need large n"
            ],
            diagram: "   accuracy 0.92 on n=100:\n\n   CI might [0.85, 0.96]\n   n=10000 → much tighter\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │\n   │  · · ·",
            keyPoints: [
              "Wald fails at extremes",
              "Wilson recommended",
              "Small test set wide CI",
              "Report CI with accuracy",
              "Rare class CIs very wide"
            ],
            example: "import numpy as np\nfrom statsmodels.stats.proportion import proportion_confint\nci=proportion_confint(92,100,method=\"wilson\")\nprint(\"Wilson:\", ci)",
            output: "Wilson CI"
          },
          {
            id: "ci-diff",
            title: "CI for Differences",
            content: "CI for μ_A−μ_B: (x̄_A−x̄_B)±t*·SE_diff. Independent: SE_diff=√(s_A²/n_A+s_B²/n_B). Overlap of individual CIs ≠ non-significance of difference (common mistake). Paired: CI on mean difference. Lift CI in A/B: bootstrap on ratio or log ratio. If difference CI excludes 0, significant at corresponding α. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "μ_A−μ_B CI: (x̄_A−x̄_B) ± t* SE",
              "SE_diff independent groups",
              "Paired: CI on d_i = x_i−y_i",
              "Exclude 0 ↔ significant",
              "Overlap CI misleading for diff"
            ],
            diagram: "   difference CI:\n\n   0 inside CI → not significant\n   0 outside → significant\n\n   [====|----0----|====]\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Difference CI tests effect",
              "Overlap individual CIs misleading",
              "Paired uses difference scores",
              "Bootstrap for ratio metrics",
              "Exclude zero = significant"
            ],
            example: "import numpy as np\na,b=np.random.randn(50)+0.2, np.random.randn(50)\nd=a.mean()-b.mean()\nse=np.sqrt(a.var(ddof=1)/50+b.var(ddof=1)/50)\nprint(\"diff CI:\", d-1.96*se, d+1.96*se)",
            output: "diff CI"
          },
          {
            id: "ci-ml",
            title: "Uncertainty in ML Metrics",
            content: "Bootstrap test set for metric CI. CV: mean±std across folds is approximate. **Conformal prediction** gives prediction intervals with coverage guarantee. Bayesian models posterior predictive intervals. Report F1 CI on imbalanced data especially. Leaderboard scores without CI overfit to test noise. Nested CV for unbiased performance estimate with uncertainty. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "Bootstrap metrics on test set",
              "CV mean ± std approximate",
              "Conformal: distribution-free coverage",
              "Bayesian predictive intervals",
              "Nested CV for model selection"
            ],
            diagram: "   metric report format:\n\n   F1 = 0.87 (95% CI: 0.84–0.90)\n\n   not just F1 = 0.87\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "Always quantify metric uncertainty",
              "Bootstrap simple and flexible",
              "Conformal for prediction bands",
              "Nested CV reduces selection bias",
              "Leaderboards ignore uncertainty"
            ],
            example: "import numpy as np\nacc=[0.9,0.88,0.91,0.89,0.9]  # 5-fold\nprint(\"mean:\", np.mean(acc), \"std:\", np.std(acc,ddof=1))",
            output: "CV stats"
          }
        ],
        exercises: [
          {
            id: "ex-ci-1",
            question: "95% CI for mean of [10,12,14] assuming known s=2, n small use t.",
            solution: "from scipy import stats\nimport numpy as np\nx=[10,12,14]; se=2/np.sqrt(3)\nprint(stats.t.interval(0.95,2,loc=np.mean(x),scale=se))",
            difficulty: "easy"
          },
          {
            id: "ex-ci-2",
            question: "Wilson CI for 45 successes/50 trials.",
            solution: "from statsmodels.stats.proportion import proportion_confint\nprint(proportion_confint(45,50,method=\"wilson\"))",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-regression-math",
        title: "Regression Mathematics",
        description: "Linear regression normal equations, assumptions, and statistical inference.",
        level: "intermediate",
        track: "math",
        sections: [
          {
            id: "reg-ols",
            title: "Ordinary Least Squares",
            content: "Model y=Xβ+ε. OLS minimizes ||y−Xβ||². **Normal equations** XᵀXβ=Xᵀy. Solution β=(XᵀX)⁻¹Xᵀy if full rank. Geometric: orthogonal projection of y onto Col(X). Hat matrix H=X(XᵀX)⁻¹Xᵀ, ŷ=Hy. Residuals e=y−ŷ orthogonal to Col(X). Multiple regression adds columns to X. Polynomial regression linear in β with nonlinear features. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "min ||y − Xβ||²",
              "Normal eq: XᵀXβ = Xᵀy",
              "β = (XᵀX)⁻¹ Xᵀy",
              "ŷ = H y projection",
              "e = y − ŷ ⊥ Col(X)"
            ],
            diagram: "   y vector projected onto\n   column space of X:\n\n        y\n       ╱| ŷ\n      ╱ |\n     ╱  | e (residual)\n    Col(X)\n   │\n   │  · · ·",
            keyPoints: [
              "OLS = orthogonal projection",
              "Normal equations from calculus",
              "Full rank needed unique β",
              "Polynomial via feature map",
              "Residuals orthogonal to fit"
            ],
            example: "import numpy as np\nX=np.column_stack([np.ones(5),np.arange(5)])\ny=np.array([1,3,3,5,5])\nbeta=np.linalg.lstsq(X,y,rcond=None)[0]\nprint(\"beta:\", beta)",
            output: "intercept slope"
          },
          {
            id: "reg-assump",
            title: "Regression Assumptions",
            content: "Classical linear model: (1) linearity E[ε|X]=0 (2) homoscedasticity Var(ε|X)=σ² constant (3) independence (4) no perfect multicollinearity (5) often normality of ε for inference. Violations: heteroscedasticity, autocorrelation, nonlinearity. Diagnostics: residual plots, VIF for multicollinearity, Breusch-Pagan test. Robust SE or weighted least squares address heteroscedasticity. Regularization when collinear.",
            formulas: [
              "E[ε|X] = 0",
              "Var(ε|X) = σ² (homoscedastic)",
              "No perfect collinearity",
              "ε ~ N(0,σ²) for t-tests",
              "VIF detects multicollinearity"
            ],
            diagram: "   residual plot healthy:\n\n   e │ ·  ·    random scatter\n     │   · ·\n     └── predictor\n\n   funnel → heteroscedasticity\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "Check residuals systematically",
              "Funnel shape bad",
              "VIF>10 concern collinearity",
              "Normality for CI/p-values",
              "Regularize collinear features"
            ],
            example: "import numpy as np\nX=np.random.randn(100,3)\nprint(\"rank:\", np.linalg.matrix_rank(X))",
            output: "full rank likely"
          },
          {
            id: "reg-infer",
            title: "Statistical Inference",
            content: "β̂ variance σ²(XᵀX)⁻¹. Estimate σ² by s²=||e||²/(n−p−1). t-test for β_j=0: t=β̂_j/SE(β̂_j). F-test overall model. R²=1−SSE/SST proportion variance explained— increases with more features. Adjusted R² penalizes complexity. Confidence bands for mean response vs prediction intervals wider include ε noise. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "Var(β̂) = σ² (XᵀX)⁻¹",
              "s² = ||e||²/(n−p−1)",
              "t = β̂_j / SE(β̂_j)",
              "R² = 1 − SSE/SST",
              "Adj R² penalizes p"
            ],
            diagram: "   R² interpretation:\n\n   0 = no better than mean\n   1 = perfect fit (overfit risk)\n\n   adj R² down if useless feature added\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "SE on coefficients for significance",
              "R² not always better high",
              "Adj R² compares models",
              "Prediction interval wider than CI mean",
              "F-test overall significance"
            ],
            example: "import numpy as np\ny=np.array([1,2,3,4,5]); yhat=np.array([1.1,1.9,3.2,3.8,5.1])\nss_res=((y-yhat)**2).sum(); ss_tot=((y-y.mean())**2).sum()\nprint(\"R2:\", 1-ss_res/ss_tot)",
            output: "R2"
          },
          {
            id: "reg-ml",
            title: "Regression to ML",
            content: "Linear regression foundation for GLMs, logistic (IRLS), neural nets (linear output layer). **Ridge** L2, **Lasso** L1, **Elastic Net** combine. Gradient descent scales to large data vs normal equations O(np²). Regularization as Bayesian priors. Polynomial and interaction features expand X. Logistic regression for classification still linear in features. Understanding OLS clarifies loss surfaces and normal equations in linear networks.",
            formulas: [
              "Ridge: min ||y−Xβ||² + λ||β||²",
              "Lasso: L1 → sparsity",
              "GD scales big data",
              "Normal eq O(np²) expensive",
              "GLM generalizes linear model"
            ],
            diagram: "   OLS → Ridge → Lasso\n\n   add λ||β||²   add λ||β||₁\n   shrink        select features\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │\n   │  · · ·",
            keyPoints: [
              "Normal eq fine small p",
              "GD for deep/large data",
              "Ridge handles collinearity",
              "Lasso feature selection",
              "Logistic = linear + logit link"
            ],
            example: "import numpy as np\nX=np.random.randn(100,5); y=X@np.arange(5)+np.random.randn(100)*0.1\nlam=1.\nbeta=np.linalg.solve(X.T@X+lam*np.eye(5), X.T@y)\nprint(\"ridge beta shape:\", beta.shape)",
            output: "ridge solution"
          }
        ],
        exercises: [
          {
            id: "ex-reg-1",
            question: "Fit y=2+3x to points (0,2),(1,5),(2,8) via lstsq.",
            solution: "import numpy as np\nX=np.array([[1,0],[1,1],[1,2]]); y=[2,5,8]\nprint(np.linalg.lstsq(X,y,rcond=None)[0])",
            difficulty: "easy"
          },
          {
            id: "ex-reg-2",
            question: "Compute R² for perfect fit y=yhat.",
            solution: "import numpy as np\ny=np.array([1,2,3]); print(1-0/((y-y.mean())**2).sum())",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      }
    ]
  },
  {
    num: 8,
    id: "module-math-08",
    fileName: "module-math-08-opt-info",
    exportName: "moduleMath08Topics",
    name: "Optimization & Information Theory",
    track: "math",
    description: "Convex optimization, gradient descent theory, Lagrange multipliers, entropy, KL divergence, and MLE.",
    topics: [
      {
        id: "math-convex",
        title: "Convex Optimization",
        description: "Convex sets, convex functions, and why convex problems are tractable.",
        level: "advanced",
        track: "math",
        sections: [
          {
            id: "cvx-sets",
            title: "Convex Sets",
            content: "Set C **convex** if λx+(1−λ)y∈C for all x,y∈C, λ∈[0,1]. Line segment between any two points stays in set. Examples: halfspaces, balls, polyhedra {x:Ax≤b}. **Intersection** of convex sets convex. Non-convex: donut, two blobs. Convex feasible region in optimization guarantees global min if objective convex. Constraint xᵀx≤r² ball convex. ReLU network loss non-convex in weights. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "λx + (1−λ)y ∈ C for x,y∈C, λ∈[0,1]",
              "Halfspace: {x : aᵀx ≤ b} convex",
              "Ball: {x : ||x|| ≤ r} convex",
              "Intersection of convex sets convex",
              "Polyhedron: Ax ≤ b convex"
            ],
            diagram: "   convex set:\n\n   x ●─────────● y\n        all chord inside\n\n   non-convex: hole or indent\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Line segment test for convexity",
              "Linear constraints → convex feasible",
              "Balls and halfspaces basic blocks",
              "NN loss generally non-convex",
              "Convex feasible + convex f → global min"
            ],
            example: "import numpy as np\n# check midpoint in [0,1] interval\nx,y=0.2,0.8; lam=0.4\nm=lam*x+(1-lam)*y\nprint(0<=m<=1)",
            output: "midpoint in set"
          },
          {
            id: "cvx-func",
            title: "Convex Functions",
            content: "f convex if epigraph above graph convex: f(λx+(1−λ)y)≤λf(x)+(1−λ)f(y). **First-order**: f(y)≥f(x)+∇f(x)ᵀ(y−x)—tangent below graph. **Second-order**: H⪰0 PSD. Examples: x², e^x, −log x (x>0), ||x||₂. Sums and non-negative combos preserve convexity. **Strongly convex** μ>0: H⪰μI unique min faster convergence. Cross-entropy convex in logits; MSE convex in linear params. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "f(λx+(1−λ)y) ≤ λf(x)+(1−λ)f(y)",
              "1st order: tangent global underestimator",
              "2nd order: H ⪰ 0",
              "Strongly convex: H ⪰ μI",
              "Composition rules preserve convexity"
            ],
            diagram: "   convex f:\n\n   chord above graph\n        ╱ f\n       ╱\n   ──── chord below endpoints\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Tangent lies below for convex",
              "Hessian PSD test smooth case",
              "Strong convexity speeds GD",
              "Many losses convex in params",
              "Composition rules limited"
            ],
            example: "import numpy as np\nf=lambda x: x**2\nx,y=-1.,2.; lam=0.3\nprint(f(lam*x+(1-lam)*y) <= lam*f(x)+(1-lam)*f(y))",
            output: "True"
          },
          {
            id: "cvx-problems",
            title: "Convex Problem Forms",
            content: "**LP** linear objective+constraints. **QP** quadratic objective linear constraints—SVM dual. **SOCP** second-order cone. **SDP** matrix constraints. cvxpy models convex problems. Local min = global for convex f on convex C. **KKT conditions** necessary sufficient for convex. Non-convex: multiple stationary points. Deep learning non-convex but SGD finds good minima empirically. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "min f(x) s.t. x ∈ C convex",
              "LP: linear f and constraints",
              "QP: ½xᵀPx+qᵀx",
              "Local = global if f convex on C",
              "KKT: ∇f + ∑λᵢ∇gᵢ = 0"
            ],
            diagram: "   convex optimization landscape:\n\n   single bowl → one global min\n\n   non-convex: many valleys\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "Convex problems globally tractable",
              "QP includes SVM",
              "KKT characterizes optimum",
              "DL non-convex exception",
              "cvxpy for prototyping"
            ],
            example: "import numpy as np\n# min (x-2)² s.t. x>=0 → x=2\nx=max(0,2.); print(x)",
            output: "x=2"
          },
          {
            id: "cvx-ml",
            title: "Convexity in ML Losses",
            content: "Logistic loss convex in w. SVM hinge convex. Lasso problem convex but not strictly. Neural net hidden layers break convexity. **Convex relaxations** for hard problems. **Surrogate losses** convex upper bounds. Understanding which part convex helps debug optimization. Linear regression loss bowl-shaped in β. Regularization preserves convexity for convex base loss. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "Logistic NLL convex in w",
              "Hinge loss convex",
              "MSE convex in linear β",
              "Hidden layers → non-convex",
              "λ||w||² preserves convexity"
            ],
            diagram: "   convex ML losses (linear models):\n\n   MSE bowl in w\n   logistic bowl in w\n   + L2 still convex\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "Linear models convex in weights",
              "Deep nets non-convex",
              "Convex surrogate losses common",
              "Regularization keeps convexity",
              "Local min may suffice in DL"
            ],
            example: "import numpy as np\nw=np.linspace(-2,2,50)\nloss=(w-1)**2\nprint(\"unique min w:\", w[np.argmin(loss)])",
            output: "w=1"
          }
        ],
        exercises: [
          {
            id: "ex-cvx-1",
            question: "Verify convexity numerically for f(x)=x² on random x,y,λ.",
            solution: "import numpy as np\nf=lambda x:x**2\nx,y,lam=1.,3.,0.4\nprint(f(lam*x+(1-lam)*y) <= lam*f(x)+(1-lam)*f(y))",
            difficulty: "easy"
          },
          {
            id: "ex-cvx-2",
            question: "Minimize (x-3)² for x>=1 analytically then verify.",
            solution: "import numpy as np\nx=max(1,3.); print(x, (x-3)**2)",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-gradient-descent-math",
        title: "Gradient Descent Theory",
        description: "Convergence rates, step size, momentum, and adaptive methods.",
        level: "advanced",
        track: "math",
        sections: [
          {
            id: "gd-conv",
            title: "Convergence Conditions",
            content: "For L-smooth convex f: GD with η≤1/L converges to global min rate O(1/t). **Strongly convex** μ: linear rate O((1−ημ)^t). Too large η diverges. **PL condition** weaker than strong convexity still linear. Non-convex: convergence to stationary point ||∇f||→0. Stochastic GD adds noise but averages out. Lower bounds: first-order methods limited for high-D black-box. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "L-smooth: ||∇f(x)−∇f(y)|| ≤ L||x−y||",
              "η ≤ 1/L for convex convergence",
              "Strongly convex: (1−ημ)^t rate",
              "SGD: E[||∇L||] → 0",
              "Non-convex: find stationary points"
            ],
            diagram: "   η too big:\n\n   bounce across valley\n   diverge ↑\n\n   η ok: steady descent ↘\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Step size bounded by 1/L",
              "Strong convexity linear rate",
              "SGD converges with decaying η",
              "Non-convex no global guarantee",
              "Stationary point necessary for min"
            ],
            example: "import numpy as np\ntheta=5.; eta=0.1; L=2\nfor _ in range(50): theta -= eta*L*theta\nprint(theta)",
            output: "→ 0"
          },
          {
            id: "gd-momentum",
            title: "Momentum & Nesterov",
            content: "**Momentum** v_t=βv_{t−1}+∇L; θ_t=θ_{t−1}−ηv_t accumulates velocity dampens oscillation in ravines. β≈0.9 typical. **Nesterov** lookahead gradient evaluates ahead. Heavy ball method physics analogy. Accelerated methods O(1/t²) for convex vs O(1/t) vanilla GD. Adam combines momentum with adaptive scaling. Momentum helps consistent gradient directions. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "v_t = β v_{t−1} + ∇L",
              "θ_t = θ_{t−1} − η v_t",
              "β ≈ 0.9 common",
              "Nesterov: grad at lookahead",
              "Accelerated O(1/t²) convex"
            ],
            diagram: "   ravine without momentum:\n\n   zigzag ╱╲╱╲\n\n   momentum: smooth along valley ↓\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "Momentum smooths oscillations",
              "Nesterov often faster",
              "β too high overshoots",
              "Adam default in DL",
              "Physics intuition helps tuning"
            ],
            example: "import numpy as np\ntheta=np.array([5.,5.]); v=np.zeros(2); beta=0.9; eta=0.01\nfor _ in range(100):\n    g=2*theta\n    v=beta*v+g\n    theta-=eta*v\nprint(np.round(theta,3))",
            output: "→ near 0"
          },
          {
            id: "gd-adaptive",
            title: "Adaptive Methods",
            content: "**AdaGrad** accumulates squared grads—small steps for frequent features. **RMSprop** exponential moving average fixes AdaGrad decay. **Adam** m_t,v_t moments; bias correction; default lr 1e-3. **AdamW** decoupled weight decay. Per-parameter η adapts to geometry. Not always better than SGD+momentum on some vision tasks. Warmup stabilizes early Adam training in transformers. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "AdaGrad: η/√(∑g²)",
              "Adam: m,v EMA of g,g²",
              "Bias corr: m/(1−β^t)",
              "AdamW: weight decay separate",
              "Warmup for transformers"
            ],
            diagram: "   per-param learning rate:\n\n   large |g| history → small step\n   small |g| history → larger step\n\n   Adam automates scaling\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Adaptive per parameter",
              "Adam popular default",
              "AdamW fixes weight decay",
              "SGD sometimes generalizes better",
              "Warmup prevents early instability"
            ],
            example: "import numpy as np\n# simplified Adam one step\ng=np.array([1.,0.1]); m=g; v=g**2\nm_hat=m; v_hat=v\nprint(m_hat/(np.sqrt(v_hat)+1e-8))",
            output: "adaptive step"
          },
          {
            id: "gd-sgd",
            title: "SGD & Mini-batch",
            content: "Full batch GD expensive; **SGD** one sample noisy gradient cheap. Mini-batch balances variance and compute. Unbiased E[∇L_batch]=∇L if uniform sample. Variance O(1/b) decreases with batch b. **Learning rate schedule** decay η_t. Large batch needs larger η linear scaling rule heuristic. Generalization: small batch noise may help escape sharp minima. Distributed SGD averages gradients across workers.",
            formulas: [
              "∇L_batch unbiased if random sample",
              "Var ∝ 1/b batch size",
              "Linear scaling: η ∝ b heuristic",
              "Schedule: η_t = η₀/√t",
              "Distributed: average worker grads"
            ],
            diagram: "   batch size tradeoff:\n\n   b=1   noisy fast iter\n   b=n   smooth expensive\n\n   sweet spot GPU memory\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Mini-batch default in DL",
              "Larger batch more stable grad",
              "Linear scaling rule heuristic",
              "Decay η for convergence",
              "Distributed all-reduce grads"
            ],
            example: "import numpy as np\nbatch=np.array([1.,2.,3.])\ngrads=batch**2\nprint(\"batch grad mean:\", grads.mean(), \"full would use all data\")",
            output: "batch estimate"
          }
        ],
        exercises: [
          {
            id: "ex-gd-1",
            question: "10 steps GD on f(x)=x², x=4, η=0.1.",
            solution: "import numpy as np\nx=4.\nfor _ in range(10): x-=0.1*2*x\nprint(x)",
            difficulty: "easy"
          },
          {
            id: "ex-gd-2",
            question: "Compare batch 1 vs batch 100 gradient variance on random linear loss.",
            solution: "import numpy as np\nw=np.array([1.,2.]); X=np.random.randn(1000,2); y=X@w\nfor b in [1,100]:\n  idx=np.random.choice(1000,b)\n  g=2*X[idx].T@(X[idx]@w-y[idx])/b\n  print(\"b\",b,\"g norm\", np.linalg.norm(g))",
            difficulty: "medium"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-lagrange",
        title: "Lagrange Multipliers",
        description: "Equality constraints, KKT conditions, and constrained optimization.",
        level: "advanced",
        track: "math",
        sections: [
          {
            id: "lag-eq",
            title: "Equality Constraints",
            content: "Minimize f(x) s.t. g(x)=0. **Lagrange function** L(x,λ)=f(x)+λg(x). Optimality: ∇_x L=0 and g(x)=0. λ is shadow price—sensitivity of optimal value to constraint. Geometric: ∇f parallel ∇g at optimum on constraint curve. Two variables one constraint: solve 3 equations. **Projected gradient** alternative iterative method. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "L(x,λ) = f(x) + λ g(x)",
              "∇f(x*) + λ∇g(x*) = 0",
              "g(x*) = 0",
              "λ = shadow price",
              "∇f ∥ ∇g on constraint"
            ],
            diagram: "   contour f touches constraint g=0:\n\n      f=3 ──╮\n      f=2 ──┼── tangent on g=0\n      f=1    constraint curve\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "Lagrange multipliers for equality",
              "Parallel gradients at optimum",
              "λ measures constraint cost",
              "Three eqs two vars + λ",
              "Projection for iterative solve"
            ],
            example: "import numpy as np\n# min x²+y² s.t x+y=1 → (0.5,0.5)\nprint(0.5, 0.5)",
            output: "optimum"
          },
          {
            id: "lag-ineq",
            title: "KKT Conditions",
            content: "Inequality g(x)≤0: KKT adds **complementary slackness** λ≥0, λg(x)=0. If constraint inactive g<0 then λ=0. **Karush-Kuhn-Tucker** necessary; sufficient for convex. General form: min f s.t g_i≤0, h_j=0. Stationarity ∇f+∑λ_i∇g_i+∑ν_j∇h_j=0. Dual problem provides lower bounds. SVM derivation uses KKT on margin constraints. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "L = f + ∑λ_i g_i + ∑ν_j h_j",
              "λ_i ≥ 0",
              "λ_i g_i(x) = 0 (complementary slackness)",
              "Stationarity: ∇L = 0",
              "Convex: KKT sufficient"
            ],
            diagram: "   active constraint g=0 at boundary\n\n   inactive interior: λ=0\n\n   boundary optimum: λ>0\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "Inequalities add λ≥0",
              "Complementary slackness key",
              "SVM from KKT on margins",
              "Dual for bounds",
              "Convex KKT sufficient"
            ],
            example: "import numpy as np\nprint(\"SVM support vectors have α>0 from KKT\")",
            output: "KKT concept"
          },
          {
            id: "lag-dual",
            title: "Duality",
            content: "**Dual function** q(λ)=inf_x L(x,λ). Dual problem max q(λ) s.t λ≥0. Weak duality: dual≤primal. Strong duality convex: equal optimal values. **Lagrange dual** of SVM leads to kernel form. Dual often easier or reveals structure. Slater condition sufficient strong duality convex with strict feasibility. Duality connects to game between primal and dual variables. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "Dual: max_λ inf_x L(x,λ)",
              "Weak: d* ≤ p*",
              "Strong convex: d* = p*",
              "SVM dual: α kernel form",
              "Slater: strict feasibility → strong"
            ],
            diagram: "   primal ↔ dual\n\n   hard in x     maybe easy in λ\n   easy in x     hard in λ\n\n   pick easier side\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)",
            keyPoints: [
              "Dual provides lower bound",
              "Strong duality nice convexity",
              "SVM kernel trick from dual",
              "Slater condition common",
              "Game-theoretic view"
            ],
            example: "import numpy as np\nprint(\"dual SVM: max sum α - ½αᵀQα\")",
            output: "dual form"
          },
          {
            id: "lag-ml",
            title: "Constraints in ML",
            content: "**Fairness constraints** demographic parity bounds. **Adversarial** training min-max. **Trust region** TRPO KL constraint. **Projection** onto simplex for probability outputs. **Weight clipping** constraint. Penalty method: add ρg(x)² instead of hard constraint. Augmented Lagrangian combines both. Constrained DL growing area for safe deployment. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "Penalty: f + ρ||g(x)||²",
              "Projection: simplex, ball",
              "TRPO: KL trust region",
              "Fairness: P(ŷ|A=a)=P(ŷ|A=b)",
              "Adversarial: min_θ max_φ loss"
            ],
            diagram: "   fair ML constraint:\n\n   optimize accuracy\n   s.t. TPR equal across groups\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │\n   │  · · ·",
            keyPoints: [
              "Penalties soften constraints",
              "Projection maintains feasibility",
              "TRPO uses KL ball",
              "Fairness as linear constraints",
              "Min-max for robust/adversarial"
            ],
            example: "import numpy as np\nv=np.array([0.2,0.5,0.4]); v=np.maximum(v,0); v/=v.sum()\nprint(\"proj simplex:\", v)",
            output: "feasible"
          }
        ],
        exercises: [
          {
            id: "ex-lag-1",
            question: "Min x²+y² s.t x+y=1: solve x=y=0.5.",
            solution: "print(0.5, 0.5)",
            difficulty: "easy"
          },
          {
            id: "ex-lag-2",
            question: "Project [0.5,0.5,0.5] onto simplex.",
            solution: "import numpy as np\nv=np.ones(3)/3; print(v, v.sum())",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-entropy-math",
        title: "Entropy & Information",
        description: "Shannon entropy, cross-entropy, and mutual information.",
        level: "advanced",
        track: "math",
        sections: [
          {
            id: "ent-def",
            title: "Shannon Entropy",
            content: "H(X)=−∑ p(x) log p(x) (discrete) uncertainty in bits if log₂, nats if ln. Maximum log K for uniform K outcomes. H≥0 with equality iff certain. **Joint entropy** H(X,Y). **Conditional** H(X|Y)=H(X,Y)−H(Y). Independent: H(X,Y)=H(X)+H(Y). Entropy rate of stochastic process. High entropy = unpredictable. Low entropy = compressible. Decision trees split to reduce entropy (ID3). Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "H(X) = −∑ p(x) log p(x)",
              "0 ≤ H(X) ≤ log |X|",
              "Uniform → max entropy",
              "H(X,Y) = H(X|Y) + H(Y)",
              "Indep: H(X,Y) = H(X)+H(Y)"
            ],
            diagram: "   fair coin: H=1 bit\n   certain: H=0\n\n   p=0.9 biased: H low\n   ·─────────· peak at p=0.5\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "Entropy measures uncertainty",
              "Uniform maximizes entropy",
              "Conditional reduces uncertainty",
              "Independent joint adds",
              "Used in tree splits"
            ],
            example: "import numpy as np\np=np.array([0.5,0.5])\nprint(\"H bits:\", -np.sum(p*np.log2(p)))",
            output: "H=1 bit"
          },
          {
            id: "ent-ce",
            title: "Cross-Entropy & KL",
            content: "**Cross-entropy** H(p,q)=−∑p log q≥H(p) with equality if p=q. **KL divergence** D_KL(p||q)=∑p log(p/q)=H(p,q)−H(p)≥0. Not symmetric. Used as loss when p true, q model. **Mutual information** I(X;Y)=H(X)−H(X|Y)=D_KL(P_XY||P_X P_Y). InfoNCE contrastive learning maximizes MI lower bound. KL not metric but fundamental in variational inference. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "H(p,q) = −∑ p log q",
              "D_KL(p||q) = ∑ p log(p/q)",
              "D_KL ≥ 0, =0 iff p=q",
              "I(X;Y) = H(X) − H(X|Y)",
              "CE loss = H(one_hot, softmax)"
            ],
            diagram: "   p true    q model\n\n   CE = −∑ p log q\n   KL = extra bits using q vs p\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │\n   │  · · ·",
            keyPoints: [
              "CE common classification loss",
              "KL asymmetric divergence",
              "MI measures dependence",
              "VAE uses KL to prior",
              "InfoNCE for representation"
            ],
            example: "import numpy as np\np=np.array([1.,0.,0.]); q=np.array([0.7,0.2,0.1])\nce=-np.sum(p*np.log(q+1e-9))\nprint(\"CE:\", ce)",
            output: "CE loss"
          },
          {
            id: "ent-mi",
            title: "Mutual Information",
            content: "I(X;Y)≥0 zero iff independent. Symmetric unlike KL. Captures nonlinear dependence unlike correlation. Difficult to estimate high-D—MINE neural estimator. **Information bottleneck** tradeoff compress X while predict Y. Feature selection via MI with target. Data processing inequality: processing cannot increase MI. Used in contrastive self-supervised learning InfoNCE bound. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "I(X;Y) = H(X) − H(X|Y)",
              "I(X;Y) = 0 ⇔ indep",
              "I symmetric in X,Y",
              "Data processing: I(X;Z) ≤ I(X;Y) if Markov",
              "InfoNCE lower bound on MI"
            ],
            diagram: "   MI high when knowing Y\n   reduces uncertainty about X:\n\n   X ←──strong link──→ Y\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │\n   │  · · ·",
            keyPoints: [
              "MI detects nonlinear deps",
              "Hard to estimate high-D",
              "InfoNCE in SimCLR",
              "IB regularization",
              "Feature selection criterion"
            ],
            example: "import numpy as np\n# discrete MI example\njoint=np.array([[0.2,0.1],[0.1,0.6]])\npx=joint.sum(1); py=joint.sum(0)\nmi=0\nfor i in range(2):\n  for j in range(2):\n    if joint[i,j]>0: mi+=joint[i,j]*np.log(joint[i,j]/(px[i]*py[j]))\nprint(\"MI:\", mi)",
            output: "MI nats"
          },
          {
            id: "ent-ml",
            title: "Information in ML",
            content: "Classification CE minimizes H(true, pred). Label smoothing softens one-hot targets increases H. **Regularization** as limiting information in weights. **Minimum description length** principle. Decision tree information gain = reduction in H. Softmax temperature scales entropy of predictions. Calibration affects cross-entropy at deployment. Understanding bits/nats clarifies loss magnitude interpretation.",
            formulas: [
              "Minimize H(y, ŷ) for classification",
              "Label smoothing: soft targets",
              "Info gain = H(parent) − H(children)",
              "Temperature T scales softmax entropy",
              "MDL: model + data encoding"
            ],
            diagram: "   decision tree split:\n\n   H=0.9 before\n   H=0.4 after good split\n   gain = 0.5\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "CE = expected surprise",
              "Label smoothing prevents overconfidence",
              "Info gain for trees",
              "Temperature in distillation",
              "MDL balances fit and complexity"
            ],
            example: "import numpy as np\nparent=0.9; child=0.4\nprint(\"info gain:\", parent-child)",
            output: "gain 0.5"
          }
        ],
        exercises: [
          {
            id: "ex-ent-1",
            question: "Entropy of fair 4-sided die in bits.",
            solution: "import numpy as np\nprint(-np.sum([0.25]*4*np.log2([0.25]*4)))",
            difficulty: "easy"
          },
          {
            id: "ex-ent-2",
            question: "KL between [0.5,0.5] and [0.9,0.1].",
            solution: "import numpy as np\np=np.array([0.5,0.5]); q=np.array([0.9,0.1])\nprint(np.sum(p*np.log(p/q)))",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      },
      {
        id: "math-kl-mle",
        title: "KL Divergence & MLE",
        description: "Maximum likelihood estimation and its connection to minimizing KL.",
        level: "advanced",
        track: "math",
        sections: [
          {
            id: "mle-def",
            title: "Maximum Likelihood",
            content: "Given i.i.d. samples, **MLE** θ̂=argmax_θ ∏ p(x_i|θ)=argmax ∑ log p(x_i|θ). Maximizes probability of observed data. Invariance: g(θ) MLE is g(θ̂). Asymptotically unbiased efficient under regularity. **Log-likelihood** ℓ(θ) concave for many exponential family models. Negative log-likelihood as loss to minimize. Bernoulli MLE p̂=k/n. Gaussian μ̂=x̄, σ̂ sample std (biased MLE divides n not n−1). Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "θ̂_MLE = argmax ∑ log p(x_i|θ)",
              "Equiv: min −∑ log p(x_i|θ)",
              "Bernoulli: p̂ = k/n",
              "Gaussian: μ̂ = x̄",
              "Invariance: g(θ̂) for g(θ)"
            ],
            diagram: "   likelihood surface:\n\n   peak at θ̂\n        ╱╲\n       ╱  ╲\n      ╱    ╲___\n   data most probable here\n   │\n   │  · · ·\n   └──────────",
            keyPoints: [
              "MLE maximizes data probability",
              "Log converts product to sum",
              "NLL is standard loss",
              "Asymptotic efficiency",
              "Sample formulas for simple models"
            ],
            example: "import numpy as np\nx=np.array([0,1,1,1,0])\nprint(\"Bernoulli MLE p:\", x.mean())",
            output: "p=0.6"
          },
          {
            id: "kl-mle",
            title: "MLE Minimizes KL",
            content: "Minimizing E_x[−log q_θ(x)] over θ equivalent minimizing D_KL(p_data||q_θ) since H(p) constant w.r.t. θ. **Empirical risk** replaces expectation with sample mean—MLE on empirical distribution. Model q close to p in KL sense. Mode-seeking KL asymmetric: q misses low p regions penalized less than covering extra. **Reverse KL** used in some VI variants mode covering vs seeking tradeoff. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "min_θ E_p[−log q_θ] ⇔ min D_KL(p||q_θ)",
              "Empirical p = uniform on samples",
              "MLE on samples = KL minimizer",
              "D_KL(p||q) mode-seeking",
              "D_KL(q||p) mode-covering"
            ],
            diagram: "   p_data vs q_model\n\n   KL(p||q): q must cover p modes\n   heavy penalty missing mass of p\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │\n   │  · · ·",
            keyPoints: [
              "NLL ↔ KL to data distribution",
              "Empirical samples define p",
              "Asymmetric KL behavior",
              "Forward KL in standard MLE",
              "Reverse KL in some VI"
            ],
            example: "import numpy as np\n# discrete KL p empirical vs q model\np=np.array([0.5,0.3,0.2]); q=np.array([0.4,0.35,0.25])\nprint(\"KL:\", np.sum(p*np.log(p/q)))",
            output: "KL value"
          },
          {
            id: "mle-prop",
            title: "Properties of MLE",
            content: "**Consistency** θ̂→θ true as n→∞. **Asymptotic normality** √n(θ̂−θ)→N(0,I(θ)⁻¹). **Fisher information** I(θ)=E[(∂log p/∂θ)²]. Cramér-Rao lower bound on variance. MLE achieves bound asymptotically efficient. Finite sample bias possible. Regularization = MAP with prior, not pure MLE. Score function ∂log p/∂θ zero at MLE. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.",
            formulas: [
              "√n(θ̂−θ) → N(0, I(θ)⁻¹)",
              "I(θ) = E[(∂log p/∂θ)²]",
              "Cramér-Rao: Var ≥ 1/(nI(θ))",
              "Consistent under regularity",
              "Score = 0 at MLE"
            ],
            diagram: "   Fisher info I(θ):\n\n   curvature of log-likelihood\n   sharp peak → low variance θ̂\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │\n   │  · · ·",
            keyPoints: [
              "Asymptotic normality for CI",
              "Fisher info measures information",
              "Efficient among unbiased estimators",
              "Regularity conditions needed",
              "MAP adds prior bias"
            ],
            example: "import numpy as np\n# Bernoulli Fisher info p(1-p)\np=0.6; print(\"I:\", p*(1-p))",
            output: "I=0.24"
          },
          {
            id: "mle-ml",
            title: "MLE in Deep Learning",
            content: "Categorical NLL = cross-entropy MLE for softmax. Gaussian output MSE ∝ Gaussian NLL. **Likelihood-based** generative models maximize log p(x|θ) directly. **Contrastive divergence** approximates MLE for RBMs. **EM algorithm** MLE with latent variables E-step expectation M-step maximize. Diffusion models variational bound on log-likelihood. GANs not pure MLE—adversarial game. Understanding MLE clarifies why minimizing CE is principled probabilistic modeling.",
            formulas: [
              "Softmax + CE = categorical MLE",
              "MSE ∝ Gaussian NLL (fixed σ)",
              "EM for latent variable models",
              "Diffusion: variational lower bound",
              "GAN ≠ MLE (implicit)"
            ],
            diagram: "   deep generative:\n\n   VAE: ELBO on log p(x)\n   Diffusion: noise prediction ↔ bound\n   GAN: adversarial not likelihood\n   │\n   │  · · ·\n   └──────────\n   (see formulas above)\n   │",
            keyPoints: [
              "CE has MLE interpretation",
              "Generative models maximize likelihood",
              "EM classical latent MLE",
              "VAE optimizes ELBO",
              "Choose objective matching goal"
            ],
            example: "import numpy as np\ny=np.array([1,0,0]); logits=np.array([2.,0.5,0.])\np=np.exp(logits)/np.exp(logits).sum()\nnll=-np.log(p[0])\nprint(\"NLL:\", nll)",
            output: "NLL MLE loss"
          }
        ],
        exercises: [
          {
            id: "ex-mle-1",
            question: "MLE mean of Gaussian data [1,2,3,4,5].",
            solution: "import numpy as np\nprint(np.mean([1,2,3,4,5]))",
            difficulty: "easy"
          },
          {
            id: "ex-mle-2",
            question: "Compute KL(p||q) for p=[0.2,0.8], q=[0.5,0.5].",
            solution: "import numpy as np\np=np.array([0.2,0.8]); q=np.array([0.5,0.5])\nprint(np.sum(p*np.log(p/q)))",
            difficulty: "easy"
          }
        ],
        estimatedMinutes: 35
      }
    ]
  }
];
