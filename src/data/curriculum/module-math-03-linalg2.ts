import type { Topic } from '../../types';

export const moduleMath03Topics: Topic[] = [
{
      id: `math-determinants`,
      title: `Determinants`,
      description: `Compute and interpret determinants as volume scaling and invertibility tests.`,
      level: `intermediate`,
      track: `math`,
      sections: [
        {
          id: `det-def`,
          title: `Determinant Definition`,
          content: `The **determinant** det(A) is a scalar for square A∈ℝ^{n×n}. det(A) measures signed volume scaling factor of linear transform A. det(A)=0 iff A is singular (non-invertible). For 2×2: det[[a,b],[c,d]]=ad−bc. det(Aᵀ)=det(A). det(AB)=det(A)det(B). Swapping two rows flips sign. Multiplying row by k multiplies det by k. Cofactor expansion works recursively. Determinants appear in change of variables in integrals and multivariate Gaussian normalization.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Determinant Definition** directly affects how confidently you can build, debug, and ship math projects.
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
            `det(I) = 1`,
            `det(AB) = det(A)det(B)`,
            `2×2: det = ad − bc`,
            `det(A) = 0 ⇔ A singular`,
            `det(Aᵀ) = det(A)`
          ],
          diagram: `2×2 area scaling:
   unit square ──A──→ parallelogram
   area × |det(A)|
   det>0: orientation preserved
   det<0: reflection`,
          keyPoints: [
            `Determinant = volume scale factor`,
            `Zero det → not invertible`,
            `Product rule for det of product`,
            `Sign indicates orientation flip`,
            `Used in Jacobian determinants`
          ],
          example: `import numpy as np
A = np.array([[3.,1.],[2.,4.]])
print("det:", np.linalg.det(A))
print("manual:", 3*4-1*2)`,
          output: `det: 10.0
manual: 10.0`,
          pseudoCode: `CONCEPT: Determinant Definition

Key relationships:
  det(I) = 1
  det(AB) = det(A)det(B)
  2×2: det = ad − bc
  det(A) = 0 ⇔ A singular
  det(Aᵀ) = det(A)

Visual summary:
  2×2 area scaling:
  unit square ──A──→ parallelogram
  area × |det(A)|
  det>0: orientation preserved
  det<0: reflection

Study checklist:
  1. Determinant = volume scale factor
  2. Zero det → not invertible
  3. Product rule for det of product
  4. Sign indicates orientation flip
  5. Used in Jacobian determinants

Topic: Determinants
Track: math | Level: intermediate`
        },
        {
          id: `det-geom`,
          title: `Geometric Meaning`,
          content: `**Geometric Meaning** — what you need to know:

- **Core idea:** Compute and interpret determinants as volume scaling and invertibility tests.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Parallelogram area spanned by columns = |det([v₁ v₂])|. Signed det preserves orientation. In 3D, |det| = volume of parallelepiped. Linear map collapsing space has det=0 (e.g., projection). det(A)<0 implies reflection component. Absolute det in change of variables: ∫f(g(x))|det J|dx. Understanding geometry helps debug why singular covariance matrices break multivariate Gaussian density formulas. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Geometric Meaning** directly affects how confidently you can build, debug, and ship math projects.
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
            `|det([v1 v2])| = parallelogram area`,
            `3D: |det| = volume`,
            `det=0 → dimension collapse`,
            `sign(det) = orientation`,
            `|det J| in change of variables`
          ],
          diagram: `columns of A span shape:
      v2
      │╱ area = |det A|`,
          keyPoints: [
            `Columns as spanning vectors`,
            `Zero volume → dependent columns`,
            `Jacobian det for coordinate change`,
            `Sign matters in oriented integrals`,
            `Covariance det in MVN density`
          ],
          example: `import numpy as np
v1 = np.array([2.,0.]); v2 = np.array([1.,3.])
print("area:", abs(np.linalg.det(np.column_stack([v1,v2]))))`,
          output: `area: 6.0`,
          pseudoCode: `CONCEPT: Geometric Meaning

Key relationships:
  |det([v1 v2])| = parallelogram area
  3D: |det| = volume
  det=0 → dimension collapse
  sign(det) = orientation
  |det J| in change of variables

Visual summary:
  columns of A span shape:
  v2
  │╱ area = |det A|

Study checklist:
  1. Columns as spanning vectors
  2. Zero volume → dependent columns
  3. Jacobian det for coordinate change
  4. Sign matters in oriented integrals
  5. Covariance det in MVN density

Topic: Determinants
Track: math | Level: intermediate`
        },
        {
          id: `det-prop`,
          title: `Properties & Computation`,
          content: `**Properties & Computation** — what you need to know:

- **Core idea:** Compute and interpret determinants as volume scaling and invertibility tests.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Triangular matrix: det = product of diagonal entries. Row operations: adding multiple of row doesn't change det; swapping flips sign; scaling row scales det. LU: det(A)=det(L)det(U)=∏U_ii. O(n³) via elimination vs O(n!) naive cofactor. log(det(A)) via log-sum for positive definite matrices in likelihoods. np.linalg.slogdet returns sign and log-abs-det stably. For large PD matrices, Cholesky gives log det = 2∑log(diag(L)).

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Properties & Computation** directly affects how confidently you can build, debug, and ship math projects.
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
            `Triangular: det = ∏ diagonal`,
            `Row swap → multiply det by −1`,
            `det(A) = ∏ U_ii from LU`,
            `log det(A) for PD via Cholesky`,
            `slogdet for numerical stability`
          ],
          diagram: `Upper triangular U:
   [ * * * ]
   [ 0 * * ]
   [ 0 0 * ]
   det = u11 · u22 · u33`,
          keyPoints: [
            `Triangular det is easy product`,
            `LU factorization for large n`,
            `log det avoids overflow`,
            `slogdet stable in numpy`,
            `Cholesky for SPD matrices`
          ],
          example: `import numpy as np
A = np.array([[2.,1.,0.],[0.,3.,1.],[0.,0.,4.]])
sign, logdet = np.linalg.slogdet(A)
print("sign:", sign, "log|det|:", logdet)`,
          output: `sign: 1.0 log|det|: 2.484...`,
          pseudoCode: `CONCEPT: Properties & Computation

Key relationships:
  Triangular: det = ∏ diagonal
  Row swap → multiply det by −1
  det(A) = ∏ U_ii from LU
  log det(A) for PD via Cholesky
  slogdet for numerical stability

Visual summary:
  Upper triangular U:
  [ * * * ]
  [ 0 * * ]
  [ 0 0 * ]
  det = u11 · u22 · u33

Study checklist:
  1. Triangular det is easy product
  2. LU factorization for large n
  3. log det avoids overflow
  4. slogdet stable in numpy
  5. Cholesky for SPD matrices

Topic: Determinants
Track: math | Level: intermediate`
        },
        {
          id: `det-ml`,
          title: `Determinants in ML`,
          content: `**Determinants in ML** — what you need to know:

- **Core idea:** Compute and interpret determinants as volume scaling and invertibility tests.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Multivariate Gaussian: p(x)=exp(−½(x−μ)ᵀΣ⁻¹(x−μ))/√((2π)ⁿdet Σ). Zero det Σ → degenerate distribution. Normalizing flows track log|det ∂f/∂x| for density transformation. Volume preservation in invertible nets requires |det J|=1. PCA uses det(Σ) related to product of eigenvalues. Regularization adds λI ensuring det(Σ+λI)>0. Matrix determinant lemma useful in Gaussian process updates. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Determinants in ML** directly affects how confidently you can build, debug, and ship math projects.
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
            `MVN norm: (2π)^(−n/2) |Σ|^(−1/2)`,
            `det(Σ) = ∏ λ_i`,
            `Flow: log p(z) = log p(f(x)) + log|det J|`,
            `Regularize: Σ + λI`,
            `det=0 → singular covariance`
          ],
          diagram: `Σ eigenvalues λ1,λ2:
   det(Σ) = λ1 · λ2
   one λ→0: flat direction
   det→0: no density in that dir`,
          keyPoints: [
            `MVN needs positive det Σ`,
            `Eigenvalue product = determinant`,
            `Flows use Jacobian determinant`,
            `Ridge adds to diagonal for stability`,
            `Singular cov → PCA rank drop`
          ],
          example: `import numpy as np
Sigma = np.array([[2.,1.],[1.,2.]])
print("det Sigma:", np.linalg.det(Sigma))
print("eig prod:", np.prod(np.linalg.eigvalsh(Sigma)))`,
          output: `det Sigma: 3.0
eig prod: 3.0`,
          pseudoCode: `CONCEPT: Determinants in ML

Key relationships:
  MVN norm: (2π)^(−n/2) |Σ|^(−1/2)
  det(Σ) = ∏ λ_i
  Flow: log p(z) = log p(f(x)) + log|det J|
  Regularize: Σ + λI
  det=0 → singular covariance

Visual summary:
  Σ eigenvalues λ1,λ2:
  det(Σ) = λ1 · λ2
  one λ→0: flat direction
  det→0: no density in that dir

Study checklist:
  1. MVN needs positive det Σ
  2. Eigenvalue product = determinant
  3. Flows use Jacobian determinant
  4. Ridge adds to diagonal for stability
  5. Singular cov → PCA rank drop

Topic: Determinants
Track: math | Level: intermediate`
        },
        {
          id: `math-determinants-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Determinants** sits in the **math** track of the Data Science Master curriculum. Compute and interpret determinants as volume scaling and invertibility tests.

**Theoretical foundation:**

- Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters.
- Each branch connects directly to numpy operations and loss functions.

For **math-determinants**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
          example: `# Concept check for Determinants
meta = {"topic_id": "math-determinants", "track": "math", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-determinants math intermediate`,
          keyPoints: [
            `Core theory of Determinants ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Determinants ties to the math track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Determinants
Track: math | Level: intermediate`
        },
        {
          id: `math-determinants-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Determinants**. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **math-determinants**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for math-determinants
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-determinants", "Determinants")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-determinants Determinants`,
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

Topic: Determinants
Track: math | Level: intermediate`
        },
        {
          id: `math-determinants-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Determinants** often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on **math-determinants**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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

debug_step("math-determinants", "Determinants")
debug_step("section_count", 4)`,
          output: `[math-determinants] 'Determinants' (str)
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

Topic: Determinants
Track: math | Level: intermediate`
        },
        {
          id: `math-determinants-real-world`,
          title: `Real-World Applications`,
          content: `**Determinants** shows up wherever **math** skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around **math-determinants** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Determinants
skills = ["math", "intermediate", "math-determinants"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, intermediate, math-determinants`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Determinants to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Determinants to adjacent topics in the same track

Topic: Determinants
Track: math | Level: intermediate`
        }
      ],
      exercises: [
        {
          id: `ex-det-1`,
          question: `Compute det of [[1,2],[3,4]].`,
          solution: `import numpy as np
print(np.linalg.det([[1,2],[3,4]]))`,
          difficulty: `easy`
        },
        {
          id: `ex-det-2`,
          question: `Verify det(AB)=det(A)det(B) for random 3×3.`,
          solution: `import numpy as np
A=np.random.randn(3,3); B=np.random.randn(3,3)
print(np.allclose(np.linalg.det(A@B), np.linalg.det(A)*np.linalg.det(B)))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 124,
      module: `module-math-03`,
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
      id: `math-inverse`,
      title: `Matrix Inverse`,
      description: `Compute and apply matrix inverses for solving systems and understanding transformations.`,
      level: `intermediate`,
      track: `math`,
      sections: [
        {
          id: `inv-def`,
          title: `Inverse Definition`,
          content: `**Inverse Definition** — what you need to know:

- **Core idea:** Compute and apply matrix inverses for solving systems and understanding transformations.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

A⁻¹ satisfies AA⁻¹=A⁻¹A=I for square invertible A. Unique when exists. (AB)⁻¹=B⁻¹A⁻¹ reverse order like transpose. (Aᵀ)⁻¹=(A⁻¹)ᵀ. Inverse undoes linear transform: if y=Ax then x=A⁻¹y. Not all matrices invert—singular when det=0. Never invert large dense matrices explicitly in production; prefer solve(A,b). Inverse of orthogonal Q is Qᵀ. Diagonal inverse inverts diagonal entries. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Inverse Definition** directly affects how confidently you can build, debug, and ship math projects.
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
            `(AB)⁻¹ = B⁻¹A⁻¹`,
            `(Aᵀ)⁻¹ = (A⁻¹)ᵀ`,
            `A⁻¹ exists ⇔ det(A) ≠ 0`,
            `Prefer solve(A,b) over inv(A)@b`
          ],
          diagram: `A ──→ y = Ax
   └── A⁻¹ ──┘
   A⁻¹ undoes A
   singular A: no inverse`,
          keyPoints: [
            `Inverse unique if exists`,
            `Reverse order for product inverse`,
            `Never invert ill-conditioned A`,
            `Use solve for Ax=b`,
            `Orthogonal: inverse = transpose`
          ],
          example: `import numpy as np
A = np.array([[1.,2.],[3.,4.]])
Ainv = np.linalg.inv(A)
print("A@Ainv:\\n", A@Ainv)`,
          output: `A@Ainv: identity`,
          pseudoCode: `CONCEPT: Inverse Definition

Key relationships:
  AA⁻¹ = A⁻¹A = I
  (AB)⁻¹ = B⁻¹A⁻¹
  (Aᵀ)⁻¹ = (A⁻¹)ᵀ
  A⁻¹ exists ⇔ det(A) ≠ 0
  Prefer solve(A,b) over inv(A)@b

Visual summary:
  A ──→ y = Ax
  └── A⁻¹ ──┘
  A⁻¹ undoes A
  singular A: no inverse

Study checklist:
  1. Inverse unique if exists
  2. Reverse order for product inverse
  3. Never invert ill-conditioned A
  4. Use solve for Ax=b
  5. Orthogonal: inverse = transpose

Topic: Matrix Inverse
Track: math | Level: intermediate`
        },
        {
          id: `inv-2x2`,
          title: `2×2 Inverse Formula`,
          content: `**2×2 Inverse Formula** — what you need to know:

- **Core idea:** Compute and apply matrix inverses for solving systems and understanding transformations.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

For A=[[a,b],[c,d]], A⁻¹=(1/(ad−bc))[[d,−b],[−c,a]] when det≠0. Adjugate divided by determinant. Quick hand calculation useful for intuition. Cofactor matrix transpose divided by det generalizes to n×n. Singular when rows proportional: [1,2] and [2,4]. Near-singular when det≈0 causes huge entries in A⁻¹—ill-conditioning. Always check cond(A) before trusting explicit inverse. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **2×2 Inverse Formula** directly affects how confidently you can build, debug, and ship math projects.
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
            `A⁻¹ = (1/det) [[d,−b], [−c,a]]`,
            `det = ad − bc`,
            `Singular when ad = bc`,
            `adj(A)ᵀ / det(A)`,
            `Large entries → ill-conditioned`
          ],
          diagram: `[[a b]⁻¹  =  1/(ad-bc) [[ d -b]
    [c d]]                    [-c  a]]
   swap a,d; negate b,c; divide`,
          keyPoints: [
            `Memorize 2×2 formula for speed`,
            `Determinant in denominator critical`,
            `Small det → unstable inverse`,
            `Cofactor method generalizes`,
            `Check condition number`
          ],
          example: `import numpy as np
a,b,c,d=1,2,3,4
A=np.array([[a,b],[c,d]])
det=a*d-b*c
Ainv=(1/det)*np.array([[d,-b],[-c,a]])
print(Ainv)`,
          output: `matches np.linalg.inv`,
          pseudoCode: `CONCEPT: 2×2 Inverse Formula

Key relationships:
  A⁻¹ = (1/det) [[d,−b], [−c,a]]
  det = ad − bc
  Singular when ad = bc
  adj(A)ᵀ / det(A)
  Large entries → ill-conditioned

Visual summary:
  [[a b]⁻¹  =  1/(ad-bc) [[ d -b]
  [c d]]                    [-c  a]]
  swap a,d; negate b,c; divide

Study checklist:
  1. Memorize 2×2 formula for speed
  2. Determinant in denominator critical
  3. Small det → unstable inverse
  4. Cofactor method generalizes
  5. Check condition number

Topic: Matrix Inverse
Track: math | Level: intermediate`
        },
        {
          id: `inv-pinv`,
          title: `Pseudo-Inverse`,
          content: `**Moore-Penrose pseudo-inverse** A⁺ generalizes inverse for non-square or singular A. SVD: A=UΣVᵀ, A⁺=VΣ⁺Uᵀ where Σ⁺ inverts non-zero singular values. Least squares minimum-norm: x=A⁺b. np.linalg.pinv uses SVD. Handles rank deficiency gracefully. In underdetermined consistent systems, A⁺ gives smallest ||x|| solution. Important for overdetermined regression when XᵀX singular. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Pseudo-Inverse** directly affects how confidently you can build, debug, and ship math projects.
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
            `A⁺ via SVD: V Σ⁺ Uᵀ`,
            `Least squares: x = A⁺b`,
            `Minimum norm among LS solutions`,
            `rank(A) = # nonzero σ`,
            `pinv handles rectangular A`
          ],
          diagram: `SVD: A = U Σ Vᵀ
   invert nonzero σ only
   zero σ → 0 in Σ⁺
   robust for rank-deficient`,
          keyPoints: [
            `SVD basis for pseudo-inverse`,
            `Works for non-square matrices`,
            `Minimum norm solution`,
            `Stable vs normal equations`,
            `Used in lstsq implementations`
          ],
          example: `import numpy as np
A = np.array([[1.,1.],[2.,2.],[1.,0.]])
print("pinv@b:", np.linalg.pinv(A) @ np.array([3.,6.,1.]))`,
          output: `least squares solution`,
          pseudoCode: `CONCEPT: Pseudo-Inverse

Key relationships:
  A⁺ via SVD: V Σ⁺ Uᵀ
  Least squares: x = A⁺b
  Minimum norm among LS solutions
  rank(A) = # nonzero σ
  pinv handles rectangular A

Visual summary:
  SVD: A = U Σ Vᵀ
  invert nonzero σ only
  zero σ → 0 in Σ⁺
  robust for rank-deficient

Study checklist:
  1. SVD basis for pseudo-inverse
  2. Works for non-square matrices
  3. Minimum norm solution
  4. Stable vs normal equations
  5. Used in lstsq implementations

Topic: Matrix Inverse
Track: math | Level: intermediate`
        },
        {
          id: `inv-ml`,
          title: `Inverse in Regression`,
          content: `**Inverse in Regression** — what you need to know:

- **Core idea:** Compute and apply matrix inverses for solving systems and understanding transformations.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Closed-form OLS: β=(XᵀX)⁻¹Xᵀy when XᵀX invertible. Ridge: β=(XᵀX+λI)⁻¹Xᵀy always invertible for λ>0. Newton step: Δθ=H⁻¹∇L uses Hessian inverse. Fisher information inverse gives Cramér-Rao bound. Avoid explicit inverse—use np.linalg.solve(XTX, XTy). Woodbury matrix identity efficient for low-rank updates. Ill-conditioned X causes unstable (XᵀX)⁻¹—use regularization or SVD. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Inverse in Regression** directly affects how confidently you can build, debug, and ship math projects.
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
            `OLS: β = (XᵀX)⁻¹ Xᵀy`,
            `Ridge: (XᵀX + λI)⁻¹ Xᵀy`,
            `Newton: Δθ = H⁻¹ ∇L`,
            `Use solve not inv`,
            `Woodbury for rank-k updates`
          ],
          diagram: `Normal equations path:
   XᵀX β = Xᵀy
   solve instead of inv(XᵀX)
   λI ridge stabilizes diagonal`,
          keyPoints: [
            `OLS needs full rank X`,
            `Ridge guarantees invertibility`,
            `Newton uses Hessian inverse`,
            `solve() numerically superior`,
            `Regularize ill-conditioned problems`
          ],
          example: `import numpy as np
X = np.array([[1,1],[1,2],[1,3.]])
y = np.array([1.,2.,2.])
lam = 0.1
beta = np.linalg.solve(X.T@X + lam*np.eye(2), X.T@y)
print("ridge beta:", beta)`,
          output: `ridge beta: ...`,
          pseudoCode: `CONCEPT: Inverse in Regression

Key relationships:
  OLS: β = (XᵀX)⁻¹ Xᵀy
  Ridge: (XᵀX + λI)⁻¹ Xᵀy
  Newton: Δθ = H⁻¹ ∇L
  Use solve not inv
  Woodbury for rank-k updates

Visual summary:
  Normal equations path:
  XᵀX β = Xᵀy
  solve instead of inv(XᵀX)
  λI ridge stabilizes diagonal

Study checklist:
  1. OLS needs full rank X
  2. Ridge guarantees invertibility
  3. Newton uses Hessian inverse
  4. solve() numerically superior
  5. Regularize ill-conditioned problems

Topic: Matrix Inverse
Track: math | Level: intermediate`
        },
        {
          id: `math-inverse-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Matrix Inverse** sits in the **math** track of the Data Science Master curriculum. Compute and apply matrix inverses for solving systems and understanding transformations.

**Theoretical foundation:**

- Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters.
- Each branch connects directly to numpy operations and loss functions.

For **math-inverse**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
          example: `# Concept check for Matrix Inverse
meta = {"topic_id": "math-inverse", "track": "math", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-inverse math intermediate`,
          keyPoints: [
            `Core theory of Matrix Inverse ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Matrix Inverse ties to the math track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Matrix Inverse
Track: math | Level: intermediate`
        },
        {
          id: `math-inverse-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Matrix Inverse**. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **math-inverse**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for math-inverse
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-inverse", "Matrix Inverse")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-inverse Matrix`,
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

Topic: Matrix Inverse
Track: math | Level: intermediate`
        },
        {
          id: `math-inverse-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Matrix Inverse** often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on **math-inverse**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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

debug_step("math-inverse", "Matrix Inverse")
debug_step("section_count", 4)`,
          output: `[math-inverse] 'Matrix Inverse' (str)
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

Topic: Matrix Inverse
Track: math | Level: intermediate`
        },
        {
          id: `math-inverse-real-world`,
          title: `Real-World Applications`,
          content: `**Matrix Inverse** shows up wherever **math** skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around **math-inverse** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Matrix Inverse
skills = ["math", "intermediate", "math-inverse"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, intermediate, math-inverse`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Matrix Inverse to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Matrix Inverse to adjacent topics in the same track

Topic: Matrix Inverse
Track: math | Level: intermediate`
        }
      ],
      exercises: [
        {
          id: `ex-inv-1`,
          question: `Invert [[4,7],[2,6]] and verify A@Ainv=I.`,
          solution: `import numpy as np
A=np.array([[4.,7.],[2.,6.]]); I=np.linalg.inv(A); print(np.round(A@I,10))`,
          difficulty: `easy`
        },
        {
          id: `ex-inv-2`,
          question: `Solve OLS via pinv for X=[[1,1],[1,2],[1,3]], y=[1,2,2].`,
          solution: `import numpy as np
X=np.array([[1,1],[1,2],[1,3]]); y=np.array([1,2,2.])
print(np.linalg.pinv(X)@y)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 124,
      module: `module-math-03`,
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
      id: `math-eigen`,
      title: `Eigenvalues & Eigenvectors`,
      description: `Diagonalization, spectral theory, and dynamics via eigen decomposition.`,
      level: `intermediate`,
      track: `math`,
      sections: [
        {
          id: `eig-def`,
          title: `Eigenvalue Problem`,
          content: `Av = λv: v≠0 is **eigenvector**, λ is **eigenvalue**. A acts on eigenvector by scaling only. det(A−λI)=0 characteristic polynomial roots give eigenvalues. Sum of eigenvalues = tr(A). Product = det(A). For symmetric A, real eigenvalues and orthogonal eigenvectors (spectral theorem). Power iteration finds dominant eigenvalue. Eigenvalues determine stability of linear dynamical systems x_{t+1}=Ax_t: |λ|<1 stable.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Eigenvalue Problem** directly affects how confidently you can build, debug, and ship math projects.
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
            `Av = λv`,
            `det(A − λI) = 0`,
            `∑ λ_i = tr(A)`,
            `∏ λ_i = det(A)`,
            `Symmetric A → real λ, orthogonal v`
          ],
          diagram: `Av stretches v by λ
      v ──A──→ λv (same direction)
   λ>1: expand
   0<λ<1: shrink
   λ<0: flip + scale`,
          keyPoints: [
            `Eigenvectors unchanged in direction`,
            `Characteristic polynomial for λ`,
            `Symmetric case always real`,
            `Trace and det from eigenvalues`,
            `Stability from |λ| in dynamics`
          ],
          example: `import numpy as np
A = np.array([[2.,1.],[1.,2.]])
w, v = np.linalg.eig(A)
print("λ:", w)
print("Av:", A@v[:,0], "λv:", w[0]*v[:,0])`,
          output: `Av ≈ λv verified`,
          pseudoCode: `CONCEPT: Eigenvalue Problem

Key relationships:
  Av = λv
  det(A − λI) = 0
  ∑ λ_i = tr(A)
  ∏ λ_i = det(A)
  Symmetric A → real λ, orthogonal v

Visual summary:
  Av stretches v by λ
  v ──A──→ λv (same direction)
  λ>1: expand
  0<λ<1: shrink
  λ<0: flip + scale

Study checklist:
  1. Eigenvectors unchanged in direction
  2. Characteristic polynomial for λ
  3. Symmetric case always real
  4. Trace and det from eigenvalues
  5. Stability from |λ| in dynamics

Topic: Eigenvalues & Eigenvectors
Track: math | Level: intermediate`
        },
        {
          id: `eig-diag`,
          title: `Diagonalization`,
          content: `**Diagonalization** — what you need to know:

- **Core idea:** Diagonalization, spectral theory, and dynamics via eigen decomposition.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

If A has n independent eigenvectors, A=VΛV⁻¹ with Λ diagonal eigenvalues, V columns eigenvectors. A^k = VΛ^k V⁻¹ simplifies matrix powers. Symmetric: A=QΛQᵀ with Q orthogonal. Not all matrices diagonalizable—defective Jordan form needed. Similar matrices share eigenvalues. PCA covariance diagonalized by eigenvectors. Matrix exponential e^A = Ve^Λ V⁻¹ for diagonalizable A. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Diagonalization** directly affects how confidently you can build, debug, and ship math projects.
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
            `A = V Λ V⁻¹`,
            `Λ = diag(λ₁,...,λₙ)`,
            `Symmetric: A = Q Λ Qᵀ`,
            `A^k = V Λ^k V⁻¹`,
            `Similar matrices: same eigenvalues`
          ],
          diagram: `A = V Λ V⁻¹
   V: eigenvector basis
   Λ: scale in that basis
   compute A^100 via Λ^100`,
          keyPoints: [
            `Diagonalization simplifies powers`,
            `Orthogonal Q for symmetric A`,
            `Independent eigenvectors required`,
            `PCA = eigen decomposition Σ`,
            `e^A via diagonal Λ`
          ],
          example: `import numpy as np
A = np.array([[1.,2.],[0.,3.]])
w,v = np.linalg.eig(A)
print("reconstruct:", v @ np.diag(w) @ np.linalg.inv(v))`,
          output: `reconstructs A`,
          pseudoCode: `CONCEPT: Diagonalization

Key relationships:
  A = V Λ V⁻¹
  Λ = diag(λ₁,...,λₙ)
  Symmetric: A = Q Λ Qᵀ
  A^k = V Λ^k V⁻¹
  Similar matrices: same eigenvalues

Visual summary:
  A = V Λ V⁻¹
  V: eigenvector basis
  Λ: scale in that basis
  compute A^100 via Λ^100

Study checklist:
  1. Diagonalization simplifies powers
  2. Orthogonal Q for symmetric A
  3. Independent eigenvectors required
  4. PCA = eigen decomposition Σ
  5. e^A via diagonal Λ

Topic: Eigenvalues & Eigenvectors
Track: math | Level: intermediate`
        },
        {
          id: `eig-pca`,
          title: `Eigenvalues in PCA`,
          content: `**Eigenvalues in PCA** — what you need to know:

- **Core idea:** Diagonalization, spectral theory, and dynamics via eigen decomposition.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Covariance Σ eigenvalues λ_i = variance along principal axis i. Eigenvectors = principal directions. Sort λ descending; keep top k for dimensionality reduction. Explained variance ratio λ_i/∑λ. Σ = QΛQᵀ with Q columns PC directions. np.linalg.eigh for symmetric—faster and stable than eig. Whitening scales by 1/√λ. Zero eigenvalues indicate redundant features or rank deficiency. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Eigenvalues in PCA** directly affects how confidently you can build, debug, and ship math projects.
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
            `Σ v_i = λ_i v_i`,
            `λ_i = variance along PC i`,
            `Explained var: λ_i / ∑λ_j`,
            `Keep top-k eigenvectors`,
            `eigh for symmetric Σ`
          ],
          diagram: `PCA axes:
   max variance → PC1 (λ1)
        ↗
   PC2 ↗  (λ2 smaller)
   project onto top k PCs`,
          keyPoints: [
            `Largest λ = most variance direction`,
            `eigh preferred for covariance`,
            `Whitening divides by √λ`,
            `Zero λ = constant/redundant feature`,
            `Explained ratio guides k choice`
          ],
          example: `import numpy as np
X = np.random.randn(100,3)
X -= X.mean(0)
Sigma = X.T@X/100
w, Q = np.linalg.eigh(Sigma)
print("λ desc:", np.sort(w)[::-1])`,
          output: `eigenvalues descending`,
          pseudoCode: `CONCEPT: Eigenvalues in PCA

Key relationships:
  Σ v_i = λ_i v_i
  λ_i = variance along PC i
  Explained var: λ_i / ∑λ_j
  Keep top-k eigenvectors
  eigh for symmetric Σ

Visual summary:
  PCA axes:
  max variance → PC1 (λ1)
  ↗
  PC2 ↗  (λ2 smaller)
  project onto top k PCs

Study checklist:
  1. Largest λ = most variance direction
  2. eigh preferred for covariance
  3. Whitening divides by √λ
  4. Zero λ = constant/redundant feature
  5. Explained ratio guides k choice

Topic: Eigenvalues & Eigenvectors
Track: math | Level: intermediate`
        },
        {
          id: `eig-markov`,
          title: `Eigenvalues in Markov & PageRank`,
          content: `**Eigenvalues in Markov & PageRank** — what you need to know:

- **Core idea:** Diagonalization, spectral theory, and dynamics via eigen decomposition.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Stochastic matrix P (rows sum 1): largest eigenvalue λ₁=1 with stationary distribution π as eigenvector Pᵀπ=π. Power method: repeat v←Pv/||Pv|| converges to dominant eigenvector. Google PageRank solves eigenvalue problem on web graph. Markov chain mixing time related to second eigenvalue magnitude. Reversible chains have real eigenvalues. Spectral clustering uses eigenvectors of graph Laplacian—connects linear algebra to unsupervised learning.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Eigenvalues in Markov & PageRank** directly affects how confidently you can build, debug, and ship math projects.
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
            `P 1 = 1 for stochastic P`,
            `π: Pᵀπ = π (stationary)`,
            `Power method → dominant eigenvector`,
            `PageRank = eigenvector of link matrix`,
            `Spectral clustering uses Laplacian eigenvectors`
          ],
          diagram: `Power iteration:
   v₀ random
   v₁ = P v₀ / ||P v₀||
   v₂ = P v₁ / ||P v₁||
   → stationary distribution`,
          keyPoints: [
            `λ=1 for stochastic matrices`,
            `Power method simple but slow`,
            `Second λ controls mixing`,
            `Graph Laplacian eigenvectors cluster`,
            `Dominant mode = long-run behavior`
          ],
          example: `import numpy as np
P = np.array([[0.9,0.5],[0.1,0.5]])
v = np.array([0.5,0.5])
for _ in range(20): v = P@v; v /= v.sum()
print("stationary:", v)`,
          output: `stationary: [0.833 0.167] approx`,
          pseudoCode: `CONCEPT: Eigenvalues in Markov & PageRank

Key relationships:
  P 1 = 1 for stochastic P
  π: Pᵀπ = π (stationary)
  Power method → dominant eigenvector
  PageRank = eigenvector of link matrix
  Spectral clustering uses Laplacian eigenvectors

Visual summary:
  Power iteration:
  v₀ random
  v₁ = P v₀ / ||P v₀||
  v₂ = P v₁ / ||P v₁||
  → stationary distribution

Study checklist:
  1. λ=1 for stochastic matrices
  2. Power method simple but slow
  3. Second λ controls mixing
  4. Graph Laplacian eigenvectors cluster
  5. Dominant mode = long-run behavior

Topic: Eigenvalues & Eigenvectors
Track: math | Level: intermediate`
        },
        {
          id: `math-eigen-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Eigenvalues & Eigenvectors** sits in the **math** track of the Data Science Master curriculum. Diagonalization, spectral theory, and dynamics via eigen decomposition.

**Theoretical foundation:**

- Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters.
- Each branch connects directly to numpy operations and loss functions.

For **math-eigen**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
          example: `# Concept check for Eigenvalues & Eigenvectors
meta = {"topic_id": "math-eigen", "track": "math", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-eigen math intermediate`,
          keyPoints: [
            `Core theory of Eigenvalues & Eigenvectors ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Eigenvalues & Eigenvectors ties to the math track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Eigenvalues & Eigenvectors
Track: math | Level: intermediate`
        },
        {
          id: `math-eigen-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Eigenvalues & Eigenvectors**. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **math-eigen**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for math-eigen
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-eigen", "Eigenvalues & Eigenvectors")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-eigen Eigenvalues`,
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

Topic: Eigenvalues & Eigenvectors
Track: math | Level: intermediate`
        },
        {
          id: `math-eigen-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Eigenvalues & Eigenvectors** often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on **math-eigen**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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

debug_step("math-eigen", "Eigenvalues & Eigenvectors")
debug_step("section_count", 4)`,
          output: `[math-eigen] 'Eigenvalues & Eigenvectors' (str)
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

Topic: Eigenvalues & Eigenvectors
Track: math | Level: intermediate`
        },
        {
          id: `math-eigen-real-world`,
          title: `Real-World Applications`,
          content: `**Eigenvalues & Eigenvectors** shows up wherever **math** skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around **math-eigen** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Eigenvalues & Eigenvectors
skills = ["math", "intermediate", "math-eigen"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, intermediate, math-eigen`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Eigenvalues & Eigenvectors to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Eigenvalues & Eigenvectors to adjacent topics in the same track

Topic: Eigenvalues & Eigenvectors
Track: math | Level: intermediate`
        }
      ],
      exercises: [
        {
          id: `ex-eig-1`,
          question: `Find eigenvalues of [[2,1],[1,2]].`,
          solution: `import numpy as np
print(np.linalg.eigvalsh([[2,1],[1,2]]))`,
          difficulty: `easy`
        },
        {
          id: `ex-eig-2`,
          question: `Verify trace equals sum of eigenvalues for random 4×4.`,
          solution: `import numpy as np
A=np.random.randn(4,4)
w,_=np.linalg.eig(A)
print(np.allclose(np.trace(A), w.sum()))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 124,
      module: `module-math-03`,
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
      id: `math-svd`,
      title: `Singular Value Decomposition`,
      description: `Factor matrices with SVD for compression, pseudoinverse, and low-rank approximation.`,
      level: `advanced`,
      track: `math`,
      sections: [
        {
          id: `svd-def`,
          title: `SVD Definition`,
          content: `Any A∈ℝ^{m×n} factors as A=UΣVᵀ where U∈ℝ^{m×m} orthogonal, V∈ℝ^{n×n} orthogonal, Σ∈ℝ^{m×n} diagonal with σ₁≥σ₂≥...≥0 **singular values**. Rank(A)=#nonzero σ. Compact SVD uses only positive σ columns. SVD always exists—more general than eigendecomposition. σ_i² = eigenvalues of AᵀA (and AAᵀ). First right singular vector maximizes ||Av||/||v||. Foundation for PCA, recommender systems, and latent semantic analysis.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **SVD Definition** directly affects how confidently you can build, debug, and ship math projects.
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
            `A = U Σ Vᵀ`,
            `σ₁ ≥ σ₂ ≥ ... ≥ 0`,
            `rank(A) = # nonzero σ`,
            `σ_i(A) = √λ_i(AᵀA)`,
            `U,V orthogonal`
          ],
          diagram: `A = U Σ Vᵀ
   m×m   m×n   n×n
   rot   scale rot
   σ1 ≥ σ2 ≥ ... ≥ 0`,
          keyPoints: [
            `SVD always exists`,
            `Singular values non-negative`,
            `Rank from nonzero σ count`,
            `Related to AᵀA eigenvalues`,
            `Orthogonal U,V rotate space`
          ],
          example: `import numpy as np
A = np.array([[1.,2.],[3.,4.],[5.,6.]])
U,s,VT = np.linalg.svd(A, full_matrices=False)
print("σ:", s)
print("rank:", (s>1e-10).sum())`,
          output: `σ: [9.5, 0.77] approx`,
          pseudoCode: `CONCEPT: SVD Definition

Key relationships:
  A = U Σ Vᵀ
  σ₁ ≥ σ₂ ≥ ... ≥ 0
  rank(A) = # nonzero σ
  σ_i(A) = √λ_i(AᵀA)
  U,V orthogonal

Visual summary:
  A = U Σ Vᵀ
  m×m   m×n   n×n
  rot   scale rot
  σ1 ≥ σ2 ≥ ... ≥ 0

Study checklist:
  1. SVD always exists
  2. Singular values non-negative
  3. Rank from nonzero σ count
  4. Related to AᵀA eigenvalues
  5. Orthogonal U,V rotate space

Topic: Singular Value Decomposition
Track: math | Level: advanced`
        },
        {
          id: `svd-lowrank`,
          title: `Low-Rank Approximation`,
          content: `**Low-Rank Approximation** — what you need to know:

- **Core idea:** Factor matrices with SVD for compression, pseudoinverse, and low-rank approximation.
- **Level (advanced):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Eckart-Young: best rank-k approximation A_k = ∑_{i=1}^k σ_i u_i v_iᵀ minimizes ||A−A_k||_F. Truncate small σ for compression/denoising. **Effective rank** from σ decay. Image compression keeps top k singular values. Noise often in small σ components. Recommender matrix factorization approximates R≈UVᵀ low rank. Choose k via scree plot of σ or cumulative energy ∑σ_i²/∑σ². Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Low-Rank Approximation** directly affects how confidently you can build, debug, and ship math projects.
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
            `A_k = ∑_{i=1}^k σ_i u_i v_iᵀ`,
            `min ||A − A_k||_F over rank k`,
            `Energy: ∑_{i=1}^k σ_i² / ∑ σ_i²`,
            `Truncation = denoising`,
            `Matrix factorization ≈ low-rank SVD`
          ],
          diagram: `σ1 ████████ large
   σ2 ████
   σ3 ██
   σ4 █ noise
   σ5 ░ truncate here
   keep top k for compression`,
          keyPoints: [
            `Best low-rank in Frobenius norm`,
            `Scree plot guides k`,
            `Energy fraction from σ²`,
            `Denoise by truncating tail`,
            `Netflix-style factorization`
          ],
          example: `import numpy as np
A = np.random.randn(50,20)
U,s,VT = np.linalg.svd(A, full_matrices=False)
k=5
Ak = (U[:,:k]*s[:k]) @ VT[:k]
print("Fro err:", np.linalg.norm(A-Ak,"fro"))`,
          output: `Fro err: minimized for rank 5`,
          pseudoCode: `CONCEPT: Low-Rank Approximation

Key relationships:
  A_k = ∑_{i=1}^k σ_i u_i v_iᵀ
  min ||A − A_k||_F over rank k
  Energy: ∑_{i=1}^k σ_i² / ∑ σ_i²
  Truncation = denoising
  Matrix factorization ≈ low-rank SVD

Visual summary:
  σ1 ████████ large
  σ2 ████
  σ3 ██
  σ4 █ noise
  σ5 ░ truncate here
  keep top k for compression

Study checklist:
  1. Best low-rank in Frobenius norm
  2. Scree plot guides k
  3. Energy fraction from σ²
  4. Denoise by truncating tail
  5. Netflix-style factorization

Topic: Singular Value Decomposition
Track: math | Level: advanced`
        },
        {
          id: `svd-pinv`,
          title: `SVD & Pseudo-Inverse`,
          content: `**SVD & Pseudo-Inverse** — what you need to know:

- **Core idea:** Factor matrices with SVD for compression, pseudoinverse, and low-rank approximation.
- **Level (advanced):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

A⁺=VΣ⁺Uᵀ inverts nonzero σ. Solves least squares stably. Condition number κ(A)=σ_max/σ_min. Tiny σ_min → ill-conditioned—regularize via Tikhonov or truncate. np.linalg.lstsq uses SVD internally. Solve Ax=b for rank-deficient via pinv. Compare solve vs pinv on well-conditioned vs ill-conditioned systems to see numerical differences. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **SVD & Pseudo-Inverse** directly affects how confidently you can build, debug, and ship math projects.
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
            `A⁺ = V Σ⁺ Uᵀ`,
            `κ(A) = σ_max / σ_min`,
            `Tiny σ → ill-conditioned`,
            `lstsq uses SVD`,
            `Truncate σ for regularization`
          ],
          diagram: `σ spectrum:
   σ_max ─────────────
   σ_min ─ (small gap → large κ)
   κ large: sensitive to noise`,
          keyPoints: [
            `Condition number from σ ratio`,
            `Pinv inverts only large σ`,
            `Truncate = regularized inverse`,
            `Prefer lstsq over normal eq`,
            `SVD reveals numerical rank`
          ],
          example: `import numpy as np
A = np.array([[1,1],[1,1.0001],[1,0]])
print("cond:", np.linalg.cond(A))
print("pinv solve:", np.linalg.pinv(A)@[3,3,1])`,
          output: `ill-conditioned demo`,
          pseudoCode: `CONCEPT: SVD & Pseudo-Inverse

Key relationships:
  A⁺ = V Σ⁺ Uᵀ
  κ(A) = σ_max / σ_min
  Tiny σ → ill-conditioned
  lstsq uses SVD
  Truncate σ for regularization

Visual summary:
  σ spectrum:
  σ_max ─────────────
  σ_min ─ (small gap → large κ)
  κ large: sensitive to noise

Study checklist:
  1. Condition number from σ ratio
  2. Pinv inverts only large σ
  3. Truncate = regularized inverse
  4. Prefer lstsq over normal eq
  5. SVD reveals numerical rank

Topic: Singular Value Decomposition
Track: math | Level: advanced`
        },
        {
          id: `svd-ml`,
          title: `SVD in ML Pipelines`,
          content: `**SVD in ML Pipelines** — what you need to know:

- **Core idea:** Factor matrices with SVD for compression, pseudoinverse, and low-rank approximation.
- **Level (advanced):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Latent Semantic Analysis: SVD on term-document matrix. Collaborative filtering: SVD on rating matrix. PCA via SVD of centered X: faster than XᵀX for tall matrices. np.linalg.svd(X, full_matrices=False) on n×p data. Neural network weight SVD for compression. Randomized SVD (sklearn) for huge sparse matrices. Understanding SVD clarifies why truncated decompositions reduce parameters while preserving structure.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **SVD in ML Pipelines** directly affects how confidently you can build, debug, and ship math projects.
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
            `PCA via SVD of centered X`,
            `TruncatedSVD in sklearn`,
            `Word embeddings from term-doc SVD`,
            `Weight compression via SVD layers`,
            `Randomized SVD for scale`
          ],
          diagram: `Rating matrix R ≈ U Vᵀ
   users × items
   low rank captures taste
   missing entries filled by UVᵀ`,
          keyPoints: [
            `SVD faster than XᵀX for tall X`,
            `TruncatedSVD for dimension reduction`,
            `Matrix completion uses low rank`,
            `Compress neural weights with SVD`,
            `Randomized algorithms for big data`
          ],
          example: `import numpy as np
X = np.random.randn(1000,10)
X -= X.mean(0)
U,s,VT = np.linalg.svd(X, full_matrices=False)
X2 = (U[:,:3]*s[:3]) @ VT[:3]
print("shape reduced:", X2.shape, "var kept:", (s[:3]**2).sum()/(s**2).sum())`,
          output: `variance retained`,
          pseudoCode: `CONCEPT: SVD in ML Pipelines

Key relationships:
  PCA via SVD of centered X
  TruncatedSVD in sklearn
  Word embeddings from term-doc SVD
  Weight compression via SVD layers
  Randomized SVD for scale

Visual summary:
  Rating matrix R ≈ U Vᵀ
  users × items
  low rank captures taste
  missing entries filled by UVᵀ

Study checklist:
  1. SVD faster than XᵀX for tall X
  2. TruncatedSVD for dimension reduction
  3. Matrix completion uses low rank
  4. Compress neural weights with SVD
  5. Randomized algorithms for big data

Topic: Singular Value Decomposition
Track: math | Level: advanced`
        },
        {
          id: `math-svd-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Singular Value Decomposition** sits in the **math** track of the Data Science Master curriculum. Factor matrices with SVD for compression, pseudoinverse, and low-rank approximation.

**Theoretical foundation:**

- Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters.
- Each branch connects directly to numpy operations and loss functions.

For **math-svd**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the advanced level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
          example: `# Concept check for Singular Value Decomposition
meta = {"topic_id": "math-svd", "track": "math", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-svd math advanced`,
          keyPoints: [
            `Core theory of Singular Value Decomposition ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Singular Value Decomposition ties to the math track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Singular Value Decomposition
Track: math | Level: advanced`
        },
        {
          id: `math-svd-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Singular Value Decomposition**. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **math-svd**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for math-svd
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-svd", "Singular Value Decomposition")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-svd Singular`,
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

Topic: Singular Value Decomposition
Track: math | Level: advanced`
        },
        {
          id: `math-svd-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Singular Value Decomposition** often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on **math-svd**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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

debug_step("math-svd", "Singular Value Decomposition")
debug_step("section_count", 4)`,
          output: `[math-svd] 'Singular Value Decomposition' (str)
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

Topic: Singular Value Decomposition
Track: math | Level: advanced`
        },
        {
          id: `math-svd-real-world`,
          title: `Real-World Applications`,
          content: `**Singular Value Decomposition** shows up wherever **math** skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around **math-svd** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Singular Value Decomposition
skills = ["math", "advanced", "math-svd"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, advanced, math-svd`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Singular Value Decomposition to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Singular Value Decomposition to adjacent topics in the same track

Topic: Singular Value Decomposition
Track: math | Level: advanced`
        }
      ],
      exercises: [
        {
          id: `ex-svd-1`,
          question: `SVD of [[1,2],[3,4]]; print singular values.`,
          solution: `import numpy as np
print(np.linalg.svd([[1,2],[3,4]], compute_uv=False))`,
          difficulty: `easy`
        },
        {
          id: `ex-svd-2`,
          question: `Rank-1 approx of [[1,2],[3,4]] via first SVD term.`,
          solution: `import numpy as np
A=np.array([[1.,2.],[3.,4.]]); U,s,VT=np.linalg.svd(A)
A1=s[0]*np.outer(U[:,0],VT[0]); print(np.round(A1,2))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 124,
      module: `module-math-03`,
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
      id: `math-pca-math`,
      title: `PCA Mathematics`,
      description: `Principal component analysis as variance maximization and spectral decomposition.`,
      level: `advanced`,
      track: `math`,
      sections: [
        {
          id: `pca-goal`,
          title: `Variance Maximization`,
          content: `**Variance Maximization** — what you need to know:

- **Core idea:** Principal component analysis as variance maximization and spectral decomposition.
- **Level (advanced):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

PCA finds unit vector w maximizing Var(Xw)=wᵀΣw subject to ||w||=1. Solution: w = top eigenvector of covariance Σ. Second PC orthogonal to first, maximizes remaining variance. Iteratively: eigenvectors of Σ sorted by λ. Equivalent to SVD of centered data matrix. Minimizes reconstruction error of rank-k projection. Geometric: rotate to align with max spread axes. No labels needed—unsupervised linear dimensionality reduction.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Variance Maximization** directly affects how confidently you can build, debug, and ship math projects.
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
            `max wᵀΣw s.t. ||w||=1`,
            `Solution w = eigenvector of Σ`,
            `λ = variance along PC`,
            `PCs orthogonal for symmetric Σ`,
            `Equivalent: SVD of centered X`
          ],
          diagram: `scatter cloud:
      ↗ PC1 (max spread)
     ↗ PC2`,
          keyPoints: [
            `First PC = max variance direction`,
            `Covariance eigenvectors = PCs`,
            `Orthogonal PCs decorrelate`,
            `Unsupervised—no labels`,
            `SVD on X avoids Σ explicitly`
          ],
          example: `import numpy as np
X = np.random.randn(200,2)
X[:,1] = 0.5*X[:,0] + 0.5*np.random.randn(200)
X -= X.mean(0)
C = X.T@X/200
w, v = np.linalg.eigh(C)
print("top PC:", v[:,np.argmax(w)])`,
          output: `top PC direction`,
          pseudoCode: `CONCEPT: Variance Maximization

Key relationships:
  max wᵀΣw s.t. ||w||=1
  Solution w = eigenvector of Σ
  λ = variance along PC
  PCs orthogonal for symmetric Σ
  Equivalent: SVD of centered X

Visual summary:
  scatter cloud:
  ↗ PC1 (max spread)
  ↗ PC2

Study checklist:
  1. First PC = max variance direction
  2. Covariance eigenvectors = PCs
  3. Orthogonal PCs decorrelate
  4. Unsupervised—no labels
  5. SVD on X avoids Σ explicitly

Topic: PCA Mathematics
Track: math | Level: advanced`
        },
        {
          id: `pca-proj`,
          title: `Projection & Reconstruction`,
          content: `**Projection & Reconstruction** — what you need to know:

- **Core idea:** Principal component analysis as variance maximization and spectral decomposition.
- **Level (advanced):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Project x to k dims: z = W_kᵀ x where W_k columns top k eigenvectors. Reconstruct x̂ = W_k z = W_k W_kᵀ x. Reconstruction error ||x−x̂||² sum of trailing eigenvalues ∑_{i>k}λ_i. Mean centering essential before PCA. Explained variance ratio guides k. Whitened coords: z_i = w_iᵀx/√λ_i have unit variance. Biplot visualizes samples and feature loadings together. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Projection & Reconstruction** directly affects how confidently you can build, debug, and ship math projects.
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
            `z = W_kᵀ x (projection)`,
            `x̂ = W_k W_kᵀ x (reconstruction)`,
            `Error = ∑_{i>k} λ_i`,
            `Explained var = λ_i / ∑λ_j`,
            `Whitening: divide by √λ_i`
          ],
          diagram: `x ──W_kᵀ──→ z (k-dim)
   x̂ ←─W_k─── z
   info lost = tail λ`,
          keyPoints: [
            `Center data first`,
            `Lower k → more compression`,
            `Reconstruction error measurable`,
            `Whitening for ML inputs`,
            `Loadings show feature weights`
          ],
          example: `import numpy as np
X = np.random.randn(50,5); X -= X.mean(0)
U,s,VT = np.linalg.svd(X, full_matrices=False)
W = VT[:2].T
Z = X@W
Xhat = Z@W.T
print("MSE:", np.mean((X-Xhat)**2))`,
          output: `MSE from truncated`,
          pseudoCode: `CONCEPT: Projection & Reconstruction

Key relationships:
  z = W_kᵀ x (projection)
  x̂ = W_k W_kᵀ x (reconstruction)
  Error = ∑_{i>k} λ_i
  Explained var = λ_i / ∑λ_j
  Whitening: divide by √λ_i

Visual summary:
  x ──W_kᵀ──→ z (k-dim)
  x̂ ←─W_k─── z
  info lost = tail λ

Study checklist:
  1. Center data first
  2. Lower k → more compression
  3. Reconstruction error measurable
  4. Whitening for ML inputs
  5. Loadings show feature weights

Topic: PCA Mathematics
Track: math | Level: advanced`
        },
        {
          id: `pca-kernel`,
          title: `Kernel PCA Preview`,
          content: `**Kernel PCA Preview** — what you need to know:

- **Core idea:** Principal component analysis as variance maximization and spectral decomposition.
- **Level (advanced):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Kernel PCA applies PCA in feature space via kernel matrix K_ij=K(x_i,x_j) without explicit φ(x). Center K: K̃ = H K H with H=I−11ᵀ/n. Eigenvectors of K̃ give nonlinear PCs. Captures nonlinear structure linear PCA misses. Computationally O(n³)— costly for large n. Connection to spectral methods and graph embeddings. Choose kernel (RBF, polynomial) controls implicit feature space geometry. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Kernel PCA Preview** directly affects how confidently you can build, debug, and ship math projects.
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
            `K_ij = K(x_i, x_j)`,
            `K̃ = H K H (centered kernel)`,
            `Eigen K̃ → nonlinear PCs`,
            `Implicit φ via kernel trick`,
            `O(n³) eigen problem`
          ],
          diagram: `Linear PCA: straight projection
   Kernel PCA: curved manifold
    ·    ·  ← bend into φ space`,
          keyPoints: [
            `Kernel avoids explicit φ`,
            `Center kernel matrix`,
            `Nonlinear structure capture`,
            `Scales poorly with n`,
            `Related to RBF embeddings`
          ],
          example: `import numpy as np
from sklearn.metrics.pairwise import rbf_kernel
X = np.random.randn(30,3)
K = rbf_kernel(X)
H = np.eye(30) - np.ones((30,30))/30
Kc = H@K@H
w = np.linalg.eigh(Kc)[0]
print("top eig:", np.sort(w)[-3:])`,
          output: `top kernel eigenvalues`,
          pseudoCode: `CONCEPT: Kernel PCA Preview

Key relationships:
  K_ij = K(x_i, x_j)
  K̃ = H K H (centered kernel)
  Eigen K̃ → nonlinear PCs
  Implicit φ via kernel trick
  O(n³) eigen problem

Visual summary:
  Linear PCA: straight projection
  Kernel PCA: curved manifold
  ·    ·  ← bend into φ space

Study checklist:
  1. Kernel avoids explicit φ
  2. Center kernel matrix
  3. Nonlinear structure capture
  4. Scales poorly with n
  5. Related to RBF embeddings

Topic: PCA Mathematics
Track: math | Level: advanced`
        },
        {
          id: `pca-practice`,
          title: `PCA Practical Considerations`,
          content: `**PCA Practical Considerations** — what you need to know:

- **Core idea:** Principal component analysis as variance maximization and spectral decomposition.
- **Level (advanced):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Scale features before PCA if units differ—or PCA chases largest-scale feature. Correlation matrix PCA when variables standardized. Incremental PCA for streaming/large data. Randomized PCA approximate top components fast. Interpret loadings: which features drive each PC. Beware PCA on mixed categorical/numeric without encoding. For visualization, project to PC1-PC2. Cumulative variance plot selects k for 95% retention common in pipelines.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **PCA Practical Considerations** directly affects how confidently you can build, debug, and ship math projects.
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
            `Standardize if scales differ`,
            `Correlation PCA after z-score`,
            `IncrementalPCA for big data`,
            `95% variance rule for k`,
            `Loadings interpret feature contribution`
          ],
          diagram: `unscaled trap:
   feature A: 0-1
   feature B: 0-1000
   PC1 ≈ B only!
   → standardize first`,
          keyPoints: [
            `Always consider scaling`,
            `Loadings aid interpretation`,
            `Incremental for memory limits`,
            `95% rule common default`,
            `PCA linear—nonlinear needs kernel`
          ],
          example: `import numpy as np
from sklearn.preprocessing import StandardScaler
X = np.column_stack([np.random.rand(100), np.random.rand(100)*1000])
Xs = StandardScaler().fit_transform(X)
print("PC1 loadings raw vs scaled differ greatly")`,
          output: `scaling matters`,
          pseudoCode: `CONCEPT: PCA Practical Considerations

Key relationships:
  Standardize if scales differ
  Correlation PCA after z-score
  IncrementalPCA for big data
  95% variance rule for k
  Loadings interpret feature contribution

Visual summary:
  unscaled trap:
  feature A: 0-1
  feature B: 0-1000
  PC1 ≈ B only!
  → standardize first

Study checklist:
  1. Always consider scaling
  2. Loadings aid interpretation
  3. Incremental for memory limits
  4. 95% rule common default
  5. PCA linear—nonlinear needs kernel

Topic: PCA Mathematics
Track: math | Level: advanced`
        },
        {
          id: `math-pca-math-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**PCA Mathematics** sits in the **math** track of the Data Science Master curriculum. Principal component analysis as variance maximization and spectral decomposition.

**Theoretical foundation:**

- Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters.
- Each branch connects directly to numpy operations and loss functions.

For **math-pca-math**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the advanced level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
          example: `# Concept check for PCA Mathematics
meta = {"topic_id": "math-pca-math", "track": "math", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-pca-math math advanced`,
          keyPoints: [
            `Core theory of PCA Mathematics ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of PCA Mathematics ties to the math track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: PCA Mathematics
Track: math | Level: advanced`
        },
        {
          id: `math-pca-math-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **PCA Mathematics**. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **math-pca-math**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for math-pca-math
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-pca-math", "PCA Mathematics")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-pca-math PCA`,
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

Topic: PCA Mathematics
Track: math | Level: advanced`
        },
        {
          id: `math-pca-math-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **PCA Mathematics** often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on **math-pca-math**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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

debug_step("math-pca-math", "PCA Mathematics")
debug_step("section_count", 4)`,
          output: `[math-pca-math] 'PCA Mathematics' (str)
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

Topic: PCA Mathematics
Track: math | Level: advanced`
        },
        {
          id: `math-pca-math-real-world`,
          title: `Real-World Applications`,
          content: `**PCA Mathematics** shows up wherever **math** skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around **math-pca-math** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for PCA Mathematics
skills = ["math", "advanced", "math-pca-math"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, advanced, math-pca-math`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect PCA Mathematics to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect PCA Mathematics to adjacent topics in the same track

Topic: PCA Mathematics
Track: math | Level: advanced`
        }
      ],
      exercises: [
        {
          id: `ex-pca-1`,
          question: `PCA on 2D correlated data; print variance ratio of PC1.`,
          solution: `import numpy as np
X=np.random.randn(500,2); X[:,1]=X[:,0]+0.1*np.random.randn(500)
X-=X.mean(0); s=np.linalg.svd(X,compute_uv=False)
print((s[0]**2)/(s**2).sum())`,
          difficulty: `easy`
        },
        {
          id: `ex-pca-2`,
          question: `Project 3D random points to 2D via top-2 SVD components.`,
          solution: `import numpy as np
X=np.random.randn(20,3); X-=X.mean(0)
U,s,VT=np.linalg.svd(X,full_matrices=False)
Z=(U[:,:2]*s[:2]); print(Z.shape)`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 124,
      module: `module-math-03`,
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
