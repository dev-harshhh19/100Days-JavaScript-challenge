# Day 16

## Topic Covered 
- Scope and Hoisting 
  
---
## Scope
> What is scope?
- Scope demonstrates **where variables, functions, and objects are accessible** in your code.  
---
## Types of Scope
### 1. Gobal Scope
- Variables declared outside of any function or block
- Accessible from anywhere in the code
```javascript
let globalVar = "I am global";
function showGlobal() {
  console.log(globalVar); // Accessible here
}
showGlobal();
```
---
### 2. Function Scope
- Variables declared inside a function are local to that function
- Not accessible outside the function
```javascript
function myFunction(){
let localVar = "I am local";
    console.log(localVar); // Accessible here
}
myFunction();
```
---
### 3. Block Scope
- `let` and `const` create block-scoped variables, means they are only accessible within the block they are defined in (e.g., inside `{}`).
```javascript
if (true) {
  let blockVar = "I am block scoped";
  console.log(blockVar); // Accessible here
}
// console.log(blockVar); // Error: blockVar is not defined
```
---
## Scope Chain
- If a variable isn't found in the current scope, Js looks upward through the scope chain until it reaches the global scope/parent scope.
```javascript
let x = 10; // Global scope
function outerFunction() {
  let y = 20; // Outer function scope
  function innerFunction() {
    let z = 30; // Inner function scope
    console.log(x + y + z); // Accesses x, y, and z
  }
  innerFunction();
}
outerFunction();
```
---

## Hoisting 
> What is Hoisting?
- Hoising is the behavior in JavaScript where variables and function declarations are moved to the top of their containing scope during the compilation phase before code execution.
- This means you can use variables and functions before they are declared in the code.
---
### Hoisting with `var`
- Variables declared with `var` are hoisted and initialized with `undefined`.
```javascript
console.log(a); // Output: undefined
var a = 5;
console.log(a); // Output: 5
```
---
### Hoisting with `let` and `const`
- Variables declared with `let` and `const` are also hoisted, but not initialized. They are in a "temporal dead zone" from the start of the block until they are assigned a value, leading to a ReferenceError if accessed before initialization.
```javascript
console.log(bLet); // ReferenceError: Cannot access 'bLet' before initialization
let bLet = 10;
console.log(bLet); // Output: 10
```
---
### Hoisting with Functions
- Function declarations are hoisted completely, meaning you can call them before they are defined in the code.
```javascript
console.log(myFunction()); // Output: "Hello, World!"
function myFunction() {
  return "Hello, World! from Hoisted Function";
}
```
- Function expressions (including arrow functions) assigned to variables behave like variable hoisting.
---
# Summary
- Scope determines the accessibility of variables and functions in different parts of your code.
- Hoisting allows you to use variables and functions before their declaration, but the behavior differs between `var`, `let`, `const`, and function declarations. 
- Understanding scope and hoisting is crucial for writing predictable and bug-free JavaScript code.
- Practice these concepts to master JavaScript fundamentals!
---
