# Day 29

## Topic:
- **Inheritance**
---
> What is **inheritance**?
- Inheritance is a fundamental concept in object-oriented programming (OOP) that allows a new class to inherit properties from another class.
- The new class is called the **derived class** or **child class**, while the class it inherits from is called the **base class** or **parent class**.
---
> Why use **inheritance**?
- It promotes code reusability by allowing the derived class to use methods and properties of the base class.
- It establishes a hierarchical relationship between classes, making it easier to manage and organize code.
- It allows for polymorphism, where derived classes can override methods of the base class to provide specific implimentations.
---
### Syntax:
```javascript
class ParentClass {
    constructor(){
        // Parent class properties and methods
    }
}

class ChildClass extends ParentClass {
    constructor(){
        super(); // Call the parent class constructor
        // Child class properties and methods
    }
}
```
---
### Example:
```javascript
class Animal{
    constructor(name){
        this.name = name;
    }
    makeSound(){
        console.log(`Some generic sound`);
    }
}
class Dog extends Animal{
    constructor(name, breed){
        super(name); // Call the parent class constructor
        this.breed = breed;
    }
    makeSound(){
        console.log(`${this.name} barks`);
    }
}
class Cat extends Animal{
    constructor(name, color){
        super(name); // Call the parent class constructor
        this.color = color;
    }
    makeSound(){
        console.log(`${this.name} meowww`);
    }
}
const dog = new Dog("Bobby","Shelby");
dog.makeSound();

const cat = new Cat("Pluto", "Tonny");
cat.makeSound();
```
- The `Dog` and `Cat` classes inherit from the `Animal` class, allowing them to use its properties and methods while also defining their own unique features.
---
> Method Overriding:
- Method overriding is a feature of inheritance that allows a derived class to provide a specific implementation of a method that is already defined in its base class.
- This allows the derived class to modify or extend the behavior of the base class method.
```javascript
class ParentClass{
    greeting(){
        console.log(`Hello From Parent Class`);
    }
}
class ChildClass extends ParentClass{
    greeting(){
        console.log(`Hello From Child class`);
    }
}
const child = new ChildClass();
child.greeting();
```
---
> The `super` keyword:
- Used in two ways:
    1. To call the constructor of the parent class.
    2. To call methods of the parent class.
```javascript
class school{
    constructor(name){
        this.name = name;
    }
    info(){
        console.log(`School name: ${this.name}`);
    }
}
class HighSchool extends school{
    constructor(name,grade){
        super(name); // Call parent class constructor
        this.grade = grade;
    }
    info(){
        super.info(); // Call parent class method
        console.log(`Grade: ${this.grade}`);
    }
}
const mySchool = new HighSchool("Greenwood High", 12);
mySchool.info();
```
---
> When not to use **inheritance**?
- When the relationship between classes is not hierarchical (i.e., "is-a" relationship).
- When composition or delegation would be a better fit for code reuse.
- When it leads to excessive complexity or tight coupling between classes.
- When the base class is likely to change frequently, which could lead to instability in derived classes.
---

# Summary:
- Inheritance is a powerful OOP concept that promotes code reusability and establishes hierarchical relationships between classes.
- It allows derived classes to inherit properties and methods from base classes, and to override them as needed.
- The `super` keyword is essential for accessing parent class constructors and methods.
- When not to use inheritance: consider alternatives like composition to avoid complexity and tight coupling.