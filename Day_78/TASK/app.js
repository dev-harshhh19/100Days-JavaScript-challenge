import { createApiService } from "./apiService.js";

const api = createApiService({ baseURL: "https://jsonplaceholder.typicode.com" });

async function loadPosts() {
  const result = await api.get("/posts", { query: { _limit: 5 } });
  const el = document.getElementById("output");
  if (!el) return;
  if (result.ok) {
    el.innerHTML = result.data.map(p => `<p><strong>${p.id}.</strong> ${p.title}</p>`).join("");
  } else {
    el.textContent = `Error (${result.status}): ${result.message}`;
  }
}

loadPosts();
