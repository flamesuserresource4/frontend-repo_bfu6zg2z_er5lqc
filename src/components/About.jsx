import React from 'react'
import { motion } from 'framer-motion'

const Section = ({ children }) => (
  <section className="relative py-24 sm:py-28 md:py-32">
    <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(236,72,153,0.15),transparent_40%)]"></div>
    <div className="container mx-auto px-6 max-w-6xl">{children}</div>
  </section>
)

function About() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            From Oman to Cybersecurity
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            From the beautiful landscapes of Oman to the world of Cybersecurity in India, Ruth's journey shines with grace and ambition. She is a sweet, calm, and loving soul — yet fiercely driven to build a brighter future. Currently in her 2nd year pursuing B.E CSE (Cybersecurity) at New Prince Shri Bhavani College of Engineering and Technology.
          </p>
          <div className="grid grid-cols-3 gap-3">
            {['/assets/oman1.jpg','/assets/oman2.jpg','/assets/oman3.jpg'].map((src, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <img src={src} alt="Oman" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-pink-200 via-violet-200 to-amber-100 blur-2xl opacity-70"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img src="/assets/oman-hero.jpg" alt="Oman Landscape" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default About
