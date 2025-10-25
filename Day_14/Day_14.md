# Day 14

## Topic Covered
- Templete Leterals

---
> What is template literals in JavaScript?
- Template literals are an ES6 feature that makes working with string easier and more readable. 
- Instead of using single `('')` or double `("")` quotes to define a string, you use back ticks ``(`)``
--- 

## Example

```javascript
let name = "Harshad";
let age = 19;
console.log(`My name is ${name} and I am ${age} years old.`);
```

- In the above example, we used `backticks` to define the string and `${...}` to embed the variables `name` and `age` directly into the string.
---

## Types of Template Literals

### 1. String Interpolation
```javascript
let a = 5;
let b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);
```
- In this example, we used template literals to embed expressions directly within the string.
---
## 2. Multi-line Strings
```javascript
let message = `Hello,
This is a multi-line string.
Have a great day!`;
console.log(message);
```
- Here, we created a multi-line string using template literals without needing any special characters for new lines.
---
## 3. Expression Evaluation
```javascript
let price = 50;
let quantity = 7;
console.log(`Total cost is $${price * quantity}.`);
```
- In this example, we evaluated an expression directly within the template literal.
---

# Summary
- Template literals in JavaScript provide a more readable and convenient way to work with strings, allowing for string interpolation, multi-line strings, and expression evaluation.
- They enhance code clarity and reduce the need for concatenation operators.
- Template literals are defined using backticks ``(`)`` and can include embedded expressions using `${...}` syntax. 
