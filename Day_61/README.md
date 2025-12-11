# Day 61 - The Concept of Sync vs. Async
This is an explanation of the concepts of synchronous (sync) and asynchronous (async) programming, along with examples to illustrate their differences.
NOTE: I have already covered this topic in Day 39, but today I will provide a more detailed explanation with additional examples.

**[Day 39 ](../Day_39/39_async_await.md)**
---
---
## 1. Quick Revison From Day 39
> **Sync vs Async**
- **Synchronous code** runs line by line and blocks further execution until the current operation completes.
- **Asynchronous code** allows JS to continue executing other code while waiting for longer operations (like network requests, timer, file, IO, DB operations ).

### Synchronous Example
```javascript
console.log("Start");
for(let i = 0 i<=5; i++){
    console.log(i);
}
console.log("End");
```
### Asynchronous Example
```javascript
console.log("Start");
setTimeout(() => {
    console.log("Inside Timeout");
}, 2000);
console.log("End");
```
---
> **async/await basics**
- `async` makes a function return a Promise.
- `await` makes JS wait until the Promise settles and returns its result.
- `try/catch` is used for error handling in async functions.
### Async/Await Example
```javascript
const fetchUserData = async () => {
    try {
        let response = await fetch('https://api.example.com/user');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}
fetchUserData();
```
---

## 2. Why does JavaScript need Async Programming?
JavaScript is:
    - Single-threaded
    - Non-blocking
    - Event-driven
This means it have **one main thread**, so blocking operations stops everything.

`example: If a synchronous operation takes 5 seconds, UI will freeze for the 5 seconds.` 

> The event loop
- This allows JS to appear multi-threaded by offloading long tasks to:
    - Web APIs 
    - NodeJs thread pool
    - Network operations
    - Timers
Once this task is done, a callback is pushed to the callback queue to be executed when the main thread is free.
--- 
## 3. Event Loop, Call Stack, Task Queues
### Call Stack
- The call stack is where JS keeps track of function calls.
- When a function is called, it is added to the top of the stack.
- When th function returns, it is removed from the stack.

### Event Loop
- The event loop continuously checks the call stack and task queues.
- If the call stack is empty, it takes the first task from the task queue and pushes it to the call stack.

### Task Queues
- There are two main types of task queues:
    - **Macro-task queue**: for tasks like `setTimeout()`, `setInterval()`, and I/O operations.
    - **Micro-task queue**: This is an priority queue for tasks like Promises and `process.nextTick()` in Node.js.
- Micro-tasks are executed before macro-tasks when the call stack is empty.

```javascript
console.log("Start");
setTimeout(() => {
    console.log("Timeout");
}, 0);
Promise.resolve().then(() => {
    console.log("Promise");
})

// Output:
// Start
// Promise
// Timeout
```
---
## 4. What does Async/Await actually doo?
- When you see `await fetch (...)`.
Internally, JS does:
    1. Pause the execution of the async function.
    2. Allow other code to run (event loop continues).
    3. Once the Promise resolves, resume the async function with the resolved value.

---

## 5. Concurrency vs Parallelism
- **Concurrency**: Multiple tasks make progress over the same time period. (e.g., async operations in JS)
- **Parallelism**: Multiple tasks run simultaneously on multiple processors/cores. (e.g., multi-threading in other languages)

- JavaScript is concurrent but **not parallel** but asynchronous operations use background treads via:
    - Web APIs (in browsers)
    - Libuv thread pool (in Node.js)

---
## 6. Advanced Async Patterns
1. **Sequential Await:**
```javascript
const fetchDataSequential = async () => {
    const data1 = await fetch('https://api.example.com/data1');
    const data2 = await fetch('https://api.example.com/data2');
    console.log(await data1.json(), await data2.json());
}
fetchDataSequential();
```
Runs one after another → slow

---
2. **Promise with `Promise.all`:**
```javascript
const fetchDataParallel = async () => {
    const [data1, data2] = await Promise.all()([
        fetch('https://api.example.com/data1'),
        fetch('https://api.example.com/data2')
    ]);
    console.log(await data1.json(), await data2.json());
}
fetchDataParallel();
```
Runs simultaneously → faster

---
3. **Promise.race:**
- Returns the first settled promise.

4. **Promise.any:**
- Returns the first successful promise.

5. **Promise.allSettled:**
- Waits for all promises to settle 

6. **Throttling / Limiting concurrency**
- Avoid hitting API rate limits:
```javascript
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithLimit(urls, limit = 3) {
    const result = [];
    let i =0;

    async worker() {
        while (i<url.length) {
            const currentIndex = i++;
            try {
                const response = await fetch(url);
                result.push(await response.json());
                await wait(100);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        }
    }

    await Promise.all(Array(limit).fill().map(worker));
    return result;
}
```
- This limits the number of concurrent fetches to avoid overwhelming the server.
---
## 7. Async Error Handling - Adv
- Always use `try/catch` inside async functions.
- For multiple promises, handle errors individually or use `Promise.allSettled`.
**Problem: unhandled Rejection**
```javascript
async function problematicFunction() {
    throw new Error("Something went wrong!");
}
problematicFunction();
// or 

async function bad() {
  JSON.parse("invalid");
}
bad();
```
```plaintext
Error: Something went wrong!
    at problematicFunction (...)

// or

(node:12345) UnhandledPromiseRejectionWarning
```

### Recunstruction Example
```javascript
async function main() {
    try {
        const data = await fetch('./wrong-url');
        const json = await data.json();
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
main();
```
---
## 8. Real-World Example: API Pipeline with Async Flow
```javascript
async function getUserWithPosts(userId) {
    const user = await fetch (`https://api.example.com/users/${userId}`).then(res => res.json());
    const posts = await fetch (`https://api.example.com/users/${userId}/posts`).then (res => res.json());

    return {
        ...user,
        posts
    };
}

async function getUserWithPosts(id) {
    const [user, posts] = await Promise.all([
        fetch(`https://api.example.com/users/${id}`).then(res => res.json()),
        fetch(`https://api.example.com/users/${id}/posts`).then(res => res.json());
    ]);
    return {
        ...user,
        posts
    };
}
```
- The second version fetches user and posts concurrently, improving performance.
---

## 9. Handling Async Streams (ReadableStream)
```javascript
async function readStream(url) {
    const reader = response.body.getReader();
    let result = '';

    while (!(result = await reader.read()).done){
        cosnole.log(`Result: ${result.value}`);
        result += new TextDecoder().decode(result.value);
    }
}
```