// Q. Create a Car class in JavaScript that includes two methods: start() and stop().

// Base class
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  info() {
    console.log(`This is a vehicle of brand: ${this.brand}`);
  }
}

// Derived class
class Car extends Vehicle {
  constructor(brand, model) {
    super(brand);
    this.model = model;
    this.isBatteryOk = false;
  }

  // Callback example: check battery
  checkBattery(callback) {
    console.log("Checking battery...");
    setTimeout(() => {
      this.isBatteryOk = true;
      console.log("Battery is OK!");
      callback(this.isBatteryOk);
    }, 1000);
  }

  // Async function: start engine
  async startEngine() {
    if (!this.isBatteryOk) {
      console.log("Cannot start engine. Battery not checked!");
      return;
    }

    console.log("Starting engine...");
    await new Promise(resolve => setTimeout(resolve, 1500)); // simulate delay
    console.log("Engine started successfully!");
  }
}

// Using the Car class
const myCar = new Car("BMW");
myCar.info();

// Step 1: Check battery (callback)
myCar.checkBattery(async (batteryOk) => {
  if (batteryOk) {
    // Step 2: Start engine (async)
    await myCar.startEngine();
  } else {
    console.log("Battery check failed!");
  }
});
