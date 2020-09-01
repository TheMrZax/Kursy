// const array = [53, 124, 61, 552, 63, 7, 1234, 83, 123, 76, 112];

// const evenNumbers = array.filter(number => !(number % 2))
// const oddNumbers = array.filter(number => number % 2)
// const double = array.map(number => number * 2)

const input = document.querySelector('input');
const ul = document.querySelector('ul');
const liElements = document.querySelectorAll('li')

const search = (e) => {
    const searchText = e.target.value.toLowerCase();
    const tasks = [...liElements];
    const results = tasks.filter(task => task.textContent.toLowerCase().includes(searchText));
    ul.textContent = "";
    results.forEach(task => ul.appendChild(task));
}

input.addEventListener('input', search)