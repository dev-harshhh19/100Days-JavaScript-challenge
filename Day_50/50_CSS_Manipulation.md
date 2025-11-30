# Day 50 - CSS Manipulation with JavaScript

### Overview:
- Javascript can change styles dynamically by accessing and modifying CSS properties of HTML elements.
- There are **three main ways**:

1. **Inline Styles(element.style)**:
- Directly changes a specific CSS property:
```html
<div id="box">Hello</div>
<style>
    const box = document.getElementById('box');
    box.style.backgroundColor = 'lighblue';
    box.style.padding = '20px';
    box.style.borderRadius = '5px';
</style>
```
- JS uses camelCase for multi-word CSS properties
    - `background-color` → `backgroundColor`
    - `font-size` → `fontSize`
- **Note**: These styles override CSS rules because they set inline styles.
---
1. **Add/Remove CSS Classes (classList)**:
- More efficient for multiple style changes:
```html
<style>
  .active {
    background: gold;
    color: black;
    padding: 10px;
  }
</style>

<div id="text">Click me!</div>

<script>
  const text = document.getElementById("text");

  text.addEventListener("click", () => {
    text.classList.toggle("active");
  });
</script>
```
Useful `classList` methods:

| Method       | What it does                     |
| ------------ | -------------------------------- |
| `add()`      | Add a class                      |
| `remove()`   | Remove a class                   |
| `toggle()`   | Add/remove depending on presence |
| `contains()` | Check if element has a class     |

---
3. **Get Computed Styles(window.getComputedStyle)**:
- Use this to read the actual rendered styles.
```html
<script>
    const box = document.getElementById(`box`);
    const style = window.getComputedStyle(box);

    console.log(style.backgroundColor);
</script>
```
- Useful for getting styles applied via external stylesheets or inherited styles.
---
### CSS variables manipulation:
- CSS variables (custom properties) can be manipulated via JavaScript:
```html
<style>
  :root {
    --main-color: coral;
  }

  #header {
    background-color: var(--main-color);
    color: white;
    padding: 15px;
  }
</style>

<script>
    const root = document.documentElement;

    root.style.setProperty('--main-color', 'teal');
</script>
```
- This changes the `--main-color` variable, affecting all elements using it.
---

# Summary:
- Use `element.style` for quick, single-property changes.
- Use `classList` for managing multiple styles efficiently.
- Use `getComputedStyle` to read actual styles applied to elements.
- Use `style.setProperty` to manipulate CSS variables.
---