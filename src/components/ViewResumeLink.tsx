import resumePdf from '../assets/Nithyashri-M-CV.pdf'
import { ExternalIcon } from './icons/Icons.tsx'

type ViewResumeLinkProps = {
  className?: string
  onClick?: () => void
}

export function ViewResumeLink({ className = 'btn btn-resume', onClick }: ViewResumeLinkProps) {
  return (
    <a
      className={className}
      href={resumePdf}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      <ExternalIcon size={16} />
      <span>View Resume</span>
    </a>
  )
}
