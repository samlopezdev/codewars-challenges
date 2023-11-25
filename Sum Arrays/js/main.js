// DETAILS:
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// Testing loop and math operations.



// MOST LOGICAL ANSWER:
function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}


// OTHER SOLUTIONS:

sum = function (numbers) {
    "use strict";
    let total = 0;
    for(var i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
};





// 2
const sum = n => n.reduce((a,b) => a+b, 0);


const sum = numbers => numbers.reduce((sum, number) => sum += number, 0)





// 3
function sum (numbers) {
    if(numbers.length === 0){
      return 0;
    }
    else {
      let sumNumbers = 0;
      for (e of numbers) {
        sumNumbers += e;
      }
      return sumNumbers;
    }    
  }
