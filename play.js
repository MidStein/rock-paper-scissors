function computerPlay() {
    let computerSelection;
    let decNum = Math.floor(Math.random() * 3) + 1
    if (decNum % 3 == 1) {
        return "rock";
    } else if (decNum % 3 == 2) {
        return "paper";
    } 
    else {
        return "scissors";
    }
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    let roundResult = document.querySelector(".round-result");
    if (playerSelection === computerSelection) {
        roundResult.style.color = "#4682b4";
        roundResult.textContent = `Draw! Both of you chose ${capitalize(playerSelection)}`;
        return 0;
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') 
    || (playerSelection === 'paper' && computerSelection === 'scissors')
    || (playerSelection === 'scissors' && computerSelection === 'rock')) {
        roundResult.style.color = "#ff8c00";
        roundResult.textContent = `You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
        return -1;
    } else {
        roundResult.style.color = "#32cd32";
        roundResult.textContent = `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
        return 1;
    }
}
function capitalize(str) {
    return str[0].toUpperCase() + str.substring(1, str.length)
}
function game() {
    let playerScore = 0;
    let count = 0;
    let userScore = 0;
    let compScore = 0;
    const urs = document.querySelector("#player-side .running-score");
    const crs = document.querySelector("#computer-side .running-score");
    function eventHandler() {
        count += 1;
        let playerSelection = this.className;
        let computerSelection = computerPlay();
        let prevScore = playerScore;
        playerScore += playRound(playerSelection, computerSelection);
        if (playerScore > prevScore) userScore += 1;
        else if (playerScore < prevScore) compScore += 1;
        urs.textContent = `Running Score: ${userScore}`;
        crs.textContent = `Running Score: ${compScore}`;
        if (count === 5) {
            // announceWinner(playerScore);
            let gameResult = document.querySelector(".game-result");
            if (playerScore > 0) {
                gameResult.style.color = "#228b22";
                gameResult.textContent = 'You have won the game';
            } else if (playerScore === 0) {
                gameResult.style.color = "#0000cd";
                gameResult.textContent = 'The game resulted in a draw';
            } else {
                gameResult.style.color = "#b22222";
                gameResult.textContent = 'The computer has won the game';
            }
            const buttons = document.querySelectorAll('.user-buttons>button');
            buttons.forEach(button => button.removeEventListener('click', eventHandler));
        }
    }
    const buttons = document.querySelectorAll('.user-buttons>button');
    buttons.forEach(button => button.addEventListener('click', eventHandler));
}
game()