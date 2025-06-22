// Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// My Solution
function isPalindrome(s: string): boolean {
  // strip s of all symbols, spaces, punc, and spaces.
  // convert s to all lowercase
  // check if s is the same reversed
  const alpha = "abcdefghijklmnopqrstuvwxyz0123456789";
  const filtered = s
    .toLowerCase()
    .split("")
    .filter((char: string) => alpha.includes(char))
    .join("");
  const reversed = filtered.split("").reverse().join("");

  return filtered === reversed;
}

// s -> string with uppercase/lowercase characters, punctuation, & spaces. Empty
// return true or false. Is it a palindrome. True if empty.


// Other Solutions
function isPalindrome(s: string): boolean {
  const cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
};


// 2
function isPalindrome(s: string): boolean {
  const charString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let left = 0;
  let right = charString.length-1;

  while(left < right){
      if(charString[left++] !== charString[right--]) return false;
  }

  return true;
};