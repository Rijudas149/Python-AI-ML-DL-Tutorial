import type { Reference } from '../types';

const TYPE_ICONS: Record<Reference['type'], string> = {
  course: '🎓',
  paper: '📄',
  book: '📚',
  documentation: '📖',
  video: '🎬',
};

interface ReferenceListProps {
  references: Reference[];
  title?: string;
  compact?: boolean;
}

export function ReferenceList({ references, title = 'Further Reading', compact = false }: ReferenceListProps) {
  if (!references.length) return null;

  return (
    <section className={`reference-panel ${compact ? 'reference-panel-compact' : ''}`}>
      <div className="lesson-panel-label">
        <span className="lesson-panel-icon">🔗</span>
        {title}
      </div>
      <p className="reference-panel-hint">
        Curated resources from Stanford, MIT, Oxford, arXiv, and official documentation.
      </p>
      <ul className="reference-list">
        {references.map((ref) => (
          <li key={ref.id} className="reference-item">
            <a href={ref.url} target="_blank" rel="noopener noreferrer" className="reference-link">
              <span className="reference-type-icon">{TYPE_ICONS[ref.type]}</span>
              <span className="reference-body">
                <span className="reference-title">{ref.title}</span>
                <span className="reference-meta">
                  <span className="reference-source">{ref.source}</span>
                  <span className="reference-type">{ref.type}</span>
                </span>
                {!compact && ref.description && (
                  <span className="reference-desc">{ref.description}</span>
                )}
              </span>
              <span className="reference-external" aria-hidden>↗</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ReferenceBadge({ source }: { source: string }) {
  return <span className="reference-source-badge">{source}</span>;
}
