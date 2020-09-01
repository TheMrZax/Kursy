const input = document.getElementById('pass');
const passwords = ['user', 'lato'];
const messages = ['Carpe Diem!', 'Gorąąąco!'];
const div = document.querySelector('.message');

input.addEventListener('input', (e) => {
    div.textContent = "";
    const text = e.target.value;
    passwords.forEach((password, index) => {
        if (password === text) {
            div.textContent = messages[index];
            e.target.value = "";
        }
    })


    // if (e.target.value === password) {
    //     div.textContent = message;
    //     input.value = "";
    // } else {
    //     div.textContent = "";
    // }
})

input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
})

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
})