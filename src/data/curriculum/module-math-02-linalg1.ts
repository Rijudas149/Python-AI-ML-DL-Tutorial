import type { Topic } from '../../types';

export const moduleMath02Topics: Topic[] = [
{
      id: `math-vectors`,
      title: `Vectors & Vector Spaces`,
      description: `Learn vector notation, norms, unit vectors, and linear combinations in ℝⁿ.`,
      level: `beginner`,
      track: `math`,
      sections: [
        {
          id: `vec-basics`,
          title: `Vector Definition`,
          content: `A **vector** v ∈ ℝⁿ is an ordered n-tuple (v₁, v₂, ..., vₙ). Geometrically, vectors represent magnitude and direction. **Vector addition** is component-wise: u+v = (u₁+v₁, ...). **Scalar multiplication** cv scales each component. The **zero vector** 0 is the additive identity. Vectors in data science represent feature rows, embeddings, and gradients. Column vs row vectors matter for matrix multiplication conventions. A **vector space** satisfies closure under addition and scalar multiplication with axioms from linear algebra.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Vector Definition** directly affects how confidently you can build, debug, and ship math projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Verify formulas on paper with tiny examples, then confirm with numpy before scaling up.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.

**Mathematical foundation:**

- This section includes 5 key formulas.
- Identify each symbol's meaning, units, and valid input range before trusting numerical output.
- Work through a tiny numeric example by hand, then verify in code.

**Visual guide:**

- Study the diagram alongside the explanation — do not skip it.
- Trace each arrow, box, or region back to a term in the text.
- If you cannot map a visual element to words, re-read until the connection is clear.`,
          formulas: [
            `v = (v₁, v₂, ..., vₙ) ∈ ℝⁿ`,
            `u + v = (u₁+v₁, ..., uₙ+vₙ)`,
            `cv = (cv₁, ..., cvₙ)`,
            `0 = (0, ..., 0)`,
            `Span{v₁,...,v_k} = all linear combinations`
          ],
          diagram: `2D vector v = (3, 4)
        y
        │  ╱ |v|=5
   tail at origin, head at (3,4)`,
          keyPoints: [
            `Vectors are ordered tuples`,
            `Addition is component-wise`,
            `Scalars stretch/shrink vectors`,
            `Column vectors default in ML`,
            `Span is set of all combinations`
          ],
          example: `import numpy as np
v = np.array([3., 4.])
u = np.array([1., 2.])
print("v+u:", v+u)
print("2v:", 2*v)`,
          output: `v+u: [4. 6.]
2v: [6. 8.]`,
          pseudoCode: `CONCEPT: Vector Definition

Key relationships:
  v = (v₁, v₂, ..., vₙ) ∈ ℝⁿ
  u + v = (u₁+v₁, ..., uₙ+vₙ)
  cv = (cv₁, ..., cvₙ)
  0 = (0, ..., 0)
  Span{v₁,...,v_k} = all linear combinations

Visual summary:
  2D vector v = (3, 4)
  y
  │  ╱ |v|=5
  tail at origin, head at (3,4)

Study checklist:
  1. Vectors are ordered tuples
  2. Addition is component-wise
  3. Scalars stretch/shrink vectors
  4. Column vectors default in ML
  5. Span is set of all combinations

Topic: Vectors & Vector Spaces
Track: math | Level: beginner`
        },
        {
          id: `vec-norm`,
          title: `Norms & Distance`,
          content: `**L2 norm** (Euclidean): ||v||₂ = √(∑vᵢ²). **L1 norm**: ||v||₁ = ∑|vᵢ|. **L∞ norm**: max|vᵢ|. Unit vector v̂ = v/||v||. Distance d(u,v) = ||u−v||₂. L2 norm relates to dot product: ||v||² = v·v. Regularization in ML uses L1 (Lasso) and L2 (Ridge) penalties. Cosine similarity uses normalized dot product. np.linalg.norm(v, ord=2) computes Euclidean norm efficiently for high-dimensional embeddings and batch feature normalization pipelines.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Norms & Distance** directly affects how confidently you can build, debug, and ship math projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Verify formulas on paper with tiny examples, then confirm with numpy before scaling up.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.

**Mathematical foundation:**

- This section includes 5 key formulas.
- Identify each symbol's meaning, units, and valid input range before trusting numerical output.
- Work through a tiny numeric example by hand, then verify in code.

**Visual guide:**

- Study the diagram alongside the explanation — do not skip it.
- Trace each arrow, box, or region back to a term in the text.
- If you cannot map a visual element to words, re-read until the connection is clear.`,
          formulas: [
            `||v||₂ = √(∑ vᵢ²)`,
            `||v||₁ = ∑ |vᵢ|`,
            `||v||∞ = max |vᵢ|`,
            `v̂ = v / ||v||₂`,
            `d(u,v) = ||u − v||₂`
          ],
          diagram: `||v|| = length of arrow
    /____|___
       3
   ||v|| = √(3²+4²) = 5`,
          keyPoints: [
            `L2 is standard Euclidean length`,
            `L1 encourages sparsity in ML`,
            `Unit vectors have norm 1`,
            `Distance is norm of difference`,
            `Norms measure vector size`
          ],
          example: `import numpy as np
v = np.array([3.,4.])
print("L2:", np.linalg.norm(v))
print("unit:", v/np.linalg.norm(v))`,
          output: `L2: 5.0
unit: [0.6 0.8]`,
          pseudoCode: `CONCEPT: Norms & Distance

Key relationships:
  ||v||₂ = √(∑ vᵢ²)
  ||v||₁ = ∑ |vᵢ|
  ||v||∞ = max |vᵢ|
  v̂ = v / ||v||₂
  d(u,v) = ||u − v||₂

Visual summary:
  ||v|| = length of arrow
  /____|___
  3
  ||v|| = √(3²+4²) = 5

Study checklist:
  1. L2 is standard Euclidean length
  2. L1 encourages sparsity in ML
  3. Unit vectors have norm 1
  4. Distance is norm of difference
  5. Norms measure vector size

Topic: Vectors & Vector Spaces
Track: math | Level: beginner`
        },
        {
          id: `vec-span`,
          title: `Linear Combinations & Span`,
          content: `Linear combination: c₁v₁ + c₂v₂ + ... + c_k v_k. **Span** of vectors is all possible combinations. Vectors are **linearly independent** if no vector is a combination of others. Basis: independent set spanning the space. Dimension = size of basis. In PCA, principal components form an orthonormal basis. Feature columns spanning ℝⁿ determine rank of design matrix. Redundant features create linear dependence causing multicollinearity in regression.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Linear Combinations & Span** directly affects how confidently you can build, debug, and ship math projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Verify formulas on paper with tiny examples, then confirm with numpy before scaling up.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.

**Mathematical foundation:**

- This section includes 5 key formulas.
- Identify each symbol's meaning, units, and valid input range before trusting numerical output.
- Work through a tiny numeric example by hand, then verify in code.

**Visual guide:**

- Study the diagram alongside the explanation — do not skip it.
- Trace each arrow, box, or region back to a term in the text.
- If you cannot map a visual element to words, re-read until the connection is clear.`,
          formulas: [
            `c₁v₁ + ... + c_k v_k = linear combination`,
            `Span{v₁,...,v_k} ⊆ vector space`,
            `Independent: ∑cᵢvᵢ=0 ⇒ all cᵢ=0`,
            `Basis: independent + spanning`,
            `dim(V) = |basis|`
          ],
          diagram: `v1 ────→  v2 ────→
          span plane
   Two independent vectors span ℝ²`,
          keyPoints: [
            `Span is all weighted sums`,
            `Independence = no redundancy`,
            `Basis minimal spanning set`,
            `Rank = dimension of column space`,
            `Dependent columns → singular XᵀX`
          ],
          example: `import numpy as np
v1 = np.array([1.,0.])
v2 = np.array([0.,1.])
c1,c2=2,3
print(c1*v1+c2*v2)
print("independent:", np.linalg.matrix_rank(np.column_stack([v1,v2])))`,
          output: `[2. 3.]
independent: 2`,
          pseudoCode: `CONCEPT: Linear Combinations & Span

Key relationships:
  c₁v₁ + ... + c_k v_k = linear combination
  Span{v₁,...,v_k} ⊆ vector space
  Independent: ∑cᵢvᵢ=0 ⇒ all cᵢ=0
  Basis: independent + spanning
  dim(V) = |basis|

Visual summary:
  v1 ────→  v2 ────→
  span plane
  Two independent vectors span ℝ²

Study checklist:
  1. Span is all weighted sums
  2. Independence = no redundancy
  3. Basis minimal spanning set
  4. Rank = dimension of column space
  5. Dependent columns → singular XᵀX

Topic: Vectors & Vector Spaces
Track: math | Level: beginner`
        },
        {
          id: `vec-ml`,
          title: `Vectors in Data Science`,
          content: `Each data point is a feature vector x ∈ ℝᵈ. **Embeddings** map discrete IDs to dense vectors. **Gradients** ∇L are vectors pointing uphill in loss. Batch stacking creates matrix X ∈ ℝ^{m×d}. Normalization scales feature vectors. Nearest neighbor search uses L2 distance in embedding space. Word2vec learns vector representations where similar words are close. Vectorized numpy operations apply element-wise ops without Python loops for speed.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Vectors in Data Science** directly affects how confidently you can build, debug, and ship math projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Verify formulas on paper with tiny examples, then confirm with numpy before scaling up.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.

**Mathematical foundation:**

- This section includes 5 key formulas.
- Identify each symbol's meaning, units, and valid input range before trusting numerical output.
- Work through a tiny numeric example by hand, then verify in code.

**Visual guide:**

- Study the diagram alongside the explanation — do not skip it.
- Trace each arrow, box, or region back to a term in the text.
- If you cannot map a visual element to words, re-read until the connection is clear.`,
          formulas: [
            `x ∈ ℝᵈ feature vector`,
            `X ∈ ℝ^{m×d} design matrix`,
            `∇L ∈ ℝᵈ gradient vector`,
            `cos(θ) = (u·v)/(||u|| ||v||)`,
            `Embedding: id → ℝᵈ`
          ],
          diagram: `Dataset as matrix:
   x₁ ──→ row 1 of X
   x₂ ──→ row 2 of X
   x_m ──→ row m of X
   columns = features
   rows = samples`,
          keyPoints: [
            `Rows often = samples in sklearn`,
            `Gradients same shape as params`,
            `Embeddings capture semantics`,
            `Vectorization speeds computation`,
            `Normalize features before distance`
          ],
          example: `import numpy as np
X = np.array([[1,2],[3,4],[5,6]])
print("shape:", X.shape)
print("row0:", X[0])
print("col0:", X[:,0])`,
          output: `shape: (3, 2)
row0: [1 2]
col0: [1 3 5]`,
          pseudoCode: `CONCEPT: Vectors in Data Science

Key relationships:
  x ∈ ℝᵈ feature vector
  X ∈ ℝ^{m×d} design matrix
  ∇L ∈ ℝᵈ gradient vector
  cos(θ) = (u·v)/(||u|| ||v||)
  Embedding: id → ℝᵈ

Visual summary:
  Dataset as matrix:
  x₁ ──→ row 1 of X
  x₂ ──→ row 2 of X
  x_m ──→ row m of X
  columns = features
  rows = samples

Study checklist:
  1. Rows often = samples in sklearn
  2. Gradients same shape as params
  3. Embeddings capture semantics
  4. Vectorization speeds computation
  5. Normalize features before distance

Topic: Vectors & Vector Spaces
Track: math | Level: beginner`
        },
        {
          id: `math-vectors-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Vectors & Vector Spaces** sits in the **math** track of the Data Science Master curriculum. Learn vector notation, norms, unit vectors, and linear combinations in ℝⁿ.

**Theoretical foundation:**

- Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters.
- Each branch connects directly to numpy operations and loss functions.

For **math-vectors**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the beginner level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
          example: `# Concept check for Vectors & Vector Spaces
meta = {"topic_id": "math-vectors", "track": "math", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-vectors math beginner`,
          keyPoints: [
            `Core theory of Vectors & Vector Spaces ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Vectors & Vector Spaces ties to the math track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Vectors & Vector Spaces
Track: math | Level: beginner`
        },
        {
          id: `math-vectors-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Vectors & Vector Spaces**. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **math-vectors**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for math-vectors
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-vectors", "Vectors & Vector Spaces")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-vectors Vectors`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with math ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with math ecosystem conventions

Topic: Vectors & Vector Spaces
Track: math | Level: beginner`
        },
        {
          id: `math-vectors-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Vectors & Vector Spaces** often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on **math-vectors**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:**

- The best debuggers narrow the search space in minutes by changing one variable at a time.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("math-vectors", "Vectors & Vector Spaces")
debug_step("section_count", 4)`,
          output: `[math-vectors] 'Vectors & Vector Spaces' (str)
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

Topic: Vectors & Vector Spaces
Track: math | Level: beginner`
        },
        {
          id: `math-vectors-real-world`,
          title: `Real-World Applications`,
          content: `**Vectors & Vector Spaces** shows up wherever **math** skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around **math-vectors** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Vectors & Vector Spaces
skills = ["math", "beginner", "math-vectors"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, beginner, math-vectors`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Vectors & Vector Spaces to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Vectors & Vector Spaces to adjacent topics in the same track

Topic: Vectors & Vector Spaces
Track: math | Level: beginner`
        }
      ],
      exercises: [
        {
          id: `ex-vec-1`,
          question: `Compute L2 norm of [3,4,0] with numpy.`,
          solution: `import numpy as np
print(np.linalg.norm([3,4,0]))`,
          difficulty: `easy`
        },
        {
          id: `ex-vec-2`,
          question: `Normalize vector [3,4] to unit length.`,
          solution: `import numpy as np
v=np.array([3.,4.]); print(v/np.linalg.norm(v))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 124,
      module: `module-math-02`,
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
      id: `math-dot-cross`,
      title: `Dot Product & Cross Product`,
      description: `Inner products measure similarity; cross products find orthogonal vectors in 3D.`,
      level: `beginner`,
      track: `math`,
      sections: [
        {
          id: `dot-def`,
          title: `Dot Product Definition`,
          content: `**Dot product** u·v = ∑uᵢvᵢ = uᵀv for column vectors. Geometric: u·v = ||u|| ||v|| cos θ. Orthogonal when u·v=0. Bilinear and symmetric. Projects one vector onto another: proj_v(u) = (u·v/||v||²)v. In ML, dot product scores attention queries against keys. Linear layer y=Wx+b computes dot products of rows of W with x plus bias. Positive dot product suggests aligned directions in embedding space. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Dot Product Definition** directly affects how confidently you can build, debug, and ship math projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Verify formulas on paper with tiny examples, then confirm with numpy before scaling up.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.

**Mathematical foundation:**

- This section includes 5 key formulas.
- Identify each symbol's meaning, units, and valid input range before trusting numerical output.
- Work through a tiny numeric example by hand, then verify in code.

**Visual guide:**

- Study the diagram alongside the explanation — do not skip it.
- Trace each arrow, box, or region back to a term in the text.
- If you cannot map a visual element to words, re-read until the connection is clear.`,
          formulas: [
            `u · v = ∑ uᵢ vᵢ = uᵀv`,
            `u · v = ||u|| ||v|| cos θ`,
            `u · v = 0 ⇔ orthogonal (θ=90°)`,
            `proj_v(u) = (u·v / v·v) v`,
            `Wx = dot products of W rows with x`
          ],
          diagram: `u · v = |u||v|cosθ
        v
   θ=0: cos=1, max dot
   θ=90: cos=0, dot=0`,
          keyPoints: [
            `Dot product sums pairwise products`,
            `Measures alignment via cosine`,
            `Zero dot = orthogonal`,
            `Linear layers are dot products`,
            `Attention uses scaled dot products`
          ],
          example: `import numpy as np
u = np.array([1.,2.])
v = np.array([3.,4.])
print("dot:", np.dot(u,v))
print("u@v:", u@v)`,
          output: `dot: 11.0
u@v: 11.0`,
          pseudoCode: `CONCEPT: Dot Product Definition

Key relationships:
  u · v = ∑ uᵢ vᵢ = uᵀv
  u · v = ||u|| ||v|| cos θ
  u · v = 0 ⇔ orthogonal (θ=90°)
  proj_v(u) = (u·v / v·v) v
  Wx = dot products of W rows with x

Visual summary:
  u · v = |u||v|cosθ
  v
  θ=0: cos=1, max dot
  θ=90: cos=0, dot=0

Study checklist:
  1. Dot product sums pairwise products
  2. Measures alignment via cosine
  3. Zero dot = orthogonal
  4. Linear layers are dot products
  5. Attention uses scaled dot products

Topic: Dot Product & Cross Product
Track: math | Level: beginner`
        },
        {
          id: `dot-geom`,
          title: `Geometric Interpretation`,
          content: `Angle between vectors: cos θ = (u·v)/(||u|| ||v||). **Cosine similarity** ignores magnitude, focuses on direction—common for text embeddings. Cauchy-Schwarz: |u·v| ≤ ||u|| ||v||. Triangle inequality on norms. Dot product positive when acute angle, negative when obtuse. Normalizing before dot gives cosine in [−1,1]. In recommendation systems, user and item embeddings with high cosine predict preference.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Geometric Interpretation** directly affects how confidently you can build, debug, and ship math projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Verify formulas on paper with tiny examples, then confirm with numpy before scaling up.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.

**Mathematical foundation:**

- This section includes 5 key formulas.
- Identify each symbol's meaning, units, and valid input range before trusting numerical output.
- Work through a tiny numeric example by hand, then verify in code.

**Visual guide:**

- Study the diagram alongside the explanation — do not skip it.
- Trace each arrow, box, or region back to a term in the text.
- If you cannot map a visual element to words, re-read until the connection is clear.`,
          formulas: [
            `cos θ = (u·v) / (||u|| ||v||)`,
            `|u·v| ≤ ||u|| ||v|| (Cauchy-Schwarz)`,
            `||u+v|| ≤ ||u|| + ||v||`,
            `cosine sim ∈ [−1, 1] after normalize`,
            `u·u = ||u||² ≥ 0`
          ],
          diagram: `cosine similarity scale:
   1.0  same direction  →→→
   0.0  orthogonal      →↑
  -1.0  opposite        →←
   normalize then dot`,
          keyPoints: [
            `Cosine ignores vector length`,
            `Cauchy-Schwarz bounds dot product`,
            `Sign of dot indicates angle type`,
            `Used in semantic search`,
            `Self-dot gives squared norm`
          ],
          example: `import numpy as np
u = np.array([1.,0.])
v = np.array([1.,1.])
cos = np.dot(u,v)/(np.linalg.norm(u)*np.linalg.norm(v))
print("cos θ:", np.round(cos,3))`,
          output: `cos θ: 0.707`,
          pseudoCode: `CONCEPT: Geometric Interpretation

Key relationships:
  cos θ = (u·v) / (||u|| ||v||)
  |u·v| ≤ ||u|| ||v|| (Cauchy-Schwarz)
  ||u+v|| ≤ ||u|| + ||v||
  cosine sim ∈ [−1, 1] after normalize
  u·u = ||u||² ≥ 0

Visual summary:
  cosine similarity scale:
  1.0  same direction  →→→
  0.0  orthogonal      →↑
  -1.0  opposite        →←
  normalize then dot

Study checklist:
  1. Cosine ignores vector length
  2. Cauchy-Schwarz bounds dot product
  3. Sign of dot indicates angle type
  4. Used in semantic search
  5. Self-dot gives squared norm

Topic: Dot Product & Cross Product
Track: math | Level: beginner`
        },
        {
          id: `cross-3d`,
          title: `Cross Product in 3D`,
          content: `**Cross product** u×v ∈ ℝ³ perpendicular to both u and v. ||u×v|| = ||u|| ||v|| sin θ = area of parallelogram. Right-hand rule determines direction. u×v = −v×u anti-commutative. i×j=k standard basis. Used in 3D graphics, torque, and normal vectors for surfaces. In 2D, pseudo-scalar u_x v_y − u_y v_x gives signed area. Cross product less common in standard ML but appears in geometric deep learning and physics-informed nets.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Cross Product in 3D** directly affects how confidently you can build, debug, and ship math projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Verify formulas on paper with tiny examples, then confirm with numpy before scaling up.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.

**Mathematical foundation:**

- This section includes 5 key formulas.
- Identify each symbol's meaning, units, and valid input range before trusting numerical output.
- Work through a tiny numeric example by hand, then verify in code.

**Visual guide:**

- Study the diagram alongside the explanation — do not skip it.
- Trace each arrow, box, or region back to a term in the text.
- If you cannot map a visual element to words, re-read until the connection is clear.`,
          formulas: [
            `u × v ⟂ u and ⟂ v`,
            `||u × v|| = ||u|| ||v|| sin θ`,
            `u × v = −v × u`,
            `i × j = k (right-hand rule)`,
            `Area = ||u × v||`
          ],
          diagram: `u × v points up from plane
     /____
   × = outward normal
   right-hand rule:
   curl fingers u→v, thumb = u×v`,
          keyPoints: [
            `Cross product only in 3D (or 7D exotic)`,
            `Gives perpendicular vector`,
            `Magnitude = parallelogram area`,
            `Anti-commutative`,
            `Normals for 3D rendering`
          ],
          example: `import numpy as np
u = np.array([1.,0.,0.])
v = np.array([0.,1.,0.])
print("u×v:", np.cross(u,v))`,
          output: `u×v: [0. 0. 1.]`,
          pseudoCode: `CONCEPT: Cross Product in 3D

Key relationships:
  u × v ⟂ u and ⟂ v
  ||u × v|| = ||u|| ||v|| sin θ
  u × v = −v × u
  i × j = k (right-hand rule)
  Area = ||u × v||

Visual summary:
  u × v points up from plane
  /____
  × = outward normal
  right-hand rule:
  curl fingers u→v, thumb = u×v

Study checklist:
  1. Cross product only in 3D (or 7D exotic)
  2. Gives perpendicular vector
  3. Magnitude = parallelogram area
  4. Anti-commutative
  5. Normals for 3D rendering

Topic: Dot Product & Cross Product
Track: math | Level: beginner`
        },
        {
          id: `dot-attn`,
          title: `Dot Products in Neural Networks`,
          content: `**Attention** score e_ij = q_i·k_j / √d measures query-key compatibility. Scaled dot prevents softmax saturation at large d. **Linear classification** sign(w·x + b) is perceptron. Matrix multiply C=AB: C_ij = row_i(A)·col_j(B). GPU accelerates batched dot products. Kernel SVM uses implicit dot products in feature space. Understanding dot products clarifies why weight initialization scale affects activation variance and training stability.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Dot Products in Neural Networks** directly affects how confidently you can build, debug, and ship math projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Verify formulas on paper with tiny examples, then confirm with numpy before scaling up.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.

**Mathematical foundation:**

- This section includes 5 key formulas.
- Identify each symbol's meaning, units, and valid input range before trusting numerical output.
- Work through a tiny numeric example by hand, then verify in code.

**Visual guide:**

- Study the diagram alongside the explanation — do not skip it.
- Trace each arrow, box, or region back to a term in the text.
- If you cannot map a visual element to words, re-read until the connection is clear.`,
          formulas: [
            `Attention: softmax(QKᵀ/√d) V`,
            `score_ij = q_i · k_j / √d`,
            `C_ij = A_i · B_j (matrix multiply)`,
            `Perceptron: sign(w·x + b)`,
            `K(x,x') = φ(x)·φ(x') kernel trick`
          ],
          diagram: `Q  Kᵀ  →  scores  → softmax  →  weights
   q1 · k1  q1 · k2  q1 · k3
   q2 · k1  q2 · k2  q2 · k3
   each cell = dot product`,
          keyPoints: [
            `Matrix multiply = batch dots`,
            `Scale by √d in transformers`,
            `Softmax turns scores to weights`,
            `Linear layers are dot + bias`,
            `Kernel = dot in feature space`
          ],
          example: `import numpy as np
Q = np.array([[1.,0.],[0.,1.]])
K = np.array([[1.,1.],[0.,1.]])
scores = Q @ K.T
print(scores)`,
          output: `scores: [[1. 1.] [0. 1.]]`,
          pseudoCode: `CONCEPT: Dot Products in Neural Networks

Key relationships:
  Attention: softmax(QKᵀ/√d) V
  score_ij = q_i · k_j / √d
  C_ij = A_i · B_j (matrix multiply)
  Perceptron: sign(w·x + b)
  K(x,x') = φ(x)·φ(x') kernel trick

Visual summary:
  Q  Kᵀ  →  scores  → softmax  →  weights
  q1 · k1  q1 · k2  q1 · k3
  q2 · k1  q2 · k2  q2 · k3
  each cell = dot product

Study checklist:
  1. Matrix multiply = batch dots
  2. Scale by √d in transformers
  3. Softmax turns scores to weights
  4. Linear layers are dot + bias
  5. Kernel = dot in feature space

Topic: Dot Product & Cross Product
Track: math | Level: beginner`
        },
        {
          id: `math-dot-cross-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Dot Product & Cross Product** sits in the **math** track of the Data Science Master curriculum. Inner products measure similarity; cross products find orthogonal vectors in 3D.

**Theoretical foundation:**

- Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters.
- Each branch connects directly to numpy operations and loss functions.

For **math-dot-cross**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the beginner level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
          example: `# Concept check for Dot Product & Cross Product
meta = {"topic_id": "math-dot-cross", "track": "math", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-dot-cross math beginner`,
          keyPoints: [
            `Core theory of Dot Product & Cross Product ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Dot Product & Cross Product ties to the math track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Dot Product & Cross Product
Track: math | Level: beginner`
        },
        {
          id: `math-dot-cross-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Dot Product & Cross Product**. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **math-dot-cross**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for math-dot-cross
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-dot-cross", "Dot Product & Cross Product")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-dot-cross Dot`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with math ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with math ecosystem conventions

Topic: Dot Product & Cross Product
Track: math | Level: beginner`
        },
        {
          id: `math-dot-cross-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Dot Product & Cross Product** often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on **math-dot-cross**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:**

- The best debuggers narrow the search space in minutes by changing one variable at a time.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("math-dot-cross", "Dot Product & Cross Product")
debug_step("section_count", 4)`,
          output: `[math-dot-cross] 'Dot Product & Cross Product' (str)
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

Topic: Dot Product & Cross Product
Track: math | Level: beginner`
        },
        {
          id: `math-dot-cross-real-world`,
          title: `Real-World Applications`,
          content: `**Dot Product & Cross Product** shows up wherever **math** skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around **math-dot-cross** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Dot Product & Cross Product
skills = ["math", "beginner", "math-dot-cross"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, beginner, math-dot-cross`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Dot Product & Cross Product to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Dot Product & Cross Product to adjacent topics in the same track

Topic: Dot Product & Cross Product
Track: math | Level: beginner`
        }
      ],
      exercises: [
        {
          id: `ex-dot-1`,
          question: `Compute dot product of [1,2,3] and [4,5,6].`,
          solution: `import numpy as np
print(np.dot([1,2,3],[4,5,6]))`,
          difficulty: `easy`
        },
        {
          id: `ex-dot-2`,
          question: `Compute cosine similarity of [1,0] and [1,1].`,
          solution: `import numpy as np
u=np.array([1.,0.]); v=np.array([1.,1.])
print(np.dot(u,v)/(np.linalg.norm(u)*np.linalg.norm(v)))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 124,
      module: `module-math-02`,
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
      id: `math-matrices`,
      title: `Matrices & Matrix Notation`,
      description: `Understand matrix dimensions, special matrices, and matrix-vector multiplication.`,
      level: `intermediate`,
      track: `math`,
      sections: [
        {
          id: `mat-basics`,
          title: `Matrix Structure`,
          content: `An m×n **matrix** A has m rows and n columns; entry A_ij at row i, column j. Square matrices m=n. **Identity** I_n has 1s on diagonal. **Zero matrix** all zeros. **Diagonal** matrix has off-diagonal zeros. **Symmetric** A=Aᵀ. Matrices represent linear transforms, datasets (samples×features), and weight layers. Transpose Aᵀ flips rows/columns. Storage order (row-major in C/numpy) affects cache performance in large matrix ops.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Matrix Structure** directly affects how confidently you can build, debug, and ship math projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Verify formulas on paper with tiny examples, then confirm with numpy before scaling up.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.

**Mathematical foundation:**

- This section includes 5 key formulas.
- Identify each symbol's meaning, units, and valid input range before trusting numerical output.
- Work through a tiny numeric example by hand, then verify in code.

**Visual guide:**

- Study the diagram alongside the explanation — do not skip it.
- Trace each arrow, box, or region back to a term in the text.
- If you cannot map a visual element to words, re-read until the connection is clear.`,
          formulas: [
            `A ∈ ℝ^{m×n}; entry A_ij`,
            `(Aᵀ)_ij = A_ji`,
            `I_n: n×n identity`,
            `Symmetric: A = Aᵀ`,
            `Diagonal: A_ij=0 for i≠j`
          ],
          diagram: `2×3 matrix A:
       col1 col2 col3
   r1 [ a11  a12  a13 ]
   r2 [ a21  a22  a23 ]
   m=2 rows, n=3 columns`,
          keyPoints: [
            `First index = row, second = column`,
            `Transpose swaps indices`,
            `Identity leaves vectors unchanged`,
            `Symmetric matrices have real eigenvalues`,
            `Shape must align for multiply`
          ],
          example: `import numpy as np
A = np.array([[1,2,3],[4,5,6]])
print("shape:", A.shape)
print("A[1,2]:", A[1,2])
print("A.T:\\n", A.T)`,
          output: `shape: (2, 3)
A[1,2]: 6`,
          pseudoCode: `CONCEPT: Matrix Structure

Key relationships:
  A ∈ ℝ^{m×n}; entry A_ij
  (Aᵀ)_ij = A_ji
  I_n: n×n identity
  Symmetric: A = Aᵀ
  Diagonal: A_ij=0 for i≠j

Visual summary:
  2×3 matrix A:
  col1 col2 col3
  r1 [ a11  a12  a13 ]
  r2 [ a21  a22  a23 ]
  m=2 rows, n=3 columns

Study checklist:
  1. First index = row, second = column
  2. Transpose swaps indices
  3. Identity leaves vectors unchanged
  4. Symmetric matrices have real eigenvalues
  5. Shape must align for multiply

Topic: Matrices & Matrix Notation
Track: math | Level: intermediate`
        },
        {
          id: `mat-mv`,
          title: `Matrix-Vector Multiplication`,
          content: `**Matrix-Vector Multiplication** — what you need to know:

- **Core idea:** Understand matrix dimensions, special matrices, and matrix-vector multiplication.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Ax for A∈ℝ^{m×n}, x∈ℝ^n produces y∈ℝ^m where y_i = ∑_j A_ij x_j = row_i(A)·x. Each output component is dot product of row with x. Geometrically, A transforms x to new space. **Linear layer** in neural nets: y=Wx+b. Composition of transforms: (BA)x = B(Ax). Column picture: Ax = x₁(col₁) + x₂(col₂) + ... linear combination of columns. Row picture: dot products of rows with x. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Matrix-Vector Multiplication** directly affects how confidently you can build, debug, and ship math projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Verify formulas on paper with tiny examples, then confirm with numpy before scaling up.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.

**Mathematical foundation:**

- This section includes 5 key formulas.
- Identify each symbol's meaning, units, and valid input range before trusting numerical output.
- Work through a tiny numeric example by hand, then verify in code.

**Visual guide:**

- Study the diagram alongside the explanation — do not skip it.
- Trace each arrow, box, or region back to a term in the text.
- If you cannot map a visual element to words, re-read until the connection is clear.`,
          formulas: [
            `y = Ax, y_i = ∑_j A_ij x_j`,
            `Ax = x₁a₁ + x₂a₂ + ... (column view)`,
            `y_i = row_i(A) · x`,
            `(BA)x = B(Ax)`,
            `W ∈ ℝ^{out×in} for y=Wx`
          ],
          diagram: `A (m×n)  ×  x (n×1)  =  y (m×1)
   [ row1 ]     [x1]      [r1·x]
   [ row2 ]  ·  [x2]  =   [r2·x]
   [ ...  ]     [..]      [ ... ]`,
          keyPoints: [
            `Columns of A span output space`,
            `Rows of A define hyperplanes`,
            `Shape: (m×n)(n×1)=(m×1)`,
            `Neural layer = matrix-vector + bias`,
            `Composition = matrix multiply`
          ],
          example: `import numpy as np
A = np.array([[1,2],[3,4],[5,6]])
x = np.array([1.,2.])
print("Ax:", A @ x)`,
          output: `Ax: [ 5. 11. 17.]`,
          pseudoCode: `CONCEPT: Matrix-Vector Multiplication

Key relationships:
  y = Ax, y_i = ∑_j A_ij x_j
  Ax = x₁a₁ + x₂a₂ + ... (column view)
  y_i = row_i(A) · x
  (BA)x = B(Ax)
  W ∈ ℝ^{out×in} for y=Wx

Visual summary:
  A (m×n)  ×  x (n×1)  =  y (m×1)
  [ row1 ]     [x1]      [r1·x]
  [ row2 ]  ·  [x2]  =   [r2·x]
  [ ...  ]     [..]      [ ... ]

Study checklist:
  1. Columns of A span output space
  2. Rows of A define hyperplanes
  3. Shape: (m×n)(n×1)=(m×1)
  4. Neural layer = matrix-vector + bias
  5. Composition = matrix multiply

Topic: Matrices & Matrix Notation
Track: math | Level: intermediate`
        },
        {
          id: `mat-special`,
          title: `Special Matrices`,
          content: `**Orthogonal** Q: QᵀQ=I; preserves lengths and angles. **Positive definite** symmetric A with xᵀAx>0 for x≠0—Hessians at minima. **Toeplitz** constant diagonals in time series. **Sparse** mostly zeros—efficient storage. **Stochastic** rows sum to 1—Markov chains. **Projection** P²=P. Understanding special structure enables faster algorithms (e.g., eigendecomposition for symmetric matrices always exists with real eigenvalues).

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Special Matrices** directly affects how confidently you can build, debug, and ship math projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Verify formulas on paper with tiny examples, then confirm with numpy before scaling up.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.

**Mathematical foundation:**

- This section includes 5 key formulas.
- Identify each symbol's meaning, units, and valid input range before trusting numerical output.
- Work through a tiny numeric example by hand, then verify in code.

**Visual guide:**

- Study the diagram alongside the explanation — do not skip it.
- Trace each arrow, box, or region back to a term in the text.
- If you cannot map a visual element to words, re-read until the connection is clear.`,
          formulas: [
            `Orthogonal: QᵀQ = I`,
            `Symmetric: A = Aᵀ`,
            `PSD: xᵀAx ≥ 0 ∀x`,
            `Projection: P² = P`,
            `Stochastic: rows sum to 1`
          ],
          diagram: `Orthogonal rotation Q:
   x ──Q──→ Qx
   ||x|| = ||Qx||
   length preserved
   angles preserved`,
          keyPoints: [
            `Orthogonal = rotation/reflection`,
            `Symmetric → real eigenvalues`,
            `PSD matrices define valid covariances`,
            `Sparse matrices save memory`,
            `Structure enables fast solvers`
          ],
          example: `import numpy as np
Q = np.array([[0,-1],[1,0]])  # 90° rot
x = np.array([1.,0.])
print("Qx:", Q@x, "norm:", np.linalg.norm(Q@x))`,
          output: `Qx: [0. 1.] norm: 1.0`,
          pseudoCode: `CONCEPT: Special Matrices

Key relationships:
  Orthogonal: QᵀQ = I
  Symmetric: A = Aᵀ
  PSD: xᵀAx ≥ 0 ∀x
  Projection: P² = P
  Stochastic: rows sum to 1

Visual summary:
  Orthogonal rotation Q:
  x ──Q──→ Qx
  ||x|| = ||Qx||
  length preserved
  angles preserved

Study checklist:
  1. Orthogonal = rotation/reflection
  2. Symmetric → real eigenvalues
  3. PSD matrices define valid covariances
  4. Sparse matrices save memory
  5. Structure enables fast solvers

Topic: Matrices & Matrix Notation
Track: math | Level: intermediate`
        },
        {
          id: `mat-data`,
          title: `Matrices as Data Tables`,
          content: `**Matrices as Data Tables** — what you need to know:

- **Core idea:** Understand matrix dimensions, special matrices, and matrix-vector multiplication.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Design matrix X ∈ ℝ^{n×p}: n samples, p features. Target vector y ∈ ℝ^n. Covariance Σ = (1/n)XᵀX (centered). Correlation from normalized covariance. Batch tensor (batch, features) in deep learning. Missing values require imputation before matrix ops. One-hot encoding creates sparse binary columns. Feature scaling applies column-wise transforms. Matrix view connects tabular data to linear algebra algorithms throughout sklearn and pytorch.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Matrices as Data Tables** directly affects how confidently you can build, debug, and ship math projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Verify formulas on paper with tiny examples, then confirm with numpy before scaling up.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.

**Mathematical foundation:**

- This section includes 5 key formulas.
- Identify each symbol's meaning, units, and valid input range before trusting numerical output.
- Work through a tiny numeric example by hand, then verify in code.

**Visual guide:**

- Study the diagram alongside the explanation — do not skip it.
- Trace each arrow, box, or region back to a term in the text.
- If you cannot map a visual element to words, re-read until the connection is clear.`,
          formulas: [
            `X ∈ ℝ^{n×p} design matrix`,
            `Σ = (1/n) X̃ᵀ X̃ (centered covariance)`,
            `y = Xβ + ε linear model`,
            `One-hot: identity columns per category`,
            `Batch: stack rows for mini-batch GD`
          ],
          diagram: `X = features table
   sample │ f1  f2  f3
     1    │ 2.1 0.5 1
     2    │ 1.8 0.3 0
     3    │ 3.0 0.9 1
   each row = one observation`,
          keyPoints: [
            `Rows = samples in sklearn convention`,
            `Columns = features/variables`,
            `Center columns before covariance`,
            `Matrix form enables vectorized fit`,
            `Batches are submatrices of data`
          ],
          example: `import numpy as np
X = np.array([[2.1,0.5],[1.8,0.3],[3.0,0.9]])
print("mean cols:", X.mean(axis=0))
print("cov:\\n", np.cov(X.T))`,
          output: `mean cols: [2.3  0.567]
cov: ...`,
          pseudoCode: `CONCEPT: Matrices as Data Tables

Key relationships:
  X ∈ ℝ^{n×p} design matrix
  Σ = (1/n) X̃ᵀ X̃ (centered covariance)
  y = Xβ + ε linear model
  One-hot: identity columns per category
  Batch: stack rows for mini-batch GD

Visual summary:
  X = features table
  sample │ f1  f2  f3
  1    │ 2.1 0.5 1
  2    │ 1.8 0.3 0
  3    │ 3.0 0.9 1
  each row = one observation

Study checklist:
  1. Rows = samples in sklearn convention
  2. Columns = features/variables
  3. Center columns before covariance
  4. Matrix form enables vectorized fit
  5. Batches are submatrices of data

Topic: Matrices & Matrix Notation
Track: math | Level: intermediate`
        },
        {
          id: `math-matrices-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Matrices & Matrix Notation** sits in the **math** track of the Data Science Master curriculum. Understand matrix dimensions, special matrices, and matrix-vector multiplication.

**Theoretical foundation:**

- Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters.
- Each branch connects directly to numpy operations and loss functions.

For **math-matrices**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
          example: `# Concept check for Matrices & Matrix Notation
meta = {"topic_id": "math-matrices", "track": "math", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-matrices math intermediate`,
          keyPoints: [
            `Core theory of Matrices & Matrix Notation ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Matrices & Matrix Notation ties to the math track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Matrices & Matrix Notation
Track: math | Level: intermediate`
        },
        {
          id: `math-matrices-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Matrices & Matrix Notation**. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **math-matrices**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for math-matrices
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-matrices", "Matrices & Matrix Notation")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-matrices Matrices`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with math ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with math ecosystem conventions

Topic: Matrices & Matrix Notation
Track: math | Level: intermediate`
        },
        {
          id: `math-matrices-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Matrices & Matrix Notation** often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on **math-matrices**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:**

- The best debuggers narrow the search space in minutes by changing one variable at a time.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("math-matrices", "Matrices & Matrix Notation")
debug_step("section_count", 4)`,
          output: `[math-matrices] 'Matrices & Matrix Notation' (str)
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

Topic: Matrices & Matrix Notation
Track: math | Level: intermediate`
        },
        {
          id: `math-matrices-real-world`,
          title: `Real-World Applications`,
          content: `**Matrices & Matrix Notation** shows up wherever **math** skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around **math-matrices** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Matrices & Matrix Notation
skills = ["math", "intermediate", "math-matrices"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, intermediate, math-matrices`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Matrices & Matrix Notation to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Matrices & Matrix Notation to adjacent topics in the same track

Topic: Matrices & Matrix Notation
Track: math | Level: intermediate`
        }
      ],
      exercises: [
        {
          id: `ex-mat-1`,
          question: `Multiply [[1,2],[3,4]] by [1,1].`,
          solution: `import numpy as np
A=np.array([[1,2],[3,4]]); print(A @ [1,1])`,
          difficulty: `easy`
        },
        {
          id: `ex-mat-2`,
          question: `Create 3×3 identity and verify I@x=x.`,
          solution: `import numpy as np
I=np.eye(3); x=np.array([1,2,3.]); print(I@x)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 124,
      module: `module-math-02`,
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
      id: `math-matrix-ops`,
      title: `Matrix Operations`,
      description: `Matrix multiplication, transpose rules, and properties of matrix arithmetic.`,
      level: `intermediate`,
      track: `math`,
      sections: [
        {
          id: `mm-def`,
          title: `Matrix Multiplication`,
          content: `For A∈ℝ^{m×k}, B∈ℝ^{k×n}, product C=AB ∈ ℝ^{m×n} with C_ij = ∑_l A_il B_lj. **Inner dimensions must match** (k). NOT commutative: AB≠BA generally. Associative: (AB)C=A(BC). Distributive over addition. Each C_ij is dot product of row i of A with column j of B. Chain of layers composes weight matrices. Strassen and blocked multiplication optimize large products on hardware. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Matrix Multiplication** directly affects how confidently you can build, debug, and ship math projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Verify formulas on paper with tiny examples, then confirm with numpy before scaling up.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.

**Mathematical foundation:**

- This section includes 5 key formulas.
- Identify each symbol's meaning, units, and valid input range before trusting numerical output.
- Work through a tiny numeric example by hand, then verify in code.

**Visual guide:**

- Study the diagram alongside the explanation — do not skip it.
- Trace each arrow, box, or region back to a term in the text.
- If you cannot map a visual element to words, re-read until the connection is clear.`,
          formulas: [
            `C = AB, C_ij = ∑_l A_il B_lj`,
            `A: m×k, B: k×n → C: m×n`,
            `AB ≠ BA in general`,
            `(AB)C = A(BC)`,
            `(AB)ᵀ = BᵀAᵀ`
          ],
          diagram: `(m×k) · (k×n) = (m×n)
   A         B         C
   [ * * ] · [ * * ] = [ * * ]
   [ * * ]   [ * * ]   [ * * ]
             [ * * ]
   k must match inner dim`,
          keyPoints: [
            `Inner dimension must align`,
            `Order matters in multiplication`,
            `Transpose reverses product order`,
            `Each entry = row·column dot`,
            `Composition of linear maps`
          ],
          example: `import numpy as np
A = np.array([[1,2],[3,4]])
B = np.array([[5,6],[7,8]])
print("AB:\\n", A@B)
print("BA:\\n", B@A)`,
          output: `AB ≠ BA shown`,
          pseudoCode: `CONCEPT: Matrix Multiplication

Key relationships:
  C = AB, C_ij = ∑_l A_il B_lj
  A: m×k, B: k×n → C: m×n
  AB ≠ BA in general
  (AB)C = A(BC)
  (AB)ᵀ = BᵀAᵀ

Visual summary:
  (m×k) · (k×n) = (m×n)
  A         B         C
  [ * * ] · [ * * ] = [ * * ]
  [ * * ]   [ * * ]   [ * * ]
  [ * * ]
  k must match inner dim

Study checklist:
  1. Inner dimension must align
  2. Order matters in multiplication
  3. Transpose reverses product order
  4. Each entry = row·column dot
  5. Composition of linear maps

Topic: Matrix Operations
Track: math | Level: intermediate`
        },
        {
          id: `mm-prop`,
          title: `Transpose & Trace`,
          content: `**Transpose** (AB)ᵀ = BᵀAᵀ. Symmetric A iff A=Aᵀ. **Trace** tr(A)=∑A_ii, sum of diagonal. tr(AB)=tr(BA). Frobenius norm ||A||_F = √(∑A_ij²) = √(tr(AᵀA)). Transpose swaps row-column roles in gradients: ∂L/∂A = (∂L/∂B) Cᵀ when B=AC. In backprop, transpose appears when passing gradients backward through layers. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Transpose & Trace** directly affects how confidently you can build, debug, and ship math projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Verify formulas on paper with tiny examples, then confirm with numpy before scaling up.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.

**Mathematical foundation:**

- This section includes 5 key formulas.
- Identify each symbol's meaning, units, and valid input range before trusting numerical output.
- Work through a tiny numeric example by hand, then verify in code.

**Visual guide:**

- Study the diagram alongside the explanation — do not skip it.
- Trace each arrow, box, or region back to a term in the text.
- If you cannot map a visual element to words, re-read until the connection is clear.`,
          formulas: [
            `(AB)ᵀ = BᵀAᵀ`,
            `tr(A) = ∑ A_ii`,
            `tr(AB) = tr(BA)`,
            `||A||_F = √(tr(AᵀA))`,
            `(Aᵀ)ᵀ = A`
          ],
          diagram: `Transpose flip:
   A = [1 2]     Aᵀ = [1 3]
       [3 4]          [2 4]
   rows become columns`,
          keyPoints: [
            `Transpose reverses multiply order`,
            `Trace invariant under cyclic permute`,
            `Frobenius norm for matrix size`,
            `Symmetric matrices ↔ quadratic forms`,
            `Gradients use transpose heavily`
          ],
          example: `import numpy as np
A = np.array([[1,2],[3,4]])
print("tr(A):", np.trace(A))
print("Fro norm:", np.linalg.norm(A, "fro"))`,
          output: `tr(A): 5
Fro norm: 5.477...`,
          pseudoCode: `CONCEPT: Transpose & Trace

Key relationships:
  (AB)ᵀ = BᵀAᵀ
  tr(A) = ∑ A_ii
  tr(AB) = tr(BA)
  ||A||_F = √(tr(AᵀA))
  (Aᵀ)ᵀ = A

Visual summary:
  Transpose flip:
  A = [1 2]     Aᵀ = [1 3]
  [3 4]          [2 4]
  rows become columns

Study checklist:
  1. Transpose reverses multiply order
  2. Trace invariant under cyclic permute
  3. Frobenius norm for matrix size
  4. Symmetric matrices ↔ quadratic forms
  5. Gradients use transpose heavily

Topic: Matrix Operations
Track: math | Level: intermediate`
        },
        {
          id: `mm-inv-det`,
          title: `Preview: Inverse & Determinant`,
          content: `Square matrix A **invertible** if ∃A⁻¹ with AA⁻¹=I. det(A)≠0 iff invertible. det(AB)=det(A)det(B). Inverse of 2×2: (1/det)[[d,−b],[−c,a]]. Singular matrices collapse dimension—non-invertible transform. Near-singular causes numerical instability. Condition number κ(A)=||A|| ||A⁻¹|| measures sensitivity. We'll deepen inverses and determinants in the next module; here we preview their role in solving Ax=b.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Preview: Inverse & Determinant** directly affects how confidently you can build, debug, and ship math projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Verify formulas on paper with tiny examples, then confirm with numpy before scaling up.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.

**Mathematical foundation:**

- This section includes 5 key formulas.
- Identify each symbol's meaning, units, and valid input range before trusting numerical output.
- Work through a tiny numeric example by hand, then verify in code.

**Visual guide:**

- Study the diagram alongside the explanation — do not skip it.
- Trace each arrow, box, or region back to a term in the text.
- If you cannot map a visual element to words, re-read until the connection is clear.`,
          formulas: [
            `AA⁻¹ = A⁻¹A = I`,
            `det(A) ≠ 0 ⇔ A invertible`,
            `det(AB) = det(A)det(B)`,
            `2×2: A⁻¹ = (1/det)[[d,-b],[-c,a]]`,
            `κ(A) = ||A|| · ||A⁻¹||`
          ],
          diagram: `Invertible: full rank
   x ──A──→ y
   x ←─A⁻¹─ y
   Singular: squashes dim
   [ 1  2 ] → line, not plane
   [ 2  4 ]   (det=0)`,
          keyPoints: [
            `Inverse undoes linear map`,
            `Zero determinant = singular`,
            `Ill-conditioned = hard to invert`,
            `Rank deficient → no unique inverse`,
            `Preview for linear systems topic`
          ],
          example: `import numpy as np
A = np.array([[4.,7.],[2.,6.]])
print("det:", np.linalg.det(A))
print("inv:\\n", np.linalg.inv(A))`,
          output: `det: 10.0
inv: ...`,
          pseudoCode: `CONCEPT: Preview: Inverse & Determinant

Key relationships:
  AA⁻¹ = A⁻¹A = I
  det(A) ≠ 0 ⇔ A invertible
  det(AB) = det(A)det(B)
  2×2: A⁻¹ = (1/det)[[d,-b],[-c,a]]
  κ(A) = ||A|| · ||A⁻¹||

Visual summary:
  Invertible: full rank
  x ──A──→ y
  x ←─A⁻¹─ y
  Singular: squashes dim
  [ 1  2 ] → line, not plane
  [ 2  4 ]   (det=0)

Study checklist:
  1. Inverse undoes linear map
  2. Zero determinant = singular
  3. Ill-conditioned = hard to invert
  4. Rank deficient → no unique inverse
  5. Preview for linear systems topic

Topic: Matrix Operations
Track: math | Level: intermediate`
        },
        {
          id: `mm-nn`,
          title: `Matrix Ops in Neural Nets`,
          content: `**Matrix Ops in Neural Nets** — what you need to know:

- **Core idea:** Matrix multiplication, transpose rules, and properties of matrix arithmetic.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Fully connected layer: h = σ(Wx+b). Batch: H = σ(XWᵀ+B). Backprop: ∂L/∂W = (∂L/∂H)ᵀ X. Weight matrices learned by gradient descent. Conv layers use structured sparse matrices (Toeplitz). Attention: softmax(QKᵀ/√d)V. Residual: y=x+F(x) helps gradient flow. Xavier/He init scales W variance by fan-in/out. Matrix dimensions must align through network—shape debugging is essential skill. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Matrix Ops in Neural Nets** directly affects how confidently you can build, debug, and ship math projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Verify formulas on paper with tiny examples, then confirm with numpy before scaling up.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.

**Mathematical foundation:**

- This section includes 5 key formulas.
- Identify each symbol's meaning, units, and valid input range before trusting numerical output.
- Work through a tiny numeric example by hand, then verify in code.

**Visual guide:**

- Study the diagram alongside the explanation — do not skip it.
- Trace each arrow, box, or region back to a term in the text.
- If you cannot map a visual element to words, re-read until the connection is clear.`,
          formulas: [
            `h = σ(Wx + b)`,
            `Batch: H = σ(XWᵀ + B)`,
            `Attention: softmax(QKᵀ/√d)V`,
            `Residual: y = x + F(x)`,
            `He init: W ~ N(0, 2/fan_in)`
          ],
          diagram: `Layer stack:
   x → W1 → σ → W2 → σ → ... → ŷ
   n0   n1      n2
   W1: n1×n0
   W2: n2×n1`,
          keyPoints: [
            `Check shapes at every layer`,
            `Batch dim adds leading axis`,
            `Transpose in batch forward pass`,
            `Init scale affects training`,
            `Residual eases deep gradients`
          ],
          example: `import numpy as np
X = np.random.randn(32, 10)  # batch 32, in 10
W = np.random.randn(5, 10)   # out 5
H = X @ W.T
print("H shape:", H.shape)`,
          output: `H shape: (32, 5)`,
          pseudoCode: `CONCEPT: Matrix Ops in Neural Nets

Key relationships:
  h = σ(Wx + b)
  Batch: H = σ(XWᵀ + B)
  Attention: softmax(QKᵀ/√d)V
  Residual: y = x + F(x)
  He init: W ~ N(0, 2/fan_in)

Visual summary:
  Layer stack:
  x → W1 → σ → W2 → σ → ... → ŷ
  n0   n1      n2
  W1: n1×n0
  W2: n2×n1

Study checklist:
  1. Check shapes at every layer
  2. Batch dim adds leading axis
  3. Transpose in batch forward pass
  4. Init scale affects training
  5. Residual eases deep gradients

Topic: Matrix Operations
Track: math | Level: intermediate`
        },
        {
          id: `math-matrix-ops-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Matrix Operations** sits in the **math** track of the Data Science Master curriculum. Matrix multiplication, transpose rules, and properties of matrix arithmetic.

**Theoretical foundation:**

- Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters.
- Each branch connects directly to numpy operations and loss functions.

For **math-matrix-ops**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
          example: `# Concept check for Matrix Operations
meta = {"topic_id": "math-matrix-ops", "track": "math", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-matrix-ops math intermediate`,
          keyPoints: [
            `Core theory of Matrix Operations ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Matrix Operations ties to the math track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Matrix Operations
Track: math | Level: intermediate`
        },
        {
          id: `math-matrix-ops-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Matrix Operations**. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **math-matrix-ops**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for math-matrix-ops
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-matrix-ops", "Matrix Operations")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-matrix-ops Matrix`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with math ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with math ecosystem conventions

Topic: Matrix Operations
Track: math | Level: intermediate`
        },
        {
          id: `math-matrix-ops-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Matrix Operations** often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on **math-matrix-ops**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:**

- The best debuggers narrow the search space in minutes by changing one variable at a time.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("math-matrix-ops", "Matrix Operations")
debug_step("section_count", 4)`,
          output: `[math-matrix-ops] 'Matrix Operations' (str)
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

Topic: Matrix Operations
Track: math | Level: intermediate`
        },
        {
          id: `math-matrix-ops-real-world`,
          title: `Real-World Applications`,
          content: `**Matrix Operations** shows up wherever **math** skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around **math-matrix-ops** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Matrix Operations
skills = ["math", "intermediate", "math-matrix-ops"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, intermediate, math-matrix-ops`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Matrix Operations to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Matrix Operations to adjacent topics in the same track

Topic: Matrix Operations
Track: math | Level: intermediate`
        }
      ],
      exercises: [
        {
          id: `ex-mm-1`,
          question: `Compute AB and BA for 2×2 matrices [[1,2],[3,4]] and [[0,1],[1,0]].`,
          solution: `import numpy as np
A=np.array([[1,2],[3,4]]); B=np.array([[0,1],[1,0]])
print(A@B); print(B@A)`,
          difficulty: `easy`
        },
        {
          id: `ex-mm-2`,
          question: `Verify (AB)ᵀ = BᵀAᵀ for random 2×3 and 3×2 matrices.`,
          solution: `import numpy as np
A=np.random.randn(2,3); B=np.random.randn(3,2)
print(np.allclose((A@B).T, B.T@A.T))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 124,
      module: `module-math-02`,
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
      id: `math-linear-systems`,
      title: `Linear Systems & Gaussian Elimination`,
      description: `Solve Ax=b via elimination, rank, and solution existence/uniqueness.`,
      level: `intermediate`,
      track: `math`,
      sections: [
        {
          id: `ls-form`,
          title: `System Formulation`,
          content: `Linear system Ax=b: A∈ℝ^{m×n}, x∈ℝ^n unknown, b∈ℝ^m. **Consistent** if ∃x solution. Unique solution when A square and invertible. Overdetermined m>n: least squares min||Ax−b||₂. Underdetermined m<n: infinitely many solutions. Regression y=Xβ is linear system. Each equation is hyperplane; solution is intersection. Rank(A) determines solution structure via Rouché-Capelli theorem. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **System Formulation** directly affects how confidently you can build, debug, and ship math projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Verify formulas on paper with tiny examples, then confirm with numpy before scaling up.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.

**Mathematical foundation:**

- This section includes 5 key formulas.
- Identify each symbol's meaning, units, and valid input range before trusting numerical output.
- Work through a tiny numeric example by hand, then verify in code.

**Visual guide:**

- Study the diagram alongside the explanation — do not skip it.
- Trace each arrow, box, or region back to a term in the text.
- If you cannot map a visual element to words, re-read until the connection is clear.`,
          formulas: [
            `Ax = b`,
            `Consistent ⇔ b ∈ Col(A)`,
            `Unique ⇔ A invertible (n×n, full rank)`,
            `Least squares: min ||Ax − b||₂`,
            `rank(A) = dim Col(A)`
          ],
          diagram: `2 equations, 2 unknowns:
   a11 x1 + a12 x2 = b1   ── line 1
   a21 x1 + a22 x2 = b2   ── line 2
   intersection = solution
   parallel → none
   same line → infinite`,
          keyPoints: [
            `Geometric: intersection of hyperplanes`,
            `Square full rank → unique solution`,
            `Overdetermined → least squares`,
            `Rank determines consistency`,
            `Regression is Ax=b`
          ],
          example: `import numpy as np
A = np.array([[2.,1.],[1.,1.]])
b = np.array([4.,3.])
x = np.linalg.solve(A,b)
print("x:", x)`,
          output: `x: [1. 2.]`,
          pseudoCode: `CONCEPT: System Formulation

Key relationships:
  Ax = b
  Consistent ⇔ b ∈ Col(A)
  Unique ⇔ A invertible (n×n, full rank)
  Least squares: min ||Ax − b||₂
  rank(A) = dim Col(A)

Visual summary:
  2 equations, 2 unknowns:
  a11 x1 + a12 x2 = b1   ── line 1
  a21 x1 + a22 x2 = b2   ── line 2
  intersection = solution
  parallel → none
  same line → infinite

Study checklist:
  1. Geometric: intersection of hyperplanes
  2. Square full rank → unique solution
  3. Overdetermined → least squares
  4. Rank determines consistency
  5. Regression is Ax=b

Topic: Linear Systems & Gaussian Elimination
Track: math | Level: intermediate`
        },
        {
          id: `ls-elim`,
          title: `Gaussian Elimination`,
          content: `**Gaussian elimination** row-reduces [A|b] to upper triangular form then back-substitutes. **Elementary row ops**: swap rows, scale row, add multiple of row to another. **Pivoting** swaps rows to avoid zero pivot and reduce error. LU decomposition: A=LU with L lower, U upper triangular. np.linalg.solve uses optimized LAPACK. Partial pivoting improves numerical stability for ill-conditioned systems.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Gaussian Elimination** directly affects how confidently you can build, debug, and ship math projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Verify formulas on paper with tiny examples, then confirm with numpy before scaling up.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.

**Mathematical foundation:**

- This section includes 5 key formulas.
- Identify each symbol's meaning, units, and valid input range before trusting numerical output.
- Work through a tiny numeric example by hand, then verify in code.

**Visual guide:**

- Study the diagram alongside the explanation — do not skip it.
- Trace each arrow, box, or region back to a term in the text.
- If you cannot map a visual element to words, re-read until the connection is clear.`,
          formulas: [
            `Elementary ops preserve solution set`,
            `Forward elimination → upper triangular U`,
            `Back substitution from last equation`,
            `A = LU factorization`,
            `Partial pivoting: max |pivot|`
          ],
          diagram: `[A|b] → row ops → [U|c]
   [ 2  1 | 4 ]     [ 1  1 | 3 ]
   [ 1  1 | 3 ]  →  [ 0  1 | 2 ]
   back sub: x2=2, x1=1`,
          keyPoints: [
            `Row ops don't change solutions`,
            `Pivot avoids division by zero`,
            `LU enables fast multiple rhs`,
            `Upper triangular easy to solve`,
            `Pivoting improves accuracy`
          ],
          example: `import numpy as np
A = np.array([[2.,1.,1.],[1.,2.,1.],[1.,1.,2.]])
b = np.array([4.,4.,4.])
print(np.linalg.solve(A,b))`,
          output: `[1. 1. 1.]`,
          pseudoCode: `CONCEPT: Gaussian Elimination

Key relationships:
  Elementary ops preserve solution set
  Forward elimination → upper triangular U
  Back substitution from last equation
  A = LU factorization
  Partial pivoting: max |pivot|

Visual summary:
  [A|b] → row ops → [U|c]
  [ 2  1 | 4 ]     [ 1  1 | 3 ]
  [ 1  1 | 3 ]  →  [ 0  1 | 2 ]
  back sub: x2=2, x1=1

Study checklist:
  1. Row ops don't change solutions
  2. Pivot avoids division by zero
  3. LU enables fast multiple rhs
  4. Upper triangular easy to solve
  5. Pivoting improves accuracy

Topic: Linear Systems & Gaussian Elimination
Track: math | Level: intermediate`
        },
        {
          id: `ls-lsq`,
          title: `Least Squares Solution`,
          content: `When Ax=b has no exact solution, **least squares** finds x minimizing ||Ax−b||₂². Normal equations: AᵀAx=Aᵀb. Solution x=(AᵀA)⁻¹Aᵀb when AᵀA invertible. **Pseudo-inverse** A⁺ gives minimum-norm least squares. np.linalg.lstsq handles rank-deficient cases. Linear regression closed form uses this. QR or SVD more stable than forming AᵀA explicitly for ill-conditioned problems. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Least Squares Solution** directly affects how confidently you can build, debug, and ship math projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Verify formulas on paper with tiny examples, then confirm with numpy before scaling up.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.

**Mathematical foundation:**

- This section includes 5 key formulas.
- Identify each symbol's meaning, units, and valid input range before trusting numerical output.
- Work through a tiny numeric example by hand, then verify in code.

**Visual guide:**

- Study the diagram alongside the explanation — do not skip it.
- Trace each arrow, box, or region back to a term in the text.
- If you cannot map a visual element to words, re-read until the connection is clear.`,
          formulas: [
            `min ||Ax − b||₂²`,
            `Normal eq: AᵀAx = Aᵀb`,
            `x = (AᵀA)⁻¹Aᵀb`,
            `A⁺ pseudo-inverse`,
            `lstsq via QR/SVD preferred`
          ],
          diagram: `Overdetermined: more eqs than unknowns
        ╲
         ╲  best fit line
          ╲ minimizes Σ residual²`,
          keyPoints: [
            `LS minimizes squared residuals`,
            `Normal equations from calculus`,
            `AᵀA may be ill-conditioned`,
            `Pseudo-inverse generalizes inverse`,
            `Regression = least squares`
          ],
          example: `import numpy as np
X = np.array([[1,1],[1,2],[1,3]])
y = np.array([2.,3.,5.])
beta, _, _, _ = np.linalg.lstsq(X, y, rcond=None)
print("beta:", beta)`,
          output: `beta: [0.5 1.5] approx`,
          pseudoCode: `CONCEPT: Least Squares Solution

Key relationships:
  min ||Ax − b||₂²
  Normal eq: AᵀAx = Aᵀb
  x = (AᵀA)⁻¹Aᵀb
  A⁺ pseudo-inverse
  lstsq via QR/SVD preferred

Visual summary:
  Overdetermined: more eqs than unknowns
  ╲
  ╲  best fit line
  ╲ minimizes Σ residual²

Study checklist:
  1. LS minimizes squared residuals
  2. Normal equations from calculus
  3. AᵀA may be ill-conditioned
  4. Pseudo-inverse generalizes inverse
  5. Regression = least squares

Topic: Linear Systems & Gaussian Elimination
Track: math | Level: intermediate`
        },
        {
          id: `ls-rank`,
          title: `Rank & Null Space`,
          content: `**Column space** Col(A) = {Ax | x∈ℝ^n}. **Null space** Null(A) = {x | Ax=0}. Rank-nullity: rank(A)+dim(Null(A))=n. Full column rank: independent columns. Rank deficiency indicates redundant features. SVD reveals rank via non-zero singular values. Solution to Ax=b unique iff rank(A)=rank([A|b])=n. Homogeneous Ax=0 always has x=0 trivial solution plus null space vectors. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Rank & Null Space** directly affects how confidently you can build, debug, and ship math projects.
- This concept appears repeatedly in later modules — time invested here pays off across the entire track.

**Hands-on practice:**

- Run the code example below in Python or Jupyter.
- Predict the output before executing, then compare line-by-line.
- Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:**

- Verify formulas on paper with tiny examples, then confirm with numpy before scaling up.
- Document your assumptions because they become invariants for tests, APIs, and team handoffs.
- Revisit this section after the exercises to confirm each habit feels automatic.

**Common mistakes:**

- Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation.
- When debugging, reduce to the smallest input that reproduces the issue.
- Log intermediate values with their types before guessing at the fix.

**Mathematical foundation:**

- This section includes 5 key formulas.
- Identify each symbol's meaning, units, and valid input range before trusting numerical output.
- Work through a tiny numeric example by hand, then verify in code.

**Visual guide:**

- Study the diagram alongside the explanation — do not skip it.
- Trace each arrow, box, or region back to a term in the text.
- If you cannot map a visual element to words, re-read until the connection is clear.`,
          formulas: [
            `rank(A) = dim Col(A)`,
            `rank(A) + nullity(A) = n`,
            `Null(A) = {x : Ax = 0}`,
            `Full rank ⇔ columns independent`,
            `rank via SVD = # nonzero σ`
          ],
          diagram: `Rank = # pivot columns
   Full rank columns:
   [ * * ]  rank 2
   [ * * ]
   Dependent column:
   [ 1  2 ]  rank 1
   [ 2  4 ]  col2 = 2·col1`,
          keyPoints: [
            `Rank measures independent info`,
            `Null space = directions A kills`,
            `Redundant features lower rank`,
            `SVD robust for rank detection`,
            `Nullity counts free variables`
          ],
          example: `import numpy as np
A = np.array([[1.,2.],[2.,4.]])
print("rank:", np.linalg.matrix_rank(A))
print("null:", np.linalg.null_space(A) if hasattr(np.linalg,"null_space") else "use scipy")`,
          output: `rank: 1`,
          pseudoCode: `CONCEPT: Rank & Null Space

Key relationships:
  rank(A) = dim Col(A)
  rank(A) + nullity(A) = n
  Null(A) = {x : Ax = 0}
  Full rank ⇔ columns independent
  rank via SVD = # nonzero σ

Visual summary:
  Rank = # pivot columns
  Full rank columns:
  [ * * ]  rank 2
  [ * * ]
  Dependent column:
  [ 1  2 ]  rank 1
  [ 2  4 ]  col2 = 2·col1

Study checklist:
  1. Rank measures independent info
  2. Null space = directions A kills
  3. Redundant features lower rank
  4. SVD robust for rank detection
  5. Nullity counts free variables

Topic: Linear Systems & Gaussian Elimination
Track: math | Level: intermediate`
        },
        {
          id: `math-linear-systems-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Linear Systems & Gaussian Elimination** sits in the **math** track of the Data Science Master curriculum. Solve Ax=b via elimination, rank, and solution existence/uniqueness.

**Theoretical foundation:**

- Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters.
- Each branch connects directly to numpy operations and loss functions.

For **math-linear-systems**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
          example: `# Concept check for Linear Systems & Gaussian Elimination
meta = {"topic_id": "math-linear-systems", "track": "math", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-linear-systems math intermediate`,
          keyPoints: [
            `Core theory of Linear Systems & Gaussian Elimination ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Linear Systems & Gaussian Elimination ties to the math track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Linear Systems & Gaussian Elimination
Track: math | Level: intermediate`
        },
        {
          id: `math-linear-systems-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Linear Systems & Gaussian Elimination**. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **math-linear-systems**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for math-linear-systems
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-linear-systems", "Linear Systems & Gaussian Elimination")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-linear-systems Linear`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with math ecosystem conventions`
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with math ecosystem conventions

Topic: Linear Systems & Gaussian Elimination
Track: math | Level: intermediate`
        },
        {
          id: `math-linear-systems-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Linear Systems & Gaussian Elimination** often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on **math-linear-systems**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:**

- The best debuggers narrow the search space in minutes by changing one variable at a time.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("math-linear-systems", "Linear Systems & Gaussian Elimination")
debug_step("section_count", 4)`,
          output: `[math-linear-systems] 'Linear Systems & Gaussian Elimination' (str)
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

Topic: Linear Systems & Gaussian Elimination
Track: math | Level: intermediate`
        },
        {
          id: `math-linear-systems-real-world`,
          title: `Real-World Applications`,
          content: `**Linear Systems & Gaussian Elimination** shows up wherever **math** skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around **math-linear-systems** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Linear Systems & Gaussian Elimination
skills = ["math", "intermediate", "math-linear-systems"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, intermediate, math-linear-systems`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Linear Systems & Gaussian Elimination to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Linear Systems & Gaussian Elimination to adjacent topics in the same track

Topic: Linear Systems & Gaussian Elimination
Track: math | Level: intermediate`
        }
      ],
      exercises: [
        {
          id: `ex-ls-1`,
          question: `Solve [[2,1],[1,3]]x=[5,7] with np.linalg.solve.`,
          solution: `import numpy as np
A=np.array([[2,1],[1,3]]); print(np.linalg.solve(A,[5,7]))`,
          difficulty: `easy`
        },
        {
          id: `ex-ls-2`,
          question: `Fit line y=mx+c to points (0,1),(1,2),(2,2) via lstsq.`,
          solution: `import numpy as np
X=np.array([[0,1],[1,1],[2,1]]); y=np.array([1,2,2.])
print(np.linalg.lstsq(X,y,rcond=None)[0])`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 124,
      module: `module-math-02`,
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
