import katex from 'katex';
import { renderFormulaHtml, toLatex } from '../src/utils/latexFormula.ts';

const formulas = [
  'Partition: ∪ P_i = U, P_i ∩ P_j = ∅ for i≠j',
  'Diagonal: A_ij=0 for i≠j',
];

for (const f of formulas) {
  const latex = toLatex(f);
  const { html, ok } = renderFormulaHtml(latex, true);
  console.log('formula:', f);
  console.log('latex:', latex);
  console.log('ok:', ok);
  console.log('---');
}

const bad = String.raw`\text{Partition: } \cup P_i = U, P_i \cap P_j = \emptyset for i\neqj`;
const badResult = renderFormulaHtml(bad, true);
console.log('bad neqj ok:', badResult.ok);
