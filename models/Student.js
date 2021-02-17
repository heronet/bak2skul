const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "One must have a name!"]
    },
    class: {
        type: Number,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    studentId: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Student', StudentSchema);