

const mongoose = require('mongoose');


const paymentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  
        required: true
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',  
        required: true
    },
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    paymentMethod: {
        type: String,
        required: true, 
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'succeeded', 'failed'],
        default: 'pending',
    },
    paymentIntentId: {
        type: String,
        required: true 
    },
    transactionId: {
        type: String,  
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the model from the schema
const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
