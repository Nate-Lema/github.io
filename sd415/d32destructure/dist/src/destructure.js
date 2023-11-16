export function topSalary(salaries) {
    let maxSalary = -Infinity;
    let topPaidPerson = null;
    let empl = {};
    if (salaries === empl) {
        return "none";
    }
    for (const [person, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            topPaidPerson = person;
        }
    }
    return topPaidPerson;
}
