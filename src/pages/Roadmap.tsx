import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { buildRoadmap, getRoadmapSummary, ROADMAP_PHASE_META } from '../utils/roadmap';
import type { TopicStatus } from '../utils/roadmap';

const STATUS_LABELS: Record<TopicStatus, string> = {
  completed: '✓ Done',
  'in-progress': '◐ In Progress',
  next: '→ Up Next',
  available: '○ Ready',
  upcoming: '◌ Later',
};

const STATUS_CLASS: Record<TopicStatus, string> = {
  completed: 'roadmap-status-done',
  'in-progress': 'roadmap-status-progress',
  next: 'roadmap-status-next',
  available: 'roadmap-status-ready',
  upcoming: 'roadmap-status-later',
};

export function Roadmap() {
  const { progress } = useProgress();
  const summary = useMemo(() => getRoadmapSummary(progress), [progress]);
  const phases = useMemo(() => buildRoadmap(progress), [progress]);
  const [expandedModules, setExpandedModules] = useState<Set<string>>(
    () => new Set(phases.flatMap((p) => p.modules.map((m) => m.module.id)))
  );

  const toggleModule = (id: string) => {
    setExpandedModules((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="page roadmap-page">
      <header className="page-header">
        <h1>Learning Roadmap</h1>
        <p>
          Your complete path from Python basics to production AI. Study topics in order —
          each phase builds on the previous one.
        </p>
      </header>

      <div className="roadmap-summary-card">
        <div className="roadmap-summary-stats">
          <div>
            <span className="roadmap-stat-value">{summary.overallPct}%</span>
            <span className="roadmap-stat-label">Overall Progress</span>
          </div>
          <div>
            <span className="roadmap-stat-value">{summary.completedTopics}/{summary.totalTopics}</span>
            <span className="roadmap-stat-label">Topics Completed</span>
          </div>
          <div>
            <span className="roadmap-stat-value">{summary.currentPhase.icon} Phase {summary.currentPhase.order}</span>
            <span className="roadmap-stat-label">{summary.currentPhase.title.replace(/^Phase \d+: /, '')}</span>
          </div>
        </div>
        <div className="progress-bar">
          <div className="progress-fill study" style={{ width: `${summary.overallPct}%` }} />
        </div>
        {summary.nextTopic && (
          <div className="roadmap-next-up">
            <span className="continue-label">Study Next</span>
            <Link to={`/learn/${summary.nextTopic.id}`} className="roadmap-next-link">
              <strong>{summary.nextTopic.title}</strong>
              <span>{summary.nextTopic.module} · ~{summary.nextTopic.estimatedMinutes} min</span>
            </Link>
            <Link to={`/learn/${summary.nextTopic.id}`} className="btn btn-primary btn-sm">Start →</Link>
          </div>
        )}
      </div>

      <div className="roadmap-legend">
        {Object.entries(STATUS_LABELS).map(([key, label]) => (
          <span key={key} className={`roadmap-legend-item ${STATUS_CLASS[key as TopicStatus]}`}>{label}</span>
        ))}
      </div>

      <div className="roadmap-phases">
        {phases.map((phase) => {
          const meta = ROADMAP_PHASE_META[phase.id];
          return (
            <section key={phase.id} className="roadmap-phase">
              <div className="roadmap-phase-header">
                <div className="roadmap-phase-title">
                  <span className="roadmap-phase-icon">{phase.icon}</span>
                  <div>
                    <h2>{phase.title}</h2>
                    <p>{phase.subtitle}</p>
                    {meta.after && phase.progressPct === 0 && phase.order > 1 && (
                      <p className="roadmap-phase-hint">Recommended after: {meta.after}</p>
                    )}
                  </div>
                </div>
                <div className="roadmap-phase-progress">
                  <span>{phase.completedCount}/{phase.totalTopics}</span>
                  <div className="progress-bar sm">
                    <div className="progress-fill study" style={{ width: `${phase.progressPct}%` }} />
                  </div>
                  <span>{phase.progressPct}%</span>
                </div>
              </div>

              <div className="roadmap-modules">
                {phase.modules.map(({ module, topics, completedCount, progressPct }) => {
                  const isOpen = expandedModules.has(module.id);
                  return (
                    <div key={module.id} className="roadmap-module">
                      <button
                        type="button"
                        className="roadmap-module-header"
                        onClick={() => toggleModule(module.id)}
                        aria-expanded={isOpen}
                      >
                        <span className="roadmap-module-toggle">{isOpen ? '▼' : '▶'}</span>
                        <div className="roadmap-module-info">
                          <h3>{module.name}</h3>
                          <p>{module.description}</p>
                        </div>
                        <div className="roadmap-module-meta">
                          <span>{completedCount}/{topics.length} topics</span>
                          <div className="progress-bar sm">
                            <div className="progress-fill study" style={{ width: `${progressPct}%` }} />
                          </div>
                        </div>
                      </button>

                      {isOpen && (
                        <ol className="roadmap-topic-list">
                          {topics.map(({ topic, globalIndex, status, progressPct: tp }) => (
                            <li
                              key={topic.id}
                              className={`roadmap-topic-item ${STATUS_CLASS[status]} ${status === 'next' ? 'roadmap-topic-current' : ''}`}
                            >
                              <span className="roadmap-topic-num">{globalIndex + 1}</span>
                              <Link to={`/learn/${topic.id}`} className="roadmap-topic-link">
                                <span className="roadmap-topic-title">{topic.title}</span>
                                <span className="roadmap-topic-sub">
                                  <span className={`badge ${topic.level}`}>{topic.level}</span>
                                  ~{topic.estimatedMinutes} min · {topic.sections.length} sections
                                  {tp > 0 && tp < 100 && ` · ${tp}%`}
                                </span>
                              </Link>
                              <span className={`roadmap-topic-status ${STATUS_CLASS[status]}`}>
                                {STATUS_LABELS[status]}
                              </span>
                            </li>
                          ))}
                        </ol>
                      )}
                    </div>
                  );
                })}
              </div>

              {phase.order < 6 && (
                <div className="roadmap-phase-arrow">
                  <span>↓ Then continue to Phase {phase.order + 1}</span>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
