// Squaring an Arguement

// Write a function that takes an argument and returns the square of it.

// My Solution
export const square = (num: number): number => num ** 2;

// Other Solutions
export function square(n: number): number {
  return n * n;
}

// 2
export function square(n: number) {
  return Math.pow(n, 2);
}
