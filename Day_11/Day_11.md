# Day 11

## Topic covered   
- objects
- classes

**What is learned:**

> What is Object?
- an object is complex data type that allows you store collections of key-value pairs.
- It can holds multiple values as properties and methods.
- Objects are one of the **fundamental structures** in JavaScript.

---

> Why use Objects?
- Logical grouping of data.
- Named access to data.
- Reusibility and organization
- Real-world modeling
- Data Abstraction

---

### Syntax to create Object

```javascript
object.key;
object["key"];
```
- It can be creating using **Dot Notation** or **Bracket Notation**.

---

### Example

```javascript
const person = {
    name: 'Harshad',
    age: 20,
    profession: 'Student',
    isActive: true,
    greet: function() {
        return `Hello, My name is ${this.name}`;
    }
}

console.log(person.name); // Dot Notation
console.log(person["age"]) // Bracket Notation

person.age = 19; // Updating value

person.city = 'Mumbai'; // Adding new key-value pair

delete person.isActive; // Deleting key-value pair

console.log(person.greet());
```

### Explanation of Example

#### **Creating an Object**
```javascript
const person = {
    name: 'Harshad',
    age: 20,
    profession: 'Student',
    isActive: true,
    greet: function() {
        return `Hello, My name is ${this.name}`;
    }
}
```
- `const person = {...}` create an function named `person`, and it contains multiple key-value pairs.
- `name`, `age`, `profession`, `isActive` are keys. Their associated values are '`harshad`,`20`,`student`,and`true`'.
- `greet` is a **method**. It uses `this.name` to access the `name` property of the object.



---

### **Accessing Objects**
```javascript
console.log(person.name); // Dot Notation
console.log(person["age"]) // Bracket Notation
```
- You can access the values of an object using **Dot Notation** or **Bracket Notation**.
- In Dot Notation, you use a dot (`.`) followed by the key name.
- In Bracket Notation, you use square brackets (`[]`) and provide the key name as a string.

---

### **Updating Objects**
```javascript
person.age = 19; // Updating value
```
- You can update the value of an existing key by assigning a new value to it using either Dot Notation or Bracket Notation.

---

### **Adding New Key-Value Pairs**
```javascript
person.city = 'Mumbai'; // Adding new key-value pair
```
- You can add new key-value pairs to an object by simply assigning a value to a new
---

### **Deleting Key-Value Pairs**
```javascript
delete person.isActive; // Deleting key-value pair
```
- You can delete a key-value pair from an object using the `delete` keyword followed by the object and the key you want to remove.

---

### **calling an object method**
```javascript
console.log(person.greet()); // Calling the greet method
```
- You can call a method defined within an object using Dot Notation followed by parentheses `()
- In this example, `person.greet()` calls the `greet` method, which returns a greeting message using the `name` property of the object.

---

### Summary
- Objects are complex data types that allow you to store collections of key-value pairs.
- You can create objects using curly braces `{}` and define properties and methods within them.
- You can access, update, add, and delete key-value pairs using Dot Notation or Bracket Notation.
- Objects are essential for organizing and managing data in JavaScript applications. key using Dot Notation or Bracket Notation.        