import type { DiagramSpec } from '../types/diagram';

function cleanLines(text: string): string[] {
  return text
    .split('\n')
    .map((l) => l.replace(/[│┌┐└┘├┤┬┴┼─═]/g, ' ').replace(/\s+/g, ' ').trim())
    .filter(Boolean);
}

function parseBars(lines: string[]): DiagramSpec | null {
  const items = lines
    .map((line) => {
      const barMatch = line.match(/^(.+?)\s+([█░]+.*)$/);
      if (barMatch) {
        return {
          label: barMatch[1].trim(),
          value: (barMatch[2].match(/█/g) || []).length || 1,
        };
      }
      const inline = line.match(/(.+?)\s+(█+)/);
      if (inline) {
        return { label: inline[1].trim(), value: inline[1].length ? (inline[2].match(/█/g) || []).length : 1 };
      }
      return null;
    })
    .filter((x): x is { label: string; value: number } => x !== null && x.label.length > 0);

  if (items.length >= 1) {
    return {
      type: 'bars',
      title: lines.find((l) => !/█/.test(l) && l.length < 60),
      items,
      footnotes: lines.filter((l) => !/█/.test(l) && l !== items[0]?.label),
    };
  }
  return null;
}

function parseMatrix(lines: string[]): DiagramSpec | null {
  const gridLines = lines.filter((l) => /\[\s*[\*\d]|^\s*\[\s/.test(l) || /^\s*\|\s*\w/.test(l));
  if (gridLines.length === 0 && !/m×n|m×k|rows.*col/i.test(lines.join(' '))) return null;

  const rows: string[][] = [];
  for (const line of lines) {
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

  if (rows.length === 0) {
    const tableRows = lines.filter((l) => l.includes('|') && !l.includes('→'));
    for (const line of tableRows) {
      const cells = line.split('|').map((c) => c.trim()).filter(Boolean);
      if (cells.length >= 2) rows.push(cells);
    }
  }

  if (rows.length === 0) return null;

  return {
    type: 'matrix',
    title: lines.find((l) => /matrix|table|sample|feature/i.test(l)),
    rows,
    footnotes: lines.filter((l) => !/\[/.test(l) && !/^\w+\s*\|/.test(l)),
  };
}

function parseFlow(lines: string[]): DiagramSpec | null {
  const arrowLines = lines.filter((l) => /→|←|↓|↑|──/.test(l));
  if (arrowLines.length === 0) return null;

  const nodes: string[] = [];
  for (const line of arrowLines) {
    const parts = line
      .split(/→|←|↓|↑/)
      .map((p) => p.replace(/[─\-_=\[\]()]/g, ' ').trim())
      .filter((p) => p.length > 0 && p.length < 40);
    for (const p of parts) {
      if (!nodes.includes(p)) nodes.push(p);
    }
  }

  if (nodes.length < 2) return null;

  return {
    type: 'flow',
    nodes: nodes.slice(0, 8),
    direction: /↓/.test(lines.join(' ')) ? 'vertical' : 'horizontal',
    footnotes: lines.filter((l) => !/→|←|↓|↑/.test(l)),
  };
}

function parseAxes(lines: string[]): DiagramSpec | null {
  const text = lines.join(' ');
  if (!(/│/.test(text) || /y/i.test(lines[0] || '')) && !/──.*x|────.*x/i.test(text)) {
    return null;
  }

  const curves = lines
    .filter((l) => /f\(|ln\(|sigmoid|linear|quadratic|relu|curve|╱|\\\//i.test(l))
    .map((l) => ({
      label: l.replace(/[│╱\\─_]/g, ' ').trim(),
      kind: 'curve' as const,
    }));

  return {
    type: 'axes',
    title: lines.find((l) => /domain|range|axis|plot/i.test(l)),
    curves: curves.length ? curves : [{ label: 'f(x)', kind: 'curve' }],
    annotations: lines.filter((l) => !/^[y│╱\\─_\s]+$/.test(l) && l.length < 80),
  };
}

function parseCompare(lines: string[]): DiagramSpec | null {
  const header = lines.find((l) => /\w+\s{2,}\w+/.test(l) && l.split(/\s{2,}/).length >= 2);
  if (!header) return null;

  const titles = header.split(/\s{2,}/).map((t) => t.trim()).filter(Boolean);
  if (titles.length < 2 || titles.length > 4) return null;

  const columns = titles.map((title) => ({
    title,
    lines: lines
      .filter((l) => l !== header && !l.startsWith('─'))
      .slice(0, 4),
  }));

  return { type: 'compare', columns };
}

function parseSteps(lines: string[]): DiagramSpec | null {
  const steps = lines.filter(
    (l) =>
      /^\d+\.|^v\d|→|↓|step|iterate|repeat|back sub|forward|epoch/i.test(l) ||
      (/^[a-z]\d/i.test(l) && l.length < 50),
  );
  if (steps.length < 2) return null;
  return {
    type: 'steps',
    title: lines.find((l) => !steps.includes(l)),
    steps: steps.slice(0, 8),
  };
}

export function parseDiagram(text: string): DiagramSpec {
  const rawLines = text.split('\n').map((l) => l.trimEnd());
  const lines = cleanLines(text);
  const joined = text.toLowerCase();

  if (/universal set|a∩b|a∪b|venn|overlap/i.test(joined) && /\ba\b/i.test(joined) && /\bb\b/i.test(joined)) {
    let highlight: 'union' | 'intersection' | 'a' | 'b' | undefined;
    if (/a∩b|intersection|center overlap|overlap/i.test(joined)) highlight = 'intersection';
    else if (/a∪b|entire shaded|union/i.test(joined)) highlight = 'union';
    else if (/a only/i.test(joined)) highlight = 'a';
    else if (/b only/i.test(joined)) highlight = 'b';

    return {
      type: 'venn',
      sets: ['A', 'B'],
      highlight,
      captions: rawLines.filter((l) => l.trim()).slice(-4),
    };
  }

  const bars = parseBars(rawLines);
  if (bars) return bars;

  const matrix = parseMatrix(lines);
  if (matrix) return matrix;

  const flow = parseFlow(rawLines);
  if (flow) return flow;

  if ((text.match(/·/g) || []).length >= 4) {
    return {
      type: 'scatter',
      title: lines[0],
      footnotes: lines.filter((l) => !l.includes('·')),
    };
  }

  const axes = parseAxes(rawLines);
  if (axes) return axes;

  const compare = parseCompare(lines);
  if (compare) return compare;

  const steps = parseSteps(lines);
  if (steps) return steps;

  return {
    type: 'callout',
    title: lines[0]?.length && lines[0].length < 50 ? lines[0] : undefined,
    lines: lines.slice(lines[0]?.length && lines[0].length < 50 ? 1 : 0),
  };
}
