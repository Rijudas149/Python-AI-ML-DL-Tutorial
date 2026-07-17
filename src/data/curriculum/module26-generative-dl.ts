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
          content: `**Generator** G(z) maps noise z to fake samples. **Discriminator** D(x) classifies real vs fake. Minimax game: G tries to fool D; D tries to detect fakes.

Loss drives G to match data distribution implicitly without explicit likelihood.

**Applying Generative Adversarial Networks:** Train generator and discriminator in adversarial equilibrium. Deep learning concepts underpin modern vision, language, and generative AI breakthroughs. When studying "GAN Architecture", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Latent z usually Gaussian or uniform`,
            `D too strong prevents G learning—balance capacity`,
            `Non-saturation G loss log(1-D(G(z))) unstable—use -log D(G(z))`,
            `Mode collapse: G outputs limited variety`
          ],
          pseudoCode: `CONCEPT: GAN Architecture

Checklist:
  1. Latent z usually Gaussian or uniform
  2. D too strong prevents G learning—balance capacity
  3. Non-saturation G loss log(1-D(G(z))) unstable—use -log D(G(z))
  4. Mode collapse: G outputs limited variety`
        },
        {
          id: `dcgan`,
          title: `DCGAN & Convolutional GANs`,
          content: `Guidelines: use strided conv not pooling; batchnorm in G and D; ReLU in G (except tanh output); LeakyReLU in D. **DCGAN** stable on 64×64 images.

Progressive growing and StyleGAN scale to photorealistic faces.

**Applying Generative Adversarial Networks:** Train generator and discriminator in adversarial equilibrium. Deep learning concepts underpin modern vision, language, and generative AI breakthroughs. When studying "DCGAN & Convolutional GANs", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
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
          pseudoCode: `CONCEPT: DCGAN & Convolutional GANs

Checklist:
  1. Tanh output matches normalized [-1,1] images
  2. BatchNorm stabilizes deep GAN training
  3. Label smoothing softens real targets
  4. Spectral norm constrains D Lipschitz constant`
        },
        {
          id: `training-tricks`,
          title: `Training Tricks`,
          content: `Alternate G and D updates; sometimes 2:1 ratio. **Gradient penalty (WGAN-GP)** enforces Lipschitz constraint. **Exponential moving average** of G weights (StyleGAN).

Track FID during training; early stopping when FID degrades.

**Applying Generative Adversarial Networks:** Train generator and discriminator in adversarial equilibrium. Deep learning concepts underpin modern vision, language, and generative AI breakthroughs. When studying "Training Tricks", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `WGAN-GP replaces weight clipping`,
            `EMA generator smoother outputs`,
            `DiffAugment regularizes D on limited data`,
            `Learning rate tuning critical`
          ],
          pseudoCode: `CONCEPT: Training Tricks

Checklist:
  1. WGAN-GP replaces weight clipping
  2. EMA generator smoother outputs
  3. DiffAugment regularizes D on limited data
  4. Learning rate tuning critical`
        },
        {
          id: `conditional`,
          title: `Conditional GANs`,
          content: `Concatenate class label or embedding to G and D inputs. **cGAN** controls generated class. **Pix2Pix** paired image translation with U-Net generator.

**CycleGAN** unpaired translation via cycle consistency loss.

**Applying Generative Adversarial Networks:** Train generator and discriminator in adversarial equilibrium. Deep learning concepts underpin modern vision, language, and generative AI breakthroughs. When studying "Conditional GANs", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Projection discriminator injects class info`,
            `Pix2Pix needs aligned pairs`,
            `Cycle consistency L1 enforces invertibility`,
            `Attention gates improve long-range structure`
          ],
          pseudoCode: `CONCEPT: Conditional GANs

Checklist:
  1. Projection discriminator injects class info
  2. Pix2Pix needs aligned pairs
  3. Cycle consistency L1 enforces invertibility
  4. Attention gates improve long-range structure`
        }
      ],
      exercises: [
        {
          id: `ex-gan-1`,
          question: `GAN has generator and ___.`,
          solution: `print("discriminator")`,
          difficulty: `easy`
        },
        {
          id: `ex-gan-2`,
          question: `Mode ___ when generator lacks diversity.`,
          solution: `print("collapse")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 45,
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
          id: `stanford-cs230`,
          title: `Stanford CS230 — Deep Learning`,
          source: `Stanford CS230`,
          type: `course`,
          url: `http://cs230.stanford.edu/`,
          description: `Andrew Ng's deep learning course covering NN fundamentals and best practices.`
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
          id: `fastai-course`,
          title: `fast.ai Practical Deep Learning`,
          source: `fast.ai`,
          type: `course`,
          url: `https://course.fast.ai/`,
          description: `Top-down, code-first approach to training state-of-the-art models.`
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
          content: `Encoder outputs μ, σ of approximate posterior q(z|x). Reparameterization: z = μ + σ·ε, ε~N(0,1). Decoder p(x|z) reconstructs x.

Loss = reconstruction + KL(q(z|x) || p(z)) with prior p(z)=N(0,I).

**Applying Variational Autoencoders:** Learn latent probabilistic representations with reconstruction and KL losses. Deep learning concepts underpin modern vision, language, and generative AI breakthroughs. When studying "VAE Framework", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Reparameterization enables backprop through sampling`,
            `KL regularizes latent space smoothness`,
            `β-VAE trades reconstruction vs disentanglement`,
            `Blurry reconstructions vs GAN sharpness`
          ],
          pseudoCode: `CONCEPT: VAE Framework

Checklist:
  1. Reparameterization enables backprop through sampling
  2. KL regularizes latent space smoothness
  3. β-VAE trades reconstruction vs disentanglement
  4. Blurry reconstructions vs GAN sharpness`
        },
        {
          id: `latent`,
          title: `Latent Space Geometry`,
          content: `Smooth latent interpolations z1→z2 decode to plausible transitions. **Latent arithmetic**: z_smile - z_neutral + z_person.

Visualization with t-SNE/UMAP on encoded z for cluster structure.

**Applying Variational Autoencoders:** Learn latent probabilistic representations with reconstruction and KL losses. Deep learning concepts underpin modern vision, language, and generative AI breakthroughs. When studying "Latent Space Geometry", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
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
          pseudoCode: `CONCEPT: Latent Space Geometry

Checklist:
  1. Interpolate in latent not pixel space
  2. Disentanglement metrics: MIG, SAP
  3. Prior mismatch hurts generation quality
  4. Conditional VAE adds label to encoder/decoder`
        },
        {
          id: `vae-variants`,
          title: `VAE Variants`,
          content: `**VQ-VAE** discrete codebook latents for sharper outputs. **NVAE** deep hierarchical VAE. **β-VAE** scales KL term.

VAEs provide approximate likelihood—useful for anomaly detection via reconstruction error.

**Applying Variational Autoencoders:** Learn latent probabilistic representations with reconstruction and KL losses. Deep learning concepts underpin modern vision, language, and generative AI breakthroughs. When studying "VAE Variants", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `VQ-VAE enables autoregressive priors over codes`,
            `Hierarchical latents capture multi-scale structure`,
            `High reconstruction error flags anomalies`,
            `VAE+GAN hybrids (VAE-GAN) sharpen outputs`
          ],
          pseudoCode: `CONCEPT: VAE Variants

Checklist:
  1. VQ-VAE enables autoregressive priors over codes
  2. Hierarchical latents capture multi-scale structure
  3. High reconstruction error flags anomalies
  4. VAE+GAN hybrids (VAE-GAN) sharpen outputs`
        },
        {
          id: `sampling-vae`,
          title: `Sampling & Evaluation`,
          content: `Sample z~N(0,I), decode to generate. Quality lower than GANs on images but stable training.

Evaluate log-likelihood estimates (ELBO) and reconstruction FID for comparisons.

**Applying Variational Autoencoders:** Learn latent probabilistic representations with reconstruction and KL losses. Deep learning concepts underpin modern vision, language, and generative AI breakthroughs. When studying "Sampling & Evaluation", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `ELBO lower bound on log p(x)`,
            `Importance sampling tightens likelihood bound`,
            `Posterior collapse when KL vanishes`,
            `Use same FID pipeline as GANs for fairness`
          ],
          pseudoCode: `CONCEPT: Sampling & Evaluation

Checklist:
  1. ELBO lower bound on log p(x)
  2. Importance sampling tightens likelihood bound
  3. Posterior collapse when KL vanishes
  4. Use same FID pipeline as GANs for fairness`
        }
      ],
      exercises: [
        {
          id: `ex-vae-1`,
          question: `VAE loss adds reconstruction and ___ term.`,
          solution: `print("KL")`,
          difficulty: `easy`
        },
        {
          id: `ex-vae-2`,
          question: `Reparameterization: z = mu + sigma * ___.`,
          solution: `print("epsilon")`,
          difficulty: `easy`
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
          id: `stanford-cs230`,
          title: `Stanford CS230 — Deep Learning`,
          source: `Stanford CS230`,
          type: `course`,
          url: `http://cs230.stanford.edu/`,
          description: `Andrew Ng's deep learning course covering NN fundamentals and best practices.`
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
          id: `fastai-course`,
          title: `fast.ai Practical Deep Learning`,
          source: `fast.ai`,
          type: `course`,
          url: `https://course.fast.ai/`,
          description: `Top-down, code-first approach to training state-of-the-art models.`
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

Schedule β_t linear or cosine controls noise injection rate.

**Applying Diffusion Models (DDPM):** Denoising diffusion probabilistic models for high-quality generation. Deep learning concepts underpin modern vision, language, and generative AI breakthroughs. When studying "Forward Diffusion Process", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Closed-form q(x_t|x_0) enables training targets`,
            `Cosine schedule often better than linear β`,
            `T typically 1000 steps in DDPM`,
            `Variance schedule affects sample quality`
          ],
          pseudoCode: `CONCEPT: Forward Diffusion Process

Checklist:
  1. Closed-form q(x_t|x_0) enables training targets
  2. Cosine schedule often better than linear β
  3. T typically 1000 steps in DDPM
  4. Variance schedule affects sample quality`
        },
        {
          id: `reverse`,
          title: `Reverse Denoising`,
          content: `Learn p_θ(x_{t-1}|x_t) parameterized by neural net predicting noise ε or x_0. Training minimizes simplified objective ||ε - ε_θ(x_t,t)||². Sampling iterates from x_T down to x_0.

**Applying Diffusion Models (DDPM):** Denoising diffusion probabilistic models for high-quality generation. Deep learning concepts underpin modern vision, language, and generative AI breakthroughs. When studying "Reverse Denoising", connect theory to practice by predicting outputs before running examples, then explaining discrepancies.

Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Reverse Denoising** in the context of **Diffusion Models (DDPM)**: Neural network code relies on this foundation at every step — shapes, gradients, and training loops. Execute the example carefully before moving to the exercises.`,
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
          pseudoCode: `CONCEPT: Reverse Denoising

Checklist:
  1. Predict noise ε equivalent to score matching
  2. U-Net backbone with time embedding t
  3. DDIM accelerates sampling fewer steps
  4. Latent diffusion reduces spatial dimension`
        },
        {
          id: `guidance`,
          title: `Classifier-Free Guidance`,
          content: `Train conditional model with random label dropout. At sample time interpolate conditional and unconditional predictions: ε = ε_u + s(ε_c - ε_u). Scale s>1 increases prompt adherence, may reduce diversity.

**Applying Diffusion Models (DDPM):** Denoising diffusion probabilistic models for high-quality generation. Deep learning concepts underpin modern vision, language, and generative AI breakthroughs. When studying "Classifier-Free Guidance", connect theory to practice by predicting outputs before running examples, then explaining discrepancies.

Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Classifier-Free Guidance** in the context of **Diffusion Models (DDPM)**: Neural network code relies on this foundation at every step — shapes, gradients, and training loops. Execute the example carefully before moving to the exercises.`,
          keyPoints: [
            `Guidance scale s trades fidelity vs diversity`,
            `Dropout rate ~10% during training`,
            `Negative prompts via unconditional branch`,
            `CFG standard in Stable Diffusion`
          ],
          pseudoCode: `CONCEPT: Classifier-Free Guidance

Checklist:
  1. Guidance scale s trades fidelity vs diversity
  2. Dropout rate ~10% during training
  3. Negative prompts via unconditional branch
  4. CFG standard in Stable Diffusion`
        },
        {
          id: `diffusion-apps`,
          title: `Applications & Tools`,
          content: `Stable Diffusion, DALL·E 2 lineage, Imagen. Inpainting, super-resolution, video diffusion extensions.

Open weights enable local generation; safety filters and watermarking increasingly required.

**Applying Diffusion Models (DDPM):** Denoising diffusion probabilistic models for high-quality generation. Deep learning concepts underpin modern vision, language, and generative AI breakthroughs. When studying "Applications & Tools", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Latent diffusion runs in VAE compressed space`,
            `ControlNet adds spatial conditioning`,
            `Video models add temporal attention layers`,
            `Energy cost of long sampling chains`
          ],
          pseudoCode: `CONCEPT: Applications & Tools

Checklist:
  1. Latent diffusion runs in VAE compressed space
  2. ControlNet adds spatial conditioning
  3. Video models add temporal attention layers
  4. Energy cost of long sampling chains`
        }
      ],
      exercises: [
        {
          id: `ex-diff-1`,
          question: `Diffusion forward process adds ___.`,
          solution: `print("noise")`,
          difficulty: `easy`
        },
        {
          id: `ex-diff-2`,
          question: `Classifier-free guidance uses conditional and ___ predictions.`,
          solution: `print("unconditional")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 45,
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
          id: `stanford-cs230`,
          title: `Stanford CS230 — Deep Learning`,
          source: `Stanford CS230`,
          type: `course`,
          url: `http://cs230.stanford.edu/`,
          description: `Andrew Ng's deep learning course covering NN fundamentals and best practices.`
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
          id: `fastai-course`,
          title: `fast.ai Practical Deep Learning`,
          source: `fast.ai`,
          type: `course`,
          url: `https://course.fast.ai/`,
          description: `Top-down, code-first approach to training state-of-the-art models.`
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

**AdaIN** adaptive instance norm enables arbitrary style in single forward pass.

**Applying Style Transfer & CycleGAN:** Transfer artistic style and unpaired image domain translation. Deep learning concepts underpin modern vision, language, and generative AI breakthroughs. When studying "Neural Style Transfer", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Gram matrix captures texture statistics`,
            `Content/style weight tradeoff visual quality`,
            `Feed-forward net real-time after training`,
            `Instance norm removes content-specific bias`
          ],
          pseudoCode: `CONCEPT: Neural Style Transfer

Checklist:
  1. Gram matrix captures texture statistics
  2. Content/style weight tradeoff visual quality
  3. Feed-forward net real-time after training
  4. Instance norm removes content-specific bias`
        },
        {
          id: `cyclegan`,
          title: `CycleGAN`,
          content: `Unpaired domains X and Y: G: X→Y, F: Y→X. Losses: adversarial + cycle ||F(G(x))-x|| + ||G(F(y))-y|| + identity optional. Applications: horses↔zebras, summer↔winter, photo↔sketch.

**Applying Style Transfer & CycleGAN:** Transfer artistic style and unpaired image domain translation. Deep learning concepts underpin modern vision, language, and generative AI breakthroughs. When studying "CycleGAN", connect theory to practice by predicting outputs before running examples, then explaining discrepancies.

Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**CycleGAN** in the context of **Style Transfer & CycleGAN**: Neural network code relies on this foundation at every step — shapes, gradients, and training loops. Execute the example carefully before moving to the exercises.`,
          keyPoints: [
            `Cycle loss enforces structural consistency`,
            `Patch discriminator for local realism`,
            `Identity loss preserves color when domains similar`,
            `Failure on large geometric changes`
          ],
          pseudoCode: `CONCEPT: CycleGAN

Checklist:
  1. Cycle loss enforces structural consistency
  2. Patch discriminator for local realism
  3. Identity loss preserves color when domains similar
  4. Failure on large geometric changes`
        },
        {
          id: `stylegan`,
          title: `StyleGAN Overview`,
          content: `Style-based generator controls coarse-to-fine via **AdaIN** at multiple resolutions. Mapping network f(z) → w in W space smoother than Z.

Style mixing interpolates different w layers for disentangled control.

**Applying Style Transfer & CycleGAN:** Transfer artistic style and unpaired image domain translation. Deep learning concepts underpin modern vision, language, and generative AI breakthroughs. When studying "StyleGAN Overview", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `W space more disentangled than Z`,
            `Progressive training grows resolution`,
            `Truncation trick trades diversity for quality`,
            `StyleGAN3 reduces texture sticking artifacts`
          ],
          pseudoCode: `CONCEPT: StyleGAN Overview

Checklist:
  1. W space more disentangled than Z
  2. Progressive training grows resolution
  3. Truncation trick trades diversity for quality
  4. StyleGAN3 reduces texture sticking artifacts`
        },
        {
          id: `applications`,
          title: `Creative Applications`,
          content: `Film post-production, fashion design, data augmentation with domain shift. Ethical concerns: deepfakes, consent, copyright of style sources.

Watermarking and provenance metadata (C2PA) emerging standards.

**Applying Style Transfer & CycleGAN:** Transfer artistic style and unpaired image domain translation. Deep learning concepts underpin modern vision, language, and generative AI breakthroughs. When studying "Creative Applications", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Disclose synthetic media in production pipelines`,
            `Style from living artists needs licensing`,
            `Augmentation helps sim-to-real with weather styles`,
            `Detection models race with generators`
          ],
          pseudoCode: `CONCEPT: Creative Applications

Checklist:
  1. Disclose synthetic media in production pipelines
  2. Style from living artists needs licensing
  3. Augmentation helps sim-to-real with weather styles
  4. Detection models race with generators`
        }
      ],
      exercises: [
        {
          id: `ex-style-1`,
          question: `CycleGAN uses cycle ___ loss.`,
          solution: `print("consistency")`,
          difficulty: `easy`
        },
        {
          id: `ex-style-2`,
          question: `Gram matrices capture ___ in neural style transfer.`,
          solution: `print("texture")`,
          difficulty: `easy`
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
          id: `stanford-cs230`,
          title: `Stanford CS230 — Deep Learning`,
          source: `Stanford CS230`,
          type: `course`,
          url: `http://cs230.stanford.edu/`,
          description: `Andrew Ng's deep learning course covering NN fundamentals and best practices.`
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
          id: `fastai-course`,
          title: `fast.ai Practical Deep Learning`,
          source: `fast.ai`,
          type: `course`,
          url: `https://course.fast.ai/`,
          description: `Top-down, code-first approach to training state-of-the-art models.`
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
      id: `gen-eval`,
      title: `Evaluating Generative Models`,
      description: `FID, Inception Score, and human evaluation for generative quality.`,
      level: `advanced`,
      track: `dl`,
      sections: [
        {
          id: `fid`,
          title: `Fréchet Inception Distance (FID)`,
          content: `Embed real and generated images in Inception-v3 pool layer; fit Gaussians to features; compute Fréchet distance between Gaussians.

**Lower FID better**—sensitive to mode coverage and quality. Requires sufficient sample count (50k common).

**Applying Evaluating Generative Models:** FID, Inception Score, and human evaluation for generative quality. Deep learning concepts underpin modern vision, language, and generative AI breakthroughs. When studying "Fréchet Inception Distance (FID)", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `FID detects mode collapse better than IS`,
            `Inception features biased to ImageNet statistics`,
            `Compare same sample size and preprocessing`,
            `FID not meaningful across different datasets`
          ],
          pseudoCode: `CONCEPT: Fréchet Inception Distance (FID)

Checklist:
  1. FID detects mode collapse better than IS
  2. Inception features biased to ImageNet statistics
  3. Compare same sample size and preprocessing
  4. FID not meaningful across different datasets`
        },
        {
          id: `is`,
          title: `Inception Score (IS)`,
          content: `IS = exp(E[KL(p(y|x) || p(y))]). Rewards confident class predictions with diverse marginal classes. Less used alone—does not compare to real data directly.

**Applying Evaluating Generative Models:** FID, Inception Score, and human evaluation for generative quality. Deep learning concepts underpin modern vision, language, and generative AI breakthroughs. When studying "Inception Score (IS)", connect theory to practice by predicting outputs before running examples, then explaining discrepancies.

Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Inception Score (IS)** in the context of **Evaluating Generative Models**: Neural network code relies on this foundation at every step — shapes, gradients, and training loops. Execute the example carefully before moving to the exercises.`,
          keyPoints: [
            `High IS can fool with sharp but unrealistic images`,
            `Splits IS into quality and diversity components`,
            `Prefer FID for research comparisons`,
            `Use clean-fid implementation for consistency`
          ],
          pseudoCode: `CONCEPT: Inception Score (IS)

Checklist:
  1. High IS can fool with sharp but unrealistic images
  2. Splits IS into quality and diversity components
  3. Prefer FID for research comparisons
  4. Use clean-fid implementation for consistency`
        },
        {
          id: `human`,
          title: `Human Evaluation`,
          content: `MOS mean opinion score, pairwise preference A vs B, Turing-style fool rate. **HumanEval** protocols with calibrated raters.

LLM-as-judge emerging for text generation with bias caveats.

**Applying Evaluating Generative Models:** FID, Inception Score, and human evaluation for generative quality. Deep learning concepts underpin modern vision, language, and generative AI breakthroughs. When studying "Human Evaluation", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Human eval gold standard but expensive`,
            `Rater agreement metrics (Cohen's kappa)`,
            `Prompt consistency for LLM judges`,
            `Demographic bias in human preference datasets`
          ],
          pseudoCode: `CONCEPT: Human Evaluation

Checklist:
  1. Human eval gold standard but expensive
  2. Rater agreement metrics (Cohen's kappa)
  3. Prompt consistency for LLM judges
  4. Demographic bias in human preference datasets`
        },
        {
          id: `other-metrics`,
          title: `Precision, Recall & CLIP Score`,
          content: `**Precision/Recall for distributions** separate quality vs coverage. **CLIP score** text-image alignment for conditional models. Track memorization metrics detecting training set copying.

**Applying Evaluating Generative Models:** FID, Inception Score, and human evaluation for generative quality. Deep learning concepts underpin modern vision, language, and generative AI breakthroughs. When studying "Precision, Recall & CLIP Score", connect theory to practice by predicting outputs before running examples, then explaining discrepancies.

Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.

**Precision, Recall & CLIP Score** in the context of **Evaluating Generative Models**: Neural network code relies on this foundation at every step — shapes, gradients, and training loops. Execute the example carefully before moving to the exercises.`,
          keyPoints: [
            `High precision low recall indicates mode dropping`,
            `CLIP score correlates with caption match not aesthetics`,
            `Memorization audits for copyright compliance`,
            `Combine multiple metrics in eval suites`
          ],
          pseudoCode: `CONCEPT: Precision, Recall & CLIP Score

Checklist:
  1. High precision low recall indicates mode dropping
  2. CLIP score correlates with caption match not aesthetics
  3. Memorization audits for copyright compliance
  4. Combine multiple metrics in eval suites`
        }
      ],
      exercises: [
        {
          id: `ex-geval-1`,
          question: `Lower FID indicates ___ quality gap to real data.`,
          solution: `print("smaller")`,
          difficulty: `easy`
        },
        {
          id: `ex-geval-2`,
          question: `IS uses Inception network ___ predictions.`,
          solution: `print("class")`,
          difficulty: `easy`
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
          id: `stanford-cs230`,
          title: `Stanford CS230 — Deep Learning`,
          source: `Stanford CS230`,
          type: `course`,
          url: `http://cs230.stanford.edu/`,
          description: `Andrew Ng's deep learning course covering NN fundamentals and best practices.`
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
          id: `fastai-course`,
          title: `fast.ai Practical Deep Learning`,
          source: `fast.ai`,
          type: `course`,
          url: `https://course.fast.ai/`,
          description: `Top-down, code-first approach to training state-of-the-art models.`
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
    }
];
