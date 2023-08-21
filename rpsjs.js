/*
const rockButton = document.querySelector('#rockbutton');
const paperButton = document.querySelector('#paperbutton');
const scissorsButton = document.querySelector('#scissorsbutton');
const choiceButtons = document.querySelectorAll('[data-selection')

choiceButtons.forEach(choiceButtons => {
    choiceButtons.addEventListener('click', e=> {
        const playerSelection = choiceButtons.dataset.selection
        getPlayerChoice(playerSelection)
    })
})

let playerSelection = getPlayerChoice()

function getPlayerChoice(playerSelection) {
    console.log(playerSelection) 
    return playerSelection
}*/


let computerSelection = getComputerChoice();

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

        console.log(computerSelection);

        return computerSelection
}



let playerSelection = getPlayerChoice()

function getPlayerChoice() {
    
    let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();

        if (playerSelection === 'rock') {
            console.log('rock');
        }
        else if (playerSelection === 'paper') {
            console.log('paper');
        }
        else if (playerSelection === 'scissors') {
            console.log('scissors');
        }

        return playerSelection
    }
    


let result = playRound(playerSelection, computerSelection)

function playRound(playerSelection, computerSelection) {


    let result ='';

        if (playerSelection === 'rock' && computerSelection === 'rock') {
            result = 'Tie Game!';
        }
        else if (playerSelection === 'rock' && computerSelection === 'paper') {
            result = `Computer wins! ${computerSelection} beats ${playerSelection}`;
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
            result = `Computer wins! ${computerSelection} beats ${playerSelection}`;
        }
        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            result = `Computer wins! ${computerSelection} beats ${playerSelection}`;
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            result = 'You win! Computer sucks!';
        }
        else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
            result = 'Tie Game!';
        };

          console.log(result); 

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
    else if (result === `Computer wins! ${computerSelection} beats ${playerSelection}`) {
        score.losses += 1;
    };

    console.log(score)

    return score;
};

updateScore(result);

let gameResult = ''

function endGame(score) {

    if (score.wins === 5) {
        gameResult = 'You beat the computer! Congrats';
    }
    else if (score.losses === 5) {
        gameResult = 'Computer owns you lmao.';
    };

    console.log(gameResult);

    return gameResult;
}

/*
function game() {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
    updateScore(result);

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
    updateScore(result);

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
    updateScore(result);

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
    updateScore(result);

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
    updateScore(result);
  };*/

  function game() {
    while(gameResult == '' ) {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        updateScore(result);
        endGame(score);
    }
  }

/*
  function game() {
    for (score = 0; score <= 5; score++) {
        playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
    updateScore(result);
    }
  }*/

game()