# Day 77 - Retry Logic & Fault-Tolerant APIs

## What is Retry Logic?
**Retry Logic** is the process of re-executing a failed operation a limited number of times, often with delays, to handle temporary errors and improve reliability.

---
## Retry Logic & Fault-Tolerant APIs

### Why is Retry Logic Important?
API calls can fail for reasons that aren't your fault:
- Temporary network issues
- Server overloads ( e.g., 500 Internal Server Error )
- Rate limiting ( e.g., 429 Too Many Requests )

### A fault-tolerant API client:
- Doesn't crash on first failure
- Retries smartly
- Gives up when necessary

---

## Characteristics
- **Automatic retries**: The client automatically retries failed requests.
- **Idempotent operations**: Only retry operations that can be safely repeated without side effects
- **Configurable retry count**: Users can set how many times to retry.
- **Delay between retries**: There is a wait time between retries to avoid overwhelming the server.
- **Exponential backoff support**: The wait time increases exponentially after each failure.
---
## Basic Retry Pattern

Key Ideas:
- Try the first time
- If it is Failed, Wait a bit
- Try again
- Stop after a max number of attempts

### Simple Retry Example (Async/Await)

```javascript
async function fetchWithRetry(url, options = {}, retries = 3, delay = 1000) {
    try {
        const response = await fetch(url, options);
        
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        if (retries > 0) {
            console.log(`Retrying... Attempts left: ${retries}`);
            await new Promise(res => setTimeout(res, delay));
            return fetchWithRetry(url, options, retries - 1, delay);
        }
    }
}
```
- What happenings here?
  - We try to fetch data from the `URL`.
  - If it fails, we check if we have retries left.
  - If yes, we wait for a bit and try again.
  - If no retries left, we throw the error.


### Exponential Backoff
Instead of waiting a fixed time, we can increase the wait time after each failure.


```javascript
await delay(wait * 2);
```
This helps reduce the load on the server and increases the chances of success.


**Example delays:**
```text 
1s → 2s → 4s → stop
```
This prevents hammering the server.

---

# Summary
- Retry logic is essential for building fault-tolerant API clients.
- It helps handle temporary failures gracefully.
- Implementing retries with exponential backoff can improve success rates and reduce server load.
---