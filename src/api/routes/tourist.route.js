const express = require('express');
const router = express.Router();
const touristController = require('../controllers/tourist.controller');

router.get('/', touristController.getAllTourists);
router.get('/:id', touristController.getTourist);
router.post('/', touristController.createTourist);
router.put('/:id', touristController.updateTourist);
router.delete('/:id', touristController.deleteTourist);

module.exports = router;
