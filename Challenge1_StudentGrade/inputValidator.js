function validateMarks(marks) {
    if (isNaN(marks) || marks < 0 || marks > 100) {
        throw new Error("Invalid marks: Please enter a number between 0 and 100");
    }
    return true;
}

module.exports = { validateMarks };