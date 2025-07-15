import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaCode } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white py-12 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-blue-400 mix-blend-overlay filter blur-3xl opacity-20"></div>
      <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-purple-400 mix-blend-overlay filter blur-3xl opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 shadow-xl">
            <div className="flex items-center mb-4">
              <FaCode className="text-blue-400 mr-3" size={24} />
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Vikash Mishra</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Full Stack Developer specializing in modern web technologies and mobile app development.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/vikashmi3/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/er-vikash-mishra-ba198b181"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com/VikashM31718665"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 shadow-xl">
            <h3 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 shadow-xl">
            <h3 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-3" />
                <span className="text-gray-300">study.vikashmishra@email.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-400 mr-3" />
                <span className="text-gray-300">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Vikash Mishra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;