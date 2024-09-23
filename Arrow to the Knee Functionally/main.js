// Take an Arrow to the Knee, Functionally

// You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

// Examples
// These are example of how to convert a number to an ascii Character:
// Javascript => String.fromCharCode(97) // a
// C# => Tools.FromCharCode(97) // a



// My Solution
var ArrowFunc = function(arr) {
    return arr.map( num => String.fromCharCode(num)).join('');
}


// Other Solutions
const ArrowFunc = (arr) => String.fromCharCode(...arr);


// 2
var ArrowFunc = arr => String.fromCharCode.apply(String, arr);


// 3
var ArrowFunc = function(arr) {
    return String.fromCharCode(...arr)
}