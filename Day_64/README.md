# Day 64 - Fetch API

## What is Fetch API?
The Fetch API lets JavaScript request data from a server and handle the response. It provides a modern, promise-based way to make network requests, replacing the older XMLHttpRequest method.
- It commonly used to:
    - Get JSON data
    - Communicate with backend services
    - Load data dynamically without refreshing the page

### Basic syntax
```javascript
fetch(url, options)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```
- Breakdown:
    - `url`: The endpoint you want to fetch data from.
    - `options`: An optional object to configure the request (method, headers, body, etc.).
    - `.then()`: Handles the response and processes the data.
    - `.catch()`: Catches any errors that occur during the fetch.
    - `response.json()`: Parses the response as JSON.
    - `data`: The parsed data from the response.
    - `error`: Any error that occurred during the fetch.

---

## Example: Getting user data from an API
```javascript
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            console.log(`Name: ${user.name}, Email: ${user.email}`);
        });
    })
    .catch(error => {
        console.error('Error fetching user data:', error);
    })
```
**NOTE**: 
1. Fetch only rejects on network errors
```javascript
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return response.json();
  })
```

2. Fetch is asynchronous
- It doesn’t block the rest of your code.
---
## Using Fetch with `async/await`
```javascript
async function getData() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await res.json();
        console.log(data);
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
}
getData();
```
---
## Common Response Methods
| Method    | Purpose                |
| --------- | ---------------------- |
| `.json()` | Parse JSON             |
| `.text()` | Plain text             |
| `.blob()` | Images/files           |
| `.status` | HTTP status code       |
| `.ok`     | true if status 200–299 |
---
[TASK](../Day_64/TASK/)
--- 
# Summary
- The Fetch API is a modern way to make network requests in JavaScript.
- It uses promises for handling asynchronous operations.
- You can customize requests with options like method, headers, and body.
- Error handling is done using `.catch()` or try/catch with `async/await`.
- Fetch is widely supported in modern browsers and is a key tool for web development.
---
<a href="../Day_63/README.md"> < Previous Day</a> |
---
**<a href="../Day_65/README.md">Next Day > </a>**
---