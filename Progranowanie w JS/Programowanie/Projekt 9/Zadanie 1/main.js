const slideList = [{
    img: "images/img1.jpg",
    text: 'Pierwszy tekst'
}, {
    img: "images/img2.jpg",
    text: 'Drugi tekst'
}, {
    img: "images/img3.jpg",
    text: 'Trzeci tekst'
}];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];

// Interface
const time = 4000;
let activeSlide = 0;


// Implementation
const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[activeSlide].classList.add('active')
}

const changeSlide = () => {
    activeSlide++;
    if (activeSlide === slideList.length) activeSlide = 0;
    image.src = slideList[activeSlide].img;
    h1.textContent = slideList[activeSlide].text;
    changeDot();
}

setInterval(changeSlide, time);