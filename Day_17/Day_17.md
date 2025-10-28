# Day 17

## Topic Covered
- `this` keyword

---
> What is `this` keyword?
- The `this` keyword refers to the object that currently executing the function.
- Its Value is depends on how the function is called.
- In a method, `this` refers to the owner object.
---

### 1. Global Context
```javascript
console.log(this); 
```
- In browser, `this` refers to the `window` object.
- In Node.js, it refers to the **global objects** (`{}`in modules).
---
### 2. Inside an Object Method
```javascript
const user = {
    name: 'Harshad',
    greet(){
        console.log(this.name);
    }
};
user.greet(); 
```
- Here, `this` refers to the `user` object.
---

### 3. In Regular Function
```javascript
function show(){
    console.log(this);
}
show();
```
- In the Regular function, `this` depends on call site.
- If you call plain function directly, `this` refers to the global object (or `undefined` in strict mode).
---

### 4. In Arrow Function
```javascript
const obj = {
    name: 'Harshad',
    arrowFunction:() => {
        console.log(this.name);
    }
}
```
- Arrow function does not have its own `this`.
- It inherits `this` from the **surrounding (lexical) scope**.
- The arrow function doesn't bind its own `this`, so it takes from the outer scope.
---

### 5. using `call()`, `apply()`, and `bind()`
```javascript
function greeting(){
    console.log(`Hi, ${this.name}`);
}

const person = { name: 'Harshad' };

greeting.call(person);
greeting.apply(person);

const boundGreeting = greeting.bind(person);
boundGreeting();
```
- `call()` → calls immediately, arguments listed normally
- `apply()` → calls immediately, arguments as an array
- `bind()` → returns a new function with this permanently set
---

### 6. In Event Handlers
```javascript
document.getElementById('myBtn').addEventListener('click', function(){
    console.log(this); 
});
```
- `this` refers to the element that received the event.
---

# Summary
| Context                   | `this` refers to                 |
| ------------------------- | -------------------------------- |
| Global scope (browser)    | `window`                         |
| Method in object          | That object                      |
| Regular function          | `undefined` (strict) or `window` |
| Arrow function            | Lexical `this` (outer scope)     |
| Event handler             | The DOM element                  |
| `call` / `apply` / `bind` | Explicitly set object            |
