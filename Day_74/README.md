# Day 74 - Pagination & Infinite Scroll

## What is it?

Content is split into pages (Page 1, 2, 3…). Users click buttons to move between them.

## Where is it used?

- Blogs
- E-commerce sites
- Google search results
- Online stores
- Tables & dashboards

## How pagination works (logic)

- Decide how many items per page
- Calculate which items to show
- Update when page changes

## Basic Example Code

```javascript
const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
const itemsPerPage = 5;
let currentPage = 1;

function showPage(page) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  console.log(items.slice(start, end));
}
showPage(currentPage);
```

## Buttons

```js
document.getElementById("next").onclick = () => {
  currentPage++;
  showPage(currentPage);
};

document.getElementById("prev").onclick = () => {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
};
```

## Pros

- Easy to control
- Better performance
- User knows where they are

## Cons

- Extra clicks
- Breaks scrolling flow

---

## Infinite Scroll (Auto Loading on Scroll)

**What it is:**
More content loads automatically when the user scrolls down.

**Where it’s used:**

- Instagram
- TikTok
- Twitter/X

## Basic Example Code

```javascript
let page = 1;

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    loadMore();
  }
});

function loadMore() {
  console.log("Loading page", page);
  page++;
}
```
## Better Way: Intersection Observer (Recommended)
```javascript
const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    loadMore();
  }
});

observer.observe(document.getElementById("loader"));
function loadMore() {
  console.log("Loading page", page);
  page++;
}
```

## Pros
- Smooth user experience
- No clicking needed
- Great for social feeds

## Cons
- Can hurt performance
- Harder to reach footer
- No clear “end”

---

## Pagination vs Infinite Scroll
| Feature      | Pagination     | Infinite Scroll    |
| ------------ | -------------- | ------------------ |
| User Control | High           | Low                |
| Performance  | Better         | Can degrade        |
| UX           | Structured     | Smooth             |
| Best For     | Search, tables | Feeds, social apps |
| Accessibility| Easier         | Harder             |
---

## When to Use What?
- Use Pagination for structured content (search results, tables).
- Use Infinite Scroll for dynamic feeds (social media, news).
- Consider hybrid approaches for large datasets.
- Always test for performance and user experience.
- Ensure accessibility for all users.
- Optimize loading strategies (lazy loading, caching).
- Monitor user behavior to refine the experience.
---

[TASK](../Day_74/TASK/README.md)

---

# Summary
- Pagination splits content into pages for better control.
- Infinite scroll loads content as users scroll for a seamless experience.
- Choose based on content type, user needs, and performance considerations.
- Both techniques enhance user experience when implemented thoughtfully.
---