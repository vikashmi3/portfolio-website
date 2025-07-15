import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3Alt, FaDocker, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiCplusplus, SiC, SiMongodb, SiExpress, SiTailwindcss, SiFirebase } from 'react-icons/si';

const SplashScreen = ({ onComplete }) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const icons = [
    { Icon: FaReact, color: '#61DAFB', x: '10%', y: '20%', delay: 0.2, size: 60 },
    { Icon: FaNodeJs, color: '#68A063', x: '70%', y: '15%', delay: 0.3, size: 50 },
    { Icon: SiJavascript, color: '#F7DF1E', x: '25%', y: '60%', delay: 0.4, size: 45 },
    { Icon: FaPython, color: '#3776AB', x: '80%', y: '70%', delay: 0.5, size: 55 },
    { Icon: FaJava, color: '#007396', x: '60%', y: '40%', delay: 0.6, size: 48 },
    { Icon: SiCplusplus, color: '#00599C', x: '15%', y: '80%', delay: 0.7, size: 52 },
    { Icon: SiC, color: '#A8B9CC', x: '40%', y: '30%', delay: 0.8, size: 40 },
    { Icon: FaHtml5, color: '#E34F26', x: '85%', y: '25%', delay: 0.9, size: 42 },
    { Icon: FaCss3Alt, color: '#1572B6', x: '30%', y: '75%', delay: 1.0, size: 42 },
    { Icon: SiMongodb, color: '#47A248', x: '50%', y: '85%', delay: 1.1, size: 46 },
    { Icon: SiExpress, color: '#000000', x: '75%', y: '50%', delay: 1.2, size: 44 },
    { Icon: SiTailwindcss, color: '#38B2AC', x: '20%', y: '40%', delay: 1.3, size: 48 },
    { Icon: FaDocker, color: '#2496ED', x: '65%', y: '65%', delay: 1.4, size: 50 },
    { Icon: SiFirebase, color: '#FFCA28', x: '45%', y: '15%', delay: 1.5, size: 46 },
    { Icon: FaGithub, color: '#181717', x: '35%', y: '90%', delay: 1.6, size: 44 }
  ];

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900"
      initial={{ opacity: 1 }}
      animate={{ opacity: showSplash ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Technology icons */}
      {icons.map(({ Icon, color, x, y, delay, size }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: delay,
            type: "spring",
            stiffness: 100
          }}
        >
          <Icon size={size} color={color} className="filter drop-shadow-lg" />
        </motion.div>
      ))}

      {/* Central content */}
      <motion.div 
        className="text-center z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.div
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg overflow-hidden"
          animate={{ 
            boxShadow: ["0 0 0 0 rgba(255,255,255,0.7)", "0 0 0 20px rgba(255,255,255,0)"],
            borderColor: ["rgba(255,255,255,1)", "rgba(255,255,255,0.5)"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img 
            src="/images/profile.jpg" 
            alt="Vikash Mishra" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.h1 
          className="text-4xl font-bold text-white mb-2"
          animate={{ 
            textShadow: ["0 0 8px rgba(255,255,255,0.5)", "0 0 16px rgba(255,255,255,0.8)"]
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          Vikash Mishra
        </motion.h1>
        <motion.p 
          className="text-xl text-blue-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Full Stack Developer
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;