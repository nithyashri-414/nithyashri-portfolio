import {
  DatabaseArt,
  GraduationArt,
  LaptopArt,
  NetworkArt,
  PaperPlaneArt,
  ParticleField,
  UiWindowsArt,
} from './DeveloperArt.tsx'

type DecorVariant = 'home' | 'about' | 'skills' | 'experience' | 'projects' | 'education' | 'contact'

function CodeWindow({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="decor-window">
      <div className="decor-window-bar">
        <span />
        <span />
        <span />
        <p>{title}</p>
      </div>
      {lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  )
}

export function PageDecor({ variant }: { variant: DecorVariant }) {
  return (
    <div className={`page-decor page-decor--${variant}`} aria-hidden="true">
      <span className="decor-orb decor-orb-a" />
      <span className="decor-orb decor-orb-b" />
      <div className="decor-grid" />
      <ParticleField />
      <svg className="decor-circuit" viewBox="0 0 1200 800" fill="none">
        <path d="M40 120 C 180 40, 320 220, 480 140 S 780 40, 1100 180" />
        <path d="M80 680 C 260 560, 420 740, 640 620 S 980 520, 1160 660" />
        <circle cx="180" cy="90" r="4" />
        <circle cx="640" cy="620" r="4" />
        <circle cx="1100" cy="180" r="4" />
      </svg>

      {variant === 'about' ? (
        <>
          <div className="decor-scene decor-scene-right">
            <LaptopArt />
          </div>
          <div className="decor-side decor-side-left">
            <CodeWindow
              title="about.ts"
              lines={['const focus = "backend"', 'stack.includes("NestJS")', 'learning = true']}
            />
          </div>
        </>
      ) : null}

      {variant === 'skills' ? (
        <>
          <div className="decor-scene decor-scene-left muted-art">
            <NetworkArt />
          </div>
          <div className="decor-scene decor-scene-right muted-art">
            <DatabaseArt />
          </div>
          <div className="decor-side decor-side-left">
            <CodeWindow title="api.json" lines={['GET /skills', '200 OK', '{ "ready": true }']} />
          </div>
          <div className="decor-side decor-side-right">
            <CodeWindow title="db.sql" lines={['SELECT * FROM stack;', 'JOIN apis ON id', 'ORDER BY name']} />
          </div>
        </>
      ) : null}

      {variant === 'experience' ? (
        <>
          <div className="decor-scene decor-scene-right muted-art">
            <NetworkArt />
          </div>
          <div className="decor-side decor-side-left">
            <CodeWindow title="terminal" lines={['$ nest build', '$ npm test', '✔ apis passing']} />
          </div>
        </>
      ) : null}

      {variant === 'projects' ? (
        <>
          <div className="decor-scene decor-scene-left muted-art">
            <UiWindowsArt />
          </div>
          <div className="decor-side decor-side-right">
            <CodeWindow title="app.js" lines={['render(App)', 'state = tasks', 'ship()']} />
          </div>
        </>
      ) : null}

      {variant === 'education' ? (
        <>
          <div className="decor-scene decor-scene-left muted-art">
            <GraduationArt />
          </div>
          <div className="decor-side decor-side-right">
            <CodeWindow title="degree.md" lines={['BE Computer Science', 'CGPA 8.3', 'always learning']} />
          </div>
        </>
      ) : null}

      {variant === 'contact' ? (
        <>
          <div className="decor-scene decor-scene-left muted-art">
            <PaperPlaneArt />
          </div>
          <div className="decor-side decor-side-right">
            <CodeWindow title="ping.sh" lines={['$ send --hello', 'opening mail…', 'ready.']} />
          </div>
        </>
      ) : null}

      {variant === 'home' ? (
        <>
          <div className="decor-side decor-side-right">
            <CodeWindow title="api.http" lines={['GET /health 200', 'POST /auth 201', 'ready: true']} />
          </div>
          <div className="decor-scene decor-scene-right muted-art">
            <NetworkArt />
          </div>
        </>
      ) : null}
    </div>
  )
}
