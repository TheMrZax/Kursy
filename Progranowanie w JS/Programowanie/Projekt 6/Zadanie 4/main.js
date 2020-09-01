const addButton = document.querySelector('button.add');
const resetButton = document.querySelector('button.clean');
const showAdviceButton = document.querySelector('.showAdvice');
const showOptionsButton = document.querySelector('.showOptions');
const h1 = document.querySelector('h1');
const advices = [];

const addAdvice = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const inputContent = input.value;
    if (inputContent) {
        for (advice of advices) {
            if (advice === inputContent) {
                alert('Ta opcja znajduje się już w tablicy!');
                return
            }
        }
        advices.push(inputContent);
        input.value = '';
    }
}

const cleanAdvices = (e) => {
    e.preventDefault();
    advices.length = 0;
    h1.textContent = "";
}

const showAdvice = () => {
    const randomAdvice = Math.floor(Math.random() * advices.length);
    h1.textContent = advices[randomAdvice];
}

const showOptions = () => {
    alert(`Aktualne możliwości: ${advices.join(', ')}`)
}


addButton.addEventListener('click', addAdvice);
resetButton.addEventListener('click', cleanAdvices);
showAdviceButton.addEventListener('click', showAdvice);
showOptionsButton.addEventListener('click', showOptions);

// Stwórz tablicę przechowującą możliwości z dwoma wartościami domyślnymi (np. walcz, przemyś to jeszcze raz)
// Przycisk dodaj: dodaje możliwości do tablicy -- aktualna zawartość tablicy po dodaniu wyświetla się w konsoli
// Przycisk reset: usuwa możliwości (tablica staje się pusta)
// Przycisk pokaż odpowiedź - losuje z tablicy możliwość
// Przycisk pokaż możliwości - pokazuje w alercie zawartość tablicy