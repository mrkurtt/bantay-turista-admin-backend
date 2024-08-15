const express = require('express');
const router = express.Router();
const {
	createSpot,
	getSpot,
	getAllSpots,
	updateSpot,
	deleteSpot,
} = require('../controllers/spot.controller');

router.get('/', getAllSpots);
router.get('/:id', getSpot);
router.post('/', createSpot);
router.put('/:id', updateSpot);
router.delete('/:id', deleteSpot);

module.exports = router;
