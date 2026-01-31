// All Star Code Challenge 18

// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", 'o')  =>  1
// ("Hello", 'l')  =>  2
// ("", 'z')       =>  0
// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1

// My Solution
export function strCount(str: string, letter: string): number {
  return [...str].reduce(
    (total: number, cur: string) => (cur === letter ? total + 1 : total),
    0,
  );
}

// Other Solutions
export function strCount(str: string, letter: string): number {
  let count = 0;

  for (const char of str) {
    if (char === letter) count++;
  }

  return count;
}

// 2
export const strCount = (str: string, letter: string) =>
  [...str].filter((c: string) => c === letter).length;

// 3
export function strCount(str: string, letter: string): number {
  return [...str].filter((stringIndex) => stringIndex.includes(letter)).length;
}