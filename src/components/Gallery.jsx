import React from 'react'
import { motion } from 'framer-motion'

function Gallery() {
  const frames = new Array(6).fill(0)
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center mb-10">Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {frames.map((_, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group relative rounded-3xl overflow-hidden bg-white/70 border border-white/60 shadow-lg">
              <div className="aspect-[4/5] grid place-items-center">
                <div className="text-slate-400 text-center text-sm px-6">Add a lovely photo here</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-fuchsia-200/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
