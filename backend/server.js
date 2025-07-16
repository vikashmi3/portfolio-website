require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

console.log('Running as API-only server');

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Backend API is running!', status: 'healthy' });
});

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});