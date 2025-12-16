# Day 66 - JSONPlaceholder API

## What is JSONPlaceholder?
JSONPlaceholder is a fake online REST API used for testing and prototyping.
```text
https://jsonplaceholder.typicode.com
```

## Available Endpoints

| Resource | Endpoint    |
| -------- | ----------- |
| Posts    | `/posts`    |
| Comments | `/comments` |
| Users    | `/users`    |
| Albums   | `/albums`   |
| Photos   | `/photos`   |
| Todos    | `/todos`    |
---

## 1. Fetch all posts
```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response =>  response.json())
    .then(data => console.log(data));
```
- `fetch`: makes http request
- `.json()`: parses JSON response
- `data`: array of posts
---

## 2. Fetch a single post
```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log(data));
```
- Fetches post with ID 1
---

## 3. Using async/await
```javascript
async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
}
```
- `async/await`: modern syntax for handling asynchronous code
---

## 4. Get posts by a specific user
```javascript
fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    .then(response => response.json())
    .then(data => console.log(data));
```
- Fetches posts by user with ID 1
---

## 5. Limit results
```javascript
fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then(response => response.json())
    .then(data => console.log(data));
```
- Limits results to 5 posts
---

## 6. POST (Create Data)
```javascript
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "My JS Journey",
        body: "Day 66 learning APIs",
        userId: 1
    })
})
    .then(res => res.json())
    .then(data => console.log(data));
```
---

## 7. PUT (Update Data)
```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    }

    body: JSON.stringify({
        title: "Updated Title",
        body: "Updated body content",
        userId: 1
    })
})

    .then(res => res.json())
    .then(data => console.log(data));
```
---

## 8. PATCH (Partial update)
```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Partially Updated Title"
    })
})
    .then(res => res.json())
    .then(data => console.log(data));
```
---

## 9. DELETE (Remove Data)
```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"
})
    .then(res => console.log("Deleted"));
```
---

## 10. Display posts in the DOM
```html
<ul id="posts"></ul>
```
```javascript
async function showPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    const ul = document.getElementById("posts");
    ul.innerHTML = posts
        .map(post => `<li>${post.title}</li>`)
        .join("");    
}
showPosts();
```
---

## 11. Fetch users + their posts
```javascript
async function getUsersWithPosts() {
    const users = await fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json());

    const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json());

    const result = users.map(user => ({
        ...user,
        posts: posts.filter(p => p.userId === user.id)
    }));

    console.log(result);
}
getUsersWithPosts();
```
---

## 12. Error Handling
```javascript
fetch("https://jsonplaceholder.typicode.com/invalid-endpoint")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error("There was a problem with the fetch operation:", error));
```
---

## 13. Parallel Requests (Promise.all)
```javascript
async function fetchData() {
    const [posts, users] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()),
        fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
    ]);

    console.log("Posts:", posts);
    console.log("Users:", users);
}
fetchData();
```
---

## 14. Simulating Pagination
```javascript
let page = 1;
async function fetchPosts(page) {
    const limit = 5;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
    const data = await response.json();
    console.log(`Page ${page}:`, data);
    page++;
}
fetchPosts(page);
```
---

[TASK](../Day_66/TASK/README.md)
---

# Summary
- JSONPlaceholder is a free fake REST API for testing.
- Common HTTP methods: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`.
- Use `fetch` for making requests and handling responses.
- Error handling and parallel requests improve robustness and efficiency.
- Data can be displayed dynamically in the DOM.
---
