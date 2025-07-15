import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';
import SplashScreen from '../components/SplashScreen';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
    <div className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
        
        {/* Floating shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400 mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/5 w-72 h-72 rounded-full bg-purple-400 mix-blend-multiply filter blur-3xl opacity-20 animate-float-delay"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-indigo-400 mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img
              src="/images/profile.jpg"
              alt="Vikash R Mishra"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary shadow-lg object-cover"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Vikash Mishra</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              <span ref={el => {
                if (el) {
                  new Typed(el, {
                    strings: [
                      'Full Stack Developer',
                      'React.js Developer', 
                      'Node.js Developer'
                    ],
                    typeSpeed: 50,
                    backSpeed: 30,
                    loop: true
                  });
                }
              }}></span>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Passionate about creating innovative web solutions with modern technologies. 
              I build responsive, user-friendly applications that solve real-world problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <div className="flex flex-col sm:flex-row gap-2">
              <a 
                href="/files/vikash_mishra_resume.pdf" 
                download="Vikash_Mishra_Resume.pdf"
                className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <FaDownload />
                Download PDF
              </a>
              <a 
                href="/files/resume.html" 
                target="_blank"
                className="bg-secondary hover:bg-primary text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                View Resume
              </a>
            </div>
            <Link 
              to="/projects" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-medium transition-colors inline-block"
            >
              View My Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
          </motion.div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Home;