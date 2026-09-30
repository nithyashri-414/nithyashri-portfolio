import { SITE } from '../data/site.ts'
import { ScrollReveal } from './ScrollReveal.tsx'
import { MailIcon, PinIcon } from './icons/Icons.tsx'

export function About() {
  return (
    <section id="about" className="section about-section page-about">
      <div className="container">
        <div className="about-page-grid">
          <ScrollReveal>
            <div className="about-copy">
              <p className="section-kicker">
                <span>01</span> / About
              </p>
              <h2 className="page-title">About Me</h2>
              <p className="about-lead">A software developer who also cares about how software feels.</p>

              <div className="status-badge">
                <span className="status-dot" />
                Open to Opportunities
              </div>

              <p>{SITE.about}</p>
              <p>{SITE.uiExperience}</p>
              <p className="handwritten about-note">{SITE.personalityQuote}</p>

              <div className="about-meta">
                <p>
                  <PinIcon size={18} />
                  {SITE.location}
                </p>
                <p>
                  <MailIcon size={18} />
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </p>
                <p>
                  <a href={SITE.linkedin} target="_blank" rel="noreferrer">
                    {SITE.linkedinLabel}
                  </a>
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <aside className="about-visual" aria-hidden="true">
              <div className="workspace-panel">
                <div className="decor-window-bar">
                  <span />
                  <span />
                  <span />
                  <p>workspace.ts</p>
                </div>
                <pre>
                  <code>
                    <span className="tok-kw">const</span> engineer = {'{'}
                    {'\n'}
                    {'  '}role: <span className="tok-str">"{SITE.role}"</span>,{'\n'}
                    {'  '}stack: [<span className="tok-str">"NestJS"</span>, <span className="tok-str">"TypeScript"</span>],{'\n'}
                    {'  '}mindset: <span className="tok-str">"Build. Learn. Grow."</span>
                    {'\n'}
                    {'};'}
                  </code>
                </pre>
                <div className="workspace-nodes">
                  <span>REST APIs</span>
                  <span>PostgreSQL</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </aside>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
