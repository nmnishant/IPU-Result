const Student = require('../models/studentModel');

exports.createStudent = async function(req, res){
    try{
        const doc = await Student.create(req.body);
        res.status(200).send({
            status: "success",
            data : doc
        })
    }
    catch(err){
        res.status(400).send({
            status: "fail",
            msg: err
        })
    }
}

exports.createRegexQuery = function (req, res, next){
    const excludedFields = ['obtainedMarks', 'totalMarks'];
    for([key, val] of Object.entries(req.query)){
        if(excludedFields.includes(key)) continue;
        const regex = new RegExp(req.query[key], 'i');
        req.query[key] = {
            $regex: regex
        }
    }
    next();
}

exports.getAllStudents = async function(req, res){
    try{
        const doc = await Student.find(req.query);
        res.status(200).send({
            status: "success",
            results: doc.length,
            data : doc
        })
    }
    catch(err){
        res.status(400).send({
            status: "fail",
            msg: err
        })
    }
}

exports.deleteStudent = async function(req, res){
    try{
        console.log(req.params.id);
        await Student.findByIdAndDelete({_id : req.params.id});
        res.status(204).json({
            status: "success",
            data: null
        });
    }
    catch(err){
        res.status(400).send({
            status: "fail",
            msg: err
        })
    }
}

exports.getStudentById = async function(req, res){
    try{
        const doc = await Student.findById(req.params.id);
        res.status(200).send({
            status: "success",
            data : doc
        });
    }
    catch(err){
        res.status(400).send({
            status: "fail",
            msg: err
        })
    }
}