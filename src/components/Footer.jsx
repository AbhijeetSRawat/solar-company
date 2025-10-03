import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-700 via-green-500 to-blue-400 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">MAVEN Green Energy Pvt. Ltd.</h3>
          <p className="text-green-50">
            Delivering clean, sustainable solar energy solutions for residential, commercial, industrial, and BESS applications.
            Together, we build a greener tomorrow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-green-100">
            <li>
              <a href="/" className="hover:text-green-200 transition">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-green-200 transition">About</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-200 transition">Contact</a>
            </li>
            <li>
              <a href="#faq" className="hover:text-green-200 transition">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-green-50">
            Email: info@mavengreenenergy.com<br />
            Phone: +91 (123) 456-7890<br />
            Address: Green Tower, Solar City, India
          </p>
          <div className="mt-4 flex space-x-4">
            <a href="https://facebook.com" className="hover:text-green-200" aria-label="Facebook">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.986h-2.54v-2.892h2.54v-2.205c0-2.507 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.772-1.63 1.562v1.878h2.773l-.443 2.892h-2.33v6.986C18.343 21.127 22 16.99 22 12z"/></svg>
            </a>
            <a href="https://twitter.com" className="hover:text-green-200" aria-label="Twitter">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.07 9.07 0 01-2.88 1.1 4.52 4.52 0 00-7.69 4.13 12.88 12.88 0 01-9.32-4.72 4.52 4.52 0 001.39 6.07 4.48 4.48 0 01-2.05-.56v.06a4.52 4.52 0 003.63 4.43 4.5 4.5 0 01-2.04.08 4.53 4.53 0 004.22 3.14 9 9 0 01-5.72 1.98A8.95 8.95 0 012 19.54a12.8 12.8 0 006.92 2.04c8.3 0 12.85-6.88 12.85-12.85 0-.2-.01-.42-.02-.63A9.18 9.18 0 0023 3z"/></svg>
            </a>
            <a href="https://linkedin.com" className="hover:text-green-200" aria-label="LinkedIn">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.07-.93-1.75-1.75-1.75s-1.75.68-1.75 1.75v4.5h-3v-9h3v1.25c.53-.75 1.88-1.5 3-1.5 1.56 0 3.25 1.14 3.25 3.5v5.75z"/></svg>
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-green-100 text-sm">
        &copy; {new Date().getFullYear()} MAVEN Green Energy Private Limited. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
