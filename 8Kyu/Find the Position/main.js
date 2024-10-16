// Find the Position

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"


// My Solution
function position(letter){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const position = alphabet.indexOf(letter) + 1
    
    return `Position of alphabet: ${position}`
}



// Other Solutions
function position(letter){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}


// 2
function position(letter) {
    return `Position of alphabet: ${letter.charCodeAt(0) - 96}`
}


// 3
function position(alphabet){
    var letters = [" ", "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var placed = letters.indexOf(alphabet)
    return "Position of alphabet:" + " " + placed;
}



// 4
const position = letter => `Position of alphabet: ${"&abcdefghijklmnopqrstuvwxyz".indexOf(letter)}`