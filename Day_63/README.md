# Day 63 – Async / Await (The Modern Syntax)
> Async/Await is **syntactic sugar over Promises** that makes asynchronous code look and beave more like synchronous code, without blocking the main thread.

## 1. Why Async/Await Exists?
Before Async/Await:
```javascript
fetchData()
    .then(data => processData(data))
    .then(result => displayResult(result))
    .catch(error => console.error(error));
```
with Async/Await:
```javascript
try {
    const data = await fetchData();
    const result = processData(data);
    await save(result);
} catch (error) {
    console.error(error);
}
```
---
## 2. `async` Keyword
- Declareing a function with `async`** makes it return a Promise**.
- Reture value are automatically wrapped in `Promise.resolve()`.
```javascript
async function getNumber() {
    return 42;
}

getNumber().then(num => console.log(num)); // Logs: 42
```
Equivalent to:
```javascript
function getNumber() {
    return Promise.resolve(42);
}
```
---
## 3. `await` Keyword
- `await` pause the execution inside the async function.
- It waits until the Promise settles.
- Can only be inside `async` functions (or top-level in modules).
```javascript
async function getchNumber() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    console.log(user);
}
```
- `await` does NOT block the main thread.
---
## 4. Error Handling with `try...catch`
- Use `try...catch` to handle errors in async functions.
- Rejected Promise -> Throw Error.
```javascript
async function fetchData() {
    try {
        const response = await fetch('https://invalid-url.com');
        const data = await response.json();
        console.log(data); 
    } catch (error) {
        console.error('Something went wrong ', error);
    }
}
``` 
- Much cleaner than chaining `.catch()`
---
## 5. Parallel vs Sequential Execution
- `await` inside a loop or sequentially will wait for each Promise to resolve before moving to the next.

- **Example of sequential execution:**
```javascript
const user1 = await fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json());
const user2 = await fetch('https://jsonplaceholder.typicode.com/users/2').then(res => res.json());
```
- **For parallel execution, use `Promise.all()`**.
```javascript
const [user1, user2] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json()),
    fetch('https://jsonplaceholder.typicode.com/users/2').then(res => res.json())
])
```
- This fetches both users simultaneously.

**Rule: `If tasks are independent → run them in parallel.`** 

---

## 6. Common Async/Await Mistakes
### Forgetting `await`
```javascript
const data = fetchData();
```
### correct way
```javascript
const user = await fetch();
```
---
### Using `await` inside `.forEach()`
```javascript
array.forEach(async (item) => {
    await processItem(item); // won't wait
})
```
### correct Alternatives
```javascript
// sequential
for (const item of array) {
    await processItem(item);
}

// parallel
await Promise.all(array.map(item => processItem(item)));
```
---
## 7. Async Functions Returning Multiple Values
```javascript
async function fetchCarDetails() {
    const car = await fetchCar();
    const owner = await fetchOwner(car.ownerId);
    return { car, owner };
}

const { car, owner } = await fetchCarDetails();
```
- You can return objects or arrays to return multiple values.
---

## 8. Top-Level `await`
- In modern JavaScript modules, you can use `await` at the top level without wrapping it in an `async` function.
```javascript
const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
const user = await response.json();
console.log(user);
```
- This is useful for module initialization code.
---
## 9. Real World Example
```javascript
async function api(url) {
    const res = await fetch(url);

    if(!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
}

async function loadData() {
    try {
        const data = await api('/users');
        console.log(data);
    } catch (err) {
        console.error(err.message);
    }
}
```
---
```text
async function
   ↓
returns Promise
   ↓
await pauses function execution
   ↓
Promise resolves → value returned
Promise rejects → error thrown
```
---

#### When to Prefer Async/Await
- Complex async flows
- Multiple dependent operations
- Readability matters
- Production code & APIs

#### Avoid when:
- You just need a quick `.then()` chain
- You don’t need sequential logic
---

# Summary
- Async/Await simplifies asynchronous code.
- `async` functions return Promises.
- `await` pauses execution until a Promise resolves.
- Use `try...catch` for error handling.
- Be mindful of parallel vs sequential execution.
- Avoid common pitfalls like forgetting `await` or misusing it in loops.
- Top-level `await` is available in modules for cleaner code.
---