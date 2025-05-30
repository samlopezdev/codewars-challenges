// Count Letters & Digits

// Create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1

// My Solution
// input -> jumbled of letters (uppercase/lowercase), numbers, symbols
// return -> number of total -letters & digits-
export function countLettersAndDigits(input: string): number {
  let alpha = "abcdefghijklmnopqrstuvwxyz1234567890",
    total = 0,
    strArr = input.toLowerCase().split("");

  for (let i = 0; i < strArr.length; i++) {
    if (alpha.includes(strArr[i])) total++;
  }

  return total;
}


// Other Solutions
export function countLettersAndDigits(input: string): number {
  return (input.match(/[a-z0-9]/gi) || []).length;
}


// 2
export function countLettersAndDigits(input: string): number {
  return input.replace(/[^A-Za-z0-9]/g, "").length;
}


// 3
export function countLettersAndDigits(input: string): number {
  input = input.toLowerCase();
  let count: number = 0;

  for (let i = input.length - 1; i >= 0; i--) {
    if (
      (input[i] >= "a" && input[i] <= "z") ||
      (input[i] >= "0" && input[i] <= "9")
    )
      count++;
  }

  return count;
}