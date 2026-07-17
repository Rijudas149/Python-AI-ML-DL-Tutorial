import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { modules, allTopics, searchTopics } from '../data/curriculum';
import { warmTopic } from '../utils/prefetchLesson';
import { useProgress } from '../context/ProgressContext';
import type { Topic } from '../types';

const TRACKS: { id: Topic['track']; label: string; icon: string }[] = [
  { id: 'python', label: 'Python', icon: '🐍' },
  { id: 'math', label: 'Math', icon: '📐' },
  { id: 'data', label: 'Data', icon: '📊' },
  { id: 'ml', label: 'ML', icon: '🤖' },
  { id: 'dl', label: 'DL', icon: '🧠' },
  { id: 'ai', label: 'AI', icon: '✨' },
];

export function Learn() {
  const [searchParams] = useSearchParams();
  const moduleFilter = searchParams.get('module');
  const trackFilter = searchParams.get('track');
  const [levelFilter, setLevelFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { progress, getTopicProgress } = useProgress();

  const searchedIds = new Set(
    searchQuery.trim() ? searchTopics(searchQuery).map((t) => t.id) : allTopics.map((t) => t.id)
  );

  let filteredModules = modules;
  if (moduleFilter) {
    filteredModules = modules.filter((m) => m.id === moduleFilter);
  } else if (trackFilter) {
    filteredModules = modules.filter((m) => m.track === trackFilter);
  }

  const totalVisible = filteredModules.reduce((count, mod) => {
    const topics = mod.topics.filter(
      (t) =>
        searchedIds.has(t.id) &&
        (levelFilter === 'all' || t.level === levelFilter)
    );
    return count + topics.length;
  }, 0);

  return (
    <div className="page learn-page">
      <header className="page-header">
        <h1>Learn Python · Math · ML · DL · AI</h1>
        <p>
          Every topic explained with theory, formulas, diagrams, Python code, expected output, and exercises.
          Follow the <Link to="/roadmap">learning roadmap</Link> for the recommended study order.
        </p>
      </header>

      <div className="track-filter-bar">
        <Link to="/learn" className={`track-pill ${!trackFilter && !moduleFilter ? 'active' : ''}`}>
          All Tracks
        </Link>
        {TRACKS.map((t) => (
          <Link
            key={t.id}
            to={`/learn?track=${t.id}`}
            className={`track-pill ${trackFilter === t.id ? 'active' : ''}`}
          >
            {t.icon} {t.label}
          </Link>
        ))}
      </div>

      <div className="learn-toolbar">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="search"
            placeholder="Search topics, modules, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search topics"
          />
          {searchQuery && (
            <button type="button" className="search-clear" onClick={() => setSearchQuery('')} aria-label="Clear search">
              ✕
            </button>
          )}
        </div>

        <div className="filters">
          <label>
            Level:
            <select value={levelFilter} onChange={(e) => setLevelFilter(e.target.value)}>
              <option value="all">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="expert">Expert</option>
            </select>
          </label>
        </div>
      </div>

      {searchQuery && (
        <p className="search-results-hint">
          Found <strong>{totalVisible}</strong> topic{totalVisible !== 1 ? 's' : ''} matching &ldquo;{searchQuery}&rdquo;
        </p>
      )}

      {totalVisible === 0 && (
        <div className="empty-state">
          <p>No topics match your filters. Try &ldquo;numpy&rdquo;, &ldquo;transformer&rdquo;, or &ldquo;gradient descent&rdquo;.</p>
        </div>
      )}

      {filteredModules.map((mod) => {
        const topics = mod.topics.filter(
          (t) =>
            searchedIds.has(t.id) &&
            (levelFilter === 'all' || t.level === levelFilter)
        );
        if (topics.length === 0) return null;

        const completed = topics.filter((t) => progress.topics[t.id]?.completed).length;

        return (
          <section key={mod.id} className="module-section">
            <div className="module-section-header">
              <div>
                <span className={`track-badge ${mod.track}`}>{mod.track}</span>
                <h2>{mod.name}</h2>
                <p className="module-desc">{mod.description}</p>
              </div>
              <span className="module-meta">{completed}/{topics.length} completed</span>
            </div>
            <div className="topic-list">
              {topics.map((topic) => {
                const tp = getTopicProgress(topic.id);
                const totalSteps = topic.sectionCount + topic.exerciseCount;
                const doneSteps = tp.sectionsCompleted.length + tp.exercisesCompleted.length;
                const sectionPct = totalSteps ? Math.round((doneSteps / totalSteps) * 100) : 0;
                return (
                  <Link key={topic.id} to={`/learn/${topic.id}`} className="topic-card" onMouseEnter={() => warmTopic(topic.id)}>
                    <div className="topic-card-top">
                      <span className={`badge ${topic.level}`}>{topic.level}</span>
                      {tp.completed && <span className="done-badge">✓ Done</span>}
                      {!tp.completed && sectionPct > 0 && (
                        <span className="in-progress-badge">{sectionPct}%</span>
                      )}
                    </div>
                    <h3>{topic.title}</h3>
                    <p>{topic.description}</p>
                    <div className="topic-meta">
                      <span>{topic.sectionCount} sections</span>
                      <span>{topic.exerciseCount} exercises</span>
                      <span>~{topic.estimatedMinutes} min</span>
                    </div>
                    <div className="progress-bar sm">
                      <div className="progress-fill study" style={{ width: `${sectionPct}%` }} />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}

      <div className="learn-summary">
        <p>Total: <strong>{allTopics.length}</strong> topics across <strong>{modules.length}</strong> modules</p>
      </div>
    </div>
  );
}
