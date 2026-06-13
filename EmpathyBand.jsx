import { useEffect, useRef } from 'react'
import styles from './WaveCanvas.module.css'

const waves = [
  { amp: 85,  freq: 0.0018, speed: 0.0004, yBase: 0.36, alpha: 0.20, color: [245, 242, 255] },
  { amp: 65,  freq: 0.0022, speed: 0.0006, yBase: 0.50, alpha: 0.16, color: [235, 240, 255] },
  { amp: 105, freq: 0.0014, speed: 0.0003, yBase: 0.62, alpha: 0.13, color: [240, 235, 255] },
  { amp: 50,  freq: 0.003,  speed: 0.0009, yBase: 0.74, alpha: 0.18, color: [250, 248, 255] },
  { amp: 75,  freq: 0.002,  speed: 0.0005, yBase: 0.84, alpha: 0.11, color: [245, 250, 255] },
]

function drawWave(ctx, wave, time, W, H) {
  const yBase = wave.yBase * H
  ctx.beginPath()
  ctx.moveTo(0, H)
  for (let x = 0; x <= W; x += 3) {
    const y = yBase
      + Math.sin(x * wave.freq + time * wave.speed * 1000) * wave.amp
      + Math.sin(x * wave.freq * 1.7 + time * wave.speed * 700 + 1.2) * (wave.amp * 0.4)
      + Math.sin(x * wave.freq * 0.5 + time * wave.speed * 400 + 2.5) * (wave.amp * 0.25)
    ctx.lineTo(x, y)
  }
  ctx.lineTo(W, H)
  ctx.closePath()
  const [r, g, b] = wave.color
  ctx.fillStyle = `rgba(${r},${g},${b},${wave.alpha})`
  ctx.fill()
}

export default function WaveCanvas() {
  const canvasRef = useRef(null)
  const frameRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W, H

    function resize() {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function animate(timestamp) {
      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = '#f6f4f0'
      ctx.fillRect(0, 0, W, H)

      // Faint blue-to-purple-to-magenta shimmer at top
      const shimmer = ctx.createLinearGradient(0, 0, W, H * 0.5)
      shimmer.addColorStop(0, 'rgba(42,107,194,0.04)')
      shimmer.addColorStop(0.5, 'rgba(123,63,160,0.035)')
      shimmer.addColorStop(1, 'rgba(192,48,106,0.02)')
      ctx.fillStyle = shimmer
      ctx.fillRect(0, 0, W, H)

      waves.forEach(w => drawWave(ctx, w, timestamp, W, H))

      frameRef.current = requestAnimationFrame(animate)
    }
    frameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.waveCanvas} />
}
