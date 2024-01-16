// Rock Paper Scissors

// Return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"


// My Solution:
const rps = (p1, p2) => {
    if (p1 === p2) {
      return "Draw!"
    } else if ((p1 === "scissors" && p2 === "paper") || 
              (p1 === "paper" && p2 === "rock") ||
              (p1 === "rock" && p2 === "scissors")) {
        return "Player 1 won!"
    } else {
      return "Player 2 won!"
    }
}



// Other Solutions:
const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === rules[p1]) {
      return "Player 1 won!";
    }
    else {
      return "Player 2 won!";
    }
};




// 2
const rps = (p1, p2) => {
    if(p1 === p2) {
      return 'Draw!'
    }; 

    return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
}



// 3
const rps = (p1, p2) => {
    var map = {
      'rock': 'scissors',
      'scissors': 'paper',
      'paper': 'rock'
    };
    
    if (p1 == p2) {
      return 'Draw!';
    } else {
      return 'Player ' + (map[p1] == p2 ? 1 : 2) + ' won!';
    }
};



// 4
const winsOver = {
    "rock" : "scissors",
    "scissors" : "paper",
    "paper" : "rock"
};

const rps = (p1, p2) => {
  if (p1 === p2)
    return "Draw!";
  else if (winsOver[p1] === p2)
    return "Player 1 won!";
  else
    return "Player 2 won!";  
};