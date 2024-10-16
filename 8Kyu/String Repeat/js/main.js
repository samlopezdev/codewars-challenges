// String Repeat

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"



// My Solution:
function repeatStr (n, s) {
    return s.repeat(n);
}



// Other Solutions:
function repeatStr (n, s) {
    let repeatedStr = ""
    
    for (let i = 1; i <= n; i++) {
      repeatedStr += s
    }
    return repeatedStr
}



// 2
const repeatStr = (n, s) => s.repeat(n)



// 3
function repeatStr (n, s) {
    var myString = '';
    
    while(n > 0) {
      myString += s;
      n--;
    }
    return myString;
}


// 4
let repeatStr = (n, s) => `${s.repeat(n)}`;