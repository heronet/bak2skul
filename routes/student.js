const express = require('express');

const { 
    getStudents,
    getStudent,
    getStudentBySid,
    getStudentsByName,
    addStudent,
    updateStudent,
    deleteStudent
} = require('../controllers/studentsController');

const router = express.Router();

router.route('/')
    .get(getStudents)
    .post(addStudent)
router.route('/:id')
    .get(getStudent)
    .put(updateStudent)
    .delete(deleteStudent)
router.route('/sid/:studentId')
    .get(getStudentBySid)
router.route('/name/:name')
    .get(getStudentsByName)


module.exports = router;