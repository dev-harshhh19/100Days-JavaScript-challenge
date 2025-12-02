# Day 52 - Timers
In JS, Timers are used to execute code after a specified delay or at regular intervals. The two main functions for timers are `setTimeout` and `setInterval`.

## setTimeout
- `setTimeout` is used to execute a function once after a specified delay (in milliseconds).
```javascript
setTimeout(() => {
    console.log("This message is displayed after 2 seconds");
}, 2000);
```
---
## setInterval
- `setInterval` is used to execute a function repeatedly at spefified intervals (in milliseconds).
```javascript
setInterval(() => {
    console.log("This message is displayed every 3 seconds");
},3000);
```
---

## Clearing Timers
- You can stop a timer using `clearTimeout` for `setTimeout` and `clearInterval` for `setInterval`.
```javascript
const timeoutId = setTimeout(() => {
    console.log("This message will not be displayed");
}, 5000);

clearTimeout(timeoutId); // Cancels the timeout
```
---
```javascript
const intervalId = setInterval(() => {
    console.log("This message will not be displayed anymore");
}, 2000);
clearInterval(intervalId); // Cancels the interval
```
---
## Practical Example
```javascript
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Count: ${count}`);
    if(count === 5) {
        clearInterval(intervalId);
        console.log("Counter stopped after reaching 5");
    }
}, 1000);
```
- This code will log the count every second and stop after reaching 5.
---

### Task:
-  Build a simple countdown timer that counts down from 10 to 0 and displays "Time's up!" when it reaches 0.
[check Here](./task/)