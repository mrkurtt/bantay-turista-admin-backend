const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.get('/', async (req, res) => {
	res.json({
		msg: 'Auth route test',
	});
});

router.post('/signup', authController.signUp);
router.post('/login', authController.login);

module.exports = router;
