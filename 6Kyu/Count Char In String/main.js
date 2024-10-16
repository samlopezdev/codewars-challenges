// Count Characters In Your String

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


// My Solution
function count(string) {
    let obj = {}
    
    if (!string) return {};
    
    for (let i = 0; i < string.length; i++)
    {
      let k = string.charAt(i)
      
      obj[k] = (isNaN(obj[k]) ? 1 : obj[k] + 1);
    }
    
    return obj
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