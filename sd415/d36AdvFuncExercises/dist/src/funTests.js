/**
 *
 * @param {*} arr
 * @param {*} func
 * @returns
 */
export function myMap(arr, mapper) {
    return arr.map(mapper);
}
/**
 *
 * @param {*} arr
 * @param {*} func
 * @returns
 */
export function myFilter(arr, predicate) {
    return arr.filter(predicate);
}
/**
 *
 * @param {*} arr
 * @param {*} func
 * @param {*} initialValue
 * @returns
 */
export function myReduce(arr, reducer, initialValue) {
    return arr.reduce(reducer, initialValue);
}
