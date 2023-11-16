export function sumDigits(input:number):number{
    let inputInteger = String(input);
    let sum = 0;
    for (let ele of inputInteger) {
        sum+=Number(ele);
    }
    return sum;
}