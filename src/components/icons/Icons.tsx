import type { ReactNode, SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function BaseIcon({ size = 22, children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export function CodeBracketIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M8.5 6.5 3 12l5.5 5.5M15.5 6.5 21 12l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  )
}

export function LinkedInIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M6.5 9.2V18M6.5 6.2v.02M12.2 18v-5.1c0-1.4.9-2.4 2.2-2.4 1.2 0 2.1.8 2.1 2.4V18M12.2 12.2V9.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="3.2" stroke="currentColor" strokeWidth="1.6" />
    </BaseIcon>
  )
}

export function GitHubIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5.5v-3.8c0-1 .1-1.4-.5-2 2.6-.3 5.3-1.3 5.3-5.8 0-1.3-.5-2.3-1.2-3.1.1-.3.5-1.6-.1-3.2 0 0-1-.3-3.3 1.2a11.4 11.4 0 0 0-6 0C7 2.3 6 2.6 6 2.6c-.6 1.6-.2 2.9-.1 3.2C5.2 6.6 4.7 7.6 4.7 8.9c0 4.5 2.7 5.5 5.3 5.8-.6.5-.6 1.2-.5 2V21.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3.2" y="5.2" width="17.6" height="13.6" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </BaseIcon>
  )
}

export function DownloadIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M12 4.5v10M8 11.2 12 15l4-3.8M5 19.5h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  )
}

export function SunIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 3.2v1.8M12 19v1.8M4.9 4.9l1.3 1.3M17.8 17.8l1.3 1.3M3.2 12H5M19 12h1.8M4.9 19.1l1.3-1.3M17.8 6.2l1.3-1.3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </BaseIcon>
  )
}

export function MoonIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M16.8 13.6A6.4 6.4 0 0 1 10.2 5a6.6 6.6 0 1 0 6.6 8.6Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </BaseIcon>
  )
}

export function PinIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M12 21s6.5-5.2 6.5-10.2A6.5 6.5 0 0 0 5.5 10.8C5.5 15.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="10.6" r="2.1" stroke="currentColor" strokeWidth="1.7" />
    </BaseIcon>
  )
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M12 19V6M6.8 10.5 12 5.2l5.2 5.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  )
}

export function PaperPlaneIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="m4 12 16-8-6.5 16-2.7-6.2L4 12Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </BaseIcon>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m7 7 10 10M17 7 7 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </BaseIcon>
  )
}

export function ExternalIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path
        d="M10 6H6.5A2.5 2.5 0 0 0 4 8.5v9A2.5 2.5 0 0 0 6.5 20h9a2.5 2.5 0 0 0 2.5-2.5V14M13 4h7v7M11 13 20 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </BaseIcon>
  )
}

export function GraduationIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m3 10 9-5 9 5-9 5-9-5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M7 12.2v4.2c2.2 1.4 7.8 1.4 10 0v-4.2M21 10.5v5.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </BaseIcon>
  )
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3.2" y="7.2" width="17.6" height="12.4" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8.2 7.2V5.8A1.8 1.8 0 0 1 10 4h4a1.8 1.8 0 0 1 1.8 1.8v1.4M3.5 12.5h17" stroke="currentColor" strokeWidth="1.7" />
    </BaseIcon>
  )
}
