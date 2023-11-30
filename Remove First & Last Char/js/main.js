// Remove Fist & Last Characters

// Create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


// Most Logical Solution
function removeChar(str) {
    return str.slice(1, -1);
}


// Other Solutions
const removeChar = str => str.slice(1,-1)




// 2
function removeChar(str){
    str1 = str.split('');
    str1.shift();
    str1.pop();
    return str1.join('');
}




// 3
function removeChar(str){
    let res = '';
    for (let i = 0; i < str.length; i++) {
      if (i != 0 && i != str.length - 1) {
        res += str[i]
      }
    }
    return res;
}


// 4
function removeChar(str){
    let leng = str.length - 1;
    let cut = str.slice(1, leng);
    return cut
}