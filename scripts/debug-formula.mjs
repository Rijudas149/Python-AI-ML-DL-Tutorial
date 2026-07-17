import { readFileSync } from 'fs';
import { toLatex } from '../src/utils/latexFormula.ts';

const c = readFileSync('src/data/curriculum/module-math-03-linalg2.ts', 'utf8');
const m = c.match(/`max w[^`]+`/);
const s = m[0].slice(1, -1);
console.log('formula:', s);
for (const ch of s) console.log(JSON.stringify(ch), ch.codePointAt(0).toString(16));
console.log('latex:', toLatex(s));
