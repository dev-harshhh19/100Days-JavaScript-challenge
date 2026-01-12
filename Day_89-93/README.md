# Day 89-93: Recipe Finder

A recipe finder application built with vanilla JavaScript using TheMealDB API.

## Features

- **Search recipes** by name
- **Random recipes** for inspiration
- **Save favorites** with localStorage
- **Tab navigation** (Search / Favorites)
- **Dark/Light theme** toggle
- **Recipe detail modal** with ingredients & instructions
- **Responsive design**

## Day-by-Day Progress

### Day 89: Search by Ingredient
- Project structure setup
- Search functionality with TheMealDB API
- Recipe cards with images

### Day 90: Filter by Category
- Category filtering
- Enhanced UI components

### Day 91: Save Favorites
- Heart button on recipe cards
- localStorage persistence
- Favorites section

### Day 92: Combine API and Storage
- Tab navigation (Search / Favorites)
- Synced favorites count
- Unified tabbed interface

### Day 93: Final Adjustments
- Code cleanup and optimization
- Error handling improvements
- Documentation complete

## Project Structure

```
Day_89-93/
├── index.html
├── style.css
├── script.js
├── css/
│   ├── base.css
│   ├── header.css
│   ├── search.css
│   ├── recipes.css
│   └── responsive.css
└── Js/
    ├── api.js
    ├── ui.js
    ├── theme.js
    └── favorites.js
```

## How to Run

```bash
cd Day_89-93
npx serve
# Open http://localhost:3000
```

## Key Concepts

- ES6 Modules
- Fetch API & Async/Await
- localStorage
- Event Delegation
- Tab Navigation Pattern
- Modal Component
- Theme Toggle

## API Used

[TheMealDB](https://www.themealdb.com/api.php) - Free meal database API

---
