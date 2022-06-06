const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name : {
        type: String,
        uppercase: true,
        trim: true,
        required: [true, 'Student must have a name']
    },
    rollNo : {
        type: String,
        unique: true,
        trim: true,
        required: [true, 'Student must have a roll no'],
        minlength : 11,
        maxlength : 11,
        validate : {
            validator: (val) => Number(val) || false,
            message: 'Roll no is invalid'
        }
    },
    instituteName : {
        type: String,
        trim: true,
        required: [true, 'Student must belong to a institute'],
        uppercase: true
    },
    subjectMarks : [
        {
            subjectName : {
                type: String,
                required: [true, 'Subject name is must']
            },
            theory : {
                type: Number,
                default: 0,
                min: 0,
                max: 40
            },
            practical : {
                type: Number,
                default: 0,
                min: 0,
                max: 75
            },
            total : {
                type: Number,
                default: 0,
                min: 0,
                max: 100
            },
            grade : {
                type: String,
                default: 'F',
                enum: ['F', 'P', 'C', 'B', 'B+', 'A', 'A+', 'O']
            }
        }
    ],
    totalMarks : Number,
    obtainedMarks : Number,
    percentage : String
});

const studentModel = mongoose.model('Student', studentSchema);
module.exports = studentModel;
