const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const signUp = async (req, res) => {
	const { username, password, role } = req.body;

	try {
		// check if the user is already exists
		const existingUser = await User.findOne({ username });
		if (existingUser) {
			return res.status(400).json({
				success: false,
				message: 'User already exists',
			});
		}

		const hashedPassword = await bcrypt.hashSync(password, 10);

		const newUser = new User({
			username,
			password: hashedPassword,
			role,
		});

		await newUser.save();

		res.status(201).json({
			success: true,
			message: 'User signed up successfully',
			userId: newUser._id,
			role: newUser.role,
		});
	} catch (error) {}
};

const login = async (req, res) => {
	const { username, password } = req.body;

	try {
		const user = await User.findOne({ username });
		if (!user) {
			return res.status(400).json({
				success: false,
				message: 'Invalid credentials',
			});
		}

		// compare password
		const isMatch = await bcrypt.compareSync(password, user.password);
		if (!isMatch) {
			return res.status(400).json({
				success: false,
				message: 'Invalid credentials',
			});
		}

		// sign and create JWT
		const token = jwt.sign(
			{ userId: user._id, username: user.username, role: user.role },
			process.env.JWT_SECRET,
			{
				expiresIn: '12h',
			}
		);

		res.status(200).json({
			success: true,
			message: 'User successfully logged in',
			token,
		});
	} catch (error) {
		res.status(500).json({ message: 'Server error', error });
	}
};

module.exports = {
	signUp,
	login,
};
