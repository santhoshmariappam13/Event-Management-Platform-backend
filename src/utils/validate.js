const { body, validationResult } = require('express-validator');


exports.validatePayment = [
    body('amount').isInt({ gt: 0 }).withMessage('Amount must be a positive integer'),
    body('paymentIntentId').isString().withMessage('Payment intent ID is required'),
];


exports.checkValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
