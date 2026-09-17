import { useEffect } from 'react'
import { scrollToSection } from '../utils/scrollToSection.ts'

const PATH_TO_ID: Record<string, string> = {
  '/about': 'about',
  '/skills': 'skills',
  '/experience': 'experience',
  '/projects': 'projects',
  '/education': 'education',
  '/contact': 'contact',
}

function sectionIdFromLocation() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  return PATH_TO_ID[path] || window.location.hash.replace('#', '').trim()
}

function normalizeLegacyPath() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  if (path === '/') return

  const id = PATH_TO_ID[path] || window.location.hash.replace('#', '').trim()
  window.history.replaceState(null, '', id ? `/#${id}` : '/')
}

export function HashRedirect() {
  useEffect(() => {
    normalizeLegacyPath()

    const id = sectionIdFromLocation()
    const timer = window.setTimeout(() => {
      if (id) scrollToSection(id)
    }, 80)

    const onHashOrPop = () => {
      const nextId = window.location.hash.replace('#', '').trim()
      if (nextId) {
        document.getElementById(nextId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', onHashOrPop)
    window.addEventListener('popstate', onHashOrPop)

    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('hashchange', onHashOrPop)
      window.removeEventListener('popstate', onHashOrPop)
    }
  }, [])

  return null
}
