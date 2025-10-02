import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Target, Eye, Heart, Award, Users, Zap, Globe, Shield, TrendingUp, Leaf, Clock } from 'lucide-react';

const About = () => {
  const teamMembers = [
    { name: "Alex Rivera", role: "CEO & Founder", experience: "20+ years in renewable energy" },
    { name: "Sarah Chen", role: "Chief Technology Officer", experience: "15+ years in solar innovation" },
    { name: "Michael Brown", role: "Head of Operations", experience: "12+ years in project management" },
    { name: "Emily Johnson", role: "Customer Success Director", experience: "10+ years in client relations" }
  ];

  const milestones = [
    { year: "2010", event: "Company Founded", desc: "Started with a vision to make solar accessible" },
    { year: "2013", event: "1,000 Installations", desc: "Reached our first major milestone" },
    { year: "2017", event: "Award Winner", desc: "Best Solar Provider in the region" },
    { year: "2020", event: "10,000 Customers", desc: "Expanded to multiple states" },
    { year: "2023", event: "Carbon Neutral", desc: "Achieved company-wide carbon neutrality" },
    { year: "2025", event: "Innovation Leader", desc: "Pioneering next-gen solar technology" }
  ];

  const values = [
    { icon: Heart, title: "Customer First", desc: "Your satisfaction and success drive everything we do" },
    { icon: Leaf, title: "Sustainability", desc: "Committed to protecting our planet for future generations" },
    { icon: Shield, title: "Integrity", desc: "Honest, transparent, and ethical in all our dealings" },
    { icon: Zap, title: "Innovation", desc: "Continuously advancing solar technology and solutions" },
    { icon: Users, title: "Community", desc: "Building strong relationships and giving back locally" },
    { icon: Award, title: "Excellence", desc: "Delivering the highest quality products and services" }
  ];

  return (
    <div className="w-full min-h-screen bg-black font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated Sun Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,165,0,0.6) 0%, rgba(255,69,0,0.4) 40%, rgba(139,0,0,0.2) 70%, transparent 100%)',
              filter: 'blur(60px)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-7xl font-extrabold mb-6 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            About Our Mission
          </motion.h1>
          <p className="text-2xl text-orange-100 mb-4">
            Illuminating the future, one solar panel at a time
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            For over 15 years, we've been at the forefront of the solar revolution, helping thousands of families and businesses harness the power of the sun.
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p>
                  Founded in 2010 by a team of passionate environmental engineers, our journey began with a simple yet powerful vision: to make clean, renewable energy accessible to everyone.
                </p>
                <p>
                  What started as a small operation with just five employees has grown into one of the region's leading solar energy providers, serving over 10,000 satisfied customers across multiple states.
                </p>
                <p>
                  We've installed more than 50 megawatts of solar capacity, preventing over 25,000 tons of CO₂ emissions annually. But beyond the numbers, we measure our success by the smiles on our customers' faces when they receive their first near-zero electricity bill.
                </p>
                <p>
                  Today, we continue to innovate, pushing the boundaries of what's possible with solar technology while maintaining our commitment to exceptional service and environmental stewardship.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative bg-gradient-to-br from-orange-900/40 to-red-900/30 p-8 rounded-2xl border border-orange-500/30">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Users, label: "10,000+", sub: "Customers" },
                    { icon: Zap, label: "50MW+", sub: "Installed" },
                    { icon: Globe, label: "25k Tons", sub: "CO₂ Saved" },
                    { icon: Award, label: "50+", sub: "Awards" }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      className="text-center p-6 bg-black/30 rounded-xl"
                      whileHover={{ scale: 1.05 }}
                    >
                      <stat.icon className="w-12 h-12 mx-auto mb-3 text-orange-400" />
                      <div className="text-3xl font-bold text-orange-300 mb-1">{stat.label}</div>
                      <div className="text-gray-400">{stat.sub}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              className="bg-gradient-to-br from-orange-900/40 to-red-900/30 p-12 rounded-2xl border border-orange-500/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Target className="w-16 h-16 mb-6 text-orange-400" />
              <h3 className="text-4xl font-bold mb-4 text-orange-300">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To accelerate the world's transition to sustainable energy by making solar power accessible, affordable, and hassle-free for every home and business. We're committed to delivering exceptional value while reducing our collective carbon footprint.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-purple-900/40 to-pink-900/30 p-12 rounded-2xl border border-purple-500/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <Eye className="w-16 h-16 mb-6 text-purple-400" />
              <h3 className="text-4xl font-bold mb-4 text-purple-300">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                A world where clean, renewable energy powers every home, business, and community. We envision a future where energy independence is the norm, and our planet thrives for generations to come.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          <p className="text-center text-gray-400 mb-16 text-xl">The principles that guide everything we do</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-orange-900/30 to-red-900/20 p-8 rounded-2xl border border-orange-500/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: "rgba(251, 146, 60, 0.5)" }}
              >
                <value.icon className="w-12 h-12 mb-4 text-orange-400" />
                <h3 className="text-2xl font-bold mb-3 text-orange-300">{value.title}</h3>
                <p className="text-gray-400">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>
          <p className="text-center text-gray-400 mb-16 text-xl">Key milestones in our solar revolution</p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 via-red-500 to-orange-500"></div>

            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                className={`flex items-center mb-12 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={`w-1/2 ${i % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <motion.div
                    className="bg-gradient-to-br from-orange-900/40 to-red-900/30 p-6 rounded-xl border border-orange-500/30 inline-block"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-3xl font-bold text-orange-400 mb-2">{milestone.year}</div>
                    <h3 className="text-2xl font-bold text-orange-300 mb-2">{milestone.event}</h3>
                    <p className="text-gray-400">{milestone.desc}</p>
                  </motion.div>
                </div>

                <div className="relative z-10">
                  <motion.div
                    className="w-6 h-6 bg-orange-500 rounded-full border-4 border-black"
                    whileHover={{ scale: 1.5 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-orange-500"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                </div>

                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Meet Our Leadership
          </motion.h2>
          <p className="text-center text-gray-400 mb-16 text-xl">The passionate people driving our mission forward</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.div
                  className="relative mb-6 mx-auto w-48 h-48 rounded-full bg-gradient-to-br from-orange-500 to-red-600 p-1"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                    <Users className="w-20 h-20 text-orange-400" />
                  </div>
                </motion.div>
                <h3 className="text-2xl font-bold text-orange-300 mb-2">{member.name}</h3>
                <p className="text-lg text-gray-400 mb-2">{member.role}</p>
                <p className="text-sm text-gray-500">{member.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.h2>
          <p className="text-center text-gray-400 mb-16 text-xl">What sets us apart from the competition</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Industry Leaders", desc: "15+ years of proven excellence" },
              { icon: Shield, title: "Quality Guaranteed", desc: "Premium products, certified installers" },
              { icon: TrendingUp, title: "Best ROI", desc: "Maximum savings, fastest payback" },
              { icon: Clock, title: "Fast Installation", desc: "Most projects done in 1-3 days" },
              { icon: Heart, title: "Customer Focused", desc: "4.9/5 rating from 10,000+ reviews" },
              { icon: Zap, title: "Latest Technology", desc: "Cutting-edge solar solutions" },
              { icon: Users, title: "Expert Team", desc: "200+ trained professionals" },
              { icon: Leaf, title: "Eco Committed", desc: "Carbon neutral operations" }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-orange-900/30 to-red-900/20 p-6 rounded-xl border border-orange-500/20 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-orange-400" />
                <h3 className="text-xl font-bold text-orange-300 mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-gradient-to-br from-orange-900/40 to-red-900/30 p-16 rounded-3xl border-2 border-orange-500/50 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10">
            <Sun className="w-20 h-20 mx-auto mb-6 text-orange-400" />
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text">
              Ready to Join Our Solar Family?
            </h2>
            <p className="text-2xl text-gray-300 mb-8">
              Let's work together to create a cleaner, brighter future
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4 px-10 rounded-full shadow-2xl text-lg"
                whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(251, 146, 60, 0.8)" }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
              </motion.button>
              <motion.button
                className="bg-white/10 backdrop-blur-md text-white font-bold py-4 px-10 rounded-full border-2 border-orange-400 text-lg"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;