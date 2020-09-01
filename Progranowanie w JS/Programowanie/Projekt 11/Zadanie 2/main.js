const objectTime = new Date('2020-10-16').getTime();

setInterval(() => {
    const actualTime = new Date().getTime();
    const time = objectTime - actualTime;
    document.querySelector('span.d').textContent = Math.floor(objectTime / (1000 * 60 * 60 * 24) - actualTime / (1000 * 60 * 60 * 24));
    document.querySelector('span.h').textContent = Math.floor((objectTime / (1000 * 60 * 60) - actualTime / (1000 * 60 * 60)) % 24);
    document.querySelector('span.m').textContent = Math.floor((objectTime / (1000 * 60) - actualTime / (1000 * 60)) % 60);
    document.querySelector('span.s').textContent = Math.floor((objectTime / (1000) - actualTime / (1000)) % 60);
})