# Day 76 - API Data Normalization

## 1. What is API Data Normalization?
**API Data Normalization** is the process of transforming and structuring raw data from an API into a more efficient and usable format for your application.
This helps ensure that the data you work with is consistent, easy to manipulate, and easy to maintain.
### Example of Raw API Data (before normalization):
```json
{
  "user": {
    "id": 1,
    "name": "Harshad",
    "address": {
      "street": "123 Main St",
      "city": "Mumbai"
    },
    "posts": [
      {
        "id": 101,
        "title": "Hello World",
        "content": "This is my first post"
      },
      {
        "id": 102,
        "title": "Another Day",
        "content": "Today was great!"
      }
    ]
  }
}
```
- here the user data is nested within the user object, and posts are nested within an array.
- This structure can make it difficult to access and manipulate specific pieces of data.
---
## 2. Why Normalize Data?
- **Efficiency**: Easier to access and manipulate data.
- **Consistency**: Uniform structure across different data sets.
- **Performance**: Improved performance when querying and updating data.

---
## 3. Basic Normalization Example
To normalize the above API data, we could structure it like this:

```json
{
  "users": {
    "1": {
      "id": 1,
      "name": "Harshad",
      "addressId": 1,
      "postIds": [101, 102]
    }
  },
  "addresses": {
    "1": {
      "street": "123 Main St",
      "city": "Mumbai"
    }
  },
  "posts": {
    "101": {
      "id": 101,
      "title": "Hello World",
      "content": "This is my first post",
      "userId": 1
    },
    "102": {
      "id": 102,
      "title": "Another Day",
      "content": "Today was great!",
      "userId": 1
    }
  }
}
```
- In this normalized structure:
  - Users, addresses, and posts are stored in separate collections.
  - Relationships are maintained using IDs (e.g., `addressId`, `postIds`, `userId`).
  - This makes it easier to access and manipulate individual pieces of data.
---

## 4. When to Normalize Data?
Normalization is typically necessary when:
- You have repetitive data across multiple records.
- You need to make your data structure **scalable** (so it can handle larger datasets more efficiently).
- You want to reduce complexity when accessing and updating data.
- You are working with relational data that has clear relationships between entities.

---
## 5. Tools and Libraries
Several libraries can help with data normalization, such as:
- **normalizr** (JavaScript): A popular library for normalizing nested JSON data.
- **Marshmallow** (Python): A library for object serialization/deserialization that supports normalization.
- **Django REST Framework** (Python): Provides serializers that can help with data normalization in

---

## 6. Advanced Topics
**Relational Mapping**:
You might need to map relationships between objects. In the above example:
- Users have an address.
- Posts have a relationship to users (through the userId field).

This is similar to how relational databases work, and we use "foreign keys" to link data across tables. In the normalized data, we achieve this by storing the `userId` in the post and referencing the address by a unique ID (`address_1`).

**Normalization Libraries**:
If you're working on a larger app, libraries like Redux often make use of normalized data, especially when dealing with complex state management. A tool like [normalizr](https://github.com/paularmstrong/normalizr) can automate this process for you.

**Handling Nested Data with Arrays and Objects:**
When data is nested in multiple layers or contains arrays of objects, you may need to recursively flatten and normalize the data structure. In practice, you'd write functions or use a library to automate this.

---
## 6. Practical Steps for Normalization
- Flatten Nested Objects: Convert nested data structures into a flat, object-based structure.
- Generate Unique IDs: For arrays or lists, generate unique IDs to reference individual items in the normalized data.
- Link Objects Together: Use relationships (like `userId`) to connect the flattened data.

---
## 7. Handling Data Updates
- When data updates (e.g., user’s name or address changes), you need to update the relevant part of the normalized data without affecting other references.
- One of the big benefits of normalization is that you only need to update a single reference (the user’s name) instead of multiple instances where the user is used.
---

### Example of Normalizing with `normalizr`:
```javascript
import { normalize, schema } from 'normalizr';

// Define a user schema
const user = new schema.Entity('users');
const post = new schema.Entity('posts', {
    auther: user
});

// Define a posts schema with users
const response = {
    id: 1,
    posts: [
        { id: 101, title: 'Hello World', content: 'This is my first post', author: { id: 1, name: 'Harshad' } },
        { id: 102, title: 'Another Day', content: 'Today was great!', author: { id: 1, name: 'Harshad' } }
    ]
};

// Normalize the data
const normalizedData = normalize(response, [post]);

console.log(normalizedData);
```
- This code snippet demonstrates how to use the `normalizr` library to normalize nested API data.
---
[Task](../Day_76/TASK/README.md)
---
# Summary
- API Data Normalization is essential for efficient data handling in applications.
- It improves data consistency, performance, and scalability.
- Use libraries like `normalizr` to simplify the normalization process.
- Always consider the relationships between data entities when normalizing complex datasets.
- Proper normalization can significantly enhance the maintainability and usability of your application's data.
---
