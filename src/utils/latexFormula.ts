/** Convert curriculum formula strings (Unicode + partial LaTeX) to KaTeX-ready LaTeX. */
import katex from 'katex';

const SUBSCRIPT: Record<string, string> = {
  '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4',
  '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9',
  'ₐ': 'a', 'ₑ': 'e', 'ₕ': 'h', 'ᵢ': 'i', 'ⱼ': 'j',
  'ₖ': 'k', 'ₗ': 'l', 'ₘ': 'm', 'ₙ': 'n', 'ₒ': 'o',
  'ₚ': 'p', 'ᵣ': 'r', 'ₛ': 's', 'ₜ': 't', 'ᵤ': 'u',
  'ᵥ': 'v', 'ₓ': 'x',
};

const SUPERSCRIPT: Record<string, string> = {
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
  '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
  'ⁿ': 'n', 'ⁱ': 'i', 'ᵀ': '\\top', '⁻': '-', '⁺': '+',
  'ᵃ': 'a', 'ᵇ': 'b', 'ᶜ': 'c', 'ᵈ': 'd', 'ᵉ': 'e',
  'ᵍ': 'g', 'ᵏ': 'k', 'ᵐ': 'm', 'ᵒ': 'o', 'ᵖ': 'p',
  'ʳ': 'r', 'ˢ': 's', 'ᵗ': 't', 'ᵘ': 'u', 'ᵛ': 'v',
  'ˣ': 'x', 'ʸ': 'y',
};

const SYMBOLS: [RegExp, string][] = [
  [/ℝ/g, '\\mathbb{R}'],
  [/ℤ/g, '\\mathbb{Z}'],
  [/ℕ/g, '\\mathbb{N}'],
  [/ℚ/g, '\\mathbb{Q}'],
  [/ℂ/g, '\\mathbb{C}'],
  [/∀/g, ' \\forall '],
  [/∃/g, ' \\exists '],
  [/∈/g, '\\in'],
  [/∉/g, '\\notin'],
  [/⊆/g, '\\subseteq'],
  [/⊂/g, '\\subset'],
  [/⊇/g, '\\supseteq'],
  [/∪/g, '\\cup'],
  [/∩/g, '\\cap'],
  [/∅/g, '\\emptyset'],
  [/∑/g, ' \\sum '],
  [/∏/g, ' \\prod '],
  [/∫/g, ' \\int '],
  [/∂/g, ' \\partial '],
  [/∇/g, ' \\nabla '],
  [/∞/g, '\\infty'],
  [/±/g, '\\pm'],
  [/×/g, '\\times'],
  [/·/g, ' \\cdot '],
  [/∘/g, ' \\circ '],
  [/△/g, '\\triangle'],
  [/⇒/g, '\\Rightarrow'],
  [/⇔/g, '\\Leftrightarrow'],
  [/→/g, ' \\to '],
  [/←/g, ' \\leftarrow '],
  [/↔/g, ' \\leftrightarrow '],
  [/≤/g, '\\leq'],
  [/≥/g, '\\geq'],
  [/≠/g, ' \\neq '],
  [/≈/g, '\\approx'],
  [/≡/g, '\\equiv'],
  [/⪰/g, '\\succeq'],
  [/⪯/g, '\\preceq'],
  [/⟨/g, '\\langle'],
  [/⟩/g, '\\rangle'],
  [/Ω/g, '\\Omega'],
  [/Σ/g, ' \\Sigma '],
  [/Λ/g, ' \\Lambda '],
  [/λ/g, ' \\lambda '],
  [/μ/g, ' \\mu '],
  [/σ/g, ' \\sigma '],
  [/ε/g, ' \\varepsilon '],
  [/θ/g, ' \\theta '],
  [/β/g, ' \\beta '],
  [/η/g, ' \\eta '],
  [/γ/g, ' \\gamma '],
  [/α/g, ' \\alpha '],
  [/δ/g, ' \\delta '],
  [/φ/g, ' \\varphi '],
  [/π/g, ' \\pi '],
  [/ν/g, ' \\nu '],
  [/∥/g, ' \\| '],
  [/−/g, '-'],
  [/–/g, '-'],
  [/—/g, '-'],
  [/…/g, '\\ldots'],
  [/\.\.\./g, '\\ldots'],
  [/½/g, '\\frac{1}{2}'],
];

const MATH_FUNCTIONS = ['sin', 'cos', 'tan', 'cot', 'sec', 'csc', 'log', 'ln', 'exp', 'max', 'min', 'det', 'dim', 'rank'];

function normalizeSpaces(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

function convertAccents(text: string): string {
  return text
    .replace(/θ\u0302/g, '\\hat{\\theta}')
    .replace(/β\u0302/g, '\\hat{\\beta}')
    .replace(/μ\u0302/g, '\\hat{\\mu}')
    .replace(/([A-Za-z])\u0302/g, (_, c) => `\\hat{${c}}`)
    .replace(/([A-Za-z])\u0304/g, (_, c) => `\\bar{${c}}`);
}

function convertSqrt(text: string): string {
  return text
    .replace(/√\(([^)]+)\)/g, (_, inner) => `\\sqrt{${inner}}`)
    .replace(/√([a-zA-Z0-9]+)/g, (_, inner) => `\\sqrt{${inner}}`)
    .replace(/√/g, '\\sqrt');
}

function convertSubSup(text: string): string {
  let out = '';
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (SUBSCRIPT[ch]) {
      let digits = SUBSCRIPT[ch];
      while (i + 1 < text.length && SUBSCRIPT[text[i + 1]]) {
        digits += SUBSCRIPT[text[++i]];
      }
      out += `_{${digits}}`;
      continue;
    }
    if (SUPERSCRIPT[ch]) {
      let digits = SUPERSCRIPT[ch];
      while (i + 1 < text.length && SUPERSCRIPT[text[i + 1]]) {
        digits += SUPERSCRIPT[text[++i]];
      }
      out += `^{${digits}}`;
      continue;
    }
    out += ch;
  }
  return out;
}

/** Set difference: ASCII `\` with spaces only, before LaTeX commands exist. */
function convertUnicodeSymbols(text: string): string {
  return text
    .replace(/ŷ/g, '\\hat{y}')
    .replace(/Ŷ/g, '\\hat{Y}')
    .replace(/⊥/g, ' \\perp ')
    .replace(/(\d)%/g, '$1\\%');
}

/** Prevent KaTeX glue like \\cdotg, \\nablaL, \\neqj, \\pit, \\sume. */
function insertOperatorSpaces(text: string): string {
  return text.replace(
    /\\(cdot|circ|nabla|neq|sum|int|prod|partial|pi|to(?!p)|leq|geq|approx|equiv|Rightarrow|Leftrightarrow|in|notin|cup|cap|setminus|times|pm|forall|exists|lambda|mu|sigma|theta|alpha|beta|gamma|delta|varepsilon|operatorname|mathbb|mathrm|cdotp|land|lor|iff)(\S)/g,
    (_, cmd, next) => {
      if (next === '{' || next === '(' || next === '\\') return `\\${cmd}${next}`;
      return `\\${cmd} ${next}`;
    },
  );
}

function convertUnicodeLetters(text: string): string {
  return text;
}

function convertSetDifference(text: string): string {
  return text.replace(/([A-Za-z0-9)\]}])\s+\\\s+([A-Za-z0-9(\[{])/g, '$1 \\setminus $2');
}

/** Only escape set-builder braces like {x | x ∈ A}, never subscripts. */
function escapeSetBraces(text: string): string {
  return text.replace(/\{([^{}]*\|[^{}]*)\}/g, (_, inner) => {
    const body = inner.replace(/\s\|\s/g, ' \\mid ');
    return `\\{${body}\\}`;
  });
}

function convertFractions(text: string): string {
  return text.replace(
    /(\([^)]+\)|[A-Za-z0-9\\^_()[\]!|+\-{}]+)\s*\/\s*(\([^)]+\)|[A-Za-z0-9\\^_()[\]!|+\-{}]+)/g,
    (_, num, den) => {
      if (/^(if|or|and|for|on|via|try|exists)$/i.test(num.trim())) return `${num}/${den}`;
      if (num.includes('\\frac') || den.includes('\\frac')) return `${num}/${den}`;
      return `\\frac{${num.trim()}}{${den.trim()}}`;
    },
  );
}

function convertNorms(text: string): string {
  return text.replace(/\|\|([^|]+)\|\|/g, (_, inner) => `\\|${inner}\\|`);
}

function convertLim(text: string): string {
  return text
    .replace(/\blim_\{([^}]+)\}/g, (_, sub) => {
      const cleaned = normalizeSpaces(sub.replace(/→/g, ' \\to '));
      return `\\lim_{${cleaned}}`;
    })
    .replace(/\blim⁻\b/g, '\\lim_{x \\to a^-}')
    .replace(/\blim⁺\b/g, '\\lim_{x \\to a^+}')
    .replace(/\blim\s+exists\b/gi, '\\lim \\text{ exists}')
    .replace(/(?<!\\)\blim\b/g, '\\lim');
}

function convertTrig(text: string): string {
  let out = text;
  for (const fn of MATH_FUNCTIONS) {
    out = out.replace(new RegExp(`\\b${fn}\\s*\\(`, 'g'), `\\${fn}(`);
  }
  return out;
}

function parseFormulaParts(formula: string): {
  math: string;
  note: string | null;
  label: string | null;
  arrowNote: boolean;
} {
  let math = formula.trim();
  let note: string | null = null;
  let label: string | null = null;
  let arrowNote = false;

  const labelMatch = math.match(/^([A-Za-z][A-Za-z0-9\s/'-]{0,40}):\s*(.+)$/);
  if (labelMatch && !labelMatch[1].includes('=')) {
    label = labelMatch[1].trim();
    math = labelMatch[2].trim();
  }

  const noteMatch = math.match(/^(.+?)\s+\(([^()]+)\)\s*$/);
  if (noteMatch && /^[a-zA-Z0-9\s'=\u2212-]+$/.test(noteMatch[2].trim())) {
    math = noteMatch[1].trim();
    note = noteMatch[2].trim();
  }

  const arrowSplit = math.match(/^(.+?)\s*→\s*(.+)$/);
  if (!note && arrowSplit) {
    const lhs = arrowSplit[1].trim();
    const rhs = arrowSplit[2].trim();
    const lhsHasMath = /[=<>≤≥≠∫∑∇∂^_'()]|lim_|\\frac|[εθλμσδαβγ∀∃]|\d+\/\d+/.test(lhs);
    const rhsIsProse = /^[a-zA-Z][a-zA-Z0-9\s,'()/.+\u2212-]*$/.test(rhs) && rhs.length <= 80;
    if (lhsHasMath && rhsIsProse) {
      math = lhs;
      note = rhs;
      arrowNote = true;
    }
  }

  const arrowProse = math.match(/^(.+→\s*)(.+)$/);
  if (!note && arrowProse) {
    const lhs = arrowProse[1].replace(/→\s*$/, '').trim();
    const rhs = arrowProse[2].trim();
    const lhsMathLike =
      (/^[\d\\=^_().+\-/<>\s≥≤≠∪∩·∫∑∇∂]+$/.test(lhs) || /lim_|\\frac|[εθλμσδαβγ]/.test(lhs)) &&
      !/\b[a-z]{5,}\b/i.test(lhs);
    if (lhsMathLike && !/[=^_\\|{}(~%]|^\d/.test(rhs)) {
      math = lhs;
      note = rhs;
      arrowNote = true;
    }
  }

  const trailingWords = math.match(/^(.+?)\s+([A-Za-z][A-Za-z\s'-]{2,})$/);
  if (!note && trailingWords && /^[a-zA-Z\s'-]+$/.test(trailingWords[2].trim())) {
    math = trailingWords[1].trim();
    note = trailingWords[2].trim();
  }

  const forIneq = math.match(/^(.+?)\s+for\s+i\s*≠\s*j\s*$/i);
  if (forIneq) {
    math = `${forIneq[1].trim()} \\text{ for } i \\neq j`;
  }

  return { math, note, label, arrowNote };
}

function convertMathCore(math: string): string {
  let s = math;

  s = convertUnicodeSymbols(s);
  s = convertUnicodeLetters(s);
  s = convertSetDifference(s);
  s = convertAccents(s);
  s = convertSqrt(s);
  s = convertSubSup(s);
  s = convertLim(s);

  for (const [re, latex] of SYMBOLS) s = s.replace(re, latex);

  s = convertNorms(s);
  s = convertFractions(s);
  s = convertTrig(s);
  s = escapeSetBraces(s);
  s = insertOperatorSpaces(s);
  s = wrapForInequalityProse(s);
  s = s.replace(/\biff\b/gi, '\\iff');
  s = s.replace(/\brank\b/g, '\\operatorname{rank}');
  s = s.replace(/\bdim\b/g, '\\operatorname{dim}');
  s = s.replace(/\bCol\b/g, '\\operatorname{Col}');
  s = s.replace(/\bargmax\b/g, '\\operatorname{argmax}');
  s = s.replace(/\bargmin\b/g, '\\operatorname{argmin}');
  s = s.replace(/(^|\s)#(?=\s)/g, '$1\\# ');

  return normalizeSpaces(s);
}

function wrapForInequalityProse(text: string): string {
  return text.replace(/\s+for\s+([A-Za-z])\s*\\neq\s*([A-Za-z])\b/g, ' \\text{ for } $1 \\neq $2');
}

/** Final pass: space glued LaTeX commands (e.g. \\neqj, \\lambdaI). */
export function fixGluedLatexCommands(latex: string): string {
  let s = latex;
  const cmds = [
    'neq', 'leq', 'geq', 'approx', 'equiv', 'cdot', 'times', 'circ', 'nabla', 'lambda', 'mu',
    'sigma', 'theta', 'alpha', 'beta', 'gamma', 'delta', 'pi', 'sum', 'int', 'prod', 'partial',
    'forall', 'exists', 'in', 'notin', 'cup', 'cap', 'setminus', 'to', 'Rightarrow', 'Leftrightarrow',
    'operatorname', 'text', 'frac', 'sqrt', 'hat', 'bar', 'det', 'log', 'sin', 'cos', 'tan', 'exp',
  ];
  for (const cmd of cmds) {
    s = s.replace(new RegExp(`\\\\${cmd}(?=[A-Za-z])`, 'g'), `\\${cmd} `);
  }
  return normalizeSpaces(s);
}

/** KaTeX can render soft errors in red without the katex-error class. */
export function isKatexHtmlValid(html: string): boolean {
  return !html.includes('katex-error') && !html.includes('#cc0000') && !html.includes('color:#cc0000');
}

export function renderFormulaHtml(latex: string, display = true): { html: string; latex: string; ok: boolean } {
  const fixed = fixGluedLatexCommands(latex);
  try {
    const html = katex.renderToString(fixed, {
      displayMode: display,
      throwOnError: true,
      strict: 'ignore',
      trust: false,
    });
    if (isKatexHtmlValid(html)) return { html, latex: fixed, ok: true };
  } catch {
    /* fall through */
  }

  const soft = katex.renderToString(fixed, {
    displayMode: display,
    throwOnError: false,
    strict: 'ignore',
    trust: false,
  });
  const ok = isKatexHtmlValid(soft);
  return { html: ok ? soft : '', latex: fixed, ok };
}

function formatNote(note: string): string {
  const safe = note.replace(/≠/g, '!=').replace(/→/g, '->');
  return `\\text{${safe}}`;
}

function formatLabel(label: string): string {
  return `\\text{${label}: }`;
}

/** Main entry: curriculum formula string → LaTeX for KaTeX. */
export function toLatex(formula: string): string {
  if (!formula.trim()) return formula;

  let raw = formula.trim();
  if (raw.startsWith('$$') && raw.endsWith('$$')) raw = raw.slice(2, -2).trim();
  if (raw.startsWith('$') && raw.endsWith('$') && raw.length > 2) raw = raw.slice(1, -1).trim();

  const { math, note, label, arrowNote } = parseFormulaParts(raw);
  const parts: string[] = [];

  if (label) parts.push(formatLabel(label));

  const core = convertMathCore(math);

  if (/^[A-Za-z][A-Za-z0-9\s/-]{0,30}$/.test(math.trim()) && !/[=^_∑∫→←\\]/.test(math)) {
    parts.push(`\\text{${math.trim()}}`);
  } else {
    parts.push(core);
  }

  if (note) {
    parts.push(arrowNote ? ` \\to ${formatNote(note)}` : ` ${formatNote(note)}`);
  }

  return fixGluedLatexCommands(normalizeSpaces(parts.join(' ')));
}

export type FormulaDisplay = {
  source: string;
  latex: string;
  label: string | null;
  math: string;
  note: string | null;
  explanation: string | null;
};

/** Structured formula parts for UI (math + human-readable explanation). */
export function parseFormulaDisplay(formula: string): FormulaDisplay {
  const source = formula.trim();
  const { math, note, label, arrowNote } = parseFormulaParts(source);
  let explanation = note;

  if (!explanation && label) {
    explanation = label;
  }

  if (!explanation && /→/.test(source)) {
    const rhs = source.split(/→/).pop()?.trim();
    if (rhs && rhs !== source && rhs.length <= 80) explanation = rhs;
  }

  if (!explanation && /^Example:/i.test(source)) {
    explanation = 'Worked example showing the rule in practice.';
  }

  return {
    source,
    latex: toLatex(source),
    label,
    math,
    note,
    explanation: explanation && !arrowNote ? explanation : explanation,
  };
}

/** Wrap plain-text math fragments in $...$ for inline rendering in lesson prose. */
export function autoWrapMathInProse(text: string): string {
  if (!text || text.includes('$')) return text;

  let s = text;
  const wrap = (match: string) => `$${match}$`;

  s = s.replace(/\blim_\{[^}]+\}\s*=\s*[^$.,;\n]+/g, wrap);
  s = s.replace(/\blim_\{[^}]+\}\s+[a-zA-Z]+\([^)]*\)\/[^$.,;\n]+/g, wrap);
  s = s.replace(/lim_\{[^}]+\}/g, wrap);
  s = s.replace(/\b\d+\/\d+\b/g, wrap);
  s = s.replace(/[a-zA-Z0-9()]+\→[a-zA-Z0-9∞⁺⁻]+/g, wrap);
  s = s.replace(/f'\([^)]*\)|f''\([^)]*\)/g, wrap);
  s = s.replace(/ε-δ|ε−δ/g, wrap);
  s = s.replace(/\blim\b(?!\s*_\{)/g, (m, offset, full) => {
    const rest = full.slice(offset);
    const expr = rest.match(/^lim\s+[^$.,;\n]+?(?=\s+(?:means|if|when|from|as\b)|[.,;\n]|$)/i);
    return expr ? wrap(expr[0]) : m;
  });

  return s;
}
