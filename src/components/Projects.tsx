import { useEffect, useState } from 'react'
import { PROJECTS, type Project } from '../data/projects.ts'
import { ScrollReveal } from './ScrollReveal.tsx'
import { SectionHeading } from './SectionHeading.tsx'
import { CloseIcon, ExternalIcon, GitHubIcon } from './icons/Icons.tsx'
import { TechIcon } from './icons/TechIcons.tsx'

function FoodDeliveryArt() {
  return (
    <svg className="project-art" viewBox="0 0 640 400" role="img" aria-label="Food delivery app UI concept preview">
      <defs>
        <linearGradient id="foodBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1b1024" />
          <stop offset="100%" stopColor="#3b1d2a" />
        </linearGradient>
      </defs>
      <rect width="640" height="400" rx="24" fill="url(#foodBg)" />
      <rect x="36" y="28" width="250" height="344" rx="28" fill="#0b1220" />
      <rect x="48" y="48" width="226" height="312" rx="22" fill="#fff7ed" />
      <rect x="66" y="64" width="140" height="12" rx="6" fill="#fdba74" />
      <rect x="66" y="88" width="190" height="28" rx="14" fill="#ffedd5" />
      <circle cx="88" cy="102" r="8" fill="#f97316" />
      <text x="104" y="107" fontSize="11" fill="#9a3412" fontFamily="sans-serif">
        Search restaurants
      </text>
      <circle cx="86" cy="148" r="16" fill="#fb7185" />
      <circle cx="128" cy="148" r="16" fill="#fb923c" />
      <circle cx="170" cy="148" r="16" fill="#fbbf24" />
      <circle cx="212" cy="148" r="16" fill="#34d399" />
      <rect x="66" y="180" width="190" height="72" rx="16" fill="#fff" />
      <rect x="80" y="194" width="48" height="44" rx="10" fill="#fdba74" />
      <rect x="140" y="198" width="96" height="10" rx="5" fill="#7c2d12" />
      <rect x="140" y="216" width="72" height="8" rx="4" fill="#c2410c" opacity=".55" />
      <rect x="140" y="232" width="40" height="10" rx="5" fill="#f97316" />
      <rect x="66" y="262" width="190" height="72" rx="16" fill="#fff" />
      <rect x="80" y="276" width="48" height="44" rx="10" fill="#fda4af" />
      <rect x="140" y="280" width="90" height="10" rx="5" fill="#7c2d12" />
      <rect x="140" y="298" width="64" height="8" rx="4" fill="#c2410c" opacity=".55" />
      <rect x="320" y="48" width="284" height="304" rx="22" fill="#111827" opacity=".55" />
      <rect x="344" y="72" width="236" height="18" rx="9" fill="#fb7185" opacity=".9" />
      <rect x="344" y="108" width="110" height="96" rx="16" fill="#fff7ed" />
      <rect x="468" y="108" width="110" height="96" rx="16" fill="#ffedd5" />
      <rect x="344" y="220" width="236" height="52" rx="14" fill="#1f2937" />
      <rect x="344" y="286" width="160" height="36" rx="18" fill="#f97316" />
    </svg>
  )
}

function TaskBoardArt() {
  return (
    <svg className="project-art" viewBox="0 0 640 400" role="img" aria-label="Task management dashboard UI concept preview">
      <defs>
        <linearGradient id="taskBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0b1a2e" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
      </defs>
      <rect width="640" height="400" rx="24" fill="url(#taskBg)" />
      <rect x="28" y="28" width="584" height="344" rx="20" fill="#0f172a" />
      <rect x="48" y="48" width="160" height="16" rx="8" fill="#38bdf8" />
      <rect x="48" y="76" width="220" height="10" rx="5" fill="#64748b" />
      {[0, 1, 2].map((col) => (
        <g key={col} transform={`translate(${48 + col * 186} 110)`}>
          <rect width="170" height="230" rx="16" fill="#111827" />
          <rect x="14" y="16" width="78" height="10" rx="5" fill={col === 2 ? '#34d399' : col === 1 ? '#fbbf24' : '#7dd3fc'} />
          <rect x="14" y="42" width="142" height="48" rx="10" fill="#1e293b" />
          <rect x="14" y="100" width="142" height="48" rx="10" fill="#1e293b" />
          <rect x="14" y="158" width="142" height="48" rx="10" fill="#1e293b" />
        </g>
      ))}
    </svg>
  )
}

function ProjectArt({ id }: { id: string }) {
  return id === 'food-delivery' ? <FoodDeliveryArt /> : <TaskBoardArt />
}

export function Projects({ embedded = false }: { embedded?: boolean }) {
  const [selected, setSelected] = useState<Project | null>(null)

  useEffect(() => {
    if (!selected) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.removeProperty('overflow')
    }
  }, [selected])

  const body = (
    <>
      {embedded ? (
        <header className="panel-heading">
          <p className="section-kicker">
            <span>05</span> / Featured Projects
          </p>
          <h2>Featured Projects</h2>
        </header>
      ) : (
        <SectionHeading index="05" title="Featured Projects" subtitle="Small projects, big learnings." />
      )}

      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <ScrollReveal key={project.id} className="h-stretch" delay={index * 80}>
            <article className="project-card glass-card">
              <div className="project-preview">
                <div className="preview-chrome" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <p>{project.title.toLowerCase().replace(/\s+/g, '-')}.ui</p>
                </div>
                <ProjectArt id={project.id} />
                <p className="preview-caption">UI concept preview</p>
              </div>
              <div className="project-body">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-row">
                  {project.technologies.map((tech) => (
                    <span key={tech}>
                      <TechIcon name={tech} size={16} />
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <button type="button" className="btn btn-primary-glow" onClick={() => setSelected(project)}>
                    View Details
                  </button>
                  {project.liveUrl ? (
                    <a className="btn btn-ghost" href={project.liveUrl} target="_blank" rel="noreferrer">
                      <ExternalIcon size={16} />
                      Live preview
                    </a>
                  ) : null}
                  {project.githubUrl ? (
                    <a className="btn btn-soft" href={project.githubUrl} target="_blank" rel="noreferrer">
                      <GitHubIcon size={16} />
                      GitHub
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </>
  )

  const modal = selected ? (
    <div className="modal-backdrop" onClick={() => setSelected(null)} role="presentation">
      <div
        className="glass-card project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="icon-btn modal-close" onClick={() => setSelected(null)} aria-label="Close details">
          <CloseIcon />
        </button>
        <p className="project-category">{selected.category}</p>
        <h3 id="project-modal-title">{selected.title}</h3>
        <p>{selected.description}</p>
        <ul>
          {selected.details.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  ) : null

  if (embedded) {
    return (
      <div id="projects" className="career-panel">
        {body}
        {modal}
      </div>
    )
  }

  return (
    <section id="projects" className="section projects-section page-projects">
      <div className="container">{body}</div>
      {modal}
    </section>
  )
}
