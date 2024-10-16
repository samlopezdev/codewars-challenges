// Is It A Palindrome?

// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.


// My Solution
function isPalindrome(x) {
    let reversed = x.split("").reverse().join("").toLowerCase()
    return reversed === x.toLowerCase()
}


// Other Solutions
const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}


// 2
const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();


// 3
function isPalindrome(x) {
    return x.toLowerCase() === x.toLowerCase().split('').reverse().join('');
}


// 4
function isPalindrome(line) {
    line = line.toString().toLowerCase();
  
    for (var left = 0, right = line.length - 1; left < right;) {
      if (line.charAt(left++) !== line.charAt(right--)) {
        return false;
      }
    }
  
    return true;
}