# Day 38 - Promises

> What is Promises in JS.
- Javascript **Promises** makes handling asynchronous operations like API calls, file handling, time delays, etc easier and more manageable.
- A **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
- A Promise is in one of these states:
  1. **Pending**:  Initial state, neither fulfilled nor rejected.
  2. **Fulfilled**:  The operation completed successfully.
  3. **Rejected**: The operation failed.

```javascript
let checkEven = new Promise((resolve, reject) => {
    let number = 4;
    if (number %2 === 0){
        resolve('The number is even');
    } else {
        reject('The number is odd');
    }
})
checkEven.then((message) => {
    console.log(`Success: ${message}`);

}).catch((message) => {
    console.log(`Failure: ${message}`);
});
```
- Promises to check if a number is even or odd. If yes, it resolves; otherwise, it rejects.
---

### Syntax

```javascript
let promise = new Promise((resolve, reject) => {
    // perform operation
    if (/* operation successful */) {
        resolve(result); // fulfilled
    } else {
        reject(error); // rejected
    }
})
```
- **resolve(value)**: Marsk the promise as fulfilled with the given value.
- **reject(reason)**: Marks the promise as rejected with the given reason (error).

---
1. **Promise.call() method**: 
```javascript
let checkEven = new Promise((resolve, reject) => {
    let number = 9;
    if(number %2 === 0){
        resolve(`The ${number} is even`)
    } else {
        reject(`The ${number} is odd`)
    }
})
checkEven.then((message) => {
    console.log(`success :${message}`);
}).catch((message) => {
    console.log(`failure: ${message}`);
})
```
- Waits for **all promises** to resolve and resturns their results as an array. If any promise rejects, it catches the error.
---
2. **Promise.allSettled() method**:
```javascript
Promise.all([
    Promise.resolve("Task 1 Completed"),
    Promise.resolve("Task 2 Completed"),
    Promise.resolve("Task 3 Failed")
]).then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message)
})

```
- Waits for **all promises** to settle (either fulfilled or rejected) and returns an array of their results.
---
3. **Promise.race() method**:
```javascript
Promise.race([
    new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 1 Finished")
        }, 1000);
    }),
    new Promise((resolve) => {
        resolve("Task 2 Finished")
    },0)
]).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})
```
- Returns the result of the **first settled promise** (either fulfilled or rejected) among the provided promises.
---
4. **Promise.any() method**:
```javascript
Promise.any([
    Promise.reject("Task 1 failed"),
    Promise.resolve("Task 2 completed"),
    Promise.resolve("Task 3 completed")
])
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
```
- Returns the result of the **first fulfilled promise** among the provided promises. If all promises reject, it catches the error.
---
5. **Promise.resolve()** Method
```javascript
Promise.resolve("Immediate success")
    .then((value) => console.log(value));
```
- Creates a promise that is **immediately resolved** with the given value.
---
6. **Promise.reject()** Method
```javascript
Promise.reject("Immediate failure")
    .catch((error) => console.error(error));
```
- Creates a promise that is **immediately rejected** with the given reason (error).
---
7. **Promise.finally()** Method
```javascript
Promise.resolve("Task completed")
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.log("Cleanup completed"));
```
- Executes a callback function **regardless of the promise's outcome** (fulfilled or rejected), often used for cleanup actions.
---

> Promises and async/await:
- While **Promises** are the underlying mechanism for handling asynchronous opertions, **async/await** provides a more readable and synchronous-like syntax for working with Promises.
> > `async`:
- `async` used to declare a function as asynchronous.
- An `async` function always returns a Promise.
  - If the function returns a non-Promise value, it is automatically wrapped in a **resolved** Promise.
  - If the function throws an error, it is automatically wrapped in a **rejected** Promise.
```javascript
async function userDetails(){
    return "User details fetched";
}
userDetails().then((message) => console.log(message));
```
---
> > `await`:
- `await` is used to pause the execution of an `async` function until a Promise. is settled (either fulfilled or rejected).
- It can only be used inside an `async` function.
```javascript
function fetchUser(id){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({id: id, name: "Harshad"});
        }, 1000);
    })
}
async function logUser(UserID){
    console.log("Fetching user...");
    let user = await fetchUser(UserID);
    console.log(`userFound: ${user.name}`);
    return user;
}
logUser(10);
```
- The `logUser` function fetches user details asynchronously using `await`, pausing execution until the `fetchUser` Promise resolves.
---
> > Error Handling with async/await:
```javascript
function carParking(slotNumber){
    if (slot > 100){
        throw new error(`Parking slow ${slotNumber} is available`)
    } else {
        return `caar parked in the slot`;
    }
}
async function manageParking(slotNumber) {
    try {
        let parkingStatus = new carParking(slotNumber);
        console.log(parkingStatus);
    } catch(error){
        console.log(`Error: ${error.message}`);
    } finally {
        console.log(`Car Parked...`)
    }
}
manageParking(159);
```
- The `manageParking` function handles errors that may occur during the parking operation using `try...catch`.
---
# Summary of Promises in JavaScript
- Promises are objects that represent the eventual completion or failure of asynchronous operations.
- They have three states: pending, fulfilled, and rejected.
- Promises provide methods like `then()`, `catch()`, and `finally()` for handling results and errors.
- Utility methods like `Promise.all()`, `Promise.race()`, and `Promise.any()` help manage multiple promises.
- The `async/await` syntax offers a more readable way to work with Promises, making asynchronous code look synchronous.
- Proper error handling is essential when working with Promises and async/await to ensure robust applications.
---