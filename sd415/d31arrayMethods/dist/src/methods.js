// import { error } from "console";
/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
*/
export function filterRange(arr, a, b) {
    const rangeArray = arr.filter((item) => {
        return item >= a && item <= b;
    });
    return rangeArray;
}
/*
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.
*/
export function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--; // Adjust index to account for removed element
        }
    }
}
export const calculator = {
    methods: {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    },
    calculate: function (str) {
        const [a, operator, b] = str.split(" ");
        if (this.methods[operator]) {
            return this.methods[operator](+a, +b);
        }
        else {
            throw new Error("Unsupported Operator");
        }
    },
    addMethod: function (name, func) {
        this.methods[name] = func;
    },
};
export function unique(arr) {
    return [...new Set(arr)];
}
export function groupById(users) {
    // declare usersById to be an object with string keys and User values
    const usersById = {};
    // FURTHER IMPLEMENTATION REQUIRED HERE
    for (const user of users) {
        usersById[user.id] = user;
    }
    return usersById;
}
export function map2fullName(users) {
    return users.map((user) => ({
        fullName: `${user.name} ${user.surname}`,
        id: user.id,
    }));
}
export function sortByAge(users) {
    users.sort((a, b) => a.age - b.age);
}
export function findOldest(users) {
    if (users.length === 0) {
        return undefined;
    }
    return users.reduce((oldest, current) => current.age > oldest.age ? current : oldest);
}
/* getAverageAge using reduce */
export function getAverageAge(users) {
    if (users.length === 0) {
        return 0;
    }
    const totalAge = users.reduce((sum, user) => sum + user.age, 0);
    return totalAge / users.length;
}
