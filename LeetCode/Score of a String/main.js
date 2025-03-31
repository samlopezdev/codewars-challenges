// Score of a String
You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

Return the score of s.

Example 1:
Input: s = "hello"
Output: 13

Explanation:

The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.

Example 2:
Input: s = "zaz"

Output: 50

Explanation:

The ASCII values of the characters in s are: 'z' = 122, 'a' = 97. So, the score of s would be |122 - 97| + |97 - 122| = 25 + 25 = 50.

Constraints:
2 <= s.length <= 100
s consists only of lowercase English letters.

// My Solution - 1ms, Beats 62%
const scoreOfString = (s) => {
  let absdiff = 0;

  for (let i = 0; i < s.length - 1; i++) {
    absdiff += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
  }

  return absdiff;
};


// Other Solutions
const scoreOfString = (s, [first, ...tail] = [...s].map(c => c.charCodeAt(0))) =>
    tail.reduce(([score, prev], v) => [score + Math.abs(prev - v), v], [0, first])[0];

// 2
var scoreOfString = function (s) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const initial = 97;
  const lenS = s.length;

  let sum = 0;
  for (let i = 0; i < lenS - 1; i++) {
    sum += Math.abs(
      initial + alphabet.indexOf(s[i]) - (initial + alphabet.indexOf(s[i + 1]))
    );
  }

  return sum;
};