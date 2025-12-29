# Day 79 - Async Debugging & Performance
## Introduction to Async Debugging

**Key ideas:**
- Async code doesn't run top-to-bottom
- Errors may appear later or in a different call stack
- Promises, `async/await`, timers, and network requests all affect flow

### Example
```javascript
console.log('Start');

setTimeout(() => {
    console.log('Timeout completed');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise resolved');
});

console.log('End');

/*
output:
Start
End
Promise resolved
Timeout completed
*/ 
```
- The order of logs shows how async operations are scheduled.

---
## Performance Profiling

**Key ideas:**
- Use browser DevTools to profile performance
- Identify long tasks and bottlenecks
- Analyze call stacks and flame charts

### Example
```javascript
async function fetchData() {
    debugger;
    const res = await fetch("/api/data");
    const data = await res.json();
    return data;
}
fetchData();
```
- Where execution pauses
- How the call stack changes


### Using DevTools for Async Code

Must-know DevTools features
- Sources tab
    - Async call stacks
    - Breakpoints inside promises
- Pause on exceptions
- Blackboxing libraries (ignore framework noise)

**Practice:**
- Add breakpoints inside `.then()` and `async/await`

- Inspect:
    - Call Stack
    - Scope
    - Promise state (pending / fulfilled / rejected)
---

## Common Async Issues

**Cover these patterns**: 
- Forgotten await
- Unhandled promise rejections
- Race conditions
- Multiple async calls blocking each other
```javascript
// Bug: missing await
const data = fetchData();
console.log(data); // Promise, not result
```
Fix:
```javascript
const data = await fetchData();
```
---
## Performance Profiling (JavaScript)
Learn:
- CPU vs Network bottlenecks
- Blocking the main thread
- Long tasks (>50ms)

#### DevTools → Performance tab

- Record a session
- Identify:
    - Long scripting tasks
    - Forced reflows
    - Expensive async callbacks

---
## Network Analysis

**Key ideas:**
- Use DevTools Network tab
- Inspect request/response headers
- Analyze timing breakdowns (DNS, TCP, TTFB, content download)  
- Look for slow or failed requests

### Example
```javascript
fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data));
```
- Inspect the request in DevTools
- Check for delays or errors
- Optimize by caching or batching requests
---

## Task: Fix Broken Async Code Using DevTools
Given the following broken async code, use DevTools to debug and fix it.
```javascript
async function loadData() {
    const response = fetch('/api/data'); // Bug: missing await
    const data = await response.json(); // Error: response is a Promise
    console.log(data);
}
```
---
**Steps:**
1. Open DevTools and set breakpoints.
2. Step through the code to observe the flow.
3. Identify the missing `await`.
4. Fix the code:
```javascript
async function loadData() {
    const response = await fetch('/api/data'); // Fixed: added await
    const data = await response.json();
    console.log(data);
}
```
5. Test to ensure it works correctly.
---
# Summary
- Async debugging requires understanding of event loop and call stacks.
- Use DevTools effectively to profile and debug async code.
- Common issues include forgotten awaits and unhandled rejections.
---