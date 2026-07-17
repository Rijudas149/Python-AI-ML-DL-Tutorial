import { Link } from 'react-router-dom';
import { getTopicById } from '../data/curriculum';
import { useProgress } from '../context/ProgressContext';

export function Bookmarks() {
  const { getBookmarkedTopics } = useProgress();
  const ids = getBookmarkedTopics();

  return (
    <div className="page bookmarks-page">
      <header className="page-header">
        <h1>Bookmarked Topics</h1>
        <p>Quick access to topics you saved for later review.</p>
      </header>

      {ids.length === 0 ? (
        <div className="empty-state">
          <p>No bookmarks yet. Click <strong>☆ Save</strong> on any lesson to bookmark it.</p>
          <Link to="/learn" className="btn btn-primary">Browse Topics →</Link>
        </div>
      ) : (
        <div className="bookmark-grid">
          {ids.map((id) => {
            const topic = getTopicById(id);
            if (!topic) return null;
            return (
              <Link key={id} to={`/learn/${id}`} className="topic-card">
                <div className="topic-card-top">
                  <span className={`badge ${topic.level}`}>{topic.level}</span>
                  <span className={`track-badge ${topic.track}`}>{topic.track}</span>
                </div>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <div className="topic-meta">
                  <span>{topic.module}</span>
                  <span>~{topic.estimatedMinutes} min</span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
