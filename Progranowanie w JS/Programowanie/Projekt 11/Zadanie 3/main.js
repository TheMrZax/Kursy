// http://websamuraj.pl/examples/js/projekt11/
const btnTimer = document.querySelector('.main');
const btnReset = document.querySelector('.reset');
const clock = document.querySelector('.time div');

let time = 0;
let active = false;
let intervalId;

const timer = () => {
    if (!active) {
        active = !active;
        btnTimer.textContent = "Pauza";
        intervalId = setInterval(start, 10)
    } else {
        active = !active;
        btnTimer.textContent = "Start";
        clearInterval(intervalId);
    }
}

const start = () => {
    time++;
    clock.textContent = (time / 100).toFixed(2);
}

const reset = () => {
    time = 0;
    clock.textContent = '---';
}

btnTimer.addEventListener('click', timer);
btnReset.addEventListener('click', reset);