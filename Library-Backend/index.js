// app.js
const express = require('express');
const app = express();

// Import the user routes
const userRoutes = require('./routes/user_route.js');

// Middleware to parse JSON bodies
app.use(express.json());

// Use the user routes
app.use('/api/user', userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
