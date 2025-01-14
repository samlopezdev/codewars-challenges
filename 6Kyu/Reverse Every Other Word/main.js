// Reverse Every Other Word In The String

// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

// My Solution
// str -> sentence or phrase. letters, spaces, punctuation
// return str with every OTHER word (including punctuation) reversed. "I love you!" -> "I evol you!"
function reverse(str) {
  // split str by ' ', trim out extra spaces?
  // loop thru array, check if index % 2 !== 0?
  // if true, reverse arr[i]

  return str
    .split(" ")
    .map((word, i, a) => (i % 2 !== 0 ? [...word].reverse().join("") : word))
    .join(" ")
    .trim();
}

// Other Solutions
function reverse(string) {
  return string.split` `.map((w, i) => (i & 1 ? [...w].reverse().join`` : w))
    .join` `.trim();
}

// 2
function reverse(str) {
  let arr = str.split(" ");

  for (var i = 1; i < arr.length; i += 2) {
    arr[i] = arr[i].split("").reverse().join("");
  }

  return arr.join(" ").trim();
}

// 3
const reverse = (str) =>
  str
    .trim()
    .split(" ")
    .map((e, i) => (i % 2 == 0 ? e : e.split("").reverse().join("")))
    .join(" ");

// 4
const reverse = (str) =>
  str.trim().length === 0
    ? ""
    : str
        .split(" ")
        .map((e, i) => (i % 2 !== 0 ? [...e].reverse().join("") : e))
        .join(" ");
