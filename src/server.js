// Import required modules
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDb = require('./config/DBConfig');

// Create an instance of Express
const app = express();

// dependencies
const authRoutes = require('./api/routes/auth.route');
const adminRoutes = require('./api/routes/admin.route');
const establishmentRoutes = require('./api/routes/establishment.route');
const logRoutes = require('./api/routes/log.route');
const touristRoutes = require('./api/routes/log.route');

// connect to database
connectToDb();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/establishment', establishmentRoutes);
app.use('/api/log', logRoutes);
app.use('/api/tourist', touristRoutes);

// start server
app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});
