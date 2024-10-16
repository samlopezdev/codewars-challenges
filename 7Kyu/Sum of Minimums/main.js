// Sum of Minimums!

// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

// ENJOY CODING :)



// My Solution
function sumOfMinimums(arr) {
    let sumOfMins = 0
    
    for (let i = 0; i < arr.length; i++) {
      sumOfMins += Math.min(...arr[i])
    }
    
    return sumOfMins
}



// Other Solutions
function sumOfMinimums(arr) {
    return arr.reduce((p, c) => p + Math.min(...c), 0);
}


// 2
const sumOfMinimums = ( array ) => array.map( el => Math.min(...el) ).reduce( (a, b)=> a + b, 0)


// 3
function sumOfMinimums(arr) {
    let sum = 0
    arr.forEach((x)=>sum = sum + x.sort(function(a, b){return a - b})[0])
    return sum
}