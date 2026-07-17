import { Link } from 'react-router-dom';
import { modules, allTopics } from '../data/curriculum';
import { useProgress } from '../context/ProgressContext';
import { getRoadmapSummary } from '../utils/roadmap';

function getTopicOfDay(): (typeof allTopics)[0] {
  const dayIndex = Math.floor(Date.now() / 86400000) % allTopics.length;
  return allTopics[dayIndex];
}

const TRACK_META = {
  python: { icon: '🐍', label: 'Python', color: '#3776ab' },
  data: { icon: '📊', label: 'Data Science', color: '#0891b2' },
  ml: { icon: '🤖', label: 'Machine Learning', color: '#6366f1' },
  dl: { icon: '🧠', label: 'Deep Learning', color: '#7c3aed' },
  ai: { icon: '✨', label: 'AI & GenAI', color: '#db2777' },
} as const;

export function Home() {
  const { getOverallStudyProgress, getLastVisitedTopic, progress, getModuleProgress } = useProgress();
  const lastTopic = getLastVisitedTopic();
  const overall = getOverallStudyProgress();
  const topicOfDay = getTopicOfDay();
  const studyHours = Math.floor(progress.totalStudySeconds / 3600);
  const studyMins = Math.floor((progress.totalStudySeconds % 3600) / 60);

  const trackStats = (['python', 'data', 'ml', 'dl', 'ai'] as const).map((track) => {
    const topics = allTopics.filter((t) => t.track === track);
    const done = topics.filter((t) => progress.topics[t.id]?.completed).length;
    return { track, total: topics.length, done, pct: topics.length ? Math.round((done / topics.length) * 100) : 0 };
  });

  const totalMinutes = allTopics.reduce((s, t) => s + t.estimatedMinutes, 0);
  const roadmap = getRoadmapSummary(progress);

  return (
    <div className="page home-page">
      <header className="page-header">
        <h1>Master Python, ML, DL & AI</h1>
        <p>
          The complete learning path from your first Python print statement to building LLMs and deploying models in production.
          Theory, code, exercises — everything in one place.
        </p>
        {progress.streakDays > 0 && (
          <div className="header-streak">
            <span>🔥</span>
            <span>{progress.streakDays} day learning streak — keep it going!</span>
          </div>
        )}
      </header>

      {lastTopic && (
        <div className="continue-banner">
          <div className="continue-content">
            <span className="continue-label">Continue Learning</span>
            <h2>{lastTopic.title}</h2>
            <p>{lastTopic.module} · {lastTopic.progressPct}% complete</p>
            <div className="progress-bar sm">
              <div className="progress-fill study" style={{ width: `${lastTopic.progressPct}%` }} />
            </div>
          </div>
          <Link to={`/learn/${lastTopic.topicId}`} className="btn btn-primary">
            Resume →
          </Link>
        </div>
      )}

      <Link to="/roadmap" className="roadmap-teaser">
        <div>
          <span className="continue-label">Your Learning Roadmap</span>
          <h2>{roadmap.overallPct}% complete · Phase {roadmap.currentPhase.order} of 5</h2>
          <p>
            {roadmap.nextTopic
              ? `Next up: ${roadmap.nextTopic.title}`
              : 'All topics completed — review or revisit any lesson!'}
          </p>
          <div className="progress-bar sm">
            <div className="progress-fill study" style={{ width: `${roadmap.overallPct}%` }} />
          </div>
        </div>
        <span className="btn btn-primary">View Roadmap →</span>
      </Link>

      <div className="topic-of-day">
        <span className="cod-label">Topic of the Day</span>
        <div className="cod-body">
          <Link to={`/learn/${topicOfDay.id}`} className="cod-name">{topicOfDay.title}</Link>
          <p>{topicOfDay.description}</p>
          <div className="cod-meta">
            <span className={`track-badge ${topicOfDay.track}`}>{topicOfDay.track}</span>
            <span className={`badge ${topicOfDay.level}`}>{topicOfDay.level}</span>
            <span>~{topicOfDay.estimatedMinutes} min</span>
          </div>
        </div>
        <Link to={`/learn/${topicOfDay.id}`} className="btn btn-primary">Start →</Link>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-value">{allTopics.length}</span>
          <span className="stat-label">Topics</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{modules.length}</span>
          <span className="stat-label">Modules</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{Math.round(totalMinutes / 60)}h+</span>
          <span className="stat-label">Content</span>
        </div>
        <div className="stat-card accent">
          <span className="stat-value">{overall}%</span>
          <span className="stat-label">Your Progress</span>
        </div>
        {(studyHours > 0 || studyMins > 0) && (
          <div className="stat-card">
            <span className="stat-value">{studyHours > 0 ? `${studyHours}h ${studyMins}m` : `${studyMins}m`}</span>
            <span className="stat-label">Time Studied</span>
          </div>
        )}
      </div>

      <section className="tracks-section">
        <h2>Learning Tracks</h2>
        <div className="tracks-grid">
          {trackStats.map(({ track, total, done, pct }) => {
            const meta = TRACK_META[track];
            return (
              <Link key={track} to={`/learn?track=${track}`} className="track-card">
                <div className="track-card-header">
                  <span className="track-icon">{meta.icon}</span>
                  <div>
                    <h3>{meta.label}</h3>
                    <p>{done}/{total} topics · {pct}% done</p>
                  </div>
                </div>
                <div className="progress-bar sm">
                  <div className="progress-fill study" style={{ width: `${pct}%` }} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="modules-preview">
        <div className="section-header-row">
          <h2>All Modules</h2>
          <Link to="/learn" className="btn btn-ghost">View all →</Link>
        </div>
        <div className="module-preview-grid">
          {modules.map((mod) => {
            const pct = getModuleProgress(mod.name);
            return (
              <Link key={mod.id} to={`/learn?module=${mod.id}`} className="module-preview-card">
                <span className={`track-badge ${mod.track}`}>{mod.track}</span>
                <h3>{mod.name}</h3>
                <p>{mod.description}</p>
                <div className="topic-meta">
                  <span>{mod.topics.length} topics</span>
                  <span>{pct}% done</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="features-section">
        <h2>Why DL Master?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">📖</span>
            <h3>Theory + Practice</h3>
            <p>Every topic has explanations, runnable Python code, expected output, and hands-on exercises.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🗺️</span>
            <h3>Structured Path</h3>
            <p>20 modules from Python basics through transformers, LLMs, MLOps, and AI ethics.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📈</span>
            <h3>Track Progress</h3>
            <p>Section-by-section completion, streaks, bookmarks, and personal notes — all saved locally.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🔗</span>
            <h3>University References</h3>
            <p>154 curated links to Stanford CS229, MIT 6.S191, Oxford, arXiv papers, and official docs on every topic.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📖</span>
            <h3>ML/DL Glossary</h3>
            <p>39 essential terms defined — from backpropagation to RAG — with track tags for quick lookup.</p>
          </div>
        </div>
        <div className="home-quick-links">
          <Link to="/references" className="btn btn-secondary">Browse References →</Link>
          <Link to="/glossary" className="btn btn-ghost">Open Glossary →</Link>
        </div>
      </section>
    </div>
  );
}
