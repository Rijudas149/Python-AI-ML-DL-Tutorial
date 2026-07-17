/**
 * Content/UI audit for curriculum — broken refs, boilerplate, diagrams, keyPoints.
 */
import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const BOX_CHARS = /[│┌┐└┘├┤┬┴┼─═╱\\_|·.]/g;

function isDecorativeDiagramLine(line) {
  const t = line.trim();
  if (!t) return true;
  if (/^\(see formulas above\)$/i.test(t)) return true;
  if (/^see formulas above\.?$/i.test(t)) return true;
  if (/^·\s*·\s*·/.test(t)) return true;
  const withoutBox = t.replace(BOX_CHARS, '').replace(/\s+/g, '');
  if (withoutBox.length === 0) return true;
  if (withoutBox.length <= 2 && /[│└┌┐┘─═╱\\]/.test(t)) return true;
  return false;
}

// Valid reference IDs
const refFile = readFileSync(join(root, 'src/data/references.ts'), 'utf8');
const validRefs = new Set([...refFile.matchAll(/id: `([^`]+)`/g)].map((m) => m[1]));

const curDir = join(root, 'src/data/curriculum');
const files = readdirSync(curDir).filter((f) => f.endsWith('.ts') && f.startsWith('module'));

const brokenRefs = [];
const boilerplateApplying = [];
const boilerplateWhenStudying = [];
const boilerplateAdvancedAI = [];
const boilerplateStrongPractitioners = [];
const decorativeDiagrams = [];
const seeFormulasAbove = [];
const duplicatePseudoKeyPoints = [];
const weakKeyPoints = [];

for (const file of files) {
  const content = readFileSync(join(curDir, file), 'utf8');
  let currentTopicId = null;
  let currentSectionTitle = null;
  let inKeyPoints = false;
  let keyPointsBlock = [];
  let pseudoCodeText = null;

  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    const topicMatch = line.match(/^\s+id:\s*`([^`]+)`/);
    if (topicMatch && line.includes('id:') && !line.includes('ex-')) {
      // topic id uses backticks in curriculum
    }
    const topicMatch2 = line.match(/^\s+id:\s*`([^`]+)`/);
    if (topicMatch2 && /^\s+id:/.test(line) && !/^[\s\S]*ex-/.test(line.slice(0, 30))) {
      // could be section or topic - topic has track/sections nearby
    }

    if (/^\s+id:\s*`[^`]+`/.test(line) && !line.includes('ex-')) {
      const m = line.match(/^\s+id:\s*`([^`]+)`/);
      if (m) {
        // Heuristic: topic IDs don't have hyphens-only short names in sections... 
        // Better: reset on "sections:" boundary
      }
    }

    if (/^\s+\{$/.test(line) && lines[i + 1]?.includes('id:')) {
      const nextId = lines[i + 1]?.match(/id:\s*`([^`]+)`/);
      if (nextId && lines.slice(i, i + 10).some((l) => l.includes('sections:'))) {
        currentTopicId = nextId[1];
      }
    }

    const sectionTitleMatch = line.match(/^\s+title:\s*`([^`]+)`/);
    if (sectionTitleMatch && lines.slice(Math.max(0, i - 5), i).some((l) => l.includes('sections:'))) {
      // section title inside sections array
    }

    // Reference IDs inside topic references blocks
    const refIdMatch = line.match(/^\s+id:\s*`([^`]+)`/);
    if (refIdMatch && lines.slice(Math.max(0, i - 3), i).some((l) => l.includes('references:'))) {
      const refId = refIdMatch[1];
      if (!validRefs.has(refId)) {
        brokenRefs.push({ file, refId, line: i + 1 });
      }
    }

    const contentStart = line.match(/^\s+content:\s*`(.*)$/);
    if (contentStart && currentTopicId) {
      let text = contentStart[1];
      while (!text.endsWith('`') && i + 1 < lines.length) {
        i++;
        text += '\n' + lines[i];
      }
      text = text.replace(/`$/, '');

      if (/^\*\*Applying [^*]+:\*\*/m.test(text)) {
        const match = text.match(/^\*\*Applying ([^*]+):\*\*/m);
        boilerplateApplying.push({ file, topicId: currentTopicId, phrase: match?.[0] });
      }
      if (/When studying "/m.test(text)) {
        const match = text.match(/When studying "([^"]+)"/);
        boilerplateWhenStudying.push({ file, topicId: currentTopicId, section: match?.[1] });
      }
      if (/Advanced AI engineering merges models with retrieval/.test(text)) {
        boilerplateAdvancedAI.push({ file, topicId: currentTopicId });
      }
      if (/Strong practitioners capture these lessons in runbooks/.test(text)) {
        boilerplateStrongPractitioners.push({ file, topicId: currentTopicId });
      }
    }

    const diagramStart = line.match(/^\s+diagram:\s*`(.*)$/);
    if (diagramStart && currentTopicId) {
      let text = diagramStart[1];
      while (!text.endsWith('`') && i + 1 < lines.length) {
        i++;
        text += '\n' + lines[i];
      }
      text = text.replace(/`$/, '');

      const dLines = text.split('\n');
      const decorative = dLines.filter((l) => isDecorativeDiagramLine(l) && l.trim());
      if (decorative.length > 0) {
        decorativeDiagrams.push({ file, topicId: currentTopicId, count: decorative.length, sample: decorative[0]?.slice(0, 60) });
      }
      if (/see formulas above/i.test(text)) {
        seeFormulasAbove.push({ file, topicId: currentTopicId });
      }
    }

    // Track topic id from pattern: id before sections
    if (/^\s+id:\s*`([^`]+)`/.test(line)) {
      const ahead = lines.slice(i, i + 8).join('\n');
      if (ahead.includes('sections:') || ahead.includes('exercises:')) {
        currentTopicId = line.match(/^\s+id:\s*`([^`]+)`/)[1];
      }
    }

    if (/^\s+keyPoints:\s*\[/.test(line)) {
      inKeyPoints = true;
      keyPointsBlock = [];
    }
    if (inKeyPoints) {
      const kp = line.match(/^\s+`([^`]+)`/);
      if (kp) keyPointsBlock.push(kp[1]);
      if (/^\s+\],/.test(line)) {
        inKeyPoints = false;
      }
    }

    const pcStart = line.match(/^\s+pseudoCode:\s*`(.*)$/);
    if (pcStart && currentTopicId) {
      let text = pcStart[1];
      while (!text.endsWith('`') && i + 1 < lines.length) {
        i++;
        text += '\n' + lines[i];
      }
      text = text.replace(/`$/, '');

      // Check if pseudoCode is just numbered keyPoints
      const numbered = text.split('\n').filter((l) => /^\d+\.\s/.test(l.trim())).map((l) => l.replace(/^\d+\.\s+/, '').trim());
      if (keyPointsBlock.length >= 2 && numbered.length === keyPointsBlock.length) {
        const match = keyPointsBlock.every((kp, idx) => kp === numbered[idx]);
        if (match) {
          duplicatePseudoKeyPoints.push({ file, topicId: currentTopicId, section: text.split('\n')[0] });
        }
      }

      for (const p of keyPointsBlock) {
        if (p.length < 20 || /^Understand (the )?(core|key|main)/i.test(p)) {
          weakKeyPoints.push({ file, topicId: currentTopicId, point: p });
        }
      }
    }
  }
}

function summarize(arr, label, formatter) {
  console.log(`\n--- ${label} ---`);
  console.log(`  Total: ${arr.length}`);
  const byFile = {};
  const byTopic = {};
  for (const item of arr) {
    byFile[item.file] = (byFile[item.file] || 0) + 1;
    if (item.topicId) byTopic[item.topicId] = (byTopic[item.topicId] || 0) + 1;
  }
  console.log(`  By file: ${Object.entries(byFile).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([f, c]) => `${f}(${c})`).join(', ')}`);
  if (formatter) {
    console.log('  Examples:');
    for (const ex of arr.slice(0, 6)) console.log('   ', formatter(ex));
  }
}

console.log('=== CONTENT AUDIT ===');
console.log(`Valid refs: ${validRefs.size}, Files: ${files.length}`);

summarize(brokenRefs, 'P0: Broken reference IDs (not in references.ts)', (b) => `${b.refId} @ ${b.file}:${b.line}`);

summarize(boilerplateApplying, 'P1: "**Applying X:**" boilerplate in section content', (b) => `${b.topicId} (${b.file}): ${b.phrase}`);

summarize(boilerplateWhenStudying, 'P1: "When studying..." boilerplate', (b) => `${b.topicId} — "${b.section}" (${b.file})`);

summarize(boilerplateAdvancedAI, 'P1: Misplaced "Advanced AI engineering merges..." filler', (b) => `${b.topicId} (${b.file})`);

summarize(boilerplateStrongPractitioners, 'P2: "Strong practitioners capture..." repeated closer', (b) => `${b.topicId} (${b.file})`);

summarize(decorativeDiagrams, 'P2: Diagrams with decorative ASCII lines', (b) => `${b.topicId} (${b.file}): ${b.count} lines, e.g. ${JSON.stringify(b.sample)}`);

summarize(seeFormulasAbove, 'P2: "see formulas above" in diagrams', (b) => `${b.topicId} (${b.file})`);

summarize(duplicatePseudoKeyPoints, 'P3: pseudoCode duplicates keyPoints verbatim', (b) => `${b.topicId} section "${b.section}" (${b.file})`);

summarize(weakKeyPoints, 'P3: Thin keyPoints (<20 chars or generic)', (b) => `${b.topicId}: "${b.point}"`);

// Count modules with boilerplate
const modulesWithApplying = new Set(boilerplateApplying.map((b) => b.file));
console.log(`\nModules with Applying boilerplate: ${modulesWithApplying.size}/${files.length}`);
console.log([...modulesWithApplying].join('\n  '));

// Catalog vs references.ts drift
const catFile = readFileSync(join(root, 'scripts/references-data.mjs'), 'utf8');
const catalogIds = [...catFile.matchAll(/^\s+'([^']+)':\s*\{/gm)].map((m) => m[1]);
const missingInTs = catalogIds.filter((id) => !validRefs.has(id));
console.log('\n--- P0: references-data.mjs IDs missing from references.ts ---');
console.log(`  ${missingInTs.length ? missingInTs.join(', ') : 'None'}`);

// pseudoCode duplicates keyPoints (all modules)
let pseudoDupAll = 0;
const pseudoDupExamples = [];
for (const file of files) {
  const content = readFileSync(join(curDir, file), 'utf8');
  const sections = [...content.matchAll(/keyPoints:\s*\[([\s\S]*?)\],\s*\n[\s\S]*?pseudoCode:\s*`([\s\S]*?)`/g)];
  for (const m of sections) {
    const kps = [...m[1].matchAll(/`([^`]+)`/g)].map((x) => x[1]);
    const pc = m[2];
    const numbered = pc.split('\n').filter((l) => /^\d+\.\s/.test(l.trim())).map((l) => l.replace(/^\d+\.\s+/, '').trim());
    if (kps.length >= 2 && numbered.length === kps.length && kps.every((kp, i) => kp === numbered[i])) {
      pseudoDupAll++;
      if (pseudoDupExamples.length < 8) pseudoDupExamples.push({ file, title: pc.split('\n')[0] });
    }
  }
}
console.log('\n--- P2: pseudoCode verbatim copy of keyPoints (all modules) ---');
console.log(`  Total sections: ${pseudoDupAll}`);
pseudoDupExamples.forEach((e) => console.log(`    "${e.title}" (${e.file})`));

// ASCII in pseudoCode (math)
let asciiInPseudo = 0;
for (const file of files) {
  const content = readFileSync(join(curDir, file), 'utf8');
  const pcs = [...content.matchAll(/pseudoCode:\s*`([\s\S]*?)`/g)];
  for (const m of pcs) {
    if (/[│┌┐└┘├┤┬┴┼─═]/.test(m[1])) {
      asciiInPseudo++;
      if (asciiInPseudo <= 5) console.log(`  ASCII in pseudoCode: ${file} — ${m[1].split('\n')[0]}`);
    }
  }
}
console.log(`\n--- P2: pseudoCode containing diagram ASCII ---`);
console.log(`  Total: ${asciiInPseudo}`);

// Trivial print() exercises
let trivialEx = 0;
const trivialTopics = {};
for (const file of files) {
  const content = readFileSync(join(curDir, file), 'utf8');
  let tid = null;
  for (const line of content.split('\n')) {
    if (/^\s+id:\s*`/.test(line) && !line.includes('ex-')) {
      const ahead = content.slice(content.indexOf(line), content.indexOf(line) + 500);
      if (ahead.includes('sections:')) tid = line.match(/`([^`]+)`/)[1];
    }
    if (/solution:\s*`print\(/.test(line) && tid) {
      trivialEx++;
      trivialTopics[tid] = (trivialTopics[tid] || 0) + 1;
    }
  }
}
console.log('\n--- P2: Trivial exercises (solution is print(...)) ---');
console.log(`  Total: ${trivialEx} exercises in ${Object.keys(trivialTopics).length} topics`);
console.log('  Top topics:', Object.entries(trivialTopics).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([t, c]) => `${t}(${c})`).join(', '));
