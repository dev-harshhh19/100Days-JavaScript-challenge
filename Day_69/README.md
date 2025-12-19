# Day 69 - Advanced API Concepts

## 1. API Architecture Patterns
### i. REST (Representational State Transfer)
Most common architecture style for designing networked applications.
Core ideas:
- Resources = nouns (e.g., /users, /orders)
- HTTP methods define actions:
    - `GET`: Retrieve data
    - `POST`: Create new resource
    - `PUT / PATCH`: Update existing resource
    - `DELETE`: Remove resource
- Stateless: every request contains all needed information.

REST Design
```text
GET /api/users/42
POST /api/users
PATCH /api/users/42
```
### ii. GraphQL
A query language for APIs and a runtime for executing those queries.
Key features:
- Clients specify exactly what data they need.
- Single endpoint (usually `/graphql`).
- Strongly typed schemam
```graphql
query {
  user(id: 42) {
    name
    posts {
      title
    }
  }
}
```
---
## 2. Authentication & Authorization
### i. API Keys
Simple way to authenticate requests.
- Unique key provided to each client.
- Sent in headers or query parameters.
Example:
```http
/GET /api/resource?api_key=YOUR_API_KEY
```
```javascript
fetch(url, {
    headers: {
        'Authorization': 'Api-Key YOUR_API_KEY'
    }
})
```
- Not very secure alone
---
ii. JWT (JSON Web Tokens)
A compact, URL-safe means of representing claims to be transferred between two parties.
Flow:
1. User logs in, server generates JWT.
2. Client stores JWT (localStorage, cookies).
3. Client sends JWT in Authorization header for subsequent requests.
Example:
```javascript
fetch("/api/profile", {
    headers: {
        Authorization: `Bearer ${token}`
    }
});
```
**Important**
- JWTs are signed, not encrypted
- Never store sensitive data inside them
---
## 3. Pagination, Filtering & Sorting
### i. Pagination
Prevents sending huge datasets in a single response.
Common methods:
- Limit & Offset
```http
GET /api/items?limit=10&offset=20
```
- Page & Size
```http
GET /api/items?page=2&size=10
```
Response:
```json
{
  "data": [...],
  "meta": {
    "totalItems": 100,
    "totalPages": 10,
    "currentPage": 2
  }
}
```
### ii. Filtering & Sorting
Allows clients to refine results.
Example:
```http
GET /api/products?category=electronics&sort=price_asc
```
Response:
```json
{
  "data": [...],
  "meta": {
    "totalItems": 50
  }
}
```
---
## 4. Rate Limiting & Throttling
## i. Rate Limiting
Controls the number of requests a client can make in a given time period.
Common strategies:
- Fixed Window
- Sliding Window
- Token Bucket
Example:
```http
GET /api/resource
429 Too Many Requests
```
Response Headers:
```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1618886400
```
## ii. Throttling
Slows down the rate of requests rather than blocking them outright.
Example:
```http
GET /api/resource
200 OK
```
Response Headers:
```http
X-RateLimit-Remaining: 5
X-RateLimit-Reset: 1618886400
```
---
## 5. Caching Strategies
### i. Client-Side Caching
Reduces latency and server load by storing responses on the client side.
Example:
```http
GET /api/resource
Cache-Control: max-age=3600
```
### ii. Server-Side Caching
Stores frequently requested data on the server to speed up response times.
Example:
```http
GET /api/resource
ETag: "abc123"
```
### iii. CDN Caching
Distributes cached content across multiple geographic locations to reduce latency.
Example:
```http
GET /api/resource
CDN caches the response for faster delivery.
``` 
---
## 6. Error Handling
### i. Standard HTTP Status Codes
| HTTP Status Code | Name                  | Description                           |
| ---------------- | --------------------- | ------------------------------------- |
| 200              | OK                    | Successful request                    |
| 201              | Created               | Resource created                      |
| 400              | Bad Request           | Client error                          |
| 401              | Unauthorized          | Authentication required               |
| 403              | Forbidden             | Access denied                         |
| 404              | Not Found             | Resource not found                    |
| 408              | Request Timeout       | Client request timeout                |
| 422              | Unprocessable Entity  | Validation error                      |
| 429              | Too Many Requests     | Rate limit exceeded                   |
| 500              | Internal Server Error | Server error                          |
| 502              | Bad Gateway           | Invalid response from upstream server |
| 503              | Service Unavailable   | Server overloaded or down             |
| 504              | Gateway Timeout       | Upstream server timeout               |

### ii. Error Response Structure
Consistent error response format.
Example:
```json
{
  "error": {
    "code": 400,
    "message": "Invalid request parameters",
    "details": [
      {
        "field": "email",
        "issue": "Invalid email format"
      }
    ]
  }
}
``` 
---
## 7. Idempotency
Idempotent request
> Making the same request multiple times gives the same result
- `GET`, `PUT`, `DELETE` → idempotent
- `POST` → usually not

Why this matters:
- Network retries
- Payment APIs (VERY important)
---
## 8 Webhooks (Server → Server Communication)
Instead of polling, APIs can push data.
Example:
- Payment succeeds → send webhook to your server
```http
POST /webhooks/payment-success
```
Payload:
```json
{
  "event": "payment_success",
  "data": {
    "order_id": 1234,
    "amount": 49.99
  }
}
```
Used in: 
- Payment processing
- CI/CD pipelines
- Real-time notifications
- Third-party integrations
---
## 9. Streaming & Real-Time APIs
REST APIs are request/response based.
Real-time APIs allow continuous data flow.
### i. WebSockets
Full-duplex communication channel over a single TCP connection.
Example:
```javascript
const socket = new WebSocket('wss://example.com/socket');
socket.onmessage = function(event) {
    console.log('Message from server ', event.data);
};
```
### ii. Server-Sent Events (SSE)
Unidirectional communication from server to client.
Example:
```javascript
const eventSource = new EventSource('/events');
eventSource.onmessage = function(event) {
    console.log('New event: ', event.data);
};
```
---
## 10. API Versioning
Maintaining multiple versions of an API to ensure backward compatibility.
### i. URL Versioning
```http
GET /api/v1/users
```
### ii. Header Versioning
```http
GET /api/users
Accept: application/vnd.example.v1+json
```
### iii. Query Parameter Versioning
```http
GET /api/users?version=1
```
---
### 11. Security Best Practices

- Always use HTTPS
- Validate input (never trust clients)
- Rate limit everything
- Sanitize data
- Never expose secrets in frontend JS
---
### 12. Documentation & Testing
- Use tools like Swagger/OpenAPI for documentation
- Automated testing with Postman, Insomnia, or custom test suites
- Provide clear examples and use cases in documentation
- Version your documentation alongside your API versions
---

# Summary 
- Understand different API architectures (REST, GraphQL)
- Implement authentication & authorization (API Keys, JWT)
- Use pagination, filtering, and sorting for large datasets
- Apply rate limiting and throttling to protect your API
- Implement caching strategies for performance
- Handle errors consistently with standard status codes
- Ensure idempotency for safe retries
- Utilize webhooks for server-to-server communication
- Explore real-time APIs with WebSockets and SSE
- Version your API effectively
- Follow security best practices
- Document and test your API thoroughly
---