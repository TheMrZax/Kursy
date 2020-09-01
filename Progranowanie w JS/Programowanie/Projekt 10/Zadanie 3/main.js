const user = (name = "", age) => {
    let userName = name;
    let userAge = age;

    function showName() {
        console.log(`Hej ${userName}, ${userAge >= 18 ? 'możesz kupić piwo' : 'nie możesz kupić piwa'}`);
    }
    return showName;
}
const mieszko = user()
mieszko('Marunio', 28)