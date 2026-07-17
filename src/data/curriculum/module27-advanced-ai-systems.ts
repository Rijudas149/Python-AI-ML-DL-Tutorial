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
      estimatedMinutes: 40,
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
      estimatedMinutes: 40,
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
      estimatedMinutes: 35,
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
      estimatedMinutes: 40,
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
      estimatedMinutes: 40,
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
