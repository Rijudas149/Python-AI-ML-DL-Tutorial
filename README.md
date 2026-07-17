# DL Master — Python · ML · DL · AI Academy

A web-based learning app covering **Python** (basics to advanced), **Machine Learning**, **Deep Learning**, and **AI/GenAI** — with theory, runnable code, exercises, and curated references from Stanford, MIT, Oxford, and arXiv.

## Quick start

```bash
cd DL_Master
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Other commands

| Command | Description |
|---------|-------------|
| `npm run build` | Generate curriculum, type-check, and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint source files |
| `npm run generate-curriculum` | Regenerate topic content from `scripts/` |

## What's included

- **100 topics** across **20 modules**
- **5 learning tracks:** Python → Data → ML → DL → AI
- **Lesson flow:** explanation → logic → code → output → takeaways → exercises
- **154 references** (courses, papers, books, docs) linked on every topic
- **Glossary** of 39 ML/DL/AI terms
- **Progress tracking:** sections, exercises, streaks, bookmarks, notes (saved in browser localStorage)
- **Global search:** `Ctrl+K` (or `Cmd+K` on Mac)

## App pages

| Route | Purpose |
|-------|---------|
| `/` | Home — progress, topic of the day, track overview |
| `/learn` | Browse all modules and topics |
| `/learn/:topicId` | Interactive lesson |
| `/references` | Browse curated external resources |
| `/glossary` | Searchable term definitions |
| `/bookmarks` | Saved topics |

## Project structure

```
DL_Master/
├── src/
│   ├── pages/           # Home, Learn, TopicLesson, References, Glossary, Bookmarks
│   ├── components/      # Layout, Sidebar, CodeBlock, ExerciseEditor, etc.
│   ├── data/
│   │   ├── curriculum/  # Generated topic modules (100 topics)
│   │   ├── references.ts
│   │   └── glossary.ts
│   └── context/         # Theme + progress (localStorage)
├── scripts/
│   ├── generate-curriculum.mjs   # Builds curriculum + references
│   └── references-data.mjs       # Stanford/MIT/Oxford/paper URLs
└── public/
```

## Curriculum modules

1. Python Fundamentals → Advanced Python  
2. NumPy, Pandas, Visualization  
3. Math for ML, ML Foundations, Supervised/Unsupervised Learning  
4. Feature Engineering, Deep Learning Fundamentals, PyTorch  
5. CNNs, NLP, Transformers, LLMs & GenAI  
6. MLOps, Deployment & AI Ethics  

## Tech stack

- React 19 + TypeScript
- Vite 8
- React Router 7
- No backend — runs entirely in the browser

## Deploy

Build static assets:

```bash
npm run build
```

Output is in `dist/`. Deploy to Netlify, Vercel, GitHub Pages, or any static host. A `_redirects` file is included for SPA routing on Netlify.
