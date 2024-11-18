// Your A Square

// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false



// My Solution

// n -> integral number. positive or negative.
// return -> true or false. is n a perfect square?
function isSquare(n) {
    // n greater than 0 ?
    // Math.sqrt()
    // check if sqrt is whole.
    return Number.isInteger(Math.sqrt(n))
} 
  // console.log( isSquare(4), true)
  // console.log( isSquare(26), false)



// Other Solutions
function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}



// 2
const isSquare = n => Number.isInteger(Math.sqrt(n));


// 3
var isSquare = function(n){

	if((Math.sqrt(n) % 1) == 0)
		return true;
	else
		return false;
}