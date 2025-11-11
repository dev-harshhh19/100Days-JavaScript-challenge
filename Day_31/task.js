// Q. Add a new method to an object prototype
// Create a method called 'greet' that returns "Hello, [name]!" where [name] is a property of the object.

// Solution:
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    return `Hello, ${this.name}!`;
};

// Example usage:
const person1 = new Person("Tyrion");
console.log(person1.greet()); // Output: Hello, Tyrion!

const person2 = new Person("Jon");
console.log(person2.greet()); // Output: Hello, Jon!   
