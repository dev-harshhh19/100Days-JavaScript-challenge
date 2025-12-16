const API = "https://jsonplaceholder.typicode.com/todos";
const todoList = document.getElementById("todoList");
const input = document.getElementById("todoInput");

let todos = []; // Local state

// FETCH TODOS (READ)
async function fetchTodos() {
    try {
        const res = await fetch(`${API}?_limit=5`);
        if (!res.ok) throw new Error("Failed to fetch todos");
        todos = await res.json();
        renderTodos();
    } catch (err) {
        console.error(err.message);
    }
}

// RENDER TODOS
function renderTodos() {
    todoList.innerHTML = "";

    todos.forEach(todo => {
        const li = document.createElement("li");

        li.innerHTML = `
      <span class="${todo.completed ? "done" : ""}">
        ${todo.title}
      </span>
      <div>
        <button onclick="toggleTodo(${todo.id})">✔</button>
        <button onclick="deleteTodo(${todo.id})">❌</button>
      </div>
    `;

        todoList.appendChild(li);
    });
}

// ADD TODO (CREATE)
async function addTodo() {
    if (!input.value.trim()) return;

    const newTodo = {
        title: input.value,
        completed: false,
        userId: 1
    };

    try {
        const res = await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTodo)
        });

        if (!res.ok) throw new Error("Failed to add todo");

        const data = await res.json();

        // Update local state (simulate DB save)
        todos.unshift({ ...data, id: Date.now() });

        input.value = "";
        renderTodos();
    } catch (err) {
        console.error(err.message);
    }
}

//UPDATE TODO (PATCH)
async function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (!todo) return;

    try {
        await fetch(`${API}/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ completed: !todo.completed })
        });

        // Update local state
        todo.completed = !todo.completed;
        renderTodos();
    } catch (err) {
        console.error(err.message);
    }
}

// DELETE TODO (DELETE)
async function deleteTodo(id) {
    try {
        await fetch(`${API}/${id}`, {
            method: "DELETE"
        });

        // Update local state
        todos = todos.filter(todo => todo.id !== id);
        renderTodos();
    } catch (err) {
        console.error(err.message);
    }
}

fetchTodos();
