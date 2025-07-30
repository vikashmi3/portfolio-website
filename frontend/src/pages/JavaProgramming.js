import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaArrowLeft,
  FaCogs,
  FaClipboardList,
  FaFileAlt,
  FaBook,
  FaUsers,
  FaCode,
  FaPlay,
  FaCopy,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';

const JavaProgramming = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('syllabus');
  const [expandedExample, setExpandedExample] = useState(null);

  const courseDetails = {
    name: "Java Programming",
    description: "Complete Java development course covering OOP principles, collections, multithreading, and exception handling.",
    fullDescription: "Master Java programming from basics to advanced enterprise development. Learn object-oriented programming, collections framework, multithreading, exception handling, and modern Java features. Build real-world applications with best practices.",
    duration: "12 weeks",
    level: "Beginner",
    instructor: "Dr. Jennifer Smith",
    introduction: {
      overview: "Java is a powerful, object-oriented programming language developed by Sun Microsystems (now Oracle). It follows the principle of 'Write Once, Run Anywhere' (WORA), making it platform-independent through the Java Virtual Machine (JVM).",
      keyFeatures: [
        "Platform Independence - Java bytecode runs on any system with JVM",
        "Object-Oriented - Everything in Java is an object (except primitives)",
        "Memory Management - Automatic garbage collection",
        "Strong Type System - Compile-time type checking",
        "Rich API - Extensive standard library",
        "Multithreading - Built-in support for concurrent programming",
        "Security - Built-in security features and sandboxing",
        "Enterprise Ready - Robust for large-scale applications"
      ],
      syntax: {
        basic: `// Java Basic Syntax Overview

// 1. Class Declaration
public class MyClass {
    // Class body
}

// 2. Variables and Data Types
int number = 42;              // Integer
double price = 19.99;         // Floating point
char grade = 'A';             // Character
boolean isActive = true;      // Boolean
String name = "Java";         // String (object)

// 3. Arrays
int[] numbers = {1, 2, 3, 4, 5};
String[] names = new String[3];

// 4. Control Structures
if (condition) {
    // if block
} else if (anotherCondition) {
    // else if block
} else {
    // else block
}

// 5. Loops
for (int i = 0; i < 10; i++) {
    // for loop
}

while (condition) {
    // while loop
}

// 6. Methods
public static returnType methodName(parameters) {
    // method body
    return value; // if not void
}`,
        conventions: [
          "Class names use PascalCase (e.g., MyClass, StudentRecord)",
          "Method and variable names use camelCase (e.g., getName, studentAge)",
          "Constants use UPPER_SNAKE_CASE (e.g., MAX_SIZE, PI_VALUE)",
          "Package names use lowercase (e.g., com.company.project)",
          "Indentation: 4 spaces or 1 tab",
          "Braces on same line for methods and classes",
          "Always use meaningful names for variables and methods"
        ]
      }
    },
    syllabus: [
      {
        week: 1,
        title: "Java Fundamentals and Syntax",
        topics: [
          "Java platform and JVM architecture",
          "Variables and primitive data types",
          "Operators and expressions",
          "Control structures and loops",
          "Methods and parameter passing",
          "Arrays and string handling"
        ],
        practicals: [
          "Setup Java development environment (JDK, IDE)",
          "Write and compile basic Java programs",
          "Create interactive console applications",
          "Build a comprehensive calculator program"
        ],
        examples: [
          {
            title: "Java Syntax and Data Types",
            code: `public class JavaSyntaxDemo {
    public static void main(String[] args) {
        // ===== PRIMITIVE DATA TYPES =====
        
        // Integer types
        byte smallNumber = 127;           // 8-bit: -128 to 127
        short mediumNumber = 32000;       // 16-bit: -32,768 to 32,767
        int regularNumber = 2147483647;   // 32-bit: -2^31 to 2^31-1
        long bigNumber = 9223372036854775807L; // 64-bit: -2^63 to 2^63-1
        
        // Floating-point types
        float price = 19.99f;             // 32-bit floating point
        double precisePrice = 19.999999;  // 64-bit floating point
        
        // Character and boolean
        char grade = 'A';
        boolean isStudent = true;
        
        // ===== REFERENCE TYPES =====
        String name = "Java Programming";
        String[] subjects = {"Math", "Science", "History"};
        int[] scores = new int[5]; // Array of 5 integers
        
        // ===== OPERATORS =====
        
        // Arithmetic operators
        int a = 10, b = 3;
        System.out.println("Arithmetic Operations:");
        System.out.println("a + b = " + (a + b));  // Addition: 13
        System.out.println("a - b = " + (a - b));  // Subtraction: 7
        System.out.println("a * b = " + (a * b));  // Multiplication: 30
        System.out.println("a / b = " + (a / b));  // Division: 3 (integer)
        System.out.println("a % b = " + (a % b));  // Modulus: 1
        
        // Comparison operators
        System.out.println("\\nComparison Operations:");
        System.out.println("a > b: " + (a > b));   // true
        System.out.println("a < b: " + (a < b));   // false
        System.out.println("a == b: " + (a == b)); // false
        System.out.println("a != b: " + (a != b)); // true
        
        // Logical operators
        boolean x = true, y = false;
        System.out.println("\\nLogical Operations:");
        System.out.println("x && y: " + (x && y)); // AND: false
        System.out.println("x || y: " + (x || y)); // OR: true
        System.out.println("!x: " + (!x));         // NOT: false
        
        // ===== CONTROL STRUCTURES =====
        
        // If-else statement
        int score = 85;
        String letterGrade;
        
        if (score >= 90) {
            letterGrade = "A";
        } else if (score >= 80) {
            letterGrade = "B";
        } else if (score >= 70) {
            letterGrade = "C";
        } else if (score >= 60) {
            letterGrade = "D";
        } else {
            letterGrade = "F";
        }
        
        System.out.println("\\nGrade Calculation:");
        System.out.println("Score: " + score + ", Grade: " + letterGrade);
        
        // Switch statement
        int dayOfWeek = 3;
        String dayName;
        
        switch (dayOfWeek) {
            case 1: dayName = "Monday"; break;
            case 2: dayName = "Tuesday"; break;
            case 3: dayName = "Wednesday"; break;
            case 4: dayName = "Thursday"; break;
            case 5: dayName = "Friday"; break;
            case 6: dayName = "Saturday"; break;
            case 7: dayName = "Sunday"; break;
            default: dayName = "Invalid day"; break;
        }
        
        System.out.println("Day " + dayOfWeek + " is " + dayName);
        
        // ===== LOOPS =====
        
        // For loop
        System.out.println("\\nFor Loop - Numbers 1 to 5:");
        for (int i = 1; i <= 5; i++) {
            System.out.print(i + " ");
        }
        System.out.println();
        
        // Enhanced for loop (for-each)
        System.out.println("\\nEnhanced For Loop - Array elements:");
        for (String subject : subjects) {
            System.out.print(subject + " ");
        }
        System.out.println();
        
        // While loop
        System.out.println("\\nWhile Loop - Countdown:");
        int countdown = 5;
        while (countdown > 0) {
            System.out.print(countdown + " ");
            countdown--;
        }
        System.out.println("Blast off!");
        
        // Do-while loop
        System.out.println("\\nDo-While Loop - At least one execution:");
        int number = 0;
        do {
            System.out.println("Number: " + number);
            number++;
        } while (number < 3);
        
        // ===== METHODS =====
        
        // Call custom methods
        System.out.println("\\nMethod Calls:");
        displayWelcomeMessage();
        
        int sum = addNumbers(15, 25);
        System.out.println("Sum of 15 and 25: " + sum);
        
        double average = calculateAverage(new int[]{85, 92, 78, 96, 88});
        System.out.println("Average score: " + average);
        
        // ===== STRING OPERATIONS =====
        
        System.out.println("\\nString Operations:");
        String text = "Java Programming";
        System.out.println("Original: " + text);
        System.out.println("Length: " + text.length());
        System.out.println("Uppercase: " + text.toUpperCase());
        System.out.println("Lowercase: " + text.toLowerCase());
        System.out.println("Substring: " + text.substring(0, 4));
        System.out.println("Contains 'Java': " + text.contains("Java"));
        System.out.println("Replace 'Java' with 'Advanced': " + text.replace("Java", "Advanced"));
    }
    
    // Custom method - no parameters, no return value
    public static void displayWelcomeMessage() {
        System.out.println("Welcome to Java Programming!");
    }
    
    // Custom method - with parameters and return value
    public static int addNumbers(int num1, int num2) {
        return num1 + num2;
    }
    
    // Custom method - array parameter
    public static double calculateAverage(int[] numbers) {
        if (numbers.length == 0) {
            return 0.0;
        }
        
        int sum = 0;
        for (int number : numbers) {
            sum += number;
        }
        
        return (double) sum / numbers.length;
    }
}`,
            explanation: "Comprehensive Java syntax demonstration covering data types, operators, control structures, loops, methods, and string operations with detailed examples."
          }
        ]
      }
    ],
    features: [
      "60 comprehensive lessons",
      "12 hands-on programming projects",
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
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={handleBack}
          className="mb-6 flex items-center gap-2 text-primary hover:text-secondary transition-colors"
        >
          <FaArrowLeft />
          Back to Courses
        </motion.button>

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        >
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-8">
              <button 
                onClick={() => setActiveTab('syllabus')}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === 'syllabus' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <FaBook />
                Syllabus
              </button>
              <button 
                onClick={() => setActiveTab('examples')}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === 'examples' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <FaCode />
                Code Examples
              </button>
            </nav>
          </div>
          
          <div className="p-8">
            {activeTab === 'syllabus' && (
              <div className="space-y-6">
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
            )}
            
            {activeTab === 'examples' && (
              <div className="space-y-6">
                {courseDetails.syllabus.map((week, weekIndex) => (
                  week.examples && (
                    <div key={weekIndex} className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Week {week.week}: {week.title}
                      </h3>
                      <div className="space-y-4">
                        {week.examples.map((example, exampleIndex) => (
                          <motion.div
                            key={exampleIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                          >
                            <div 
                              className="bg-gray-50 dark:bg-gray-700 p-4 cursor-pointer flex items-center justify-between"
                              onClick={() => setExpandedExample(
                                expandedExample === `${weekIndex}-${exampleIndex}` 
                                  ? null 
                                  : `${weekIndex}-${exampleIndex}`
                              )}
                            >
                              <div className="flex items-center gap-3">
                                <FaCode className="text-primary" />
                                <h4 className="font-semibold text-gray-900 dark:text-white">
                                  {example.title}
                                </h4>
                              </div>
                              {expandedExample === `${weekIndex}-${exampleIndex}` ? 
                                <FaChevronUp className="text-gray-500" /> : 
                                <FaChevronDown className="text-gray-500" />
                              }
                            </div>
                            
                            {expandedExample === `${weekIndex}-${exampleIndex}` && (
                              <div className="p-4">
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                  {example.explanation}
                                </p>
                                <div className="bg-gray-900 rounded-lg overflow-hidden">
                                  <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
                                    <span className="text-gray-300 text-sm font-mono">Java Code</span>
                                    <button 
                                      onClick={() => navigator.clipboard.writeText(example.code)}
                                      className="text-gray-400 hover:text-white transition-colors"
                                      title="Copy code"
                                    >
                                      <FaCopy />
                                    </button>
                                  </div>
                                  <pre className="p-4 text-sm text-gray-100 overflow-x-auto">
                                    <code>{example.code}</code>
                                  </pre>
                                </div>
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JavaProgramming;