// Merge Two Arrays

// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

// Examples:

// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
// Points:

// The arrays may be of different lengths, with at least one character/digit.
// One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).

// My Solution
// a, b -> arrays. no empty arrays
// return -> array of combined elements (alternating).

function mergeArrays(a, b) {
  const merged = [];
  const longest = a.length > b.length ? a : b;

  for (let i = 0; i < longest.length; i++) {
    if (a[i]) merged.push(a[i]);
    if (b[i]) merged.push(b[i]);
  }
  return j;
}

console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ["a", "b", "c", "d", "e"]), [
  1,
  "a",
  2,
  "b",
  3,
  "c",
  4,
  "d",
  5,
  "e",
  6,
  7,
  8,
]);

// Other Solutions
function mergeArrays(a, b) {
  var answer = [];

  for (i = 0; i < Math.max(a.length, b.length); i++) {
    if (i < a.length) {
      answer.push(a[i]);
    }
    if (i < b.length) {
      answer.push(b[i]);
    }
  }

  return answer;
}

// 2
function mergeArrays(a, b) {
  var returnArray = [];
  var counter = 0;
  while (a[counter] || b[counter]) {
    if (a[counter]) {
      returnArray.push(a[counter]);
    }
    if (b[counter]) {
      returnArray.push(b[counter]);
    }
    counter++;
  }
  return returnArray;
}

// 3
function mergeArrays(a, b) {
  var answer = [];

  for (i = 0; i < Math.max(a.length, b.length); i++) {
    if (i < a.length) {
      answer.push(a[i]);
    }
    if (i < b.length) {
      answer.push(b[i]);
    }
  }

  return answer;
}

// 4
function mergeArrays(a, b) {
  var res = [];
  let i = 0;
  while (i < a.length || i < b.length) {
    if (i < a.length) res.push(a[i]);
    if (i < b.length) res.push(b[i]);
    i++;
  }
  return res;
}
