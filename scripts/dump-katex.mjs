import katex from 'katex';
import { writeFileSync } from 'fs';

const bad = String.raw`\text{Partition: } \cup P_i = U, P_i \cap P_j = \emptyset for i\neqj`;
const html = katex.renderToString(bad, { throwOnError: false });
writeFileSync('scripts/katex-bad.html', html);
console.log('length', html.length);
console.log('katex-error', html.includes('katex-error'));
console.log('parseerror', html.includes('ParseError'));
console.log(html);
