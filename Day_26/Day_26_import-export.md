# Day 26
- **Import**
- **Export**

---

## Export: named exports
- Named exports let you export multiple bindings from a module (variables, functions, classes).

Example (exports from `math.js`):
```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

Then import them in another file:
```javascript
// app.js
import { add, subtract } from './math.js';
console.log(add(2, 3));      // 5
console.log(subtract(5, 3)); // 2
```

---

## Default export
- Default export provides a single fallback value for a module.

Example (default export from `math.js`):
```javascript
// math.js
const multiply = (a, b) => a * b;
export default multiply;
```

Importing a default export uses no curly braces:
```javascript
// app.js
import multiply from './math.js';
console.log(multiply(2, 3)); // 6
```

---

## Namespace import (import everything)
- You can import the whole module as a namespace. Named exports appear by name and the default export is available as `.default`.

```javascript
// app.js
import * as math from './math.js';
console.log(math.add(2, 4));           // 6
console.log(math.subtract(9, 5));      // 4
console.log(math.default(3, 5));       // multiply via math.default -> 15
```

---

## Re-exporting (centralized exports)
- A module can re-export symbols from other modules. This is handy to create a single `util` or `index` file that aggregates exports.

Example `util.js` (re-exporting named and default exports from `math.js`):
```javascript
// util.js
export { add, subtract } from './math.js';
export { default as multiply } from './math.js';
```

Then other modules can import from `util.js`:
```javascript
// app.js
import * as util from './util.js';
console.log(util.add(4, 5));       // 9
console.log(util.multiply(4, 5));  // 20
```

This matches the code under `Day_26` (`math.js` and `util.js`) and avoids having many scattered imports.

---

## Dynamic import
- Use `import()` for lazy-loading modules at runtime. Useful for code-splitting or conditionally loading code.

```javascript
// app.js
async function loadMathModule() {
    const math = await import('./math.js');
    console.log(math.add(8, 9)); // 17
}

loadMathModule();
```

Dynamic imports return a promise that resolves to the module namespace object.

---

## Summary
- Named exports, default exports, namespace imports and re-exports are small building blocks that let you organize code modularly.
- Dynamic imports let you load code when needed.
---