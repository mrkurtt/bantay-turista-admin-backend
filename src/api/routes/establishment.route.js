const express = require('express');
const router = express.Router();
const establishmentController = require('../controllers/establishment.controller');

router.post('/create', establishmentController.createEstablishment);
router.get('/:id', establishmentController.getEstablishment);
router.put('/:id', establishmentController.updateEstablishment);
router.delete('/:id', establishmentController.deleteEstablishment);

module.exports = router;
