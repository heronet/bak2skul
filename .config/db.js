const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    // Bring your own NoSQL Database
    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });
    console.log(`MongoDB Connected: ${db.connection.host}`.cyan.bold);
}
module.exports = connectDB;