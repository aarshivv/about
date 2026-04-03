import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const NAV_ITEMS = [
  ['#about', 'About'],
  ['#experience', 'Experience'],
  ['#skills', 'Skills'],
  ['#opensource', 'Open Source'],
];

export default function Navbar({ personal }) {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setDrawerOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#hero" className="nav-logo" onClick={handleNavClick}>HK</a>

        <div className="nav-links">
          {NAV_ITEMS.map(([href, label]) => (
            <a key={href} href={href} className="nav-link" onClick={handleNavClick}>
              {label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="icon-btn theme-toggle" onClick={toggle} aria-label="Toggle theme">
            {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
          </button>
          <button
            className="icon-btn nav-menu-btn"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`nav-backdrop${drawerOpen ? ' open' : ''}`}
        onClick={() => setDrawerOpen(false)}
      />
      <div className={`nav-drawer${drawerOpen ? ' open' : ''}`}>
        <div className="drawer-header">
          <button className="icon-btn" onClick={() => setDrawerOpen(false)} aria-label="Close menu">
            <CloseIcon />
          </button>
        </div>
        <div className="drawer-links">
          {NAV_ITEMS.map(([href, label]) => (
            <a key={href} href={href} className="drawer-link" onClick={handleNavClick}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
