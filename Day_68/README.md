# Day 68 - ES6 Modules

## What are ES6 Modules?
ES6 modules let you split youy Javascript code into separate files and share functionality b/w them using `import` and `export` statements.
This helps with:
- Better code organization
- Reusability
- Maintainability
- Avoiding global scope pollution
---
## Exporting from a Module
You can export variables, functions, or classes from a module using the `export` keyword.
```javascript
//mathUtils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```
You can also use `export default` to export a single value from a module.
```javascript
//greet.js
export default function greet(name) {
  return `Hello, ${name}!`;
}
```
--- 

## Mixing Default + Named Exports
You can mix default and named exports in a single module.
```javascript
//utils.js
export const multiply = (a, b) => a * b;
export default function divide(a, b) {
  return a / b;
}
```
---

## Importing from a Module
You can import named exports using curly braces `{}`.
```javascript
//mathUtils.js
import { add, subtract } from './mathUtils.js';
console.log(add(2, 3)); // 5
```
You can import the default export without curly braces.
```javascript
//greet.js
import greet from './greet.js';
console.log(greet('Harshad')); // Hello, Harshad!
```
You can also import both default and named exports from a module.
```javascript
//utils.js
import divide, { multiply } from './utils.js';
console.log(divide(10, 2)); // 5
```
---

## Import Everything from a Module
You can import all exports from a module using the `* as` syntax.
```javascript
//utils.js
import * as Utils from './utils.js';
console.log(Utils.multiply(3, 4)); // 12
```
---
## Re-exporting Modules
You can re-export exports from another module using the `export` statement.
```javascript
//mathOperations.js
export { add, subtract } from './mathUtils.js';
export { default as greet } from './greet.js';
```
This allows you to create a single module that consolidates exports from multiple modules.
```javascript
//main.js
import { add, greet } from './mathOperations.js';
console.log(add(5, 7)); // 12
console.log(greet('Harshad')); // Hello, Harshad!
```
---

## Using ES Modules in the Browser
To use ES modules in the browser, you need to include the `type="module"` attribute in your `<script>` tag.
```html
<script type="module" src="main.js"></script>
```
This tells the browser to treat the script as a module, allowing you to use `import` and `export` statements.

NOTE:
    - Modules are defered by default
    - Must use relative path
    - Works best with a local server (not `file://`)

---

## ES Modules vs CommonJS
| ES Modules             | CommonJS                   |
| ---------------------- | -------------------------- |
| `import / export`      | `require / module.exports` |
| Static                 | Dynamic                    |
| Browser + Node         | Node mainly                |
| Tree-shaking supported | No                         |
| Asynchronous loading   | Synchronous loading        |
---

[TASK](../Day_68/TASK/README.md) 
---

# Summary
- ES6 modules allow you to organize your code into separate files using `import` and `export`.
- You can export multiple named exports or a single default export from a module.
- You can import named exports using curly braces and default exports without them.
- You can import all exports from a module using the `* as` syntax.
- You can re-export exports from another module to consolidate them.
- To use ES modules in the browser, include the `type="module"` attribute in your `<script>` tag.
- ES modules are static, support tree-shaking, and can be used in both browsers and Node.js, while CommonJS is dynamic and primarily used in Node.js.
- ES modules are the modern standard for modular JavaScript development.
---