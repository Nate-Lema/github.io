export function gradeStudent(studentAnswers, correct) {
    let result = 0;
    for (let i = 0; i < studentAnswers.length; i++) {
        if (studentAnswers[i] === correct[i]) {
            result++;
        }
    }
    return result;
}
export function gradeQuiz(studentAnswers, correct) {
    let stuQuizResult = [];
    for (let i = 0; i < studentAnswers.length; i++) {
        let result = 0;
        for (let j = 0; j < studentAnswers[i].length; j++) {
            if (studentAnswers[i][j] === correct[j]) {
                result++;
            }
        }
        stuQuizResult.push(result);
    }
    return stuQuizResult;
}
export function gradeQuizLabeled(studentQuizzes, correctAnswer) {
    const gradedQuizzes = [];
    for (let i = 0; i < studentQuizzes.length; i++) {
        let answer = 0;
        for (let j = 0; j < studentQuizzes[i].quizAnswers.length; j++) {
            if (studentQuizzes[i].quizAnswers[j] === correctAnswer[j]) {
                answer++;
            }
        }
        gradedQuizzes.push({ id: studentQuizzes[i].studentId, score: answer });
    }
    return gradedQuizzes;
}
// [
//     { id: 101, score: 3 },
//     { id: 102, score: 2 },
//     { id: 103, score: 3 }]
