// Sum Mixed Array

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// My Solution
// x -> an array of string numbers and integers. Always whole numbers.
// return -> number. The total sum of all numbers in array.
export function sumMix(x: any[]): number {
  //   loop thru array
  //   convert string numbers to NUMBERS
  //   Add them to total
  
  //   let total = 0
  //   for (const num of x) {
  //     total += Number(num)
  //   }
  //   return total
  return x.reduce((sum, n) => sum + Number(n), 0);
}

// Other Solutions
export function sumMix(xs: (string | number)[]): number {
  return xs.reduce<number>((a: number, x: string | number) => a + +x, 0);
}

// 2
export const sumMix = (x: any[]): number =>
  x.reduce((acc, cur) => acc + Number(cur), 0);

// 3
export function sumMix(x: any[]): number {
  const clean = x.map((v) => (typeof v === "number" ? v : parseInt(v)));
  return clean.reduce((a, b) => a + b, 0);
}