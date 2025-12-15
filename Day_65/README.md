# Day 65 - Error Handling in Async Functions

I already understand the basics, so this day is about **how errors actually behave in real async code**, the kind we write every day, APIs, multiple requests, parallel tasks, and production-level flows.

---

## Quick Recap: Error Handling Basics
Before diving into advanced concepts, here’s a quick refresher:
- Errors can be `synchronous` or `asynchronous`.
- `try...catch` only catches:
    - Sync errors.
    - Rejected promises when used with `await`.
- Promises handle errors using"
    - `.catch()` method.
    - or `try...catch` inside `async` functions.
-Custom errors helps differentiate error types.
```javascript
try {
    const data = await fetchData();
} catch (error) {
    console.error(error.message);
}
```
- `try...catch` does NOT catch async errors unless await is used.
---


## Why Async Error Handling Needs Extra Attention
When we write synchronous code, errors are simple, they happen immediately, and are easy to catch.
Async code introduces complexity:
- Errors may occurs later, after some time.
- They might happen **outside the current call stack**
- Multiple async tasks may **fail independently**.
- Some errors don't crash the app, they just disappear.

---

## 1. `try...catch` Works Only When We `await`.
This is one of the most misunderstood parts of async JS.

```javascript
try {
    fetch("https://api.example.com");
} catch (error) {
    console.log("Error caught");
}
```
- the `catch` block will NOT execute because `fetch` returns a promise, and the error (if any) happens asynchronously.

To properly catch errors from async functions, you must use `await`:

```javascript
try {
    const res = await fetch("https://api.example.com");
} catch (error) {
    console.log("Error caught:", error.message);
}
```
- Now, if the fetch fails, the error will be caught.
---
## 2. Handling Errors in Multiple Await Calls
When you have multiple `await` calls, each can fail independently. You need to handle errors for each call.

Problematic code:
```javascript
async function loadData() {
    const user = await getUser(); // might fail
    const posts = await getPosts(user.id); // might fail
}
```
- If `getPosts` fails, user `data` is lost.

Better approach:
```javascript
async function loadData() {
    let user, posts;

    try {
        user = await getUser();
    } catch (error) {
        console.error("Failed to load user:", error);
        return; // or handle accordingly
    }

    try {
        posts = await getPosts(user.id);
    } catch (error) {
        console.error("Failed to load posts:", error);
    }   
}
```
- Each `await` has its own `try...catch`, allowing for granular error handling.
---

## 3. Error Handling with `Promise.all`
When using `Promise.all`, if one promise rejects, the entire `Promise.all` rejects. This can be problematic if you want to handle errors individually.

Common mistake:
```javascript
await Promise.all([
  fetchUser(),
  fetchPosts(),
  fetchComments()
]);
```
- If `fetchPosts` fails, you lose results from `fetchUser` and `fetchComments`.
- To handle errors individually, use `Promise.allSettled`:

```javascript
const result = await Promise.allSettled([
    fetchUser(),
    fetchPosts(),
    fetchComments()
]);

result.forEach((res, index) => {
    if (result.status === "rejected") {
    console.error(result.reason.message);
    } else {
    console.log("Result:", result.value);
    }
})
```
- This way, you can see which promises succeeded and which failed.
---

## 4. Creating Async-Specific Custom Errors
Creating custom error classes for async operations can help differentiate error types and provide more context.

```javascript
class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = "NetworkError";
        this.statusCode = statusCode;
    }
}
```
**Usage**:
```javascript
async function fetchData() {
    const res = await fetch("https://api.example.com/data");

    if(!res.ok) {
        throw new NetworkError(`Failed to fetch data: ${res.status}`);
    }
}
```
**Handling**:
```javascript
try {
    await fetchData();
} catch (err) {
    if (err instanceof NetworkError) {
        console.log(err.statusCode, err.message);
    } else {
        console.log("General error:", err.message);
    }
}
```
- This provides clarity on the type of error encountered.
---
## 5. Re-throwing Errors
Sometimes, you might want to catch an error, log it, and then re-throw it for higher-level handling.

```javascript
async function service() {
    try {
        await fetchData();
    } catch (error) {
        console.error("Error in service:", error);
        throw error; // re-throw for higher-level handling
    }
}
```
**Allows**:
- Logging at one level.
- Handling at another level.
---

## 6. Global Async Error Handling
For unhandled promise rejections, you can set up a global handler:

**Browser**: `unhandledrejection`
```javascript
window.addEventListener("unhandledrejection", event => {
    console.error("Unhandled rejection:", event.reason);
})
```
**Node.js**: `unhandledRejection`
```javascript
process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled rejection at:", promise, "reason:", reason);
})
```
- Prevents silent crashes
- Critical for production apps
---

## 7. Retry Logic for Async Failures
```javascript
async function retry(fn, retries = 3) {
  try {
    return await fn();
  } catch (err) {
    if (retries === 0) throw err;
    return retry(fn, retries - 1);
  }
}
```
**Usage**:
```javascript
retry(() => fetchData())
    .then(data => console.log("Data fetched:", data))
    .catch(err => console.error("Failed after retries:", err));
```
- Useful for transient errors (e.g., network issues)
---

## 8. Async Error Handling Best Practices (Advanced)
1. Always await Promises inside try...catch
2. Use `Promise.allSettled` for parallel tasks
3. Never swallow errors silently
4. Re-throw errors when needed
5. Differentiate error types
6. Add global error listeners
7. Log stack traces in development
---
[TASK - Day 65](../Day_65/TASK/README.md)
---
---
# Summary
- Async error handling requires careful consideration.
- Use `try...catch` with `await`.
- Handle multiple async calls individually.
- Use `Promise.allSettled` for parallel tasks.
- Create custom error classes for clarity.
- Implement global error handling for unhandled rejections.
- Consider retry logic for transient failures.
---