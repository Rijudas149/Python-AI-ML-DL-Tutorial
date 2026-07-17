import { readFileSync } from 'fs';
import { parseDiagram } from '../src/utils/diagramParser.ts';

const text = readFileSync('./scripts/math-curriculum.mjs', 'utf8');
const diagrams = [];
const re = /diagram:\s*(?:"((?:\\.|[^"\\])*)"|`([\s\S]*?)`)/g;
let m;
while ((m = re.exec(text)) !== null) {
  diagrams.push((m[1] || m[2]).replace(/\\n/g, '\n'));
}

const counts = {};
for (const d of diagrams) {
  const spec = parseDiagram(d);
  counts[spec.type] = (counts[spec.type] || 0) + 1;
}
console.log('Total:', diagrams.length);
console.log(counts);
