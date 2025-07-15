import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaAws, FaJava, FaHtml5, FaCss3Alt, FaDocker, FaAndroid } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiC, SiCplusplus } from 'react-icons/si';

const About = () => {
  const [activeTab, setActiveTab] = useState('bio');

  const skills = [
    // Programming Languages
    { name: 'C', level: 85, icon: <SiC /> },
    { name: 'C++', level: 82, icon: <SiCplusplus /> },
    { name: 'Java', level: 80, icon: <FaJava /> },
    { name: 'JavaScript', level: 88, icon: <SiJavascript /> },
    { name: 'Python', level: 85, icon: <FaPython /> },
    
    // Web Technologies
    { name: 'HTML5', level: 92, icon: <FaHtml5 /> },
    { name: 'CSS3', level: 90, icon: <FaCss3Alt /> },
    { name: 'React.js', level: 90, icon: <FaReact /> },
    { name: 'Node.js', level: 85, icon: <FaNodeJs /> },
    { name: 'Express.js', level: 85, icon: <SiExpress /> },
    { name: 'Tailwind CSS', level: 88, icon: <SiTailwindcss /> },
    
    // Development
    { name: 'Frontend Development', level: 90, icon: <FaReact /> },
    { name: 'Android Development', level: 80, icon: <FaAndroid /> },
    
    // Tools & Platforms
    { name: 'Git', level: 88, icon: <FaGitAlt /> },
    { name: 'Docker', level: 78, icon: <FaDocker /> },
    { name: 'MongoDB', level: 82, icon: <SiMongodb /> },
    { name: 'AWS', level: 75, icon: <FaAws /> }
  ];

  const certifications = [
    {
      title: 'Computer Vision: Getting Started with GluonCV',
      issuer: 'AWS by Coursera',
      year: '2021',
      description: 'Completed AWS certification on computer vision using GluonCV framework, covering image processing and deep learning techniques.'
    },
    {
      title: 'ML & AI Workshop Certificate',
      issuer: 'IBM and IIT Roorkee',
      year: '2022',
      description: 'Completed comprehensive workshop on Machine Learning and Artificial Intelligence covering advanced algorithms and practical applications.'
    },
    {
      title: 'Workshop on Sports Analysis',
      issuer: 'Royals School of Business',
      year: '2022',
      description: 'Completed workshop on sports data analysis, learning statistical methods and analytical techniques for sports performance evaluation.'
    },
    {
      title: 'Python',
      issuer: 'Guvi',
      year: '2022',
      description: 'python programming course covering fundamentals, data structures, and libraries for data analysis.'
    }
  ];

  const education = [
    {
      degree: 'BE-Bachelor of Engineering',
      field: 'Computer Engineering',
      institution: 'University of Mumbai',
      period: '2022 - 2025',
      score: 'CGPA: 7.10',
      description: 'Completed BE in Computer Engineering with focus on software development, algorithms, and system design.'
    },
    {
      degree: 'Diploma in Engineering',
      field: 'Computer Engineering',
      institution: 'Viva College of Diploma Engineering & Technology (MSBTE)',
      period: '2018 - 2021',
      score: 'Percentage: 85.43%',
      description: 'Completed Diploma in Computer Engineering with strong foundation in programming and computer systems.'
    }
  ];

  const timeline = [
    {
      year: '2025',
      title: 'Judge - TechBlitz Competition',
      company: 'Vidyavardhani\'s College of Engineering & Technology',
      description: 'Invited as a judge for TechBlitz technical competition, evaluating innovative projects and providing mentorship to engineering students.'
    },
    {
      year: '2021',
      title: 'Android Developer Intern',
      company: 'InfoSec Developers',
      description: 'Developed Android applications focusing on mobile security and user experience. Worked with Java/Kotlin, Android SDK, and implemented security best practices in mobile development.'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get to know more about my journey and skills
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => setActiveTab('bio')}
                  className={`text-left p-3 rounded-lg transition-colors ${
                    activeTab === 'bio'
                      ? 'bg-primary text-white'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  Biography
                </button>
                <button
                  onClick={() => setActiveTab('skills')}
                  className={`text-left p-3 rounded-lg transition-colors ${
                    activeTab === 'skills'
                      ? 'bg-primary text-white'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  Skills
                </button>
                <button
                  onClick={() => setActiveTab('education')}
                  className={`text-left p-3 rounded-lg transition-colors ${
                    activeTab === 'education'
                      ? 'bg-primary text-white'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  Education
                </button>
                <button
                  onClick={() => setActiveTab('certifications')}
                  className={`text-left p-3 rounded-lg transition-colors ${
                    activeTab === 'certifications'
                      ? 'bg-primary text-white'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  Certifications
                </button>
                <button
                  onClick={() => setActiveTab('timeline')}
                  className={`text-left p-3 rounded-lg transition-colors ${
                    activeTab === 'timeline'
                      ? 'bg-primary text-white'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  Timeline
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              {activeTab === 'bio' && (
                <div>
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-6">
                    <img 
                      src="/images/profile.jpg" 
                      alt="Vikash R Mishra" 
                      className="w-40 h-40 rounded-lg object-cover shadow-lg"
                    />
                    <div>
                      <h3 className="text-2xl font-bold mb-4">My Story</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        I'm a passionate Full Stack Developer with expertise in modern web technologies. 
                        I love creating innovative solutions that make a difference in people's lives.
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        With a strong foundation in both frontend and backend development, I specialize 
                        in building scalable web applications using React.js, Node.js, and modern databases.
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        When I'm not coding, you can find me exploring new technologies, contributing to 
                        open-source projects, or sharing knowledge with the developer community.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'skills' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
                  
                  {/* Programming Languages */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-primary">Programming Languages</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      {skills.slice(0, 5).map((skill, index) => (
                        <div key={index} className="mb-4">
                          <div className="flex items-center mb-2">
                            <span className="text-primary mr-2">{skill.icon}</span>
                            <span className="font-medium">{skill.name}</span>
                            <span className="ml-auto text-sm text-gray-500">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Web Technologies */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-primary">Web Technologies</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      {skills.slice(5, 11).map((skill, index) => (
                        <div key={index} className="mb-4">
                          <div className="flex items-center mb-2">
                            <span className="text-primary mr-2">{skill.icon}</span>
                            <span className="font-medium">{skill.name}</span>
                            <span className="ml-auto text-sm text-gray-500">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Development */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold mb-4 text-primary">Development</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      {skills.slice(11, 13).map((skill, index) => (
                        <div key={index} className="mb-4">
                          <div className="flex items-center mb-2">
                            <span className="text-primary mr-2">{skill.icon}</span>
                            <span className="font-medium">{skill.name}</span>
                            <span className="ml-auto text-sm text-gray-500">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tools & Platforms */}
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-primary">Tools & Platforms</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      {skills.slice(13).map((skill, index) => (
                        <div key={index} className="mb-4">
                          <div className="flex items-center mb-2">
                            <span className="text-primary mr-2">{skill.icon}</span>
                            <span className="font-medium">{skill.name}</span>
                            <span className="ml-auto text-sm text-gray-500">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'certifications' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Certifications</h3>
                  <div className="space-y-6">
                    {certifications.map((item, index) => (
                      <div key={index} className="flex">
                        <div className="flex flex-col items-center mr-4">
                          <div className="w-4 h-4 bg-primary rounded-full"></div>
                          {index !== certifications.length - 1 && (
                            <div className="w-0.5 h-16 bg-gray-300 dark:bg-gray-600 mt-2"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                            <div className="flex flex-wrap items-center mb-2">
                              <h4 className="font-bold text-lg mr-2">{item.title}</h4>
                              <span className="bg-primary text-white px-2 py-1 rounded text-sm font-medium">
                                {item.year}
                              </span>
                            </div>
                            <p className="text-primary font-medium mb-2">{item.issuer}</p>
                            <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'education' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Education</h3>
                  <div className="space-y-6">
                    {education.map((item, index) => (
                      <div key={index} className="flex">
                        <div className="flex flex-col items-center mr-4">
                          <div className="w-4 h-4 bg-primary rounded-full"></div>
                          {index !== education.length - 1 && (
                            <div className="w-0.5 h-16 bg-gray-300 dark:bg-gray-600 mt-2"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                            <div className="flex flex-wrap items-center mb-2">
                              <h4 className="font-bold text-lg mr-2">{item.degree}</h4>
                              <span className="bg-primary text-white px-2 py-1 rounded text-sm font-medium">
                                {item.score}
                              </span>
                            </div>
                            <p className="text-primary font-medium">{item.field}</p>
                            <p className="text-gray-600 dark:text-gray-300 mb-2">{item.institution}</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{item.period}</p>
                            <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'timeline' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Career Timeline</h3>
                  <div className="space-y-6">
                    {timeline.map((item, index) => (
                      <div key={index} className="flex">
                        <div className="flex flex-col items-center mr-4">
                          <div className="w-4 h-4 bg-primary rounded-full"></div>
                          {index !== timeline.length - 1 && (
                            <div className="w-0.5 h-16 bg-gray-300 dark:bg-gray-600 mt-2"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                              <span className="bg-primary text-white px-2 py-1 rounded text-sm font-medium mr-3">
                                {item.year}
                              </span>
                              <h4 className="font-bold">{item.title}</h4>
                            </div>
                            <p className="text-primary font-medium mb-2">{item.company}</p>
                            <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;