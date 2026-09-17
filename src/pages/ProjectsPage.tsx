import { PageDecor } from '../components/PageDecor.tsx'
import { Projects } from '../components/Projects.tsx'

export function ProjectsPage() {
  return (
    <div className="page-shell page-projects">
      <PageDecor variant="projects" />
      <Projects />
    </div>
  )
}
