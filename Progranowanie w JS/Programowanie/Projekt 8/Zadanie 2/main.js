// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3'];

let textIndex = -10;
let arrayIndex = 0;

// Implementacja
const addLetter = () => {
    if (textIndex >= 0) {
        spnText.textContent += txt[arrayIndex][textIndex];
    }
    textIndex++;
    if (textIndex === txt[arrayIndex].length) {
        arrayIndex++;
        if (arrayIndex === txt.length) return;
        return setTimeout(() => {
            textIndex = 0;
            spnText.textContent = "";
            setTimeout(addLetter, 100)
        }, 1000)
    }
    setTimeout(addLetter, 100)
}


addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);