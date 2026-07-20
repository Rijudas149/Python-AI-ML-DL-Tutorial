/**
 * Expands curriculum sections into lengthy, GeeksforGeeks-style articles
 * using ONLY the section's own source material (content, keyPoints, formulas, code).
 */

const TRACK_LABELS = {
  python: 'Python programming',
  math: 'mathematics for data science',
  data: 'data analysis and visualization',
  ml: 'machine learning',
  dl: 'deep learning',
  ai: 'modern AI systems',
};

const TRACK_CONTEXT = {
  python: 'From scripts and APIs to notebooks and production services, Python skills compound — each concept here appears again in pandas, scikit-learn, and PyTorch workflows.',
  math: 'These ideas reappear in loss functions, optimization, model evaluation, and research papers. Strong math intuition lets you debug models instead of guessing hyperparameters.',
  data: 'Exploratory analysis and clean data pipelines determine whether downstream models succeed. Time invested here prevents silent data bugs in production.',
  ml: 'Tabular ML remains the backbone of industry — recommender systems, fraud detection, forecasting, and ranking all build on the techniques in this module.',
  dl: 'Neural networks power vision, language, speech, and generative AI. Understanding each layer and tensor operation helps you read papers and fix training failures.',
  ai: 'LLMs, RAG, agents, and multimodal systems are built from the components covered here. Production AI requires both theory and disciplined engineering.',
};

const TRACK_APPLICATIONS = {
  python: [
    'Automating repetitive spreadsheet or file tasks in finance and operations teams',
    'Building REST APIs and data ingestion scripts that feed ML pipelines',
    'Writing unit-tested library code shared across a data science team',
    'Prototyping ideas quickly in Jupyter before refactoring into modules',
  ],
  math: [
    'Deriving gradient updates and understanding convergence in model training',
    'Reading covariance structures and dimensionality in feature spaces',
    'Interpreting confidence intervals and A/B test results for product decisions',
    'Debugging NaN losses by tracing back to invalid matrix operations or logs',
  ],
  data: [
    'Exploratory analysis before any modeling sprint or Kaggle competition',
    'Building dashboards that communicate trends to non-technical stakeholders',
    'Validating data quality after ETL jobs or warehouse schema changes',
    'Feature inspection — distributions, missingness, and leakage checks',
  ],
  ml: [
    'Customer churn, credit risk, and fraud scoring on tabular enterprise data',
    'Search ranking, ad click prediction, and recommendation candidate generation',
    'Demand forecasting and inventory optimization with structured time features',
    'Medical triage and diagnostic support when labels and metrics are carefully chosen',
  ],
  dl: [
    'Image classification, detection, and segmentation in manufacturing QA',
    'Sequence modeling for NLP, time series, and speech before transformer fine-tuning',
    'Transfer learning when labeled data is scarce but unlabeled data is abundant',
    'Generative models for design, content, and simulation prototyping',
  ],
  ai: [
    'Document Q&A assistants with retrieval-augmented generation over private corpora',
    'Code completion and review tools integrated into developer workflows',
    'Multimodal search across images, text, and structured metadata',
    'Evaluation and guardrail pipelines before shipping LLM features to users',
  ],
};

const KP_ELABORATIONS = [
  (kp, ctx) =>
    `${ensurePeriod(kp)} In **${ctx.sectionTitle}**, this idea is not optional theory — it directly affects whether your implementation behaves correctly on edge cases. When you run the code example, pause after each step and ask how this point would change if the input data were larger, noisier, or slightly different.`,
  (kp, ctx) =>
    `${ensurePeriod(kp)} Teams working on ${ctx.trackLabel} code review for this explicitly because violations cause subtle bugs that unit tests often miss. A practical habit: keep a one-line comment in your notebook linking each key block of code to this principle.`,
  (kp, ctx) =>
    `${ensurePeriod(kp)} You will revisit this while studying **${ctx.topicTitle}** and in later modules where the same pattern appears with more complexity. If anything feels abstract now, return after running the example — concrete output usually makes the idea click.`,
  (kp, ctx) =>
    `${ensurePeriod(kp)} Interviewers and senior engineers expect you to explain **${ctx.sectionTitle}** using ideas like this, not only API names. Practice saying it aloud in one sentence, then point to where the example demonstrates it.`,
];

function ensurePeriod(s) {
  const t = s.trim();
  return t.endsWith('.') || t.endsWith('!') || t.endsWith('?') ? t : `${t}.`;
}

function capitalize(s) {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function wordCount(text) {
  return (text ?? '').trim().split(/\s+/).filter(Boolean).length;
}

function stripGeneratedHeadings(content) {
  return (content ?? '')
    .replace(/^###[^\n]+\n+/gm, '')
    .replace(/Study the \*\*code example\*\* below[^\n]*\./gi, '')
    .replace(/Refer to the \*\*diagram\*\*[^\n]*\./gi, '')
    .replace(/Compare your result with the \*\*output\*\* panel\./gi, '')
    .trim();
}

function splitParagraphs(content) {
  return content
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter((p) => p && !/^###\s/.test(p));
}

function splitSentences(text) {
  return text
    .replace(/\s+/g, ' ')
    .split(/(?<=[.!?])\s+(?=[A-Z*("'`\d])/)
    .map((s) => s.trim())
    .filter((s) => s.length > 20);
}

function extractBulletBlocks(content) {
  const blocks = [];
  for (const chunk of splitParagraphs(content)) {
    if (/^-\s/m.test(chunk)) {
      const label = chunk.split('\n').find((l) => !/^-\s/.test(l.trim()))?.trim();
      const items = chunk
        .split('\n')
        .filter((l) => /^-\s/.test(l.trim()))
        .map((l) => l.replace(/^-\s+/, '').trim());
      blocks.push({ label, items });
    }
  }
  return blocks;
}

function elaborateParagraph(para, ctx) {
  const sentences = splitSentences(para.replace(/\n/g, ' '));
  if (sentences.length === 0) return para;
  if (sentences.length === 1 && sentences[0].length < 200) {
    return `${sentences[0]} Take a moment to connect this sentence to **${ctx.sectionTitle}** — what would change if the input were twice as large, missing values, or drawn from a different domain?`;
  }
  return sentences.join(' ');
}

function buildWhyItMatters(ctx) {
  return [
    `**Why learn ${ctx.sectionTitle}?** On the ${ctx.trackLabel} track, this topic is a gate — later modules assume you are comfortable with the vocabulary, code patterns, and failure modes covered here.`,
    '',
    TRACK_CONTEXT[ctx.track] ?? TRACK_CONTEXT.python,
    '',
    `Skimming only the bullets is not enough for interviews or production work. Read the full explanation, complete the walkthrough, and intentionally trigger at least one mistake in the REPL so you recognize the error message when it appears in a real project.`,
  ].join('\n');
}

function buildInterviewNotes(keyPoints, ctx) {
  const prompts = [
    `Explain **${ctx.sectionTitle}** to a junior developer in two minutes.`,
    `What goes wrong if you ignore best practices for ${ctx.sectionTitle}?`,
    `How does ${ctx.sectionTitle} connect to the rest of **${ctx.topicTitle}**?`,
  ];
  if (keyPoints?.[0]) {
    prompts.push(`What does it mean that "${keyPoints[0].replace(/\.$/, '')}"? Give an example.`);
  }
  return [
    'If you are preparing for courses, certifications, or technical interviews, practice answering aloud:',
    '',
    ...prompts.map((p) => `- ${p}`),
  ].join('\n');
}

function buildIntroduction(raw, ctx) {
  const first = splitParagraphs(raw)[0] ?? '';
  const introLead = first.replace(/^-\s+/gm, '').slice(0, 500);
  const trackCtx = TRACK_CONTEXT[ctx.track] ?? TRACK_CONTEXT.python;

  return [
    introLead || `This article covers **${ctx.sectionTitle}** — a core part of **${ctx.topicTitle}** on the ${ctx.trackLabel} track.`,
    '',
    trackCtx,
    '',
    `By the end you should be able to explain the concept in plain language, run the example code yourself, and avoid the common mistakes listed at the bottom of the page.`,
  ].join('\n');
}

function buildCoreSection(raw, ctx) {
  const paragraphs = splitParagraphs(raw);
  const parts = [];

  for (const para of paragraphs) {
    if (/^-\s/m.test(para)) {
      const lines = para.split('\n');
      const label = lines.find((l) => l.trim() && !/^-\s/.test(l.trim()));
      const items = lines.filter((l) => /^-\s/.test(l.trim())).map((l) => l.replace(/^-\s+/, ''));
      if (label) parts.push(label.trim());
      if (items.length) {
        parts.push('', ...items.map((i) => `- ${i}`));
      }
    } else {
      parts.push(elaborateParagraph(para, ctx));
    }
    parts.push('');
  }

  return parts.join('\n').trim();
}

function buildConceptBreakdown(keyPoints, ctx) {
  if (!keyPoints?.length) return '';

  const parts = ['Each core idea deserves more than a one-line summary. Expand each point below before you run the code:'];
  keyPoints.forEach((kp, i) => {
    const template = KP_ELABORATIONS[i % KP_ELABORATIONS.length];
    parts.push('', `**${i + 1}. ${capitalize(kp.replace(/\.$/, ''))}**`, '', template(kp, ctx));
    parts.push(
      '',
      `Think of a concrete scenario in **${ctx.topicTitle}** where ignoring this point wastes an afternoon of debugging. Write one sentence describing that scenario in your notes — future you will thank present you.`,
    );
  });
  return parts.join('\n');
}

function buildHowItWorks(keyPoints, pseudoCode, ctx) {
  const steps = [];
  if (pseudoCode?.trim()) {
    pseudoCode
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean)
      .forEach((line, i) => {
        if (/^(FOR|IF|WHILE|RETURN|ELSE)/i.test(line) || /^\d+\./.test(line)) {
          steps.push(`${steps.length + 1}. ${line}`);
        }
      });
  }
  if (steps.length < 3 && keyPoints?.length) {
    keyPoints.slice(0, 5).forEach((kp, i) => {
      steps.push(`${i + 1}. ${capitalize(kp.replace(/\.$/, ''))}`);
    });
  }
  if (steps.length < 2) return '';

  return [
    'Follow this sequence when applying the concept in a project or interview setting:',
    '',
    ...steps,
    '',
    `At each step, sanity-check inputs and outputs — most errors in **${ctx.sectionTitle}** come from skipping validation between steps.`,
  ].join('\n');
}

function buildApplications(ctx) {
  const apps = TRACK_APPLICATIONS[ctx.track] ?? TRACK_APPLICATIONS.python;
  const hash = ctx.sectionId.length + ctx.sectionTitle.length;
  const picked = [apps[hash % apps.length], apps[(hash + 1) % apps.length], apps[(hash + 2) % apps.length]];

  return [
    `**${ctx.sectionTitle}** shows up in real projects more often than textbook examples suggest:`,
    '',
    ...picked.map((a) => `- ${a}`),
    '',
    `In each case, the details from this section inform how you structure code, choose libraries, and validate results before shipping.`,
  ].join('\n');
}

function buildFormulaSection(formulas, ctx) {
  if (!formulas?.length) return '';

  const parts = [
    'The formulas below are not decoration — they tell you what quantity is being optimized, measured, or transformed. Read each line and identify which symbols are inputs, outputs, and learned parameters:',
    '',
  ];

  formulas.forEach((f, i) => {
    parts.push(`**Formula ${i + 1}:** ${f}`, '');
    parts.push(
      `When you see this in **${ctx.sectionTitle}**, map each symbol to a variable in the code example or to a column in your dataset. If a formula looks unfamiliar, rewrite it in words before moving on — "this computes the weighted sum of…" — and only then substitute numbers.`,
      '',
    );
  });

  return parts.join('\n').trim();
}

function explainCodeLine(line) {
  const t = line.trim();
  if (!t || t.startsWith('#')) return null;

  if (/^(import|from)\s/.test(t)) {
    return `- \`${t}\` — imports dependencies; verify the same versions in your environment (\`pip freeze\` or \`conda list\`).`;
  }
  if (/^(def|class)\s/.test(t)) {
    return `- \`${t}\` — defines reusable structure; trace who calls it and with what arguments.`;
  }
  if (/\.fit\(|\.fit_transform\(|\.transform\(/.test(t)) {
    return `- \`${t}\` — sklearn-style fit/transform; remember fit on train only to avoid leakage.`;
  }
  if (/print\s*\(/.test(t)) {
    return `- \`${t}\` — prints so you can compare against the expected output panel line by line.`;
  }
  if (/^(if|elif|else|for|while|with)\b/.test(t)) {
    return `- \`${t}\` — control flow; step through mentally with one iteration or one branch first.`;
  }
  if (/=/.test(t) && !/==|!=|<=|>=/.test(t)) {
    return `- \`${t}\` — assignment; note the variable name and predict its value before running the next line.`;
  }
  return `- \`${t}\` — execute this line in isolation if the full script fails; inspect types with \`type(...)\` or \`shape\` for arrays.`;
}

function buildExampleWalkthrough(example, output, ctx) {
  if (!example?.trim()) return '';

  const lines = example.split('\n').filter((l) => l.trim() && !l.trim().startsWith('#'));
  const explained = lines.map(explainCodeLine).filter(Boolean);

  const parts = [
    'Do not copy-paste blindly. Walk through the program in four phases: **(1)** read imports, **(2)** trace data creation, **(3)** follow the main operation, **(4)** compare printed output.',
    '',
    '**Line-by-line notes:**',
    '',
    ...explained,
  ];

  if (output?.trim()) {
    parts.push(
      '',
      '**Expected output:**',
      '',
      '```',
      output.trim(),
      '```',
      '',
      'If your output differs, diff the first mismatching line, then walk backward to the line that produced it. Small floating-point differences are normal; wrong types or missing keys are not.',
    );
  }

  parts.push(
    '',
    `**Challenge:** Change one literal or argument in the example (for **${ctx.sectionTitle}**) and predict the new output before re-running. This single habit builds deeper understanding than re-reading the article.`,
  );

  return parts.join('\n');
}

function buildBestPractices(keyPoints, ctx) {
  if (!keyPoints?.length) {
    return [
      `- Re-read the introduction and summarize **${ctx.sectionTitle}** in three sentences without looking.`,
      `- Run the example twice: once following along, once from memory with small modifications.`,
      `- Write one common mistake you almost made in a personal notes file for **${ctx.topicTitle}**.`,
    ].join('\n');
  }

  return [
    'Use this checklist before you mark the section complete:',
    '',
    ...keyPoints.map((kp) => `- I can explain: ${kp.replace(/\.$/, '')}`),
    `- I ran the example and matched the expected output for **${ctx.sectionTitle}**.`,
    `- I read the common-mistakes panel and can describe how to avoid at least two items.`,
  ].join('\n');
}

function buildSummary(keyPoints, ctx) {
  if (!keyPoints?.length) {
    return `**${ctx.sectionTitle}** is one building block in **${ctx.topicTitle}**. Return to this article when the same term appears in a later module — second exposure is when concepts stick.`;
  }

  return [
    `To recap **${ctx.sectionTitle}**: ${keyPoints.map((k) => k.replace(/\.$/, '').toLowerCase()).join('; ')}.`,
    '',
    'Keep this summary in your own words in the notes panel — teaching the idea to someone else (or your future self) is the fastest way to know you truly understand it.',
  ].join('\n');
}

/**
 * Build a long-form article (target 600–1200+ words) from section source material.
 * @param {object} section
 * @param {object} topic
 */
export function buildLongArticle(section, topic) {
  const track = topic.track ?? 'python';
  const raw = stripGeneratedHeadings(section.content ?? '');
  const ctx = {
    track,
    trackLabel: TRACK_LABELS[track] ?? 'data science',
    topicTitle: topic.title ?? 'this topic',
    sectionTitle: section.title ?? 'this concept',
    sectionId: section.id ?? section.title ?? 'section',
  };

  const parts = [
    '### Introduction',
    '',
    buildIntroduction(raw, ctx),
    '',
    '### Why This Matters',
    '',
    buildWhyItMatters(ctx),
    '',
    `### ${section.title} — Full Explanation`,
    '',
    buildCoreSection(raw, ctx),
  ];

  const conceptBreakdown = buildConceptBreakdown(section.keyPoints, ctx);
  if (conceptBreakdown) {
    parts.push('', '### Concept-by-Concept Breakdown', '', conceptBreakdown);
  }

  const howItWorks = buildHowItWorks(section.keyPoints, section.pseudoCode, ctx);
  if (howItWorks) {
    parts.push('', '### How It Works (Step by Step)', '', howItWorks);
  }

  const formulaSection = buildFormulaSection(section.formulas, ctx);
  if (formulaSection) {
    parts.push('', '### Mathematical Foundation', '', formulaSection);
  }

  parts.push('', '### Real-World Applications', '', buildApplications(ctx));

  const walkthrough = buildExampleWalkthrough(section.example, section.output, ctx);
  if (walkthrough) {
    parts.push('', '### Example Walkthrough', '', walkthrough);
  } else {
    parts.push(
      '',
      '### Hands-On Practice',
      '',
      `Open a Python REPL or notebook and type a minimal version of **${section.title}** from memory. Even five lines of working code solidify more understanding than re-reading this article.`,
    );
  }

  parts.push('', '### Best Practices Checklist', '', buildBestPractices(section.keyPoints, ctx));
  parts.push('', '### Interview & Review Questions', '', buildInterviewNotes(section.keyPoints, ctx));
  parts.push('', '### Summary', '', buildSummary(section.keyPoints, ctx));

  if (section.example) {
    parts.push(
      '',
      '### Runnable Code',
      '',
      'The complete runnable program and its output are shown in the **Code Example** and **Output** panels below this article.',
    );
  }

  if (section.diagram || section.formulas?.length) {
    parts.push('', '### Visual Reference', '', 'See the diagram and formula panels below for a compact visual summary.');
  }

  let article = parts.join('\n').replace(/\n{3,}/g, '\n\n').trim();

  // Ensure minimum length — add extra elaboration if still short
  if (wordCount(article) < 750 && section.keyPoints?.length) {
    const extra = section.keyPoints
      .map(
        (kp, i) =>
          `**Additional note ${i + 1}:** ${ensurePeriod(kp)} Relate this back to **${ctx.topicTitle}** whenever you see similar APIs or notation in later lessons.`,
      )
      .join('\n\n');
    article = article.replace('### Summary', `### Additional Notes\n\n${extra}\n\n### Summary`);
  }

  return article;
}

/** Estimate reading minutes for expanded content (~180 wpm for technical text). */
export function estimateArticleMinutes(section, topic) {
  const article = buildLongArticle(section, topic);
  return Math.max(8, Math.ceil(wordCount(article) / 180));
}
