const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  page: {
    type: String,
    required: true,
    trim: true
  },
  referrer: {
    type: String,
    default: null
  },
  userAgent: {
    type: String,
    required: true
  },
  ip: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now,
    index: true
  },
  sessionId: {
    type: String,
    default: null
  },
  country: {
    type: String,
    default: null
  },
  city: {
    type: String,
    default: null
  }
});

// Index for efficient queries
analyticsSchema.index({ page: 1, timestamp: -1 });
analyticsSchema.index({ ip: 1 });

module.exports = mongoose.model('Analytics', analyticsSchema);
