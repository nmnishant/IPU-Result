const fs = require('fs');
const studentTemplate = fs.readFileSync(__dirname+'/../view/studentTemplate.html', 'utf-8');

exports.getStudentPage = function (req, res, next){
    if(!req.studentInfo[0]){
        res.status(400).send({
            status: "fail",
            message: "Student not found"
        })
    }
    let studentData = req.studentInfo[0];
    let template = studentTemplate;

    let TableTemplate = '';
    for(let i=0; i<studentData.subjectMarks.length; i++){
        let currSubjectMarks = studentData.subjectMarks[i];
        TableTemplate +=  `<tr>
            <td class="firstCol">${currSubjectMarks.subjectName}</td>
            <td>${currSubjectMarks.theory}</td>
            <td>${currSubjectMarks.practical}</td>
            <td>${currSubjectMarks.total}</td>
            <td>${currSubjectMarks.grade}</td>
        </tr>\n`;
    }

    template = template.replace('<div class="studentName">%{STUDENT_NAME}%</div>', `<div class="studentName">${studentData.name}</div>`);
    template = template.replace('<title>%{STUDENT_NAME}%</title>', `<title>${studentData.name} Result</title>`);
    template = template.replace('%{ROLL_NO}%', studentData.rollNo);
    template = template.replace('%{BRANCH_NAME}%', 'Bachelor of Technology ( Information Technology )');
    template = template.replace('%{COLLEGE_NAME}%', studentData.instituteName);
    template = template.replace('%{TOTAL_MARKS}%', `${studentData.obtainedMarks}/${studentData.totalMarks}`);
    template = template.replace('%{TOTAL_PERCENTAGE}%', studentData.percentage);
    template = template.replace('%{TABLE_BODY_ROWS}%', TableTemplate);
    
    res.status(200).send(template);
}