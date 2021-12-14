const Student = require('../models/studentModel')
const path = require('path');

exports.getHomePage = function (req, res) {
    res.status(200).sendFile(path.resolve(__dirname+'/../view/index.html'));
}

exports.getStudent = async function (req, res, next) {
    try{
        const doc = await Student.find(req.query);
        req.studentInfo = doc;
        next();
    }
    catch(err){
        res.status(400).send({
            status: "fail",
            msg: err
        })
    }
}