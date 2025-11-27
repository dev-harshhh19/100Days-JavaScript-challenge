# Day 47 - Creating Elements Dynamically
- In JavaScript, you can build HTML elements on the fly using the DOM API. This is super useful when you need to add content based on user actions, fetch data from APIs, or build interactive interfaces.

---
1. `document.createElement()`: 
   - This methods creates a new HTML element, but it won't appear on the page until you attach it to the DOM.
```javascript
const newDiv = document.createElement("div");
```
2. Adding Content
    - You can add text using `textContent`
```javascript
newDiv.textContent = `Hello, I was created dynamically!`
```
`innerHTML` (Use carefully!)
```javascript
newDiv.innerHTML = `<strong>Hello, I was created dynamically!</strong>`
```
3. Adding Attributes/Classes
```javascript
newDiv = "dynamicDiv";
newDiv.classList.add("card", "highlight");
newDiv.setAttrubute("data-role", "box");
```
4. Appending to the DOM
   - Use `appendChild()` or `append()` to add the element to the page:
```javascript
document.body.appendChild(newDiv);
```
Or inside a specific element:
```javascript
const container = document.getElementById("Container");
container.appendChild(newDiv);
```
---
> ### Example
```javascript
// 1. Create element
const card = document.createElement("div");

// 2. Add content
card.textContent = "I am a dynamically created card!";

// 3. Add styles/classes
card.classList.add("card");

// 4. Insert into page
document.body.appendChild(card);
```
---
> ### Creating multiple elements with loops
```javascript
for (let i = 1; i <= 5; i++) {
  const item = document.createElement("p");
  item.textContent = `Item number ${i}`;
  document.body.appendChild(item);
}
```
> ### Create and attach elements more efficiently (Fragment)
```javascript
const fragment = document.createDocumentFragment();

for (let i = 1; i <= 1000; i++) {
  const p = document.createElement("p");
  p.textContent = `Paragraph ${i}`;
  fragment.appendChild(p);
}

document.body.appendChild(fragment);
```
---
**NOTE**: `Due to family function the exaplanation and notes could be incomcomplete, Sorry for the inconvenience` 