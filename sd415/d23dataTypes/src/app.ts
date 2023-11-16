
/**
 * 
 * @param {*} str 
 */
export function ucFirst(str:string):string {
    if(str==""){
        return ""
    }else{
        let firstLetterUpper = str[0].toUpperCase();
        let theRest = str.slice(1).toLowerCase();
        let fullLetter = firstLetterUpper + theRest;
        return fullLetter;
    }
    
}

/**
 * 
 * @param {*} str 
 */
export  function checkSpam(str:string):boolean {
        let lowerStr = str.toLowerCase();
        if(lowerStr.includes('viagra') || lowerStr.includes('xxx')){
            return true;
        }else{
            return false;
        }
      }

/**
* 
* @param {*} str 
* @param {*} maxlength 
*/
export   function truncate(str:string, maxlength:number):string {
    if(str.length >= maxlength){
        return str.slice(0,maxlength - 1) + "…"
    }else{
        return str;
    }
}



export function extractCurrencyValue(str:string):number{
        let storeNumber = '';
        for(let ele of str){
            if(isNaN(ele)){
                storeNumber = storeNumber;
            }else{
                storeNumber+=ele
            }
        }
        let newNumber = Number(storeNumber)
        return newNumber;
    }

/**
* 
* @param {Array} arr of numbers
* @returns {number} the total of the maximal subarray

*/

export function getMaxSubSum(arr:number[]):number {
    let maxSum  = 0;
    let currentSum = 0;
    for(let num of arr){
        currentSum = Math.max(num,currentSum+num);
        maxSum = Math.max(maxSum,currentSum);
    }
    return maxSum;
}


export function camelize(str:string):string {
        let calFirstLet = "";
        let spliting = str.split("-");
        for(let i = 0; i < spliting.length;i++){
            if(i == 0){
                calFirstLet+=spliting[i]
                continue;
            }
            let firstLetter = spliting[i][0].toUpperCase();
            let restLetter  = spliting[i].slice(1).toLowerCase();
            let vertjing = firstLetter + restLetter;
            calFirstLet+=vertjing;
        }
        return calFirstLet;
    }

