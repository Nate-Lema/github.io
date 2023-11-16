export function sumDigits(input) {
    let inputInteger = String(input);
    let sum = 0;
    for (let ele of inputInteger) {
        sum += Number(ele);
    }
    return sum;
}
