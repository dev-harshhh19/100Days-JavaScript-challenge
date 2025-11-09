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

// ---------------------------------------------------------------------------

// Method Overriding Example
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
const parent = new ParentClass();
parent.greeting();

const child = new ChildClass();
child.greeting();

// ---------------------------------------------------------------------------

// super Keyword Example

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