// Color Ghost

// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"


// My Solution
class Ghost {
  constructor() {
    const random = Math.floor(Math.random() * 4)
    this.color = ['white', 'yellow', 'purple', 'red'][random]
  }
};


// Other Solutions
let Ghost = function() {
  let random = Math.floor(Math.random() * 4)
  this.color = ['white', 'yellow', 'purple', 'red'][random]
};


// 2
var Ghost = function () {
  var colors = ["white", "yellow", "purple", "red"];
  this.color = colors[Math.floor(Math.random() * colors.length)];
};


// 3
var Ghost = function () {
  var colors = ["white", "yellow", "purple", "red"];
  var colorIndex = Math.floor(Math.random() * colors.length);
  this.color = colors[colorIndex];
};