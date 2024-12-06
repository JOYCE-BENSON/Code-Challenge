function calculateGrade(marks) {
    if (marks > 79) return 'A';
    if (marks >= 60) return 'B';
    if (marks >= 50) return 'C';
    if (marks >= 40) return 'D';
    return 'E';
}

module.exports = { calculateGrade };
