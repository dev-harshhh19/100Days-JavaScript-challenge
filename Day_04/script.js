// Operators in JavaScript

// Arithmatic Operators
let a = 10;
let b = 5;

console.log("Addition: ", a + b); // 15

console.log("Subtraction: ", a - b); // 5

console.log("Multiplication: ", a * b); // 50

console.log("Modulus: ", a % b); // 0

console.log("Division: ", a / b); // 2

console.log("Exponentiation: ", a ** b); // 100000

console.log("Increment: ", ++a); // 11

console.log("Decrement: ", --b); // 4

//--------------------------------------------------------------------

// Assignment Operators
let c = 20;

c = 25;  // Simple assignment
console.log("c after assignment: ", c); // 25

c += 5;
console.log("c after += 5: ", c); // 30

c -= 3;
console.log("c after -= 3: ", c); // 27

c *= 2;
console.log("c after *= 2: ", c); // 54

c /= 4;
console.log("c after /= 4: ", c); // 13.5

c %= 3;
console.log("c after %= 3: ", c); // 1.5

c **= 3;
console.log("c after **= 3: ", c); // 3.375

//--------------------------------------------------------------------

// Comparison Operators
let x = 10;
let y = '10';

console.log("x == y: ", x == y); // true (value comparison)

console.log("x === y: ", x === y); // false (value and type comparison)

console.log("x != y: ", x != y); // false (value comparison)

console.log("x !== y: ", x !== y); // true (value and type comparison)

console.log("x > 5: ", x > 5); // true

console.log("x < 15: ", x < 15); // true

console.log("x >= 10: ", x >= 10); // true

console.log("x <= 9: ", x <= 9); // false   

//--------------------------------------------------------------------

// Logical Operators
let p = true;
let q = false;

console.log("p && q: ", p && q); // false

console.log("p || q: ", p || q); // true

console.log("!p: ", !p); // false

console.log("!q: ", !q); // true    

//--------------------------------------------------------------------

// Bitwise Operators
let m = 5;  // Binary: 0101
let n = 3;  // Binary: 0011

console.log("m & n: ", m & n); // 1 (Binary: 0001)

console.log("m ^ n: ", m ^ n); // 6 (Binary: 0110)

console.log("~m: ", ~m); // -6 (Binary: ...11111010)

console.log("m << 1: ", m << 1); // 10 (Binary: 1010)

console.log("m >> 1: ", m >> 1);    // 2 (Binary: 0010) 

console.log("m >>> 1: ", m >>> 1); // 2 (Binary: 0010)


