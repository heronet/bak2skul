const Student = require("../models/Student")

// @desc Get all students
// @route GET /api/students
// @access Public
exports.getStudents = async (req, res, next) => {
    const students = await Student.find();
    if(!students) {
        return res.status(400).json({success: false});
    }
    res.status(200).json({success: true, count: students.length, data: students});
}

// @desc Get all students with a specific name
// @route GET /api/students/name/:name
// @access Public
exports.getStudentsByName = async (req, res, next) => {
    try {
        const students = await Student.find({name: req.params.name});
        if(!students || (students.length < 1)) {
            return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, count: students.length, data: students});
    } catch (error) {
        res.status(400).json({success: false});
    }
}

// @desc Get specific student with id
// @route GET /api/students/:id
// @access Public
exports.getStudent = async (req, res, next) => {
    try {
        const student = await Student.findById(req.params.id);
        if(!student) {
            return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, data: student});
    } catch (error) {
        res.status(400).json({success: false});
    }
}

// @desc Get specific student with studentId
// @route GET /api/students/sid/:studentId
// @access Public
exports.getStudentBySid = async (req, res, next) => {
    try {
        const student = await Student.findOne({studentId: req.params.studentId});
        if(!student) {
            return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, data: student});
    } catch (error) {
        res.status(400).json({success: false});
    }
}

// @desc Add new student
// @route POST /api/students/
// @access Private
exports.addStudent = async (req, res, next) => {
    try {
        const student = await Student.create(req.body);
        if(!student) {
            return res.status(400).json({success: false});
        }
        res.status(201).json({success: true, data: student});
    } catch (error) {
        res.status(400).json({success: false});
    }
}

// @desc Update a student
// @route PUT /api/students/:id
// @access Private
exports.updateStudent = async (req, res, next) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if(!student) {
            return res.status(400).json({success: false});
        }
        res.status(201).json({success: true, data: student});
    } catch (error) {
        res.status(400).json({success: false});
    }
}

// @desc Delete a student
// @route DELETE /api/students/:id
// @access Private
exports.deleteStudent = async (req, res, next) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if(!student) {
            return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, data: {deleted: true, data: student}});
    } catch (error) {
        res.status(400).json({success: false});
    }
}