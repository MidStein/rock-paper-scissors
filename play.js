function computerPlay() {
    let decNum = Math.floor(Math.random() * 3) + 1
    if (decNum % 3 == 1) {
        return 'rock'
    } else if (decNum % 3 == 2) {
        return 'paper'
    } 
    return 'scissors'
}