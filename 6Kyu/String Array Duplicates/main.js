// String Array Duplicates

// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// My Solution
function dup(array) {
  return array.map((word) =>
    word
      .split("")
      .filter((letter, index) => letter !== word[index + 1])
      .join("")
  );
}

// Other Solutions
function dup(s) {
  return s.map((x) => x.replace(/(.)\1+/g, "$1"));
}

// 2
function dup(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(removeDuplicate(arr[i]));
  }
  return result;
}

function removeDuplicate(str) {
  let word = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] !== str[i]) {
      word += str[i];
    }
  }
  return word;
}

// 3
function dup(s) {
  const newS = [];
  for (const str of s) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== str[i - 1]) {
        newStr += str[i];
      }
    }
    newS.push(newStr);
  }
  return newS;
}
