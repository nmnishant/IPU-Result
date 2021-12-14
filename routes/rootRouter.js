const express = require('express');
const rootController = require('../controller/rootController');
const studentController = require('../controller/studentController');
const templateController = require('../controller/templateController')

const rootRouter = express.Router();

rootRouter.get('/', rootController.getHomePage);
rootRouter.get('/student', rootController.getStudent, templateController.getStudentPage);

module.exports = rootRouter;