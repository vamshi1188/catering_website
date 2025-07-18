import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  HiPhone, 
  HiEnvelope, 
  HiMapPin, 
  HiClock,
  HiCheckCircle
} from 'react-icons/hi2'
import { FaWhatsapp } from 'react-icons/fa'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    guests: '',
    date: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.name || !formData.email) {
      alert('Please fill in all required fields.')
      return
    }
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    
    // Create WhatsApp message
    const message = `Hello Sadguru Catering!

I would like to request a quote for my event:

📝 *Event Details:*
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone || 'Not provided'}
• Event Type: ${formData.eventType || 'Not specified'}
• Number of Guests: ${formData.guests || 'Not specified'}
• Event Date: ${formData.date || 'Not specified'}

💬 *Additional Requirements:*
${formData.message || 'None specified'}

Please provide me with a detailed quote. Thank you!`

    // Send to WhatsApp
    const whatsappURL = `https://wa.me/917702638605?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, '_blank')
    
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        guests: '',
        date: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: HiPhone,
      title: "Call Us",
      content: "+91 7702638605",
      subContent: "Available 7 Days a Week",
      color: "accent",
      link: "tel:+917702638605"
    },
    {
      icon: HiEnvelope,
      title: "Email Us",
      content: "saivamshik11@gmail.com",
      subContent: "We reply within 24 hours",
      color: "blueprint",
      link: "mailto:saivamshik11@gmail.com"
    },
    {
      icon: HiMapPin,
      title: "Location",
      content: "Hyderabad, Telangana",
      subContent: "Serving Hyderabad & Surrounding Areas",
      color: "sage",
      link: "https://maps.app.goo.gl/tvwNgBprJq6UNUiy5"
    },
    {
      icon: HiClock,
      title: "Available",
      content: "7 Days a Week",
      subContent: "9 AM - 10 PM",
      color: "accent"
    }
  ]

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blueprint-50 to-accent-50 relative overflow-hidden">
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
              Get In Touch
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-800 mb-6">
              Let's Create Something
              <span className="color-accent text-accent-600 block">Extraordinary</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your next event? Contact us today and let's bring your culinary vision to life 
              with our expertise and passion for exceptional catering.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="line-art-border p-8 glass-effect rounded-2xl">
                <h3 className="text-3xl font-serif font-bold text-slate-800 mb-8">
                  Contact Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {contactInfo.map((info) => {
                    const ContactElement = info.link ? 'a' : 'div';
                    const linkProps = info.link ? {
                      href: info.link,
                      target: info.link.startsWith('http') ? '_blank' : undefined,
                      rel: info.link.startsWith('http') ? 'noopener noreferrer' : undefined
                    } : {};

                    return (
                      <motion.div
                        key={info.title}
                        variants={itemVariants}
                        whileHover={{ scale: 1.03, y: -5 }}
                        className="p-6 glass-effect rounded-xl"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          className={`w-12 h-12 mb-4 rounded-full bg-gradient-to-r 
                            ${info.color === 'accent' ? 'from-accent-400 to-accent-600' : 
                              info.color === 'blueprint' ? 'from-blueprint-400 to-blueprint-600' : 
                              'from-sage-400 to-sage-600'} 
                            flex items-center justify-center shadow-lg`}
                        >
                          <info.icon className="text-xl text-white" />
                        </motion.div>
                        <h4 className="text-lg font-semibold text-slate-800 mb-2">
                          {info.title}
                        </h4>
                        <ContactElement
                          {...linkProps}
                          className={`font-medium mb-1 block ${info.link ? 'hover:underline cursor-pointer' : ''} 
                            ${info.color === 'accent' ? 'text-accent-600' : 
                              info.color === 'blueprint' ? 'text-blueprint-600' : 
                              'text-sage-600'}`}
                        >
                          {info.content}
                        </ContactElement>
                        <p className="text-sm text-slate-600">
                          {info.subContent}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Additional Info */}
              <motion.div variants={itemVariants} className="line-art-border p-8 glass-effect rounded-2xl">
                <h4 className="text-xl font-serif font-bold text-slate-800 mb-4">
                  Why Choose Sadguru Catering?
                </h4>
                <ul className="space-y-3">
                  {[
                    "15+ years of catering excellence",
                    "Authentic Indian recipes with modern presentation",
                    "Customizable menus for any event size",
                    "Professional service team",
                    "Competitive pricing with no hidden costs"
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <HiCheckCircle className="text-accent-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-600">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="line-art-border p-8 glass-effect rounded-2xl">
              <h3 className="text-3xl font-serif font-bold text-slate-800 mb-8">
                Request a Quote
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="eventType" className="block text-sm font-semibold text-slate-700 mb-2">
                      Event Type
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all duration-300"
                    >
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="private">Private Party</option>
                      <option value="other">Other</option>
                    </select>
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="guests" className="block text-sm font-semibold text-slate-700 mb-2">
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all duration-300"
                      placeholder="50"
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="date" className="block text-sm font-semibold text-slate-700 mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all duration-300"
                    />
                  </motion.div>
                </div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Additional Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 outline-none transition-all duration-300"
                    placeholder="Tell us about your specific requirements, dietary restrictions, or any special requests..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitted}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitted
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg hover:shadow-xl hover:from-green-600 hover:to-green-700'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <HiCheckCircle className="text-xl" />
                      <span>Sent to WhatsApp!</span>
                    </>
                  ) : (
                    <>
                      <FaWhatsapp className="text-xl" />
                      <span>Send Quote Request via WhatsApp</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
