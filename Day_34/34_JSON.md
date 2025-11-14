# **Day 34: JSON (JavaScript Object Notation)**

> Understanding what **JSON** is and how to work with it in JavaScript.

### **What is JSON?**
- **JSON** is a lightweight data interchange format.
- It’s easy for humans to read and write, and easy for machines to parse and generate.
- Commonly used for transmitting data in web applications (e.g., server ⇄ client).
- Built on two core structures:
  1. **Objects** — collections of key/value pairs  
  2. **Arrays** — ordered lists of values  
- JSON supports these data types:
  - String  
  - Number  
  - Object  
  - Array  
  - Boolean  
  - Null  

---

### **JSON Syntax**
Although JSON syntax is derived from JavaScript objects, it is **language-independent**.

#### Example:
```json
{
  "name": "Harshad",
  "age": 19,
  "isStudent": false,
  "subjects": ["JS", "C#", "React"],
  "address": {
    "street": "123 Main St",
    "city": "Mumbai",
    "zip": "400001"
  },
  "hobbies": ["Cooking", "SimRacing", "Driving"],
  "phoneNumbers": null
}
```

---

### **Working with JSON in JavaScript**

#### **Convert a JS object → JSON string (`JSON.stringify`)**
```javascript
const user = {
  name: "Harshad",
  age: 19,
  isStudent: false
};

const jsonString = JSON.stringify(user);
console.log(jsonString);
```

#### **Convert a JSON string → JS object (`JSON.parse`)**
```javascript
const jsonString = '{"name":"Harshad","age":19,"isStudent":false}';

const user = JSON.parse(jsonString);
console.log(user.name); // Harshad
```

---

### **Why JSON is Important**
- It’s the standard format for **APIs**, making it essential in web development.
- Easy to read, write, and share.
- Supported natively in almost every programming language.
- Works perfectly with JavaScript since its syntax is similar.

---

### **Practice Exercise**
1. Create a JSON object representing a **book** with:
   - title  
   - author  
   - year published  
   - genres (array)  
2. Convert the object into a JSON string and log it.  
3. Parse the string back into an object and log the **book title**.

---
# Summary
- JSON is a widely-used data format for exchanging information.
- It consists of objects and arrays, supporting various data types.
- JavaScript provides built-in methods (`JSON.stringify` and `JSON.parse`) to work with JSON data easily.