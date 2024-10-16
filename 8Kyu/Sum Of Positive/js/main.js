// Sum Of Positive

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


// Most Logical Solution:
function positiveSum(arr) {
    let total = 0;
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
      if (arr[i] > 0) {                   // if arr[i] is greater than zero
        total += arr[i];                  // add arr[i] to total
      }
    }
    return total;                         // return total
}


// Other Solutions
function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}


// 2
function positiveSum(arr) {
    return arr.filter(x => x >= 0).reduce((a, b) => a+b, 0);
}


// 3
const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0)


// 4
function positiveSum( obj ) {
    return obj.map(el => el < 0 ? 0 : el).reduce((acc, i)=> acc + i, 0)
}