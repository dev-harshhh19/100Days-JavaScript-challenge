export function createApiService({ baseURL = "", defaultHeaders = { "Content-Type": "application/json" } } = {}) {
  const handleError = (error) => {
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
    const url = new URL(path, baseURL || (typeof window !== "undefined" ? window.location.origin : ""));
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

export const api = createApiService();
