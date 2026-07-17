import type { CurveShape, DiagramSpec } from '../types/diagram';

function cleanLines(text: string): string[] {
  return text
    .split('\n')
    .map((l) => l.replace(/[│┌┐└┘├┤┬┴┼─═]/g, ' ').replace(/\s+/g, ' ').trim())
    .filter(Boolean);
}

function footnotes(lines: string[], exclude: RegExp[] = []): string[] {
  return lines.filter((l) => l.trim() && !exclude.some((re) => re.test(l)));
}

function parseSetOps(rawLines: string[], lines: string[]): DiagramSpec | null {
  const setAM = rawLines.join('\n').match(/A\s*=\s*(\{[^}]+\})/);
  const setBM = rawLines.join('\n').match(/B\s*=\s*(\{[^}]+\})/);
  if (!setAM || !setBM) return null;

  const pick = (re: RegExp) => rawLines.join('\n').match(re)?.[0]?.replace(/\s+/g, ' ').trim();
  return {
    type: 'setOps',
    setA: setAM[1],
    setB: setBM[1],
    union: pick(/A\s*∪\s*B\s*=\s*\{[^}]+\}/),
    intersection: pick(/A\s*∩\s*B\s*=\s*\{[^}]+\}/),
    diffA: pick(/A\s*\\\s*B\s*=\s*\{[^}]+\}/),
    diffB: pick(/B\s*\\\s*A\s*=\s*\{[^}]+\}/),
    cartesian: lines.find((l) => /×|pairs/i.test(l)),
    footnotes: footnotes(rawLines, [/A\s*=|B\s*=|∪|∩|\\|×|\(\d,/]),
  };
}

function parseMapping(rawLines: string[]): DiagramSpec | null {
  if (!/domain/i.test(rawLines.join(' ')) || !/codomain/i.test(rawLines.join(' '))) return null;

  const domain: string[] = [];
  const codomain: string[] = [];
  const maps: { from: string; to: string }[] = [];

  for (const line of rawLines) {
    const cod = line.match(/→\s*│\s*(\w)\s*│/);
    if (cod) {
      const fromMatch = line.match(/│\s*(\d+|[a-z])\s*│/);
      if (fromMatch) maps.push({ from: fromMatch[1], to: cod[1] });
    }
    const codomainMatch = line.match(/│\s*([a-z])\s*│\s*$/i);
    if (codomainMatch && !/→/.test(line)) {
      const v = codomainMatch[1];
      if (!codomain.includes(v)) codomain.push(v);
    }
  }

  if (domain.length === 0) domain.push('1', '2', '3', '4');
  if (codomain.length === 0) codomain.push('a', 'b', 'c');
  if (maps.length === 0) {
    maps.push({ from: '1', to: 'a' }, { from: '2', to: 'b' }, { from: '3', to: 'c' }, { from: '4', to: 'b' });
  }

  return {
    type: 'mapping',
    domain,
    codomain,
    maps,
    footnotes: footnotes(rawLines, [/│|┌|└|→/]),
  };
}

function parseCounting(lines: string[], rawLines: string[]): DiagramSpec | null {
  if (!/combinations|permutations|c\(\d/i.test(rawLines.join(' '))) return null;
  const combos = lines.filter((l) => /^[A-Z]{2,}\s+[A-Z]{2,}/.test(l) || /^[A-Z]{3,}/.test(l)).flatMap((l) => l.split(/\s+/));
  return {
    type: 'counting',
    title: lines.find((l) => /choose|from/i.test(l)),
    combinations: combos.length ? combos.slice(0, 8) : ['ABC', 'ABD', 'ACD', 'BCD'],
    permutationsNote: lines.find((l) => /permutations|p\(\d/i.test(l)),
    formulas: lines.filter((l) => /c\(|p\(|!/.test(l.toLowerCase())),
    footnotes: footnotes(rawLines, [/combinations|permutations|c\(|p\(/i]),
  };
}

function parseCurves(rawLines: string[]): DiagramSpec | null {
  const joined = rawLines.join(' ').toLowerCase();
  const names: { name: string; shape: CurveShape; note?: string }[] = [];

  if (/linear/i.test(joined)) names.push({ name: 'Linear', shape: 'linear', note: 'constant slope' });
  if (/quadratic/i.test(joined)) names.push({ name: 'Quadratic', shape: 'quadratic', note: 'one turn' });
  if (/sigmoid/i.test(joined)) names.push({ name: 'Sigmoid', shape: 'sigmoid', note: 'bounded (0,1)' });
  if (/relu/i.test(joined)) names.push({ name: 'ReLU', shape: 'relu', note: 'flat then ramp' });

  if (/k>0.*growth|growth ↗/i.test(joined)) names.push({ name: 'Growth', shape: 'exp-growth', note: 'k > 0' });
  if (/k<0.*decay|decay ↘/i.test(joined)) names.push({ name: 'Decay', shape: 'exp-decay', note: 'k < 0' });

  if (/loss vs epoch|plateau/i.test(joined)) {
    return {
      type: 'curves',
      curves: [{ name: 'Training loss', shape: 'loss', note: 'steady decrease then plateau' }],
      footnotes: footnotes(rawLines, [/L │|╲|epoch/i]),
    };
  }

  if (names.length >= 2) {
    return { type: 'curves', curves: names.slice(0, 4), footnotes: footnotes(rawLines) };
  }
  return null;
}

function parseFormulas(lines: string[], rawLines: string[]): DiagramSpec | null {
  const eqLines = lines.filter((l) => /=/.test(l) && l.length < 70 && !/\[/.test(l));
  if (eqLines.length < 2) return null;
  if (/log\(|softmax|sigma|∑|exp\(/i.test(rawLines.join(' ')) || eqLines.length >= 3) {
    return {
      type: 'formulas',
      title: lines.find((l) => !/=/.test(l) && l.length < 50),
      items: eqLines.slice(0, 6),
      footnotes: footnotes(rawLines, [/=/]),
    };
  }
  return null;
}

function parseSequence(lines: string[], rawLines: string[]): DiagramSpec | null {
  const an = rawLines.join(' ').match(/a_n\s*=\s*([\d,\s]+)/i);
  const seq = rawLines.join(' ').match(/(\d+(?:\s*,\s*\d+){3,})/);
  let terms: number[] = [];

  if (an) terms = an[1].split(',').map((x) => parseInt(x.trim(), 10)).filter((n) => !Number.isNaN(n));
  else if (seq) terms = seq[1].split(',').map((x) => parseInt(x.trim(), 10)).filter((n) => !Number.isNaN(n));

  if (terms.length < 3) return null;

  const step = terms.length > 1 ? terms[1] - terms[0] : undefined;
  return {
    type: 'sequence',
    terms,
    step,
    title: lines.find((l) => /a_n|arithmetic|geometric|r\s*=/i.test(l)),
    footnotes: footnotes(rawLines, [/\d,\s*\d/]),
  };
}

function parseVector(lines: string[], rawLines: string[]): DiagramSpec | null {
  const coord = rawLines.join(' ').match(/\((\d+)\s*,\s*(\d+)\)/);
  if (!coord) return null;
  if (!/vector|╱|v\s*=|2d/i.test(rawLines.join(' '))) return null;
  return {
    type: 'vector',
    vx: parseInt(coord[1], 10),
    vy: parseInt(coord[2], 10),
    title: lines.find((l) => /vector/i.test(l)),
    footnotes: footnotes(rawLines, [/\(\d+,\s*\d+\)/]),
  };
}

function parseTriangle(rawLines: string[]): DiagramSpec | null {
  if (!/\|\|v\|\||length of arrow|╱\s*\|/i.test(rawLines.join(' '))) return null;
  const nums = rawLines.join(' ').match(/(\d+)[\s\S]*?(\d+)/);
  return {
    type: 'triangle',
    a: nums ? parseInt(nums[1], 10) : 3,
    b: nums ? parseInt(nums[2], 10) : 4,
    title: 'Vector magnitude',
    footnotes: footnotes(rawLines, [/╱|\\\|/]),
  };
}

function parseAngle(rawLines: string[]): DiagramSpec | null {
  if (!/cosθ|u · v|dot product|cosine similarity/i.test(rawLines.join(' '))) return null;
  if (/cosine similarity scale/i.test(rawLines.join(' '))) return null;
  return { type: 'angle', footnotes: footnotes(rawLines) };
}

function parsePolar(rawLines: string[]): DiagramSpec | null {
  if (!/unit circle|e\^\(i|multiplication in polar|polar form/i.test(rawLines.join(' '))) return null;
  return {
    type: 'polar',
    kind: /unit circle/i.test(rawLines.join(' ')) ? 'unit-circle' : 'complex-plane',
    footnotes: footnotes(rawLines),
  };
}

function parseDistribution(rawLines: string[]): DiagramSpec | null {
  const t = rawLines.join(' ').toLowerCase();
  if (/confusion matrix|binomial|sampling distribution|clt|cdf|percentile/i.test(t)) {
    let kind: 'normal' | 'cdf' | 'binomial' = 'normal';
    if (/cdf|percentile/i.test(t)) kind = 'cdf';
    else if (/binomial/i.test(t)) kind = 'binomial';
    return {
      type: 'distribution',
      kind,
      title: rawLines.find((l) => l.trim())?.trim(),
      footnotes: footnotes(rawLines),
    };
  }
  return null;
}

function parseDecomposition(rawLines: string[]): DiagramSpec | null {
  const t = rawLines.join(' ');
  if (/v Λ v|u Σ v|v Vᵀ|svd|eigendecomp|diagonal/i.test(t)) {
    const parts = rawLines.filter((l) => /[A-ZΛΣUV]|≈|=/i.test(l) && l.length < 50).slice(0, 4);
    return {
      type: 'decomposition',
      title: rawLines.find((l) => l.trim())?.trim(),
      parts: parts.length ? parts : ['A', '=', 'U Σ Vᵀ'],
      footnotes: footnotes(rawLines),
    };
  }
  return null;
}

function detectCalloutVariant(rawLines: string[]): 'default' | 'checklist' | 'warning' | 'compare' {
  const t = rawLines.join(' ').toLowerCase();
  if (/checklist|toolbox|steps to/i.test(t)) return 'checklist';
  if (/trap|too large|too big|wrong|bad:|warning/i.test(t)) return 'warning';
  if (/vs |tradeoff|↔|comparison/i.test(t)) return 'compare';
  return 'default';
}

function parsePipeline(rawLines: string[]): DiagramSpec | null {
  const joined = rawLines.join('\n');
  if (/×.*→.*pairs|cartesian/i.test(joined)) return null;

  const nodes: string[] = [];
  let vertical = false;

  for (const line of rawLines) {
    if (!/→/.test(line)) continue;
    const parts = line
      .split(/→/)
      .map((p) => p.replace(/[─\-_|·\[\]()]/g, ' ').trim())
      .filter((p) => p.length > 0 && p.length < 40);
    if (parts.length >= 2) {
      for (const p of parts) {
        if (!nodes.includes(p)) nodes.push(p);
      }
    }
  }

  if (/↓/.test(joined)) vertical = true;
  if (nodes.length < 2) return null;

  return {
    type: 'pipeline',
    nodes: nodes.slice(0, 8),
    direction: vertical ? 'vertical' : 'horizontal',
    footnotes: footnotes(rawLines, [/→|←|↓|↑|──/]),
  };
}

function parseBars(rawLines: string[]): DiagramSpec | null {
  const items = rawLines
    .map((line) => {
      const barMatch = line.match(/^(.+?)\s+([█░]+.*)$/);
      if (barMatch) {
        return { label: barMatch[1].trim(), value: (barMatch[2].match(/█/g) || []).length || 1 };
      }
      return null;
    })
    .filter((x): x is { label: string; value: number } => x !== null && x.label.length > 0);

  if (items.length >= 1) {
    return {
      type: 'bars',
      title: rawLines.find((l) => !/█/.test(l) && l.length < 60),
      items,
      footnotes: footnotes(rawLines, [/█/]),
    };
  }
  return null;
}

function parseMatrix(lines: string[], rawLines: string[]): DiagramSpec | null {
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

  if (rows.length === 0 && /m×n|m×k|rows.*col|2×3 matrix/i.test(rawLines.join(' '))) {
    return {
      type: 'matrix',
      title: lines.find((l) => /matrix|table|feature/i.test(l)),
      rows: [
        ['a₁₁', 'a₁₂', 'a₁₃'],
        ['a₂₁', 'a₂₂', 'a₂₃'],
      ],
      footnotes: footnotes(rawLines),
    };
  }

  if (rows.length === 0) return null;
  return {
    type: 'matrix',
    title: lines.find((l) => /matrix|table|sample|feature/i.test(l)),
    rows,
    footnotes: footnotes(rawLines, [/\[/]),
  };
}

function parseScatter(rawLines: string[]): DiagramSpec | null {
  const joined = rawLines.join(' ').toLowerCase();
  if (/scatter|point cloud|cloud:/i.test(joined)) {
    return {
      type: 'scatter',
      title: rawLines.find((l) => /scatter|cloud|pca|regression/i.test(l)),
      showTrend: /trend|regression|line/i.test(joined),
      footnotes: footnotes(rawLines),
    };
  }
  const dotLines = rawLines.filter((l) => (l.match(/·/g) || []).length >= 2);
  if (dotLines.length >= 2 && /z=|plane|polar|overdetermined/i.test(joined)) {
    return { type: 'scatter', showTrend: true, footnotes: footnotes(rawLines) };
  }
  return null;
}

function detectAxisShape(rawLines: string[]): { shape: CurveShape; label?: string } {
  const t = rawLines.join(' ').toLowerCase();
  if (/ln\(|log_/.test(t)) return { shape: 'log', label: 'ln(x)' };
  if (/sigmoid|s-curve/.test(t)) return { shape: 'sigmoid', label: 'σ(x)' };
  if (/relu/.test(t)) return { shape: 'relu', label: 'ReLU(x)' };
  if (/quadratic|∪/.test(t)) return { shape: 'quadratic', label: 'f(x)' };
  if (/2x\+1|linear|slope/.test(t)) return { shape: 'linear', label: 'f(x)=2x+1' };
  if (/loss|epoch|╲/.test(t)) return { shape: 'loss', label: 'L(epoch)' };
  if (/growth|e\^/.test(t)) return { shape: 'exp-growth', label: 'e^(kt)' };
  if (/decay|half-life/.test(t)) return { shape: 'exp-decay', label: 'decay' };
  return { shape: 'linear', label: 'f(x)' };
}

function parseAxes(rawLines: string[], lines: string[]): DiagramSpec | null {
  const text = rawLines.join(' ');
  const hasAxes =
    /^\s*y\s*$/im.test(rawLines.join('\n')) ||
    /│.*╱|────.*x|domain.*range/i.test(text) ||
    (/│/.test(text) && /╱|\\/.test(text));

  if (!hasAxes) return null;

  const { shape, label } = detectAxisShape(rawLines);
  return {
    type: 'axes',
    title: lines.find((l) => /domain|range|axis|plot|vector/i.test(l)),
    shape,
    label,
    footnotes: footnotes(rawLines, [/^[y│╱\\─_\s]+$/]),
  };
}

function parseCompare(lines: string[]): DiagramSpec | null {
  const header = lines.find((l) => /\w+\s{2,}\w+/.test(l) && l.split(/\s{2,}/).length >= 2);
  if (!header) return null;
  const titles = header.split(/\s{2,}/).map((t) => t.trim()).filter(Boolean);
  if (titles.length < 2 || titles.length > 4) return null;
  return {
    type: 'compare',
    columns: titles.map((title) => ({
      title,
      lines: lines.filter((l) => l !== header && !l.startsWith('─')).slice(0, 4),
    })),
  };
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

  const setOps = parseSetOps(rawLines, lines);
  if (setOps) return setOps;

  const mapping = parseMapping(rawLines);
  if (mapping) return mapping;

  const counting = parseCounting(lines, rawLines);
  if (counting) return counting;

  const curves = parseCurves(rawLines);
  if (curves) return curves;

  const formulas = parseFormulas(lines, rawLines);
  if (formulas) return formulas;

  const sequence = parseSequence(lines, rawLines);
  if (sequence) return sequence;

  const vector = parseVector(lines, rawLines);
  if (vector) return vector;

  const triangle = parseTriangle(rawLines);
  if (triangle) return triangle;

  const angle = parseAngle(rawLines);
  if (angle) return angle;

  const polar = parsePolar(rawLines);
  if (polar) return polar;

  const distribution = parseDistribution(rawLines);
  if (distribution) return distribution;

  const decomposition = parseDecomposition(rawLines);
  if (decomposition) return decomposition;

  const bars = parseBars(rawLines);
  if (bars) return bars;

  const matrix = parseMatrix(lines, rawLines);
  if (matrix) return matrix;

  const scatter = parseScatter(rawLines);
  if (scatter) return scatter;

  const axes = parseAxes(rawLines, lines);
  if (axes) return axes;

  const compare = parseCompare(lines);
  if (compare) return compare;

  const pipeline = parsePipeline(rawLines);
  if (pipeline) return pipeline;

  const steps = parseSteps(lines);
  if (steps) return steps;

  return {
    type: 'callout',
    title: lines[0]?.length && lines[0].length < 50 ? lines[0] : undefined,
    lines: lines.slice(lines[0]?.length && lines[0].length < 50 ? 1 : 0),
    variant: detectCalloutVariant(rawLines),
  };
}
