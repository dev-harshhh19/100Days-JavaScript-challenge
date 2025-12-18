# API Logic Separation

Split API logic into a separate module.

## Files

- **api.js** - All API functions (fetch, create, update, delete)
- **script.js** - Imports API functions and handles UI
- **index.html** - Basic UI with buttons
- **style.css** - Styling

## Usage

```javascript
import { fetchPosts, createPost } from './api.js';

const posts = await fetchPosts();
```

Open `index.html` in browser with a local server.
