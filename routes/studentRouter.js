const express = require('express');
const studentController = require('../controller/studentController');
const studentRouter = express.Router();

studentRouter.route('/')
   .post(studentController.createStudent)
   .get(studentController.createRegexQuery, studentController.getAllStudents)

studentRouter.route('/:id')
    .get(studentController.getStudentById)
    .delete(studentController.deleteStudent)

module.exports = studentRouter;