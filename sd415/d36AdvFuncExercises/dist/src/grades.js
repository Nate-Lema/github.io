export const quiz = {
    students: [
        { sid: 10, answers: [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }] },
        { sid: 11, answers: [{ qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] },
        { sid: 12, answers: [{ qid: 3, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "d" }] }
    ],
    key: [
        { qid: 1, ans: "b" },
        { qid: 2, ans: "a" },
        { qid: 3, ans: "b" }
    ],
    answerComparator: function (ans1, ans2) {
        return ans1.qid - ans2.qid;
    },
    scoreStudent: function (sid) {
        const student = this.students.find(student => student.sid === sid);
        if (!student) {
            return 0; // Student not found
        }
        const sortedStudentAnswers = student.answers.slice().sort(this.answerComparator);
        const sortedKeyAnswers = this.key.slice().sort(this.answerComparator);
        let score = 0;
        for (let i = 0; i < sortedStudentAnswers.length; i++) {
            if (sortedStudentAnswers[i].ans === sortedKeyAnswers[i].ans) {
                score++;
            }
        }
        return score;
    },
    getAverage: function () {
        const totalStudents = this.students.length;
        if (totalStudents === 0) {
            return 0; // No students
        }
        let totalScore = 0;
        for (const student of this.students) {
            totalScore += this.scoreStudent(student.sid);
        }
        return totalScore / totalStudents;
    }
};
// export const quiz = {
// students:[{ sid: 10, answers: [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }] },
// { sid: 11, answers: [{ qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] },
// { sid: 12, answers: [{ qid: 3, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "d" }] }],
// key:[{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }]
// };
// /**
//  * 
//  * @param {Object} ans1 is an answer object
//  * @param {Object} ans2 is an answer object 
//  * @returns {number} difference of the identifiers
//  */
// function answerComparator(ans1, ans2) {
// //IMPLEMENT THIS
// }
// /**
//  * 
//  * @param {*} sid student id
//  * @returns {number} score for student
//  * find this student
//  * sort the student answers
//  * compare them against key and add up matches
//  */
// quiz.scoreStudent = function (sid) {
// //IMPLEMENT THIS
// };
// /**
//  * @returns {number} average score of all students
//  * go through list of students and get score of each, then the average
//  */
// quiz.getAverage = function(){
// //IMPLEMENT THIS
// };
