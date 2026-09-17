type SectionHeadingProps = {
  index: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  headingLevel?: 1 | 2
}

export function SectionHeading({
  index,
  title,
  subtitle,
  align = 'center',
  headingLevel = 2,
}: SectionHeadingProps) {
  const TitleTag = headingLevel === 1 ? 'h1' : 'h2'

  return (
    <header className={`section-heading section-heading--${align}`}>
      <p className="section-kicker">
        <span>{index}</span> / {title}
      </p>
      <TitleTag className="page-title">{title}</TitleTag>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </header>
  )
}
