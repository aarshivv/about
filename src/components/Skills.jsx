const VARIANTS = ['sketch-v1', 'sketch-v2', 'sketch-v3', 'sketch-v4'];
const CHIP_COLORS = ['chip-red', 'chip-blue', 'chip-green', 'chip-purple', 'chip-yellow'];

const ICONS = {
  code: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  web: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  database: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  tools: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
};

export default function Skills({ skills }) {
  return (
    <section id="skills" className="section">
      <div className="page-wrapper">
        <h2 className="section-title reveal">Skills</h2>

        <div className="skills-grid">
          {skills.categories.map((cat, i) => (
            <div
              key={cat.name}
              className={`skill-card sketch-card ${VARIANTS[i % 4]} reveal reveal-delay-${Math.min(i + 1, 4)}`}
              style={{ transform: `rotate(${(i % 2 === 0 ? -0.6 : 0.5) + i * 0.1}deg)` }}
            >
              <div className="skill-card-header">
                <span className="skill-icon">{ICONS[cat.icon]}</span>
                <h3 className="skill-card-title">{cat.name}</h3>
              </div>
              <div className="skill-chips">
                {cat.items.map((item, j) => (
                  <span key={item} className={`sketch-chip ${CHIP_COLORS[j % CHIP_COLORS.length]}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
