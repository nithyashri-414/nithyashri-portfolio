import type { ReactNode } from 'react'
import { BackToTop } from './BackToTop.tsx'
import { Footer } from './Footer.tsx'
import { HashRedirect } from './HashRedirect.tsx'
import { Navbar } from './Navbar.tsx'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <HashRedirect />
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
      <BackToTop />
    </>
  )
}
