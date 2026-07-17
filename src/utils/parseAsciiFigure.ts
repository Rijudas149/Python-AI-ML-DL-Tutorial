export type FigureSpec =
  | {
      type: 'mapping';
      domainLabel: string;
      codomainLabel: string;
      maps: { from: string; to: string }[];
    }
  | {
      type: 'axes';
      xLabel: string;
      yLabel: string;
      curveLabel?: string;
      curve: 'linear-up' | 'linear-down' | 'quadratic' | 'log' | 'exp-up' | 'exp-down' | 'loss';
    }
  | {
      type: 'matrix';
      rowLabels?: string[];
      colLabels?: string[];
      rows: string[][];
    }
  | {
      type: 'pipeline';
      nodes: string[];
    }
  | {
      type: 'angle';
      label?: string;
    }
  | {
      type: 'vector';
      vx: number;
      vy: number;
      magnitude?: string;
    };

function parseMapping(lines: string[]): FigureSpec | null {
  const blob = lines.join('\n');
  if (!/domain/i.test(blob) || !/codomain/i.test(blob)) return null;

  const maps: { from: string; to: string }[] = [];
  for (const line of lines) {
    const m = line.match(/│\s*([^│]+?)\s*│[^→]*→\s*│\s*([^│]+?)\s*│/);
    if (m) {
      const from = m[1].trim();
      const to = m[2].trim();
      if (from && to && !/domain|codomain/i.test(from)) maps.push({ from, to });
    }
  }
  if (!maps.length) return null;

  return {
    type: 'mapping',
    domainLabel: 'Domain A',
    codomainLabel: 'Codomain B',
    maps,
  };
}

function parseAxes(lines: string[]): FigureSpec | null {
  const blob = lines.join('\n');
  if (!/(^|\n)\s*y\s*$/m.test(blob) && !/│.*[╱\\]/.test(blob)) return null;

  const labelLine = lines.find((l) => /f\(|ln\(|sigmoid|relu|L\(|loss/i.test(l));
  const label = labelLine?.replace(/[│╱\\─_\s]+/g, ' ').trim();

  let curve: FigureSpec & { type: 'axes' } extends { curve: infer C } ? C : never = 'linear-up';
  const lower = blob.toLowerCase();
  if (/ln\(|log/.test(lower)) curve = 'log';
  else if (/sigmoid|s-curve/.test(lower)) curve = 'quadratic';
  else if (/╲|loss|epoch|plateau/.test(lower)) curve = 'loss';
  else if (/decay|↘|\\\\/.test(lower)) curve = 'exp-down';
  else if (/growth|↗|e\^/.test(lower)) curve = 'exp-up';
  else if (/∪|quadratic/.test(lower)) curve = 'quadratic';

  return {
    type: 'axes',
    xLabel: 'x',
    yLabel: 'y',
    curveLabel: label?.slice(0, 32),
    curve,
  };
}

function parseMatrixFigure(lines: string[]): FigureSpec | null {
  const rows: string[][] = [];
  let colLabels: string[] | undefined;
  let rowLabels: string[] | undefined;

  for (const line of lines) {
    const bracket = line.match(/\[\s*([^\]]+)\]/);
    if (bracket) {
      rows.push(
        bracket[1]
          .split(/\s+/)
          .map((c) => c.trim())
          .filter(Boolean),
      );
      continue;
    }
    const rowLabel = line.match(/^\s*(r\d+|row\s*\d+)\s*\[/i);
    if (rowLabel) rowLabels = rowLabels ?? [];
    const cols = line.match(/col\d+/gi);
    if (cols && cols.length >= 2) colLabels = cols;
  }

  if (!rows.length) return null;
  return { type: 'matrix', rows, colLabels, rowLabels };
}

function parsePipelineFigure(lines: string[]): FigureSpec | null {
  const line = lines.find((l) => /→/.test(l) && l.split(/→/).length >= 3);
  if (!line) return null;
  const nodes = line
    .split(/→/)
    .map((p) => p.replace(/[─\-_|·\[\]()]/g, ' ').replace(/\s+/g, ' ').trim())
    .filter((p) => p.length > 0 && p.length < 30);
  if (nodes.length < 2) return null;
  if (nodes.some((n) => /\b(each|input|output|may|not)\b/i.test(n))) return null;
  return { type: 'pipeline', nodes };
}

function parseAngle(lines: string[]): FigureSpec | null {
  const blob = lines.join('\n');
  if (!/[╱\\]/.test(blob)) return null;
  if (/cosθ|u · v|dot product|angle/i.test(blob)) {
    return { type: 'angle', label: 'u · v = |u||v| cos θ' };
  }
  return null;
}

function parseVectorFigure(lines: string[]): FigureSpec | null {
  const blob = lines.join('\n');
  const coord = blob.match(/\((\d+)\s*,\s*(\d+)\)/);
  if (!coord || !/vector|╱|\|v\|/i.test(blob)) return null;
  const mag = blob.match(/\|v\|=([\d.]+)/)?.[1];
  return {
    type: 'vector',
    vx: parseInt(coord[1], 10),
    vy: parseInt(coord[2], 10),
    magnitude: mag,
  };
}

export function parseAsciiFigure(lines: string[]): FigureSpec | null {
  if (!lines.length) return null;
  return (
    parseMapping(lines) ??
    parseMatrixFigure(lines) ??
    parseVectorFigure(lines) ??
    parseAxes(lines) ??
    parseAngle(lines) ??
    parsePipelineFigure(lines)
  );
}
