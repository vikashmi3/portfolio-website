import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaGithub, FaExternalLinkAlt, FaSpinner } from 'react-icons/fa';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
      // Fallback data if backend is not available
      setProjects([
        {
          _id: '1',
          title: 'Blockchain E-Commerce Platform',
          description: 'A secure MERN stack e-commerce application with blockchain integration for transaction verification and transparency.',
          image: '/images/ecom.jpg',
          technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Blockchain'],
          category: 'fullstack',
          githubUrl: 'https://github.com/vikashmi3/nexa-shop-blockchain-ecommerce',
          liveUrl: '#',
          featured: true
        },
        {
          _id: '2',
          title: 'Ridesharing Android App',
          description: 'Mobile ridesharing application built with Flutter and Dart, using Firebase for backend services and real-time location tracking.',
          image: '/images/android-app.jpg',
          technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
          category: 'mobile',
          githubUrl: 'https://github.com/vikashmi3/ridesharing-app',
          liveUrl: '#',
          featured: true
        },
        {
          _id: '3',
          title: 'Portfolio Website',
          description: 'Modern, responsive portfolio website built with React.js frontend and Node.js backend.',
          image: '/images/portfolio.png',
          technologies: ['React', 'Node.js', 'Tailwind CSS', 'Framer Motion'],
          category: 'fullstack',
          githubUrl: 'https://github.com/vikashmi3/vikash-portfolio',
          liveUrl: '#',
          featured: true
        },
        {
          _id: '4',
          title: 'Weather Dashboard (In Progress)',
          description: 'Weather application with location-based forecasts and interactive charts. Currently under development.',
          image: '/images/weather-app.webp',
          technologies: ['JavaScript', 'Chart.js', 'Weather API', 'React'],
          category: 'frontend',
          githubUrl: '#',
          liveUrl: '#',
          featured: false
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['all', 'frontend', 'backend', 'fullstack', 'mobile', 'blockchain'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <FaSpinner className="animate-spin text-4xl text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Here are some of my recent works
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors capitalize ${
                  filter === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                {project.featured && (
                  <span className="absolute top-4 left-4 bg-primary text-white px-2 py-1 rounded text-sm font-medium">
                    Featured
                  </span>
                )}
                {project.title.includes('In Progress') && (
                  <span className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded text-sm font-medium">
                    In Progress
                  </span>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 dark:bg-gray-700 text-sm px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    <FaGithub />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;