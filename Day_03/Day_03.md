**What is learn in Day 3**

**Data Types and Type Conversion**

## Data Types

- A variable's data type is the classification that determines what kind of value it can contain.
- In Js there are two types of Data Types, **Primitive** and **Object types** (non-primitive)

> **String**
- **string** is an Data type which help to represent the textual data. String is enclosed in Quotes, either single (` ' ` ), or Double (` " `) even back-ticks (` '' `)
```javascript
let usrName = "devharshhh";
console.log(usrName);
```

Note: JavaScript will treat it as a variable name if the **Quote** is not present.

---

> **Number**
- The **number** data type used to represent the Numerical value, numbers can be Integer or floating points (Decimal).
```javascript
let age = 20;
console.log(typeof age);

let price = 9.99;
console.log(typeof price);
```

Note: If a number is declared without quotes, it will be interpreted as a string. 

---
> **Boolean**
- **Boolean** is the data type which has only type possible values; `true` or `false`. It mostly used to perform the condition check or represent binary states.

```javascript
let isHappy = true;
console.log(ishappy, typeof isHappy);
```

---

>**Undefined**
- **Undefined** is an data type which is used when a variable is defined but not yet assigned the value. 
- JavaScript automatically assigns the value as undefined to such that variable.

```javascript
let passwd;
console.log(passwd); //undefined
```

---

> **Null**
- **Null** is an data type which is used to represent the absence of any value. It 

```javascript
let user= null;
console.log(user);
```

---

> **Objects**
- Object is an non-primitive data type, used to stored collection of data. It can holds multiple values as key pairs. It can be created just using the braces `{ }`

```javascript
const person = {
	name: "Harshad",
	age: 20,
	edu: "CS",
};
console.log(person, typeof person);
```

---
> **Array**
- Array is a special types of object used to stored collection of values. Array are defined using square brackets `[ ]`
```javascript
const color = ['Red','Green','Blue','White','Purple','Pink'];
const number = [1 , 2 , 3 , 4 , 5 ];
console.log(color);
console.log(number);
```

---

> **BigInt**
- A **`BigInt`** is a special numeric data type that allows you to represent whole numbers that are too large to be safely handled by the standard `Number` type. You can create a `BigInt` by adding an `n` to the end of a number.

```javascript
const bigNumber = BigInt(1234567890123456789012345678901234567890);
console.log(bigNumber, typeof bigNumber);
```

---

> **Symbol**
- A **`Symbol`** is a unique and unchangeable (immutable) primitive data type. Its primary use is to create unique identifiers for object properties, which helps prevent accidental name clashes in your code.

```javascript
const id = Symbol('12345');
console.log(id, typeof id);
```

---

# Type Conversion (Type Casting)

> **To a String**
- **`String()`**: Converts a value to a string.

```javascript
llet score = 44;
let scoreAsString = String(score); // "100"

console.log(typeof score);         // "number"
console.log(typeof scoreAsString); // "string"
```

---

> **To a Number**
- **`Number()`**: Converts a value to a number.

```javascript
let isLoggedIn = true;
let loggedInAsNumber = Number(isLoggedIn); // 1

console.log(typeof isLoggedIn);        // "boolean"
console.log(typeof loggedInAsNumber);   // "number"
```

---

> **To a Boolean**
- **`String()`**: Converts a boolean to a string.
```javascript
console.log(Boolean(1));       // true
console.log(Boolean("hello")); // true

console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
```

--- 

## Summery

### **Data Types**

**Primitive Types**:

- `String`: Text (`"hello"`)
- `Number`: Numeric values (`10`, `9.99`)   
- `Boolean`: `true` or `false` 
- `Undefined`: Declared but no value   
- `Null`: No value (manually set)   
- `BigInt`: Very large numbers (`123n`)   
- `Symbol`: Unique identifiers
    

**Non-Primitive Types**:

- `Object`: Key-value pairs (`{ name: "John" }`)
- `Array`: List of values (`[1, 2, 3]`)
    
---

### **Type Conversion**

- **To String**: `String(value)`
- **To Number**: `Number(value)`
- **To Boolean**: `Boolean(value)`

**True values**: non-zero, non-empty  
**False values**: `0`, `""`, `null`, `undefined`, `false`