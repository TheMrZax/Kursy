const square = document.createElement('div');
document.body.appendChild(square);

let grow = true;

let size = 100;
square.style.width = size + 'px';
square.style.height = size + 'px';

window.addEventListener('scroll', () => {
    if (size >= window.innerWidth / 2) {
        grow = !grow;
    } else if (size <= 10) {
        grow = !grow;
    }

    if (grow) {
        size += 5;
        square.style.width = size + 'px';
        square.style.height = size + 'px';
    } else {
        size -= 5;
        square.style.width = size + 'px';
        square.style.height = size + 'px';
    }
})