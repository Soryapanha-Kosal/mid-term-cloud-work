const express = require('express');
const router = express.Router();
const controller = require('../controllers/eventController');

router.post('/', controller.createEvent);
router.post('/:id/rsvp', controller.rsvpEvent);
router.get('/', controller.getAllEvents);

module.exports = router;
