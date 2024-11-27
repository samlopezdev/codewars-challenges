// First Letter to Appear Twice

// Given a string s consisting of lowercase English letters, return the first letter to appear twice.
// A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
// s will contain at least one letter that appears twice.
 
// Example 1:
// Input: s = "abccbaacz"
// Output: "c"
// Explanation:
// The letter 'a' appears on the indexes 0, 5 and 6.
// The letter 'b' appears on the indexes 1 and 4.
// The letter 'c' appears on the indexes 2, 3 and 7.
// The letter 'z' appears on the index 8.
// The letter 'c' is the first letter to appear twice, because out of all the letters the index of its second occurrence is the smallest.

// Example 2:
// Input: s = "abcdd"
// Output: "d"
// Explanation:
// The only letter that appears twice is 'd' so we return 'd'.
 

// Constraints:
// 2 <= s.length <= 100
// s consists of lowercase English letters.
// s has at least one repeated letter.


// My Solution
// s -> string of lowercase letters
// return -> the first letter that appears twice. 'a'
const repeatedCharacter = function(s) {
    // create map of letters seen so far
    const seenLetters = {}
    // loop thru letters, & check if we've seen letter
    for (const letter of s) {
        // check if letter is in map
        if (seenLetters[letter]) return letter
        // or enter letter in map
        else seenLetters[letter] = true
    }
};
console.log( repeatedCharacter("abccbaacz"), 'c')
console.log( repeatedCharacter("abcdd"), 'd')


// Other Solutions
const repeatedCharacter = s => {
    const set = new Set();
    
    for (let i = 0; i < s.length; i += 1) {
        const currentLetter = s[i]
        if(set.has(currentLetter)) {
             return currentLetter 
        }
        set.add(currentLetter);
    }
};


// 2
var repeatedCharacter = function(s) {
    let arr = []
    for (let i of s) {
        if (!arr.includes(i)) {
            arr.push(i)
        }
        else {
            return i
        }
    }
}


// 3
var repeatedCharacter = function(s) {
    let myMap = new Map();
    for(let i = 0; i < s.length; i++) {
        if (myMap.has(s[i].toLowerCase())) {
            return s[i]
        }
        myMap.set(s[i],i)
    }
    return 'notfound';
};