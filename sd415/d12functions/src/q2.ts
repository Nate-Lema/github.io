/*defining the table 

input: 1,initial amount deposit
       2,annual interest rate
       3,number of years to Compound
output: compound saving balance with it's interest 
process(steps): 1,getting the input 
                2,changing the annual interest rate to monthly interest rate which is ((annualInterestRate/12)/100;)
                3,and getting Monthly Compound from the number of years to Compound (number of years to Compound * 12)
                4,now looping through Monthly Compound and adding interest to the account balance
*/

export function  compoundInterest(initialAmount:number,annualInterestRate:number,numYearsToCompound:number):number {
    let savingBalance = initialAmount;
    let monthlyInterestRate = (annualInterestRate/12)/100;
    let forMonthlyCompound = numYearsToCompound*12;

    for (let i = 0; i < forMonthlyCompound; i++) {
        savingBalance+=savingBalance*monthlyInterestRate;
    }

    return savingBalance;
}
// console.log("expect 110.47", compoundInterest(100, 10, 1).toFixed(2));
// console.log("expect 16470.09", compoundInterest(10000, 5, 10).toFixed(2));