import type { MouseEvent } from 'react'

export function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return

  const hash = `#${id}`
  if (window.location.hash !== hash) {
    window.history.pushState(null, '', hash)
  }

  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function handleSectionLinkClick(event: MouseEvent<HTMLAnchorElement>, id: string) {
  event.preventDefault()
  document.body.style.removeProperty('overflow')
  scrollToSection(id)
}
