# Day 66 - Todo App (JSONPlaceholder)

A minimal Todo app that demonstrates basic CRUD operations using the JSONPlaceholder test API. Built with plain HTML, CSS, and JavaScript.

## Quick Start
- Open `index.html` in your browser, or use VS Code Live Server.
- Add a todo, toggle complete, or delete from the list.

## Features
- Fetch first 5 todos from API (GET with `?_limit=5`).
- Create todo (POST) and optimistically prepend to the list.
- Toggle completion (PATCH) with local UI update.
- Delete todo (DELETE) with local state sync.

## Files
- `index.html` — Markup and app shell
- `style.css` — Basic styling
- `script.js` — App logic (fetch, render, add, toggle, delete)

## How It Works
- `fetchTodos()` loads initial items and calls `renderTodos()`.
- `addTodo()` posts a new item and updates local state.
- `toggleTodo(id)` flips completion via PATCH and updates UI.
- `deleteTodo(id)` removes the item from server and local list.

## Notes
- JSONPlaceholder is a mock API; writes are not persisted. The app updates local state to reflect changes immediately for demo purposes.
- Errors are logged to the console for simplicity.

## Next Ideas
- Edit todo titles inline
- Persist to a real backend
- Add filters (All / Active / Completed)
