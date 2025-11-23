# Day 43 - DOM Traversal

> #### DOM Traversal:
- DOM Traversal means navigating between elements in the Document Obejct model (DOM).
- Js provides several properties to move up, down, and sideways in the DOM tree.

1. `parentElement`(**Up**): This property returns the parent element of the specified element.
    - gets **parent node** from the selected node. 
```javascript
const child = document.querySelector('.child');
console.log(child.parentElement) // Outputs the parent element of the child 
console.log(child.parentElement)[0]; // Outputs the first child of the parent element
```

2. `children`(**Down**): Returns a live HTMLCollection of child elements of the sepecified element.
```javascript
const list = document.querySelector('.list');
console.log(list.children); // Outputs all child elements of the list
```

3. `nextElementSibling`(**Sideways/right**): Gets the next sibiling element of the specified element.
```javascript
const item = document.querySelector('.item');
console.log(item.nextElementSibling); // Outputs the next sibling element of the item
```

4. `previousElementSibling`(**Sideways/left**): Gets the previous sibiling element of the specified element.
```javascript
const item = document.querySelector('.item');
console.log(item.previousElementSibling); // Outputs the previous sibling element of the item
```
---

### Example [Check here](./index.html)
### Small practical usr case example: [Check here](./example.html)
---

# Summary
- Learned about DOM Traversal and how to navigate through the DOM tree using JavaScript properties like `parentElement`, `children`, `nextElementSibling`, and `previousElementSibling`.
---