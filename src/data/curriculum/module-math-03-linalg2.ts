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
          content: `The **determinant** det(A) is a scalar for square A∈ℝ^{n×n}. det(A) measures signed volume scaling factor of linear transform A. det(A)=0 iff A is singular (non-invertible). For 2×2: det[[a,b],[c,d]]=ad−bc. det(Aᵀ)=det(A). det(AB)=det(A)det(B).

Swapping two rows flips sign.

Multiplying row by k multiplies det by k. Cofactor expansion works recursively. Determinants appear in change of variables in integrals and multivariate Gaussian normalization.`,
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
manual: 10.0`
        },
        {
          id: `det-geom`,
          title: `Geometric Meaning`,
          content: `Parallelogram area spanned by columns = |det([v₁ v₂])|. Signed det preserves orientation. In 3D, |det| = volume of parallelepiped.

Linear map collapsing space has det=0 (e.g., projection). det(A)<0 implies reflection component. Absolute det in change of variables: ∫f(g(x))|det J|dx.

Understanding geometry helps debug why singular covariance matrices break multivariate Gaussian density formulas.

Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
          formulas: [
            `|det([v1 v2])| = parallelogram area`,
            `3D: |det| = volume`,
            `det=0 → dimension collapse`,
            `sign(det) = orientation`,
            `|det J| in change of variables`
          ],
          diagram: `columns of A span shape:
      v2
      │╱ area = |det A|
      └──── v1`,
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
          output: `area: 6.0`
        },
        {
          id: `det-prop`,
          title: `Properties & Computation`,
          content: `Triangular matrix: det = product of diagonal entries. Row operations: adding multiple of row doesn't change det; swapping flips sign; scaling row scales det.

LU: det(A)=det(L)det(U)=∏U_ii. O(n³) via elimination vs O(n!) naive cofactor. log(det(A)) via log-sum for positive definite matrices in likelihoods. np.linalg.slogdet returns sign and log-abs-det stably.

For large PD matrices, Cholesky gives log det = 2∑log(diag(L)).`,
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
          output: `sign: 1.0 log|det|: 2.484...`
        },
        {
          id: `det-ml`,
          title: `Determinants in ML`,
          content: `Multivariate Gaussian: p(x)=exp(−½(x−μ)ᵀΣ⁻¹(x−μ))/√((2π)ⁿdet Σ). Zero det Σ → degenerate distribution. Normalizing flows track log|det ∂f/∂x| for density transformation.

Volume preservation in invertible nets requires |det J|=1. PCA uses det(Σ) related to product of eigenvalues. Regularization adds λI ensuring det(Σ+λI)>0.

Matrix determinant lemma useful in Gaussian process updates. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
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
eig prod: 3.0`
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
      estimatedMinutes: 35,
      module: `module-math-03`,
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
      id: `math-inverse`,
      title: `Matrix Inverse`,
      description: `Compute and apply matrix inverses for solving systems and understanding transformations.`,
      level: `intermediate`,
      track: `math`,
      sections: [
        {
          id: `inv-def`,
          title: `Inverse Definition`,
          content: `A⁻¹ satisfies AA⁻¹=A⁻¹A=I for square invertible A. (AB)⁻¹=B⁻¹A⁻¹ reverse order like transpose. Inverse undoes linear transform: if y=Ax then x=A⁻¹y.

Not all matrices invert—singular when det=0. Never invert large dense matrices explicitly in production; prefer solve(A,b). Inverse of orthogonal Q is Qᵀ.

Diagonal inverse inverts diagonal entries. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
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
          output: `A@Ainv: identity`
        },
        {
          id: `inv-2x2`,
          title: `2×2 Inverse Formula`,
          content: `For A=[[a,b],[c,d]], A⁻¹=(1/(ad−bc))[[d,−b],[−c,a]] when det≠0. Adjugate divided by determinant. Quick hand calculation useful for intuition.

Cofactor matrix transpose divided by det generalizes to n×n. Singular when rows proportional: [1,2] and [2,4]. Near-singular when det≈0 causes huge entries in A⁻¹—ill-conditioning.

Always check cond(A) before trusting explicit inverse. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
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
          output: `matches np.linalg.inv`
        },
        {
          id: `inv-pinv`,
          title: `Pseudo-Inverse`,
          content: `**Moore-Penrose pseudo-inverse** A⁺ generalizes inverse for non-square or singular A. SVD: A=UΣVᵀ, A⁺=VΣ⁺Uᵀ where Σ⁺ inverts non-zero singular values. Least squares minimum-norm: x=A⁺b. np.linalg.pinv uses SVD.

Handles rank deficiency gracefully. In underdetermined consistent systems, A⁺ gives smallest ||x|| solution. Important for overdetermined regression when XᵀX singular.

Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
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
          output: `least squares solution`
        },
        {
          id: `inv-ml`,
          title: `Inverse in Regression`,
          content: `Closed-form OLS: β=(XᵀX)⁻¹Xᵀy when XᵀX invertible. Ridge: β=(XᵀX+λI)⁻¹Xᵀy always invertible for λ>0. Newton step: Δθ=H⁻¹∇L uses Hessian inverse.

Fisher information inverse gives Cramér-Rao bound. Avoid explicit inverse—use np.linalg.solve(XTX, XTy). Woodbury matrix identity efficient for low-rank updates.

Ill-conditioned X causes unstable (XᵀX)⁻¹—use regularization or SVD. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
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
          output: `ridge beta: ...`
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
      estimatedMinutes: 35,
      module: `module-math-03`,
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
      id: `math-eigen`,
      title: `Eigenvalues & Eigenvectors`,
      description: `Diagonalization, spectral theory, and dynamics via eigen decomposition.`,
      level: `intermediate`,
      track: `math`,
      sections: [
        {
          id: `eig-def`,
          title: `Eigenvalue Problem`,
          content: `Av = λv: v≠0 is **eigenvector**, λ is **eigenvalue**. A acts on eigenvector by scaling only. det(A−λI)=0 characteristic polynomial roots give eigenvalues. Sum of eigenvalues = tr(A).

For symmetric A, real eigenvalues and orthogonal eigenvectors (spectral theorem). Power iteration finds dominant eigenvalue. Eigenvalues determine stability of linear dynamical systems x_{t+1}=Ax_t: |λ|<1 stable.`,
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
          output: `Av ≈ λv verified`
        },
        {
          id: `eig-diag`,
          title: `Diagonalization`,
          content: `If A has n independent eigenvectors, A=VΛV⁻¹ with Λ diagonal eigenvalues, V columns eigenvectors. A^k = VΛ^k V⁻¹ simplifies matrix powers. Symmetric: A=QΛQᵀ with Q orthogonal.

Not all matrices diagonalizable—defective Jordan form needed. Similar matrices share eigenvalues. PCA covariance diagonalized by eigenvectors.

Matrix exponential e^A = Ve^Λ V⁻¹ for diagonalizable A. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
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
          output: `reconstructs A`
        },
        {
          id: `eig-pca`,
          title: `Eigenvalues in PCA`,
          content: `Covariance Σ eigenvalues λ_i = variance along principal axis i. Eigenvectors = principal directions. Sort λ descending; keep top k for dimensionality reduction.

Explained variance ratio λ_i/∑λ. Σ = QΛQᵀ with Q columns PC directions. np.linalg.eigh for symmetric—faster and stable than eig. Zero eigenvalues indicate redundant features or rank deficiency.

Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
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
          output: `eigenvalues descending`
        },
        {
          id: `eig-markov`,
          title: `Eigenvalues in Markov & PageRank`,
          content: `Stochastic matrix P (rows sum 1): largest eigenvalue λ₁=1 with stationary distribution π as eigenvector Pᵀπ=π. Power method: repeat v←Pv/||Pv|| converges to dominant eigenvector. Google PageRank solves eigenvalue problem on web graph.

Markov chain mixing time related to second eigenvalue magnitude. Reversible chains have real eigenvalues. Spectral clustering uses eigenvectors of graph Laplacian—connects linear algebra to unsupervised learning.`,
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
          output: `stationary: [0.833 0.167] approx`
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
      estimatedMinutes: 35,
      module: `module-math-03`,
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
          id: `sklearn-pca`,
          title: `scikit-learn PCA & Decomposition`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/modules/decomposition.html`,
          description: `PCA, NMF, and other dimensionality reduction techniques.`
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
      id: `math-svd`,
      title: `Singular Value Decomposition`,
      description: `Factor matrices with SVD for compression, pseudoinverse, and low-rank approximation.`,
      level: `advanced`,
      track: `math`,
      sections: [
        {
          id: `svd-def`,
          title: `SVD Definition`,
          content: `Any A∈ℝ^{m×n} factors as A=UΣVᵀ where U∈ℝ^{m×m} orthogonal, V∈ℝ^{n×n} orthogonal, Σ∈ℝ^{m×n} diagonal with σ₁≥σ₂≥...≥0 **singular values**. Compact SVD uses only positive σ columns.

SVD always exists—more general than eigendecomposition. σ_i² = eigenvalues of AᵀA (and AAᵀ). First right singular vector maximizes ||Av||/||v||.

Foundation for PCA, recommender systems, and latent semantic analysis.`,
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
          output: `σ: [9.5, 0.77] approx`
        },
        {
          id: `svd-lowrank`,
          title: `Low-Rank Approximation`,
          content: `Eckart-Young: best rank-k approximation A_k = ∑_{i=1}^k σ_i u_i v_iᵀ minimizes ||A−A_k||_F. Truncate small σ for compression/denoising. **Effective rank** from σ decay.

Image compression keeps top k singular values. Noise often in small σ components. Recommender matrix factorization approximates R≈UVᵀ low rank.

Choose k via scree plot of σ or cumulative energy ∑σ_i²/∑σ². Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
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
          output: `Fro err: minimized for rank 5`
        },
        {
          id: `svd-pinv`,
          title: `SVD & Pseudo-Inverse`,
          content: `A⁺=VΣ⁺Uᵀ inverts nonzero σ. Solves least squares stably. Condition number κ(A)=σ_max/σ_min.

Tiny σ_min → ill-conditioned—regularize via Tikhonov or truncate. np.linalg.lstsq uses SVD internally. Solve Ax=b for rank-deficient via pinv. Compare solve vs pinv on well-conditioned vs ill-conditioned systems to see numerical differences.

Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
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
          output: `ill-conditioned demo`
        },
        {
          id: `svd-ml`,
          title: `SVD in ML Pipelines`,
          content: `Latent Semantic Analysis: SVD on term-document matrix. Collaborative filtering: SVD on rating matrix. PCA via SVD of centered X: faster than XᵀX for tall matrices. np.linalg.svd(X, full_matrices=False) on n×p data.

Neural network weight SVD for compression. Randomized SVD (sklearn) for huge sparse matrices. Understanding SVD clarifies why truncated decompositions reduce parameters while preserving structure.`,
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
          output: `variance retained`
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
      estimatedMinutes: 35,
      module: `module-math-03`,
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
          id: `sklearn-pca`,
          title: `scikit-learn PCA & Decomposition`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/modules/decomposition.html`,
          description: `PCA, NMF, and other dimensionality reduction techniques.`
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
      id: `math-pca-math`,
      title: `PCA Mathematics`,
      description: `Principal component analysis as variance maximization and spectral decomposition.`,
      level: `advanced`,
      track: `math`,
      sections: [
        {
          id: `pca-goal`,
          title: `Variance Maximization`,
          content: `PCA finds unit vector w maximizing Var(Xw)=wᵀΣw subject to ||w||=1. Solution: w = top eigenvector of covariance Σ. Second PC orthogonal to first, maximizes remaining variance.

Iteratively: eigenvectors of Σ sorted by λ. Equivalent to SVD of centered data matrix. Minimizes reconstruction error of rank-k projection.

Geometric: rotate to align with max spread axes. No labels needed—unsupervised linear dimensionality reduction.`,
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
          output: `top PC direction`
        },
        {
          id: `pca-proj`,
          title: `Projection & Reconstruction`,
          content: `Project x to k dims: z = W_kᵀ x where W_k columns top k eigenvectors. Reconstruct x̂ = W_k z = W_k W_kᵀ x. Reconstruction error ||x−x̂||² sum of trailing eigenvalues ∑_{i>k}λ_i.

Mean centering essential before PCA. Explained variance ratio guides k. Whitened coords: z_i = w_iᵀx/√λ_i have unit variance.

Biplot visualizes samples and feature loadings together. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
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
          output: `MSE from truncated`
        },
        {
          id: `pca-kernel`,
          title: `Kernel PCA Preview`,
          content: `Kernel PCA applies PCA in feature space via kernel matrix K_ij=K(x_i,x_j) without explicit φ(x). Center K: K̃ = H K H with H=I−11ᵀ/n. Eigenvectors of K̃ give nonlinear PCs.

Captures nonlinear structure linear PCA misses. Computationally O(n³)— costly for large n. Connection to spectral methods and graph embeddings.

Choose kernel (RBF, polynomial) controls implicit feature space geometry. Connecting this theory to numpy experiments and sanity checks reinforces retention and prepares you for probability, optimization, and modeling modules where these ideas appear repeatedly in loss functions, metrics, and algorithm design.`,
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
          output: `top kernel eigenvalues`
        },
        {
          id: `pca-practice`,
          title: `PCA Practical Considerations`,
          content: `Scale features before PCA if units differ—or PCA chases largest-scale feature. Correlation matrix PCA when variables standardized. Incremental PCA for streaming/large data.

Randomized PCA approximate top components fast. Interpret loadings: which features drive each PC. Beware PCA on mixed categorical/numeric without encoding.

For visualization, project to PC1-PC2. Cumulative variance plot selects k for 95% retention common in pipelines.`,
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
          output: `scaling matters`
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
      estimatedMinutes: 35,
      module: `module-math-03`,
      references: [
        {
          id: `sklearn-pca`,
          title: `scikit-learn PCA & Decomposition`,
          source: `scikit-learn`,
          type: `documentation`,
          url: `https://scikit-learn.org/stable/modules/decomposition.html`,
          description: `PCA, NMF, and other dimensionality reduction techniques.`
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
          id: `van-der-maaten-tsne`,
          title: `Visualizing Data using t-SNE`,
          source: `JMLR`,
          type: `paper`,
          url: `https://www.jmlr.org/papers/volume9/vandermaaten08a/vandermaaten08a.pdf`,
          description: `Seminal paper on t-SNE for nonlinear dimensionality reduction visualization.`
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
    }
];
