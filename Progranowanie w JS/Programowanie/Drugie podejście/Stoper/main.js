const startButton = document.querySelector('.main');
const resetButton = document.querySelector('.reset');
const timeDisplay = document.querySelector('.time div');
let time = 0;
let active = false;
let stoperIndex;

const stoper = () => {
    time++;
    timeDisplay.textContent = (time / 100).toFixed(2);
}

const start = () => {
    if (!active) {
        active = !active;
        startButton.textContent = "Pauza"
        stoperIndex = setInterval(stoper, 10);
    } else {
        active = !active
        startButton.textContent = "Start"
        clearInterval(stoperIndex);
    }
}

const reset = () => {
    time = 0;
    timeDisplay.textContent = time.toFixed(2);
}

startButton.addEventListener('click', start);
resetButton.addEventListener('click', reset);