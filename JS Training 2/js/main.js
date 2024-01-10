// JS Training 2 - Squaring Function


// Write a function that takes an argument and returns the square of it.


// My Solution:
function square(num) {
    return num ** 2
}


// Other Solutions:
const square = (num) => num * num



// 2
function square(num){
    return Math.pow(num, 2)
}



// 3
function square(n) {
    if (typeof n === 'number') {
      return n*n;
    } else {
      return 'undefined';
    }
}