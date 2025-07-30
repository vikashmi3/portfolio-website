import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaClock,
  FaSignal,
  FaUsers,
  FaPlay,
  FaCheckCircle,
  FaVideo,
  FaDownload,
  FaCode,
  FaDatabase,
  FaReact,
  FaBrain,
  FaArrowRight,
  FaArrowLeft,
  FaBookOpen,
  FaLaptopCode,
  FaProjectDiagram,
  FaQuestionCircle,
  FaTrophy,
  FaClipboardList,
  FaBullseye,
  FaGraduationCap,
  FaCalendarWeek
} from 'react-icons/fa';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  // Enhanced course data with detailed syllabus
  const getCourseData = (id) => {
    const courses = {
      '1': {
        id: 1,
        name: "C Programming",
        description: "Master the fundamentals of C programming language. Learn memory management, pointers, and system-level programming concepts.",
        fullDescription: "This comprehensive C programming course takes you from absolute beginner to confident programmer. You'll master fundamental concepts like variables, data types, control structures, functions, arrays, and pointers. Advanced topics include dynamic memory allocation, file handling, and data structures. Perfect for those starting their programming journey or looking to strengthen their foundation.",
        duration: "8 weeks",
        level: "Beginner",
        category: "programming",
        reviews: 245,
        popular: true,
        icon: <FaCode />,
        instructor: "Dr. Sarah Johnson",
        lessons: 45,
        projects: 8,
        prerequisites: "Basic computer literacy",
        learningOutcomes: [
          "Write efficient C programs from scratch",
          "Understand memory management and pointers",
          "Implement data structures using C",
          "Debug and optimize C code",
          "Work with files and system programming",
          "Build real-world applications in C"
        ],
        syllabus: [
          {
            week: 1,
            title: "Introduction to Programming and C",
            topics: [
              "History and evolution of C programming",
              "Setting up development environment",
              "Your first C program",
              "Understanding compilation process",
              "Basic syntax and structure"
            ],
            practicals: [
              "Install and configure IDE",
              "Write and compile Hello World program",
              "Create basic input/output programs"
            ],
            duration: "6 hours"
          },
          {
            week: 2,
            title: "Variables, Data Types, and Operators",
            topics: [
              "Primitive data types (int, float, char, double)",
              "Variable declaration and initialization",
              "Constants and literals",
              "Arithmetic, relational, and logical operators",
              "Type conversion and casting"
            ],
            practicals: [
              "Create calculator program",
              "Build temperature converter",
              "Implement grade calculator"
            ],
            duration: "8 hours"
          },
          {
            week: 3,
            title: "Control Structures and Loops",
            topics: [
              "Conditional statements (if, else, switch)",
              "Loop constructs (for, while, do-while)",
              "Nested loops and conditions",
              "Break and continue statements",
              "Logical flow control"
            ],
            practicals: [
              "Build number guessing game",
              "Create pattern printing programs",
              "Implement menu-driven calculator"
            ],
            duration: "10 hours"
          },
          {
            week: 4,
            title: "Functions and Scope",
            topics: [
              "Function definition and declaration",
              "Parameter passing (by value)",
              "Return types and void functions",
              "Local and global variables",
              "Function prototypes and headers"
            ],
            practicals: [
              "Create function library",
              "Build modular calculator",
              "Implement utility functions"
            ],
            duration: "8 hours"
          },
          {
            week: 5,
            title: "Arrays and Strings",
            topics: [
              "One-dimensional and multi-dimensional arrays",
              "Array initialization and manipulation",
              "Character arrays and strings",
              "String manipulation functions",
              "Array algorithms (sorting, searching)"
            ],
            practicals: [
              "Build student grade management system",
              "Create text processing program",
              "Implement sorting algorithms"
            ],
            duration: "12 hours"
          },
          {
            week: 6,
            title: "Pointers and Memory Management",
            topics: [
              "Understanding memory and addresses",
              "Pointer declaration and initialization",
              "Pointer arithmetic",
              "Dynamic memory allocation (malloc, free)",
              "Common pointer pitfalls"
            ],
            practicals: [
              "Create dynamic array programs",
              "Build linked list implementation",
              "Memory management exercises"
            ],
            duration: "10 hours"
          },
          {
            week: 7,
            title: "Structures and File Handling",
            topics: [
              "Structure definition and usage",
              "Nested structures and arrays of structures",
              "File operations (fopen, fclose, fread, fwrite)",
              "Text and binary file handling",
              "Error handling in file operations"
            ],
            practicals: [
              "Build employee management system",
              "Create file-based database",
              "Implement data backup program"
            ],
            duration: "10 hours"
          },
          {
            week: 8,
            title: "Final Project and Best Practices",
            topics: [
              "Code organization and modularity",
              "Debugging techniques",
              "Code optimization strategies",
              "Documentation and commenting",
              "Version control basics"
            ],
            practicals: [
              "Complete capstone project",
              "Code review and optimization",
              "Project presentation"
            ],
            duration: "12 hours"
          }
        ],
        features: [
          "45 comprehensive video lessons",
          "8 hands-on programming projects",
          "Downloadable code examples",
          "Interactive coding exercises",
          "Lifetime access to content",
          "Community forum support",
          "Progress tracking",
          "Mobile-friendly platform"
        ],
        tools: [
          "Code::Blocks IDE",
          "GCC Compiler",
          "Visual Studio Code",
          "Git for version control",
          "Online coding platforms"
        ],
        finalProject: {
          title: "Student Management System",
          description: "Build a complete student management system that demonstrates all learned concepts including file handling, structures, and dynamic memory allocation.",
          features: [
            "Add, edit, and delete student records",
            "File-based data persistence",
            "Search and filter functionality",
            "Grade calculation and reporting",
            "Data backup and restore"
          ]
        }
      },
      '2': {
        id: 2,
        name: "C++ Programming",
        description: "Advanced object-oriented programming with C++. Learn classes, inheritance, polymorphism, and STL containers.",
        fullDescription: "Master C++ programming with comprehensive coverage of object-oriented programming concepts. This course covers everything from basic syntax to advanced topics like templates, STL, and modern C++ features.",
        duration: "10 weeks",
        level: "Intermediate",
        category: "programming",
        reviews: 189,
        popular: true,
        icon: <FaCode />,
        instructor: "Prof. Michael Chen",
        lessons: 55,
        projects: 10,
        prerequisites: "Basic programming knowledge (C or any programming language)",
        learningOutcomes: [
          "Master object-oriented programming principles",
          "Implement inheritance and polymorphism",
          "Use STL containers and algorithms effectively",
          "Apply design patterns in C++",
          "Build complex applications using modern C++",
          "Understand memory management in C++"
        ],
        syllabus: [
          {
            week: 1,
            title: "C++ Fundamentals and OOP Introduction",
            topics: [
              "C++ vs C differences",
              "Classes and objects basics",
              "Access specifiers",
              "Constructors and destructors",
              "Member functions"
            ],
            practicals: [
              "Create first C++ class",
              "Build simple calculator class",
              "Implement bank account class"
            ],
            duration: "8 hours"
          },
          {
            week: 2,
            title: "Advanced Class Features",
            topics: [
              "Function overloading",
              "Operator overloading",
              "Copy constructors",
              "Static members",
              "Friend functions"
            ],
            practicals: [
              "Implement complex number class",
              "Create string class with operators",
              "Build matrix class"
            ],
            duration: "10 hours"
          },
          // ... more weeks
        ],
        features: [
          "55 detailed video lessons",
          "10 comprehensive projects",
          "Modern C++ (C++17/20) coverage",
          "STL deep dive",
          "Design patterns implementation",
          "Performance optimization techniques"
        ]
      },
      '3': {
        id: 3,
        name: "Java Programming",
        description: "Complete Java development course covering OOP principles, collections, multithreading, and exception handling.",
        fullDescription: "Comprehensive Java programming course from basics to advanced enterprise development. Learn core Java concepts, object-oriented programming, collections framework, and build real-world applications.",
        duration: "12 weeks",
        level: "Beginner",
        category: "programming",
        reviews: 356,
        popular: true,
        icon: <FaCode />,
        instructor: "Dr. Priya Sharma",
        lessons: 60,
        projects: 12,
        prerequisites: "Basic computer literacy",
        learningOutcomes: [
          "Write robust Java applications",
          "Master object-oriented programming",
          "Use Java collections effectively",
          "Handle exceptions and errors",
          "Work with multithreading",
          "Build GUI applications"
        ],
        // ... detailed syllabus
      }
      // ... more courses
    };
    
    return courses[id] || null;
  };

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);
      try {
        // Try to fetch from API first
        const response = await fetch(`${API_URL}/courses/${courseId}`);
        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            setCourse(data.data);
            return;
          }
        }
      } catch (error) {
        console.error('API fetch failed:', error);
      }
      
      // Fallback to static data
      const staticCourse = getCourseData(courseId);
      if (staticCourse) {
        setCourse(staticCourse);
      } else {
        navigate('/courses');
      }
      setLoading(false);
    };

    fetchCourse();
  }, [courseId, navigate]);

  const handleEnroll = () => {
    // Redirect directly to C Programming page
    navigate('/c-programming');
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'programming': return <FaCode />;
      case 'web': return <FaCode />;
      case 'database': return <FaDatabase />;
      case 'data-science': return <FaBrain />;
      case 'framework': return <FaReact />;
      default: return <FaCode />;
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Course Not Found</h2>
          <button
            onClick={() => navigate('/courses')}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors"
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/courses')}
          className="mb-6 flex items-center gap-2 text-primary hover:text-secondary transition-colors"
        >
          <FaArrowLeft />
          Back to Courses
        </motion.button>

        {/* Course Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl text-primary">
                  {course.icon || getCategoryIcon(course.category)}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {course.name}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300">
                    by {course.instructor || 'Expert Instructor'}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                {course.fullDescription || course.description}
              </p>

              {/* Course Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <FaClock className="text-2xl text-primary mx-auto mb-2" />
                  <div className="font-semibold">{course.duration}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Duration</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <FaVideo className="text-2xl text-primary mx-auto mb-2" />
                  <div className="font-semibold">{course.lessons || 25}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Lessons</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <FaProjectDiagram className="text-2xl text-primary mx-auto mb-2" />
                  <div className="font-semibold">{course.projects || 5}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Projects</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <FaUsers className="text-2xl text-primary mx-auto mb-2" />
                  <div className="font-semibold">{course.reviews}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Students</div>
                </div>
              </div>
            </div>

            {/* Enrollment Card */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-green-600 mb-2">FREE</div>
                <div className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full inline-block">
                  No Cost
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Level</span>
                  <span className={`px-2 py-1 rounded text-sm ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Prerequisites</span>
                  <span className="text-sm text-right">{course.prerequisites}</span>
                </div>
              </div>

              <button
                onClick={handleEnroll}
                className="w-full bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 mb-4"
              >
                <FaPlay />
                Enroll Now
              </button>

              <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                Get instant access to all course materials
              </div>
            </div>
          </div>
        </motion.div>

        {/* Course Content Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        >
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-8">
              {[
                { id: 'overview', label: 'Overview', icon: <FaBookOpen /> },
                { id: 'syllabus', label: 'Syllabus', icon: <FaClipboardList /> },
                { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
                { id: 'tools', label: 'Tools', icon: <FaLaptopCode /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Learning Outcomes */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <FaBullseye className="text-primary" />
                    What You'll Learn
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {course.learningOutcomes?.map((outcome, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Features */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <FaTrophy className="text-primary" />
                    Course Features
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {course.features?.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <FaCheckCircle className="text-green-500" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'syllabus' && (
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <FaGraduationCap className="text-primary" />
                  Course Syllabus
                </h3>
                <div className="space-y-6">
                  {course.syllabus?.map((week, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg p-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Week {week.week}: {week.title}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <FaCalendarWeek />
                          {week.duration}
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Topics Covered:</h5>
                          <ul className="space-y-2">
                            {week.topics?.map((topic, topicIndex) => (
                              <li key={topicIndex} className="flex items-start gap-2">
                                <FaArrowRight className="text-primary mt-1 text-sm flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-300 text-sm">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Practical Exercises:</h5>
                          <ul className="space-y-2">
                            {week.practicals?.map((practical, practicalIndex) => (
                              <li key={practicalIndex} className="flex items-start gap-2">
                                <FaCode className="text-secondary mt-1 text-sm flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-300 text-sm">{practical}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <FaProjectDiagram className="text-primary" />
                  Course Projects
                </h3>
                {course.finalProject && (
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Final Project: {course.finalProject.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {course.finalProject.description}
                    </p>
                    <div>
                      <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Project Features:</h5>
                      <div className="grid md:grid-cols-2 gap-3">
                        {course.finalProject.features?.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <FaCheckCircle className="text-green-500" />
                            <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'tools' && (
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <FaLaptopCode className="text-primary" />
                  Tools & Software
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {course.tools?.map((tool, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <FaDownload className="text-primary" />
                      <span className="text-gray-700 dark:text-gray-300">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Start Learning?</h3>
          <p className="text-xl mb-6 opacity-90">
            Join {course.reviews} students already enrolled in this course
          </p>
          <button
            onClick={handleEnroll}
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            <FaPlay />
            Enroll Now - It's Free!
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseDetail;
