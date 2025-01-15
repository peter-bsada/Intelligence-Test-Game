// alla id som vi hämtar från html
const score_fizz = document.getElementById("scoreFizz");
const fizzHeader = document.getElementById('fizz-header');
const text_fizz = document.getElementById('textFizz');
const questionFizz = document.getElementById('questions');
const fizz_submit = document.getElementById('fizzSubmit');
const fizz_next = document.getElementById('fizzNext');
// här hämtar jag de olika svars alternativen som man får
const a_fizz = document.getElementById('a_fizz');
const b_fizz = document.getElementById('b_fizz');
const c_fizz = document.getElementById('c_fizz');
const d_fizz = document.getElementById('d_fizz');
// alla buttons som används
const nextThree = document.getElementById('nextGameThree');


// intro till andra spelet som är FizzBuzz
// Jag anropar functionen startFizzBuzz(), som startar hela spelet
function nextGame() {
    restartFizz();
    nextGameBtn.classList.remove('hide');
    text_fizz.classList.remove('hide');
    text_fizz.innerHTML = '<h1>FizzBuzz</h1>' + '<p>Här kommer en nummersekvens att visas där du måste gissa vad som kommer härnäst</p>' +
     '<p>Det kommer att visas en nummersekvens där du måste gissa vad som kommer härnäst</p>' +
     '<p>Dela numret i sekvensen med antingen 3 eller 5 för att få Fizz eller Buzz</p>' +
    '<p>Fizz = 3</p>' + '<p>Buzz = 5</p>' + '<p>FizzBuzz = Both Fizz and Buzz</p>';
    nextGameBtn.addEventListener('click', () => {
        startFizzBuzz();
    });
}

// här spara vi alla världen
const answer = [];
let answerSlice = [];
// håller vi räkning på fråga 2
let currentFizzQuiz = 0;
let fizzScore = 0;


// Här räknar jag ut fizzBuzz lösningarna
function fizzBuzz() {
    for (let i = 1; i <= 100; i++ ) {
        if (i % 2 === 0 && i % 3 === 0) {
            answer.push("FizzBuzz");
        } else if (i % 2 === 0) {
            answer.push("Buzz");
        } else if (i % 3 === 0) {
            answer.push("Fizz");
        } else {
            answer.push(i);
        }
    }
}


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// här slicar jag de och randommizar numret så vi kan få olika frågor hela tiden
function fizzBuzzTwo() {
    const firstRandomNumber = randomIntFromInterval(0, 50);
    const secondRandomNumber = randomIntFromInterval(50, 100);
    nextGameBtn.classList.add('hide');
    text_fizz.classList.add('hide');
    fizz_submit.classList.remove('hide');
    fizzHeader.classList.remove('hide');
    fizzBuzz();
    answerSlice = answer.slice(firstRandomNumber, secondRandomNumber);
    console.log(answerSlice);
}

// i dena functionen så startar hela spelet
function startFizzBuzz() {
    fizzBuzzTwo();

    // lägger in alla världen som ska användas
    const fizzBuzzData = [
        {
            questions: answerSlice[0] + " " + answerSlice [1] + " " + answerSlice [2] + " " + answerSlice[3],
            aFizz: answerSlice[6],
            bFizz: answerSlice[5],
            cFizz: answerSlice[4],
            dFizz: answerSlice[7],
            correct: "cFizz",
        },
    ];
    const currentFizzQuizData = fizzBuzzData[currentFizzQuiz];
    //lägger in alla värden i mina knappar
    questionFizz.innerText = currentFizzQuizData.questions;
    a_fizz.innerText = currentFizzQuizData.aFizz;
    b_fizz.innerText = currentFizzQuizData.bFizz;
    c_fizz.innerText = currentFizzQuizData.cFizz;
    d_fizz.innerText = currentFizzQuizData.dFizz;
}

const fizzBuzzData = [
    {
        questions: answerSlice[0] + " " + answerSlice [1] + " " + answerSlice [2] + " " + answerSlice[3],
        aFizz: answerSlice[6],
        bFizz: answerSlice[5],
        cFizz: answerSlice[4],
        dFizz: answerSlice[7],
        correct: "cFizz",
    },
];

// För när man trycker på submit knappen så går vi till functionen getSelected
// sen så kollar vi om svaret vi selectade är rätt eller fel och vi markerar det med olika färger
fizz_submit.addEventListener('click', () => {
    fizz_next.classList.remove('hide');
    const answer = getSelected();
    if (answer) {
        if (answer === fizzBuzzData[currentFizzQuiz].correct) {
            quiz.classList.add('green');
            score += 20;
            fizzScore += 20;
        } else {
            quiz.classList.add('red');
        }
    }
});

// Här så vissar jag poängen
fizz_next.addEventListener('click', () => {
    fizz_next.classList.add('hide');
    fizz_submit.classList.add('hide');
    fizzHeader.classList.add('hide');
    score_fizz.classList.remove('hide');


    clearStatusClass();
    score_fizz.innerHTML = '<h3>You Score: </h3> ' + fizzScore + '/20';
    nextThree.classList.remove('hide');
    nextThree.addEventListener('click', () => {
        score_fizz.classList.add('hide');
        introMinne();
    });
});


function restartFizz() {
    currentFizzQuiz = 0;
    fizzScore = 0;
    text_fizz.classList.add('hide');
    score_fizz.classList.add('hide');
    fizzHeader.classList.add('hide');
    fizz_next.classList.add('hide');
    fizz_submit.classList.add('hide');
}
