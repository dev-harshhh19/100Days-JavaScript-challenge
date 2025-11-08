# Day 28

## Topic
- classes and OOPs
---
> **Class**
- Class (ES6 feature) provides a much simpler and clearer syntax to create object compare to traditional constructor functions.
- Classes support inheritance, allowing one class to inherit properties and methods from another class. 

### Syntax
```javascript
class Grocerry{
    constructor(name, price){
        this.name=name;
        this.price=price;
    }
    displayBill(){
        console.log(`Item: ${this.name}`);
        console.log(`Price: $${this.price}`);
    }
}
const milk = new Grocerry("Milk", 4.5);
milk.displayBill();
```
- The `constructor` method is a special method for creating and initializing an object created with a class.
- The `this` keyword refers to the current instance of the class.
- Method defined inside the class can be accessed using the instance of the class.
- To create an instance of a class, we use the `new` keyword followed by the class name and parentheses.
- Classes can have multiple methods to perform various operations related to the object.

---
### Example
```javascript
class Cars{
    constructor(model, year, cost){
        this.model=model;
        this.year=year;
        this.cost=cost;
    }
    showCarDetails(){
        console.log(`Car is: ${this.model}`)
        console.log(`Year: ${this.year}`)
        console.log(`Price: ${this.cost.toFixed(2)}`)
    }

    serviceTax(tax){
        return this.cost + (this.cost * tax);
    }
}
const tax = 0.18;
const Car1 = new Cars("M5 CS", 2021, 215000);
const Car2 = new Cars("RS6", 2023, 122000);

Car1.showCarDetails();
Car2.showCarDetails();

const totalCost = Car1.serviceTax(tax);
console.log(`Final cost of ${Car1.model} is(With Taxe): $${totalCost.toFixed(2)}`);
```
- In the above example, we created a `Cars` class with a constructor to initialize the properties `model`, `year`, and `cost`. We also defined two methods: `showCarDetails` to display the car's details and `serviceTax` to calculate the final cost including tax. We then created two instances of the `Cars` class and demonstrated the usage of the methods.
---

## **OOPs Concepts**
> **1. Encapsulation**: 
- Wrapping data (**properties**) and methods (**functions**) into a single unit (**class**).
- It also involves restricting direct access to certain details of an object (using **private** or **public** properties and **methods**).

```javascript
// Example of Encapsulation
class BankAccount{
    constructor(accountNumber, accountHolder, balance){
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
        console.log(`Deposited: $${amount}`);
    }

    withdraw(amount){
        if(amount > this.balance){
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}`);
        }
    }

    getBalance(){
        return this.balance;
    }
}
const myAccount = new BankAccount("123456", "John Doe", 1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log(`Current Balance: $${myAccount.getBalance()}`);
```
- The `bankAccount` class encapsulates the properties and methods related to a bank account, providing controlled access to the balance through methods.
- This ensures that the balance cannot be modified directly from outside the class, promoting data integrity.
---
> **2. Inheritance**:
- A mechanism where a new class (child class) can inherit properties and methods from an existing class (parent class).
- This promotes code reusability and estabilishes a hierarchical relationship between classes.
- In JS, inheritance is implemented using the `extends` keyword.
```javascript
class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a noise.`);
    }
    eat(){
        console.log(`${this.name} is eating.`);
    }
}
class Dog extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
    bark(){
        console.log(`${this.name} barks.`);
    }
}
const myDog = new Dog("Bobby", "Shelby");
myDog.speak(); // Inherited method
myDog.eat();   // Inherited method
myDog.bark();  // Child class method
```
- The `Dog` class inherits from the `Animal` class using the `extends` keywords. The `super` keyword is used to call the constructor of the parent class.
- The `Dog` class can access the methods of the `Animal` class, demonstrating inheritance.
---
> **3. Polymorphism**:
- The ability of different classes to be treated as instances of the same class through a common interface.
- It allows methods to do different things based on the object that it is acting upon, even through they share the same name.

```javascript
class Shape{
    area(){
        console.log(`Area of shape`);
    }
}
class Rectangle extends Shape{
    constructor(width, height){
        super();
        this.width = width;
        this.height = height;
    }
    area(){
        const area = this.width * this.height;
        console.log(`Area of Rectangle: ${area}`);
    }
}
class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    area(){
        const area = Math.PI * this.radius * this.radius;
        console.log(`Area of Circle: ${area.toFixed(2)}`);
    }
}
const shapes = [new Rectangle(4,5), new Circle(3)];
shapes.forEach(shape => shape.area());
```
- Both `Rectangle` and `Circle` classes override the `area` method from the `Shape` class. When we call the `area` method on each shape, it behaves differently based on the specific object type, demonstrating polymorphism.
---
> **4. Abstraction**:
- The concept of hiding the complex implementation details and showing only the essential features of the object.
- It helps in reducing complexity and increases efficiency by allowing the user to interact with the object at a higher level.
```javascript
class CarEngine{
    start(){
        this.igniteFuel();
        this.runEngine();
    }
    igniteFuel(){
        console.log("Fuel ignited.");
    }
    runEngine(){
        console.log("Engine is running.");
    }
}
const myEngine = new CarEngine();
myEngine.start();
``` 
- The `CarEngine` class abstracts the complex process of starting an engine into a simple `start` method. The user does not need to know the details of how the fuel is ignited or how the rngine runs, they just call the `start` method.
---

# Summary
- Classes provide a structured way to create objects and implement OOPs concepts in javascript.
- OOPs concepts like **Encapsulation**, **Inheritance**, **Polymorphism**, and **Abstraction** help in organizing code, promoting reusability, and managing complexity in software development.