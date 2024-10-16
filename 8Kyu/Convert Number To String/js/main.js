// Convert Number to a String

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"


// My Solution
function numberToString(num) {
    return num.toString();
}


// Other Solutions
const numberToString = num => `${num}`


// 2
function numberToString(num) {
    return String(num);
}


// 3
function numberToString(num) {
    return ''+num;
}


// 4
const numberToString = num => String(num)