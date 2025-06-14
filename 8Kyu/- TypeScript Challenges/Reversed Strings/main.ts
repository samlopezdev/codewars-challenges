// Reversed Strings

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


// My Solution
export const solution = (str: string): string => [...str].reverse().join("");

// Other Solutions
export function solution(str: string): string {
  return str.split("").reverse().join("");
}


// 2
export function solution(str: string): string {
  let result: Array<string> = [];

  for (let char of str.split("")) {
    result.splice(0, 0, char);
  }

  return result.join("");
}