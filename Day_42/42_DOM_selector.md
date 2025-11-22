# Day 42: DOM Selector

Today O learn how to use DOM selectors to manipulate and access elements in a web page using JS.

> #### Selecting Elements Properly
- Javascript provides several methods to select elements from the DOM.
1. **By ID**:
```javascript
const updateId = document.getElementById('myUpdatedId');
```
2. **By Class Name**:
```javascript
const updateClass = document.getElementsByClassName('myUpdatedClass');
```
3. **By Tag Name**:
```javascript
const UpdateTag = document.getElementsByTagName(`div`);
```
1. **Modern & most common**: `querySelector` and `querySelectorAll`
```javascript
const firstButton = document.querySelector("button"); // Selects the first button
const allButtons = document.querySelectorAll("button"); // Selects all buttons
const specialButton = document.querySelector(".special-button"); // Selects by class
const uniqueElement = document.querySelector("#unique-element"); // Selects by ID
```
- This method accepts any CSS selector
- Most flexible and recommended for modern JS.
---
> #### Changing Text Content
1. `textContent`:
- Sets plain text (no HTML rendering)
```javascript
title.textContent = "Hello, JavaScript!";
```
2. `innerText`:
- Similar to textContent but considers visual rendering (rarely needed)
```javascript
title.innerText = "Hello, JavaScript!";
```
3. `innerHTML`:
- Injects HTML (must be used careful with user-generated content)
```javascript
content.innerHTML = "<strong>Bold Text</strong>";
```
---
> #### CSS Manipulation
1. **Inline Styles**:
```javascript
title.style.color = "black";
title.style.fontSize = "24px";
```
2. **Class Manipulation**:
```javascript
title.classList.add("active");
title.classList.remove("hidden");
title.classList.toggle("highlight");
```
- keeps CSS separate from JS logic.
---
### Small Example
#### [Check here](index.html)
---
# Summary of Day 42
- DOM selectors are essential for accessing and manipulating web page elements.
- `querySelector` and `querySelectorAll` are the most versatile methods for selecting elements.
- Text content can be changed using `textContent`, `innerText`, and `innerHTML`.
- CSS styles can be modified directly or by manipulating classes for better separation of concerns.
---