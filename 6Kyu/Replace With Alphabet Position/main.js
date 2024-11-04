// Replace With Alphabet Position

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"



// My Solution
function alphabetPosition(text) {
  return text.toLowerCase().split('')
              .filter( char => char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123)
              .map( letter => letter.charCodeAt(0) - 96)
              .join(' ')
}


// My OTHER Solution
function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
  
  return text.toLowerCase().split('')
              .filter( char => alphabet.indexOf(char) > -1)
              .map( letter => alphabet.indexOf(letter) + 1)
              .join(' ')
}


// Other Solutions
let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');



// 2
function alphabetPosition(text) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    
    return text.toLowerCase()
               .split('')
               .filter(t => letters.indexOf(t) > -1)
               .map(t => letters.indexOf(t)+1 || '')
               .join(' ');
}



// 3
function alphabetPosition(text) {
    const result = [];
    
    for (const e of text.toLowerCase())
      if (e.match(/[a-z]/))
        result.push(e.charCodeAt() - 96);
    
    return result.join(' ');
}



// 4
const alphabetPosition = text =>
    [...text.toLowerCase().replace(/[^a-z]/g, ``)].map(val => val.charCodeAt() - 96).join(` `);
