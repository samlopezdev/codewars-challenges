// Stop gninnipS My sdroW!

// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"


// My Solution
// words -> string of one or more words separated by spaces. Uppercase & lowercase, No numbers.
// return -> same string, but words longer than 5 char are reversed.
export function spinWords(words: string): string {
    return words.split(" ")
                .map( (word: string) => word.length >= 5 ? word.split("").reverse().join("") : word)
                .join(" ")
}


// Other Solutions
export const spinWords = (words: string): string =>
  words
    .split(" ")
    .map((m) => (m.length >= 5 ? m.split("").reverse().join("") : m))
    .join(" ");


// 2
export function spinWords(words: string): string {
  return words
    .split(" ")
    .map((word) => (word.length >= 5 ? [...word].reverse().join("") : word))
    .join(" ");
}


// 3
export function spinWords(words: string): string {
  const reverseWord = (word: string) =>
    word.length < 5 ? word : [...word].reverse().join("");

  return words.split(" ").map(reverseWord).join(" ");
}


// 4
const reverseString = (str: string): string => str.split("").reverse().join("");

export const spinWords = (sentence: string): string =>
  sentence
    .split(" ")
    .map((word) => (word.length < 5 ? word : reverseString(word)))
    .join(" ");