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
          content: `Lowercase, remove punctuation, handle URLs/emojis, normalize whitespace. Domain-specific rules matter.

**Why this matters for Text Preprocessing & Tokenization:** Deep learning builds on the mathematical intuition taught in CS230 and fast.ai. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Text Preprocessing & Tokenization:** Deep learning trades interpretability for representational power—success requires careful training dynamics and data scaling. The section "Text Cleaning" connects to prepare raw text for neural network input. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Neural networks compose linear maps with nonlinearities; backpropagation computes gradients via the chain rule. Initialization, normalization, and learning-rate schedules stabilize optimization in hig…`,
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
          content: `Word-level, subword (BPE, WordPiece, SentencePiece), character-level. Subword balances vocabulary size and OOV handling.

**Why this matters for Text Preprocessing & Tokenization:** Deep learning builds on the mathematical intuition taught in CS230 and fast.ai. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Text Preprocessing & Tokenization:** Deep learning trades interpretability for representational power—success requires careful training dynamics and data scaling. The section "Tokenization Strategies" connects to prepare raw text for neural network input. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Neural networks compose linear maps with nonlinearities; backpropagation computes gradients via the chain rule. Initialization, normalization, and learning-rate schedules stabilize optimization in hig…`,
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
          content: `AutoTokenizer.from_pretrained("bert-base-uncased"). Returns input_ids, attention_mask. Handles padding and truncation.

**Why this matters for Text Preprocessing & Tokenization:** Deep learning builds on the mathematical intuition taught in CS230 and fast.ai. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Text Preprocessing & Tokenization:** Deep learning trades interpretability for representational power—success requires careful training dynamics and data scaling. The section "HuggingFace Tokenizers" connects to prepare raw text for neural network input. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Neural networks compose linear maps with nonlinearities; backpropagation computes gradients via the chain rule. Initialization, normalization, and learning-rate schedules stabilize optimization in hig…`,
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
          content: `[CLS], [SEP], [PAD], [UNK], [MASK]. Vocabulary maps tokens to integer IDs.

**Why this matters for Text Preprocessing & Tokenization:** Deep learning builds on the mathematical intuition taught in CS230 and fast.ai. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Text Preprocessing & Tokenization:** Deep learning trades interpretability for representational power—success requires careful training dynamics and data scaling. The section "Vocabulary & Special Tokens" connects to prepare raw text for neural network input. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Neural networks compose linear maps with nonlinearities; backpropagation computes gradients via the chain rule. Initialization, normalization, and learning-rate schedules stabilize optimization in hig…`,
          keyPoints: [
            `[PAD] token enables batch processing`,
            `Special tokens have semantic roles in models`,
            `Vocab size affects embedding matrix size`,
            `Extend vocab for domain-specific tokens`
          ]
        },
        {
          id: `nlp-preprocess-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Text Preprocessing & Tokenization sits in the **dl** track of the DL_Master curriculum. Prepare raw text for neural network input.

Neural networks compose linear maps with nonlinearities; backpropagation computes gradients via the chain rule. Initialization, normalization, and learning-rate schedules stabilize optimization in high dimensions.

For nlp-preprocess, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Text Preprocessing & Tokenization
meta = {"topic_id": "nlp-preprocess", "track": "dl", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `nlp-preprocess dl beginner`,
          keyPoints: [
            `Core theory of Text Preprocessing & Tokenization ties to the dl track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `nlp-preprocess-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Text Preprocessing & Tokenization. Use transfer learning when data is limited, mixed precision on GPUs, gradient clipping for RNNs/transformers, early stopping on validation loss, and checkpoint averaging for robustness.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For nlp-preprocess, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for nlp-preprocess
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("nlp-preprocess", "Text Preprocessing & Tokenization")
print(ref.topic_id, ref.title.split()[0])`,
          output: `nlp-preprocess Text`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with dl ecosystem conventions`
          ]
        },
        {
          id: `nlp-preprocess-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Text Preprocessing & Tokenization often hit predictable walls. BatchNorm train/eval mismatch, exploding/vanishing gradients, label noise amplified by memorization, and evaluation on IID splits that hide temporal drift are classic traps.

When stuck on nlp-preprocess, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("nlp-preprocess", "Text Preprocessing & Tokenization")
debug_step("section_count", 4)`,
          output: `[nlp-preprocess] 'Text Preprocessing & Tokenization' (str)
[section_count] 4`,
          keyPoints: [
            `Reduce to the smallest failing example`,
            `Log intermediate values with types`,
            `Bisect changes with git or notebook history`,
            `Separate data bugs from logic bugs`,
            `Record seeds, versions, and hardware context`,
            `Fix root cause—not symptoms with silent catches`
          ]
        },
        {
          id: `nlp-preprocess-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Text Preprocessing & Tokenization shows up wherever dl skills meet business constraints. Vision, speech, and language products fine-tune pretrained backbones, export ONNX/TorchScript, and serve with batching and GPU autoscaling behind latency SLOs.

Teams shipping features around nlp-preprocess align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Text Preprocessing & Tokenization
skills = ["dl", "beginner", "nlp-preprocess"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: dl, beginner, nlp-preprocess`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Text Preprocessing & Tokenization to adjacent topics in the same track`
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
      estimatedMinutes: 40,
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
          content: `Skip-gram: predict context from word. CBOW: predict word from context. Similar words have similar vectors.

**Why this matters for Word Embeddings (Word2Vec, GloVe):** Deep learning builds on the mathematical intuition taught in CS230 and fast.ai. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Word Embeddings (Word2Vec, GloVe):** Deep learning trades interpretability for representational power—success requires careful training dynamics and data scaling. The section "Word2Vec" connects to dense vector representations capturing semantic meaning. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Neural networks compose linear maps with nonlinearities; backpropagation computes gradients via the chain rule. Initialization, normalization, and learning-rate schedules stabilize optimization in hig…`,
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
          content: `Global Vectors: factorizes co-occurrence matrix. Combines global statistics with local context methods.

**Why this matters for Word Embeddings (Word2Vec, GloVe):** Deep learning builds on the mathematical intuition taught in CS230 and fast.ai. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Word Embeddings (Word2Vec, GloVe):** Deep learning trades interpretability for representational power—success requires careful training dynamics and data scaling. The section "GloVe" connects to dense vector representations capturing semantic meaning. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Neural networks compose linear maps with nonlinearities; backpropagation computes gradients via the chain rule. Initialization, normalization, and learning-rate schedules stabilize optimization in hig…`,
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
          content: `torch.nn.Embedding(vocab_size, embed_dim). Lookup table learned during training. Padding index for [PAD].

**Why this matters for Word Embeddings (Word2Vec, GloVe):** Deep learning builds on the mathematical intuition taught in CS230 and fast.ai. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Word Embeddings (Word2Vec, GloVe):** Deep learning trades interpretability for representational power—success requires careful training dynamics and data scaling. The section "nn.Embedding Layer" connects to dense vector representations capturing semantic meaning. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Neural networks compose linear maps with nonlinearities; backpropagation computes gradients via the chain rule. Initialization, normalization, and learning-rate schedules stabilize optimization in hig…`,
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
          content: `ELMo, BERT produce different vectors per context. "bank" (river) vs "bank" (financial) get different embeddings.

**Why this matters for Word Embeddings (Word2Vec, GloVe):** Deep learning builds on the mathematical intuition taught in CS230 and fast.ai. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Word Embeddings (Word2Vec, GloVe):** Deep learning trades interpretability for representational power—success requires careful training dynamics and data scaling. The section "Contextual Embeddings" connects to dense vector representations capturing semantic meaning. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Neural networks compose linear maps with nonlinearities; backpropagation computes gradients via the chain rule. Initialization, normalization, and learning-rate schedules stabilize optimization in hig…`,
          keyPoints: [
            `Static embeddings one vector per word type`,
            `Contextual embeddings depend on sentence`,
            `BERT embeddings revolutionized NLP`,
            `Modern NLP uses contextual embeddings exclusively`
          ]
        },
        {
          id: `nlp-embeddings-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Word Embeddings (Word2Vec, GloVe) sits in the **dl** track of the DL_Master curriculum. Dense vector representations capturing semantic meaning.

Neural networks compose linear maps with nonlinearities; backpropagation computes gradients via the chain rule. Initialization, normalization, and learning-rate schedules stabilize optimization in high dimensions.

For nlp-embeddings, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Word Embeddings (Word2Vec, GloVe)
meta = {"topic_id": "nlp-embeddings", "track": "dl", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `nlp-embeddings dl beginner`,
          keyPoints: [
            `Core theory of Word Embeddings (Word2Vec, GloVe) ties to the dl track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `nlp-embeddings-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Word Embeddings (Word2Vec, GloVe). Use transfer learning when data is limited, mixed precision on GPUs, gradient clipping for RNNs/transformers, early stopping on validation loss, and checkpoint averaging for robustness.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For nlp-embeddings, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for nlp-embeddings
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("nlp-embeddings", "Word Embeddings (Word2Vec, GloVe)")
print(ref.topic_id, ref.title.split()[0])`,
          output: `nlp-embeddings Word`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with dl ecosystem conventions`
          ]
        },
        {
          id: `nlp-embeddings-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Word Embeddings (Word2Vec, GloVe) often hit predictable walls. BatchNorm train/eval mismatch, exploding/vanishing gradients, label noise amplified by memorization, and evaluation on IID splits that hide temporal drift are classic traps.

When stuck on nlp-embeddings, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("nlp-embeddings", "Word Embeddings (Word2Vec, GloVe)")
debug_step("section_count", 4)`,
          output: `[nlp-embeddings] 'Word Embeddings (Word2Vec, GloVe)' (str)
[section_count] 4`,
          keyPoints: [
            `Reduce to the smallest failing example`,
            `Log intermediate values with types`,
            `Bisect changes with git or notebook history`,
            `Separate data bugs from logic bugs`,
            `Record seeds, versions, and hardware context`,
            `Fix root cause—not symptoms with silent catches`
          ]
        },
        {
          id: `nlp-embeddings-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Word Embeddings (Word2Vec, GloVe) shows up wherever dl skills meet business constraints. Vision, speech, and language products fine-tune pretrained backbones, export ONNX/TorchScript, and serve with batching and GPU autoscaling behind latency SLOs.

Teams shipping features around nlp-embeddings align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Word Embeddings (Word2Vec, GloVe)
skills = ["dl", "beginner", "nlp-embeddings"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: dl, beginner, nlp-embeddings`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Word Embeddings (Word2Vec, GloVe) to adjacent topics in the same track`
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
      estimatedMinutes: 40,
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
          content: `Hidden state h_t = tanh(W_h h_{t-1} + W_x x_t). Processes sequences step by step. Vanishing gradient limits long sequences.

**Why this matters for RNNs & LSTMs:** Deep learning builds on the mathematical intuition taught in CS230 and fast.ai. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — RNNs & LSTMs:** Deep learning trades interpretability for representational power—success requires careful training dynamics and data scaling. The section "Vanilla RNN" connects to recurrent networks for sequential data processing. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Neural networks compose linear maps with nonlinearities; backpropagation computes gradients via the chain rule. Initialization, normalization, and learning-rate schedules stabilize optimization in hig…`,
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
          content: `Long Short-Term Memory: cell state + gates (forget, input, output). Solves vanishing gradient for longer sequences.

**Why this matters for RNNs & LSTMs:** Deep learning builds on the mathematical intuition taught in CS230 and fast.ai. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — RNNs & LSTMs:** Deep learning trades interpretability for representational power—success requires careful training dynamics and data scaling. The section "LSTM" connects to recurrent networks for sequential data processing. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Neural networks compose linear maps with nonlinearities; backpropagation computes gradients via the chain rule. Initialization, normalization, and learning-rate schedules stabilize optimization in hig…`,
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
          content: `Gated Recurrent Unit: simplified LSTM with 2 gates. Fewer parameters, often comparable performance.

**Why this matters for RNNs & LSTMs:** Deep learning builds on the mathematical intuition taught in CS230 and fast.ai. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — RNNs & LSTMs:** Deep learning trades interpretability for representational power—success requires careful training dynamics and data scaling. The section "GRU" connects to recurrent networks for sequential data processing. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Neural networks compose linear maps with nonlinearities; backpropagation computes gradients via the chain rule. Initialization, normalization, and learning-rate schedules stabilize optimization in hig…`,
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
          content: `Process sequence forward and backward. Concatenate outputs. Captures past and future context.

**Why this matters for RNNs & LSTMs:** Deep learning builds on the mathematical intuition taught in CS230 and fast.ai. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — RNNs & LSTMs:** Deep learning trades interpretability for representational power—success requires careful training dynamics and data scaling. The section "Bidirectional RNNs" connects to recurrent networks for sequential data processing. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Neural networks compose linear maps with nonlinearities; backpropagation computes gradients via the chain rule. Initialization, normalization, and learning-rate schedules stabilize optimization in hig…`,
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
        },
        {
          id: `nlp-rnn-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

RNNs & LSTMs sits in the **dl** track of the DL_Master curriculum. Recurrent networks for sequential data processing.

Neural networks compose linear maps with nonlinearities; backpropagation computes gradients via the chain rule. Initialization, normalization, and learning-rate schedules stabilize optimization in high dimensions.

For nlp-rnn, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for RNNs & LSTMs
meta = {"topic_id": "nlp-rnn", "track": "dl", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `nlp-rnn dl beginner`,
          keyPoints: [
            `Core theory of RNNs & LSTMs ties to the dl track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `nlp-rnn-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from RNNs & LSTMs. Use transfer learning when data is limited, mixed precision on GPUs, gradient clipping for RNNs/transformers, early stopping on validation loss, and checkpoint averaging for robustness.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For nlp-rnn, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for nlp-rnn
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("nlp-rnn", "RNNs & LSTMs")
print(ref.topic_id, ref.title.split()[0])`,
          output: `nlp-rnn RNNs`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with dl ecosystem conventions`
          ]
        },
        {
          id: `nlp-rnn-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on RNNs & LSTMs often hit predictable walls. BatchNorm train/eval mismatch, exploding/vanishing gradients, label noise amplified by memorization, and evaluation on IID splits that hide temporal drift are classic traps.

When stuck on nlp-rnn, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("nlp-rnn", "RNNs & LSTMs")
debug_step("section_count", 4)`,
          output: `[nlp-rnn] 'RNNs & LSTMs' (str)
[section_count] 4`,
          keyPoints: [
            `Reduce to the smallest failing example`,
            `Log intermediate values with types`,
            `Bisect changes with git or notebook history`,
            `Separate data bugs from logic bugs`,
            `Record seeds, versions, and hardware context`,
            `Fix root cause—not symptoms with silent catches`
          ]
        },
        {
          id: `nlp-rnn-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

RNNs & LSTMs shows up wherever dl skills meet business constraints. Vision, speech, and language products fine-tune pretrained backbones, export ONNX/TorchScript, and serve with batching and GPU autoscaling behind latency SLOs.

Teams shipping features around nlp-rnn align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for RNNs & LSTMs
skills = ["dl", "beginner", "nlp-rnn"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: dl, beginner, nlp-rnn`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect RNNs & LSTMs to adjacent topics in the same track`
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
      estimatedMinutes: 40,
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
          content: `Encoder RNN compresses input to context vector. Decoder RNN generates output sequence. Bottleneck problem with long sequences.

**Why this matters for Seq2Seq & Attention Preview:** Deep learning builds on the mathematical intuition taught in CS230 and fast.ai. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Seq2Seq & Attention Preview:** Deep learning trades interpretability for representational power—success requires careful training dynamics and data scaling. The section "Encoder-Decoder" connects to encoder-decoder architecture for translation and summarization. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Neural networks compose linear maps with nonlinearities; backpropagation computes gradients via the chain rule. Initialization, normalization, and learning-rate schedules stabilize optimization in hig…`,
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
          content: `During training, feed ground truth previous token as decoder input. At inference, feed model own prediction.

**Why this matters for Seq2Seq & Attention Preview:** Deep learning builds on the mathematical intuition taught in CS230 and fast.ai. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Seq2Seq & Attention Preview:** Deep learning trades interpretability for representational power—success requires careful training dynamics and data scaling. The section "Teacher Forcing" connects to encoder-decoder architecture for translation and summarization. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Neural networks compose linear maps with nonlinearities; backpropagation computes gradients via the chain rule. Initialization, normalization, and learning-rate schedules stabilize optimization in hig…`,
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
          content: `Keep top-k partial sequences at each step. Balance exploration vs greedy decoding. beam_width typically 4-8.

**Why this matters for Seq2Seq & Attention Preview:** Deep learning builds on the mathematical intuition taught in CS230 and fast.ai. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Seq2Seq & Attention Preview:** Deep learning trades interpretability for representational power—success requires careful training dynamics and data scaling. The section "Beam Search Decoding" connects to encoder-decoder architecture for translation and summarization. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Neural networks compose linear maps with nonlinearities; backpropagation computes gradients via the chain rule. Initialization, normalization, and learning-rate schedules stabilize optimization in hig…`,
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
          content: `Machine translation, text summarization, chatbots, code generation. Mostly replaced by transformers but conceptually important.

**Why this matters for Seq2Seq & Attention Preview:** Deep learning builds on the mathematical intuition taught in CS230 and fast.ai. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Seq2Seq & Attention Preview:** Deep learning trades interpretability for representational power—success requires careful training dynamics and data scaling. The section "Seq2Seq Applications" connects to encoder-decoder architecture for translation and summarization. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Neural networks compose linear maps with nonlinearities; backpropagation computes gradients via the chain rule. Initialization, normalization, and learning-rate schedules stabilize optimization in hig…`,
          keyPoints: [
            `Transformers dominate seq2seq tasks now`,
            `Understanding seq2seq helps understand attention`,
            `Encoder-decoder pattern persists in T5, BART`,
            `Autoregressive generation core of LLMs`
          ]
        },
        {
          id: `nlp-seq2seq-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Seq2Seq & Attention Preview sits in the **dl** track of the DL_Master curriculum. Encoder-decoder architecture for translation and summarization.

Neural networks compose linear maps with nonlinearities; backpropagation computes gradients via the chain rule. Initialization, normalization, and learning-rate schedules stabilize optimization in high dimensions.

For nlp-seq2seq, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Seq2Seq & Attention Preview
meta = {"topic_id": "nlp-seq2seq", "track": "dl", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `nlp-seq2seq dl beginner`,
          keyPoints: [
            `Core theory of Seq2Seq & Attention Preview ties to the dl track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `nlp-seq2seq-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Seq2Seq & Attention Preview. Use transfer learning when data is limited, mixed precision on GPUs, gradient clipping for RNNs/transformers, early stopping on validation loss, and checkpoint averaging for robustness.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For nlp-seq2seq, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for nlp-seq2seq
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("nlp-seq2seq", "Seq2Seq & Attention Preview")
print(ref.topic_id, ref.title.split()[0])`,
          output: `nlp-seq2seq Seq2Seq`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with dl ecosystem conventions`
          ]
        },
        {
          id: `nlp-seq2seq-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Seq2Seq & Attention Preview often hit predictable walls. BatchNorm train/eval mismatch, exploding/vanishing gradients, label noise amplified by memorization, and evaluation on IID splits that hide temporal drift are classic traps.

When stuck on nlp-seq2seq, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("nlp-seq2seq", "Seq2Seq & Attention Preview")
debug_step("section_count", 4)`,
          output: `[nlp-seq2seq] 'Seq2Seq & Attention Preview' (str)
[section_count] 4`,
          keyPoints: [
            `Reduce to the smallest failing example`,
            `Log intermediate values with types`,
            `Bisect changes with git or notebook history`,
            `Separate data bugs from logic bugs`,
            `Record seeds, versions, and hardware context`,
            `Fix root cause—not symptoms with silent catches`
          ]
        },
        {
          id: `nlp-seq2seq-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Seq2Seq & Attention Preview shows up wherever dl skills meet business constraints. Vision, speech, and language products fine-tune pretrained backbones, export ONNX/TorchScript, and serve with batching and GPU autoscaling behind latency SLOs.

Teams shipping features around nlp-seq2seq align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Seq2Seq & Attention Preview
skills = ["dl", "beginner", "nlp-seq2seq"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: dl, beginner, nlp-seq2seq`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Seq2Seq & Attention Preview to adjacent topics in the same track`
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
      estimatedMinutes: 40,
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
          content: `Identify and classify entities: PERSON, ORG, LOC, DATE. BIO tagging: B-PER (begin), I-PER (inside), O (outside).

**Why this matters for Named Entity Recognition:** Deep learning builds on the mathematical intuition taught in CS230 and fast.ai. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Named Entity Recognition:** Deep learning trades interpretability for representational power—success requires careful training dynamics and data scaling. The section "NER Task Definition" connects to token-level sequence labeling for entity extraction. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Neural networks compose linear maps with nonlinearities; backpropagation computes gradients via the chain rule. Initialization, normalization, and learning-rate schedules stabilize optimization in hig…`,
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
          content: `Classic NER architecture: embeddings → BiLSTM → CRF. CRF learns transition constraints between tags.

**Why this matters for Named Entity Recognition:** Deep learning builds on the mathematical intuition taught in CS230 and fast.ai. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Named Entity Recognition:** Deep learning trades interpretability for representational power—success requires careful training dynamics and data scaling. The section "BiLSTM-CRF" connects to token-level sequence labeling for entity extraction. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Neural networks compose linear maps with nonlinearities; backpropagation computes gradients via the chain rule. Initialization, normalization, and learning-rate schedules stabilize optimization in hig…`,
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
          content: `Fine-tune BERT with token classification head. Align subword tokens to labels. State-of-the-art on CoNLL benchmarks.

**Why this matters for Named Entity Recognition:** Deep learning builds on the mathematical intuition taught in CS230 and fast.ai. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Named Entity Recognition:** Deep learning trades interpretability for representational power—success requires careful training dynamics and data scaling. The section "BERT for NER" connects to token-level sequence labeling for entity extraction. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Neural networks compose linear maps with nonlinearities; backpropagation computes gradients via the chain rule. Initialization, normalization, and learning-rate schedules stabilize optimization in hig…`,
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
          content: `Information extraction, knowledge graphs, document understanding, clinical NLP (entity: drug, disease).

**Why this matters for Named Entity Recognition:** Deep learning builds on the mathematical intuition taught in CS230 and fast.ai. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Named Entity Recognition:** Deep learning trades interpretability for representational power—success requires careful training dynamics and data scaling. The section "NER Applications" connects to token-level sequence labeling for entity extraction. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. Neural networks compose linear maps with nonlinearities; backpropagation computes gradients via the chain rule. Initialization, normalization, and learning-rate schedules stabilize optimization in hig…`,
          keyPoints: [
            `Build knowledge graphs from extracted entities`,
            `PII detection is privacy-focused NER`,
            `Clinical NER requires domain-specific models`,
            `Combine NER with relation extraction`
          ]
        },
        {
          id: `nlp-ner-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Named Entity Recognition sits in the **dl** track of the DL_Master curriculum. Token-level sequence labeling for entity extraction.

Neural networks compose linear maps with nonlinearities; backpropagation computes gradients via the chain rule. Initialization, normalization, and learning-rate schedules stabilize optimization in high dimensions.

For nlp-ner, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (beginner):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Named Entity Recognition
meta = {"topic_id": "nlp-ner", "track": "dl", "level": "beginner"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `nlp-ner dl beginner`,
          keyPoints: [
            `Core theory of Named Entity Recognition ties to the dl track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `nlp-ner-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Named Entity Recognition. Use transfer learning when data is limited, mixed precision on GPUs, gradient clipping for RNNs/transformers, early stopping on validation loss, and checkpoint averaging for robustness.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For nlp-ner, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for nlp-ner
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("nlp-ner", "Named Entity Recognition")
print(ref.topic_id, ref.title.split()[0])`,
          output: `nlp-ner Named`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with dl ecosystem conventions`
          ]
        },
        {
          id: `nlp-ner-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Named Entity Recognition often hit predictable walls. BatchNorm train/eval mismatch, exploding/vanishing gradients, label noise amplified by memorization, and evaluation on IID splits that hide temporal drift are classic traps.

When stuck on nlp-ner, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("nlp-ner", "Named Entity Recognition")
debug_step("section_count", 4)`,
          output: `[nlp-ner] 'Named Entity Recognition' (str)
[section_count] 4`,
          keyPoints: [
            `Reduce to the smallest failing example`,
            `Log intermediate values with types`,
            `Bisect changes with git or notebook history`,
            `Separate data bugs from logic bugs`,
            `Record seeds, versions, and hardware context`,
            `Fix root cause—not symptoms with silent catches`
          ]
        },
        {
          id: `nlp-ner-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Named Entity Recognition shows up wherever dl skills meet business constraints. Vision, speech, and language products fine-tune pretrained backbones, export ONNX/TorchScript, and serve with batching and GPU autoscaling behind latency SLOs.

Teams shipping features around nlp-ner align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Named Entity Recognition
skills = ["dl", "beginner", "nlp-ner"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: dl, beginner, nlp-ner`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Named Entity Recognition to adjacent topics in the same track`
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
      estimatedMinutes: 40,
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
