// Fiind Nearest Square Num

// Your task is to find the nearest square number of a positive integer n. In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// For example, if n = 111, then the nearest square number equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

// If n is already a perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

// My Solution
export function nearestSq(n: number): number {
  const sqrt = Math.sqrt(n);
  const lowerSquare = Math.floor(sqrt) ** 2;
  const upperSquare = Math.ceil(sqrt) ** 2;

  return (n - lowerSquare) < (upperSquare - n) ? lowerSquare : upperSquare;
}


// Other Solutions
export function nearestSq(n: number): number {
  return Math.round(Math.sqrt(n)) ** 2;
}


// 2
export function nearestSq(n: number): number {
  const nearest = Math.round(Math.sqrt(n));
  return nearest * nearest;
}


// 3
export const nearestSq = ($: number): number => Math.round(Math.sqrt($)) ** 2;