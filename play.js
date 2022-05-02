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
        return 'Draw!!!'
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') 
    || (playerSelection === 'paper' && computerSelection === 'scissors')
    || (playerSelection === 'Scissors' && computerSelection === 'rock')) {
        return `You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`
    } else {
        return `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerS)}`
    }
}
function capitalize(str) {
    return str[0].toUpperCase() + str.substring(1, str.length)
}