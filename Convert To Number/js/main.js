// Convert a String To a Number

// Transform a string into a Number. All inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7


// My Solution
function stringToNumber(str) {
    return Number(str)
}


// Other Solutions:
function stringToNumber(str) {
    return parseInt(str)
}


// 2
const stringToNumber = str => parseInt(str)


// 3
var stringToNumber = function(str){
    return +str;
}