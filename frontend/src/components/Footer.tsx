import React from 'react'
import { motion } from 'framer-motion'
import { 
  HiPhone, 
  HiEnvelope, 
  HiMapPin,
  HiHeart
} from 'react-icons/hi2'
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn,
  FaWhatsapp
} from 'react-icons/fa'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    'Wedding Catering',
    'Corporate Events',
    'Private Parties',
    'Festival Catering',
    'Live Counters',
    'Event Planning'
  ]

  const socialLinks = [
    { icon: FaFacebookF, href: '#', color: 'hover:text-blue-600' },
    { icon: FaInstagram, href: '#', color: 'hover:text-pink-600' },
    { icon: FaTwitter, href: '#', color: 'hover:text-blue-400' },
    { icon: FaLinkedinIn, href: '#', color: 'hover:text-blue-700' },
    { icon: FaWhatsapp, href: '#', color: 'hover:text-green-600' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 blueprint-container opacity-10" />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto px-4 sm:px-6 py-12 sm:py-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="line-art-border p-3 sm:p-4 mb-4 sm:mb-6"
              >
                <h3 className="text-xl sm:text-2xl font-serif font-bold mb-2">
                  <span className="color-accent text-accent-400">Sadguru</span> Catering
                </h3>
                <p className="technical-text text-xs text-blueprint-400 hidden sm:block">
                  traditional · modern · exquisite
                </p>
              </motion.div>
              
              <p className="text-slate-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Crafting unforgettable culinary experiences with authentic Indian flavors 
                and contemporary presentation for over 15 years.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-slate-300"
                >
                  <HiPhone className="text-accent-400 flex-shrink-0" />
                  <a 
                    href="tel:+917702638605"
                    className="hover:text-accent-400 transition-colors duration-300"
                  >
                    +91 7702638605
                  </a>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-slate-300"
                >
                  <HiEnvelope className="text-accent-400 flex-shrink-0" />
                  <a 
                    href="mailto:saivamshik11@gmail.com"
                    className="hover:text-accent-400 transition-colors duration-300"
                  >
                    saivamshik11@gmail.com
                  </a>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-3 text-slate-300"
                >
                  <HiMapPin className="text-accent-400 flex-shrink-0 mt-1" />
                  <a 
                    href="https://maps.app.goo.gl/tvwNgBprJq6UNUiy5" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-accent-400 transition-colors duration-300"
                  >
                    View Our Location<br />
                    <span className="text-sm text-slate-400">Serving Hyderabad & Surrounding Areas</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg sm:text-xl font-serif font-bold mb-4 sm:mb-6 text-blueprint-300">
                Quick Links
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5, color: '#f59e0b' }}
                      className="text-slate-300 hover:text-accent-400 transition-colors duration-300 block py-1"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-serif font-bold mb-6 text-blueprint-300">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="text-slate-300 hover:text-accent-400 transition-colors duration-300 block py-1 cursor-pointer"
                    >
                      {service}
                    </motion.span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter & Social */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-serif font-bold mb-6 text-blueprint-300">
                Stay Connected
              </h4>
              
              {/* Newsletter Signup */}
              <div className="mb-8">
                <p className="text-slate-300 mb-4">
                  Subscribe to our newsletter for exclusive offers and culinary insights.
                </p>
                <div className="space-y-3">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all duration-300"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white py-3 rounded-lg font-semibold hover:shadow-accent-glow transition-all duration-300"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-slate-300 mb-4">Follow us on social media:</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-slate-300 ${social.color} transition-all duration-300 hover:shadow-lg`}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-slate-700"
        >
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-2 text-slate-400"
              >
                <span>© {currentYear} Sadguru Catering. Made with</span>
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    color: ['#ef4444', '#f59e0b', '#ef4444']
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <HiHeart className="text-red-500" />
                </motion.div>
                <span>in Hyderabad</span>
              </motion.div>

              {/* Additional Links */}
              <div className="flex space-x-6 text-sm text-slate-400">
                <motion.a
                  href="#"
                  whileHover={{ color: '#f59e0b', y: -2 }}
                  className="hover:text-accent-400 transition-all duration-300"
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ color: '#f59e0b', y: -2 }}
                  className="hover:text-accent-400 transition-all duration-300"
                >
                  Terms of Service
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ color: '#f59e0b', y: -2 }}
                  className="hover:text-accent-400 transition-all duration-300"
                >
                  Sitemap
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
