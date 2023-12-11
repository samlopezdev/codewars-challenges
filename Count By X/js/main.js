// Count By X

// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

//  Most Logical Solution:
function countBy(x, n) {
    let z = []
    
    for (let i = 1; i <= n; i++) {
        z.push(x * i)
    }
    return z
}




// Other Solutions:
const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)



// 2
function countBy(x, n) {
    let z = []
    
    while (z.length < n) z.push(x * (z.length + 1))

    return z
}



// 3
function countBy(x, n) {
    let z = [];
    let y = x;
    
    for(i = 0; i < n; i++) {
      z[i] = x;
      x += y;
    }
  
    return z;
  }