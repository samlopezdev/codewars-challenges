// Even or Odd

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// My Solution
export function evenOrOdd(n: number): string {
  return n % 2 === 0 ? "Even" : "Odd";
}

// Other Solution
export const evenOrOdd = (n: number): string => (n % 2 === 0 ? "Even" : "Odd");

// 2
export const evenOrOdd = (n: number): "Even" | "Odd" =>
  n % 2 === 0 ? "Even" : "Odd";

// 3
export function evenOrOdd(n: number): string {
  return n & 1 ? "Odd" : "Even";
}
