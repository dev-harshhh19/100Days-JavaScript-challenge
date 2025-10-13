**What is lean in Day 2**
  

> **var**

what is var?
- `var` is the keyword to declare a variable, it one of the three main ways to declare the variable, along with `let` & `const`, which is introduced in ES6.
- `var` can be re-declare again with the same variable.
- `var` is the function scoped 

>Now, if you assign another value to the `message` variable, it will take the most recent value, even if multiple initialization’s have been done.

```javascript
// Declare and initialize a variable using var
var message = "Hello Js"; // First initialization
message = "Hello Javascript"; // Second initialization (overwrite)
console.log(message); // Outputs: Hello Javascript
```
---

> let 

What is let?
- `let` is the Blocked-scoped.
- it cannot be re-declared with same variable.

> **Why use let?**
> Variables declared with **`let`** can have their values changed later in your code.

```javascript
// Declare and initialize a variable using let
let greeting = "Hello Js"; // String initialization
console.log(greeting);
```
---

> const

Here is the simplest differentiation:

In `var` you can re-assigned the variable's

```jsx
var text = "Hello";
var text = "Hello Again!";
console.log(text);
```

---

for `let` you can re-assigned but without datatype:

```jsx
let text = "Hello";
/* let text = "Hello Again!!!"; */ Error: Uncaught SyntaxError: Identifier 'text' has already been declared
text = "Hello Again!!";
console.log(text);
```

---

With `const`, you can’t re-declare the variable or change its value once it’s created. After you declare it, it stays the same:

```javascript
const pi = 3.1416;
pi = 3.14;         //  TypeError: Assignment to constant variable
const pi = 3.14;   //  SyntaxError: Identifier 'pi' has already been declared
const value;       //  SyntaxError: Missing initializer in const declaration
console.log(pi);   // Output: 3.1416
```


### Summary Table

| **Re-assign?** | **Re-declare?** | **Must Assign?** | **Block Scope?** |     |
| -------------- | --------------- | ---------------- | ---------------- | --- |
| **var**        | Yes             | Yes              | No               | No  |
| **let**        | Yes             | No               | No               | Yes |
| **const**      | No              | No               | Yes              | Yes |
