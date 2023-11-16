//write any code you want to test here and run with npm run app
// import {classrooms, countStudentsInClassroom, findClassroomsWithCapacity, findStudentsOlderThan, averageStudentAge} from './classrooms.js';

// console.log(countStudentsInClassroom(classrooms, 102));
// console.log(findClassroomsWithCapacity(classrooms, 30));
// console.log(findStudentsOlderThan(classrooms, 18));
// console.log(averageStudentAge(classrooms));
type Salary = {
    [key:string]:number;
}
const salaries1 = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

function topSalary(salaries:Salary):string{
    let maxSalary = -Infinity;
    let topPaidPerson = ""
    if(salaries === null){
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
console.log(topSalary(salaries1))


type Classroom = {
    roomNumber: number,
    capacity: number,
    students: Student[]
  }


type Student = {
    name: string;
     age: number 
}   


export const classrooms:Classroom[] = [
    {
      roomNumber: 101,
      capacity: 30,
      students: [
        { name: "Alice", age: 18 },
        { name: "Bob", age: 19 },
        { name: "Charlie", age: 17 },
      ],
    },
    {
      roomNumber: 102,
      capacity: 25,
      students: [
        { name: "David", age: 20 },
        { name: "Eve", age: 18 },
      ],
    },
    {
      roomNumber: 103,
      capacity: 35,
      students: [
        { name: "Frank", age: 19 },
        { name: "Grace", age: 20 },
        { name: "Helen", age: 17 },
      ],
    },
  ];

//1.	Write a function collectRoomNumbers that will return an array of all the room nmbers.
function collectRoomNumbers(classroom:Classroom[]):number[]{
    return classroom.map((rooms)=>rooms.roomNumber)
}
console.log(collectRoomNumbers(classrooms))

//2.	Write a function collectRoomsAndCapacities to return an array with room numbers and capacities in this 
  //string format:  [“101::30”, "102::25”, “103::35”].
  function collectRoomsAndCapacities(roomAndCapacity:Classroom[]):string[]{
    return roomAndCapacity.map((roomCapi)=>roomCapi.roomNumber+"::"+roomCapi.capacity)
  }
  console.log(collectRoomsAndCapacities(classrooms))
//3.Write a function collectLabeledRoomCaps to return room numbers and capacities in this object 
  //format [{roomNumber: 101, capacity: 30} , …  ]
  function collectLabeledRoomCaps(classroom:Classroom[]):{roomNumber:number,capacity:number}[]{
    return classroom.map((roomCap)=>({roomNumber:roomCap.roomNumber,capacity:roomCap.capacity}))
  }
  console.log(collectLabeledRoomCaps(classrooms))
  //4.Create a function countStudentsInClassroom(classrooms, roomNumber) that takes the classrooms array and a 
  //roomNumber as parameters and returns the number of students in the specified classroom.
  function countStudentsInClassroom(classrooms:Classroom[],roomNumber:number):number | undefined{
    const classroom = classrooms.find((classroom)=>classroom.roomNumber === roomNumber);
    if(classroom){
        return classroom.students.length
    }else{
        return undefined;
    }
  }
  console.log(countStudentsInClassroom(classrooms,101))
  //5.	Create a function findClassroomsWithCapacity(classrooms, minCapacity) that takes the classrooms array and a
  // minimum capacity as parameters and returns an array of classroom objects that meet or exceed the specified capacity.
  //const capacity30 = findClassroomsWithCapacity(classrooms, 30);
//   assert.strictEqual(capacity30.length, 2);
//   assert.strictEqual(capacity30[0].roomNumber, 101);
  function findClassroomsWithCapacity(classrooms:Classroom[],minCapacity:number):Classroom[]{
    return classrooms.filter((classroom)=>classroom.capacity >= minCapacity)
  }

  const capacity30 = findClassroomsWithCapacity(classrooms, 30);
  console.log(capacity30.length);//2
  console.log(capacity30[0].roomNumber);//101
  //6.	Create a function findStudentsOlderThan(classrooms, minAge) that takes the classrooms array and a minimum 
  //age as parameters and returns an array of student objects who are older than the specified age, along with the name of their classroom.

  function findStudentsOlderThan(classrooms: Classroom[], minAge: number): Classroom[] {
    return classrooms.filter((classroom) => classroom.students.some((student) => student.age > minAge));
  }
    const olderThan18 = findStudentsOlderThan(classrooms, 18);
    console.log(olderThan18)
    console.log( olderThan18.length);//3

 //7.	Create a function averageStudentAge(classrooms) that takes the classrooms array as a parameter and returns 
 //the average age of students across all classrooms.

 function averageStudentAge(classrooms:Classroom[]):number{
  let sumAge = 0;
  let ageLength = 0
  for(const student of classrooms){
    for(const ages of student.students){
      sumAge+=ages.age
      ageLength++;
    }
  }
  return sumAge/ageLength
 }
 console.log(averageStudentAge(classrooms));


