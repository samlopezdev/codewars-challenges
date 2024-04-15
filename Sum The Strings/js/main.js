// Sum The Strings
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)


// My Solution
function sumStr(a,b) {
    return String(Number(a) + Number(b))
}


// Other Solutions
function sumStr(a,b) {
    return (+a+ +b)+''  
}


// 2
const sumStr = (a, b) => String(+a + +b)


// 3
function sumStr(a,b) {
    return (+a + +b).toString();
}


// 4
function sumStr(a,b) {
    return `${+a + +b}`; 
}


// 5
function sumStr(a,b) {
    if (a === '') {
      a = 0;
    }
    
    if (b === '') {
      b = 0;
    }
    
    return `${parseInt(a) + parseInt(b)}`
}


// 6
function sumStr(a,b) {
    (a =='') ? a = 0 : a = a;
    (b =='') ? b = 0 : b = b
    const sum = parseInt(a) + parseInt(b);
    return sum.toString();
}