const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController'); 

console.log(paymentController); 

router.post('/create-payment-intent', paymentController.createPaymentIntent);
router.post('/webhook', express.raw({ type: 'application/json' }), paymentController.webhook);

module.exports = router;
