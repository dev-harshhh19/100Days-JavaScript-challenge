# Day 62 - Advanced Promises and Handling Multiple Async Operations

**NOTE: This topics basics are covered in Day 39 - Promises ( Basic ) [Check here](../Day_39/39_async_await.md)**

---

## 1. Recap of Promises
A **Promise** is an object representing the eventual completion (or failure) of an asynchronous operation. Promises allow you to manage asynchronous operations in a more manageable way compared to traditional callback functions.
A Promise can be in one of three states:
- **Pending**: The initial state, neither fulfilled nor rejected.
- **Fulfilled**: The operation completed successfully.
- **Rejected**: The operation failed.

Basic Example:
```javascript
const newPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve(`Promise resolved successfully!`);
    } else {
        reject(`Promise rejected!`);
    }
});

newPromise
    .then(result => console.log(result))
    .catch(error => console.error(error));
```
- `.then()` is called when the Promise is fulfilled.
- `.catch()` is called when the Promise is rejected.
---
## 2. Handling Multiple Promises
Handling multiple asynchronous operations simultaneously is common in modern web development. Whether it’s fetching multiple resources from an API or performing several I/O tasks, you need to manage multiple Promises. Here are some common methods:
### 2.1 `Promise.all()`:
  - `Promise.all()` takes an array of Promises and returns a single Promise that resolves when all of the input Promises have resolved, or rejects if any of the input Promises reject.
```javascript
const promise1 = fetch('https://jsonplaceholder.typicode.com/users');
const promise2 = fetch('https://jsonplaceholder.typicode.com/posts');

Promise.all([promise1, promise2])
    .then(async ([usersResponse, postsResponse]) => {
        const users = await usersResponse.json();
        const posts = await postsResponse.json();
        console.log('Users:', users);
        console.log('Posts:', posts);
    })
    .catch(error => console.error('Error fetching data:', error));
```
- When to use `Promise.all()`: If the Promises are independent of each other and you want to wait for all of them to finish.
---
### 2.2 `Promise.allSettled()`:
  - ` Promise.allSettled()` waits for all the provided Promises to either resolve or reject. Unlike Promise.all(), it doesn't short-circuit if one of the Promises is rejected.
```javascript
const promise1 = fetch('https://jsonplaceholder.typicode.com/users');
const promise2 = fetch('https://jsonplaceholder.typicode.com/posts');
const promise3 = fetch('https://jsonplaceholder.typicode.com/comments');

Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Promise ${index + 1} succeeded with value:`, result.value);
            } else {
                console.log(`Promise ${index + 1} failed with reason:`, result.reason);
            }
        });
    });
```
- When to use Promise.allSettled(): When you need to wait for all Promises to settle, regardless of success or failure.
---
### 2.3 `Promise.race()`: 
`Promise.race()` returns the result of the first Promise that resolves or rejects. This method is helpful when you want to execute a task and take action based on the first result.
```javascript
const timeout = new Promise((_, reject) => setTimeout(() => reject("Timeout Error"), 2000));
const fetchData = fetch('https://jsonplaceholder.typicode.com/users');

Promise.race([timeout, fetchData])
    .then(response => {
        console.log('Data fetched:', response);
    })
    .catch(error => {
        console.log('Error:', error);
    });
```
- When to use `Promise.race()`: When you want to trigger an action as soon as one of the promises is fulfilled or rejected (e.g., handling timeouts).
- ---
### 2.4 `Promise.any()`:
`Promise.any()` returns the first fulfilled Promise and ignores all rejections. If all Promises are rejected, it returns an AggregateError.
```javascript
const promise1 = fetch('https://jsonplaceholder.typicode.com/invalid');  // This will fail
const promise2 = fetch('https://jsonplaceholder.typicode.com/users');  // This will succeed

Promise.any([promise1, promise2])
    .then(response => console.log('First fulfilled:', response))
    .catch(error => console.log('All promises were rejected:', error));
```
- When to use `Promise.any()`: When you only care about the first successful result and are okay if others fail (e.g., getting data from multiple sources).
---
## 3. Error Handling with Multiple Promises
Proper error handling is crucial when dealing with multiple Promises. In some cases, you want to handle errors individually, while in others you might want to stop all operations if one fails.
**Example of Handling Errors Individually:**
```javascript
const fetchUserData = async () => {
    const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users');
    const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts');

    try {
        const [users, posts] = await Promise.all([fetchUsers, fetchPosts]);
        const usersData = await users.json();
        const postsData = await posts.json();
        console.log('Users:', usersData);
        console.log('Posts:', postsData);
    } catch (error) {
        console.log('Error:', error.message);
    }
};

fetchUserData();
```
- Handling errors individually can prevent the entire process from failing due to a single rejected Promise.
---
## 4. Handling Concurrency and Throttling
When dealing with multiple async tasks, you might need to throttle the number of concurrent operations to avoid overloading the system or hitting API rate limits.

**Example of Throttling Concurrent Requests**:
```javascript
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithLimit(urls, limit = 3) {
    const result = [];
    let i = 0;

    async function worker() {
        while (i < urls.length) {
            const currentIndex = i++;
            try {
                const response = await fetch(urls[currentIndex]);
                result.push(await response.json());
                await wait(100); // Simulate a small delay
            } catch (error) {
                console.error('Fetch error:', error);
            }
        }
    }

    await Promise.all(Array(limit).fill().map(worker));
    return result;
}

const urls = ['url1', 'url2', 'url3', 'url4', 'url5'];
fetchWithLimit(urls).then(result => console.log(result));
```
- This ensures that no more than 3 requests are made concurrently.
---
## 5. Real-World Example: Fetching User Data and Posts in Parallel
```javascript
const getUserAndPosts = async (userId) => {
    try {
        const [user, posts] = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res => res.json()),
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(res => res.json())
        ]);
        return { ...user, posts };
    } catch (error) {
        console.error('Error:', error);
    }
};

getUserAndPosts(1).then(result => console.log(result));
```
- **Use case**: Fetching **user data** and **user posts** concurrently for a specific user, improving performance by waiting for both resources simultaneously.
---
[TASK](./task/README.md)
---