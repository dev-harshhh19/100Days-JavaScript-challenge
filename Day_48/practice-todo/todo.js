const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const todoList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();

    if (task === '')
        alert('Please enter a task...');

    const li = document.createElement('li');
    li.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('delete-btn');
    
    deleteBtn.addEventListener('click', () => {
        li.remove();   
    });

    li.appendChild(deleteBtn);

    todoList.appendChild(li);

    taskInput.value = "";
});