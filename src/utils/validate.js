// src/middleware/validate.js

const { body, validationResult } = require('express-validator');

// Middleware to validate incoming payment data
exports.validatePayment = [
    body('amount').isInt({ gt: 0 }).withMessage('Amount must be a positive integer'),
    body('paymentIntentId').isString().withMessage('Payment intent ID is required'),
];

// Middleware to check for validation errors
exports.checkValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
