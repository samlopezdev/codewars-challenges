// Opposite Number

// Given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34


// My Solution:
function opposite(number) {
    return number * -1
}

// Other Solution:
const opposite = number => number * -1


// 2
function opposite(number) {
    return (-number);
}



// 3
function opposite(number) {
    return number > 0 ? -number : Math.abs(number);
}



// 4
function opposite(number) {
    if (number) {
      return -number 
    }else {
      return number
    }
}



// 5
function opposite(number) {
    if(number === 0) {
      return number;
    }
    else if(number > 0) {
      return -number;
    }
    else if(number < 0) {
      return number *= -1;
    }
}