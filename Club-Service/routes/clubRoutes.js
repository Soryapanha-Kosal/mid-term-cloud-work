const express = require('express');
const router = express.Router();
const controller = require('../controllers/clubController');

router.post('/', controller.createClub);
router.post('/:clubId/join', controller.joinClub);
router.post('/:clubId/leave', controller.leaveClub);

module.exports = router;
