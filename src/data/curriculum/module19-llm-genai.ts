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
          content: `**LLM Landscape** is essential to **Large Language Models Overview**. Architecture, capabilities, and landscape of modern LLMs. At the **advanced** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Large Language Models (LLMs) are neural networks trained on vast text corpora to predict the next token. They exhibit emergent capabilities — reasoning, coding, translation — at sufficient scale.

**Closed-source frontier models:** GPT-4 (OpenAI), Claude (Anthropic), Gemini (Google). Accessed via API; weights not public.

**Open-weight models:** LLaMA (Meta), Mistral, Qwen, Phi — enable local deployment, fine-tuning, and research.

**Multimodal LLMs:** GPT-4V, Gemini process images alongside text. The boundary between NLP and computer vision is dissolving.

Context windows have grown from 2K tokens (early GPT) to 128K–1M tokens, enabling entire codebases or books as input.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "LLM Landscape" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Frontier models from OpenAI, Anthropic, Google`,
            `Open weights: LLaMA, Mistral, Qwen enable local deployment`,
            `Multimodal: GPT-4V, Gemini process images too`,
            `Context windows growing: 128K-1M tokens`,
            `LLM Landscape is a foundational piece of Large Language Models Overview`,
            `Connect this section to the ai track and advanced expectations`
          ],
          example: `# Concept check: LLM Landscape
meta = {
    "topic": "ai-llm",
    "section": "landscape",
    "track": "ai",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ai-llm
section: landscape
track: ai
level: advanced`,
          pseudoCode: `CONCEPT: LLM Landscape

Study checklist:
  1. Frontier models from OpenAI, Anthropic, Google
  2. Open weights: LLaMA, Mistral, Qwen enable local deployment
  3. Multimodal: GPT-4V, Gemini process images too
  4. Context windows growing: 128K-1M tokens
  5. LLM Landscape is a foundational piece of Large Language Models Overview
  6. Connect this section to the ai track and advanced expectations

Topic: Large Language Models Overview
Track: ai | Level: advanced`
        },
        {
          id: `capabilities`,
          title: `Capabilities & Limitations`,
          content: `**Strengths:** Summarization, translation, code generation, question answering, creative writing, structured data extraction. LLMs compress patterns from training data into useful general-purpose behavior.

**Weaknesses:** Factual accuracy without retrieval (hallucination), reliable arithmetic without tools, long-horizon planning, real-time knowledge. They predict plausible text, not verified truth.

**Mitigations:** RAG grounds responses in documents; tool use (calculator, search) extends capabilities; chain-of-thought prompting improves reasoning; human-in-the-loop for high-stakes decisions.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Capabilities & Limitations" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `LLMs predict likely text not verified facts`,
            `Hallucination: confident but incorrect outputs`,
            `Tool use and RAG mitigate knowledge gaps`,
            `Reasoning improves with chain-of-thought`,
            `Capabilities & Limitations is a foundational piece of Large Language Models Overview`,
            `Connect this section to the ai track and advanced expectations`
          ],
          example: `# Concept check: Capabilities & Limitations
meta = {
    "topic": "ai-llm",
    "section": "capabilities",
    "track": "ai",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ai-llm
section: capabilities
track: ai
level: advanced`,
          pseudoCode: `CONCEPT: Capabilities & Limitations

Study checklist:
  1. LLMs predict likely text not verified facts
  2. Hallucination: confident but incorrect outputs
  3. Tool use and RAG mitigate knowledge gaps
  4. Reasoning improves with chain-of-thought
  5. Capabilities & Limitations is a foundational piece of Large Language Models Overview
  6. Connect this section to the ai track and advanced expectations

Topic: Large Language Models Overview
Track: ai | Level: advanced`
        },
        {
          id: `tokens`,
          title: `Token Economics`,
          content: `**Token Economics** is essential to **Large Language Models Overview**. Architecture, capabilities, and landscape of modern LLMs. At the **advanced** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Pricing by input/output tokens. Context window limits. Tokenization affects cost and effective context usage.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Token Economics" here directly affects how confidently you can build, debug, and ship ai projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
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
            `Count tokens before API calls`,
            `Token Economics is a foundational piece of Large Language Models Overview`,
            `Connect this section to the ai track and advanced expectations`
          ],
          pseudoCode: `CONCEPT: Token Economics

Study checklist:
  1. Tokens not words — subword units
  2. Input + output tokens both billed
  3. Longer context = higher cost and latency
  4. Count tokens before API calls
  5. Token Economics is a foundational piece of Large Language Models Overview
  6. Connect this section to the ai track and advanced expectations

Topic: Large Language Models Overview
Track: ai | Level: advanced`
        },
        {
          id: `eval`,
          title: `LLM Evaluation`,
          content: `**LLM Evaluation** is essential to **Large Language Models Overview**. Architecture, capabilities, and landscape of modern LLMs. At the **advanced** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

MMLU, HumanEval, MT-Bench benchmarks. Custom eval sets for domain tasks. LLM-as-judge for subjective quality.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "LLM Evaluation" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `No single benchmark captures all capabilities`,
            `HumanEval for code generation quality`,
            `Build domain-specific eval sets`,
            `Automated eval with stronger model as judge`,
            `LLM Evaluation is a foundational piece of Large Language Models Overview`,
            `Connect this section to the ai track and advanced expectations`
          ],
          example: `# Concept check: LLM Evaluation
meta = {
    "topic": "ai-llm",
    "section": "eval",
    "track": "ai",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ai-llm
section: eval
track: ai
level: advanced`,
          pseudoCode: `CONCEPT: LLM Evaluation

Study checklist:
  1. No single benchmark captures all capabilities
  2. HumanEval for code generation quality
  3. Build domain-specific eval sets
  4. Automated eval with stronger model as judge
  5. LLM Evaluation is a foundational piece of Large Language Models Overview
  6. Connect this section to the ai track and advanced expectations

Topic: Large Language Models Overview
Track: ai | Level: advanced`
        },
        {
          id: `ai-llm-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Large Language Models Overview** sits in the **ai** track of the Data Science Master curriculum. Architecture, capabilities, and landscape of modern LLMs.

**Theoretical foundation:** LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.

For **ai-llm**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the advanced level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
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
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Large Language Models Overview ties to the ai track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Large Language Models Overview
Track: ai | Level: advanced`
        },
        {
          id: `ai-llm-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Large Language Models Overview**. Ground responses with RAG, enforce JSON schemas for tool calls, red-team prompts before launch, log traces for audit, and gate high-risk actions with human approval.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **ai-llm**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
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
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with ai ecosystem conventions

Topic: Large Language Models Overview
Track: ai | Level: advanced`
        },
        {
          id: `ai-llm-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Large Language Models Overview** often hit predictable walls. Prompt injection, hallucinated citations, unbounded agent loops, secret leakage via training data, and fairness gaps across demographics require proactive testing.

When stuck on **ai-llm**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:** The best debuggers narrow the search space in minutes by changing one variable at a time.`,
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
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: Large Language Models Overview
Track: ai | Level: advanced`
        },
        {
          id: `ai-llm-real-world`,
          title: `Real-World Applications`,
          content: `**Large Language Models Overview** shows up wherever **ai** skills meet business constraints. Enterprises deploy copilots, search augmentation, and workflow automation with vector databases, observability stacks, and governance aligned to regulations like the EU AI Act.

Teams shipping features around **ai-llm** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
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
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Large Language Models Overview to adjacent topics in the same track

Topic: Large Language Models Overview
Track: ai | Level: advanced`
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
      estimatedMinutes: 124,
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
          content: `**Prompt Structure** is essential to **Prompt Engineering**. Design effective prompts to maximize LLM output quality. At the **advanced** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

System message (role/behavior) + user message (task) + optional examples. Clear, specific instructions outperform vague requests.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Prompt Structure" here directly affects how confidently you can build, debug, and ship ai projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          example: `prompt = """System: You are a Python tutor. Explain concepts simply.

User: Explain list comprehensions with an example.

Assistant:"""
print(len(prompt))`,
          keyPoints: [
            `System prompt sets behavior and constraints`,
            `Be specific about format, length, tone`,
            `Include examples for complex formats (few-shot)`,
            `Iterate and refine prompts empirically`,
            `Prompt Structure is a foundational piece of Prompt Engineering`,
            `Connect this section to the ai track and advanced expectations`
          ],
          pseudoCode: `CONCEPT: Prompt Structure

Study checklist:
  1. System prompt sets behavior and constraints
  2. Be specific about format, length, tone
  3. Include examples for complex formats (few-shot)
  4. Iterate and refine prompts empirically
  5. Prompt Structure is a foundational piece of Prompt Engineering
  6. Connect this section to the ai track and advanced expectations

Topic: Prompt Engineering
Track: ai | Level: advanced`
        },
        {
          id: `cot`,
          title: `Chain-of-Thought (CoT)`,
          content: `**Chain-of-Thought (CoT)** is essential to **Prompt Engineering**. Design effective prompts to maximize LLM output quality. At the **advanced** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Add "Let's think step by step" or demonstrate reasoning steps. Dramatically improves math and logic performance.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Chain-of-Thought (CoT)" here directly affects how confidently you can build, debug, and ship ai projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          example: `prompt = "Q: A store has 23 apples. They buy 6 boxes of 12 apples. How many now?\\nA: Let's think step by step.\\n23 + (6 * 12) = 23 + 72 = 95\\n\\nQ: ..."
print("CoT improves reasoning")`,
          output: `CoT improves reasoning`,
          keyPoints: [
            `Zero-shot CoT: add "think step by step"`,
            `Few-shot CoT: provide reasoning examples`,
            `Self-consistency: sample multiple chains, majority vote`,
            `Tree-of-thought for complex planning`,
            `Chain-of-Thought (CoT) is a foundational piece of Prompt Engineering`,
            `Connect this section to the ai track and advanced expectations`
          ],
          pseudoCode: `CONCEPT: Chain-of-Thought (CoT)

Study checklist:
  1. Zero-shot CoT: add "think step by step"
  2. Few-shot CoT: provide reasoning examples
  3. Self-consistency: sample multiple chains, majority vote
  4. Tree-of-thought for complex planning
  5. Chain-of-Thought (CoT) is a foundational piece of Prompt Engineering
  6. Connect this section to the ai track and advanced expectations

Topic: Prompt Engineering
Track: ai | Level: advanced`
        },
        {
          id: `few-shot`,
          title: `Few-Shot Learning`,
          content: `**Few-Shot Learning** is essential to **Prompt Engineering**. Design effective prompts to maximize LLM output quality. At the **advanced** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Provide 2-5 input-output examples in prompt. Model learns pattern without weight updates. Example selection matters.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Few-Shot Learning" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Examples should be diverse and representative`,
            `Order of examples affects performance`,
            `More examples help up to a point`,
            `Dynamic example retrieval from database`,
            `Few-Shot Learning is a foundational piece of Prompt Engineering`,
            `Connect this section to the ai track and advanced expectations`
          ],
          example: `# Concept check: Few-Shot Learning
meta = {
    "topic": "ai-prompt",
    "section": "few-shot",
    "track": "ai",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ai-prompt
section: few-shot
track: ai
level: advanced`,
          pseudoCode: `CONCEPT: Few-Shot Learning

Study checklist:
  1. Examples should be diverse and representative
  2. Order of examples affects performance
  3. More examples help up to a point
  4. Dynamic example retrieval from database
  5. Few-Shot Learning is a foundational piece of Prompt Engineering
  6. Connect this section to the ai track and advanced expectations

Topic: Prompt Engineering
Track: ai | Level: advanced`
        },
        {
          id: `advanced-prompt`,
          title: `Advanced Techniques`,
          content: `**Advanced Techniques** is essential to **Prompt Engineering**. Design effective prompts to maximize LLM output quality. At the **advanced** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

ReAct (reasoning + acting), structured output (JSON mode), role prompting, prompt chaining, constitutional AI principles.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Advanced Techniques" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `JSON mode ensures parseable output`,
            `Prompt chaining breaks complex tasks into steps`,
            `ReAct interleaves reasoning and tool calls`,
            `Test prompts systematically with eval sets`,
            `Advanced Techniques is a foundational piece of Prompt Engineering`,
            `Connect this section to the ai track and advanced expectations`
          ],
          example: `# Concept check: Advanced Techniques
meta = {
    "topic": "ai-prompt",
    "section": "advanced-prompt",
    "track": "ai",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ai-prompt
section: advanced-prompt
track: ai
level: advanced`,
          pseudoCode: `CONCEPT: Advanced Techniques

Study checklist:
  1. JSON mode ensures parseable output
  2. Prompt chaining breaks complex tasks into steps
  3. ReAct interleaves reasoning and tool calls
  4. Test prompts systematically with eval sets
  5. Advanced Techniques is a foundational piece of Prompt Engineering
  6. Connect this section to the ai track and advanced expectations

Topic: Prompt Engineering
Track: ai | Level: advanced`
        },
        {
          id: `ai-prompt-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Prompt Engineering** sits in the **ai** track of the Data Science Master curriculum. Design effective prompts to maximize LLM output quality.

**Theoretical foundation:** LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.

For **ai-prompt**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the advanced level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
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
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Prompt Engineering ties to the ai track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Prompt Engineering
Track: ai | Level: advanced`
        },
        {
          id: `ai-prompt-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Prompt Engineering**. Ground responses with RAG, enforce JSON schemas for tool calls, red-team prompts before launch, log traces for audit, and gate high-risk actions with human approval.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **ai-prompt**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
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
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with ai ecosystem conventions

Topic: Prompt Engineering
Track: ai | Level: advanced`
        },
        {
          id: `ai-prompt-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Prompt Engineering** often hit predictable walls. Prompt injection, hallucinated citations, unbounded agent loops, secret leakage via training data, and fairness gaps across demographics require proactive testing.

When stuck on **ai-prompt**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:** The best debuggers narrow the search space in minutes by changing one variable at a time.`,
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
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: Prompt Engineering
Track: ai | Level: advanced`
        },
        {
          id: `ai-prompt-real-world`,
          title: `Real-World Applications`,
          content: `**Prompt Engineering** shows up wherever **ai** skills meet business constraints. Enterprises deploy copilots, search augmentation, and workflow automation with vector databases, observability stacks, and governance aligned to regulations like the EU AI Act.

Teams shipping features around **ai-prompt** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
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
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Prompt Engineering to adjacent topics in the same track

Topic: Prompt Engineering
Track: ai | Level: advanced`
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
      estimatedMinutes: 124,
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
          content: `**RAG Architecture** is essential to **RAG (Retrieval Augmented Generation)**. Ground LLM responses in external knowledge via retrieval. At the **advanced** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Query → retrieve relevant documents from vector DB → augment prompt with context → LLM generates grounded answer.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "RAG Architecture" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          pseudoCode: `query = user_question
chunks = vector_db.search(embed(query), top_k=5)
context = join(chunks)
prompt = f"Context: {context}\\nQuestion: {query}"
answer = llm.generate(prompt)`,
          keyPoints: [
            `RAG reduces hallucination on domain knowledge`,
            `Retrieval quality determines answer quality`,
            `Chunk size and overlap affect retrieval`,
            `Hybrid search: dense + keyword (BM25)`,
            `RAG Architecture is a foundational piece of RAG (Retrieval Augmented Generation)`,
            `Connect this section to the ai track and advanced expectations`
          ],
          example: `# Concept check: RAG Architecture
meta = {
    "topic": "ai-rag",
    "section": "rag-arch",
    "track": "ai",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ai-rag
section: rag-arch
track: ai
level: advanced`
        },
        {
          id: `embeddings-rag`,
          title: `Embeddings for Retrieval`,
          content: `**Embeddings for Retrieval** is essential to **RAG (Retrieval Augmented Generation)**. Ground LLM responses in external knowledge via retrieval. At the **advanced** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Embed documents and queries with embedding model (OpenAI, sentence-transformers). Store in vector DB (Pinecone, Chroma, FAISS).

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Embeddings for Retrieval" here directly affects how confidently you can build, debug, and ship ai projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          example: `from sentence_transformers import SentenceTransformer

model = SentenceTransformer("all-MiniLM-L6-v2")
docs = ["Python is a programming language", "Machine learning uses data"]
embeddings = model.encode(docs)
print(embeddings.shape)`,
          keyPoints: [
            `Choose embedding model matching domain`,
            `Chunk documents 256-512 tokens typically`,
            `Metadata filtering narrows search space`,
            `Re-rank retrieved results with cross-encoder`,
            `Embeddings for Retrieval is a foundational piece of RAG (Retrieval Augmented Generation)`,
            `Connect this section to the ai track and advanced expectations`
          ],
          pseudoCode: `CONCEPT: Embeddings for Retrieval

Study checklist:
  1. Choose embedding model matching domain
  2. Chunk documents 256-512 tokens typically
  3. Metadata filtering narrows search space
  4. Re-rank retrieved results with cross-encoder
  5. Embeddings for Retrieval is a foundational piece of RAG (Retrieval Augmented Generation)
  6. Connect this section to the ai track and advanced expectations

Topic: RAG (Retrieval Augmented Generation)
Track: ai | Level: advanced`
        },
        {
          id: `chunking`,
          title: `Document Chunking`,
          content: `**Document Chunking** is essential to **RAG (Retrieval Augmented Generation)**. Ground LLM responses in external knowledge via retrieval. At the **advanced** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Split documents into retrievable chunks. Recursive character splitting, semantic chunking. Overlap preserves context at boundaries.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Document Chunking" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Too small chunks lose context`,
            `Too large chunks dilute relevance`,
            `10-20% overlap between chunks common`,
            `Parent-child chunking for hierarchical retrieval`,
            `Document Chunking is a foundational piece of RAG (Retrieval Augmented Generation)`,
            `Connect this section to the ai track and advanced expectations`
          ],
          example: `# Concept check: Document Chunking
meta = {
    "topic": "ai-rag",
    "section": "chunking",
    "track": "ai",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ai-rag
section: chunking
track: ai
level: advanced`,
          pseudoCode: `CONCEPT: Document Chunking

Study checklist:
  1. Too small chunks lose context
  2. Too large chunks dilute relevance
  3. 10-20% overlap between chunks common
  4. Parent-child chunking for hierarchical retrieval
  5. Document Chunking is a foundational piece of RAG (Retrieval Augmented Generation)
  6. Connect this section to the ai track and advanced expectations

Topic: RAG (Retrieval Augmented Generation)
Track: ai | Level: advanced`
        },
        {
          id: `eval-rag`,
          title: `Evaluating RAG Systems`,
          content: `**Evaluating RAG Systems** is essential to **RAG (Retrieval Augmented Generation)**. Ground LLM responses in external knowledge via retrieval. At the **advanced** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Retrieval metrics: recall@k, MRR. Generation metrics: faithfulness, relevance, answer correctness. RAGAS framework.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Evaluating RAG Systems" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Evaluate retrieval and generation separately`,
            `Faithfulness: answer grounded in retrieved context`,
            `RAGAS automated RAG evaluation`,
            `Human eval for production quality assurance`,
            `Evaluating RAG Systems is a foundational piece of RAG (Retrieval Augmented Generation)`,
            `Connect this section to the ai track and advanced expectations`
          ],
          example: `# Concept check: Evaluating RAG Systems
meta = {
    "topic": "ai-rag",
    "section": "eval-rag",
    "track": "ai",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ai-rag
section: eval-rag
track: ai
level: advanced`,
          pseudoCode: `CONCEPT: Evaluating RAG Systems

Study checklist:
  1. Evaluate retrieval and generation separately
  2. Faithfulness: answer grounded in retrieved context
  3. RAGAS automated RAG evaluation
  4. Human eval for production quality assurance
  5. Evaluating RAG Systems is a foundational piece of RAG (Retrieval Augmented Generation)
  6. Connect this section to the ai track and advanced expectations

Topic: RAG (Retrieval Augmented Generation)
Track: ai | Level: advanced`
        },
        {
          id: `ai-rag-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**RAG (Retrieval Augmented Generation)** sits in the **ai** track of the Data Science Master curriculum. Ground LLM responses in external knowledge via retrieval.

**Theoretical foundation:** LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.

For **ai-rag**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the advanced level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
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
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of RAG (Retrieval Augmented Generation) ties to the ai track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: RAG (Retrieval Augmented Generation)
Track: ai | Level: advanced`
        },
        {
          id: `ai-rag-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **RAG (Retrieval Augmented Generation)**. Ground responses with RAG, enforce JSON schemas for tool calls, red-team prompts before launch, log traces for audit, and gate high-risk actions with human approval.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **ai-rag**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
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
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with ai ecosystem conventions

Topic: RAG (Retrieval Augmented Generation)
Track: ai | Level: advanced`
        },
        {
          id: `ai-rag-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **RAG (Retrieval Augmented Generation)** often hit predictable walls. Prompt injection, hallucinated citations, unbounded agent loops, secret leakage via training data, and fairness gaps across demographics require proactive testing.

When stuck on **ai-rag**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:** The best debuggers narrow the search space in minutes by changing one variable at a time.`,
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
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: RAG (Retrieval Augmented Generation)
Track: ai | Level: advanced`
        },
        {
          id: `ai-rag-real-world`,
          title: `Real-World Applications`,
          content: `**RAG (Retrieval Augmented Generation)** shows up wherever **ai** skills meet business constraints. Enterprises deploy copilots, search augmentation, and workflow automation with vector databases, observability stacks, and governance aligned to regulations like the EU AI Act.

Teams shipping features around **ai-rag** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
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
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect RAG (Retrieval Augmented Generation) to adjacent topics in the same track

Topic: RAG (Retrieval Augmented Generation)
Track: ai | Level: advanced`
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
      estimatedMinutes: 124,
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
          content: `**Full Fine-Tuning** is essential to **Fine-tuning & LoRA**. Adapt pretrained LLMs to specific tasks and domains. At the **advanced** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Update all model weights on domain dataset. Expensive — requires significant GPU memory. Best for large domain shift.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Full Fine-Tuning" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Requires labeled instruction-response pairs`,
            `Risk of catastrophic forgetting`,
            `Multi-GPU needed for 7B+ models`,
            `Learning rate much smaller than pretraining`,
            `Full Fine-Tuning is a foundational piece of Fine-tuning & LoRA`,
            `Connect this section to the ai track and advanced expectations`
          ],
          example: `# Concept check: Full Fine-Tuning
meta = {
    "topic": "ai-finetune",
    "section": "finetune",
    "track": "ai",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ai-finetune
section: finetune
track: ai
level: advanced`,
          pseudoCode: `CONCEPT: Full Fine-Tuning

Study checklist:
  1. Requires labeled instruction-response pairs
  2. Risk of catastrophic forgetting
  3. Multi-GPU needed for 7B+ models
  4. Learning rate much smaller than pretraining
  5. Full Fine-Tuning is a foundational piece of Fine-tuning & LoRA
  6. Connect this section to the ai track and advanced expectations

Topic: Fine-tuning & LoRA
Track: ai | Level: advanced`
        },
        {
          id: `lora`,
          title: `LoRA (Low-Rank Adaptation)`,
          content: `**LoRA (Low-Rank Adaptation)** is essential to **Fine-tuning & LoRA**. Adapt pretrained LLMs to specific tasks and domains. At the **advanced** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Freeze base model, add low-rank decomposition matrices to attention layers. Trains ~0.1% of parameters. PEFT standard.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "LoRA (Low-Rank Adaptation)" here directly affects how confidently you can build, debug, and ship ai projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          example: `# LoRA concept: W' = W + BA where B is d×r, A is r×d, r << d
# r=8 or r=16 typical rank
# Only train A and B matrices
print("LoRA: W + B@A with low rank r")`,
          output: `LoRA: W + B@A with low rank r`,
          keyPoints: [
            `LoRA rank r controls capacity vs efficiency`,
            `Target q_proj, v_proj in attention layers`,
            `QLoRA: 4-bit quantized base + LoRA adapters`,
            `Merge adapters into base for deployment`,
            `LoRA (Low-Rank Adaptation) is a foundational piece of Fine-tuning & LoRA`,
            `Connect this section to the ai track and advanced expectations`
          ],
          pseudoCode: `CONCEPT: LoRA (Low-Rank Adaptation)

Study checklist:
  1. LoRA rank r controls capacity vs efficiency
  2. Target q_proj, v_proj in attention layers
  3. QLoRA: 4-bit quantized base + LoRA adapters
  4. Merge adapters into base for deployment
  5. LoRA (Low-Rank Adaptation) is a foundational piece of Fine-tuning & LoRA
  6. Connect this section to the ai track and advanced expectations

Topic: Fine-tuning & LoRA
Track: ai | Level: advanced`
        },
        {
          id: `instruction`,
          title: `Instruction Tuning`,
          content: `**Instruction Tuning** is essential to **Fine-tuning & LoRA**. Adapt pretrained LLMs to specific tasks and domains. At the **advanced** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Fine-tune on (instruction, response) pairs. Alpaca, Dolly datasets. Aligns model to follow user instructions.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Instruction Tuning" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Instruction format: ### Instruction / ### Response`,
            `Quality over quantity for instruction data`,
            `Covers diverse task types`,
            `Foundation for chat model behavior`,
            `Instruction Tuning is a foundational piece of Fine-tuning & LoRA`,
            `Connect this section to the ai track and advanced expectations`
          ],
          example: `# Concept check: Instruction Tuning
meta = {
    "topic": "ai-finetune",
    "section": "instruction",
    "track": "ai",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ai-finetune
section: instruction
track: ai
level: advanced`,
          pseudoCode: `CONCEPT: Instruction Tuning

Study checklist:
  1. Instruction format: ### Instruction / ### Response
  2. Quality over quantity for instruction data
  3. Covers diverse task types
  4. Foundation for chat model behavior
  5. Instruction Tuning is a foundational piece of Fine-tuning & LoRA
  6. Connect this section to the ai track and advanced expectations

Topic: Fine-tuning & LoRA
Track: ai | Level: advanced`
        },
        {
          id: `rlhf`,
          title: `RLHF & DPO`,
          content: `**RLHF & DPO** is essential to **Fine-tuning & LoRA**. Adapt pretrained LLMs to specific tasks and domains. At the **advanced** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Reinforcement Learning from Human Feedback: train reward model on preferences, optimize with PPO. DPO simpler alternative without reward model.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "RLHF & DPO" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `RLHF makes models helpful and harmless`,
            `Reward model trained on human preference comparisons`,
            `PPO fine-tunes against reward model`,
            `DPO direct preference optimization — simpler pipeline`,
            `RLHF & DPO is a foundational piece of Fine-tuning & LoRA`,
            `Connect this section to the ai track and advanced expectations`
          ],
          example: `# Concept check: RLHF & DPO
meta = {
    "topic": "ai-finetune",
    "section": "rlhf",
    "track": "ai",
    "level": "advanced",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ai-finetune
section: rlhf
track: ai
level: advanced`,
          pseudoCode: `CONCEPT: RLHF & DPO

Study checklist:
  1. RLHF makes models helpful and harmless
  2. Reward model trained on human preference comparisons
  3. PPO fine-tunes against reward model
  4. DPO direct preference optimization — simpler pipeline
  5. RLHF & DPO is a foundational piece of Fine-tuning & LoRA
  6. Connect this section to the ai track and advanced expectations

Topic: Fine-tuning & LoRA
Track: ai | Level: advanced`
        },
        {
          id: `ai-finetune-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Fine-tuning & LoRA** sits in the **ai** track of the Data Science Master curriculum. Adapt pretrained LLMs to specific tasks and domains.

**Theoretical foundation:** LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.

For **ai-finetune**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the advanced level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
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
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Fine-tuning & LoRA ties to the ai track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Fine-tuning & LoRA
Track: ai | Level: advanced`
        },
        {
          id: `ai-finetune-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Fine-tuning & LoRA**. Ground responses with RAG, enforce JSON schemas for tool calls, red-team prompts before launch, log traces for audit, and gate high-risk actions with human approval.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **ai-finetune**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
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
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with ai ecosystem conventions

Topic: Fine-tuning & LoRA
Track: ai | Level: advanced`
        },
        {
          id: `ai-finetune-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Fine-tuning & LoRA** often hit predictable walls. Prompt injection, hallucinated citations, unbounded agent loops, secret leakage via training data, and fairness gaps across demographics require proactive testing.

When stuck on **ai-finetune**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:** The best debuggers narrow the search space in minutes by changing one variable at a time.`,
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
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: Fine-tuning & LoRA
Track: ai | Level: advanced`
        },
        {
          id: `ai-finetune-real-world`,
          title: `Real-World Applications`,
          content: `**Fine-tuning & LoRA** shows up wherever **ai** skills meet business constraints. Enterprises deploy copilots, search augmentation, and workflow automation with vector databases, observability stacks, and governance aligned to regulations like the EU AI Act.

Teams shipping features around **ai-finetune** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
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
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Fine-tuning & LoRA to adjacent topics in the same track

Topic: Fine-tuning & LoRA
Track: ai | Level: advanced`
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
      estimatedMinutes: 124,
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
          content: `**LLM Agent Architecture** is essential to **Agents & Tool Use**. LLM agents that reason, plan, and interact with external tools. At the **expert** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Agent loop: observe → think → act (tool call) → observe result → repeat. LangChain, LlamaIndex frameworks.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "LLM Agent Architecture" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
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
            `Max iterations prevent infinite loops`,
            `LLM Agent Architecture is a foundational piece of Agents & Tool Use`,
            `Connect this section to the ai track and expert expectations`
          ],
          example: `# Concept check: LLM Agent Architecture
meta = {
    "topic": "ai-agents",
    "section": "agents",
    "track": "ai",
    "level": "expert",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ai-agents
section: agents
track: ai
level: expert`
        },
        {
          id: `tools`,
          title: `Function Calling / Tool Use`,
          content: `**Function Calling / Tool Use** is essential to **Agents & Tool Use**. LLM agents that reason, plan, and interact with external tools. At the **expert** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Define tools with name, description, parameters (JSON schema). Model selects tool and arguments. OpenAI function calling, Anthropic tool use.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Function Calling / Tool Use" here directly affects how confidently you can build, debug, and ship ai projects.

**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
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
            `Multiple tools enable complex workflows`,
            `Function Calling / Tool Use is a foundational piece of Agents & Tool Use`,
            `Connect this section to the ai track and expert expectations`
          ],
          pseudoCode: `CONCEPT: Function Calling / Tool Use

Study checklist:
  1. Clear tool descriptions critical for selection
  2. JSON schema defines valid parameters
  3. Execute tool and return result to model
  4. Multiple tools enable complex workflows
  5. Function Calling / Tool Use is a foundational piece of Agents & Tool Use
  6. Connect this section to the ai track and expert expectations

Topic: Agents & Tool Use
Track: ai | Level: expert`
        },
        {
          id: `frameworks`,
          title: `Agent Frameworks`,
          content: `**Agent Frameworks** is essential to **Agents & Tool Use**. LLM agents that reason, plan, and interact with external tools. At the **expert** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

LangChain: chains, agents, memory. LlamaIndex: data ingestion and RAG. AutoGen: multi-agent conversations. CrewAI: role-based agents.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Agent Frameworks" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `LangChain most popular orchestration framework`,
            `LlamaIndex optimized for data-connected apps`,
            `Multi-agent: specialized agents collaborate`,
            `Evaluate agent reliability before production`,
            `Agent Frameworks is a foundational piece of Agents & Tool Use`,
            `Connect this section to the ai track and expert expectations`
          ],
          example: `# Concept check: Agent Frameworks
meta = {
    "topic": "ai-agents",
    "section": "frameworks",
    "track": "ai",
    "level": "expert",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ai-agents
section: frameworks
track: ai
level: expert`,
          pseudoCode: `CONCEPT: Agent Frameworks

Study checklist:
  1. LangChain most popular orchestration framework
  2. LlamaIndex optimized for data-connected apps
  3. Multi-agent: specialized agents collaborate
  4. Evaluate agent reliability before production
  5. Agent Frameworks is a foundational piece of Agents & Tool Use
  6. Connect this section to the ai track and expert expectations

Topic: Agents & Tool Use
Track: ai | Level: expert`
        },
        {
          id: `safety`,
          title: `Agent Safety`,
          content: `**Agent Safety** is essential to **Agents & Tool Use**. LLM agents that reason, plan, and interact with external tools. At the **expert** level, you should be able to explain this concept to a colleague and implement it without copying blindly.

Sandbox tool execution. Validate tool inputs. Limit permissions. Human-in-the-loop for high-stakes actions.

**Why this matters:** Modern AI systems combine models, retrieval, tools, and human oversight. Mastering "Agent Safety" here directly affects how confidently you can build, debug, and ship ai projects.

**Professional habits:** Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit. Document your assumptions because they become invariants for tests, APIs, and team handoffs.

**Common mistakes:** Prompt injection, hallucinated citations, and unbounded agent loops. When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
          keyPoints: [
            `Never give agents unrestricted system access`,
            `Validate and sanitize tool inputs/outputs`,
            `Human approval for irreversible actions`,
            `Monitor agent trajectories for unexpected behavior`,
            `Agent Safety is a foundational piece of Agents & Tool Use`,
            `Connect this section to the ai track and expert expectations`
          ],
          example: `# Concept check: Agent Safety
meta = {
    "topic": "ai-agents",
    "section": "safety",
    "track": "ai",
    "level": "expert",
}
for key, value in meta.items():
    print(f"{key}: {value}")`,
          output: `topic: ai-agents
section: safety
track: ai
level: expert`,
          pseudoCode: `CONCEPT: Agent Safety

Study checklist:
  1. Never give agents unrestricted system access
  2. Validate and sanitize tool inputs/outputs
  3. Human approval for irreversible actions
  4. Monitor agent trajectories for unexpected behavior
  5. Agent Safety is a foundational piece of Agents & Tool Use
  6. Connect this section to the ai track and expert expectations

Topic: Agents & Tool Use
Track: ai | Level: expert`
        },
        {
          id: `ai-agents-deep-theory`,
          title: `Deep Theory & Concepts`,
          content: `**Agents & Tool Use** sits in the **ai** track of the Data Science Master curriculum. LLM agents that reason, plan, and interact with external tools.

**Theoretical foundation:** LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.

For **ai-agents**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.

**At the expert level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`,
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
          ],
          pseudoCode: `CONCEPT: Deep Theory & Concepts

Study checklist:
  1. Core theory of Agents & Tool Use ties to the ai track
  2. Connect definitions to inputs, outputs, and evaluation criteria
  3. Identify assumptions that break in production or at scale
  4. Relate this topic to prerequisites and follow-on modules
  5. Use paper/documentation cross-checks to validate intuition
  6. Sketch diagrams before implementing from memory

Topic: Agents & Tool Use
Track: ai | Level: expert`
        },
        {
          id: `ai-agents-patterns`,
          title: `Practical Patterns & Idioms`,
          content: `Professionals reuse patterns that encode lessons from **Agents & Tool Use**. Ground responses with RAG, enforce JSON schemas for tool calls, red-team prompts before launch, log traces for audit, and gate high-risk actions with human approval.

Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **ai-agents**, extract a minimal working example you can paste into interviews or design docs.

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`,
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
          ],
          pseudoCode: `CONCEPT: Practical Patterns & Idioms

Study checklist:
  1. Start from canonical examples before abstracting helpers
  2. One change at a time when experimenting
  3. Prefer readable names over clever one-liners
  4. Promote patterns to shared code only after reuse
  5. Document invariants your pattern relies on
  6. Align style with ai ecosystem conventions

Topic: Agents & Tool Use
Track: ai | Level: expert`
        },
        {
          id: `ai-agents-pitfalls`,
          title: `Common Pitfalls & Debugging`,
          content: `Learners working on **Agents & Tool Use** often hit predictable walls. Prompt injection, hallucinated citations, unbounded agent loops, secret leakage via training data, and fairness gaps across demographics require proactive testing.

When stuck on **ai-agents**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:** The best debuggers narrow the search space in minutes by changing one variable at a time.`,
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
          ],
          pseudoCode: `CONCEPT: Common Pitfalls & Debugging

Study checklist:
  1. Reduce to the smallest failing example
  2. Log intermediate values with types
  3. Bisect changes with git or notebook history
  4. Separate data bugs from logic bugs
  5. Record seeds, versions, and hardware context
  6. Fix root cause—not symptoms with silent catches

Topic: Agents & Tool Use
Track: ai | Level: expert`
        },
        {
          id: `ai-agents-real-world`,
          title: `Real-World Applications`,
          content: `**Agents & Tool Use** shows up wherever **ai** skills meet business constraints. Enterprises deploy copilots, search augmentation, and workflow automation with vector databases, observability stacks, and governance aligned to regulations like the EU AI Act.

Teams shipping features around **ai-agents** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`,
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
          ],
          pseudoCode: `CONCEPT: Real-World Applications

Study checklist:
  1.  Tie lessons to portfolio projects with measurable outcomes
  2. Explain tradeoffs to technical and non-technical audiences
  3. Plan deployment, monitoring, and maintenance early
  4. Document ethical and privacy implications where relevant
  5. Iterate with user feedback—not only offline metrics
  6. Connect Agents & Tool Use to adjacent topics in the same track

Topic: Agents & Tool Use
Track: ai | Level: expert`
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
      estimatedMinutes: 124,
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
