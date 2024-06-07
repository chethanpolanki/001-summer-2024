(function() {
    function calculateGrade(mark) {
        let grade;
        if (mark >= 90) {
            grade = 'A';
        } else if (mark >= 80) {
            grade = 'B';
        } else if (mark >= 70) {
            grade = 'C';
        } else if (mark >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }
        return grade;
    }

    const mark = 85;
    console.log(`The grade for mark ${mark} is ${calculateGrade(mark)}`);
})();
