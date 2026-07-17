/**
 * Scan curriculum formulas for shorthand, text-only, and rendering issues.
 */
import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import katex from 'katex';
import { toLatex } from '../src/utils/latexFormula.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dir = join(__dirname, '..', 'src/data/curriculum');
const files = readdirSync(dir).filter((f) => f.endsWith('.ts') && f.startsWith('module'));

const katexErrors = [];
const shorthand = [];
const arrowHints = [];
const textHeavy = [];

const SHORTHAND = /formal definition|^lim exists|→ try|→ rewrite|→ one-hot|→ zero|^Repeat until|^Example:/i;

for (const file of files) {
  const content = readFileSync(join(dir, file), 'utf8');
  const blocks = [...content.matchAll(/formulas:\s*\[([\s\S]*?)\]/g)];
  for (const block of blocks) {
    for (const m of block[1].matchAll(/`([^`]+)`/g)) {
      const f = m[1];
      const latex = toLatex(f);
      try {
        katex.renderToString(latex, { throwOnError: true });
      } catch (e) {
        katexErrors.push({ file, f, latex, err: e.message });
      }
      if (SHORTHAND.test(f)) shorthand.push({ file, f, latex });
      if (/→/.test(f) && !/=/.test(f) && !/lim_\{/.test(f)) arrowHints.push({ file, f, latex });
      const stripped = latex.replace(/\\text\{[^}]+\}/g, '').replace(/\\[a-zA-Z]+/g, '');
      if (/^\\text\{/.test(latex) || (latex.includes('\\text{') && stripped.trim().length < 8)) {
        textHeavy.push({ file, f, latex });
      }
    }
  }
}

console.log('=== FORMULA AUDIT ===');
console.log('KaTeX errors:', katexErrors.length);
katexErrors.slice(0, 10).forEach((i) => console.log(' ', i.f, '→', i.err));

console.log('\nShorthand / hint formulas (need proper math):', shorthand.length);
shorthand.forEach((i) => console.log(' ', i.f));

console.log('\nArrow hints without equation:', arrowHints.length);
arrowHints.slice(0, 25).forEach((i) => console.log(' ', i.f));

console.log('\nText-heavy formulas:', textHeavy.length);
textHeavy.slice(0, 15).forEach((i) => console.log(' ', i.f));
