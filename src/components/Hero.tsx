import { SITE } from '../data/site.ts'
import { handleSectionLinkClick } from '../utils/scrollToSection.ts'
import { HeroProfilePhoto } from './HeroProfilePhoto.tsx'
import { SocialLinks } from './SocialLinks.tsx'
import { ViewResumeLink } from './ViewResumeLink.tsx'
import { TechIcon } from './icons/TechIcons.tsx'

const TECH_WORDS = [
  { text: 'JavaScript', className: 'tw-js' },
  { text: 'TypeScript', className: 'tw-ts' },
  { text: 'React', className: 'tw-react' },
  { text: 'Node.js', className: 'tw-node' },
  { text: 'NestJS', className: 'tw-nest' },
  { text: 'Spring Boot', className: 'tw-spring' },
  { text: 'REST APIs', className: 'tw-api' },
]

const ORBIT_TECH = [
  { name: 'Git', className: 'chip-git' },
  { name: 'DSA', className: 'chip-dsa' },
  { name: 'JavaScript', className: 'chip-js' },
  { name: 'TypeScript', className: 'chip-ts' },
  { name: 'NestJS', className: 'chip-nest' },
  { name: 'React', className: 'chip-react' },
  { name: 'Node.js', className: 'chip-node' },
  { name: 'Spring Boot', className: 'chip-spring' },
  { name: 'REST APIs', className: 'chip-api' },
  { name: 'PostgreSQL', className: 'chip-pg' },
  { name: 'MongoDB', className: 'chip-mongo' },
] as const

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-orbs" aria-hidden="true">
        <span className="orb orb-a" />
        <span className="orb orb-b" />
        <span className="orb orb-c" />
        <span className="orb orb-d" />
        <span className="orb orb-e" />
        <span className="grid-fade" />
        <span className="grid-fade grid-fade-soft" />
        <span className="hero-spark s0" />
        <span className="hero-spark s1" />
        <span className="hero-spark s2" />
        <span className="hero-spark s3" />
        <span className="hero-spark s4" />
        <span className="hero-spark s5" />
        <span className="hero-spark s6" />
        <span className="hero-spark s7" />
        <span className="hero-spark s8" />
        <span className="hero-spark s9" />
        <span className="hero-glyph g1">{'</>'}</span>
        <span className="hero-glyph g2">{'{ }'}</span>
      </div>

      <div className="hero-frame">
        <div className="hero-copy">
          <p className="hero-kicker reveal-item">{SITE.headline}</p>
          <h1 className="hero-title reveal-item">
            <span className="gradient-text">{SITE.name}</span>
          </h1>
          <p className="hero-role reveal-item">{SITE.role}</p>
          <p className="hero-summary reveal-item">{SITE.summary}</p>
          <p className="handwritten hero-tagline reveal-item">
            {SITE.tagline} <span aria-hidden="true">♡</span>
          </p>

          <div className="hero-tech-pills reveal-item" aria-label="Technology highlights">
            {TECH_WORDS.map((word) => (
              <span key={word.text}>{word.text}</span>
            ))}
          </div>

          <div className="hero-actions reveal-item">
            <a className="btn btn-primary-glow" href="#projects" onClick={(event) => handleSectionLinkClick(event, 'projects')}>
              View My Work
            </a>
            <a className="btn btn-ghost" href="#contact" onClick={(event) => handleSectionLinkClick(event, 'contact')}>
              Contact Me
            </a>
            <ViewResumeLink className="btn btn-soft" />
          </div>

          <SocialLinks className="reveal-item" />
        </div>

        <div className="hero-visual">
          <svg className="hero-constellation" viewBox="0 0 720 760" aria-hidden="true">
            <path d="M360 280 C 220 120, 90 150, 70 210" />
            <path d="M360 240 C 480 70, 620 90, 670 160" />
            <path d="M400 320 C 560 260, 690 300, 680 390" />
            <path d="M420 430 C 610 480, 680 560, 640 640" />
            <path d="M300 480 C 140 560, 90 620, 130 690" />
            <circle cx="70" cy="210" r="3.5" />
            <circle cx="670" cy="160" r="3.5" />
            <circle cx="680" cy="390" r="3" />
            <circle cx="640" cy="640" r="3" />
            <circle cx="130" cy="690" r="3" />
            <circle cx="360" cy="96" r="3" />
          </svg>

          <div className="photo-stage">
            <span className="photo-bloom" aria-hidden="true" />
            <HeroProfilePhoto />
          </div>

          <ul className="hero-tech-orbit" aria-hidden="true">
            {ORBIT_TECH.map((item) => (
              <li key={item.name} className={`hero-chip ${item.className}`}>
                <TechIcon name={item.name} size={16} />
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-rail">
          <div className="hero-mini-card">
            <p className="hero-mini-kicker">Currently exploring</p>
            <p>NestJS · TypeScript · REST APIs</p>
          </div>

          <aside className="code-card" aria-label="Developer profile snippet">
            <div className="code-chrome">
              <span />
              <span />
              <span />
              <p>developer.ts</p>
            </div>
            <pre>
              <code>
                <span className="tok-kw">const</span> developer = {'{'}
                {'\n'}
                {'  '}name: <span className="tok-str">"Nithyashri M"</span>,{'\n'}
                {'  '}role: <span className="tok-str">"Backend Developer | Full Stack Developer"</span>,{'\n'}
                {'  '}skills: [{'\n'}
                {'    '}<span className="tok-str">"TypeScript"</span>,{'\n'}
                {'    '}<span className="tok-str">"Node.js"</span>,{'\n'}
                {'    '}<span className="tok-str">"NestJS"</span>,{'\n'}
                {'    '}<span className="tok-str">"Spring Boot"</span>,{'\n'}
                {'    '}<span className="tok-str">"React"</span>{'\n'}
                {'  '}],{'\n'}
                {'  '}mindset: <span className="tok-str">"Always learning"</span>
                {'\n'}
                {'};'}
              </code>
            </pre>
          </aside>

          <div className="hero-mini-card hero-status-card">
            <p className="hero-mini-kicker">api.http</p>
            <p>
              GET /health <span>200</span>
            </p>
          </div>

          <p className="handwritten hero-rail-note">{SITE.quote}</p>
        </div>
      </div>
    </section>
  )
}
