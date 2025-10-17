// For Loop

for ( let i =0; i < 5; i++) {
    console.log("Iteration number: " + i);
}console.log("\n");

// ----------------------------------

// Nested For Loop

for (let i = 1; i <= 3; i++) {
    console.log("Outer loop iteration: " + i);
    for (let j = 1; j <= 2; j++) {
        console.log("  Inner loop iteration: " + j);
    }
}  console.log("\n");

// ----------------------------------

// While Loop

let count = 0;
while (count < 5) {
    console.log("Count is: " + count);
    count++;
}console.log("\n");

// ----------------------------------

// Do-While Loop

let num = 0;
do {
    console.log("Number is: " + num);
    num++;
} while (num < 5);
console.log("\n");


// -----------------------------------------------

// Exercises
// 1.Print all even numbers up to 100

for (let i = 0; i <= 100; i += 2) {
    console.log(`Even number is: ${i}`);
}
console.log("\n");

// 2.Print all odd numbers up to 100

for (let i = 1; i <= 100; i += 2) {
    console.log(`Odd number is: ${i}`);
}
console.log("\n");
