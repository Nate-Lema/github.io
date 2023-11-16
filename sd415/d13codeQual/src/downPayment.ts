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