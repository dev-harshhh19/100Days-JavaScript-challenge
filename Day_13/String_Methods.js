// length
let name = "JavaScript";
console.log(name.length);

//-------------------------------------------

//toUpperCase/toLowerCase
let greet = "Hello JavaScript";
console.log(greet.toLowerCase()); // fixed: call the method
console.log(greet.toUpperCase()); // fixed: call the method

//-------------------------------------------

//indexOf
let text = "Hello, I am Harshad, Please visit harshadnikam.me";
console.log(text.indexOf("Harshad"))

//-------------------------------------------

//slice(start, end)
let lang = "JavaScript";
console.log(lang.slice(0,4));
console.log(lang.slice(4));

//-------------------------------------------

//substring (start, end)
let word = "programming";
console.log(word.substring(4));

//-------------------------------------------

//substr(start,length)
// Deprecated: use slice(start, end) instead
let phrase = "Learning JavaScript is fun";
console.log(phrase.slice(9, 19)); // "JavaScript"

//-------------------------------------------

//replace/replaceAll

let msg = "Hello I love Porsche. Porsche is my dream car.";
console.log(msg.replace("Porsche", "BMW"));
console.log(msg.replaceAll("Porsche", "BMW"));

//-------------------------------------------

//trim, trimStart, trimEnd
let input = "   JavaScript   "
console.log(input.trim());
console.log(input.trimStart());
console.log(input.trimEnd());

//-------------------------------------------

//split
let sentence = "BMW, Audi, Porsche, Ferrari"
console.log(sentence.split(", ")); // split on ", " to avoid leading spaces

//-------------------------------------------

//includes
let statement = " I love coding in JavaScript";
console.log(statement.includes("coding")); // case-sensitive
console.log(statement.includes("C/C++"));  // remains false

//-------------------------------------------

//startsWith/endsWith
let filename = "Day_13.js";
console.log(filename.startsWith("Day"));
console.log(filename.endsWith(".js"));

//-------------------------------------------

//charAt
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(alphabet.charAt(0)); // fixed: removed extra semicolon

//-------------------------------------------

// charCodeAt

let letter = "A";
console.log(letter.charCodeAt(0));

//-------------------------------------------