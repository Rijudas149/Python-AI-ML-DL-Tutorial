import type { Topic } from '../../types';

export const module26Topics: Topic[] = [
{
      id: `gen-gan`,
      title: `Generative Adversarial Networks`,
      description: `Train generator and discriminator in adversarial equilibrium.`,
      level: `advanced`,
      track: `dl`,
      sections: [
        {
          id: `gan-arch`,
          title: `GAN Architecture`,
          content: `### Introduction

**Generator** G(z) maps noise z to fake samples. **Discriminator** D(x) classifies real vs fake.

### GAN Architecture

Minimax game: G tries to fool D; D tries to detect fakes. Loss drives G to match data distribution implicitly without explicit likelihood.

### Key Ideas

- Latent z usually Gaussian or uniform
- D too strong prevents G learning—balance capacity
- Non-saturation G loss log(1-D(G(z))) unstable—use -log D(G(z))
- Mode collapse: G outputs limited variety`,
          keyPoints: [
            `Latent z usually Gaussian or uniform`,
            `D too strong prevents G learning—balance capacity`,
            `Non-saturation G loss log(1-D(G(z))) unstable—use -log D(G(z))`,
            `Mode collapse: G outputs limited variety`
          ],
          diagram: `GAN Architecture
Noise → Generator → Fake Sample → Discriminator → Loss`,
          commonMistakes: [
            `Training generator and discriminator without balancing capacity — one dominates`,
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`,
            `Not moving tensors and model to the same device (CPU vs CUDA)`,
            `Using softmax outputs with \`BCELoss\` instead of logits with \`BCEWithLogitsLoss\``
          ]
        },
        {
          id: `dcgan`,
          title: `DCGAN & Convolutional GANs`,
          content: `### Introduction

Guidelines: use strided conv not pooling; batchnorm in G and D; ReLU in G (except tanh output); LeakyReLU in D. **DCGAN** stable on 64×64 images.

### DCGAN & Convolutional GANs

Progressive growing and StyleGAN scale to photorealistic faces.

### Key Ideas

- Tanh output matches normalized [-1,1] images
- BatchNorm stabilizes deep GAN training
- Label smoothing softens real targets
- Spectral norm constrains D Lipschitz constant

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `import torch
z = torch.randn(4, 100)
print(z.shape)`,
          output: `torch.Size([4, 100])`,
          keyPoints: [
            `Tanh output matches normalized [-1,1] images`,
            `BatchNorm stabilizes deep GAN training`,
            `Label smoothing softens real targets`,
            `Spectral norm constrains D Lipschitz constant`
          ],
          diagram: `DCGAN & Convolutional GANs
Image → Conv → ReLU → Pool → Flatten → Dense → Class`,
          commonMistakes: [
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Training generator and discriminator without balancing capacity — one dominates`,
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`,
            `Not moving tensors and model to the same device (CPU vs CUDA)`
          ]
        },
        {
          id: `training-tricks`,
          title: `Training Tricks`,
          content: `### Introduction

Alternate G and D updates; sometimes 2:1 ratio. **Gradient penalty (WGAN-GP)** enforces Lipschitz constraint.

### Training Tricks

**Exponential moving average** of G weights (StyleGAN). Track FID during training; early stopping when FID degrades.

### Key Ideas

- WGAN-GP replaces weight clipping
- EMA generator smoother outputs
- DiffAugment regularizes D on limited data
- Learning rate tuning critical`,
          keyPoints: [
            `WGAN-GP replaces weight clipping`,
            `EMA generator smoother outputs`,
            `DiffAugment regularizes D on limited data`,
            `Learning rate tuning critical`
          ],
          diagram: `Training Tricks
Query → Embed → Retrieve → Augment Prompt → Generate`,
          commonMistakes: [
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`,
            `Not moving tensors and model to the same device (CPU vs CUDA)`,
            `Using softmax outputs with \`BCELoss\` instead of logits with \`BCEWithLogitsLoss\``,
            `Gradient explosion without clipping or learning-rate tuning`
          ]
        },
        {
          id: `conditional`,
          title: `Conditional GANs`,
          content: `### Introduction

Concatenate class label or embedding to G and D inputs. **cGAN** controls generated class.

### Conditional GANs

**Pix2Pix** paired image translation with U-Net generator. **CycleGAN** unpaired translation via cycle consistency loss.

### Key Ideas

- Projection discriminator injects class info
- Pix2Pix needs aligned pairs
- Cycle consistency L1 enforces invertibility
- Attention gates improve long-range structure`,
          keyPoints: [
            `Projection discriminator injects class info`,
            `Pix2Pix needs aligned pairs`,
            `Cycle consistency L1 enforces invertibility`,
            `Attention gates improve long-range structure`
          ],
          diagram: `Conditional GANs
Tokens → Embedding → Self-Attention → FFN → Output`,
          commonMistakes: [
            `Using softmax outputs with \`BCELoss\` instead of logits with \`BCEWithLogitsLoss\``,
            `Gradient explosion without clipping or learning-rate tuning`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-gan-1`,
          question: `Sample latent noise z of shape (8, 100) for a GAN generator.`,
          solution: `import torch
z = torch.randn(8, 100)
print(z.shape)`,
          difficulty: `easy`
        },
        {
          id: `ex-gan-2`,
          question: `Compute generator loss -log(D(G(z))) for fake score 0.3.`,
          solution: `import math
fake_score = 0.3
g_loss = -math.log(fake_score)
print(round(g_loss, 2))`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 45,
      module: `module-26`,
      references: [
        {
          id: `gan-paper`,
          title: `Generative Adversarial Networks`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1406.2661`,
          description: `Adversarial training framework for generative modeling.`
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
          id: `stanford-cs231n`,
          title: `Stanford CS231n — CNNs for Visual Recognition`,
          source: `Stanford CS231n`,
          type: `course`,
          url: `http://cs231n.stanford.edu/`,
          description: `Definitive course on convolutional networks and computer vision.`
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
      id: `gen-vae`,
      title: `Variational Autoencoders`,
      description: `Learn latent probabilistic representations with reconstruction and KL losses.`,
      level: `advanced`,
      track: `dl`,
      sections: [
        {
          id: `vae`,
          title: `VAE Framework`,
          content: `### Introduction

Encoder outputs μ, σ of approximate posterior q(z|x). Reparameterization: z = μ + σ·ε, ε~N(0,1).

### VAE Framework

Decoder p(x|z) reconstructs x. Loss = reconstruction + KL(q(z|x) || p(z)) with prior p(z)=N(0,I).

### Key Ideas

- Reparameterization enables backprop through sampling
- KL regularizes latent space smoothness
- β-VAE trades reconstruction vs disentanglement
- Blurry reconstructions vs GAN sharpness`,
          keyPoints: [
            `Reparameterization enables backprop through sampling`,
            `KL regularizes latent space smoothness`,
            `β-VAE trades reconstruction vs disentanglement`,
            `Blurry reconstructions vs GAN sharpness`
          ],
          diagram: `VAE Framework
Tokens → Embedding → Self-Attention → FFN → Output`,
          commonMistakes: [
            `Not moving tensors and model to the same device (CPU vs CUDA)`,
            `Using softmax outputs with \`BCELoss\` instead of logits with \`BCEWithLogitsLoss\``,
            `Gradient explosion without clipping or learning-rate tuning`,
            `Training generator and discriminator without balancing capacity — one dominates`
          ]
        },
        {
          id: `latent`,
          title: `Latent Space Geometry`,
          content: `### Introduction

Smooth latent interpolations z1→z2 decode to plausible transitions. **Latent arithmetic**: z_smile - z_neutral + z_person.

### Latent Space Geometry

Visualization with t-SNE/UMAP on encoded z for cluster structure.

### Key Ideas

- Interpolate in latent not pixel space
- Disentanglement metrics: MIG, SAP
- Prior mismatch hurts generation quality
- Conditional VAE adds label to encoder/decoder

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `import torch
mu = torch.zeros(1, 2)
logvar = torch.zeros(1, 2)
eps = torch.randn_like(mu)
z = mu + torch.exp(0.5*logvar)*eps
print(z.shape)`,
          output: `torch.Size([1, 2])`,
          keyPoints: [
            `Interpolate in latent not pixel space`,
            `Disentanglement metrics: MIG, SAP`,
            `Prior mismatch hurts generation quality`,
            `Conditional VAE adds label to encoder/decoder`
          ],
          diagram: `Latent Space Geometry
Tokens → Embedding → Self-Attention → FFN → Output`,
          commonMistakes: [
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`,
            `Not moving tensors and model to the same device (CPU vs CUDA)`,
            `Using softmax outputs with \`BCELoss\` instead of logits with \`BCEWithLogitsLoss\``,
            `Gradient explosion without clipping or learning-rate tuning`
          ]
        },
        {
          id: `vae-variants`,
          title: `VAE Variants`,
          content: `### Introduction

**VQ-VAE** discrete codebook latents for sharper outputs. **NVAE** deep hierarchical VAE.

### VAE Variants

VAEs provide approximate likelihood—useful for anomaly detection via reconstruction error.

### Key Ideas

- VQ-VAE enables autoregressive priors over codes
- Hierarchical latents capture multi-scale structure
- High reconstruction error flags anomalies
- VAE+GAN hybrids (VAE-GAN) sharpen outputs`,
          keyPoints: [
            `VQ-VAE enables autoregressive priors over codes`,
            `Hierarchical latents capture multi-scale structure`,
            `High reconstruction error flags anomalies`,
            `VAE+GAN hybrids (VAE-GAN) sharpen outputs`
          ],
          diagram: `VAE Variants
Noise → Generator → Fake Sample → Discriminator → Loss`,
          commonMistakes: [
            `Gradient explosion without clipping or learning-rate tuning`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Training generator and discriminator without balancing capacity — one dominates`,
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`
          ]
        },
        {
          id: `sampling-vae`,
          title: `Sampling & Evaluation`,
          content: `### Introduction

Sample z~N(0,I), decode to generate. Quality lower than GANs on images but stable training.

### Sampling & Evaluation

Evaluate log-likelihood estimates (ELBO) and reconstruction FID for comparisons.

### Key Ideas

- ELBO lower bound on log p(x)
- Importance sampling tightens likelihood bound
- Posterior collapse when KL vanishes
- Use same FID pipeline as GANs for fairness`,
          keyPoints: [
            `ELBO lower bound on log p(x)`,
            `Importance sampling tightens likelihood bound`,
            `Posterior collapse when KL vanishes`,
            `Use same FID pipeline as GANs for fairness`
          ],
          diagram: `Sampling & Evaluation
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Training generator and discriminator without balancing capacity — one dominates`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-vae-1`,
          question: `Reparameterize: mu=0, logvar=0, eps~N(0,1) gives z=eps.`,
          solution: `import torch
mu = torch.zeros(1)
logvar = torch.zeros(1)
eps = torch.randn_like(mu)
z = mu + torch.exp(0.5 * logvar) * eps
print(z.shape)`,
          difficulty: `easy`
        },
        {
          id: `ex-vae-2`,
          question: `Compute KL for unit Gaussian prior: -0.5 * sum(1 + logvar - mu^2 - exp(logvar)).`,
          solution: `import torch
mu = torch.tensor([0.0, 0.5])
logvar = torch.tensor([-1.0, 0.0])
kl = -0.5 * torch.sum(1 + logvar - mu.pow(2) - logvar.exp())
print(round(float(kl), 2))`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 40,
      module: `module-26`,
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
          id: `gan-paper`,
          title: `Generative Adversarial Networks`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1406.2661`,
          description: `Adversarial training framework for generative modeling.`
        },
        {
          id: `ddpm-paper`,
          title: `Denoising Diffusion Probabilistic Models`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/2006.11239`,
          description: `Foundational diffusion model paper powering modern image generation.`
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
    },
{
      id: `gen-diffusion`,
      title: `Diffusion Models (DDPM)`,
      description: `Denoising diffusion probabilistic models for high-quality generation.`,
      level: `advanced`,
      track: `dl`,
      sections: [
        {
          id: `forward`,
          title: `Forward Diffusion Process`,
          content: `### Introduction

Gradually add Gaussian noise over T steps: q(x_t|x_{t-1}) = N(√(1-β_t)x_{t-1}, β_t I). At t=T, x_T ≈ pure noise.

### Forward Diffusion Process

Schedule β_t linear or cosine controls noise injection rate.

### Key Ideas

- Closed-form q(x_t|x_0) enables training targets
- Cosine schedule often better than linear β
- T typically 1000 steps in DDPM
- Variance schedule affects sample quality`,
          keyPoints: [
            `Closed-form q(x_t|x_0) enables training targets`,
            `Cosine schedule often better than linear β`,
            `T typically 1000 steps in DDPM`,
            `Variance schedule affects sample quality`
          ],
          diagram: `Forward Diffusion Process
Forward → Loss → Backward → Update Weights`,
          commonMistakes: [
            `Not moving tensors and model to the same device (CPU vs CUDA)`,
            `Using softmax outputs with \`BCELoss\` instead of logits with \`BCEWithLogitsLoss\``,
            `Gradient explosion without clipping or learning-rate tuning`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `reverse`,
          title: `Reverse Denoising`,
          content: `### Introduction

Learn p_θ(x_{t-1}|x_t) parameterized by neural net predicting noise ε or x_0. Training minimizes simplified objective ||ε - ε_θ(x_t,t)||².

### Reverse Denoising

Sampling iterates from x_T down to x_0.

### Key Ideas

- Predict noise ε equivalent to score matching
- U-Net backbone with time embedding t
- DDIM accelerates sampling fewer steps
- Latent diffusion reduces spatial dimension

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `import torch
T = 1000
t = torch.tensor([500])
print(t.item())`,
          output: `500`,
          keyPoints: [
            `Predict noise ε equivalent to score matching`,
            `U-Net backbone with time embedding t`,
            `DDIM accelerates sampling fewer steps`,
            `Latent diffusion reduces spatial dimension`
          ],
          diagram: `Reverse Denoising
Query → Embed → Retrieve → Augment Prompt → Generate`,
          commonMistakes: [
            `Using softmax outputs with \`BCELoss\` instead of logits with \`BCEWithLogitsLoss\``,
            `Gradient explosion without clipping or learning-rate tuning`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`
          ]
        },
        {
          id: `guidance`,
          title: `Classifier-Free Guidance`,
          content: `### Introduction

Train conditional model with random label dropout. At sample time interpolate conditional and unconditional predictions: ε = ε_u + s(ε_c - ε_u).

### Classifier-Free Guidance

Scale s>1 increases prompt adherence, may reduce diversity.

### Key Ideas

- Guidance scale s trades fidelity vs diversity
- Dropout rate ~10% during training
- Negative prompts via unconditional branch
- CFG standard in Stable Diffusion`,
          keyPoints: [
            `Guidance scale s trades fidelity vs diversity`,
            `Dropout rate ~10% during training`,
            `Negative prompts via unconditional branch`,
            `CFG standard in Stable Diffusion`
          ],
          diagram: `Classifier-Free Guidance
Forward → Loss → Backward → Update Weights`,
          commonMistakes: [
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Not stratifying splits for classification tasks`,
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`,
            `Not moving tensors and model to the same device (CPU vs CUDA)`
          ]
        },
        {
          id: `diffusion-apps`,
          title: `Applications & Tools`,
          content: `### Introduction

Stable Diffusion, DALL·E 2 lineage, Imagen. Inpainting, super-resolution, video diffusion extensions.

### Applications & Tools

Open weights enable local generation; safety filters and watermarking increasingly required.

### Key Ideas

- Latent diffusion runs in VAE compressed space
- ControlNet adds spatial conditioning
- Video models add temporal attention layers
- Energy cost of long sampling chains`,
          keyPoints: [
            `Latent diffusion runs in VAE compressed space`,
            `ControlNet adds spatial conditioning`,
            `Video models add temporal attention layers`,
            `Energy cost of long sampling chains`
          ],
          diagram: `Applications & Tools
Tokens → Embedding → Self-Attention → FFN → Output`,
          commonMistakes: [
            `Training generator and discriminator without balancing capacity — one dominates`,
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`,
            `Not moving tensors and model to the same device (CPU vs CUDA)`,
            `Using softmax outputs with \`BCELoss\` instead of logits with \`BCEWithLogitsLoss\``
          ]
        }
      ],
      exercises: [
        {
          id: `ex-diff-1`,
          question: `Linear beta schedule from 0.0001 to 0.02 over 1000 steps at t=500.`,
          solution: `import numpy as np
betas = np.linspace(0.0001, 0.02, 1000)
print(round(float(betas[500]), 5))`,
          difficulty: `easy`
        },
        {
          id: `ex-diff-2`,
          question: `Classifier-free guidance: eps=eps_u + 2*(eps_c - eps_u) with eps_u=0.1, eps_c=0.4.`,
          solution: `eps_u, eps_c, scale = 0.1, 0.4, 2.0
eps = eps_u + scale * (eps_c - eps_u)
print(round(eps, 2))`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 45,
      module: `module-26`,
      references: [
        {
          id: `ddpm-paper`,
          title: `Denoising Diffusion Probabilistic Models`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/2006.11239`,
          description: `Foundational diffusion model paper powering modern image generation.`
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
          id: `gan-paper`,
          title: `Generative Adversarial Networks`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1406.2661`,
          description: `Adversarial training framework for generative modeling.`
        },
        {
          id: `stanford-cs231n`,
          title: `Stanford CS231n — CNNs for Visual Recognition`,
          source: `Stanford CS231n`,
          type: `course`,
          url: `http://cs231n.stanford.edu/`,
          description: `Definitive course on convolutional networks and computer vision.`
        }
      ]
    },
{
      id: `gen-style`,
      title: `Style Transfer & CycleGAN`,
      description: `Transfer artistic style and unpaired image domain translation.`,
      level: `advanced`,
      track: `dl`,
      sections: [
        {
          id: `nst`,
          title: `Neural Style Transfer`,
          content: `### Introduction

Gatys et al.: content loss from early CNN layers, style loss from Gram matrices of feature correlations across channels. Optimize pixel image or train fast feed-forward networks.

### Neural Style Transfer

**AdaIN** adaptive instance norm enables arbitrary style in single forward pass.

### Key Ideas

- Gram matrix captures texture statistics
- Content/style weight tradeoff visual quality
- Feed-forward net real-time after training
- Instance norm removes content-specific bias`,
          keyPoints: [
            `Gram matrix captures texture statistics`,
            `Content/style weight tradeoff visual quality`,
            `Feed-forward net real-time after training`,
            `Instance norm removes content-specific bias`
          ],
          diagram: `Neural Style Transfer
Image → Conv → ReLU → Pool → Flatten → Dense → Class`,
          commonMistakes: [
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`,
            `Not moving tensors and model to the same device (CPU vs CUDA)`
          ]
        },
        {
          id: `cyclegan`,
          title: `CycleGAN`,
          content: `### Introduction

Unpaired domains X and Y: G: X→Y, F: Y→X. Losses: adversarial + cycle ||F(G(x))-x|| + ||G(F(y))-y|| + identity optional.

### CycleGAN

Applications: horses↔zebras, summer↔winter, photo↔sketch.

### Key Ideas

- Cycle loss enforces structural consistency
- Patch discriminator for local realism
- Identity loss preserves color when domains similar
- Failure on large geometric changes`,
          keyPoints: [
            `Cycle loss enforces structural consistency`,
            `Patch discriminator for local realism`,
            `Identity loss preserves color when domains similar`,
            `Failure on large geometric changes`
          ],
          diagram: `CycleGAN
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Gradient explosion without clipping or learning-rate tuning`,
            `Training generator and discriminator without balancing capacity — one dominates`,
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`,
            `Not moving tensors and model to the same device (CPU vs CUDA)`
          ]
        },
        {
          id: `stylegan`,
          title: `StyleGAN Overview`,
          content: `### Introduction

Style-based generator controls coarse-to-fine via **AdaIN** at multiple resolutions. Mapping network f(z) → w in W space smoother than Z.

### StyleGAN Overview

Style mixing interpolates different w layers for disentangled control.

### Key Ideas

- W space more disentangled than Z
- Progressive training grows resolution
- Truncation trick trades diversity for quality
- StyleGAN3 reduces texture sticking artifacts`,
          keyPoints: [
            `W space more disentangled than Z`,
            `Progressive training grows resolution`,
            `Truncation trick trades diversity for quality`,
            `StyleGAN3 reduces texture sticking artifacts`
          ],
          diagram: `StyleGAN Overview
Forward → Loss → Backward → Update Weights`,
          commonMistakes: [
            `Not moving tensors and model to the same device (CPU vs CUDA)`,
            `Using softmax outputs with \`BCELoss\` instead of logits with \`BCEWithLogitsLoss\``,
            `Gradient explosion without clipping or learning-rate tuning`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `applications`,
          title: `Creative Applications`,
          content: `### Introduction

Film post-production, fashion design, data augmentation with domain shift. Ethical concerns: deepfakes, consent, copyright of style sources.

### Creative Applications

Watermarking and provenance metadata (C2PA) emerging standards.

### Key Ideas

- Disclose synthetic media in production pipelines
- Style from living artists needs licensing
- Augmentation helps sim-to-real with weather styles
- Detection models race with generators`,
          keyPoints: [
            `Disclose synthetic media in production pipelines`,
            `Style from living artists needs licensing`,
            `Augmentation helps sim-to-real with weather styles`,
            `Detection models race with generators`
          ],
          diagram: `Creative Applications
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Gradient explosion without clipping or learning-rate tuning`,
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`,
            `Not moving tensors and model to the same device (CPU vs CUDA)`,
            `Using softmax outputs with \`BCELoss\` instead of logits with \`BCEWithLogitsLoss\``
          ]
        }
      ],
      exercises: [
        {
          id: `ex-style-1`,
          question: `Compute Gram matrix of 2x3 feature map (outer product of channels).`,
          solution: `import numpy as np
F = np.array([[1., 2., 3.], [4., 5., 6.]])
G = F @ F.T
print(G.shape, round(float(G[0, 0]), 1))`,
          difficulty: `easy`
        },
        {
          id: `ex-style-2`,
          question: `Cycle loss: L1 between original and reconstructed image patch.`,
          solution: `import numpy as np
orig = np.array([1., 2., 3.])
recon = np.array([1.1, 1.9, 3.2])
print(round(float(np.abs(orig - recon).mean()), 2))`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 40,
      module: `module-26`,
      references: [
        {
          id: `stanford-cs231n`,
          title: `Stanford CS231n — CNNs for Visual Recognition`,
          source: `Stanford CS231n`,
          type: `course`,
          url: `http://cs231n.stanford.edu/`,
          description: `Definitive course on convolutional networks and computer vision.`
        },
        {
          id: `pytorch-transfer-learning`,
          title: `PyTorch Transfer Learning Tutorial`,
          source: `PyTorch`,
          type: `documentation`,
          url: `https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html`,
          description: `Fine-tuning pretrained models for new tasks with limited data.`
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
      id: `gen-eval`,
      title: `Evaluating Generative Models`,
      description: `FID, Inception Score, and human evaluation for generative quality.`,
      level: `advanced`,
      track: `dl`,
      sections: [
        {
          id: `fid`,
          title: `Fréchet Inception Distance (FID)`,
          content: `### Introduction

Embed real and generated images in Inception-v3 pool layer; fit Gaussians to features; compute Fréchet distance between Gaussians. **Lower FID better**—sensitive to mode coverage and quality.

### Fréchet Inception Distance (FID)

Requires sufficient sample count (50k common).

### Key Ideas

- FID detects mode collapse better than IS
- Inception features biased to ImageNet statistics
- Compare same sample size and preprocessing
- FID not meaningful across different datasets`,
          keyPoints: [
            `FID detects mode collapse better than IS`,
            `Inception features biased to ImageNet statistics`,
            `Compare same sample size and preprocessing`,
            `FID not meaningful across different datasets`
          ],
          diagram: `Fréchet Inception Distance (FID)
Image → Conv → ReLU → Pool → Flatten → Dense → Class`,
          commonMistakes: [
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`,
            `Not moving tensors and model to the same device (CPU vs CUDA)`,
            `Using softmax outputs with \`BCELoss\` instead of logits with \`BCEWithLogitsLoss\``
          ]
        },
        {
          id: `is`,
          title: `Inception Score (IS)`,
          content: `### Introduction

IS = exp(E[KL(p(y|x) || p(y))]). Rewards confident class predictions with diverse marginal classes.

### Inception Score (IS)

Less used alone—does not compare to real data directly.

### Key Ideas

- High IS can fool with sharp but unrealistic images
- Splits IS into quality and diversity components
- Prefer FID for research comparisons
- Use clean-fid implementation for consistency`,
          keyPoints: [
            `High IS can fool with sharp but unrealistic images`,
            `Splits IS into quality and diversity components`,
            `Prefer FID for research comparisons`,
            `Use clean-fid implementation for consistency`
          ],
          diagram: `Inception Score (IS)
Image → Conv → ReLU → Pool → Flatten → Dense → Class`,
          commonMistakes: [
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`,
            `Not moving tensors and model to the same device (CPU vs CUDA)`,
            `Using softmax outputs with \`BCELoss\` instead of logits with \`BCEWithLogitsLoss\``,
            `Gradient explosion without clipping or learning-rate tuning`
          ]
        },
        {
          id: `human`,
          title: `Human Evaluation`,
          content: `### Introduction

MOS mean opinion score, pairwise preference A vs B, Turing-style fool rate. **HumanEval** protocols with calibrated raters.

### Human Evaluation

LLM-as-judge emerging for text generation with bias caveats.

### Key Ideas

- Human eval gold standard but expensive
- Rater agreement metrics (Cohen's kappa)
- Prompt consistency for LLM judges
- Demographic bias in human preference datasets`,
          keyPoints: [
            `Human eval gold standard but expensive`,
            `Rater agreement metrics (Cohen's kappa)`,
            `Prompt consistency for LLM judges`,
            `Demographic bias in human preference datasets`
          ],
          commonMistakes: [
            `Gradient explosion without clipping or learning-rate tuning`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Wrong sequence length after tokenization — truncating critical context`,
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`
          ]
        },
        {
          id: `other-metrics`,
          title: `Precision, Recall & CLIP Score`,
          content: `### Introduction

**Precision/Recall for distributions** separate quality vs coverage. **CLIP score** text-image alignment for conditional models.

### Precision, Recall & CLIP Score

Track memorization metrics detecting training set copying.

### Key Ideas

- High precision low recall indicates mode dropping
- CLIP score correlates with caption match not aesthetics
- Memorization audits for copyright compliance
- Combine multiple metrics in eval suites`,
          keyPoints: [
            `High precision low recall indicates mode dropping`,
            `CLIP score correlates with caption match not aesthetics`,
            `Memorization audits for copyright compliance`,
            `Combine multiple metrics in eval suites`
          ],
          diagram: `Precision, Recall & CLIP Score
Image → Conv → ReLU → Pool → Flatten → Dense → Class`,
          commonMistakes: [
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`,
            `Not moving tensors and model to the same device (CPU vs CUDA)`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-geval-1`,
          question: `Compute mean of Inception features for FID (simplified).`,
          solution: `import numpy as np
feats = np.array([[1., 2.], [3., 4.], [5., 6.]])
mu = feats.mean(axis=0)
print(mu.tolist())`,
          difficulty: `easy`
        },
        {
          id: `ex-geval-2`,
          question: `Precision/recall: 80/100 fake samples within real manifold (precision).`,
          solution: `within = 80
total_fake = 100
print(within / total_fake)`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 35,
      module: `module-26`,
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
          id: `stanford-cs231n`,
          title: `Stanford CS231n — CNNs for Visual Recognition`,
          source: `Stanford CS231n`,
          type: `course`,
          url: `http://cs231n.stanford.edu/`,
          description: `Definitive course on convolutional networks and computer vision.`
        },
        {
          id: `model-cards-paper`,
          title: `Model Cards for Model Reporting`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1810.03993`,
          description: `Framework for transparent documentation of ML model capabilities and limitations.`
        },
        {
          id: `fairlearn-docs`,
          title: `Fairlearn Documentation`,
          source: `Fairlearn`,
          type: `documentation`,
          url: `https://fairlearn.org/main/user_guide/index.html`,
          description: `Assessing and mitigating unfairness in machine learning models.`
        }
      ]
    }
];
