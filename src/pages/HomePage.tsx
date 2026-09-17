import { About } from '../components/About.tsx'
import { Competencies } from '../components/Competencies.tsx'
import { Contact } from '../components/Contact.tsx'
import { Education } from '../components/Education.tsx'
import { Experience } from '../components/Experience.tsx'
import { FrontendBackend } from '../components/FrontendBackend.tsx'
import { Hero } from '../components/Hero.tsx'
import { Internships } from '../components/Internships.tsx'
import { PageDecor } from '../components/PageDecor.tsx'
import { Projects } from '../components/Projects.tsx'
import { SkillOrbit } from '../components/SkillOrbit.tsx'
import { Skills } from '../components/Skills.tsx'

export function HomePage() {
  return (
    <>
      <div className="page-shell page-home">
        <PageDecor variant="home" />
        <Hero />
      </div>

      <About />

      <div className="page-skills">
        <section id="skills" className="section skills-section">
          <div className="container">
            <div className="skills-showcase">
              <Skills />
              <SkillOrbit />
            </div>
          </div>
        </section>
        <FrontendBackend />
      </div>

      <Experience />
      <Projects />

      <div className="page-education">
        <Education />
        <Internships />
      </div>

      <Competencies />
      <Contact />
    </>
  )
}
