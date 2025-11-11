// Basic Example:

function user(name, age){
    this.name = name;
    this.age = age;
}
user.prototype.greet = function(){
    console.log(`Hello, My name is ${this.name} and, I am ${this.age} years old`);
}
const user1 = new user("Harshad", 19);
user1.greet();

//-----------------------------------------------------

// 

function superUser(name, role){
    this.name = name;
    this.role = role;
}
superUser.prototype.getDetails = function(){
    return `${this.name} is a ${this.role}`;
};
superUser.prototype.isAdmin = function(){
    return this.role.toLowerCase() === 'admin';
};

const user2 = new superUser('Harshad', 'Admin');
const user3 = new superUser('Wilson', 'Manager');

console.log(user2.getDetails());
console.log(user3.getDetails());
console.log(user3.isAdmin());
console.log(user2.isAdmin());

// -------------------------------------------------------------

// prototype chain
function vehicle(brand){
    this.brand = brand;
}
vehicle.prototype.start = function(){
    console.log(`${this.brand} vehicle is starting...`);
};
function Car(brand, model){
    vehicle.call(this, brand);
    this.model = model;
}
Car.prototype = Object.create(vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.drive = function(){
    console.log(`${this.brand} ${this.model} is driving...`);
}

const myCar = new Car("BMW", "M4 Competition");

myCar.start();
myCar.drive();
console.log(myCar.toString()); // [ object Object ]

// --------------------------------------------------------

// class with prototype

class carStore{
    constructor(carName, carType){
        this.carName = carName;
        this.carType = carType;
    }
    getCarDetails(){
        return `Car name: ${this.carName}, Car Type: ${this.carType}`;
    }
    sellCar(){
        return `${this.carName} has been sold!`
    }
}
const car1 = new carStore("BMW", "Sedan");
console.log(car1.getCarDetails());
console.log(car1.sellCar());