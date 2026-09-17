export function ParticleField() {
  return (
    <div className="decor-particles">
      {Array.from({ length: 20 }, (_, index) => (
        <span key={index} className={`decor-dot d${index}`} />
      ))}
    </div>
  )
}

export function LaptopArt() {
  return (
    <svg className="scene-art" viewBox="0 0 320 220" fill="none" aria-hidden="true">
      <rect x="38" y="28" width="244" height="148" rx="14" stroke="currentColor" strokeWidth="2" />
      <rect x="52" y="42" width="216" height="112" rx="8" fill="currentColor" opacity="0.08" />
      <path d="M64 58h88M64 74h132M64 90h70M64 106h104" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.55" />
      <rect x="18" y="176" width="284" height="18" rx="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="248" cy="64" r="18" stroke="currentColor" strokeWidth="2" opacity="0.7" />
    </svg>
  )
}

export function NetworkArt() {
  return (
    <svg className="scene-art" viewBox="0 0 280 220" fill="none" aria-hidden="true">
      <circle cx="48" cy="48" r="16" stroke="currentColor" strokeWidth="2" />
      <circle cx="232" cy="64" r="14" stroke="currentColor" strokeWidth="2" />
      <circle cx="140" cy="118" r="22" stroke="currentColor" strokeWidth="2" />
      <circle cx="64" cy="176" r="12" stroke="currentColor" strokeWidth="2" />
      <circle cx="214" cy="172" r="16" stroke="currentColor" strokeWidth="2" />
      <path d="M64 56 L124 108 M156 108 L220 72 M128 136 L74 168 M158 136 L202 162" stroke="currentColor" strokeWidth="1.6" opacity="0.7" />
    </svg>
  )
}

export function DatabaseArt() {
  return (
    <svg className="scene-art" viewBox="0 0 180 220" fill="none" aria-hidden="true">
      <ellipse cx="90" cy="42" rx="54" ry="18" stroke="currentColor" strokeWidth="2" />
      <path d="M36 42v46c0 10 24 18 54 18s54-8 54-18V42" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="90" cy="118" rx="54" ry="18" stroke="currentColor" strokeWidth="2" />
      <path d="M36 118v46c0 10 24 18 54 18s54-8 54-18v-46" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export function GraduationArt() {
  return (
    <svg className="scene-art" viewBox="0 0 260 200" fill="none" aria-hidden="true">
      <path d="M28 86 L130 42 L232 86 L130 128 Z" stroke="currentColor" strokeWidth="2" />
      <path d="M78 104 v38 c18 14 86 14 104 0 v-38" stroke="currentColor" strokeWidth="2" />
      <path d="M232 86 v46" stroke="currentColor" strokeWidth="2" />
      <circle cx="232" cy="138" r="8" stroke="currentColor" strokeWidth="2" />
      <rect x="96" y="148" width="68" height="28" rx="4" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export function PaperPlaneArt() {
  return (
    <svg className="scene-art paper-plane-art" viewBox="0 0 280 180" fill="none" aria-hidden="true">
      <path d="M36 92 L244 36 L148 150 L124 96 Z" stroke="currentColor" strokeWidth="2" />
      <path d="M124 96 L244 36 L164 88" stroke="currentColor" strokeWidth="2" />
      <path d="M48 132 C 90 118, 140 148, 188 128" stroke="currentColor" strokeWidth="1.6" strokeDasharray="5 7" />
    </svg>
  )
}

export function UiWindowsArt() {
  return (
    <svg className="scene-art" viewBox="0 0 280 210" fill="none" aria-hidden="true">
      <rect x="18" y="24" width="170" height="110" rx="12" stroke="currentColor" strokeWidth="2" />
      <circle cx="38" cy="44" r="4" fill="currentColor" />
      <circle cx="52" cy="44" r="4" fill="currentColor" opacity="0.6" />
      <circle cx="66" cy="44" r="4" fill="currentColor" opacity="0.35" />
      <rect x="36" y="64" width="96" height="8" rx="4" fill="currentColor" opacity="0.35" />
      <rect x="36" y="82" width="132" height="8" rx="4" fill="currentColor" opacity="0.2" />
      <rect x="92" y="78" width="168" height="112" rx="12" stroke="currentColor" strokeWidth="2" />
      <rect x="112" y="102" width="52" height="52" rx="10" stroke="currentColor" strokeWidth="2" />
      <rect x="176" y="102" width="64" height="16" rx="8" fill="currentColor" opacity="0.28" />
      <rect x="176" y="128" width="48" height="16" rx="8" fill="currentColor" opacity="0.18" />
    </svg>
  )
}
