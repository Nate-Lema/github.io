// import { error } from "console";

/* 
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
*/
export function filterRange(arr: number[], a: number, b: number): number[] {
  const rangeArray = arr.filter((item) => {
    return item >= a && item <= b;
  });
  return rangeArray;
}

/*
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.
*/
export function filterRangeInPlace(arr: number[], a: number, b: number): void {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--; // Adjust index to account for removed element
    }
  }
}

type Calculator = {
  methods: { [key: string]: (a: number, b: number) => number };
  calculate: (str: string) => number;
  addMethod: (name: string, func: (a: number, b: number) => number) => void;
};
export const calculator: Calculator = {
  methods: {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  },
  calculate: function (str: string): number {
    const [a, operator, b] = str.split(" ");
    if (this.methods[operator]) {
      return this.methods[operator](+a, +b);
    } else {
      throw new Error("Unsupported Operator");
    }
  },
  addMethod: function (
    name: string,
    func: (a: number, b: number) => number
  ): void {
    this.methods[name] = func;
  },
};

export function unique(arr: string[]): string[] {
  return [...new Set(arr)];
}

export type User = {
  id: string;
  name: string;
  age: number;
};

export function groupById(users: User[]): { [key: string]: User } {
  // declare usersById to be an object with string keys and User values
  const usersById: { [key: string]: User } = {};
  // FURTHER IMPLEMENTATION REQUIRED HERE
  for (const user of users) {
    usersById[user.id] = user;
  }
  return usersById;
}
// export function groupById(users: User[]): { [key: string]: User } {
//     return users.reduce((result, user) => {
//         result[user.id] = user;
//         return result;
//     }, {});
// }

export type SurnameUser = {
  name: string;
  surname: string;
  id: number;
};

export type FullNameUser = {
  fullName: string;
  id: number;
};

export function map2fullName(users: SurnameUser[]): FullNameUser[] {
  return users.map((user) => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id,
  }));
}

export function sortByAge(users: User[]): void {
  users.sort((a, b) => a.age - b.age);
}

export function findOldest(users: User[]): User | undefined {
  if (users.length === 0) {
    return undefined;
  }
  return users.reduce((oldest, current) =>
    current.age > oldest.age ? current : oldest
  );
}

/* getAverageAge using reduce */
export function getAverageAge(users: User[]): number {
  if (users.length === 0) {
    return 0;
  }
  const totalAge = users.reduce((sum,user) => sum + user.age,0);
  return totalAge/users.length;
}
