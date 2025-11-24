# Day 44 - Introduction to Events

> #### Introduction to Events.
- Events are actions or occurrences that happen in the browser and can be detected by the code.
- When something happens, like a user clicking a button or a page loading, you can make javaScript respond to that action.

> #### What is an Event?
- An event is something that user or browser does.
- Example
    - Clicking a button
    - Typing in an input field
    - scrolling a page
    - Submmiting a form
    - loading a webpage
    - etc. 
---
1. `click` - Triggered when a user clicks on an element (like buttons).
```javascript
button.addEventListener('click', function() {
    alert('Button was clicked!');
});
```
- `alert()` is a function that shows a popup message to the user.
---
2. `input` - Fires every time the value inside an input field chnages (as you type).
```javascript
inputField.addEventListener('input', function() {
    console.log(`Current input value: ${inputField.value}`);
});
```
---
3. `change` - Fires when the user finishes chnaging value (after pressing Enter or clicking away).
```javascript
inputField.addEventListener('change', function() {
    console.log(`Final input value: ${inputField.value}`);
});
```
---
4. `submit` - Triggered when a form is submitted.
```javascript
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});
```
- `event.preventDefault()` stops the form from submitting in the traditional way (which would reload the page).
---

> #### Why Event matters?
- Event let you make your webpage interactive and responsive to user actions.
- Without events, a webpage is just a static text and images.
- With events, you can:
    - Build button counter
    - Create dynamic forms
    - Create interactive games
    - And much more!
---
- ### [Example](./Intro_Event.html)
- ### [Number Counter](./button_counter.html)
- ### [Task / Exercise](./TASK/task.html)
---

# Summery of Day 44
- Events are actions that happen in the browser.
- You can use events to make your webpage interactive.
- Common events include `click`, `input`, `change`, and `submit`.
- Event listeners allow you to run code in response to these events.
- Events are essential for creating dynamic and engaging web experiences.
---