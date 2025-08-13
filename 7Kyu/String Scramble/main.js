// String Scramble

// Given a string and an array of indices, rearrange the characters of the string so that each character is placed at the position specified by the corresponding index in the array.

// Example
// input: "abcd", [0, 3, 1, 2]
// output: "acdb"
// Explanation
// The character 'a' is placed at index 0.

// The character 'b' is placed at index 3.

// The character 'c' is placed at index 1.

// The character 'd' is placed at index 2.

// Notes
// The string and the array will be of equal length.

// The string will contain valid characters (A-Z, a-z, or 0-9);
// the array will contain valid indices.


// My Solution
function scramble(str, arr) {
  let res = [];
  for (let i = 0; i < str.length; i++) {
      res[arr[i]] = str[i];
  }
  return res.join('');
};


// Other Solutions
function scramble(str, arr) {
  let output = [];
  arr.forEach((charIdx, i) => output[charIdx] = str[i])
  return output.join('');
};


// 2
function scramble(s, a) {
  return a.map((_,i)=>s[a.indexOf(i)]).join``
};

// 3
const scramble = (string, positions) =>
  positions.reduce(
    (result, target, current) => result + string[positions.indexOf(current)],
    ""
  );