// Vowel Remover

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata


// My Solution
function shortcut(string){
    return string.replace(/[aeiou]/g,'')
}


// Other Solutions
function shortcut (string) {
    return string
      .split('')
      .filter(str => !'aeiou'.includes(str))
      .join('')
}


// 2
function shortcut(str) {
    return str.split('').filter(function(e) {
      return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
    }).join('')
}


// 3
const shortcut = string => string.replace(/[aeiou]/g, '')


// 4
function shortcut(string){
    let vowels = 'aeiou';
    
    let result = [];
    
      for( let i = 0; i < string.length; i++){
      if(!vowels.includes(string[i])){
        result.push(string[i]);
      }
    }
      return result.join('');
}