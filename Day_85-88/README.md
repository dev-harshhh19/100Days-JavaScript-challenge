# Day 85-88: Quiz Game

A quiz game application built with vanilla JavaScript using ES6 Modules.

## Day 85: Timer Setup

- Set up modular project structure
- Implemented 30-second countdown timer per question
- Timer displays warning (yellow) at 10s, danger (red) at 5s

## Day 86: Score Tracking

- Added score display in quiz header
- Real-time score updates after each correct answer
- Score breakdown on results screen

## Day 87: High Score & JSON Question Bank

- High score persistence with localStorage
- "New High Score!" celebration on results
- Replaced hardcoded questions with `questions.json` (20+ questions)
- Async data fetching with `fetch()` API

## Day 88: Complex State Management

- Created `state.js` with centralized state store
- State includes: currentQuestion, score, correctCount, selectedAnswer, isQuizActive, isLoading
- Subscriber pattern for reactive state changes
- Clean separation between state logic and UI

## Features

- 20+ JavaScript knowledge questions from JSON
- 30-second timer with visual feedback
- Real-time score tracking
- High score persistence
- Centralized state management

## Project Structure

```
Day_85-88/
├── index.html
├── style.css
├── script.js
├── css/
│   ├── base.css, header.css, quiz.css, timer.css, responsive.css
└── Js/
    ├── questions.json, questions.js, timer.js, score.js, state.js, ui.js
```

## How to Run

1. `npx serve`
2. Open `http://localhost:3000/`

## Key Concepts

- ES6 Modules
- Async/Await & Fetch API
- JSON Data Handling
- localStorage
- Centralized State Management
- Subscriber/Listener Pattern

---
