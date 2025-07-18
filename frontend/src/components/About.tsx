import React from 'react'
import { motion } from 'framer-motion'
import { HiHeart, HiSparkles, HiTrophy } from 'react-icons/hi2'

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const features = [
    {
      icon: HiHeart,
      title: "Traditional Recipes",
      description: "Authentic Indian cuisine passed down through generations, prepared with love and the finest ingredients.",
      color: "accent"
    },
    {
      icon: HiSparkles,
      title: "Modern Presentation",
      description: "Contemporary plating techniques and sophisticated presentation that transforms every meal into art.",
      color: "blueprint"
    },
    {
      icon: HiTrophy,
      title: "Premium Quality",
      description: "Award-winning service and uncompromising quality standards that exceed expectations every time.",
      color: "sage"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 indian-pattern opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="technical-text text-blueprint-600 mb-4">
              Meet Master Chef Saraiah
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-800 mb-6">
              Crafting Culinary
              <span className="color-accent text-accent-600 block">Masterpieces</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl font-medium text-slate-700 mb-6 italic">
                "Cooking is not just about feeding the body, it's about nourishing the soul"
              </p>
              <p className="text-xl text-slate-600 leading-relaxed">
                With over two decades of culinary expertise, Chef Saraiah brings passion, creativity, 
                and authentic flavors to every dish. His journey through traditional cooking techniques 
                combined with modern innovation has made Sadguru Catering a name synonymous with excellence.
              </p>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="line-art-border p-8 glass-effect rounded-2xl">
                <h3 className="text-3xl font-serif font-bold text-slate-800 mb-6">
                  Chef Saraiah's Journey
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  From humble beginnings to becoming a master of his craft, Chef Saraiah believes that 
                  great food starts with great ingredients, loving preparation, and the joy of sharing 
                  memorable meals with others. His approach combines the wisdom of traditional cooking 
                  methods with innovative presentation techniques.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                    <p className="text-slate-600">
                      <span className="font-semibold color-accent text-accent-600">Authenticity:</span> Every dish 
                      tells a story rooted in Indian culinary heritage
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full bg-blueprint-500 mt-2 flex-shrink-0" />
                    <p className="text-slate-600">
                      <span className="font-semibold text-blueprint-600">Innovation:</span> Modern techniques 
                      that enhance traditional flavors
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 rounded-full bg-sage-500 mt-2 flex-shrink-0" />
                    <p className="text-slate-600">
                      <span className="font-semibold text-sage-600">Excellence:</span> Uncompromising 
                      standards in every aspect of service
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Visual Element */}
            <motion.div variants={itemVariants} className="relative">
              <div className="line-art-border p-8 glass-effect rounded-2xl">
                <div className="relative h-96 rounded-xl overflow-hidden">
                  {/* Chef Image */}
                  <img 
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=800&fit=crop&crop=center"
                    alt="Master Chef Saraiah"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay with Chef Info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-center"
                      >
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-accent-400 to-blueprint-500 flex items-center justify-center">
                          <HiSparkles className="text-2xl text-white" />
                        </div>
                        <h4 className="text-xl font-serif font-bold mb-2">Master Chef Saraiah</h4>
                        <p className="technical-text text-sm text-accent-300">
                          20+ Years of Culinary Excellence
                        </p>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Decorative Border */}
                  <div className="absolute inset-2 border-2 border-white/20 rounded-lg pointer-events-none" />
                  
                  {/* Decorative Elements */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute top-4 right-4 w-8 h-8 border-2 border-accent-400 rounded-full opacity-60"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-4 left-4 w-6 h-6 border-2 border-blueprint-400 rounded-full opacity-60"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="line-art-border p-6 glass-effect rounded-xl text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r 
                    ${feature.color === 'accent' ? 'from-accent-400 to-accent-600' : 
                      feature.color === 'blueprint' ? 'from-blueprint-400 to-blueprint-600' : 
                      'from-sage-400 to-sage-600'} 
                    flex items-center justify-center shadow-lg`}
                >
                  <feature.icon className="text-2xl text-white" />
                </motion.div>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">
                  {feature.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
