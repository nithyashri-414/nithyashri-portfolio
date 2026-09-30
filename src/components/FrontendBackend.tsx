import { TechIcon } from './icons/TechIcons.tsx'
import { ScrollReveal } from './ScrollReveal.tsx'
import { SectionHeading } from './SectionHeading.tsx'

const FRONTEND = ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'TypeScript', 'React']
const BACKEND = ['Node.js', 'NestJS', 'Spring Boot', 'REST APIs']
const DATABASE = ['PostgreSQL', 'MongoDB']

function ChipRow({ items }: { items: string[] }) {
  return (
    <ul className="arch-chips">
      {items.map((item) => (
        <li key={item}>
          <TechIcon name={item} size={16} />
          {item}
        </li>
      ))}
    </ul>
  )
}

export function FrontendBackend() {
  return (
    <section className="section stack-section">
      <div className="container">
        <SectionHeading
          index="03"
          title="Full Stack Journey"
          subtitle="From UI to Database — building complete solutions"
          headingLevel={2}
        />

        <ScrollReveal>
          <div className="arch-flow" aria-label="Frontend to REST API to Backend to Database">
            <article className="arch-stage">
              <div className="arch-node arch-front">
                <span>01</span>
                Frontend
              </div>
              <ChipRow items={FRONTEND} />
            </article>

            <div className="arch-link" aria-hidden="true">
              <i />
              <b />
            </div>

            <article className="arch-stage">
              <div className="arch-node arch-api">
                <span>02</span>
                REST API
              </div>
              <p className="arch-note">Contracts between UI and services</p>
            </article>

            <div className="arch-link" aria-hidden="true">
              <i />
              <b />
            </div>

            <article className="arch-stage">
              <div className="arch-node arch-back">
                <span>03</span>
                Backend
              </div>
              <ChipRow items={BACKEND} />
            </article>

            <div className="arch-link" aria-hidden="true">
              <i />
              <b />
            </div>

            <article className="arch-stage">
              <div className="arch-node arch-data">
                <span>04</span>
                Database
              </div>
              <ChipRow items={DATABASE} />
            </article>
          </div>
          <p className="handwritten arch-hand" aria-hidden="true">
            Different technologies. Same passion ♡
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
