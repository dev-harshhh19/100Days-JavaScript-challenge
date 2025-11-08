/*
// Basic syntax
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

//----------------------------------------------------------------
console.log("");

// Example
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
// ------------------------------------------------------------------------------------------------------------

class Shape{
    area(){
        console.log(`Area of Shape`);
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
        this.radius=radius;
    }
    area(){
        const area = Math.PI * this.radius * this.radius;
        console.log(`Area of Circle: ${area.toFixed(2)}`);
    }
}
const shape = [new Rectangle(4,5), new Circle(3)];
shape.forEach(shape => shape.area());
*/

// ---------------------------------------------------------------

class carEngine{
    start(){
        this.igniteFuel();
        this.runEngine();
    }
    igniteFuel(){
        console.log("Fuel ignited");
    }
    runEngine(){
        console.log("Engine is running");
    }
}
const myEngine = new carEngine();
myEngine.start();