import { INTERNSHIPS } from '../data/internships.ts'
import { ScrollReveal } from './ScrollReveal.tsx'
import { SectionHeading } from './SectionHeading.tsx'

export function Internships({ embedded = false }: { embedded?: boolean }) {
  const body = (
    <>
      {embedded ? (
        <header className="panel-heading">
          <p className="section-kicker">
            <span>07</span> / Internships
          </p>
          <h2>Internships & Achievements</h2>
        </header>
      ) : (
        <SectionHeading
          index="07"
          title="Internships & Achievements"
          subtitle="Hands-on learning across data, AI, and web development."
          headingLevel={2}
        />
      )}

      <ScrollReveal>
        <ol className="intern-journey">
          {INTERNSHIPS.map((item, index) => (
            <li key={item.organization} className={`intern-stop accent-${index}`}>
              <div className="intern-bead" aria-hidden="true">
                {index + 1}
              </div>
              <article className="intern-card">
                <h3>{item.organization}</h3>
                <p className="role">{item.role}</p>
                <p>{item.detail}</p>
              </article>
            </li>
          ))}
        </ol>
      </ScrollReveal>
    </>
  )

  if (embedded) {
    return <div className="career-panel">{body}</div>
  }

  return (
    <section id="internships" className="section internships-section">
      <div className="container">{body}</div>
    </section>
  )
}
