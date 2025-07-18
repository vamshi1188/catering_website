import React from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen blueprint-container selective-color relative">
      {/* Enhanced Blueprint Overlay */}
      <div className="blueprint-overlay opacity-30" />
      
      {/* Floating Geometric Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-32 h-32 border border-blueprint-300/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-accent-300/20 rotate-45 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border border-sage-300/20 rounded-lg animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 border border-blueprint-300/10 rounded-full animate-pulse delay-700"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <Header />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
        <Footer />
      </motion.div>
    </div>
  )
}

export default App
