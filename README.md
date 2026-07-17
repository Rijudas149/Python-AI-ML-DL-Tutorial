# Data Science Master — Python · Math · ML · DL · AI Academy

A web-based learning app covering **Python**, **Mathematics**, **Machine Learning**, **Deep Learning**, and **AI** — with theory, formulas, diagrams, runnable code, exercises, and curated references.

## Curriculum

| Phase | Track | Modules | Topics |
|-------|-------|---------|--------|
| 1 | Python | 5 + 2 advanced | 35 |
| 2 | **Mathematics** | 8 | **40** |
| 3 | Data Science | 4 | 20 |
| 4 | Machine Learning | 6 | 30 |
| 5 | Deep Learning | 5 | 25 |
| 6 | AI & GenAI | 6 | 30 |

**180 topics** across **36 modules**, each with ~12 sections (theory, formulas, diagrams, code, exercises) and university-grade references.

### Math track (40 topics)

Algebra & functions · Linear algebra I & II · Calculus I · Multivariate calculus · Probability · Statistics · Optimization & information theory — every section includes **key formulas** and **ASCII diagrams**.

## Features

- Structured **6-phase roadmap** with progress tracking
- **Formulas & diagrams** on math lessons
- Runnable Python code with expected output
- Hands-on exercises with hints and solutions
- Bookmarks, notes, streaks, global search (Ctrl+K)
- 154 curated references (Stanford, MIT, Oxford, arXiv, official docs)
- ML/DL glossary

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Generates curriculum from `scripts/` then builds with Vite.

## Deploy (Netlify)

- Node **22** (see `.nvmrc` and `netlify.toml`)
- Build command: `npm run build`
- Publish directory: `dist`
- Do **not** commit `node_modules/` or `dist/` (see `.gitignore`)

## Tech stack

React 19 · TypeScript · Vite 8 · React Router 7 · localStorage progress

## Project structure

```
scripts/                  # Curriculum generators
  math-curriculum.mjs     # 8 math modules (40 topics)
  generate-curriculum.mjs # Main generator
src/
  data/curriculum/        # Generated topic modules
  pages/                  # Home, Learn, Roadmap, etc.
  components/             # MathBlocks, LessonContent, etc.
```
