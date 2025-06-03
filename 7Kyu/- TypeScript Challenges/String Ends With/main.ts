// Strings Ends With

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


// My Solution
export const solution = (str: string, ending: string): boolean =>
  str.endsWith(ending);


// Other Solutions
export function solution(str: string, ending: string): boolean {
  return str.endsWith(ending);
}


// 2
export function solution(str: string, ending: string): boolean {
  const strLength = str.length;
  const endingLength = ending.length;

  if (!endingLength) return true;
  if (strLength < endingLength) return false;
  return str.substr(strLength - endingLength, endingLength) === ending;
}


// 3
export function solution(str: string, ending: string): boolean {
  return str.lastIndexOf(ending) === str.length - ending.length;
}