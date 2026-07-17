import { readFileSync } from 'fs';
import { parseDiagram } from '../src/utils/diagramParser.ts';

const text = readFileSync('./scripts/math-curriculum.mjs', 'utf8');
const re = /id:\s*"([^"]+)"[\s\S]*?diagram:\s*(?:"((?:\\.|[^"\\])*)"|`([\s\S]*?)`)/g;
let m;
while ((m = re.exec(text)) !== null) {
  const id = m[1];
  const raw = (m[2] || m[3]).replace(/\\n/g, '\n');
  const spec = parseDiagram(raw);
  if (spec.type === 'callout') {
    console.log(id, '→', raw.split('\n')[0].slice(0, 70));
  }
}
