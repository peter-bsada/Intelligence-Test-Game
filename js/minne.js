// alla id som vi hämtar från html
const minne_header = document.getElementById('minneHeader');
const scoreButton = document.getElementById('endGameButton');
var div = document.querySelector('.game');
var textFlag = document.querySelector('.text');

const text_minne = document.getElementById('textMinne');
const score_minne = document.getElementById('scoreMinne');

// håller vi räkning på fråga 3
let prevButton = 0;
let howManyButtons = 9;
let endGameScore = 0;

// Intro till sista spelt
function introMinne() {
    restartMinne();
    nextThree.classList.remove('hide');
    textMinne.classList.remove('hide');
    textMinne.innerHTML = '<h1>Minne</h1> <p> Deltest tre går ut på att 9 olika flaggor kommer visas i fem sekunder och sedan vänds. En lista i vilken ordning flaggorna skall klickas på visas.</p>';
    nextThree.addEventListener('click', () => {
        gameMine();
    });
}
// tar bort saker som inte behövs med hjalp av classen 'hide'
// roppar function shuffleButtons()
function gameMine() {
    textMinne.classList.add('hide');
    nextThree.classList.add('hide');
    minne_header.classList.remove('hide');
    shuffleButtons();
}
// denna function används när man trycker på en flagga
// function kollar om flaggorna trycks på rätt ordning genom att kolla på deras id.
//om det är i rätt ordning som vänds flaggan annars så kan man inte trycka på nån flaggar och spelet tar slut.
function checkButton(clickedButton) {
    if (Number(clickedButton.id) -1 == prevButton) {
        if (clickedButton.className === "card") {
            if (clickedButton.style.transform == "rotateY(180deg)") {
                clickedButton.style.transform = "rotateY(0deg)";
            }
            else {
                clickedButton.style.transform = "rotateY(180deg)";
            }
        }
        prevButton++;
        score += 20;
        endGameScore += 20;
        clickedButton.classList.add('noneClick');
        if (endGameScore === 180) {
            score_minne.classList.remove('hide');
            minne_header.classList.add('hide');
            textFlag.classList.add('hide');
            score_minne.innerHTML = '<h1>You Won!!</h1><h3>Score: ' + endGameScore + '/180</h3>';
            scoreButton.classList.remove('hide');
        }
    } else {
        minne_header.classList.add('hide');
        textFlag.classList.add('hide');
        score_minne.classList.remove('hide');
        score_minne.innerHTML = '<h1>You Lost!!</h1><h3>Score: ' + endGameScore + '/180</h3>';
        scoreButton.classList.remove('hide');
    }
}
// väntar på kortet så att man kan se flaggorna
function showCardFast() {
    const card = document.querySelectorAll('.card');
    div.classList.add('noneClick');


    for (const box of card) {
        box.classList.add('toggleCard');
    }
}
// vänder tillbaka functionen så man inte ser flaggrna
function flipBack() {
    const card = document.querySelectorAll('.card');
    div.classList.remove('noneClick');


    for (const box of card) {
        box.classList.remove('toggleCard');
    }
}
// vissar texten
function showText() {
    textFlag.classList.remove('hide');
}

// Blandar ihop alla flaggorna så att de är i olika ordningar
function shuffleButtons() {
    // anropar den function först så man kan se alla flaggor
    showCardFast();
    // Vänder tillbaka korten som man inte ser korten efter 5 sekunder
    setTimeout(() => flipBack(), 5000);
    // vissar texten efter 5 sekunder
    setTimeout(() => showText(), 5000);
    for (var i = howManyButtons; i >= 0; i--) {
        div.appendChild(div.children[Math.random() * i | 0]);
    }
}

// vissar alla poäng totalt
scoreButton.addEventListener('click', () => {
    doneWithAllGame();
});

function doneWithAllGame() {
    scoreButton.classList.add('hide');
    if (score === 300) {
        betyg = "A";
    } else if (score === 260 || score === 280) {
        betyg = "B";
    } else if (score === 200 || score === 220 || score === 240) {
        betyg = "C";
    } else if (score === 160 || score === 180) {
        betyg = "D";
    } else if (score === 100 || score === 120 || score === 140) {
        betyg = "E";
    } else {
        betyg = "F";
    }

    score_minne.innerHTML = '<h1>Scoreboard</h1>' +
    '<h3>Betyg: ' + betyg + '</h3>' +
    '<p>Totalt: ' + score + '/300</p>' +
    '<p>Första spelet fick du: ' + quizScore + '/100</p>' +
    '<p>Andra spelet fick du: ' + fizzScore + '/20</p>' +
    '<p>Sista spelet fick du: ' + endGameScore + '/180</p>';
}


function restartMinne() {
    prevButton = 0;
    endGameScore = 0;
    textMinne.classList.add('hide');
    textFlag.classList.add('hide');
    minne_header.classList.add('hide');

    score_minne.classList.add('hide');
    scoreButton.classList.add('hide');
}
