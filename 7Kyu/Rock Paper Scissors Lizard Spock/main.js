// Rock Paper Scissors Lizard Spock

// In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:

// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock
// Rock crushes Scissors
// Task:
// Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

// Inputs
// Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".




// My Solution
function rpsls(pl1,pl2){
    if (pl1 === pl2) return `Draw!`
    if ( ( pl1 === 'scissors' && pl2 === 'paper' ) ||
       ( pl1 === 'paper' && pl2 === 'rock' ) ||
       ( pl1 === 'rock' && pl2 === 'lizard' ) ||
       ( pl1 === 'lizard' && pl2 === 'spock' ) ||
       ( pl1 === 'spock' && pl2 === 'scissors') ||
       ( pl1 === 'scissors' && pl2 === 'lizard') ||
       ( pl1 === 'lizard' && pl2 === 'paper' ) ||
       ( pl1 === 'paper' && pl2 === 'spock') ||
       ( pl1 === 'spock' && pl2 === 'rock') ||
       ( pl1 === 'rock' && pl2 === 'scissors')) {
      return `Player 1 Won!`
    }
    else { return `Player 2 Won!`}
}



// Other Solutions
const MATCH = {
    scissors: ['paper', 'lizard'],
    paper: ['rock', 'scissors'],
    rock: ['lizard', 'scissors'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock'],
}

function rpsls(pl1, pl2) {
    return MATCH[pl1].indexOf(pl2) >= 0 ? `Player 1 Wins!` : 
            MATCH[pl2].indexOf(pl1) >= 0 ? `Player 2 Wins!` : `Draw!`
}


// 2
function rpsls(pl1, pl2) {
    if (pl1 === pl2) return `Draw!`
    let rules = {
        'rock': ['lizard', 'scissors'],
        'paper': ['rock', 'scissors'],
        'scissors': ['paper', 'lizard'],
        'lizard': ['spock', 'paper'],
        'spock': ['scissors', 'rock'],
    }

    if (rules[pl1].includes(pl2)) return `Player 1 Wins!`
    else { return `Player 2 Wins!`}
}


// 3
function rpsls(pl1, pl2) {
    let wins = {
        scissors:['paper','lizard'],
        paper:['rock','spock'],
        rock:['lizard','scissors'],
        lizard:['spock','paper'],
        spock:['scissors','rock']
    }

    let player1 = wins[pl1].includes(pl2)
    let player2 = wins[pl2].includes(pl1)

    if (!player && !player2) return `Draw!`
    return `Player ${player1 ? '1' : '2'} Won!`
}


// 4
function rpsls(pl1, pl2){
    const conditions = [ ['scissors', 'paper'], ['paper', 'rock'], ['rock', 'lizard'],
      ['lizard', 'spock'], ['spock', 'scissors'],['scissors', 'lizard'],['lizard', 'paper'],
      ['paper', 'spock'],['spock', 'rock'],['rock', 'scissors'] ];
    
    if (pl1 === pl2){
      return 'Draw!'
    }else if (conditions.find(win => win[0] === pl1 && win[1] === pl2)) {
      return 'Player 1 Won!';
    }else{
      return 'Player 2 Won!';
    }
}