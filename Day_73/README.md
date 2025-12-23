# Day 73 - API Rate Limits & Throttling

## What are API Rate Limits and throttling?
API Rate Limits are restrictions set by API providers to limit the number of requests a client can make within a specific time frame. This helps prevent abuse, ensures fair usage, and protects server resources.

Throttling is a technique used to control the rate of requests sent to an API. It can be implemented on the client-side to avoid exceeding rate limits or on the server-side to manage incoming traffic.

---
## Why are they important?
- **Preventing Abuse**: Rate limits help protect APIs from being overwhelmed by excessive requests, which could lead to degraded performance or downtime.
- **Fair Usage**: They ensure that all users have equitable access to the API resources.
- **Cost Management**: Many APIs charge based on usage; rate limits help control costs by limiting excessive requests.
- **Improved Performance**: Throttling can help maintain optimal performance by spreading out requests over time.
- **User Experience**: Proper handling of rate limits and throttling can lead to a smoother user experience by avoiding sudden failures or delays.
- **Compliance**: Adhering to API rate limits is often a requirement set by API providers, and failure to comply can result in access being revoked.
---
## HTTP 429 Status Code
The 429 Too Many Requests status code indicates that the client has sent too many requests in a given time period. Most APIs enforce rate limits to protect their servers and ensure fair usage.

Common rate limit headers returned by APIs:
- `X-RateLimit-Limit` - Maximum requests allowed in time window
- `X-RateLimit-Remaining` - Requests remaining in current window
- `X-RateLimit-Reset` - Unix timestamp when limit resets
---
## Throttling vs Debouncing

**Throttling** - Limits function execution to at most once per specified time interval. Used when you need consistent function calls during an event stream.

**Debouncing** - Delays function execution until the event stops occurring for a specified duration. Used when you need to wait for a pause before executing.

Example:
- Throttle: Scroll event fires multiple times, but only process every 300ms
- Debounce: Search input field waits 500ms after user stops typing before querying API
---
## Implementation

### Throttle Function
```javascript
function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            return func(...args);
        }
    };
}
```
---
### Debounce Function
```javascript
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}
```
---
### Rate Limit Handling
Detect 429 status code and implement backoff strategy. Inform user about rate limits and prevent unnecessary requests.

---
[Task](../Day_73/Task/README.md)
---

# Summary
- API Rate Limits are essential for protecting server resources and ensuring fair usage among users.
- Throttling and debouncing are two techniques used to control the rate of function execution, each serving different purposes.
- The HTTP 429 status code indicates that the client has exceeded the allowed number of requests in a given time frame.
- Implementing proper handling for rate limits and throttling can improve application performance and user experience.
- Understanding and respecting API rate limits is crucial for maintaining access to third-party services and avoiding potential penalties.
- ---