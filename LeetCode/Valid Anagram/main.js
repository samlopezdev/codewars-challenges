// Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:
// Input: s = "rat", t = "car"

// Output: false

// Constraints-

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// My Solution - 31ms, Beats 22%
const isAnagram = (s, t) => {
  const sortedS = [...s].sort().join("");
  const sortedT = [...t].sort().join("");

  return sortedS === sortedT;
};

// Other Solutions
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  s = s.split("").sort();
  t = t.split("").sort();

  for (var i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) return false;
  }

  return true;
};

// 2
var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

// 3
// Declare MOD, hash1 & hash2 equal to 1, and the prime numbers array.
function isAnagram(
  s: string,
  t: string,
  hash1 = 1,
  hash2 = 1,
  MOD = Math.pow(2, 31) - 1
): boolean {
  const prime = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101,
  ];

  for (let i = 0; i < Math.max(s.length, t.length); i++) {
    // Iterate over the longest string
    let c1 = s.charCodeAt(i) - 97; // Get ASCII value decremented by 97 and use it to map the
    let c2 = t.charCodeAt(i) - 97; // Letter with the value of the prime number at that index
    hash1 = (hash1 * prime[c1]) % MOD; // Multiply the hash by the corresponding prime number
    hash2 = (hash2 * prime[c2]) % MOD;
  }
  return hash1 === hash2; // Compare both hashes and return true if equal, or false otherwise
}
