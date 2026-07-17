/**
 * SQL Teacher writing style — light touch only:
 * - Preserve authored content; do not inject generic boilerplate
 * - Split dense single-paragraph text into readable paragraphs
 * - Generate pseudoCode from section-specific formulas / keyPoints only
 */

import { sanitizeDiagramText } from './diagram-sanitize.mjs';

const ROBOTIC_BLOCK_PATTERNS = [
  /\n\n\*\*Why this matters:\*\*[\s\S]*?(?=\n\n\*\*|$)/gi,
  /\n\n\*\*Professional habits:\*\*[\s\S]*?(?=\n\n\*\*|$)/gi,
  /\n\n\*\*Common mistakes:\*\*[\s\S]*?(?=\n\n\*\*|$)/gi,
  /\n\n\*\*Hands-on practice:\*\*[\s\S]*?(?=\n\n\*\*|$)/gi,
  /\n\n\*\*Mathematical foundation:\*\*[\s\S]*?(?=\n\n\*\*|$)/gi,
  /\n\n\*\*Visual guide:\*\*[\s\S]*?(?=\n\n\*\*|$)/gi,
  /\n\n\*\*Theoretical foundation:\*\*[\s\S]*?(?=\n\n\*\*|$)/gi,
  /\n\n\*\*Study approach:\*\*[\s\S]*?(?=\n\n\*\*|$)/gi,
  /\n\n\*\*Recommended workflow:\*\*[\s\S]*?(?=\n\n\*\*|$)/gi,
  /\n\n\*\*Debugging checklist:\*\*[\s\S]*?(?=\n\n\*\*|$)/gi,
  /\n\n\*\*Career narrative:\*\*[\s\S]*?(?=\n\n\*\*|$)/gi,
  /\n\n\*\*Portfolio tip:\*\*[\s\S]*?(?=\n\n\*\*|$)/gi,
  /\n\n\*\*Pattern mindset:\*\*[\s\S]*?(?=\n\n\*\*|$)/gi,
  /\n\n\*\*Expert habit:\*\*[\s\S]*?(?=\n\n\*\*|$)/gi,
  /\n\n\*\*[^*]+ — what you need to know:\*\*[\s\S]*?(?=\n\n\*\*[^*]+[^:]\*\*|\n\n[^-*]|$)/gi,
  /\n\n\*\*[^*]+\*\* in the context of \*\*[^*]+\*\*:[^\n]*(?:\n(?!#)[^\n]*)*/gi,
  /\n\nTreat this as a loop, not a straight line:[^\n]*/gi,
  /\n\n\*\*Step-by-step workflow:\*\*\s*\n\n/gi,
  /\n\n\*\*Applying [^*]+:\*\*[\s\S]*?Strong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project\./gi,
  /\n\nWhen studying "[^"]+", connect theory to practice by predicting outputs before running examples, then explaining discrepancies\. Note failure modes—missing data, wrong hyperparameters, API timeouts, shape mismatches—and how you would detect them in logs or tests\./gi,
  /\n\nStrong practitioners capture these lessons in runbooks and reusable templates rather than re-learning them on every project\./gi,
];

const ENRICHMENT_SECTION_IDS = /-(deep-theory|patterns|pitfalls|real-world)$/;

function stripRoboticBlocks(text) {
  let out = text ?? '';
  for (const pattern of ROBOTIC_BLOCK_PATTERNS) {
    out = out.replace(pattern, '');
  }
  return out.replace(/\n{3,}/g, '\n\n').trim();
}

function splitSentences(text) {
  const normalized = text.replace(/\s+/g, ' ').trim();
  if (!normalized) return [];

  return normalized
    .split(/(?<=[.!?])\s+(?=[A-Z*("'])/)
    .map((s) => s.trim())
    .filter((s) => s.length > 25 && !/^\d+\.\s/.test(s));
}

function groupParagraphs(sentences, targetSize = 2) {
  const paragraphs = [];
  for (let i = 0; i < sentences.length; i += targetSize) {
    paragraphs.push(sentences.slice(i, i + targetSize).join(' '));
  }
  return paragraphs;
}

function isWellStructured(content) {
  const paragraphs = content.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
  if (paragraphs.length >= 2 && /^-\s/m.test(content)) return true;
  if (paragraphs.length >= 2 && /^\d+\.\s/m.test(content)) return true;
  if (paragraphs.length >= 3) return true;
  return false;
}

function splitDenseParagraphs(content) {
  const paragraphs = content.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
  const out = [];

  for (const para of paragraphs) {
    if (/^-\s/m.test(para) || /^\d+\.\s/m.test(para) || /^#{3,4}\s/m.test(para)) {
      out.push(para);
      continue;
    }
    if (para.length < 260) {
      out.push(para);
      continue;
    }

    const sentences = para
      .split(/(?<=[.!?])\s+(?=[A-Z*("'])/)
      .map((s) => s.trim())
      .filter((s) => s.length > 12);

    if (sentences.length <= 2) {
      out.push(para);
      continue;
    }

    for (let i = 0; i < sentences.length; i += 2) {
      out.push(sentences.slice(i, i + 2).join(' '));
    }
  }

  return out.join('\n\n');
}

function formatContent(section, topic) {
  if (ENRICHMENT_SECTION_IDS.test(section.id)) return section.content;

  const raw = stripRoboticBlocks(section.content);
  if (!raw) return raw;

  let result = raw;

  if (!isWellStructured(raw) && !/^-\s/m.test(raw) && !/^\d+\.\s/m.test(raw)) {
    const sentences = splitSentences(raw);
    if (sentences.length > 2) {
      result = groupParagraphs(sentences, sentences.length >= 6 ? 3 : 2).join('\n\n');
    }
  }

  return splitDenseParagraphs(result);
}

function generatePseudoCode(section) {
  if (section.pseudoCode?.trim()) return section.pseudoCode;

  if (!section.formulas?.length) return undefined;

  const lines = [`${section.title}`, ''];
  for (const formula of section.formulas.slice(0, 8)) {
    lines.push(formula);
  }
  return lines.join('\n').trim();
}

/**
 * @param {object} section
 * @param {object} topic - needs title, track
 */
export function applySqlTeacherStyle(section, topic) {
  const diagram = section.diagram ? sanitizeDiagramText(section.diagram) : section.diagram;
  const pseudoCode = generatePseudoCode({ ...section, diagram });
  const next = {
    ...section,
    diagram,
    content: formatContent(section, topic),
  };
  if (pseudoCode) next.pseudoCode = pseudoCode;
  else delete next.pseudoCode;
  return next;
}
