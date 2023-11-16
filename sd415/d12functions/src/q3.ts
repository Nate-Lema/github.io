/*defining the table 

input: 1,cost House
output:  down payment 
process(steps): 1,getting the input 
                2,using if statement if cost House below 50k down payment will be 5% of the cost
                if cost House between 50k and 100k down payment will be 10% of the (cost-50k) plus $2500
                if cost House between 100k and 200k down payment will be 15% of the (cost-100k )plus $7500
                if cost House above 200k down payment will be 10% of the(cost-200k) plus $20000
*/
export function calcDownpayment(costHouse:number):number{
    let downPayment = 0;
    if(costHouse<50000){
        downPayment+=(costHouse*0.05);
    }else if(costHouse>=50000 && costHouse<100000){
        downPayment+=2500+(costHouse-50000)*0.1;
    }else if(costHouse>=100000 && costHouse<200000){
        downPayment+=7500+(costHouse-100000)*0.15;
    }else{
        downPayment+=20000+(costHouse-200000)*0.1;
    }
    return downPayment;

}
