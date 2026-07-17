import type { Topic } from '../../types';

export const module15Topics: Topic[] = [
{
      id: `pt-tensors`,
      title: `PyTorch Tensors`,
      description: `PyTorch fundamental data structure with GPU support.`,
      level: `intermediate`,
      track: `dl`,
      sections: [
        {
          id: `tensor-basics`,
          title: `Creating Tensors`,
          content: `torch.tensor(), torch.zeros(), torch.randn(). Similar to NumPy but with GPU support and autograd.

- Tensors analogous to NumPy ndarrays
- dtype and device are tensor properties
- torch.float32 default for DL
- GPU tensors on cuda device`,
          example: `import torch

a = torch.tensor([1.0, 2.0, 3.0])
b = torch.randn(3, 4)
c = torch.zeros(2, 3, dtype=torch.float32)
print(a.dtype, b.shape, c.device)`,
          output: `torch.float32 torch.Size([3, 4]) cpu`,
          keyPoints: [
            `Tensors analogous to NumPy ndarrays`,
            `dtype and device are tensor properties`,
            `torch.float32 default for DL`,
            `GPU tensors on cuda device`
          ],
          pseudoCode: `Creating Tensors

1. Tensors analogous to NumPy ndarrays
2. dtype and device are tensor properties
3. torch.float32 default for DL
4. GPU tensors on cuda device`
        },
        {
          id: `ops`,
          title: `Tensor Operations`,
          content: `Element-wise ops, matrix multiply @, broadcasting. torch.matmul, .T for transpose. In-place ops suffixed with _.

- @ operator for matrix multiply
- Broadcasting rules same as NumPy
- Avoid in-place ops on tensors with grad
- torch.einsum for complex tensor operations`,
          example: `import torch

a = torch.randn(3, 4)
b = torch.randn(4, 5)
c = a @ b
print(c.shape)
print((a * 2).shape)`,
          output: `torch.Size([3, 5])
torch.Size([3, 4])`,
          keyPoints: [
            `@ operator for matrix multiply`,
            `Broadcasting rules same as NumPy`,
            `Avoid in-place ops on tensors with grad`,
            `torch.einsum for complex tensor operations`
          ],
          pseudoCode: `Tensor Operations

1. @ operator for matrix multiply
2. Broadcasting rules same as NumPy
3. Avoid in-place ops on tensors with grad
4. torch.einsum for complex tensor operations`
        },
        {
          id: `numpy-bridge`,
          title: `NumPy Interoperability`,
          content: `tensor.numpy() for CPU tensors. torch.from_numpy() shares memory with NumPy array.

- Zero-copy between NumPy and CPU tensors
- GPU tensors must .cpu() before .numpy()
- Convert dtype explicitly when needed
- Use tensor for all DL computations`,
          example: `import torch
import numpy as np

np_arr = np.array([1.0, 2.0, 3.0])
tensor = torch.from_numpy(np_arr)
np_back = tensor.numpy()
print(np_back)`,
          output: `[1. 2. 3.]`,
          keyPoints: [
            `Zero-copy between NumPy and CPU tensors`,
            `GPU tensors must .cpu() before .numpy()`,
            `Convert dtype explicitly when needed`,
            `Use tensor for all DL computations`
          ],
          pseudoCode: `NumPy Interoperability

1. Zero-copy between NumPy and CPU tensors
2. GPU tensors must .cpu() before .numpy()
3. Convert dtype explicitly when needed
4. Use tensor for all DL computations`
        },
        {
          id: `device`,
          title: `Device Management`,
          content: `torch.device("cuda" if torch.cuda.is_available() else "cpu"). tensor.to(device). model.to(device).

- Always move model AND data to same device
- Check cuda availability before GPU use
- MPS device for Apple Silicon
- torch.cuda.empty_cache() frees GPU memory`,
          example: `import torch

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
x = torch.randn(3, 3).to(device)
print(x.device)`,
          keyPoints: [
            `Always move model AND data to same device`,
            `Check cuda availability before GPU use`,
            `MPS device for Apple Silicon`,
            `torch.cuda.empty_cache() frees GPU memory`
          ],
          pseudoCode: `Device Management

1. Always move model AND data to same device
2. Check cuda availability before GPU use
3. MPS device for Apple Silicon
4. torch.cuda.empty_cache() frees GPU memory`
        }
      ],
      exercises: [
        {
          id: `ex-pt-1`,
          question: `Create 2x3 tensor of ones in PyTorch.`,
          solution: `import torch
print(torch.ones(2, 3))`,
          difficulty: `easy`
        },
        {
          id: `ex-pt-2`,
          question: `Matrix multiply 2x3 @ 3x4 tensors, print shape.`,
          solution: `import torch
print((torch.randn(2,3) @ torch.randn(3,4)).shape)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-15`,
      references: [
        {
          id: `pytorch-tensors`,
          title: `PyTorch Tensor Tutorial`,
          source: `PyTorch`,
          type: `documentation`,
          url: `https://pytorch.org/tutorials/beginner/basics/tensorqs_tutorial.html`,
          description: `Creating, indexing, and operating on PyTorch tensors with GPU support.`
        },
        {
          id: `pytorch-tutorials`,
          title: `PyTorch Tutorials`,
          source: `PyTorch`,
          type: `documentation`,
          url: `https://pytorch.org/tutorials/`,
          description: `Official tutorials from tensors through training loops and deployment.`
        },
        {
          id: `numpy-quickstart`,
          title: `NumPy Quickstart Tutorial`,
          source: `NumPy`,
          type: `documentation`,
          url: `https://numpy.org/doc/stable/user/quickstart.html`,
          description: `Creating arrays, indexing, and basic operations with ndarrays.`
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
      id: `pt-autograd`,
      title: `Autograd & Computational Graphs`,
      description: `Automatic differentiation engine in PyTorch.`,
      level: `intermediate`,
      track: `dl`,
      sections: [
        {
          id: `grad`,
          title: `requires_grad & backward`,
          content: `Set requires_grad=True to track gradients. loss.backward() computes gradients. tensor.grad accesses result.

- Gradients accumulate — zero with optimizer.zero_grad()
- backward() only on scalar loss
- retain_graph=True for multiple backward passes
- detach() stops gradient flow`,
          example: `import torch

x = torch.tensor(3.0, requires_grad=True)
y = x ** 2 + 2 * x
y.backward()
print(x.grad)  # dy/dx = 2x + 2 = 8`,
          output: `8.0`,
          keyPoints: [
            `Gradients accumulate — zero with optimizer.zero_grad()`,
            `backward() only on scalar loss`,
            `retain_graph=True for multiple backward passes`,
            `detach() stops gradient flow`
          ],
          pseudoCode: `requires_grad & backward

1. Gradients accumulate — zero with optimizer.zero_grad()
2. backward() only on scalar loss
3. retain_graph=True for multiple backward passes
4. detach() stops gradient flow`
        },
        {
          id: `graph`,
          title: `Computational Graph`,
          content: `PyTorch builds dynamic graph during forward pass. Nodes are tensors, edges are operations. Graph freed after backward by default.

- Dynamic graph: rebuilt each forward pass
- Enables Python control flow in models
- Contrast with TensorFlow static graphs (1.x)
- torch.no_grad() disables graph for inference`,
          keyPoints: [
            `Dynamic graph: rebuilt each forward pass`,
            `Enables Python control flow in models`,
            `Contrast with TensorFlow static graphs (1.x)`,
            `torch.no_grad() disables graph for inference`
          ],
          pseudoCode: `Computational Graph

1. Dynamic graph: rebuilt each forward pass
2. Enables Python control flow in models
3. Contrast with TensorFlow static graphs (1.x)
4. torch.no_grad() disables graph for inference`
        },
        {
          id: `leaf`,
          title: `Leaf Tensors & Parameters`,
          content: `Leaf tensors are graph roots (parameters, inputs). Only leaf tensors retain .grad after backward. nn.Parameter wraps trainable weights.

- nn.Parameter automatically requires_grad
- Non-leaf tensor gradients not retained by default
- Register buffers for non-trainable state (BN stats)
- model.parameters() yields all trainable params`,
          example: `import torch
import torch.nn as nn

layer = nn.Linear(10, 5)
print(layer.weight.requires_grad)
print(layer.weight.is_leaf)`,
          keyPoints: [
            `nn.Parameter automatically requires_grad`,
            `Non-leaf tensor gradients not retained by default`,
            `Register buffers for non-trainable state (BN stats)`,
            `model.parameters() yields all trainable params`
          ],
          pseudoCode: `Leaf Tensors & Parameters

1. nn.Parameter automatically requires_grad
2. Non-leaf tensor gradients not retained by default
3. Register buffers for non-trainable state (BN stats)
4. model.parameters() yields all trainable params`
        },
        {
          id: `higher`,
          title: `Higher-Order Gradients`,
          content: `create_graph=True enables second derivatives. Used in meta-learning and some GAN training.

- Second-order for Hessian-vector products
- Meta-learning (MAML) uses higher-order grads
- Expensive — rarely needed in standard training
- torch.autograd.grad for explicit gradient computation`,
          keyPoints: [
            `Second-order for Hessian-vector products`,
            `Meta-learning (MAML) uses higher-order grads`,
            `Expensive — rarely needed in standard training`,
            `torch.autograd.grad for explicit gradient computation`
          ],
          pseudoCode: `Higher-Order Gradients

1. Second-order for Hessian-vector products
2. Meta-learning (MAML) uses higher-order grads
3. Expensive — rarely needed in standard training
4. torch.autograd.grad for explicit gradient computation`
        }
      ],
      exercises: [
        {
          id: `ex-ag-1`,
          question: `Compute gradient of y=x^2 at x=5 using autograd.`,
          solution: `import torch
x = torch.tensor(5.0, requires_grad=True)
(x**2).backward()
print(x.grad)`,
          difficulty: `easy`
        },
        {
          id: `ex-ag-2`,
          question: `Verify nn.Linear weight has requires_grad True.`,
          solution: `import torch.nn as nn
print(nn.Linear(5, 3).weight.requires_grad)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-15`,
      references: [
        {
          id: `pytorch-autograd`,
          title: `PyTorch Autograd Mechanics`,
          source: `PyTorch`,
          type: `documentation`,
          url: `https://pytorch.org/tutorials/beginner/blitz/autograd_tutorial.html`,
          description: `Automatic differentiation and computational graph construction.`
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
          id: `goodfellow-dl-book`,
          title: `Deep Learning`,
          source: `MIT Press`,
          type: `book`,
          url: `https://www.deeplearningbook.org/`,
          description: `Comprehensive free textbook covering neural networks, optimization, and architectures.`
        },
        {
          id: `pytorch-tutorials`,
          title: `PyTorch Tutorials`,
          source: `PyTorch`,
          type: `documentation`,
          url: `https://pytorch.org/tutorials/`,
          description: `Official tutorials from tensors through training loops and deployment.`
        }
      ]
    },
{
      id: `pt-module`,
      title: `Building NN with nn.Module`,
      description: `Object-oriented model definition in PyTorch.`,
      level: `intermediate`,
      track: `dl`,
      sections: [
        {
          id: `module`,
          title: `nn.Module Basics`,
          content: `Subclass nn.Module, define layers in __init__, forward pass in forward(). model.parameters() for optimizer.

- super().__init__() required in __init__
- Define layers in __init__ not forward
- forward() defines computation graph
- Sequential chains layers cleanly`,
          example: `import torch
import torch.nn as nn

class MLP(nn.Module):
    def __init__(self, in_dim, hidden, out_dim):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(in_dim, hidden),
            nn.ReLU(),
            nn.Linear(hidden, out_dim)
        )
    def forward(self, x):
        return self.net(x)

model = MLP(10, 64, 3)
print(model(torch.randn(5, 10)).shape)`,
          output: `torch.Size([5, 3])`,
          keyPoints: [
            `super().__init__() required in __init__`,
            `Define layers in __init__ not forward`,
            `forward() defines computation graph`,
            `Sequential chains layers cleanly`
          ],
          pseudoCode: `nn.Module Basics

1. super().__init__() required in __init__
2. Define layers in __init__ not forward
3. forward() defines computation graph
4. Sequential chains layers cleanly`
        },
        {
          id: `layers`,
          title: `Common Layers`,
          content: `nn.Linear, nn.Conv2d, nn.LSTM, nn.Embedding, nn.Dropout, nn.BatchNorm2d. Activation: nn.ReLU, nn.GELU, nn.Softmax.

- Linear: fully connected layer
- Conv2d: spatial feature extraction
- Embedding: lookup table for tokens
- BatchNorm1d/2d for normalization`,
          keyPoints: [
            `Linear: fully connected layer`,
            `Conv2d: spatial feature extraction`,
            `Embedding: lookup table for tokens`,
            `BatchNorm1d/2d for normalization`
          ],
          pseudoCode: `Common Layers

1. Linear: fully connected layer
2. Conv2d: spatial feature extraction
3. Embedding: lookup table for tokens
4. BatchNorm1d/2d for normalization`
        },
        {
          id: `loss-opt`,
          title: `Loss Functions & Optimizers`,
          content: `nn.CrossEntropyLoss (includes softmax). nn.MSELoss. Optimizers: torch.optim.SGD, Adam, AdamW.

- CrossEntropyLoss expects raw logits not softmax
- zero_grad before backward prevents accumulation
- Adam default optimizer for most tasks
- AdamW decouples weight decay from Adam`,
          example: `import torch
import torch.nn as nn
import torch.optim as optim

model = nn.Linear(10, 3)
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

out = model(torch.randn(4, 10))
loss = criterion(out, torch.tensor([0, 1, 2, 0]))
optimizer.zero_grad()
loss.backward()
optimizer.step()
print(round(loss.item(), 4))`,
          keyPoints: [
            `CrossEntropyLoss expects raw logits not softmax`,
            `zero_grad before backward prevents accumulation`,
            `Adam default optimizer for most tasks`,
            `AdamW decouples weight decay from Adam`
          ],
          pseudoCode: `Loss Functions & Optimizers

1. CrossEntropyLoss expects raw logits not softmax
2. zero_grad before backward prevents accumulation
3. Adam default optimizer for most tasks
4. AdamW decouples weight decay from Adam`
        },
        {
          id: `save`,
          title: `Saving & Loading Models`,
          content: `torch.save(model.state_dict(), path). model.load_state_dict(torch.load(path)). Save optimizer state for resume.

- state_dict saves learned parameters only
- Save full checkpoint: model + optimizer + epoch
- model.eval() before inference
- torch.load with map_location for CPU loading`,
          keyPoints: [
            `state_dict saves learned parameters only`,
            `Save full checkpoint: model + optimizer + epoch`,
            `model.eval() before inference`,
            `torch.load with map_location for CPU loading`
          ],
          pseudoCode: `Saving & Loading Models

1. state_dict saves learned parameters only
2. Save full checkpoint: model + optimizer + epoch
3. model.eval() before inference
4. torch.load with map_location for CPU loading`
        }
      ],
      exercises: [
        {
          id: `ex-mod-1`,
          question: `Create nn.Sequential with Linear(4,8), ReLU, Linear(8,2).`,
          solution: `import torch.nn as nn
m = nn.Sequential(nn.Linear(4,8), nn.ReLU(), nn.Linear(8,2))
print(len(list(m.children())))`,
          difficulty: `easy`
        },
        {
          id: `ex-mod-2`,
          question: `Count parameters in nn.Linear(10, 5).`,
          solution: `import torch.nn as nn
print(sum(p.numel() for p in nn.Linear(10, 5).parameters()))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-15`,
      references: [
        {
          id: `pytorch-nn-module`,
          title: `PyTorch nn.Module Guide`,
          source: `PyTorch`,
          type: `documentation`,
          url: `https://pytorch.org/tutorials/beginner/basics/buildmodel_tutorial.html`,
          description: `Object-oriented model definition with layers, parameters, and forward pass.`
        },
        {
          id: `pytorch-tutorials`,
          title: `PyTorch Tutorials`,
          source: `PyTorch`,
          type: `documentation`,
          url: `https://pytorch.org/tutorials/`,
          description: `Official tutorials from tensors through training loops and deployment.`
        },
        {
          id: `fastai-course`,
          title: `fast.ai Practical Deep Learning`,
          source: `fast.ai`,
          type: `course`,
          url: `https://course.fast.ai/`,
          description: `Top-down, code-first approach to training state-of-the-art models.`
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
      id: `pt-training`,
      title: `DataLoaders & Training Loops`,
      description: `Efficient data loading and standard training loop pattern.`,
      level: `intermediate`,
      track: `dl`,
      sections: [
        {
          id: `dataset`,
          title: `Dataset & DataLoader`,
          content: `torch.utils.data.Dataset defines __len__ and __getitem__. DataLoader batches, shuffles, and parallelizes loading.

- DataLoader handles batching and shuffling
- num_workers for parallel data loading
- pin_memory=True speeds GPU transfer
- Custom Dataset for any data source`,
          example: `import torch
from torch.utils.data import Dataset, DataLoader

class SimpleDataset(Dataset):
    def __init__(self, data, labels):
        self.data, self.labels = data, labels
    def __len__(self): return len(self.data)
    def __getitem__(self, idx):
        return self.data[idx], self.labels[idx]

ds = SimpleDataset(torch.randn(100, 10), torch.randint(0, 3, (100,)))
loader = DataLoader(ds, batch_size=16, shuffle=True)
batch_x, batch_y = next(iter(loader))
print(batch_x.shape, batch_y.shape)`,
          output: `torch.Size([16, 10]) torch.Size([16])`,
          keyPoints: [
            `DataLoader handles batching and shuffling`,
            `num_workers for parallel data loading`,
            `pin_memory=True speeds GPU transfer`,
            `Custom Dataset for any data source`
          ],
          pseudoCode: `Dataset & DataLoader

1. DataLoader handles batching and shuffling
2. num_workers for parallel data loading
3. pin_memory=True speeds GPU transfer
4. Custom Dataset for any data source`
        },
        {
          id: `loop`,
          title: `Training Loop Pattern`,
          content: `Standard loop: for epoch → for batch → forward → loss → backward → step → log. Validate after each epoch.

- model.train() enables dropout/BN training mode
- model.eval() + torch.no_grad() for validation
- Track metrics per epoch not per batch average
- Set seed for reproducibility`,
          example: `import torch
import torch.nn as nn

# Training step pattern
def train_step(model, batch_x, batch_y, optimizer, criterion):
    model.train()
    optimizer.zero_grad()
    output = model(batch_x)
    loss = criterion(output, batch_y)
    loss.backward()
    optimizer.step()
    return loss.item()

print("Pattern defined")`,
          output: `Pattern defined`,
          keyPoints: [
            `model.train() enables dropout/BN training mode`,
            `model.eval() + torch.no_grad() for validation`,
            `Track metrics per epoch not per batch average`,
            `Set seed for reproducibility`
          ],
          pseudoCode: `Training Loop Pattern

1. model.train() enables dropout/BN training mode
2. model.eval() + torch.no_grad() for validation
3. Track metrics per epoch not per batch average
4. Set seed for reproducibility`
        },
        {
          id: `transforms`,
          title: `Transforms & Augmentation`,
          content: `torchvision.transforms for image preprocessing. Compose chains transforms. RandomHorizontalFlip, Normalize, ToTensor.

- ToTensor converts PIL to [C,H,W] float [0,1]
- Normalize with dataset mean/std
- Apply augmentation only to training set
- torchvision.datasets includes MNIST, CIFAR, ImageNet`,
          keyPoints: [
            `ToTensor converts PIL to [C,H,W] float [0,1]`,
            `Normalize with dataset mean/std`,
            `Apply augmentation only to training set`,
            `torchvision.datasets includes MNIST, CIFAR, ImageNet`
          ],
          pseudoCode: `Transforms & Augmentation

1. ToTensor converts PIL to [C,H,W] float [0,1]
2. Normalize with dataset mean/std
3. Apply augmentation only to training set
4. torchvision.datasets includes MNIST, CIFAR, ImageNet`
        },
        {
          id: `scheduler`,
          title: `Learning Rate Schedulers`,
          content: `StepLR, CosineAnnealingLR, ReduceLROnPlateau. scheduler.step() after epoch or validation.

- Cosine annealing popular for vision training
- Warmup stabilizes transformer training
- ReduceLROnPlateau reacts to val metric
- Log learning rate alongside loss`,
          keyPoints: [
            `Cosine annealing popular for vision training`,
            `Warmup stabilizes transformer training`,
            `ReduceLROnPlateau reacts to val metric`,
            `Log learning rate alongside loss`
          ],
          pseudoCode: `Learning Rate Schedulers

1. Cosine annealing popular for vision training
2. Warmup stabilizes transformer training
3. ReduceLROnPlateau reacts to val metric
4. Log learning rate alongside loss`
        }
      ],
      exercises: [
        {
          id: `ex-train-1`,
          question: `Create DataLoader for 50 samples, batch_size=8, print batch count.`,
          solution: `import torch
from torch.utils.data import DataLoader, TensorDataset
loader = DataLoader(TensorDataset(torch.randn(50,4)), batch_size=8)
print(len(loader))`,
          difficulty: `easy`
        },
        {
          id: `ex-train-2`,
          question: `Write train/eval mode switch pattern as comment strings.`,
          solution: `steps = ["model.train()", "model.eval()", "torch.no_grad()"]
print(steps)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-15`,
      references: [
        {
          id: `pytorch-dataloader`,
          title: `PyTorch Data Loading Tutorial`,
          source: `PyTorch`,
          type: `documentation`,
          url: `https://pytorch.org/tutorials/beginner/basics/data_tutorial.html`,
          description: `Dataset, DataLoader, and efficient batching for training pipelines.`
        },
        {
          id: `pytorch-tutorials`,
          title: `PyTorch Tutorials`,
          source: `PyTorch`,
          type: `documentation`,
          url: `https://pytorch.org/tutorials/`,
          description: `Official tutorials from tensors through training loops and deployment.`
        },
        {
          id: `fastai-course`,
          title: `fast.ai Practical Deep Learning`,
          source: `fast.ai`,
          type: `course`,
          url: `https://course.fast.ai/`,
          description: `Top-down, code-first approach to training state-of-the-art models.`
        },
        {
          id: `pytorch-nn-module`,
          title: `PyTorch nn.Module Guide`,
          source: `PyTorch`,
          type: `documentation`,
          url: `https://pytorch.org/tutorials/beginner/basics/buildmodel_tutorial.html`,
          description: `Object-oriented model definition with layers, parameters, and forward pass.`
        }
      ]
    },
{
      id: `pt-gpu`,
      title: `GPU Training & Mixed Precision`,
      description: `Accelerate training with CUDA and automatic mixed precision.`,
      level: `intermediate`,
      track: `dl`,
      sections: [
        {
          id: `cuda`,
          title: `CUDA Training`,
          content: `Move model and batches to GPU. Monitor memory with nvidia-smi. torch.cuda.memory_summary() for debugging.

- Batch size limited by GPU memory
- Gradient accumulation simulates larger batches
- DataParallel for multi-GPU (prefer DistributedDataParallel)
- Clear cache between experiments`,
          example: `import torch

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = torch.nn.Linear(10, 5).to(device)
x = torch.randn(32, 10).to(device)
print(model(x).device)`,
          keyPoints: [
            `Batch size limited by GPU memory`,
            `Gradient accumulation simulates larger batches`,
            `DataParallel for multi-GPU (prefer DistributedDataParallel)`,
            `Clear cache between experiments`
          ],
          pseudoCode: `CUDA Training

1. Batch size limited by GPU memory
2. Gradient accumulation simulates larger batches
3. DataParallel for multi-GPU (prefer DistributedDataParallel)
4. Clear cache between experiments`
        },
        {
          id: `amp`,
          title: `Automatic Mixed Precision`,
          content: `torch.cuda.amp.autocast + GradScaler. FP16 forward/backward, FP32 weight updates. ~2x speedup on modern GPUs.

- autocast runs ops in FP16 where safe
- GradScaler prevents gradient underflow
- Minimal code change for significant speedup
- BF16 on A100+ avoids some FP16 issues`,
          example: `import torch

scaler = torch.cuda.amp.GradScaler(enabled=torch.cuda.is_available())
print("GradScaler ready")`,
          keyPoints: [
            `autocast runs ops in FP16 where safe`,
            `GradScaler prevents gradient underflow`,
            `Minimal code change for significant speedup`,
            `BF16 on A100+ avoids some FP16 issues`
          ],
          pseudoCode: `Automatic Mixed Precision

1. autocast runs ops in FP16 where safe
2. GradScaler prevents gradient underflow
3. Minimal code change for significant speedup
4. BF16 on A100+ avoids some FP16 issues`
        },
        {
          id: `compile`,
          title: `torch.compile (PyTorch 2.0)`,
          content: `model = torch.compile(model) JIT-compiles for faster execution. modes: default, reduce-overhead, max-autotune.

- PyTorch 2.0+ feature
- Up to 30%+ speedup on compatible models
- First run slower due to compilation
- May not work with all dynamic models`,
          keyPoints: [
            `PyTorch 2.0+ feature`,
            `Up to 30%+ speedup on compatible models`,
            `First run slower due to compilation`,
            `May not work with all dynamic models`
          ],
          pseudoCode: `torch.compile (PyTorch 2.0)

1. PyTorch 2.0+ feature
2. Up to 30%+ speedup on compatible models
3. First run slower due to compilation
4. May not work with all dynamic models`
        },
        {
          id: `distributed`,
          title: `Distributed Training Preview`,
          content: `DistributedDataParallel (DDP) for multi-GPU. Horovod, DeepSpeed for multi-node. Essential for large model training.

- DDP preferred over DataParallel
- Each GPU gets batch slice, syncs gradients
- DeepSpeed ZeRO reduces memory for large models
- FSDP for fully sharded data parallel`,
          keyPoints: [
            `DDP preferred over DataParallel`,
            `Each GPU gets batch slice, syncs gradients`,
            `DeepSpeed ZeRO reduces memory for large models`,
            `FSDP for fully sharded data parallel`
          ],
          pseudoCode: `Distributed Training Preview

1. DDP preferred over DataParallel
2. Each GPU gets batch slice, syncs gradients
3. DeepSpeed ZeRO reduces memory for large models
4. FSDP for fully sharded data parallel`
        }
      ],
      exercises: [
        {
          id: `ex-gpu-1`,
          question: `Check if CUDA available and print device count.`,
          solution: `import torch
print(torch.cuda.is_available(), torch.cuda.device_count())`,
          difficulty: `easy`
        },
        {
          id: `ex-gpu-2`,
          question: `Move tensor to cuda if available else cpu.`,
          solution: `import torch
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
print(torch.tensor([1.0]).to(device).device)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-15`,
      references: [
        {
          id: `pytorch-cuda`,
          title: `PyTorch CUDA Semantics`,
          source: `PyTorch`,
          type: `documentation`,
          url: `https://pytorch.org/docs/stable/notes/cuda.html`,
          description: `Moving tensors to GPU, multi-GPU training, and CUDA best practices.`
        },
        {
          id: `pytorch-amp`,
          title: `Automatic Mixed Precision`,
          source: `PyTorch`,
          type: `documentation`,
          url: `https://pytorch.org/docs/stable/amp.html`,
          description: `Mixed precision training for faster GPU computation with minimal accuracy loss.`
        },
        {
          id: `pytorch-tutorials`,
          title: `PyTorch Tutorials`,
          source: `PyTorch`,
          type: `documentation`,
          url: `https://pytorch.org/tutorials/`,
          description: `Official tutorials from tensors through training loops and deployment.`
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
    }
];
