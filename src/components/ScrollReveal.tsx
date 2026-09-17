import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setVisible(true)
      return
    }

    const isInView = () => {
      const rect = element.getBoundingClientRect()
      return rect.top < window.innerHeight - 24 && rect.bottom > 24
    }

    if (isInView()) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.08, rootMargin: '80px 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {}

  return (
    <div
      ref={ref}
      className={`scroll-reveal${visible ? ' is-visible' : ''} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  )
}
