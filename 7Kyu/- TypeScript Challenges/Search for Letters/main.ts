// Search for Letters

// Create a function which accepts one arbitrary string as an argument, and return a string of length 26.

// The objective is to set each of the 26 characters of the output string to either '1' or '0' based on the fact whether the Nth letter of the alphabet is present in the input (independent of its case).

// So if an 'a' or an 'A' appears anywhere in the input string (any number of times), set the first character of the output string to '1', otherwise to '0'. if 'b' or 'B' appears in the string, set the second character to '1', and so on for the rest of the alphabet.

// For instance:

// "a   **&  cZ"  =>  "10100000000000000000000001"
// "aaaaaaa79345675"  =>  "10000000000000000000000000"
// "&%#*"  =>  "00000000000000000000000000"


// My Solution
export function change(string: string): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < alphabet.length; i++) {
    const char = alphabet[i];
    if (string.toLowerCase().includes(char)) {
      result += "1";
    } else {
      result += "0";
    }
  }

  return result;
}


// Other Solutions
export const change = (string: string): string => {
  const alphabet: string = "abcdefghijklmnopqrstuvwxyz";

  let solution: string = "";

  for (let char of alphabet) {
    solution += string.toLowerCase().indexOf(char) > -1 ? "1" : "0";
  }

  return solution;
};


// 2
export function change(string: string): string {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  return alpha
    .split("")
    .map((char) => (string.toLowerCase().includes(char) ? "1" : "0"))
    .join("");
}

// 3
export const change = (string: string) =>
  [..."abcdefghijklmnopqrstuvwxyz"]
    .map( c => +string.toLowerCase().includes(c))
    .join("");