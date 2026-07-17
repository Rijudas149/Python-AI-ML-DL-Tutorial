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
          content: `A **set** is an unordered collection of distinct objects. We write A = {1, 2, 3} and x ∈ A means x belongs to A. The empty set ∅ contains no elements. Subsets satisfy A ⊆ B when every element of A is in B. The **power set** P(A) is the set of all subsets; |P(A)| = 2^|A|. In data science, feature sets, label sets, and train/validation splits are all set-theoretic. Venn diagrams visualize unions and intersections. Countable vs uncountable sets matter when discussing discrete vs continuous random variables. Set-builder notation {x ∈ ℝ | x > 0} defines infinite sets compactly and appears in constraint definitions for optimization.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Sets and Membership** directly affects how confidently you can build, debug, and ship math projects.
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
            `A ∪ B = {x | x ∈ A or x ∈ B}`,
            `A ∩ B = {x | x ∈ A and x ∈ B}`,
            `A^c = {x ∈ U | x ∉ A}`,
            `|A ∪ B| = |A| + |B| − |A ∩ B|`,
            `P(A) = {S | S ⊆ A}`
          ],
          diagram: `Universal Set U
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
          pseudoCode: `CONCEPT: Sets and Membership

Key relationships:
  A ∪ B = {x | x ∈ A or x ∈ B}
  A ∩ B = {x | x ∈ A and x ∈ B}
  A^c = {x ∈ U | x ∉ A}
  |A ∪ B| = |A| + |B| − |A ∩ B|
  P(A) = {S | S ⊆ A}

Visual summary:
  Universal Set U
  │     │ A∩B│   │
  │  A only  B only│
  A∪B = entire shaded
  A∩B = center overlap

Study checklist:
  1. ∈ tests membership; ⊆ tests subset
  2. Union/intersection follow De Morgan laws
  3. Inclusion-exclusion prevents double counting
  4. Power set grows exponentially
  5. Sets formalize sample spaces in probability

Topic: Set Theory & Notation
Track: math | Level: beginner`
        },
        {
          id: `sets-ops`,
          title: `Set Operations in Practice`,
          content: `**Union** A ∪ B collects all elements from either set. **Intersection** A ∩ B keeps shared elements. **Difference** A \\ B removes B from A. **Symmetric difference** A △ B = (A ∪ B) \\ (A ∩ B). Cartesian product A × B = {(a,b) | a∈A, b∈B} pairs every element; |A×B| = |A|·|B|. These operations underpin SQL JOIN logic, multi-index combinations, and joint distributions. De Morgan: (A∪B)^c = A^c∩B^c. Disjoint sets have A∩B = ∅. A **partition** of U splits the universe into non-overlapping subsets whose union is U—used in stratified sampling and cross-validation folds.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Set Operations in Practice** directly affects how confidently you can build, debug, and ship math projects.
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
          pseudoCode: `CONCEPT: Set Operations in Practice

Key relationships:
  A \\ B = {x | x ∈ A, x ∉ B}
  A △ B = (A ∪ B) \\ (A ∩ B)
  |A × B| = |A| · |B|
  (A ∪ B)^c = A^c ∩ B^c
  Partition: ∪ P_i = U, P_i ∩ P_j = ∅ for i≠j

Visual summary:
  A = {1,2,3}     B = {3,4,5}
  A ∪ B = {1,2,3,4,5}
  A ∩ B = {3}
  A \\ B = {1,2}
  B \\ A = {4,5}
  A × B (ordered pairs):
  (1,3) (1,4) (1,5)
  (2,3) (2,4) (2,5)
  (3,3) (3,4) (3,5)
  → 3 × 3 = 9 pairs

Study checklist:
  1. Difference is not commutative
  2. Cartesian product size multiplies
  3. De Morgan helps simplify complements
  4. Partitions enable stratified splits
  5. Set ops mirror Boolean logic

Topic: Set Theory & Notation
Track: math | Level: beginner`
        },
        {
          id: `sets-functions`,
          title: `Sets as Function Domains`,
          content: `A **function** f: A → B maps each input in domain A to exactly one output in codomain B. The **image** f(A) = {f(x) | x∈A} ⊆ B. **Preimage** f⁻¹(S) = {x | f(x)∈S}. Injective (one-to-one): f(x₁)=f(x₂)⇒x₁=x₂. Surjective (onto): ∀y∈B, ∃x∈A with f(x)=y. Bijective functions are invertible. In ML, domain might be feature vectors ℝⁿ and codomain class labels or ℝ for regression. Restricting domain to training set prevents extrapolation errors. Understanding preimages defines level sets and decision boundaries geometrically.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Sets as Function Domains** directly affects how confidently you can build, debug, and ship math projects.
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
            `f: A → B maps each a ∈ A to f(a) ∈ B`,
            `Im(f) = {f(x) | x ∈ domain}`,
            `Injective: f(x₁) = f(x₂) ⇒ x₁ = x₂`,
            `Surjective: ∀ y ∈ B, ∃ x: f(x) = y`,
            `Bijective ⇔ invertible function exists`
          ],
          diagram: `Domain A          Codomain B
   │ 1 │──────────────→│ a │
   │ 3 │──┼───────────→│ c │
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
          pseudoCode: `CONCEPT: Sets as Function Domains

Key relationships:
  f: A → B maps each a ∈ A to f(a) ∈ B
  Im(f) = {f(x) | x ∈ domain}
  Injective: f(x₁) = f(x₂) ⇒ x₁ = x₂
  Surjective: ∀ y ∈ B, ∃ x: f(x) = y
  Bijective ⇔ invertible function exists

Visual summary:
  Domain A          Codomain B
  │ 1 │──────────────→│ a │
  │ 3 │──┼───────────→│ c │
  Each input → ONE output
  Multiple inputs may map to same output
  (not injective if 2,3 → same y)

Study checklist:
  1. Functions require unique outputs per input
  2. Image may be smaller than codomain
  3. Injectivity matters for invertible transforms
  4. Preimages define decision boundaries
  5. Domain restrictions affect model validity

Topic: Set Theory & Notation
Track: math | Level: beginner`
        },
        {
          id: `sets-counting`,
          title: `Counting & Cardinality`,
          content: `**Cardinality** |S| counts elements in finite sets. The **multiplication principle**: if task 1 has m ways and task 2 has n ways, combined tasks have m·n ways—explains |A×B|. **Permutations** P(n,k) = n!/(n−k)! when order matters. **Combinations** C(n,k) = n!/(k!(n−k)!) when order is irrelevant. Binomial coefficients appear in probability mass functions and the binomial theorem. Inclusion-exclusion generalizes to multiple overlapping sets. These formulas drive hyperparameter grid sizes, k-fold splits, and sampling without replacement in bootstrap methods.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Counting & Cardinality** directly affects how confidently you can build, debug, and ship math projects.
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
          pseudoCode: `CONCEPT: Counting & Cardinality

Key relationships:
  P(n,k) = n! / (n−k)!
  C(n,k) = n! / (k!(n−k)!)
  C(n,k) = C(n, n−k)
  ∑_{k=0}^n C(n,k) = 2^n
  |A ∪ B ∪ C| uses inclusion-exclusion

Visual summary:
  Choose 3 from {A,B,C,D}
  Combinations C(4,3)=4:
  ABC  ABD  ACD  BCD
  Permutations P(4,3)=24:
  ABC ACB BAC BCA ...
  n=4, k=3
  C(4,3) = 4!/(3!·1!) = 4
  P(4,3) = 4!/1! = 24

Study checklist:
  1. Combinations ignore order
  2. Permutations count ordered arrangements
  3. Binomial coeffs appear in Bernoulli trials
  4. Multiplication principle for pipelines
  5. Inclusion-exclusion for overlapping events

Topic: Set Theory & Notation
Track: math | Level: beginner`
        },
        {
          id: `math-sets-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Set Theory & Notation** sits in the **math** track of the Data Science Master curriculum. Master set operations, cardinality, and notation used throughout probability and linear algebra.

**Theoretical foundation:**

- Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters.
- Each branch connects directly to numpy operations and loss functions.

For **math-sets**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the beginner level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
          example: `# Concept check for Set Theory & Notation
meta = {"topic_id": "math-sets", "track": "math", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-sets math beginner`,
          keyPoints: [
            `Core theory of Set Theory & Notation ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Set Theory & Notation ties to the math track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Set Theory & Notation
Track: math | Level: beginner`
        },
        {
          id: `math-sets-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Set Theory & Notation**. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **math-sets**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for math-sets
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-sets", "Set Theory & Notation")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-sets Set`,
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

Topic: Set Theory & Notation
Track: math | Level: beginner`
        },
        {
          id: `math-sets-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Set Theory & Notation** often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on **math-sets**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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

debug_step("math-sets", "Set Theory & Notation")
debug_step("section_count", 4)`,
          output: `[math-sets] 'Set Theory & Notation' (str)
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

Topic: Set Theory & Notation
Track: math | Level: beginner`
        },
        {
          id: `math-sets-real-world`,
          title: `Real-World Applications`,
          content: `**Set Theory & Notation** shows up wherever **math** skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around **math-sets** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Set Theory & Notation
skills = ["math", "beginner", "math-sets"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, beginner, math-sets`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Set Theory & Notation to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Set Theory & Notation to adjacent topics in the same track

Topic: Set Theory & Notation
Track: math | Level: beginner`
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
      estimatedMinutes: 124,
      module: `module-math-01`,
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
      id: `math-functions`,
      title: `Functions & Graphs`,
      description: `Understand domains, ranges, composition, and inverse functions for modeling relationships.`,
      level: `beginner`,
      track: `math`,
      sections: [
        {
          id: `fn-basics`,
          title: `Function Definition & Notation`,
          content: `A real function f: D → ℝ assigns each x in domain D a unique output f(x). The **range** is the set of actual outputs. **Piecewise** functions define different rules on intervals. Even functions satisfy f(−x)=f(x); odd satisfy f(−x)=−f(x). Polynomials, exponentials, and rationals form the building blocks of loss landscapes. Vertical line test: any vertical line crosses graph at most once. Implicit functions like x²+y²=1 define curves. Parametric form (x(t), y(t)) describes trajectories in dynamical systems and animation of optimization paths.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Function Definition & Notation** directly affects how confidently you can build, debug, and ship math projects.
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
            `f(x) = ax + b (linear)`,
            `f(x) = ax² + bx + c (quadratic)`,
            `f(−x) = f(x) ⇒ even; f(−x) = −f(x) ⇒ odd`,
            `Range ⊆ codomain; image = actual outputs`,
            `(f∘g)(x) = f(g(x))`
          ],
          diagram: `y
        │   ╱  f(x)=2x+1
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
          pseudoCode: `CONCEPT: Function Definition & Notation

Key relationships:
  f(x) = ax + b (linear)
  f(x) = ax² + bx + c (quadratic)
  f(−x) = f(x) ⇒ even; f(−x) = −f(x) ⇒ odd
  Range ⊆ codomain; image = actual outputs
  (f∘g)(x) = f(g(x))

Visual summary:
  y
  │   ╱  f(x)=2x+1
  Domain: all x where defined
  Range: {f(x) : x ∈ domain}
  Vertical line test:
  │ crosses ≤ 1 point

Study checklist:
  1. Each input maps to exactly one output
  2. Domain restrictions prevent undefined ops
  3. Composition chains transformations
  4. Even/odd symmetry simplifies integrals
  5. Range may differ from codomain

Topic: Functions & Graphs
Track: math | Level: beginner`
        },
        {
          id: `fn-types`,
          title: `Common Function Families`,
          content: `**Linear** f(x)=mx+b has constant slope m. **Quadratic** ax²+bx+c opens up/down; vertex at x=−b/(2a). **Exponential** a·bˣ grows/decays; base e appears in continuous compounding and softmax. **Logarithmic** inverse of exponential; compresses large ranges. **Sigmoid** σ(x)=1/(1+e^(−x)) maps ℝ→(0,1) for probabilities. **ReLU** max(0,x) dominates deep networks. Rational functions have vertical asymptotes where denominator vanishes. Choosing the right family guides feature transforms and activation design in neural architectures.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Common Function Families** directly affects how confidently you can build, debug, and ship math projects.
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
          pseudoCode: `CONCEPT: Common Function Families

Key relationships:
  σ(x) = 1 / (1 + e^(−x))
  ReLU(x) = max(0, x)
  e^(a+b) = e^a · e^b
  log_b(x) = ln(x) / ln(b)
  Quadratic vertex: x = −b / (2a)

Visual summary:
  Linear      Quadratic     Sigmoid
  ╱           ∪            S-curve
  constant   one turn    bounded (0,1)
  slope      min/max
  ReLU: flat then ramp

Study checklist:
  1. Linear models = affine transforms
  2. Sigmoid squashes to probabilities
  3. ReLU enables sparse activations
  4. Exponentials model growth/decay
  5. Log transforms skewed data

Topic: Functions & Graphs
Track: math | Level: beginner`
        },
        {
          id: `fn-compose`,
          title: `Composition & Inverse`,
          content: `**Composition** (f∘g)(x)=f(g(x)) applies g then f. Order matters: f∘g ≠ g∘f generally. Identity I(x)=x satisfies f∘I=f. **Inverse** f⁻¹ satisfies f(f⁻¹(x))=x and f⁻¹(f(x))=x when f is bijective. ln and exp are inverses. In neural nets, layers compose: h=L_k∘...∘L_1. Chain rule (calculus) differentiates compositions. For invertible flows, log-det Jacobian tracks volume change. Finding inverses analytically is key to normalizing flows, inverse transforms for predictions, and understanding encoder-decoder architectures.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Composition & Inverse** directly affects how confidently you can build, debug, and ship math projects.
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
          pseudoCode: `CONCEPT: Composition & Inverse

Key relationships:
  (f ∘ g)(x) = f(g(x))
  f ∘ f⁻¹ = f⁻¹ ∘ f = I
  (f ∘ g)⁻¹ = g⁻¹ ∘ f⁻¹ (reverse order)
  Bijective ⇔ invertible on domain
  Chain: d/dx f(g(x)) = f'(g(x))·g'(x)

Visual summary:
  x ──g──→ g(x) ──f──→ f(g(x))
  (f∘g): apply g first, then f
  Inverse reverses arrows:
  x ←─f⁻¹─ y ←─g⁻¹─ z
  f(g(x))
  ↓ g
  ↓ f
  output

Study checklist:
  1. Composition order is critical
  2. Inverses undo transformations
  3. Only bijections have true inverses
  4. Neural nets are deep compositions
  5. Inverse order reverses on composition

Topic: Functions & Graphs
Track: math | Level: beginner`
        },
        {
          id: `fn-transforms`,
          title: `Functional Transforms in ML`,
          content: `Feature transforms map raw inputs to spaces where models learn easier. **Standardization** z=(x−μ)/σ centers and scales. **Min-max** maps to [0,1]. **Log1p** handles count data. **Box-Cox** stabilizes variance. Kernel tricks implicitly map to high-D via φ(x) without computing φ. Activation functions are pointwise nonlinear transforms. Invertible transforms enable density estimation. Always track whether transforms applied at train time must be reused at inference with saved μ, σ parameters to avoid train-serve skew and incorrect predictions in production.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Functional Transforms in ML** directly affects how confidently you can build, debug, and ship math projects.
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
          pseudoCode: `CONCEPT: Functional Transforms in ML

Key relationships:
  z = (x − μ) / σ
  x_norm = (x − min) / (max − min)
  log1p(x) = ln(1 + x)
  K(x,x') = ⟨φ(x), φ(x')⟩
  Inverse transform for predictions in original units

Visual summary:
  Raw x ──transform──→ z ──model──→ ŷ
  save μ, σ
  inference: same μ, σ
  Without inverse:
  predictions in wrong scale!

Study checklist:
  1. Fit transforms on training data only
  2. Store params for deployment
  3. Log handles heavy tails
  4. Kernels avoid explicit φ
  5. Inverse restores interpretability

Topic: Functions & Graphs
Track: math | Level: beginner`
        },
        {
          id: `math-functions-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Functions & Graphs** sits in the **math** track of the Data Science Master curriculum. Understand domains, ranges, composition, and inverse functions for modeling relationships.

**Theoretical foundation:**

- Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters.
- Each branch connects directly to numpy operations and loss functions.

For **math-functions**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the beginner level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
          example: `# Concept check for Functions & Graphs
meta = {"topic_id": "math-functions", "track": "math", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-functions math beginner`,
          keyPoints: [
            `Core theory of Functions & Graphs ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Functions & Graphs ties to the math track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Functions & Graphs
Track: math | Level: beginner`
        },
        {
          id: `math-functions-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Functions & Graphs**. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **math-functions**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for math-functions
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-functions", "Functions & Graphs")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-functions Functions`,
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

Topic: Functions & Graphs
Track: math | Level: beginner`
        },
        {
          id: `math-functions-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Functions & Graphs** often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on **math-functions**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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

debug_step("math-functions", "Functions & Graphs")
debug_step("section_count", 4)`,
          output: `[math-functions] 'Functions & Graphs' (str)
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

Topic: Functions & Graphs
Track: math | Level: beginner`
        },
        {
          id: `math-functions-real-world`,
          title: `Real-World Applications`,
          content: `**Functions & Graphs** shows up wherever **math** skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around **math-functions** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Functions & Graphs
skills = ["math", "beginner", "math-functions"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, beginner, math-functions`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Functions & Graphs to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Functions & Graphs to adjacent topics in the same track

Topic: Functions & Graphs
Track: math | Level: beginner`
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
      estimatedMinutes: 124,
      module: `module-math-01`,
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
      id: `math-logarithms`,
      title: `Logarithms & Exponentials`,
      description: `Master log rules, the natural base e, and exponential growth models used in loss functions and probabilities.`,
      level: `beginner`,
      track: `math`,
      sections: [
        {
          id: `log-def`,
          title: `Logarithm Definition`,
          content: `For b>0, b≠1, **log_b(x)** is the exponent y such that b^y = x. Equivalently: b^(log_b(x)) = x. **Natural log** ln(x)=log_e(x) where e≈2.71828. Domain: x>0. log_b(1)=0, log_b(b)=1. Logarithms convert multiplication to addition: log(ab)=log(a)+log(b). Division becomes subtraction; powers become multiplication. In ML, log-likelihood sums log probabilities for numerical stability. Cross-entropy uses log of predicted probabilities. Log scale visualizes data spanning orders of magnitude in plots and dashboards.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Logarithm Definition** directly affects how confidently you can build, debug, and ship math projects.
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
          pseudoCode: `CONCEPT: Logarithm Definition

Key relationships:
  b^y = x ⇔ y = log_b(x)
  ln(x) = log_e(x); e ≈ 2.71828
  log_b(xy) = log_b(x) + log_b(y)
  log_b(x^n) = n·log_b(x)
  Change of base: log_b(x) = ln(x) / ln(b)

Visual summary:
  b^y = x
  y = log_b(x)
  Example: 2^3 = 8
  log_2(8) = 3
  ln maps (0,∞) → (−∞,∞)
  y
  │    ╱ ln(x)
  1

Study checklist:
  1. Logs are inverse of exponentials
  2. Product rule enables log-sum tricks
  3. ln is standard in calculus/ML
  4. Domain strictly positive
  5. Log-likelihood replaces products with sums

Topic: Logarithms & Exponentials
Track: math | Level: beginner`
        },
        {
          id: `log-rules`,
          title: `Logarithm Rules & Identities`,
          content: `Key identities: log_b(x/y)=log_b(x)−log_b(y). log_b(1)=0. log_b(b)=1. **Change of base** log_b(x)=ln(x)/ln(b). ln(e^x)=x for all x; e^(ln(x))=x for x>0. Logarithmic differentiation handles products of functions. In information theory, −log(p) measures surprise in bits (base 2) or nats (base e). **Log-sum-exp** trick: ln(∑e^a_i)=max(a)+ln(∑e^(a_i−max)) prevents overflow in softmax denominators. Never take log of zero or negative numbers without complex extension.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Logarithm Rules & Identities** directly affects how confidently you can build, debug, and ship math projects.
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
          pseudoCode: `CONCEPT: Logarithm Rules & Identities

Key relationships:
  log(x/y) = log(x) − log(y)
  ln(e^x) = x
  e^(ln x) = x for x > 0
  ln∑e^a = max(a) + ln∑e^(a−max(a))
  −log(p) = self-information

Visual summary:
  log(ab) = log(a) + log(b)
  log(a/b) = log(a) - log(b)
  log(a^n) = n·log(a)
  Softmax stability:
  exp(1000) → overflow
  subtract max before exp:
  exp(a_i - max(a))

Study checklist:
  1. Product→sum prevents underflow
  2. Log-sum-exp stabilizes softmax
  3. Change of base for any log
  4. −log p measures information content
  5. Domain x>0 for real logs

Topic: Logarithms & Exponentials
Track: math | Level: beginner`
        },
        {
          id: `exp-models`,
          title: `Exponential Growth & Decay`,
          content: `Exponential model N(t)=N₀·e^(kt): k>0 growth, k<0 decay. **Half-life** t_{1/2}=ln(2)/|k|. Continuous compounding A=Pe^(rt). Softmax converts logits z to probabilities p_i=e^z_i/∑e^z_j. Temperature scaling divides logits by T before softmax. Learning rate schedules often use exponential decay η_t=η₀·γ^t. Radioactive decay and cooling follow exponentials. Log-linear plots reveal exponential trends as straight lines. Doubling time = ln(2)/k for growth processes.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Exponential Growth & Decay** directly affects how confidently you can build, debug, and ship math projects.
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
            `N(t) = N₀ · e^(kt)`,
            `Half-life: t_{1/2} = ln(2) / |k|`,
            `Softmax: p_i = e^z_i / ∑_j e^z_j`,
            `A = P · e^(rt)`,
            `η_t = η₀ · γ^t (LR decay)`
          ],
          diagram: `N(t)=N₀·e^(kt)
   k>0: growth ↗
   k<0: decay ↘
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
          pseudoCode: `CONCEPT: Exponential Growth & Decay

Key relationships:
  N(t) = N₀ · e^(kt)
  Half-life: t_{1/2} = ln(2) / |k|
  Softmax: p_i = e^z_i / ∑_j e^z_j
  A = P · e^(rt)
  η_t = η₀ · γ^t (LR decay)

Visual summary:
  N(t)=N₀·e^(kt)
  k>0: growth ↗
  k<0: decay ↘
  Half-life: 50% remaining

Study checklist:
  1. e is the natural growth base
  2. Softmax uses exponentials normalized
  3. Half-life from decay constant k
  4. Log-scale linearizes exponentials
  5. LR decay is exponential in steps

Topic: Logarithms & Exponentials
Track: math | Level: beginner`
        },
        {
          id: `log-ml`,
          title: `Logs in Machine Learning`,
          content: `**Log-likelihood** ℓ=∑log p(x_i|θ) replaces ∏p for stability. **Cross-entropy** H(p,q)=−∑p log q measures divergence from true p. Binary CE: −[y log ŷ+(1−y)log(1−ŷ)]. Log loss penalizes confident wrong predictions heavily. **Logit** is inverse sigmoid: logit(p)=ln(p/(1−p)). BCEWithLogitsLoss fuses sigmoid+log for numeric safety. Perplexity exp(average NLL) evaluates language models. Always clip probabilities away from 0 and 1 before log to avoid −∞ gradients during backpropagation.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Logs in Machine Learning** directly affects how confidently you can build, debug, and ship math projects.
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
          pseudoCode: `CONCEPT: Logs in Machine Learning

Key relationships:
  ℓ = ∑_i log p(x_i | θ)
  H(p,q) = −∑ p(x) log q(x)
  BCE = −[y log ŷ + (1−y) log(1−ŷ)]
  logit(p) = ln(p / (1−p))
  Perplexity = exp(−(1/N)∑ log p)

Visual summary:
  Wrong confident prediction:
  ŷ=0.99, y=0 → −log(0.01) ≈ 4.6
  ŷ=0.6, y=0  → −log(0.4)  ≈ 0.9
  Log penalizes hubris!
  clip ŷ to [ε, 1−ε] before log

Study checklist:
  1. Log turns products to sums
  2. CE is standard classification loss
  3. Logit links probs to linear models
  4. Clip before log avoids −∞
  5. Perplexity uses exp of avg NLL

Topic: Logarithms & Exponentials
Track: math | Level: beginner`
        },
        {
          id: `math-logarithms-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Logarithms & Exponentials** sits in the **math** track of the Data Science Master curriculum. Master log rules, the natural base e, and exponential growth models used in loss functions and probabilities.

**Theoretical foundation:**

- Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters.
- Each branch connects directly to numpy operations and loss functions.

For **math-logarithms**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the beginner level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
          example: `# Concept check for Logarithms & Exponentials
meta = {"topic_id": "math-logarithms", "track": "math", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-logarithms math beginner`,
          keyPoints: [
            `Core theory of Logarithms & Exponentials ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Logarithms & Exponentials ties to the math track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Logarithms & Exponentials
Track: math | Level: beginner`
        },
        {
          id: `math-logarithms-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Logarithms & Exponentials**. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **math-logarithms**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for math-logarithms
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-logarithms", "Logarithms & Exponentials")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-logarithms Logarithms`,
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

Topic: Logarithms & Exponentials
Track: math | Level: beginner`
        },
        {
          id: `math-logarithms-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Logarithms & Exponentials** often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on **math-logarithms**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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

debug_step("math-logarithms", "Logarithms & Exponentials")
debug_step("section_count", 4)`,
          output: `[math-logarithms] 'Logarithms & Exponentials' (str)
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

Topic: Logarithms & Exponentials
Track: math | Level: beginner`
        },
        {
          id: `math-logarithms-real-world`,
          title: `Real-World Applications`,
          content: `**Logarithms & Exponentials** shows up wherever **math** skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around **math-logarithms** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Logarithms & Exponentials
skills = ["math", "beginner", "math-logarithms"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, beginner, math-logarithms`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Logarithms & Exponentials to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Logarithms & Exponentials to adjacent topics in the same track

Topic: Logarithms & Exponentials
Track: math | Level: beginner`
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
      estimatedMinutes: 124,
      module: `module-math-01`,
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
      id: `math-sequences`,
      title: `Sequences & Series`,
      description: `Arithmetic and geometric sequences, convergence, and summation notation for iterative algorithms.`,
      level: `beginner`,
      track: `math`,
      sections: [
        {
          id: `seq-arith`,
          title: `Arithmetic Sequences`,
          content: `An **arithmetic sequence** has constant difference d: a_n = a₁ + (n−1)d. Sum of first n terms: S_n = n/2 · (2a₁ + (n−1)d) = n/2 · (a₁ + a_n). Used in linear schedules (add constant each step) and evenly spaced grids. In gradient descent with fixed step, parameter updates form arithmetic progression in gradient direction magnitude when gradient is constant. Indexing from 0: a_n = a₀ + n·d. Finite differences of linear sequences are constant. Warmup schedules often increase learning rate arithmetically before cosine decay.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Arithmetic Sequences** directly affects how confidently you can build, debug, and ship math projects.
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
          pseudoCode: `CONCEPT: Arithmetic Sequences

Key relationships:
  a_n = a₁ + (n−1)d
  d = a_{n+1} − a_n
  S_n = n(a₁ + a_n) / 2
  S_n = n(2a₁ + (n−1)d) / 2
  Linear schedule: x_n = x₀ + n·Δ

Visual summary:
  a_n = 2, 5, 8, 11, 14 ...
  d = 3
  n:  1   2   3   4   5
  2   5   8  11  14
  └──+3─+3─+3─+3──
  S_5 = 5/2·(2+14) = 40

Study checklist:
  1. Constant difference defines arithmetic
  2. Sum formula is O(1) not loop
  3. Linear LR warmup is arithmetic
  4. Grid search steps often arithmetic
  5. Index carefully: 0 vs 1 based

Topic: Sequences & Series
Track: math | Level: beginner`
        },
        {
          id: `seq-geom`,
          title: `Geometric Sequences`,
          content: `**Geometric sequence**: a_n = a₁·r^(n−1) with ratio r. Sum (r≠1): S_n = a₁(1−r^n)/(1−r). Infinite sum converges if |r|<1: S_∞ = a₁/(1−r). Exponential decay weights in EMA: s_t = β·s_{t−1}+(1−β)·x_t resembles geometric weighting of past observations. Learning rate decay η·γ^t is geometric. Ratio test for series convergence compares |a_{n+1}/a_n|. Compound interest multiplies by (1+r) each period—geometric growth familiar from finance.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Geometric Sequences** directly affects how confidently you can build, debug, and ship math projects.
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
          pseudoCode: `CONCEPT: Geometric Sequences

Key relationships:
  a_n = a₁ · r^(n−1)
  S_n = a₁(1 − r^n) / (1 − r), r ≠ 1
  S_∞ = a₁ / (1 − r) if |r| < 1
  EMA: s_t = β s_{t−1} + (1−β) x_t
  LR: η_t = η₀ · γ^t

Visual summary:
  r = 1/2: 8, 4, 2, 1, 0.5 ...
  each term × r
  8 → 4 → 2 → 1 → 0.5
  |r|<1: sum converges
  S∞ = 8/(1-0.5) = 16
  r>1: diverges

Study checklist:
  1. Ratio r multiplies each term
  2. |r|<1 needed for infinite sum
  3. EMA uses geometric smoothing
  4. LR geometric decay common
  5. Geometric ↔ exponential link

Topic: Sequences & Series
Track: math | Level: beginner`
        },
        {
          id: `seq-series`,
          title: `Series & Sigma Notation`,
          content: `**Series** ∑_{k=1}^n a_k sums sequence terms. **Telescoping** series cancel intermediate terms. **Harmonic** H_n=∑_{k=1}^n 1/k diverges slowly. **Geometric series** ∑r^k converges for |r|<1. Partial sums track training loss over epochs. Big-O analysis sums operation counts. Riemann sums approximate integrals as ∑f(x_i)Δx. Sigma notation compactly expresses batch loss (1/m)∑L_i. Rearranging absolutely convergent series is safe; conditional convergence requires caution in theoretical analysis.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Series & Sigma Notation** directly affects how confidently you can build, debug, and ship math projects.
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
            `∑_{k=1}^n a_k = a_1 + a_2 + ... + a_n`,
            `∑_{k=0}^∞ r^k = 1/(1−r), |r|<1`,
            `Batch loss: L = (1/m) ∑_{i=1}^m L_i`,
            `H_n = ∑_{k=1}^n 1/k ~ ln(n)`,
            `Riemann: ∫f ≈ ∑ f(x_i) Δx`
          ],
          diagram: `∑_{k=1}^5 k = 1+2+3+4+5 = 15
   Sigma notation:
        n
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
          pseudoCode: `CONCEPT: Series & Sigma Notation

Key relationships:
  ∑_{k=1}^n a_k = a_1 + a_2 + ... + a_n
  ∑_{k=0}^∞ r^k = 1/(1−r), |r|<1
  Batch loss: L = (1/m) ∑_{i=1}^m L_i
  H_n = ∑_{k=1}^n 1/k ~ ln(n)
  Riemann: ∫f ≈ ∑ f(x_i) Δx

Visual summary:
  ∑_{k=1}^5 k = 1+2+3+4+5 = 15
  Sigma notation:
  n
  /__
  k=1
  Expands to explicit sum
  Compact for proofs & code

Study checklist:
  1. Sigma notation standard in papers
  2. Partial sums monitor convergence
  3. Batch loss is mean over sum
  4. Geometric series closed form key
  5. Harmonic series diverges

Topic: Sequences & Series
Track: math | Level: beginner`
        },
        {
          id: `seq-ml`,
          title: `Sequences in Optimization`,
          content: `Iterative algorithms produce **parameter sequences** θ₀, θ₁, ... converging to θ*. **Fixed-point** iteration x_{n+1}=g(x_n). Cauchy criterion: terms get closer: |a_{n+1}−a_n|→0. Monotonic bounded sequences converge. Early stopping when validation loss sequence stops improving. Momentum accumulates velocity sequence. Cosine annealing schedules LR smoothly. Convergence rate: linear (error × c each step) vs quadratic (Newton). Plotting loss sequences diagnoses training health and guides hyperparameter tuning.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Sequences in Optimization** directly affects how confidently you can build, debug, and ship math projects.
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
            `θ_{t+1} = θ_t − η ∇L(θ_t)`,
            `Momentum: v_t = β v_{t−1} + ∇L`,
            `Cosine LR: η_t = η_min + ½(η_max−η_min)(1+cos(πt/T))`,
            `Early stop when val loss plateaus`,
            `Fixed point: x* = g(x*)`
          ],
          diagram: `Loss vs epoch:
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
          pseudoCode: `CONCEPT: Sequences in Optimization

Key relationships:
  θ_{t+1} = θ_t − η ∇L(θ_t)
  Momentum: v_t = β v_{t−1} + ∇L
  Cosine LR: η_t = η_min + ½(η_max−η_min)(1+cos(πt/T))
  Early stop when val loss plateaus
  Fixed point: x* = g(x*)

Visual summary:
  Loss vs epoch:
  │ ╲___ plateau
  └────────── epoch
  Good: steady decrease
  Bad: oscillate / diverge

Study checklist:
  1. Monitor sequences not single points
  2. Early stopping prevents overfit
  3. Schedule LR along iteration index
  4. Momentum smooths update sequence
  5. Convergence needs patience + tuning

Topic: Sequences & Series
Track: math | Level: beginner`
        },
        {
          id: `math-sequences-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Sequences & Series** sits in the **math** track of the Data Science Master curriculum. Arithmetic and geometric sequences, convergence, and summation notation for iterative algorithms.

**Theoretical foundation:**

- Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters.
- Each branch connects directly to numpy operations and loss functions.

For **math-sequences**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the beginner level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
          example: `# Concept check for Sequences & Series
meta = {"topic_id": "math-sequences", "track": "math", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-sequences math beginner`,
          keyPoints: [
            `Core theory of Sequences & Series ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Sequences & Series ties to the math track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Sequences & Series
Track: math | Level: beginner`
        },
        {
          id: `math-sequences-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Sequences & Series**. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **math-sequences**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for math-sequences
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-sequences", "Sequences & Series")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-sequences Sequences`,
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

Topic: Sequences & Series
Track: math | Level: beginner`
        },
        {
          id: `math-sequences-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Sequences & Series** often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on **math-sequences**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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

debug_step("math-sequences", "Sequences & Series")
debug_step("section_count", 4)`,
          output: `[math-sequences] 'Sequences & Series' (str)
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

Topic: Sequences & Series
Track: math | Level: beginner`
        },
        {
          id: `math-sequences-real-world`,
          title: `Real-World Applications`,
          content: `**Sequences & Series** shows up wherever **math** skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around **math-sequences** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Sequences & Series
skills = ["math", "beginner", "math-sequences"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, beginner, math-sequences`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Sequences & Series to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Sequences & Series to adjacent topics in the same track

Topic: Sequences & Series
Track: math | Level: beginner`
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
      estimatedMinutes: 124,
      module: `module-math-01`,
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
      id: `math-complex`,
      title: `Complex Numbers`,
      description: `Complex plane arithmetic, polar form, and Euler formula connecting trig to exponentials.`,
      level: `intermediate`,
      track: `math`,
      sections: [
        {
          id: `cx-basics`,
          title: `Complex Number Basics`,
          content: `A **complex number** z = a + bi where i² = −1. Real part Re(z)=a, imaginary Im(z)=b. **Complex plane** plots Re on x-axis, Im on y. Modulus |z| = √(a²+b²). Conjugate z̄ = a − bi satisfies z·z̄ = |z|². Division: multiply numerator and denominator by conjugate. Complex roots always exist: x²+1=0 has roots ±i. FFT uses complex exponentials to decompose signals. Some RNN stability analysis uses complex eigenvalues. Understanding the complex plane aids interpreting FFT bins and filter frequency responses.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Complex Number Basics** directly affects how confidently you can build, debug, and ship math projects.
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
            `z = a + bi, i² = −1`,
            `|z| = √(a² + b²)`,
            `z̄ = a − bi; z·z̄ = |z|²`,
            `Re(z) = a, Im(z) = b`,
            `Complex plane: (Re, Im) coordinates`
          ],
          diagram: `Im
         │    · z=a+bi
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
          pseudoCode: `CONCEPT: Complex Number Basics

Key relationships:
  z = a + bi, i² = −1
  |z| = √(a² + b²)
  z̄ = a − bi; z·z̄ = |z|²
  Re(z) = a, Im(z) = b
  Complex plane: (Re, Im) coordinates

Visual summary:
  Im
  │    · z=a+bi
  |z| = distance from origin

Study checklist:
  1. i² = −1 extends real algebra
  2. Modulus is Euclidean length
  3. Conjugate flips imaginary sign
  4. Complex plane aids visualization
  5. FFT relies on complex exponentials

Topic: Complex Numbers
Track: math | Level: intermediate`
        },
        {
          id: `cx-polar`,
          title: `Polar Form & Euler`,
          content: `Polar form: z = r(cos θ + i sin θ) = r·e^(iθ) where r=|z| and θ=arg(z). **Euler formula**: e^(iθ) = cos θ + i sin θ. Multiplication adds angles: r₁e^(iθ₁)·r₂e^(iθ₂) = r₁r₂e^(i(θ₁+θ₂)). De Moivre: (cos θ+i sin θ)^n = cos(nθ)+i sin(nθ). Phasors represent sinusoids in signal processing. Unit circle maps θ to e^(iθ). np.exp(1j*theta) computes efficiently. Euler identity e^(iπ)+1=0 connects five fundamental constants in one equation.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Polar Form & Euler** directly affects how confidently you can build, debug, and ship math projects.
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
          pseudoCode: `CONCEPT: Polar Form & Euler

Key relationships:
  z = r·e^(iθ) = r(cos θ + i sin θ)
  e^(iθ) = cos θ + i sin θ (Euler)
  e^(iπ) + 1 = 0 (Euler identity)
  arg(z) = θ = atan2(b, a)
  |z₁·z₂| = |z₁|·|z₂|; arg(z₁z₂) = arg(z₁)+arg(z₂)

Visual summary:
  Unit circle:
  Im
  │  e^(iπ/2)=i
  ─1───┼───1 Re
  │  e^(−iπ/2)=−i
  θ increases counterclockwise
  r=1 on unit circle

Study checklist:
  1. Polar form simplifies multiplication
  2. Euler links exp and trig
  3. arg uses atan2 for quadrant
  4. e^(iπ)+1=0 famous identity
  5. FFT = sum of e^(−i2πkn/N)

Topic: Complex Numbers
Track: math | Level: intermediate`
        },
        {
          id: `cx-ops`,
          title: `Complex Operations`,
          content: `**Complex Operations** — what you need to know:

- **Core idea:** Complex plane arithmetic, polar form, and Euler formula connecting trig to exponentials.
- **Level (intermediate):** Explain this to a colleague and implement it without copying blindly.
- **Goal:** Connect every definition to a concrete input, output, or evaluation metric.

Addition component-wise: (a+bi)+(c+di)=(a+c)+(b+d)i. Multiplication: (a+bi)(c+di)=(ac−bd)+(ad+bc)i. Division via conjugate rationalization. Powers use De Moivre or repeated multiplication. np.real, np.imag extract parts. Complex matrices appear in quantum ML analogies. Hermitian transpose A* combines conjugate and transpose. Eigenvalues of real matrices may be complex conjugate pairs. Stability analysis: |λ|<1 for discrete dynamical systems ensures bounded trajectories.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Complex Operations** directly affects how confidently you can build, debug, and ship math projects.
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
          pseudoCode: `CONCEPT: Complex Operations

Key relationships:
  (a+bi)(c+di) = (ac−bd) + (ad+bc)i
  z/w = z·w̄ / |w|²
  e^(iθ₁)·e^(iθ₂) = e^(i(θ₁+θ₂))
  A* = conjugate transpose
  |λ|<1 ⇒ stable discrete dynamics

Visual summary:
  Multiplication in polar:
  z1: r1∠θ1  ×  z2: r2∠θ2
  result: r1·r2 ∠ (θ1+θ2)
  lengths multiply
  angles add

Study checklist:
  1. Multiply in polar by adding angles
  2. Division subtracts angles
  3. Hermitian for complex inner products
  4. Complex eigenvalues come in conjugate pairs
  5. Magnitude of eigenvalue = growth rate

Topic: Complex Numbers
Track: math | Level: intermediate`
        },
        {
          id: `cx-fft`,
          title: `Complex Numbers in Signal & ML`,
          content: `**Discrete Fourier Transform** X_k = ∑_{n=0}^{N−1} x_n e^(−i2πkn/N) decomposes signals into frequency components. Convolution theorem: FFT(domain) multiplies in frequency domain. Spectral analysis of time series uses |X_k|. Complex activations appear in specialized architectures. Phase arg(X_k) carries timing information. np.fft.fft returns complex array. Understanding e^(iωt) as rotating vector clarifies periodic patterns in sequential data and audio feature extraction pipelines.

**Why this matters:**

- Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.
- Mastering **Complex Numbers in Signal & ML** directly affects how confidently you can build, debug, and ship math projects.
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
          pseudoCode: `CONCEPT: Complex Numbers in Signal & ML

Key relationships:
  X_k = ∑_{n=0}^{N−1} x_n e^(−i2πkn/N)
  F{f*g} = F{f}·F{g}
  |X_k| = magnitude at frequency k
  arg(X_k) = phase at frequency k
  Inverse FFT reconstructs signal from spectrum

Visual summary:
  Time domain     FFT     Frequency
  ~~~~ waveform  ───→   |X(k)| bars
  low k: slow trends
  high k: fast oscillations
  e^(−i2πkn/N) = rotate + sample

Study checklist:
  1. FFT is O(N log N) with fast algo
  2. Complex exponentials are DFT basis
  3. Magnitude spectrum common in features
  4. Phase matters for reconstruction
  5. Convolution via FFT saves compute

Topic: Complex Numbers
Track: math | Level: intermediate`
        },
        {
          id: `math-complex-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Complex Numbers** sits in the **math** track of the Data Science Master curriculum. Complex plane arithmetic, polar form, and Euler formula connecting trig to exponentials.

**Theoretical foundation:**

- Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters.
- Each branch connects directly to numpy operations and loss functions.

For **math-complex**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the intermediate level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:**

- Read this section once for overview, once for detail, then teach it aloud in two minutes without notes.
- That gap reveals what to revisit.`,
          example: `# Concept check for Complex Numbers
meta = {"topic_id": "math-complex", "track": "math", "level": "intermediate"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `math-complex math intermediate`,
          keyPoints: [
            `Core theory of Complex Numbers ties to the math track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Complex Numbers ties to the math track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Complex Numbers
Track: math | Level: intermediate`
        },
        {
          id: `math-complex-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Complex Numbers**. Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **math-complex**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

- 1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:**

- Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
          example: `# Idiomatic pattern snapshot for math-complex
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("math-complex", "Complex Numbers")
print(ref.topic_id, ref.title.split()[0])`,
          output: `math-complex Complex`,
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

Topic: Complex Numbers
Track: math | Level: intermediate`
        },
        {
          id: `math-complex-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Complex Numbers** often hit predictable walls. Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.

When stuck on **math-complex**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

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

debug_step("math-complex", "Complex Numbers")
debug_step("section_count", 4)`,
          output: `[math-complex] 'Complex Numbers' (str)
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

Topic: Complex Numbers
Track: math | Level: intermediate`
        },
        {
          id: `math-complex-real-world`,
          title: `Real-World Applications`,
          content: `**Complex Numbers** shows up wherever **math** skills meet business constraints. Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.

Teams shipping features around **math-complex** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:**

- Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:**

- Link this lesson to README entries and capstone modules later in the curriculum.
- One concrete project beats ten theoretical certificates.`,
          example: `# Portfolio bullet generator for Complex Numbers
skills = ["math", "intermediate", "math-complex"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: math, intermediate, math-complex`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Complex Numbers to adjacent topics in the same track`
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Complex Numbers to adjacent topics in the same track

Topic: Complex Numbers
Track: math | Level: intermediate`
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
      estimatedMinutes: 124,
      module: `module-math-01`,
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
