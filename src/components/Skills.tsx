import { useMemo, useState, type CSSProperties } from 'react'
import { SKILL_FILTERS, SKILLS, type SkillCategory } from '../data/skills.ts'
import { TechIcon } from './icons/TechIcons.tsx'

export function Skills() {
  const [filter, setFilter] = useState<SkillCategory>('All')

  const visibleSkills = useMemo(
    () => (filter === 'All' ? SKILLS : SKILLS.filter((skill) => skill.category === filter)),
    [filter],
  )

  return (
    <div className="skills-panel">
      <header className="panel-heading">
        <p className="section-kicker">
          <span>02</span> / Skills
        </p>
        <h2 className="page-title">My Skills</h2>
        <p className="section-subtitle skills-subtitle">The tools I build with.</p>
      </header>

      <div className="skill-filters" role="tablist" aria-label="Skill categories">
        {SKILL_FILTERS.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={filter === category}
            className={filter === category ? 'is-active' : ''}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="skill-grid">
        {visibleSkills.map((skill) => (
          <article
            key={skill.name}
            className="skill-card"
            style={{ '--skill-color': skill.color } as CSSProperties}
          >
            <TechIcon name={skill.name} size={26} />
            <h3>{skill.name === 'DSA' ? 'DSA' : skill.name}</h3>
            <p>{skill.category}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
