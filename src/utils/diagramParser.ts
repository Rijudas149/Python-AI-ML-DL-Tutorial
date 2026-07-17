import type { CurveShape, DiagramSpec, StructuredLiteral } from '../types/diagram';

const ASCII_CHARS = /[│┌┐└┘├┤┬┴┼─═╱\\|_]/;
const FORMULA_CHARS = /[=∪∩×÷±∑∫]|\\|\^|\blog\b|\bln\b|\bexp\b|→.*=|\(\d+,\s*\d+\)/i;

function footnotes(lines: string[], exclude: RegExp[] = []): string[] {
  return lines.filter((l) => l.trim() && !exclude.some((re) => re.test(l)));
}

function isTitleLine(line: string): boolean {
  const t = line.trim();
  if (t.length > 70 || /=/.test(t)) return false;
  if (ASCII_CHARS.test(t)) return false;
  if (/^[A-Z]{2,}(\s+[A-Z]{2,})+$/.test(t)) return false;
  return /^[A-Za-z0-9\s{}(),.:+\-^×÷∪∩\\∑∫_]+$/.test(t);
}

function parsePipelineLine(line: string): string[] | null {
  if (!/→/.test(line)) return null;
  const nodes = line
    .split(/→/)
    .map((p) => p.replace(/[─\-_|·\[\]()]/g, ' ').replace(/\s+/g, ' ').trim())
    .filter((p) => p.length > 0);
  if (nodes.length < 2) return null;
  if (nodes.some((n) => n.length > 28)) return null;
  if (nodes.some((n) => /\b(each|may|one|the|if|not|same|input|output)\b/i.test(n))) return null;
  return nodes;
}

function parseChipLine(line: string): string[] | null {
  const pairs = line.match(/\(\d+,\s*\d+\)/g);
  if (pairs && pairs.length >= 2) return pairs;

  const tokens = line.trim().split(/\s+/).filter(Boolean);
  if (tokens.length >= 3 && tokens.every((t) => /^[A-Z0-9]{1,6}$/.test(t))) return tokens;
  if (tokens.length >= 3 && tokens.every((t) => /^[A-Z]{2,4}$/.test(t))) return tokens;
  return null;
}

function parseStructuredLiteral(rawLines: string[]): StructuredLiteral {
  const content: StructuredLiteral = {
    figure: [],
    formulas: [],
    pipelines: [],
    chips: [],
    notes: [],
  };

  let titleSet = false;

  for (const line of rawLines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (!titleSet && isTitleLine(trimmed)) {
      content.title = trimmed;
      titleSet = true;
      continue;
    }
    titleSet = true;

    const pipeline = parsePipelineLine(trimmed);
    if (pipeline) {
      content.pipelines.push(pipeline);
      continue;
    }

    if (ASCII_CHARS.test(line)) {
      content.figure.push(line);
      continue;
    }

    const chips = parseChipLine(trimmed);
    if (chips) {
      content.chips.push(...chips);
      continue;
    }

    if (FORMULA_CHARS.test(trimmed) || /^[A-Z]\s*[=∪∩\\]/.test(trimmed)) {
      content.formulas.push(trimmed);
      continue;
    }

    content.notes.push(trimmed);
  }

  return content;
}

function parseSetOps(rawLines: string[], lines: string[]): DiagramSpec | null {
  const blob = rawLines.join('\n');
  const setAM = blob.match(/A\s*=\s*(\{[^}]+\})/);
  const setBM = blob.match(/B\s*=\s*(\{[^}]+\})/);
  if (!setAM || !setBM) return null;

  const pick = (re: RegExp) => blob.match(re)?.[0]?.replace(/\s+/g, ' ').trim();
  const union = pick(/A\s*∪\s*B\s*=\s*\{[^}]+\}/);
  const intersection = pick(/A\s*∩\s*B\s*=\s*\{[^}]+\}/);
  if (!union && !intersection) return null;

  return {
    type: 'setOps',
    setA: setAM[1],
    setB: setBM[1],
    union,
    intersection,
    diffA: pick(/A\s*\\\s*B\s*=\s*\{[^}]+\}/),
    diffB: pick(/B\s*\\\s*A\s*=\s*\{[^}]+\}/),
    cartesian: lines.find((l) => /×.*pairs|\(\d,\d\)/i.test(l)),
    footnotes: footnotes(rawLines, [/A\s*=|B\s*=|∪|∩|\\|×|\(\d,/]),
  };
}

function parseCurves(rawLines: string[]): DiagramSpec | null {
  const header = rawLines.find((l) => /linear/i.test(l) && /quadratic/i.test(l) && /sigmoid/i.test(l));
  if (!header) return null;

  const notes = rawLines.filter((l) => /constant|turn|bounded|ramp|slope|min\/max/i.test(l));
  return {
    type: 'curves',
    curves: [
      { name: 'Linear', shape: 'linear', note: notes.find((n) => /slope|constant/i.test(n)) },
      { name: 'Quadratic', shape: 'quadratic', note: notes.find((n) => /turn|min/i.test(n)) },
      { name: 'Sigmoid', shape: 'sigmoid', note: notes.find((n) => /bounded/i.test(n)) },
      ...(rawLines.some((l) => /relu/i.test(l)) ? [{ name: 'ReLU', shape: 'relu' as CurveShape, note: 'flat then ramp' }] : []),
    ],
    footnotes: footnotes(rawLines),
  };
}

function parseSequence(rawLines: string[]): DiagramSpec | null {
  const an = rawLines.join(' ').match(/a_n\s*=\s*([\d,\s]+)/i);
  if (!an) return null;

  const terms = an[1].split(',').map((x) => parseInt(x.trim(), 10)).filter((n) => !Number.isNaN(n));
  if (terms.length < 3) return null;

  return {
    type: 'sequence',
    terms,
    step: terms[1] - terms[0],
    title: rawLines.find((l) => /a_n|arithmetic|geometric/i.test(l))?.trim(),
    footnotes: footnotes(rawLines, [/a_n\s*=|\d,\s*\d/]),
  };
}

function parseVector(rawLines: string[]): DiagramSpec | null {
  const titleLine = rawLines.find((l) => /2d vector|\bvector\b.*=\s*\(/i.test(l));
  const coord = (titleLine ?? rawLines.join(' ')).match(/\((\d+)\s*,\s*(\d+)\)/);
  if (!coord || !/vector|╱/i.test(rawLines.join(' '))) return null;

  return {
    type: 'vector',
    vx: parseInt(coord[1], 10),
    vy: parseInt(coord[2], 10),
    title: titleLine?.trim(),
    footnotes: footnotes(rawLines, [/\(\d+,\s*\d+\)/]),
  };
}

function parseBars(rawLines: string[]): DiagramSpec | null {
  const items = rawLines
    .map((line) => {
      const barMatch = line.match(/^(.+?)\s+([█░]+.*)$/);
      if (!barMatch) return null;
      return { label: barMatch[1].trim(), value: (barMatch[2].match(/█/g) || []).length || 1 };
    })
    .filter((x): x is { label: string; value: number } => x !== null && x.label.length > 0);

  if (!items.length) return null;
  return {
    type: 'bars',
    title: rawLines.find((l) => !/█/.test(l) && l.length < 60),
    items,
    footnotes: footnotes(rawLines, [/█/]),
  };
}

function parseMatrix(rawLines: string[]): DiagramSpec | null {
  const rows: string[][] = [];
  for (const line of rawLines) {
    const bracket = line.match(/\[\s*([^\]]+)\]/);
    if (bracket) {
      rows.push(
        bracket[1]
          .split(/\s+/)
          .map((c) => c.trim())
          .filter(Boolean),
      );
    }
  }
  if (!rows.length) return null;

  return {
    type: 'matrix',
    title: rawLines.find((l) => /matrix|table|feature/i.test(l))?.trim(),
    rows,
    footnotes: footnotes(rawLines, [/\[/]),
  };
}

function parseVenn(rawLines: string[], joined: string): DiagramSpec | null {
  if (!/universal set|a∩b|a∪b|venn|overlap/i.test(joined)) return null;
  if (!/\ba\b/i.test(joined) || !/\bb\b/i.test(joined)) return null;

  let highlight: 'union' | 'intersection' | 'a' | 'b' | undefined;
  if (/a∩b|intersection|center overlap/i.test(joined)) highlight = 'intersection';
  else if (/a∪b|entire shaded|union/i.test(joined)) highlight = 'union';

  return {
    type: 'venn',
    sets: ['A', 'B'],
    highlight,
    captions: rawLines.filter((l) => l.trim()).slice(-4),
  };
}

export function parseDiagram(text: string): DiagramSpec {
  const rawLines = text.split('\n').map((l) => l.trimEnd());
  const lines = rawLines.map((l) => l.trim()).filter(Boolean);
  const joined = text.toLowerCase();

  const venn = parseVenn(rawLines, joined);
  if (venn) return venn;

  const setOps = parseSetOps(rawLines, lines);
  if (setOps) return setOps;

  const curves = parseCurves(rawLines);
  if (curves) return curves;

  const sequence = parseSequence(rawLines);
  if (sequence) return sequence;

  const vector = parseVector(rawLines);
  if (vector) return vector;

  const bars = parseBars(rawLines);
  if (bars) return bars;

  const matrix = parseMatrix(rawLines);
  if (matrix) return matrix;

  return {
    type: 'literal',
    content: parseStructuredLiteral(rawLines),
    source: text,
  };
}
