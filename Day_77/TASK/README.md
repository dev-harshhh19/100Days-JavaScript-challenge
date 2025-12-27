# Day 77 Task - Task: Retry fetch up to 3 times before error

### Objective:
Create a function that attempts to fetch data from a given URL. If the fetch fails, it should retry up to 3 times before throwing an error.

### Instructions:
1. Create a function named `fetchWithRetry` that takes a URL as its parameter.
2. Use the Fetch API to attempt to fetch data from the provided URL.
3. If the fetch fails (e.g., network error or non-2xx response),
4. retry the fetch up to 3 times.
5. If all attempts fail, throw an error indicating that the fetch was unsuccessful.
6. If the fetch is successful, return the fetched data.

### [Example](./retryFetch.js)
