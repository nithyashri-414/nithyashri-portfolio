import { useTheme } from '../context/ThemeContext'
import { NAV_ITEMS, SECTION_IDS } from '../data/nav.ts'
import { SITE } from '../data/site.ts'
import { useActiveSection } from '../hooks/useActiveSection.ts'
import { handleSectionLinkClick } from '../utils/scrollToSection.ts'
import { useEffect, useState, type MouseEvent } from 'react'
import { CodeBracketIcon, MoonIcon, SunIcon } from './icons/Icons.tsx'
import { ViewResumeLink } from './ViewResumeLink.tsx'

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const activeId = useActiveSection(SECTION_IDS)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.removeProperty('overflow')
    }
    return () => {
      document.body.style.removeProperty('overflow')
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  const onItemClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    closeMenu()
    handleSectionLinkClick(event, id)
  }

  return (
    <header className={`site-nav${scrolled || open ? ' is-scrolled' : ''}`}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="container nav-inner">
        <a href="#home" className="nav-brand" onClick={(event) => onItemClick(event, 'home')}>
          <span className="brand-icon" aria-hidden="true">
            <CodeBracketIcon size={18} />
          </span>
          {SITE.shortName}
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={activeId === item.id ? 'is-active' : ''}
              aria-current={activeId === item.id ? 'location' : undefined}
              onClick={(event) => onItemClick(event, item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <ViewResumeLink className="btn btn-resume nav-resume" />
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </button>
          <button
            type="button"
            className={`hamburger${open ? ' is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`nav-mobile${open ? ' is-open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={activeId === item.id ? 'is-active' : ''}
            aria-current={activeId === item.id ? 'location' : undefined}
            onClick={(event) => onItemClick(event, item.id)}
          >
            {item.label}
          </a>
        ))}
        <ViewResumeLink className="btn btn-resume" onClick={closeMenu} />
      </div>
    </header>
  )
}
