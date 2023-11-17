/*
a)	Copy an array
b)	Concatenate arrays into a new array
c)	Concatenate an array and a new array element
d)	Use an array as arguments
e)	Use Math.min and Math.max
f)	Use rest operator in function calls
You will need to use generic typing for copyArray and concat.   copyArray generic typing is given below.
Do the same pattern for concat.
*/
export function copyArray(arr) {
    let copy = [...arr];
    return copy;
}
export function concat(arr, arr2) {
    return arr.concat(arr2);
}
export function findMin(...arr) {
    let min = Infinity;
    for (const numbers of arr) {
        if (numbers < min) {
            min = numbers;
        }
    }
    return min;
}
export function findProduct(...num1) {
    return num1.reduce((product, current) => product * current, 1);
}
