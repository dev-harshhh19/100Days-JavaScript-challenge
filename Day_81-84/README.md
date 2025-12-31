# Day 81-84: Expense Tracker

A complete expense tracking application built with vanilla JavaScript using **ES6 Modules**.

## Features
 
- Clean, modern UI with gradient design
- Add expenses with description, amount, and category
- Form validation with error messages
- Responsive design for all devices
- Real-time expense display

## Project Structure

```
Day_81-84/
├── index.html          ← Main HTML file
├── style.css           ← Main CSS (imports modules)
├── script.js           ← Main JS (imports modules)
├── css/
│   ├── base.css        ← Reset & base styles
│   ├── header.css      ← Header styles
│   ├── form.css        ← Form & button styles
│   ├── expenses.css    ← Expense list styles
│   └── responsive.css  ← Media queries
└── Js/
    ├── validation.js   ← Input validation
    ├── expenseManager.js ← Expense CRUD operations
    └── ui.js           ← DOM manipulation
```

## Modular Architecture

### CSS Modules (using `@import`)
| Module | Purpose |
|--------|---------|
| `base.css` | Reset, body, container |
| `header.css` | Header section |
| `form.css` | Form, inputs, buttons, errors |
| `expenses.css` | Expense list & items |
| `responsive.css` | Mobile breakpoints |

### JS Modules (using `import/export`)
| Module | Exports |
|--------|---------|
| `validation.js` | `validateExpenseInput()` |
| `expenseManager.js` | `createExpense()`, `addExpense()`, `getExpenses()`, `deleteExpense()`, `clearAllExpenses()` |
| `ui.js` | `showError()`, `clearError()`, `resetForm()`, `renderExpenses()`, `capitalize()` |

## How to Run

1. Start a local server: `npx serve`
2. Open `http://localhost:3000/Day_81-84/`
3. Add expenses using the form

## Key Concepts Covered

- **ES6 Modules**: `import` / `export` for code organization
- **CSS `@import`**: Modular stylesheet architecture
- **Form Handling**: `preventDefault()`, validation, reset
- **DOM Manipulation**: `getElementById()`, `addEventListener()`, `innerHTML`
- **Array Methods**: `push()`, `filter()`, `map()`
- **Template Literals**: Dynamic HTML generation

## Technologies Used

- HTML5
- CSS3 (Flexbox, Animations, Media Queries)
- Vanilla JavaScript (ES6+ Modules)

---
