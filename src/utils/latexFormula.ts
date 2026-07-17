/** Convert curriculum formula strings (Unicode + partial LaTeX) to KaTeX-ready LaTeX. */

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
  [/∀/g, '\\forall'],
  [/∃/g, '\\exists'],
  [/∈/g, '\\in'],
  [/∉/g, '\\notin'],
  [/⊆/g, '\\subseteq'],
  [/⊂/g, '\\subset'],
  [/⊇/g, '\\supseteq'],
  [/∪/g, '\\cup'],
  [/∩/g, '\\cap'],
  [/∅/g, '\\emptyset'],
  [/∑/g, '\\sum'],
  [/∏/g, '\\prod'],
  [/∫/g, '\\int'],
  [/∂/g, '\\partial'],
  [/∇/g, '\\nabla'],
  [/∞/g, '\\infty'],
  [/±/g, '\\pm'],
  [/×/g, '\\times'],
  [/·/g, '\\cdot'],
  [/∘/g, '\\circ'],
  [/△/g, '\\triangle'],
  [/⇒/g, '\\Rightarrow'],
  [/⇔/g, '\\Leftrightarrow'],
  [/→/g, '\\to'],
  [/←/g, '\\leftarrow'],
  [/↔/g, '\\leftrightarrow'],
  [/≤/g, '\\leq'],
  [/≥/g, '\\geq'],
  [/≠/g, '\\neq'],
  [/≈/g, '\\approx'],
  [/≡/g, '\\equiv'],
  [/⪰/g, '\\succeq'],
  [/⪯/g, '\\preceq'],
  [/⟨/g, '\\langle'],
  [/⟩/g, '\\rangle'],
  [/Ω/g, '\\Omega'],
  [/Λ/g, '\\Lambda'],
  [/Σ/g, '\\Sigma'],
  [/λ/g, '\\lambda'],
  [/μ/g, '\\mu'],
  [/σ/g, '\\sigma'],
  [/ε/g, '\\varepsilon'],
  [/θ/g, '\\theta'],
  [/β/g, '\\beta'],
  [/η/g, '\\eta'],
  [/γ/g, '\\gamma'],
  [/α/g, '\\alpha'],
  [/δ/g, '\\delta'],
  [/φ/g, '\\varphi'],
  [/π/g, '\\pi'],
  [/ν/g, '\\nu'],
  [/−/g, '-'],
  [/–/g, '-'],
  [/—/g, '-'],
  [/…/g, '\\ldots'],
  [/\.\.\./g, '\\ldots'],
  [/½/g, '\\frac{1}{2}'],
];

const PROSE_PHRASES = [
  'maps each', 'uses inclusion-exclusion', 'horizontal asymptote', 'formal definition',
  'linear combination', 'draws without replacement', 'equally likely', 'reverse order',
  'on domain', 'complementary slackness', 'reconstruction', 'nonlinear PCs', 'via SVD',
  'if disjoint', 'if equally likely', 'try L\'Hôpital', 'try L\'Hopital',
  'actual outputs', 'invertible function exists', 'change of variables',
  'unbiased if random sample', 'parallel to constraint', 'zero at MLE',
  'for g', 'for x', 'on d', 'on constraint', 'to nonlinear PCs',
];

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

/** Set difference uses ASCII `\` in source — convert before LaTeX `\commands` exist. */
function convertSetDifference(text: string): string {
  return text.replace(/([A-Za-z0-9)\]}])\s+\\\s+([A-Za-z0-9(\[{])/g, '$1 \\setminus $2');
}

function escapeSetBraces(text: string): string {
  return text.replace(/\{([^{}]*)\}/g, (match, inner) => {
    const isSet =
      /\s\|\s|\\mid|\\in|\\notin|\\cup|\\cap|\\subseteq|\\subset| or | and |,/.test(inner) ||
      /^[xSUA-Za-z]\s/.test(inner);
    if (!isSet) return match;
    const body = inner.replace(/\s\|\s/g, ' \\mid ');
    return `\\{${body}\\}`;
  });
}

function convertFractions(text: string): string {
  return text.replace(
    /(\([^)]+\)|[A-Za-z0-9\\^_()[\]!|+\-{}]+)\s*\/\s*(\([^)]+\)|[A-Za-z0-9\\^_()[\]!|+\-{}]+)/g,
    (_, num, den) => {
      if (/^(if|or|and|for|to|on|via|try)$/i.test(num.trim())) return `${num}/${den}`;
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
    .replace(/\blim_\{([^}]+)\}/g, (_, sub) => `\\lim_{${sub.replace(/→/g, '\\to')}}`)
    .replace(/\blim\b/g, '\\lim');
}

function wrapLabelsAndNotes(text: string): string {
  let s = text;

  s = s.replace(/^([A-Za-z][A-Za-z0-9\s/-]{0,40}):\s*/, (_, label) => `\\text{${label.trim()}: }`);
  s = s.replace(/\s+\(([^()=^_{}\\|]+)\)\s*$/, (_, note) => ` \\text{(${note.trim()})}`);

  for (const phrase of PROSE_PHRASES) {
    const re = new RegExp(`\\b${phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    s = s.replace(re, (m) => ` \\text{${m}} `);
  }

  s = s.replace(/\bto\b(?=\s+[a-z])/g, (m) => ` \\text{${m}} `);
  s = s.replace(/\bfor\b(?=\s+[a-z≠])/gi, (m) => ` \\text{${m}} `);
  s = s.replace(/\bif\b(?=\s+\|)/g, (m) => ` \\text{${m}} `);

  s = s.replace(/\s+(\#[^\s=]+)/g, (_, rest) => ` ${rest.replace(/#/g, '\\#')}`);
  s = s.replace(/(^|\s)#(?=\s)/g, '$1\\# ');
  s = s.replace(/\bargmax\b/g, '\\operatorname{argmax}');
  s = s.replace(/\bargmin\b/g, '\\operatorname{argmin}');

  return s.replace(/\s+/g, ' ').trim();
}

/** Main entry: curriculum formula string → LaTeX for KaTeX. */
export function toLatex(formula: string): string {
  if (!formula.trim()) return formula;

  let s = formula.trim();

  if (s.startsWith('$$') && s.endsWith('$$')) s = s.slice(2, -2).trim();
  if (s.startsWith('$') && s.endsWith('$') && s.length > 2) s = s.slice(1, -1).trim();

  s = convertSetDifference(s);
  s = convertAccents(s);
  s = convertSqrt(s);
  s = convertSubSup(s);

  for (const [re, latex] of SYMBOLS) s = s.replace(re, latex);

  s = convertLim(s);
  s = convertNorms(s);
  s = convertFractions(s);
  s = escapeSetBraces(s);
  s = wrapLabelsAndNotes(s);

  return s.replace(/\s+/g, ' ').trim();
}
