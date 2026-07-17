import fs from 'fs';
import path from 'path';
import katex from 'katex';
import { toLatex } from '../src/utils/latexFormula.ts';

const dir = 'src/data/curriculum';
const files = fs.readdirSync(dir).filter((f) => f.startsWith('module-math'));
const formulas = [];
for (const f of files) {
  const t = fs.readFileSync(path.join(dir, f), 'utf8');
  const re = /formulas:\s*\[([\s\S]*?)\]/g;
  let m;
  while ((m = re.exec(t))) {
    const inner = m[1];
    const itemRe = /`([^`]+)`/g;
    let im;
    while ((im = itemRe.exec(inner))) formulas.push(im[1]);
  }
}

let errors = 0;
for (const f of formulas) {
  const latex = toLatex(f);
  const html = katex.renderToString(latex, { displayMode: true, throwOnError: false, strict: 'ignore' });
  if (html.includes('katex-error')) {
    errors++;
    console.log('FAIL:', f);
    console.log('  →', latex);
    console.log('');
  }
}
console.log(`Tested ${formulas.length} formulas, ${errors} with KaTeX errors`);
