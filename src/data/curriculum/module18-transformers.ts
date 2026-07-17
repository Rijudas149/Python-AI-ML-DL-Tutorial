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
          content: `Attention weighs relevance of each input element when producing output.

Query, Key, Value framework from information retrieval.

**Attention Intuition** in the context of **Self-Attention Mechanism**: Neural network code relies on this foundation at every step — shapes, gradients, and training loops. Execute the example carefully before moving to the exercises.`,
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
          pseudoCode: `CONCEPT: Attention Intuition

Checklist:
  1. Query: what am I looking for
  2. Key: what do I contain
  3. Value: what information do I provide
  4. Softmax weights sum to 1 over keys`
        },
        {
          id: `scaled`,
          title: `Scaled Dot-Product Attention`,
          content: `Attention(Q,K,V) = softmax(QK^T/√d_k)V.

Scaling prevents softmax saturation with large d_k.

**Scaled Dot-Product Attention** in the context of **Self-Attention Mechanism**: Neural network code relies on this foundation at every step — shapes, gradients, and training loops. Execute the example carefully before moving to the exercises.`,
          pseudoCode: `scores = Q @ K.T / sqrt(d_k)
weights = softmax(scores)
output = weights @ V`,
          keyPoints: [
            `Scaling by sqrt(d_k) stabilizes gradients`,
            `QK^T computes pairwise similarity`,
            `Softmax produces attention weights`,
            `Output is weighted sum of values`
          ]
        },
        {
          id: `self-attn`,
          title: `Self-Attention`,
          content: `Q, K, V all from same sequence.

Each position attends to all positions including itself.

Captures long-range dependencies in O(n²).

**Self-Attention** in the context of **Self-Attention Mechanism**: Neural network code relies on this foundation at every step — shapes, gradients, and training loops. Execute the example carefully before moving to the exercises.`,
          keyPoints: [
            `Self-attention replaces recurrence`,
            `Parallel computation over sequence`,
            `O(n²) memory and compute in sequence length`,
            `Long-range dependencies in constant path length`
          ],
          pseudoCode: `CONCEPT: Self-Attention

Checklist:
  1. Self-attention replaces recurrence
  2. Parallel computation over sequence
  3. O(n²) memory and compute in sequence length
  4. Long-range dependencies in constant path length`
        },
        {
          id: `multi-head`,
          title: `Multi-Head Attention`,
          content: `Multiple attention heads in parallel with different learned projections.

Concatenate and project output. h heads, d_model/h dimensions each.

**Multi-Head Attention** in the context of **Self-Attention Mechanism**: Neural network code relies on this foundation at every step — shapes, gradients, and training loops. Execute the example carefully before moving to the exercises.`,
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
          pseudoCode: `CONCEPT: Multi-Head Attention

Checklist:
  1. Multiple heads capture different relationship types
  2. Concat heads then linear projection
  3. num_heads divides embed_dim evenly
  4. Attention weights interpretable per head`
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
          content: `Stack of identical layers: Multi-Head Self-Attention → Add&Norm → FFN → Add&Norm.

FFN: Linear → ReLU → Linear.

**Transformer Encoder** in the context of **Transformer Architecture**: Neural network code relies on this foundation at every step — shapes, gradients, and training loops. Execute the example carefully before moving to the exercises.`,
          pseudoCode: `FOR each encoder layer:
    x = LayerNorm(x + MultiHeadSelfAttention(x))
    x = LayerNorm(x + FeedForward(x))`,
          keyPoints: [
            `Pre-norm vs post-norm variants exist`,
            `FFN expands then contracts dimensions`,
            `Residual connections around each sublayer`,
            `Stack N layers (6 in original paper)`
          ]
        },
        {
          id: `decoder`,
          title: `Transformer Decoder`,
          content: `Masked self-attention (causal) → cross-attention to encoder → FFN.

Mask prevents attending to future tokens.

**Transformer Decoder** in the context of **Transformer Architecture**: Neural network code relies on this foundation at every step — shapes, gradients, and training loops. Execute the example carefully before moving to the exercises.`,
          keyPoints: [
            `Causal mask for autoregressive generation`,
            `Cross-attention connects encoder to decoder`,
            `Decoder self-attention is masked`,
            `Encoder-only models (BERT) skip decoder`
          ],
          pseudoCode: `CONCEPT: Transformer Decoder

Checklist:
  1. Causal mask for autoregressive generation
  2. Cross-attention connects encoder to decoder
  3. Decoder self-attention is masked
  4. Encoder-only models (BERT) skip decoder`
        },
        {
          id: `ffn`,
          title: `Feed-Forward Network`,
          content: `FFN(x) = max(0, xW₁+b₁)W₂+b₂.

Applied position-wise.

Typically 4× expansion: d_model → 4·d_model → d_model.

**Feed-Forward Network** in the context of **Transformer Architecture**: Neural network code relies on this foundation at every step — shapes, gradients, and training loops. Execute the example carefully before moving to the exercises.`,
          keyPoints: [
            `Same FFN applied to each position independently`,
            `Majority of transformer parameters in FFN`,
            `GELU activation in modern transformers`,
            `MoE replaces FFN with mixture of experts at scale`
          ],
          pseudoCode: `CONCEPT: Feed-Forward Network

Checklist:
  1. Same FFN applied to each position independently
  2. Majority of transformer parameters in FFN
  3. GELU activation in modern transformers
  4. MoE replaces FFN with mixture of experts at scale`
        },
        {
          id: `layer-norm`,
          title: `Layer Normalization`,
          content: `Normalizes across features per token.

Pre-norm (before sublayer) more stable for deep transformers.

**Layer Normalization** in the context of **Transformer Architecture**: Neural network code relies on this foundation at every step — shapes, gradients, and training loops. Execute the example carefully before moving to the exercises.`,
          keyPoints: [
            `LayerNorm not BatchNorm in transformers`,
            `Normalizes last dimension (features)`,
            `Pre-norm enables deeper networks`,
            `RMSNorm simpler alternative used in LLaMA`
          ],
          pseudoCode: `CONCEPT: Layer Normalization

Checklist:
  1. LayerNorm not BatchNorm in transformers
  2. Normalizes last dimension (features)
  3. Pre-norm enables deeper networks
  4. RMSNorm simpler alternative used in LLaMA`
        }
      ],
      exercises: [
        {
          id: `ex-tr-1`,
          question: `Transformer encoder layer order: attention then ___.`,
          solution: `print("Feed-Forward Network (FFN)")`,
          difficulty: `easy`
        },
        {
          id: `ex-tr-2`,
          question: `Causal mask prevents attending to ___ tokens.`,
          solution: `print("future")`,
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
      id: `dl-positional`,
      title: `Positional Encoding`,
      description: `Inject sequence order information since attention is permutation-invariant.`,
      level: `advanced`,
      track: `dl`,
      sections: [
        {
          id: `sinusoidal`,
          title: `Sinusoidal Positional Encoding`,
          content: `PE(pos,2i) = sin(pos/10000^(2i/d)).

PE(pos,2i+1) = cos(...).

Generalizes to unseen lengths.

**Sinusoidal Positional Encoding** in the context of **Positional Encoding**: Neural network code relies on this foundation at every step — shapes, gradients, and training loops. Execute the example carefully before moving to the exercises.`,
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
          pseudoCode: `CONCEPT: Sinusoidal Positional Encoding

Checklist:
  1. Sinusoidal encoding from original transformer paper
  2. Each dimension different wavelength
  3. Added to input embeddings
  4. Can extrapolate beyond training length somewhat`
        },
        {
          id: `learned`,
          title: `Learned Positional Embeddings`,
          content: `nn.Embedding(max_seq_len, d_model).

GPT uses learned positions.

Limited to max_seq_len seen during training.

**Learned Positional Embeddings** in the context of **Positional Encoding**: Neural network code relies on this foundation at every step — shapes, gradients, and training loops. Execute the example carefully before moving to the exercises.`,
          keyPoints: [
            `Learned positions standard in GPT models`,
            `Cannot exceed max position embeddings`,
            `Rotary (RoPE) and ALiBi extend context`,
            `Position embeddings added to token embeddings`
          ],
          pseudoCode: `CONCEPT: Learned Positional Embeddings

Checklist:
  1. Learned positions standard in GPT models
  2. Cannot exceed max position embeddings
  3. Rotary (RoPE) and ALiBi extend context
  4. Position embeddings added to token embeddings`
        },
        {
          id: `rope`,
          title: `Rotary Position Embedding (RoPE)`,
          content: `Rotates query and key vectors by position-dependent angle.

Relative position encoding.

Used in LLaMA, Mistral, GPT-NeoX.

**Rotary Position Embedding (RoPE)** in the context of **Positional Encoding**: Neural network code relies on this foundation at every step — shapes, gradients, and training loops. Execute the example carefully before moving to the exercises.`,
          keyPoints: [
            `RoPE encodes relative not absolute position`,
            `Better length extrapolation than learned`,
            `Standard in modern open-source LLMs`,
            `Applied to Q and K before attention`
          ],
          pseudoCode: `CONCEPT: Rotary Position Embedding (RoPE)

Checklist:
  1. RoPE encodes relative not absolute position
  2. Better length extrapolation than learned
  3. Standard in modern open-source LLMs
  4. Applied to Q and K before attention`
        },
        {
          id: `alibi`,
          title: `ALiBi & Relative Positions`,
          content: `Attention with Linear Biases: add linear penalty based on distance.

No explicit position embeddings needed.

**ALiBi & Relative Positions** in the context of **Positional Encoding**: Neural network code relies on this foundation at every step — shapes, gradients, and training loops. Execute the example carefully before moving to the exercises.`,
          keyPoints: [
            `ALiBi simple and effective`,
            `Strong length extrapolation`,
            `Relative position bias in attention scores`,
            `Multiple approaches coexist in modern models`
          ],
          pseudoCode: `CONCEPT: ALiBi & Relative Positions

Checklist:
  1. ALiBi simple and effective
  2. Strong length extrapolation
  3. Relative position bias in attention scores
  4. Multiple approaches coexist in modern models`
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
          content: `Encoder-only transformer.

Pre-trained with MLM (Masked Language Model) and NSP.

Fine-tune for classification, NER, QA.

**BERT Architecture** in the context of **BERT & Encoder Models**: Neural network code relies on this foundation at every step — shapes, gradients, and training loops. Execute the example carefully before moving to the exercises.`,
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
          pseudoCode: `CONCEPT: BERT Architecture

Checklist:
  1. [CLS] token representation for classification
  2. [MASK] token for MLM pretraining
  3. Bidirectional context — sees left and right
  4. Fine-tune with task-specific head on top`
        },
        {
          id: `mlm`,
          title: `Masked Language Modeling`,
          content: `Randomly mask 15% of tokens, predict masked tokens.

Learns deep bidirectional representations.

**Masked Language Modeling** in the context of **BERT & Encoder Models**: Neural network code relies on this foundation at every step — shapes, gradients, and training loops. Execute the example carefully before moving to the exercises.`,
          keyPoints: [
            `80% replace with [MASK], 10% random, 10% unchanged`,
            `Forces model to understand context`,
            `MLM objective is denoising autoencoder`,
            `RoBERTa improves BERT training recipe`
          ],
          pseudoCode: `CONCEPT: Masked Language Modeling

Checklist:
  1. 80% replace with [MASK], 10% random, 10% unchanged
  2. Forces model to understand context
  3. MLM objective is denoising autoencoder
  4. RoBERTa improves BERT training recipe`
        },
        {
          id: `fine-tune`,
          title: `Fine-Tuning BERT`,
          content: `Add classification head on [CLS].

Train with small LR (2e-5 to 5e-5).

Few epochs often sufficient.

**Fine-Tuning BERT** in the context of **BERT & Encoder Models**: Neural network code relies on this foundation at every step — shapes, gradients, and training loops. Execute the example carefully before moving to the exercises.`,
          example: `from transformers import BertForSequenceClassification

model = BertForSequenceClassification.from_pretrained("bert-base-uncased", num_labels=2)
print(model.classifier)`,
          keyPoints: [
            `Use AdamW optimizer with weight decay`,
            `Small learning rate critical for fine-tuning`,
            `Freeze early layers for very small datasets`,
            `HuggingFace Trainer simplifies fine-tuning`
          ],
          pseudoCode: `CONCEPT: Fine-Tuning BERT

Checklist:
  1. Use AdamW optimizer with weight decay
  2. Small learning rate critical for fine-tuning
  3. Freeze early layers for very small datasets
  4. HuggingFace Trainer simplifies fine-tuning`
        },
        {
          id: `encoder-models`,
          title: `Modern Encoder Models`,
          content: `RoBERTa, DeBERTa, ELECTRA, DistilBERT.

Encoder models for understanding tasks, not generation.

**Modern Encoder Models** in the context of **BERT & Encoder Models**: Neural network code relies on this foundation at every step — shapes, gradients, and training loops. Execute the example carefully before moving to the exercises.`,
          keyPoints: [
            `RoBERTa: optimized BERT training`,
            `DeBERTa: disentangled attention`,
            `DistilBERT: 40% smaller, 97% performance`,
            `Encoder models for classification and retrieval`
          ],
          pseudoCode: `CONCEPT: Modern Encoder Models

Checklist:
  1. RoBERTa: optimized BERT training
  2. DeBERTa: disentangled attention
  3. DistilBERT: 40% smaller, 97% performance
  4. Encoder models for classification and retrieval`
        }
      ],
      exercises: [
        {
          id: `ex-bert-1`,
          question: `BERT uses [CLS] token for ___ tasks.`,
          solution: `print("classification")`,
          difficulty: `easy`
        },
        {
          id: `ex-bert-2`,
          question: `MLM masks ___% of tokens during pretraining.`,
          solution: `print(15)`,
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
          content: `Decoder-only transformer with causal masking.

Predict next token autoregressively.

Pre-train on large text corpus.

**GPT Architecture** in the context of **GPT & Decoder Models**: Neural network code relies on this foundation at every step — shapes, gradients, and training loops. Execute the example carefully before moving to the exercises.`,
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
          pseudoCode: `CONCEPT: GPT Architecture

Checklist:
  1. Causal/autoregressive: predict P(x_t | x_<t)
  2. Decoder-only for generation tasks
  3. Scaling laws: bigger = better performance
  4. GPT-2, GPT-3, GPT-4 evolution`
        },
        {
          id: `generation`,
          title: `Text Generation Strategies`,
          content: `Greedy, beam search, top-k sampling, nucleus (top-p) sampling, temperature scaling.

Control randomness vs quality.

**Text Generation Strategies** in the context of **GPT & Decoder Models**: Neural network code relies on this foundation at every step — shapes, gradients, and training loops. Execute the example carefully before moving to the exercises.`,
          keyPoints: [
            `Temperature < 1 sharpens, > 1 flattens distribution`,
            `top-p (nucleus): sample from smallest set with cumulative prob p`,
            `top-k: sample from k most likely tokens`,
            `Repetition penalty reduces loops`
          ],
          pseudoCode: `CONCEPT: Text Generation Strategies

Checklist:
  1. Temperature < 1 sharpens, > 1 flattens distribution
  2. top-p (nucleus): sample from smallest set with cumulative prob p
  3. top-k: sample from k most likely tokens
  4. Repetition penalty reduces loops`
        },
        {
          id: `causal`,
          title: `Causal Language Modeling`,
          content: `Train to predict next token.

Loss on all positions simultaneously with causal mask.

Foundation of all LLM pretraining.

**Causal Language Modeling** in the context of **GPT & Decoder Models**: Neural network code relies on this foundation at every step — shapes, gradients, and training loops. Execute the example carefully before moving to the exercises.`,
          keyPoints: [
            `CLM loss computed on all token positions`,
            `Causal mask prevents cheating (seeing future)`,
            `Cross-entropy loss on vocabulary`,
            `Trillions of tokens for frontier models`
          ],
          pseudoCode: `CONCEPT: Causal Language Modeling

Checklist:
  1. CLM loss computed on all token positions
  2. Causal mask prevents cheating (seeing future)
  3. Cross-entropy loss on vocabulary
  4. Trillions of tokens for frontier models`
        },
        {
          id: `scaling`,
          title: `Scaling Laws`,
          content: `Performance scales predictably with compute, data, and parameters.

Chinchilla: optimal tokens ≈ 20× parameters.

**Scaling Laws** in the context of **GPT & Decoder Models**: Neural network code relies on this foundation at every step — shapes, gradients, and training loops. Execute the example carefully before moving to the exercises.`,
          keyPoints: [
            `Kaplan scaling laws (OpenAI 2020)`,
            `Chinchilla optimal compute allocation`,
            `Emergent abilities at scale debated`,
            `Efficiency improvements (MoE, quantization) extend scaling`
          ],
          pseudoCode: `CONCEPT: Scaling Laws

Checklist:
  1. Kaplan scaling laws (OpenAI 2020)
  2. Chinchilla optimal compute allocation
  3. Emergent abilities at scale debated
  4. Efficiency improvements (MoE, quantization) extend scaling`
        }
      ],
      exercises: [
        {
          id: `ex-gpt-1`,
          question: `Temperature > 1 makes output more ___ .`,
          solution: `print("random/diverse")`,
          difficulty: `easy`
        },
        {
          id: `ex-gpt-2`,
          question: `GPT is a ___-only transformer.`,
          solution: `print("decoder")`,
          difficulty: `easy`
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
