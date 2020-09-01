//JavaScript
const burger = document.querySelector("div.burger");
const iconBurger = document.querySelector(".fa-bars")
const iconTimes = document.querySelector(".fa-times")
const aside = document.querySelector('aside')
const main = document.querySelector('main')

burger.addEventListener('click', function () {
    iconBurger.classList.toggle("show")
    iconTimes.classList.toggle("show")
    aside.classList.toggle('show')
    main.classList.toggle('show')
})

//jQuery
// $('.burger').on('click', function () {
//     $('.fas, aside,main').toggleClass("show")
// })