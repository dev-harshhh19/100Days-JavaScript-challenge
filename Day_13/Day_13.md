# Day 13

## Topic Covered
- **string methods**

---

> What is string method
- It allows you to perform certain operations on strings.
- Strings are immutable, they cannot be changed, but string methods can return new strings based on the original string.

---

## String methods

### 1. `length` 

```javascript
let name = 'Javascript';
console.log(name.length); // Output: 10
```
- It returns the length of the string.
---

### 2. `toUpperCase()/toLowerCase()`

```javascript
let greet = "Hello world";
console.log(greet.toUpperCase());   // Output: "HELLO WORLD"
console.log(greet.toLowerCase());   // Output: "hello world"
```
- It converts the string to uppercase or lowercase.
---

### 3. `indexOf(substring)`

```javascript
let text = "Hello, I am Harshad, Please visit harshadnikam.me";
console.log(text.indexOf("Harshad")); // Output: 10
```
- It returns the index of the first occurrence of the specified substring.
  
---
### 4. `slice(start, end)`

```javascript
let lang = "JavaScript";
console.log(lang.slice(0,4)); // Output: "Java"
console.log(lang.slice(4)); // Output: "Script"
```
- It extracts a section of the string and returns it as a new string.
---

### 5. `substring(start, end)`

```javascript
let word = "programming";
console.log(word.substring(0,7)); // Output: "program"
console.log(word.substring(7)); // Output: "ming"
```
- It is similar to `slice()`, but it does not accept negative indices.
---

### 6.substr(start, length)

```javascript
let phrase = "Learning JavaScript is fun";
console.log(phrase.substr(9,10)); // Output: "JavaScript"
```
- It extracts a substring from the string, starting at the specified index and extending for a given number of characters.
---

### 7. `replace()/replaceAll()`

```javascript
let msg = "Hello I love Porsche. Porsche is my dream car.";
console.log(msg.replace("Porsche", "BMW")); // Output: "Hello I love BMW. Porsche is my dream car."
console.log(msg.replaceAll("Porsche", "BMW")); // Output: "Hello I love BMW. BMW is my dream car."
```

- It replaces the first occurrence or all occurrences of a specified substring with a new substring.
---

### 8. `trim(), trimStart(), trimEnd()`

```javascript
let input = "       JavaScript     ";
console.log(input.trim()); // Output: "JavaScript"
console.log(input.trimStart()); // Output: "JavaScript   "
console.log(input.trimEnd()); // Output: "   JavaScript"
```
- It removes whitespace from both ends, the start, or the end of the string.
---

### 9. `split`

```javascript
let sentence = "BMW , Audi , Porsche , Ferrari";
console.log(sentence.split(",")); // Output: ["BMW ", " Audi ", " Porsche ", " Ferrari"]
```
- It splits a string into an array of substrings based on a specified separator.
---

### 10. `includes()`

```javascript
let statement = "I love coding in JavaScript";
console.log(statement.includes("coding")); // Output: true
console.log(statement.includes("C/C++")); // Output: false
```
- It checks if a string contains a specified substring and returns a boolean value.
---

### 11. `startsWith()/endsWith()`

```javascript
let filename = "Day_13.js";
console.log(filename.startsWith("Day")); // Output: true
console.log(filename.endsWith(".js")); // Output: true
```
- It checks if a string starts or ends with a specified substring and returns a boolean value.
---

### 12. `charAt()`

```javascript
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(alphabet.charAt(0));    // Output: "A"
```
- It returns the character at the specified index in a string.
---

### 13. `charCodeAt()`

```javascript
let letter = "A";
console.log(letter.charCodeAt(0)); // Output: 65
```
- It returns the Unicode value of the character at the specified index in a string.
---

# Summery
- String methods are built-in functions that allow you to manipulate and interact with strings in various ways. They help you perform tasks such as changing case, searching for substrings, extracting parts of strings, and more.