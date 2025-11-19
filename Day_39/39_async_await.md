# Day 39 - Async/Await

> What is async/await in JavaScript.
- Async/await is a syntactic feature in JavaScript that allows you to write asynchronous code in a more synchronous and readable manner. It is built on top of Promises and provides a way to handle asynchronous operations without the need for chaining `.then()` calls.
  - `async`: You use the `async` keyword before a function declaration to indicate that the function will return a Promise
  - `await`: You use the `await` keyword inside an `async`  function to pause the execution of the function until the Promise is resolved or rejected.
---
> Why use async/await.
- Async/await makes it easier to read and write asynchronous code by allowing you to use standard control flow constructs like try/catch for error handling, rather than relying on Promise chaining.
- IT helps to avoid "callback hell" and makes the code look cleaner and more like synchronous code.
---
> Example of async/await.
```javascript
// Simulating an asynchronous operation using a Promise
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
}

// Using async/await to handle the asynchronous operation
async function getData(){
    console.log("Fetching Data...");
    let data = await fetchData();
    console.log(data);
}
getData();
```
- The `fetchData` function simulates an asynchronous operation that resolves after 2 seconds.
- The `getData` function is declared as `async`, and it uses `await` to pause execution until `fetchData` resolves.
---
> Use cases of async/await.
- Fetching data from APIs.
- Reading/writing files.
- Performing database operations.
- Any operation that involves waiting for a result without blocking the main thread.
- Handling multiple asynchronous operations in a more readable way.
---
> Example
```javascript
async function fetchUserData(){
  let response = await fetch('https://jsonplaceholder.typicode.com/users')
  let data = await response.json();
  console.log(data);
}
return fetchUserData();
```
- The `fetchUserData` function fetches user data from an API and logs the result using async/await for better readability.
---
> Error handling with async/await using try/catch/finally:
- Use `try/catch` blocks to handle errors in async functions.
```javascript
async function fetchUserData(){
    try{
      let resonse = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok)
        throw new Error('Network response was not ok');
        let data = await response.json();
        console.log(data);
    } catch(error){
        console.log(`Error: ${error.message}`);
    } finally {
        console.log('Fetch attempt finished.');
    }
}
fetchUserData();
```

> More Examples for better understanding:
- An `async` function always returns a Promise.
  - If the function returns a non-promise value, it is automatically wrapped in a **resolved** promise.
  - If the function throws an error, it is automatically wrapped in a **rejected** promise.
```javascript
async function carDetails(){
    return "Car details fetched";
}
carDetails().then((message) => console.log(message)).catch((error) => console.error(error));
```
- The `carDetails` function returns a string, which is automatically wrapped in a resolved Promise.
---

# summary of Async/Await
- Async/await is a syntactic feature in JavaScript that allows you to write asynchronous code in a more synchronous and readable manner.
- The `async` keyword is used to declare functions that return Promises, while the `await` keyword is used to pause execution until a Promise is resolved or rejected.
- Async/await improves code readability, simplifies error handling with try/catch, and helps avoid callback hell.
- It is commonly used for operations like fetching data from APIs, reading/writing files, and performing database operations.
- Error handling in async functions can be effectively managed using try/catch/finally blocks.
- here you can find more practical examples to understand async/await better. **[click here](../Day_39/practical.js)**
---
