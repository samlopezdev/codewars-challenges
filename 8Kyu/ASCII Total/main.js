// ASCII Total

// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

// Examples:

// uniTotal("a") == 97
// uniTotal("aaa") == 291


// My Solution
function uniTotal(string) {
  return string === ""
    ? 0
    : string
        .split("")
        .reduce((total, letter) => total + letter.charCodeAt(0), 0);
}


// Other Solutions
function uniTotal(str) {
    return str.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
}


// 2
function uniTotal(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i);
    }
    return sum;
}


// 3
const uniTotal = (str) =>
  [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);