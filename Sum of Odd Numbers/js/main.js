// Sum of Odd Number (Pyramid)

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8


// Logcal Solution
function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
}

// Other Solutions
function rowSumOddNumbers(n) {
	return n*n*n
}



// 2
let rowSumOddNumbers = n => n ** 3;


// 3
function rowSumOddNumbers(n) {return n**2*n}


// 4
function rowSumOddNumbers(n) {
  return n > 0 ? n * n * n : "Wrong Input"
}
