// Convert a Number to a String

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// My Solution
export const numberToString = (num: number): string => num.toString();

// Other Solutions
export function numberToString(num: number): string {
  return num.toString();
}

// 2
export function numberToString(num: number): string {
  return String(num);
}

// 3
export const numberToString = (num: number): string => `${num}`;

// 4
export function numberToString(num: number): string {
  return "" + num;
}
