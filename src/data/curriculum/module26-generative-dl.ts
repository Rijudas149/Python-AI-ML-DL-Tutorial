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
          content: `**Generator** G(z) maps noise z to fake samples. **Discriminator** D(x) classifies real vs fake.

Minimax game: G tries to fool D; D tries to detect fakes. Loss drives G to match data distribution implicitly without explicit likelihood.`,
          keyPoints: [
            `Latent z usually Gaussian or uniform`,
            `D too strong prevents G learning—balance capacity`,
            `Non-saturation G loss log(1-D(G(z))) unstable—use -log D(G(z))`,
            `Mode collapse: G outputs limited variety`
          ]
        },
        {
          id: `dcgan`,
          title: `DCGAN & Convolutional GANs`,
          content: `Guidelines: use strided conv not pooling; batchnorm in G and D; ReLU in G (except tanh output); LeakyReLU in D. **DCGAN** stable on 64×64 images.

Progressive growing and StyleGAN scale to photorealistic faces.`,
          example: `import torch
z = torch.randn(4, 100)
print(z.shape)`,
          output: `torch.Size([4, 100])`,
          keyPoints: [
            `Tanh output matches normalized [-1,1] images`,
            `BatchNorm stabilizes deep GAN training`,
            `Label smoothing softens real targets`,
            `Spectral norm constrains D Lipschitz constant`
          ]
        },
        {
          id: `training-tricks`,
          title: `Training Tricks`,
          content: `Alternate G and D updates; sometimes 2:1 ratio. **Gradient penalty (WGAN-GP)** enforces Lipschitz constraint.

**Exponential moving average** of G weights (StyleGAN). Track FID during training; early stopping when FID degrades.`,
          keyPoints: [
            `WGAN-GP replaces weight clipping`,
            `EMA generator smoother outputs`,
            `DiffAugment regularizes D on limited data`,
            `Learning rate tuning critical`
          ]
        },
        {
          id: `conditional`,
          title: `Conditional GANs`,
          content: `Concatenate class label or embedding to G and D inputs. **cGAN** controls generated class.

**Pix2Pix** paired image translation with U-Net generator. **CycleGAN** unpaired translation via cycle consistency loss.`,
          keyPoints: [
            `Projection discriminator injects class info`,
            `Pix2Pix needs aligned pairs`,
            `Cycle consistency L1 enforces invertibility`,
            `Attention gates improve long-range structure`
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
          content: `Encoder outputs μ, σ of approximate posterior q(z|x). Reparameterization: z = μ + σ·ε, ε~N(0,1).

Decoder p(x|z) reconstructs x. Loss = reconstruction + KL(q(z|x) || p(z)) with prior p(z)=N(0,I).`,
          keyPoints: [
            `Reparameterization enables backprop through sampling`,
            `KL regularizes latent space smoothness`,
            `β-VAE trades reconstruction vs disentanglement`,
            `Blurry reconstructions vs GAN sharpness`
          ]
        },
        {
          id: `latent`,
          title: `Latent Space Geometry`,
          content: `Smooth latent interpolations z1→z2 decode to plausible transitions. **Latent arithmetic**: z_smile - z_neutral + z_person.

Visualization with t-SNE/UMAP on encoded z for cluster structure.`,
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
          ]
        },
        {
          id: `vae-variants`,
          title: `VAE Variants`,
          content: `**VQ-VAE** discrete codebook latents for sharper outputs. **NVAE** deep hierarchical VAE.

VAEs provide approximate likelihood—useful for anomaly detection via reconstruction error.`,
          keyPoints: [
            `VQ-VAE enables autoregressive priors over codes`,
            `Hierarchical latents capture multi-scale structure`,
            `High reconstruction error flags anomalies`,
            `VAE+GAN hybrids (VAE-GAN) sharpen outputs`
          ]
        },
        {
          id: `sampling-vae`,
          title: `Sampling & Evaluation`,
          content: `Sample z~N(0,I), decode to generate. Quality lower than GANs on images but stable training.

Evaluate log-likelihood estimates (ELBO) and reconstruction FID for comparisons.`,
          keyPoints: [
            `ELBO lower bound on log p(x)`,
            `Importance sampling tightens likelihood bound`,
            `Posterior collapse when KL vanishes`,
            `Use same FID pipeline as GANs for fairness`
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
          content: `Gradually add Gaussian noise over T steps: q(x_t|x_{t-1}) = N(√(1-β_t)x_{t-1}, β_t I). At t=T, x_T ≈ pure noise.

Schedule β_t linear or cosine controls noise injection rate.`,
          keyPoints: [
            `Closed-form q(x_t|x_0) enables training targets`,
            `Cosine schedule often better than linear β`,
            `T typically 1000 steps in DDPM`,
            `Variance schedule affects sample quality`
          ]
        },
        {
          id: `reverse`,
          title: `Reverse Denoising`,
          content: `Learn p_θ(x_{t-1}|x_t) parameterized by neural net predicting noise ε or x_0. Training minimizes simplified objective ||ε - ε_θ(x_t,t)||².

Sampling iterates from x_T down to x_0.`,
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
          ]
        },
        {
          id: `guidance`,
          title: `Classifier-Free Guidance`,
          content: `Train conditional model with random label dropout. At sample time interpolate conditional and unconditional predictions: ε = ε_u + s(ε_c - ε_u).

Scale s>1 increases prompt adherence, may reduce diversity.`,
          keyPoints: [
            `Guidance scale s trades fidelity vs diversity`,
            `Dropout rate ~10% during training`,
            `Negative prompts via unconditional branch`,
            `CFG standard in Stable Diffusion`
          ]
        },
        {
          id: `diffusion-apps`,
          title: `Applications & Tools`,
          content: `Stable Diffusion, DALL·E 2 lineage, Imagen. Inpainting, super-resolution, video diffusion extensions.

Open weights enable local generation; safety filters and watermarking increasingly required.`,
          keyPoints: [
            `Latent diffusion runs in VAE compressed space`,
            `ControlNet adds spatial conditioning`,
            `Video models add temporal attention layers`,
            `Energy cost of long sampling chains`
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
          content: `Gatys et al.: content loss from early CNN layers, style loss from Gram matrices of feature correlations across channels. Optimize pixel image or train fast feed-forward networks.

**AdaIN** adaptive instance norm enables arbitrary style in single forward pass.`,
          keyPoints: [
            `Gram matrix captures texture statistics`,
            `Content/style weight tradeoff visual quality`,
            `Feed-forward net real-time after training`,
            `Instance norm removes content-specific bias`
          ]
        },
        {
          id: `cyclegan`,
          title: `CycleGAN`,
          content: `Unpaired domains X and Y: G: X→Y, F: Y→X. Losses: adversarial + cycle ||F(G(x))-x|| + ||G(F(y))-y|| + identity optional.

Applications: horses↔zebras, summer↔winter, photo↔sketch.`,
          keyPoints: [
            `Cycle loss enforces structural consistency`,
            `Patch discriminator for local realism`,
            `Identity loss preserves color when domains similar`,
            `Failure on large geometric changes`
          ]
        },
        {
          id: `stylegan`,
          title: `StyleGAN Overview`,
          content: `Style-based generator controls coarse-to-fine via **AdaIN** at multiple resolutions. Mapping network f(z) → w in W space smoother than Z.

Style mixing interpolates different w layers for disentangled control.`,
          keyPoints: [
            `W space more disentangled than Z`,
            `Progressive training grows resolution`,
            `Truncation trick trades diversity for quality`,
            `StyleGAN3 reduces texture sticking artifacts`
          ]
        },
        {
          id: `applications`,
          title: `Creative Applications`,
          content: `Film post-production, fashion design, data augmentation with domain shift. Ethical concerns: deepfakes, consent, copyright of style sources.

Watermarking and provenance metadata (C2PA) emerging standards.`,
          keyPoints: [
            `Disclose synthetic media in production pipelines`,
            `Style from living artists needs licensing`,
            `Augmentation helps sim-to-real with weather styles`,
            `Detection models race with generators`
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
          content: `Embed real and generated images in Inception-v3 pool layer; fit Gaussians to features; compute Fréchet distance between Gaussians. **Lower FID better**—sensitive to mode coverage and quality.

Requires sufficient sample count (50k common).`,
          keyPoints: [
            `FID detects mode collapse better than IS`,
            `Inception features biased to ImageNet statistics`,
            `Compare same sample size and preprocessing`,
            `FID not meaningful across different datasets`
          ]
        },
        {
          id: `is`,
          title: `Inception Score (IS)`,
          content: `IS = exp(E[KL(p(y|x) || p(y))]). Rewards confident class predictions with diverse marginal classes.

Less used alone—does not compare to real data directly.`,
          keyPoints: [
            `High IS can fool with sharp but unrealistic images`,
            `Splits IS into quality and diversity components`,
            `Prefer FID for research comparisons`,
            `Use clean-fid implementation for consistency`
          ]
        },
        {
          id: `human`,
          title: `Human Evaluation`,
          content: `MOS mean opinion score, pairwise preference A vs B, Turing-style fool rate. **HumanEval** protocols with calibrated raters.

LLM-as-judge emerging for text generation with bias caveats.`,
          keyPoints: [
            `Human eval gold standard but expensive`,
            `Rater agreement metrics (Cohen's kappa)`,
            `Prompt consistency for LLM judges`,
            `Demographic bias in human preference datasets`
          ]
        },
        {
          id: `other-metrics`,
          title: `Precision, Recall & CLIP Score`,
          content: `**Precision/Recall for distributions** separate quality vs coverage. **CLIP score** text-image alignment for conditional models.

Track memorization metrics detecting training set copying.`,
          keyPoints: [
            `High precision low recall indicates mode dropping`,
            `CLIP score correlates with caption match not aesthetics`,
            `Memorization audits for copyright compliance`,
            `Combine multiple metrics in eval suites`
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
