export function sumDigits(input:number):number{
    let inputInteger = String(input);
    let sum = 0;
    for (let ele of inputInteger) {
        sum+=Number(ele);
    }
    return sum;
}
export function multDigits(input:number):number{
    let inputInteger = String(input);
    let multiple = 1;
    for (let ele of inputInteger) {
        multiple*=Number(ele)
    }
    return multiple;
}
// console.log(sumDigits(1234),multDigits(1234))
