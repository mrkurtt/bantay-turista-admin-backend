const express = require('express');
const router = express.Router();
const { signUp, login } = require('../controllers/auth.controller');

router.get('/', async (req, res) => {
	res.json({
		msg: 'Auth route test',
	});
});

router.post('/signup', signUp);
router.post('/login', login);

module.exports = router;
