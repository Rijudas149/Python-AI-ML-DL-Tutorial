import type { Topic } from '../../types';

export const module19Topics: Topic[] = [
{
      id: `ai-llm`,
      title: `Large Language Models Overview`,
      description: `Architecture, capabilities, and landscape of modern LLMs.`,
      level: `advanced`,
      track: `ai`,
      sections: [
        {
          id: `landscape`,
          title: `LLM Landscape`,
          content: `Large Language Models (LLMs) are neural networks trained on vast text corpora to predict the next token. They exhibit emergent capabilities — reasoning, coding, translation — at sufficient scale.

**Closed-source frontier models:** GPT-4 (OpenAI), Claude (Anthropic), Gemini (Google). Accessed via API; weights not public.

**Open-weight models:** LLaMA (Meta), Mistral, Qwen, Phi — enable local deployment, fine-tuning, and research.

**Multimodal LLMs:** GPT-4V, Gemini process images alongside text. The boundary between NLP and computer vision is dissolving.

Context windows have grown from 2K tokens (early GPT) to 128K–1M tokens, enabling entire codebases or books as input.`,
          keyPoints: [
            `Frontier models from OpenAI, Anthropic, Google`,
            `Open weights: LLaMA, Mistral, Qwen enable local deployment`,
            `Multimodal: GPT-4V, Gemini process images too`,
            `Context windows growing: 128K-1M tokens`
          ]
        },
        {
          id: `capabilities`,
          title: `Capabilities & Limitations`,
          content: `**Strengths:** Summarization, translation, code generation, question answering, creative writing, structured data extraction. LLMs compress patterns from training data into useful general-purpose behavior.

**Weaknesses:** Factual accuracy without retrieval (hallucination), reliable arithmetic without tools, long-horizon planning, real-time knowledge. They predict plausible text, not verified truth.

**Mitigations:** RAG grounds responses in documents; tool use (calculator, search) extends capabilities; chain-of-thought prompting improves reasoning; human-in-the-loop for high-stakes decisions.`,
          keyPoints: [
            `LLMs predict likely text not verified facts`,
            `Hallucination: confident but incorrect outputs`,
            `Tool use and RAG mitigate knowledge gaps`,
            `Reasoning improves with chain-of-thought`
          ]
        },
        {
          id: `tokens`,
          title: `Token Economics`,
          content: `Pricing by input/output tokens. Context window limits. Tokenization affects cost and effective context usage.

**Why this matters for Large Language Models Overview:** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Large Language Models Overview:** Modern AI systems combine models, retrieval, tools, and human oversight—engineering and safety are inseparable. The section "Token Economics" connects to architecture, capabilities, and landscape of modern llms. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.…`,
          example: `# Rough token estimate: 1 token ≈ 4 characters in English
# "Hello world" ≈ 2 tokens
# GPT-4 pricing varies by model tier
text = "Machine learning is transforming industries"
print(f"Approx tokens: {len(text) // 4}")`,
          output: `Approx tokens: 10`,
          keyPoints: [
            `Tokens not words — subword units`,
            `Input + output tokens both billed`,
            `Longer context = higher cost and latency`,
            `Count tokens before API calls`
          ]
        },
        {
          id: `eval`,
          title: `LLM Evaluation`,
          content: `MMLU, HumanEval, MT-Bench benchmarks. Custom eval sets for domain tasks. LLM-as-judge for subjective quality.

**Why this matters for Large Language Models Overview:** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Large Language Models Overview:** Modern AI systems combine models, retrieval, tools, and human oversight—engineering and safety are inseparable. The section "LLM Evaluation" connects to architecture, capabilities, and landscape of modern llms. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.…`,
          keyPoints: [
            `No single benchmark captures all capabilities`,
            `HumanEval for code generation quality`,
            `Build domain-specific eval sets`,
            `Automated eval with stronger model as judge`
          ]
        },
        {
          id: `ai-llm-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Large Language Models Overview sits in the **ai** track of the Data Science Master curriculum. Architecture, capabilities, and landscape of modern LLMs.

LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.

For ai-llm, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Large Language Models Overview
meta = {"topic_id": "ai-llm", "track": "ai", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ai-llm ai advanced`,
          keyPoints: [
            `Core theory of Large Language Models Overview ties to the ai track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `ai-llm-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Large Language Models Overview. Ground responses with RAG, enforce JSON schemas for tool calls, red-team prompts before launch, log traces for audit, and gate high-risk actions with human approval.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ai-llm, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for ai-llm
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ai-llm", "Large Language Models Overview")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ai-llm Large`,
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
          id: `ai-llm-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Large Language Models Overview often hit predictable walls. Prompt injection, hallucinated citations, unbounded agent loops, secret leakage via training data, and fairness gaps across demographics require proactive testing.

When stuck on ai-llm, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("ai-llm", "Large Language Models Overview")
debug_step("section_count", 4)`,
          output: `[ai-llm] 'Large Language Models Overview' (str)
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
          id: `ai-llm-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Large Language Models Overview shows up wherever ai skills meet business constraints. Enterprises deploy copilots, search augmentation, and workflow automation with vector databases, observability stacks, and governance aligned to regulations like the EU AI Act.

Teams shipping features around ai-llm align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Large Language Models Overview
skills = ["ai", "advanced", "ai-llm"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ai, advanced, ai-llm`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Large Language Models Overview to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-llm-1`,
          question: `Define hallucination in LLMs in one sentence.`,
          solution: `print("Model generates plausible but factually incorrect information")`,
          difficulty: `easy`
        },
        {
          id: `ex-llm-2`,
          question: `Estimate tokens in 40-char string.`,
          solution: `print(40 // 4)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 45,
      module: `module-19`,
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
    },
{
      id: `ai-prompt`,
      title: `Prompt Engineering`,
      description: `Design effective prompts to maximize LLM output quality.`,
      level: `advanced`,
      track: `ai`,
      sections: [
        {
          id: `basics`,
          title: `Prompt Structure`,
          content: `System message (role/behavior) + user message (task) + optional examples. Clear, specific instructions outperform vague requests.

**Why this matters for Prompt Engineering:** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Prompt Engineering:** Modern AI systems combine models, retrieval, tools, and human oversight—engineering and safety are inseparable. The section "Prompt Structure" connects to design effective prompts to maximize llm output quality. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.…`,
          example: `prompt = """System: You are a Python tutor. Explain concepts simply.

User: Explain list comprehensions with an example.

Assistant:"""
print(len(prompt))`,
          keyPoints: [
            `System prompt sets behavior and constraints`,
            `Be specific about format, length, tone`,
            `Include examples for complex formats (few-shot)`,
            `Iterate and refine prompts empirically`
          ]
        },
        {
          id: `cot`,
          title: `Chain-of-Thought (CoT)`,
          content: `Add "Let's think step by step" or demonstrate reasoning steps. Dramatically improves math and logic performance.

**Why this matters for Prompt Engineering:** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Prompt Engineering:** Modern AI systems combine models, retrieval, tools, and human oversight—engineering and safety are inseparable. The section "Chain-of-Thought (CoT)" connects to design effective prompts to maximize llm output quality. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.…`,
          example: `prompt = "Q: A store has 23 apples. They buy 6 boxes of 12 apples. How many now?\\nA: Let's think step by step.\\n23 + (6 * 12) = 23 + 72 = 95\\n\\nQ: ..."
print("CoT improves reasoning")`,
          output: `CoT improves reasoning`,
          keyPoints: [
            `Zero-shot CoT: add "think step by step"`,
            `Few-shot CoT: provide reasoning examples`,
            `Self-consistency: sample multiple chains, majority vote`,
            `Tree-of-thought for complex planning`
          ]
        },
        {
          id: `few-shot`,
          title: `Few-Shot Learning`,
          content: `Provide 2-5 input-output examples in prompt. Model learns pattern without weight updates. Example selection matters.

**Why this matters for Prompt Engineering:** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Prompt Engineering:** Modern AI systems combine models, retrieval, tools, and human oversight—engineering and safety are inseparable. The section "Few-Shot Learning" connects to design effective prompts to maximize llm output quality. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.…`,
          keyPoints: [
            `Examples should be diverse and representative`,
            `Order of examples affects performance`,
            `More examples help up to a point`,
            `Dynamic example retrieval from database`
          ]
        },
        {
          id: `advanced-prompt`,
          title: `Advanced Techniques`,
          content: `ReAct (reasoning + acting), structured output (JSON mode), role prompting, prompt chaining, constitutional AI principles.

**Why this matters for Prompt Engineering:** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Prompt Engineering:** Modern AI systems combine models, retrieval, tools, and human oversight—engineering and safety are inseparable. The section "Advanced Techniques" connects to design effective prompts to maximize llm output quality. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.…`,
          keyPoints: [
            `JSON mode ensures parseable output`,
            `Prompt chaining breaks complex tasks into steps`,
            `ReAct interleaves reasoning and tool calls`,
            `Test prompts systematically with eval sets`
          ]
        },
        {
          id: `ai-prompt-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Prompt Engineering sits in the **ai** track of the Data Science Master curriculum. Design effective prompts to maximize LLM output quality.

LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.

For ai-prompt, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Prompt Engineering
meta = {"topic_id": "ai-prompt", "track": "ai", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ai-prompt ai advanced`,
          keyPoints: [
            `Core theory of Prompt Engineering ties to the ai track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `ai-prompt-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Prompt Engineering. Ground responses with RAG, enforce JSON schemas for tool calls, red-team prompts before launch, log traces for audit, and gate high-risk actions with human approval.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ai-prompt, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for ai-prompt
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ai-prompt", "Prompt Engineering")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ai-prompt Prompt`,
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
          id: `ai-prompt-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Prompt Engineering often hit predictable walls. Prompt injection, hallucinated citations, unbounded agent loops, secret leakage via training data, and fairness gaps across demographics require proactive testing.

When stuck on ai-prompt, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("ai-prompt", "Prompt Engineering")
debug_step("section_count", 4)`,
          output: `[ai-prompt] 'Prompt Engineering' (str)
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
          id: `ai-prompt-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Prompt Engineering shows up wherever ai skills meet business constraints. Enterprises deploy copilots, search augmentation, and workflow automation with vector databases, observability stacks, and governance aligned to regulations like the EU AI Act.

Teams shipping features around ai-prompt align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Prompt Engineering
skills = ["ai", "advanced", "ai-prompt"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ai, advanced, ai-prompt`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Prompt Engineering to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-prompt-1`,
          question: `Write a system prompt for a code review assistant.`,
          solution: `system = "You are an expert code reviewer. Identify bugs, suggest improvements, and explain clearly."
print(system[:50])`,
          difficulty: `easy`
        },
        {
          id: `ex-prompt-2`,
          question: `Add CoT trigger phrase to math question.`,
          solution: `q = "Roger has 5 tennis balls. He buys 2 cans of 3. How many?\\nLet's think step by step."
print("step by step" in q)`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-19`,
      references: [
        {
          id: `openai-gpt-best-practices`,
          title: `GPT Best Practices`,
          source: `OpenAI`,
          type: `documentation`,
          url: `https://platform.openai.com/docs/guides/prompt-engineering`,
          description: `Official guide to prompt engineering strategies for LLM applications.`
        },
        {
          id: `anthropic-prompt-engineering`,
          title: `Prompt Engineering Overview`,
          source: `Anthropic`,
          type: `documentation`,
          url: `https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview`,
          description: `Techniques for clear, effective prompts with Claude and general LLMs.`
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
          id: `gpt3-paper`,
          title: `Language Models are Few-Shot Learners (GPT-3)`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/2005.14165`,
          description: `Demonstrated emergent few-shot learning at scale with autoregressive LMs.`
        }
      ]
    },
{
      id: `ai-rag`,
      title: `RAG (Retrieval Augmented Generation)`,
      description: `Ground LLM responses in external knowledge via retrieval.`,
      level: `advanced`,
      track: `ai`,
      sections: [
        {
          id: `rag-arch`,
          title: `RAG Architecture`,
          content: `Query → retrieve relevant documents from vector DB → augment prompt with context → LLM generates grounded answer.

**Why this matters for RAG (Retrieval Augmented Generation):** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — RAG (Retrieval Augmented Generation):** Modern AI systems combine models, retrieval, tools, and human oversight—engineering and safety are inseparable. The section "RAG Architecture" connects to ground llm responses in external knowledge via retrieval. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.…`,
          pseudoCode: `query = user_question
chunks = vector_db.search(embed(query), top_k=5)
context = join(chunks)
prompt = f"Context: {context}\\nQuestion: {query}"
answer = llm.generate(prompt)`,
          keyPoints: [
            `RAG reduces hallucination on domain knowledge`,
            `Retrieval quality determines answer quality`,
            `Chunk size and overlap affect retrieval`,
            `Hybrid search: dense + keyword (BM25)`
          ]
        },
        {
          id: `embeddings-rag`,
          title: `Embeddings for Retrieval`,
          content: `Embed documents and queries with embedding model (OpenAI, sentence-transformers). Store in vector DB (Pinecone, Chroma, FAISS).

**Why this matters for RAG (Retrieval Augmented Generation):** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — RAG (Retrieval Augmented Generation):** Modern AI systems combine models, retrieval, tools, and human oversight—engineering and safety are inseparable. The section "Embeddings for Retrieval" connects to ground llm responses in external knowledge via retrieval. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.…`,
          example: `from sentence_transformers import SentenceTransformer

model = SentenceTransformer("all-MiniLM-L6-v2")
docs = ["Python is a programming language", "Machine learning uses data"]
embeddings = model.encode(docs)
print(embeddings.shape)`,
          keyPoints: [
            `Choose embedding model matching domain`,
            `Chunk documents 256-512 tokens typically`,
            `Metadata filtering narrows search space`,
            `Re-rank retrieved results with cross-encoder`
          ]
        },
        {
          id: `chunking`,
          title: `Document Chunking`,
          content: `Split documents into retrievable chunks. Recursive character splitting, semantic chunking. Overlap preserves context at boundaries.

**Why this matters for RAG (Retrieval Augmented Generation):** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — RAG (Retrieval Augmented Generation):** Modern AI systems combine models, retrieval, tools, and human oversight—engineering and safety are inseparable. The section "Document Chunking" connects to ground llm responses in external knowledge via retrieval. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.…`,
          keyPoints: [
            `Too small chunks lose context`,
            `Too large chunks dilute relevance`,
            `10-20% overlap between chunks common`,
            `Parent-child chunking for hierarchical retrieval`
          ]
        },
        {
          id: `eval-rag`,
          title: `Evaluating RAG Systems`,
          content: `Retrieval metrics: recall@k, MRR. Generation metrics: faithfulness, relevance, answer correctness. RAGAS framework.

**Why this matters for RAG (Retrieval Augmented Generation):** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — RAG (Retrieval Augmented Generation):** Modern AI systems combine models, retrieval, tools, and human oversight—engineering and safety are inseparable. The section "Evaluating RAG Systems" connects to ground llm responses in external knowledge via retrieval. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.…`,
          keyPoints: [
            `Evaluate retrieval and generation separately`,
            `Faithfulness: answer grounded in retrieved context`,
            `RAGAS automated RAG evaluation`,
            `Human eval for production quality assurance`
          ]
        },
        {
          id: `ai-rag-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

RAG (Retrieval Augmented Generation) sits in the **ai** track of the Data Science Master curriculum. Ground LLM responses in external knowledge via retrieval.

LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.

For ai-rag, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for RAG (Retrieval Augmented Generation)
meta = {"topic_id": "ai-rag", "track": "ai", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ai-rag ai advanced`,
          keyPoints: [
            `Core theory of RAG (Retrieval Augmented Generation) ties to the ai track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `ai-rag-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from RAG (Retrieval Augmented Generation). Ground responses with RAG, enforce JSON schemas for tool calls, red-team prompts before launch, log traces for audit, and gate high-risk actions with human approval.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ai-rag, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for ai-rag
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ai-rag", "RAG (Retrieval Augmented Generation)")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ai-rag RAG`,
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
          id: `ai-rag-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on RAG (Retrieval Augmented Generation) often hit predictable walls. Prompt injection, hallucinated citations, unbounded agent loops, secret leakage via training data, and fairness gaps across demographics require proactive testing.

When stuck on ai-rag, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("ai-rag", "RAG (Retrieval Augmented Generation)")
debug_step("section_count", 4)`,
          output: `[ai-rag] 'RAG (Retrieval Augmented Generation)' (str)
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
          id: `ai-rag-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

RAG (Retrieval Augmented Generation) shows up wherever ai skills meet business constraints. Enterprises deploy copilots, search augmentation, and workflow automation with vector databases, observability stacks, and governance aligned to regulations like the EU AI Act.

Teams shipping features around ai-rag align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for RAG (Retrieval Augmented Generation)
skills = ["ai", "advanced", "ai-rag"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ai, advanced, ai-rag`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect RAG (Retrieval Augmented Generation) to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-rag-1`,
          question: `List RAG pipeline steps in order.`,
          solution: `steps = ["embed query", "retrieve chunks", "augment prompt", "generate answer"]
print(steps)`,
          difficulty: `easy`
        },
        {
          id: `ex-rag-2`,
          question: `Explain why RAG reduces hallucinations.`,
          solution: `print("Grounds answers in retrieved documents rather than parametric memory alone")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-19`,
      references: [
        {
          id: `rag-paper`,
          title: `Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/2005.11401`,
          description: `Foundational RAG paper combining retrieval with generative models.`
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
        },
        {
          id: `langchain-agents`,
          title: `LangChain Agents Documentation`,
          source: `LangChain`,
          type: `documentation`,
          url: `https://python.langchain.com/docs/concepts/agents/`,
          description: `Building LLM agents that reason, plan, and use external tools.`
        }
      ]
    },
{
      id: `ai-finetune`,
      title: `Fine-tuning & LoRA`,
      description: `Adapt pretrained LLMs to specific tasks and domains.`,
      level: `advanced`,
      track: `ai`,
      sections: [
        {
          id: `finetune`,
          title: `Full Fine-Tuning`,
          content: `Update all model weights on domain dataset. Expensive — requires significant GPU memory. Best for large domain shift.

**Why this matters for Fine-tuning & LoRA:** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Fine-tuning & LoRA:** Modern AI systems combine models, retrieval, tools, and human oversight—engineering and safety are inseparable. The section "Full Fine-Tuning" connects to adapt pretrained llms to specific tasks and domains. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.…`,
          keyPoints: [
            `Requires labeled instruction-response pairs`,
            `Risk of catastrophic forgetting`,
            `Multi-GPU needed for 7B+ models`,
            `Learning rate much smaller than pretraining`
          ]
        },
        {
          id: `lora`,
          title: `LoRA (Low-Rank Adaptation)`,
          content: `Freeze base model, add low-rank decomposition matrices to attention layers. Trains ~0.1% of parameters. PEFT standard.

**Why this matters for Fine-tuning & LoRA:** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Fine-tuning & LoRA:** Modern AI systems combine models, retrieval, tools, and human oversight—engineering and safety are inseparable. The section "LoRA (Low-Rank Adaptation)" connects to adapt pretrained llms to specific tasks and domains. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.…`,
          example: `# LoRA concept: W' = W + BA where B is d×r, A is r×d, r << d
# r=8 or r=16 typical rank
# Only train A and B matrices
print("LoRA: W + B@A with low rank r")`,
          output: `LoRA: W + B@A with low rank r`,
          keyPoints: [
            `LoRA rank r controls capacity vs efficiency`,
            `Target q_proj, v_proj in attention layers`,
            `QLoRA: 4-bit quantized base + LoRA adapters`,
            `Merge adapters into base for deployment`
          ]
        },
        {
          id: `instruction`,
          title: `Instruction Tuning`,
          content: `Fine-tune on (instruction, response) pairs. Alpaca, Dolly datasets. Aligns model to follow user instructions.

**Why this matters for Fine-tuning & LoRA:** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Fine-tuning & LoRA:** Modern AI systems combine models, retrieval, tools, and human oversight—engineering and safety are inseparable. The section "Instruction Tuning" connects to adapt pretrained llms to specific tasks and domains. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.…`,
          keyPoints: [
            `Instruction format: ### Instruction / ### Response`,
            `Quality over quantity for instruction data`,
            `Covers diverse task types`,
            `Foundation for chat model behavior`
          ]
        },
        {
          id: `rlhf`,
          title: `RLHF & DPO`,
          content: `Reinforcement Learning from Human Feedback: train reward model on preferences, optimize with PPO. DPO simpler alternative without reward model.

**Why this matters for Fine-tuning & LoRA:** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Fine-tuning & LoRA:** Modern AI systems combine models, retrieval, tools, and human oversight—engineering and safety are inseparable. The section "RLHF & DPO" connects to adapt pretrained llms to specific tasks and domains. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.…`,
          keyPoints: [
            `RLHF makes models helpful and harmless`,
            `Reward model trained on human preference comparisons`,
            `PPO fine-tunes against reward model`,
            `DPO direct preference optimization — simpler pipeline`
          ]
        },
        {
          id: `ai-finetune-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Fine-tuning & LoRA sits in the **ai** track of the Data Science Master curriculum. Adapt pretrained LLMs to specific tasks and domains.

LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.

For ai-finetune, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (advanced):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Fine-tuning & LoRA
meta = {"topic_id": "ai-finetune", "track": "ai", "level": "advanced"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ai-finetune ai advanced`,
          keyPoints: [
            `Core theory of Fine-tuning & LoRA ties to the ai track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `ai-finetune-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Fine-tuning & LoRA. Ground responses with RAG, enforce JSON schemas for tool calls, red-team prompts before launch, log traces for audit, and gate high-risk actions with human approval.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ai-finetune, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for ai-finetune
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ai-finetune", "Fine-tuning & LoRA")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ai-finetune Fine-tuning`,
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
          id: `ai-finetune-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Fine-tuning & LoRA often hit predictable walls. Prompt injection, hallucinated citations, unbounded agent loops, secret leakage via training data, and fairness gaps across demographics require proactive testing.

When stuck on ai-finetune, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("ai-finetune", "Fine-tuning & LoRA")
debug_step("section_count", 4)`,
          output: `[ai-finetune] 'Fine-tuning & LoRA' (str)
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
          id: `ai-finetune-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Fine-tuning & LoRA shows up wherever ai skills meet business constraints. Enterprises deploy copilots, search augmentation, and workflow automation with vector databases, observability stacks, and governance aligned to regulations like the EU AI Act.

Teams shipping features around ai-finetune align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Fine-tuning & LoRA
skills = ["ai", "advanced", "ai-finetune"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ai, advanced, ai-finetune`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Fine-tuning & LoRA to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-ft-1`,
          question: `LoRA updates W' = W + ___`,
          solution: `print("B @ A (low-rank matrices)")`,
          difficulty: `easy`
        },
        {
          id: `ex-ft-2`,
          question: `Name PEFT method that quantizes base to 4-bit.`,
          solution: `print("QLoRA")`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 40,
      module: `module-19`,
      references: [
        {
          id: `lora-paper`,
          title: `LoRA: Low-Rank Adaptation of Large Language Models`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/2106.09685`,
          description: `Parameter-efficient fine-tuning via low-rank weight updates.`
        },
        {
          id: `peft-docs`,
          title: `Hugging Face PEFT Documentation`,
          source: `Hugging Face`,
          type: `documentation`,
          url: `https://huggingface.co/docs/peft/index`,
          description: `Parameter-efficient fine-tuning with LoRA, prefix tuning, and adapters.`
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
      id: `ai-agents`,
      title: `Agents & Tool Use`,
      description: `LLM agents that reason, plan, and interact with external tools.`,
      level: `expert`,
      track: `ai`,
      sections: [
        {
          id: `agents`,
          title: `LLM Agent Architecture`,
          content: `Agent loop: observe → think → act (tool call) → observe result → repeat. LangChain, LlamaIndex frameworks.

**Why this matters for Agents & Tool Use:** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Agents & Tool Use:** Modern AI systems combine models, retrieval, tools, and human oversight—engineering and safety are inseparable. The section "LLM Agent Architecture" connects to llm agents that reason, plan, and interact with external tools. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.…`,
          pseudoCode: `WHILE not done:
    thought = llm.reason(observation, goal)
    IF thought.requires_action:
        result = execute_tool(thought.action, thought.args)
        observation = result
    ELSE:
        return thought.answer`,
          keyPoints: [
            `ReAct pattern: Reason + Act interleaved`,
            `Tool definitions in prompt or function calling API`,
            `Memory: short-term (conversation) + long-term (vector store)`,
            `Max iterations prevent infinite loops`
          ]
        },
        {
          id: `tools`,
          title: `Function Calling / Tool Use`,
          content: `Define tools with name, description, parameters (JSON schema). Model selects tool and arguments. OpenAI function calling, Anthropic tool use.

**Why this matters for Agents & Tool Use:** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Agents & Tool Use:** Modern AI systems combine models, retrieval, tools, and human oversight—engineering and safety are inseparable. The section "Function Calling / Tool Use" connects to llm agents that reason, plan, and interact with external tools. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.…`,
          example: `tools = [{
    "name": "search",
    "description": "Search the web for information",
    "parameters": {"query": {"type": "string"}}
}]
print(tools[0]["name"])`,
          output: `search`,
          keyPoints: [
            `Clear tool descriptions critical for selection`,
            `JSON schema defines valid parameters`,
            `Execute tool and return result to model`,
            `Multiple tools enable complex workflows`
          ]
        },
        {
          id: `frameworks`,
          title: `Agent Frameworks`,
          content: `LangChain: chains, agents, memory. LlamaIndex: data ingestion and RAG. AutoGen: multi-agent conversations. CrewAI: role-based agents.

**Why this matters for Agents & Tool Use:** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Agents & Tool Use:** Modern AI systems combine models, retrieval, tools, and human oversight—engineering and safety are inseparable. The section "Agent Frameworks" connects to llm agents that reason, plan, and interact with external tools. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.…`,
          keyPoints: [
            `LangChain most popular orchestration framework`,
            `LlamaIndex optimized for data-connected apps`,
            `Multi-agent: specialized agents collaborate`,
            `Evaluate agent reliability before production`
          ]
        },
        {
          id: `safety`,
          title: `Agent Safety`,
          content: `Sandbox tool execution. Validate tool inputs. Limit permissions. Human-in-the-loop for high-stakes actions.

**Why this matters for Agents & Tool Use:** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.

**Extended exploration — Agents & Tool Use:** Modern AI systems combine models, retrieval, tools, and human oversight—engineering and safety are inseparable. The section "Agent Safety" connects to llm agents that reason, plan, and interact with external tools. Work through the example below, predict the output before running it, then compare with the key points. Revisit edge cases: empty inputs, boundary values, and invalid types. In professional settings, document assumptions you make here because they become invariants for tests and APIs.

**Conceptual depth:** Understanding *why* this behavior occurs—not only *what* the syntax does—lets you debug faster when stack traces point here. Map each key point to a concrete decision in a small project: naming, error handling, or performance. LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.…`,
          keyPoints: [
            `Never give agents unrestricted system access`,
            `Validate and sanitize tool inputs/outputs`,
            `Human approval for irreversible actions`,
            `Monitor agent trajectories for unexpected behavior`
          ]
        },
        {
          id: `ai-agents-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `## Deep Theory & Concepts

Agents & Tool Use sits in the **ai** track of the Data Science Master curriculum. LLM agents that reason, plan, and interact with external tools.

LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.

For ai-agents, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or docs, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**Level (expert):** At this stage you should connect prerequisites to new material—sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.`,
          example: `# Concept check for Agents & Tool Use
meta = {"topic_id": "ai-agents", "track": "ai", "level": "expert"}
print(meta["topic_id"], meta["track"], meta["level"])`,
          output: `ai-agents ai expert`,
          keyPoints: [
            `Core theory of Agents & Tool Use ties to the ai track`,
            `Connect definitions to inputs, outputs, and evaluation criteria`,
            `Identify assumptions that break in production or at scale`,
            `Relate this topic to prerequisites and follow-on modules`,
            `Use paper/documentation cross-checks to validate intuition`,
            `Sketch diagrams before implementing from memory`
          ]
        },
        {
          id: `ai-agents-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `## Practical Patterns & Idioms

Professionals reuse patterns that encode lessons from Agents & Tool Use. Ground responses with RAG, enforce JSON schemas for tool calls, red-team prompts before launch, log traces for audit, and gate high-risk actions with human approval.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For ai-agents, extract a minimal working example you can paste into interviews or design docs.

**Workflow:** (1) reproduce the canonical example, (2) vary one parameter at a time, (3) capture results in a short log or notebook cell, (4) promote stable patterns into shared utilities only after the second reuse.`,
          example: `# Idiomatic pattern snapshot for ai-agents
from dataclasses import dataclass

@dataclass(frozen=True)
class LessonRef:
    topic_id: str
    title: str

ref = LessonRef("ai-agents", "Agents & Tool Use")
print(ref.topic_id, ref.title.split()[0])`,
          output: `ai-agents Agents`,
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
          id: `ai-agents-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `## Common Pitfalls & Debugging

Learners working on Agents & Tool Use often hit predictable walls. Prompt injection, hallucinated citations, unbounded agent loops, secret leakage via training data, and fairness gaps across demographics require proactive testing.

When stuck on ai-agents, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment—and test each hypothesis independently.

**Debugging checklist:** verify assumptions listed in earlier sections; compare actual vs expected intermediate values; check for off-by-one and unit mismatches; confirm library versions match the tutorial; sleep on it only after you have a minimal repro artifact.`,
          example: `# Minimal repro template
def debug_step(label, value):
    print(f"[{label}] {value!r} ({type(value).__name__})")

debug_step("ai-agents", "Agents & Tool Use")
debug_step("section_count", 4)`,
          output: `[ai-agents] 'Agents & Tool Use' (str)
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
          id: `ai-agents-real-world`,
          title: `Real-World Applications`,
          content: `## Real-World Applications

Agents & Tool Use shows up wherever ai skills meet business constraints. Enterprises deploy copilots, search augmentation, and workflow automation with vector databases, observability stacks, and governance aligned to regulations like the EU AI Act.

Teams shipping features around ai-agents align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance—not only accuracy.

**Career note:** Interviewers expect you to narrate a project where this topic mattered: problem, approach, metric movement, tradeoffs, and what you would do differently. Link this lesson to portfolio READMEs and capstone modules later in the curriculum.`,
          example: `# Portfolio bullet generator for Agents & Tool Use
skills = ["ai", "expert", "ai-agents"]
print("Built project applying:", ", ".join(skills))`,
          output: `Built project applying: ai, expert, ai-agents`,
          keyPoints: [
            ` Tie lessons to portfolio projects with measurable outcomes`,
            `Explain tradeoffs to technical and non-technical audiences`,
            `Plan deployment, monitoring, and maintenance early`,
            `Document ethical and privacy implications where relevant`,
            `Iterate with user feedback—not only offline metrics`,
            `Connect Agents & Tool Use to adjacent topics in the same track`
          ]
        }
      ],
      exercises: [
        {
          id: `ex-agent-1`,
          question: `ReAct interleaves reasoning and ___.`,
          solution: `print("acting/tool use")`,
          difficulty: `easy`
        },
        {
          id: `ex-agent-2`,
          question: `Define a tool schema with name "calculator" and param "expression".`,
          solution: `tool = {"name": "calculator", "parameters": {"expression": {"type": "string"}}}
print(tool["name"])`,
          difficulty: `easy`
        }
      ],
      estimatedMinutes: 50,
      module: `module-19`,
      references: [
        {
          id: `reAct-paper`,
          title: `ReAct: Synergizing Reasoning and Acting in Language Models`,
          source: `arXiv`,
          type: `paper`,
          url: `https://arxiv.org/abs/2210.03629`,
          description: `Interleaved reasoning and tool-use pattern for LLM agents.`
        },
        {
          id: `langchain-agents`,
          title: `LangChain Agents Documentation`,
          source: `LangChain`,
          type: `documentation`,
          url: `https://python.langchain.com/docs/concepts/agents/`,
          description: `Building LLM agents that reason, plan, and use external tools.`
        },
        {
          id: `anthropic-prompt-engineering`,
          title: `Prompt Engineering Overview`,
          source: `Anthropic`,
          type: `documentation`,
          url: `https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview`,
          description: `Techniques for clear, effective prompts with Claude and general LLMs.`
        },
        {
          id: `openai-gpt-best-practices`,
          title: `GPT Best Practices`,
          source: `OpenAI`,
          type: `documentation`,
          url: `https://platform.openai.com/docs/guides/prompt-engineering`,
          description: `Official guide to prompt engineering strategies for LLM applications.`
        }
      ]
    }
];
