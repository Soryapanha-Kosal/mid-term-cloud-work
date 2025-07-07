const express = require('express');
const router = express.Router();
const controller = require('../controllers/budgetController');

router.post('/', controller.addBudget);
router.get('/', controller.getBudgets);
router.put('/:id', controller.updateBudget);

module.exports = router;
