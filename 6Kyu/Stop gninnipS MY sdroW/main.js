// Stop gninnipS My sdroW!

// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"

// My Solution

// string -> letters & spaces. no punctuation or symbols?
// return -> string with words w/ 5 or more letters are reversed
function spinWords(string) {
  string = string.split(" ");

  for (let i = 0; i < string.length; i++) {
    if (string[i].length >= 5) {
      string[i] = string[i].split("").reverse().join("");
    }
  }

  return string.join(" ");
}

// Other Solutions
const spinWords = (string) => {
  string = string.split(" ");
  for (let i = 0; i < string.length; i++) {
    if (string[i].length >= 5) {
      string[i] = string[i].split("").reverse().join("");
    }
  }

  return string.join(" ");
};

// 2
const spinWords = (string) => {
  return string
    .split(" ")
    .map((word) =>
      word.length >= 5 ? word.split("").reverse().join("") : word
    )
    .join(" ");
};

// 3
function spinWords(str) {
  wordsArray = str.split(" ");
  wordsArray.forEach(function (word, index) {
    if (word.length > 4) {
      wordsArray[index] = word.split("").reverse().join("");
    }
  });
  return wordsArray.join(" ");
}
