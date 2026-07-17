/**
 * SQL Teacher writing style (from SQL_Teacher curriculum):
 * - Short paragraphs (2–3 sentences), separated by blank lines
 * - **Bold** key terms on first introduction
 * - Bullet lists when explaining new concepts (full sentences per bullet)
 * - pseudoCode block for concept structure
 * - keyPoints / example / output stay as separate section fields
 */

import { sanitizeDiagramText, isDecorativeDiagramLine } from './diagram-sanitize.mjs';

const FILLER_PATTERNS = [
  /\n\n\*\*Extended exploration[\s\S]*?(?=\n\n|$)/gi,
  /\n\n\*\*Conceptual depth:\*\*[\s\S]*?(?=\n\n|$)/gi,
];

const TRACK_CLOSING = {
  python:
    'Run the Python example below in a notebook or script, compare your output with the expected result, then review the key takeaways before attempting the exercises.',
  math:
    'Work through the example below with pen and paper first, then verify in code. The formulas and diagram connect directly to how models learn and how you debug numerical issues.',
  data:
    'Apply this section on a small sample dataset before scaling up. Run the example, inspect the output, and use the takeaways as a checklist for your own analysis workflows.',
  ml:
    'During model building, these ideas guide feature choices, algorithm selection, and evaluation. Run the example, study the output, and confirm each takeaway against what you observe.',
  dl:
    'Neural network code relies on this foundation at every step — shapes, gradients, and training loops. Execute the example carefully before moving to the exercises.',
  ai:
    'Production AI systems need this concept when designing reliable pipelines. Test the example output, then use the takeaways when reviewing your own project designs.',
};

function stripFiller(text) {
  let out = text ?? '';
  for (const pattern of FILLER_PATTERNS) {
    out = out.replace(pattern, '');
  }
  return out.replace(/\n{3,}/g, '\n\n').trim();
}

function splitSentences(text) {
  const normalized = text.replace(/\s+/g, ' ').trim();
  if (!normalized) return [];

  const parts = normalized.split(/(?<=[.!?])\s+(?=[A-Z*("'])/);
  return parts
    .map((s) => s.trim())
    .filter((s) => {
      if (s.length <= 20) return false;
      if (/^\d+\.\s/.test(s)) return false;
      return true;
    });
}

function groupParagraphs(sentences, targetSize = 2) {
  if (!sentences.length) return [];
  const paragraphs = [];
  for (let i = 0; i < sentences.length; i += targetSize) {
    paragraphs.push(sentences.slice(i, i + targetSize).join(' '));
  }
  return paragraphs;
}

function isWellStructured(content) {
  const paragraphs = content.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
  if (paragraphs.length < 3) return false;

  const hasLists = /^-\s/m.test(content) || /^\d+\.\s/m.test(content);
  const hasHeadings = /^#{3,4}\s/m.test(content) || /\*\*[^*]+:\*\*\s/m.test(content);

  if (hasLists || hasHeadings) return true;

  return paragraphs.every((p) => p.length >= 60 && p.length <= 900);
}

function ensureExplanationBullets(content) {
  const headings = [
    'Why this matters',
    'Professional habits',
    'Common mistakes',
    'Hands-on practice',
    'Mathematical foundation',
    'Visual guide',
    'Theoretical foundation',
    'Study approach',
    'Recommended workflow',
    'Debugging checklist',
    'Career narrative',
    'Portfolio tip',
    'Pattern mindset',
    'Expert habit',
  ];

  let out = content;
  for (const heading of headings) {
    const re = new RegExp(`\\*\\*${heading.replace(/ /g, ' ')}:\\*\\*\\s+([^\\n]+)`, 'g');
    out = out.replace(re, (match, body) => {
      if (/\n-\s/.test(match)) return match;
      const trimmed = body.trim();
      const sentences = trimmed
        .split(/(?<=[.!?])\s+(?=[A-Z*("'])/)
        .map((s) => s.trim())
        .filter((s) => s.length > 12);
      if (sentences.length <= 1) {
        return `**${heading}:**\n\n- ${trimmed}`;
      }
      return `**${heading}:**\n\n${sentences.map((s) => `- ${s}`).join('\n')}`;
    });
  }
  return out;
}

function closingParagraph(topic, section) {
  const track = topic.track ?? 'python';
  const hook = TRACK_CLOSING[track] ?? TRACK_CLOSING.ml;
  return `**${section.title}** in the context of **${topic.title}**: ${hook}`;
}

function formatContent(section, topic) {
  const raw = stripFiller(section.content);
  if (!raw) return raw;

  if (isWellStructured(raw)) {
    return ensureExplanationBullets(raw);
  }

  if (/^-\s/m.test(raw) || /^\d+\.\s/m.test(raw) || /^#{3,4}\s/m.test(raw)) {
    return ensureExplanationBullets(raw);
  }

  const sentences = splitSentences(raw);
  if (sentences.length === 0) return raw;

  let targetSize = 2;
  if (sentences.length >= 8) targetSize = 3;
  if (sentences.length <= 3) targetSize = 1;

  let paragraphs = groupParagraphs(sentences, targetSize);

  if (paragraphs.length < 3 && sentences.length >= 4) {
    paragraphs = groupParagraphs(sentences, 2);
  }

  const last = paragraphs[paragraphs.length - 1] ?? '';
  if (!/example below|run the|work through|try the|hands-on/i.test(last)) {
    paragraphs.push(closingParagraph(topic, section));
  }

  return ensureExplanationBullets(paragraphs.join('\n\n'));
}

function generatePseudoCode(section, topic) {
  if (section.pseudoCode?.trim()) return section.pseudoCode;

  const lines = [`CONCEPT: ${section.title}`, ''];

  if (section.formulas?.length) {
    lines.push('Key relationships:');
    for (const formula of section.formulas.slice(0, 8)) {
      lines.push(`  ${formula}`);
    }
    lines.push('');
  }

  if (section.diagram?.trim()) {
    lines.push('Visual summary:');
    for (const row of section.diagram
      .split('\n')
      .filter((l) => l.trim() && !isDecorativeDiagramLine(l))
      .slice(0, 12)) {
      lines.push(`  ${row.trim()}`);
    }
    lines.push('');
  }

  if (section.keyPoints?.length) {
    lines.push('Study checklist:');
    section.keyPoints.slice(0, 6).forEach((point, index) => {
      lines.push(`  ${index + 1}. ${point}`);
    });
    lines.push('');
  }

  lines.push(`Topic: ${topic.title}`);
  lines.push(`Track: ${topic.track ?? 'general'} | Level: ${topic.level}`);

  return lines.join('\n');
}

/**
 * @param {object} section
 * @param {object} topic - needs title, track
 */
export function applySqlTeacherStyle(section, topic) {
  const diagram = section.diagram ? sanitizeDiagramText(section.diagram) : section.diagram;
  const styled = {
    ...section,
    diagram,
    content: formatContent(section, topic),
    pseudoCode: generatePseudoCode({ ...section, diagram }, topic),
  };
  return styled;
}
