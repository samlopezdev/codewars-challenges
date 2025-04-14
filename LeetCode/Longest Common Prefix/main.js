// Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

// My Solution - 0ms ; Beats 100%
const longestCommonPrefix = (strs) => {
  strs.sort();
  let first = strs[0],
    last = strs[strs.length - 1],
    result = "";

  for (let i = 0; i < first.length; i++) {
    if (first[i] === last[i]) result += first[i];
    else break;
  }

  return result;
};

// Other Solutions
var longestCommonPrefix = function (strs) {
  let longestPref = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(longestPref) !== 0) {
      longestPref = longestPref.slice(0, longestPref.length - 1);
      if (!longestPref) {
        return "";
      }
    }
  }

  return longestPref;
};

// 2
var longestCommonPrefix = function (strs) {
  let result = "";
  let word = [...strs[0]];
  for (let j = 0; j < word.length; j++) {
    const isEveryStartsWith = strs.every((str) => str[j] === word[j]);
    if (isEveryStartsWith) {
      result += word[j];
    } else {
      break;
    }
  }

  return result;
};

// 3
var longestCommonPrefix = function (strs) {
  if (strs.length === 1) return strs[0];
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
};
