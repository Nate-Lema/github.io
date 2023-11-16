

type Answer = { qid: number, ans: string };
type Student = { sid: number, answers: Answer[] };
type Key = Answer[];

type Quiz = {
    students: Student[],
    key: Key, 
    answerComparator: (ans1: Answer, ans2: Answer) => number,
    scoreStudent: (sid: number) => number,
    getAverage: () => number
};
export const quiz = {} as Quiz;
quiz.students = [{ sid: 10, answers: [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }] },
{ sid: 11, answers: [{ qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] },
{ sid: 12, answers: [{ qid: 3, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "d" }] }];
quiz.key = [{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }];

/**
 * 
 * @param {Object} ans1 is an answer object
 * @param {Object} ans2 is an answer object 
 * @returns {number} difference of the identifiers
 */
quiz.answerComparator = (ans1:Answer,ans2:Answer):number=>{
    return ans1.qid - ans2.qid;
};

/**
 * 
 * @param {*} sid student id
 * @returns {number} score for student
 * find this student
 * sort the student answers
 * compare them against key and add up matches
 */
quiz.scoreStudent = function (sid:number):number {
    const student = quiz.students.find(s => s.sid === sid);
    if(student){
        const sortedAnswers = student.answers.slice().sort(quiz.answerComparator);
        const matchingAnswers = sortedAnswers.filter((ans,index)=>ans.ans === quiz.key[index].ans);
        return matchingAnswers.length
    }else{
        return 0;
    }
};

/**
 * @returns {number} average score of all students
 * go through list of students and get score of each, then the average
 */
quiz.getAverage = function (): number {
    const totalScore = quiz.students.reduce((sum, student) => sum + quiz.scoreStudent(student.sid), 0);
    const averageScore = totalScore / quiz.students.length || 0; // Avoid division by zero
    return averageScore;
};

