// Example of a higher-order function in JavaScript
function greet(name){
    return `Hello, ${name}!`;
}

function processUserInput(callback){
    const readlinesync = require('readline-sync');
    let name = readlinesync.question("Please enter your name: ");
    console.log(callback(name));
}
processUserInput(greet);

// functions map(), filter(), reduce() examples

// map()
let numbers = [1,2,3,4,5];
let squaredNumbers = numbers.map(x => x * x);
console.log(`Squared Numbers: ${squaredNumbers}`);

// filter()
let evenNumbers = numbers.filter(x=>x%2===0);
console.log(`Even Numbers: ${evenNumbers}`);

//reduce()
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`Sum of Numbers: ${sum}`);

