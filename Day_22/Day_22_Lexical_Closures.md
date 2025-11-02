# Day 22

## Topic:
- Lexical Scoping
- Closures

---

## Lexical Scoping
> What is Lexical Scoping?
- Lexical scoping (or static scoping) means that the scope of a variable is determined by its position in the source code.
- In languages with lexical scoping, functions can access variables from their outer (enclosing) scopes.
- This allows for better organization of code and helps prevent naming conflicts.
  
### Example of Lexical Scoping:
```javascript
function outerFunction(){
    let name = 'Harshad';
    function innerFunction(){
        console.log(`Inner: ${name}`); // Accessing variable from outer scope
    }
    innerFunction();
}
outerFunction();
console.log(`Outer: ${name}`); // This will result in an error
```

### Explanation:
- In this example, `innerFunction` can access `name` because it is defined within the scope of `outerFunction`.
- When `outerFunction` is called, it creates a new scope where `name` is defined, and `innerFunction` can access it.
- If we try to access `name` from outside `outerFunction`, it will result in an error because it is not in the global scope.
- This demonstrates lexical scoping, where the scope of a variable is determined by its position in the code.

---

## Closures
> What is a Closure?
- A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables, even after the outer function has finished executing.
- Closures are created whenever a function is defined inside another function, allowing the inner function to "remember" the environment in which it was created.
- Closures are useful for data encapsulation, creating private variables, and maintaining state in asynchronous programming.

### Example of Closure:
```javascript
function outer(){
    let count = 0; // Private variable
    return function inner(){
        count++;
        console.log(`count: ${count}`);
    }
}
const counter = outer(); // `outer` returns `inner`, which is assigned to `counter`
counter(); // count: 1
counter(); // count: 2
counter(); // count: 3
```
### Explanation:
- In this example, `outer` defines a variable `count` and returns the inner function `inner`.
- The `inner` function forms a closure, capturing the variable `count` from its outer scope.
- Each time we call `counter()`, it increments and logs the value of `count`, demonstrating that the inner function retains access to the `count` variable even after `outer` has finished executing.
- This allows us to maintain state across multiple calls to `counter()`, effectively creating a private variable.
---
## Practical use cases of Closures

### Example:

```javascript
function clickHandler(color) {
    return function(){
        document.body.style.backgroundColor = `${color}`;
   }
}
document.getElementById('pink').onclick = clickHandler("pink");

document.getElementById('blue').onclick = clickHandler("blue");

document.getElementById('green').onclick = clickHandler("green");
```
### Explanation:
- In this example, the `clickHandler` function takes a `color` parameter and returns an inner function that changes the background color of the document body.
- Each time we call `clickHandler` with a different color, it creates a new closure that retains access to the specific `color` value.
- When the returned function is assigned to the `onclick` event of different buttons, clicking each button changes the background color to the respective color.
- This demonstrates how closures can be used to create functions with specific behaviors based on the parameters passed to the outer function.        console.log(`Inner: ${name}`); // Accessing variable from outer scope

---
## Visual Model:
```plaintext
Global Scope
│
└── outer() Scope
    │   (name / count)
    │
    └── inner() Scope → remembers outer scope variables
```

---

# Summary:
| Concept           | Description                                               | Example                                     |
| ----------------- | --------------------------------------------------------- | ------------------------------------------- |
| **Lexical Scope** | Scope determined by where variables/functions are written | `inner()` accessing `name` inside `outer()` |
| **Closure**       | Function + its preserved lexical environment              | `counter()` remembering `count`             |

