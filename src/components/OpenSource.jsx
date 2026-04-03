export default function OpenSource({ projects }) {
  return (
    <section id="opensource" className="section">
      <div className="page-wrapper">
        <h2 className="section-title reveal">Open Source</h2>

        {projects.map((project) => (
          <div
            key={project.project}
            className="oss-card comic-panel reveal reveal-delay-1"
          >
            <div className="oss-header">
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="oss-project-link">
                <h3 className="oss-project-name">{project.project}</h3>
                <span className="oss-ext-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </span>
              </a>
            </div>

            <p className="oss-desc">{project.description}</p>

            <div className="pr-list">
              {project.contributions.map((c) => (
                <div key={c.pr} className="pr-row">
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="pr-badge">PR #{c.pr}</a>
                  <span className="pr-title">{c.title}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
