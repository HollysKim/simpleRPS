function getComputerChoice() {
    const moves = ['Rock', 'Paper', 'Scissors'];
    let randomNum = Math.floor(Math.random()*3);
    return(moves[randomNum]);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if(playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        return('You win! Rock beats scissors.');
    }
    else if(playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        return('You lose! Paper beats rock.');
    }
    else if(playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        return('You win! Paper beats rock.');
    }
    else if(playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        return('You lose! Scissors beats paper.');
    }
    else if(playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        return('You win! Scissors beats paper.');
    }
    else if(playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        return('You lose! Rock beats scissors.');
    }
    else if(playerSelection === computerSelection){
        return(`You tied! ${playerSelection} and ${computerSelection} tie.`)
    }
    else {
        return(`${playerSelection} is not a valid input.`)
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        let player = prompt(`Round ${i+1}! Enter a move.`)
        let computer = getComputerChoice();
        console.log(playRound(player, computer));
    }
}

game();

