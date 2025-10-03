import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sun, Target, Eye, Heart, Award, Users, Zap, Globe, Shield, TrendingUp, Leaf, Clock, BatteryMedium, Factory, Home, Building2, Lightbulb, Phone, Mail, MapPin, CheckCircle, Star, ArrowRight } from 'lucide-react';

const About = () => {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const teamMembers = [
    { name: "Rajesh Kumar", role: "CEO & Founder", experience: "20+ years in renewable energy", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" },
    { name: "Priya Sharma", role: "Chief Technology Officer", experience: "15+ years in solar innovation", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" },
    { name: "Amit Patel", role: "Head of Operations", experience: "12+ years in project management", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop" },
    { name: "Neha Gupta", role: "Customer Success Director", experience: "10+ years in client relations", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop" }
  ];

  const milestones = [
    { year: "2010", event: "Company Founded", desc: "Started with a vision to make solar accessible" },
    { year: "2013", event: "1,000 Installations", desc: "Reached our first major milestone" },
    { year: "2017", event: "Award Winner", desc: "Best Solar Provider in the region" },
    { year: "2020", event: "10,000 Customers", desc: "Expanded across India" },
    { year: "2023", event: "Carbon Neutral", desc: "Achieved company-wide carbon neutrality" },
    { year: "2025", event: "Innovation Leader", desc: "Pioneering next-gen solar & BESS technology" }
  ];

  const values = [
    { icon: Heart, title: "Customer First", desc: "Your satisfaction and success drive everything we do" },
    { icon: Leaf, title: "Sustainability", desc: "Committed to protecting our planet for future generations" },
    { icon: Shield, title: "Integrity", desc: "Honest, transparent, and ethical in all our dealings" },
    { icon: Zap, title: "Innovation", desc: "Continuously advancing solar technology and solutions" },
    { icon: Users, title: "Community", desc: "Building strong relationships and giving back locally" },
    { icon: Award, title: "Excellence", desc: "Delivering the highest quality products and services" }
  ];

  const certifications = [
    { name: "ISO 9001:2015", desc: "Quality Management" },
    { name: "ISO 14001:2015", desc: "Environmental Management" },
    { name: "ISO 45001:2018", desc: "Occupational Health & Safety" },
    { name: "MNRE Certified", desc: "Ministry of New & Renewable Energy" }
  ];

  const solutions = [
    { 
      icon: Home, 
      title: "Residential Solar", 
      desc: "Power your home with clean energy",
      img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop"
    },
    { 
      icon: Building2, 
      title: "Commercial Solutions", 
      desc: "Reduce operating costs for businesses",
      img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop"
    },
    { 
      icon: Factory, 
      title: "Industrial Power", 
      desc: "Large-scale energy independence",
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
    },
    { 
      icon: BatteryMedium, 
      title: "BESS Systems", 
      desc: "Advanced battery energy storage",
      img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop"
    }
  ];

  const testimonials = [
    { name: "Rahul Mehta", role: "Homeowner, Mumbai", text: "MAVEN transformed our home! We're saving ₹8,000 monthly and contributing to a greener planet.", rating: 5 },
    { name: "Sunita Desai", role: "Business Owner, Pune", text: "The ROI was incredible. Our commercial property is now energy independent!", rating: 5 },
    { name: "Vikram Singh", role: "Factory Owner, Delhi", text: "Professional installation, excellent support, and amazing results. Highly recommended!", rating: 5 }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Animated Background Orb */}
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 rounded-full pointer-events-none z-0 opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(34,197,94,0.6) 0%, rgba(16,185,129,0.3) 40%, transparent 70%)',
          filter: 'blur(80px)',
          x: useTransform(scrollYProgress, [0, 1], [mousePosition.x - 200, mousePosition.x - 100]),
          y: useTransform(scrollYProgress, [0, 1], [mousePosition.y - 200, mousePosition.y - 100]),
        }}
      />

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop" 
            alt="Solar panels against blue sky"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        <motion.div
          className="relative z-10 text-center px-4 sm:px-6 max-w-5xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <Sun className="w-20 h-20 sm:w-24 sm:h-24 mx-auto text-yellow-400 drop-shadow-[0_0_15px_rgba(234,179,8,0.6)]" />
          </motion.div>
          
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 sm:mb-6 text-white drop-shadow-lg"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 40px rgba(34,197,94,0.6)",
                "0 0 20px rgba(255,255,255,0.5)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            About MAVEN Green Energy
          </motion.h1>
          
          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-300 mb-4 sm:mb-6 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Illuminating India's Future with Sustainable Solar Solutions
          </motion.p>
          
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 sm:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            For over 15 years, we've been at the forefront of India's solar revolution, helping thousands of families and businesses harness clean, renewable energy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-full shadow-2xl text-base sm:text-lg flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34,197,94,0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-3 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-green-600 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {[
              { icon: Users, label: "10,000+", sub: "Happy Customers", color: "from-yellow-400 to-orange-500" },
              { icon: Zap, label: "50MW+", sub: "Solar Installed", color: "from-blue-400 to-cyan-500" },
              { icon: Globe, label: "25,000+", sub: "Tons CO₂ Saved", color: "from-green-400 to-emerald-500" },
              { icon: Award, label: "50+", sub: "Industry Awards", color: "from-purple-400 to-pink-500" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center p-4 sm:p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              >
                <motion.div
                  className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.label}</div>
                <div className="text-xs sm:text-base text-green-100">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section with Image */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-700 to-blue-500 bg-clip-text text-transparent"
                whileInView={{ backgroundPosition: ["0%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              >
                Our Story
              </motion.h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base md:text-lg">
                <p>
                  Founded in 2010 by a team of passionate environmental engineers, MAVEN Green Energy began with a simple yet powerful vision: to make clean, renewable energy accessible to everyone across India.
                </p>
                <p>
                  What started as a small operation with just five employees has grown into one of the nation's leading solar EPC providers, serving over 10,000 satisfied customers with residential, commercial, industrial, and BESS solutions.
                </p>
                <p>
                  We've installed more than 50 megawatts of solar capacity, preventing over 25,000 tons of CO₂ emissions annually. Beyond the numbers, we measure our success by the smiles on our customers' faces when they receive their first near-zero electricity bill.
                </p>
                <p>
                  Today, we continue to innovate, pushing the boundaries of solar and battery storage technology while maintaining our commitment to exceptional service and environmental stewardship.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop" 
                  alt="Solar panel installation team"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-base sm:text-xl font-bold">Building a Sustainable Future Together</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-green-50 to-white relative">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1920&h=1080&fit=crop" 
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              className="bg-gradient-to-br from-green-100 via-green-200 to-emerald-200 p-6 sm:p-12 rounded-2xl border-2 border-green-300 shadow-xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 60px rgba(34,197,94,0.3)" }}
            >
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-green-400/20 rounded-full -mr-16 sm:-mr-20 -mt-16 sm:-mt-20"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <Target className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 text-green-700 relative z-10" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-green-900 relative z-10">Our Mission</h3>
              <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed relative z-10">
                To accelerate India's transition to sustainable energy by making solar power accessible, affordable, and hassle-free for every home, business, and industry. We're committed to delivering exceptional value while reducing our collective carbon footprint.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-100 via-blue-200 to-cyan-200 p-6 sm:p-12 rounded-2xl border-2 border-blue-300 shadow-xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 60px rgba(59,130,246,0.3)" }}
            >
              <motion.div
                className="absolute bottom-0 left-0 w-32 h-32 sm:w-40 sm:h-40 bg-blue-400/20 rounded-full -ml-16 sm:-ml-20 -mb-16 sm:-mb-20"
                animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <Eye className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 text-blue-700 relative z-10" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-blue-900 relative z-10">Our Vision</h3>
              <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed relative z-10">
                A greener India where clean, renewable energy powers every home, business, and community. We envision a future where energy independence is the norm, and our planet thrives for generations to come.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions We Offer */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 bg-gradient-to-r from-green-700 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Solutions We Offer
          </motion.h2>
          <p className="text-center text-gray-600 mb-10 sm:mb-16 text-base sm:text-xl">Comprehensive solar solutions for every need</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {solutions.map((solution, i) => (
              <motion.div
                key={i}
                className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <img 
                    src={solution.img} 
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                >
                  <solution.icon className="w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3 text-green-400" />
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{solution.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-200">{solution.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 bg-gradient-to-r from-green-700 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          <p className="text-center text-gray-600 mb-10 sm:mb-16 text-base sm:text-xl">The principles that guide everything we do</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="group bg-gradient-to-br from-green-50 to-emerald-100 p-6 sm:p-8 rounded-2xl border-2 border-green-200 shadow-lg relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: "#22c55e",
                  boxShadow: "0 20px 40px rgba(34,197,94,0.2)"
                }}
              >
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-green-400/10 rounded-full -mr-12 sm:-mr-16 -mt-12 sm:-mt-16"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                
                <motion.div
                  className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center relative z-10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-green-900 relative z-10">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-700 relative z-10">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-green-50 to-white relative">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1920&h=1080&fit=crop" 
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 bg-gradient-to-r from-green-700 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>
          <p className="text-center text-gray-600 mb-10 sm:mb-16 text-base sm:text-xl">Key milestones in our solar revolution</p>

          <div className="relative">
            {/* Timeline line for desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 via-blue-400 to-green-500"></div>

            {/* Timeline line for mobile */}
            <div className="md:hidden absolute left-6 top-0 w-0.5 h-full bg-gradient-to-b from-green-500 via-blue-400 to-green-500"></div>

            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                className={`flex items-center mb-8 sm:mb-12 md:flex-row ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} pl-16 md:pl-0 text-left`}>
                  <motion.div
                    className="bg-gradient-to-br from-green-100 to-blue-100 p-4 sm:p-6 rounded-xl border-2 border-green-300 inline-block shadow-md w-full md:w-auto"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(34,197,94,0.3)" }}
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">{milestone.year}</div>
                    <h3 className="text-lg sm:text-2xl font-bold text-green-800 mb-2">{milestone.event}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{milestone.desc}</p>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-6 md:relative md:left-0 z-10">
                  <motion.div
                    className="w-4 h-4 sm:w-6 sm:h-6 bg-green-500 rounded-full border-2 sm:border-4 border-white shadow-lg"
                    whileHover={{ scale: 1.5 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-green-400"
                      animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                  </motion.div>
                </div>

                {/* Spacer for alternating layout on desktop */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 bg-gradient-to-r from-green-700 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Meet Our Leadership
          </motion.h2>
          <p className="text-center text-gray-600 mb-10 sm:mb-16 text-base sm:text-xl">The passionate people driving our mission forward</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.div
                  className="relative mb-4 sm:mb-6 mx-auto w-40 h-40 sm:w-48 sm:h-48 rounded-full p-1 bg-gradient-to-br from-green-500 via-emerald-500 to-blue-400 shadow-xl"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
                    <img 
                      src={member.img} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <motion.div
                    className="absolute -bottom-2 -right-2 w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.2, rotate: 180 }}
                  >
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.div>
                </motion.div>
                
                <h3 className="text-lg sm:text-2xl font-bold text-green-800 mb-1 sm:mb-2">{member.name}</h3>
                <p className="text-sm sm:text-lg text-gray-600 mb-1 sm:mb-2">{member.role}</p>
                <p className="text-xs sm:text-sm text-gray-500">{member.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 bg-gradient-to-r from-green-700 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Certifications & Recognition
          </motion.h2>
          <p className="text-center text-gray-600 mb-10 sm:mb-16 text-base sm:text-xl">Trusted by industry standards</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-green-200 shadow-lg text-center relative overflow-hidden group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: "#22c55e" }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                
                <Award className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-green-600 relative z-10" />
                <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2 relative z-10">{cert.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 relative z-10">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 bg-gradient-to-r from-green-700 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What Our Customers Say
          </motion.h2>
          <p className="text-center text-gray-600 mb-10 sm:mb-16 text-base sm:text-xl">Real stories from satisfied customers</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-green-200 shadow-lg relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(34,197,94,0.2)" }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 italic">"{testimonial.text}"</p>
                
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-green-500 to-blue-400 flex items-center justify-center text-white font-bold text-sm sm:text-base">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800 text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 bg-gradient-to-r from-green-700 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Choose MAVEN?
          </motion.h2>
          <p className="text-center text-gray-600 mb-10 sm:mb-16 text-base sm:text-xl">What sets us apart from the competition</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Award, title: "Industry Leaders", desc: "15+ years of proven excellence" },
              { icon: Shield, title: "Quality Guaranteed", desc: "Premium products, certified installers" },
              { icon: TrendingUp, title: "Best ROI", desc: "Maximum savings, fastest payback" },
              { icon: Clock, title: "Fast Installation", desc: "Most projects done in 1-3 days" },
              { icon: Heart, title: "Customer Focused", desc: "4.9/5 rating from 10,000+ reviews" },
              { icon: BatteryMedium, title: "BESS Solutions", desc: "Advanced battery energy storage" },
              { icon: Users, title: "Expert Team", desc: "200+ trained professionals" },
              { icon: Leaf, title: "Eco Committed", desc: "Carbon neutral operations" }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-green-50 to-emerald-100 p-4 sm:p-6 rounded-xl border-2 border-green-200 text-center shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05, borderColor: "#22c55e", boxShadow: "0 10px 30px rgba(34,197,94,0.2)" }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-4 text-green-600" />
                </motion.div>
                <h3 className="text-sm sm:text-xl font-bold text-green-800 mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Innovation Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop" 
            alt="Solar technology"
            className="w-full h-full object-cover opacity-5"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 bg-gradient-to-r from-green-700 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Technology & Innovation
          </motion.h2>
          <p className="text-center text-gray-600 mb-10 sm:mb-16 text-base sm:text-xl max-w-3xl mx-auto">
            We invest heavily in R&D to bring you the most advanced solar and energy storage solutions
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              {[
                { icon: Lightbulb, title: "Smart Monitoring", desc: "Real-time energy production tracking via mobile app" },
                { icon: BatteryMedium, title: "AI-Optimized Storage", desc: "Intelligent battery management for maximum efficiency" },
                { icon: Zap, title: "High-Efficiency Panels", desc: "Latest monocrystalline technology with 22%+ efficiency" },
                { icon: Globe, title: "IoT Integration", desc: "Seamless integration with smart home systems" }
              ].map((tech, i) => (
                <motion.div
                  key={i}
                  className="flex gap-3 sm:gap-4 items-start bg-white p-4 sm:p-6 rounded-xl shadow-md border-2 border-green-100"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, borderColor: "#22c55e" }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <tech.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-green-800 mb-1 sm:mb-2">{tech.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{tech.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                className="rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop" 
                  alt="Advanced solar technology"
                  className="w-full h-auto"
                />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-gradient-to-br from-green-500 to-blue-500 p-4 sm:p-6 rounded-2xl shadow-xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-bold text-white mb-1">22%+</div>
                  <div className="text-xs sm:text-sm text-green-100">Panel Efficiency</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-green-100 to-green-50 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1920&h=1080&fit=crop")',
            backgroundSize: 'cover'
          }}
        />

        <motion.div
          className="max-w-4xl mx-auto text-center bg-gradient-to-br from-green-400 via-emerald-400 to-blue-400 p-8 sm:p-16 rounded-3xl border-4 border-green-500 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-white/20 rounded-full -mr-16 sm:-mr-32 -mt-16 sm:-mt-32"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          
          <motion.div
            className="absolute bottom-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-white/20 rounded-full -ml-16 sm:-ml-32 -mb-16 sm:-mb-32"
            animate={{ scale: [1, 1.2, 1], rotate: [360, 180, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          <div className="relative z-10">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Leaf className="w-12 h-12 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 text-green-900" />
            </motion.div>
            
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-6 text-green-900">
              Ready to Join the Green Revolution?
            </h2>
            <p className="text-base sm:text-xl md:text-2xl text-green-800 mb-6 sm:mb-8">
              Let's work together to create a cleaner, brighter future for India
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-green-700 to-emerald-800 text-white font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-full shadow-2xl text-sm sm:text-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(22,163,74,0.6)" }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
              
              <motion.button
                className="bg-white/80 backdrop-blur-md text-green-900 font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-full border-2 border-green-600 text-sm sm:text-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.95)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" /> Contact Us
              </motion.button>
            </div>

            <motion.div
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-6 items-center justify-center text-green-900"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>info@mavengreen.com</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>+91 1800-XXX-XXXX</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;