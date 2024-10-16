// Doubl Char

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "


// Logical Solution
const doubleChar = (str) => str.split("").map(c => c + c).join("")


// Other Solutions
function doubleChar(str) {
    return str.split("").map(function (c) {
      return c + c;
    }).join("");
}


// 2
const doubleChar = str => (str.split('').map(e => e + e)).join('')


// 3
function doubleChar(str) {
    let res = '';
    for (let i in str) {
      res += str[i].repeat(2);
    }
    return res;
}


// 4
function doubleChar(str) {
    let doubleChar=''

    for (let i = 0; i < str.length; i++){
     doubleChar += str[i] + str[i];
    }

    return doubleChar
}