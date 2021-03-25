const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res, next) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: hash,
            role: req.body.role
        });
        const createdUser = await user.save();
        res.status(201).json({createdUser});
    } catch (error) {
        console.log(error);
    }
}

exports.getUsers = async (req, res, next) => {
    const users = await User.find();
    res.status(200).json({users});
}

exports.loginUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if(user) {
            const isAuthenticated = await bcrypt.compare(req.body.password, user.password);
            if(isAuthenticated) {
                const token = jwt.sign({email: req.body.email, userId: user._id }, "secret");
                return res.status(200).json({token, userId: user._id});
            }
        }
        res.status(401).json({msg: "Auth failed"});
    } catch (error) {
        console.log(error);
    }
}