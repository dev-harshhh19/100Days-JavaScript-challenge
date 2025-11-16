**Note**: `I got a bit confused with the flow of concepts around the asynchronous section, so I took some time to reorganize my roadmap and make everything aligned properly. From today onward, the learning path is corrected and structured. Continuing consistently from Day 36`.

---

# Day 36: Callbacks in JavaScript
> What is callbacks?
- A callback is a function passed as an argument to another function, to be executed later.
- Callbacks are used to handle asynchronous operations, such as reading files, making network requests, or handling events.
- They allow you to continue executing code while waiting for an operation to complete.
- Callbacks can be synchronous or asynchronous.

> Example of a callback function:
```javascript
function setUsername(username){
    this.username = username;
    console.log("hii");
    
}
function createUser(username, email, password){
    setUsername.call(this, username)
    this.email = email
    this.password = password
}
const user = new createUser("Harshad", "Hi@harsh.com", "harsh@password");
console.log(user);
```
- `setUsername` is a normal function that sets a `username` property on whatever object its `this` refers to.

- In `createUser`, you want to reuse that function, so you call `setUsername.call(this, username)`.
- Using `.call(this, ...)` forces `setUsername` to run as if it were a method of the new object being created by `createUser`.
- Then `createUser` sets `email` and `password` on the same object.
- `new createUser(...)` creates a new object, and inside it `this` refers to that new object.
---
> Example of synchronous callback:
```javascript
function greetUser(name, callback){
    const greeting = `Hello, ${name}!`;
    callback(greeting);
}
function byeUser(){
    console.log("Goodbye!");
}
greetUser("Harshad", function(message){
    console.log(message);
    byeUser();
})
```
- `greetUser` takes a `name` and a `callback` function.
- It creates a greeting message: `Hello, Harshad!` and then calls the `callback` with that message.
- It passes that message to the callback function, which logs it to the console. After that, it calls `byeUser` to say goodbye.
- This is a synchronous callback because `callback` is executed immediately within `greetUser`.
---
> What is asynchronous callback?
- An asynchronous callback is a function that is executed after an asynchronous operation completes.
- IT allows the program to continue running while waiting for the operation to finish.

```javascript
function fetchUserdata(userId, callback){
    setTimeout(() => {
        const userData = { id: userId, name: "Harshad"};
        callback(userData);
    }, 2000);
}
fetchUserdata(1, function(data){
    console.log("User Data:", data);
})
```
- `fetchUserdata` simulates fetching user data asynchronously using `setTimeout`.
- After 2000ms, it calls the provided `callback` function with the fetched `userData`.
- The program continues running while waiting for the data, demonstrating asynchronous behavior.
---
> Example of asynchronous callback.
```javascript
function startCar(car, carModel, callback){
    setTimeout(() => {
        const message = `The ${car} ${carModel} is starting...`
        callback(message)
    }, 1000)
}
function startingCar(car, carModel, callback){
    setTimeout(() => {
        const carStart = `The ${car} ${carModel} is started... Wroom Wroom`
        callback(carStart)
    }, 2000)
}
startCar("BMW", "M4 F82", function(message){
    console.log(message);  
    startingCar("BMW", "M4 F82", function(carStart){
        console.log(carStart);
    })
})
```
- `startCar` simulates starting a car asynchronously using `setTimeout`.
- After 1000ms, it calls the provided `callback` function with a message indicating the car is starting.
- Inside the callback of `startCar`, it calls `startingCar`, which simulates the car starting after 2000ms and calls its own callback with a message indicating the car has started.
- This demonstrates asynchronous callbacks, where each operation waits for the previous one to complete before executing its callback.
---
# Summary
- Callbacks are functions passed as arguments to other functions to be executed later.
- They are used to handle asynchronous operations, allowing code to continue running while waiting for an operation to complete.
- Callbacks can be synchronous (executed immediately) or asynchronous (executed after an operation completes).
- Asynchronous callbacks are commonly used in scenarios like fetching data, handling events, and performing time-consuming tasks without blocking the main thread.