# Day 85-88: Quiz Game

A quiz game application built with vanilla JavaScript using ES6 Modules.

## Day 85: Timer Setup

- Set up modular project structure
- Created `script.js` as main entry point importing other modules
- Created `style.css` as main stylesheet importing CSS modules
- Implemented 30-second countdown timer per question
- Timer displays warning (yellow) at 10s, danger (red) at 5s

## Day 86: Score Tracking

- Added score display in quiz header
- Real-time score updates after each correct answer
- Score breakdown on results screen (correct/incorrect counts)

## Day 87: High Score & JSON Question Bank

- Created `score.js` module with localStorage persistence
- High score display on start screen
- "New High Score!" celebration on results
- **JSON Question Bank**: Replaced hardcoded questions with `questions.json` containing 20+ questions
- Implemented asynchronous data fetching with `fetch()` API
- Start button shows "Loading..." state while fetching data

## Features

- 20+ JavaScript knowledge questions loaded from JSON
- 30-second timer per question with visual feedback
- Real-time score tracking
- High score persistence with localStorage
- Visual answer feedback (correct/incorrect)

## Project Structure

```
Day_85-88/
├── index.html
├── style.css           ← imports CSS modules
├── script.js           ← imports JS modules
├── css/
│   ├── base.css
│   ├── header.css
│   ├── quiz.css
│   ├── timer.css
│   └── responsive.css
└── Js/
    ├── questions.json  ← Question Bank
    ├── questions.js    ← Fetches JSON data
    ├── timer.js
    ├── score.js
    └── ui.js
```

## How to Run

1. `npx serve` (Required for `fetch` to work correctly)
2. Open `http://localhost:3000/Day_85-88/`

## Key Concepts

- ES6 Modules (`import` / `export`)
- Asynchronous JavaScript (`async` / `await` / `fetch`)
- JSON Data Handling
- `localStorage` for persistence
- `setInterval()` for timer
- Event delegation

---
