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
          content: `A **vector** v ∈ ℝⁿ is an ordered n-tuple (v₁, v₂, ..., vₙ). Geometrically, vectors represent magnitude and direction. **Vector addition** is component-wise: u+v = (u₁+v₁, ...).

**Scalar multiplication** cv scales each component. The **zero vector** 0 is the additive identity. Vectors in data science represent feature rows, embeddings, and gradients.

Column vs row vectors matter for matrix multiplication conventions. A **vector space** satisfies closure under addition and scalar multiplication with axioms from linear algebra.`,
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
          pseudoCode: `Vector Definition

v = (v₁, v₂, ..., vₙ) ∈ ℝⁿ
u + v = (u₁+v₁, ..., uₙ+vₙ)
cv = (cv₁, ..., cvₙ)
0 = (0, ..., 0)
Span{v₁,...,v_k} = all linear combinations

2D vector v = (3, 4)
y
│  ╱ |v|=5
tail at origin, head at (3,4)

1. Vectors are ordered tuples
2. Addition is component-wise
3. Scalars stretch/shrink vectors
4. Column vectors default in ML
5. Span is set of all combinations`
        },
        {
          id: `vec-norm`,
          title: `Norms & Distance`,
          content: `**L2 norm** (Euclidean): ||v||₂ = √(∑vᵢ²). **L1 norm**: ||v||₁ = ∑|vᵢ|. Distance d(u,v) = ||u−v||₂.

L2 norm relates to dot product: ||v||² = v·v. Regularization in ML uses L1 (Lasso) and L2 (Ridge) penalties. Cosine similarity uses normalized dot product. np.linalg.norm(v, ord=2) computes Euclidean norm efficiently for high-dimensional embeddings and batch feature normalization pipelines.`,
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
          pseudoCode: `Norms & Distance

||v||₂ = √(∑ vᵢ²)
||v||₁ = ∑ |vᵢ|
||v||∞ = max |vᵢ|
v̂ = v / ||v||₂
d(u,v) = ||u − v||₂

||v|| = length of arrow
/____|___
3
||v|| = √(3²+4²) = 5

1. L2 is standard Euclidean length
2. L1 encourages sparsity in ML
3. Unit vectors have norm 1
4. Distance is norm of difference
5. Norms measure vector size`
        },
        {
          id: `vec-span`,
          title: `Linear Combinations & Span`,
          content: `Linear combination: c₁v₁ + c₂v₂ + ... + c_k v_k. **Span** of vectors is all possible combinations. Vectors are **linearly independent** if no vector is a combination of others.

Basis: independent set spanning the space. Dimension = size of basis. In PCA, principal components form an orthonormal basis.

Feature columns spanning ℝⁿ determine rank of design matrix. Redundant features create linear dependence causing multicollinearity in regression.`,
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
          pseudoCode: `Linear Combinations & Span

c₁v₁ + ... + c_k v_k = linear combination
Span{v₁,...,v_k} ⊆ vector space
Independent: ∑cᵢvᵢ=0 ⇒ all cᵢ=0
Basis: independent + spanning
dim(V) = |basis|

v1 ────→  v2 ────→
span plane
Two independent vectors span ℝ²

1. Span is all weighted sums
2. Independence = no redundancy
3. Basis minimal spanning set
4. Rank = dimension of column space
5. Dependent columns → singular XᵀX`
        },
        {
          id: `vec-ml`,
          title: `Vectors in Data Science`,
          content: `Each data point is a feature vector x ∈ ℝᵈ. **Embeddings** map discrete IDs to dense vectors. **Gradients** ∇L are vectors pointing uphill in loss.

Batch stacking creates matrix X ∈ ℝ^{m×d}. Normalization scales feature vectors. Nearest neighbor search uses L2 distance in embedding space.

Word2vec learns vector representations where similar words are close. Vectorized numpy operations apply element-wise ops without Python loops for speed.`,
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
          pseudoCode: `Vectors in Data Science

x ∈ ℝᵈ feature vector
X ∈ ℝ^{m×d} design matrix
∇L ∈ ℝᵈ gradient vector
cos(θ) = (u·v)/(||u|| ||v||)
Embedding: id → ℝᵈ

Dataset as matrix:
x₁ ──→ row 1 of X
x₂ ──→ row 2 of X
x_m ──→ row m of X
columns = features
rows = samples

1. Rows often = samples in sklearn
2. Gradients same shape as params
3. Embeddings capture semantics
4. Vectorization speeds computation
5. Normalize features before distance`
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
      estimatedMinutes: 35,
      module: `module-math-02`,
      references: [
        {
          id: `mit-1806-linalg`,
          title: `MIT 18.06 Linear Algebra`,
          source: `MIT`,
          type: `course`,
          url: `https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/`,
          description: `Gilbert Strang's foundational linear algebra course used across ML.`
        },
        {
          id: `3blue1brown-linalg`,
          title: `Essence of Linear Algebra`,
          source: `3Blue1Brown`,
          type: `video`,
          url: `https://www.3blue1brown.com/topics/linear-algebra`,
          description: `Visual intuition for vectors, matrices, and transformations.`
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
          content: `**Dot product** u·v = ∑uᵢvᵢ = uᵀv for column vectors. Geometric: u·v = ||u|| ||v|| cos θ. Projects one vector onto another: proj_v(u) = (u·v/||v||²)v.

In ML, dot product scores attention queries against keys. Linear layer y=Wx+b computes dot products of rows of W with x plus bias. Positive dot product suggests aligned directions in embedding space.

Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
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
          pseudoCode: `Dot Product Definition

u · v = ∑ uᵢ vᵢ = uᵀv
u · v = ||u|| ||v|| cos θ
u · v = 0 ⇔ orthogonal (θ=90°)
proj_v(u) = (u·v / v·v) v
Wx = dot products of W rows with x

u · v = |u||v|cosθ
v
θ=0: cos=1, max dot
θ=90: cos=0, dot=0

1. Dot product sums pairwise products
2. Measures alignment via cosine
3. Zero dot = orthogonal
4. Linear layers are dot products
5. Attention uses scaled dot products`
        },
        {
          id: `dot-geom`,
          title: `Geometric Interpretation`,
          content: `Angle between vectors: cos θ = (u·v)/(||u|| ||v||). **Cosine similarity** ignores magnitude, focuses on direction—common for text embeddings. Cauchy-Schwarz: |u·v| ≤ ||u|| ||v||.

Triangle inequality on norms. Dot product positive when acute angle, negative when obtuse. Normalizing before dot gives cosine in [−1,1].

In recommendation systems, user and item embeddings with high cosine predict preference.`,
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
          pseudoCode: `Geometric Interpretation

cos θ = (u·v) / (||u|| ||v||)
|u·v| ≤ ||u|| ||v|| (Cauchy-Schwarz)
||u+v|| ≤ ||u|| + ||v||
cosine sim ∈ [−1, 1] after normalize
u·u = ||u||² ≥ 0

cosine similarity scale:
1.0  same direction  →→→
0.0  orthogonal      →↑
-1.0  opposite        →←
normalize then dot

1. Cosine ignores vector length
2. Cauchy-Schwarz bounds dot product
3. Sign of dot indicates angle type
4. Used in semantic search
5. Self-dot gives squared norm`
        },
        {
          id: `cross-3d`,
          title: `Cross Product in 3D`,
          content: `**Cross product** u×v ∈ ℝ³ perpendicular to both u and v. ||u×v|| = ||u|| ||v|| sin θ = area of parallelogram. Right-hand rule determines direction. u×v = −v×u anti-commutative. i×j=k standard basis.

Used in 3D graphics, torque, and normal vectors for surfaces. In 2D, pseudo-scalar u_x v_y − u_y v_x gives signed area.

Cross product less common in standard ML but appears in geometric deep learning and physics-informed nets.`,
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
          pseudoCode: `Cross Product in 3D

u × v ⟂ u and ⟂ v
||u × v|| = ||u|| ||v|| sin θ
u × v = −v × u
i × j = k (right-hand rule)
Area = ||u × v||

u × v points up from plane
/____
× = outward normal
right-hand rule:
curl fingers u→v, thumb = u×v

1. Cross product only in 3D (or 7D exotic)
2. Gives perpendicular vector
3. Magnitude = parallelogram area
4. Anti-commutative
5. Normals for 3D rendering`
        },
        {
          id: `dot-attn`,
          title: `Dot Products in Neural Networks`,
          content: `**Attention** score e_ij = q_i·k_j / √d measures query-key compatibility. Scaled dot prevents softmax saturation at large d. **Linear classification** sign(w·x + b) is perceptron.

Matrix multiply C=AB: C_ij = row_i(A)·col_j(B). GPU accelerates batched dot products. Kernel SVM uses implicit dot products in feature space.

Understanding dot products clarifies why weight initialization scale affects activation variance and training stability.`,
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
          pseudoCode: `Dot Products in Neural Networks

Attention: softmax(QKᵀ/√d) V
score_ij = q_i · k_j / √d
C_ij = A_i · B_j (matrix multiply)
Perceptron: sign(w·x + b)
K(x,x') = φ(x)·φ(x') kernel trick

Q  Kᵀ  →  scores  → softmax  →  weights
q1 · k1  q1 · k2  q1 · k3
q2 · k1  q2 · k2  q2 · k3
each cell = dot product

1. Matrix multiply = batch dots
2. Scale by √d in transformers
3. Softmax turns scores to weights
4. Linear layers are dot + bias
5. Kernel = dot in feature space`
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
      estimatedMinutes: 35,
      module: `module-math-02`,
      references: [
        {
          id: `mit-1806-linalg`,
          title: `MIT 18.06 Linear Algebra`,
          source: `MIT`,
          type: `course`,
          url: `https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/`,
          description: `Gilbert Strang's foundational linear algebra course used across ML.`
        },
        {
          id: `3blue1brown-linalg`,
          title: `Essence of Linear Algebra`,
          source: `3Blue1Brown`,
          type: `video`,
          url: `https://www.3blue1brown.com/topics/linear-algebra`,
          description: `Visual intuition for vectors, matrices, and transformations.`
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
          id: `cs231n-conv-notes`,
          title: `CS231n Convolutional Neural Networks`,
          source: `Stanford CS231n`,
          type: `course`,
          url: `https://cs231n.github.io/convolutional-networks/`,
          description: `Detailed notes on convolution, pooling, and spatial feature extraction.`
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
          content: `An m×n **matrix** A has m rows and n columns; entry A_ij at row i, column j. **Identity** I_n has 1s on diagonal. **Zero matrix** all zeros.

**Diagonal** matrix has off-diagonal zeros. Matrices represent linear transforms, datasets (samples×features), and weight layers. Transpose Aᵀ flips rows/columns.

Storage order (row-major in C/numpy) affects cache performance in large matrix ops.`,
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
          pseudoCode: `Matrix Structure

A ∈ ℝ^{m×n}; entry A_ij
(Aᵀ)_ij = A_ji
I_n: n×n identity
Symmetric: A = Aᵀ
Diagonal: A_ij=0 for i≠j

2×3 matrix A:
col1 col2 col3
r1 [ a11  a12  a13 ]
r2 [ a21  a22  a23 ]
m=2 rows, n=3 columns

1. First index = row, second = column
2. Transpose swaps indices
3. Identity leaves vectors unchanged
4. Symmetric matrices have real eigenvalues
5. Shape must align for multiply`
        },
        {
          id: `mat-mv`,
          title: `Matrix-Vector Multiplication`,
          content: `Ax for A∈ℝ^{m×n}, x∈ℝ^n produces y∈ℝ^m where y_i = ∑_j A_ij x_j = row_i(A)·x. Each output component is dot product of row with x. Geometrically, A transforms x to new space.

**Linear layer** in neural nets: y=Wx+b. Composition of transforms: (BA)x = B(Ax). Column picture: Ax = x₁(col₁) + x₂(col₂) + ... linear combination of columns.

Row picture: dot products of rows with x. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
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
          pseudoCode: `Matrix-Vector Multiplication

y = Ax, y_i = ∑_j A_ij x_j
Ax = x₁a₁ + x₂a₂ + ... (column view)
y_i = row_i(A) · x
(BA)x = B(Ax)
W ∈ ℝ^{out×in} for y=Wx

A (m×n)  ×  x (n×1)  =  y (m×1)
[ row1 ]     [x1]      [r1·x]
[ row2 ]  ·  [x2]  =   [r2·x]
[ ...  ]     [..]      [ ... ]

1. Columns of A span output space
2. Rows of A define hyperplanes
3. Shape: (m×n)(n×1)=(m×1)
4. Neural layer = matrix-vector + bias
5. Composition = matrix multiply`
        },
        {
          id: `mat-special`,
          title: `Special Matrices`,
          content: `**Orthogonal** Q: QᵀQ=I; preserves lengths and angles. **Positive definite** symmetric A with xᵀAx>0 for x≠0—Hessians at minima. **Toeplitz** constant diagonals in time series.

**Sparse** mostly zeros—efficient storage. **Stochastic** rows sum to 1—Markov chains. Understanding special structure enables faster algorithms (e.g., eigendecomposition for symmetric matrices always exists with real eigenvalues).`,
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
          pseudoCode: `Special Matrices

Orthogonal: QᵀQ = I
Symmetric: A = Aᵀ
PSD: xᵀAx ≥ 0 ∀x
Projection: P² = P
Stochastic: rows sum to 1

Orthogonal rotation Q:
x ──Q──→ Qx
||x|| = ||Qx||
length preserved
angles preserved

1. Orthogonal = rotation/reflection
2. Symmetric → real eigenvalues
3. PSD matrices define valid covariances
4. Sparse matrices save memory
5. Structure enables fast solvers`
        },
        {
          id: `mat-data`,
          title: `Matrices as Data Tables`,
          content: `Design matrix X ∈ ℝ^{n×p}: n samples, p features. Covariance Σ = (1/n)XᵀX (centered). Correlation from normalized covariance.

Batch tensor (batch, features) in deep learning. Missing values require imputation before matrix ops. One-hot encoding creates sparse binary columns.

Feature scaling applies column-wise transforms. Matrix view connects tabular data to linear algebra algorithms throughout sklearn and pytorch.`,
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
          pseudoCode: `Matrices as Data Tables

X ∈ ℝ^{n×p} design matrix
Σ = (1/n) X̃ᵀ X̃ (centered covariance)
y = Xβ + ε linear model
One-hot: identity columns per category
Batch: stack rows for mini-batch GD

X = features table
sample │ f1  f2  f3
1    │ 2.1 0.5 1
2    │ 1.8 0.3 0
3    │ 3.0 0.9 1
each row = one observation

1. Rows = samples in sklearn convention
2. Columns = features/variables
3. Center columns before covariance
4. Matrix form enables vectorized fit
5. Batches are submatrices of data`
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
      estimatedMinutes: 35,
      module: `module-math-02`,
      references: [
        {
          id: `mit-1806-linalg`,
          title: `MIT 18.06 Linear Algebra`,
          source: `MIT`,
          type: `course`,
          url: `https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/`,
          description: `Gilbert Strang's foundational linear algebra course used across ML.`
        },
        {
          id: `3blue1brown-linalg`,
          title: `Essence of Linear Algebra`,
          source: `3Blue1Brown`,
          type: `video`,
          url: `https://www.3blue1brown.com/topics/linear-algebra`,
          description: `Visual intuition for vectors, matrices, and transformations.`
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
      id: `math-matrix-ops`,
      title: `Matrix Operations`,
      description: `Matrix multiplication, transpose rules, and properties of matrix arithmetic.`,
      level: `intermediate`,
      track: `math`,
      sections: [
        {
          id: `mm-def`,
          title: `Matrix Multiplication`,
          content: `For A∈ℝ^{m×k}, B∈ℝ^{k×n}, product C=AB ∈ ℝ^{m×n} with C_ij = ∑_l A_il B_lj. **Inner dimensions must match** (k). NOT commutative: AB≠BA generally.

Distributive over addition. Each C_ij is dot product of row i of A with column j of B. Chain of layers composes weight matrices.

Strassen and blocked multiplication optimize large products on hardware. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
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
          pseudoCode: `Matrix Multiplication

C = AB, C_ij = ∑_l A_il B_lj
A: m×k, B: k×n → C: m×n
AB ≠ BA in general
(AB)C = A(BC)
(AB)ᵀ = BᵀAᵀ

(m×k) · (k×n) = (m×n)
A         B         C
[ * * ] · [ * * ] = [ * * ]
[ * * ]   [ * * ]   [ * * ]
[ * * ]
k must match inner dim

1. Inner dimension must align
2. Order matters in multiplication
3. Transpose reverses product order
4. Each entry = row·column dot
5. Composition of linear maps`
        },
        {
          id: `mm-prop`,
          title: `Transpose & Trace`,
          content: `**Transpose** (AB)ᵀ = BᵀAᵀ. **Trace** tr(A)=∑A_ii, sum of diagonal. tr(AB)=tr(BA). Frobenius norm ||A||_F = √(∑A_ij²) = √(tr(AᵀA)).

Transpose swaps row-column roles in gradients: ∂L/∂A = (∂L/∂B) Cᵀ when B=AC. In backprop, transpose appears when passing gradients backward through layers. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
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
          pseudoCode: `Transpose & Trace

(AB)ᵀ = BᵀAᵀ
tr(A) = ∑ A_ii
tr(AB) = tr(BA)
||A||_F = √(tr(AᵀA))
(Aᵀ)ᵀ = A

Transpose flip:
A = [1 2]     Aᵀ = [1 3]
[3 4]          [2 4]
rows become columns

1. Transpose reverses multiply order
2. Trace invariant under cyclic permute
3. Frobenius norm for matrix size
4. Symmetric matrices ↔ quadratic forms
5. Gradients use transpose heavily`
        },
        {
          id: `mm-inv-det`,
          title: `Preview: Inverse & Determinant`,
          content: `Square matrix A **invertible** if ∃A⁻¹ with AA⁻¹=I. det(A)≠0 iff invertible. det(AB)=det(A)det(B). Inverse of 2×2: (1/det)[[d,−b],[−c,a]]. Singular matrices collapse dimension—non-invertible transform.

Near-singular causes numerical instability. Condition number κ(A)=||A|| ||A⁻¹|| measures sensitivity. We'll deepen inverses and determinants in the next module; here we preview their role in solving Ax=b.`,
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
          pseudoCode: `Preview: Inverse & Determinant

AA⁻¹ = A⁻¹A = I
det(A) ≠ 0 ⇔ A invertible
det(AB) = det(A)det(B)
2×2: A⁻¹ = (1/det)[[d,-b],[-c,a]]
κ(A) = ||A|| · ||A⁻¹||

Invertible: full rank
x ──A──→ y
x ←─A⁻¹─ y
Singular: squashes dim
[ 1  2 ] → line, not plane
[ 2  4 ]   (det=0)

1. Inverse undoes linear map
2. Zero determinant = singular
3. Ill-conditioned = hard to invert
4. Rank deficient → no unique inverse
5. Preview for linear systems topic`
        },
        {
          id: `mm-nn`,
          title: `Matrix Ops in Neural Nets`,
          content: `Fully connected layer: h = σ(Wx+b). Backprop: ∂L/∂W = (∂L/∂H)ᵀ X. Weight matrices learned by gradient descent.

Conv layers use structured sparse matrices (Toeplitz). Attention: softmax(QKᵀ/√d)V. Residual: y=x+F(x) helps gradient flow.

Xavier/He init scales W variance by fan-in/out. Matrix dimensions must align through network—shape debugging is essential skill. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
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
          pseudoCode: `Matrix Ops in Neural Nets

h = σ(Wx + b)
Batch: H = σ(XWᵀ + B)
Attention: softmax(QKᵀ/√d)V
Residual: y = x + F(x)
He init: W ~ N(0, 2/fan_in)

Layer stack:
x → W1 → σ → W2 → σ → ... → ŷ
n0   n1      n2
W1: n1×n0
W2: n2×n1

1. Check shapes at every layer
2. Batch dim adds leading axis
3. Transpose in batch forward pass
4. Init scale affects training
5. Residual eases deep gradients`
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
      estimatedMinutes: 35,
      module: `module-math-02`,
      references: [
        {
          id: `mit-1806-linalg`,
          title: `MIT 18.06 Linear Algebra`,
          source: `MIT`,
          type: `course`,
          url: `https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/`,
          description: `Gilbert Strang's foundational linear algebra course used across ML.`
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
          id: `3blue1brown-linalg`,
          title: `Essence of Linear Algebra`,
          source: `3Blue1Brown`,
          type: `video`,
          url: `https://www.3blue1brown.com/topics/linear-algebra`,
          description: `Visual intuition for vectors, matrices, and transformations.`
        },
        {
          id: `berkeley-cs189`,
          title: `Berkeley CS189/289A — Introduction to Machine Learning`,
          source: `Berkeley`,
          type: `course`,
          url: `https://people.eecs.berkeley.edu/~jrs/189/`,
          description: `Comprehensive ML course with strong mathematical foundations.`
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
          content: `Linear system Ax=b: A∈ℝ^{m×n}, x∈ℝ^n unknown, b∈ℝ^m. **Consistent** if ∃x solution. Unique solution when A square and invertible.

Overdetermined m>n: least squares min||Ax−b||₂. Underdetermined m<n: infinitely many solutions. Regression y=Xβ is linear system.

Each equation is hyperplane; solution is intersection. Rank(A) determines solution structure via Rouché-Capelli theorem. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
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
          pseudoCode: `System Formulation

Ax = b
Consistent ⇔ b ∈ Col(A)
Unique ⇔ A invertible (n×n, full rank)
Least squares: min ||Ax − b||₂
rank(A) = dim Col(A)

2 equations, 2 unknowns:
a11 x1 + a12 x2 = b1   ── line 1
a21 x1 + a22 x2 = b2   ── line 2
intersection = solution
parallel → none
same line → infinite

1. Geometric: intersection of hyperplanes
2. Square full rank → unique solution
3. Overdetermined → least squares
4. Rank determines consistency
5. Regression is Ax=b`
        },
        {
          id: `ls-elim`,
          title: `Gaussian Elimination`,
          content: `**Gaussian elimination** row-reduces [A|b] to upper triangular form then back-substitutes. **Elementary row ops**: swap rows, scale row, add multiple of row to another.

**Pivoting** swaps rows to avoid zero pivot and reduce error. LU decomposition: A=LU with L lower, U upper triangular. np.linalg.solve uses optimized LAPACK.

Partial pivoting improves numerical stability for ill-conditioned systems.`,
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
          pseudoCode: `Gaussian Elimination

Elementary ops preserve solution set
Forward elimination → upper triangular U
Back substitution from last equation
A = LU factorization
Partial pivoting: max |pivot|

[A|b] → row ops → [U|c]
[ 2  1 | 4 ]     [ 1  1 | 3 ]
[ 1  1 | 3 ]  →  [ 0  1 | 2 ]
back sub: x2=2, x1=1

1. Row ops don't change solutions
2. Pivot avoids division by zero
3. LU enables fast multiple rhs
4. Upper triangular easy to solve
5. Pivoting improves accuracy`
        },
        {
          id: `ls-lsq`,
          title: `Least Squares Solution`,
          content: `When Ax=b has no exact solution, **least squares** finds x minimizing ||Ax−b||₂². Normal equations: AᵀAx=Aᵀb. Solution x=(AᵀA)⁻¹Aᵀb when AᵀA invertible.

**Pseudo-inverse** A⁺ gives minimum-norm least squares. np.linalg.lstsq handles rank-deficient cases. Linear regression closed form uses this. QR or SVD more stable than forming AᵀA explicitly for ill-conditioned problems.

Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
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
          pseudoCode: `Least Squares Solution

min ||Ax − b||₂²
Normal eq: AᵀAx = Aᵀb
x = (AᵀA)⁻¹Aᵀb
A⁺ pseudo-inverse
lstsq via QR/SVD preferred

Overdetermined: more eqs than unknowns
╲
╲  best fit line
╲ minimizes Σ residual²

1. LS minimizes squared residuals
2. Normal equations from calculus
3. AᵀA may be ill-conditioned
4. Pseudo-inverse generalizes inverse
5. Regression = least squares`
        },
        {
          id: `ls-rank`,
          title: `Rank & Null Space`,
          content: `**Column space** Col(A) = {Ax | x∈ℝ^n}. **Null space** Null(A) = {x | Ax=0}. Rank-nullity: rank(A)+dim(Null(A))=n.

Full column rank: independent columns. Rank deficiency indicates redundant features. SVD reveals rank via non-zero singular values.

Solution to Ax=b unique iff rank(A)=rank([A|b])=n. Homogeneous Ax=0 always has x=0 trivial solution plus null space vectors. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
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
          pseudoCode: `Rank & Null Space

rank(A) = dim Col(A)
rank(A) + nullity(A) = n
Null(A) = {x : Ax = 0}
Full rank ⇔ columns independent
rank via SVD = # nonzero σ

Rank = # pivot columns
Full rank columns:
[ * * ]  rank 2
[ * * ]
Dependent column:
[ 1  2 ]  rank 1
[ 2  4 ]  col2 = 2·col1

1. Rank measures independent info
2. Null space = directions A kills
3. Redundant features lower rank
4. SVD robust for rank detection
5. Nullity counts free variables`
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
      estimatedMinutes: 35,
      module: `module-math-02`,
      references: [
        {
          id: `mit-1806-linalg`,
          title: `MIT 18.06 Linear Algebra`,
          source: `MIT`,
          type: `course`,
          url: `https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/`,
          description: `Gilbert Strang's foundational linear algebra course used across ML.`
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
          id: `clrs-algorithms`,
          title: `Introduction to Algorithms (CLRS)`,
          source: `MIT Press`,
          type: `book`,
          url: `https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/`,
          description: `Definitive reference for sorting, searching, and algorithmic complexity analysis.`
        },
        {
          id: `berkeley-cs189`,
          title: `Berkeley CS189/289A — Introduction to Machine Learning`,
          source: `Berkeley`,
          type: `course`,
          url: `https://people.eecs.berkeley.edu/~jrs/189/`,
          description: `Comprehensive ML course with strong mathematical foundations.`
        }
      ]
    }
];
