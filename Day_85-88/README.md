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

## Day 87: High Score

- Created `score.js` module with localStorage persistence
- High score display on start screen
- "New High Score!" celebration on results
- High score persists across sessions

## Day 88: Complex State Management

- Created `state.js` module with centralized state
- State includes: currentQuestion, score, correctCount, selectedAnswer, isQuizActive
- Subscriber pattern for state change notifications
- Clean separation between state logic and UI

## Features

- 5 JavaScript knowledge questions
- 30-second timer per question with visual feedback
- Real-time score tracking
- High score persistence with localStorage
- Centralized state management
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
    ├── questions.js
    ├── timer.js
    ├── score.js
    ├── state.js
    └── ui.js
```

## How to Run

1. `npx serve`
2. Open `http://localhost:3000/Day_85-88/`

## Key Concepts

- ES6 Modules (`import` / `export`)
- `setInterval()` / `clearInterval()` for timer
- `localStorage` for high score persistence
- Centralized state management pattern
- Subscriber/listener pattern
- Event delegation

---
