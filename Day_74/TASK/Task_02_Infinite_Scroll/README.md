# Task 2: Infinite Scroll

## Overview
Automatic content loading triggered by scroll position. No manual pagination controls.

## Implementation Details

**API Endpoint**: `https://jsonplaceholder.typicode.com/posts`  
**Batch size**: 10 items  
**Total items**: 100  
**Trigger threshold**: 200px from bottom

### Core Files
- `infinite-scroll.js` - InfiniteScroll class with scroll detection
- `app.js` - Event handlers and content appending
- `index.html` - Content container and UI elements
- `style.css` - Layout styling

### Key Methods
```javascript
// infinite-scroll.js
loadMore()           // Fetch next batch
isNearBottom()       // Check if user scrolled near bottom
reset()              // Reset to initial state
getState()           // Get loading/complete status
```

### Scroll Detection Logic
```javascript
isNearBottom() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  return (scrollHeight - (scrollTop + clientHeight)) < 200;
}
```

### Features Implemented
- Automatic loading on scroll
- Debounced scroll events (100ms delay)
- Loading indicator during fetch
- End-of-content detection
- Scroll-to-top button (appears after scrolling)
- Statistics tracking (posts loaded, batch count)

## Running
Open `index.html` in browser. Scroll down to trigger loading.

## Technical Notes
- Debouncing prevents excessive API calls during rapid scrolling
- Uses `IntersectionObserver` alternative approach via scroll events
- Prevents duplicate requests with loading state flag
- Displays completion message when all items loaded
- Detect end of content
- Provide navigation back to top
- Optimize DOM operations
- Handle errors gracefully
