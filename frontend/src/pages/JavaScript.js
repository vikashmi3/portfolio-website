import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaArrowLeft,
  FaCogs,
  FaClipboardList,
  FaFileAlt,
  FaBook,
  FaCode,
  FaCopy,
  FaChevronDown,
  FaChevronUp,
  FaDownload,
  FaProjectDiagram,

  FaJsSquare,
  FaPlay,
  FaLaptopCode
} from 'react-icons/fa';

const JavaScript = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('syllabus');
  const [expandedExample, setExpandedExample] = useState(null);

  const courseDetails = {
    name: "JavaScript Complete Course",
    description: "Master JavaScript from fundamentals to advanced concepts including ES6+, DOM manipulation, async programming, and modern frameworks.",
    fullDescription: "Learn JavaScript comprehensively from basic syntax to advanced concepts. Master DOM manipulation, asynchronous programming, object-oriented programming, and modern JavaScript features with hands-on projects.",
    duration: "16 weeks",
    level: "Beginner to Advanced",
    instructor: "Alex Thompson",
    introduction: {
      overview: "JavaScript is a high-level, interpreted programming language that enables interactive web pages and is an essential part of web applications. It's the programming language of the web, running in browsers and servers.",
      history: [
        "1995 - Created by Brendan Eich at Netscape in 10 days",
        "1997 - ECMAScript standard established",
        "2009 - ES5 introduced with strict mode and JSON support",
        "2015 - ES6/ES2015 brought classes, modules, arrow functions",
        "2016+ - Annual releases with new features and improvements"
      ],
      features: [
        "Dynamic typing - Variables can hold different types",
        "First-class functions - Functions are values",
        "Prototype-based OOP - Objects can inherit directly",
        "Event-driven programming - Responds to user interactions",
        "Asynchronous programming - Non-blocking operations",
        "Cross-platform - Runs in browsers and servers"
      ],
      syntax: {
        variables: `// Variable declarations
var oldWay = "function-scoped";
let modernWay = "block-scoped";
const constant = "cannot be reassigned";

// Data types
let string = "Hello World";
let number = 42;
let boolean = true;
let array = [1, 2, 3];
let object = { name: "John", age: 30 };
let nullValue = null;
let undefinedValue = undefined;`,
        functions: `// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Function expression
const greetExpression = function(name) {
    return \`Hello, \${name}!\`;
};

// Arrow function
const greetArrow = (name) => \`Hello, \${name}!\`;

// Function with default parameters
const greetDefault = (name = "World") => \`Hello, \${name}!\`;`,
        controlFlow: `// Conditional statements
if (condition) {
    // code block
} else if (anotherCondition) {
    // another block
} else {
    // default block
}

// Switch statement
switch (value) {
    case 'option1':
        // code
        break;
    case 'option2':
        // code
        break;
    default:
        // default code
}

// Loops
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// For...of loop
for (const item of array) {
    console.log(item);
}

// While loop
while (condition) {
    // code
}`
      }
    },
    syllabus: [
      {
        week: 1,
        title: "Introduction to JavaScript",
        topics: [
          "What is JavaScript and its history",
          "JavaScript vs Java differences",
          "How JavaScript runs in browsers",
          "Setting up development environment",
          "Console and debugging basics",
          "Embedding JavaScript in HTML"
        ],
        practicals: [
          "Setup development environment",
          "First JavaScript program",
          "Console debugging practice",
          "Browser developer tools"
        ],
        examples: [
          {
            title: "JavaScript Fundamentals and Setup",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Fundamentals</title>
</head>
<body>
    <h1>JavaScript Learning Journey</h1>
    <div id="output"></div>
    <button onclick="runExamples()">Run JavaScript Examples</button>

    <script>
        // 1. Console Methods for Debugging
        console.log("Welcome to JavaScript!");
        console.info("This is an info message");
        console.warn("This is a warning");
        console.error("This is an error message");
        
        // Console with styling
        console.log("%cStyled Console Message", "color: blue; font-size: 16px; font-weight: bold;");
        
        // Console table for objects
        const users = [
            { name: "Alice", age: 25, city: "New York" },
            { name: "Bob", age: 30, city: "London" },
            { name: "Charlie", age: 35, city: "Tokyo" }
        ];
        console.table(users);
        
        // Console time for performance measurement
        console.time("Loop Performance");
        for (let i = 0; i < 1000000; i++) {
            // Some operation
        }
        console.timeEnd("Loop Performance");

        // 2. JavaScript History and Evolution Demo
        function demonstrateJSEvolution() {
            console.log("=== JavaScript Evolution Demo ===");
            
            // ES5 (2009) - Traditional function syntax
            var es5Function = function(name) {
                return "Hello, " + name + "!";
            };
            console.log("ES5 Style:", es5Function("World"));
            
            // ES6 (2015) - Arrow functions and template literals
            const es6Function = (name) => \`Hello, \${name}!\`;
            console.log("ES6 Style:", es6Function("Modern JS"));
            
            // ES6 - Destructuring
            const person = { name: "John", age: 30, city: "NYC" };
            const { name, age } = person;
            console.log(\`Destructuring: \${name} is \${age} years old\`);
            
            // ES6 - Spread operator
            const arr1 = [1, 2, 3];
            const arr2 = [4, 5, 6];
            const combined = [...arr1, ...arr2];
            console.log("Spread operator:", combined);
            
            // ES2017 - Async/Await (we'll cover this later)
            console.log("Modern JS features make code more readable and powerful!");
        }

        // 3. JavaScript vs Java Comparison
        function jsVsJavaComparison() {
            console.log("=== JavaScript vs Java ===");
            
            const comparison = {
                "Aspect": ["Type System", "Compilation", "Platform", "Syntax", "Use Case"],
                "JavaScript": [
                    "Dynamic, loosely typed",
                    "Interpreted (JIT compiled)",
                    "Web browsers, Node.js",
                    "C-like, flexible",
                    "Web development, full-stack"
                ],
                "Java": [
                    "Static, strongly typed",
                    "Compiled to bytecode",
                    "JVM (cross-platform)",
                    "C-like, verbose",
                    "Enterprise, Android, desktop"
                ]
            };
            
            console.table(comparison);
            
            // JavaScript flexibility example
            let dynamicVariable = "I'm a string";
            console.log("Dynamic typing:", typeof dynamicVariable);
            
            dynamicVariable = 42;
            console.log("Now I'm a number:", typeof dynamicVariable);
            
            dynamicVariable = true;
            console.log("Now I'm a boolean:", typeof dynamicVariable);
            
            dynamicVariable = { name: "Object" };
            console.log("Now I'm an object:", typeof dynamicVariable);
        }

        // 4. How JavaScript Runs in the Browser
        function howJSRuns() {
            console.log("=== How JavaScript Runs ===");
            
            // Call stack demonstration
            function first() {
                console.log("First function");
                second();
                console.log("First function end");
            }
            
            function second() {
                console.log("Second function");
                third();
                console.log("Second function end");
            }
            
            function third() {
                console.log("Third function");
            }
            
            console.log("Call stack example:");
            first();
            
            // Event loop demonstration
            console.log("Event loop example:");
            console.log("1. Synchronous");
            
            setTimeout(() => {
                console.log("3. Asynchronous (after 0ms)");
            }, 0);
            
            console.log("2. Synchronous");
            
            // JavaScript engines
            console.log("JavaScript Engine Info:");
            console.log("User Agent:", navigator.userAgent);
            console.log("Platform:", navigator.platform);
        }

        // 5. Development Environment Setup Guide
        function developmentSetup() {
            console.log("=== Development Environment Setup ===");
            
            const setupGuide = {
                "Essential Tools": [
                    "Code Editor: VS Code, Sublime Text, or Atom",
                    "Browser: Chrome, Firefox (with DevTools)",
                    "Node.js: For server-side JavaScript",
                    "Git: Version control system"
                ],
                "VS Code Extensions": [
                    "JavaScript (ES6) code snippets",
                    "Prettier - Code formatter",
                    "ESLint - JavaScript linter",
                    "Live Server - Local development server",
                    "Bracket Pair Colorizer"
                ],
                "Browser DevTools": [
                    "Console: For debugging and testing",
                    "Elements: Inspect HTML/CSS",
                    "Sources: Debug JavaScript code",
                    "Network: Monitor HTTP requests",
                    "Performance: Analyze runtime performance"
                ]
            };
            
            for (const [category, items] of Object.entries(setupGuide)) {
                console.log(\`\\n\${category}:\`);
                items.forEach((item, index) => {
                    console.log(\`  \${index + 1}. \${item}\`);
                });
            }
        }

        // 6. Interactive Examples
        function runExamples() {
            const output = document.getElementById('output');
            
            // Clear previous output
            output.innerHTML = '';
            
            // Create interactive examples
            const examples = [
                {
                    title: "Variable Types Demo",
                    code: () => {
                        let examples = [];
                        
                        // Different data types
                        const dataTypes = [
                            { type: 'String', value: 'Hello World', example: '"Hello World"' },
                            { type: 'Number', value: 42, example: '42' },
                            { type: 'Boolean', value: true, example: 'true' },
                            { type: 'Array', value: [1, 2, 3], example: '[1, 2, 3]' },
                            { type: 'Object', value: {name: 'John'}, example: '{name: "John"}' },
                            { type: 'Null', value: null, example: 'null' },
                            { type: 'Undefined', value: undefined, example: 'undefined' }
                        ];
                        
                        dataTypes.forEach(item => {
                            examples.push(\`<strong>\${item.type}:</strong> \${item.example} → \${typeof item.value}\`);
                        });
                        
                        return examples.join('<br>');
                    }
                },
                {
                    title: "Function Examples",
                    code: () => {
                        // Different function syntaxes
                        function traditionalFunction(name) {
                            return "Hello, " + name + "!";
                        }
                        
                        const arrowFunction = (name) => \`Hello, \${name}!\`;
                        
                        const result1 = traditionalFunction("Traditional");
                        const result2 = arrowFunction("Arrow");
                        
                        return \`
                            <strong>Traditional Function:</strong> \${result1}<br>
                            <strong>Arrow Function:</strong> \${result2}
                        \`;
                    }
                },
                {
                    title: "Current Date and Time",
                    code: () => {
                        const now = new Date();
                        return \`
                            <strong>Current Time:</strong> \${now.toLocaleString()}<br>
                            <strong>Timestamp:</strong> \${now.getTime()}<br>
                            <strong>ISO String:</strong> \${now.toISOString()}
                        \`;
                    }
                }
            ];
            
            // Display examples
            examples.forEach((example, index) => {
                const div = document.createElement('div');
                div.style.cssText = 'margin: 20px 0; padding: 15px; border: 1px solid #ddd; border-radius: 5px; background: #f9f9f9;';
                div.innerHTML = \`
                    <h3 style="margin-top: 0; color: #333;">\${example.title}</h3>
                    <div style="font-family: monospace; background: white; padding: 10px; border-radius: 3px;">
                        \${example.code()}
                    </div>
                \`;
                output.appendChild(div);
            });
        }

        // 7. Error Handling and Debugging
        function debuggingExamples() {
            console.log("=== Debugging Examples ===");
            
            try {
                // Intentional error for demonstration
                let undefinedVariable;
                console.log(undefinedVariable.property); // This will throw an error
            } catch (error) {
                console.error("Caught error:", error.message);
                console.log("Error type:", error.name);
                console.log("Stack trace:", error.stack);
            }
            
            // Debugging with breakpoints (in browser DevTools)
            debugger; // This will pause execution in DevTools
            
            // Console assertions
            console.assert(2 + 2 === 4, "Math still works!");
            console.assert(2 + 2 === 5, "This assertion will fail");
            
            // Console grouping
            console.group("User Information");
            console.log("Name: John Doe");
            console.log("Age: 30");
            console.log("Email: john@example.com");
            console.groupEnd();
        }

        // Run all demonstrations
        function runAllDemos() {
            demonstrateJSEvolution();
            jsVsJavaComparison();
            howJSRuns();
            developmentSetup();
            debuggingExamples();
        }

        // Auto-run demos when page loads
        document.addEventListener('DOMContentLoaded', function() {
            console.log("Page loaded! Running JavaScript demos...");
            runAllDemos();
        });

        // Make functions available globally for button clicks
        window.runExamples = runExamples;
        window.runAllDemos = runAllDemos;
    </script>

    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            line-height: 1.6;
        }
        
        button {
            background: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            margin: 10px 5px;
        }
        
        button:hover {
            background: #0056b3;
        }
        
        #output {
            margin-top: 20px;
        }
        
        h1 {
            color: #333;
            text-align: center;
        }
    </style>
</body>
</html>`,
            explanation: "Complete JavaScript introduction with interactive examples, debugging techniques, and development environment setup."
          }
        ]
      },
      {
        week: 2,
        title: "Variables and Data Types",
        topics: [
          "var, let, const differences",
          "Primitive data types",
          "Dynamic typing in JavaScript",
          "Type conversion and coercion",
          "Variable scope and hoisting",
          "Best practices for variable naming"
        ],
        practicals: [
          "Variable declaration practice",
          "Data type conversion exercises",
          "Scope demonstration",
          "Type checking utilities"
        ],
        examples: []
      },
      {
        week: 3,
        title: "Operators and Control Flow",
        topics: [
          "Arithmetic and assignment operators",
          "Comparison and logical operators",
          "Ternary operator",
          "Conditional statements (if, else, switch)",
          "Loops (for, while, do-while)",
          "Break and continue statements"
        ],
        practicals: [
          "Calculator logic implementation",
          "Number guessing game",
          "Pattern printing with loops",
          "Menu-driven applications"
        ],
        examples: []
      },
      {
        week: 4,
        title: "Functions",
        topics: [
          "Function declaration vs expression",
          "Arrow functions",
          "Parameters and return values",
          "Default parameters",
          "Rest and spread operators",
          "Higher-order functions"
        ],
        practicals: [
          "Function library creation",
          "Callback function examples",
          "Array manipulation functions",
          "Mathematical utility functions"
        ],
        examples: []
      },
      {
        week: 5,
        title: "Arrays and Objects",
        topics: [
          "Array creation and manipulation",
          "Array methods (map, filter, reduce)",
          "Object literals and properties",
          "Object methods and this keyword",
          "Destructuring assignment",
          "JSON handling"
        ],
        practicals: [
          "Data processing with arrays",
          "Object-oriented data modeling",
          "JSON API simulation",
          "Complex data transformations"
        ],
        examples: []
      },
      {
        week: 6,
        title: "DOM Manipulation",
        topics: [
          "Selecting DOM elements",
          "Modifying element content and attributes",
          "Creating and removing elements",
          "CSS manipulation with JavaScript",
          "Form handling and validation",
          "Dynamic content generation"
        ],
        practicals: [
          "Interactive web page creation",
          "Dynamic form validation",
          "Content management system",
          "Image gallery with JavaScript"
        ],
        examples: []
      },
      {
        week: 7,
        title: "Events and Event Handling",
        topics: [
          "Event types and listeners",
          "Event object and properties",
          "Event propagation and delegation",
          "Preventing default behavior",
          "Custom events",
          "Touch and mobile events"
        ],
        practicals: [
          "Interactive UI components",
          "Drag and drop functionality",
          "Mobile-responsive interactions",
          "Event-driven applications"
        ],
        examples: []
      },
      {
        week: 8,
        title: "Error Handling and Debugging",
        topics: [
          "Try-catch-finally blocks",
          "Error types and custom errors",
          "Debugging techniques",
          "Browser developer tools",
          "Console methods and logging",
          "Testing and validation"
        ],
        practicals: [
          "Error handling implementation",
          "Debugging exercises",
          "Logging system creation",
          "Input validation functions"
        ],
        examples: []
      },
      {
        week: 9,
        title: "Asynchronous JavaScript",
        topics: [
          "Callbacks and callback hell",
          "Promises and promise chaining",
          "Async/await syntax",
          "setTimeout and setInterval",
          "Event loop understanding",
          "Error handling in async code"
        ],
        practicals: [
          "Timer applications",
          "Promise-based utilities",
          "Async data processing",
          "Animation with timers"
        ],
        examples: []
      },
      {
        week: 10,
        title: "APIs and AJAX",
        topics: [
          "Fetch API basics",
          "HTTP methods and status codes",
          "JSON data handling",
          "Error handling in API calls",
          "CORS and security",
          "API authentication basics"
        ],
        practicals: [
          "Weather app with API",
          "News feed application",
          "Data visualization from APIs",
          "RESTful API consumption"
        ],
        examples: []
      },
      {
        week: 11,
        title: "Object-Oriented Programming",
        topics: [
          "Constructor functions",
          "Prototypes and inheritance",
          "ES6 classes",
          "Encapsulation and abstraction",
          "Polymorphism in JavaScript",
          "Design patterns"
        ],
        practicals: [
          "Class-based applications",
          "Inheritance hierarchies",
          "Design pattern implementation",
          "OOP project development"
        ],
        examples: []
      },
      {
        week: 12,
        title: "Advanced JavaScript Concepts",
        topics: [
          "Closures and lexical scope",
          "Hoisting and temporal dead zone",
          "This keyword and binding",
          "Call, apply, and bind methods",
          "Currying and partial application",
          "Memoization and optimization"
        ],
        practicals: [
          "Closure-based modules",
          "Function optimization techniques",
          "Advanced function patterns",
          "Performance optimization"
        ],
        examples: []
      },
      {
        week: 13,
        title: "Browser APIs and Storage",
        topics: [
          "Local Storage and Session Storage",
          "Cookies and their usage",
          "Geolocation API",
          "File API and drag-drop",
          "History API and routing",
          "Notification API"
        ],
        practicals: [
          "Data persistence applications",
          "Location-based services",
          "File upload and processing",
          "Single-page applications"
        ],
        examples: []
      },
      {
        week: 14,
        title: "JavaScript Modules",
        topics: [
          "ES6 modules (import/export)",
          "CommonJS modules",
          "Module bundlers introduction",
          "Dynamic imports",
          "Module patterns",
          "Dependency management"
        ],
        practicals: [
          "Modular application development",
          "Library creation and distribution",
          "Code organization strategies",
          "Build tool integration"
        ],
        examples: []
      },
      {
        week: 15,
        title: "Testing and Performance",
        topics: [
          "Unit testing with Jest",
          "Test-driven development",
          "Performance measurement",
          "Memory management",
          "Code optimization techniques",
          "Profiling and debugging"
        ],
        practicals: [
          "Test suite development",
          "Performance optimization",
          "Memory leak detection",
          "Code quality improvement"
        ],
        examples: []
      },
      {
        week: 16,
        title: "Modern JavaScript and Frameworks",
        topics: [
          "ES2020+ features",
          "Node.js introduction",
          "NPM and package management",
          "React.js basics",
          "Vue.js introduction",
          "Build tools and workflows"
        ],
        practicals: [
          "Modern JavaScript features",
          "Node.js application development",
          "Framework comparison project",
          "Full-stack application basics"
        ],
        examples: []
      }
    ],
    features: [
      "160+ comprehensive lessons",
      "40+ hands-on projects",
      "ES6+ modern JavaScript features",
      "DOM manipulation mastery",
      "Asynchronous programming (Promises, async/await)",
      "Object-oriented programming with classes",
      "API integration and AJAX",
      "Browser APIs and local storage",
      "JavaScript modules and bundling",
      "Testing with Jest framework",
      "Performance optimization techniques",
      "Modern frameworks introduction",
      "Node.js and full-stack development",
      "Interactive coding exercises",
      "Lifetime access to content",
      "Community support"
    ]
  };

  const handleBack = () => {
    navigate('/courses');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-yellow-900/20 dark:to-orange-900/20">
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
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
              <FaJsSquare className="text-yellow-500" />
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
            <nav className="flex space-x-8 px-8 overflow-x-auto">
              <button 
                onClick={() => setActiveTab('syllabus')}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'syllabus' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <FaBook />
                Syllabus
              </button>
              <button 
                onClick={() => setActiveTab('theory')}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'theory' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <FaJsSquare />
                JS Theory
              </button>
              <button 
                onClick={() => setActiveTab('examples')}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'examples' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <FaCode />
                Code Examples
              </button>
              <button 
                onClick={() => setActiveTab('projects')}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'projects' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <FaLaptopCode />
                Projects
              </button>
              <button 
                onClick={() => setActiveTab('download')}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'download' 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <FaDownload />
                Download PDF
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

            {activeTab === 'theory' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">JavaScript Theory</h2>
                  <p className="text-gray-600 dark:text-gray-300">Comprehensive theoretical foundations of JavaScript</p>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                >
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">JavaScript History</h3>
                  <div className="space-y-3">
                    {courseDetails.introduction.history.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 bg-white dark:bg-gray-800 rounded-lg p-3">
                        <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                >
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {courseDetails.introduction.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 bg-white dark:bg-gray-800 rounded-lg p-3">
                        <FaJsSquare className="text-yellow-500 text-xl mt-1" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                  {Object.entries(courseDetails.introduction.syntax).map(([key, code]) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                    >
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 capitalize">{key}</h4>
                      <div className="bg-gray-900 rounded-lg overflow-hidden">
                        <pre className="p-4 text-sm text-gray-100 overflow-x-auto">
                          <code>{code}</code>
                        </pre>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'examples' && (
              <div className="space-y-6">
                {courseDetails.syllabus.map((week, weekIndex) => (
                  week.examples && week.examples.length > 0 && (
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
                                    <span className="text-gray-300 text-sm font-mono">JavaScript Code</span>
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

            {activeTab === 'projects' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">JavaScript Projects</h2>
                  <p className="text-gray-600 dark:text-gray-300">Hands-on projects to master JavaScript concepts</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: "Interactive Calculator", desc: "Build a fully functional calculator with advanced operations", level: "Beginner" },
                    { title: "Todo List App", desc: "Create a dynamic todo application with local storage", level: "Beginner" },
                    { title: "Weather Dashboard", desc: "Fetch weather data from APIs and display beautifully", level: "Intermediate" },
                    { title: "Quiz Application", desc: "Interactive quiz with timer and score tracking", level: "Intermediate" },
                    { title: "E-commerce Cart", desc: "Shopping cart with add, remove, and checkout functionality", level: "Advanced" },
                    { title: "Real-time Chat App", desc: "WebSocket-based chat application with multiple rooms", level: "Advanced" }
                  ].map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          project.level === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' :
                          project.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100' :
                          'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                        }`}>
                          {project.level}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.desc}</p>
                      <div className="flex items-center gap-2">
                        <FaPlay className="text-yellow-500" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">Interactive project with live demo</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'download' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Download JavaScript Resources</h2>
                  <p className="text-gray-600 dark:text-gray-300">Comprehensive JavaScript learning materials</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <FaJsSquare className="text-yellow-500 text-3xl" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Complete JavaScript Course</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Full curriculum with examples</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                        16 weeks of comprehensive content
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                        160+ pages of theory and examples
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                        40+ hands-on projects
                      </li>
                    </ul>
                    <button 
                      onClick={() => window.open('#', '_blank')}
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <FaDownload />
                      Download PDF (12.8 MB)
                    </button>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <FaCode className="text-orange-500 text-3xl" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">ES6+ Modern JavaScript</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Advanced features and patterns</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                        Arrow functions and destructuring
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                        Async/await and Promises
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                        Modules and modern patterns
                      </li>
                    </ul>
                    <button 
                      onClick={() => window.open('#', '_blank')}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <FaDownload />
                      Download PDF (9.4 MB)
                    </button>
                  </motion.div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JavaScript;