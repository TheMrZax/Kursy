const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskCounter = document.querySelector('span');
const tasks = document.getElementsByClassName('task');
const input = document.querySelector('input');

const removeTask = (e) => {
    e.target.parentNode.remove();
    taskCounter.textContent = tasks.length;
}

const addTask = (e) => {
    e.preventDefault();
    const taskName = input.value;
    if (!taskName) return alert("Wpisz nazwę zadania!");
    const createTask = document.createElement('li');
    createTask.className = 'task';
    createTask.innerHTML = taskName + '     <button>Usuń</button>'
    ul.appendChild(createTask);
    taskCounter.textContent = tasks.length;
    createTask.querySelector('button').addEventListener('click', removeTask);
}

form.addEventListener('submit', addTask);