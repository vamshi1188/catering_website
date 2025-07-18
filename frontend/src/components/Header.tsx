import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiBars3, HiXMark } from 'react-icons/hi2'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="line-art-border p-3"
          >
            <h1 className="text-2xl font-serif font-bold text-blueprint-700">
              <span className="color-accent text-accent-600">Sadguru</span> Catering
            </h1>
            <p className="technical-text text-xs text-blueprint-500 mt-1">
              traditional · modern · exquisite
            </p>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{ scale: 1.1, color: '#f59e0b' }}
                className="text-slate-700 hover:text-accent-500 font-medium transition-colors duration-300"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blueprint-600 to-blueprint-700 text-white px-6 py-3 rounded-lg shadow-blueprint hover:shadow-accent-glow transition-all duration-300 font-medium"
            >
              Book Now
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-blueprint-700 p-2"
          >
            {isMenuOpen ? <HiXMark size={24} /> : <HiBars3 size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: isMenuOpen ? 0 : -50, opacity: isMenuOpen ? 1 : 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
                className="block text-slate-700 hover:text-accent-500 font-medium py-2 px-4 rounded-lg hover:bg-blueprint-50 transition-all duration-300"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: isMenuOpen ? 0 : -50, opacity: isMenuOpen ? 1 : 0 }}
              transition={{ delay: navItems.length * 0.1 }}
              className="w-full bg-gradient-to-r from-blueprint-600 to-blueprint-700 text-white px-6 py-3 rounded-lg shadow-blueprint hover:shadow-accent-glow transition-all duration-300 font-medium"
            >
              Book Now
            </motion.button>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  )
}

export default Header
