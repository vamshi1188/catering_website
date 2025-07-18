import React from 'react'
import { motion } from 'framer-motion'
import { HiPlay, HiSparkles } from 'react-icons/hi2'

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section indian-pattern">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-100 to-blueprint-100 px-6 py-3 rounded-full mb-8 shadow-lg"
          >
            <HiSparkles className="text-accent-500" />
            <span className="technical-text text-blueprint-700">
              Premium Catering Services
            </span>
            <HiSparkles className="text-accent-500" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold mb-6 leading-tight"
          >
            <span className="text-blueprint-800">Culinary</span>
            <br />
            <span className="color-accent text-accent-600 relative">
              Excellence
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, delay: 1.8 }}
                className="absolute bottom-1 sm:bottom-2 left-0 h-0.5 sm:h-1 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed px-4"
          >
            Where traditional Indian flavors meet modern presentation under the expert guidance of 
            <span className="text-blueprint-700 font-semibold"> Master Chef Saraiah</span>. 
            Creating unforgettable dining experiences with 
            <span className="color-accent text-accent-600 font-semibold"> authentic recipes</span> and 
            <span className="text-blueprint-700 font-semibold"> innovative design</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(245, 158, 11, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-accent-glow transition-all duration-300 font-semibold text-base sm:text-lg"
            >
              Explore Menu
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center space-x-3 glass-effect px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-blueprint transition-all duration-300 font-semibold text-base sm:text-lg text-blueprint-700"
            >
              <HiPlay className="text-accent-500" />
              <span>Watch Story</span>
            </motion.button>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 2.5 }}
            className="relative max-w-3xl mx-auto px-4"
          >
            <div className="line-art-border p-4 sm:p-6 md:p-8 glass-effect rounded-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-center">
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 rounded-full bg-gradient-to-r from-blueprint-400 to-blueprint-600 flex items-center justify-center"
                  >
                    <span className="text-white font-bold text-sm sm:text-base md:text-xl">15+</span>
                  </motion.div>
                  <p className="technical-text text-blueprint-600 text-sm sm:text-base">Years Experience</p>
                </div>
                
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 rounded-full bg-gradient-to-r from-accent-400 to-accent-600 flex items-center justify-center"
                  >
                    <span className="text-white font-bold text-sm sm:text-base md:text-xl">500+</span>
                  </motion.div>
                  <p className="technical-text text-accent-600 text-sm sm:text-base">Events Catered</p>
                </div>
                
                <div className="text-center">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 rounded-full bg-gradient-to-r from-sage-400 to-sage-600 flex items-center justify-center"
                  >
                    <span className="text-white font-bold text-sm sm:text-base md:text-xl">99%</span>
                  </motion.div>
                  <p className="technical-text text-sage-600 text-sm sm:text-base">Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements - Hidden on mobile for better performance */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 w-8 h-8 border-2 border-accent-400 rounded-full opacity-30 hidden md:block"
      />
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        className="absolute top-40 right-20 w-6 h-6 border-2 border-blueprint-400 rounded-full opacity-30 hidden md:block"
      />
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        className="absolute bottom-40 left-20 w-10 h-10 border-2 border-sage-400 rounded-full opacity-30 hidden md:block"
      />
    </section>
  )
}

export default Hero
