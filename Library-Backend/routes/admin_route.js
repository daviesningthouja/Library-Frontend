// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const mysql = require('mysql2');


// Create a connection to the MySQL database
const pool= mysql.createConnection({
    host: 'localhost',      // Change to your MySQL server's host if necessary
    user: 'root',           // Your MySQL username
    password: 'kevin',  // Your MySQL password
    database: 'biodata'   // The name of the database you want to connect to
  });

// Route to fetch user by enrollment ID
router.get("/:id", (req, res) => {
  const enrollmentId = req.params.id;
    console.log(enrollmentId);
  // MySQL query to search for a user by enrollment ID
  const query = `SELECT * FROM user_data WHERE enrolment_no = ?`;
  
  pool.query(query, [enrollmentId], (err, results) => {
    if (err) {
      console.error('Error fetching user:', err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return the user data
    return res.json(results[0]);
  });
});

module.exports = router;
