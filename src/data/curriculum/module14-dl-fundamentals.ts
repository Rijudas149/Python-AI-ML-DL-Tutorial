import type { Topic } from '../../types';

export const module14Topics: Topic[] = [
{
      id: `dl-nn-basics`,
      title: `Neural Network Basics`,
      description: `Perceptrons, multi-layer networks, and forward propagation.`,
      level: `beginner`,
      track: `dl`,
      sections: [
        {
          id: `perceptron`,
          title: `The Perceptron`,
          content: `Single neuron: output = activation(w·x + b). Stacked layers create MLP (Multi-Layer Perceptron).

Universal function approximator with enough hidden units.`,
          example: `import numpy as np

def forward(X, W, b, activation=np.tanh):
    return activation(X @ W + b)

X = np.array([[1.0, 2.0]])
W = np.array([[0.5], [0.3]])
print(forward(X, W, np.array([0.1])))`,
          keyPoints: [
            `Neural network = composed non-linear transformations`,
            `Hidden layers learn hierarchical features`,
            `Width and depth trade off for capacity`,
            `Start simple then increase complexity`
          ]
        },
        {
          id: `mlp`,
          title: `Multi-Layer Perceptron`,
          content: `Input layer → hidden layer(s) → output layer. Each layer: linear transform + non-linear activation.

Depth enables hierarchical feature learning.`,
          pseudoCode: `FOR each layer L:
    z = W_L @ a_{L-1} + b_L
    a_L = activation(z)`,
          keyPoints: [
            `Depth: number of hidden layers`,
            `Width: neurons per layer`,
            `Too deep without skip connections hard to train`,
            `1-2 hidden layers sufficient for many tabular tasks`
          ]
        },
        {
          id: `forward`,
          title: `Forward Propagation`,
          content: `Pass input through network layer by layer to produce prediction. Matrix operations enable batch processing.`,
          example: `import numpy as np

def relu(z): return np.maximum(0, z)

X = np.random.randn(32, 10)  # batch of 32, 10 features
W1, b1 = np.random.randn(10, 64), np.zeros(64)
W2, b2 = np.random.randn(64, 3), np.zeros(3)

h = relu(X @ W1 + b1)
out = h @ W2 + b2  # logits
print(out.shape)`,
          output: `(32, 3)`,
          keyPoints: [
            `Batch dimension enables parallel GPU computation`,
            `Output layer produces logits for classification`,
            `Softmax applied to logits for probabilities`,
            `Forward pass is inference/prediction`
          ]
        },
        {
          id: `capacity`,
          title: `Network Capacity`,
          content: `More parameters = more capacity to fit complex functions. Risk overfitting with too much capacity on small data.`,
          keyPoints: [
            `Parameters = weights + biases count`,
            `Capacity must match data complexity`,
            `Regularization controls effective capacity`,
            `Modern networks vastly overparameterized yet generalize`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-nn-1`,
          question: `Implement ReLU activation for array [-1, 0, 2].`,
          solution: `import numpy as np
def relu(z): return np.maximum(0, z)
print(relu(np.array([-1, 0, 2])))`,
          difficulty: `easy`
        },
        {
          id: `ex-nn-2`,
          question: `Compute output shape of batch 16 through layer 10→64→3.`,
          solution: `print((16, 3))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-14`,
      references: [
        {
          id: `goodfellow-dl-book`,
          title: `Deep Learning`,
          source: `MIT Press`,
          type: `book`,
          url: `https://www.deeplearningbook.org/`,
          description: `Comprehensive free textbook covering neural networks, optimization, and architectures.`
        },
        {
          id: `3blue1brown-nn`,
          title: `Neural Networks — 3Blue1Brown`,
          source: `3Blue1Brown`,
          type: `video`,
          url: `https://www.3blue1brown.com/topics/neural-networks`,
          description: `Visual intuition for neurons, layers, backpropagation, and gradient descent.`
        },
        {
          id: `stanford-cs230`,
          title: `Stanford CS230 — Deep Learning`,
          source: `Stanford CS230`,
          type: `course`,
          url: `http://cs230.stanford.edu/`,
          description: `Andrew Ng's deep learning course covering NN fundamentals and best practices.`
        },
        {
          id: `mit-6s191`,
          title: `MIT 6.S191 — Introduction to Deep Learning`,
          source: `MIT`,
          type: `course`,
          url: `http://introtodeeplearning.com/`,
          description: `Accessible MIT course with lectures on CNNs, RNNs, and generative models.`
        }
      ]
    },
{
      id: `dl-activations`,
      title: `Activation Functions`,
      description: `Non-linear functions enabling networks to learn complex patterns.`,
      level: `beginner`,
      track: `dl`,
      sections: [
        {
          id: `relu`,
          title: `ReLU & Variants`,
          content: `ReLU: max(0, x). Default for hidden layers. Leaky ReLU, PReLU, ELU address dying ReLU problem.`,
          example: `import numpy as np

def relu(z): return np.maximum(0, z)
def leaky_relu(z, alpha=0.01): return np.where(z > 0, z, alpha * z)

z = np.array([-2, -1, 0, 1, 2])
print(relu(z))
print(leaky_relu(z))`,
          output: `[0 0 0 1 2]
[-0.02 -0.01  0.    1.    2.  ]`,
          keyPoints: [
            `ReLU sparse activation — efficient computation`,
            `Dying ReLU: neuron always outputs 0`,
            `Leaky ReLU keeps small gradient for negatives`,
            `GELU preferred in transformers`
          ]
        },
        {
          id: `sigmoid-tanh`,
          title: `Sigmoid & Tanh`,
          content: `Sigmoid: (0,1) for binary output. Tanh: (-1,1) zero-centered.

Vanishing gradient in deep networks limits hidden layer use.`,
          example: `import numpy as np

def sigmoid(z): return 1 / (1 + np.exp(-z))
def tanh(z): return np.tanh(z)

print(sigmoid(np.array([0, 2, -2])).round(3))
print(tanh(np.array([0, 2, -2])).round(3))`,
          output: `[0.5  0.881 0.119]
[ 0.     0.964 -0.964]`,
          keyPoints: [
            `Sigmoid for binary classification output layer`,
            `Tanh zero-centered — faster convergence than sigmoid`,
            `Both saturate causing vanishing gradients`,
            `Avoid in hidden layers of deep networks`
          ]
        },
        {
          id: `softmax`,
          title: `Softmax`,
          content: `Multi-class output: softmax(zᵢ) = e^zᵢ/Σe^zⱼ. Outputs sum to 1. Combined with cross-entropy loss.`,
          example: `import numpy as np

def softmax(z):
    exp_z = np.exp(z - z.max())
    return exp_z / exp_z.sum()

print(softmax(np.array([2.0, 1.0, 0.1])).round(3))`,
          output: `[0.659 0.242 0.099]`,
          keyPoints: [
            `Subtract max for numerical stability`,
            `Output layer only — not hidden layers`,
            `Cross-entropy + softmax gradient simplifies to p - y`,
            `Temperature scaling adjusts confidence`
          ]
        },
        {
          id: `modern`,
          title: `Modern Activations`,
          content: `GELU (Gaussian Error Linear Unit) in BERT/GPT. Swish/SiLU: x·sigmoid(x). Smooth activations help deep transformers.`,
          keyPoints: [
            `GELU: x * Φ(x) where Φ is CDF of standard normal`,
            `Swish smooth near zero unlike ReLU`,
            `Activation choice less critical with good initialization`,
            `Match activation to architecture (GELU for transformers)`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-act-1`,
          question: `Implement softmax and verify output sums to 1.`,
          solution: `import numpy as np
def softmax(z):
    e = np.exp(z - z.max())
    return e / e.sum()
p = softmax(np.array([1.0, 2.0, 3.0]))
print(round(p.sum(), 6))`,
          difficulty: `easy`
        },
        {
          id: `ex-act-2`,
          question: `Apply GELU approximation x * sigmoid(1.702*x) to x=1.`,
          solution: `import numpy as np
x = 1.0
print(round(x / (1 + np.exp(-1.702 * x)), 4))`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 25,
      module: `module-14`,
      references: [
        {
          id: `goodfellow-dl-book`,
          title: `Deep Learning`,
          source: `MIT Press`,
          type: `book`,
          url: `https://www.deeplearningbook.org/`,
          description: `Comprehensive free textbook covering neural networks, optimization, and architectures.`
        },
        {
          id: `3blue1brown-nn`,
          title: `Neural Networks — 3Blue1Brown`,
          source: `3Blue1Brown`,
          type: `video`,
          url: `https://www.3blue1brown.com/topics/neural-networks`,
          description: `Visual intuition for neurons, layers, backpropagation, and gradient descent.`
        },
        {
          id: `stanford-cs230`,
          title: `Stanford CS230 — Deep Learning`,
          source: `Stanford CS230`,
          type: `course`,
          url: `http://cs230.stanford.edu/`,
          description: `Andrew Ng's deep learning course covering NN fundamentals and best practices.`
        },
        {
          id: `fastai-course`,
          title: `fast.ai Practical Deep Learning`,
          source: `fast.ai`,
          type: `course`,
          url: `https://course.fast.ai/`,
          description: `Top-down, code-first approach to training state-of-the-art models.`
        }
      ]
    },
{
      id: `dl-loss`,
      title: `Loss Functions`,
      description: `Objective functions that neural networks minimize during training.`,
      level: `beginner`,
      track: `dl`,
      sections: [
        {
          id: `mse`,
          title: `MSE & MAE Loss`,
          content: `MSE: mean((y-ŷ)²). Differentiable, penalizes large errors. MAE: mean(|y-ŷ|). Robust to outliers.`,
          example: `import numpy as np

def mse_loss(y_true, y_pred):
    return np.mean((y_true - y_pred) ** 2)

print(mse_loss(np.array([1, 2, 3]), np.array([1.1, 2.2, 2.8])))`,
          output: `0.023333333333333334`,
          keyPoints: [
            `MSE standard for regression`,
            `MAE when outliers are problematic`,
            `Huber loss combines MSE and MAE benefits`,
            `Loss choice must match task and output activation`
          ]
        },
        {
          id: `ce`,
          title: `Cross-Entropy Loss`,
          content: `Binary: -[y log(ŷ) + (1-y)log(1-ŷ)]. Categorical: -Σ yᵢ log(ŷᵢ).

Standard for classification.`,
          example: `import numpy as np

def cross_entropy(y_true, y_pred):
    y_pred = np.clip(y_pred, 1e-15, 1 - 1e-15)
    return -np.mean(y_true * np.log(y_pred))

print(round(cross_entropy(1.0, 0.9), 4))`,
          output: `0.1054`,
          keyPoints: [
            `Use log-loss with sigmoid/softmax outputs`,
            `Label smoothing prevents overconfidence`,
            `Focal loss addresses class imbalance`,
            `Cross-entropy = negative log-likelihood`
          ]
        },
        {
          id: `multi-task`,
          title: `Multi-Task & Custom Losses`,
          content: `Combine losses with weights: L = α·L₁ + β·L₂. Custom losses for ranking, contrastive learning, GANs.`,
          keyPoints: [
            `Weight task losses by importance or uncertainty`,
            `Contrastive loss for embeddings (SimCLR, triplet)`,
            `Perceptual loss for image generation`,
            `Design loss to match evaluation metric when possible`
          ]
        },
        {
          id: `monitor`,
          title: `Monitoring Loss`,
          content: `Track train and validation loss. Divergence indicates overfitting.

Plateau suggests learning rate adjustment needed.`,
          keyPoints: [
            `Loss should decrease during training`,
            `Val loss increasing while train decreases = overfit`,
            `ReduceLROnPlateau on val loss`,
            `Early stopping saves best val loss checkpoint`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-loss-1`,
          question: `Compute MSE for y=[10,20], pred=[11,19].`,
          solution: `import numpy as np
print(np.mean((np.array([10,20]) - np.array([11,19]))**2))`,
          difficulty: `easy`
        },
        {
          id: `ex-loss-2`,
          question: `Binary cross-entropy for y=0, pred=0.1.`,
          solution: `import numpy as np
print(-np.log(1 - 0.1))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-14`,
      references: [
        {
          id: `goodfellow-dl-book`,
          title: `Deep Learning`,
          source: `MIT Press`,
          type: `book`,
          url: `https://www.deeplearningbook.org/`,
          description: `Comprehensive free textbook covering neural networks, optimization, and architectures.`
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
          id: `stanford-cs230`,
          title: `Stanford CS230 — Deep Learning`,
          source: `Stanford CS230`,
          type: `course`,
          url: `http://cs230.stanford.edu/`,
          description: `Andrew Ng's deep learning course covering NN fundamentals and best practices.`
        },
        {
          id: `fastai-course`,
          title: `fast.ai Practical Deep Learning`,
          source: `fast.ai`,
          type: `course`,
          url: `https://course.fast.ai/`,
          description: `Top-down, code-first approach to training state-of-the-art models.`
        }
      ]
    },
{
      id: `dl-backprop`,
      title: `Backpropagation`,
      description: `Computing gradients through the computational graph via chain rule.`,
      level: `beginner`,
      track: `dl`,
      sections: [
        {
          id: `concept`,
          title: `Backpropagation Concept`,
          content: `Forward pass computes output and loss. Backward pass applies chain rule from loss to each parameter.

Efficient via dynamic programming on computational graph.`,
          pseudoCode: `FOR layer L from output to input:
    dL/dz_L = upstream_gradient * activation_derivative
    dL/dW_L = dL/dz_L @ a_{L-1}^T
    dL/db_L = sum(dL/dz_L)
    propagate dL/da_{L-1} to previous layer`,
          keyPoints: [
            `Chain rule applied layer by layer`,
            `Computational graph tracks dependencies`,
            `Reverse mode AD efficient for many parameters`,
            `Same algorithm as autograd in PyTorch`
          ]
        },
        {
          id: `manual`,
          title: `Manual Backprop Example`,
          content: `2-layer network backprop by hand builds intuition. Matrix calculus for weight gradients.`,
          example: `import numpy as np

# Simple gradient descent on f(w) = w^2
w = 3.0
lr = 0.1
for _ in range(20):
    grad = 2 * w  # df/dw
    w = w - lr * grad
print(round(w, 6))`,
          output: `0.0`,
          keyPoints: [
            `Gradient points direction of steepest increase`,
            `Update in negative gradient direction`,
            `Manual backprop verifies autograd results`,
            `Vanishing gradient in deep sigmoid networks`
          ]
        },
        {
          id: `autograd`,
          title: `Automatic Differentiation`,
          content: `PyTorch autograd, TensorFlow GradientTape compute gradients automatically. reverse-mode AD for scalar loss.`,
          keyPoints: [
            `Autograd builds computational graph dynamically`,
            `tensor.backward() triggers reverse pass`,
            `requires_grad=True tracks gradients`,
            `No need for manual gradient derivation in practice`
          ]
        },
        {
          id: `vanishing`,
          title: `Vanishing & Exploding Gradients`,
          content: `Deep networks: gradients shrink (sigmoid/tanh) or grow exponentially. Solutions: ReLU, residual connections, gradient clipping, proper initialization.`,
          keyPoints: [
            `Vanishing: gradients near zero in early layers`,
            `Exploding: gradients overflow — clip to max norm`,
            `Batch normalization stabilizes gradients`,
            `ResNet skip connections enable very deep networks`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-bp-1`,
          question: `Gradient of f(w)=w^3 at w=2.`,
          solution: `w = 2
print(3 * w**2)`,
          difficulty: `easy`
        },
        {
          id: `ex-bp-2`,
          question: `Run 5 gradient descent steps on f(x)=x^2, x=4, lr=0.1.`,
          solution: `x = 4.0
for _ in range(5):
    x -= 0.1 * 2 * x
print(round(x, 2))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-14`,
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
          id: `goodfellow-dl-book`,
          title: `Deep Learning`,
          source: `MIT Press`,
          type: `book`,
          url: `https://www.deeplearningbook.org/`,
          description: `Comprehensive free textbook covering neural networks, optimization, and architectures.`
        },
        {
          id: `stanford-cs230`,
          title: `Stanford CS230 — Deep Learning`,
          source: `Stanford CS230`,
          type: `course`,
          url: `http://cs230.stanford.edu/`,
          description: `Andrew Ng's deep learning course covering NN fundamentals and best practices.`
        },
        {
          id: `pytorch-autograd`,
          title: `PyTorch Autograd Mechanics`,
          source: `PyTorch`,
          type: `documentation`,
          url: `https://pytorch.org/tutorials/beginner/blitz/autograd_tutorial.html`,
          description: `Automatic differentiation and computational graph construction.`
        }
      ]
    },
{
      id: `dl-init-reg`,
      title: `Weight Initialization & Regularization`,
      description: `Starting weights and techniques to prevent overfitting.`,
      level: `beginner`,
      track: `dl`,
      sections: [
        {
          id: `init`,
          title: `Weight Initialization`,
          content: `Xavier/Glorot: scale by 1/√n_in for tanh/sigmoid. He/Kaiming: scale by √(2/n_in) for ReLU.

Bad init slows or prevents convergence.`,
          example: `import numpy as np

n_in, n_out = 256, 128
# He initialization for ReLU
W = np.random.randn(n_in, n_out) * np.sqrt(2.0 / n_in)
print(W.std().round(4))`,
          keyPoints: [
            `Zero init breaks symmetry badly`,
            `Xavier for sigmoid/tanh activations`,
            `He/Kaiming for ReLU family`,
            `PyTorch nn.Linear uses Kaiming by default`
          ]
        },
        {
          id: `dropout`,
          title: `Dropout`,
          content: `Randomly zero neurons during training with probability p. Prevents co-adaptation. Scale by 1/(1-p) at inference or use inverted dropout.`,
          example: `import numpy as np

def dropout(x, p=0.5, training=True):
    if not training:
        return x
    mask = np.random.binomial(1, 1-p, x.shape)
    return x * mask / (1 - p)

x = np.ones((4, 4))
np.random.seed(42)
print(dropout(x, p=0.5).sum())`,
          keyPoints: [
            `Typical p=0.5 for hidden layers, 0.2 for input`,
            `Only active during training`,
            `MC dropout for uncertainty estimation`,
            `Less needed with batch norm in CNNs`
          ]
        },
        {
          id: `batchnorm`,
          title: `Batch Normalization`,
          content: `Normalize layer inputs across batch: (x-μ)/σ. Learnable scale γ and shift β.

Stabilizes training, allows higher learning rates.`,
          keyPoints: [
            `Normalizes intermediate activations`,
            `Acts as regularizer`,
            `Different behavior train vs eval — model.eval()`,
            `LayerNorm alternative for transformers/RNNs`
          ]
        },
        {
          id: `early-stop`,
          title: `Early Stopping & Data Augmentation`,
          content: `Stop training when validation loss stops improving. Data augmentation artificially expands training set.`,
          keyPoints: [
            `Early stopping simplest regularization`,
            `Save checkpoint at best val loss`,
            `Augmentation: rotation, flip, crop for images`,
            `Mixup/CutMix advanced augmentation for classification`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-init-1`,
          question: `He init std for layer with 256 inputs.`,
          solution: `import numpy as np
print(round(np.sqrt(2.0 / 256), 4))`,
          difficulty: `easy`
        },
        {
          id: `ex-init-2`,
          question: `Apply inverted dropout to [1,2,3,4] with p=0.5, seed=0.`,
          solution: `import numpy as np
np.random.seed(0)
x = np.array([1.,2.,3.,4.])
p = 0.5
mask = np.random.binomial(1, 1-p, x.shape)
print(x * mask / (1-p))`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 25,
      module: `module-14`,
      references: [
        {
          id: `dropout-paper`,
          title: `Dropout: A Simple Way to Prevent Neural Networks from Overfitting`,
          source: `JMLR`,
          type: `paper`,
          url: `https://jmlr.org/papers/v15/srivastava14a.html`,
          description: `Foundational regularization technique randomly dropping units during training.`
        },
        {
          id: `batch-norm-paper`,
          title: `Batch Normalization: Accelerating Deep Network Training`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1502.03167`,
          description: `Normalizes layer inputs to stabilize and accelerate deep network training.`
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
