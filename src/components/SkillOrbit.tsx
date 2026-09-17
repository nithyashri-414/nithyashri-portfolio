import { TechIcon } from './icons/TechIcons.tsx'

const ORBIT = ['TypeScript', 'Node.js', 'NestJS', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'JavaScript', 'Git']

export function SkillOrbit() {
  return (
    <div className="skill-orbit" aria-hidden="true">
      <div className="skill-orbit-core">
        <TechIcon name="React" size={40} />
        <span>React</span>
      </div>
      {ORBIT.map((name, index) => (
        <span key={name} className={`skill-orbit-item i${index}`}>
          <span className="skill-orbit-float">
            <TechIcon name={name} size={20} />
            <b>{name}</b>
          </span>
        </span>
      ))}
    </div>
  )
}
