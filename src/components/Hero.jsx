import React, { useEffect, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'

function Hero() {
  const [showConfetti, setShowConfetti] = useState(true)
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let w, h, raf

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const colors = ['#ffd1e8','#fbcfe8','#f5d0fe','#e9d5ff','#fde68a','#a78bfa']
    const confetti = Array.from({ length: 130 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * -h,
      r: 4 + Math.random() * 6,
      c: colors[Math.floor(Math.random() * colors.length)],
      vx: -1 + Math.random() * 2,
      vy: 2 + Math.random() * 3,
      rot: Math.random() * Math.PI,
      vr: -0.05 + Math.random() * 0.1,
    }))

    const draw = () => {
      ctx.clearRect(0,0,w,h)
      confetti.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        p.rot += p.vr
        if (p.y - 10 > h) {
          p.y = -10
          p.x = Math.random() * w
        }
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.fillStyle = p.c
        ctx.fillRect(-p.r/2, -p.r/2, p.r, p.r)
        ctx.restore()
      })
      raf = requestAnimationFrame(draw)
    }

    if (showConfetti) raf = requestAnimationFrame(draw)

    const timer = setTimeout(() => setShowConfetti(false), 5000)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(timer)
      window.removeEventListener('resize', resize)
    }
  }, [showConfetti])

  useEffect(() => {
    // particles.js subtle stars over hero (CDN loaded globally)
    if (window.particlesJS) {
      window.particlesJS('hero-particles', {
        particles: {
          number: { value: 60 },
          color: { value: ['#ffffff','#fde68a','#f5d0fe'] },
          shape: { type: 'circle' },
          opacity: { value: 0.3 },
          size: { value: 2 },
          move: { enable: true, speed: 0.6 },
          line_linked: { enable: false },
        },
        interactivity: { events: { onhover: { enable: false }, onclick: { enable: false } } },
        retina_detect: true,
      })
    }
  }, [])

  return (
    <section id="home" className="relative min-h-[100vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/kqB-rdL4TCJ7pyGb/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div id="hero-particles" className="absolute inset-0 pointer-events-none"></div>

      {showConfetti && (
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none"></canvas>
      )}

      <div className="relative z-10 flex items-center justify-center min-h-[100vh] px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-[0_0_30px_rgba(255,255,255,0.25)]">
              <Sparkles className="w-4 h-4" />
              A magical birthday surprise
            </div>
          </motion.div>

          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1.2 }} className="mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_10px_30px_rgba(236,72,153,0.35)]">
            Ruth John
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.9 }} className="mt-4 text-lg sm:text-xl text-white/90">
            A Website Made With Love – By Your Senior, Santhoshkumar
          </motion.p>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, type: 'spring', stiffness: 60 }} className="mt-10 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-400 text-slate-900 font-semibold shadow-lg hover:shadow-xl">
            <Heart className="w-5 h-5" />
            Happy Birthday, Ruth!
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="mt-10 text-white/80 text-sm">
            Scroll down to explore
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
    </section>
  )
}

export default Hero
