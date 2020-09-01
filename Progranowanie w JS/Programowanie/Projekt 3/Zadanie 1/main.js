// tutaj rozwiązanie
// Nasłuchiwanie kliknięcia na przycisk
// Pobranie elementów listy (querySelectorAll?)
// Funkcja if - 
//  czy elementy są widoczne
//      jezeli nie, to pętla for ustawiająca display: block;
//      jeżeli tak, to pętla for zwiększająca font size
// zmienne - font size

let fontSize = 16;
let liDisplay = false;
const listItems = document.querySelectorAll('li');
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    if (liDisplay) {
        fontSize++;
        // for (let i = 0; i < listItems.length; i++) {
        //     listItems[i].style.fontSize = `${fontSize}px`;
        // }
        listItems.forEach(listItem => listItem.style.fontSize = `${fontSize}px`)
    } else {
        // for (let i = 0; i < listItems.length; i++) {
        //     listItems[i].style.display = "block";
        //     listItems[i].style.fontSize = `${fontSize}px`;
        // }
        listItems.forEach(listItem => listItem.style.display = "block")
        liDisplay = !liDisplay;
    }
}) 