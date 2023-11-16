
/**
 *@returns {number} double the input
 */
 export function double(num: number): number {
    return num * 2; 
  }
  
  
  /**
   * @returns {number} 100 times the input
   */
  export function times100(num:number):number {
        return num * 100;
   }
  
  
  /**
   * @returns {Array} creates a new array with function mapped to each element
   */
  export function myMap(arr:number[],callBack:(num:number)=>number):number[]{
    let newArray:number[] = [];
    for(let ele of arr){
        let times:number = callBack(ele);
        newArray.push(times)
    }
    return newArray;
}




