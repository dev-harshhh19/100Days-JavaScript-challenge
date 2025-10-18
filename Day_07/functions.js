
// Function & Function Expression

// Hello Js
function greet(){
	console.log("Hello Js");
}

//Good Bye
const goodBye = function (){
	console.log("Good bye");
}

greet();
goodBye();

// ----------------------------------------------------------------------------------------------------

// Parameters & Arguments
function greeting(name){
	console.log(`Hello! ${name}`); 
}
greeting("Harshad"); // Output: Hello! Harshad

// ----------------------------------------------------------------------------------------------------

// Multiple Parameters
function add(a, b){
	return a + b; 
}
const result = add(5,7);
console.log(result); // Output: 12

// ----------------------------------------------------------------------------------------------------

// Default Parameters
function car (car = "BMW"){
	console.log(`${car} is Nice`);
}

car();
car("Porsche");
 
// ----------------------------------------------------------------------------------------------------

// Question for the day
function sumOfNnumber(n) {
    let sum = n;
    for (let i = 1; i < n; i++) {
        sum += i;
    }
    return sum;
}

const res = sumOfNnumber(10);
console.log(res); // Output: 55

// ----------------------------------------------------------------------------------------------------
