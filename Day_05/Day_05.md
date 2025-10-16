# DAY-5

### Topic covered 
## Conditional statement
> What is **Conditional Statements**?
 
 - Conditional Statements is allows you to execute the certain block of the code, whether a condition evaluates to `true` or `false`.
 - These are essential for controlling the flow of the program based on the different solutions.


### 1. `if` **statement**
- The `if` statement executes a block of the code only, if the specific condition if `true`
```javascript   
if ( condition ) {
	// Code to execute if condition is true.
}
```

**Example**
```javascript
let temperature = 30;
if (temperature > 25) {
    console.log("It's a hot day.");
}
```

- In this example if the condition if `false` nothing happens.
---
## 2. `else` Statement
- The `else` block runs when the if condition in the `if` statement get false.
```javascript
if ( condition ){
	// Code if the consition is true
} else {
	// Code if the condition is false
}
```

**Example**
```javascript
let age = 17;
if (age < 18) {
    console.log("You are a minor.");
}else{
    console.log("You are an Adult.");
}
```

- If `age` is less than 18, it will log "You are a minor."
  
---

## 3. `else-if` Statement

- You can chain the multiple conditions using `else if`. This allows to test the more than single condition in sequence.
```javascript
if ( condition1 ){
	//code if condition1 is true;
} else if ( condition2 ) {
	// Code if the condition2 is true;
} else {
	// Code if non of the conditions are true. 
}
```

**Example**
```javascript
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
}else if (score >= 80) {
    console.log("Grade: B");
}else{
    console.log("Grade: C");
}
```

- if `age` is less than 18, "**You are a minor.**" will be printed.
- If `age` is between 18 and 65, "**You are an adult.**" will be printed.
- Otherwise, "**You are a senior.**" will be printed. 

---

## 4. Nested if-else
- A **`nested if`** means an `if` statement inside another `if` or `else` block. It helps you handle **more than 2 levels of logic**.

```javascript
let number = 15;
if(number > 10){
    if(number < 20){
        console.log(`The number ${number} is between 10 and 20`);
    }
    console.log(`The number ${number} is greater than 10`);
}else{
    console.log(`The number ${number} is 10 or less`);
}


console.log(status);
```
  
---

## 5. Ternary Operator `? :`
- A shorthand for `if-else`, the ternary operator evaluates a condition and return one value if true, or another if false.

**Syntax:**
```javascript
condition ? value_if_true : value_if_false;
```

**Example**

```javascript
let num = 20;
let outPut = (num >=50) ? "Small" : "Big";
console.log(outPut);
```

- If `age` is greater than or equal to 18, the value "Adult" is assigned to `status`.
- If not, "Minor" would be assigned.

---

## 6. `switch` statement
- The `switch` case is the most structured way to handle the multiple possible conditions for a single variable
- It typically used when you need to compare one value against may possible cases.
```javascript
switch (expression){
	case value1:
		// Code block
		break
	case value2:
		// Code block
		break;
	default:
		// Code block if no case matches
}
```

**Example**

```javascript
const day = "Monday";
switch (day){
	case "Monday":
		console.log("Start of the Week");
		break;
	case "Wednesday":
		console.log("MidWeek");
		break;
	case "Friday":
		console.log("Almost Weekend");
		break;
	default:
		console.log("Just another day");
}
```

- The `switch` evaluates the value of `day` and executes the corresponding case.
- If no case matches, it will execute the `default` block.

---

# Summary
- Conditional statements are essential for controlling the flow of a program based on different conditions.

`if` Statement
- Executes code only `if` a condition is `true`.

`else` Statement
- Provides an alternative block if the `if` condition is `false`.

`else if` Statement
- Allows checking multiple conditions in sequence.

`Nested if-else`
- One `if` or `else` inside another for handling more complex logic.

`Ternary Operator (? :)`
- A shorthand version of `if-else` to assign values based on a condition.

`switch` Statement
- Used for checking a variable against multiple possible values (cases), ideal for cleaner code with many conditions.