const Club = require("../models/Club");

// @desc GET Clubs
// @route GET /api/utils/clubs
// @access Public
exports.getClubs = async (req, res, next) => {
    const clubs = await Club.find();
    if(!clubs) {
        return res.status(400).json({success: false});
    }
    res.status(200).json({success: true, count: clubs.length, data: clubs});
}

// @desc GET Club
// @route GET /api/utils/club/id
// @access Public
exports.getClub = async (req, res, next) => {
    try {
        const club = await Club.findById(req.params.id);
        if(!club) {
            return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, data: club});
    } catch (error) {
        res.status(400).json({success: false});
    }
}

// @desc POST Clubs
// @route POST /api/utils/clubs
// @access Private
exports.createClub = async (req, res, next) => {
    try {
        const club = await Club.create(req.body);
        if(!club) {
            return res.status(400).json({success: false});
        }
        res.status(201).json({success: true, data: club});
    } catch (error) {
        res.status(400).json({success: false});
    }
}

// @desc DELETE Clubs
// @route Delete /api/utils/clubs/id
// @access Private
exports.deleteClub = async (req, res, next) => {
    try {
        const club = await Club.findByIdAndDelete(req.params.id);
        if(!club) {
            return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, data: club});
    } catch (error) {
        res.status(400).json({success: false});
    }
}
