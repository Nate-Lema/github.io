

import {computeSalesCommission} from "./q1.js"
console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));

console.log()

import {compoundInterest} from "./q2.js"

console.log("expect 110.47", compoundInterest(100, 10, 1).toFixed(2));
console.log("expect 16470.09", compoundInterest(10000, 5, 10).toFixed(2));

console.log()

import {calcDownpayment} from "./q3.js"

console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 25000: ", calcDownpayment(250000));

console.log()

import {sumDigits,multDigits} from "./q4.js"

console.log(sumDigits(1234),multDigits(1234))
console.log(sumDigits(102),multDigits(102))
console.log(sumDigits(8),multDigits(8))


console.log()

import {convertFahrenheit} from "./q5.js"

console.log("expect 0: ", convertFahrenheit (32));
console.log("expect -17.7778: ", convertFahrenheit (0).toFixed(4));
console.log("expect 100: ", convertFahrenheit (212));
console.log("expect 37.7778: ", convertFahrenheit (100).toFixed(4));

console.log()

import {calcDistance} from "./q6.js"

console.log("expect 7.07 : ", calcDistance (0, 0, 5, 5).toFixed(2));
