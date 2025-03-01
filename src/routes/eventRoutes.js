const express = require('express');
const { createEvent, getAllEvents } = require('../controllers/eventController');

const router = express.Router();

// Route for event creation
router.post('/create', createEvent);

// Route to get all events
router.get('/', getAllEvents);

module.exports = router;
