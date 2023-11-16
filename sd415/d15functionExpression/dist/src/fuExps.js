/**
 *@returns {number} double the input
 */
export function double(num) {
    return num * 2;
}
/**
 * @returns {number} 100 times the input
 */
export function times100(num) {
    return num * 100;
}
/**
 * @returns {Array} creates a new array with function mapped to each element
 */
export function myMap(arr, callBack) {
    let newArray = [];
    for (let ele of arr) {
        let times = callBack(ele);
        newArray.push(times);
    }
    return newArray;
}
