//Pobieranie elementu HTML z DOM
const btn = document.querySelector('button');

//Stworzenie licznika, który zlicza ilość kliknięć
let counter = 0

//Deklaracja głównej funkcji, która jest odpowiedzialna za tworzenie elementów w DOM
const addElement = function () {
    //Przypisanie do zmiennej metody tworzącej element w DOM
    const div = document.createElement('div');
    const divCircle = document.createElement('div.circle');

    //Iteracja licznika, następuje za każdym kiedy jest wywoływana funkcja, czyli de facto za każdym kliknięciem w przycisk
    counter++;
    //Wypełnienie stworzonego diva zawartością, w tym wypadku numerem w liczniku
    div.textContent = counter;
    //Umieszczenie stworzonego elementu tuż przed znacznikiem </body>
    document.body.appendChild(div);
    //Warunek sprawdza, czy modulo (reszta z dzielenia) z counter / 5 jest równe 0 (czyli liczba dzieli się przez 5 bez reszty)
    if (counter % 5 == 0) {
        div.classList.add('circle')
    }
}

//Ustawienie nasłuchiwania na przycisk na kliknięcie, po którym wywoływana jest funkcja
btn.addEventListener('click', addElement);