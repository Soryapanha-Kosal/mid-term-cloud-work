const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  purpose: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Budget', budgetSchema);
