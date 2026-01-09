# Day 89-93: Recipe Finder

A recipe finder application built with vanilla JavaScript using TheMealDB API.

## Day 89: Search by Ingredient

- Set up modular project structure
- Fetch recipes from TheMealDB API by ingredient
- Display recipe cards with image and title
- Loading, error, and empty state handling

## Day 90: Filter by Category

- Added category dropdown populated from API
- Filter recipes by selecting a category
- Can browse categories without searching first
- State management for current search/filter

## Features

- Search recipes by ingredient
- Filter by meal category
- Responsive recipe card grid
- Theme toggle (light/dark mode)
- Error handling

## Project Structure

```
Day_89-93/
├── index.html, style.css, script.js
├── css/ (base, header, search, recipes, responsive)
└── Js/ (api.js, ui.js, theme.js)
```

## How to Run

1. `npx serve` in `Day_89-93` folder
2. Open `http://localhost:3000/`

## API Used

- [TheMealDB](https://www.themealdb.com/api.php)

---
