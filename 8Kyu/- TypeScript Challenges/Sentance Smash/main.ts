// Sentance Smash

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
// Assumptions
// You can assume that you are only given words.
// You cannot assume the size of the array.
// You can assume that you do get an array.

// My Solution
export const smash = (words: string[]): string => words.join(" ");

// Other Solutions
export function smash(words: string[]): string {
  let output: string = "";

  for (let i: number = 0; i < words.length; i++) {
    if (i != words.length - 1) {
      output += words[i] + " ";
    } else if (i == words.length - 1) {
      output += words[i];
    }
  }
  return output;
}

// 2
export function smash (words: string[]): string {
   return words.map((word) => ' ' + word ).join('').trim()
};

// 3
export function smash(words: string[]): string {
  const newStr = words.toString();
  return newStr.replaceAll(",", " ");
}
