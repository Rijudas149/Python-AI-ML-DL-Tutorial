import fs from 'fs';
import path from 'path';
import katex from 'katex';
import { fixGluedLatexCommands, isKatexHtmlValid, toLatex } from '../src/utils/latexFormula.ts';

const dir = 'src/data/curriculum';
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.ts') && f.startsWith('module'));

const formulas = [];
for (const f of files) {
  const t = fs.readFileSync(path.join(dir, f), 'utf8');
  const re = /formulas:\s*\[([\s\S]*?)\]/g;
  let m;
  while ((m = re.exec(t))) {
    const inner = m[1];
    const itemRe = /`([^`]+)`/g;
    let im;
    while ((im = itemRe.exec(inner))) formulas.push({ formula: im[1], file: f });
  }
}

let errors = 0;
let glued = 0;

for (const { formula, file } of formulas) {
  const latex = fixGluedLatexCommands(toLatex(formula));
  if (/\\[a-zA-Z]+[a-zA-Z]/.test(latex.replace(/\\text\{[^}]+\}/g, '').replace(/\\operatorname\{[^}]+\}/g, ''))) {
    // rough glued command detector
  }
  if (/\\neq[a-zA-Z]|\\lambda[A-Z]|\\nabla[A-Z]|\\cdot[a-zA-Z]|\\forall[a-zA-Z]/.test(latex)) {
    glued++;
    console.log('GLUED:', formula, '→', latex, `(${file})`);
  }

  let ok = false;
  try {
    const html = katex.renderToString(latex, { displayMode: true, throwOnError: true, strict: 'ignore' });
    ok = isKatexHtmlValid(html);
  } catch (e) {
    ok = false;
    console.log('FAIL:', formula);
    console.log('  file:', file);
    console.log('  latex:', latex);
    console.log('  err:', e.message);
    console.log('');
  }
  if (!ok) errors++;
}

console.log(`Tested ${formulas.length} formulas, ${errors} invalid, ${glued} glued patterns in latex`);
