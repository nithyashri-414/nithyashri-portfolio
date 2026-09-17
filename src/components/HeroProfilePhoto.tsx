import { useEffect, useRef, useState } from 'react'
import profileImg from '../assets/profile.png'

function luma(r: number, g: number, b: number) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

function maxChannel(r: number, g: number, b: number) {
  return Math.max(r, g, b)
}

function clamp(value: number) {
  return value < 0 ? 0 : value > 255 ? 255 : value
}

function isStudioBlack(r: number, g: number, b: number) {
  return maxChannel(r, g, b) <= 18 && luma(r, g, b) <= 14
}

function applyStudioCutout(ctx: CanvasRenderingContext2D, width: number, height: number) {
  const frame = ctx.getImageData(0, 0, width, height)
  const pixels = frame.data
  const seen = new Uint8Array(width * height)
  const queue = new Int32Array(width * height)
  let head = 0
  let tail = 0

  const enqueue = (x: number, y: number) => {
    if (x < 0 || y < 0 || x >= width || y >= height) return
    const index = y * width + x
    if (seen[index]) return
    const offset = index * 4
    if (!isStudioBlack(pixels[offset], pixels[offset + 1], pixels[offset + 2])) return
    seen[index] = 1
    queue[tail++] = index
  }

  for (let x = 0; x < width; x += 1) enqueue(x, 0)
  for (let y = 0; y < height; y += 1) {
    enqueue(0, y)
    enqueue(width - 1, y)
  }
  const bottomMargin = Math.floor(width * 0.17)
  for (let x = 0; x < width; x += 1) {
    if (x < bottomMargin || x > width - bottomMargin) enqueue(x, height - 1)
  }

  while (head < tail) {
    const index = queue[head++]
    const x = index % width
    const y = (index / width) | 0
    pixels[index * 4 + 3] = 0
    enqueue(x - 1, y)
    enqueue(x + 1, y)
    enqueue(x, y - 1)
    enqueue(x, y + 1)
  }

  const hairLimit = Math.floor(height * 0.68)
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = y * width + x
      const offset = index * 4
      if (pixels[offset + 3] === 0) continue

      const touchesClear =
        (x > 0 && pixels[(index - 1) * 4 + 3] === 0) ||
        (x + 1 < width && pixels[(index + 1) * 4 + 3] === 0) ||
        (y > 0 && pixels[(index - width) * 4 + 3] === 0) ||
        (y + 1 < height && pixels[(index + width) * 4 + 3] === 0)
      if (!touchesClear) continue

      const r = pixels[offset]
      const g = pixels[offset + 1]
      const b = pixels[offset + 2]
      const brightness = luma(r, g, b)
      const sat = maxChannel(r, g, b) - Math.min(r, g, b)

      if (y < hairLimit && brightness > 52 && sat < 48) {
        pixels[offset + 3] = 0
        continue
      }
      if (y < hairLimit && brightness > 42 && sat < 22) {
        pixels[offset + 3] = Math.round(pixels[offset + 3] * 0.2)
      }
    }
  }

  const faded = new Uint8ClampedArray(pixels)
  const radius = 2
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = y * width + x
      const offset = index * 4
      if (pixels[offset + 3] === 0) continue

      let nearest = radius + 1
      outer: for (let dy = -radius; dy <= radius; dy += 1) {
        for (let dx = -radius; dx <= radius; dx += 1) {
          const nx = x + dx
          const ny = y + dy
          if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue
          if (pixels[(ny * width + nx) * 4 + 3] !== 0) continue
          const dist = Math.hypot(dx, dy)
          if (dist < nearest) nearest = dist
          if (nearest <= 1) break outer
        }
      }

      if (nearest <= radius) {
        faded[offset + 3] = Math.round(pixels[offset + 3] * Math.min(1, (nearest - 0.25) / radius))
      }
    }
  }

  const fadeStart = Math.floor(height * 0.86)
  for (let y = 0; y < height; y += 1) {
    const bottomFade = y < fadeStart ? 1 : 1 - (y - fadeStart) / (height - fadeStart)
    for (let x = 0; x < width; x += 1) {
      const offset = (y * width + x) * 4
      const alpha = faded[offset + 3]
      if (alpha === 0) {
        pixels[offset + 3] = 0
        continue
      }

      const contrast = 1.12
      const lift = 10
      pixels[offset] = clamp((faded[offset] - 128) * contrast + 128 + lift)
      pixels[offset + 1] = clamp((faded[offset + 1] - 128) * contrast + 128 + lift)
      pixels[offset + 2] = clamp((faded[offset + 2] - 128) * contrast + 128 + lift)
      pixels[offset + 3] = Math.round(alpha * bottomFade)
    }
  }

  ctx.putImageData(frame, 0, 0)
}

function cropCanvasToSubject(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  const width = canvas.width
  const height = canvas.height
  const pixels = ctx.getImageData(0, 0, width, height).data

  let minX = width
  let minY = height
  let maxX = 0
  let maxY = 0

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      if (pixels[(y * width + x) * 4 + 3] < 10) continue
      if (x < minX) minX = x
      if (y < minY) minY = y
      if (x > maxX) maxX = x
      if (y > maxY) maxY = y
    }
  }

  if (maxX <= minX || maxY <= minY) return

  const padX = Math.max(4, Math.round(width * 0.012))
  const padY = Math.max(4, Math.round(height * 0.012))
  minX = Math.max(0, minX - padX)
  minY = Math.max(0, minY - padY)
  maxX = Math.min(width - 1, maxX + padX)
  maxY = Math.min(height - 1, maxY + padY)

  const cropW = maxX - minX + 1
  const cropH = maxY - minY + 1
  if (cropW >= width - 2 && cropH >= height - 2) return

  const cropped = ctx.getImageData(minX, minY, cropW, cropH)
  canvas.width = cropW
  canvas.height = cropH
  ctx.clearRect(0, 0, cropW, cropH)
  ctx.putImageData(cropped, 0, 0)
}

export function HeroProfilePhoto() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mode, setMode] = useState<'loading' | 'cutout' | 'fallback'>('loading')

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { willReadFrequently: true, alpha: true })
    if (!ctx) {
      setMode('fallback')
      return
    }

    let cancelled = false

    const run = async () => {
      try {
        const response = await fetch(profileImg)
        const blob = await response.blob()
        const bitmap = await createImageBitmap(blob)
        if (cancelled) {
          bitmap.close()
          return
        }

        canvas.width = bitmap.width
        canvas.height = bitmap.height
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(bitmap, 0, 0)
        bitmap.close()
        applyStudioCutout(ctx, canvas.width, canvas.height)
        cropCanvasToSubject(canvas, ctx)
        if (!cancelled) setMode('cutout')
      } catch {
        if (!cancelled) setMode('fallback')
      }
    }

    void run()
    return () => {
      cancelled = true
    }
  }, [])

  if (mode === 'fallback') {
    return (
      <img
        src={profileImg}
        className="hero-photo is-ready is-fallback"
        alt="Portrait of Nithyashri M, Backend Developer"
      />
    )
  }

  return (
    <canvas
      ref={canvasRef}
      className={`hero-photo${mode === 'loading' ? '' : ' is-ready'}`}
      role="img"
      aria-label="Portrait of Nithyashri M, Backend Developer"
    />
  )
}
