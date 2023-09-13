const rockButton = document.querySelector('#rockbutton');
const paperButton = document.querySelector('#paperbutton');
const scissorsButton = document.querySelector('#scissorsbutton');
const resetButton = document.querySelector('.resetbutton');
const resultSec = document.querySelector('.roundresults');
const scoreBoard = document.querySelector('.scorecard');
const winsCount = document.querySelector('#wins');
const lossesCount = document.querySelector('#losses');
const resultOfGame = document.querySelector('.gameresults')

let computerSelection = ''

let randomNum = Math.random();

function getComputerChoice() {

    let randomNum = Math.random()

    let computerSelection = '';

        if (randomNum >= 0 && randomNum < 1/3) {
            computerSelection='rock';
        } 

        else if (randomNum >= 1/3 && randomNum < 2/3) {
            computerSelection='paper';
        }

        else if (randomNum >= 2/3 && randomNum < 1){
            computerSelection='scissors';
        }

        return computerSelection
}

let playerSelection = ''

let result = ''

function playRound(playerSelection, computerSelection) {


    let result ='';

        if (playerSelection === 'rock' && computerSelection === 'rock') {
            result = 'Tie Game!';
        }
        else if (playerSelection === 'rock' && computerSelection === 'paper') {
            result = `Computer wins! You suck lmao!`;
        }
        else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            result = 'You win! Computer sucks!';
        }
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
            result = 'You win! Computer sucks!';
        }
        else if (playerSelection === 'paper' && computerSelection === 'paper') {
            result = 'Tie Game!';
        }
        else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            result = `Computer wins! You suck lmao!`;
        }
        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            result = `Computer wins! You suck lmao!`;
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            result = 'You win! Computer sucks!';
        }
        else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
            result = 'Tie Game!';
        };

        resultSec.innerHTML = `You chose ${playerSelection}, Computer chose ${computerSelection}. ${result}`; 

        return result;
}

let score = {
    wins: 0,
    losses: 0,
};

function updateScore(result) {
    
    if (result === 'You win! Computer sucks!') {
        score.wins += 1;
        
    }
    else if (result === 'Tie Game!') {
        score = score;
    }
    else if (result === `Computer wins! You suck lmao!`) {
        score.losses += 1;
    };

    return score;
};

function displayScore(){
    winsCount.textContent = score.wins;
    lossesCount.textContent = score.losses;
}

let gameResult = ''

function endGame(score) {

    if (score.wins === 5) {
        gameResult = 'You beat the computer! Congrats';
    }
    else if (score.losses === 5) {
        gameResult = 'Computer owns you lmao.';
    };

    return gameResult;
};

function displayGameResult(){
    resultOfGame.textContent = gameResult;
}

function game() {
    computerSelection = getComputerChoice();
    result =  playRound(playerSelection,computerSelection);
    updateScore(result);
    displayScore();
    endGame(score);
    displayGameResult();
}

rockButton.addEventListener('click', () => {
    if (gameResult === ''){
        playerSelection = 'rock';
        game();
    } else {
        alert('Game over! Press reset to start over!')
    }
});

paperButton.addEventListener('click', () => {
    if (gameResult === ''){
        playerSelection = 'paper';
        game();
    } else {
        alert('Game over! Press reset to start over!')
    }
});

scissorsButton.addEventListener('click', () => {
    if (gameResult === ''){
        playerSelection = 'scissors';
        game();
    } else {
        alert('Game over! Press reset to start over!')
    }
});

resetButton.addEventListener('click', () => {
    score.wins = 0;
    score.losses = 0;
    winsCount.innerHTML = 0;
    lossesCount.innerHTML = 0;
    resultSec.innerHTML = '   ';
    gameResult = '';
    resultOfGame.innerHTML = '    ';
});