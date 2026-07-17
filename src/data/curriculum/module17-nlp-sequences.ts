import type { Topic } from '../../types';

export const module17Topics: Topic[] = [
{
      id: `nlp-preprocess`,
      title: `Text Preprocessing & Tokenization`,
      description: `Prepare raw text for neural network input.`,
      level: `beginner`,
      track: `dl`,
      sections: [
        {
          id: `clean`,
          title: `Text Cleaning`,
          content: `Lowercase, remove punctuation, handle URLs/emojis, normalize whitespace. Domain-specific rules matter.`,
          example: `import re

def clean_text(text):
    text = text.lower()
    text = re.sub(r"[^a-z0-9\\s]", "", text)
    return " ".join(text.split())

print(clean_text("Hello, World! Visit https://example.com"))`,
          output: `hello world visit httpsexamplecom`,
          keyPoints: [
            `Cleaning rules depend on task and domain`,
            `Preserve meaningful punctuation for sentiment`,
            `Handle unicode and encoding issues`,
            `Modern tokenizers often skip manual cleaning`
          ]
        },
        {
          id: `tokenize`,
          title: `Tokenization Strategies`,
          content: `Word-level, subword (BPE, WordPiece, SentencePiece), character-level. Subword balances vocabulary size and OOV handling.`,
          keyPoints: [
            `Word tokenization simple but huge vocabularies`,
            `BPE used in GPT — merges frequent pairs`,
            `WordPiece used in BERT — likelihood-based merges`,
            `SentencePiece language-agnostic tokenization`
          ]
        },
        {
          id: `hf-tokenizer`,
          title: `HuggingFace Tokenizers`,
          content: `AutoTokenizer.from_pretrained("bert-base-uncased"). Returns input_ids, attention_mask. Handles padding and truncation.`,
          example: `from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
encoded = tokenizer("Hello world", return_tensors="pt")
print(encoded["input_ids"].shape)`,
          keyPoints: [
            `Pretrained tokenizers match model vocabularies`,
            `attention_mask ignores padding tokens`,
            `truncation and max_length for fixed input`,
            `Batch encoding with padding=True`
          ]
        },
        {
          id: `vocab`,
          title: `Vocabulary & Special Tokens`,
          content: `[CLS], [SEP], [PAD], [UNK], [MASK]. Vocabulary maps tokens to integer IDs.`,
          keyPoints: [
            `[PAD] token enables batch processing`,
            `Special tokens have semantic roles in models`,
            `Vocab size affects embedding matrix size`,
            `Extend vocab for domain-specific tokens`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-nlp-1`,
          question: `Lowercase and strip punctuation from "Hello, NLP!".`,
          solution: `import re
t = "Hello, NLP!".lower()
print(re.sub(r"[^a-z0-9\\s]", "", t))`,
          difficulty: `easy`
        },
        {
          id: `ex-nlp-2`,
          question: `Split "machine learning is fun" into words.`,
          solution: `print("machine learning is fun".split())`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-17`,
      references: [
        {
          id: `stanford-cs224n`,
          title: `Stanford CS224N — NLP with Deep Learning`,
          source: `Stanford CS224N`,
          type: `course`,
          url: `http://web.stanford.edu/class/cs224n/`,
          description: `Premier NLP course covering embeddings, RNNs, transformers, and LLMs.`
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
          id: `spacy-ner`,
          title: `spaCy NER Documentation`,
          source: `spaCy`,
          type: `documentation`,
          url: `https://spacy.io/usage/linguistic-features#named-entities`,
          description: `Production-ready named entity recognition pipeline and custom training.`
        },
        {
          id: `kaggle-python`,
          title: `Kaggle Learn — Python`,
          source: `Kaggle`,
          type: `course`,
          url: `https://www.kaggle.com/learn/python`,
          description: `Interactive micro-course covering Python essentials for data science.`
        }
      ]
    },
{
      id: `nlp-embeddings`,
      title: `Word Embeddings (Word2Vec, GloVe)`,
      description: `Dense vector representations capturing semantic meaning.`,
      level: `beginner`,
      track: `dl`,
      sections: [
        {
          id: `word2vec`,
          title: `Word2Vec`,
          content: `Skip-gram: predict context from word. CBOW: predict word from context. Similar words have similar vectors.`,
          keyPoints: [
            `Distributional hypothesis: context defines meaning`,
            `Skip-gram better for rare words`,
            `Negative sampling speeds training`,
            `king - man + woman ≈ queen classic example`
          ]
        },
        {
          id: `glove`,
          title: `GloVe`,
          content: `Global Vectors: factorizes co-occurrence matrix. Combines global statistics with local context methods.`,
          keyPoints: [
            `GloVe uses global co-occurrence counts`,
            `Often comparable to Word2Vec quality`,
            `Pretrained GloVe vectors widely available`,
            `Static embeddings — one vector per word regardless of context`
          ]
        },
        {
          id: `nn-embed`,
          title: `nn.Embedding Layer`,
          content: `torch.nn.Embedding(vocab_size, embed_dim). Lookup table learned during training. Padding index for [PAD].`,
          example: `import torch
import torch.nn as nn

embed = nn.Embedding(1000, 128, padding_idx=0)
input_ids = torch.tensor([[1, 5, 3], [2, 0, 0]])
print(embed(input_ids).shape)`,
          output: `torch.Size([2, 3, 128])`,
          keyPoints: [
            `Embedding layer is lookup table of vectors`,
            `Random init then learned via backprop`,
            `Pretrained embeddings can initialize layer`,
            `embed_dim typically 100-768`
          ]
        },
        {
          id: `contextual`,
          title: `Contextual Embeddings`,
          content: `ELMo, BERT produce different vectors per context. "bank" (river) vs "bank" (financial) get different embeddings.`,
          keyPoints: [
            `Static embeddings one vector per word type`,
            `Contextual embeddings depend on sentence`,
            `BERT embeddings revolutionized NLP`,
            `Modern NLP uses contextual embeddings exclusively`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-emb-1`,
          question: `Create Embedding(100, 32) and embed index [1, 5, 3].`,
          solution: `import torch
import torch.nn as nn
e = nn.Embedding(100, 32)
print(e(torch.tensor([1, 5, 3])).shape)`,
          difficulty: `easy`
        },
        {
          id: `ex-emb-2`,
          question: `Explain static vs contextual embeddings in one line.`,
          solution: `print("Static: one vector per word; Contextual: vector depends on surrounding text")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-17`,
      references: [
        {
          id: `word2vec-paper`,
          title: `Efficient Estimation of Word Representations (Word2Vec)`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1300.4546`,
          description: `Skip-gram and CBOW models for dense word embeddings from co-occurrence.`
        },
        {
          id: `glove-paper`,
          title: `GloVe: Global Vectors for Word Representation`,
          source: `Stanford NLP`,
          type: `paper`,
          url: `https://nlp.stanford.edu/pubs/glove.pdf`,
          description: `Combines global matrix factorization with local context window methods.`
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
          id: `huggingface-nlp-course`,
          title: `Hugging Face NLP Course`,
          source: `Hugging Face`,
          type: `course`,
          url: `https://huggingface.co/learn/nlp-course/chapter1/1`,
          description: `Hands-on transformers course using the Hugging Face ecosystem.`
        }
      ]
    },
{
      id: `nlp-rnn`,
      title: `RNNs & LSTMs`,
      description: `Recurrent networks for sequential data processing.`,
      level: `beginner`,
      track: `dl`,
      sections: [
        {
          id: `rnn`,
          title: `Vanilla RNN`,
          content: `Hidden state h_t = tanh(W_h h_{t-1} + W_x x_t). Processes sequences step by step. Vanishing gradient limits long sequences.`,
          example: `import torch
import torch.nn as nn

rnn = nn.RNN(input_size=10, hidden_size=20, batch_first=True)
x = torch.randn(4, 15, 10)  # batch, seq_len, features
out, h_n = rnn(x)
print(out.shape, h_n.shape)`,
          output: `torch.Size([4, 15, 20]) torch.Size([1, 4, 20])`,
          keyPoints: [
            `batch_first=True for intuitive dimensions`,
            `out contains all hidden states`,
            `h_n is final hidden state`,
            `Vanilla RNN rarely used — LSTM/GRU preferred`
          ]
        },
        {
          id: `lstm`,
          title: `LSTM`,
          content: `Long Short-Term Memory: cell state + gates (forget, input, output). Solves vanishing gradient for longer sequences.`,
          example: `import torch
import torch.nn as nn

lstm = nn.LSTM(input_size=10, hidden_size=32, num_layers=2, batch_first=True, dropout=0.2)
x = torch.randn(4, 20, 10)
out, (h, c) = lstm(x)
print(out.shape)`,
          output: `torch.Size([4, 20, 32])`,
          keyPoints: [
            `Cell state carries long-term memory`,
            `Gates control information flow`,
            `num_layers stacks LSTM layers`,
            `dropout between LSTM layers when num_layers > 1`
          ]
        },
        {
          id: `gru`,
          title: `GRU`,
          content: `Gated Recurrent Unit: simplified LSTM with 2 gates. Fewer parameters, often comparable performance.`,
          keyPoints: [
            `GRU merges cell and hidden state`,
            `Fewer parameters than LSTM`,
            `Often preferred when compute limited`,
            `Try both — dataset dependent performance`
          ]
        },
        {
          id: `bidirectional`,
          title: `Bidirectional RNNs`,
          content: `Process sequence forward and backward. Concatenate outputs. Captures past and future context.`,
          example: `import torch.nn as nn

bilstm = nn.LSTM(10, 16, batch_first=True, bidirectional=True)
out, _ = bilstm(torch.randn(2, 5, 10))
print(out.shape)  # hidden dim doubled`,
          output: `torch.Size([2, 5, 32])`,
          keyPoints: [
            `Output dimension doubles with bidirectional`,
            `Not suitable for autoregressive generation`,
            `Standard for sequence classification`,
            `pack_padded_sequence for variable length`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-rnn-1`,
          question: `Create LSTM input=8, hidden=16, batch_first, print output shape for seq=10.`,
          solution: `import torch
import torch.nn as nn
out, _ = nn.LSTM(8, 16, batch_first=True)(torch.randn(2, 10, 8))
print(out.shape)`,
          difficulty: `easy`
        },
        {
          id: `ex-rnn-2`,
          question: `Bidirectional LSTM hidden=16 doubles output dim to?`,
          solution: `print(16 * 2)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-17`,
      references: [
        {
          id: `lstm-paper`,
          title: `Long Short-Term Memory`,
          source: `Neural Computation`,
          type: `paper`,
          url: `https://www.bioinf.jku.at/publications/older/2604.pdf`,
          description: `Gated recurrent architecture solving vanishing gradient in long sequences.`
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
          id: `goodfellow-dl-book`,
          title: `Deep Learning`,
          source: `MIT Press`,
          type: `book`,
          url: `https://www.deeplearningbook.org/`,
          description: `Comprehensive free textbook covering neural networks, optimization, and architectures.`
        },
        {
          id: `huggingface-nlp-course`,
          title: `Hugging Face NLP Course`,
          source: `Hugging Face`,
          type: `course`,
          url: `https://huggingface.co/learn/nlp-course/chapter1/1`,
          description: `Hands-on transformers course using the Hugging Face ecosystem.`
        }
      ]
    },
{
      id: `nlp-seq2seq`,
      title: `Seq2Seq & Attention Preview`,
      description: `Encoder-decoder architecture for translation and summarization.`,
      level: `beginner`,
      track: `dl`,
      sections: [
        {
          id: `seq2seq`,
          title: `Encoder-Decoder`,
          content: `Encoder RNN compresses input to context vector. Decoder RNN generates output sequence. Bottleneck problem with long sequences.`,
          pseudoCode: `encoder_hidden = encode(input_sequence)
FOR each output step t:
    decoder_hidden, output_t = decode(decoder_hidden, encoder_hidden)`,
          keyPoints: [
            `Context vector bottlenecks information`,
            `Teacher forcing: feed gold previous token during training`,
            `BLEU score for translation quality`,
            `Attention solves bottleneck — see next module`
          ]
        },
        {
          id: `teacher`,
          title: `Teacher Forcing`,
          content: `During training, feed ground truth previous token as decoder input. At inference, feed model own prediction.`,
          keyPoints: [
            `Teacher forcing speeds convergence`,
            `Exposure bias: train/inference mismatch`,
            `Scheduled sampling gradually uses model predictions`,
            `Beam search for better inference decoding`
          ]
        },
        {
          id: `beam`,
          title: `Beam Search Decoding`,
          content: `Keep top-k partial sequences at each step. Balance exploration vs greedy decoding. beam_width typically 4-8.`,
          keyPoints: [
            `Greedy decoding may miss global optimum`,
            `Beam search explores multiple hypotheses`,
            `Larger beam improves quality but slower`,
            `Length normalization prevents short outputs`
          ]
        },
        {
          id: `apps`,
          title: `Seq2Seq Applications`,
          content: `Machine translation, text summarization, chatbots, code generation. Mostly replaced by transformers but conceptually important.`,
          keyPoints: [
            `Transformers dominate seq2seq tasks now`,
            `Understanding seq2seq helps understand attention`,
            `Encoder-decoder pattern persists in T5, BART`,
            `Autoregressive generation core of LLMs`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-s2s-1`,
          question: `Explain encoder-decoder bottleneck in one sentence.`,
          solution: `print("Single context vector must encode entire input sequence")`,
          difficulty: `easy`
        },
        {
          id: `ex-s2s-2`,
          question: `Teacher forcing uses ___ tokens during training.`,
          solution: `print("ground truth")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-17`,
      references: [
        {
          id: `seq2seq-attention-paper`,
          title: `Neural Machine Translation by Jointly Learning to Align and Attend`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1409.0473`,
          description: `Introduced attention mechanism for encoder-decoder sequence models.`
        },
        {
          id: `attention-paper`,
          title: `Attention Is All You Need`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1706.03762`,
          description: `Transformer architecture paper that revolutionized NLP and beyond.`
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
          id: `huggingface-nlp-course`,
          title: `Hugging Face NLP Course`,
          source: `Hugging Face`,
          type: `course`,
          url: `https://huggingface.co/learn/nlp-course/chapter1/1`,
          description: `Hands-on transformers course using the Hugging Face ecosystem.`
        }
      ]
    },
{
      id: `nlp-ner`,
      title: `Named Entity Recognition`,
      description: `Token-level sequence labeling for entity extraction.`,
      level: `beginner`,
      track: `dl`,
      sections: [
        {
          id: `ner-task`,
          title: `NER Task Definition`,
          content: `Identify and classify entities: PERSON, ORG, LOC, DATE. BIO tagging: B-PER (begin), I-PER (inside), O (outside).`,
          example: `# BIO tags for "John works at Google"
# John: B-PER, works: O, at: O, Google: B-ORG
sentence = ["John", "works", "at", "Google"]
tags = ["B-PER", "O", "O", "B-ORG"]
print(list(zip(sentence, tags)))`,
          keyPoints: [
            `BIO/BIOES tagging schemes standard`,
            `Token-level classification with sequence context`,
            `CRF layer enforces valid tag transitions`,
            `spaCy provides production NER pipelines`
          ]
        },
        {
          id: `bi-lstm`,
          title: `BiLSTM-CRF`,
          content: `Classic NER architecture: embeddings → BiLSTM → CRF. CRF learns transition constraints between tags.`,
          keyPoints: [
            `CRF prevents invalid tag sequences`,
            `BiLSTM captures context from both directions`,
            `Superseded by BERT fine-tuning for NER`,
            `Still useful for low-resource languages`
          ]
        },
        {
          id: `bert-ner`,
          title: `BERT for NER`,
          content: `Fine-tune BERT with token classification head. Align subword tokens to labels. State-of-the-art on CoNLL benchmarks.`,
          keyPoints: [
            `Fine-tune pretrained BERT on labeled NER data`,
            `Handle subword tokenization alignment`,
            `HuggingFace token-classification pipeline`,
            `Few-shot NER with LLM prompting emerging`
          ]
        },
        {
          id: `applications`,
          title: `NER Applications`,
          content: `Information extraction, knowledge graphs, document understanding, clinical NLP (entity: drug, disease).`,
          keyPoints: [
            `Build knowledge graphs from extracted entities`,
            `PII detection is privacy-focused NER`,
            `Clinical NER requires domain-specific models`,
            `Combine NER with relation extraction`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-ner-1`,
          question: `BIO tag the name in "Alice went home".`,
          solution: `words = ["Alice", "went", "home"]
tags = ["B-PER", "O", "O"]
print(list(zip(words, tags)))`,
          difficulty: `easy`
        },
        {
          id: `ex-ner-2`,
          question: `List 3 common NER entity types.`,
          solution: `print(["PERSON", "ORG", "LOC"])`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 25,
      module: `module-17`,
      references: [
        {
          id: `spacy-ner`,
          title: `spaCy NER Documentation`,
          source: `spaCy`,
          type: `documentation`,
          url: `https://spacy.io/usage/linguistic-features#named-entities`,
          description: `Production-ready named entity recognition pipeline and custom training.`
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
          id: `huggingface-nlp-course`,
          title: `Hugging Face NLP Course`,
          source: `Hugging Face`,
          type: `course`,
          url: `https://huggingface.co/learn/nlp-course/chapter1/1`,
          description: `Hands-on transformers course using the Hugging Face ecosystem.`
        },
        {
          id: `transformers-docs`,
          title: `Hugging Face Transformers Documentation`,
          source: `Hugging Face`,
          type: `documentation`,
          url: `https://huggingface.co/docs/transformers/index`,
          description: `Library for BERT, GPT, T5, and thousands of pretrained transformer models.`
        }
      ]
    }
];
