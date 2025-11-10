# Day 30

## Topic:
- Static Members and Private Fields
---
> What are **static members**?
- Static members are properties or methods that belong to the class itself rather than to any specific instance of the class.
- They can be accessed without creating an instance of the class.
- Static members are defined using the `static` keyword.
- They are often used for utility functions, constants, or shared data that is common to all instances of the class.

### syntax:
```javascript
class MyClass{
    static myStaticProperty = "I am static";
}
console.log(MyClass.myStaticProperty); // Output: I am static
```
---
### Example:
```javascript
class Circle{
    static pi = 3.14;
    constructor(radius){
        this.radius = radius;
    }
    getArea(){
        return Circle.pi * this.radius * this.radius;
    }
}
const circle1 = new Circle(5);
console.log(circle1.getArea()); // Output: 78.5
```
- `pi`  is a static property that can be accessed using the class name `Circle.pi`.
- The `getArea` method uses that static perperty to calculate the area of the circle.
---
### Key Points:
- Static members are shared among all instances of the class.
- Static fields and methods are called on the class, not on instances of the class.
- Static members can be useful for defining constants or utility functions that are relevant to the class as a whole.
---
> What are **private fields**?
- Private fields are properties of the class that **cannot be accessed** or **modified from outside the class**, even by subclasses.
- They are defined using the `#` prefix before the field name.
- Private fields help encapsulate data and prevent unintended access or, modification from outside the class.

### syntax:
```javascript
class MyClass2{
    #myPrivateProperty = "I am private";
    getPrivateProperty(){
        return this.#myPrivateProperty;
    }
    setPrivateProperty(value){
        this.#myPrivateProperty = value;
    }
}
const myInstance = new MyClass2();
console.log(myInstance.getPrivateProperty());
```
---
### Example:
```javascript
class BankAccount {
  #balance = 0;

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
  }

  #calculateInterest() {
    return this.#balance * 0.05;
  }

  showInterest() {
    console.log(`Interest: ${this.#calculateInterest()}`);
  }
}

const acc = new BankAccount("Harshad");
acc.deposit(1000);
acc.showInterest();

// console.log(acc.#balance); // Error: Private field '#balance' must be declared in an enclosing class
```
- `#balance` is a private field that cannot be accessed directly from outside the `BankAccount` class.
- The `deposit` method allows modifying the balance, while the `#calculateInterest` method is a private method used to calculate interest on the balance.
---
### Key Points:
- Private fields are prefixed wtih `#` and are only accessible within the class they are defined in.
- They help encapsulate data and prevent unintended access or modification from outside the class.
- Private fields cannot be accessed or modified by subclasses or external code.
- They enhance data security and integrity within the class.
---
# Summary:
- Static members belong to the class itself and can be accessed without creating an instance.
- Private fields are properties that cannot be accessed or modified from outside the class, ensuring data encapsulation and security.   
- Both static members and private fields are important features in object-oriented programming that help manage data and behavior within classes effectively.
- Understanding and utilizing these features can lead to cleaner, more maintainable, and secure code.
- Practice using static members and private fields in your classes to enhance your programming skills!
---