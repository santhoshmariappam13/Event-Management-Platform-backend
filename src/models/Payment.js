// src/models/PaymentModel.js

const mongoose = require('mongoose');

// Define the schema for storing payment information
const paymentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // Reference to the User model
        required: true
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',  // Reference to the Event model
        required: true
    },
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    paymentMethod: {
        type: String,
        required: true,  // e.g., "card", "paypal", etc.
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'succeeded', 'failed'],
        default: 'pending',
    },
    paymentIntentId: {
        type: String,
        required: true  // Store Stripe Payment Intent ID here
    },
    transactionId: {
        type: String,  // Optional: transaction ID from the payment gateway
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the model from the schema
const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
