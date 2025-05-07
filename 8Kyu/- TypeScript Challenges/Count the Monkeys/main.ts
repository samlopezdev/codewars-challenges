// Count the Monkeys

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example(Input --> Output):

// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

// My Solution

// n -> whole positive number. Not 0
// return -> array from 1 - n
export function monkeyCount(n: number): number[] {
  let monkeyCount: number[] = [];
  for (let i = 1; i <= n; i++) {
    monkeyCount.push(i);
  }
  return monkeyCount;
}

// Other Solution
export function monkeyCount(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i + 1);
}

// 2
export const monkeyCount = (n: number) => [...Array(n)].map((it, i) => i + 1);

// 3
export function monkeyCount(n: number) {
  const solution: Array<number> = [];
  for (let i = 1; i <= n; i++) {
    solution.push(i);
  }
  return solution;
}
