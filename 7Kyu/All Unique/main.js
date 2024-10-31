// All Unique

// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.



// My Solution
let hasUniqueChars = (str) => new Set(str).size === str.length;



// Other Solutions
function hasUniqueChars(str){
    return str.split('').every((v, i, arr) => arr.indexOf(v) == i);
}


//2
function hasUniqueChars(str) {
    for (var i = 0; i < str.length; i++) {
      if (str.lastIndexOf(str.charAt(i)) !== i) return false
    }
    
    return true
}


//3
const hasUniqueChars = str => {
    for (let c of str) {
      if (str.indexOf(c) !== str.lastIndexOf(c)) return false
    }
  
    return true
}