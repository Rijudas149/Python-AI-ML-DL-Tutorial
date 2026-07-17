import type { Topic } from '../../types';

export const module27Topics: Topic[] = [
{
      id: `ai-vectors`,
      title: `Embeddings & Vector Databases`,
      description: `Semantic search with embeddings and ANN indexes (FAISS, Chroma).`,
      level: `advanced`,
      track: `ai`,
      sections: [
        {
          id: `embeddings`,
          title: `Text Embeddings`,
          content: `Models map text to dense vectors preserving semantic similarity. **OpenAI text-embedding-3**, **sentence-transformers** (all-MiniLM-L6-v2) popular.

Cosine similarity standard; normalize vectors for dot product equivalence.

**Applying Embeddings & Vector Databases:** Semantic search with embeddings and ANN indexes (FAISS, Chroma). Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Text Embeddings", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          example: `import numpy as np
a = np.array([1.0, 0.0]); b = np.array([0.9, 0.1])
a /= np.linalg.norm(a); b /= np.linalg.norm(b)
print(round(float(a@b), 2))`,
          output: `0.99`,
          keyPoints: [
            `Normalize embeddings for cosine via dot product`,
            `Domain-specific embedding models improve retrieval`,
            `Dimensionality affects storage and speed`,
            `Batch encode for throughput`
          ]
        },
        {
          id: `faiss`,
          title: `FAISS & ANN Search`,
          content: `**FAISS** (Facebook) builds IVF, HNSW, PQ indexes for billion-scale search. Trade recall vs latency via nprobe, efSearch parameters.

**Chroma**, **Pinecone**, **Weaviate** managed vector DBs add metadata filtering and persistence.

**Applying Embeddings & Vector Databases:** Semantic search with embeddings and ANN indexes (FAISS, Chroma). Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "FAISS & ANN Search", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `HNSW good default for many workloads`,
            `Product quantization compresses vectors`,
            `Metadata filters pre-filter before ANN`,
            `Rebuild index when embedding model changes`
          ]
        },
        {
          id: `hybrid`,
          title: `Hybrid Search`,
          content: `Combine **BM25** keyword with dense retrieval—handles exact token matches (SKUs, error codes) plus semantic paraphrase.

Reciprocal rank fusion merges ranked lists from multiple retrievers.

**Applying Embeddings & Vector Databases:** Semantic search with embeddings and ANN indexes (FAISS, Chroma). Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Hybrid Search", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Hybrid reduces failure modes of either alone`,
            `RRF simple robust fusion without tuning`,
            `Learned sparse retrieval (SPLADE) middle ground`,
            `Query expansion improves recall`
          ]
        },
        {
          id: `ops`,
          title: `Operational Concerns`,
          content: `Chunk documents, embed, upsert with metadata (source, date). Monitor query latency p95, recall@k on eval set, index size growth.

Version embedding model in index metadata for migrations.

**Applying Embeddings & Vector Databases:** Semantic search with embeddings and ANN indexes (FAISS, Chroma). Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Operational Concerns", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Chunk size 256-512 tokens typical starting point`,
            `Stale index when source docs update`,
            `Access control on metadata fields`,
            `Cost scales with dimensions × vectors`
          ]
        },
        {
          id: `ai-vectors-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Embeddings & Vector Databases sits in the **ai** track of the Data Science Master curriculum. Semantic search with embeddings and ANN indexes (FAISS, Chroma).

LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.

Embeddings map discrete tokens or documents into dense vectors where semantic similarity approximates cosine distance. Approximate nearest neighbor (ANN) indexes trade recall for speed at billion scale.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Embeddings & Vector Databases
meta = {"topic_id": "ai-vectors", "track": "ai", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ai-vectors ai advanced`,
          keyPoints: [
            `Core theory of Embeddings & Vector Databases ties to the ai track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `ai-vectors-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Embeddings & Vector Databases. Ground responses with RAG, enforce JSON schemas for tool calls, red-team prompts before launch, log traces for audit, and gate high-risk actions with human approval.

Chunk documents 256–512 tokens with overlap; hybrid search combines BM25 with dense retrieval; re-rank top-k with cross-encoders.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for ai-vectors
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ai-vectors", "Embeddings & Vector Databases")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ai-vectors Embeddings`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with ai ecosystem conventions`
          ]
        },
        {
          id: `ai-vectors-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Embeddings & Vector Databases often hit predictable walls. Prompt injection, hallucinated citations, unbounded agent loops, secret leakage via training data, and fairness gaps across demographics require proactive testing.

Stale embeddings after model updates, wrong distance metric (cosine vs L2), and chunk boundaries splitting critical context.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("ai-vectors", "Embeddings & Vector Databases")
debug_step("section_count", 4)`,
          output: `[ai-vectors] 'Embeddings & Vector Databases' (str)
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
          id: `ai-vectors-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Embeddings & Vector Databases shows up wherever ai skills meet business constraints. Enterprises deploy copilots, search augmentation, and workflow automation with vector databases, observability stacks, and governance aligned to regulations like the EU AI Act.

RAG stacks use Pinecone, Weaviate, FAISS, or Chroma behind enterprise search and support copilots.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Embeddings & Vector Databases
skills = ["ai", "advanced", "ai-vectors"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ai, advanced, ai-vectors`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Embeddings & Vector Databases to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-vec-1`,
          question: `Cosine similarity uses normalized dot ___.`,
          solution: `print("product")`,
          difficulty: `easy`
        },
        {
          id: `ex-vec-2`,
          question: `FAISS builds approximate nearest ___ indexes.`,
          solution: `print("neighbor")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 55,
      module: `module-27`,
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
          id: `attention-paper`,
          title: `Attention Is All You Need`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1706.03762`,
          description: `Transformer architecture paper that revolutionized NLP and beyond.`
        },
        {
          id: `gpt3-paper`,
          title: `Language Models are Few-Shot Learners (GPT-3)`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/2005.14165`,
          description: `Demonstrated emergent few-shot learning at scale with autoregressive LMs.`
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
    },
{
      id: `ai-multimodal`,
      title: `Multimodal Models (CLIP & VLM)`,
      description: `Vision-language models connecting images and text in shared embedding space.`,
      level: `advanced`,
      track: `ai`,
      sections: [
        {
          id: `clip`,
          title: `CLIP Architecture`,
          content: `Contrastive pretraining on (image, text) pairs from web. Image encoder (ViT/ResNet) and text encoder (Transformer) map to shared space; maximize cosine of matching pairs vs negatives in batch.

Zero-shot classification: embed class text prompts and image; pick highest similarity.

**Applying Multimodal Models (CLIP & VLM):** Vision-language models connecting images and text in shared embedding space. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "CLIP Architecture", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Contrastive learning on large noisy web data`,
            `Prompt engineering affects zero-shot accuracy`,
            `ViT variants scale with compute`,
            `OpenCLIP reproduces with open data`
          ]
        },
        {
          id: `vlm`,
          title: `Vision-Language Models`,
          content: `**LLaVA**, **GPT-4V**, **Gemini** fuse visual tokens with language model for captioning, VQA, document understanding.

Project image patches through adapter into LLM token stream.

**Applying Multimodal Models (CLIP & VLM):** Vision-language models connecting images and text in shared embedding space. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Vision-Language Models", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Visual tokens increase context length cost`,
            `OCR and chart reasoning common enterprise uses`,
            `Hallucination on fine visual details persists`,
            `Resolution limits affect small text reading`
          ]
        },
        {
          id: `tasks`,
          title: `Downstream Tasks`,
          content: `Image captioning, visual QA, grounding (point to object), document AI (invoices, forms). **Segment anything (SAM)** pairs with language for open-vocabulary segmentation.

Multimodal RAG embeds images and text jointly in knowledge bases.

**Applying Multimodal Models (CLIP & VLM):** Vision-language models connecting images and text in shared embedding space. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Downstream Tasks", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Grounding links words to bounding boxes`,
            `Doc AI needs layout-aware encoders (LayoutLM)`,
            `Multimodal RAG stores image+text chunks`,
            `Evaluate task-specific not only caption BLEU`
          ]
        },
        {
          id: `limits`,
          title: `Limitations & Bias`,
          content: `Training data biases affect demographic descriptions. Adversarial patches fool classifiers. Synthetic image detection arms race.

Accessibility: alt-text generation must be verified before publishing.

**Applying Multimodal Models (CLIP & VLM):** Vision-language models connecting images and text in shared embedding space. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Limitations & Bias", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Audit gender/race bias in captions`,
            `Adversarial robustness weak vs imperceptible noise`,
            `Watermark detectors imperfect`,
            `Human review for high-stakes descriptions`
          ]
        },
        {
          id: `ai-multimodal-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Multimodal Models (CLIP & VLM) sits in the **ai** track of the Data Science Master curriculum. Vision-language models connecting images and text in shared embedding space.

LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.

For ai-multimodal, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Multimodal Models (CLIP & VLM)
meta = {"topic_id": "ai-multimodal", "track": "ai", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ai-multimodal ai advanced`,
          keyPoints: [
            `Core theory of Multimodal Models (CLIP & VLM) ties to the ai track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `ai-multimodal-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Multimodal Models (CLIP & VLM). Ground responses with RAG, enforce JSON schemas for tool calls, red-team prompts before launch, log traces for audit, and gate high-risk actions with human approval.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ai-multimodal, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for ai-multimodal
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ai-multimodal", "Multimodal Models (CLIP & VLM)")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ai-multimodal Multimodal`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with ai ecosystem conventions`
          ]
        },
        {
          id: `ai-multimodal-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Multimodal Models (CLIP & VLM) often hit predictable walls. Prompt injection, hallucinated citations, unbounded agent loops, secret leakage via training data, and fairness gaps across demographics require proactive testing.

When stuck on ai-multimodal, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("ai-multimodal", "Multimodal Models (CLIP & VLM)")
debug_step("section_count", 4)`,
          output: `[ai-multimodal] 'Multimodal Models (CLIP & VLM)' (str)
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
          id: `ai-multimodal-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Multimodal Models (CLIP & VLM) shows up wherever ai skills meet business constraints. Enterprises deploy copilots, search augmentation, and workflow automation with vector databases, observability stacks, and governance aligned to regulations like the EU AI Act.

Teams shipping features around ai-multimodal align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Multimodal Models (CLIP & VLM)
skills = ["ai", "advanced", "ai-multimodal"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ai, advanced, ai-multimodal`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Multimodal Models (CLIP & VLM) to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-mm-1`,
          question: `CLIP uses ___ learning on image-text pairs.`,
          solution: `print("contrastive")`,
          difficulty: `easy`
        },
        {
          id: `ex-mm-2`,
          question: `Zero-shot CLIP compares image to text ___.`,
          solution: `print("embeddings")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 55,
      module: `module-27`,
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
          id: `attention-paper`,
          title: `Attention Is All You Need`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1706.03762`,
          description: `Transformer architecture paper that revolutionized NLP and beyond.`
        },
        {
          id: `gpt3-paper`,
          title: `Language Models are Few-Shot Learners (GPT-3)`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/2005.14165`,
          description: `Demonstrated emergent few-shot learning at scale with autoregressive LMs.`
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
    },
{
      id: `ai-speech`,
      title: `Speech AI (Whisper & TTS)`,
      description: `Automatic speech recognition and text-to-speech pipelines.`,
      level: `advanced`,
      track: `ai`,
      sections: [
        {
          id: `whisper`,
          title: `Whisper ASR`,
          content: `OpenAI **Whisper** encoder-decoder Transformer trained on weakly supervised multilingual audio. Transcribes and translates; robust accents and noise.

Use \`whisper\` or \`faster-whisper\` for local inference; segment long audio.

**Applying Speech AI (Whisper & TTS):** Automatic speech recognition and text-to-speech pipelines. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Whisper ASR", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Multilingual 99 languages in large models`,
            `Word-level timestamps in some implementations`,
            `Hallucinations on silence or noise-only segments`,
            `VRAM scales with model size (tiny to large)`
          ]
        },
        {
          id: `tts`,
          title: `Text-to-Speech Overview`,
          content: `Pipeline: text normalization → acoustic model → vocoder (WaveNet, HiFi-GAN). **Neural TTS** (Tacotron, VITS) end-to-end variants.

**Voice cloning** requires consent and deepfake safeguards.

**Applying Speech AI (Whisper & TTS):** Automatic speech recognition and text-to-speech pipelines. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Text-to-Speech Overview", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Prosody control via SSML or reference audio`,
            `Real-time TTS needs streaming architectures`,
            `Speaker embedding conditions multi-speaker models`,
            `Evaluate MOS and intelligibility (WER round-trip)`
          ]
        },
        {
          id: `audio-llm`,
          title: `Audio + LLM Integration`,
          content: `Speech-to-text feeds LLM; LLM response to TTS for voice assistants. **Audio tokens** in unified multimodal models (GPT-4o audio).

Latency budget: ASR + LLM + TTS sequential pipeline optimization.

**Applying Speech AI (Whisper & TTS):** Automatic speech recognition and text-to-speech pipelines. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Audio + LLM Integration", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `End-to-end speech LLMs reduce cascade errors`,
            `Partial ASR streaming lowers time-to-first-token`,
            `Barge-in handling needs voice activity detection`,
            `Privacy: on-device ASR for sensitive domains`
          ]
        },
        {
          id: `deploy-speech`,
          title: `Deployment Considerations`,
          content: `16kHz mono common input; noise suppression preprocessing. GPU for batch; CPU quantized models for edge.

Compliance: call recording consent, biometric voice data regulations.

**Applying Speech AI (Whisper & TTS):** Automatic speech recognition and text-to-speech pipelines. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Deployment Considerations", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `VAD reduces wasted ASR compute`,
            `Quantization INT8 for mobile TTS`,
            `Log retention policies for transcripts`,
            `Accent fairness evaluation across demographics`
          ]
        },
        {
          id: `ai-speech-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Speech AI (Whisper & TTS) sits in the **ai** track of the Data Science Master curriculum. Automatic speech recognition and text-to-speech pipelines.

LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.

For ai-speech, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Speech AI (Whisper & TTS)
meta = {"topic_id": "ai-speech", "track": "ai", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ai-speech ai advanced`,
          keyPoints: [
            `Core theory of Speech AI (Whisper & TTS) ties to the ai track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `ai-speech-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Speech AI (Whisper & TTS). Ground responses with RAG, enforce JSON schemas for tool calls, red-team prompts before launch, log traces for audit, and gate high-risk actions with human approval.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ai-speech, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for ai-speech
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ai-speech", "Speech AI (Whisper & TTS)")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ai-speech Speech`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with ai ecosystem conventions`
          ]
        },
        {
          id: `ai-speech-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Speech AI (Whisper & TTS) often hit predictable walls. Prompt injection, hallucinated citations, unbounded agent loops, secret leakage via training data, and fairness gaps across demographics require proactive testing.

When stuck on ai-speech, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("ai-speech", "Speech AI (Whisper & TTS)")
debug_step("section_count", 4)`,
          output: `[ai-speech] 'Speech AI (Whisper & TTS)' (str)
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
          id: `ai-speech-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Speech AI (Whisper & TTS) shows up wherever ai skills meet business constraints. Enterprises deploy copilots, search augmentation, and workflow automation with vector databases, observability stacks, and governance aligned to regulations like the EU AI Act.

Teams shipping features around ai-speech align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Speech AI (Whisper & TTS)
skills = ["ai", "advanced", "ai-speech"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ai, advanced, ai-speech`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Speech AI (Whisper & TTS) to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-speech-1`,
          question: `Whisper performs automatic speech ___.`,
          solution: `print("recognition")`,
          difficulty: `easy`
        },
        {
          id: `ex-speech-2`,
          question: `TTS converts text to ___.`,
          solution: `print("speech")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 50,
      module: `module-27`,
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
          id: `attention-paper`,
          title: `Attention Is All You Need`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1706.03762`,
          description: `Transformer architecture paper that revolutionized NLP and beyond.`
        },
        {
          id: `gpt3-paper`,
          title: `Language Models are Few-Shot Learners (GPT-3)`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/2005.14165`,
          description: `Demonstrated emergent few-shot learning at scale with autoregressive LMs.`
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
    },
{
      id: `ai-eval`,
      title: `AI Benchmarks & Red Teaming`,
      description: `MMLU, HumanEval, and systematic adversarial testing.`,
      level: `advanced`,
      track: `ai`,
      sections: [
        {
          id: `mmlu`,
          title: `MMLU & Knowledge Benchmarks`,
          content: `**MMLU** (Massive Multitask Language Understanding) multiple-choice across 57 subjects tests breadth. **GPQA**, **ARC** science reasoning.

Leaderboard chasing risks overfitting benchmarks—hold out private eval sets.

**Applying AI Benchmarks & Red Teaming:** MMLU, HumanEval, and systematic adversarial testing. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "MMLU & Knowledge Benchmarks", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Multiple-choice format simplifies scoring`,
            `Contamination when benchmark in training data`,
            `Chain-of-thought improves reasoning scores`,
            `Domain-specific evals matter for products`
          ]
        },
        {
          id: `humaneval`,
          title: `HumanEval & Code Benchmarks`,
          content: `**HumanEval** functional correctness on Python programming problems. **MBPP**, **SWE-bench** (real GitHub issues) harder.

Pass@k metric: any of k samples passes tests.

**Applying AI Benchmarks & Red Teaming:** MMLU, HumanEval, and systematic adversarial testing. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "HumanEval & Code Benchmarks", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          example: `def pass_at_k(n, c, k):
    # n problems, c correct, k samples — simplified
    return 1.0 if c > 0 else 0.0
print(pass_at_k(1, 1, 5))`,
          output: `1.0`,
          keyPoints: [
            `Pass@k increases with more samples`,
            `Unit tests must cover edge cases`,
            `SWE-bench tests full repo context`,
            `Code execution sandbox security essential`
          ]
        },
        {
          id: `red-team`,
          title: `Red Teaming LLMs`,
          content: `Adversarial prompts elicit harmful, biased, or policy-violating outputs. **Jailbreaks** override system instructions via roleplay or encoding tricks.

Automated red teaming with attacker LLMs scales coverage; human red team for subtle failures.

**Applying AI Benchmarks & Red Teaming:** MMLU, HumanEval, and systematic adversarial testing. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Red Teaming LLMs", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Prompt injection in RAG poisons context`,
            `Unicode homoglyph attacks bypass filters`,
            `Continuous red teaming as models update`,
            `Document findings in model cards`
          ]
        },
        {
          id: `eval-practice`,
          title: `Evaluation Best Practices`,
          content: `Combine automatic metrics with human eval. Track regression suites in CI for model updates. Slice by language, domain, difficulty.

**LLM-as-judge** correlates with humans but biased toward verbose outputs.

**Applying AI Benchmarks & Red Teaming:** MMLU, HumanEval, and systematic adversarial testing. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Evaluation Best Practices", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Golden set regression on every model release`,
            `Statistical significance on metric deltas`,
            `Calibration eval for classification outputs`,
            `Cost/latency metrics alongside quality`
          ]
        },
        {
          id: `ai-eval-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

AI Benchmarks & Red Teaming sits in the **ai** track of the Data Science Master curriculum. MMLU, HumanEval, and systematic adversarial testing.

LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.

For ai-eval, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for AI Benchmarks & Red Teaming
meta = {"topic_id": "ai-eval", "track": "ai", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ai-eval ai advanced`,
          keyPoints: [
            `Core theory of AI Benchmarks & Red Teaming ties to the ai track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `ai-eval-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from AI Benchmarks & Red Teaming. Ground responses with RAG, enforce JSON schemas for tool calls, red-team prompts before launch, log traces for audit, and gate high-risk actions with human approval.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ai-eval, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for ai-eval
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ai-eval", "AI Benchmarks & Red Teaming")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ai-eval AI`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with ai ecosystem conventions`
          ]
        },
        {
          id: `ai-eval-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on AI Benchmarks & Red Teaming often hit predictable walls. Prompt injection, hallucinated citations, unbounded agent loops, secret leakage via training data, and fairness gaps across demographics require proactive testing.

When stuck on ai-eval, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("ai-eval", "AI Benchmarks & Red Teaming")
debug_step("section_count", 4)`,
          output: `[ai-eval] 'AI Benchmarks & Red Teaming' (str)
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
          id: `ai-eval-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

AI Benchmarks & Red Teaming shows up wherever ai skills meet business constraints. Enterprises deploy copilots, search augmentation, and workflow automation with vector databases, observability stacks, and governance aligned to regulations like the EU AI Act.

Teams shipping features around ai-eval align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for AI Benchmarks & Red Teaming
skills = ["ai", "advanced", "ai-eval"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ai, advanced, ai-eval`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect AI Benchmarks & Red Teaming to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-aieval-1`,
          question: `HumanEval tests ___ generation.`,
          solution: `print("code")`,
          difficulty: `easy`
        },
        {
          id: `ex-aieval-2`,
          question: `MMLU uses multiple-___ questions.`,
          solution: `print("choice")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 55,
      module: `module-27`,
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
          id: `attention-paper`,
          title: `Attention Is All You Need`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1706.03762`,
          description: `Transformer architecture paper that revolutionized NLP and beyond.`
        },
        {
          id: `gpt3-paper`,
          title: `Language Models are Few-Shot Learners (GPT-3)`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/2005.14165`,
          description: `Demonstrated emergent few-shot learning at scale with autoregressive LMs.`
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
    },
{
      id: `ai-safety`,
      title: `Alignment, Jailbreaks & Guardrails`,
      description: `Mitigate harmful outputs and build responsible AI systems.`,
      level: `advanced`,
      track: `ai`,
      sections: [
        {
          id: `alignment`,
          title: `Alignment Overview`,
          content: `**RLHF** and **DPO** align models with human preferences—helpful, honest, harmless. **Constitutional AI** self-critiques against principles.

Alignment reduces but does not eliminate all failure modes.

**Applying Alignment, Jailbreaks & Guardrails:** Mitigate harmful outputs and build responsible AI systems. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Alignment Overview", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Reward hacking when proxy rewards misaligned`,
            `DPO simpler pipeline than full RLHF`,
            `Constitutional principles need domain tailoring`,
            `Superhuman models may be hard to align`
          ]
        },
        {
          id: `jailbreaks`,
          title: `Jailbreaks & Prompt Injection`,
          content: `Attacks: DAN prompts, base64 encoding, multi-turn gradual escalation, indirect injection via retrieved documents.

Defenses: input/output filters, Llama Guard classifiers, structured prompts isolating user content.

**Applying Alignment, Jailbreaks & Guardrails:** Mitigate harmful outputs and build responsible AI systems. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Jailbreaks & Prompt Injection", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Defense in depth—no single filter sufficient`,
            `Sanitize retrieved RAG documents`,
            `Monitor for repeated policy violations`,
            `Adversarial training on attack corpus`
          ]
        },
        {
          id: `guardrails`,
          title: `Guardrails & Moderation APIs`,
          content: `OpenAI Moderation, NeMo Guardrails, Azure Content Safety classify toxicity, violence, PII. **Allow/block lists** for enterprise policies.

Log moderation decisions for audit; appeal process for false positives.

**Applying Alignment, Jailbreaks & Guardrails:** Mitigate harmful outputs and build responsible AI systems. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Guardrails & Moderation APIs", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Tune thresholds per product risk appetite`,
            `PII detection before logging conversations`,
            `Human escalation for edge cases`,
            `Multilingual moderation harder than English`
          ]
        },
        {
          id: `governance`,
          title: `Safety Governance`,
          content: `Pre-deployment risk assessment, incident response playbooks, bug bounty for safety issues. **EU AI Act** high-risk requirements.

Transparency: system cards document limitations and intended use boundaries.

**Applying Alignment, Jailbreaks & Guardrails:** Mitigate harmful outputs and build responsible AI systems. Advanced AI engineering merges models with retrieval, tools, evaluation, and safety guardrails. When studying "Safety Governance", connect theory to practice by predicting outputs before running examples, then explaining discrepancies. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests. Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project.`,
          keyPoints: [
            `Kill switch for production LLM features`,
            `Version control prompts and model weights`,
            `Third-party audits for high-risk deployments`,
            `User education on AI limitations`
          ]
        },
        {
          id: `ai-safety-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Alignment, Jailbreaks & Guardrails sits in the **ai** track of the Data Science Master curriculum. Mitigate harmful outputs and build responsible AI systems.

LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.

For ai-safety, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Alignment, Jailbreaks & Guardrails
meta = {"topic_id": "ai-safety", "track": "ai", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ai-safety ai advanced`,
          keyPoints: [
            `Core theory of Alignment, Jailbreaks & Guardrails ties to the ai track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `ai-safety-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Alignment, Jailbreaks & Guardrails. Ground responses with RAG, enforce JSON schemas for tool calls, red-team prompts before launch, log traces for audit, and gate high-risk actions with human approval.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ai-safety, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for ai-safety
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ai-safety", "Alignment, Jailbreaks & Guardrails")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ai-safety Alignment,`,
          keyPoints: [
            `Start from canonical examples before abstracting helpers`,
            `One change at a time when experimenting`,
            `Prefer readable names over clever one-liners`,
            `Promote patterns to shared code only after reuse`,
            `Document invariants your pattern relies on`,
            `Align style with ai ecosystem conventions`
          ]
        },
        {
          id: `ai-safety-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Alignment, Jailbreaks & Guardrails often hit predictable walls. Prompt injection, hallucinated citations, unbounded agent loops, secret leakage via training data, and fairness gaps across demographics require proactive testing.

When stuck on ai-safety, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("ai-safety", "Alignment, Jailbreaks & Guardrails")
debug_step("section_count", 4)`,
          output: `[ai-safety] 'Alignment, Jailbreaks & Guardrails' (str)
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
          id: `ai-safety-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Alignment, Jailbreaks & Guardrails shows up wherever ai skills meet business constraints. Enterprises deploy copilots, search augmentation, and workflow automation with vector databases, observability stacks, and governance aligned to regulations like the EU AI Act.

Teams shipping features around ai-safety align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Alignment, Jailbreaks & Guardrails
skills = ["ai", "advanced", "ai-safety"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ai, advanced, ai-safety`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Alignment, Jailbreaks & Guardrails to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-safe-1`,
          question: `RLHF aligns models with human ___.`,
          solution: `print("preferences")`,
          difficulty: `easy`
        },
        {
          id: `ex-safe-2`,
          question: `Prompt ___ injects malicious instructions via context.`,
          solution: `print("injection")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 55,
      module: `module-27`,
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
          id: `attention-paper`,
          title: `Attention Is All You Need`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/1706.03762`,
          description: `Transformer architecture paper that revolutionized NLP and beyond.`
        },
        {
          id: `gpt3-paper`,
          title: `Language Models are Few-Shot Learners (GPT-3)`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/2005.14165`,
          description: `Demonstrated emergent few-shot learning at scale with autoregressive LMs.`
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
