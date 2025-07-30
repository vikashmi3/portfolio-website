import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaArrowLeft,
  FaCogs,
  FaClipboardList,
  FaFileAlt,
  FaBook,
  FaUsers
} from 'react-icons/fa';

// This is the main CProgramming component
const CProgramming = () => {
  const navigate = useNavigate();

  const courseDetails = {
    name: "C Programming",
    description: "Master the fundamentals of C programming language. Learn memory management, pointers, and system-level programming concepts.",
    fullDescription: "This comprehensive C programming course takes you from absolute beginner to confident programmer. You'll master fundamental concepts like variables, data types, control structures, functions, arrays, and pointers. Advanced topics include dynamic memory allocation, file handling, and data structures. Perfect for those starting their programming journey or looking to strengthen their foundation.",
    duration: "8 weeks",
    level: "Beginner",
    instructor: "Dr. Sarah Johnson",
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
      }
    ],
    features: [
      "45 comprehensive lessons",
      "8 hands-on programming projects",
      "Interactive coding exercises",
      "Lifetime access to content",
      "Community support"
    ]
  };

  const handleBack = () => {
    navigate('/courses');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={handleBack}
          className="mb-6 flex items-center gap-2 text-primary hover:text-secondary transition-colors"
        >
          <FaArrowLeft />
          Back to Courses
        </motion.button>

        {/* Course Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {courseDetails.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              by {courseDetails.instructor}
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
            {courseDetails.fullDescription}
          </p>
          <div className="flex flex-wrap gap-4">
            {courseDetails.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <FaFileAlt className="text-secondary" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Syllabus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        >
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-8">
              <button className="flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm border-primary text-primary">
                <FaBook />
                Syllabus
              </button>
            </nav>
          </div>
          <div className="p-8">
            {courseDetails.syllabus.map((week, index) => (
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
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Topics Covered:</h5>
                    <ul className="space-y-2">
                      {week.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start gap-2">
                          <FaClipboardList className="text-primary mt-1 text-sm flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Practical Exercises:</h5>
                    <ul className="space-y-2">
                      {week.practicals.map((practical, practicalIndex) => (
                        <li key={practicalIndex} className="flex items-start gap-2">
                          <FaCogs className="text-secondary mt-1 text-sm flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{practical}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Course Materials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <FaFileAlt className="text-primary" />
            Course Materials & Resources
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Learning Materials:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <FaBook className="text-secondary mt-1 text-sm flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Comprehensive text tutorials for each topic</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaBook className="text-secondary mt-1 text-sm flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Code examples with detailed explanations</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaBook className="text-secondary mt-1 text-sm flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Step-by-step programming exercises</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaBook className="text-secondary mt-1 text-sm flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Quick reference guides and cheat sheets</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Tools & Software:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <FaCogs className="text-primary mt-1 text-sm flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Code::Blocks IDE setup guide</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCogs className="text-primary mt-1 text-sm flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">GCC Compiler installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCogs className="text-primary mt-1 text-sm flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Visual Studio Code configuration</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCogs className="text-primary mt-1 text-sm flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Online coding platforms access</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Learning Path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Master C Programming?</h3>
          <p className="text-lg mb-6 opacity-90">
            Join 245+ students who have successfully completed this comprehensive course
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl font-bold">8 Weeks</div>
              <div className="text-sm">Duration</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl font-bold">45+</div>
              <div className="text-sm">Lessons</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl font-bold">8</div>
              <div className="text-sm">Projects</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl font-bold">FREE</div>
              <div className="text-sm">Cost</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What are the prerequisites for this course?",
      answer: "No prior programming experience is required. Basic computer literacy is sufficient to start this course."
    },
    {
      question: "Will I get a certificate after completing the course?",
      answer: "Yes, you will receive a certificate of completion after successfully finishing all course requirements."
    },
    {
      question: "What kind of support is available during the course?",
      answer: "You will have access to community forums, live Q&A sessions, and direct instructor support."
    },
    {
      question: "Are there any projects included in the course?",
      answer: "Yes, the course includes 8 hands-on programming projects to help you apply what you learn."
    },
    {
      question: "Can I access the course materials after completion?",
      answer: "Yes, you will have lifetime access to all course materials and resources."
    },
    {
      question: "Is this course suitable for career beginners?",
      answer: "Absolutely, this course is designed for beginners and will build a strong foundation in C programming."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8"
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
        <FaUsers className="text-primary" />
        Frequently Asked Questions
      </h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.question}</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// Don't forget to export the CProgramming component so it can be used in other files.
export default CProgramming;