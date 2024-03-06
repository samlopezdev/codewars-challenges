// Binary Addition

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)


// My Solution
function addBinary(a,b) {
    let sum = a + b
    return sum.toString(2)
}


// Other Solutions
function addBinary(a,b){
    return Number(a + b).toString(2)
}


// 2
const addBinary = (a, b) => (a + b).toString(2)


// 3
function addBinary(a,b) {
    var c = a + b;
    var res = '';
    while (c >= 1) {
      var res = c % 2 + res;
      c = Math.floor(c / 2);
    }
    return res;
}


// 4
function addBinary(a,b){
    if (a.isIntiger&& b.isIntiger){ //if all argument is intiger digits
      return (a+b).toSting(2); //ok , return a string
    } else {
      return (parseInt(a,10)+parseInt(b,10)).toString(2); //if some of argument send as a string - parse values to 10 digits int. values and return as a binary 
    }
}



// 5
function decimalToBinary(decimal){
    return (decimal >>> 0).toString(2);
  }
  
function addBinary(a,b) {
    return decimalToBinary(a+b);
}