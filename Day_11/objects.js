const person = {
    name: 'Harshad',
    age: 20,
    profession: 'Student',
    isActive: true,
    greet: function() {
        return `Hello, My name is ${this.name}`;
    }
}

console.log(person.name); // Dot Notation
console.log(person["age"]) // Bracket Notation

person.age = 19; // Updating value

person.city = 'Mumbai'; // Adding new key-value pair

delete person.isActive; // Deleting key-value pair

console.log(person.greet());

// -----------------------------
console.log('------------------------------------------------------');


// Example 
const car = {
    brand: 'BMW',
    series: 'M',
    year: 2021,
    reveal: function(){
        return `This is brand new ${this.brand}`;
    }
}

console.log(car.brand);
console.log(car["year"]);

car.year = 2024

console.log(car.reveal());

// -------------------------------