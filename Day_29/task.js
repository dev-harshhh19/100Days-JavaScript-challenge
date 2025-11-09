// Q. Extend Car into ElectricCar with a charge() method, and override the start() method to include battery status.

class Car{
    constructor(brand){
        this.brand = brand;
    }
    start(){
        console.log(`${this.brand} car started`);
    }
}

class ElectricCar extends Car{
    constructor(brand, batteryLevel){
        super(brand);
        this.batteryLevel = batteryLevel;
    }
    start(){
        console.log(`${this.brand} electric car started with battery level at ${this.batteryLevel}%`);
    }
    charge(){
        console.log(`${this.brand} is charging...`);
    }
}

// Example usage:
const myElectricCar = new ElectricCar("BMW iX", 85);
myElectricCar.start();
myElectricCar.charge();
// ---------------------------------------------------------------------------