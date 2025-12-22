# Day 72 - `AbortController` & Fetch Cancellation

## What is `AbortController`?
`AbortController` lets you cancel ongoing async operations, most commonly:
- fetch() requests
- Long-running tasks tied to a signal
It works using:
- controller → sends the cancel signal
- signal → passed to fetch()

```javascript
//basic Syntax
const controller = new AbortController();
const signal = controller.signal;

fetch(url, { signal });


// To cancel the request
controller.abort();
```
---
## Simple Fetch Cancellation Example
```javascript
const controller = new AbortController();

fetch("https://jsonplaceholder.typicode.com/posts", {
  signal: controller.signal
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => {
        if (err.name === 'AbortError') {
            console.log('Fetch aborted');
        } else {
            console.error('Fetch error:', err);
        }
    });
// Abort the fetch after 2 seconds
setTimeout(() => {
  controller.abort();
}, 2000);
```
---
## Why Fetch Cancellation Matters
- Prevents unnecessary network usage
- Avoids race conditions
- Improves performance & UX

**Common use cases:**
- Search input (cancel previous request when typing)
- Page navigation
- Component unmounting (React/Vue)
- Timeouts for slow APIs 
---
## Using AbortController with a Timeout
```javascript
function fetchWithTimeout(url, timeout = 5000) {
    const controller = new AbortController();

    setTimeout(() => {
        controller.abort();
    }, timeout);
    return fetch(url, { signal: controller.signal });
}

fetchWithTimeout("https://jsonplaceholder.typicode.com/posts", 3000)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => {
        if (err.name === 'AbortError') {
            console.log('Fetch aborted due to timeout');
        } else {
            console.error('Fetch error:', err);
        }
    });
```
### Listening to Abort Events
```javascript
const controller = new AbortController();

controller.signal.addEventListener('abort', () => {
    console.log('Fetch request was aborted!');
});

controller.abort();
```
---
**NOTE:**
- `AbortController` **does not stop the server request**, only the client handling
- One controller can cancel **multiple fetch requests**
- Once aborted, the controller **cannot be reused**
---
[TASK](../Day_72/TASK/README.md)
---

# Summary
- `AbortController` is a powerful tool for managing fetch requests
- It enhances performance and user experience by allowing cancellation of unnecessary requests
- Commonly used in search inputs, navigation, and timeouts
- Integrating `AbortController` into your fetch logic is a best practice for modern web applications
---