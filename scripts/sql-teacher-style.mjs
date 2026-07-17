/**
 * SQL Teacher writing style (from SQL_Teacher curriculum):
 * - Short paragraphs (2–3 sentences), separated by blank lines
 * - **Bold** key terms on first introduction
 * - Logical flow: definition → intuition → application → practice prompt
 * - pseudoCode block for concept structure (not bullets in body text)
 * - keyPoints / example / output stay as separate section fields
 */

const FILLER_PATTERNS = [
  /\n\n\*\*Extended exploration[\s\S]*?(?=\n\n|$)/gi,
  /\n\n\*\*Conceptual depth:\*\*[\s\S]*?(?=\n\n|$)/gi,
  /\n\n\*\*Why this matters for[\s\S]*?(?=\n\n|$)/gi,
  /\n\n## Deep Theory[\s\S]*?(?=\n\n## |$)/gi,
  /\n\n## Practical Patterns[\s\S]*?(?=\n\n## |$)/gi,
  /\n\n## Common Pitfalls[\s\S]*?(?=\n\n## |$)/gi,
  /\n\n## Real-World Applications[\s\S]*?(?=\n\n## |$)/gi,
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
    .filter((s) => s.length > 20);
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
  return paragraphs.every((p) => p.length >= 60 && p.length <= 700);
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
    return raw;
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
  if (!/example below|run the|work through|try the/i.test(last)) {
    paragraphs.push(closingParagraph(topic, section));
  }

  return paragraphs.join('\n\n');
}

function generatePseudoCode(section, topic) {
  if (section.pseudoCode?.trim()) return section.pseudoCode;

  const lines = [`CONCEPT: ${section.title}`, ''];

  if (section.formulas?.length) {
    lines.push('Key relationships:');
    for (const formula of section.formulas.slice(0, 6)) {
      lines.push(`  ${formula}`);
    }
    lines.push('');
  }

  if (section.diagram?.trim()) {
    lines.push('Diagram (summary):');
    for (const row of section.diagram.split('\n').filter((l) => l.trim()).slice(0, 10)) {
      lines.push(`  ${row.trim()}`);
    }
    lines.push('');
  }

  if (section.keyPoints?.length) {
    lines.push('Checklist:');
    section.keyPoints.slice(0, 5).forEach((point, index) => {
      lines.push(`  ${index + 1}. ${point}`);
    });
  }

  if (lines.length <= 2) {
    lines.push(`Topic: ${topic.title}`);
    lines.push(`Track: ${topic.track ?? 'general'}`);
  }

  return lines.join('\n');
}

/**
 * @param {object} section
 * @param {object} topic - needs title, track
 */
export function applySqlTeacherStyle(section, topic) {
  return {
    ...section,
    content: formatContent(section, topic),
    pseudoCode: generatePseudoCode(section, topic),
  };
}
