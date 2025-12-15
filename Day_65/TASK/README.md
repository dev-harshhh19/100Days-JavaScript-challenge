## TASK
<b>
Try to fetch from a URL that doesn't exist and display a friendly user error.
</b>

---

### How we should think about this:
**When a URL doesn't exist:**
- `fetch()` does NOT throw immediately
- It resolves with `response.ok === false`
- we must check manually and throw if needed.

**So the goal is**:
1. Attempt the fetch
2. Detect failure
3. Show a user-friendly message, not a scary technical one.
---
### Solution (Async / Await + Friendly Error)
```javascript
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');

        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Data fetched successfully:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchData();
```
- When dealing with multiple promises, `Promise.all` can be useful, but error handling requires care.
- When using `Promise.all`, if any promise rejects, the entire `Promise.all` rejects.
- To handle errors individually, consider using `Promise.allSettled` or wrapping each promise in a way that it never rejects.

NOTE: 
1. fetch() only throws on network errors, not HTTP errors
2. Always check response.ok
3. Technical errors should stay in logs
4. Users should see simple, reassuring messages
---

### No API, Simulated Error
```javascript
async function fetchCarDetails() {
    try {
        const engineWorking = await simulateFetchEngine();

        if(!engineWorking) {
            throw new Error("Engine Failure")
        }

        console.log("Car is running smoothly!");
    } catch (error) {
        console.log("Car won’t start.");
        console.log("Please check the engine and try again.");

        console.error("Technical issue:", error.message);
    }
}
startCar();
```
---

[Check Here Task 1](./Error-Handling-with-Async-Await.js)
---
[Check Here Task 2](./NO-API-Simulated-Error.js)
---