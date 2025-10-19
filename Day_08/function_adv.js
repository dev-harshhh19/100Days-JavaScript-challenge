// Arrow Function
const greet = (name) => {
        return `Hello ${name}`;
    }
console.log(greet("Harshad"));

//------------------------------------

const isEven = function(num){
    return num%2===0;
}
let numm = isEven(5)
console.log(numm);

//------------------------------------

const isEvenArrow = num =>num%2 === 0;
console.log(isEvenArrow(10));

//------------------------------------

//Square of `n` number
const square = num => num*num;
console.log(square(12));

//------------------------------------

