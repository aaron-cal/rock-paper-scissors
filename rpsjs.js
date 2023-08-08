// first need to generate a random number,
const randomNum = Math.random();
// then assign each number a rock, paper, or scissor value with equl prob
// then have the value that is chosen be the computerChoice

const computerSelection = getComputerChoice()

function getComputerChoice() {

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

console.log(getComputerChoice());

// prompt the player to make a selection

const playerSelection = getPlayerChoice()

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

// compare the player selection to the comp selection

const result = playRound(playerSelection, computerSelection)

function playRound(playerSelection, computerSelection) {

    let result ='';

        if (playerSelection === 'rock' && computerSelection === 'rock') {
            result = 'Tie Game!';
        }
        else if (playerSelection === 'rock' && computerSelection === 'paper') {
            result = 'Computer wins! Paper beats rock';
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
            result = 'Computer wins! Scissors beats paper ';
        }
        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            result = 'Computer wins! Rock beats scissors';
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            result = 'You win! Computer sucks!';
        }
        else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
            result = 'Tie Game!';
        }

        return result;
}

console.log(result);