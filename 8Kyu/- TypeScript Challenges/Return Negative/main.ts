// Return Negative

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);  // return -1
// makeNegative(-5); // return -5
// makeNegative(0);  // return 0
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.


// My Solution
export const makeNegative = (num: number): number => num < 0 ? num : -num


// Other Solutions
export const makeNegative = (num: number): number => {
  return num < 0 ? num : -num
};


// 2
export const makeNegative = (num: number): number => -Math.abs(num);

// 3
export const makeNegative = (num: number): number => {
  return Math.sign(num) === -1 ? num : -num;
};