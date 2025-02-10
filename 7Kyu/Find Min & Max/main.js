// Find Min & Max

// Implement a function that returns the minimal and the maximal value of a list (in this order).

// My Solution
// arr -> array of numbers. whole positive. not empty array?
// return -> smallest & highest nums in array
function getMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

// Other Solutions
const getMinMax = (arr) => [Math.min(...arr), Math.max(...arr)];

// 2
function getMinMax(arr) {
  const sorted = arr.sort((a, b) => a - b);
  return [sorted[0], sorted[sorted.length - 1]];
}

// 3
function getMinMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return [min, max];
}
