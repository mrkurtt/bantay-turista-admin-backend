const express = require('express');
const router = express.Router();
const touristController = require('../controllers/tourist.controller');

router.post('/create', touristController.createTourist);
router.get('/:id', touristController.getTourist);
router.put('/:id', touristController.updateTourist);
router.delete('/:id', touristController.deleteTourist);

module.exports = router;
