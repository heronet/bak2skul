const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const UserSchema = mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true }
});

UserSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("User", UserSchema);