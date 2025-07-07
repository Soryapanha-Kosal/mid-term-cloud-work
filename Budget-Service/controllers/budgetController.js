// controllers/budgetController.js
const Budget = require('../models/Budget');

exports.addBudget = async (req, res) => {
  try {
    const newBudget = new Budget(req.body);
    await newBudget.save();
    res.status(201).json(newBudget);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find();
    res.json(budgets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBudget = async (req, res) => {
  try {
    const updatedBudget = await Budget.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedBudget) return res.status(404).json({ error: 'Not found' });
    res.json(updatedBudget);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
