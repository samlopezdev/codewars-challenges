// CamelCase Method

// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"

// My Solution
// str -> string of words/letters separated by spaces.
// return -> str in camel case: First letter of every word capitolized, no spaces.
export function camelCase(str: string): string {
  if (str === "") return "";
  return str
    .split(" ")
    .map((word:string) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}


// Other Solutions
export function camelCase(str: string): string {
  if (!str) {
    return "";
  }

  return str
    .toLowerCase()
    .split(" ")
    .map((word: string) => word[0].toUpperCase() + word.slice(1))
    .join("");
}

// 2
export function camelCase(str: string): string {
  let isFirstLetter: boolean = true;
  let resultStr: string = "";

  for (const char of str) {
    if (char === " ") {
      isFirstLetter = true;
      continue;
    }

    resultStr += isFirstLetter ? char.toUpperCase() : char;
    isFirstLetter = false;
  }

  return resultStr;
}