import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sun, Zap, DollarSign, Leaf, Shield, TrendingUp, Users, Award, BatteryMedium, Factory, Home as HomeIcon, Building2, CheckCircle, ArrowRight, Phone, Mail, MapPin, Play, Star, ChevronDown } from 'lucide-react';

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeTab, setActiveTab] = useState('residential');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    { name: "John Martinez", location: "California", text: "Switching to solar was the best decision! My energy bills dropped by 80%.", rating: 5, type: "Residential" },
    { name: "Sarah Chen", location: "Texas", text: "Professional installation and amazing customer service. Highly recommended!", rating: 5, type: "Commercial" },
    { name: "Michael Brown", location: "Florida", text: "The ROI has been incredible. Paid for itself in just 4 years!", rating: 5, type: "Industrial" },
    { name: "Emily Rodriguez", location: "Arizona", text: "Their battery storage solution keeps our business running 24/7!", rating: 5, type: "BESS" }
  ];

  const services = {
    residential: {
      icon: HomeIcon,
      title: "Residential Solar",
      features: ["Rooftop Solar Panels", "Net Metering", "25+ Year Warranty", "Smart Monitoring"],
      desc: "Transform your home into a clean energy powerhouse",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop"
    },
    commercial: {
      icon: Building2,
      title: "Commercial Solar",
      features: ["Large-Scale Systems", "Tax Incentives", "Predictable Energy Costs", "Corporate Sustainability"],
      desc: "Power your business with sustainable energy solutions",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&auto=format&fit=crop"
    },
    industrial: {
      icon: Factory,
      title: "Industrial Solar",
      features: ["High-Capacity Systems", "Maximum Efficiency", "24/7 Monitoring", "Reduced Operating Costs"],
      desc: "Industrial-grade solar for maximum production",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop"
    },
    bess: {
      icon: BatteryMedium,
      title: "Battery Storage (BESS)",
      features: ["Energy Independence", "Peak Shaving", "Backup Power", "Grid Flexibility"],
      desc: "Store energy and achieve complete power autonomy",
      image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&auto=format&fit=crop"
    }
  };

  return (
    <div className="w-full min-h-screen bg-white font-sans overflow-x-hidden">
      
      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 text-center px-4 max-w-6xl"
          style={{ opacity, scale }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute inset-0 bg-yellow-400/40 rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="relative w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-br from-yellow-400 via-green-500 to-blue-500 p-1 shadow-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <Sun className="w-16 h-16 md:w-24 md:h-24 text-yellow-500" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            MAVEN Green Energy
          </motion.h1>

          <motion.p
            className="text-2xl md:text-4xl text-green-300 font-bold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Clean Power. Bright Future.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Harness the sun's unlimited power for your home, business, or industry
          </motion.p>

          <motion.div
            className="flex gap-3 justify-center mb-10 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {['Residential', 'Commercial', 'Industrial', 'BESS'].map((item, i) => (
              <motion.span
                key={i}
                className="px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold border border-green-400/50 shadow-lg"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)", borderColor: "#22c55e" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.button
              className="group bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500 text-white font-bold py-4 px-8 rounded-full shadow-2xl flex items-center gap-2"
              whileHover={{ scale: 1.1, boxShadow: "0 20px 60px rgba(34,197,94,0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </motion.button>
            <motion.button
              className="group bg-white/10 backdrop-blur-lg text-white font-bold py-4 px-8 rounded-full border-2 border-white/30 shadow-xl flex items-center gap-2"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)", borderColor: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-green-400" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-b from-green-600 to-emerald-700 py-20 px-6 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Impact in Numbers
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "10,000+", label: "Happy Customers", color: "from-green-400 to-green-600" },
              { icon: BatteryMedium, value: "100+ MWh", label: "Battery Storage", color: "from-blue-400 to-blue-600" },
              { icon: Sun, value: "50MW+", label: "Solar Installed", color: "from-yellow-400 to-orange-500" },
              { icon: Leaf, value: "25k Tons", label: "CO₂ Reduced", color: "from-emerald-400 to-teal-600" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <motion.div
                  className="relative bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-2xl text-center overflow-hidden"
                  whileHover={{ y: -10, scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div
                    className={`inline-block p-4 rounded-full bg-gradient-to-br ${stat.color} mb-4 relative z-10`}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-4xl font-bold text-white mb-2 relative z-10">{stat.value}</h3>
                  <p className="text-green-100 font-medium relative z-10">{stat.label}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="py-20 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-700 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Solutions
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Comprehensive solar and energy storage solutions tailored to your specific needs
          </motion.p>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(services).map(([key, service]) => (
              <motion.button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                    : 'bg-green-50 text-gray-700 border-2 border-green-200 hover:border-green-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <service.icon className="w-5 h-5" />
                {service.title}
              </motion.button>
            ))}
          </div>

          {/* Active Service Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl shadow-2xl overflow-hidden border-2 border-green-200"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-80 md:h-auto overflow-hidden">
                <img 
                  src={services[activeTab].image} 
                  alt={services[activeTab].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-transparent flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-white text-center p-8"
                  >
                    {React.createElement(services[activeTab].icon, { className: "w-24 h-24 mx-auto mb-4" })}
                  </motion.div>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-bold text-green-900 mb-4">{services[activeTab].title}</h3>
                <p className="text-gray-700 text-lg mb-6">{services[activeTab].desc}</p>
                <ul className="space-y-3 mb-8">
                  {services[activeTab].features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(34,197,94,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-700 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Choose MAVEN?
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            We're committed to delivering exceptional value and sustainable energy solutions
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Massive Savings",
                desc: "Cut your energy bills by up to 90% with premium solar technology and smart energy management.",
                color: "from-green-400 to-emerald-600"
              },
              {
                icon: Leaf,
                title: "Eco-Friendly Impact",
                desc: "Reduce your carbon footprint significantly and contribute to a cleaner, greener planet.",
                color: "from-emerald-400 to-teal-600"
              },
              {
                icon: Shield,
                title: "Unmatched Reliability",
                desc: "Industry-leading warranties up to 25+ years and 24/7 expert support for peace of mind.",
                color: "from-blue-400 to-indigo-600"
              },
              {
                icon: TrendingUp,
                title: "Increase Property Value",
                desc: "Boost your property's market value by up to 4% and attract eco-conscious buyers.",
                color: "from-purple-400 to-pink-600"
              },
              {
                icon: BatteryMedium,
                title: "Advanced Storage",
                desc: "State-of-the-art battery systems ensure energy independence and backup power.",
                color: "from-orange-400 to-red-600"
              },
              {
                icon: Award,
                title: "Award-Winning Excellence",
                desc: "Recognized industry leader with multiple awards for innovation and service quality.",
                color: "from-yellow-400 to-orange-600"
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.div
                  className="relative bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl border-2 border-green-200 shadow-xl h-full overflow-hidden"
                  whileHover={{ y: -10, borderColor: "#22c55e", scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div
                    className={`inline-block p-4 rounded-full bg-gradient-to-br ${benefit.color} mb-4 relative z-10`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3 text-green-900 relative z-10">{benefit.title}</h3>
                  <p className="text-gray-700 leading-relaxed relative z-10">{benefit.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-700 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Your Journey to Clean Energy
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            A simple, streamlined process from consultation to enjoying renewable energy
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Free Consultation", desc: "We analyze your energy needs and design the perfect solar solution.", icon: Phone },
              { step: "02", title: "Custom Design", desc: "Our engineers create a tailored system optimized for maximum efficiency.", icon: Zap },
              { step: "03", title: "Professional Installation", desc: "Expert installation with minimal disruption to your daily routine.", icon: CheckCircle },
              { step: "04", title: "Enjoy & Save", desc: "Start saving money immediately while contributing to a greener future.", icon: Sun }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl border-2 border-green-200 p-8 shadow-xl text-center h-full relative overflow-hidden group"
                  whileHover={{ y: -10, borderColor: "#22c55e" }}
                >
                  <div className="absolute top-0 right-0 text-8xl font-bold text-green-500/10 -mr-4 -mt-4 group-hover:text-green-500/20 transition-colors">
                    {item.step}
                  </div>
                  <motion.div
                    className="relative inline-block p-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-green-900 mb-3 relative z-10">{item.title}</h3>
                  <p className="text-gray-700 relative z-10">{item.desc}</p>
                </motion.div>
                {i < 3 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-4 z-20"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.3 }}
                  >
                    <ArrowRight className="w-8 h-8 text-green-500" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-700 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-16 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Real stories from satisfied customers across all sectors
          </motion.p>
          <div className="relative">
            <motion.div
              key={activeTestimonial}
              className="bg-white p-12 rounded-3xl border-2 border-green-200 shadow-2xl"
              initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                  </motion.div>
                ))}
              </div>
              <p className="text-2xl md:text-3xl text-gray-700 mb-8 italic text-center leading-relaxed">
                "{testimonials[activeTestimonial].text}"
              </p>
              <div className="text-center">
                <h4 className="text-2xl font-bold text-green-900">{testimonials[activeTestimonial].name}</h4>
                <p className="text-green-600 font-medium mb-2">{testimonials[activeTestimonial].location}</p>
                <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold border-2 border-green-300">
                  {testimonials[activeTestimonial].type}
                </span>
              </div>
            </motion.div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-10 gap-3">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-3 rounded-full transition-all ${
                    i === activeTestimonial ? 'bg-green-600 w-12' : 'bg-green-300 w-3'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-700 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-16 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Everything you need to know about solar energy
          </motion.p>
          <div className="space-y-4">
            {[
              {
                q: "How much can I save with solar panels?",
                a: "Most customers save 70-90% on their electricity bills. The exact savings depend on your energy consumption, system size, and local electricity rates."
              },
              {
                q: "What is the lifespan of solar panels?",
                a: "Our premium solar panels come with a 25+ year warranty and typically last 30-35 years with minimal maintenance."
              },
              {
                q: "Do solar panels work during cloudy days?",
                a: "Yes! Solar panels still generate electricity on cloudy days, though at reduced efficiency. Our battery storage systems ensure you have power 24/7."
              },
              {
                q: "What maintenance do solar panels require?",
                a: "Solar panels require minimal maintenance - just periodic cleaning and annual inspections. Our team provides comprehensive maintenance packages."
              },
              {
                q: "How long does installation take?",
                a: "Most residential installations are completed in 1-3 days. Commercial and industrial projects vary based on system size and complexity."
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl border-2 border-green-200 shadow-md overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ borderColor: "#22c55e", boxShadow: "0 10px 40px rgba(34,197,94,0.2)" }}
              >
                <details className="group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                    <span className="text-lg font-semibold text-green-900">{faq.q}</span>
                    <motion.div
                      className="text-green-600"
                      whileHover={{ scale: 1.2, rotate: 90 }}
                    >
                      <svg className="w-6 h-6 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Image Background */}
      <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-b from-green-100 to-green-50">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1920&auto=format&fit=crop" 
            alt="Solar panels" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-green-400/20 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, -20, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-green-400 via-emerald-400 to-blue-400 p-1 rounded-3xl shadow-2xl">
            <div className="bg-white rounded-3xl p-12 md:p-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8 }}
              >
                <div className="relative inline-block mb-6">
                  <motion.div
                    className="absolute inset-0 bg-yellow-400/40 rounded-full blur-2xl"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-green-500 p-1 shadow-xl">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <Sun className="w-12 h-12 text-yellow-500" />
                    </div>
                  </div>
                </div>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-700 to-blue-500 bg-clip-text text-transparent">
                Ready to Power Your Future?
              </h2>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto">
                Join thousands of satisfied customers across residential, commercial, and industrial sectors. 
                Start your journey to energy independence today!
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {[
                  { icon: DollarSign, text: "Save 70-90%" },
                  { icon: Shield, text: "25+ Year Warranty" },
                  { icon: Zap, text: "Quick Install" },
                  { icon: Award, text: "Award Winning" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center gap-2 p-4 bg-green-50 rounded-xl border-2 border-green-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05, backgroundColor: "#d1fae5", borderColor: "#22c55e" }}
                  >
                    <item.icon className="w-8 h-8 text-green-600" />
                    <span className="text-sm font-semibold text-gray-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4 justify-center flex-wrap">
                <motion.button
                  className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 px-10 rounded-full shadow-2xl text-lg flex items-center gap-2"
                  whileHover={{ scale: 1.08, boxShadow: "0 20px 60px rgba(34,197,94,0.6)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5" />
                  Schedule Consultation
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
                <motion.button
                  className="bg-white text-green-700 font-bold py-4 px-10 rounded-full border-2 border-green-300 shadow-xl text-lg flex items-center gap-2"
                  whileHover={{ scale: 1.08, borderColor: "#22c55e", backgroundColor: "#f0fdf4" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Zap className="w-5 h-5" />
                  Get Free Quote
                </motion.button>
              </div>

              <motion.p
                className="mt-8 text-gray-500 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                ⚡ Get a response within 24 hours | 🌿 100% Free consultation | 📞 No obligation
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center md:text-left">
            {[
              { icon: Phone, title: "Call Us", content: "+1 (800) MAVEN-GO" },
              { icon: Mail, title: "Email Us", content: "info@mavengreen.com" },
              { icon: MapPin, title: "Visit Us", content: "123 Green Street, Solar City" }
            ].map((contact, i) => (
              <motion.div
                key={i}
                className="flex flex-col md:flex-row items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="p-3 bg-white/20 rounded-full"
                  whileHover={{ rotate: 360, backgroundColor: "rgba(255,255,255,0.3)" }}
                  transition={{ duration: 0.6 }}
                >
                  <contact.icon className="w-6 h-6" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-lg">{contact.title}</h4>
                  <p className="text-green-100">{contact.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
