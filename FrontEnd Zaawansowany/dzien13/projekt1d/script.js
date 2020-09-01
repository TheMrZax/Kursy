//JavaScript
// const burger = document.querySelector("div.burger");
// const iconBurger = document.querySelector(".fa-bars")
// const iconTimes = document.querySelector(".fa-times")
// const aside = document.querySelector('aside')

// burger.addEventListener('click', function () {
//     iconBurger.classList.toggle("show")
//     iconTimes.classList.toggle("show")
//     aside.classList.toggle('show')
// })

//jQuery
$('.burger').on('click', function () {
    $('.fas, aside').toggleClass("show")
})