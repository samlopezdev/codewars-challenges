// Sum Mixed Array

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


// My Solution
function sumMix(x){
    return x.reduce( (a, b) => +a + +b, 0)
}


// Other Solutions
function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
}


// 2
const sumMix = (arr) => arr.reduce((sum, n) => sum + (+n), 0)


// 3
function sumMix(x){
    let result = 0;
    for (let n of x) {
      result += parseInt(n);
    }
    return result;
}


// 4
function sumMix(x){
    var somme = 0;
    for (i = 0; i<x.length; i++) {
      somme += Number(x[i]);
    }
    return somme;
}


// 5
function sumMix(x){
    let sum = 0;
    for(let num of x) {
       typeof num === "string" ? sum += Number(num) : sum += num;
    }
    return sum;
}