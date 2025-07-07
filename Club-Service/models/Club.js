const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  members: [String], // store user IDs
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Club', clubSchema);
