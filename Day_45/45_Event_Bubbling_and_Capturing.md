# Day 45 - Event Bubbling & Capturing
These are two phases of event propagation in the DOM when an event is triggered (like a click or keypress event) on an element. Both are part of the event flow process, but they differ in how the event travels through the DOM.

1. Event Bubbling: 
    - What is it? In event bubbling, the event starts from the target element (the element that was actually clicked or interacted with) and "bubbles up" to the root of the document (<html>).
    - For example, if you click a button inside a div, the click event starts on the button, then bubbles up to the div, then to the body, and so on, until it reaches the document.
```html
<div id="parent">
  <button id="child">Click Me</button>
</div>

<script>
  document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent clicked');
  });

  document.getElementById('child').addEventListener('click', () => {
    console.log('Child clicked');
  });
</script>
```
- If you click the button, you'll see:
```nginx
Child clicked
Parent clicked
```
- How to stop bubbling? Use event.stopPropagation() inside the event handler.
---

2. Event Capturing:
    - What is it? In event capturing (or trickling), the event starts at the root of the DOM (typically the document), and it trickles down to the target element.
    - Example:
```html
<div id="parent">
  <button id="child">Click Me</button>
</div>

<script>
  document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent clicked');
  }, true);  // Notice the `true` for capturing

  document.getElementById('child').addEventListener('click', () => {
    console.log('Child clicked');
  });
</script>
```
- If you click the button, you'll see:
```nginx
Parent clicked
Child clicked
```
In this case, the event starts at the parent and goes down to the child because we passed true as the third argument, indicating that the event should be handled during the capturing phase.
---

3. Default Event Flow
- The default flow is bubbling (not capturing).
- However, capturing can be used if needed, by setting the third argument of addEventListener to true.

### Key differences:
- Bubbling: Event starts from the target and goes up.
- Capturing: Event starts from the root and goes down.

### Practical Use:
- **Bubbling** is commonly used for things like event delegation. If you have many child elements (e.g., list items) and want to handle events for them in a single handler on the parent, bubbling allows you to do that efficiently.
- **Capturing** might be useful when you want to catch events before they reach certain elements (for example, preventing some events from being triggered in certain scenarios).
---
```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  document.getElementById('list').addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      alert(`You clicked on ${event.target.textContent}`);
    }
  });
</script>
```
---
# Summary of Day 45
- **Event Bubbling** and Capturing are two phases of event propagation in the DOM.
- **Bubbling**: Event starts from the target element and bubbles up to the root.
- **Capturing**: Event starts from the root and trickles down to the target element.
- **Default event** flow is bubbling, but capturing can be enabled by passing true as the third argument to `addEventListener`.
- Use **bubbling** for event delegation and capturing for preemptive event handling.    
---