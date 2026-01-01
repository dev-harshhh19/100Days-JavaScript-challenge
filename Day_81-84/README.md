# Day 81-84: Expense Tracker

A complete expense tracking application built with vanilla JavaScript using ES6 Modules.

## Day 81: Project Setup & ES6 Modules

- Set up modular project structure
- Created `script.js` as main entry point importing other modules
- Created `style.css` as main stylesheet importing CSS modules
- Implemented form validation and expense adding

## Day 82: Local Storage Integration

- Added `localStorage` to persist expenses across sessions
- Expenses auto-save on add/delete
- Expenses auto-load on page refresh

## Features

- Add expenses with description, amount, and category
- Form validation with error messages
- Local Storage persistence
- Responsive design

## Project Structure

```
Day_81-84/
├── index.html
├── style.css           ← imports CSS modules
├── script.js           ← imports JS modules
├── css/
│   ├── base.css
│   ├── header.css
│   ├── form.css
│   ├── expenses.css
│   └── responsive.css
└── Js/
    ├── validation.js
    ├── expenseManager.js
    └── ui.js
```

## How to Run

1. `npx serve`
2. Open `http://localhost:3000/Day_81-84/`

## Key Concepts

- ES6 Modules (`import` / `export`)
- CSS `@import`
- `localStorage` API
- Form handling & validation
- DOM manipulation

---
