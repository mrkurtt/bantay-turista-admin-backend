const express = require('express');
const router = express.Router();
const establishmentController = require('../controllers/establishment.controller');

router.get('/', establishmentController.getAllEstablishments);
router.get('/:id', establishmentController.getEstablishment);
router.post('/', establishmentController.createEstablishment);
router.put('/:id', establishmentController.updateEstablishment);
router.delete('/:id', establishmentController.deleteEstablishment);

module.exports = router;
