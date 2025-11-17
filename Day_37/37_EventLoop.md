# Day 37 - Event Loop (Fundamentals)
### Topic covered:
---
### Event Loop
> Event Loop
- The Event loop is a core concept in JS, tthat enables asynchronous programming by handling tasks efficiently.
- It allows non-blocking operations, meaning that long-running tasks (like network requests or timers) do not block the main thread.
- The event loop continuously checks the callstack and the task queue.

```mermaid
graph TD
    A[Call Stack] -->|Pushes tasks| B[Event Loop]
    B -->|Checks for tasks| C[Task Queue]
    C -->|Pushes to Call Stack| A
```
- When the call stack is empty, the event loop takes the first task from the task queue and pushes into the call stack for execution.
- This mechanism allows JS to perform non-blocking operations, making it suitable for web applications that require responsiveness.

```javascript
console.log('Start');
setTimeout(() => {
    console.log('Timeout finished');
},2000);
console.log('End');
```
- `setTimeout` is an example of an asynchronous operation that uses the event loop.
- "Start" is logged first, then "End", and after 2 seconds, "Timeout finished" is logged.
---

> How Event Loop Works
1. **Call Stack**: JS has a Call Stack where function execution is managed in the **LIFO** (Last In, First Out) order.
2. **Web APIs**: This includes setTimeout, setInterval, fetch, DOM events, and other non-blocking operations.
3. **Callback queue (Task Queue)**: When an asynchronous function is completed, its callback is pushed to the Callback Queue.
4. **Microtask Queue (Job Queue)**: This queue has higher priority than the Callback Queue and includes tasks like Promises and Mutation Observers.
5. **Event Loop**: It continuously checks the Call Stack and if it's empty, it first processes all tasks in the Microtask Queue before moving to the Callback Queue.

![](https://mermaid.ink/img/pako:eNqVlFGPmkAUhf_KZB66mohZBhXloam6Jt3UzbqriWlLH0a4wmRxxgxDt9b433tBccE12ZQnmHPuvR-HG_Y0UCFQj1qW5ctAybWIPF8SkvCdyoxHIHnxZSGuE_UaxFwbshihI81WkebbmIyH0-l8MRx_--nTMU8SMjc8ePHpr7wNIaHQEBih5LHsdI3n9pc9DllB4hEfIWSqEmgnKmrc8JumT8mhamZVM5oi0Fd9DjJsuJCN5mk-yLDKupyMhrP7ObqWsCJ4m37AubTRm4JZiA1gHmd3oTHU7h4f6oc5whpMEF8nyNMaYVhPp7RWmBV5yiAD0piqV0gNmWmhtDC75kcZ5mxKBomoxF0I7J1wQTF7vn98vl98zynKcSXFVxHF_4Mxs4smaiNSIHYNZMYqEqtLTkVyapT5G5Q7RSyL5EBnGjz4_IZ_xY0h1s3nxI_m0wrUJfLpsudk2mj4dPIbpMGWauvTZvNccxxWqcH7izHHBU9jvgWP5LEdynP27py2aKRFSD2jM2jRDWjcYXyk-7zGpyaGDfg03_2Qa_ykvjxgzZbLH0ptyjKtsiguH7JtyA3cCY7f-82B-YIeq0wa6rFBt2hBvT39Q72O3W0zt2_brO-i5LotuqOeZd867Y7bYb1ujw3wcg4t-rcYarfZLeuyXt8ZuD1n0HGdFoVQGKUfjn-U4sdy-AdFzUzT?type=png)

---
> Phase of Event Loop
1. **Timers Phase**: Executes callbacks scheduled by `setTimeout` and `setInterval`.
2. **I/O Callbacks Phase**: Executes callback for I/O operations like network requests.
3. **Prepare Phase**: Internal phase used by `Node.js`.
4. **Poll Phase**: Retrieves new I/O events and executes their callbacks.
5. **Check Phase**: Executes callbacks scheduled by `setImmediate`.
6. **Close Callbacks Phase**: Executes close event callbacks like `socket.on('close', ...)`.
7. **Microtasks Execution**: After each phase, the event loops checks the Microtask Queue and executes all tasks in it before moving to the next phase.

```javascript
console.log('Start');
setTimeout(() => {
    console.log('Timeout finished');
}, 0);
Promise.resolve().then(() => {
    console.log('Promise resolved');
})
console.log('End');
```
- "Start" is logged first, then "End".
- The Promise callback is executed next because Microtasks have higher priority than the callback queue.
- Finally, "Timeout finished" is logged.
---
Here’s a polished and corrected version of what you wrote — clearer, more accurate, and with no grammar or spelling issues:

---

> **Web APIs vs Node.js APIs**

* **Web APIs** are provided by the **browser environment**, while **Node.js APIs** are provided by the **Node.js runtime (built on top of libuv)**.

* Both environments support **asynchronous operations**, but the **APIs they expose are different**, and the **internal implementations** also vary.

- **Browser Examples:**
  - `fetch`
  - `setTimeout`
  - `DOM events`
  - `localStorage`
  - `Canvas API`

- **Node.js Examples:**
  - `fs` (File System)
  - `http` module
  - `crypto`
  - `process`
  - `setImmediate` (exists in Node.js but not in browsers)

- While the **event loop** exists in both environments and serves a similar purpose, **its phases differ slightly**.
  - The browser event loop is managed by the HTML spec.
  - Node.js uses **libuv**, which has more detailed phases (Timers, I/O, Poll, Check, Close, etc.).
---
# Summary
- The Event Loop is a fundamental concept in JavaScript that enables asynchronous programming by managing the execution of tasks.
- It allows non-blocking operations, ensuring that long-running tasks do not block the main thread.
- The Event Loop continuously checks the Call Stack and Task Queues (Callback Queue and Microtask Queue) to execute tasks efficiently.
---