// Array Combinations

// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// See test cases for more examples.


// My Solution
function solve(arr) {
    //   make each subarray uniq - set
    //   return the product of the length of each subarray - reduce
    return arr.reduce( (a, c) => a * new Set(c).size, 1);
};
    
//are there always going to be at least one element in the subarrays?
//are there always goin to be numbers in the subarrays? no strings, booleans, etc
//are the numbers always going to be whole integer? no floats or negative values?
// return number of uniq posisibilites as a number

// [[1,2],[4],[5,6]]) = 4
// 145, 146, 245, 246

// [1,2],[4,4],[5,6,6]] = 4

// [[1,2],[3,4],[5,6]]),8) = 8
// 135, 136, 145, 146, 235, 236, 245, 246
// arr = [ [], [], []]




// Other Solutions
const solve = a => a.map( v => new Set(v).size ).reduce( (v,w) => v*w , 1 ) ;


// 2
const solve = arr =>  arr.map((el) => [...new Set(el)].length).reduce((acc, c) => acc * c)


// 3
function solve(arr) {
    return arr.map(a => {
      let s = new Set();
      a.forEach(el => s.add(el));
      return s.size;
    })
      .reduce((out, n) => out * n, 1);
};