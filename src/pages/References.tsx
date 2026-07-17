import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { allReferences, referencesBySource } from '../data/references';

const TYPE_LABELS = {
  course: 'Courses',
  paper: 'Research Papers',
  book: 'Books',
  documentation: 'Documentation',
  video: 'Videos',
} as const;

const FEATURED_SOURCES = [
  'Stanford',
  'MIT',
  'Oxford',
  'Berkeley',
  'CMU',
  'arXiv',
  'Python.org',
];

export function References() {
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [sourceFilter, setSourceFilter] = useState<string>('all');

  const sources = useMemo(() => Object.keys(referencesBySource).sort(), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allReferences.filter((ref) => {
      if (typeFilter !== 'all' && ref.type !== typeFilter) return false;
      if (sourceFilter !== 'all' && ref.source !== sourceFilter) return false;
      if (!q) return true;
      return (
        ref.title.toLowerCase().includes(q) ||
        ref.source.toLowerCase().includes(q) ||
        ref.description.toLowerCase().includes(q)
      );
    });
  }, [query, typeFilter, sourceFilter]);

  const featured = useMemo(
    () => allReferences.filter((r) => FEATURED_SOURCES.some((s) => r.source.includes(s))).slice(0, 8),
    []
  );

  return (
    <div className="page references-page">
      <header className="page-header">
        <h1>Further Reading & References</h1>
        <p>
          {allReferences.length} curated resources from Stanford CS229/CS231n/CS224N, MIT 6.S191, Oxford,
          Berkeley, arXiv papers, and official documentation — linked from every lesson.
        </p>
      </header>

      <section className="featured-refs">
        <h2>Featured Institutions & Papers</h2>
        <div className="featured-ref-grid">
          {featured.map((ref) => (
            <a key={ref.id} href={ref.url} target="_blank" rel="noopener noreferrer" className="featured-ref-card">
              <span className="reference-source-badge">{ref.source}</span>
              <h3>{ref.title}</h3>
              <p>{ref.description}</p>
            </a>
          ))}
        </div>
      </section>

      <div className="learn-toolbar">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="search"
            placeholder="Search papers, courses, books..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="filters">
          <label>
            Type:
            <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
              <option value="all">All Types</option>
              {Object.entries(TYPE_LABELS).map(([k, v]) => (
                <option key={k} value={k}>{v}</option>
              ))}
            </select>
          </label>
          <label>
            Source:
            <select value={sourceFilter} onChange={(e) => setSourceFilter(e.target.value)}>
              <option value="all">All Sources</option>
              {sources.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <p className="search-results-hint">
        Showing <strong>{filtered.length}</strong> of {allReferences.length} resources
      </p>

      <div className="reference-browse-grid">
        {filtered.map((ref) => (
          <a key={ref.id} href={ref.url} target="_blank" rel="noopener noreferrer" className="reference-browse-card">
            <div className="reference-browse-top">
              <span className="reference-source-badge">{ref.source}</span>
              <span className={`track-badge ${ref.type === 'course' ? 'ml' : 'data'}`}>{ref.type}</span>
            </div>
            <h3>{ref.title}</h3>
            <p>{ref.description}</p>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="empty-state">
          <p>No resources match your filters.</p>
        </div>
      )}

      <div className="learn-summary">
        <p>Resources are also shown at the bottom of each <Link to="/learn">lesson topic</Link>.</p>
      </div>
    </div>
  );
}
