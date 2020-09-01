// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któregoś z haseł w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const div = document.querySelector('div');
const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]

const showMessage = (e) => {
    passwords.forEach((password, i) => {
        if (password.toLowerCase() === e.target.value.toLowerCase()) {
            div.textContent = messages[i];
        }
    })
}



input.addEventListener("input", showMessage)


// passwords.forEach(password => password.toLowerCase()) || e.target.value === passwords.forEach(password => password.toUpperCase())