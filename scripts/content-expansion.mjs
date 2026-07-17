/**
 * Expands thin curriculum sections into comprehensive, readable lesson content
 * while preserving numbered lists, bullets, and structured markdown.
 */

const TRACK_CONTEXT = {
  python: {
    lens: 'Python fluency underpins every data pipeline, notebook, and production service in modern ML.',
    practice: 'Write small scripts first, then refactor into reusable functions with type hints and docstrings.',
    pitfalls: 'Mutable defaults, silent exceptions, and mixing tabs with spaces cause most beginner bugs.',
  },
  math: {
    lens: 'Mathematics is the language of machine learning — every loss function and gradient has a precise meaning here.',
    practice: 'Verify formulas on paper with tiny examples, then confirm with numpy before scaling up.',
    pitfalls: 'Matrix dimension mismatches, dividing by near-zero, and confusing correlation with causation.',
  },
  data: {
    lens: 'Data quality and reproducible transforms determine whether models learn signal or noise.',
    practice: 'Profile dtypes, null rates, and cardinality before any modeling step.',
    pitfalls: 'Train/test leakage, silent dtype coercion, and Cartesian joins that explode row counts.',
  },
  ml: {
    lens: 'Classical ML teaches generalization, evaluation discipline, and the bias-variance tradeoff.',
    practice: 'Establish baselines, stratify splits, and report confidence intervals — not single scores.',
    pitfalls: 'Overfitting small datasets, tuning on test data, and ignoring class imbalance.',
  },
  dl: {
    lens: 'Deep learning trades interpretability for representational power — training dynamics matter as much as architecture.',
    practice: 'Monitor loss curves, gradient norms, and validation metrics every epoch.',
    pitfalls: 'BatchNorm train/eval mismatch, exploding gradients, and evaluating on IID splits that hide drift.',
  },
  ai: {
    lens: 'Modern AI systems combine models, retrieval, tools, and human oversight.',
    practice: 'Ground responses with retrieval, enforce schemas for tool calls, and log traces for audit.',
    pitfalls: 'Prompt injection, hallucinated citations, and unbounded agent loops.',
  },
};

const STEP_EXPLANATIONS = {
  define: 'Clarify the business question, success metric, and constraints before touching data or models.',
  problem: 'Clarify the business question, success metric, and constraints before touching data or models.',
  collect: 'Gather representative data with documented provenance, consent, and versioning.',
  data: 'Gather representative data with documented provenance, consent, and versioning.',
  eda: 'Explore distributions, missingness, correlations, and outliers to guide cleaning and features.',
  feature: 'Transform raw columns into informative signals while avoiding leakage from future information.',
  engineering: 'Transform raw columns into informative signals while avoiding leakage from future information.',
  model: 'Select algorithms suited to the problem type, data size, and interpretability requirements.',
  selection: 'Select algorithms suited to the problem type, data size, and interpretability requirements.',
  train: 'Fit parameters on training data with proper cross-validation and reproducible seeds.',
  evaluate: 'Measure generalization on held-out data using metrics aligned to business goals.',
  deploy: 'Package the model with monitoring, rollback plans, and latency/cost budgets.',
  monitor: 'Track drift, performance decay, and data quality in production over time.',
};

function trackOf(topic) {
  return topic.track ?? 'python';
}

function ctx(topic) {
  return TRACK_CONTEXT[trackOf(topic)] ?? TRACK_CONTEXT.ml;
}

function capitalize(s) {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function explainStep(label) {
  const lower = label.toLowerCase();
  for (const [key, explanation] of Object.entries(STEP_EXPLANATIONS)) {
    if (lower.includes(key)) return explanation;
  }
  return `Apply ${label.trim()} carefully and document assumptions for reproducibility.`;
}

function hasInlineNumberedList(text) {
  const lines = text.split('\n');
  for (const line of lines) {
    const matches = line.match(/\d+\.\s/g);
    if (matches && matches.length >= 3) return true;
  }
  return false;
}

function hasStructuredMarkdown(text) {
  if (hasInlineNumberedList(text)) return false;
  return (
    /^-\s/m.test(text) ||
    /^\d+\.\s/m.test(text) ||
    /^#{3,4}\s/m.test(text) ||
    /\*\*[^*]+:\*\*/m.test(text)
  );
}

function isRich(text) {
  const paragraphs = text.split(/\n\n+/).filter((p) => p.trim());
  return paragraphs.length >= 3 && text.length >= 900;
}

function expandNumberedInlineList(text, sectionTitle) {
  const pattern = /(?:^|\s)(\d+)\.\s+([^0-9\n]+?)(?=\s+\d+\.\s+|$)/g;
  const matches = [...text.matchAll(pattern)];
  if (matches.length < 3) return text;

  const steps = matches.map((m) => ({ num: m[1], label: m[2].trim().replace(/\.$/, '') }));
  const before = text.slice(0, matches[0].index).trim();

  const lines = [
    before ||
      `**${sectionTitle}** follows ${steps.length} disciplined stages. Each step builds on the previous — skipping early stages leads to unreliable results later.`,
    '',
    `**Step-by-step workflow:**`,
    '',
  ];

  for (const step of steps) {
    lines.push(`${step.num}. **${capitalize(step.label)}** — ${explainStep(step.label)}`);
  }

  lines.push('');
  lines.push(
    'Treat this as a loop, not a straight line: insights from evaluation and monitoring often send you back to EDA or feature engineering.',
  );

  return lines.join('\n');
}

function addDepthBlocks(content, section, topic) {
  const c = ctx(topic);
  const term = section.title;
  const blocks = [];

  if (!/\*\*/.test(content.slice(0, 120))) {
    blocks.push(
      `**${term}** is essential to **${topic.title}**. ${topic.description} At the **${topic.level}** level, you should be able to explain this concept to a colleague and implement it without copying blindly.`,
    );
  }

  blocks.push(content);

  blocks.push(
    `**Why this matters:** ${c.lens} Mastering "${term}" here directly affects how confidently you can build, debug, and ship ${trackOf(topic)} projects.`,
  );

  if (section.example) {
    blocks.push(
      `**Hands-on practice:** Run the code example below in Python or Jupyter. Predict the output before executing, then compare line-by-line. Modify one parameter at a time to see how results change — this builds intuition faster than re-reading.`,
    );
  }

  blocks.push(
    `**Professional habits:** ${c.practice} Document your assumptions because they become invariants for tests, APIs, and team handoffs.`,
  );

  blocks.push(
    `**Common mistakes:** ${c.pitfalls} When debugging, reduce to the smallest input that reproduces the issue and log intermediate values with their types.`,
  );

  if (section.formulas?.length) {
    blocks.push(
      `**Mathematical foundation:** This section includes ${section.formulas.length} key formula${section.formulas.length > 1 ? 's' : ''}. Identify each symbol's meaning, units, and valid input range before trusting numerical output.`,
    );
  }

  if (section.diagram?.trim()) {
    blocks.push(
      `**Visual guide:** Study the diagram alongside the explanation. Trace each arrow or region back to a term in the text — if you cannot, re-read until the mapping is clear.`,
    );
  }

  return blocks.join('\n\n');
}

function ensureKeyPoints(section, topic) {
  const existing = section.keyPoints ?? [];
  if (existing.length >= 5) return existing;

  const generated = [
    `${section.title} is a foundational piece of ${topic.title}`,
    `Connect this section to the ${trackOf(topic)} track and ${topic.level} expectations`,
    section.example
      ? 'Run the example, predict output first, then verify against expected results'
      : 'Relate definitions to concrete inputs, outputs, and evaluation criteria',
    `Apply professional habits: document assumptions and test edge cases for ${section.title}`,
    `Link ${section.title} to adjacent sections and prerequisites in this topic`,
    `Use the step-by-step logic panel as a checklist when implementing from memory`,
  ];

  const merged = [...existing];
  for (const point of generated) {
    if (merged.length >= 6) break;
    if (!merged.some((p) => p.toLowerCase().includes(point.slice(0, 20).toLowerCase()))) {
      merged.push(point);
    }
  }
  return merged.slice(0, 6);
}

function ensureExample(section, topic) {
  if (section.example?.trim()) return section;

  const track = trackOf(topic);
  const example = `# Concept check: ${section.title}\nmeta = {\n    "topic": "${topic.id}",\n    "section": "${section.id}",\n    "track": "${track}",\n    "level": "${topic.level}",\n}\nfor key, value in meta.items():\n    print(f"{key}: {value}")`;

  const output = `topic: ${topic.id}\nsection: ${section.id}\ntrack: ${track}\nlevel: ${topic.level}`;

  return { ...section, example, output };
}

/**
 * @param {object} section
 * @param {object} topic
 */
export function expandSectionContent(section, topic) {
  let content = (section.content ?? '').trim();
  if (!content) return section;

  if (hasInlineNumberedList(content)) {
    content = expandNumberedInlineList(content, section.title);
  } else if (!hasStructuredMarkdown(content)) {
    content = expandNumberedInlineList(content, section.title);
  }

  if (!isRich(content)) {
    content = addDepthBlocks(content, section, topic);
  }

  let expanded = {
    ...section,
    content,
    keyPoints: ensureKeyPoints(section, topic),
  };

  if (!expanded.example?.trim() && trackOf(topic) !== 'math') {
    expanded = ensureExample(expanded, topic);
  }

  return expanded;
}

/**
 * @param {object} topic
 */
export function expandTopicContent(topic) {
  const sections = topic.sections.map((s) => expandSectionContent(s, topic));
  const baseMinutes = sections.length * 10 + (topic.exercises?.length ?? 0) * 12;
  return {
    ...topic,
    sections,
    estimatedMinutes: Math.max(topic.estimatedMinutes ?? 30, baseMinutes + 15),
  };
}
