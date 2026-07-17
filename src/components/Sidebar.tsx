import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useProgress } from '../context/ProgressContext';
import { modules, allTopics } from '../data/curriculum';

const navItems = [
  { path: '/', label: 'Home', icon: '🏠' },
  { path: '/roadmap', label: 'Roadmap', icon: '🗺️' },
  { path: '/learn', label: 'Learn', icon: '📚' },
  { path: '/references', label: 'References', icon: '🔗' },
  { path: '/glossary', label: 'Glossary', icon: '📖' },
  { path: '/bookmarks', label: 'Bookmarks', icon: '⭐' },
];

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
  onSearchOpen?: () => void;
}

export function Sidebar({ open = false, onClose, onSearchOpen }: SidebarProps) {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { getOverallStudyProgress, progress, getBookmarkedTopics } = useProgress();
  const bookmarkCount = getBookmarkedTopics().length;

  return (
    <aside className={`sidebar ${open ? 'open' : ''}`}>
      <div className="sidebar-brand">
        <div className="brand-icon">🧠</div>
        <div>
          <h1>Data Science Master</h1>
          <p>Python · Math · ML · DL · AI</p>
        </div>
        <button type="button" className="sidebar-close-btn" onClick={onClose} aria-label="Close menu">
          ✕
        </button>
      </div>

      <button type="button" className="search-trigger" onClick={onSearchOpen}>
        <span>Search topics...</span>
        <kbd>Ctrl K</kbd>
      </button>

      {progress.streakDays > 0 && (
        <div className="streak-badge">
          <span className="streak-flame">🔥</span>
          <span>{progress.streakDays} day streak</span>
        </div>
      )}

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path)) ? 'active' : ''}`}
            onClick={onClose}
          >
            <span className="nav-icon">{item.icon}</span>
            {item.label}
            {item.path === '/bookmarks' && bookmarkCount > 0 && (
              <span className="nav-badge">{bookmarkCount}</span>
            )}
          </Link>
        ))}
      </nav>

      <div className="sidebar-tracks">
        <p className="sidebar-tracks-label">Learning Tracks</p>
        {(['python', 'math', 'data', 'ml', 'dl', 'ai'] as const).map((track) => {
          const count = allTopics.filter((t) => t.track === track).length;
          const icons = { python: '🐍', math: '📐', data: '📊', ml: '🤖', dl: '🧠', ai: '✨' };
          return (
            <Link
              key={track}
              to={`/learn?track=${track}`}
              className="track-link"
              onClick={onClose}
            >
              <span>{icons[track]}</span>
              <span className="track-name">{track.toUpperCase()}</span>
              <span className="track-count">{count}</span>
            </Link>
          );
        })}
      </div>

      <div className="sidebar-progress">
        <div className="progress-mini">
          <span>Overall</span>
          <div className="progress-bar">
            <div className="progress-fill study" style={{ width: `${getOverallStudyProgress()}%` }} />
          </div>
          <span className="progress-pct">{getOverallStudyProgress()}%</span>
        </div>
        <p className="sidebar-stats">
          {allTopics.length} topics · {modules.length} modules
        </p>
      </div>

      <button type="button" className="theme-toggle" onClick={toggleTheme}>
        {theme === 'dark' ? '☀️ Light Mode' : '🌙 Night Mode'}
      </button>
    </aside>
  );
}
