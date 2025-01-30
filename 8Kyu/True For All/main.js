// Enumerable Magic #1 - True for All?

// Create a method all which takes two params:

// a sequence
// a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

// Example
// all((1, 2, 3, 4, 5), greater_than_9) -> false
// all((1, 2, 3, 4, 5), less_than_9)    -> True

// My Solution

// arr -> array of numberrs
// fun -> function() w/ conditional statement
const all = (arr, fun) => arr.every((val) => fun(val));

// console.log( all([1, 2, 3, 4, 5], function(v) { return v < 9; }), true))

// Other Solutions
function all(arr, fun) {
  return arr.every((val) => fun(val));
}

// 2
function all(arr, fun) {
  return arr.every(fun);
}

// 3
function all(arr, fun) {
  var length = arr.length;

  for (var i = 0; i < length; ++i) if (!fun(arr[i])) return false;

  return true;
}
