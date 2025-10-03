import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/vite.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' }
  ];

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gradient-to-r from-green-800 via-green-500 to-blue-500 shadow-2xl py-2' 
          : 'bg-gradient-to-r from-green-700 via-green-400 to-blue-400 shadow-lg py-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand with animation */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-green-300 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <img
                src={logo}
                alt="MAVEN logo"
                className="relative h-12 w-12 rounded-full border-2 border-green-300 shadow-lg object-contain bg-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
              />
            </div>
            <Link 
              to="/" 
              className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide text-white relative"
              onClick={() => setActiveLink('/')}
            >
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-green-50 to-white group-hover:from-green-100 group-hover:via-white group-hover:to-green-100 transition-all duration-300">
                MAVEN Green Energy
              </span>
              <span className="hidden md:inline text-sm font-light ml-2 opacity-80">Pvt. Ltd.</span>
            </Link>
          </div>

          {/* Desktop Menu with animated underline */}
          <div className="hidden md:flex space-x-2 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 font-semibold text-white group overflow-hidden"
                onClick={() => setActiveLink(link.path)}
              >
                <span className="relative z-10 group-hover:text-green-100 transition-colors duration-300">
                  {link.label}
                </span>
                
                {/* Animated background on hover */}
                <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded"></span>
                
                {/* Animated underline */}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-200 to-blue-200 transform transition-transform duration-300 ${
                    activeLink === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                ></span>
                
                {/* Shimmer effect */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu button with animation */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 transform hover:scale-110 active:scale-95"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span 
                  className={`w-full h-0.5 bg-white rounded-full transform transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span 
                  className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                  }`}
                ></span>
                <span 
                  className={`w-full h-0.5 bg-white rounded-full transform transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with slide animation */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div 
          className="bg-gradient-to-b from-green-600 via-green-500 to-blue-500 backdrop-blur-lg"
          id="mobile-menu"
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-lg text-white font-semibold text-lg relative overflow-hidden group transform transition-all duration-300 ${
                  isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                }`}
                style={{ 
                  transitionDelay: isOpen ? `${index * 100}ms` : '0ms'
                }}
                onClick={() => {
                  setIsOpen(false);
                  setActiveLink(link.path);
                }}
              >
                <span className="relative z-10 group-hover:text-green-100 transition-colors duration-300">
                  {link.label}
                </span>
                
                {/* Hover background */}
                <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></span>
                
                {/* Active indicator */}
                {activeLink === link.path && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full animate-pulse"></span>
                )}
                
                {/* Ripple effect */}
                <span className="absolute inset-0 opacity-0 group-active:opacity-100 transition-opacity duration-300">
                  <span className="absolute inset-0 bg-white/30 rounded-lg scale-0 group-active:scale-100 transition-transform duration-500"></span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;