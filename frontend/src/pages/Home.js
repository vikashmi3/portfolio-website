import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useEffect} from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import { FaDownload } from 'react-icons/fa';
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
    <div className="min-h-screen flex items-center justify-center pt-12 sm:pt-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        {/* Floating shapes */}
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-1/3 right-1/5 w-56 sm:w-72 lg:w-96 h-56 sm:h-72 lg:h-96 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mix-blend-multiply filter blur-3xl opacity-25 animate-float-delay"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 sm:w-80 lg:w-[400px] h-64 sm:h-80 lg:h-[400px] rounded-full bg-gradient-to-r from-indigo-400 to-blue-500 mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-10 right-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-10 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-5 w-1 h-1 bg-indigo-400 rounded-full animate-bounce"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="mb-8 lg:mb-12"
          >
            {/* Enhanced Profile Image */}
            <motion.div 
              className="relative inline-block mb-6 lg:mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
              <img
                src="/images/profile.jpg"
                alt="Vikash R Mishra"
                className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full mx-auto border-4 border-white shadow-2xl object-cover backdrop-blur-sm"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              </div>
            </motion.div>
            
            {/* Enhanced Heading */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                Vikash Mishra
              </span>
            </motion.h1>
            
            {/* Animated Role Cards */}
            <div className="relative h-16 sm:h-20 lg:h-24 mb-6 lg:mb-8 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                {[
                  { text: 'Full Stack Developer', icon: '🚀', color: 'from-blue-500 to-cyan-500' },
                  { text: 'MERN Stack Expert', icon: '💻', color: 'from-green-500 to-emerald-500' },
                  { text: 'React.js Specialist', icon: '⚛️', color: 'from-blue-400 to-indigo-500' },
                  { text: 'UI/UX Designer', icon: '🎨', color: 'from-pink-500 to-rose-500' },
                  { text: 'Problem Solver', icon: '🧩', color: 'from-purple-500 to-violet-500' }
                ].map((role, index) => (
                  <motion.div
                    key={index}
                    className={`absolute inset-0 flex items-center justify-center`}
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ 
                      opacity: [0, 1, 1, 0],
                      y: [50, 0, 0, -50],
                      rotateX: [-90, 0, 0, 90]
                    }}
                    transition={{
                      duration: 4,
                      delay: index * 4,
                      repeat: Infinity,
                      repeatDelay: 16,
                      ease: "easeInOut"
                    }}
                  >
                    <div className={`bg-gradient-to-r ${role.color} text-white px-6 py-3 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300`}>
                      <div className="flex items-center gap-3 text-lg sm:text-xl lg:text-2xl font-bold">
                        <span className="text-2xl animate-bounce">{role.icon}</span>
                        <span>{role.text}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Enhanced Description with Skills */}
            <motion.div 
              className="max-w-4xl mx-auto mb-8 lg:mb-12 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Passionate about creating{' '}
                <span className="font-semibold text-blue-600 dark:text-blue-400">innovative web solutions</span>{' '}
                with modern technologies. I build{' '}
                <span className="font-semibold text-purple-600 dark:text-purple-400">responsive, user-friendly applications</span>{' '}
                that solve real-world problems.
              </p>
              
              {/* Tech Stack Pills */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {['React', 'Node.js', 'JavaScript', 'MongoDB', 'Express', 'Tailwind'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, backgroundColor: '#3B82F6', color: '#FFFFFF' }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center gap-6 mb-12 lg:mb-16 px-4"
          >
            {/* Resume Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md">
              <motion.a 
                href="/files/vikash_mishra_resume.pdf" 
                download="Vikash_Mishra_Resume.pdf"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="group-hover:animate-bounce" />
                <span className="hidden sm:inline">Download Resume</span>
                <span className="sm:hidden">Download PDF</span>
              </motion.a>
              <motion.a 
                href="/files/resume.html" 
                target="_blank"
                className="group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                </svg>
                <span className="hidden sm:inline">View Online</span>
                <span className="sm:hidden">View Resume</span>
              </motion.a>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-lg">
              <motion.div className="flex-1">
                <Link 
                  to="/projects" 
                  className="group w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd"></path>
                  </svg>
                  <span className="hidden sm:inline">View My Work</span>
                  <span className="sm:hidden">Projects</span>
                </Link>
              </motion.div>
              <motion.div className="flex-1">
                <Link 
                  to="/courses" 
                  className="group w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white px-6 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 animate-gradient-x"
                >
                  <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                  </svg>
                  <span className="hidden sm:inline">Explore Courses</span>
                  <span className="sm:hidden">Courses</span>
                </Link>
              </motion.div>
            </div>
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