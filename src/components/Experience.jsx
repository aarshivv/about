const CHIP_COLORS = ['chip-red', 'chip-blue', 'chip-green', 'chip-purple', 'chip-yellow'];

function groupByCompany(experience) {
  const groups = [];
  let current = null;

  for (const exp of experience) {
    if (!current || current.company !== exp.company) {
      current = { company: exp.company, roles: [] };
      groups.push(current);
    }
    current.roles.push(exp);
  }

  return groups;
}

// Collect unique tags across all roles in a company
function companyTags(roles) {
  const seen = new Set();
  const tags = [];
  for (const role of roles) {
    for (const tag of role.tags || []) {
      if (!seen.has(tag)) {
        seen.add(tag);
        tags.push(tag);
      }
    }
  }
  return tags;
}

export default function Experience({ experience }) {
  const groups = groupByCompany(experience);

  return (
    <section id="experience" className="section">
      <div className="page-wrapper">
        <h2 className="section-title reveal">Experience</h2>

        {groups.map((group, gi) => (
          <div key={group.company} className="exp-company-group reveal reveal-delay-1">
            <div className="exp-company-card sketch-card sketch-v1">
              {/* Company header */}
              <div className="exp-company-header">
                <h3 className="exp-company">{group.company}</h3>
                <span className="exp-company-tenure">
                  {group.roles[group.roles.length - 1].startDate} — {group.roles[0].endDate}
                </span>
              </div>

              {/* Roles timeline inside the card */}
              <div className="exp-roles">
                {group.roles.map((role, ri) => (
                  <div key={role.id} className="exp-role-item">
                    <div className={`exp-role-dot${role.endDate === 'present' ? ' active' : ''}`} />

                    <div className="exp-role-content">
                      <div className="exp-role-header">
                        <div>
                          <h4 className="exp-role-title">{role.role}</h4>
                          <span className="exp-type">{role.type}</span>
                        </div>
                        <span className="exp-date">{role.startDate} — {role.endDate}</span>
                      </div>

                      <ul className="exp-highlights">
                        {role.highlights.map((h, j) => (
                          <li key={j} className="exp-highlight">{h}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Combined tags for the company */}
              {companyTags(group.roles).length > 0 && (
                <div className="exp-tags">
                  {companyTags(group.roles).map((tag, j) => (
                    <span key={tag} className={`sketch-chip ${CHIP_COLORS[j % CHIP_COLORS.length]}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
