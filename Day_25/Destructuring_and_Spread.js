const arr = [1, 2, 3, 4];
/*

// Without Destructuring
const first = arr[0];
const second = arr[1];

*/
// With Destructuring
const [first, second, ...rest] = arr;
console.log(first, second, rest); // Output: 1 2 [3, 4]

// ----------------------------------------------

// Object destructuring
const obj = {name: "Harshad" , age: 19};
/*
// Without destructuring
const name = obj.name;
const age = obj.age;
*/

// With destructuring
const { name, age } = obj;
console.log(name, age);
// You can also rename variables during destructuring
const { name: fullName, age: years } = obj;

// ----------------------------------------------

// Nested Destructuring
const nestedObj = {
    person: {
        name: "Harshad",
        age: 19,
        qualification: {
            degree: "Computer Science",
            year: 2027
        }
    }
}
const {person: { name: personName, qualification: {degree}}} = nestedObj;
console.log(personName, degree);

// ---------------------------------------------------

// Spread Operator

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const combined = [...arr1, ...arr2];
console.log(combined);

// --------------------------------------------------------

// Object spread
const obj1 = {name: "Harshad", age: 19};
const obj2 = {qualification: "Computer Science", year: 2027};
const combinedObj = {...obj1,...obj2}
console.log(combinedObj);

// ----------------------------------------------------------

// Spread in function call

const number = [1,2,3,4,5];
const sum = (a,b,c,d,e) => a+b+c+d+e;
console.log(sum(...number));
