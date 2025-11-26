# Day 46 - Event Delegation

> What is Event Delegation?
- Event delegation means attaching a single event listener to a parent element instead of adding listeners to each child. Since events bubble upward through the DOM, the parent can catch events triggered on its children.
---
> Why Use It?
- Reduces the number of event listeners.
- Works automatically for dynamically added elements.
- Keeps code simpler and cleaner.
- Improves performance when many child elements are involved.
---
# Basic Example

```html
<ul id="todo-list">
  <li>Learn JavaScript</li>
  <li>Practice coding</li>
  <li>Review notes</li>
</ul>

<script>
  const list = document.getElementById('todo-list');

  list.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
      event.target.classList.toggle('done');
    }
  });
</script>

<style>
  .done {
    text-decoration: line-through;
    color: gray;
  }
</style>
```
> Explanation
- A single listener on the <ul> handles all <li> clicks. Any new <li> added later will also work automatically.
---
# Dynamic Example
```html
<button id="add">Add Item</button>
<ul id="items">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<script>
const list = document.getElementById('items');
const addBtn = document.getElementById('add');

list.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
      alert('Clicked: ' + event.target.textContent);
    }  
});

addBtn.addEventListener('click', function () {
    const li = document.createElement('li');
    li.textContent = 'Item ' + (list.children.length + 1);
    list.appendChild(li);
});
</script>
```
---
> Explanation
- Newly added <li> elements immediately inherit the click behavior because the listener is on the <ul>
---
### Key Points
- Events bubble from child to parent.
- event.target identifies which element was clicked.
- Use .matches() or tagName to check if the target is valid.
---
# Summary of Day 46
- Event delegation is a powerful technique to manage events efficiently.    
- It simplifies code and enhances performance, especially in dynamic applications.
- Practice using event delegation in your projects to see its benefits firsthand!
---