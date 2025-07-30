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

const ReactJS = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('syllabus');
  const [expandedExample, setExpandedExample] = useState(null);

  const courseDetails = {
    name: "React JS",
    description: "Modern React development with hooks, context API, and state management. Build dynamic single-page applications.",
    fullDescription: "Master React.js from fundamentals to advanced concepts. Learn components, hooks, state management, routing, and modern React patterns. Build real-world applications with best practices and industry standards.",
    duration: "10 weeks",
    level: "Intermediate",
    instructor: "Alex Rodriguez",
    syllabus: [
      {
        week: 1,
        title: "React Fundamentals and JSX",
        topics: [
          "React introduction and setup",
          "JSX syntax and expressions",
          "Components and props",
          "Event handling",
          "Conditional rendering"
        ],
        practicals: [
          "Setup React development environment",
          "Create first React components",
          "Build interactive UI elements"
        ],
        examples: [
          {
            title: "React Component Basics",
            code: `import React from 'react';

// Functional Component with Props
const UserCard = ({ name, email, age, isActive }) => {
  const handleClick = () => {
    alert(\`Hello, \${name}!\`);
  };

  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
      <button onClick={handleClick}>
        Greet User
      </button>
    </div>
  );
};

// Main App Component
const App = () => {
  const users = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', age: 28, isActive: true },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', age: 32, isActive: false },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', age: 25, isActive: true }
  ];

  return (
    <div className="app">
      <h1>User Directory</h1>
      <div className="user-list">
        {users.map(user => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            age={user.age}
            isActive={user.isActive}
          />
        ))}
      </div>
    </div>
  );
};

export default App;`,
            explanation: "Basic React component structure showing functional components, props, JSX syntax, event handling, and conditional rendering."
          }
        ]
      },
      {
        week: 2,
        title: "State Management with Hooks",
        topics: [
          "useState hook",
          "useEffect hook",
          "Custom hooks",
          "Hook rules and best practices",
          "State updates and re-renders"
        ],
        practicals: [
          "Build stateful components",
          "Handle side effects",
          "Create custom hooks"
        ],
        examples: [
          {
            title: "Todo App with Hooks",
            code: `import React, { useState, useEffect } from 'react';

// Custom hook for local storage
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  return [storedValue, setValue];
};

const TodoApp = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  // Add new todo
  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Filter todos
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  useEffect(() => {
    console.log(\`Total todos: \${todos.length}\`);
  }, [todos]);

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      
      {/* Add Todo */}
      <div className="add-todo">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new todo..."
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {/* Filter Buttons */}
      <div className="filters">
        <button 
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All ({todos.length})
        </button>
        <button 
          className={filter === 'active' ? 'active' : ''}
          onClick={() => setFilter('active')}
        >
          Active ({todos.filter(t => !t.completed).length})
        </button>
        <button 
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
        >
          Completed ({todos.filter(t => t.completed).length})
        </button>
      </div>

      {/* Todo List */}
      <div className="todo-list">
        {filteredTodos.map(todo => (
          <div key={todo.id} className={\`todo-item \${todo.completed ? 'completed' : ''}\`}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className="todo-text">{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>

      {filteredTodos.length === 0 && (
        <p className="empty-message">No todos found!</p>
      )}
    </div>
  );
};

export default TodoApp;`,
            explanation: "Complete Todo app demonstrating useState, useEffect, custom hooks, local storage integration, and complex state management."
          }
        ]
      },
      {
        week: 3,
        title: "Context API and Advanced Patterns",
        topics: [
          "React Context API",
          "useContext hook",
          "Provider pattern",
          "State management patterns",
          "Component composition"
        ],
        practicals: [
          "Implement global state",
          "Create context providers",
          "Build theme switching"
        ],
        examples: [
          {
            title: "Theme Context and Global State",
            code: `import React, { createContext, useContext, useReducer, useState } from 'react';

// Theme Context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    toggleTheme,
    colors: {
      light: {
        background: '#ffffff',
        text: '#000000',
        primary: '#007bff'
      },
      dark: {
        background: '#1a1a1a',
        text: '#ffffff',
        primary: '#4dabf7'
      }
    }
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// User Context with useReducer
const UserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false
      };
    case 'UPDATE_PROFILE':
      return {
        ...state,
        user: { ...state.user, ...action.payload }
      };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
    isAuthenticated: false
  });

  const login = (userData) => {
    dispatch({ type: 'LOGIN', payload: userData });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const updateProfile = (updates) => {
    dispatch({ type: 'UPDATE_PROFILE', payload: updates });
  };

  return (
    <UserContext.Provider value={{
      ...state,
      login,
      logout,
      updateProfile
    }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hooks
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};

// Components using context
const Header = () => {
  const { theme, toggleTheme, colors } = useTheme();
  const { user, isAuthenticated, logout } = useUser();

  const headerStyle = {
    backgroundColor: colors[theme].background,
    color: colors[theme].text,
    padding: '1rem',
    borderBottom: \`1px solid \${colors[theme].primary}\`
  };

  return (
    <header style={headerStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>My App</h1>
        <div>
          <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
          {isAuthenticated ? (
            <div style={{ display: 'inline-block', marginLeft: '1rem' }}>
              <span>Welcome, {user.name}!</span>
              <button onClick={logout} style={{ marginLeft: '0.5rem' }}>
                Logout
              </button>
            </div>
          ) : (
            <span style={{ marginLeft: '1rem' }}>Not logged in</span>
          )}
        </div>
      </div>
    </header>
  );
};

const LoginForm = () => {
  const { login } = useUser();
  const { theme, colors } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      login(formData);
    }
  };

  const formStyle = {
    backgroundColor: colors[theme].background,
    color: colors[theme].text,
    padding: '2rem',
    maxWidth: '400px',
    margin: '2rem auto'
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Login</h2>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={{ width: '100%', padding: '0.5rem' }}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          style={{ width: '100%', padding: '0.5rem' }}
        />
      </div>
      <button type="submit" style={{ padding: '0.5rem 1rem' }}>
        Login
      </button>
    </form>
  );
};

const App = () => {
  const { isAuthenticated } = useUser();
  const { theme, colors } = useTheme();

  const appStyle = {
    backgroundColor: colors[theme].background,
    color: colors[theme].text,
    minHeight: '100vh'
  };

  return (
    <div style={appStyle}>
      <Header />
      {!isAuthenticated ? (
        <LoginForm />
      ) : (
        <div style={{ padding: '2rem' }}>
          <h2>Dashboard</h2>
          <p>Welcome to your dashboard!</p>
        </div>
      )}
    </div>
  );
};

// Root component with providers
const Root = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ThemeProvider>
  );
};

export default Root;`,
            explanation: "Advanced React patterns showing Context API, useReducer, custom hooks, provider pattern, and global state management with theme switching."
          }
        ]
      }
    ],
    features: [
      "40 comprehensive lessons",
      "8 hands-on React projects",
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
                                    <span className="text-gray-300 text-sm font-mono">React Code</span>
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

export default ReactJS;