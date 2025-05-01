// Find the Smallest Int in Array

Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.


// My Solution
export function findSmallestInt(args: number[]): number {
  return Math.min(...args);
}


// Other Solutions
export const findSmallestInt = (args: number[]): number => Math.min(...args)

// 2
export const findSmallestInt = (args: number[]): number => args.sort((a, b) => a - b)[0];

// 3
export function findSmallestInt($: number[]): number {
  if ( $.length === 0 ){
    throw new Error("This method or operation is not implemented.");
  }
  return Math.min(...$);
}