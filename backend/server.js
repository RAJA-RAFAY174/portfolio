const express = require('express');
const mongoose = require('mongoose');
const dns = require('dns');
const cors = require('cors');
require('dotenv').config();

// Force Google DNS to fix SRV lookup issues with ISP DNS
dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));
app.use(express.json());

// Connect to MongoDB
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/projects', require('./routes/projects'));
app.use('/api/contact', require('./routes/contact'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
