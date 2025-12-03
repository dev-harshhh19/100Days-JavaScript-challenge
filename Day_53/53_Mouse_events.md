# Day 53 - Mouse events ( Scroll, Resize & Mouse Events in JavaScript )
JavaScript gives us powerful way to detect what the user is doing on the page, scroll, resizing the browser, moving the mouse.

This events are essential for creating interactive UI, animations, lazy loading and more.

---

### **Mouse Events**(mousemove, mouseenter, mouseleave, mousedown, mouseup):
## 1. `mousemove` Event: 
- Triggered **continuously** as the mouse pointer moves within an element or window.

#### Important Mouse Coordinates:
- `event.clientX` and `event.clientY` → Coordinates relative to the viewport.
- `event.pageX` and `event.pageY` →  Coordinates relative to the entire document.
- `event.screenX` and `event.screenY` →  Coordinates relative to the user's screen.

**Example:**
```javascript
document.addEventListener('mousemove', e=> {
    console.log(`Mouse Position - 
    X: ${e.clientX}, Y: ${e.clientY}`);
})
```
**Use Cases:**
- Custom cursors
- Parallax effects
- Drawing/painting apps
- Drag & drop
- Following animations

<b>*Note: Fires very frequently, so for performance, throttle if needed.*</b>

---

## 2. `mouseenter` and `mouseleave` Events:
    
- #### 2.1 `mouseenter` Event: 
    - Fires once when the mouse enters an element.
    - Unlike mouseover, it does NOT bubble and won’t trigger when entering child elements.
```javascript
element.addEventListener('mouseenter', () => {
    console.log(`Mouse entered`);
});
```
**Use Cases:**
- Tooltips
- Hover-triggered animations
- Highlighting UI elements
- Interactive nav menus
---
- #### 2.2 `mouseleave` Event:
    - Pair with `mouseenter`.
    - Triggers once when the mouse leaves an element.
```javascript
box.addEventListener('mouseleave', () => {
    box.style.backgroundColor = "";
})
```
---

## 3. Scroll Event:
The `scroll` event is detects when the user scrolls the webpage or any scrollable element.

**Syntax:**
```javascript
document.addEventListener('scroll', function() {
    console.log(window.scrollY); // Vertical scroll position
});
```
**Useful Properties**:
- `window.scrollY` → vertical scroll position
- `window.scrollX` → horizontal scroll position
- `element.scrollTop` → scroll inside elements
- `element.scrollHeight` → total height
- `element.clientHeight` → visible height

**Example:**
```javascript
// Change Header Color When Scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        document.querySelector("header").classList.add("scrolled");
    } else {
        document.querySelector("header").classList.remove("scrolled");
    }
});
```
> Why Scroll Event is Important?
- Sticky navigation bar
- Lazy loading images
- Infinite scrolling
- Reveal animations on scroll
- Scroll progress indicators
- Parallax effects
---
### Performance Note:
Scroll events can fire rapidly, leading to performance issues. To optimize:
- For heavy operations, use: throttling or debouncing techniques.
```javascript
let timeout;
window.addEventListener('scroll', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        console.log(`scroll stopped!`);
    }, 100);
});
```
- This prevents performance issues.
---

## 4. Resize Event:
The `resize` event is triggered when the browser window is resized.
**Syntax:**
```javascript
window.addEventListener('resize', function() {
    console.log(window.innerWidth, window.innerHeight);
}); 
```
### Important Properties:
- `window.innerWidth` → viewport width
- `window.innerHeight` → viewport height
- `window.outerWidth` → whole browser window width
- `window.outerHeight` → whole browser window height

**Use case of Resize Event:**
- Adjusting layout
- Recalculating dynamic element sizes
- Loading different images for different screen widths
- Updating canvas or WebGL drawing area
- Triggering responsive JS behaviors

### Performance Note:
The resize event fires rapidly while the user drags the window. Use throttling to avoid lag.

---

> Example of scroll, resize and mousemove events combined:
```javascript
window.addEventListener('scroll', () => {
    document.body.style.backgroundColor = window.scrollY > 200 ? '#eef' : '#fff';
});

window.addEventListener('resize', () => {
    console.log(`Viewport: ${window.innerWidth} x ${window.innerHeight}`);
});

document.addEventListener('mousemove', (e) => {
    document.querySelector('.cursor').style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
```
---

### Comparison Table: 
| Event          | Triggered When | Applies To     | Bubbling? | Use Cases                 |
| -------------- | -------------- | -------------- | --------- | ------------------------- |
| **mousemove**  | Pointer moves  | window/element | Yes       | cursors, draw, animations |
| **mouseenter** | Pointer enters | element        | No      | hover UI                  |
| **scroll**     | User scrolls   | window/element | Yes       | sticky nav, lazy load     |
| **resize**     | Window resized | window only    | Yes       | responsive layout         |
---

[Task - Sticky Header on Scroll](./task/)

---

# Summary:
- Mouse events like `mousemove`, `mouseenter`, and `mouseleave` allow interaction based on pointer movement.
- The `scroll` event detects page or element scrolling, useful for dynamic UI changes.
- The `resize` event responds to browser window size changes, enabling responsive designs.
- Optimize performance for scroll and resize events using throttling or debouncing techniques.
---
