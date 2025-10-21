# Day 10 

## What i learned today
- map
- filter
- reduce
- forEach
- some
- every
- find

---
### 1. `map()`
- Create an new array by applying to each element in an existing array.
- uses when you want to transform each element in an array.

### Syntax
```javascript   
array.map(function(CurrentValue, Index, Array){
    // return element to new array
})
```

### Example
```javascript
const numbers = [1, 2, 3, 4, 5];
const double = numbers.map(function(num) {
  return num * 2;
});
console.log(double); // [2, 4, 6, 8, 10]
```
- takes each `num` and multiply by 2
- Returns a **new array**, original array is not modified.

---
### 2. `filter()`
- Create a new array containing elements that matches the condition.
- Used when you want to **remove** unwanted items from an array.

### Syntax
```javascript
array.filter(function(CurrentValue, Index, Array){
    // return true to keep the element, false to remove it
})
```

### Example
```javascript
const number = [1, 2, 3, 4, 5];
const evenNumbers = number.filter(function(num){
    return num % 2 === 0;
})
console.log(evenNumbers); // [2, 4]
```
- keeps only even numbers in the new array.
- A new filtered array is returned.

---

### 3. `reduce()`
- Reduces the array to a single value using a funtion.
- Used when you want to calculate a single value from an array.

### Syntax
```javascript
array.reduce(function(callback(accumulator, currentValue), initialValue){
    // return updated accumulator
})
```

### Example
```javascript
const numberr = [1, 2, 3, 4, 5];
const sum = numberr.reduce(function(acc, num){
    return acc + num;
}, 0);
console.log(sum); // 15
```
- starts with an initial value of `0` and adds each number to it.
- acc keeps track of the running total.
---

### 4. `forEach()`
- Runs an function on each array element.
- Used when you want to perform an action for each element without creating a new array.

### Syntax
```javascript
array.forEach(function(CurrentValue, Index, Array){
    // perform action
})
```
### Example
```javascript
const colors = ['Pink','Purple','Violet'];
colors.forEach(color => console.log(color));
```
- Just logs each color to the console.
- Does not return a new array.
---

### 5. `some()`
- Checks if at least one element in the array meets a condition.
- To check if something exists in an array.
### Syntax
```javascript
array.some(function(CurrentValue, Index, Array){
    // return true if condition is met
})
```

### Example
```javascript
const fruits = ['Apple', 'Banana', 'Mango'];
const hasMango = fruits.some(function(fruits){
    return fruits === 'Mango';
});
console.log(hasMango); // true
```
- returns `true` because 'Mango' is in the array.
---

### 6. `every()`
- Checks if all elements in the array meet a condition.
- used when you want to verify that all items in an array satisfies a certain criteria.

### Syntax
```javascript
array.every(function(CurrentValue, Index, Array){
    // return true if condition is met for all elements
})
```

### Example
```javascript
const games = ['Chess', 'Checkers', 'Go'];
const allHaveMoreThan3Letters = games.every(function(game) => game.length >3);
consle.log(allHaveMoreThan3Letters); // true
```
- returns `true` because all game names have more than 3 letters.
---

### 7. `find()`
- Returns the first element that meets a condition.
- Used when you want to locate a specific item in an array.
### Syntax
```javascript
array.find(function(CurrentValue, Index, Array){
    // return true if condition is met
})
```

### Example
```javascript
const locations = ['Paris', 'London', 'New York','Germany','Spain'];
const foundLocation = locations.find(function(location) => locations === ' Germany');
console.log(foundLocation); // 'Germany'
```
- returns 'Germany' as it is the first match found in the array.
- If no match is found, it returns `undefined`.

---

# Quick Summary
| Method    | Purpose                                      | Returns                     |
|-----------|----------------------------------------------|-----------------------------|
| `map()`   | Transform each element in an array          | New array                   |
| `filter()`| Remove unwanted elements from an array      | New filtered array          |
| `reduce()`| Reduce array to a single value              | Single value                |      
| `forEach()`| Perform action for each element             | Undefined                   |
| `some()`  | Check if at least one element meets a condition | Boolean (true/false)        |
| `every()` | Check if all elements meet a condition      | Boolean (true/false)        |
| `find()`  | Locate a specific item in an array          | First matching element or undefined |


# Summary
Today, I learned about several powerful array methods in JavaScript: `map()`, `filter()`, `reduce()`, `forEach()`, `some()`, `every()`, and `find()`. Each method serves a unique purpose for manipulating and querying arrays. `map()` is used to transform each element, while `filter()` helps in removing unwanted elements. `reduce()` condenses an array into a single value. `forEach()` allows performing actions on each element without returning a new array. `some()` and `every()` are useful for checking conditions across array elements, and `find()` helps locate specific items. Understanding these methods enhances my ability to work with arrays efficiently in JavaScript.
