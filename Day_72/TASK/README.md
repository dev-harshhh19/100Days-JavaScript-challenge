## Task: Cancel Previous Fetch Requests

### Objective
Implement fetch request cancellation using AbortController API. When a new request starts, the previous pending request should be automatically aborted.

---
### Core Concepts
**AbortController** - JavaScript API that provides the ability to abort Web requests.

**Signal** - Property of AbortController passed to fetch() to enable cancellation.

**AbortError** - Error type thrown when a request is aborted.

---
### Implementation Requirements
Store the current AbortController instance in a global variable. Before initiating a new fetch request, check if a controller exists and call its abort() method. Create a new AbortController for each request and pass its signal to the fetch options. Handle AbortError separately from other error types in the catch block.

---
### Expected Behavior
When multiple requests are fired rapidly, only the most recent request completes successfully. All previous pending requests are cancelled automatically. The console displays clear status messages for aborted and completed requests.

---
### Code Implementation
See [abort-controller.js](../abort-controller.js) in the parent directory.

---
### Usage
```bash
node ../abort-controller.js
```

The demo fires three rapid requests. Requests 1 and 2 are aborted when newer requests start. Only Request 3 completes successfully.

### Sample Output
```bash
harsh@MacBook-Pro Day_72 (main) % node abort-controller.js
=== AbortController Demo ===

Starting: Request 1
Aborting: Request 2
Starting: Request 2
Aborted: Request 1

Aborting: Request 3
Starting: Request 3
Aborted: Request 2

Completed: Request 3
```
---