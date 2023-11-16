// import { type } from "os";
export function firstLast(str) {
    return str.map((names) => {
        const [firstName, lastName] = names.split(" ");
        return { firstName, lastName };
    });
}
export function replaceEnds(arr, first1, first2, last1, last2) {
    const newArray = arr.slice();
    newArray.splice(0, 2, first1, first2);
    newArray.splice(newArray.length - 2, 2, last1, last2);
    return newArray;
}
export function square(num) {
    return num * num;
}
export function absVal(num) {
    if (num < 0) {
        return num * -1;
    }
    else {
        return num;
    }
}
export function higho(func, arrayNumber) {
    const result = arrayNumber.map((num) => func(num));
    return result;
}
export function calculateDailyTotalDuration(day) {
    let sum = 0;
    for (const session of day) {
        sum += session.duration;
    }
    return sum;
}
export function calculateTotalDuration(dailyRecord) {
    let sum = 0;
    for (const day of dailyRecord) {
        sum += calculateDailyTotalDuration(day.sessions);
    }
    return sum;
}
export function getAllSessions(dailyRecord) {
    return dailyRecord.reduce((allSession, day) => allSession.concat(day.sessions), []);
}
export function getAllSessionsForUser(dailyRecord, userId) {
    const allSessions = getAllSessions(dailyRecord);
    return allSessions.filter(session => session.userId === userId);
}
export function getAllDurations(dailyRecord) {
    const allSessions = getAllSessions(dailyRecord);
    return allSessions.map(session => session.duration);
}
