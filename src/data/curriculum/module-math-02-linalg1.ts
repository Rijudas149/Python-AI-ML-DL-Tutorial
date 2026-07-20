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
          content: `### Introduction

A **vector** v ∈ ℝⁿ is an ordered n-tuple (v₁, v₂, ..., vₙ). Geometrically, vectors represent magnitude and direction. **Vector addition** is component-wise: u+v = (u₁+v₁, ...).

### Vector Definition

**Scalar multiplication** cv scales each component. The **zero vector** 0 is the additive identity. Vectors in data science represent feature rows, embeddings, and gradients.

Column vs row vectors matter for matrix multiplication conventions. A **vector space** satisfies closure under addition and scalar multiplication with axioms from linear algebra.

### Key Ideas

- Vectors are ordered tuples
- Addition is component-wise
- Scalars stretch/shrink vectors
- Column vectors default in ML
- Span is set of all combinations

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `v = (v₁, v₂, ..., vₙ) ∈ ℝⁿ`,
            `u + v = (u₁+v₁, ..., uₙ+vₙ)`,
            `cv = (cv₁, ..., cvₙ)`,
            `0 = (0, ..., 0)`,
            `Span{v₁,...,v_k} = all linear combinations`
          ],
          diagram: `2D vector v = (3, 4)
        y
        │    ╱ v
        │  ╱ |v|=5
   ─────┼────── x
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
          commonMistakes: [
            `Using polynomial degree too high without regularization`,
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Not normalizing vectors when using dot product as cosine similarity`
          ]
        },
        {
          id: `vec-norm`,
          title: `Norms & Distance`,
          content: `### Introduction

**L2 norm** (Euclidean): ||v||₂ = √(∑vᵢ²). **L1 norm**: ||v||₁ = ∑|vᵢ|. Distance d(u,v) = ||u−v||₂.

### Norms & Distance

L2 norm relates to dot product: ||v||² = v·v. Regularization in ML uses L1 (Lasso) and L2 (Ridge) penalties.

Cosine similarity uses normalized dot product. np.linalg.norm(v, ord=2) computes Euclidean norm efficiently for high-dimensional embeddings and batch feature normalization pipelines.

### Key Ideas

- L2 is standard Euclidean length
- L1 encourages sparsity in ML
- Unit vectors have norm 1
- Distance is norm of difference
- Norms measure vector size

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `||v||₂ = √(∑ vᵢ²)`,
            `||v||₁ = ∑ |vᵢ|`,
            `||v||∞ = max |vᵢ|`,
            `v̂ = v / ||v||₂`,
            `d(u,v) = ||u − v||₂`
          ],
          diagram: `||v|| = length of arrow
      ╱  | 4
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
          commonMistakes: [
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Using polynomial degree too high without regularization`
          ]
        },
        {
          id: `vec-span`,
          title: `Linear Combinations & Span`,
          content: `### Introduction

Linear combination: c₁v₁ + c₂v₂ + ... + c_k v_k. **Span** of vectors is all possible combinations. Vectors are **linearly independent** if no vector is a combination of others.

### Linear Combinations & Span

Basis: independent set spanning the space. Dimension = size of basis. In PCA, principal components form an orthonormal basis.

Feature columns spanning ℝⁿ determine rank of design matrix. Redundant features create linear dependence causing multicollinearity in regression.

### Key Ideas

- Span is all weighted sums
- Independence = no redundancy
- Basis minimal spanning set
- Rank = dimension of column space
- Dependent columns → singular XᵀX

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
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
          commonMistakes: [
            `Using polynomial degree too high without regularization`,
            `Running K-Means without scaling — features with large ranges dominate`,
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Applying log to zero or negative values without a shift`
          ]
        },
        {
          id: `vec-ml`,
          title: `Vectors in Data Science`,
          content: `### Introduction

Each data point is a feature vector x ∈ ℝᵈ. **Embeddings** map discrete IDs to dense vectors. **Gradients** ∇L are vectors pointing uphill in loss.

### Vectors in Data Science

Batch stacking creates matrix X ∈ ℝ^{m×d}. Normalization scales feature vectors. Nearest neighbor search uses L2 distance in embedding space.

Word2vec learns vector representations where similar words are close. Vectorized numpy operations apply element-wise ops without Python loops for speed.

### Key Ideas

- Rows often = samples in sklearn
- Gradients same shape as params
- Embeddings capture semantics
- Vectorization speeds computation
- Normalize features before distance

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
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
          commonMistakes: [
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Broadcasting mistakes when array shapes do not align`
          ]
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
          content: `### Introduction

**Dot product** u·v = ∑uᵢvᵢ = uᵀv for column vectors. Geometric: u·v = ||u|| ||v|| cos θ. Projects one vector onto another: proj_v(u) = (u·v/||v||²)v.

### Dot Product Definition

In ML, dot product scores attention queries against keys. Linear layer y=Wx+b computes dot products of rows of W with x plus bias. Positive dot product suggests aligned directions in embedding space.

### Key Ideas

- Dot product sums pairwise products
- Measures alignment via cosine
- Zero dot = orthogonal
- Linear layers are dot products
- Attention uses scaled dot products

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `u · v = ∑ uᵢ vᵢ = uᵀv`,
            `u · v = ||u|| ||v|| cos θ`,
            `u · v = 0 ⇔ orthogonal (θ=90°)`,
            `proj_v(u) = (u·v / v·v) v`,
            `Wx = dot products of W rows with x`
          ],
          diagram: `u · v = |u||v|cosθ
        v
     ╱_____ u
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
          commonMistakes: [
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Using polynomial degree too high without regularization`,
            `Wrong sequence length after tokenization — truncating critical context`
          ]
        },
        {
          id: `dot-geom`,
          title: `Geometric Interpretation`,
          content: `### Introduction

Angle between vectors: cos θ = (u·v)/(||u|| ||v||). **Cosine similarity** ignores magnitude, focuses on direction—common for text embeddings. Cauchy-Schwarz: |u·v| ≤ ||u|| ||v||.

### Geometric Interpretation

Triangle inequality on norms. Dot product positive when acute angle, negative when obtuse. Normalizing before dot gives cosine in [−1,1].

In recommendation systems, user and item embeddings with high cosine predict preference.

### Key Ideas

- Cosine ignores vector length
- Cauchy-Schwarz bounds dot product
- Sign of dot indicates angle type
- Used in semantic search
- Self-dot gives squared norm

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
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
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `cross-3d`,
          title: `Cross Product in 3D`,
          content: `### Introduction

**Cross product** u×v ∈ ℝ³ perpendicular to both u and v. ||u×v|| = ||u|| ||v|| sin θ = area of parallelogram. Right-hand rule determines direction. u×v = −v×u anti-commutative. i×j=k standard basis.

### Cross Product in 3D

Used in 3D graphics, torque, and normal vectors for surfaces. In 2D, pseudo-scalar u_x v_y − u_y v_x gives signed area.

Cross product less common in standard ML but appears in geometric deep learning and physics-informed nets.

### Key Ideas

- Cross product only in 3D (or 7D exotic)
- Gives perpendicular vector
- Magnitude = parallelogram area
- Anti-commutative
- Normals for 3D rendering

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
          formulas: [
            `u × v ⟂ u and ⟂ v`,
            `||u × v|| = ||u|| ||v|| sin θ`,
            `u × v = −v × u`,
            `i × j = k (right-hand rule)`,
            `Area = ||u × v||`
          ],
          diagram: `u × v points up from plane
      v ╱
      ╱  u
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
          commonMistakes: [
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Applying log to zero or negative values without a shift`
          ]
        },
        {
          id: `dot-attn`,
          title: `Dot Products in Neural Networks`,
          content: `### Introduction

**Attention** score e_ij = q_i·k_j / √d measures query-key compatibility. Scaled dot prevents softmax saturation at large d. **Linear classification** sign(w·x + b) is perceptron.

### Dot Products in Neural Networks

Matrix multiply C=AB: C_ij = row_i(A)·col_j(B). GPU accelerates batched dot products. Kernel SVM uses implicit dot products in feature space.

Understanding dot products clarifies why weight initialization scale affects activation variance and training stability.

### Key Ideas

- Matrix multiply = batch dots
- Scale by √d in transformers
- Softmax turns scores to weights
- Linear layers are dot + bias
- Kernel = dot in feature space

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
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
          commonMistakes: [
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Using polynomial degree too high without regularization`,
            `Not stratifying splits for classification tasks`,
            `Wrong sequence length after tokenization — truncating critical context`
          ]
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
          content: `### Introduction

An m×n **matrix** A has m rows and n columns; entry A_ij at row i, column j. **Identity** I_n has 1s on diagonal. **Zero matrix** all zeros.

### Matrix Structure

**Diagonal** matrix has off-diagonal zeros. Matrices represent linear transforms, datasets (samples×features), and weight layers. Transpose Aᵀ flips rows/columns.

Storage order (row-major in C/numpy) affects cache performance in large matrix ops.

### Key Ideas

- First index = row, second = column
- Transpose swaps indices
- Identity leaves vectors unchanged
- Symmetric matrices have real eigenvalues
- Shape must align for multiply

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
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
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Using polynomial degree too high without regularization`,
            `Broadcasting mistakes when array shapes do not align`,
            `Not normalizing vectors when using dot product as cosine similarity`
          ]
        },
        {
          id: `mat-mv`,
          title: `Matrix-Vector Multiplication`,
          content: `### Introduction

Ax for A∈ℝ^{m×n}, x∈ℝ^n produces y∈ℝ^m where y_i = ∑_j A_ij x_j = row_i(A)·x. Each output component is dot product of row with x. Geometrically, A transforms x to new space.

### Matrix-Vector Multiplication

**Linear layer** in neural nets: y=Wx+b. Composition of transforms: (BA)x = B(Ax). Column picture: Ax = x₁(col₁) + x₂(col₂) + ... linear combination of columns.

Row picture: dot products of rows with x.

### Key Ideas

- Columns of A span output space
- Rows of A define hyperplanes
- Shape: (m×n)(n×1)=(m×1)
- Neural layer = matrix-vector + bias
- Composition = matrix multiply

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
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
          commonMistakes: [
            `Using polynomial degree too high without regularization`,
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `mat-special`,
          title: `Special Matrices`,
          content: `### Introduction

**Orthogonal** Q: QᵀQ=I; preserves lengths and angles. **Positive definite** symmetric A with xᵀAx>0 for x≠0—Hessians at minima. **Toeplitz** constant diagonals in time series.

### Special Matrices

**Sparse** mostly zeros—efficient storage. **Stochastic** rows sum to 1—Markov chains. Understanding special structure enables faster algorithms (e.g., eigendecomposition for symmetric matrices always exists with real eigenvalues).

### Key Ideas

- Orthogonal = rotation/reflection
- Symmetric → real eigenvalues
- PSD matrices define valid covariances
- Sparse matrices save memory
- Structure enables fast solvers

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
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
          commonMistakes: [
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Serving a model trained on preprocessed data without the same pipeline in production`,
            `Not normalizing vectors when using dot product as cosine similarity`
          ]
        },
        {
          id: `mat-data`,
          title: `Matrices as Data Tables`,
          content: `### Introduction

Design matrix X ∈ ℝ^{n×p}: n samples, p features. Covariance Σ = (1/n)XᵀX (centered). Correlation from normalized covariance.

### Matrices as Data Tables

Batch tensor (batch, features) in deep learning. Missing values require imputation before matrix ops. One-hot encoding creates sparse binary columns.

Feature scaling applies column-wise transforms. Matrix view connects tabular data to linear algebra algorithms throughout sklearn and pytorch.

### Key Ideas

- Rows = samples in sklearn convention
- Columns = features/variables
- Center columns before covariance
- Matrix form enables vectorized fit
- Batches are submatrices of data

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
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
          content: `### Introduction

For A∈ℝ^{m×k}, B∈ℝ^{k×n}, product C=AB ∈ ℝ^{m×n} with C_ij = ∑_l A_il B_lj. **Inner dimensions must match** (k). NOT commutative: AB≠BA generally.

### Matrix Multiplication

Distributive over addition. Each C_ij is dot product of row i of A with column j of B. Chain of layers composes weight matrices.

Strassen and blocked multiplication optimize large products on hardware.

### Key Ideas

- Inner dimension must align
- Order matters in multiplication
- Transpose reverses product order
- Each entry = row·column dot
- Composition of linear maps

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
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
          commonMistakes: [
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`,
            `Using correlation when variables are non-linear — relationship may be missed`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `mm-prop`,
          title: `Transpose & Trace`,
          content: `### Introduction

**Transpose** (AB)ᵀ = BᵀAᵀ. **Trace** tr(A)=∑A_ii, sum of diagonal. tr(AB)=tr(BA).

### Transpose & Trace

Frobenius norm ||A||_F = √(∑A_ij²) = √(tr(AᵀA)). Transpose swaps row-column roles in gradients: ∂L/∂A = (∂L/∂B) Cᵀ when B=AC.

In backprop, transpose appears when passing gradients backward through layers.

### Key Ideas

- Transpose reverses multiply order
- Trace invariant under cyclic permute
- Frobenius norm for matrix size
- Symmetric matrices ↔ quadratic forms
- Gradients use transpose heavily

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
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
          commonMistakes: [
            `Applying log to zero or negative values without a shift`,
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`,
            `Using correlation when variables are non-linear — relationship may be missed`,
            `Forgetting to check matrix dimensions before multiplying`
          ]
        },
        {
          id: `mm-inv-det`,
          title: `Preview: Inverse & Determinant`,
          content: `### Introduction

Square matrix A **invertible** if ∃A⁻¹ with AA⁻¹=I. det(A)≠0 iff invertible. det(AB)=det(A)det(B). Inverse of 2×2: (1/det)[[d,−b],[−c,a]]. Singular matrices collapse dimension—non-invertible transform.

### Preview: Inverse & Determinant

Near-singular causes numerical instability. Condition number κ(A)=||A|| ||A⁻¹|| measures sensitivity. We'll deepen inverses and determinants in the next module; here we preview their role in solving Ax=b.

### Key Ideas

- Inverse undoes linear map
- Zero determinant = singular
- Ill-conditioned = hard to invert
- Rank deficient → no unique inverse
- Preview for linear systems topic

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
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
          commonMistakes: [
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`,
            `Using correlation when variables are non-linear — relationship may be missed`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `mm-nn`,
          title: `Matrix Ops in Neural Nets`,
          content: `### Introduction

Fully connected layer: h = σ(Wx+b). Backprop: ∂L/∂W = (∂L/∂H)ᵀ X. Weight matrices learned by gradient descent.

### Matrix Ops in Neural Nets

Conv layers use structured sparse matrices (Toeplitz). Attention: softmax(QKᵀ/√d)V. Residual: y=x+F(x) helps gradient flow.

Xavier/He init scales W variance by fan-in/out. Matrix dimensions must align through network—shape debugging is essential skill.

### Key Ideas

- Check shapes at every layer
- Batch dim adds leading axis
- Transpose in batch forward pass
- Init scale affects training
- Residual eases deep gradients

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
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
          commonMistakes: [
            `Wrong sequence length after tokenization — truncating critical context`,
            `Applying log to zero or negative values without a shift`,
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`
          ]
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
          content: `### Introduction

Linear system Ax=b: A∈ℝ^{m×n}, x∈ℝ^n unknown, b∈ℝ^m. **Consistent** if ∃x solution. Unique solution when A square and invertible.

### System Formulation

Overdetermined m>n: least squares min||Ax−b||₂. Underdetermined m<n: infinitely many solutions. Regression y=Xβ is linear system.

Each equation is hyperplane; solution is intersection. Rank(A) determines solution structure via Rouché-Capelli theorem.

### Key Ideas

- Geometric: intersection of hyperplanes
- Square full rank → unique solution
- Overdetermined → least squares
- Rank determines consistency
- Regression is Ax=b

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
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
          commonMistakes: [
            `Using polynomial degree too high without regularization`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Using polynomial degree too high without regularization`
          ]
        },
        {
          id: `ls-elim`,
          title: `Gaussian Elimination`,
          content: `### Introduction

**Gaussian elimination** row-reduces [A|b] to upper triangular form then back-substitutes. **Elementary row ops**: swap rows, scale row, add multiple of row to another.

### Gaussian Elimination

**Pivoting** swaps rows to avoid zero pivot and reduce error. LU decomposition: A=LU with L lower, U upper triangular. np.linalg.solve uses optimized LAPACK.

Partial pivoting improves numerical stability for ill-conditioned systems.

### Key Ideas

- Row ops don't change solutions
- Pivot avoids division by zero
- LU enables fast multiple rhs
- Upper triangular easy to solve
- Pivoting improves accuracy

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
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
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Row ops don't change solutions.`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `ls-lsq`,
          title: `Least Squares Solution`,
          content: `### Introduction

When Ax=b has no exact solution, **least squares** finds x minimizing ||Ax−b||₂². Normal equations: AᵀAx=Aᵀb. Solution x=(AᵀA)⁻¹Aᵀb when AᵀA invertible.

### Least Squares Solution

**Pseudo-inverse** A⁺ gives minimum-norm least squares. np.linalg.lstsq handles rank-deficient cases. Linear regression closed form uses this. QR or SVD more stable than forming AᵀA explicitly for ill-conditioned problems.

### Key Ideas

- LS minimizes squared residuals
- Normal equations from calculus
- AᵀA may be ill-conditioned
- Pseudo-inverse generalizes inverse
- Regression = least squares

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
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
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Using polynomial degree too high without regularization`,
            `Applying log to zero or negative values without a shift`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `ls-rank`,
          title: `Rank & Null Space`,
          content: `### Introduction

**Column space** Col(A) = {Ax | x∈ℝ^n}. **Null space** Null(A) = {x | Ax=0}. Rank-nullity: rank(A)+dim(Null(A))=n.

### Rank & Null Space

Full column rank: independent columns. Rank deficiency indicates redundant features. SVD reveals rank via non-zero singular values.

Solution to Ax=b unique iff rank(A)=rank([A|b])=n. Homogeneous Ax=0 always has x=0 trivial solution plus null space vectors.

### Key Ideas

- Rank measures independent info
- Null space = directions A kills
- Redundant features lower rank
- SVD robust for rank detection
- Nullity counts free variables

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.

### Visual Reference

Refer to the **diagram** and **formulas** below while reading this section.`,
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
          commonMistakes: [
            `Applying log to zero or negative values without a shift`,
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Treating matrix multiplication as element-wise (\`*\` vs \`@\` in NumPy)`,
            `Using correlation when variables are non-linear — relationship may be missed`
          ]
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
