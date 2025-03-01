const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController'); // Importing the controller

// Debugging log to ensure the controller has been imported correctly
console.log(paymentController); // Check if functions are being imported

// Ensure the post routes are correctly defined
router.post('/create-payment-intent', paymentController.createPaymentIntent);
router.post('/webhook', express.raw({ type: 'application/json' }), paymentController.webhook);

module.exports = router;