import React from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

function Dedication() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-violet-50 to-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.12),transparent_50%)]"></div>
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-2xl sm:text-3xl leading-relaxed text-slate-800 font-medium">
          Made with heart, respect, and admiration —
          <br />
          By your senior,
          <br />
          <span className="font-extrabold bg-gradient-to-r from-fuchsia-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">Santhoshkumar</span>.
        </motion.p>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/70 backdrop-blur-sm border border-fuchsia-300/40 text-fuchsia-700 shadow">
          <Heart className="w-5 h-5" />
          With love
        </motion.div>
      </div>
    </section>
  )
}

export default Dedication
