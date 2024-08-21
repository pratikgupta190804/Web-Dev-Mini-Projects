const startBtn = document.getElementById('start');
const welcomeText = document.getElementById('welcome');
const container = document.getElementById('container');
const qst1 = document.getElementById('qst-1');
const timerElement = document.getElementById('time');
let time = 15;
const nextBtn = document.getElementById('next-btn');
let myTimer;
const liTag = document.querySelectorAll('li');
let anyOptClicked;
let hasAnswered = false;
const correctMark = document.getElementsByClassName('correct-ans');
const CorrectAnswer = document.getElementsByClassName('correct-answer');
const qstCount = document.getElementById('qstCount');
let count = 0;
let score = 0;


startBtn.addEventListener('click', () => {
    welcomeText.style.display = "none";
    startBtn.style.display = "none";
    container.style.display = "block";
    qst1.style.display = "block";
    myTimer = setInterval(timeChanger, 1000);
    checkIfMarkedOrNot();
});

function timeChanger(){
    time -= 1;
    timerElement.innerText = `${time}s`;
    if(time <= 0){
        count += 1;
        hasAnswered = true;
        alert("Time`s Up!");
        clearInterval(myTimer);
        nextBtn.style.display = "block";
        CorrectAnswer.style.background = "green";
        correctMark.style.display = "block";
        qstCount.innerText = `${count}`;
    }
}

function checkIfMarkedOrNot(){
    liTag.forEach(e => {
        e.addEventListener('click', () => {
            console.log("Entered");
            if(!hasAnswered){
                hasAnswered = true;

                if(e.className == "correct-answer"){
                    e.style.background = "green";
                    correctMark.style.display = "block";
                    score += 1;
                    count += 1;
                    qstCount.innerText = `${count}`;
                } else {
                    CorrectAnswer.style.background = "green";
                    correctMark.style.display = "block";

                    const wrongMark = e.querySelector('i');
                    wrongMark.style.display = "block";
                    e.style.background = "red";
                    count += 1;
                    qstCount.innerText = `${count}`;
                }
                clearInterval(myTimer);
                nextBtn.style.display = "block"
            }

        })
    })
}


function nextQuestion(){
    hasAnswered = false;
    time = -1;
    showQuestion(count);
    myTimer = setInterval(timeChanger, 1000);
    checkIfMarkedOrNot();
    nextBtn.style.display = "none";
}

nextBtn.addEventListener('click', nextQuestion);