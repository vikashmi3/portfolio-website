import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3Alt, FaDocker, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiCplusplus, SiC, SiMongodb, SiExpress, SiTailwindcss, SiFirebase } from 'react-icons/si';

const SplashScreen = ({ onComplete }) => {
  const [showSplash, setShowSplash] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress animation
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 2;
      });
    }, 80);

    const timer = setTimeout(() => {
      setShowSplash(false);
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 4500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, [onComplete]);

  const icons = [
    { Icon: FaReact, color: '#61DAFB', x: '8%', y: '15%', delay: 0.2, size: { mobile: 35, desktop: 60 } },
    { Icon: FaNodeJs, color: '#68A063', x: '75%', y: '12%', delay: 0.3, size: { mobile: 30, desktop: 50 } },
    { Icon: SiJavascript, color: '#F7DF1E', x: '20%', y: '65%', delay: 0.4, size: { mobile: 28, desktop: 45 } },
    { Icon: FaPython, color: '#3776AB', x: '82%', y: '75%', delay: 0.5, size: { mobile: 32, desktop: 55 } },
    { Icon: FaJava, color: '#007396', x: '65%', y: '35%', delay: 0.6, size: { mobile: 30, desktop: 48 } },
    { Icon: SiCplusplus, color: '#00599C', x: '12%', y: '85%', delay: 0.7, size: { mobile: 31, desktop: 52 } },
    { Icon: SiC, color: '#A8B9CC', x: '45%', y: '25%', delay: 0.8, size: { mobile: 25, desktop: 40 } },
    { Icon: FaHtml5, color: '#E34F26', x: '88%', y: '28%', delay: 0.9, size: { mobile: 26, desktop: 42 } },
    { Icon: FaCss3Alt, color: '#1572B6', x: '28%', y: '80%', delay: 1.0, size: { mobile: 26, desktop: 42 } },
    { Icon: SiMongodb, color: '#47A248', x: '55%', y: '88%', delay: 1.1, size: { mobile: 28, desktop: 46 } },
    { Icon: SiExpress, color: '#ffffff', x: '78%', y: '55%', delay: 1.2, size: { mobile: 27, desktop: 44 } },
    { Icon: SiTailwindcss, color: '#38B2AC', x: '18%', y: '45%', delay: 1.3, size: { mobile: 29, desktop: 48 } },
    { Icon: FaDocker, color: '#2496ED', x: '68%', y: '68%', delay: 1.4, size: { mobile: 30, desktop: 50 } },
    { Icon: SiFirebase, color: '#FFCA28', x: '48%', y: '12%', delay: 1.5, size: { mobile: 28, desktop: 46 } },
    { Icon: FaGithub, color: '#ffffff', x: '38%', y: '92%', delay: 1.6, size: { mobile: 27, desktop: 44 } }
  ];

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: showSplash ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/20 mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500/20 mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-indigo-500/20 mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Technology icons - Desktop */}
      <div className="hidden sm:block absolute inset-0">
        {icons.map(({ Icon, color, x, y, delay, size }, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ 
              opacity: [0, 1, 0.7], 
              scale: [0, 1.2, 1], 
              rotate: [180, 0, 360],
              y: [0, -10, 0]
            }}
            transition={{ 
              duration: 2, 
              delay: delay,
              repeat: Infinity,
              repeatDelay: 3,
              type: "spring",
              stiffness: 100
            }}
          >
            <Icon 
              size={size.desktop} 
              color={color} 
              className="filter drop-shadow-2xl hover:scale-110 transition-transform" 
            />
          </motion.div>
        ))}
      </div>

      {/* Technology icons - Mobile */}
      <div className="absolute inset-0 sm:hidden">
        {icons.slice(0, 8).map(({ Icon, color, delay, size }, index) => {
          const positions = [
            { x: '15%', y: '20%' }, { x: '75%', y: '15%' }, { x: '25%', y: '70%' }, { x: '80%', y: '75%' },
            { x: '70%', y: '40%' }, { x: '20%', y: '85%' }, { x: '85%', y: '30%' }, { x: '30%', y: '45%' }
          ];
          return (
            <motion.div
              key={index}
              className="absolute"
              style={{ left: positions[index].x, top: positions[index].y }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ duration: 1, delay: delay }}
            >
              <Icon size={size.mobile} color={color} className="filter drop-shadow-lg" />
            </motion.div>
          );
        })}
      </div>

      {/* Central content */}
      <motion.div 
        className="text-center z-10 px-4 max-w-md mx-auto"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
      >
        <motion.div
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-6 border-4 border-white/80 shadow-2xl overflow-hidden backdrop-blur-sm"
          animate={{ 
            boxShadow: [
              "0 0 0 0 rgba(255,255,255,0.7)", 
              "0 0 0 15px rgba(255,255,255,0)",
              "0 0 30px rgba(59, 130, 246, 0.5)"
            ],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <img 
            src="/images/profile.jpg" 
            alt="Vikash Mishra" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.h1 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Vikash Mishra
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl text-blue-200 mb-6 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          Full Stack Developer
        </motion.p>

        {/* Progress bar */}
        <motion.div 
          className="w-full max-w-xs mx-auto mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <div className="bg-white/20 rounded-full h-2 overflow-hidden backdrop-blur-sm">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <motion.p 
            className="text-white/70 text-sm mt-2 font-medium"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Loading Portfolio... {progress}%
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;