const express = require('express');
const router = express.Router();
const {
	getAllTourists,
	getTourist,
	createTourist,
	updateTourist,
	deleteTourist,
} = require('../controllers/tourist.controller');

router.get('/', getAllTourists);
router.get('/:id', getTourist);
router.post('/', createTourist);
router.put('/:id', updateTourist);
router.delete('/:id', deleteTourist);

module.exports = router;
