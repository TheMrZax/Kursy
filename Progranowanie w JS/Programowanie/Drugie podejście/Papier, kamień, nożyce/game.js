// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/
const gameVaries = {
    games: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const chooses = {
    playerHand: "",
    aiHand: ""
}

const hands = [...document.querySelectorAll('.select img')]

function selectImage() {
    chooses.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = " 0 0 0 4px royalblue";
}

function aiChoose() {
    aiHand = hands[Math.floor(Math.random() * hands.length)].dataset.option;
    return aiHand;
}

function checkResult() {
    if (chooses.playerHand === chooses.aiHand) {
        return 'draw';
    } else if ((chooses.playerHand === "kamień" && chooses.aiHand === "nożyczki") || (chooses.playerHand === "papier" && chooses.aiHand === "kamień") || (chooses.playerHand === "nożyczki" && chooses.aiHand === "papier")) {
        return 'win'
    } else {
        return 'lose'
    }
}

function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    gameVaries.games++;
    document.querySelector('p.numbers span').textContent = gameVaries.games;

    if (result === 'win') {
        document.querySelector('[data-summary="who-win"]').textContent = 'Ty!'
        gameVaries.wins++;
        document.querySelector('p.wins span').textContent = gameVaries.wins;
    } else if (result === "lose") {
        document.querySelector('[data-summary="who-win"]').textContent = 'Komputer!'
        gameVaries.losses++;
        document.querySelector('p.losses span').textContent = gameVaries.losses;
    } else if (result === 'draw') {
        document.querySelector('[data-summary="who-win"]').textContent = 'Remis!'
        gameVaries.draws++;
        document.querySelector('p.draws span').textContent = gameVaries.draws;
    }
}

function resetGame() {
    chooses.playerHand = "";
    hands.forEach(hand => hand.style.boxShadow = "");
}

const startGame = () => {
    if (!chooses.playerHand) alert('Wybierz dłoń!')
    chooses.aiHand = aiChoose();
    const gameResult = checkResult();
    publishResult(chooses.playerHand, chooses.aiHand, gameResult);
    resetGame();
}

hands.forEach(image => image.addEventListener('click', selectImage))
document.querySelector('button.start').addEventListener('click', startGame);