import { useState, useEffect } from 'react';

const SUBTITLES = [
  'Backend Developer',
  'Rust Enthusiast',
  'Systems Thinker',
  'Open Source Contributor',
];

export default function Hero({ personal }) {
  const [subIdx, setSubIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setSubIdx(i => (i + 1) % SUBTITLES.length);
        setFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero">
      {/* Background doodles */}
      <div className="hero-doodle hero-doodle-1"><CodeDoodle /></div>
      <div className="hero-doodle hero-doodle-2"><ServerDoodle /></div>
      <div className="hero-doodle hero-doodle-3"><DbDoodle /></div>
      <div className="hero-doodle hero-doodle-4"><RustDoodle /></div>

      <div className="hero-inner">
        <div className="hero-anim hero-anim-0">
          <h1 className="hero-name">
            {personal.name}
            <span className="hero-name-underline" />
          </h1>
        </div>

        <p className={`hero-tagline hero-anim hero-anim-1 ${fade ? 'tagline-visible' : 'tagline-hidden'}`}>
          {SUBTITLES[subIdx]}
        </p>

        <div className="hero-status hero-anim hero-anim-2">
          <span className="status-dot" />
          <span className="status-text">currently building at <strong>314e Corporation</strong></span>
        </div>

        <div className="hero-contacts hero-anim hero-anim-3">
          <a href={`mailto:${personal.contact.email}`} className="hero-contact-link">
            <EmailIcon />
            <span className="hero-contact-label">{personal.contact.email}</span>
          </a>
          <a href={personal.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hero-contact-link">
            <LinkedInIcon />
            <span className="hero-contact-label">LinkedIn</span>
          </a>
          <a href={personal.contact.github} target="_blank" rel="noopener noreferrer" className="hero-contact-link">
            <GithubIcon />
            <span className="hero-contact-label">GitHub</span>
          </a>
        </div>
      </div>

      <div className="scroll-hint">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M7 13l5 5 5-5" /><path d="M7 7l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}

// -- Icons --

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

// -- Background doodles (large, faint) --

function CodeDoodle() {
  return (
    <svg width="160" height="120" viewBox="0 0 160 120" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <polyline points="50,30 20,60 50,90" />
      <polyline points="110,30 140,60 110,90" />
      <line x1="90" y1="20" x2="70" y2="100" />
    </svg>
  );
}

function ServerDoodle() {
  return (
    <svg width="120" height="140" viewBox="0 0 120 140" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <rect x="20" y="10" width="80" height="35" rx="4" />
      <rect x="20" y="55" width="80" height="35" rx="4" />
      <rect x="20" y="100" width="80" height="35" rx="4" />
      <circle cx="40" cy="27" r="4" /><circle cx="40" cy="72" r="4" /><circle cx="40" cy="117" r="4" />
    </svg>
  );
}

function DbDoodle() {
  return (
    <svg width="100" height="120" viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <ellipse cx="50" cy="25" rx="35" ry="15" />
      <path d="M15 25v70c0 8.3 15.7 15 35 15s35-6.7 35-15V25" />
      <path d="M15 55c0 8.3 15.7 15 35 15s35-6.7 35-15" />
    </svg>
  );
}

function RustDoodle() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="50" cy="50" r="30" />
      <circle cx="50" cy="50" r="8" />
      {/* gear teeth */}
      <line x1="50" y1="15" x2="50" y2="25" />
      <line x1="50" y1="75" x2="50" y2="85" />
      <line x1="15" y1="50" x2="25" y2="50" />
      <line x1="75" y1="50" x2="85" y2="50" />
      <line x1="25" y1="25" x2="32" y2="32" />
      <line x1="68" y1="68" x2="75" y2="75" />
      <line x1="75" y1="25" x2="68" y2="32" />
      <line x1="32" y1="68" x2="25" y2="75" />
    </svg>
  );
}
