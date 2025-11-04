# Day 24

## Topic Covered
- Callbacks
---
 
## Callbacks
- A callback is a function that is passed as an argument to another function and is executed after some operation has been completed.
- Callbacks are commonly used in asynchronous programming to handle operations that take time to complete, such as fetching data from a server or reading a file.
- In JavaScript, callbacks are often used with functions like `setTimeout`, `setInterval`, and event listeners.

### Syntax
```javascript
setTimeout(callbackFunction, delayInMilliseconds);
```
---
```javascript
function greetuser(name, callback){
    console.log(`Hello, ${name}!`);
}
console.log(`Start`);
setTimeout(() => greetuser(`harshad`), 2000);
console.log(`End`);
```
```plaintext
Start
End
Hello, Harshad!
```
- In the above code, the `greetuser` function is called after a delay of 2 seconds, demonstrating the use of a callback with `setTimeout`.
- The `Start` and `End` messages are logged immediately, while the greeting appears after the delay, showcasing the asynchronous nature of callbacks.
---
### Example Use Cases
- Fetching data from an API
- Handling user input events (e.g., button clicks)
- Performing animations or timed actions
- Reading files asynchronously
- Processing data in the background
---
### Passing a callback to a function
```javascript
function fetchData(callback){
    setTimeout(() => {
        const data = {name: "Harshad", age: 25, city: "Mumbai"};
        callback(data);
    }, 2000);
}
fetchData(function(data){
    console.log(`Data received: ${JSON.stringify(data)}`);
})
```
- In the above code, the `fetchData` function simulates fetching data asynchronously and then calls the provided callback function with the fetched data after a delay of 2 seconds.
---

### Callback Hell
- callback hell refers to a situation where multiple nested callbacks make the code difficult to read and maintain.
- It often occurs when dealing with multiple asynchronous operations that depend on each other.

```javascript
function step1(callback){
    setTimeout(() => {
        console.log(`Step 1 Completed`);
        callback();
    }, 1000);
}
function step2(callback){
    setTimeout(() => {
        console.log(`Step 2 Completed`);
        callback();
    }, 2000);
}
function step3(callback){
    setTimeout(() => {
        console.log(`Step 3 Completed`);
        callback();
    }, 3000);
}
step1(() =>{
    step2(() => {
        step3(() => {
            console.log(`All Steps Completed`);
        });
    });
});
```
- In the above code, we have three asynchronous steps that depend on each other. Each step is nested within the callback of the previous step, leading to deeply nested code that is hard to read and maintain.
- To avoid callback hell, we can use techniques like Promises or async/await to handle asynchronous operations in a more manageable way.
---
### Promises
- A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
- Promises provide a cleaner way to handle asynchronous operations compared to callbacks, allowing for better readability and maintainability of code.

```javascript
funcion step1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Step 1 Completed`);
            resolve();
        }, 1000);
    });
}
function step2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Step 2 Completed`);
            resolve();
        }, 2000);
    });
}
function step3(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Step 3 completed`);
            resolve();
        }, 3000);
    });
}

step1()
    .then(() => step2())
    .then(() => step3())
    .then(() => {
        console.log(`All Steps Completed`);
    });
```
- Here, each step returns a promise that resolves when the asynchronous operation is complete. The `then` method is used to chain the promises together, allowing for a more linear and readable flow of asynchronous operations.
- This approach helps to avoid callback hell and makes the code easier to understand and maintain.
- Promises can also be used with `Promise.all` to run multiple promises concurrently.
---
### Async/Await
- Async/await is a syntactic feature in JavaScript that allows you to write asynchronous code in a more synchronous-looking manner.
- It is built on top of promises and provides a cleaner way to handle asynchronous operations.
- The `async` keyword is used to declare a function as asynchronous, and the `await` keyword is used to pause the execution of the function until a promise is resolved.
```javascript
async function executeSteps(){
    await step1();
    await step2();
    await step3();
    console.log(`All Steps Completed`);
}
```
- In the above code, the `executeSteps` function is declared as asynchronous using the `async` keyword. Inside the function, the `await` keyword is used to pause the execution until each step's promise is resolved.
- This approach provides a more straightforward and readable way to handle asynchronous operations, similar to synchronous code.

---
## Task
> Q. Create a function `fileDownload` that simulates downloading a file asynchronously using a promise. The function should resolve after 3 seconds and log "File processed". After the promise is resolved, log "File downloaded successfully". If there is an error during the download, log "File download failed".
```javascript
function fileDownload(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log(`File processed`);
            resolve();
        }, 3000);
    });
}

fileDownload()
    .then(() =>{
        console.log(`File downloaded successfully`);
    })
    .catch(() =>{
        console.log(`File download failed`);
    });
```
---
# Summary
- Callbacks are functions passed as arguments to other functions and are executed after certain operations.
- They are commonly used in asynchronous programming to handle operations that take time to complete.
- Callback hell occurs when multiple nested callbacks make the code difficult to read and maintain.
- Promises provide a cleaner way to handle asynchronous operations, allowing for better readability and maintainability.
- Async/await allows writing asynchronous code in a more synchronous-looking manner, improving code clarity.
- Using promises and async/await helps avoid callback hell and makes code easier to understand and maintain.
- Overall, these techniques enhance the development experience by providing more control over asynchronous flows and reducing complexity.
---
