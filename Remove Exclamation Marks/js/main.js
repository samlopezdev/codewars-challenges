// Remove Exclamation Marks

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


// My Solution
function removeExclamationMarks(s) {
    return s.replaceAll('!', '');
}



// Other Solutions
function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
}


// 2
function removeExclamationMarks(s) {
    return s.split('!').join('');
}



// 3
const removeExclamationMarks = (s) => {
    return s.split('').filter((letter) => letter !== '!').join('')
}



// 4
function removeExclamationMarks(s) {
    let res = '';
    for (let i = 0; i < s.length; i++){
      if(s[i] !== '!'){ res += s[i];}
    }
    return res;
}