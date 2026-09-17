import { Contact } from '../components/Contact.tsx'
import { PageDecor } from '../components/PageDecor.tsx'

export function ContactPage() {
  return (
    <div className="page-shell page-contact">
      <PageDecor variant="contact" />
      <Contact />
    </div>
  )
}
