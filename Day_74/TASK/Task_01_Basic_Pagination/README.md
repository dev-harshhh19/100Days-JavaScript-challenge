# Task 1: Basic Pagination

## Overview
Standard pagination implementation with navigation controls and page caching.

## Implementation Details

**API Endpoint**: `https://jsonplaceholder.typicode.com/posts`  
**Items per page**: 10  
**Total items**: 100

### Core Files
- `pagination.js` - Pagination class with fetch/cache logic
- `app.js` - UI event handlers and DOM updates
- `index.html` - Interface with navigation controls
- `style.css` - Layout and styling

### Key Methods
```javascript
// pagination.js
fetchPage(page)      // Fetch data for specific page
goToPage(page)       // Navigate to page
nextPage()           // Next page
prevPage()           // Previous page
getPageInfo()        // Current state info
```

### Features Implemented
- First/Previous/Next/Last navigation
- Direct page number selection
- Keyboard navigation (arrow keys)
- Page caching (reduces API calls)
- Loading indicator
- Statistics display (current/total pages, post count)

## Running
Open `index.html` in browser. No build process required.

## Technical Notes
- Uses Fetch API for HTTP requests
- Caches loaded pages in Map object
- Calculates total pages from response headers
- Event delegation for page number buttons
