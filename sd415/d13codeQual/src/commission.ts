export function computeSalesCommission(salaried:boolean,salesAmount:number):number{
    let commission = 0;
    if(salaried === true){
        if (salesAmount >= 300 && salesAmount <= 500) {
            commission = salesAmount * 0.01;
        } else if (salesAmount > 500) {
            commission = 500 * 0.01 + (salesAmount - 500 )* 0.02
        }
    }else if (salesAmount >= 300 && salesAmount <= 500) {
            commission = salesAmount * 0.02;
        } else if (salesAmount > 500) {
            commission = 500 * 0.02 + (salesAmount - 500 )* 0.03
        }

    return commission;
}