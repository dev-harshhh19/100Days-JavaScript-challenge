# Day 06 - Loops

> **Topics Covered**
- For Loop
- Nested For Loop
- While Loop
- Do-While Loop
- Exercises

---

## 1. `for` Loop
- The `for` loop is used to repeat a block of code a specific number of times based on a condition.
```javascript
for ( initialization; condition; increment/decrement ) {
    // Code to be executed in each iteration.   
}
```

**Example**
```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Iteration number: " + i);
}
```
- In this example, the loop will run 5 times, logging the iteration number each time
  
---

## 2. Nested `for` Loop
- A nested `for` loop is a loop inside another loop. The inner loop runs completely for each iteration of the outer loop.
```javascript
for ( initialization1; condition1; increment/decrement1 ) {
    for ( initialization2; condition2; increment/decrement2 ) {
        // Code to be executed in each iteration of the inner loop.
    }
}
```    

**Example**
```javascript
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log("Outer loop i: " + i + ", Inner loop j: " + j);
    }
}
```
- In this example, for each value of `i` from 1 to 3, the inner loop runs with `j` from 1 to 2, logging both values.

---

## 3. `while` Loop
- The `while` loop continues to execute a block of code as long as a specified condition is true.
```javascript
while ( condition ) {
    // Code to be executed as long as the condition is true.
}
``` 
**Example**
```javascript
let count = 1;
while (count <= 5) {
    console.log("Count is: " + count);
    count++;
}
```
- In this example, the loop will run as long as `count` is less than or equal to 5, logging the count each time and incrementing it.

---

## 4. `do-while` Loop
- The `do-while` loop is similar to the `while` loop, but it guarantees that the code block will execute at least once before checking the condition.
```javascript
do {
    // Code to be executed at least once and then repeatedly as long as the condition is true.
} while ( condition );
```

**Example**
```javascript 
let number = 1;
do {
    console.log("Number is: " + number);
    number++;
} while (number <= 5);
```
- In this example, the loop will log the number starting from 1 to 5, incrementing it each time.

---

# Summary
- Loops are essential for executing repetitive tasks efficiently.
- They allow developers to write cleaner and more maintainable code by eliminating redundancy.
- Understanding different types of loops helps in choosing the right one for specific scenarios in programming.


