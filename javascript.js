let humanScore = 0;
let computerScore = 0;
let gameState = 'in progress';

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

const displayEvent = document.getElementById('event');
const displayScore = document.getElementById('score');

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        displayEvent.textContent = 'Tie! Nobody wins this round.';
    }
    if (humanChoice === 'rock') {
        if (computerChoice === 'scissors') {
            humanScore++;
            displayEvent.textContent = 'rock (human) beats scissors (computer)!';
        }
        if (computerChoice === 'paper') {
            computerScore++;
            displayEvent.textContent = 'paper (computer) beats rock (human)!';
        }
    }
    if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            humanScore++;
            displayEvent.textContent = 'paper (human) beats rock (computer)!';
        }
        if (computerChoice === 'scissors') {
            computerScore++;
            displayEvent.textContent = 'scissors (computer) beats paper (human)!';
        }
    }
    if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore++;
            displayEvent.textContent = 'rock (computer) beats scissors (human)!';
        }
        if (computerChoice === 'paper') {
            humanScore++;
            displayEvent.textContent = 'scissors (human) beats paper (computer)!';
        }
    }
    displayScore.textContent = 'score: (human) ' + humanScore + ' -  (computer) ' + computerScore;
    updateGameState();

}

const winText = document.getElementById('winner');

const reset_btn = document.createElement('button');
reset_btn.id = 'reset_btn';
reset_btn.textContent = 'Play Again';
reset_btn.style.display = 'none';

reset_btn.addEventListener('click', function(){
    resetGameState();
    displayScore.textContent = 'score: (human) 0 - (computer) 0';
    displayEvent.textContent = '';
    winText.textContent = '';
    reset_btn.style.display = 'none';
});

const winnerDiv = document.getElementById('winner');

function updateGameState() {
    if (humanScore < 3 && computerScore < 3) {
        return gameState = 'in progress';
    } 
    else if (humanScore === 3) {
        winText.textContent = 'Human Wins!';
        reset_btn.style.display = 'block';
        winnerDiv.appendChild(reset_btn);
        return gameState = 'human wins';
    } 
    else {
        winText.textContent = 'Computer Wins!';
        reset_btn.style.display = 'block';
        winnerDiv.appendChild(reset_btn);
        return gameState = 'computer wins';
    }
}

function resetGameState() {
    humanScore = 0;
    computerScore = 0;
    return gameState = 'in progress';
}

const rock_btn = document.getElementById('rock_btn');
rock_btn.addEventListener('click', function() {
    if (gameState === 'in progress') {
        playRound('rock', getComputerChoice());
    }
});

const paper_btn = document.getElementById('paper_btn');
paper_btn.addEventListener('click', function() {
    if (gameState === 'in progress') {
        playRound('paper', getComputerChoice());
    }
});

const scissors_btn = document.getElementById('scissors_btn');
scissors_btn.addEventListener('click', function() {
    if (gameState === 'in progress') {
        playRound('scissors', getComputerChoice());
    }
});