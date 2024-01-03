// Do You Speak 'English'?


// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.



// My Solution:
function spEng(sentence){
    return sentence.toLowerCase().includes('english')
}



// Other Solutions:
function spEng(s){
    return /english/i.test(s)
}



// 2
function spEng(sentence){
    return sentence.match(/english/gi) !== null
}



// 3
const spEng = sentence => !(sentence.toLowerCase().indexOf('english') == -1) 