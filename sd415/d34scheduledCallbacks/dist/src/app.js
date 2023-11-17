//You can write and run the timer code here via npm run app
// it("tests clone array", function () {
//     const oldArr = [1, 2, 3];
//     const newArr = copyArray(oldArr);
//     assert.deepEqual(newArr, oldArr);
//    // oldArr.push[4];
//     newArr.push(4);
//     assert.deepEqual(oldArr, [1, 2, 3]);
// });
import { player3, teamStats } from "../src/playerPoints.js"; //teamStats, findTotalScores, findTotalPlayerPoints, findTotalPointsByJersey
function copyArray(arr) {
    let copy = [...arr];
    return copy;
}
const oldArr = [1, 2, 3];
const newArr = copyArray(oldArr);
console.log(newArr);
function concat(arr, arr2) {
    return arr.concat(arr2);
}
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(concat(arr1, arr2));
function findMin(...arr) {
    let min = Infinity;
    for (const numbers of arr) {
        if (numbers < min) {
            min = numbers;
        }
    }
    return min;
}
const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6, 7, 8, 0];
console.log(findMin(...arr3));
console.log(findMin(...arr4));
function findProduct(...num1) {
    return num1.reduce((product, current) => product * current, 1);
}
const arr5 = [1, 2, 3];
const arr6 = [1, 2, 3, 4, 5];
console.log(findProduct(1, 2));
console.log(findProduct(...arr5));
console.log(findProduct(...arr6));
function findTotalPlayerPoints(player) {
    let sumPlayerPoints = 0;
    for (const stat of player.stats) {
        sumPlayerPoints += stat.points;
    }
    return sumPlayerPoints;
}
console.log(findTotalPlayerPoints(player3));
export function findTotalPointsByJersey(jerseyNumber) {
    let sumPlayerPoints = 0;
    for (const player of teamStats) {
        if (jerseyNumber === player.jersey) {
            for (const points of player.stats) {
                sumPlayerPoints += points.points;
            }
        }
    }
    return sumPlayerPoints;
}
console.log((findTotalPointsByJersey(6), 16));
//const jerseyPoints = [{jersey: 8, total: 13}, {jersey: 12, total: 30}, {jersey: 6, total: 16}];
//assert.deepEqual(findTotalScores(teamStats), jerseyPoints);
