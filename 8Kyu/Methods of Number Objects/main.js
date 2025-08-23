// Methods of Number Objects

// Coding in function howManySmaller, function accept 2 parameter:arr and n. arr is a decimal array. n is a decimal.

// The first mission: let all elements in the array keep two decimal places(No need to convert number n).

// The second mission: Traversal arr, count the number of elements which are smaller than n and return it.



// My Solution

// arr -> array of decimal numbers.
// n -> decimal number with at least 2 places.

// return -> a number of how many numbers in the arrayare smaller than n
function howManySmaller(arr,n){
  let count = 0
  
  arr.forEach( decimal => {
    if (decimal.toFixed(2) < n) count++
  })
  
  return count
}


// Other Solutions
function howManySmaller(arr, n) {
  return arr.filter((x) => +x.toFixed(2) < n).length;
}


// 2
function howManySmaller(arr, n) {
  total = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i].toFixed(2) < n) total++;
  }

  return total;
}