import React from 'react'
import { motion } from 'framer-motion'
import { 
  HiUserGroup, 
  HiGift, 
  HiBuildingOffice2, 
  HiCake,
  HiStar,
  HiCalendarDays
} from 'react-icons/hi2'

const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const services = [
    {
      icon: HiUserGroup,
      title: "Wedding Catering",
      description: "Make your special day unforgettable with our exquisite wedding catering services. Traditional ceremonies meet modern elegance.",
      features: ["Customized Menus", "Live Cooking Stations", "Traditional Setup", "Professional Service"],
      price: "Starting from ₹500/plate",
      color: "accent",
      popular: true,
      image: "/weddingimage.png"
    },
    {
      icon: HiBuildingOffice2,
      title: "Corporate Events",
      description: "Professional catering for business events, conferences, and corporate gatherings with sophisticated presentation.",
      features: ["Business Lunch", "Conference Catering", "Team Building", "Executive Dining"],
      price: "Starting from ₹300/plate",
      color: "blueprint",
      popular: false,
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop&crop=center"
    },
    {
      icon: HiGift,
      title: "Private Parties",
      description: "Intimate gatherings and private celebrations crafted with personalized attention to every detail.",
      features: ["Birthday Parties", "Anniversary", "House Parties", "Family Gatherings"],
      price: "Starting from ₹400/plate",
      color: "sage",
      popular: false,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop&crop=center"
    }
  ]

  const specialties = [
    {
      icon: HiCake,
      title: "Traditional Sweets",
      description: "Authentic Indian sweets prepared with traditional methods"
    },
    {
      icon: HiStar,
      title: "Live Counters",
      description: "Interactive cooking stations for fresh, hot preparations"
    },
    {
      icon: HiCalendarDays,
      title: "Event Planning",
      description: "Complete event management and coordination services"
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blueprint-50 to-accent-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 blueprint-container" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="technical-text text-blueprint-600 mb-4">
              Our Services
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-800 mb-6">
              Exceptional
              <span className="color-accent text-accent-600 block">Catering Solutions</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From intimate gatherings to grand celebrations, we provide comprehensive catering services 
              tailored to your unique requirements and vision.
            </p>
          </motion.div>

          {/* Main Services Grid */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -10 }}
                className={`relative line-art-border p-0 glass-effect rounded-2xl group overflow-hidden
                  ${service.popular ? 'ring-2 ring-accent-400 shadow-accent-glow' : ''}`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    className="absolute -top-3 -right-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-10"
                  >
                    Most Popular
                  </motion.div>
                )}

                {/* Service Image */}
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Service Icon Overlay */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className={`absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-r 
                      ${service.color === 'accent' ? 'from-accent-400 to-accent-600' : 
                        service.color === 'blueprint' ? 'from-blueprint-400 to-blueprint-600' : 
                        'from-sage-400 to-sage-600'} 
                      flex items-center justify-center shadow-lg`}
                  >
                    <service.icon className="text-xl text-white" />
                  </motion.div>
                </div>

                {/* Service Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className={`w-2 h-2 rounded-full 
                          ${service.color === 'accent' ? 'bg-accent-500' : 
                            service.color === 'blueprint' ? 'bg-blueprint-500' : 
                            'bg-sage-500'}`} 
                        />
                        <span className="text-slate-600">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="border-t border-slate-200 pt-6">
                    <p className={`text-lg font-semibold 
                      ${service.color === 'accent' ? 'text-accent-600' : 
                        service.color === 'blueprint' ? 'text-blueprint-600' : 
                        'text-sage-600'}`}>
                      {service.price}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        const message = `Hello Sadguru Catering!

I'm interested in your ${service.title} service.

📋 *Service Details:*
• Service: ${service.title}
• Starting Price: ${service.price}
• Features: ${service.features.join(', ')}

Please provide me with more details and a customized quote for my event.

Thank you!`
                        const whatsappURL = `https://wa.me/917702638605?text=${encodeURIComponent(message)}`
                        window.open(whatsappURL, '_blank')
                      }}
                      className={`w-full mt-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2
                        ${service.color === 'accent' ? 
                          'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-accent-glow hover:shadow-lg' : 
                          service.color === 'blueprint' ? 
                          'bg-gradient-to-r from-blueprint-500 to-blueprint-600 text-white shadow-blueprint hover:shadow-lg' : 
                          'bg-gradient-to-r from-sage-500 to-sage-600 text-white shadow-lg hover:shadow-xl'}`}
                    >
                      <span>Get Quote via WhatsApp</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Specialties Section */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-3xl font-serif font-bold text-slate-800 mb-12">
              Our Specialties
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {specialties.map((specialty) => (
                <motion.div
                  key={specialty.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="line-art-border p-6 glass-effect rounded-xl"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-blueprint-400 to-accent-500 flex items-center justify-center"
                  >
                    <specialty.icon className="text-xl text-white" />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">
                    {specialty.title}
                  </h4>
                  <p className="text-slate-600 text-sm">
                    {specialty.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
