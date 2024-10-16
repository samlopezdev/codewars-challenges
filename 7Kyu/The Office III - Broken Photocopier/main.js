// The Office III - Broken Photocopier
// The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

// Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

// Given a string of binary, return the version the photocopier gives you as a string.



// My Solution
function broken(x){
    let fixed = ''
    for (let i = 0; i < x.length; i++) {
      x[i] === '1' ? fixed += '0' : fixed += '1'
    }
    return fixed
}


// Other Solutions
function broken(x){
    return x.split('').map(a => a == "0" ? "1" : "0").join('');
}


// 2
const broken = x =>
    x.replace(/\d/g, val => val ^ 1);


// 3
//PSEUDOCODE:
// Create a function that take in a string of binary
// convert provided string of binary into array of binary 
// iterate over array and check if element inside array is either '1' or '0'
// if element is '1' change it to '0' and if element is '0' change it to '1'
// convert array of binary to string of binary 
// return string of binary after changing '1' to '0' and vice versa

//SOLUTION:
function broken(x) {
    return x.split('').map(binary => binary === '1' ? '0' : binary === '0' ? '1' : binary).join('')
}


// 4
function broken(x) {
    let result = "";
    for (let n of x) {
      n === "0" ? result += "1" : result += "0";
    }
    return result;
  }