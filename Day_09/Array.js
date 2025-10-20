let color = ['red', 'Blue', 'Green']
console.log(color)

console.log(color[0]); // Accessing first item 'red'
console.log(color[1]); // Accessing second item 'Blue'
//-------------------------------------------------

// Modifying Items
color[0] = 'Pink'; // Changing first item to 'Pink'
console.log(color);

// Adding Items
color.push("Purple");   // Adding 'Purple' at the end
console.log(color);

// Removing Items
color.pop();
color.shift();  // Adding 'Purple' at the end
console.log(color);

// Finding Index
let index = color.indexOf('Green');
console.log(index);

// Array Length
console.log(color.length);

//-----------------------------------

//Example1

let cart = ['Monitor','Graphics_card','Laptop','Keyboard','Mause']
cart.push('Headphones')  // Adding Item in cart

cart.pop();  // Removing last item from cart

if (cart.indexOf('Laptop')!== -1){
    console.log('Laptop is in the cart');
}

// Example2

let numbers = [33,44, 11, 63, 8];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(max);