require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const app = express();
const connectDB = require('./src/config/db');
const paymentRoutes = require('./src/routes/paymentRoutes'); // Correct path to your routes

// Connect to the database
connectDB();

// Middleware
app.use(express.json()); // To handle JSON bodies

// Routes
app.use('/api', paymentRoutes); // Example: All payment routes are prefixed with /api

// Your other routes and middleware go here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});