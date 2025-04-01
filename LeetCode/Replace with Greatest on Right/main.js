// Replace Elements With Greatest Element On Right Side

// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

// Example 1:

// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]
// Explanation:
// - index 0 --> the greatest element to the right of index 0 is index 1 (18).
// - index 1 --> the greatest element to the right of index 1 is index 4 (6).
// - index 2 --> the greatest element to the right of index 2 is index 4 (6).
// - index 3 --> the greatest element to the right of index 3 is index 4 (6).
// - index 4 --> the greatest element to the right of index 4 is index 5 (1).
// - index 5 --> there are no elements to the right of index 5, so we put -1.
// Example 2:

// Input: arr = [400]
// Output: [-1]
// Explanation: There are no elements to the right of index 0.

// Constraints:
// 1 <= arr.length <= 104
// 1 <= arr[i] <= 105

// My Solution
const replaceElements = (arr) => {
  let n = arr.length;
  let ans = new Array(n);
  let rightMax = -1;
  for (let i = n - 1; i >= 0; i--) {
    ans[i] = rightMax;
    rightMax = Math.max(rightMax, arr[i]);
  }
  return ans;

  // const greatestArr = []
  // for (let i = 0; i < arr.length; i++) {

  //     const maxRight = Math.max(...arr.slice(i + 1))
  //     if (!arr[i + 1]) greatestArr.push(-1)
  //     else {
  //         greatestArr.push(maxRight)
  //     }
  // }
  // return greatestArr
};

// Other Solutions
const replaceElements = (arr) => {
  const result = new Array(arr.length);
  result[arr.length - 1] = -1;

  for (let i = arr.length - 1; i > 0; i -= 1) {
    result[i - 1] = Math.max(arr[i], result[i]);
  }

  return result;
};

// 2
var replaceElements = function (arr) {
  let len = arr.length;
  let max = -1;

  for (let i = len - 1; i >= 0; i--) {
    let curr = arr[i];
    arr[i] = max;
    if (curr > max) {
      max = curr;
    }
  }
  return arr;
};

// 3
var replaceElements = function (arr) {
  let currentMax = arr[arr.length - 1];
  arr[arr.length - 1] = -1;

  for (let i = arr.length - 2; i >= 0; i--) {
    if (currentMax > arr[i]) {
      arr[i] = currentMax;
    } else {
      const temp = currentMax;
      currentMax = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
};
