const arrow = document.querySelector('.arrow')
const navBar = document.querySelector('nav')

arrow.addEventListener('click', function () {
    arrow.classList.toggle('on')
    navBar.classList.toggle('on')
})