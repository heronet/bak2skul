const express = require('express');
const cors = require('cors')
const colors = require('colors');
// Import environment variables
require('dotenv').config({path: './.config/.env'})

const connectDB = require('./.config/db');
const studentsRouter = require('./routes/student');
const utilsRouter = require('./routes/utils');
const usersRouter = require('./routes/user');

// Connect to the Database
connectDB();

// Initialize Express.js
const app = express();

//Body Parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Middleware to handle Students routes
app.use('/api/students', studentsRouter);
app.use('/api/users', usersRouter)
app.use('/api/utils', utilsRouter);

// Fallback route
app.use('/', (req, res) => res.send("Welcome to the API"));
// The port we will listen to. {5000} is the fallback default
const PORT = process.env.PORT || 5000;

// Start our server
const server = app.listen(PORT, console.log(`Listening in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold));

// Exit on unhandled Promise Rejection
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error ${err.message}`.red)
    server.close(() => process.exit(1));
})