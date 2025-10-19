# Day 08 

## Topic covered 
- **Arrow Functions**

> What is Arrow Function in JavaScript?
- Arrow function is the modern way to write a function in JavaScript. They were introduced in ES6 and provides a shorter syntax compared to traditional function expressions.
- They are called "arrow functions" because they use the `=>` syntax, which resembles an arrow.

## Syntax
```javascript
const functionName = (Parameters) => {
    // function body
}
```
---
### Example
```javascript
const greet = (name) => {
    return "Hello " + name;
}
console.log(greet("Harshad"));
```
---

> When we use?
- When you want shorter syntax for writing functions.
- When you don't need to use `this`, `arguments`, `super`, or `new.target` keywords inside the function.
---

> Limitations of Arrow Functions
- No `this` binding: use `this` from outer scope.
- Can't use as constructors.
- No `arguments` object.
---

### **Traditional Functions vs Arrow Functions**

```javascript
// Traditional Function
const isEven = function(num){
    return num%2===0;
}
let numm = isEven(5)
console.log(numm);
// Output: false

// Arrow Function
const isEvenArrow = (num) => {
    return num%2===0;
}
console.log(isEvenArrow(6));
// Output: true
```
---

# Summary
- Arrow functions provide a concise syntax for writing functions in JavaScript.
- They are especially useful for short functions and callbacks.
- However, they have limitations regarding `this` binding and cannot be used as constructors.   
- Understanding when and how to use arrow functions can help write cleaner and more efficient JavaScript code.
- 