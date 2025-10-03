import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp, Sun, Leaf } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Twitter, url: 'https://twitter.com', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Instagram, url: 'https://instagram.com', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Youtube, url: 'https://youtube.com', label: 'YouTube', color: 'hover:bg-red-600' }
  ];

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '#contact', label: 'Contact' },
    { path: '#faq', label: 'FAQ' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-green-700 via-emerald-600 to-blue-600 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-green-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
            x: [0, -30, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Icons */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            {i % 2 === 0 ? (
              <Sun className="w-8 h-8 text-yellow-300/20" />
            ) : (
              <Leaf className="w-8 h-8 text-green-300/20" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Main Footer Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* About Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="relative"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-yellow-400 rounded-full blur-md opacity-50"></div>
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-green-500 flex items-center justify-center">
                  <Sun className="w-6 h-6 text-white" />
                </div>
              </motion.div>
              <h3 className="text-xl font-bold">MAVEN Green Energy</h3>
            </div>
            <p className="text-green-50 text-sm leading-relaxed">
              Delivering clean, sustainable solar energy solutions for residential, commercial, industrial, and BESS applications. Together, we build a greener tomorrow.
            </p>
            <motion.div
              className="flex items-center gap-2 text-green-100"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Leaf className="w-4 h-4" />
              <span className="text-xs font-semibold">Certified Green Energy Provider</span>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-yellow-400 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.path.startsWith('#') ? (
                    <a
                      href={link.path}
                      className="text-green-100 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-yellow-400 group-hover:w-4 transition-all duration-300"></span>
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-green-100 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-yellow-400 group-hover:w-4 transition-all duration-300"></span>
                      {link.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-yellow-400 rounded-full"></span>
              Contact Us
            </h3>
            <div className="space-y-4">
              <motion.a
                href="mailto:info@mavengreenenergy.com"
                className="flex items-start gap-3 text-green-100 hover:text-white transition-colors group"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Mail className="w-4 h-4" />
                </motion.div>
                <div className="text-sm">
                  <p className="font-semibold text-white">Email</p>
                  <p>info@mavengreenenergy.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+911234567890"
                className="flex items-start gap-3 text-green-100 hover:text-white transition-colors group"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Phone className="w-4 h-4" />
                </motion.div>
                <div className="text-sm">
                  <p className="font-semibold text-white">Phone</p>
                  <p>+91 (123) 456-7890</p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-start gap-3 text-green-100 group"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <MapPin className="w-4 h-4" />
                </motion.div>
                <div className="text-sm">
                  <p className="font-semibold text-white">Address</p>
                  <p>Green Tower, Solar City, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Social Media & Newsletter */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <span className="w-1 h-6 bg-yellow-400 rounded-full"></span>
              Follow Us
            </h3>
            <p className="text-green-100 text-sm">
              Stay connected and join our community for the latest updates on clean energy.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 ${social.color} transition-all duration-300 group`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider with animation */}
        <motion.div
          className="my-10 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          variants={itemVariants}
        >
          <p className="text-green-100 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-white">MAVEN Green Energy Private Limited</span>. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4 text-sm text-green-100">
            <motion.a
              href="#privacy"
              className="hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
            <span>•</span>
            <motion.a
              href="#terms"
              className="hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-yellow-400 to-green-500 text-white rounded-full shadow-2xl z-50 group"
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
        <motion.div
          className="absolute inset-0 rounded-full bg-white/20"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      </motion.button>
    </footer>
  );
};

export default Footer;
