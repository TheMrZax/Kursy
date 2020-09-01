const chars = 'QWERTYUIOP1234567890ASDFGHJKL';

const btn = document.querySelector('button');
const section = document.querySelector('section');

const codesNumber = 10;
const charsNumber = 20;

const codesGenerator = () => {
    section.textContent = "";
    for (let i = 0; i < codesNumber; i++) {
        let code = "";
        for (let i = 0; i < charsNumber; i++) {
            code += chars[Math.floor(Math.random() * chars.length)]
        }
        const div = document.createElement('div');
        div.textContent = code;
        section.appendChild(div);
    }
}

btn.addEventListener('click', codesGenerator);