const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true
  },
  courseName: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  experience: {
    type: String,
    enum: ['complete-beginner', 'some-basics', 'intermediate', 'advanced'],
    required: true
  },
  motivation: {
    type: String,
    required: true
  },
  preferredSchedule: {
    type: String,
    enum: ['weekday-mornings', 'weekday-evenings', 'weekends', 'flexible'],
    required: true
  },
  agreeToTerms: {
    type: Boolean,
    required: true,
    default: false
  },
  enrolledAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'confirmed'
  },
  ipAddress: {
    type: String,
    default: null
  },
  userAgent: {
    type: String,
    default: null
  }
});

// Index for efficient queries
enrollmentSchema.index({ email: 1, courseId: 1 });
enrollmentSchema.index({ enrolledAt: -1 });
enrollmentSchema.index({ status: 1 });

module.exports = mongoose.model('Enrollment', enrollmentSchema);
