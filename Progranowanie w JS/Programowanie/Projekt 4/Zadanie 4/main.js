let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

const changeColor = (e) => {
    // if (e.keyCode === 38) {
    //     red++;
    //     green++;
    //     blue++;
    //     document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    // } else if (e.keyCode === 40) {
    //     red--;
    //     green--;
    //     blue--;
    //     document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    // }
    switch (e.keyCode) {
        case 38:
            if (red < 255) {
                red++;
                green++;
                blue++;
                document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
            }
            break;
        case 40:
            if (red > 0) {
                red--;
                green--;
                blue--;
                document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
            }
            break;
    }
}

window.addEventListener('keydown', changeColor);