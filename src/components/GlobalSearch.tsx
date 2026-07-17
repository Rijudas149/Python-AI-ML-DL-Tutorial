import { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { allTopics, searchTopics } from '../data/curriculum';
import { GLOSSARY } from '../data/glossary';

interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  path: string;
  track: string;
  kind: 'topic' | 'glossary';
  score: number;
}

function buildIndex(): SearchResult[] {
  const topics: SearchResult[] = allTopics.map((t) => ({
    id: t.id,
    title: t.title,
    subtitle: `${t.module} · ${t.level}`,
    path: `/learn/${t.id}`,
    track: t.track,
    kind: 'topic',
    score: 0,
  }));

  const glossary: SearchResult[] = GLOSSARY.map((g) => ({
    id: `glossary-${g.term}`,
    title: g.term,
    subtitle: g.definition.slice(0, 72) + (g.definition.length > 72 ? '…' : ''),
    path: `/glossary?q=${encodeURIComponent(g.term)}`,
    track: g.track,
    kind: 'glossary',
    score: 0,
  }));

  return [...topics, ...glossary];
}

const SEARCH_INDEX = buildIndex();

function rankResults(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) {
    return SEARCH_INDEX.filter((r) => r.kind === 'topic').slice(0, 12);
  }

  const topicMatches = searchTopics(q).map((t) => ({
    id: t.id,
    title: t.title,
    subtitle: `${t.module} · ${t.level}`,
    path: `/learn/${t.id}`,
    track: t.track,
    kind: 'topic' as const,
    score: 0,
  }));

  const glossaryMatches = GLOSSARY.filter(
    (g) => g.term.toLowerCase().includes(q) || g.definition.toLowerCase().includes(q),
  ).map((g) => ({
    id: `glossary-${g.term}`,
    title: g.term,
    subtitle: g.definition.slice(0, 72) + (g.definition.length > 72 ? '…' : ''),
    path: `/glossary?q=${encodeURIComponent(g.term)}`,
    track: g.track,
    kind: 'glossary' as const,
    score: 0,
  }));

  const score = (r: SearchResult): number => {
    const title = r.title.toLowerCase();
    const sub = r.subtitle.toLowerCase();
    if (title === q) return 100;
    if (title.startsWith(q)) return 80;
    if (title.includes(q)) return 60;
    if (sub.includes(q)) return 40;
    return 20;
  };

  const merged = new Map<string, SearchResult>();
  for (const r of [...topicMatches, ...glossaryMatches]) {
    const key = `${r.kind}:${r.id}`;
    const existing = merged.get(key);
    const scored = { ...r, score: score(r) };
    if (!existing || scored.score > existing.score) merged.set(key, scored);
  }

  return [...merged.values()]
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, 20);
}

interface GlobalSearchProps {
  open: boolean;
  onClose: () => void;
}

export function GlobalSearch({ open, onClose }: GlobalSearchProps) {
  const [query, setQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);
  const navigate = useNavigate();

  const results = useMemo(() => rankResults(query), [query]);

  const goTo = useCallback(
    (path: string) => {
      navigate(path);
      onClose();
      setQuery('');
    },
    [navigate, onClose],
  );

  useEffect(() => {
    if (!open) return;
    setActiveIdx(0);
    const input = document.getElementById('global-search-input') as HTMLInputElement | null;
    input?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIdx((i) => Math.min(i + 1, results.length - 1));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIdx((i) => Math.max(i - 1, 0));
      }
      if (e.key === 'Enter' && results[activeIdx]) {
        goTo(results[activeIdx].path);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, results, activeIdx, goTo, onClose]);

  if (!open) return null;

  const trackIcon: Record<string, string> = {
    python: '🐍',
    math: '📐',
    data: '📊',
    ml: '🤖',
    dl: '🧠',
    ai: '✨',
  };

  return (
    <div className="search-overlay" onClick={onClose} role="presentation">
      <div className="search-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-label="Search">
        <div className="search-input-wrap">
          <span className="search-icon">🔍</span>
          <input
            id="global-search-input"
            type="search"
            className="search-input"
            placeholder="Search topics, modules, glossary terms..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIdx(0);
            }}
            autoComplete="off"
          />
          <kbd className="search-kbd">Esc</kbd>
        </div>

        <ul className="search-results">
          {results.length === 0 && (
            <li className="search-empty">No results for &ldquo;{query}&rdquo;</li>
          )}
          {results.map((r, i) => (
            <li key={r.id}>
              <button
                type="button"
                className={`search-result ${i === activeIdx ? 'active' : ''}`}
                onClick={() => goTo(r.path)}
                onMouseEnter={() => setActiveIdx(i)}
              >
                <span className="search-result-icon">
                  {r.kind === 'glossary' ? '📖' : trackIcon[r.track] ?? '📚'}
                </span>
                <span className="search-result-body">
                  <span className="search-result-title">{r.title}</span>
                  <span className="search-result-sub">{r.subtitle}</span>
                </span>
                <span className="search-result-type">{r.kind === 'glossary' ? 'term' : r.track}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="search-footer">
          <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
          <span><kbd>Enter</kbd> open</span>
          <span><kbd>Ctrl</kbd>+<kbd>K</kbd> toggle</span>
        </div>
      </div>
    </div>
  );
}

export function useGlobalSearch() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return { open, setOpen };
}
