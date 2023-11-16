export function compoundInterest(initialAmount, annualInterestRate, numYearsToCompound) {
    let savingBalance = initialAmount;
    let monthlyInterestRate = (annualInterestRate / 12) / 100;
    let forMonthlyCompound = numYearsToCompound * 12;
    for (let i = 0; i < forMonthlyCompound; i++) {
        savingBalance += savingBalance * monthlyInterestRate;
    }
    return savingBalance;
}
