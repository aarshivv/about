export default function About({ about, education }) {
  const startYear = 2022;
  const years = new Date().getFullYear() - startYear;

  return (
    <section id="about" className="section">
      <div className="page-wrapper">
        <h2 className="section-title reveal">About</h2>
        <div className="about-card speech-bubble reveal reveal-delay-1">
          <p className="about-text">{about}</p>

          {education && (
            <div className="about-degree">
              <GraduationIcon />
              <span>{education.degree}</span>
            </div>
          )}

          <div className="about-stats">
            <div className="about-stat">
              <span className="stat-number">{years}+</span>
              <span className="stat-label">years exp</span>
            </div>
            <div className="about-stat">
              <span className="stat-number">3</span>
              <span className="stat-label">OSS PRs</span>
            </div>
            <div className="about-stat">
              <span className="stat-number">8+</span>
              <span className="stat-label">technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GraduationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
    </svg>
  );
}
