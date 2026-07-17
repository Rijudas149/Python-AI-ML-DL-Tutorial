import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { GlobalSearch, useGlobalSearch } from './GlobalSearch';

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { open: searchOpen, setOpen: setSearchOpen } = useGlobalSearch();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <div className="app-layout">
      <header className="mobile-topbar">
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
        <span className="mobile-topbar-title">Data Science Master</span>
      </header>

      <div
        className={`sidebar-overlay ${menuOpen ? 'visible' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />

      <Sidebar
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onSearchOpen={() => setSearchOpen(true)}
      />

      <GlobalSearch open={searchOpen} onClose={() => setSearchOpen(false)} />

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
