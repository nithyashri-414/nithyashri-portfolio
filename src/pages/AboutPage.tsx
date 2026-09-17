import { About } from '../components/About.tsx'
import { Competencies } from '../components/Competencies.tsx'
import { PageDecor } from '../components/PageDecor.tsx'

export function AboutPage() {
  return (
    <div className="page-shell page-about">
      <PageDecor variant="about" />
      <About />
      <Competencies />
    </div>
  )
}
