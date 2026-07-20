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
          content: `### Introduction

Large Language Models (LLMs) are neural networks trained on vast text corpora to predict the next token. They exhibit emergent capabilities — reasoning, coding, translation — at sufficient scale.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

By the end you should be able to explain the concept in plain language, run the example code yourself, and avoid the common mistakes listed at the bottom of the page.

### Why This Matters

**Why learn LLM Landscape?** On the modern AI systems track, this topic is a gate — later modules assume you are comfortable with the vocabulary, code patterns, and failure modes covered here.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

Skimming only the bullets is not enough for interviews or production work. Read the full explanation, complete the walkthrough, and intentionally trigger at least one mistake in the REPL so you recognize the error message when it appears in a real project.

### LLM Landscape — Full Explanation

Large Language Models (LLMs) are neural networks trained on vast text corpora to predict the next token. They exhibit emergent capabilities — reasoning, coding, translation — at sufficient scale.

**Closed-source frontier models:** GPT-4 (OpenAI), Claude (Anthropic), Gemini (Google). Accessed via API; weights not public.

**Open-weight models:** LLaMA (Meta), Mistral, Qwen, Phi — enable local deployment, fine-tuning, and research. Take a moment to connect this sentence to **LLM Landscape** — what would change if the input were twice as large, missing values, or drawn from a different domain?

**Multimodal LLMs:** GPT-4V, Gemini process images alongside text. The boundary between NLP and computer vision is dissolving.

Context windows have grown from 2K tokens (early GPT) to 128K–1M tokens, enabling entire codebases or books as input. Take a moment to connect this sentence to **LLM Landscape** — what would change if the input were twice as large, missing values, or drawn from a different domain?

### Concept-by-Concept Breakdown

Each core idea deserves more than a one-line summary. Expand each point below before you run the code:

**1. Frontier models from OpenAI, Anthropic, Google**

Frontier models from OpenAI, Anthropic, Google. In **LLM Landscape**, this idea is not optional theory — it directly affects whether your implementation behaves correctly on edge cases. When you run the code example, pause after each step and ask how this point would change if the input data were larger, noisier, or slightly different.

Think of a concrete scenario in **Large Language Models Overview** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**2. Open weights: LLaMA, Mistral, Qwen enable local deployment**

Open weights: LLaMA, Mistral, Qwen enable local deployment. Teams working on modern AI systems code review for this explicitly because violations cause subtle bugs that unit tests often miss. A practical habit: keep a one-line comment in your notebook linking each key block of code to this principle.

Think of a concrete scenario in **Large Language Models Overview** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**3. Multimodal: GPT-4V, Gemini process images too**

Multimodal: GPT-4V, Gemini process images too. You will revisit this while studying **Large Language Models Overview** and in later modules where the same pattern appears with more complexity. If anything feels abstract now, return after running the example — concrete output usually makes the idea click.

Think of a concrete scenario in **Large Language Models Overview** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**4. Context windows growing: 128K-1M tokens**

Context windows growing: 128K-1M tokens. Interviewers and senior engineers expect you to explain **LLM Landscape** using ideas like this, not only API names. Practice saying it aloud in one sentence, then point to where the example demonstrates it.

Think of a concrete scenario in **Large Language Models Overview** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

### How It Works (Step by Step)

Follow this sequence when applying the concept in a project or interview setting:

1. Frontier models from OpenAI, Anthropic, Google
2. Open weights: LLaMA, Mistral, Qwen enable local deployment
3. Multimodal: GPT-4V, Gemini process images too
4. Context windows growing: 128K-1M tokens

At each step, sanity-check inputs and outputs — most errors in **LLM Landscape** come from skipping validation between steps.

### Real-World Applications

**LLM Landscape** shows up in real projects more often than textbook examples suggest:

- Multimodal search across images, text, and structured metadata
- Evaluation and guardrail pipelines before shipping LLM features to users
- Document Q&A assistants with retrieval-augmented generation over private corpora

In each case, the details from this section inform how you structure code, choose libraries, and validate results before shipping.

### Hands-On Practice

Open a Python REPL or notebook and type a minimal version of **LLM Landscape** from memory. Even five lines of working code solidify more understanding than re-reading this article.

### Best Practices Checklist

Use this checklist before you mark the section complete:

- I can explain: Frontier models from OpenAI, Anthropic, Google
- I can explain: Open weights: LLaMA, Mistral, Qwen enable local deployment
- I can explain: Multimodal: GPT-4V, Gemini process images too
- I can explain: Context windows growing: 128K-1M tokens
- I ran the example and matched the expected output for **LLM Landscape**.
- I read the common-mistakes panel and can describe how to avoid at least two items.

### Interview & Review Questions

If you are preparing for courses, certifications, or technical interviews, practice answering aloud:

- Explain **LLM Landscape** to a junior developer in two minutes.
- What goes wrong if you ignore best practices for LLM Landscape?
- How does LLM Landscape connect to the rest of **Large Language Models Overview**?
- What does it mean that "Frontier models from OpenAI, Anthropic, Google"? Give an example.

### Summary

To recap **LLM Landscape**: frontier models from openai, anthropic, google; open weights: llama, mistral, qwen enable local deployment; multimodal: gpt-4v, gemini process images too; context windows growing: 128k-1m tokens.

Keep this summary in your own words in the notes panel — teaching the idea to someone else (or your future self) is the fastest way to know you truly understand it.`,
          keyPoints: [
            `Frontier models from OpenAI, Anthropic, Google`,
            `Open weights: LLaMA, Mistral, Qwen enable local deployment`,
            `Multimodal: GPT-4V, Gemini process images too`,
            `Context windows growing: 128K-1M tokens`
          ],
          diagram: `LLM Landscape
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Measuring only fluency — not factual accuracy or task success`,
            `Deploying without output moderation on user-facing endpoints`,
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`
          ]
        },
        {
          id: `capabilities`,
          title: `Capabilities & Limitations`,
          content: `### Introduction

**Strengths:** Summarization, translation, code generation, question answering, creative writing, structured data extraction. LLMs compress patterns from training data into useful general-purpose behavior.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

By the end you should be able to explain the concept in plain language, run the example code yourself, and avoid the common mistakes listed at the bottom of the page.

### Why This Matters

**Why learn Capabilities & Limitations?** On the modern AI systems track, this topic is a gate — later modules assume you are comfortable with the vocabulary, code patterns, and failure modes covered here.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

Skimming only the bullets is not enough for interviews or production work. Read the full explanation, complete the walkthrough, and intentionally trigger at least one mistake in the REPL so you recognize the error message when it appears in a real project.

### Capabilities & Limitations — Full Explanation

**Strengths:** Summarization, translation, code generation, question answering, creative writing, structured data extraction. LLMs compress patterns from training data into useful general-purpose behavior.

**Weaknesses:** Factual accuracy without retrieval (hallucination), reliable arithmetic without tools, long-horizon planning, real-time knowledge. They predict plausible text, not verified truth.

**Mitigations:** RAG grounds responses in documents; tool use (calculator, search) extends capabilities; chain-of-thought prompting improves reasoning; human-in-the-loop for high-stakes decisions. Take a moment to connect this sentence to **Capabilities & Limitations** — what would change if the input were twice as large, missing values, or drawn from a different domain?

### Concept-by-Concept Breakdown

Each core idea deserves more than a one-line summary. Expand each point below before you run the code:

**1. LLMs predict likely text not verified facts**

LLMs predict likely text not verified facts. In **Capabilities & Limitations**, this idea is not optional theory — it directly affects whether your implementation behaves correctly on edge cases. When you run the code example, pause after each step and ask how this point would change if the input data were larger, noisier, or slightly different.

Think of a concrete scenario in **Large Language Models Overview** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**2. Hallucination: confident but incorrect outputs**

Hallucination: confident but incorrect outputs. Teams working on modern AI systems code review for this explicitly because violations cause subtle bugs that unit tests often miss. A practical habit: keep a one-line comment in your notebook linking each key block of code to this principle.

Think of a concrete scenario in **Large Language Models Overview** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**3. Tool use and RAG mitigate knowledge gaps**

Tool use and RAG mitigate knowledge gaps. You will revisit this while studying **Large Language Models Overview** and in later modules where the same pattern appears with more complexity. If anything feels abstract now, return after running the example — concrete output usually makes the idea click.

Think of a concrete scenario in **Large Language Models Overview** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**4. Reasoning improves with chain-of-thought**

Reasoning improves with chain-of-thought. Interviewers and senior engineers expect you to explain **Capabilities & Limitations** using ideas like this, not only API names. Practice saying it aloud in one sentence, then point to where the example demonstrates it.

Think of a concrete scenario in **Large Language Models Overview** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

### How It Works (Step by Step)

Follow this sequence when applying the concept in a project or interview setting:

1. LLMs predict likely text not verified facts
2. Hallucination: confident but incorrect outputs
3. Tool use and RAG mitigate knowledge gaps
4. Reasoning improves with chain-of-thought

At each step, sanity-check inputs and outputs — most errors in **Capabilities & Limitations** come from skipping validation between steps.

### Real-World Applications

**Capabilities & Limitations** shows up in real projects more often than textbook examples suggest:

- Multimodal search across images, text, and structured metadata
- Evaluation and guardrail pipelines before shipping LLM features to users
- Document Q&A assistants with retrieval-augmented generation over private corpora

In each case, the details from this section inform how you structure code, choose libraries, and validate results before shipping.

### Hands-On Practice

Open a Python REPL or notebook and type a minimal version of **Capabilities & Limitations** from memory. Even five lines of working code solidify more understanding than re-reading this article.

### Best Practices Checklist

Use this checklist before you mark the section complete:

- I can explain: LLMs predict likely text not verified facts
- I can explain: Hallucination: confident but incorrect outputs
- I can explain: Tool use and RAG mitigate knowledge gaps
- I can explain: Reasoning improves with chain-of-thought
- I ran the example and matched the expected output for **Capabilities & Limitations**.
- I read the common-mistakes panel and can describe how to avoid at least two items.

### Interview & Review Questions

If you are preparing for courses, certifications, or technical interviews, practice answering aloud:

- Explain **Capabilities & Limitations** to a junior developer in two minutes.
- What goes wrong if you ignore best practices for Capabilities & Limitations?
- How does Capabilities & Limitations connect to the rest of **Large Language Models Overview**?
- What does it mean that "LLMs predict likely text not verified facts"? Give an example.

### Summary

To recap **Capabilities & Limitations**: llms predict likely text not verified facts; hallucination: confident but incorrect outputs; tool use and rag mitigate knowledge gaps; reasoning improves with chain-of-thought.

Keep this summary in your own words in the notes panel — teaching the idea to someone else (or your future self) is the fastest way to know you truly understand it.`,
          keyPoints: [
            `LLMs predict likely text not verified facts`,
            `Hallucination: confident but incorrect outputs`,
            `Tool use and RAG mitigate knowledge gaps`,
            `Reasoning improves with chain-of-thought`
          ],
          diagram: `Capabilities & Limitations
Query → Embed → Retrieve → Augment Prompt → Generate`,
          commonMistakes: [
            `Wrong sequence length after tokenization — truncating critical context`,
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`
          ]
        },
        {
          id: `tokens`,
          title: `Token Economics`,
          content: `### Introduction

Pricing by input/output tokens. Context window limits. Tokenization affects cost and effective context usage.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

By the end you should be able to explain the concept in plain language, run the example code yourself, and avoid the common mistakes listed at the bottom of the page.

### Why This Matters

**Why learn Token Economics?** On the modern AI systems track, this topic is a gate — later modules assume you are comfortable with the vocabulary, code patterns, and failure modes covered here.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

Skimming only the bullets is not enough for interviews or production work. Read the full explanation, complete the walkthrough, and intentionally trigger at least one mistake in the REPL so you recognize the error message when it appears in a real project.

### Token Economics — Full Explanation

Pricing by input/output tokens. Context window limits. Tokenization affects cost and effective context usage.

### Concept-by-Concept Breakdown

Each core idea deserves more than a one-line summary. Expand each point below before you run the code:

**1. Tokens not words — subword units**

Tokens not words — subword units. In **Token Economics**, this idea is not optional theory — it directly affects whether your implementation behaves correctly on edge cases. When you run the code example, pause after each step and ask how this point would change if the input data were larger, noisier, or slightly different.

Think of a concrete scenario in **Large Language Models Overview** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**2. Input + output tokens both billed**

Input + output tokens both billed. Teams working on modern AI systems code review for this explicitly because violations cause subtle bugs that unit tests often miss. A practical habit: keep a one-line comment in your notebook linking each key block of code to this principle.

Think of a concrete scenario in **Large Language Models Overview** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**3. Longer context = higher cost and latency**

Longer context = higher cost and latency. You will revisit this while studying **Large Language Models Overview** and in later modules where the same pattern appears with more complexity. If anything feels abstract now, return after running the example — concrete output usually makes the idea click.

Think of a concrete scenario in **Large Language Models Overview** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**4. Count tokens before API calls**

Count tokens before API calls. Interviewers and senior engineers expect you to explain **Token Economics** using ideas like this, not only API names. Practice saying it aloud in one sentence, then point to where the example demonstrates it.

Think of a concrete scenario in **Large Language Models Overview** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

### How It Works (Step by Step)

Follow this sequence when applying the concept in a project or interview setting:

1. Tokens not words — subword units
2. Input + output tokens both billed
3. Longer context = higher cost and latency
4. Count tokens before API calls

At each step, sanity-check inputs and outputs — most errors in **Token Economics** come from skipping validation between steps.

### Real-World Applications

**Token Economics** shows up in real projects more often than textbook examples suggest:

- Code completion and review tools integrated into developer workflows
- Multimodal search across images, text, and structured metadata
- Evaluation and guardrail pipelines before shipping LLM features to users

In each case, the details from this section inform how you structure code, choose libraries, and validate results before shipping.

### Example Walkthrough

Do not copy-paste blindly. Walk through the program in four phases: **(1)** read imports, **(2)** trace data creation, **(3)** follow the main operation, **(4)** compare printed output.

**Line-by-line notes:**

- \`text = "Machine learning is transforming industries"\` — assignment; note the variable name and predict its value before running the next line.
- \`print(f"Approx tokens: {len(text) // 4}")\` — prints so you can compare against the expected output panel line by line.

**Expected output:**

\`\`\`
Approx tokens: 10
\`\`\`

If your output differs, diff the first mismatching line, then walk backward to the line that produced it. Small floating-point differences are normal; wrong types or missing keys are not.

**Challenge:** Change one literal or argument in the example (for **Token Economics**) and predict the new output before re-running. This single habit builds deeper understanding than re-reading the article.

### Best Practices Checklist

Use this checklist before you mark the section complete:

- I can explain: Tokens not words — subword units
- I can explain: Input + output tokens both billed
- I can explain: Longer context = higher cost and latency
- I can explain: Count tokens before API calls
- I ran the example and matched the expected output for **Token Economics**.
- I read the common-mistakes panel and can describe how to avoid at least two items.

### Interview & Review Questions

If you are preparing for courses, certifications, or technical interviews, practice answering aloud:

- Explain **Token Economics** to a junior developer in two minutes.
- What goes wrong if you ignore best practices for Token Economics?
- How does Token Economics connect to the rest of **Large Language Models Overview**?
- What does it mean that "Tokens not words — subword units"? Give an example.

### Summary

To recap **Token Economics**: tokens not words — subword units; input + output tokens both billed; longer context = higher cost and latency; count tokens before api calls.

Keep this summary in your own words in the notes panel — teaching the idea to someone else (or your future self) is the fastest way to know you truly understand it.

### Runnable Code

The complete runnable program and its output are shown in the **Code Example** and **Output** panels below this article.`,
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
          ],
          commonMistakes: [
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`,
            `Deploying without output moderation on user-facing endpoints`,
            `Trusting LLM outputs as facts without retrieval or verification`
          ]
        },
        {
          id: `eval`,
          title: `LLM Evaluation`,
          content: `### Introduction

MMLU, HumanEval, MT-Bench benchmarks. Custom eval sets for domain tasks.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

By the end you should be able to explain the concept in plain language, run the example code yourself, and avoid the common mistakes listed at the bottom of the page.

### Why This Matters

**Why learn LLM Evaluation?** On the modern AI systems track, this topic is a gate — later modules assume you are comfortable with the vocabulary, code patterns, and failure modes covered here.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

Skimming only the bullets is not enough for interviews or production work. Read the full explanation, complete the walkthrough, and intentionally trigger at least one mistake in the REPL so you recognize the error message when it appears in a real project.

### LLM Evaluation — Full Explanation

MMLU, HumanEval, MT-Bench benchmarks. Custom eval sets for domain tasks.

LLM-as-judge for subjective quality. Take a moment to connect this sentence to **LLM Evaluation** — what would change if the input were twice as large, missing values, or drawn from a different domain?

### Concept-by-Concept Breakdown

Each core idea deserves more than a one-line summary. Expand each point below before you run the code:

**1. No single benchmark captures all capabilities**

No single benchmark captures all capabilities. In **LLM Evaluation**, this idea is not optional theory — it directly affects whether your implementation behaves correctly on edge cases. When you run the code example, pause after each step and ask how this point would change if the input data were larger, noisier, or slightly different.

Think of a concrete scenario in **Large Language Models Overview** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**2. HumanEval for code generation quality**

HumanEval for code generation quality. Teams working on modern AI systems code review for this explicitly because violations cause subtle bugs that unit tests often miss. A practical habit: keep a one-line comment in your notebook linking each key block of code to this principle.

Think of a concrete scenario in **Large Language Models Overview** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**3. Build domain-specific eval sets**

Build domain-specific eval sets. You will revisit this while studying **Large Language Models Overview** and in later modules where the same pattern appears with more complexity. If anything feels abstract now, return after running the example — concrete output usually makes the idea click.

Think of a concrete scenario in **Large Language Models Overview** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**4. Automated eval with stronger model as judge**

Automated eval with stronger model as judge. Interviewers and senior engineers expect you to explain **LLM Evaluation** using ideas like this, not only API names. Practice saying it aloud in one sentence, then point to where the example demonstrates it.

Think of a concrete scenario in **Large Language Models Overview** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

### How It Works (Step by Step)

Follow this sequence when applying the concept in a project or interview setting:

1. No single benchmark captures all capabilities
2. HumanEval for code generation quality
3. Build domain-specific eval sets
4. Automated eval with stronger model as judge

At each step, sanity-check inputs and outputs — most errors in **LLM Evaluation** come from skipping validation between steps.

### Real-World Applications

**LLM Evaluation** shows up in real projects more often than textbook examples suggest:

- Multimodal search across images, text, and structured metadata
- Evaluation and guardrail pipelines before shipping LLM features to users
- Document Q&A assistants with retrieval-augmented generation over private corpora

In each case, the details from this section inform how you structure code, choose libraries, and validate results before shipping.

### Hands-On Practice

Open a Python REPL or notebook and type a minimal version of **LLM Evaluation** from memory. Even five lines of working code solidify more understanding than re-reading this article.

### Best Practices Checklist

Use this checklist before you mark the section complete:

- I can explain: No single benchmark captures all capabilities
- I can explain: HumanEval for code generation quality
- I can explain: Build domain-specific eval sets
- I can explain: Automated eval with stronger model as judge
- I ran the example and matched the expected output for **LLM Evaluation**.
- I read the common-mistakes panel and can describe how to avoid at least two items.

### Interview & Review Questions

If you are preparing for courses, certifications, or technical interviews, practice answering aloud:

- Explain **LLM Evaluation** to a junior developer in two minutes.
- What goes wrong if you ignore best practices for LLM Evaluation?
- How does LLM Evaluation connect to the rest of **Large Language Models Overview**?
- What does it mean that "No single benchmark captures all capabilities"? Give an example.

### Summary

To recap **LLM Evaluation**: no single benchmark captures all capabilities; humaneval for code generation quality; build domain-specific eval sets; automated eval with stronger model as judge.

Keep this summary in your own words in the notes panel — teaching the idea to someone else (or your future self) is the fastest way to know you truly understand it.`,
          keyPoints: [
            `No single benchmark captures all capabilities`,
            `HumanEval for code generation quality`,
            `Build domain-specific eval sets`,
            `Automated eval with stronger model as judge`
          ],
          commonMistakes: [
            `Wrong sequence length after tokenization — truncating critical context`,
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`,
            `Deploying without output moderation on user-facing endpoints`
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
      estimatedMinutes: 42,
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
          content: `### Introduction

System message (role/behavior) + user message (task) + optional examples. Clear, specific instructions outperform vague requests.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

By the end you should be able to explain the concept in plain language, run the example code yourself, and avoid the common mistakes listed at the bottom of the page.

### Why This Matters

**Why learn Prompt Structure?** On the modern AI systems track, this topic is a gate — later modules assume you are comfortable with the vocabulary, code patterns, and failure modes covered here.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

Skimming only the bullets is not enough for interviews or production work. Read the full explanation, complete the walkthrough, and intentionally trigger at least one mistake in the REPL so you recognize the error message when it appears in a real project.

### Prompt Structure — Full Explanation

System message (role/behavior) + user message (task) + optional examples. Clear, specific instructions outperform vague requests.

### Concept-by-Concept Breakdown

Each core idea deserves more than a one-line summary. Expand each point below before you run the code:

**1. System prompt sets behavior and constraints**

System prompt sets behavior and constraints. In **Prompt Structure**, this idea is not optional theory — it directly affects whether your implementation behaves correctly on edge cases. When you run the code example, pause after each step and ask how this point would change if the input data were larger, noisier, or slightly different.

Think of a concrete scenario in **Prompt Engineering** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**2. Be specific about format, length, tone**

Be specific about format, length, tone. Teams working on modern AI systems code review for this explicitly because violations cause subtle bugs that unit tests often miss. A practical habit: keep a one-line comment in your notebook linking each key block of code to this principle.

Think of a concrete scenario in **Prompt Engineering** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**3. Include examples for complex formats (few-shot)**

Include examples for complex formats (few-shot). You will revisit this while studying **Prompt Engineering** and in later modules where the same pattern appears with more complexity. If anything feels abstract now, return after running the example — concrete output usually makes the idea click.

Think of a concrete scenario in **Prompt Engineering** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**4. Iterate and refine prompts empirically**

Iterate and refine prompts empirically. Interviewers and senior engineers expect you to explain **Prompt Structure** using ideas like this, not only API names. Practice saying it aloud in one sentence, then point to where the example demonstrates it.

Think of a concrete scenario in **Prompt Engineering** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

### How It Works (Step by Step)

Follow this sequence when applying the concept in a project or interview setting:

1. System prompt sets behavior and constraints
2. Be specific about format, length, tone
3. Include examples for complex formats (few-shot)
4. Iterate and refine prompts empirically

At each step, sanity-check inputs and outputs — most errors in **Prompt Structure** come from skipping validation between steps.

### Real-World Applications

**Prompt Structure** shows up in real projects more often than textbook examples suggest:

- Multimodal search across images, text, and structured metadata
- Evaluation and guardrail pipelines before shipping LLM features to users
- Document Q&A assistants with retrieval-augmented generation over private corpora

In each case, the details from this section inform how you structure code, choose libraries, and validate results before shipping.

### Example Walkthrough

Do not copy-paste blindly. Walk through the program in four phases: **(1)** read imports, **(2)** trace data creation, **(3)** follow the main operation, **(4)** compare printed output.

**Line-by-line notes:**

- \`prompt = """System: You are a Python tutor. Explain concepts simply.\` — assignment; note the variable name and predict its value before running the next line.
- \`User: Explain list comprehensions with an example.\` — execute this line in isolation if the full script fails; inspect types with \`type(...)\` or \`shape\` for arrays.
- \`Assistant:"""\` — execute this line in isolation if the full script fails; inspect types with \`type(...)\` or \`shape\` for arrays.
- \`print(len(prompt))\` — prints so you can compare against the expected output panel line by line.

**Challenge:** Change one literal or argument in the example (for **Prompt Structure**) and predict the new output before re-running. This single habit builds deeper understanding than re-reading the article.

### Best Practices Checklist

Use this checklist before you mark the section complete:

- I can explain: System prompt sets behavior and constraints
- I can explain: Be specific about format, length, tone
- I can explain: Include examples for complex formats (few-shot)
- I can explain: Iterate and refine prompts empirically
- I ran the example and matched the expected output for **Prompt Structure**.
- I read the common-mistakes panel and can describe how to avoid at least two items.

### Interview & Review Questions

If you are preparing for courses, certifications, or technical interviews, practice answering aloud:

- Explain **Prompt Structure** to a junior developer in two minutes.
- What goes wrong if you ignore best practices for Prompt Structure?
- How does Prompt Structure connect to the rest of **Prompt Engineering**?
- What does it mean that "System prompt sets behavior and constraints"? Give an example.

### Summary

To recap **Prompt Structure**: system prompt sets behavior and constraints; be specific about format, length, tone; include examples for complex formats (few-shot); iterate and refine prompts empirically.

Keep this summary in your own words in the notes panel — teaching the idea to someone else (or your future self) is the fastest way to know you truly understand it.

### Runnable Code

The complete runnable program and its output are shown in the **Code Example** and **Output** panels below this article.`,
          example: `prompt = """System: You are a Python tutor. Explain concepts simply.

User: Explain list comprehensions with an example.

Assistant:"""
print(len(prompt))`,
          keyPoints: [
            `System prompt sets behavior and constraints`,
            `Be specific about format, length, tone`,
            `Include examples for complex formats (few-shot)`,
            `Iterate and refine prompts empirically`
          ],
          commonMistakes: [
            `Measuring only fluency — not factual accuracy or task success`,
            `Deploying without output moderation on user-facing endpoints`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Trusting LLM outputs as facts without retrieval or verification`
          ]
        },
        {
          id: `cot`,
          title: `Chain-of-Thought (CoT)`,
          content: `### Introduction

Add "Let's think step by step" or demonstrate reasoning steps. Dramatically improves math and logic performance.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

By the end you should be able to explain the concept in plain language, run the example code yourself, and avoid the common mistakes listed at the bottom of the page.

### Why This Matters

**Why learn Chain-of-Thought (CoT)?** On the modern AI systems track, this topic is a gate — later modules assume you are comfortable with the vocabulary, code patterns, and failure modes covered here.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

Skimming only the bullets is not enough for interviews or production work. Read the full explanation, complete the walkthrough, and intentionally trigger at least one mistake in the REPL so you recognize the error message when it appears in a real project.

### Chain-of-Thought (CoT) — Full Explanation

Add "Let's think step by step" or demonstrate reasoning steps. Dramatically improves math and logic performance.

### Concept-by-Concept Breakdown

Each core idea deserves more than a one-line summary. Expand each point below before you run the code:

**1. Zero-shot CoT: add "think step by step"**

Zero-shot CoT: add "think step by step". In **Chain-of-Thought (CoT)**, this idea is not optional theory — it directly affects whether your implementation behaves correctly on edge cases. When you run the code example, pause after each step and ask how this point would change if the input data were larger, noisier, or slightly different.

Think of a concrete scenario in **Prompt Engineering** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**2. Few-shot CoT: provide reasoning examples**

Few-shot CoT: provide reasoning examples. Teams working on modern AI systems code review for this explicitly because violations cause subtle bugs that unit tests often miss. A practical habit: keep a one-line comment in your notebook linking each key block of code to this principle.

Think of a concrete scenario in **Prompt Engineering** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**3. Self-consistency: sample multiple chains, majority vote**

Self-consistency: sample multiple chains, majority vote. You will revisit this while studying **Prompt Engineering** and in later modules where the same pattern appears with more complexity. If anything feels abstract now, return after running the example — concrete output usually makes the idea click.

Think of a concrete scenario in **Prompt Engineering** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**4. Tree-of-thought for complex planning**

Tree-of-thought for complex planning. Interviewers and senior engineers expect you to explain **Chain-of-Thought (CoT)** using ideas like this, not only API names. Practice saying it aloud in one sentence, then point to where the example demonstrates it.

Think of a concrete scenario in **Prompt Engineering** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

### How It Works (Step by Step)

Follow this sequence when applying the concept in a project or interview setting:

1. Zero-shot CoT: add "think step by step"
2. Few-shot CoT: provide reasoning examples
3. Self-consistency: sample multiple chains, majority vote
4. Tree-of-thought for complex planning

At each step, sanity-check inputs and outputs — most errors in **Chain-of-Thought (CoT)** come from skipping validation between steps.

### Real-World Applications

**Chain-of-Thought (CoT)** shows up in real projects more often than textbook examples suggest:

- Code completion and review tools integrated into developer workflows
- Multimodal search across images, text, and structured metadata
- Evaluation and guardrail pipelines before shipping LLM features to users

In each case, the details from this section inform how you structure code, choose libraries, and validate results before shipping.

### Example Walkthrough

Do not copy-paste blindly. Walk through the program in four phases: **(1)** read imports, **(2)** trace data creation, **(3)** follow the main operation, **(4)** compare printed output.

**Line-by-line notes:**

- \`prompt = "Q: A store has 23 apples. They buy 6 boxes of 12 apples. How many now?\\nA: Let's think step by step.\\n23 + (6 * 12) = 23 + 72 = 95\\n\\nQ: ..."\` — assignment; note the variable name and predict its value before running the next line.
- \`print("CoT improves reasoning")\` — prints so you can compare against the expected output panel line by line.

**Expected output:**

\`\`\`
CoT improves reasoning
\`\`\`

If your output differs, diff the first mismatching line, then walk backward to the line that produced it. Small floating-point differences are normal; wrong types or missing keys are not.

**Challenge:** Change one literal or argument in the example (for **Chain-of-Thought (CoT)**) and predict the new output before re-running. This single habit builds deeper understanding than re-reading the article.

### Best Practices Checklist

Use this checklist before you mark the section complete:

- I can explain: Zero-shot CoT: add "think step by step"
- I can explain: Few-shot CoT: provide reasoning examples
- I can explain: Self-consistency: sample multiple chains, majority vote
- I can explain: Tree-of-thought for complex planning
- I ran the example and matched the expected output for **Chain-of-Thought (CoT)**.
- I read the common-mistakes panel and can describe how to avoid at least two items.

### Interview & Review Questions

If you are preparing for courses, certifications, or technical interviews, practice answering aloud:

- Explain **Chain-of-Thought (CoT)** to a junior developer in two minutes.
- What goes wrong if you ignore best practices for Chain-of-Thought (CoT)?
- How does Chain-of-Thought (CoT) connect to the rest of **Prompt Engineering**?
- What does it mean that "Zero-shot CoT: add "think step by step""? Give an example.

### Summary

To recap **Chain-of-Thought (CoT)**: zero-shot cot: add "think step by step"; few-shot cot: provide reasoning examples; self-consistency: sample multiple chains, majority vote; tree-of-thought for complex planning.

Keep this summary in your own words in the notes panel — teaching the idea to someone else (or your future self) is the fastest way to know you truly understand it.

### Runnable Code

The complete runnable program and its output are shown in the **Code Example** and **Output** panels below this article.`,
          example: `prompt = "Q: A store has 23 apples. They buy 6 boxes of 12 apples. How many now?\\nA: Let's think step by step.\\n23 + (6 * 12) = 23 + 72 = 95\\n\\nQ: ..."
print("CoT improves reasoning")`,
          output: `CoT improves reasoning`,
          keyPoints: [
            `Zero-shot CoT: add "think step by step"`,
            `Few-shot CoT: provide reasoning examples`,
            `Self-consistency: sample multiple chains, majority vote`,
            `Tree-of-thought for complex planning`
          ],
          commonMistakes: [
            `Deploying without output moderation on user-facing endpoints`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`
          ]
        },
        {
          id: `few-shot`,
          title: `Few-Shot Learning`,
          content: `### Introduction

Provide 2-5 input-output examples in prompt. Model learns pattern without weight updates.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

By the end you should be able to explain the concept in plain language, run the example code yourself, and avoid the common mistakes listed at the bottom of the page.

### Why This Matters

**Why learn Few-Shot Learning?** On the modern AI systems track, this topic is a gate — later modules assume you are comfortable with the vocabulary, code patterns, and failure modes covered here.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

Skimming only the bullets is not enough for interviews or production work. Read the full explanation, complete the walkthrough, and intentionally trigger at least one mistake in the REPL so you recognize the error message when it appears in a real project.

### Few-Shot Learning — Full Explanation

Provide 2-5 input-output examples in prompt. Model learns pattern without weight updates.

Example selection matters. Take a moment to connect this sentence to **Few-Shot Learning** — what would change if the input were twice as large, missing values, or drawn from a different domain?

### Concept-by-Concept Breakdown

Each core idea deserves more than a one-line summary. Expand each point below before you run the code:

**1. Examples should be diverse and representative**

Examples should be diverse and representative. In **Few-Shot Learning**, this idea is not optional theory — it directly affects whether your implementation behaves correctly on edge cases. When you run the code example, pause after each step and ask how this point would change if the input data were larger, noisier, or slightly different.

Think of a concrete scenario in **Prompt Engineering** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**2. Order of examples affects performance**

Order of examples affects performance. Teams working on modern AI systems code review for this explicitly because violations cause subtle bugs that unit tests often miss. A practical habit: keep a one-line comment in your notebook linking each key block of code to this principle.

Think of a concrete scenario in **Prompt Engineering** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**3. More examples help up to a point**

More examples help up to a point. You will revisit this while studying **Prompt Engineering** and in later modules where the same pattern appears with more complexity. If anything feels abstract now, return after running the example — concrete output usually makes the idea click.

Think of a concrete scenario in **Prompt Engineering** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**4. Dynamic example retrieval from database**

Dynamic example retrieval from database. Interviewers and senior engineers expect you to explain **Few-Shot Learning** using ideas like this, not only API names. Practice saying it aloud in one sentence, then point to where the example demonstrates it.

Think of a concrete scenario in **Prompt Engineering** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

### How It Works (Step by Step)

Follow this sequence when applying the concept in a project or interview setting:

1. Examples should be diverse and representative
2. Order of examples affects performance
3. More examples help up to a point
4. Dynamic example retrieval from database

At each step, sanity-check inputs and outputs — most errors in **Few-Shot Learning** come from skipping validation between steps.

### Real-World Applications

**Few-Shot Learning** shows up in real projects more often than textbook examples suggest:

- Code completion and review tools integrated into developer workflows
- Multimodal search across images, text, and structured metadata
- Evaluation and guardrail pipelines before shipping LLM features to users

In each case, the details from this section inform how you structure code, choose libraries, and validate results before shipping.

### Hands-On Practice

Open a Python REPL or notebook and type a minimal version of **Few-Shot Learning** from memory. Even five lines of working code solidify more understanding than re-reading this article.

### Best Practices Checklist

Use this checklist before you mark the section complete:

- I can explain: Examples should be diverse and representative
- I can explain: Order of examples affects performance
- I can explain: More examples help up to a point
- I can explain: Dynamic example retrieval from database
- I ran the example and matched the expected output for **Few-Shot Learning**.
- I read the common-mistakes panel and can describe how to avoid at least two items.

### Interview & Review Questions

If you are preparing for courses, certifications, or technical interviews, practice answering aloud:

- Explain **Few-Shot Learning** to a junior developer in two minutes.
- What goes wrong if you ignore best practices for Few-Shot Learning?
- How does Few-Shot Learning connect to the rest of **Prompt Engineering**?
- What does it mean that "Examples should be diverse and representative"? Give an example.

### Summary

To recap **Few-Shot Learning**: examples should be diverse and representative; order of examples affects performance; more examples help up to a point; dynamic example retrieval from database.

Keep this summary in your own words in the notes panel — teaching the idea to someone else (or your future self) is the fastest way to know you truly understand it.`,
          keyPoints: [
            `Examples should be diverse and representative`,
            `Order of examples affects performance`,
            `More examples help up to a point`,
            `Dynamic example retrieval from database`
          ],
          diagram: `Few-Shot Learning
Query → Embed → Retrieve → Augment Prompt → Generate`,
          commonMistakes: [
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`,
            `Deploying without output moderation on user-facing endpoints`,
            `Trusting LLM outputs as facts without retrieval or verification`
          ]
        },
        {
          id: `advanced-prompt`,
          title: `Advanced Techniques`,
          content: `### Introduction

ReAct (reasoning + acting), structured output (JSON mode), role prompting, prompt chaining, constitutional AI principles.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

By the end you should be able to explain the concept in plain language, run the example code yourself, and avoid the common mistakes listed at the bottom of the page.

### Why This Matters

**Why learn Advanced Techniques?** On the modern AI systems track, this topic is a gate — later modules assume you are comfortable with the vocabulary, code patterns, and failure modes covered here.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

Skimming only the bullets is not enough for interviews or production work. Read the full explanation, complete the walkthrough, and intentionally trigger at least one mistake in the REPL so you recognize the error message when it appears in a real project.

### Advanced Techniques — Full Explanation

ReAct (reasoning + acting), structured output (JSON mode), role prompting, prompt chaining, constitutional AI principles. Take a moment to connect this sentence to **Advanced Techniques** — what would change if the input were twice as large, missing values, or drawn from a different domain?

### Concept-by-Concept Breakdown

Each core idea deserves more than a one-line summary. Expand each point below before you run the code:

**1. JSON mode ensures parseable output**

JSON mode ensures parseable output. In **Advanced Techniques**, this idea is not optional theory — it directly affects whether your implementation behaves correctly on edge cases. When you run the code example, pause after each step and ask how this point would change if the input data were larger, noisier, or slightly different.

Think of a concrete scenario in **Prompt Engineering** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**2. Prompt chaining breaks complex tasks into steps**

Prompt chaining breaks complex tasks into steps. Teams working on modern AI systems code review for this explicitly because violations cause subtle bugs that unit tests often miss. A practical habit: keep a one-line comment in your notebook linking each key block of code to this principle.

Think of a concrete scenario in **Prompt Engineering** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**3. ReAct interleaves reasoning and tool calls**

ReAct interleaves reasoning and tool calls. You will revisit this while studying **Prompt Engineering** and in later modules where the same pattern appears with more complexity. If anything feels abstract now, return after running the example — concrete output usually makes the idea click.

Think of a concrete scenario in **Prompt Engineering** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**4. Test prompts systematically with eval sets**

Test prompts systematically with eval sets. Interviewers and senior engineers expect you to explain **Advanced Techniques** using ideas like this, not only API names. Practice saying it aloud in one sentence, then point to where the example demonstrates it.

Think of a concrete scenario in **Prompt Engineering** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

### How It Works (Step by Step)

Follow this sequence when applying the concept in a project or interview setting:

1. JSON mode ensures parseable output
2. Prompt chaining breaks complex tasks into steps
3. ReAct interleaves reasoning and tool calls
4. Test prompts systematically with eval sets

At each step, sanity-check inputs and outputs — most errors in **Advanced Techniques** come from skipping validation between steps.

### Real-World Applications

**Advanced Techniques** shows up in real projects more often than textbook examples suggest:

- Multimodal search across images, text, and structured metadata
- Evaluation and guardrail pipelines before shipping LLM features to users
- Document Q&A assistants with retrieval-augmented generation over private corpora

In each case, the details from this section inform how you structure code, choose libraries, and validate results before shipping.

### Hands-On Practice

Open a Python REPL or notebook and type a minimal version of **Advanced Techniques** from memory. Even five lines of working code solidify more understanding than re-reading this article.

### Best Practices Checklist

Use this checklist before you mark the section complete:

- I can explain: JSON mode ensures parseable output
- I can explain: Prompt chaining breaks complex tasks into steps
- I can explain: ReAct interleaves reasoning and tool calls
- I can explain: Test prompts systematically with eval sets
- I ran the example and matched the expected output for **Advanced Techniques**.
- I read the common-mistakes panel and can describe how to avoid at least two items.

### Interview & Review Questions

If you are preparing for courses, certifications, or technical interviews, practice answering aloud:

- Explain **Advanced Techniques** to a junior developer in two minutes.
- What goes wrong if you ignore best practices for Advanced Techniques?
- How does Advanced Techniques connect to the rest of **Prompt Engineering**?
- What does it mean that "JSON mode ensures parseable output"? Give an example.

### Summary

To recap **Advanced Techniques**: json mode ensures parseable output; prompt chaining breaks complex tasks into steps; react interleaves reasoning and tool calls; test prompts systematically with eval sets.

Keep this summary in your own words in the notes panel — teaching the idea to someone else (or your future self) is the fastest way to know you truly understand it.`,
          keyPoints: [
            `JSON mode ensures parseable output`,
            `Prompt chaining breaks complex tasks into steps`,
            `ReAct interleaves reasoning and tool calls`,
            `Test prompts systematically with eval sets`
          ],
          commonMistakes: [
            `Deploying without output moderation on user-facing endpoints`,
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`,
            `Deploying without output moderation on user-facing endpoints`
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
      estimatedMinutes: 42,
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
          content: `### Introduction

Query → retrieve relevant documents from vector DB → augment prompt with context → LLM generates grounded answer.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

By the end you should be able to explain the concept in plain language, run the example code yourself, and avoid the common mistakes listed at the bottom of the page.

### Why This Matters

**Why learn RAG Architecture?** On the modern AI systems track, this topic is a gate — later modules assume you are comfortable with the vocabulary, code patterns, and failure modes covered here.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

Skimming only the bullets is not enough for interviews or production work. Read the full explanation, complete the walkthrough, and intentionally trigger at least one mistake in the REPL so you recognize the error message when it appears in a real project.

### RAG Architecture — Full Explanation

Query → retrieve relevant documents from vector DB → augment prompt with context → LLM generates grounded answer. Take a moment to connect this sentence to **RAG Architecture** — what would change if the input were twice as large, missing values, or drawn from a different domain?

### Concept-by-Concept Breakdown

Each core idea deserves more than a one-line summary. Expand each point below before you run the code:

**1. RAG reduces hallucination on domain knowledge**

RAG reduces hallucination on domain knowledge. In **RAG Architecture**, this idea is not optional theory — it directly affects whether your implementation behaves correctly on edge cases. When you run the code example, pause after each step and ask how this point would change if the input data were larger, noisier, or slightly different.

Think of a concrete scenario in **RAG (Retrieval Augmented Generation)** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**2. Retrieval quality determines answer quality**

Retrieval quality determines answer quality. Teams working on modern AI systems code review for this explicitly because violations cause subtle bugs that unit tests often miss. A practical habit: keep a one-line comment in your notebook linking each key block of code to this principle.

Think of a concrete scenario in **RAG (Retrieval Augmented Generation)** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**3. Chunk size and overlap affect retrieval**

Chunk size and overlap affect retrieval. You will revisit this while studying **RAG (Retrieval Augmented Generation)** and in later modules where the same pattern appears with more complexity. If anything feels abstract now, return after running the example — concrete output usually makes the idea click.

Think of a concrete scenario in **RAG (Retrieval Augmented Generation)** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**4. Hybrid search: dense + keyword (BM25)**

Hybrid search: dense + keyword (BM25). Interviewers and senior engineers expect you to explain **RAG Architecture** using ideas like this, not only API names. Practice saying it aloud in one sentence, then point to where the example demonstrates it.

Think of a concrete scenario in **RAG (Retrieval Augmented Generation)** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

### How It Works (Step by Step)

Follow this sequence when applying the concept in a project or interview setting:

1. RAG reduces hallucination on domain knowledge
2. Retrieval quality determines answer quality
3. Chunk size and overlap affect retrieval
4. Hybrid search: dense + keyword (BM25)

At each step, sanity-check inputs and outputs — most errors in **RAG Architecture** come from skipping validation between steps.

### Real-World Applications

**RAG Architecture** shows up in real projects more often than textbook examples suggest:

- Document Q&A assistants with retrieval-augmented generation over private corpora
- Code completion and review tools integrated into developer workflows
- Multimodal search across images, text, and structured metadata

In each case, the details from this section inform how you structure code, choose libraries, and validate results before shipping.

### Hands-On Practice

Open a Python REPL or notebook and type a minimal version of **RAG Architecture** from memory. Even five lines of working code solidify more understanding than re-reading this article.

### Best Practices Checklist

Use this checklist before you mark the section complete:

- I can explain: RAG reduces hallucination on domain knowledge
- I can explain: Retrieval quality determines answer quality
- I can explain: Chunk size and overlap affect retrieval
- I can explain: Hybrid search: dense + keyword (BM25)
- I ran the example and matched the expected output for **RAG Architecture**.
- I read the common-mistakes panel and can describe how to avoid at least two items.

### Interview & Review Questions

If you are preparing for courses, certifications, or technical interviews, practice answering aloud:

- Explain **RAG Architecture** to a junior developer in two minutes.
- What goes wrong if you ignore best practices for RAG Architecture?
- How does RAG Architecture connect to the rest of **RAG (Retrieval Augmented Generation)**?
- What does it mean that "RAG reduces hallucination on domain knowledge"? Give an example.

### Summary

To recap **RAG Architecture**: rag reduces hallucination on domain knowledge; retrieval quality determines answer quality; chunk size and overlap affect retrieval; hybrid search: dense + keyword (bm25).

Keep this summary in your own words in the notes panel — teaching the idea to someone else (or your future self) is the fastest way to know you truly understand it.`,
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
          ],
          diagram: `RAG Architecture
Query → Embed → Retrieve → Augment Prompt → Generate`,
          commonMistakes: [
            `Wrong sequence length after tokenization — truncating critical context`,
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`
          ]
        },
        {
          id: `embeddings-rag`,
          title: `Embeddings for Retrieval`,
          content: `### Introduction

Embed documents and queries with embedding model (OpenAI, sentence-transformers). Store in vector DB (Pinecone, Chroma, FAISS).

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

By the end you should be able to explain the concept in plain language, run the example code yourself, and avoid the common mistakes listed at the bottom of the page.

### Why This Matters

**Why learn Embeddings for Retrieval?** On the modern AI systems track, this topic is a gate — later modules assume you are comfortable with the vocabulary, code patterns, and failure modes covered here.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

Skimming only the bullets is not enough for interviews or production work. Read the full explanation, complete the walkthrough, and intentionally trigger at least one mistake in the REPL so you recognize the error message when it appears in a real project.

### Embeddings for Retrieval — Full Explanation

Embed documents and queries with embedding model (OpenAI, sentence-transformers). Store in vector DB (Pinecone, Chroma, FAISS).

### Concept-by-Concept Breakdown

Each core idea deserves more than a one-line summary. Expand each point below before you run the code:

**1. Choose embedding model matching domain**

Choose embedding model matching domain. In **Embeddings for Retrieval**, this idea is not optional theory — it directly affects whether your implementation behaves correctly on edge cases. When you run the code example, pause after each step and ask how this point would change if the input data were larger, noisier, or slightly different.

Think of a concrete scenario in **RAG (Retrieval Augmented Generation)** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**2. Chunk documents 256-512 tokens typically**

Chunk documents 256-512 tokens typically. Teams working on modern AI systems code review for this explicitly because violations cause subtle bugs that unit tests often miss. A practical habit: keep a one-line comment in your notebook linking each key block of code to this principle.

Think of a concrete scenario in **RAG (Retrieval Augmented Generation)** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**3. Metadata filtering narrows search space**

Metadata filtering narrows search space. You will revisit this while studying **RAG (Retrieval Augmented Generation)** and in later modules where the same pattern appears with more complexity. If anything feels abstract now, return after running the example — concrete output usually makes the idea click.

Think of a concrete scenario in **RAG (Retrieval Augmented Generation)** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**4. Re-rank retrieved results with cross-encoder**

Re-rank retrieved results with cross-encoder. Interviewers and senior engineers expect you to explain **Embeddings for Retrieval** using ideas like this, not only API names. Practice saying it aloud in one sentence, then point to where the example demonstrates it.

Think of a concrete scenario in **RAG (Retrieval Augmented Generation)** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

### How It Works (Step by Step)

Follow this sequence when applying the concept in a project or interview setting:

1. Choose embedding model matching domain
2. Chunk documents 256-512 tokens typically
3. Metadata filtering narrows search space
4. Re-rank retrieved results with cross-encoder

At each step, sanity-check inputs and outputs — most errors in **Embeddings for Retrieval** come from skipping validation between steps.

### Real-World Applications

**Embeddings for Retrieval** shows up in real projects more often than textbook examples suggest:

- Multimodal search across images, text, and structured metadata
- Evaluation and guardrail pipelines before shipping LLM features to users
- Document Q&A assistants with retrieval-augmented generation over private corpora

In each case, the details from this section inform how you structure code, choose libraries, and validate results before shipping.

### Example Walkthrough

Do not copy-paste blindly. Walk through the program in four phases: **(1)** read imports, **(2)** trace data creation, **(3)** follow the main operation, **(4)** compare printed output.

**Line-by-line notes:**

- \`from sentence_transformers import SentenceTransformer\` — imports dependencies; verify the same versions in your environment (\`pip freeze\` or \`conda list\`).
- \`model = SentenceTransformer("all-MiniLM-L6-v2")\` — assignment; note the variable name and predict its value before running the next line.
- \`docs = ["Python is a programming language", "Machine learning uses data"]\` — assignment; note the variable name and predict its value before running the next line.
- \`embeddings = model.encode(docs)\` — assignment; note the variable name and predict its value before running the next line.
- \`print(embeddings.shape)\` — prints so you can compare against the expected output panel line by line.

**Challenge:** Change one literal or argument in the example (for **Embeddings for Retrieval**) and predict the new output before re-running. This single habit builds deeper understanding than re-reading the article.

### Best Practices Checklist

Use this checklist before you mark the section complete:

- I can explain: Choose embedding model matching domain
- I can explain: Chunk documents 256-512 tokens typically
- I can explain: Metadata filtering narrows search space
- I can explain: Re-rank retrieved results with cross-encoder
- I ran the example and matched the expected output for **Embeddings for Retrieval**.
- I read the common-mistakes panel and can describe how to avoid at least two items.

### Interview & Review Questions

If you are preparing for courses, certifications, or technical interviews, practice answering aloud:

- Explain **Embeddings for Retrieval** to a junior developer in two minutes.
- What goes wrong if you ignore best practices for Embeddings for Retrieval?
- How does Embeddings for Retrieval connect to the rest of **RAG (Retrieval Augmented Generation)**?
- What does it mean that "Choose embedding model matching domain"? Give an example.

### Summary

To recap **Embeddings for Retrieval**: choose embedding model matching domain; chunk documents 256-512 tokens typically; metadata filtering narrows search space; re-rank retrieved results with cross-encoder.

Keep this summary in your own words in the notes panel — teaching the idea to someone else (or your future self) is the fastest way to know you truly understand it.

### Runnable Code

The complete runnable program and its output are shown in the **Code Example** and **Output** panels below this article.`,
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
          ],
          diagram: `Embeddings for Retrieval
Tokens → Embedding → Self-Attention → FFN → Output`,
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Wrong sequence length after tokenization — truncating critical context`,
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Trusting LLM outputs as facts without retrieval or verification`
          ]
        },
        {
          id: `chunking`,
          title: `Document Chunking`,
          content: `### Introduction

Split documents into retrievable chunks. Recursive character splitting, semantic chunking.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

By the end you should be able to explain the concept in plain language, run the example code yourself, and avoid the common mistakes listed at the bottom of the page.

### Why This Matters

**Why learn Document Chunking?** On the modern AI systems track, this topic is a gate — later modules assume you are comfortable with the vocabulary, code patterns, and failure modes covered here.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

Skimming only the bullets is not enough for interviews or production work. Read the full explanation, complete the walkthrough, and intentionally trigger at least one mistake in the REPL so you recognize the error message when it appears in a real project.

### Document Chunking — Full Explanation

Split documents into retrievable chunks. Recursive character splitting, semantic chunking.

Overlap preserves context at boundaries. Take a moment to connect this sentence to **Document Chunking** — what would change if the input were twice as large, missing values, or drawn from a different domain?

### Concept-by-Concept Breakdown

Each core idea deserves more than a one-line summary. Expand each point below before you run the code:

**1. Too small chunks lose context**

Too small chunks lose context. In **Document Chunking**, this idea is not optional theory — it directly affects whether your implementation behaves correctly on edge cases. When you run the code example, pause after each step and ask how this point would change if the input data were larger, noisier, or slightly different.

Think of a concrete scenario in **RAG (Retrieval Augmented Generation)** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**2. Too large chunks dilute relevance**

Too large chunks dilute relevance. Teams working on modern AI systems code review for this explicitly because violations cause subtle bugs that unit tests often miss. A practical habit: keep a one-line comment in your notebook linking each key block of code to this principle.

Think of a concrete scenario in **RAG (Retrieval Augmented Generation)** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**3. 10-20% overlap between chunks common**

10-20% overlap between chunks common. You will revisit this while studying **RAG (Retrieval Augmented Generation)** and in later modules where the same pattern appears with more complexity. If anything feels abstract now, return after running the example — concrete output usually makes the idea click.

Think of a concrete scenario in **RAG (Retrieval Augmented Generation)** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**4. Parent-child chunking for hierarchical retrieval**

Parent-child chunking for hierarchical retrieval. Interviewers and senior engineers expect you to explain **Document Chunking** using ideas like this, not only API names. Practice saying it aloud in one sentence, then point to where the example demonstrates it.

Think of a concrete scenario in **RAG (Retrieval Augmented Generation)** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

### How It Works (Step by Step)

Follow this sequence when applying the concept in a project or interview setting:

1. Too small chunks lose context
2. Too large chunks dilute relevance
3. 10-20% overlap between chunks common
4. Parent-child chunking for hierarchical retrieval

At each step, sanity-check inputs and outputs — most errors in **Document Chunking** come from skipping validation between steps.

### Real-World Applications

**Document Chunking** shows up in real projects more often than textbook examples suggest:

- Code completion and review tools integrated into developer workflows
- Multimodal search across images, text, and structured metadata
- Evaluation and guardrail pipelines before shipping LLM features to users

In each case, the details from this section inform how you structure code, choose libraries, and validate results before shipping.

### Hands-On Practice

Open a Python REPL or notebook and type a minimal version of **Document Chunking** from memory. Even five lines of working code solidify more understanding than re-reading this article.

### Best Practices Checklist

Use this checklist before you mark the section complete:

- I can explain: Too small chunks lose context
- I can explain: Too large chunks dilute relevance
- I can explain: 10-20% overlap between chunks common
- I can explain: Parent-child chunking for hierarchical retrieval
- I ran the example and matched the expected output for **Document Chunking**.
- I read the common-mistakes panel and can describe how to avoid at least two items.

### Interview & Review Questions

If you are preparing for courses, certifications, or technical interviews, practice answering aloud:

- Explain **Document Chunking** to a junior developer in two minutes.
- What goes wrong if you ignore best practices for Document Chunking?
- How does Document Chunking connect to the rest of **RAG (Retrieval Augmented Generation)**?
- What does it mean that "Too small chunks lose context"? Give an example.

### Summary

To recap **Document Chunking**: too small chunks lose context; too large chunks dilute relevance; 10-20% overlap between chunks common; parent-child chunking for hierarchical retrieval.

Keep this summary in your own words in the notes panel — teaching the idea to someone else (or your future self) is the fastest way to know you truly understand it.`,
          keyPoints: [
            `Too small chunks lose context`,
            `Too large chunks dilute relevance`,
            `10-20% overlap between chunks common`,
            `Parent-child chunking for hierarchical retrieval`
          ],
          diagram: `Document Chunking
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`,
            `Deploying without output moderation on user-facing endpoints`,
            `Serving a model trained on preprocessed data without the same pipeline in production`
          ]
        },
        {
          id: `eval-rag`,
          title: `Evaluating RAG Systems`,
          content: `### Introduction

Retrieval metrics: recall@k, MRR. Generation metrics: faithfulness, relevance, answer correctness. RAGAS framework.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

By the end you should be able to explain the concept in plain language, run the example code yourself, and avoid the common mistakes listed at the bottom of the page.

### Why This Matters

**Why learn Evaluating RAG Systems?** On the modern AI systems track, this topic is a gate — later modules assume you are comfortable with the vocabulary, code patterns, and failure modes covered here.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

Skimming only the bullets is not enough for interviews or production work. Read the full explanation, complete the walkthrough, and intentionally trigger at least one mistake in the REPL so you recognize the error message when it appears in a real project.

### Evaluating RAG Systems — Full Explanation

Retrieval metrics: recall@k, MRR. Generation metrics: faithfulness, relevance, answer correctness.

### Concept-by-Concept Breakdown

Each core idea deserves more than a one-line summary. Expand each point below before you run the code:

**1. Evaluate retrieval and generation separately**

Evaluate retrieval and generation separately. In **Evaluating RAG Systems**, this idea is not optional theory — it directly affects whether your implementation behaves correctly on edge cases. When you run the code example, pause after each step and ask how this point would change if the input data were larger, noisier, or slightly different.

Think of a concrete scenario in **RAG (Retrieval Augmented Generation)** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**2. Faithfulness: answer grounded in retrieved context**

Faithfulness: answer grounded in retrieved context. Teams working on modern AI systems code review for this explicitly because violations cause subtle bugs that unit tests often miss. A practical habit: keep a one-line comment in your notebook linking each key block of code to this principle.

Think of a concrete scenario in **RAG (Retrieval Augmented Generation)** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**3. RAGAS automated RAG evaluation**

RAGAS automated RAG evaluation. You will revisit this while studying **RAG (Retrieval Augmented Generation)** and in later modules where the same pattern appears with more complexity. If anything feels abstract now, return after running the example — concrete output usually makes the idea click.

Think of a concrete scenario in **RAG (Retrieval Augmented Generation)** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**4. Human eval for production quality assurance**

Human eval for production quality assurance. Interviewers and senior engineers expect you to explain **Evaluating RAG Systems** using ideas like this, not only API names. Practice saying it aloud in one sentence, then point to where the example demonstrates it.

Think of a concrete scenario in **RAG (Retrieval Augmented Generation)** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

### How It Works (Step by Step)

Follow this sequence when applying the concept in a project or interview setting:

1. Evaluate retrieval and generation separately
2. Faithfulness: answer grounded in retrieved context
3. RAGAS automated RAG evaluation
4. Human eval for production quality assurance

At each step, sanity-check inputs and outputs — most errors in **Evaluating RAG Systems** come from skipping validation between steps.

### Real-World Applications

**Evaluating RAG Systems** shows up in real projects more often than textbook examples suggest:

- Multimodal search across images, text, and structured metadata
- Evaluation and guardrail pipelines before shipping LLM features to users
- Document Q&A assistants with retrieval-augmented generation over private corpora

In each case, the details from this section inform how you structure code, choose libraries, and validate results before shipping.

### Hands-On Practice

Open a Python REPL or notebook and type a minimal version of **Evaluating RAG Systems** from memory. Even five lines of working code solidify more understanding than re-reading this article.

### Best Practices Checklist

Use this checklist before you mark the section complete:

- I can explain: Evaluate retrieval and generation separately
- I can explain: Faithfulness: answer grounded in retrieved context
- I can explain: RAGAS automated RAG evaluation
- I can explain: Human eval for production quality assurance
- I ran the example and matched the expected output for **Evaluating RAG Systems**.
- I read the common-mistakes panel and can describe how to avoid at least two items.

### Interview & Review Questions

If you are preparing for courses, certifications, or technical interviews, practice answering aloud:

- Explain **Evaluating RAG Systems** to a junior developer in two minutes.
- What goes wrong if you ignore best practices for Evaluating RAG Systems?
- How does Evaluating RAG Systems connect to the rest of **RAG (Retrieval Augmented Generation)**?
- What does it mean that "Evaluate retrieval and generation separately"? Give an example.

### Summary

To recap **Evaluating RAG Systems**: evaluate retrieval and generation separately; faithfulness: answer grounded in retrieved context; ragas automated rag evaluation; human eval for production quality assurance.

Keep this summary in your own words in the notes panel — teaching the idea to someone else (or your future self) is the fastest way to know you truly understand it.`,
          keyPoints: [
            `Evaluate retrieval and generation separately`,
            `Faithfulness: answer grounded in retrieved context`,
            `RAGAS automated RAG evaluation`,
            `Human eval for production quality assurance`
          ],
          diagram: `Evaluating RAG Systems
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`,
            `Deploying without output moderation on user-facing endpoints`
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
      estimatedMinutes: 42,
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
          content: `### Introduction

Update all model weights on domain dataset. Expensive — requires significant GPU memory.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

By the end you should be able to explain the concept in plain language, run the example code yourself, and avoid the common mistakes listed at the bottom of the page.

### Why This Matters

**Why learn Full Fine-Tuning?** On the modern AI systems track, this topic is a gate — later modules assume you are comfortable with the vocabulary, code patterns, and failure modes covered here.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

Skimming only the bullets is not enough for interviews or production work. Read the full explanation, complete the walkthrough, and intentionally trigger at least one mistake in the REPL so you recognize the error message when it appears in a real project.

### Full Fine-Tuning — Full Explanation

Update all model weights on domain dataset. Expensive — requires significant GPU memory.

Best for large domain shift. Take a moment to connect this sentence to **Full Fine-Tuning** — what would change if the input were twice as large, missing values, or drawn from a different domain?

### Concept-by-Concept Breakdown

Each core idea deserves more than a one-line summary. Expand each point below before you run the code:

**1. Requires labeled instruction-response pairs**

Requires labeled instruction-response pairs. In **Full Fine-Tuning**, this idea is not optional theory — it directly affects whether your implementation behaves correctly on edge cases. When you run the code example, pause after each step and ask how this point would change if the input data were larger, noisier, or slightly different.

Think of a concrete scenario in **Fine-tuning & LoRA** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**2. Risk of catastrophic forgetting**

Risk of catastrophic forgetting. Teams working on modern AI systems code review for this explicitly because violations cause subtle bugs that unit tests often miss. A practical habit: keep a one-line comment in your notebook linking each key block of code to this principle.

Think of a concrete scenario in **Fine-tuning & LoRA** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**3. Multi-GPU needed for 7B+ models**

Multi-GPU needed for 7B+ models. You will revisit this while studying **Fine-tuning & LoRA** and in later modules where the same pattern appears with more complexity. If anything feels abstract now, return after running the example — concrete output usually makes the idea click.

Think of a concrete scenario in **Fine-tuning & LoRA** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**4. Learning rate much smaller than pretraining**

Learning rate much smaller than pretraining. Interviewers and senior engineers expect you to explain **Full Fine-Tuning** using ideas like this, not only API names. Practice saying it aloud in one sentence, then point to where the example demonstrates it.

Think of a concrete scenario in **Fine-tuning & LoRA** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

### How It Works (Step by Step)

Follow this sequence when applying the concept in a project or interview setting:

1. Requires labeled instruction-response pairs
2. Risk of catastrophic forgetting
3. Multi-GPU needed for 7B+ models
4. Learning rate much smaller than pretraining

At each step, sanity-check inputs and outputs — most errors in **Full Fine-Tuning** come from skipping validation between steps.

### Real-World Applications

**Full Fine-Tuning** shows up in real projects more often than textbook examples suggest:

- Document Q&A assistants with retrieval-augmented generation over private corpora
- Code completion and review tools integrated into developer workflows
- Multimodal search across images, text, and structured metadata

In each case, the details from this section inform how you structure code, choose libraries, and validate results before shipping.

### Hands-On Practice

Open a Python REPL or notebook and type a minimal version of **Full Fine-Tuning** from memory. Even five lines of working code solidify more understanding than re-reading this article.

### Best Practices Checklist

Use this checklist before you mark the section complete:

- I can explain: Requires labeled instruction-response pairs
- I can explain: Risk of catastrophic forgetting
- I can explain: Multi-GPU needed for 7B+ models
- I can explain: Learning rate much smaller than pretraining
- I ran the example and matched the expected output for **Full Fine-Tuning**.
- I read the common-mistakes panel and can describe how to avoid at least two items.

### Interview & Review Questions

If you are preparing for courses, certifications, or technical interviews, practice answering aloud:

- Explain **Full Fine-Tuning** to a junior developer in two minutes.
- What goes wrong if you ignore best practices for Full Fine-Tuning?
- How does Full Fine-Tuning connect to the rest of **Fine-tuning & LoRA**?
- What does it mean that "Requires labeled instruction-response pairs"? Give an example.

### Summary

To recap **Full Fine-Tuning**: requires labeled instruction-response pairs; risk of catastrophic forgetting; multi-gpu needed for 7b+ models; learning rate much smaller than pretraining.

Keep this summary in your own words in the notes panel — teaching the idea to someone else (or your future self) is the fastest way to know you truly understand it.`,
          keyPoints: [
            `Requires labeled instruction-response pairs`,
            `Risk of catastrophic forgetting`,
            `Multi-GPU needed for 7B+ models`,
            `Learning rate much smaller than pretraining`
          ],
          commonMistakes: [
            `Deploying without output moderation on user-facing endpoints`,
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`
          ]
        },
        {
          id: `lora`,
          title: `LoRA (Low-Rank Adaptation)`,
          content: `### Introduction

Freeze base model, add low-rank decomposition matrices to attention layers. Trains ~0.1% of parameters. PEFT standard.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

By the end you should be able to explain the concept in plain language, run the example code yourself, and avoid the common mistakes listed at the bottom of the page.

### Why This Matters

**Why learn LoRA (Low-Rank Adaptation)?** On the modern AI systems track, this topic is a gate — later modules assume you are comfortable with the vocabulary, code patterns, and failure modes covered here.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

Skimming only the bullets is not enough for interviews or production work. Read the full explanation, complete the walkthrough, and intentionally trigger at least one mistake in the REPL so you recognize the error message when it appears in a real project.

### LoRA (Low-Rank Adaptation) — Full Explanation

Freeze base model, add low-rank decomposition matrices to attention layers. Trains ~0.1% of parameters.

### Concept-by-Concept Breakdown

Each core idea deserves more than a one-line summary. Expand each point below before you run the code:

**1. LoRA rank r controls capacity vs efficiency**

LoRA rank r controls capacity vs efficiency. In **LoRA (Low-Rank Adaptation)**, this idea is not optional theory — it directly affects whether your implementation behaves correctly on edge cases. When you run the code example, pause after each step and ask how this point would change if the input data were larger, noisier, or slightly different.

Think of a concrete scenario in **Fine-tuning & LoRA** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**2. Target q_proj, v_proj in attention layers**

Target q_proj, v_proj in attention layers. Teams working on modern AI systems code review for this explicitly because violations cause subtle bugs that unit tests often miss. A practical habit: keep a one-line comment in your notebook linking each key block of code to this principle.

Think of a concrete scenario in **Fine-tuning & LoRA** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**3. QLoRA: 4-bit quantized base + LoRA adapters**

QLoRA: 4-bit quantized base + LoRA adapters. You will revisit this while studying **Fine-tuning & LoRA** and in later modules where the same pattern appears with more complexity. If anything feels abstract now, return after running the example — concrete output usually makes the idea click.

Think of a concrete scenario in **Fine-tuning & LoRA** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**4. Merge adapters into base for deployment**

Merge adapters into base for deployment. Interviewers and senior engineers expect you to explain **LoRA (Low-Rank Adaptation)** using ideas like this, not only API names. Practice saying it aloud in one sentence, then point to where the example demonstrates it.

Think of a concrete scenario in **Fine-tuning & LoRA** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

### How It Works (Step by Step)

Follow this sequence when applying the concept in a project or interview setting:

1. LoRA rank r controls capacity vs efficiency
2. Target q_proj, v_proj in attention layers
3. QLoRA: 4-bit quantized base + LoRA adapters
4. Merge adapters into base for deployment

At each step, sanity-check inputs and outputs — most errors in **LoRA (Low-Rank Adaptation)** come from skipping validation between steps.

### Real-World Applications

**LoRA (Low-Rank Adaptation)** shows up in real projects more often than textbook examples suggest:

- Multimodal search across images, text, and structured metadata
- Evaluation and guardrail pipelines before shipping LLM features to users
- Document Q&A assistants with retrieval-augmented generation over private corpora

In each case, the details from this section inform how you structure code, choose libraries, and validate results before shipping.

### Example Walkthrough

Do not copy-paste blindly. Walk through the program in four phases: **(1)** read imports, **(2)** trace data creation, **(3)** follow the main operation, **(4)** compare printed output.

**Line-by-line notes:**

- \`print("LoRA: W + B@A with low rank r")\` — prints so you can compare against the expected output panel line by line.

**Expected output:**

\`\`\`
LoRA: W + B@A with low rank r
\`\`\`

If your output differs, diff the first mismatching line, then walk backward to the line that produced it. Small floating-point differences are normal; wrong types or missing keys are not.

**Challenge:** Change one literal or argument in the example (for **LoRA (Low-Rank Adaptation)**) and predict the new output before re-running. This single habit builds deeper understanding than re-reading the article.

### Best Practices Checklist

Use this checklist before you mark the section complete:

- I can explain: LoRA rank r controls capacity vs efficiency
- I can explain: Target q_proj, v_proj in attention layers
- I can explain: QLoRA: 4-bit quantized base + LoRA adapters
- I can explain: Merge adapters into base for deployment
- I ran the example and matched the expected output for **LoRA (Low-Rank Adaptation)**.
- I read the common-mistakes panel and can describe how to avoid at least two items.

### Interview & Review Questions

If you are preparing for courses, certifications, or technical interviews, practice answering aloud:

- Explain **LoRA (Low-Rank Adaptation)** to a junior developer in two minutes.
- What goes wrong if you ignore best practices for LoRA (Low-Rank Adaptation)?
- How does LoRA (Low-Rank Adaptation) connect to the rest of **Fine-tuning & LoRA**?
- What does it mean that "LoRA rank r controls capacity vs efficiency"? Give an example.

### Summary

To recap **LoRA (Low-Rank Adaptation)**: lora rank r controls capacity vs efficiency; target q_proj, v_proj in attention layers; qlora: 4-bit quantized base + lora adapters; merge adapters into base for deployment.

Keep this summary in your own words in the notes panel — teaching the idea to someone else (or your future self) is the fastest way to know you truly understand it.

### Runnable Code

The complete runnable program and its output are shown in the **Code Example** and **Output** panels below this article.`,
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
          ],
          diagram: `LoRA (Low-Rank Adaptation)
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Deploying without output moderation on user-facing endpoints`,
            `Wrong sequence length after tokenization — truncating critical context`,
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`
          ]
        },
        {
          id: `instruction`,
          title: `Instruction Tuning`,
          content: `### Introduction

Fine-tune on (instruction, response) pairs. Alpaca, Dolly datasets. Aligns model to follow user instructions.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

By the end you should be able to explain the concept in plain language, run the example code yourself, and avoid the common mistakes listed at the bottom of the page.

### Why This Matters

**Why learn Instruction Tuning?** On the modern AI systems track, this topic is a gate — later modules assume you are comfortable with the vocabulary, code patterns, and failure modes covered here.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

Skimming only the bullets is not enough for interviews or production work. Read the full explanation, complete the walkthrough, and intentionally trigger at least one mistake in the REPL so you recognize the error message when it appears in a real project.

### Instruction Tuning — Full Explanation

Fine-tune on (instruction, response) pairs. Alpaca, Dolly datasets. Aligns model to follow user instructions.

### Concept-by-Concept Breakdown

Each core idea deserves more than a one-line summary. Expand each point below before you run the code:

**1. Instruction format: ### Instruction / ### Response**

Instruction format: ### Instruction / ### Response. In **Instruction Tuning**, this idea is not optional theory — it directly affects whether your implementation behaves correctly on edge cases. When you run the code example, pause after each step and ask how this point would change if the input data were larger, noisier, or slightly different.

Think of a concrete scenario in **Fine-tuning & LoRA** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**2. Quality over quantity for instruction data**

Quality over quantity for instruction data. Teams working on modern AI systems code review for this explicitly because violations cause subtle bugs that unit tests often miss. A practical habit: keep a one-line comment in your notebook linking each key block of code to this principle.

Think of a concrete scenario in **Fine-tuning & LoRA** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**3. Covers diverse task types**

Covers diverse task types. You will revisit this while studying **Fine-tuning & LoRA** and in later modules where the same pattern appears with more complexity. If anything feels abstract now, return after running the example — concrete output usually makes the idea click.

Think of a concrete scenario in **Fine-tuning & LoRA** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**4. Foundation for chat model behavior**

Foundation for chat model behavior. Interviewers and senior engineers expect you to explain **Instruction Tuning** using ideas like this, not only API names. Practice saying it aloud in one sentence, then point to where the example demonstrates it.

Think of a concrete scenario in **Fine-tuning & LoRA** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

### How It Works (Step by Step)

Follow this sequence when applying the concept in a project or interview setting:

1. Instruction format: ### Instruction / ### Response
2. Quality over quantity for instruction data
3. Covers diverse task types
4. Foundation for chat model behavior

At each step, sanity-check inputs and outputs — most errors in **Instruction Tuning** come from skipping validation between steps.

### Real-World Applications

**Instruction Tuning** shows up in real projects more often than textbook examples suggest:

- Code completion and review tools integrated into developer workflows
- Multimodal search across images, text, and structured metadata
- Evaluation and guardrail pipelines before shipping LLM features to users

In each case, the details from this section inform how you structure code, choose libraries, and validate results before shipping.

### Hands-On Practice

Open a Python REPL or notebook and type a minimal version of **Instruction Tuning** from memory. Even five lines of working code solidify more understanding than re-reading this article.

### Best Practices Checklist

Use this checklist before you mark the section complete:

- I can explain: Instruction format: ### Instruction / ### Response
- I can explain: Quality over quantity for instruction data
- I can explain: Covers diverse task types
- I can explain: Foundation for chat model behavior
- I ran the example and matched the expected output for **Instruction Tuning**.
- I read the common-mistakes panel and can describe how to avoid at least two items.

### Interview & Review Questions

If you are preparing for courses, certifications, or technical interviews, practice answering aloud:

- Explain **Instruction Tuning** to a junior developer in two minutes.
- What goes wrong if you ignore best practices for Instruction Tuning?
- How does Instruction Tuning connect to the rest of **Fine-tuning & LoRA**?
- What does it mean that "Instruction format: ### Instruction / ### Response"? Give an example.

### Summary

To recap **Instruction Tuning**: instruction format: ### instruction / ### response; quality over quantity for instruction data; covers diverse task types; foundation for chat model behavior.

Keep this summary in your own words in the notes panel — teaching the idea to someone else (or your future self) is the fastest way to know you truly understand it.`,
          keyPoints: [
            `Instruction format: ### Instruction / ### Response`,
            `Quality over quantity for instruction data`,
            `Covers diverse task types`,
            `Foundation for chat model behavior`
          ],
          commonMistakes: [
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`,
            `Deploying without output moderation on user-facing endpoints`,
            `Trusting LLM outputs as facts without retrieval or verification`
          ]
        },
        {
          id: `rlhf`,
          title: `RLHF & DPO`,
          content: `### Introduction

Reinforcement Learning from Human Feedback: train reward model on preferences, optimize with PPO. DPO simpler alternative without reward model.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

By the end you should be able to explain the concept in plain language, run the example code yourself, and avoid the common mistakes listed at the bottom of the page.

### Why This Matters

**Why learn RLHF & DPO?** On the modern AI systems track, this topic is a gate — later modules assume you are comfortable with the vocabulary, code patterns, and failure modes covered here.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

Skimming only the bullets is not enough for interviews or production work. Read the full explanation, complete the walkthrough, and intentionally trigger at least one mistake in the REPL so you recognize the error message when it appears in a real project.

### RLHF & DPO — Full Explanation

Reinforcement Learning from Human Feedback: train reward model on preferences, optimize with PPO. DPO simpler alternative without reward model.

### Concept-by-Concept Breakdown

Each core idea deserves more than a one-line summary. Expand each point below before you run the code:

**1. RLHF makes models helpful and harmless**

RLHF makes models helpful and harmless. In **RLHF & DPO**, this idea is not optional theory — it directly affects whether your implementation behaves correctly on edge cases. When you run the code example, pause after each step and ask how this point would change if the input data were larger, noisier, or slightly different.

Think of a concrete scenario in **Fine-tuning & LoRA** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**2. Reward model trained on human preference comparisons**

Reward model trained on human preference comparisons. Teams working on modern AI systems code review for this explicitly because violations cause subtle bugs that unit tests often miss. A practical habit: keep a one-line comment in your notebook linking each key block of code to this principle.

Think of a concrete scenario in **Fine-tuning & LoRA** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**3. PPO fine-tunes against reward model**

PPO fine-tunes against reward model. You will revisit this while studying **Fine-tuning & LoRA** and in later modules where the same pattern appears with more complexity. If anything feels abstract now, return after running the example — concrete output usually makes the idea click.

Think of a concrete scenario in **Fine-tuning & LoRA** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**4. DPO direct preference optimization — simpler pipeline**

DPO direct preference optimization — simpler pipeline. Interviewers and senior engineers expect you to explain **RLHF & DPO** using ideas like this, not only API names. Practice saying it aloud in one sentence, then point to where the example demonstrates it.

Think of a concrete scenario in **Fine-tuning & LoRA** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

### How It Works (Step by Step)

Follow this sequence when applying the concept in a project or interview setting:

1. RLHF makes models helpful and harmless
2. Reward model trained on human preference comparisons
3. PPO fine-tunes against reward model
4. DPO direct preference optimization — simpler pipeline

At each step, sanity-check inputs and outputs — most errors in **RLHF & DPO** come from skipping validation between steps.

### Real-World Applications

**RLHF & DPO** shows up in real projects more often than textbook examples suggest:

- Multimodal search across images, text, and structured metadata
- Evaluation and guardrail pipelines before shipping LLM features to users
- Document Q&A assistants with retrieval-augmented generation over private corpora

In each case, the details from this section inform how you structure code, choose libraries, and validate results before shipping.

### Hands-On Practice

Open a Python REPL or notebook and type a minimal version of **RLHF & DPO** from memory. Even five lines of working code solidify more understanding than re-reading this article.

### Best Practices Checklist

Use this checklist before you mark the section complete:

- I can explain: RLHF makes models helpful and harmless
- I can explain: Reward model trained on human preference comparisons
- I can explain: PPO fine-tunes against reward model
- I can explain: DPO direct preference optimization — simpler pipeline
- I ran the example and matched the expected output for **RLHF & DPO**.
- I read the common-mistakes panel and can describe how to avoid at least two items.

### Interview & Review Questions

If you are preparing for courses, certifications, or technical interviews, practice answering aloud:

- Explain **RLHF & DPO** to a junior developer in two minutes.
- What goes wrong if you ignore best practices for RLHF & DPO?
- How does RLHF & DPO connect to the rest of **Fine-tuning & LoRA**?
- What does it mean that "RLHF makes models helpful and harmless"? Give an example.

### Summary

To recap **RLHF & DPO**: rlhf makes models helpful and harmless; reward model trained on human preference comparisons; ppo fine-tunes against reward model; dpo direct preference optimization — simpler pipeline.

Keep this summary in your own words in the notes panel — teaching the idea to someone else (or your future self) is the fastest way to know you truly understand it.`,
          keyPoints: [
            `RLHF makes models helpful and harmless`,
            `Reward model trained on human preference comparisons`,
            `PPO fine-tunes against reward model`,
            `DPO direct preference optimization — simpler pipeline`
          ],
          diagram: `RLHF & DPO
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Infinite loops when the loop variable never moves toward the exit condition`,
            `Exploration rate ε set to 0 too early — agent never discovers better actions`,
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`
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
      estimatedMinutes: 42,
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
          content: `### Introduction

Agent loop: observe → think → act (tool call) → observe result → repeat. LangChain, LlamaIndex frameworks.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

By the end you should be able to explain the concept in plain language, run the example code yourself, and avoid the common mistakes listed at the bottom of the page.

### Why This Matters

**Why learn LLM Agent Architecture?** On the modern AI systems track, this topic is a gate — later modules assume you are comfortable with the vocabulary, code patterns, and failure modes covered here.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

Skimming only the bullets is not enough for interviews or production work. Read the full explanation, complete the walkthrough, and intentionally trigger at least one mistake in the REPL so you recognize the error message when it appears in a real project.

### LLM Agent Architecture — Full Explanation

Agent loop: observe → think → act (tool call) → observe result → repeat. LangChain, LlamaIndex frameworks.

### Concept-by-Concept Breakdown

Each core idea deserves more than a one-line summary. Expand each point below before you run the code:

**1. ReAct pattern: Reason + Act interleaved**

ReAct pattern: Reason + Act interleaved. In **LLM Agent Architecture**, this idea is not optional theory — it directly affects whether your implementation behaves correctly on edge cases. When you run the code example, pause after each step and ask how this point would change if the input data were larger, noisier, or slightly different.

Think of a concrete scenario in **Agents & Tool Use** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**2. Tool definitions in prompt or function calling API**

Tool definitions in prompt or function calling API. Teams working on modern AI systems code review for this explicitly because violations cause subtle bugs that unit tests often miss. A practical habit: keep a one-line comment in your notebook linking each key block of code to this principle.

Think of a concrete scenario in **Agents & Tool Use** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**3. Memory: short-term (conversation) + long-term (vector store)**

Memory: short-term (conversation) + long-term (vector store). You will revisit this while studying **Agents & Tool Use** and in later modules where the same pattern appears with more complexity. If anything feels abstract now, return after running the example — concrete output usually makes the idea click.

Think of a concrete scenario in **Agents & Tool Use** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**4. Max iterations prevent infinite loops**

Max iterations prevent infinite loops. Interviewers and senior engineers expect you to explain **LLM Agent Architecture** using ideas like this, not only API names. Practice saying it aloud in one sentence, then point to where the example demonstrates it.

Think of a concrete scenario in **Agents & Tool Use** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

### How It Works (Step by Step)

Follow this sequence when applying the concept in a project or interview setting:

1. WHILE not done:
2. IF thought.requires_action:
3. ELSE:
4. return thought.answer

At each step, sanity-check inputs and outputs — most errors in **LLM Agent Architecture** come from skipping validation between steps.

### Real-World Applications

**LLM Agent Architecture** shows up in real projects more often than textbook examples suggest:

- Document Q&A assistants with retrieval-augmented generation over private corpora
- Code completion and review tools integrated into developer workflows
- Multimodal search across images, text, and structured metadata

In each case, the details from this section inform how you structure code, choose libraries, and validate results before shipping.

### Hands-On Practice

Open a Python REPL or notebook and type a minimal version of **LLM Agent Architecture** from memory. Even five lines of working code solidify more understanding than re-reading this article.

### Best Practices Checklist

Use this checklist before you mark the section complete:

- I can explain: ReAct pattern: Reason + Act interleaved
- I can explain: Tool definitions in prompt or function calling API
- I can explain: Memory: short-term (conversation) + long-term (vector store)
- I can explain: Max iterations prevent infinite loops
- I ran the example and matched the expected output for **LLM Agent Architecture**.
- I read the common-mistakes panel and can describe how to avoid at least two items.

### Interview & Review Questions

If you are preparing for courses, certifications, or technical interviews, practice answering aloud:

- Explain **LLM Agent Architecture** to a junior developer in two minutes.
- What goes wrong if you ignore best practices for LLM Agent Architecture?
- How does LLM Agent Architecture connect to the rest of **Agents & Tool Use**?
- What does it mean that "ReAct pattern: Reason + Act interleaved"? Give an example.

### Summary

To recap **LLM Agent Architecture**: react pattern: reason + act interleaved; tool definitions in prompt or function calling api; memory: short-term (conversation) + long-term (vector store); max iterations prevent infinite loops.

Keep this summary in your own words in the notes panel — teaching the idea to someone else (or your future self) is the fastest way to know you truly understand it.`,
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
          ],
          diagram: `LLM Agent Architecture
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Wrong sequence length after tokenization — truncating critical context`,
            `Serving a model trained on preprocessed data without the same pipeline in production`,
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`
          ]
        },
        {
          id: `tools`,
          title: `Function Calling / Tool Use`,
          content: `### Introduction

Define tools with name, description, parameters (JSON schema). Model selects tool and arguments.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

By the end you should be able to explain the concept in plain language, run the example code yourself, and avoid the common mistakes listed at the bottom of the page.

### Why This Matters

**Why learn Function Calling / Tool Use?** On the modern AI systems track, this topic is a gate — later modules assume you are comfortable with the vocabulary, code patterns, and failure modes covered here.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

Skimming only the bullets is not enough for interviews or production work. Read the full explanation, complete the walkthrough, and intentionally trigger at least one mistake in the REPL so you recognize the error message when it appears in a real project.

### Function Calling / Tool Use — Full Explanation

Define tools with name, description, parameters (JSON schema). Model selects tool and arguments.

OpenAI function calling, Anthropic tool use. Take a moment to connect this sentence to **Function Calling / Tool Use** — what would change if the input were twice as large, missing values, or drawn from a different domain?

### Concept-by-Concept Breakdown

Each core idea deserves more than a one-line summary. Expand each point below before you run the code:

**1. Clear tool descriptions critical for selection**

Clear tool descriptions critical for selection. In **Function Calling / Tool Use**, this idea is not optional theory — it directly affects whether your implementation behaves correctly on edge cases. When you run the code example, pause after each step and ask how this point would change if the input data were larger, noisier, or slightly different.

Think of a concrete scenario in **Agents & Tool Use** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**2. JSON schema defines valid parameters**

JSON schema defines valid parameters. Teams working on modern AI systems code review for this explicitly because violations cause subtle bugs that unit tests often miss. A practical habit: keep a one-line comment in your notebook linking each key block of code to this principle.

Think of a concrete scenario in **Agents & Tool Use** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**3. Execute tool and return result to model**

Execute tool and return result to model. You will revisit this while studying **Agents & Tool Use** and in later modules where the same pattern appears with more complexity. If anything feels abstract now, return after running the example — concrete output usually makes the idea click.

Think of a concrete scenario in **Agents & Tool Use** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**4. Multiple tools enable complex workflows**

Multiple tools enable complex workflows. Interviewers and senior engineers expect you to explain **Function Calling / Tool Use** using ideas like this, not only API names. Practice saying it aloud in one sentence, then point to where the example demonstrates it.

Think of a concrete scenario in **Agents & Tool Use** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

### How It Works (Step by Step)

Follow this sequence when applying the concept in a project or interview setting:

1. Clear tool descriptions critical for selection
2. JSON schema defines valid parameters
3. Execute tool and return result to model
4. Multiple tools enable complex workflows

At each step, sanity-check inputs and outputs — most errors in **Function Calling / Tool Use** come from skipping validation between steps.

### Real-World Applications

**Function Calling / Tool Use** shows up in real projects more often than textbook examples suggest:

- Document Q&A assistants with retrieval-augmented generation over private corpora
- Code completion and review tools integrated into developer workflows
- Multimodal search across images, text, and structured metadata

In each case, the details from this section inform how you structure code, choose libraries, and validate results before shipping.

### Example Walkthrough

Do not copy-paste blindly. Walk through the program in four phases: **(1)** read imports, **(2)** trace data creation, **(3)** follow the main operation, **(4)** compare printed output.

**Line-by-line notes:**

- \`tools = [{\` — assignment; note the variable name and predict its value before running the next line.
- \`"name": "search",\` — execute this line in isolation if the full script fails; inspect types with \`type(...)\` or \`shape\` for arrays.
- \`"description": "Search the web for information",\` — execute this line in isolation if the full script fails; inspect types with \`type(...)\` or \`shape\` for arrays.
- \`"parameters": {"query": {"type": "string"}}\` — execute this line in isolation if the full script fails; inspect types with \`type(...)\` or \`shape\` for arrays.
- \`}]\` — execute this line in isolation if the full script fails; inspect types with \`type(...)\` or \`shape\` for arrays.
- \`print(tools[0]["name"])\` — prints so you can compare against the expected output panel line by line.

**Expected output:**

\`\`\`
search
\`\`\`

If your output differs, diff the first mismatching line, then walk backward to the line that produced it. Small floating-point differences are normal; wrong types or missing keys are not.

**Challenge:** Change one literal or argument in the example (for **Function Calling / Tool Use**) and predict the new output before re-running. This single habit builds deeper understanding than re-reading the article.

### Best Practices Checklist

Use this checklist before you mark the section complete:

- I can explain: Clear tool descriptions critical for selection
- I can explain: JSON schema defines valid parameters
- I can explain: Execute tool and return result to model
- I can explain: Multiple tools enable complex workflows
- I ran the example and matched the expected output for **Function Calling / Tool Use**.
- I read the common-mistakes panel and can describe how to avoid at least two items.

### Interview & Review Questions

If you are preparing for courses, certifications, or technical interviews, practice answering aloud:

- Explain **Function Calling / Tool Use** to a junior developer in two minutes.
- What goes wrong if you ignore best practices for Function Calling / Tool Use?
- How does Function Calling / Tool Use connect to the rest of **Agents & Tool Use**?
- What does it mean that "Clear tool descriptions critical for selection"? Give an example.

### Summary

To recap **Function Calling / Tool Use**: clear tool descriptions critical for selection; json schema defines valid parameters; execute tool and return result to model; multiple tools enable complex workflows.

Keep this summary in your own words in the notes panel — teaching the idea to someone else (or your future self) is the fastest way to know you truly understand it.

### Runnable Code

The complete runnable program and its output are shown in the **Code Example** and **Output** panels below this article.`,
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
          ],
          diagram: `Function Calling / Tool Use
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`,
            `Deploying without output moderation on user-facing endpoints`,
            `Trusting LLM outputs as facts without retrieval or verification`
          ]
        },
        {
          id: `frameworks`,
          title: `Agent Frameworks`,
          content: `### Introduction

LangChain: chains, agents, memory. LlamaIndex: data ingestion and RAG.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

By the end you should be able to explain the concept in plain language, run the example code yourself, and avoid the common mistakes listed at the bottom of the page.

### Why This Matters

**Why learn Agent Frameworks?** On the modern AI systems track, this topic is a gate — later modules assume you are comfortable with the vocabulary, code patterns, and failure modes covered here.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

Skimming only the bullets is not enough for interviews or production work. Read the full explanation, complete the walkthrough, and intentionally trigger at least one mistake in the REPL so you recognize the error message when it appears in a real project.

### Agent Frameworks — Full Explanation

LangChain: chains, agents, memory. LlamaIndex: data ingestion and RAG.

AutoGen: multi-agent conversations. CrewAI: role-based agents.

### Concept-by-Concept Breakdown

Each core idea deserves more than a one-line summary. Expand each point below before you run the code:

**1. LangChain most popular orchestration framework**

LangChain most popular orchestration framework. In **Agent Frameworks**, this idea is not optional theory — it directly affects whether your implementation behaves correctly on edge cases. When you run the code example, pause after each step and ask how this point would change if the input data were larger, noisier, or slightly different.

Think of a concrete scenario in **Agents & Tool Use** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**2. LlamaIndex optimized for data-connected apps**

LlamaIndex optimized for data-connected apps. Teams working on modern AI systems code review for this explicitly because violations cause subtle bugs that unit tests often miss. A practical habit: keep a one-line comment in your notebook linking each key block of code to this principle.

Think of a concrete scenario in **Agents & Tool Use** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**3. Multi-agent: specialized agents collaborate**

Multi-agent: specialized agents collaborate. You will revisit this while studying **Agents & Tool Use** and in later modules where the same pattern appears with more complexity. If anything feels abstract now, return after running the example — concrete output usually makes the idea click.

Think of a concrete scenario in **Agents & Tool Use** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**4. Evaluate agent reliability before production**

Evaluate agent reliability before production. Interviewers and senior engineers expect you to explain **Agent Frameworks** using ideas like this, not only API names. Practice saying it aloud in one sentence, then point to where the example demonstrates it.

Think of a concrete scenario in **Agents & Tool Use** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

### How It Works (Step by Step)

Follow this sequence when applying the concept in a project or interview setting:

1. LangChain most popular orchestration framework
2. LlamaIndex optimized for data-connected apps
3. Multi-agent: specialized agents collaborate
4. Evaluate agent reliability before production

At each step, sanity-check inputs and outputs — most errors in **Agent Frameworks** come from skipping validation between steps.

### Real-World Applications

**Agent Frameworks** shows up in real projects more often than textbook examples suggest:

- Multimodal search across images, text, and structured metadata
- Evaluation and guardrail pipelines before shipping LLM features to users
- Document Q&A assistants with retrieval-augmented generation over private corpora

In each case, the details from this section inform how you structure code, choose libraries, and validate results before shipping.

### Hands-On Practice

Open a Python REPL or notebook and type a minimal version of **Agent Frameworks** from memory. Even five lines of working code solidify more understanding than re-reading this article.

### Best Practices Checklist

Use this checklist before you mark the section complete:

- I can explain: LangChain most popular orchestration framework
- I can explain: LlamaIndex optimized for data-connected apps
- I can explain: Multi-agent: specialized agents collaborate
- I can explain: Evaluate agent reliability before production
- I ran the example and matched the expected output for **Agent Frameworks**.
- I read the common-mistakes panel and can describe how to avoid at least two items.

### Interview & Review Questions

If you are preparing for courses, certifications, or technical interviews, practice answering aloud:

- Explain **Agent Frameworks** to a junior developer in two minutes.
- What goes wrong if you ignore best practices for Agent Frameworks?
- How does Agent Frameworks connect to the rest of **Agents & Tool Use**?
- What does it mean that "LangChain most popular orchestration framework"? Give an example.

### Summary

To recap **Agent Frameworks**: langchain most popular orchestration framework; llamaindex optimized for data-connected apps; multi-agent: specialized agents collaborate; evaluate agent reliability before production.

Keep this summary in your own words in the notes panel — teaching the idea to someone else (or your future self) is the fastest way to know you truly understand it.`,
          keyPoints: [
            `LangChain most popular orchestration framework`,
            `LlamaIndex optimized for data-connected apps`,
            `Multi-agent: specialized agents collaborate`,
            `Evaluate agent reliability before production`
          ],
          diagram: `Agent Frameworks
Raw Data → Clean → Features → Train → Evaluate → Deploy → Monitor`,
          commonMistakes: [
            `Feeding NHWC tensors into PyTorch NCHW layers without permuting`,
            `Wrong padding/stride — output spatial size shrinks unexpectedly`,
            `Not normalizing vectors when using dot product as cosine similarity`,
            `Trusting LLM outputs as facts without retrieval or verification`
          ]
        },
        {
          id: `safety`,
          title: `Agent Safety`,
          content: `### Introduction

Sandbox tool execution. Validate tool inputs. Limit permissions. Human-in-the-loop for high-stakes actions.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

By the end you should be able to explain the concept in plain language, run the example code yourself, and avoid the common mistakes listed at the bottom of the page.

### Why This Matters

**Why learn Agent Safety?** On the modern AI systems track, this topic is a gate — later modules assume you are comfortable with the vocabulary, code patterns, and failure modes covered here.

LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.

Skimming only the bullets is not enough for interviews or production work. Read the full explanation, complete the walkthrough, and intentionally trigger at least one mistake in the REPL so you recognize the error message when it appears in a real project.

### Agent Safety — Full Explanation

Sandbox tool execution. Validate tool inputs. Human-in-the-loop for high-stakes actions.

### Concept-by-Concept Breakdown

Each core idea deserves more than a one-line summary. Expand each point below before you run the code:

**1. Never give agents unrestricted system access**

Never give agents unrestricted system access. In **Agent Safety**, this idea is not optional theory — it directly affects whether your implementation behaves correctly on edge cases. When you run the code example, pause after each step and ask how this point would change if the input data were larger, noisier, or slightly different.

Think of a concrete scenario in **Agents & Tool Use** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**2. Validate and sanitize tool inputs/outputs**

Validate and sanitize tool inputs/outputs. Teams working on modern AI systems code review for this explicitly because violations cause subtle bugs that unit tests often miss. A practical habit: keep a one-line comment in your notebook linking each key block of code to this principle.

Think of a concrete scenario in **Agents & Tool Use** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**3. Human approval for irreversible actions**

Human approval for irreversible actions. You will revisit this while studying **Agents & Tool Use** and in later modules where the same pattern appears with more complexity. If anything feels abstract now, return after running the example — concrete output usually makes the idea click.

Think of a concrete scenario in **Agents & Tool Use** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

**4. Monitor agent trajectories for unexpected behavior**

Monitor agent trajectories for unexpected behavior. Interviewers and senior engineers expect you to explain **Agent Safety** using ideas like this, not only API names. Practice saying it aloud in one sentence, then point to where the example demonstrates it.

Think of a concrete scenario in **Agents & Tool Use** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.

### How It Works (Step by Step)

Follow this sequence when applying the concept in a project or interview setting:

1. Never give agents unrestricted system access
2. Validate and sanitize tool inputs/outputs
3. Human approval for irreversible actions
4. Monitor agent trajectories for unexpected behavior

At each step, sanity-check inputs and outputs — most errors in **Agent Safety** come from skipping validation between steps.

### Real-World Applications

**Agent Safety** shows up in real projects more often than textbook examples suggest:

- Multimodal search across images, text, and structured metadata
- Evaluation and guardrail pipelines before shipping LLM features to users
- Document Q&A assistants with retrieval-augmented generation over private corpora

In each case, the details from this section inform how you structure code, choose libraries, and validate results before shipping.

### Hands-On Practice

Open a Python REPL or notebook and type a minimal version of **Agent Safety** from memory. Even five lines of working code solidify more understanding than re-reading this article.

### Best Practices Checklist

Use this checklist before you mark the section complete:

- I can explain: Never give agents unrestricted system access
- I can explain: Validate and sanitize tool inputs/outputs
- I can explain: Human approval for irreversible actions
- I can explain: Monitor agent trajectories for unexpected behavior
- I ran the example and matched the expected output for **Agent Safety**.
- I read the common-mistakes panel and can describe how to avoid at least two items.

### Interview & Review Questions

If you are preparing for courses, certifications, or technical interviews, practice answering aloud:

- Explain **Agent Safety** to a junior developer in two minutes.
- What goes wrong if you ignore best practices for Agent Safety?
- How does Agent Safety connect to the rest of **Agents & Tool Use**?
- What does it mean that "Never give agents unrestricted system access"? Give an example.

### Summary

To recap **Agent Safety**: never give agents unrestricted system access; validate and sanitize tool inputs/outputs; human approval for irreversible actions; monitor agent trajectories for unexpected behavior.

Keep this summary in your own words in the notes panel — teaching the idea to someone else (or your future self) is the fastest way to know you truly understand it.`,
          keyPoints: [
            `Never give agents unrestricted system access`,
            `Validate and sanitize tool inputs/outputs`,
            `Human approval for irreversible actions`,
            `Monitor agent trajectories for unexpected behavior`
          ],
          diagram: `Agent Safety
Dataset → Train Fold → Validation Fold → Test Holdout`,
          commonMistakes: [
            `Calling \`Parent.method()\` without passing \`self\` correctly in overrides`,
            `Never give agents unrestricted system access.`,
            `Trusting LLM outputs as facts without retrieval or verification`,
            `Measuring only fluency — not factual accuracy or task success`
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
      estimatedMinutes: 42,
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
