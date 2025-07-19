let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // generate a random number,
    let num = Math.random();

    // parse that number into 0, 1, and 2
    if (num < 0.33) {
        return 'rock';
    }
    if (num < 0.66) {
        return 'paper';
    }
    else {
        return 'scissors';
    }


}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:");
    if (choice === null) {
        return null;
    }
    return choice.trim().toLowerCase();
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log('Tie! Nobody wins this round.')
    }
    if (humanChoice === 'rock') {
        if (computerChoice === 'scissors') {
            humanScore++;
            console.log('rock (human) beats scissors (computer)!');
        }
        if (computerChoice === 'paper') {
            computerScore++;
            console.log('paper (computer) beats rock (human)!');
        }
    }
    if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            humanScore++;
            console.log('paper (human) beats rock (computer)!');
        }
        if (computerChoice === 'scissors') {
            computerScore++;
            console.log('scissors (computer) beats paper (human)!');
        }
    }
    if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore++;
            console.log('rock (computer) beats scissors (human)!');
        }
        if (computerChoice === 'paper') {
            humanScore++;
            console.log('scissors (human) beats paper (computer)!');
        }
    }
    console.log('score: ' + humanScore + ' - ' + computerScore)

}

function playGame() {

    while (humanScore < 3 && computerScore < 3) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        if (humanSelection === null) {
            console.log('game stopped');
        }
    
        playRound(humanSelection, computerSelection);
    }

    if (humanScore === 3) {
        console.log('human wins!');
    } else {
        console.log('computer wins!');
    }

    humanScore = 0;
    computerScore = 0;

}