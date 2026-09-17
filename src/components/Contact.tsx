import { useState, type FormEvent } from 'react'
import { SITE } from '../data/site.ts'
import { ScrollReveal } from './ScrollReveal.tsx'
import { SectionHeading } from './SectionHeading.tsx'
import { LinkedInIcon, MailIcon, PaperPlaneIcon, PinIcon } from './icons/Icons.tsx'
import { PaperPlaneArt } from './DeveloperArt.tsx'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type FieldErrors = {
  name: string
  email: string
  message: string
}

const EMPTY_ERRORS: FieldErrors = { name: '', email: '', message: '' }

function openMailto(url: string) {
  const link = document.createElement('a')
  link.href = url
  link.rel = 'noopener'
  document.body.appendChild(link)
  link.click()
  link.remove()
}

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<FieldErrors>(EMPTY_ERRORS)
  const [status, setStatus] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    const trimmedMessage = message.trim()
    const nextErrors: FieldErrors = { ...EMPTY_ERRORS }

    if (!trimmedName) nextErrors.name = 'Please enter your name.'
    if (!trimmedEmail) nextErrors.email = 'Please enter your email.'
    else if (!EMAIL_PATTERN.test(trimmedEmail)) nextErrors.email = 'Please enter a valid email address.'
    if (!trimmedMessage) nextErrors.message = 'Please enter a message.'

    setErrors(nextErrors)

    if (nextErrors.name || nextErrors.email || nextErrors.message) {
      setStatus('')
      return
    }

    const subject = encodeURIComponent(`Portfolio Contact – ${trimmedName}`)
    const body = encodeURIComponent(
      `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`,
    )
    openMailto(`mailto:${SITE.email}?subject=${subject}&body=${body}`)
    setStatus('Your email app should open with the message ready to send.')
  }

  return (
    <section id="contact" className="section contact-section page-contact">
      <div className="container">
        <SectionHeading index="09" title="Let's Connect" subtitle="Feel free to reach out for opportunities, collaborations, or just a chat." />

        <div className="row g-4">
          <div className="col-lg-5">
            <ScrollReveal>
              <div className="glass-card contact-info">
                <div className="contact-hero-art" aria-hidden="true">
                  <PaperPlaneArt />
                </div>
                <h2>Let's Work Together</h2>
                <p>I am open to backend and full-stack opportunities where I can keep building, learning, and growing.</p>

                <ul className="contact-list">
                  <li>
                    <MailIcon />
                    <div>
                      <span>Email</span>
                      <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                    </div>
                  </li>
                  <li>
                    <LinkedInIcon />
                    <div>
                      <span>LinkedIn</span>
                      <a href={SITE.linkedin} target="_blank" rel="noreferrer">
                        {SITE.linkedinLabel}
                      </a>
                    </div>
                  </li>
                  <li>
                    <PinIcon />
                    <div>
                      <span>Location</span>
                      <p>{SITE.location}</p>
                    </div>
                  </li>
                </ul>

                <div className="contact-actions">
                  <a className="btn btn-primary-glow" href={`mailto:${SITE.email}`}>
                    <MailIcon size={16} />
                    Send Email
                  </a>
                  <a className="btn btn-ghost" href={SITE.linkedin} target="_blank" rel="noreferrer">
                    <LinkedInIcon size={16} />
                    LinkedIn
                  </a>
                </div>
              </div>

              <aside className="quote-plaque" aria-hidden="true">
                <p>Good Code</p>
                <p>Better Future</p>
              </aside>
            </ScrollReveal>
          </div>

          <div className="col-lg-7">
            <ScrollReveal delay={100}>
              <form className="glass-card contact-form" onSubmit={onSubmit} noValidate>
                <div className="form-plane" aria-hidden="true">
                  <PaperPlaneIcon size={28} />
                </div>
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    value={name}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    onChange={(event) => setName(event.target.value)}
                  />
                  {errors.name ? (
                    <span id="name-error" className="field-error">
                      {errors.name}
                    </span>
                  ) : null}
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={email}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  {errors.email ? (
                    <span id="email-error" className="field-error">
                      {errors.email}
                    </span>
                  ) : null}
                </label>
                <label>
                  Message
                  <textarea
                    name="contact-message"
                    id="contact-message"
                    rows={5}
                    required
                    value={message}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    onChange={(event) => setMessage(event.target.value)}
                  />
                  {errors.message ? (
                    <span id="message-error" className="field-error">
                      {errors.message}
                    </span>
                  ) : null}
                </label>
                <button type="submit" className="btn btn-primary-glow">
                  <PaperPlaneIcon size={16} />
                  Send Message
                </button>
                <p className="form-note">
                  This form opens your email app with a ready-to-send message. It does not submit to a backend.
                </p>
                {status ? (
                  <p className="form-status" role="status">
                    {status}
                  </p>
                ) : null}
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
