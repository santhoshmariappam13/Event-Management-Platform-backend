const Event = require('../models/Event');
const User = require('../models/UserModel');

// Admin: Manage all events
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Admin: Approve event
const approveEvent = async (req, res) => {
  const { eventId } = req.params;
  try {
    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    event.status = 'approved';
    await event.save();
    res.status(200).json({ message: 'Event approved' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getAllUsers, approveEvent };
