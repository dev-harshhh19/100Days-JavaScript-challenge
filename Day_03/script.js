//Data Types 

//String
let usrName = "devharshhh";
console.log(usrName);

//Number 
let age = 20;
console.log(typeof age, age);

let price = 99.99;
console.log(typeof price, price);

//Boolean
let isHappy = true;
console.log(typeof isHappy, isHappy);

//undefined
let passwd;
console.log(typeof passwd);

//Null
let user = null;
console.log(user);

//Object
const person = {
    name: "Harshad",
    age: 20,
    edu: "CS",
};
console.log(person, typeof person);


//Array
const color = ['Red', 'Green', 'Blue', 'White', 'Purple', 'Pink'];
console.log(color, typeof color);

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(number, typeof number);

//Symbol
const id = Symbol('12345');
console.log(id, typeof id);

//BigInt
const bigNumber = BigInt(1234567890123456789012345678901234567890);
console.log(bigNumber, typeof bigNumber);

//---------------------------------------------------
//Type Conversion

//values to String
let score = 44;
let scoreAsString = String(score); // "100"

console.log(typeof score);         // "number"
console.log(typeof scoreAsString); // "string"


//value to Number
let isLoggedIn = true;
let loggedInAsNumber = Number(isLoggedIn); // 1

console.log(typeof isLoggedIn);        // "boolean"
console.log(typeof loggedInAsNumber);   // "number"


//value to Boolean
console.log(Boolean(1));       // true
console.log(Boolean("hello")); // true

console.log(Boolean(0));       // false
console.log(Boolean(""));      // false