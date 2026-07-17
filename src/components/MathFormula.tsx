import { useMemo } from 'react';
import katex from 'katex';
import { toLatex } from '../utils/latexFormula';

interface MathFormulaProps {
  formula: string;
  /** Display mode (centered block) vs inline */
  display?: boolean;
  className?: string;
}

export function MathFormula({ formula, display = true, className = '' }: MathFormulaProps) {
  const rendered = useMemo(() => {
    const latex = toLatex(formula);
    try {
      const html = katex.renderToString(latex, {
        displayMode: display,
        throwOnError: false,
        strict: 'ignore',
        trust: false,
      });
      return { html, latex, ok: true };
    } catch {
      return { html: '', latex, ok: false };
    }
  }, [formula, display]);

  if (!rendered.ok) {
    return (
      <span className={`math-formula-fallback ${className}`.trim()} title={rendered.latex}>
        {formula}
      </span>
    );
  }

  return (
    <span
      className={`math-formula ${display ? 'math-formula-display' : 'math-formula-inline'} ${className}`.trim()}
      dangerouslySetInnerHTML={{ __html: rendered.html }}
      title={formula}
    />
  );
}
