// Anagram Detection

// An anagram is the result of rearranging the letters of a word to produce a new word.

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"


// My Solution
var isAnagram = function(test, original) {
    let testSorted = test.toLowerCase().split("").sort().join("")
    let originalSorted = original.toLowerCase().split("").sort().join("")
    return originalSorted === testSorted
};


// Other Solutions
var isAnagram = function(test, original) {
    var t = test.toLowerCase().split('').sort().join('');
    var o = original.toLowerCase().split('').sort().join('');
    return (t==o)?true:false;
};


// 2
String.prototype.sortLetters = function() {
    return this.toLowerCase().split('').sort().join('');
}
  
  var isAnagram = function(test, original) {
    return test.sortLetters() == original.sortLetters();
};


var isAnagram = function(test, original) {
    if (test.length != original.length) return false
    
    const map = new Int32Array(26)
    
    for (let i = test.length - 1; i >= 0; --i) {
       ++map[(test.charCodeAt(i) & 31) - 1]
       --map[(original.charCodeAt(i) & 31) - 1]
    }
      
    return map.every(count => count == 0)
};
