import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiXMark, HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Gallery items with Indian catering images
  const galleryItems = [
    {
      id: 1,
      title: "Traditional Wedding Spread",
      category: "Wedding",
      description: "Elaborate traditional Indian wedding feast with authentic regional specialties",
      color: "accent",
      image: "/weddingimage.png"
    },
    {
      id: 2,
      title: "Corporate Lunch Setup",
      category: "Corporate", 
      description: "Professional business lunch presentation with modern plating techniques",
      color: "blueprint",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Birthday Celebration",
      category: "Private",
      description: "Intimate birthday party with personalized cake and decorative elements",
      color: "sage",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Festival Special Menu",
      category: "Traditional",
      description: "Festive Indian cuisine celebrating cultural traditions and flavors",
      color: "accent",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "Modern Presentation",
      category: "Contemporary",
      description: "Contemporary plating style with artistic food presentation",
      color: "blueprint",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 6,
      title: "Live Cooking Station",
      category: "Interactive",
      description: "Fresh preparation station with live cooking demonstration",
      color: "sage",
      image: "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 7,
      title: "Traditional Thali",
      category: "Traditional",
      description: "Complete traditional Indian thali with variety of regional dishes",
      color: "accent",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 8,
      title: "Dessert Collection",
      category: "Contemporary",
      description: "Exquisite Indian sweets and desserts with modern presentation",
      color: "blueprint",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 9,
      title: "Buffet Setup",
      category: "Wedding",
      description: "Grand buffet arrangement for large wedding celebrations",
      color: "sage",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&crop=center"
    }
  ]

  const categories = ["All", "Wedding", "Corporate", "Private", "Traditional", "Contemporary", "Interactive"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  }

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 indian-pattern opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <p className="technical-text text-blueprint-600 mb-4 text-sm sm:text-base">
              Visual Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-800 mb-6">
              Culinary
              <span className="color-accent text-accent-600 block">Artistry</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              Explore our gallery of beautifully crafted events, showcasing the perfect harmony 
              between traditional flavors and contemporary presentation.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-accent-glow'
                    : 'glass-effect text-slate-700 hover:text-accent-600 hover:shadow-lg'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover={{ scale: 1.03, y: -10 }}
                  onClick={() => setSelectedImage(index)}
                  className="line-art-border overflow-hidden rounded-2xl cursor-pointer group"
                >
                  {/* Gallery Image */}
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm
                      ${item.color === 'accent' ? 'bg-accent-500/80 text-white' : 
                        item.color === 'blueprint' ? 'bg-blueprint-500/80 text-white' : 
                        'bg-sage-500/80 text-white'}`}>
                      {item.category}
                    </div>
                    
                    {/* Hover Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute bottom-4 left-4 right-4 text-white"
                    >
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-sm opacity-90 line-clamp-2">{item.description}</p>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6 glass-effect">
                    <h3 className="text-xl font-serif font-bold text-slate-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-3">
                      {item.description}
                    </p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold
                      ${item.color === 'accent' ? 'bg-accent-100 text-accent-700' : 
                        item.color === 'blueprint' ? 'bg-blueprint-100 text-blueprint-700' : 
                        'bg-sage-100 text-sage-700'}`}>
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] glass-effect rounded-2xl overflow-hidden"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <HiXMark size={20} />
              </motion.button>

              {/* Navigation Buttons */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : filteredItems.length - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <HiChevronLeft size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(selectedImage < filteredItems.length - 1 ? selectedImage + 1 : 0)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <HiChevronRight size={20} />
              </motion.button>

              {/* Modal Content */}
              <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
                <img 
                  src={filteredItems[selectedImage].image} 
                  alt={filteredItems[selectedImage].title}
                  className="w-full h-full object-cover"
                />
                
                {/* Image Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-white">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2
                      ${filteredItems[selectedImage].color === 'accent' ? 'bg-accent-500' : 
                        filteredItems[selectedImage].color === 'blueprint' ? 'bg-blueprint-500' : 
                        'bg-sage-500'}`}>
                      {filteredItems[selectedImage].category}
                    </span>
                    <h3 className="text-2xl font-serif font-bold mb-2">
                      {filteredItems[selectedImage].title}
                    </h3>
                    <p className="text-lg opacity-90">
                      {filteredItems[selectedImage].description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
