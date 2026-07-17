import katex from 'katex';
import { toLatex } from '../src/utils/latexFormula.ts';

const formulas = [
  'lim_{x→a} f(x) = L',
  'lim exists ⇔ lim⁻ = lim⁺',
  'lim_{x→∞} f(x) (horizontal asymptote)',
  'ε-δ formal definition',
  "0/0 → try L'Hôpital",
  'lim_{x→0} sin(x)/x = 1',
];

for (const f of formulas) {
  const latex = toLatex(f);
  const html = katex.renderToString(latex, { displayMode: true, throwOnError: false });
  const bad = html.includes('katex-error') || latex.includes('setminus') || latex.includes('text{to}');
  console.log(bad ? 'FAIL' : 'OK', f);
  console.log('  latex:', latex);
  console.log('');
}
