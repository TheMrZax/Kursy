// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony

document.body.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    console.log(x, y);
    document.body.addEventListener('click', () => {
        if ((x % 2 == 1) && (y % 2 == 1)) {
            document.body.style.backgroundColor = "blue";
        } else if (x % 2 == 0 && y % 2 == 0) {
            document.body.style.backgroundColor = "red";
        } else {
            document.body.style.backgroundColor = "green";
        }
    })
})