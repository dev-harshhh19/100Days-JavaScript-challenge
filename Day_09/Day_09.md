# Day 9

## Topics Covered
- Arrays (Intro)


> What is an Array?
- Array is an list of items in single Variable.
- Think like an storing multiple Fruits in the single bucket

---

### **Syntax**

```javascript
let list = [];
```
- Here `list` is the name of the array variable.
- Square brackets `[ ]` are used to define an array.

---

## Example
> Here is an example of an array in JavaScript.

```javascript
let color = ['red', 'Blue', 'Green']
```
- Here `color` is an array variable which stores multiple color names.
- Items are separated by commas.

---

#### **Basic operations on Array**
```javascript
console.log(color[0]); // Accessing first item 'red'
console.log(color[1]); // Accessing second item 'Blue'
```
--- 

#### **1. Modifying Items**
```javascript
color[0] = 'Pink'; // Changing first item to 'Pink'
console.log(color);
```
---

#### **2. Adding Items**
```javascript
color.push("Purple"); // Adding 'Purple' at the end
console.log(color);
```
---

#### **3. Removing Items**
```javascript
color.pop();
color.shift(); // Removes last and first items respectively
console.log(color);
```
---
#### **4. Finding index**
```javascript
let index = color.indexOf('Green'); // Finds index of 'Green'
console.log(index); // Outputs: 2
```
---
#### **5. Array Length**
```javascript
console.log(color.length); // Outputs the number of items in the array
```

---

## Real World Example
```javascript
let cart = ['Monitor','Graphics_card','Laptop','Keyboard','Mouse']
cart.push('Headphones'); // Adding item to cart

cart.pop(); // Removing last item from cart

if (cart.indexOf('Laptop') !== -1) {
    console.log('Laptop is in the cart');
}
```

---

# Summary
- Arrays are used to store multiple values in a single variable.
- You can access, modify, add, and remove items from an array using various methods.    
- Arrays are zero-indexed, meaning the first item is at index 0.


|Operation |	Method
|-----------|-------
|Add (end)	|.push()
|Add (start)	|.unshift()
|Remove (end)	|.pop()
|Remove (start)	|.shift()
|Find index	|.indexOf()
|Check existence	|.includes()
|Length	|.length

---
 
## Practice Problems

**Find the maximum number in an array**
```javascript
let numbers = [33,44, 11, 63, 8];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(max);
```
---
