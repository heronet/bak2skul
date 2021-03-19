const mongoose = require('mongoose');

const ClubSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must Have a name"]
    },
    imageSrc: {
        type: String
    },
    leader: {
        type: String,
        required: true
    },
    leader_avatar: String,
    description: String
});

module.exports = mongoose.model("Club", ClubSchema);