function computerPlay() {
    let decNum = Math.floor(Math.random() * 3) + 1
    if (decNum % 3 == 1) {
        return 'rock'
    } else if (decNum % 3 == 2) {
        return 'paper'
    } 
    return 'scissors'
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerSelection) {
        console.log(`Draw! Both of you chose ${capitalize(playerSelection)}`)
        return 0
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') 
    || (playerSelection === 'paper' && computerSelection === 'scissors')
    || (playerSelection === 'scissors' && computerSelection === 'rock')) {
        console.log(`You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`)
        return -1
    } else {
        console.log(`You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`)
        return 1
    }
}
function capitalize(str) {
    return str[0].toUpperCase() + str.substring(1, str.length)
}
function game() {
    let playerScore = 0
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Make your choice')
        let computerSelection = computerPlay()
        playerScore += playRound(playerSelection, computerSelection)
    }
    if (playerScore > 0) {
        console.log('You have won the game')
    } else if (playerScore === 0) {
        console.log('The game resulted in a draw')
    } else {
        console.log('The computer has won the game')
    }
}
game()