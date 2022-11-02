let userScore = 0;
let compScore = 0;
const userWin = 'You won!'
const compWin = 'You lose!' 
const tied = 'You tied!'

function getComputerChoice() {
    const hands = ['Rock', 'Paper', 'Scissors'];
    let randomNum = Math.floor(Math.random()*3);
    return(hands[randomNum]);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if(playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        userScore++;
        scoreText.textContent = `${userScore} - ${compScore}`;
        return(userWin);
    }
    else if(playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        compScore++;
        scoreText.textContent = `${userScore} - ${compScore}`;
        return(compWin);
    }
    else if(playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        userScore++;
        scoreText.textContent = `${userScore} - ${compScore}`;
        return(userWin);
    }
    else if(playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        compScore++;
        scoreText.textContent = `${userScore} - ${compScore}`;
        return(compWin);
    }
    else if(playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        userScore++;
        scoreText.textContent = `${userScore} - ${compScore}`;
        return(userWin);
    }
    else if(playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        compScore++;
        scoreText.textContent = `${userScore} - ${compScore}`;
        return(compWin);
    }
    else if(playerSelection === computerSelection){
        return(tied);
    }
    else {
        return(`${playerSelection} is not a valid input.`)
    }
}

function endGame() {
    if(userScore > 4 || compScore > 4) {
        moves.forEach((move) => {
            move.disabled= true;
        })
        restart.classList.remove('restart');
        if(userScore > 4) {
            roundText.textContent = `Congratulations! You won the game ${userScore} to ${compScore}!`;
        }
        else {
            roundText.textContent = `Sorry! You lost the game ${userScore} to ${compScore}.`
        }
    }
}

const moves = document.querySelectorAll('.move');
const restart = document.querySelector('#restart')
const container = document.querySelector('#container');
const roundText = document.querySelector('#roundText');
const scoreText = document.querySelector('#scoreText');

moves.forEach((move) => {
    move.addEventListener('click', () => {
        roundText.textContent = (playRound(move.id, getComputerChoice()))
        endGame();
    })
});
restart.addEventListener('click', () => {
    moves.forEach((move) => {
        move.disabled = false;
    })
    restart.classList.add('restart');
    scoreText.textContent = '0-0';
    userScore = 0;
    compScore = 0;
    roundText.textContent = 'Click a move to start the game!';
})

container.appendChild(roundText);
container.appendChild(scoreText);



