# Day 49 - Forms & Basic Validation

1. **Introduction to Forms in HTML**
- A form is simply a container that collects user input and sends it somewhere (server, API, or handled by JavaScript).
- Forms are created using the `<form>` element.
   - Common form elements: `<input>`, `<textarea>`, `<select>`, `<button>`
   - Form attributes: `action`, `method`, `enctype`
```javascript
<form id="myForm">
    <input type="text" name="username">
    <button type="submit">Submit</button>
</form>
```
- Important things:
    - <form> triggers a submit event when the user clicks a submit button or presses Enter.
    - By default, it tries to reload the page and send data to the server.
---
2. **Handling Form Submission with JavaScript**:
- You can handle form submissions using JavaScript. NOT reloads the page, you must prevent the default behavior.
```javascript
const form = document.getElementById('myForm');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // stop page reload
    console.log("Form submitted!");
});
```
- Why `preventDefault()` is required:
Without it:
    - The page refreshes
    - You lose access to the form values in your JS
    - Your validation logic doesn’t run
---
3. **Getting values from form inputs**:
- You can get the values of form inputs using the `value` property.
```javascript
const username = document.getElementById('username').value;
```
- `.value` is always a string, even the number fields.
- Use `.trim()` to remove leading/trailing spaces.
---
4. **Basic Validation Logic**:
- Basic validation = checking whether the input satisfies your rules.
- Common validation checks:
    - Required fields
    - Maximum/minimum length
    - Valid email format
    - Matching passwords
```javascript
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();

    if (username === '') {
        alert('username is required');
        return;
    }
    console.log('Form is valid!');
});
```
5. **Displaying Validation Feedback**:
- You can show error messages to users when validation fails.
```javascript
const errorDiv = document.getElementById('error');
if (username === '') {
    errorDiv.textContent = 'Username is required';
    return;
} else {
    errorDiv.textContent = '';
}
```
- You can also use CSS to style error messages (e.g., red text).
```javascript
if (username === "") {
    error.textContent = "Username is required";
    error.style.color = "red";
}
```
Or by adding and removing classes:
```css
.error {
    color: red;
}
```
```javascript
errorDiv.classList.add("error");
```
---
5. **Resetting the Form**:
- After successful submission, you might want to clear the form inputs.
```javascript
form.reset();
```
- This resets all form fields to their initial values.
```javascript
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // validation logic...

    if (isValid) {
        alert("Form submitted successfully!");
        form.reset(); // Clear the form
    }
});
```
---
# Summary of Day 49
- Forms are essential for collecting user input.
- Use `e.preventDefault()` to stop the default form submission behavior.
- Get input values using the `.value` property.
- Implement basic validation to ensure data integrity.- Provide feedback to users when validation fails.
- Reset the form after successful submission using `form.reset()`.
- With these basics, you can create interactive forms that enhance user experience on your web pages!
---
