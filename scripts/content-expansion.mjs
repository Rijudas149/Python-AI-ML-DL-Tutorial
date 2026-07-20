/**
 * Expands thin curriculum sections using ONLY topic-specific source material.
 * No generic track boilerplate blocks.
 */

import { sanitizeDiagramText } from './diagram-sanitize.mjs';

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

function capitalize(s) {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function explainStep(label) {
  const lower = label.toLowerCase();
  for (const [key, explanation] of Object.entries(STEP_EXPLANATIONS)) {
    if (lower.includes(key)) return explanation;
  }
  return null;
}

function hasInlineNumberedList(text) {
  for (const line of text.split('\n')) {
    const matches = line.match(/\d+\.\s/g);
    if (matches && matches.length >= 3) return true;
  }
  return false;
}

function expandNumberedInlineList(text, sectionTitle) {
  const pattern = /(?:^|\s)(\d+)\.\s+([^0-9\n]+?)(?=\s+\d+\.\s+|$)/g;
  const matches = [...text.matchAll(pattern)];
  if (matches.length < 3) return text;

  const steps = matches.map((m) => ({ num: m[1], label: m[2].trim().replace(/\.$/, '') }));
  const before = text.slice(0, matches[0].index).trim();

  const lines = [
    before || `**${sectionTitle}** breaks down into ${steps.length} steps:`,
    '',
  ];

  for (const step of steps) {
    const detail = explainStep(step.label);
    if (detail) {
      lines.push(`${step.num}. **${capitalize(step.label)}** — ${detail}`);
    } else {
      lines.push(`${step.num}. **${capitalize(step.label)}**`);
    }
  }

  return lines.join('\n');
}

/** Disabled: keyPoints render in their own panel — duplicating them in body text hurt readability. */
function expandFromKeyPoints(content, _section) {
  return content;
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
  }

  content = expandFromKeyPoints(content, section);

  return {
    ...section,
    content,
    keyPoints: section.keyPoints ?? [],
    diagram: section.diagram ? sanitizeDiagramText(section.diagram) : section.diagram,
  };
}

/**
 * @param {object} topic
 */
export function expandTopicContent(topic) {
  return {
    ...topic,
    sections: topic.sections.map((s) => expandSectionContent(s, topic)),
  };
}
