import type { Topic } from '../../types';

export const module09Topics: Topic[] = [
{
      id: `ml-linear-algebra`,
      title: `Linear Algebra Essentials`,
      description: `Vectors, matrices, eigenvalues, and their role in ML.`,
      level: `beginner`,
      track: `ml`,
      sections: [
        {
          id: `vectors`,
          title: `Vectors & Dot Products`,
          content: `Vectors represent features and weights. Dot product measures similarity: a·b = Σaᵢbᵢ. Cosine similarity normalizes by magnitude.`,
          example: `import numpy as np

a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
dot = a @ b
cos_sim = dot / (np.linalg.norm(a) * np.linalg.norm(b))
print(dot, round(cos_sim, 4))`,
          output: `32 0.9746`,
          keyPoints: [
            `Vectors are ordered lists of numbers`,
            `Dot product fundamental to neural networks`,
            `Cosine similarity for text/document similarity`,
            `Unit vectors have norm 1`
          ]
        },
        {
          id: `matrices`,
          title: `Matrix Operations`,
          content: `Matrices transform vectors. Matrix multiplication composes transformations. Transpose, inverse, rank.`,
          example: `import numpy as np

W = np.array([[1, 2], [3, 4], [5, 6]])  # 3x2
x = np.array([1, 1])  # 2x1
print(W @ x)  # 3x1 output`,
          output: `[3 7 11]`,
          keyPoints: [
            `ML layers are matrix multiplications`,
            `Weight matrix W maps input to output`,
            `Rank indicates independent dimensions`,
            `Singular matrices cannot be inverted`
          ]
        },
        {
          id: `eigen`,
          title: `Eigenvalues & Eigenvectors`,
          content: `Av = λv. PCA finds principal eigenvectors of covariance matrix. Eigen decomposition reveals data structure.`,
          keyPoints: [
            `Eigenvectors define principal directions`,
            `Eigenvalues measure variance along directions`,
            `PCA uses eigendecomposition of covariance`,
            `SVD generalizes to non-square matrices`
          ]
        },
        {
          id: `svd`,
          title: `SVD in ML`,
          content: `A = UΣVᵀ. Used in PCA, recommender systems, NLP (LSA), and dimensionality reduction.`,
          keyPoints: [
            `SVD always exists for any matrix`,
            `Truncated SVD for dimensionality reduction`,
            `Singular values indicate importance`,
            `Low-rank approximation compresses data`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-la-1`,
          question: `Compute L2 norm of vector [3, 4].`,
          solution: `import numpy as np
print(np.linalg.norm([3, 4]))`,
          difficulty: `easy`
        },
        {
          id: `ex-la-2`,
          question: `Matrix multiply [[1,2],[3,4]] by [1, 0].`,
          solution: `import numpy as np
print(np.array([[1,2],[3,4]]) @ np.array([1, 0]))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-09`,
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
      id: `ml-calculus`,
      title: `Calculus for ML`,
      description: `Derivatives, gradients, chain rule, and partial derivatives for optimization.`,
      level: `beginner`,
      track: `ml`,
      sections: [
        {
          id: `derivatives`,
          title: `Derivatives & Gradients`,
          content: `Derivative measures rate of change. Gradient ∇f is vector of partial derivatives — points direction of steepest ascent.`,
          example: `# f(x, y) = x^2 + y^2
# df/dx = 2x, df/dy = 2y
# At (3, 4): gradient = [6, 8]
import numpy as np
x, y = 3, 4
grad = np.array([2*x, 2*y])
print(grad, np.linalg.norm(grad))`,
          output: `[6 8] 10.0`,
          keyPoints: [
            `Gradient points uphill on loss surface`,
            `Negative gradient direction minimizes loss`,
            `Partial derivatives hold other variables fixed`,
            `Gradient is foundation of gradient descent`
          ]
        },
        {
          id: `chain-rule`,
          title: `Chain Rule & Backpropagation`,
          content: `Chain rule: d/dx f(g(x)) = f'(g(x)) · g'(x). Backpropagation applies chain rule through computational graph.`,
          pseudoCode: `FOR each layer L from output to input:
    compute local gradient
    propagate gradient to previous layer via chain rule`,
          keyPoints: [
            `Chain rule enables gradient flow through networks`,
            `Backprop is efficient application of chain rule`,
            `Computational graph tracks dependencies`,
            `Automatic differentiation automates chain rule`
          ]
        },
        {
          id: `loss-gradients`,
          title: `Gradients of Common Loss Functions`,
          content: `MSE: ∂/∂ŷ = 2(ŷ-y). Cross-entropy with softmax has elegant gradient: ŷ - y. Know these for debugging.`,
          example: `import numpy as np

y_true = np.array([1.0, 3.0, 5.0])
y_pred = np.array([1.5, 2.5, 5.5])
mse_grad = 2 * (y_pred - y_true) / len(y_true)
print(mse_grad)`,
          output: `[ 0.33333333 -0.33333333  0.33333333]`,
          keyPoints: [
            `MSE gradient proportional to error`,
            `Cross-entropy gradient simplifies with softmax`,
            `Gradient magnitude indicates update size`,
            `Vanishing gradients plague deep networks`
          ]
        },
        {
          id: `jacobian`,
          title: `Jacobian & Hessian`,
          content: `Jacobian matrix of vector-valued functions. Hessian (second derivatives) for curvature. Newton method uses Hessian.`,
          keyPoints: [
            `Jacobian generalizes gradient to vector outputs`,
            `Hessian reveals convexity/concavity`,
            `Second-order methods converge faster but cost more`,
            `Most DL uses first-order (gradient) methods only`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-calc-1`,
          question: `Compute gradient of f(x)=x^2 at x=3.`,
          solution: `x = 3
print(2 * x)`,
          difficulty: `easy`
        },
        {
          id: `ex-calc-2`,
          question: `Compute MSE gradient for y=[1,2], pred=[1.5, 2.5].`,
          solution: `import numpy as np
y = np.array([1.0, 2.0])
pred = np.array([1.5, 2.5])
print(2 * (pred - y) / len(y))`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 25,
      module: `module-09`,
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
          id: `cs229-optimization`,
          title: `CS229 Lecture Notes — Optimization`,
          source: `Stanford CS229`,
          type: `course`,
          url: `https://cs229.stanford.edu/notes2022fall/main_notes.pdf`,
          description: `Gradient descent, Newton's method, and convergence analysis for ML.`
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
      id: `ml-probability`,
      title: `Probability & Distributions`,
      description: `Probability theory, Bayes theorem, and key distributions for ML.`,
      level: `beginner`,
      track: `ml`,
      sections: [
        {
          id: `basics`,
          title: `Probability Fundamentals`,
          content: `P(A|B) = P(A∩B)/P(B). Bayes: P(A|B) = P(B|A)P(A)/P(B). Foundation for Naive Bayes and Bayesian ML.`,
          example: `# Bayes: P(disease|+) = P(+|disease)*P(disease)/P(+)
p_disease = 0.01
p_pos_given_disease = 0.99
p_pos = 0.01*0.99 + 0.99*0.05
p_disease_given_pos = p_pos_given_disease * p_disease / p_pos
print(round(p_disease_given_pos, 4))`,
          output: `0.1667`,
          keyPoints: [
            `Bayes theorem updates beliefs with evidence`,
            `Prior × likelihood ∝ posterior`,
            `Base rate neglect is common error`,
            `Naive Bayes assumes feature independence`
          ]
        },
        {
          id: `distributions`,
          title: `Key Distributions`,
          content: `Normal/Gaussian: central to ML. Bernoulli/Binomial: binary outcomes. Poisson: counts. Uniform: equal probability.`,
          example: `import numpy as np

# 68-95-99.7 rule for normal distribution
mu, sigma = 0, 1
samples = np.random.default_rng(42).normal(mu, sigma, 10000)
within_1std = np.mean(np.abs(samples - mu) <= sigma)
print(round(within_1std, 3))`,
          output: `0.682`,
          keyPoints: [
            `Normal distribution ubiquitous in ML`,
            `Central Limit Theorem justifies normality`,
            `Bernoulli for binary classification targets`,
            `Choose distribution matching data generating process`
          ]
        },
        {
          id: `expectation`,
          title: `Expectation & Variance`,
          content: `E[X] = Σx·P(x). Var(X) = E[(X-μ)²]. Covariance measures joint variability. Correlation is normalized covariance.`,
          keyPoints: [
            `Expectation is average outcome weighted by probability`,
            `Variance measures spread around mean`,
            `Covariance matrix for multivariate data`,
            `Correlation ∈ [-1, 1] is scale-invariant`
          ]
        },
        {
          id: `mle`,
          title: `Maximum Likelihood Estimation`,
          content: `Choose parameters maximizing P(data|θ). MLE for Gaussian mean is sample mean. Foundation for many ML algorithms.`,
          keyPoints: [
            `MLE finds most probable parameters given data`,
            `Log-likelihood easier to optimize (products → sums)`,
            `MLE can overfit with complex models`,
            `MAP adds prior for regularization`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-prob-1`,
          question: `Compute P(A|B) given P(B|A)=0.8, P(A)=0.3, P(B)=0.5.`,
          solution: `p_b_given_a, p_a, p_b = 0.8, 0.3, 0.5
print(p_b_given_a * p_a / p_b)`,
          difficulty: `medium`
        },
        {
          id: `ex-prob-2`,
          question: `Generate 5 samples from standard normal.`,
          solution: `import numpy as np
print(np.random.default_rng(0).normal(0, 1, 5))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-09`,
      references: [
        {
          id: `khan-probability`,
          title: `Statistics and Probability — Khan Academy`,
          source: `Khan Academy`,
          type: `course`,
          url: `https://www.khanacademy.org/math/statistics-probability`,
          description: `Probability distributions, Bayes theorem, and statistical inference.`
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
          id: `esl-hastie`,
          title: `The Elements of Statistical Learning`,
          source: `Stanford`,
          type: `book`,
          url: `https://hastie.su.domains/ElemStatLearn/`,
          description: `Free authoritative text on statistical learning methods and theory.`
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
      id: `ml-info-theory`,
      title: `Information Theory & Entropy`,
      description: `Entropy, cross-entropy, KL divergence — core to classification loss.`,
      level: `beginner`,
      track: `ml`,
      sections: [
        {
          id: `entropy`,
          title: `Entropy`,
          content: `H(X) = -Σ P(x) log P(x). Measures uncertainty. Maximum when uniform distribution.`,
          example: `import numpy as np

def entropy(p):
    p = np.array(p)
    p = p[p > 0]
    return -np.sum(p * np.log2(p))

print(entropy([0.5, 0.5]))  # max for 2 outcomes
print(entropy([0.9, 0.1]))  # low uncertainty`,
          output: `1.0
0.4689955935895636`,
          keyPoints: [
            `Entropy in bits when using log2`,
            `Higher entropy = more uncertainty`,
            `Uniform distribution maximizes entropy`,
            `Decision trees use entropy for splitting`
          ]
        },
        {
          id: `cross-entropy`,
          title: `Cross-Entropy Loss`,
          content: `H(p,q) = -Σ p(x) log q(x). Classification loss compares predicted q to true p. Log loss for binary classification.`,
          example: `import numpy as np

def cross_entropy(y_true, y_pred):
    y_pred = np.clip(y_pred, 1e-15, 1 - 1e-15)
    return -np.mean(y_true * np.log(y_pred) + (1 - y_true) * np.log(1 - y_pred))

print(round(cross_entropy(1, 0.9), 4))`,
          output: `0.1054`,
          keyPoints: [
            `Cross-entropy is standard classification loss`,
            `Heavily penalizes confident wrong predictions`,
            `Numerical stability requires clipping`,
            `Equivalent to negative log-likelihood`
          ]
        },
        {
          id: `kl`,
          title: `KL Divergence`,
          content: `D_KL(p||q) = Σ p(x) log(p(x)/q(x)). Measures difference between distributions. Non-negative, zero iff p=q.`,
          keyPoints: [
            `KL divergence is asymmetric`,
            `Used in VAE loss and knowledge distillation`,
            `Not a true metric (no triangle inequality)`,
            `Minimizing cross-entropy ≈ minimizing KL to true distribution`
          ]
        },
        {
          id: `mutual-info`,
          title: `Mutual Information`,
          content: `I(X;Y) = H(X) - H(X|Y). Measures shared information. Used in feature selection.`,
          keyPoints: [
            `Mutual information captures nonlinear dependencies`,
            `Zero iff variables are independent`,
            `Used in decision tree feature selection`,
            `Harder to estimate than correlation`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-info-1`,
          question: `Compute binary cross-entropy for y=1, pred=0.8.`,
          solution: `import numpy as np
print(-np.log(0.8))`,
          difficulty: `easy`
        },
        {
          id: `ex-info-2`,
          question: `Compute entropy of uniform distribution over 4 outcomes.`,
          solution: `import numpy as np
print(-np.sum([0.25]*4 * np.log2([0.25]*4)))`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 25,
      module: `module-09`,
      references: [
        {
          id: `cover-thomas-info-theory`,
          title: `Elements of Information Theory`,
          source: `Wiley`,
          type: `book`,
          url: `https://www.elementsofinformationtheory.com/`,
          description: `Definitive reference for entropy, mutual information, and coding theory.`
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
          id: `esl-hastie`,
          title: `The Elements of Statistical Learning`,
          source: `Stanford`,
          type: `book`,
          url: `https://hastie.su.domains/ElemStatLearn/`,
          description: `Free authoritative text on statistical learning methods and theory.`
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
      id: `ml-optimization`,
      title: `Optimization & Gradient Descent`,
      description: `Finding minima of loss functions iteratively.`,
      level: `beginner`,
      track: `ml`,
      sections: [
        {
          id: `gd`,
          title: `Gradient Descent`,
          content: `θ := θ - α∇L(θ). Learning rate α controls step size. Iterate until convergence.`,
          example: `import numpy as np

# Minimize f(x) = x^2
def gradient(x): return 2 * x

x = 5.0
lr = 0.1
for _ in range(50):
    x = x - lr * gradient(x)
print(round(x, 6))`,
          output: `0.0`,
          keyPoints: [
            `Learning rate most important hyperparameter`,
            `Too large α diverges, too small slow`,
            `Convergence when gradient near zero`,
            `Batch/mini-batch/stochastic variants`
          ]
        },
        {
          id: `variants`,
          title: `SGD, Momentum, Adam`,
          content: `SGD: one sample at a time. Momentum: accumulate velocity. Adam: adaptive per-parameter learning rates — default for DL.`,
          pseudoCode: `FOR each epoch:
    FOR each mini-batch:
        compute gradient
        update weights with optimizer
    evaluate on validation set`,
          keyPoints: [
            `Mini-batch balances speed and stability`,
            `Momentum helps escape local minima and ravines`,
            `Adam adapts learning rate per parameter`,
            `Learning rate scheduling improves convergence`
          ]
        },
        {
          id: `convex`,
          title: `Convex vs Non-Convex`,
          content: `Convex functions have one global minimum. Neural network loss is non-convex — many local minima but SGD often finds good solutions.`,
          keyPoints: [
            `Linear regression loss is convex`,
            `Deep network loss surfaces are highly non-convex`,
            `Saddle points more common than local minima in high-D`,
            `Overparameterization helps optimization in DL`
          ]
        },
        {
          id: `regularization`,
          title: `Regularization in Optimization`,
          content: `L1/L2 penalties constrain weights. Early stopping halts when validation loss increases. Dropout during training.`,
          example: `import numpy as np

# L2 regularization adds lambda * ||w||^2 to loss
w = np.array([3.0, -4.0])
l2_penalty = 0.01 * np.sum(w ** 2)
print(round(l2_penalty, 4))`,
          output: `0.25`,
          keyPoints: [
            `L2 (ridge) shrinks weights toward zero`,
            `L1 (lasso) drives weights to exactly zero`,
            `Regularization prevents overfitting`,
            `Weight decay in AdamW decouples L2 from adaptive rates`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-opt-1`,
          question: `Run 10 steps of gradient descent on f(x)=x^2 starting x=3, lr=0.1.`,
          solution: `x = 3.0
for _ in range(10):
    x = x - 0.1 * (2 * x)
print(round(x, 4))`,
          difficulty: `easy`
        },
        {
          id: `ex-opt-2`,
          question: `Compute L2 penalty for weights [1, -2, 3] with lambda=0.1.`,
          solution: `import numpy as np
w = np.array([1, -2, 3])
print(round(0.1 * np.sum(w**2), 2))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-09`,
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
          id: `adam-paper`,
          title: `Adam: A Method for Stochastic Optimization`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1412.6980`,
          description: `Adaptive learning rate optimizer used as default in most deep learning training.`
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
        }
      ]
    }
];
