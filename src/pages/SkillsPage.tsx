import { FrontendBackend } from '../components/FrontendBackend.tsx'
import { PageDecor } from '../components/PageDecor.tsx'
import { SkillOrbit } from '../components/SkillOrbit.tsx'
import { Skills } from '../components/Skills.tsx'

export function SkillsPage() {
  return (
    <div className="page-shell page-skills">
      <PageDecor variant="skills" />
      <section className="section">
        <div className="container">
        <div className="skills-showcase">
          <Skills />
          <SkillOrbit />
        </div>
        </div>
      </section>
      <FrontendBackend />
    </div>
  )
}
