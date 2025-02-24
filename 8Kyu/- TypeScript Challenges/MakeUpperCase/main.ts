// MakeUpperCase

// Write a function which converts the input string to uppercase.


// My Solution
export function makeUpperCase(str: string):string {
    return str.toUpperCase()
}


// Other Solutions
export const makeUpperCase = (str: string): string => str.toUpperCase();


// 2
export function makeUpperCase(str: string): string {
  return String.prototype.toUpperCase.apply(str);
}

// 3
export function makeUpperCase(str: string): string {
  return str.replace(/\w+/g, (c) => c.toUpperCase());
}