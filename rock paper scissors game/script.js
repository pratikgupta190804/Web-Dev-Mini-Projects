let rockButton = document.getElementById('rock-btn');
let paperButton = document.getElementById('paper-btn');
let scissorsButton = document.getElementById('scissors-btn');
let playerImage = document.getElementById('player-img');
let computerImage = document.getElementById('computer-img');

function changeImageToRock(){
    playerImage.src = 'http://i.ibb.co/vzXHGjv/1700801249110.png';
}
function changeImageToPaper(){
    playerImage.src = 'http://i.ibb.co/R7YcYsQ/1700801022052.png';
}
function changeImageToScissors(){
    playerImage.src = 'http://i.ibb.co/qdygvpD/1700800585355.png';
}

let playerChoice;
/*
while(1===1){
    rockButton.addEventListener('click', function(){
        changeImageToRock();
        playerChoice = 1;
        computerChoice(); 
        displayWinner(playerChoice = 1, randomNumber);
    });
    paperButton.addEventListener('click', function(){
        changeImageToPaper();
        playerChoice = 2;
        computerChoice(); 
        displayWinner(playerChoice = 2, randomNumber);
    });
    scissorsButton.addEventListener('click', function(){
        changeImageToScissors();
        playerChoice = 3;
        computerChoice();
        displayWinner(playerChoice = 3, randomNumber); 
    });
}*/

rockButton.addEventListener('click', function(){
    changeImageToRock();
    computerChoice(); 
    displayWinner(playerChoice = 1, randomNumber);
});
paperButton.addEventListener('click', function(){
    changeImageToPaper();
    computerChoice(); 
    displayWinner(playerChoice = 2, randomNumber);
});
scissorsButton.addEventListener('click', function(){
    changeImageToScissors();
    computerChoice();
    displayWinner(playerChoice = 3, randomNumber);
});

function computerChoice() {
    let randomNumber = Math.ceil(Math.random() * 3);

    if (randomNumber === 1){
        computerImage.src = 'http://i.ibb.co/vzXHGjv/1700801249110.png';
    } else if (randomNumber === 2) {
        computerImage.src = 'http://i.ibb.co/R7YcYsQ/1700801022052.png';
    } else if (randomNumber === 3) {
        computerImage.src = 'http://i.ibb.co/qdygvpD/1700800585355.png';
    }
    displayWinner(playerChoice, randomNumber)
}
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let result = '';
let playerOutCome = 0;
let computerOutCome = 0;

function displayWinner(playerChoice, randomNumber){

    /*
    while (1){
        if (playerChoice === randomNumber) {
            result = "It's a Tie!";
        } else if (
            (playerChoice === 1 && randomNumber === 3) ||
            (playerChoice === 2 && randomNumber === 1) ||
            (playerChoice === 3 && randomNumber === 2)
        ) {
            result = 'You Win!';
            playerOutCome += 1;
        } else {
            result = 'Computer Wins!';
            computerOutCome += 1;
        }
    }
    */
    if (playerChoice === randomNumber) {
        result = "It's a Tie!";
        playerOutCome = playerOutCome + 0;
        computerOutCome = computerOutCome + 0;
        playerScore.textContent = `Playerscore : ${playerOutCome}`;
        computerScore.textContent = `Computerscore : ${computerOutCome}`;
    } else if (
        (playerChoice === 1 && randomNumber === 3) ||
        (playerChoice === 2 && randomNumber === 1) ||
        (playerChoice === 3 && randomNumber === 2)
    ) {
        result = 'You Win!';
        playerOutCome = playerOutCome + 1;
        computerOutCome = computerOutCome + 0;
        playerScore.textContent = `Playerscore : ${playerOutCome}`;
        computerScore.textContent = `Computerscore : ${computerOutCome}`;
    } else {
        result = 'Computer Wins!';
        playerOutCome = playerOutCome + 0;
        computerOutCome = computerOutCome + 1;
        playerScore.textContent = `Playerscore : ${playerOutCome}`;
        computerScore.textContent = `Computerscore : ${computerOutCome}`;
    }

    document.getElementsByClassName('winner-label')[0].innerHTML = `Winner: ${result}`;
    playerScore.innerHTML = `Playerscore : ${playerOutCome}`;
    computerScore.innerHTML = `Computerscore : ${computerOutCome}`;
}

/*function displayScore(){
    if (result === "It's a Tie!"){
        playerOutCome = playerOutCome + 0;
        computerOutCome = computerOutCome + 0;
        playerScore.textContent = `Playerscore : ${playerOutCome}`;
        computerScore.textContent = `Computerscore : ${computerOutCome}`;
    } else if (result === 'You Win!'){
        playerOutCome = playerOutCome + 1;
        computerOutCome = computerOutCome + 0;
        playerScore.textContent = `Playerscore : ${playerOutCome}`;
        computerScore.textContent = `Computerscore : ${computerOutCome}`;
    } else if (result === 'Computer Wins!'){
        playerOutCome = playerOutCome + 1;
        computerOutCome = computerOutCome + 0;
        playerScore.textContent = `Playerscore : ${playerOutCome}`;
        computerScore.textContent = `Computerscore : ${computerOutCome}`;
    }    
}*/
function playChoice(){
    pass
}