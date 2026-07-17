import fs from 'fs';
import path from 'path';

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
console.log('count', formulas.length);
for (const f of formulas.slice(0, 50)) console.log(f);
