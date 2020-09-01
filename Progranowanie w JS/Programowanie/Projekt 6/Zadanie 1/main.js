const btn = document.querySelector('button');
const div = document.querySelector('div');
const names = ['Nikifor', 'Anastasia', 'Kirk', 'Julia', 'Cliff', 'Martin'];
const randomIndex = Math.floor(Math.random() * names.length);
const prefixes = ['Mam wrażenie, ', 'Wydaje mi się, ', ' Szczerze powiedziawszy, myślę ', 'Szczerze uważam, ', 'Na 100% twierdzę, '];

const nameGenerator = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomPrefix = Math.floor(Math.random() * prefixes.length);
    div.textContent = `${prefixes[randomPrefix]}że najlepsze imię to ${names[randomIndex]}.`
}

btn.addEventListener('click', nameGenerator);