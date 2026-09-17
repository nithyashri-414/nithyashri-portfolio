import { Education } from './Education.tsx'
import { Experience } from './Experience.tsx'
import { Internships } from './Internships.tsx'
import { Projects } from './Projects.tsx'

export function CareerBand() {
  return (
    <section className="section career-band" aria-label="Experience, projects, education and internships">
      <div className="container career-band-grid">
        <Experience embedded />
        <Projects embedded />
        <div id="education" className="edu-intern-col">
          <Education embedded />
          <Internships embedded />
        </div>
      </div>
    </section>
  )
}
