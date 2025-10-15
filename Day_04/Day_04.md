**What is learned in Day 4**

**Operators in JavaScript**

## Operators

- Operators are special symbols or keywords used to perform operations on values and variables.
- JavaScript provides various types of operators to handle different operations like arithmetic, comparison, logical operations, and more.

> **Arithmetic Operators**
- **Arithmetic operators** are used to perform mathematical calculations on numeric values.

```javascript
let a = 10;
let b = 5;

console.log("Addition: ", a + b);        // 15
console.log("Subtraction: ", a - b);     // 5
console.log("Multiplication: ", a * b);  // 50
console.log("Modulus: ", a % b);         // 0
console.log("Division: ", a / b);        // 2
console.log("Exponentiation: ", a ** b); // 100000
console.log("Increment: ", ++a);         // 11
console.log("Decrement: ", --b);         // 4
```

**Common Arithmetic Operators:**
- `+` : Addition
- `-` : Subtraction
- `*` : Multiplication
- `/` : Division
- `%` : Modulus (remainder)
- `**` : Exponentiation (power)
- `++` : Increment (adds 1)
- `--` : Decrement (subtracts 1)

---

> **Assignment Operators**
- **Assignment operators** are used to assign values to variables. They can also perform operations while assigning.

```javascript
let c = 20;

c = 25;   // Simple assignment
console.log("c after assignment: ", c);  // 25

c += 5;   // c = c + 5
console.log("c after += 5: ", c);        // 30

c -= 3;   // c = c - 3
console.log("c after -= 3: ", c);        // 27

c *= 2;   // c = c * 2
console.log("c after *= 2: ", c);        // 54

c /= 4;   // c = c / 4
console.log("c after /= 4: ", c);        // 13.5

c %= 3;   // c = c % 3
console.log("c after %= 3: ", c);        // 1.5

c **= 3;  // c = c ** 3
console.log("c after **= 3: ", c);       // 3.375
```

**Common Assignment Operators:**
- `=` : Simple assignment
- `+=` : Add and assign
- `-=` : Subtract and assign
- `*=` : Multiply and assign
- `/=` : Divide and assign
- `%=` : Modulus and assign
- `**=` : Exponentiation and assign

---

> **Comparison Operators**
- **Comparison operators** are used to compare two values and return a boolean result (`true` or `false`).

```javascript
let x = 10;
let y = '10';

console.log("x == y: ", x == y);      // true (value comparison)
console.log("x === y: ", x === y);    // false (value and type comparison)
console.log("x != y: ", x != y);      // false (value comparison)
console.log("x !== y: ", x !== y);    // true (value and type comparison)
console.log("x > 5: ", x > 5);        // true
console.log("x < 15: ", x < 15);      // true
console.log("x >= 10: ", x >= 10);    // true
console.log("x <= 9: ", x <= 9);      // false
```

**Common Comparison Operators:**
- `==` : Equal to (value only)
- `===` : Strict equal to (value and type)
- `!=` : Not equal to (value only)
- `!==` : Strict not equal to (value and type)
- `>` : Greater than
- `<` : Less than
- `>=` : Greater than or equal to
- `<=` : Less than or equal to

**Note:** Always use `===` and `!==` for strict comparison to avoid type coercion issues.

---

> **Logical Operators**
- **Logical operators** are used to combine or invert boolean values. They are commonly used in conditional statements.

```javascript
let p = true;
let q = false;

console.log("p && q: ", p && q);  // false (AND)
console.log("p || q: ", p || q);  // true (OR)
console.log("!p: ", !p);          // false (NOT)
console.log("!q: ", !q);          // true (NOT)
```

**Common Logical Operators:**
- `&&` : Logical AND (returns true if both operands are true)
- `||` : Logical OR (returns true if at least one operand is true)
- `!` : Logical NOT (inverts the boolean value)

---

> **Bitwise Operators**
- **Bitwise operators** perform operations on binary representations of numbers. They work at the bit level.

```javascript
let m = 5;  // Binary: 0101
let n = 3;  // Binary: 0011

console.log("m & n: ", m & n);      // 1 (Binary: 0001) - AND
console.log("m | n: ", m | n);      // 7 (Binary: 0111) - OR
console.log("m ^ n: ", m ^ n);      // 6 (Binary: 0110) - XOR
console.log("~m: ", ~m);            // -6 (Binary: ...11111010) - NOT
console.log("m << 1: ", m << 1);    // 10 (Binary: 1010) - Left Shift
console.log("m >> 1: ", m >> 1);    // 2 (Binary: 0010) - Right Shift
console.log("m >>> 1: ", m >>> 1);  // 2 (Binary: 0010) - Unsigned Right Shift
```

**Common Bitwise Operators:**
- `&` : Bitwise AND
- `|` : Bitwise OR
- `^` : Bitwise XOR
- `~` : Bitwise NOT
- `<<` : Left shift
- `>>` : Right shift
- `>>>` : Unsigned right shift

---

## Summary

### **Operator Types**

**Arithmetic Operators:**
- Perform mathematical calculations
- Examples: `+`, `-`, `*`, `/`, `%`, `**`, `++`, `--`

**Assignment Operators:**
- Assign values to variables
- Examples: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`

**Comparison Operators:**
- Compare two values and return boolean
- Examples: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **Tip:** Use `===` for strict comparison

**Logical Operators:**
- Combine or invert boolean values
- Examples: `&&` (AND), `||` (OR), `!` (NOT)

**Bitwise Operators:**
- Perform operations on binary representations
- Examples: `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`

---

### **Key Takeaways**

- **`==` vs `===`**: Use `===` to avoid type coercion
- **Increment/Decrement**: `++` and `--` can be prefix or postfix
- **Logical Short-circuit**: `&&` and `||` stop evaluating once the result is determined
- **Bitwise Operations**: Work on the binary level, useful for low-level programming

