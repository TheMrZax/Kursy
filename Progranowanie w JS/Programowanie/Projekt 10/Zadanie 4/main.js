const timer = () => {
    let time = 0;

    function addSecond() {
        setInterval(() => {
            time++;
            document.body.textContent = `${time} sekund`
            if (time == 120) time = 0;
        }, 1000);
    }
    return addSecond
}

const addSecond = timer();
addSecond();