// String Repeat

// Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// My Solution
export function repeatStr(n: number, s: string): string {
  return s.repeat(n);
}

// Other Solutions
export const repeatStr = (n: number, s: string): string => s.repeat(n);

// 2
export function repeatStr(n: number, s: string): string {
  return "".padStart(n * s.length, s);
}

// 3
export function repeatStr(n: number, s: string): string {
  return `${s.repeat(n)}`;
}
