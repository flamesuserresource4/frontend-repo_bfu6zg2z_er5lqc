import React, { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Wishes from './components/Wishes'
import Cyber from './components/Cyber'
import Gallery from './components/Gallery'
import Dedication from './components/Dedication'
import Navbar from './components/Navbar'

function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href').substring(1)
      const el = document.getElementById(id)
      if (el) {
        e.preventDefault()
        window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="journey"><Timeline /></div>
      <div id="wishes"><Wishes /></div>
      <div id="cyber"><Cyber /></div>
      <div id="gallery"><Gallery /></div>
      <div id="thanks"><Dedication /></div>
      <footer className="py-10 text-center text-slate-500 text-sm">With love — Santhoshkumar</footer>
    </div>
  )
}

export default App
