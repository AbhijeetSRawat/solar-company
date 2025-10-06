import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Target, Flag, Award, Users, Zap, Leaf, Shield, TrendingUp, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-green-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-5xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            About MAVEN Green Energy
          </h1>
          <p className="text-xl md:text-2xl text-green-200 max-w-3xl mx-auto">
            India's leading rooftop solar panel installation service provider
          </p>
        </motion.div>
      </section>

      {/* Vision, Mission, Method Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            
            {/* Vision */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              <motion.div
                className="inline-block p-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 mb-6"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Target className="w-12 h-12 text-white" />
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                To make clean energy affordable and accessible for every Indian household and business.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="inline-block p-6 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 mb-6"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Flag className="w-12 h-12 text-white" />
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                To make the solar generation industry more organized, efficient, and customer-centric.
              </p>
            </motion.div>

            {/* Method */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="inline-block p-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 mb-6"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Shield className="w-12 h-12 text-white" />
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Method</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                To infuse transparency and trust in every interaction and installation.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Established with a vision to revolutionize India's solar energy landscape, 
              MAVEN Green Energy has become a trusted name in residential, commercial, and 
              industrial solar installations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop"
                alt="Solar installation"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe in the power of solar to not only reduce carbon footprints but 
                also to revolutionize the way we power our homes and businesses.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a relentless commitment to innovation and excellence, we're driving 
                India's solar mission forward, one rooftop at a time.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team of passionate solar enthusiasts works tirelessly to deliver 
                world-class solar solutions that exceed customer expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "25,000+", label: "Happy Customers" },
              { icon: Zap, value: "90 MW", label: "Solar Installed" },
              { icon: Leaf, value: "25k Tons", label: "CO₂ Reduced" },
              { icon: Award, value: "#1", label: "In India" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.div
                  className="inline-block p-5 rounded-2xl bg-white/20 mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-5xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-green-100 font-semibold text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Choose MAVEN?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Award-Winning Excellence",
                desc: "India's only UL-certified solar company with multiple industry awards"
              },
              {
                icon: Shield,
                title: "25+ Year Warranty",
                desc: "Industry-leading warranties and 24/7 expert support"
              },
              {
                icon: Users,
                title: "Trusted by Thousands",
                desc: "25,000+ homeowners and 200+ housing societies trust us"
              },
              {
                icon: Zap,
                title: "Quick Installation",
                desc: "Professional installation completed in 1-3 days"
              },
              {
                icon: Heart,
                title: "Customer First",
                desc: "We don't desert you after installation - lifetime support"
              },
              {
                icon: TrendingUp,
                title: "Maximum Savings",
                desc: "Save up to 90% on your monthly electricity bills"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-green-400 transition-all shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="inline-block p-4 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Join the Solar Revolution?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Let's make your property energy independent together
          </p>
          <motion.button
            className="bg-white text-green-700 font-bold py-4 px-10 rounded-full text-lg shadow-2xl"
            whileHover={{ scale: 1.08, boxShadow: "0 20px 60px rgba(255,255,255,0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get Free Consultation
          </motion.button>
        </motion.div>
      </section>

    </div>
  );
};

export default About;
