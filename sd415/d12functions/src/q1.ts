/*defining the table 

input: 1,if the sales person is salaried ~ true or false
       2,also sales amount ~ how much the sales person make
output: the sales person commission 
process(steps): 1,getting the input 
                2, giving a nested condition if the sales person 
                is salaried or not, if the person is salaried
                then again checking how much he makes and if then
                sales person make below $300 then no commission.
                if else sales person make between $300 and 500 then 2% commission.
                if else sales person above 500 then 2% commission  plus the 1% 
                commission on the first 500.  
                
                if the person is not salaried
                then again checking how much he makes and if then
                sales person make below $300 then no commission.
                if else sales person make between $300 and 500 then 2% commission.
                if else sales person above 500 then 3% commission  plus the 2% 
                commission on the first 500.
*/
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
