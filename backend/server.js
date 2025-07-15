require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Only serve static files if frontend build exists (for full-stack deployment)
const frontendPath = path.join(__dirname, '../frontend/build');
if (process.env.NODE_ENV === 'production' && fs.existsSync(frontendPath)) {
  app.use(express.static(frontendPath));
  console.log('Serving static files from:', frontendPath);
} else {
  console.log('Running as API-only server');
}

// API Routes
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  
  try {
    // For demo purposes, just log the message
    console.log('Contact form submission:', { name, email, subject, message });
    
    // In a real app, you would send an email
    // const transporter = nodemailer.createTransport({...});
    // await transporter.sendMail({...});
    
    res.status(200).json({ success: true, message: 'Message received!' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Backend API is running!', status: 'healthy' });
});

// Serve React app for any other routes only if frontend exists
if (process.env.NODE_ENV === 'production' && fs.existsSync(frontendPath)) {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});