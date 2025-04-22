// Smallest Value of an Array

// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// Some examples:

// ([1,2,3,4,5], "value") should return 1
// ([1,2,3,4,5], "index") should return 0

// My Solution
// arr -> array of numbers. Whole, positive, no dupes
// toReturn -> either 'value' or 'index'

// return -> arrays smallest value or it's indx
function min(arr, toReturn) {
  const minVal = Math.min(...arr);
  return toReturn == "value" ? minVal : arr.indexOf(minVal);
}

// Other Solutions
const min = (arr, toReturn) =>
  toReturn == "value" ? Math.min(...arr) : arr.indexOf(Math.min(...arr));

// 2
function min(arr, toReturn) {
  if (toReturn == "value") {
    return Math.min(...arr);
  } else {
    return arr.indexOf(Math.min(...arr));
  }
}

// 3
function min(arr, toReturn) {
  const minVal = Math.min(...arr);

  if (toReturn === "value") return minVal;
  if (toReturn === "index") return arr.indexOf(minVal);
  else return "Not valid";
}
