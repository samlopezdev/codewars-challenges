// Array Plus Array

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.


// My Solution
export const arrayPlusArray = (arr1: number[], arr2: number[]): number => {
  return arr1.concat(arr2).reduce((sum, num) => sum + num, 0);
};


// Other Solution
export const arrayPlusArray = (arr1: number[], arr2: number[]): number => {
  return [...arr1, ...arr2].reduce((t, x) => t + x);
};


// 2
import _ from "lodash";

export function arrayPlusArray(...args: number[][]): number {
  return _(args).flatten().sum();
}