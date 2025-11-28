# Day 48 - Removing Element from the DOM (remove(), Deleting list items)
- When working with the DOM, you'll often need to remove elements, like deleting items from a list or closing modal windows.
- The `remove()` method is a straightforward way to delete an element from the DOM.
---
1. **Using** `remove()`: 
    - Select the element you want to remove using methods like `getElementById`, `querySelector`, etc.
    - call the `remove()` method on that element.
    - The simplest and most modern way to  remove an element directly.
```html
<ul id="todo">
    <li>Learn JS </li>
    <li>Practice DOM</li>
    <li>Build projects</li>
</ul>
<script>
    const todoList = document.getElementById('todo');
    const secondItem = todoList.children[1]; // Select the second list item
    secondItem.remove(); // Removes "Practice DOM"
</script>
```
---
2. **Using** `removeChild()`:
    - This method is used on the parent node to remove a specific child node.
    - First, select the parent element, then call `removeChild()` with the child element you want to remove.
```javascript
const list = document.getElementById('todo');
const firstItem = list.children[0]; // Select the first list item
list.removeChild(firstItem); // Removes "Learn JS"
```
---
3. **Delete the last list item:**
```javascript
const list = document.querySelector('#todo');
list.lastElementChild.remove();
```
---
4. **Delete list item on Button Click**:
```html
<ul id="todo">
    <li>Comeplete Assignment <button class="delete-btn">Delete</button>
    <li>Read a book <button class="delete-btn">Delete</button>
    <li>Go for a walk <button class="delete-btn">Delete</button>
</ul>
<script>
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            btn.parentElement.remove();
        });
    });
</script>
```
- These methods provide a simple way to remove elements from the DOM, enhancing interactivity and user experience on web pages.
---
### Key Notes:
- `element.remove()` → Direct and modern wat to remove an element from the DOM.
- `parent.removeChild(element)` → Older method to remove a child from its parent.
---
### Example
#### [Check here](./practice-todo/)

# Summary:
- The `remove()` method is a simple and effective way to delete elements from the DOM.
- It is widely supported in modern browsers and is the preferred method for removing elements.
- The `removeChild()` method is an alternative that requires access to the parent element.
- Both methods are useful depending on the situation and browser compatibility requirements.
- The `remove()` method is widely supported in modern browsers and is the preferred method for removing elements.
