// Plural

// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

// My Solution
export function plural(n: number): boolean {
  return n != 1;
}

// Other Solution
export const plural = (n: number) => n != 1;

// 2
export function plural(n: number): boolean {
  return n < 1 || n > 1;
}

// 3
export function plural(n: number): boolean {
  interface IsingleNumbersVSWordEndingS {
    [key: number]: boolean;
  }

  const singleNumbersVSWordEndingS: IsingleNumbersVSWordEndingS = {
    1: false,
  };

  return singleNumbersVSWordEndingS[n] ?? true;
}
