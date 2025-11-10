// Static Properties and Methods
class Circle{
    static pi = 3.14;
    constructor(radius){
        this.radius = radius;
    }
    getAre(){
        return Circle.pi * this.radius * this.radius;
    }
}
const circle = new Circle(5);
console.log(`area of circle: ${circle.getAre()}`);
console.log(`value of pi: ${Circle.pi}`);

//------------------------------------------------------------

// Private Properties and Methods
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

// console.log(acc.#balance);


// ------------------------------------------------------------

