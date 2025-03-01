const Event = require('../models/Event');


const createEvent = async (req, res) => {
  console.log(req.body)
  const { title, description, date, location, ticketPrice, image } = req.body;
  try {
    const newEvent = new Event({ title, description, date, location, ticketPrice, image });
    await newEvent.save();
    res.status(201).json({ message: 'Event created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createEvent, getAllEvents };
