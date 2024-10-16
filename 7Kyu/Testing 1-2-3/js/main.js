// Testing 1-2-3

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]


// My Solution
var number=function(array){
    let newArray = []
    if (array.length === 0) {
      return array
    } else {
      for (let i = 0; i < array.length; i++) {
        newArray.push(`${i + 1}: ${array[i]}`)
      }
    }
    return newArray
}


// Other Solutions
var number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
}


// 2
const number = array => array.map((n, i) => `${i + 1}: ${n}`);



// 3
var number=function(array){
    if (array.length == 0) return [];
    
    for (let i=0; i<array.length; ++i)
      array[i] = (i+1) + ': ' + array[i];
      
    return array;
}