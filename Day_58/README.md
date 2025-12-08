# Day 58 - Regular Expressions ( Regex )
Regex is a sequence of characters that forms a search pattern. In JS you can use this pattern to search, match, and replace text within strings.
It is essential for validating input formats (like email, phone number, postal codes, and more), data scraping, and parsing complex log.

---

## 1. Creating a Regex
**There are two ways to create a regex in JS:**

- Literal syntax used when the pattern is constant. It uses forward slashes `/pattern/flags` as delimiters.
    ```javascript
    const regexLiteral = /hello/i; // 'i' flag for case-insensitive matching
    ```

- Constructor syntax used when the pattern is dynamic or needs to be generated at runtime.
    ```javascript
    const pattern = new RegExp('hello', 'i'); // 'i' flag for   case-insensitive matching
    ```
---
## 2. Cheat Sheet of Commonly Used Regex Patterns
   - Character Classes:
     | Token | Matches                         | Example         |
        |-------|---------------------------------|-----------------|
        | .    | Any character except newline    | /a.b/ matches "acb", "a1b" |
        | \d   | Any digit (0-9)                | /\d/ matches "3" |
        | \w   | Any word character (a-z, A-Z, 0-9, _) | /\w/ matches "A" |
        | \s   | Any whitespace character        | /\s/ matches " " |
        | \b   | Word boundary                   | /\bword\b/ matches "word" in "a word here" |
       
    ---

    - Quantifiers:
        | Token | Meaning                        | Example         |
        |-------|---------------------------------|-----------------|
        | *    | 0 or more times                | /a*/ matches "", "a", "aa" |
        | +    | 1 or more times                | /a+/ matches "a", "aa" but not "" |
        | ?    | 0 or 1 time                    | /a?/ matches "", "a" |
        | {n}  | Exactly n times                | /a{2}/ matches "aa" |
        | {n,} | n or more times                | /a{2,}/ matches "aa", "aaa" |
        | {n,m}| Between n and m times          | /a{2,4}/ matches "aa", "aaa", "aaaa" |
    ---

    - Anchors:
        | Token | Meaning         | Example                         |
        | ----- | --------------- | ------------------------------- |
        | `^`   | Start of string | `/^a/` matches `"a"` in `"abc"` |
        | `$`   | End of string   | `/a$/` matches `"a"` in `"cba"` |


    ---

    - Groups and Alternation:
        | Token | Meaning                        | Example         |
        |-------|---------------------------------|-----------------|
        | ( )  | Grouping                       | /(abc)/ matches "abc" |
        | \|   | Alternation (OR)               | /a\|b/ matches "a" or "b" |
---

## 3. Flags
Flags modify the behavior of the regex pattern:
- `i`: Case-insensitive matching
- `g`: Global search (find all matches)
- `m`: Multi-line matching

```javascript
const regex = /hello/gi; // Case-insensitive and global search
```
---
## 4. Key Methods
You can use regex with several string and regex methods but this two are the most common:
  
A. `test()` (Boolean): 
    Returns `true` if there is a match, otherwise `false`. Great for validation.
```javascript
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const testEmail = "example@example.com";

console.log(emailPattern.test(testEmail)); // true
```
B. `match()` (Array or null): 
    Returns an array of matches or `null` if no match is found. Useful for extracting data.
```javascript
const text = "The rain in Germany stays mainly in the plain.";
const regex = /ain/g;

console.log(text.match(regex)); // ["ain", "ain", "ain"]
```
---
## 5. Practical Examples : Username Validation
Lets create a constraint: A username must contain only letters and numbers, be between 3 to 16 characters long, and start with a letter.
```javascript
// ^ : Start of string
// [a-zA-Z] : First character must be a letter
// [a-zA-Z0-9]{2,15} : Followed by 2 to 15 letters or numbers
// $ : End of string
const usernamePattern = /^[a-zA-Z][a-zA-Z0-9]{2,15}$/;

const user = {
    username: "devHarshhh19",
    username2: "dev-harshhh19", // Invalid due to hyphen
    email: "example@example.com",
}
const isValidUsername = usernamePattern.test(user.username);
console.log(`Is the username valid? ${isValidUsername}`); // true
const isValidUsername2 = usernamePattern.test(user.username2);
console.log(`Is the username2 valid? ${isValidUsername2}`); // false   
```
---
## 6. Group and Range:
- `[]`(Set): Matches any one character inside the brackets.
- `[^]`(Negated Set): Matches any one character not inside the brackets.
- `()`(Group): Groups multiple tokens together and creates a capture group for extracting a substring
- `|`(Alternation): Acts like a logical OR between expressions.

```javascript
const colorPattern = /(red|green|blue)/;
const textColor = "I like green color";
console.log(colorPattern.test(textColor)); // true
```
---
## 7. Escape Characters
Certain characters have special meanings in regex. To match these characters literally, you need to escape them with a backslash `\`.
```javascript
const specialCharPattern = /\./; // Matches a literal dot '.'
const testString = "www.example.com";
console.log(specialCharPattern.test(testString)); // true
```
---
## 8. Special Sequences
- `\d`: Matches any digit (0-9)
- `\D`: Matches any non-digit
- `\w`: Matches any word character (alphanumeric + underscore)
- `\W`: Matches any non-word character
- `\s`: Matches any whitespace character (spaces, tabs, line breaks)
- `\S`: Matches any non-whitespace character

```javascript
const digitPattern = /\d+/; // Matches one or more digits
const sampleText = "There are 15 apples";
console.log(digitPattern.test(sampleText)); // true
```
---
## 9. Lookahead and Lookbehind
- **Lookahead**: Asserts that a given pattern is followed by another pattern.
  - Syntax: `X(?=Y)` - Matches `X` only if it is followed by `Y`.
- **Lookbehind**: Asserts that a given pattern is preceded by another pattern.
  - Syntax: `(?<=Y)X` - Matches `X` only if it is preceded by `Y`.

```javascript
const lookaheadPattern = /\d(?= apples)/; // Matches a digit followed by " apples"
const lookbehindPattern = /(?<=\$)\d+/; // Matches digits preceded by a dollar sign

const text1 = "I have 5 apples";
const text2 = "The price is $20";

console.log(lookaheadPattern.test(text1)); // true
console.log(lookbehindPattern.test(text2)); // true
```
---
### [Task](./SignUpform/README.md)
---
# Summary of Regex Concepts Covered
- Creating Regex: Literal and Constructor syntax
- Common Patterns: Character classes, quantifiers, anchors, groups, and alternation 
- Flags: `i`, `g`, `m`
- Key Methods: `test()` and `match()`
- Practical Example: Username validation
- Groups and Ranges
- Escape Characters
- Special Sequences
- Lookahead and Lookbehind
- This guide provides a solid foundation for understanding and using regular expressions in JavaScript for various text processing tasks.
---