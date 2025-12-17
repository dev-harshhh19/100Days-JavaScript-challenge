# Day 67 - Sending Data (POST, PUT, DELETE)

In modern JS, we usually send data using the Fetch API. 

## 1. POST Request - Create / Send New Data
Used when adding new data (e.g., creating a user, submitting a form).
Example: Sending data to a server
```javascript
fetch("https://api.example.com/users", {
    method: "POST",
     headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "harshad",
        email: "harshad@example.com"
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
```
Key Points:
- `method: "POST"`
- `body` must be a string → use `JSON.stringify()`
- Common for forms & signup pages
---
## 2. PUT Request - Update Existing Data
Used when updating an existing resource completely.

Example: Update a user
```javascript
fetch("https://api.example.com/users/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "harshad Updated",
        email: "harshad.updated@example.com"
    })
});
```
Key Points:
- `method: "PUT"`
- Replaces the entire resource
---
## 3. DELETE Request - Remove Data
Used when deleting a resource.
Example: Delete a user
```javascript
fetch("https://api.example.com/users/1", {
    method: "DELETE"
});
.then(res => {
    if (res.ok) {
        console.log("Deleted successfully");
    }
});
```
Key Points:
- `method: "DELETE"`
- Usually no body is sent
---

## Using `async / await`
You can also use `async / await` for cleaner syntax:
```javascript
async function createUser() {
    try {
        const response = await fetch("https://api.example.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "harshad",
                email: "harshad@example.com"
            })
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}
createUser();
```
---
## POST vs PUT vs DELETE
| Method | Purpose         | Body | Common Use Case |
| ------ | --------------- | ---- | --------------- |
| POST   | Create new data | YES    | Signup, forms   |
| PUT    | Update data     | YES    | Edit profile    |
| DELETE | Remove data     | NO    | Delete item     |
---

# Summary
- Use `POST` to create new resources.
- Use `PUT` to update existing resources.
- Use `DELETE` to remove resources.
- Always set appropriate headers, especially `Content-Type` for JSON data.
- Consider using `async / await` for better readability.
- Handle errors gracefully with `.catch()` or try-catch blocks.
---
