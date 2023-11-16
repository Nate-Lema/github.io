// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(function(name, index){return index + ": " + name.length; });
// //modify so that it logs array with index: item.length instead of just item.length
// console.log("expect [0: 5, 1: 7, 2: 6]", lengths); 


// //reduce the array to the product of the numbers (“expect 120”)
// //reduce the array to the max of the numbers (“expect 5”)

// let arr = [1, 2, 3, 4, 5];

// let sum = arr.reduce(function (sum, current) { return sum + current; }, 0);
// let mult = arr.reduce(function (product, current) { return product * current; }, 1);
// let max = arr.reduce(function (max, current) { if (current > max) {return current;} else {return max;} }, -Infinity);
// let max2 = arr.reduce(function (max, current) { return current > max ? current : max; }, 0);
// let maxarrow = arr.reduce( (max, current) => current > max ? current : max, 0);

// let prodLast = arr.reduce(last3, 1);

// function last3(product: number, current: number,index: number, arr: number[]): number {
//     /* only return new mult if index is one of last 3 */
//     if (index >= arr.length - 3){
//         return product * current;
//     } else {
//         return product;
//     }
// }

// console.log("expect 15: ", sum);
// console.log("expect 120: ", mult);
// console.log("expect 5: ", max);
// console.log("expect 5: ", max2);
// console.log("expect 5: ", maxarrow);

// console.log("expect 60: ", prodLast);
// type FullName = {
//     firstName:string;
//     lastName:string;

// }
// const nameZ = ["Fred Smith","Carl Lindstrom"];
// function firstLast(str:string[]):FullName[]{
//    return str.map((names)=>{
//     const [firstName,lastName] = names.split(" ");
//     return {firstName,lastName}
//    })
// }
// console.log(firstLast(nameZ))

// const session1 = { userld: 1, duration: 60 };
// const session2 = { userld: 2, duration: 45 };
// const session3 = { userld: 2, duration: 30 };
// const session4 = { userld: 3, duration: 15 };
// const session5 = { userld: 3, duration: 75 };
// const day1 = { sessions: [session1, session2], date: "01/10/2022" };
// const day2 = { sessions: [session3, session4, session5], date: "01/11/2022" };
// const dailyRecord = [day1, day2];
// type Session = {
//     userId: number;
//     duration: number
// }
// type Day = {
//     sessions: Session[];
//     date: string
// }
// //Utilize a for. of loop in a function, calculateDailyTotalDuration, to find the total workout duration for a given day.
// //console.log("Expect 120:", calculateDailyTotalDuration(day2.sessions)
// function calculateDailyTotalDuration(day: Session[]): number {
//     let sum = 0;
//     for (const session of day) {
//         sum += session.duration;
//     }
//     return sum;
// }
// console.log(calculateDailyTotalDuration(day2.sessions))
// //Develop a function, calculateTotalDuration, using a for.of loop, to find the total workout duration across all days in the dailyRecord array. Utilize the previously defined calculateDailyTotalDuration function.
// //console.log("Expect 225:", calculateTotalDuration(dailyRecord);
// function calculateTotalDuration(dailyRecord: Day[]): number {
//     let sum = 0;
//     for (const day of dailyRecord) {
//         sum += calculateDailyTotalDuration(day.sessions)
//     }
//     return sum
// }
// console.log(calculateTotalDuration(dailyRecord))
// //Write a function getAllSessions that will use the concat method to return an array with all the sessions in the dailyRecord.
// //console.log("Expect [session1, session2, ..., session5]: ", getAllSessions(dailyRecord))

// function getAllSessions(dailyRecord: Day[]): Session[] {
//     return dailyRecord.reduce((allSession, day) => allSession.concat(day.sessions), [] as Session[]);
// }
// console.log(getAllSessions(dailyRecord))

// function square(num:number):number{
//     return num * num;
//  } 
//  function absVal(num:number):number{
//     if(num<0){
//         return num * -1;
//     }else{
//         return num
//     }
//  }

// function higho(func:(num:number)=>number,arrayNumber:number[]):number[]{
//     const result = arrayNumber.map((num)=>func(num));
//     return result;
//  }
//  const numArr1 = [1, -2, 3];
//  console.log(higho(square,numArr1))
//  console.log(higho(absVal,numArr1))

// //  function replaceEnds(arr:number[],first:number,first2:number,last:number,last2:number):number[]{
// //     const removingFirstAndLast = arr.slice(2,arr.length-2);
// //     const addingFirst = removingFirstAndLast.splice(0,0,first,first2);
// //     const addingLast = addingFirst.splice(addingFirst.length,0,last,last2);
// //     return addingLast;
// //  }

//    const arr0 = [5, 4, 3, 2, 1, 0];
// // //    const result = [6, 1, 3, 2, 2, 4]
// //    console.log(replaceEnds(arr0,6,1,2,4))
// function replaceEnds(arr:number[],first1:number,first2:number,last1:number,last2:number):number[]{
//     const newArray = arr.slice();
//     newArray.splice(0,2,first1,first2);
//     newArray.splice(newArray.length,2,last1,last2);
//     return newArray;
//  }
// console.log(replaceEnds(arr0,6,1,2,4))


