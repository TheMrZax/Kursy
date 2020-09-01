//pobieramy wszystkie potrzebne elementy z DOM

const btnIncrease = document.querySelector('button.bigger');
const bntDecrease = document.querySelector('button.smaller');
const text = document.querySelector('p');

//określamy potrzebne dane
let textSize = 12;

//parametry początkowe
text.style.fontSize = textSize + "px";
text.style.backgroundColor = "#eee";

//określenie akcji - co ma się dziać? napisanie funkcji
function textIncrease() {
    textSize++;
    text.style.fontSize = textSize + "px";
}

function textDecrease() {
    textSize--;
    text.style.fontSize = textSize + "px";
}

//ustawienie nasłuchiwania na przyciskach na kliknięcie

btnIncrease.addEventListener('click', textIncrease);
bntDecrease.addEventListener('click', textDecrease);