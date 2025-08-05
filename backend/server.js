require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const compression = require('compression');
const winston = require('winston');

const app = express();
const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';

// Logger Setup
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'backend.log' })
  ]
});

// MongoDB connection with better error handling
if (!process.env.MONGO_URI) {
  logger.warn('MONGO_URI not found in environment variables, using default: mongodb://localhost:27017/portfolio');
}

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  logger.info('MongoDB connected successfully');
  console.log('✅ Database connected:', mongoURI);
})
.catch(err => {
  logger.error('MongoDB connection error:', err);
  console.error('❌ Database connection failed:', err.message);
  console.error('Please check your MONGO_URI in the .env file');
  // Don't exit the server, just log the error
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(compression());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Import routes
const contactRoutes = require('./routes/contact');
const projectRoutes = require('./routes/projects');
const adminRoutes = require('./routes/admin');
const analyticsRoutes = require('./routes/analytics');
const coursesRoutes = require('./routes/courses');

// Swagger setup
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Portfolio API',
      version: '2.0.0',
      description: 'Enhanced Portfolio Backend API with MongoDB integration'
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: 'Development server'
      }
    ]
  },
  apis: ['./routes/*.js']
};

const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Enhanced Portfolio Backend API is running!', 
    status: 'healthy',
    version: '2.0.0',
    documentation: '/api-docs'
  });
});

// API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/courses', coursesRoutes);

// Global error handler
app.use((err, req, res, next) => {
  logger.error('Unhandled error:', err);
  res.status(500).json({ 
    success: false, 
    message: 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { error: err.message })
  });
});

// Handle 404
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
  logger.info(`Enhanced server running on port ${PORT}`);
  console.log(`Server running on port ${PORT}`);
  console.log(`API Documentation: http://localhost:${PORT}/api-docs`);
});
