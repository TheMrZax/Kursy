const form = document.querySelector('form');
const input = document.querySelector('input');
const displayTasks = document.querySelector('span');
let taskNumber = 0;
const ul = document.querySelector('ul');
const listItems = document.getElementsByClassName('task');

const removeTask = (e) => {
    taskNumber--;
    displayTasks.textContent = taskNumber;
    e.target.parentNode.remove();
}

const addTask = (e) => {
    taskNumber++;
    displayTasks.textContent = taskNumber;
    e.preventDefault();
    const taskText = input.value;
    if (!taskText) return alert("Wpisz nazwę zadania!");
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = taskText + "<button>Usuń zadanie</button>"
    ul.appendChild(task);
    task.querySelector('button').addEventListener('click', removeTask);
};

form.addEventListener('submit', addTask);