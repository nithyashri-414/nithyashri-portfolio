import { EXPERIENCE } from '../data/experience.ts'
import { ScrollReveal } from './ScrollReveal.tsx'
import { SectionHeading } from './SectionHeading.tsx'
import { BriefcaseIcon } from './icons/Icons.tsx'

function MiniWindow({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="decor-window experience-mini">
      <div className="decor-window-bar">
        <span />
        <span />
        <span />
        <p>{title}</p>
      </div>
      {lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  )
}

export function Experience({ embedded = false }: { embedded?: boolean }) {
  const body = (
    <>
      {embedded ? (
        <header className="panel-heading">
          <p className="section-kicker">
            <span>04</span> / Work Experience
          </p>
          <h2>Work Experience</h2>
        </header>
      ) : (
        <SectionHeading
          index="04"
          title="Work Experience"
          subtitle="A journey of continuous learning and growth."
        />
      )}

      <div className="experience-layout">
        <div className={`timeline${embedded ? ' compact-timeline' : ''}`}>
          {EXPERIENCE.map((item, index) => (
            <ScrollReveal key={item.company} delay={index * 90}>
              <article className="timeline-item">
                <div className="timeline-marker">
                  <BriefcaseIcon size={16} />
                </div>
                <div className="glass-card timeline-card">
                  <div className="timeline-top">
                    <div>
                      <p className="company">{item.company}</p>
                      <h3>{item.role}</h3>
                    </div>
                    <span className="period">{item.period}</span>
                  </div>
                  <ul>
                    {item.responsibilities.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {embedded ? null : (
          <aside className="experience-aside" aria-hidden="true">
            <MiniWindow title="terminal" lines={['$ nest start', 'compiled successfully', 'listening :3000']} />
            <MiniWindow title="api.http" lines={['GET /users 200', 'POST /auth 201', 'PATCH /jobs 204']} />
            <MiniWindow title="schema.sql" lines={['users', 'sessions', 'projects']} />
          </aside>
        )}
      </div>
    </>
  )

  if (embedded) {
    return (
      <div id="experience" className="career-panel">
        {body}
      </div>
    )
  }

  return (
    <section id="experience" className="section experience-section page-experience">
      <div className="container">{body}</div>
    </section>
  )
}
