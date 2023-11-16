export function calcDistance(x1, y1, x2, y2) {
    let d = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    return d;
}
export function computeSalesCommission(salaried, salesAmount) {
    let commission = 0;
    if (salaried === true) {
        if (salesAmount >= 300 && salesAmount <= 500) {
            commission = salesAmount * 0.01;
        }
        else if (salesAmount > 500) {
            commission = 500 * 0.01 + (salesAmount - 500) * 0.02;
        }
    }
    else if (salesAmount >= 300 && salesAmount <= 500) {
        commission = salesAmount * 0.02;
    }
    else if (salesAmount > 500) {
        commission = 500 * 0.02 + (salesAmount - 500) * 0.03;
    }
    return commission;
}
export function convertFahrenheit(temFahrenheit) {
    let temCelsius = 5 / 9 * (temFahrenheit - 32);
    return temCelsius;
}
export function calcDownpayment(costHouse) {
    let downPayment = 0;
    if (costHouse < 50000) {
        downPayment += (costHouse * 0.05);
    }
    else if (costHouse >= 50000 && costHouse < 100000) {
        downPayment += 2500 + (costHouse - 50000) * 0.1;
    }
    else if (costHouse >= 100000 && costHouse < 200000) {
        downPayment += 7500 + (costHouse - 100000) * 0.15;
    }
    else {
        downPayment += 20000 + (costHouse - 200000) * 0.1;
    }
    return downPayment;
}
export function compoundInterest(initialAmount, annualInterestRate, numYearsToCompound) {
    let savingBalance = initialAmount;
    let monthlyInterestRate = (annualInterestRate / 12) / 100;
    let forMonthlyCompound = numYearsToCompound * 12;
    for (let i = 0; i < forMonthlyCompound; i++) {
        savingBalance += savingBalance * monthlyInterestRate;
    }
    return savingBalance;
}
export function multDigits(input) {
    let inputInteger = String(input);
    let multiple = 1;
    for (let ele of inputInteger) {
        multiple *= Number(ele);
    }
    return multiple;
}
export function sumDigits(input) {
    let inputInteger = String(input);
    let sum = 0;
    for (let ele of inputInteger) {
        sum += Number(ele);
    }
    return sum;
}
export function isVowel(vowel) {
    if (vowel === "a" || vowel === "e" || vowel === "o" || vowel === "u" || vowel === "i"
        || vowel === "A" || vowel === "E" || vowel === "O" || vowel === "U" || vowel === "I") {
        return true;
    }
    else {
        return false;
    }
}
