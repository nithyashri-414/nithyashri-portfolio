import type { ReactNode } from 'react'
import { COMPETENCIES, type Competency } from '../data/competencies.ts'
import { ScrollReveal } from './ScrollReveal.tsx'
import { SectionHeading } from './SectionHeading.tsx'

function Glyph({ children }: { children: ReactNode }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {children}
    </svg>
  )
}

function CompetencyIcon({ icon }: { icon: Competency['icon'] }) {
  switch (icon) {
    case 'backend':
      return (
        <Glyph>
          <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.7" />
          <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </Glyph>
      )
    case 'api':
      return (
        <Glyph>
          <path d="M7 12h10M12 7v10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
        </Glyph>
      )
    case 'ui':
      return (
        <Glyph>
          <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
          <path d="M4 9h16" stroke="currentColor" strokeWidth="1.7" />
        </Glyph>
      )
    case 'test':
      return (
        <Glyph>
          <path d="m7 12 3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </Glyph>
      )
    case 'bug':
      return (
        <Glyph>
          <circle cx="12" cy="13" r="5" stroke="currentColor" strokeWidth="1.7" />
          <path d="M12 8V5M7 10 5 8M17 10l2-2M5 13h2M17 13h2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </Glyph>
      )
    case 'solve':
      return (
        <Glyph>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7" />
          <path d="M12 5v2M12 17v2M5 12h2M17 12h2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </Glyph>
      )
    case 'logic':
      return (
        <Glyph>
          <path d="M8 7h8v4H8zM8 13h3v4H8zM13 13h3v4h-3z" stroke="currentColor" strokeWidth="1.7" />
        </Glyph>
      )
    case 'chat':
      return (
        <Glyph>
          <path d="M5 7h14v8H9l-4 3V7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </Glyph>
      )
    case 'team':
      return (
        <Glyph>
          <circle cx="9" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="16" cy="10" r="2" stroke="currentColor" strokeWidth="1.7" />
          <path d="M4.8 17c.6-2 2.2-3 4.2-3s3.6 1 4.2 3M14 14.2c1.5 0 2.8.7 3.4 2.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </Glyph>
      )
    case 'lead':
      return (
        <Glyph>
          <path d="m12 4 1.8 4.4L18.5 9l-3.4 3.1.9 4.6L12 14.8 7.9 16.7l.9-4.6L5.5 9l4.7-.6L12 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </Glyph>
      )
    case 'decide':
      return (
        <Glyph>
          <path d="M8 8h8v8H8z" stroke="currentColor" strokeWidth="1.7" />
          <path d="m9.5 12 1.8 1.8 3.4-3.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </Glyph>
      )
    default:
      return (
        <Glyph>
          <path d="M7 16 12 6l5 10H7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </Glyph>
      )
  }
}

export function Competencies() {
  return (
    <section id="competencies" className="section competencies-section">
      <div className="container">
        <SectionHeading index="08" title="Core Competencies" subtitle="The habits I bring to a software team." headingLevel={2} />
        <div className="capability-grid">
          {COMPETENCIES.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 30}>
              <article className={`capability-chip accent-${index % 4}`}>
                <span className="comp-icon">
                  <CompetencyIcon icon={item.icon} />
                </span>
                <h3>{item.title}</h3>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
