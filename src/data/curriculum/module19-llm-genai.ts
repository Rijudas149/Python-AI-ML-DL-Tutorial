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

**Why this matters for Large Language Models Overview:** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
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

**Why this matters for Large Language Models Overview:** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
          keyPoints: [
            `No single benchmark captures all capabilities`,
            `HumanEval for code generation quality`,
            `Build domain-specific eval sets`,
            `Automated eval with stronger model as judge`
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
      estimatedMinutes: 30,
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

**Why this matters for Prompt Engineering:** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
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

**Why this matters for Prompt Engineering:** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
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

**Why this matters for Prompt Engineering:** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
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

**Why this matters for Prompt Engineering:** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
          keyPoints: [
            `JSON mode ensures parseable output`,
            `Prompt chaining breaks complex tasks into steps`,
            `ReAct interleaves reasoning and tool calls`,
            `Test prompts systematically with eval sets`
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
      estimatedMinutes: 25,
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

**Why this matters for RAG (Retrieval Augmented Generation):** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
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

**Why this matters for RAG (Retrieval Augmented Generation):** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
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

**Why this matters for RAG (Retrieval Augmented Generation):** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
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

**Why this matters for RAG (Retrieval Augmented Generation):** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
          keyPoints: [
            `Evaluate retrieval and generation separately`,
            `Faithfulness: answer grounded in retrieved context`,
            `RAGAS automated RAG evaluation`,
            `Human eval for production quality assurance`
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
      estimatedMinutes: 25,
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

**Why this matters for Fine-tuning & LoRA:** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
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

**Why this matters for Fine-tuning & LoRA:** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
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

**Why this matters for Fine-tuning & LoRA:** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
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

**Why this matters for Fine-tuning & LoRA:** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
          keyPoints: [
            `RLHF makes models helpful and harmless`,
            `Reward model trained on human preference comparisons`,
            `PPO fine-tunes against reward model`,
            `DPO direct preference optimization — simpler pipeline`
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
      estimatedMinutes: 25,
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

**Why this matters for Agents & Tool Use:** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
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

**Why this matters for Agents & Tool Use:** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
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

**Why this matters for Agents & Tool Use:** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
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

**Why this matters for Agents & Tool Use:** Modern AI systems combine research breakthroughs with rigorous engineering practice. Understanding this section deeply will help you read research papers, follow university lectures, and debug real projects. Revisit the official documentation and course notes linked at the bottom of this lesson after completing the exercises.`,
          keyPoints: [
            `Never give agents unrestricted system access`,
            `Validate and sanitize tool inputs/outputs`,
            `Human approval for irreversible actions`,
            `Monitor agent trajectories for unexpected behavior`
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
      estimatedMinutes: 35,
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
