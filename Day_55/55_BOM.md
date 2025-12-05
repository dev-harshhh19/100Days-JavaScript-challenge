# Day 55 - BOM ( Browser Object Model )

While the **DOM (Document Object Model)** is all about the content on the page (HTML/CSS), the **BOM (Browser Object Model)** is about the browser itself (the window, the URL bar, the back button, etc.).

## 1. What is BOM?
- The BOM allows Javascript to "talk" to the browser. Unlike the DOM, theres no official standard for the BOM, but modern browsers have largely agreed on how it should work.
- The BOM provides objects like `window`, `navigator`, `screen`, `location`, and `history` that let you interact with the browser.
- The `window` object is the global object in a browser environment. All global variables and functions become properties and methods of the `window` object.
- **The hierarchy**: At the very top is the `window` object. Every other object ( including DOM's `document` object ) is a child of the `window` object.
---
## 2. The `window` Object 
The `window` object represents the browser window. It is the **global object** in JS when running in a browser.

### Key concepts:
All global javascript obejcts, functions, and variables automatically become members of the `window` object. Even `console.log()` is technically `window.console.log()`.

### Common properties and Methods:
- `window.innerHeight`/`window.innerWidth`: Viewport dimensions.
- `window.open()`/`window.close()`: Open/close browser windows.
- `window.alert()`, `window.confirm()`, `window.prompt()`: Dialog boxes.

```javascript
// Check the size of the browser window
console.log(`Height: ${window.innerHeight}, Width: ${window.innerWidth}`);

// Show an alert dialog
window.alert("Hello from the BOM!");
```
---
## 3. The `location` Object (The URL Bar/Address Bar)
The `window.location` object contains information about the current URL and allows you to manipulate it. 

### Comon properties and Methods:
- `location.href`: The full URL of the current page.
- `location.protocol`: The protocol (http:, https:).
- `location.host`: Return the hostname and port (e.g., https://www.harshadnikam.me:443).
- `location.pathname`: Returns the path and filename (e.g., /index.html).
- `location.reload()`: Reloads the current page.

```javascript
// Log the current URL
console.log(`Current URL: ${window.location.href}`);
// Redirect the user (Uncomment to test)
// window.location.href = "https://www.example.com";

// Reload the page
window.location.reload();
```
---
## 4. The `history` Object (Browser History)
The `window.history` object allows you to interact with the browser's session history (the pages visited in the tab or frame).
For security reasons, you cannot read the actual URLs in the history, but you can navigate through it.

### Common Methods:
- `history.back()`: Go back one page.
- `history.forward()`: Go forward one page.
- `history.go(n)`: Go forward or backward `n` pages. 

```javascript
// Go back one page in history
window.history.back();

// Go forward one page in history
window.history.forward();
```
---
## 5. The `navigator` Object (Browser Information)
The `window.navigator` object contains information about the visitor's browser and operating system.

### Common properties:
- `navigator.userAgent` : A string of data about the browser version and OS.
- `navigator.language`: The browser's language setting.
- `navigator.onLine`: A boolean indicating if the browser is online.
- `navigator.geolocation`: Provides access to the device's location.
- `navigator.clicpboard`: Provides access to the clipboard.

```javascript
if (navigator.onLine) {
    console.log("You are online!");
} else {
    console.log("You are offline!");
}

console.log(`Browser Language: ${navigator.language}`);
```
---
### Summary Table
| **Object**  | **Purpose**        | **Real-world Use Case**                                              |
|-------------|--------------------|----------------------------------------------------------------------|
| Window      | The Global Container| Checking window size for responsive logic.                           |
| Location   | URL Management      | Redirecting a user after they log in.                                |
| History    | Navigation          | Building a custom "Back" button for a Single Page App.               |
| Navigator  | Browser Info        | Detecting if a user is offline or getting GPS coordinates.           |
---
**[Task](./task/)**

---

# Summary of Day 55 - BOM ( Browser Object Model )
- The BOM (Browser Object Model) allows JavaScript to interact with the browser itself, providing objects like `window`, `location`, `history`, and `navigator`.
- The `window` object is the global object in a browser environment, containing properties and methods to manipulate the browser window.   
- The `location` object provides information about the current URL and allows for URL manipulation, such as redirection and page reloading.
- The `history` object enables navigation through the browser's session history, allowing for backward and forward navigation.
- The `navigator` object contains information about the user's browser and operating system, including online status and language settings.
- `location.href`: The full URL of the current page.
- `location.protocol`: The protocol (http:, https:).
- `location.host`: Return the hostname and port (e.g., https://www.harshadnikam.me:443).
- `location.pathname`: Returns the path and filename (e.g., /index.html).
- `location.reload()`: Reloads the current page.
