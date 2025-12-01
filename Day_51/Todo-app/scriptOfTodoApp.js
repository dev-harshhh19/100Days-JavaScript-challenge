const todoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo-button');
const todoList = document.getElementById('todo-list');

function createTodoItem(text) {
    const listItem = document.createElement('li');
    // make item focusable for keyboard interactions
    listItem.tabIndex = 0;

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.type = 'button';
    deleteButton.setAttribute('aria-label', 'Delete todo');
    deleteButton.textContent = 'Delete';

    listItem.appendChild(span);
    listItem.appendChild(deleteButton);
    return listItem;
}

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const listItem = createTodoItem(todoText);
        todoList.appendChild(listItem);
        todoInput.value = '';
        todoInput.focus();
    }
}

addTodoButton.addEventListener('click', addTodo);

todoInput.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        addTodo();
    }
});

// Delegate clicks: delete button vs toggling completed state
todoList.addEventListener('click', event => {
    const li = event.target.closest('li');
    if (!li) return;

    if (event.target.classList.contains('delete-button')) {
        li.remove();
        return;
    }

    // Toggle completed when clicking on the item (or its text)
    li.classList.toggle('completed');
});

// Keyboard support: Enter to toggle complete, Delete/Backspace to remove
todoList.addEventListener('keydown', event => {
    const li = event.target.closest('li');
    if (!li) return;

    if (event.key === 'Delete' || event.key === 'Backspace') {
        li.remove();
    } else if (event.key === 'Enter') {
        li.classList.toggle('completed');
    }
});

// Right-click to delete
todoList.addEventListener('contextmenu', event => {
    event.preventDefault();
    const li = event.target.closest('li');
    if (li) li.remove();
});

