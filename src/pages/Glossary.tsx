import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { GLOSSARY } from '../data/glossary';

export function Glossary() {
  const [query, setQuery] = useState('');
  const [trackFilter, setTrackFilter] = useState<string>('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GLOSSARY.filter((entry) => {
      if (trackFilter !== 'all' && entry.track !== trackFilter) return false;
      if (!q) return true;
      return (
        entry.term.toLowerCase().includes(q) ||
        entry.definition.toLowerCase().includes(q)
      );
    });
  }, [query, trackFilter]);

  const grouped = useMemo(() => {
    const groups: Record<string, typeof filtered> = {};
    for (const entry of filtered) {
      const letter = entry.term[0].toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(entry);
    }
    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  return (
    <div className="page glossary-page">
      <header className="page-header">
        <h1>ML / DL / AI Glossary</h1>
        <p>
          Quick definitions for {GLOSSARY.length} essential terms across Python, machine learning,
          deep learning, and generative AI.
        </p>
      </header>

      <div className="learn-toolbar">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="search"
            placeholder="Search terms..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="track-filter-bar">
          {(['all', 'python', 'math', 'data', 'ml', 'dl', 'ai'] as const).map((t) => (
            <button
              key={t}
              type="button"
              className={`track-pill ${trackFilter === t ? 'active' : ''}`}
              onClick={() => setTrackFilter(t)}
            >
              {t === 'all' ? 'All' : t.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {grouped.map(([letter, entries]) => (
        <section key={letter} className="glossary-section">
          <h2 className="glossary-letter">{letter}</h2>
          <dl className="glossary-list">
            {entries.map((entry) => (
              <div key={entry.term} className="glossary-entry">
                <dt>
                  {entry.term}
                  <span className={`track-badge ${entry.track}`}>{entry.track}</span>
                </dt>
                <dd>{entry.definition}</dd>
              </div>
            ))}
          </dl>
        </section>
      ))}

      {filtered.length === 0 && (
        <div className="empty-state"><p>No terms match your search.</p></div>
      )}

      <div className="learn-summary">
        <p>Learn concepts in depth in the <Link to="/learn">Learn section</Link> or explore <Link to="/references">references</Link>.</p>
      </div>
    </div>
  );
}
