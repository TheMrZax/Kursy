let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement('button');
    const btnreset = document.createElement('button');
    btn.textContent = "Dodaj 10 elementów";
    btnreset.textContent = "Wyczyść";
    const ulList = document.createElement('ul');
    document.body.appendChild(btn);
    document.body.appendChild(btnreset);
    document.body.appendChild(ulList);
    btn.addEventListener('click', createLiElements);
    btnreset.addEventListener('click', cleanList);
}

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        const liItem = document.createElement('li');
        document.querySelector('ul').appendChild(liItem);
        liItem.textContent = 'Element ' + orderElement;
        liItem.style.listStyle = "none";
        liItem.style.fontSize = size + 'px';
        orderElement++;
        size++;
    }
}

const cleanList = () => {
    document.querySelector('ul').innerHTML = "";
    size = 10;
    orderElement = 1;
}

init()