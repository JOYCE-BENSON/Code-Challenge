const { validateMarks } = require('./inputValidator');
const { calculateGrade } = require('./gradeCalculator');
const { formatGradeOutput } = require('./gradeOutput');
const readline = require('readline');

// Create interface for reading user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function processStudentGrade(marks) {
    try {
        validateMarks(marks);
        const grade = calculateGrade(marks);
        return formatGradeOutput(marks, grade);
    } catch (error) {
        return error.message;
    }
}

// Get user input and process it
console.log("Student Grade Generator");
console.log("----------------------");
rl.question('Enter student marks (0-100): ', (marks) => {
    const result = processStudentGrade(Number(marks));
    console.log(result);
    rl.close();
});