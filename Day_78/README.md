# Day 78

## Topic:
- **API Service Layer Pattern**
---
> What is the API Service Layer?
- A thin, centralized module that encapsulates all HTTP logic (base URL, headers, serialization, timeouts) behind a clean interface.
- Promotes reuse and consistency: one place for error handling, request building, and response parsing.
- Keeps UI/components focused on business logic instead of networking details.
---
### Goals
- Centralize API calls (GET, POST, PUT, PATCH, DELETE).
- Provide a single, consistent error handler for all requests.
- Support query params, JSON bodies, and request timeouts.
- Be easy to reuse across exercises and projects.
---
### Pattern Structure
```text
[UI / Feature]
			|
			v
[apiService]  -> builds URL, adds headers, handles errors, parses JSON
			|
			v
[fetch/HTTP]
```
---
### Implementation (apiService.js)
```javascript
// Day_78/apiService.js
// Centralized API service with a single error handler

export function createApiService({ baseURL = "", defaultHeaders = { "Content-Type": "application/json" } } = {}) {
	const handleError = (error) => {
		// Normalize different error shapes into a consistent object
		if (error.name === "AbortError") {
			return { ok: false, status: 0, message: "Request timed out", details: null };
		}
		if (error.response) {
			return {
				ok: false,
				status: error.response.status,
				message: error.message || "HTTP error",
				details: error.responseData || null,
			};
		}
		return { ok: false, status: 0, message: error.message || "Network error", details: null };
	};

	const buildUrl = (path, query) => {
		const url = new URL(path, baseURL || window.location.origin);
		if (query && typeof query === "object") {
			Object.entries(query).forEach(([k, v]) => {
				if (v !== undefined && v !== null) url.searchParams.set(k, String(v));
			});
		}
		return url.toString();
	};

	const request = async (path, { method = "GET", headers = {}, body, query, timeout = 10000 } = {}) => {
		const url = buildUrl(path, query);
		const controller = new AbortController();
		const id = setTimeout(() => controller.abort(), timeout);

		const opts = {
			method,
			headers: { ...defaultHeaders, ...headers },
			signal: controller.signal,
		};
		if (body !== undefined) {
			// If body is already a string or FormData, send as-is; else JSON
			if (body instanceof FormData || typeof body === "string") {
				opts.body = body;
			} else {
				opts.body = JSON.stringify(body);
			}
		}

		try {
			const res = await fetch(url, opts);
			clearTimeout(id);
			const contentType = res.headers.get("content-type") || "";
			let data = null;
			if (contentType.includes("application/json")) {
				data = await res.json();
			} else {
				data = await res.text();
			}
			if (!res.ok) {
				throw { response: res, responseData: data, message: `HTTP ${res.status}` };
			}
			return { ok: true, status: res.status, data };
		} catch (err) {
			return handleError(err);
		}
	};

	return {
		get: (path, options) => request(path, { ...(options || {}), method: "GET" }),
		post: (path, body, options) => request(path, { ...(options || {}), method: "POST", body }),
		put: (path, body, options) => request(path, { ...(options || {}), method: "PUT", body }),
		patch: (path, body, options) => request(path, { ...(options || {}), method: "PATCH", body }),
		delete: (path, options) => request(path, { ...(options || {}), method: "DELETE" }),
	};
}

// Optional ready-to-use default instance
export const api = createApiService();
```
---
### Usage Example
```html
<!-- Day_78/index.html -->
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>Day 78 · API Service</title>
	</head>
	<body>
		<main>
			<h1>Day 78 · API Service Layer</h1>
			<div id="output">Loading…</div>
		</main>
		<script type="module" src="./app.js"></script>
	</body>
</html>
```

```javascript
// Day_78/app.js
import { createApiService } from "./apiService.js";

// JSONPlaceholder demo base URL
const api = createApiService({ baseURL: "https://jsonplaceholder.typicode.com" });

async function loadPosts() {
	const result = await api.get("/posts", { query: { _limit: 5 } });
	const el = document.getElementById("output");
	if (result.ok) {
		el.innerHTML = result.data.map(p => `<p><strong>${p.id}.</strong> ${p.title}</p>`).join("");
	} else {
		el.textContent = `Error (${result.status}): ${result.message}`;
	}
}

loadPosts();
```
---
### Single Error Handler
- All errors (HTTP, network, timeout) are normalized by `handleError()` into a single shape: `{ ok, status, message, details }`.
- Consumers only check `result.ok` and render the `message` consistently across the app.
---
# Summary
- The API Service Layer consolidates HTTP logic, improves reuse, and enforces consistent error handling.
- Components stay clean; networking concerns live in one place.
- The service exposes simple methods (`get`, `post`, `put`, `patch`, `delete`) and returns structured results.
