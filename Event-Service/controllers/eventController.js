const Event = require('../models/Event');

// Create Event
exports.createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// RSVP to Event
exports.rsvpEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ error: 'Event not found' });

    if (!event.attendees.includes(req.body.userId)) {
      event.attendees.push(req.body.userId);
      await event.save();
    }

    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// View All Events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
