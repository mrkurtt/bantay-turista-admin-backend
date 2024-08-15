const express = require('express');
const router = express.Router();
const {
	getAllEstablishments,
	getEstablishment,
	updateEstablishment,
	createEstablishment,
	deleteEstablishment,
} = require('../controllers/establishment.controller');

router.get('/', getAllEstablishments);
router.get('/:id', getEstablishment);
router.post('/', createEstablishment);
router.put('/:id', updateEstablishment);
router.delete('/:id', deleteEstablishment);

module.exports = router;
