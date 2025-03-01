const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  ticketPrice: { type: Number, required: true },
  image: { type: String },
  status: { type: String, default: 'pending' }, 
});

module.exports = mongoose.model('Event', eventSchema);
