/**
 * Deepens topic content by expanding thin sections and appending four
 * track-aware enrichment sections to every topic.
 */

const TRACK_CONTEXT = {
  python: {
    lens: 'Python fluency underpins every data pipeline, notebook, and production service in modern ML.',
    theory: 'Python\'s execution model combines bytecode interpretation with C extensions for hot paths. Understanding reference semantics, the import system, and standard-library conventions helps you write code that scales from scripts to services.',
    patterns: 'Idiomatic Python favors explicit over implicit: context managers for resources, comprehensions for transforms, dataclasses for structured data, and pathlib over string paths. Follow PEP 8 naming and keep functions small with clear type hints at boundaries.',
    pitfalls: 'Common mistakes include mutable default arguments, shadowing built-ins, ignoring exceptions silently, and mixing tabs/spaces. Use pdb or breakpoint(), structured logging, and repr()-rich error messages when debugging.',
    realWorld: 'Production Python appears in FastAPI microservices, Airflow DAGs, Jupyter research workflows, and pytest CI gates. Teams standardize on virtual environments, ruff/black formatters, and pinned dependency lockfiles.',
  },
  math: {
    lens: 'Mathematics is the foundation every ML algorithm rests on — without it, hyperparameters and loss curves are magic numbers.',
    theory: 'Linear algebra describes transformations of data; calculus explains how models learn via gradients; probability quantifies uncertainty; optimization finds best parameters. Each branch connects directly to numpy operations and loss functions.',
    patterns: 'Work through formulas by hand on small examples before scaling to code. Use numpy to verify matrix identities, plot functions to build intuition, and connect each formula to its sklearn/pytorch counterpart.',
    pitfalls: 'Memorizing formulas without understanding assumptions; confusing correlation with causation; matrix dimension mismatches; dividing by zero in poorly conditioned systems; ignoring units and scale in optimization.',
    realWorld: 'Interview loops test linear algebra and probability; researchers derive gradients for novel architectures; engineers debug NaN losses by checking Jacobians and learning rates against mathematical theory.',
  },
  data: {
    lens: 'Data quality and reproducible transforms determine whether models learn signal or noise.',
    theory: 'Statistical thinking—distributions, sampling bias, missingness mechanisms, and leakage—must precede modeling. Every aggregation encodes assumptions about granularity and time.',
    patterns: 'Use explicit schemas, partition keys for large tables, vectorized operations over Python loops, and idempotent ETL jobs with checkpointing. Document column lineage and unit tests on critical transforms.',
    pitfalls: 'Watch for train/test leakage via future information, silent dtype coercion, Cartesian joins exploding row counts, and unhandled null semantics. Profile memory before scaling pandas workloads.',
    realWorld: 'Analytics engineers ship dbt models, Spark jobs, and DuckDB pipelines; scientists rely on reproducible notebooks with pinned seeds and versioned datasets on object storage.',
  },
  ml: {
    lens: 'Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff that still governs deep systems.',
    theory: 'Learning algorithms minimize expected risk on unseen data. Regularization, cross-validation, and calibrated metrics translate theory into decisions about deployment readiness.',
    patterns: 'Establish baselines first, stratify splits, track experiments with metadata, separate feature engineering from model selection, and report confidence intervals—not single leaderboard scores.',
    pitfalls: 'Overfitting small datasets, tuning on test sets, ignoring class imbalance, and trusting default hyperparameters without domain validation remain frequent failure modes.',
    realWorld: 'ML engineers productionize sklearn/XGBoost models behind feature stores, A/B tests, and monitoring for drift; Kaggle and internal benchmarks inform feature design before deep learning spend.',
  },
  dl: {
    lens: 'Deep learning trades interpretability for representational power—success requires careful training dynamics and data scaling.',
    theory: 'Neural networks compose linear maps with nonlinearities; backpropagation computes gradients via the chain rule. Initialization, normalization, and learning-rate schedules stabilize optimization in high dimensions.',
    patterns: 'Use transfer learning when data is limited, mixed precision on GPUs, gradient clipping for RNNs/transformers, early stopping on validation loss, and checkpoint averaging for robustness.',
    pitfalls: 'BatchNorm train/eval mismatch, exploding/vanishing gradients, label noise amplified by memorization, and evaluation on IID splits that hide temporal drift are classic traps.',
    realWorld: 'Vision, speech, and language products fine-tune pretrained backbones, export ONNX/TorchScript, and serve with batching and GPU autoscaling behind latency SLOs.',
  },
  ai: {
    lens: 'Modern AI systems combine models, retrieval, tools, and human oversight—engineering and safety are inseparable.',
    theory: 'LLMs and agents optimize next-token likelihood or reward signals that proxy human preferences. Capabilities emerge from scale, data curation, and alignment techniques—not magic.',
    patterns: 'Ground responses with RAG, enforce JSON schemas for tool calls, red-team prompts before launch, log traces for audit, and gate high-risk actions with human approval.',
    pitfalls: 'Prompt injection, hallucinated citations, unbounded agent loops, secret leakage via training data, and fairness gaps across demographics require proactive testing.',
    realWorld: 'Enterprises deploy copilots, search augmentation, and workflow automation with vector databases, observability stacks, and governance aligned to regulations like the EU AI Act.',
  },
};

/** Topic-specific overrides for the four deepening sections (optional). */
const TOPIC_OVERRIDES = {
  'py-testing': {
    theoryExtra: 'pytest fixtures provide dependency injection for tests; unittest.mock.patch isolates units from I/O. Test pyramid: many fast unit tests, fewer integration tests, minimal brittle E2E.',
    patternsExtra: 'Parametrize tests with @pytest.mark.parametrize; use tmp_path for filesystem tests; freeze time with freezegun for temporal logic.',
    pitfallsExtra: 'Flaky tests from shared global state, testing implementation details instead of behavior, and over-mocking that hides integration bugs.',
    realWorldExtra: 'CI pipelines run pytest with coverage gates; teams enforce 80%+ coverage on core libraries and mutation testing on critical paths.',
  },
  'py-async': {
    theoryExtra: 'asyncio event loop schedules coroutines cooperatively; await yields control at I/O boundaries. CPU-bound work belongs in ProcessPoolExecutor, not the event loop.',
    patternsExtra: 'Use asyncio.gather for concurrent I/O; aiohttp ClientSession as context manager; asyncio.Semaphore to limit concurrency.',
    pitfallsExtra: 'Blocking calls inside async def freeze the loop; forgetting await creates coroutine objects that never run; mixing threads without asyncio.to_thread().',
    realWorldExtra: 'High-throughput API gateways and websocket servers use async Python; ML inference often stays sync or uses separate worker pools.',
  },
  'gen-diffusion': {
    theoryExtra: 'Diffusion models learn to reverse a noise process: forward corruption adds Gaussian noise over T steps; the network predicts noise ε or score ∇log p(x). DDPM sampling iteratively denoises from pure noise.',
    patternsExtra: 'Classifier-free guidance scales conditional vs unconditional predictions; latent diffusion (Stable Diffusion) operates in VAE space for efficiency.',
    pitfallsExtra: 'Mode collapse less common than GANs but sampling is slow; CFG too high causes oversaturation; training requires large curated datasets.',
    realWorldExtra: 'Image generation products, inpainting tools, and video diffusion pipelines power creative workflows with safety filters and watermarking.',
  },
  'ai-vectors': {
    theoryExtra: 'Embeddings map discrete tokens or documents into dense vectors where semantic similarity approximates cosine distance. Approximate nearest neighbor (ANN) indexes trade recall for speed at billion scale.',
    patternsExtra: 'Chunk documents 256–512 tokens with overlap; hybrid search combines BM25 with dense retrieval; re-rank top-k with cross-encoders.',
    pitfallsExtra: 'Stale embeddings after model updates, wrong distance metric (cosine vs L2), and chunk boundaries splitting critical context.',
    realWorldExtra: 'RAG stacks use Pinecone, Weaviate, FAISS, or Chroma behind enterprise search and support copilots.',
  },
};

function trackOf(topic) {
  return topic.track ?? 'python';
}

function ctx(topic) {
  return TRACK_CONTEXT[trackOf(topic)] ?? TRACK_CONTEXT.ml;
}

function overrides(topic) {
  return TOPIC_OVERRIDES[topic.id] ?? {};
}

function expandSectionContent(section, topic) {
  return section.content;
}

function buildDeepTheorySection(topic) {
  const c = ctx(topic);
  const o = overrides(topic);
  const content = `**${topic.title}** sits in the **${trackOf(topic)}** track of the Data Science Master curriculum. ${topic.description}

**Theoretical foundation:** ${c.theory}

${o.theoryExtra ?? `For **${topic.id}**, relate abstract definitions to measurable quantities: inputs, outputs, loss or cost, and constraints. When reading papers or documentation, identify which assumptions in this lesson appear as lemmas or implementation defaults.`}

**At the ${topic.level} level**, connect prerequisites to new material — sketch mental models on paper before coding. Formal notation and code should mutually reinforce each other; if they diverge, your understanding has a gap to close.

**Study approach:** Read this section once for overview, once for detail, then teach it aloud in two minutes without notes. That gap reveals what to revisit.`;

  return {
    id: `${topic.id}-deep-theory`,
    title: 'Deep Theory & Concepts',
    content,
    example: `# Concept check for ${topic.title.replace(/"/g, '\\"')}\nmeta = {"topic_id": "${topic.id}", "track": "${trackOf(topic)}", "level": "${topic.level}"}\nprint(meta["topic_id"], meta["track"], meta["level"])`,
    output: `${topic.id} ${trackOf(topic)} ${topic.level}`,
    keyPoints: [
      `Core theory of ${topic.title} ties to the ${trackOf(topic)} track`,
      'Connect definitions to inputs, outputs, and evaluation criteria',
      'Identify assumptions that break in production or at scale',
      'Relate this topic to prerequisites and follow-on modules',
      'Use paper/documentation cross-checks to validate intuition',
      'Sketch diagrams before implementing from memory',
    ],
  };
}

function buildPatternsSection(topic) {
  const c = ctx(topic);
  const o = overrides(topic);
  const content = `Professionals reuse patterns that encode lessons from **${topic.title}**. ${c.patterns}

${o.patternsExtra ?? `Apply a consistent project layout: separate configuration, core logic, and CLI/API entry points. Name functions after verbs, types after nouns, and tests after behavior ("test_returns_empty_when_input_missing"). For **${topic.id}**, extract a minimal working example you can paste into interviews or design docs.`}

**Recommended workflow:**

1. Reproduce the canonical example from earlier sections exactly.
2. Vary one parameter at a time and log what changes.
3. Capture results in a notebook cell or short markdown log.
4. Promote stable patterns into shared utilities only after the second reuse.

**Pattern mindset:** Good patterns are boring — they reduce cognitive load so you can focus on the hard problem, not boilerplate.`;

  return {
    id: `${topic.id}-patterns`,
    title: 'Practical Patterns & Idioms',
    content,
    example: `# Idiomatic pattern snapshot for ${topic.id}\nfrom dataclasses import dataclass\n\n@dataclass(frozen=True)\nclass LessonRef:\n    topic_id: str\n    title: str\n\nref = LessonRef("${topic.id}", "${topic.title.replace(/"/g, '\\"')}")\nprint(ref.topic_id, ref.title.split()[0])`,
    output: `${topic.id} ${topic.title.split(' ')[0]}`,
    keyPoints: [
      'Start from canonical examples before abstracting helpers',
      'One change at a time when experimenting',
      'Prefer readable names over clever one-liners',
      'Promote patterns to shared code only after reuse',
      'Document invariants your pattern relies on',
      `Align style with ${trackOf(topic)} ecosystem conventions`,
    ],
  };
}

function buildPitfallsSection(topic) {
  const c = ctx(topic);
  const o = overrides(topic);
  const content = `Learners working on **${topic.title}** often hit predictable walls. ${c.pitfalls}

${o.pitfallsExtra ?? `When stuck on **${topic.id}**, reproduce with the smallest input, enable verbose logging, and bisect recent changes. Capture stack traces, shapes, dtypes, and random seeds in bug reports. Ask whether the failure is data, code, or environment — and test each hypothesis independently.`}

**Debugging checklist:**

- Verify assumptions listed in earlier sections.
- Compare actual vs expected intermediate values.
- Check for off-by-one errors and unit mismatches.
- Confirm library versions match the tutorial environment.
- Build a minimal reproducible example before asking for help.

**Expert habit:** The best debuggers narrow the search space in minutes by changing one variable at a time.`;

  return {
    id: `${topic.id}-pitfalls`,
    title: 'Common Pitfalls & Debugging',
    content,
    example: `# Minimal repro template\ndef debug_step(label, value):\n    print(f"[{label}] {value!r} ({type(value).__name__})")\n\ndebug_step("${topic.id}", "${topic.title.replace(/"/g, '\\"')}")\ndebug_step("section_count", ${topic.sections?.length ?? 0})`,
    output: `[${topic.id}] '${topic.title}' (str)\n[section_count] ${topic.sections?.length ?? 0}`,
    keyPoints: [
      'Reduce to the smallest failing example',
      'Log intermediate values with types',
      'Bisect changes with git or notebook history',
      'Separate data bugs from logic bugs',
      'Record seeds, versions, and hardware context',
      'Fix root cause—not symptoms with silent catches',
    ],
  };
}

function buildRealWorldSection(topic) {
  const c = ctx(topic);
  const o = overrides(topic);
  const content = `**${topic.title}** shows up wherever **${trackOf(topic)}** skills meet business constraints. ${c.realWorld}

${o.realWorldExtra ?? `Teams shipping features around **${topic.id}** align research notebooks with staged rollouts: offline metrics, shadow mode, canary releases, and rollback plans. Stakeholders care about latency, cost, maintainability, and compliance — not only accuracy.`}

**Career narrative:** Interviewers expect you to describe a project where this topic mattered: the problem, your approach, metric movement, tradeoffs, and what you would do differently.

**Portfolio tip:** Link this lesson to README entries and capstone modules later in the curriculum. One concrete project beats ten theoretical certificates.`;

  return {
    id: `${topic.id}-real-world`,
    title: 'Real-World Applications',
    content,
    example: `# Portfolio bullet generator for ${topic.title}\nskills = ["${trackOf(topic)}", "${topic.level}", "${topic.id}"]\nprint("Built project applying:", ", ".join(skills))`,
    output: `Built project applying: ${trackOf(topic)}, ${topic.level}, ${topic.id}`,
    keyPoints: [
      ' Tie lessons to portfolio projects with measurable outcomes',
      'Explain tradeoffs to technical and non-technical audiences',
      'Plan deployment, monitoring, and maintenance early',
      'Document ethical and privacy implications where relevant',
      'Iterate with user feedback—not only offline metrics',
      `Connect ${topic.title} to adjacent topics in the same track`,
    ],
  };
}

const DEEPENING_BUILDERS = [
  buildDeepTheorySection,
  buildPatternsSection,
  buildPitfallsSection,
  buildRealWorldSection,
];

/**
 * Deepen a topic by expanding short sections and appending four enrichment sections.
 * @param {object} topic - Curriculum topic object
 * @returns {object} Deepened topic
 */
export function deepenTopicContent(topic) {
  const expandedSections = topic.sections.map((s) => ({
    ...s,
    content: expandSectionContent(s, topic),
  }));

  const enrichmentSections = DEEPENING_BUILDERS.map((build) => build(topic));

  const allSections = [...expandedSections, ...enrichmentSections];
  const exerciseCount = topic.exercises?.length ?? 0;

  return {
    ...topic,
    sections: allSections,
    estimatedMinutes: Math.max(
      topic.estimatedMinutes ?? 40,
      allSections.length * 10 + exerciseCount * 12 + 20,
    ),
  };
}
