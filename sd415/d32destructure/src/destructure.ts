/* 
Create the function topSalary(salaries) that returns the name of the top-paid person.
    If salaries is empty, it should return null.
    If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/
type Salary = {
    [key:string]:number;
}
export function topSalary(salaries:Salary):string | null{
    let maxSalary = -Infinity;
    let topPaidPerson:string | null = null;
    let empl:Salary = {}; 
    
    if(salaries === empl){
        return "none"
      }
    for(const [person,salary] of Object.entries(salaries)){
        if(salary > maxSalary){
            maxSalary = salary;
            topPaidPerson = person
        }
    }
    
    
    return topPaidPerson
}






 