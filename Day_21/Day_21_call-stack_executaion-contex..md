# Day 21

## Topic:
- **Call Stack**
- **Execution Context**
----

### Call Stack

> What is Call Stack?
- The **call stack** is like an to-do list that keeps track of what function is currectly running, and what to return when it done.
- JavaScript is a single-threaded language which means it can do one thing at a time.
- The call stack helps to manage function invocations in a `LIFO` (Last In, First Out) order.
- Think of it like a stack of plates; you add new plates to the top and removes plates from the top.

### Example of Call Stack

```javascript
function firstFunction(){
    console.log("Inside first function");
    secondFunction();
    console.log("Existing first function");
}
function secondFunction(){
    console.log("Inside the second function");
}
firstFunction();
```
- when we call `firstFunction()`, it gets added to the call stack.
- Inside `firstFunction`, when `secondFunction()` is called, it gets added to the top of the call stack.
---

### Steps of Call Stack Execution
1. call `firstFunction` → added to call stack
2. Inside `firstFunction`, call `secondFunction` → added to call stack
3. `secondFunction` executes and completes → removed from call stack
4. Control returns to `firstFunction`, which continues executing → completes and removed from call stack
5. Call stack is now empty
6. Program execution is complete
7. Output:
```text
Inside first function
Inside the second function
Existing first function
```
### Stack trace example (if an error occurs):
- If something goes wrong, Js will provide a **stack trace** that showing which functions called which, helping to debug the issue.

----

### Execution Context

> What is Execution Context?
- An **Execution Context** is an abstract concept that holds information about the environment within which the current code is being executed.
- Every time a function is invoked, a new execution context is created for that function.
- There are three types of execution contexts:
    **1. Global Execution Context**
    - Created when the JavaScript codes starts executing.
    - It creates a global object ( like `window` in browsers) and a special object called `this`.
    ---
    **2. Function Execution Context**
    - Created whenever a function is invoked.
    - Each function has its own execution context.
    - It contains information about the function's arguments, local variables, and the value of `this`.
  ---
    **3. Eval Execution Context**
    - Created by the `eval` function, which is used to execute a string of javascript code.
    - It's generally not recommended to use `eval` due to security and performance concerns.
  
### Components of Execution Context
1. **Variable Object (VO)**
   - Contains function arguments, inner variable declarations, and function declarations.
   - In ES6 and leter, `let` and `const` declarations are stored in a separate structure called the Lexical Environment.
2. **Scope Chain**
   - The scope chain is used to resolve variable names in the code.
   - It consists of the current variable object and the variable objects of all its parent execution contexts.
   - This allows functions to access variables from their outer scopes.
   - The scope chain is an important concept for understanding closures in JavaScript.
3. **this Keyword**
   - The value of `this` is determined by how a function is called.
   - In the global context, `this` refers to the global object.
   - In a function context, it depends on how the function is invoked (e.g., as a method, as a constructor, etc.).

----
### Example of Execution Context

```javascript
function outerFunction(){
    console.log("Inside outer function");
    function innerFunction(){
        console.log("Inside inner function");
    }
}
outerFunction();
innerFunction(); // This will throw an error
```
- When `outerFunction` is called, a new execution context is created for it.
- Inside `outerFunction`, when `innerFunction` is defined, it creates a new execution context for `innerFunction` when it is called.
- However, when we try to call `innerFunction` outside of `outerFunction`, it throws an error because `innerFunction` is not defined in the global execution context.

### Steps of Execution Context Creation
1. Global Execution Context is created when the script starts ececuting.
2. When `outerFunction` is called, a new Function Execution Context is created for it.
3. Inside `outerFunction`, when `innerFunction` is defined, it creates a new Function Execution Context for `innerFunction` when it is called.
4. When we try to call `innerFunction` outside of `outerFunction`, it throws an error because `innerFunction` is not defined in the global execution context.
5. Output:
```text
Inside outer function
Uncaught ReferenceError: innerFunction is not defined
```

----

# Summary
- The call stack is a mechanism for managing function execution in JavaScript.
- Each time a function is called, a new execution context is created and added to the call stack.
- When a function completes, its execution context is removed from the call stack.
- The execution context contains information about the function's scope, variables, and the value of `this`.
- Understanding the call stack and execution context is crucial for debugging and writing efficient JavaScript code.
- They help to manage function invocations and variable scope effectively.
- The execution context is created whenever a function is called, and it contains all the necessary information for the function to execute.
- The scope chain allows functions to access variables from their outer scopes, enabling closures in JavaScript.
- Errors in JavaScript provide a stack trace that helps to identify where the error occurred in the call stack.
