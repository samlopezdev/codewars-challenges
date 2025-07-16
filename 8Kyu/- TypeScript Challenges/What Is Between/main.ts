// What Is Between

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// My Solution
// a & b -> numbers. Whole, positive. No funny biz
// return -> array of numbers between and including a & b
export function between(a: number, b: number): number[] {
  const numbers = []
  
  for (let i = a; i <= b; i++) {
    numbers.push(i)
  }
  
  return numbers
}

// Other Solutions
export function between(a: number, b: number): number[] {
  return Array.from({ length: b - a + 1 }, (_, j) => j + a);
}

// 2
export function between(a: number, b: number): number[] {
  let list = [];
  while (a <= b) {
    list.push(a);
    a++;
  }
  return list;
}