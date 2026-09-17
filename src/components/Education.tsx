import { EDUCATION } from '../data/education.ts'
import { ScrollReveal } from './ScrollReveal.tsx'
import { SectionHeading } from './SectionHeading.tsx'
import { GraduationIcon } from './icons/Icons.tsx'

export function Education({ embedded = false }: { embedded?: boolean }) {
  const body = (
    <>
      {embedded ? (
        <header className="panel-heading">
          <p className="section-kicker">
            <span>06</span> / Education
          </p>
          <h2>Education</h2>
        </header>
      ) : (
        <SectionHeading
          index="06"
          title="Education"
          subtitle="A Computer Science foundation with consistent academic performance."
        />
      )}

      <ScrollReveal>
        <ol className="edu-journey">
          {EDUCATION.map((item, index) => (
            <li key={item.school} className={`edu-stop accent-${index}`}>
              <div className="edu-bead" aria-hidden="true">
                <GraduationIcon size={16} />
              </div>
              <div>
                <p className="edu-year">{item.period}</p>
                <article className="edu-card">
                  <h3>{item.school}</h3>
                  <p className="program">{item.program}</p>
                  <p className="result">{item.result}</p>
                </article>
              </div>
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
    <section id="education" className="section education-section">
      <div className="container">{body}</div>
    </section>
  )
}
