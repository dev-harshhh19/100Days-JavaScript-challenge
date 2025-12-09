const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const tasksList = document.getElementById('tasks-list');
const toggleThemeBtn = document.getElementById('toggle-theme');

const STORAGE_KEY = 'tasks';

// Init
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    syncThemeIcon();
});
addBtn.addEventListener('click', addTask);
todoInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') addTask();
});

function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText === '') return;

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    const tasks = getTasks();
    tasks.push(task);
    setTasks(tasks);
    renderTask(task);
    todoInput.value = '';
}

function renderTask(task) {
    const li = document.createElement('li');
    li.dataset.id = task.id;
    li.classList.toggle('completed', task.completed);

    const completeToggle = document.createElement('input');
    completeToggle.type = 'checkbox';
    completeToggle.classList.add('task-radio');
    completeToggle.checked = task.completed;
    completeToggle.ariaLabel = 'Mark task complete';
    completeToggle.addEventListener('change', () => {
        updateTaskCompletion(task.id, completeToggle.checked, li);
    });

    const textSpan = document.createElement('span');
    textSpan.textContent = task.text;
    textSpan.classList.add('task-text');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        deleteTask(task.id);
        li.remove();
    });

    li.appendChild(completeToggle);
    li.appendChild(textSpan);
    li.appendChild(deleteBtn);
    tasksList.appendChild(li);
}

function updateTaskCompletion(taskId, completed, li) {
    const tasks = getTasks().map((task) =>
        task.id === taskId ? { ...task, completed } : task
    );
    setTasks(tasks);
    li.classList.toggle('completed', completed);
}

function getTasks() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function setTasks(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = getTasks();
    tasksList.innerHTML = '';
    tasks.forEach(renderTask);
}

function deleteTask(taskId){
    const tasks = getTasks().filter(task => task.id !== taskId);
    setTasks(tasks);
}

toggleThemeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    syncThemeIcon();
});

function syncThemeIcon() {
    if(document.body.classList.contains('dark')){
        toggleThemeBtn.textContent = '🌙';
    } else {
        toggleThemeBtn.textContent = '☀️';
    }
}

