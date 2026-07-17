/** True when pseudoCode only repeats keyPoints (numbered list duplicate). */
export function isRedundantPseudoCode(pseudoCode: string, keyPoints?: string[]): boolean {
  if (!pseudoCode.trim() || !keyPoints?.length) return false;

  const numbered = pseudoCode
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => /^\d+\.\s/.test(line))
    .map((line) => line.replace(/^\d+\.\s+/, '').trim());

  if (numbered.length === keyPoints.length && numbered.every((line, i) => line === keyPoints[i])) {
    return true;
  }

  const normalized = pseudoCode
    .replace(/^\d+\.\s+/gm, '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .join('\n');

  return normalized === keyPoints.join('\n');
}

/** Estimate reading time from text (words / 200 wpm). */
export function estimateReadingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

/** Extract **bold terms** from markdown content. */
export function extractKeyTerms(content: string, max = 8): string[] {
  const matches = content.matchAll(/\*\*([^*]+)\*\*/g);
  const seen = new Set<string>();
  const terms: string[] = [];
  for (const m of matches) {
    const term = m[1].replace(/:$/, '').trim();
    if (term.length < 2 || term.length > 60) continue;
    const key = term.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    terms.push(term);
    if (terms.length >= max) break;
  }
  return terms;
}

/** Build a printable study sheet from topic sections. */
export function buildStudySheet(topic: {
  title: string;
  description: string;
  track: string;
  level: string;
  sections: Array<{ title: string; keyPoints?: string[] }>;
}): string {
  const lines = [
    `# ${topic.title} — Study Sheet`,
    '',
    `${topic.description}`,
    `Track: ${topic.track} | Level: ${topic.level}`,
    '',
    '---',
    '',
  ];

  for (const section of topic.sections) {
    lines.push(`## ${section.title}`);
    if (section.keyPoints?.length) {
      for (const kp of section.keyPoints) {
        lines.push(`- ${kp}`);
      }
    } else {
      lines.push('- Review explanation and run the code example.');
    }
    lines.push('');
  }

  return lines.join('\n');
}
