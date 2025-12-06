# Day 56 - Local and Session Storage
Welcome to Day 56! Today makes a significant shift. Until now, every time you refresh the page, all the data you entered would disappear. This is because the data was stored in memory, which is cleared when the page reloads. To retain data across page reloads, we can use **Web Storage APIs: Local Storage and Session Storage.**

---
## What is Web Storage?
Web Storage provides two mechanisms for storing data on the client side (in the user's browser):
- It is more secure and has a larger storage capacity (typically around 5-10MB) compared to cookies (which are limited to about 4KB).
- The data is not sent to the server with every HTTP request, making it more efficient for storing client-side data.
There are two types: **Local Storage** and **Session Storage**.
---
## 1. Local Storage ( long-term storage )
`Local Storage` stores data with no expiration data.
- The data is not deleted when the browser is closed.
- It is available for future sessions.
The 4 main methods of Local Storage are:
- `setItem(key, value)`: Stores a value associated with the key.
- `getItem(key)`: Retrieves the value associated with the key.
- `removeItem(key)`: Removes the key-value pair associated with the key.
- `clear()`: Clears all key-value pairs in Local Storage.

```javascript
// 1. Saving data
localStorage.setItem('username', 'Harsh');
localStorage.setItem('theme', 'dark');

// 2. Retriving Data
const user = localStorage.getItem('username');
console.log(user);

// 3. Removing Data
localStorage.removeItem('theme');

// 4. Clearing all Data
// localStorage.clear();
```
---
## 2. Session Storage ( short-term storage )
`Session Storage` alomost identical to Local Storage in code, but its lifespan is limited to the duration of the page session.
- It stores data only for the one session (until the browser tab is closed).
- If you open the same URL in a new tab, it will have a separate session with its own Session Storage (Data will not be shared between tabs).

```javascript
// The syntax is exactly the same, just swap 'local' for 'session'
sessionStorage.setItem('sessionID', 'HE94KSB2J');

cosnt sessionStatus = sessionStorage.getItem('isLoggedIn');
console.log(sessionStatus);
```
---
## 3. The `JSON` Trap:
Bothe Local Storage and Session Storage can **only stores string** data.

If you try to store objects or arrays directly, JS will convert them to string `[object Object]`, and you will lose the data structure.

**The solution:** Use `JSON.stringify()` when saving, and `JSON.parse()` when retrieving.

```javascript
const userSettings = {
    theme: 'dark',
    fontSize: '16px',
    language: 'en',
    notifications: true
};

// INCORRECT WAY
// localStorage.setItem('settings', userSettings);
// Result: "settings": "[object Object]" (Data is unreadable)

// CORRECT WAY
// 1. Conver Object to String
LocalStorage.setItem('settings', JSON.stringify(userSettings));

// 2. Retrive and Convert back to Object
const rawData = LocalStorage.getItem('settings');

// 3. Parse the String back to Object
const savedSettings = JSON.parse(rawData);

console.log(savedSettings);
console.log(savedSettings.theme); // Output: dark
```
---
## 4. Cookies
Every time your browser requests a file (page, image, etc.) from a server, it automatically attaches all relevant cookies to the request headers. This is how servers knows "Oh, this request is coming from User#123, who is already logged in.". 

### Key characteristics:
- Cookies are sent with every HTTP request to the server.
- Cookies have a smaller storage capacity (about 4KB).
- Cookies can have expiration dates set by the server.

```javascript
// Setting a cookie
document.cookie = "username=Harsh; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";

// Retrieving cookies
console.log(document.cookie);
```

### When to use what?
- Use **Local Storage** for data that needs to persist across sessions, like user preferences or settings.
- Use **Session Storage** for data that should only last for the duration of a session, like temporary form data.
- Use **Cookies** for data that needs to be sent to the server with each request, like authentication tokens.
---
### Summary Table
| Feature                  | LocalStorage            | SessionStorage         | Cookies                |
|--------------------------|-------------------------|------------------------|------------------------|
| **Capacity**              | ~5MB                    | ~5MB                   | 4KB (Tiny)             |
| **Sent to Server?**       | No (Client only)        | No (Client only)       | Yes (Every request)    |
| **Ease of Use**           | Easy (setItem)          | Easy (setItem)         | Hard (String parsing)  |
| **Modern Use Case**       | UI State, Caching       | Form data, Tabs        | Auth Tokens, Sessions  |
---

#### Practice Exercise
**[Check Here](./task/session-storage/) Session-storage**
**[Check Here](./task/local-storage/) Local-storage**

---
# Summary
- Understood the difference between Local Storage, Session Storage, and Cookies.
- Learned how to use Local Storage and Session Storage to store, retrieve, and remove data.
- Discovered the importance of using JSON methods to store complex data structures.
- Explored the characteristics and use cases of Cookies in web development.
---