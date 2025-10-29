# Day 18

## Concept Covered
- Null
- Undefined
- NaN

---
### 1. Null
- `Null` is a special value in JavaScript that represents the intentional absence of any object value.
- It is often used to indicate that a variable should have no value.
```javascript
let emptyValue = null;
console.log("The Value is:", emptyValue);
console.log(emptyValue); // Output: null
```
- You can check if a variable is `null` using the strict equality operator (`===`);
---

### 2. Undefined
- `undefined` is a primitive value in javascript that indicates that a variable has been declared but has not yet been assigned a value.
- It is also the default return value of functions that do not explicitly return a value.
```javascript
let a;
console.log(a); // Output: undefined
console.log( typeof a ); // Output: "undefined"
```
- You can check if a variable is `undefined` using the strict equality operator (`===`);
---

### 3. NaN
- `NaN` stands for "Not-a-Number" and is a special numeric value that represents an "undefined" or unrepresentable value in mathematics.
- It is typically the result of invalid or undefined mathematical operations, such as dividing zero by zero or attempting to convert a non-numeric string to a number.
- You can check if a value if `NaN` using the `isNaN()` function or the `Number.isNaN()` method.
```javascript
let notANumber = 10/0; 
console.log(notANumber); // Output: Infinity
console.log(isNaN(notANumber)); // Output: false
```
- You can also use `Number.isNaN()` to check for `NaN`.
---

## Conecept Overview
| Value       | Meaning                                             | Type        | Example use case                         |
| ----------- | --------------------------------------------------- | ----------- | ---------------------------------------- |
| `undefined` | Variable declared but not assigned a value          | `undefined` | Missing value or function without return |
| `null`      | Explicitly set to “no value”                        | `object`    | Intentional absence of any object value  |
| `NaN`       | "Not a Number" — result of invalid number operation | `number`    | Invalid math or type conversion          |
---

## Comparison Table
| Expression           | Result        | Explanation                  |
| -------------------- | ------------- | ---------------------------- |
| `null == undefined`  | `true`      | Equal in *loose* comparison  |
| `null === undefined` | `false`     | Different types              |
| `NaN == NaN`         | `false`     | NaN is never equal to itself |
| `isNaN(NaN)`         | `true`      | Checks if value is NaN       |
| `typeof null`        | `"object"`    | Historical quirk in JS       |
| `typeof undefined`   | `"undefined"` | Correct type                 |
| `typeof NaN`         | `"number"`    | NaN is still a number type   |

---

# Summary
- `undefined` -> Variable declared but not assigned a value.
- `null` -> Explicitly set to “no value”.
- `NaN` -> Result of invalid number operation.
---