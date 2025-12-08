# Day 58 - Regular Expressions (Regex)

Regex is a sequence of characters that forms a search pattern. In JS you can use this pattern to search, match, and replace text within strings.  
It is essential for validating input formats (like email, phone number, postal codes, and more), data scraping, and parsing complex logs.

---

## 1. Creating a Regex

**There are two ways to create a regex in JS:**

- **Literal syntax** — used when the pattern is constant. It uses forward slashes `/pattern/flags`.

```javascript
const regexLiteral = /hello/i; // 'i' flag for case-insensitive matching
```

- **Constructor syntax** — used when the pattern is dynamic or generated at runtime.

```javascript
const pattern = new RegExp('hello', 'i'); // 'i' flag for case-insensitive matching
```

---

## 2. Cheat Sheet of Commonly Used Regex Patterns

### Character Classes

| Token | Matches                                | Example                                     |
|-------|-----------------------------------------|---------------------------------------------|
| `.`   | Any character except newline            | `/a.b/` matches `"acb"`, `"a1b"`            |
| `\d`  | Any digit (0-9)                         | `/\d/` matches `"3"`                        |
| `\w`  | Any word character (a-z, A-Z, 0-9, \_)  | `/\w/` matches `"A"`                        |
| `\s`  | Any whitespace character                | `/\s/` matches `" "`                        |
| `\b`  | Word boundary                           | `/\bword\b/` matches `"word"`               |
---
### Quantifiers

| Token   | Meaning               | Examples matched                            |
|---------|------------------------|----------------------------------------------|
| `*`     | 0 or more times        | `a*` → `""`, `"a"`, `"aa"`                   |
| `+`     | 1 or more times        | `a+` → `"a"`, `"aa"` (not `""`)              |
| `?`     | 0 or 1 time            | `a?` → `""`, `"a"`                           |
| `{n}`   | Exactly n times        | `a{2}` → `"aa"`                              |
| `{n,}`  | n or more times        | `a{2,}` → `"aa"`, `"aaa"`                    |
| `{n,m}` | Between n and m times  | `a{2,4}` → `"aa"`, `"aaa"`, `"aaaa"`         |
---
### Anchors

| Token | Meaning           | Example                                |
|-------|-------------------|------------------------------------------|
| `^`   | Start of string   | `^a` matches `"a"` in `"abc"`           |
| `$`   | End of string     | `a$` matches `"a"` in `"cba"`           |
---
### Groups & Alternation

| Token | Meaning             | Example                                |
|--------|----------------------|------------------------------------------|
| `( )`  | Grouping             | `(abc)` matches `"abc"`                  |
| `\|`   | Alternation (OR)     | `a\|b` matches `"a"` or `"b"`            |

---

## 3. Flags

Flags modify regex behavior:

- `i` : Case-insensitive  
- `g` : Global (find all matches)  
- `m` : Multi-line  

```javascript
const regex = /hello/gi; // Case-insensitive + global
```

---

## 4. Key Methods

You can use regex with several string/regex methods. Two of the most common are:

### A. `test()` → Boolean  
Returns `true` if matched, else `false`.

```javascript
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(emailPattern.test("example@example.com")); // true
```

### B. `match()` → Array or `null`  
Returns matched content.

```javascript
const text = "The rain in Germany stays mainly in the plain.";
const regex = /ain/g;

console.log(text.match(regex)); // ["ain", "ain", "ain"]
```

---

## 5. Practical Example — Username Validation

Requirements:  
- Only letters & numbers  
- Length: 3–16  
- Must start with a letter  

```javascript
const usernamePattern = /^[a-zA-Z][a-zA-Z0-9]{2,15}$/;

const user = {
    username: "devHarshhh19",
    username2: "dev-harshhh19", // Invalid due to hyphen
    email: "example@example.com",
}

console.log(usernamePattern.test(user.username));  // true
console.log(usernamePattern.test(user.username2)); // false
```

---

## 6. Group and Range

- `[]` : Set — matches any one character inside  
- `[^]` : Negated set — matches anything NOT inside  
- `()` : Group — creates captured group  
- `|` : OR (alternation)  

```javascript
const colorPattern = /(red|green|blue)/;
console.log(colorPattern.test("I like green color")); // true
```

---

## 7. Escape Characters

Escape special characters using `\`.

```javascript
const specialCharPattern = /\./;
console.log(specialCharPattern.test("www.example.com")); // true
```

---

## 8. Special Sequences

- `\d` → digit (0–9)  
- `\D` → non-digit  
- `\w` → word character  
- `\W` → non-word  
- `\s` → whitespace  
- `\S` → non-whitespace  

```javascript
const digitPattern = /\d+/;
console.log(digitPattern.test("There are 15 apples")); // true
```

---

## 9. Lookahead and Lookbehind

### Lookahead
`X(?=Y)` → Match X only if followed by Y

### Lookbehind
`(?<=Y)X` → Match X only if preceded by Y

```javascript
const lookaheadPattern = /\d(?= apples)/;
const lookbehindPattern = /(?<=\$)\d+/;

console.log(lookaheadPattern.test("I have 5 apples")); // true
console.log(lookbehindPattern.test("The price is $20")); // true
```

---

### [Task](./SignUpform/README.md)

---

# Summary of Regex Concepts Covered

- Creating Regex (Literal & Constructor)
- Character classes  
- Quantifiers  
- Anchors  
- Groups & Alternation  
- Flags (`i`, `g`, `m`)  
- Methods: `test()`, `match()`  
- Username validation example  
- Groups & ranges  
- Escaping characters  
- Special sequences  
- Lookahead & lookbehind  

---

