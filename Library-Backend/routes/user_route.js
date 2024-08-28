// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const { getUserById } = require('../controller/user_controller');



// Route to fetch user by enrollment ID
router.get("/:id", getUserById);

module.exports = router;
