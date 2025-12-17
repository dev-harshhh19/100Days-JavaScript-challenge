# Day 67 - Add New Post API Demo

Simple form that sends a new post to the JSONPlaceholder dummy API and shows the response on the page.

## Run it
- Open `index.html` in a browser (or use a local server/VS Code Live Server to avoid CORS restrictions).
- Enter a title and body, then submit. The API echoes back a mock payload which is rendered under the form.

## Files
- `index.html` – markup for the form and response area
- `style.css` – styling for the page
- `script.js` – handles form submit and POST request

## API
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Method: `POST`
- Body: `{ title, body, userId: 1 }`
- Returns a mock JSON object with an `id` when successful.
