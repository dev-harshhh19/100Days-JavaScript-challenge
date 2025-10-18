## **What is learn Today**
## Functions (Basic)

> **What is Function**
- **Function** as a reusable block of the code, that performs the specific task.
- Instead of writing the same code over and over, write it in **Function**.
- Once write an code in function you can just invoke that function by its name.

#### Syntax:
```javascript
function functionName (parameter){
	// Code to be esxecuted
	return variable; // Optional: returns values
}
```
---
> Function Declaration
```javascript
function greet(){
	console.log("Hello Js");
}
```
---
> Function Expression 
```javascript
const goodBye = function(){
	console.log("Good Bye");
}
```
- You can create an function and assigning the it to a variable. 
- It known as Function Expression.
---
> How to call functions
```javascript
greet();   // Output: Hello Js
goodBye();   // Output: Good Bye
```
- Calling the functions we defined above
---
### Example:
```javascript
// Hello Js
function greet(){
	console.log("Hello Js");
}

//Good Bye
const goodBye = function (){
	console.log("Good bye");
}

greet();
goodBye();
```
---

### Parameter and Argument

- parameter are the variables defined in the function declaration
- They're like blanks the function will fill in when you use it.
```javascript
function greeting(name){
	console.log(`Hello! ${name}`); 
}

greeting("Harshad"); // Output: Hello! Harshad
```
-  `name`  is the **parameter**.
- `Harshad`  is the **argument**.
---

### **Multiple Parameter**
```javascript
function add(a, b){
	return a + b; 
}
const result = (5,7);
console.log(result); // Output: 12
```

- `a` and `b` are **parameters**.
- `5` and `3` are **arguments** passed during the call.
---

### **Default Parameter**
```javascript
function car (car = BMW){
	console.log(`${car} is Nice`);
}

car();
car("Porsche");
```
- You can assign default values to parameters
---

# summery
- Functions are fundamental building blocks in JavaScript.
- - They help you write **clean, DRY (Don't Repeat Yourself)** code.
- There are **two main ways** to define functions:
	- **Function Declaration**
	- **Function Expression**
- You can pass values into functions using **parameters and arguments**.
- JavaScript allows:
    - **Multiple parameters**
    - **Default parameter values**
- Functions may return values using the `return` keyword, or simply perform actions like logging to the console.