// To square(root) or not to square(root)

// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.


// My Solution
function squareOrSquareRoot(array) {
    return array.map( num => {
      if (Number.isInteger(Math.sqrt(num))) return Math.sqrt(num)
      return num ** 2
    })
}


// Other Solutions
function squareOrSquareRoot(array) {
    return array.map(x => {
      const r = Math.sqrt(x);
      return (r % 1 == 0) ? r : (x*x);
    });  
}


// 2
const squareOrSquareRoot = array => array.map(a => Math.sqrt(a) % 1 == 0 ? Math.sqrt(a) : (a * a));


// 3
function squareOrSquareRoot(array) {
    return array.map(x => {
      const n = Math.sqrt(x)
      return Number.isInteger(n) ? n : x * x
    })
}


// 4
function squareOrSquareRoot(array) {
    return array.map(e => Number.isInteger(Math.sqrt(e)) ? Math.sqrt(e) : e*e);  
}
