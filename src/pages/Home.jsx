import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Zap, DollarSign, Leaf, Shield, TrendingUp, Users, Award } from 'lucide-react';

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    { name: "John Martinez", location: "California", text: "Switching to solar was the best decision! My energy bills dropped by 80%.", rating: 5 },
    { name: "Sarah Chen", location: "Texas", text: "Professional installation and amazing customer service. Highly recommended!", rating: 5 },
    { name: "Michael Brown", location: "Florida", text: "The ROI has been incredible. Paid for itself in just 4 years!", rating: 5 }
  ];

  return (
    <div className="w-full min-h-screen bg-black font-sans overflow-x-hidden">
      {/* Hero Section with Animated Sun */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Sun Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,165,0,0.8) 0%, rgba(255,69,0,0.6) 40%, rgba(139,0,0,0.3) 70%, transparent 100%)',
              filter: 'blur(40px)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full bg-gradient-radial from-yellow-500 via-orange-600 to-red-700"
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 100px rgba(255,165,0,0.8), 0 0 200px rgba(255,69,0,0.6)'
            }}
          />
          {/* Particle effects */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full"
              style={{
                left: `${50 + Math.cos(i * 12) * 30}%`,
                top: `${50 + Math.sin(i * 12) * 30}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-7xl font-extrabold mb-6 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Harness the Power of the Sun
          </motion.h1>
          <p className="text-2xl text-orange-100 mb-8">
            Transform your home with clean, renewable solar energy
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.button
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4 px-8 rounded-full shadow-lg"
              whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(255,165,0,0.8)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Quote
            </motion.button>
            <motion.button
              className="bg-white/10 backdrop-blur-md text-white font-bold py-4 px-8 rounded-full border-2 border-orange-400"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-b from-black via-gray-900 to-black py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: Users, value: "10,000+", label: "Happy Customers" },
            { icon: Zap, value: "50MW+", label: "Energy Generated" },
            { icon: Leaf, value: "25k Tons", label: "CO₂ Reduced" },
            { icon: Award, value: "15+ Years", label: "Experience" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-6 bg-gradient-to-br from-orange-900/30 to-red-900/20 rounded-xl border border-orange-500/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-orange-400" />
              <h3 className="text-4xl font-bold text-orange-300 mb-2">{stat.value}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Choose Solar Energy?
          </motion.h2>
          <p className="text-center text-gray-400 mb-16 text-xl">Discover the benefits that will transform your energy future</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Massive Savings",
                desc: "Reduce your electricity bills by up to 90%. Average savings of $1,500+ per year.",
                gradient: "from-green-900/40 to-emerald-900/20"
              },
              {
                icon: Leaf,
                title: "Eco-Friendly",
                desc: "Reduce your carbon footprint and contribute to a cleaner, greener planet.",
                gradient: "from-green-900/40 to-teal-900/20"
              },
              {
                icon: TrendingUp,
                title: "Increase Home Value",
                desc: "Homes with solar panels sell for 4% more on average than homes without.",
                gradient: "from-blue-900/40 to-indigo-900/20"
              },
              {
                icon: Shield,
                title: "Energy Independence",
                desc: "Protection from rising utility costs and power outages with battery backup.",
                gradient: "from-purple-900/40 to-pink-900/20"
              },
              {
                icon: Award,
                title: "Tax Incentives",
                desc: "Take advantage of 30% federal tax credit and state rebates.",
                gradient: "from-orange-900/40 to-red-900/20"
              },
              {
                icon: Zap,
                title: "Low Maintenance",
                desc: "Solar panels require minimal maintenance and come with 25-year warranties.",
                gradient: "from-yellow-900/40 to-orange-900/20"
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                className={`p-8 bg-gradient-to-br ${benefit.gradient} rounded-2xl border border-orange-500/20 backdrop-blur-sm`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: "rgba(251, 146, 60, 0.5)" }}
              >
                <benefit.icon className="w-14 h-14 mb-4 text-orange-400" />
                <h3 className="text-2xl font-bold mb-3 text-orange-300">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Your Solar Journey
          </motion.h2>
          <p className="text-center text-gray-400 mb-16 text-xl">Simple steps to clean energy</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Free Consultation", desc: "We analyze your energy needs and roof" },
              { step: "02", title: "Custom Design", desc: "Get a personalized solar system plan" },
              { step: "03", title: "Professional Install", desc: "Expert installation within 1-3 days" },
              { step: "04", title: "Start Saving", desc: "Enjoy clean energy and lower bills" }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="relative text-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="relative z-10 bg-gradient-to-br from-orange-900/50 to-red-900/30 p-8 rounded-2xl border border-orange-500/30">
                  <div className="text-6xl font-bold text-orange-500/30 mb-4">{item.step}</div>
                  <h3 className="text-2xl font-bold text-orange-300 mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-orange-500 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What Our Customers Say
          </motion.h2>
          <p className="text-center text-gray-400 mb-16 text-xl">Real stories from real people</p>

          <div className="relative">
            <motion.div
              key={activeTestimonial}
              className="bg-gradient-to-br from-orange-900/30 to-red-900/20 p-12 rounded-2xl border border-orange-500/30 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Sun key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-2xl text-gray-300 mb-6 italic">"{testimonials[activeTestimonial].text}"</p>
              <h4 className="text-xl font-bold text-orange-400">{testimonials[activeTestimonial].name}</h4>
              <p className="text-gray-500">{testimonials[activeTestimonial].location}</p>
            </motion.div>

            <div className="flex justify-center mt-8 gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === activeTestimonial ? 'bg-orange-500 w-8' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products/Services Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Solar Solutions
          </motion.h2>
          <p className="text-center text-gray-400 mb-16 text-xl">Customized systems for every need</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Solar",
                features: ["Roof & Ground Mount", "Battery Storage", "Smart Monitoring", "25-Year Warranty"],
                popular: false
              },
              {
                title: "Commercial Solar",
                features: ["Large-Scale Systems", "Tax Benefits", "Energy Management", "Quick ROI"],
                popular: true
              },
              {
                title: "Solar + Storage",
                features: ["Backup Power", "Grid Independence", "Peak Shaving", "24/7 Clean Energy"],
                popular: false
              }
            ].map((product, i) => (
              <motion.div
                key={i}
                className={`p-8 rounded-2xl border-2 relative ${
                  product.popular
                    ? 'bg-gradient-to-br from-orange-900/50 to-red-900/40 border-orange-500'
                    : 'bg-gradient-to-br from-gray-800/50 to-gray-900/30 border-gray-700'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <Sun className="w-12 h-12 mb-4 text-orange-400" />
                <h3 className="text-3xl font-bold mb-6 text-orange-300">{product.title}</h3>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-gray-300">
                      <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <p className="text-center text-gray-400 mb-16 text-xl">Everything you need to know</p>

          <div className="space-y-4">
            {[
              { q: "How much can I save with solar?", a: "Most homeowners save $1,000-$2,000 per year, with total lifetime savings of $25,000-$50,000." },
              { q: "How long do solar panels last?", a: "Solar panels typically last 25-30 years with minimal maintenance and come with comprehensive warranties." },
              { q: "What incentives are available?", a: "Federal tax credit of 30%, plus state and local rebates that can reduce costs by up to 50%." },
              { q: "Will solar work on my roof?", a: "Most roofs are suitable! We offer free assessments to determine the best system for your home." }
            ].map((faq, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-orange-900/20 to-red-900/10 p-6 rounded-xl border border-orange-500/20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-xl font-bold text-orange-400 mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-gradient-to-br from-orange-900/40 to-red-900/30 p-16 rounded-3xl border-2 border-orange-500/50 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative z-10">
            <Sun className="w-20 h-20 mx-auto mb-6 text-orange-400" />
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text">
              Ready to Power Your Future?
            </h2>
            <p className="text-2xl text-gray-300 mb-8">
              Join thousands of satisfied customers who've made the switch to clean energy
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4 px-10 rounded-full shadow-2xl text-lg"
                whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(251, 146, 60, 0.8)" }}
                whileTap={{ scale: 0.95 }}
              >
                Get Your Free Quote
              </motion.button>
              <motion.button
                className="bg-white/10 backdrop-blur-md text-white font-bold py-4 px-10 rounded-full border-2 border-orange-400 text-lg"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
            </div>
            <p className="text-gray-400 mt-6">✓ No obligation • ✓ Free site assessment • ✓ Same-day quotes</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;