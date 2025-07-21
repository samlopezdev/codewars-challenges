// Is Subsequence

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 
// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false
 

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.


// My Solution: 0ms | Beats 100.00%
// s & t -> strings w/ a mix of lowercase letters. No empty strings. No numbers or spaces.
// return true or false. If letters in s can be found (in order), in t.
function isSubsequence(s: string, t: string): boolean {
// count variable to keep track of s index
    let count = 0

    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[count]) count++
    }

    return count === s.length
}


// Other Solutions
function isSubsequence1(s: string, t: string): boolean {
    let count = 0 // constant space - count is a number
    let idx = 0 // constant space - index changes but always one number
    if (s.length > t.length) return false
    for (let i: number = 0; i < s.length; i++) { // iterate through s once O(m) m = s.length
        for (let j: number = idx; j < t.length; j++) { // iterate through t once O(n) n = t.length
            if (s[i] == t[j]) {
                count++
                idx = j + 1
                break
            }
        }
    }
    return count == s.length
};


// 2
const isSubsequence = (s: string, t: string): boolean => {
  const counter = t
    .split("")
    .reduce<number>((acc, el) => (s[acc] === el ? (acc += 1) : acc), 0);

  return counter === s.length;
};


// 3
function isSubsequence(s: string, t: string): boolean {
  // s can't be longer than t
  if(s.length > t.length) return false;
  
  let idxCharacter: number = -1;
  for(let character of s) {
    /**
     * Gets the index of the first occurrence from the index of the last searched character + 1,
     * the +1 is to avoid getting the previous occurrence. 
     */
    idxCharacter = t.indexOf(character, idxCharacter + 1);
    if(idxCharacter === -1) return false;
  }

  return true;
};
