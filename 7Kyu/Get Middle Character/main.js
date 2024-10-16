// Get Middle Character

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.



// My solution
function getMiddle(s) {
    let n = s.length / 2
    
    if (s.length % 2 === 0) {
      return `${s[n - 1]}${s[n]}`
    } else {
      return `${s[Math.round(n - 1)]}`
    }
}



// Other Solutions
function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}


// 2
function getMiddle(s) {
    var middle = s.length / 2;
    return (s.length % 2) 
      ? s.charAt(Math.floor(middle))
      : s.slice(middle - 1, middle + 1);
}


// 3
function getMiddle(s) {
  return s.slice((s.length-1)/2, s.length/2+1);
}


// 4
function getMiddle(s) {
  let len = s.length;
  
  if (len % 2) {
    return s[(len - 1) / 2];
  } else {
    return s[len / 2 - 1] + s[len / 2];
  }
}