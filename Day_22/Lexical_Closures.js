function outerFunction(){
    let name = 'Harshad'
    function innerFunction(){
        console.log(`Inner: ${name}`); // Accessing variable from outer scope
    }
    innerFunction();
}
outerFunction();
// console.log(`Outer: ${name}`); // This will result in an error

// ---------------------------------------------------------------

// Closure

function outer(){
    let count = 0; // Private variable
    return function inner(){
        count++;
        console.log(`count: ${count}`);
    }
}
const counter = outer(); // `outer` returns `inner`, which is assigned to `counter`
counter(); // count: 1
counter(); // count: 2
counter(); // count: 3

// ---------------------------------------------------------------

// Practical use case

function clickHandler(color){
    return function(){
        document.body.style.backgroundColor = `${color}`;
   }
}
document.getElementById('red').onclick = clickHandler("red");
document.getElementById('blue').onclick = clickHandler("blue");
document.getElementById('green').onclick = clickHandler("green");
