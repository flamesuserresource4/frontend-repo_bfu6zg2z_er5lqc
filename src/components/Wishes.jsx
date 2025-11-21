import React from 'react'
import { motion } from 'framer-motion'

function Wishes() {
  return (
    <section className="relative py-24 bg-[radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.12),transparent_50%)]">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.h2 initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent">
          You deserve happiness, success, peace — and a future filled with every dream you chase.
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-6 text-xl text-slate-700">
          Happy Birthday, Ruth. You are special.
        </motion.p>
      </div>
    </section>
  )
}

export default Wishes
