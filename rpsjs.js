// first need to generate a random number,
const randomNum = Math.random();
// then assign each number a rock, paper, or scissor value with equl prob
// then have the value that is chosen be the computerChoice

let = computerSelection = '';

function getComputerChoice() {

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
console.log(randomNum)
}

getComputerChoice();