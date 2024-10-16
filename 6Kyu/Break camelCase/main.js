// Break camelCase

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


// Logical Solutions
const solution = (string) => {
    return string.split('')
            .map(letter => letter == letter.toUpperCase() ? letter = ` ${letter}` : letter)
            .join('')
}


// Other Solutions
function solution(string) {
    let res = "";
    let letters = string.split("");
    letters.forEach(letter=>{
      if(letter.toUpperCase() == letter)
        res+=" "+letter
      else
        res+=letter
    })
    return res;
}


//2
function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
}


// 3
function solution(string) {
    string = string.split('').map( el => {
        if (el === el.toUpperCase()) {
            el = ' ' + el
        }
        return el
        })
    return string.join('')
}


// 4
const solution = string => string.replace(/[A-Z]/g, ' $&');