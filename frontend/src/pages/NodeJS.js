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

const NodeJS = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('syllabus');
  const [expandedExample, setExpandedExample] = useState(null);

  const courseDetails = {
    name: "Node.js",
    description: "Server-side JavaScript with Node.js and Express. Learn REST APIs, authentication, and real-time applications.",
    fullDescription: "Master Node.js backend development from fundamentals to advanced concepts. Learn Express.js, MongoDB, REST APIs, authentication, real-time applications with Socket.io, and deployment strategies.",
    duration: "12 weeks",
    level: "Intermediate",
    instructor: "Sarah Martinez",
    syllabus: [
      {
        week: 1,
        title: "Node.js Fundamentals",
        topics: [
          "Node.js architecture and event loop",
          "Modules and NPM",
          "File system operations",
          "HTTP module basics",
          "Asynchronous programming"
        ],
        practicals: [
          "Setup Node.js environment",
          "Create basic HTTP server",
          "Work with file operations"
        ],
        examples: [
          {
            title: "Basic HTTP Server and File Operations",
            code: `const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Create a simple HTTP server
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    
    if (pathname === '/') {
        // Serve homepage
        res.writeHead(200);
        res.end(JSON.stringify({
            message: 'Welcome to Node.js Server!',
            timestamp: new Date().toISOString(),
            endpoints: ['/users', '/files', '/about']
        }));
        
    } else if (pathname === '/users') {
        // Serve users data
        const users = [
            { id: 1, name: 'John Doe', email: 'john@example.com' },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
            { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
        ];
        
        res.writeHead(200);
        res.end(JSON.stringify({ users, count: users.length }));
        
    } else if (pathname === '/files') {
        // File operations example
        const filePath = path.join(__dirname, 'data.txt');
        
        if (req.method === 'GET') {
            // Read file
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    res.writeHead(404);
                    res.end(JSON.stringify({ error: 'File not found' }));
                } else {
                    res.writeHead(200);
                    res.end(JSON.stringify({ content: data }));
                }
            });
        } else if (req.method === 'POST') {
            // Write file
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            
            req.on('end', () => {
                fs.writeFile(filePath, body, (err) => {
                    if (err) {
                        res.writeHead(500);
                        res.end(JSON.stringify({ error: 'Failed to write file' }));
                    } else {
                        res.writeHead(200);
                        res.end(JSON.stringify({ message: 'File written successfully' }));
                    }
                });
            });
        }
        
    } else {
        // 404 Not Found
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Page not found' }));
    }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
    console.log(\`Visit http://localhost:\${PORT}\`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    server.close(() => {
        console.log('Process terminated');
    });
});`,
            explanation: "Basic Node.js HTTP server demonstrating routing, file operations, request handling, and graceful shutdown."
          }
        ]
      },
      {
        week: 2,
        title: "Express.js Framework",
        topics: [
          "Express.js setup and routing",
          "Middleware functions",
          "Request and response handling",
          "Template engines",
          "Static file serving"
        ],
        practicals: [
          "Build Express applications",
          "Create custom middleware",
          "Implement routing systems"
        ],
        examples: [
          {
            title: "Express.js REST API with Middleware",
            code: `const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(morgan('combined')); // Logging
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Custom middleware for request timing
app.use((req, res, next) => {
    req.startTime = Date.now();
    next();
});

// Custom middleware for authentication simulation
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ error: 'Access token required' });
    }
    
    // Simulate token validation
    if (token === 'valid-token') {
        req.user = { id: 1, username: 'john_doe' };
        next();
    } else {
        res.status(403).json({ error: 'Invalid token' });
    }
};

// In-memory data store
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 30 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25 },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 35 }
];

let nextId = 4;

// Routes
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Express.js API',
        version: '1.0.0',
        endpoints: {
            users: '/api/users',
            protected: '/api/protected'
        }
    });
});

// Get all users
app.get('/api/users', (req, res) => {
    const { page = 1, limit = 10, search } = req.query;
    
    let filteredUsers = users;
    
    // Search functionality
    if (search) {
        filteredUsers = users.filter(user => 
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase())
        );
    }
    
    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedUsers = filteredUsers.slice(startIndex, endIndex);
    
    res.json({
        users: paginatedUsers,
        pagination: {
            currentPage: parseInt(page),
            totalPages: Math.ceil(filteredUsers.length / limit),
            totalUsers: filteredUsers.length,
            hasNext: endIndex < filteredUsers.length,
            hasPrev: startIndex > 0
        }
    });
});

// Get user by ID
app.get('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    
    res.json({ user });
});

// Create new user
app.post('/api/users', (req, res) => {
    const { name, email, age } = req.body;
    
    // Validation
    if (!name || !email) {
        return res.status(400).json({ 
            error: 'Name and email are required' 
        });
    }
    
    // Check if email already exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        return res.status(409).json({ 
            error: 'Email already exists' 
        });
    }
    
    const newUser = {
        id: nextId++,
        name,
        email,
        age: age || null
    };
    
    users.push(newUser);
    
    res.status(201).json({ 
        message: 'User created successfully',
        user: newUser 
    });
});

// Update user
app.put('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }
    
    const { name, email, age } = req.body;
    
    // Update user
    if (name) users[userIndex].name = name;
    if (email) users[userIndex].email = email;
    if (age !== undefined) users[userIndex].age = age;
    
    res.json({ 
        message: 'User updated successfully',
        user: users[userIndex] 
    });
});

// Delete user
app.delete('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }
    
    const deletedUser = users.splice(userIndex, 1)[0];
    
    res.json({ 
        message: 'User deleted successfully',
        user: deletedUser 
    });
});

// Protected route
app.get('/api/protected', authenticateToken, (req, res) => {
    res.json({
        message: 'This is a protected route',
        user: req.user,
        timestamp: new Date().toISOString()
    });
});

// Response time middleware
app.use((req, res, next) => {
    const responseTime = Date.now() - req.startTime;
    res.setHeader('X-Response-Time', \`\${responseTime}ms\`);
    next();
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Something went wrong!',
        message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({ 
        error: 'Route not found',
        path: req.originalUrl 
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(\`Express server running on port \${PORT}\`);
    console.log(\`API Documentation: http://localhost:\${PORT}\`);
});`,
            explanation: "Complete Express.js REST API with middleware, authentication, CRUD operations, pagination, search, and error handling."
          }
        ]
      },
      {
        week: 3,
        title: "Database Integration with MongoDB",
        topics: [
          "MongoDB setup and connection",
          "Mongoose ODM",
          "Schema design and validation",
          "CRUD operations with database",
          "Database relationships"
        ],
        practicals: [
          "Connect to MongoDB",
          "Create data models",
          "Implement database operations"
        ],
        examples: [
          {
            title: "MongoDB with Mongoose Integration",
            code: `const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/nodeapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

// User Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        trim: true,
        minlength: [3, 'Username must be at least 3 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        match: [/^\\S+@\\S+\\.\\S+$/, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters']
    },
    profile: {
        firstName: String,
        lastName: String,
        age: {
            type: Number,
            min: [0, 'Age cannot be negative'],
            max: [120, 'Age cannot exceed 120']
        },
        bio: String
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

// Generate JWT token
userSchema.methods.generateAuthToken = function() {
    return jwt.sign(
        { userId: this._id, username: this.username },
        process.env.JWT_SECRET || 'fallback-secret',
        { expiresIn: '7d' }
    );
};

// Post Schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        maxlength: [100, 'Title cannot exceed 100 characters']
    },
    content: {
        type: String,
        required: [true, 'Content is required'],
        maxlength: [1000, 'Content cannot exceed 1000 characters']
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tags: [String],
    likes: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Update updatedAt on save
postSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

// Authentication middleware
const authenticateToken = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        
        if (!token) {
            return res.status(401).json({ error: 'Access token required' });
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret');
        const user = await User.findById(decoded.userId).select('-password');
        
        if (!user) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

// Routes
// Register user
app.post('/api/register', async (req, res) => {
    try {
        const { username, email, password, profile } = req.body;
        
        const user = new User({
            username,
            email,
            password,
            profile
        });
        
        await user.save();
        
        const token = user.generateAuthToken();
        
        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                profile: user.profile
            },
            token
        });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ error: 'Username or email already exists' });
        } else if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(err => err.message);
            res.status(400).json({ error: errors.join(', ') });
        } else {
            res.status(500).json({ error: 'Server error' });
        }
    }
});

// Login user
app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        const token = user.generateAuthToken();
        
        res.json({
            message: 'Login successful',
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                profile: user.profile
            },
            token
        });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Get user profile
app.get('/api/profile', authenticateToken, async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
            .populate('posts', 'title content createdAt')
            .select('-password');
        
        res.json({ user });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Create post
app.post('/api/posts', authenticateToken, async (req, res) => {
    try {
        const { title, content, tags } = req.body;
        
        const post = new Post({
            title,
            content,
            author: req.user._id,
            tags: tags || []
        });
        
        await post.save();
        
        // Add post to user's posts array
        await User.findByIdAndUpdate(req.user._id, {
            $push: { posts: post._id }
        });
        
        await post.populate('author', 'username profile.firstName profile.lastName');
        
        res.status(201).json({
            message: 'Post created successfully',
            post
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(err => err.message);
            res.status(400).json({ error: errors.join(', ') });
        } else {
            res.status(500).json({ error: 'Server error' });
        }
    }
});

// Get all posts
app.get('/api/posts', async (req, res) => {
    try {
        const { page = 1, limit = 10, tag } = req.query;
        
        let query = {};
        if (tag) {
            query.tags = { $in: [tag] };
        }
        
        const posts = await Post.find(query)
            .populate('author', 'username profile.firstName profile.lastName')
            .sort({ createdAt: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit);
        
        const total = await Post.countDocuments(query);
        
        res.json({
            posts,
            pagination: {
                currentPage: parseInt(page),
                totalPages: Math.ceil(total / limit),
                totalPosts: total
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
});`,
            explanation: "Complete MongoDB integration with Mongoose showing user authentication, data relationships, validation, and CRUD operations."
          }
        ]
      }
    ],
    features: [
      "48 comprehensive lessons",
      "12 hands-on Node.js projects",
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
                                    <span className="text-gray-300 text-sm font-mono">Node.js Code</span>
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

export default NodeJS;