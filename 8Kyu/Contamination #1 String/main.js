// Contamination #1 - String

// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"


// My Solution
function contamination(text, char){
    return char.repeat(text.length)
}


// Other Solution
function contamination(text, char){
    return text.replace(/./g, char);
}


// 2
function contamination(text, char) {
    return text.split("").fill(char).join("");
}


// 3
var contamination = (text, char) => [...text].map(e => e = char).join('')


// 4
function contamination(text, char){
    let result = '';
    
    if (!text || !char) {
      return result;
    }
    
    for (const letter of text) {
      result += char;
    }
    
    return result;
}