import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Laptop } from 'lucide-react'

function MatrixBackground() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let w, h, raf
    const chars = '01⚡❤️☾✦★★✧✦✳︎❖❥❣︎❦'
    let drops = []

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = 260
      const cols = Math.floor(w / 14)
      drops = new Array(cols).fill(0)
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      ctx.fillStyle = 'rgba(5, 3, 22, .2)'
      ctx.fillRect(0, 0, w, h)
      ctx.fillStyle = '#d946ef'
      ctx.font = '14px monospace'
      drops.forEach((y, i) => {
        const text = chars[Math.floor(Math.random() * chars.length)]
        const x = i * 14
        ctx.fillText(text, x, y)
        drops[i] = y > h && Math.random() > 0.975 ? 0 : y + 14
      })
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])
  return <canvas ref={ref} className="w-full rounded-2xl"></canvas>
}

function Cyber() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-violet-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">Cybersecurity Vibes</h2>
            <p className="text-slate-700 mb-6">Futuristic, glowing, and powerful — just like your field. Keep hacking for good, securing systems, and inspiring others.</p>
            <div className="grid grid-cols-3 gap-3">
              {[Shield, Lock, Laptop].map((Icon, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl p-4 bg-white/70 backdrop-blur-xl border border-white/60 shadow">
                  <Icon className="w-8 h-8 text-fuchsia-600" />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-fuchsia-200 via-violet-200 to-pink-100 blur-2xl opacity-70"></div>
            <div className="relative bg-slate-900 rounded-3xl p-4 shadow-xl border border-fuchsia-400/20">
              <MatrixBackground />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cyber
