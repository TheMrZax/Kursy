const spanText = document.querySelector('.text');
const spanCursor = document.querySelector('.cursor');
const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '

let indexText = 0;
let interval = 40;

const addLetter = () => {
    spanText.textContent += txt[indexText];
    indexText++;
    if (indexText == txt.length) clearInterval(indexAddLetter);
}

const cursorAnimation = () => {
    spanCursor.classList.toggle('active');
}

const indexAddLetter = setInterval(addLetter, interval);
setInterval(cursorAnimation, 450);