// Regular Ball Super Ball


// Logical Solution
var Ball = function(ballType) {
    this.ballType = ballType || 'regular'
}


// Other Solutions
class Ball {
    constructor(ballType = 'regular') {
        this.ballType = ballType
    }
}


// 2
var Ball = function(ballType = "regular") {
    this.ballType = ballType;
};


// 3
var Ball = function(ballType) {
    this.ballType = typeof ballType !== 'undefined' ? ballType : 'regular';
};


// 4
var Ball = function(ballType) {
    this.ballType = ballType ? ballType : "regular";
};


// 5
var Ball = function(ballType) {
    if (!ballType){
      this.ballType = 'regular';
    }
    else {
      this.ballType= 'super';
    }
};