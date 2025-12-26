# Day 76 Task — Convert Complex API Data into Clean Objects

This task demonstrates turning nested API payloads into a normalized, clean structure that’s easy to query and update.

---
## What You’ll Run
- A small utility that normalizes a nested `user` payload (with `address` and `posts`) into three collections: `users`, `addresses`, and `posts`.
---
### [Click Here for the Code](./index.js)

---
## Run It
```bash
node Day_76/TASK/index.js
```
---
## Expected Shape
The normalized output follows this layout:
```json
{
  "users": {
    "1": { "id": 1, "name": "Harshad", "addressId": "1", "postIds": [101, 102] }
  },
  "addresses": {
    "1": { "street": "123 Main St", "city": "Mumbai" }
  },
  "posts": {
    "101": { "id": 101, "title": "Hello World", "content": "This is my first post", "userId": 1 },
    "102": { "id": 102, "title": "Another Day", "content": "Today was great!", "userId": 1 }
  }
}
```
---
## Notes
- `addressId` is derived from the `user.id` when the address has no explicit ID.
- `post.userId` links each post back to its author.
- This mirrors the normalization approach outlined in the Day 76 README.
---