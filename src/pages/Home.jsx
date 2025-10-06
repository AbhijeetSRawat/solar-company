import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sun, Zap, DollarSign, Leaf, Shield, Users, BatteryMedium, Building2, ArrowRight, Phone, Mail, Star, ChevronDown, Wrench, Calculator, Sparkles, Play } from 'lucide-react';

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaqTab, setActiveFaqTab] = useState('maintenance');
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
    { 
      name: "Braj Bhushan", 
      location: "Uttar Pradesh", 
      text: "I was worried about the generation. But I am so excited now. My bills have gone down from Rs 4300 to Rs 500-700 a month. The team also comes home and regularly cleans my panels.", 
      type: "Home solar system" 
    },
    { 
      name: "Gandharv Chauhan", 
      location: "Rajasthan", 
      text: "Being an engineer myself, I am extremely satisfied with the team of MAVEN. They have done an amazing job in the construction of my solar. The team is very efficient and knowledgeable.", 
      type: "Home solar system" 
    },
    { 
      name: "Anish Sengupta", 
      location: "Johnson & Johnson", 
      text: "I am happy to acknowledge that MAVEN has met the strictest Quality & Safety norms dictated by the Global Standards of Johnson & Johnson.", 
      type: "Commercial" 
    }
  ];

  const faqTabs = {
    maintenance: [
      {
        q: "What is the life of a rooftop solar system?",
        a: "Our premium solar panels come with a 25+ year warranty and typically last 30-35 years with minimal maintenance. The panels are designed to withstand harsh weather conditions and continue generating electricity efficiently for decades."
      },
      {
        q: "Do Solar Rooftop projects have a high maintenance cost?",
        a: "No, solar rooftop systems require minimal maintenance. Basic cleaning 1-2 times a month and annual professional inspections are sufficient. We provide a free 5-year annual maintenance contract with all installations."
      },
      {
        q: "Can Solar projects damage my roof?",
        a: "Absolutely not! Our installation uses chemically anchored mounting structures that are completely safe. We conduct thorough roof assessments before installation and provide roof replacement solutions if needed for compromised structures."
      },
      {
        q: "Do I need to clean my Solar plant?",
        a: "Yes, it's good practice to clean panels 1-2 times monthly using a clean wet cloth or soft brush. Our team provides regular cleaning services as part of our maintenance packages to ensure optimal performance."
      },
      {
        q: "My roof is not made of concrete; can I still install a Solar Project?",
        a: "Yes! Solar power plants can be installed on almost any roof type regardless of shape or material. For brittle materials like asbestos, we provide specialized mounting solutions and roof replacement options."
      }
    ],
    general: [
      {
        q: "Why should I go solar?",
        a: "Solar allows you to save 70-90% on monthly electricity bills while contributing to environmental sustainability. It's a lucrative investment with 2-4 year breakeven period and 25+ years of savings."
      },
      {
        q: "Is Solar energy safe?",
        a: "Absolutely! Solar electricity is identical to grid electricity but cleaner. It's among the safest sources with zero hazardous emissions or toxic gases during production."
      },
      {
        q: "Who all can qualify for a solar system?",
        a: "Anyone with empty roof space and rooftop access can install solar. Just fill our enquiry form and we'll handle everything from design to installation and maintenance."
      },
      {
        q: "What are the different types of Solar systems available?",
        a: "There are 3 main types: On-Grid (connected to power grid), Off-Grid (with battery storage), and Hybrid (combination of both). We help you choose based on your needs."
      },
      {
        q: "Do solar panels produce electricity during cloudy or rainy weather?",
        a: "Yes! Panels generate electricity even in cloudy/rainy conditions, albeit with reduced efficiency. This is factored into our unit generation estimates for every project."
      }
    ],
    economics: [
      {
        q: "How much money can I save?",
        a: "Most customers save 70-90% on electricity bills. Exact savings depend on your consumption, system size, and local electricity rates. Typical breakeven is 2-4 years with 25+ years of continued savings."
      },
      {
        q: "What is the cost of a Solar plant?",
        a: "Costs vary based on size, configuration, and structural requirements. We provide multiple customized options with flexible financing and 0% EMI plans to suit your budget."
      },
      {
        q: "What is the ROI period for a solar plant?",
        a: "Rooftop solar projects achieve breakeven in 2-4 years for residential, commercial, and industrial projects, while you enjoy savings for the entire 25-year project life."
      },
      {
        q: "What subsidies are available?",
        a: "Government subsidies: ₹30,000 for 1kW, ₹60,000 for 2kW, ₹78,000 for 3kW+ (residential). Group housing gets ₹18,000/kW. We handle the entire subsidy process for you."
      },
      {
        q: "What are the financing options?",
        a: "We provide lucrative EMI options and facilitate collateral-free loans through banking partners. Flexible 0% EMI plans are available to make solar affordable for everyone."
      }
    ]
  };

  return (
    <div className="w-full min-h-screen bg-white font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 via-green-800/60 to-green-900/80" />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-yellow-300/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -25, 0],
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <motion.div 
          className="relative z-10 text-center px-4 max-w-5xl"
          style={{ opacity, scale }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white leading-tight drop-shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Still paying for electricity?
          </motion.h1>

          <motion.p
            className="text-2xl md:text-4xl text-green-200 font-bold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Switch to solar. Let the sun pay your bills.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-10"
          >
            <motion.button
              className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 text-gray-900 font-bold py-5 px-12 rounded-full shadow-2xl text-xl inline-flex items-center gap-3"
              whileHover={{ scale: 1.08, boxShadow: "0 25px 70px rgba(251,191,36,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Join India's Solar Revolution
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>

          <motion.div
            className="inline-block bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/30"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <div className="flex items-center gap-2">
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-gray-700 font-semibold">Google</span>
              </div>
              <div className="text-left border-l-2 border-gray-200 pl-4">
                <p className="text-gray-800 font-bold text-sm">India's trusted solar company</p>
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-700 font-bold">4.8</span>
                  <span className="text-gray-600 text-sm">6000+ reviews</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-2">
            <ChevronDown className="w-8 h-8 text-green-200" />
            <span className="text-green-200 text-sm font-medium">Scroll Down</span>
          </div>
        </motion.div>
      </section>

      {/* Solar Solutions Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-20 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our solar solutions
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Homes",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop"
              },
              {
                title: "Housing Society",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop"
              },
              {
                title: "Commercial",
                image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&auto=format&fit=crop"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                className="group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: "spring" }}
                whileHover={{ 
                  scale: 1.05,
                  zIndex: 10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative h-96">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-8 left-0 right-0 text-center">
                    <h3 className="text-4xl font-bold text-white px-4">{service.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "25,000+", label: "Happy Customers" },
              { icon: Building2, value: "200+", label: "Housing Societies" },
              { icon: BatteryMedium, value: "90 MW", label: "Solar Installed" },
              { icon: Leaf, value: "90%", label: "Bill Reduction" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
              >
                <motion.div
                  className="inline-block p-5 rounded-2xl bg-white/20 backdrop-blur-sm mb-4 shadow-xl"
                  whileHover={{ rotate: 360, scale: 1.15 }}
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

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* Left Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
                  90% of customers recommend us!
                </h2>
                <p className="text-gray-600 text-lg">
                  Don't just believe us - read the reviews for yourself.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:sticky md:top-24"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop" 
                    alt="Customer testimonial"
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <motion.div
                      className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-10 h-10 text-white ml-1.5" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="relative pt-16 md:pt-0">
              <motion.div 
                className="absolute -top-4 right-0 z-10"
                whileHover={{ y: -3 }}
              >
                <button 
                  onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="p-3 bg-white border-2 border-gray-200 rounded-full hover:border-green-600 hover:bg-green-50 transition-all shadow-md"
                >
                  <ChevronDown className="w-5 h-5 text-gray-700 rotate-180" />
                </button>
              </motion.div>

              <div className="space-y-6 mt-8">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-900 text-white p-8 md:p-10 rounded-2xl shadow-xl"
                >
                  <p className="text-lg md:text-xl leading-relaxed mb-6 italic font-light">
                    "{testimonials[activeTestimonial].text}"
                  </p>
                  <div className="border-t border-white/20 pt-4">
                    <h4 className="text-lg md:text-xl font-bold">
                      {testimonials[activeTestimonial].name}, {testimonials[activeTestimonial].location}
                    </h4>
                    <p className="text-green-300 text-sm mt-1">{testimonials[activeTestimonial].type}</p>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 p-8 md:p-10 rounded-2xl shadow-md opacity-70"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                >
                  <p className="text-base md:text-lg leading-relaxed mb-4 italic font-light line-clamp-3">
                    "{testimonials[(activeTestimonial + 1) % testimonials.length].text}"
                  </p>
                  <div className="border-t border-gray-400/30 pt-3">
                    <h4 className="text-base md:text-lg font-bold text-gray-700">
                      {testimonials[(activeTestimonial + 1) % testimonials.length].name}...
                    </h4>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                className="absolute -bottom-4 right-0 z-10"
                whileHover={{ y: 3 }}
              >
                <button 
                  onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="p-3 bg-white border-2 border-gray-200 rounded-full hover:border-green-600 hover:bg-green-50 transition-all shadow-md"
                >
                  <ChevronDown className="w-5 h-5 text-gray-700" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section - Infinite Slider */}
      <section className="py-20 px-6 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Trusted By
          </motion.h2>
          
          <div className="relative">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
            
            <div className="overflow-hidden py-8">
              <motion.div
                className="flex gap-16 items-center"
                animate={{
                  x: [0, -1280],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }}
              >
                {/* First set of logos */}
                {[
                  { 
                    name: "Prince Pipes",
                    logo: "https://play-lh.googleusercontent.com/xefGJ9qIzjQFOtU9u4gW-TEGQemvbHVaQ1VCNd6ct5LEHChAwkJM3v9gVxU4Cw2F91Q=w240-h480-rw"},
                  { 
                    name: "TVS",
                    logo: "https://upload.wikimedia.org/wikipedia/ta/7/79/TVS_Motor_Company_Logo.png"
                  },
                  { 
                    name: "UltraTech Cement",
                    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Ultratech_Cement_Logo.svg/1200px-Ultratech_Cement_Logo.svg.png"
                  },
                  { 
                    name: "Johnson & Johnson",
                    logo: "https://pharmaphorum.com/wp-content/uploads/2016/06/JJ-logo.jpg"
                  },
                  { 
                    name: "I'Decor",
                    logo: "https://img.yfisher.com/m6153/1730345878jrdu.png"
                  }
                ].map((company, i) => (
                  <motion.div
                    key={`first-${i}`}
                    className="flex-shrink-0 w-56 h-24 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 px-4"
                    whileHover={{ scale: 1.15 }}
                  >
                    <img 
                      src={company.logo}
                      alt={company.name}
                      className="max-h-16 max-w-full w-auto object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<div class="text-2xl font-bold text-gray-700">${company.name}</div>`;
                      }}
                    />
                  </motion.div>
                ))}

                 {/* First set of logos */}
                {[
                  { 
                    name: "Prince Pipes",
                    logo: "https://play-lh.googleusercontent.com/xefGJ9qIzjQFOtU9u4gW-TEGQemvbHVaQ1VCNd6ct5LEHChAwkJM3v9gVxU4Cw2F91Q=w240-h480-rw"},
                  { 
                    name: "TVS",
                    logo: "https://upload.wikimedia.org/wikipedia/ta/7/79/TVS_Motor_Company_Logo.png"
                  },
                  { 
                    name: "UltraTech Cement",
                    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Ultratech_Cement_Logo.svg/1200px-Ultratech_Cement_Logo.svg.png"
                  },
                  { 
                    name: "Johnson & Johnson",
                    logo: "https://pharmaphorum.com/wp-content/uploads/2016/06/JJ-logo.jpg"
                  },
                  { 
                    name: "I'Decor",
                    logo: "https://img.yfisher.com/m6153/1730345878jrdu.png"
                  }
                ].map((company, i) => (
                  <motion.div
                    key={`second-${i}`}
                    className="flex-shrink-0 w-56 h-24 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 px-4"
                    whileHover={{ scale: 1.15 }}
                  >
                    <img 
                      src={company.logo}
                      alt={company.name}
                      className="max-h-16 max-w-full w-auto object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<div class="text-2xl font-bold text-gray-700">${company.name}</div>`;
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-6 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 text-lg mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Everything you need to know about going solar
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { key: 'general', label: 'General', icon: Sparkles },
              { key: 'maintenance', label: 'Maintenance', icon: Wrench },
              { key: 'economics', label: 'Economics', icon: DollarSign }
            ].map((tab) => (
              <motion.button
                key={tab.key}
                onClick={() => setActiveFaqTab(tab.key)}
                className={`flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg ${
                  activeFaqTab === tab.key
                    ? 'bg-gradient-to-r from-blue-800 to-indigo-800 text-white scale-105'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-green-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </motion.button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqTabs[activeFaqTab].map((faq, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 shadow-md overflow-hidden hover:shadow-xl hover:border-green-400 transition-all"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <details className="group">
                  <summary className="flex justify-between items-start p-6 cursor-pointer list-none">
                    <span className="text-lg font-bold text-gray-800 pr-4 leading-snug">{faq.q}</span>
                    <ChevronDown className="w-6 h-6 text-green-600 flex-shrink-0 mt-1 group-open:rotate-180 transition-transform duration-300" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed text-base">
                    {faq.a}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 relative overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1], 
            x: [0, 50, 0],
            opacity: [0.3, 0.6, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.div
          className="max-w-5xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1 }}
          >
            <div className="w-20 h-20 rounded-full bg-white p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <Sun className="w-10 h-10 text-white" />
              </div>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 text-white leading-tight drop-shadow-lg">
            Ready to Power Your Future?
          </h2>
          <p className="text-xl md:text-2xl text-green-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join 25,000+ satisfied customers. Start your journey to energy independence and save up to 90% on electricity bills today!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: DollarSign, text: "Save 70-90%" },
              { icon: Shield, text: "25+ Year Warranty" },
              { icon: Zap, text: "Quick Install" },
              { icon: Leaf, text: "Eco-Friendly" }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center gap-2 p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                <item.icon className="w-8 h-8 text-yellow-300" />
                <span className="text-sm font-bold text-white">{item.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-5 justify-center flex-wrap">
            <motion.button
              className="group bg-white text-green-700 font-bold py-5 px-12 rounded-full shadow-2xl text-xl flex items-center gap-3"
              whileHover={{ scale: 1.08, boxShadow: "0 25px 70px rgba(255,255,255,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-6 h-6" />
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              className="bg-transparent border-3 border-white text-white font-bold py-5 px-12 rounded-full text-xl flex items-center gap-3 backdrop-blur-sm"
              whileHover={{ scale: 1.08, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>

          <motion.p
            className="mt-10 text-green-100 text-base flex items-center justify-center gap-6 flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <span className="flex items-center gap-2">⚡ Response within 24 hours</span>
            <span className="flex items-center gap-2">🌿 Free consultation</span>
            <span className="flex items-center gap-2">📞 No obligation</span>
          </motion.p>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;