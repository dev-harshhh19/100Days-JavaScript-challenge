# Day 15

## Topic Covered
- Date
- Math Object

---

# **`Date`**

### 1. Creating Date
- The `Date` object helps you to **work with dates and times**.
- You can **create**, **manipulate**, and **format** dates using the `Date` object.
---
```javascript
const now = new Date();
console.log(now); // Current date and time

const birthdate = new Date(2000, 1, 1);
console.log(birthdate); // February 1, 2000

const specificDate = new Date('2025-10-25T10:30:00');
console.log(specificDate); // October 25, 2025, 10:30 AM
```
- You can create a date object in multiple ways:
  - Using the current date and time.
  - By specifying year, month, day, hours, minutes, seconds, and milliseconds.
  - By passing a date string.
---
### 2. Getting and Setting Date Components
```javascript
const today = new Date();

console.log(`Year: ${today.getFullYear()}`); // Get the year
console.log(`month: ${today.getMonth() + 1}`); // Get the month (0-11, so add 1)
console.log(`Date: ${today.getDate()}`); // Get the day of the month
console.log(`Day: ${today.getDay()}`); // Get the day of the week
console.log(`Hour: ${today.getHours()}`); // Get the hour
console.log(`Minutes: ${today.getMinutes()}`); // Get the minutes
console.log(`Seconds: ${today.getSeconds()}`); // Get the seconds
console.log(`Milliseconds: ${today.getMilliseconds()}`); // Get the milliseconds
```
- You can retrieve various components of a date using methods like `getFullYear()`, `getMonth()`, `getDate()`, etc.
---
### 3. Setting Date components  
```javascript
const newEvent = new Date();

newEvent.setFullYear(2030); // Set the year
newEvent.setMonth(11); // December (0-11)
newEvent.setDate(25); // Set the day of the month
console.log(newEvent); // Wed Dec 25 2030 ...
```
- You can modify date components using methods like `setFullYear()`, `setMonth()`, `setDate()`, etc.
- ---
### 4. Formatting Dates
```javascript
const d = new Date();
const formattedDate = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
console.log(`Formatted Date: ${formattedDate}`); // Formatted Date: DD/MM/YYYY
```
- You can format dates into readable strings using methods like `toLocaleDateString()`, `toISOString()`, etc.
---
---

# **`Math` Object**
- The `Math` object provides properties and methods for mathematical constants and functions.
- It is not a function object.
---

### 1. Common Math Constants and Methods
```javascript
console.log(Math.PI); // 3.141592653589793
console.log(Math.floor(4.7)); // 4
```

> Methods of Math Object

| Method              | Description                 | Example             | Output    |
| ------------------- | --------------------------- | ------------------- | --------- |
| `Math.round(x)`     | Round to nearest integer    | `Math.round(4.6)`   | 5         |
| `Math.ceil(x)`      | Round **up**                | `Math.ceil(4.2)`    | 5         |
| `Math.floor(x)`     | Round **down**              | `Math.floor(4.9)`   | 4         |
| `Math.trunc(x)`     | Remove decimal part         | `Math.trunc(4.9)`   | 4         |
| `Math.pow(a, b)`    | Exponent (a to the power b) | `Math.pow(2, 3)`    | 8         |
| `Math.sqrt(x)`      | Square root                 | `Math.sqrt(9)`      | 3         |
| `Math.abs(x)`       | Absolute value              | `Math.abs(-7)`      | 7         |
| `Math.min(...nums)` | Smallest number             | `Math.min(3, 7, 2)` | 2         |
| `Math.max(...nums)` | Largest number              | `Math.max(3, 7, 2)` | 7         |
| `Math.random()`     | Random number (0–1)         | `Math.random()`     | e.g. 0.53 |
- The `Math` object provides various methods for performing mathematical operations.
- You can use these methods to perform rounding, exponentiation, finding min/max values, generating
---

### Random Number Example

```javascript
const RandomNumber = math.floor(Math.random() * 100) + 1;
console.log(`Random Number between 1 and 100: ${Randomnumber}`);
```
- You can generate random numbers using `Math.random()` and scale them to your desired range.
---

# Summery

| Concept             | Description                        |
| ------------------- | ---------------------------------- |
| **Date Object**     | Work with dates and times          |
| **Math Object**     | Perform mathematical operations    |
| **`Math.random()`** | Generates random numbers           |
| **`Date` Methods**  | Get and set year, month, day, etc. |
| **`Math` Methods**  | Round, power, min/max, etc.        |
- The `Date` and `Math` objects are essential for handling dates and performing mathematical calculations in JavaScript.
- They provide a wide range of methods to facilitate various operations related to dates and mathematics.
---
