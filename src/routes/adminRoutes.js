const express = require('express');
const { getAllUsers, approveEvent } = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Get all users (Admin route)
router.get('/users', authMiddleware, getAllUsers);

// Approve event (Admin route)
router.post('/event/:eventId/approve', authMiddleware, approveEvent);

module.exports = router;
