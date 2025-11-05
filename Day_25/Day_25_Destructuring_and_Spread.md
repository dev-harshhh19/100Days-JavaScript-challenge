# Day 25

## Topic Covered
- Destructuring 
- Spread 
---

### Destructuring
>What is Destructuring?
- Destructuring is a syntax that allows you to unpack values from array or object into distinct variables.
  
>Array Destructuring
```javascript
const arr = [1, 2, 3, 4];

// Without Destructuring
const first = arr[0];
const second = arr[1];

// With Destructuring
const [first, second, ...rest] = arr;
const [first, , third] = arr; // Skips the second element
console.log(first, third); // 1 3
console.log(first, second, rest); // Output: 1 2 [3, 4]
```
- In the above example, we use array destructuring to extract the first two elements of the array into variables `first` and `second`, and the rest of the elements into an array called `rest`.
- The `...rest` syntax is known as the rest operator, which collects the remaining elements into an array.
---
### Object Destructuring
- For objects, destructuring allows you to extract properties into variables.
```javascript
const obj = {name: "Harshad" , age: 19};

/*
// Without destructuring
const name = obj.name;
const age = obj.age;
*/

// With destructuring
const { name, age } = obj;
console.log(name, age);

// You can also rename variables during destructuring
const { name: fullName, age: years } = obj;
console.log(fullName, years); // Harshad 19
```
- In the above example, we use object destructuring to extract the `name` and `age` properties from the `obj` object into variables with the same names. We also demonstrate how to rename the variables during destructuring.
---
### Nested Destructuring
- Destructuring can also be used with nested objects and arrays.
```javascript
const nestedObj = {
    person: {
        name: "Harshad",
        age: 19,
        qualification: {
            degree: "Computer Science",
            year: 2027
        }
    }
}
const { person: { personName, qualification: { degree } } } = nestedObj;
console.log(name, degree); // Harshad Computer Science
```
- In the above example, we use nested destructuring to extract the `name` property from the `person` object and the `degree` property from the nested `qualification` object.
- This allows us to access deeply nested properties in a concise manner.
---
### Spread Operator
>What is Spread Operator?
- The spread operator (`...`) allows an iterable such as an array or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
  
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]
```
- In the above code, we use the spread operator to combine two arrays `arr1` and `arr2` into a new array called `combined`.
- The spread operator expands the elements of both arrays into the new array.
---

### Object Spread
- The spread operator can also be used with objects to create a new object by copying peoperties from existing objects.
```javascript
const obj1 = {name: "Harshad", age: 19};
const obj2 = {qualification: "Computer Science", year: 2027};
const combinedObj = {...obj1, ...obj2};
console.log(combinedObj); // Output: {name: "Harshad", age: 19, qualification: "Computer Science", year: 2027}
```
- In the above code, we use the spread operator to combine two objects `obj1` and `obj2` into a new object called `combinedObj`.
- The spread operator copies the properties of both objects into the new object.
---

### Spread in Function Calls
- The spread operator can also be used to pass elements of an array as individual arugments to a function.
```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = (a,b,c,d,e) => a+b+c+d+e;
console.log(sum(...numbers)); // Output: 15
```
- We use the spread operator to pass the elements of the `numbers` array as individual arguments to the `sum` function.
- This allows use to easily pass arrays to funcitions that expect separate arguments.
---

## Task 
Q. Clone and merge arrays using spread operator
```javascript
const taskArray1 = [10, 20, 30];
const taskArray2 = [40, 50, 60];
const clonedArray = [...taskArray1];
const mergedArray = [...taskArray1, ...taskArray2];
console.log(clonedArray); // Output: [10, 20, 30]
console.log(mergedArray); // Output: [10, 20, 30, 40, 50, 60]
```
---

# Summary
- Destructuring allows you to unpack values from arrays or objects into distinct variables.
- The spread operator (`...`) allows you to expand iterables like arrays and objects in various
- contexts, such as array literals, object literals, and function calls.
- Both destructuring and the spread operator are powerful features in JavaScript that enhance code readability and conciseness.
- They are widely used in modern JavaScript development for handling data structures efficiently.
---
