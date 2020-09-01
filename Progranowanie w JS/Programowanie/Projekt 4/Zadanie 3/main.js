const div = document.querySelector('div');
let divX = 150;
let divY = 50;
let insertDivX;
let insertDivY;
let drawActive = false;

div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

div.addEventListener('mousedown', (e) => {
    div.style.opacity = 0.5;
    drawActive = !drawActive;
    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
})

div.addEventListener('mousemove', (e) => {
    if (drawActive) {
        divX = e.clientX;
        divY = e.clientY;
        div.style.left = `${divX - insertDivX}px`;
        div.style.top = `${divY- insertDivY}px`;
    }
})

div.addEventListener('mouseup', () => {
    div.style.opacity = 1;
    drawActive = !drawActive;
})