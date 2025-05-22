// You're A Square

// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false


// My Solution
export default function isSquare(n: number): boolean {
  return Number.isInteger(Math.sqrt(n));
};


// Other Solutions
export default function isSquare(n: number): boolean {
  return Math.sqrt(n) % 1 == 0;
};


// 2
export default function isSquare(n: number): boolean {
  return Number.isInteger(n ** 0.5);
};


// 3
export default function isSquare(n: number): boolean {
  const root = Math.sqrt(n);
  return Math.trunc(root) === root;
};