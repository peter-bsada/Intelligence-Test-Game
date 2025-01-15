// frågor för uppgift 1
const quizData = [
    {
        question: "vad är 22+23?",
        a: "39",
        b: "48",
        c: "45",
        d: "40",
        correct: "c",
    },
    {
        question: "Vad är sveriges huvudstad?",
        a: "Stockholm",
        b: "Linköping",
        c: "Malmö",
        d: "Örebro",
        correct: "a",
    },
    {
        question: "Cirka hur många bor i sverige?",
        a: "15 miljoner",
        b: "7 miljoner",
        c: "13 miljoner",
        d: "10 miljoner",
        correct: "d",
    },
    {
        question: "Vem är Sveriges bästa fotbollsspelare genom tiderna?",
        a: "Gunnar Gren",
        b: "Zlatan Ibrahimovic",
        c: "Henrik Larsson",
        d: "Kurt Hamrin",
        correct: "b",
    },
    {
        question: "När vann sverige handbolls em senast?",
        a: "2005",
        b: "1997",
        c: "2002",
        d: "2000",
        correct: "c",
    },
];

// alla id som vi hämtar från html
const quiz = document.getElementById('quiz');
const quizContainer = document.getElementById('quiz-container');
const quizHeader = document.getElementById('quiz-header');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
// här hämtar jag de olika svars alternativen som man får
const a_svar = document.getElementById('a_svar');
const b_svar = document.getElementById('b_svar');
const c_svar = document.getElementById('c_svar');
const d_svar = document.getElementById('d_svar');
// alla buttons som används
const submitBtn = document.getElementById('submit');
const nextBtn = document.getElementById('next');
const nextGameBtn = document.getElementById('nextGame');
// intro
const startBtn = document.getElementById('start');
const intro_text = document.getElementById('introText');
//score
const score_quiz = document.getElementById('scoreQuiz');


// håller vi räkning på fråga 1
let currentQuiz = 0;
let score = 0;
let quizScore = 0;

function startIntelligenceTest() {
    intro_text.classList.remove('hide');
    startBtn.classList.remove('hide');
    intro_text.innerHTML = '<h2>The Intelligence Test</h2>' +
    '<p>"Examiner of The Intelligence Test" Vi kommer att ha 3 deltest, som testar en mängd olika färdigheter</p>' +
    '<p>Första testet är "Quiz". Det kommer att vara 5 frågor totalt. En fråga kommer att ha 20 alternativ. Klicka på rätt svar för att få poäng. Om du klickar på fel svar får du inga poäng.</p>';
}
// starta fråga 1
start.addEventListener('click', () => {
    introText.classList.add('hide');
    startBtn.classList.add('hide');
    loadQuiz();
});

// här startar vi upp frågorna och svaren sen gå till delselectAnswer functionen
function loadQuiz() {
    quizHeader.classList.remove('hide');
    submitBtn.classList.remove('hide');
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_svar.innerText = currentQuizData.a;
    b_svar.innerText = currentQuizData.b;
    c_svar.innerText = currentQuizData.c;
    d_svar.innerText = currentQuizData.d;
}
// Här så tar vi bort det markerade svaren
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}
// I den här function så selctar vi ett specifikt svar.
function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}
// Här så tar vi bort background color.
function clearStatusClass() {
    quiz.classList.remove('green');
    quiz.classList.remove('red');
}

// För när man trycker på submit knappen så går vi till functionen getSelected
// sen så kollar vi om svaret vi selectade är rätt eller fel och vi markerar det med olika färger.
submitBtn.addEventListener('click', () => {
    nextBtn.classList.remove('hide');
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            quiz.classList.add('green');
            score += 20;
            quizScore += 20;
        } else {
            quiz.classList.add('red');
        }
        currentQuiz++;
    }
});


// här så går vi till nästa fråga, om det inte finns några frågor kvar så får vi se resultatet.
nextBtn.addEventListener('click', () => {
    nextBtn.classList.add('hide');
    clearStatusClass();
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        score_quiz.classList.remove('hide');
        quizHeader.classList.add('hide');
        submitBtn.classList.add('hide');
        score_quiz.innerHTML = '<h3>You Score: </h3> ' + quizScore +'/100';
        nextGameBtn.classList.remove('hide');
        // Gå till nästa spel
        nextGameBtn.addEventListener('click', () => {
            score_quiz.classList.add('hide');
            nextGame();
        });
    }
});


var test = {
    "reset": function () {
        currentQuiz = 0;
        score = 0;
        quizScore = 0;
        restartFizz();
        restartMinne();
        loadQuiz();
    }
};

startIntelligenceTest();
