import type { Topic } from '../../types';

export const module18Topics: Topic[] = [
{
      id: `dl-attention`,
      title: `Self-Attention Mechanism`,
      description: `The core innovation enabling modern NLP and beyond.`,
      level: `advanced`,
      track: `dl`,
      sections: [
        {
          id: `attention`,
          title: `Attention Intuition`,
          content: `### Introduction

Attention weighs relevance of each input element when producing output. Query, Key, Value framework from information retrieval.

### Attention Intuition

### Key Ideas

- Query: what am I looking for
- Key: what do I contain
- Value: what information do I provide
- Softmax weights sum to 1 over keys

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `import torch
import torch.nn.functional as F

# Scaled dot-product attention
Q = torch.randn(1, 4, 8)  # batch, seq, d_k
K = torch.randn(1, 4, 8)
V = torch.randn(1, 4, 8)
scores = Q @ K.transpose(-2, -1) / (8 ** 0.5)
weights = F.softmax(scores, dim=-1)
output = weights @ V
print(output.shape)`,
          output: `torch.Size([1, 4, 8])`,
          keyPoints: [
            `Query: what am I looking for`,
            `Key: what do I contain`,
            `Value: what information do I provide`,
            `Softmax weights sum to 1 over keys`
          ],
          diagram: `Attention Intuition
Tokens → Embedding → Self-Attention → FFN → Output`,
          commonMistakes: [
            `Using softmax outputs with \`BCELoss\` instead of logits with \`BCEWithLogitsLoss\``,
            `Gradient explosion without clipping or learning-rate tuning`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Wrong sequence length after tokenization — truncating critical context`
          ]
        },
        {
          id: `scaled`,
          title: `Scaled Dot-Product Attention`,
          content: `### Introduction

Attention(Q,K,V) = softmax(QK^T/√d_k)V. Scaling prevents softmax saturation with large d_k.

### Scaled Dot-Product Attention

### Key Ideas

- Scaling by sqrt(d_k) stabilizes gradients
- QK^T computes pairwise similarity
- Softmax produces attention weights
- Output is weighted sum of values`,
          pseudoCode: `scores = Q @ K.T / sqrt(d_k)
weights = softmax(scores)
output = weights @ V`,
          keyPoints: [
            `Scaling by sqrt(d_k) stabilizes gradients`,
            `QK^T computes pairwise similarity`,
            `Softmax produces attention weights`,
            `Output is weighted sum of values`
          ],
          diagram: `Scaled Dot-Product Attention
Tokens → Embedding → Self-Attention → FFN → Output`,
          commonMistakes: [
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`,
            `Not moving tensors and model to the same device (CPU vs CUDA)`,
            `Using softmax outputs with \`BCELoss\` instead of logits with \`BCEWithLogitsLoss\``,
            `Gradient explosion without clipping or learning-rate tuning`
          ]
        },
        {
          id: `self-attn`,
          title: `Self-Attention`,
          content: `### Introduction

In **self-attention**, Q, K, and V all come from the same sequence. Each token builds a query ("what am I looking for?"), compares it against every key ("what does each token offer?"), and aggregates values weighted by those similarities.

### Self-Attention

This lets token 5 directly attend to token 100 with one hop—unlike RNNs that need 95 sequential steps. The cost is O(n²) memory and compute in sequence length, which is why long-context models invest heavily in sparse attention, sliding windows, and KV-cache optimization.

### Key Ideas

- Self-attention replaces recurrence
- Parallel computation over sequence
- O(n²) memory and compute in sequence length
- Long-range dependencies in constant path length

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `import torch
import torch.nn.functional as F

# Self-attention: Q=K=V from same sequence
x = torch.tensor([[1., 0.], [0., 1.], [1., 1.]])  # 3 tokens, dim 2
scores = x @ x.T / x.shape[-1] ** 0.5
weights = F.softmax(scores, dim=-1)
out = weights @ x
print(out.shape)`,
          output: `torch.Size([3, 2])`,
          keyPoints: [
            `Self-attention replaces recurrence`,
            `Parallel computation over sequence`,
            `O(n²) memory and compute in sequence length`,
            `Long-range dependencies in constant path length`
          ],
          diagram: `Self-Attention
Tokens → Embedding → Self-Attention → FFN → Output`,
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Wrong sequence length after tokenization — truncating critical context`,
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`,
            `Not moving tensors and model to the same device (CPU vs CUDA)`
          ]
        },
        {
          id: `multi-head`,
          title: `Multi-Head Attention`,
          content: `### Introduction

Multiple attention heads in parallel with different learned projections. Concatenate and project output. h heads, d_model/h dimensions each.

### Multi-Head Attention

### Key Ideas

- Multiple heads capture different relationship types
- Concat heads then linear projection
- num_heads divides embed_dim evenly
- Attention weights interpretable per head

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `import torch.nn as nn

mha = nn.MultiheadAttention(embed_dim=64, num_heads=8, batch_first=True)
x = torch.randn(2, 10, 64)
out, weights = mha(x, x, x)
print(out.shape, weights.shape)`,
          output: `torch.Size([2, 10, 64]) torch.Size([2, 8, 10, 10])`,
          keyPoints: [
            `Multiple heads capture different relationship types`,
            `Concat heads then linear projection`,
            `num_heads divides embed_dim evenly`,
            `Attention weights interpretable per head`
          ],
          diagram: `Multi-Head Attention
Tokens → Embedding → Self-Attention → FFN → Output`,
          commonMistakes: [
            `Using softmax outputs with \`BCELoss\` instead of logits with \`BCEWithLogitsLoss\``,
            `Gradient explosion without clipping or learning-rate tuning`,
            `Wrong sequence length after tokenization — truncating critical context`,
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-attn-1`,
          question: `Compute softmax attention weights for scores [1, 2, 3].`,
          solution: `import torch
import torch.nn.functional as F
print(F.softmax(torch.tensor([1.,2.,3.]), dim=0).round(decimals=3))`,
          difficulty: `easy`
        },
        {
          id: `ex-attn-2`,
          question: `Scaled dot-product: Q·K/sqrt(d) with Q=K=2, d=4.`,
          solution: `import math
print(2*2 / math.sqrt(4))`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-18`,
      references: [
        {
          id: `attention-paper`,
          title: `Attention Is All You Need`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1706.03762`,
          description: `Transformer architecture paper that revolutionized NLP and beyond.`
        },
        {
          id: `jay-alammar-attention`,
          title: `The Illustrated Transformer`,
          source: `Jay Alammar`,
          type: `documentation`,
          url: `https://jalammar.github.io/illustrated-transformer/`,
          description: `Visual step-by-step explanation of self-attention and transformer blocks.`
        },
        {
          id: `stanford-cs224n`,
          title: `Stanford CS224N — NLP with Deep Learning`,
          source: `Stanford CS224N`,
          type: `course`,
          url: `http://web.stanford.edu/class/cs224n/`,
          description: `Premier NLP course covering embeddings, RNNs, transformers, and LLMs.`
        },
        {
          id: `seq2seq-attention-paper`,
          title: `Neural Machine Translation by Jointly Learning to Align and Attend`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1409.0473`,
          description: `Introduced attention mechanism for encoder-decoder sequence models.`
        }
      ]
    },
{
      id: `dl-transformer`,
      title: `Transformer Architecture`,
      description: `The complete encoder-decoder architecture from "Attention Is All You Need".`,
      level: `advanced`,
      track: `dl`,
      sections: [
        {
          id: `encoder`,
          title: `Transformer Encoder`,
          content: `### Introduction

Stack of identical layers: Multi-Head Self-Attention → Add&Norm → FFN → Add&Norm. FFN: Linear → ReLU → Linear.

### Transformer Encoder

### Key Ideas

- Pre-norm vs post-norm variants exist
- FFN expands then contracts dimensions
- Residual connections around each sublayer
- Stack N layers (6 in original paper)`,
          pseudoCode: `FOR each encoder layer:
    x = LayerNorm(x + MultiHeadSelfAttention(x))
    x = LayerNorm(x + FeedForward(x))`,
          keyPoints: [
            `Pre-norm vs post-norm variants exist`,
            `FFN expands then contracts dimensions`,
            `Residual connections around each sublayer`,
            `Stack N layers (6 in original paper)`
          ],
          diagram: `Transformer Encoder
Tokens → Embedding → Self-Attention → FFN → Output`,
          commonMistakes: [
            `Not moving tensors and model to the same device (CPU vs CUDA)`,
            `Using softmax outputs with \`BCELoss\` instead of logits with \`BCEWithLogitsLoss\``,
            `Gradient explosion without clipping or learning-rate tuning`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `decoder`,
          title: `Transformer Decoder`,
          content: `### Introduction

Masked self-attention (causal) → cross-attention to encoder → FFN. Mask prevents attending to future tokens.

### Transformer Decoder

### Key Ideas

- Causal mask for autoregressive generation
- Cross-attention connects encoder to decoder
- Decoder self-attention is masked
- Encoder-only models (BERT) skip decoder`,
          keyPoints: [
            `Causal mask for autoregressive generation`,
            `Cross-attention connects encoder to decoder`,
            `Decoder self-attention is masked`,
            `Encoder-only models (BERT) skip decoder`
          ],
          diagram: `Transformer Decoder
Tokens → Embedding → Self-Attention → FFN → Output`,
          commonMistakes: [
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`,
            `Not moving tensors and model to the same device (CPU vs CUDA)`,
            `Using softmax outputs with \`BCELoss\` instead of logits with \`BCEWithLogitsLoss\``,
            `Gradient explosion without clipping or learning-rate tuning`
          ]
        },
        {
          id: `ffn`,
          title: `Feed-Forward Network`,
          content: `### Introduction

FFN(x) = max(0, xW₁+b₁)W₂+b₂. Applied position-wise. Typically 4× expansion: d_model → 4·d_model → d_model.

### Feed-Forward Network

### Key Ideas

- Same FFN applied to each position independently
- Majority of transformer parameters in FFN
- GELU activation in modern transformers
- MoE replaces FFN with mixture of experts at scale`,
          keyPoints: [
            `Same FFN applied to each position independently`,
            `Majority of transformer parameters in FFN`,
            `GELU activation in modern transformers`,
            `MoE replaces FFN with mixture of experts at scale`
          ],
          diagram: `Feed-Forward Network
Tokens → Embedding → Self-Attention → FFN → Output`,
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`,
            `Not moving tensors and model to the same device (CPU vs CUDA)`,
            `Using softmax outputs with \`BCELoss\` instead of logits with \`BCEWithLogitsLoss\``
          ]
        },
        {
          id: `layer-norm`,
          title: `Layer Normalization`,
          content: `### Introduction

Normalizes across features per token. Pre-norm (before sublayer) more stable for deep transformers.

### Layer Normalization

### Key Ideas

- LayerNorm not BatchNorm in transformers
- Normalizes last dimension (features)
- Pre-norm enables deeper networks
- RMSNorm simpler alternative used in LLaMA`,
          keyPoints: [
            `LayerNorm not BatchNorm in transformers`,
            `Normalizes last dimension (features)`,
            `Pre-norm enables deeper networks`,
            `RMSNorm simpler alternative used in LLaMA`
          ],
          diagram: `Layer Normalization
Tokens → Embedding → Self-Attention → FFN → Output`,
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Wrong sequence length after tokenization — truncating critical context`,
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`,
            `Not moving tensors and model to the same device (CPU vs CUDA)`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-tr-1`,
          question: `Apply LayerNorm to a 2x4 tensor and print mean/std of first row.`,
          solution: `import torch
import torch.nn as nn
x = torch.randn(2, 4)
y = nn.LayerNorm(4)(x)
print(round(y[0].mean().item(), 4), round(y[0].std(unbiased=False).item(), 4))`,
          difficulty: `easy`
        },
        {
          id: `ex-tr-2`,
          question: `Build causal mask: upper triangle True for seq_len=4.`,
          solution: `import torch
mask = torch.triu(torch.ones(4, 4), diagonal=1).bool()
print(mask.int().tolist())`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 25,
      module: `module-18`,
      references: [
        {
          id: `attention-paper`,
          title: `Attention Is All You Need`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1706.03762`,
          description: `Transformer architecture paper that revolutionized NLP and beyond.`
        },
        {
          id: `jay-alammar-attention`,
          title: `The Illustrated Transformer`,
          source: `Jay Alammar`,
          type: `documentation`,
          url: `https://jalammar.github.io/illustrated-transformer/`,
          description: `Visual step-by-step explanation of self-attention and transformer blocks.`
        },
        {
          id: `transformers-docs`,
          title: `Hugging Face Transformers Documentation`,
          source: `Hugging Face`,
          type: `documentation`,
          url: `https://huggingface.co/docs/transformers/index`,
          description: `Library for BERT, GPT, T5, and thousands of pretrained transformer models.`
        },
        {
          id: `stanford-cs224n`,
          title: `Stanford CS224N — NLP with Deep Learning`,
          source: `Stanford CS224N`,
          type: `course`,
          url: `http://web.stanford.edu/class/cs224n/`,
          description: `Premier NLP course covering embeddings, RNNs, transformers, and LLMs.`
        }
      ]
    },
{
      id: `dl-positional`,
      title: `Positional Encoding`,
      description: `Inject sequence order information since attention is permutation-invariant.`,
      level: `advanced`,
      track: `dl`,
      sections: [
        {
          id: `sinusoidal`,
          title: `Sinusoidal Positional Encoding`,
          content: `### Introduction

PE(pos,2i) = sin(pos/10000^(2i/d)). PE(pos,2i+1) = cos(...). Fixed, not learned. Generalizes to unseen lengths.

### Sinusoidal Positional Encoding

### Key Ideas

- Sinusoidal encoding from original transformer paper
- Each dimension different wavelength
- Added to input embeddings
- Can extrapolate beyond training length somewhat

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `import torch
import math

def sinusoidal_pe(seq_len, d_model):
    pe = torch.zeros(seq_len, d_model)
    position = torch.arange(seq_len).unsqueeze(1).float()
    div_term = torch.exp(torch.arange(0, d_model, 2).float() * (-math.log(10000.0) / d_model))
    pe[:, 0::2] = torch.sin(position * div_term)
    pe[:, 1::2] = torch.cos(position * div_term)
    return pe

print(sinusoidal_pe(4, 8).shape)`,
          output: `torch.Size([4, 8])`,
          keyPoints: [
            `Sinusoidal encoding from original transformer paper`,
            `Each dimension different wavelength`,
            `Added to input embeddings`,
            `Can extrapolate beyond training length somewhat`
          ],
          diagram: `Sinusoidal Positional Encoding
Tokens → Embedding → Self-Attention → FFN → Output`,
          commonMistakes: [
            `Gradient explosion without clipping or learning-rate tuning`,
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`,
            `Not moving tensors and model to the same device (CPU vs CUDA)`,
            `Using softmax outputs with \`BCELoss\` instead of logits with \`BCEWithLogitsLoss\``
          ]
        },
        {
          id: `learned`,
          title: `Learned Positional Embeddings`,
          content: `### Introduction

nn.Embedding(max_seq_len, d_model). GPT uses learned positions.

### Learned Positional Embeddings

Limited to max_seq_len seen during training.

### Key Ideas

- Learned positions standard in GPT models
- Cannot exceed max position embeddings
- Rotary (RoPE) and ALiBi extend context
- Position embeddings added to token embeddings`,
          keyPoints: [
            `Learned positions standard in GPT models`,
            `Cannot exceed max position embeddings`,
            `Rotary (RoPE) and ALiBi extend context`,
            `Position embeddings added to token embeddings`
          ],
          diagram: `Learned Positional Embeddings
Tokens → Embedding → Self-Attention → FFN → Output`,
          commonMistakes: [
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`,
            `Not moving tensors and model to the same device (CPU vs CUDA)`,
            `Using softmax outputs with \`BCELoss\` instead of logits with \`BCEWithLogitsLoss\``
          ]
        },
        {
          id: `rope`,
          title: `Rotary Position Embedding (RoPE)`,
          content: `### Introduction

Rotates query and key vectors by position-dependent angle. Relative position encoding.

### Rotary Position Embedding (RoPE)

Used in LLaMA, Mistral, GPT-NeoX.

### Key Ideas

- RoPE encodes relative not absolute position
- Better length extrapolation than learned
- Standard in modern open-source LLMs
- Applied to Q and K before attention`,
          keyPoints: [
            `RoPE encodes relative not absolute position`,
            `Better length extrapolation than learned`,
            `Standard in modern open-source LLMs`,
            `Applied to Q and K before attention`
          ],
          diagram: `Rotary Position Embedding (RoPE)
Tokens → Embedding → Self-Attention → FFN → Output`,
          commonMistakes: [
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`,
            `Not moving tensors and model to the same device (CPU vs CUDA)`,
            `Using softmax outputs with \`BCELoss\` instead of logits with \`BCEWithLogitsLoss\``,
            `Gradient explosion without clipping or learning-rate tuning`
          ]
        },
        {
          id: `alibi`,
          title: `ALiBi & Relative Positions`,
          content: `### Introduction

Attention with Linear Biases: add linear penalty based on distance. No explicit position embeddings needed.

### ALiBi & Relative Positions

### Key Ideas

- ALiBi simple and effective
- Strong length extrapolation
- Relative position bias in attention scores
- Multiple approaches coexist in modern models`,
          keyPoints: [
            `ALiBi simple and effective`,
            `Strong length extrapolation`,
            `Relative position bias in attention scores`,
            `Multiple approaches coexist in modern models`
          ],
          diagram: `ALiBi & Relative Positions
Tokens → Embedding → Self-Attention → FFN → Output`,
          commonMistakes: [
            `Using softmax outputs with \`BCELoss\` instead of logits with \`BCEWithLogitsLoss\``,
            `Gradient explosion without clipping or learning-rate tuning`,
            `Using polynomial degree too high without regularization`,
            `Wrong sequence length after tokenization — truncating critical context`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-pe-1`,
          question: `Why do transformers need positional encoding?`,
          solution: `print("Self-attention is permutation-invariant — order must be injected")`,
          difficulty: `easy`
        },
        {
          id: `ex-pe-2`,
          question: `Create learned pos embedding for seq=8, dim=16.`,
          solution: `import torch.nn as nn
print(nn.Embedding(8, 16)(torch.arange(8)).shape)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-18`,
      references: [
        {
          id: `attention-paper`,
          title: `Attention Is All You Need`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1706.03762`,
          description: `Transformer architecture paper that revolutionized NLP and beyond.`
        },
        {
          id: `jay-alammar-attention`,
          title: `The Illustrated Transformer`,
          source: `Jay Alammar`,
          type: `documentation`,
          url: `https://jalammar.github.io/illustrated-transformer/`,
          description: `Visual step-by-step explanation of self-attention and transformer blocks.`
        },
        {
          id: `transformers-docs`,
          title: `Hugging Face Transformers Documentation`,
          source: `Hugging Face`,
          type: `documentation`,
          url: `https://huggingface.co/docs/transformers/index`,
          description: `Library for BERT, GPT, T5, and thousands of pretrained transformer models.`
        },
        {
          id: `stanford-cs224n`,
          title: `Stanford CS224N — NLP with Deep Learning`,
          source: `Stanford CS224N`,
          type: `course`,
          url: `http://web.stanford.edu/class/cs224n/`,
          description: `Premier NLP course covering embeddings, RNNs, transformers, and LLMs.`
        }
      ]
    },
{
      id: `dl-bert`,
      title: `BERT & Encoder Models`,
      description: `Bidirectional encoder representations from transformers.`,
      level: `advanced`,
      track: `dl`,
      sections: [
        {
          id: `bert`,
          title: `BERT Architecture`,
          content: `### Introduction

Encoder-only transformer. Pre-trained with MLM (Masked Language Model) and NSP. Fine-tune for classification, NER, QA.

### BERT Architecture

### Key Ideas

- [CLS] token representation for classification
- [MASK] token for MLM pretraining
- Bidirectional context — sees left and right
- Fine-tune with task-specific head on top

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `from transformers import BertTokenizer, BertModel

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertModel.from_pretrained("bert-base-uncased")
inputs = tokenizer("Hello transformers", return_tensors="pt")
outputs = model(**inputs)
print(outputs.last_hidden_state.shape)`,
          keyPoints: [
            `[CLS] token representation for classification`,
            `[MASK] token for MLM pretraining`,
            `Bidirectional context — sees left and right`,
            `Fine-tune with task-specific head on top`
          ],
          diagram: `BERT Architecture
Tokens → Embedding → Self-Attention → FFN → Output`,
          commonMistakes: [
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Not stratifying splits for classification tasks`,
            `Wrong sequence length after tokenization — truncating critical context`,
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`
          ]
        },
        {
          id: `mlm`,
          title: `Masked Language Modeling`,
          content: `### Introduction

Randomly mask 15% of tokens, predict masked tokens. Learns deep bidirectional representations.

### Masked Language Modeling

### Key Ideas

- 80% replace with [MASK], 10% random, 10% unchanged
- Forces model to understand context
- MLM objective is denoising autoencoder
- RoBERTa improves BERT training recipe`,
          keyPoints: [
            `80% replace with [MASK], 10% random, 10% unchanged`,
            `Forces model to understand context`,
            `MLM objective is denoising autoencoder`,
            `RoBERTa improves BERT training recipe`
          ],
          diagram: `Masked Language Modeling
Tokens → Embedding → Self-Attention → FFN → Output`,
          commonMistakes: [
            `Using softmax outputs with \`BCELoss\` instead of logits with \`BCEWithLogitsLoss\``,
            `Gradient explosion without clipping or learning-rate tuning`,
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`,
            `Not moving tensors and model to the same device (CPU vs CUDA)`
          ]
        },
        {
          id: `fine-tune`,
          title: `Fine-Tuning BERT`,
          content: `### Introduction

Add classification head on [CLS]. Train with small LR (2e-5 to 5e-5).

### Fine-Tuning BERT

Few epochs often sufficient.

### Key Ideas

- Use AdamW optimizer with weight decay
- Small learning rate critical for fine-tuning
- Freeze early layers for very small datasets
- HuggingFace Trainer simplifies fine-tuning

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `from transformers import BertForSequenceClassification

model = BertForSequenceClassification.from_pretrained("bert-base-uncased", num_labels=2)
print(model.classifier)`,
          keyPoints: [
            `Use AdamW optimizer with weight decay`,
            `Small learning rate critical for fine-tuning`,
            `Freeze early layers for very small datasets`,
            `HuggingFace Trainer simplifies fine-tuning`
          ],
          diagram: `Fine-Tuning BERT
Tokens → Embedding → Self-Attention → FFN → Output`,
          commonMistakes: [
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Not stratifying splits for classification tasks`,
            `Wrong sequence length after tokenization — truncating critical context`,
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`
          ]
        },
        {
          id: `encoder-models`,
          title: `Modern Encoder Models`,
          content: `### Introduction

RoBERTa, DeBERTa, ELECTRA, DistilBERT. Encoder models for understanding tasks, not generation.

### Modern Encoder Models

### Key Ideas

- RoBERTa: optimized BERT training
- DeBERTa: disentangled attention
- DistilBERT: 40% smaller, 97% performance
- Encoder models for classification and retrieval`,
          keyPoints: [
            `RoBERTa: optimized BERT training`,
            `DeBERTa: disentangled attention`,
            `DistilBERT: 40% smaller, 97% performance`,
            `Encoder models for classification and retrieval`
          ],
          diagram: `Modern Encoder Models
Tokens → Embedding → Self-Attention → FFN → Output`,
          commonMistakes: [
            `Gradient explosion without clipping or learning-rate tuning`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Wrong sequence length after tokenization — truncating critical context`,
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-bert-1`,
          question: `Tokenize text and print input_ids length for BERT.`,
          solution: `from transformers import BertTokenizer
tok = BertTokenizer.from_pretrained("bert-base-uncased")
ids = tok("Hello transformers", return_tensors="pt")["input_ids"]
print(ids.shape[1])`,
          difficulty: `medium`
        },
        {
          id: `ex-bert-2`,
          question: `Compute MLM mask rate: 15% of 20 tokens.`,
          solution: `n_tokens = 20
n_masked = int(0.15 * n_tokens)
print(n_masked)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-18`,
      references: [
        {
          id: `bert-paper`,
          title: `BERT: Pre-training of Deep Bidirectional Transformers`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1810.04805`,
          description: `Bidirectional encoder pretraining that set new benchmarks across NLP tasks.`
        },
        {
          id: `transformers-docs`,
          title: `Hugging Face Transformers Documentation`,
          source: `Hugging Face`,
          type: `documentation`,
          url: `https://huggingface.co/docs/transformers/index`,
          description: `Library for BERT, GPT, T5, and thousands of pretrained transformer models.`
        },
        {
          id: `huggingface-nlp-course`,
          title: `Hugging Face NLP Course`,
          source: `Hugging Face`,
          type: `course`,
          url: `https://huggingface.co/learn/nlp-course/chapter1/1`,
          description: `Hands-on transformers course using the Hugging Face ecosystem.`
        },
        {
          id: `stanford-cs224n`,
          title: `Stanford CS224N — NLP with Deep Learning`,
          source: `Stanford CS224N`,
          type: `course`,
          url: `http://web.stanford.edu/class/cs224n/`,
          description: `Premier NLP course covering embeddings, RNNs, transformers, and LLMs.`
        }
      ]
    },
{
      id: `dl-gpt`,
      title: `GPT & Decoder Models`,
      description: `Autoregressive language models for text generation.`,
      level: `advanced`,
      track: `dl`,
      sections: [
        {
          id: `gpt`,
          title: `GPT Architecture`,
          content: `### Introduction

Decoder-only transformer with causal masking. Predict next token autoregressively.

### GPT Architecture

Pre-train on large text corpus.

### Key Ideas

- Causal/autoregressive: predict P(x_t | x_<t)
- Decoder-only for generation tasks
- Scaling laws: bigger = better performance
- GPT-2, GPT-3, GPT-4 evolution

### Example

Study the **code example** below, predict the output, then run it in Python or Jupyter. Compare your result with the **output** panel.`,
          example: `from transformers import GPT2Tokenizer, GPT2LMHeadModel

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = GPT2LMHeadModel.from_pretrained("gpt2")
inputs = tokenizer("The future of AI is", return_tensors="pt")
outputs = model.generate(**inputs, max_new_tokens=10)
print(tokenizer.decode(outputs[0], skip_special_tokens=True)[:50])`,
          keyPoints: [
            `Causal/autoregressive: predict P(x_t | x_<t)`,
            `Decoder-only for generation tasks`,
            `Scaling laws: bigger = better performance`,
            `GPT-2, GPT-3, GPT-4 evolution`
          ],
          diagram: `GPT Architecture
Tokens → Embedding → Self-Attention → FFN → Output`,
          commonMistakes: [
            `Not moving tensors and model to the same device (CPU vs CUDA)`,
            `Using softmax outputs with \`BCELoss\` instead of logits with \`BCEWithLogitsLoss\``,
            `Gradient explosion without clipping or learning-rate tuning`,
            `Infinite loops when the loop variable never moves toward the exit condition`
          ]
        },
        {
          id: `generation`,
          title: `Text Generation Strategies`,
          content: `### Introduction

Greedy, beam search, top-k sampling, nucleus (top-p) sampling, temperature scaling. Control randomness vs quality.

### Text Generation Strategies

### Key Ideas

- Temperature < 1 sharpens, > 1 flattens distribution
- top-p (nucleus): sample from smallest set with cumulative prob p
- top-k: sample from k most likely tokens
- Repetition penalty reduces loops`,
          keyPoints: [
            `Temperature < 1 sharpens, > 1 flattens distribution`,
            `top-p (nucleus): sample from smallest set with cumulative prob p`,
            `top-k: sample from k most likely tokens`,
            `Repetition penalty reduces loops`
          ],
          diagram: `Text Generation Strategies
Query → Embed → Retrieve → Augment Prompt → Generate`,
          commonMistakes: [
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`,
            `Not moving tensors and model to the same device (CPU vs CUDA)`,
            `Using softmax outputs with \`BCELoss\` instead of logits with \`BCEWithLogitsLoss\``,
            `Gradient explosion without clipping or learning-rate tuning`
          ]
        },
        {
          id: `causal`,
          title: `Causal Language Modeling`,
          content: `### Introduction

Train to predict next token. Loss on all positions simultaneously with causal mask.

### Causal Language Modeling

Foundation of all LLM pretraining.

### Key Ideas

- CLM loss computed on all token positions
- Causal mask prevents cheating (seeing future)
- Cross-entropy loss on vocabulary
- Trillions of tokens for frontier models`,
          keyPoints: [
            `CLM loss computed on all token positions`,
            `Causal mask prevents cheating (seeing future)`,
            `Cross-entropy loss on vocabulary`,
            `Trillions of tokens for frontier models`
          ],
          diagram: `Causal Language Modeling
Forward → Loss → Backward → Update Weights`,
          commonMistakes: [
            `Gradient explosion without clipping or learning-rate tuning`,
            `Wrong sequence length after tokenization — truncating critical context`,
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`,
            `Not moving tensors and model to the same device (CPU vs CUDA)`
          ]
        },
        {
          id: `scaling`,
          title: `Scaling Laws`,
          content: `### Introduction

Performance scales predictably with compute, data, and parameters. Chinchilla: optimal tokens ≈ 20× parameters.

### Scaling Laws

### Key Ideas

- Kaplan scaling laws (OpenAI 2020)
- Chinchilla optimal compute allocation
- Emergent abilities at scale debated
- Efficiency improvements (MoE, quantization) extend scaling`,
          keyPoints: [
            `Kaplan scaling laws (OpenAI 2020)`,
            `Chinchilla optimal compute allocation`,
            `Emergent abilities at scale debated`,
            `Efficiency improvements (MoE, quantization) extend scaling`
          ],
          commonMistakes: [
            `Using softmax outputs with \`BCELoss\` instead of logits with \`BCEWithLogitsLoss\``,
            `Gradient explosion without clipping or learning-rate tuning`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Wrong input tensor shape (batch, channels, height, width) for Conv2d`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-gpt-1`,
          question: `Apply temperature scaling: logits [1,2,3] with T=2.`,
          solution: `import torch
import torch.nn.functional as F
logits = torch.tensor([1., 2., 3.])
print(F.softmax(logits / 2, dim=0).round(decimals=3).tolist())`,
          difficulty: `easy`
        },
        {
          id: `ex-gpt-2`,
          question: `GPT2 tokenizer: encode "AI" and print token count.`,
          solution: `from transformers import GPT2Tokenizer
tok = GPT2Tokenizer.from_pretrained("gpt2")
print(len(tok.encode("AI")))`,
          difficulty: `medium`
        }
      ],
      estimatedMinutes: 25,
      module: `module-18`,
      references: [
        {
          id: `gpt3-paper`,
          title: `Language Models are Few-Shot Learners (GPT-3)`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/2005.14165`,
          description: `Demonstrated emergent few-shot learning at scale with autoregressive LMs.`
        },
        {
          id: `transformers-docs`,
          title: `Hugging Face Transformers Documentation`,
          source: `Hugging Face`,
          type: `documentation`,
          url: `https://huggingface.co/docs/transformers/index`,
          description: `Library for BERT, GPT, T5, and thousands of pretrained transformer models.`
        },
        {
          id: `huggingface-nlp-course`,
          title: `Hugging Face NLP Course`,
          source: `Hugging Face`,
          type: `course`,
          url: `https://huggingface.co/learn/nlp-course/chapter1/1`,
          description: `Hands-on transformers course using the Hugging Face ecosystem.`
        },
        {
          id: `attention-paper`,
          title: `Attention Is All You Need`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1706.03762`,
          description: `Transformer architecture paper that revolutionized NLP and beyond.`
        }
      ]
    }
];
