import { SITE } from '../data/site.ts'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons/Icons.tsx'

type SocialLinksProps = {
  className?: string
}

export function SocialLinks({ className = '' }: SocialLinksProps) {
  return (
    <div className={`social-links ${className}`.trim()}>
      <a
        href={SITE.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn profile"
      >
        <LinkedInIcon />
      </a>
      <a
        href={SITE.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub profile"
        title="Replace SITE.github in src/data/site.ts with your profile URL"
      >
        <GitHubIcon />
      </a>
      <a href={`mailto:${SITE.email}`} aria-label="Send email">
        <MailIcon />
      </a>
    </div>
  )
}
