const Club = require('../models/Club');

// Create a new club
exports.createClub = async (req, res) => {
  try {
    const club = new Club(req.body);
    await club.save();
    res.status(201).json(club);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Join a club
exports.joinClub = async (req, res) => {
  try {
    const club = await Club.findById(req.params.clubId);
    if (!club) return res.status(404).json({ error: 'Club not found' });

    if (!club.members.includes(req.body.userId)) {
      club.members.push(req.body.userId);
      await club.save();
    }

    res.status(200).json(club);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Leave a club
exports.leaveClub = async (req, res) => {
  try {
    const club = await Club.findById(req.params.clubId);
    if (!club) return res.status(404).json({ error: 'Club not found' });

    club.members = club.members.filter(id => id !== req.body.userId);
    await club.save();

    res.status(200).json(club);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
