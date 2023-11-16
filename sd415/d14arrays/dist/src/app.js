console.log("in app.ts", "sum of [1,2,3] is: ", sum([1, 2, 3]));
/**
 *
 * @param {number} a is a number
 * @param {number} b is a number
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
export function maxOfThree(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    }
    else if (b >= a && b >= c) {
        return b;
    }
    else {
        return c;
    }
}
/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function sum(arr) {
    let sum = 0;
    for (let ele of arr) {
        sum += ele;
    }
    return sum;
}
/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function multiply(arr) {
    let mul = 1;
    for (let ele of arr) {
        mul *= ele;
    }
    return mul;
}
/**
 * takes an array of words and returns the length of the longest one
 * @param {*} arr of words
 * @returns {number} length of longest word
 */
export function findLongestWord(arr) {
    let longestLength = 0;
    for (let ele of arr) {
        const currentLength = ele.length;
        if (currentLength > longestLength) {
            longestLength = currentLength;
        }
    }
    return longestLength;
}
// /*export function reverseArray(arr: string[]): string[] {
//     // Create a copy of the input array using slice() method
//     let copyArray = arr.slice();
//     // Reverse the copy of the array
//     let reversedString = copyArray.reverse();
//     return reversedString;
// }
export function reverseArray(arr) {
    let reversedString = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedString.push(arr[i]);
    }
    return reversedString;
}
export function reverseArrayInPlace(arr) {
    let reversedNumber = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedNumber.push(arr[i]);
    }
    return reversedNumber;
}
export function scoreExams(studentAnswers, correctAnswers) {
    const scores = [];
    for (const student of studentAnswers) {
        let score = 0;
        for (let i = 0; i < student.length; i++) {
            if (student[i] === correctAnswers[i]) {
                score++;
            }
        }
        scores.push(score);
    }
    return scores;
}
export function generateArray(rows, cols) {
    const result = [];
    let count = 1;
    for (let i = 0; i < rows; i++) {
        result.push([]);
        for (let j = 0; j < cols; j++) {
            result[i].push(count);
            count++;
        }
    }
    return result;
}
//////#Question 1
// //Write a function, double, that takes a number and returns 2 times the number.
// export function double(num:number):number{
//     return 2 * num;
// }
// //#Question 2
// //Write a function times100 that takes a number and returns 100 times the number
// export function times100(num:number):number{
//     return 100 * num;
// }
// //#Question 3
// //Write a function, myMap, that takes an array and a function and returns a new array that has
// // the function applied to each element of the input array. Use your myMap function with your
// // double and times100 functions.
// export function myMap(arr:number[],callBack:(num:number)=>number):number[]{
//     let newArray:number[] = [];
//     for(let ele of arr){
//         let times:number = callBack(ele);
//         newArray.push(times)
//     }
//     return newArray;
// }
