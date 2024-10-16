// Make Upper Case
// Write a function which converts the input string to uppercase.


// My Solution:
function makeUpperCase(str) {
    return str.toUpperCase()
}



// Other Solutions
const makeUpperCase = str => str.toUpperCase()



// 2
function makeUpperCase(str) {
    return str.split('').map(el => el.toUpperCase()).join('')
}



// 3
function makeUpperCase(str) {
    let lower = 'abcdefghijklmnopqrstuvwxyz', 
        upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 
        output = '';
    for (let i = 0; i <= str.length -1; i++) {   
      for (let j = 0; j <= lower.length -1; j++) {
        if (str[i] === lower[j]) {output = output + upper[j]; break;}
        if (j === lower.length -1 && str[i] !== lower[j]) output = output + str[i];
      }
    }
    return output;
}



// 4
const alphaLower = 'abcdefghijklmnopqrstuvwxyz'
const alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const makeUpperCase = $ => [...$].map(
  $ => ($$ = alphaLower.indexOf($)) === -1 ? $ : alphaUpper[$$]
).join('');