
/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
export function myMap<T, U>(arr: T[], mapper: (element: T) => U): U[] {
    return arr.map(mapper);
  }
    
    /**
     * 
     * @param {*} arr 
     * @param {*} func 
     * @returns 
     */
    export function myFilter<T>(arr: T[], predicate: (element: T) => boolean): T[] {
        return arr.filter(predicate);
      }
    
    /**
     * 
     * @param {*} arr 
     * @param {*} func 
     * @param {*} initialValue 
     * @returns 
     */
    export function myReduce<T, U>(arr: T[], reducer: (accumulator: U, element: T) => U, initialValue: U): U {
        return arr.reduce(reducer, initialValue);
      }

          
          