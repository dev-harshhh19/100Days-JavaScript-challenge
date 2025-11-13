# Day 33: Error Handling

We focused on understanding and implementing error handling in our code. We explored various techniques to manage errors gracefully, ensuring that our applications remain robust and user-friendly even when unexprected issues arise.

> What is Error Handling?
- Error handling is the process of anticipating, detecting, and responding to errors in a program. It allows developers to manage exceptions and ensure that the application can recover or fail gracefully without crashing.
- Errors are inevitable, but you can handle them gracefully so your program/app doesn't crash unexpectedly.
  1. **Synchronous Errors** happens immediately during code execution.
  2. **Asynchronous Errors** happens at a later time, often in response to events or callbacks. (e.g, network requests, timers)
---
> The ``try...catch`` Statement:
- The `try...catch` statement is a fundamental construct for error handling in many programming languages. It allows you to define a block of code to be tested for errors (the `try` block) and a block of code to handle the error (the `catch` block).
> > Syntax:
```javascript
try {
    // Code that may throw an error
} catch (error) {
    // Code to handle the error
} finally {
    // Code that will run regardless of whether an error occurred or not
}
```
- The `finally` block is optional and will execute after the `try` and `catch` blocks, regardless of whether an error was thrown or caught.

```javascript
let number1 = 10;
let number2 = 0;
try{
    let result = number1/number2;
    if(!isFinite(result)){
        throw new Error("Division by zero is not allowed.");
    }
} catch (error) {
    console.log(`Error: ${error.message}`);
} finally{
    console.log(`Execution completed.`);
}
```
- The above code attempts to divide `number1` by `number2`. If `number2` is zero, it throws an error, which is then caught and logged in the `catch` block. The `finally` block executes regardless of whether an error occurred.
---
> Custom Error Handling:
- You can create custom error types by extending the build-in `Error` class. This allows you to define specific error types for your application, making it easier to identify and handle different error scenarios.

```javascript
class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}
try{
    let userInput = "";
    if(userInput === ""){
        throw new ValidationError(`User input cannot be empty.`);
    }
    catch(error){
        if(error instanceof ValidationError){
            console.log(`Validation Error: ${error.message}`);
        } else {
            console.log(`General Error: ${error.message}`);
        }
    } finally {
        console.log(`Input validation completed.`);
    }
}
```
- `ValidationError` that extends the build-in `Error` class. When the user input is empty, a `ValidationError` is thrown and caught in the `catch` block, where it is specifically handled.
---
> Error handling Promises:
- When working with Promises, error handling can be done using the `.catch()` method or by using `try...catch` within an `async` function.
> > Using `.catch()`:
```javascript
function fetchData(){
    return new Promise((resolve, reject) => {
        let success = false;
        if(success){
            resolve(`Data fetched successfully.`);
        } else {
            reject(new Error(`Failed to fetch data.`));
        }
    });
}
fetchData("https://api.example.com/data")
    .then(data => console.log(data))
    .catch(error => console.log(`Error: ${error.message}`));
```
> > Using `async/await` with `try...catch`:
```javascript
function fetchAPI(){
    return new Promise((resolve, reject) => {
        let success = false;
        if(success){
            resolve(`API data fetched successfully.`)
        } else {
            reject(new Error(`Failed to fetch API data.`));
        }
    })
}
async function getAPIData(){
    try{
        let data = await fetchAPI();
        console.log(data);
    } catch(error){
        console.log(`Error: ${error.message}`);
    } finally {
        console.log(`API fetch attempt completed.`);
    }
}
getAPIData();
```
- Both exapmles, errors that occur during the Promise execution are handled gracefully, either using `.catch()` or `try...catch` within an `async` function.
---
> Common Error Object Properties:
- `name`: The name of the error (e.g., "TypeError", "ReferenceError").
- `message`: A descriptive message about the error.
- `stack`: A stack trace that provides information about where the error occurred in the code.
```javascript
try {
  throw new Error("Something broke!");
} catch (e) {
  console.log(e.name);    // "Error"
  console.log(e.message); // "Something broke!"
  console.log(e.stack);   // Stack trace
}
```
---
> Best Practices for Error Handling:
1. **Be Specific**: Catch specific errors rather than using a generic catch-all. This helps in understanding the nature of the error.
2. **Log Errors**: Always log errors for debugging purposes. This can help in diagnosing issues later.
3. **Provide User-Friendly Messages**: When displaying error messages to users, ensure they are clear and helpful.
4. **Avoid Silent Failures**: Do not ignore errors. Always handle them appropriately to avoid unexpected behavior.
5. **Use Finally for Cleanup**: Use the `finally` block to perform any necessary cleanup actions, such as closing database connections or releasing resources.
6. **Test Error Scenarios**: Regularly test your error handling code to ensure it behaves as expected in various failure scenarios.
---
# Summary:
- Error handling is crucial for building robust applications. By using constructs like `try...catch`, creating custom error types, and handling errors in Promises, developers can ensure that their applications can gracefully manage unexpected situations. Following best practices in error handling enhances the user experience and aids in debugging and maintaining code.
- With proper error handling, you can create applications that are resilient and reliable, providing a better experience for users and developers alike.
---