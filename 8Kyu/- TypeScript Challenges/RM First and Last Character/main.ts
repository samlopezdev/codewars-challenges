// Remove First and Last Character

// Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.

// Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.

// Examples
// 'eloquent' --> 'loquen'
// 'country'  --> 'ountr' 
// 'person'   --> 'erso'
// 'ab'       --> '' (empty string)
// 'xyz'      --> 'y'
// Requirements
// The input string will always have at least 2 characters
// For strings with exactly 2 characters, return an empty string
// For strings with 3 or more characters, remove the first and last character
// The function should handle strings containing letters, numbers, and special characters


// My Solution
export function removeChar(str: string): string {
  return str.slice(1, -1);
}


// Other Solution
export const removeChar = (str: string) => str.substring(1, str.length - 1);

// 2
export function removeChar(str: string): string {
  const arr = [...str];
  arr.pop();
  arr.shift();
  return arr.join("");
}
