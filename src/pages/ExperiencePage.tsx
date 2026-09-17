import { Experience } from '../components/Experience.tsx'
import { PageDecor } from '../components/PageDecor.tsx'

export function ExperiencePage() {
  return (
    <div className="page-shell page-experience">
      <PageDecor variant="experience" />
      <Experience />
    </div>
  )
}
