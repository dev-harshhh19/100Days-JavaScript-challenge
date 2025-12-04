# Day 54 - Debounce and Throttle
When working with elements that fires *very frequently* (like scrolling, resizing, typing, mouse movements, etc), performancecan suffer if your callback runs too often.
To fix this, we use **debounce and throttling**

### Why do we need it?
Manu browser events fire continuously:
- `scroll` → Fires many times per second
- `resize` →  Fires continuously while rezing
- `mousemove` → Fires for every pixel the mouse moves
- `keyup`/`input` → Fires for every character typed

Without control, these events can:
- Slow down UI
- cause unnecessary API calls
- drain battery
- lag animations
- make apps feel unresponsive
- crash the browser
So, we use debounce and throttle to limit how often our functions run.
---

## Debounce
- Debounce ensures a function runs only after the event has stopped firing for a certain amount of time.
Waits for inactivity before executing.

### Use Case
- Search Box - Wait until user stops typing to call API
- Auto-save form - After user stops editing
- Window resize - runs expensive layout calculations after resizing is done

### How does it work?
Every time the event fires:
1. Clear the previous timer
2. Start a new timer
3. Only run function if timer completes without being reset

---
### Debounce Example
```javascript
function debounce(func, delay) {
    let timer;

    return function (...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Usage
const handleSearch = debounce(() =>{
    console.log(`Searching...`);
}, 300);

document.getElementById('searchBox').addEventListener('input', handleSearch);
```
- If your type continuously, he function never runs.
- It rins only after you stop typing for 300ms.

---

## Throttle
- Throttle ensures a function runs at most once every specified interval.
- Limits the rate of execution.

### Use Case
- Scroll postions updates (parallaz, animations)
- Infinite scrolling 
- Mouse movement tracking
- Button spam prevention
- API polling

### How does it work?
When the event fires:
1. If the function is allowed (cooldown eneded) → run it
2. If not → ignore until cooldown expires
---

### Throttle Example
```javascript
function throttle(func, limit){
    let lastCall = 0;

    return function (...args){
        const now = Date.now();

        if(now - lastCall >= limit){
            lastCall = now;
            func.apply(this, args);
        }
    };
}

// Usage
const onScroll = throttle(() => {
    console.log(`Scroll event handled`);
}, 200);

document.addEventListener('scroll', onScroll);
```
- Even if scroll fires 1000 times per second, the function only runs once every 200ms.

---

## Quick Comparison (Debounce vs Throttle)
| Scenario                                                 | Use          |
| -------------------------------------------------------- | ------------ |
| User typing in search bar                                | **Debounce** |
| Window resize                                            | **Debounce** |
| Scroll animations                                        | **Throttle** |
| Dragging/mouse move                                      | **Throttle** |
| Saving draft after user stops typing                     | **Debounce** |
| Executing function periodically during continuous events | **Throttle** |
---

## Visual Diagram

### Debounce Diagram

![](https://mermaid.ink/img/pako:eNrNkk9v4jAQxb_KaM4EEZo_i1UhrcrusYeqvVSRVsYZgkXiYR27pUV899qB9EIvvVWRHM_k_d5LMj6i4ppQYJIklVFsNroRlQFomXcCttLUKytfTWy5LXUkwFLtD4nilm1lBqyn_56MopWWjZVd1AJI79j4bk32XO-ldVrpvTQOnvqvuitasw82__6G1Wk215JH3X1F3sm2XUu1qy5I9Idkuby2FPDnhaKR1U1D4VPOwJVuoIc0AQ_U02f0twPgdyO1-dEx9-wI-CVkXTTDDRR3-5Yc9cCmfQO9uV3bpWHo2BJQjA9PlPKXgZyhmDSOI7zkgZQP5mMHJ9hYXaNw1tMEA9DJWOIxelQ4HLEKRdjW0u4qrMwpMGHIz8zdiFn2zXYs_L6Wbjx6KDay7aOETE32LvwGhyIty8EDxREPKOZ5Pr2ZzdJwLeb5rzyd4FsQFeV0UWZZWmQ3YU3n2WmC70PqbJoVeZGWi2xWLooyT8vTB31lEfE?type=png)

---
### Throttle Diagram

![](https://mermaid.ink/img/pako:eNrFUktrGzEQ_itiTi14Tfbt1SEQ7BZ6aaFNCZSFoqwUWVg748pS4tb4v3e16YYGJyE99aYZvtdo5gAdSQUckiRpsSO8MZq3yJgl2nC2FihXTtxhbPm16hVnTsmwTzqy5FocaTv1Iyjs1MoI7UQfsYyJ4AlDf63cfb0VzpvObAV69nX3VPdy7ch7q76_D9h5Q3gKuRLGX5r-KfZSWHstuk37hxY9WHJ-firL2btbFf2c0VoN49wTTnAje5Ll7HNA9ubCWrpT8u1LlIeQnH3xQ0K2JLKS4if-czS2Cs6g_kviGd8oF3U5-6CRxqH-g9nD6M85TtLs0-20xJcCflR7_zjl63d1oYVBmIF2RgL3LqgZDMl6EUs4RKEWxptugQ9PKdymhRaPA2e4qG9E_URzFPR6KsJWCj_dOvAbYXcRolAqt6SAHnhaFqMG8APsgWdZM1_kVZ7WRdPkabqYwc8BlFfzrKqbvKiLvGzqOjvO4NfoejYvF0VVnlVNmWd5UxTp8TcbAzrj?type=png)

---
**[Debounce](./debounce/)**

**[Throttle](./throttle/)**

**[Task](./task/)**

---

# Summary
- **Debounce**: Delays function execution until after a specified period of inactivity. Ideal for events like typing or resizing.
- **Throttle**: Limits function execution to once every specified interval. Best for events like scrolling or mouse movements.
- Both techniques enhance performance and user experience by controlling the frequency of function calls.
- Choose based on whether you want to wait for inactivity (debounce) or limit execution rate (throttle).
- Implement these techniques to optimize event handling in your web applications.
---
