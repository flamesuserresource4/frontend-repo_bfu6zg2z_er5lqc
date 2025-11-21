import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Music2 } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [audio, setAudio] = useState(null)

  useEffect(() => {
    const a = new Audio('/assets/bgm.mp3')
    a.loop = true
    setAudio(a)
    return () => a.pause()
  }, [])

  const toggleMusic = () => {
    if (!audio) return
    if (playing) { audio.pause() } else { audio.play() }
    setPlaying(!playing)
  }

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#journey', label: 'Journey' },
    { href: '#wishes', label: 'Wishes' },
    { href: '#cyber', label: 'Cyber' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#thanks', label: 'Dedication' },
  ]

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4 py-3 mt-4">
        <div className="rounded-full bg-white/60 backdrop-blur-xl border border-white/80 shadow-lg px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-extrabold text-slate-800 tracking-tight">Ruth • 21</a>
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-slate-700 hover:text-fuchsia-600 transition-colors text-sm">{l.label}</a>
            ))}
            <button onClick={toggleMusic} className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm ${playing ? 'text-fuchsia-700 border-fuchsia-300 bg-fuchsia-100' : 'text-slate-700 border-slate-300/70 hover:bg-slate-100'}`}>
              <Music2 className="w-4 h-4" /> {playing ? 'Pause' : 'Play'}
            </button>
          </div>

          <button onClick={() => setOpen(true)} className="md:hidden p-2 rounded-full hover:bg-slate-100">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-white/80 backdrop-blur-md">
            <div className="max-w-sm mx-auto mt-8 bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="font-extrabold text-slate-900">Menu</div>
                <button onClick={() => setOpen(false)} className="p-2 rounded-full hover:bg-slate-100"><X className="w-5 h-5" /></button>
              </div>
              <div className="grid gap-3">
                {links.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-xl bg-slate-50 hover:bg-fuchsia-50 text-slate-800">{l.label}</a>
                ))}
                <button onClick={toggleMusic} className={`mt-2 inline-flex items-center gap-2 px-3 py-2 rounded-xl border ${playing ? 'text-fuchsia-700 border-fuchsia-300 bg-fuchsia-100' : 'text-slate-700 border-slate-300/70 hover:bg-slate-100'}`}>
                  <Music2 className="w-4 h-4" /> {playing ? 'Pause music' : 'Play music'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
