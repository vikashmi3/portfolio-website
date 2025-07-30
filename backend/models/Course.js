const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: true
  },
  category: {
    type: String,
    enum: ['programming', 'web', 'database', 'data-science', 'framework'],
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  reviews: {
    type: Number,
    default: 0
  },
  popular: {
    type: Boolean,
    default: false
  },
  price: {
    type: Number,
    default: 0
  },
  instructor: {
    type: String,
    default: 'Vikash R Mishra'
  },
  image: {
    type: String,
    default: null
  },
  syllabus: [{
    title: String,
    description: String,
    duration: String
  }],
  prerequisites: [String],
  learningOutcomes: [String],
  tags: [String],
  videoUrl: {
    type: String,
    default: null
  },
  demoUrl: {
    type: String,
    default: null
  },
  enrollmentCount: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Index for efficient queries
courseSchema.index({ category: 1, level: 1 });
courseSchema.index({ popular: -1, rating: -1 });
courseSchema.index({ name: 'text', description: 'text', tags: 'text' });

// Update the updatedAt field before saving
courseSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Course', courseSchema);
