import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, BookOpen, ArrowRight, Calendar, Clock, User, Search, X } from 'lucide-react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'featured', label: 'Featured' },
    { id: 'general', label: 'General' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'guides', label: 'Installation Guides' }
  ];

  const blogPosts = [
    {
      id: 1,
      category: 'featured',
      title: 'Does your solar GUARANTEE power production and savings?',
      excerpt: 'We have been in the solar industry for over a decade and have noticed a recurring pattern...',
      content: 'We have been in the solar industry for over a decade and have noticed a recurring pattern: customers are often promised high returns and efficiency, but the reality falls short. At MAVEN Green Energy, we guarantee power production and savings with our state-of-the-art monitoring systems and performance warranties. Our solar systems are designed to deliver consistent energy output, backed by 25+ years of warranty coverage. We provide transparent reporting and real-time monitoring so you can track your savings and energy production every single day.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop',
      author: 'MAVEN Team',
      date: 'October 5, 2025',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      category: 'featured',
      title: 'Introducing Intelligent WindPro Mount™ 2.0: The Latest Solar Mounting Structure',
      excerpt: 'The increasing frequency of extreme weather events due to climate change has emphasized...',
      content: 'The increasing frequency of extreme weather events due to climate change has emphasized the need for robust solar mounting solutions. Our new Intelligent WindPro Mount™ 2.0 is engineered to withstand cyclonic winds up to 180 km/h. This revolutionary mounting structure uses chemically anchored bolts and aerospace-grade aluminum alloys to ensure your solar panels stay secure in the harshest conditions. The design incorporates advanced aerodynamics to reduce wind load and prevent uplift, making it the safest choice for Indian weather conditions.',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&auto=format&fit=crop',
      author: 'Tech Team',
      date: 'October 3, 2025',
      readTime: '7 min read',
      featured: true
    },
    {
      id: 3,
      category: 'featured',
      title: 'Solar Sahi Hai, Par Sahi Solar Kya Hai? 5 Features Of A Durable Solar System',
      excerpt: 'The continued increase in electricity rates every year, the government\'s push for renewable energy...',
      content: 'The continued increase in electricity rates every year, the government\'s push for renewable energy, and environmental concerns have made solar power an attractive option. But how do you choose the right solar system? Here are 5 essential features: 1) High-efficiency Tier-1 panels with 21%+ efficiency, 2) Robust mounting structures certified for Indian weather, 3) Advanced inverters with 98% efficiency, 4) Comprehensive monitoring systems for real-time tracking, and 5) Long-term warranties (25+ years). At MAVEN, we ensure all these features in every installation.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop',
      author: 'MAVEN Experts',
      date: 'October 1, 2025',
      readTime: '6 min read',
      featured: true
    },
    {
      id: 4,
      category: 'general',
      title: 'What is Solar Panel Voltage and its Types? Learn How to Calculate',
      excerpt: 'Wondering what the voltage of a single solar cell is? Click here to find out the solar panel voltage...',
      content: 'Understanding solar panel voltage is crucial for designing an efficient solar system. A single solar cell typically produces 0.5-0.6 volts. When multiple cells are connected in series, the voltage adds up. Most residential solar panels have 60-72 cells, producing 30-40 volts (open circuit). The operating voltage is typically 15-20% lower. System voltage depends on how panels are wired: series connections increase voltage while parallel connections increase current. For grid-tied systems, the inverter converts DC voltage to AC at 230V/50Hz for Indian homes.',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format&fit=crop',
      author: 'Technical Team',
      date: 'September 28, 2025',
      readTime: '8 min read'
    },
    {
      id: 5,
      category: 'general',
      title: 'What is an Energy Meter? A Detailed Guide on Types and Benefits',
      excerpt: 'Wondering what an electricity meter is and why it is essential? Read this blog to know more...',
      content: 'An energy meter measures electrical energy consumption in kilowatt-hours (kWh). For solar installations, a bi-directional or net meter is essential - it measures both energy consumed from the grid and excess energy exported to the grid. There are three main types: 1) Electromechanical meters (traditional spinning disc), 2) Electronic meters (digital display), and 3) Smart meters (remote reading and monitoring). Net metering allows you to earn credits for excess solar energy, effectively reducing your electricity bills to zero in many cases.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop',
      author: 'MAVEN Team',
      date: 'September 25, 2025',
      readTime: '6 min read'
    },
    {
      id: 6,
      category: 'general',
      title: 'What is Solar Cooling? Techniques, Benefits, and Working',
      excerpt: 'Want to learn all about solar cooling, its types, advantages, limitations, and scope in India...',
      content: 'Solar cooling uses solar energy to power air conditioning and refrigeration systems. There are three main approaches: 1) Solar electric cooling - using solar PV panels to power conventional AC units, 2) Solar thermal cooling - using solar heat to drive absorption chillers, and 3) Passive solar cooling - using building design to reduce heat gain. The most practical solution for Indian homes is solar electric cooling, where rooftop solar panels power your air conditioners during peak summer when both solar generation and cooling demand are highest. This can reduce AC running costs by up to 100%.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&auto=format&fit=crop',
      author: 'Research Team',
      date: 'September 22, 2025',
      readTime: '10 min read'
    },
    {
      id: 7,
      category: 'residential',
      title: 'How to Clean Solar Panels? A Guide on Rooftop Solar Panel Cleaning',
      excerpt: 'This blog explains safe cleaning practices for solar panels and how frequently you should clean...',
      content: 'Regular cleaning maintains optimal solar panel performance. In India, dust, pollution, and bird droppings can reduce efficiency by 15-25%. Clean panels 1-2 times monthly during dry season, less frequently during monsoon. Best time is early morning or evening when panels are cool. Use only clean water (no soap/detergent) and a soft cloth or brush. Never use abrasive materials or high-pressure washers. For rooftop safety, consider hiring professionals. MAVEN provides free cleaning services for the first 5 years with annual maintenance contracts.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop',
      author: 'Maintenance Team',
      date: 'September 20, 2025',
      readTime: '5 min read'
    },
    {
      id: 8,
      category: 'residential',
      title: '5 kW Solar Panel Price in India With Subsidy in 2025',
      excerpt: 'Looking to buy rooftop solar panels? Click here for information on 5kw solar panel prices...',
      content: 'A 5kW solar system is ideal for Indian homes consuming 600-800 units monthly. Total cost: ₹2,50,000-₹3,00,000 before subsidy. Government subsidy: ₹78,000 for residential installations. Net cost: ₹1,72,000-₹2,22,000. This system generates approximately 20-25 units per day (600-750 units/month), saving ₹4,500-₹6,000 monthly on electricity bills. Payback period: 3-4 years. Total savings over 25 years: ₹13.5-18 lakhs. Includes: 10-12 solar panels (540W each), 5kW inverter, mounting structures, cabling, and installation. MAVEN offers 0% EMI options making solar affordable for all.',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&auto=format&fit=crop',
      author: 'Pricing Team',
      date: 'September 18, 2025',
      readTime: '7 min read'
    },
    {
      id: 9,
      category: 'residential',
      title: 'Can AC Run on Solar Power? A Guide for 2025',
      excerpt: 'Air conditioners are one of the heavy-load home appliances that use a lot of electricity...',
      content: 'Yes! Air conditioners can absolutely run on solar power. A 1.5 ton AC typically consumes 1.5-2 kW. For an AC that runs 8 hours daily, you need a 3kW solar system (generates 12-15 units/day). A 5kW system can power two ACs plus other appliances. Key considerations: 1) AC power consumption varies by star rating (5-star is most efficient), 2) Solar generation peaks during afternoon when AC usage is highest, 3) Without batteries, AC runs when sun is shining, 4) With battery storage, run AC anytime. MAVEN designs custom solar+AC solutions optimized for your usage pattern.',
      image: 'https://os-wordpress-media.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/11/24212247/Air-Conditioner-Buying-Guide.jpg',
      author: 'MAVEN Experts',
      date: 'September 15, 2025',
      readTime: '6 min read'
    },
    {
      id: 10,
      category: 'commercial',
      title: 'Commercial Solar Installation: Complete ROI Guide for 2025',
      excerpt: 'Looking to reduce operational costs? Learn how commercial solar can save your business lakhs annually...',
      content: 'Commercial solar systems (10kW-100kW) offer excellent ROI for businesses. Average system cost: ₹50,000-₹55,000 per kW installed. No residential subsidy, but businesses can claim accelerated depreciation (40% in Year 1, 20% in Year 2). A typical 50kW system costs ₹25-27 lakhs, generates 200-250 units daily, saves ₹60,000-₹75,000 monthly. Payback period: 2.5-3 years. Over 25 years, total savings exceed ₹1.8 crores. Additional benefits: CSR compliance, reduced carbon footprint, predictable energy costs, protection from rate hikes. MAVEN has installed solar for 200+ businesses across India.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop',
      author: 'Commercial Team',
      date: 'September 12, 2025',
      readTime: '9 min read'
    },
    {
      id: 11,
      category: 'commercial',
      title: 'Tax Benefits of Commercial Solar: Depreciation & Incentives',
      excerpt: 'Maximize your solar investment with tax benefits. Learn about accelerated depreciation and more...',
      content: 'Commercial solar installations qualify for significant tax benefits in India. Accelerated Depreciation: Claim 40% depreciation in Year 1 and 20% in subsequent years on solar assets. For a ₹25 lakh investment, save ₹3.5 lakhs (assuming 35% tax rate) in Year 1 alone. GST Input Credit: Claim GST paid on solar equipment and installation. State incentives vary - some states offer additional subsidies, wheeling/banking benefits, and preferential tariffs. Combined with energy savings, tax benefits significantly improve ROI. MAVEN\'s finance team helps you maximize all available incentives.',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop',
      author: 'Finance Team',
      date: 'September 10, 2025',
      readTime: '8 min read'
    },
    {
      id: 12,
      category: 'guides',
      title: 'Step-by-Step Solar Installation Guide: What to Expect',
      excerpt: 'Planning solar installation? Here\'s a complete timeline from consultation to commissioning...',
      content: 'Solar installation with MAVEN follows a systematic 7-step process: 1) Free Site Survey (Day 1) - our engineers visit, measure roof area, check structural integrity, assess shading. 2) 3D Design (Day 1-2) - custom system design with production estimates. 3) Financial Approval (Day 3-5) - finalize pricing, subsidy application, EMI if needed. 4) Permits & Approvals (1-2 weeks) - DISCOM approval, net meter application. 5) Procurement (3-5 days) - order panels, inverters, mounting structures. 6) Installation (1-3 days) - professional team installs system. 7) Commissioning & Handover - DISCOM inspection, meter installation, system activation. Total timeline: 3-4 weeks.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop',
      author: 'Installation Team',
      date: 'September 8, 2025',
      readTime: '10 min read'
    },
    {
      id: 13,
      category: 'guides',
      title: 'Net Metering Explained: Complete Guide for Solar Users',
      excerpt: 'Learn how net metering works, benefits, and application process for grid-tied solar systems...',
      content: 'Net metering allows solar users to export excess electricity to the grid and receive credits. How it works: During day, when solar generation exceeds consumption, extra power flows to grid (meter runs backward). At night, you draw from grid (meter runs forward). Monthly bill = Grid Import - Grid Export. Bi-directional meter tracks both flows. Most states allow annual netting - unused credits carry forward up to 12 months. Application process: Submit application with DISCOM along with solar system details, pay fees (₹1000-₹3000), wait for approval (2-4 weeks), install bi-directional meter. MAVEN handles entire net metering process.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop',
      author: 'Technical Team',
      date: 'September 5, 2025',
      readTime: '7 min read'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'featured' 
      ? post.featured 
      : post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleReadMore = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="w-full min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-green-700">
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
          <motion.div
            className="inline-block p-4 rounded-full bg-white/20 mb-6"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <BookOpen className="w-12 h-12 text-white" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            MAVEN Solar Blog
          </h1>
          <p className="text-xl md:text-2xl text-green-200 max-w-3xl mx-auto">
            The Ultimate Guide to Solar Energy for Your Home and Business
          </p>
        </motion.div>
      </section>

      {/* Search and Filter Bar */}
      <section className="py-8 px-6 bg-white border-b-2 border-gray-100 sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none"
              />
            </div>

            {/* Category Buttons */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {categories.find(c => c.id === activeCategory)?.label}
          </motion.h2>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, i) => (
                <motion.article
                  key={post.id}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-green-400 cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -5 }}
                  onClick={() => handleReadMore(post)}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    {post.featured && (
                      <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                        FEATURED
                      </div>
                    )}
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>

                    {/* Read More Link */}
                    <motion.button
                      className="text-green-600 font-semibold text-sm flex items-center gap-2"
                      whileHover={{ x: 5 }}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedPost && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Image */}
              <div className="relative h-96 overflow-hidden">
                <img 
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Close Button */}
                <motion.button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6 text-gray-900" />
                </motion.button>

                {/* Title on Image */}
                <div className="absolute bottom-8 left-8 right-8">
                  <h2 className="text-4xl font-bold text-white mb-4">
                    {selectedPost.title}
                  </h2>
                  <div className="flex items-center gap-6 text-white/90">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {selectedPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {selectedPost.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {selectedPost.readTime}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 md:p-12">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {selectedPost.content}
                </p>
                
                {/* CTA */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Interested in Going Solar?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Get a free consultation and custom quote for your property
                  </p>
                  <motion.button
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Free Consultation
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Newsletter Section */}
     

    </div>
  );
};

export default Blog;
