export type NavItem = {
  href: string
  id: string
  label: string
}

export const NAV_ITEMS: NavItem[] = [
  { href: '#home', id: 'home', label: 'Home' },
  { href: '#about', id: 'about', label: 'About' },
  { href: '#skills', id: 'skills', label: 'Skills' },
  { href: '#experience', id: 'experience', label: 'Experience' },
  { href: '#projects', id: 'projects', label: 'Projects' },
  { href: '#education', id: 'education', label: 'Education' },
  { href: '#contact', id: 'contact', label: 'Contact' },
]

export const SECTION_IDS = NAV_ITEMS.map((item) => item.id)
