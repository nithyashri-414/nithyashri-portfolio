import type { ReactNode } from 'react'

type TechIconProps = {
  name: string
  size?: number
}

function Svg({
  size,
  children,
  viewBox = '0 0 24 24',
}: {
  size: number
  children: ReactNode
  viewBox?: string
}) {
  return (
    <svg width={size} height={size} viewBox={viewBox} fill="none" aria-hidden="true">
      {children}
    </svg>
  )
}

export function TechIcon({ name, size = 28 }: TechIconProps) {
  switch (name) {
    case 'JavaScript':
      return (
        <Svg size={size}>
          <rect width="24" height="24" rx="5" fill="#f7df1e" />
          <path d="M11 7h2.4v7.4c0 2.1-1.2 3.1-3.1 3.1-.6 0-1.3-.1-1.8-.3l.3-1.8c.3.1.7.2 1.1.2.8 0 1.1-.4 1.1-1.4V7Zm5.2 6.4c.2 1.3.9 1.8 2.1 1.8.9 0 1.5-.4 1.5-1 0-.6-.4-.9-1.6-1.3-1.8-.6-2.9-1.4-2.9-3.2 0-1.8 1.5-3.1 3.7-3.1 2.1 0 3.5 1.2 3.7 3l-2.1.4c-.2-1-.8-1.4-1.6-1.4-.8 0-1.3.4-1.3 1 0 .6.5.9 1.7 1.3 1.8.6 2.8 1.5 2.8 3.3 0 1.9-1.5 3.2-4 3.2-2.3 0-3.8-1.2-4-3.1l2z" fill="#111" />
        </Svg>
      )
    case 'TypeScript':
      return (
        <Svg size={size}>
          <rect width="24" height="24" rx="5" fill="#3178c6" />
          <path d="M6.7 11.2h4.2v1.4H9.3V18H7.7v-5.4H6.7v-1.4Zm7.3.1h5.3v1.4h-1.9V18h-1.6v-5.3H14v-1.4Z" fill="#fff" />
        </Svg>
      )
    case 'Java':
      return (
        <Svg size={size}>
          <rect width="24" height="24" rx="5" fill="#f89820" />
          <path
            d="M12.4 5.2c.8 1.3-2.1 2.2-2.1 3.8 0 .9.7 1.4 1.5 1.4 1.8 0 2.9-2.3 1.6-4.2M9.2 13.4c.4 2.8 4.8 2.8 5.4-.2-1.5.8-3.2.7-4.1-.4.9 2.6-3.4 2.3-3.8.1"
            stroke="#fff"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path d="M7.4 17.6c2 .9 7.2 1 9.2-.2" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
        </Svg>
      )
    case 'Python':
      return (
        <Svg size={size}>
          <rect width="24" height="24" rx="5" fill="#3776ab" />
          <path d="M12.2 5c2.6 0 3.6.8 3.8 2.6V10H10.4c-1.8 0-3.2 1-3.2 3.1v.6H9c0-1 .7-1.6 1.8-1.6h5.2c2 0 3.5-1.1 3.5-3.4V7.6C19.5 5.2 17.6 4 14.8 4h-.4C11.8 4 10 5.4 10 7.7V8h1.8V7.6C11.8 6 12.2 5 12.2 5Z" fill="#ffd43b" />
          <path d="M11.8 19c-2.6 0-3.6-.8-3.8-2.6V14h5.6c1.8 0 3.2-1 3.2-3.1v-.6H15c0 1-.7 1.6-1.8 1.6H8c-2 0-3.5 1.1-3.5 3.4v1.3C4.5 18.8 6.4 20 9.2 20h.4C12.2 20 14 18.6 14 16.3V16h-1.8v.4c0 1.6-.4 2.6-.4 2.6Z" fill="#fff" />
        </Svg>
      )
    case 'React':
      return (
        <Svg size={size}>
          <rect width="24" height="24" rx="5" fill="#0b1b2b" />
          <circle cx="12" cy="12" r="1.7" fill="#61dafb" />
          <ellipse cx="12" cy="12" rx="8" ry="3.2" stroke="#61dafb" strokeWidth="1.4" />
          <ellipse cx="12" cy="12" rx="8" ry="3.2" stroke="#61dafb" strokeWidth="1.4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="8" ry="3.2" stroke="#61dafb" strokeWidth="1.4" transform="rotate(120 12 12)" />
        </Svg>
      )
    case 'HTML5':
    case 'HTML':
      return (
        <Svg size={size}>
          <rect width="24" height="24" rx="5" fill="#e34f26" />
          <path d="M6.4 5h11.2l-.9 11.4L12 18.8l-4.7-2.4L6.4 5Z" fill="#fff" opacity=".95" />
          <path d="M12 6.8V17.4l3.7-1.9.7-8.7H12Z" fill="#f16529" />
        </Svg>
      )
    case 'CSS3':
    case 'CSS':
      return (
        <Svg size={size}>
          <rect width="24" height="24" rx="5" fill="#1572b6" />
          <path d="M6.4 5h11.2l-.9 11.4L12 18.8l-4.7-2.4L6.4 5Z" fill="#fff" opacity=".95" />
          <path d="M12 6.8V17.4l3.7-1.9.7-8.7H12Z" fill="#33a9dc" />
        </Svg>
      )
    case 'Bootstrap':
      return (
        <Svg size={size}>
          <rect width="24" height="24" rx="5" fill="#7952b3" />
          <path d="M8 7h5.1c2.3 0 3.7 1.2 3.7 3.1 0 1.3-.7 2.3-1.8 2.7 1.4.4 2.3 1.5 2.3 3 0 2.1-1.6 3.4-4.1 3.4H8V7Zm2.3 1.8v3.2h2.5c1.2 0 1.9-.6 1.9-1.6s-.7-1.6-1.9-1.6H10.3Zm0 5v3.5h2.8c1.3 0 2.1-.6 2.1-1.8s-.8-1.7-2.1-1.7h-2.8Z" fill="#fff" />
        </Svg>
      )
    case 'Node.js':
      return (
        <Svg size={size}>
          <rect width="24" height="24" rx="5" fill="#16351d" />
          <path d="M12 4.6 19 8.6v6.8l-7 4-7-4V8.6l7-4Z" stroke="#8cc84b" strokeWidth="1.6" />
          <path d="M12 8.2v7.6" stroke="#8cc84b" strokeWidth="1.6" />
        </Svg>
      )
    case 'NestJS':
      return (
        <Svg size={size}>
          <rect width="24" height="24" rx="5" fill="#e0234e" />
          <path d="M12.2 5.2c1.8 1.5 4.8 2.4 4.8 6.3 0 3.2-2.2 6.4-5 7.3-2.8-.9-5-4.1-5-7.3 0-2.3 1.1-4 2.6-5.1-.2 1.6.5 3.3 1.8 4.1-.1-2.3.4-4.1.8-5.3Z" fill="#fff" />
        </Svg>
      )
    case 'Spring Boot':
      return (
        <Svg size={size}>
          <rect width="24" height="24" rx="5" fill="#6db33f" />
          <path d="M7 14.6c1.6 2.6 5.8 3.4 8.8 1.2 2.3-1.7 2.8-4.3 1.8-5.6-1.4 2.8-4.2 3.5-7.2 3 1.6-1.4 3.1-1.8 5-1.8-3.6-2.8-9.2-.4-8.4 3.2Z" fill="#fff" />
        </Svg>
      )
    case 'REST APIs':
      return (
        <Svg size={size}>
          <rect width="24" height="24" rx="5" fill="#0891b2" />
          <path d="M8 9h8M8 12h8M8 15h5" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" />
          <circle cx="16.4" cy="15" r="1.6" fill="#fff" />
        </Svg>
      )
    case 'PostgreSQL':
      return (
        <Svg size={size}>
          <rect width="24" height="24" rx="5" fill="#336791" />
          <path d="M8.2 16.8c.4 1.2 1.4 1.8 2.8 1.8 2.2 0 3.4-1.2 3.4-3.4V11h-2.1v4.1c0 .9-.5 1.4-1.3 1.4-.7 0-1.1-.4-1.1-1.1V11H8.2v5.8Zm8.1-7.6c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2Zm-1 3.1h2.1V18h-2.1v-5.7Z" fill="#fff" />
        </Svg>
      )
    case 'MongoDB':
      return (
        <Svg size={size}>
          <rect width="24" height="24" rx="5" fill="#116149" />
          <path d="M12.3 4.6s3.7 3.2 3.7 8.4c0 3.3-1.6 5.3-3.7 6.4V4.6Z" fill="#a6e22e" />
          <path d="M12.3 4.6S8.6 7.8 8.6 13c0 3.3 1.6 5.3 3.7 6.4V4.6Z" fill="#47a248" />
        </Svg>
      )
    case 'Git':
      return (
        <Svg size={size}>
          <rect width="24" height="24" rx="5" fill="#f05032" />
          <path d="m12 4.8 7.2 7.2-7.2 7.2-7.2-7.2L12 4.8Z" fill="#fff" />
          <path d="M10.8 9.2v4.1h2.4M13.4 15.4a1.3 1.3 0 1 1-1.8-1.8" stroke="#f05032" strokeWidth="1.5" strokeLinecap="round" />
        </Svg>
      )
    case 'DSA':
    case 'Data Structures & Algorithms':
      return (
        <Svg size={size}>
          <rect width="24" height="24" rx="5" fill="#6d28d9" />
          <path d="M6.5 16.5 12 7.5l5.5 9H6.5Z" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
          <circle cx="12" cy="13.6" r="1.2" fill="#fff" />
        </Svg>
      )
    case 'UI Design':
    case 'UX Design':
      return (
        <Svg size={size}>
          <rect width="24" height="24" rx="5" fill="#db2777" />
          <rect x="6" y="7" width="12" height="10" rx="2" stroke="#fff" strokeWidth="1.6" />
          <path d="M9 10h6M9 13h4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
        </Svg>
      )
    default:
      return (
        <Svg size={size}>
          <rect width="24" height="24" rx="5" fill="#334155" />
          <path d="M8 8h8v8H8z" stroke="#fff" strokeWidth="1.6" />
        </Svg>
      )
  }
}
