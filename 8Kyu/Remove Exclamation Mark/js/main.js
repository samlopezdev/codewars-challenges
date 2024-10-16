// Exclamation Mark Series #1: Remove Exclamation Mark

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"


// My Solution
function remove (string) {
    let strArr = string.split('');
    if (strArr[strArr.length - 1] === '!') {
      strArr.pop(strArr[strArr.length - 1])
    } 
    return strArr.join('')
}


// Other Solution
const remove = s => s.replace(/!$/, '');


// 2
function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
}


// 3
function remove(s){
    return s[s.length - 1] == '!' ? s.slice(0, -1) : s;
}


// 4
function remove(s){
    return s.replace(/\!$/,"")
}


// 5
function remove(s){
    return s.charAt(s.length - 1) === '!' ? s.slice(0, -1) : s; 
}