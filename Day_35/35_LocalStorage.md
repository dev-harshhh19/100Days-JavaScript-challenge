# Day 35 - Local Storage

> What is Local Storage?
- Local Storage is a browser feature that lets websites save persistent key–value data on a user’s device. Unlike cookies, it can store much larger amounts of data (about 5–10 MB) and isn’t sent with every HTTP request.
Here’s a cleaner, more concise version with better flow and reduced reading time:

---

### **What is Local Storage?**

Local Storage is a browser feature that lets websites save persistent key–value data on a user’s device. Unlike cookies, it can store much larger amounts of data (about 5–10 MB) and isn’t sent with every HTTP request.

**Key points:**
- Part of the Web Storage API (alongside Session Storage).
- Data persists even after the browser is closed.
- Commonly used for things like user preferences or session info.
- Accessed in JavaScript via the `localStorage` object.
- Data is scoped to the page’s protocol, domain, and port.
- Operations are synchronous, so heavy use can impact performance.
---
> Basic Operations with Local Storage
- To store data in local storage, you can use the `setItem` method:
```javascript
localStorage.setItem('key', 'value');
```
- To retrieve data from local storage, you can use the `getItem` method:
```javascript
localStorage.getItem('key'); // returns 'value'
```
- To remove a specific item from local storage, you can use the `removeItem` method:
```javascript
localStorage.removeItem('key');
```
- To clear all data from local storage, you can use the `clear` method:
```javascript
localStorage.clear();
```
- To check the number of items stored in local storage, you can use the `length` property:
```javascript
localStorage.length; // returns the number of items
```
- To access a key by its index, you can use the `key` method:
```javascript
localStorage.key(index); // returns the key at the specified index
```
---
> Use Cases of Local Storage
- Storing user preferences (e.g., theme, language settings)
- Caching data for offline access
- Storing session information
- Saving form data temporarily
- Implementing simple client-side data storage for web applications
- Tracking user interactions or progress in web applications
- Storing shopping cart data in e-commerce applications
- Saving game state in browser-based games
---
> Limitations of Local Storage
- Operations are synchronous and can block the main thread.
- Storage is small (around 5–10 MB).
- Stores only strings, complex data must be serialized.
- No automatic expiration; data stays until removed.
- Vulnerable to XSS, so it’s unsafe for sensitive data.
- Not suitable for large files or media.
- Data is isolated by protocol, domain, and port (no cross-origin access).
- Lacks querying or advanced data-handling features.
---
> Storing Object and Array:
- Local storage **only stores strings**, so object must be converted:
```javascript
const user = { name: 'Harshad' , age: 19};
localStorage.setItem('user', JSON.stringify(user));

const storedUser = JSON.parse(localStorage.getItem('user'));
consnsole.log(storedUser); // { name: 'Harshad', age: 19 }
```
- Similarly, arrays can be stored:
```javascript
const color = ['red', 'green', 'blue'];
localStorage.setItem('colors',JSON.stringify(color));
const storedColors = JSON.parse(localStorage.getItem('colors'));
console.log(storedColors); // ['red', 'green', 'blue']
```
---
# Summary:
- Local Storage is a web storage feature that allows websites to store key-value pairs on a user's device.
- It provides a larger storage capacity (5-10 MB) compared to cookies and persists data even after the browser is closed.
- Local Storage is accessed through the `localStorage` object in JavaScript, with methods like `setItem`, `getItem`, `removeItem`, and `clear`.
- It is commonly used for storing user preferences, session information, and caching data for offline access.
- However, Local Storage has limitations, including synchronous operations, limited storage size, and security vulnerabilities to XSS attacks.
- Data stored in Local Storage is scoped to the page's protocol, domain, and port, and it only stores strings, requiring serialization for complex data types.
---
