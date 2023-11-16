//write any code you want to test here and run with npm run app
// import {makeArmy } from './closures.js';
function inArray(arr) {
    return function (input) {
        return arr.includes(input);
    };
}
const arr = [1, 2, 3, 4, 5, 6, 7];
const filter1To7 = inArray(arr);
console.log(filter1To7(5), true);
console.log(filter1To7(0), false);
// const filter1To7 = inArray(arr);
const arr2 = [0, 5, 10, 6, 100];
console.log(arr2.filter(filter1To7), [5, 6]);
function inBetween(start, end) {
    return function (input) {
        return input >= start && input <= end;
    };
}
const filter3to6 = inBetween(3, 6);
console.log(filter3to6(5), true);
console.log(filter3to6(0), false);
const arr3 = [0, 4, 5, 10, 6, 100];
console.log(arr3.filter(filter3to6), [4, 5, 6]);
function makeArmy() {
    const army = [];
    for (let i = 0; i < 10; i++) {
        army[i] = (function (value) {
            return function () {
                return value;
            };
        })(i);
    }
    return army;
}
const army = makeArmy();
const shooter5 = army[5]();
console.log(shooter5, 5);
export {};
//   army[5](); // and number 5 also outputs 10...
