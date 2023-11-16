// import { type } from "os";

type FullName = {
    firstName:string;
    lastName:string
}
export function firstLast(str:string[]):FullName[]{
    return str.map((names)=>{
     const [firstName,lastName] = names.split(" ");
     return {firstName,lastName}
    })
 }
 export function replaceEnds(arr:number[],first1:number,first2:number,last1:number,last2:number):number[]{
    const newArray = arr.slice();
    newArray.splice(0,2,first1,first2);
    newArray.splice(newArray.length-2,2,last1,last2);
    return newArray;
 }
 export function square(num:number):number{
    return num * num;
 } 
 export function absVal(num:number):number{
    if(num<0){
        return num * -1;
    }else{
        return num
    }
 }

export function higho(func:(num:number)=>number,arrayNumber:number[]):number[]{
    const result = arrayNumber.map((num)=>func(num));
    return result;
 }
    // const session1 = { userId: 1, duration: 60 };
    // const session2 = { userId: 2, duration: 45 };
    // const session3 = { userId: 2, duration: 30 };
    // const session4 = { userId: 3, duration: 15 };
    // const session5 = { userId: 3, duration: 75 };
    // const day1 = { sessions: [session1, session2], date: "01/10/2022" };
    // const day2 = { sessions: [session3, session4, session5], date: "01/11/2022" };
    // const dailyRecord = [day1, day2];

 type Session = {
    userId:number;
    duration:number
 }
 type Day = {
    sessions:Session[];
    date:string
 }
 export function calculateDailyTotalDuration(day: Session[]): number {
    let sum = 0;
    for (const session of day) {
        sum += session.duration;
    }
    return sum;
}
export function calculateTotalDuration(dailyRecord: Day[]): number {
    let sum = 0;
    for (const day of dailyRecord) {
        sum += calculateDailyTotalDuration(day.sessions)
    }
    return sum
}
export function getAllSessions(dailyRecord: Day[]): Session[] {
    return dailyRecord.reduce((allSession, day) => allSession.concat(day.sessions), [] as Session[]);
}
export function getAllSessionsForUser(dailyRecord: Day[], userId: number): Session[] {
    const allSessions = getAllSessions(dailyRecord);
    return allSessions.filter(session => session.userId === userId);
  }
export function getAllDurations(dailyRecord: Day[]): number[] {
    const allSessions = getAllSessions(dailyRecord);
    return allSessions.map(session => session.duration);
  }
