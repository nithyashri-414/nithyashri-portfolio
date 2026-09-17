import { SITE } from '../data/site.ts'
import { NAV_ITEMS } from '../data/nav.ts'
import { handleSectionLinkClick } from '../utils/scrollToSection.ts'
import { CodeBracketIcon } from './icons/Icons.tsx'
import { SocialLinks } from './SocialLinks.tsx'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-pro">
        <div className="footer-left">
          <p className="footer-brand">
            <CodeBracketIcon size={18} /> {SITE.name}
          </p>
          <p>{SITE.role}</p>
        </div>
        <p className="handwritten footer-center">
          {SITE.tagline} <span aria-hidden="true">♡</span>
        </p>
        <SocialLinks />
      </div>
      <nav className="container footer-links" aria-label="Footer">
        {NAV_ITEMS.map((item) => (
          <a key={item.id} href={item.href} onClick={(event) => handleSectionLinkClick(event, item.id)}>
            {item.label}
          </a>
        ))}
      </nav>
      <p className="copyright">© 2026 {SITE.name}. All rights reserved.</p>
    </footer>
  )
}
