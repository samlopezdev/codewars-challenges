// Array.diff

// Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.

// Examples
// If a = [1, 2] and b = [1], the result should be [2].

// If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].

// My Solution
export function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter((num: number) => !b.includes(num));
}

// a -> number array. whole positive numbers. empty?
// b -> number array. whole positive numbers. empty

// return -> number array === a array without the numbers from b array. Use filter?


// Other Solutions
export function arrayDiff(a: number[], b: number[]): number[] {
  const bSet = new Set(b);
  return a.filter((value) => !bSet.has(value));
}


// 2
export const arrayDiff = (a: number[], b: number[]): number[] =>
  a.filter((x) => !b.includes(x));


// 3
export function arrayDiff(a: number[], b: number[]): number[] {
  let res = [];
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      res.push(a[i]);
    }
  }
  return res;
}