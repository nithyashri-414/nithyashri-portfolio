import { Education } from '../components/Education.tsx'
import { Internships } from '../components/Internships.tsx'
import { PageDecor } from '../components/PageDecor.tsx'

export function EducationPage() {
  return (
    <div className="page-shell page-education">
      <PageDecor variant="education" />
      <Education />
      <Internships />
    </div>
  )
}
