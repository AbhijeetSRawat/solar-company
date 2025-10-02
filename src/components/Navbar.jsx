import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../public/vite.jpg'; // Adjust path if needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-yellow-900 via-orange-700 to-yellow-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="SolarCo Logo"
              className="h-10 w-10 rounded-full border-2 border-yellow-400 shadow-lg object-cover"
            />
            <Link to="/" className="text-3xl font-extrabold tracking-wide text-yellow-400 drop-shadow">
              SolarCo
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            <Link
              to="/"
              className="hover:text-orange-400 px-3 py-2 rounded transition font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-orange-400 px-3 py-2 rounded transition font-semibold"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md hover:text-orange-300 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-yellow-900 via-orange-700 to-yellow-500" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-lg font-semibold">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md hover:bg-yellow-300 hover:text-orange-900"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md hover:bg-yellow-300 hover:text-orange-900"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
