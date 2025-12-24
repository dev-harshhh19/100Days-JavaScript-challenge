# Day 74 Tasks - Pagination & Infinite Scroll

## Task Index

### [Task 1: Basic Pagination](Task_01_Basic_Pagination/README.md)
Manual navigation with First/Prev/Next/Last controls. Implements page caching and keyboard navigation.

**Run**: `Task_01_Basic_Pagination/index.html`

---

### [Task 2: Infinite Scroll](Task_02_Infinite_Scroll/README.md)
Automatic content loading on scroll. Uses debounced scroll events with 200px trigger threshold.

**Run**: `Task_02_Infinite_Scroll/index.html`

---

## Structure

```
TASK/
├── Task_01_Basic_Pagination/
│   ├── index.html
│   ├── style.css
│   ├── pagination.js
│   ├── app.js
│   └── README.md
│
└── Task_02_Infinite_Scroll/
    ├── index.html
    ├── style.css
    ├── infinite-scroll.js
    ├── app.js
    └── README.md
```

## Comparison

| Feature | Task 1 | Task 2 |
|---------|--------|--------|
| Navigation Type | Manual | Automatic |
| Page Controls | Yes | No |
| Keyboard Support | Yes | No |
| Caching | Yes | No |
| Scroll Detection | No | Yes |
| Debouncing | No | Yes |

## API
All tasks use: `https://jsonplaceholder.typicode.com/posts`  
Total items: 100

## Usage
Open any `index.html` file directly in browser. No build required.

