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
  FaChevronUp
} from 'react-icons/fa';

const JavaScriptFundamentals = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('syllabus');
  const [expandedExample, setExpandedExample] = useState(null);

  const courseDetails = {
    name: "JavaScript Fundamentals",
    description: "Complete JavaScript course covering ES6+, DOM manipulation, async programming, and modern JavaScript features.",
    fullDescription: "Master JavaScript from basics to advanced concepts. Learn ES6+ features, DOM manipulation, asynchronous programming, APIs, and modern JavaScript development patterns. Build interactive web applications with real-world projects.",
    duration: "8 weeks",
    level: "Beginner",
    instructor: "David Wilson",
    syllabus: [
      {
        week: 1,
        title: "JavaScript Basics and ES6+",
        topics: [
          "Variables and data types",
          "Functions and arrow functions",
          "Template literals",
          "Destructuring assignment",
          "Spread and rest operators"
        ],
        practicals: [
          "Create interactive programs",
          "Use modern JS syntax",
          "Build utility functions"
        ],
        examples: [
          {
            title: "Modern JavaScript Features",
            code: `// Modern JavaScript ES6+ Features

// 1. Variables and Constants
const PI = 3.14159;
let radius = 5;
var oldStyle = "avoid using var";

// 2. Template Literals
const name = "John";
const age = 30;
const greeting = \`Hello, my name is \${name} and I'm \${age} years old.\`;
console.log(greeting);

// 3. Arrow Functions
const calculateArea = (radius) => PI * radius * radius;
const multiply = (a, b) => a * b;
const greet = name => \`Hello, \${name}!\`;

// 4. Destructuring Assignment
const person = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 28,
    city: "New York"
};

// Object destructuring
const { firstName, lastName, age } = person;
const { city: location } = person; // Rename while destructuring

// Array destructuring
const colors = ["red", "green", "blue", "yellow"];
const [primary, secondary, ...otherColors] = colors;

console.log(primary); // "red"
console.log(secondary); // "green"
console.log(otherColors); // ["blue", "yellow"]

// 5. Spread Operator
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const combined = [...numbers1, ...numbers2];

const originalPerson = { name: "Bob", age: 25 };
const updatedPerson = { ...originalPerson, age: 26, city: "Boston" };

// 6. Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// 7. Default Parameters
function createUser(name, age = 18, role = "user") {
    return { name, age, role };
}

const user1 = createUser("Alice");
const user2 = createUser("Bob", 25, "admin");

// 8. Enhanced Object Literals
const x = 10;
const y = 20;

const point = {
    x, // shorthand for x: x
    y, // shorthand for y: y
    
    // Method shorthand
    getDistance() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },
    
    // Computed property names
    [\`coordinate_\${x}\`]: "x-value",
    [\`coordinate_\${y}\`]: "y-value"
};

// 9. Array Methods
const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 78 },
    { name: "Diana", grade: 96 }
];

// Filter students with grade > 80
const topStudents = students.filter(student => student.grade > 80);

// Map to get just names
const studentNames = students.map(student => student.name);

// Find specific student
const alice = students.find(student => student.name === "Alice");

// Calculate average grade
const averageGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;

// Check if all students passed (grade > 60)
const allPassed = students.every(student => student.grade > 60);

// Check if any student got A+ (grade > 95)
const hasAPlus = students.some(student => student.grade > 95);

console.log("Top Students:", topStudents);
console.log("Average Grade:", averageGrade);
console.log("All Passed:", allPassed);
console.log("Has A+:", hasAPlus);

// 10. Classes
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    get area() {
        return this.width * this.height;
    }
    
    get perimeter() {
        return 2 * (this.width + this.height);
    }
    
    static fromSquare(side) {
        return new Rectangle(side, side);
    }
}

const rect = new Rectangle(10, 5);
const square = Rectangle.fromSquare(8);

console.log(\`Rectangle area: \${rect.area}\`);
console.log(\`Square perimeter: \${square.perimeter}\`);`,
            explanation: "Comprehensive overview of modern JavaScript features including ES6+ syntax, destructuring, arrow functions, classes, and array methods."
          }
        ]
      },
      {
        week: 2,
        title: "DOM Manipulation and Events",
        topics: [
          "DOM selection and manipulation",
          "Event handling",
          "Event delegation",
          "Form validation",
          "Dynamic content creation"
        ],
        practicals: [
          "Build interactive web pages",
          "Handle user interactions",
          "Create dynamic forms"
        ],
        examples: [
          {
            title: "Interactive Todo Application",
            code: `// Interactive Todo Application with DOM Manipulation

class TodoApp {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        this.nextId = this.todos.length > 0 ? Math.max(...this.todos.map(t => t.id)) + 1 : 1;
        this.filter = 'all';
        
        this.initializeElements();
        this.attachEventListeners();
        this.render();
    }
    
    initializeElements() {
        this.todoForm = document.getElementById('todo-form');
        this.todoInput = document.getElementById('todo-input');
        this.todoList = document.getElementById('todo-list');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.clearCompleted = document.getElementById('clear-completed');
        this.todoCount = document.getElementById('todo-count');
    }
    
    attachEventListeners() {
        // Form submission
        this.todoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.addTodo();
        });
        
        // Filter buttons
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setFilter(e.target.dataset.filter);
            });
        });
        
        // Clear completed button
        this.clearCompleted.addEventListener('click', () => {
            this.clearCompletedTodos();
        });
        
        // Todo list event delegation
        this.todoList.addEventListener('click', (e) => {
            const todoId = parseInt(e.target.closest('.todo-item')?.dataset.id);
            
            if (e.target.classList.contains('toggle-btn')) {
                this.toggleTodo(todoId);
            } else if (e.target.classList.contains('delete-btn')) {
                this.deleteTodo(todoId);
            } else if (e.target.classList.contains('edit-btn')) {
                this.editTodo(todoId);
            }
        });
        
        // Edit functionality
        this.todoList.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.target.classList.contains('edit-input')) {
                this.saveEdit(parseInt(e.target.closest('.todo-item').dataset.id), e.target.value);
            } else if (e.key === 'Escape' && e.target.classList.contains('edit-input')) {
                this.cancelEdit();
            }
        });
        
        this.todoList.addEventListener('blur', (e) => {
            if (e.target.classList.contains('edit-input')) {
                this.saveEdit(parseInt(e.target.closest('.todo-item').dataset.id), e.target.value);
            }
        }, true);
    }
    
    addTodo() {
        const text = this.todoInput.value.trim();
        if (!text) return;
        
        const todo = {
            id: this.nextId++,
            text,
            completed: false,
            createdAt: new Date().toISOString()
        };
        
        this.todos.push(todo);
        this.todoInput.value = '';
        this.saveTodos();
        this.render();
        
        // Add animation
        setTimeout(() => {
            const newTodoElement = this.todoList.querySelector(\`[data-id="\${todo.id}"]\`);
            if (newTodoElement) {
                newTodoElement.classList.add('slide-in');
            }
        }, 10);
    }
    
    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveTodos();
            this.render();
        }
    }
    
    deleteTodo(id) {
        const todoElement = this.todoList.querySelector(\`[data-id="\${id}"]\`);
        if (todoElement) {
            todoElement.classList.add('slide-out');
            setTimeout(() => {
                this.todos = this.todos.filter(t => t.id !== id);
                this.saveTodos();
                this.render();
            }, 300);
        }
    }
    
    editTodo(id) {
        const todoElement = this.todoList.querySelector(\`[data-id="\${id}"]\`);
        const textElement = todoElement.querySelector('.todo-text');
        const currentText = textElement.textContent;
        
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'edit-input';
        input.value = currentText;
        
        textElement.replaceWith(input);
        input.focus();
        input.select();
    }
    
    saveEdit(id, newText) {
        const todo = this.todos.find(t => t.id === id);
        if (todo && newText.trim()) {
            todo.text = newText.trim();
            this.saveTodos();
        }
        this.render();
    }
    
    cancelEdit() {
        this.render();
    }
    
    setFilter(filter) {
        this.filter = filter;
        this.filterButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        this.render();
    }
    
    clearCompletedTodos() {
        this.todos = this.todos.filter(todo => !todo.completed);
        this.saveTodos();
        this.render();
    }
    
    getFilteredTodos() {
        switch (this.filter) {
            case 'active':
                return this.todos.filter(todo => !todo.completed);
            case 'completed':
                return this.todos.filter(todo => todo.completed);
            default:
                return this.todos;
        }
    }
    
    render() {
        const filteredTodos = this.getFilteredTodos();
        
        // Update todo count
        const activeTodos = this.todos.filter(todo => !todo.completed).length;
        this.todoCount.textContent = \`\${activeTodos} item\${activeTodos !== 1 ? 's' : ''} left\`;
        
        // Clear and render todos
        this.todoList.innerHTML = '';
        
        filteredTodos.forEach(todo => {
            const todoElement = this.createTodoElement(todo);
            this.todoList.appendChild(todoElement);
        });
        
        // Show/hide clear completed button
        const hasCompleted = this.todos.some(todo => todo.completed);
        this.clearCompleted.style.display = hasCompleted ? 'block' : 'none';
    }
    
    createTodoElement(todo) {
        const li = document.createElement('li');
        li.className = \`todo-item \${todo.completed ? 'completed' : ''}\`;
        li.dataset.id = todo.id;
        
        li.innerHTML = \`
            <div class="todo-content">
                <button class="toggle-btn" aria-label="Toggle todo">
                    <span class="checkmark">\${todo.completed ? '✓' : ''}</span>
                </button>
                <span class="todo-text">\${this.escapeHtml(todo.text)}</span>
                <div class="todo-actions">
                    <button class="edit-btn" aria-label="Edit todo">✏️</button>
                    <button class="delete-btn" aria-label="Delete todo">🗑️</button>
                </div>
            </div>
        \`;
        
        return li;
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
}

// Form Validation Utility
class FormValidator {
    constructor(form) {
        this.form = form;
        this.errors = {};
        this.attachEventListeners();
    }
    
    attachEventListeners() {
        this.form.addEventListener('submit', (e) => {
            if (!this.validate()) {
                e.preventDefault();
            }
        });
        
        // Real-time validation
        this.form.addEventListener('input', (e) => {
            this.validateField(e.target);
        });
        
        this.form.addEventListener('blur', (e) => {
            this.validateField(e.target);
        }, true);
    }
    
    validate() {
        this.errors = {};
        const inputs = this.form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => this.validateField(input));
        
        return Object.keys(this.errors).length === 0;
    }
    
    validateField(field) {
        const value = field.value.trim();
        const rules = field.dataset.rules ? field.dataset.rules.split('|') : [];
        
        // Clear previous error
        delete this.errors[field.name];
        this.clearFieldError(field);
        
        rules.forEach(rule => {
            if (this.errors[field.name]) return; // Skip if already has error
            
            const [ruleName, ruleValue] = rule.split(':');
            
            switch (ruleName) {
                case 'required':
                    if (!value) {
                        this.setFieldError(field, 'This field is required');
                    }
                    break;
                case 'email':
                    if (value && !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value)) {
                        this.setFieldError(field, 'Please enter a valid email address');
                    }
                    break;
                case 'min':
                    if (value && value.length < parseInt(ruleValue)) {
                        this.setFieldError(field, \`Minimum \${ruleValue} characters required\`);
                    }
                    break;
                case 'max':
                    if (value && value.length > parseInt(ruleValue)) {
                        this.setFieldError(field, \`Maximum \${ruleValue} characters allowed\`);
                    }
                    break;
            }
        });
    }
    
    setFieldError(field, message) {
        this.errors[field.name] = message;
        field.classList.add('error');
        
        let errorElement = field.parentNode.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('span');
            errorElement.className = 'error-message';
            field.parentNode.appendChild(errorElement);
        }
        errorElement.textContent = message;
    }
    
    clearFieldError(field) {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Todo App
    if (document.getElementById('todo-form')) {
        new TodoApp();
    }
    
    // Initialize Form Validation
    const forms = document.querySelectorAll('form[data-validate]');
    forms.forEach(form => new FormValidator(form));
});`,
            explanation: "Complete interactive todo application demonstrating DOM manipulation, event handling, local storage, form validation, and modern JavaScript patterns."
          }
        ]
      }
    ],
    features: [
      "40 comprehensive lessons",
      "8 hands-on JavaScript projects",
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JavaScriptFundamentals;