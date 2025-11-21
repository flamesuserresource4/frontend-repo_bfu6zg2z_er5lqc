import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Flag, School, Shield } from 'lucide-react'

const steps = [
  { icon: Flag, title: 'Oman', desc: 'Where it all began — peace, sunsets, and dreams.', color: 'from-pink-300 to-fuchsia-300' },
  { icon: MapPin, title: 'India', desc: 'A new chapter — growth, culture, and possibilities.', color: 'from-violet-300 to-purple-300' },
  { icon: School, title: 'College', desc: 'New Prince Shri Bhavani College of Engineering and Technology', color: 'from-amber-200 to-pink-200' },
  { icon: Shield, title: 'Cybersecurity', desc: 'Protecting the future with code, curiosity, and courage.', color: 'from-indigo-300 to-emerald-300' },
]

function Timeline() {
  return (
    <section className="relative py-24 sm:py-28 md:py-32 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center mb-12">
          Her Journey
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl p-6 bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-md mb-4`}>
                <s.icon className="w-8 h-8 text-slate-800" />
              </div>
              <h3 className="font-bold text-xl text-slate-900">{s.title}</h3>
              <p className="text-slate-700 mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 -bottom-20 h-40 bg-gradient-to-b from-transparent to-white"></div>
    </section>
  )
}

export default Timeline
