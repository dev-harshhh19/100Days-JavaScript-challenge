# Day 89-93: Recipe Finder

A recipe finder application built with vanilla JavaScript using TheMealDB API.

## Day 89: Search by Ingredient

- Set up modular project structure
- Implemented search input with Enter key support
- Fetch recipes from TheMealDB API by ingredient
- Display recipe cards with image and title
- Loading, error, and empty state handling
- Theme toggle (light/dark mode)

## Features

- Search recipes by ingredient
- Responsive recipe card grid
- Loading spinner during API calls
- Error handling with user feedback
- Theme toggle with localStorage persistence

## Project Structure

```
Day_89-93/
├── index.html
├── style.css
├── script.js
├── css/
│   ├── base.css, header.css, search.css, recipes.css, responsive.css
└── Js/
    ├── api.js, ui.js, theme.js
```

## How to Run

1. `npx serve` in `Day_89-93` folder
2. Open `http://localhost:3000/`

## API Used

- [TheMealDB](https://www.themealdb.com/api.php) - Free meal database API

## Key Concepts

- ES6 Modules
- Fetch API
- Async/Await
- Error Handling
- DOM Manipulation

---
