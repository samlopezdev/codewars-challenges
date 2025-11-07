// Count Characters In Your String

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


// My Solution
// string -> string of english letters. no spaces or symbols. could be empty string. Are uppercase and lowercase considered different occurring characters?
// return -> an object with the letters and the number of times they appear in the string.
function count(string) {
  const result = {}
  
  for (const letter of string) {
    result[letter] ? result[letter]++ : result[letter] = 1
  }
  return result;
}




// Other Solutions
function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
}


// 2
function count (string) {
    var result = {};
    
    for(let i = 0; i < string.length; i++) {
      if(result.hasOwnProperty(string[i])){
        result[string[i]] += 1;
      } else {
        result[string[i]] = 1;
      }
    }
    
    return result;
}


// 3
const count = require('lodash').countBy


// 4
function count (string) {  
    r = {};
    string.split('').forEach(c => r[c] = (r[c] || 0) + 1);
    return r;
}
